(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var Vf={exports:{}},go={},Hf={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function sy(){if(Pg)return Rt;Pg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function m(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function x(F,ne,Be){this.props=F,this.context=ne,this.refs=b,this.updater=Be||y}x.prototype.isReactComponent={},x.prototype.setState=function(F,ne){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ne,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=x.prototype;function A(F,ne,Be){this.props=F,this.context=ne,this.refs=b,this.updater=Be||y}var R=A.prototype=new S;R.constructor=A,M(R,x.prototype),R.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(F,ne,Be){var We,ze={},he=null,Me=null;if(ne!=null)for(We in ne.ref!==void 0&&(Me=ne.ref),ne.key!==void 0&&(he=""+ne.key),ne)U.call(ne,We)&&!O.hasOwnProperty(We)&&(ze[We]=ne[We]);var Se=arguments.length-2;if(Se===1)ze.children=Be;else if(1<Se){for(var Fe=Array(Se),Je=0;Je<Se;Je++)Fe[Je]=arguments[Je+2];ze.children=Fe}if(F&&F.defaultProps)for(We in Se=F.defaultProps,Se)ze[We]===void 0&&(ze[We]=Se[We]);return{$$typeof:s,type:F,key:he,ref:Me,props:ze,_owner:L.current}}function I(F,ne){return{$$typeof:s,type:F.type,key:ne,ref:F.ref,props:F.props,_owner:F._owner}}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var ne={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Be){return ne[Be]})}var Z=/\/+/g;function me(F,ne){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):ne.toString(36)}function ge(F,ne,Be,We,ze){var he=typeof F;(he==="undefined"||he==="boolean")&&(F=null);var Me=!1;if(F===null)Me=!0;else switch(he){case"string":case"number":Me=!0;break;case"object":switch(F.$$typeof){case s:case e:Me=!0}}if(Me)return Me=F,ze=ze(Me),F=We===""?"."+me(Me,0):We,P(ze)?(Be="",F!=null&&(Be=F.replace(Z,"$&/")+"/"),ge(ze,ne,Be,"",function(Je){return Je})):ze!=null&&(V(ze)&&(ze=I(ze,Be+(!ze.key||Me&&Me.key===ze.key?"":(""+ze.key).replace(Z,"$&/")+"/")+F)),ne.push(ze)),1;if(Me=0,We=We===""?".":We+":",P(F))for(var Se=0;Se<F.length;Se++){he=F[Se];var Fe=We+me(he,Se);Me+=ge(he,ne,Be,Fe,ze)}else if(Fe=m(F),typeof Fe=="function")for(F=Fe.call(F),Se=0;!(he=F.next()).done;)he=he.value,Fe=We+me(he,Se++),Me+=ge(he,ne,Be,Fe,ze);else if(he==="object")throw ne=String(F),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Me}function W(F,ne,Be){if(F==null)return F;var We=[],ze=0;return ge(F,We,"","",function(he){return ne.call(Be,he,ze++)}),We}function ie(F){if(F._status===-1){var ne=F._result;ne=ne(),ne.then(function(Be){(F._status===0||F._status===-1)&&(F._status=1,F._result=Be)},function(Be){(F._status===0||F._status===-1)&&(F._status=2,F._result=Be)}),F._status===-1&&(F._status=0,F._result=ne)}if(F._status===1)return F._result.default;throw F._result}var Q={current:null},J={transition:null},fe={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:J,ReactCurrentOwner:L};function ce(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:W,forEach:function(F,ne,Be){W(F,function(){ne.apply(this,arguments)},Be)},count:function(F){var ne=0;return W(F,function(){ne++}),ne},toArray:function(F){return W(F,function(ne){return ne})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Rt.Component=x,Rt.Fragment=t,Rt.Profiler=a,Rt.PureComponent=A,Rt.StrictMode=i,Rt.Suspense=d,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Rt.act=ce,Rt.cloneElement=function(F,ne,Be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var We=M({},F.props),ze=F.key,he=F.ref,Me=F._owner;if(ne!=null){if(ne.ref!==void 0&&(he=ne.ref,Me=L.current),ne.key!==void 0&&(ze=""+ne.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(Fe in ne)U.call(ne,Fe)&&!O.hasOwnProperty(Fe)&&(We[Fe]=ne[Fe]===void 0&&Se!==void 0?Se[Fe]:ne[Fe])}var Fe=arguments.length-2;if(Fe===1)We.children=Be;else if(1<Fe){Se=Array(Fe);for(var Je=0;Je<Fe;Je++)Se[Je]=arguments[Je+2];We.children=Se}return{$$typeof:s,type:F.type,key:ze,ref:he,props:We,_owner:Me}},Rt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},Rt.createElement=w,Rt.createFactory=function(F){var ne=w.bind(null,F);return ne.type=F,ne},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(F){return{$$typeof:f,render:F}},Rt.isValidElement=V,Rt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ie}},Rt.memo=function(F,ne){return{$$typeof:h,type:F,compare:ne===void 0?null:ne}},Rt.startTransition=function(F){var ne=J.transition;J.transition={};try{F()}finally{J.transition=ne}},Rt.unstable_act=ce,Rt.useCallback=function(F,ne){return Q.current.useCallback(F,ne)},Rt.useContext=function(F){return Q.current.useContext(F)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(F){return Q.current.useDeferredValue(F)},Rt.useEffect=function(F,ne){return Q.current.useEffect(F,ne)},Rt.useId=function(){return Q.current.useId()},Rt.useImperativeHandle=function(F,ne,Be){return Q.current.useImperativeHandle(F,ne,Be)},Rt.useInsertionEffect=function(F,ne){return Q.current.useInsertionEffect(F,ne)},Rt.useLayoutEffect=function(F,ne){return Q.current.useLayoutEffect(F,ne)},Rt.useMemo=function(F,ne){return Q.current.useMemo(F,ne)},Rt.useReducer=function(F,ne,Be){return Q.current.useReducer(F,ne,Be)},Rt.useRef=function(F){return Q.current.useRef(F)},Rt.useState=function(F){return Q.current.useState(F)},Rt.useSyncExternalStore=function(F,ne,Be){return Q.current.useSyncExternalStore(F,ne,Be)},Rt.useTransition=function(){return Q.current.useTransition()},Rt.version="18.3.1",Rt}var Ng;function Ih(){return Ng||(Ng=1,Hf.exports=sy()),Hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function ay(){if(Lg)return go;Lg=1;var s=Ih(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var g,_={},m=null,y=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(y=d.ref);for(g in d)i.call(d,g)&&!o.hasOwnProperty(g)&&(_[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:y,props:_,_owner:a.current}}return go.Fragment=t,go.jsx=u,go.jsxs=u,go}var Ig;function oy(){return Ig||(Ig=1,Vf.exports=ay()),Vf.exports}var z=oy(),Kl={},Gf={exports:{}},ri={},Wf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function ly(){return Dg||(Dg=1,(function(s){function e(J,fe){var ce=J.length;J.push(fe);e:for(;0<ce;){var F=ce-1>>>1,ne=J[F];if(0<a(ne,fe))J[F]=fe,J[ce]=ne,ce=F;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var fe=J[0],ce=J.pop();if(ce!==fe){J[0]=ce;e:for(var F=0,ne=J.length,Be=ne>>>1;F<Be;){var We=2*(F+1)-1,ze=J[We],he=We+1,Me=J[he];if(0>a(ze,ce))he<ne&&0>a(Me,ze)?(J[F]=Me,J[he]=ce,F=he):(J[F]=ze,J[We]=ce,F=We);else if(he<ne&&0>a(Me,ce))J[F]=Me,J[he]=ce,F=he;else break e}}return fe}function a(J,fe){var ce=J.sortIndex-fe.sortIndex;return ce!==0?ce:J.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],h=[],g=1,_=null,m=3,y=!1,M=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(J){for(var fe=t(h);fe!==null;){if(fe.callback===null)i(h);else if(fe.startTime<=J)i(h),fe.sortIndex=fe.expirationTime,e(d,fe);else break;fe=t(h)}}function P(J){if(b=!1,R(J),!M)if(t(d)!==null)M=!0,ie(U);else{var fe=t(h);fe!==null&&Q(P,fe.startTime-J)}}function U(J,fe){M=!1,b&&(b=!1,S(w),w=-1),y=!0;var ce=m;try{for(R(fe),_=t(d);_!==null&&(!(_.expirationTime>fe)||J&&!B());){var F=_.callback;if(typeof F=="function"){_.callback=null,m=_.priorityLevel;var ne=F(_.expirationTime<=fe);fe=s.unstable_now(),typeof ne=="function"?_.callback=ne:_===t(d)&&i(d),R(fe)}else i(d);_=t(d)}if(_!==null)var Be=!0;else{var We=t(h);We!==null&&Q(P,We.startTime-fe),Be=!1}return Be}finally{_=null,m=ce,y=!1}}var L=!1,O=null,w=-1,I=5,V=-1;function B(){return!(s.unstable_now()-V<I)}function Z(){if(O!==null){var J=s.unstable_now();V=J;var fe=!0;try{fe=O(!0,J)}finally{fe?me():(L=!1,O=null)}}else L=!1}var me;if(typeof A=="function")me=function(){A(Z)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,W=ge.port2;ge.port1.onmessage=Z,me=function(){W.postMessage(null)}}else me=function(){x(Z,0)};function ie(J){O=J,L||(L=!0,me())}function Q(J,fe){w=x(function(){J(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ie(U))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(J){switch(m){case 1:case 2:case 3:var fe=3;break;default:fe=m}var ce=m;m=fe;try{return J()}finally{m=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,fe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ce=m;m=J;try{return fe()}finally{m=ce}},s.unstable_scheduleCallback=function(J,fe,ce){var F=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?F+ce:F):ce=F,J){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ce+ne,J={id:g++,callback:fe,priorityLevel:J,startTime:ce,expirationTime:ne,sortIndex:-1},ce>F?(J.sortIndex=ce,e(h,J),t(d)===null&&J===t(h)&&(b?(S(w),w=-1):b=!0,Q(P,ce-F))):(J.sortIndex=ne,e(d,J),M||y||(M=!0,ie(U))),J},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(J){var fe=m;return function(){var ce=m;m=fe;try{return J.apply(this,arguments)}finally{m=ce}}}})(jf)),jf}var Ug;function uy(){return Ug||(Ug=1,Wf.exports=ly()),Wf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function cy(){if(Fg)return ri;Fg=1;var s=Ih(),e=uy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function m(n){return d.call(_,n)?!0:d.call(g,n)?!1:h.test(n)?_[n]=!0:(g[n]=!0,!1)}function y(n,r,l,c){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,c){if(r===null||typeof r>"u"||y(n,r,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,l,c,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,A);x[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,A);x[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,A);x[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,r,l,c){var p=x.hasOwnProperty(r)?x[r]:null;(p!==null?p.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,c)&&(l=null),c||p===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,c=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?n.setAttributeNS(c,r,l):n.setAttribute(r,l))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),J=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,F;function ne(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Be=!1;function We(n,r){if(!n||Be)return"";Be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var c=pe}Reflect.construct(n,[],r)}else{try{r.call()}catch(pe){c=pe}n.call(r.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),v=c.stack.split(`
`),T=p.length-1,D=v.length-1;1<=T&&0<=D&&p[T]!==v[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==v[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==v[D]){var H=`
`+p[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=D);break}}}finally{Be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ze(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case I:return"Profiler";case w:return"StrictMode";case me:return"Suspense";case ge:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case Z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:he(n.type)||"Memo";case ie:r=n._payload,n=n._init;try{return he(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=Fe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){c=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qe(n){n._valueTracker||(n._valueTracker=Je(n))}function Lt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==l?(r.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,r){var l=r.checked;return ce({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function It(n,r){var l=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;l=Se(r.value!=null?r.value:l),n._wrapperState={initialChecked:c,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&R(n,"checked",r,!1)}function Xt(n,r){vt(n,r);var l=Se(r.value),c=r.type;if(l!=null)c==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?vn(n,r.type,l):r.hasOwnProperty("defaultValue")&&vn(n,r.type,Se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Vt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function vn(n,r,l){(r!=="number"||ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var j=Array.isArray;function $t(n,r,l,c){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&c&&(n[l].defaultSelected=!0)}else{for(l=""+Se(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function St(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(j(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Se(l)}}function Oe(n,r){var l=Se(r.value),c=Se(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),c!=null&&(n.defaultValue=""+c)}function Kt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?N(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var te,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,c,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,c,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(te=te||document.createElement("div"),te.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=te.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ee(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Ie.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ae[r]=Ae[n]})});function ve(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+r).trim():r+"px"}function xe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=ve(l,r[l],c);l==="float"&&(l="cssFloat"),c?n.setProperty(l,p):n[l]=p}}var Ve=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,r){if(r){if(Ve[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function rt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dt=null,Et=null,G=null;function Ce(n){if(n=eo(n)){if(typeof dt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),dt(n.stateNode,n.type,r))}}function k(n){Et?G?G.push(n):G=[n]:Et=n}function re(){if(Et){var n=Et,r=G;if(G=Et=null,Ce(n),r)for(n=0;n<r.length;n++)Ce(r[n])}}function ee(n,r){return n(r)}function $(){}var ye=!1;function Pe(n,r,l){if(ye)return n(r,l);ye=!0;try{return ee(n,r,l)}finally{ye=!1,(Et!==null||G!==null)&&($(),re())}}function ue(n,r){var l=n.stateNode;if(l===null)return null;var c=fl(l);if(c===null)return null;l=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var ke=!1;if(f)try{var st={};Object.defineProperty(st,"passive",{get:function(){ke=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{ke=!1}function lt(n,r,l,c,p,v,T,D,H){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(l,pe)}catch(Te){this.onError(Te)}}var pt=!1,ct=null,_t=!1,un=null,Sn={onError:function(n){pt=!0,ct=n}};function Ut(n,r,l,c,p,v,T,D,H){pt=!1,ct=null,lt.apply(Sn,arguments)}function Qt(n,r,l,c,p,v,T,D,H){if(Ut.apply(this,arguments),pt){if(pt){var pe=ct;pt=!1,ct=null}else throw Error(t(198));_t||(_t=!0,un=pe)}}function In(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Yt(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function cn(n){if(In(n)!==n)throw Error(t(188))}function Ft(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,c=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return cn(p),n;if(v===c)return cn(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=v;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,c=v;break}if(D===c){T=!0,c=p,l=v;break}D=D.sibling}if(!T){for(D=v.child;D;){if(D===l){T=!0,l=v,c=p;break}if(D===c){T=!0,c=v,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Mn(n){return n=Ft(n),n!==null?Kn(n):null}function Kn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Kn(n);if(r!==null)return r;n=n.sibling}return null}var os=e.unstable_scheduleCallback,Us=e.unstable_cancelCallback,Fs=e.unstable_shouldYield,vi=e.unstable_requestPaint,Zt=e.unstable_now,fc=e.unstable_getCurrentPriorityLevel,Oa=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,de=e.unstable_LowPriority,oe=e.unstable_IdlePriority,ae=null,Ue=null;function $e(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:mt,Ke=Math.log,nt=Math.LN2;function mt(n){return n>>>=0,n===0?32:31-(Ke(n)/nt|0)|0}var gt=64,et=4194304;function Dt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function en(n,r){var l=n.pendingLanes;if(l===0)return 0;var c=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?c=Dt(D):(v&=T,v!==0&&(c=Dt(v)))}else T=l&~p,T!==0?c=Dt(T):v!==0&&(c=Dt(v));if(c===0)return 0;if(r!==0&&r!==c&&(r&p)===0&&(p=c&-c,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((c&4)!==0&&(c|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)l=31-De(r),p=1<<l,c|=n[l],r&=~p;return c}function an(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,r){for(var l=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-De(v),D=1<<T,H=p[T];H===-1?((D&l)===0||(D&c)!==0)&&(p[T]=an(D,r)):H<=r&&(n.expiredLanes|=D),v&=~D}}function _n(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),n}function Dn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Tt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-De(r),n[r]=l}function Zn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-De(l),v=1<<p;r[p]=0,c[p]=-1,n[p]=-1,l&=~v}}function Jn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var c=31-De(l),p=1<<c;p&r|n[c]&r&&(n[c]|=r),l&=~p}}var At=0;function rr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zt,nn,Ci,Gt,Pi,Gi=!1,ls=[],Nr=null,Lr=null,Ir=null,ka=new Map,Ba=new Map,Dr=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hp(n,r){switch(n){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ka.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(r.pointerId)}}function za(n,r,l,c,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:c,nativeEvent:v,targetContainers:[p]},r!==null&&(r=eo(r),r!==null&&nn(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function R_(n,r,l,c,p){switch(r){case"focusin":return Nr=za(Nr,n,r,l,c,p),!0;case"dragenter":return Lr=za(Lr,n,r,l,c,p),!0;case"mouseover":return Ir=za(Ir,n,r,l,c,p),!0;case"pointerover":var v=p.pointerId;return ka.set(v,za(ka.get(v)||null,n,r,l,c,p)),!0;case"gotpointercapture":return v=p.pointerId,Ba.set(v,za(Ba.get(v)||null,n,r,l,c,p)),!0}return!1}function pp(n){var r=us(n.target);if(r!==null){var l=In(r);if(l!==null){if(r=l.tag,r===13){if(r=Yt(l),r!==null){n.blockedOn=r,Pi(n.priority,function(){Ci(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=hc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);Re=c,l.target.dispatchEvent(c),Re=null}else return r=eo(l),r!==null&&nn(r),n.blockedOn=l,!1;r.shift()}return!0}function mp(n,r,l){Zo(n)&&l.delete(r)}function C_(){Gi=!1,Nr!==null&&Zo(Nr)&&(Nr=null),Lr!==null&&Zo(Lr)&&(Lr=null),Ir!==null&&Zo(Ir)&&(Ir=null),ka.forEach(mp),Ba.forEach(mp)}function Va(n,r){n.blockedOn===r&&(n.blockedOn=null,Gi||(Gi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,C_)))}function Ha(n){function r(p){return Va(p,n)}if(0<ls.length){Va(ls[0],n);for(var l=1;l<ls.length;l++){var c=ls[l];c.blockedOn===n&&(c.blockedOn=null)}}for(Nr!==null&&Va(Nr,n),Lr!==null&&Va(Lr,n),Ir!==null&&Va(Ir,n),ka.forEach(r),Ba.forEach(r),l=0;l<Dr.length;l++)c=Dr[l],c.blockedOn===n&&(c.blockedOn=null);for(;0<Dr.length&&(l=Dr[0],l.blockedOn===null);)pp(l),l.blockedOn===null&&Dr.shift()}var Os=P.ReactCurrentBatchConfig,Jo=!0;function P_(n,r,l,c){var p=At,v=Os.transition;Os.transition=null;try{At=1,dc(n,r,l,c)}finally{At=p,Os.transition=v}}function N_(n,r,l,c){var p=At,v=Os.transition;Os.transition=null;try{At=4,dc(n,r,l,c)}finally{At=p,Os.transition=v}}function dc(n,r,l,c){if(Jo){var p=hc(n,r,l,c);if(p===null)Pc(n,r,c,Qo,l),hp(n,c);else if(R_(p,n,r,l,c))c.stopPropagation();else if(hp(n,c),r&4&&-1<A_.indexOf(n)){for(;p!==null;){var v=eo(p);if(v!==null&&zt(v),v=hc(n,r,l,c),v===null&&Pc(n,r,c,Qo,l),v===p)break;p=v}p!==null&&c.stopPropagation()}else Pc(n,r,c,null,l)}}var Qo=null;function hc(n,r,l,c){if(Qo=null,n=rt(c),n=us(n),n!==null)if(r=In(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Yt(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qo=n,null}function gp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Oa:return 1;case C:return 4;case q:case de:return 16;case oe:return 536870912;default:return 16}default:return 16}}var Ur=null,pc=null,el=null;function vp(){if(el)return el;var n,r=pc,l=r.length,c,p="value"in Ur?Ur.value:Ur.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(c=1;c<=T&&r[l-c]===p[v-c];c++);return el=p.slice(n,1<c?1-c:void 0)}function tl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function _p(){return!1}function ci(n){function r(l,c,p,v,T){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?nl:_p,this.isPropagationStopped=_p,this}return ce(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),r}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=ci(ks),Ga=ce({},ks,{view:0,detail:0}),L_=ci(Ga),gc,vc,Wa,il=ce({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wa&&(Wa&&n.type==="mousemove"?(gc=n.screenX-Wa.screenX,vc=n.screenY-Wa.screenY):vc=gc=0,Wa=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:vc}}),xp=ci(il),I_=ce({},il,{dataTransfer:0}),D_=ci(I_),U_=ce({},Ga,{relatedTarget:0}),_c=ci(U_),F_=ce({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=ci(F_),k_=ce({},ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),B_=ci(k_),z_=ce({},ks,{data:0}),yp=ci(z_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=G_[n])?!!r[n]:!1}function xc(){return W_}var j_=ce({},Ga,{key:function(n){if(n.key){var r=V_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),X_=ci(j_),$_=ce({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=ci($_),Y_=ce({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),q_=ci(Y_),K_=ce({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z_=ci(K_),J_=ce({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Q_=ci(J_),ex=[9,13,27,32],yc=f&&"CompositionEvent"in window,ja=null;f&&"documentMode"in document&&(ja=document.documentMode);var tx=f&&"TextEvent"in window&&!ja,Mp=f&&(!yc||ja&&8<ja&&11>=ja),Ep=" ",wp=!1;function Tp(n,r){switch(n){case"keyup":return ex.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function nx(n,r){switch(n){case"compositionend":return bp(r);case"keypress":return r.which!==32?null:(wp=!0,Ep);case"textInput":return n=r.data,n===Ep&&wp?null:n;default:return null}}function ix(n,r){if(Bs)return n==="compositionend"||!yc&&Tp(n,r)?(n=vp(),el=pc=Ur=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Mp&&r.locale!=="ko"?null:r.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!rx[n.type]:r==="textarea"}function Rp(n,r,l,c){k(c),r=ll(r,"onChange"),0<r.length&&(l=new mc("onChange","change",null,l,c),n.push({event:l,listeners:r}))}var Xa=null,$a=null;function sx(n){Xp(n,0)}function rl(n){var r=Ws(n);if(Lt(r))return n}function ax(n,r){if(n==="change")return r}var Cp=!1;if(f){var Sc;if(f){var Mc="oninput"in document;if(!Mc){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Mc=typeof Pp.oninput=="function"}Sc=Mc}else Sc=!1;Cp=Sc&&(!document.documentMode||9<document.documentMode)}function Np(){Xa&&(Xa.detachEvent("onpropertychange",Lp),$a=Xa=null)}function Lp(n){if(n.propertyName==="value"&&rl($a)){var r=[];Rp(r,$a,n,rt(n)),Pe(sx,r)}}function ox(n,r,l){n==="focusin"?(Np(),Xa=r,$a=l,Xa.attachEvent("onpropertychange",Lp)):n==="focusout"&&Np()}function lx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl($a)}function ux(n,r){if(n==="click")return rl(r)}function cx(n,r){if(n==="input"||n==="change")return rl(r)}function fx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ni=typeof Object.is=="function"?Object.is:fx;function Ya(n,r){if(Ni(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),c=Object.keys(r);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!d.call(r,p)||!Ni(n[p],r[p]))return!1}return!0}function Ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Dp(n,r){var l=Ip(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=r&&c>=r)return{node:l,offset:r-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ip(l)}}function Up(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Up(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Fp(){for(var n=window,r=ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ft(n.document)}return r}function Ec(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function dx(n){var r=Fp(),l=n.focusedElem,c=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Up(l.ownerDocument.documentElement,l)){if(c!==null&&Ec(l)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(c.start,p);c=c.end===void 0?v:Math.min(c.end,p),!n.extend&&v>c&&(p=c,c=v,v=p),p=Dp(l,v);var T=Dp(l,c);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>c?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hx=f&&"documentMode"in document&&11>=document.documentMode,zs=null,wc=null,qa=null,Tc=!1;function Op(n,r,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tc||zs==null||zs!==ft(c)||(c=zs,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qa&&Ya(qa,c)||(qa=c,c=ll(wc,"onSelect"),0<c.length&&(r=new mc("onSelect","select",null,r,l),n.push({event:r,listeners:c}),r.target=zs)))}function sl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Vs={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},bc={},kp={};f&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function al(n){if(bc[n])return bc[n];if(!Vs[n])return n;var r=Vs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in kp)return bc[n]=r[l];return n}var Bp=al("animationend"),zp=al("animationiteration"),Vp=al("animationstart"),Hp=al("transitionend"),Gp=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,r){Gp.set(n,r),o(r,[n])}for(var Ac=0;Ac<Wp.length;Ac++){var Rc=Wp[Ac],px=Rc.toLowerCase(),mx=Rc[0].toUpperCase()+Rc.slice(1);Fr(px,"on"+mx)}Fr(Bp,"onAnimationEnd"),Fr(zp,"onAnimationIteration"),Fr(Vp,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Hp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function jp(n,r,l){var c=n.type||"unknown-event";n.currentTarget=l,Qt(c,r,void 0,n),n.currentTarget=null}function Xp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],p=c.event;c=c.listeners;e:{var v=void 0;if(r)for(var T=c.length-1;0<=T;T--){var D=c[T],H=D.instance,pe=D.currentTarget;if(D=D.listener,H!==v&&p.isPropagationStopped())break e;jp(p,D,pe),v=H}else for(T=0;T<c.length;T++){if(D=c[T],H=D.instance,pe=D.currentTarget,D=D.listener,H!==v&&p.isPropagationStopped())break e;jp(p,D,pe),v=H}}}if(_t)throw n=un,_t=!1,un=null,n}function rn(n,r){var l=r[Fc];l===void 0&&(l=r[Fc]=new Set);var c=n+"__bubble";l.has(c)||($p(r,n,2,!1),l.add(c))}function Cc(n,r,l){var c=0;r&&(c|=4),$p(l,n,c,r)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Za(n){if(!n[ol]){n[ol]=!0,i.forEach(function(l){l!=="selectionchange"&&(gx.has(l)||Cc(l,!1,n),Cc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ol]||(r[ol]=!0,Cc("selectionchange",!1,r))}}function $p(n,r,l,c){switch(gp(r)){case 1:var p=P_;break;case 4:p=N_;break;default:p=dc}l=p.bind(null,r,l,n),p=void 0,!ke||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Pc(n,r,l,c,p){var v=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var D=c.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=c.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;T=T.return}for(;D!==null;){if(T=us(D),T===null)return;if(H=T.tag,H===5||H===6){c=v=T;continue e}D=D.parentNode}}c=c.return}Pe(function(){var pe=v,Te=rt(l),be=[];e:{var we=Gp.get(n);if(we!==void 0){var Xe=mc,qe=n;switch(n){case"keypress":if(tl(l)===0)break e;case"keydown":case"keyup":Xe=X_;break;case"focusin":qe="focus",Xe=_c;break;case"focusout":qe="blur",Xe=_c;break;case"beforeblur":case"afterblur":Xe=_c;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=q_;break;case Bp:case zp:case Vp:Xe=O_;break;case Hp:Xe=Z_;break;case"scroll":Xe=L_;break;case"wheel":Xe=Q_;break;case"copy":case"cut":case"paste":Xe=B_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=Sp}var Ze=(r&4)!==0,gn=!Ze&&n==="scroll",se=Ze?we!==null?we+"Capture":null:we;Ze=[];for(var X=pe,le;X!==null;){le=X;var Ne=le.stateNode;if(le.tag===5&&Ne!==null&&(le=Ne,se!==null&&(Ne=ue(X,se),Ne!=null&&Ze.push(Ja(X,Ne,le)))),gn)break;X=X.return}0<Ze.length&&(we=new Xe(we,qe,null,l,Te),be.push({event:we,listeners:Ze}))}}if((r&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",we&&l!==Re&&(qe=l.relatedTarget||l.fromElement)&&(us(qe)||qe[sr]))break e;if((Xe||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,Xe?(qe=l.relatedTarget||l.toElement,Xe=pe,qe=qe?us(qe):null,qe!==null&&(gn=In(qe),qe!==gn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Xe=null,qe=pe),Xe!==qe)){if(Ze=xp,Ne="onMouseLeave",se="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Sp,Ne="onPointerLeave",se="onPointerEnter",X="pointer"),gn=Xe==null?we:Ws(Xe),le=qe==null?we:Ws(qe),we=new Ze(Ne,X+"leave",Xe,l,Te),we.target=gn,we.relatedTarget=le,Ne=null,us(Te)===pe&&(Ze=new Ze(se,X+"enter",qe,l,Te),Ze.target=le,Ze.relatedTarget=gn,Ne=Ze),gn=Ne,Xe&&qe)t:{for(Ze=Xe,se=qe,X=0,le=Ze;le;le=Hs(le))X++;for(le=0,Ne=se;Ne;Ne=Hs(Ne))le++;for(;0<X-le;)Ze=Hs(Ze),X--;for(;0<le-X;)se=Hs(se),le--;for(;X--;){if(Ze===se||se!==null&&Ze===se.alternate)break t;Ze=Hs(Ze),se=Hs(se)}Ze=null}else Ze=null;Xe!==null&&Yp(be,we,Xe,Ze,!1),qe!==null&&gn!==null&&Yp(be,gn,qe,Ze,!0)}}e:{if(we=pe?Ws(pe):window,Xe=we.nodeName&&we.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&we.type==="file")var tt=ax;else if(Ap(we))if(Cp)tt=cx;else{tt=lx;var at=ox}else(Xe=we.nodeName)&&Xe.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(tt=ux);if(tt&&(tt=tt(n,pe))){Rp(be,tt,l,Te);break e}at&&at(n,we,pe),n==="focusout"&&(at=we._wrapperState)&&at.controlled&&we.type==="number"&&vn(we,"number",we.value)}switch(at=pe?Ws(pe):window,n){case"focusin":(Ap(at)||at.contentEditable==="true")&&(zs=at,wc=pe,qa=null);break;case"focusout":qa=wc=zs=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Op(be,l,Te);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":Op(be,l,Te)}var ot;if(yc)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Bs?Tp(n,l)&&(ht="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(Mp&&l.locale!=="ko"&&(Bs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Bs&&(ot=vp()):(Ur=Te,pc="value"in Ur?Ur.value:Ur.textContent,Bs=!0)),at=ll(pe,ht),0<at.length&&(ht=new yp(ht,n,null,l,Te),be.push({event:ht,listeners:at}),ot?ht.data=ot:(ot=bp(l),ot!==null&&(ht.data=ot)))),(ot=tx?nx(n,l):ix(n,l))&&(pe=ll(pe,"onBeforeInput"),0<pe.length&&(Te=new yp("onBeforeInput","beforeinput",null,l,Te),be.push({event:Te,listeners:pe}),Te.data=ot))}Xp(be,r)})}function Ja(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ll(n,r){for(var l=r+"Capture",c=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=ue(n,l),v!=null&&c.unshift(Ja(n,v,p)),v=ue(n,r),v!=null&&c.push(Ja(n,v,p))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yp(n,r,l,c,p){for(var v=r._reactName,T=[];l!==null&&l!==c;){var D=l,H=D.alternate,pe=D.stateNode;if(H!==null&&H===c)break;D.tag===5&&pe!==null&&(D=pe,p?(H=ue(l,v),H!=null&&T.unshift(Ja(l,H,D))):p||(H=ue(l,v),H!=null&&T.push(Ja(l,H,D)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var vx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function qp(n){return(typeof n=="string"?n:""+n).replace(vx,`
`).replace(_x,"")}function ul(n,r,l){if(r=qp(r),qp(n)!==r&&l)throw Error(t(425))}function cl(){}var Nc=null,Lc=null;function Ic(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,Kp=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kp<"u"?function(n){return Kp.resolve(null).then(n).catch(Sx)}:Dc;function Sx(n){setTimeout(function(){throw n})}function Uc(n,r){var l=r,c=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){n.removeChild(p),Ha(r);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Ha(r)}function Or(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Zp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Gs,Qa="__reactProps$"+Gs,sr="__reactContainer$"+Gs,Fc="__reactEvents$"+Gs,Mx="__reactListeners$"+Gs,Ex="__reactHandles$"+Gs;function us(n){var r=n[Wi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[sr]||l[Wi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Zp(n);n!==null;){if(l=n[Wi])return l;n=Zp(n)}return r}n=l,l=n.parentNode}return null}function eo(n){return n=n[Wi]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[Qa]||null}var Oc=[],js=-1;function kr(n){return{current:n}}function sn(n){0>js||(n.current=Oc[js],Oc[js]=null,js--)}function tn(n,r){js++,Oc[js]=n.current,n.current=r}var Br={},Bn=kr(Br),Qn=kr(!1),cs=Br;function Xs(n,r){var l=n.type.contextTypes;if(!l)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function ei(n){return n=n.childContextTypes,n!=null}function dl(){sn(Qn),sn(Bn)}function Jp(n,r,l){if(Bn.current!==Br)throw Error(t(168));tn(Bn,r),tn(Qn,l)}function Qp(n,r,l){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in r))throw Error(t(108,Me(n)||"Unknown",p));return ce({},l,c)}function hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,cs=Bn.current,tn(Bn,n),tn(Qn,Qn.current),!0}function em(n,r,l){var c=n.stateNode;if(!c)throw Error(t(169));l?(n=Qp(n,r,cs),c.__reactInternalMemoizedMergedChildContext=n,sn(Qn),sn(Bn),tn(Bn,n)):sn(Qn),tn(Qn,l)}var ar=null,pl=!1,kc=!1;function tm(n){ar===null?ar=[n]:ar.push(n)}function wx(n){pl=!0,tm(n)}function zr(){if(!kc&&ar!==null){kc=!0;var n=0,r=At;try{var l=ar;for(At=1;n<l.length;n++){var c=l[n];do c=c(!0);while(c!==null)}ar=null,pl=!1}catch(p){throw ar!==null&&(ar=ar.slice(n+1)),os(Oa,zr),p}finally{At=r,kc=!1}}return null}var $s=[],Ys=0,ml=null,gl=0,_i=[],xi=0,fs=null,or=1,lr="";function ds(n,r){$s[Ys++]=gl,$s[Ys++]=ml,ml=n,gl=r}function nm(n,r,l){_i[xi++]=or,_i[xi++]=lr,_i[xi++]=fs,fs=n;var c=or;n=lr;var p=32-De(c)-1;c&=~(1<<p),l+=1;var v=32-De(r)+p;if(30<v){var T=p-p%5;v=(c&(1<<T)-1).toString(32),c>>=T,p-=T,or=1<<32-De(r)+p|l<<p|c,lr=v+n}else or=1<<v|l<<p|c,lr=n}function Bc(n){n.return!==null&&(ds(n,1),nm(n,1,0))}function zc(n){for(;n===ml;)ml=$s[--Ys],$s[Ys]=null,gl=$s[--Ys],$s[Ys]=null;for(;n===fs;)fs=_i[--xi],_i[xi]=null,lr=_i[--xi],_i[xi]=null,or=_i[--xi],_i[xi]=null}var fi=null,di=null,on=!1,Li=null;function im(n,r){var l=Ei(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function rm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,fi=n,di=Or(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,fi=n,di=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=fs!==null?{id:or,overflow:lr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ei(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,fi=n,di=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hc(n){if(on){var r=di;if(r){var l=r;if(!rm(n,r)){if(Vc(n))throw Error(t(418));r=Or(l.nextSibling);var c=fi;r&&rm(n,r)?im(c,l):(n.flags=n.flags&-4097|2,on=!1,fi=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,on=!1,fi=n}}}function sm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function vl(n){if(n!==fi)return!1;if(!on)return sm(n),on=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ic(n.type,n.memoizedProps)),r&&(r=di)){if(Vc(n))throw am(),Error(t(418));for(;r;)im(n,r),r=Or(r.nextSibling)}if(sm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){di=Or(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}di=null}}else di=fi?Or(n.stateNode.nextSibling):null;return!0}function am(){for(var n=di;n;)n=Or(n.nextSibling)}function qs(){di=fi=null,on=!1}function Gc(n){Li===null?Li=[n]:Li.push(n)}var Tx=P.ReactCurrentBatchConfig;function to(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,n));var p=c,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var D=p.refs;T===null?delete D[v]:D[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function _l(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function om(n){var r=n._init;return r(n._payload)}function lm(n){function r(se,X){if(n){var le=se.deletions;le===null?(se.deletions=[X],se.flags|=16):le.push(X)}}function l(se,X){if(!n)return null;for(;X!==null;)r(se,X),X=X.sibling;return null}function c(se,X){for(se=new Map;X!==null;)X.key!==null?se.set(X.key,X):se.set(X.index,X),X=X.sibling;return se}function p(se,X){return se=Yr(se,X),se.index=0,se.sibling=null,se}function v(se,X,le){return se.index=le,n?(le=se.alternate,le!==null?(le=le.index,le<X?(se.flags|=2,X):le):(se.flags|=2,X)):(se.flags|=1048576,X)}function T(se){return n&&se.alternate===null&&(se.flags|=2),se}function D(se,X,le,Ne){return X===null||X.tag!==6?(X=Uf(le,se.mode,Ne),X.return=se,X):(X=p(X,le),X.return=se,X)}function H(se,X,le,Ne){var tt=le.type;return tt===O?Te(se,X,le.props.children,Ne,le.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ie&&om(tt)===X.type)?(Ne=p(X,le.props),Ne.ref=to(se,X,le),Ne.return=se,Ne):(Ne=Hl(le.type,le.key,le.props,null,se.mode,Ne),Ne.ref=to(se,X,le),Ne.return=se,Ne)}function pe(se,X,le,Ne){return X===null||X.tag!==4||X.stateNode.containerInfo!==le.containerInfo||X.stateNode.implementation!==le.implementation?(X=Ff(le,se.mode,Ne),X.return=se,X):(X=p(X,le.children||[]),X.return=se,X)}function Te(se,X,le,Ne,tt){return X===null||X.tag!==7?(X=ys(le,se.mode,Ne,tt),X.return=se,X):(X=p(X,le),X.return=se,X)}function be(se,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Uf(""+X,se.mode,le),X.return=se,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return le=Hl(X.type,X.key,X.props,null,se.mode,le),le.ref=to(se,null,X),le.return=se,le;case L:return X=Ff(X,se.mode,le),X.return=se,X;case ie:var Ne=X._init;return be(se,Ne(X._payload),le)}if(j(X)||fe(X))return X=ys(X,se.mode,le,null),X.return=se,X;_l(se,X)}return null}function we(se,X,le,Ne){var tt=X!==null?X.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return tt!==null?null:D(se,X,""+le,Ne);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case U:return le.key===tt?H(se,X,le,Ne):null;case L:return le.key===tt?pe(se,X,le,Ne):null;case ie:return tt=le._init,we(se,X,tt(le._payload),Ne)}if(j(le)||fe(le))return tt!==null?null:Te(se,X,le,Ne,null);_l(se,le)}return null}function Xe(se,X,le,Ne,tt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return se=se.get(le)||null,D(X,se,""+Ne,tt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case U:return se=se.get(Ne.key===null?le:Ne.key)||null,H(X,se,Ne,tt);case L:return se=se.get(Ne.key===null?le:Ne.key)||null,pe(X,se,Ne,tt);case ie:var at=Ne._init;return Xe(se,X,le,at(Ne._payload),tt)}if(j(Ne)||fe(Ne))return se=se.get(le)||null,Te(X,se,Ne,tt,null);_l(X,Ne)}return null}function qe(se,X,le,Ne){for(var tt=null,at=null,ot=X,ht=X=0,Cn=null;ot!==null&&ht<le.length;ht++){ot.index>ht?(Cn=ot,ot=null):Cn=ot.sibling;var kt=we(se,ot,le[ht],Ne);if(kt===null){ot===null&&(ot=Cn);break}n&&ot&&kt.alternate===null&&r(se,ot),X=v(kt,X,ht),at===null?tt=kt:at.sibling=kt,at=kt,ot=Cn}if(ht===le.length)return l(se,ot),on&&ds(se,ht),tt;if(ot===null){for(;ht<le.length;ht++)ot=be(se,le[ht],Ne),ot!==null&&(X=v(ot,X,ht),at===null?tt=ot:at.sibling=ot,at=ot);return on&&ds(se,ht),tt}for(ot=c(se,ot);ht<le.length;ht++)Cn=Xe(ot,se,ht,le[ht],Ne),Cn!==null&&(n&&Cn.alternate!==null&&ot.delete(Cn.key===null?ht:Cn.key),X=v(Cn,X,ht),at===null?tt=Cn:at.sibling=Cn,at=Cn);return n&&ot.forEach(function(qr){return r(se,qr)}),on&&ds(se,ht),tt}function Ze(se,X,le,Ne){var tt=fe(le);if(typeof tt!="function")throw Error(t(150));if(le=tt.call(le),le==null)throw Error(t(151));for(var at=tt=null,ot=X,ht=X=0,Cn=null,kt=le.next();ot!==null&&!kt.done;ht++,kt=le.next()){ot.index>ht?(Cn=ot,ot=null):Cn=ot.sibling;var qr=we(se,ot,kt.value,Ne);if(qr===null){ot===null&&(ot=Cn);break}n&&ot&&qr.alternate===null&&r(se,ot),X=v(qr,X,ht),at===null?tt=qr:at.sibling=qr,at=qr,ot=Cn}if(kt.done)return l(se,ot),on&&ds(se,ht),tt;if(ot===null){for(;!kt.done;ht++,kt=le.next())kt=be(se,kt.value,Ne),kt!==null&&(X=v(kt,X,ht),at===null?tt=kt:at.sibling=kt,at=kt);return on&&ds(se,ht),tt}for(ot=c(se,ot);!kt.done;ht++,kt=le.next())kt=Xe(ot,se,ht,kt.value,Ne),kt!==null&&(n&&kt.alternate!==null&&ot.delete(kt.key===null?ht:kt.key),X=v(kt,X,ht),at===null?tt=kt:at.sibling=kt,at=kt);return n&&ot.forEach(function(ry){return r(se,ry)}),on&&ds(se,ht),tt}function gn(se,X,le,Ne){if(typeof le=="object"&&le!==null&&le.type===O&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case U:e:{for(var tt=le.key,at=X;at!==null;){if(at.key===tt){if(tt=le.type,tt===O){if(at.tag===7){l(se,at.sibling),X=p(at,le.props.children),X.return=se,se=X;break e}}else if(at.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ie&&om(tt)===at.type){l(se,at.sibling),X=p(at,le.props),X.ref=to(se,at,le),X.return=se,se=X;break e}l(se,at);break}else r(se,at);at=at.sibling}le.type===O?(X=ys(le.props.children,se.mode,Ne,le.key),X.return=se,se=X):(Ne=Hl(le.type,le.key,le.props,null,se.mode,Ne),Ne.ref=to(se,X,le),Ne.return=se,se=Ne)}return T(se);case L:e:{for(at=le.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===le.containerInfo&&X.stateNode.implementation===le.implementation){l(se,X.sibling),X=p(X,le.children||[]),X.return=se,se=X;break e}else{l(se,X);break}else r(se,X);X=X.sibling}X=Ff(le,se.mode,Ne),X.return=se,se=X}return T(se);case ie:return at=le._init,gn(se,X,at(le._payload),Ne)}if(j(le))return qe(se,X,le,Ne);if(fe(le))return Ze(se,X,le,Ne);_l(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,X!==null&&X.tag===6?(l(se,X.sibling),X=p(X,le),X.return=se,se=X):(l(se,X),X=Uf(le,se.mode,Ne),X.return=se,se=X),T(se)):l(se,X)}return gn}var Ks=lm(!0),um=lm(!1),xl=kr(null),yl=null,Zs=null,Wc=null;function jc(){Wc=Zs=yl=null}function Xc(n){var r=xl.current;sn(xl),n._currentValue=r}function $c(n,r,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===l)break;n=n.return}}function Js(n,r){yl=n,Wc=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ti=!0),n.firstContext=null)}function yi(n){var r=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:r,next:null},Zs===null){if(yl===null)throw Error(t(308));Zs=n,yl.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return r}var hs=null;function Yc(n){hs===null?hs=[n]:hs.push(n)}function cm(n,r,l,c){var p=r.interleaved;return p===null?(l.next=l,Yc(r)):(l.next=p.next,p.next=l),r.interleaved=l,ur(n,c)}function ur(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Vr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,ur(n,l)}return p=c.interleaved,p===null?(r.next=r,Yc(c)):(r.next=p.next,p.next=r),c.interleaved=r,ur(n,l)}function Sl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,l|=c,r.lanes=l,Jn(n,l)}}function dm(n,r){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Ml(n,r,l,c){var p=n.updateQueue;Vr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var H=D,pe=H.next;H.next=null,T===null?v=pe:T.next=pe,T=H;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,D=Te.lastBaseUpdate,D!==T&&(D===null?Te.firstBaseUpdate=pe:D.next=pe,Te.lastBaseUpdate=H))}if(v!==null){var be=p.baseState;T=0,Te=pe=H=null,D=v;do{var we=D.lane,Xe=D.eventTime;if((c&we)===we){Te!==null&&(Te=Te.next={eventTime:Xe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var qe=n,Ze=D;switch(we=r,Xe=l,Ze.tag){case 1:if(qe=Ze.payload,typeof qe=="function"){be=qe.call(Xe,be,we);break e}be=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ze.payload,we=typeof qe=="function"?qe.call(Xe,be,we):qe,we==null)break e;be=ce({},be,we);break e;case 2:Vr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,we=p.effects,we===null?p.effects=[D]:we.push(D))}else Xe={eventTime:Xe,lane:we,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Te===null?(pe=Te=Xe,H=be):Te=Te.next=Xe,T|=we;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;we=D,D=we.next,we.next=null,p.lastBaseUpdate=we,p.shared.pending=null}}while(!0);if(Te===null&&(H=be),p.baseState=H,p.firstBaseUpdate=pe,p.lastBaseUpdate=Te,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);gs|=T,n.lanes=T,n.memoizedState=be}}function hm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var no={},ji=kr(no),io=kr(no),ro=kr(no);function ps(n){if(n===no)throw Error(t(174));return n}function Kc(n,r){switch(tn(ro,r),tn(io,n),tn(ji,no),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}sn(ji),tn(ji,r)}function Qs(){sn(ji),sn(io),sn(ro)}function pm(n){ps(ro.current);var r=ps(ji.current),l=E(r,n.type);r!==l&&(tn(io,n),tn(ji,l))}function Zc(n){io.current===n&&(sn(ji),sn(io))}var fn=kr(0);function El(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Jc=[];function Qc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var wl=P.ReactCurrentDispatcher,ef=P.ReactCurrentBatchConfig,ms=0,dn=null,En=null,An=null,Tl=!1,so=!1,ao=0,bx=0;function zn(){throw Error(t(321))}function tf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ni(n[l],r[l]))return!1;return!0}function nf(n,r,l,c,p,v){if(ms=v,dn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,wl.current=n===null||n.memoizedState===null?Px:Nx,n=l(c,p),so){v=0;do{if(so=!1,ao=0,25<=v)throw Error(t(301));v+=1,An=En=null,r.updateQueue=null,wl.current=Lx,n=l(c,p)}while(so)}if(wl.current=Rl,r=En!==null&&En.next!==null,ms=0,An=En=dn=null,Tl=!1,r)throw Error(t(300));return n}function rf(){var n=ao!==0;return ao=0,n}function Xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?dn.memoizedState=An=n:An=An.next=n,An}function Si(){if(En===null){var n=dn.alternate;n=n!==null?n.memoizedState:null}else n=En.next;var r=An===null?dn.memoizedState:An.next;if(r!==null)An=r,En=n;else{if(n===null)throw Error(t(310));En=n,n={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},An===null?dn.memoizedState=An=n:An=An.next=n}return An}function oo(n,r){return typeof r=="function"?r(n):r}function sf(n){var r=Si(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=En,p=c.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}c.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,c=c.baseState;var D=T=null,H=null,pe=v;do{var Te=pe.lane;if((ms&Te)===Te)H!==null&&(H=H.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var be={lane:Te,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};H===null?(D=H=be,T=c):H=H.next=be,dn.lanes|=Te,gs|=Te}pe=pe.next}while(pe!==null&&pe!==v);H===null?T=c:H.next=D,Ni(c,r.memoizedState)||(ti=!0),r.memoizedState=c,r.baseState=T,r.baseQueue=H,l.lastRenderedState=c}if(n=l.interleaved,n!==null){p=n;do v=p.lane,dn.lanes|=v,gs|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function af(n){var r=Si(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);Ni(v,r.memoizedState)||(ti=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,c]}function mm(){}function gm(n,r){var l=dn,c=Si(),p=r(),v=!Ni(c.memoizedState,p);if(v&&(c.memoizedState=p,ti=!0),c=c.queue,of(xm.bind(null,l,c,n),[n]),c.getSnapshot!==r||v||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,lo(9,_m.bind(null,l,c,p,r),void 0,null),Rn===null)throw Error(t(349));(ms&30)!==0||vm(l,r,p)}return p}function vm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=dn.updateQueue,r===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function _m(n,r,l,c){r.value=l,r.getSnapshot=c,ym(r)&&Sm(n)}function xm(n,r,l){return l(function(){ym(r)&&Sm(n)})}function ym(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ni(n,l)}catch{return!0}}function Sm(n){var r=ur(n,1);r!==null&&Fi(r,n,1,-1)}function Mm(n){var r=Xi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:n},r.queue=n,n=n.dispatch=Cx.bind(null,dn,n),[r.memoizedState,n]}function lo(n,r,l,c){return n={tag:n,create:r,destroy:l,deps:c,next:null},r=dn.updateQueue,r===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,r.lastEffect=n)),n}function Em(){return Si().memoizedState}function bl(n,r,l,c){var p=Xi();dn.flags|=n,p.memoizedState=lo(1|r,l,void 0,c===void 0?null:c)}function Al(n,r,l,c){var p=Si();c=c===void 0?null:c;var v=void 0;if(En!==null){var T=En.memoizedState;if(v=T.destroy,c!==null&&tf(c,T.deps)){p.memoizedState=lo(r,l,v,c);return}}dn.flags|=n,p.memoizedState=lo(1|r,l,v,c)}function wm(n,r){return bl(8390656,8,n,r)}function of(n,r){return Al(2048,8,n,r)}function Tm(n,r){return Al(4,2,n,r)}function bm(n,r){return Al(4,4,n,r)}function Am(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Rm(n,r,l){return l=l!=null?l.concat([n]):null,Al(4,4,Am.bind(null,r,n),l)}function lf(){}function Cm(n,r){var l=Si();r=r===void 0?null:r;var c=l.memoizedState;return c!==null&&r!==null&&tf(r,c[1])?c[0]:(l.memoizedState=[n,r],n)}function Pm(n,r){var l=Si();r=r===void 0?null:r;var c=l.memoizedState;return c!==null&&r!==null&&tf(r,c[1])?c[0]:(n=n(),l.memoizedState=[n,r],n)}function Nm(n,r,l){return(ms&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=l):(Ni(l,r)||(l=je(),dn.lanes|=l,gs|=l,n.baseState=!0),r)}function Ax(n,r){var l=At;At=l!==0&&4>l?l:4,n(!0);var c=ef.transition;ef.transition={};try{n(!1),r()}finally{At=l,ef.transition=c}}function Lm(){return Si().memoizedState}function Rx(n,r,l){var c=Xr(n);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Im(n))Dm(r,l);else if(l=cm(n,r,l,c),l!==null){var p=$n();Fi(l,n,c,p),Um(l,r,c)}}function Cx(n,r,l){var c=Xr(n),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Im(n))Dm(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,D=v(T,l);if(p.hasEagerState=!0,p.eagerState=D,Ni(D,T)){var H=r.interleaved;H===null?(p.next=p,Yc(r)):(p.next=H.next,H.next=p),r.interleaved=p;return}}catch{}finally{}l=cm(n,r,p,c),l!==null&&(p=$n(),Fi(l,n,c,p),Um(l,r,c))}}function Im(n){var r=n.alternate;return n===dn||r!==null&&r===dn}function Dm(n,r){so=Tl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Um(n,r,l){if((l&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,l|=c,r.lanes=l,Jn(n,l)}}var Rl={readContext:yi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},Px={readContext:yi,useCallback:function(n,r){return Xi().memoizedState=[n,r===void 0?null:r],n},useContext:yi,useEffect:wm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,bl(4194308,4,Am.bind(null,r,n),l)},useLayoutEffect:function(n,r){return bl(4194308,4,n,r)},useInsertionEffect:function(n,r){return bl(4,2,n,r)},useMemo:function(n,r){var l=Xi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var c=Xi();return r=l!==void 0?l(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Rx.bind(null,dn,n),[c.memoizedState,n]},useRef:function(n){var r=Xi();return n={current:n},r.memoizedState=n},useState:Mm,useDebugValue:lf,useDeferredValue:function(n){return Xi().memoizedState=n},useTransition:function(){var n=Mm(!1),r=n[0];return n=Ax.bind(null,n[1]),Xi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var c=dn,p=Xi();if(on){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Rn===null)throw Error(t(349));(ms&30)!==0||vm(c,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,wm(xm.bind(null,c,v,n),[n]),c.flags|=2048,lo(9,_m.bind(null,c,v,l,r),void 0,null),l},useId:function(){var n=Xi(),r=Rn.identifierPrefix;if(on){var l=lr,c=or;l=(c&~(1<<32-De(c)-1)).toString(32)+l,r=":"+r+"R"+l,l=ao++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=bx++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Nx={readContext:yi,useCallback:Cm,useContext:yi,useEffect:of,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:Pm,useReducer:sf,useRef:Em,useState:function(){return sf(oo)},useDebugValue:lf,useDeferredValue:function(n){var r=Si();return Nm(r,En.memoizedState,n)},useTransition:function(){var n=sf(oo)[0],r=Si().memoizedState;return[n,r]},useMutableSource:mm,useSyncExternalStore:gm,useId:Lm,unstable_isNewReconciler:!1},Lx={readContext:yi,useCallback:Cm,useContext:yi,useEffect:of,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:Pm,useReducer:af,useRef:Em,useState:function(){return af(oo)},useDebugValue:lf,useDeferredValue:function(n){var r=Si();return En===null?r.memoizedState=n:Nm(r,En.memoizedState,n)},useTransition:function(){var n=af(oo)[0],r=Si().memoizedState;return[n,r]},useMutableSource:mm,useSyncExternalStore:gm,useId:Lm,unstable_isNewReconciler:!1};function Ii(n,r){if(n&&n.defaultProps){r=ce({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function uf(n,r,l,c){r=n.memoizedState,l=l(c,r),l=l==null?r:ce({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Cl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var c=$n(),p=Xr(n),v=cr(c,p);v.payload=r,l!=null&&(v.callback=l),r=Hr(n,v,p),r!==null&&(Fi(r,n,p,c),Sl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var c=$n(),p=Xr(n),v=cr(c,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Hr(n,v,p),r!==null&&(Fi(r,n,p,c),Sl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=$n(),c=Xr(n),p=cr(l,c);p.tag=2,r!=null&&(p.callback=r),r=Hr(n,p,c),r!==null&&(Fi(r,n,c,l),Sl(r,n,c))}};function Fm(n,r,l,c,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,T):r.prototype&&r.prototype.isPureReactComponent?!Ya(l,c)||!Ya(p,v):!0}function Om(n,r,l){var c=!1,p=Br,v=r.contextType;return typeof v=="object"&&v!==null?v=yi(v):(p=ei(r)?cs:Bn.current,c=r.contextTypes,v=(c=c!=null)?Xs(n,p):Br),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function km(n,r,l,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,c),r.state!==n&&Cl.enqueueReplaceState(r,r.state,null)}function cf(n,r,l,c){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},qc(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=yi(v):(v=ei(r)?cs:Bn.current,p.context=Xs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(uf(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Cl.enqueueReplaceState(p,p.state,null),Ml(n,l,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ea(n,r){try{var l="",c=r;do l+=ze(c),c=c.return;while(c);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function ff(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function df(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Ix=typeof WeakMap=="function"?WeakMap:Map;function Bm(n,r,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var c=r.value;return l.callback=function(){Fl||(Fl=!0,Af=c),df(n,r)},l}function zm(n,r,l){l=cr(-1,l),l.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=r.value;l.payload=function(){return c(p)},l.callback=function(){df(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){df(n,r),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Vm(n,r,l){var c=n.pingCache;if(c===null){c=n.pingCache=new Ix;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(l)||(p.add(l),n=$x.bind(null,n,r,l),r.then(n,n))}function Hm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Gm(n,r,l,c,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=cr(-1,1),r.tag=2,Hr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Dx=P.ReactCurrentOwner,ti=!1;function Xn(n,r,l,c){r.child=n===null?um(r,null,l,c):Ks(r,n.child,l,c)}function Wm(n,r,l,c,p){l=l.render;var v=r.ref;return Js(r,p),c=nf(n,r,l,c,v,p),l=rf(),n!==null&&!ti?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,fr(n,r,p)):(on&&l&&Bc(r),r.flags|=1,Xn(n,r,c,p),r.child)}function jm(n,r,l,c,p){if(n===null){var v=l.type;return typeof v=="function"&&!Df(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Xm(n,r,v,c,p)):(n=Hl(l.type,null,c,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ya,l(T,c)&&n.ref===r.ref)return fr(n,r,p)}return r.flags|=1,n=Yr(v,c),n.ref=r.ref,n.return=r,r.child=n}function Xm(n,r,l,c,p){if(n!==null){var v=n.memoizedProps;if(Ya(v,c)&&n.ref===r.ref)if(ti=!1,r.pendingProps=c=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ti=!0);else return r.lanes=n.lanes,fr(n,r,p)}return hf(n,r,l,c,p)}function $m(n,r,l){var c=r.pendingProps,p=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(na,hi),hi|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,tn(na,hi),hi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:l,tn(na,hi),hi|=c}else v!==null?(c=v.baseLanes|l,r.memoizedState=null):c=l,tn(na,hi),hi|=c;return Xn(n,r,p,l),r.child}function Ym(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function hf(n,r,l,c,p){var v=ei(l)?cs:Bn.current;return v=Xs(r,v),Js(r,p),l=nf(n,r,l,c,v,p),c=rf(),n!==null&&!ti?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,fr(n,r,p)):(on&&c&&Bc(r),r.flags|=1,Xn(n,r,l,p),r.child)}function qm(n,r,l,c,p){if(ei(l)){var v=!0;hl(r)}else v=!1;if(Js(r,p),r.stateNode===null)Nl(n,r),Om(r,l,c),cf(r,l,c,p),c=!0;else if(n===null){var T=r.stateNode,D=r.memoizedProps;T.props=D;var H=T.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=yi(pe):(pe=ei(l)?cs:Bn.current,pe=Xs(r,pe));var Te=l.getDerivedStateFromProps,be=typeof Te=="function"||typeof T.getSnapshotBeforeUpdate=="function";be||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==c||H!==pe)&&km(r,T,c,pe),Vr=!1;var we=r.memoizedState;T.state=we,Ml(r,c,T,p),H=r.memoizedState,D!==c||we!==H||Qn.current||Vr?(typeof Te=="function"&&(uf(r,l,Te,c),H=r.memoizedState),(D=Vr||Fm(r,l,D,c,we,H,pe))?(be||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),T.props=c,T.state=H,T.context=pe,c=D):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{T=r.stateNode,fm(n,r),D=r.memoizedProps,pe=r.type===r.elementType?D:Ii(r.type,D),T.props=pe,be=r.pendingProps,we=T.context,H=l.contextType,typeof H=="object"&&H!==null?H=yi(H):(H=ei(l)?cs:Bn.current,H=Xs(r,H));var Xe=l.getDerivedStateFromProps;(Te=typeof Xe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==be||we!==H)&&km(r,T,c,H),Vr=!1,we=r.memoizedState,T.state=we,Ml(r,c,T,p);var qe=r.memoizedState;D!==be||we!==qe||Qn.current||Vr?(typeof Xe=="function"&&(uf(r,l,Xe,c),qe=r.memoizedState),(pe=Vr||Fm(r,l,pe,c,we,qe,H)||!1)?(Te||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,qe,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,qe,H)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&we===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&we===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=qe),T.props=c,T.state=qe,T.context=H,c=pe):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&we===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&we===n.memoizedState||(r.flags|=1024),c=!1)}return pf(n,r,l,c,v,p)}function pf(n,r,l,c,p,v){Ym(n,r);var T=(r.flags&128)!==0;if(!c&&!T)return p&&em(r,l,!1),fr(n,r,v);c=r.stateNode,Dx.current=r;var D=T&&typeof l.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&T?(r.child=Ks(r,n.child,null,v),r.child=Ks(r,null,D,v)):Xn(n,r,D,v),r.memoizedState=c.state,p&&em(r,l,!0),r.child}function Km(n){var r=n.stateNode;r.pendingContext?Jp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Jp(n,r.context,!1),Kc(n,r.containerInfo)}function Zm(n,r,l,c,p){return qs(),Gc(p),r.flags|=256,Xn(n,r,l,c),r.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jm(n,r,l){var c=r.pendingProps,p=fn.current,v=!1,T=(r.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),tn(fn,p&1),n===null)return Hc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=c.children,n=c.fallback,v?(c=r.mode,v=r.child,T={mode:"hidden",children:T},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Gl(T,c,0,null),n=ys(n,c,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=gf(l),r.memoizedState=mf,n):vf(r,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return Ux(n,r,T,c,D,p,l);if(v){v=c.fallback,T=r.mode,p=n.child,D=p.sibling;var H={mode:"hidden",children:c.children};return(T&1)===0&&r.child!==p?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=Yr(p,H),c.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=Yr(D,v):(v=ys(v,T,l,null),v.flags|=2),v.return=r,c.return=r,c.sibling=v,r.child=c,c=v,v=r.child,T=n.child.memoizedState,T=T===null?gf(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=mf,c}return v=n.child,n=v.sibling,c=Yr(v,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=l),c.return=r,c.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=c,r.memoizedState=null,c}function vf(n,r){return r=Gl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Pl(n,r,l,c){return c!==null&&Gc(c),Ks(r,n.child,null,l),n=vf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Ux(n,r,l,c,p,v,T){if(l)return r.flags&256?(r.flags&=-257,c=ff(Error(t(422))),Pl(n,r,T,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=c.fallback,p=r.mode,c=Gl({mode:"visible",children:c.children},p,0,null),v=ys(v,p,T,null),v.flags|=2,c.return=r,v.return=r,c.sibling=v,r.child=c,(r.mode&1)!==0&&Ks(r,n.child,null,T),r.child.memoizedState=gf(T),r.memoizedState=mf,v);if((r.mode&1)===0)return Pl(n,r,T,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var D=c.dgst;return c=D,v=Error(t(419)),c=ff(v,c,void 0),Pl(n,r,T,c)}if(D=(T&n.childLanes)!==0,ti||D){if(c=Rn,c!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,ur(n,p),Fi(c,n,p,-1))}return If(),c=ff(Error(t(421))),Pl(n,r,T,c)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Yx.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,di=Or(p.nextSibling),fi=r,on=!0,Li=null,n!==null&&(_i[xi++]=or,_i[xi++]=lr,_i[xi++]=fs,or=n.id,lr=n.overflow,fs=r),r=vf(r,c.children),r.flags|=4096,r)}function Qm(n,r,l){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),$c(n.return,r,l)}function _f(n,r,l,c,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=l,v.tailMode=p)}function eg(n,r,l){var c=r.pendingProps,p=c.revealOrder,v=c.tail;if(Xn(n,r,c.children,l),c=fn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qm(n,l,r);else if(n.tag===19)Qm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(tn(fn,c),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&El(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),_f(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&El(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}_f(r,!0,l,null,v);break;case"together":_f(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Nl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function fr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),gs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Yr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Yr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Fx(n,r,l){switch(r.tag){case 3:Km(r),qs();break;case 5:pm(r);break;case 1:ei(r.type)&&hl(r);break;case 4:Kc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,p=r.memoizedProps.value;tn(xl,c._currentValue),c._currentValue=p;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(tn(fn,fn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Jm(n,r,l):(tn(fn,fn.current&1),n=fr(n,r,l),n!==null?n.sibling:null);tn(fn,fn.current&1);break;case 19:if(c=(l&r.childLanes)!==0,(n.flags&128)!==0){if(c)return eg(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),tn(fn,fn.current),c)break;return null;case 22:case 23:return r.lanes=0,$m(n,r,l)}return fr(n,r,l)}var tg,xf,ng,ig;tg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},xf=function(){},ng=function(n,r,l,c){var p=n.memoizedProps;if(p!==c){n=r.stateNode,ps(ji.current);var v=null;switch(l){case"input":p=Mt(n,p),c=Mt(n,c),v=[];break;case"select":p=ce({},p,{value:void 0}),c=ce({},c,{value:void 0}),v=[];break;case"textarea":p=St(n,p),c=St(n,c),v=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=cl)}Ge(l,c);var T;l=null;for(pe in p)if(!c.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var D=p[pe];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in c){var H=c[pe];if(D=p!=null?p[pe]:void 0,c.hasOwnProperty(pe)&&H!==D&&(H!=null||D!=null))if(pe==="style")if(D){for(T in D)!D.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in H)H.hasOwnProperty(T)&&D[T]!==H[T]&&(l||(l={}),l[T]=H[T])}else l||(v||(v=[]),v.push(pe,l)),l=H;else pe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,D=D?D.__html:void 0,H!=null&&D!==H&&(v=v||[]).push(pe,H)):pe==="children"?typeof H!="string"&&typeof H!="number"||(v=v||[]).push(pe,""+H):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(H!=null&&pe==="onScroll"&&rn("scroll",n),v||D===H||(v=[])):(v=v||[]).push(pe,H))}l&&(v=v||[]).push("style",l);var pe=v;(r.updateQueue=pe)&&(r.flags|=4)}},ig=function(n,r,l,c){l!==c&&(r.flags|=4)};function uo(n,r){if(!on)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=l,r}function Ox(n,r,l){var c=r.pendingProps;switch(zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(r),null;case 1:return ei(r.type)&&dl(),Vn(r),null;case 3:return c=r.stateNode,Qs(),sn(Qn),sn(Bn),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Li!==null&&(Pf(Li),Li=null))),xf(n,r),Vn(r),null;case 5:Zc(r);var p=ps(ro.current);if(l=r.type,n!==null&&r.stateNode!=null)ng(n,r,l,c,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vn(r),null}if(n=ps(ji.current),vl(r)){c=r.stateNode,l=r.type;var v=r.memoizedProps;switch(c[Wi]=r,c[Qa]=v,n=(r.mode&1)!==0,l){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(p=0;p<Ka.length;p++)rn(Ka[p],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":It(c,v),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},rn("invalid",c);break;case"textarea":Bt(c,v),rn("invalid",c)}Ge(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var D=v[T];T==="children"?typeof D=="string"?c.textContent!==D&&(v.suppressHydrationWarning!==!0&&ul(c.textContent,D,n),p=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&ul(c.textContent,D,n),p=["children",""+D]):a.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&rn("scroll",c)}switch(l){case"input":Qe(c),Vt(c,v,!0);break;case"textarea":Qe(c),Kt(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=cl)}c=p,r.updateQueue=c,c!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(l,{is:c.is}):(n=T.createElement(l),l==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,l),n[Wi]=r,n[Qa]=c,tg(n,r,!1,!1),r.stateNode=n;e:{switch(T=Le(l,c),l){case"dialog":rn("cancel",n),rn("close",n),p=c;break;case"iframe":case"object":case"embed":rn("load",n),p=c;break;case"video":case"audio":for(p=0;p<Ka.length;p++)rn(Ka[p],n);p=c;break;case"source":rn("error",n),p=c;break;case"img":case"image":case"link":rn("error",n),rn("load",n),p=c;break;case"details":rn("toggle",n),p=c;break;case"input":It(n,c),p=Mt(n,c),rn("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=ce({},c,{value:void 0}),rn("invalid",n);break;case"textarea":Bt(n,c),p=St(n,c),rn("invalid",n);break;default:p=c}Ge(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var H=D[v];v==="style"?xe(n,H):v==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&_e(n,H)):v==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&Ee(n,H):typeof H=="number"&&Ee(n,""+H):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?H!=null&&v==="onScroll"&&rn("scroll",n):H!=null&&R(n,v,H,T))}switch(l){case"input":Qe(n),Vt(n,c,!1);break;case"textarea":Qe(n),Kt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Se(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?$t(n,!!c.multiple,v,!1):c.defaultValue!=null&&$t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=cl)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vn(r),null;case 6:if(n&&r.stateNode!=null)ig(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(l=ps(ro.current),ps(ji.current),vl(r)){if(c=r.stateNode,l=r.memoizedProps,c[Wi]=r,(v=c.nodeValue!==l)&&(n=fi,n!==null))switch(n.tag){case 3:ul(c.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(c.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Wi]=r,r.stateNode=c}return Vn(r),null;case 13:if(sn(fn),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(on&&di!==null&&(r.mode&1)!==0&&(r.flags&128)===0)am(),qs(),r.flags|=98560,v=!1;else if(v=vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Wi]=r}else qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vn(r),v=!1}else Li!==null&&(Pf(Li),Li=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(fn.current&1)!==0?wn===0&&(wn=3):If())),r.updateQueue!==null&&(r.flags|=4),Vn(r),null);case 4:return Qs(),xf(n,r),n===null&&Za(r.stateNode.containerInfo),Vn(r),null;case 10:return Xc(r.type._context),Vn(r),null;case 17:return ei(r.type)&&dl(),Vn(r),null;case 19:if(sn(fn),v=r.memoizedState,v===null)return Vn(r),null;if(c=(r.flags&128)!==0,T=v.rendering,T===null)if(c)uo(v,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=El(n),T!==null){for(r.flags|=128,uo(v,!1),c=T.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=l,l=r.child;l!==null;)v=l,n=c,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return tn(fn,fn.current&1|2),r.child}n=n.sibling}v.tail!==null&&Zt()>ia&&(r.flags|=128,c=!0,uo(v,!1),r.lanes=4194304)}else{if(!c)if(n=El(T),n!==null){if(r.flags|=128,c=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),uo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!on)return Vn(r),null}else 2*Zt()-v.renderingStartTime>ia&&l!==1073741824&&(r.flags|=128,c=!0,uo(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Zt(),r.sibling=null,l=fn.current,tn(fn,c?l&1|2:l&1),r):(Vn(r),null);case 22:case 23:return Lf(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(hi&1073741824)!==0&&(Vn(r),r.subtreeFlags&6&&(r.flags|=8192)):Vn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function kx(n,r){switch(zc(r),r.tag){case 1:return ei(r.type)&&dl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),sn(Qn),sn(Bn),Qc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Zc(r),null;case 13:if(sn(fn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return sn(fn),null;case 4:return Qs(),null;case 10:return Xc(r.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Ll=!1,Hn=!1,Bx=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ta(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){pn(n,r,c)}else l.current=null}function yf(n,r,l){try{l()}catch(c){pn(n,r,c)}}var rg=!1;function zx(n,r){if(Nc=Jo,n=Fp(),Ec(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,D=-1,H=-1,pe=0,Te=0,be=n,we=null;t:for(;;){for(var Xe;be!==l||p!==0&&be.nodeType!==3||(D=T+p),be!==v||c!==0&&be.nodeType!==3||(H=T+c),be.nodeType===3&&(T+=be.nodeValue.length),(Xe=be.firstChild)!==null;)we=be,be=Xe;for(;;){if(be===n)break t;if(we===l&&++pe===p&&(D=T),we===v&&++Te===c&&(H=T),(Xe=be.nextSibling)!==null)break;be=we,we=be.parentNode}be=Xe}l=D===-1||H===-1?null:{start:D,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Lc={focusedElem:n,selectionRange:l},Jo=!1,Ye=r;Ye!==null;)if(r=Ye,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ye=n;else for(;Ye!==null;){r=Ye;try{var qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ze=qe.memoizedProps,gn=qe.memoizedState,se=r.stateNode,X=se.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:Ii(r.type,Ze),gn);se.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var le=r.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){pn(r,r.return,Ne)}if(n=r.sibling,n!==null){n.return=r.return,Ye=n;break}Ye=r.return}return qe=rg,rg=!1,qe}function co(n,r,l){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&yf(r,l,v)}p=p.next}while(p!==c)}}function Il(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var c=l.create;l.destroy=c()}l=l.next}while(l!==r)}}function Sf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function sg(n){var r=n.alternate;r!==null&&(n.alternate=null,sg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wi],delete r[Qa],delete r[Fc],delete r[Mx],delete r[Ex])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ag(n){return n.tag===5||n.tag===3||n.tag===4}function og(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mf(n,r,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=cl));else if(c!==4&&(n=n.child,n!==null))for(Mf(n,r,l),n=n.sibling;n!==null;)Mf(n,r,l),n=n.sibling}function Ef(n,r,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ef(n,r,l),n=n.sibling;n!==null;)Ef(n,r,l),n=n.sibling}var Un=null,Di=!1;function Gr(n,r,l){for(l=l.child;l!==null;)lg(n,r,l),l=l.sibling}function lg(n,r,l){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ae,l)}catch{}switch(l.tag){case 5:Hn||ta(l,r);case 6:var c=Un,p=Di;Un=null,Gr(n,r,l),Un=c,Di=p,Un!==null&&(Di?(n=Un,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Un.removeChild(l.stateNode));break;case 18:Un!==null&&(Di?(n=Un,l=l.stateNode,n.nodeType===8?Uc(n.parentNode,l):n.nodeType===1&&Uc(n,l),Ha(n)):Uc(Un,l.stateNode));break;case 4:c=Un,p=Di,Un=l.stateNode.containerInfo,Di=!0,Gr(n,r,l),Un=c,Di=p;break;case 0:case 11:case 14:case 15:if(!Hn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&yf(l,r,T),p=p.next}while(p!==c)}Gr(n,r,l);break;case 1:if(!Hn&&(ta(l,r),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(D){pn(l,r,D)}Gr(n,r,l);break;case 21:Gr(n,r,l);break;case 22:l.mode&1?(Hn=(c=Hn)||l.memoizedState!==null,Gr(n,r,l),Hn=c):Gr(n,r,l);break;default:Gr(n,r,l)}}function ug(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Bx),r.forEach(function(c){var p=qx.bind(null,n,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Ui(n,r){var l=r.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var v=n,T=r,D=T;e:for(;D!==null;){switch(D.tag){case 5:Un=D.stateNode,Di=!1;break e;case 3:Un=D.stateNode.containerInfo,Di=!0;break e;case 4:Un=D.stateNode.containerInfo,Di=!0;break e}D=D.return}if(Un===null)throw Error(t(160));lg(v,T,p),Un=null,Di=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(pe){pn(p,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cg(r,n),r=r.sibling}function cg(n,r){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(r,n),$i(n),c&4){try{co(3,n,n.return),Il(3,n)}catch(Ze){pn(n,n.return,Ze)}try{co(5,n,n.return)}catch(Ze){pn(n,n.return,Ze)}}break;case 1:Ui(r,n),$i(n),c&512&&l!==null&&ta(l,l.return);break;case 5:if(Ui(r,n),$i(n),c&512&&l!==null&&ta(l,l.return),n.flags&32){var p=n.stateNode;try{Ee(p,"")}catch(Ze){pn(n,n.return,Ze)}}if(c&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,D=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&vt(p,v),Le(D,T);var pe=Le(D,v);for(T=0;T<H.length;T+=2){var Te=H[T],be=H[T+1];Te==="style"?xe(p,be):Te==="dangerouslySetInnerHTML"?_e(p,be):Te==="children"?Ee(p,be):R(p,Te,be,pe)}switch(D){case"input":Xt(p,v);break;case"textarea":Oe(p,v);break;case"select":var we=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Xe=v.value;Xe!=null?$t(p,!!v.multiple,Xe,!1):we!==!!v.multiple&&(v.defaultValue!=null?$t(p,!!v.multiple,v.defaultValue,!0):$t(p,!!v.multiple,v.multiple?[]:"",!1))}p[Qa]=v}catch(Ze){pn(n,n.return,Ze)}}break;case 6:if(Ui(r,n),$i(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ze){pn(n,n.return,Ze)}}break;case 3:if(Ui(r,n),$i(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Ha(r.containerInfo)}catch(Ze){pn(n,n.return,Ze)}break;case 4:Ui(r,n),$i(n);break;case 13:Ui(r,n),$i(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(bf=Zt())),c&4&&ug(n);break;case 22:if(Te=l!==null&&l.memoizedState!==null,n.mode&1?(Hn=(pe=Hn)||Te,Ui(r,n),Hn=pe):Ui(r,n),$i(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Te&&(n.mode&1)!==0)for(Ye=n,Te=n.child;Te!==null;){for(be=Ye=Te;Ye!==null;){switch(we=Ye,Xe=we.child,we.tag){case 0:case 11:case 14:case 15:co(4,we,we.return);break;case 1:ta(we,we.return);var qe=we.stateNode;if(typeof qe.componentWillUnmount=="function"){c=we,l=we.return;try{r=c,qe.props=r.memoizedProps,qe.state=r.memoizedState,qe.componentWillUnmount()}catch(Ze){pn(c,l,Ze)}}break;case 5:ta(we,we.return);break;case 22:if(we.memoizedState!==null){hg(be);continue}}Xe!==null?(Xe.return=we,Ye=Xe):hg(be)}Te=Te.sibling}e:for(Te=null,be=n;;){if(be.tag===5){if(Te===null){Te=be;try{p=be.stateNode,pe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=be.stateNode,H=be.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,D.style.display=ve("display",T))}catch(Ze){pn(n,n.return,Ze)}}}else if(be.tag===6){if(Te===null)try{be.stateNode.nodeValue=pe?"":be.memoizedProps}catch(Ze){pn(n,n.return,Ze)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;Te===be&&(Te=null),be=be.return}Te===be&&(Te=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Ui(r,n),$i(n),c&4&&ug(n);break;case 21:break;default:Ui(r,n),$i(n)}}function $i(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(ag(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Ee(p,""),c.flags&=-33);var v=og(n);Ef(n,v,p);break;case 3:case 4:var T=c.stateNode.containerInfo,D=og(n);Mf(n,D,T);break;default:throw Error(t(161))}}catch(H){pn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Vx(n,r,l){Ye=n,fg(n)}function fg(n,r,l){for(var c=(n.mode&1)!==0;Ye!==null;){var p=Ye,v=p.child;if(p.tag===22&&c){var T=p.memoizedState!==null||Ll;if(!T){var D=p.alternate,H=D!==null&&D.memoizedState!==null||Hn;D=Ll;var pe=Hn;if(Ll=T,(Hn=H)&&!pe)for(Ye=p;Ye!==null;)T=Ye,H=T.child,T.tag===22&&T.memoizedState!==null?pg(p):H!==null?(H.return=T,Ye=H):pg(p);for(;v!==null;)Ye=v,fg(v),v=v.sibling;Ye=p,Ll=D,Hn=pe}dg(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ye=v):dg(n)}}function dg(n){for(;Ye!==null;){var r=Ye;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Hn||Il(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Hn)if(l===null)c.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Ii(r.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&hm(r,v,c);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}hm(r,T,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var Te=pe.memoizedState;if(Te!==null){var be=Te.dehydrated;be!==null&&Ha(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||r.flags&512&&Sf(r)}catch(we){pn(r,r.return,we)}}if(r===n){Ye=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ye=l;break}Ye=r.return}}function hg(n){for(;Ye!==null;){var r=Ye;if(r===n){Ye=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ye=l;break}Ye=r.return}}function pg(n){for(;Ye!==null;){var r=Ye;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Il(4,r)}catch(H){pn(r,l,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var p=r.return;try{c.componentDidMount()}catch(H){pn(r,p,H)}}var v=r.return;try{Sf(r)}catch(H){pn(r,v,H)}break;case 5:var T=r.return;try{Sf(r)}catch(H){pn(r,T,H)}}}catch(H){pn(r,r.return,H)}if(r===n){Ye=null;break}var D=r.sibling;if(D!==null){D.return=r.return,Ye=D;break}Ye=r.return}}var Hx=Math.ceil,Dl=P.ReactCurrentDispatcher,wf=P.ReactCurrentOwner,Mi=P.ReactCurrentBatchConfig,Ot=0,Rn=null,xn=null,Fn=0,hi=0,na=kr(0),wn=0,fo=null,gs=0,Ul=0,Tf=0,ho=null,ni=null,bf=0,ia=1/0,dr=null,Fl=!1,Af=null,Wr=null,Ol=!1,jr=null,kl=0,po=0,Rf=null,Bl=-1,zl=0;function $n(){return(Ot&6)!==0?Zt():Bl!==-1?Bl:Bl=Zt()}function Xr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Fn!==0?Fn&-Fn:Tx.transition!==null?(zl===0&&(zl=je()),zl):(n=At,n!==0||(n=window.event,n=n===void 0?16:gp(n.type)),n)}function Fi(n,r,l,c){if(50<po)throw po=0,Rf=null,Error(t(185));Tt(n,l,c),((Ot&2)===0||n!==Rn)&&(n===Rn&&((Ot&2)===0&&(Ul|=l),wn===4&&$r(n,Fn)),ii(n,c),l===1&&Ot===0&&(r.mode&1)===0&&(ia=Zt()+500,pl&&zr()))}function ii(n,r){var l=n.callbackNode;Ht(n,r);var c=en(n,n===Rn?Fn:0);if(c===0)l!==null&&Us(l),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(l!=null&&Us(l),r===1)n.tag===0?wx(gg.bind(null,n)):tm(gg.bind(null,n)),yx(function(){(Ot&6)===0&&zr()}),l=null;else{switch(rr(c)){case 1:l=Oa;break;case 4:l=C;break;case 16:l=q;break;case 536870912:l=oe;break;default:l=q}l=wg(l,mg.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function mg(n,r){if(Bl=-1,zl=0,(Ot&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ra()&&n.callbackNode!==l)return null;var c=en(n,n===Rn?Fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Vl(n,c);else{r=c;var p=Ot;Ot|=2;var v=_g();(Rn!==n||Fn!==r)&&(dr=null,ia=Zt()+500,_s(n,r));do try{jx();break}catch(D){vg(n,D)}while(!0);jc(),Dl.current=v,Ot=p,xn!==null?r=0:(Rn=null,Fn=0,r=wn)}if(r!==0){if(r===2&&(p=_n(n),p!==0&&(c=p,r=Cf(n,p))),r===1)throw l=fo,_s(n,0),$r(n,c),ii(n,Zt()),l;if(r===6)$r(n,c);else{if(p=n.current.alternate,(c&30)===0&&!Gx(p)&&(r=Vl(n,c),r===2&&(v=_n(n),v!==0&&(c=v,r=Cf(n,v))),r===1))throw l=fo,_s(n,0),$r(n,c),ii(n,Zt()),l;switch(n.finishedWork=p,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:xs(n,ni,dr);break;case 3:if($r(n,c),(c&130023424)===c&&(r=bf+500-Zt(),10<r)){if(en(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){$n(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Dc(xs.bind(null,n,ni,dr),r);break}xs(n,ni,dr);break;case 4:if($r(n,c),(c&4194240)===c)break;for(r=n.eventTimes,p=-1;0<c;){var T=31-De(c);v=1<<T,T=r[T],T>p&&(p=T),c&=~v}if(c=p,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Hx(c/1960))-c,10<c){n.timeoutHandle=Dc(xs.bind(null,n,ni,dr),c);break}xs(n,ni,dr);break;case 5:xs(n,ni,dr);break;default:throw Error(t(329))}}}return ii(n,Zt()),n.callbackNode===l?mg.bind(null,n):null}function Cf(n,r){var l=ho;return n.current.memoizedState.isDehydrated&&(_s(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=ni,ni=l,r!==null&&Pf(r)),n}function Pf(n){ni===null?ni=n:ni.push.apply(ni,n)}function Gx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],v=p.getSnapshot;p=p.value;try{if(!Ni(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $r(n,r){for(r&=~Tf,r&=~Ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-De(r),c=1<<l;n[l]=-1,r&=~c}}function gg(n){if((Ot&6)!==0)throw Error(t(327));ra();var r=en(n,0);if((r&1)===0)return ii(n,Zt()),null;var l=Vl(n,r);if(n.tag!==0&&l===2){var c=_n(n);c!==0&&(r=c,l=Cf(n,c))}if(l===1)throw l=fo,_s(n,0),$r(n,r),ii(n,Zt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,xs(n,ni,dr),ii(n,Zt()),null}function Nf(n,r){var l=Ot;Ot|=1;try{return n(r)}finally{Ot=l,Ot===0&&(ia=Zt()+500,pl&&zr())}}function vs(n){jr!==null&&jr.tag===0&&(Ot&6)===0&&ra();var r=Ot;Ot|=1;var l=Mi.transition,c=At;try{if(Mi.transition=null,At=1,n)return n()}finally{At=c,Mi.transition=l,Ot=r,(Ot&6)===0&&zr()}}function Lf(){hi=na.current,sn(na)}function _s(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,xx(l)),xn!==null)for(l=xn.return;l!==null;){var c=l;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&dl();break;case 3:Qs(),sn(Qn),sn(Bn),Qc();break;case 5:Zc(c);break;case 4:Qs();break;case 13:sn(fn);break;case 19:sn(fn);break;case 10:Xc(c.type._context);break;case 22:case 23:Lf()}l=l.return}if(Rn=n,xn=n=Yr(n.current,null),Fn=hi=r,wn=0,fo=null,Tf=Ul=gs=0,ni=ho=null,hs!==null){for(r=0;r<hs.length;r++)if(l=hs[r],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,c.next=T}l.pending=c}hs=null}return n}function vg(n,r){do{var l=xn;try{if(jc(),wl.current=Rl,Tl){for(var c=dn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Tl=!1}if(ms=0,An=En=dn=null,so=!1,ao=0,wf.current=null,l===null||l.return===null){wn=1,fo=r,xn=null;break}e:{var v=n,T=l.return,D=l,H=r;if(r=Fn,D.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=H,Te=D,be=Te.tag;if((Te.mode&1)===0&&(be===0||be===11||be===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var Xe=Hm(T);if(Xe!==null){Xe.flags&=-257,Gm(Xe,T,D,v,r),Xe.mode&1&&Vm(v,pe,r),r=Xe,H=pe;var qe=r.updateQueue;if(qe===null){var Ze=new Set;Ze.add(H),r.updateQueue=Ze}else qe.add(H);break e}else{if((r&1)===0){Vm(v,pe,r),If();break e}H=Error(t(426))}}else if(on&&D.mode&1){var gn=Hm(T);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),Gm(gn,T,D,v,r),Gc(ea(H,D));break e}}v=H=ea(H,D),wn!==4&&(wn=2),ho===null?ho=[v]:ho.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var se=Bm(v,H,r);dm(v,se);break e;case 1:D=H;var X=v.type,le=v.stateNode;if((v.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Wr===null||!Wr.has(le)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ne=zm(v,D,r);dm(v,Ne);break e}}v=v.return}while(v!==null)}yg(l)}catch(tt){r=tt,xn===l&&l!==null&&(xn=l=l.return);continue}break}while(!0)}function _g(){var n=Dl.current;return Dl.current=Rl,n===null?Rl:n}function If(){(wn===0||wn===3||wn===2)&&(wn=4),Rn===null||(gs&268435455)===0&&(Ul&268435455)===0||$r(Rn,Fn)}function Vl(n,r){var l=Ot;Ot|=2;var c=_g();(Rn!==n||Fn!==r)&&(dr=null,_s(n,r));do try{Wx();break}catch(p){vg(n,p)}while(!0);if(jc(),Ot=l,Dl.current=c,xn!==null)throw Error(t(261));return Rn=null,Fn=0,wn}function Wx(){for(;xn!==null;)xg(xn)}function jx(){for(;xn!==null&&!Fs();)xg(xn)}function xg(n){var r=Eg(n.alternate,n,hi);n.memoizedProps=n.pendingProps,r===null?yg(n):xn=r,wf.current=null}function yg(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Ox(l,r,hi),l!==null){xn=l;return}}else{if(l=kx(l,r),l!==null){l.flags&=32767,xn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,xn=null;return}}if(r=r.sibling,r!==null){xn=r;return}xn=r=n}while(r!==null);wn===0&&(wn=5)}function xs(n,r,l){var c=At,p=Mi.transition;try{Mi.transition=null,At=1,Xx(n,r,l,c)}finally{Mi.transition=p,At=c}return null}function Xx(n,r,l,c){do ra();while(jr!==null);if((Ot&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Zn(n,v),n===Rn&&(xn=Rn=null,Fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ol||(Ol=!0,wg(q,function(){return ra(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=Mi.transition,Mi.transition=null;var T=At;At=1;var D=Ot;Ot|=4,wf.current=null,zx(n,l),cg(l,n),dx(Lc),Jo=!!Nc,Lc=Nc=null,n.current=l,Vx(l),vi(),Ot=D,At=T,Mi.transition=v}else n.current=l;if(Ol&&(Ol=!1,jr=n,kl=p),v=n.pendingLanes,v===0&&(Wr=null),$e(l.stateNode),ii(n,Zt()),r!==null)for(c=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Fl)throw Fl=!1,n=Af,Af=null,n;return(kl&1)!==0&&n.tag!==0&&ra(),v=n.pendingLanes,(v&1)!==0?n===Rf?po++:(po=0,Rf=n):po=0,zr(),null}function ra(){if(jr!==null){var n=rr(kl),r=Mi.transition,l=At;try{if(Mi.transition=null,At=16>n?16:n,jr===null)var c=!1;else{if(n=jr,jr=null,kl=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,Ye=n.current;Ye!==null;){var v=Ye,T=v.child;if((Ye.flags&16)!==0){var D=v.deletions;if(D!==null){for(var H=0;H<D.length;H++){var pe=D[H];for(Ye=pe;Ye!==null;){var Te=Ye;switch(Te.tag){case 0:case 11:case 15:co(8,Te,v)}var be=Te.child;if(be!==null)be.return=Te,Ye=be;else for(;Ye!==null;){Te=Ye;var we=Te.sibling,Xe=Te.return;if(sg(Te),Te===pe){Ye=null;break}if(we!==null){we.return=Xe,Ye=we;break}Ye=Xe}}}var qe=v.alternate;if(qe!==null){var Ze=qe.child;if(Ze!==null){qe.child=null;do{var gn=Ze.sibling;Ze.sibling=null,Ze=gn}while(Ze!==null)}}Ye=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Ye=T;else e:for(;Ye!==null;){if(v=Ye,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:co(9,v,v.return)}var se=v.sibling;if(se!==null){se.return=v.return,Ye=se;break e}Ye=v.return}}var X=n.current;for(Ye=X;Ye!==null;){T=Ye;var le=T.child;if((T.subtreeFlags&2064)!==0&&le!==null)le.return=T,Ye=le;else e:for(T=X;Ye!==null;){if(D=Ye,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Il(9,D)}}catch(tt){pn(D,D.return,tt)}if(D===T){Ye=null;break e}var Ne=D.sibling;if(Ne!==null){Ne.return=D.return,Ye=Ne;break e}Ye=D.return}}if(Ot=p,zr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{At=l,Mi.transition=r}}return!1}function Sg(n,r,l){r=ea(l,r),r=Bm(n,r,1),n=Hr(n,r,1),r=$n(),n!==null&&(Tt(n,1,r),ii(n,r))}function pn(n,r,l){if(n.tag===3)Sg(n,n,l);else for(;r!==null;){if(r.tag===3){Sg(r,n,l);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){n=ea(l,n),n=zm(r,n,1),r=Hr(r,n,1),n=$n(),r!==null&&(Tt(r,1,n),ii(r,n));break}}r=r.return}}function $x(n,r,l){var c=n.pingCache;c!==null&&c.delete(r),r=$n(),n.pingedLanes|=n.suspendedLanes&l,Rn===n&&(Fn&l)===l&&(wn===4||wn===3&&(Fn&130023424)===Fn&&500>Zt()-bf?_s(n,0):Tf|=l),ii(n,r)}function Mg(n,r){r===0&&((n.mode&1)===0?r=1:(r=et,et<<=1,(et&130023424)===0&&(et=4194304)));var l=$n();n=ur(n,r),n!==null&&(Tt(n,r,l),ii(n,l))}function Yx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Mg(n,l)}function qx(n,r){var l=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Mg(n,l)}var Eg;Eg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Qn.current)ti=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ti=!1,Fx(n,r,l);ti=(n.flags&131072)!==0}else ti=!1,on&&(r.flags&1048576)!==0&&nm(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Nl(n,r),n=r.pendingProps;var p=Xs(r,Bn.current);Js(r,l),p=nf(null,r,c,n,p,l);var v=rf();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ei(c)?(v=!0,hl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,qc(r),p.updater=Cl,r.stateNode=p,p._reactInternals=r,cf(r,c,n,l),r=pf(null,r,c,!0,v,l)):(r.tag=0,on&&v&&Bc(r),Xn(null,r,p,l),r=r.child),r;case 16:c=r.elementType;e:{switch(Nl(n,r),n=r.pendingProps,p=c._init,c=p(c._payload),r.type=c,p=r.tag=Zx(c),n=Ii(c,n),p){case 0:r=hf(null,r,c,n,l);break e;case 1:r=qm(null,r,c,n,l);break e;case 11:r=Wm(null,r,c,n,l);break e;case 14:r=jm(null,r,c,Ii(c.type,n),l);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ii(c,p),hf(n,r,c,p,l);case 1:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ii(c,p),qm(n,r,c,p,l);case 3:e:{if(Km(r),n===null)throw Error(t(387));c=r.pendingProps,v=r.memoizedState,p=v.element,fm(n,r),Ml(r,c,null,l);var T=r.memoizedState;if(c=T.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=ea(Error(t(423)),r),r=Zm(n,r,c,l,p);break e}else if(c!==p){p=ea(Error(t(424)),r),r=Zm(n,r,c,l,p);break e}else for(di=Or(r.stateNode.containerInfo.firstChild),fi=r,on=!0,Li=null,l=um(r,null,c,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(qs(),c===p){r=fr(n,r,l);break e}Xn(n,r,c,l)}r=r.child}return r;case 5:return pm(r),n===null&&Hc(r),c=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,Ic(c,p)?T=null:v!==null&&Ic(c,v)&&(r.flags|=32),Ym(n,r),Xn(n,r,T,l),r.child;case 6:return n===null&&Hc(r),null;case 13:return Jm(n,r,l);case 4:return Kc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ks(r,null,c,l):Xn(n,r,c,l),r.child;case 11:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ii(c,p),Wm(n,r,c,p,l);case 7:return Xn(n,r,r.pendingProps,l),r.child;case 8:return Xn(n,r,r.pendingProps.children,l),r.child;case 12:return Xn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(c=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,tn(xl,c._currentValue),c._currentValue=T,v!==null)if(Ni(v.value,T)){if(v.children===p.children&&!Qn.current){r=fr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var D=v.dependencies;if(D!==null){T=v.child;for(var H=D.firstContext;H!==null;){if(H.context===c){if(v.tag===1){H=cr(-1,l&-l),H.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Te=pe.pending;Te===null?H.next=H:(H.next=Te.next,Te.next=H),pe.pending=H}}v.lanes|=l,H=v.alternate,H!==null&&(H.lanes|=l),$c(v.return,l,r),D.lanes|=l;break}H=H.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),$c(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Xn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,c=r.pendingProps.children,Js(r,l),p=yi(p),c=c(p),r.flags|=1,Xn(n,r,c,l),r.child;case 14:return c=r.type,p=Ii(c,r.pendingProps),p=Ii(c.type,p),jm(n,r,c,p,l);case 15:return Xm(n,r,r.type,r.pendingProps,l);case 17:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ii(c,p),Nl(n,r),r.tag=1,ei(c)?(n=!0,hl(r)):n=!1,Js(r,l),Om(r,c,p),cf(r,c,p,l),pf(null,r,c,!0,n,l);case 19:return eg(n,r,l);case 22:return $m(n,r,l)}throw Error(t(156,r.tag))};function wg(n,r){return os(n,r)}function Kx(n,r,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,r,l,c){return new Kx(n,r,l,c)}function Df(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zx(n){if(typeof n=="function")return Df(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===W)return 14}return 2}function Yr(n,r){var l=n.alternate;return l===null?(l=Ei(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Hl(n,r,l,c,p,v){var T=2;if(c=n,typeof n=="function")Df(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return ys(l.children,p,v,r);case w:T=8,p|=8;break;case I:return n=Ei(12,l,r,p|2),n.elementType=I,n.lanes=v,n;case me:return n=Ei(13,l,r,p),n.elementType=me,n.lanes=v,n;case ge:return n=Ei(19,l,r,p),n.elementType=ge,n.lanes=v,n;case Q:return Gl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:T=10;break e;case B:T=9;break e;case Z:T=11;break e;case W:T=14;break e;case ie:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ei(T,l,r,p),r.elementType=n,r.type=c,r.lanes=v,r}function ys(n,r,l,c){return n=Ei(7,n,c,r),n.lanes=l,n}function Gl(n,r,l,c){return n=Ei(22,n,c,r),n.elementType=Q,n.lanes=l,n.stateNode={isHidden:!1},n}function Uf(n,r,l){return n=Ei(6,n,null,r),n.lanes=l,n}function Ff(n,r,l){return r=Ei(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Jx(n,r,l,c,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dn(0),this.expirationTimes=Dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Of(n,r,l,c,p,v,T,D,H){return n=new Jx(n,r,l,D,H),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Ei(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(v),n}function Qx(n,r,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:r,implementation:l}}function Tg(n){if(!n)return Br;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ei(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ei(l))return Qp(n,l,r)}return r}function bg(n,r,l,c,p,v,T,D,H){return n=Of(l,c,!0,n,p,v,T,D,H),n.context=Tg(null),l=n.current,c=$n(),p=Xr(l),v=cr(c,p),v.callback=r??null,Hr(l,v,p),n.current.lanes=p,Tt(n,p,c),ii(n,c),n}function Wl(n,r,l,c){var p=r.current,v=$n(),T=Xr(p);return l=Tg(l),r.context===null?r.context=l:r.pendingContext=l,r=cr(v,T),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(p,r,T),n!==null&&(Fi(n,p,T,v),Sl(n,p,T)),T}function jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ag(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function kf(n,r){Ag(n,r),(n=n.alternate)&&Ag(n,r)}function ey(){return null}var Rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bf(n){this._internalRoot=n}Xl.prototype.render=Bf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},Xl.prototype.unmount=Bf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;vs(function(){Wl(null,n,null,null)}),r[sr]=null}};function Xl(n){this._internalRoot=n}Xl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Gt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Dr.length&&r!==0&&r<Dr[l].priority;l++);Dr.splice(l,0,n),l===0&&pp(n)}};function zf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function ty(n,r,l,c,p){if(p){if(typeof c=="function"){var v=c;c=function(){var pe=jl(T);v.call(pe)}}var T=bg(r,c,n,0,null,!1,!1,"",Cg);return n._reactRootContainer=T,n[sr]=T.current,Za(n.nodeType===8?n.parentNode:n),vs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var D=c;c=function(){var pe=jl(H);D.call(pe)}}var H=Of(n,0,!1,null,null,!1,!1,"",Cg);return n._reactRootContainer=H,n[sr]=H.current,Za(n.nodeType===8?n.parentNode:n),vs(function(){Wl(r,H,l,c)}),H}function Yl(n,r,l,c,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var D=p;p=function(){var H=jl(T);D.call(H)}}Wl(r,T,n,p)}else T=ty(l,r,n,p,c);return jl(T)}zt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Dt(r.pendingLanes);l!==0&&(Jn(r,l|1),ii(r,Zt()),(Ot&6)===0&&(ia=Zt()+500,zr()))}break;case 13:vs(function(){var c=ur(n,1);if(c!==null){var p=$n();Fi(c,n,1,p)}}),kf(n,1)}},nn=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var l=$n();Fi(r,n,134217728,l)}kf(n,134217728)}},Ci=function(n){if(n.tag===13){var r=Xr(n),l=ur(n,r);if(l!==null){var c=$n();Fi(l,n,r,c)}kf(n,r)}},Gt=function(){return At},Pi=function(n,r){var l=At;try{return At=n,r()}finally{At=l}},dt=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var c=l[r];if(c!==n&&c.form===n.form){var p=fl(c);if(!p)throw Error(t(90));Lt(c),Xt(c,p)}}}break;case"textarea":Oe(n,l);break;case"select":r=l.value,r!=null&&$t(n,!!l.multiple,r,!1)}},ee=Nf,$=vs;var ny={usingClientEntryPoint:!1,Events:[eo,Ws,fl,k,re,Nf]},mo={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iy={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mn(n),n===null?null:n.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ae=ql.inject(iy),Ue=ql}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny,ri.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(r))throw Error(t(200));return Qx(n,r,null,l)},ri.createRoot=function(n,r){if(!zf(n))throw Error(t(299));var l=!1,c="",p=Rg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Of(n,1,!1,null,null,l,!1,c,p),n[sr]=r.current,Za(n.nodeType===8?n.parentNode:n),new Bf(r)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Mn(r),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return vs(n)},ri.hydrate=function(n,r,l){if(!$l(r))throw Error(t(200));return Yl(null,n,r,!0,l)},ri.hydrateRoot=function(n,r,l){if(!zf(n))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,v="",T=Rg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=bg(r,null,n,1,l??null,p,!1,v,T),n[sr]=r.current,Za(n),c)for(n=0;n<c.length;n++)l=c[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Xl(r)},ri.render=function(n,r,l){if(!$l(r))throw Error(t(200));return Yl(null,n,r,!1,l)},ri.unmountComponentAtNode=function(n){if(!$l(n))throw Error(t(40));return n._reactRootContainer?(vs(function(){Yl(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1},ri.unstable_batchedUpdates=Nf,ri.unstable_renderSubtreeIntoContainer=function(n,r,l,c){if(!$l(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Yl(n,r,l,!1,c)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var Og;function fy(){if(Og)return Gf.exports;Og=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gf.exports=cy(),Gf.exports}var kg;function dy(){if(kg)return Kl;kg=1;var s=fy();return Kl.createRoot=s.createRoot,Kl.hydrateRoot=s.hydrateRoot,Kl}var hy=dy(),K=Ih();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bg="popstate";function py(s={}){function e(i,a){let{pathname:o,search:u,hash:f}=i.location;return Ud("",{pathname:o,search:u,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:Bo(a)}return gy(e,t,null,s)}function hn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function tr(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function my(){return Math.random().toString(36).substring(2,10)}function zg(s,e){return{usr:s.state,key:s.key,idx:e}}function Ud(s,e,t=null,i){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?La(e):e,state:t,key:e&&e.key||i||my()}}function Bo({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function La(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substring(i),s=s.substring(0,i)),s&&(e.pathname=s)}return e}function gy(s,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,f="POP",d=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function _(){f="POP";let x=g(),S=x==null?null:x-h;h=x,d&&d({action:f,location:b.location,delta:S})}function m(x,S){f="PUSH";let A=Ud(b.location,x,S);h=g()+1;let R=zg(A,h),P=b.createHref(A);try{u.pushState(R,"",P)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;a.location.assign(P)}o&&d&&d({action:f,location:b.location,delta:1})}function y(x,S){f="REPLACE";let A=Ud(b.location,x,S);h=g();let R=zg(A,h),P=b.createHref(A);u.replaceState(R,"",P),o&&d&&d({action:f,location:b.location,delta:0})}function M(x){return vy(x)}let b={get action(){return f},get location(){return s(a,u)},listen(x){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Bg,_),d=x,()=>{a.removeEventListener(Bg,_),d=null}},createHref(x){return e(a,x)},createURL:M,encodeLocation(x){let S=M(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:y,go(x){return u.go(x)}};return b}function vy(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),hn(t,"No window.location.(origin|href) available to create URL");let i=typeof s=="string"?s:Bo(s);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function Mv(s,e,t="/"){return _y(s,e,t,!1)}function _y(s,e,t,i){let a=typeof e=="string"?La(e):e,o=Tr(a.pathname||"/",t);if(o==null)return null;let u=Ev(s);xy(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let h=Py(o);f=Ry(u[d],h,i)}return f}function Ev(s,e=[],t=[],i="",a=!1){let o=(u,f,d=a,h)=>{let g={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&d)return;hn(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let _=Mr([i,g.relativePath]),m=t.concat(g);u.children&&u.children.length>0&&(hn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Ev(u.children,e,m,_,d)),!(u.path==null&&!u.index)&&e.push({path:_,score:by(_,u.index),routesMeta:m})};return s.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))o(u,f);else for(let h of wv(u.path))o(u,f,!0,h)}),e}function wv(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let u=wv(i.join("/")),f=[];return f.push(...u.map(d=>d===""?o:[o,d].join("/"))),a&&f.push(...u),f.map(d=>s.startsWith("/")&&d===""?"/":d)}function xy(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Ay(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var yy=/^:[\w-]+$/,Sy=3,My=2,Ey=1,wy=10,Ty=-2,Vg=s=>s==="*";function by(s,e){let t=s.split("/"),i=t.length;return t.some(Vg)&&(i+=Ty),e&&(i+=My),t.filter(a=>!Vg(a)).reduce((a,o)=>a+(yy.test(o)?Sy:o===""?Ey:wy),i)}function Ay(s,e){return s.length===e.length&&s.slice(0,-1).every((i,a)=>i===e[a])?s[s.length-1]-e[e.length-1]:0}function Ry(s,e,t=!1){let{routesMeta:i}=s,a={},o="/",u=[];for(let f=0;f<i.length;++f){let d=i[f],h=f===i.length-1,g=o==="/"?e:e.slice(o.length)||"/",_=Gu({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},g),m=d.route;if(!_&&h&&t&&!i[i.length-1].route.index&&(_=Gu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!_)return null;Object.assign(a,_.params),u.push({params:a,pathname:Mr([o,_.pathname]),pathnameBase:Dy(Mr([o,_.pathnameBase])),route:m}),_.pathnameBase!=="/"&&(o=Mr([o,_.pathnameBase]))}return u}function Gu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=Cy(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((h,{paramName:g,isOptional:_},m)=>{if(g==="*"){let M=f[m]||"";u=o.slice(0,o.length-M.length).replace(/(.)\/+$/,"$1")}const y=f[m];return _&&!y?h[g]=void 0:h[g]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:u,pattern:s}}function Cy(s,e=!1,t=!0){tr(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let i=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(i.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(i.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function Py(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tr(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Tr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}var Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ly(s,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof s=="string"?La(s):s,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=Hg(t.substring(1),"/"):o=Hg(t,e)):o=e,{pathname:o,search:Uy(i),hash:Fy(a)}}function Hg(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Xf(s,e,t,i){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Iy(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Tv(s){let e=Iy(s);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function bv(s,e,t,i=!1){let a;typeof s=="string"?a=La(s):(a={...s},hn(!a.pathname||!a.pathname.includes("?"),Xf("?","pathname","search",a)),hn(!a.pathname||!a.pathname.includes("#"),Xf("#","pathname","hash",a)),hn(!a.search||!a.search.includes("#"),Xf("#","search","hash",a)));let o=s===""||a.pathname==="",u=o?"/":a.pathname,f;if(u==null)f=t;else{let _=e.length-1;if(!i&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),_-=1;a.pathname=m.join("/")}f=_>=0?e[_]:"/"}let d=Ly(a,f),h=u&&u!=="/"&&u.endsWith("/"),g=(o||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||g)&&(d.pathname+="/"),d}var Mr=s=>s.join("/").replace(/\/\/+/g,"/"),Dy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Uy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Fy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Oy=class{constructor(s,e,t,i=!1){this.status=s,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function ky(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function By(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Av=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rv(s,e){let t=s;if(typeof t!="string"||!Ny.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,a=!1;if(Av)try{let o=new URL(window.location.href),u=t.startsWith("//")?new URL(o.protocol+t):new URL(t),f=Tr(u.pathname,e);u.origin===o.origin&&f!=null?t=f+u.search+u.hash:a=!0}catch{tr(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cv=["POST","PUT","PATCH","DELETE"];new Set(Cv);var zy=["GET",...Cv];new Set(zy);var Ia=K.createContext(null);Ia.displayName="DataRouter";var nc=K.createContext(null);nc.displayName="DataRouterState";var Vy=K.createContext(!1),Pv=K.createContext({isTransitioning:!1});Pv.displayName="ViewTransition";var Hy=K.createContext(new Map);Hy.displayName="Fetchers";var Gy=K.createContext(null);Gy.displayName="Await";var Ri=K.createContext(null);Ri.displayName="Navigation";var Wo=K.createContext(null);Wo.displayName="Location";var Rr=K.createContext({outlet:null,matches:[],isDataRoute:!1});Rr.displayName="Route";var Dh=K.createContext(null);Dh.displayName="RouteError";var Nv="REACT_ROUTER_ERROR",Wy="REDIRECT",jy="ROUTE_ERROR_RESPONSE";function Xy(s){if(s.startsWith(`${Nv}:${Wy}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function $y(s){if(s.startsWith(`${Nv}:${jy}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Oy(e.status,e.statusText,e.data)}catch{}}function Yy(s,{relative:e}={}){hn(jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=K.useContext(Ri),{hash:a,pathname:o,search:u}=Xo(s,{relative:e}),f=o;return t!=="/"&&(f=o==="/"?t:Mr([t,o])),i.createHref({pathname:f,search:u,hash:a})}function jo(){return K.useContext(Wo)!=null}function Ls(){return hn(jo(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Wo).location}var Lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(s){K.useContext(Ri).static||K.useLayoutEffect(s)}function ic(){let{isDataRoute:s}=K.useContext(Rr);return s?oS():qy()}function qy(){hn(jo(),"useNavigate() may be used only in the context of a <Router> component.");let s=K.useContext(Ia),{basename:e,navigator:t}=K.useContext(Ri),{matches:i}=K.useContext(Rr),{pathname:a}=Ls(),o=JSON.stringify(Tv(i)),u=K.useRef(!1);return Iv(()=>{u.current=!0}),K.useCallback((d,h={})=>{if(tr(u.current,Lv),!u.current)return;if(typeof d=="number"){t.go(d);return}let g=bv(d,JSON.parse(o),a,h.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Mr([e,g.pathname])),(h.replace?t.replace:t.push)(g,h.state,h)},[e,t,o,a,s])}K.createContext(null);function Xo(s,{relative:e}={}){let{matches:t}=K.useContext(Rr),{pathname:i}=Ls(),a=JSON.stringify(Tv(t));return K.useMemo(()=>bv(s,JSON.parse(a),i,e==="path"),[s,a,i,e])}function Ky(s,e){return Dv(s,e)}function Dv(s,e,t,i,a){var A;hn(jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=K.useContext(Ri),{matches:u}=K.useContext(Rr),f=u[u.length-1],d=f?f.params:{},h=f?f.pathname:"/",g=f?f.pathnameBase:"/",_=f&&f.route;{let R=_&&_.path||"";Fv(h,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let m=Ls(),y;if(e){let R=typeof e=="string"?La(e):e;hn(g==="/"||((A=R.pathname)==null?void 0:A.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),y=R}else y=m;let M=y.pathname||"/",b=M;if(g!=="/"){let R=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(R.length).join("/")}let x=Mv(s,{pathname:b});tr(_||x!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),tr(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=tS(x&&x.map(R=>Object.assign({},R,{params:Object.assign({},d,R.params),pathname:Mr([g,o.encodeLocation?o.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:Mr([g,o.encodeLocation?o.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),u,t,i,a);return e&&S?K.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},S):S}function Zy(){let s=aS(),e=ky(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:o},"ErrorBoundary")," or"," ",K.createElement("code",{style:o},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:a},t):null,u)}var Jy=K.createElement(Zy,null),Uv=class extends K.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const t=$y(s.digest);t&&(s=t)}let e=s!==void 0?K.createElement(Rr.Provider,{value:this.props.routeContext},K.createElement(Dh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?K.createElement(Qy,{error:s},e):e}};Uv.contextType=Vy;var $f=new WeakMap;function Qy({children:s,error:e}){let{basename:t}=K.useContext(Ri);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=Xy(e.digest);if(i){let a=$f.get(e);if(a)throw a;let o=Rv(i.location,t);if(Av&&!$f.get(e))if(o.isExternal||i.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw $f.set(e,u),u}return K.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return s}function eS({routeContext:s,match:e,children:t}){let i=K.useContext(Ia);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Rr.Provider,{value:s},t)}function tS(s,e=[],t=null,i=null,a=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let o=s,u=t==null?void 0:t.errors;if(u!=null){let g=o.findIndex(_=>_.route.id&&(u==null?void 0:u[_.route.id])!==void 0);hn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,d=-1;if(t)for(let g=0;g<o.length;g++){let _=o[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(d=g),_.route.id){let{loaderData:m,errors:y}=t,M=_.route.loader&&!m.hasOwnProperty(_.route.id)&&(!y||y[_.route.id]===void 0);if(_.route.lazy||M){f=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}let h=t&&i?(g,_)=>{var m,y;i(g,{location:t.location,params:((y=(m=t.matches)==null?void 0:m[0])==null?void 0:y.params)??{},unstable_pattern:By(t.matches),errorInfo:_})}:void 0;return o.reduceRight((g,_,m)=>{let y,M=!1,b=null,x=null;t&&(y=u&&_.route.id?u[_.route.id]:void 0,b=_.route.errorElement||Jy,f&&(d<0&&m===0?(Fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,x=null):d===m&&(M=!0,x=_.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),A=()=>{let R;return y?R=b:M?R=x:_.route.Component?R=K.createElement(_.route.Component,null):_.route.element?R=_.route.element:R=g,K.createElement(eS,{match:_,routeContext:{outlet:g,matches:S,isDataRoute:t!=null},children:R})};return t&&(_.route.ErrorBoundary||_.route.errorElement||m===0)?K.createElement(Uv,{location:t.location,revalidation:t.revalidation,component:b,error:y,children:A(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):A()},null)}function Uh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nS(s){let e=K.useContext(Ia);return hn(e,Uh(s)),e}function iS(s){let e=K.useContext(nc);return hn(e,Uh(s)),e}function rS(s){let e=K.useContext(Rr);return hn(e,Uh(s)),e}function Fh(s){let e=rS(s),t=e.matches[e.matches.length-1];return hn(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function sS(){return Fh("useRouteId")}function aS(){var i;let s=K.useContext(Dh),e=iS("useRouteError"),t=Fh("useRouteError");return s!==void 0?s:(i=e.errors)==null?void 0:i[t]}function oS(){let{router:s}=nS("useNavigate"),e=Fh("useNavigate"),t=K.useRef(!1);return Iv(()=>{t.current=!0}),K.useCallback(async(a,o={})=>{tr(t.current,Lv),t.current&&(typeof a=="number"?await s.navigate(a):await s.navigate(a,{fromRouteId:e,...o}))},[s,e])}var Gg={};function Fv(s,e,t){!e&&!Gg[s]&&(Gg[s]=!0,tr(!1,t))}K.memo(lS);function lS({routes:s,future:e,state:t,onError:i}){return Dv(s,void 0,t,i,e)}function Iu(s){hn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uS({basename:s="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1,unstable_useTransitions:u}){hn(!jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:f,navigator:a,static:o,unstable_useTransitions:u,future:{}}),[f,a,o,u]);typeof t=="string"&&(t=La(t));let{pathname:h="/",search:g="",hash:_="",state:m=null,key:y="default"}=t,M=K.useMemo(()=>{let b=Tr(h,f);return b==null?null:{location:{pathname:b,search:g,hash:_,state:m,key:y},navigationType:i}},[f,h,g,_,m,y,i]);return tr(M!=null,`<Router basename="${f}"> is not able to match the URL "${h}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:K.createElement(Ri.Provider,{value:d},K.createElement(Wo.Provider,{children:e,value:M}))}function cS({children:s,location:e}){return Ky(Fd(s),e)}function Fd(s,e=[]){let t=[];return K.Children.forEach(s,(i,a)=>{if(!K.isValidElement(i))return;let o=[...e,a];if(i.type===K.Fragment){t.push.apply(t,Fd(i.props.children,o));return}hn(i.type===Iu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),hn(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Fd(i.props.children,o)),t.push(u)}),t}var Du="get",Uu="application/x-www-form-urlencoded";function rc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function fS(s){return rc(s)&&s.tagName.toLowerCase()==="button"}function dS(s){return rc(s)&&s.tagName.toLowerCase()==="form"}function hS(s){return rc(s)&&s.tagName.toLowerCase()==="input"}function pS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function mS(s,e){return s.button===0&&(!e||e==="_self")&&!pS(s)}var Zl=null;function gS(){if(Zl===null)try{new FormData(document.createElement("form"),0),Zl=!1}catch{Zl=!0}return Zl}var vS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yf(s){return s!=null&&!vS.has(s)?(tr(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uu}"`),null):s}function _S(s,e){let t,i,a,o,u;if(dS(s)){let f=s.getAttribute("action");i=f?Tr(f,e):null,t=s.getAttribute("method")||Du,a=Yf(s.getAttribute("enctype"))||Uu,o=new FormData(s)}else if(fS(s)||hS(s)&&(s.type==="submit"||s.type==="image")){let f=s.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=s.getAttribute("formaction")||f.getAttribute("action");if(i=d?Tr(d,e):null,t=s.getAttribute("formmethod")||f.getAttribute("method")||Du,a=Yf(s.getAttribute("formenctype"))||Yf(f.getAttribute("enctype"))||Uu,o=new FormData(f,s),!gS()){let{name:h,type:g,value:_}=s;if(g==="image"){let m=h?`${h}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else h&&o.append(h,_)}}else{if(rc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Du,i=null,a=Uu,u=s}return o&&a==="text/plain"&&(u=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Oh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function xS(s,e,t,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${i}`:a.pathname=`${a.pathname}.${i}`:a.pathname==="/"?a.pathname=`_root.${i}`:e&&Tr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function yS(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function SS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function MS(s,e,t){let i=await Promise.all(s.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await yS(o,t);return u.links?u.links():[]}return[]}));return bS(i.flat(1).filter(SS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Wg(s,e,t,i,a,o){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,f=(d,h)=>{var g;return t[h].pathname!==d.pathname||((g=t[h].route.path)==null?void 0:g.endsWith("*"))&&t[h].params["*"]!==d.params["*"]};return o==="assets"?e.filter((d,h)=>u(d,h)||f(d,h)):o==="data"?e.filter((d,h)=>{var _;let g=i.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(u(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(s,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function ES(s,e,{includeHydrateFallback:t}={}){return wS(s.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function wS(s){return[...new Set(s)]}function TS(s){let e={},t=Object.keys(s).sort();for(let i of t)e[i]=s[i];return e}function bS(s,e){let t=new Set;return new Set(e),s.reduce((i,a)=>{let o=JSON.stringify(TS(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function Ov(){let s=K.useContext(Ia);return Oh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function AS(){let s=K.useContext(nc);return Oh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var kh=K.createContext(void 0);kh.displayName="FrameworkContext";function kv(){let s=K.useContext(kh);return Oh(s,"You must render this element inside a <HydratedRouter> element"),s}function RS(s,e){let t=K.useContext(kh),[i,a]=K.useState(!1),[o,u]=K.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:g,onTouchStart:_}=e,m=K.useRef(null);K.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let b=S=>{S.forEach(A=>{u(A.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return m.current&&x.observe(m.current),()=>{x.disconnect()}}},[s]),K.useEffect(()=>{if(i){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[i]);let y=()=>{a(!0)},M=()=>{a(!1),u(!1)};return t?s!=="intent"?[o,m,{}]:[o,m,{onFocus:vo(f,y),onBlur:vo(d,M),onMouseEnter:vo(h,y),onMouseLeave:vo(g,M),onTouchStart:vo(_,y)}]:[!1,m,{}]}function vo(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function CS({page:s,...e}){let{router:t}=Ov(),i=K.useMemo(()=>Mv(t.routes,s,t.basename),[t.routes,s,t.basename]);return i?K.createElement(NS,{page:s,matches:i,...e}):null}function PS(s){let{manifest:e,routeModules:t}=kv(),[i,a]=K.useState([]);return K.useEffect(()=>{let o=!1;return MS(s,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[s,e,t]),i}function NS({page:s,matches:e,...t}){let i=Ls(),{future:a,manifest:o,routeModules:u}=kv(),{basename:f}=Ov(),{loaderData:d,matches:h}=AS(),g=K.useMemo(()=>Wg(s,e,h,o,i,"data"),[s,e,h,o,i]),_=K.useMemo(()=>Wg(s,e,h,o,i,"assets"),[s,e,h,o,i]),m=K.useMemo(()=>{if(s===i.pathname+i.search+i.hash)return[];let b=new Set,x=!1;if(e.forEach(A=>{var P;let R=o.routes[A.route.id];!R||!R.hasLoader||(!g.some(U=>U.route.id===A.route.id)&&A.route.id in d&&((P=u[A.route.id])!=null&&P.shouldRevalidate)||R.hasClientLoader?x=!0:b.add(A.route.id))}),b.size===0)return[];let S=xS(s,f,a.unstable_trailingSlashAwareDataRequests,"data");return x&&b.size>0&&S.searchParams.set("_routes",e.filter(A=>b.has(A.route.id)).map(A=>A.route.id).join(",")),[S.pathname+S.search]},[f,a.unstable_trailingSlashAwareDataRequests,d,i,o,g,e,s,u]),y=K.useMemo(()=>ES(_,o),[_,o]),M=PS(_);return K.createElement(K.Fragment,null,m.map(b=>K.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),y.map(b=>K.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),M.map(({key:b,link:x})=>K.createElement("link",{key:b,nonce:t.nonce,...x,crossOrigin:x.crossOrigin??t.crossOrigin})))}function LS(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var IS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{IS&&(window.__reactRouterVersion="7.13.0")}catch{}function DS({basename:s,children:e,unstable_useTransitions:t,window:i}){let a=K.useRef();a.current==null&&(a.current=py({window:i,v5Compat:!0}));let o=a.current,[u,f]=K.useState({action:o.action,location:o.location}),d=K.useCallback(h=>{t===!1?f(h):K.startTransition(()=>f(h))},[t]);return K.useLayoutEffect(()=>o.listen(d),[o,d]),K.createElement(uS,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:o,unstable_useTransitions:t})}var Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=K.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:u,state:f,target:d,to:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:m,...y},M){let{basename:b,unstable_useTransitions:x}=K.useContext(Ri),S=typeof h=="string"&&Bv.test(h),A=Rv(h,b);h=A.to;let R=Yy(h,{relative:a}),[P,U,L]=RS(i,y),O=kS(h,{replace:u,state:f,target:d,preventScrollReset:g,relative:a,viewTransition:_,unstable_defaultShouldRevalidate:m,unstable_useTransitions:x});function w(V){e&&e(V),V.defaultPrevented||O(V)}let I=K.createElement("a",{...y,...L,href:A.absoluteURL||R,onClick:A.isExternal||o?e:w,ref:LS(M,U),target:d,"data-discover":!S&&t==="render"?"true":void 0});return P&&!S?K.createElement(K.Fragment,null,I,K.createElement(CS,{page:R})):I});zv.displayName="Link";var US=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:u,viewTransition:f,children:d,...h},g){let _=Xo(u,{relative:h.relative}),m=Ls(),y=K.useContext(nc),{navigator:M,basename:b}=K.useContext(Ri),x=y!=null&&GS(_)&&f===!0,S=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,A=m.pathname,R=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(A=A.toLowerCase(),R=R?R.toLowerCase():null,S=S.toLowerCase()),R&&b&&(R=Tr(R,b)||R);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let U=A===S||!a&&A.startsWith(S)&&A.charAt(P)==="/",L=R!=null&&(R===S||!a&&R.startsWith(S)&&R.charAt(S.length)==="/"),O={isActive:U,isPending:L,isTransitioning:x},w=U?e:void 0,I;typeof i=="function"?I=i(O):I=[i,U?"active":null,L?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let V=typeof o=="function"?o(O):o;return K.createElement(zv,{...h,"aria-current":w,className:I,ref:g,style:V,to:u,viewTransition:f},typeof d=="function"?d(O):d)});US.displayName="NavLink";var FS=K.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:u=Du,action:f,onSubmit:d,relative:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:m,...y},M)=>{let{unstable_useTransitions:b}=K.useContext(Ri),x=VS(),S=HS(f,{relative:h}),A=u.toLowerCase()==="get"?"get":"post",R=typeof f=="string"&&Bv.test(f),P=U=>{if(d&&d(U),U.defaultPrevented)return;U.preventDefault();let L=U.nativeEvent.submitter,O=(L==null?void 0:L.getAttribute("formmethod"))||u,w=()=>x(L||U.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:a,state:o,relative:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:m});b&&t!==!1?K.startTransition(()=>w()):w()};return K.createElement("form",{ref:M,method:A,action:S,onSubmit:i?d:P,...y,"data-discover":!R&&s==="render"?"true":void 0})});FS.displayName="Form";function OS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vv(s){let e=K.useContext(Ia);return hn(e,OS(s)),e}function kS(s,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:d}={}){let h=ic(),g=Ls(),_=Xo(s,{relative:o});return K.useCallback(m=>{if(mS(m,e)){m.preventDefault();let y=t!==void 0?t:Bo(g)===Bo(_),M=()=>h(s,{replace:y,state:i,preventScrollReset:a,relative:o,viewTransition:u,unstable_defaultShouldRevalidate:f});d?K.startTransition(()=>M()):M()}},[g,h,_,t,i,e,s,a,o,u,f,d])}var BS=0,zS=()=>`__${String(++BS)}__`;function VS(){let{router:s}=Vv("useSubmit"),{basename:e}=K.useContext(Ri),t=sS(),i=s.fetch,a=s.navigate;return K.useCallback(async(o,u={})=>{let{action:f,method:d,encType:h,formData:g,body:_}=_S(o,e);if(u.navigate===!1){let m=u.fetcherKey||zS();await i(m,t,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:_,formMethod:u.method||d,formEncType:u.encType||h,flushSync:u.flushSync})}else await a(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:_,formMethod:u.method||d,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,a,e,t])}function HS(s,{relative:e}={}){let{basename:t}=K.useContext(Ri),i=K.useContext(Rr);hn(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...Xo(s||".",{relative:e})},u=Ls();if(s==null){o.search=u.search;let f=new URLSearchParams(o.search),d=f.getAll("index");if(d.some(g=>g==="")){f.delete("index"),d.filter(_=>_).forEach(_=>f.append("index",_));let g=f.toString();o.search=g?`?${g}`:""}}return(!s||s===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Mr([t,o.pathname])),Bo(o)}function GS(s,{relative:e}={}){let t=K.useContext(Pv);hn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Vv("useViewTransitionState"),a=Xo(s,{relative:e});if(!t.isTransitioning)return!1;let o=Tr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=Tr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Gu(a.pathname,u)!=null||Gu(a.pathname,o)!=null}const WS="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function jS(s){const[e,t]=K.useState(!1),i=()=>{t(!0)},{src:a,alt:o,style:u,className:f,...d}=s;return e?z.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:u,children:z.jsx("div",{className:"flex items-center justify-center w-full h-full",children:z.jsx("img",{src:WS,alt:"Error loading image",...d,"data-original-url":a})})}):z.jsx("img",{src:a,alt:o,className:f,style:u,...d,onError:i})}const XS="/assets/iconaws-CrGCPrQX.png";function ln(s){const e=Math.sin(s+1)*1e4;return e-Math.floor(e)}const $S=["W","O","R","D","L","E","G","R","U"],YS=[{num:"1",title:"Setup AR Mode",body:"Point your camera at a flat surface and wait for plane detection."},{num:"2",title:"Smash Asteroids",body:"Tap on 3D asteroids to shatter them and collect falling letters."},{num:"3",title:"Solve Words",body:"Arrange letters to complete 5-letter words from the Warden's Codex."},{num:"4",title:"Color Feedback",body:null,feedback:[{dot:"#10b981",label:"Green",desc:"Correct letter, correct position"},{dot:"#facc15",label:"Yellow",desc:"Correct letter, wrong position"},{dot:"#6b7280",label:"Gray",desc:"Letter not in word"}]},{num:"5",title:"Defeat the Boss",body:"Survive enemy attacks and complete the Final Seal word to defeat the Rift Overlord."}];function qS(){const s=ic(),[e,t]=K.useState(!1),i=K.useMemo(()=>Array.from({length:30},(d,h)=>({id:h,x:ln(h*7.31)*100,y:ln(h*3.71)*100,size:ln(h*5.13)>.8?3:2,delay:`${ln(h*2.91)*4}s`,duration:`${1.5+ln(h*1.33)*2.5}s`})),[]),a=K.useMemo(()=>$S.map((d,h)=>({id:h,char:d,x:ln(h*11.71)*82+5,y:ln(h*8.31)*75+5,color:["#10b981","#facc15","#a78bfa"][h%3],border:["#10b981","#facc15","#8b5cf6"][h%3],delay:`${ln(h*6.71)*4}s`,duration:`${5+ln(h*9.11)*4}s`,drift:`${(ln(h*4.11)-.5)*40}px`})),[]),o=K.useMemo(()=>Array.from({length:7},(d,h)=>({id:h,x:ln(h*13.11)*88+3,size:Math.floor(4+ln(h*5.91)*6),delay:`${ln(h*7.71)*7}s`,duration:`${3+ln(h*2.31)*3}s`,xDrift:`${(ln(h*3.71)-.5)*50}px`})),[]),u=K.useMemo(()=>Array.from({length:14},(d,h)=>({id:h,x:ln(h*17.31)*85+5,color:ln(h*6.31)>.5?"#f97316":"#facc15",size:Math.floor(2+ln(h*3.91)*3),delay:`${ln(h*4.91)*6}s`,duration:`${2+ln(h*8.11)*2.5}s`})),[]),f=K.useMemo(()=>Array.from({length:8},(d,h)=>({id:h,x:ln(h*9.31)*80+10,y:ln(h*6.11)*70+15,delay:`${ln(h*3.51)*6}s`,duration:`${.4+ln(h*7.11)*.5}s`})),[]);return z.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 py-12 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[z.jsx("style",{children:`
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
      `}),i.map(d=>z.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:`${d.size}px`,height:`${d.size}px`,animation:`twinkle ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:1}},`star-${d.id}`)),a.map(d=>z.jsx("div",{className:"absolute flex items-center justify-center pointer-events-none select-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:"22px",height:"22px",border:`2px solid ${d.border}`,backgroundColor:"#1a0a2e",color:d.color,fontSize:"8px",fontFamily:"'Press Start 2P', monospace",textShadow:`0 0 8px ${d.color}`,boxShadow:`0 0 6px ${d.border}55, inset 0 0 4px ${d.border}22`,"--drift":d.drift,animation:`letterFloat ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:2},children:d.char},`letter-${d.id}`)),o.map(d=>z.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,top:"-12px",width:`${d.size}px`,height:`${d.size}px`,backgroundColor:"#78716c",boxShadow:"1px 1px 0 #a8a29e, 0 0 4px #f97316","--x-drift":d.xDrift,animation:`meteorFall ${d.duration} ${d.delay} linear infinite`,zIndex:2}},`meteor-${d.id}`)),u.map(d=>z.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,bottom:"8px",width:`${d.size}px`,height:`${d.size}px`,backgroundColor:d.color,boxShadow:`0 0 4px ${d.color}, 0 0 8px ${d.color}88`,animation:`emberRise ${d.duration} ${d.delay} ease-out infinite`,zIndex:2}},`ember-${d.id}`)),f.map(d=>z.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:"4px",height:"4px",backgroundColor:"#60a5fa",boxShadow:"0 0 6px #3b82f6, 0 0 14px #93c5fd, 2px -2px 0 #bfdbfe, -2px 2px 0 #bfdbfe",animation:`electricSpark ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:2}},`spark-${d.id}`)),z.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),z.jsxs("div",{className:"flex flex-col items-center mt-8 relative z-10",children:[z.jsx("div",{className:"w-32 h-32 mb-6 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2",style:{imageRendering:"pixelated",animation:"iconGlow 4s ease-in-out infinite"},children:z.jsx(jS,{src:XS,alt:"AR Wordle Smasher Icon",className:"w-full h-full object-contain",style:{imageRendering:"pixelated"}})}),z.jsxs("h1",{className:"text-xl text-center mb-4 leading-relaxed tracking-wide",children:[z.jsx("span",{className:"text-[#10b981]",children:"AR"})," ",z.jsx("span",{className:"text-[#8b5cf6]",children:"WORDLE"}),z.jsx("br",{}),z.jsx("span",{className:"text-[#ec4899]",children:"SMASHER"})]}),z.jsx("p",{className:"text-[8px] text-[#a78bfa] text-center mb-2 tracking-wider uppercase leading-relaxed",children:"The Warden's Codex"})]}),z.jsx("div",{className:"flex flex-col items-center space-y-6 flex-grow justify-center relative z-10 w-full",children:z.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#8b5cf6] p-4 w-full relative",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsxs("p",{className:"text-[9px] text-white/90 text-center leading-[16px]",children:["Smash meteors in AR, collect letters, and solve puzzles to defeat the"," ",z.jsx("span",{className:"text-[#ec4899]",children:"Rift Overlord"})]})]})}),z.jsxs("div",{className:"w-full space-y-4 mb-8 relative z-10",children:[z.jsxs("button",{onClick:()=>s("/mission"),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> START MISSION <"]}),z.jsxs("button",{onClick:()=>t(!0),className:"w-full bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"How to Play"]})]}),e&&z.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center px-4 pb-0",style:{backgroundColor:"rgba(10,1,24,0.85)",animation:"backdropFadeIn 0.25s ease-out"},onClick:()=>t(!1),children:z.jsxs("div",{className:"w-full max-w-md bg-[#0a0118] border-4 border-[#8b5cf6] relative overflow-y-auto",style:{maxHeight:"88vh",animation:"modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},onClick:d=>d.stopPropagation(),children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsxs("div",{className:"bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between",style:{animation:"headerSlideDown 0.3s 0.15s ease-out both"},children:[z.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"HOW TO PLAY"}),z.jsx("button",{onClick:()=>t(!1),className:"text-[#a78bfa] hover:text-white text-[9px] transition-colors",children:"✕"})]}),z.jsx("div",{className:"px-5 py-4 space-y-5",children:YS.map((d,h)=>z.jsxs("div",{className:"flex gap-3",style:{animation:`stepFadeIn 0.3s ${.2+h*.07}s ease-out both`},children:[z.jsx("div",{className:"w-6 h-6 flex-shrink-0 flex items-center justify-center border-2 border-[#ec4899] bg-[#1a0a2e]",style:{fontSize:"8px",color:"#ec4899"},children:d.num}),z.jsxs("div",{className:"flex-1",children:[z.jsx("p",{className:"text-[8px] text-[#facc15] mb-1 tracking-wide",children:d.title}),"body"in d&&d.body&&z.jsx("p",{className:"text-[7px] text-white/70 leading-[14px]",children:d.body}),"feedback"in d&&d.feedback&&z.jsx("div",{className:"space-y-1.5 mt-1",children:d.feedback.map(g=>z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("div",{className:"w-3 h-3 flex-shrink-0",style:{backgroundColor:g.dot,boxShadow:`0 0 4px ${g.dot}`}}),z.jsxs("span",{className:"text-[7px] leading-[13px]",style:{color:g.dot},children:[g.label,":"]}),z.jsx("span",{className:"text-[7px] text-white/60 leading-[13px]",children:g.desc})]},g.label))})]})]},d.num))}),z.jsx("div",{className:"px-5 pb-5",children:z.jsxs("button",{onClick:()=>t(!1),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"Got It!"]})}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"})]})})]})}function _o(s){const e=Math.sin(s+1)*1e4;return e-Math.floor(e)}const Jl=[{label:"CAMERA MODULE",run:async()=>{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>e.stop())}},{label:"AR PLANE DETECT",run:async()=>{if(!("xr"in navigator))throw new Error("WebXR not supported");if(!await navigator.xr.isSessionSupported("immersive-ar"))throw new Error("AR not supported")}},{label:"CODEX LINK",run:async()=>{if(!navigator.onLine)throw new Error("No network")}},{label:"ENEMY SCANNER",run:async()=>{if(!("DeviceOrientationEvent"in window))throw new Error("No motion sensor");await new Promise(s=>setTimeout(s,500))}}];function KS(){const s=ic(),[e,t]=K.useState(Jl.map(()=>"idle")),[i,a]=K.useState(!1);K.useEffect(()=>{let u=!1;return(async()=>{for(let d=0;d<Jl.length;d++){if(u)return;t(h=>{const g=[...h];return g[d]="checking",g});try{await Jl[d].run(),u||t(h=>{const g=[...h];return g[d]="ok",g})}catch{u||t(h=>{const g=[...h];return g[d]="fail",g})}}u||a(!0)})(),()=>{u=!0}},[]);const o=K.useMemo(()=>Array.from({length:22},(u,f)=>({id:f,x:_o(f*6.17)*100,y:_o(f*4.23)*100,size:_o(f*2.71)>.8?3:2,delay:`${_o(f*3.91)*4}s`,duration:`${1.5+_o(f*1.17)*2}s`})),[]);return z.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col px-6 py-8 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[z.jsx("style",{children:`
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
      `}),z.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),o.map(u=>z.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${u.x}%`,top:`${u.y}%`,width:`${u.size}px`,height:`${u.size}px`,animation:`twinkle ${u.duration} ${u.delay} ease-in-out infinite`,zIndex:1}},`star-${u.id}`)),z.jsxs("div",{className:"flex items-center justify-between mb-4 relative z-10",children:[z.jsx("button",{onClick:()=>s("/"),className:"text-[8px] text-[#a78bfa] hover:text-white transition-colors",children:"← BACK"}),z.jsxs("div",{className:"text-[7px] text-[#10b981] border-2 border-[#10b981] px-2 py-1 relative",children:[z.jsx("div",{className:"absolute top-0 left-0 w-1 h-1 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"}),"WAVE 01"]})]}),z.jsx("h2",{className:"text-[11px] text-[#8b5cf6] text-center mb-5 tracking-widest relative z-10",children:"MISSION BRIEF"}),z.jsxs("div",{className:"flex flex-col items-center mb-5 relative z-10",children:[z.jsxs("div",{className:"relative w-32 h-32",children:[z.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/20"}),z.jsx("div",{className:"absolute inset-[22%] rounded-full border border-[#10b981]/30"}),z.jsx("div",{className:"absolute inset-[44%] rounded-full border-2 border-[#10b981]/60"}),z.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/50",style:{animation:"radarPing 2s 0s ease-out infinite"}}),z.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/30",style:{animation:"radarPing 2s 0.9s ease-out infinite"}}),z.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-full",style:{animation:"radarSweep 3s linear infinite"},children:[z.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.13) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)"}}),z.jsx("div",{className:"absolute top-1/2 origin-left",style:{left:"50%",width:"50%",height:"1px",background:"linear-gradient(to right, rgba(16,185,129,0.9), rgba(16,185,129,0.05))",transform:"translateY(-50%)"}})]}),z.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]",style:{boxShadow:"0 0 6px #10b981"}}),i&&z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#ec4899]",style:{top:"24%",left:"61%",boxShadow:"0 0 5px #ec4899",animation:"blipBlink 1.1s ease-in-out infinite"}}),z.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#facc15]",style:{top:"66%",left:"27%",boxShadow:"0 0 4px #facc15",animation:"blipBlink 0.9s 0.35s ease-in-out infinite"}}),z.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#f97316]",style:{top:"47%",left:"75%",boxShadow:"0 0 4px #f97316",animation:"blipBlink 1.3s 0.7s ease-in-out infinite"}})]})]}),z.jsx("p",{className:"text-[7px] mt-3 tracking-wider",style:{color:i?"#10b981":"#a78bfa",animation:i?"none":"blinkAnim 1s ease-in-out infinite"},children:i?"SURFACE DETECTED ✓":"SCANNING SURFACE..."})]}),z.jsxs("div",{className:"bg-[#1a0a2e] border-2 border-[#8b5cf6] p-3 mb-4 relative z-10",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-3 tracking-widest",children:"SYSTEM STATUS"}),z.jsx("div",{className:"space-y-2",children:Jl.map((u,f)=>{const d=e[f],h=d==="ok"?"#10b981":d==="fail"?"#ef4444":d==="checking"?"#facc15":"#1f2937",g=d==="ok"?"#10b981":d==="fail"?"#ef4444":d==="checking"?"#facc15":"#374151";return z.jsxs("div",{className:"flex items-center gap-2",style:d==="ok"||d==="fail"?{animation:"slideIn 0.25s ease-out"}:{},children:[z.jsxs("div",{className:"w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",style:{borderColor:h,backgroundColor:d==="ok"?"#10b981":d==="fail"?"#ef4444":"transparent"},children:[d==="ok"&&z.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✓"}),d==="fail"&&z.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✕"}),d==="checking"&&z.jsx("span",{className:"text-[#facc15] leading-none",style:{fontSize:"6px",animation:"blinkAnim 0.5s ease-in-out infinite"},children:"■"})]}),z.jsx("span",{className:"text-[7px] tracking-wide transition-colors duration-200",style:{color:g},children:u.label}),d==="fail"&&z.jsx("span",{className:"text-[6px] text-[#ef444499] ml-auto",children:"FAILED"})]},f)})})]}),z.jsxs("div",{className:"bg-[#1a0a2e] border-2 border-[#ec4899] p-3 mb-5 relative z-10",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-2 tracking-widest",children:"TARGET WORD"}),z.jsxs("p",{className:"text-[7px] text-white/70 mb-3 leading-[14px]",children:["HINT: ",z.jsx("span",{className:"text-[#facc15]",children:"A CELESTIAL BODY"})]}),z.jsx("div",{className:"flex gap-2 justify-center",children:Array.from({length:5},(u,f)=>z.jsx("div",{className:"w-9 h-9 border-2 border-white/20 bg-[#0a0118] flex items-center justify-center",children:z.jsx("span",{className:"text-white/15 text-[8px]",children:"?"})},f))})]}),z.jsxs("button",{disabled:!i,onClick:()=>i&&s("/ar"),className:"w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300",style:{backgroundColor:i?"#8b5cf6":"#1a0a2e",borderColor:i?"#ec4899":"#1f2937",color:i?"#ffffff":"#374151",cursor:i?"pointer":"not-allowed",animation:i?"engagePulse 2s ease-in-out infinite":"none"},children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),i?"> ENGAGE MISSION <":"INITIALIZING..."]})]})}const ZS="modulepreload",JS=function(s){return"/"+s},jg={},QS=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=u(t.map(h=>{if(h=JS(h),h in jg)return;jg[h]=!0;const g=h.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":ZS,g||(m.as="script"),m.crossOrigin="",m.href=h,d&&m.setAttribute("nonce",d),document.head.appendChild(m),g)return new Promise((y,M)=>{m.addEventListener("load",y),m.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return a.then(u=>{for(const f of u||[])f.status==="rejected"&&o(f.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="184",eM=0,Xg=1,tM=2,Fu=1,nM=2,Do=3,rs=0,oi=1,Zi=2,Er=0,Ta=1,$g=2,Yg=3,qg=4,iM=5,bs=100,rM=101,sM=102,aM=103,oM=104,lM=200,uM=201,cM=202,fM=203,Od=204,kd=205,dM=206,hM=207,pM=208,mM=209,gM=210,vM=211,_M=212,xM=213,yM=214,Bd=0,zd=1,Vd=2,Aa=3,Hd=4,Gd=5,Wd=6,jd=7,Hv=0,SM=1,MM=2,Qi=0,Gv=1,Wv=2,jv=3,zh=4,Xv=5,$v=6,Yv=7,Kg="attached",EM="detached",qv=300,Ps=301,Ra=302,qf=303,Kf=304,sc=306,Xd=1e3,yr=1001,$d=1002,On=1003,wM=1004,Ql=1005,jn=1006,Zf=1007,Rs=1008,gi=1009,Kv=1010,Zv=1011,zo=1012,Vh=1013,nr=1014,bi=1015,br=1016,Hh=1017,Gh=1018,Vo=1020,Jv=35902,Qv=35899,e_=1021,t_=1022,Ai=1023,Ar=1026,Cs=1027,Wh=1028,jh=1029,Ns=1030,Xh=1031,$h=1033,Ou=33776,ku=33777,Bu=33778,zu=33779,Yd=35840,qd=35841,Kd=35842,Zd=35843,Jd=36196,Qd=37492,eh=37496,th=37488,nh=37489,Wu=37490,ih=37491,rh=37808,sh=37809,ah=37810,oh=37811,lh=37812,uh=37813,ch=37814,fh=37815,dh=37816,hh=37817,ph=37818,mh=37819,gh=37820,vh=37821,_h=36492,xh=36494,yh=36495,Sh=36283,Mh=36284,ju=36285,Eh=36286,Xu=2300,wh=2301,Jf=2302,Zg=2303,Jg=2400,Qg=2401,e0=2402,TM=2500,UR=0,FR=1,OR=2,bM=3200,Th=0,AM=1,ns="",si="srgb",$u="srgb-linear",Yu="linear",Wt="srgb",sa=7680,t0=519,RM=512,CM=513,PM=514,Yh=515,NM=516,LM=517,qh=518,IM=519,bh=35044,n0="300 es",Ji=2e3,Ho=2001;function DM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function UM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function FM(){const s=Go("canvas");return s.style.display="block",s}const i0={};function qu(...s){const e="THREE."+s.shift();console.log(e,...s)}function n_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=n_(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ut(...s){s=n_(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ah(...s){const e=s.join(" ");e in i0||(i0[e]=!0,it(...s))}function OM(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const kM={[Bd]:zd,[Vd]:Wd,[Hd]:jd,[Aa]:Gd,[zd]:Bd,[Wd]:Vd,[jd]:Hd,[Gd]:Aa};class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let r0=1234567;const Oo=Math.PI/180,Ca=180/Math.PI;function Vi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Kh(s,e){return(s%e+e)%e}function BM(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function zM(s,e,t){return s!==e?(t-s)/(e-s):0}function ko(s,e,t){return(1-t)*s+t*e}function VM(s,e,t,i){return ko(s,e,1-Math.exp(-t*i))}function HM(s,e=1){return e-Math.abs(Kh(s,e*2)-e)}function GM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function WM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function XM(s,e){return s+Math.random()*(e-s)}function $M(s){return s*(.5-Math.random())}function YM(s){s!==void 0&&(r0=s);let e=r0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qM(s){return s*Oo}function KM(s){return s*Ca}function ZM(s){return(s&s-1)===0&&s!==0}function JM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function QM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function eE(s,e,t,i,a){const o=Math.cos,u=Math.sin,f=o(t/2),d=u(t/2),h=o((e+i)/2),g=u((e+i)/2),_=o((e-i)/2),m=u((e-i)/2),y=o((i-e)/2),M=u((i-e)/2);switch(a){case"XYX":s.set(f*g,d*_,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*_,f*h);break;case"ZXZ":s.set(d*_,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*M,d*y,f*h);break;case"YXY":s.set(d*y,f*g,d*M,f*h);break;case"ZYZ":s.set(d*M,d*y,f*g,f*h);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kR={DEG2RAD:Oo,RAD2DEG:Ca,generateUUID:Vi,clamp:Ct,euclideanModulo:Kh,mapLinear:BM,inverseLerp:zM,lerp:ko,damp:VM,pingpong:HM,smoothstep:GM,smootherstep:WM,randInt:jM,randFloat:XM,randFloatSpread:$M,seededRandom:YM,degToRad:qM,radToDeg:KM,isPowerOfTwo:ZM,ceilPowerOfTwo:JM,floorPowerOfTwo:QM,setQuaternionFromProperEuler:eE,normalize:jt,denormalize:zi},lp=class lp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*a+e.x,this.y=o*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lp.prototype.isVector2=!0;let yt=lp;class Ds{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,u,f){let d=i[a+0],h=i[a+1],g=i[a+2],_=i[a+3],m=o[u+0],y=o[u+1],M=o[u+2],b=o[u+3];if(_!==b||d!==m||h!==y||g!==M){let x=d*m+h*y+g*M+_*b;x<0&&(m=-m,y=-y,M=-M,b=-b,x=-x);let S=1-f;if(x<.9995){const A=Math.acos(x),R=Math.sin(A);S=Math.sin(S*A)/R,f=Math.sin(f*A)/R,d=d*S+m*f,h=h*S+y*f,g=g*S+M*f,_=_*S+b*f}else{d=d*S+m*f,h=h*S+y*f,g=g*S+M*f,_=_*S+b*f;const A=1/Math.sqrt(d*d+h*h+g*g+_*_);d*=A,h*=A,g*=A,_*=A}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,o,u){const f=i[a],d=i[a+1],h=i[a+2],g=i[a+3],_=o[u],m=o[u+1],y=o[u+2],M=o[u+3];return e[t]=f*M+g*_+d*y-h*m,e[t+1]=d*M+g*m+h*_-f*y,e[t+2]=h*M+g*y+f*m-d*_,e[t+3]=g*M-f*_-d*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(i/2),g=f(a/2),_=f(o/2),m=d(i/2),y=d(a/2),M=d(o/2);switch(u){case"XYZ":this._x=m*g*_+h*y*M,this._y=h*y*_-m*g*M,this._z=h*g*M+m*y*_,this._w=h*g*_-m*y*M;break;case"YXZ":this._x=m*g*_+h*y*M,this._y=h*y*_-m*g*M,this._z=h*g*M-m*y*_,this._w=h*g*_+m*y*M;break;case"ZXY":this._x=m*g*_-h*y*M,this._y=h*y*_+m*g*M,this._z=h*g*M+m*y*_,this._w=h*g*_-m*y*M;break;case"ZYX":this._x=m*g*_-h*y*M,this._y=h*y*_+m*g*M,this._z=h*g*M-m*y*_,this._w=h*g*_+m*y*M;break;case"YZX":this._x=m*g*_+h*y*M,this._y=h*y*_+m*g*M,this._z=h*g*M-m*y*_,this._w=h*g*_-m*y*M;break;case"XZY":this._x=m*g*_-h*y*M,this._y=h*y*_-m*g*M,this._z=h*g*M+m*y*_,this._w=h*g*_+m*y*M;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],u=t[1],f=t[5],d=t[9],h=t[2],g=t[6],_=t[10],m=i+f+_;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-d)*y,this._y=(o-h)*y,this._z=(u-a)*y}else if(i>f&&i>_){const y=2*Math.sqrt(1+i-f-_);this._w=(g-d)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(o+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-i-_);this._w=(o-h)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+_-i-f);this._w=(u-a)/y,this._x=(o+h)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,u=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=i*g+u*f+a*h-o*d,this._y=a*g+u*d+o*f-i*h,this._z=o*g+u*h+i*d-a*f,this._w=u*g-i*f-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,u=e._w,f=this.dot(e);f<0&&(i=-i,a=-a,o=-o,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*a-f*i),g=2*(f*t-o*a),_=2*(o*i-u*t);return this.x=t+d*h+u*_-f*g,this.y=i+d*g+f*h-o*_,this.z=a+d*_+o*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,u=t.x,f=t.y,d=t.z;return this.x=a*d-o*f,this.y=o*u-i*d,this.z=i*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let Y=up;const Qf=new Y,s0=new Ds,cp=class cp{constructor(e,t,i,a,o,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h)}set(e,t,i,a,o,u,f,d,h){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=o,g[5]=d,g[6]=i,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],g=i[4],_=i[7],m=i[2],y=i[5],M=i[8],b=a[0],x=a[3],S=a[6],A=a[1],R=a[4],P=a[7],U=a[2],L=a[5],O=a[8];return o[0]=u*b+f*A+d*U,o[3]=u*x+f*R+d*L,o[6]=u*S+f*P+d*O,o[1]=h*b+g*A+_*U,o[4]=h*x+g*R+_*L,o[7]=h*S+g*P+_*O,o[2]=m*b+y*A+M*U,o[5]=m*x+y*R+M*L,o[8]=m*S+y*P+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-i*o*g+i*f*d+a*o*h-a*u*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=g*u-f*h,m=f*d-g*o,y=h*o-u*d,M=t*_+i*m+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=_*b,e[1]=(a*h-g*i)*b,e[2]=(f*i-a*u)*b,e[3]=m*b,e[4]=(g*t-a*d)*b,e[5]=(a*o-f*t)*b,e[6]=y*b,e[7]=(i*d-h*t)*b,e[8]=(u*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,u,f){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*f)+u+e,-a*h,a*d,-a*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cp.prototype.isMatrix3=!0;let xt=cp;const ed=new xt,a0=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o0=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){const s={enabled:!0,workingColorSpace:$u,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Wt&&(a.r=wr(a.r),a.g=wr(a.g),a.b=wr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(a.r=ba(a.r),a.g=ba(a.g),a.b=ba(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ns?Yu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Ah("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Ah("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[$u]:{primaries:e,whitePoint:i,transfer:Yu,toXYZ:a0,fromXYZ:o0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:Wt,toXYZ:a0,fromXYZ:o0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Nt=tE();function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ba(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let aa;class nE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{aa===void 0&&(aa=Go("canvas")),aa.width=e.width,aa.height=e.height;const a=aa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=aa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=wr(o[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iE=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?o.push(td(a[u].image)):o.push(td(a[u]))}else o=td(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let rE=0;const nd=new Y;class kn extends Is{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,i=yr,a=yr,o=jn,u=Rs,f=Ai,d=gi,h=kn.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Vi(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=qv;kn.DEFAULT_ANISOTROPY=1;const fp=class fp{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],g=d[4],_=d[8],m=d[1],y=d[5],M=d[9],b=d[2],x=d[6],S=d[10];if(Math.abs(g-m)<.01&&Math.abs(_-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+b)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,P=(y+1)/2,U=(S+1)/2,L=(g+m)/4,O=(_+b)/4,w=(M+x)/4;return R>P&&R>U?R<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(R),a=L/i,o=O/i):P>U?P<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),i=L/a,o=w/a):U<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(U),i=O/o,a=w/o),this.set(i,a,o,t),this}let A=Math.sqrt((x-M)*(x-M)+(_-b)*(_-b)+(m-g)*(m-g));return Math.abs(A)<.001&&(A=1),this.x=(x-M)/A,this.y=(_-b)/A,this.z=(m-g)/A,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;let Jt=fp;class sE extends Is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new kn(a),u=i.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Zh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends sE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class i_ extends kn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=On,this.minFilter=On,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends kn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=On,this.minFilter=On,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=class tc{constructor(e,t,i,a,o,u,f,d,h,g,_,m,y,M,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h,g,_,m,y,M,b,x)}set(e,t,i,a,o,u,f,d,h,g,_,m,y,M,b,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=u,S[9]=f,S[13]=d,S[2]=h,S[6]=g,S[10]=_,S[14]=m,S[3]=y,S[7]=M,S[11]=b,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/oa.setFromMatrixColumn(e,0).length(),o=1/oa.setFromMatrixColumn(e,1).length(),u=1/oa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),g=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const m=u*g,y=u*_,M=f*g,b=f*_;t[0]=d*g,t[4]=-d*_,t[8]=h,t[1]=y+M*h,t[5]=m-b*h,t[9]=-f*d,t[2]=b-m*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*g,y=d*_,M=h*g,b=h*_;t[0]=m+b*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*_,t[5]=u*g,t[9]=-f,t[2]=y*f-M,t[6]=b+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*g,y=d*_,M=h*g,b=h*_;t[0]=m-b*f,t[4]=-u*_,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*g,t[9]=b-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*g,y=u*_,M=f*g,b=f*_;t[0]=d*g,t[4]=M*h-y,t[8]=m*h+b,t[1]=d*_,t[5]=b*h+m,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,y=u*h,M=f*d,b=f*h;t[0]=d*g,t[4]=b-m*_,t[8]=M*_+y,t[1]=_,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=y*_+M,t[10]=m-b*_}else if(e.order==="XZY"){const m=u*d,y=u*h,M=f*d,b=f*h;t[0]=d*g,t[4]=-_,t[8]=h*g,t[1]=m*_+b,t[5]=u*g,t[9]=y*_-M,t[2]=M*_-y,t[6]=f*g,t[10]=b*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,lE)}lookAt(e,t,i){const a=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Kr.crossVectors(i,pi),Kr.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Kr.crossVectors(i,pi)),Kr.normalize(),eu.crossVectors(pi,Kr),a[0]=Kr.x,a[4]=eu.x,a[8]=pi.x,a[1]=Kr.y,a[5]=eu.y,a[9]=pi.y,a[2]=Kr.z,a[6]=eu.z,a[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],g=i[1],_=i[5],m=i[9],y=i[13],M=i[2],b=i[6],x=i[10],S=i[14],A=i[3],R=i[7],P=i[11],U=i[15],L=a[0],O=a[4],w=a[8],I=a[12],V=a[1],B=a[5],Z=a[9],me=a[13],ge=a[2],W=a[6],ie=a[10],Q=a[14],J=a[3],fe=a[7],ce=a[11],F=a[15];return o[0]=u*L+f*V+d*ge+h*J,o[4]=u*O+f*B+d*W+h*fe,o[8]=u*w+f*Z+d*ie+h*ce,o[12]=u*I+f*me+d*Q+h*F,o[1]=g*L+_*V+m*ge+y*J,o[5]=g*O+_*B+m*W+y*fe,o[9]=g*w+_*Z+m*ie+y*ce,o[13]=g*I+_*me+m*Q+y*F,o[2]=M*L+b*V+x*ge+S*J,o[6]=M*O+b*B+x*W+S*fe,o[10]=M*w+b*Z+x*ie+S*ce,o[14]=M*I+b*me+x*Q+S*F,o[3]=A*L+R*V+P*ge+U*J,o[7]=A*O+R*B+P*W+U*fe,o[11]=A*w+R*Z+P*ie+U*ce,o[15]=A*I+R*me+P*Q+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],u=e[1],f=e[5],d=e[9],h=e[13],g=e[2],_=e[6],m=e[10],y=e[14],M=e[3],b=e[7],x=e[11],S=e[15],A=d*y-h*m,R=f*y-h*_,P=f*m-d*_,U=u*y-h*g,L=u*m-d*g,O=u*_-f*g;return t*(b*A-x*R+S*P)-i*(M*A-x*U+S*L)+a*(M*R-b*U+S*O)-o*(M*P-b*L+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=e[9],m=e[10],y=e[11],M=e[12],b=e[13],x=e[14],S=e[15],A=t*f-i*u,R=t*d-a*u,P=t*h-o*u,U=i*d-a*f,L=i*h-o*f,O=a*h-o*d,w=g*b-_*M,I=g*x-m*M,V=g*S-y*M,B=_*x-m*b,Z=_*S-y*b,me=m*S-y*x,ge=A*me-R*Z+P*B+U*V-L*I+O*w;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ge;return e[0]=(f*me-d*Z+h*B)*W,e[1]=(a*Z-i*me-o*B)*W,e[2]=(b*O-x*L+S*U)*W,e[3]=(m*L-_*O-y*U)*W,e[4]=(d*V-u*me-h*I)*W,e[5]=(t*me-a*V+o*I)*W,e[6]=(x*P-M*O-S*R)*W,e[7]=(g*O-m*P+y*R)*W,e[8]=(u*Z-f*V+h*w)*W,e[9]=(i*V-t*Z-o*w)*W,e[10]=(M*L-b*P+S*A)*W,e[11]=(_*P-g*L-y*A)*W,e[12]=(f*I-u*B-d*w)*W,e[13]=(t*B-i*I+a*w)*W,e[14]=(b*R-M*U-x*A)*W,e[15]=(g*U-_*R+m*A)*W,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,u=e.x,f=e.y,d=e.z,h=o*u,g=o*f;return this.set(h*u+i,h*f-a*d,h*d+a*f,0,h*f+a*d,g*f+i,g*d-a*u,0,h*d-a*f,g*d+a*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,u){return this.set(1,i,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,u=t._y,f=t._z,d=t._w,h=o+o,g=u+u,_=f+f,m=o*h,y=o*g,M=o*_,b=u*g,x=u*_,S=f*_,A=d*h,R=d*g,P=d*_,U=i.x,L=i.y,O=i.z;return a[0]=(1-(b+S))*U,a[1]=(y+P)*U,a[2]=(M-R)*U,a[3]=0,a[4]=(y-P)*L,a[5]=(1-(m+S))*L,a[6]=(x+A)*L,a[7]=0,a[8]=(M+R)*O,a[9]=(x-A)*O,a[10]=(1-(m+b))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let u=oa.set(a[0],a[1],a[2]).length();const f=oa.set(a[4],a[5],a[6]).length(),d=oa.set(a[8],a[9],a[10]).length();o<0&&(u=-u),Oi.copy(this);const h=1/u,g=1/f,_=1/d;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,t.setFromRotationMatrix(Oi),i.x=u,i.y=f,i.z=d,this}makePerspective(e,t,i,a,o,u,f=Ji,d=!1){const h=this.elements,g=2*o/(t-e),_=2*o/(i-a),m=(t+e)/(t-e),y=(i+a)/(i-a);let M,b;if(d)M=o/(u-o),b=u*o/(u-o);else if(f===Ji)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Ho)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,u,f=Ji,d=!1){const h=this.elements,g=2/(t-e),_=2/(i-a),m=-(t+e)/(t-e),y=-(i+a)/(i-a);let M,b;if(d)M=1/(u-o),b=u/(u-o);else if(f===Ji)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Ho)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};tc.prototype.isMatrix4=!0;let bt=tc;const oa=new Y,Oi=new bt,oE=new Y(0,0,0),lE=new Y(1,1,1),Kr=new Y,eu=new Y,pi=new Y,l0=new bt,u0=new Ds;class ss{constructor(e=0,t=0,i=0,a=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],u=a[4],f=a[8],d=a[1],h=a[5],g=a[9],_=a[2],m=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return l0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u0.setFromEuler(this),this.setFromQuaternion(u0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uE=0;const c0=new Y,la=new Ds,hr=new bt,tu=new Y,xo=new Y,cE=new Y,fE=new Ds,f0=new Y(1,0,0),d0=new Y(0,1,0),h0=new Y(0,0,1),p0={type:"added"},dE={type:"removed"},ua={type:"childadded",child:null},id={type:"childremoved",child:null};class mn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new Y,t=new ss,i=new Ds,a=new Y(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new xt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(f0,e)}rotateY(e){return this.rotateOnAxis(d0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,t){return c0.copy(e).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(f0,e)}translateY(e){return this.translateOnAxis(d0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tu.copy(e):tu.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(xo,tu,this.up):hr.lookAt(tu,xo,this.up),this.quaternion.setFromRotationMatrix(hr),a&&(hr.extractRotation(a.matrixWorld),la.setFromRotationMatrix(hr),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p0),ua.child=e,this.dispatchEvent(ua),ua.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dE),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p0),ua.child=e,this.dispatchEvent(ua),ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,fE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const _=d[h];o(e.shapes,_)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(o(e.materials,this.material[d]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(o(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),m=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=a,i;function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hE={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,i),S=this._getHandJoint(h,b);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],m=g.position.distanceTo(_.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},nu={h:0,s:0,l:0};function sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Nt.workingColorSpace){if(e=Kh(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=sd(u,o,e+1/3),this.g=sd(u,o,e),this.b=sd(u,o,e-1/3)}return Nt.colorSpaceToWorking(this,a),this}setStyle(e,t=si){function i(o){o!==void 0&&parseFloat(o)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const i=r_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Nt.workingToColorSpace(Wn.copy(this),e),Math.round(Ct(Wn.r*255,0,255))*65536+Math.round(Ct(Wn.g*255,0,255))*256+Math.round(Ct(Wn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Wn.copy(this),t);const i=Wn.r,a=Wn.g,o=Wn.b,u=Math.max(i,a,o),f=Math.min(i,a,o);let d,h;const g=(f+u)/2;if(f===u)d=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case i:d=(a-o)/_+(a<o?6:0);break;case a:d=(o-i)/_+2;break;case o:d=(i-a)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=si){Nt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,i=Wn.g,a=Wn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(nu);const i=ko(Zr.h,nu.h,t),a=ko(Zr.s,nu.s,t),o=ko(Zr.l,nu.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Pt;Pt.NAMES=r_;class pE extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new Y,pr=new Y,ad=new Y,mr=new Y,ca=new Y,fa=new Y,m0=new Y,od=new Y,ld=new Y,ud=new Y,cd=new Jt,fd=new Jt,dd=new Jt;class Ti{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ki.subVectors(e,t),a.cross(ki);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){ki.subVectors(a,t),pr.subVectors(i,t),ad.subVectors(e,t);const u=ki.dot(ki),f=ki.dot(pr),d=ki.dot(ad),h=pr.dot(pr),g=pr.dot(ad),_=u*h-f*f;if(_===0)return o.set(0,0,0),null;const m=1/_,y=(h*d-f*g)*m,M=(u*g-f*d)*m;return o.set(1-y-M,M,y)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,i,a,o,u,f,d){return this.getBarycoord(e,t,i,a,mr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,mr.x),d.addScaledVector(u,mr.y),d.addScaledVector(f,mr.z),d)}static getInterpolatedAttribute(e,t,i,a,o,u){return cd.setScalar(0),fd.setScalar(0),dd.setScalar(0),cd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,i),dd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(cd,o.x),u.addScaledVector(fd,o.y),u.addScaledVector(dd,o.z),u}static isFrontFacing(e,t,i,a){return ki.subVectors(i,t),pr.subVectors(e,t),ki.cross(pr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),ki.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let u,f;ca.subVectors(a,i),fa.subVectors(o,i),od.subVectors(e,i);const d=ca.dot(od),h=fa.dot(od);if(d<=0&&h<=0)return t.copy(i);ld.subVectors(e,a);const g=ca.dot(ld),_=fa.dot(ld);if(g>=0&&_<=g)return t.copy(a);const m=d*_-g*h;if(m<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(i).addScaledVector(ca,u);ud.subVectors(e,o);const y=ca.dot(ud),M=fa.dot(ud);if(M>=0&&y<=M)return t.copy(o);const b=y*h-d*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(i).addScaledVector(fa,f);const x=g*M-y*_;if(x<=0&&_-g>=0&&y-M>=0)return m0.subVectors(o,a),f=(_-g)/(_-g+(y-M)),t.copy(a).addScaledVector(m0,f);const S=1/(x+b+m);return u=b*S,f=m*S,t.copy(i).addScaledVector(ca,u).addScaledVector(fa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Bi):Bi.fromBufferAttribute(o,u),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),iu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),iu.copy(i.boundingBox)),iu.applyMatrix4(e.matrixWorld),this.union(iu)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),ru.subVectors(this.max,yo),da.subVectors(e.a,yo),ha.subVectors(e.b,yo),pa.subVectors(e.c,yo),Jr.subVectors(ha,da),Qr.subVectors(pa,ha),Ss.subVectors(da,pa);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-Ss.z,Ss.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,Ss.z,0,-Ss.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-Ss.y,Ss.x,0];return!hd(t,da,ha,pa,ru)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,da,ha,pa,ru))?!1:(su.crossVectors(Jr,Qr),t=[su.x,su.y,su.z],hd(t,da,ha,pa,ru))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Bi=new Y,iu=new Cr,da=new Y,ha=new Y,pa=new Y,Jr=new Y,Qr=new Y,Ss=new Y,yo=new Y,ru=new Y,su=new Y,Ms=new Y;function hd(s,e,t,i,a){for(let o=0,u=s.length-3;o<=u;o+=3){Ms.fromArray(s,o);const f=a.x*Math.abs(Ms.x)+a.y*Math.abs(Ms.y)+a.z*Math.abs(Ms.z),d=e.dot(Ms),h=t.dot(Ms),g=i.dot(Ms);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const yn=new Y,au=new yt;let mE=0;class Nn extends Is{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bh,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)au.fromBufferAttribute(this,t),au.applyMatrix3(e),this.setXY(t,au.x,au.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),a=jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),a=jt(a,this.array),o=jt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class s_ extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a_ extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const gE=new Cr,So=new Y,pd=new Y;class Pr{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gE.setFromPoints(e).getCenter(i);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(So,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(pd)),this.expandByPoint(So.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vE=0;const wi=new bt,md=new mn,ma=new Y,mi=new Cr,Mo=new Cr,Pn=new Y;class Ln extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DM(e)?a_:s_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new xt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new li(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const f=t[o];Mo.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(mi.min,Mo.min),mi.expandByPoint(Pn),Pn.addVectors(mi.max,Mo.max),mi.expandByPoint(Pn)):(mi.expandByPoint(Mo.min),mi.expandByPoint(Mo.max))}mi.getCenter(i);let a=0;for(let o=0,u=e.count;o<u;o++)Pn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Pn));if(t)for(let o=0,u=t.length;o<u;o++){const f=t[o],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Pn.fromBufferAttribute(f,h),d&&(ma.fromBufferAttribute(e,h),Pn.add(ma)),a=Math.max(a,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let w=0;w<i.count;w++)f[w]=new Y,d[w]=new Y;const h=new Y,g=new Y,_=new Y,m=new yt,y=new yt,M=new yt,b=new Y,x=new Y;function S(w,I,V){h.fromBufferAttribute(i,w),g.fromBufferAttribute(i,I),_.fromBufferAttribute(i,V),m.fromBufferAttribute(o,w),y.fromBufferAttribute(o,I),M.fromBufferAttribute(o,V),g.sub(h),_.sub(h),y.sub(m),M.sub(m);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(B),x.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(B),f[w].add(b),f[I].add(b),f[V].add(b),d[w].add(x),d[I].add(x),d[V].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let w=0,I=A.length;w<I;++w){const V=A[w],B=V.start,Z=V.count;for(let me=B,ge=B+Z;me<ge;me+=3)S(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const R=new Y,P=new Y,U=new Y,L=new Y;function O(w){U.fromBufferAttribute(a,w),L.copy(U);const I=f[w];R.copy(I),R.sub(U.multiplyScalar(U.dot(I))).normalize(),P.crossVectors(L,I);const B=P.dot(d[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,B)}for(let w=0,I=A.length;w<I;++w){const V=A[w],B=V.start,Z=V.count;for(let me=B,ge=B+Z;me<ge;me+=3)O(e.getX(me+0)),O(e.getX(me+1)),O(e.getX(me+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const a=new Y,o=new Y,u=new Y,f=new Y,d=new Y,h=new Y,g=new Y,_=new Y;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),b=e.getX(m+1),x=e.getX(m+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,b),u.fromBufferAttribute(t,x),g.subVectors(u,o),_.subVectors(a,o),g.cross(_),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),f.add(g),d.add(g),h.add(g),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),g.subVectors(u,o),_.subVectors(a,o),g.cross(_),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,_=f.normalized,m=new h.constructor(d.length*g);let y=0,M=0;for(let b=0,x=d.length;b<x;b++){f.isInterleavedBufferAttribute?y=d[b]*f.data.stride+f.offset:y=d[b]*g;for(let S=0;S<g;S++)m[M++]=h[y++]}return new Nn(m,g,_)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,i);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const d=[],h=o[f];for(let g=0,_=h.length;g<_;g++){const m=h[g],y=e(m,i);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let _=0,m=h.length;_<m;_++){const y=h[_];g.push(y.toJSON(e.data))}g.length>0&&(a[d]=g,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const g=a[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],_=o[h];for(let m=0,y=_.length;m<y;m++)g.push(_[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _E{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yn=new Y;class Ku{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),a=jt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),a=jt(a,this.array),o=jt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){qu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let xE=0;class as extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ta,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=kd,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Od&&(i.blendSrc=this.blendSrc),this.blendDst!==kd&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const f in o){const d=o[f];delete d.metadata,u.push(d)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class o_ extends as{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ga;const Eo=new Y,va=new Y,_a=new Y,xa=new yt,wo=new yt,l_=new bt,ou=new Y,To=new Y,lu=new Y,g0=new yt,gd=new yt,v0=new yt;class yE extends mn{constructor(e=new o_){if(super(),this.isSprite=!0,this.type="Sprite",ga===void 0){ga=new Ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _E(t,5);ga.setIndex([0,1,2,0,2,3]),ga.setAttribute("position",new Ku(i,3,0,!1)),ga.setAttribute("uv",new Ku(i,2,3,!1))}this.geometry=ga,this.material=e,this.center=new yt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),l_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_a.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-_a.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const u=this.center;uu(ou.set(-.5,-.5,0),_a,u,va,a,o),uu(To.set(.5,-.5,0),_a,u,va,a,o),uu(lu.set(.5,.5,0),_a,u,va,a,o),g0.set(0,0),gd.set(1,0),v0.set(1,1);let f=e.ray.intersectTriangle(ou,To,lu,!1,Eo);if(f===null&&(uu(To.set(-.5,.5,0),_a,u,va,a,o),gd.set(0,1),f=e.ray.intersectTriangle(ou,lu,To,!1,Eo),f===null))return;const d=e.ray.origin.distanceTo(Eo);d<e.near||d>e.far||t.push({distance:d,point:Eo.clone(),uv:Ti.getInterpolation(Eo,ou,To,lu,g0,gd,v0,new yt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function uu(s,e,t,i,a,o){xa.subVectors(s,t).addScalar(.5).multiply(i),a!==void 0?(wo.x=o*xa.x-a*xa.y,wo.y=a*xa.x+o*xa.y):wo.copy(xa),s.copy(e),s.x+=wo.x,s.y+=wo.y,s.applyMatrix4(l_)}const vr=new Y,vd=new Y,cu=new Y,es=new Y,_d=new Y,fu=new Y,xd=new Y;class $o{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){vd.copy(e).add(t).multiplyScalar(.5),cu.copy(t).sub(e).normalize(),es.copy(this.origin).sub(vd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(cu),f=es.dot(this.direction),d=-es.dot(cu),h=es.lengthSq(),g=Math.abs(1-u*u);let _,m,y,M;if(g>0)if(_=u*d-f,m=u*f-d,M=o*g,_>=0)if(m>=-M)if(m<=M){const b=1/g;_*=b,m*=b,y=_*(_+u*m+2*f)+m*(u*_+m+2*d)+h}else m=o,_=Math.max(0,-(u*m+f)),y=-_*_+m*(m+2*d)+h;else m=-o,_=Math.max(0,-(u*m+f)),y=-_*_+m*(m+2*d)+h;else m<=-M?(_=Math.max(0,-(-u*o+f)),m=_>0?-o:Math.min(Math.max(-o,-d),o),y=-_*_+m*(m+2*d)+h):m<=M?(_=0,m=Math.min(Math.max(-o,-d),o),y=m*(m+2*d)+h):(_=Math.max(0,-(u*o+f)),m=_>0?o:Math.min(Math.max(-o,-d),o),y=-_*_+m*(m+2*d)+h);else m=u>0?-o:o,_=Math.max(0,-(u*m+f)),y=-_*_+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(vd).addScaledVector(cu,m),y}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),a=vr.dot(vr)-i*i,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,u,f,d;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,a=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,a=(e.min.x-m.x)*h),g>=0?(o=(e.min.y-m.y)*g,u=(e.max.y-m.y)*g):(o=(e.max.y-m.y)*g,u=(e.min.y-m.y)*g),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),_>=0?(f=(e.min.z-m.z)*_,d=(e.max.z-m.z)*_):(f=(e.max.z-m.z)*_,d=(e.min.z-m.z)*_),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,a,o){_d.subVectors(t,e),fu.subVectors(i,e),xd.crossVectors(_d,fu);let u=this.direction.dot(xd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;es.subVectors(this.origin,e);const d=f*this.direction.dot(fu.crossVectors(es,fu));if(d<0)return null;const h=f*this.direction.dot(_d.cross(es));if(h<0||d+h>u)return null;const g=-f*es.dot(xd);return g<0?null:this.at(g/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qh extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _0=new bt,Es=new $o,du=new Pr,x0=new Y,hu=new Y,pu=new Y,mu=new Y,yd=new Y,gu=new Y,y0=new Y,vu=new Y;class ui extends mn{constructor(e=new Ln,t=new Qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){gu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const g=f[d],_=o[d];g!==0&&(yd.fromBufferAttribute(_,e),u?gu.addScaledVector(yd,g):gu.addScaledVector(yd.sub(t),g))}t.add(gu)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),du.copy(i.boundingSphere),du.applyMatrix4(o),Es.copy(e.ray).recast(e.near),!(du.containsPoint(Es.origin)===!1&&(Es.intersectSphere(du,x0)===null||Es.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(_0.copy(o).invert(),Es.copy(e.ray).applyMatrix4(_0),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let a;const o=this.geometry,u=this.material,f=o.index,d=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,_=o.attributes.normal,m=o.groups,y=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=m.length;M<b;M++){const x=m[M],S=u[x.materialIndex],A=Math.max(x.start,y.start),R=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let P=A,U=R;P<U;P+=3){const L=f.getX(P),O=f.getX(P+1),w=f.getX(P+2);a=_u(this,S,e,i,h,g,_,L,O,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let x=M,S=b;x<S;x+=3){const A=f.getX(x),R=f.getX(x+1),P=f.getX(x+2);a=_u(this,u,e,i,h,g,_,A,R,P),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=m.length;M<b;M++){const x=m[M],S=u[x.materialIndex],A=Math.max(x.start,y.start),R=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let P=A,U=R;P<U;P+=3){const L=P,O=P+1,w=P+2;a=_u(this,S,e,i,h,g,_,L,O,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let x=M,S=b;x<S;x+=3){const A=x,R=x+1,P=x+2;a=_u(this,u,e,i,h,g,_,A,R,P),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function SE(s,e,t,i,a,o,u,f){let d;if(e.side===oi?d=i.intersectTriangle(u,o,a,!0,f):d=i.intersectTriangle(a,o,u,e.side===rs,f),d===null)return null;vu.copy(f),vu.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(vu);return h<t.near||h>t.far?null:{distance:h,point:vu.clone(),object:s}}function _u(s,e,t,i,a,o,u,f,d,h){s.getVertexPosition(f,hu),s.getVertexPosition(d,pu),s.getVertexPosition(h,mu);const g=SE(s,e,t,i,hu,pu,mu,y0);if(g){const _=new Y;Ti.getBarycoord(y0,hu,pu,mu,_),a&&(g.uv=Ti.getInterpolatedAttribute(a,f,d,h,_,new yt)),o&&(g.uv1=Ti.getInterpolatedAttribute(o,f,d,h,_,new yt)),u&&(g.normal=Ti.getInterpolatedAttribute(u,f,d,h,_,new Y),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new Y,materialIndex:0};Ti.getNormal(hu,pu,mu,m.normal),g.face=m,g.barycoord=_}return g}const bo=new Jt,S0=new Jt,M0=new Jt,ME=new Jt,E0=new bt,xu=new Y,Sd=new Pr,w0=new bt,Md=new $o;class BR extends ui{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kg,this.bindMatrix=new bt,this.bindMatrixInverse=new bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xu),this.boundingBox.expandByPoint(xu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xu),this.boundingSphere.expandByPoint(xu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sd.copy(this.boundingSphere),Sd.applyMatrix4(a),e.ray.intersectsSphere(Sd)!==!1&&(w0.copy(a).invert(),Md.copy(e.ray).applyMatrix4(w0),!(this.boundingBox!==null&&Md.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Md)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Jt,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===EM?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;S0.fromBufferAttribute(a.attributes.skinIndex,e),M0.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(bo.copy(t),t.set(0,0,0,0)):(bo.set(...t,1),t.set(0,0,0)),bo.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const u=M0.getComponent(o);if(u!==0){const f=S0.getComponent(o);E0.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(ME.copy(bo).applyMatrix4(E0),u)}}return t.isVector4&&(t.w=bo.w),t.applyMatrix4(this.bindMatrixInverse)}}class EE extends mn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ep extends kn{constructor(e=null,t=1,i=1,a,o,u,f,d,h=On,g=On,_,m){super(null,u,f,d,h,g,a,o,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const T0=new bt,wE=new bt;class u_{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new bt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new bt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let o=0,u=e.length;o<u;o++){const f=e[o]?e[o].matrixWorld:wE;T0.multiplyMatrices(f,t[o]),T0.toArray(i,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new u_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ep(t,e,e,Ai,bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const o=e.bones[i];let u=t[o];u===void 0&&(it("Skeleton: No bone found with UUID:",o),u=new EE),this.bones.push(u),this.boneInverses.push(new bt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const u=t[a];e.bones.push(u.uuid);const f=i[a];e.boneInverses.push(f.toArray())}return e}}class b0 extends Nn{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ya=new bt,A0=new bt,yu=[],R0=new Cr,TE=new bt,Ao=new ui,Ro=new Pr;class zR extends ui{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new b0(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,TE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ya),R0.copy(e.boundingBox).applyMatrix4(ya),this.boundingBox.union(R0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ya),Ro.copy(e.boundingSphere).applyMatrix4(ya),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,u=e*o+1;for(let f=0;f<i.length;f++)i[f]=a[u+f]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,ya),A0.multiplyMatrices(i,ya),Ao.matrixWorld=A0,Ao.raycast(e,yu);for(let u=0,f=yu.length;u<f;u++){const d=yu[u];d.instanceId=o,d.object=this,t.push(d)}yu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new b0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(a*this.count),a,this.count,Wh,bi));const o=this.morphTexture.source.data.data;let u=0;for(let h=0;h<i.length;h++)u+=i[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=a*e;return o[d]=f,o.set(i,d+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ed=new Y,bE=new Y,AE=new xt;class Ts{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Ed.subVectors(i,t).cross(bE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Ed),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||AE.getNormalMatrix(e),a=this.coplanarPoint(Ed).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Pr,RE=new yt(.5,.5),Su=new Y;class tp{constructor(e=new Ts,t=new Ts,i=new Ts,a=new Ts,o=new Ts,u=new Ts){this.planes=[e,t,i,a,o,u]}set(e,t,i,a,o,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(o),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji,i=!1){const a=this.planes,o=e.elements,u=o[0],f=o[1],d=o[2],h=o[3],g=o[4],_=o[5],m=o[6],y=o[7],M=o[8],b=o[9],x=o[10],S=o[11],A=o[12],R=o[13],P=o[14],U=o[15];if(a[0].setComponents(h-u,y-g,S-M,U-A).normalize(),a[1].setComponents(h+u,y+g,S+M,U+A).normalize(),a[2].setComponents(h+f,y+_,S+b,U+R).normalize(),a[3].setComponents(h-f,y-_,S-b,U-R).normalize(),i)a[4].setComponents(d,m,x,P).normalize(),a[5].setComponents(h-d,y-m,S-x,U-P).normalize();else if(a[4].setComponents(h-d,y-m,S-x,U-P).normalize(),t===Ji)a[5].setComponents(h+d,y+m,S+x,U+P).normalize();else if(t===Ho)a[5].setComponents(d,m,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=RE.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Su.x=a.normal.x>0?e.max.x:e.min.x,Su.y=a.normal.y>0?e.max.y:e.min.y,Su.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Su)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c_ extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zu=new Y,Ju=new Y,C0=new bt,Co=new $o,Mu=new Pr,wd=new Y,P0=new Y;class f_ extends mn{constructor(e=new Ln,t=new c_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Zu.fromBufferAttribute(t,a-1),Ju.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Zu.distanceTo(Ju);e.setAttribute("lineDistance",new li(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mu.copy(i.boundingSphere),Mu.applyMatrix4(a),Mu.radius+=o,e.ray.intersectsSphere(Mu)===!1)return;C0.copy(a).invert(),Co.copy(e.ray).applyMatrix4(C0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let b=y,x=M-1;b<x;b+=h){const S=g.getX(b),A=g.getX(b+1),R=Eu(this,e,Co,d,S,A,b);R&&t.push(R)}if(this.isLineLoop){const b=g.getX(M-1),x=g.getX(y),S=Eu(this,e,Co,d,b,x,M-1);S&&t.push(S)}}else{const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let b=y,x=M-1;b<x;b+=h){const S=Eu(this,e,Co,d,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=Eu(this,e,Co,d,M-1,y,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function Eu(s,e,t,i,a,o,u){const f=s.geometry.attributes.position;if(Zu.fromBufferAttribute(f,a),Ju.fromBufferAttribute(f,o),t.distanceSqToSegment(Zu,Ju,wd,P0)>i)return;wd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(wd);if(!(h<e.near||h>e.far))return{distance:h,point:P0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const N0=new Y,L0=new Y;class VR extends f_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)N0.fromBufferAttribute(t,a),L0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+N0.distanceTo(L0);e.setAttribute("lineDistance",new li(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CE extends f_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vu extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const I0=new bt,Rh=new $o,wu=new Pr,Tu=new Y;class Td extends mn{constructor(e=new Ln,t=new Vu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wu.copy(i.boundingSphere),wu.applyMatrix4(a),wu.radius+=o,e.ray.intersectsSphere(wu)===!1)return;I0.copy(a).invert(),Rh.copy(e.ray).applyMatrix4(I0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,_=i.attributes.position;if(h!==null){const m=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let M=m,b=y;M<b;M++){const x=h.getX(M);Tu.fromBufferAttribute(_,x),D0(Tu,x,d,a,e,t,this)}}else{const m=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let M=m,b=y;M<b;M++)Tu.fromBufferAttribute(_,M),D0(Tu,M,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function D0(s,e,t,i,a,o,u){const f=Rh.distanceSqToPoint(s);if(f<t){const d=new Y;Rh.closestPointToPoint(s,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class d_ extends kn{constructor(e=[],t=Ps,i,a,o,u,f,d,h,g){super(e,t,i,a,o,u,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PE extends kn{constructor(e,t,i,a,o,u,f,d,h){super(e,t,i,a,o,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pa extends kn{constructor(e,t,i=nr,a,o,u,f=On,d=On,h,g=Ar,_=1){if(g!==Ar&&g!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,a,o,u,f,d,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class NE extends Pa{constructor(e,t=nr,i=Ps,a,o,u=On,f=On,d,h=Ar){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,a,o,u,f,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class h_ extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yo extends Ln{constructor(e=1,t=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const f=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],g=[],_=[];let m=0,y=0;M("z","y","x",-1,-1,i,t,e,u,o,0),M("z","y","x",1,-1,i,t,-e,u,o,1),M("x","z","y",1,1,e,i,t,a,u,2),M("x","z","y",1,-1,e,i,-t,a,u,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new li(h,3)),this.setAttribute("normal",new li(g,3)),this.setAttribute("uv",new li(_,2));function M(b,x,S,A,R,P,U,L,O,w,I){const V=P/O,B=U/w,Z=P/2,me=U/2,ge=L/2,W=O+1,ie=w+1;let Q=0,J=0;const fe=new Y;for(let ce=0;ce<ie;ce++){const F=ce*B-me;for(let ne=0;ne<W;ne++){const Be=ne*V-Z;fe[b]=Be*A,fe[x]=F*R,fe[S]=ge,h.push(fe.x,fe.y,fe.z),fe[b]=0,fe[x]=0,fe[S]=L>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(ne/O),_.push(1-ce/w),Q+=1}}for(let ce=0;ce<w;ce++)for(let F=0;F<O;F++){const ne=m+F+W*ce,Be=m+F+W*(ce+1),We=m+(F+1)+W*(ce+1),ze=m+(F+1)+W*ce;d.push(ne,Be,ze),d.push(Be,We,ze),J+=6}f.addGroup(y,J,I),y+=J,m+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class np extends Ln{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],u=[];f(a),h(i),g(),this.setAttribute("position",new li(o,3)),this.setAttribute("normal",new li(o.slice(),3)),this.setAttribute("uv",new li(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const R=new Y,P=new Y,U=new Y;for(let L=0;L<t.length;L+=3)y(t[L+0],R),y(t[L+1],P),y(t[L+2],U),d(R,P,U,A)}function d(A,R,P,U){const L=U+1,O=[];for(let w=0;w<=L;w++){O[w]=[];const I=A.clone().lerp(P,w/L),V=R.clone().lerp(P,w/L),B=L-w;for(let Z=0;Z<=B;Z++)Z===0&&w===L?O[w][Z]=I:O[w][Z]=I.clone().lerp(V,Z/B)}for(let w=0;w<L;w++)for(let I=0;I<2*(L-w)-1;I++){const V=Math.floor(I/2);I%2===0?(m(O[w][V+1]),m(O[w+1][V]),m(O[w][V])):(m(O[w][V+1]),m(O[w+1][V+1]),m(O[w+1][V]))}}function h(A){const R=new Y;for(let P=0;P<o.length;P+=3)R.x=o[P+0],R.y=o[P+1],R.z=o[P+2],R.normalize().multiplyScalar(A),o[P+0]=R.x,o[P+1]=R.y,o[P+2]=R.z}function g(){const A=new Y;for(let R=0;R<o.length;R+=3){A.x=o[R+0],A.y=o[R+1],A.z=o[R+2];const P=x(A)/2/Math.PI+.5,U=S(A)/Math.PI+.5;u.push(P,1-U)}M(),_()}function _(){for(let A=0;A<u.length;A+=6){const R=u[A+0],P=u[A+2],U=u[A+4],L=Math.max(R,P,U),O=Math.min(R,P,U);L>.9&&O<.1&&(R<.2&&(u[A+0]+=1),P<.2&&(u[A+2]+=1),U<.2&&(u[A+4]+=1))}}function m(A){o.push(A.x,A.y,A.z)}function y(A,R){const P=A*3;R.x=e[P+0],R.y=e[P+1],R.z=e[P+2]}function M(){const A=new Y,R=new Y,P=new Y,U=new Y,L=new yt,O=new yt,w=new yt;for(let I=0,V=0;I<o.length;I+=9,V+=6){A.set(o[I+0],o[I+1],o[I+2]),R.set(o[I+3],o[I+4],o[I+5]),P.set(o[I+6],o[I+7],o[I+8]),L.set(u[V+0],u[V+1]),O.set(u[V+2],u[V+3]),w.set(u[V+4],u[V+5]),U.copy(A).add(R).add(P).divideScalar(3);const B=x(U);b(L,V+0,A,B),b(O,V+2,R,B),b(w,V+4,P,B)}}function b(A,R,P,U){U<0&&A.x===1&&(u[R]=A.x-1),P.x===0&&P.z===0&&(u[R]=U/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function S(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.vertices,e.indices,e.radius,e.detail)}}class ip extends np{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ip(e.radius,e.detail)}}class ac extends Ln{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,u=t/2,f=Math.floor(i),d=Math.floor(a),h=f+1,g=d+1,_=e/f,m=t/d,y=[],M=[],b=[],x=[];for(let S=0;S<g;S++){const A=S*m-u;for(let R=0;R<h;R++){const P=R*_-o;M.push(P,-A,0),b.push(0,0,1),x.push(R/f),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let A=0;A<f;A++){const R=A+h*S,P=A+h*(S+1),U=A+1+h*(S+1),L=A+1+h*S;y.push(R,P,L),y.push(P,U,L)}this.setIndex(y),this.setAttribute("position",new li(M,3)),this.setAttribute("normal",new li(b,3)),this.setAttribute("uv",new li(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.widthSegments,e.heightSegments)}}function Na(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(U0(a))a.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(U0(a[0])){const o=[];for(let u=0,f=a.length;u<f;u++)o[u]=a[u].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function qn(s){const e={};for(let t=0;t<s.length;t++){const i=Na(s[t]);for(const a in i)e[a]=i[a]}return e}function U0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function LE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function p_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const IE={clone:Na,merge:qn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class FE extends ir{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ch extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HR extends Ch{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class OE extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bu(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function BE(s){function e(a,o){return s[a]-s[o]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function F0(s,e,t){const i=s.length,a=new s.constructor(i);for(let o=0,u=0;u!==i;++o){const f=t[o]*e;for(let d=0;d!==e;++d)a[u++]=s[f+d]}return a}function m_(s,e,t,i){let a=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[a++];if(o===void 0)return;let u=o[i];if(u!==void 0)if(Array.isArray(u))do u=o[i],u!==void 0&&(e.push(o.time),t.push(...u)),o=s[a++];while(o!==void 0);else if(u.toArray!==void 0)do u=o[i],u!==void 0&&(e.push(o.time),u.toArray(t,t.length)),o=s[a++];while(o!==void 0);else do u=o[i],u!==void 0&&(e.push(o.time),t.push(u)),o=s[a++];while(o!==void 0)}class qo{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],o=t[i-1];e:{t:{let u;n:{i:if(!(e<a)){for(let f=i+2;;){if(a===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(o=a,a=t[++i],e<a)break t}u=t.length;break n}if(!(e>=o)){const f=t[1];e<f&&(i=2,o=f);for(let d=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(a=o,o=t[--i-1],e>=o)break t}u=i,i=0;break n}break e}for(;i<u;){const f=i+u>>>1;e<t[f]?u=f:i=f+1}if(a=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a;for(let u=0;u!==a;++u)t[u]=i[o+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zE extends qo{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jg,endingEnd:Jg}}intervalChanged_(e,t,i){const a=this.parameterPositions;let o=e-2,u=e+1,f=a[o],d=a[u];if(f===void 0)switch(this.getSettings_().endingStart){case Qg:o=e,f=2*t-i;break;case e0:o=a.length-2,f=t+a[o]-a[o+1];break;default:o=e,f=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Qg:u=e,d=2*i-t;break;case e0:u=1,d=i+a[1]-a[0];break;default:u=e-1,d=t}const h=(i-t)*.5,g=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-i),this._offsetPrev=o*g,this._offsetNext=u*g}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,y=this._weightNext,M=(i-t)/(a-t),b=M*M,x=b*M,S=-m*x+2*m*b-m*M,A=(1+m)*x+(-1.5-2*m)*b+(-.5+m)*M+1,R=(-1-y)*x+(1.5+y)*b+.5*M,P=y*x-y*b;for(let U=0;U!==f;++U)o[U]=S*u[g+U]+A*u[h+U]+R*u[d+U]+P*u[_+U];return o}}class VE extends qo{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=(i-t)/(a-t),_=1-g;for(let m=0;m!==f;++m)o[m]=u[h+m]*_+u[d+m]*g;return o}}class HE extends qo{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class GE extends qo{interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this.settings||this.DefaultSettings_,_=g.inTangents,m=g.outTangents;if(!_||!m){const b=(i-t)/(a-t),x=1-b;for(let S=0;S!==f;++S)o[S]=u[h+S]*x+u[d+S]*b;return o}const y=f*2,M=e-1;for(let b=0;b!==f;++b){const x=u[h+b],S=u[d+b],A=M*y+b*2,R=m[A],P=m[A+1],U=e*y+b*2,L=_[U],O=_[U+1];let w=(i-t)/(a-t),I,V,B,Z,me;for(let ge=0;ge<8;ge++){I=w*w,V=I*w,B=1-w,Z=B*B,me=Z*B;const ie=me*t+3*Z*w*R+3*B*I*L+V*a-i;if(Math.abs(ie)<1e-10)break;const Q=3*Z*(R-t)+6*B*w*(L-R)+3*I*(a-L);if(Math.abs(Q)<1e-10)break;w=w-ie/Q,w=Math.max(0,Math.min(1,w))}o[b]=me*x+3*Z*w*P+3*B*I*O+V*S}return o}}class Hi{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bu(t,this.TimeBufferType),this.values=bu(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bu(e.times,Array),values:bu(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new HE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new VE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new GE(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Xu:t=this.InterpolantFactoryMethodDiscrete;break;case wh:t=this.InterpolantFactoryMethodLinear;break;case Jf:t=this.InterpolantFactoryMethodSmooth;break;case Zg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xu;case this.InterpolantFactoryMethodLinear:return wh;case this.InterpolantFactoryMethodSmooth:return Jf;case this.InterpolantFactoryMethodBezier:return Zg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let o=0,u=a-1;for(;o!==a&&i[o]<e;)++o;for(;u!==-1&&i[u]>t;)--u;if(++u,o!==0||u!==a){o>=u&&(u=Math.max(u,1),o=u-1);const f=this.getValueSize();this.times=i.slice(o,u),this.values=this.values.slice(o*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ut("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,o=i.length;o===0&&(ut("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==o;f++){const d=i[f];if(typeof d=="number"&&isNaN(d)){ut("KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){ut("KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(a!==void 0&&UM(a))for(let f=0,d=a.length;f!==d;++f){const h=a[f];if(isNaN(h)){ut("KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Jf,o=e.length-1;let u=1;for(let f=1;f<o;++f){let d=!1;const h=e[f],g=e[f+1];if(h!==g&&(f!==1||h!==e[0]))if(a)d=!0;else{const _=f*i,m=_-i,y=_+i;for(let M=0;M!==i;++M){const b=t[_+M];if(b!==t[m+M]||b!==t[y+M]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const _=f*i,m=u*i;for(let y=0;y!==i;++y)t[m+y]=t[_+y]}++u}}if(o>0){e[u]=e[o];for(let f=o*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}Hi.prototype.ValueTypeName="";Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=wh;class Da extends Hi{constructor(e,t,i){super(e,t,i)}}Da.prototype.ValueTypeName="bool";Da.prototype.ValueBufferType=Array;Da.prototype.DefaultInterpolation=Xu;Da.prototype.InterpolantFactoryMethodLinear=void 0;Da.prototype.InterpolantFactoryMethodSmooth=void 0;class g_ extends Hi{constructor(e,t,i,a){super(e,t,i,a)}}g_.prototype.ValueTypeName="color";class Qu extends Hi{constructor(e,t,i,a){super(e,t,i,a)}}Qu.prototype.ValueTypeName="number";class WE extends qo{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(i-t)/(a-t);let h=e*f;for(let g=h+f;h!==g;h+=4)Ds.slerpFlat(o,0,u,h-f,u,h,d);return o}}class oc extends Hi{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new WE(this.times,this.values,this.getValueSize(),e)}}oc.prototype.ValueTypeName="quaternion";oc.prototype.InterpolantFactoryMethodSmooth=void 0;class Ua extends Hi{constructor(e,t,i){super(e,t,i)}}Ua.prototype.ValueTypeName="string";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Xu;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class ec extends Hi{constructor(e,t,i,a){super(e,t,i,a)}}ec.prototype.ValueTypeName="vector";class GR{constructor(e="",t=-1,i=[],a=TM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let u=0,f=i.length;u!==f;++u)t.push(XE(i[u]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,u=i.length;o!==u;++o)t.push(Hi.toJSON(i[o]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const o=t.length,u=[];for(let f=0;f<o;f++){let d=[],h=[];d.push((f+o-1)%o,f,(f+1)%o),h.push(0,1,0);const g=BE(d);d=F0(d,1,g),h=F0(h,1,g),!a&&d[0]===0&&(d.push(o),h.push(h[0])),u.push(new Qu(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},o=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],g=h.name.match(o);if(g&&g.length>1){const _=g[1];let m=a[_];m||(a[_]=m=[]),m.push(h)}}const u=[];for(const f in a)u.push(this.CreateFromMorphTargetSequence(f,a[f],t,i));return u}static parseAnimation(e,t){if(it("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ut("AnimationClip: No animation in JSONLoader data."),null;const i=function(_,m,y,M,b){if(y.length!==0){const x=[],S=[];m_(y,x,S,M),x.length!==0&&b.push(new _(m,x,S))}},a=[],o=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const m=h[_].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const y={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let b=0;b<m[M].morphTargets.length;b++)y[m[M].morphTargets[b]]=-1;for(const b in y){const x=[],S=[];for(let A=0;A!==m[M].morphTargets.length;++A){const R=m[M];x.push(R.time),S.push(R.morphTarget===b?1:0)}a.push(new Qu(".morphTargetInfluence["+b+"]",x,S))}d=y.length*u}else{const y=".bones["+t[_].name+"]";i(ec,y+".position",m,"pos",a),i(oc,y+".quaternion",m,"rot",a),i(ec,y+".scale",m,"scl",a)}}return a.length===0?null:new this(o,d,a,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function jE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qu;case"vector":case"vector2":case"vector3":case"vector4":return ec;case"color":return g_;case"quaternion":return oc;case"bool":case"boolean":return Da;case"string":return Ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function XE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jE(s.type);if(s.times===void 0){const t=[],i=[];m_(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Sr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(O0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!O0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function O0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $E{constructor(e,t,i){const a=this;let o=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){f++,o===!1&&a.onStart!==void 0&&a.onStart(g,u,f),o=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){const _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,m=h.length;_<m;_+=2){const y=h[_],M=h[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const YE=new $E;class Ko{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class qE extends Error{constructor(e,t){super(e),this.response=t}}class WR extends Ko{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Sr.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:i,onError:a});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:i,onError:a});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=_r[e],_=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=m?parseInt(m):0,M=y!==0;let b=0;const x=new ReadableStream({start(S){A();function A(){_.read().then(({done:R,value:P})=>{if(R)S.close();else{b+=P.byteLength;const U=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:y});for(let L=0,O=g.length;L<O;L++){const w=g[L];w.onProgress&&w.onProgress(U)}S.enqueue(P),A()}},R=>{S.error(R)})}}});return new Response(x)}else throw new qE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),m=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(m);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{Sr.add(`file:${e}`,h);const g=_r[e];delete _r[e];for(let _=0,m=g.length;_<m;_++){const y=g[_];y.onLoad&&y.onLoad(h)}}).catch(h=>{const g=_r[e];if(g===void 0)throw this.manager.itemError(e),h;delete _r[e];for(let _=0,m=g.length;_<m;_++){const y=g[_];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Sa=new WeakMap;class KE extends Ko{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Sr.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0);else{let _=Sa.get(u);_===void 0&&(_=[],Sa.set(u,_)),_.push({onLoad:t,onError:a})}return u}const f=Go("img");function d(){g(),t&&t(this);const _=Sa.get(this)||[];for(let m=0;m<_.length;m++){const y=_[m];y.onLoad&&y.onLoad(this)}Sa.delete(this),o.manager.itemEnd(e)}function h(_){g(),a&&a(_),Sr.remove(`image:${e}`);const m=Sa.get(this)||[];for(let y=0;y<m.length;y++){const M=m[y];M.onError&&M.onError(_)}Sa.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function g(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Sr.add(`image:${e}`,f),o.manager.itemStart(e),f.src=e,f}}class jR extends Ko{constructor(e){super(e)}load(e,t,i,a){const o=new kn,u=new KE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){o.image=f,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class lc extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bd=new bt,k0=new Y,B0=new Y;class rp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;k0.setFromMatrixPosition(e.matrixWorld),t.position.copy(k0),B0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(B0),t.updateMatrixWorld(),bd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ho||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Au=new Y,Ru=new Ds,Yi=new Y;class v_ extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Au,Ru,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Au,Ru,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new Y,z0=new yt,V0=new yt;class ai extends v_{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,z0,V0),t.subVectors(V0,z0)}setViewOffset(e,t,i,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*a/d,t-=u.offsetY*i/h,a*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ZE extends rp{constructor(){super(new ai(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ca*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XR extends lc{constructor(e,t,i=0,a=Math.PI/3,o=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=i,this.angle=a,this.penumbra=o,this.decay=u,this.map=null,this.shadow=new ZE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class JE extends rp{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}}class $R extends lc{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new JE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class sp extends v_{constructor(e=-1,t=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,u=i+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QE extends rp{constructor(){super(new sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H0 extends lc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new QE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class e1 extends lc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class YR{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ad=new WeakMap;class qR extends Ko{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Sr.get(`image-bitmap:${e}`);if(u!==void 0){if(o.manager.itemStart(e),u.then){u.then(h=>{Ad.has(u)===!0?(a&&a(Ad.get(u)),o.manager.itemError(e),o.manager.itemEnd(e)):(t&&t(h),o.manager.itemEnd(e))});return}setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0);return}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){Sr.add(`image-bitmap:${e}`,h),t&&t(h),o.manager.itemEnd(e)}).catch(function(h){a&&a(h),Ad.set(d,h),Sr.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});Sr.add(`image-bitmap:${e}`,d),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ma=-90,Ea=1;class t1 extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ai(Ma,Ea,e,t);a.layers=this.layers,this.add(a);const o=new ai(Ma,Ea,e,t);o.layers=this.layers,this.add(o);const u=new ai(Ma,Ea,e,t);u.layers=this.layers,this.add(u);const f=new ai(Ma,Ea,e,t);f.layers=this.layers,this.add(f);const d=new ai(Ma,Ea,e,t);d.layers=this.layers,this.add(d);const h=new ai(Ma,Ea,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,u,f,d]=t;for(const h of t)this.remove(h);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,d,h,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class n1 extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ap="\\[\\]\\.:\\/",i1=new RegExp("["+ap+"]","g"),op="[^"+ap+"]",r1="[^"+ap.replace("\\.","")+"]",s1=/((?:WC+[\/:])*)/.source.replace("WC",op),a1=/(WCOD+)?/.source.replace("WCOD",r1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",op),l1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",op),u1=new RegExp("^"+s1+a1+o1+l1+"$"),c1=["material","materials","bones","map"];class f1{constructor(e,t,i){const a=i||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class qt{constructor(e,t,i){this.path=t,this.parsedPath=i||qt.parseTrackName(t),this.node=qt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new qt.Composite(e,t,i):new qt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i1,"")}static parseTrackName(e){const t=u1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=i.nodeName.substring(a+1);c1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let u=0;u<o.length;u++){const f=o[u];if(f.name===t||f.uuid===t)return f;const d=i(f.children);if(d)return d}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=qt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[a];if(u===void 0){const h=t.nodeName;ut("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=o}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=f1;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const G0=new bt;class d1{constructor(e,t,i=0,a=1/0){this.ray=new $o(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Jh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return G0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(G0),this}intersectObject(e,t=!0,i=[]){return Ph(e,this,i,t),i.sort(W0),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)Ph(e[a],this,i,t);return i.sort(W0),i}}function W0(s,e){return s.distance-e.distance}function Ph(s,e,t,i){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=s.children;for(let u=0,f=o.length;u<f;u++)Ph(o[u],e,t,!0)}}const dp=class dp{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};dp.prototype.isMatrix2=!0;let j0=dp;function X0(s,e,t,i){const a=h1(i);switch(t){case e_:return s*e;case Wh:return s*e/a.components*a.byteLength;case jh:return s*e/a.components*a.byteLength;case Ns:return s*e*2/a.components*a.byteLength;case Xh:return s*e*2/a.components*a.byteLength;case t_:return s*e*3/a.components*a.byteLength;case Ai:return s*e*4/a.components*a.byteLength;case $h:return s*e*4/a.components*a.byteLength;case Ou:case ku:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bu:case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:case Zd:return Math.max(s,16)*Math.max(e,8)/4;case Yd:case Kd:return Math.max(s,8)*Math.max(e,8)/2;case Jd:case Qd:case th:case nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eh:case Wu:case ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _h:case xh:case yh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sh:case Mh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ju:case Eh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h1(s){switch(s){case gi:case Kv:return{byteLength:1,components:1};case zo:case Zv:case br:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case nr:case Vh:case bi:return{byteLength:4,components:1};case Jv:case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function __(){let s=null,e=!1,t=null,i=null;function a(o,u){t(o,u),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function p1(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,_=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,h){const g=d.array,_=d.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,g);else{_.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<_.length;y++){const M=_[m],b=_[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++m,_[m]=b)}_.length=m+1;for(let y=0,M=_.length;y<M;y++){const b=_[y];s.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:o,update:u}}var m1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g1=`#ifdef USE_ALPHAHASH
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
#endif`,v1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S1=`#ifdef USE_AOMAP
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
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
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
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R1=`#ifdef USE_IRIDESCENCE
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
#endif`,C1=`#ifdef USE_BUMPMAP
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,k1=`#define PI 3.141592653589793
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
} // validated`,B1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nw=`#ifdef USE_GRADIENTMAP
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
}`,iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ow=`#ifdef USE_ENVMAP
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
#endif`,lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
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
#endif`,hw=`uniform sampler2D dfgLUT;
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
}`,pw=`
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
#endif`,mw=`#if defined( RE_IndirectDiffuse )
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
#endif`,gw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tw=`#if defined( USE_POINTS_UV )
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
#endif`,bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`#ifdef USE_MORPHTARGETS
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
#endif`,Lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kw=`#ifdef USE_NORMALMAP
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
#endif`,Bw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ww=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eT=`float getShadowMask() {
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
}`,tT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,sT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gT=`uniform sampler2D t2D;
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`#include <common>
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
}`,MT=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,wT=`#define DISTANCE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,PT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,IT=`#define MATCAP
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
}`,DT=`#define MATCAP
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
}`,UT=`#define NORMAL
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
}`,FT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,kT=`#define PHONG
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
}`,BT=`#define STANDARD
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
}`,zT=`#define STANDARD
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
}`,VT=`#define TOON
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
}`,HT=`#define TOON
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
}`,GT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,jT=`#include <common>
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
}`,XT=`uniform vec3 color;
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
}`,$T=`uniform float rotation;
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
}`,YT=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:m1,alphahash_pars_fragment:g1,alphamap_fragment:v1,alphamap_pars_fragment:_1,alphatest_fragment:x1,alphatest_pars_fragment:y1,aomap_fragment:S1,aomap_pars_fragment:M1,batching_pars_vertex:E1,batching_vertex:w1,begin_vertex:T1,beginnormal_vertex:b1,bsdfs:A1,iridescence_fragment:R1,bumpmap_pars_fragment:C1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:L1,clipping_planes_vertex:I1,color_fragment:D1,color_pars_fragment:U1,color_pars_vertex:F1,color_vertex:O1,common:k1,cube_uv_reflection_fragment:B1,defaultnormal_vertex:z1,displacementmap_pars_vertex:V1,displacementmap_vertex:H1,emissivemap_fragment:G1,emissivemap_pars_fragment:W1,colorspace_fragment:j1,colorspace_pars_fragment:X1,envmap_fragment:$1,envmap_common_pars_fragment:Y1,envmap_pars_fragment:q1,envmap_pars_vertex:K1,envmap_physical_pars_fragment:ow,envmap_vertex:Z1,fog_vertex:J1,fog_pars_vertex:Q1,fog_fragment:ew,fog_pars_fragment:tw,gradientmap_pars_fragment:nw,lightmap_pars_fragment:iw,lights_lambert_fragment:rw,lights_lambert_pars_fragment:sw,lights_pars_begin:aw,lights_toon_fragment:lw,lights_toon_pars_fragment:uw,lights_phong_fragment:cw,lights_phong_pars_fragment:fw,lights_physical_fragment:dw,lights_physical_pars_fragment:hw,lights_fragment_begin:pw,lights_fragment_maps:mw,lights_fragment_end:gw,lightprobes_pars_fragment:vw,logdepthbuf_fragment:_w,logdepthbuf_pars_fragment:xw,logdepthbuf_pars_vertex:yw,logdepthbuf_vertex:Sw,map_fragment:Mw,map_pars_fragment:Ew,map_particle_fragment:ww,map_particle_pars_fragment:Tw,metalnessmap_fragment:bw,metalnessmap_pars_fragment:Aw,morphinstance_vertex:Rw,morphcolor_vertex:Cw,morphnormal_vertex:Pw,morphtarget_pars_vertex:Nw,morphtarget_vertex:Lw,normal_fragment_begin:Iw,normal_fragment_maps:Dw,normal_pars_fragment:Uw,normal_pars_vertex:Fw,normal_vertex:Ow,normalmap_pars_fragment:kw,clearcoat_normal_fragment_begin:Bw,clearcoat_normal_fragment_maps:zw,clearcoat_pars_fragment:Vw,iridescence_pars_fragment:Hw,opaque_fragment:Gw,packing:Ww,premultiplied_alpha_fragment:jw,project_vertex:Xw,dithering_fragment:$w,dithering_pars_fragment:Yw,roughnessmap_fragment:qw,roughnessmap_pars_fragment:Kw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Jw,shadowmap_vertex:Qw,shadowmask_pars_fragment:eT,skinbase_vertex:tT,skinning_pars_vertex:nT,skinning_vertex:iT,skinnormal_vertex:rT,specularmap_fragment:sT,specularmap_pars_fragment:aT,tonemapping_fragment:oT,tonemapping_pars_fragment:lT,transmission_fragment:uT,transmission_pars_fragment:cT,uv_pars_fragment:fT,uv_pars_vertex:dT,uv_vertex:hT,worldpos_vertex:pT,background_vert:mT,background_frag:gT,backgroundCube_vert:vT,backgroundCube_frag:_T,cube_vert:xT,cube_frag:yT,depth_vert:ST,depth_frag:MT,distance_vert:ET,distance_frag:wT,equirect_vert:TT,equirect_frag:bT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:CT,meshbasic_frag:PT,meshlambert_vert:NT,meshlambert_frag:LT,meshmatcap_vert:IT,meshmatcap_frag:DT,meshnormal_vert:UT,meshnormal_frag:FT,meshphong_vert:OT,meshphong_frag:kT,meshphysical_vert:BT,meshphysical_frag:zT,meshtoon_vert:VT,meshtoon_frag:HT,points_vert:GT,points_frag:WT,shadow_vert:jT,shadow_frag:XT,sprite_vert:$T,sprite_frag:YT},He={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ki={basic:{uniforms:qn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:qn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:qn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:qn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:qn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Pt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:qn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:qn([He.points,He.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:qn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:qn([He.common,He.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:qn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:qn([He.sprite,He.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:qn([He.common,He.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:qn([He.lights,He.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ki.physical={uniforms:qn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Cu={r:0,b:0,g:0},qT=new bt,x_=new xt;x_.set(-1,0,0,0,1,0,0,0,1);function KT(s,e,t,i,a,o){const u=new Pt(0);let f=a===!0?0:1,d,h,g=null,_=0,m=null;function y(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){const P=A.backgroundBlurriness>0;R=e.get(R,P)}return R}function M(A){let R=!1;const P=y(A);P===null?x(u,f):P&&P.isColor&&(x(P,1),R=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(A,R){const P=y(R);P&&(P.isCubeTexture||P.mapping===sc)?(h===void 0&&(h=new ui(new Yo(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Na(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(x_),h.material.toneMapped=Nt.getTransfer(P.colorSpace)!==Wt,(g!==P||_!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=P,_=P.version,m=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new ui(new ac(2,2),new ir({name:"BackgroundMaterial",uniforms:Na(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Nt.getTransfer(P.colorSpace)!==Wt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||_!==P.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=P,_=P.version,m=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function x(A,R){A.getRGB(Cu,p_(s)),t.buffers.color.setClear(Cu.r,Cu.g,Cu.b,R,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,R=1){u.set(A),f=R,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,x(u,f)},render:M,addToRenderList:b,dispose:S}}function ZT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=m(null);let o=a,u=!1;function f(B,Z,me,ge,W){let ie=!1;const Q=_(B,ge,me,Z);o!==Q&&(o=Q,h(o.object)),ie=y(B,ge,me,W),ie&&M(B,ge,me,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,P(B,Z,me,ge),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return s.createVertexArray()}function h(B){return s.bindVertexArray(B)}function g(B){return s.deleteVertexArray(B)}function _(B,Z,me,ge){const W=ge.wireframe===!0;let ie=i[Z.id];ie===void 0&&(ie={},i[Z.id]=ie);const Q=B.isInstancedMesh===!0?B.id:0;let J=ie[Q];J===void 0&&(J={},ie[Q]=J);let fe=J[me.id];fe===void 0&&(fe={},J[me.id]=fe);let ce=fe[W];return ce===void 0&&(ce=m(d()),fe[W]=ce),ce}function m(B){const Z=[],me=[],ge=[];for(let W=0;W<t;W++)Z[W]=0,me[W]=0,ge[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:me,attributeDivisors:ge,object:B,attributes:{},index:null}}function y(B,Z,me,ge){const W=o.attributes,ie=Z.attributes;let Q=0;const J=me.getAttributes();for(const fe in J)if(J[fe].location>=0){const F=W[fe];let ne=ie[fe];if(ne===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),F===void 0||F.attribute!==ne||ne&&F.data!==ne.data)return!0;Q++}return o.attributesNum!==Q||o.index!==ge}function M(B,Z,me,ge){const W={},ie=Z.attributes;let Q=0;const J=me.getAttributes();for(const fe in J)if(J[fe].location>=0){let F=ie[fe];F===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const ne={};ne.attribute=F,F&&F.data&&(ne.data=F.data),W[fe]=ne,Q++}o.attributes=W,o.attributesNum=Q,o.index=ge}function b(){const B=o.newAttributes;for(let Z=0,me=B.length;Z<me;Z++)B[Z]=0}function x(B){S(B,0)}function S(B,Z){const me=o.newAttributes,ge=o.enabledAttributes,W=o.attributeDivisors;me[B]=1,ge[B]===0&&(s.enableVertexAttribArray(B),ge[B]=1),W[B]!==Z&&(s.vertexAttribDivisor(B,Z),W[B]=Z)}function A(){const B=o.newAttributes,Z=o.enabledAttributes;for(let me=0,ge=Z.length;me<ge;me++)Z[me]!==B[me]&&(s.disableVertexAttribArray(me),Z[me]=0)}function R(B,Z,me,ge,W,ie,Q){Q===!0?s.vertexAttribIPointer(B,Z,me,W,ie):s.vertexAttribPointer(B,Z,me,ge,W,ie)}function P(B,Z,me,ge){b();const W=ge.attributes,ie=me.getAttributes(),Q=Z.defaultAttributeValues;for(const J in ie){const fe=ie[J];if(fe.location>=0){let ce=W[J];if(ce===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){const F=ce.normalized,ne=ce.itemSize,Be=e.get(ce);if(Be===void 0)continue;const We=Be.buffer,ze=Be.type,he=Be.bytesPerElement,Me=ze===s.INT||ze===s.UNSIGNED_INT||ce.gpuType===Vh;if(ce.isInterleavedBufferAttribute){const Se=ce.data,Fe=Se.stride,Je=ce.offset;if(Se.isInstancedInterleavedBuffer){for(let Qe=0;Qe<fe.locationSize;Qe++)S(fe.location+Qe,Se.meshPerAttribute);B.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Qe=0;Qe<fe.locationSize;Qe++)x(fe.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Qe=0;Qe<fe.locationSize;Qe++)R(fe.location+Qe,ne/fe.locationSize,ze,F,Fe*he,(Je+ne/fe.locationSize*Qe)*he,Me)}else{if(ce.isInstancedBufferAttribute){for(let Se=0;Se<fe.locationSize;Se++)S(fe.location+Se,ce.meshPerAttribute);B.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<fe.locationSize;Se++)x(fe.location+Se);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Se=0;Se<fe.locationSize;Se++)R(fe.location+Se,ne/fe.locationSize,ze,F,ne*he,ne/fe.locationSize*Se*he,Me)}}else if(Q!==void 0){const F=Q[J];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(fe.location,F);break;case 3:s.vertexAttrib3fv(fe.location,F);break;case 4:s.vertexAttrib4fv(fe.location,F);break;default:s.vertexAttrib1fv(fe.location,F)}}}}A()}function U(){I();for(const B in i){const Z=i[B];for(const me in Z){const ge=Z[me];for(const W in ge){const ie=ge[W];for(const Q in ie)g(ie[Q].object),delete ie[Q];delete ge[W]}}delete i[B]}}function L(B){if(i[B.id]===void 0)return;const Z=i[B.id];for(const me in Z){const ge=Z[me];for(const W in ge){const ie=ge[W];for(const Q in ie)g(ie[Q].object),delete ie[Q];delete ge[W]}}delete i[B.id]}function O(B){for(const Z in i){const me=i[Z];for(const ge in me){const W=me[ge];if(W[B.id]===void 0)continue;const ie=W[B.id];for(const Q in ie)g(ie[Q].object),delete ie[Q];delete W[B.id]}}}function w(B){for(const Z in i){const me=i[Z],ge=B.isInstancedMesh===!0?B.id:0,W=me[ge];if(W!==void 0){for(const ie in W){const Q=W[ie];for(const J in Q)g(Q[J].object),delete Q[J];delete W[ie]}delete me[ge],Object.keys(me).length===0&&delete i[Z]}}}function I(){V(),u=!0,o!==a&&(o=a,h(o.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:x,disableUnusedAttributes:A}}function JT(s,e,t){let i;function a(d){i=d}function o(d,h){s.drawArrays(i,d,h),t.update(h,i,1)}function u(d,h,g){g!==0&&(s.drawArraysInstanced(i,d,h,g),t.update(h,i,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y];t.update(m,i,1)}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=f}function QT(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==Ai&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==gi&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!w)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(it("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:P,maxSamples:U,samples:L}}function eb(s){const e=this;let t=null,i=0,a=!1,o=!1;const u=new Ts,f=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const y=_.length!==0||m||i!==0||a;return a=m,i=_.length,y},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,y){const M=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!a||M===null||M.length===0||o&&!x)o?g(null):h();else{const A=o?0:i,R=A*4;let P=S.clippingState||null;d.value=P,P=g(M,m,R,y);for(let U=0;U!==R;++U)P[U]=t[U];S.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,m,y,M){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=d.value,M!==!0||x===null){const S=y+b*4,A=m.matrixWorldInverse;f.getNormalMatrix(A),(x===null||x.length<S)&&(x=new Float32Array(S));for(let R=0,P=y;R!==b;++R,P+=4)u.copy(_[R]).applyMatrix4(A,f),u.normal.toArray(x,P),x[P+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const is=4,$0=[.125,.215,.35,.446,.526,.582],As=20,tb=256,Po=new sp,Y0=new Pt;let Rd=null,Cd=0,Pd=0,Nd=!1;const nb=new Y;class q0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:u=256,position:f=nb}=o;Rd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,Cd,Pd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:br,format:Ai,colorSpace:$u,depthBuffer:!1},a=K0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ib(o)),this._blurMaterial=sb(o,e,t),this._ggxMaterial=rb(o,e,t)}return a}_compileMaterial(e){const t=new ui(new Ln,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,i,a,o){const d=new ai(90,1,t,i),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,y=_.toneMapping;_.getClearColor(Y0),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new Yo,new Qh({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let S=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,S=!0):(x.color.copy(Y0),S=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(d.up.set(0,h[R],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+g[R],o.y,o.z)):P===1?(d.up.set(0,0,h[R]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+g[R],o.z)):(d.up.set(0,h[R],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+g[R]));const U=this._cubeSize;wa(a,P*U,R>2?U:0,U,U),_.setRenderTarget(a),S&&_.render(b,d),_.render(e,d)}_.toneMapping=y,_.autoClear=m,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ps||e.mapping===Ra;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z0());const o=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=e;const d=this._cubeSize;wa(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),m=0+h*1.25,y=_*m,{_lodMax:M}=this,b=this._sizeLods[i],x=3*b*(i>M-is?i-M+is:0),S=4*(this._cubeSize-b);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,wa(o,x,S,3*b,2*b),a.setRenderTarget(o),a.render(f,Po),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=M-i,wa(e,x,S,3*b,2*b),a.setRenderTarget(e),a.render(f,Po)}_blur(e,t,i,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,a,"latitudinal",o),this._halfBlur(u,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=h;const m=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*As-1),b=o/M,x=isFinite(o)?1+Math.floor(g*b):As;x>As&&it(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${As}`);const S=[];let A=0;for(let O=0;O<As;++O){const w=O/b,I=Math.exp(-w*w/2);S.push(I),O===0?A+=I:O<x&&(A+=2*I)}for(let O=0;O<S.length;O++)S[O]=S[O]/A;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=S,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:R}=this;m.dTheta.value=M,m.mipInt.value=R-i;const P=this._sizeLods[a],U=3*P*(a>R-is?a-R+is:0),L=4*(this._cubeSize-P);wa(t,U,L,3*P,2*P),d.setRenderTarget(t),d.render(_,Po)}}function ib(s){const e=[],t=[],i=[];let a=s;const o=s-is+1+$0.length;for(let u=0;u<o;u++){const f=Math.pow(2,a);e.push(f);let d=1/f;u>s-is?d=$0[u-s+is-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,_=1+h,m=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,b=3,x=2,S=1,A=new Float32Array(b*M*y),R=new Float32Array(x*M*y),P=new Float32Array(S*M*y);for(let L=0;L<y;L++){const O=L%3*2/3-1,w=L>2?0:-1,I=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];A.set(I,b*M*L),R.set(m,x*M*L);const V=[L,L,L,L,L,L];P.set(V,S*M*L)}const U=new Ln;U.setAttribute("position",new Nn(A,b)),U.setAttribute("uv",new Nn(R,x)),U.setAttribute("faceIndex",new Nn(P,S)),i.push(new ui(U,null)),a>is&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function K0(s,e,t){const i=new er(s,e,t);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function rb(s,e,t){return new ir({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function sb(s,e,t){const i=new Float32Array(As),a=new Y(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Z0(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function J0(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}class y_ extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new d_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yo(5,5,5),o=new ir({name:"CubemapFromEquirect",uniforms:Na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Er});o.uniforms.tEquirect.value=t;const u=new ui(a,o),f=t.minFilter;return t.minFilter===Rs&&(t.minFilter=jn),new t1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(o)}}function ab(s){let e=new WeakMap,t=new WeakMap,i=null;function a(m,y=!1){return m==null?null:y?u(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===qf||y===Kf)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const b=new y_(M.height);return b.fromEquirectangularTexture(s,m),e.set(m,b),m.addEventListener("dispose",h),f(b.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const y=m.mapping,M=y===qf||y===Kf,b=y===Ps||y===Ra;if(M||b){let x=t.get(m);const S=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new q0(s)),x=M?i.fromEquirectangular(m,x):i.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const A=m.image;return M&&A&&A.height>0||b&&A&&d(A)?(i===null&&(i=new q0(s)),x=M?i.fromEquirectangular(m):i.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",g),x.texture):null}}}return m}function f(m,y){return y===qf?m.mapping=Ps:y===Kf&&(m.mapping=Ra),m}function d(m){let y=0;const M=6;for(let b=0;b<M;b++)m[b]!==void 0&&y++;return y===M}function h(m){const y=m.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:_}}function ob(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ah("WebGLRenderer: "+i+" extension not supported."),a}}}function lb(s,e,t,i){const a={},o=new WeakMap;function u(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete a[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(_,m){return a[m.id]===!0||(m.addEventListener("dispose",u),a[m.id]=!0,t.memory.geometries++),m}function d(_){const m=_.attributes;for(const y in m)e.update(m[y],s.ARRAY_BUFFER)}function h(_){const m=[],y=_.index,M=_.attributes.position;let b=0;if(M===void 0)return;if(y!==null){const A=y.array;b=y.version;for(let R=0,P=A.length;R<P;R+=3){const U=A[R+0],L=A[R+1],O=A[R+2];m.push(U,L,L,O,O,U)}}else{const A=M.array;b=M.version;for(let R=0,P=A.length/3-1;R<P;R+=3){const U=R+0,L=R+1,O=R+2;m.push(U,L,L,O,O,U)}}const x=new(M.count>=65535?a_:s_)(m,1);x.version=b;const S=o.get(_);S&&e.remove(S),o.set(_,x)}function g(_){const m=o.get(_);if(m){const y=_.index;y!==null&&m.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function ub(s,e,t){let i;function a(_){i=_}let o,u;function f(_){o=_.type,u=_.bytesPerElement}function d(_,m){s.drawElements(i,m,o,_*u),t.update(m,i,1)}function h(_,m,y){y!==0&&(s.drawElementsInstanced(i,m,o,_*u,y),t.update(m,i,y))}function g(_,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,_,0,y);let b=0;for(let x=0;x<y;x++)b+=m[x];t.update(b,i,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function cb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(o/3);break;case s.LINES:t.lines+=f*(o/2);break;case s.LINE_STRIP:t.lines+=f*(o-1);break;case s.LINE_LOOP:t.lines+=f*o;break;case s.POINTS:t.points+=f*o;break;default:ut("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function fb(s,e,t){const i=new WeakMap,a=new Jt;function o(u,f,d){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let m=i.get(f);if(m===void 0||m.count!==_){let I=function(){O.dispose(),i.delete(f),f.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let R=0;y===!0&&(R=1),M===!0&&(R=2),b===!0&&(R=3);let P=f.attributes.position.count*R,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*U*4*_),O=new i_(L,P,U,_);O.type=bi,O.needsUpdate=!0;const w=R*4;for(let V=0;V<_;V++){const B=x[V],Z=S[V],me=A[V],ge=P*U*4*V;for(let W=0;W<B.count;W++){const ie=W*w;y===!0&&(a.fromBufferAttribute(B,W),L[ge+ie+0]=a.x,L[ge+ie+1]=a.y,L[ge+ie+2]=a.z,L[ge+ie+3]=0),M===!0&&(a.fromBufferAttribute(Z,W),L[ge+ie+4]=a.x,L[ge+ie+5]=a.y,L[ge+ie+6]=a.z,L[ge+ie+7]=0),b===!0&&(a.fromBufferAttribute(me,W),L[ge+ie+8]=a.x,L[ge+ie+9]=a.y,L[ge+ie+10]=a.z,L[ge+ie+11]=me.itemSize===4?a.w:1)}}m={count:_,texture:O,size:new yt(P,U)},i.set(f,m),f.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let y=0;for(let b=0;b<h.length;b++)y+=h[b];const M=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:o}}function db(s,e,t,i,a){let o=new WeakMap;function u(h){const g=a.render.frame,_=h.geometry,m=e.get(h,_);if(o.get(m)!==g&&(e.update(m),o.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return m}function f(){o=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const hb={[Gv]:"LINEAR_TONE_MAPPING",[Wv]:"REINHARD_TONE_MAPPING",[jv]:"CINEON_TONE_MAPPING",[zh]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[Yv]:"NEUTRAL_TONE_MAPPING",[Xv]:"CUSTOM_TONE_MAPPING"};function pb(s,e,t,i,a){const o=new er(e,t,{type:s,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Pa(e,t):void 0}),u=new er(e,t,{type:br,depthBuffer:!1,stencilBuffer:!1}),f=new Ln;f.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new li([0,2,0,0,2,0],2));const d=new FE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ui(f,d),g=new sp(-1,1,1,-1,0,1);let _=null,m=null,y=!1,M,b=null,x=[],S=!1;this.setSize=function(A,R){o.setSize(A,R),u.setSize(A,R);for(let P=0;P<x.length;P++){const U=x[P];U.setSize&&U.setSize(A,R)}},this.setEffects=function(A){x=A,S=x.length>0&&x[0].isRenderPass===!0;const R=o.width,P=o.height;for(let U=0;U<x.length;U++){const L=x[U];L.setSize&&L.setSize(R,P)}},this.begin=function(A,R){if(y||A.toneMapping===Qi&&x.length===0)return!1;if(b=R,R!==null){const P=R.width,U=R.height;(o.width!==P||o.height!==U)&&this.setSize(P,U)}return S===!1&&A.setRenderTarget(o),M=A.toneMapping,A.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(A,R){A.toneMapping=M,y=!0;let P=o,U=u;for(let L=0;L<x.length;L++){const O=x[L];if(O.enabled!==!1&&(O.render(A,U,P,R),O.needsSwap!==!1)){const w=P;P=U,U=w}}if(_!==A.outputColorSpace||m!==A.toneMapping){_=A.outputColorSpace,m=A.toneMapping,d.defines={},Nt.getTransfer(_)===Wt&&(d.defines.SRGB_TRANSFER="");const L=hb[m];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,A.setRenderTarget(b),A.render(h,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),u.dispose(),f.dispose(),d.dispose()}}const S_=new kn,Nh=new Pa(1,1),M_=new i_,E_=new aE,w_=new d_,Q0=[],ev=[],tv=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Fa(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=Q0[a];if(o===void 0&&(o=new Float32Array(a),Q0[a]=o),e!==0){i.toArray(o,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(o,f)}return o}function Tn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function bn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function cc(s,e){let t=ev[e];t===void 0&&(t=new Int32Array(e),ev[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function mb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2fv(this.addr,e),bn(t,e)}}function vb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;s.uniform3fv(this.addr,e),bn(t,e)}}function _b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4fv(this.addr,e),bn(t,e)}}function xb(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Tn(t,i))return;iv.set(i),s.uniformMatrix2fv(this.addr,!1,iv),bn(t,i)}}function yb(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Tn(t,i))return;nv.set(i),s.uniformMatrix3fv(this.addr,!1,nv),bn(t,i)}}function Sb(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Tn(t,i))return;tv.set(i),s.uniformMatrix4fv(this.addr,!1,tv),bn(t,i)}}function Mb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2iv(this.addr,e),bn(t,e)}}function wb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3iv(this.addr,e),bn(t,e)}}function Tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4iv(this.addr,e),bn(t,e)}}function bb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2uiv(this.addr,e),bn(t,e)}}function Rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3uiv(this.addr,e),bn(t,e)}}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4uiv(this.addr,e),bn(t,e)}}function Pb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?qh:Yh,o=Nh):o=S_,t.setTexture2D(e||o,a)}function Nb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||E_,a)}function Lb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||w_,a)}function Ib(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||M_,a)}function Db(s){switch(s){case 5126:return mb;case 35664:return gb;case 35665:return vb;case 35666:return _b;case 35674:return xb;case 35675:return yb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return wb;case 35669:case 35673:return Tb;case 5125:return bb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Ub(s,e){s.uniform1fv(this.addr,e)}function Fb(s,e){const t=Fa(e,this.size,2);s.uniform2fv(this.addr,t)}function Ob(s,e){const t=Fa(e,this.size,3);s.uniform3fv(this.addr,t)}function kb(s,e){const t=Fa(e,this.size,4);s.uniform4fv(this.addr,t)}function Bb(s,e){const t=Fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zb(s,e){const t=Fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Vb(s,e){const t=Fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hb(s,e){s.uniform1iv(this.addr,e)}function Gb(s,e){s.uniform2iv(this.addr,e)}function Wb(s,e){s.uniform3iv(this.addr,e)}function jb(s,e){s.uniform4iv(this.addr,e)}function Xb(s,e){s.uniform1uiv(this.addr,e)}function $b(s,e){s.uniform2uiv(this.addr,e)}function Yb(s,e){s.uniform3uiv(this.addr,e)}function qb(s,e){s.uniform4uiv(this.addr,e)}function Kb(s,e,t){const i=this.cache,a=e.length,o=cc(t,a);Tn(i,o)||(s.uniform1iv(this.addr,o),bn(i,o));let u;this.type===s.SAMPLER_2D_SHADOW?u=Nh:u=S_;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,o[f])}function Zb(s,e,t){const i=this.cache,a=e.length,o=cc(t,a);Tn(i,o)||(s.uniform1iv(this.addr,o),bn(i,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||E_,o[u])}function Jb(s,e,t){const i=this.cache,a=e.length,o=cc(t,a);Tn(i,o)||(s.uniform1iv(this.addr,o),bn(i,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||w_,o[u])}function Qb(s,e,t){const i=this.cache,a=e.length,o=cc(t,a);Tn(i,o)||(s.uniform1iv(this.addr,o),bn(i,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||M_,o[u])}function eA(s){switch(s){case 5126:return Ub;case 35664:return Fb;case 35665:return Ob;case 35666:return kb;case 35674:return Bb;case 35675:return zb;case 35676:return Vb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return jb;case 5125:return Xb;case 36294:return $b;case 36295:return Yb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}class tA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class nA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const f=a[o];f.setValue(e,t[f.id],i)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function rv(s,e){s.seq.push(e),s.map[e.id]=e}function rA(s,e,t){const i=s.name,a=i.length;for(Ld.lastIndex=0;;){const o=Ld.exec(i),u=Ld.lastIndex;let f=o[1];const d=o[2]==="]",h=o[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===a){rv(t,h===void 0?new tA(f,s,e):new nA(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new iA(f),rv(t,_)),t=_}}}class Hu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);rA(f,d,this)}const a=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):o.push(u);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,u=t.length;o!==u;++o){const f=t[o],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function sv(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const sA=37297;let aA=0;function oA(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const av=new xt;function lA(s){Nt._getMatrix(av,Nt.workingColorSpace,s);const e=`mat3( ${av.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case Yu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ov(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+oA(s.getShaderSource(e),f)}else return o}function uA(s,e){const t=lA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cA={[Gv]:"Linear",[Wv]:"Reinhard",[jv]:"Cineon",[zh]:"ACESFilmic",[$v]:"AgX",[Yv]:"Neutral",[Xv]:"Custom"};function fA(s,e){const t=cA[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pu=new Y;function dA(){Nt.getLuminanceCoefficients(Pu);const s=Pu.x.toFixed(4),e=Pu.y.toFixed(4),t=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function pA(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mA(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),u=o.name;let f=1;o.type===s.FLOAT_MAT2&&(f=2),o.type===s.FLOAT_MAT3&&(f=3),o.type===s.FLOAT_MAT4&&(f=4),t[u]={type:o.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Fo(s){return s!==""}function lv(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(s){return s.replace(gA,_A)}const vA=new Map;function _A(s,e){let t=wt[e];if(t===void 0){const i=vA.get(e);if(i!==void 0)t=wt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lh(t)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(s){return s.replace(xA,yA)}function yA(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function fv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const SA={[Fu]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function MA(s){return SA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EA={[Ps]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function wA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":EA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const TA={[Ra]:"ENVMAP_MODE_REFRACTION"};function bA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":TA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AA={[Hv]:"ENVMAP_BLENDING_MULTIPLY",[SM]:"ENVMAP_BLENDING_MIX",[MM]:"ENVMAP_BLENDING_ADD"};function RA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":AA[s.combine]||"ENVMAP_BLENDING_NONE"}function CA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PA(s,e,t,i){const a=s.getContext(),o=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=MA(t),h=wA(t),g=bA(t),_=RA(t),m=CA(t),y=hA(t),M=pA(o),b=a.createProgram();let x,S,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fo).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fo).join(`
`),S.length>0&&(S+=`
`)):(x=[fv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),S=[fv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?wt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?fA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,uA("linearToOutputTexel",t.outputColorSpace),dA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),u=Lh(u),u=lv(u,t),u=uv(u,t),f=Lh(f),f=lv(f,t),f=uv(f,t),u=cv(u),f=cv(f),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const R=A+x+u,P=A+S+f,U=sv(a,a.VERTEX_SHADER,R),L=sv(a,a.FRAGMENT_SHADER,P);a.attachShader(b,U),a.attachShader(b,L),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function O(B){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(b)||"",me=a.getShaderInfoLog(U)||"",ge=a.getShaderInfoLog(L)||"",W=Z.trim(),ie=me.trim(),Q=ge.trim();let J=!0,fe=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,U,L);else{const ce=ov(a,U,"vertex"),F=ov(a,L,"fragment");ut("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+ce+`
`+F)}else W!==""?it("WebGLProgram: Program Info Log:",W):(ie===""||Q==="")&&(fe=!1);fe&&(B.diagnostics={runnable:J,programLog:W,vertexShader:{log:ie,prefix:x},fragmentShader:{log:Q,prefix:S}})}a.deleteShader(U),a.deleteShader(L),w=new Hu(a,b),I=mA(a,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(b,sA)),V},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=L,this}let NA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IA(e),t.set(e,i)),i}}class IA{constructor(e){this.id=NA++,this.code=e,this.usedTimes=0}}function DA(s){return s===Ns||s===Wu||s===ju}function UA(s,e,t,i,a,o){const u=new Jh,f=new LA,d=new Set,h=[],g=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function b(w,I,V,B,Z,me){const ge=B.fog,W=Z.geometry,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=e.get(w.envMap||ie,Q),fe=J&&J.mapping===sc?J.image.height:null,ce=y[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&it("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=F!==void 0?F.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let We,ze,he,Me;if(ce){const Pe=Ki[ce];We=Pe.vertexShader,ze=Pe.fragmentShader}else We=w.vertexShader,ze=w.fragmentShader,f.update(w),he=f.getVertexShaderID(w),Me=f.getFragmentShaderID(w);const Se=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),Je=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,Lt=!!w.map,ft=!!w.matcap,Mt=!!J,It=!!w.aoMap,vt=!!w.lightMap,Xt=!!w.bumpMap,Vt=!!w.normalMap,vn=!!w.displacementMap,j=!!w.emissiveMap,$t=!!w.metalnessMap,St=!!w.roughnessMap,Bt=w.anisotropy>0,Oe=w.clearcoat>0,Kt=w.dispersion>0,N=w.iridescence>0,E=w.sheen>0,te=w.transmission>0,_e=Bt&&!!w.anisotropyMap,Ee=Oe&&!!w.clearcoatMap,Ae=Oe&&!!w.clearcoatNormalMap,Ie=Oe&&!!w.clearcoatRoughnessMap,ve=N&&!!w.iridescenceMap,xe=N&&!!w.iridescenceThicknessMap,Ve=E&&!!w.sheenColorMap,Ge=E&&!!w.sheenRoughnessMap,Le=!!w.specularMap,Re=!!w.specularColorMap,rt=!!w.specularIntensityMap,dt=te&&!!w.transmissionMap,Et=te&&!!w.thicknessMap,G=!!w.gradientMap,Ce=!!w.alphaMap,k=w.alphaTest>0,re=!!w.alphaHash,ee=!!w.extensions;let $=Qi;w.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&($=s.toneMapping);const ye={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:We,fragmentShader:ze,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:Je,instancingColor:Je&&Z.instanceColor!==null,instancingMorph:Je&&Z.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Lt,matcap:ft,envMap:Mt,envMapMode:Mt&&J.mapping,envMapCubeUVHeight:fe,aoMap:It,lightMap:vt,bumpMap:Xt,normalMap:Vt,displacementMap:vn,emissiveMap:j,normalMapObjectSpace:Vt&&w.normalMapType===AM,normalMapTangentSpace:Vt&&w.normalMapType===Th,packedNormalMap:Vt&&w.normalMapType===Th&&DA(w.normalMap.format),metalnessMap:$t,roughnessMap:St,anisotropy:Bt,anisotropyMap:_e,clearcoat:Oe,clearcoatMap:Ee,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ie,dispersion:Kt,iridescence:N,iridescenceMap:ve,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:Ve,sheenRoughnessMap:Ge,specularMap:Le,specularColorMap:Re,specularIntensityMap:rt,transmission:te,transmissionMap:dt,thicknessMap:Et,gradientMap:G,opaque:w.transparent===!1&&w.blending===Ta&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:k,alphaHash:re,combine:w.combine,mapUv:Lt&&M(w.map.channel),aoMapUv:It&&M(w.aoMap.channel),lightMapUv:vt&&M(w.lightMap.channel),bumpMapUv:Xt&&M(w.bumpMap.channel),normalMapUv:Vt&&M(w.normalMap.channel),displacementMapUv:vn&&M(w.displacementMap.channel),emissiveMapUv:j&&M(w.emissiveMap.channel),metalnessMapUv:$t&&M(w.metalnessMap.channel),roughnessMapUv:St&&M(w.roughnessMap.channel),anisotropyMapUv:_e&&M(w.anisotropyMap.channel),clearcoatMapUv:Ee&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(w.sheenRoughnessMap.channel),specularMapUv:Le&&M(w.specularMap.channel),specularColorMapUv:Re&&M(w.specularColorMap.channel),specularIntensityMapUv:rt&&M(w.specularIntensityMap.channel),transmissionMapUv:dt&&M(w.transmissionMap.channel),thicknessMapUv:Et&&M(w.thicknessMap.channel),alphaMapUv:Ce&&M(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Vt||Bt),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(Lt||Ce),fog:!!ge,useFog:w.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Fe,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Be,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:$,decodeVideoTexture:Lt&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===Wt,decodeVideoTextureEmissive:j&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===Wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zi,flipSided:w.side===oi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ee&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&w.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ye.vertexUv1s=d.has(1),ye.vertexUv2s=d.has(2),ye.vertexUv3s=d.has(3),d.clear(),ye}function x(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)I.push(V),I.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(S(I,w),A(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function S(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function A(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const I=y[w.type];let V;if(I){const B=Ki[I];V=IE.clone(B.uniforms)}else V=w.uniforms;return V}function P(w,I){let V=g.get(I);return V!==void 0?++V.usedTimes:(V=new PA(s,I,w,a),h.push(V),g.set(I,V)),V}function U(w){if(--w.usedTimes===0){const I=h.indexOf(w);h[I]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function L(w){f.remove(w)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:R,acquireProgram:P,releaseProgram:U,releaseShaderCache:L,programs:h,dispose:O}}function FA(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function i(u){s.delete(u)}function a(u,f,d){s.get(u)[f]=d}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function OA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hv(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function u(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,M,b,x,S){let A=s[e];return A===void 0?(A={id:m.id,object:m,geometry:y,material:M,materialVariant:u(m),groupOrder:b,renderOrder:m.renderOrder,z:x,group:S},s[e]=A):(A.id=m.id,A.object=m,A.geometry=y,A.material=M,A.materialVariant=u(m),A.groupOrder=b,A.renderOrder=m.renderOrder,A.z=x,A.group=S),e++,A}function d(m,y,M,b,x,S){const A=f(m,y,M,b,x,S);M.transmission>0?i.push(A):M.transparent===!0?a.push(A):t.push(A)}function h(m,y,M,b,x,S){const A=f(m,y,M,b,x,S);M.transmission>0?i.unshift(A):M.transparent===!0?a.unshift(A):t.unshift(A)}function g(m,y){t.length>1&&t.sort(m||OA),i.length>1&&i.sort(y||dv),a.length>1&&a.sort(y||dv)}function _(){for(let m=e,y=s.length;m<y;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:d,unshift:h,finish:_,sort:g}}function kA(){let s=new WeakMap;function e(i,a){const o=s.get(i);let u;return o===void 0?(u=new hv,s.set(i,[u])):a>=o.length?(u=new hv,o.push(u)):u=o[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function BA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function zA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let VA=0;function HA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GA(s){const e=new BA,t=zA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const a=new Y,o=new bt,u=new bt;function f(h){let g=0,_=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let y=0,M=0,b=0,x=0,S=0,A=0,R=0,P=0,U=0,L=0,O=0;h.sort(HA);for(let I=0,V=h.length;I<V;I++){const B=h[I],Z=B.color,me=B.intensity,ge=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ns?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=Z.r*me,_+=Z.g*me,m+=Z.b*me;else if(B.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(B.sh.coefficients[ie],me);O++}else if(B.isDirectionalLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,J=t.get(B);J.shadowIntensity=Q.intensity,J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[y]=J,i.directionalShadowMap[y]=W,i.directionalShadowMatrix[y]=B.shadow.matrix,A++}i.directional[y]=ie,y++}else if(B.isSpotLight){const ie=e.get(B);ie.position.setFromMatrixPosition(B.matrixWorld),ie.color.copy(Z).multiplyScalar(me),ie.distance=ge,ie.coneCos=Math.cos(B.angle),ie.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ie.decay=B.decay,i.spot[b]=ie;const Q=B.shadow;if(B.map&&(i.spotLightMap[U]=B.map,U++,Q.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[b]=Q.matrix,B.castShadow){const J=t.get(B);J.shadowIntensity=Q.intensity,J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[b]=J,i.spotShadowMap[b]=W,P++}b++}else if(B.isRectAreaLight){const ie=e.get(B);ie.color.copy(Z).multiplyScalar(me),ie.halfWidth.set(B.width*.5,0,0),ie.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=ie,x++}else if(B.isPointLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),ie.distance=B.distance,ie.decay=B.decay,B.castShadow){const Q=B.shadow,J=t.get(B);J.shadowIntensity=Q.intensity,J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[M]=J,i.pointShadowMap[M]=W,i.pointShadowMatrix[M]=B.shadow.matrix,R++}i.point[M]=ie,M++}else if(B.isHemisphereLight){const ie=e.get(B);ie.skyColor.copy(B.color).multiplyScalar(me),ie.groundColor.copy(B.groundColor).multiplyScalar(me),i.hemi[S]=ie,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==y||w.pointLength!==M||w.spotLength!==b||w.rectAreaLength!==x||w.hemiLength!==S||w.numDirectionalShadows!==A||w.numPointShadows!==R||w.numSpotShadows!==P||w.numSpotMaps!==U||w.numLightProbes!==O)&&(i.directional.length=y,i.spot.length=b,i.rectArea.length=x,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=P+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=O,w.directionalLength=y,w.pointLength=M,w.spotLength=b,w.rectAreaLength=x,w.hemiLength=S,w.numDirectionalShadows=A,w.numPointShadows=R,w.numSpotShadows=P,w.numSpotMaps=U,w.numLightProbes=O,i.version=VA++)}function d(h,g){let _=0,m=0,y=0,M=0,b=0;const x=g.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const R=h[S];if(R.isDirectionalLight){const P=i.directional[_];P.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),_++}else if(R.isSpotLight){const P=i.spot[y];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),y++}else if(R.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(x),u.identity(),o.copy(R.matrixWorld),o.premultiply(x),u.extractRotation(o),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(x),m++}else if(R.isHemisphereLight){const P=i.hemi[b];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(x),b++}}}return{setup:f,setupView:d,state:i}}function pv(s){const e=new GA(s),t=[],i=[],a=[];function o(m){_.camera=m,t.length=0,i.length=0,a.length=0}function u(m){t.push(m)}function f(m){i.push(m)}function d(m){a.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:_,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function WA(s){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let f;return u===void 0?(f=new pv(s),e.set(a,[f])):o>=u.length?(f=new pv(s),u.push(f)):f=u[o],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
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
}`,$A=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],YA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],mv=new bt,No=new Y,Id=new Y;function qA(s,e,t){let i=new tp;const a=new yt,o=new yt,u=new Jt,f=new OE,d=new kE,h={},g=t.maxTextureSize,_={[rs]:oi,[oi]:rs,[Zi]:Zi},m=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:jA,fragmentShader:XA}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ln;M.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ui(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let S=this.type;this.render=function(L,O,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===nM&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fu);const I=s.getRenderTarget(),V=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Er),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const me=S!==this.type;me&&O.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(W=>W.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,W=L.length;ge<W;ge++){const ie=L[ge],Q=ie.shadow;if(Q===void 0){it("WebGLShadowMap:",ie,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;a.copy(Q.mapSize);const J=Q.getFrameExtents();a.multiply(J),o.copy(Q.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(o.x=Math.floor(g/J.x),a.x=o.x*J.x,Q.mapSize.x=o.x),a.y>g&&(o.y=Math.floor(g/J.y),a.y=o.y*J.y,Q.mapSize.y=o.y));const fe=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=fe,Q.map===null||me===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Do){if(ie.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new er(a.x,a.y,{format:Ns,type:br,minFilter:jn,magFilter:jn,generateMipmaps:!1}),Q.map.texture.name=ie.name+".shadowMap",Q.map.depthTexture=new Pa(a.x,a.y,bi),Q.map.depthTexture.name=ie.name+".shadowMapDepth",Q.map.depthTexture.format=Ar,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=On,Q.map.depthTexture.magFilter=On}else ie.isPointLight?(Q.map=new y_(a.x),Q.map.depthTexture=new NE(a.x,nr)):(Q.map=new er(a.x,a.y),Q.map.depthTexture=new Pa(a.x,a.y,nr)),Q.map.depthTexture.name=ie.name+".shadowMap",Q.map.depthTexture.format=Ar,this.type===Fu?(Q.map.depthTexture.compareFunction=fe?qh:Yh,Q.map.depthTexture.minFilter=jn,Q.map.depthTexture.magFilter=jn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=On,Q.map.depthTexture.magFilter=On);Q.camera.updateProjectionMatrix()}const ce=Q.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ce;F++){if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,F),s.clear();else{F===0&&(s.setRenderTarget(Q.map),s.clear());const ne=Q.getViewport(F);u.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),Z.viewport(u)}if(ie.isPointLight){const ne=Q.camera,Be=Q.matrix,We=ie.distance||ne.far;We!==ne.far&&(ne.far=We,ne.updateProjectionMatrix()),No.setFromMatrixPosition(ie.matrixWorld),ne.position.copy(No),Id.copy(ne.position),Id.add($A[F]),ne.up.copy(YA[F]),ne.lookAt(Id),ne.updateMatrixWorld(),Be.makeTranslation(-No.x,-No.y,-No.z),mv.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(mv,ne.coordinateSystem,ne.reversedDepth)}else Q.updateMatrices(ie);i=Q.getFrustum(),P(O,w,Q.camera,ie,this.type)}Q.isPointLightShadow!==!0&&this.type===Do&&A(Q,w),Q.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(I,V,B)};function A(L,O){const w=e.update(b);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new er(a.x,a.y,{format:Ns,type:br})),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,w,m,b,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,w,y,b,null)}function R(L,O,w,I){let V=null;const B=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)V=B;else if(V=w.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=V.uuid,me=O.uuid;let ge=h[Z];ge===void 0&&(ge={},h[Z]=ge);let W=ge[me];W===void 0&&(W=V.clone(),ge[me]=W,O.addEventListener("dispose",U)),V=W}if(V.visible=O.visible,V.wireframe=O.wireframe,I===Do?V.side=O.shadowSide!==null?O.shadowSide:O.side:V.side=O.shadowSide!==null?O.shadowSide:_[O.side],V.alphaMap=O.alphaMap,V.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,V.map=O.map,V.clipShadows=O.clipShadows,V.clippingPlanes=O.clippingPlanes,V.clipIntersection=O.clipIntersection,V.displacementMap=O.displacementMap,V.displacementScale=O.displacementScale,V.displacementBias=O.displacementBias,V.wireframeLinewidth=O.wireframeLinewidth,V.linewidth=O.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=s.properties.get(V);Z.light=w}return V}function P(L,O,w,I,V){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Do)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const me=e.update(L),ge=L.material;if(Array.isArray(ge)){const W=me.groups;for(let ie=0,Q=W.length;ie<Q;ie++){const J=W[ie],fe=ge[J.materialIndex];if(fe&&fe.visible){const ce=R(L,fe,I,V);L.onBeforeShadow(s,L,O,w,me,ce,J),s.renderBufferDirect(w,null,me,ce,L,J),L.onAfterShadow(s,L,O,w,me,ce,J)}}}else if(ge.visible){const W=R(L,ge,I,V);L.onBeforeShadow(s,L,O,w,me,W,null),s.renderBufferDirect(w,null,me,W,L,null),L.onAfterShadow(s,L,O,w,me,W,null)}}const Z=L.children;for(let me=0,ge=Z.length;me<ge;me++)P(Z[me],O,w,I,V)}function U(L){L.target.removeEventListener("dispose",U);for(const w in h){const I=h[w],V=L.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function KA(s,e){function t(){let G=!1;const Ce=new Jt;let k=null;const re=new Jt(0,0,0,0);return{setMask:function(ee){k!==ee&&!G&&(s.colorMask(ee,ee,ee,ee),k=ee)},setLocked:function(ee){G=ee},setClear:function(ee,$,ye,Pe,ue){ue===!0&&(ee*=Pe,$*=Pe,ye*=Pe),Ce.set(ee,$,ye,Pe),re.equals(Ce)===!1&&(s.clearColor(ee,$,ye,Pe),re.copy(Ce))},reset:function(){G=!1,k=null,re.set(-1,0,0,0)}}}function i(){let G=!1,Ce=!1,k=null,re=null,ee=null;return{setReversed:function($){if(Ce!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Ce=$;const Pe=ee;ee=null,this.setClear(Pe)}},getReversed:function(){return Ce},setTest:function($){$?Se(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function($){k!==$&&!G&&(s.depthMask($),k=$)},setFunc:function($){if(Ce&&($=kM[$]),re!==$){switch($){case Bd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case Vd:s.depthFunc(s.LESS);break;case Aa:s.depthFunc(s.LEQUAL);break;case Hd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=$}},setLocked:function($){G=$},setClear:function($){ee!==$&&(ee=$,Ce&&($=1-$),s.clearDepth($))},reset:function(){G=!1,k=null,re=null,ee=null,Ce=!1}}}function a(){let G=!1,Ce=null,k=null,re=null,ee=null,$=null,ye=null,Pe=null,ue=null;return{setTest:function(ke){G||(ke?Se(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(ke){Ce!==ke&&!G&&(s.stencilMask(ke),Ce=ke)},setFunc:function(ke,st,lt){(k!==ke||re!==st||ee!==lt)&&(s.stencilFunc(ke,st,lt),k=ke,re=st,ee=lt)},setOp:function(ke,st,lt){($!==ke||ye!==st||Pe!==lt)&&(s.stencilOp(ke,st,lt),$=ke,ye=st,Pe=lt)},setLocked:function(ke){G=ke},setClear:function(ke){ue!==ke&&(s.clearStencil(ke),ue=ke)},reset:function(){G=!1,Ce=null,k=null,re=null,ee=null,$=null,ye=null,Pe=null,ue=null}}}const o=new t,u=new i,f=new a,d=new WeakMap,h=new WeakMap;let g={},_={},m={},y=new WeakMap,M=[],b=null,x=!1,S=null,A=null,R=null,P=null,U=null,L=null,O=null,w=new Pt(0,0,0),I=0,V=!1,B=null,Z=null,me=null,ge=null,W=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,J=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(fe)[1]),Q=J>=1):fe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),Q=J>=2);let ce=null,F={};const ne=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),We=new Jt().fromArray(ne),ze=new Jt().fromArray(Be);function he(G,Ce,k,re){const ee=new Uint8Array(4),$=s.createTexture();s.bindTexture(G,$),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<k;ye++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(Ce+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return $}const Me={};Me[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Se(s.DEPTH_TEST),u.setFunc(Aa),Xt(!1),Vt(Xg),Se(s.CULL_FACE),It(Er);function Se(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Fe(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Je(G,Ce){return m[G]!==Ce?(s.bindFramebuffer(G,Ce),m[G]=Ce,G===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(G,Ce){let k=M,re=!1;if(G){k=y.get(Ce),k===void 0&&(k=[],y.set(Ce,k));const ee=G.textures;if(k.length!==ee.length||k[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ye=ee.length;$<ye;$++)k[$]=s.COLOR_ATTACHMENT0+$;k.length=ee.length,re=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,re=!0);re&&s.drawBuffers(k)}function Lt(G){return b!==G?(s.useProgram(G),b=G,!0):!1}const ft={[bs]:s.FUNC_ADD,[rM]:s.FUNC_SUBTRACT,[sM]:s.FUNC_REVERSE_SUBTRACT};ft[aM]=s.MIN,ft[oM]=s.MAX;const Mt={[lM]:s.ZERO,[uM]:s.ONE,[cM]:s.SRC_COLOR,[Od]:s.SRC_ALPHA,[gM]:s.SRC_ALPHA_SATURATE,[pM]:s.DST_COLOR,[dM]:s.DST_ALPHA,[fM]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[mM]:s.ONE_MINUS_DST_COLOR,[hM]:s.ONE_MINUS_DST_ALPHA,[vM]:s.CONSTANT_COLOR,[_M]:s.ONE_MINUS_CONSTANT_COLOR,[xM]:s.CONSTANT_ALPHA,[yM]:s.ONE_MINUS_CONSTANT_ALPHA};function It(G,Ce,k,re,ee,$,ye,Pe,ue,ke){if(G===Er){x===!0&&(Fe(s.BLEND),x=!1);return}if(x===!1&&(Se(s.BLEND),x=!0),G!==iM){if(G!==S||ke!==V){if((A!==bs||U!==bs)&&(s.blendEquation(s.FUNC_ADD),A=bs,U=bs),ke)switch(G){case Ta:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $g:s.blendFunc(s.ONE,s.ONE);break;case Yg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ut("WebGLState: Invalid blending: ",G);break}else switch(G){case Ta:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $g:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yg:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",G);break}R=null,P=null,L=null,O=null,w.set(0,0,0),I=0,S=G,V=ke}return}ee=ee||Ce,$=$||k,ye=ye||re,(Ce!==A||ee!==U)&&(s.blendEquationSeparate(ft[Ce],ft[ee]),A=Ce,U=ee),(k!==R||re!==P||$!==L||ye!==O)&&(s.blendFuncSeparate(Mt[k],Mt[re],Mt[$],Mt[ye]),R=k,P=re,L=$,O=ye),(Pe.equals(w)===!1||ue!==I)&&(s.blendColor(Pe.r,Pe.g,Pe.b,ue),w.copy(Pe),I=ue),S=G,V=!1}function vt(G,Ce){G.side===Zi?Fe(s.CULL_FACE):Se(s.CULL_FACE);let k=G.side===oi;Ce&&(k=!k),Xt(k),G.blending===Ta&&G.transparent===!1?It(Er):It(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),o.setMask(G.colorWrite);const re=G.stencilWrite;f.setTest(re),re&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),j(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(G){B!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),B=G)}function Vt(G){G!==eM?(Se(s.CULL_FACE),G!==Z&&(G===Xg?s.cullFace(s.BACK):G===tM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),Z=G}function vn(G){G!==me&&(Q&&s.lineWidth(G),me=G)}function j(G,Ce,k){G?(Se(s.POLYGON_OFFSET_FILL),(ge!==Ce||W!==k)&&(ge=Ce,W=k,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,k))):Fe(s.POLYGON_OFFSET_FILL)}function $t(G){G?Se(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function St(G){G===void 0&&(G=s.TEXTURE0+ie-1),ce!==G&&(s.activeTexture(G),ce=G)}function Bt(G,Ce,k){k===void 0&&(ce===null?k=s.TEXTURE0+ie-1:k=ce);let re=F[k];re===void 0&&(re={type:void 0,texture:void 0},F[k]=re),(re.type!==G||re.texture!==Ce)&&(ce!==k&&(s.activeTexture(k),ce=k),s.bindTexture(G,Ce||Me[G]),re.type=G,re.texture=Ce)}function Oe(){const G=F[ce];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function E(){try{s.texSubImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function te(){try{s.texSubImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ee(){try{s.compressedTexSubImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ae(){try{s.texStorage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ie(){try{s.texStorage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function ve(){try{s.texImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function xe(){try{s.texImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ve(G){return _[G]!==void 0?_[G]:s.getParameter(G)}function Ge(G,Ce){_[G]!==Ce&&(s.pixelStorei(G,Ce),_[G]=Ce)}function Le(G){We.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),We.copy(G))}function Re(G){ze.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ze.copy(G))}function rt(G,Ce){let k=h.get(Ce);k===void 0&&(k=new WeakMap,h.set(Ce,k));let re=k.get(G);re===void 0&&(re=s.getUniformBlockIndex(Ce,G.name),k.set(G,re))}function dt(G,Ce){const re=h.get(Ce).get(G);d.get(Ce)!==re&&(s.uniformBlockBinding(Ce,re,G.__bindingPointIndex),d.set(Ce,re))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},ce=null,F={},m={},y=new WeakMap,M=[],b=null,x=!1,S=null,A=null,R=null,P=null,U=null,L=null,O=null,w=new Pt(0,0,0),I=0,V=!1,B=null,Z=null,me=null,ge=null,W=null,We.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:Se,disable:Fe,bindFramebuffer:Je,drawBuffers:Qe,useProgram:Lt,setBlending:It,setMaterial:vt,setFlipSided:Xt,setCullFace:Vt,setLineWidth:vn,setPolygonOffset:j,setScissorTest:$t,activeTexture:St,bindTexture:Bt,unbindTexture:Oe,compressedTexImage2D:Kt,compressedTexImage3D:N,texImage2D:ve,texImage3D:xe,pixelStorei:Ge,getParameter:Ve,updateUBOMapping:rt,uniformBlockBinding:dt,texStorage2D:Ae,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:te,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Le,viewport:Re,reset:Et}}function ZA(s,e,t,i,a,o,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new yt,g=new WeakMap,_=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):Go("canvas")}function x(N,E,te){let _e=1;const Ee=Kt(N);if((Ee.width>te||Ee.height>te)&&(_e=te/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ae=Math.floor(_e*Ee.width),Ie=Math.floor(_e*Ee.height);m===void 0&&(m=b(Ae,Ie));const ve=E?b(Ae,Ie):m;return ve.width=Ae,ve.height=Ie,ve.getContext("2d").drawImage(N,0,0,Ae,Ie),it("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Ae+"x"+Ie+")."),ve}else return"data"in N&&it("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),N;return N}function S(N){return N.generateMipmaps}function A(N){s.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,E,te,_e,Ee,Ae=!1){if(N!==null){if(s[N]!==void 0)return s[N];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ie;_e&&(Ie=e.get("EXT_texture_norm16"),Ie||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===s.RED&&(te===s.FLOAT&&(ve=s.R32F),te===s.HALF_FLOAT&&(ve=s.R16F),te===s.UNSIGNED_BYTE&&(ve=s.R8),te===s.UNSIGNED_SHORT&&Ie&&(ve=Ie.R16_EXT),te===s.SHORT&&Ie&&(ve=Ie.R16_SNORM_EXT)),E===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(ve=s.R8UI),te===s.UNSIGNED_SHORT&&(ve=s.R16UI),te===s.UNSIGNED_INT&&(ve=s.R32UI),te===s.BYTE&&(ve=s.R8I),te===s.SHORT&&(ve=s.R16I),te===s.INT&&(ve=s.R32I)),E===s.RG&&(te===s.FLOAT&&(ve=s.RG32F),te===s.HALF_FLOAT&&(ve=s.RG16F),te===s.UNSIGNED_BYTE&&(ve=s.RG8),te===s.UNSIGNED_SHORT&&Ie&&(ve=Ie.RG16_EXT),te===s.SHORT&&Ie&&(ve=Ie.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(ve=s.RG8UI),te===s.UNSIGNED_SHORT&&(ve=s.RG16UI),te===s.UNSIGNED_INT&&(ve=s.RG32UI),te===s.BYTE&&(ve=s.RG8I),te===s.SHORT&&(ve=s.RG16I),te===s.INT&&(ve=s.RG32I)),E===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),te===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),te===s.UNSIGNED_INT&&(ve=s.RGB32UI),te===s.BYTE&&(ve=s.RGB8I),te===s.SHORT&&(ve=s.RGB16I),te===s.INT&&(ve=s.RGB32I)),E===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),te===s.UNSIGNED_INT&&(ve=s.RGBA32UI),te===s.BYTE&&(ve=s.RGBA8I),te===s.SHORT&&(ve=s.RGBA16I),te===s.INT&&(ve=s.RGBA32I)),E===s.RGB&&(te===s.UNSIGNED_SHORT&&Ie&&(ve=Ie.RGB16_EXT),te===s.SHORT&&Ie&&(ve=Ie.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),E===s.RGBA){const xe=Ae?Yu:Nt.getTransfer(Ee);te===s.FLOAT&&(ve=s.RGBA32F),te===s.HALF_FLOAT&&(ve=s.RGBA16F),te===s.UNSIGNED_BYTE&&(ve=xe===Wt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Ie&&(ve=Ie.RGBA16_EXT),te===s.SHORT&&Ie&&(ve=Ie.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function U(N,E){let te;return N?E===null||E===nr||E===Vo?te=s.DEPTH24_STENCIL8:E===bi?te=s.DEPTH32F_STENCIL8:E===zo&&(te=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===nr||E===Vo?te=s.DEPTH_COMPONENT24:E===bi?te=s.DEPTH_COMPONENT32F:E===zo&&(te=s.DEPTH_COMPONENT16),te}function L(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function O(N){const E=N.target;E.removeEventListener("dispose",O),I(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function w(N){const E=N.target;E.removeEventListener("dispose",w),B(E)}function I(N){const E=i.get(N);if(E.__webglInit===void 0)return;const te=N.source,_e=y.get(te);if(_e){const Ee=_e[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&V(N),Object.keys(_e).length===0&&y.delete(te)}i.remove(N)}function V(N){const E=i.get(N);s.deleteTexture(E.__webglTexture);const te=N.source,_e=y.get(te);delete _e[E.__cacheKey],u.memory.textures--}function B(N){const E=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ee=0;Ee<E.__webglFramebuffer[_e].length;Ee++)s.deleteFramebuffer(E.__webglFramebuffer[_e][Ee]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=N.textures;for(let _e=0,Ee=te.length;_e<Ee;_e++){const Ae=i.get(te[_e]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),u.memory.textures--),i.remove(te[_e])}i.remove(N)}let Z=0;function me(){Z=0}function ge(){return Z}function W(N){Z=N}function ie(){const N=Z;return N>=a.maxTextures&&it("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),Z+=1,N}function Q(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function J(N,E){const te=i.get(N);if(N.isVideoTexture&&Bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){const _e=N.image;if(_e===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(te,N,E);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+E)}function fe(N,E){const te=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){Fe(te,N,E);return}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+E)}function ce(N,E){const te=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){Fe(te,N,E);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+E)}function F(N,E){const te=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&te.__version!==N.version){Je(te,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+E)}const ne={[Xd]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[$d]:s.MIRRORED_REPEAT},Be={[On]:s.NEAREST,[wM]:s.NEAREST_MIPMAP_NEAREST,[Ql]:s.NEAREST_MIPMAP_LINEAR,[jn]:s.LINEAR,[Zf]:s.LINEAR_MIPMAP_NEAREST,[Rs]:s.LINEAR_MIPMAP_LINEAR},We={[RM]:s.NEVER,[IM]:s.ALWAYS,[CM]:s.LESS,[Yh]:s.LEQUAL,[PM]:s.EQUAL,[qh]:s.GEQUAL,[NM]:s.GREATER,[LM]:s.NOTEQUAL};function ze(N,E){if(E.type===bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Zf||E.magFilter===Ql||E.magFilter===Rs||E.minFilter===jn||E.minFilter===Zf||E.minFilter===Ql||E.minFilter===Rs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ne[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Be[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Be[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==Ql&&E.minFilter!==Rs||E.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function he(N,E){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",O));const _e=E.source;let Ee=y.get(_e);Ee===void 0&&(Ee={},y.set(_e,Ee));const Ae=Q(E);if(Ae!==N.__cacheKey){Ee[Ae]===void 0&&(Ee[Ae]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Ee[Ae].usedTimes++;const Ie=Ee[N.__cacheKey];Ie!==void 0&&(Ee[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&V(E)),N.__cacheKey=Ae,N.__webglTexture=Ee[Ae].texture}return te}function Me(N,E,te){return Math.floor(Math.floor(N/te)/E)}function Se(N,E,te,_e){const Ae=N.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,te,_e,E.data);else{Ae.sort((Ge,Le)=>Ge.start-Le.start);let Ie=0;for(let Ge=1;Ge<Ae.length;Ge++){const Le=Ae[Ie],Re=Ae[Ge],rt=Le.start+Le.count,dt=Me(Re.start,E.width,4),Et=Me(Le.start,E.width,4);Re.start<=rt+1&&dt===Et&&Me(Re.start+Re.count-1,E.width,4)===dt?Le.count=Math.max(Le.count,Re.start+Re.count-Le.start):(++Ie,Ae[Ie]=Re)}Ae.length=Ie+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Le=Ae.length;Ge<Le;Ge++){const Re=Ae[Ge],rt=Math.floor(Re.start/4),dt=Math.ceil(Re.count/4),Et=rt%E.width,G=Math.floor(rt/E.width),Ce=dt,k=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),t.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,Et,G,Ce,k,te,_e,E.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve)}}function Fe(N,E,te){let _e=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=s.TEXTURE_3D);const Ee=he(N,E),Ae=E.source;t.bindTexture(_e,N.__webglTexture,s.TEXTURE0+te);const Ie=i.get(Ae);if(Ae.version!==Ie.__version||Ee===!0){if(t.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const k=Nt.getPrimaries(Nt.workingColorSpace),re=E.colorSpace===ns?null:Nt.getPrimaries(E.colorSpace),ee=E.colorSpace===ns||k===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=x(E.image,!1,a.maxTextureSize);xe=Oe(E,xe);const Ve=o.convert(E.format,E.colorSpace),Ge=o.convert(E.type);let Le=P(E.internalFormat,Ve,Ge,E.normalized,E.colorSpace,E.isVideoTexture);ze(_e,E);let Re;const rt=E.mipmaps,dt=E.isVideoTexture!==!0,Et=Ie.__version===void 0||Ee===!0,G=Ae.dataReady,Ce=L(E,xe);if(E.isDepthTexture)Le=U(E.format===Cs,E.type),Et&&(dt?t.texStorage2D(s.TEXTURE_2D,1,Le,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Le,xe.width,xe.height,0,Ve,Ge,null));else if(E.isDataTexture)if(rt.length>0){dt&&Et&&t.texStorage2D(s.TEXTURE_2D,Ce,Le,rt[0].width,rt[0].height);for(let k=0,re=rt.length;k<re;k++)Re=rt[k],dt?G&&t.texSubImage2D(s.TEXTURE_2D,k,0,0,Re.width,Re.height,Ve,Ge,Re.data):t.texImage2D(s.TEXTURE_2D,k,Le,Re.width,Re.height,0,Ve,Ge,Re.data);E.generateMipmaps=!1}else dt?(Et&&t.texStorage2D(s.TEXTURE_2D,Ce,Le,xe.width,xe.height),G&&Se(E,xe,Ve,Ge)):t.texImage2D(s.TEXTURE_2D,0,Le,xe.width,xe.height,0,Ve,Ge,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){dt&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Le,rt[0].width,rt[0].height,xe.depth);for(let k=0,re=rt.length;k<re;k++)if(Re=rt[k],E.format!==Ai)if(Ve!==null)if(dt){if(G)if(E.layerUpdates.size>0){const ee=X0(Re.width,Re.height,E.format,E.type);for(const $ of E.layerUpdates){const ye=Re.data.subarray($*ee/Re.data.BYTES_PER_ELEMENT,($+1)*ee/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,$,Re.width,Re.height,1,Ve,ye)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,Re.width,Re.height,xe.depth,Ve,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,Le,Re.width,Re.height,xe.depth,0,Re.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,Re.width,Re.height,xe.depth,Ve,Ge,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,k,Le,Re.width,Re.height,xe.depth,0,Ve,Ge,Re.data)}else{dt&&Et&&t.texStorage2D(s.TEXTURE_2D,Ce,Le,rt[0].width,rt[0].height);for(let k=0,re=rt.length;k<re;k++)Re=rt[k],E.format!==Ai?Ve!==null?dt?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,Re.width,Re.height,Ve,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,k,Le,Re.width,Re.height,0,Re.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?G&&t.texSubImage2D(s.TEXTURE_2D,k,0,0,Re.width,Re.height,Ve,Ge,Re.data):t.texImage2D(s.TEXTURE_2D,k,Le,Re.width,Re.height,0,Ve,Ge,Re.data)}else if(E.isDataArrayTexture)if(dt){if(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Le,xe.width,xe.height,xe.depth),G)if(E.layerUpdates.size>0){const k=X0(xe.width,xe.height,E.format,E.type);for(const re of E.layerUpdates){const ee=xe.data.subarray(re*k/xe.data.BYTES_PER_ELEMENT,(re+1)*k/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,xe.width,xe.height,1,Ve,Ge,ee)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ve,Ge,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,xe.width,xe.height,xe.depth,0,Ve,Ge,xe.data);else if(E.isData3DTexture)dt?(Et&&t.texStorage3D(s.TEXTURE_3D,Ce,Le,xe.width,xe.height,xe.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ve,Ge,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,xe.width,xe.height,xe.depth,0,Ve,Ge,xe.data);else if(E.isFramebufferTexture){if(Et)if(dt)t.texStorage2D(s.TEXTURE_2D,Ce,Le,xe.width,xe.height);else{let k=xe.width,re=xe.height;for(let ee=0;ee<Ce;ee++)t.texImage2D(s.TEXTURE_2D,ee,Le,k,re,0,Ve,Ge,null),k>>=1,re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const k=s.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),xe.parentNode!==k){k.appendChild(xe),_.add(E),k.onpaint=Pe=>{const ue=Pe.changedElements;for(const ke of _)ue.includes(ke.image)&&(ke.needsUpdate=!0)},k.requestPaint();return}const re=0,ee=s.RGBA,$=s.RGBA,ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,re,ee,$,ye,xe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(rt.length>0){if(dt&&Et){const k=Kt(rt[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Le,k.width,k.height)}for(let k=0,re=rt.length;k<re;k++)Re=rt[k],dt?G&&t.texSubImage2D(s.TEXTURE_2D,k,0,0,Ve,Ge,Re):t.texImage2D(s.TEXTURE_2D,k,Le,Ve,Ge,Re);E.generateMipmaps=!1}else if(dt){if(Et){const k=Kt(xe);t.texStorage2D(s.TEXTURE_2D,Ce,Le,k.width,k.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Ge,xe)}else t.texImage2D(s.TEXTURE_2D,0,Le,Ve,Ge,xe);S(E)&&A(_e),Ie.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Je(N,E,te){if(E.image.length!==6)return;const _e=he(N,E),Ee=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+te);const Ae=i.get(Ee);if(Ee.version!==Ae.__version||_e===!0){t.activeTexture(s.TEXTURE0+te);const Ie=Nt.getPrimaries(Nt.workingColorSpace),ve=E.colorSpace===ns?null:Nt.getPrimaries(E.colorSpace),xe=E.colorSpace===ns||Ie===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let $=0;$<6;$++)!Ve&&!Ge?Le[$]=x(E.image[$],!0,a.maxCubemapSize):Le[$]=Ge?E.image[$].image:E.image[$],Le[$]=Oe(E,Le[$]);const Re=Le[0],rt=o.convert(E.format,E.colorSpace),dt=o.convert(E.type),Et=P(E.internalFormat,rt,dt,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Ce=Ae.__version===void 0||_e===!0,k=Ee.dataReady;let re=L(E,Re);ze(s.TEXTURE_CUBE_MAP,E);let ee;if(Ve){G&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Et,Re.width,Re.height);for(let $=0;$<6;$++){ee=Le[$].mipmaps;for(let ye=0;ye<ee.length;ye++){const Pe=ee[ye];E.format!==Ai?rt!==null?G?k&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Pe.width,Pe.height,rt,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Et,Pe.width,Pe.height,0,Pe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Pe.width,Pe.height,rt,dt,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Et,Pe.width,Pe.height,0,rt,dt,Pe.data)}}}else{if(ee=E.mipmaps,G&&Ce){ee.length>0&&re++;const $=Kt(Le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Et,$.width,$.height)}for(let $=0;$<6;$++)if(Ge){G?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le[$].width,Le[$].height,rt,dt,Le[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Et,Le[$].width,Le[$].height,0,rt,dt,Le[$].data);for(let ye=0;ye<ee.length;ye++){const ue=ee[ye].image[$].image;G?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,ue.width,ue.height,rt,dt,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Et,ue.width,ue.height,0,rt,dt,ue.data)}}else{G?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,rt,dt,Le[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Et,rt,dt,Le[$]);for(let ye=0;ye<ee.length;ye++){const Pe=ee[ye];G?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,rt,dt,Pe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Et,rt,dt,Pe.image[$])}}}S(E)&&A(s.TEXTURE_CUBE_MAP),Ae.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Qe(N,E,te,_e,Ee,Ae){const Ie=o.convert(te.format,te.colorSpace),ve=o.convert(te.type),xe=P(te.internalFormat,Ie,ve,te.normalized,te.colorSpace),Ve=i.get(E),Ge=i.get(te);if(Ge.__renderTarget=E,!Ve.__hasExternalTextures){const Le=Math.max(1,E.width>>Ae),Re=Math.max(1,E.height>>Ae);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?t.texImage3D(Ee,Ae,xe,Le,Re,E.depth,0,Ie,ve,null):t.texImage2D(Ee,Ae,xe,Le,Re,0,Ie,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Ee,Ge.__webglTexture,0,$t(E)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Ee,Ge.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(N,E,te){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const _e=E.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,Ae=U(E.stencilBuffer,Ee),Ie=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(E),Ae,E.width,E.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(E),Ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,N)}else{const _e=E.textures;for(let Ee=0;Ee<_e.length;Ee++){const Ae=_e[Ee],Ie=o.convert(Ae.format,Ae.colorSpace),ve=o.convert(Ae.type),xe=P(Ae.internalFormat,Ie,ve,Ae.normalized,Ae.colorSpace);St(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(E),xe,E.width,E.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(E),xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(N,E,te){const _e=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=i.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),Ee.__webglTexture===void 0){Ee.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),ze(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ve=o.convert(E.depthTexture.format),Ge=o.convert(E.depthTexture.type);let Le;E.depthTexture.format===Ar?Le=s.DEPTH_COMPONENT24:E.depthTexture.format===Cs&&(Le=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Le,E.width,E.height,0,Ve,Ge,null)}}else J(E.depthTexture,0);const Ae=Ee.__webglTexture,Ie=$t(E),ve=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,xe=E.depthTexture.format===Cs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ar)St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ve,Ae,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ve,Ae,0);else if(E.depthTexture.format===Cs)St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ve,Ae,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ve,Ae,0);else throw new Error("Unknown depthTexture format")}function Mt(N){const E=i.get(N),te=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const _e=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=_e}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(te)for(let _e=0;_e<6;_e++)ft(E.__webglFramebuffer[_e],N,_e);else{const _e=N.texture.mipmaps;_e&&_e.length>0?ft(E.__webglFramebuffer[0],N,0):ft(E.__webglFramebuffer,N,0)}else if(te){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=s.createRenderbuffer(),Lt(E.__webglDepthbuffer[_e],N,!1);else{const Ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,Ae)}}else{const _e=N.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Lt(E.__webglDepthbuffer,N,!1);else{const Ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,Ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(N,E,te){const _e=i.get(N);E!==void 0&&Qe(_e.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Mt(N)}function vt(N){const E=N.texture,te=i.get(N),_e=i.get(E);N.addEventListener("dispose",w);const Ee=N.textures,Ae=N.isWebGLCubeRenderTarget===!0,Ie=Ee.length>1;if(Ie||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=E.version,u.memory.textures++),Ae){te.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[ve]=[];for(let xe=0;xe<E.mipmaps.length;xe++)te.__webglFramebuffer[ve][xe]=s.createFramebuffer()}else te.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)te.__webglFramebuffer[ve]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let ve=0,xe=Ee.length;ve<xe;ve++){const Ve=i.get(Ee[ve]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&St(N)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ve=0;ve<Ee.length;ve++){const xe=Ee[ve];te.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const Ve=o.convert(xe.format,xe.colorSpace),Ge=o.convert(xe.type),Le=P(xe.internalFormat,Ve,Ge,xe.normalized,xe.colorSpace,N.isXRRenderTarget===!0),Re=$t(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Le,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,te.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(te.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),ze(s.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Qe(te.__webglFramebuffer[ve][xe],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else Qe(te.__webglFramebuffer[ve],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);S(E)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ve=0,xe=Ee.length;ve<xe;ve++){const Ve=Ee[ve],Ge=i.get(Ve);let Le=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ge.__webglTexture),ze(Le,Ve),Qe(te.__webglFramebuffer,N,Ve,s.COLOR_ATTACHMENT0+ve,Le,0),S(Ve)&&A(Le)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,_e.__webglTexture),ze(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Qe(te.__webglFramebuffer[xe],N,E,s.COLOR_ATTACHMENT0,ve,xe);else Qe(te.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,ve,0);S(E)&&A(ve),t.unbindTexture()}N.depthBuffer&&Mt(N)}function Xt(N){const E=N.textures;for(let te=0,_e=E.length;te<_e;te++){const Ee=E[te];if(S(Ee)){const Ae=R(N),Ie=i.get(Ee).__webglTexture;t.bindTexture(Ae,Ie),A(Ae),t.unbindTexture()}}}const Vt=[],vn=[];function j(N){if(N.samples>0){if(St(N)===!1){const E=N.textures,te=N.width,_e=N.height;let Ee=s.COLOR_BUFFER_BIT;const Ae=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=i.get(N),ve=E.length>1;if(ve)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const xe=N.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ve]);const Ge=i.get(E[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,te,_e,0,0,te,_e,Ee,s.NEAREST),d===!0&&(Vt.length=0,vn.length=0,Vt.push(s.COLOR_ATTACHMENT0+Ve),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Vt.push(Ae),vn.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ve]);const Ge=i.get(E[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function $t(N){return Math.min(a.maxSamples,N.samples)}function St(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(N){const E=u.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Oe(N,E){const te=N.colorSpace,_e=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==$u&&te!==ns&&(Nt.getTransfer(te)===Wt?(_e!==Ai||Ee!==gi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",te)),E}function Kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=me,this.getTextureUnits=ge,this.setTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=fe,this.setTexture3D=ce,this.setTextureCube=F,this.rebindTextures=It,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JA(s,e){function t(i,a=ns){let o;const u=Nt.getTransfer(a);if(i===gi)return s.UNSIGNED_BYTE;if(i===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Qv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kv)return s.BYTE;if(i===Zv)return s.SHORT;if(i===zo)return s.UNSIGNED_SHORT;if(i===Vh)return s.INT;if(i===nr)return s.UNSIGNED_INT;if(i===bi)return s.FLOAT;if(i===br)return s.HALF_FLOAT;if(i===e_)return s.ALPHA;if(i===t_)return s.RGB;if(i===Ai)return s.RGBA;if(i===Ar)return s.DEPTH_COMPONENT;if(i===Cs)return s.DEPTH_STENCIL;if(i===Wh)return s.RED;if(i===jh)return s.RED_INTEGER;if(i===Ns)return s.RG;if(i===Xh)return s.RG_INTEGER;if(i===$h)return s.RGBA_INTEGER;if(i===Ou||i===ku||i===Bu||i===zu)if(u===Wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ou)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ku)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ou)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ku)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yd||i===qd||i===Kd||i===Zd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Yd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jd||i===Qd||i===eh||i===th||i===nh||i===Wu||i===ih)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Jd||i===Qd)return u===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===eh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===th)return o.COMPRESSED_R11_EAC;if(i===nh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Wu)return o.COMPRESSED_RG11_EAC;if(i===ih)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rh||i===sh||i===ah||i===oh||i===lh||i===uh||i===ch||i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===vh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===rh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ah)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return u===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_h||i===xh||i===yh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===_h)return u===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===Mh||i===ju||i===Eh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Sh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ju)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eR=`
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

}`;class tR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new h_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ir({vertexShader:QA,fragmentShader:eR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nR extends Is{constructor(e,t){super();const i=this;let a=null,o=1,u=null,f="local-floor",d=1,h=null,g=null,_=null,m=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",x=new tR,S={},A=t.getContextAttributes();let R=null,P=null;const U=[],L=[],O=new yt;let w=null;const I=new ai;I.viewport=new Jt;const V=new ai;V.viewport=new Jt;const B=[I,V],Z=new n1;let me=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Me=U[he];return Me===void 0&&(Me=new rd,U[he]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(he){let Me=U[he];return Me===void 0&&(Me=new rd,U[he]=Me),Me.getGripSpace()},this.getHand=function(he){let Me=U[he];return Me===void 0&&(Me=new rd,U[he]=Me),Me.getHandSpace()};function W(he){const Me=L.indexOf(he.inputSource);if(Me===-1)return;const Se=U[Me];Se!==void 0&&(Se.update(he.inputSource,he.frame,h||u),Se.dispatchEvent({type:he.type,data:he.inputSource}))}function ie(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",Q);for(let he=0;he<U.length;he++){const Me=L[he];Me!==null&&(L[he]=null,U[he].disconnect(Me))}me=null,ge=null,x.reset();for(const he in S)delete S[he];e.setRenderTarget(R),y=null,m=null,_=null,a=null,P=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){o=he,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){f=he,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(he){h=he},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(he){if(a=he,a!==null){if(R=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",Q),A.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,Je=null;A.depth&&(Je=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?Cs:Ar,Fe=A.stencil?Vo:nr);const Qe={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:o};_=this.getBinding(),m=_.createProjectionLayer(Qe),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new er(m.textureWidth,m.textureHeight,{format:Ai,type:gi,depthTexture:new Pa(m.textureWidth,m.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new er(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(f),ze.setContext(a),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(he){for(let Me=0;Me<he.removed.length;Me++){const Se=he.removed[Me],Fe=L.indexOf(Se);Fe>=0&&(L[Fe]=null,U[Fe].disconnect(Se))}for(let Me=0;Me<he.added.length;Me++){const Se=he.added[Me];let Fe=L.indexOf(Se);if(Fe===-1){for(let Qe=0;Qe<U.length;Qe++)if(Qe>=L.length){L.push(Se),Fe=Qe;break}else if(L[Qe]===null){L[Qe]=Se,Fe=Qe;break}if(Fe===-1)break}const Je=U[Fe];Je&&Je.connect(Se)}}const J=new Y,fe=new Y;function ce(he,Me,Se){J.setFromMatrixPosition(Me.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const Fe=J.distanceTo(fe),Je=Me.projectionMatrix.elements,Qe=Se.projectionMatrix.elements,Lt=Je[14]/(Je[10]-1),ft=Je[14]/(Je[10]+1),Mt=(Je[9]+1)/Je[5],It=(Je[9]-1)/Je[5],vt=(Je[8]-1)/Je[0],Xt=(Qe[8]+1)/Qe[0],Vt=Lt*vt,vn=Lt*Xt,j=Fe/(-vt+Xt),$t=j*-vt;if(Me.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX($t),he.translateZ(j),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Je[10]===-1)he.projectionMatrix.copy(Me.projectionMatrix),he.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const St=Lt+j,Bt=ft+j,Oe=Vt-$t,Kt=vn+(Fe-$t),N=Mt*ft/Bt*St,E=It*ft/Bt*St;he.projectionMatrix.makePerspective(Oe,Kt,N,E,St,Bt),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function F(he,Me){Me===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Me.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(a===null)return;let Me=he.near,Se=he.far;x.texture!==null&&(x.depthNear>0&&(Me=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),Z.near=V.near=I.near=Me,Z.far=V.far=I.far=Se,(me!==Z.near||ge!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),me=Z.near,ge=Z.far),Z.layers.mask=he.layers.mask|6,I.layers.mask=Z.layers.mask&-5,V.layers.mask=Z.layers.mask&-3;const Fe=he.parent,Je=Z.cameras;F(Z,Fe);for(let Qe=0;Qe<Je.length;Qe++)F(Je[Qe],Fe);Je.length===2?ce(Z,I,V):Z.projectionMatrix.copy(I.projectionMatrix),ne(he,Z,Fe)};function ne(he,Me,Se){Se===null?he.matrix.copy(Me.matrixWorld):(he.matrix.copy(Se.matrixWorld),he.matrix.invert(),he.matrix.multiply(Me.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Me.projectionMatrix),he.projectionMatrixInverse.copy(Me.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Ca*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(m===null&&y===null))return d},this.setFoveation=function(he){d=he,m!==null&&(m.fixedFoveation=he),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=he)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(he){return S[he]};let Be=null;function We(he,Me){if(g=Me.getViewerPose(h||u),M=Me,g!==null){const Se=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Fe=!1;Se.length!==Z.cameras.length&&(Z.cameras.length=0,Fe=!0);for(let ft=0;ft<Se.length;ft++){const Mt=Se[ft];let It=null;if(y!==null)It=y.getViewport(Mt);else{const Xt=_.getViewSubImage(m,Mt);It=Xt.viewport,ft===0&&(e.setRenderTargetTextures(P,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(P))}let vt=B[ft];vt===void 0&&(vt=new ai,vt.layers.enable(ft),vt.viewport=new Jt,B[ft]=vt),vt.matrix.fromArray(Mt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Mt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(It.x,It.y,It.width,It.height),ft===0&&(Z.matrix.copy(vt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Fe===!0&&Z.cameras.push(vt)}const Je=a.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){_=i.getBinding();const ft=_.getDepthInformation(Se[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,a.renderState)}if(Je&&Je.includes("camera-access")&&b){e.state.unbindTexture(),_=i.getBinding();for(let ft=0;ft<Se.length;ft++){const Mt=Se[ft].camera;if(Mt){let It=S[Mt];It||(It=new h_,S[Mt]=It);const vt=_.getCameraImage(Mt);It.sourceTexture=vt}}}}for(let Se=0;Se<U.length;Se++){const Fe=L[Se],Je=U[Se];Fe!==null&&Je!==void 0&&Je.update(Fe,Me,h||u)}Be&&Be(he,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),M=null}const ze=new __;ze.setAnimationLoop(We),this.setAnimationLoop=function(he){Be=he},this.dispose=function(){}}}const iR=new bt,T_=new xt;T_.set(-1,0,0,0,1,0,0,0,1);function rR(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,p_(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function a(x,S,A,R,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(x,S):S.isMeshLambertMaterial?(o(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(x,S),_(x,S)):S.isMeshPhongMaterial?(o(x,S),g(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(x,S),m(x,S),S.isMeshPhysicalMaterial&&y(x,S,P)):S.isMeshMatcapMaterial?(o(x,S),M(x,S)):S.isMeshDepthMaterial?o(x,S):S.isMeshDistanceMaterial?(o(x,S),b(x,S)):S.isMeshNormalMaterial?o(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?d(x,S,A,R):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===oi&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===oi&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const A=e.get(S),R=A.envMap,P=A.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(iR.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(T_),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,A,R){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*A,x.scale.value=R*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function m(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,A){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===oi&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function b(x,S){const A=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function sR(s,e,t,i){let a={},o={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,R){const P=R.program;i.uniformBlockBinding(A,P)}function h(A,R){let P=a[A.id];P===void 0&&(M(A),P=g(A),a[A.id]=P,A.addEventListener("dispose",x));const U=R.program;i.updateUBOMapping(A,U);const L=e.render.frame;o[A.id]!==L&&(m(A),o[A.id]=L)}function g(A){const R=_();A.__bindingPointIndex=R;const P=s.createBuffer(),U=A.__size,L=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function _(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const R=a[A.id],P=A.uniforms,U=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let L=0,O=P.length;L<O;L++){const w=Array.isArray(P[L])?P[L]:[P[L]];for(let I=0,V=w.length;I<V;I++){const B=w[I];if(y(B,L,I,U)===!0){const Z=B.__offset,me=Array.isArray(B.value)?B.value:[B.value];let ge=0;for(let W=0;W<me.length;W++){const ie=me[W],Q=b(ie);typeof ie=="number"||typeof ie=="boolean"?(B.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,Z+ge,B.__data)):ie.isMatrix3?(B.__data[0]=ie.elements[0],B.__data[1]=ie.elements[1],B.__data[2]=ie.elements[2],B.__data[3]=0,B.__data[4]=ie.elements[3],B.__data[5]=ie.elements[4],B.__data[6]=ie.elements[5],B.__data[7]=0,B.__data[8]=ie.elements[6],B.__data[9]=ie.elements[7],B.__data[10]=ie.elements[8],B.__data[11]=0):ArrayBuffer.isView(ie)?B.__data.set(new ie.constructor(ie.buffer,ie.byteOffset,B.__data.length)):(ie.toArray(B.__data,ge),ge+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(A,R,P,U){const L=A.value,O=R+"_"+P;if(U[O]===void 0)return typeof L=="number"||typeof L=="boolean"?U[O]=L:ArrayBuffer.isView(L)?U[O]=L.slice():U[O]=L.clone(),!0;{const w=U[O];if(typeof L=="number"||typeof L=="boolean"){if(w!==L)return U[O]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(w.equals(L)===!1)return w.copy(L),!0}}return!1}function M(A){const R=A.uniforms;let P=0;const U=16;for(let O=0,w=R.length;O<w;O++){const I=Array.isArray(R[O])?R[O]:[R[O]];for(let V=0,B=I.length;V<B;V++){const Z=I[V],me=Array.isArray(Z.value)?Z.value:[Z.value];for(let ge=0,W=me.length;ge<W;ge++){const ie=me[ge],Q=b(ie),J=P%U,fe=J%Q.boundary,ce=J+fe;P+=fe,ce!==0&&U-ce<Q.storage&&(P+=U-ce),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=Q.storage}}}const L=P%U;return L>0&&(P+=U-L),A.__size=P,A.__cache={},this}function b(A){const R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):it("WebGLRenderer: Unsupported uniform value type.",A),R}function x(A){const R=A.target;R.removeEventListener("dispose",x);const P=u.indexOf(R.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete o[R.id]}function S(){for(const A in a)s.deleteBuffer(a[A]);u=[],a={},o={}}return{bind:d,update:h,dispose:S}}const aR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function oR(){return qi===null&&(qi=new ep(aR,16,16,Ns,br),qi.name="DFG_LUT",qi.minFilter=jn,qi.magFilter=jn,qi.wrapS=yr,qi.wrapT=yr,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class lR{constructor(e={}){const{canvas:t=FM(),context:i=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:y=gi}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=u;const b=y,x=new Set([$h,Xh,jh]),S=new Set([gi,nr,zo,Vo,Hh,Gh]),A=new Uint32Array(4),R=new Int32Array(4),P=new Y;let U=null,L=null;const O=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let B=!1,Z=null;this._outputColorSpace=si;let me=0,ge=0,W=null,ie=-1,Q=null;const J=new Jt,fe=new Jt;let ce=null;const F=new Pt(0);let ne=0,Be=t.width,We=t.height,ze=1,he=null,Me=null;const Se=new Jt(0,0,Be,We),Fe=new Jt(0,0,Be,We);let Je=!1;const Qe=new tp;let Lt=!1,ft=!1;const Mt=new bt,It=new Y,vt=new Jt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function vn(){return W===null?ze:1}let j=i;function $t(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bh}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),j===null){const q="webgl2";if(j=$t(q,C),j===null)throw $t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ut("WebGLRenderer: "+C.message),C}let St,Bt,Oe,Kt,N,E,te,_e,Ee,Ae,Ie,ve,xe,Ve,Ge,Le,Re,rt,dt,Et,G,Ce,k;function re(){St=new ob(j),St.init(),G=new JA(j,St),Bt=new QT(j,St,e,G),Oe=new KA(j,St),Bt.reversedDepthBuffer&&m&&Oe.buffers.depth.setReversed(!0),Kt=new cb(j),N=new FA,E=new ZA(j,St,Oe,N,Bt,G,Kt),te=new ab(V),_e=new p1(j),Ce=new ZT(j,_e),Ee=new lb(j,_e,Kt,Ce),Ae=new db(j,Ee,_e,Ce,Kt),rt=new fb(j,Bt,E),Ge=new eb(N),Ie=new UA(V,te,St,Bt,Ce,Ge),ve=new rR(V,N),xe=new kA,Ve=new WA(St),Re=new KT(V,te,Oe,Ae,M,d),Le=new qA(V,Ae,Bt),k=new sR(j,Kt,Bt,Oe),dt=new JT(j,St,Kt),Et=new ub(j,St,Kt),Kt.programs=Ie.programs,V.capabilities=Bt,V.extensions=St,V.properties=N,V.renderLists=xe,V.shadowMap=Le,V.state=Oe,V.info=Kt}re(),b!==gi&&(I=new pb(b,t.width,t.height,a,o));const ee=new nR(V,j);this.xr=ee,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=St.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=St.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(C){C!==void 0&&(ze=C,this.setSize(Be,We,!1))},this.getSize=function(C){return C.set(Be,We)},this.setSize=function(C,q,de=!0){if(ee.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=C,We=q,t.width=Math.floor(C*ze),t.height=Math.floor(q*ze),de===!0&&(t.style.width=C+"px",t.style.height=q+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Be*ze,We*ze).floor()},this.setDrawingBufferSize=function(C,q,de){Be=C,We=q,ze=de,t.width=Math.floor(C*de),t.height=Math.floor(q*de),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(b===gi){ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(Se)},this.setViewport=function(C,q,de,oe){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,q,de,oe),Oe.viewport(J.copy(Se).multiplyScalar(ze).round())},this.getScissor=function(C){return C.copy(Fe)},this.setScissor=function(C,q,de,oe){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,q,de,oe),Oe.scissor(fe.copy(Fe).multiplyScalar(ze).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(C){Oe.setScissorTest(Je=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,de=!0){let oe=0;if(C){let ae=!1;if(W!==null){const Ue=W.texture.format;ae=x.has(Ue)}if(ae){const Ue=W.texture.type,$e=S.has(Ue),De=Re.getClearColor(),Ke=Re.getClearAlpha(),nt=De.r,mt=De.g,gt=De.b;$e?(A[0]=nt,A[1]=mt,A[2]=gt,A[3]=Ke,j.clearBufferuiv(j.COLOR,0,A)):(R[0]=nt,R[1]=mt,R[2]=gt,R[3]=Ke,j.clearBufferiv(j.COLOR,0,R))}else oe|=j.COLOR_BUFFER_BIT}q&&(oe|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&j.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Z=C},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Re.dispose(),xe.dispose(),Ve.dispose(),N.dispose(),te.dispose(),Ae.dispose(),Ce.dispose(),k.dispose(),Ie.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",_t),ee.removeEventListener("sessionend",un),Sn.stop()};function $(C){C.preventDefault(),qu("WebGLRenderer: Context Lost."),B=!0}function ye(){qu("WebGLRenderer: Context Restored."),B=!1;const C=Kt.autoReset,q=Le.enabled,de=Le.autoUpdate,oe=Le.needsUpdate,ae=Le.type;re(),Kt.autoReset=C,Le.enabled=q,Le.autoUpdate=de,Le.needsUpdate=oe,Le.type=ae}function Pe(C){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const q=C.target;q.removeEventListener("dispose",ue),ke(q)}function ke(C){st(C),N.remove(C)}function st(C){const q=N.get(C).programs;q!==void 0&&(q.forEach(function(de){Ie.releaseProgram(de)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,de,oe,ae,Ue){q===null&&(q=Xt);const $e=ae.isMesh&&ae.matrixWorld.determinant()<0,De=Us(C,q,de,oe,ae);Oe.setMaterial(oe,$e);let Ke=de.index,nt=1;if(oe.wireframe===!0){if(Ke=Ee.getWireframeAttribute(de),Ke===void 0)return;nt=2}const mt=de.drawRange,gt=de.attributes.position;let et=mt.start*nt,Dt=(mt.start+mt.count)*nt;Ue!==null&&(et=Math.max(et,Ue.start*nt),Dt=Math.min(Dt,(Ue.start+Ue.count)*nt)),Ke!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ke.count)):gt!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,gt.count));const en=Dt-et;if(en<0||en===1/0)return;Ce.setup(ae,oe,De,de,Ke);let an,Ht=dt;if(Ke!==null&&(an=_e.get(Ke),Ht=Et,Ht.setIndex(an)),ae.isMesh)oe.wireframe===!0?(Oe.setLineWidth(oe.wireframeLinewidth*vn()),Ht.setMode(j.LINES)):Ht.setMode(j.TRIANGLES);else if(ae.isLine){let _n=oe.linewidth;_n===void 0&&(_n=1),Oe.setLineWidth(_n*vn()),ae.isLineSegments?Ht.setMode(j.LINES):ae.isLineLoop?Ht.setMode(j.LINE_LOOP):Ht.setMode(j.LINE_STRIP)}else ae.isPoints?Ht.setMode(j.POINTS):ae.isSprite&&Ht.setMode(j.TRIANGLES);if(ae.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const _n=ae._multiDrawStarts,je=ae._multiDrawCounts,Dn=ae._multiDrawCount,Tt=Ke?_e.get(Ke).bytesPerElement:1,Zn=N.get(oe).currentProgram.getUniforms();for(let Jn=0;Jn<Dn;Jn++)Zn.setValue(j,"_gl_DrawID",Jn),Ht.render(_n[Jn]/Tt,je[Jn])}else if(ae.isInstancedMesh)Ht.renderInstances(et,en,ae.count);else if(de.isInstancedBufferGeometry){const _n=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,je=Math.min(de.instanceCount,_n);Ht.renderInstances(et,en,je)}else Ht.render(et,en)};function lt(C,q,de){C.transparent===!0&&C.side===Zi&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,Ft(C,q,de),C.side=rs,C.needsUpdate=!0,Ft(C,q,de),C.side=Zi):Ft(C,q,de)}this.compile=function(C,q,de=null){de===null&&(de=C),L=Ve.get(de),L.init(q),w.push(L),de.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),C!==de&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const oe=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ue=ae.material;if(Ue)if(Array.isArray(Ue))for(let $e=0;$e<Ue.length;$e++){const De=Ue[$e];lt(De,de,ae),oe.add(De)}else lt(Ue,de,ae),oe.add(Ue)}),L=w.pop(),oe},this.compileAsync=function(C,q,de=null){const oe=this.compile(C,q,de);return new Promise(ae=>{function Ue(){if(oe.forEach(function($e){N.get($e).currentProgram.isReady()&&oe.delete($e)}),oe.size===0){ae(C);return}setTimeout(Ue,10)}St.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let pt=null;function ct(C){pt&&pt(C)}function _t(){Sn.stop()}function un(){Sn.start()}const Sn=new __;Sn.setAnimationLoop(ct),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(C){pt=C,ee.setAnimationLoop(C),C===null?Sn.stop():Sn.start()},ee.addEventListener("sessionstart",_t),ee.addEventListener("sessionend",un),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Z!==null&&Z.renderStart(C,q);const de=ee.enabled===!0&&ee.isPresenting===!0,oe=I!==null&&(W===null||de)&&I.begin(V,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(q),q=ee.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,q,W),L=Ve.get(C,w.length),L.init(q),L.state.textureUnits=E.getTextureUnits(),w.push(L),Mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qe.setFromProjectionMatrix(Mt,Ji,q.reversedDepth),ft=this.localClippingEnabled,Lt=Ge.init(this.clippingPlanes,ft),U=xe.get(C,O.length),U.init(),O.push(U),ee.enabled===!0&&ee.isPresenting===!0){const $e=V.xr.getDepthSensingMesh();$e!==null&&Ut($e,q,-1/0,V.sortObjects)}Ut(C,q,0,V.sortObjects),U.finish(),V.sortObjects===!0&&U.sort(he,Me),Vt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Vt&&Re.addToRenderList(U,C),this.info.render.frame++,Lt===!0&&Ge.beginShadows();const ae=L.state.shadowsArray;if(Le.render(ae,C,q),Lt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&I.hasRenderPass())===!1){const $e=U.opaque,De=U.transmissive;if(L.setupLights(),q.isArrayCamera){const Ke=q.cameras;if(De.length>0)for(let nt=0,mt=Ke.length;nt<mt;nt++){const gt=Ke[nt];In($e,De,C,gt)}Vt&&Re.render(C);for(let nt=0,mt=Ke.length;nt<mt;nt++){const gt=Ke[nt];Qt(U,C,gt,gt.viewport)}}else De.length>0&&In($e,De,C,q),Vt&&Re.render(C),Qt(U,C,q)}W!==null&&ge===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),oe&&I.end(V),C.isScene===!0&&C.onAfterRender(V,C,q),Ce.resetDefaultState(),ie=-1,Q=null,w.pop(),w.length>0?(L=w[w.length-1],E.setTextureUnits(L.state.textureUnits),Lt===!0&&Ge.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?U=O[O.length-1]:U=null,Z!==null&&Z.renderEnd()};function Ut(C,q,de,oe){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Qe.intersectsSprite(C)){oe&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const $e=Ae.update(C),De=C.material;De.visible&&U.push(C,$e,De,de,vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Qe.intersectsObject(C))){const $e=Ae.update(C),De=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),vt.copy(C.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),vt.copy($e.boundingSphere.center)),vt.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(De)){const Ke=$e.groups;for(let nt=0,mt=Ke.length;nt<mt;nt++){const gt=Ke[nt],et=De[gt.materialIndex];et&&et.visible&&U.push(C,$e,et,de,vt.z,gt)}}else De.visible&&U.push(C,$e,De,de,vt.z,null)}}const Ue=C.children;for(let $e=0,De=Ue.length;$e<De;$e++)Ut(Ue[$e],q,de,oe)}function Qt(C,q,de,oe){const{opaque:ae,transmissive:Ue,transparent:$e}=C;L.setupLightsView(de),Lt===!0&&Ge.setGlobalState(V.clippingPlanes,de),oe&&Oe.viewport(J.copy(oe)),ae.length>0&&Yt(ae,q,de),Ue.length>0&&Yt(Ue,q,de),$e.length>0&&Yt($e,q,de),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function In(C,q,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const et=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new er(1,1,{generateMipmaps:!0,type:et?br:gi,minFilter:Rs,samples:Math.max(4,Bt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[oe.id],$e=oe.viewport||J;Ue.setSize($e.z*V.transmissionResolutionScale,$e.w*V.transmissionResolutionScale);const De=V.getRenderTarget(),Ke=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(Ue),V.getClearColor(F),ne=V.getClearAlpha(),ne<1&&V.setClearColor(16777215,.5),V.clear(),Vt&&Re.render(de);const mt=V.toneMapping;V.toneMapping=Qi;const gt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),Lt===!0&&Ge.setGlobalState(V.clippingPlanes,oe),Yt(C,de,oe),E.updateMultisampleRenderTarget(Ue),E.updateRenderTargetMipmap(Ue),St.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,en=q.length;Dt<en;Dt++){const an=q[Dt],{object:Ht,geometry:_n,material:je,group:Dn}=an;if(je.side===Zi&&Ht.layers.test(oe.layers)){const Tt=je.side;je.side=oi,je.needsUpdate=!0,cn(Ht,de,oe,_n,je,Dn),je.side=Tt,je.needsUpdate=!0,et=!0}}et===!0&&(E.updateMultisampleRenderTarget(Ue),E.updateRenderTargetMipmap(Ue))}V.setRenderTarget(De,Ke,nt),V.setClearColor(F,ne),gt!==void 0&&(oe.viewport=gt),V.toneMapping=mt}function Yt(C,q,de){const oe=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Ue=C.length;ae<Ue;ae++){const $e=C[ae],{object:De,geometry:Ke,group:nt}=$e;let mt=$e.material;mt.allowOverride===!0&&oe!==null&&(mt=oe),De.layers.test(de.layers)&&cn(De,q,de,Ke,mt,nt)}}function cn(C,q,de,oe,ae,Ue){C.onBeforeRender(V,q,de,oe,ae,Ue),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(V,q,de,oe,C,Ue),ae.transparent===!0&&ae.side===Zi&&ae.forceSinglePass===!1?(ae.side=oi,ae.needsUpdate=!0,V.renderBufferDirect(de,q,oe,ae,C,Ue),ae.side=rs,ae.needsUpdate=!0,V.renderBufferDirect(de,q,oe,ae,C,Ue),ae.side=Zi):V.renderBufferDirect(de,q,oe,ae,C,Ue),C.onAfterRender(V,q,de,oe,ae,Ue)}function Ft(C,q,de){q.isScene!==!0&&(q=Xt);const oe=N.get(C),ae=L.state.lights,Ue=L.state.shadowsArray,$e=ae.state.version,De=Ie.getParameters(C,ae.state,Ue,q,de,L.state.lightProbeGridArray),Ke=Ie.getProgramCacheKey(De);let nt=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,oe.fog=q.fog;const mt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=te.get(C.envMap||oe.environment,mt),oe.envMapRotation=oe.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",ue),nt=new Map,oe.programs=nt);let gt=nt.get(Ke);if(gt!==void 0){if(oe.currentProgram===gt&&oe.lightsStateVersion===$e)return Kn(C,De),gt}else De.uniforms=Ie.getUniforms(C),Z!==null&&C.isNodeMaterial&&Z.build(C,de,De),C.onBeforeCompile(De,V),gt=Ie.acquireProgram(De,Ke),nt.set(Ke,gt),oe.uniforms=De.uniforms;const et=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Ge.uniform),Kn(C,De),oe.needsLights=vi(C),oe.lightsStateVersion=$e,oe.needsLights&&(et.ambientLightColor.value=ae.state.ambient,et.lightProbe.value=ae.state.probe,et.directionalLights.value=ae.state.directional,et.directionalLightShadows.value=ae.state.directionalShadow,et.spotLights.value=ae.state.spot,et.spotLightShadows.value=ae.state.spotShadow,et.rectAreaLights.value=ae.state.rectArea,et.ltc_1.value=ae.state.rectAreaLTC1,et.ltc_2.value=ae.state.rectAreaLTC2,et.pointLights.value=ae.state.point,et.pointLightShadows.value=ae.state.pointShadow,et.hemisphereLights.value=ae.state.hemi,et.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,et.spotLightMatrix.value=ae.state.spotLightMatrix,et.spotLightMap.value=ae.state.spotLightMap,et.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.lightProbeGrid=L.state.lightProbeGridArray.length>0,oe.currentProgram=gt,oe.uniformsList=null,gt}function Mn(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Hu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Kn(C,q){const de=N.get(C);de.outputColorSpace=q.outputColorSpace,de.batching=q.batching,de.batchingColor=q.batchingColor,de.instancing=q.instancing,de.instancingColor=q.instancingColor,de.instancingMorph=q.instancingMorph,de.skinning=q.skinning,de.morphTargets=q.morphTargets,de.morphNormals=q.morphNormals,de.morphColors=q.morphColors,de.morphTargetsCount=q.morphTargetsCount,de.numClippingPlanes=q.numClippingPlanes,de.numIntersection=q.numClipIntersection,de.vertexAlphas=q.vertexAlphas,de.vertexTangents=q.vertexTangents,de.toneMapping=q.toneMapping}function os(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;P.setFromMatrixPosition(q.matrixWorld);for(let de=0,oe=C.length;de<oe;de++){const ae=C[de];if(ae.texture!==null&&ae.boundingBox.containsPoint(P))return ae}return null}function Us(C,q,de,oe,ae){q.isScene!==!0&&(q=Xt),E.resetTextureUnits();const Ue=q.fog,$e=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?q.environment:null,De=W===null?V.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Nt.workingColorSpace,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,nt=te.get(oe.envMap||$e,Ke),mt=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,gt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!de.morphAttributes.position,Dt=!!de.morphAttributes.normal,en=!!de.morphAttributes.color;let an=Qi;oe.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(an=V.toneMapping);const Ht=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,_n=Ht!==void 0?Ht.length:0,je=N.get(oe),Dn=L.state.lights;if(Lt===!0&&(ft===!0||C!==Q)){const Gt=C===Q&&oe.id===ie;Ge.setState(oe,C,Gt)}let Tt=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Dn.state.version||je.outputColorSpace!==De||ae.isBatchedMesh&&je.batching===!1||!ae.isBatchedMesh&&je.batching===!0||ae.isBatchedMesh&&je.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&je.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&je.instancing===!1||!ae.isInstancedMesh&&je.instancing===!0||ae.isSkinnedMesh&&je.skinning===!1||!ae.isSkinnedMesh&&je.skinning===!0||ae.isInstancedMesh&&je.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&je.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&je.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&je.instancingMorph===!1&&ae.morphTexture!==null||je.envMap!==nt||oe.fog===!0&&je.fog!==Ue||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ge.numPlanes||je.numIntersection!==Ge.numIntersection)||je.vertexAlphas!==mt||je.vertexTangents!==gt||je.morphTargets!==et||je.morphNormals!==Dt||je.morphColors!==en||je.toneMapping!==an||je.morphTargetsCount!==_n||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,je.__version=oe.version);let Zn=je.currentProgram;Tt===!0&&(Zn=Ft(oe,q,ae),Z&&oe.isNodeMaterial&&Z.onUpdateProgram(oe,Zn,je));let Jn=!1,At=!1,rr=!1;const zt=Zn.getUniforms(),nn=je.uniforms;if(Oe.useProgram(Zn.program)&&(Jn=!0,At=!0,rr=!0),oe.id!==ie&&(ie=oe.id,At=!0),je.needsLights){const Gt=os(L.state.lightProbeGridArray,ae);je.lightProbeGrid!==Gt&&(je.lightProbeGrid=Gt,At=!0)}if(Jn||Q!==C){Oe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(j,"projectionMatrix",C.projectionMatrix),zt.setValue(j,"viewMatrix",C.matrixWorldInverse);const Pi=zt.map.cameraPosition;Pi!==void 0&&Pi.setValue(j,It.setFromMatrixPosition(C.matrixWorld)),Bt.logarithmicDepthBuffer&&zt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,At=!0,rr=!0)}if(je.needsLights&&(Dn.state.directionalShadowMap.length>0&&zt.setValue(j,"directionalShadowMap",Dn.state.directionalShadowMap,E),Dn.state.spotShadowMap.length>0&&zt.setValue(j,"spotShadowMap",Dn.state.spotShadowMap,E),Dn.state.pointShadowMap.length>0&&zt.setValue(j,"pointShadowMap",Dn.state.pointShadowMap,E)),ae.isSkinnedMesh){zt.setOptional(j,ae,"bindMatrix"),zt.setOptional(j,ae,"bindMatrixInverse");const Gt=ae.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),zt.setValue(j,"boneTexture",Gt.boneTexture,E))}ae.isBatchedMesh&&(zt.setOptional(j,ae,"batchingTexture"),zt.setValue(j,"batchingTexture",ae._matricesTexture,E),zt.setOptional(j,ae,"batchingIdTexture"),zt.setValue(j,"batchingIdTexture",ae._indirectTexture,E),zt.setOptional(j,ae,"batchingColorTexture"),ae._colorsTexture!==null&&zt.setValue(j,"batchingColorTexture",ae._colorsTexture,E));const Ci=de.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&rt.update(ae,de,Zn),(At||je.receiveShadow!==ae.receiveShadow)&&(je.receiveShadow=ae.receiveShadow,zt.setValue(j,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&q.environment!==null&&(nn.envMapIntensity.value=q.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=oR()),At){if(zt.setValue(j,"toneMappingExposure",V.toneMappingExposure),je.needsLights&&Fs(nn,rr),Ue&&oe.fog===!0&&ve.refreshFogUniforms(nn,Ue),ve.refreshMaterialUniforms(nn,oe,ze,We,L.state.transmissionRenderTarget[C.id]),je.needsLights&&je.lightProbeGrid){const Gt=je.lightProbeGrid;nn.probesSH.value=Gt.texture,nn.probesMin.value.copy(Gt.boundingBox.min),nn.probesMax.value.copy(Gt.boundingBox.max),nn.probesResolution.value.copy(Gt.resolution)}Hu.upload(j,Mn(je),nn,E)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Hu.upload(j,Mn(je),nn,E),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(j,"center",ae.center),zt.setValue(j,"modelViewMatrix",ae.modelViewMatrix),zt.setValue(j,"normalMatrix",ae.normalMatrix),zt.setValue(j,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const Gt=oe.uniformsGroups;for(let Pi=0,Gi=Gt.length;Pi<Gi;Pi++){const ls=Gt[Pi];k.update(ls,Zn),k.bind(ls,Zn)}}return Zn}function Fs(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function vi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return ge},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,q,de){const oe=N.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),N.get(C.texture).__webglTexture=q,N.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const de=N.get(C);de.__webglFramebuffer=q,de.__useDefaultFramebuffer=q===void 0};const Zt=j.createFramebuffer();this.setRenderTarget=function(C,q=0,de=0){W=C,me=q,ge=de;let oe=null,ae=!1,Ue=!1;if(C){const De=N.get(C);if(De.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(j.FRAMEBUFFER,De.__webglFramebuffer),J.copy(C.viewport),fe.copy(C.scissor),ce=C.scissorTest,Oe.viewport(J),Oe.scissor(fe),Oe.setScissorTest(ce),ie=-1;return}else if(De.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(De.__hasExternalTextures)E.rebindTextures(C,N.get(C.texture).__webglTexture,N.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const mt=C.depthTexture;if(De.__boundDepthTexture!==mt){if(mt!==null&&N.has(mt)&&(C.width!==mt.image.width||C.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const nt=N.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?oe=nt[q][de]:oe=nt[q],ae=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?oe=N.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?oe=nt[de]:oe=nt,J.copy(C.viewport),fe.copy(C.scissor),ce=C.scissorTest}else J.copy(Se).multiplyScalar(ze).floor(),fe.copy(Fe).multiplyScalar(ze).floor(),ce=Je;if(de!==0&&(oe=Zt),Oe.bindFramebuffer(j.FRAMEBUFFER,oe)&&Oe.drawBuffers(C,oe),Oe.viewport(J),Oe.scissor(fe),Oe.setScissorTest(ce),ae){const De=N.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,de)}else if(Ue){const De=q;for(let Ke=0;Ke<C.textures.length;Ke++){const nt=N.get(C.textures[Ke]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ke,nt.__webglTexture,de,De)}}else if(C!==null&&de!==0){const De=N.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,De.__webglTexture,de)}ie=-1},this.readRenderTargetPixels=function(C,q,de,oe,ae,Ue,$e,De=0){if(!(C&&C.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$e!==void 0&&(Ke=Ke[$e]),Ke){Oe.bindFramebuffer(j.FRAMEBUFFER,Ke);try{const nt=C.textures[De],mt=nt.format,gt=nt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+De),!Bt.textureFormatReadable(mt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(gt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-oe&&de>=0&&de<=C.height-ae&&j.readPixels(q,de,oe,ae,G.convert(mt),G.convert(gt),Ue)}finally{const nt=W!==null?N.get(W).__webglFramebuffer:null;Oe.bindFramebuffer(j.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,q,de,oe,ae,Ue,$e,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$e!==void 0&&(Ke=Ke[$e]),Ke)if(q>=0&&q<=C.width-oe&&de>=0&&de<=C.height-ae){Oe.bindFramebuffer(j.FRAMEBUFFER,Ke);const nt=C.textures[De],mt=nt.format,gt=nt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+De),!Bt.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.bufferData(j.PIXEL_PACK_BUFFER,Ue.byteLength,j.STREAM_READ),j.readPixels(q,de,oe,ae,G.convert(mt),G.convert(gt),0);const Dt=W!==null?N.get(W).__webglFramebuffer:null;Oe.bindFramebuffer(j.FRAMEBUFFER,Dt);const en=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await OM(j,en,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ue),j.deleteBuffer(et),j.deleteSync(en),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,de=0){const oe=Math.pow(2,-de),ae=Math.floor(C.image.width*oe),Ue=Math.floor(C.image.height*oe),$e=q!==null?q.x:0,De=q!==null?q.y:0;E.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,$e,De,ae,Ue),Oe.unbindTexture()};const fc=j.createFramebuffer(),Oa=j.createFramebuffer();this.copyTextureToTexture=function(C,q,de=null,oe=null,ae=0,Ue=0){let $e,De,Ke,nt,mt,gt,et,Dt,en;const an=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(de!==null)$e=de.max.x-de.min.x,De=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,nt=de.min.x,mt=de.min.y,gt=de.isBox3?de.min.z:0;else{const nn=Math.pow(2,-ae);$e=Math.floor(an.width*nn),De=Math.floor(an.height*nn),C.isDataArrayTexture?Ke=an.depth:C.isData3DTexture?Ke=Math.floor(an.depth*nn):Ke=1,nt=0,mt=0,gt=0}oe!==null?(et=oe.x,Dt=oe.y,en=oe.z):(et=0,Dt=0,en=0);const Ht=G.convert(q.format),_n=G.convert(q.type);let je;q.isData3DTexture?(E.setTexture3D(q,0),je=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),je=j.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),je=j.TEXTURE_2D),Oe.activeTexture(j.TEXTURE0),Oe.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),Oe.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Oe.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Dn=Oe.getParameter(j.UNPACK_ROW_LENGTH),Tt=Oe.getParameter(j.UNPACK_IMAGE_HEIGHT),Zn=Oe.getParameter(j.UNPACK_SKIP_PIXELS),Jn=Oe.getParameter(j.UNPACK_SKIP_ROWS),At=Oe.getParameter(j.UNPACK_SKIP_IMAGES);Oe.pixelStorei(j.UNPACK_ROW_LENGTH,an.width),Oe.pixelStorei(j.UNPACK_IMAGE_HEIGHT,an.height),Oe.pixelStorei(j.UNPACK_SKIP_PIXELS,nt),Oe.pixelStorei(j.UNPACK_SKIP_ROWS,mt),Oe.pixelStorei(j.UNPACK_SKIP_IMAGES,gt);const rr=C.isDataArrayTexture||C.isData3DTexture,zt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const nn=N.get(C),Ci=N.get(q),Gt=N.get(nn.__renderTarget),Pi=N.get(Ci.__renderTarget);Oe.bindFramebuffer(j.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Oe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Gi=0;Gi<Ke;Gi++)rr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(C).__webglTexture,ae,gt+Gi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(q).__webglTexture,Ue,en+Gi)),j.blitFramebuffer(nt,mt,$e,De,et,Dt,$e,De,j.DEPTH_BUFFER_BIT,j.NEAREST);Oe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||N.has(C)){const nn=N.get(C),Ci=N.get(q);Oe.bindFramebuffer(j.READ_FRAMEBUFFER,fc),Oe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Oa);for(let Gt=0;Gt<Ke;Gt++)rr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,nn.__webglTexture,ae,gt+Gt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,nn.__webglTexture,ae),zt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ci.__webglTexture,Ue,en+Gt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ci.__webglTexture,Ue),ae!==0?j.blitFramebuffer(nt,mt,$e,De,et,Dt,$e,De,j.COLOR_BUFFER_BIT,j.NEAREST):zt?j.copyTexSubImage3D(je,Ue,et,Dt,en+Gt,nt,mt,$e,De):j.copyTexSubImage2D(je,Ue,et,Dt,nt,mt,$e,De);Oe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else zt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(je,Ue,et,Dt,en,$e,De,Ke,Ht,_n,an.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(je,Ue,et,Dt,en,$e,De,Ke,Ht,an.data):j.texSubImage3D(je,Ue,et,Dt,en,$e,De,Ke,Ht,_n,an):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ue,et,Dt,$e,De,Ht,_n,an.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ue,et,Dt,an.width,an.height,Ht,an.data):j.texSubImage2D(j.TEXTURE_2D,Ue,et,Dt,$e,De,Ht,_n,an);Oe.pixelStorei(j.UNPACK_ROW_LENGTH,Dn),Oe.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt),Oe.pixelStorei(j.UNPACK_SKIP_PIXELS,Zn),Oe.pixelStorei(j.UNPACK_SKIP_ROWS,Jn),Oe.pixelStorei(j.UNPACK_SKIP_IMAGES,At),Ue===0&&q.generateMipmaps&&j.generateMipmap(je),Oe.unbindTexture()},this.initRenderTarget=function(C){N.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),Oe.unbindTexture()},this.resetState=function(){me=0,ge=0,W=null,Oe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const gv=["BLAZE","STORM","FROST","FLAME","SPELL","MAGIC","WRATH","CRYPT","CURSE","POWER","SWORD","ARROW","ARMOR","BRAVE","QUEST","SHADE","GHOST","BEAST","DEMON","ANGEL","RAVEN","TIGER","EAGLE","GIANT","KNAVE","NOBLE","ELDER","ROYAL","CROWN","RELIC","VAULT","TOTEM","EARTH","ETHER","NIGHT","LIGHT","PRIDE","HONOR","VALOR","GLINT","DREAM","JEWEL","CRAFT","SCALE","RANGE","FATAL"];function uR(s){let e;do e=gv[Math.floor(Math.random()*gv.length)];while(s);return e}function cR(s,e=.6){if(s&&Math.random()<e)return s[Math.floor(Math.random()*s.length)].toUpperCase();const t="AEIOUSTRLNCDMHPGBFKWYV";return t[Math.floor(Math.random()*t.length)]}const fR="/assets/asteroid-D7FGWxEV.glb",dR="/assets/asteroid_01-6TzOJz_n.glb",hR="/assets/asteroid_low_poly-CIoEJvOk.glb",pR="/assets/54509-yorp_asteroid_potential_earth_impactor-Cq4gmqj4.glb",mR="/assets/metal_asteroid-B7Ks757Z.glb",gR="/assets/giant_asteroid_with_purple_accents-DIZHWRLh.glb",vR="/assets/giant_asteroid_with_purple_accents-DIZHWRLh.glb",_R=[fR,dR,hR,pR,mR,gR,vR],vv=3,xR=6,yR=2500,Nu=.55,_v=1.1,Lo=.35,Lu=.45,xr=100,SR=18,MR=.33,Io=4e3,Dd=8500,ER=3e3,wR=600,xv=2e-4,TR=.985,bR=75e-5,yv=.022,Sv=55e-5;function AR(){const[s,e]=K.useState("checking"),[t,i]=K.useState(0),[a,o]=K.useState(1),[u,f]=K.useState(xr),[d,h]=K.useState(0),[g,_]=K.useState(""),[m,y]=K.useState(!1),[M,b]=K.useState(!0),[x,S]=K.useState(()=>uR()),[A,R]=K.useState([]),[P,U]=K.useState(""),[L,O]=K.useState([]),[w,I]=K.useState(0),[V,B]=K.useState(null),Z=K.useRef(""),me=K.useRef([]);K.useEffect(()=>{Z.current=x},[x]);const ge=K.useRef(!1),W=K.useRef(!0),ie=K.useRef(0),Q=K.useRef("checking"),J=K.useRef(0),fe=K.useRef(xr),ce=k=>{Q.current=k,e(k)},F=K.useRef(null),ne=K.useRef(null),Be=K.useRef(null),We=K.useRef(null),ze=K.useRef(null),he=K.useRef([]),Me=K.useRef([]),Se=K.useRef([]),Fe=K.useRef([]),Je=K.useRef([]),Qe=K.useRef(new Map),Lt=K.useRef(new Map),ft=K.useRef(null),Mt=K.useRef(null),It=K.useRef(!1),vt=K.useRef(new d1),Xt=K.useRef(null),Vt=K.useRef(new Y);K.useEffect(()=>{const k=navigator.xr;if(!k){ce("unsupported");return}k.isSessionSupported("immersive-ar").then(re=>ce(re?"idle":"unsupported")).catch(()=>ce("unsupported"))},[]);const vn=()=>{const k=new Uo,re=new ip(1,2),ee=re.attributes.position.array;for(let $=0;$<ee.length;$+=3){const ye=.72+Math.random()*.56;ee[$]*=ye,ee[$+1]*=ye,ee[$+2]*=ye}return re.attributes.position.needsUpdate=!0,re.computeVertexNormals(),k.add(new ui(re,new Ch({color:7035454,roughness:.95,metalness:.05}))),k},j=async()=>{try{const{GLTFLoader:k}=await QS(async()=>{const{GLTFLoader:ye}=await import("./GLTFLoader--8Ldq77f.js");return{GLTFLoader:ye}},[]),re=new k,ee=await Promise.allSettled(_R.map(ye=>re.loadAsync(ye))),$=[];return ee.forEach(ye=>{ye.status==="fulfilled"&&ye.value.scene.traverse(Pe=>{const ue=Pe;ue.isMesh&&(ue.position.set(0,0,0),ue.rotation.set(0,0,0),ue.scale.setScalar(1),ue.material||(ue.material=new Ch({color:9078137,roughness:.95,metalness:.05})),$.push(ue))})}),$.length===0?[vn()]:$}catch{return[vn()]}},$t=(k,re=16347926,ee=26,$="burst")=>{const ye=ne.current;if(!ye)return;const Pe=new Ln,ue=new Float32Array(ee*3),ke=[],st=$==="burst";for(let pt=0;pt<ee;pt++)ue[pt*3]=k.x,ue[pt*3+1]=k.y,ue[pt*3+2]=k.z,st?ke.push(new Y((Math.random()-.5)*.04,.012+Math.random()*.022,(Math.random()-.5)*.04)):ke.push(new Y((Math.random()-.5)*.015,-.002-Math.random()*.006,(Math.random()-.5)*.015));Pe.setAttribute("position",new Nn(ue,3));const lt=new Td(Pe,new Vu({color:re,size:st?.03:.018,transparent:!0,opacity:1}));ye.add(lt),Fe.current.push({points:lt,velocities:ke,frame:0,life:st?55:28})},St=k=>{const ee=document.createElement("canvas");ee.width=128,ee.height=128;const $=ee.getContext("2d");$.fillStyle="rgba(10,1,24,0.78)",$.fillRect(0,0,128,128),$.strokeStyle="#a78bfa",$.lineWidth=6,$.strokeRect(6,6,116,116),$.fillStyle="#ec4899",$.font='bold 78px "Press Start 2P", monospace',$.textAlign="center",$.textBaseline="middle",$.fillText(k,128/2,128/2+4);const ye=new PE(ee);ye.colorSpace=si,ye.anisotropy=4;const Pe=new o_({map:ye,transparent:!0,depthWrite:!1}),ue=new yE(Pe);return ue.scale.set(.1,.1,.1),ue},Bt=k=>{const re=ne.current;if(!re)return;const ee=cR(Z.current),$=St(ee);$.position.copy(k),re.add($),Je.current.push({sprite:$,letter:ee,velocity:new Y((Math.random()-.5)*.012,.018+Math.random()*.01,(Math.random()-.5)*.012),life:0,maxLife:140})},Oe=()=>{const k=ne.current;if(!k)return;const re=[];Je.current=Je.current.filter(ee=>{var $;return ee.life++,ee.velocity.y-=xv*.7,ee.velocity.multiplyScalar(.992),ee.sprite.position.add(ee.velocity),ee.sprite.material.opacity=.75+.25*Math.sin(ee.life*.18),ee.life>=ee.maxLife?(re.push(ee.letter),k.remove(ee.sprite),($=ee.sprite.material.map)==null||$.dispose(),ee.sprite.material.dispose(),!1):!0}),re.length>0&&(me.current.push(...re),R([...me.current]))},Kt=(k,re=3)=>{const ee=ne.current;if(!ee)return;const $=new Ln,ye=new Float32Array(re*3),Pe=[];for(let lt=0;lt<re;lt++){const pt=.025+Math.random()*.025,ct=Math.random()*Math.PI*2;ye[lt*3]=k.x+Math.cos(ct)*pt,ye[lt*3+1]=k.y-.02-Math.random()*.03,ye[lt*3+2]=k.z+Math.sin(ct)*pt,Pe.push(new Y((Math.random()-.5)*.004,-.001-Math.random()*.003,(Math.random()-.5)*.004))}$.setAttribute("position",new Nn(ye,3));const ue=Math.random(),ke=ue<.4?7035454:ue<.75?9074784:5917238,st=new Td($,new Vu({color:ke,size:.012,transparent:!0,opacity:.7,depthWrite:!1}));ee.add(st),Fe.current.push({points:st,velocities:Pe,frame:0,life:40})},N=(k,re,ee=5)=>{const $=ne.current;if(!$)return;const ye=re.clone();ye.lengthSq()>1e-4?ye.normalize():ye.set(0,1,0);const Pe=new Ln,ue=new Float32Array(ee*3),ke=[];for(let ct=0;ct<ee;ct++){ue[ct*3]=k.x,ue[ct*3+1]=k.y,ue[ct*3+2]=k.z;const _t=ye.clone().multiplyScalar(.013+Math.random()*.018);_t.x+=(Math.random()-.5)*.01,_t.y+=(Math.random()-.25)*.012,_t.z+=(Math.random()-.5)*.01,ke.push(_t)}Pe.setAttribute("position",new Nn(ue,3));const st=Math.random(),lt=st<.33?16765514:st<.7?16742946:16724753,pt=new Td(Pe,new Vu({color:lt,size:.032,transparent:!0,opacity:.95,depthWrite:!1}));$.add(pt),Fe.current.push({points:pt,velocities:ke,frame:0,life:22})},E=k=>{const re=he.current,ee=ne.current,$=Mt.current;if(re.length===0||!ee||!$)return null;const Pe=re[Math.floor(Math.random()*re.length)].clone(!0);let ue=null;if(Pe.traverse(Qt=>{const In=Qt;if(In.isMesh){const Yt=In.material.clone();In.material=Yt,ue||(ue=Yt)}}),!ue)return null;const ke=new Cr().setFromObject(Pe),st=new Y;ke.getSize(st);const lt=Math.max(st.x,st.y,st.z)||1,pt=.2+Math.random()*.15;Pe.scale.setScalar(pt/lt);const ct=xe(),_t=Math.random()*Math.PI*2;let un;if(ct)Pe.position.set(ct.x,ct.y,ct.z),un=ct.y;else{const Qt=Nu+Math.random()*(_v-Nu);un=$.y+Lo+Math.random()*Lu,Pe.position.set($.x+Math.cos(_t)*Qt,un,$.z+Math.sin(_t)*Qt)}Pe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),ee.add(Pe);const Sn=Math.random(),Ut=Sn<.5?"straight":Sn<.8?"curve":"orbit-strike";return{obj:Pe,baseMat:ue,state:"drift",behaviour:Ut,velocity:new Y,angularVel:new Y((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016),nextAttackTime:k+ER+Math.random()*(Dd-Io),stateTimer:0,orbitCenter:Pe.position.clone(),orbitAngle:_t,orbitRadius:.04+Math.random()*.06,spawnHeight:un,alive:!0}},te=(k,re)=>{const ee=xe(),$=Mt.current;let ye;if(ee)k.obj.position.set(ee.x,ee.y,ee.z),ye=ee.y;else if($){const ue=Math.random()*Math.PI*2,ke=Nu+Math.random()*(_v-Nu);ye=$.y+Lo+Math.random()*Lu,k.obj.position.set($.x+Math.cos(ue)*ke,ye,$.z+Math.sin(ue)*ke)}else return!1;k.obj.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),k.obj.visible=!0,k.state="drift",k.velocity.set(0,0,0),k.angularVel.set((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016);const Pe=Math.random();return k.behaviour=Pe<.5?"straight":Pe<.8?"curve":"orbit-strike",k.orbitCenter.copy(k.obj.position),k.orbitAngle=Math.random()*Math.PI*2,k.orbitRadius=.04+Math.random()*.06,k.spawnHeight=ye,k.nextAttackTime=re+Io+Math.random()*(Dd-Io),k.stateTimer=0,k.alive=!0,k.baseMat.emissive.setHex(0),k.baseMat.emissiveIntensity=0,!0},_e=k=>{const re=Se.current.find(ee=>!ee.alive);return!re||!te(re,k)?!1:(Me.current.push(re),!0)},Ee=(k,re)=>{k.alive&&(k.alive=!1,$t(k.obj.position.clone(),re?16347926:16720384),k.obj.visible=!1,Me.current=Me.current.filter(ee=>ee!==k),re&&(J.current++,i(J.current),Bt(k.obj.position.clone()),J.current>0&&J.current%vv===0&&o(ee=>ee+1)),setTimeout(()=>{Q.current==="playing"&&_e(performance.now())},yR))},Ae=()=>{fe.current=Math.max(0,fe.current-SR),f(fe.current),h(k=>k+1),navigator.vibrate&&navigator.vibrate(200),fe.current<=0&&ce("game-over")},Ie=K.useCallback(k=>{var pt;if(Q.current!=="playing")return;const re=F.current,ee=ne.current;if(!re||!ee||Me.current.length===0)return;const $=k.touches[0];if(!$)return;const ye=$.clientX/window.innerWidth*2-1,Pe=-($.clientY/window.innerHeight)*2+1,ue=re.xr.getCamera(),ke=((pt=ue.cameras)==null?void 0:pt.length)>0?ue.cameras[0]:Be.current;vt.current.setFromCamera(new yt(ye,Pe),ke);const st=Me.current.map(ct=>ct.obj),lt=vt.current.intersectObjects(st,!0);if(lt.length>0){let ct=lt[0].object;for(;ct.parent&&ct.parent!==ee;)ct=ct.parent;const _t=Me.current.find(un=>un.obj===ct);_t&&Ee(_t,!0)}},[]),ve=(k,re)=>{const ee=ne.current;if(!ee)return;const $=k.detectedPlanes??new Set,ye=new Set,Pe=Q.current==="playing"?.25:.85;$.forEach(ke=>{ye.add(ke);const st=k.getPose(ke.planeSpace,re);if(!st)return;const lt=st.transform.position,pt=new Y(lt.x,lt.y,lt.z),ct=ke.polygon??[];if(ct.length<3)return;let _t=0;for(let Yt=0;Yt<ct.length;Yt++){const cn=ct[Yt],Ft=ct[(Yt+1)%ct.length];_t+=cn.x*Ft.z-Ft.x*cn.z}_t=Math.abs(_t)/2;const un=new bt().fromArray(st.transform.matrix),Sn=ct.map(Yt=>{const cn=new Y(Yt.x,0,Yt.z);return cn.applyMatrix4(un),cn});Qe.current.set(ke,{center:pt,area:_t,orientation:ke.orientation??"unknown",worldPolygon:Sn});let Ut=Lt.current.get(ke);const Qt=ct.map(Yt=>new Y(Yt.x,0,Yt.z));if(Ut){const Yt=Ut.outline.geometry.attributes.position.array;if(Yt.length===Qt.length*3){for(let Ft=0;Ft<Qt.length;Ft++)Yt[Ft*3]=Qt[Ft].x,Yt[Ft*3+1]=Qt[Ft].y,Yt[Ft*3+2]=Qt[Ft].z;Ut.outline.geometry.attributes.position.needsUpdate=!0;const cn=Ut.fill.geometry.attributes.position.array;for(let Ft=0;Ft<Qt.length;Ft++)cn[Ft*3]=Qt[Ft].x,cn[Ft*3+1]=Qt[Ft].y,cn[Ft*3+2]=Qt[Ft].z;Ut.fill.geometry.attributes.position.needsUpdate=!0}else{const cn=new Float32Array(Qt.length*3);Qt.forEach((Mn,Kn)=>{cn[Kn*3]=Mn.x,cn[Kn*3+1]=Mn.y,cn[Kn*3+2]=Mn.z}),Ut.outline.geometry.setAttribute("position",new Nn(cn,3)),Ut.fill.geometry.setAttribute("position",new Nn(cn.slice(),3));const Ft=[];for(let Mn=1;Mn<Qt.length-1;Mn++)Ft.push(0,Mn,Mn+1);Ut.fill.geometry.setIndex(Ft)}}else{const Yt=new Ln().setFromPoints(Qt),cn=new c_({color:1096065,transparent:!0,opacity:Pe}),Ft=new CE(Yt,cn),Mn=new Ln,Kn=new Float32Array(Qt.length*3);Qt.forEach((vi,Zt)=>{Kn[Zt*3]=vi.x,Kn[Zt*3+1]=vi.y,Kn[Zt*3+2]=vi.z}),Mn.setAttribute("position",new Nn(Kn,3));const os=[];for(let vi=1;vi<Qt.length-1;vi++)os.push(0,vi,vi+1);Mn.setIndex(os),Mn.computeVertexNormals();const Us=new Qh({color:1096065,transparent:!0,opacity:Pe*.18,side:Zi,depthWrite:!1}),Fs=new ui(Mn,Us);ee.add(Ft),ee.add(Fs),Ut={outline:Ft,fill:Fs},Lt.current.set(ke,Ut)}const In=new bt().fromArray(st.transform.matrix);Ut.outline.matrix.copy(In),Ut.outline.matrixAutoUpdate=!1,Ut.outline.updateMatrixWorld(!0),Ut.fill.matrix.copy(In),Ut.fill.matrixAutoUpdate=!1,Ut.fill.updateMatrixWorld(!0),Ut.outline.visible=W.current,Ut.fill.visible=W.current,Ut.outline.material.opacity=Pe,Ut.fill.material.opacity=Pe*.18}),Qe.current.forEach((ke,st)=>{ye.has(st)||Qe.current.delete(st)}),Lt.current.forEach((ke,st)=>{ye.has(st)||(ee.remove(ke.outline),ee.remove(ke.fill),ke.outline.geometry.dispose(),ke.fill.geometry.dispose(),ke.outline.material.dispose(),ke.fill.material.dispose(),Lt.current.delete(st))});let ue=null;if(Qe.current.forEach(ke=>{ke.orientation!=="horizontal"&&ke.orientation!=="unknown"||(!ue||ke.area>ue.area)&&(ue=ke)}),ue){const ke=ue;ft.current=ke,It.current||(Mt.current=ke.center.clone(),Q.current==="scanning"&&ce("plane-found"))}},xe=()=>{const k=ft.current;if(!k||k.worldPolygon.length<3)return null;const re=k.worldPolygon;let ee=1/0,$=-1/0,ye=1/0,Pe=-1/0;for(const ue of re)ue.x<ee&&(ee=ue.x),ue.x>$&&($=ue.x),ue.z<ye&&(ye=ue.z),ue.z>Pe&&(Pe=ue.z);for(let ue=0;ue<40;ue++){const ke=ee+Math.random()*($-ee),st=ye+Math.random()*(Pe-ye);let lt=!1;for(let pt=0,ct=re.length-1;pt<re.length;ct=pt++){const _t=re[pt].x,un=re[pt].z,Sn=re[ct].x,Ut=re[ct].z;un>st!=Ut>st&&ke<(Sn-_t)*(st-un)/(Ut-un)+_t&&(lt=!lt)}if(lt)return{x:ke,y:k.center.y+Lo+Math.random()*Lu,z:st}}return{x:k.center.x,y:k.center.y+Lo,z:k.center.z}},Ve=(k,re,ee,$)=>{const ye=k.getViewerPose(re);if(ye){const ue=ye.transform.position;Vt.current.set(ue.x,ue.y,ue.z)}const Pe=Vt.current;Me.current.forEach((ue,ke)=>{var st;if(ue.obj.rotation.x+=ue.angularVel.x,ue.obj.rotation.y+=ue.angularVel.y,ue.obj.rotation.z+=ue.angularVel.z,ue.state==="drift"){ue.orbitAngle+=.004;const lt=new Y(ue.orbitCenter.x+Math.cos(ue.orbitAngle)*ue.orbitRadius,ue.spawnHeight+Math.sin($*.9+ue.orbitAngle)*.03,ue.orbitCenter.z+Math.sin(ue.orbitAngle)*ue.orbitRadius);ue.obj.position.lerp(lt,.08),ue.velocity.multiplyScalar(.9),(ie.current+ke*7)%25===0&&Kt(ue.obj.position,2),ee>ue.nextAttackTime&&(ue.state="charging",ue.stateTimer=ee,ue.baseMat.emissive.setHex(16720384),ue.baseMat.emissiveIntensity=1,ue.angularVel.multiplyScalar(2.4))}else if(ue.state==="charging"){const lt=(ee-ue.stateTimer)/wR;if(ue.baseMat.emissiveIntensity=.7+Math.sin($*32)*.4,ue.obj.position.x+=(Math.random()-.5)*.004,ue.obj.position.y+=(Math.random()-.5)*.004,ue.obj.position.z+=(Math.random()-.5)*.004,ie.current%5===0){const pt=Pe.clone().sub(ue.obj.position);N(ue.obj.position,pt,3)}if(lt>=1){const pt=Pe.clone().sub(ue.obj.position).normalize();ue.velocity.copy(pt).multiplyScalar(.01),ue.state="attacking"}}else if(ue.state==="attacking"){const lt=Pe.clone().sub(ue.obj.position),pt=lt.length();if(lt.normalize(),ue.velocity.addScaledVector(lt,bR),ue.behaviour==="curve"){const _t=new Y(-lt.z,0,lt.x);ue.velocity.addScaledVector(_t,Math.sin($*5)*Sv)}else if(ue.behaviour==="orbit-strike"){const _t=new Y(-lt.z,0,lt.x);ue.velocity.addScaledVector(_t,Sv*.6)}if(ue.velocity.y-=xv,ue.velocity.multiplyScalar(TR),ue.velocity.length()>yv&&ue.velocity.setLength(yv),ue.obj.position.add(ue.velocity),ue.baseMat.emissiveIntensity=.6+Math.sin($*22)*.4,ie.current%3===0&&N(ue.obj.position,ue.velocity,6),pt<MR&&(Ae(),Ee(ue,!1)),(Mt.current?ue.obj.position.distanceTo(Mt.current):0)>3.5){ue.state="drift",ue.baseMat.emissive.setHex(0),ue.baseMat.emissiveIntensity=0,ue.velocity.set(0,0,0),ue.angularVel.multiplyScalar(1/2.4);const _t=xe();_t?(ue.obj.position.set(_t.x,_t.y,_t.z),ue.orbitCenter.set(_t.x,_t.y,_t.z),ue.spawnHeight=_t.y):ue.spawnHeight=(((st=Mt.current)==null?void 0:st.y)??0)+Lo+Math.random()*Lu,ue.orbitAngle=Math.random()*Math.PI*2,ue.orbitRadius=.04+Math.random()*.06,ue.nextAttackTime=ee+Io+Math.random()*(Dd-Io)}}})},Ge=k=>{Fe.current=Fe.current.filter(re=>{if(re.frame++,re.frame>re.life)return k.remove(re.points),!1;const ee=re.points.geometry.attributes.position.array;for(let $=0;$<re.velocities.length;$++)ee[$*3]+=re.velocities[$].x,ee[$*3+1]+=re.velocities[$].y-4e-4*re.frame,ee[$*3+2]+=re.velocities[$].z;return re.points.geometry.attributes.position.needsUpdate=!0,re.points.material.opacity=Math.max(0,1-re.frame/re.life),!0})},Le=async()=>{ce("loading"),fe.current=xr,J.current=0,f(xr),i(0),o(1),It.current=!0;try{const k=await j();he.current=k;const re=performance.now();for(let ee=0;ee<xR;ee++){const $=E(re);$&&($.obj.visible=!1,$.alive=!1,Se.current.push($))}for(let ee=0;ee<vv;ee++)_e(re);document.addEventListener("touchstart",Ie,{passive:!0}),ce("playing")}catch(k){ce("error"),_((k==null?void 0:k.message)??"Failed to load model")}},Re=()=>{const k=ne.current;Lt.current.forEach(re=>{k==null||k.remove(re.outline),k==null||k.remove(re.fill),re.outline.geometry.dispose(),re.fill.geometry.dispose(),re.outline.material.dispose(),re.fill.material.dispose()}),Lt.current.clear()},rt=K.useCallback(()=>{var k,re,ee;document.removeEventListener("touchstart",Ie),(k=F.current)==null||k.setAnimationLoop(null),(re=We.current)==null||re.end().catch(()=>{}),We.current=null,(ee=Xt.current)==null||ee.remove(),Xt.current=null,Se.current.forEach($=>{var ye;return(ye=ne.current)==null?void 0:ye.remove($.obj)}),Se.current=[],Me.current=[],Fe.current=[],Qe.current.clear(),Re(),ft.current=null,Mt.current=null,It.current=!1},[Ie]),dt=async k=>{ce("starting"),_(""),i(0),J.current=0,f(xr),fe.current=xr,o(1),It.current=!1,Qe.current.clear(),ft.current=null;try{const re=document.createElement("canvas");re.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;",document.body.appendChild(re),Xt.current=re;const ee=Math.min(window.devicePixelRatio,1.5),$=new lR({canvas:re,alpha:!0,antialias:ee<1.3,powerPreference:"high-performance"});$.xr.enabled=!0,$.setPixelRatio(ee),$.setSize(window.innerWidth,window.innerHeight),$.outputColorSpace=si,$.toneMapping=zh,$.toneMappingExposure=1.1,F.current=$;const ye=new pE;ye.add(new e1(16777215,1.1));const Pe=new H0(16773590,3);Pe.position.set(2,4,2),ye.add(Pe);const ue=new H0(8956671,1);ue.position.set(-2,2,-1),ye.add(ue),ne.current=ye;const ke=new ai(70,window.innerWidth/window.innerHeight,.01,100);Be.current=ke;const st=navigator.xr,lt={requiredFeatures:["plane-detection"],optionalFeatures:["hit-test","local-floor","dom-overlay"]};k&&(lt.domOverlay={root:k});const pt=await st.requestSession("immersive-ar",lt);We.current=pt,await $.xr.setSession(pt);let ct;try{ct=await pt.requestReferenceSpace("local-floor")}catch{ct=await pt.requestReferenceSpace("local")}ze.current=ct,ce("scanning"),$.setAnimationLoop((_t,un)=>{if(un){if(ie.current++,(ie.current&3)===0&&ve(un,ct),Q.current==="playing"&&!ge.current){const Sn=performance.now(),Ut=Sn*.001;Ve(un,ct,Sn,Ut),Oe(),Ge(ye)}$.render(ye,ke)}}),pt.addEventListener("end",()=>{$.setAnimationLoop(null),re.remove(),Xt.current=null,We.current=null,Se.current.forEach(_t=>ye.remove(_t.obj)),Se.current=[],Me.current=[],Fe.current=[],Qe.current.clear(),Re(),ft.current=null,Mt.current=null,It.current=!1,ce("idle"),i(0),J.current=0,f(xr),fe.current=xr,o(1)})}catch(re){rt(),ce("error"),_((re==null?void 0:re.message)??"Failed to start AR")}},Et=K.useCallback(()=>{ge.current=!0,y(!0)},[]),G=K.useCallback(()=>{ge.current=!1,y(!1)},[]),Ce=K.useCallback(()=>{const k=!W.current;W.current=k,b(k),Lt.current.forEach(re=>{re.outline.visible=k,re.fill.visible=k})},[]);return K.useEffect(()=>()=>rt(),[rt]),{phase:s,smashed:t,wave:a,hp:u,maxHp:xr,damageTick:d,errorMsg:g,isSupported:s!=="unsupported"&&s!=="checking",paused:m,showPlane:M,startAR:dt,startGame:Le,stopAR:rt,pause:Et,resume:G,togglePlane:Ce}}const RR={checking:"CHECKING DEVICE...",unsupported:"AR NOT SUPPORTED",idle:"READY TO SCAN",starting:"INITIALIZING AR...",scanning:"SCANNING SURFACE...","plane-found":"SURFACE LOCKED ✓",loading:"LOADING MODELS...",playing:"COMBAT ACTIVE","game-over":"DEFEATED",error:"SESSION ERROR"},CR={checking:"#a78bfa",unsupported:"#ef4444",idle:"#a78bfa",starting:"#facc15",scanning:"#facc15","plane-found":"#10b981",loading:"#a78bfa",playing:"#ec4899","game-over":"#ef4444",error:"#ef4444"};function PR(){const s=ic(),e=K.useRef(null),{phase:t,smashed:i,wave:a,hp:o,maxHp:u,damageTick:f,errorMsg:d,paused:h,showPlane:g,startAR:_,startGame:m,stopAR:y,pause:M,resume:b,togglePlane:x}=AR(),S=CR[t],A=RR[t],R=t==="scanning"||t==="plane-found"||t==="loading"||t==="playing"||t==="game-over",P=t==="idle"||t==="error",U=t==="plane-found",L=t==="playing",O=t==="loading"||t==="starting",w=t==="game-over",I=Math.max(0,Math.min(100,o/u*100)),V=I>60?"#10b981":I>30?"#facc15":"#ef4444",[B,Z]=K.useState(!1);K.useEffect(()=>{if(f===0)return;Z(!0);const W=setTimeout(()=>Z(!1),350);return()=>clearTimeout(W)},[f]);const me=()=>_(e.current??void 0),ge=()=>{y(),s("/mission")};return z.jsxs("div",{ref:e,className:"fixed inset-0 font-['Press_Start_2P',_monospace] select-none",style:{backgroundColor:R?"transparent":"#0a0118",zIndex:100},children:[z.jsx("style",{children:`
        @keyframes scanLine  { 0% { transform:translateY(-5%);opacity:.7 } 100% { transform:translateY(105vh);opacity:0 } }
        @keyframes pulseRing { 0% { transform:scale(.8);opacity:1 } 100% { transform:scale(2.2);opacity:0 } }
        @keyframes blink     { 0%,100% { opacity:1 } 50% { opacity:.15 } }
        @keyframes fadeSlide { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }
        @keyframes corner    { 0%,100% { opacity:1 } 50% { opacity:.25 } }
        @keyframes spin      { to { transform:rotate(360deg) } }
      `}),R&&z.jsx("div",{className:"pointer-events-none absolute inset-x-0 h-0.5",style:{background:`linear-gradient(to right,transparent,${S}88,transparent)`,animation:"scanLine 3.5s linear infinite",zIndex:10}}),["tl","tr","bl","br"].map(W=>z.jsx("div",{className:"absolute pointer-events-none",style:{top:W[0]==="t"?14:void 0,bottom:W[0]==="b"?14:void 0,left:W[1]==="l"?14:void 0,right:W[1]==="r"?14:void 0,width:28,height:28,borderTop:W[0]==="t"?`3px solid ${S}`:void 0,borderBottom:W[0]==="b"?`3px solid ${S}`:void 0,borderLeft:W[1]==="l"?`3px solid ${S}`:void 0,borderRight:W[1]==="r"?`3px solid ${S}`:void 0,animation:"corner 2s ease-in-out infinite",zIndex:20}},W)),z.jsxs("div",{className:"absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4",style:{zIndex:30},children:[z.jsx("button",{onClick:ge,className:"text-[8px] transition-colors",style:{color:R?"#ffffffcc":"#a78bfa"},children:"← EXIT"}),z.jsx("div",{className:"text-[7px] px-2 py-1 border",style:{color:S,borderColor:S,animation:R&&t!=="plane-found"&&!L?"blink 1s ease-in-out infinite":"none"},children:A}),L||w?z.jsxs("div",{className:"text-[7px] text-[#ec4899]",children:["KILLS ",i]}):z.jsx("div",{className:"text-[7px]",style:{color:R?"#10b981":"#374151"},children:"WAVE 01"})]}),(L||w)&&z.jsxs("div",{className:"absolute top-14 inset-x-0 px-10",style:{zIndex:30},children:[z.jsxs("div",{className:"flex items-center justify-between mb-1",children:[z.jsx("span",{className:"text-[6px] text-white/60 tracking-widest",children:"HP"}),z.jsxs("span",{className:"text-[6px] text-[#facc15] tracking-widest",children:["WAVE ",String(a).padStart(2,"0")]}),z.jsxs("span",{className:"text-[6px]",style:{color:V},children:[o,"/",u]})]}),z.jsx("div",{className:"w-full h-2 bg-[#1a0a2e]/80 border border-white/20",children:z.jsx("div",{className:"h-full transition-all duration-300 ease-out",style:{width:`${I}%`,backgroundColor:V,boxShadow:`0 0 8px ${V}`}})})]}),B&&z.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundColor:"rgba(239,68,68,0.35)",boxShadow:"inset 0 0 120px 40px rgba(239,68,68,0.6)",animation:"fadeSlide .35s ease-out",zIndex:45}}),L&&!h&&z.jsx("button",{onClick:M,className:"absolute top-16 right-6 w-10 h-10 flex items-center justify-center border-2 border-[#a78bfa] bg-[#0a0118]/70 active:scale-95",style:{zIndex:35},"aria-label":"Pause",children:z.jsxs("div",{className:"flex gap-1",children:[z.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"}),z.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"})]})}),L&&h&&z.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-5 px-8",style:{zIndex:60,backgroundColor:"rgba(10,1,24,0.85)",animation:"fadeSlide .25s ease-out"},children:[z.jsx("p",{className:"text-[18px] tracking-widest text-[#a78bfa]",children:"PAUSED"}),z.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[z.jsx("button",{onClick:b,className:"py-4 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors",children:"> RESUME <"}),z.jsxs("button",{onClick:x,className:"py-3 text-[9px] border-2 transition-colors",style:{borderColor:g?"#10b981":"#facc15",color:g?"#10b981":"#facc15"},children:["PLANE: ",g?"VISIBLE":"HIDDEN"]}),z.jsx("button",{onClick:async()=>{b(),y(),await new Promise(W=>setTimeout(W,80)),me()},className:"py-3 text-[9px] border-2 border-white/40 text-white/80 hover:text-white transition-colors",children:"RESTART"}),z.jsx("button",{onClick:ge,className:"py-3 text-[9px] border-2 border-white/20 text-white/60 hover:text-white/90 transition-colors",children:"EXIT TO MISSION"})]}),z.jsxs("p",{className:"text-[6px] text-white/40 tracking-widest mt-2",children:["KILLS ",i," · WAVE ",a," · HP ",o,"/",u]})]}),!R&&z.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-7 px-8",style:{zIndex:20,animation:"fadeSlide .4s ease-out"},children:[z.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[z.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:S,opacity:.18}}),z.jsx("div",{className:"absolute w-24 h-24 rounded-full border",style:{borderColor:S,opacity:.35}}),O&&z.jsx("div",{className:"absolute w-full h-full rounded-full border-t-2",style:{borderColor:S,animation:"spin .9s linear infinite"}}),!O&&(t==="idle"||t==="error")&&z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:S,animation:"pulseRing 1.6s ease-out infinite"}}),z.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:S,animation:"pulseRing 1.6s .8s ease-out infinite"}})]}),z.jsx("span",{className:"text-3xl",children:t==="unsupported"?"🚫":t==="error"?"⚠️":"📷"})]}),z.jsxs("div",{className:"text-center space-y-2",children:[z.jsx("p",{className:"text-[10px] tracking-widest",style:{color:S},children:A}),t==="unsupported"&&z.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["WebXR immersive-ar not",z.jsx("br",{}),"supported on this device."]}),t==="error"&&z.jsx("p",{className:"text-[7px] text-[#ef444488] leading-loose max-w-xs text-center",children:d}),t==="idle"&&z.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["Point camera at a flat surface",z.jsx("br",{}),"then tap START AR."]})]}),P&&z.jsxs("button",{onClick:me,className:"relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),t==="error"?"> RETRY AR <":"> START AR <"]})]}),R&&z.jsxs(z.Fragment,{children:[!L&&z.jsx("div",{className:"absolute pointer-events-none",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:20},children:t==="plane-found"?z.jsxs("div",{className:"text-center",children:[z.jsx("div",{className:"w-20 h-20 border-4 border-[#10b981] mx-auto",style:{boxShadow:"0 0 24px #10b98166"}}),z.jsx("p",{className:"text-[7px] text-[#10b981] mt-2 tracking-widest",style:{animation:"blink 1.5s ease-in-out infinite"},children:"SURFACE LOCKED"})]}):z.jsxs("div",{className:"text-center",children:[z.jsx("div",{className:"w-14 h-14 border-2 border-[#facc15] mx-auto",style:{boxShadow:"0 0 12px #facc1544",animation:"blink 1s ease-in-out infinite"}}),z.jsx("p",{className:"text-[7px] text-[#facc15] mt-2 tracking-widest",children:"SCANNING..."})]})}),U&&z.jsx("div",{className:"absolute bottom-10 inset-x-0 flex justify-center px-8",style:{zIndex:30,animation:"fadeSlide .4s ease-out"},children:z.jsx("button",{onClick:m,className:"w-full max-w-xs py-5 text-[11px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",style:{boxShadow:"0 0 32px #8b5cf677"},children:"> START GAME <"})}),L&&z.jsx("div",{className:"absolute bottom-10 inset-x-0 text-center",style:{zIndex:30,animation:"fadeSlide .3s ease-out"},children:z.jsx("p",{className:"text-[8px] text-[#ec4899] tracking-widest",style:{animation:"blink 2.2s ease-in-out infinite"},children:"TAP RED ROCKS BEFORE THEY HIT YOU"})}),w&&z.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-4 px-8",style:{zIndex:50,backgroundColor:"rgba(10,1,24,.82)",animation:"fadeSlide .5s ease-out"},children:[z.jsx("p",{className:"text-[22px] tracking-widest text-[#ef4444]",children:"DEFEATED"}),z.jsxs("div",{className:"text-center space-y-2",children:[z.jsxs("p",{className:"text-[10px] text-[#ec4899] tracking-widest",children:["KILLS: ",i]}),z.jsxs("p",{className:"text-[8px] text-[#facc15] tracking-widest",children:["WAVE REACHED: ",a]})]}),z.jsxs("button",{onClick:async()=>{y(),await new Promise(W=>setTimeout(W,80)),me()},className:"mt-2 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors relative",children:[z.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),z.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> RETRY <"]}),z.jsx("button",{onClick:ge,className:"py-2 px-5 text-[8px] border-2 border-white/30 text-white/70 hover:text-white transition-colors",children:"EXIT TO MISSION"})]})]})]})}function NR(s){const e=K.useRef(null),t=K.useRef(!1);K.useEffect(()=>{const i=new Audio;i.src=s,i.loop=!0,i.volume=.35,i.preload="auto",e.current=i;const a=()=>{};i.addEventListener("error",a);const o=()=>{t.current||i.play().then(()=>{t.current=!0}).catch(()=>{})};return i.play().then(()=>{t.current=!0}).catch(()=>{document.addEventListener("click",o,{once:!0}),document.addEventListener("touchstart",o,{once:!0}),document.addEventListener("keydown",o,{once:!0})}),()=>{i.pause(),i.removeEventListener("error",a),i.src="",document.removeEventListener("click",o),document.removeEventListener("touchstart",o),document.removeEventListener("keydown",o)}},[s])}const LR="/assets/bmusic-DkBO5UAz.mp3";function IR(){return NR(LR),null}function DR(){return z.jsxs(DS,{children:[z.jsx(IR,{}),z.jsxs(cS,{children:[z.jsx(Iu,{path:"/",element:z.jsx(qS,{})}),z.jsx(Iu,{path:"/mission",element:z.jsx(KS,{})}),z.jsx(Iu,{path:"/ar",element:z.jsx(PR,{})})]})]})}const b_=document.getElementById("root");if(!b_)throw new Error("Root element #root not found");hy.createRoot(b_).render(z.jsx(DR,{}));export{EE as $,BR as A,Nn as B,Pt as C,H0 as D,ui as E,WR as F,VR as G,f_ as H,zR as I,CE as J,Td as K,Ko as L,HR as M,Ql as N,mn as O,$R as P,Ds as Q,Xd as R,si as S,UR as T,Uo as U,yt as V,ai as W,kR as X,sp as Y,u_ as Z,GR as _,OR as a,Xu as a0,wh as a1,Ku as a2,kn as a3,ec as a4,Qu as a5,oc as a6,Nt as a7,rs as a8,qo as a9,Cr as aa,Pr as ab,FR as b,YR as c,$u as d,XR as e,bt as f,Y as g,b0 as h,jR as i,qR as j,_E as k,Rs as l,Zf as m,wM as n,jn as o,On as p,$d as q,yr as r,Vu as s,as as t,c_ as u,Ch as v,Zi as w,Qh as x,qt as y,Ln as z};
