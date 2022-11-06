var Te=Object.defineProperty;var Le=(B,w,O)=>w in B?Te(B,w,{enumerable:!0,configurable:!0,writable:!0,value:O}):B[w]=O;var ae=(B,w,O)=>(Le(B,typeof w!="symbol"?w+"":w,O),O);import"./wScoge.fc00b881.js";var objectWithoutProperties={exports:{}},objectWithoutPropertiesLoose={exports:{}};(function(B){function w(O,j){if(O==null)return{};var D={},z=Object.keys(O),q,G;for(G=0;G<z.length;G++)q=z[G],!(j.indexOf(q)>=0)&&(D[q]=O[q]);return D}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(objectWithoutPropertiesLoose);(function(B){var w=objectWithoutPropertiesLoose.exports;function O(j,D){if(j==null)return{};var z=w(j,D),q,G;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(j);for(G=0;G<U.length;G++)q=U[G],!(D.indexOf(q)>=0)&&(!Object.prototype.propertyIsEnumerable.call(j,q)||(z[q]=j[q]))}return z}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(objectWithoutProperties);var toConsumableArray={exports:{}},arrayWithoutHoles={exports:{}},arrayLikeToArray={exports:{}};(function(B){function w(O,j){(j==null||j>O.length)&&(j=O.length);for(var D=0,z=new Array(j);D<j;D++)z[D]=O[D];return z}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(arrayLikeToArray);(function(B){var w=arrayLikeToArray.exports;function O(j){if(Array.isArray(j))return w(j)}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(arrayWithoutHoles);var iterableToArray={exports:{}};(function(B){function w(O){if(typeof Symbol!="undefined"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(iterableToArray);var unsupportedIterableToArray={exports:{}};(function(B){var w=arrayLikeToArray.exports;function O(j,D){if(!!j){if(typeof j=="string")return w(j,D);var z=Object.prototype.toString.call(j).slice(8,-1);if(z==="Object"&&j.constructor&&(z=j.constructor.name),z==="Map"||z==="Set")return Array.from(j);if(z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))return w(j,D)}}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(unsupportedIterableToArray);var nonIterableSpread={exports:{}};(function(B){function w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(nonIterableSpread);(function(B){var w=arrayWithoutHoles.exports,O=iterableToArray.exports,j=unsupportedIterableToArray.exports,D=nonIterableSpread.exports;function z(q){return w(q)||O(q)||j(q)||D()}B.exports=z,B.exports.__esModule=!0,B.exports.default=B.exports})(toConsumableArray);var _typeof$2={exports:{}};(function(B){function w(O){return B.exports=w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},B.exports.__esModule=!0,B.exports.default=B.exports,w(O)}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(_typeof$2);var defineProperty={exports:{}};(function(B){function w(O,j,D){return j in O?Object.defineProperty(O,j,{value:D,enumerable:!0,configurable:!0,writable:!0}):O[j]=D,O}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(defineProperty);var classCallCheck={exports:{}};(function(B){function w(O,j){if(!(O instanceof j))throw new TypeError("Cannot call a class as a function")}B.exports=w,B.exports.__esModule=!0,B.exports.default=B.exports})(classCallCheck);var createClass={exports:{}};(function(B){function w(j,D){for(var z=0;z<D.length;z++){var q=D[z];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(j,q.key,q)}}function O(j,D,z){return D&&w(j.prototype,D),z&&w(j,z),Object.defineProperty(j,"prototype",{writable:!1}),j}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(createClass);var regeneratorRuntime$1={exports:{}};(function(B){var w=_typeof$2.exports.default;function O(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */B.exports=O=function(){return j},B.exports.__esModule=!0,B.exports.default=B.exports;var j={},D=Object.prototype,z=D.hasOwnProperty,q=typeof Symbol=="function"?Symbol:{},G=q.iterator||"@@iterator",U=q.asyncIterator||"@@asyncIterator",W=q.toStringTag||"@@toStringTag";function Q(K,F,ee){return Object.defineProperty(K,F,{value:ee,enumerable:!0,configurable:!0,writable:!0}),K[F]}try{Q({},"")}catch{Q=function(ee,te,ie){return ee[te]=ie}}function Y(K,F,ee,te){var ie=F&&F.prototype instanceof se?F:se,ne=Object.create(ie.prototype),le=new Ee(te||[]);return ne._invoke=function(he,me,oe){var ce="suspendedStart";return function(ge,$e){if(ce==="executing")throw new Error("Generator is already running");if(ce==="completed"){if(ge==="throw")throw $e;return Ce()}for(oe.method=ge,oe.arg=$e;;){var _e=oe.delegate;if(_e){var Se=Be(_e,oe);if(Se){if(Se===X)continue;return Se}}if(oe.method==="next")oe.sent=oe._sent=oe.arg;else if(oe.method==="throw"){if(ce==="suspendedStart")throw ce="completed",oe.arg;oe.dispatchException(oe.arg)}else oe.method==="return"&&oe.abrupt("return",oe.arg);ce="executing";var fe=J(he,me,oe);if(fe.type==="normal"){if(ce=oe.done?"completed":"suspendedYield",fe.arg===X)continue;return{value:fe.arg,done:oe.done}}fe.type==="throw"&&(ce="completed",oe.method="throw",oe.arg=fe.arg)}}}(K,ee,le),ne}function J(K,F,ee){try{return{type:"normal",arg:K.call(F,ee)}}catch(te){return{type:"throw",arg:te}}}j.wrap=Y;var X={};function se(){}function re(){}function de(){}var pe={};Q(pe,G,function(){return this});var ue=Object.getPrototypeOf,ve=ue&&ue(ue(Ie([])));ve&&ve!==D&&z.call(ve,G)&&(pe=ve);var ye=de.prototype=se.prototype=Object.create(pe);function ke(K){["next","throw","return"].forEach(function(F){Q(K,F,function(ee){return this._invoke(F,ee)})})}function be(K,F){function ee(ie,ne,le,he){var me=J(K[ie],K,ne);if(me.type!=="throw"){var oe=me.arg,ce=oe.value;return ce&&w(ce)=="object"&&z.call(ce,"__await")?F.resolve(ce.__await).then(function(ge){ee("next",ge,le,he)},function(ge){ee("throw",ge,le,he)}):F.resolve(ce).then(function(ge){oe.value=ge,le(oe)},function(ge){return ee("throw",ge,le,he)})}he(me.arg)}var te;this._invoke=function(ie,ne){function le(){return new F(function(he,me){ee(ie,ne,he,me)})}return te=te?te.then(le,le):le()}}function Be(K,F){var ee=K.iterator[F.method];if(ee===void 0){if(F.delegate=null,F.method==="throw"){if(K.iterator.return&&(F.method="return",F.arg=void 0,Be(K,F),F.method==="throw"))return X;F.method="throw",F.arg=new TypeError("The iterator does not provide a 'throw' method")}return X}var te=J(ee,K.iterator,F.arg);if(te.type==="throw")return F.method="throw",F.arg=te.arg,F.delegate=null,X;var ie=te.arg;return ie?ie.done?(F[K.resultName]=ie.value,F.next=K.nextLoc,F.method!=="return"&&(F.method="next",F.arg=void 0),F.delegate=null,X):ie:(F.method="throw",F.arg=new TypeError("iterator result is not an object"),F.delegate=null,X)}function xe(K){var F={tryLoc:K[0]};1 in K&&(F.catchLoc=K[1]),2 in K&&(F.finallyLoc=K[2],F.afterLoc=K[3]),this.tryEntries.push(F)}function we(K){var F=K.completion||{};F.type="normal",delete F.arg,K.completion=F}function Ee(K){this.tryEntries=[{tryLoc:"root"}],K.forEach(xe,this),this.reset(!0)}function Ie(K){if(K){var F=K[G];if(F)return F.call(K);if(typeof K.next=="function")return K;if(!isNaN(K.length)){var ee=-1,te=function ie(){for(;++ee<K.length;)if(z.call(K,ee))return ie.value=K[ee],ie.done=!1,ie;return ie.value=void 0,ie.done=!0,ie};return te.next=te}}return{next:Ce}}function Ce(){return{value:void 0,done:!0}}return re.prototype=de,Q(ye,"constructor",de),Q(de,"constructor",re),re.displayName=Q(de,W,"GeneratorFunction"),j.isGeneratorFunction=function(K){var F=typeof K=="function"&&K.constructor;return!!F&&(F===re||(F.displayName||F.name)==="GeneratorFunction")},j.mark=function(K){return Object.setPrototypeOf?Object.setPrototypeOf(K,de):(K.__proto__=de,Q(K,W,"GeneratorFunction")),K.prototype=Object.create(ye),K},j.awrap=function(K){return{__await:K}},ke(be.prototype),Q(be.prototype,U,function(){return this}),j.AsyncIterator=be,j.async=function(K,F,ee,te,ie){ie===void 0&&(ie=Promise);var ne=new be(Y(K,F,ee,te),ie);return j.isGeneratorFunction(F)?ne:ne.next().then(function(le){return le.done?le.value:ne.next()})},ke(ye),Q(ye,W,"Generator"),Q(ye,G,function(){return this}),Q(ye,"toString",function(){return"[object Generator]"}),j.keys=function(K){var F=[];for(var ee in K)F.push(ee);return F.reverse(),function te(){for(;F.length;){var ie=F.pop();if(ie in K)return te.value=ie,te.done=!1,te}return te.done=!0,te}},j.values=Ie,Ee.prototype={constructor:Ee,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(we),!F)for(var ee in this)ee.charAt(0)==="t"&&z.call(this,ee)&&!isNaN(+ee.slice(1))&&(this[ee]=void 0)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var ee=this;function te(oe,ce){return le.type="throw",le.arg=F,ee.next=oe,ce&&(ee.method="next",ee.arg=void 0),!!ce}for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ne=this.tryEntries[ie],le=ne.completion;if(ne.tryLoc==="root")return te("end");if(ne.tryLoc<=this.prev){var he=z.call(ne,"catchLoc"),me=z.call(ne,"finallyLoc");if(he&&me){if(this.prev<ne.catchLoc)return te(ne.catchLoc,!0);if(this.prev<ne.finallyLoc)return te(ne.finallyLoc)}else if(he){if(this.prev<ne.catchLoc)return te(ne.catchLoc,!0)}else{if(!me)throw new Error("try statement without catch or finally");if(this.prev<ne.finallyLoc)return te(ne.finallyLoc)}}}},abrupt:function(F,ee){for(var te=this.tryEntries.length-1;te>=0;--te){var ie=this.tryEntries[te];if(ie.tryLoc<=this.prev&&z.call(ie,"finallyLoc")&&this.prev<ie.finallyLoc){var ne=ie;break}}ne&&(F==="break"||F==="continue")&&ne.tryLoc<=ee&&ee<=ne.finallyLoc&&(ne=null);var le=ne?ne.completion:{};return le.type=F,le.arg=ee,ne?(this.method="next",this.next=ne.finallyLoc,X):this.complete(le)},complete:function(F,ee){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&ee&&(this.next=ee),X},finish:function(F){for(var ee=this.tryEntries.length-1;ee>=0;--ee){var te=this.tryEntries[ee];if(te.finallyLoc===F)return this.complete(te.completion,te.afterLoc),we(te),X}},catch:function(F){for(var ee=this.tryEntries.length-1;ee>=0;--ee){var te=this.tryEntries[ee];if(te.tryLoc===F){var ie=te.completion;if(ie.type==="throw"){var ne=ie.arg;we(te)}return ne}}throw new Error("illegal catch attempt")},delegateYield:function(F,ee,te){return this.delegate={iterator:Ie(F),resultName:ee,nextLoc:te},this.method==="next"&&(this.arg=void 0),X}},j}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(regeneratorRuntime$1);var runtime=regeneratorRuntime$1.exports(),regenerator=runtime;try{regeneratorRuntime=runtime}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}var asyncToGenerator={exports:{}};(function(B){function w(j,D,z,q,G,U,W){try{var Q=j[U](W),Y=Q.value}catch(J){z(J);return}Q.done?D(Y):Promise.resolve(Y).then(q,G)}function O(j){return function(){var D=this,z=arguments;return new Promise(function(q,G){var U=j.apply(D,z);function W(Y){w(U,q,G,W,Q,"next",Y)}function Q(Y){w(U,q,G,W,Q,"throw",Y)}W(void 0)})}}B.exports=O,B.exports.__esModule=!0,B.exports.default=B.exports})(asyncToGenerator);var axios$3={exports:{}},bind$2=function(w,O){return function(){for(var D=new Array(arguments.length),z=0;z<D.length;z++)D[z]=arguments[z];return w.apply(O,D)}},bind$1=bind$2,toString=Object.prototype.toString;function isArray(B){return toString.call(B)==="[object Array]"}function isUndefined(B){return typeof B=="undefined"}function isBuffer(B){return B!==null&&!isUndefined(B)&&B.constructor!==null&&!isUndefined(B.constructor)&&typeof B.constructor.isBuffer=="function"&&B.constructor.isBuffer(B)}function isArrayBuffer(B){return toString.call(B)==="[object ArrayBuffer]"}function isFormData(B){return typeof FormData!="undefined"&&B instanceof FormData}function isArrayBufferView(B){var w;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?w=ArrayBuffer.isView(B):w=B&&B.buffer&&B.buffer instanceof ArrayBuffer,w}function isString(B){return typeof B=="string"}function isNumber(B){return typeof B=="number"}function isObject(B){return B!==null&&typeof B=="object"}function isPlainObject(B){if(toString.call(B)!=="[object Object]")return!1;var w=Object.getPrototypeOf(B);return w===null||w===Object.prototype}function isDate(B){return toString.call(B)==="[object Date]"}function isFile(B){return toString.call(B)==="[object File]"}function isBlob(B){return toString.call(B)==="[object Blob]"}function isFunction(B){return toString.call(B)==="[object Function]"}function isStream(B){return isObject(B)&&isFunction(B.pipe)}function isURLSearchParams(B){return typeof URLSearchParams!="undefined"&&B instanceof URLSearchParams}function trim(B){return B.trim?B.trim():B.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(B,w){if(!(B===null||typeof B=="undefined"))if(typeof B!="object"&&(B=[B]),isArray(B))for(var O=0,j=B.length;O<j;O++)w.call(null,B[O],O,B);else for(var D in B)Object.prototype.hasOwnProperty.call(B,D)&&w.call(null,B[D],D,B)}function merge(){var B={};function w(D,z){isPlainObject(B[z])&&isPlainObject(D)?B[z]=merge(B[z],D):isPlainObject(D)?B[z]=merge({},D):isArray(D)?B[z]=D.slice():B[z]=D}for(var O=0,j=arguments.length;O<j;O++)forEach(arguments[O],w);return B}function extend(B,w,O){return forEach(w,function(D,z){O&&typeof D=="function"?B[z]=bind$1(D,O):B[z]=D}),B}function stripBOM(B){return B.charCodeAt(0)===65279&&(B=B.slice(1)),B}var utils$d={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM},utils$c=utils$d;function encode(B){return encodeURIComponent(B).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function(w,O,j){if(!O)return w;var D;if(j)D=j(O);else if(utils$c.isURLSearchParams(O))D=O.toString();else{var z=[];utils$c.forEach(O,function(U,W){U===null||typeof U=="undefined"||(utils$c.isArray(U)?W=W+"[]":U=[U],utils$c.forEach(U,function(Y){utils$c.isDate(Y)?Y=Y.toISOString():utils$c.isObject(Y)&&(Y=JSON.stringify(Y)),z.push(encode(W)+"="+encode(Y))}))}),D=z.join("&")}if(D){var q=w.indexOf("#");q!==-1&&(w=w.slice(0,q)),w+=(w.indexOf("?")===-1?"?":"&")+D}return w},utils$b=utils$d;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function(w,O,j){return this.handlers.push({fulfilled:w,rejected:O,synchronous:j?j.synchronous:!1,runWhen:j?j.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function(w){this.handlers[w]&&(this.handlers[w]=null)};InterceptorManager$1.prototype.forEach=function(w){utils$b.forEach(this.handlers,function(j){j!==null&&w(j)})};var InterceptorManager_1=InterceptorManager$1,utils$a=utils$d,normalizeHeaderName$1=function(w,O){utils$a.forEach(w,function(D,z){z!==O&&z.toUpperCase()===O.toUpperCase()&&(w[O]=D,delete w[z])})},enhanceError$2=function(w,O,j,D,z){return w.config=O,j&&(w.code=j),w.request=D,w.response=z,w.isAxiosError=!0,w.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},w},enhanceError$1=enhanceError$2,createError$2=function(w,O,j,D,z){var q=new Error(w);return enhanceError$1(q,O,j,D,z)},createError$1=createError$2,settle$1=function(w,O,j){var D=j.config.validateStatus;!j.status||!D||D(j.status)?w(j):O(createError$1("Request failed with status code "+j.status,j.config,null,j.request,j))},utils$9=utils$d,cookies$1=utils$9.isStandardBrowserEnv()?function(){return{write:function(O,j,D,z,q,G){var U=[];U.push(O+"="+encodeURIComponent(j)),utils$9.isNumber(D)&&U.push("expires="+new Date(D).toGMTString()),utils$9.isString(z)&&U.push("path="+z),utils$9.isString(q)&&U.push("domain="+q),G===!0&&U.push("secure"),document.cookie=U.join("; ")},read:function(O){var j=document.cookie.match(new RegExp("(^|;\\s*)("+O+")=([^;]*)"));return j?decodeURIComponent(j[3]):null},remove:function(O){this.write(O,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function(w){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(w)},combineURLs$1=function(w,O){return O?w.replace(/\/+$/,"")+"/"+O.replace(/^\/+/,""):w},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function(w,O){return w&&!isAbsoluteURL(O)?combineURLs(w,O):O},utils$8=utils$d,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function(w){var O={},j,D,z;return w&&utils$8.forEach(w.split(`
`),function(G){if(z=G.indexOf(":"),j=utils$8.trim(G.substr(0,z)).toLowerCase(),D=utils$8.trim(G.substr(z+1)),j){if(O[j]&&ignoreDuplicateOf.indexOf(j)>=0)return;j==="set-cookie"?O[j]=(O[j]?O[j]:[]).concat([D]):O[j]=O[j]?O[j]+", "+D:D}}),O},utils$7=utils$d,isURLSameOrigin$1=utils$7.isStandardBrowserEnv()?function(){var w=/(msie|trident)/i.test(navigator.userAgent),O=document.createElement("a"),j;function D(z){var q=z;return w&&(O.setAttribute("href",q),q=O.href),O.setAttribute("href",q),{href:O.href,protocol:O.protocol?O.protocol.replace(/:$/,""):"",host:O.host,search:O.search?O.search.replace(/^\?/,""):"",hash:O.hash?O.hash.replace(/^#/,""):"",hostname:O.hostname,port:O.port,pathname:O.pathname.charAt(0)==="/"?O.pathname:"/"+O.pathname}}return j=D(window.location.href),function(q){var G=utils$7.isString(q)?D(q):q;return G.protocol===j.protocol&&G.host===j.host}}():function(){return function(){return!0}}(),utils$6=utils$d,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,xhr=function(w){return new Promise(function(j,D){var z=w.data,q=w.headers,G=w.responseType;utils$6.isFormData(z)&&delete q["Content-Type"];var U=new XMLHttpRequest;if(w.auth){var W=w.auth.username||"",Q=w.auth.password?unescape(encodeURIComponent(w.auth.password)):"";q.Authorization="Basic "+btoa(W+":"+Q)}var Y=buildFullPath(w.baseURL,w.url);U.open(w.method.toUpperCase(),buildURL$1(Y,w.params,w.paramsSerializer),!0),U.timeout=w.timeout;function J(){if(!!U){var se="getAllResponseHeaders"in U?parseHeaders(U.getAllResponseHeaders()):null,re=!G||G==="text"||G==="json"?U.responseText:U.response,de={data:re,status:U.status,statusText:U.statusText,headers:se,config:w,request:U};settle(j,D,de),U=null}}if("onloadend"in U?U.onloadend=J:U.onreadystatechange=function(){!U||U.readyState!==4||U.status===0&&!(U.responseURL&&U.responseURL.indexOf("file:")===0)||setTimeout(J)},U.onabort=function(){!U||(D(createError("Request aborted",w,"ECONNABORTED",U)),U=null)},U.onerror=function(){D(createError("Network Error",w,null,U)),U=null},U.ontimeout=function(){var re="timeout of "+w.timeout+"ms exceeded";w.timeoutErrorMessage&&(re=w.timeoutErrorMessage),D(createError(re,w,w.transitional&&w.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",U)),U=null},utils$6.isStandardBrowserEnv()){var X=(w.withCredentials||isURLSameOrigin(Y))&&w.xsrfCookieName?cookies.read(w.xsrfCookieName):void 0;X&&(q[w.xsrfHeaderName]=X)}"setRequestHeader"in U&&utils$6.forEach(q,function(re,de){typeof z=="undefined"&&de.toLowerCase()==="content-type"?delete q[de]:U.setRequestHeader(de,re)}),utils$6.isUndefined(w.withCredentials)||(U.withCredentials=!!w.withCredentials),G&&G!=="json"&&(U.responseType=w.responseType),typeof w.onDownloadProgress=="function"&&U.addEventListener("progress",w.onDownloadProgress),typeof w.onUploadProgress=="function"&&U.upload&&U.upload.addEventListener("progress",w.onUploadProgress),w.cancelToken&&w.cancelToken.promise.then(function(re){!U||(U.abort(),D(re),U=null)}),z||(z=null),U.send(z)})},utils$5=utils$d,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(B,w){!utils$5.isUndefined(B)&&utils$5.isUndefined(B["Content-Type"])&&(B["Content-Type"]=w)}function getDefaultAdapter(){var B;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(B=xhr),B}function stringifySafely(B,w,O){if(utils$5.isString(B))try{return(w||JSON.parse)(B),utils$5.trim(B)}catch(j){if(j.name!=="SyntaxError")throw j}return(O||JSON.stringify)(B)}var defaults$3={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter(),transformRequest:[function(w,O){return normalizeHeaderName(O,"Accept"),normalizeHeaderName(O,"Content-Type"),utils$5.isFormData(w)||utils$5.isArrayBuffer(w)||utils$5.isBuffer(w)||utils$5.isStream(w)||utils$5.isFile(w)||utils$5.isBlob(w)?w:utils$5.isArrayBufferView(w)?w.buffer:utils$5.isURLSearchParams(w)?(setContentTypeIfUnset(O,"application/x-www-form-urlencoded;charset=utf-8"),w.toString()):utils$5.isObject(w)||O&&O["Content-Type"]==="application/json"?(setContentTypeIfUnset(O,"application/json"),stringifySafely(w)):w}],transformResponse:[function(w){var O=this.transitional,j=O&&O.silentJSONParsing,D=O&&O.forcedJSONParsing,z=!j&&this.responseType==="json";if(z||D&&utils$5.isString(w)&&w.length)try{return JSON.parse(w)}catch(q){if(z)throw q.name==="SyntaxError"?enhanceError(q,this,"E_JSON_PARSE"):q}return w}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(w){return w>=200&&w<300}};defaults$3.headers={common:{Accept:"application/json, text/plain, */*"}};utils$5.forEach(["delete","get","head"],function(w){defaults$3.headers[w]={}});utils$5.forEach(["post","put","patch"],function(w){defaults$3.headers[w]=utils$5.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$4=utils$d,defaults$2=defaults_1,transformData$1=function(w,O,j){var D=this||defaults$2;return utils$4.forEach(j,function(q){w=q.call(D,w,O)}),w},isCancel$1=function(w){return!!(w&&w.__CANCEL__)},utils$3=utils$d,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1;function throwIfCancellationRequested(B){B.cancelToken&&B.cancelToken.throwIfRequested()}var dispatchRequest$1=function(w){throwIfCancellationRequested(w),w.headers=w.headers||{},w.data=transformData.call(w,w.data,w.headers,w.transformRequest),w.headers=utils$3.merge(w.headers.common||{},w.headers[w.method]||{},w.headers),utils$3.forEach(["delete","get","head","post","put","patch","common"],function(D){delete w.headers[D]});var O=w.adapter||defaults$1.adapter;return O(w).then(function(D){return throwIfCancellationRequested(w),D.data=transformData.call(w,D.data,D.headers,w.transformResponse),D},function(D){return isCancel(D)||(throwIfCancellationRequested(w),D&&D.response&&(D.response.data=transformData.call(w,D.response.data,D.response.headers,w.transformResponse))),Promise.reject(D)})},utils$2=utils$d,mergeConfig$2=function(w,O){O=O||{};var j={},D=["url","method","data"],z=["headers","auth","proxy","params"],q=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],G=["validateStatus"];function U(J,X){return utils$2.isPlainObject(J)&&utils$2.isPlainObject(X)?utils$2.merge(J,X):utils$2.isPlainObject(X)?utils$2.merge({},X):utils$2.isArray(X)?X.slice():X}function W(J){utils$2.isUndefined(O[J])?utils$2.isUndefined(w[J])||(j[J]=U(void 0,w[J])):j[J]=U(w[J],O[J])}utils$2.forEach(D,function(X){utils$2.isUndefined(O[X])||(j[X]=U(void 0,O[X]))}),utils$2.forEach(z,W),utils$2.forEach(q,function(X){utils$2.isUndefined(O[X])?utils$2.isUndefined(w[X])||(j[X]=U(void 0,w[X])):j[X]=U(void 0,O[X])}),utils$2.forEach(G,function(X){X in O?j[X]=U(w[X],O[X]):X in w&&(j[X]=U(void 0,w[X]))});var Q=D.concat(z).concat(q).concat(G),Y=Object.keys(w).concat(Object.keys(O)).filter(function(X){return Q.indexOf(X)===-1});return utils$2.forEach(Y,W),j};const name="axios",version="0.21.4",description="Promise based HTTP client for the browser and node.js",main="index.js",scripts={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository={type:"git",url:"https://github.com/axios/axios.git"},keywords=["xhr","http","ajax","promise","node"],author="Matt Zabriskie",license="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0={name,version,description,main,scripts,repository,keywords,author,license,bugs,homepage,devDependencies,browser,jsdelivr,unpkg,typings,dependencies,bundlesize},pkg=require$$0,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(B,w){validators$1[B]=function(j){return typeof j===B||"a"+(w<1?"n ":" ")+B}});var deprecatedWarnings={},currentVerArr=pkg.version.split(".");function isOlderVersion(B,w){for(var O=w?w.split("."):currentVerArr,j=B.split("."),D=0;D<3;D++){if(O[D]>j[D])return!0;if(O[D]<j[D])return!1}return!1}validators$1.transitional=function(w,O,j){var D=O&&isOlderVersion(O);function z(q,G){return"[Axios v"+pkg.version+"] Transitional option '"+q+"'"+G+(j?". "+j:"")}return function(q,G,U){if(w===!1)throw new Error(z(G," has been removed in "+O));return D&&!deprecatedWarnings[G]&&(deprecatedWarnings[G]=!0,console.warn(z(G," has been deprecated since v"+O+" and will be removed in the near future"))),w?w(q,G,U):!0}};function assertOptions(B,w,O){if(typeof B!="object")throw new TypeError("options must be an object");for(var j=Object.keys(B),D=j.length;D-- >0;){var z=j[D],q=w[z];if(q){var G=B[z],U=G===void 0||q(G,z,B);if(U!==!0)throw new TypeError("option "+z+" must be "+U);continue}if(O!==!0)throw Error("Unknown option "+z)}}var validator$1={isOlderVersion,assertOptions,validators:validators$1},utils$1=utils$d,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(B){this.defaults=B,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function(w){typeof w=="string"?(w=arguments[1]||{},w.url=arguments[0]):w=w||{},w=mergeConfig$1(this.defaults,w),w.method?w.method=w.method.toLowerCase():this.defaults.method?w.method=this.defaults.method.toLowerCase():w.method="get";var O=w.transitional;O!==void 0&&validator.assertOptions(O,{silentJSONParsing:validators.transitional(validators.boolean,"1.0.0"),forcedJSONParsing:validators.transitional(validators.boolean,"1.0.0"),clarifyTimeoutError:validators.transitional(validators.boolean,"1.0.0")},!1);var j=[],D=!0;this.interceptors.request.forEach(function(J){typeof J.runWhen=="function"&&J.runWhen(w)===!1||(D=D&&J.synchronous,j.unshift(J.fulfilled,J.rejected))});var z=[];this.interceptors.response.forEach(function(J){z.push(J.fulfilled,J.rejected)});var q;if(!D){var G=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(G,j),G=G.concat(z),q=Promise.resolve(w);G.length;)q=q.then(G.shift(),G.shift());return q}for(var U=w;j.length;){var W=j.shift(),Q=j.shift();try{U=W(U)}catch(Y){Q(Y);break}}try{q=dispatchRequest(U)}catch(Y){return Promise.reject(Y)}for(;z.length;)q=q.then(z.shift(),z.shift());return q};Axios$1.prototype.getUri=function(w){return w=mergeConfig$1(this.defaults,w),buildURL(w.url,w.params,w.paramsSerializer).replace(/^\?/,"")};utils$1.forEach(["delete","get","head","options"],function(w){Axios$1.prototype[w]=function(O,j){return this.request(mergeConfig$1(j||{},{method:w,url:O,data:(j||{}).data}))}});utils$1.forEach(["post","put","patch"],function(w){Axios$1.prototype[w]=function(O,j,D){return this.request(mergeConfig$1(D||{},{method:w,url:O,data:j}))}});var Axios_1=Axios$1;function Cancel$1(B){this.message=B}Cancel$1.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$1.prototype.__CANCEL__=!0;var Cancel_1=Cancel$1,Cancel=Cancel_1;function CancelToken(B){if(typeof B!="function")throw new TypeError("executor must be a function.");var w;this.promise=new Promise(function(D){w=D});var O=this;B(function(D){O.reason||(O.reason=new Cancel(D),w(O.reason))})}CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken.source=function(){var w,O=new CancelToken(function(D){w=D});return{token:O,cancel:w}};var CancelToken_1=CancelToken,spread=function(w){return function(j){return w.apply(null,j)}},isAxiosError=function(w){return typeof w=="object"&&w.isAxiosError===!0},utils=utils$d,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(B){var w=new Axios(B),O=bind(Axios.prototype.request,w);return utils.extend(O,Axios.prototype,w),utils.extend(O,w),O}var axios$2=createInstance(defaults);axios$2.Axios=Axios;axios$2.create=function(w){return createInstance(mergeConfig(axios$2.defaults,w))};axios$2.Cancel=Cancel_1;axios$2.CancelToken=CancelToken_1;axios$2.isCancel=isCancel$1;axios$2.all=function(w){return Promise.all(w)};axios$2.spread=spread;axios$2.isAxiosError=isAxiosError;axios$3.exports=axios$2;axios$3.exports.default=axios$2;var axios$1=axios$3.exports,_objectWithoutProperties=objectWithoutProperties.exports,_toConsumableArray=toConsumableArray.exports,_typeof$1=_typeof$2.exports,_defineProperty=defineProperty.exports,_classCallCheck=classCallCheck.exports,_createClass=createClass.exports,_regeneratorRuntime=regenerator,_asyncToGenerator=asyncToGenerator.exports,axios=axios$1;function _interopDefaultLegacy(B){return B&&typeof B=="object"&&"default"in B?B:{default:B}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof$1),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios),Storage=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"set",value:function(w,O,j){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;var D,z="";if(D=this.commerce.options.config&&this.commerce.options.config.cookie_path!==void 0?this.commerce.options.config.cookie_path:"/",j){var q=new Date;q.setTime(q.getTime()+24*j*60*60*1e3),z="; expires="+q.toUTCString()}return document.cookie=w+"="+O+z+"; path="+D}},{key:"get",value:function(w){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;w+="=";for(var O=0,j=Array.from(document.cookie.split(";"));O<j.length;O++){for(var D=j[O];D.charAt(0)===" ";)D=D.substring(1,D.length);if(D.indexOf(w)===0)return D.substring(w.length,D.length)}return null}},{key:"remove",value:function(w){return this.set(w,"",-1)}}]),B}();function ownKeys(B,w){var O=Object.keys(B);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(B);w&&(j=j.filter(function(D){return Object.getOwnPropertyDescriptor(B,D).enumerable})),O.push.apply(O,j)}return O}function _objectSpread(B){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?ownKeys(O,!0).forEach(function(j){_defineProperty__default.default(B,j,O[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(O)):ownKeys(O).forEach(function(j){Object.defineProperty(B,j,Object.getOwnPropertyDescriptor(O,j))})}return B}var Cart=function(){function B(O){_classCallCheck__default.default(this,B),this.commerce=O,this.cartId=null}var w;return _createClass__default.default(B,[{key:"refresh",value:function(){var O=this;return this.commerce.request("carts").then(function(j){var D=j.id;return O.commerce.storage.set("commercejs_cart_id",D,O.commerce.options.cartLifetime),O.cartId=D,j})}},{key:"id",value:function(){if(this.cartId!==null)return this.cartId;var O=this.commerce.storage.get("commercejs_cart_id");return typeof O=="string"&&O.length?O:null}},{key:"request",value:(w=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function O(){var j,D,z,q,G,U=this,W=arguments;return _regeneratorRuntime__default.default.wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:if(j=W.length>0&&W[0]!==void 0?W[0]:"",D=W.length>1&&W[1]!==void 0?W[1]:"get",z=W.length>2&&W[2]!==void 0?W[2]:null,q=W.length>3&&W[3]!==void 0&&W[3],G=typeof j=="string"&&j.length?"/".concat(j):"",this.id()){Q.next=8;break}return Q.next=8,this.refresh();case 8:return Q.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(G),D,z,q).catch(function(Y){if(Y.statusCode&&Y.statusCode===404)return U.refresh().then(function(){return U.commerce.request("carts/".concat(U.id()).concat(G),D,z,q)});throw Y}));case 9:case"end":return Q.stop()}},O,this)})),function(){return w.apply(this,arguments)})},{key:"add",value:function(O){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,z={};if(typeof D=="string"&&D.startsWith("vrnt"))z.variant_id=D;else if(D&&_typeof__default.default(D)==="object"){var q=Object.keys(D).every(function(W){return W.startsWith("vgrp")}),G=Object.values(D).every(function(W){return W.startsWith("optn")});if(!q||!G)throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");z.options=D}else if(D)throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");var U=_objectSpread({id:_typeof__default.default(O)==="object"?O.id:O,quantity:j},z);return this.request("","post",U)}},{key:"retrieve",value:function(){var O=this,j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return j&&(this.cartId=j),this.request().then(function(D){return O.cartId=D&&D.id||null,D})}},{key:"checkQuantity",value:function(O,j){return this.commerce.request("products/".concat(O)).then(function(D){return j<=D.quantity})}},{key:"remove",value:function(O){return this.request("items/".concat(O),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(O,j){return this.request("items/".concat(O),"put",j)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),B}(),Categories=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"list",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return typeof w=="function"?this.commerce.request("categories"):this.commerce.request("categories","get",w)}},{key:"retrieve",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("categories/".concat(w),"get",O)}}]),B}(),Checkout=function(){function Checkout(B){_classCallCheck__default.default(this,Checkout),this.commerce=B}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then(function(data){return eval(data.sift_js)})}},{key:"generateToken",value:function(B,w){return this.commerce.request("checkouts/".concat(B),"get",w)}},{key:"generateTokenFrom",value:function(B,w){if(!["product_id","cart","permalink"].includes(B))throw new Error('Cannot generate a token with unknown "'.concat(B,'" type'));return this.generateToken(w,{type:B})}},{key:"capture",value:function(B,w){var O=this;return this.commerce.request("checkouts/".concat(B),"post",w).then(function(j){return O.commerce.cart.refresh(),j})}},{key:"receipt",value:function(B){return this.commerce.request("checkouts/".concat(B,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/pay_what_you_want"),"get",w)}},{key:"fields",value:function(B){return this.commerce.request("checkouts/".concat(B,"/fields"))}},{key:"setTaxZone",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/helper/set_tax_zone"),"get",w)}},{key:"getLocationFromIP",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",O=w&&w.length?"?ip_address=".concat(w):"";return this.commerce.request("checkouts/".concat(B,"/helper/location_from_ip").concat(O))}},{key:"isFree",value:function(B){return this.commerce.request("checkouts/".concat(B,"/check/is_free"))}},{key:"checkVariant",value:function(B,w,O){return this.commerce.request("checkouts/".concat(B,"/check/").concat(w,"/variant"),"get",O)}},{key:"checkDiscount",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/discount"),"get",w)}},{key:"checkShippingOption",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/shipping"),"get",w)}},{key:"getShippingOptions",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/helper/shipping_options"),"get",w)}},{key:"checkQuantity",value:function(B,w,O){return this.commerce.request("checkouts/".concat(B,"/check/").concat(w,"/quantity"),"get",O)}},{key:"helperValidation",value:function(B){return this.commerce.request("checkouts/".concat(B,"/helper/validation"))}},{key:"getLive",value:function(B){return this.commerce.request("checkouts/".concat(B,"/live"))}},{key:"getToken",value:function(B){return this.commerce.request("checkouts/tokens/".concat(B))}},{key:"checkGiftcard",value:function(B,w){return this.commerce.request("checkouts/".concat(B,"/check/giftcard"),"get",w)}}]),Checkout}();function ownKeys$1(B,w){var O=Object.keys(B);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(B);w&&(j=j.filter(function(D){return Object.getOwnPropertyDescriptor(B,D).enumerable})),O.push.apply(O,j)}return O}function _objectSpread$1(B){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?ownKeys$1(O,!0).forEach(function(j){_defineProperty__default.default(B,j,O[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(O)):ownKeys$1(O).forEach(function(j){Object.defineProperty(B,j,Object.getOwnPropertyDescriptor(O,j))})}return B}var Customer=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w,this.data={}}return _createClass__default.default(B,[{key:"login",value:function(w,O){return this.commerce.request("customers/email-token","post",{email:w,base_url:O})}},{key:"getToken",value:function(w){var O=this,j=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:w}).then(function(D){return j&&(D.customer_id||D.jwt)&&(O.data={id:D.customer_id||null,token:D.jwt||null},window.localStorage.setItem("commercejs_customer_id",O.data.id),window.localStorage.setItem("commercejs_customer_token",O.data.token)),D})}},{key:"update",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(O,j),this._request("customers/".concat(O||this.id()),"PUT",w,{},j)}},{key:"getOrders",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this._assertArgsProvided(w,O);var D=_objectSpread$1({sortBy:"created_at",sortDirection:"desc"},j);return this._request("customers/".concat(w||this.id(),"/orders"),"get",D,{},O)}},{key:"getOrder",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(O,j),this._request("customers/".concat(O||this.id(),"/orders/").concat(w),"get",{},{},j)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return this.id()!==null&&this.token()!==null}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(w){if(this.data[w]&&this.data[w].length)return this.data[w];var O=window.localStorage.getItem("commercejs_customer_".concat(w));return typeof O=="string"&&O.length?O:null}},{key:"_request",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,D=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},z=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,q=z||this.token();return this.commerce.request(w,O,j,_objectSpread$1({"X-Authorization":void 0,Authorization:"Bearer ".concat(q)},D))}},{key:"_assertArgsProvided",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(w===null&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(O===null&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),B}(),Merchants=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),B}(),Products=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"list",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.commerce.request("products","get",w)}},{key:"retrieve",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("products/".concat(w),"get",O)}},{key:"getVariants",value:function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.commerce.request("products/".concat(w,"/variants"),"get",O)}},{key:"getVariant",value:function(w,O){return this.commerce.request("products/".concat(w,"/variants/").concat(O),"get")}}]),B}(),Services=function(){function B(w){_classCallCheck__default.default(this,B),this.commerce=w}return _createClass__default.default(B,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(w){return this.commerce.request("services/locale/".concat(w,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(w,O){return this.commerce.request("services/locale/".concat(w,"/countries/").concat(O,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(w){return this.commerce.request("services/locale/".concat(w,"/subdivisions"))}}]),B}(),Features={Cart,Categories,Checkout,Customer,Merchants,Products,Services},consoleHelper=function(){var B,w,O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"black",j=arguments.length>1?arguments[1]:void 0,D=arguments.length>2?arguments[2]:void 0,z=arguments.length>3?arguments[3]:void 0,q=!1;switch(O){case"success":O="#488f5a",B="\u2705   ";break;case"info":O="DodgerBlue",B="";break;case"error":O="rgba(244, 67, 54, 1)",z.error.type==="validation"||z.error.type==="unprocessable_entity"?(B="\u{1F6AB} Validation/missing fields",j=""):B="\u274C HTTP ERROR ",q=!0;break;case"warning":O="rgba(208, 154, 35, 1)",B="\u26A0\uFE0F  "}return q===!0?(console.log("%c"+B+j,"color:"+O+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),_typeof__default.default(z.error.errors)==="object"?(w=z.error.errors,void Object.keys(w).forEach(function(G,U){Object.values(w[G]).forEach(function(W){console.log("%c"+G+": %c"+W,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")})})):console.log("%c"+z.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")):_typeof__default.default(O)==="object"?(console.log("%c"+j,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(O)):(console.log("%c"+B+j,"color:"+O+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),void(D&&console.log("%c"+D,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")))},debuggerOnNotice=function(){typeof window!="undefined"&&(console.log(`%c\r
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
`,"text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px"))};function ownKeys$2(B,w){var O=Object.keys(B);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(B);w&&(j=j.filter(function(D){return Object.getOwnPropertyDescriptor(B,D).enumerable})),O.push.apply(O,j)}return O}function _objectSpread$2(B){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?ownKeys$2(O,!0).forEach(function(j){_defineProperty__default.default(B,j,O[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(O)):ownKeys$2(O).forEach(function(j){Object.defineProperty(B,j,Object.getOwnPropertyDescriptor(O,j))})}return B}var defaultEventCallback=function(B){var w=new CustomEvent("Commercejs.".concat(B),{bubbles:!1,cancelable:!1});return window.dispatchEvent(w)},Commerce=function(){function B(w){var O=arguments.length>1&&arguments[1]!==void 0&&arguments[1],j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_classCallCheck__default.default(this,B),this.options=_objectSpread$2(_objectSpread$2({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback,disableStorage:!1,cartLifetime:30,allowSecretKey:!1},j),{},{apiKey:w,debug:O}),typeof w!="string"||w.length===0)throw new Error("\u26A0\uFE0F Invalid public key given to Commerce.js client");if(!j.allowSecretKey&&w.toLowerCase().substring(0,3)==="sk_")throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");if(this.options.cartLifetime<=0||this.options.cartLifetime>30)throw new Error("cartLifetime configuration option must be between 1 and 30 days");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),O&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(B,[{key:"error",value:function(w){if(this.consoleHelper&&this.options.debug){var O=w.response,j="[".concat(O.status,"] Type: ").concat(O.statusText),D=typeof O.data=="string"?O.data:O.statusText;return this.consoleHelper("error",j,D,O.data)}}},{key:"request",value:function(w){var O=this,j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},q=arguments.length>4&&arguments[4]!==void 0&&arguments[4],G={"X-Authorization":this.options.apiKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},U=j==="get"?D:null,W=j==="get"?null:D,Q=this.options.timeoutMs||6e4,Y=this.options.axiosConfig||{},J=this.options.url;J.substring(J.length-1)!=="/"&&(J+="/");var X=axios__default.default(_objectSpread$2(_objectSpread$2({url:w,method:j,baseURL:"".concat(J).concat(this.options.version,"/"),params:U,data:W,timeout:Q},Y),{},{headers:_objectSpread$2(_objectSpread$2(_objectSpread$2({},G),Y.headers),z)}));if(q)return X;var se=this.options.eventCallback;return X.then(function(re){if(O.consoleHelper&&O.options.debug&&_typeof__default.default(re.data._console)==="object"&&O.consoleHelper.apply(O,_toConsumableArray__default.default(re.data._console)),_typeof__default.default(re.data)!=="object"||Array.isArray(re.data))return re.data;var de=re.data,pe=de._event,ue=_objectWithoutProperties__default.default(de,["_event"]);return typeof pe=="string"&&typeof se=="function"&&se(pe),ue}).catch(function(re){throw O.error(re),re.response?{message:"Unsuccessful response (".concat(re.response.status,": ").concat(re.response.statusText,") received"),statusCode:re.response.status,statusText:re.response.statusText,data:re.response.data,originalError:re}:re})}}]),B}(),lib=Commerce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=B=>w=>typeof w=="function"?((O,j)=>(customElements.define(O,j),j))(B,w):((O,j)=>{const{kind:D,elements:z}=j;return{kind:D,elements:z,finisher(q){customElements.define(O,q)}}})(B,w);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$2=(B,w)=>w.kind==="method"&&w.descriptor&&!("value"in w.descriptor)?{...w,finisher(O){O.createProperty(w.key,B)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:w.key,initializer(){typeof w.initializer=="function"&&(this[w.key]=w.initializer.call(this))},finisher(O){O.createProperty(w.key,B)}};function e$3(B){return(w,O)=>O!==void 0?((j,D,z)=>{D.constructor.createProperty(z,j)})(B,w,O):i$2(B,w)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;((n$4=window.HTMLSlotElement)===null||n$4===void 0?void 0:n$4.prototype.assignedElements)!=null;var configurable=!0;function bound(B,w,O){if(typeof(O==null?void 0:O.value)!="function")throw new TypeError(`Only methods can be decorated with @bound. <${w!=null?w:B.name}> is not a method!`);return{configurable,get(){const j=O.value.bind(this);return Object.defineProperty(this,w,{value:j,configurable,writable:!0}),j}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=window,e$2=t$1.ShadowRoot&&(t$1.ShadyCSS===void 0||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(w,O,j){if(this._$cssResult$=!0,j!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=O}get styleSheet(){let w=this.o;const O=this.t;if(e$2&&w===void 0){const j=O!==void 0&&O.length===1;j&&(w=n$3.get(O)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),j&&n$3.set(O,w))}return w}toString(){return this.cssText}}const r$2=B=>new o$3(typeof B=="string"?B:B+"",void 0,s$3),i$1=(B,...w)=>{const O=B.length===1?B[0]:w.reduce((j,D,z)=>j+(q=>{if(q._$cssResult$===!0)return q.cssText;if(typeof q=="number")return q;throw Error("Value passed to 'css' function must be a 'css' function result: "+q+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(D)+B[z+1],B[0]);return new o$3(O,B,s$3)},S$1=(B,w)=>{e$2?B.adoptedStyleSheets=w.map(O=>O instanceof CSSStyleSheet?O:O.styleSheet):w.forEach(O=>{const j=document.createElement("style"),D=t$1.litNonce;D!==void 0&&j.setAttribute("nonce",D),j.textContent=O.cssText,B.appendChild(j)})},c$1=e$2?B=>B:B=>B instanceof CSSStyleSheet?(w=>{let O="";for(const j of w.cssRules)O+=j.cssText;return r$2(O)})(B):B;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(B,w){switch(w){case Boolean:B=B?h$1:null;break;case Object:case Array:B=B==null?B:JSON.stringify(B)}return B},fromAttribute(B,w){let O=B;switch(w){case Boolean:O=B!==null;break;case Number:O=B===null?null:Number(B);break;case Object:case Array:try{O=JSON.parse(B)}catch{O=null}}return O}},a$1=(B,w)=>w!==B&&(w==w||B==B),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(w){var O;(O=this.h)!==null&&O!==void 0||(this.h=[]),this.h.push(w)}static get observedAttributes(){this.finalize();const w=[];return this.elementProperties.forEach((O,j)=>{const D=this._$Ep(j,O);D!==void 0&&(this._$Ev.set(D,j),w.push(D))}),w}static createProperty(w,O=l$3){if(O.state&&(O.attribute=!1),this.finalize(),this.elementProperties.set(w,O),!O.noAccessor&&!this.prototype.hasOwnProperty(w)){const j=typeof w=="symbol"?Symbol():"__"+w,D=this.getPropertyDescriptor(w,j,O);D!==void 0&&Object.defineProperty(this.prototype,w,D)}}static getPropertyDescriptor(w,O,j){return{get(){return this[O]},set(D){const z=this[w];this[O]=D,this.requestUpdate(w,z,j)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const w=Object.getPrototypeOf(this);if(w.finalize(),this.elementProperties=new Map(w.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const O=this.properties,j=[...Object.getOwnPropertyNames(O),...Object.getOwnPropertySymbols(O)];for(const D of j)this.createProperty(D,O[D])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(w){const O=[];if(Array.isArray(w)){const j=new Set(w.flat(1/0).reverse());for(const D of j)O.unshift(c$1(D))}else w!==void 0&&O.push(c$1(w));return O}static _$Ep(w,O){const j=O.attribute;return j===!1?void 0:typeof j=="string"?j:typeof w=="string"?w.toLowerCase():void 0}u(){var w;this._$E_=new Promise(O=>this.enableUpdating=O),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(w=this.constructor.h)===null||w===void 0||w.forEach(O=>O(this))}addController(w){var O,j;((O=this._$ES)!==null&&O!==void 0?O:this._$ES=[]).push(w),this.renderRoot!==void 0&&this.isConnected&&((j=w.hostConnected)===null||j===void 0||j.call(w))}removeController(w){var O;(O=this._$ES)===null||O===void 0||O.splice(this._$ES.indexOf(w)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((w,O)=>{this.hasOwnProperty(O)&&(this._$Ei.set(O,this[O]),delete this[O])})}createRenderRoot(){var w;const O=(w=this.shadowRoot)!==null&&w!==void 0?w:this.attachShadow(this.constructor.shadowRootOptions);return S$1(O,this.constructor.elementStyles),O}connectedCallback(){var w;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(w=this._$ES)===null||w===void 0||w.forEach(O=>{var j;return(j=O.hostConnected)===null||j===void 0?void 0:j.call(O)})}enableUpdating(w){}disconnectedCallback(){var w;(w=this._$ES)===null||w===void 0||w.forEach(O=>{var j;return(j=O.hostDisconnected)===null||j===void 0?void 0:j.call(O)})}attributeChangedCallback(w,O,j){this._$AK(w,j)}_$EO(w,O,j=l$3){var D;const z=this.constructor._$Ep(w,j);if(z!==void 0&&j.reflect===!0){const q=(((D=j.converter)===null||D===void 0?void 0:D.toAttribute)!==void 0?j.converter:n$2).toAttribute(O,j.type);this._$El=w,q==null?this.removeAttribute(z):this.setAttribute(z,q),this._$El=null}}_$AK(w,O){var j;const D=this.constructor,z=D._$Ev.get(w);if(z!==void 0&&this._$El!==z){const q=D.getPropertyOptions(z),G=typeof q.converter=="function"?{fromAttribute:q.converter}:((j=q.converter)===null||j===void 0?void 0:j.fromAttribute)!==void 0?q.converter:n$2;this._$El=z,this[z]=G.fromAttribute(O,q.type),this._$El=null}}requestUpdate(w,O,j){let D=!0;w!==void 0&&(((j=j||this.constructor.getPropertyOptions(w)).hasChanged||a$1)(this[w],O)?(this._$AL.has(w)||this._$AL.set(w,O),j.reflect===!0&&this._$El!==w&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(w,j))):D=!1),!this.isUpdatePending&&D&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(O){Promise.reject(O)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var w;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((D,z)=>this[z]=D),this._$Ei=void 0);let O=!1;const j=this._$AL;try{O=this.shouldUpdate(j),O?(this.willUpdate(j),(w=this._$ES)===null||w===void 0||w.forEach(D=>{var z;return(z=D.hostUpdate)===null||z===void 0?void 0:z.call(D)}),this.update(j)):this._$Ek()}catch(D){throw O=!1,this._$Ek(),D}O&&this._$AE(j)}willUpdate(w){}_$AE(w){var O;(O=this._$ES)===null||O===void 0||O.forEach(j=>{var D;return(D=j.hostUpdated)===null||D===void 0?void 0:D.call(j)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(w){return!0}update(w){this._$EC!==void 0&&(this._$EC.forEach((O,j)=>this._$EO(j,this[j],O)),this._$EC=void 0),this._$Ek()}updated(w){}firstUpdated(w){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},o$2==null||o$2({ReactiveElement:d$1}),((s$2=e$1.reactiveElementVersions)!==null&&s$2!==void 0?s$2:e$1.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:B=>B}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$2=`<${n$1}>`,h=document,r=(B="")=>h.createComment(B),d=B=>B===null||typeof B!="object"&&typeof B!="function",u=Array.isArray,c=B=>u(B)||typeof(B==null?void 0:B[Symbol.iterator])=="function",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=B=>(w,...O)=>({_$litType$:B,strings:w,values:O}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=(B,w,O)=>{var j,D;const z=(j=O==null?void 0:O.renderBefore)!==null&&j!==void 0?j:w;let q=z._$litPart$;if(q===void 0){const G=(D=O==null?void 0:O.renderBefore)!==null&&D!==void 0?D:null;z._$litPart$=q=new S(w.insertBefore(r(),G),G,void 0,O!=null?O:{})}return q._$AI(B),q},E=h.createTreeWalker(h,129,null,!1),C=(B,w)=>{const O=B.length-1,j=[];let D,z=w===2?"<svg>":"",q=v;for(let U=0;U<O;U++){const W=B[U];let Q,Y,J=-1,X=0;for(;X<W.length&&(q.lastIndex=X,Y=q.exec(W),Y!==null);)X=q.lastIndex,q===v?Y[1]==="!--"?q=a:Y[1]!==void 0?q=f:Y[2]!==void 0?($.test(Y[2])&&(D=RegExp("</"+Y[2],"g")),q=_):Y[3]!==void 0&&(q=_):q===_?Y[0]===">"?(q=D!=null?D:v,J=-1):Y[1]===void 0?J=-2:(J=q.lastIndex-Y[2].length,Q=Y[1],q=Y[3]===void 0?_:Y[3]==='"'?p:m):q===p||q===m?q=_:q===a||q===f?q=v:(q=_,D=void 0);const se=q===_&&B[U+1].startsWith("/>")?" ":"";z+=q===v?W+l$2:J>=0?(j.push(Q),W.slice(0,J)+"$lit$"+W.slice(J)+o$1+se):W+o$1+(J===-2?(j.push(void 0),U):se)}const G=z+(B[O]||"<?>")+(w===2?"</svg>":"");if(!Array.isArray(B)||!B.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e!==void 0?e.createHTML(G):G,j]};class P{constructor({strings:w,_$litType$:O},j){let D;this.parts=[];let z=0,q=0;const G=w.length-1,U=this.parts,[W,Q]=C(w,O);if(this.el=P.createElement(W,j),E.currentNode=this.el.content,O===2){const Y=this.el.content,J=Y.firstChild;J.remove(),Y.append(...J.childNodes)}for(;(D=E.nextNode())!==null&&U.length<G;){if(D.nodeType===1){if(D.hasAttributes()){const Y=[];for(const J of D.getAttributeNames())if(J.endsWith("$lit$")||J.startsWith(o$1)){const X=Q[q++];if(Y.push(J),X!==void 0){const se=D.getAttribute(X.toLowerCase()+"$lit$").split(o$1),re=/([.?@])?(.*)/.exec(X);U.push({type:1,index:z,name:re[2],strings:se,ctor:re[1]==="."?R:re[1]==="?"?H:re[1]==="@"?I:M})}else U.push({type:6,index:z})}for(const J of Y)D.removeAttribute(J)}if($.test(D.tagName)){const Y=D.textContent.split(o$1),J=Y.length-1;if(J>0){D.textContent=s$1?s$1.emptyScript:"";for(let X=0;X<J;X++)D.append(Y[X],r()),E.nextNode(),U.push({type:2,index:++z});D.append(Y[J],r())}}}else if(D.nodeType===8)if(D.data===n$1)U.push({type:2,index:z});else{let Y=-1;for(;(Y=D.data.indexOf(o$1,Y+1))!==-1;)U.push({type:7,index:z}),Y+=o$1.length-1}z++}}static createElement(w,O){const j=h.createElement("template");return j.innerHTML=w,j}}function V(B,w,O=B,j){var D,z,q,G;if(w===x)return w;let U=j!==void 0?(D=O._$Cl)===null||D===void 0?void 0:D[j]:O._$Cu;const W=d(w)?void 0:w._$litDirective$;return(U==null?void 0:U.constructor)!==W&&((z=U==null?void 0:U._$AO)===null||z===void 0||z.call(U,!1),W===void 0?U=void 0:(U=new W(B),U._$AT(B,O,j)),j!==void 0?((q=(G=O)._$Cl)!==null&&q!==void 0?q:G._$Cl=[])[j]=U:O._$Cu=U),U!==void 0&&(w=V(B,U._$AS(B,w.values),U,j)),w}class N{constructor(w,O){this.v=[],this._$AN=void 0,this._$AD=w,this._$AM=O}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(w){var O;const{el:{content:j},parts:D}=this._$AD,z=((O=w==null?void 0:w.creationScope)!==null&&O!==void 0?O:h).importNode(j,!0);E.currentNode=z;let q=E.nextNode(),G=0,U=0,W=D[0];for(;W!==void 0;){if(G===W.index){let Q;W.type===2?Q=new S(q,q.nextSibling,this,w):W.type===1?Q=new W.ctor(q,W.name,W.strings,this,w):W.type===6&&(Q=new L(q,this,w)),this.v.push(Q),W=D[++U]}G!==(W==null?void 0:W.index)&&(q=E.nextNode(),G++)}return z}m(w){let O=0;for(const j of this.v)j!==void 0&&(j.strings!==void 0?(j._$AI(w,j,O),O+=j.strings.length-2):j._$AI(w[O])),O++}}class S{constructor(w,O,j,D){var z;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=w,this._$AB=O,this._$AM=j,this.options=D,this._$C_=(z=D==null?void 0:D.isConnected)===null||z===void 0||z}get _$AU(){var w,O;return(O=(w=this._$AM)===null||w===void 0?void 0:w._$AU)!==null&&O!==void 0?O:this._$C_}get parentNode(){let w=this._$AA.parentNode;const O=this._$AM;return O!==void 0&&w.nodeType===11&&(w=O.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,O=this){w=V(this,w,O),d(w)?w===b||w==null||w===""?(this._$AH!==b&&this._$AR(),this._$AH=b):w!==this._$AH&&w!==x&&this.$(w):w._$litType$!==void 0?this.T(w):w.nodeType!==void 0?this.k(w):c(w)?this.O(w):this.$(w)}S(w,O=this._$AB){return this._$AA.parentNode.insertBefore(w,O)}k(w){this._$AH!==w&&(this._$AR(),this._$AH=this.S(w))}$(w){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=w:this.k(h.createTextNode(w)),this._$AH=w}T(w){var O;const{values:j,_$litType$:D}=w,z=typeof D=="number"?this._$AC(w):(D.el===void 0&&(D.el=P.createElement(D.h,this.options)),D);if(((O=this._$AH)===null||O===void 0?void 0:O._$AD)===z)this._$AH.m(j);else{const q=new N(z,this),G=q.p(this.options);q.m(j),this.k(G),this._$AH=q}}_$AC(w){let O=T.get(w.strings);return O===void 0&&T.set(w.strings,O=new P(w)),O}O(w){u(this._$AH)||(this._$AH=[],this._$AR());const O=this._$AH;let j,D=0;for(const z of w)D===O.length?O.push(j=new S(this.S(r()),this.S(r()),this,this.options)):j=O[D],j._$AI(z),D++;D<O.length&&(this._$AR(j&&j._$AB.nextSibling,D),O.length=D)}_$AR(w=this._$AA.nextSibling,O){var j;for((j=this._$AP)===null||j===void 0||j.call(this,!1,!0,O);w&&w!==this._$AB;){const D=w.nextSibling;w.remove(),w=D}}setConnected(w){var O;this._$AM===void 0&&(this._$C_=w,(O=this._$AP)===null||O===void 0||O.call(this,w))}}class M{constructor(w,O,j,D,z){this.type=1,this._$AH=b,this._$AN=void 0,this.element=w,this.name=O,this._$AM=D,this.options=z,j.length>2||j[0]!==""||j[1]!==""?(this._$AH=Array(j.length-1).fill(new String),this.strings=j):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(w,O=this,j,D){const z=this.strings;let q=!1;if(z===void 0)w=V(this,w,O,0),q=!d(w)||w!==this._$AH&&w!==x,q&&(this._$AH=w);else{const G=w;let U,W;for(w=z[0],U=0;U<z.length-1;U++)W=V(this,G[j+U],O,U),W===x&&(W=this._$AH[U]),q||(q=!d(W)||W!==this._$AH[U]),W===b?w=b:w!==b&&(w+=(W!=null?W:"")+z[U+1]),this._$AH[U]=W}q&&!D&&this.P(w)}P(w){w===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w!=null?w:"")}}class R extends M{constructor(){super(...arguments),this.type=3}P(w){this.element[this.name]=w===b?void 0:w}}const k=s$1?s$1.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4}P(w){w&&w!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends M{constructor(w,O,j,D,z){super(w,O,j,D,z),this.type=5}_$AI(w,O=this){var j;if((w=(j=V(this,w,O,0))!==null&&j!==void 0?j:b)===x)return;const D=this._$AH,z=w===b&&D!==b||w.capture!==D.capture||w.once!==D.once||w.passive!==D.passive,q=w!==b&&(D===b||z);z&&this.element.removeEventListener(this.name,this,D),q&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){var O,j;typeof this._$AH=="function"?this._$AH.call((j=(O=this.options)===null||O===void 0?void 0:O.host)!==null&&j!==void 0?j:this.element,w):this._$AH.handleEvent(w)}}class L{constructor(w,O,j){this.element=w,this.type=6,this._$AN=void 0,this._$AM=O,this.options=j}get _$AU(){return this._$AM._$AU}_$AI(w){V(this,w)}}const Z=i.litHtmlPolyfillSupport;Z==null||Z(P,S),((t=i.litHtmlVersions)!==null&&t!==void 0?t:i.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var w,O;const j=super.createRenderRoot();return(w=(O=this.renderOptions).renderBefore)!==null&&w!==void 0||(O.renderBefore=j.firstChild),j}update(w){const O=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=A(O,this.renderRoot,this.renderOptions)}connectedCallback(){var w;super.connectedCallback(),(w=this._$Do)===null||w===void 0||w.setConnected(!0)}disconnectedCallback(){var w;super.disconnectedCallback(),(w=this._$Do)===null||w===void 0||w.setConnected(!1)}render(){return x}}s.finalized=!0,s._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;n==null||n({LitElement:s});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=B=>B!=null?B:b,allCapitalLetterGroups=/[A-ZÀ-ÖÙ-Ý]+/g,allLowercaseWords=/[a-zà-öù-ý]+/g;function kebabCase(B){const w=B.replace(allCapitalLetterGroups,O).match(allLowercaseWords);return w?w.join("-"):"";function O(j){return" "+(j.length>2?j.slice(0,-1)+" "+j.slice(-1):j).toLowerCase()}}function createCache(){const B={};return{has:w=>Object.hasOwnProperty.call(B,w),get:w=>B[w],set:(w,O)=>{B[w]=O}}}function memoize(B,w){const O=createCache();return(...j)=>{const D=B(...j);return O.has(D)||O.set(D,w(...j)),O.get(D)}}var identity=B=>B,dash=memoize(identity,kebabCase),elem=B=>w=>B.includes(w),isRepresentation=elem(["paymentMethod","source","token"]);async function throwBadResponse(B){const{ok:w,statusText:O}=B;if(!w)throw new Error(O);return B}function isReactiveElement(B){return"addInitializer"in B.constructor}var _ReadOnlyController=class{constructor(B){if(this.host=B,this.values=new Map,_ReadOnlyController.instances.has(B))return _ReadOnlyController.instances.get(B);B.addController(this),_ReadOnlyController.instances.set(B,this)}static for(B){return new _ReadOnlyController(B)}hostConnected(){}set(B,w){const O=this.values.get(B);this.values.set(B,w),isReactiveElement(this.host)?this.host.requestUpdate(B,O):this.host.requestUpdate()}},ReadOnlyController=_ReadOnlyController;ReadOnlyController.instances=new Map;function readonly(B,w){const O=B.constructor;O.addInitializer(j=>{const D=ReadOnlyController.for(j);Object.defineProperty(j.constructor.prototype,w,{enumerable:!0,configurable:!0,get(){return D.values.get(w)},set(z){D.values.has(w)||D.values.set(w,z)}}),O.createProperty(w,{...O.getPropertyOptions(w),noAccessor:!0})})}readonly.set=function(B,w){const O=ReadOnlyController.for(B);for(const[j,D]of Object.entries(w))O.set(j,D)};var ChangeEvent=class extends Event{constructor(B,w,O,j){super(`${j!=null?j:B.toLowerCase()}-changed`),this.key=B,this.oldValue=w,this.value=O,this.detail={value:O}}},_NotifyController=class{constructor(B){if(this.host=B,this.cache=new Map,_NotifyController.instances.has(B))return _NotifyController.instances.get(B);B.addController(this),_NotifyController.instances.set(B,this)}hostUpdated(){var B;for(const[w,O]of this.cache){const j=this.host[w],{attribute:D}=(B=this.host.constructor.getPropertyOptions(w))!=null?B:{},z=typeof D=="string"?D:null;this.cache.set(w,j),this.host.dispatchEvent(new ChangeEvent(w,O,j,z))}}},NotifyController=_NotifyController;NotifyController.instances=new Map;function notify(B,w){B.constructor.addInitializer(O=>{new NotifyController(O).cache.set(w,O[w])})}function wrap(B){return(w,O,j)=>{const D=j.value;return j.value=B(D),j}}var stripeMethod=wrap(function(B){const{name:w}=B;return async function(...O){if(!this.stripe)throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${w}.`);return B.call(this,...O).then(this.handleResponse)}});function throwResponseError(B){if(B.error)throw B.error;return B}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(B,w,O,j)=>{for(var D=j>1?void 0:j?__getOwnPropDesc(w,O):w,z=B.length-1,q;z>=0;z--)(q=B[z])&&(D=(j?q(w,O,D):q(D))||D);return j&&D&&__defProp(w,O,D),D},__accessCheck=(B,w,O)=>{if(!w.has(B))throw TypeError("Cannot "+O)},__privateGet=(B,w,O)=>(__accessCheck(B,w,"read from private field"),O?O.call(B):w.get(B)),__privateAdd=(B,w,O)=>{if(w.has(B))throw TypeError("Cannot add the same private member more than once");w instanceof WeakSet?w.add(B):w.set(B,O)},__privateSet=(B,w,O,j)=>(__accessCheck(B,w,"write to private field"),j?j.call(B,O):w.set(B,O),O);function getRandom(){return(Date.now()+Math.random()*1e3).toString(36).substr(0,8)}var BreadcrumbController=class{constructor(B,w){var O,j;this.host=B,this.options=w,this.initialized=!1,this.shadowHosts=[],this.host.addController(this),this.mountId=this.resetMountId(),this.slotName=(j=(O=this.options)==null?void 0:O.slotName)!=null?j:`breadcrumb-${getRandom()}`}get mount(){return document.getElementById(this.mountId)}hostUpdated(){var B;!this.initialized&&((B=this.options)==null?void 0:B.autoInitialize)!==!1&&this.init()}hostDisconnected(){this.destroyMountPoints()}resetMountId(){var w,O;return`${(O=(w=this.options)==null?void 0:w.mountPrefix)!=null?O:this.host.localName}-mount-point-${getRandom()}`}createMountPoint(){const B=document.createElement("div");return B.id=this.mountId,B.classList.add(`${this.host.tagName.toLowerCase()}-mount`),B}createSlot(B){const w=document.createElement("slot");return w.slot=B,w.name=B,w}appendTemplate(B,w=this.createMountPoint()){return B.appendChild(w),w}initMountPoints(){this.initShadowMountPoints()}destroyMountPoints(){for(const B of this.shadowHosts)for(const w of B.querySelectorAll(`[slot="${this.slotName}"][name="${this.slotName}"]`))w.remove();this.mount&&this.mount.remove(),this.mountId=this.resetMountId()}initShadowMountPoints(){let B=this.host;for(this.shadowHosts=[this.host];B=B.getRootNode().host;)this.shadowHosts.push(B);const{shadowHosts:w,slotName:O}=this,j=[...w],D=j.pop();if(!D.querySelector(`[slot="${O}"]`)){const q=document.createElement("div");q.slot=O,D.appendChild(q)}const z=D.querySelector(`[slot="${O}"]`);this.appendTemplate(z),j.forEach(q=>this.appendTemplate(q,this.createSlot(O)))}init(){this.destroyMountPoints(),this.initMountPoints(),this.initialized=!0}};function _typeof(B){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(w){return typeof w}:_typeof=function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},_typeof(B)}var V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function B(){for(var w=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),O=0;O<w.length;O++){var j=w[O];if(!!V3_URL_REGEX.test(j.src))return j}return null},injectScript=function B(w){var O=w&&!w.advancedFraudSignals?"?advancedFraudSignals=false":"",j=document.createElement("script");j.src="".concat(V3_URL).concat(O);var D=document.head||document.body;if(!D)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return D.appendChild(j),j},registerWrapper=function B(w,O){!w||!w._registerWrapper||w._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:O})},stripePromise=null,loadScript=function B(w){return stripePromise!==null||(stripePromise=new Promise(function(O,j){if(typeof window=="undefined"){O(null);return}if(window.Stripe&&w&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe){O(window.Stripe);return}try{var D=findScript();D&&w?console.warn(EXISTING_SCRIPT_MESSAGE):D||(D=injectScript(w)),D.addEventListener("load",function(){window.Stripe?O(window.Stripe):j(new Error("Stripe.js not available"))}),D.addEventListener("error",function(){j(new Error("Failed to load Stripe.js"))})}catch(z){j(z);return}})),stripePromise},initStripe=function B(w,O,j){if(w===null)return null;var D=w.apply(void 0,O);return registerWrapper(D,j),D},validateLoadParams=function B(w){var O=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(w),`
`);if(w===null||_typeof(w)!=="object")throw new Error(O);if(Object.keys(w).length===1&&typeof w.advancedFraudSignals=="boolean")return w;throw new Error(O)},loadParams,loadStripeCalled=!1,loadStripe=function B(){for(var w=arguments.length,O=new Array(w),j=0;j<w;j++)O[j]=arguments[j];loadStripeCalled=!0;var D=Date.now();return loadScript(loadParams).then(function(z){return initStripe(z,O,D)})};loadStripe.setLoadParameters=function(B){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(B)};var StripeElementsError=class extends Error{constructor(B,w){super(`<${B}>: ${w}`),this.originalMessage=w}};function isStripeElementsError(B){return!!B&&B instanceof StripeElementsError}var errorConverter={toAttribute:B=>B?isStripeElementsError(B)?B.originalMessage:B.message||"":null},StripeBase=class extends s{constructor(){super(...arguments),this.generate="source",this.showError=!1,this.locale="auto",this.paymentMethod=null,this.source=null,this.token=null,this.element=null,this.elements=null,this.error=null,this.focused=!1,this.ready=!1,this.stripe=null,this.theme="none",this.precomputedStyle=getComputedStyle(this),this.breadcrumb=new BreadcrumbController(this,{slotName:`${this.constructor.is}-slot`})}get stripeMountId(){return this.breadcrumb.mountId}get stripeMount(){return this.breadcrumb.mount}render(){const{error:B,showError:w}=this,{slotName:O}=this.breadcrumb,j=isStripeElementsError(B)?B.originalMessage:B==null?void 0:B.message;return y`
      <div id="stripe" part="stripe">
        <slot id="stripe-slot" name="${O}"></slot>
      </div>

      <output id="error"
          for="stripe"
          part="error"
          ?hidden="${!w}">
        ${l(j)}
      </output>
    `}updated(B){var w;(w=super.updated)==null||w.call(this,B),B.has("error")&&this.errorChanged(),B.has("publishableKey")&&this.init(),[...B.keys()].forEach(O=>this.representationChanged(O))}async disconnectedCallback(){var B;super.disconnectedCallback(),await((B=this.unmount)==null?void 0:B.call(this))}reset(){var B,w;(w=(B=this.element)==null?void 0:B.clear)==null||w.call(B),this.resetRepresentations(),readonly.set(this,{error:null})}blur(){var B;(B=this.element)==null||B.blur()}focus(){var B;(B=this.element)==null||B.focus()}createError(B){return new StripeElementsError(this.constructor.is,B)}errorChanged(){this.resetRepresentations(),this.fireError(this.error)}fire(B,w,O){this.dispatchEvent(new CustomEvent(B,{detail:w,...O}))}fireError(B){this.dispatchEvent(new ErrorEvent("error",{error:B}))}getCSSCustomPropertyValue(B){return this.precomputedStyle.getPropertyValue(B)}async handleResponse(B){const{error:w=null,paymentMethod:O=null,source:j=null,token:D=null}={...B};if(readonly.set(this,{error:w,paymentMethod:O,source:j,token:D}),await this.updateComplete,w)throw w;return B}initElement(){}async init(){await this.unmount(),await this.initStripe(),await this.initElement(),this.initElementListeners(),this.breadcrumb.init(),this.mount()}initElementListeners(){!this.element||(this.element.on("ready",this.onReady),this.element.on("focus",this.onFocus),this.element.on("blur",this.onBlur))}async initStripe(){const{publishableKey:B,stripeAccount:w,locale:O}=this;if(!B)readonly.set(this,{elements:null,element:null,stripe:null});else try{const j={stripeAccount:w,locale:O},D=window.Stripe?window.Stripe(B,j):await loadStripe(B,j),z=D==null?void 0:D.elements();readonly.set(this,{elements:z,error:null,stripe:D})}catch(j){console.warn(j);const D=this.createError("Stripe.js must be loaded first.");readonly.set(this,{elements:null,error:D,stripe:null})}finally{await this.updateComplete}}mount(){var B;if(!this.breadcrumb.mount)throw this.createError("Stripe Mount missing");(B=this.element)==null||B.mount(this.breadcrumb.mount)}async unmount(){var B,w;(w=(B=this.element)==null?void 0:B.unmount)==null||w.call(B),readonly.set(this,{element:null}),await this.updateComplete}async onBlur(){readonly.set(this,{focused:!1}),await this.updateComplete}async onFocus(){readonly.set(this,{focused:!0}),await this.updateComplete}async onReady(B){readonly.set(this,{ready:!0}),await this.updateComplete,this.fire("ready",B)}async postRepresentation(){const B=U=>readonly.set(this,{error:U}),w=U=>this.fire("success",U),O=this.token||void 0,j=this.source||void 0,D=this.paymentMethod||void 0,z=JSON.stringify({token:O,source:j,paymentMethod:D}),q={"Content-Type":"application/json"},G="POST";return fetch(this.action,{body:z,headers:q,method:G}).then(throwBadResponse).then(w).catch(B)}representationChanged(B){if(!isRepresentation(B))return;const w=this[B];!w||(this.fire(`${dash(B)}`,w),this.action&&this.postRepresentation())}resetRepresentations(){readonly.set(this,{paymentMethod:null,token:null,source:null})}};__decorateClass([e$3({type:String})],StripeBase.prototype,"action",2);__decorateClass([e$3({type:String,attribute:"client-secret"})],StripeBase.prototype,"clientSecret",2);__decorateClass([e$3({type:String})],StripeBase.prototype,"generate",2);__decorateClass([notify,e$3({type:String,attribute:"publishable-key",reflect:!0})],StripeBase.prototype,"publishableKey",2);__decorateClass([e$3({type:Boolean,attribute:"show-error",reflect:!0})],StripeBase.prototype,"showError",2);__decorateClass([e$3({type:String,attribute:"stripe-account"})],StripeBase.prototype,"stripeAccount",2);__decorateClass([e$3({type:String,attribute:"locale"})],StripeBase.prototype,"locale",2);__decorateClass([readonly,notify,e$3({type:Object,attribute:"payment-method"})],StripeBase.prototype,"paymentMethod",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"source",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"token",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"element",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"elements",2);__decorateClass([readonly,notify,e$3({type:Object,reflect:!0,converter:errorConverter})],StripeBase.prototype,"error",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"focused",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"ready",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"stripe",2);__decorateClass([e$3()],StripeBase.prototype,"theme",2);__decorateClass([e$3({attribute:"border-radius"})],StripeBase.prototype,"borderRadius",2);__decorateClass([e$3({attribute:"color-background"})],StripeBase.prototype,"colorBackground",2);__decorateClass([e$3({attribute:"color-danger"})],StripeBase.prototype,"colorDanger",2);__decorateClass([e$3({attribute:"color-primary"})],StripeBase.prototype,"colorPrimary",2);__decorateClass([e$3({attribute:"color-text"})],StripeBase.prototype,"colorText",2);__decorateClass([e$3({attribute:"font-family"})],StripeBase.prototype,"fontFamily",2);__decorateClass([e$3({attribute:"spacing-unit"})],StripeBase.prototype,"spacingUnit",2);__decorateClass([bound],StripeBase.prototype,"handleResponse",1);__decorateClass([bound],StripeBase.prototype,"onBlur",1);__decorateClass([bound],StripeBase.prototype,"onFocus",1);__decorateClass([bound],StripeBase.prototype,"onReady",1);var styles=i$1`[hidden] {
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
`,stripe_elements_default=styles2,ALLOWED_STYLES=["color","fontFamily","fontSize","fontStyle","fontSmoothing","fontVariant","iconColor","lineHeight","letterSpacing","textDecoration","textShadow","textTransform"],SUB_STYLES=[":hover",":focus","::placeholder","::selection",":-webkit-autofill",":disabled"],StripeElements=class extends StripeBase{constructor(){super(...arguments),this.hideIcon=!1,this.hidePostalCode=!1,this.iconStyle="default",this.value={},this.brand=null,this.complete=!1,this.empty=!0,this.invalid=!1}async createPaymentMethod(B=this.getPaymentMethodData()){return this.stripe.createPaymentMethod(B)}async createSource(B=this.sourceData){return this.stripe.createSource(this.element,B)}async createToken(B=this.tokenData){return this.stripe.createToken(this.element,B)}isPotentiallyValid(){return!this.complete&&!this.empty&&!this.error||this.validate()}reset(){var B;super.reset(),(B=this.element)==null||B.clear()}async submit(){switch(this.generate){case"payment-method":return this.createPaymentMethod();case"source":return this.createSource();case"token":return this.createToken();default:{const B=this.createError(`cannot generate ${this.generate}`);throw readonly.set(this,{error:B}),await this.updateComplete,B}}}validate(){const{complete:B,empty:w,error:O}=this,j=!O&&B&&!w;return w&&!O&&readonly.set(this,{error:this.createError("Your card number is empty.")}),j}updateStyle(){var B;(B=this.element)==null||B.update({style:this.getStripeElementsStyles()})}getPaymentMethodData(){const B="card",{billingDetails:w,paymentMethodData:O}=this;return{billing_details:w,...O,type:B,card:this.element}}getStripeElementsStyles(){const B=D=>this.getCSSCustomPropertyValue(D)||void 0,w=["base","complete","empty","invalid"],O=D=>(z,q)=>{if(D.includes("-"))return z;const G=q.split(":").pop();return{...z,[q]:ALLOWED_STYLES.reduce(j(`${D}-${G}`),{})}},j=D=>(z,q)=>{const G=`--stripe-elements-${D}-${dash(q)}`;return{...z,[q]:B(G),...SUB_STYLES.reduce(O(D),{})}};return w.reduce((D,z)=>({...D,[z]:ALLOWED_STYLES.reduce(j(z),{})}),{})}async initElement(){if(!this.stripe)return;const{hidePostalCode:B,hideIcon:w,iconStyle:O,value:j}=this,D=this.getStripeElementsStyles();await this.updateComplete;const z=this.createElement({hideIcon:w,hidePostalCode:B,iconStyle:O,style:D,value:j});z.on("change",this.onChange),readonly.set(this,{element:z}),await this.updateComplete}createElement(B){return this.elements.create("card",B)}async onChange(B){const{brand:w,complete:O,empty:j,error:D=null}=B,z=!(D||!j&&!O);readonly.set(this,{brand:w,complete:O,empty:j,error:D,invalid:z}),await this.updateComplete,this.fire("change",B)}};StripeElements.is="stripe-elements";StripeElements.elementType="card";StripeElements.styles=[shared_default,stripe_elements_default];__decorateClass([e$3({type:Boolean,attribute:"hide-icon"})],StripeElements.prototype,"hideIcon",2);__decorateClass([e$3({type:Boolean,attribute:"hide-postal-code"})],StripeElements.prototype,"hidePostalCode",2);__decorateClass([e$3({type:String,attribute:"icon-style"})],StripeElements.prototype,"iconStyle",2);__decorateClass([e$3({type:Object})],StripeElements.prototype,"value",2);__decorateClass([notify,readonly,e$3({type:String})],StripeElements.prototype,"brand",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"complete",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"empty",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"invalid",2);__decorateClass([stripeMethod],StripeElements.prototype,"createPaymentMethod",1);__decorateClass([stripeMethod],StripeElements.prototype,"createSource",1);__decorateClass([stripeMethod],StripeElements.prototype,"createToken",1);__decorateClass([bound],StripeElements.prototype,"onChange",1);StripeElements=__decorateClass([e$4("stripe-elements")],StripeElements);var styles3=i$1`#stripe {
  box-sizing: border-box;
  min-width: var(--stripe-payment-request-element-min-width, 300px);
  padding: var(--stripe-payment-request-element-padding, 8px 12px);
  background: var(--stripe-payment-request-element-background, white);
}
`,stripe_payment_request_default=styles3;function isStripeDisplayItem(B){return B.tagName.toLowerCase()==="stripe-display-item"}function datasetToStripeDisplayItem({dataset:{amount:B,label:w,pending:O}}){return{label:w,amount:parseInt(B),...O!==void 0&&{pending:O==="true"}}}function datasetToStripeShippingOption({dataset:{amount:B,detail:w,...O}}){return{amount:parseInt(B),detail:w,...O}}function mapDataset(B){return isStripeDisplayItem(B)?datasetToStripeDisplayItem(B):datasetToStripeShippingOption(B)}var _displayItems,_shippingOptions,StripePaymentRequest=class extends StripeBase{constructor(){super(...arguments),this.canMakePayment=null,__privateAdd(this,_displayItems,void 0),this.paymentIntent=null,this.paymentRequest=null,this.pending=!1,__privateAdd(this,_shippingOptions,void 0),this.buttonType="default",this.buttonTheme="dark",this.complete=async(B,w)=>{const{error:O=null}={...B},j=O||w?"fail":"success";return B.complete(j),this.fire(j,B),w?{error:w}:B}}get displayItems(){const B=__privateGet(this,_displayItems);return Array.isArray(B)?B:this.parseDatasets("stripe-display-item")}set displayItems(B){const w=this.displayItems;__privateSet(this,_displayItems,B),this.requestUpdate("displayItems",w)}get shippingOptions(){const B=__privateGet(this,_shippingOptions);return Array.isArray(B)?B:this.parseDatasets("stripe-shipping-option")}set shippingOptions(B){const w=this.shippingOptions;__privateSet(this,_shippingOptions,B),this.requestUpdate("shippingOptions",w)}reset(){super.reset(),readonly.set(this,{paymentIntent:null})}updated(B){super.updated(B),B.has("generate")&&this.initPaymentRequestListeners(),B.has("amount")&&this.updatePaymentRequest()}getStripePaymentRequestOptions(){const{country:B,currency:w,displayItems:O,shippingOptions:j,requestShipping:D,requestPayerEmail:z,requestPayerName:q,requestPayerPhone:G,label:U="",amount:W=0}=this;return{country:B,currency:w,displayItems:O,requestPayerEmail:z,requestPayerName:q,requestPayerPhone:G,requestShipping:D,shippingOptions:j,total:{label:U,amount:W}}}async initElement(){await this.initPaymentRequest(),await this.initPaymentRequestListeners(),await this.initPaymentRequestButton()}async initPaymentRequest(){if(!this.stripe)return;const B=this.getStripePaymentRequestOptions(),w=this.stripe.paymentRequest(B),O=await w.canMakePayment();readonly.set(this,{paymentRequest:w,canMakePayment:O}),await this.updateComplete,this.canMakePayment||this.fire("unsupported")}async initPaymentRequestButton(){const{buttonTheme:B,buttonType:w,canMakePayment:O}=this;if(!O||!this.elements)return;const j="--stripe-payment-request-button-height",z={paymentRequestButton:{height:this.getCSSCustomPropertyValue(j)||"40px",theme:B,type:w}},q=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:z});readonly.set(this,{element:q}),await this.updateComplete}async initPaymentRequestListeners(){if(!!this.canMakePayment)switch(this.paymentRequest.on("click",this.updatePaymentRequest),this.paymentRequest.on("cancel",this.onCancel),this.paymentRequest.on("shippingaddresschange",this.onShippingaddresschange),this.paymentRequest.on("shippingoptionchange",this.onShippingoptionchange),this.generate){case"payment-method":this.paymentRequest.on("paymentmethod",this.onPaymentResponse);break;case"source":this.paymentRequest.on("source",this.onPaymentResponse);break;case"token":this.paymentRequest.on("token",this.onPaymentResponse);break}}async updatePaymentRequest(){if(!this.paymentRequest)return;const{currency:B,total:w,displayItems:O,shippingOptions:j}=this.getStripePaymentRequestOptions();this.paymentRequest.update({currency:B,total:w,displayItems:O,shippingOptions:j})}onCancel(){this.fire("cancel")}async onPaymentResponse(B){const{error:w=null,paymentMethod:O=null,source:j=null,token:D=null}={...B};readonly.set(this,{error:w,paymentMethod:O,source:j,token:D}),this.clientSecret&&!w?this.confirmPaymentIntent(B):this.complete(B)}async confirmPaymentIntent(B){var z;const w={payment_method:this.paymentMethod.id},O=await this.confirmCardPayment(w,{handleActions:!1}).then(({error:q})=>this.complete(B,q)).then(throwResponseError).then(()=>this.confirmCardPayment()).then(throwResponseError).catch(q=>({error:q})),{error:j=null}=O,D=(z=O.paymentIntent)!=null?z:null;readonly.set(this,{error:j,paymentIntent:D}),await this.updateComplete}async confirmCardPayment(B,w){return this.stripe.confirmCardPayment(this.clientSecret,B,w)}onShippingaddresschange(B){this.fire("shippingaddresschange",B)}onShippingoptionchange(B){this.fire("shippingoptionchange",B)}parseDatasets(B){const w=[...this.querySelectorAll(B)];return w.length?w.map(mapDataset):[]}};_displayItems=new WeakMap;_shippingOptions=new WeakMap;StripePaymentRequest.is="stripe-payment-request";StripePaymentRequest.styles=[shared_default,stripe_payment_request_default];__decorateClass([e$3({type:Number,reflect:!0})],StripePaymentRequest.prototype,"amount",2);__decorateClass([notify,readonly,e$3({type:Boolean,attribute:"can-make-payment",reflect:!0})],StripePaymentRequest.prototype,"canMakePayment",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"country",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"currency",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"displayItems",1);__decorateClass([e$3({type:String,reflect:!0})],StripePaymentRequest.prototype,"label",2);__decorateClass([notify,readonly,e$3({type:Object,attribute:"payment-intent"})],StripePaymentRequest.prototype,"paymentIntent",2);__decorateClass([readonly,e$3({type:Object,attribute:"payment-request"})],StripePaymentRequest.prototype,"paymentRequest",2);__decorateClass([e$3({type:Boolean,reflect:!0})],StripePaymentRequest.prototype,"pending",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-email"})],StripePaymentRequest.prototype,"requestPayerEmail",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-name"})],StripePaymentRequest.prototype,"requestPayerName",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-phone"})],StripePaymentRequest.prototype,"requestPayerPhone",2);__decorateClass([e$3({type:Boolean,attribute:"request-shipping"})],StripePaymentRequest.prototype,"requestShipping",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"shippingOptions",1);__decorateClass([e$3({type:String,attribute:"button-type"})],StripePaymentRequest.prototype,"buttonType",2);__decorateClass([e$3({type:String,attribute:"button-theme"})],StripePaymentRequest.prototype,"buttonTheme",2);__decorateClass([bound],StripePaymentRequest.prototype,"onCancel",1);__decorateClass([bound],StripePaymentRequest.prototype,"onPaymentResponse",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmPaymentIntent",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmCardPayment",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingaddresschange",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingoptionchange",1);StripePaymentRequest=__decorateClass([e$4("stripe-payment-request")],StripePaymentRequest);const VITE_CommerceKey$1="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey$1="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",commerce$1=new lib(`${VITE_CommerceKey$1}`,!0);var allProducts$1=[],currentShopProduct$1,shopPage=1,currentCart$1,cartEmpty$1=!0,selectedPSize$1="",countriesObj$1={},variantAbbr="",countriesAdded=!1,shippingMethodValue,shippingId="",card$1,stripeElements,pComplete;class mobileShop1 extends HTMLElement{constructor(){super();ae(this,"closeMobileShop",()=>{document.getElementById("mobileShop").style.display="none"});ae(this,"loadShop",async()=>{this.shadow.getElementById("LoadBG").style.display="grid";var O=this.shadow.getElementById("mb1");await commerce$1.products.list({limit:100,sortDirection:"desc"}).then(j=>allProducts$1.push(j.data)),allProducts$1[0].forEach(j=>{var D=document.createElement("div");D.setAttribute("class","productContainer"),D.setAttribute("id",j.id),this.shadow.getElementById("productEdition").addEventListener("click",this.toggleTerms),D.addEventListener("click",this.viewProduct),O.appendChild(D),D.innerHTML=`
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${j.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${j.name}</p>
    <p class="pcProductPrice">${j.price.formatted_with_symbol}</p>
  </div>
    `,productsloaded=!0,this.shadow.getElementById("LoadBG").style.display="none"}),commerce$1.cart.empty()});ae(this,"viewProduct",O=>{var j=O.target.parentElement.id;this.shadow.getElementById("scroll").style.display="block",currentShopProduct$1=allProducts$1[0].filter(q=>q.id.includes(`${j}`)),this.shadow.getElementById("mb2").style.display="block",shopPage=2,this.shadow.getElementById("pName").innerHTML=`
        ${currentShopProduct$1[0].name}`,currentShopProduct$1[0].categories.forEach(q=>{q.name==="\xC9"&&(this.shadow.getElementById("eSymbol1").style.display="block"),q.name==="S\xC9"&&(this.shadow.getElementById("eSymbol2").style.display="block")}),this.shadow.getElementById("pDesc").innerHTML=currentShopProduct$1[0].description,this.shadow.getElementById("proPrice").innerHTML=currentShopProduct$1[0].price.formatted_with_symbol,currentShopProduct$1[0].inventory.available===0&&(this.shadow.getElementById("archived").style.display="grid");var D=this.shadow.getElementById("allImages"),z=0;this.shadow.getElementById("mainImageCont").src=`${currentShopProduct$1[0].assets[0].url}`,currentShopProduct$1[0].assets.forEach(q=>{if(z<=3){var G=document.createElement("img");G.setAttribute("src",`${q.url}`),G.setAttribute("id",`${q.url}`),G.addEventListener("click",this.changeToMainPic),D.appendChild(G),z++}q.filename==="sizeChart.png"&&(this.shadow.getElementById("noti").innerHTML=`
                <img class="sizeChartImage" src="${q.url}"/>
              `,this.shadow.getElementById("pSizeGuide").addEventListener("click",this.noti1))}),this.checkSize()});ae(this,"checkSize",()=>{currentShopProduct$1[0].variant_groups[0].options.forEach(O=>{if(this.shadow.getElementById(`${O.name}`).style.opacity="100%",this.shadow.getElementById(`${O.name}`).style.cursor="pointer",this.shadow.getElementById(`${O.name}`).addEventListener("click",this.selectSize),O.name==="SingleSize"){var j=this.shadow.querySelectorAll(".sizeButtons");this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr",this.shadow.getElementById("sizesCont").style.justifyItems="end",j.forEach(D=>{D.id!="SingleSize"&&(D.style.display="none")}),this.shadow.getElementById("SingleSize").style.display="grid"}})});ae(this,"noti1",()=>{this.shadow.getElementById("noti").style.display="block",pComplete===!0?(this.shadow.getElementById("noti").addEventListener("click",this.return),pComplete=!1):this.shadow.getElementById("noti").addEventListener("click",this.closeNoti)});ae(this,"closeNoti",()=>{this.shadow.getElementById("noti").style.display="none",pComplete=!1});ae(this,"returnSize",()=>{var O=this.shadow.querySelectorAll(".sizeButtons");O.forEach(j=>{j.id!="SingleSize"&&(j.style.display="grid"),this.shadow.getElementById(j.id).style.opacity=".3"}),this.shadow.getElementById("SingleSize").style.display="none",this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr 1fr 1fr 1fr",this.shadow.getElementById("sizesCont").style.justifyItems="center"});ae(this,"changeToMainPic",O=>{var j=O.target.id;this.shadow.getElementById("mainImageCont").src=`${j}`});ae(this,"return",()=>{this.shadow.getElementById("main"),this.shadow.getElementById("mb1");var O=this.shadow.getElementById("mb2"),j=this.shadow.getElementById("mb3"),D=this.shadow.getElementById("checkoutInputs"),z=this.shadow.getElementById("shippingButton");switch(this.shadow.getElementById("mb4"),this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("archived").style.display="none",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("noti").style.display="none",shopPage){case 1:this.closeMobileShop();break;case 2:O.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("eSymbol1").style.display="none",this.shadow.getElementById("eSymbol2").style.display="none",this.returnSize(),shopPage=1;break;case 3:j.style.display="none",O.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.returnSize(),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",shopPage=1;break;case 4:D.style.display="none",z.innerHTML="SHIPPING & BILLING",z.removeEventListener("click",this.return),z.addEventListener("click",this.shipping),this.viewCart(),shopPage=3;break;case 5:j.style.display="none",D.style.display="none",O.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("noti").removeEventListener("click",this.return),this.returnSize(),selectedPSize$1="",shopPage=1,this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';break}});ae(this,"selectSize",O=>{var j=this.shadow.querySelectorAll(".sizeButtons");j.forEach(z=>{this.shadow.getElementById(z.id).style.backgroundColor="",this.shadow.getElementById(z.id).style.color=""}),O.target.style.opacity==="1"?(selectedPSize$1=O.target.id,this.shadow.getElementById("addItemButton").addEventListener("click",this.addToCart),O.target.style.color="white",O.target.style.backgroundColor="#ff002d",this.shadow.getElementById("addItemButton").innerHTML="ADD TO CART"):(selectedPSize$1="",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart));var D=document.getElementsByClassName("sizeButtons");for(let z=0;z<D.length;z++)D[z].style.color="#ff002d"});ae(this,"addToCart",async()=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="ADDING",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';var O=currentShopProduct$1[0].variant_groups[0].options.filter(j=>j.name.includes(`${selectedPSize$1}`));this.shadow.getElementById("LoadBG").style.display="grid",commerce$1.cart.retrieve().then(j=>{currentCart$1=j}).then(()=>{if(cartEmpty$1===!1){var j=currentCart$1.line_items.filter(D=>D.product_id===currentShopProduct$1[0].id);console.log(currentCart$1),console.log(currentShopProduct$1[0].id),console.log(j),currentShopProduct$1[0].inventory.available>0?commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:O[0].id}).then(()=>{cartEmpty$1=!1,commerce$1.cart.retrieve().then(D=>{currentCart$1=D,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART";var z=this.shadow.querySelectorAll(".sizeButtons");z.forEach(q=>{this.shadow.getElementById(`${q.id}`).style.color="",this.shadow.getElementById(`${q.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=D.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)}):(this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="MAX INVENTORY")}else commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:O[0].id}).then(()=>{cartEmpty$1=!1,selectedPSize$1="",commerce$1.cart.retrieve().then(D=>{currentCart$1=D,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart);var z=this.shadow.querySelectorAll(".sizeButtons");z.forEach(q=>{this.shadow.getElementById(`${q.id}`).style.color="",this.shadow.getElementById(`${q.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=D.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)})})});ae(this,"viewCart",()=>{shopPage=3,this.shadow.getElementById("mb3").style.display="block",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE";var O=this.shadow.getElementById("cartStatus");this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),O.innerHTML="CHECKOUT",O.removeEventListener("click",this.viewCart),O.removeEventListener("click",this.checkout),variantAbbr="",currentCart$1.line_items.forEach(j=>{var D=document.createElement("div");switch(D.setAttribute("class","productCont"),this.shadow.getElementById("cartItems").appendChild(D),j.selected_options[0].option_name){case"Small":variantAbbr="S";break;case"Medium":variantAbbr="M";break;case"Large":variantAbbr="L";break;case"XLarge":variantAbbr="XL";break;case"2XLarge":variantAbbr="2XL";break;case"3XLarge":variantAbbr="3XL";break}D.innerHTML=`
                <div class="pcLeft">
                    <img src="${j.image.url}"> 
                </div>
                <div class="pcRight">
                    <p class="cartProName">${j.name}</p>
                    <p class="cartProQty" id="${j.name}Qty">QTY: <span class="active">(${j.quantity})${variantAbbr}</span></p>
                    <p class="cartProPrice">${j.price.formatted_with_symbol}</p>
                    <div class="quantityChange" name="${j.product_id}">
                        <span class="active dec changeQty" id="${j.id}" name="dec">-</span>
                        <span>|</span>
                        <span class="active inc changeQty" id="${j.id}" name="inc">+</span>
                    </div>
                </div>
            `,this.shadow.getElementById("termsButton").addEventListener("click",this.toggleTerms);var z=this.shadow.querySelectorAll(".changeQty");z.forEach(q=>{q.addEventListener("click",this.changeQty)}),D.setAttribute("id",`${j.id}Parent`)})});ae(this,"toggleTerms",()=>{this.noti1(),this.shadow.getElementById("noti").innerHTML=`
        <div id="terms">
         <h1>Terms & Conditions</h1><p>For designs marked with an <span class="active">(\u2018\xC9\u2019)</span> or <span class="active">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `});ae(this,"checkQuantity",O=>{var j=allProducts$1[0].filter(D=>D.id===O);return j[0].inventory.available});ae(this,"changeQty",O=>{this.shadow.getElementById("LoadBG").style.display="grid";var j=O.target.getAttribute("id"),D=O.target.parentElement.getAttribute("name"),z=this.checkQuantity(D);if(O.target.getAttribute("name")==="inc"){var q=currentCart$1.line_items.filter(G=>G.id===j);if(z>=2&&q[0].quantity<=z-1){commerce$1.cart.update(`${j}`,{quantity:q[0].quantity+1}).then(G=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=G.cart.subtotal.formatted_with_symbol,currentCart$1=G.cart,this.viewCart()});return}else O.target.style.opacity=".3",this.shadow.getElementById("LoadBG").style.display="none"}if(O.target.getAttribute("name")==="dec"){var q=currentCart$1.line_items.filter(U=>U.id===j);commerce$1.cart.update(`${j}`,{quantity:q[0].quantity-1}).then(U=>{if(this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=U.cart.subtotal.formatted_with_symbol,currentCart$1=U.cart,this.viewCart(),U.cart.total_items===0){var W=this.shadow.getElementById("cartStatus");cartEmpty$1=!0,this.return(),W.innerHTML="CART EMPTY",W.removeEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),selectedPSize$1=""}});return}});ae(this,"shipping",()=>{shopPage=4;var O=this.shadow.getElementById("shippingButton"),j=this.shadow.getElementById("cartStatus");this.shadow.getElementById("checkoutInputs").style.display="grid",O.innerHTML="VIEW CART",O.removeAttribute("click",this.shipping),O.addEventListener("click",this.return),j.innerHTML="PAY NOW",j.addEventListener("click",this.checkout),countriesAdded===!1&&(countriesAdded=!0,commerce$1.services.localeListCountries().then(D=>{countriesObj$1=D.countries,Object.keys(D.countries).forEach(z=>{var q=document.createElement("option"),G=this.shadow.getElementById("inputCN");q.setAttribute("value",z),q.setAttribute("title",z),q.innerHTML=`${countriesObj$1[z].substr(0,20)}`,G.appendChild(q)})})),this.shadow.getElementById("inputCN").addEventListener("change",this.states),this.shadow.getElementById("card-element").innerHTML=`
        <stripe-elements publishable-key="${VITE_StripeKey$1}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`,this.shadow.getElementById("sCard").addEventListener("ready",D=>{card$1=D.path[0].element,D.path[0].stripe.createToken(card$1),stripeElements=D.path[0].stripe})});ae(this,"states",()=>{var O=this.shadow.getElementById("inputCN"),j=O.options[O.selectedIndex].value,D=O.options[O.selectedIndex].title,z=this.shadow.getElementById("totalPrice");this.shadow.getElementById("inputST").innerHTML="",j==="US"&&(this.shadow.getElementById("inputSP").value="$0.00 Free Shipping",shippingMethodValue=1,z.innerHTML=currentCart$1.subtotal.formatted_with_symbol),j!="US"&&(this.shadow.getElementById("inputSP").value="$70.00 Intl Shipping",shippingMethodValue=3,z.innerHTML=`$${currentCart$1.subtotal.raw+70}.00`),D==="US2"&&(this.shadow.getElementById("inputSP").value="$130.00 - Next Day",shippingMethodValue=2,z.innerHTML=`$${currentCart$1.subtotal.raw+130}.00`),commerce$1.services.localeListSubdivisions(j).then(q=>{var G=q.subdivisions;Object.keys(q.subdivisions).forEach(U=>{var W=document.createElement("option"),Q=this.shadow.getElementById("inputST");if(Object.keys(q.subdivisions).length<=1){var Y=document.createElement("option");Y.innerHTML="Not Available.",O.options[O.selectedIndex].innerHTML="Select Country",this.shadow.getElementById("inputST").appendChild(Y)}else W.setAttribute("value",G[U]),W.setAttribute("id",U),W.innerHTML=G[U].substring(0,20),Q.appendChild(W)})})});ae(this,"checkout",async()=>{var O=this.shadow.getElementById("inputFN").value,j=this.shadow.getElementById("inputLN").value,D=this.shadow.getElementById("inputBD").value;this.shadow.getElementById("inputSP").value;var z=this.shadow.getElementById("inputEM").value,q=this.shadow.getElementById("inputCY").value,G=this.shadow.getElementById("inputZC").value,U=this.shadow.getElementById("inputSA").value,W=this.shadow.getElementById("inputCN"),Q=this.shadow.getElementById("inputST"),Y=W.options[W.selectedIndex].value,J=Q.options[Q.selectedIndex].id,X=this.shadow.getElementById("cartStatus");X.removeEventListener("click",this.checkout),this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("LoadBG").style.display="grid",setTimeout(()=>{pComplete===!1&&(this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>")},2e4),await commerce$1.checkout.generateToken(currentCart$1.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async se=>{commerce$1.checkout.getShippingOptions(se.id,{country:Y}).then(async re=>{shippingMethodValue===1&&(shippingId=re[0].id),shippingMethodValue===3&&(shippingId=re[0].id),shippingMethodValue===2&&(shippingId=re[1].id);var de=`${O} ${j}`;const pe=await stripeElements.createPaymentMethod({type:"card",card:card$1}).catch(ue=>{console.log(`THIS ERROR ${ue}`),this.shadow.getElementById("LoadBG").style.display="none",X.addEventListener("click",this.checkout)});if(pe.error){this.shadow.getElementById("LoadBG").style.display="none",console.log(pe.error.message),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${pe.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const ue=await commerce$1.checkout.capture(se.id,{customer:{firstname:`${O}`,lastname:`${j}`,email:`${z}`},extra_fields:{extr_DWy4oG4dY56Jx2:`${U}`},shipping:{name:`${de}`,street:`${D}`,town_city:`${q}`,county_state:`${J}`,postal_zip_code:`${G}`,country:`${Y}`},fulfillment:{shipping_method:`${shippingId}`},billing:{name:`${de}`,street:`${D}`,town_city:`${q}`,county_state:`${J}`,postal_zip_code:`${G}`,country:`${Y}`},payment:{gateway:"stripe",stripe:{payment_method_id:pe.paymentMethod.id}}});this.return,this.purchaseComplete(),this.noti1(),this.shadow.getElementById("noti").innerHTML=`
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
                                          <option value="US" title="US2">US - Next Day Air</option>`,cartEmpty$1=!0,card$1.clear();return}catch(ue){console.log(ue),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${ue.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(ue);return}finally{}})})});ae(this,"purchaseComplete",()=>{var O=this.shadow.getElementById("cartStatus");this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("totalPrice").innerHTML="$0",O.innerHTML="CART EMPTY",shopPage=5,pComplete=!0,this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),this.shadow.getElementById("shippingButton").removeEventListener("click",this.return)});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("product")}set product(O){this.setAttribute("product",O)}static get observedAttributes(){return["product"]}attributeChangedCallback(O,j,D){O==="product"&&this.render()}connectedCallback(){this.render(),this.loadShop(),this.shadow.getElementById("returnButton").addEventListener("click",this.return.bind(this))}render(){this.shadow.innerHTML=`
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
                                <img src="../assets/images/shoptest/shop2.jpg"> 
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
                                <img src="../assets/images/shoptest/shop4.jpg"> 
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
                        <img id="mainImageCont" src="../assets/images/shoptest/shop3.jpg">
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
         `}}customElements.define("mobile-shop1",mobileShop1);class getWallet extends HTMLElement{constructor(){super();ae(this,"closeGetWallet",()=>{document.getElementById("getWallet").style.display="none"});ae(this,"goGetPlug",()=>{var O;(O=window.open("https://plugwallet.ooo/","_blank"))==null||O.focus()});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("wallet")}set product(O){this.setAttribute("wallet",O)}static get observedAttributes(){return["wallet"]}attributeChangedCallback(O,j,D){O==="wallet"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("closeBut").addEventListener("click",this.closeGetWallet.bind(this)),this.shadow.getElementById("plugIcon").addEventListener("click",this.goGetPlug),this.shadow.getElementById("getPlug2").addEventListener("click",this.goGetPlug),this.shadow.getElementById("reload").addEventListener("click",()=>{location.reload()})}render(){this.shadow.innerHTML=`
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
            #getWalletScreen {
                background-color: rgba(0,0,0,.8);
                width: 100%;
                height: 100%;
                position: fixed;
                left: 0;
                top: 0;
                z-index:5;
                font-family: "BS-R";
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: center;
            }
            #getWalletBrief {
                width: 30%;
                height: 20%;
                background-color: black;
                border: 1px solid #94be8c;
                border-radius: 20px;
                padding: 2%;
            }
            #closeBut {
                width: 100%;
                float:left;
                transition: .5s all;
            }
            #closeBut:hover {
                color: #b5d3d1;
            }
            #getText {
                width: 100%;
                float:left;
                margin-top:2%;
            }
            #plugIcon {
                float: left;
                width: 100%;
                height: 25%;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: center;
                margin-top: 2%;
            }
            #plugIcon svg {
                transition: .5s all;
            }
            #plugIcon svg:hover {
                height: 150% !important;
            }
            ::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #ff002d;
                opacity: 0.9; /* Firefox */
              }
            .active {
                color: #b5d3d1;
                transition: .5s all;
            }
            .active:hover {
                text-decoration: underline;
                letter-spacing: 1px;
            }
            .alt {
                color: #94be8c;
            }
            .active2 {
                text-decoration: underline;
                transition: .5s all;
            }
            .active2:hover {
                color: #b5d3d1;
            }
         </style>
         <div id="getWalletScreen">
              <div id="getWalletBrief">
                <div id="closeBut">
                    <span style="float:left;" class="alt">WALLET REQUIRED</span>
                    <span style="float:right;">CLOSE</span>
                </div>
                <div id="getText">
                    <p>You'll need a <span class="active2" id="getPlug2">PLUG Wallet</span> to <i>START</i> or <i>CONTINUE</i> a game.</p>
                    <p>Click the Plug below to get connected.</p>
                    <p><span class="active" id="reload">[RELOAD]</span> the page once you have it.</p>
                </div>
                <div id="plugIcon">
                    <svg width="auto" height="100%" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M3.36569 0.413793C3.36569 0.185261 3.54471 0 3.76554 0H5.59153C5.81236 0 5.99138 0.185261 5.99138 0.413793V6.66207H3.36569V0.413793Z" fill="white"/>
                    <path d="M11.9488 0.413793C11.9488 0.185261 12.1278 0 12.3487 0H14.1747C14.3955 0 14.5745 0.185261 14.5745 0.413793V6.66207H11.9488V0.413793Z" fill="white"/>
                    <path d="M0 7.75317C0 7.15214 0.470772 6.66498 1.0515 6.66498H16.9423C17.523 6.66498 17.9938 7.15214 17.9938 7.75317V13.1735C17.9938 18.3157 13.9658 22.4841 8.99687 22.4841C4.02805 22.4841 0 18.3157 0 13.1735V7.75317Z" fill="url(#paint0_linear)"/>
                    <path d="M5.9934 21.6952H12.0001V22.4706C12.0001 23.5974 11.1174 24.5108 10.0285 24.5108H7.96497C6.8761 24.5108 5.9934 23.5974 5.9934 22.4706V21.6952Z" fill="url(#paint1_linear)"/>
                    <path d="M6.96617 24.1844H11.0276V25.6399C11.0276 26.3911 10.4392 27.0001 9.71322 27.0001H8.28055C7.55469 27.0001 6.96617 26.3911 6.96617 25.6399V24.1844Z" fill="url(#paint2_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2814 16.8107C15.8952 11.574 11.2636 7.72583 5.76353 7.72583C3.67346 7.72583 1.70881 8.28155 0 9.25797V13.1734C0 17.2256 2.50147 20.6732 5.99355 21.9527V22.4705C5.99355 23.22 6.38414 23.8752 6.96615 24.2298V25.6397C6.96615 26.3909 7.55467 26.9999 8.28053 26.9999H9.7132C10.4391 26.9999 11.0276 26.3909 11.0276 25.6397V24.2298C11.6096 23.8752 12.0002 23.22 12.0002 22.4705V21.9527C14.3801 21.0807 16.3 19.2017 17.2814 16.8107Z" fill="url(#paint3_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1303 19.9854C14.6896 14.7392 10.4347 10.6232 5.25093 10.6232C3.32256 10.6232 1.52274 11.1928 0 12.1783V13.1736C0 17.2258 2.50147 20.6734 5.99355 21.9528V22.4706C5.99355 23.2201 6.38414 23.8753 6.96615 24.23V25.6399C6.96615 26.3911 7.55467 27.0001 8.28053 27.0001H9.7132C10.4391 27.0001 11.0276 26.3911 11.0276 25.6399V24.23C11.6096 23.8753 12.0002 23.2201 12.0002 22.4706V21.9528C13.1748 21.5225 14.2373 20.8468 15.1303 19.9854Z" fill="url(#paint4_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.01 21.951C11.8232 17.6755 8.41456 14.2686 4.23699 14.2686C2.78504 14.2686 1.42596 14.6801 0.262758 15.3967C0.986029 18.452 3.16642 20.9153 5.99825 21.9528V22.4706C5.99825 23.2201 6.38885 23.8753 6.97089 24.23V25.6399C6.97089 26.3911 7.55934 27.0001 8.28528 27.0001H9.71795C10.4439 27.0001 11.0323 26.3911 11.0323 25.6399V24.23C11.6144 23.8753 12.005 23.2201 12.005 22.4706V21.9528C12.0066 21.9522 12.0084 21.9516 12.01 21.951Z" fill="url(#paint5_linear)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear" x1="12.0068" y1="12.5274" x2="18.7021" y2="6.05116" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#46FF47"/>
                    <stop offset="1" stop-color="#9CFF9D"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="12.0067" y1="12.5275" x2="18.7019" y2="6.05118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#46FF47"/>
                    <stop offset="1" stop-color="#9CFF9D"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="12.0068" y1="12.5276" x2="18.7021" y2="6.05128" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#46FF47"/>
                    <stop offset="1" stop-color="#9CFF9D"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="10.4427" y1="13.8127" x2="13.7708" y2="9.54251" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#10D9ED"/>
                    <stop offset="1" stop-color="#10D9ED" stop-opacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear" x1="9.73293" y1="15.3703" x2="12.0141" y2="11.1224" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FA51D3"/>
                    <stop offset="0.958774" stop-color="#FA51D3" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear" x1="6.74918" y1="21.7089" x2="10.1797" y2="13.233" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE700"/>
                    <stop offset="1" stop-color="#FFE700" stop-opacity="0"/>
                    </linearGradient>
                    <clipPath id="clip0">
                    <rect width="18" height="27" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
              </div>
         </div>
         `}}customElements.define("get-wallet",getWallet);var trackname="T.A.O.S City Radio",currentAudio=null,currenttrack=0,trackList=[{artist:"Floating Points - Birth",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Birth.mp3"},{artist:"Erasmo Carlos - \xC9 Preciso Dar Um Jeitp, Meu Amigo",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Erasmo_carlos.mp3"},{artist:"Frankz Gordon - The Art Teacher",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/The-Art-Teacher.mp3"},{artist:"Ave Maria - Claire de Lune",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/ave-maria-claire-de-lune.mp3"},{artist:"Nemzzz - Freestyle",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/nemzzz-lsw-freestyle.mp3"},{artist:"Stevie Wonder - If It's Magic",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/stevie-wonder-if-its-magic.mp3"},{artist:"Michael Giacchino - Stuff We Did",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/stuff-we-did.mp3"},{artist:"Hareton Salvanini - N\xE3o Podes Fugir do Teu Destino",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/destiny.mp3"},{artist:"Nkosazana Daughter - Inhliziyo",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Inhiliziyo.mp3"}];class dtMusic extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get music(){return this.getAttribute("music")}set music(w){this.setAttribute("music",w)}static get observedAttributes(){return["music"]}attributeChangedCallback(w,O,j){w==="music"&&this.render()}playMusic(){currentAudio===null&&(currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currenttrack++),currentAudio.play(),this.shadow.getElementById("playBtn").style.display="none",this.shadow.getElementById("pauseBtn").style.display="block",this.shadow.getElementById("ntxBtn").style.opacity="1",currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()}),this.shadow.getElementById("cat").style.display="block"}pauseMusic(){currentAudio.pause(),this.shadow.getElementById("playBtn").style.display="block",this.shadow.getElementById("pauseBtn").style.display="none",this.shadow.getElementById("cat").style.display="none"}nextRandomTrack(){currentAudio.pause(),currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),currentAudio.play(),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()})}connectedCallback(){this.render(),this.shadow.querySelector("#playBtn").addEventListener("click",()=>{this.playMusic()}),this.shadow.querySelector("#pauseBtn").addEventListener("click",()=>{this.pauseMusic()}),this.shadow.querySelector("#ntxBtn").addEventListener("click",()=>{this.nextRandomTrack()})}render(){this.shadow.innerHTML=`
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
                position: fixed;
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
                z-index: 3;
            }
            #pauseBtn {
              display: none;
            }
            #ntxBtn {
              fill: var(--accent);
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
                width: 100%;
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
              }
              #cat {
                position: fixed;
                right: 5%;
                left: auto;
                bottom: 18%;
                top: auto;
                filter: contrast(110%);
                display: none;
                width: 100px !important;
                height: 100px !important;
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
         `}}customElements.define("scoge-music",dtMusic);var currentPage$1=1,currentBtsPage$1=1;class dtCampaign extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get campaign(){return this.getAttribute("camp")}set campaign(w){this.setAttribute("camp",w)}static get observedAttributes(){return["camp"]}attributeChangedCallback(w,O,j){w==="camp"&&this.render()}openCampaign(){this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="0%",closeInvestor(),clearShop(),clearSettings(),clearFilter()}closeCampaign(){this.shadow.getElementById("yt").src="https://www.youtube.com/embed/WPccRLEvxW4",window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="-70%")}pageScroll(){var w=this.shadow.querySelector("#looks");w.scrollLeft+=1,setTimeout(this.pageScroll.bind(this),10),w.scrollLeft==w.scrollWidth-w.clientWidth&&(w.scrollLeft=0)}nextImage(){currentPage$1>=10&&(currentPage$1=0),currentPage$1++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage$1}.webp`}previousImage(){currentPage$1<=1?currentPage$1=10:currentPage$1--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage$1}.webp`}nextBtsImage(){currentBtsPage$1>=46&&(currentBtsPage$1=0),currentBtsPage$1++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage$1}.webp`}preBtsImage(){currentBtsPage$1<=1?currentBtsPage$1=46:currentBtsPage$1--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage$1}.webp`}connectedCallback(){this.render(),this.pageScroll(),document.getElementById("campaignBut").addEventListener("click",this.openCampaign.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeCampaign.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this))}render(){this.shadow.innerHTML=`
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
              z-index: 4;
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
         `}}customElements.define("scoge-camp",dtCampaign);class dtSubscribe extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get subscribe(){return this.getAttribute("subscribe")}set subscribe(w){this.setAttribute("subscribe",w)}static get observedAttributes(){return["subscribe"]}attributeChangedCallback(w,O,j){w==="subscribe"&&this.render()}clearform(){this.shadow.getElementById("mce-EMAIL").value=""}connectedCallback(){this.render(),this.shadow.getElementById("sub").addEventListener("click",this.clearform.bind(this))}render(){this.shadow.innerHTML=`
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
              position: fixed;
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
         <div id="subscribeSect">
            <form action="https://scoge.us3.list-manage.com/subscribe/post?u=06502830cf2008a1155da093a&amp;id=467d798f05&amp;f_id=00ba43e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <input type="email" id="subscribeInput" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="SIGN UP TO BE NOTIFIED ON DROPS." required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_06502830cf2008a1155da093a_467d798f05" tabindex="-1" value=""></div>
                <div class="clear" id="sub"><input type="submit" value="ENTER" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
            </form>
         </div>
         `}}customElements.define("scoge-subscribe",dtSubscribe);class scogeUpdates extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get updates(){return this.getAttribute("updates")}set updates(w){this.setAttribute("updates",w)}static get observedAttributes(){return["updatese"]}attributeChangedCallback(w,O,j){w==="updates"&&this.render()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
            #updatesModal {
              width: 40%;
              height: 40%;
              background-color: rgba(0, 0, 0, 0.8);
              position: absolute;
              right: 30%;
              top: 30%;
              z-index: 3;
              padding: 20px;
            }
            #embed {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              margin-top: 20px;
            }
            @media screen and (max-width: 769px) {
            }
         </style>
         <div id="updatesModal">
            <h2 style="color: black; font-family: 'BS-R'; font-size: 1rem; text-align: left; margin: 0; padding: 0;">SCOG\xC9 Radio S2 - EP1</h2>
            <!-- 
            <p style="color: var(--secondary); font-family: 'BS-R'; font-size: 1rem; text-align: left; margin: 0; padding: 0;">This is the first episode of the second season of SCOG\xC9 Radio.</p> -->
            <div id="closeBtn" style="position: absolute; right: 0; top: 0; padding: 10px; cursor: pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div id="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9wxyJZVKlGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </div>
         `}}customElements.define("scoge-updates",scogeUpdates);var currentPage=1,currentBtsPage=1,inventoryTotal=2e3,lexBio="Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOG\xC9 reach its full potential.",clefBio="Advisor Wyclef Jean (musician, philanthropist) brings a wealth of experience and connections to the table. Jean is a well-known musician and philanthropist with a strong connection to the Haitian community. His involvement with SCOG\xC9 will help raise awareness of the brand and attract new customers.",ogeBio="Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.";class dtInvestors extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get invest(){return this.getAttribute("invest")}set invest(w){this.setAttribute("invest",w)}static get observedAttributes(){return["invest"]}attributeChangedCallback(w,O,j){w==="invest"&&this.render()}scrollToMenu(){var w=this.shadow.querySelectorAll(".menu-item");w.forEach(O=>{O.addEventListener("click",j=>{var D=j.target.getAttribute("id"),z=this.shadow.getElementById(D.replace("Menu","Sect")),q=z.offsetTop,G=q-200;D==="dataMenu"&&(G=q-0),D==="aboutMenu"&&(G=q-50),this.shadow.getElementById("scrollBody").scrollTo({top:G,behavior:"smooth"}),w.forEach(U=>{U.style.color="var(--primary)",U.style.borderBottom="var(--primary) 1px solid"}),j.target.style.color="var(--secondary)",j.target.style.borderBottom="var(--secondary) 1px solid"}),this.shadow.getElementById("scrollBody").addEventListener("scroll",()=>{var j=this.shadow.getElementById("scrollBody").scrollTop;w.forEach(D=>{var z=D.getAttribute("id"),q=this.shadow.getElementById(z.replace("Menu","Sect")),G=q.offsetTop;j>=G-200&&(w.forEach(U=>{U.style.color="var(--primary)",U.style.borderBottom="var(--primary) 1px solid"}),D.style.color="var(--secondary)",D.style.borderBottom="var(--secondary) 1px solid"),j>=this.shadow.getElementById("scrollBody").scrollHeight-this.shadow.getElementById("scrollBody").clientHeight-100&&(w.forEach(U=>{U.style.color="var(--primary)",U.style.borderBottom="var(--primary) 1px solid"}),this.shadow.getElementById("contactMenu").style.color="var(--secondary)",this.shadow.getElementById("contactMenu").style.borderBottom="var(--secondary) 1px solid")})})})}openInvestor(){this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="0%",clearShop(),clearSettings(),clearFilter()}closeInvestor(){window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-70%")}pageScroll(){var w=this.shadow.querySelector("#looks");w.scrollLeft+=1,setTimeout(this.pageScroll.bind(this),10),w.scrollLeft==w.scrollWidth-w.clientWidth&&(w.scrollLeft=0)}nextImage(){currentPage>=2&&(currentPage=0),currentPage++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}previousImage(){currentPage<=1?currentPage=2:currentPage--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}nextBtsImage(){currentBtsPage>=9&&(currentBtsPage=0),currentBtsPage++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}preBtsImage(){currentBtsPage<=1?currentBtsPage=9:currentBtsPage--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}slidersTotal(){var w=this.shadow.getElementById("avgRetailSlider").value,O=this.shadow.getElementById("dtcQtySlider").value,j=this.shadow.getElementById("accountsSlider").value,D=this.shadow.getElementById("wsOrderSlider").value,z=w*O+w/2*(D*j);this.shadow.getElementById("finalTotal").innerHTML=z.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}sliders(){this.shadow.getElementById("budgetSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("budNum").innerHTML=this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("dcqNum").innerHTML=Math.round(inventoryTotal),this.shadow.getElementById("wqtyNum").innerHTML=Math.round(inventoryTotal)}.bind(this)),this.shadow.getElementById("avgRetailSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("avrNum").innerHTML=this.shadow.getElementById("avgRetailSlider").value}.bind(this)),this.shadow.getElementById("avgPCSlider").addEventListener("input",function(){this.slidersTotal(),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,console.log(inventoryTotal),this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("avpNum").innerHTML=this.shadow.getElementById("avgPCSlider").value}.bind(this)),this.shadow.getElementById("dtcQtySlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this)),this.shadow.getElementById("accountsSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("waNum").innerHTML=this.shadow.getElementById("accountsSlider").value}.bind(this)),this.shadow.getElementById("wsOrderSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("wsOrderSlider").value}.bind(this)),this.shadow.getElementById("wrperSlider").addEventListener("input",function(){this.slidersTotal();var w=this.shadow.getElementById("wrperSlider").value/2+50,O=this.shadow.getElementById("wrperSlider").value/2-50;this.shadow.getElementById("wrP1").innerHTML=Math.round(Math.abs(O)),this.shadow.getElementById("wrP2").innerHTML=+Math.round(w),this.shadow.getElementById("wsOrderSlider").value=Math.round(inventoryTotal*(Math.abs(O)/100)),this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("dtcQtySlider").value=Math.round(inventoryTotal*(w/100)),this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this))}team(){this.shadow.getElementById("team1").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Wyclef Jean",this.shadow.getElementById("memberProf").innerHTML="Musician, Philanthropist",this.shadow.getElementById("memberBio").innerHTML=clefBio}.bind(this)),this.shadow.getElementById("teamMain").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Starnilas Oge",this.shadow.getElementById("memberProf").innerHTML="Founder & Creative Director",this.shadow.getElementById("memberBio").innerHTML=ogeBio}.bind(this)),this.shadow.getElementById("team2").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Lex Fenwick",this.shadow.getElementById("memberProf").innerHTML="The Dow Jones, WSJ",this.shadow.getElementById("memberBio").innerHTML=lexBio}.bind(this))}connectedCallback(){this.render(),this.pageScroll(),document.getElementById("investBut").addEventListener("click",this.openInvestor.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeInvestor.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this)),this.sliders(),this.team(),this.scrollToMenu()}render(){this.shadow.innerHTML=`
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
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr;
            }
            .profile img {
              width: 100%;
              border-radius: 10px;
            }
            .advisors {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            .advisors img {
              width: 40%;
              transition: .8s all;
            }
            .advisors img:hover {
              width: 50%;
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
                height: 100%;
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
              <span class="acc" style="text-align:center; font-size:1.5em;">SCOG\xC9 is a new and evolving luxury fashion brand that focuses on catering to an untapped global appetite for styles and stories from under-represented communities.</span><br><br>The brand serves as a powerful symbol of this community, making its members feel seen, valued, and stylish. SCOG\xC9 has the potential to make a real difference in the lives of its customers through its unique approach to luxury fashion and storytelling. Additionally, a growing trend of underrepresented communities craving more visibility in every market - a trend that can be seen in the popularity of Marvel's box office hit movie 'The Black Panther' and brands like Fenty Beauty - will partially attribute to SCOG\xC9's success.
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
              Our products are sourced and created in nyc, with a dedicated approach to up-cycling unused fabrics, trims and designs from previous seasons. We champion designing within our own world, defining our own trends, and becoming a part of the next gaurd of luxury fashion.<br><br>"Despite widespread staffing shortages and supply chain issues, the <span class="acc">fashion and apparel industry saw $180.5 billion in e-commerce revenue in 2021</span>, up from $145 billion in 2020." - 2022 Global Ecommerce Report: Fashion and Apparel
            </div>
            <h1 id="edgeSect">EDGE</h1>
            <div class="generalImages">
              <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-3.webp"/>
            </div>
            <div class="body2">
              Because we\u2019ve created our own world, with original places, cultures and stories, our edge is our originality.The products and experiences we create are glimpses into this world. And each vivid exploration creates an opportunity to develop ip that deeply resonates with our customers. Anyone can make a story about star wars. But there will always be one star wars\u2122            
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
              In 5 years we\u2019ll grow SCOG\xC9 into a multi-million dollar global brand. Here\u2019s how:<br><br>
              <ul>
                <li>Global tradeshows: Expanding wholesale accounts globally.</li>
                <li>Global retail: Flagship SCOG\xC9 experiential retail locations in NYC.</li>
                <li>Enclusive seasonal fashion shows: 2 fashion presentation shows per year to develop partnerships and demand.</li>
                <li>Content distribution: Distributing captured content where our customers live online and offline.</li>
                <li>Leverage creative community: Marketing partnerships to reach extended audiences and customers.</li>
              </ul>
            </div>
            <h1 id="tractionSect">TRACTION</h1>
            <div class="body2">
              We\u2019ve participated in the contemporary fashion trade-show liberty fairs, garnering wholesale interest from retailers nationwide, and obtained our first global sales agent. We successfully launched our first experiential retail concept, selling out of several products, and expanding our local community of fashion enthusiasts and creatives customer base.<br><br>After our retail concept we presented our frist nyfw runway show, followed by launching our first experiential art exhibition to display exclusive products and expand our community of creative customers. Following our art exhibition, we produced our second and largest NYFW presentation to date. Expanding our visibility to a wider fashion industry audience of fashion editors and wholesalers.
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
                  <div id="team1" class="profile advisors">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/profiles/Wyclef-Profile-1x1.webp"/>
                  </div>
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
                      Lex Fenwick (The Dow Jones, WSJ)<br>Wyclef Jean (Musician, Philanthropist)
                    </div>
                 </div>
            </div>
            <div id="close">
              <div class="body2 acc" style="text-align:center; font-size:1.5em;">
                If you're interested in helping to build the next great luxury fashion brand catering to an untapped global market, join me for a call! I would be more than happy to chat with you and answer any questions you may have.
              </div>
            </div>
            <div id="contactSect">
              <div id="contact"><a href="https://calendly.com/scoge/30min" target="_black">I'M IN, LET'S CHAT!</a></div>
            </div>
            </div>
         </div>
         `}}customElements.define("scoge-investors",dtInvestors);window.closeCampaign=dtCampaign.closeCampaign;const VITE_CommerceKey="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec";var infiniteActive=!1,pgleft=1,pgright=2,sketch1Count=3,sketch2Count=2,sketch3Count=1,countriedAdded=!1,shopActive="closed";window.shoploaded=!1;window.viewThisProduct="";window.investorsView=!1;window.urlParamsActive=!1;window.inUniverse=!1;const commerce=new lib(`${VITE_CommerceKey}`,!0);console.log("COPYRIGHT 2022 - SCOG\xC9 Inc. - ALL RIGHTS RESERVED");var stripe=Stripe(`${VITE_StripeKey}`);const elements=stripe.elements();window.isMobile=!1;window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches?(document.getElementById("shopBut"),document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1):(document.getElementById("mobileShop").style.display="none",window.isMobile=!1,window.logoMove(6,3,16,1))});window.sizeInit=()=>{window.matchMedia("(max-width: 768px)").matches&&(window.isMobile=!0)};window.shopping=()=>{window.matchMedia("(max-width: 768px)").matches?(openMobile(),clearScreen()):toggleShop()};window.clearScreen=()=>{var B=document.getElementById("getCamp").shadowRoot;B.getElementById("campaignComp").style.transition="1s all",B.getElementById("campaignComp").style.right="-100%",clearFilter(),clearSettings(),clearShop()};window.openMobile=()=>{document.getElementById("mobileShop").style.display="block"};window.destiny=()=>{var B=document.getElementById("destiny");B.play(),B.loop=!0};window.initNoti2=B=>{};window.clearFilter=()=>{var B=document.getElementById("shopFilter"),w=document.getElementById("all");window.filterShop(w),B.style.opacity="0%",setTimeout(()=>{B.style.display="none"},1e3)};window.toggleShop=()=>{var B=document.getElementById("orderConfirm");document.getElementById("shopBut");var w=document.getElementById("shopFilter");switch(clearSettings(),document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",document.getElementById("shop").style.transition="1s all",document.getElementById("povImageColumnLeft").innerHTML="",shopActive){case"closed":w.style.display="grid",setTimeout(()=>{w.style.opacity="100%"},1e3),setTimeout(()=>{window.productsloaded===!1&&(document.getElementById("divLoadBG2").style.display="grid"),document.getElementById("shop").style.right="0%",document.getElementById("shopIcon").innerHTML="X"},500),shopActive="open";break;case"open":window.clearFilter(),clearShop();break;case"POVopen":document.getElementById("shop").style.overflowX="scroll",shopActive="open";var O=document.getElementById("povLeft"),j=document.getElementById("povRight"),D=document.getElementById("shopCheckoutDetails");D.style.transition="1s all",D.style.visibility="hidden",D.style.opacity="0%",O.style.transition="1s all",j.style.transition="1s all",O.style.opacity="0%",j.style.opacity="0%",setTimeout(()=>{j.style.visibility="hidden",O.style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("povImageColumnRight").innerHTML="",window.returnSize(),document.getElementById("eSymbol1").style.display="none",document.getElementById("eSymbol2").style.display="none",window.termsOpen=!1,B.style.display==="block"&&(B.style.display="none");var z=document.getElementsByClassName("shopProduct");for(let q=0;q<z.length;q++)z[q].style.color="black";selectedPSize="",document.getElementById("addToBagBut").innerHTML="Select a size";break}};window.openSettings=()=>{window.clearFilter(),clearShop(),closeInvestor();var B=document.getElementById("getCamp").shadowRoot;document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",window.matchMedia("(max-width: 768px)").matches?(B.getElementById("campaignComp").style.transition="1s all",B.getElementById("campaignComp").style.right="-100%"):(B.getElementById("campaignComp").style.transition="1s all",B.getElementById("campaignComp").style.right="-70%");var w=document.getElementById("settingsMenu");document.getElementById("settingsMenu").style.display="grid",setTimeout(()=>{w.style.opacity="100%"},300)};window.clearShop=()=>{document.getElementById("shop").style.right="-70%",document.getElementById("shopIcon").innerHTML="(0)",document.getElementById("shopIcon").setAttribute("onclick","toggleShop()"),document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1};window.clearSettings=()=>{document.getElementById("settingsMenu").style.transition="1s all",document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3)};var continents={c1:{name:"1 - ALANSANA",text:"The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOG\xC9 Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",images:`<img id="scroll" src="assets/images/scroll.png"/>
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
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`}},worldName=document.getElementById("worldConName"),worldText=document.getElementById("worldConText"),worldMain=document.getElementById("worldMain"),allMenu=document.querySelectorAll(".worldMenuInner"),worldBottom=document.getElementById("worldBottom");window.changeWorld=B=>{var w=B.id;switch(worldBottom.scrollTop=0,allMenu.forEach(O=>{O.style.backgroundColor="rgba(255, 255, 255, 0.7)",O.style.color="black",document.getElementById(`${w}In`).style.backgroundColor="red",document.getElementById(`${w}In`).style.color="white"}),w){case"world1":worldName.innerHTML=continents.c1.name,worldText.innerHTML=continents.c1.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c1.images;break;case"world2":worldName.innerHTML=continents.c2.name,worldText.innerHTML=continents.c2.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c2.images;break;case"world3":worldName.innerHTML=continents.c3.name,worldText.innerHTML=continents.c3.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c3.images;break;case"world4":worldName.innerHTML=continents.c4.name,worldText.innerHTML=continents.c4.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c4.images;break;case"world5":worldName.innerHTML=continents.c5.name,worldText.innerHTML=continents.c5.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')",worldBottom.innerHTML=continents.c5.images;break;case"world6":worldName.innerHTML=continents.c6.name,worldText.innerHTML=continents.c6.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c6.images;break;case"world7":worldName.innerHTML=continents.c7.name,worldText.innerHTML=continents.c7.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c7.images;break}};var expandDiv=document.getElementById("worldBottom"),speed=5;function expanding(){var B=expandDiv.scrollTop,w=B/speed;expandDiv.style.height=Math.min(Math.max(w,34),68)+"%"}window.isWorld=()=>{expandDiv.addEventListener("scroll",function(){requestAnimationFrame(expanding)},!1)};window.worldTap=()=>{document.getElementById("worldEntrance").style.transition="5s all",document.getElementById("worldEntrance").style.opacity="0%",setTimeout(()=>{document.getElementById("worldEntrance").style.display="none"},3500)};window.activateInfinite=()=>{if(window.logoMove(6,3,16,1),BABYLON.Engine.isSupported())if(document.getElementById("renderCanvas").style.transition="5s all",infiniteActive===!1)document.getElementById("renderCanvas").style.display="block",document.getElementById("renderCanvas").style.opacity="0",new GameManager("renderCanvas"),infiniteActive=!0;else{document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3);var B=document.getElementById("shopBut"),w=document.getElementById("renderCanvas");w.height=window.innerHeight,w.width=window.innerWidth,document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",B.innerHTML="SHOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",shopActive="closed",window.termsOpen=!1,window.inUniverse=!0,getGameProgress(),window.logoMove(6,3,16,1),document.getElementById("destiny").pause(),document.getElementById("renderCanvas").style.opacity="1",window.clearMainUi()}};window.setupBook=B=>{var w=document.getElementById("B2222"),O=B.id;if(O==="bookleft"){w.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft-=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright-=2}.jpg" style="margin-left:10%;">`,O==="bookleft"&&pgleft<=0&&(pgleft=1,pgright=2,w.remove());return}if(O==="bookright"){w.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft+=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright+=2}.jpg" style="margin-left:10%;">`,O==="bookright"&&pgright>=15&&(pgleft=1,pgright=2,w.remove());return}};window.setupSketches=()=>{var B=document.getElementById("BSketch");if(sketch3Count===3){B.innerHTML='<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">',sketch3Count=1,sketch2Count=2,sketch1Count=3,B.remove();return}if(sketch3Count===2){B.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}if(sketch3Count===1){B.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count-=2}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}};window.setupMagazine=()=>{var B=document.getElementById("BMAG");B.remove()};var currentShopProduct;window.povOpen=B=>{var w=B.id;window.mainMenuPosition("black","0%","0%","0%","0%"),currentShopProduct=allProducts[0].filter(z=>z.id.includes(`${w}`)),shopActive="POVopen";var O=document.getElementById("povLeft"),j=document.getElementById("povRight");O.style.transition="1s all",j.style.transition="1s all",document.getElementById("povRight").style.visibility="visible",document.getElementById("povLeft").style.visibility="visible",O.style.opacity="100%",j.style.opacity="100%",document.getElementById("scroll").style.display="block",document.getElementById("shopProductName").innerHTML=`
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(\xC9)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(S\xC9)</span>
  `,currentShopProduct[0].categories.forEach(z=>{z.name==="\xC9"&&(document.getElementById("eSymbol1").style.display="block"),z.name==="S\xC9"&&(document.getElementById("eSymbol2").style.display="block")}),document.getElementById("shopProductDesc").innerHTML=currentShopProduct[0].description,document.getElementById("shopProductPrice").innerHTML=currentShopProduct[0].price.formatted_with_symbol,currentShopProduct[0].inventory.available<=10?document.getElementById("shopProductAvailable").innerHTML="(LIMITED QUANTITY)":document.getElementById("shopProductAvailable").innerHTML="";var D=document.getElementById("povImageColumnLeft");document.getElementById("povImageColumnRight").style.backgroundImage=`url("${currentShopProduct[0].assets[2].url}")`,currentShopProduct[0].assets.forEach(z=>{var q=document.createElement("img");z.filename==="sizeChart.png"?(q.setAttribute("class","sizeChartImage"),q.setAttribute("src",`${z.url}`),q.setAttribute("id",`${z.filename}`),document.getElementById("povImageColumnRight").appendChild(q)):(q.setAttribute("class","leftPOVimages"),q.setAttribute("src",`${z.url}`),q.setAttribute("id",`${z.url}`),q.setAttribute("onclick","changeToMainPic(this)"),D.appendChild(q))}),currentShopProduct[0].variant_groups[0].options.forEach(z=>{if(document.getElementById(`${z.name}`).style.opacity="100%",document.getElementById(`${z.name}`).style.cursor="pointer",z.name==="SingleSize"){var q=document.querySelectorAll(".shopProduct");document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr",document.getElementById("shopProductSizes").style.justifyItems="end",q.forEach(G=>{G.id!="SingleSize"&&(G.style.display="none")}),document.getElementById("SingleSize").style.display="block"}}),cartEmpty!=!0&&window.productAdded()};window.returnSize=()=>{var B=document.querySelectorAll(".shopProduct");B.forEach(w=>{w.id!="SingleSize"&&(w.style.display="block"),document.getElementById(w.id).style.opacity=".3"}),document.getElementById("SingleSize").style.display="none",document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr",document.getElementById("shopProductSizes").style.justifyItems="center"};window.changeToMainPic=B=>{var w=B.id;document.getElementById("povImageColumnRight").style.backgroundImage=`url("${w}")`};window.sizeGuideOn=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="100%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="0%"};window.sizeGuideOff=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="0%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="100%"};window.productAdded=()=>{document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="visible",document.getElementById("shopCheckoutDetails").style.opacity="100%"};window.purchaseComplete=()=>{document.getElementById("orderConfirm").style.display="block",document.getElementById("orderConfirm").innerHTML=`
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOG\xC9.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `};window.termsOpen=!1;window.toggleTerms=()=>{var B=document.getElementById("tandc"),w=document.getElementById("gMenu");if(B.style.display==="block"){document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",w.style.display="block",window.termsOpen=!1;return}else if(B.style.display!="block"){document.getElementById("tandc").innerHTML=`
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(\u2018\xC9\u2019)</span> or <span class="blue">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `,document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="block",document.getElementById("tandc").style.opacity="100%",w.style.display="none",window.termsOpen=!0,B.scrollTop=0;return}};var allProducts=[];window.productsloaded=!1;window.loadShop=async()=>{document.getElementById("divLoadBG2").style.display="grid";var B=document.getElementById("allShopProducts");await commerce.products.list({limit:100,sortDirection:"desc"}).then(w=>{allProducts.push(w.data)}),allProducts[0].forEach(w=>{var O=document.createElement("div");O.setAttribute("class","productContainer"),O.setAttribute("id",w.id),w.categories.forEach(j=>{O.classList.add(j.name)}),window.matchMedia("(max-width: 768px)").matches||(O.setAttribute("onmouseover","shopOnHover(this)"),O.setAttribute("onmouseout","shopOutHover(this)"),O.setAttribute("onclick","povOpen(this)")),B.appendChild(O),O.innerHTML=`
    <img class="shopProductsOver" src="${w.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${w.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${w.name}</p>
    <p class="pcProductPrice">${w.price.formatted_with_symbol}</p>
</div>
    `,window.productsloaded=!0,document.getElementById("divLoadBG2").style.display="none"}),urlParamsActive===!0&&(povOpen(document.getElementById(viewThisProduct)),window.history.replaceState({},document.title,"/index.html")),commerce.cart.empty()};window.imageFade=B=>{var w=B;w.style.transition="all 2s",w.style.opacity="1"};window.shopOnHover=B=>{var w=B.id,O=document.getElementById(w);O.getElementsByTagName("img")[1].style.opacity="0%",O.getElementsByTagName("img")[0].style.opacity="100%"};window.shopOutHover=B=>{var w=B.id,O=document.getElementById(w);O.getElementsByTagName("img")[0].style.opacity="0%",O.getElementsByTagName("img")[1].style.opacity="100%"};var currentCart,cartEmpty=!0,selectedPSize="";window.selectSize=B=>{B.style.opacity==="1"?(selectedPSize=B.id,document.getElementById("addToBagBut").innerHTML="Add To Bag",document.getElementById("addToBagBut").setAttribute("onclick","addToCart()")):(selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick","addToCart()"));var w=document.getElementsByClassName("shopProduct");for(let O=0;O<w.length;O++)w[O].style.color="black";B.style.color="#ff002d"};var countriesObj={};window.addToCart=async()=>{document.getElementById("shoppingBag").innerHTML="";var B=currentShopProduct[0].variant_groups[0].options.filter(w=>w.name.includes(`${selectedPSize}`));document.getElementById("divLoadBG").style.display="grid",commerce.cart.retrieve().then(w=>{currentCart=w}).then(()=>{commerce.cart.add(currentShopProduct[0].id,1,{[currentShopProduct[0].variant_groups[0].id]:B[0].id}).then(()=>{cartEmpty=!1,commerce.cart.retrieve().then(w=>{currentCart=w,document.getElementById("divLoadBG").style.display="none",document.getElementById("addToBagBut").innerHTML="Select a size";var O=document.getElementsByClassName("shopProduct");for(let j=0;j<O.length;j++)O[j].style.color="";window.variantAbbr="",w.line_items.forEach(j=>{var D=document.createElement("div");switch(D.setAttribute("class","bagProducts"),document.getElementById("shoppingBag").appendChild(D),j.selected_options[0].option_name){case"Small":window.variantAbbr="S";break;case"Medium":window.variantAbbr="M";break;case"Large":window.variantAbbr="L";break;case"XLarge":window.variantAbbr="XL";break;case"2XLarge":window.variantAbbr="2XL";break;case"3XLarge":window.variantAbbr="3XL";break}D.innerHTML=`
                  <div class="bagProduct">
                      <div class="bagPOver" id="${j.id}">
                          <p id="test1sizeQty">(${j.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${j.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `,D.setAttribute("id",`${j.id}Parent`),document.getElementById(j.id).style.backgroundImage=`url(${j.image.url})`}),document.getElementById("carTotal").innerHTML=w.subtotal.formatted_with_symbol}),window.productAdded(),selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick")})}),countriedAdded===!1&&(countriedAdded=!0,commerce.services.localeListCountries().then(w=>{countriesObj=w.countries,Object.keys(w.countries).forEach(O=>{var j=document.createElement("option"),D=document.getElementById("input9");j.setAttribute("value",O),j.setAttribute("title",O),j.innerHTML=`${countriesObj[O].substr(0,20)}`,D.appendChild(j)})}))};window.removeLineItem=B=>{document.getElementById("divLoadBG").style.display="grid";var w=B.id;commerce.cart.remove(w).then(O=>{document.getElementById(`${w}Parent`).remove(),document.getElementById("divLoadBG").style.display="none",document.getElementById("carTotal").innerHTML=O.cart.subtotal.formatted_with_symbol,currentCart=O.cart,O.cart.total_items===0&&(cartEmpty=!0,countriedAdded=!1,document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `)})};window.states=()=>{var B=document.getElementById("input9"),w=B.options[B.selectedIndex].value,O=B.options[B.selectedIndex].title,j=document.getElementById("carTotal");document.getElementById("input7").innerHTML="",w==="US"&&(document.getElementById("input4").value="$0.00 Free Shipping",window.shippingMethodValue=1,j.innerHTML=currentCart.subtotal.formatted_with_symbol),w!="US"&&(document.getElementById("input4").value="$70.00 Intl Shipping",window.shippingMethodValue=3,j.innerHTML=`$${currentCart.subtotal.raw+70}.00`),O==="US2"&&(document.getElementById("input4").value="$130.00 - Next Day Air",window.shippingMethodValue=2,j.innerHTML=`$${currentCart.subtotal.raw+130}.00`),commerce.services.localeListSubdivisions(w).then(D=>{var z=D.subdivisions;Object.keys(D.subdivisions).forEach(q=>{var G=document.createElement("option"),U=document.getElementById("input7");if(Object.keys(D.subdivisions).length<=1){var W=document.createElement("option");W.innerHTML="Not Available.",B.options[B.selectedIndex].innerHTML="Select Country",document.getElementById("input7").appendChild(W)}else G.setAttribute("value",z[q]),G.setAttribute("id",q),G.innerHTML=z[q].substring(0,20),U.appendChild(G)})})};var style={base:{color:"black"}};const card=elements.create("card",{style});card.mount("#card-element");window.shippingId="";window.checkOut=async()=>{var B=document.getElementById("input1").value,w=document.getElementById("input2").value,O=document.getElementById("input3").value;document.getElementById("input4").value;var j=document.getElementById("input5").value,D=document.getElementById("input6").value,z=document.getElementById("input8").value,q=document.getElementById("input10").value,G=document.getElementById("input9"),U=document.getElementById("input7"),W=G.options[G.selectedIndex].value,Q=U.options[U.selectedIndex].id;document.getElementById("divLoadBG").style.display="grid",setTimeout(()=>{document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"},2e4),await commerce.checkout.generateToken(currentCart.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async Y=>{commerce.checkout.getShippingOptions(Y.id,{country:W}).then(async J=>{window.shippingMethodValue===1&&(window.shippingId=J[0].id),window.shippingMethodValue===3&&(window.shippingId=J[0].id),window.shippingMethodValue===2&&(window.shippingId=J[1].id);var X=`${B} ${w}`;const se=await stripe.createPaymentMethod({type:"card",card});if(se.error){document.getElementById("divLoadBG").style.display="none",console.log(se.error.message),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${se.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const re=await commerce.checkout.capture(Y.id,{customer:{firstname:`${B}`,lastname:`${w}`,email:`${j}`},extra_fields:{extr_DWy4oG4dY56Jx2:q},shipping:{name:`${X}`,street:`${O}`,town_city:`${D}`,county_state:`${Q}`,postal_zip_code:`${z}`,country:`${W}`},fulfillment:{shipping_method:`${window.shippingId}`},billing:{name:`${X}`,street:`${O}`,town_city:`${D}`,county_state:`${Q}`,postal_zip_code:`${z}`,country:`${W}`},payment:{gateway:"stripe",stripe:{payment_method_id:se.paymentMethod.id}}});setTimeout(()=>{window.closeLoadE()},2e4),window.closeLoadE(),document.getElementById("confirmNumber").innerHTML=re.customer_reference,window.purchaseComplete(),document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`,document.getElementById("shoppingBag").innerHTML="",cartEmpty=!0,document.getElementById("shopCheckoutDetails").style.opacity="0%",card.clear();return}catch(re){document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${re.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(re);return}finally{}})})};window.closeLoadE=()=>{document.getElementById("divLoadBG").innerHTML='<div class="loader"></div>',document.getElementById("divLoadBG").removeAttribute("onclick"),document.getElementById("divLoadBG").style.display="none",card.clear()};window.ccsOn=()=>{document.getElementById("crypto").innerHTML="Coming Soon"};window.ccsOff=()=>{document.getElementById("crypto").innerHTML="Pay with Crypto"};window.filterShop=B=>{var w=document.getElementById("sectionDesc"),O=B.id;switch(O!=="all"&&(document.getElementById("all").checked=!1),O){case"all":w.innerHTML=`<h2>All Products</h2>
      <h4>SCOG\xC9 Shop - Collection pieces, gifts and more.</h4>`,document.getElementById("all").checked=!0,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(j=>{j.style.display="block"});break;case"tops":w.innerHTML=`<h2>Tops</h2>
      <h4>SCOG\xC9 T-Shirts, Hoodies, Shirts and Jackets.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!0,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(j=>{j.classList.contains("tops")?j.style.display="block":j.style.display="none"});break;case"bottoms":w.innerHTML=`<h2>Bottoms</h2>
      <h4>SCOG\xC9 Pants, Shorts, and Joggers.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!0,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(j=>{j.classList.contains("bottoms")?j.style.display="block":j.style.display="none"});break;case"accessories":w.innerHTML=`<h2>Accessories</h2>
      <h4>SCOG\xC9 Hats & More.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!0,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(j=>{j.classList.contains("accessories")?j.style.display="block":j.style.display="none"});break;case"art":w.innerHTML=`<h2>Artwork</h2>
      <h4>SCOG\xC9 Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!0,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(j=>{j.classList.contains("art")?j.style.display="block":j.style.display="none"});break;case"gifts":w.innerHTML=`<h2>Gifts</h2>
      <h4>SCOG\xC9 pieces wrapped, boxed, and ready to gift.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!0,document.querySelectorAll(".productContainer").forEach(j=>{j.classList.contains("gifts")?j.style.display="block":j.style.display="none"});break}};window.sayScoge=()=>{document.getElementById("scoge").play(),clearScreen()};window.logoMove=(B,w,O,j)=>{var D=document.getElementById("logo");D.style.transition=`${j}s all`,window.matchMedia("(max-width: 768px)").matches||(D.style.left=`${w}%`,D.style.width=`${O}%`,D.style.top=`${B}%`)};window.dActiveBut=()=>{var B=document.getElementById("settingsBut"),w=document.getElementById("extraBut");shopActive==="closed"?(B.style.opacity="25%",w.style.opacity="25%",B.removeAttribute("onclick"),w.setAttribute("onclick","")):(B.style.opacity="100%",w.style.opacity="100%",B.setAttribute("onclick","openSettings();"),w.setAttribute("onclick","openExtra();"))};window.clearMainUi=()=>{var B=document.getElementById("gMenu"),w=document.getElementById("logo"),O=document.getElementById("settingsMenu"),j=document.getElementById("subText1"),D=document.getElementById("subText2");B.style.transition="2s all",w.style.transition="2s all",j.style.transition="2s all",D.style.transition="2s all",inUniverse===!0?setTimeout(()=>{B.style.left="10%",w.style.left="30%",B.style.opacity="0",w.style.opacity="0%",setTimeout(()=>{j.style.bottom="49%",j.style.opacity="100%",setTimeout(()=>{D.style.bottom="45%"},500)},1e3),setTimeout(()=>{B.style.display="none",w.style.display="none",O.style.display="none"},3e3)},2e3):(B.style.display="block",w.style.display="block",O.style.display="grid",j.style.bottom="44%",j.style.opacity="0%",D.style.bottom="40%",D.style.opacity="0%",setTimeout(()=>{B.style.left="6%",w.style.left="3%",B.style.opacity="100%",w.style.opacity="100%"},1e3),setTimeout(()=>{D.style.display="none",j.style.display="none"}))};window.mainMenuPosition=(B,w,O,j,D)=>{var z=document.querySelectorAll(".mainMenuBut");document.getElementById(""),z.forEach(q=>{switch(q.style.backgroundColor=B,q.id){case"shopBut":document.getElementById("shopBut").style.left=w;break;case"newGameBut":document.getElementById("newGameBut").style.left=O;break;case"settingsBut":document.getElementById("settingsBut").style.left=j;break;case"subscribeBut":document.getElementById("subscribeBut").style.left=D;break}})};window.activateInvestors=()=>{document.getElementById("getInvestors").style.display="block",document.getElementById("investBut").style.display="block",window.matchMedia("(max-width: 768px)").matches&&(document.getElementById("settingsBut").style.display="none")};window.openInvestors=()=>{document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="0%"};window.closeInvestor=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="-100%"};window.getParamsDesktop=()=>{const B=new URLSearchParams(location.search);investorsView=B.get("Investors"),console.log(investorsView),investorsView==="true"&&activateInvestors()};
