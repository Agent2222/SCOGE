var $e=Object.defineProperty;var Me=(B,w,O)=>w in B?$e(B,w,{enumerable:!0,configurable:!0,writable:!0,value:O}):B[w]=O;var ae=(B,w,O)=>(Me(B,typeof w!="symbol"?w+"":w,O),O);import"./wScoge.fc00b881.js";const scriptRel="modulepreload",seen={},base="/",__vitePreload=function(w,O){return!O||O.length===0?w():Promise.all(O.map(z=>{if(z=`${base}${z}`,z in seen)return;seen[z]=!0;const U=z.endsWith(".css"),F=U?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${z}"]${F}`))return;const j=document.createElement("link");if(j.rel=U?"stylesheet":scriptRel,U||(j.as="script",j.crossOrigin=""),j.href=z,document.head.appendChild(j),U)return new Promise((q,G)=>{j.addEventListener("load",q),j.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${z}`)))})})).then(()=>w())};var objectWithoutProperties={exports:{}},objectWithoutPropertiesLoose={exports:{}};(function(B){function w(O,z){if(O==null)return{};var U={},F=Object.keys(O),j,q;for(q=0;q<F.length;q++)j=F[q],!(z.indexOf(j)>=0)&&(U[j]=O[j]);return U}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(objectWithoutPropertiesLoose);(function(B){var w=objectWithoutPropertiesLoose.exports;function O(z,U){if(z==null)return{};var F=w(z,U),j,q;if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(z);for(q=0;q<G.length;q++)j=G[q],!(U.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,j)||(F[j]=z[j]))}return F}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(objectWithoutProperties);var toConsumableArray={exports:{}},arrayWithoutHoles={exports:{}},arrayLikeToArray={exports:{}};(function(B){function w(O,z){(z==null||z>O.length)&&(z=O.length);for(var U=0,F=new Array(z);U<z;U++)F[U]=O[U];return F}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(arrayLikeToArray);(function(B){var w=arrayLikeToArray.exports;function O(z){if(Array.isArray(z))return w(z)}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(arrayWithoutHoles);var iterableToArray={exports:{}};(function(B){function w(O){if(typeof Symbol!="undefined"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(iterableToArray);var unsupportedIterableToArray={exports:{}};(function(B){var w=arrayLikeToArray.exports;function O(z,U){if(!!z){if(typeof z=="string")return w(z,U);var F=Object.prototype.toString.call(z).slice(8,-1);if(F==="Object"&&z.constructor&&(F=z.constructor.name),F==="Map"||F==="Set")return Array.from(z);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return w(z,U)}}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(unsupportedIterableToArray);var nonIterableSpread={exports:{}};(function(B){function w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(nonIterableSpread);(function(B){var w=arrayWithoutHoles.exports,O=iterableToArray.exports,z=unsupportedIterableToArray.exports,U=nonIterableSpread.exports;function F(j){return w(j)||O(j)||z(j)||U()}B.exports=F,B.exports.__esModule=!0,B.exports.default=B.exports})(toConsumableArray);var _typeof$2={exports:{}};(function(B){function w(O){return B.exports=w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},B.exports.__esModule=!0,B.exports.default=B.exports,w(O)}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(_typeof$2);var defineProperty={exports:{}};(function(B){function w(O,z,U){return z in O?Object.defineProperty(O,z,{value:U,enumerable:!0,configurable:!0,writable:!0}):O[z]=U,O}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(defineProperty);var classCallCheck={exports:{}};(function(B){function w(O,z){if(!(O instanceof z))throw new TypeError("Cannot call a class as a function")}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(classCallCheck);var createClass={exports:{}};(function(B){function w(z,U){for(var F=0;F<U.length;F++){var j=U[F];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(z,j.key,j)}}function O(z,U,F){return U&&w(z.prototype,U),F&&w(z,F),Object.defineProperty(z,"prototype",{writable:!1}),z}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(createClass);var regeneratorRuntime$1={exports:{}};(function(B){var w=_typeof$2.exports.default;function O(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */B.exports=O=function(){return z},B.exports.__esModule=!0,B.exports.default=B.exports;var z={},U=Object.prototype,F=U.hasOwnProperty,j=typeof Symbol=="function"?Symbol:{},q=j.iterator||"@@iterator",G=j.asyncIterator||"@@asyncIterator",W=j.toStringTag||"@@toStringTag";function Q(ee,X,ie){return Object.defineProperty(ee,X,{value:ie,enumerable:!0,configurable:!0,writable:!0}),ee[X]}try{Q({},"")}catch{Q=function(ie,re,ne){return ie[re]=ne}}function Y(ee,X,ie,re){var ne=X&&X.prototype instanceof se?X:se,oe=Object.create(ne.prototype),ce=new Se(re||[]);return oe._invoke=function(me,ge,le){var pe="suspendedStart";return function(fe,_e){if(pe==="executing")throw new Error("Generator is already running");if(pe==="completed"){if(fe==="throw")throw _e;return Ce()}for(le.method=fe,le.arg=_e;;){var Te=le.delegate;if(Te){var ke=Be(Te,le);if(ke){if(ke===D)continue;return ke}}if(le.method==="next")le.sent=le._sent=le.arg;else if(le.method==="throw"){if(pe==="suspendedStart")throw pe="completed",le.arg;le.dispatchException(le.arg)}else le.method==="return"&&le.abrupt("return",le.arg);pe="executing";var be=J(me,ge,le);if(be.type==="normal"){if(pe=le.done?"completed":"suspendedYield",be.arg===D)continue;return{value:be.arg,done:le.done}}be.type==="throw"&&(pe="completed",le.method="throw",le.arg=be.arg)}}}(ee,ie,ce),oe}function J(ee,X,ie){try{return{type:"normal",arg:ee.call(X,ie)}}catch(re){return{type:"throw",arg:re}}}z.wrap=Y;var D={};function se(){}function te(){}function de(){}var he={};Q(he,q,function(){return this});var ue=Object.getPrototypeOf,ye=ue&&ue(ue(xe([])));ye&&ye!==U&&F.call(ye,q)&&(he=ye);var ve=de.prototype=se.prototype=Object.create(he);function Ie(ee){["next","throw","return"].forEach(function(X){Q(ee,X,function(ie){return this._invoke(X,ie)})})}function we(ee,X){function ie(ne,oe,ce,me){var ge=J(ee[ne],ee,oe);if(ge.type!=="throw"){var le=ge.arg,pe=le.value;return pe&&w(pe)=="object"&&F.call(pe,"__await")?X.resolve(pe.__await).then(function(fe){ie("next",fe,ce,me)},function(fe){ie("throw",fe,ce,me)}):X.resolve(pe).then(function(fe){le.value=fe,ce(le)},function(fe){return ie("throw",fe,ce,me)})}me(ge.arg)}var re;this._invoke=function(ne,oe){function ce(){return new X(function(me,ge){ie(ne,oe,me,ge)})}return re=re?re.then(ce,ce):ce()}}function Be(ee,X){var ie=ee.iterator[X.method];if(ie===void 0){if(X.delegate=null,X.method==="throw"){if(ee.iterator.return&&(X.method="return",X.arg=void 0,Be(ee,X),X.method==="throw"))return D;X.method="throw",X.arg=new TypeError("The iterator does not provide a 'throw' method")}return D}var re=J(ie,ee.iterator,X.arg);if(re.type==="throw")return X.method="throw",X.arg=re.arg,X.delegate=null,D;var ne=re.arg;return ne?ne.done?(X[ee.resultName]=ne.value,X.next=ee.nextLoc,X.method!=="return"&&(X.method="next",X.arg=void 0),X.delegate=null,D):ne:(X.method="throw",X.arg=new TypeError("iterator result is not an object"),X.delegate=null,D)}function Ae(ee){var X={tryLoc:ee[0]};1 in ee&&(X.catchLoc=ee[1]),2 in ee&&(X.finallyLoc=ee[2],X.afterLoc=ee[3]),this.tryEntries.push(X)}function Ee(ee){var X=ee.completion||{};X.type="normal",delete X.arg,ee.completion=X}function Se(ee){this.tryEntries=[{tryLoc:"root"}],ee.forEach(Ae,this),this.reset(!0)}function xe(ee){if(ee){var X=ee[q];if(X)return X.call(ee);if(typeof ee.next=="function")return ee;if(!isNaN(ee.length)){var ie=-1,re=function ne(){for(;++ie<ee.length;)if(F.call(ee,ie))return ne.value=ee[ie],ne.done=!1,ne;return ne.value=void 0,ne.done=!0,ne};return re.next=re}}return{next:Ce}}function Ce(){return{value:void 0,done:!0}}return te.prototype=de,Q(ve,"constructor",de),Q(de,"constructor",te),te.displayName=Q(de,W,"GeneratorFunction"),z.isGeneratorFunction=function(ee){var X=typeof ee=="function"&&ee.constructor;return!!X&&(X===te||(X.displayName||X.name)==="GeneratorFunction")},z.mark=function(ee){return Object.setPrototypeOf?Object.setPrototypeOf(ee,de):(ee.__proto__=de,Q(ee,W,"GeneratorFunction")),ee.prototype=Object.create(ve),ee},z.awrap=function(ee){return{__await:ee}},Ie(we.prototype),Q(we.prototype,G,function(){return this}),z.AsyncIterator=we,z.async=function(ee,X,ie,re,ne){ne===void 0&&(ne=Promise);var oe=new we(Y(ee,X,ie,re),ne);return z.isGeneratorFunction(X)?oe:oe.next().then(function(ce){return ce.done?ce.value:oe.next()})},Ie(ve),Q(ve,W,"Generator"),Q(ve,q,function(){return this}),Q(ve,"toString",function(){return"[object Generator]"}),z.keys=function(ee){var X=[];for(var ie in ee)X.push(ie);return X.reverse(),function re(){for(;X.length;){var ne=X.pop();if(ne in ee)return re.value=ne,re.done=!1,re}return re.done=!0,re}},z.values=xe,Se.prototype={constructor:Se,reset:function(X){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ee),!X)for(var ie in this)ie.charAt(0)==="t"&&F.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var X=this.tryEntries[0].completion;if(X.type==="throw")throw X.arg;return this.rval},dispatchException:function(X){if(this.done)throw X;var ie=this;function re(le,pe){return ce.type="throw",ce.arg=X,ie.next=le,pe&&(ie.method="next",ie.arg=void 0),!!pe}for(var ne=this.tryEntries.length-1;ne>=0;--ne){var oe=this.tryEntries[ne],ce=oe.completion;if(oe.tryLoc==="root")return re("end");if(oe.tryLoc<=this.prev){var me=F.call(oe,"catchLoc"),ge=F.call(oe,"finallyLoc");if(me&&ge){if(this.prev<oe.catchLoc)return re(oe.catchLoc,!0);if(this.prev<oe.finallyLoc)return re(oe.finallyLoc)}else if(me){if(this.prev<oe.catchLoc)return re(oe.catchLoc,!0)}else{if(!ge)throw new Error("try statement without catch or finally");if(this.prev<oe.finallyLoc)return re(oe.finallyLoc)}}}},abrupt:function(X,ie){for(var re=this.tryEntries.length-1;re>=0;--re){var ne=this.tryEntries[re];if(ne.tryLoc<=this.prev&&F.call(ne,"finallyLoc")&&this.prev<ne.finallyLoc){var oe=ne;break}}oe&&(X==="break"||X==="continue")&&oe.tryLoc<=ie&&ie<=oe.finallyLoc&&(oe=null);var ce=oe?oe.completion:{};return ce.type=X,ce.arg=ie,oe?(this.method="next",this.next=oe.finallyLoc,D):this.complete(ce)},complete:function(X,ie){if(X.type==="throw")throw X.arg;return X.type==="break"||X.type==="continue"?this.next=X.arg:X.type==="return"?(this.rval=this.arg=X.arg,this.method="return",this.next="end"):X.type==="normal"&&ie&&(this.next=ie),D},finish:function(X){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var re=this.tryEntries[ie];if(re.finallyLoc===X)return this.complete(re.completion,re.afterLoc),Ee(re),D}},catch:function(X){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var re=this.tryEntries[ie];if(re.tryLoc===X){var ne=re.completion;if(ne.type==="throw"){var oe=ne.arg;Ee(re)}return oe}}throw new Error("illegal catch attempt")},delegateYield:function(X,ie,re){return this.delegate={iterator:xe(X),resultName:ie,nextLoc:re},this.method==="next"&&(this.arg=void 0),D}},z}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(regeneratorRuntime$1);var runtime=regeneratorRuntime$1.exports(),regenerator=runtime;try{regeneratorRuntime=runtime}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}var asyncToGenerator={exports:{}};(function(B){function w(z,U,F,j,q,G,W){try{var Q=z[G](W),Y=Q.value}catch(J){F(J);return}Q.done?U(Y):Promise.resolve(Y).then(j,q)}function O(z){return function(){var U=this,F=arguments;return new Promise(function(j,q){var G=z.apply(U,F);function W(Y){w(G,j,q,W,Q,"next",Y)}function Q(Y){w(G,j,q,W,Q,"throw",Y)}W(void 0)})}}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(asyncToGenerator);var axios$3={exports:{}},bind$2=function(w,O){return function(){for(var U=new Array(arguments.length),F=0;F<U.length;F++)U[F]=arguments[F];return w.apply(O,U)}},bind$1=bind$2,toString=Object.prototype.toString;function isArray(B){return toString.call(B)==="[object Array]"}function isUndefined(B){return typeof B=="undefined"}function isBuffer(B){return B!==null&&!isUndefined(B)&&B.constructor!==null&&!isUndefined(B.constructor)&&typeof B.constructor.isBuffer=="function"&&B.constructor.isBuffer(B)}function isArrayBuffer(B){return toString.call(B)==="[object ArrayBuffer]"}function isFormData(B){return typeof FormData!="undefined"&&B instanceof FormData}function isArrayBufferView(B){var w;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?w=ArrayBuffer.isView(B):w=B&&B.buffer&&B.buffer instanceof ArrayBuffer,w}function isString(B){return typeof B=="string"}function isNumber(B){return typeof B=="number"}function isObject(B){return B!==null&&typeof B=="object"}function isPlainObject(B){if(toString.call(B)!=="[object Object]")return!1;var w=Object.getPrototypeOf(B);return w===null||w===Object.prototype}function isDate(B){return toString.call(B)==="[object Date]"}function isFile(B){return toString.call(B)==="[object File]"}function isBlob(B){return toString.call(B)==="[object Blob]"}function isFunction(B){return toString.call(B)==="[object Function]"}function isStream(B){return isObject(B)&&isFunction(B.pipe)}function isURLSearchParams(B){return typeof URLSearchParams!="undefined"&&B instanceof URLSearchParams}function trim(B){return B.trim?B.trim():B.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(B,w){if(!(B===null||typeof B=="undefined"))if(typeof B!="object"&&(B=[B]),isArray(B))for(var O=0,z=B.length;O<z;O++)w.call(null,B[O],O,B);else for(var U in B)Object.prototype.hasOwnProperty.call(B,U)&&w.call(null,B[U],U,B)}function merge(){var B={};function w(U,F){isPlainObject(B[F])&&isPlainObject(U)?B[F]=merge(B[F],U):isPlainObject(U)?B[F]=merge({},U):isArray(U)?B[F]=U.slice():B[F]=U}for(var O=0,z=arguments.length;O<z;O++)forEach(arguments[O],w);return B}function extend(B,w,O){return forEach(w,function(U,F){O&&typeof U=="function"?B[F]=bind$1(U,O):B[F]=U}),B}function stripBOM(B){return B.charCodeAt(0)===65279&&(B=B.slice(1)),B}var utils$d={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM},utils$c=utils$d;function encode(B){return encodeURIComponent(B).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function(w,O,z){if(!O)return w;var U;if(z)U=z(O);else if(utils$c.isURLSearchParams(O))U=O.toString();else{var F=[];utils$c.forEach(O,function(G,W){G===null||typeof G=="undefined"||(utils$c.isArray(G)?W=W+"[]":G=[G],utils$c.forEach(G,function(Y){utils$c.isDate(Y)?Y=Y.toISOString():utils$c.isObject(Y)&&(Y=JSON.stringify(Y)),F.push(encode(W)+"="+encode(Y))}))}),U=F.join("&")}if(U){var j=w.indexOf("#");j!==-1&&(w=w.slice(0,j)),w+=(w.indexOf("?")===-1?"?":"&")+U}return w},utils$b=utils$d;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function(w,O,z){return this.handlers.push({fulfilled:w,rejected:O,synchronous:z?z.synchronous:!1,runWhen:z?z.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function(w){this.handlers[w]&&(this.handlers[w]=null)};InterceptorManager$1.prototype.forEach=function(w){utils$b.forEach(this.handlers,function(z){z!==null&&w(z)})};var InterceptorManager_1=InterceptorManager$1,utils$a=utils$d,normalizeHeaderName$1=function(w,O){utils$a.forEach(w,function(U,F){F!==O&&F.toUpperCase()===O.toUpperCase()&&(w[O]=U,delete w[F])})},enhanceError$2=function(w,O,z,U,F){return w.config=O,z&&(w.code=z),w.request=U,w.response=F,w.isAxiosError=!0,w.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},w},enhanceError$1=enhanceError$2,createError$2=function(w,O,z,U,F){var j=new Error(w);return enhanceError$1(j,O,z,U,F)},createError$1=createError$2,settle$1=function(w,O,z){var U=z.config.validateStatus;!z.status||!U||U(z.status)?w(z):O(createError$1("Request failed with status code "+z.status,z.config,null,z.request,z))},utils$9=utils$d,cookies$1=utils$9.isStandardBrowserEnv()?function(){return{write:function(O,z,U,F,j,q){var G=[];G.push(O+"="+encodeURIComponent(z)),utils$9.isNumber(U)&&G.push("expires="+new Date(U).toGMTString()),utils$9.isString(F)&&G.push("path="+F),utils$9.isString(j)&&G.push("domain="+j),q===!0&&G.push("secure"),document.cookie=G.join("; ")},read:function(O){var z=document.cookie.match(new RegExp("(^|;\\s*)("+O+")=([^;]*)"));return z?decodeURIComponent(z[3]):null},remove:function(O){this.write(O,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function(w){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(w)},combineURLs$1=function(w,O){return O?w.replace(/\/+$/,"")+"/"+O.replace(/^\/+/,""):w},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function(w,O){return w&&!isAbsoluteURL(O)?combineURLs(w,O):O},utils$8=utils$d,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function(w){var O={},z,U,F;return w&&utils$8.forEach(w.split(`
`),function(q){if(F=q.indexOf(":"),z=utils$8.trim(q.substr(0,F)).toLowerCase(),U=utils$8.trim(q.substr(F+1)),z){if(O[z]&&ignoreDuplicateOf.indexOf(z)>=0)return;z==="set-cookie"?O[z]=(O[z]?O[z]:[]).concat([U]):O[z]=O[z]?O[z]+", "+U:U}}),O},utils$7=utils$d,isURLSameOrigin$1=utils$7.isStandardBrowserEnv()?function(){var w=/(msie|trident)/i.test(navigator.userAgent),O=document.createElement("a"),z;function U(F){var j=F;return w&&(O.setAttribute("href",j),j=O.href),O.setAttribute("href",j),{href:O.href,protocol:O.protocol?O.protocol.replace(/:$/,""):"",host:O.host,search:O.search?O.search.replace(/^\?/,""):"",hash:O.hash?O.hash.replace(/^#/,""):"",hostname:O.hostname,port:O.port,pathname:O.pathname.charAt(0)==="/"?O.pathname:"/"+O.pathname}}return z=U(window.location.href),function(j){var q=utils$7.isString(j)?U(j):j;return q.protocol===z.protocol&&q.host===z.host}}():function(){return function(){return!0}}(),utils$6=utils$d,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,xhr=function(w){return new Promise(function(z,U){var F=w.data,j=w.headers,q=w.responseType;utils$6.isFormData(F)&&delete j["Content-Type"];var G=new XMLHttpRequest;if(w.auth){var W=w.auth.username||"",Q=w.auth.password?unescape(encodeURIComponent(w.auth.password)):"";j.Authorization="Basic "+btoa(W+":"+Q)}var Y=buildFullPath(w.baseURL,w.url);G.open(w.method.toUpperCase(),buildURL$1(Y,w.params,w.paramsSerializer),!0),G.timeout=w.timeout;function J(){if(!!G){var se="getAllResponseHeaders"in G?parseHeaders(G.getAllResponseHeaders()):null,te=!q||q==="text"||q==="json"?G.responseText:G.response,de={data:te,status:G.status,statusText:G.statusText,headers:se,config:w,request:G};settle(z,U,de),G=null}}if("onloadend"in G?G.onloadend=J:G.onreadystatechange=function(){!G||G.readyState!==4||G.status===0&&!(G.responseURL&&G.responseURL.indexOf("file:")===0)||setTimeout(J)},G.onabort=function(){!G||(U(createError("Request aborted",w,"ECONNABORTED",G)),G=null)},G.onerror=function(){U(createError("Network Error",w,null,G)),G=null},G.ontimeout=function(){var te="timeout of "+w.timeout+"ms exceeded";w.timeoutErrorMessage&&(te=w.timeoutErrorMessage),U(createError(te,w,w.transitional&&w.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",G)),G=null},utils$6.isStandardBrowserEnv()){var D=(w.withCredentials||isURLSameOrigin(Y))&&w.xsrfCookieName?cookies.read(w.xsrfCookieName):void 0;D&&(j[w.xsrfHeaderName]=D)}"setRequestHeader"in G&&utils$6.forEach(j,function(te,de){typeof F=="undefined"&&de.toLowerCase()==="content-type"?delete j[de]:G.setRequestHeader(de,te)}),utils$6.isUndefined(w.withCredentials)||(G.withCredentials=!!w.withCredentials),q&&q!=="json"&&(G.responseType=w.responseType),typeof w.onDownloadProgress=="function"&&G.addEventListener("progress",w.onDownloadProgress),typeof w.onUploadProgress=="function"&&G.upload&&G.upload.addEventListener("progress",w.onUploadProgress),w.cancelToken&&w.cancelToken.promise.then(function(te){!G||(G.abort(),U(te),G=null)}),F||(F=null),G.send(F)})},utils$5=utils$d,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(B,w){!utils$5.isUndefined(B)&&utils$5.isUndefined(B["Content-Type"])&&(B["Content-Type"]=w)}function getDefaultAdapter(){var B;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(B=xhr),B}function stringifySafely(B,w,O){if(utils$5.isString(B))try{return(w||JSON.parse)(B),utils$5.trim(B)}catch(z){if(z.name!=="SyntaxError")throw z}return(O||JSON.stringify)(B)}var defaults$3={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter(),transformRequest:[function(w,O){return normalizeHeaderName(O,"Accept"),normalizeHeaderName(O,"Content-Type"),utils$5.isFormData(w)||utils$5.isArrayBuffer(w)||utils$5.isBuffer(w)||utils$5.isStream(w)||utils$5.isFile(w)||utils$5.isBlob(w)?w:utils$5.isArrayBufferView(w)?w.buffer:utils$5.isURLSearchParams(w)?(setContentTypeIfUnset(O,"application/x-www-form-urlencoded;charset=utf-8"),w.toString()):utils$5.isObject(w)||O&&O["Content-Type"]==="application/json"?(setContentTypeIfUnset(O,"application/json"),stringifySafely(w)):w}],transformResponse:[function(w){var O=this.transitional,z=O&&O.silentJSONParsing,U=O&&O.forcedJSONParsing,F=!z&&this.responseType==="json";if(F||U&&utils$5.isString(w)&&w.length)try{return JSON.parse(w)}catch(j){if(F)throw j.name==="SyntaxError"?enhanceError(j,this,"E_JSON_PARSE"):j}return w}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(w){return w>=200&&w<300}};defaults$3.headers={common:{Accept:"application/json, text/plain, */*"}};utils$5.forEach(["delete","get","head"],function(w){defaults$3.headers[w]={}});utils$5.forEach(["post","put","patch"],function(w){defaults$3.headers[w]=utils$5.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$4=utils$d,defaults$2=defaults_1,transformData$1=function(w,O,z){var U=this||defaults$2;return utils$4.forEach(z,function(j){w=j.call(U,w,O)}),w},isCancel$1=function(w){return!!(w&&w.__CANCEL__)},utils$3=utils$d,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1;function throwIfCancellationRequested(B){B.cancelToken&&B.cancelToken.throwIfRequested()}var dispatchRequest$1=function(w){throwIfCancellationRequested(w),w.headers=w.headers||{},w.data=transformData.call(w,w.data,w.headers,w.transformRequest),w.headers=utils$3.merge(w.headers.common||{},w.headers[w.method]||{},w.headers),utils$3.forEach(["delete","get","head","post","put","patch","common"],function(U){delete w.headers[U]});var O=w.adapter||defaults$1.adapter;return O(w).then(function(U){return throwIfCancellationRequested(w),U.data=transformData.call(w,U.data,U.headers,w.transformResponse),U},function(U){return isCancel(U)||(throwIfCancellationRequested(w),U&&U.response&&(U.response.data=transformData.call(w,U.response.data,U.response.headers,w.transformResponse))),Promise.reject(U)})},utils$2=utils$d,mergeConfig$2=function(w,O){O=O||{};var z={},U=["url","method","data"],F=["headers","auth","proxy","params"],j=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],q=["validateStatus"];function G(J,D){return utils$2.isPlainObject(J)&&utils$2.isPlainObject(D)?utils$2.merge(J,D):utils$2.isPlainObject(D)?utils$2.merge({},D):utils$2.isArray(D)?D.slice():D}function W(J){utils$2.isUndefined(O[J])?utils$2.isUndefined(w[J])||(z[J]=G(void 0,w[J])):z[J]=G(w[J],O[J])}utils$2.forEach(U,function(D){utils$2.isUndefined(O[D])||(z[D]=G(void 0,O[D]))}),utils$2.forEach(F,W),utils$2.forEach(j,function(D){utils$2.isUndefined(O[D])?utils$2.isUndefined(w[D])||(z[D]=G(void 0,w[D])):z[D]=G(void 0,O[D])}),utils$2.forEach(q,function(D){D in O?z[D]=G(w[D],O[D]):D in w&&(z[D]=G(void 0,w[D]))});var Q=U.concat(F).concat(j).concat(q),Y=Object.keys(w).concat(Object.keys(O)).filter(function(D){return Q.indexOf(D)===-1});return utils$2.forEach(Y,W),z};const name="axios",version="0.21.4",description="Promise based HTTP client for the browser and node.js",main="index.js",scripts={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository={type:"git",url:"https://github.com/axios/axios.git"},keywords=["xhr","http","ajax","promise","node"],author="Matt Zabriskie",license="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0={name,version,description,main,scripts,repository,keywords,author,license,bugs,homepage,devDependencies,browser,jsdelivr,unpkg,typings,dependencies,bundlesize},pkg=require$$0,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(B,w){validators$1[B]=function(z){return typeof z===B||"a"+(w<1?"n ":" ")+B}});var deprecatedWarnings={},currentVerArr=pkg.version.split(".");function isOlderVersion(B,w){for(var O=w?w.split("."):currentVerArr,z=B.split("."),U=0;U<3;U++){if(O[U]>z[U])return!0;if(O[U]<z[U])return!1}return!1}validators$1.transitional=function(w,O,z){var U=O&&isOlderVersion(O);function F(j,q){return"[Axios v"+pkg.version+"] Transitional option '"+j+"'"+q+(z?". "+z:"")}return function(j,q,G){if(w===!1)throw new Error(F(q," has been removed in "+O));return U&&!deprecatedWarnings[q]&&(deprecatedWarnings[q]=!0,console.warn(F(q," has been deprecated since v"+O+" and will be removed in the near future"))),w?w(j,q,G):!0}};function assertOptions(B,w,O){if(typeof B!="object")throw new TypeError("options must be an object");for(var z=Object.keys(B),U=z.length;U-- >0;){var F=z[U],j=w[F];if(j){var q=B[F],G=q===void 0||j(q,F,B);if(G!==!0)throw new TypeError("option "+F+" must be "+G);continue}if(O!==!0)throw Error("Unknown option "+F)}}var validator$1={isOlderVersion,assertOptions,validators:validators$1},utils$1=utils$d,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(B){this.defaults=B,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function(w){typeof w=="string"?(w=arguments[1]||{},w.url=arguments[0]):w=w||{},w=mergeConfig$1(this.defaults,w),w.method?w.method=w.method.toLowerCase():this.defaults.method?w.method=this.defaults.method.toLowerCase():w.method="get";var O=w.transitional;O!==void 0&&validator.assertOptions(O,{silentJSONParsing:validators.transitional(validators.boolean,"1.0.0"),forcedJSONParsing:validators.transitional(validators.boolean,"1.0.0"),clarifyTimeoutError:validators.transitional(validators.boolean,"1.0.0")},!1);var z=[],U=!0;this.interceptors.request.forEach(function(J){typeof J.runWhen=="function"&&J.runWhen(w)===!1||(U=U&&J.synchronous,z.unshift(J.fulfilled,J.rejected))});var F=[];this.interceptors.response.forEach(function(J){F.push(J.fulfilled,J.rejected)});var j;if(!U){var q=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(q,z),q=q.concat(F),j=Promise.resolve(w);q.length;)j=j.then(q.shift(),q.shift());return j}for(var G=w;z.length;){var W=z.shift(),Q=z.shift();try{G=W(G)}catch(Y){Q(Y);break}}try{j=dispatchRequest(G)}catch(Y){return Promise.reject(Y)}for(;F.length;)j=j.then(F.shift(),F.shift());return j};Axios$1.prototype.getUri=function(w){return w=mergeConfig$1(this.defaults,w),buildURL(w.url,w.params,w.paramsSerializer).replace(/^\?/,"")};utils$1.forEach(["delete","get","head","options"],function(w){Axios$1.prototype[w]=function(O,z){return this.request(mergeConfig$1(z||{},{method:w,url:O,data:(z||{}).data}))}});utils$1.forEach(["post","put","patch"],function(w){Axios$1.prototype[w]=function(O,z,U){return this.request(mergeConfig$1(U||{},{method:w,url:O,data:z}))}});var Axios_1=Axios$1;function Cancel$1(B){this.message=B}Cancel$1.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$1.prototype.__CANCEL__=!0;var Cancel_1=Cancel$1,Cancel=Cancel_1;function CancelToken(B){if(typeof B!="function")throw new TypeError("executor must be a function.");var w;this.promise=new Promise(function(U){w=U});var O=this;B(function(U){O.reason||(O.reason=new Cancel(U),w(O.reason))})}CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken.source=function(){var w,O=new CancelToken(function(U){w=U});return{token:O,cancel:w}};var CancelToken_1=CancelToken,spread=function(w){return function(z){return w.apply(null,z)}},isAxiosError=function(w){return typeof w=="object"&&w.isAxiosError===!0},utils=utils$d,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(B){var w=new Axios(B),O=bind(Axios.prototype.request,w);return utils.extend(O,Axios.prototype,w),utils.extend(O,w),O}var axios$2=createInstance(defaults);axios$2.Axios=Axios;axios$2.create=function(w){return createInstance(mergeConfig(axios$2.defaults,w))};axios$2.Cancel=Cancel_1;axios$2.CancelToken=CancelToken_1;axios$2.isCancel=isCancel$1;axios$2.all=function(w){return Promise.all(w)};axios$2.spread=spread;axios$2.isAxiosError=isAxiosError;axios$3.exports=axios$2;axios$3.exports.default=axios$2;var axios$1=axios$3.exports,_objectWithoutProperties=objectWithoutProperties.exports,_toConsumableArray=toConsumableArray.exports,_typeof$1=_typeof$2.exports,_defineProperty=defineProperty.exports,_classCallCheck=classCallCheck.exports,_createClass=createClass.exports,_regeneratorRuntime=regenerator,_asyncToGenerator=asyncToGenerator.exports,axios=axios$1;function _interopDefaultLegacy(B){return B&&typeof B=="object"&&"default"in B?B:{default:B}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof$1),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios),Storage=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"set",value:function(w,O,z){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;var U,F="";if(U=this.commerce.options.config&&this.commerce.options.config.cookie_path!==void 0?this.commerce.options.config.cookie_path:"/",z){var j=new Date;j.setTime(j.getTime()+24*z*60*60*1e3),F="; expires="+j.toUTCString()}return document.cookie=w+"="+O+F+"; path="+U}},{key:"get",value:function(w){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;w+="=";for(var O=0,z=Array.from(document.cookie.split(";"));O<z.length;O++){for(var U=z[O];U.charAt(0)===" ";)U=U.substring(1,U.length);if(U.indexOf(w)===0)return U.substring(w.length,U.length)}return null}},{key:"remove",value:function(w){return this.set(w,"",-1)}}]),B}();function ownKeys(B,w){var O=Object.keys(B);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(B);w&&(z=z.filter(function(U){return Object.getOwnPropertyDescriptor(B,U).enumerable})),O.push.apply(O,z)}return O}function _objectSpread(B){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?ownKeys(O,!0).forEach(function(z){_defineProperty__default.default(B,z,O[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(O)):ownKeys(O).forEach(function(z){Object.defineProperty(B,z,Object.getOwnPropertyDescriptor(O,z))})}return B}var Cart=function(){function B(O){_classCallCheck__default.default(this,B),this.commerce=O,this.cartId=null}var w;return _createClass__default.default(B,[{key:"refresh",value:function(){var O=this;return this.commerce.request("carts").then(function(z){var U=z.id;return O.commerce.storage.set("commercejs_cart_id",U,O.commerce.options.cartLifetime),O.cartId=U,z})}},{key:"id",value:function(){if(this.cartId!==null)return this.cartId;var O=this.commerce.storage.get("commercejs_cart_id");return typeof O=="string"&&O.length?O:null}},{key:"request",value:(w=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function O(){var z,U,F,j,q,G=this,W=arguments;return _regeneratorRuntime__default.default.wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:if(z=W.length>0&&W[0]!==void 0?W[0]:"",U=W.length>1&&W[1]!==void 0?W[1]:"get",F=W.length>2&&W[2]!==void 0?W[2]:null,j=W.length>3&&W[3]!==void 0&&W[3],q=typeof z=="string"&&z.length?"/".concat(z):"",this.id()){Q.next=8;break}return Q.next=8,this.refresh();case 8:return Q.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(q),U,F,j).catch(function(Y){if(Y.statusCode&&Y.statusCode===404)return G.refresh().then(function(){return G.commerce.request("carts/".concat(G.id()).concat(q),U,F,j)});throw Y}));case 9:case"end":return Q.stop()}},O,this)})),function(){return w.apply(this,arguments)})},{key:"add",value:function(O){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,F={};if(typeof U=="string"&&U.startsWith("vrnt"))F.variant_id=U;else if(U&&_typeof__default.default(U)==="object"){var j=Object.keys(U).every(function(W){return W.startsWith("vgrp")}),q=Object.values(U).every(function(W){return W.startsWith("optn")});if(!j||!q)throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");F.options=U}else if(U)throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");var G=_objectSpread({id:_typeof__default.default(O)==="object"?O.id:O,quantity:z},F);return this.request("","post",G)}},{key:"retrieve",value:function(){var O=this,z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return z&&(this.cartId=z),this.request().then(function(U){return O.cartId=U&&U.id||null,U})}},{key:"checkQuantity",value:function(O,z){return this.commerce.request("products/".concat(O)).then(function(U){return z<=U.quantity})}},{key:"remove",value:function(O){return this.request("items/".concat(O),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(O,z){return this.request("items/".concat(O),"put",z)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),B}(),Categories=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"list",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return typeof w=="function"?this.commerce.request("categories"):this.commerce.request("categories","get",w)}},{key:"retrieve",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("categories/".concat(w),"get",O)}}]),B}(),Checkout=function(){function Checkout(B){_classCallCheck__default.default(this,Checkout),this.commerce=B}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then(function(data){return eval(data.sift_js)})}},{key:"generateToken",value:function(B,w){return this.commerce.request("checkouts/".concat(B),"get",w)}},{key:"generateTokenFrom",value:function(B,w){if(!["product_id","cart","permalink"].includes(B))throw new Error('Cannot generate a token with unknown "'.concat(B,'" type'));return this.generateToken(w,{type:B})}},{key:"capture",value:function(B,w){var O=this;return this.commerce.request("checkouts/".concat(B),"post",w).then(function(z){return O.commerce.cart.refresh(),z})}},{key:"receipt",value:function(B){return this.commerce.request("checkouts/".concat(B,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/pay_what_you_want"),"get",w)}},{key:"fields",value:function(B){return this.commerce.request("checkouts/".concat(B,"/fields"))}},{key:"setTaxZone",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/helper/set_tax_zone"),"get",w)}},{key:"getLocationFromIP",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",O=w&&w.length?"?ip_address=".concat(w):"";return this.commerce.request("checkouts/".concat(B,"/helper/location_from_ip").concat(O))}},{key:"isFree",value:function(B){return this.commerce.request("checkouts/".concat(B,"/check/is_free"))}},{key:"checkVariant",value:function(B,w,O){return this.commerce.request("checkouts/".concat(B,"/check/").concat(w,"/variant"),"get",O)}},{key:"checkDiscount",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/discount"),"get",w)}},{key:"checkShippingOption",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/shipping"),"get",w)}},{key:"getShippingOptions",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/helper/shipping_options"),"get",w)}},{key:"checkQuantity",value:function(B,w,O){return this.commerce.request("checkouts/".concat(B,"/check/").concat(w,"/quantity"),"get",O)}},{key:"helperValidation",value:function(B){return this.commerce.request("checkouts/".concat(B,"/helper/validation"))}},{key:"getLive",value:function(B){return this.commerce.request("checkouts/".concat(B,"/live"))}},{key:"getToken",value:function(B){return this.commerce.request("checkouts/tokens/".concat(B))}},{key:"checkGiftcard",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/giftcard"),"get",w)}}]),Checkout}();function ownKeys$1(B,w){var O=Object.keys(B);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(B);w&&(z=z.filter(function(U){return Object.getOwnPropertyDescriptor(B,U).enumerable})),O.push.apply(O,z)}return O}function _objectSpread$1(B){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?ownKeys$1(O,!0).forEach(function(z){_defineProperty__default.default(B,z,O[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(O)):ownKeys$1(O).forEach(function(z){Object.defineProperty(B,z,Object.getOwnPropertyDescriptor(O,z))})}return B}var Customer=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w,this.data={}}return _createClass__default.default(B,[{key:"login",value:function(w,O){return this.commerce.request("customers/email-token","post",{email:w,base_url:O})}},{key:"getToken",value:function(w){var O=this,z=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:w}).then(function(U){return z&&(U.customer_id||U.jwt)&&(O.data={id:U.customer_id||null,token:U.jwt||null},window.localStorage.setItem("commercejs_customer_id",O.data.id),window.localStorage.setItem("commercejs_customer_token",O.data.token)),U})}},{key:"update",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(O,z),this._request("customers/".concat(O||this.id()),"PUT",w,{},z)}},{key:"getOrders",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this._assertArgsProvided(w,O);var U=_objectSpread$1({sortBy:"created_at",sortDirection:"desc"},z);return this._request("customers/".concat(w||this.id(),"/orders"),"get",U,{},O)}},{key:"getOrder",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(O,z),this._request("customers/".concat(O||this.id(),"/orders/").concat(w),"get",{},{},z)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return this.id()!==null&&this.token()!==null}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(w){if(this.data[w]&&this.data[w].length)return this.data[w];var O=window.localStorage.getItem("commercejs_customer_".concat(w));return typeof O=="string"&&O.length?O:null}},{key:"_request",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},F=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,j=F||this.token();return this.commerce.request(w,O,z,_objectSpread$1({"X-Authorization":void 0,Authorization:"Bearer ".concat(j)},U))}},{key:"_assertArgsProvided",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(w===null&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(O===null&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),B}(),Merchants=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),B}(),Products=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"list",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.commerce.request("products","get",w)}},{key:"retrieve",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("products/".concat(w),"get",O)}},{key:"getVariants",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.commerce.request("products/".concat(w,"/variants"),"get",O)}},{key:"getVariant",value:function(w,O){return this.commerce.request("products/".concat(w,"/variants/").concat(O),"get")}}]),B}(),Services=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(w){return this.commerce.request("services/locale/".concat(w,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(w,O){return this.commerce.request("services/locale/".concat(w,"/countries/").concat(O,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(w){return this.commerce.request("services/locale/".concat(w,"/subdivisions"))}}]),B}(),Features={Cart,Categories,Checkout,Customer,Merchants,Products,Services},consoleHelper=function(){var B,w,O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"black",z=arguments.length>1?arguments[1]:void 0,U=arguments.length>2?arguments[2]:void 0,F=arguments.length>3?arguments[3]:void 0,j=!1;switch(O){case"success":O="#488f5a",B="\u2705   ";break;case"info":O="DodgerBlue",B="";break;case"error":O="rgba(244, 67, 54, 1)",F.error.type==="validation"||F.error.type==="unprocessable_entity"?(B="\u{1F6AB} Validation/missing fields",z=""):B="\u274C HTTP ERROR ",j=!0;break;case"warning":O="rgba(208, 154, 35, 1)",B="\u26A0\uFE0F  "}return j===!0?(console.log("%c"+B+z,"color:"+O+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),_typeof__default.default(F.error.errors)==="object"?(w=F.error.errors,void Object.keys(w).forEach(function(q,G){Object.values(w[q]).forEach(function(W){console.log("%c"+q+": %c"+W,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")})})):console.log("%c"+F.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")):_typeof__default.default(O)==="object"?(console.log("%c"+z,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(O)):(console.log("%c"+B+z,"color:"+O+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),void(U&&console.log("%c"+U,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")))},debuggerOnNotice=function(){typeof window!="undefined"&&(console.log(`%c\r
 \r
                           Che         EcC\r
                         c....c2    2c....:C\r
                       c........c2   2c.....:C\r
                     c............c2   2c.....:C\r
                   c................c2   2c.....:C\r
                 c....................c2   2c.....:C\r
               c........................c2   2c.....:C\r
             c............................c2   2c.....:C\r
           c.......:E2  2c..................c2   2c.....:C\r
         c........h  $$   2c..................c2   2c.....:C\r
       c.........:C  $cc$  E....................c2   2c.....:C\r
     c............h    $$  c......................c2   2c.....:C\r
   c...............:E    E:.........................c2   2c.....:C\r
   E............................:C c..................h2   2c...:C\r
     E........................:C     c..................h2   2hC\r
       E....................:C         c..................h2\r
         E................:C             c................:C\r
           E............:C                 c............:C\r
             E........:C                     c........:C\r
               E....:C                         c....:C\r
                 EcC                             EcC\r
 \r
 \r
 \r
`,"font-family: Courier New, Courier, monospace; color: #788ba4; font-weight:bold; font-size: 11px;"),console.log("%cCommerce.js console debugger is on!  \u{1F389}","text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #488f5a; line-height:28px; font-size: 14px"),console.log(`%c\u{1F4AC}   Need some help? Join our Slack channel - http://slack.commercejs.com \r
`,"text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px"))};function ownKeys$2(B,w){var O=Object.keys(B);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(B);w&&(z=z.filter(function(U){return Object.getOwnPropertyDescriptor(B,U).enumerable})),O.push.apply(O,z)}return O}function _objectSpread$2(B){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?ownKeys$2(O,!0).forEach(function(z){_defineProperty__default.default(B,z,O[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(O)):ownKeys$2(O).forEach(function(z){Object.defineProperty(B,z,Object.getOwnPropertyDescriptor(O,z))})}return B}var defaultEventCallback=function(B){var w=new CustomEvent("Commercejs.".concat(B),{bubbles:!1,cancelable:!1});return window.dispatchEvent(w)},Commerce=function(){function B(w){var O=arguments.length>1&&arguments[1]!==void 0&&arguments[1],z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_classCallCheck__default.default(this,B),this.options=_objectSpread$2(_objectSpread$2({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback,disableStorage:!1,cartLifetime:30,allowSecretKey:!1},z),{},{apiKey:w,debug:O}),typeof w!="string"||w.length===0)throw new Error("\u26A0\uFE0F Invalid public key given to Commerce.js client");if(!z.allowSecretKey&&w.toLowerCase().substring(0,3)==="sk_")throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");if(this.options.cartLifetime<=0||this.options.cartLifetime>30)throw new Error("cartLifetime configuration option must be between 1 and 30 days");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),O&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(B,[{key:"error",value:function(w){if(this.consoleHelper&&this.options.debug){var O=w.response,z="[".concat(O.status,"] Type: ").concat(O.statusText),U=typeof O.data=="string"?O.data:O.statusText;return this.consoleHelper("error",z,U,O.data)}}},{key:"request",value:function(w){var O=this,z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},j=arguments.length>4&&arguments[4]!==void 0&&arguments[4],q={"X-Authorization":this.options.apiKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},G=z==="get"?U:null,W=z==="get"?null:U,Q=this.options.timeoutMs||6e4,Y=this.options.axiosConfig||{},J=this.options.url;J.substring(J.length-1)!=="/"&&(J+="/");var D=axios__default.default(_objectSpread$2(_objectSpread$2({url:w,method:z,baseURL:"".concat(J).concat(this.options.version,"/"),params:G,data:W,timeout:Q},Y),{},{headers:_objectSpread$2(_objectSpread$2(_objectSpread$2({},q),Y.headers),F)}));if(j)return D;var se=this.options.eventCallback;return D.then(function(te){if(O.consoleHelper&&O.options.debug&&_typeof__default.default(te.data._console)==="object"&&O.consoleHelper.apply(O,_toConsumableArray__default.default(te.data._console)),_typeof__default.default(te.data)!=="object"||Array.isArray(te.data))return te.data;var de=te.data,he=de._event,ue=_objectWithoutProperties__default.default(de,["_event"]);return typeof he=="string"&&typeof se=="function"&&se(he),ue}).catch(function(te){throw O.error(te),te.response?{message:"Unsuccessful response (".concat(te.response.status,": ").concat(te.response.statusText,") received"),statusCode:te.response.status,statusText:te.response.statusText,data:te.response.data,originalError:te}:te})}}]),B}(),lib=Commerce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=B=>w=>typeof w=="function"?((O,z)=>(customElements.define(O,z),z))(B,w):((O,z)=>{const{kind:U,elements:F}=z;return{kind:U,elements:F,finisher(j){customElements.define(O,j)}}})(B,w);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$2=(B,w)=>w.kind==="method"&&w.descriptor&&!("value"in w.descriptor)?{...w,finisher(O){O.createProperty(w.key,B)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:w.key,initializer(){typeof w.initializer=="function"&&(this[w.key]=w.initializer.call(this))},finisher(O){O.createProperty(w.key,B)}};function e$3(B){return(w,O)=>O!==void 0?((z,U,F)=>{U.constructor.createProperty(F,z)})(B,w,O):i$2(B,w)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;((n$4=window.HTMLSlotElement)===null||n$4===void 0?void 0:n$4.prototype.assignedElements)!=null;var configurable=!0;function bound(B,w,O){if(typeof(O==null?void 0:O.value)!="function")throw new TypeError(`Only methods can be decorated with @bound. <${w!=null?w:B.name}> is not a method!`);return{configurable,get(){const z=O.value.bind(this);return Object.defineProperty(this,w,{value:z,configurable,writable:!0}),z}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=window,e$2=t$1.ShadowRoot&&(t$1.ShadyCSS===void 0||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(w,O,z){if(this._$cssResult$=!0,z!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=O}get styleSheet(){let w=this.o;const O=this.t;if(e$2&&w===void 0){const z=O!==void 0&&O.length===1;z&&(w=n$3.get(O)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),z&&n$3.set(O,w))}return w}toString(){return this.cssText}}const r$2=B=>new o$3(typeof B=="string"?B:B+"",void 0,s$3),i$1=(B,...w)=>{const O=B.length===1?B[0]:w.reduce((z,U,F)=>z+(j=>{if(j._$cssResult$===!0)return j.cssText;if(typeof j=="number")return j;throw Error("Value passed to 'css' function must be a 'css' function result: "+j+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(U)+B[F+1],B[0]);return new o$3(O,B,s$3)},S$1=(B,w)=>{e$2?B.adoptedStyleSheets=w.map(O=>O instanceof CSSStyleSheet?O:O.styleSheet):w.forEach(O=>{const z=document.createElement("style"),U=t$1.litNonce;U!==void 0&&z.setAttribute("nonce",U),z.textContent=O.cssText,B.appendChild(z)})},c$1=e$2?B=>B:B=>B instanceof CSSStyleSheet?(w=>{let O="";for(const z of w.cssRules)O+=z.cssText;return r$2(O)})(B):B;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(B,w){switch(w){case Boolean:B=B?h$1:null;break;case Object:case Array:B=B==null?B:JSON.stringify(B)}return B},fromAttribute(B,w){let O=B;switch(w){case Boolean:O=B!==null;break;case Number:O=B===null?null:Number(B);break;case Object:case Array:try{O=JSON.parse(B)}catch{O=null}}return O}},a$1=(B,w)=>w!==B&&(w==w||B==B),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(w){var O;(O=this.h)!==null&&O!==void 0||(this.h=[]),this.h.push(w)}static get observedAttributes(){this.finalize();const w=[];return this.elementProperties.forEach((O,z)=>{const U=this._$Ep(z,O);U!==void 0&&(this._$Ev.set(U,z),w.push(U))}),w}static createProperty(w,O=l$3){if(O.state&&(O.attribute=!1),this.finalize(),this.elementProperties.set(w,O),!O.noAccessor&&!this.prototype.hasOwnProperty(w)){const z=typeof w=="symbol"?Symbol():"__"+w,U=this.getPropertyDescriptor(w,z,O);U!==void 0&&Object.defineProperty(this.prototype,w,U)}}static getPropertyDescriptor(w,O,z){return{get(){return this[O]},set(U){const F=this[w];this[O]=U,this.requestUpdate(w,F,z)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const w=Object.getPrototypeOf(this);if(w.finalize(),this.elementProperties=new Map(w.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const O=this.properties,z=[...Object.getOwnPropertyNames(O),...Object.getOwnPropertySymbols(O)];for(const U of z)this.createProperty(U,O[U])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(w){const O=[];if(Array.isArray(w)){const z=new Set(w.flat(1/0).reverse());for(const U of z)O.unshift(c$1(U))}else w!==void 0&&O.push(c$1(w));return O}static _$Ep(w,O){const z=O.attribute;return z===!1?void 0:typeof z=="string"?z:typeof w=="string"?w.toLowerCase():void 0}u(){var w;this._$E_=new Promise(O=>this.enableUpdating=O),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(w=this.constructor.h)===null||w===void 0||w.forEach(O=>O(this))}addController(w){var O,z;((O=this._$ES)!==null&&O!==void 0?O:this._$ES=[]).push(w),this.renderRoot!==void 0&&this.isConnected&&((z=w.hostConnected)===null||z===void 0||z.call(w))}removeController(w){var O;(O=this._$ES)===null||O===void 0||O.splice(this._$ES.indexOf(w)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((w,O)=>{this.hasOwnProperty(O)&&(this._$Ei.set(O,this[O]),delete this[O])})}createRenderRoot(){var w;const O=(w=this.shadowRoot)!==null&&w!==void 0?w:this.attachShadow(this.constructor.shadowRootOptions);return S$1(O,this.constructor.elementStyles),O}connectedCallback(){var w;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(w=this._$ES)===null||w===void 0||w.forEach(O=>{var z;return(z=O.hostConnected)===null||z===void 0?void 0:z.call(O)})}enableUpdating(w){}disconnectedCallback(){var w;(w=this._$ES)===null||w===void 0||w.forEach(O=>{var z;return(z=O.hostDisconnected)===null||z===void 0?void 0:z.call(O)})}attributeChangedCallback(w,O,z){this._$AK(w,z)}_$EO(w,O,z=l$3){var U;const F=this.constructor._$Ep(w,z);if(F!==void 0&&z.reflect===!0){const j=(((U=z.converter)===null||U===void 0?void 0:U.toAttribute)!==void 0?z.converter:n$2).toAttribute(O,z.type);this._$El=w,j==null?this.removeAttribute(F):this.setAttribute(F,j),this._$El=null}}_$AK(w,O){var z;const U=this.constructor,F=U._$Ev.get(w);if(F!==void 0&&this._$El!==F){const j=U.getPropertyOptions(F),q=typeof j.converter=="function"?{fromAttribute:j.converter}:((z=j.converter)===null||z===void 0?void 0:z.fromAttribute)!==void 0?j.converter:n$2;this._$El=F,this[F]=q.fromAttribute(O,j.type),this._$El=null}}requestUpdate(w,O,z){let U=!0;w!==void 0&&(((z=z||this.constructor.getPropertyOptions(w)).hasChanged||a$1)(this[w],O)?(this._$AL.has(w)||this._$AL.set(w,O),z.reflect===!0&&this._$El!==w&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(w,z))):U=!1),!this.isUpdatePending&&U&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(O){Promise.reject(O)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var w;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((U,F)=>this[F]=U),this._$Ei=void 0);let O=!1;const z=this._$AL;try{O=this.shouldUpdate(z),O?(this.willUpdate(z),(w=this._$ES)===null||w===void 0||w.forEach(U=>{var F;return(F=U.hostUpdate)===null||F===void 0?void 0:F.call(U)}),this.update(z)):this._$Ek()}catch(U){throw O=!1,this._$Ek(),U}O&&this._$AE(z)}willUpdate(w){}_$AE(w){var O;(O=this._$ES)===null||O===void 0||O.forEach(z=>{var U;return(U=z.hostUpdated)===null||U===void 0?void 0:U.call(z)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(w){return!0}update(w){this._$EC!==void 0&&(this._$EC.forEach((O,z)=>this._$EO(z,this[z],O)),this._$EC=void 0),this._$Ek()}updated(w){}firstUpdated(w){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},o$2==null||o$2({ReactiveElement:d$1}),((s$2=e$1.reactiveElementVersions)!==null&&s$2!==void 0?s$2:e$1.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:B=>B}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$2=`<${n$1}>`,h=document,r=(B="")=>h.createComment(B),d=B=>B===null||typeof B!="object"&&typeof B!="function",u=Array.isArray,c=B=>u(B)||typeof(B==null?void 0:B[Symbol.iterator])=="function",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=B=>(w,...O)=>({_$litType$:B,strings:w,values:O}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=(B,w,O)=>{var z,U;const F=(z=O==null?void 0:O.renderBefore)!==null&&z!==void 0?z:w;let j=F._$litPart$;if(j===void 0){const q=(U=O==null?void 0:O.renderBefore)!==null&&U!==void 0?U:null;F._$litPart$=j=new S(w.insertBefore(r(),q),q,void 0,O!=null?O:{})}return j._$AI(B),j},E=h.createTreeWalker(h,129,null,!1),C=(B,w)=>{const O=B.length-1,z=[];let U,F=w===2?"<svg>":"",j=v;for(let G=0;G<O;G++){const W=B[G];let Q,Y,J=-1,D=0;for(;D<W.length&&(j.lastIndex=D,Y=j.exec(W),Y!==null);)D=j.lastIndex,j===v?Y[1]==="!--"?j=a:Y[1]!==void 0?j=f:Y[2]!==void 0?($.test(Y[2])&&(U=RegExp("</"+Y[2],"g")),j=_):Y[3]!==void 0&&(j=_):j===_?Y[0]===">"?(j=U!=null?U:v,J=-1):Y[1]===void 0?J=-2:(J=j.lastIndex-Y[2].length,Q=Y[1],j=Y[3]===void 0?_:Y[3]==='"'?p:m):j===p||j===m?j=_:j===a||j===f?j=v:(j=_,U=void 0);const se=j===_&&B[G+1].startsWith("/>")?" ":"";F+=j===v?W+l$2:J>=0?(z.push(Q),W.slice(0,J)+"$lit$"+W.slice(J)+o$1+se):W+o$1+(J===-2?(z.push(void 0),G):se)}const q=F+(B[O]||"<?>")+(w===2?"</svg>":"");if(!Array.isArray(B)||!B.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e!==void 0?e.createHTML(q):q,z]};class P{constructor({strings:w,_$litType$:O},z){let U;this.parts=[];let F=0,j=0;const q=w.length-1,G=this.parts,[W,Q]=C(w,O);if(this.el=P.createElement(W,z),E.currentNode=this.el.content,O===2){const Y=this.el.content,J=Y.firstChild;J.remove(),Y.append(...J.childNodes)}for(;(U=E.nextNode())!==null&&G.length<q;){if(U.nodeType===1){if(U.hasAttributes()){const Y=[];for(const J of U.getAttributeNames())if(J.endsWith("$lit$")||J.startsWith(o$1)){const D=Q[j++];if(Y.push(J),D!==void 0){const se=U.getAttribute(D.toLowerCase()+"$lit$").split(o$1),te=/([.?@])?(.*)/.exec(D);G.push({type:1,index:F,name:te[2],strings:se,ctor:te[1]==="."?R:te[1]==="?"?H:te[1]==="@"?I:M})}else G.push({type:6,index:F})}for(const J of Y)U.removeAttribute(J)}if($.test(U.tagName)){const Y=U.textContent.split(o$1),J=Y.length-1;if(J>0){U.textContent=s$1?s$1.emptyScript:"";for(let D=0;D<J;D++)U.append(Y[D],r()),E.nextNode(),G.push({type:2,index:++F});U.append(Y[J],r())}}}else if(U.nodeType===8)if(U.data===n$1)G.push({type:2,index:F});else{let Y=-1;for(;(Y=U.data.indexOf(o$1,Y+1))!==-1;)G.push({type:7,index:F}),Y+=o$1.length-1}F++}}static createElement(w,O){const z=h.createElement("template");return z.innerHTML=w,z}}function V(B,w,O=B,z){var U,F,j,q;if(w===x)return w;let G=z!==void 0?(U=O._$Cl)===null||U===void 0?void 0:U[z]:O._$Cu;const W=d(w)?void 0:w._$litDirective$;return(G==null?void 0:G.constructor)!==W&&((F=G==null?void 0:G._$AO)===null||F===void 0||F.call(G,!1),W===void 0?G=void 0:(G=new W(B),G._$AT(B,O,z)),z!==void 0?((j=(q=O)._$Cl)!==null&&j!==void 0?j:q._$Cl=[])[z]=G:O._$Cu=G),G!==void 0&&(w=V(B,G._$AS(B,w.values),G,z)),w}class N{constructor(w,O){this.v=[],this._$AN=void 0,this._$AD=w,this._$AM=O}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(w){var O;const{el:{content:z},parts:U}=this._$AD,F=((O=w==null?void 0:w.creationScope)!==null&&O!==void 0?O:h).importNode(z,!0);E.currentNode=F;let j=E.nextNode(),q=0,G=0,W=U[0];for(;W!==void 0;){if(q===W.index){let Q;W.type===2?Q=new S(j,j.nextSibling,this,w):W.type===1?Q=new W.ctor(j,W.name,W.strings,this,w):W.type===6&&(Q=new L(j,this,w)),this.v.push(Q),W=U[++G]}q!==(W==null?void 0:W.index)&&(j=E.nextNode(),q++)}return F}m(w){let O=0;for(const z of this.v)z!==void 0&&(z.strings!==void 0?(z._$AI(w,z,O),O+=z.strings.length-2):z._$AI(w[O])),O++}}class S{constructor(w,O,z,U){var F;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=w,this._$AB=O,this._$AM=z,this.options=U,this._$C_=(F=U==null?void 0:U.isConnected)===null||F===void 0||F}get _$AU(){var w,O;return(O=(w=this._$AM)===null||w===void 0?void 0:w._$AU)!==null&&O!==void 0?O:this._$C_}get parentNode(){let w=this._$AA.parentNode;const O=this._$AM;return O!==void 0&&w.nodeType===11&&(w=O.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,O=this){w=V(this,w,O),d(w)?w===b||w==null||w===""?(this._$AH!==b&&this._$AR(),this._$AH=b):w!==this._$AH&&w!==x&&this.$(w):w._$litType$!==void 0?this.T(w):w.nodeType!==void 0?this.k(w):c(w)?this.O(w):this.$(w)}S(w,O=this._$AB){return this._$AA.parentNode.insertBefore(w,O)}k(w){this._$AH!==w&&(this._$AR(),this._$AH=this.S(w))}$(w){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=w:this.k(h.createTextNode(w)),this._$AH=w}T(w){var O;const{values:z,_$litType$:U}=w,F=typeof U=="number"?this._$AC(w):(U.el===void 0&&(U.el=P.createElement(U.h,this.options)),U);if(((O=this._$AH)===null||O===void 0?void 0:O._$AD)===F)this._$AH.m(z);else{const j=new N(F,this),q=j.p(this.options);j.m(z),this.k(q),this._$AH=j}}_$AC(w){let O=T.get(w.strings);return O===void 0&&T.set(w.strings,O=new P(w)),O}O(w){u(this._$AH)||(this._$AH=[],this._$AR());const O=this._$AH;let z,U=0;for(const F of w)U===O.length?O.push(z=new S(this.S(r()),this.S(r()),this,this.options)):z=O[U],z._$AI(F),U++;U<O.length&&(this._$AR(z&&z._$AB.nextSibling,U),O.length=U)}_$AR(w=this._$AA.nextSibling,O){var z;for((z=this._$AP)===null||z===void 0||z.call(this,!1,!0,O);w&&w!==this._$AB;){const U=w.nextSibling;w.remove(),w=U}}setConnected(w){var O;this._$AM===void 0&&(this._$C_=w,(O=this._$AP)===null||O===void 0||O.call(this,w))}}class M{constructor(w,O,z,U,F){this.type=1,this._$AH=b,this._$AN=void 0,this.element=w,this.name=O,this._$AM=U,this.options=F,z.length>2||z[0]!==""||z[1]!==""?(this._$AH=Array(z.length-1).fill(new String),this.strings=z):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(w,O=this,z,U){const F=this.strings;let j=!1;if(F===void 0)w=V(this,w,O,0),j=!d(w)||w!==this._$AH&&w!==x,j&&(this._$AH=w);else{const q=w;let G,W;for(w=F[0],G=0;G<F.length-1;G++)W=V(this,q[z+G],O,G),W===x&&(W=this._$AH[G]),j||(j=!d(W)||W!==this._$AH[G]),W===b?w=b:w!==b&&(w+=(W!=null?W:"")+F[G+1]),this._$AH[G]=W}j&&!U&&this.P(w)}P(w){w===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w!=null?w:"")}}class R extends M{constructor(){super(...arguments),this.type=3}P(w){this.element[this.name]=w===b?void 0:w}}const k=s$1?s$1.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4}P(w){w&&w!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends M{constructor(w,O,z,U,F){super(w,O,z,U,F),this.type=5}_$AI(w,O=this){var z;if((w=(z=V(this,w,O,0))!==null&&z!==void 0?z:b)===x)return;const U=this._$AH,F=w===b&&U!==b||w.capture!==U.capture||w.once!==U.once||w.passive!==U.passive,j=w!==b&&(U===b||F);F&&this.element.removeEventListener(this.name,this,U),j&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){var O,z;typeof this._$AH=="function"?this._$AH.call((z=(O=this.options)===null||O===void 0?void 0:O.host)!==null&&z!==void 0?z:this.element,w):this._$AH.handleEvent(w)}}class L{constructor(w,O,z){this.element=w,this.type=6,this._$AN=void 0,this._$AM=O,this.options=z}get _$AU(){return this._$AM._$AU}_$AI(w){V(this,w)}}const Z=i.litHtmlPolyfillSupport;Z==null||Z(P,S),((t=i.litHtmlVersions)!==null&&t!==void 0?t:i.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var w,O;const z=super.createRenderRoot();return(w=(O=this.renderOptions).renderBefore)!==null&&w!==void 0||(O.renderBefore=z.firstChild),z}update(w){const O=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=A(O,this.renderRoot,this.renderOptions)}connectedCallback(){var w;super.connectedCallback(),(w=this._$Do)===null||w===void 0||w.setConnected(!0)}disconnectedCallback(){var w;super.disconnectedCallback(),(w=this._$Do)===null||w===void 0||w.setConnected(!1)}render(){return x}}s.finalized=!0,s._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;n==null||n({LitElement:s});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=B=>B!=null?B:b,allCapitalLetterGroups=/[A-ZÀ-ÖÙ-Ý]+/g,allLowercaseWords=/[a-zà-öù-ý]+/g;function kebabCase(B){const w=B.replace(allCapitalLetterGroups,O).match(allLowercaseWords);return w?w.join("-"):"";function O(z){return" "+(z.length>2?z.slice(0,-1)+" "+z.slice(-1):z).toLowerCase()}}function createCache(){const B={};return{has:w=>Object.hasOwnProperty.call(B,w),get:w=>B[w],set:(w,O)=>{B[w]=O}}}function memoize(B,w){const O=createCache();return(...z)=>{const U=B(...z);return O.has(U)||O.set(U,w(...z)),O.get(U)}}var identity=B=>B,dash=memoize(identity,kebabCase),elem=B=>w=>B.includes(w),isRepresentation=elem(["paymentMethod","source","token"]);async function throwBadResponse(B){const{ok:w,statusText:O}=B;if(!w)throw new Error(O);return B}function isReactiveElement(B){return"addInitializer"in B.constructor}var _ReadOnlyController=class{constructor(B){if(this.host=B,this.values=new Map,_ReadOnlyController.instances.has(B))return _ReadOnlyController.instances.get(B);B.addController(this),_ReadOnlyController.instances.set(B,this)}static for(B){return new _ReadOnlyController(B)}hostConnected(){}set(B,w){const O=this.values.get(B);this.values.set(B,w),isReactiveElement(this.host)?this.host.requestUpdate(B,O):this.host.requestUpdate()}},ReadOnlyController=_ReadOnlyController;ReadOnlyController.instances=new Map;function readonly(B,w){const O=B.constructor;O.addInitializer(z=>{const U=ReadOnlyController.for(z);Object.defineProperty(z.constructor.prototype,w,{enumerable:!0,configurable:!0,get(){return U.values.get(w)},set(F){U.values.has(w)||U.values.set(w,F)}}),O.createProperty(w,{...O.getPropertyOptions(w),noAccessor:!0})})}readonly.set=function(B,w){const O=ReadOnlyController.for(B);for(const[z,U]of Object.entries(w))O.set(z,U)};var ChangeEvent=class extends Event{constructor(B,w,O,z){super(`${z!=null?z:B.toLowerCase()}-changed`),this.key=B,this.oldValue=w,this.value=O,this.detail={value:O}}},_NotifyController=class{constructor(B){if(this.host=B,this.cache=new Map,_NotifyController.instances.has(B))return _NotifyController.instances.get(B);B.addController(this),_NotifyController.instances.set(B,this)}hostUpdated(){var B;for(const[w,O]of this.cache){const z=this.host[w],{attribute:U}=(B=this.host.constructor.getPropertyOptions(w))!=null?B:{},F=typeof U=="string"?U:null;this.cache.set(w,z),this.host.dispatchEvent(new ChangeEvent(w,O,z,F))}}},NotifyController=_NotifyController;NotifyController.instances=new Map;function notify(B,w){B.constructor.addInitializer(O=>{new NotifyController(O).cache.set(w,O[w])})}function wrap(B){return(w,O,z)=>{const U=z.value;return z.value=B(U),z}}var stripeMethod=wrap(function(B){const{name:w}=B;return async function(...O){if(!this.stripe)throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${w}.`);return B.call(this,...O).then(this.handleResponse)}});function throwResponseError(B){if(B.error)throw B.error;return B}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(B,w,O,z)=>{for(var U=z>1?void 0:z?__getOwnPropDesc(w,O):w,F=B.length-1,j;F>=0;F--)(j=B[F])&&(U=(z?j(w,O,U):j(U))||U);return z&&U&&__defProp(w,O,U),U},__accessCheck=(B,w,O)=>{if(!w.has(B))throw TypeError("Cannot "+O)},__privateGet=(B,w,O)=>(__accessCheck(B,w,"read from private field"),O?O.call(B):w.get(B)),__privateAdd=(B,w,O)=>{if(w.has(B))throw TypeError("Cannot add the same private member more than once");w instanceof WeakSet?w.add(B):w.set(B,O)},__privateSet=(B,w,O,z)=>(__accessCheck(B,w,"write to private field"),z?z.call(B,O):w.set(B,O),O);function getRandom(){return(Date.now()+Math.random()*1e3).toString(36).substr(0,8)}var BreadcrumbController=class{constructor(B,w){var O,z;this.host=B,this.options=w,this.initialized=!1,this.shadowHosts=[],this.host.addController(this),this.mountId=this.resetMountId(),this.slotName=(z=(O=this.options)==null?void 0:O.slotName)!=null?z:`breadcrumb-${getRandom()}`}get mount(){return document.getElementById(this.mountId)}hostUpdated(){var B;!this.initialized&&((B=this.options)==null?void 0:B.autoInitialize)!==!1&&this.init()}hostDisconnected(){this.destroyMountPoints()}resetMountId(){var w,O;return`${(O=(w=this.options)==null?void 0:w.mountPrefix)!=null?O:this.host.localName}-mount-point-${getRandom()}`}createMountPoint(){const B=document.createElement("div");return B.id=this.mountId,B.classList.add(`${this.host.tagName.toLowerCase()}-mount`),B}createSlot(B){const w=document.createElement("slot");return w.slot=B,w.name=B,w}appendTemplate(B,w=this.createMountPoint()){return B.appendChild(w),w}initMountPoints(){this.initShadowMountPoints()}destroyMountPoints(){for(const B of this.shadowHosts)for(const w of B.querySelectorAll(`[slot="${this.slotName}"][name="${this.slotName}"]`))w.remove();this.mount&&this.mount.remove(),this.mountId=this.resetMountId()}initShadowMountPoints(){let B=this.host;for(this.shadowHosts=[this.host];B=B.getRootNode().host;)this.shadowHosts.push(B);const{shadowHosts:w,slotName:O}=this,z=[...w],U=z.pop();if(!U.querySelector(`[slot="${O}"]`)){const j=document.createElement("div");j.slot=O,U.appendChild(j)}const F=U.querySelector(`[slot="${O}"]`);this.appendTemplate(F),z.forEach(j=>this.appendTemplate(j,this.createSlot(O)))}init(){this.destroyMountPoints(),this.initMountPoints(),this.initialized=!0}};function _typeof(B){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(w){return typeof w}:_typeof=function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},_typeof(B)}var V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function B(){for(var w=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),O=0;O<w.length;O++){var z=w[O];if(!!V3_URL_REGEX.test(z.src))return z}return null},injectScript=function B(w){var O=w&&!w.advancedFraudSignals?"?advancedFraudSignals=false":"",z=document.createElement("script");z.src="".concat(V3_URL).concat(O);var U=document.head||document.body;if(!U)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return U.appendChild(z),z},registerWrapper=function B(w,O){!w||!w._registerWrapper||w._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:O})},stripePromise=null,loadScript=function B(w){return stripePromise!==null||(stripePromise=new Promise(function(O,z){if(typeof window=="undefined"){O(null);return}if(window.Stripe&&w&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe){O(window.Stripe);return}try{var U=findScript();U&&w?console.warn(EXISTING_SCRIPT_MESSAGE):U||(U=injectScript(w)),U.addEventListener("load",function(){window.Stripe?O(window.Stripe):z(new Error("Stripe.js not available"))}),U.addEventListener("error",function(){z(new Error("Failed to load Stripe.js"))})}catch(F){z(F);return}})),stripePromise},initStripe=function B(w,O,z){if(w===null)return null;var U=w.apply(void 0,O);return registerWrapper(U,z),U},validateLoadParams=function B(w){var O=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(w),`
`);if(w===null||_typeof(w)!=="object")throw new Error(O);if(Object.keys(w).length===1&&typeof w.advancedFraudSignals=="boolean")return w;throw new Error(O)},loadParams,loadStripeCalled=!1,loadStripe=function B(){for(var w=arguments.length,O=new Array(w),z=0;z<w;z++)O[z]=arguments[z];loadStripeCalled=!0;var U=Date.now();return loadScript(loadParams).then(function(F){return initStripe(F,O,U)})};loadStripe.setLoadParameters=function(B){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(B)};var StripeElementsError=class extends Error{constructor(B,w){super(`<${B}>: ${w}`),this.originalMessage=w}};function isStripeElementsError(B){return!!B&&B instanceof StripeElementsError}var errorConverter={toAttribute:B=>B?isStripeElementsError(B)?B.originalMessage:B.message||"":null},StripeBase=class extends s{constructor(){super(...arguments),this.generate="source",this.showError=!1,this.locale="auto",this.paymentMethod=null,this.source=null,this.token=null,this.element=null,this.elements=null,this.error=null,this.focused=!1,this.ready=!1,this.stripe=null,this.theme="none",this.precomputedStyle=getComputedStyle(this),this.breadcrumb=new BreadcrumbController(this,{slotName:`${this.constructor.is}-slot`})}get stripeMountId(){return this.breadcrumb.mountId}get stripeMount(){return this.breadcrumb.mount}render(){const{error:B,showError:w}=this,{slotName:O}=this.breadcrumb,z=isStripeElementsError(B)?B.originalMessage:B==null?void 0:B.message;return y`
      <div id="stripe" part="stripe">
        <slot id="stripe-slot" name="${O}"></slot>
      </div>

      <output id="error"
          for="stripe"
          part="error"
          ?hidden="${!w}">
        ${l(z)}
      </output>
    `}updated(B){var w;(w=super.updated)==null||w.call(this,B),B.has("error")&&this.errorChanged(),B.has("publishableKey")&&this.init(),[...B.keys()].forEach(O=>this.representationChanged(O))}async disconnectedCallback(){var B;super.disconnectedCallback(),await((B=this.unmount)==null?void 0:B.call(this))}reset(){var B,w;(w=(B=this.element)==null?void 0:B.clear)==null||w.call(B),this.resetRepresentations(),readonly.set(this,{error:null})}blur(){var B;(B=this.element)==null||B.blur()}focus(){var B;(B=this.element)==null||B.focus()}createError(B){return new StripeElementsError(this.constructor.is,B)}errorChanged(){this.resetRepresentations(),this.fireError(this.error)}fire(B,w,O){this.dispatchEvent(new CustomEvent(B,{detail:w,...O}))}fireError(B){this.dispatchEvent(new ErrorEvent("error",{error:B}))}getCSSCustomPropertyValue(B){return this.precomputedStyle.getPropertyValue(B)}async handleResponse(B){const{error:w=null,paymentMethod:O=null,source:z=null,token:U=null}={...B};if(readonly.set(this,{error:w,paymentMethod:O,source:z,token:U}),await this.updateComplete,w)throw w;return B}initElement(){}async init(){await this.unmount(),await this.initStripe(),await this.initElement(),this.initElementListeners(),this.breadcrumb.init(),this.mount()}initElementListeners(){!this.element||(this.element.on("ready",this.onReady),this.element.on("focus",this.onFocus),this.element.on("blur",this.onBlur))}async initStripe(){const{publishableKey:B,stripeAccount:w,locale:O}=this;if(!B)readonly.set(this,{elements:null,element:null,stripe:null});else try{const z={stripeAccount:w,locale:O},U=window.Stripe?window.Stripe(B,z):await loadStripe(B,z),F=U==null?void 0:U.elements();readonly.set(this,{elements:F,error:null,stripe:U})}catch(z){console.warn(z);const U=this.createError("Stripe.js must be loaded first.");readonly.set(this,{elements:null,error:U,stripe:null})}finally{await this.updateComplete}}mount(){var B;if(!this.breadcrumb.mount)throw this.createError("Stripe Mount missing");(B=this.element)==null||B.mount(this.breadcrumb.mount)}async unmount(){var B,w;(w=(B=this.element)==null?void 0:B.unmount)==null||w.call(B),readonly.set(this,{element:null}),await this.updateComplete}async onBlur(){readonly.set(this,{focused:!1}),await this.updateComplete}async onFocus(){readonly.set(this,{focused:!0}),await this.updateComplete}async onReady(B){readonly.set(this,{ready:!0}),await this.updateComplete,this.fire("ready",B)}async postRepresentation(){const B=G=>readonly.set(this,{error:G}),w=G=>this.fire("success",G),O=this.token||void 0,z=this.source||void 0,U=this.paymentMethod||void 0,F=JSON.stringify({token:O,source:z,paymentMethod:U}),j={"Content-Type":"application/json"},q="POST";return fetch(this.action,{body:F,headers:j,method:q}).then(throwBadResponse).then(w).catch(B)}representationChanged(B){if(!isRepresentation(B))return;const w=this[B];!w||(this.fire(`${dash(B)}`,w),this.action&&this.postRepresentation())}resetRepresentations(){readonly.set(this,{paymentMethod:null,token:null,source:null})}};__decorateClass([e$3({type:String})],StripeBase.prototype,"action",2);__decorateClass([e$3({type:String,attribute:"client-secret"})],StripeBase.prototype,"clientSecret",2);__decorateClass([e$3({type:String})],StripeBase.prototype,"generate",2);__decorateClass([notify,e$3({type:String,attribute:"publishable-key",reflect:!0})],StripeBase.prototype,"publishableKey",2);__decorateClass([e$3({type:Boolean,attribute:"show-error",reflect:!0})],StripeBase.prototype,"showError",2);__decorateClass([e$3({type:String,attribute:"stripe-account"})],StripeBase.prototype,"stripeAccount",2);__decorateClass([e$3({type:String,attribute:"locale"})],StripeBase.prototype,"locale",2);__decorateClass([readonly,notify,e$3({type:Object,attribute:"payment-method"})],StripeBase.prototype,"paymentMethod",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"source",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"token",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"element",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"elements",2);__decorateClass([readonly,notify,e$3({type:Object,reflect:!0,converter:errorConverter})],StripeBase.prototype,"error",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"focused",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"ready",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"stripe",2);__decorateClass([e$3()],StripeBase.prototype,"theme",2);__decorateClass([e$3({attribute:"border-radius"})],StripeBase.prototype,"borderRadius",2);__decorateClass([e$3({attribute:"color-background"})],StripeBase.prototype,"colorBackground",2);__decorateClass([e$3({attribute:"color-danger"})],StripeBase.prototype,"colorDanger",2);__decorateClass([e$3({attribute:"color-primary"})],StripeBase.prototype,"colorPrimary",2);__decorateClass([e$3({attribute:"color-text"})],StripeBase.prototype,"colorText",2);__decorateClass([e$3({attribute:"font-family"})],StripeBase.prototype,"fontFamily",2);__decorateClass([e$3({attribute:"spacing-unit"})],StripeBase.prototype,"spacingUnit",2);__decorateClass([bound],StripeBase.prototype,"handleResponse",1);__decorateClass([bound],StripeBase.prototype,"onBlur",1);__decorateClass([bound],StripeBase.prototype,"onFocus",1);__decorateClass([bound],StripeBase.prototype,"onReady",1);var styles=i$1`[hidden] {
  display: none !important;
}

:host:not([hidden]) {
  display: block;
  box-sizing: border-box;
}

#error {
  font-family: sans-serif;
  font-size: 14px;
  padding-left: 42px;
  padding-bottom: 10px;
}
`,shared_default=styles,styles2=i$1`:host {
  min-width: var(--stripe-elements-width, 300px);
  min-height: var(--stripe-elements-height, 50px);
}

#stripe {
  box-sizing: border-box;
  border-radius: var(--stripe-elements-border-radius, 4px);
  border: var(--stripe-elements-border, 1px solid transparent);
  box-shadow: var(--stripe-elements-box-shadow, 0 1px 3px 0 #e6ebf1);
  transition: var(--stripe-elements-transition, box-shadow 150ms ease);
  min-width: var(--stripe-elements-width, 300px);
  padding: var(--stripe-elements-element-padding, 8px 12px);
  background: var(--stripe-elements-element-background, white);
}

:host([focused]) #stripe {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

:host([error]) #stripe {
  border-color: #fa755a;
}
`,stripe_elements_default=styles2,ALLOWED_STYLES=["color","fontFamily","fontSize","fontStyle","fontSmoothing","fontVariant","iconColor","lineHeight","letterSpacing","textDecoration","textShadow","textTransform"],SUB_STYLES=[":hover",":focus","::placeholder","::selection",":-webkit-autofill",":disabled"],StripeElements=class extends StripeBase{constructor(){super(...arguments),this.hideIcon=!1,this.hidePostalCode=!1,this.iconStyle="default",this.value={},this.brand=null,this.complete=!1,this.empty=!0,this.invalid=!1}async createPaymentMethod(B=this.getPaymentMethodData()){return this.stripe.createPaymentMethod(B)}async createSource(B=this.sourceData){return this.stripe.createSource(this.element,B)}async createToken(B=this.tokenData){return this.stripe.createToken(this.element,B)}isPotentiallyValid(){return!this.complete&&!this.empty&&!this.error||this.validate()}reset(){var B;super.reset(),(B=this.element)==null||B.clear()}async submit(){switch(this.generate){case"payment-method":return this.createPaymentMethod();case"source":return this.createSource();case"token":return this.createToken();default:{const B=this.createError(`cannot generate ${this.generate}`);throw readonly.set(this,{error:B}),await this.updateComplete,B}}}validate(){const{complete:B,empty:w,error:O}=this,z=!O&&B&&!w;return w&&!O&&readonly.set(this,{error:this.createError("Your card number is empty.")}),z}updateStyle(){var B;(B=this.element)==null||B.update({style:this.getStripeElementsStyles()})}getPaymentMethodData(){const B="card",{billingDetails:w,paymentMethodData:O}=this;return{billing_details:w,...O,type:B,card:this.element}}getStripeElementsStyles(){const B=U=>this.getCSSCustomPropertyValue(U)||void 0,w=["base","complete","empty","invalid"],O=U=>(F,j)=>{if(U.includes("-"))return F;const q=j.split(":").pop();return{...F,[j]:ALLOWED_STYLES.reduce(z(`${U}-${q}`),{})}},z=U=>(F,j)=>{const q=`--stripe-elements-${U}-${dash(j)}`;return{...F,[j]:B(q),...SUB_STYLES.reduce(O(U),{})}};return w.reduce((U,F)=>({...U,[F]:ALLOWED_STYLES.reduce(z(F),{})}),{})}async initElement(){if(!this.stripe)return;const{hidePostalCode:B,hideIcon:w,iconStyle:O,value:z}=this,U=this.getStripeElementsStyles();await this.updateComplete;const F=this.createElement({hideIcon:w,hidePostalCode:B,iconStyle:O,style:U,value:z});F.on("change",this.onChange),readonly.set(this,{element:F}),await this.updateComplete}createElement(B){return this.elements.create("card",B)}async onChange(B){const{brand:w,complete:O,empty:z,error:U=null}=B,F=!(U||!z&&!O);readonly.set(this,{brand:w,complete:O,empty:z,error:U,invalid:F}),await this.updateComplete,this.fire("change",B)}};StripeElements.is="stripe-elements";StripeElements.elementType="card";StripeElements.styles=[shared_default,stripe_elements_default];__decorateClass([e$3({type:Boolean,attribute:"hide-icon"})],StripeElements.prototype,"hideIcon",2);__decorateClass([e$3({type:Boolean,attribute:"hide-postal-code"})],StripeElements.prototype,"hidePostalCode",2);__decorateClass([e$3({type:String,attribute:"icon-style"})],StripeElements.prototype,"iconStyle",2);__decorateClass([e$3({type:Object})],StripeElements.prototype,"value",2);__decorateClass([notify,readonly,e$3({type:String})],StripeElements.prototype,"brand",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"complete",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"empty",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"invalid",2);__decorateClass([stripeMethod],StripeElements.prototype,"createPaymentMethod",1);__decorateClass([stripeMethod],StripeElements.prototype,"createSource",1);__decorateClass([stripeMethod],StripeElements.prototype,"createToken",1);__decorateClass([bound],StripeElements.prototype,"onChange",1);StripeElements=__decorateClass([e$4("stripe-elements")],StripeElements);var styles3=i$1`#stripe {
  box-sizing: border-box;
  min-width: var(--stripe-payment-request-element-min-width, 300px);
  padding: var(--stripe-payment-request-element-padding, 8px 12px);
  background: var(--stripe-payment-request-element-background, white);
}
`,stripe_payment_request_default=styles3;function isStripeDisplayItem(B){return B.tagName.toLowerCase()==="stripe-display-item"}function datasetToStripeDisplayItem({dataset:{amount:B,label:w,pending:O}}){return{label:w,amount:parseInt(B),...O!==void 0&&{pending:O==="true"}}}function datasetToStripeShippingOption({dataset:{amount:B,detail:w,...O}}){return{amount:parseInt(B),detail:w,...O}}function mapDataset(B){return isStripeDisplayItem(B)?datasetToStripeDisplayItem(B):datasetToStripeShippingOption(B)}var _displayItems,_shippingOptions,StripePaymentRequest=class extends StripeBase{constructor(){super(...arguments),this.canMakePayment=null,__privateAdd(this,_displayItems,void 0),this.paymentIntent=null,this.paymentRequest=null,this.pending=!1,__privateAdd(this,_shippingOptions,void 0),this.buttonType="default",this.buttonTheme="dark",this.complete=async(B,w)=>{const{error:O=null}={...B},z=O||w?"fail":"success";return B.complete(z),this.fire(z,B),w?{error:w}:B}}get displayItems(){const B=__privateGet(this,_displayItems);return Array.isArray(B)?B:this.parseDatasets("stripe-display-item")}set displayItems(B){const w=this.displayItems;__privateSet(this,_displayItems,B),this.requestUpdate("displayItems",w)}get shippingOptions(){const B=__privateGet(this,_shippingOptions);return Array.isArray(B)?B:this.parseDatasets("stripe-shipping-option")}set shippingOptions(B){const w=this.shippingOptions;__privateSet(this,_shippingOptions,B),this.requestUpdate("shippingOptions",w)}reset(){super.reset(),readonly.set(this,{paymentIntent:null})}updated(B){super.updated(B),B.has("generate")&&this.initPaymentRequestListeners(),B.has("amount")&&this.updatePaymentRequest()}getStripePaymentRequestOptions(){const{country:B,currency:w,displayItems:O,shippingOptions:z,requestShipping:U,requestPayerEmail:F,requestPayerName:j,requestPayerPhone:q,label:G="",amount:W=0}=this;return{country:B,currency:w,displayItems:O,requestPayerEmail:F,requestPayerName:j,requestPayerPhone:q,requestShipping:U,shippingOptions:z,total:{label:G,amount:W}}}async initElement(){await this.initPaymentRequest(),await this.initPaymentRequestListeners(),await this.initPaymentRequestButton()}async initPaymentRequest(){if(!this.stripe)return;const B=this.getStripePaymentRequestOptions(),w=this.stripe.paymentRequest(B),O=await w.canMakePayment();readonly.set(this,{paymentRequest:w,canMakePayment:O}),await this.updateComplete,this.canMakePayment||this.fire("unsupported")}async initPaymentRequestButton(){const{buttonTheme:B,buttonType:w,canMakePayment:O}=this;if(!O||!this.elements)return;const z="--stripe-payment-request-button-height",F={paymentRequestButton:{height:this.getCSSCustomPropertyValue(z)||"40px",theme:B,type:w}},j=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:F});readonly.set(this,{element:j}),await this.updateComplete}async initPaymentRequestListeners(){if(!!this.canMakePayment)switch(this.paymentRequest.on("click",this.updatePaymentRequest),this.paymentRequest.on("cancel",this.onCancel),this.paymentRequest.on("shippingaddresschange",this.onShippingaddresschange),this.paymentRequest.on("shippingoptionchange",this.onShippingoptionchange),this.generate){case"payment-method":this.paymentRequest.on("paymentmethod",this.onPaymentResponse);break;case"source":this.paymentRequest.on("source",this.onPaymentResponse);break;case"token":this.paymentRequest.on("token",this.onPaymentResponse);break}}async updatePaymentRequest(){if(!this.paymentRequest)return;const{currency:B,total:w,displayItems:O,shippingOptions:z}=this.getStripePaymentRequestOptions();this.paymentRequest.update({currency:B,total:w,displayItems:O,shippingOptions:z})}onCancel(){this.fire("cancel")}async onPaymentResponse(B){const{error:w=null,paymentMethod:O=null,source:z=null,token:U=null}={...B};readonly.set(this,{error:w,paymentMethod:O,source:z,token:U}),this.clientSecret&&!w?this.confirmPaymentIntent(B):this.complete(B)}async confirmPaymentIntent(B){var F;const w={payment_method:this.paymentMethod.id},O=await this.confirmCardPayment(w,{handleActions:!1}).then(({error:j})=>this.complete(B,j)).then(throwResponseError).then(()=>this.confirmCardPayment()).then(throwResponseError).catch(j=>({error:j})),{error:z=null}=O,U=(F=O.paymentIntent)!=null?F:null;readonly.set(this,{error:z,paymentIntent:U}),await this.updateComplete}async confirmCardPayment(B,w){return this.stripe.confirmCardPayment(this.clientSecret,B,w)}onShippingaddresschange(B){this.fire("shippingaddresschange",B)}onShippingoptionchange(B){this.fire("shippingoptionchange",B)}parseDatasets(B){const w=[...this.querySelectorAll(B)];return w.length?w.map(mapDataset):[]}};_displayItems=new WeakMap;_shippingOptions=new WeakMap;StripePaymentRequest.is="stripe-payment-request";StripePaymentRequest.styles=[shared_default,stripe_payment_request_default];__decorateClass([e$3({type:Number,reflect:!0})],StripePaymentRequest.prototype,"amount",2);__decorateClass([notify,readonly,e$3({type:Boolean,attribute:"can-make-payment",reflect:!0})],StripePaymentRequest.prototype,"canMakePayment",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"country",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"currency",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"displayItems",1);__decorateClass([e$3({type:String,reflect:!0})],StripePaymentRequest.prototype,"label",2);__decorateClass([notify,readonly,e$3({type:Object,attribute:"payment-intent"})],StripePaymentRequest.prototype,"paymentIntent",2);__decorateClass([readonly,e$3({type:Object,attribute:"payment-request"})],StripePaymentRequest.prototype,"paymentRequest",2);__decorateClass([e$3({type:Boolean,reflect:!0})],StripePaymentRequest.prototype,"pending",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-email"})],StripePaymentRequest.prototype,"requestPayerEmail",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-name"})],StripePaymentRequest.prototype,"requestPayerName",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-phone"})],StripePaymentRequest.prototype,"requestPayerPhone",2);__decorateClass([e$3({type:Boolean,attribute:"request-shipping"})],StripePaymentRequest.prototype,"requestShipping",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"shippingOptions",1);__decorateClass([e$3({type:String,attribute:"button-type"})],StripePaymentRequest.prototype,"buttonType",2);__decorateClass([e$3({type:String,attribute:"button-theme"})],StripePaymentRequest.prototype,"buttonTheme",2);__decorateClass([bound],StripePaymentRequest.prototype,"onCancel",1);__decorateClass([bound],StripePaymentRequest.prototype,"onPaymentResponse",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmPaymentIntent",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmCardPayment",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingaddresschange",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingoptionchange",1);StripePaymentRequest=__decorateClass([e$4("stripe-payment-request")],StripePaymentRequest);const VITE_CommerceKey$1="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey$1="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",commerce$1=new lib(`${VITE_CommerceKey$1}`,!0);var allProducts$1=[],currentShopProduct$1,shopPage=1,currentCart$1,cartEmpty$1=!0,selectedPSize$1="",countriesObj$1={},variantAbbr="",countriesAdded=!1,shippingMethodValue,shippingId="",card$1,stripeElements,pComplete;class mobileShop1 extends HTMLElement{constructor(){super();ae(this,"closeMobileShop",()=>{document.getElementById("mobileShop").style.display="none"});ae(this,"loadShop",async()=>{this.shadow.getElementById("LoadBG").style.display="grid";var O=this.shadow.getElementById("mb1");await commerce$1.products.list({limit:100,sortDirection:"desc"}).then(z=>allProducts$1.push(z.data)),allProducts$1[0].forEach(z=>{var U=document.createElement("div");U.setAttribute("class","productContainer"),U.setAttribute("id",z.id),this.shadow.getElementById("productEdition").addEventListener("click",this.toggleTerms),U.addEventListener("click",this.viewProduct),O.appendChild(U),U.innerHTML=`
    <img class="shopProducts" style="opacity:100%;" loading="lazy" src="${z.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${z.name}</p>
    <p class="pcProductPrice">${z.price.formatted_with_symbol}</p>
  </div>
    `,this.shadow.getElementById("LoadBG").style.display="none"}),commerce$1.cart.empty()});ae(this,"viewProduct",O=>{var z=O.target.parentElement.id;this.shadow.getElementById("scroll").style.display="block",currentShopProduct$1=allProducts$1[0].filter(j=>j.id.includes(`${z}`)),this.shadow.getElementById("mb2").style.display="block",shopPage=2,this.shadow.getElementById("pName").innerHTML=`
        ${currentShopProduct$1[0].name}`,currentShopProduct$1[0].categories.forEach(j=>{j.name==="\xC9"&&(this.shadow.getElementById("eSymbol1").style.display="block"),j.name==="S\xC9"&&(this.shadow.getElementById("eSymbol2").style.display="block")}),this.shadow.getElementById("pDesc").innerHTML=currentShopProduct$1[0].description,this.shadow.getElementById("proPrice").innerHTML=currentShopProduct$1[0].price.formatted_with_symbol,currentShopProduct$1[0].inventory.available===0&&(this.shadow.getElementById("archived").style.display="grid");var U=this.shadow.getElementById("allImages"),F=0;this.shadow.getElementById("mainImageCont").src=`${currentShopProduct$1[0].assets[0].url}`,currentShopProduct$1[0].assets.forEach(j=>{if(F<=3){var q=document.createElement("img");q.setAttribute("src",`${j.url}`),q.setAttribute("id",`${j.url}`),q.addEventListener("click",this.changeToMainPic),U.appendChild(q),F++}j.filename==="sizeChart.png"&&(this.shadow.getElementById("noti").innerHTML=`
                <img class="sizeChartImage" src="${j.url}"/>
              `,this.shadow.getElementById("pSizeGuide").addEventListener("click",this.noti1))}),this.checkSize()});ae(this,"checkSize",()=>{currentShopProduct$1[0].variant_groups[0].options.forEach(O=>{if(this.shadow.getElementById(`${O.name}`).style.opacity="100%",this.shadow.getElementById(`${O.name}`).style.cursor="pointer",this.shadow.getElementById(`${O.name}`).addEventListener("click",this.selectSize),O.name==="SingleSize"){var z=this.shadow.querySelectorAll(".sizeButtons");this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr",this.shadow.getElementById("sizesCont").style.justifyItems="end",z.forEach(U=>{U.id!="SingleSize"&&(U.style.display="none")}),this.shadow.getElementById("SingleSize").style.display="grid"}})});ae(this,"noti1",()=>{this.shadow.getElementById("noti").style.display="block",pComplete===!0?(this.shadow.getElementById("noti").addEventListener("click",this.return),pComplete=!1):this.shadow.getElementById("noti").addEventListener("click",this.closeNoti)});ae(this,"closeNoti",()=>{this.shadow.getElementById("noti").style.display="none",pComplete=!1});ae(this,"returnSize",()=>{var O=this.shadow.querySelectorAll(".sizeButtons");O.forEach(z=>{z.id!="SingleSize"&&(z.style.display="grid"),this.shadow.getElementById(z.id).style.opacity=".3"}),this.shadow.getElementById("SingleSize").style.display="none",this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr 1fr 1fr 1fr",this.shadow.getElementById("sizesCont").style.justifyItems="center"});ae(this,"changeToMainPic",O=>{var z=O.target.id;this.shadow.getElementById("mainImageCont").src=`${z}`});ae(this,"return",()=>{this.shadow.getElementById("main"),this.shadow.getElementById("mb1");var O=this.shadow.getElementById("mb2"),z=this.shadow.getElementById("mb3"),U=this.shadow.getElementById("checkoutInputs"),F=this.shadow.getElementById("shippingButton");switch(this.shadow.getElementById("mb4"),this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("archived").style.display="none",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("noti").style.display="none",shopPage){case 1:this.closeMobileShop();break;case 2:O.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("eSymbol1").style.display="none",this.shadow.getElementById("eSymbol2").style.display="none",this.returnSize(),shopPage=1;break;case 3:z.style.display="none",O.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.returnSize(),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",shopPage=1;break;case 4:U.style.display="none",F.innerHTML="SHIPPING & BILLING",F.removeEventListener("click",this.return),F.addEventListener("click",this.shipping),this.viewCart(),shopPage=3;break;case 5:z.style.display="none",U.style.display="none",O.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("noti").removeEventListener("click",this.return),this.returnSize(),selectedPSize$1="",shopPage=1,this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';break}});ae(this,"selectSize",O=>{var z=this.shadow.querySelectorAll(".sizeButtons");z.forEach(F=>{this.shadow.getElementById(F.id).style.backgroundColor="",this.shadow.getElementById(F.id).style.color=""}),O.target.style.opacity==="1"?(selectedPSize$1=O.target.id,this.shadow.getElementById("addItemButton").addEventListener("click",this.addToCart),O.target.style.color="white",O.target.style.backgroundColor="#ff002d",this.shadow.getElementById("addItemButton").innerHTML="ADD TO CART"):(selectedPSize$1="",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart));var U=document.getElementsByClassName("sizeButtons");for(let F=0;F<U.length;F++)U[F].style.color="#ff002d"});ae(this,"addToCart",async()=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="ADDING",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';var O=currentShopProduct$1[0].variant_groups[0].options.filter(z=>z.name.includes(`${selectedPSize$1}`));this.shadow.getElementById("LoadBG").style.display="grid",commerce$1.cart.retrieve().then(z=>{currentCart$1=z}).then(()=>{if(cartEmpty$1===!1){var z=currentCart$1.line_items.filter(U=>U.product_id===currentShopProduct$1[0].id);console.log(currentCart$1),console.log(currentShopProduct$1[0].id),console.log(z),currentShopProduct$1[0].inventory.available>0?commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:O[0].id}).then(()=>{cartEmpty$1=!1,commerce$1.cart.retrieve().then(U=>{currentCart$1=U,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART";var F=this.shadow.querySelectorAll(".sizeButtons");F.forEach(j=>{this.shadow.getElementById(`${j.id}`).style.color="",this.shadow.getElementById(`${j.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=U.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)}):(this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="MAX INVENTORY")}else commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:O[0].id}).then(()=>{cartEmpty$1=!1,selectedPSize$1="",commerce$1.cart.retrieve().then(U=>{currentCart$1=U,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart);var F=this.shadow.querySelectorAll(".sizeButtons");F.forEach(j=>{this.shadow.getElementById(`${j.id}`).style.color="",this.shadow.getElementById(`${j.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=U.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)})})});ae(this,"viewCart",()=>{shopPage=3,this.shadow.getElementById("mb3").style.display="block",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE";var O=this.shadow.getElementById("cartStatus");this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),O.innerHTML="CHECKOUT",O.removeEventListener("click",this.viewCart),O.removeEventListener("click",this.checkout),variantAbbr="",currentCart$1.line_items.forEach(z=>{var U=document.createElement("div");switch(U.setAttribute("class","productCont"),this.shadow.getElementById("cartItems").appendChild(U),z.selected_options[0].option_name){case"Small":variantAbbr="S";break;case"Medium":variantAbbr="M";break;case"Large":variantAbbr="L";break;case"XLarge":variantAbbr="XL";break;case"2XLarge":variantAbbr="2XL";break;case"3XLarge":variantAbbr="3XL";break}U.innerHTML=`
                <div class="pcLeft">
                    <img src="${z.image.url}"> 
                </div>
                <div class="pcRight">
                    <p class="cartProName">${z.name}</p>
                    <p class="cartProQty" id="${z.name}Qty">QTY: <span class="active">(${z.quantity})${variantAbbr}</span></p>
                    <p class="cartProPrice">${z.price.formatted_with_symbol}</p>
                    <div class="quantityChange" name="${z.product_id}">
                        <span class="active dec changeQty" id="${z.id}" name="dec">-</span>
                        <span>|</span>
                        <span class="active inc changeQty" id="${z.id}" name="inc">+</span>
                    </div>
                </div>
            `,this.shadow.getElementById("termsButton").addEventListener("click",this.toggleTerms);var F=this.shadow.querySelectorAll(".changeQty");F.forEach(j=>{j.addEventListener("click",this.changeQty)}),U.setAttribute("id",`${z.id}Parent`)})});ae(this,"toggleTerms",()=>{this.noti1(),this.shadow.getElementById("noti").innerHTML=`
        <div id="terms">
         <h1>Terms & Conditions</h1><p>For designs marked with an <span class="active">(\u2018\xC9\u2019)</span> or <span class="active">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `});ae(this,"checkQuantity",O=>{var z=allProducts$1[0].filter(U=>U.id===O);return z[0].inventory.available});ae(this,"changeQty",O=>{this.shadow.getElementById("LoadBG").style.display="grid";var z=O.target.getAttribute("id"),U=O.target.parentElement.getAttribute("name"),F=this.checkQuantity(U);if(O.target.getAttribute("name")==="inc"){var j=currentCart$1.line_items.filter(q=>q.id===z);if(F>=2&&j[0].quantity<=F-1){commerce$1.cart.update(`${z}`,{quantity:j[0].quantity+1}).then(q=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=q.cart.subtotal.formatted_with_symbol,currentCart$1=q.cart,this.viewCart()});return}else O.target.style.opacity=".3",this.shadow.getElementById("LoadBG").style.display="none"}if(O.target.getAttribute("name")==="dec"){var j=currentCart$1.line_items.filter(G=>G.id===z);commerce$1.cart.update(`${z}`,{quantity:j[0].quantity-1}).then(G=>{if(this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=G.cart.subtotal.formatted_with_symbol,currentCart$1=G.cart,this.viewCart(),G.cart.total_items===0){var W=this.shadow.getElementById("cartStatus");cartEmpty$1=!0,this.return(),W.innerHTML="CART EMPTY",W.removeEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),selectedPSize$1=""}});return}});ae(this,"shipping",()=>{shopPage=4;var O=this.shadow.getElementById("shippingButton"),z=this.shadow.getElementById("cartStatus");this.shadow.getElementById("checkoutInputs").style.display="grid",O.innerHTML="VIEW CART",O.removeAttribute("click",this.shipping),O.addEventListener("click",this.return),z.innerHTML="PAY NOW",z.addEventListener("click",this.checkout),countriesAdded===!1&&(countriesAdded=!0,commerce$1.services.localeListCountries().then(U=>{countriesObj$1=U.countries,Object.keys(U.countries).forEach(F=>{var j=document.createElement("option"),q=this.shadow.getElementById("inputCN");j.setAttribute("value",F),j.setAttribute("title",F),j.innerHTML=`${countriesObj$1[F].substr(0,20)}`,q.appendChild(j)})})),this.shadow.getElementById("inputCN").addEventListener("change",this.states),this.shadow.getElementById("card-element").innerHTML=`
        <stripe-elements publishable-key="${VITE_StripeKey$1}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`,this.shadow.getElementById("sCard").addEventListener("ready",U=>{card$1=U.path[0].element,U.path[0].stripe.createToken(card$1),stripeElements=U.path[0].stripe})});ae(this,"states",()=>{var O=this.shadow.getElementById("inputCN"),z=O.options[O.selectedIndex].value,U=O.options[O.selectedIndex].title,F=this.shadow.getElementById("totalPrice");this.shadow.getElementById("inputST").innerHTML="",z==="US"&&(this.shadow.getElementById("inputSP").value="$0.00 Free Shipping",shippingMethodValue=1,F.innerHTML=currentCart$1.subtotal.formatted_with_symbol),z!="US"&&(this.shadow.getElementById("inputSP").value="$70.00 Intl Shipping",shippingMethodValue=3,F.innerHTML=`$${currentCart$1.subtotal.raw+70}.00`),U==="US2"&&(this.shadow.getElementById("inputSP").value="$130.00 - Next Day",shippingMethodValue=2,F.innerHTML=`$${currentCart$1.subtotal.raw+130}.00`),commerce$1.services.localeListSubdivisions(z).then(j=>{var q=j.subdivisions;Object.keys(j.subdivisions).forEach(G=>{var W=document.createElement("option"),Q=this.shadow.getElementById("inputST");if(Object.keys(j.subdivisions).length<=1){var Y=document.createElement("option");Y.innerHTML="Not Available.",O.options[O.selectedIndex].innerHTML="Select Country",this.shadow.getElementById("inputST").appendChild(Y)}else W.setAttribute("value",q[G]),W.setAttribute("id",G),W.innerHTML=q[G].substring(0,20),Q.appendChild(W)})})});ae(this,"checkout",async()=>{var O=this.shadow.getElementById("inputFN").value,z=this.shadow.getElementById("inputLN").value,U=this.shadow.getElementById("inputBD").value;this.shadow.getElementById("inputSP").value;var F=this.shadow.getElementById("inputEM").value,j=this.shadow.getElementById("inputCY").value,q=this.shadow.getElementById("inputZC").value,G=this.shadow.getElementById("inputSA").value,W=this.shadow.getElementById("inputCN"),Q=this.shadow.getElementById("inputST"),Y=W.options[W.selectedIndex].value,J=Q.options[Q.selectedIndex].id,D=this.shadow.getElementById("cartStatus");D.removeEventListener("click",this.checkout),this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("LoadBG").style.display="grid",setTimeout(()=>{pComplete===!1&&(this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>")},2e4),await commerce$1.checkout.generateToken(currentCart$1.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async se=>{commerce$1.checkout.getShippingOptions(se.id,{country:Y}).then(async te=>{shippingMethodValue===1&&(shippingId=te[0].id),shippingMethodValue===3&&(shippingId=te[0].id),shippingMethodValue===2&&(shippingId=te[1].id);var de=`${O} ${z}`;const he=await stripeElements.createPaymentMethod({type:"card",card:card$1}).catch(ue=>{console.log(`THIS ERROR ${ue}`),this.shadow.getElementById("LoadBG").style.display="none",D.addEventListener("click",this.checkout)});if(he.error){this.shadow.getElementById("LoadBG").style.display="none",console.log(he.error.message),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${he.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const ue=await commerce$1.checkout.capture(se.id,{customer:{firstname:`${O}`,lastname:`${z}`,email:`${F}`},extra_fields:{extr_DWy4oG4dY56Jx2:`${G}`},shipping:{name:`${de}`,street:`${U}`,town_city:`${j}`,county_state:`${J}`,postal_zip_code:`${q}`,country:`${Y}`},fulfillment:{shipping_method:`${shippingId}`},billing:{name:`${de}`,street:`${U}`,town_city:`${j}`,county_state:`${J}`,postal_zip_code:`${q}`,country:`${Y}`},payment:{gateway:"stripe",stripe:{payment_method_id:he.paymentMethod.id}}});this.return,this.purchaseComplete(),this.noti1(),this.shadow.getElementById("noti").innerHTML=`
                <div id="orderConfirmed">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-map.png"/>
                    <h2>Order Placed!</h2>
                    <h3>Thank you for shopping at SCOG\xC9.</h3>
                    <h4>Your order confirmation number is:<br><span class="active" id="confirmNumber">${ue.customer_reference}</span></h4>
                    <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
                    <br><br>
                    <p>For any questions or inquiries please email <span class="active">INFO@SCOGE.CO</span></p>
                </div>
                `,this.shadow.getElementById("inputCN").innerHTML=`<option value="US" title="US">US</option>
                                          <option value="US" title="US2">US - Next Day Air</option>`,cartEmpty$1=!0,card$1.clear();return}catch(ue){console.log(ue),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${ue.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(ue);return}finally{}})})});ae(this,"purchaseComplete",()=>{var O=this.shadow.getElementById("cartStatus");this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("totalPrice").innerHTML="$0",O.innerHTML="CART EMPTY",shopPage=5,pComplete=!0,this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),this.shadow.getElementById("shippingButton").removeEventListener("click",this.return)});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("product")}set product(O){this.setAttribute("product",O)}static get observedAttributes(){return["product"]}attributeChangedCallback(O,z,U){O==="product"&&this.render()}connectedCallback(){this.render(),this.loadShop(),this.shadow.getElementById("returnButton").addEventListener("click",this.return.bind(this))}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
                font-weight: normal;
                font-style: italic;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
              --regular: "BS-R", sans-serif;
            }
            
               /* width */
               ::-webkit-scrollbar {
                width: 10px;
              }
            
              /* Track */
              ::-webkit-scrollbar-track {
                background: black; 
              }
              
              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: var(--accent);
              }
            
              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: var(--secondary); 
              }
            #main {
                background-color: black;
                width: 100%;
                height: 100%;
                position: fixed;
                left: 0;
                top: 0;
                z-index:20;
                font-family: "BS-R";
            }
            ::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: black;
                opacity: 0.9; /* Firefox */
              }
            #noti {
                display: none;
                height: 100%;
                width: 100%;
                position: fixed;
                left: 0;
                top: 0;
                background-color: white;
                z-index: 5;
                color: black;
            }
            #noti img {
                height: 100%;
                position: absolute;
                left: -40%;
            }
            #header {
                height: 8%;
                width: 90%;
                overflow: hidden;
                padding: 2% 5%;
                float:left;
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr 1fr;
                align-items: center; 
                border-bottom: 1px solid #ff002d;
            }
            #header img {
                width: 90%;
            }
            #footer {
                width: 88%;
                height: 8%;
                padding: 2% 6%;
                background-color: white;
                color:black;
                float:left;
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                font-size: 16px;
                font-family: "BS-SB";
                border-top: 1px solid black;
            }
            #cartStatus {
                justify-self: end;
            }
            #returnButton {
                width: 50%;
                float: right;
                border: 1px solid #ff002d;
                padding: 4% 2%;
                text-align: center;
                justify-self: end;
            }
            #mainBody {
                height: 80%;
                width: 100%;
                float:left;
                overflow: hidden;
                background-color: white;
            }
            #mb1 {
                display: grid;
                background-color: white;
                height: 100%;
                width: 100%;
                grid-template-columns: 1fr 1fr;
                overflow: scroll;
                overflow-x: hidden;
            }
            #mb2 {
                display: none;
                height: 80%;
                width: 100%;
                background-color: white;
                position: absolute;
                z-index: 2;
                overflow: hidden;
            }
            #mb3 {
                display: none;
                height: 80%;
                width: 100%;
                background-color: white;
                position: absolute;
                z-index: 3;
            }
            #mb4 {
                display: none;
                height: 72%;
                width: 100%;
                background-color: white;
                position: absolute;
                z-index: 4;
                overflow: hidden;
            }
            .productContainer {
                width: 100%;
                float: left;
                position: relative;
            }
            .productContainer img {
                width: 100%;
                overflow: hidden;
              }
            #mainImage {
                height: 50%;
                width: 100%;
                float:left;
                overflow: scroll;
                overflow-x: hidden;
                background-color: white;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
            }
            #mainImage img {
                width: 100%;    
            }
            #allImages {
                height: 15%;
                width: 100%;
                overflow: hidden;
            }
            #allImages img {
                width: 25%;
                float:left;
            }
            #productInfo {
                height: 18%;
                width: 90%;
                float: left;
                padding: 5% 5%;
                color: black;
            }
            #pDesc {
                font-size: 12px;
            }
            #pSizeGuide {
                font-size: 14px;
                color: #b5d3d1;
            }
            #leftInfo {
                width: 80%;
                height: 100%;
                float: left;
            }
            #rightInfo {
                width: 20%;
                height: 100%;
                float: left;
            }
            #proPrice {
                float: right;
                font-family: "BS-R";
                font-size: 18px;
            }
            #pCat {
                color: #b5d3d1;
                width: 10%;
                margin: 0%;
                padding: 0%;
            }
            #sizeSelection {
                height: 12%;
                width: 100%;
                float: left;
            }
            #addItemButton {
                width: 50%;
                height: 100%;
                background-color: #94be8c;
                color: black;
                float: left;
                font-family: "BS-SB";
                font-size: 16px;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
            }
            #sizesCont {
                height: 100%;
                width: 50%;
                background-color: white;
                color: black;
                float: left;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
            }
            .sizeButtons {
                height: 100%;
                width: 100%;
                float: left;
                background-color: white;
                display: grid;
                justify-items: center;
                align-items: center;
                border-top: .5px solid white;
                opacity: 0.3;
                border-top: .5px solid black;
            }
            .sizeButtons:hover {
                background-color: #ff002d;
                color: white;
            }
            #cartItems {
                height: 80%;
                width: 100%;
                float: left;
                background-color: white;
                overflow: scroll;
                overflow-x: hidden;
            }
            #checkoutInputs {
                display: none;
                height: 75%;
                width: 95%;
                float: left;
                padding-left: 5%;
                padding-top: 5%;
                background-color: white;
                position: absolute;
                z-index: 2;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                grid-template-columns: 45% 45%;
                grid-column-gap: 5%;
                grid-row-gap: 2%;
                color: black;
                overflow-x: hidden;
            }
            .checkoutInput {
                background-color: rgba(0,0,0,0);
                border: 1px solid black;
                color: black;
                padding-left: 5%;
                outline: none;
            }
            #inputEM {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            #inputBD {
                grid-row-start: 4;
                grid-row-end: 5;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            #inputCY {
                grid-row-start: 5;
                grid-row-end: 6;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            #inputSA {
                grid-row-start: 7;
                grid-row-end: 9;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            .input11 {
                grid-row-start: 11;
                grid-row-end: 12;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                background-color: rgba(0,0,0,0);
                border: 1px solid black;
                color: black;
                outline: none;
                overflow-y: visible;
            }
            #stripeLogo {
                width: 80%;
                grid-row-start: 10;
                grid-row-end: 11;
            }
            stripe-elements::part(stripe) {
                background-color: rgba(0,0,0,0);
                border: none;
                border-radius: 0px;
                box-shadow: none;
                width: 100%;
                color:black;
                --stripe-elements-base-color: green;
              }
            stripe-elements {
                --stripe-elements-base-color: black;
                --stripe-elements-base-icon-color: black;
                --stripe-elements-base-font-size: 14px;
            }
            #termsButton {
                height: 10%;
                width: 100%;
                background-color: white;
                border-top: 1px solid black;
                float: left;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                color: black;
                font-family: "BS-SB";
                font-size: 10px;
            }
            #terms {
                width: 90%;
                height: 90%;
                padding: 5%;
                overflow: scroll;
                font-size: 16px;
                overflow-x: hidden;
            }
            #shippingButton {
                height: 10%;
                width: 100%;
                background-color: #94be8c;
                float: left;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                color: black;
                font-family: "BS-SB";
            }
            .productCont {
                width: 100%;
                height: 40%;
                background-color: white;
                color: black;
                overflow: hidden;
                border-bottom: 1px solid black;
            }
            .pcLeft {
                width: 35%;
                height: 90%;
                overflow: hidden;
                padding-top: 3%;
                padding-left: 5%;
                float: left;
            }
            .pcRight {
                width: 55%;
                height: 97%;
                overflow: hidden;
                padding-top: 3%;
                padding-Right: 5%;
                float: left;
                text-align: right;
            }
            .pcLeft img {
                height: 100%;
            }
            .cartProName {
                font-size: 12px;
                margin-bottom: 0px;
            }
            .cartProQty {
                font-family: "BS-SB";
                margin-top: 1%;
                font-size: 18px;
                margin-bottom: 0px;
            }
            .cartProPrice {
                font-family: "BS-SB";
                margin-top: 1%;
                font-size: 20px;
                margin-bottom: 1%;
            }
            .quantityChange {
                font-family: "BS-SB";
                font-size: 40px;
                margin-top: 10%;
            }
            .quantityChange span {
                padding-left: 14%;
            }
            .active {
                color: #ff002d;
            }
            .alt {
                color: #94be8c;
            }
            .pcDetails {
              width: 90%;
              padding-left: 10%;
              font-family: "BS-L";
              bottom: 2%;
              left: 5%;
              opacity: 100%;
              transition: 1s all;
              z-index: 3;
              display: block;
              color: black;
              font-size: 12px;
            }
            .pcProductName {
              font-family: "BS-SB";
              margin-bottom: 0%;
            }
            .pcProductPrice {
              margin:0%;
            }
            #LoadBG {
                width: 100%;
                height: 80%;
                background-color: rgba(0, 0, 0, 0.678);
                position: absolute;
                display: none;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: center;
                z-index:4;
              }
              .loader {
                border: 2px solid #94be8c1;
                border-radius: 50%;
                border-top: 2px solid #ff002d;
                width: 100px;
                height: 100px;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
              }
              @-webkit-keyframes spin {
                0% {
                  -webkit-transform: rotate(0deg);
                }
                100% {
                  -webkit-transform: rotate(360deg);
                }
              }
              
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              #archived {
                  width: 100%;
                  height: 100%;
                  background-color: #ff002d;
                  color: white;
                  display: none;
                  z-index: 3;
                  grid-template-columns: 1fr;
                  grid-template-rows: 1fr;
                  align-items: center;
                  justify-items: center;
                  letter-spacing: 10px;
              }
              #card-element {
                color: #ff002d;
              }
              .light-font {
                font-family: "BS-L";
              }
              #orderConfirmed {
                width: 88%;
                height: 100%;
                padding-left: 6%;
                padding-right: 6%;
                position: absolute;
                z-index: 4;
                background-color: black;
                font-family: "BS-R";
              }
              #orderConfirmed img {
                margin-top: 10%;
                width: 50%;
                height: auto;
                position: relative;
                left: 25%;
              }
              #productEdition {
                  position: absolute;
                  right: 5%;
                  bottom: 15%;
                  font-family: "BS-SB";
              }
              #eSymbol1 {
                display: none;
              }
              #eSymbol2 {
                display: none;
              }
              #scroll {
                position: absolute;
                top: 10%;
                width: 80% !important;
                padding-left: 10%;
                padding-right: 10%;
                animation-name: scroll;
                animation-duration: 2s;
                animation-delay: 1s;
                opacity: 0;
                display: none;
                z-index: 4;
              }
              @keyframes scroll {
                0% {
                  top: 30%;
                  opacity: 100%;
                }
                80% {
                  opacity: 100%;
                }
                100% {
                  top: 10%;
                  opacity: 0%;
                }
              }
         </style>
         <div id="main">
            <div id="noti">
            </div>
            <div id="header">
                <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/SCOGE\u0301 Logo-red.png"/>
                <div id="returnButton">
                    RETURN
                </div>
            </div>
            <div id="mainBody">
                <div id="LoadBG">
                    <div class="loader"></div>
                </div>
                <div id="mb4">
                    Confirmation Page
                </div> 
                <div id="mb3">
                    <div id="checkoutInputs">
                        <input class="checkoutInput" id="inputFN" placeholder="First Name" value="">
                        <input class="checkoutInput" id="inputLN" placeholder="Last Name" value="">
                        <input class="checkoutInput" id="inputEM" placeholder="Email" value="">
                        <select class="checkoutInput" id="inputCN" value="Country" type="text" placeholder="Country" value="">
                            <option value="Select Country" title="Select">Select Country</option>
                            <option value="US" title="US">US</option>
                            <option value="US" title="US2">US - Next Day</option>
                        </select>
                        <select class="checkoutInput" id="inputST" type="text" placeholder="State" value="US-NY">
                            <option value="Select State" title="Select">Select State</option>
                            <option value="Select Country First">Select Country First</option>
                        </select>
                        <input class="checkoutInput" id="inputBD" placeholder="Billing Address" value="">
                        <input class="checkoutInput" id="inputCY" placeholder="Town / City" value="">
                        <input class="checkoutInput" id="inputZC" placeholder="Post / Zip Code" value="">
                        <input class="checkoutInput" id="inputSP" value="$0 Free Ship">
                        <input class="checkoutInput" id="inputSA" placeholder="Shipping Address (If different from billing)" value="">
                        <img id="stripeLogo" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/stripe.png"/>
                        <div class="input11" id="card-element"></div>
                   </div>
                    <div id="cartItems">
                        <div class="productCont">
                            <div class="pcLeft">
                                <img src=""> 
                            </div>
                            <div class="pcRight">
                                <p class="cartProName">TESTING PRO NAME</p>
                                <p class="cartProQty">QTY:<span>1</span></p>
                                <p class="cartProPrice">$400</p>
                                <div class="quantityChange">
                                    <span>-</span>
                                    <span>|</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div class="productCont">
                            <div class="pcLeft">
                                <img src=""> 
                            </div>
                            <div class="pcRight">
                                <p class="cartProName">TESTING PRO NAME</p>
                                <p class="cartProQty">QTY: <span class="active">1</span></p>
                                <p class="cartProPrice">$400</p>
                                <div class="quantityChange">
                                    <span class="active">-</span>
                                    <span>|</span>
                                    <span class="active">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="termsButton">
                        INFO, TERMS & CONDITIONS
                    </div>
                    <div id="shippingButton">
                        SHIPPING & BILLING
                    </div>
                </div>
                <div id="mb2">
                    <div id="mainImage">
                        <img id="scroll" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/scroll.png"/>
                        <img id="mainImageCont" src="">
                    </div>
                    <div id="allImages">
                    </div>
                    <div id="productInfo">  
                        <div id="leftInfo">
                            <span id="pName"></span>
                            <p id="pDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, earum.</p>
                            <div id="pSizeGuide">[ SIZE GUIDE ]</div>
                        </div>
                        <div id="rightInfo">
                            <span id="proPrice">$400</span>
                            <div id="productEdition" class="active"><span id="eSymbol1">(\xC9)</span><span id="eSymbol2">(S\xC9)</span></div>
                        </div>
                    </div>
                    <div id="sizeSelection">
                        <div id="archived">ARCHIVED</div>
                        <div id="sizesCont">
                            <div class="sizeButtons" id="Small">S</div>
                            <div class="sizeButtons" id="Medium">M</div>
                            <div class="sizeButtons" id="Large">L</div>
                            <div class="sizeButtons" id="XLarge">XL</div>
                            <div class="sizeButtons" id="SingleSize" style="display:none;">Single Size</div>
                        </div>
                        <div id="addItemButton">
                           < SELECT SIZE
                        </div>
                    </div>
                </div>
                <div id="mb1"></div>
            </div>
            <div id="footer">
                <div style="border-right: 1px solid black">
                    Total: <span id="totalPrice">$0</span>
                </div>
                <div id="cartStatus">
                    CART EMPTY
                </div>
            </div>
         </div>
         `}}customElements.define("mobile-shop1",mobileShop1);var trackname="SCOG\xC9 Radio",currentAudio=null,currenttrack=0,trackList=[{artist:"Floating Points - Birth",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Birth.mp3"},{artist:"Erasmo Carlos - \xC9 Preciso Dar Um Jeitp, Meu Amigo",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Erasmo_carlos.mp3"},{artist:"Frankz Gordon - The Art Teacher",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/The-Art-Teacher.mp3"},{artist:"Ave Maria - Claire de Lune",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/ave-maria-claire-de-lune.mp3"},{artist:"Nemzzz - Freestyle",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/nemzzz-lsw-freestyle.mp3"},{artist:"Stevie Wonder - If It's Magic",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/stevie-wonder-if-its-magic.mp3"},{artist:"Michael Giacchino - Stuff We Did",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/stuff-we-did.mp3"},{artist:"Hareton Salvanini - N\xE3o Podes Fugir do Teu Destino",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/destiny.mp3"},{artist:"Nkosazana Daughter - Inhliziyo",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Inhiliziyo.mp3"}];class dtMusic extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get music(){return this.getAttribute("music")}set music(w){this.setAttribute("music",w)}static get observedAttributes(){return["music"]}attributeChangedCallback(w,O,z){w==="music"&&this.render()}playMusic(){currentAudio===null&&(currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currenttrack++),currentAudio.play(),this.shadow.getElementById("playBtn").style.display="none",this.shadow.getElementById("pauseBtn").style.display="block",this.shadow.getElementById("ntxBtn").style.opacity="1",currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()}),this.shadow.getElementById("cat").style.display="block"}pauseMusic(){currentAudio.pause(),this.shadow.getElementById("playBtn").style.display="block",this.shadow.getElementById("pauseBtn").style.display="none",this.shadow.getElementById("cat").style.display="none"}nextRandomTrack(){currentAudio.pause(),currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),currentAudio.play(),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()})}connectedCallback(){this.render(),this.shadow.querySelector("#playBtn").addEventListener("click",()=>{this.playMusic(),this.shadow.getElementById("ntxBtn").style.display="block"}),this.shadow.querySelector("#pauseBtn").addEventListener("click",()=>{this.pauseMusic()}),this.shadow.querySelector("#ntxBtn").addEventListener("click",()=>{this.nextRandomTrack()})}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            #musicInterface {
                position: absolute;
                top: 9%;
                right: 8%;
                width: auto;
                height: 4%;
                display: flex;
                align-items: center;
                font-family: "BS-R", sans-serif;
                flex-wrap: wrap;
                gap: 2em;
                padding-left: 3em;
                padding-right: 3em;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgb(0, 0, 0, 0.9),rgb(0, 0, 0, 0.9)); 
                font-size: 12px;
                z-index: 4;
            }
            #pauseBtn {
              display: none;
            }
            #ntxBtn {
              fill: var(--accent);
              display: none;
            }
            svg {
              fill: var(--primary);
              cursor: pointer;
            }
            svg:hover {
              fill: var(--secondary);
            }
            #cat {
              position: absolute;
              left: -20%;
              filter: contrast(110%);
              display: none;
            }
            @media screen and (max-width: 769px) {
              #musicInterface {
                bottom: 0% !important;
                width: 90%;
                height: 10%;
                top: auto;
                bottom: 0%;
                right: 0%;
                display: grid;
                grid-template-columns: 4fr 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: center;
                font-size: 14px;
                background-image: none;
                background-color: rgba(0, 0, 0, 1);
                border-top: .2px solid var(--accent);
                z-index: 5;
                position: fixed;
                padding-right: 5%;
                padding-right: 5%;
              }
              #cat {
                position: fixed;
                right: 5%;
                left: auto;
                bottom: 18%;
                top: auto;
                filter: contrast(1);
                display: none;
                width: 150px !important;
                height: 150px !important;
              }
            }
         </style>
         <div id="musicInterface">
            <img id="cat" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/cat.gif" alt="cat" width="70px" height="70px">
            <div style="margin:0;" id="trackName">${trackname}</div>
            <div style="color:var(--accent); cursor:default;">|</div>
            <div>
              <svg id="pauseBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <svg id="playBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>
            <div><svg id="ntxBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg></div>
         </div>
         `}}customElements.define("scoge-music",dtMusic);var currentPage$1=1,currentBtsPage$1=1;class dtCampaign extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get campaign(){return this.getAttribute("camp")}set campaign(w){this.setAttribute("camp",w)}static get observedAttributes(){return["camp"]}attributeChangedCallback(w,O,z){w==="camp"&&this.render()}openCampaign(){document.getElementById("updatesModal").style.display="none",this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="0%",closeInvestor(),clearShop(),clearSettings(),clearFilter()}closeCampaign(){this.shadow.getElementById("yt").src="https://www.youtube.com/embed/WPccRLEvxW4",window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="-70%")}pageScroll(){var w=this.shadow.querySelector("#looks");w.scrollLeft+=1,setTimeout(this.pageScroll.bind(this),10),w.scrollLeft==w.scrollWidth-w.clientWidth&&(w.scrollLeft=0)}nextImage(){currentPage$1>=10&&(currentPage$1=0),currentPage$1++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage$1}.webp`}previousImage(){currentPage$1<=1?currentPage$1=10:currentPage$1--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage$1}.webp`}nextBtsImage(){currentBtsPage$1>=46&&(currentBtsPage$1=0),currentBtsPage$1++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage$1}.webp`}preBtsImage(){currentBtsPage$1<=1?currentBtsPage$1=46:currentBtsPage$1--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage$1}.webp`}connectedCallback(){this.render(),this.pageScroll(),document.getElementById("campaignBut").addEventListener("click",this.openCampaign.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeCampaign.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this))}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: black; 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: var(--accent);
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: var(--secondary); 
            }
            #campaignComp {
              width: 70%;
              height: 98%;
              background: black;
              position: fixed;
              top: 0;
              right: -70%;
              z-index: 5;
              font-family: "BS-R";
              padding-top: 2%;
              overflow-y: visible;
              overflow-x: visible;
              transition: 1s;
            }
            #header {
              height: auto%;
              width: 98%;
              float: left;
              padding-left: 2%;
              padding-bottom: 2%;
            }
            #head {
              font-size: 34px;
            }
            #sub {
              margin-bottom: 2%;
              color: var(--accent);
            }
            #body {
              padding-right: 30%;
              color: var(--primary);
              letter-spacing: 1px;
            }
            #campGallery {
              width: 100%;
              height: auto;
              float: left;
              margin-bottom: 2%;
              position: relative;
            }
            #campGallery img {
              width: 100%;
            }
            #looks {
              height: 60%;
              width: 100%;
              overflow-y: hidden;
              overflow-x: scroll;
              float: left;
              margin-bottom: 2%;
            }
            #looks img {
              height: 100%;
            }
            #film {
              width: 100%;
              height: 65%;
              float: left;
              margin-bottom: 4%;
            }
            #campIcon {
              width: 4%;
              height: 4%;
              position: absolute;
              left: -4%;
              top: 9.3%;
              z-index: 5;
              background-color: #ff002d;
              border-right: none;
              border-top-left-radius: 8%;
              border-bottom-left-radius: 8%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-R";
              color: white;
              cursor: pointer;
              font-size: 12px;
            }
            #scrollBody {
              width: 100%;
              height: 100%;
              float: left;
              overflow-y: scroll;
              overflow-x: hidden;
            }
            #imageInterface, #imageInterface2 {
              position: absolute;
              width: 10%;
              height: 5%;
              background-color: rgba(0, 0, 0, 0.8);
              bottom: 5%;
              left: 45%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              border-radius:6px;
            }
            #preGalleryImg, #preBtsImg {
              transform: rotate(180deg);
            }
            .arrow {
              transition: 0.3s;
              cursor: pointer;
            }
            .arrow:hover {
              color: var(--secondary);
            }
            #btsGallery {
              width: 100%;
              height: 90%;
              overflow: hidden;
              float: left;
              display: flex;
              justify-content: center;
              position: relative;
              margin-top: 2%;
            }
            #btsGallery img {
              height: 100%;
            }
            #credits {
              width: 100%;
              height: 60%;
              float: left;
              padding:5%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              color: var(--secondary);
              font-size: 12px;
            }
            .primary {
              color: var(--primary);
            }
            .secondary {
              color: var(--secondary);
            }
            #film iframe {
              width: 100%;
              height: 100%;
            }
            @media screen and (max-width: 769px) {
              #campIcon {
                display: none;
              }
              #campaignComp {
                width: 100%;
                height: 80%;
                background: black;
                position: fixed;
                top: 20%;
                right: -100%;
                z-index: 4;
                font-family: "BS-R";
                padding-top: 2%;
                overflow-y: visible;
                overflow-x: visible;
                transition: 1s;
              }
              #credits {
                padding-bottom: 90%;
              }
              #body {
                height: 100%;
                width: 96%;
              }
              #header {
                height: auto;
                padding-bottom: 2%;
              }
              #film {
                height: 40%;
              }
              #film iframe {
                height: 100%;
              }
              #preGalleryImg {
                display: none;
              }
              #imageInterface  span {
                display: none;
              }
              #imageInterface {
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 15%;
                height: 15%;
                left: auto;
                right: 5%;
                border-radius: 5px;
              }
              #nextGalleryImg {
                font-size: 30px;
              }
              #preBtsImg {
                display: none;
              }
              #imageInterface2  span {
                display: none;
              }
              #imageInterface2 {
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 15%;
                height: 10%;
                left: auto;
                bottom: 47.5%;
                right: 5%;
                border-radius: 5px;
              }
              #nextBtsImg {
                font-size: 30px;
              }
              #gImg {
                width: auto !important;
                height: 100%;
              }
              #galleryimg {
                height: 100%;
                width: auto;
                display: flex;
                justify-content: center;
              }
              #campGallery {
                height: 60%;
              }
              .arrow:hover {
                color: var(--primary);
              }
            }
         </style>
         <div id="campaignComp">
            <div id="campIcon">
              X
            </div>
            <div id="scrollBody">
            <div id="header">
              <div id="head">CH. 1 - REACCLIMATE</div>
              <div id="sub">FW22/SS23</div>
              <div id="body">On the outskirts of T.A.O.S City lie several old-world desolate mansions inhabited by self-exiled creators known to many as oracles. Migrants from nations in stark contrast to T.A.O.S City often seek these oracles to aid in their assimilation into the vast city, and avoid conviction from a predatory group of conservative citizens known as enforcers. Successful assimilated migrants tend to travel for days to visit several oracles, each specializing in a single task. Unsuccessful, convicted migrants have described the oracle experience as a process of remembering something they had long forgotten. A process to reacclimate.</div>
            </div>
            <div id="campGallery">
              <div id="imageInterface">
                <div id="preGalleryImg" class="arrow">&#9658;</div>
                <span>|</span>
                <div id="nextGalleryImg" class="arrow">&#9658;</div>
              </div>
              <div id="galleryimg">
              <img id="gImg" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-campaign-1.webp" alt=""/>
              </div>
            </div>
            <div id="looks">
              <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE\u0301-CH1-Looks.jpeg" alt=""/>
            </div>
            <div id="film">
            <iframe id="yt" width="100%" height="630" src="https://www.youtube.com/embed/WPccRLEvxW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div id="btsGallery">
              <div id="imageInterface2">
                <div id="preBtsImg" class="arrow">&#9658;</div>
                <span>|</span>
                <div id="nextBtsImg" class="arrow">&#9658;</div>
              </div>
              <img id="btsImg" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-1.webp"/>
            </div>
            <div id="credits">
              <div>
                <h4><span class="primary">CREDITS</span></h4>
                <span class="primary">DIRECTOR:</span></br>
                SCOG\xC9<br/></br>
                <span class="primary">CAMPAIGN PHOTOGRAPHER:</span></br>
                LIHI BROSH<br/></br>
                <span class="primary">PRESENTATION PHOTOGRAPHERS:</span></br>
                ZOE LEMBECK<br/>
                AQUA ROSE<br/></br>
                <span class="primary">STYLIST:</span></br>
                RUSSIAN<br/>
                TIWA<br/>
                KWIN VALENCIA<br/></br>
                <span class="primary">HAIR:</span></br>
                SOLEIL DAVIS<br/><br/>
                <span class="primary">MAKEUP:</span></br>
                EMMA ELIZABETH<br/><br/>
                <span class="primary">PRODUCTION ASST.:</span></br> 
                TIARA MITCHELL<br/>
                ZOIA AMADI</br>
                HARRISON LOVE<br/><br/>
                <span class="primary">MODELS:</span><br/>
                DIANDRA FORREST<br/>
                CAVIER COLEMAN<br/>
                JJ PINCKNEY<br/>
                KHALIL HENLEY<br/>
                STEPHAN LINTON
              </div>
              <div>
                <h4><span class="primary">DJ:</span></h4r></br> 
                KII<br/>
                RUSSIAN<br/><br/>
                <span class="primary">GUEST PRESENTATION PHOTOGRAPHER:</span><br/>
                MEHOW<br/>
                NICKY L<br/><br/>
                <span class="primary">AI GRAPHIC ASSISTANT:</span><br/>
                DALL-E<br/><br/>
                <span class="primary">PRESENTED BY:</span></br>
                IDEAL GLASS STUDIOS<br/><br/>
                <span class="primary">SPECIAL THANKS TO:</span></br>
                WILLARD MORGAN<br/>
                MIKE OKERSON<br/>
              </div>
            </div>
            </div>
         </div>
         `}}customElements.define("scoge-camp",dtCampaign);class dtSubscribe extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get subscribe(){return this.getAttribute("subscribe")}set subscribe(w){this.setAttribute("subscribe",w)}get width(){return this.getAttribute("width")}set width(w){this.setAttribute("width",w)}get height(){return this.getAttribute("height")}set height(w){this.setAttribute("height",w)}static get observedAttributes(){return["subscribe","width","height"]}attributeChangedCallback(w,O,z){w==="subscribe"&&this.render(),(w==="subscribe"||w==="width"||w==="height")&&this.render()}clearform(){this.shadow.getElementById("mce-EMAIL").value=""}connectedCallback(){this.render(),this.shadow.getElementById("sub").addEventListener("click",this.clearform.bind(this))}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            ::placeholder {
              color: #b5d3d1;
            }
            #subscribeSect {
              width: 25%;
              height: 4%;
              position: absolute;
              bottom: 7%;
              right: 0%;
              z-index: 4;
              opacity: 80%;
              transition: 0.5s;
            }
            #subscribeSect:hover {
              opacity: 100%;
            }
            #subscribeInput {
              width: 80%;
              height: 100%;
              border: none;
              color: var(--primary);
              font-family: "BS-R";
              font-size: 10px;
              padding-left: 2%;
              letter-spacing: 1px;
              text-transform: uppercase;
              background-color: rgba(0, 0, 0, 0.8);
            }
            #subscribeInput:focus {
              outline: none;
            }
            #mc-embedded-subscribe {
              background-color: var(--accent);
              height: 100%;
              width: 100%;
              border: none;
              font-size: 11px;
              cursor: pointer;
              transition: 0.3s;
            }
            #mc-embedded-subscribe:hover {
              background-color: var(--primary);
              color: var(--secondary);
            }
            #mc-embedded-subscribe-form {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
            }
            #mc_embed_signup_scroll {
              width: 100%;
              height: 100%;
              display: flex;
            }
            @media screen and (max-width: 769px) {
              #subscribeSect {
                width: 100%;
                height: 6%;
                bottom: 10%;
                background-color: black;
                opacity: 100%;
                border-top: .2px solid var(--accent);
                z-index: 5;
              }
              #mc_embed_signup_scroll {
                width: 95%;
                margin-left: 5%;
                display: grid;
                grid-template-columns: 80% 20% 0% !important;
                grid-template-rows: 1fr;
              }
              #subscribeInput {
                font-size: 12px;
                width: 100% !important;
              }
            }
         </style>
         <div id="subscribeSect" style="width: ${this.width}; height: ${this.height}">
            <form action="https://scoge.us3.list-manage.com/subscribe/post?u=06502830cf2008a1155da093a&amp;id=467d798f05&amp;f_id=00ba43e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <input type="email" id="subscribeInput" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="SIGN UP TO BE NOTIFIED ON DROPS." required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_06502830cf2008a1155da093a_467d798f05" tabindex="-1" value=""></div>
                <div class="clear" id="sub"><input type="submit" value="ENTER" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
            </form>
         </div>
         `}}customElements.define("scoge-subscribe",dtSubscribe);class SoundtrackManager{constructor(){this.tracks={},this.trackList=[{key:"menuMove3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav",artist:"Menu",title:"menuMove3"},{key:"menuEnter3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav",artist:"Menu",title:"menuEnter3"},{key:"menuLoading1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav",artist:"Menu",title:"menuLoading1"},{key:"menuError1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav",artist:"Menu",title:"menuError1"},{key:"menuEntrance1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav",artist:"Menu",title:"menuEntrance1"},{key:"menuExitSys1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav",artist:"Menu",title:"menuExitSys1"},{key:"scoge1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav",artist:"Main",title:"scoge1"}],this.trackList.forEach(w=>{this.tracks[w.key]=new Audio(w.src)})}play(w){this.tracks[w].play()}pause(w){this.tracks[w].pause()}stop(w){this.tracks[w].pause(),this.tracks[w].currentTime=0}setVolume(w,O){this.tracks[w].volume=O}}var menuOpen=!0,fullMenuOpen=!0;new SoundtrackManager;class getUniMenu extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get uniMenu(){return this.getAttribute("uniMenu")}set uniMenu(w){this.setAttribute("uniMenu",w)}static get observedAttributes(){return["uniMenu"]}attributeChangedCallback(w,O,z){w==="uniMenu"&&this.render()}toggleMenu(){const w=this.shadow.querySelector("#uniMenu"),O=this.shadow.querySelector("#uniMenuIcon"),z=this.shadow.querySelector("#menuItems"),U=this.shadow.querySelector("#menuHeader");if(menuOpen===!1){O.style.transform="rotate(180deg)",w.style.height="auto",U.style.height="100%",menuOpen=!0;return}else{U.style.height="100%",setTimeout(()=>{w.style.height="10%"},150),O.style.transform="rotate(0deg)",z.style.height="0%",z.style.overflow="hidden",menuOpen=!1,this.closeFullMenu();return}}openFullMenu(){const w=this.shadow.querySelector("#uniMenu"),O=this.shadow.querySelector("#fullMenu"),z=this.shadow.querySelector("#fullMenuBG");if(this.shadow.querySelector("#menuItems"),fullMenuOpen===!1){w.style.overflowX="visible",O.style.width="500px",z.style.transform="scaleX(1)",w.style.borderBottomRightRadius="0px",w.style.borderTopRightRadius="0px",w.style.borderRight="0px solid black",fullMenuOpen=!0;return}}closeFullMenu(){const w=this.shadow.querySelector("#uniMenu"),O=this.shadow.querySelector("#fullMenu"),z=this.shadow.querySelector("#fullMenuBG");O.style.width="0px",z.style.transform="scaleX(0)",setTimeout(()=>{w.style.borderBottomRightRadius="10px",w.style.borderTopRightRadius="10px",w.style.borderRight="2px solid #ff002d"},500),fullMenuOpen=!1}switchMenuTabs(w){var O=w.target.id,z=w.target.classList[1],U=this.shadow.querySelector("#fm-menu1"),F=this.shadow.querySelector("#fm-menu2"),j=this.shadow.querySelector("#fm-menu3");switch(O){case"fm-menu1":this.shadow.querySelector(`.${z}1`).style.display="grid",this.shadow.querySelector(`.${z}2`).style.display="none",this.shadow.querySelector(`.${z}3`).style.display="none",U.setAttribute("class",`men-active ${z} selectedMenu`),F.setAttribute("class",`men-active ${z}`),j.setAttribute("class",`men-active ${z}`);break;case"fm-menu2":this.shadow.querySelector(`.${z}1`).style.display="none",this.shadow.querySelector(`.${z}2`).style.display="grid",this.shadow.querySelector(`.${z}3`).style.display="none",U.setAttribute("class",`men-active ${z}`),F.setAttribute("class",`men-active ${z} selectedMenu`),j.setAttribute("class",`men-active ${z}`);break;case"fm-menu3":this.shadow.querySelector(`.${z}1`).style.display="none",this.shadow.querySelector(`.${z}2`).style.display="none",this.shadow.querySelector(`.${z}3`).style.display="grid",U.setAttribute("class",`men-active ${z}`),F.setAttribute("class",`men-active ${z}`),j.setAttribute("class",`men-active ${z} selectedMenu`);break}}connectedCallback(){this.render(),this.shadow.querySelector("#uniMenuIcon").addEventListener("click",()=>{this.toggleMenu()}),this.shadow.querySelector("#uniMenuIcon2").addEventListener("click",()=>{this.closeFullMenu()}),this.tabs=this.shadow.querySelectorAll(".menuTabs"),this.tabs.forEach(w=>{w.id!="uniMenuExit"?w.addEventListener("click",()=>{this.openFullMenu()}):w.addEventListener("click",()=>{this.closeFullMenu(),fullMenuOpen=!1})}),this.headerTabs=this.shadow.querySelectorAll(".men-active"),this.headerTabs.forEach(w=>{w.addEventListener("click",O=>{this.switchMenuTabs(O)})}),this.shadow.querySelector("#switch23").addEventListener("click",()=>{var w={target:this.shadow.querySelector("#fm-menu3")};this.switchMenuTabs(w)}),this.shadow.getElementById("pinMenu").addEventListener("click",()=>{pinMenu()})}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
                font-weight: normal;
                font-style: italic;
            }
            a {
              text-decoration: none;
            }
            a:hover {
              color: var(--accent) !important;
              transition: 0.3s;
            }
            a:link {
              color: var(--secondary);
            }
            a:visited {
              color: var(--secondary);
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            input[type="range"] {
              -webkit-appearance: none;
              width: 100%;
              height: 8px;
              background: transparent;
              outline: none;
              margin: 20px 0;
            }
            
            input[type="range"]::-webkit-slider-runnable-track {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-moz-range-track {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-ms-track {
              background: transparent;
              border-color: transparent;
              color: transparent;
            }
            
            input[type="range"]::-ms-fill-lower {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-ms-fill-upper {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              background: var(--accent);
              border: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
            }
            
            input[type="range"]::-moz-range-thumb {
              background: var(--accent);
              border: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
            }
            
            input[type="range"]::-ms-thumb {
              background: var(--accent);
              border: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
            }
                    
            .active {
              color: var(--secondary);
              cursor: pointer;
              transition: 0.3s;
            }
            .active:hover {
              color: var(--accent) !important;
            }
            .alt {
              color: var(--accent);
              cursor: pointer;
              transition: 0.3s;
            }
            .alt:hover {
              color: var(--secondary) !important;
            }
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: black; 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: var(--accent);
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: var(--secondary); 
            }
            #uniMenu {
              width: 260px;
              height: auto;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              z-index: 7;
              position: relative;
              top: 36px;
              left: 36px;
              background-color: rgba(0, 0, 0, 0.7);
              border-left: 2px solid #ff002d;
              border-bottom: 2px solid #ff002d;
              border-top: 2px solid #ff002d;
              font-family: "BS-R";
              font-size: 16px;
              display: none;
              transition: height 0.5s ease;
            }
            #uniMenuLogo {
              width: 100%;
            }
            #menuHeader {
              display: grid;
              width: 88%;
              height: 100%;
              overflow: hidden;
              grid-template-columns: 1fr;
              grid-template-rows: 70% 30%;
              align-items: center;
              justify-items: center;
              border-radius: 10px 10px 0 0;
              z-index: 6;
              position: relative;
              padding: 2% 6%;
              margin-bottom: 6%;
              transition: all 0.5s ease;
              cursor: move;
              user-select: none;
            }
            #uniVersion {
              display: grid;
              width: 100%;
              height: auto;
              justify-items: start;
              font-size: 0.8em;
              padding-left: 10px;
              user-select: none;
            }
            #topMenu {
              display: grid;
              width: 100%;
              height: 100%;
              grid-template-columns: 70% 30%;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              z-index: 6;
            }
            #uniMenuIcon {
              font-size: 2em;
              justify-self: end;
              transform: rotate(180deg);
              cursor: pointer;
              transition: all 0.5s ease;
            }
            #uniMenuIcon:hover {
              color: white;
            }
            #menuItems {
              display: grid;
              width: 100%;
              height: auto;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
              transition: all 0.5s ease;
              // overflow: hidden;
              transition: all 0.5s ease;
              border-bottom-left-radius: 10px;
              z-index: 6;
              position: relative;
              cursor: pointer;
              overflow: hidden;
            }
            #menuItems div {
              padding: 5px 10px;
            }
            #menuItems > div:hover {
              background-color: #ff002d !important;
              color: white !important;
            }
            #menuItems > div:hover .cls-1 {
              stroke: white !important;
            }
            .uniMenuTxt {
              transition: all 0.5s ease;
            }
            #menuItems > div:hover .uniMenuTxt {
              transform: translateX(40px);
            }
            #fullMenu {
              width: 500px;
              height: 100%;
              position: absolute;
              left: 260px;
              top: -2px;
              background-color: rgba(0, 0, 0, 0.7);
              z-index: 6;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              transition: all 0.5s ease;
              transform-origin: left;
              overflow: hidden;
            }
            #fullMenuBG {
              width: 500px;
              height: 100%;
              position: absolute;
              left: 260px;
              top: -2px;
              filter: blur(2px);
              z-index: 5;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              transform-origin: left;
              transform: scaleX(1);
              transition: all 0.5s ease;
              border-right: 2px solid white;
              border-bottom: 2px solid white;
              border-top: 2px solid white;
            }
            .menuTabs {
              display: grid;
              grid-template-columns: 20% 80%;
              grid-template-rows: 1fr;
              width: 100%;
              align-items: center;
              border-bottom: 1px solid black;
              user-select: none;
            }
            #fm-header {
              width: 100%;
              height: 16%;
              display: grid;
              grid-template-columns: 85% 15%;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              text-shadow: 0 0 5px black;
              font-family: "BS-B";
              float: left;
              cursor: move;
              user-select: none;
            }
            #uniMenuIcon2 {
              font-size: 2em;
              justify-self: start;
              transform: rotate(-90deg);
              cursor: pointer;
              transition: all 0.5s ease;
            }
            #uniMenuIcon2:hover {
              color: white;
            }
            #fm-header-headline {
              width: 100%;
              height: 100%;
              font-size: 1em;
              display: flex;
              justify-items: center;
              align-items: center;
              padding-left: 30px;
              opacity: 1;
              // pointer-events: none;
            }
            #fm-header-headline span {
              padding: 10px 14px;
              text-transform: uppercase;
              font-size: 0.7em;
              margin-right: 10px;
              cursor: pointer;
              transition: all 0.3s ease;
              letter-spacing: 1px;
            }
            .men-active {
              background-color: rgba(0, 0, 0, 0.8);
            }
            #fm-header-headline:hover > .men-active:hover {
              background-color: #ff002d;
              color: white;
            }
            #fm-enhancements {
              width: 100%;
              height: 74%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
            }
            #fm-enhancements img {
              width: 100%;
              height: auto;
              object-fit: contain;
            }
            #fm-inventory {
              width: 100%;
              height: 84%;
              float: left;
              overflow: hidden;
              display: none;
            }
            #inventory-images {
              height: 40%;
              width: auto;
              overflow-y: hidden;
              overflow-x: scroll;
              margin-left: 18px;
              margin-right: 18px;
              display: flex;
            }
            .Inventory-Image-Cont {
              height: 100%;
              margin-right: 10px;
              width: auto;
            }
            .Inventory-Image-Cont img {
              height: 100%;
              width: auto;
            }
            #fm-menu3 {
              // opacity: .6;
            }
            #inventory-text {
              height: 38%;
              width: auto;
              padding-right: 18px;
              padding-left: 18px;
              padding-top: 1%;
              padding-bottom: 1%;
              font-family: "BS-R";
              font-size: 0.8em;
              line-height: 1.5em;
            }
            #inventory-text > span {
              background-color: rgba(0, 0, 0, 0.8);
              letter-spacing: 1px;
            }
            .selectedMenu {
              background-color: #ff002d;
              color: white;
            }
            .selectedMenu2 {
              background-color: #ff002d;
              color: white;
            }
            #uniMenuHelpSvg path {
              stroke: white;
            }
            #inventory-cta {
              height: 20%;
              width: 100%;
              display: flex;
              justify-content: end;
              align-items: center;
            }
            #invCtaBut {
              width: 100px;
              height: 30px;
              background-color: var(--secondary);
              color: black;
              font-family: "BS-R";
              margin-right: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              transition: all 0.5s ease;
              cursor: pointer;
            }
            #invCtaBut:hover {
              background-color: #ff002d;
              color: white;
            }
            #menuMessage {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              z-index: 7;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              text-align: center;
              font-family: "BS-B";
              font-size: 1.5em;
              color: #ff002d;
            }
            #menuMessageHead {
              animation: blink 1s infinite;
              transition: all 0.5s ease;
            }
            #menuMessageText {
              font-size: .7em;
              font-family: "BS-R";
            }
            #menuLoadingScreen {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              z-index: 7;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-B";
              font-size: 1.5em;
              color: #ff002d;
            }
            #loadIcon {
              width: 300px;
              height: 300px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              animation: spin 10s linear infinite, pulse 3s ease-in-out infinite;
              border: 5px dotted #ff002d;
              border-radius: 50%;
            }
            #loading {
              position: absolute;
              animation: blink 4s ease-in-out infinite;
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            @keyframes pulse {
              0% {
                scale: 1;
              }
              50% {
                scale: .8;
              }
              100% {
                scale: 1;
              }
            }
            @keyframes blink {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            #fm-help {
              width: 100%;
              height: 84%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-cotent: start;
            }
            .help-tabs {
              width: 95%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr;
              align-items: center;
              justify-cotent: start;
              padding-left: 5%;
            }
            .ht1 {
              display: grid;
            }
            .ht2 {
              width: 80%;
              height: 75%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 25%;
              font-size: 1em;
            }
            .ht3 {
              width: 80%;
              height: 75%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 25%;
              font-size: 1em;
            }
            .helpSection {
              display: flex;
              width: 100%;
              height: 20%;
              align-items: center;
              justify-content: start;
            }
            .arrow {
              font-size: 40px;
              border: 1px solid #ff002d;
              height: 40px;
              width: 40px;
              display:flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            #leftArr {
              transform: rotate(180deg);
            }
            #upArr {
              transform: rotate(-90deg);
            }
            #downArr {
              transform: rotate(90deg);
            }
            #spaceHelp {
              width: auto;
              height: auto;
              padding: 10px 80px;
              border: 1px solid #ff002d;
              border-radius: 5px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            #leftHelp {
              width: auto;
              height: auto;
              padding: 30px 15px;
              border: 1px solid #ff002d;
              border-radius: 5px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            .helpText {
              color: var(--accent);
            }
            .boxesUi {
              width: 18px;
              height: 18px;
              border: 2px solid #ff002d;
              margin-right: 20px;
            }
            .boxOP {
              border: 2px solid yellow;
            }
            #fm-feedback {
              width: 80%;
              max-width: 500px;
              margin: 20px auto;
              padding-top: 10px;
              padding-left: 20px;
              padding-right: 20px;
              display: none;
              flex-direction: column;
            }
            
            #fm-feedback #feedbackHeadline {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 20px;
              background-color: transparent;
              text-align: center;
              cursor: default;
              user-select: none;
            }
            
            #fm-feedback input[type="email"] {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              background-color: transparent;
              border: 1px solid var(--secondary);
              font-size: 16px;
              color: var(--secondary);
              vertical-align: top;
              border-radius: 5px;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              overflow-wrap: break-word; /* wrap the text when it reaches the edge */
            }
            
            #fm-feedback textarea {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              background-color: transparent;
              border: 1px solid var(--secondary);
              font-size: 16px;
              color: var(--secondary);
              vertical-align: top;
              border-radius: 5px;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              overflow-wrap: break-word; /* wrap the text when it reaches the edge */
              font-family: "BS-R";
            }
                        
            #fm-feedback #feedbackInput {
              width: 100%;
              height: 150px; /* increase the height of the feedback input */
            }
            
            #fm-feedback #feedbackButton {
              width: 30%;
              justify-self: end;
              background-color: transparent;
              color: var(--accent);
              padding: 8px 20px;
              margin: 8px 0;
              border: 1px solid var(--accent);
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 600;
              text-align: center;
              user-select: none;
            }
            
            #fm-feedback #feedbackButton:hover {
              background-color: var(--accent);
              color: black;
            }

            #fm-feedback input[type="email"]::placeholder {
              color: var(--secondary);
            }
            #fm-feedback input[type="email"]:focus {
              outline: none; 
            }
            #fm-feedback textarea:focus {
              outline: none; 
            }
            #fm-feedback textarea::placeholder {
              color: var(--secondary);
            }
          
            #pinMenu {
              width: 54px;
              height: 54px;
              position: absolute;
              z-index: 5;
              left: -27px;
              top: -27px;
              border-top: 2px solid rgba(225, 225, 225, 0.8);
              border-left: 2px solid rgba(225, 225, 225, 0.8);
              border-top-left-radius: 20%;
              filter: blur(1px);
              transition: all 0.2s ease-in-out;
              cursor: pointer;
            }
            #pinMenu:hover {
              border-top: 4px solid #ff002d !important;
              border-left: 4px solid #ff002d !important;
            }
            #locked {
              font-size: 1em;
              position: absolute;
              right: -80px;
              top: -5px;
              opacity: 0;
              transition: all 0.2s ease-in-out;
              cursor: pointer;
              user-select: none;
            }
            #locked:hover {
              color: rgba(225, 225, 225, 0.8) !important;
            }
            #fm-settings {
              width: 95%;
              height: 84%;
              display: none;
              padding: 5%;
              color: var(--secondary);
            }
            .settingsSections {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 40% 1fr;
              grid-template-rows: 1fr;
            }
            .settingsSections > div {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: center;
            }
            .settingsSectionsSlider {
              width: 94%;
              height: 100%;
              display: grid;
              grid-template-columns: 40% 1fr;
              grid-template-rows: 1fr;
              padding-right: 6%;
            }
            .settingsSectionsSlider > div {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: center;
            }
            /* The switch - the box around the slider */
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 24px;
            }

            /* Hide default HTML checkbox */
            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            /* The slider */
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: var(--primary);
              -webkit-transition: .4s;
              transition: .4s;
            }

            .toggleBoxes {
              width: 100%;
              height: 100%;
              display: grid;
              // grid-template-columns: 1fr;
              // grid-template-rows: 1fr;
              justify-content: center;
              align-items: center;
            }

            .slider:before {
              position: absolute;
              content: "";
              height: 18px;
              width: 18px;
              left: 4px;
              bottom: 3px;
              background-color: white;
              -webkit-transition: .4s;
              transition: .4s;
            }

            input:checked + .slider {
              background-color: var(--accent);
            }

            input:focus + .slider {
              box-shadow: 0 0 1px var(--secondary);
            }

            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(34px);
            }

            /* Rounded sliders */
            .slider.round {
              border-radius: 24px;
            }

            .slider.round:before {
              border-radius: 50%;
            }
            .saveButs {
              width: 100%;
              height: 50px;
              display: flex;
              justify-content: flex-end;
            }
            .saveButs div {
              width: 100px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--accent);
              border-radius: 5px;
              cursor: pointer;
              user-select: none;
              margin-right: 5%;
              color: var(--accent);
              transition: all 0.2s ease-in-out;
            }
            .saveButs div:hover {
              background-color: var(--accent);
              color: black;
            }
            #creditNames {
              justify-self: end;
              padding-right: 10%;
            }
            #creditsSect {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 20% 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            #creditsBut {
              width: 100%;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--primary);
              border-radius: 5px;
              color: var(--secondary);
            }
            .soundSlider1 {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            #fm-profile {
              width: 92%;
              height: 84%;
              padding-left: 4%;
              padding-right: 4%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 60% 25% 15%;
            }
            #profileMain {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              overflow: hidden;
            }
            #proImgSect {
              width: 100%;
              height: auto;
            }
            #proImg {
              width: 100%;
              height: auto;
            }
            #profileDesc {
              width: 100%;
              height: 88%;
              padding-top: 2%;
            }
            #profileButs {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: end;
              align-items: center;
            }
            .editButs {
              width: 100px;
              height: 60%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--primary);
              border-radius: 5px;
              color: var(--secondary);
              cursor: pointer;
              margin-left: 5%;
            }
            .proInfoSect {
              width: 95%;
              height: auto%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              padding-left: 5%;
            }
            .proInfoInput {
              text-align: right;
              color: var(--secondary);
            }
            .proLabel {
              user-select: none;
            }
            #profileDesc {
              color: var(--secondary);
            }
         </style>
         <div id="uniMenu">
            <div id="menuHeader">
              <div id="topMenu">
               <img id="uniMenuLogo" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/SCOGE\u0301_Logo-red.png" draggable="false">
               <div id="uniMenuIcon">&#8682;</div>
              </div>
              <div id="uniVersion">
                Universe - v. 0.0.1
              </div>
            </div>
            <div id="menuItems">
              <div id="uniMenuShop" class="menuTabs">
                <div>
                  <svg id="uniMenuShopSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.6 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M49.63,6.44l2.66,2.65a7.31,7.31,0,0,1,0,10.3L38.67,33,25.73,20.05,39.34,6.44A7.28,7.28,0,0,1,49.63,6.44Z"/><path class="cls-1" d="M14.72,46.66,12.07,44a7.28,7.28,0,0,1,0-10.29L25.68,20.1l13,12.95L25,46.66A7.31,7.31,0,0,1,14.72,46.66Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuEnhancements">Enhancements</div>
              </div>
              <div id="uniMenuItems" class="menuTabs">
                <div>
                  <svg id="uniMenuItemsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;}.cls-2{fill:#ff002d;}</style></defs><path class="cls-1" d="M3.62,17.8,32,32.08a.73.73,0,0,0,.35.09.74.74,0,0,0,.36-.09L61.09,17.8a.79.79,0,0,0,.44-.72.81.81,0,0,0-.46-.71L32.69,3.08a.79.79,0,0,0-.67,0L3.64,16.37a.79.79,0,0,0,0,1.43Z"/><path class="cls-2" d="M61.07,25.5,54.9,22.6a.81.81,0,0,0-1.06.39A.79.79,0,0,0,54.23,24l4.68,2.2L32.35,39.61,5.79,26.24l4.61-2.15a.8.8,0,0,0-.68-1.45L3.64,25.5a.77.77,0,0,0-.46.7.82.82,0,0,0,.44.73L32,41.21a.85.85,0,0,0,.35.08.86.86,0,0,0,.36-.08L61.09,26.93a.82.82,0,0,0,.44-.73A.78.78,0,0,0,61.07,25.5Z"/><path class="cls-2" d="M61.07,35,54.9,32.13a.79.79,0,0,0-1.06.38.81.81,0,0,0,.39,1.06l4.68,2.19L32.35,49.13,5.79,35.76l4.61-2.15a.81.81,0,0,0,.38-1.06.79.79,0,0,0-1.06-.38L3.64,35a.78.78,0,0,0-.46.71.82.82,0,0,0,.44.72L32,50.73a.72.72,0,0,0,.35.08.73.73,0,0,0,.36-.08L61.09,36.45a.82.82,0,0,0,.44-.72A.8.8,0,0,0,61.07,35Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuInventory">Inventory</div>
              </div>
              <div id="uniMenuProfile" class="menuTabs">
                <div>
                  <svg id="uniMenuProfileSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M31.5,26.12A11.42,11.42,0,1,1,42.92,14.7,11.43,11.43,0,0,1,31.5,26.12Zm0-21.55A10.13,10.13,0,1,0,41.63,14.7,10.15,10.15,0,0,0,31.5,4.57Z"/><path class="cls-1" d="M45.79,49.82h-28a.65.65,0,0,1-.64-.65V39.49a14.66,14.66,0,1,1,29.32,0v9.68A.65.65,0,0,1,45.79,49.82ZM18.41,48.53H45.15v-9a13.37,13.37,0,1,0-26.74,0Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuProfile">Profile</div>
              </div>
              <div id="uniMenuSettings" class="menuTabs">
                <div>
                  <svg id="uniMenuSettingsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M61.26,13.89H24a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,13.89Z"/><path class="cls-1" d="M18.21,13.89H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,13.89Z"/><path class="cls-1" d="M61.26,28.27H46.64a.8.8,0,0,1-.8-.8.79.79,0,0,1,.8-.79H61.26a.79.79,0,0,1,.8.79A.8.8,0,0,1,61.26,28.27Z"/><path class="cls-1" d="M42.62,28.27H4.28a.79.79,0,0,1-.79-.8.79.79,0,0,1,.79-.79H42.62a.79.79,0,0,1,.8.79A.8.8,0,0,1,42.62,28.27Z"/><path class="cls-1" d="M61.26,42.64H22.19a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,42.64Z"/><path class="cls-1" d="M18.21,42.64H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,42.64Z"/><path class="cls-1" d="M18.21,20.28a.79.79,0,0,1-.79-.8V5.37a.79.79,0,0,1,.79-.8.8.8,0,0,1,.8.8V19.48A.8.8,0,0,1,18.21,20.28Z"/><path class="cls-1" d="M18.21,49.7a.79.79,0,0,1-.79-.8V34.79a.79.79,0,0,1,.79-.79.79.79,0,0,1,.8.79V48.9A.8.8,0,0,1,18.21,49.7Z"/><path class="cls-1" d="M46.64,34.59a.8.8,0,0,1-.8-.8V19.48a.79.79,0,0,1,.8-.79.79.79,0,0,1,.79.79V33.79A.79.79,0,0,1,46.64,34.59Z"/></svg>  
                </div>
                <div class="uniMenuTxt" id="menuSettings">Settings</div>
              </div>
              <div id="uniMenuHelp" class="menuTabs selectedMenu2">
                <div>
                  <svg id="uniMenuHelpSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuHelp">Help</div>
              </div>
              <div id="uniMenuFeedback" class="menuTabs">
                <div>
                  <svg id="uniMenuFeedbackSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M14.08,41.05h23L48.9,49a1.27,1.27,0,0,0,2-1V40.42c2.3-1,5.08-3.09,5.08-5.92V11.87a6.56,6.56,0,0,0-6.54-6.55H14.08a6.55,6.55,0,0,0-6.54,6.55V34.5A6.55,6.55,0,0,0,14.08,41.05Z"/><line class="cls-1" x1="15.21" y1="14.75" x2="47.49" y2="14.75"/><line class="cls-1" x1="15.21" y1="21.75" x2="47.49" y2="21.75"/><line class="cls-1" x1="15.6" y1="28.74" x2="47.88" y2="28.74"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuFeedback">Feedback</div>
              </div>
              <div id="uniMenuExit" class="menuTabs">
                <div>
                  <svg id="uniMenuExitSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.05 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M57.56,50.14H22.43a.64.64,0,0,1-.63-.64V32.61a.64.64,0,1,1,1.27,0V48.86H56.93V4.24H23.07V21.45a.64.64,0,1,1-1.27,0V3.6A.64.64,0,0,1,22.43,3H57.56a.64.64,0,0,1,.64.64V49.5A.64.64,0,0,1,57.56,50.14Z"/><path class="cls-1" d="M35.38,27.66H8.07a.64.64,0,1,1,0-1.27H35.38a.64.64,0,0,1,0,1.27Z"/><path class="cls-1" d="M13.89,32.39a.63.63,0,0,1-.37-.12L6.88,27.54a.64.64,0,0,1,0-1l6.64-4.73a.63.63,0,0,1,.89.15.65.65,0,0,1-.15.89L8.35,27l5.91,4.2a.64.64,0,0,1-.37,1.16Z"/></svg>
                </div>
                <div class="uniMenuTxt">Exit</div>
              </div>
            </div>
            <div id="fullMenu">
              <div id="menuMessage">
                <div>
                  <div id="menuMessageHead">GET WALLET</div>
                  <div id="menuMessageText">You do not have a wallet.</div>
                </div>
              </div>
              <div id="menuLoadingScreen">
                <div id="loading">LOADING...</div>
                <div id="loadIcon"></div>
              </div>
              <div id="fm-header">
                <div id="fm-header-headline">
                  <span id="fm-menu1" class="men-active ht selectedMenu">Player</span>
                  <span id="fm-menu2" class="men-active ht">Wallet</span>
                  <span id="fm-menu3" class="men-active ht">Network</span>
                </div>
                <div id="uniMenuIcon2">
                  &#8682;
                </div>
              </div>
              <div id="fm-enhancements"></div>
              <div id="fm-inventory">
                <div id="inventory-images">
                </div>
                <div id="inventory-text">
                  <p>Inventory</p>
                  <span id="inventoryInnerText">
                    This iten is not for sale. It is a gift from the creator. You can trade it with other users. This is a limited edition item. There are 1,000 of this item in existence. The highest quality of this edition is 1,000. The lowest quality of this edition is 1. The current quality of this edition is 1,000. The current price of this edition is 0.00 ICP.
                  </span>
                </div>
                <div id="inventory-cta">
                  <div id="invCtaBut">USE</div>
                </div>
              </div>
              <div id="fm-profile">
                <div id="profileMain">
                  <div id="proImgSect">
                    <img id="proImg" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/ui.png">
                  </div>
                  <div id="proInfo">
                    <div class="proInfoSect">
                      <div class="proLabel">Name:</div>
                      <div id="proLabelName" class="proInfoInput">Daniel lans</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Identifier:</div>
                      <div id="proLabelIdentity" class="proInfoInput">Male</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Rank:</div>
                      <div id="proLabelRank" class="proInfoInput">1</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Email:</div>
                      <div id="proLabelEmail" class="proInfoInput">Daniell@gmail.com</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Progress:</div>
                      <div id="proLabelProgress" class="proInfoInput">50%</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Power Ups:</div>
                      <div id="proLabelEnh" class="proInfoInput">() - () - ()</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Class:</div>
                      <div id="proLabelClass" class="proInfoInput">4</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Domains:</div>
                      <div id="proLabelDom" class="proInfoInput">1, 20, 13</div>
                    </div>
                  </div>
                </div>
                <div id="profileDesc">
                  Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. Tomorrow I will be foolish, so I want to change the world again. In the end, I will be wise, so I will change myself again.
                </div>
                <div id="profileButs">
                  <div id="proEdit" class="editButs">Edit</div>
                  <div id="proSave" class="editButs">Save</div>
                </div>
              </div>
              <div id="fm-settings">
                <div class="settingsSections">
                  <div>Toggle Fullscreen</div>
                  <div class="toggleBoxes">
                    <label class="switch">
                    <input type="checkbox" checked="checked">
                    <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="settingsSections">
                  <div>Notifications</div>
                  <div class="toggleBoxes">
                    <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="settingsSectionsSlider">
                  <div>Sound</div>
                  <div>
                    <input type="range" min="0" max="5" value="3" class="soundSlider1" id="myRange">
                  </div>
                </div>
                <div class="settingsSectionsSlider">
                  <div>Music</div>
                  <div>
                    <input type="range" min="0" max="5" value="3" class="soundSlider1" id="myRange">
                  </div>
                </div>
                <!--
                <div id="creditsSect">
                    <div id="creditsBut">Credits</div>
                    <div id="creditNames">Sountrack: ROTS Worldwide</div>
                </div>
                -->
                <div class="saveButs">
                  <div>Save</div>
                </div>
              </div>
              <div id="fm-help">
                <div class="help-tabs ht1">
                  <div class="helpSection">
                    <div class="arrow" id="leftArr">&#8227;</div>
                    <div class="arrow" id="upArr">&#8227;</div>
                    <div class="arrow" id="rightArr">&#8227;</div>
                    <div class="arrow" id="downArr">&#8227;</div>
                    <div class="helpText">Move Player</div>
                  </div>
                  <div class="helpSection">
                    <div id="spaceHelp">SPACE</div>
                    <div class="helpText">Interact</div>
                  </div>
                  <div class="helpSection">
                    <div id="leftHelp">LEFT CLICK</div>
                    <div class="helpText">Explore / Action</div>
                  </div>
                  <div class="helpSection">
                    <div class="boxesUi"></div>
                    <div class="helpText">Player</div>
                  </div>
                </div>
                <div class="help-tabs ht2">
                  <div>
                    Citizens across T.A.O.S City use the <span class="active"><a href="https://plugwallet.ooo/" target="_blank">Plug Wallet</a></span> to manage and secure digital assets on their Internet Computer.<br><br>The Plug Wallet allows you to create and manage your digital identity, send and receive payments, participate in governance, and interact with applications and services on the <span class="active" id="switch23">decentralized network</span>.
                  </div>
                </div>
                <div class="help-tabs ht3">
                <div>
                  T.A.O.S City's network is powered by the <span class="active"><a href="https://internetcomputer.org/" target="_blank">Internet Computer</a></span>, a revolutionary decentralized network powered by the ICP token.<br><br>In a city fragmented by distinct governors, the Internet Computer offers citizens in each sector a tool to build powerful neural apps and contracts, free from the tyrannical, centralized old internet. With <span class="active"><a href="https://www.coinbase.com/price/internet-computer" target="_blank">ICP</a></span> (aka RedDisks/Reds) citizens are building a brighter world.
                </div>
              </div>
              </div>
              <div id="fm-feedback">
                <div id="feedbackHeadline">Help make T.A.O.S City better.</div>
                <input type="email" id="feedbackEmailInput" placeholder="Email" value="" maxlength="45">
                <textarea id="feedbackInput" placeholder="Enter your feedback here..." maxlength="320"></textarea>
                <div id="feedbackButton">SEND</div>
              </div>
            </div>
            <div id="fullMenuBG"></div>
            <div id="pinMenu">
              <div id="locked">UNLOCK</div>
            </div>
            <div id="adMenu"></div>
         </div>
         `}}customElements.define("scoge-unimenu",getUniMenu);class scogeUpdates extends HTMLElement{constructor(){super();ae(this,"closeModal",()=>{document.getElementById("updatesModal").style.display="none"});ae(this,"Glow",()=>{this.shadow.getElementById("updatesModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("updatesModal").style.boxShadow="0 0 10px 0 var(--primary)",this.shadow.getElementById("updatesModal").style.border="1px solid var(--primary)"});ae(this,"unGlow",()=>{this.shadow.getElementById("updatesModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("updatesModal").style.boxShadow="0 0 10px 0 var(--accent)",this.shadow.getElementById("updatesModal").style.border="1px solid var(--accent)"});this.shadow=this.attachShadow({mode:"open"})}get updates(){return this.getAttribute("updates")}set updates(O){this.setAttribute("updates",O)}static get observedAttributes(){return["updatese"]}attributeChangedCallback(O,z,U){O==="updates"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("closeBtn").addEventListener("click",this.closeModal),this.shadow.getElementById("closeBtn").addEventListener("mouseover",this.Glow),this.shadow.getElementById("closeBtn").addEventListener("mouseout",this.unGlow)}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("../assets/fonts/Garamond-Regular.ttf");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "Garamond";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/Garamond-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            ::placeholder {
              color: #b5d3d1;
            }
            a { 
              color: var(--primary);
              text-decoration: underline;
            }
            a:hover {
              color: var(--secondary);
            }
            a:visited {
              color: var(--primary);
            }
            #mainBody {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.9);
              left: 0;
              top: 0;
              position: fixed;
              z-index: 4;
              overflow: hidden;
            }
            #updatesModal {
              width: 40%;
              height: 40%;
              background-color: rgba(0, 0, 0, 0.9);
              position: absolute;
              left: 30%;
              top: 30%;
              z-index: 6;
              padding: 20px;
              border-radius: 10px;
              border: 1px solid black;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 80% 20%;
              border: 1px solid var(--accent);
              box-shadow: 0 0 10px 0 var(--accent);
              overflow: hidden;
            }
            #leftPan {
              width: 95%;
              height: 100%;
              font-family: "BS-R";
              font-size: 1.6rem;
              color: var(--accent);
              padding-right: 5%;
              overflow: hidden;
            }
            #leftPan p {
              font-family: "Garamond";
              font-size: 1.3rem;
              color: var(--secondary);
              line-height: 1.1;
              margiin-top: 0;
            }
            #rightPan {
              width: 100%;
              height: 100%;
              background-image: url("https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/s-Uni-sq.jpg");
              background-size: cover;
            }
            #footer {
              width: 100%;
              height: 100%;
            }
            #closeBtn {
              transition: all 0.3s ease-in-out;
            }
            #closeBtn:hover {
              transform: scale(1.1);
              rotate: 90deg;
            }
            h3 {
              margin-top: 0;
            }
            @media screen and (max-width: 769px) {
              #mainBody {
                display: none !important;
              }
            }
         </style>
         <div id="mainBody">
         <div id="updatesModal">
            <div id="closeBtn" style="position: absolute; right: 0; top: 0; padding: 10px; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div id="leftPan">
              <h3>Join the SCOG\xC9 Universe Mailing List</h3>
              <p>Get early access to the SCOG\xC9 Universe launching on the <span><a href="https://internetcomputer.org/" target="_blank">Internet Computer</a></span> and receive updates on our upcoming stories and 'NMC' Token. Don't miss out on this opportunity to join us on this thrilling journey.</p>
            </div>
            <div id="rightPan">
            </div>
            <div id="footer">
              <scoge-subscribe subscribe="subscribe" id="subscribeComp2" width="90%" height="10%"></scoge-subscribe>
            </div>
         </div>
         </div>
         `}}customElements.define("scoge-updates",scogeUpdates);var currentPage=1,currentBtsPage=1,inventoryTotal=2e3,lexBio="Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOG\xC9 reach its full potential.",ogeBio="Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.";class dtInvestors extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get invest(){return this.getAttribute("invest")}set invest(w){this.setAttribute("invest",w)}static get observedAttributes(){return["invest"]}attributeChangedCallback(w,O,z){w==="invest"&&this.render()}scrollToMenu(){var w=this.shadow.querySelectorAll(".menu-item");w.forEach(O=>{O.addEventListener("click",z=>{var U=z.target.getAttribute("id"),F=this.shadow.getElementById(U.replace("Menu","Sect")),j=F.offsetTop,q=j-200;U==="dataMenu"&&(q=j-0),U==="aboutMenu"&&(q=j-50),this.shadow.getElementById("scrollBody").scrollTo({top:q,behavior:"smooth"}),w.forEach(G=>{G.style.color="var(--primary)",G.style.borderBottom="var(--primary) 1px solid"}),z.target.style.color="var(--secondary)",z.target.style.borderBottom="var(--secondary) 1px solid"}),this.shadow.getElementById("scrollBody").addEventListener("scroll",()=>{var z=this.shadow.getElementById("scrollBody").scrollTop;w.forEach(U=>{var F=U.getAttribute("id"),j=this.shadow.getElementById(F.replace("Menu","Sect")),q=j.offsetTop;z>=q-200&&(w.forEach(G=>{G.style.color="var(--primary)",G.style.borderBottom="var(--primary) 1px solid"}),U.style.color="var(--secondary)",U.style.borderBottom="var(--secondary) 1px solid"),z>=this.shadow.getElementById("scrollBody").scrollHeight-this.shadow.getElementById("scrollBody").clientHeight-100&&(w.forEach(G=>{G.style.color="var(--primary)",G.style.borderBottom="var(--primary) 1px solid"}),this.shadow.getElementById("contactMenu").style.color="var(--secondary)",this.shadow.getElementById("contactMenu").style.borderBottom="var(--secondary) 1px solid")})})})}openInvestor(){this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="0%",clearShop(),clearSettings(),clearFilter()}closeInvestor(){window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-70%")}nextImage(){currentPage>=2&&(currentPage=0),currentPage++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}previousImage(){currentPage<=1?currentPage=2:currentPage--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}nextBtsImage(){currentBtsPage>=9&&(currentBtsPage=0),currentBtsPage++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}preBtsImage(){currentBtsPage<=1?currentBtsPage=9:currentBtsPage--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}slidersTotal(){var w=this.shadow.getElementById("avgRetailSlider").value,O=this.shadow.getElementById("dtcQtySlider").value,z=this.shadow.getElementById("accountsSlider").value,U=this.shadow.getElementById("wsOrderSlider").value,F=w*O+w/2*(U*z);this.shadow.getElementById("finalTotal").innerHTML=F.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}sliders(){this.shadow.getElementById("budgetSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("budNum").innerHTML=this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("dcqNum").innerHTML=Math.round(inventoryTotal),this.shadow.getElementById("wqtyNum").innerHTML=Math.round(inventoryTotal)}.bind(this)),this.shadow.getElementById("avgRetailSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("avrNum").innerHTML=this.shadow.getElementById("avgRetailSlider").value}.bind(this)),this.shadow.getElementById("avgPCSlider").addEventListener("input",function(){this.slidersTotal(),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,console.log(inventoryTotal),this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("avpNum").innerHTML=this.shadow.getElementById("avgPCSlider").value}.bind(this)),this.shadow.getElementById("dtcQtySlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this)),this.shadow.getElementById("accountsSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("waNum").innerHTML=this.shadow.getElementById("accountsSlider").value}.bind(this)),this.shadow.getElementById("wsOrderSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("wsOrderSlider").value}.bind(this)),this.shadow.getElementById("wrperSlider").addEventListener("input",function(){this.slidersTotal();var w=this.shadow.getElementById("wrperSlider").value/2+50,O=this.shadow.getElementById("wrperSlider").value/2-50;this.shadow.getElementById("wrP1").innerHTML=Math.round(Math.abs(O)),this.shadow.getElementById("wrP2").innerHTML=+Math.round(w),this.shadow.getElementById("wsOrderSlider").value=Math.round(inventoryTotal*(Math.abs(O)/100)),this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("dtcQtySlider").value=Math.round(inventoryTotal*(w/100)),this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this))}team(){this.shadow.getElementById("teamMain").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Starnilas Oge",this.shadow.getElementById("memberProf").innerHTML="Founder & Creative Director",this.shadow.getElementById("memberBio").innerHTML=ogeBio}.bind(this)),this.shadow.getElementById("team2").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Lex Fenwick",this.shadow.getElementById("memberProf").innerHTML="The Dow Jones, WSJ",this.shadow.getElementById("memberBio").innerHTML=lexBio}.bind(this))}connectedCallback(){this.render(),document.getElementById("investBut").addEventListener("click",this.openInvestor.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeInvestor.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this)),this.sliders(),this.team(),this.scrollToMenu()}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: black; 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: var(--accent);
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: var(--secondary); 
            }
            #investorComp {
              width: 70%;
              height: 98%;
              background: black;
              position: fixed;
              top: 0;
              right: 0%;
              z-index: 4;
              font-family: "BS-R";
              padding-top: 2%;
              overflow-y: visible;
              overflow-x: visible;
              transition: 1s;
            }
            #header {
              height: 15%;
              width: 98%;
              float: left;
              padding-left: 2%;
              padding-bottom: 2%;
              position: -webkit-sticky; /* Safari */
              position: sticky;
              top:0;
              z-index:4;
              background-color: rgba(0,0,0,.9);
            }
            #head {
              font-size: 34px;
            }
            #sub {
              margin-bottom: 2%;
              color: var(--accent);
            }
            .body {
              width: 90%;
              color: var(--primary);
              font-size: 1em;
              line-height: 2em;
              padding-left: 5%;
              letter-spacing: 1px;
              padding-bottom: 2%;
            }
            #campGallery {
              width: 100%;
              height: auto;
              float: left;
              margin-bottom: 2%;
              position: relative;
            }
            #campGallery img {
              width: 100%;
            }
            #looks {
              height: 40%;
              width: 100%;
              overflow-y: hidden;
              overflow-x: scroll;
              float: left;
              margin-bottom: 2%;
            }
            #looks img {
              height: 100%;
            }
            #film {
              width: 100%;
              height: 65%;
              float: left;
              margin-bottom: 4%;
            }
            #campIcon {
              width: 4%;
              height: 4%;
              position: absolute;
              left: -4%;
              top: 9.3%;
              z-index: 5;
              background-color: #ff002d;
              border-right: none;
              border-top-left-radius: 8%;
              border-bottom-left-radius: 8%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-R";
              color: white;
              cursor: pointer;
              font-size: 12px;
            }
            #scrollBody {
              width: 100%;
              height: 100%;
              float: left;
              overflow-y: scroll;
              overflow-x: hidden;
            }
            #imageInterface, #imageInterface2 {
              position: absolute;
              width: 10%;
              height: 5%;
              background-color: rgba(0, 0, 0, 0.8);
              bottom: 5%;
              left: 45%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              border-radius:6px;
            }
            #preGalleryImg, #preBtsImg {
              transform: rotate(180deg);
            }
            .arrow {
              transition: 0.3s;
              cursor: pointer;
            }
            .arrow:hover {
              color: var(--secondary);
            }
            #btsGallery {
              width: 100%;
              height: auto;
              overflow: hidden;
              float: left;
              display: flex;
              justify-content: center;
              position: relative;
              margin-top: 2%;
            }
            #btsGallery img {
              width: 100%;
            }
            #runway {
              width: 80%;
              height: auto;
              float: left;
              padding-left:10%;
              padding-right:10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              color: var(--secondary);
              font-size: 12px;
              margin-bottom: 5%;
            }
            #runwayBody {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              letter-spacing: 1px;
              line-height: 2em;
            }
            #runwayInner {
              display: grid;
              grid-template-columns: 1fr;
              grid-tenplate-rows: 1fr 1fr 1fr 1fr 1fr;
            }
            .primary {
              color: var(--primary);
            }
            .secondary {
              color: var(--secondary);
            }
            #film iframe {
              width: 100%;
              height: 100%;
            }
            #menuHead {
              height: 10%;
              padding-right: 8%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              margin-bottom: 5%;
              color: var(--primary);
            }
            #team {
              width: 100%;
              height: 50%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
            }
            #close {
              width: 100%;
              height: 40% !important;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              margin-top: 30%;
              margin-bottom: 0% !important;
            }
            #teamImg {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
            }
            .profile img {
              width: 60%;
              border-radius: 10px;
            }
            .advisors {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: center;
            }
            .advisors img {
              width: 30%;
              transition: .8s all;
            }
            #teamMain {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            #teamMain img {
              transition: .8s all;
            }
            .advisors img:hover {
              width: 35%;
            }
            #menuHead div {
              padding-bottom: 2px;
              border-bottom: 1px solid var(--primary);
            }
            .generalImages {
              width: 100%;
            }
            .generalImages img {
              width: 100%;
            }
            #projections {
              width: 80%;
              height: 40%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 10% 70% 20%;
              overflow: hidden;
              padding-top: 5%;
              margin-bottom: 5%;
              margin-left: 10%;
              margin-right: 10%;
              padding-left: 2%;
            }
            #pProjBody {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            }
            #pProjFooter {
              display: grid;
              grid-template-columns: 50% 20% 30%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              color: var(--accent);
            }
            .pElement {
              display: grid;
              grid-template-columns: 20% 30% 50%;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: start;
            }
            .numberEl {
              padding-left: 5%;
              color: var(--accent);
            }
            #finalNumber {
              font-size: 28px;
            }
            .slidebox {
              display:block;
              width: 90%;
              padding-left: 5%;
              padding-right: 5%;
            }
            .slider {
              -webkit-appearance: none;
              width: 100%;
              height: 2px;
              background: var(--primary);
              outline: none;
              opacity: 0.7;
              -webkit-transition: .2s;
              transition: opacity .2s;
            }
            
            .slider:hover {
              opacity: 1;
            }
            
            .slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 10px;
              background: var(--accent);
              cursor: pointer;
            }
            
            .slider::-moz-range-thumb {
              width: 10px;
              height: 10px;
              background: var(--accent);
              cursor: pointer;
            }
            .pElHead {
              color: var(--secondary);
            }
            .body2 {
              width: 80%;
              color: var(--primary);
              font-size: 1em;
              line-height: 2em;
              padding-left: 10%;
              padding-right: 10%;
              letter-spacing: 1px;
              margin-bottom: 5%;
              margin-top: 5%;
            }
            h1 {
              padding-left: 5%;
              color: var(--secondary);
            }
            ol, ul {
              color: var(--accent);
            }
            .prime {
              color: var(--primary);
            }
            .acc {
              color: var(--accent);
            }
            .sec {
              color: var(--secondary);
            }
            .profile {
              cursor: pointer;
            }
            #pdfDL {
              text-decoration: underline;
              color: var(--accent);
            }
            #pdfDL:hover {
              color: var(--secondary);
            }
            .menu-item {
              cursor: pointer;
            }
            #contactSect {
              width: 80%;
              height: 20%;
              padding-left: 10%;
              padding-right: 10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              margin-top: 0%;
              margin-bottom: 15%;
            }
            #contact {
              background-color: var(--primary);
              color: white;
              padding: 2% 4%;
              border-radius: 5px;
              transition: .5s all;
              cursor: pointer;
              font-size: 14px;
            }
            #contact a {
              color: white;
              text-decoration: none;
            }
            #contact:hover {
              background-color: var(--secondary);
              color: black;
              font-weight: bold;
              font-size: 16px;
            }
            #contact:hover a {
              color: black;
            }
            @media screen and (max-width: 769px) {
              #head {
                font-size: 1.8em;
              }
              #contactSect {
                width: 80%;
                height: 20%;
                margin-top: 250px;
                margin-bottom: 150px;
              }
              #close {
                width: 100%;
                height: 40% !important;
                margin-top: 500px;
              }
              #campIcon {
                display: none;
              }
              #investorComp {
                width: 100%;
                height: 85%;
                background: black;
                position: fixed;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto !important;
                top: 18%;
                right: 0%;
                z-index: 8;
                font-family: "BS-R";
                padding-top: 1%;
                overflow-y: visible;
                overflow-x: visible;
                transition: 1s;
              }

              #projections {
                grid-template-columns: 1fr;
                grid-template-rows: 5% 80% 15% !important;
                width: 90%;
                margin-left: 5%;
                margin-right: 5%;
                padding-left: 0%;
                height: auto !important;
                padding-top: 0%;
              }
              .pElement {
                width: 100%;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                grid-row-gap: 10%;
                margin-bottom: 5%;
              }
              #pProjFooter {
                grid-template-columns: 5% 40% 55%;
                height: auto;
                margin-top: 50px;
              }
              .numberEl {
                width: 90%;
                text-align: right;
              }
              #runwayBody {
                display: grid;
                grid-template-columns: 1fr;
                letter-spacing: 1px;
                line-height: 2em;
                font-size: 1.2em !important;
              }
              #menuHead {
                height: 10%;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr; 
                grid-template-rows: auto;
                grid-row-gap: 5px;
                align-items: center;
                justify-items: center;
                margin-bottom: 5%;
                color: var(--primary);
              }
              #runway {
                padding-bottom: 5%%;
              }
              #body {
                height: 100%;
                width: 96%;
              }
              #header {
                width: 98%;
                height: auto;
                padding-bottom: 2%;
              }
              #film {
                height: 40%;
              }
              #film iframe {
                height: 100%;
              }
              #preGalleryImg {
                display: none;
              }
              #imageInterface  span {
                display: none;
              }
              #imageInterface {
                background-color: var(--accent);
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 10%;
                height: 10%;
                left: auto;
                right: 5%;
                border-radius: 5px;
              }
              #nextGalleryImg {
                font-size: 30px;
              }
              #preBtsImg {
                display: none;
              }
              #imageInterface2  span {
                display: none;
              }
              #imageInterface2 {
                background-color: var(--accent);
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 10%;
                height: 20%;
                left: auto;
                bottom: 10.5%;
                right: 5%;
                border-radius: 5px;
              }
              #nextBtsImg {
                font-size: 30px;
              }
              #gImg {
                width: auto !important;
                height: 100%;
              }
              #galleryimg {
                height: 100%;
                width: auto;
                display: flex;
                justify-content: center;
              }
              #campGallery {
                height: 60%;
              }
              .arrow:hover {
                color: var(--primary);
              }
            }
         </style>
         <div id="investorComp">
            <div id="campIcon">
              X
            </div>
            <div id="scrollBody">
            <div id="header">
              <div id="head">Investor Presentation</div>
              <div id="sub">Version 1 - <span class="acc" style="cursor:pointer;"><a href="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/files/SCOGE-INVESTOR-PRE22-R1.pdf" id="pdfDL" target="_blank">(Download PDF Version)</a></span></div>
              <div id="menuHead">
                <div style="color: var(--secondary); border-color:var(--secondary);" id="introMenu" class="menu-item">INTRO</div>
                <div id="aboutMenu" class="menu-item">ABOUT</div>
                <div id="productMenu" class="menu-item">PRODUCT</div>
                <div id="edgeMenu" class="menu-item">EDGE</div>
                <div id="modelMenu" class="menu-item">MODEL</div>
                <div id="newsMenu" class="menu-item">NEWS</div>
                <div id="growthMenu" class="menu-item">GROWTH</div>
                <div id="tractionMenu" class="menu-item">TRACTION</div>
                <div id="raiseMenu" class="menu-item">RAISE</div>
                <div id="dataMenu" class="menu-item">PROJECTIONS</div>
                <div id="teamMenu" class="menu-item">TEAM</div>
                <div id="contactMenu" class="menu-item">CONTACT</div>
              </div>
            </div>
            <h1 id="introSect">INTRO</h1>
            <div class="body2" id="waveTest">
              <span class="acc" style="text-align:center; font-size:1.5em;">SCOG\xC9 is a new and evolving luxury fashion brand that focuses on catering to an untapped {} appetite for styles and stories from under-represented communities.</span><br><br>The brand serves as a powerful symbol of this community, making its members feel seen, valued, and stylish. SCOG\xC9 has the potential to make a real difference in the lives of its customers through its unique approach to luxury fashion and storytelling. Additionally, a growing trend of underrepresented communities craving more visibility in every market - a trend that can be seen in the popularity of Marvel's box office hit movie 'The Black Panther' and brands like Fenty Beauty - will partially attribute to SCOG\xC9's success.
            </div>
            <div class="generalImages">
              <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Banner-World-SCOGE-narrow.webp"/>
            </div>
            <div class="body2">
              Designer luxury brands are novel universes created to satisfy emotional needs. They serve people with a need to express themselves as imaginative and opulent through fashion. People dream, and luxury brands like SCOG\xC9 turn dreams into reality.
            </div>
            <h1 id="aboutSect">ABOUT</h1>
            <div id="campGallery">
              <div id="imageInterface">
                <div id="preGalleryImg" class="arrow">&#9658;</div>
                <span>|</span>
                <div id="nextGalleryImg" class="arrow">&#9658;</div>
              </div>
              <div id="galleryimg">
              <img id="gImg" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-1.webp" alt=""/>
              </div>
            </div>
            <div class="body2">
              SCOG\xC9 is a mens luxury fashion brand making products for an evolving luxury consumer with an affinity to exploring unique fictional worlds, and avant garde fashion. Our products are inspired by a world we\u2019ve created named bankoo. Each collection of products takes the SCOG\xC9 customer deeper into this world, satisfying the intrinsic need for exploration, and the extrinsic need for self-expression.<br><br>
              \u201CLuxury high price is not about tangible benefits,\u201D - The Luxury Strategy: Break the Rules of Marketing to Build Luxury Brands.
            </div>
            <h1 id="productSect">PRODUCTS</h1>
            <div id="looks">
              <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-full-products-opt1.jpeg" alt=""/>
            </div>
            <div class="body2">
              Our products are sourced and created in NYC, with a dedicated approach to up-cycling unused fabrics, trims and designs from previous seasons. We champion designing within our own world, defining our own trends, and becoming a part of the next guard of luxury fashion.<br><br>"Despite widespread staffing shortages and supply chain issues, the <span class="acc">fashion and apparel industry saw $180.5 billion in e-commerce revenue in 2021</span>, up from $145 billion in 2020." - 2022 Global Ecommerce Report: Fashion and Apparel
            </div>
            <h1 id="edgeSect">EDGE</h1>
            <div class="generalImages">
              <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-3.webp"/>
            </div>
            <div class="body2">
              The products and experiences we create are glimpses into a new bold world. We\u2019ve created our own world, with original places, cultures and stories, our edge is our originality. And each vivid exploration creates an opportunity to develop ip that deeply resonates with our customers. Anyone can make a story about star wars. But there will always be one star wars\u2122            
            </div>
            <h1 id="modelSect">MODEL</h1>
            <div class="body2">
              We are building a strong luxury brand. Our revenue will come primarily from d2c channels, but we will also work with select, brand-aligned wholesale partners.<br><br>Direct (~75% of revenue) - ordered online or purchased at SCOG\xC9 retail locations.<br>Wholesale (~25% of revenue) - available at select online and retail distributors.<br><br><span class="acc">Product Cost Range: $25 - $500</span><br><span class="acc">Product Price Range: $100 - $4000</span><br><br>
              Located blocks away from nyc\u2019s garment district gives us the ability to source fabric and trims on demand. We\u2019ve acquired manufacturing and production equipment to quickly develop and market test products, avoiding slow external sampling. We\u2019ve established lasting relationships with several manufacturers and identified scalable operating systems to handle large scale orders. Our product is shirts, pants, jackets, hats, layered garments, accessories, and some dresses.         
            </div>
            <h1 id="newsSect">NEWS</h1>
            <div id="film">
              <iframe id="yt" width="100%" height="630" src="https://www.youtube.com/embed/f_yQrIwtgYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="body2">
              
            </div>
            <div class="body2">
            \u201CPurchasing high-priced luxury items satisfies consumer\u2019s psychological needs for status and exclusivity. Through their purchases, luxury consumers demonstrate they are members of a prestigious, exclusive tribe.\u201D - forbes
            </div>
            <h1 id="growthSect">GROWTH</h1>
            <div class="body2">
              In 5 years we\u2019ll grow SCOG\xC9 into a multi-million dollar {} brand. Here\u2019s how:<br><br>
              <ul>
                <li>Global tradeshows: Expanding wholesale accounts globally.</li>
                <li>Global retail: Flagship SCOG\xC9 experiential retail locations in NYC.</li>
                <li>Inclusive seasonal fashion shows: 2 fashion presentation shows per year to develop partnerships and demand.</li>
                <li>Content distribution: Distributing captured content where our customers live online and offline.</li>
                <li>Leverage creative community: Marketing partnerships to reach extended audiences and customers.</li>
              </ul>
            </div>
            <h1 id="tractionSect">TRACTION</h1>
            <div class="body2">
              We\u2019ve participated in the contemporary fashion trade-show liberty fairs, garnering wholesale interest from retailers nationwide, and obtained our first {} sales agent. We successfully launched our first experiential retail concept, selling out of several products, and expanding our local community of fashion enthusiasts and creatives customer base.<br><br>After our retail concept we presented our first NYFW runway show, followed by launching our first experiential art exhibition to display exclusive products and expand our community of creative customers. Following our art exhibition, we produced our second and largest NYFW presentation to date. Expanding our visibility to a wider fashion industry audience of fashion editors and wholesalers.
            </div>
            <div id="btsGallery">
              <div id="imageInterface2">
                <div id="preBtsImg" class="arrow">&#9658;</div>
                <span>|</span>
                <div id="nextBtsImg" class="arrow">&#9658;</div>
              </div>
              <img id="btsImg" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-1.jpg"/>
            </div>
            <div class="body2">
              We have the vision and objective, now we need the team. So far, the development of the SCOG\xC9 brand is attributed to it\u2019s founder, friendships, and temporary contract help. Help is capital intensive, but delegation is key.<br><br>Right now, we\u2019re focused on three main things:
              <ol>
                <li>Developing great products.</li>
                <li>Retail and offline experiences.</li>
                <li>Building a team of passionate, creative, and talented individuals.</li>
              </ol>
            </div>
            <h1 id="raiseSect">RAISE</h1>
            <div class="body2">
            <span class="acc" style="font-size:24px;">Raise: $2.5m</span><br>Seed round - safe note<br>20% discount<br>$100k Minimum Buy-In<br>$10 million cap<br>5 year runway.
            </div>
            <div id="runway">
                <div id=runwayBody>
                  <div class="runwayInner">
                    <p class="prime">HIRING - $1.2M</p>
                    <p>4 FULL-TIME EMPLOYEES<br><span class="acc">$300K ANNUALLY</span></p>
                    <p>SALES DIRECTOR:<br>MANAGES FINANCE, WHOLESALE<br>ACCOUNTS, AND RETAIL</p>
                    <p>CFO / OPERATIONS DIRECTOR:<br>MANAGES FINANCE AND<br>RESOURCE ALLOCATION</p>
                    <p>MARKETING DIRECTOR:<br>MANAGES GROWTH STRATEGY</p>
                    <p>CREATIVE DIRECTOR:<br>DESIGNS AND DEVELOPS<br>PRODUCTS</p>
                  </div>
                  <div class="runwayInner">
                    <p class="prime">OPERATIONS - $500k</p>
                    <p>OFFICE/RETAIL</p>
                    <p>1 DUAL PURPOSE OFFICE/RETAIL SPACE.<br><span class="acc">$70K ANNUALLY</span></p>
                    <p>RETAIL BUILD OUT:<br><span class="acc">$20K ONE TIME BUILD OUT</span></p>
                    <p>OVERHEAD EXPENSES:<br><span class="acc">$10K ANNUALLY</span></p>
                    <p>20K, 4 YEAR BUFFER<br>RETAIL PROFIT RE-INVESTED<br>INTO PRODUCTION GROWTH.</p>
                  </div>
                  <div class="runwayInner">
                    <p class="prime">PRODUCT - $300k</p><p>SAMPLING & PRODUCTION</p>
                    <p>2 SAMPLING SEASONS<br><span class="acc">$20K ANNUALLY</span></p>
                    <p>2 PRODUCTION SEASONS<br><span class="acc">$40K ANNUALLY</span></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div class="runwayInner">
                    <p class="prime">GROWTH - $500k</p><p>CONTENT & MARKETING</p>
                    <p>CONTENT DEVELOPMENT FOR<br>USE ON WEB, PR, ADS AND SOCIAL<br><span class="acc">$25K ANNUALLY</span></p>
                    <p>2 FASHION SHOWS SEASONS<br><span class="acc">$40K ANNUALLY</span></p>
                    <p>ADS<br><span class="acc">$20K ANNUALLY</span></p>
                    <p>GUREILLA MARKETING<br><span class="acc">$10,000 ANNUALLY</span></p>
                    <p>COMMUNITY RETAIL EVENTS<br><span class="acc">$5K ANNUALLY</span></p>
                  </div>
                </div>
            </div>
            <h1 id="dataSect">PROJECTIONS</h1>
              <div id="projections">
                <div id="pProjHead">FINANCIAL PROJECTIONS</div>
                <div id="pProjBody">
                  <div class="pElement">
                    <div class="pElHead">Production Budget</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="100" max="500000" value="500000" id="budgetSlider">
                    </div>
                    <div class="numberEl">$<span id="budNum">500,000</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Avg. Product Cost</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="20" max="500" value="0" id="avgPCSlider">
                     </div>
                    <div class="numberEl">$<span id="avpNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Avg. Retail</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="100" max="2000" value="0" id="avgRetailSlider">
                    </div>
                    <div class="numberEl">$<span id="avrNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Wholesale % / DTC %</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="-100" max="100" value="0" id="wrperSlider">
                     </div>
                    <div class="numberEl"><span id="wrP1">50</span>% WS / <span id="wrP2">50</span>% DTC</div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">DTC Qty</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="0" max="2000" value="0" id="dtcQtySlider">
                     </div>
                    <div class="numberEl"><span id="dcqNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Wholesale Order Qty.</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="0" max="2000" value="0" id="wsOrderSlider">
                     </div>
                    <div class="numberEl"><span id="wqtyNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Wholesale Accounts</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="0" max="50" value="1" id="accountsSlider">
                     </div>
                    <div class="numberEl"><span id="waNum">1</span></div>
                  </div>
                </div>
                <div id="pProjFooter">
                  <div></div>
                  <div>Est. Annual Revenue</div>
                  <div id="finalNumber">$<span id="finalTotal">0</span></div>
                </div>
              </div>
            <h1 id="teamSect">TEAM</h1>
            <div id="team">
                <div id="teamImg">
                  <div id="teamMain" class="profile">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/profiles/SCOGE-profile-1x1.jpg"/>
                  </div>
                  <div id="team2" class="profile advisors">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/profiles/LEX-profile-1x1.webp"/>
                  </div>
                </div>
                <div id="teamInfo">
                    <div class="body2 acc">
                      <h2 style="margin-bottom:0px;" id="memberName">Starnilas C. Oge</h2>
                      <h3 style="margin-top:0px;" id="memberProf">Founder & Creative Director</h3>  
                    </div>
                    <div class="body2" id="memberBio">
                      Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.
                    </div>
                    <div class="body2 sec">
                      Advisor:<br>
                      Lex Fenwick (The Dow Jones, WSJ)
                    </div>
                 </div>
            </div>
            <div id="close">
              <div class="body2 acc" style="text-align:center; font-size:1.5em;">
                If you're interested in helping to build the next great luxury fashion brand catering to an untapped {} market, join me for a call! I would be more than happy to chat with you and answer any questions you may have.
              </div>
            </div>
            <div id="contactSect">
              <div id="contact"><a href="https://calendly.com/scoge/30min" target="_black">I'M IN, LET'S CHAT!</a></div>
            </div>
            </div>
         </div>
         `}}customElements.define("scoge-investors",dtInvestors);class dialogueBox extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get dialogue(){return this.getAttribute("dialogue")}set dialogue(w){this.setAttribute("dialogue",w)}static get observedAttributes(){return["dialogue"]}attributeChangedCallback(w,O,z){w==="dialogue"&&this.render()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
           <style>
              @font-face {
                  font-family: "BS-R";
                  src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                  font-weight: normal;
                  font-style: normal;
              }
              :root {
                --primary: #ff002d;
                --secondary: #b5d3d1;
                --accent: #94be8c;
              }
              ::placeholder {
                color: #b5d3d1;
              }
              #dialogue {
                position: absolute;
                background-color: yellow;
                z-index: 4;
                white-space: nowrap;
              }
              #diaMain {
                width: auto;
                height: auto;
                background-color: black;
                color: var(--primary);
                z-index: 10;
                padding: .5rem;
                white-space: nowrap;
                font-family: "American Typewriter", "BS-R";
                letter-spacing: 1px;
              }
              @media screen and (max-width: 769px) {
              }
           </style>
           <div id="dialogue">
              <div id="diaMain">
              </div>
           </div>
           `}}customElements.define("scoge-dialogue",dialogueBox);const idlFactory=({IDL:B})=>{const w=B.Variant({UnauthorizedOperator:B.Null,SelfTransfer:B.Null,TokenNotFound:B.Null,UnauthorizedOwner:B.Null,NotFound:B.Null,SelfApprove:B.Null,OperatorNotFound:B.Null,ExistedNFT:B.Null,OwnerNotFound:B.Null,Other:B.Text}),O=B.Variant({ok:B.Nat,err:w}),z=B.Record({logo:B.Opt(B.Text),name:B.Opt(B.Text),created_at:B.Nat64,upgraded_at:B.Nat64,custodians:B.Vec(B.Principal),symbol:B.Opt(B.Text)}),U=B.Record({xp:B.Nat64,ownerText:B.Opt(B.Vec(B.Text)),data:B.Opt(B.Vec(B.Nat8)),rank:B.Nat64,ownerImage:B.Opt(B.Vec(B.Nat8)),discoveredProgress:B.Opt(B.Float64),story:B.Opt(B.Text),imageURI:B.Text,progress:B.Nat64,category:B.Text,videoURI:B.Opt(B.Text),linked:B.Opt(B.Bool),discovered:B.Opt(B.Vec(B.Text))}),F=B.Variant({ok:B.Opt(B.Principal),err:w}),j=B.Record({transferred_at:B.Opt(B.Nat64),transferred_by:B.Opt(B.Principal),owner:B.Opt(B.Principal),operator:B.Opt(B.Principal),approved_at:B.Opt(B.Nat64),approved_by:B.Opt(B.Principal),properties:B.Vec(B.Tuple(B.Text,U)),is_burned:B.Bool,token_identifier:B.Nat,burned_at:B.Opt(B.Nat64),burned_by:B.Opt(B.Principal),minted_at:B.Nat64,minted_by:B.Principal}),q=B.Variant({ok:B.Vec(j),err:w}),G=B.Record({cycles:B.Nat,total_transactions:B.Nat,total_unique_holders:B.Nat,total_supply:B.Nat}),W=B.Record({Burn:B.Null,Mint:B.Null,Approval:B.Null,TransactionHistory:B.Null}),Q=B.Variant({ok:j,err:w});return B.Service({adminUser:B.Func([],[B.Text],["query"]),balanceOf:B.Func([B.Principal],[O],["query"]),custodians:B.Func([],[B.Vec(B.Principal)],["query"]),cycles:B.Func([],[B.Nat],["query"]),logo:B.Func([],[B.Opt(B.Text)],["query"]),metadata:B.Func([],[z],["query"]),mint:B.Func([B.Principal,B.Nat,B.Vec(B.Tuple(B.Text,U))],[O],[]),name:B.Func([],[B.Opt(B.Text)],["query"]),operatorOf:B.Func([B.Nat],[F],["query"]),operatorTokenMetadata:B.Func([B.Principal],[q],["query"]),ownerOf:B.Func([B.Nat],[F],["query"]),ownerTokenMetadata:B.Func([B.Principal],[q],["query"]),setCustodians:B.Func([B.Vec(B.Principal)],[],[]),setLogo:B.Func([B.Text],[],[]),setName:B.Func([B.Text],[],[]),setSymbol:B.Func([B.Text],[],[]),stats:B.Func([],[G],["query"]),supportedInterfaces:B.Func([],[B.Vec(W)],["query"]),symbol:B.Func([],[B.Opt(B.Text)],["query"]),tokenMetadata:B.Func([B.Nat],[Q],["query"]),totalSupply:B.Func([],[B.Nat],["query"]),totalUniqueHolders:B.Func([],[B.Nat],["query"])})},alphabet="abcdefghijklmnopqrstuvwxyz234567",lookupTable=Object.create(null);for(let B=0;B<alphabet.length;B++)lookupTable[alphabet[B]]=B;lookupTable[0]=lookupTable.o;lookupTable[1]=lookupTable.i;var sha256={exports:{}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root={}:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer!="undefined",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(B){return Object.prototype.toString.call(B)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(B){return typeof B=="object"&&B.buffer&&B.buffer.constructor===ArrayBuffer});var createOutputMethod=function(B,w){return function(O){return new Sha256(w,!0).update(O)[B]()}},createMethod=function(B){var w=createOutputMethod("hex",B);NODE_JS&&(w=nodeWrap(w,B)),w.create=function(){return new Sha256(B)},w.update=function(U){return w.create().update(U)};for(var O=0;O<OUTPUT_TYPES.length;++O){var z=OUTPUT_TYPES[O];w[z]=createOutputMethod(z,B)}return w},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(B){if(typeof B=="string")return crypto.createHash(algorithm).update(B,"utf8").digest("hex");if(B==null)throw new Error(ERROR);return B.constructor===ArrayBuffer&&(B=new Uint8Array(B)),Array.isArray(B)||ArrayBuffer.isView(B)||B.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(B)).digest("hex"):method(B)};return nodeMethod},createHmacOutputMethod=function(B,w){return function(O,z){return new HmacSha256(O,w,!0).update(z)[B]()}},createHmacMethod=function(B){var w=createHmacOutputMethod("hex",B);w.create=function(U){return new HmacSha256(U,B)},w.update=function(U,F){return w.create(U).update(F)};for(var O=0;O<OUTPUT_TYPES.length;++O){var z=OUTPUT_TYPES[O];w[z]=createHmacOutputMethod(z,B)}return w};function Sha256(B,w){w?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],B?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=B}Sha256.prototype.update=function(B){if(!this.finalized){var w,O=typeof B;if(O!=="string"){if(O==="object"){if(B===null)throw new Error(ERROR);if(ARRAY_BUFFER&&B.constructor===ArrayBuffer)B=new Uint8Array(B);else if(!Array.isArray(B)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(B)))throw new Error(ERROR)}else throw new Error(ERROR);w=!0}for(var z,U=0,F,j=B.length,q=this.blocks;U<j;){if(this.hashed&&(this.hashed=!1,q[0]=this.block,q[16]=q[1]=q[2]=q[3]=q[4]=q[5]=q[6]=q[7]=q[8]=q[9]=q[10]=q[11]=q[12]=q[13]=q[14]=q[15]=0),w)for(F=this.start;U<j&&F<64;++U)q[F>>2]|=B[U]<<SHIFT[F++&3];else for(F=this.start;U<j&&F<64;++U)z=B.charCodeAt(U),z<128?q[F>>2]|=z<<SHIFT[F++&3]:z<2048?(q[F>>2]|=(192|z>>6)<<SHIFT[F++&3],q[F>>2]|=(128|z&63)<<SHIFT[F++&3]):z<55296||z>=57344?(q[F>>2]|=(224|z>>12)<<SHIFT[F++&3],q[F>>2]|=(128|z>>6&63)<<SHIFT[F++&3],q[F>>2]|=(128|z&63)<<SHIFT[F++&3]):(z=65536+((z&1023)<<10|B.charCodeAt(++U)&1023),q[F>>2]|=(240|z>>18)<<SHIFT[F++&3],q[F>>2]|=(128|z>>12&63)<<SHIFT[F++&3],q[F>>2]|=(128|z>>6&63)<<SHIFT[F++&3],q[F>>2]|=(128|z&63)<<SHIFT[F++&3]);this.lastByteIndex=F,this.bytes+=F-this.start,F>=64?(this.block=q[16],this.start=F-64,this.hash(),this.hashed=!0):this.start=F}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var B=this.blocks,w=this.lastByteIndex;B[16]=this.block,B[w>>2]|=EXTRA[w&3],this.block=B[16],w>=56&&(this.hashed||this.hash(),B[0]=this.block,B[16]=B[1]=B[2]=B[3]=B[4]=B[5]=B[6]=B[7]=B[8]=B[9]=B[10]=B[11]=B[12]=B[13]=B[14]=B[15]=0),B[14]=this.hBytes<<3|this.bytes>>>29,B[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var B=this.h0,w=this.h1,O=this.h2,z=this.h3,U=this.h4,F=this.h5,j=this.h6,q=this.h7,G=this.blocks,W,Q,Y,J,D,se,te,de,he,ue,ye;for(W=16;W<64;++W)D=G[W-15],Q=(D>>>7|D<<25)^(D>>>18|D<<14)^D>>>3,D=G[W-2],Y=(D>>>17|D<<15)^(D>>>19|D<<13)^D>>>10,G[W]=G[W-16]+Q+G[W-7]+Y<<0;for(ye=w&O,W=0;W<64;W+=4)this.first?(this.is224?(de=300032,D=G[0]-1413257819,q=D-150054599<<0,z=D+24177077<<0):(de=704751109,D=G[0]-210244248,q=D-1521486534<<0,z=D+143694565<<0),this.first=!1):(Q=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),Y=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),de=B&w,J=de^B&O^ye,te=U&F^~U&j,D=q+Y+te+K[W]+G[W],se=Q+J,q=z+D<<0,z=D+se<<0),Q=(z>>>2|z<<30)^(z>>>13|z<<19)^(z>>>22|z<<10),Y=(q>>>6|q<<26)^(q>>>11|q<<21)^(q>>>25|q<<7),he=z&B,J=he^z&w^de,te=q&U^~q&F,D=j+Y+te+K[W+1]+G[W+1],se=Q+J,j=O+D<<0,O=D+se<<0,Q=(O>>>2|O<<30)^(O>>>13|O<<19)^(O>>>22|O<<10),Y=(j>>>6|j<<26)^(j>>>11|j<<21)^(j>>>25|j<<7),ue=O&z,J=ue^O&B^he,te=j&q^~j&U,D=F+Y+te+K[W+2]+G[W+2],se=Q+J,F=w+D<<0,w=D+se<<0,Q=(w>>>2|w<<30)^(w>>>13|w<<19)^(w>>>22|w<<10),Y=(F>>>6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7),ye=w&O,J=ye^w&z^ue,te=F&j^~F&q,D=U+Y+te+K[W+3]+G[W+3],se=Q+J,U=B+D<<0,B=D+se<<0;this.h0=this.h0+B<<0,this.h1=this.h1+w<<0,this.h2=this.h2+O<<0,this.h3=this.h3+z<<0,this.h4=this.h4+U<<0,this.h5=this.h5+F<<0,this.h6=this.h6+j<<0,this.h7=this.h7+q<<0},Sha256.prototype.hex=function(){this.finalize();var B=this.h0,w=this.h1,O=this.h2,z=this.h3,U=this.h4,F=this.h5,j=this.h6,q=this.h7,G=HEX_CHARS[B>>28&15]+HEX_CHARS[B>>24&15]+HEX_CHARS[B>>20&15]+HEX_CHARS[B>>16&15]+HEX_CHARS[B>>12&15]+HEX_CHARS[B>>8&15]+HEX_CHARS[B>>4&15]+HEX_CHARS[B&15]+HEX_CHARS[w>>28&15]+HEX_CHARS[w>>24&15]+HEX_CHARS[w>>20&15]+HEX_CHARS[w>>16&15]+HEX_CHARS[w>>12&15]+HEX_CHARS[w>>8&15]+HEX_CHARS[w>>4&15]+HEX_CHARS[w&15]+HEX_CHARS[O>>28&15]+HEX_CHARS[O>>24&15]+HEX_CHARS[O>>20&15]+HEX_CHARS[O>>16&15]+HEX_CHARS[O>>12&15]+HEX_CHARS[O>>8&15]+HEX_CHARS[O>>4&15]+HEX_CHARS[O&15]+HEX_CHARS[z>>28&15]+HEX_CHARS[z>>24&15]+HEX_CHARS[z>>20&15]+HEX_CHARS[z>>16&15]+HEX_CHARS[z>>12&15]+HEX_CHARS[z>>8&15]+HEX_CHARS[z>>4&15]+HEX_CHARS[z&15]+HEX_CHARS[U>>28&15]+HEX_CHARS[U>>24&15]+HEX_CHARS[U>>20&15]+HEX_CHARS[U>>16&15]+HEX_CHARS[U>>12&15]+HEX_CHARS[U>>8&15]+HEX_CHARS[U>>4&15]+HEX_CHARS[U&15]+HEX_CHARS[F>>28&15]+HEX_CHARS[F>>24&15]+HEX_CHARS[F>>20&15]+HEX_CHARS[F>>16&15]+HEX_CHARS[F>>12&15]+HEX_CHARS[F>>8&15]+HEX_CHARS[F>>4&15]+HEX_CHARS[F&15]+HEX_CHARS[j>>28&15]+HEX_CHARS[j>>24&15]+HEX_CHARS[j>>20&15]+HEX_CHARS[j>>16&15]+HEX_CHARS[j>>12&15]+HEX_CHARS[j>>8&15]+HEX_CHARS[j>>4&15]+HEX_CHARS[j&15];return this.is224||(G+=HEX_CHARS[q>>28&15]+HEX_CHARS[q>>24&15]+HEX_CHARS[q>>20&15]+HEX_CHARS[q>>16&15]+HEX_CHARS[q>>12&15]+HEX_CHARS[q>>8&15]+HEX_CHARS[q>>4&15]+HEX_CHARS[q&15]),G},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var B=this.h0,w=this.h1,O=this.h2,z=this.h3,U=this.h4,F=this.h5,j=this.h6,q=this.h7,G=[B>>24&255,B>>16&255,B>>8&255,B&255,w>>24&255,w>>16&255,w>>8&255,w&255,O>>24&255,O>>16&255,O>>8&255,O&255,z>>24&255,z>>16&255,z>>8&255,z&255,U>>24&255,U>>16&255,U>>8&255,U&255,F>>24&255,F>>16&255,F>>8&255,F&255,j>>24&255,j>>16&255,j>>8&255,j&255];return this.is224||G.push(q>>24&255,q>>16&255,q>>8&255,q&255),G},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var B=new ArrayBuffer(this.is224?28:32),w=new DataView(B);return w.setUint32(0,this.h0),w.setUint32(4,this.h1),w.setUint32(8,this.h2),w.setUint32(12,this.h3),w.setUint32(16,this.h4),w.setUint32(20,this.h5),w.setUint32(24,this.h6),this.is224||w.setUint32(28,this.h7),B};function HmacSha256(B,w,O){var z,U=typeof B;if(U==="string"){var F=[],j=B.length,q=0,G;for(z=0;z<j;++z)G=B.charCodeAt(z),G<128?F[q++]=G:G<2048?(F[q++]=192|G>>6,F[q++]=128|G&63):G<55296||G>=57344?(F[q++]=224|G>>12,F[q++]=128|G>>6&63,F[q++]=128|G&63):(G=65536+((G&1023)<<10|B.charCodeAt(++z)&1023),F[q++]=240|G>>18,F[q++]=128|G>>12&63,F[q++]=128|G>>6&63,F[q++]=128|G&63);B=F}else if(U==="object"){if(B===null)throw new Error(ERROR);if(ARRAY_BUFFER&&B.constructor===ArrayBuffer)B=new Uint8Array(B);else if(!Array.isArray(B)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(B)))throw new Error(ERROR)}else throw new Error(ERROR);B.length>64&&(B=new Sha256(w,!0).update(B).array());var W=[],Q=[];for(z=0;z<64;++z){var Y=B[z]||0;W[z]=92^Y,Q[z]=54^Y}Sha256.call(this,w,O),this.update(Q),this.oKeyPad=W,this.inner=!0,this.sharedMemory=O}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var B=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(B),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256);var mainScreenOpen=!1;class mintingScreen extends HTMLElement{constructor(){super();ae(this,"toggleNftScreen",()=>{var O=this.shadow.getElementById("mainScreen"),z=this.shadow.getElementById("svgBox"),U=document.getElementById("universe"),F=document.getElementById("getUniMenu").shadowRoot;if(O.style.transition="1s all",z.style.display="block",z.style.transition=".5s all",U.style.transition="1s all",mainScreenOpen===!1){U.style.filter="blur(5px)",O.style.display="grid",setTimeout(()=>{O.style.opacity="100%",mainScreenOpen=!0},200);return}else{z.style.display="none",F.getElementById("uniMenu").style.filter="blur(0px)",F.getElementById("nftShop").style.opacity="80%",U.style.filter="blur(0px)",O.style.opacity="0%",setTimeout(()=>{O.style.display="none",mainScreenOpen=!1},1e3);return}});ae(this,"goGetPlug",()=>{var O;(O=window.open("https://plugwallet.ooo/","_blank"))==null||O.focus()});ae(this,"reacc",()=>{var O=this.shadow.getElementById("videoM"),z=this.shadow.getElementById("list");O.style.transition="5s all",O.play(),O.style.display="block",setTimeout(()=>{O.style.opacity="100%"},500),O.onended=function(){z.style.display="grid"}});ae(this,"reload",()=>{});ae(this,"pillSelection",O=>{var z=String(O.target.id),U=this.shadow.querySelectorAll(".pills"),F=this.shadow.getElementById("desc"),j=this.shadow.getElementById("cost"),q=this.shadow.getElementById("button"),G=this.shadow.getElementById("mainScreen");G.style.transition="1s all";var W={red:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png",black:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png",blue:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"};switch(z){case"red":U[0].src=W.blue,U[1].src=W.red,U[2].src=W.black,U[0].setAttribute("id","blue"),U[1].setAttribute("id","red"),U[2].setAttribute("id","black"),F.innerHTML="YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.",j.innerHTML="IT\u2019LL COST YOU 10 [ICP].",q.innerHTML="UNAVAILABLE",q.style.color="#ff002d",G.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",G.style.backgroundColor="rgba(145,212,202,.4)";break;case"black":U[0].src=W.red,U[1].src=W.black,U[2].src=W.blue,U[0].setAttribute("id","red"),U[1].setAttribute("id","black"),U[2].setAttribute("id","blue"),F.innerHTML="HERE\u2019S A TEMPORARY PILL YOU CAN TAKE.",j.innerHTML="IT WONT COST YOU A THING.",q.innerHTML="TAKE [MINT]",this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this)),q.style.color="#94be8c",G.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",G.style.backgroundColor="rgba(0,0,0,.4)";break;case"blue":U[0].src=W.black,U[1].src=W.blue,U[2].src=W.red,U[0].setAttribute("id","black"),U[1].setAttribute("id","blue"),U[2].setAttribute("id","red"),F.innerHTML="THIS IS WHAT YOU'LL NEED TO REMEMBER.",j.innerHTML="IT\u2019LL COST YOU 5 [ICP].",q.innerHTML="UNAVAILABLE",q.style.color="#ff002d",G.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",G.style.backgroundColor="rgba(164,219,251,.4)";break}});this.shadow=this.attachShadow({mode:"open"})}get nft(){return this.getAttribute("mint")}set nft(O){this.setAttribute("mint",O)}static get observedAttributes(){return["mint"]}attributeChangedCallback(O,z,U){O==="mint"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("svgBox").addEventListener("click",this.toggleNftScreen.bind(this)),this.shadow.querySelectorAll(".pills").forEach(O=>{O.addEventListener("click",this.pillSelection)}),this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this))}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
                font-weight: normal;
                font-style: italic;
            }
            #mainScreen {
              width: 100%;
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              color: red;
              z-index: 8;
              background: rgba(0,0,0,.3);
              box-shadow: inset 0 0 800px black;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-R";
              opacity: 0%;
            }
            #testCanvas {
              width: 100%;
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              background-image: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/test/Screen Shot 2022-06-16 at 9.29.19 PM.png");
              background-size: cover;
              filter: blur(9px);
              z-index: 6;
            }
            #innerScreen {
              height: 100%;
              width: 50%;
            }
            #nftAssetGallery {
              width: 30%;
              height: 80%;
              float: left;
              margin-top: 10%;
              margin-bottom: 10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr;
              align-items: center;
              justify-items: center;
            }
            #nftAssetGallery img {
              width: 70%;
            }
            #mintUiActions {
              width: 70%;
              height: 80%;
              float: left;
              margin-top: 10%;
              margin-bottom: 10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
            }
            #mintUiActionsInner {
              width: 100%;
              height: 30%;
            }
            #texts {
              width: 90%;
              height: 40%;
              padding: 5% 5%;
              float: left;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
              align-items: center;
              justify-items: start;
              grid-row-gap: 8px;
            }
            #texts span {
              width: auto;
              font-size: 12px !important;
              background-color: black;
              letter-spacing: 2px;
              padding: 1% 2%;
            }
            #buttons {
              width: 100%;
              height: 30%;
              float: left;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: end;
            }
            .spacer {
              background-color: rgba(0,0,0,0) !important;
            }
            #mintButton {
              width: 30%;
              height: 70%;
              background-color: black;
              float: right;
              margin-right: 20%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-size: 20px;
            }
            .alt {
              color: #94be8c;
            }
            .active {
              color: #b5d3d1;
              transition: .5s all;
            } 
            #uiIcon {
              // height: 40%;
              // width: 40%;
              position: fixed;
              right: 0;
              top: 0;
              z-index: 8;
              transition: .5s all;
            }
            #uiIcon img {
              height: 100%;
            }
             #svgBox {
              height: 8%;
              position: fixed;
              right: 5%;
              bottom: 45%;
              transition: .5s all;
              display: none;
              z-index: 7;
              stroke: #ff002d;
            }
            #svgBox svg {
              height: 100%;
              transition: .5s all;
            }
            #svgBox:hover > svg {
              opacity: 100% !important;
              transform: scale(1.1);
            }
            #videoM {
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              z-index: 10;
              display: none;
              opacity: 0%;
              transition: 5s all;
            }
            #list {
              height: 100%;
              width: 100%;
              position: fixed;
              left: 0;
              top: 0;
              z-index: 11;
              display: none;
              opacity: 100%;
              transition: 5s all;
              grid-template-columns: 1fr;
              grid-tenplate-rows: 1fr;
              align-items: center;
              justify-items: center;
              color: white;
              text-decoration: undeline;
              background-color: black;
              
            }
            a {
              color: #ff002d;
              letter-spacing: 2px;
              font-family: "BS-R";
            }
            a:link {
              color: #ff002d;
            }
            a:active {
              color: #ff002d;
            }
            #exit {
              font-family: "BS-R";
              width: 100%;
              align-items: center;
              text-align: center;
            }
            .pills {
              transition: .5s all;
            }
            .pills:hover {
              transform: scale(1.1);
              opacity: 100% !important;
            }
         </style>
         <div id="list"><a href="https://docs.google.com/forms/d/1HEt1jfX4g68LcuHXUyFkmmX4GYLFEfXgT-CQbBwKUSI/edit" target="_blank" id="join">- JOIN WHITELIST -</a></div>
         <video id="videoM" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/videos/Alpha-End-Scoge.mp4">
         </video>
         <div id="mainScreen">
            <div id="innerScreen">
              <div id="nftAssetGallery">
                <img class="pills" id="red" style="opacity:31%;" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png"/>
                <img class="pills" id="black" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png"/>
                <img class="pills" id="blue" style="opacity:31%;" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"/>
              </div>
              <div id="mintUiActions">
                <div id="mintUiActionsInner">
                  <div id="texts">
                    <span class="spacer"></span>
                    <span id="desc">HERE\u2019S A TEMPORARY PILL YOU CAN TAKE.</span>
                    <span class="active" id="cost">IT WONT COST YOU A THING.</span>
                    <span class="spacer"></span>
                  </div>
                  <div id="buttons">
                    <div id="mintButton">
                      <span class="alt" id="button">TAKE [MINT]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div id="uiIcon">
         <div id="svgBox">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.05 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M57.56,50.14H22.43a.64.64,0,0,1-.63-.64V32.61a.64.64,0,1,1,1.27,0V48.86H56.93V4.24H23.07V21.45a.64.64,0,1,1-1.27,0V3.6A.64.64,0,0,1,22.43,3H57.56a.64.64,0,0,1,.64.64V49.5A.64.64,0,0,1,57.56,50.14Z"/><path class="cls-1" d="M35.38,27.66H8.07a.64.64,0,1,1,0-1.27H35.38a.64.64,0,0,1,0,1.27Z"/><path class="cls-1" d="M13.89,32.39a.63.63,0,0,1-.37-.12L6.88,27.54a.64.64,0,0,1,0-1l6.64-4.73a.63.63,0,0,1,.89.15.65.65,0,0,1-.15.89L8.35,27l5.91,4.2a.64.64,0,0,1-.37,1.16Z"/></svg>
          <div id="exit">Exit</div>
         </div>
        </div>
         `}}customElements.define("mint-screen",mintingScreen);window.closeCampaign=dtCampaign.closeCampaign;const VITE_CommerceKey="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec";var infiniteActive=!1,pgleft=1,pgright=2,sketch1Count=3,sketch2Count=2,sketch3Count=1,countriedAdded=!1,shopActive="closed";window.shoploaded=!1;window.viewThisProduct="";window.investorsView=!1;window.urlParamsActive=!1;window.inUniverse=!1;window.productsloaded=!1;const commerce=new lib(`${VITE_CommerceKey}`,!0);console.log("COPYRIGHT 2022 - SCOG\xC9 Inc. - ALL RIGHTS RESERVED");var stripe=Stripe(`${VITE_StripeKey}`);const elements=stripe.elements(),soundtrack=new SoundtrackManager;window.isMobile=!1;window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches?(document.getElementById("shopBut"),document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("uniBut").style.display="none",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-100%",shopActive="closed",window.termsOpen=!1):(document.getElementById("uniBut").style.display="block",document.getElementById("shop").style.opacity="100%",document.getElementById("shop").style.visibility="visible",document.getElementById("mobileShop").style.display="none",window.isMobile=!1,window.logoMove(6,3,16,1))});window.shopping=()=>{window.matchMedia("(max-width: 768px)").matches?(openMobile(),clearScreen()):toggleShop()};window.clearScreen=()=>{var B=document.getElementById("getCamp").shadowRoot;B.getElementById("campaignComp").style.transition="1s all",B.getElementById("campaignComp").style.right="-100%",clearFilter(),clearSettings(),clearShop()};window.openMobile=()=>{document.getElementById("mobileShop").style.display="block"};window.destiny=()=>{var B=document.getElementById("destiny");B.play(),B.loop=!0};window.initNoti2=B=>{};window.clearFilter=()=>{var B=document.getElementById("shopFilter"),w=document.getElementById("all");window.filterShop(w),B.style.opacity="0%",setTimeout(()=>{B.style.display="none"},1e3)};window.toggleShop=()=>{var B=document.getElementById("orderConfirm");document.getElementById("shopBut");var w=document.getElementById("shopFilter"),O=document.getElementById("shopBG");switch(O.style.transition=".5s all",clearSettings(),document.getElementById("updatesModal").style.display="none",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",document.getElementById("shop").style.transition="1s all",document.getElementById("povImageColumnLeft").innerHTML="",shopActive){case"closed":w.style.display="grid",O.style.display="block",setTimeout(()=>{w.style.opacity="100%",O.style.opacity="100%"},1e3),setTimeout(()=>{window.productsloaded===!1&&(document.getElementById("divLoadBG2").style.display="grid"),document.getElementById("shop").style.right="0%",document.getElementById("shopIcon").innerHTML="X"},500),shopActive="open";break;case"open":window.clearFilter(),O.style.opacity="0%",setTimeout(()=>{O.style.display="none"},500),clearShop();break;case"POVopen":document.getElementById("shop").style.overflowX="scroll",shopActive="open";var z=document.getElementById("povLeft"),U=document.getElementById("povRight"),F=document.getElementById("shopCheckoutDetails");F.style.transition="1s all",F.style.visibility="hidden",F.style.opacity="0%",z.style.transition="1s all",U.style.transition="1s all",z.style.opacity="0%",U.style.opacity="0%",setTimeout(()=>{U.style.visibility="hidden",z.style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("povImageColumnRight").innerHTML="",window.returnSize(),document.getElementById("eSymbol1").style.display="none",document.getElementById("eSymbol2").style.display="none",window.termsOpen=!1,B.style.display==="block"&&(B.style.display="none");var j=document.getElementsByClassName("shopProduct");for(let q=0;q<j.length;q++)j[q].style.color="black";selectedPSize="",document.getElementById("addToBagBut").innerHTML="Select a size";break}};window.openSettings=()=>{document.getElementById("updatesModal").style.display="none",window.clearFilter(),clearShop(),closeInvestor();var B=document.getElementById("getCamp").shadowRoot;document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",window.matchMedia("(max-width: 768px)").matches?(B.getElementById("campaignComp").style.transition="1s all",B.getElementById("campaignComp").style.right="-100%"):(B.getElementById("campaignComp").style.transition="1s all",B.getElementById("campaignComp").style.right="-70%");var w=document.getElementById("settingsMenu");document.getElementById("settingsMenu").style.display="grid",setTimeout(()=>{w.style.opacity="100%"},300)};window.sysCheck=()=>{document.addEventListener("keydown",function(w){console.log("activated"),w.key==="i"&&(ci=!0,setTimeout(()=>{ci=!1},1e3)),w.key==="c"&&ci===!0&&(document.getElementById("uniBut").setAttribute("onclick","universeSystem()"),soundtrack.play("scoge1"),console.log("activated"))})};window.clearShop=()=>{document.getElementById("shop").style.right="-70%",document.getElementById("shopIcon").innerHTML="(0)",document.getElementById("shopIcon").setAttribute("onclick","toggleShop()"),document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1};window.clearSettings=()=>{document.getElementById("settingsMenu").style.transition="1s all",document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3)};var continents={c1:{name:"1 - ALANSANA",text:"The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOG\xC9 Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-4.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>`},c2:{name:"2 - FAALSANA",text:"No concrete data discovered for the 2nd Continent. Few sources indicate a region of migrants from various origins. ",images:'<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>'},c3:{name:"3 - SANSET",text:"The 3rd Continent is widely known for having the harshest and most fluctuating weather conditions, due to its size and position between two oceanic gravity pockets. Its inhabitants frequently dress in garments that heavily wrap the body and can easily be removed when conditions drastically shift.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>`},c4:{name:"4 - NAME UNKNOWN",text:"On the 4th Continent, you\u2019ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional dress.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-4.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>`},c5:{name:"5 - CONTINENT UNKNOWN",text:"No concrete data discovered for the 5th  Continent. Few sources indicate it to be an ally of the 7th Continent.",images:'<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>'},c6:{name:"6 - NAME UNKNOWN",text:"The mountainous inhabitants of the 6th Continent are highly regarded for their study of natural materials and their relation to the human body. They live among dangerous innovations but protect themselves with garments infused with protective physical and metaphysical properties- mostly darker-toned, as the continent is limited to elements that produce dark dyes.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-4.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-5.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>`},c7:{name:"7 - SEELOO",text:"Little is known about the 7th Continent and its elusive inhabitants throughout Bankoo. Those who\u2019ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`}},worldName=document.getElementById("worldConName"),worldText=document.getElementById("worldConText"),worldMain=document.getElementById("worldMain"),allMenu=document.querySelectorAll(".worldMenuInner"),worldBottom=document.getElementById("worldBottom");window.changeWorld=B=>{var w=B.id;switch(worldBottom.scrollTop=0,allMenu.forEach(O=>{O.style.backgroundColor="rgba(255, 255, 255, 0.7)",O.style.color="black",document.getElementById(`${w}In`).style.backgroundColor="red",document.getElementById(`${w}In`).style.color="white"}),w){case"world1":worldName.innerHTML=continents.c1.name,worldText.innerHTML=continents.c1.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c1.images;break;case"world2":worldName.innerHTML=continents.c2.name,worldText.innerHTML=continents.c2.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c2.images;break;case"world3":worldName.innerHTML=continents.c3.name,worldText.innerHTML=continents.c3.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c3.images;break;case"world4":worldName.innerHTML=continents.c4.name,worldText.innerHTML=continents.c4.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c4.images;break;case"world5":worldName.innerHTML=continents.c5.name,worldText.innerHTML=continents.c5.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')",worldBottom.innerHTML=continents.c5.images;break;case"world6":worldName.innerHTML=continents.c6.name,worldText.innerHTML=continents.c6.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c6.images;break;case"world7":worldName.innerHTML=continents.c7.name,worldText.innerHTML=continents.c7.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c7.images;break}};var expandDiv=document.getElementById("worldBottom"),speed=5;function expanding(){var B=expandDiv.scrollTop,w=B/speed;expandDiv.style.height=Math.min(Math.max(w,34),68)+"%"}window.isWorld=()=>{expandDiv.addEventListener("scroll",function(){requestAnimationFrame(expanding)},!1)};window.worldTap=()=>{document.getElementById("worldEntrance").style.transition="5s all",document.getElementById("worldEntrance").style.opacity="0%",setTimeout(()=>{document.getElementById("worldEntrance").style.display="none"},3500)};window.activateInfinite=()=>{if(window.logoMove(6,3,16,1),BABYLON.Engine.isSupported())if(document.getElementById("renderCanvas").style.transition="5s all",infiniteActive===!1)document.getElementById("renderCanvas").style.display="block",document.getElementById("renderCanvas").style.opacity="0",new GameManager("renderCanvas"),infiniteActive=!0;else{document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3);var B=document.getElementById("shopBut"),w=document.getElementById("renderCanvas");w.height=window.innerHeight,w.width=window.innerWidth,document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",B.innerHTML="SHOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",shopActive="closed",window.termsOpen=!1,window.inUniverse=!0,getGameProgress(),window.logoMove(6,3,16,1),document.getElementById("destiny").pause(),document.getElementById("renderCanvas").style.opacity="1",window.clearMainUi()}};window.setupBook=B=>{var w=document.getElementById("B2222"),O=B.id;if(O==="bookleft"){w.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft-=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright-=2}.jpg" style="margin-left:10%;">`,O==="bookleft"&&pgleft<=0&&(pgleft=1,pgright=2,w.remove());return}if(O==="bookright"){w.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft+=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright+=2}.jpg" style="margin-left:10%;">`,O==="bookright"&&pgright>=15&&(pgleft=1,pgright=2,w.remove());return}};window.setupSketches=()=>{var B=document.getElementById("BSketch");if(sketch3Count===3){B.innerHTML='<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">',sketch3Count=1,sketch2Count=2,sketch1Count=3,B.remove();return}if(sketch3Count===2){B.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}if(sketch3Count===1){B.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count-=2}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}};window.setupMagazine=()=>{var B=document.getElementById("BMAG");B.remove()};var currentShopProduct;window.povOpen=B=>{var w=B.id;window.mainMenuPosition("black","0%","0%","0%","0%"),currentShopProduct=allProducts[0].filter(F=>F.id.includes(`${w}`)),shopActive="POVopen";var O=document.getElementById("povLeft"),z=document.getElementById("povRight");O.style.transition="1s all",z.style.transition="1s all",document.getElementById("povRight").style.visibility="visible",document.getElementById("povLeft").style.visibility="visible",O.style.opacity="100%",z.style.opacity="100%",document.getElementById("scroll").style.display="block",document.getElementById("shopProductName").innerHTML=`
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(\xC9)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(S\xC9)</span>
  `,currentShopProduct[0].categories.forEach(F=>{F.name==="\xC9"&&(document.getElementById("eSymbol1").style.display="block"),F.name==="S\xC9"&&(document.getElementById("eSymbol2").style.display="block")}),document.getElementById("shopProductDesc").innerHTML=currentShopProduct[0].description,document.getElementById("shopProductPrice").innerHTML=currentShopProduct[0].price.formatted_with_symbol,currentShopProduct[0].inventory.available<=10?document.getElementById("shopProductAvailable").innerHTML="(LIMITED QUANTITY)":document.getElementById("shopProductAvailable").innerHTML="";var U=document.getElementById("povImageColumnLeft");document.getElementById("povImageColumnRight").style.backgroundImage=`url("${currentShopProduct[0].assets[2].url}")`,currentShopProduct[0].assets.forEach(F=>{var j=document.createElement("img");F.filename==="sizeChart.png"?(j.setAttribute("class","sizeChartImage"),j.setAttribute("src",`${F.url}`),j.setAttribute("id",`${F.filename}`),document.getElementById("povImageColumnRight").appendChild(j)):(j.setAttribute("class","leftPOVimages"),j.setAttribute("src",`${F.url}`),j.setAttribute("id",`${F.url}`),j.setAttribute("onclick","changeToMainPic(this)"),U.appendChild(j))}),currentShopProduct[0].variant_groups[0].options.forEach(F=>{if(document.getElementById(`${F.name}`).style.opacity="100%",document.getElementById(`${F.name}`).style.cursor="pointer",F.name==="SingleSize"){var j=document.querySelectorAll(".shopProduct");document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr",document.getElementById("shopProductSizes").style.justifyItems="end",j.forEach(q=>{q.id!="SingleSize"&&(q.style.display="none")}),document.getElementById("SingleSize").style.display="block"}}),cartEmpty!=!0&&window.productAdded()};window.returnSize=()=>{var B=document.querySelectorAll(".shopProduct");B.forEach(w=>{w.id!="SingleSize"&&(w.style.display="block"),document.getElementById(w.id).style.opacity=".3"}),document.getElementById("SingleSize").style.display="none",document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr",document.getElementById("shopProductSizes").style.justifyItems="center"};window.changeToMainPic=B=>{var w=B.id;document.getElementById("povImageColumnRight").style.backgroundImage=`url("${w}")`};window.sizeGuideOn=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="100%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="0%"};window.sizeGuideOff=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="0%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="100%"};window.productAdded=()=>{document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="visible",document.getElementById("shopCheckoutDetails").style.opacity="100%"};window.purchaseComplete=()=>{document.getElementById("orderConfirm").style.display="block",document.getElementById("orderConfirm").innerHTML=`
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOG\xC9.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `};window.termsOpen=!1;window.toggleTerms=()=>{var B=document.getElementById("tandc"),w=document.getElementById("gMenu");if(B.style.display==="block"){document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",w.style.display="block",window.termsOpen=!1;return}else if(B.style.display!="block"){document.getElementById("tandc").innerHTML=`
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(\u2018\xC9\u2019)</span> or <span class="blue">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `,document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="block",document.getElementById("tandc").style.opacity="100%",w.style.display="none",window.termsOpen=!0,B.scrollTop=0;return}};var allProducts=[];window.productsloaded=!1;window.loadShop=async()=>{document.getElementById("divLoadBG2").style.display="grid";var B=document.getElementById("allShopProducts");await commerce.products.list({limit:100,sortDirection:"desc"}).then(w=>{allProducts.push(w.data)}),allProducts[0].forEach(w=>{var O=document.createElement("div");O.setAttribute("class","productContainer"),O.setAttribute("id",w.id),w.categories.forEach(z=>{O.classList.add(z.name)}),window.matchMedia("(max-width: 768px)").matches||(O.setAttribute("onmouseover","shopOnHover(this)"),O.setAttribute("onmouseout","shopOutHover(this)"),O.setAttribute("onclick","povOpen(this)")),B.appendChild(O),O.innerHTML=`
    <img class="shopProductsOver" src="${w.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${w.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${w.name}</p>
    <p class="pcProductPrice">${w.price.formatted_with_symbol}</p>
</div>
    `,window.productsloaded=!0,document.getElementById("divLoadBG2").style.display="none"}),urlParamsActive===!0&&(povOpen(document.getElementById(viewThisProduct)),window.history.replaceState({},document.title,"/index.html")),commerce.cart.empty()};window.imageFade=B=>{var w=B;w.style.transition="all 2s",w.style.opacity="1"};window.shopOnHover=B=>{var w=B.id,O=document.getElementById(w);O.getElementsByTagName("img")[1].style.opacity="0%",O.getElementsByTagName("img")[0].style.opacity="100%"};window.shopOutHover=B=>{var w=B.id,O=document.getElementById(w);O.getElementsByTagName("img")[0].style.opacity="0%",O.getElementsByTagName("img")[1].style.opacity="100%"};var currentCart,cartEmpty=!0,selectedPSize="";window.selectSize=B=>{B.style.opacity==="1"?(selectedPSize=B.id,document.getElementById("addToBagBut").innerHTML="Add To Bag",document.getElementById("addToBagBut").setAttribute("onclick","addToCart()")):(selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick","addToCart()"));var w=document.getElementsByClassName("shopProduct");for(let O=0;O<w.length;O++)w[O].style.color="black";B.style.color="#ff002d"};var countriesObj={};window.addToCart=async()=>{document.getElementById("shoppingBag").innerHTML="";var B=currentShopProduct[0].variant_groups[0].options.filter(w=>w.name.includes(`${selectedPSize}`));document.getElementById("divLoadBG").style.display="grid",commerce.cart.retrieve().then(w=>{currentCart=w}).then(()=>{commerce.cart.add(currentShopProduct[0].id,1,{[currentShopProduct[0].variant_groups[0].id]:B[0].id}).then(()=>{cartEmpty=!1,commerce.cart.retrieve().then(w=>{currentCart=w,document.getElementById("divLoadBG").style.display="none",document.getElementById("addToBagBut").innerHTML="Select a size";var O=document.getElementsByClassName("shopProduct");for(let z=0;z<O.length;z++)O[z].style.color="";window.variantAbbr="",w.line_items.forEach(z=>{var U=document.createElement("div");switch(U.setAttribute("class","bagProducts"),document.getElementById("shoppingBag").appendChild(U),z.selected_options[0].option_name){case"Small":window.variantAbbr="S";break;case"Medium":window.variantAbbr="M";break;case"Large":window.variantAbbr="L";break;case"XLarge":window.variantAbbr="XL";break;case"2XLarge":window.variantAbbr="2XL";break;case"3XLarge":window.variantAbbr="3XL";break}U.innerHTML=`
                  <div class="bagProduct">
                      <div class="bagPOver" id="${z.id}">
                          <p id="test1sizeQty">(${z.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${z.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `,U.setAttribute("id",`${z.id}Parent`),document.getElementById(z.id).style.backgroundImage=`url(${z.image.url})`}),document.getElementById("carTotal").innerHTML=w.subtotal.formatted_with_symbol}),window.productAdded(),selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick")})}),countriedAdded===!1&&(countriedAdded=!0,commerce.services.localeListCountries().then(w=>{countriesObj=w.countries,Object.keys(w.countries).forEach(O=>{var z=document.createElement("option"),U=document.getElementById("input9");z.setAttribute("value",O),z.setAttribute("title",O),z.innerHTML=`${countriesObj[O].substr(0,20)}`,U.appendChild(z)})}))};window.removeLineItem=B=>{document.getElementById("divLoadBG").style.display="grid";var w=B.id;commerce.cart.remove(w).then(O=>{document.getElementById(`${w}Parent`).remove(),document.getElementById("divLoadBG").style.display="none",document.getElementById("carTotal").innerHTML=O.cart.subtotal.formatted_with_symbol,currentCart=O.cart,O.cart.total_items===0&&(cartEmpty=!0,countriedAdded=!1,document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `)})};window.states=()=>{var B=document.getElementById("input9"),w=B.options[B.selectedIndex].value,O=B.options[B.selectedIndex].title,z=document.getElementById("carTotal");document.getElementById("input7").innerHTML="",w==="US"&&(document.getElementById("input4").value="$0.00 Free Shipping",window.shippingMethodValue=1,z.innerHTML=currentCart.subtotal.formatted_with_symbol),w!="US"&&(document.getElementById("input4").value="$70.00 Intl Shipping",window.shippingMethodValue=3,z.innerHTML=`$${currentCart.subtotal.raw+70}.00`),O==="US2"&&(document.getElementById("input4").value="$130.00 - Next Day Air",window.shippingMethodValue=2,z.innerHTML=`$${currentCart.subtotal.raw+130}.00`),commerce.services.localeListSubdivisions(w).then(U=>{var F=U.subdivisions;Object.keys(U.subdivisions).forEach(j=>{var q=document.createElement("option"),G=document.getElementById("input7");if(Object.keys(U.subdivisions).length<=1){var W=document.createElement("option");W.innerHTML="Not Available.",B.options[B.selectedIndex].innerHTML="Select Country",document.getElementById("input7").appendChild(W)}else q.setAttribute("value",F[j]),q.setAttribute("id",j),q.innerHTML=F[j].substring(0,20),G.appendChild(q)})})};var style={base:{color:"black"}};const card=elements.create("card",{style});card.mount("#card-element");window.shippingId="";window.checkOut=async()=>{var B=document.getElementById("input1").value,w=document.getElementById("input2").value,O=document.getElementById("input3").value;document.getElementById("input4").value;var z=document.getElementById("input5").value,U=document.getElementById("input6").value,F=document.getElementById("input8").value,j=document.getElementById("input10").value,q=document.getElementById("input9"),G=document.getElementById("input7"),W=q.options[q.selectedIndex].value,Q=G.options[G.selectedIndex].id;document.getElementById("divLoadBG").style.display="grid",setTimeout(()=>{document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"},2e4),await commerce.checkout.generateToken(currentCart.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async Y=>{commerce.checkout.getShippingOptions(Y.id,{country:W}).then(async J=>{window.shippingMethodValue===1&&(window.shippingId=J[0].id),window.shippingMethodValue===3&&(window.shippingId=J[0].id),window.shippingMethodValue===2&&(window.shippingId=J[1].id);var D=`${B} ${w}`;const se=await stripe.createPaymentMethod({type:"card",card});if(se.error){document.getElementById("divLoadBG").style.display="none",console.log(se.error.message),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${se.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const te=await commerce.checkout.capture(Y.id,{customer:{firstname:`${B}`,lastname:`${w}`,email:`${z}`},extra_fields:{extr_DWy4oG4dY56Jx2:j},shipping:{name:`${D}`,street:`${O}`,town_city:`${U}`,county_state:`${Q}`,postal_zip_code:`${F}`,country:`${W}`},fulfillment:{shipping_method:`${window.shippingId}`},billing:{name:`${D}`,street:`${O}`,town_city:`${U}`,county_state:`${Q}`,postal_zip_code:`${F}`,country:`${W}`},payment:{gateway:"stripe",stripe:{payment_method_id:se.paymentMethod.id}}});setTimeout(()=>{window.closeLoadE()},2e4),window.closeLoadE(),document.getElementById("confirmNumber").innerHTML=te.customer_reference,window.purchaseComplete(),document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`,document.getElementById("shoppingBag").innerHTML="",cartEmpty=!0,document.getElementById("shopCheckoutDetails").style.opacity="0%",card.clear();return}catch(te){document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${te.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(te);return}finally{}})})};window.closeLoadE=()=>{document.getElementById("divLoadBG").innerHTML='<div class="loader"></div>',document.getElementById("divLoadBG").removeAttribute("onclick"),document.getElementById("divLoadBG").style.display="none",card.clear()};window.ccsOn=()=>{document.getElementById("crypto").innerHTML="Coming Soon"};window.ccsOff=()=>{document.getElementById("crypto").innerHTML="Pay with Crypto"};window.filterShop=B=>{var w=document.getElementById("sectionDesc"),O=B.id;switch(O!=="all"&&(document.getElementById("all").checked=!1),O){case"all":w.innerHTML=`<h2>All Products</h2>
      <h4>SCOG\xC9 Shop - Collection pieces, gifts and more.</h4>`,document.getElementById("all").checked=!0,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(z=>{z.style.display="block"});break;case"tops":w.innerHTML=`<h2>Tops</h2>
      <h4>SCOG\xC9 T-Shirts, Hoodies, Shirts and Jackets.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!0,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(z=>{z.classList.contains("tops")?z.style.display="block":z.style.display="none"});break;case"bottoms":w.innerHTML=`<h2>Bottoms</h2>
      <h4>SCOG\xC9 Pants, Shorts, and Joggers.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!0,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(z=>{z.classList.contains("bottoms")?z.style.display="block":z.style.display="none"});break;case"accessories":w.innerHTML=`<h2>Accessories</h2>
      <h4>SCOG\xC9 Hats & More.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!0,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(z=>{z.classList.contains("accessories")?z.style.display="block":z.style.display="none"});break;case"art":w.innerHTML=`<h2>Artwork</h2>
      <h4>SCOG\xC9 Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!0,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(z=>{z.classList.contains("art")?z.style.display="block":z.style.display="none"});break;case"gifts":w.innerHTML=`<h2>Gifts</h2>
      <h4>SCOG\xC9 pieces wrapped, boxed, and ready to gift.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!0,document.querySelectorAll(".productContainer").forEach(z=>{z.classList.contains("gifts")?z.style.display="block":z.style.display="none"});break}};window.sayScoge=()=>{document.getElementById("scoge").play(),clearScreen()};window.logoMove=(B,w,O,z)=>{var U=document.getElementById("logo");U.style.transition=`${z}s all`,window.matchMedia("(max-width: 768px)").matches||(U.style.left=`${w}%`,U.style.width=`${O}%`,U.style.top=`${B}%`)};window.dActiveBut=()=>{var B=document.getElementById("settingsBut"),w=document.getElementById("extraBut");shopActive==="closed"?(B.style.opacity="25%",w.style.opacity="25%",B.removeAttribute("onclick"),w.setAttribute("onclick","")):(B.style.opacity="100%",w.style.opacity="100%",B.setAttribute("onclick","openSettings();"),w.setAttribute("onclick","openExtra();"))};window.clearMainUi=()=>{var B=document.getElementById("gMenu"),w=document.getElementById("logo"),O=document.getElementById("settingsMenu"),z=document.getElementById("subText1"),U=document.getElementById("subText2");B.style.transition="2s all",w.style.transition="2s all",z.style.transition="2s all",U.style.transition="2s all",inUniverse===!0?setTimeout(()=>{B.style.left="10%",w.style.left="30%",B.style.opacity="0",w.style.opacity="0%",setTimeout(()=>{z.style.bottom="49%",z.style.opacity="100%",setTimeout(()=>{U.style.bottom="45%"},500)},1e3),setTimeout(()=>{B.style.display="none",w.style.display="none",O.style.display="none"},3e3)},2e3):(B.style.display="block",w.style.display="block",O.style.display="grid",z.style.bottom="44%",z.style.opacity="0%",U.style.bottom="40%",U.style.opacity="0%",setTimeout(()=>{B.style.left="6%",w.style.left="3%",B.style.opacity="100%",w.style.opacity="100%"},1e3),setTimeout(()=>{U.style.display="none",z.style.display="none"}))};window.mainMenuPosition=(B,w,O,z,U)=>{var F=document.querySelectorAll(".mainMenuBut");document.getElementById(""),F.forEach(j=>{switch(j.style.backgroundColor=B,j.id){case"shopBut":document.getElementById("shopBut").style.left=w;break;case"newGameBut":document.getElementById("newGameBut").style.left=O;break;case"settingsBut":document.getElementById("settingsBut").style.left=z;break;case"subscribeBut":document.getElementById("subscribeBut").style.left=U;break}})};window.activateInvestors=()=>{document.getElementById("getInvestors").style.display="block",document.getElementById("investBut").style.display="block",window.matchMedia("(max-width: 768px)").matches&&(document.getElementById("settingsBut").style.display="none")};window.openInvestors=()=>{document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="0%"};window.closeInvestor=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="-100%"};window.getParamsDesktop=()=>{const B=new URLSearchParams(location.search);investorsView=B.get("Investors"),investorsView==="true"&&activateInvestors()};var universeCanvas=document.querySelector("#universe"),exploreUI=document.querySelector("#exploreUI"),previewUI=document.getElementById("previewUI"),expBox=document.getElementById("explore"),pinUi=document.getElementById("getUniMenu").shadowRoot.getElementById("pinMenu"),locked=document.getElementById("getUniMenu").shadowRoot.getElementById("locked"),moveMenu=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),playerPos={x:0,y:0},selectionPos={x:0,y:0},selectionBoxPosition={x:0,y:0},cityPosition={x:0,y:0},convertedSelPos,convertedCursorPos,tileSize=18,playerNum=0,msL=50,msR=50,msU=50,msD=50,movementPaused=!1,timeoutHandle1,timeoutHandle2,previewOpen=!1,sessionData={},ci=!1;window.suUiActor=null;const suIDL=idlFactory;var user={principal:null,balance:null,pk:null,nfts:null},uiState={nftsLoaded:!1};const VITE_canister="wnunb-baaaa-aaaag-aaoya-cai",whitelist=[VITE_canister],localhost="http://127.0.0.1:8080/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai";let getAllUserNFTs;document.getElementById("settingsBut").addEventListener("click",openSettings);window.onload=()=>{sysCheck(),loadShop(),getParamsDesktop()};window.universeSystem=async()=>{var B=universeCanvas.getContext("2d"),w=document.createElement("img"),O=document.getElementById("camera");soundtrack.stop("menuEntrance1"),soundtrack.play("menuEntrance1"),navigator.userAgent.includes("Brave")||navigator.userAgent.includes("Firefox")||navigator.userAgent.includes("Chrome")?(console.log("The browser is Brave, Firefox, or Chrome"),getAllUserNFTs=await __vitePreload(()=>import("./index.2a03fd43.js").then(function(z){return z.i}),[]).then(z=>z.getAllUserNFTs),document.querySelector("#universe").style.display="block",setTimeout(()=>{document.querySelector("#universe").style.opacity="100%"},100),w.onload=function(){B.drawImage(w,0,0,w.width,w.height),B.fillStyle="rgba(255, 255, 255, 0.08)";for(var z=0;z<w.width;z+=tileSize)B.fillRect(z,0,1,w.height);for(var U=0;U<w.height;U+=tileSize)B.fillRect(0,U,w.width,1)},w.src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg",O.scrollTo(990,0),O.addEventListener("scroll",function(){O.scrollLeft<990&&O.scrollTo(990,0),O.style.overflowY="hidden"},{passive:!1}),O.addEventListener("wheel",function(z){z.preventDefault()},{passive:!1}),adminUI(),universeCanvas.addEventListener("mousemove",mousePos),universeCanvas.addEventListener("click",selectedPos),openLocationCard(),window.playerPos()):alert("The browser is not Brave, Firefox, or Chrome")};window.adminUI=()=>{var B=document.createElement("div"),w=document.createElement("div"),O=document.createElement("div"),z=document.createElement("div"),U=document.createElement("div"),F=document.createElement("div"),j=document.createElement("div");document.getElementById("selection").style.display="block",B.id="adminUI",w.id="DebugColumn",O.id="DebugRow",z.id="selectionPos",U.id="pixelPos",F.id="selectPosBox",j.id="playerCord",B.appendChild(U),B.appendChild(w),B.appendChild(O),B.appendChild(z),B.appendChild(F),B.appendChild(j),document.getElementById("main").appendChild(B),dragElement(document.getElementById("adminUI"),!0),dragElement(document.getElementById("exploreUI"),!0),z.innerHTML="Selected Tile:",w.innerHTML="Column:",O.innerHTML="Row:",U.innerHTML="X: , Y:",F.innerHTML="SelBoxTile:",j.innerHTML="Player Coordinates:",initSelection(),moveSelection(),window.moveMenu()};window.mousePos=B=>{var w=universeCanvas.getBoundingClientRect();playerPos.x=Math.round((B.clientX-w.left)/tileSize),playerPos.y=Math.round((B.clientY-w.top)/tileSize),pixelPos.x=B.clientX-w.left,pixelPos.y=B.clientY-w.top,document.getElementById("DebugColumn").innerHTML="Column: "+playerPos.x,document.getElementById("DebugRow").innerHTML="Row: "+playerPos.y,document.getElementById("pixelPos").innerHTML="X: "+pixelPos.x+", Y: "+pixelPos.y};window.selectedPos=B=>{document.getElementById("explore").style.display="block";var w=universeCanvas.getBoundingClientRect();exploreUI.style.transform="scale(0)",selectionPos.x=Math.round((B.clientX-(w.left+9))/tileSize),selectionPos.y=Math.round((B.clientY-(w.top+9))/tileSize);var O=170-selectionPos.x;if(document.getElementById("selectionPos").innerHTML="Selected Tile: "+(170-O+170*selectionPos.y),playerNum=170-O+170*selectionPos.y,convertedCursorPos=170-O+170*selectionPos.y,previewUI.innerHTML="Land "+playerNum,previewUI.style.color="blue",expBox.style.left=B.clientX-expBox.offsetWidth/2+"px",expBox.style.top=B.clientY-expBox.offsetHeight/2+"px",expBox.style.left=Math.round((expBox.offsetLeft-w.left)/tileSize)*tileSize+w.left+"px",expBox.style.top=Math.round((expBox.offsetTop-w.top)/tileSize)*tileSize+w.top+"px",previewUI.style.display="block",previewUI.style.left=expBox.offsetLeft+expBox.offsetWidth+18+"px",previewUI.style.top=expBox.offsetTop-108+"px",previewUI.style.transformOrigin="bottom left",expBox.offsetTop<215&&(previewUI.style.top=expBox.offsetTop+expBox.offsetHeight+18+"px",previewUI.style.transformOrigin="top left"),expBox.offsetLeft>window.innerWidth-215&&(previewUI.style.left=expBox.offsetLeft-previewUI.offsetWidth-18+"px",previewUI.style.transformOrigin="bottom right"),expBox.offsetLeft<215&&(previewUI.style.transformOrigin="bottom left"),previewOpen==!1){previewUI.style.transform="scale(1)",previewOpen=!0,timeoutHandle1=setTimeout(()=>{previewUI.style.transform="scale(0)",previewOpen=!1},3e3);return}if(previewOpen==!0){clearTimeout(timeoutHandle1),timeoutHandle1=setTimeout(()=>{previewUI.style.transform="scale(0)",previewOpen=!1},3e3);return}};function dragElement(B,w){var O=0,z=0,U=0,F=0;if(w===!1)return;pinUi.style.borderTop="2px solid rgba(225, 225, 225, 0.8)",pinUi.style.borderLeft="2px solid rgba(225, 225, 225, 0.8)",pinUi.style.filter="blur(0px)",pinUi.setAttribute("class","unpinned"),locked.style.opacity="0",document.getElementById(B.id+"header")?document.getElementById(B.id+"header").onmousedown=j:B.onmousedown=j;function j(W){W=W||window.event,W.preventDefault(),U=W.clientX,F=W.clientY,document.onmouseup=G,document.onmousemove=q}function q(W){W=W||window.event,W.preventDefault(),O=U-W.clientX,z=F-W.clientY,U=W.clientX,F=W.clientY,B.style.top=B.offsetTop-z+"px",B.style.left=B.offsetLeft-O+"px"}function G(){document.onmouseup=null,document.onmousemove=null}}window.deactivateDrag=()=>{moveMenu.onmousedown=null,document.onmouseup=null,document.onmousemove=null,pinUi.style.borderTop="4px solid #ff002d",pinUi.style.borderLeft="4px solid #ff002d",pinUi.setAttribute("class","pinned"),locked.style.opacity="1"};window.pinMenu=()=>{if(pinUi.getAttribute("class")=="pinned"){dragElement(moveMenu,!0),pinUi.setAttribute("class","unpinned");return}if(pinUi.getAttribute("class")=="unpinned"){deactivateDrag(),pinUi.setAttribute("class","pinned"),moveMenu.style.transition="1s",moveMenu.style.top="36px",moveMenu.style.left="36px",document.getElementById("getUniMenu").toggleMenu(),setTimeout(()=>{moveMenu.style.transition=""},1200);return}};window.playerPos=()=>{var B=document.getElementById("selection"),w=universeCanvas.getBoundingClientRect(),O=B.getBoundingClientRect(),z={x:Math.round(O.left-w.left+2),y:Math.round(O.top-w.top+2)},U={x:Math.round(z.x/tileSize),y:Math.round(Math.round(z.y/tileSize))},F=170-U.x,j=170-F+U.y*170;document.getElementById("selectPosBox").innerHTML=`Player Position: ${j}`,convertedSelPos=170-F+U.y*170,cityPosition.x=z.x,cityPosition.y=z.y,document.getElementById("playerCord").innerHTML=`Player Coordinates: ${cityPosition.x}, ${cityPosition.y}`};window.moveSelection=()=>{var B=document.getElementById("selection"),w=window.innerHeight/tileSize,O=window.innerWidth/tileSize,z=w/2,U=O/2;selectionBoxPosition.x=U*tileSize,selectionBoxPosition.y=z*tileSize,document.addEventListener("keydown",function(F){exploreUI.style.transform="scale(0)",F.key==37&&selectionBoxPosition.x>0&&movementPaused==!1&&(selectionBoxPosition.x-=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msL)),F.key==38&&selectionBoxPosition.y>0&&movementPaused==!1&&(selectionBoxPosition.y-=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msU)),F.key==39&&selectionBoxPosition.x<O*tileSize-tileSize&&movementPaused==!1&&(selectionBoxPosition.x+=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msR)),F.key==40&&selectionBoxPosition.y<w*tileSize-tileSize&&movementPaused==!1&&(selectionBoxPosition.y+=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msD)),B.style.left=selectionBoxPosition.x+"px",B.style.top=selectionBoxPosition.y+"px",window.playerPos(),F.key==32&&window.exploreOpenHelper()}),document.addEventListener("keydown",function(F){F.key==37&&selectionBoxPosition.x==0&&(document.getElementById("camera").scrollLeft-=tileSize),F.key==38&&selectionBoxPosition.y==0&&(document.getElementById("camera").scrollTop-=tileSize),F.key==39&&selectionBoxPosition.x==O*tileSize-tileSize&&(document.getElementById("camera").scrollLeft+=tileSize),F.key==40&&selectionBoxPosition.y==w*tileSize-tileSize&&(document.getElementById("camera").scrollTop+=tileSize)})};window.initSelection=()=>{var B=window.innerWidth/tileSize,w=window.innerHeight/tileSize,O=document.getElementById("selection");O.style.left=B/2*tileSize+"px",O.style.top=w/2*tileSize+"px"};window.openLocationCard=()=>{universeCanvas.addEventListener("dblclick",()=>{if(document.getElementById("previewUI").style.transform="scale(0)",convertedSelPos===convertedCursorPos)window.exploreOpenHelper();else{var B=document.getElementById("adminUI");B.style.opacity="1",setTimeout(()=>{B.style.opacity="0"},5e3)}})};window.exploreOpenHelper=()=>{var B=document.getElementById("exploreUI").offsetWidth;selectionBoxPosition.x<window.innerWidth/tileSize*tileSize-18-B?exploreUI.style.left=selectionBoxPosition.x+tileSize+18+"px":exploreUI.style.left=selectionBoxPosition.x-18-B+"px",exploreUI.style.transform="scale(1)",exploreUI.style.width="200px",exploreUI.style.height="92px",exploreUI.style.top=selectionBoxPosition.y-92+"px",clearTimeout(timeoutHandle2),timeoutHandle2=setTimeout(()=>{exploreUI.style.transform="scale(0)"},6e3)};window.moveMenu=()=>{var B=document.getElementById("universe");moveMenu.style.display="block";var w=document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems"),O=document.getElementById("getUniMenu").shadowRoot,z=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt");z.forEach(U=>{U.addEventListener("mouseout",()=>{soundtrack.setVolume("menuMove3",.5),soundtrack.stop("menuMove3"),soundtrack.play("menuMove3")})}),w.childNodes.forEach(U=>{switch(U.id!="uniMenuItems"&&soundtrack.stop("menuLoading1"),U.addEventListener("click",()=>{clearAndSelectMenu(U.id),soundtrack.stop("menuEnter3"),soundtrack.play("menuEnter3")}),U.id){case"uniMenuShop":U.addEventListener("click",()=>{dragElement(moveMenu,!0),O.getElementById("fm-enhancements").style.display="grid",O.getElementById("fm-header-headline").style.opacity="0%",O.getElementById("fm-header-headline").style.pointerEvents="none",O.getElementById("fm-help").style.display="none",O.getElementById("fm-feedback").style.display="none",O.getElementById("fm-settings").style.display="none",O.getElementById("fm-profile").style.display="none",O.getElementById("fm-enhancements").innerHTML='<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">',O.getElementById("nftShop").addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen(),B.style.filter="blur(5px)",O.getElementById("uniMenu").style.filter="blur(10px)"}),O.getElementById("fm-inventory").style.display="none",O.getElementById("menuLoadingScreen").style.display="none",O.getElementById("menuMessage").style.display="none"});break;case"uniMenuItems":U.addEventListener("click",()=>{dragElement(moveMenu,!0),window.openInventory(),O.getElementById("fm-help").style.display="none",O.getElementById("fm-feedback").style.display="none",O.getElementById("fm-settings").style.display="none",O.getElementById("fm-enhancements").style.display="none",O.getElementById("fm-profile").style.display="none",U.setAttribute("class","menuTabs selectedMenu2"),O.getElementById("uniMenuItemsSvg").childNodes.forEach(F=>{F.style.fill="white"}),O.getElementById("uniMenuHelp").setAttribute("class","menuTabs"),O.getElementById("uniMenuHelpSvg").childNodes.forEach(F=>{F.style.stroke="#ff002d"})});break;case"uniMenuProfile":U.addEventListener("click",()=>{O.getElementById("fm-profile").style.display="grid",O.getElementById("fm-help").style.display="none",O.getElementById("fm-inventory").style.display="none",O.getElementById("fm-feedback").style.display="none",O.getElementById("fm-settings").style.display="none",O.getElementById("fm-enhancements").style.display="none",O.getElementById("menuLoadingScreen").style.display="none",O.getElementById("menuMessage").style.display="none",O.getElementById("fm-header").style.display="grid",O.getElementById("fm-header-headline").style.opacity="100%",O.getElementById("fm-header-headline").style.pointerEvents="auto",deactivateDrag()});break;case"uniMenuSettings":U.addEventListener("click",()=>{O.getElementById("fm-help").style.display="none",O.getElementById("fm-inventory").style.display="none",O.getElementById("fm-feedback").style.display="none",O.getElementById("fm-enhancements").style.display="none",O.getElementById("fm-profile").style.display="none",O.getElementById("fm-settings").style.display="grid",O.getElementById("menuLoadingScreen").style.display="none",O.getElementById("menuMessage").style.display="none",O.getElementById("fm-header").style.display="grid",O.getElementById("fm-header-headline").style.opacity="0%",O.getElementById("fm-header-headline").style.pointerEvents="none",deactivateDrag()});break;case"uniMenuHelp":U.addEventListener("click",()=>{dragElement(moveMenu,!0),O.getElementById("fm-help").style.display="grid",O.getElementById("fm-inventory").style.display="none",O.getElementById("fm-feedback").style.display="none",O.getElementById("fm-settings").style.display="none",O.getElementById("fm-enhancements").style.display="none",O.getElementById("fm-profile").style.display="none",O.getElementById("menuLoadingScreen").style.display="none",O.getElementById("menuMessage").style.display="none",O.getElementById("fm-header").style.display="grid",O.getElementById("fm-header-headline").style.opacity="100%",O.getElementById("fm-header-headline").style.pointerEvents="all"});break;case"uniMenuFeedback":U.addEventListener("click",()=>{O.getElementById("fm-help").style.display="none",O.getElementById("fm-inventory").style.display="none",O.getElementById("fm-enhancements").style.display="none",O.getElementById("fm-profile").style.display="none",O.getElementById("fm-settings").style.display="none",O.getElementById("fm-header").style.display="grid",O.getElementById("menuLoadingScreen").style.display="none",O.getElementById("fm-header-headline").style.opacity="0%",O.getElementById("fm-header-headline").style.pointerEvents="none",O.getElementById("menuMessage").style.display="none",O.getElementById("fm-feedback").style.display="grid",O.getElementById("fm-feedback").addEventListener("click",()=>{deactivateDrag()}),deactivateDrag()});break;case"uniMenuExit":U.addEventListener("click",()=>{window.showMenu(),dragElement(moveMenu,!0),soundtrack.stop("menuExitSys1"),soundtrack.play("menuExitSys1")});break}}),dragElement(moveMenu,!0),hideMenu()};window.headlineSwtich=B=>{var w=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-header-headline");switch(B){case"inventory":w.innerHTML="Inventory";break;case"help":w.innerHTML="Help";break;case"feedback":w.innerHTML="Feedback";break;case"settings":w.innerHTML="Settings";break;case"profile":w.innerHTML="Profile";break;case"enhancements":w.innerHTML="Enhancements";break;default:w.innerHTML="Menu"}};window.clearAndSelectMenu=B=>{var w=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".menuTabs");w.forEach(O=>{O.id===B&&O.id!=="uniMenuExit"?(O.setAttribute("class","menuTabs selectedMenu2"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${O.id}Svg`).childNodes.forEach(z=>{z.style.stroke="white"})):(O.setAttribute("class","menuTabs"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${O.id}Svg`).childNodes.forEach(z=>{z.style.stroke="#ff002d",z.style.fill="#ff002d"}))})};window.hideMenu=()=>{var B=document.getElementById("gMenu"),w=document.getElementById("logo"),O=document.getElementById("subscribeComp"),z=document.getElementById("music"),U=document.getElementById("settingsMenu");B.style.opacity="0",w.style.opacity="0",O.style.opacity="0",z.style.opacity="0",B.style.pointerEvents="none",w.style.pointerEvents="none",O.style.pointerEvents="none",z.style.pointerEvents="none",U.style.zIndex="2"};window.showMenu=()=>{var B=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),w=document.getElementById("gMenu"),O=document.getElementById("logo"),z=document.getElementById("subscribeComp"),U=document.getElementById("music"),F=document.getElementById("settingsMenu");w.style.opacity="1",O.style.opacity="1",z.style.opacity="1",U.style.opacity="1",w.style.pointerEvents="auto",O.style.pointerEvents="auto",z.style.pointerEvents="auto",U.style.pointerEvents="auto",F.style.zIndex="3",document.querySelector("#universe").style.opacity="0%",setTimeout(()=>{document.querySelector("#universe").style.display="none"},1e3),document.getElementById("selection").style.display="none",document.getElementById("explore").style.display="none",previewUI.style.transform="scale(0)",B.style.display="none"};window.openInventory=async()=>{var B=document.getElementById("getUniMenu").shadowRoot,w=B.getElementById("menuLoadingScreen");console.log(uiState),uiState.nftsLoaded===!1?(w.style.display="grid",soundtrack.play("menuLoading1"),await connectWallet().then(()=>{B.getElementById("fm-inventory").style.display="block",B.getElementById("fm-header").style.display="grid",B.getElementById("fm-enhancements").style.display="none"})):(B.getElementById("fm-inventory").style.display="block",B.getElementById("fm-header").style.display="grid",B.getElementById("fm-enhancements").style.display="none")};window.connectWallet=async()=>{var B=document.getElementById("getUniMenu").shadowRoot;const w=await window.ic.plug.isConnected().catch(U=>{console.error(U)}),O=()=>{console.log(window.ic.plug.sessionManager.sessionData)};if(w===!1)try{const U=await window.ic.plug.requestConnect({whitelist,localhost,onConnectionUpdate:O,timeout:5e4});createActor().catch(q=>{console.log("Create Actor",q)});const F=await window.ic.plug.agent.getPrincipal().catch(q=>{console.error("Get Principal",q)});user.principal=`${F}`;const j=await window.ic.plug.requestBalance().catch(q=>{console.error("Get Balance",q)});user.balance=j,user.pk=U,console.log(user),playerState(),getNFTCollections()}catch(U){console.error(U)}else if(w===!0){window.suUiActor===null&&await createActor(),sessionData=window.ic.plug.sessionManager.sessionData;var z=sessionData.principalId;user.principal=`${z}`,getNFTCollections(z),playerState()}else B.getElementById("menuLoadingScreen").style.display="none",soundtrack.stop("menuLoading1"),soundtrack.setVolume("menuError1",.4),soundtrack.play("menuError1"),B.getElementById("menuMessage").style.display="grid"};const getNFTCollections=async B=>{var w=document.getElementById("getUniMenu").shadowRoot;const O=`${user.principal}`,z=await getAllUserNFTs({user:O||B}).catch(j=>{console.log("Get NFTs",j)});user.nfts=z;var U=document.createElement("div"),F=document.createElement("img");U.setAttribute("class","Inventory-Image-Cont"),U.appendChild(F),F.src=`${user.nfts[0].tokens[0].url}`,w.getElementById("inventory-images").appendChild(U),w.getElementById("inventoryInnerText").innerHTML=`${user.nfts[0].description}`,console.log("NFT Pulled Successfully"),w.getElementById("menuLoadingScreen").style.display="none",soundtrack.stop("menuLoading1"),uiState.nftsLoaded=!0},playerState=async()=>{await window.suUiActor.metadata(),await window.suUiActor.adminUser()===user.principal&&alert("Welcome Amin of the Scoge Universe!")},createActor=async()=>{console.log("Check Calling createActor"),window.suUiActor=await window.ic.plug.createActor({canisterId:VITE_canister,interfaceFactory:suIDL}).catch(B=>{console.log("Error is Here",B)})};window.systemNoti=async()=>{document.getElementById("updatesModal").style.display="block",document.getElementById("getCamp").closeCampaign()};export{sha256 as s};
