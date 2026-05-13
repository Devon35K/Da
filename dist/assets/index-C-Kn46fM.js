(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var Cf={exports:{}},so={},Pf={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Ox(){if(cg)return _t;cg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(F,Q,be){this.props=F,this.context=Q,this.refs=b,this.updater=be||x}y.prototype.isReactComponent={},y.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function T(F,Q,be){this.props=F,this.context=Q,this.refs=b,this.updater=be||x}var R=T.prototype=new S;R.constructor=T,M(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(F,Q,be){var Oe,De={},oe=null,_e=null;if(Q!=null)for(Oe in Q.ref!==void 0&&(_e=Q.ref),Q.key!==void 0&&(oe=""+Q.key),Q)U.call(Q,Oe)&&!O.hasOwnProperty(Oe)&&(De[Oe]=Q[Oe]);var de=arguments.length-2;if(de===1)De.children=be;else if(1<de){for(var Ne=Array(de),ze=0;ze<de;ze++)Ne[ze]=arguments[ze+2];De.children=Ne}if(F&&F.defaultProps)for(Oe in de=F.defaultProps,de)De[Oe]===void 0&&(De[Oe]=de[Oe]);return{$$typeof:r,type:F,key:oe,ref:_e,props:De,_owner:N.current}}function I(F,Q){return{$$typeof:r,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function k(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return Q[be]})}var Z=/\/+/g;function ce(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):Q.toString(36)}function fe(F,Q,be,Oe,De){var oe=typeof F;(oe==="undefined"||oe==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(oe){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case r:case e:_e=!0}}if(_e)return _e=F,De=De(_e),F=Oe===""?"."+ce(_e,0):Oe,P(De)?(be="",F!=null&&(be=F.replace(Z,"$&/")+"/"),fe(De,Q,be,"",function(ze){return ze})):De!=null&&(V(De)&&(De=I(De,be+(!De.key||_e&&_e.key===De.key?"":(""+De.key).replace(Z,"$&/")+"/")+F)),Q.push(De)),1;if(_e=0,Oe=Oe===""?".":Oe+":",P(F))for(var de=0;de<F.length;de++){oe=F[de];var Ne=Oe+ce(oe,de);_e+=fe(oe,Q,be,Ne,De)}else if(Ne=m(F),typeof Ne=="function")for(F=Ne.call(F),de=0;!(oe=F.next()).done;)oe=oe.value,Ne=Oe+ce(oe,de++),_e+=fe(oe,Q,be,Ne,De);else if(oe==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return _e}function B(F,Q,be){if(F==null)return F;var Oe=[],De=0;return fe(F,Oe,"","",function(oe){return Q.call(be,oe,De++)}),Oe}function W(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(be){(F._status===0||F._status===-1)&&(F._status=1,F._result=be)},function(be){(F._status===0||F._status===-1)&&(F._status=2,F._result=be)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var G={current:null},$={transition:null},te={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:$,ReactCurrentOwner:N};function re(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:B,forEach:function(F,Q,be){B(F,function(){Q.apply(this,arguments)},be)},count:function(F){var Q=0;return B(F,function(){Q++}),Q},toArray:function(F){return B(F,function(Q){return Q})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=T,_t.StrictMode=i,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,_t.act=re,_t.cloneElement=function(F,Q,be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Oe=M({},F.props),De=F.key,oe=F.ref,_e=F._owner;if(Q!=null){if(Q.ref!==void 0&&(oe=Q.ref,_e=N.current),Q.key!==void 0&&(De=""+Q.key),F.type&&F.type.defaultProps)var de=F.type.defaultProps;for(Ne in Q)U.call(Q,Ne)&&!O.hasOwnProperty(Ne)&&(Oe[Ne]=Q[Ne]===void 0&&de!==void 0?de[Ne]:Q[Ne])}var Ne=arguments.length-2;if(Ne===1)Oe.children=be;else if(1<Ne){de=Array(Ne);for(var ze=0;ze<Ne;ze++)de[ze]=arguments[ze+2];Oe.children=de}return{$$typeof:r,type:F.type,key:De,ref:oe,props:Oe,_owner:_e}},_t.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},_t.createElement=w,_t.createFactory=function(F){var Q=w.bind(null,F);return Q.type=F,Q},_t.createRef=function(){return{current:null}},_t.forwardRef=function(F){return{$$typeof:f,render:F}},_t.isValidElement=V,_t.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:W}},_t.memo=function(F,Q){return{$$typeof:h,type:F,compare:Q===void 0?null:Q}},_t.startTransition=function(F){var Q=$.transition;$.transition={};try{F()}finally{$.transition=Q}},_t.unstable_act=re,_t.useCallback=function(F,Q){return G.current.useCallback(F,Q)},_t.useContext=function(F){return G.current.useContext(F)},_t.useDebugValue=function(){},_t.useDeferredValue=function(F){return G.current.useDeferredValue(F)},_t.useEffect=function(F,Q){return G.current.useEffect(F,Q)},_t.useId=function(){return G.current.useId()},_t.useImperativeHandle=function(F,Q,be){return G.current.useImperativeHandle(F,Q,be)},_t.useInsertionEffect=function(F,Q){return G.current.useInsertionEffect(F,Q)},_t.useLayoutEffect=function(F,Q){return G.current.useLayoutEffect(F,Q)},_t.useMemo=function(F,Q){return G.current.useMemo(F,Q)},_t.useReducer=function(F,Q,be){return G.current.useReducer(F,Q,be)},_t.useRef=function(F){return G.current.useRef(F)},_t.useState=function(F){return G.current.useState(F)},_t.useSyncExternalStore=function(F,Q,be){return G.current.useSyncExternalStore(F,Q,be)},_t.useTransition=function(){return G.current.useTransition()},_t.version="18.3.1",_t}var fg;function vh(){return fg||(fg=1,Pf.exports=Ox()),Pf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function kx(){if(dg)return so;dg=1;var r=vh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var g,v={},m=null,x=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(x=d.ref);for(g in d)i.call(d,g)&&!o.hasOwnProperty(g)&&(v[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:x,props:v,_owner:a.current}}return so.Fragment=t,so.jsx=u,so.jsxs=u,so}var hg;function Bx(){return hg||(hg=1,Cf.exports=kx()),Cf.exports}var q=Bx(),Vl={},Lf={exports:{}},Hn={},Nf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function zx(){return pg||(pg=1,(function(r){function e($,te){var re=$.length;$.push(te);e:for(;0<re;){var F=re-1>>>1,Q=$[F];if(0<a(Q,te))$[F]=te,$[re]=Q,re=F;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var te=$[0],re=$.pop();if(re!==te){$[0]=re;e:for(var F=0,Q=$.length,be=Q>>>1;F<be;){var Oe=2*(F+1)-1,De=$[Oe],oe=Oe+1,_e=$[oe];if(0>a(De,re))oe<Q&&0>a(_e,De)?($[F]=_e,$[oe]=re,F=oe):($[F]=De,$[Oe]=re,F=Oe);else if(oe<Q&&0>a(_e,re))$[F]=_e,$[oe]=re,F=oe;else break e}}return te}function a($,te){var re=$.sortIndex-te.sortIndex;return re!==0?re:$.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var d=[],h=[],g=1,v=null,m=3,x=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R($){for(var te=t(h);te!==null;){if(te.callback===null)i(h);else if(te.startTime<=$)i(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function P($){if(b=!1,R($),!M)if(t(d)!==null)M=!0,W(U);else{var te=t(h);te!==null&&G(P,te.startTime-$)}}function U($,te){M=!1,b&&(b=!1,S(w),w=-1),x=!0;var re=m;try{for(R(te),v=t(d);v!==null&&(!(v.expirationTime>te)||$&&!k());){var F=v.callback;if(typeof F=="function"){v.callback=null,m=v.priorityLevel;var Q=F(v.expirationTime<=te);te=r.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(d)&&i(d),R(te)}else i(d);v=t(d)}if(v!==null)var be=!0;else{var Oe=t(h);Oe!==null&&G(P,Oe.startTime-te),be=!1}return be}finally{v=null,m=re,x=!1}}var N=!1,O=null,w=-1,I=5,V=-1;function k(){return!(r.unstable_now()-V<I)}function Z(){if(O!==null){var $=r.unstable_now();V=$;var te=!0;try{te=O(!0,$)}finally{te?ce():(N=!1,O=null)}}else N=!1}var ce;if(typeof T=="function")ce=function(){T(Z)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,B=fe.port2;fe.port1.onmessage=Z,ce=function(){B.postMessage(null)}}else ce=function(){y(Z,0)};function W($){O=$,N||(N=!0,ce())}function G($,te){w=y(function(){$(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_continueExecution=function(){M||x||(M=!0,W(U))},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function($){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var re=m;m=te;try{return $()}finally{m=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function($,te){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var re=m;m=$;try{return te()}finally{m=re}},r.unstable_scheduleCallback=function($,te,re){var F=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=re+Q,$={id:g++,callback:te,priorityLevel:$,startTime:re,expirationTime:Q,sortIndex:-1},re>F?($.sortIndex=re,e(h,$),t(d)===null&&$===t(h)&&(b?(S(w),w=-1):b=!0,G(P,re-F))):($.sortIndex=Q,e(d,$),M||x||(M=!0,W(U))),$},r.unstable_shouldYield=k,r.unstable_wrapCallback=function($){var te=m;return function(){var re=m;m=te;try{return $.apply(this,arguments)}finally{m=re}}}})(If)),If}var mg;function Vx(){return mg||(mg=1,Nf.exports=zx()),Nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Hx(){if(gg)return Hn;gg=1;var r=vh(),e=Vx();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,s){u(n,s),u(n+"Capture",s)}function u(n,s){for(a[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(n){return d.call(v,n)?!0:d.call(g,n)?!1:h.test(n)?v[n]=!0:(g[n]=!0,!1)}function x(n,s,l,c){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,s,l,c){if(s===null||typeof s>"u"||x(n,s,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(n,s,l,c,p,_,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=_,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];y[s]=new b(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(S,T);y[s]=new b(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(S,T);y[s]=new b(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(S,T);y[s]=new b(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,s,l,c){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,c)&&(l=null),c||p===null?m(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,c=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?n.setAttributeNS(c,s,l):n.setAttribute(s,l))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),$=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,F;function Q(n){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+n}var be=!1;function Oe(n,s){if(!n||be)return"";be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var c=ue}Reflect.construct(n,[],s)}else{try{s.call()}catch(ue){c=ue}n.call(s.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var p=ue.stack.split(`
`),_=c.stack.split(`
`),A=p.length-1,D=_.length-1;1<=A&&0<=D&&p[A]!==_[D];)D--;for(;1<=A&&0<=D;A--,D--)if(p[A]!==_[D]){if(A!==1||D!==1)do if(A--,D--,0>D||p[A]!==_[D]){var z=`
`+p[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=D);break}}}finally{be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Q(n):""}function De(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=Oe(n.type,!1),n;case 11:return n=Oe(n.type.render,!1),n;case 1:return n=Oe(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case N:return"Portal";case I:return"Profiler";case w:return"StrictMode";case ce:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case Z:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case B:return s=n.displayName||null,s!==null?s:oe(n.type)||"Memo";case W:s=n._payload,n=n._init;try{return oe(n(s))}catch{}}return null}function _e(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(s);case 8:return s===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ze(n){var s=Ne(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function et(n){n._valueTracker||(n._valueTracker=ze(n))}function kt(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==l?(s.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bt(n,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Dt(n,s){var l=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;l=de(s.value!=null?s.value:l),n._wrapperState={initialChecked:c,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function dt(n,s){s=s.checked,s!=null&&R(n,"checked",s,!1)}function Kt(n,s){dt(n,s);var l=de(s.value),c=s.type;if(l!=null)c==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?vn(n,s.type,l):s.hasOwnProperty("defaultValue")&&vn(n,s.type,de(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Bt(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function vn(n,s,l){(s!=="number"||ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var X=Array.isArray;function zt(n,s,l,c){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&c&&(n[l].defaultSelected=!0)}else{for(l=""+de(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function ht(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pt(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(X(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:de(l)}}function Ue(n,s){var l=de(s.value),c=de(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),c!=null&&(n.defaultValue=""+c)}function Gt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?L(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,c,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,c,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function ve(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ie.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ee[s]=Ee[n]})});function he(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+s).trim():s+"px"}function ge(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=he(l,s[l],c);l==="float"&&(l="cssFloat"),c?n.setProperty(l,p):n[l]=p}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(n,s){if(s){if(ke[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Re(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function rt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,mt=null,H=null;function Ae(n){if(n=Wa(n)){if(typeof at!="function")throw Error(t(280));var s=n.stateNode;s&&(s=nl(s),at(n.stateNode,n.type,s))}}function pe(n){mt?H?H.push(n):H=[n]:mt=n}function Be(){if(mt){var n=mt,s=H;if(H=mt=null,Ae(n),s)for(n=0;n<s.length;n++)Ae(s[n])}}function Pe(n,s){return n(s)}function xe(){}var $e=!1;function ot(n,s,l){if($e)return n(s,l);$e=!0;try{return Pe(n,s,l)}finally{$e=!1,(mt!==null||H!==null)&&(xe(),Be())}}function Ft(n,s){var l=n.stateNode;if(l===null)return null;var c=nl(l);if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var At=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){At=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{At=!1}function ei(n,s,l,c,p,_,A,D,z){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(Se){this.onError(Se)}}var Gi=!1,Ms=null,Xr=!1,Es=null,Wi={onError:function(n){Gi=!0,Ms=n}};function Ea(n,s,l,c,p,_,A,D,z){Gi=!1,Ms=null,ei.apply(Wi,arguments)}function Bo(n,s,l,c,p,_,A,D,z){if(Ea.apply(this,arguments),Gi){if(Gi){var ue=Ms;Gi=!1,Ms=null}else throw Error(t(198));Xr||(Xr=!0,Es=ue)}}function Ai(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function jr(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function wa(n){if(Ai(n)!==n)throw Error(t(188))}function ws(n){var s=n.alternate;if(!s){if(s=Ai(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,c=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return wa(p),n;if(_===c)return wa(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var A=!1,D=p.child;D;){if(D===l){A=!0,l=p,c=_;break}if(D===c){A=!0,c=p,l=_;break}D=D.sibling}if(!A){for(D=_.child;D;){if(D===l){A=!0,l=_,c=p;break}if(D===c){A=!0,c=_,l=p;break}D=D.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function Ta(n){return n=ws(n),n!==null?ba(n):null}function ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=ba(n);if(s!==null)return s;n=n.sibling}return null}var zo=e.unstable_scheduleCallback,Vo=e.unstable_cancelCallback,Zu=e.unstable_shouldYield,Ju=e.unstable_requestPaint,Zt=e.unstable_now,Qu=e.unstable_getCurrentPriorityLevel,Aa=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,le=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,Le=null;function We(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:lt,Ye=Math.log,Je=Math.LN2;function lt(n){return n>>>=0,n===0?32:31-(Ye(n)/Je|0)|0}var ut=64,Ke=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vt(n,s){var l=n.pendingLanes;if(l===0)return 0;var c=0,p=n.suspendedLanes,_=n.pingedLanes,A=l&268435455;if(A!==0){var D=A&~p;D!==0?c=Et(D):(_&=A,_!==0&&(c=Et(_)))}else A=l&~p,A!==0?c=Et(A):_!==0&&(c=Et(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)l=31-Ce(s),p=1<<l,c|=n[l],s&=~p;return c}function $t(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(n,s){for(var l=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var A=31-Ce(_),D=1<<A,z=p[A];z===-1?((D&l)===0||(D&c)!==0)&&(p[A]=$t(D,s)):z<=s&&(n.expiredLanes|=D),_&=~D}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function He(){var n=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),n}function _n(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function gt(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Ce(s),n[s]=l}function Un(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ce(l),_=1<<p;s[p]=0,c[p]=-1,n[p]=-1,l&=~_}}function Fn(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var c=31-Ce(l),p=1<<c;p&s|n[c]&s&&(n[c]|=s),l&=~p}}var vt=0;function Xi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ct,Wt,fi,Nt,di,Ri=!1,$r=[],gr=null,vr=null,_r=null,Ra=new Map,Ca=new Map,xr=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(n,s){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Ra.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(s.pointerId)}}function Pa(n,s,l,c,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Wa(s),s!==null&&Wt(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function a_(n,s,l,c,p){switch(s){case"focusin":return gr=Pa(gr,n,s,l,c,p),!0;case"dragenter":return vr=Pa(vr,n,s,l,c,p),!0;case"mouseover":return _r=Pa(_r,n,s,l,c,p),!0;case"pointerover":var _=p.pointerId;return Ra.set(_,Pa(Ra.get(_)||null,n,s,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,Ca.set(_,Pa(Ca.get(_)||null,n,s,l,c,p)),!0}return!1}function Yh(n){var s=Yr(n.target);if(s!==null){var l=Ai(s);if(l!==null){if(s=l.tag,s===13){if(s=jr(l),s!==null){n.blockedOn=s,di(n.priority,function(){fi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ho(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=tc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);we=c,l.target.dispatchEvent(c),we=null}else return s=Wa(l),s!==null&&Wt(s),n.blockedOn=l,!1;s.shift()}return!0}function qh(n,s,l){Ho(n)&&l.delete(s)}function o_(){Ri=!1,gr!==null&&Ho(gr)&&(gr=null),vr!==null&&Ho(vr)&&(vr=null),_r!==null&&Ho(_r)&&(_r=null),Ra.forEach(qh),Ca.forEach(qh)}function La(n,s){n.blockedOn===s&&(n.blockedOn=null,Ri||(Ri=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,o_)))}function Na(n){function s(p){return La(p,n)}if(0<$r.length){La($r[0],n);for(var l=1;l<$r.length;l++){var c=$r[l];c.blockedOn===n&&(c.blockedOn=null)}}for(gr!==null&&La(gr,n),vr!==null&&La(vr,n),_r!==null&&La(_r,n),Ra.forEach(s),Ca.forEach(s),l=0;l<xr.length;l++)c=xr[l],c.blockedOn===n&&(c.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)Yh(l),l.blockedOn===null&&xr.shift()}var Ts=P.ReactCurrentBatchConfig,Go=!0;function l_(n,s,l,c){var p=vt,_=Ts.transition;Ts.transition=null;try{vt=1,ec(n,s,l,c)}finally{vt=p,Ts.transition=_}}function u_(n,s,l,c){var p=vt,_=Ts.transition;Ts.transition=null;try{vt=4,ec(n,s,l,c)}finally{vt=p,Ts.transition=_}}function ec(n,s,l,c){if(Go){var p=tc(n,s,l,c);if(p===null)_c(n,s,c,Wo,l),$h(n,c);else if(a_(p,n,s,l,c))c.stopPropagation();else if($h(n,c),s&4&&-1<s_.indexOf(n)){for(;p!==null;){var _=Wa(p);if(_!==null&&Ct(_),_=tc(n,s,l,c),_===null&&_c(n,s,c,Wo,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else _c(n,s,c,null,l)}}var Wo=null;function tc(n,s,l,c){if(Wo=null,n=rt(c),n=Yr(n),n!==null)if(s=Ai(n),s===null)n=null;else if(l=s.tag,l===13){if(n=jr(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Wo=n,null}function Kh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Aa:return 1;case C:return 4;case Y:case le:return 16;case ie:return 536870912;default:return 16}default:return 16}}var yr=null,nc=null,Xo=null;function Zh(){if(Xo)return Xo;var n,s=nc,l=s.length,c,p="value"in yr?yr.value:yr.textContent,_=p.length;for(n=0;n<l&&s[n]===p[n];n++);var A=l-n;for(c=1;c<=A&&s[l-c]===p[_-c];c++);return Xo=p.slice(n,1<c?1-c:void 0)}function jo(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function $o(){return!0}function Jh(){return!1}function Xn(n){function s(l,c,p,_,A){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(_):_[D]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?$o:Jh,this.isPropagationStopped=Jh,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),s}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Xn(bs),Ia=re({},bs,{view:0,detail:0}),c_=Xn(Ia),rc,sc,Da,Yo=re({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Da&&(Da&&n.type==="mousemove"?(rc=n.screenX-Da.screenX,sc=n.screenY-Da.screenY):sc=rc=0,Da=n),rc)},movementY:function(n){return"movementY"in n?n.movementY:sc}}),Qh=Xn(Yo),f_=re({},Yo,{dataTransfer:0}),d_=Xn(f_),h_=re({},Ia,{relatedTarget:0}),ac=Xn(h_),p_=re({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=Xn(p_),g_=re({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),v_=Xn(g_),__=re({},bs,{data:0}),ep=Xn(__),x_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=S_[n])?!!s[n]:!1}function oc(){return M_}var E_=re({},Ia,{key:function(n){if(n.key){var s=x_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=jo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?y_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?jo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?jo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),w_=Xn(E_),T_=re({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=Xn(T_),b_=re({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),A_=Xn(b_),R_=re({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=Xn(R_),P_=re({},Yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=Xn(P_),N_=[9,13,27,32],lc=f&&"CompositionEvent"in window,Ua=null;f&&"documentMode"in document&&(Ua=document.documentMode);var I_=f&&"TextEvent"in window&&!Ua,np=f&&(!lc||Ua&&8<Ua&&11>=Ua),ip=" ",rp=!1;function sp(n,s){switch(n){case"keyup":return N_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function D_(n,s){switch(n){case"compositionend":return ap(s);case"keypress":return s.which!==32?null:(rp=!0,ip);case"textInput":return n=s.data,n===ip&&rp?null:n;default:return null}}function U_(n,s){if(As)return n==="compositionend"||!lc&&sp(n,s)?(n=Zh(),Xo=nc=yr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return np&&s.locale!=="ko"?null:s.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!F_[n.type]:s==="textarea"}function lp(n,s,l,c){pe(c),s=Qo(s,"onChange"),0<s.length&&(l=new ic("onChange","change",null,l,c),n.push({event:l,listeners:s}))}var Fa=null,Oa=null;function O_(n){bp(n,0)}function qo(n){var s=Ns(n);if(kt(s))return n}function k_(n,s){if(n==="change")return s}var up=!1;if(f){var uc;if(f){var cc="oninput"in document;if(!cc){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),cc=typeof cp.oninput=="function"}uc=cc}else uc=!1;up=uc&&(!document.documentMode||9<document.documentMode)}function fp(){Fa&&(Fa.detachEvent("onpropertychange",dp),Oa=Fa=null)}function dp(n){if(n.propertyName==="value"&&qo(Oa)){var s=[];lp(s,Oa,n,rt(n)),ot(O_,s)}}function B_(n,s,l){n==="focusin"?(fp(),Fa=s,Oa=l,Fa.attachEvent("onpropertychange",dp)):n==="focusout"&&fp()}function z_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qo(Oa)}function V_(n,s){if(n==="click")return qo(s)}function H_(n,s){if(n==="input"||n==="change")return qo(s)}function G_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var hi=typeof Object.is=="function"?Object.is:G_;function ka(n,s){if(hi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!d.call(s,p)||!hi(n[p],s[p]))return!1}return!0}function hp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pp(n,s){var l=hp(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=s&&c>=s)return{node:l,offset:s-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=hp(l)}}function mp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?mp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function gp(){for(var n=window,s=ft();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=ft(n.document)}return s}function fc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function W_(n){var s=gp(),l=n.focusedElem,c=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&mp(l.ownerDocument.documentElement,l)){if(c!==null&&fc(l)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!n.extend&&_>c&&(p=c,c=_,_=p),p=pp(l,_);var A=pp(l,c);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),_>c?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var X_=f&&"documentMode"in document&&11>=document.documentMode,Rs=null,dc=null,Ba=null,hc=!1;function vp(n,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hc||Rs==null||Rs!==ft(c)||(c=Rs,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ba&&ka(Ba,c)||(Ba=c,c=Qo(dc,"onSelect"),0<c.length&&(s=new ic("onSelect","select",null,s,l),n.push({event:s,listeners:c}),s.target=Rs)))}function Ko(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Cs={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},pc={},_p={};f&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Zo(n){if(pc[n])return pc[n];if(!Cs[n])return n;var s=Cs[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in _p)return pc[n]=s[l];return n}var xp=Zo("animationend"),yp=Zo("animationiteration"),Sp=Zo("animationstart"),Mp=Zo("transitionend"),Ep=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,s){Ep.set(n,s),o(s,[n])}for(var mc=0;mc<wp.length;mc++){var gc=wp[mc],j_=gc.toLowerCase(),$_=gc[0].toUpperCase()+gc.slice(1);Sr(j_,"on"+$_)}Sr(xp,"onAnimationEnd"),Sr(yp,"onAnimationIteration"),Sr(Sp,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Mp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Tp(n,s,l){var c=n.type||"unknown-event";n.currentTarget=l,Bo(c,s,void 0,n),n.currentTarget=null}function bp(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var A=c.length-1;0<=A;A--){var D=c[A],z=D.instance,ue=D.currentTarget;if(D=D.listener,z!==_&&p.isPropagationStopped())break e;Tp(p,D,ue),_=z}else for(A=0;A<c.length;A++){if(D=c[A],z=D.instance,ue=D.currentTarget,D=D.listener,z!==_&&p.isPropagationStopped())break e;Tp(p,D,ue),_=z}}}if(Xr)throw n=Es,Xr=!1,Es=null,n}function Xt(n,s){var l=s[wc];l===void 0&&(l=s[wc]=new Set);var c=n+"__bubble";l.has(c)||(Ap(s,n,2,!1),l.add(c))}function vc(n,s,l){var c=0;s&&(c|=4),Ap(l,n,c,s)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Va(n){if(!n[Jo]){n[Jo]=!0,i.forEach(function(l){l!=="selectionchange"&&(Y_.has(l)||vc(l,!1,n),vc(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Jo]||(s[Jo]=!0,vc("selectionchange",!1,s))}}function Ap(n,s,l,c){switch(Kh(s)){case 1:var p=l_;break;case 4:p=u_;break;default:p=ec}l=p.bind(null,s,l,n),p=void 0,!At||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function _c(n,s,l,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var D=c.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;A=A.return}for(;D!==null;){if(A=Yr(D),A===null)return;if(z=A.tag,z===5||z===6){c=_=A;continue e}D=D.parentNode}}c=c.return}ot(function(){var ue=_,Se=rt(l),Me=[];e:{var ye=Ep.get(n);if(ye!==void 0){var Ge=ic,je=n;switch(n){case"keypress":if(jo(l)===0)break e;case"keydown":case"keyup":Ge=w_;break;case"focusin":je="focus",Ge=ac;break;case"focusout":je="blur",Ge=ac;break;case"beforeblur":case"afterblur":Ge=ac;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=A_;break;case xp:case yp:case Sp:Ge=m_;break;case Mp:Ge=C_;break;case"scroll":Ge=c_;break;case"wheel":Ge=L_;break;case"copy":case"cut":case"paste":Ge=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=tp}var qe=(s&4)!==0,rn=!qe&&n==="scroll",ee=qe?ye!==null?ye+"Capture":null:ye;qe=[];for(var j=ue,se;j!==null;){se=j;var Te=se.stateNode;if(se.tag===5&&Te!==null&&(se=Te,ee!==null&&(Te=Ft(j,ee),Te!=null&&qe.push(Ha(j,Te,se)))),rn)break;j=j.return}0<qe.length&&(ye=new Ge(ye,je,null,l,Se),Me.push({event:ye,listeners:qe}))}}if((s&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",ye&&l!==we&&(je=l.relatedTarget||l.fromElement)&&(Yr(je)||je[ji]))break e;if((Ge||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ge?(je=l.relatedTarget||l.toElement,Ge=ue,je=je?Yr(je):null,je!==null&&(rn=Ai(je),je!==rn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ge=null,je=ue),Ge!==je)){if(qe=Qh,Te="onMouseLeave",ee="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(qe=tp,Te="onPointerLeave",ee="onPointerEnter",j="pointer"),rn=Ge==null?ye:Ns(Ge),se=je==null?ye:Ns(je),ye=new qe(Te,j+"leave",Ge,l,Se),ye.target=rn,ye.relatedTarget=se,Te=null,Yr(Se)===ue&&(qe=new qe(ee,j+"enter",je,l,Se),qe.target=se,qe.relatedTarget=rn,Te=qe),rn=Te,Ge&&je)t:{for(qe=Ge,ee=je,j=0,se=qe;se;se=Ps(se))j++;for(se=0,Te=ee;Te;Te=Ps(Te))se++;for(;0<j-se;)qe=Ps(qe),j--;for(;0<se-j;)ee=Ps(ee),se--;for(;j--;){if(qe===ee||ee!==null&&qe===ee.alternate)break t;qe=Ps(qe),ee=Ps(ee)}qe=null}else qe=null;Ge!==null&&Rp(Me,ye,Ge,qe,!1),je!==null&&rn!==null&&Rp(Me,rn,je,qe,!0)}}e:{if(ye=ue?Ns(ue):window,Ge=ye.nodeName&&ye.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&ye.type==="file")var Ze=k_;else if(op(ye))if(up)Ze=H_;else{Ze=z_;var tt=B_}else(Ge=ye.nodeName)&&Ge.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ze=V_);if(Ze&&(Ze=Ze(n,ue))){lp(Me,Ze,l,Se);break e}tt&&tt(n,ye,ue),n==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&vn(ye,"number",ye.value)}switch(tt=ue?Ns(ue):window,n){case"focusin":(op(tt)||tt.contentEditable==="true")&&(Rs=tt,dc=ue,Ba=null);break;case"focusout":Ba=dc=Rs=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,vp(Me,l,Se);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":vp(Me,l,Se)}var nt;if(lc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else As?sp(n,l)&&(st="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(np&&l.locale!=="ko"&&(As||st!=="onCompositionStart"?st==="onCompositionEnd"&&As&&(nt=Zh()):(yr=Se,nc="value"in yr?yr.value:yr.textContent,As=!0)),tt=Qo(ue,st),0<tt.length&&(st=new ep(st,n,null,l,Se),Me.push({event:st,listeners:tt}),nt?st.data=nt:(nt=ap(l),nt!==null&&(st.data=nt)))),(nt=I_?D_(n,l):U_(n,l))&&(ue=Qo(ue,"onBeforeInput"),0<ue.length&&(Se=new ep("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:ue}),Se.data=nt))}bp(Me,s)})}function Ha(n,s,l){return{instance:n,listener:s,currentTarget:l}}function Qo(n,s){for(var l=s+"Capture",c=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ft(n,l),_!=null&&c.unshift(Ha(n,_,p)),_=Ft(n,s),_!=null&&c.push(Ha(n,_,p))),n=n.return}return c}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rp(n,s,l,c,p){for(var _=s._reactName,A=[];l!==null&&l!==c;){var D=l,z=D.alternate,ue=D.stateNode;if(z!==null&&z===c)break;D.tag===5&&ue!==null&&(D=ue,p?(z=Ft(l,_),z!=null&&A.unshift(Ha(l,z,D))):p||(z=Ft(l,_),z!=null&&A.push(Ha(l,z,D)))),l=l.return}A.length!==0&&n.push({event:s,listeners:A})}var q_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function Cp(n){return(typeof n=="string"?n:""+n).replace(q_,`
`).replace(K_,"")}function el(n,s,l){if(s=Cp(s),Cp(n)!==s&&l)throw Error(t(425))}function tl(){}var xc=null,yc=null;function Sc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,J_=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(n){return Pp.resolve(null).then(n).catch(Q_)}:Mc;function Q_(n){setTimeout(function(){throw n})}function Ec(n,s){var l=s,c=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){n.removeChild(p),Na(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Na(s)}function Mr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Lp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Ls,Ga="__reactProps$"+Ls,ji="__reactContainer$"+Ls,wc="__reactEvents$"+Ls,ex="__reactListeners$"+Ls,tx="__reactHandles$"+Ls;function Yr(n){var s=n[Ci];if(s)return s;for(var l=n.parentNode;l;){if(s=l[ji]||l[Ci]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Lp(n);n!==null;){if(l=n[Ci])return l;n=Lp(n)}return s}n=l,l=n.parentNode}return null}function Wa(n){return n=n[Ci]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function nl(n){return n[Ga]||null}var Tc=[],Is=-1;function Er(n){return{current:n}}function jt(n){0>Is||(n.current=Tc[Is],Tc[Is]=null,Is--)}function Ht(n,s){Is++,Tc[Is]=n.current,n.current=s}var wr={},Mn=Er(wr),On=Er(!1),qr=wr;function Ds(n,s){var l=n.type.contextTypes;if(!l)return wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function kn(n){return n=n.childContextTypes,n!=null}function il(){jt(On),jt(Mn)}function Np(n,s,l){if(Mn.current!==wr)throw Error(t(168));Ht(Mn,s),Ht(On,l)}function Ip(n,s,l){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,_e(n)||"Unknown",p));return re({},l,c)}function rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,qr=Mn.current,Ht(Mn,n),Ht(On,On.current),!0}function Dp(n,s,l){var c=n.stateNode;if(!c)throw Error(t(169));l?(n=Ip(n,s,qr),c.__reactInternalMemoizedMergedChildContext=n,jt(On),jt(Mn),Ht(Mn,n)):jt(On),Ht(On,l)}var $i=null,sl=!1,bc=!1;function Up(n){$i===null?$i=[n]:$i.push(n)}function nx(n){sl=!0,Up(n)}function Tr(){if(!bc&&$i!==null){bc=!0;var n=0,s=vt;try{var l=$i;for(vt=1;n<l.length;n++){var c=l[n];do c=c(!0);while(c!==null)}$i=null,sl=!1}catch(p){throw $i!==null&&($i=$i.slice(n+1)),zo(Aa,Tr),p}finally{vt=s,bc=!1}}return null}var Us=[],Fs=0,al=null,ol=0,ti=[],ni=0,Kr=null,Yi=1,qi="";function Zr(n,s){Us[Fs++]=ol,Us[Fs++]=al,al=n,ol=s}function Fp(n,s,l){ti[ni++]=Yi,ti[ni++]=qi,ti[ni++]=Kr,Kr=n;var c=Yi;n=qi;var p=32-Ce(c)-1;c&=~(1<<p),l+=1;var _=32-Ce(s)+p;if(30<_){var A=p-p%5;_=(c&(1<<A)-1).toString(32),c>>=A,p-=A,Yi=1<<32-Ce(s)+p|l<<p|c,qi=_+n}else Yi=1<<_|l<<p|c,qi=n}function Ac(n){n.return!==null&&(Zr(n,1),Fp(n,1,0))}function Rc(n){for(;n===al;)al=Us[--Fs],Us[Fs]=null,ol=Us[--Fs],Us[Fs]=null;for(;n===Kr;)Kr=ti[--ni],ti[ni]=null,qi=ti[--ni],ti[ni]=null,Yi=ti[--ni],ti[ni]=null}var jn=null,$n=null,Yt=!1,pi=null;function Op(n,s){var l=ai(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function kp(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,jn=n,$n=Mr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,jn=n,$n=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Kr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ai(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,jn=n,$n=null,!0):!1;default:return!1}}function Cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pc(n){if(Yt){var s=$n;if(s){var l=s;if(!kp(n,s)){if(Cc(n))throw Error(t(418));s=Mr(l.nextSibling);var c=jn;s&&kp(n,s)?Op(c,l):(n.flags=n.flags&-4097|2,Yt=!1,jn=n)}}else{if(Cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,jn=n}}}function Bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function ll(n){if(n!==jn)return!1;if(!Yt)return Bp(n),Yt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Sc(n.type,n.memoizedProps)),s&&(s=$n)){if(Cc(n))throw zp(),Error(t(418));for(;s;)Op(n,s),s=Mr(s.nextSibling)}if(Bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){$n=Mr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}$n=null}}else $n=jn?Mr(n.stateNode.nextSibling):null;return!0}function zp(){for(var n=$n;n;)n=Mr(n.nextSibling)}function Os(){$n=jn=null,Yt=!1}function Lc(n){pi===null?pi=[n]:pi.push(n)}var ix=P.ReactCurrentBatchConfig;function Xa(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,n));var p=c,_=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(A){var D=p.refs;A===null?delete D[_]:D[_]=A},s._stringRef=_,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ul(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Vp(n){var s=n._init;return s(n._payload)}function Hp(n){function s(ee,j){if(n){var se=ee.deletions;se===null?(ee.deletions=[j],ee.flags|=16):se.push(j)}}function l(ee,j){if(!n)return null;for(;j!==null;)s(ee,j),j=j.sibling;return null}function c(ee,j){for(ee=new Map;j!==null;)j.key!==null?ee.set(j.key,j):ee.set(j.index,j),j=j.sibling;return ee}function p(ee,j){return ee=Ir(ee,j),ee.index=0,ee.sibling=null,ee}function _(ee,j,se){return ee.index=se,n?(se=ee.alternate,se!==null?(se=se.index,se<j?(ee.flags|=2,j):se):(ee.flags|=2,j)):(ee.flags|=1048576,j)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function D(ee,j,se,Te){return j===null||j.tag!==6?(j=Ef(se,ee.mode,Te),j.return=ee,j):(j=p(j,se),j.return=ee,j)}function z(ee,j,se,Te){var Ze=se.type;return Ze===O?Se(ee,j,se.props.children,Te,se.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===W&&Vp(Ze)===j.type)?(Te=p(j,se.props),Te.ref=Xa(ee,j,se),Te.return=ee,Te):(Te=Il(se.type,se.key,se.props,null,ee.mode,Te),Te.ref=Xa(ee,j,se),Te.return=ee,Te)}function ue(ee,j,se,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=wf(se,ee.mode,Te),j.return=ee,j):(j=p(j,se.children||[]),j.return=ee,j)}function Se(ee,j,se,Te,Ze){return j===null||j.tag!==7?(j=ss(se,ee.mode,Te,Ze),j.return=ee,j):(j=p(j,se),j.return=ee,j)}function Me(ee,j,se){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ef(""+j,ee.mode,se),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return se=Il(j.type,j.key,j.props,null,ee.mode,se),se.ref=Xa(ee,null,j),se.return=ee,se;case N:return j=wf(j,ee.mode,se),j.return=ee,j;case W:var Te=j._init;return Me(ee,Te(j._payload),se)}if(X(j)||te(j))return j=ss(j,ee.mode,se,null),j.return=ee,j;ul(ee,j)}return null}function ye(ee,j,se,Te){var Ze=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ze!==null?null:D(ee,j,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case U:return se.key===Ze?z(ee,j,se,Te):null;case N:return se.key===Ze?ue(ee,j,se,Te):null;case W:return Ze=se._init,ye(ee,j,Ze(se._payload),Te)}if(X(se)||te(se))return Ze!==null?null:Se(ee,j,se,Te,null);ul(ee,se)}return null}function Ge(ee,j,se,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(se)||null,D(j,ee,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return ee=ee.get(Te.key===null?se:Te.key)||null,z(j,ee,Te,Ze);case N:return ee=ee.get(Te.key===null?se:Te.key)||null,ue(j,ee,Te,Ze);case W:var tt=Te._init;return Ge(ee,j,se,tt(Te._payload),Ze)}if(X(Te)||te(Te))return ee=ee.get(se)||null,Se(j,ee,Te,Ze,null);ul(j,Te)}return null}function je(ee,j,se,Te){for(var Ze=null,tt=null,nt=j,st=j=0,mn=null;nt!==null&&st<se.length;st++){nt.index>st?(mn=nt,nt=null):mn=nt.sibling;var Rt=ye(ee,nt,se[st],Te);if(Rt===null){nt===null&&(nt=mn);break}n&&nt&&Rt.alternate===null&&s(ee,nt),j=_(Rt,j,st),tt===null?Ze=Rt:tt.sibling=Rt,tt=Rt,nt=mn}if(st===se.length)return l(ee,nt),Yt&&Zr(ee,st),Ze;if(nt===null){for(;st<se.length;st++)nt=Me(ee,se[st],Te),nt!==null&&(j=_(nt,j,st),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Yt&&Zr(ee,st),Ze}for(nt=c(ee,nt);st<se.length;st++)mn=Ge(nt,ee,st,se[st],Te),mn!==null&&(n&&mn.alternate!==null&&nt.delete(mn.key===null?st:mn.key),j=_(mn,j,st),tt===null?Ze=mn:tt.sibling=mn,tt=mn);return n&&nt.forEach(function(Dr){return s(ee,Dr)}),Yt&&Zr(ee,st),Ze}function qe(ee,j,se,Te){var Ze=te(se);if(typeof Ze!="function")throw Error(t(150));if(se=Ze.call(se),se==null)throw Error(t(151));for(var tt=Ze=null,nt=j,st=j=0,mn=null,Rt=se.next();nt!==null&&!Rt.done;st++,Rt=se.next()){nt.index>st?(mn=nt,nt=null):mn=nt.sibling;var Dr=ye(ee,nt,Rt.value,Te);if(Dr===null){nt===null&&(nt=mn);break}n&&nt&&Dr.alternate===null&&s(ee,nt),j=_(Dr,j,st),tt===null?Ze=Dr:tt.sibling=Dr,tt=Dr,nt=mn}if(Rt.done)return l(ee,nt),Yt&&Zr(ee,st),Ze;if(nt===null){for(;!Rt.done;st++,Rt=se.next())Rt=Me(ee,Rt.value,Te),Rt!==null&&(j=_(Rt,j,st),tt===null?Ze=Rt:tt.sibling=Rt,tt=Rt);return Yt&&Zr(ee,st),Ze}for(nt=c(ee,nt);!Rt.done;st++,Rt=se.next())Rt=Ge(nt,ee,st,Rt.value,Te),Rt!==null&&(n&&Rt.alternate!==null&&nt.delete(Rt.key===null?st:Rt.key),j=_(Rt,j,st),tt===null?Ze=Rt:tt.sibling=Rt,tt=Rt);return n&&nt.forEach(function(Fx){return s(ee,Fx)}),Yt&&Zr(ee,st),Ze}function rn(ee,j,se,Te){if(typeof se=="object"&&se!==null&&se.type===O&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case U:e:{for(var Ze=se.key,tt=j;tt!==null;){if(tt.key===Ze){if(Ze=se.type,Ze===O){if(tt.tag===7){l(ee,tt.sibling),j=p(tt,se.props.children),j.return=ee,ee=j;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===W&&Vp(Ze)===tt.type){l(ee,tt.sibling),j=p(tt,se.props),j.ref=Xa(ee,tt,se),j.return=ee,ee=j;break e}l(ee,tt);break}else s(ee,tt);tt=tt.sibling}se.type===O?(j=ss(se.props.children,ee.mode,Te,se.key),j.return=ee,ee=j):(Te=Il(se.type,se.key,se.props,null,ee.mode,Te),Te.ref=Xa(ee,j,se),Te.return=ee,ee=Te)}return A(ee);case N:e:{for(tt=se.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){l(ee,j.sibling),j=p(j,se.children||[]),j.return=ee,ee=j;break e}else{l(ee,j);break}else s(ee,j);j=j.sibling}j=wf(se,ee.mode,Te),j.return=ee,ee=j}return A(ee);case W:return tt=se._init,rn(ee,j,tt(se._payload),Te)}if(X(se))return je(ee,j,se,Te);if(te(se))return qe(ee,j,se,Te);ul(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,j!==null&&j.tag===6?(l(ee,j.sibling),j=p(j,se),j.return=ee,ee=j):(l(ee,j),j=Ef(se,ee.mode,Te),j.return=ee,ee=j),A(ee)):l(ee,j)}return rn}var ks=Hp(!0),Gp=Hp(!1),cl=Er(null),fl=null,Bs=null,Nc=null;function Ic(){Nc=Bs=fl=null}function Dc(n){var s=cl.current;jt(cl),n._currentValue=s}function Uc(n,s,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===l)break;n=n.return}}function zs(n,s){fl=n,Nc=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Bn=!0),n.firstContext=null)}function ii(n){var s=n._currentValue;if(Nc!==n)if(n={context:n,memoizedValue:s,next:null},Bs===null){if(fl===null)throw Error(t(308));Bs=n,fl.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return s}var Jr=null;function Fc(n){Jr===null?Jr=[n]:Jr.push(n)}function Wp(n,s,l,c){var p=s.interleaved;return p===null?(l.next=l,Fc(s)):(l.next=p.next,p.next=l),s.interleaved=l,Ki(n,c)}function Ki(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var br=!1;function Oc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(n,s,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,Ki(n,l)}return p=c.interleaved,p===null?(s.next=s,Fc(c)):(s.next=p.next,p.next=s),c.interleaved=s,Ki(n,l)}function dl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,l|=c,s.lanes=l,Fn(n,l)}}function jp(n,s){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function hl(n,s,l,c){var p=n.updateQueue;br=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var z=D,ue=z.next;z.next=null,A===null?_=ue:A.next=ue,A=z;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==A&&(D===null?Se.firstBaseUpdate=ue:D.next=ue,Se.lastBaseUpdate=z))}if(_!==null){var Me=p.baseState;A=0,Se=ue=z=null,D=_;do{var ye=D.lane,Ge=D.eventTime;if((c&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var je=n,qe=D;switch(ye=s,Ge=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Me=je.call(Ge,Me,ye);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,ye=typeof je=="function"?je.call(Ge,Me,ye):je,ye==null)break e;Me=re({},Me,ye);break e;case 2:br=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ye=p.effects,ye===null?p.effects=[D]:ye.push(D))}else Ge={eventTime:Ge,lane:ye,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(ue=Se=Ge,z=Me):Se=Se.next=Ge,A|=ye;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Se===null&&(z=Me),p.baseState=z,p.firstBaseUpdate=ue,p.lastBaseUpdate=Se,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ts|=A,n.lanes=A,n.memoizedState=Me}}function $p(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var ja={},Pi=Er(ja),$a=Er(ja),Ya=Er(ja);function Qr(n){if(n===ja)throw Error(t(174));return n}function kc(n,s){switch(Ht(Ya,s),Ht($a,n),Ht(Pi,ja),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=E(s,n)}jt(Pi),Ht(Pi,s)}function Vs(){jt(Pi),jt($a),jt(Ya)}function Yp(n){Qr(Ya.current);var s=Qr(Pi.current),l=E(s,n.type);s!==l&&(Ht($a,n),Ht(Pi,l))}function Bc(n){$a.current===n&&(jt(Pi),jt($a))}var Jt=Er(0);function pl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zc=[];function Vc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var ml=P.ReactCurrentDispatcher,Hc=P.ReactCurrentBatchConfig,es=0,Qt=null,un=null,hn=null,gl=!1,qa=!1,Ka=0,rx=0;function En(){throw Error(t(321))}function Gc(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!hi(n[l],s[l]))return!1;return!0}function Wc(n,s,l,c,p,_){if(es=_,Qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ml.current=n===null||n.memoizedState===null?lx:ux,n=l(c,p),qa){_=0;do{if(qa=!1,Ka=0,25<=_)throw Error(t(301));_+=1,hn=un=null,s.updateQueue=null,ml.current=cx,n=l(c,p)}while(qa)}if(ml.current=xl,s=un!==null&&un.next!==null,es=0,hn=un=Qt=null,gl=!1,s)throw Error(t(300));return n}function Xc(){var n=Ka!==0;return Ka=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Qt.memoizedState=hn=n:hn=hn.next=n,hn}function ri(){if(un===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var s=hn===null?Qt.memoizedState:hn.next;if(s!==null)hn=s,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},hn===null?Qt.memoizedState=hn=n:hn=hn.next=n}return hn}function Za(n,s){return typeof s=="function"?s(n):s}function jc(n){var s=ri(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=un,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var D=A=null,z=null,ue=_;do{var Se=ue.lane;if((es&Se)===Se)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Me={lane:Se,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(D=z=Me,A=c):z=z.next=Me,Qt.lanes|=Se,ts|=Se}ue=ue.next}while(ue!==null&&ue!==_);z===null?A=c:z.next=D,hi(c,s.memoizedState)||(Bn=!0),s.memoizedState=c,s.baseState=A,s.baseQueue=z,l.lastRenderedState=c}if(n=l.interleaved,n!==null){p=n;do _=p.lane,Qt.lanes|=_,ts|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function $c(n){var s=ri(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=n(_,A.action),A=A.next;while(A!==p);hi(_,s.memoizedState)||(Bn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,c]}function qp(){}function Kp(n,s){var l=Qt,c=ri(),p=s(),_=!hi(c.memoizedState,p);if(_&&(c.memoizedState=p,Bn=!0),c=c.queue,Yc(Qp.bind(null,l,c,n),[n]),c.getSnapshot!==s||_||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Ja(9,Jp.bind(null,l,c,p,s),void 0,null),pn===null)throw Error(t(349));(es&30)!==0||Zp(l,s,p)}return p}function Zp(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function Jp(n,s,l,c){s.value=l,s.getSnapshot=c,em(s)&&tm(n)}function Qp(n,s,l){return l(function(){em(s)&&tm(n)})}function em(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!hi(n,l)}catch{return!0}}function tm(n){var s=Ki(n,1);s!==null&&_i(s,n,1,-1)}function nm(n){var s=Li();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},s.queue=n,n=n.dispatch=ox.bind(null,Qt,n),[s.memoizedState,n]}function Ja(n,s,l,c){return n={tag:n,create:s,destroy:l,deps:c,next:null},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,s.lastEffect=n)),n}function im(){return ri().memoizedState}function vl(n,s,l,c){var p=Li();Qt.flags|=n,p.memoizedState=Ja(1|s,l,void 0,c===void 0?null:c)}function _l(n,s,l,c){var p=ri();c=c===void 0?null:c;var _=void 0;if(un!==null){var A=un.memoizedState;if(_=A.destroy,c!==null&&Gc(c,A.deps)){p.memoizedState=Ja(s,l,_,c);return}}Qt.flags|=n,p.memoizedState=Ja(1|s,l,_,c)}function rm(n,s){return vl(8390656,8,n,s)}function Yc(n,s){return _l(2048,8,n,s)}function sm(n,s){return _l(4,2,n,s)}function am(n,s){return _l(4,4,n,s)}function om(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function lm(n,s,l){return l=l!=null?l.concat([n]):null,_l(4,4,om.bind(null,s,n),l)}function qc(){}function um(n,s){var l=ri();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Gc(s,c[1])?c[0]:(l.memoizedState=[n,s],n)}function cm(n,s){var l=ri();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Gc(s,c[1])?c[0]:(n=n(),l.memoizedState=[n,s],n)}function fm(n,s,l){return(es&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(hi(l,s)||(l=He(),Qt.lanes|=l,ts|=l,n.baseState=!0),s)}function sx(n,s){var l=vt;vt=l!==0&&4>l?l:4,n(!0);var c=Hc.transition;Hc.transition={};try{n(!1),s()}finally{vt=l,Hc.transition=c}}function dm(){return ri().memoizedState}function ax(n,s,l){var c=Lr(n);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},hm(n))pm(s,l);else if(l=Wp(n,s,l,c),l!==null){var p=Nn();_i(l,n,c,p),mm(l,s,c)}}function ox(n,s,l){var c=Lr(n),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(hm(n))pm(s,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var A=s.lastRenderedState,D=_(A,l);if(p.hasEagerState=!0,p.eagerState=D,hi(D,A)){var z=s.interleaved;z===null?(p.next=p,Fc(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}l=Wp(n,s,p,c),l!==null&&(p=Nn(),_i(l,n,c,p),mm(l,s,c))}}function hm(n){var s=n.alternate;return n===Qt||s!==null&&s===Qt}function pm(n,s){qa=gl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function mm(n,s,l){if((l&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,l|=c,s.lanes=l,Fn(n,l)}}var xl={readContext:ii,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},lx={readContext:ii,useCallback:function(n,s){return Li().memoizedState=[n,s===void 0?null:s],n},useContext:ii,useEffect:rm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,vl(4194308,4,om.bind(null,s,n),l)},useLayoutEffect:function(n,s){return vl(4194308,4,n,s)},useInsertionEffect:function(n,s){return vl(4,2,n,s)},useMemo:function(n,s){var l=Li();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var c=Li();return s=l!==void 0?l(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=ax.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var s=Li();return n={current:n},s.memoizedState=n},useState:nm,useDebugValue:qc,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=nm(!1),s=n[0];return n=sx.bind(null,n[1]),Li().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var c=Qt,p=Li();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),pn===null)throw Error(t(349));(es&30)!==0||Zp(c,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,rm(Qp.bind(null,c,_,n),[n]),c.flags|=2048,Ja(9,Jp.bind(null,c,_,l,s),void 0,null),l},useId:function(){var n=Li(),s=pn.identifierPrefix;if(Yt){var l=qi,c=Yi;l=(c&~(1<<32-Ce(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ka++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=rx++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},ux={readContext:ii,useCallback:um,useContext:ii,useEffect:Yc,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:am,useMemo:cm,useReducer:jc,useRef:im,useState:function(){return jc(Za)},useDebugValue:qc,useDeferredValue:function(n){var s=ri();return fm(s,un.memoizedState,n)},useTransition:function(){var n=jc(Za)[0],s=ri().memoizedState;return[n,s]},useMutableSource:qp,useSyncExternalStore:Kp,useId:dm,unstable_isNewReconciler:!1},cx={readContext:ii,useCallback:um,useContext:ii,useEffect:Yc,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:am,useMemo:cm,useReducer:$c,useRef:im,useState:function(){return $c(Za)},useDebugValue:qc,useDeferredValue:function(n){var s=ri();return un===null?s.memoizedState=n:fm(s,un.memoizedState,n)},useTransition:function(){var n=$c(Za)[0],s=ri().memoizedState;return[n,s]},useMutableSource:qp,useSyncExternalStore:Kp,useId:dm,unstable_isNewReconciler:!1};function mi(n,s){if(n&&n.defaultProps){s=re({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function Kc(n,s,l,c){s=n.memoizedState,l=l(c,s),l=l==null?s:re({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var yl={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var c=Nn(),p=Lr(n),_=Zi(c,p);_.payload=s,l!=null&&(_.callback=l),s=Ar(n,_,p),s!==null&&(_i(s,n,p,c),dl(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var c=Nn(),p=Lr(n),_=Zi(c,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Ar(n,_,p),s!==null&&(_i(s,n,p,c),dl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Nn(),c=Lr(n),p=Zi(l,c);p.tag=2,s!=null&&(p.callback=s),s=Ar(n,p,c),s!==null&&(_i(s,n,c,l),dl(s,n,c))}};function gm(n,s,l,c,p,_,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,A):s.prototype&&s.prototype.isPureReactComponent?!ka(l,c)||!ka(p,_):!0}function vm(n,s,l){var c=!1,p=wr,_=s.contextType;return typeof _=="object"&&_!==null?_=ii(_):(p=kn(s)?qr:Mn.current,c=s.contextTypes,_=(c=c!=null)?Ds(n,p):wr),s=new s(l,_),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yl,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),s}function _m(n,s,l,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==n&&yl.enqueueReplaceState(s,s.state,null)}function Zc(n,s,l,c){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Oc(n);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ii(_):(_=kn(s)?qr:Mn.current,p.context=Ds(n,_)),p.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Kc(n,s,_,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&yl.enqueueReplaceState(p,p.state,null),hl(n,l,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,s){try{var l="",c=s;do l+=De(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:s,stack:p,digest:null}}function Jc(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Qc(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function xm(n,s,l){l=Zi(-1,l),l.tag=3,l.payload={element:null};var c=s.value;return l.callback=function(){Al||(Al=!0,mf=c),Qc(n,s)},l}function ym(n,s,l){l=Zi(-1,l),l.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;l.payload=function(){return c(p)},l.callback=function(){Qc(n,s)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Qc(n,s),typeof c!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Sm(n,s,l){var c=n.pingCache;if(c===null){c=n.pingCache=new fx;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(l)||(p.add(l),n=Tx.bind(null,n,s,l),s.then(n,n))}function Mm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Em(n,s,l,c,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Zi(-1,1),s.tag=2,Ar(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var dx=P.ReactCurrentOwner,Bn=!1;function Ln(n,s,l,c){s.child=n===null?Gp(s,null,l,c):ks(s,n.child,l,c)}function wm(n,s,l,c,p){l=l.render;var _=s.ref;return zs(s,p),c=Wc(n,s,l,c,_,p),l=Xc(),n!==null&&!Bn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Ji(n,s,p)):(Yt&&l&&Ac(s),s.flags|=1,Ln(n,s,c,p),s.child)}function Tm(n,s,l,c,p){if(n===null){var _=l.type;return typeof _=="function"&&!Mf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,bm(n,s,_,c,p)):(n=Il(l.type,null,c,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(_=n.child,(n.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:ka,l(A,c)&&n.ref===s.ref)return Ji(n,s,p)}return s.flags|=1,n=Ir(_,c),n.ref=s.ref,n.return=s,s.child=n}function bm(n,s,l,c,p){if(n!==null){var _=n.memoizedProps;if(ka(_,c)&&n.ref===s.ref)if(Bn=!1,s.pendingProps=c=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Bn=!0);else return s.lanes=n.lanes,Ji(n,s,p)}return ef(n,s,l,c,p)}function Am(n,s,l){var c=s.pendingProps,p=c.children,_=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ws,Yn),Yn|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ht(Ws,Yn),Yn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Ht(Ws,Yn),Yn|=c}else _!==null?(c=_.baseLanes|l,s.memoizedState=null):c=l,Ht(Ws,Yn),Yn|=c;return Ln(n,s,p,l),s.child}function Rm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ef(n,s,l,c,p){var _=kn(l)?qr:Mn.current;return _=Ds(s,_),zs(s,p),l=Wc(n,s,l,c,_,p),c=Xc(),n!==null&&!Bn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Ji(n,s,p)):(Yt&&c&&Ac(s),s.flags|=1,Ln(n,s,l,p),s.child)}function Cm(n,s,l,c,p){if(kn(l)){var _=!0;rl(s)}else _=!1;if(zs(s,p),s.stateNode===null)Ml(n,s),vm(s,l,c),Zc(s,l,c,p),c=!0;else if(n===null){var A=s.stateNode,D=s.memoizedProps;A.props=D;var z=A.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=ii(ue):(ue=kn(l)?qr:Mn.current,ue=Ds(s,ue));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(D!==c||z!==ue)&&_m(s,A,c,ue),br=!1;var ye=s.memoizedState;A.state=ye,hl(s,c,A,p),z=s.memoizedState,D!==c||ye!==z||On.current||br?(typeof Se=="function"&&(Kc(s,l,Se,c),z=s.memoizedState),(D=br||gm(s,l,D,c,ye,z,ue))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=z),A.props=c,A.state=z,A.context=ue,c=D):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{A=s.stateNode,Xp(n,s),D=s.memoizedProps,ue=s.type===s.elementType?D:mi(s.type,D),A.props=ue,Me=s.pendingProps,ye=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=ii(z):(z=kn(l)?qr:Mn.current,z=Ds(s,z));var Ge=l.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(D!==Me||ye!==z)&&_m(s,A,c,z),br=!1,ye=s.memoizedState,A.state=ye,hl(s,c,A,p);var je=s.memoizedState;D!==Me||ye!==je||On.current||br?(typeof Ge=="function"&&(Kc(s,l,Ge,c),je=s.memoizedState),(ue=br||gm(s,l,ue,c,ye,je,z)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,je,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,je,z)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=je),A.props=c,A.state=je,A.context=z,c=ue):(typeof A.componentDidUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(s.flags|=1024),c=!1)}return tf(n,s,l,c,_,p)}function tf(n,s,l,c,p,_){Rm(n,s);var A=(s.flags&128)!==0;if(!c&&!A)return p&&Dp(s,l,!1),Ji(n,s,_);c=s.stateNode,dx.current=s;var D=A&&typeof l.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&A?(s.child=ks(s,n.child,null,_),s.child=ks(s,null,D,_)):Ln(n,s,D,_),s.memoizedState=c.state,p&&Dp(s,l,!0),s.child}function Pm(n){var s=n.stateNode;s.pendingContext?Np(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Np(n,s.context,!1),kc(n,s.containerInfo)}function Lm(n,s,l,c,p){return Os(),Lc(p),s.flags|=256,Ln(n,s,l,c),s.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Nm(n,s,l){var c=s.pendingProps,p=Jt.current,_=!1,A=(s.flags&128)!==0,D;if((D=A)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(_=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ht(Jt,p&1),n===null)return Pc(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=c.children,n=c.fallback,_?(c=s.mode,_=s.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Dl(A,c,0,null),n=ss(n,c,l,null),_.return=s,n.return=s,_.sibling=n,s.child=_,s.child.memoizedState=rf(l),s.memoizedState=nf,n):sf(s,A));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return hx(n,s,A,c,D,p,l);if(_){_=c.fallback,A=s.mode,p=n.child,D=p.sibling;var z={mode:"hidden",children:c.children};return(A&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=z,s.deletions=null):(c=Ir(p,z),c.subtreeFlags=p.subtreeFlags&14680064),D!==null?_=Ir(D,_):(_=ss(_,A,l,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,A=n.child.memoizedState,A=A===null?rf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=n.childLanes&~l,s.memoizedState=nf,c}return _=n.child,n=_.sibling,c=Ir(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=l),c.return=s,c.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=c,s.memoizedState=null,c}function sf(n,s){return s=Dl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Sl(n,s,l,c){return c!==null&&Lc(c),ks(s,n.child,null,l),n=sf(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function hx(n,s,l,c,p,_,A){if(l)return s.flags&256?(s.flags&=-257,c=Jc(Error(t(422))),Sl(n,s,A,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=Dl({mode:"visible",children:c.children},p,0,null),_=ss(_,p,A,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&ks(s,n.child,null,A),s.child.memoizedState=rf(A),s.memoizedState=nf,_);if((s.mode&1)===0)return Sl(n,s,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var D=c.dgst;return c=D,_=Error(t(419)),c=Jc(_,c,void 0),Sl(n,s,A,c)}if(D=(A&n.childLanes)!==0,Bn||D){if(c=pn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ki(n,p),_i(c,n,p,-1))}return Sf(),c=Jc(Error(t(421))),Sl(n,s,A,c)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=bx.bind(null,n),p._reactRetry=s,null):(n=_.treeContext,$n=Mr(p.nextSibling),jn=s,Yt=!0,pi=null,n!==null&&(ti[ni++]=Yi,ti[ni++]=qi,ti[ni++]=Kr,Yi=n.id,qi=n.overflow,Kr=s),s=sf(s,c.children),s.flags|=4096,s)}function Im(n,s,l){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Uc(n.return,s,l)}function af(n,s,l,c,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function Dm(n,s,l){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Ln(n,s,c.children,l),c=Jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,l,s);else if(n.tag===19)Im(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&pl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),af(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&pl(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}af(s,!0,l,null,_);break;case"together":af(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ml(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Ji(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),ts|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Ir(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Ir(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function px(n,s,l){switch(s.tag){case 3:Pm(s),Os();break;case 5:Yp(s);break;case 1:kn(s.type)&&rl(s);break;case 4:kc(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Ht(cl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Jt,Jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Nm(n,s,l):(Ht(Jt,Jt.current&1),n=Ji(n,s,l),n!==null?n.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(c=(l&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Dm(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ht(Jt,Jt.current),c)break;return null;case 22:case 23:return s.lanes=0,Am(n,s,l)}return Ji(n,s,l)}var Um,of,Fm,Om;Um=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},of=function(){},Fm=function(n,s,l,c){var p=n.memoizedProps;if(p!==c){n=s.stateNode,Qr(Pi.current);var _=null;switch(l){case"input":p=bt(n,p),c=bt(n,c),_=[];break;case"select":p=re({},p,{value:void 0}),c=re({},c,{value:void 0}),_=[];break;case"textarea":p=ht(n,p),c=ht(n,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=tl)}Ve(l,c);var A;l=null;for(ue in p)if(!c.hasOwnProperty(ue)&&p.hasOwnProperty(ue)&&p[ue]!=null)if(ue==="style"){var D=p[ue];for(A in D)D.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?_||(_=[]):(_=_||[]).push(ue,null));for(ue in c){var z=c[ue];if(D=p!=null?p[ue]:void 0,c.hasOwnProperty(ue)&&z!==D&&(z!=null||D!=null))if(ue==="style")if(D){for(A in D)!D.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&D[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(_||(_=[]),_.push(ue,l)),l=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(_=_||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Xt("scroll",n),_||D===z||(_=[])):(_=_||[]).push(ue,z))}l&&(_=_||[]).push("style",l);var ue=_;(s.updateQueue=ue)&&(s.flags|=4)}},Om=function(n,s,l,c){l!==c&&(s.flags|=4)};function Qa(n,s){if(!Yt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=l,s}function mx(n,s,l){var c=s.pendingProps;switch(Rc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(s),null;case 1:return kn(s.type)&&il(),wn(s),null;case 3:return c=s.stateNode,Vs(),jt(On),jt(Mn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ll(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,pi!==null&&(_f(pi),pi=null))),of(n,s),wn(s),null;case 5:Bc(s);var p=Qr(Ya.current);if(l=s.type,n!==null&&s.stateNode!=null)Fm(n,s,l,c,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return wn(s),null}if(n=Qr(Pi.current),ll(s)){c=s.stateNode,l=s.type;var _=s.memoizedProps;switch(c[Ci]=s,c[Ga]=_,n=(s.mode&1)!==0,l){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(p=0;p<za.length;p++)Xt(za[p],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":Dt(c,_),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Xt("invalid",c);break;case"textarea":Pt(c,_),Xt("invalid",c)}Ve(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var D=_[A];A==="children"?typeof D=="string"?c.textContent!==D&&(_.suppressHydrationWarning!==!0&&el(c.textContent,D,n),p=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(_.suppressHydrationWarning!==!0&&el(c.textContent,D,n),p=["children",""+D]):a.hasOwnProperty(A)&&D!=null&&A==="onScroll"&&Xt("scroll",c)}switch(l){case"input":et(c),Bt(c,_,!0);break;case"textarea":et(c),Gt(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=tl)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(l,{is:c.is}):(n=A.createElement(l),l==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,l),n[Ci]=s,n[Ga]=c,Um(n,s,!1,!1),s.stateNode=n;e:{switch(A=Re(l,c),l){case"dialog":Xt("cancel",n),Xt("close",n),p=c;break;case"iframe":case"object":case"embed":Xt("load",n),p=c;break;case"video":case"audio":for(p=0;p<za.length;p++)Xt(za[p],n);p=c;break;case"source":Xt("error",n),p=c;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),p=c;break;case"details":Xt("toggle",n),p=c;break;case"input":Dt(n,c),p=bt(n,c),Xt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=re({},c,{value:void 0}),Xt("invalid",n);break;case"textarea":Pt(n,c),p=ht(n,c),Xt("invalid",n);break;default:p=c}Ve(l,p),D=p;for(_ in D)if(D.hasOwnProperty(_)){var z=D[_];_==="style"?ge(n,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&me(n,z)):_==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&ve(n,z):typeof z=="number"&&ve(n,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Xt("scroll",n):z!=null&&R(n,_,z,A))}switch(l){case"input":et(n),Bt(n,c,!1);break;case"textarea":et(n),Gt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,_=c.value,_!=null?zt(n,!!c.multiple,_,!1):c.defaultValue!=null&&zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=tl)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return wn(s),null;case 6:if(n&&s.stateNode!=null)Om(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(l=Qr(Ya.current),Qr(Pi.current),ll(s)){if(c=s.stateNode,l=s.memoizedProps,c[Ci]=s,(_=c.nodeValue!==l)&&(n=jn,n!==null))switch(n.tag){case 3:el(c.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&el(c.nodeValue,l,(n.mode&1)!==0)}_&&(s.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Ci]=s,s.stateNode=c}return wn(s),null;case 13:if(jt(Jt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&$n!==null&&(s.mode&1)!==0&&(s.flags&128)===0)zp(),Os(),s.flags|=98560,_=!1;else if(_=ll(s),c!==null&&c.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ci]=s}else Os(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wn(s),_=!1}else pi!==null&&(_f(pi),pi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Jt.current&1)!==0?cn===0&&(cn=3):Sf())),s.updateQueue!==null&&(s.flags|=4),wn(s),null);case 4:return Vs(),of(n,s),n===null&&Va(s.stateNode.containerInfo),wn(s),null;case 10:return Dc(s.type._context),wn(s),null;case 17:return kn(s.type)&&il(),wn(s),null;case 19:if(jt(Jt),_=s.memoizedState,_===null)return wn(s),null;if(c=(s.flags&128)!==0,A=_.rendering,A===null)if(c)Qa(_,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=pl(n),A!==null){for(s.flags|=128,Qa(_,!1),c=A.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=l,l=s.child;l!==null;)_=l,n=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,n=A.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ht(Jt,Jt.current&1|2),s.child}n=n.sibling}_.tail!==null&&Zt()>Xs&&(s.flags|=128,c=!0,Qa(_,!1),s.lanes=4194304)}else{if(!c)if(n=pl(A),n!==null){if(s.flags|=128,c=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Qa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Yt)return wn(s),null}else 2*Zt()-_.renderingStartTime>Xs&&l!==1073741824&&(s.flags|=128,c=!0,Qa(_,!1),s.lanes=4194304);_.isBackwards?(A.sibling=s.child,s.child=A):(l=_.last,l!==null?l.sibling=A:s.child=A,_.last=A)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Zt(),s.sibling=null,l=Jt.current,Ht(Jt,c?l&1|2:l&1),s):(wn(s),null);case 22:case 23:return yf(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Yn&1073741824)!==0&&(wn(s),s.subtreeFlags&6&&(s.flags|=8192)):wn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function gx(n,s){switch(Rc(s),s.tag){case 1:return kn(s.type)&&il(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Vs(),jt(On),jt(Mn),Vc(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Bc(s),null;case 13:if(jt(Jt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Os()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return jt(Jt),null;case 4:return Vs(),null;case 10:return Dc(s.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var El=!1,Tn=!1,vx=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Gs(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){nn(n,s,c)}else l.current=null}function lf(n,s,l){try{l()}catch(c){nn(n,s,c)}}var km=!1;function _x(n,s){if(xc=Go,n=gp(),fc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,D=-1,z=-1,ue=0,Se=0,Me=n,ye=null;t:for(;;){for(var Ge;Me!==l||p!==0&&Me.nodeType!==3||(D=A+p),Me!==_||c!==0&&Me.nodeType!==3||(z=A+c),Me.nodeType===3&&(A+=Me.nodeValue.length),(Ge=Me.firstChild)!==null;)ye=Me,Me=Ge;for(;;){if(Me===n)break t;if(ye===l&&++ue===p&&(D=A),ye===_&&++Se===c&&(z=A),(Ge=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Ge}l=D===-1||z===-1?null:{start:D,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(yc={focusedElem:n,selectionRange:l},Go=!1,Xe=s;Xe!==null;)if(s=Xe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Xe=n;else for(;Xe!==null;){s=Xe;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,rn=je.memoizedState,ee=s.stateNode,j=ee.getSnapshotBeforeUpdate(s.elementType===s.type?qe:mi(s.type,qe),rn);ee.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){nn(s,s.return,Te)}if(n=s.sibling,n!==null){n.return=s.return,Xe=n;break}Xe=s.return}return je=km,km=!1,je}function eo(n,s,l){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&lf(s,l,_)}p=p.next}while(p!==c)}}function wl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var c=l.create;l.destroy=c()}l=l.next}while(l!==s)}}function uf(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function Bm(n){var s=n.alternate;s!==null&&(n.alternate=null,Bm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ci],delete s[Ga],delete s[wc],delete s[ex],delete s[tx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zm(n){return n.tag===5||n.tag===3||n.tag===4}function Vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cf(n,s,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=tl));else if(c!==4&&(n=n.child,n!==null))for(cf(n,s,l),n=n.sibling;n!==null;)cf(n,s,l),n=n.sibling}function ff(n,s,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ff(n,s,l),n=n.sibling;n!==null;)ff(n,s,l),n=n.sibling}var xn=null,gi=!1;function Rr(n,s,l){for(l=l.child;l!==null;)Hm(n,s,l),l=l.sibling}function Hm(n,s,l){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:Tn||Gs(l,s);case 6:var c=xn,p=gi;xn=null,Rr(n,s,l),xn=c,gi=p,xn!==null&&(gi?(n=xn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):xn.removeChild(l.stateNode));break;case 18:xn!==null&&(gi?(n=xn,l=l.stateNode,n.nodeType===8?Ec(n.parentNode,l):n.nodeType===1&&Ec(n,l),Na(n)):Ec(xn,l.stateNode));break;case 4:c=xn,p=gi,xn=l.stateNode.containerInfo,gi=!0,Rr(n,s,l),xn=c,gi=p;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&lf(l,s,A),p=p.next}while(p!==c)}Rr(n,s,l);break;case 1:if(!Tn&&(Gs(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(D){nn(l,s,D)}Rr(n,s,l);break;case 21:Rr(n,s,l);break;case 22:l.mode&1?(Tn=(c=Tn)||l.memoizedState!==null,Rr(n,s,l),Tn=c):Rr(n,s,l);break;default:Rr(n,s,l)}}function Gm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new vx),s.forEach(function(c){var p=Ax.bind(null,n,c);l.has(c)||(l.add(c),c.then(p,p))})}}function vi(n,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=n,A=s,D=A;e:for(;D!==null;){switch(D.tag){case 5:xn=D.stateNode,gi=!1;break e;case 3:xn=D.stateNode.containerInfo,gi=!0;break e;case 4:xn=D.stateNode.containerInfo,gi=!0;break e}D=D.return}if(xn===null)throw Error(t(160));Hm(_,A,p),xn=null,gi=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(ue){nn(p,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Wm(s,n),s=s.sibling}function Wm(n,s){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(s,n),Ni(n),c&4){try{eo(3,n,n.return),wl(3,n)}catch(qe){nn(n,n.return,qe)}try{eo(5,n,n.return)}catch(qe){nn(n,n.return,qe)}}break;case 1:vi(s,n),Ni(n),c&512&&l!==null&&Gs(l,l.return);break;case 5:if(vi(s,n),Ni(n),c&512&&l!==null&&Gs(l,l.return),n.flags&32){var p=n.stateNode;try{ve(p,"")}catch(qe){nn(n,n.return,qe)}}if(c&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,A=l!==null?l.memoizedProps:_,D=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{D==="input"&&_.type==="radio"&&_.name!=null&&dt(p,_),Re(D,A);var ue=Re(D,_);for(A=0;A<z.length;A+=2){var Se=z[A],Me=z[A+1];Se==="style"?ge(p,Me):Se==="dangerouslySetInnerHTML"?me(p,Me):Se==="children"?ve(p,Me):R(p,Se,Me,ue)}switch(D){case"input":Kt(p,_);break;case"textarea":Ue(p,_);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ge=_.value;Ge!=null?zt(p,!!_.multiple,Ge,!1):ye!==!!_.multiple&&(_.defaultValue!=null?zt(p,!!_.multiple,_.defaultValue,!0):zt(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ga]=_}catch(qe){nn(n,n.return,qe)}}break;case 6:if(vi(s,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(qe){nn(n,n.return,qe)}}break;case 3:if(vi(s,n),Ni(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(s.containerInfo)}catch(qe){nn(n,n.return,qe)}break;case 4:vi(s,n),Ni(n);break;case 13:vi(s,n),Ni(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(pf=Zt())),c&4&&Gm(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Tn=(ue=Tn)||Se,vi(s,n),Tn=ue):vi(s,n),Ni(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Se&&(n.mode&1)!==0)for(Xe=n,Se=n.child;Se!==null;){for(Me=Xe=Se;Xe!==null;){switch(ye=Xe,Ge=ye.child,ye.tag){case 0:case 11:case 14:case 15:eo(4,ye,ye.return);break;case 1:Gs(ye,ye.return);var je=ye.stateNode;if(typeof je.componentWillUnmount=="function"){c=ye,l=ye.return;try{s=c,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){nn(c,l,qe)}}break;case 5:Gs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){$m(Me);continue}}Ge!==null?(Ge.return=ye,Xe=Ge):$m(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{p=Me.stateNode,ue?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(D=Me.stateNode,z=Me.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=he("display",A))}catch(qe){nn(n,n.return,qe)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(qe){nn(n,n.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:vi(s,n),Ni(n),c&4&&Gm(n);break;case 21:break;default:vi(s,n),Ni(n)}}function Ni(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(zm(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ve(p,""),c.flags&=-33);var _=Vm(n);ff(n,_,p);break;case 3:case 4:var A=c.stateNode.containerInfo,D=Vm(n);cf(n,D,A);break;default:throw Error(t(161))}}catch(z){nn(n,n.return,z)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function xx(n,s,l){Xe=n,Xm(n)}function Xm(n,s,l){for(var c=(n.mode&1)!==0;Xe!==null;){var p=Xe,_=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||El;if(!A){var D=p.alternate,z=D!==null&&D.memoizedState!==null||Tn;D=El;var ue=Tn;if(El=A,(Tn=z)&&!ue)for(Xe=p;Xe!==null;)A=Xe,z=A.child,A.tag===22&&A.memoizedState!==null?Ym(p):z!==null?(z.return=A,Xe=z):Ym(p);for(;_!==null;)Xe=_,Xm(_),_=_.sibling;Xe=p,El=D,Tn=ue}jm(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Xe=_):jm(n)}}function jm(n){for(;Xe!==null;){var s=Xe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Tn||wl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Tn)if(l===null)c.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:mi(s.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&$p(s,_,c);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}$p(s,A,l)}break;case 5:var D=s.stateNode;if(l===null&&s.flags&4){l=D;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Se=ue.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Na(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||s.flags&512&&uf(s)}catch(ye){nn(s,s.return,ye)}}if(s===n){Xe=null;break}if(l=s.sibling,l!==null){l.return=s.return,Xe=l;break}Xe=s.return}}function $m(n){for(;Xe!==null;){var s=Xe;if(s===n){Xe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Xe=l;break}Xe=s.return}}function Ym(n){for(;Xe!==null;){var s=Xe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{wl(4,s)}catch(z){nn(s,l,z)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(z){nn(s,p,z)}}var _=s.return;try{uf(s)}catch(z){nn(s,_,z)}break;case 5:var A=s.return;try{uf(s)}catch(z){nn(s,A,z)}}}catch(z){nn(s,s.return,z)}if(s===n){Xe=null;break}var D=s.sibling;if(D!==null){D.return=s.return,Xe=D;break}Xe=s.return}}var yx=Math.ceil,Tl=P.ReactCurrentDispatcher,df=P.ReactCurrentOwner,si=P.ReactCurrentBatchConfig,Tt=0,pn=null,on=null,yn=0,Yn=0,Ws=Er(0),cn=0,to=null,ts=0,bl=0,hf=0,no=null,zn=null,pf=0,Xs=1/0,Qi=null,Al=!1,mf=null,Cr=null,Rl=!1,Pr=null,Cl=0,io=0,gf=null,Pl=-1,Ll=0;function Nn(){return(Tt&6)!==0?Zt():Pl!==-1?Pl:Pl=Zt()}function Lr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&yn!==0?yn&-yn:ix.transition!==null?(Ll===0&&(Ll=He()),Ll):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Kh(n.type)),n)}function _i(n,s,l,c){if(50<io)throw io=0,gf=null,Error(t(185));gt(n,l,c),((Tt&2)===0||n!==pn)&&(n===pn&&((Tt&2)===0&&(bl|=l),cn===4&&Nr(n,yn)),Vn(n,c),l===1&&Tt===0&&(s.mode&1)===0&&(Xs=Zt()+500,sl&&Tr()))}function Vn(n,s){var l=n.callbackNode;Lt(n,s);var c=Vt(n,n===pn?yn:0);if(c===0)l!==null&&Vo(l),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(l!=null&&Vo(l),s===1)n.tag===0?nx(Km.bind(null,n)):Up(Km.bind(null,n)),J_(function(){(Tt&6)===0&&Tr()}),l=null;else{switch(Xi(c)){case 1:l=Aa;break;case 4:l=C;break;case 16:l=Y;break;case 536870912:l=ie;break;default:l=Y}l=rg(l,qm.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function qm(n,s){if(Pl=-1,Ll=0,(Tt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(js()&&n.callbackNode!==l)return null;var c=Vt(n,n===pn?yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Nl(n,c);else{s=c;var p=Tt;Tt|=2;var _=Jm();(pn!==n||yn!==s)&&(Qi=null,Xs=Zt()+500,is(n,s));do try{Ex();break}catch(D){Zm(n,D)}while(!0);Ic(),Tl.current=_,Tt=p,on!==null?s=0:(pn=null,yn=0,s=cn)}if(s!==0){if(s===2&&(p=an(n),p!==0&&(c=p,s=vf(n,p))),s===1)throw l=to,is(n,0),Nr(n,c),Vn(n,Zt()),l;if(s===6)Nr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!Sx(p)&&(s=Nl(n,c),s===2&&(_=an(n),_!==0&&(c=_,s=vf(n,_))),s===1))throw l=to,is(n,0),Nr(n,c),Vn(n,Zt()),l;switch(n.finishedWork=p,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:rs(n,zn,Qi);break;case 3:if(Nr(n,c),(c&130023424)===c&&(s=pf+500-Zt(),10<s)){if(Vt(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Nn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Mc(rs.bind(null,n,zn,Qi),s);break}rs(n,zn,Qi);break;case 4:if(Nr(n,c),(c&4194240)===c)break;for(s=n.eventTimes,p=-1;0<c;){var A=31-Ce(c);_=1<<A,A=s[A],A>p&&(p=A),c&=~_}if(c=p,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yx(c/1960))-c,10<c){n.timeoutHandle=Mc(rs.bind(null,n,zn,Qi),c);break}rs(n,zn,Qi);break;case 5:rs(n,zn,Qi);break;default:throw Error(t(329))}}}return Vn(n,Zt()),n.callbackNode===l?qm.bind(null,n):null}function vf(n,s){var l=no;return n.current.memoizedState.isDehydrated&&(is(n,s).flags|=256),n=Nl(n,s),n!==2&&(s=zn,zn=l,s!==null&&_f(s)),n}function _f(n){zn===null?zn=n:zn.push.apply(zn,n)}function Sx(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!hi(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Nr(n,s){for(s&=~hf,s&=~bl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-Ce(s),c=1<<l;n[l]=-1,s&=~c}}function Km(n){if((Tt&6)!==0)throw Error(t(327));js();var s=Vt(n,0);if((s&1)===0)return Vn(n,Zt()),null;var l=Nl(n,s);if(n.tag!==0&&l===2){var c=an(n);c!==0&&(s=c,l=vf(n,c))}if(l===1)throw l=to,is(n,0),Nr(n,s),Vn(n,Zt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,rs(n,zn,Qi),Vn(n,Zt()),null}function xf(n,s){var l=Tt;Tt|=1;try{return n(s)}finally{Tt=l,Tt===0&&(Xs=Zt()+500,sl&&Tr())}}function ns(n){Pr!==null&&Pr.tag===0&&(Tt&6)===0&&js();var s=Tt;Tt|=1;var l=si.transition,c=vt;try{if(si.transition=null,vt=1,n)return n()}finally{vt=c,si.transition=l,Tt=s,(Tt&6)===0&&Tr()}}function yf(){Yn=Ws.current,jt(Ws)}function is(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Z_(l)),on!==null)for(l=on.return;l!==null;){var c=l;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&il();break;case 3:Vs(),jt(On),jt(Mn),Vc();break;case 5:Bc(c);break;case 4:Vs();break;case 13:jt(Jt);break;case 19:jt(Jt);break;case 10:Dc(c.type._context);break;case 22:case 23:yf()}l=l.return}if(pn=n,on=n=Ir(n.current,null),yn=Yn=s,cn=0,to=null,hf=bl=ts=0,zn=no=null,Jr!==null){for(s=0;s<Jr.length;s++)if(l=Jr[s],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,c.next=A}l.pending=c}Jr=null}return n}function Zm(n,s){do{var l=on;try{if(Ic(),ml.current=xl,gl){for(var c=Qt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}gl=!1}if(es=0,hn=un=Qt=null,qa=!1,Ka=0,df.current=null,l===null||l.return===null){cn=1,to=s,on=null;break}e:{var _=n,A=l.return,D=l,z=s;if(s=yn,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,Se=D,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=Mm(A);if(Ge!==null){Ge.flags&=-257,Em(Ge,A,D,_,s),Ge.mode&1&&Sm(_,ue,s),s=Ge,z=ue;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(z),s.updateQueue=qe}else je.add(z);break e}else{if((s&1)===0){Sm(_,ue,s),Sf();break e}z=Error(t(426))}}else if(Yt&&D.mode&1){var rn=Mm(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Em(rn,A,D,_,s),Lc(Hs(z,D));break e}}_=z=Hs(z,D),cn!==4&&(cn=2),no===null?no=[_]:no.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ee=xm(_,z,s);jp(_,ee);break e;case 1:D=z;var j=_.type,se=_.stateNode;if((_.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Cr===null||!Cr.has(se)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=ym(_,D,s);jp(_,Te);break e}}_=_.return}while(_!==null)}eg(l)}catch(Ze){s=Ze,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function Jm(){var n=Tl.current;return Tl.current=xl,n===null?xl:n}function Sf(){(cn===0||cn===3||cn===2)&&(cn=4),pn===null||(ts&268435455)===0&&(bl&268435455)===0||Nr(pn,yn)}function Nl(n,s){var l=Tt;Tt|=2;var c=Jm();(pn!==n||yn!==s)&&(Qi=null,is(n,s));do try{Mx();break}catch(p){Zm(n,p)}while(!0);if(Ic(),Tt=l,Tl.current=c,on!==null)throw Error(t(261));return pn=null,yn=0,cn}function Mx(){for(;on!==null;)Qm(on)}function Ex(){for(;on!==null&&!Zu();)Qm(on)}function Qm(n){var s=ig(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,s===null?eg(n):on=s,df.current=null}function eg(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=mx(l,s,Yn),l!==null){on=l;return}}else{if(l=gx(l,s),l!==null){l.flags&=32767,on=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=n}while(s!==null);cn===0&&(cn=5)}function rs(n,s,l){var c=vt,p=si.transition;try{si.transition=null,vt=1,wx(n,s,l,c)}finally{si.transition=p,vt=c}return null}function wx(n,s,l,c){do js();while(Pr!==null);if((Tt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Un(n,_),n===pn&&(on=pn=null,yn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Rl||(Rl=!0,rg(Y,function(){return js(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=si.transition,si.transition=null;var A=vt;vt=1;var D=Tt;Tt|=4,df.current=null,_x(n,l),Wm(l,n),W_(yc),Go=!!xc,yc=xc=null,n.current=l,xx(l),Ju(),Tt=D,vt=A,si.transition=_}else n.current=l;if(Rl&&(Rl=!1,Pr=n,Cl=p),_=n.pendingLanes,_===0&&(Cr=null),We(l.stateNode),Vn(n,Zt()),s!==null)for(c=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Al)throw Al=!1,n=mf,mf=null,n;return(Cl&1)!==0&&n.tag!==0&&js(),_=n.pendingLanes,(_&1)!==0?n===gf?io++:(io=0,gf=n):io=0,Tr(),null}function js(){if(Pr!==null){var n=Xi(Cl),s=si.transition,l=vt;try{if(si.transition=null,vt=16>n?16:n,Pr===null)var c=!1;else{if(n=Pr,Pr=null,Cl=0,(Tt&6)!==0)throw Error(t(331));var p=Tt;for(Tt|=4,Xe=n.current;Xe!==null;){var _=Xe,A=_.child;if((Xe.flags&16)!==0){var D=_.deletions;if(D!==null){for(var z=0;z<D.length;z++){var ue=D[z];for(Xe=ue;Xe!==null;){var Se=Xe;switch(Se.tag){case 0:case 11:case 15:eo(8,Se,_)}var Me=Se.child;if(Me!==null)Me.return=Se,Xe=Me;else for(;Xe!==null;){Se=Xe;var ye=Se.sibling,Ge=Se.return;if(Bm(Se),Se===ue){Xe=null;break}if(ye!==null){ye.return=Ge,Xe=ye;break}Xe=Ge}}}var je=_.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}Xe=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Xe=A;else e:for(;Xe!==null;){if(_=Xe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:eo(9,_,_.return)}var ee=_.sibling;if(ee!==null){ee.return=_.return,Xe=ee;break e}Xe=_.return}}var j=n.current;for(Xe=j;Xe!==null;){A=Xe;var se=A.child;if((A.subtreeFlags&2064)!==0&&se!==null)se.return=A,Xe=se;else e:for(A=j;Xe!==null;){if(D=Xe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:wl(9,D)}}catch(Ze){nn(D,D.return,Ze)}if(D===A){Xe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Xe=Te;break e}Xe=D.return}}if(Tt=p,Tr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{vt=l,si.transition=s}}return!1}function tg(n,s,l){s=Hs(l,s),s=xm(n,s,1),n=Ar(n,s,1),s=Nn(),n!==null&&(gt(n,1,s),Vn(n,s))}function nn(n,s,l){if(n.tag===3)tg(n,n,l);else for(;s!==null;){if(s.tag===3){tg(s,n,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cr===null||!Cr.has(c))){n=Hs(l,n),n=ym(s,n,1),s=Ar(s,n,1),n=Nn(),s!==null&&(gt(s,1,n),Vn(s,n));break}}s=s.return}}function Tx(n,s,l){var c=n.pingCache;c!==null&&c.delete(s),s=Nn(),n.pingedLanes|=n.suspendedLanes&l,pn===n&&(yn&l)===l&&(cn===4||cn===3&&(yn&130023424)===yn&&500>Zt()-pf?is(n,0):hf|=l),Vn(n,s)}function ng(n,s){s===0&&((n.mode&1)===0?s=1:(s=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=Nn();n=Ki(n,s),n!==null&&(gt(n,s,l),Vn(n,l))}function bx(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),ng(n,l)}function Ax(n,s){var l=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ng(n,l)}var ig;ig=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return Bn=!1,px(n,s,l);Bn=(n.flags&131072)!==0}else Bn=!1,Yt&&(s.flags&1048576)!==0&&Fp(s,ol,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Ml(n,s),n=s.pendingProps;var p=Ds(s,Mn.current);zs(s,l),p=Wc(null,s,c,n,p,l);var _=Xc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,kn(c)?(_=!0,rl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Oc(s),p.updater=yl,s.stateNode=p,p._reactInternals=s,Zc(s,c,n,l),s=tf(null,s,c,!0,_,l)):(s.tag=0,Yt&&_&&Ac(s),Ln(null,s,p,l),s=s.child),s;case 16:c=s.elementType;e:{switch(Ml(n,s),n=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=Cx(c),n=mi(c,n),p){case 0:s=ef(null,s,c,n,l);break e;case 1:s=Cm(null,s,c,n,l);break e;case 11:s=wm(null,s,c,n,l);break e;case 14:s=Tm(null,s,c,mi(c.type,n),l);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),ef(n,s,c,p,l);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),Cm(n,s,c,p,l);case 3:e:{if(Pm(s),n===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Xp(n,s),hl(s,c,null,l);var A=s.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Hs(Error(t(423)),s),s=Lm(n,s,c,l,p);break e}else if(c!==p){p=Hs(Error(t(424)),s),s=Lm(n,s,c,l,p);break e}else for($n=Mr(s.stateNode.containerInfo.firstChild),jn=s,Yt=!0,pi=null,l=Gp(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Os(),c===p){s=Ji(n,s,l);break e}Ln(n,s,c,l)}s=s.child}return s;case 5:return Yp(s),n===null&&Pc(s),c=s.type,p=s.pendingProps,_=n!==null?n.memoizedProps:null,A=p.children,Sc(c,p)?A=null:_!==null&&Sc(c,_)&&(s.flags|=32),Rm(n,s),Ln(n,s,A,l),s.child;case 6:return n===null&&Pc(s),null;case 13:return Nm(n,s,l);case 4:return kc(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=ks(s,null,c,l):Ln(n,s,c,l),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),wm(n,s,c,p,l);case 7:return Ln(n,s,s.pendingProps,l),s.child;case 8:return Ln(n,s,s.pendingProps.children,l),s.child;case 12:return Ln(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,A=p.value,Ht(cl,c._currentValue),c._currentValue=A,_!==null)if(hi(_.value,A)){if(_.children===p.children&&!On.current){s=Ji(n,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var D=_.dependencies;if(D!==null){A=_.child;for(var z=D.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=Zi(-1,l&-l),z.tag=2;var ue=_.updateQueue;if(ue!==null){ue=ue.shared;var Se=ue.pending;Se===null?z.next=z:(z.next=Se.next,Se.next=z),ue.pending=z}}_.lanes|=l,z=_.alternate,z!==null&&(z.lanes|=l),Uc(_.return,l,s),D.lanes|=l;break}z=z.next}}else if(_.tag===10)A=_.type===s.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,D=A.alternate,D!==null&&(D.lanes|=l),Uc(A,l,s),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===s){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Ln(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,zs(s,l),p=ii(p),c=c(p),s.flags|=1,Ln(n,s,c,l),s.child;case 14:return c=s.type,p=mi(c,s.pendingProps),p=mi(c.type,p),Tm(n,s,c,p,l);case 15:return bm(n,s,s.type,s.pendingProps,l);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),Ml(n,s),s.tag=1,kn(c)?(n=!0,rl(s)):n=!1,zs(s,l),vm(s,c,p),Zc(s,c,p,l),tf(null,s,c,!0,n,l);case 19:return Dm(n,s,l);case 22:return Am(n,s,l)}throw Error(t(156,s.tag))};function rg(n,s){return zo(n,s)}function Rx(n,s,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,s,l,c){return new Rx(n,s,l,c)}function Mf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Cx(n){if(typeof n=="function")return Mf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===B)return 14}return 2}function Ir(n,s){var l=n.alternate;return l===null?(l=ai(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Il(n,s,l,c,p,_){var A=2;if(c=n,typeof n=="function")Mf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return ss(l.children,p,_,s);case w:A=8,p|=8;break;case I:return n=ai(12,l,s,p|2),n.elementType=I,n.lanes=_,n;case ce:return n=ai(13,l,s,p),n.elementType=ce,n.lanes=_,n;case fe:return n=ai(19,l,s,p),n.elementType=fe,n.lanes=_,n;case G:return Dl(l,p,_,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:A=10;break e;case k:A=9;break e;case Z:A=11;break e;case B:A=14;break e;case W:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=ai(A,l,s,p),s.elementType=n,s.type=c,s.lanes=_,s}function ss(n,s,l,c){return n=ai(7,n,c,s),n.lanes=l,n}function Dl(n,s,l,c){return n=ai(22,n,c,s),n.elementType=G,n.lanes=l,n.stateNode={isHidden:!1},n}function Ef(n,s,l){return n=ai(6,n,null,s),n.lanes=l,n}function wf(n,s,l){return s=ai(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Px(n,s,l,c,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Tf(n,s,l,c,p,_,A,D,z){return n=new Px(n,s,l,D,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),n.current=_,_.stateNode=n,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(_),n}function Lx(n,s,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:s,implementation:l}}function sg(n){if(!n)return wr;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return Ip(n,l,s)}return s}function ag(n,s,l,c,p,_,A,D,z){return n=Tf(l,c,!0,n,p,_,A,D,z),n.context=sg(null),l=n.current,c=Nn(),p=Lr(l),_=Zi(c,p),_.callback=s??null,Ar(l,_,p),n.current.lanes=p,gt(n,p,c),Vn(n,c),n}function Ul(n,s,l,c){var p=s.current,_=Nn(),A=Lr(p);return l=sg(l),s.context===null?s.context=l:s.pendingContext=l,s=Zi(_,A),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Ar(p,s,A),n!==null&&(_i(n,p,A,_),dl(n,p,A)),A}function Fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function og(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function bf(n,s){og(n,s),(n=n.alternate)&&og(n,s)}function Nx(){return null}var lg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Af(n){this._internalRoot=n}Ol.prototype.render=Af.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ul(n,s,null,null)},Ol.prototype.unmount=Af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ns(function(){Ul(null,n,null,null)}),s[ji]=null}};function Ol(n){this._internalRoot=n}Ol.prototype.unstable_scheduleHydration=function(n){if(n){var s=Nt();n={blockedOn:null,target:n,priority:s};for(var l=0;l<xr.length&&s!==0&&s<xr[l].priority;l++);xr.splice(l,0,n),l===0&&Yh(n)}};function Rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ug(){}function Ix(n,s,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var ue=Fl(A);_.call(ue)}}var A=ag(s,c,n,0,null,!1,!1,"",ug);return n._reactRootContainer=A,n[ji]=A.current,Va(n.nodeType===8?n.parentNode:n),ns(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var D=c;c=function(){var ue=Fl(z);D.call(ue)}}var z=Tf(n,0,!1,null,null,!1,!1,"",ug);return n._reactRootContainer=z,n[ji]=z.current,Va(n.nodeType===8?n.parentNode:n),ns(function(){Ul(s,z,l,c)}),z}function Bl(n,s,l,c,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var D=p;p=function(){var z=Fl(A);D.call(z)}}Ul(s,A,n,p)}else A=Ix(l,s,n,p,c);return Fl(A)}Ct=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=Et(s.pendingLanes);l!==0&&(Fn(s,l|1),Vn(s,Zt()),(Tt&6)===0&&(Xs=Zt()+500,Tr()))}break;case 13:ns(function(){var c=Ki(n,1);if(c!==null){var p=Nn();_i(c,n,1,p)}}),bf(n,1)}},Wt=function(n){if(n.tag===13){var s=Ki(n,134217728);if(s!==null){var l=Nn();_i(s,n,134217728,l)}bf(n,134217728)}},fi=function(n){if(n.tag===13){var s=Lr(n),l=Ki(n,s);if(l!==null){var c=Nn();_i(l,n,s,c)}bf(n,s)}},Nt=function(){return vt},di=function(n,s){var l=vt;try{return vt=n,s()}finally{vt=l}},at=function(n,s,l){switch(s){case"input":if(Kt(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==n&&c.form===n.form){var p=nl(c);if(!p)throw Error(t(90));kt(c),Kt(c,p)}}}break;case"textarea":Ue(n,l);break;case"select":s=l.value,s!=null&&zt(n,!!l.multiple,s,!1)}},Pe=xf,xe=ns;var Dx={usingClientEntryPoint:!1,Events:[Wa,Ns,nl,pe,Be,xf]},ro={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ux={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ta(n),n===null?null:n.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{ne=zl.inject(Ux),Le=zl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dx,Hn.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(s))throw Error(t(200));return Lx(n,s,null,l)},Hn.createRoot=function(n,s){if(!Rf(n))throw Error(t(299));var l=!1,c="",p=lg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Tf(n,1,!1,null,null,l,!1,c,p),n[ji]=s.current,Va(n.nodeType===8?n.parentNode:n),new Af(s)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ta(s),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return ns(n)},Hn.hydrate=function(n,s,l){if(!kl(s))throw Error(t(200));return Bl(null,n,s,!0,l)},Hn.hydrateRoot=function(n,s,l){if(!Rf(n))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",A=lg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=ag(s,null,n,1,l??null,p,!1,_,A),n[ji]=s.current,Va(n),c)for(n=0;n<c.length;n++)l=c[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Ol(s)},Hn.render=function(n,s,l){if(!kl(s))throw Error(t(200));return Bl(null,n,s,!1,l)},Hn.unmountComponentAtNode=function(n){if(!kl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Bl(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},Hn.unstable_batchedUpdates=xf,Hn.unstable_renderSubtreeIntoContainer=function(n,s,l,c){if(!kl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Bl(n,s,l,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var vg;function Gx(){if(vg)return Lf.exports;vg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lf.exports=Hx(),Lf.exports}var _g;function Wx(){if(_g)return Vl;_g=1;var r=Gx();return Vl.createRoot=r.createRoot,Vl.hydrateRoot=r.hydrateRoot,Vl}var Xx=Wx(),ae=vh();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xg="popstate";function jx(r={}){function e(i,a){let{pathname:o,search:u,hash:f}=i.location;return yd("",{pathname:o,search:u,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:wo(a)}return Yx(e,t,null,r)}function tn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Bi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $x(){return Math.random().toString(36).substring(2,10)}function yg(r,e){return{usr:r.state,key:r.key,idx:e}}function yd(r,e,t=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?va(e):e,state:t,key:e&&e.key||i||$x()}}function wo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function va(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function Yx(r,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,f="POP",d=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function v(){f="POP";let y=g(),S=y==null?null:y-h;h=y,d&&d({action:f,location:b.location,delta:S})}function m(y,S){f="PUSH";let T=yd(b.location,y,S);h=g()+1;let R=yg(T,h),P=b.createHref(T);try{u.pushState(R,"",P)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;a.location.assign(P)}o&&d&&d({action:f,location:b.location,delta:1})}function x(y,S){f="REPLACE";let T=yd(b.location,y,S);h=g();let R=yg(T,h),P=b.createHref(T);u.replaceState(R,"",P),o&&d&&d({action:f,location:b.location,delta:0})}function M(y){return qx(y)}let b={get action(){return f},get location(){return r(a,u)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(xg,v),d=y,()=>{a.removeEventListener(xg,v),d=null}},createHref(y){return e(a,y)},createURL:M,encodeLocation(y){let S=M(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:x,go(y){return u.go(y)}};return b}function qx(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),tn(t,"No window.location.(origin|href) available to create URL");let i=typeof r=="string"?r:wo(r);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function q0(r,e,t="/"){return Kx(r,e,t,!1)}function Kx(r,e,t,i){let a=typeof e=="string"?va(e):e,o=fr(a.pathname||"/",t);if(o==null)return null;let u=K0(r);Zx(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let h=ly(o);f=ay(u[d],h,i)}return f}function K0(r,e=[],t=[],i="",a=!1){let o=(u,f,d=a,h)=>{let g={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&d)return;tn(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let v=lr([i,g.relativePath]),m=t.concat(g);u.children&&u.children.length>0&&(tn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),K0(u.children,e,m,v,d)),!(u.path==null&&!u.index)&&e.push({path:v,score:ry(v,u.index),routesMeta:m})};return r.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))o(u,f);else for(let h of Z0(u.path))o(u,f,!0,h)}),e}function Z0(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let u=Z0(i.join("/")),f=[];return f.push(...u.map(d=>d===""?o:[o,d].join("/"))),a&&f.push(...u),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function Zx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:sy(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Jx=/^:[\w-]+$/,Qx=3,ey=2,ty=1,ny=10,iy=-2,Sg=r=>r==="*";function ry(r,e){let t=r.split("/"),i=t.length;return t.some(Sg)&&(i+=iy),e&&(i+=ey),t.filter(a=>!Sg(a)).reduce((a,o)=>a+(Jx.test(o)?Qx:o===""?ty:ny),i)}function sy(r,e){return r.length===e.length&&r.slice(0,-1).every((i,a)=>i===e[a])?r[r.length-1]-e[e.length-1]:0}function ay(r,e,t=!1){let{routesMeta:i}=r,a={},o="/",u=[];for(let f=0;f<i.length;++f){let d=i[f],h=f===i.length-1,g=o==="/"?e:e.slice(o.length)||"/",v=Cu({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},g),m=d.route;if(!v&&h&&t&&!i[i.length-1].route.index&&(v=Cu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:lr([o,v.pathname]),pathnameBase:dy(lr([o,v.pathnameBase])),route:m}),v.pathnameBase!=="/"&&(o=lr([o,v.pathnameBase]))}return u}function Cu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=oy(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((h,{paramName:g,isOptional:v},m)=>{if(g==="*"){let M=f[m]||"";u=o.slice(0,o.length-M.length).replace(/(.)\/+$/,"$1")}const x=f[m];return v&&!x?h[g]=void 0:h[g]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:u,pattern:r}}function oy(r,e=!1,t=!0){Bi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(i.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function ly(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function fr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}var uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function cy(r,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof r=="string"?va(r):r,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=Mg(t.substring(1),"/"):o=Mg(t,e)):o=e,{pathname:o,search:hy(i),hash:py(a)}}function Mg(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Df(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fy(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function J0(r){let e=fy(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Q0(r,e,t,i=!1){let a;typeof r=="string"?a=va(r):(a={...r},tn(!a.pathname||!a.pathname.includes("?"),Df("?","pathname","search",a)),tn(!a.pathname||!a.pathname.includes("#"),Df("#","pathname","hash",a)),tn(!a.search||!a.search.includes("#"),Df("#","search","hash",a)));let o=r===""||a.pathname==="",u=o?"/":a.pathname,f;if(u==null)f=t;else{let v=e.length-1;if(!i&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),v-=1;a.pathname=m.join("/")}f=v>=0?e[v]:"/"}let d=cy(a,f),h=u&&u!=="/"&&u.endsWith("/"),g=(o||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||g)&&(d.pathname+="/"),d}var lr=r=>r.join("/").replace(/\/\/+/g,"/"),dy=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),hy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,py=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,my=class{constructor(r,e,t,i=!1){this.status=r,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function gy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function vy(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function tv(r,e){let t=r;if(typeof t!="string"||!uy.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,a=!1;if(ev)try{let o=new URL(window.location.href),u=t.startsWith("//")?new URL(o.protocol+t):new URL(t),f=fr(u.pathname,e);u.origin===o.origin&&f!=null?t=f+u.search+u.hash:a=!0}catch{Bi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var nv=["POST","PUT","PATCH","DELETE"];new Set(nv);var _y=["GET",...nv];new Set(_y);var _a=ae.createContext(null);_a.displayName="DataRouter";var zu=ae.createContext(null);zu.displayName="DataRouterState";var xy=ae.createContext(!1),iv=ae.createContext({isTransitioning:!1});iv.displayName="ViewTransition";var yy=ae.createContext(new Map);yy.displayName="Fetchers";var Sy=ae.createContext(null);Sy.displayName="Await";var ci=ae.createContext(null);ci.displayName="Navigation";var Io=ae.createContext(null);Io.displayName="Location";var pr=ae.createContext({outlet:null,matches:[],isDataRoute:!1});pr.displayName="Route";var _h=ae.createContext(null);_h.displayName="RouteError";var rv="REACT_ROUTER_ERROR",My="REDIRECT",Ey="ROUTE_ERROR_RESPONSE";function wy(r){if(r.startsWith(`${rv}:${My}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Ty(r){if(r.startsWith(`${rv}:${Ey}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new my(e.status,e.statusText,e.data)}catch{}}function by(r,{relative:e}={}){tn(Do(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=ae.useContext(ci),{hash:a,pathname:o,search:u}=Uo(r,{relative:e}),f=o;return t!=="/"&&(f=o==="/"?t:lr([t,o])),i.createHref({pathname:f,search:u,hash:a})}function Do(){return ae.useContext(Io)!=null}function _s(){return tn(Do(),"useLocation() may be used only in the context of a <Router> component."),ae.useContext(Io).location}var sv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function av(r){ae.useContext(ci).static||ae.useLayoutEffect(r)}function Vu(){let{isDataRoute:r}=ae.useContext(pr);return r?By():Ay()}function Ay(){tn(Do(),"useNavigate() may be used only in the context of a <Router> component.");let r=ae.useContext(_a),{basename:e,navigator:t}=ae.useContext(ci),{matches:i}=ae.useContext(pr),{pathname:a}=_s(),o=JSON.stringify(J0(i)),u=ae.useRef(!1);return av(()=>{u.current=!0}),ae.useCallback((d,h={})=>{if(Bi(u.current,sv),!u.current)return;if(typeof d=="number"){t.go(d);return}let g=Q0(d,JSON.parse(o),a,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:lr([e,g.pathname])),(h.replace?t.replace:t.push)(g,h.state,h)},[e,t,o,a,r])}ae.createContext(null);function Uo(r,{relative:e}={}){let{matches:t}=ae.useContext(pr),{pathname:i}=_s(),a=JSON.stringify(J0(t));return ae.useMemo(()=>Q0(r,JSON.parse(a),i,e==="path"),[r,a,i,e])}function Ry(r,e){return ov(r,e)}function ov(r,e,t,i,a){var T;tn(Do(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=ae.useContext(ci),{matches:u}=ae.useContext(pr),f=u[u.length-1],d=f?f.params:{},h=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let R=v&&v.path||"";uv(h,!v||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let m=_s(),x;if(e){let R=typeof e=="string"?va(e):e;tn(g==="/"||((T=R.pathname)==null?void 0:T.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),x=R}else x=m;let M=x.pathname||"/",b=M;if(g!=="/"){let R=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=q0(r,{pathname:b});Bi(v||y!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Bi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Iy(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},d,R.params),pathname:lr([g,o.encodeLocation?o.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:lr([g,o.encodeLocation?o.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),u,t,i,a);return e&&S?ae.createElement(Io.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},S):S}function Cy(){let r=ky(),e=gy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=ae.createElement(ae.Fragment,null,ae.createElement("p",null,"💿 Hey developer 👋"),ae.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ae.createElement("code",{style:o},"ErrorBoundary")," or"," ",ae.createElement("code",{style:o},"errorElement")," prop on your route.")),ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?ae.createElement("pre",{style:a},t):null,u)}var Py=ae.createElement(Cy,null),lv=class extends ae.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Ty(r.digest);t&&(r=t)}let e=r!==void 0?ae.createElement(pr.Provider,{value:this.props.routeContext},ae.createElement(_h.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ae.createElement(Ly,{error:r},e):e}};lv.contextType=xy;var Uf=new WeakMap;function Ly({children:r,error:e}){let{basename:t}=ae.useContext(ci);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=wy(e.digest);if(i){let a=Uf.get(e);if(a)throw a;let o=tv(i.location,t);if(ev&&!Uf.get(e))if(o.isExternal||i.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw Uf.set(e,u),u}return ae.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return r}function Ny({routeContext:r,match:e,children:t}){let i=ae.useContext(_a);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),ae.createElement(pr.Provider,{value:r},t)}function Iy(r,e=[],t=null,i=null,a=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let g=o.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,d=-1;if(t)for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=g),v.route.id){let{loaderData:m,errors:x}=t,M=v.route.loader&&!m.hasOwnProperty(v.route.id)&&(!x||x[v.route.id]===void 0);if(v.route.lazy||M){f=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}let h=t&&i?(g,v)=>{var m,x;i(g,{location:t.location,params:((x=(m=t.matches)==null?void 0:m[0])==null?void 0:x.params)??{},unstable_pattern:vy(t.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,m)=>{let x,M=!1,b=null,y=null;t&&(x=u&&v.route.id?u[v.route.id]:void 0,b=v.route.errorElement||Py,f&&(d<0&&m===0?(uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):d===m&&(M=!0,y=v.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),T=()=>{let R;return x?R=b:M?R=y:v.route.Component?R=ae.createElement(v.route.Component,null):v.route.element?R=v.route.element:R=g,ae.createElement(Ny,{match:v,routeContext:{outlet:g,matches:S,isDataRoute:t!=null},children:R})};return t&&(v.route.ErrorBoundary||v.route.errorElement||m===0)?ae.createElement(lv,{location:t.location,revalidation:t.revalidation,component:b,error:x,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):T()},null)}function xh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dy(r){let e=ae.useContext(_a);return tn(e,xh(r)),e}function Uy(r){let e=ae.useContext(zu);return tn(e,xh(r)),e}function Fy(r){let e=ae.useContext(pr);return tn(e,xh(r)),e}function yh(r){let e=Fy(r),t=e.matches[e.matches.length-1];return tn(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Oy(){return yh("useRouteId")}function ky(){var i;let r=ae.useContext(_h),e=Uy("useRouteError"),t=yh("useRouteError");return r!==void 0?r:(i=e.errors)==null?void 0:i[t]}function By(){let{router:r}=Dy("useNavigate"),e=yh("useNavigate"),t=ae.useRef(!1);return av(()=>{t.current=!0}),ae.useCallback(async(a,o={})=>{Bi(t.current,sv),t.current&&(typeof a=="number"?await r.navigate(a):await r.navigate(a,{fromRouteId:e,...o}))},[r,e])}var Eg={};function uv(r,e,t){!e&&!Eg[r]&&(Eg[r]=!0,Bi(!1,t))}ae.memo(zy);function zy({routes:r,future:e,state:t,onError:i}){return ov(r,void 0,t,i,e)}function yu(r){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vy({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1,unstable_useTransitions:u}){tn(!Do(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=ae.useMemo(()=>({basename:f,navigator:a,static:o,unstable_useTransitions:u,future:{}}),[f,a,o,u]);typeof t=="string"&&(t=va(t));let{pathname:h="/",search:g="",hash:v="",state:m=null,key:x="default"}=t,M=ae.useMemo(()=>{let b=fr(h,f);return b==null?null:{location:{pathname:b,search:g,hash:v,state:m,key:x},navigationType:i}},[f,h,g,v,m,x,i]);return Bi(M!=null,`<Router basename="${f}"> is not able to match the URL "${h}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ae.createElement(ci.Provider,{value:d},ae.createElement(Io.Provider,{children:e,value:M}))}function Hy({children:r,location:e}){return Ry(Sd(r),e)}function Sd(r,e=[]){let t=[];return ae.Children.forEach(r,(i,a)=>{if(!ae.isValidElement(i))return;let o=[...e,a];if(i.type===ae.Fragment){t.push.apply(t,Sd(i.props.children,o));return}tn(i.type===yu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Sd(i.props.children,o)),t.push(u)}),t}var Su="get",Mu="application/x-www-form-urlencoded";function Hu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Gy(r){return Hu(r)&&r.tagName.toLowerCase()==="button"}function Wy(r){return Hu(r)&&r.tagName.toLowerCase()==="form"}function Xy(r){return Hu(r)&&r.tagName.toLowerCase()==="input"}function jy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function $y(r,e){return r.button===0&&(!e||e==="_self")&&!jy(r)}var Hl=null;function Yy(){if(Hl===null)try{new FormData(document.createElement("form"),0),Hl=!1}catch{Hl=!0}return Hl}var qy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ff(r){return r!=null&&!qy.has(r)?(Bi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mu}"`),null):r}function Ky(r,e){let t,i,a,o,u;if(Wy(r)){let f=r.getAttribute("action");i=f?fr(f,e):null,t=r.getAttribute("method")||Su,a=Ff(r.getAttribute("enctype"))||Mu,o=new FormData(r)}else if(Gy(r)||Xy(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(i=d?fr(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Su,a=Ff(r.getAttribute("formenctype"))||Ff(f.getAttribute("enctype"))||Mu,o=new FormData(f,r),!Yy()){let{name:h,type:g,value:v}=r;if(g==="image"){let m=h?`${h}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else h&&o.append(h,v)}}else{if(Hu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Su,i=null,a=Mu,u=r}return o&&a==="text/plain"&&(u=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Zy(r,e,t,i){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${i}`:a.pathname=`${a.pathname}.${i}`:a.pathname==="/"?a.pathname=`_root.${i}`:e&&fr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function Jy(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function eS(r,e,t){let i=await Promise.all(r.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await Jy(o,t);return u.links?u.links():[]}return[]}));return rS(i.flat(1).filter(Qy).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function wg(r,e,t,i,a,o){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,f=(d,h)=>{var g;return t[h].pathname!==d.pathname||((g=t[h].route.path)==null?void 0:g.endsWith("*"))&&t[h].params["*"]!==d.params["*"]};return o==="assets"?e.filter((d,h)=>u(d,h)||f(d,h)):o==="data"?e.filter((d,h)=>{var v;let g=i.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(u(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function tS(r,e,{includeHydrateFallback:t}={}){return nS(r.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function nS(r){return[...new Set(r)]}function iS(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function rS(r,e){let t=new Set;return new Set(e),r.reduce((i,a)=>{let o=JSON.stringify(iS(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function cv(){let r=ae.useContext(_a);return Sh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function sS(){let r=ae.useContext(zu);return Sh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Mh=ae.createContext(void 0);Mh.displayName="FrameworkContext";function fv(){let r=ae.useContext(Mh);return Sh(r,"You must render this element inside a <HydratedRouter> element"),r}function aS(r,e){let t=ae.useContext(Mh),[i,a]=ae.useState(!1),[o,u]=ae.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,m=ae.useRef(null);ae.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let b=S=>{S.forEach(T=>{u(T.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return m.current&&y.observe(m.current),()=>{y.disconnect()}}},[r]),ae.useEffect(()=>{if(i){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[i]);let x=()=>{a(!0)},M=()=>{a(!1),u(!1)};return t?r!=="intent"?[o,m,{}]:[o,m,{onFocus:ao(f,x),onBlur:ao(d,M),onMouseEnter:ao(h,x),onMouseLeave:ao(g,M),onTouchStart:ao(v,x)}]:[!1,m,{}]}function ao(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function oS({page:r,...e}){let{router:t}=cv(),i=ae.useMemo(()=>q0(t.routes,r,t.basename),[t.routes,r,t.basename]);return i?ae.createElement(uS,{page:r,matches:i,...e}):null}function lS(r){let{manifest:e,routeModules:t}=fv(),[i,a]=ae.useState([]);return ae.useEffect(()=>{let o=!1;return eS(r,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[r,e,t]),i}function uS({page:r,matches:e,...t}){let i=_s(),{future:a,manifest:o,routeModules:u}=fv(),{basename:f}=cv(),{loaderData:d,matches:h}=sS(),g=ae.useMemo(()=>wg(r,e,h,o,i,"data"),[r,e,h,o,i]),v=ae.useMemo(()=>wg(r,e,h,o,i,"assets"),[r,e,h,o,i]),m=ae.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let b=new Set,y=!1;if(e.forEach(T=>{var P;let R=o.routes[T.route.id];!R||!R.hasLoader||(!g.some(U=>U.route.id===T.route.id)&&T.route.id in d&&((P=u[T.route.id])!=null&&P.shouldRevalidate)||R.hasClientLoader?y=!0:b.add(T.route.id))}),b.size===0)return[];let S=Zy(r,f,a.unstable_trailingSlashAwareDataRequests,"data");return y&&b.size>0&&S.searchParams.set("_routes",e.filter(T=>b.has(T.route.id)).map(T=>T.route.id).join(",")),[S.pathname+S.search]},[f,a.unstable_trailingSlashAwareDataRequests,d,i,o,g,e,r,u]),x=ae.useMemo(()=>tS(v,o),[v,o]),M=lS(v);return ae.createElement(ae.Fragment,null,m.map(b=>ae.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),x.map(b=>ae.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),M.map(({key:b,link:y})=>ae.createElement("link",{key:b,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function cS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var fS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fS&&(window.__reactRouterVersion="7.13.0")}catch{}function dS({basename:r,children:e,unstable_useTransitions:t,window:i}){let a=ae.useRef();a.current==null&&(a.current=jx({window:i,v5Compat:!0}));let o=a.current,[u,f]=ae.useState({action:o.action,location:o.location}),d=ae.useCallback(h=>{t===!1?f(h):ae.startTransition(()=>f(h))},[t]);return ae.useLayoutEffect(()=>o.listen(d),[o,d]),ae.createElement(Vy,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o,unstable_useTransitions:t})}var dv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=ae.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:u,state:f,target:d,to:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:m,...x},M){let{basename:b,unstable_useTransitions:y}=ae.useContext(ci),S=typeof h=="string"&&dv.test(h),T=tv(h,b);h=T.to;let R=by(h,{relative:a}),[P,U,N]=aS(i,x),O=gS(h,{replace:u,state:f,target:d,preventScrollReset:g,relative:a,viewTransition:v,unstable_defaultShouldRevalidate:m,unstable_useTransitions:y});function w(V){e&&e(V),V.defaultPrevented||O(V)}let I=ae.createElement("a",{...x,...N,href:T.absoluteURL||R,onClick:T.isExternal||o?e:w,ref:cS(M,U),target:d,"data-discover":!S&&t==="render"?"true":void 0});return P&&!S?ae.createElement(ae.Fragment,null,I,ae.createElement(oS,{page:R})):I});hv.displayName="Link";var hS=ae.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:u,viewTransition:f,children:d,...h},g){let v=Uo(u,{relative:h.relative}),m=_s(),x=ae.useContext(zu),{navigator:M,basename:b}=ae.useContext(ci),y=x!=null&&SS(v)&&f===!0,S=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,T=m.pathname,R=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(T=T.toLowerCase(),R=R?R.toLowerCase():null,S=S.toLowerCase()),R&&b&&(R=fr(R,b)||R);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let U=T===S||!a&&T.startsWith(S)&&T.charAt(P)==="/",N=R!=null&&(R===S||!a&&R.startsWith(S)&&R.charAt(S.length)==="/"),O={isActive:U,isPending:N,isTransitioning:y},w=U?e:void 0,I;typeof i=="function"?I=i(O):I=[i,U?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let V=typeof o=="function"?o(O):o;return ae.createElement(hv,{...h,"aria-current":w,className:I,ref:g,style:V,to:u,viewTransition:f},typeof d=="function"?d(O):d)});hS.displayName="NavLink";var pS=ae.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:u=Su,action:f,onSubmit:d,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:m,...x},M)=>{let{unstable_useTransitions:b}=ae.useContext(ci),y=xS(),S=yS(f,{relative:h}),T=u.toLowerCase()==="get"?"get":"post",R=typeof f=="string"&&dv.test(f),P=U=>{if(d&&d(U),U.defaultPrevented)return;U.preventDefault();let N=U.nativeEvent.submitter,O=(N==null?void 0:N.getAttribute("formmethod"))||u,w=()=>y(N||U.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:a,state:o,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:m});b&&t!==!1?ae.startTransition(()=>w()):w()};return ae.createElement("form",{ref:M,method:T,action:S,onSubmit:i?d:P,...x,"data-discover":!R&&r==="render"?"true":void 0})});pS.displayName="Form";function mS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pv(r){let e=ae.useContext(_a);return tn(e,mS(r)),e}function gS(r,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:d}={}){let h=Vu(),g=_s(),v=Uo(r,{relative:o});return ae.useCallback(m=>{if($y(m,e)){m.preventDefault();let x=t!==void 0?t:wo(g)===wo(v),M=()=>h(r,{replace:x,state:i,preventScrollReset:a,relative:o,viewTransition:u,unstable_defaultShouldRevalidate:f});d?ae.startTransition(()=>M()):M()}},[g,h,v,t,i,e,r,a,o,u,f,d])}var vS=0,_S=()=>`__${String(++vS)}__`;function xS(){let{router:r}=pv("useSubmit"),{basename:e}=ae.useContext(ci),t=Oy(),i=r.fetch,a=r.navigate;return ae.useCallback(async(o,u={})=>{let{action:f,method:d,encType:h,formData:g,body:v}=Ky(o,e);if(u.navigate===!1){let m=u.fetcherKey||_S();await i(m,t,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||d,formEncType:u.encType||h,flushSync:u.flushSync})}else await a(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||d,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,a,e,t])}function yS(r,{relative:e}={}){let{basename:t}=ae.useContext(ci),i=ae.useContext(pr);tn(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...Uo(r||".",{relative:e})},u=_s();if(r==null){o.search=u.search;let f=new URLSearchParams(o.search),d=f.getAll("index");if(d.some(g=>g==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();o.search=g?`?${g}`:""}}return(!r||r===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:lr([t,o.pathname])),wo(o)}function SS(r,{relative:e}={}){let t=ae.useContext(iv);tn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=pv("useViewTransitionState"),a=Uo(r,{relative:e});if(!t.isTransitioning)return!1;let o=fr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=fr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Cu(a.pathname,u)!=null||Cu(a.pathname,o)!=null}const MS="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function ES(r){const[e,t]=ae.useState(!1),i=()=>{t(!0)},{src:a,alt:o,style:u,className:f,...d}=r;return e?q.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:u,children:q.jsx("div",{className:"flex items-center justify-center w-full h-full",children:q.jsx("img",{src:MS,alt:"Error loading image",...d,"data-original-url":a})})}):q.jsx("img",{src:a,alt:o,className:f,style:u,...d,onError:i})}const wS="/assets/iconaws-CrGCPrQX.png";function qt(r){const e=Math.sin(r+1)*1e4;return e-Math.floor(e)}const TS=["W","O","R","D","L","E","G","R","U"],bS=[{num:"1",title:"Setup AR Mode",body:"Point your camera at a flat surface and wait for plane detection."},{num:"2",title:"Smash Asteroids",body:"Tap on 3D asteroids to shatter them and collect falling letters."},{num:"3",title:"Solve Words",body:"Arrange letters to complete 5-letter words from the Warden's Codex."},{num:"4",title:"Color Feedback",body:null,feedback:[{dot:"#10b981",label:"Green",desc:"Correct letter, correct position"},{dot:"#facc15",label:"Yellow",desc:"Correct letter, wrong position"},{dot:"#6b7280",label:"Gray",desc:"Letter not in word"}]},{num:"5",title:"Defeat the Boss",body:"Survive enemy attacks and complete the Final Seal word to defeat the Rift Overlord."}];function AS(){const r=Vu(),[e,t]=ae.useState(!1),i=ae.useMemo(()=>Array.from({length:30},(d,h)=>({id:h,x:qt(h*7.31)*100,y:qt(h*3.71)*100,size:qt(h*5.13)>.8?3:2,delay:`${qt(h*2.91)*4}s`,duration:`${1.5+qt(h*1.33)*2.5}s`})),[]),a=ae.useMemo(()=>TS.map((d,h)=>({id:h,char:d,x:qt(h*11.71)*82+5,y:qt(h*8.31)*75+5,color:["#10b981","#facc15","#a78bfa"][h%3],border:["#10b981","#facc15","#8b5cf6"][h%3],delay:`${qt(h*6.71)*4}s`,duration:`${5+qt(h*9.11)*4}s`,drift:`${(qt(h*4.11)-.5)*40}px`})),[]),o=ae.useMemo(()=>Array.from({length:7},(d,h)=>({id:h,x:qt(h*13.11)*88+3,size:Math.floor(4+qt(h*5.91)*6),delay:`${qt(h*7.71)*7}s`,duration:`${3+qt(h*2.31)*3}s`,xDrift:`${(qt(h*3.71)-.5)*50}px`})),[]),u=ae.useMemo(()=>Array.from({length:14},(d,h)=>({id:h,x:qt(h*17.31)*85+5,color:qt(h*6.31)>.5?"#f97316":"#facc15",size:Math.floor(2+qt(h*3.91)*3),delay:`${qt(h*4.91)*6}s`,duration:`${2+qt(h*8.11)*2.5}s`})),[]),f=ae.useMemo(()=>Array.from({length:8},(d,h)=>({id:h,x:qt(h*9.31)*80+10,y:qt(h*6.11)*70+15,delay:`${qt(h*3.51)*6}s`,duration:`${.4+qt(h*7.11)*.5}s`})),[]);return q.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 py-12 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[q.jsx("style",{children:`
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
      `}),i.map(d=>q.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:`${d.size}px`,height:`${d.size}px`,animation:`twinkle ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:1}},`star-${d.id}`)),a.map(d=>q.jsx("div",{className:"absolute flex items-center justify-center pointer-events-none select-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:"22px",height:"22px",border:`2px solid ${d.border}`,backgroundColor:"#1a0a2e",color:d.color,fontSize:"8px",fontFamily:"'Press Start 2P', monospace",textShadow:`0 0 8px ${d.color}`,boxShadow:`0 0 6px ${d.border}55, inset 0 0 4px ${d.border}22`,"--drift":d.drift,animation:`letterFloat ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:2},children:d.char},`letter-${d.id}`)),o.map(d=>q.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,top:"-12px",width:`${d.size}px`,height:`${d.size}px`,backgroundColor:"#78716c",boxShadow:"1px 1px 0 #a8a29e, 0 0 4px #f97316","--x-drift":d.xDrift,animation:`meteorFall ${d.duration} ${d.delay} linear infinite`,zIndex:2}},`meteor-${d.id}`)),u.map(d=>q.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,bottom:"8px",width:`${d.size}px`,height:`${d.size}px`,backgroundColor:d.color,boxShadow:`0 0 4px ${d.color}, 0 0 8px ${d.color}88`,animation:`emberRise ${d.duration} ${d.delay} ease-out infinite`,zIndex:2}},`ember-${d.id}`)),f.map(d=>q.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:"4px",height:"4px",backgroundColor:"#60a5fa",boxShadow:"0 0 6px #3b82f6, 0 0 14px #93c5fd, 2px -2px 0 #bfdbfe, -2px 2px 0 #bfdbfe",animation:`electricSpark ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:2}},`spark-${d.id}`)),q.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),q.jsxs("div",{className:"flex flex-col items-center mt-8 relative z-10",children:[q.jsx("div",{className:"w-32 h-32 mb-6 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2",style:{imageRendering:"pixelated",animation:"iconGlow 4s ease-in-out infinite"},children:q.jsx(ES,{src:wS,alt:"AR Wordle Smasher Icon",className:"w-full h-full object-contain",style:{imageRendering:"pixelated"}})}),q.jsxs("h1",{className:"text-xl text-center mb-4 leading-relaxed tracking-wide",children:[q.jsx("span",{className:"text-[#10b981]",children:"AR"})," ",q.jsx("span",{className:"text-[#8b5cf6]",children:"WORDLE"}),q.jsx("br",{}),q.jsx("span",{className:"text-[#ec4899]",children:"SMASHER"})]}),q.jsx("p",{className:"text-[8px] text-[#a78bfa] text-center mb-2 tracking-wider uppercase leading-relaxed",children:"The Warden's Codex"})]}),q.jsx("div",{className:"flex flex-col items-center space-y-6 flex-grow justify-center relative z-10 w-full",children:q.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#8b5cf6] p-4 w-full relative",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsxs("p",{className:"text-[9px] text-white/90 text-center leading-[16px]",children:["Smash meteors in AR, collect letters, and solve puzzles to defeat the"," ",q.jsx("span",{className:"text-[#ec4899]",children:"Rift Overlord"})]})]})}),q.jsxs("div",{className:"w-full space-y-4 mb-8 relative z-10",children:[q.jsxs("button",{onClick:()=>r("/mission"),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> START MISSION <"]}),q.jsxs("button",{onClick:()=>t(!0),className:"w-full bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"How to Play"]})]}),e&&q.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center px-4 pb-0",style:{backgroundColor:"rgba(10,1,24,0.85)",animation:"backdropFadeIn 0.25s ease-out"},onClick:()=>t(!1),children:q.jsxs("div",{className:"w-full max-w-md bg-[#0a0118] border-4 border-[#8b5cf6] relative overflow-y-auto",style:{maxHeight:"88vh",animation:"modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},onClick:d=>d.stopPropagation(),children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsxs("div",{className:"bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between",style:{animation:"headerSlideDown 0.3s 0.15s ease-out both"},children:[q.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"HOW TO PLAY"}),q.jsx("button",{onClick:()=>t(!1),className:"text-[#a78bfa] hover:text-white text-[9px] transition-colors",children:"✕"})]}),q.jsx("div",{className:"px-5 py-4 space-y-5",children:bS.map((d,h)=>q.jsxs("div",{className:"flex gap-3",style:{animation:`stepFadeIn 0.3s ${.2+h*.07}s ease-out both`},children:[q.jsx("div",{className:"w-6 h-6 flex-shrink-0 flex items-center justify-center border-2 border-[#ec4899] bg-[#1a0a2e]",style:{fontSize:"8px",color:"#ec4899"},children:d.num}),q.jsxs("div",{className:"flex-1",children:[q.jsx("p",{className:"text-[8px] text-[#facc15] mb-1 tracking-wide",children:d.title}),"body"in d&&d.body&&q.jsx("p",{className:"text-[7px] text-white/70 leading-[14px]",children:d.body}),"feedback"in d&&d.feedback&&q.jsx("div",{className:"space-y-1.5 mt-1",children:d.feedback.map(g=>q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("div",{className:"w-3 h-3 flex-shrink-0",style:{backgroundColor:g.dot,boxShadow:`0 0 4px ${g.dot}`}}),q.jsxs("span",{className:"text-[7px] leading-[13px]",style:{color:g.dot},children:[g.label,":"]}),q.jsx("span",{className:"text-[7px] text-white/60 leading-[13px]",children:g.desc})]},g.label))})]})]},d.num))}),q.jsx("div",{className:"px-5 pb-5",children:q.jsxs("button",{onClick:()=>t(!1),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"Got It!"]})}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"})]})})]})}function oo(r){const e=Math.sin(r+1)*1e4;return e-Math.floor(e)}const Gl=[{label:"CAMERA MODULE",run:async()=>{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>e.stop())}},{label:"AR PLANE DETECT",run:async()=>{if(!("xr"in navigator))throw new Error("WebXR not supported");if(!await navigator.xr.isSessionSupported("immersive-ar"))throw new Error("AR not supported")}},{label:"CODEX LINK",run:async()=>{if(!navigator.onLine)throw new Error("No network")}},{label:"ENEMY SCANNER",run:async()=>{if(!("DeviceOrientationEvent"in window))throw new Error("No motion sensor");await new Promise(r=>setTimeout(r,500))}}];function RS(){const r=Vu(),[e,t]=ae.useState(Gl.map(()=>"idle")),[i,a]=ae.useState(!1);ae.useEffect(()=>{let u=!1;return(async()=>{for(let d=0;d<Gl.length;d++){if(u)return;t(h=>{const g=[...h];return g[d]="checking",g});try{await Gl[d].run(),u||t(h=>{const g=[...h];return g[d]="ok",g})}catch{u||t(h=>{const g=[...h];return g[d]="fail",g})}}u||a(!0)})(),()=>{u=!0}},[]);const o=ae.useMemo(()=>Array.from({length:22},(u,f)=>({id:f,x:oo(f*6.17)*100,y:oo(f*4.23)*100,size:oo(f*2.71)>.8?3:2,delay:`${oo(f*3.91)*4}s`,duration:`${1.5+oo(f*1.17)*2}s`})),[]);return q.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col px-6 py-8 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[q.jsx("style",{children:`
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
      `}),q.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),o.map(u=>q.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${u.x}%`,top:`${u.y}%`,width:`${u.size}px`,height:`${u.size}px`,animation:`twinkle ${u.duration} ${u.delay} ease-in-out infinite`,zIndex:1}},`star-${u.id}`)),q.jsxs("div",{className:"flex items-center justify-between mb-4 relative z-10",children:[q.jsx("button",{onClick:()=>r("/"),className:"text-[8px] text-[#a78bfa] hover:text-white transition-colors",children:"← BACK"}),q.jsxs("div",{className:"text-[7px] text-[#10b981] border-2 border-[#10b981] px-2 py-1 relative",children:[q.jsx("div",{className:"absolute top-0 left-0 w-1 h-1 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"}),"WAVE 01"]})]}),q.jsx("h2",{className:"text-[11px] text-[#8b5cf6] text-center mb-5 tracking-widest relative z-10",children:"MISSION BRIEF"}),q.jsxs("div",{className:"flex flex-col items-center mb-5 relative z-10",children:[q.jsxs("div",{className:"relative w-32 h-32",children:[q.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/20"}),q.jsx("div",{className:"absolute inset-[22%] rounded-full border border-[#10b981]/30"}),q.jsx("div",{className:"absolute inset-[44%] rounded-full border-2 border-[#10b981]/60"}),q.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/50",style:{animation:"radarPing 2s 0s ease-out infinite"}}),q.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/30",style:{animation:"radarPing 2s 0.9s ease-out infinite"}}),q.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-full",style:{animation:"radarSweep 3s linear infinite"},children:[q.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.13) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)"}}),q.jsx("div",{className:"absolute top-1/2 origin-left",style:{left:"50%",width:"50%",height:"1px",background:"linear-gradient(to right, rgba(16,185,129,0.9), rgba(16,185,129,0.05))",transform:"translateY(-50%)"}})]}),q.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]",style:{boxShadow:"0 0 6px #10b981"}}),i&&q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#ec4899]",style:{top:"24%",left:"61%",boxShadow:"0 0 5px #ec4899",animation:"blipBlink 1.1s ease-in-out infinite"}}),q.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#facc15]",style:{top:"66%",left:"27%",boxShadow:"0 0 4px #facc15",animation:"blipBlink 0.9s 0.35s ease-in-out infinite"}}),q.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#f97316]",style:{top:"47%",left:"75%",boxShadow:"0 0 4px #f97316",animation:"blipBlink 1.3s 0.7s ease-in-out infinite"}})]})]}),q.jsx("p",{className:"text-[7px] mt-3 tracking-wider",style:{color:i?"#10b981":"#a78bfa",animation:i?"none":"blinkAnim 1s ease-in-out infinite"},children:i?"SURFACE DETECTED ✓":"SCANNING SURFACE..."})]}),q.jsxs("div",{className:"bg-[#1a0a2e] border-2 border-[#8b5cf6] p-3 mb-4 relative z-10",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-3 tracking-widest",children:"SYSTEM STATUS"}),q.jsx("div",{className:"space-y-2",children:Gl.map((u,f)=>{const d=e[f],h=d==="ok"?"#10b981":d==="fail"?"#ef4444":d==="checking"?"#facc15":"#1f2937",g=d==="ok"?"#10b981":d==="fail"?"#ef4444":d==="checking"?"#facc15":"#374151";return q.jsxs("div",{className:"flex items-center gap-2",style:d==="ok"||d==="fail"?{animation:"slideIn 0.25s ease-out"}:{},children:[q.jsxs("div",{className:"w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",style:{borderColor:h,backgroundColor:d==="ok"?"#10b981":d==="fail"?"#ef4444":"transparent"},children:[d==="ok"&&q.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✓"}),d==="fail"&&q.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✕"}),d==="checking"&&q.jsx("span",{className:"text-[#facc15] leading-none",style:{fontSize:"6px",animation:"blinkAnim 0.5s ease-in-out infinite"},children:"■"})]}),q.jsx("span",{className:"text-[7px] tracking-wide transition-colors duration-200",style:{color:g},children:u.label}),d==="fail"&&q.jsx("span",{className:"text-[6px] text-[#ef444499] ml-auto",children:"FAILED"})]},f)})})]}),q.jsxs("div",{className:"bg-[#1a0a2e] border-2 border-[#ec4899] p-3 mb-5 relative z-10",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-2 tracking-widest",children:"TARGET WORD"}),q.jsxs("p",{className:"text-[7px] text-white/70 mb-3 leading-[14px]",children:["HINT: ",q.jsx("span",{className:"text-[#facc15]",children:"A CELESTIAL BODY"})]}),q.jsx("div",{className:"flex gap-2 justify-center",children:Array.from({length:5},(u,f)=>q.jsx("div",{className:"w-9 h-9 border-2 border-white/20 bg-[#0a0118] flex items-center justify-center",children:q.jsx("span",{className:"text-white/15 text-[8px]",children:"?"})},f))})]}),q.jsxs("button",{disabled:!i,onClick:()=>i&&r("/ar"),className:"w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300",style:{backgroundColor:i?"#8b5cf6":"#1a0a2e",borderColor:i?"#ec4899":"#1f2937",color:i?"#ffffff":"#374151",cursor:i?"pointer":"not-allowed",animation:i?"engagePulse 2s ease-in-out infinite":"none"},children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),i?"> ENGAGE MISSION <":"INITIALIZING..."]})]})}const CS="modulepreload",PS=function(r){return"/"+r},Tg={},LS=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=u(t.map(h=>{if(h=PS(h),h in Tg)return;Tg[h]=!0;const g=h.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":CS,g||(m.as="script"),m.crossOrigin="",m.href=h,d&&m.setAttribute("nonce",d),document.head.appendChild(m),g)return new Promise((x,M)=>{m.addEventListener("load",x),m.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return a.then(u=>{for(const f of u||[])f.status==="rejected"&&o(f.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="184",NS=0,bg=1,IS=2,Eu=1,DS=2,vo=3,Gr=0,Wn=1,ar=2,ur=0,ua=1,Ag=2,Rg=3,Cg=4,US=5,fs=100,FS=101,OS=102,kS=103,BS=104,zS=200,VS=201,HS=202,GS=203,Md=204,Ed=205,WS=206,XS=207,jS=208,$S=209,YS=210,qS=211,KS=212,ZS=213,JS=214,wd=0,Td=1,bd=2,fa=3,Ad=4,Rd=5,Cd=6,Pd=7,Gu=0,QS=1,eM=2,Oi=0,mv=1,gv=2,vv=3,_v=4,xv=5,yv=6,Sv=7,Pg="attached",tM="detached",Mv=300,ms=301,da=302,Of=303,kf=304,Wu=306,Ld=1e3,or=1001,Nd=1002,Sn=1003,nM=1004,Wl=1005,Rn=1006,Bf=1007,hs=1008,Zn=1009,Ev=1010,wv=1011,To=1012,wh=1013,zi=1014,Ei=1015,dr=1016,Th=1017,bh=1018,bo=1020,Tv=35902,bv=35899,Av=1021,Rv=1022,ui=1023,hr=1026,ps=1027,Cv=1028,Ah=1029,gs=1030,Rh=1031,Ch=1033,wu=33776,Tu=33777,bu=33778,Au=33779,Id=35840,Dd=35841,Ud=35842,Fd=35843,Od=36196,kd=37492,Bd=37496,zd=37488,Vd=37489,Pu=37490,Hd=37491,Gd=37808,Wd=37809,Xd=37810,jd=37811,$d=37812,Yd=37813,qd=37814,Kd=37815,Zd=37816,Jd=37817,Qd=37818,eh=37819,th=37820,nh=37821,ih=36492,rh=36494,sh=36495,ah=36283,oh=36284,Lu=36285,lh=36286,Nu=2300,uh=2301,zf=2302,Lg=2303,Ng=2400,Ig=2401,Dg=2402,iM=2500,rM=3200,Ao=0,sM=1,Vr="",li="srgb",Iu="srgb-linear",Du="linear",It="srgb",$s=7680,Ug=519,aM=512,oM=513,lM=514,Ph=515,uM=516,cM=517,Lh=518,fM=519,Fg=35044,Og="300 es",Fi=2e3,Ro=2001;function dM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Co(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=Co("canvas");return r.style.display="block",r}const kg={};function Bg(...r){const e="THREE."+r.shift();console.log(e,...r)}function Pv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Qe(...r){r=Pv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function it(...r){r=Pv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ch(...r){const e=r.join(" ");e in kg||(kg[e]=!0,Qe(...r))}function mM(r,e,t){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const gM={[wd]:Td,[bd]:Cd,[Ad]:Pd,[fa]:Rd,[Td]:wd,[Cd]:bd,[Pd]:Ad,[Rd]:fa};class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zg=1234567;const So=Math.PI/180,ha=180/Math.PI;function Wr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Nh(r,e){return(r%e+e)%e}function vM(r,e,t,i,a){return i+(r-e)*(a-i)/(t-e)}function _M(r,e,t){return r!==e?(t-r)/(e-r):0}function Mo(r,e,t){return(1-t)*r+t*e}function xM(r,e,t,i){return Mo(r,e,1-Math.exp(-t*i))}function yM(r,e=1){return e-Math.abs(Nh(r,e*2)-e)}function SM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function MM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function EM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wM(r,e){return r+Math.random()*(e-r)}function TM(r){return r*(.5-Math.random())}function bM(r){r!==void 0&&(zg=r);let e=zg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(r){return r*So}function RM(r){return r*ha}function CM(r){return(r&r-1)===0&&r!==0}function PM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function LM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function NM(r,e,t,i,a){const o=Math.cos,u=Math.sin,f=o(t/2),d=u(t/2),h=o((e+i)/2),g=u((e+i)/2),v=o((e-i)/2),m=u((e-i)/2),x=o((i-e)/2),M=u((i-e)/2);switch(a){case"XYX":r.set(f*g,d*v,d*m,f*h);break;case"YZY":r.set(d*m,f*g,d*v,f*h);break;case"ZXZ":r.set(d*v,d*m,f*g,f*h);break;case"XZX":r.set(f*g,d*M,d*x,f*h);break;case"YXY":r.set(d*x,f*g,d*M,f*h);break;case"ZYZ":r.set(d*M,d*x,f*g,f*h);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function la(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hR={DEG2RAD:So,RAD2DEG:ha,generateUUID:Wr,clamp:xt,euclideanModulo:Nh,mapLinear:vM,inverseLerp:_M,lerp:Mo,damp:xM,pingpong:yM,smoothstep:SM,smootherstep:MM,randInt:EM,randFloat:wM,randFloatSpread:TM,seededRandom:bM,degToRad:AM,radToDeg:RM,isPowerOfTwo:CM,ceilPowerOfTwo:PM,floorPowerOfTwo:LM,setQuaternionFromProperEuler:NM,normalize:In,denormalize:la},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*a+e.x,this.y=o*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;let St=Hh;class ys{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,u,f){let d=i[a+0],h=i[a+1],g=i[a+2],v=i[a+3],m=o[u+0],x=o[u+1],M=o[u+2],b=o[u+3];if(v!==b||d!==m||h!==x||g!==M){let y=d*m+h*x+g*M+v*b;y<0&&(m=-m,x=-x,M=-M,b=-b,y=-y);let S=1-f;if(y<.9995){const T=Math.acos(y),R=Math.sin(T);S=Math.sin(S*T)/R,f=Math.sin(f*T)/R,d=d*S+m*f,h=h*S+x*f,g=g*S+M*f,v=v*S+b*f}else{d=d*S+m*f,h=h*S+x*f,g=g*S+M*f,v=v*S+b*f;const T=1/Math.sqrt(d*d+h*h+g*g+v*v);d*=T,h*=T,g*=T,v*=T}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,o,u){const f=i[a],d=i[a+1],h=i[a+2],g=i[a+3],v=o[u],m=o[u+1],x=o[u+2],M=o[u+3];return e[t]=f*M+g*v+d*x-h*m,e[t+1]=d*M+g*m+h*v-f*x,e[t+2]=h*M+g*x+f*m-d*v,e[t+3]=g*M-f*v-d*m-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(i/2),g=f(a/2),v=f(o/2),m=d(i/2),x=d(a/2),M=d(o/2);switch(u){case"XYZ":this._x=m*g*v+h*x*M,this._y=h*x*v-m*g*M,this._z=h*g*M+m*x*v,this._w=h*g*v-m*x*M;break;case"YXZ":this._x=m*g*v+h*x*M,this._y=h*x*v-m*g*M,this._z=h*g*M-m*x*v,this._w=h*g*v+m*x*M;break;case"ZXY":this._x=m*g*v-h*x*M,this._y=h*x*v+m*g*M,this._z=h*g*M+m*x*v,this._w=h*g*v-m*x*M;break;case"ZYX":this._x=m*g*v-h*x*M,this._y=h*x*v+m*g*M,this._z=h*g*M-m*x*v,this._w=h*g*v+m*x*M;break;case"YZX":this._x=m*g*v+h*x*M,this._y=h*x*v+m*g*M,this._z=h*g*M-m*x*v,this._w=h*g*v-m*x*M;break;case"XZY":this._x=m*g*v-h*x*M,this._y=h*x*v-m*g*M,this._z=h*g*M+m*x*v,this._w=h*g*v+m*x*M;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],u=t[1],f=t[5],d=t[9],h=t[2],g=t[6],v=t[10],m=i+f+v;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-d)*x,this._y=(o-h)*x,this._z=(u-a)*x}else if(i>f&&i>v){const x=2*Math.sqrt(1+i-f-v);this._w=(g-d)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(o+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-i-v);this._w=(o-h)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-i-f);this._w=(u-a)/x,this._x=(o+h)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,u=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=i*g+u*f+a*h-o*d,this._y=a*g+u*d+o*f-i*h,this._z=o*g+u*h+i*d-a*f,this._w=u*g-i*f-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,u=e._w,f=this.dot(e);f<0&&(i=-i,a=-a,o=-o,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gh=class Gh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*a-f*i),g=2*(f*t-o*a),v=2*(o*i-u*t);return this.x=t+d*h+u*v-f*g,this.y=i+d*g+f*h-o*v,this.z=a+d*v+o*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,u=t.x,f=t.y,d=t.z;return this.x=a*d-o*f,this.y=o*u-i*d,this.z=i*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;let K=Gh;const Vf=new K,Vg=new ys,Wh=class Wh{constructor(e,t,i,a,o,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h)}set(e,t,i,a,o,u,f,d,h){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=o,g[5]=d,g[6]=i,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],g=i[4],v=i[7],m=i[2],x=i[5],M=i[8],b=a[0],y=a[3],S=a[6],T=a[1],R=a[4],P=a[7],U=a[2],N=a[5],O=a[8];return o[0]=u*b+f*T+d*U,o[3]=u*y+f*R+d*N,o[6]=u*S+f*P+d*O,o[1]=h*b+g*T+v*U,o[4]=h*y+g*R+v*N,o[7]=h*S+g*P+v*O,o[2]=m*b+x*T+M*U,o[5]=m*y+x*R+M*N,o[8]=m*S+x*P+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-i*o*g+i*f*d+a*o*h-a*u*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=g*u-f*h,m=f*d-g*o,x=h*o-u*d,M=t*v+i*m+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(a*h-g*i)*b,e[2]=(f*i-a*u)*b,e[3]=m*b,e[4]=(g*t-a*d)*b,e[5]=(a*o-f*t)*b,e[6]=x*b,e[7]=(i*d-h*t)*b,e[8]=(u*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,u,f){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*f)+u+e,-a*h,a*d,-a*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Hf.makeScale(e,t)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;let ct=Wh;const Hf=new ct,Hg=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IM(){const r={enabled:!0,workingColorSpace:Iu,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===It&&(a.r=cr(a.r),a.g=cr(a.g),a.b=cr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(a.r=ca(a.r),a.g=ca(a.g),a.b=ca(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vr?Du:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return ch("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return ch("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Iu]:{primaries:e,whitePoint:i,transfer:Du,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Mt=IM();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ys;class DM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=Co("canvas")),Ys.width=e.width,Ys.height=e.height;const a=Ys.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=cr(o[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UM=0;class Ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?o.push(Gf(a[u].image)):o.push(Gf(a[u]))}else o=Gf(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Gf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?DM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let FM=0;const Wf=new K;class Cn extends xs{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=or,a=or,o=Rn,u=hs,f=ui,d=Zn,h=Cn.DEFAULT_ANISOTROPY,g=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Wr(),this.name="",this.source=new Ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Mv;Cn.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],g=d[4],v=d[8],m=d[1],x=d[5],M=d[9],b=d[2],y=d[6],S=d[10];if(Math.abs(g-m)<.01&&Math.abs(v-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+b)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,P=(x+1)/2,U=(S+1)/2,N=(g+m)/4,O=(v+b)/4,w=(M+y)/4;return R>P&&R>U?R<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(R),a=N/i,o=O/i):P>U?P<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),i=N/a,o=w/a):U<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(U),i=O/o,a=w/o),this.set(i,a,o,t),this}let T=Math.sqrt((y-M)*(y-M)+(v-b)*(v-b)+(m-g)*(m-g));return Math.abs(T)<.001&&(T=1),this.x=(y-M)/T,this.y=(v-b)/T,this.z=(m-g)/T,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let Ot=Xh;class OM extends xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Cn(a),u=i.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Ih(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends OM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lv extends Cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends Cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=class Bu{constructor(e,t,i,a,o,u,f,d,h,g,v,m,x,M,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h,g,v,m,x,M,b,y)}set(e,t,i,a,o,u,f,d,h,g,v,m,x,M,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=u,S[9]=f,S[13]=d,S[2]=h,S[6]=g,S[10]=v,S[14]=m,S[3]=x,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/qs.setFromMatrixColumn(e,0).length(),o=1/qs.setFromMatrixColumn(e,1).length(),u=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),g=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const m=u*g,x=u*v,M=f*g,b=f*v;t[0]=d*g,t[4]=-d*v,t[8]=h,t[1]=x+M*h,t[5]=m-b*h,t[9]=-f*d,t[2]=b-m*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*g,x=d*v,M=h*g,b=h*v;t[0]=m+b*f,t[4]=M*f-x,t[8]=u*h,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=x*f-M,t[6]=b+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*g,x=d*v,M=h*g,b=h*v;t[0]=m-b*f,t[4]=-u*v,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*g,t[9]=b-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*g,x=u*v,M=f*g,b=f*v;t[0]=d*g,t[4]=M*h-x,t[8]=m*h+b,t[1]=d*v,t[5]=b*h+m,t[9]=x*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,x=u*h,M=f*d,b=f*h;t[0]=d*g,t[4]=b-m*v,t[8]=M*v+x,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=x*v+M,t[10]=m-b*v}else if(e.order==="XZY"){const m=u*d,x=u*h,M=f*d,b=f*h;t[0]=d*g,t[4]=-v,t[8]=h*g,t[1]=m*v+b,t[5]=u*g,t[9]=x*v-M,t[2]=M*v-x,t[6]=f*g,t[10]=b*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,zM)}lookAt(e,t,i){const a=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ur.crossVectors(i,qn),Ur.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ur.crossVectors(i,qn)),Ur.normalize(),Xl.crossVectors(qn,Ur),a[0]=Ur.x,a[4]=Xl.x,a[8]=qn.x,a[1]=Ur.y,a[5]=Xl.y,a[9]=qn.y,a[2]=Ur.z,a[6]=Xl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],g=i[1],v=i[5],m=i[9],x=i[13],M=i[2],b=i[6],y=i[10],S=i[14],T=i[3],R=i[7],P=i[11],U=i[15],N=a[0],O=a[4],w=a[8],I=a[12],V=a[1],k=a[5],Z=a[9],ce=a[13],fe=a[2],B=a[6],W=a[10],G=a[14],$=a[3],te=a[7],re=a[11],F=a[15];return o[0]=u*N+f*V+d*fe+h*$,o[4]=u*O+f*k+d*B+h*te,o[8]=u*w+f*Z+d*W+h*re,o[12]=u*I+f*ce+d*G+h*F,o[1]=g*N+v*V+m*fe+x*$,o[5]=g*O+v*k+m*B+x*te,o[9]=g*w+v*Z+m*W+x*re,o[13]=g*I+v*ce+m*G+x*F,o[2]=M*N+b*V+y*fe+S*$,o[6]=M*O+b*k+y*B+S*te,o[10]=M*w+b*Z+y*W+S*re,o[14]=M*I+b*ce+y*G+S*F,o[3]=T*N+R*V+P*fe+U*$,o[7]=T*O+R*k+P*B+U*te,o[11]=T*w+R*Z+P*W+U*re,o[15]=T*I+R*ce+P*G+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],u=e[1],f=e[5],d=e[9],h=e[13],g=e[2],v=e[6],m=e[10],x=e[14],M=e[3],b=e[7],y=e[11],S=e[15],T=d*x-h*m,R=f*x-h*v,P=f*m-d*v,U=u*x-h*g,N=u*m-d*g,O=u*v-f*g;return t*(b*T-y*R+S*P)-i*(M*T-y*U+S*N)+a*(M*R-b*U+S*O)-o*(M*P-b*N+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=e[9],m=e[10],x=e[11],M=e[12],b=e[13],y=e[14],S=e[15],T=t*f-i*u,R=t*d-a*u,P=t*h-o*u,U=i*d-a*f,N=i*h-o*f,O=a*h-o*d,w=g*b-v*M,I=g*y-m*M,V=g*S-x*M,k=v*y-m*b,Z=v*S-x*b,ce=m*S-x*y,fe=T*ce-R*Z+P*k+U*V-N*I+O*w;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/fe;return e[0]=(f*ce-d*Z+h*k)*B,e[1]=(a*Z-i*ce-o*k)*B,e[2]=(b*O-y*N+S*U)*B,e[3]=(m*N-v*O-x*U)*B,e[4]=(d*V-u*ce-h*I)*B,e[5]=(t*ce-a*V+o*I)*B,e[6]=(y*P-M*O-S*R)*B,e[7]=(g*O-m*P+x*R)*B,e[8]=(u*Z-f*V+h*w)*B,e[9]=(i*V-t*Z-o*w)*B,e[10]=(M*N-b*P+S*T)*B,e[11]=(v*P-g*N-x*T)*B,e[12]=(f*I-u*k-d*w)*B,e[13]=(t*k-i*I+a*w)*B,e[14]=(b*R-M*U-y*T)*B,e[15]=(g*U-v*R+m*T)*B,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,u=e.x,f=e.y,d=e.z,h=o*u,g=o*f;return this.set(h*u+i,h*f-a*d,h*d+a*f,0,h*f+a*d,g*f+i,g*d-a*u,0,h*d-a*f,g*d+a*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,u){return this.set(1,i,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,u=t._y,f=t._z,d=t._w,h=o+o,g=u+u,v=f+f,m=o*h,x=o*g,M=o*v,b=u*g,y=u*v,S=f*v,T=d*h,R=d*g,P=d*v,U=i.x,N=i.y,O=i.z;return a[0]=(1-(b+S))*U,a[1]=(x+P)*U,a[2]=(M-R)*U,a[3]=0,a[4]=(x-P)*N,a[5]=(1-(m+S))*N,a[6]=(y+T)*N,a[7]=0,a[8]=(M+R)*O,a[9]=(y-T)*O,a[10]=(1-(m+b))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let u=qs.set(a[0],a[1],a[2]).length();const f=qs.set(a[4],a[5],a[6]).length(),d=qs.set(a[8],a[9],a[10]).length();o<0&&(u=-u),xi.copy(this);const h=1/u,g=1/f,v=1/d;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,t.setFromRotationMatrix(xi),i.x=u,i.y=f,i.z=d,this}makePerspective(e,t,i,a,o,u,f=Fi,d=!1){const h=this.elements,g=2*o/(t-e),v=2*o/(i-a),m=(t+e)/(t-e),x=(i+a)/(i-a);let M,b;if(d)M=o/(u-o),b=u*o/(u-o);else if(f===Fi)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Ro)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,u,f=Fi,d=!1){const h=this.elements,g=2/(t-e),v=2/(i-a),m=-(t+e)/(t-e),x=-(i+a)/(i-a);let M,b;if(d)M=1/(u-o),b=u/(u-o);else if(f===Fi)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Ro)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Bu.prototype.isMatrix4=!0;let wt=Bu;const qs=new K,xi=new wt,BM=new K(0,0,0),zM=new K(1,1,1),Ur=new K,Xl=new K,qn=new K,Wg=new wt,Xg=new ys;class Vi{constructor(e=0,t=0,i=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],u=a[4],f=a[8],d=a[1],h=a[5],g=a[9],v=a[2],m=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const jg=new K,Ks=new ys,er=new wt,jl=new K,lo=new K,HM=new K,GM=new ys,$g=new K(1,0,0),Yg=new K(0,1,0),qg=new K(0,0,1),Kg={type:"added"},WM={type:"removed"},Zs={type:"childadded",child:null},Xf={type:"childremoved",child:null};class sn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new K,t=new Vi,i=new ys,a=new K(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new ct}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(Yg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,t){return jg.copy(e).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(Yg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jl.copy(e):jl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(lo,jl,this.up):er.lookAt(jl,lo,this.up),this.quaternion.setFromRotationMatrix(er),a&&(er.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(er),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(WM),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const v=d[h];o(e.shapes,v)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(o(e.materials,this.material[d]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(o(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),m=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=a,i;function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}sn.DEFAULT_UP=new K(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _o extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,i),S=this._getHandJoint(h,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),x=.02,M=.005;h.inputState.pinching&&m>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function $f(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Mt.workingColorSpace){if(e=Nh(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=$f(u,o,e+1/3),this.g=$f(u,o,e),this.b=$f(u,o,e-1/3)}return Mt.colorSpaceToWorking(this,a),this}setStyle(e,t=li){function i(o){o!==void 0&&parseFloat(o)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const i=Nv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Mt.workingToColorSpace(An.copy(this),e),Math.round(xt(An.r*255,0,255))*65536+Math.round(xt(An.g*255,0,255))*256+Math.round(xt(An.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(An.copy(this),t);const i=An.r,a=An.g,o=An.b,u=Math.max(i,a,o),f=Math.min(i,a,o);let d,h;const g=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=g<=.5?v/(u+f):v/(2-u-f),u){case i:d=(a-o)/v+(a<o?6:0);break;case a:d=(o-i)/v+2;break;case o:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=li){Mt.workingToColorSpace(An.copy(this),e);const t=An.r,i=An.g,a=An.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL($l);const i=Mo(Fr.h,$l.h,t),a=Mo(Fr.s,$l.s,t),o=Mo(Fr.l,$l.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new yt;yt.NAMES=Nv;class jM extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new K,tr=new K,Yf=new K,nr=new K,Js=new K,Qs=new K,Zg=new K,qf=new K,Kf=new K,Zf=new K,Jf=new Ot,Qf=new Ot,ed=new Ot;class Mi{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),yi.subVectors(e,t),a.cross(yi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){yi.subVectors(a,t),tr.subVectors(i,t),Yf.subVectors(e,t);const u=yi.dot(yi),f=yi.dot(tr),d=yi.dot(Yf),h=tr.dot(tr),g=tr.dot(Yf),v=u*h-f*f;if(v===0)return o.set(0,0,0),null;const m=1/v,x=(h*d-f*g)*m,M=(u*g-f*d)*m;return o.set(1-x-M,M,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,i,a,o,u,f,d){return this.getBarycoord(e,t,i,a,nr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,nr.x),d.addScaledVector(u,nr.y),d.addScaledVector(f,nr.z),d)}static getInterpolatedAttribute(e,t,i,a,o,u){return Jf.setScalar(0),Qf.setScalar(0),ed.setScalar(0),Jf.fromBufferAttribute(e,t),Qf.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Jf,o.x),u.addScaledVector(Qf,o.y),u.addScaledVector(ed,o.z),u}static isFrontFacing(e,t,i,a){return yi.subVectors(i,t),tr.subVectors(e,t),yi.cross(tr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),yi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let u,f;Js.subVectors(a,i),Qs.subVectors(o,i),qf.subVectors(e,i);const d=Js.dot(qf),h=Qs.dot(qf);if(d<=0&&h<=0)return t.copy(i);Kf.subVectors(e,a);const g=Js.dot(Kf),v=Qs.dot(Kf);if(g>=0&&v<=g)return t.copy(a);const m=d*v-g*h;if(m<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(i).addScaledVector(Js,u);Zf.subVectors(e,o);const x=Js.dot(Zf),M=Qs.dot(Zf);if(M>=0&&x<=M)return t.copy(o);const b=x*h-d*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(i).addScaledVector(Qs,f);const y=g*M-x*v;if(y<=0&&v-g>=0&&x-M>=0)return Zg.subVectors(o,a),f=(v-g)/(v-g+(x-M)),t.copy(a).addScaledVector(Zg,f);const S=1/(y+b+m);return u=b*S,f=m*S,t.copy(i).addScaledVector(Js,u).addScaledVector(Qs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(o,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),ql.subVectors(this.max,uo),ea.subVectors(e.a,uo),ta.subVectors(e.b,uo),na.subVectors(e.c,uo),Or.subVectors(ta,ea),kr.subVectors(na,ta),as.subVectors(ea,na);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-as.z,as.y,Or.z,0,-Or.x,kr.z,0,-kr.x,as.z,0,-as.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-as.y,as.x,0];return!td(t,ea,ta,na,ql)||(t=[1,0,0,0,1,0,0,0,1],!td(t,ea,ta,na,ql))?!1:(Kl.crossVectors(Or,kr),t=[Kl.x,Kl.y,Kl.z],td(t,ea,ta,na,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,Yl=new xa,ea=new K,ta=new K,na=new K,Or=new K,kr=new K,as=new K,uo=new K,ql=new K,Kl=new K,os=new K;function td(r,e,t,i,a){for(let o=0,u=r.length-3;o<=u;o+=3){os.fromArray(r,o);const f=a.x*Math.abs(os.x)+a.y*Math.abs(os.y)+a.z*Math.abs(os.z),d=e.dot(os),h=t.dot(os),g=i.dot(os);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const ln=new K,Zl=new St;let $M=0;class wi extends xs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fg,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=la(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array),a=In(a,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Iv extends wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dv extends wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const YM=new xa,co=new K,nd=new K;class Ss{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):YM.setFromPoints(e).getCenter(i);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(co,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(nd)),this.expandByPoint(co.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qM=0;const oi=new wt,id=new sn,ia=new K,Kn=new xa,fo=new xa,gn=new K;class Qn extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dM(e)?Dv:Iv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Jn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const f=t[o];fo.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(Kn.min,fo.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,fo.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(fo.min),Kn.expandByPoint(fo.max))}Kn.getCenter(i);let a=0;for(let o=0,u=e.count;o<u;o++)gn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(gn));if(t)for(let o=0,u=t.length;o<u;o++){const f=t[o],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)gn.fromBufferAttribute(f,h),d&&(ia.fromBufferAttribute(e,h),gn.add(ia)),a=Math.max(a,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let w=0;w<i.count;w++)f[w]=new K,d[w]=new K;const h=new K,g=new K,v=new K,m=new St,x=new St,M=new St,b=new K,y=new K;function S(w,I,V){h.fromBufferAttribute(i,w),g.fromBufferAttribute(i,I),v.fromBufferAttribute(i,V),m.fromBufferAttribute(o,w),x.fromBufferAttribute(o,I),M.fromBufferAttribute(o,V),g.sub(h),v.sub(h),x.sub(m),M.sub(m);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(k),y.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(k),f[w].add(b),f[I].add(b),f[V].add(b),d[w].add(y),d[I].add(y),d[V].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,I=T.length;w<I;++w){const V=T[w],k=V.start,Z=V.count;for(let ce=k,fe=k+Z;ce<fe;ce+=3)S(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const R=new K,P=new K,U=new K,N=new K;function O(w){U.fromBufferAttribute(a,w),N.copy(U);const I=f[w];R.copy(I),R.sub(U.multiplyScalar(U.dot(I))).normalize(),P.crossVectors(N,I);const k=P.dot(d[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,k)}for(let w=0,I=T.length;w<I;++w){const V=T[w],k=V.start,Z=V.count;for(let ce=k,fe=k+Z;ce<fe;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const a=new K,o=new K,u=new K,f=new K,d=new K,h=new K,g=new K,v=new K;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),b=e.getX(m+1),y=e.getX(m+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),g.subVectors(u,o),v.subVectors(a,o),g.cross(v),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.add(g),d.add(g),h.add(g),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,x=t.count;m<x;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),g.subVectors(u,o),v.subVectors(a,o),g.cross(v),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,v=f.normalized,m=new h.constructor(d.length*g);let x=0,M=0;for(let b=0,y=d.length;b<y;b++){f.isInterleavedBufferAttribute?x=d[b]*f.data.stride+f.offset:x=d[b]*g;for(let S=0;S<g;S++)m[M++]=h[x++]}return new wi(m,g,v)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,i);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const d=[],h=o[f];for(let g=0,v=h.length;g<v;g++){const m=h[g],x=e(m,i);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let v=0,m=h.length;v<m;v++){const x=h[v];g.push(x.toJSON(e.data))}g.length>0&&(a[d]=g,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const g=a[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],v=o[h];for(let m=0,x=v.length;m<x;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KM=0;class mr extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=ua,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(i.blending=this.blending),this.side!==Gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Md&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const f in o){const d=o[f];delete d.metadata,u.push(d)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new K,rd=new K,Jl=new K,Br=new K,sd=new K,Ql=new K,ad=new K;class Fo{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){rd.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(rd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Jl),f=Br.dot(this.direction),d=-Br.dot(Jl),h=Br.lengthSq(),g=Math.abs(1-u*u);let v,m,x,M;if(g>0)if(v=u*d-f,m=u*f-d,M=o*g,v>=0)if(m>=-M)if(m<=M){const b=1/g;v*=b,m*=b,x=v*(v+u*m+2*f)+m*(u*v+m+2*d)+h}else m=o,v=Math.max(0,-(u*m+f)),x=-v*v+m*(m+2*d)+h;else m=-o,v=Math.max(0,-(u*m+f)),x=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-u*o+f)),m=v>0?-o:Math.min(Math.max(-o,-d),o),x=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-o,-d),o),x=m*(m+2*d)+h):(v=Math.max(0,-(u*o+f)),m=v>0?o:Math.min(Math.max(-o,-d),o),x=-v*v+m*(m+2*d)+h);else m=u>0?-o:o,v=Math.max(0,-(u*m+f)),x=-v*v+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(rd).addScaledVector(Jl,m),x}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const i=rr.dot(this.direction),a=rr.dot(rr)-i*i,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,u,f,d;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,a=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,a=(e.min.x-m.x)*h),g>=0?(o=(e.min.y-m.y)*g,u=(e.max.y-m.y)*g):(o=(e.max.y-m.y)*g,u=(e.min.y-m.y)*g),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,a,o){sd.subVectors(t,e),Ql.subVectors(i,e),ad.crossVectors(sd,Ql);let u=this.direction.dot(ad),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Br.subVectors(this.origin,e);const d=f*this.direction.dot(Ql.crossVectors(Br,Ql));if(d<0)return null;const h=f*this.direction.dot(sd.cross(Br));if(h<0||d+h>u)return null;const g=-f*Br.dot(ad);return g<0?null:this.at(g/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uv extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jg=new wt,ls=new Fo,eu=new Ss,Qg=new K,tu=new K,nu=new K,iu=new K,od=new K,ru=new K,e0=new K,su=new K;class Ti extends sn{constructor(e=new Qn,t=new Uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){ru.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const g=f[d],v=o[d];g!==0&&(od.fromBufferAttribute(v,e),u?ru.addScaledVector(od,g):ru.addScaledVector(od.sub(t),g))}t.add(ru)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(o),ls.copy(e.ray).recast(e.near),!(eu.containsPoint(ls.origin)===!1&&(ls.intersectSphere(eu,Qg)===null||ls.origin.distanceToSquared(Qg)>(e.far-e.near)**2))&&(Jg.copy(o).invert(),ls.copy(e.ray).applyMatrix4(Jg),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let a;const o=this.geometry,u=this.material,f=o.index,d=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,m=o.groups,x=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=m.length;M<b;M++){const y=m[M],S=u[y.materialIndex],T=Math.max(y.start,x.start),R=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let P=T,U=R;P<U;P+=3){const N=f.getX(P),O=f.getX(P+1),w=f.getX(P+2);a=au(this,S,e,i,h,g,v,N,O,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let y=M,S=b;y<S;y+=3){const T=f.getX(y),R=f.getX(y+1),P=f.getX(y+2);a=au(this,u,e,i,h,g,v,T,R,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=m.length;M<b;M++){const y=m[M],S=u[y.materialIndex],T=Math.max(y.start,x.start),R=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let P=T,U=R;P<U;P+=3){const N=P,O=P+1,w=P+2;a=au(this,S,e,i,h,g,v,N,O,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let y=M,S=b;y<S;y+=3){const T=y,R=y+1,P=y+2;a=au(this,u,e,i,h,g,v,T,R,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function ZM(r,e,t,i,a,o,u,f){let d;if(e.side===Wn?d=i.intersectTriangle(u,o,a,!0,f):d=i.intersectTriangle(a,o,u,e.side===Gr,f),d===null)return null;su.copy(f),su.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(su);return h<t.near||h>t.far?null:{distance:h,point:su.clone(),object:r}}function au(r,e,t,i,a,o,u,f,d,h){r.getVertexPosition(f,tu),r.getVertexPosition(d,nu),r.getVertexPosition(h,iu);const g=ZM(r,e,t,i,tu,nu,iu,e0);if(g){const v=new K;Mi.getBarycoord(e0,tu,nu,iu,v),a&&(g.uv=Mi.getInterpolatedAttribute(a,f,d,h,v,new St)),o&&(g.uv1=Mi.getInterpolatedAttribute(o,f,d,h,v,new St)),u&&(g.normal=Mi.getInterpolatedAttribute(u,f,d,h,v,new K),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new K,materialIndex:0};Mi.getNormal(tu,nu,iu,m.normal),g.face=m,g.barycoord=v}return g}const ho=new Ot,t0=new Ot,n0=new Ot,JM=new Ot,i0=new wt,ou=new K,ld=new Ss,r0=new wt,ud=new Fo;class pR extends Ti{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pg,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xa),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ou),this.boundingBox.expandByPoint(ou)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ss),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ou),this.boundingSphere.expandByPoint(ou)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ld.copy(this.boundingSphere),ld.applyMatrix4(a),e.ray.intersectsSphere(ld)!==!1&&(r0.copy(a).invert(),ud.copy(e.ray).applyMatrix4(r0),!(this.boundingBox!==null&&ud.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ud)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;t0.fromBufferAttribute(a.attributes.skinIndex,e),n0.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(ho.copy(t),t.set(0,0,0,0)):(ho.set(...t,1),t.set(0,0,0)),ho.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const u=n0.getComponent(o);if(u!==0){const f=t0.getComponent(o);i0.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(JM.copy(ho).applyMatrix4(i0),u)}}return t.isVector4&&(t.w=ho.w),t.applyMatrix4(this.bindMatrixInverse)}}class QM extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fv extends Cn{constructor(e=null,t=1,i=1,a,o,u,f,d,h=Sn,g=Sn,v,m){super(null,u,f,d,h,g,a,o,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const s0=new wt,eE=new wt;class Ov{constructor(e=[],t=[]){this.uuid=Wr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new wt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let o=0,u=e.length;o<u;o++){const f=e[o]?e[o].matrixWorld:eE;s0.multiplyMatrices(f,t[o]),s0.toArray(i,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Ov(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Fv(t,e,e,ui,Ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const o=e.bones[i];let u=t[o];u===void 0&&(Qe("Skeleton: No bone found with UUID:",o),u=new QM),this.bones.push(u),this.boneInverses.push(new wt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const u=t[a];e.bones.push(u.uuid);const f=i[a];e.boneInverses.push(f.toArray())}return e}}const cd=new K,tE=new K,nE=new ct;class cs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=cd.subVectors(i,t).cross(tE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(cd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nE.getNormalMatrix(e),a=this.coplanarPoint(cd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ss,iE=new St(.5,.5),lu=new K;class Uh{constructor(e=new cs,t=new cs,i=new cs,a=new cs,o=new cs,u=new cs){this.planes=[e,t,i,a,o,u]}set(e,t,i,a,o,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(o),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi,i=!1){const a=this.planes,o=e.elements,u=o[0],f=o[1],d=o[2],h=o[3],g=o[4],v=o[5],m=o[6],x=o[7],M=o[8],b=o[9],y=o[10],S=o[11],T=o[12],R=o[13],P=o[14],U=o[15];if(a[0].setComponents(h-u,x-g,S-M,U-T).normalize(),a[1].setComponents(h+u,x+g,S+M,U+T).normalize(),a[2].setComponents(h+f,x+v,S+b,U+R).normalize(),a[3].setComponents(h-f,x-v,S-b,U-R).normalize(),i)a[4].setComponents(d,m,y,P).normalize(),a[5].setComponents(h-d,x-m,S-y,U-P).normalize();else if(a[4].setComponents(h-d,x-m,S-y,U-P).normalize(),t===Fi)a[5].setComponents(h+d,x+m,S+y,U+P).normalize();else if(t===Ro)a[5].setComponents(d,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=iE.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(lu.x=a.normal.x>0?e.max.x:e.min.x,lu.y=a.normal.y>0?e.max.y:e.min.y,lu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(lu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rE extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uu=new K,Fu=new K,a0=new wt,po=new Fo,uu=new Ss,fd=new K,o0=new K;class mR extends sn{constructor(e=new Qn,t=new rE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Uu.fromBufferAttribute(t,a-1),Fu.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Uu.distanceTo(Fu);e.setAttribute("lineDistance",new Jn(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uu.copy(i.boundingSphere),uu.applyMatrix4(a),uu.radius+=o,e.ray.intersectsSphere(uu)===!1)return;a0.copy(a).invert(),po.copy(e.ray).applyMatrix4(a0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let b=x,y=M-1;b<y;b+=h){const S=g.getX(b),T=g.getX(b+1),R=cu(this,e,po,d,S,T,b);R&&t.push(R)}if(this.isLineLoop){const b=g.getX(M-1),y=g.getX(x),S=cu(this,e,po,d,b,y,M-1);S&&t.push(S)}}else{const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let b=x,y=M-1;b<y;b+=h){const S=cu(this,e,po,d,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=cu(this,e,po,d,M-1,x,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function cu(r,e,t,i,a,o,u){const f=r.geometry.attributes.position;if(Uu.fromBufferAttribute(f,a),Fu.fromBufferAttribute(f,o),t.distanceSqToSegment(Uu,Fu,fd,o0)>i)return;fd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(fd);if(!(h<e.near||h>e.far))return{distance:h,point:o0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class kv extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l0=new wt,fh=new Fo,fu=new Ss,du=new K;class sE extends sn{constructor(e=new Qn,t=new kv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fu.copy(i.boundingSphere),fu.applyMatrix4(a),fu.radius+=o,e.ray.intersectsSphere(fu)===!1)return;l0.copy(a).invert(),fh.copy(e.ray).applyMatrix4(l0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,v=i.attributes.position;if(h!==null){const m=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=m,b=x;M<b;M++){const y=h.getX(M);du.fromBufferAttribute(v,y),u0(du,y,d,a,e,t,this)}}else{const m=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=m,b=x;M<b;M++)du.fromBufferAttribute(v,M),u0(du,M,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function u0(r,e,t,i,a,o,u){const f=fh.distanceSqToPoint(r);if(f<t){const d=new K;fh.closestPointToPoint(r,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Bv extends Cn{constructor(e=[],t=ms,i,a,o,u,f,d,h,g){super(e,t,i,a,o,u,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pa extends Cn{constructor(e,t,i=zi,a,o,u,f=Sn,d=Sn,h,g=hr,v=1){if(g!==hr&&g!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,a,o,u,f,d,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class aE extends pa{constructor(e,t=zi,i=ms,a,o,u=Sn,f=Sn,d,h=hr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,i,a,o,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zv extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oo extends Qn{constructor(e=1,t=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const f=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],g=[],v=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,u,o,0),M("z","y","x",1,-1,i,t,-e,u,o,1),M("x","z","y",1,1,e,i,t,a,u,2),M("x","z","y",1,-1,e,i,-t,a,u,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new Jn(h,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(v,2));function M(b,y,S,T,R,P,U,N,O,w,I){const V=P/O,k=U/w,Z=P/2,ce=U/2,fe=N/2,B=O+1,W=w+1;let G=0,$=0;const te=new K;for(let re=0;re<W;re++){const F=re*k-ce;for(let Q=0;Q<B;Q++){const be=Q*V-Z;te[b]=be*T,te[y]=F*R,te[S]=fe,h.push(te.x,te.y,te.z),te[b]=0,te[y]=0,te[S]=N>0?1:-1,g.push(te.x,te.y,te.z),v.push(Q/O),v.push(1-re/w),G+=1}}for(let re=0;re<w;re++)for(let F=0;F<O;F++){const Q=m+F+B*re,be=m+F+B*(re+1),Oe=m+(F+1)+B*(re+1),De=m+(F+1)+B*re;d.push(Q,be,De),d.push(be,Oe,De),$+=6}f.addGroup(x,$,I),x+=$,m+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fh extends Qn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],u=[];f(a),h(i),g(),this.setAttribute("position",new Jn(o,3)),this.setAttribute("normal",new Jn(o.slice(),3)),this.setAttribute("uv",new Jn(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const R=new K,P=new K,U=new K;for(let N=0;N<t.length;N+=3)x(t[N+0],R),x(t[N+1],P),x(t[N+2],U),d(R,P,U,T)}function d(T,R,P,U){const N=U+1,O=[];for(let w=0;w<=N;w++){O[w]=[];const I=T.clone().lerp(P,w/N),V=R.clone().lerp(P,w/N),k=N-w;for(let Z=0;Z<=k;Z++)Z===0&&w===N?O[w][Z]=I:O[w][Z]=I.clone().lerp(V,Z/k)}for(let w=0;w<N;w++)for(let I=0;I<2*(N-w)-1;I++){const V=Math.floor(I/2);I%2===0?(m(O[w][V+1]),m(O[w+1][V]),m(O[w][V])):(m(O[w][V+1]),m(O[w+1][V+1]),m(O[w+1][V]))}}function h(T){const R=new K;for(let P=0;P<o.length;P+=3)R.x=o[P+0],R.y=o[P+1],R.z=o[P+2],R.normalize().multiplyScalar(T),o[P+0]=R.x,o[P+1]=R.y,o[P+2]=R.z}function g(){const T=new K;for(let R=0;R<o.length;R+=3){T.x=o[R+0],T.y=o[R+1],T.z=o[R+2];const P=y(T)/2/Math.PI+.5,U=S(T)/Math.PI+.5;u.push(P,1-U)}M(),v()}function v(){for(let T=0;T<u.length;T+=6){const R=u[T+0],P=u[T+2],U=u[T+4],N=Math.max(R,P,U),O=Math.min(R,P,U);N>.9&&O<.1&&(R<.2&&(u[T+0]+=1),P<.2&&(u[T+2]+=1),U<.2&&(u[T+4]+=1))}}function m(T){o.push(T.x,T.y,T.z)}function x(T,R){const P=T*3;R.x=e[P+0],R.y=e[P+1],R.z=e[P+2]}function M(){const T=new K,R=new K,P=new K,U=new K,N=new St,O=new St,w=new St;for(let I=0,V=0;I<o.length;I+=9,V+=6){T.set(o[I+0],o[I+1],o[I+2]),R.set(o[I+3],o[I+4],o[I+5]),P.set(o[I+6],o[I+7],o[I+8]),N.set(u[V+0],u[V+1]),O.set(u[V+2],u[V+3]),w.set(u[V+4],u[V+5]),U.copy(T).add(R).add(P).divideScalar(3);const k=y(U);b(N,V+0,T,k),b(O,V+2,R,k),b(w,V+4,P,k)}}function b(T,R,P,U){U<0&&T.x===1&&(u[R]=T.x-1),P.x===0&&P.z===0&&(u[R]=U/2/Math.PI+.5)}function y(T){return Math.atan2(T.z,-T.x)}function S(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.vertices,e.indices,e.radius,e.detail)}}class gR{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),o=0;t.push(0);for(let u=1;u<=e;u++)i=this.getPoint(u/e),o+=i.distanceTo(a),t.push(o),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const o=i.length;let u;t?u=t:u=e*i[o-1];let f=0,d=o-1,h;for(;f<=d;)if(a=Math.floor(f+(d-f)/2),h=i[a]-u,h<0)f=a+1;else if(h>0)d=a-1;else{d=a;break}if(a=d,i[a]===u)return a/(o-1);const g=i[a],m=i[a+1]-g,x=(u-g)/m;return(a+x)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const u=this.getPoint(a),f=this.getPoint(o),d=t||(u.isVector2?new St:new K);return d.copy(f).sub(u).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new K,a=[],o=[],u=[],f=new K,d=new wt;for(let x=0;x<=e;x++){const M=x/e;a[x]=this.getTangentAt(M,new K)}o[0]=new K,u[0]=new K;let h=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),m=Math.abs(a[0].z);g<=h&&(h=g,i.set(1,0,0)),v<=h&&(h=v,i.set(0,1,0)),m<=h&&i.set(0,0,1),f.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],f),u[0].crossVectors(a[0],o[0]);for(let x=1;x<=e;x++){if(o[x]=o[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(a[x-1],a[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(xt(a[x-1].dot(a[x]),-1,1));o[x].applyMatrix4(d.makeRotationAxis(f,M))}u[x].crossVectors(a[x],o[x])}if(t===!0){let x=Math.acos(xt(o[0].dot(o[e]),-1,1));x/=e,a[0].dot(f.crossVectors(o[0],o[e]))>0&&(x=-x);for(let M=1;M<=e;M++)o[M].applyMatrix4(d.makeRotationAxis(a[M],x*M)),u[M].crossVectors(a[M],o[M])}return{tangents:a,normals:o,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function oE(r,e,t=2){const i=e&&e.length,a=i?e[0]*t:r.length;let o=Vv(r,0,a,t,!0);const u=[];if(!o||o.next===o.prev)return u;let f,d,h;if(i&&(o=dE(r,e,o,t)),r.length>80*t){f=r[0],d=r[1];let g=f,v=d;for(let m=t;m<a;m+=t){const x=r[m],M=r[m+1];x<f&&(f=x),M<d&&(d=M),x>g&&(g=x),M>v&&(v=M)}h=Math.max(g-f,v-d),h=h!==0?32767/h:0}return Po(o,u,t,f,d,h,0),u}function Vv(r,e,t,i,a){let o;if(a===EE(r,e,t,i)>0)for(let u=e;u<t;u+=i)o=c0(u/i|0,r[u],r[u+1],o);else for(let u=t-i;u>=e;u-=i)o=c0(u/i|0,r[u],r[u+1],o);return o&&ma(o,o.next)&&(No(o),o=o.next),o}function vs(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(ma(t,t.next)||en(t.prev,t,t.next)===0)){if(No(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Po(r,e,t,i,a,o,u){if(!r)return;!u&&o&&vE(r,i,a,o);let f=r;for(;r.prev!==r.next;){const d=r.prev,h=r.next;if(o?uE(r,i,a,o):lE(r)){e.push(d.i,r.i,h.i),No(r),r=h.next,f=h.next;continue}if(r=h,r===f){u?u===1?(r=cE(vs(r),e),Po(r,e,t,i,a,o,2)):u===2&&fE(r,e,t,i,a,o):Po(vs(r),e,t,i,a,o,1);break}}}function lE(r){const e=r.prev,t=r,i=r.next;if(en(e,t,i)>=0)return!1;const a=e.x,o=t.x,u=i.x,f=e.y,d=t.y,h=i.y,g=Math.min(a,o,u),v=Math.min(f,d,h),m=Math.max(a,o,u),x=Math.max(f,d,h);let M=i.next;for(;M!==e;){if(M.x>=g&&M.x<=m&&M.y>=v&&M.y<=x&&xo(a,f,o,d,u,h,M.x,M.y)&&en(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function uE(r,e,t,i){const a=r.prev,o=r,u=r.next;if(en(a,o,u)>=0)return!1;const f=a.x,d=o.x,h=u.x,g=a.y,v=o.y,m=u.y,x=Math.min(f,d,h),M=Math.min(g,v,m),b=Math.max(f,d,h),y=Math.max(g,v,m),S=dh(x,M,e,t,i),T=dh(b,y,e,t,i);let R=r.prevZ,P=r.nextZ;for(;R&&R.z>=S&&P&&P.z<=T;){if(R.x>=x&&R.x<=b&&R.y>=M&&R.y<=y&&R!==a&&R!==u&&xo(f,g,d,v,h,m,R.x,R.y)&&en(R.prev,R,R.next)>=0||(R=R.prevZ,P.x>=x&&P.x<=b&&P.y>=M&&P.y<=y&&P!==a&&P!==u&&xo(f,g,d,v,h,m,P.x,P.y)&&en(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;R&&R.z>=S;){if(R.x>=x&&R.x<=b&&R.y>=M&&R.y<=y&&R!==a&&R!==u&&xo(f,g,d,v,h,m,R.x,R.y)&&en(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;P&&P.z<=T;){if(P.x>=x&&P.x<=b&&P.y>=M&&P.y<=y&&P!==a&&P!==u&&xo(f,g,d,v,h,m,P.x,P.y)&&en(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function cE(r,e){let t=r;do{const i=t.prev,a=t.next.next;!ma(i,a)&&Gv(i,t,t.next,a)&&Lo(i,a)&&Lo(a,i)&&(e.push(i.i,t.i,a.i),No(t),No(t.next),t=r=a),t=t.next}while(t!==r);return vs(t)}function fE(r,e,t,i,a,o){let u=r;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&yE(u,f)){let d=Wv(u,f);u=vs(u,u.next),d=vs(d,d.next),Po(u,e,t,i,a,o,0),Po(d,e,t,i,a,o,0);return}f=f.next}u=u.next}while(u!==r)}function dE(r,e,t,i){const a=[];for(let o=0,u=e.length;o<u;o++){const f=e[o]*i,d=o<u-1?e[o+1]*i:r.length,h=Vv(r,f,d,i,!1);h===h.next&&(h.steiner=!0),a.push(xE(h))}a.sort(hE);for(let o=0;o<a.length;o++)t=pE(a[o],t);return t}function hE(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function pE(r,e){const t=mE(r,e);if(!t)return e;const i=Wv(t,r);return vs(i,i.next),vs(t,t.next)}function mE(r,e){let t=e;const i=r.x,a=r.y;let o=-1/0,u;if(ma(r,t))return t;do{if(ma(r,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const v=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=i&&v>o&&(o=v,u=t.x<t.next.x?t:t.next,v===i))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,d=u.x,h=u.y;let g=1/0;t=u;do{if(i>=t.x&&t.x>=d&&i!==t.x&&Hv(a<h?i:o,a,d,h,a<h?o:i,a,t.x,t.y)){const v=Math.abs(a-t.y)/(i-t.x);Lo(t,r)&&(v<g||v===g&&(t.x>u.x||t.x===u.x&&gE(u,t)))&&(u=t,g=v)}t=t.next}while(t!==f);return u}function gE(r,e){return en(r.prev,r,e.prev)<0&&en(e.next,r,r.next)<0}function vE(r,e,t,i){let a=r;do a.z===0&&(a.z=dh(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==r);a.prevZ.nextZ=null,a.prevZ=null,_E(a)}function _E(r){let e,t=1;do{let i=r,a;r=null;let o=null;for(e=0;i;){e++;let u=i,f=0;for(let h=0;h<t&&(f++,u=u.nextZ,!!u);h++);let d=t;for(;f>0||d>0&&u;)f!==0&&(d===0||!u||i.z<=u.z)?(a=i,i=i.nextZ,f--):(a=u,u=u.nextZ,d--),o?o.nextZ=a:r=a,a.prevZ=o,o=a;i=u}o.nextZ=null,t*=2}while(e>1);return r}function dh(r,e,t,i,a){return r=(r-t)*a|0,e=(e-i)*a|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function xE(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hv(r,e,t,i,a,o,u,f){return(a-u)*(e-f)>=(r-u)*(o-f)&&(r-u)*(i-f)>=(t-u)*(e-f)&&(t-u)*(o-f)>=(a-u)*(i-f)}function xo(r,e,t,i,a,o,u,f){return!(r===u&&e===f)&&Hv(r,e,t,i,a,o,u,f)}function yE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!SE(r,e)&&(Lo(r,e)&&Lo(e,r)&&ME(r,e)&&(en(r.prev,r,e.prev)||en(r,e.prev,e))||ma(r,e)&&en(r.prev,r,r.next)>0&&en(e.prev,e,e.next)>0)}function en(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ma(r,e){return r.x===e.x&&r.y===e.y}function Gv(r,e,t,i){const a=pu(en(r,e,t)),o=pu(en(r,e,i)),u=pu(en(t,i,r)),f=pu(en(t,i,e));return!!(a!==o&&u!==f||a===0&&hu(r,t,e)||o===0&&hu(r,i,e)||u===0&&hu(t,r,i)||f===0&&hu(t,e,i))}function hu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function pu(r){return r>0?1:r<0?-1:0}function SE(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Gv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Lo(r,e){return en(r.prev,r,r.next)<0?en(r,e,r.next)>=0&&en(r,r.prev,e)>=0:en(r,e,r.prev)<0||en(r,r.next,e)<0}function ME(r,e){let t=r,i=!1;const a=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&a<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Wv(r,e){const t=hh(r.i,r.x,r.y),i=hh(e.i,e.x,e.y),a=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=a,a.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function c0(r,e,t,i){const a=hh(r,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function No(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function hh(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function EE(r,e,t,i){let a=0;for(let o=e,u=t-i;o<t;o+=i)a+=(r[u]-r[o])*(r[o+1]+r[u+1]),u=o;return a}class wE{static triangulate(e,t,i=2){return oE(e,t,i)}}class Xv{static area(e){const t=e.length;let i=0;for(let a=t-1,o=0;o<t;a=o++)i+=e[a].x*e[o].y-e[o].x*e[a].y;return i*.5}static isClockWise(e){return Xv.area(e)<0}static triangulateShape(e,t){const i=[],a=[],o=[];f0(e),d0(i,e);let u=e.length;t.forEach(f0);for(let d=0;d<t.length;d++)a.push(u),u+=t[d].length,d0(i,t[d]);const f=wE.triangulate(i,a);for(let d=0;d<f.length;d+=3)o.push(f.slice(d,d+3));return o}}function f0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function d0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oh extends Fh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oh(e.radius,e.detail)}}class Xu extends Qn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,u=t/2,f=Math.floor(i),d=Math.floor(a),h=f+1,g=d+1,v=e/f,m=t/d,x=[],M=[],b=[],y=[];for(let S=0;S<g;S++){const T=S*m-u;for(let R=0;R<h;R++){const P=R*v-o;M.push(P,-T,0),b.push(0,0,1),y.push(R/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let T=0;T<f;T++){const R=T+h*S,P=T+h*(S+1),U=T+1+h*(S+1),N=T+1+h*S;x.push(R,P,N),x.push(P,U,N)}this.setIndex(x),this.setAttribute("position",new Jn(M,3)),this.setAttribute("normal",new Jn(b,3)),this.setAttribute("uv",new Jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.width,e.height,e.widthSegments,e.heightSegments)}}function ga(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];if(h0(a))a.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(h0(a[0])){const o=[];for(let u=0,f=a.length;u<f;u++)o[u]=a[u].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const i=ga(r[t]);for(const a in i)e[a]=i[a]}return e}function h0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function TE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const bE={clone:ga,merge:Dn};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=TE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class CE extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class p0 extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vR extends mr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Gu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _R extends mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Gu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PE extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function mu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function NE(r){function e(a,o){return r[a]-r[o]}const t=r.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function m0(r,e,t){const i=r.length,a=new r.constructor(i);for(let o=0,u=0;u!==i;++o){const f=t[o]*e;for(let d=0;d!==e;++d)a[u++]=r[f+d]}return a}function $v(r,e,t,i){let a=1,o=r[0];for(;o!==void 0&&o[i]===void 0;)o=r[a++];if(o===void 0)return;let u=o[i];if(u!==void 0)if(Array.isArray(u))do u=o[i],u!==void 0&&(e.push(o.time),t.push(...u)),o=r[a++];while(o!==void 0);else if(u.toArray!==void 0)do u=o[i],u!==void 0&&(e.push(o.time),u.toArray(t,t.length)),o=r[a++];while(o!==void 0);else do u=o[i],u!==void 0&&(e.push(o.time),t.push(u)),o=r[a++];while(o!==void 0)}class ko{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],o=t[i-1];e:{t:{let u;n:{i:if(!(e<a)){for(let f=i+2;;){if(a===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(o=a,a=t[++i],e<a)break t}u=t.length;break n}if(!(e>=o)){const f=t[1];e<f&&(i=2,o=f);for(let d=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(a=o,o=t[--i-1],e>=o)break t}u=i,i=0;break n}break e}for(;i<u;){const f=i+u>>>1;e<t[f]?u=f:i=f+1}if(a=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a;for(let u=0;u!==a;++u)t[u]=i[o+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IE extends ko{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ng,endingEnd:Ng}}intervalChanged_(e,t,i){const a=this.parameterPositions;let o=e-2,u=e+1,f=a[o],d=a[u];if(f===void 0)switch(this.getSettings_().endingStart){case Ig:o=e,f=2*t-i;break;case Dg:o=a.length-2,f=t+a[o]-a[o+1];break;default:o=e,f=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Ig:u=e,d=2*i-t;break;case Dg:u=1,d=i+a[1]-a[0];break;default:u=e-1,d=t}const h=(i-t)*.5,g=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-i),this._offsetPrev=o*g,this._offsetNext=u*g}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this._offsetPrev,v=this._offsetNext,m=this._weightPrev,x=this._weightNext,M=(i-t)/(a-t),b=M*M,y=b*M,S=-m*y+2*m*b-m*M,T=(1+m)*y+(-1.5-2*m)*b+(-.5+m)*M+1,R=(-1-x)*y+(1.5+x)*b+.5*M,P=x*y-x*b;for(let U=0;U!==f;++U)o[U]=S*u[g+U]+T*u[h+U]+R*u[d+U]+P*u[v+U];return o}}class DE extends ko{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=(i-t)/(a-t),v=1-g;for(let m=0;m!==f;++m)o[m]=u[h+m]*v+u[d+m]*g;return o}}class UE extends ko{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class FE extends ko{interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this.settings||this.DefaultSettings_,v=g.inTangents,m=g.outTangents;if(!v||!m){const b=(i-t)/(a-t),y=1-b;for(let S=0;S!==f;++S)o[S]=u[h+S]*y+u[d+S]*b;return o}const x=f*2,M=e-1;for(let b=0;b!==f;++b){const y=u[h+b],S=u[d+b],T=M*x+b*2,R=m[T],P=m[T+1],U=e*x+b*2,N=v[U],O=v[U+1];let w=(i-t)/(a-t),I,V,k,Z,ce;for(let fe=0;fe<8;fe++){I=w*w,V=I*w,k=1-w,Z=k*k,ce=Z*k;const W=ce*t+3*Z*w*R+3*k*I*N+V*a-i;if(Math.abs(W)<1e-10)break;const G=3*Z*(R-t)+6*k*w*(N-R)+3*I*(a-N);if(Math.abs(G)<1e-10)break;w=w-W/G,w=Math.max(0,Math.min(1,w))}o[b]=ce*y+3*Z*w*P+3*k*I*O+V*S}return o}}class bi{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mu(t,this.TimeBufferType),this.values=mu(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mu(e.times,Array),values:mu(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new UE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new IE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new FE(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Nu:t=this.InterpolantFactoryMethodDiscrete;break;case uh:t=this.InterpolantFactoryMethodLinear;break;case zf:t=this.InterpolantFactoryMethodSmooth;break;case Lg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nu;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return zf;case this.InterpolantFactoryMethodBezier:return Lg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let o=0,u=a-1;for(;o!==a&&i[o]<e;)++o;for(;u!==-1&&i[u]>t;)--u;if(++u,o!==0||u!==a){o>=u&&(u=Math.max(u,1),o=u-1);const f=this.getValueSize();this.times=i.slice(o,u),this.values=this.values.slice(o*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,o=i.length;o===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==o;f++){const d=i[f];if(typeof d=="number"&&isNaN(d)){it("KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){it("KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(a!==void 0&&hM(a))for(let f=0,d=a.length;f!==d;++f){const h=a[f];if(isNaN(h)){it("KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===zf,o=e.length-1;let u=1;for(let f=1;f<o;++f){let d=!1;const h=e[f],g=e[f+1];if(h!==g&&(f!==1||h!==e[0]))if(a)d=!0;else{const v=f*i,m=v-i,x=v+i;for(let M=0;M!==i;++M){const b=t[v+M];if(b!==t[m+M]||b!==t[x+M]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const v=f*i,m=u*i;for(let x=0;x!==i;++x)t[m+x]=t[v+x]}++u}}if(o>0){e[u]=e[o];for(let f=o*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=uh;class ya extends bi{constructor(e,t,i){super(e,t,i)}}ya.prototype.ValueTypeName="bool";ya.prototype.ValueBufferType=Array;ya.prototype.DefaultInterpolation=Nu;ya.prototype.InterpolantFactoryMethodLinear=void 0;ya.prototype.InterpolantFactoryMethodSmooth=void 0;class Yv extends bi{constructor(e,t,i,a){super(e,t,i,a)}}Yv.prototype.ValueTypeName="color";class Ou extends bi{constructor(e,t,i,a){super(e,t,i,a)}}Ou.prototype.ValueTypeName="number";class OE extends ko{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(i-t)/(a-t);let h=e*f;for(let g=h+f;h!==g;h+=4)ys.slerpFlat(o,0,u,h-f,u,h,d);return o}}class ju extends bi{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new OE(this.times,this.values,this.getValueSize(),e)}}ju.prototype.ValueTypeName="quaternion";ju.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends bi{constructor(e,t,i){super(e,t,i)}}Sa.prototype.ValueTypeName="string";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=Nu;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;class ku extends bi{constructor(e,t,i,a){super(e,t,i,a)}}ku.prototype.ValueTypeName="vector";class xR{constructor(e="",t=-1,i=[],a=iM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=Wr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let u=0,f=i.length;u!==f;++u)t.push(BE(i[u]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,u=i.length;o!==u;++o)t.push(bi.toJSON(i[o]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const o=t.length,u=[];for(let f=0;f<o;f++){let d=[],h=[];d.push((f+o-1)%o,f,(f+1)%o),h.push(0,1,0);const g=NE(d);d=m0(d,1,g),h=m0(h,1,g),!a&&d[0]===0&&(d.push(o),h.push(h[0])),u.push(new Ou(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},o=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],g=h.name.match(o);if(g&&g.length>1){const v=g[1];let m=a[v];m||(a[v]=m=[]),m.push(h)}}const u=[];for(const f in a)u.push(this.CreateFromMorphTargetSequence(f,a[f],t,i));return u}static parseAnimation(e,t){if(Qe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return it("AnimationClip: No animation in JSONLoader data."),null;const i=function(v,m,x,M,b){if(x.length!==0){const y=[],S=[];$v(x,y,S,M),y.length!==0&&b.push(new v(m,y,S))}},a=[],o=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let v=0;v<h.length;v++){const m=h[v].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const x={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let b=0;b<m[M].morphTargets.length;b++)x[m[M].morphTargets[b]]=-1;for(const b in x){const y=[],S=[];for(let T=0;T!==m[M].morphTargets.length;++T){const R=m[M];y.push(R.time),S.push(R.morphTarget===b?1:0)}a.push(new Ou(".morphTargetInfluence["+b+"]",y,S))}d=x.length*u}else{const x=".bones["+t[v].name+"]";i(ku,x+".position",m,"pos",a),i(ju,x+".quaternion",m,"rot",a),i(ku,x+".scale",m,"scl",a)}}return a.length===0?null:new this(o,d,a,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function kE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ou;case"vector":case"vector2":case"vector3":case"vector4":return ku;case"color":return Yv;case"quaternion":return ju;case"bool":case"boolean":return ya;case"string":return Sa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function BE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kE(r.type);if(r.times===void 0){const t=[],i=[];$v(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Eo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(g0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!g0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function g0(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zE{constructor(e,t,i){const a=this;let o=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){f++,o===!1&&a.onStart!==void 0&&a.onStart(g,u,f),o=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return h.push(g,v),this},this.removeHandler=function(g){const v=h.indexOf(g);return v!==-1&&h.splice(v,2),this},this.getHandler=function(g){for(let v=0,m=h.length;v<m;v+=2){const x=h[v],M=h[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const VE=new zE;class $u{constructor(e){this.manager=e!==void 0?e:VE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$u.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class HE extends Error{constructor(e,t){super(e),this.response=t}}class yR extends $u{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Eo.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:i,onError:a});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:i,onError:a});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=sr[e],v=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=m?parseInt(m):0,M=x!==0;let b=0;const y=new ReadableStream({start(S){T();function T(){v.read().then(({done:R,value:P})=>{if(R)S.close();else{b+=P.byteLength;const U=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:x});for(let N=0,O=g.length;N<O;N++){const w=g[N];w.onProgress&&w.onProgress(U)}S.enqueue(P),T()}},R=>{S.error(R)})}}});return new Response(y)}else throw new HE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return h.json();default:if(f==="")return h.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),m=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(m);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{Eo.add(`file:${e}`,h);const g=sr[e];delete sr[e];for(let v=0,m=g.length;v<m;v++){const x=g[v];x.onLoad&&x.onLoad(h)}}).catch(h=>{const g=sr[e];if(g===void 0)throw this.manager.itemError(e),h;delete sr[e];for(let v=0,m=g.length;v<m;v++){const x=g[v];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ra=new WeakMap;class GE extends $u{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Eo.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0);else{let v=ra.get(u);v===void 0&&(v=[],ra.set(u,v)),v.push({onLoad:t,onError:a})}return u}const f=Co("img");function d(){g(),t&&t(this);const v=ra.get(this)||[];for(let m=0;m<v.length;m++){const x=v[m];x.onLoad&&x.onLoad(this)}ra.delete(this),o.manager.itemEnd(e)}function h(v){g(),a&&a(v),Eo.remove(`image:${e}`);const m=ra.get(this)||[];for(let x=0;x<m.length;x++){const M=m[x];M.onError&&M.onError(v)}ra.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function g(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Eo.add(`image:${e}`,f),o.manager.itemStart(e),f.src=e,f}}class SR extends $u{constructor(e){super(e)}load(e,t,i,a){const o=new Cn,u=new GE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){o.image=f,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class Yu extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const dd=new wt,v0=new K,_0=new K;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),_0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_0),t.updateMatrixWorld(),dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ro||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gu=new K,vu=new ys,Ii=new K;class qv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gu,vu,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,vu,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(gu,vu,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,vu,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zr=new K,x0=new St,y0=new St;class Gn extends qv{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,x0,y0),t.subVectors(y0,x0)}setViewOffset(e,t,i,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*a/d,t-=u.offsetY*i/h,a*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class WE extends kh{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ha*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class MR extends Yu{constructor(e,t,i=0,a=Math.PI/3,o=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=i,this.angle=a,this.penumbra=o,this.decay=u,this.map=null,this.shadow=new WE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class XE extends kh{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class ER extends Yu{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new XE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Bh extends qv{constructor(e=-1,t=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,u=i+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jE extends kh{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $E extends Yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new jE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class YE extends Yu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wR{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const sa=-90,aa=1;class qE extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(sa,aa,e,t);a.layers=this.layers,this.add(a);const o=new Gn(sa,aa,e,t);o.layers=this.layers,this.add(o);const u=new Gn(sa,aa,e,t);u.layers=this.layers,this.add(u);const f=new Gn(sa,aa,e,t);f.layers=this.layers,this.add(f);const d=new Gn(sa,aa,e,t);d.layers=this.layers,this.add(d);const h=new Gn(sa,aa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,u,f,d]=t;for(const h of t)this.remove(h);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,d,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class KE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zh="\\[\\]\\.:\\/",ZE=new RegExp("["+zh+"]","g"),Vh="[^"+zh+"]",JE="[^"+zh.replace("\\.","")+"]",QE=/((?:WC+[\/:])*)/.source.replace("WC",Vh),e1=/(WCOD+)?/.source.replace("WCOD",JE),t1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),n1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),i1=new RegExp("^"+QE+e1+t1+n1+"$"),r1=["material","materials","bones","map"];class s1{constructor(e,t,i){const a=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ut{constructor(e,t,i){this.path=t,this.parsedPath=i||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,i):new Ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZE,"")}static parseTrackName(e){const t=i1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=i.nodeName.substring(a+1);r1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let u=0;u<o.length;u++){const f=o[u];if(f.name===t||f.uuid===t)return f;const d=i(f.children);if(d)return d}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[a];if(u===void 0){const h=t.nodeName;it("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=o}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=s1;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const S0=new wt;class a1{constructor(e,t,i=0,a=1/0){this.ray=new Fo(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return S0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(e,t=!0,i=[]){return ph(e,this,i,t),i.sort(M0),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)ph(e[a],this,i,t);return i.sort(M0),i}}function M0(r,e){return r.distance-e.distance}function ph(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=r.children;for(let u=0,f=o.length;u<f;u++)ph(o[u],e,t,!0)}}const jh=class jh{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};jh.prototype.isMatrix2=!0;let E0=jh;function w0(r,e,t,i){const a=o1(i);switch(t){case Av:return r*e;case Cv:return r*e/a.components*a.byteLength;case Ah:return r*e/a.components*a.byteLength;case gs:return r*e*2/a.components*a.byteLength;case Rh:return r*e*2/a.components*a.byteLength;case Rv:return r*e*3/a.components*a.byteLength;case ui:return r*e*4/a.components*a.byteLength;case Ch:return r*e*4/a.components*a.byteLength;case wu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bu:case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Fd:return Math.max(r,16)*Math.max(e,8)/4;case Id:case Ud:return Math.max(r,8)*Math.max(e,8)/2;case Od:case kd:case zd:case Vd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bd:case Pu:case Hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ih:case rh:case sh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ah:case oh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lu:case lh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o1(r){switch(r){case Zn:case Ev:return{byteLength:1,components:1};case To:case wv:case dr:return{byteLength:2,components:1};case Th:case bh:return{byteLength:2,components:4};case zi:case wh:case Ei:return{byteLength:4,components:1};case Tv:case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kv(){let r=null,e=!1,t=null,i=null;function a(o,u){t(o,u),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function l1(r){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,v=h.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,h,g),f.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,d,h){const g=d.array,v=d.updateRanges;if(r.bindBuffer(h,f),v.length===0)r.bufferSubData(h,0,g);else{v.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<v.length;x++){const M=v[m],b=v[x];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++m,v[m]=b)}v.length=m+1;for(let x=0,M=v.length;x<M;x++){const b=v[x];r.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:o,update:u}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m1=`#ifdef USE_AOMAP
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
#endif`,g1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D1=`vec3 transformedNormal = objectNormal;
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
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B1="gl_FragColor = linearToOutputTexel( gl_FragColor );",z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K1=`#ifdef USE_GRADIENTMAP
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
}`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ew=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aw=`PhysicalMaterial material;
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
#endif`,ow=`uniform sampler2D dfgLUT;
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
}`,lw=`
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
#endif`,uw=`#if defined( RE_IndirectDiffuse )
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
#endif`,cw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xw=`#if defined( USE_POINTS_UV )
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
#endif`,yw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tw=`#ifdef USE_MORPHTARGETS
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
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
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
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$w=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yw=`float getShadowMask() {
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
}`,qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kw=`#ifdef USE_SKINNING
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
#endif`,Zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,Qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,vT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,wT=`uniform vec3 diffuse;
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
}`,TT=`#define LAMBERT
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
}`,bT=`#define LAMBERT
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
}`,AT=`#define MATCAP
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
}`,RT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,PT=`#define NORMAL
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
}`,LT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,IT=`#define STANDARD
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
}`,DT=`#define STANDARD
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
}`,UT=`#define TOON
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
}`,FT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,kT=`uniform vec3 diffuse;
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
}`,BT=`#include <common>
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
}`,zT=`uniform vec3 color;
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
}`,VT=`uniform float rotation;
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
}`,HT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:u1,alphahash_pars_fragment:c1,alphamap_fragment:f1,alphamap_pars_fragment:d1,alphatest_fragment:h1,alphatest_pars_fragment:p1,aomap_fragment:m1,aomap_pars_fragment:g1,batching_pars_vertex:v1,batching_vertex:_1,begin_vertex:x1,beginnormal_vertex:y1,bsdfs:S1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:b1,clipping_planes_vertex:A1,color_fragment:R1,color_pars_fragment:C1,color_pars_vertex:P1,color_vertex:L1,common:N1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:D1,displacementmap_pars_vertex:U1,displacementmap_vertex:F1,emissivemap_fragment:O1,emissivemap_pars_fragment:k1,colorspace_fragment:B1,colorspace_pars_fragment:z1,envmap_fragment:V1,envmap_common_pars_fragment:H1,envmap_pars_fragment:G1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:tw,envmap_vertex:X1,fog_vertex:j1,fog_pars_vertex:$1,fog_fragment:Y1,fog_pars_fragment:q1,gradientmap_pars_fragment:K1,lightmap_pars_fragment:Z1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:Q1,lights_pars_begin:ew,lights_toon_fragment:nw,lights_toon_pars_fragment:iw,lights_phong_fragment:rw,lights_phong_pars_fragment:sw,lights_physical_fragment:aw,lights_physical_pars_fragment:ow,lights_fragment_begin:lw,lights_fragment_maps:uw,lights_fragment_end:cw,lightprobes_pars_fragment:fw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:pw,logdepthbuf_vertex:mw,map_fragment:gw,map_pars_fragment:vw,map_particle_fragment:_w,map_particle_pars_fragment:xw,metalnessmap_fragment:yw,metalnessmap_pars_fragment:Sw,morphinstance_vertex:Mw,morphcolor_vertex:Ew,morphnormal_vertex:ww,morphtarget_pars_vertex:Tw,morphtarget_vertex:bw,normal_fragment_begin:Aw,normal_fragment_maps:Rw,normal_pars_fragment:Cw,normal_pars_vertex:Pw,normal_vertex:Lw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Dw,clearcoat_pars_fragment:Uw,iridescence_pars_fragment:Fw,opaque_fragment:Ow,packing:kw,premultiplied_alpha_fragment:Bw,project_vertex:zw,dithering_fragment:Vw,dithering_pars_fragment:Hw,roughnessmap_fragment:Gw,roughnessmap_pars_fragment:Ww,shadowmap_pars_fragment:Xw,shadowmap_pars_vertex:jw,shadowmap_vertex:$w,shadowmask_pars_fragment:Yw,skinbase_vertex:qw,skinning_pars_vertex:Kw,skinning_vertex:Zw,skinnormal_vertex:Jw,specularmap_fragment:Qw,specularmap_pars_fragment:eT,tonemapping_fragment:tT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:rT,uv_pars_fragment:sT,uv_pars_vertex:aT,uv_vertex:oT,worldpos_vertex:lT,background_vert:uT,background_frag:cT,backgroundCube_vert:fT,backgroundCube_frag:dT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:vT,distance_frag:_T,equirect_vert:xT,equirect_frag:yT,linedashed_vert:ST,linedashed_frag:MT,meshbasic_vert:ET,meshbasic_frag:wT,meshlambert_vert:TT,meshlambert_frag:bT,meshmatcap_vert:AT,meshmatcap_frag:RT,meshnormal_vert:CT,meshnormal_frag:PT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:IT,meshphysical_frag:DT,meshtoon_vert:UT,meshtoon_frag:FT,points_vert:OT,points_frag:kT,shadow_vert:BT,shadow_frag:zT,sprite_vert:VT,sprite_frag:HT},Fe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ui={basic:{uniforms:Dn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new yt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Dn([Fe.common,Fe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Dn([Fe.lights,Fe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ui.physical={uniforms:Dn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const _u={r:0,b:0,g:0},GT=new wt,Zv=new ct;Zv.set(-1,0,0,0,1,0,0,0,1);function WT(r,e,t,i,a,o){const u=new yt(0);let f=a===!0?0:1,d,h,g=null,v=0,m=null;function x(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){const P=T.backgroundBlurriness>0;R=e.get(R,P)}return R}function M(T){let R=!1;const P=x(T);P===null?y(u,f):P&&P.isColor&&(y(P,1),R=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(r.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(T,R){const P=x(R);P&&(P.isCubeTexture||P.mapping===Wu)?(h===void 0&&(h=new Ti(new Oo(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ga(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(GT.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Zv),h.material.toneMapped=Mt.getTransfer(P.colorSpace)!==It,(g!==P||v!==P.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,g=P,v=P.version,m=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Ti(new Xu(2,2),new Hi({name:"BackgroundMaterial",uniforms:ga(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||m!==r.toneMapping)&&(d.material.needsUpdate=!0,g=P,v=P.version,m=r.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function y(T,R){T.getRGB(_u,jv(r)),t.buffers.color.setClear(_u.r,_u.g,_u.b,R,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(T,R=1){u.set(T),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,y(u,f)},render:M,addToRenderList:b,dispose:S}}function XT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=m(null);let o=a,u=!1;function f(k,Z,ce,fe,B){let W=!1;const G=v(k,fe,ce,Z);o!==G&&(o=G,h(o.object)),W=x(k,fe,ce,B),W&&M(k,fe,ce,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,P(k,Z,ce,fe),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return r.createVertexArray()}function h(k){return r.bindVertexArray(k)}function g(k){return r.deleteVertexArray(k)}function v(k,Z,ce,fe){const B=fe.wireframe===!0;let W=i[Z.id];W===void 0&&(W={},i[Z.id]=W);const G=k.isInstancedMesh===!0?k.id:0;let $=W[G];$===void 0&&($={},W[G]=$);let te=$[ce.id];te===void 0&&(te={},$[ce.id]=te);let re=te[B];return re===void 0&&(re=m(d()),te[B]=re),re}function m(k){const Z=[],ce=[],fe=[];for(let B=0;B<t;B++)Z[B]=0,ce[B]=0,fe[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ce,attributeDivisors:fe,object:k,attributes:{},index:null}}function x(k,Z,ce,fe){const B=o.attributes,W=Z.attributes;let G=0;const $=ce.getAttributes();for(const te in $)if($[te].location>=0){const F=B[te];let Q=W[te];if(Q===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;G++}return o.attributesNum!==G||o.index!==fe}function M(k,Z,ce,fe){const B={},W=Z.attributes;let G=0;const $=ce.getAttributes();for(const te in $)if($[te].location>=0){let F=W[te];F===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),B[te]=Q,G++}o.attributes=B,o.attributesNum=G,o.index=fe}function b(){const k=o.newAttributes;for(let Z=0,ce=k.length;Z<ce;Z++)k[Z]=0}function y(k){S(k,0)}function S(k,Z){const ce=o.newAttributes,fe=o.enabledAttributes,B=o.attributeDivisors;ce[k]=1,fe[k]===0&&(r.enableVertexAttribArray(k),fe[k]=1),B[k]!==Z&&(r.vertexAttribDivisor(k,Z),B[k]=Z)}function T(){const k=o.newAttributes,Z=o.enabledAttributes;for(let ce=0,fe=Z.length;ce<fe;ce++)Z[ce]!==k[ce]&&(r.disableVertexAttribArray(ce),Z[ce]=0)}function R(k,Z,ce,fe,B,W,G){G===!0?r.vertexAttribIPointer(k,Z,ce,B,W):r.vertexAttribPointer(k,Z,ce,fe,B,W)}function P(k,Z,ce,fe){b();const B=fe.attributes,W=ce.getAttributes(),G=Z.defaultAttributeValues;for(const $ in W){const te=W[$];if(te.location>=0){let re=B[$];if(re===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),re!==void 0){const F=re.normalized,Q=re.itemSize,be=e.get(re);if(be===void 0)continue;const Oe=be.buffer,De=be.type,oe=be.bytesPerElement,_e=De===r.INT||De===r.UNSIGNED_INT||re.gpuType===wh;if(re.isInterleavedBufferAttribute){const de=re.data,Ne=de.stride,ze=re.offset;if(de.isInstancedInterleavedBuffer){for(let et=0;et<te.locationSize;et++)S(te.location+et,de.meshPerAttribute);k.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let et=0;et<te.locationSize;et++)y(te.location+et);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let et=0;et<te.locationSize;et++)R(te.location+et,Q/te.locationSize,De,F,Ne*oe,(ze+Q/te.locationSize*et)*oe,_e)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<te.locationSize;de++)S(te.location+de,re.meshPerAttribute);k.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<te.locationSize;de++)y(te.location+de);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let de=0;de<te.locationSize;de++)R(te.location+de,Q/te.locationSize,De,F,Q*oe,Q/te.locationSize*de*oe,_e)}}else if(G!==void 0){const F=G[$];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(te.location,F);break;case 3:r.vertexAttrib3fv(te.location,F);break;case 4:r.vertexAttrib4fv(te.location,F);break;default:r.vertexAttrib1fv(te.location,F)}}}}T()}function U(){I();for(const k in i){const Z=i[k];for(const ce in Z){const fe=Z[ce];for(const B in fe){const W=fe[B];for(const G in W)g(W[G].object),delete W[G];delete fe[B]}}delete i[k]}}function N(k){if(i[k.id]===void 0)return;const Z=i[k.id];for(const ce in Z){const fe=Z[ce];for(const B in fe){const W=fe[B];for(const G in W)g(W[G].object),delete W[G];delete fe[B]}}delete i[k.id]}function O(k){for(const Z in i){const ce=i[Z];for(const fe in ce){const B=ce[fe];if(B[k.id]===void 0)continue;const W=B[k.id];for(const G in W)g(W[G].object),delete W[G];delete B[k.id]}}}function w(k){for(const Z in i){const ce=i[Z],fe=k.isInstancedMesh===!0?k.id:0,B=ce[fe];if(B!==void 0){for(const W in B){const G=B[W];for(const $ in G)g(G[$].object),delete G[$];delete B[W]}delete ce[fe],Object.keys(ce).length===0&&delete i[Z]}}}function I(){V(),u=!0,o!==a&&(o=a,h(o.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:y,disableUnusedAttributes:T}}function jT(r,e,t){let i;function a(d){i=d}function o(d,h){r.drawArrays(i,d,h),t.update(h,i,1)}function u(d,h,g){g!==0&&(r.drawArraysInstanced(i,d,h,g),t.update(h,i,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,g);let m=0;for(let x=0;x<g;x++)m+=h[x];t.update(m,i,1)}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=f}function $T(r,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==ui&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Zn&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ei&&!w)}function d(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(Qe("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:P,maxSamples:U,samples:N}}function YT(r){const e=this;let t=null,i=0,a=!1,o=!1;const u=new cs,f=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const x=v.length!==0||m||i!==0||a;return a=m,i=v.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,x){const M=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!a||M===null||M.length===0||o&&!y)o?g(null):h();else{const T=o?0:i,R=T*4;let P=S.clippingState||null;d.value=P,P=g(M,m,R,x);for(let U=0;U!==R;++U)P[U]=t[U];S.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(v,m,x,M){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=d.value,M!==!0||y===null){const S=x+b*4,T=m.matrixWorldInverse;f.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let R=0,P=x;R!==b;++R,P+=4)u.copy(v[R]).applyMatrix4(T,f),u.normal.toArray(y,P),y[P+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Hr=4,T0=[.125,.215,.35,.446,.526,.582],ds=20,qT=256,mo=new Bh,b0=new yt;let hd=null,pd=0,md=0,gd=!1;const KT=new K;class A0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:u=256,position:f=KT}=o;hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:dr,format:ui,colorSpace:Iu,depthBuffer:!1},a=R0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(o)),this._blurMaterial=QT(o,e,t),this._ggxMaterial=JT(o,e,t)}return a}_compileMaterial(e){const t=new Ti(new Qn,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,a,o){const d=new Gn(90,1,t,i),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,x=v.toneMapping;v.getClearColor(b0),v.toneMapping=Oi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ti(new Oo,new Uv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,S=!0):(y.color.copy(b0),S=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(d.up.set(0,h[R],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+g[R],o.y,o.z)):P===1?(d.up.set(0,0,h[R]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+g[R],o.z)):(d.up.set(0,h[R],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+g[R]));const U=this._cubeSize;oa(a,P*U,R>2?U:0,U,U),v.setRenderTarget(a),S&&v.render(b,d),v.render(e,d)}v.toneMapping=x,v.autoClear=m,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ms||e.mapping===da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const o=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=e;const d=this._cubeSize;oa(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=0+h*1.25,x=v*m,{_lodMax:M}=this,b=this._sizeLods[i],y=3*b*(i>M-Hr?i-M+Hr:0),S=4*(this._cubeSize-b);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=M-t,oa(o,y,S,3*b,2*b),a.setRenderTarget(o),a.render(f,mo),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=M-i,oa(e,y,S,3*b,2*b),a.setRenderTarget(e),a.render(f,mo)}_blur(e,t,i,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,a,"latitudinal",o),this._halfBlur(u,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[a];v.material=h;const m=h.uniforms,x=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*ds-1),b=o/M,y=isFinite(o)?1+Math.floor(g*b):ds;y>ds&&Qe(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const S=[];let T=0;for(let O=0;O<ds;++O){const w=O/b,I=Math.exp(-w*w/2);S.push(I),O===0?T+=I:O<y&&(T+=2*I)}for(let O=0;O<S.length;O++)S[O]=S[O]/T;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:R}=this;m.dTheta.value=M,m.mipInt.value=R-i;const P=this._sizeLods[a],U=3*P*(a>R-Hr?a-R+Hr:0),N=4*(this._cubeSize-P);oa(t,U,N,3*P,2*P),d.setRenderTarget(t),d.render(v,mo)}}function ZT(r){const e=[],t=[],i=[];let a=r;const o=r-Hr+1+T0.length;for(let u=0;u<o;u++){const f=Math.pow(2,a);e.push(f);let d=1/f;u>r-Hr?d=T0[u-r+Hr-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,v=1+h,m=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,b=3,y=2,S=1,T=new Float32Array(b*M*x),R=new Float32Array(y*M*x),P=new Float32Array(S*M*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,w=N>2?0:-1,I=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];T.set(I,b*M*N),R.set(m,y*M*N);const V=[N,N,N,N,N,N];P.set(V,S*M*N)}const U=new Qn;U.setAttribute("position",new wi(T,b)),U.setAttribute("uv",new wi(R,y)),U.setAttribute("faceIndex",new wi(P,S)),i.push(new Ti(U,null)),a>Hr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function R0(r,e,t){const i=new ki(r,e,t);return i.texture.mapping=Wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function JT(r,e,t){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function QT(r,e,t){const i=new Float32Array(ds),a=new K(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function C0(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function P0(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function qu(){return`

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
	`}class Jv extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Bv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Oo(5,5,5),o=new Hi({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:ur});o.uniforms.tEquirect.value=t;const u=new Ti(a,o),f=t.minFilter;return t.minFilter===hs&&(t.minFilter=Rn),new qE(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(o)}}function eb(r){let e=new WeakMap,t=new WeakMap,i=null;function a(m,x=!1){return m==null?null:x?u(m):o(m)}function o(m){if(m&&m.isTexture){const x=m.mapping;if(x===Of||x===kf)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const b=new Jv(M.height);return b.fromEquirectangularTexture(r,m),e.set(m,b),m.addEventListener("dispose",h),f(b.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const x=m.mapping,M=x===Of||x===kf,b=x===ms||x===da;if(M||b){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new A0(r)),y=M?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const T=m.image;return M&&T&&T.height>0||b&&T&&d(T)?(i===null&&(i=new A0(r)),y=M?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,x){return x===Of?m.mapping=ms:x===kf&&(m.mapping=da),m}function d(m){let x=0;const M=6;for(let b=0;b<M;b++)m[b]!==void 0&&x++;return x===M}function h(m){const x=m.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function tb(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=r.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&ch("WebGLRenderer: "+i+" extension not supported."),a}}}function nb(r,e,t,i){const a={},o=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete a[m.id];const x=o.get(m);x&&(e.remove(x),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return a[m.id]===!0||(m.addEventListener("dispose",u),a[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const x in m)e.update(m[x],r.ARRAY_BUFFER)}function h(v){const m=[],x=v.index,M=v.attributes.position;let b=0;if(M===void 0)return;if(x!==null){const T=x.array;b=x.version;for(let R=0,P=T.length;R<P;R+=3){const U=T[R+0],N=T[R+1],O=T[R+2];m.push(U,N,N,O,O,U)}}else{const T=M.array;b=M.version;for(let R=0,P=T.length/3-1;R<P;R+=3){const U=R+0,N=R+1,O=R+2;m.push(U,N,N,O,O,U)}}const y=new(M.count>=65535?Dv:Iv)(m,1);y.version=b;const S=o.get(v);S&&e.remove(S),o.set(v,y)}function g(v){const m=o.get(v);if(m){const x=v.index;x!==null&&m.version<x.version&&h(v)}else h(v);return o.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function ib(r,e,t){let i;function a(v){i=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function d(v,m){r.drawElements(i,m,o,v*u),t.update(m,i,1)}function h(v,m,x){x!==0&&(r.drawElementsInstanced(i,m,o,v*u,x),t.update(m,i,x))}function g(v,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,v,0,x);let b=0;for(let y=0;y<x;y++)b+=m[y];t.update(b,i,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function rb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(o/3);break;case r.LINES:t.lines+=f*(o/2);break;case r.LINE_STRIP:t.lines+=f*(o-1);break;case r.LINE_LOOP:t.lines+=f*o;break;case r.POINTS:t.points+=f*o;break;default:it("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function sb(r,e,t){const i=new WeakMap,a=new Ot;function o(u,f,d){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=i.get(f);if(m===void 0||m.count!==v){let I=function(){O.dispose(),i.delete(f),f.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const x=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let R=0;x===!0&&(R=1),M===!0&&(R=2),b===!0&&(R=3);let P=f.attributes.position.count*R,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const N=new Float32Array(P*U*4*v),O=new Lv(N,P,U,v);O.type=Ei,O.needsUpdate=!0;const w=R*4;for(let V=0;V<v;V++){const k=y[V],Z=S[V],ce=T[V],fe=P*U*4*V;for(let B=0;B<k.count;B++){const W=B*w;x===!0&&(a.fromBufferAttribute(k,B),N[fe+W+0]=a.x,N[fe+W+1]=a.y,N[fe+W+2]=a.z,N[fe+W+3]=0),M===!0&&(a.fromBufferAttribute(Z,B),N[fe+W+4]=a.x,N[fe+W+5]=a.y,N[fe+W+6]=a.z,N[fe+W+7]=0),b===!0&&(a.fromBufferAttribute(ce,B),N[fe+W+8]=a.x,N[fe+W+9]=a.y,N[fe+W+10]=a.z,N[fe+W+11]=ce.itemSize===4?a.w:1)}}m={count:v,texture:O,size:new St(P,U)},i.set(f,m),f.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let x=0;for(let b=0;b<h.length;b++)x+=h[b];const M=f.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:o}}function ab(r,e,t,i,a){let o=new WeakMap;function u(h){const g=a.render.frame,v=h.geometry,m=e.get(h,v);if(o.get(m)!==g&&(e.update(m),o.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==g&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return m}function f(){o=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const ob={[mv]:"LINEAR_TONE_MAPPING",[gv]:"REINHARD_TONE_MAPPING",[vv]:"CINEON_TONE_MAPPING",[_v]:"ACES_FILMIC_TONE_MAPPING",[yv]:"AGX_TONE_MAPPING",[Sv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function lb(r,e,t,i,a){const o=new ki(e,t,{type:r,depthBuffer:i,stencilBuffer:a,depthTexture:i?new pa(e,t):void 0}),u=new ki(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),f=new Qn;f.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const d=new CE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ti(f,d),g=new Bh(-1,1,1,-1,0,1);let v=null,m=null,x=!1,M,b=null,y=[],S=!1;this.setSize=function(T,R){o.setSize(T,R),u.setSize(T,R);for(let P=0;P<y.length;P++){const U=y[P];U.setSize&&U.setSize(T,R)}},this.setEffects=function(T){y=T,S=y.length>0&&y[0].isRenderPass===!0;const R=o.width,P=o.height;for(let U=0;U<y.length;U++){const N=y[U];N.setSize&&N.setSize(R,P)}},this.begin=function(T,R){if(x||T.toneMapping===Oi&&y.length===0)return!1;if(b=R,R!==null){const P=R.width,U=R.height;(o.width!==P||o.height!==U)&&this.setSize(P,U)}return S===!1&&T.setRenderTarget(o),M=T.toneMapping,T.toneMapping=Oi,!0},this.hasRenderPass=function(){return S},this.end=function(T,R){T.toneMapping=M,x=!0;let P=o,U=u;for(let N=0;N<y.length;N++){const O=y[N];if(O.enabled!==!1&&(O.render(T,U,P,R),O.needsSwap!==!1)){const w=P;P=U,U=w}}if(v!==T.outputColorSpace||m!==T.toneMapping){v=T.outputColorSpace,m=T.toneMapping,d.defines={},Mt.getTransfer(v)===It&&(d.defines.SRGB_TRANSFER="");const N=ob[m];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,T.setRenderTarget(b),T.render(h,g),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),u.dispose(),f.dispose(),d.dispose()}}const Qv=new Cn,mh=new pa(1,1),e_=new Lv,t_=new kM,n_=new Bv,L0=[],N0=[],I0=new Float32Array(16),D0=new Float32Array(9),U0=new Float32Array(4);function Ma(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let o=L0[a];if(o===void 0&&(o=new Float32Array(a),L0[a]=o),e!==0){i.toArray(o,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(o,f)}return o}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ku(r,e){let t=N0[e];t===void 0&&(t=new Int32Array(e),N0[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function ub(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function hb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;U0.set(i),r.uniformMatrix2fv(this.addr,!1,U0),dn(t,i)}}function pb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;D0.set(i),r.uniformMatrix3fv(this.addr,!1,D0),dn(t,i)}}function mb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;I0.set(i),r.uniformMatrix4fv(this.addr,!1,I0),dn(t,i)}}function gb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function yb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function Mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function wb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?Lh:Ph,o=mh):o=Qv,t.setTexture2D(e||o,a)}function Tb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||t_,a)}function bb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||n_,a)}function Ab(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||e_,a)}function Rb(r){switch(r){case 5126:return ub;case 35664:return cb;case 35665:return fb;case 35666:return db;case 35674:return hb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return vb;case 35668:case 35672:return _b;case 35669:case 35673:return xb;case 5125:return yb;case 36294:return Sb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Cb(r,e){r.uniform1fv(this.addr,e)}function Pb(r,e){const t=Ma(e,this.size,2);r.uniform2fv(this.addr,t)}function Lb(r,e){const t=Ma(e,this.size,3);r.uniform3fv(this.addr,t)}function Nb(r,e){const t=Ma(e,this.size,4);r.uniform4fv(this.addr,t)}function Ib(r,e){const t=Ma(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Db(r,e){const t=Ma(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ub(r,e){const t=Ma(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fb(r,e){r.uniform1iv(this.addr,e)}function Ob(r,e){r.uniform2iv(this.addr,e)}function kb(r,e){r.uniform3iv(this.addr,e)}function Bb(r,e){r.uniform4iv(this.addr,e)}function zb(r,e){r.uniform1uiv(this.addr,e)}function Vb(r,e){r.uniform2uiv(this.addr,e)}function Hb(r,e){r.uniform3uiv(this.addr,e)}function Gb(r,e){r.uniform4uiv(this.addr,e)}function Wb(r,e,t){const i=this.cache,a=e.length,o=Ku(t,a);fn(i,o)||(r.uniform1iv(this.addr,o),dn(i,o));let u;this.type===r.SAMPLER_2D_SHADOW?u=mh:u=Qv;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,o[f])}function Xb(r,e,t){const i=this.cache,a=e.length,o=Ku(t,a);fn(i,o)||(r.uniform1iv(this.addr,o),dn(i,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||t_,o[u])}function jb(r,e,t){const i=this.cache,a=e.length,o=Ku(t,a);fn(i,o)||(r.uniform1iv(this.addr,o),dn(i,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||n_,o[u])}function $b(r,e,t){const i=this.cache,a=e.length,o=Ku(t,a);fn(i,o)||(r.uniform1iv(this.addr,o),dn(i,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||e_,o[u])}function Yb(r){switch(r){case 5126:return Cb;case 35664:return Pb;case 35665:return Lb;case 35666:return Nb;case 35674:return Ib;case 35675:return Db;case 35676:return Ub;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return kb;case 35669:case 35673:return Bb;case 5125:return zb;case 36294:return Vb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return $b}}class qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rb(t.type)}}class Kb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yb(t.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const f=a[o];f.setValue(e,t[f.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function F0(r,e){r.seq.push(e),r.map[e.id]=e}function Jb(r,e,t){const i=r.name,a=i.length;for(vd.lastIndex=0;;){const o=vd.exec(i),u=vd.lastIndex;let f=o[1];const d=o[2]==="]",h=o[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===a){F0(t,h===void 0?new qb(f,r,e):new Kb(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new Zb(f),F0(t,v)),t=v}}}class Ru{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);Jb(f,d,this)}const a=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):o.push(u);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,u=t.length;o!==u;++o){const f=t[o],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function O0(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Qb=37297;let eA=0;function tA(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const k0=new ct;function nA(r){Mt._getMatrix(k0,Mt.workingColorSpace,r);const e=`mat3( ${k0.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Du:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function B0(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+tA(r.getShaderSource(e),f)}else return o}function iA(r,e){const t=nA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rA={[mv]:"Linear",[gv]:"Reinhard",[vv]:"Cineon",[_v]:"ACESFilmic",[yv]:"AgX",[Sv]:"Neutral",[xv]:"Custom"};function sA(r,e){const t=rA[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xu=new K;function aA(){Mt.getLuminanceCoefficients(xu);const r=xu.x.toFixed(4),e=xu.y.toFixed(4),t=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function lA(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uA(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(e,a),u=o.name;let f=1;o.type===r.FLOAT_MAT2&&(f=2),o.type===r.FLOAT_MAT3&&(f=3),o.type===r.FLOAT_MAT4&&(f=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function yo(r){return r!==""}function z0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(r){return r.replace(cA,dA)}const fA=new Map;function dA(r,e){let t=pt[e];if(t===void 0){const i=fA.get(e);if(i!==void 0)t=pt[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(r){return r.replace(hA,pA)}function pA(r,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function G0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const mA={[Eu]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function gA(r){return mA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[ms]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[Wu]:"ENVMAP_TYPE_CUBE_UV"};function _A(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[da]:"ENVMAP_MODE_REFRACTION"};function yA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SA={[Gu]:"ENVMAP_BLENDING_MULTIPLY",[QS]:"ENVMAP_BLENDING_MIX",[eM]:"ENVMAP_BLENDING_ADD"};function MA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wA(r,e,t,i){const a=r.getContext(),o=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=gA(t),h=_A(t),g=yA(t),v=MA(t),m=EA(t),x=oA(t),M=lA(o),b=a.createProgram();let y,S,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(yo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(yo).join(`
`),S.length>0&&(S+=`
`)):(y=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),S=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?sA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,iA("linearToOutputTexel",t.outputColorSpace),aA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),u=gh(u),u=z0(u,t),u=V0(u,t),f=gh(f),f=z0(f,t),f=V0(f,t),u=H0(u),f=H0(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Og?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const R=T+y+u,P=T+S+f,U=O0(a,a.VERTEX_SHADER,R),N=O0(a,a.FRAGMENT_SHADER,P);a.attachShader(b,U),a.attachShader(b,N),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function O(k){if(r.debug.checkShaderErrors){const Z=a.getProgramInfoLog(b)||"",ce=a.getShaderInfoLog(U)||"",fe=a.getShaderInfoLog(N)||"",B=Z.trim(),W=ce.trim(),G=fe.trim();let $=!0,te=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,b,U,N);else{const re=B0(a,U,"vertex"),F=B0(a,N,"fragment");it("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+re+`
`+F)}else B!==""?Qe("WebGLProgram: Program Info Log:",B):(W===""||G==="")&&(te=!1);te&&(k.diagnostics={runnable:$,programLog:B,vertexShader:{log:W,prefix:y},fragmentShader:{log:G,prefix:S}})}a.deleteShader(U),a.deleteShader(N),w=new Ru(a,b),I=uA(a,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(b,Qb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=N,this}let TA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AA(e),t.set(e,i)),i}}class AA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function RA(r){return r===gs||r===Pu||r===Lu}function CA(r,e,t,i,a,o){const u=new Dh,f=new bA,d=new Set,h=[],g=new Map,v=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function b(w,I,V,k,Z,ce){const fe=k.fog,B=Z.geometry,W=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,G=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||W,G),te=$&&$.mapping===Wu?$.image.height:null,re=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&Qe("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const F=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=F!==void 0?F.length:0;let be=0;B.morphAttributes.position!==void 0&&(be=1),B.morphAttributes.normal!==void 0&&(be=2),B.morphAttributes.color!==void 0&&(be=3);let Oe,De,oe,_e;if(re){const ot=Ui[re];Oe=ot.vertexShader,De=ot.fragmentShader}else Oe=w.vertexShader,De=w.fragmentShader,f.update(w),oe=f.getVertexShaderID(w),_e=f.getFragmentShaderID(w);const de=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),ze=Z.isInstancedMesh===!0,et=Z.isBatchedMesh===!0,kt=!!w.map,ft=!!w.matcap,bt=!!$,Dt=!!w.aoMap,dt=!!w.lightMap,Kt=!!w.bumpMap,Bt=!!w.normalMap,vn=!!w.displacementMap,X=!!w.emissiveMap,zt=!!w.metalnessMap,ht=!!w.roughnessMap,Pt=w.anisotropy>0,Ue=w.clearcoat>0,Gt=w.dispersion>0,L=w.iridescence>0,E=w.sheen>0,J=w.transmission>0,me=Pt&&!!w.anisotropyMap,ve=Ue&&!!w.clearcoatMap,Ee=Ue&&!!w.clearcoatNormalMap,Ie=Ue&&!!w.clearcoatRoughnessMap,he=L&&!!w.iridescenceMap,ge=L&&!!w.iridescenceThicknessMap,ke=E&&!!w.sheenColorMap,Ve=E&&!!w.sheenRoughnessMap,Re=!!w.specularMap,we=!!w.specularColorMap,rt=!!w.specularIntensityMap,at=J&&!!w.transmissionMap,mt=J&&!!w.thicknessMap,H=!!w.gradientMap,Ae=!!w.alphaMap,pe=w.alphaTest>0,Be=!!w.alphaHash,Pe=!!w.extensions;let xe=Oi;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(xe=r.toneMapping);const $e={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Oe,fragmentShader:De,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:et,batchingColor:et&&Z._colorsTexture!==null,instancing:ze,instancingColor:ze&&Z.instanceColor!==null,instancingMorph:ze&&Z.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:kt,matcap:ft,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:te,aoMap:Dt,lightMap:dt,bumpMap:Kt,normalMap:Bt,displacementMap:vn,emissiveMap:X,normalMapObjectSpace:Bt&&w.normalMapType===sM,normalMapTangentSpace:Bt&&w.normalMapType===Ao,packedNormalMap:Bt&&w.normalMapType===Ao&&RA(w.normalMap.format),metalnessMap:zt,roughnessMap:ht,anisotropy:Pt,anisotropyMap:me,clearcoat:Ue,clearcoatMap:ve,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ie,dispersion:Gt,iridescence:L,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:ke,sheenRoughnessMap:Ve,specularMap:Re,specularColorMap:we,specularIntensityMap:rt,transmission:J,transmissionMap:at,thicknessMap:mt,gradientMap:H,opaque:w.transparent===!1&&w.blending===ua&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:Be,combine:w.combine,mapUv:kt&&M(w.map.channel),aoMapUv:Dt&&M(w.aoMap.channel),lightMapUv:dt&&M(w.lightMap.channel),bumpMapUv:Kt&&M(w.bumpMap.channel),normalMapUv:Bt&&M(w.normalMap.channel),displacementMapUv:vn&&M(w.displacementMap.channel),emissiveMapUv:X&&M(w.emissiveMap.channel),metalnessMapUv:zt&&M(w.metalnessMap.channel),roughnessMapUv:ht&&M(w.roughnessMap.channel),anisotropyMapUv:me&&M(w.anisotropyMap.channel),clearcoatMapUv:ve&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&M(w.sheenRoughnessMap.channel),specularMapUv:Re&&M(w.specularMap.channel),specularColorMapUv:we&&M(w.specularColorMap.channel),specularIntensityMapUv:rt&&M(w.specularIntensityMap.channel),transmissionMapUv:at&&M(w.transmissionMap.channel),thicknessMapUv:mt&&M(w.thicknessMap.channel),alphaMapUv:Ae&&M(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Bt||Pt),vertexNormals:!!B.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!B.attributes.uv&&(kt||Ae),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||B.attributes.normal===void 0&&Bt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ne,skinning:Z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:be,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:kt&&w.map.isVideoTexture===!0&&Mt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:X&&w.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ar,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=d.has(1),$e.vertexUv2s=d.has(2),$e.vertexUv3s=d.has(3),d.clear(),$e}function y(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)I.push(V),I.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(S(I,w),T(I,w),I.push(r.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function S(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function T(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const I=x[w.type];let V;if(I){const k=Ui[I];V=bE.clone(k.uniforms)}else V=w.uniforms;return V}function P(w,I){let V=g.get(I);return V!==void 0?++V.usedTimes:(V=new wA(r,I,w,a),h.push(V),g.set(I,V)),V}function U(w){if(--w.usedTimes===0){const I=h.indexOf(w);h[I]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function N(w){f.remove(w)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:U,releaseShaderCache:N,programs:h,dispose:O}}function PA(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function i(u){r.delete(u)}function a(u,f,d){r.get(u)[f]=d}function o(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function LA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function W0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function X0(){const r=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function u(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function f(m,x,M,b,y,S){let T=r[e];return T===void 0?(T={id:m.id,object:m,geometry:x,material:M,materialVariant:u(m),groupOrder:b,renderOrder:m.renderOrder,z:y,group:S},r[e]=T):(T.id=m.id,T.object=m,T.geometry=x,T.material=M,T.materialVariant=u(m),T.groupOrder=b,T.renderOrder=m.renderOrder,T.z=y,T.group=S),e++,T}function d(m,x,M,b,y,S){const T=f(m,x,M,b,y,S);M.transmission>0?i.push(T):M.transparent===!0?a.push(T):t.push(T)}function h(m,x,M,b,y,S){const T=f(m,x,M,b,y,S);M.transmission>0?i.unshift(T):M.transparent===!0?a.unshift(T):t.unshift(T)}function g(m,x){t.length>1&&t.sort(m||LA),i.length>1&&i.sort(x||W0),a.length>1&&a.sort(x||W0)}function v(){for(let m=e,x=r.length;m<x;m++){const M=r[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:d,unshift:h,finish:v,sort:g}}function NA(){let r=new WeakMap;function e(i,a){const o=r.get(i);let u;return o===void 0?(u=new X0,r.set(i,[u])):a>=o.length?(u=new X0,o.push(u)):u=o[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function IA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new yt};break;case"SpotLight":t={position:new K,direction:new K,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function DA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let UA=0;function FA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OA(r){const e=new IA,t=DA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new K);const a=new K,o=new wt,u=new wt;function f(h){let g=0,v=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let x=0,M=0,b=0,y=0,S=0,T=0,R=0,P=0,U=0,N=0,O=0;h.sort(FA);for(let I=0,V=h.length;I<V;I++){const k=h[I],Z=k.color,ce=k.intensity,fe=k.distance;let B=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===gs?B=k.shadow.map.texture:B=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=Z.r*ce,v+=Z.g*ce,m+=Z.b*ce;else if(k.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(k.sh.coefficients[W],ce);O++}else if(k.isDirectionalLight){const W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,$=t.get(k);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.directionalShadow[x]=$,i.directionalShadowMap[x]=B,i.directionalShadowMatrix[x]=k.shadow.matrix,T++}i.directional[x]=W,x++}else if(k.isSpotLight){const W=e.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(Z).multiplyScalar(ce),W.distance=fe,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,i.spot[b]=W;const G=k.shadow;if(k.map&&(i.spotLightMap[U]=k.map,U++,G.updateMatrices(k),k.castShadow&&N++),i.spotLightMatrix[b]=G.matrix,k.castShadow){const $=t.get(k);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.spotShadow[b]=$,i.spotShadowMap[b]=B,P++}b++}else if(k.isRectAreaLight){const W=e.get(k);W.color.copy(Z).multiplyScalar(ce),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),i.rectArea[y]=W,y++}else if(k.isPointLight){const W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),W.distance=k.distance,W.decay=k.decay,k.castShadow){const G=k.shadow,$=t.get(k);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,i.pointShadow[M]=$,i.pointShadowMap[M]=B,i.pointShadowMatrix[M]=k.shadow.matrix,R++}i.point[M]=W,M++}else if(k.isHemisphereLight){const W=e.get(k);W.skyColor.copy(k.color).multiplyScalar(ce),W.groundColor.copy(k.groundColor).multiplyScalar(ce),i.hemi[S]=W,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==x||w.pointLength!==M||w.spotLength!==b||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==T||w.numPointShadows!==R||w.numSpotShadows!==P||w.numSpotMaps!==U||w.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=P+U-N,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,w.directionalLength=x,w.pointLength=M,w.spotLength=b,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=T,w.numPointShadows=R,w.numSpotShadows=P,w.numSpotMaps=U,w.numLightProbes=O,i.version=UA++)}function d(h,g){let v=0,m=0,x=0,M=0,b=0;const y=g.matrixWorldInverse;for(let S=0,T=h.length;S<T;S++){const R=h[S];if(R.isDirectionalLight){const P=i.directional[v];P.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),v++}else if(R.isSpotLight){const P=i.spot[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),x++}else if(R.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),u.identity(),o.copy(R.matrixWorld),o.premultiply(y),u.extractRotation(o),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),m++}else if(R.isHemisphereLight){const P=i.hemi[b];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),b++}}}return{setup:f,setupView:d,state:i}}function j0(r){const e=new OA(r),t=[],i=[],a=[];function o(m){v.camera=m,t.length=0,i.length=0,a.length=0}function u(m){t.push(m)}function f(m){i.push(m)}function d(m){a.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function kA(r){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let f;return u===void 0?(f=new j0(r),e.set(a,[f])):o>=u.length?(f=new j0(r),u.push(f)):f=u[o],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
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
}`,VA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],HA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],$0=new wt,go=new K,_d=new K;function GA(r,e,t){let i=new Uh;const a=new St,o=new St,u=new Ot,f=new PE,d=new LE,h={},g=t.maxTextureSize,v={[Gr]:Wn,[Wn]:Gr,[ar]:ar},m=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new Qn;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ti(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let S=this.type;this.render=function(N,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===DS&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Eu);const I=r.getRenderTarget(),V=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ur),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ce=S!==this.type;ce&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(B=>B.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,B=N.length;fe<B;fe++){const W=N[fe],G=W.shadow;if(G===void 0){Qe("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const $=G.getFrameExtents();a.multiply($),o.copy(G.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(o.x=Math.floor(g/$.x),a.x=o.x*$.x,G.mapSize.x=o.x),a.y>g&&(o.y=Math.floor(g/$.y),a.y=o.y*$.y,G.mapSize.y=o.y));const te=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=te,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===vo){if(W.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ki(a.x,a.y,{format:gs,type:dr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new pa(a.x,a.y,Ei),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=hr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Sn,G.map.depthTexture.magFilter=Sn}else W.isPointLight?(G.map=new Jv(a.x),G.map.depthTexture=new aE(a.x,zi)):(G.map=new ki(a.x,a.y),G.map.depthTexture=new pa(a.x,a.y,zi)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=hr,this.type===Eu?(G.map.depthTexture.compareFunction=te?Lh:Ph,G.map.depthTexture.minFilter=Rn,G.map.depthTexture.magFilter=Rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Sn,G.map.depthTexture.magFilter=Sn);G.camera.updateProjectionMatrix()}const re=G.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<re;F++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,F),r.clear();else{F===0&&(r.setRenderTarget(G.map),r.clear());const Q=G.getViewport(F);u.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),Z.viewport(u)}if(W.isPointLight){const Q=G.camera,be=G.matrix,Oe=W.distance||Q.far;Oe!==Q.far&&(Q.far=Oe,Q.updateProjectionMatrix()),go.setFromMatrixPosition(W.matrixWorld),Q.position.copy(go),_d.copy(Q.position),_d.add(VA[F]),Q.up.copy(HA[F]),Q.lookAt(_d),Q.updateMatrixWorld(),be.makeTranslation(-go.x,-go.y,-go.z),$0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix($0,Q.coordinateSystem,Q.reversedDepth)}else G.updateMatrices(W);i=G.getFrustum(),P(O,w,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===vo&&T(G,w),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(I,V,k)};function T(N,O){const w=e.update(b);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ki(a.x,a.y,{format:gs,type:dr})),m.uniforms.shadow_pass.value=N.map.depthTexture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(O,null,w,m,b,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(O,null,w,x,b,null)}function R(N,O,w,I){let V=null;const k=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)V=k;else if(V=w.isPointLight===!0?d:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=V.uuid,ce=O.uuid;let fe=h[Z];fe===void 0&&(fe={},h[Z]=fe);let B=fe[ce];B===void 0&&(B=V.clone(),fe[ce]=B,O.addEventListener("dispose",U)),V=B}if(V.visible=O.visible,V.wireframe=O.wireframe,I===vo?V.side=O.shadowSide!==null?O.shadowSide:O.side:V.side=O.shadowSide!==null?O.shadowSide:v[O.side],V.alphaMap=O.alphaMap,V.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,V.map=O.map,V.clipShadows=O.clipShadows,V.clippingPlanes=O.clippingPlanes,V.clipIntersection=O.clipIntersection,V.displacementMap=O.displacementMap,V.displacementScale=O.displacementScale,V.displacementBias=O.displacementBias,V.wireframeLinewidth=O.wireframeLinewidth,V.linewidth=O.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=r.properties.get(V);Z.light=w}return V}function P(N,O,w,I,V){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===vo)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),fe=N.material;if(Array.isArray(fe)){const B=ce.groups;for(let W=0,G=B.length;W<G;W++){const $=B[W],te=fe[$.materialIndex];if(te&&te.visible){const re=R(N,te,I,V);N.onBeforeShadow(r,N,O,w,ce,re,$),r.renderBufferDirect(w,null,ce,re,N,$),N.onAfterShadow(r,N,O,w,ce,re,$)}}}else if(fe.visible){const B=R(N,fe,I,V);N.onBeforeShadow(r,N,O,w,ce,B,null),r.renderBufferDirect(w,null,ce,B,N,null),N.onAfterShadow(r,N,O,w,ce,B,null)}}const Z=N.children;for(let ce=0,fe=Z.length;ce<fe;ce++)P(Z[ce],O,w,I,V)}function U(N){N.target.removeEventListener("dispose",U);for(const w in h){const I=h[w],V=N.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function WA(r,e){function t(){let H=!1;const Ae=new Ot;let pe=null;const Be=new Ot(0,0,0,0);return{setMask:function(Pe){pe!==Pe&&!H&&(r.colorMask(Pe,Pe,Pe,Pe),pe=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,xe,$e,ot,Ft){Ft===!0&&(Pe*=ot,xe*=ot,$e*=ot),Ae.set(Pe,xe,$e,ot),Be.equals(Ae)===!1&&(r.clearColor(Pe,xe,$e,ot),Be.copy(Ae))},reset:function(){H=!1,pe=null,Be.set(-1,0,0,0)}}}function i(){let H=!1,Ae=!1,pe=null,Be=null,Pe=null;return{setReversed:function(xe){if(Ae!==xe){const $e=e.get("EXT_clip_control");xe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ae=xe;const ot=Pe;Pe=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(xe){xe?de(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(xe){pe!==xe&&!H&&(r.depthMask(xe),pe=xe)},setFunc:function(xe){if(Ae&&(xe=gM[xe]),Be!==xe){switch(xe){case wd:r.depthFunc(r.NEVER);break;case Td:r.depthFunc(r.ALWAYS);break;case bd:r.depthFunc(r.LESS);break;case fa:r.depthFunc(r.LEQUAL);break;case Ad:r.depthFunc(r.EQUAL);break;case Rd:r.depthFunc(r.GEQUAL);break;case Cd:r.depthFunc(r.GREATER);break;case Pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=xe}},setLocked:function(xe){H=xe},setClear:function(xe){Pe!==xe&&(Pe=xe,Ae&&(xe=1-xe),r.clearDepth(xe))},reset:function(){H=!1,pe=null,Be=null,Pe=null,Ae=!1}}}function a(){let H=!1,Ae=null,pe=null,Be=null,Pe=null,xe=null,$e=null,ot=null,Ft=null;return{setTest:function(At){H||(At?de(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(At){Ae!==At&&!H&&(r.stencilMask(At),Ae=At)},setFunc:function(At,Pn,ei){(pe!==At||Be!==Pn||Pe!==ei)&&(r.stencilFunc(At,Pn,ei),pe=At,Be=Pn,Pe=ei)},setOp:function(At,Pn,ei){(xe!==At||$e!==Pn||ot!==ei)&&(r.stencilOp(At,Pn,ei),xe=At,$e=Pn,ot=ei)},setLocked:function(At){H=At},setClear:function(At){Ft!==At&&(r.clearStencil(At),Ft=At)},reset:function(){H=!1,Ae=null,pe=null,Be=null,Pe=null,xe=null,$e=null,ot=null,Ft=null}}}const o=new t,u=new i,f=new a,d=new WeakMap,h=new WeakMap;let g={},v={},m={},x=new WeakMap,M=[],b=null,y=!1,S=null,T=null,R=null,P=null,U=null,N=null,O=null,w=new yt(0,0,0),I=0,V=!1,k=null,Z=null,ce=null,fe=null,B=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),G=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),G=$>=2);let re=null,F={};const Q=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Oe=new Ot().fromArray(Q),De=new Ot().fromArray(be);function oe(H,Ae,pe,Be){const Pe=new Uint8Array(4),xe=r.createTexture();r.bindTexture(H,xe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<pe;$e++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Ae+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return xe}const _e={};_e[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(r.DEPTH_TEST),u.setFunc(fa),Kt(!1),Bt(bg),de(r.CULL_FACE),Dt(ur);function de(H){g[H]!==!0&&(r.enable(H),g[H]=!0)}function Ne(H){g[H]!==!1&&(r.disable(H),g[H]=!1)}function ze(H,Ae){return m[H]!==Ae?(r.bindFramebuffer(H,Ae),m[H]=Ae,H===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ae),H===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function et(H,Ae){let pe=M,Be=!1;if(H){pe=x.get(Ae),pe===void 0&&(pe=[],x.set(Ae,pe));const Pe=H.textures;if(pe.length!==Pe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,$e=Pe.length;xe<$e;xe++)pe[xe]=r.COLOR_ATTACHMENT0+xe;pe.length=Pe.length,Be=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Be=!0);Be&&r.drawBuffers(pe)}function kt(H){return b!==H?(r.useProgram(H),b=H,!0):!1}const ft={[fs]:r.FUNC_ADD,[FS]:r.FUNC_SUBTRACT,[OS]:r.FUNC_REVERSE_SUBTRACT};ft[kS]=r.MIN,ft[BS]=r.MAX;const bt={[zS]:r.ZERO,[VS]:r.ONE,[HS]:r.SRC_COLOR,[Md]:r.SRC_ALPHA,[YS]:r.SRC_ALPHA_SATURATE,[jS]:r.DST_COLOR,[WS]:r.DST_ALPHA,[GS]:r.ONE_MINUS_SRC_COLOR,[Ed]:r.ONE_MINUS_SRC_ALPHA,[$S]:r.ONE_MINUS_DST_COLOR,[XS]:r.ONE_MINUS_DST_ALPHA,[qS]:r.CONSTANT_COLOR,[KS]:r.ONE_MINUS_CONSTANT_COLOR,[ZS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function Dt(H,Ae,pe,Be,Pe,xe,$e,ot,Ft,At){if(H===ur){y===!0&&(Ne(r.BLEND),y=!1);return}if(y===!1&&(de(r.BLEND),y=!0),H!==US){if(H!==S||At!==V){if((T!==fs||U!==fs)&&(r.blendEquation(r.FUNC_ADD),T=fs,U=fs),At)switch(H){case ua:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ag:r.blendFunc(r.ONE,r.ONE);break;case Rg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:it("WebGLState: Invalid blending: ",H);break}else switch(H){case ua:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ag:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rg:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cg:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",H);break}R=null,P=null,N=null,O=null,w.set(0,0,0),I=0,S=H,V=At}return}Pe=Pe||Ae,xe=xe||pe,$e=$e||Be,(Ae!==T||Pe!==U)&&(r.blendEquationSeparate(ft[Ae],ft[Pe]),T=Ae,U=Pe),(pe!==R||Be!==P||xe!==N||$e!==O)&&(r.blendFuncSeparate(bt[pe],bt[Be],bt[xe],bt[$e]),R=pe,P=Be,N=xe,O=$e),(ot.equals(w)===!1||Ft!==I)&&(r.blendColor(ot.r,ot.g,ot.b,Ft),w.copy(ot),I=Ft),S=H,V=!1}function dt(H,Ae){H.side===ar?Ne(r.CULL_FACE):de(r.CULL_FACE);let pe=H.side===Wn;Ae&&(pe=!pe),Kt(pe),H.blending===ua&&H.transparent===!1?Dt(ur):Dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const Be=H.stencilWrite;f.setTest(Be),Be&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),X(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(H){k!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),k=H)}function Bt(H){H!==NS?(de(r.CULL_FACE),H!==Z&&(H===bg?r.cullFace(r.BACK):H===IS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),Z=H}function vn(H){H!==ce&&(G&&r.lineWidth(H),ce=H)}function X(H,Ae,pe){H?(de(r.POLYGON_OFFSET_FILL),(fe!==Ae||B!==pe)&&(fe=Ae,B=pe,u.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,pe))):Ne(r.POLYGON_OFFSET_FILL)}function zt(H){H?de(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function ht(H){H===void 0&&(H=r.TEXTURE0+W-1),re!==H&&(r.activeTexture(H),re=H)}function Pt(H,Ae,pe){pe===void 0&&(re===null?pe=r.TEXTURE0+W-1:pe=re);let Be=F[pe];Be===void 0&&(Be={type:void 0,texture:void 0},F[pe]=Be),(Be.type!==H||Be.texture!==Ae)&&(re!==pe&&(r.activeTexture(pe),re=pe),r.bindTexture(H,Ae||_e[H]),Be.type=H,Be.texture=Ae)}function Ue(){const H=F[re];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Gt(){try{r.compressedTexImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function E(){try{r.texSubImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function J(){try{r.texSubImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function me(){try{r.compressedTexSubImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function Ee(){try{r.texStorage2D(...arguments)}catch(H){it("WebGLState:",H)}}function Ie(){try{r.texStorage3D(...arguments)}catch(H){it("WebGLState:",H)}}function he(){try{r.texImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function ge(){try{r.texImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function ke(H){return v[H]!==void 0?v[H]:r.getParameter(H)}function Ve(H,Ae){v[H]!==Ae&&(r.pixelStorei(H,Ae),v[H]=Ae)}function Re(H){Oe.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function we(H){De.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),De.copy(H))}function rt(H,Ae){let pe=h.get(Ae);pe===void 0&&(pe=new WeakMap,h.set(Ae,pe));let Be=pe.get(H);Be===void 0&&(Be=r.getUniformBlockIndex(Ae,H.name),pe.set(H,Be))}function at(H,Ae){const Be=h.get(Ae).get(H);d.get(Ae)!==Be&&(r.uniformBlockBinding(Ae,Be,H.__bindingPointIndex),d.set(Ae,Be))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},v={},re=null,F={},m={},x=new WeakMap,M=[],b=null,y=!1,S=null,T=null,R=null,P=null,U=null,N=null,O=null,w=new yt(0,0,0),I=0,V=!1,k=null,Z=null,ce=null,fe=null,B=null,Oe.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:de,disable:Ne,bindFramebuffer:ze,drawBuffers:et,useProgram:kt,setBlending:Dt,setMaterial:dt,setFlipSided:Kt,setCullFace:Bt,setLineWidth:vn,setPolygonOffset:X,setScissorTest:zt,activeTexture:ht,bindTexture:Pt,unbindTexture:Ue,compressedTexImage2D:Gt,compressedTexImage3D:L,texImage2D:he,texImage3D:ge,pixelStorei:Ve,getParameter:ke,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:Ee,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:me,compressedTexSubImage3D:ve,scissor:Re,viewport:we,reset:mt}}function XA(r,e,t,i,a,o,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,g=new WeakMap,v=new Set;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Co("canvas")}function y(L,E,J){let me=1;const ve=Gt(L);if((ve.width>J||ve.height>J)&&(me=J/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ee=Math.floor(me*ve.width),Ie=Math.floor(me*ve.height);m===void 0&&(m=b(Ee,Ie));const he=E?b(Ee,Ie):m;return he.width=Ee,he.height=Ie,he.getContext("2d").drawImage(L,0,0,Ee,Ie),Qe("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ee+"x"+Ie+")."),he}else return"data"in L&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function T(L){r.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(L,E,J,me,ve,Ee=!1){if(L!==null){if(r[L]!==void 0)return r[L];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ie;me&&(Ie=e.get("EXT_texture_norm16"),Ie||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===r.RED&&(J===r.FLOAT&&(he=r.R32F),J===r.HALF_FLOAT&&(he=r.R16F),J===r.UNSIGNED_BYTE&&(he=r.R8),J===r.UNSIGNED_SHORT&&Ie&&(he=Ie.R16_EXT),J===r.SHORT&&Ie&&(he=Ie.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.R8UI),J===r.UNSIGNED_SHORT&&(he=r.R16UI),J===r.UNSIGNED_INT&&(he=r.R32UI),J===r.BYTE&&(he=r.R8I),J===r.SHORT&&(he=r.R16I),J===r.INT&&(he=r.R32I)),E===r.RG&&(J===r.FLOAT&&(he=r.RG32F),J===r.HALF_FLOAT&&(he=r.RG16F),J===r.UNSIGNED_BYTE&&(he=r.RG8),J===r.UNSIGNED_SHORT&&Ie&&(he=Ie.RG16_EXT),J===r.SHORT&&Ie&&(he=Ie.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RG8UI),J===r.UNSIGNED_SHORT&&(he=r.RG16UI),J===r.UNSIGNED_INT&&(he=r.RG32UI),J===r.BYTE&&(he=r.RG8I),J===r.SHORT&&(he=r.RG16I),J===r.INT&&(he=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGB8UI),J===r.UNSIGNED_SHORT&&(he=r.RGB16UI),J===r.UNSIGNED_INT&&(he=r.RGB32UI),J===r.BYTE&&(he=r.RGB8I),J===r.SHORT&&(he=r.RGB16I),J===r.INT&&(he=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),J===r.UNSIGNED_INT&&(he=r.RGBA32UI),J===r.BYTE&&(he=r.RGBA8I),J===r.SHORT&&(he=r.RGBA16I),J===r.INT&&(he=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&Ie&&(he=Ie.RGB16_EXT),J===r.SHORT&&Ie&&(he=Ie.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),E===r.RGBA){const ge=Ee?Du:Mt.getTransfer(ve);J===r.FLOAT&&(he=r.RGBA32F),J===r.HALF_FLOAT&&(he=r.RGBA16F),J===r.UNSIGNED_BYTE&&(he=ge===It?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Ie&&(he=Ie.RGBA16_EXT),J===r.SHORT&&Ie&&(he=Ie.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function U(L,E){let J;return L?E===null||E===zi||E===bo?J=r.DEPTH24_STENCIL8:E===Ei?J=r.DEPTH32F_STENCIL8:E===To&&(J=r.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===bo?J=r.DEPTH_COMPONENT24:E===Ei?J=r.DEPTH_COMPONENT32F:E===To&&(J=r.DEPTH_COMPONENT16),J}function N(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function O(L){const E=L.target;E.removeEventListener("dispose",O),I(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),k(E)}function I(L){const E=i.get(L);if(E.__webglInit===void 0)return;const J=L.source,me=x.get(J);if(me){const ve=me[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&V(L),Object.keys(me).length===0&&x.delete(J)}i.remove(L)}function V(L){const E=i.get(L);r.deleteTexture(E.__webglTexture);const J=L.source,me=x.get(J);delete me[E.__cacheKey],u.memory.textures--}function k(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let ve=0;ve<E.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(E.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)r.deleteFramebuffer(E.__webglFramebuffer[me]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=L.textures;for(let me=0,ve=J.length;me<ve;me++){const Ee=i.get(J[me]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),u.memory.textures--),i.remove(J[me])}i.remove(L)}let Z=0;function ce(){Z=0}function fe(){return Z}function B(L){Z=L}function W(){const L=Z;return L>=a.maxTextures&&Qe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),Z+=1,L}function G(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const J=i.get(L);if(L.isVideoTexture&&Pt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const me=L.image;if(me===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function te(L,E){const J=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ne(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function re(L,E){const J=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ne(J,L,E);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function F(L,E){const J=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){ze(J,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const Q={[Ld]:r.REPEAT,[or]:r.CLAMP_TO_EDGE,[Nd]:r.MIRRORED_REPEAT},be={[Sn]:r.NEAREST,[nM]:r.NEAREST_MIPMAP_NEAREST,[Wl]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Bf]:r.LINEAR_MIPMAP_NEAREST,[hs]:r.LINEAR_MIPMAP_LINEAR},Oe={[aM]:r.NEVER,[fM]:r.ALWAYS,[oM]:r.LESS,[Ph]:r.LEQUAL,[lM]:r.EQUAL,[Lh]:r.GEQUAL,[uM]:r.GREATER,[cM]:r.NOTEQUAL};function De(L,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Bf||E.magFilter===Wl||E.magFilter===hs||E.minFilter===Rn||E.minFilter===Bf||E.minFilter===Wl||E.minFilter===hs)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,be[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,be[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Wl&&E.minFilter!==hs||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function oe(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",O));const me=E.source;let ve=x.get(me);ve===void 0&&(ve={},x.set(me,ve));const Ee=G(E);if(Ee!==L.__cacheKey){ve[Ee]===void 0&&(ve[Ee]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ve[Ee].usedTimes++;const Ie=ve[L.__cacheKey];Ie!==void 0&&(ve[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&V(E)),L.__cacheKey=Ee,L.__webglTexture=ve[Ee].texture}return J}function _e(L,E,J){return Math.floor(Math.floor(L/J)/E)}function de(L,E,J,me){const Ee=L.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,me,E.data);else{Ee.sort((Ve,Re)=>Ve.start-Re.start);let Ie=0;for(let Ve=1;Ve<Ee.length;Ve++){const Re=Ee[Ie],we=Ee[Ve],rt=Re.start+Re.count,at=_e(we.start,E.width,4),mt=_e(Re.start,E.width,4);we.start<=rt+1&&at===mt&&_e(we.start+we.count-1,E.width,4)===at?Re.count=Math.max(Re.count,we.start+we.count-Re.start):(++Ie,Ee[Ie]=we)}Ee.length=Ie+1;const he=t.getParameter(r.UNPACK_ROW_LENGTH),ge=t.getParameter(r.UNPACK_SKIP_PIXELS),ke=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ve=0,Re=Ee.length;Ve<Re;Ve++){const we=Ee[Ve],rt=Math.floor(we.start/4),at=Math.ceil(we.count/4),mt=rt%E.width,H=Math.floor(rt/E.width),Ae=at,pe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),t.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,mt,H,Ae,pe,J,me,E.data)}L.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,he),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,ke)}}function Ne(L,E,J){let me=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=r.TEXTURE_3D);const ve=oe(L,E),Ee=E.source;t.bindTexture(me,L.__webglTexture,r.TEXTURE0+J);const Ie=i.get(Ee);if(Ee.version!==Ie.__version||ve===!0){if(t.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=Mt.getPrimaries(Mt.workingColorSpace),Be=E.colorSpace===Vr?null:Mt.getPrimaries(E.colorSpace),Pe=E.colorSpace===Vr||pe===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=y(E.image,!1,a.maxTextureSize);ge=Ue(E,ge);const ke=o.convert(E.format,E.colorSpace),Ve=o.convert(E.type);let Re=P(E.internalFormat,ke,Ve,E.normalized,E.colorSpace,E.isVideoTexture);De(me,E);let we;const rt=E.mipmaps,at=E.isVideoTexture!==!0,mt=Ie.__version===void 0||ve===!0,H=Ee.dataReady,Ae=N(E,ge);if(E.isDepthTexture)Re=U(E.format===ps,E.type),mt&&(at?t.texStorage2D(r.TEXTURE_2D,1,Re,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,Re,ge.width,ge.height,0,ke,Ve,null));else if(E.isDataTexture)if(rt.length>0){at&&mt&&t.texStorage2D(r.TEXTURE_2D,Ae,Re,rt[0].width,rt[0].height);for(let pe=0,Be=rt.length;pe<Be;pe++)we=rt[pe],at?H&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,we.width,we.height,ke,Ve,we.data):t.texImage2D(r.TEXTURE_2D,pe,Re,we.width,we.height,0,ke,Ve,we.data);E.generateMipmaps=!1}else at?(mt&&t.texStorage2D(r.TEXTURE_2D,Ae,Re,ge.width,ge.height),H&&de(E,ge,ke,Ve)):t.texImage2D(r.TEXTURE_2D,0,Re,ge.width,ge.height,0,ke,Ve,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&mt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Re,rt[0].width,rt[0].height,ge.depth);for(let pe=0,Be=rt.length;pe<Be;pe++)if(we=rt[pe],E.format!==ui)if(ke!==null)if(at){if(H)if(E.layerUpdates.size>0){const Pe=w0(we.width,we.height,E.format,E.type);for(const xe of E.layerUpdates){const $e=we.data.subarray(xe*Pe/we.data.BYTES_PER_ELEMENT,(xe+1)*Pe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,xe,we.width,we.height,1,ke,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,ge.depth,ke,we.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Re,we.width,we.height,ge.depth,0,we.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,ge.depth,ke,Ve,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,Re,we.width,we.height,ge.depth,0,ke,Ve,we.data)}else{at&&mt&&t.texStorage2D(r.TEXTURE_2D,Ae,Re,rt[0].width,rt[0].height);for(let pe=0,Be=rt.length;pe<Be;pe++)we=rt[pe],E.format!==ui?ke!==null?at?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,we.width,we.height,ke,we.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,Re,we.width,we.height,0,we.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,we.width,we.height,ke,Ve,we.data):t.texImage2D(r.TEXTURE_2D,pe,Re,we.width,we.height,0,ke,Ve,we.data)}else if(E.isDataArrayTexture)if(at){if(mt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Re,ge.width,ge.height,ge.depth),H)if(E.layerUpdates.size>0){const pe=w0(ge.width,ge.height,E.format,E.type);for(const Be of E.layerUpdates){const Pe=ge.data.subarray(Be*pe/ge.data.BYTES_PER_ELEMENT,(Be+1)*pe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Be,ge.width,ge.height,1,ke,Ve,Pe)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ke,Ve,ge.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,ge.width,ge.height,ge.depth,0,ke,Ve,ge.data);else if(E.isData3DTexture)at?(mt&&t.texStorage3D(r.TEXTURE_3D,Ae,Re,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ke,Ve,ge.data)):t.texImage3D(r.TEXTURE_3D,0,Re,ge.width,ge.height,ge.depth,0,ke,Ve,ge.data);else if(E.isFramebufferTexture){if(mt)if(at)t.texStorage2D(r.TEXTURE_2D,Ae,Re,ge.width,ge.height);else{let pe=ge.width,Be=ge.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,Re,pe,Be,0,ke,Ve,null),pe>>=1,Be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ge.parentNode!==pe){pe.appendChild(ge),v.add(E),pe.onpaint=ot=>{const Ft=ot.changedElements;for(const At of v)Ft.includes(At.image)&&(At.needsUpdate=!0)},pe.requestPaint();return}const Be=0,Pe=r.RGBA,xe=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Be,Pe,xe,$e,ge),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(rt.length>0){if(at&&mt){const pe=Gt(rt[0]);t.texStorage2D(r.TEXTURE_2D,Ae,Re,pe.width,pe.height)}for(let pe=0,Be=rt.length;pe<Be;pe++)we=rt[pe],at?H&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ke,Ve,we):t.texImage2D(r.TEXTURE_2D,pe,Re,ke,Ve,we);E.generateMipmaps=!1}else if(at){if(mt){const pe=Gt(ge);t.texStorage2D(r.TEXTURE_2D,Ae,Re,pe.width,pe.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ve,ge)}else t.texImage2D(r.TEXTURE_2D,0,Re,ke,Ve,ge);S(E)&&T(me),Ie.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ze(L,E,J){if(E.image.length!==6)return;const me=oe(L,E),ve=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+J);const Ee=i.get(ve);if(ve.version!==Ee.__version||me===!0){t.activeTexture(r.TEXTURE0+J);const Ie=Mt.getPrimaries(Mt.workingColorSpace),he=E.colorSpace===Vr?null:Mt.getPrimaries(E.colorSpace),ge=E.colorSpace===Vr||Ie===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let xe=0;xe<6;xe++)!ke&&!Ve?Re[xe]=y(E.image[xe],!0,a.maxCubemapSize):Re[xe]=Ve?E.image[xe].image:E.image[xe],Re[xe]=Ue(E,Re[xe]);const we=Re[0],rt=o.convert(E.format,E.colorSpace),at=o.convert(E.type),mt=P(E.internalFormat,rt,at,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Ae=Ee.__version===void 0||me===!0,pe=ve.dataReady;let Be=N(E,we);De(r.TEXTURE_CUBE_MAP,E);let Pe;if(ke){H&&Ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,mt,we.width,we.height);for(let xe=0;xe<6;xe++){Pe=Re[xe].mipmaps;for(let $e=0;$e<Pe.length;$e++){const ot=Pe[$e];E.format!==ui?rt!==null?H?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,ot.width,ot.height,rt,ot.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,mt,ot.width,ot.height,0,ot.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,ot.width,ot.height,rt,at,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,mt,ot.width,ot.height,0,rt,at,ot.data)}}}else{if(Pe=E.mipmaps,H&&Ae){Pe.length>0&&Be++;const xe=Gt(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ve){H?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Re[xe].width,Re[xe].height,rt,at,Re[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Re[xe].width,Re[xe].height,0,rt,at,Re[xe].data);for(let $e=0;$e<Pe.length;$e++){const Ft=Pe[$e].image[xe].image;H?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,Ft.width,Ft.height,rt,at,Ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,mt,Ft.width,Ft.height,0,rt,at,Ft.data)}}else{H?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,rt,at,Re[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,rt,at,Re[xe]);for(let $e=0;$e<Pe.length;$e++){const ot=Pe[$e];H?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,rt,at,ot.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,mt,rt,at,ot.image[xe])}}}S(E)&&T(r.TEXTURE_CUBE_MAP),Ee.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function et(L,E,J,me,ve,Ee){const Ie=o.convert(J.format,J.colorSpace),he=o.convert(J.type),ge=P(J.internalFormat,Ie,he,J.normalized,J.colorSpace),ke=i.get(E),Ve=i.get(J);if(Ve.__renderTarget=E,!ke.__hasExternalTextures){const Re=Math.max(1,E.width>>Ee),we=Math.max(1,E.height>>Ee);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,Ee,ge,Re,we,E.depth,0,Ie,he,null):t.texImage2D(ve,Ee,ge,Re,we,0,Ie,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ht(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Ve.__webglTexture,0,zt(E)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Ve.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(L,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const me=E.depthTexture,ve=me&&me.isDepthTexture?me.type:null,Ee=U(E.stencilBuffer,ve),Ie=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(E),Ee,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(E),Ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,L)}else{const me=E.textures;for(let ve=0;ve<me.length;ve++){const Ee=me[ve],Ie=o.convert(Ee.format,Ee.colorSpace),he=o.convert(Ee.type),ge=P(Ee.internalFormat,Ie,he,Ee.normalized,Ee.colorSpace);ht(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(E),ge,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(E),ge,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ge,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ft(L,E,J){const me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=i.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),De(r.TEXTURE_CUBE_MAP,E.depthTexture);const ke=o.convert(E.depthTexture.format),Ve=o.convert(E.depthTexture.type);let Re;E.depthTexture.format===hr?Re=r.DEPTH_COMPONENT24:E.depthTexture.format===ps&&(Re=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Re,E.width,E.height,0,ke,Ve,null)}}else $(E.depthTexture,0);const Ee=ve.__webglTexture,Ie=zt(E),he=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ge=E.depthTexture.format===ps?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===hr)ht(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,he,Ee,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,ge,he,Ee,0);else if(E.depthTexture.format===ps)ht(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,he,Ee,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,ge,he,Ee,0);else throw new Error("Unknown depthTexture format")}function bt(L){const E=i.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=me}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let me=0;me<6;me++)ft(E.__webglFramebuffer[me],L,me);else{const me=L.texture.mipmaps;me&&me.length>0?ft(E.__webglFramebuffer[0],L,0):ft(E.__webglFramebuffer,L,0)}else if(J){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=r.createRenderbuffer(),kt(E.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ee)}}else{const me=L.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),kt(E.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(L,E,J){const me=i.get(L);E!==void 0&&et(me.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&bt(L)}function dt(L){const E=L.texture,J=i.get(L),me=i.get(E);L.addEventListener("dispose",w);const ve=L.textures,Ee=L.isWebGLCubeRenderTarget===!0,Ie=ve.length>1;if(Ie||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=E.version,u.memory.textures++),Ee){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let ge=0;ge<E.mipmaps.length;ge++)J.__webglFramebuffer[he][ge]=r.createFramebuffer()}else J.__webglFramebuffer[he]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[he]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let he=0,ge=ve.length;he<ge;he++){const ke=i.get(ve[he]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&ht(L)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<ve.length;he++){const ge=ve[he];J.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const ke=o.convert(ge.format,ge.colorSpace),Ve=o.convert(ge.type),Re=P(ge.internalFormat,ke,Ve,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),we=zt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Re,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,J.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),De(r.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)et(J.__webglFramebuffer[he][ge],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else et(J.__webglFramebuffer[he],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(E)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let he=0,ge=ve.length;he<ge;he++){const ke=ve[he],Ve=i.get(ke);let Re=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ve.__webglTexture),De(Re,ke),et(J.__webglFramebuffer,L,ke,r.COLOR_ATTACHMENT0+he,Re,0),S(ke)&&T(Re)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,me.__webglTexture),De(he,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)et(J.__webglFramebuffer[ge],L,E,r.COLOR_ATTACHMENT0,he,ge);else et(J.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,he,0);S(E)&&T(he),t.unbindTexture()}L.depthBuffer&&bt(L)}function Kt(L){const E=L.textures;for(let J=0,me=E.length;J<me;J++){const ve=E[J];if(S(ve)){const Ee=R(L),Ie=i.get(ve).__webglTexture;t.bindTexture(Ee,Ie),T(Ee),t.unbindTexture()}}}const Bt=[],vn=[];function X(L){if(L.samples>0){if(ht(L)===!1){const E=L.textures,J=L.width,me=L.height;let ve=r.COLOR_BUFFER_BIT;const Ee=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=i.get(L),he=E.length>1;if(he)for(let ke=0;ke<E.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const Ve=i.get(E[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,J,me,0,0,J,me,ve,r.NEAREST),d===!0&&(Bt.length=0,vn.length=0,Bt.push(r.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Bt.push(Ee),vn.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,vn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let ke=0;ke<E.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const Ve=i.get(E[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function zt(L){return Math.min(a.maxSamples,L.samples)}function ht(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(L){const E=u.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Ue(L,E){const J=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Iu&&J!==Vr&&(Mt.getTransfer(J)===It?(me!==ui||ve!==Zn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",J)),E}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=F,this.rebindTextures=Dt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jA(r,e){function t(i,a=Vr){let o;const u=Mt.getTransfer(a);if(i===Zn)return r.UNSIGNED_BYTE;if(i===Th)return r.UNSIGNED_SHORT_4_4_4_4;if(i===bh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===bv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ev)return r.BYTE;if(i===wv)return r.SHORT;if(i===To)return r.UNSIGNED_SHORT;if(i===wh)return r.INT;if(i===zi)return r.UNSIGNED_INT;if(i===Ei)return r.FLOAT;if(i===dr)return r.HALF_FLOAT;if(i===Av)return r.ALPHA;if(i===Rv)return r.RGB;if(i===ui)return r.RGBA;if(i===hr)return r.DEPTH_COMPONENT;if(i===ps)return r.DEPTH_STENCIL;if(i===Cv)return r.RED;if(i===Ah)return r.RED_INTEGER;if(i===gs)return r.RG;if(i===Rh)return r.RG_INTEGER;if(i===Ch)return r.RGBA_INTEGER;if(i===wu||i===Tu||i===bu||i===Au)if(u===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===wu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===wu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Au)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Dd||i===Ud||i===Fd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Id)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ud)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Pu||i===Hd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Od||i===kd)return u===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Bd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===zd)return o.COMPRESSED_R11_EAC;if(i===Vd)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Pu)return o.COMPRESSED_RG11_EAC;if(i===Hd)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gd||i===Wd||i===Xd||i===jd||i===$d||i===Yd||i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Gd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qd)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===th)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ih||i===rh||i===sh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===ih)return u===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ah||i===oh||i===Lu||i===lh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ah)return o.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hi({vertexShader:$A,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ti(new Xu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends xs{constructor(e,t){super();const i=this;let a=null,o=1,u=null,f="local-floor",d=1,h=null,g=null,v=null,m=null,x=null,M=null;const b=typeof XRWebGLBinding<"u",y=new qA,S={},T=t.getContextAttributes();let R=null,P=null;const U=[],N=[],O=new St;let w=null;const I=new Gn;I.viewport=new Ot;const V=new Gn;V.viewport=new Ot;const k=[I,V],Z=new KE;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=U[oe];return _e===void 0&&(_e=new jf,U[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=U[oe];return _e===void 0&&(_e=new jf,U[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=U[oe];return _e===void 0&&(_e=new jf,U[oe]=_e),_e.getHandSpace()};function B(oe){const _e=N.indexOf(oe.inputSource);if(_e===-1)return;const de=U[_e];de!==void 0&&(de.update(oe.inputSource,oe.frame,h||u),de.dispatchEvent({type:oe.type,data:oe.inputSource}))}function W(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",G);for(let oe=0;oe<U.length;oe++){const _e=N[oe];_e!==null&&(N[oe]=null,U[oe].disconnect(_e))}ce=null,fe=null,y.reset();for(const oe in S)delete S[oe];e.setRenderTarget(R),x=null,m=null,v=null,a=null,P=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(R=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",W),a.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,ze=null;T.depth&&(ze=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=T.stencil?ps:hr,Ne=T.stencil?bo:zi);const et={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:o};v=this.getBinding(),m=v.createProjectionLayer(et),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new ki(m.textureWidth,m.textureHeight,{format:ui,type:Zn,depthTexture:new pa(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const de={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new ki(x.framebufferWidth,x.framebufferHeight,{format:ui,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(f),De.setContext(a),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(oe){for(let _e=0;_e<oe.removed.length;_e++){const de=oe.removed[_e],Ne=N.indexOf(de);Ne>=0&&(N[Ne]=null,U[Ne].disconnect(de))}for(let _e=0;_e<oe.added.length;_e++){const de=oe.added[_e];let Ne=N.indexOf(de);if(Ne===-1){for(let et=0;et<U.length;et++)if(et>=N.length){N.push(de),Ne=et;break}else if(N[et]===null){N[et]=de,Ne=et;break}if(Ne===-1)break}const ze=U[Ne];ze&&ze.connect(de)}}const $=new K,te=new K;function re(oe,_e,de){$.setFromMatrixPosition(_e.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const Ne=$.distanceTo(te),ze=_e.projectionMatrix.elements,et=de.projectionMatrix.elements,kt=ze[14]/(ze[10]-1),ft=ze[14]/(ze[10]+1),bt=(ze[9]+1)/ze[5],Dt=(ze[9]-1)/ze[5],dt=(ze[8]-1)/ze[0],Kt=(et[8]+1)/et[0],Bt=kt*dt,vn=kt*Kt,X=Ne/(-dt+Kt),zt=X*-dt;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(zt),oe.translateZ(X),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),ze[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const ht=kt+X,Pt=ft+X,Ue=Bt-zt,Gt=vn+(Ne-zt),L=bt*ft/Pt*ht,E=Dt*ft/Pt*ht;oe.projectionMatrix.makePerspective(Ue,Gt,L,E,ht,Pt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function F(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let _e=oe.near,de=oe.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(de=y.depthFar)),Z.near=V.near=I.near=_e,Z.far=V.far=I.far=de,(ce!==Z.near||fe!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ce=Z.near,fe=Z.far),Z.layers.mask=oe.layers.mask|6,I.layers.mask=Z.layers.mask&-5,V.layers.mask=Z.layers.mask&-3;const Ne=oe.parent,ze=Z.cameras;F(Z,Ne);for(let et=0;et<ze.length;et++)F(ze[et],Ne);ze.length===2?re(Z,I,V):Z.projectionMatrix.copy(I.projectionMatrix),Q(oe,Z,Ne)};function Q(oe,_e,de){de===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(de.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ha*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(oe){d=oe,m!==null&&(m.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(oe){return S[oe]};let be=null;function Oe(oe,_e){if(g=_e.getViewerPose(h||u),M=_e,g!==null){const de=g.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Ne=!1;de.length!==Z.cameras.length&&(Z.cameras.length=0,Ne=!0);for(let ft=0;ft<de.length;ft++){const bt=de[ft];let Dt=null;if(x!==null)Dt=x.getViewport(bt);else{const Kt=v.getViewSubImage(m,bt);Dt=Kt.viewport,ft===0&&(e.setRenderTargetTextures(P,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(P))}let dt=k[ft];dt===void 0&&(dt=new Gn,dt.layers.enable(ft),dt.viewport=new Ot,k[ft]=dt),dt.matrix.fromArray(bt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(bt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ft===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ne===!0&&Z.cameras.push(dt)}const ze=a.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const ft=v.getDepthInformation(de[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,a.renderState)}if(ze&&ze.includes("camera-access")&&b){e.state.unbindTexture(),v=i.getBinding();for(let ft=0;ft<de.length;ft++){const bt=de[ft].camera;if(bt){let Dt=S[bt];Dt||(Dt=new zv,S[bt]=Dt);const dt=v.getCameraImage(bt);Dt.sourceTexture=dt}}}}for(let de=0;de<U.length;de++){const Ne=N[de],ze=U[de];Ne!==null&&ze!==void 0&&ze.update(Ne,_e,h||u)}be&&be(oe,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),M=null}const De=new Kv;De.setAnimationLoop(Oe),this.setAnimationLoop=function(oe){be=oe},this.dispose=function(){}}}const ZA=new wt,i_=new ct;i_.set(-1,0,0,0,1,0,0,0,1);function JA(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,jv(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,T,R,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),v(y,S)):S.isMeshPhongMaterial?(o(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),m(y,S),S.isMeshPhysicalMaterial&&x(y,S,P)):S.isMeshMatcapMaterial?(o(y,S),M(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),b(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,T,R):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Wn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Wn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const T=e.get(S),R=T.envMap,P=T.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(i_),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,T,R){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*T,y.scale.value=R*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,T){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const T=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function QA(r,e,t,i){let a={},o={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,R){const P=R.program;i.uniformBlockBinding(T,P)}function h(T,R){let P=a[T.id];P===void 0&&(M(T),P=g(T),a[T.id]=P,T.addEventListener("dispose",y));const U=R.program;i.updateUBOMapping(T,U);const N=e.render.frame;o[T.id]!==N&&(m(T),o[T.id]=N)}function g(T){const R=v();T.__bindingPointIndex=R;const P=r.createBuffer(),U=T.__size,N=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,U,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,P),P}function v(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const R=a[T.id],P=T.uniforms,U=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let N=0,O=P.length;N<O;N++){const w=Array.isArray(P[N])?P[N]:[P[N]];for(let I=0,V=w.length;I<V;I++){const k=w[I];if(x(k,N,I,U)===!0){const Z=k.__offset,ce=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let B=0;B<ce.length;B++){const W=ce[B],G=b(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,Z+fe,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):ArrayBuffer.isView(W)?k.__data.set(new W.constructor(W.buffer,W.byteOffset,k.__data.length)):(W.toArray(k.__data,fe),fe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(T,R,P,U){const N=T.value,O=R+"_"+P;if(U[O]===void 0)return typeof N=="number"||typeof N=="boolean"?U[O]=N:ArrayBuffer.isView(N)?U[O]=N.slice():U[O]=N.clone(),!0;{const w=U[O];if(typeof N=="number"||typeof N=="boolean"){if(w!==N)return U[O]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(w.equals(N)===!1)return w.copy(N),!0}}return!1}function M(T){const R=T.uniforms;let P=0;const U=16;for(let O=0,w=R.length;O<w;O++){const I=Array.isArray(R[O])?R[O]:[R[O]];for(let V=0,k=I.length;V<k;V++){const Z=I[V],ce=Array.isArray(Z.value)?Z.value:[Z.value];for(let fe=0,B=ce.length;fe<B;fe++){const W=ce[fe],G=b(W),$=P%U,te=$%G.boundary,re=$+te;P+=te,re!==0&&U-re<G.storage&&(P+=U-re),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=G.storage}}}const N=P%U;return N>0&&(P+=U-N),T.__size=P,T.__cache={},this}function b(T){const R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(R.boundary=16,R.storage=T.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",T),R}function y(T){const R=T.target;R.removeEventListener("dispose",y);const P=u.indexOf(R.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(a[R.id]),delete a[R.id],delete o[R.id]}function S(){for(const T in a)r.deleteBuffer(a[T]);u=[],a={},o={}}return{bind:d,update:h,dispose:S}}const eR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function tR(){return Di===null&&(Di=new Fv(eR,16,16,gs,dr),Di.name="DFG_LUT",Di.minFilter=Rn,Di.magFilter=Rn,Di.wrapS=or,Di.wrapT=or,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class nR{constructor(e={}){const{canvas:t=pM(),context:i=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Zn}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=u;const b=x,y=new Set([Ch,Rh,Ah]),S=new Set([Zn,zi,To,bo,Th,bh]),T=new Uint32Array(4),R=new Int32Array(4),P=new K;let U=null,N=null;const O=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1,Z=null;this._outputColorSpace=li;let ce=0,fe=0,B=null,W=-1,G=null;const $=new Ot,te=new Ot;let re=null;const F=new yt(0);let Q=0,be=t.width,Oe=t.height,De=1,oe=null,_e=null;const de=new Ot(0,0,be,Oe),Ne=new Ot(0,0,be,Oe);let ze=!1;const et=new Uh;let kt=!1,ft=!1;const bt=new wt,Dt=new K,dt=new Ot,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function vn(){return B===null?De:1}let X=i;function zt(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ot,!1),X===null){const Y="webgl2";if(X=zt(Y,C),X===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw it("WebGLRenderer: "+C.message),C}let ht,Pt,Ue,Gt,L,E,J,me,ve,Ee,Ie,he,ge,ke,Ve,Re,we,rt,at,mt,H,Ae,pe;function Be(){ht=new tb(X),ht.init(),H=new jA(X,ht),Pt=new $T(X,ht,e,H),Ue=new WA(X,ht),Pt.reversedDepthBuffer&&m&&Ue.buffers.depth.setReversed(!0),Gt=new rb(X),L=new PA,E=new XA(X,ht,Ue,L,Pt,H,Gt),J=new eb(V),me=new l1(X),Ae=new XT(X,me),ve=new nb(X,me,Gt,Ae),Ee=new ab(X,ve,me,Ae,Gt),rt=new sb(X,Pt,E),Ve=new YT(L),Ie=new CA(V,J,ht,Pt,Ae,Ve),he=new JA(V,L),ge=new NA,ke=new kA(ht),we=new WT(V,J,Ue,Ee,M,d),Re=new GA(V,Ee,Pt),pe=new QA(X,Gt,Pt,Ue),at=new jT(X,ht,Gt),mt=new ib(X,ht,Gt),Gt.programs=Ie.programs,V.capabilities=Pt,V.extensions=ht,V.properties=L,V.renderLists=ge,V.shadowMap=Re,V.state=Ue,V.info=Gt}Be(),b!==Zn&&(I=new lb(b,t.width,t.height,a,o));const Pe=new KA(V,X);this.xr=Pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(C){C!==void 0&&(De=C,this.setSize(be,Oe,!1))},this.getSize=function(C){return C.set(be,Oe)},this.setSize=function(C,Y,le=!0){if(Pe.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}be=C,Oe=Y,t.width=Math.floor(C*De),t.height=Math.floor(Y*De),le===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(be*De,Oe*De).floor()},this.setDrawingBufferSize=function(C,Y,le){be=C,Oe=Y,De=le,t.width=Math.floor(C*le),t.height=Math.floor(Y*le),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(b===Zn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){Qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy($)},this.getViewport=function(C){return C.copy(de)},this.setViewport=function(C,Y,le,ie){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,Y,le,ie),Ue.viewport($.copy(de).multiplyScalar(De).round())},this.getScissor=function(C){return C.copy(Ne)},this.setScissor=function(C,Y,le,ie){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,Y,le,ie),Ue.scissor(te.copy(Ne).multiplyScalar(De).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(C){Ue.setScissorTest(ze=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){_e=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,le=!0){let ie=0;if(C){let ne=!1;if(B!==null){const Le=B.texture.format;ne=y.has(Le)}if(ne){const Le=B.texture.type,We=S.has(Le),Ce=we.getClearColor(),Ye=we.getClearAlpha(),Je=Ce.r,lt=Ce.g,ut=Ce.b;We?(T[0]=Je,T[1]=lt,T[2]=ut,T[3]=Ye,X.clearBufferuiv(X.COLOR,0,T)):(R[0]=Je,R[1]=lt,R[2]=ut,R[3]=Ye,X.clearBufferiv(X.COLOR,0,R))}else ie|=X.COLOR_BUFFER_BIT}Y&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Z=C},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),we.dispose(),ge.dispose(),ke.dispose(),L.dispose(),J.dispose(),Ee.dispose(),Ae.dispose(),pe.dispose(),Ie.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Xr),Pe.removeEventListener("sessionend",Es),Wi.stop()};function xe(C){C.preventDefault(),Bg("WebGLRenderer: Context Lost."),k=!0}function $e(){Bg("WebGLRenderer: Context Restored."),k=!1;const C=Gt.autoReset,Y=Re.enabled,le=Re.autoUpdate,ie=Re.needsUpdate,ne=Re.type;Be(),Gt.autoReset=C,Re.enabled=Y,Re.autoUpdate=le,Re.needsUpdate=ie,Re.type=ne}function ot(C){it("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ft(C){const Y=C.target;Y.removeEventListener("dispose",Ft),At(Y)}function At(C){Pn(C),L.remove(C)}function Pn(C){const Y=L.get(C).programs;Y!==void 0&&(Y.forEach(function(le){Ie.releaseProgram(le)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,le,ie,ne,Le){Y===null&&(Y=Kt);const We=ne.isMesh&&ne.matrixWorld.determinant()<0,Ce=Vo(C,Y,le,ie,ne);Ue.setMaterial(ie,We);let Ye=le.index,Je=1;if(ie.wireframe===!0){if(Ye=ve.getWireframeAttribute(le),Ye===void 0)return;Je=2}const lt=le.drawRange,ut=le.attributes.position;let Ke=lt.start*Je,Et=(lt.start+lt.count)*Je;Le!==null&&(Ke=Math.max(Ke,Le.start*Je),Et=Math.min(Et,(Le.start+Le.count)*Je)),Ye!==null?(Ke=Math.max(Ke,0),Et=Math.min(Et,Ye.count)):ut!=null&&(Ke=Math.max(Ke,0),Et=Math.min(Et,ut.count));const Vt=Et-Ke;if(Vt<0||Vt===1/0)return;Ae.setup(ne,ie,Ce,le,Ye);let $t,Lt=at;if(Ye!==null&&($t=me.get(Ye),Lt=mt,Lt.setIndex($t)),ne.isMesh)ie.wireframe===!0?(Ue.setLineWidth(ie.wireframeLinewidth*vn()),Lt.setMode(X.LINES)):Lt.setMode(X.TRIANGLES);else if(ne.isLine){let an=ie.linewidth;an===void 0&&(an=1),Ue.setLineWidth(an*vn()),ne.isLineSegments?Lt.setMode(X.LINES):ne.isLineLoop?Lt.setMode(X.LINE_LOOP):Lt.setMode(X.LINE_STRIP)}else ne.isPoints?Lt.setMode(X.POINTS):ne.isSprite&&Lt.setMode(X.TRIANGLES);if(ne.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const an=ne._multiDrawStarts,He=ne._multiDrawCounts,_n=ne._multiDrawCount,gt=Ye?me.get(Ye).bytesPerElement:1,Un=L.get(ie).currentProgram.getUniforms();for(let Fn=0;Fn<_n;Fn++)Un.setValue(X,"_gl_DrawID",Fn),Lt.render(an[Fn]/gt,He[Fn])}else if(ne.isInstancedMesh)Lt.renderInstances(Ke,Vt,ne.count);else if(le.isInstancedBufferGeometry){const an=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,He=Math.min(le.instanceCount,an);Lt.renderInstances(Ke,Vt,He)}else Lt.render(Ke,Vt)};function ei(C,Y,le){C.transparent===!0&&C.side===ar&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,ws(C,Y,le),C.side=Gr,C.needsUpdate=!0,ws(C,Y,le),C.side=ar):ws(C,Y,le)}this.compile=function(C,Y,le=null){le===null&&(le=C),N=ke.get(le),N.init(Y),w.push(N),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),C!==le&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),N.setupLights();const ie=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let We=0;We<Le.length;We++){const Ce=Le[We];ei(Ce,le,ne),ie.add(Ce)}else ei(Le,le,ne),ie.add(Le)}),N=w.pop(),ie},this.compileAsync=function(C,Y,le=null){const ie=this.compile(C,Y,le);return new Promise(ne=>{function Le(){if(ie.forEach(function(We){L.get(We).currentProgram.isReady()&&ie.delete(We)}),ie.size===0){ne(C);return}setTimeout(Le,10)}ht.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Gi=null;function Ms(C){Gi&&Gi(C)}function Xr(){Wi.stop()}function Es(){Wi.start()}const Wi=new Kv;Wi.setAnimationLoop(Ms),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(C){Gi=C,Pe.setAnimationLoop(C),C===null?Wi.stop():Wi.start()},Pe.addEventListener("sessionstart",Xr),Pe.addEventListener("sessionend",Es),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(C,Y);const le=Pe.enabled===!0&&Pe.isPresenting===!0,ie=I!==null&&(B===null||le)&&I.begin(V,B);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Y),Y=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,Y,B),N=ke.get(C,w.length),N.init(Y),N.state.textureUnits=E.getTextureUnits(),w.push(N),bt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(bt,Fi,Y.reversedDepth),ft=this.localClippingEnabled,kt=Ve.init(this.clippingPlanes,ft),U=ge.get(C,O.length),U.init(),O.push(U),Pe.enabled===!0&&Pe.isPresenting===!0){const We=V.xr.getDepthSensingMesh();We!==null&&Ea(We,Y,-1/0,V.sortObjects)}Ea(C,Y,0,V.sortObjects),U.finish(),V.sortObjects===!0&&U.sort(oe,_e),Bt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Bt&&we.addToRenderList(U,C),this.info.render.frame++,kt===!0&&Ve.beginShadows();const ne=N.state.shadowsArray;if(Re.render(ne,C,Y),kt===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&I.hasRenderPass())===!1){const We=U.opaque,Ce=U.transmissive;if(N.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(Ce.length>0)for(let Je=0,lt=Ye.length;Je<lt;Je++){const ut=Ye[Je];Ai(We,Ce,C,ut)}Bt&&we.render(C);for(let Je=0,lt=Ye.length;Je<lt;Je++){const ut=Ye[Je];Bo(U,C,ut,ut.viewport)}}else Ce.length>0&&Ai(We,Ce,C,Y),Bt&&we.render(C),Bo(U,C,Y)}B!==null&&fe===0&&(E.updateMultisampleRenderTarget(B),E.updateRenderTargetMipmap(B)),ie&&I.end(V),C.isScene===!0&&C.onAfterRender(V,C,Y),Ae.resetDefaultState(),W=-1,G=null,w.pop(),w.length>0?(N=w[w.length-1],E.setTextureUnits(N.state.textureUnits),kt===!0&&Ve.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?U=O[O.length-1]:U=null,Z!==null&&Z.renderEnd()};function Ea(C,Y,le,ie){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||et.intersectsSprite(C)){ie&&dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const We=Ee.update(C),Ce=C.material;Ce.visible&&U.push(C,We,Ce,le,dt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||et.intersectsObject(C))){const We=Ee.update(C),Ce=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),dt.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),dt.copy(We.boundingSphere.center)),dt.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Ce)){const Ye=We.groups;for(let Je=0,lt=Ye.length;Je<lt;Je++){const ut=Ye[Je],Ke=Ce[ut.materialIndex];Ke&&Ke.visible&&U.push(C,We,Ke,le,dt.z,ut)}}else Ce.visible&&U.push(C,We,Ce,le,dt.z,null)}}const Le=C.children;for(let We=0,Ce=Le.length;We<Ce;We++)Ea(Le[We],Y,le,ie)}function Bo(C,Y,le,ie){const{opaque:ne,transmissive:Le,transparent:We}=C;N.setupLightsView(le),kt===!0&&Ve.setGlobalState(V.clippingPlanes,le),ie&&Ue.viewport($.copy(ie)),ne.length>0&&jr(ne,Y,le),Le.length>0&&jr(Le,Y,le),We.length>0&&jr(We,Y,le),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ai(C,Y,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const Ke=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new ki(1,1,{generateMipmaps:!0,type:Ke?dr:Zn,minFilter:hs,samples:Math.max(4,Pt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Le=N.state.transmissionRenderTarget[ie.id],We=ie.viewport||$;Le.setSize(We.z*V.transmissionResolutionScale,We.w*V.transmissionResolutionScale);const Ce=V.getRenderTarget(),Ye=V.getActiveCubeFace(),Je=V.getActiveMipmapLevel();V.setRenderTarget(Le),V.getClearColor(F),Q=V.getClearAlpha(),Q<1&&V.setClearColor(16777215,.5),V.clear(),Bt&&we.render(le);const lt=V.toneMapping;V.toneMapping=Oi;const ut=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),kt===!0&&Ve.setGlobalState(V.clippingPlanes,ie),jr(C,le,ie),E.updateMultisampleRenderTarget(Le),E.updateRenderTargetMipmap(Le),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Et=0,Vt=Y.length;Et<Vt;Et++){const $t=Y[Et],{object:Lt,geometry:an,material:He,group:_n}=$t;if(He.side===ar&&Lt.layers.test(ie.layers)){const gt=He.side;He.side=Wn,He.needsUpdate=!0,wa(Lt,le,ie,an,He,_n),He.side=gt,He.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(Le),E.updateRenderTargetMipmap(Le))}V.setRenderTarget(Ce,Ye,Je),V.setClearColor(F,Q),ut!==void 0&&(ie.viewport=ut),V.toneMapping=lt}function jr(C,Y,le){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,Le=C.length;ne<Le;ne++){const We=C[ne],{object:Ce,geometry:Ye,group:Je}=We;let lt=We.material;lt.allowOverride===!0&&ie!==null&&(lt=ie),Ce.layers.test(le.layers)&&wa(Ce,Y,le,Ye,lt,Je)}}function wa(C,Y,le,ie,ne,Le){C.onBeforeRender(V,Y,le,ie,ne,Le),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(V,Y,le,ie,C,Le),ne.transparent===!0&&ne.side===ar&&ne.forceSinglePass===!1?(ne.side=Wn,ne.needsUpdate=!0,V.renderBufferDirect(le,Y,ie,ne,C,Le),ne.side=Gr,ne.needsUpdate=!0,V.renderBufferDirect(le,Y,ie,ne,C,Le),ne.side=ar):V.renderBufferDirect(le,Y,ie,ne,C,Le),C.onAfterRender(V,Y,le,ie,ne,Le)}function ws(C,Y,le){Y.isScene!==!0&&(Y=Kt);const ie=L.get(C),ne=N.state.lights,Le=N.state.shadowsArray,We=ne.state.version,Ce=Ie.getParameters(C,ne.state,Le,Y,le,N.state.lightProbeGridArray),Ye=Ie.getProgramCacheKey(Ce);let Je=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=J.get(C.envMap||ie.environment,lt),ie.envMapRotation=ie.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",Ft),Je=new Map,ie.programs=Je);let ut=Je.get(Ye);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===We)return ba(C,Ce),ut}else Ce.uniforms=Ie.getUniforms(C),Z!==null&&C.isNodeMaterial&&Z.build(C,le,Ce),C.onBeforeCompile(Ce,V),ut=Ie.acquireProgram(Ce,Ye),Je.set(Ye,ut),ie.uniforms=Ce.uniforms;const Ke=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ve.uniform),ba(C,Ce),ie.needsLights=Ju(C),ie.lightsStateVersion=We,ie.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=ut,ie.uniformsList=null,ut}function Ta(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Ru.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ba(C,Y){const le=L.get(C);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function zo(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;P.setFromMatrixPosition(Y.matrixWorld);for(let le=0,ie=C.length;le<ie;le++){const ne=C[le];if(ne.texture!==null&&ne.boundingBox.containsPoint(P))return ne}return null}function Vo(C,Y,le,ie,ne){Y.isScene!==!0&&(Y=Kt),E.resetTextureUnits();const Le=Y.fog,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Ce=B===null?V.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Mt.workingColorSpace,Ye=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Je=J.get(ie.envMap||We,Ye),lt=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ke=!!le.morphAttributes.position,Et=!!le.morphAttributes.normal,Vt=!!le.morphAttributes.color;let $t=Oi;ie.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&($t=V.toneMapping);const Lt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,an=Lt!==void 0?Lt.length:0,He=L.get(ie),_n=N.state.lights;if(kt===!0&&(ft===!0||C!==G)){const Nt=C===G&&ie.id===W;Ve.setState(ie,C,Nt)}let gt=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==_n.state.version||He.outputColorSpace!==Ce||ne.isBatchedMesh&&He.batching===!1||!ne.isBatchedMesh&&He.batching===!0||ne.isBatchedMesh&&He.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&He.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&He.instancing===!1||!ne.isInstancedMesh&&He.instancing===!0||ne.isSkinnedMesh&&He.skinning===!1||!ne.isSkinnedMesh&&He.skinning===!0||ne.isInstancedMesh&&He.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&He.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&He.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&He.instancingMorph===!1&&ne.morphTexture!==null||He.envMap!==Je||ie.fog===!0&&He.fog!==Le||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ve.numPlanes||He.numIntersection!==Ve.numIntersection)||He.vertexAlphas!==lt||He.vertexTangents!==ut||He.morphTargets!==Ke||He.morphNormals!==Et||He.morphColors!==Vt||He.toneMapping!==$t||He.morphTargetsCount!==an||!!He.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,He.__version=ie.version);let Un=He.currentProgram;gt===!0&&(Un=ws(ie,Y,ne),Z&&ie.isNodeMaterial&&Z.onUpdateProgram(ie,Un,He));let Fn=!1,vt=!1,Xi=!1;const Ct=Un.getUniforms(),Wt=He.uniforms;if(Ue.useProgram(Un.program)&&(Fn=!0,vt=!0,Xi=!0),ie.id!==W&&(W=ie.id,vt=!0),He.needsLights){const Nt=zo(N.state.lightProbeGridArray,ne);He.lightProbeGrid!==Nt&&(He.lightProbeGrid=Nt,vt=!0)}if(Fn||G!==C){Ue.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(X,"projectionMatrix",C.projectionMatrix),Ct.setValue(X,"viewMatrix",C.matrixWorldInverse);const di=Ct.map.cameraPosition;di!==void 0&&di.setValue(X,Dt.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,vt=!0,Xi=!0)}if(He.needsLights&&(_n.state.directionalShadowMap.length>0&&Ct.setValue(X,"directionalShadowMap",_n.state.directionalShadowMap,E),_n.state.spotShadowMap.length>0&&Ct.setValue(X,"spotShadowMap",_n.state.spotShadowMap,E),_n.state.pointShadowMap.length>0&&Ct.setValue(X,"pointShadowMap",_n.state.pointShadowMap,E)),ne.isSkinnedMesh){Ct.setOptional(X,ne,"bindMatrix"),Ct.setOptional(X,ne,"bindMatrixInverse");const Nt=ne.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(X,"boneTexture",Nt.boneTexture,E))}ne.isBatchedMesh&&(Ct.setOptional(X,ne,"batchingTexture"),Ct.setValue(X,"batchingTexture",ne._matricesTexture,E),Ct.setOptional(X,ne,"batchingIdTexture"),Ct.setValue(X,"batchingIdTexture",ne._indirectTexture,E),Ct.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ct.setValue(X,"batchingColorTexture",ne._colorsTexture,E));const fi=le.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&rt.update(ne,le,Un),(vt||He.receiveShadow!==ne.receiveShadow)&&(He.receiveShadow=ne.receiveShadow,Ct.setValue(X,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Wt.envMapIntensity.value=Y.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=tR()),vt){if(Ct.setValue(X,"toneMappingExposure",V.toneMappingExposure),He.needsLights&&Zu(Wt,Xi),Le&&ie.fog===!0&&he.refreshFogUniforms(Wt,Le),he.refreshMaterialUniforms(Wt,ie,De,Oe,N.state.transmissionRenderTarget[C.id]),He.needsLights&&He.lightProbeGrid){const Nt=He.lightProbeGrid;Wt.probesSH.value=Nt.texture,Wt.probesMin.value.copy(Nt.boundingBox.min),Wt.probesMax.value.copy(Nt.boundingBox.max),Wt.probesResolution.value.copy(Nt.resolution)}Ru.upload(X,Ta(He),Wt,E)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ru.upload(X,Ta(He),Wt,E),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ct.setValue(X,"center",ne.center),Ct.setValue(X,"modelViewMatrix",ne.modelViewMatrix),Ct.setValue(X,"normalMatrix",ne.normalMatrix),Ct.setValue(X,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let di=0,Ri=Nt.length;di<Ri;di++){const $r=Nt[di];pe.update($r,Un),pe.bind($r,Un)}}return Un}function Zu(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ju(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,le){const ie=L.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=Y,L.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const le=L.get(C);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Zt=X.createFramebuffer();this.setRenderTarget=function(C,Y=0,le=0){B=C,ce=Y,fe=le;let ie=null,ne=!1,Le=!1;if(C){const Ce=L.get(C);if(Ce.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(X.FRAMEBUFFER,Ce.__webglFramebuffer),$.copy(C.viewport),te.copy(C.scissor),re=C.scissorTest,Ue.viewport($),Ue.scissor(te),Ue.setScissorTest(re),W=-1;return}else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Ce.__hasExternalTextures)E.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(Ce.__boundDepthTexture!==lt){if(lt!==null&&L.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);const Je=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?ie=Je[Y][le]:ie=Je[Y],ne=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?ie=L.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?ie=Je[le]:ie=Je,$.copy(C.viewport),te.copy(C.scissor),re=C.scissorTest}else $.copy(de).multiplyScalar(De).floor(),te.copy(Ne).multiplyScalar(De).floor(),re=ze;if(le!==0&&(ie=Zt),Ue.bindFramebuffer(X.FRAMEBUFFER,ie)&&Ue.drawBuffers(C,ie),Ue.viewport($),Ue.scissor(te),Ue.setScissorTest(re),ne){const Ce=L.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,le)}else if(Le){const Ce=Y;for(let Ye=0;Ye<C.textures.length;Ye++){const Je=L.get(C.textures[Ye]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,le,Ce)}}else if(C!==null&&le!==0){const Ce=L.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,le)}W=-1},this.readRenderTargetPixels=function(C,Y,le,ie,ne,Le,We,Ce=0){if(!(C&&C.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){Ue.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const Je=C.textures[Ce],lt=Je.format,ut=Je.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce),!Pt.textureFormatReadable(lt)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(ut)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ie&&le>=0&&le<=C.height-ne&&X.readPixels(Y,le,ie,ne,H.convert(lt),H.convert(ut),Le)}finally{const Je=B!==null?L.get(B).__webglFramebuffer:null;Ue.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,Y,le,ie,ne,Le,We,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye)if(Y>=0&&Y<=C.width-ie&&le>=0&&le<=C.height-ne){Ue.bindFramebuffer(X.FRAMEBUFFER,Ye);const Je=C.textures[Ce],lt=Je.format,ut=Je.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce),!Pt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ke),X.bufferData(X.PIXEL_PACK_BUFFER,Le.byteLength,X.STREAM_READ),X.readPixels(Y,le,ie,ne,H.convert(lt),H.convert(ut),0);const Et=B!==null?L.get(B).__webglFramebuffer:null;Ue.bindFramebuffer(X.FRAMEBUFFER,Et);const Vt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await mM(X,Vt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ke),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Le),X.deleteBuffer(Ke),X.deleteSync(Vt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,le=0){const ie=Math.pow(2,-le),ne=Math.floor(C.image.width*ie),Le=Math.floor(C.image.height*ie),We=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;E.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,We,Ce,ne,Le),Ue.unbindTexture()};const Qu=X.createFramebuffer(),Aa=X.createFramebuffer();this.copyTextureToTexture=function(C,Y,le=null,ie=null,ne=0,Le=0){let We,Ce,Ye,Je,lt,ut,Ke,Et,Vt;const $t=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(le!==null)We=le.max.x-le.min.x,Ce=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,Je=le.min.x,lt=le.min.y,ut=le.isBox3?le.min.z:0;else{const Wt=Math.pow(2,-ne);We=Math.floor($t.width*Wt),Ce=Math.floor($t.height*Wt),C.isDataArrayTexture?Ye=$t.depth:C.isData3DTexture?Ye=Math.floor($t.depth*Wt):Ye=1,Je=0,lt=0,ut=0}ie!==null?(Ke=ie.x,Et=ie.y,Vt=ie.z):(Ke=0,Et=0,Vt=0);const Lt=H.convert(Y.format),an=H.convert(Y.type);let He;Y.isData3DTexture?(E.setTexture3D(Y,0),He=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(E.setTexture2DArray(Y,0),He=X.TEXTURE_2D_ARRAY):(E.setTexture2D(Y,0),He=X.TEXTURE_2D),Ue.activeTexture(X.TEXTURE0),Ue.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ue.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ue.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const _n=Ue.getParameter(X.UNPACK_ROW_LENGTH),gt=Ue.getParameter(X.UNPACK_IMAGE_HEIGHT),Un=Ue.getParameter(X.UNPACK_SKIP_PIXELS),Fn=Ue.getParameter(X.UNPACK_SKIP_ROWS),vt=Ue.getParameter(X.UNPACK_SKIP_IMAGES);Ue.pixelStorei(X.UNPACK_ROW_LENGTH,$t.width),Ue.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$t.height),Ue.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),Ue.pixelStorei(X.UNPACK_SKIP_ROWS,lt),Ue.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const Xi=C.isDataArrayTexture||C.isData3DTexture,Ct=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Wt=L.get(C),fi=L.get(Y),Nt=L.get(Wt.__renderTarget),di=L.get(fi.__renderTarget);Ue.bindFramebuffer(X.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ue.bindFramebuffer(X.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Ri=0;Ri<Ye;Ri++)Xi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,L.get(C).__webglTexture,ne,ut+Ri),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,L.get(Y).__webglTexture,Le,Vt+Ri)),X.blitFramebuffer(Je,lt,We,Ce,Ke,Et,We,Ce,X.DEPTH_BUFFER_BIT,X.NEAREST);Ue.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||L.has(C)){const Wt=L.get(C),fi=L.get(Y);Ue.bindFramebuffer(X.READ_FRAMEBUFFER,Qu),Ue.bindFramebuffer(X.DRAW_FRAMEBUFFER,Aa);for(let Nt=0;Nt<Ye;Nt++)Xi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Wt.__webglTexture,ne,ut+Nt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Wt.__webglTexture,ne),Ct?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fi.__webglTexture,Le,Vt+Nt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,fi.__webglTexture,Le),ne!==0?X.blitFramebuffer(Je,lt,We,Ce,Ke,Et,We,Ce,X.COLOR_BUFFER_BIT,X.NEAREST):Ct?X.copyTexSubImage3D(He,Le,Ke,Et,Vt+Nt,Je,lt,We,Ce):X.copyTexSubImage2D(He,Le,Ke,Et,Je,lt,We,Ce);Ue.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(He,Le,Ke,Et,Vt,We,Ce,Ye,Lt,an,$t.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(He,Le,Ke,Et,Vt,We,Ce,Ye,Lt,$t.data):X.texSubImage3D(He,Le,Ke,Et,Vt,We,Ce,Ye,Lt,an,$t):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Le,Ke,Et,We,Ce,Lt,an,$t.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Le,Ke,Et,$t.width,$t.height,Lt,$t.data):X.texSubImage2D(X.TEXTURE_2D,Le,Ke,Et,We,Ce,Lt,an,$t);Ue.pixelStorei(X.UNPACK_ROW_LENGTH,_n),Ue.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt),Ue.pixelStorei(X.UNPACK_SKIP_PIXELS,Un),Ue.pixelStorei(X.UNPACK_SKIP_ROWS,Fn),Ue.pixelStorei(X.UNPACK_SKIP_IMAGES,vt),Le===0&&Y.generateMipmaps&&X.generateMipmap(He),Ue.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),Ue.unbindTexture()},this.resetState=function(){ce=0,fe=0,B=null,Ue.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const xd=5,Y0=.45,iR=.35,rR="/models/asteroid.fbx";function sR(){const[r,e]=ae.useState("checking"),[t,i]=ae.useState(0),[a,o]=ae.useState(0),[u,f]=ae.useState(""),d=ae.useRef("checking"),h=ae.useRef(0),g=B=>{d.current=B,e(B)},v=ae.useRef(null),m=ae.useRef(null),x=ae.useRef(null),M=ae.useRef(null),b=ae.useRef(null),y=ae.useRef(null),S=ae.useRef([]),T=ae.useRef([]),R=ae.useRef(null),P=ae.useRef(new a1),U=ae.useRef(null);ae.useEffect(()=>{const B=navigator.xr;if(!B){g("unsupported");return}B.isSessionSupported("immersive-ar").then(W=>g(W?"idle":"unsupported")).catch(()=>g("unsupported"))},[]);const N=()=>{const B=new _o,W=new Oh(1,1),G=W.attributes.position.array;for(let $=0;$<G.length;$+=3){const te=.78+Math.random()*.44;G[$]*=te,G[$+1]*=te,G[$+2]*=te}return W.attributes.position.needsUpdate=!0,W.computeVertexNormals(),B.add(new Ti(W,new p0({color:7035454,roughness:.95,metalness:.05}))),B},O=async()=>{try{const{FBXLoader:B}=await LS(async()=>{const{FBXLoader:G}=await import("./FBXLoader-BBR_ofF4.js");return{FBXLoader:G}},[]),W=new B;return await new Promise((G,$)=>{W.load(rR,te=>{te.traverse(re=>{re.isMesh&&(re.material=new p0({color:9139029,roughness:.9,metalness:.1}))}),G(te)},void 0,$)})}catch{return N()}},w=B=>{const W=m.current;if(!W)return;const G=22,$=new Qn,te=new Float32Array(G*3),re=[];for(let be=0;be<G;be++)te[be*3]=B.x,te[be*3+1]=B.y,te[be*3+2]=B.z,re.push(new K((Math.random()-.5)*.025,.008+Math.random()*.018,(Math.random()-.5)*.025));$.setAttribute("position",new wi(te,3));const F=new kv({color:16347926,size:.025,transparent:!0,opacity:1}),Q=new sE($,F);W.add(Q),T.current.push({points:Q,velocities:re,frame:0})},I=B=>{const W=m.current;W&&(w(B.position.clone()),W.remove(B),S.current=S.current.filter(G=>G!==B),h.current++,i(h.current))},V=ae.useCallback(B=>{var Oe;if(d.current!=="playing")return;const W=v.current,G=m.current;if(!W||!G||S.current.length===0)return;const $=B.touches[0],te=$.clientX/window.innerWidth*2-1,re=-($.clientY/window.innerHeight)*2+1,F=W.xr.getCamera(),Q=((Oe=F.cameras)==null?void 0:Oe.length)>0?F.cameras[0]:x.current;P.current.setFromCamera(new St(te,re),Q);const be=P.current.intersectObjects(S.current,!0);if(be.length>0){let De=be[0].object;for(;De.parent&&De.parent!==G;)De=De.parent;I(De)}},[]),k=B=>{const W=m.current,G=R.current;if(!W||!G)return;const $=[];for(let te=0;te<xd;te++){const re=B.clone(!0),F=te/xd*Math.PI*2;re.position.set(G.x+Math.cos(F)*Y0,G.y+iR+Math.random()*.2,G.z+Math.sin(F)*Y0);const Q=.06+Math.random()*.04;re.scale.setScalar(Q),re.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),W.add(re),$.push(re)}S.current=$,o(xd)},Z=async()=>{g("loading");try{const B=await O();y.current=B,k(B),document.addEventListener("touchstart",V,{passive:!0}),g("playing")}catch(B){g("error"),f((B==null?void 0:B.message)??"Failed to load model")}},ce=ae.useCallback(()=>{var B,W,G;document.removeEventListener("touchstart",V),(B=v.current)==null||B.setAnimationLoop(null),(W=M.current)==null||W.end().catch(()=>{}),M.current=null,(G=U.current)==null||G.remove(),U.current=null,S.current=[],T.current=[],R.current=null},[V]),fe=async B=>{g("starting"),f(""),i(0),h.current=0,o(0);try{const W=document.createElement("canvas");W.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;",document.body.appendChild(W),U.current=W;const G=new nR({canvas:W,alpha:!0,antialias:!0});G.xr.enabled=!0,G.setPixelRatio(window.devicePixelRatio),G.setSize(window.innerWidth,window.innerHeight),v.current=G;const $=new jM;$.add(new YE(16777215,2));const te=new $E(16777215,3);te.position.set(1,3,2),$.add(te),m.current=$;const re=new Gn(70,window.innerWidth/window.innerHeight,.01,100);x.current=re;const F=navigator.xr,Q={requiredFeatures:["plane-detection"],optionalFeatures:["hit-test","local-floor","dom-overlay"]};B&&(Q.domOverlay={root:B});const be=await F.requestSession("immersive-ar",Q);M.current=be,await G.xr.setSession(be);let Oe;try{Oe=await be.requestReferenceSpace("local-floor")}catch{Oe=await be.requestReferenceSpace("local")}b.current=Oe,g("scanning"),G.setAnimationLoop((De,oe)=>{if(oe){if(d.current==="scanning"){const _e=oe.detectedPlanes??new Set;if(_e.size>0){const de=[..._e][0],Ne=oe.getPose(de.planeSpace,Oe);if(Ne){const ze=Ne.transform.position;R.current=new K(ze.x,ze.y,ze.z),g("plane-found")}}}if(d.current==="playing"){const _e=performance.now()*.001;S.current.forEach((de,Ne)=>{de.rotation.y+=.009,de.rotation.x+=.005,de.position.y+=Math.sin(_e*.8+Ne*1.3)*4e-4}),T.current=T.current.filter(de=>{if(de.frame++,de.frame>45)return $.remove(de.points),!1;const Ne=de.points.geometry.attributes.position.array;for(let ze=0;ze<de.velocities.length;ze++)Ne[ze*3]+=de.velocities[ze].x,Ne[ze*3+1]+=de.velocities[ze].y-4e-4*de.frame,Ne[ze*3+2]+=de.velocities[ze].z;return de.points.geometry.attributes.position.needsUpdate=!0,de.points.material.opacity=Math.max(0,1-de.frame/45),!0})}G.render($,re)}}),be.addEventListener("end",()=>{G.setAnimationLoop(null),W.remove(),U.current=null,M.current=null,S.current=[],T.current=[],g("idle"),i(0),h.current=0})}catch(W){ce(),g("error"),f((W==null?void 0:W.message)??"Failed to start AR")}};return ae.useEffect(()=>()=>ce(),[ce]),{phase:r,smashed:t,total:a,errorMsg:u,isSupported:r!=="unsupported"&&r!=="checking",startAR:fe,startGame:Z,stopAR:ce}}const aR={checking:"CHECKING DEVICE...",unsupported:"AR NOT SUPPORTED",idle:"READY TO SCAN",starting:"INITIALIZING AR...",scanning:"SCANNING SURFACE...","plane-found":"SURFACE LOCKED ✓",loading:"LOADING MODELS...",playing:"SMASH THE ROCKS!",error:"SESSION ERROR"},oR={checking:"#a78bfa",unsupported:"#ef4444",idle:"#a78bfa",starting:"#facc15",scanning:"#facc15","plane-found":"#10b981",loading:"#a78bfa",playing:"#ec4899",error:"#ef4444"};function lR(){const r=Vu(),e=ae.useRef(null),{phase:t,smashed:i,total:a,errorMsg:o,startAR:u,startGame:f,stopAR:d}=sR(),h=oR[t],g=aR[t],v=t==="scanning"||t==="plane-found"||t==="loading"||t==="playing",m=t==="idle"||t==="error",x=t==="plane-found",M=t==="playing",b=t==="loading"||t==="starting",y=()=>u(e.current??void 0),S=()=>{d(),r("/mission")};return q.jsxs("div",{ref:e,className:"fixed inset-0 font-['Press_Start_2P',_monospace] select-none",style:{backgroundColor:v?"transparent":"#0a0118",zIndex:100},children:[q.jsx("style",{children:`
        @keyframes scanLine  { 0% { transform:translateY(-5%);opacity:.7 } 100% { transform:translateY(105vh);opacity:0 } }
        @keyframes pulseRing { 0% { transform:scale(.8);opacity:1 } 100% { transform:scale(2.2);opacity:0 } }
        @keyframes blink     { 0%,100% { opacity:1 } 50% { opacity:.15 } }
        @keyframes fadeSlide { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }
        @keyframes corner    { 0%,100% { opacity:1 } 50% { opacity:.25 } }
        @keyframes spin      { to { transform:rotate(360deg) } }
      `}),v&&q.jsx("div",{className:"pointer-events-none absolute inset-x-0 h-0.5",style:{background:`linear-gradient(to right,transparent,${h}88,transparent)`,animation:"scanLine 3.5s linear infinite",zIndex:10}}),["tl","tr","bl","br"].map(T=>q.jsx("div",{className:"absolute pointer-events-none",style:{top:T[0]==="t"?14:void 0,bottom:T[0]==="b"?14:void 0,left:T[1]==="l"?14:void 0,right:T[1]==="r"?14:void 0,width:28,height:28,borderTop:T[0]==="t"?`3px solid ${h}`:void 0,borderBottom:T[0]==="b"?`3px solid ${h}`:void 0,borderLeft:T[1]==="l"?`3px solid ${h}`:void 0,borderRight:T[1]==="r"?`3px solid ${h}`:void 0,animation:"corner 2s ease-in-out infinite",zIndex:20}},T)),q.jsxs("div",{className:"absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4",style:{zIndex:30},children:[q.jsx("button",{onClick:S,className:"text-[8px] transition-colors",style:{color:v?"#ffffffcc":"#a78bfa"},children:"← EXIT"}),q.jsx("div",{className:"text-[7px] px-2 py-1 border",style:{color:h,borderColor:h,animation:v&&t!=="plane-found"&&!M?"blink 1s ease-in-out infinite":"none"},children:g}),M?q.jsxs("div",{className:"text-[7px] text-[#ec4899]",children:[i,"/",a]}):q.jsx("div",{className:"text-[7px]",style:{color:v?"#10b981":"#374151"},children:"WAVE 01"})]}),!v&&q.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-7 px-8",style:{zIndex:20,animation:"fadeSlide .4s ease-out"},children:[q.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[q.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:h,opacity:.18}}),q.jsx("div",{className:"absolute w-24 h-24 rounded-full border",style:{borderColor:h,opacity:.35}}),b&&q.jsx("div",{className:"absolute w-full h-full rounded-full border-t-2",style:{borderColor:h,animation:"spin .9s linear infinite"}}),!b&&(t==="idle"||t==="error")&&q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:h,animation:"pulseRing 1.6s ease-out infinite"}}),q.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:h,animation:"pulseRing 1.6s .8s ease-out infinite"}})]}),q.jsx("span",{className:"text-3xl",children:t==="unsupported"?"🚫":t==="error"?"⚠️":"📷"})]}),q.jsxs("div",{className:"text-center space-y-2",children:[q.jsx("p",{className:"text-[10px] tracking-widest",style:{color:h},children:g}),t==="unsupported"&&q.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["WebXR immersive-ar not",q.jsx("br",{}),"supported on this device."]}),t==="error"&&q.jsx("p",{className:"text-[7px] text-[#ef444488] leading-loose max-w-xs text-center",children:o}),t==="idle"&&q.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["Point camera at a flat surface",q.jsx("br",{}),"then tap START AR."]})]}),m&&q.jsxs("button",{onClick:y,className:"relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",children:[q.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),q.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),t==="error"?"> RETRY AR <":"> START AR <"]})]}),v&&q.jsxs(q.Fragment,{children:[!M&&q.jsx("div",{className:"absolute pointer-events-none",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:20},children:t==="plane-found"?q.jsxs("div",{className:"text-center",children:[q.jsx("div",{className:"w-20 h-20 border-4 border-[#10b981] mx-auto",style:{boxShadow:"0 0 24px #10b98166"}}),q.jsx("p",{className:"text-[7px] text-[#10b981] mt-2 tracking-widest",style:{animation:"blink 1.5s ease-in-out infinite"},children:"SURFACE LOCKED"})]}):q.jsxs("div",{className:"text-center",children:[q.jsx("div",{className:"w-14 h-14 border-2 border-[#facc15] mx-auto",style:{boxShadow:"0 0 12px #facc1544",animation:"blink 1s ease-in-out infinite"}}),q.jsx("p",{className:"text-[7px] text-[#facc15] mt-2 tracking-widest",children:"SCANNING..."})]})}),x&&q.jsx("div",{className:"absolute bottom-10 inset-x-0 flex justify-center px-8",style:{zIndex:30,animation:"fadeSlide .4s ease-out"},children:q.jsx("button",{onClick:f,className:"w-full max-w-xs py-5 text-[11px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",style:{boxShadow:"0 0 32px #8b5cf677"},children:"> START GAME <"})}),M&&q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"absolute bottom-10 inset-x-0 text-center",style:{zIndex:30,animation:"fadeSlide .3s ease-out"},children:q.jsx("p",{className:"text-[8px] text-[#ec4899] tracking-widest",style:{animation:"blink 2s ease-in-out infinite"},children:"TAP ROCKS TO SMASH"})}),i===a&&a>0&&q.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-4",style:{zIndex:40,backgroundColor:"rgba(10,1,24,.75)",animation:"fadeSlide .5s ease-out"},children:[q.jsx("p",{className:"text-[14px] text-[#10b981] tracking-widest",children:"CLEARED!"}),q.jsxs("p",{className:"text-[8px] text-white/60",children:["All ",a," rocks smashed"]}),q.jsx("button",{onClick:S,className:"mt-4 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors",children:"> RETURN <"})]})]})]})]})}function uR(r){const e=ae.useRef(null),t=ae.useRef(!1);ae.useEffect(()=>{const i=new Audio(r);i.loop=!0,i.volume=.35,e.current=i;const a=()=>{t.current||(t.current=!0,i.play().catch(()=>{}))};return i.play().then(()=>{t.current=!0}).catch(()=>{document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0})}),()=>{i.pause(),i.src="",document.removeEventListener("click",a),document.removeEventListener("touchstart",a),document.removeEventListener("keydown",a)}},[r])}const cR="/assets/bmusic-DkBO5UAz.MP3";function fR(){return uR(cR),null}function dR(){return q.jsxs(dS,{children:[q.jsx(fR,{}),q.jsxs(Hy,{children:[q.jsx(yu,{path:"/",element:q.jsx(AS,{})}),q.jsx(yu,{path:"/mission",element:q.jsx(RS,{})}),q.jsx(yu,{path:"/ar",element:q.jsx(lR,{})})]})]})}const r_=document.getElementById("root");if(!r_)throw new Error("Root element #root not found");Xx.createRoot(r_).render(q.jsx(dR,{}));export{YE as A,QM as B,gR as C,$E as D,Of as E,yR as F,_o as G,$u as L,vR as M,Ou as N,sn as O,Ut as P,ys as Q,Ld as R,li as S,SR as T,Iv as U,Ot as V,K as a,wR as b,or as c,Cn as d,_R as e,Mt as f,yt as g,wt as h,Gn as i,ER as j,hR as k,MR as l,pR as m,Ti as n,rE as o,mR as p,Ov as q,Qn as r,Jn as s,ct as t,St as u,Xv as v,Vi as w,xR as x,ku as y,ju as z};
