var Ot=Object.defineProperty;var Pt=(Q,B,w)=>B in Q?Ot(Q,B,{enumerable:!0,configurable:!0,writable:!0,value:w}):Q[B]=w;var Ke=(Q,B,w)=>(Pt(Q,typeof B!="symbol"?B+"":B,w),w);import"./wScoge.fc00b881.js";const scriptRel="modulepreload",seen={},base$1="/",__vitePreload=function(B,w){return!w||w.length===0?B():Promise.all(w.map(D=>{if(D=`${base$1}${D}`,D in seen)return;seen[D]=!0;const F=D.endsWith(".css"),O=F?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${O}`))return;const L=document.createElement("link");if(L.rel=F?"stylesheet":scriptRel,F||(L.as="script",L.crossOrigin=""),L.href=D,document.head.appendChild(L),F)return new Promise((U,G)=>{L.addEventListener("load",U),L.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${D}`)))})})).then(()=>B())};var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof{}!="undefined"?{}:typeof self!="undefined"?self:{},objectWithoutProperties={exports:{}},objectWithoutPropertiesLoose={exports:{}};(function(Q){function B(w,D){if(w==null)return{};var F={},O=Object.keys(w),L,U;for(U=0;U<O.length;U++)L=O[U],!(D.indexOf(L)>=0)&&(F[L]=w[L]);return F}Q.exports=B,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(objectWithoutPropertiesLoose);(function(Q){var B=objectWithoutPropertiesLoose.exports;function w(D,F){if(D==null)return{};var O=B(D,F),L,U;if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(D);for(U=0;U<G.length;U++)L=G[U],!(F.indexOf(L)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,L)||(O[L]=D[L]))}return O}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(objectWithoutProperties);var toConsumableArray={exports:{}},arrayWithoutHoles={exports:{}},arrayLikeToArray={exports:{}};(function(Q){function B(w,D){(D==null||D>w.length)&&(D=w.length);for(var F=0,O=new Array(D);F<D;F++)O[F]=w[F];return O}Q.exports=B,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(arrayLikeToArray);(function(Q){var B=arrayLikeToArray.exports;function w(D){if(Array.isArray(D))return B(D)}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(arrayWithoutHoles);var iterableToArray={exports:{}};(function(Q){function B(w){if(typeof Symbol!="undefined"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}Q.exports=B,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(iterableToArray);var unsupportedIterableToArray={exports:{}};(function(Q){var B=arrayLikeToArray.exports;function w(D,F){if(!!D){if(typeof D=="string")return B(D,F);var O=Object.prototype.toString.call(D).slice(8,-1);if(O==="Object"&&D.constructor&&(O=D.constructor.name),O==="Map"||O==="Set")return Array.from(D);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return B(D,F)}}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(unsupportedIterableToArray);var nonIterableSpread={exports:{}};(function(Q){function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}Q.exports=B,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(nonIterableSpread);(function(Q){var B=arrayWithoutHoles.exports,w=iterableToArray.exports,D=unsupportedIterableToArray.exports,F=nonIterableSpread.exports;function O(L){return B(L)||w(L)||D(L)||F()}Q.exports=O,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(toConsumableArray);var _typeof$2={exports:{}};(function(Q){function B(w){return Q.exports=B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},Q.exports.__esModule=!0,Q.exports.default=Q.exports,B(w)}Q.exports=B,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(_typeof$2);var defineProperty={exports:{}},toPropertyKey={exports:{}},toPrimitive={exports:{}};(function(Q){var B=_typeof$2.exports.default;function w(D,F){if(B(D)!=="object"||D===null)return D;var O=D[Symbol.toPrimitive];if(O!==void 0){var L=O.call(D,F||"default");if(B(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(F==="string"?String:Number)(D)}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(toPrimitive);(function(Q){var B=_typeof$2.exports.default,w=toPrimitive.exports;function D(F){var O=w(F,"string");return B(O)==="symbol"?O:String(O)}Q.exports=D,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(toPropertyKey);(function(Q){var B=toPropertyKey.exports;function w(D,F,O){return F=B(F),F in D?Object.defineProperty(D,F,{value:O,enumerable:!0,configurable:!0,writable:!0}):D[F]=O,D}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(defineProperty);var classCallCheck={exports:{}};(function(Q){function B(w,D){if(!(w instanceof D))throw new TypeError("Cannot call a class as a function")}Q.exports=B,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(classCallCheck);var createClass={exports:{}};(function(Q){var B=toPropertyKey.exports;function w(F,O){for(var L=0;L<O.length;L++){var U=O[L];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(F,B(U.key),U)}}function D(F,O,L){return O&&w(F.prototype,O),L&&w(F,L),Object.defineProperty(F,"prototype",{writable:!1}),F}Q.exports=D,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(createClass);var regeneratorRuntime$1={exports:{}};(function(Q){var B=_typeof$2.exports.default;function w(){Q.exports=w=function(){return D},Q.exports.__esModule=!0,Q.exports.default=Q.exports;var D={},F=Object.prototype,O=F.hasOwnProperty,L=Object.defineProperty||function(_e,ve,Qe){_e[ve]=Qe.value},U=typeof Symbol=="function"?Symbol:{},G=U.iterator||"@@iterator",q=U.asyncIterator||"@@asyncIterator",Y=U.toStringTag||"@@toStringTag";function W(_e,ve,Qe){return Object.defineProperty(_e,ve,{value:Qe,enumerable:!0,configurable:!0,writable:!0}),_e[ve]}try{W({},"")}catch{W=function(Qe,xe,Re){return Qe[xe]=Re}}function X(_e,ve,Qe,xe){var Re=ve&&ve.prototype instanceof ie?ve:ie,Fe=Object.create(Re.prototype),Ue=new Pe(xe||[]);return L(Fe,"_invoke",{value:De(_e,Qe,Ue)}),Fe}function te(_e,ve,Qe){try{return{type:"normal",arg:_e.call(ve,Qe)}}catch(xe){return{type:"throw",arg:xe}}}D.wrap=X;var ae={};function ie(){}function ce(){}function he(){}var pe={};W(pe,G,function(){return this});var Be=Object.getPrototypeOf,Ie=Be&&Be(Be(Le([])));Ie&&Ie!==F&&O.call(Ie,G)&&(pe=Ie);var ye=he.prototype=ie.prototype=Object.create(pe);function Ce(_e){["next","throw","return"].forEach(function(ve){W(_e,ve,function(Qe){return this._invoke(ve,Qe)})})}function we(_e,ve){function Qe(Re,Fe,Ue,He){var et=te(_e[Re],_e,Fe);if(et.type!=="throw"){var oe=et.arg,Xe=oe.value;return Xe&&B(Xe)=="object"&&O.call(Xe,"__await")?ve.resolve(Xe.__await).then(function(ot){Qe("next",ot,Ue,He)},function(ot){Qe("throw",ot,Ue,He)}):ve.resolve(Xe).then(function(ot){oe.value=ot,Ue(oe)},function(ot){return Qe("throw",ot,Ue,He)})}He(et.arg)}var xe;L(this,"_invoke",{value:function(Fe,Ue){function He(){return new ve(function(et,oe){Qe(Fe,Ue,et,oe)})}return xe=xe?xe.then(He,He):He()}})}function De(_e,ve,Qe){var xe="suspendedStart";return function(Re,Fe){if(xe==="executing")throw new Error("Generator is already running");if(xe==="completed"){if(Re==="throw")throw Fe;return qe()}for(Qe.method=Re,Qe.arg=Fe;;){var Ue=Qe.delegate;if(Ue){var He=Se(Ue,Qe);if(He){if(He===ae)continue;return He}}if(Qe.method==="next")Qe.sent=Qe._sent=Qe.arg;else if(Qe.method==="throw"){if(xe==="suspendedStart")throw xe="completed",Qe.arg;Qe.dispatchException(Qe.arg)}else Qe.method==="return"&&Qe.abrupt("return",Qe.arg);xe="executing";var et=te(_e,ve,Qe);if(et.type==="normal"){if(xe=Qe.done?"completed":"suspendedYield",et.arg===ae)continue;return{value:et.arg,done:Qe.done}}et.type==="throw"&&(xe="completed",Qe.method="throw",Qe.arg=et.arg)}}}function Se(_e,ve){var Qe=ve.method,xe=_e.iterator[Qe];if(xe===void 0)return ve.delegate=null,Qe==="throw"&&_e.iterator.return&&(ve.method="return",ve.arg=void 0,Se(_e,ve),ve.method==="throw")||Qe!=="return"&&(ve.method="throw",ve.arg=new TypeError("The iterator does not provide a '"+Qe+"' method")),ae;var Re=te(xe,_e.iterator,ve.arg);if(Re.type==="throw")return ve.method="throw",ve.arg=Re.arg,ve.delegate=null,ae;var Fe=Re.arg;return Fe?Fe.done?(ve[_e.resultName]=Fe.value,ve.next=_e.nextLoc,ve.method!=="return"&&(ve.method="next",ve.arg=void 0),ve.delegate=null,ae):Fe:(ve.method="throw",ve.arg=new TypeError("iterator result is not an object"),ve.delegate=null,ae)}function be(_e){var ve={tryLoc:_e[0]};1 in _e&&(ve.catchLoc=_e[1]),2 in _e&&(ve.finallyLoc=_e[2],ve.afterLoc=_e[3]),this.tryEntries.push(ve)}function Ne(_e){var ve=_e.completion||{};ve.type="normal",delete ve.arg,_e.completion=ve}function Pe(_e){this.tryEntries=[{tryLoc:"root"}],_e.forEach(be,this),this.reset(!0)}function Le(_e){if(_e){var ve=_e[G];if(ve)return ve.call(_e);if(typeof _e.next=="function")return _e;if(!isNaN(_e.length)){var Qe=-1,xe=function Re(){for(;++Qe<_e.length;)if(O.call(_e,Qe))return Re.value=_e[Qe],Re.done=!1,Re;return Re.value=void 0,Re.done=!0,Re};return xe.next=xe}}return{next:qe}}function qe(){return{value:void 0,done:!0}}return ce.prototype=he,L(ye,"constructor",{value:he,configurable:!0}),L(he,"constructor",{value:ce,configurable:!0}),ce.displayName=W(he,Y,"GeneratorFunction"),D.isGeneratorFunction=function(_e){var ve=typeof _e=="function"&&_e.constructor;return!!ve&&(ve===ce||(ve.displayName||ve.name)==="GeneratorFunction")},D.mark=function(_e){return Object.setPrototypeOf?Object.setPrototypeOf(_e,he):(_e.__proto__=he,W(_e,Y,"GeneratorFunction")),_e.prototype=Object.create(ye),_e},D.awrap=function(_e){return{__await:_e}},Ce(we.prototype),W(we.prototype,q,function(){return this}),D.AsyncIterator=we,D.async=function(_e,ve,Qe,xe,Re){Re===void 0&&(Re=Promise);var Fe=new we(X(_e,ve,Qe,xe),Re);return D.isGeneratorFunction(ve)?Fe:Fe.next().then(function(Ue){return Ue.done?Ue.value:Fe.next()})},Ce(ye),W(ye,Y,"Generator"),W(ye,G,function(){return this}),W(ye,"toString",function(){return"[object Generator]"}),D.keys=function(_e){var ve=Object(_e),Qe=[];for(var xe in ve)Qe.push(xe);return Qe.reverse(),function Re(){for(;Qe.length;){var Fe=Qe.pop();if(Fe in ve)return Re.value=Fe,Re.done=!1,Re}return Re.done=!0,Re}},D.values=Le,Pe.prototype={constructor:Pe,reset:function(ve){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ne),!ve)for(var Qe in this)Qe.charAt(0)==="t"&&O.call(this,Qe)&&!isNaN(+Qe.slice(1))&&(this[Qe]=void 0)},stop:function(){this.done=!0;var ve=this.tryEntries[0].completion;if(ve.type==="throw")throw ve.arg;return this.rval},dispatchException:function(ve){if(this.done)throw ve;var Qe=this;function xe(oe,Xe){return Ue.type="throw",Ue.arg=ve,Qe.next=oe,Xe&&(Qe.method="next",Qe.arg=void 0),!!Xe}for(var Re=this.tryEntries.length-1;Re>=0;--Re){var Fe=this.tryEntries[Re],Ue=Fe.completion;if(Fe.tryLoc==="root")return xe("end");if(Fe.tryLoc<=this.prev){var He=O.call(Fe,"catchLoc"),et=O.call(Fe,"finallyLoc");if(He&&et){if(this.prev<Fe.catchLoc)return xe(Fe.catchLoc,!0);if(this.prev<Fe.finallyLoc)return xe(Fe.finallyLoc)}else if(He){if(this.prev<Fe.catchLoc)return xe(Fe.catchLoc,!0)}else{if(!et)throw new Error("try statement without catch or finally");if(this.prev<Fe.finallyLoc)return xe(Fe.finallyLoc)}}}},abrupt:function(ve,Qe){for(var xe=this.tryEntries.length-1;xe>=0;--xe){var Re=this.tryEntries[xe];if(Re.tryLoc<=this.prev&&O.call(Re,"finallyLoc")&&this.prev<Re.finallyLoc){var Fe=Re;break}}Fe&&(ve==="break"||ve==="continue")&&Fe.tryLoc<=Qe&&Qe<=Fe.finallyLoc&&(Fe=null);var Ue=Fe?Fe.completion:{};return Ue.type=ve,Ue.arg=Qe,Fe?(this.method="next",this.next=Fe.finallyLoc,ae):this.complete(Ue)},complete:function(ve,Qe){if(ve.type==="throw")throw ve.arg;return ve.type==="break"||ve.type==="continue"?this.next=ve.arg:ve.type==="return"?(this.rval=this.arg=ve.arg,this.method="return",this.next="end"):ve.type==="normal"&&Qe&&(this.next=Qe),ae},finish:function(ve){for(var Qe=this.tryEntries.length-1;Qe>=0;--Qe){var xe=this.tryEntries[Qe];if(xe.finallyLoc===ve)return this.complete(xe.completion,xe.afterLoc),Ne(xe),ae}},catch:function(ve){for(var Qe=this.tryEntries.length-1;Qe>=0;--Qe){var xe=this.tryEntries[Qe];if(xe.tryLoc===ve){var Re=xe.completion;if(Re.type==="throw"){var Fe=Re.arg;Ne(xe)}return Fe}}throw new Error("illegal catch attempt")},delegateYield:function(ve,Qe,xe){return this.delegate={iterator:Le(ve),resultName:Qe,nextLoc:xe},this.method==="next"&&(this.arg=void 0),ae}},D}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(regeneratorRuntime$1);var runtime=regeneratorRuntime$1.exports(),regenerator=runtime;try{regeneratorRuntime=runtime}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}var asyncToGenerator={exports:{}};(function(Q){function B(D,F,O,L,U,G,q){try{var Y=D[G](q),W=Y.value}catch(X){O(X);return}Y.done?F(W):Promise.resolve(W).then(L,U)}function w(D){return function(){var F=this,O=arguments;return new Promise(function(L,U){var G=D.apply(F,O);function q(W){B(G,L,U,q,Y,"next",W)}function Y(W){B(G,L,U,q,Y,"throw",W)}q(void 0)})}}Q.exports=w,Q.exports.__esModule=!0,Q.exports.default=Q.exports})(asyncToGenerator);var axios$6={exports:{}},bind$5=function(B,w){return function(){for(var F=new Array(arguments.length),O=0;O<F.length;O++)F[O]=arguments[O];return B.apply(w,F)}},bind$4=bind$5,toString$1=Object.prototype.toString;function isArray$1(Q){return toString$1.call(Q)==="[object Array]"}function isUndefined$1(Q){return typeof Q=="undefined"}function isBuffer$1(Q){return Q!==null&&!isUndefined$1(Q)&&Q.constructor!==null&&!isUndefined$1(Q.constructor)&&typeof Q.constructor.isBuffer=="function"&&Q.constructor.isBuffer(Q)}function isArrayBuffer$1(Q){return toString$1.call(Q)==="[object ArrayBuffer]"}function isFormData$1(Q){return typeof FormData!="undefined"&&Q instanceof FormData}function isArrayBufferView$1(Q){var B;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?B=ArrayBuffer.isView(Q):B=Q&&Q.buffer&&Q.buffer instanceof ArrayBuffer,B}function isString$1(Q){return typeof Q=="string"}function isNumber$1(Q){return typeof Q=="number"}function isObject$1(Q){return Q!==null&&typeof Q=="object"}function isPlainObject$1(Q){if(toString$1.call(Q)!=="[object Object]")return!1;var B=Object.getPrototypeOf(Q);return B===null||B===Object.prototype}function isDate$1(Q){return toString$1.call(Q)==="[object Date]"}function isFile$1(Q){return toString$1.call(Q)==="[object File]"}function isBlob$1(Q){return toString$1.call(Q)==="[object Blob]"}function isFunction$1(Q){return toString$1.call(Q)==="[object Function]"}function isStream$1(Q){return isObject$1(Q)&&isFunction$1(Q.pipe)}function isURLSearchParams$1(Q){return typeof URLSearchParams!="undefined"&&Q instanceof URLSearchParams}function trim$1(Q){return Q.trim?Q.trim():Q.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv$1(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach$1(Q,B){if(!(Q===null||typeof Q=="undefined"))if(typeof Q!="object"&&(Q=[Q]),isArray$1(Q))for(var w=0,D=Q.length;w<D;w++)B.call(null,Q[w],w,Q);else for(var F in Q)Object.prototype.hasOwnProperty.call(Q,F)&&B.call(null,Q[F],F,Q)}function merge$1(){var Q={};function B(F,O){isPlainObject$1(Q[O])&&isPlainObject$1(F)?Q[O]=merge$1(Q[O],F):isPlainObject$1(F)?Q[O]=merge$1({},F):isArray$1(F)?Q[O]=F.slice():Q[O]=F}for(var w=0,D=arguments.length;w<D;w++)forEach$1(arguments[w],B);return Q}function extend$1(Q,B,w){return forEach$1(B,function(F,O){w&&typeof F=="function"?Q[O]=bind$4(F,w):Q[O]=F}),Q}function stripBOM$1(Q){return Q.charCodeAt(0)===65279&&(Q=Q.slice(1)),Q}var utils$w={isArray:isArray$1,isArrayBuffer:isArrayBuffer$1,isBuffer:isBuffer$1,isFormData:isFormData$1,isArrayBufferView:isArrayBufferView$1,isString:isString$1,isNumber:isNumber$1,isObject:isObject$1,isPlainObject:isPlainObject$1,isUndefined:isUndefined$1,isDate:isDate$1,isFile:isFile$1,isBlob:isBlob$1,isFunction:isFunction$1,isStream:isStream$1,isURLSearchParams:isURLSearchParams$1,isStandardBrowserEnv:isStandardBrowserEnv$1,forEach:forEach$1,merge:merge$1,extend:extend$1,trim:trim$1,stripBOM:stripBOM$1},utils$v=utils$w;function encode$1(Q){return encodeURIComponent(Q).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$5=function(B,w,D){if(!w)return B;var F;if(D)F=D(w);else if(utils$v.isURLSearchParams(w))F=w.toString();else{var O=[];utils$v.forEach(w,function(G,q){G===null||typeof G=="undefined"||(utils$v.isArray(G)?q=q+"[]":G=[G],utils$v.forEach(G,function(W){utils$v.isDate(W)?W=W.toISOString():utils$v.isObject(W)&&(W=JSON.stringify(W)),O.push(encode$1(q)+"="+encode$1(W))}))}),F=O.join("&")}if(F){var L=B.indexOf("#");L!==-1&&(B=B.slice(0,L)),B+=(B.indexOf("?")===-1?"?":"&")+F}return B},utils$u=utils$w;function InterceptorManager$3(){this.handlers=[]}InterceptorManager$3.prototype.use=function(B,w,D){return this.handlers.push({fulfilled:B,rejected:w,synchronous:D?D.synchronous:!1,runWhen:D?D.runWhen:null}),this.handlers.length-1};InterceptorManager$3.prototype.eject=function(B){this.handlers[B]&&(this.handlers[B]=null)};InterceptorManager$3.prototype.forEach=function(B){utils$u.forEach(this.handlers,function(D){D!==null&&B(D)})};var InterceptorManager_1$1=InterceptorManager$3,utils$t=utils$w,normalizeHeaderName$3=function(B,w){utils$t.forEach(B,function(F,O){O!==w&&O.toUpperCase()===w.toUpperCase()&&(B[w]=F,delete B[O])})},enhanceError$5=function(B,w,D,F,O){return B.config=w,D&&(B.code=D),B.request=F,B.response=O,B.isAxiosError=!0,B.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},B},enhanceError$4=enhanceError$5,createError$5=function(B,w,D,F,O){var L=new Error(B);return enhanceError$4(L,w,D,F,O)},createError$4=createError$5,settle$3=function(B,w,D){var F=D.config.validateStatus;!D.status||!F||F(D.status)?B(D):w(createError$4("Request failed with status code "+D.status,D.config,null,D.request,D))},utils$s=utils$w,cookies$3=utils$s.isStandardBrowserEnv()?function(){return{write:function(w,D,F,O,L,U){var G=[];G.push(w+"="+encodeURIComponent(D)),utils$s.isNumber(F)&&G.push("expires="+new Date(F).toGMTString()),utils$s.isString(O)&&G.push("path="+O),utils$s.isString(L)&&G.push("domain="+L),U===!0&&G.push("secure"),document.cookie=G.join("; ")},read:function(w){var D=document.cookie.match(new RegExp("(^|;\\s*)("+w+")=([^;]*)"));return D?decodeURIComponent(D[3]):null},remove:function(w){this.write(w,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$3=function(B){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(B)},combineURLs$3=function(B,w){return w?B.replace(/\/+$/,"")+"/"+w.replace(/^\/+/,""):B},isAbsoluteURL$2=isAbsoluteURL$3,combineURLs$2=combineURLs$3,buildFullPath$3=function(B,w){return B&&!isAbsoluteURL$2(w)?combineURLs$2(B,w):w},utils$r=utils$w,ignoreDuplicateOf$1=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$3=function(B){var w={},D,F,O;return B&&utils$r.forEach(B.split(`
`),function(U){if(O=U.indexOf(":"),D=utils$r.trim(U.substr(0,O)).toLowerCase(),F=utils$r.trim(U.substr(O+1)),D){if(w[D]&&ignoreDuplicateOf$1.indexOf(D)>=0)return;D==="set-cookie"?w[D]=(w[D]?w[D]:[]).concat([F]):w[D]=w[D]?w[D]+", "+F:F}}),w},utils$q=utils$w,isURLSameOrigin$3=utils$q.isStandardBrowserEnv()?function(){var B=/(msie|trident)/i.test(navigator.userAgent),w=document.createElement("a"),D;function F(O){var L=O;return B&&(w.setAttribute("href",L),L=w.href),w.setAttribute("href",L),{href:w.href,protocol:w.protocol?w.protocol.replace(/:$/,""):"",host:w.host,search:w.search?w.search.replace(/^\?/,""):"",hash:w.hash?w.hash.replace(/^#/,""):"",hostname:w.hostname,port:w.port,pathname:w.pathname.charAt(0)==="/"?w.pathname:"/"+w.pathname}}return D=F(window.location.href),function(L){var U=utils$q.isString(L)?F(L):L;return U.protocol===D.protocol&&U.host===D.host}}():function(){return function(){return!0}}(),utils$p=utils$w,settle$2=settle$3,cookies$2=cookies$3,buildURL$4=buildURL$5,buildFullPath$2=buildFullPath$3,parseHeaders$2=parseHeaders$3,isURLSameOrigin$2=isURLSameOrigin$3,createError$3=createError$5,xhr$1=function(B){return new Promise(function(D,F){var O=B.data,L=B.headers,U=B.responseType;utils$p.isFormData(O)&&delete L["Content-Type"];var G=new XMLHttpRequest;if(B.auth){var q=B.auth.username||"",Y=B.auth.password?unescape(encodeURIComponent(B.auth.password)):"";L.Authorization="Basic "+btoa(q+":"+Y)}var W=buildFullPath$2(B.baseURL,B.url);G.open(B.method.toUpperCase(),buildURL$4(W,B.params,B.paramsSerializer),!0),G.timeout=B.timeout;function X(){if(!!G){var ae="getAllResponseHeaders"in G?parseHeaders$2(G.getAllResponseHeaders()):null,ie=!U||U==="text"||U==="json"?G.responseText:G.response,ce={data:ie,status:G.status,statusText:G.statusText,headers:ae,config:B,request:G};settle$2(D,F,ce),G=null}}if("onloadend"in G?G.onloadend=X:G.onreadystatechange=function(){!G||G.readyState!==4||G.status===0&&!(G.responseURL&&G.responseURL.indexOf("file:")===0)||setTimeout(X)},G.onabort=function(){!G||(F(createError$3("Request aborted",B,"ECONNABORTED",G)),G=null)},G.onerror=function(){F(createError$3("Network Error",B,null,G)),G=null},G.ontimeout=function(){var ie="timeout of "+B.timeout+"ms exceeded";B.timeoutErrorMessage&&(ie=B.timeoutErrorMessage),F(createError$3(ie,B,B.transitional&&B.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",G)),G=null},utils$p.isStandardBrowserEnv()){var te=(B.withCredentials||isURLSameOrigin$2(W))&&B.xsrfCookieName?cookies$2.read(B.xsrfCookieName):void 0;te&&(L[B.xsrfHeaderName]=te)}"setRequestHeader"in G&&utils$p.forEach(L,function(ie,ce){typeof O=="undefined"&&ce.toLowerCase()==="content-type"?delete L[ce]:G.setRequestHeader(ce,ie)}),utils$p.isUndefined(B.withCredentials)||(G.withCredentials=!!B.withCredentials),U&&U!=="json"&&(G.responseType=B.responseType),typeof B.onDownloadProgress=="function"&&G.addEventListener("progress",B.onDownloadProgress),typeof B.onUploadProgress=="function"&&G.upload&&G.upload.addEventListener("progress",B.onUploadProgress),B.cancelToken&&B.cancelToken.promise.then(function(ie){!G||(G.abort(),F(ie),G=null)}),O||(O=null),G.send(O)})},utils$o=utils$w,normalizeHeaderName$2=normalizeHeaderName$3,enhanceError$3=enhanceError$5,DEFAULT_CONTENT_TYPE$1={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset$1(Q,B){!utils$o.isUndefined(Q)&&utils$o.isUndefined(Q["Content-Type"])&&(Q["Content-Type"]=B)}function getDefaultAdapter$1(){var Q;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(Q=xhr$1),Q}function stringifySafely$1(Q,B,w){if(utils$o.isString(Q))try{return(B||JSON.parse)(Q),utils$o.trim(Q)}catch(D){if(D.name!=="SyntaxError")throw D}return(w||JSON.stringify)(Q)}var defaults$7={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter$1(),transformRequest:[function(B,w){return normalizeHeaderName$2(w,"Accept"),normalizeHeaderName$2(w,"Content-Type"),utils$o.isFormData(B)||utils$o.isArrayBuffer(B)||utils$o.isBuffer(B)||utils$o.isStream(B)||utils$o.isFile(B)||utils$o.isBlob(B)?B:utils$o.isArrayBufferView(B)?B.buffer:utils$o.isURLSearchParams(B)?(setContentTypeIfUnset$1(w,"application/x-www-form-urlencoded;charset=utf-8"),B.toString()):utils$o.isObject(B)||w&&w["Content-Type"]==="application/json"?(setContentTypeIfUnset$1(w,"application/json"),stringifySafely$1(B)):B}],transformResponse:[function(B){var w=this.transitional,D=w&&w.silentJSONParsing,F=w&&w.forcedJSONParsing,O=!D&&this.responseType==="json";if(O||F&&utils$o.isString(B)&&B.length)try{return JSON.parse(B)}catch(L){if(O)throw L.name==="SyntaxError"?enhanceError$3(L,this,"E_JSON_PARSE"):L}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(B){return B>=200&&B<300}};defaults$7.headers={common:{Accept:"application/json, text/plain, */*"}};utils$o.forEach(["delete","get","head"],function(B){defaults$7.headers[B]={}});utils$o.forEach(["post","put","patch"],function(B){defaults$7.headers[B]=utils$o.merge(DEFAULT_CONTENT_TYPE$1)});var defaults_1$1=defaults$7,utils$n=utils$w,defaults$6=defaults_1$1,transformData$3=function(B,w,D){var F=this||defaults$6;return utils$n.forEach(D,function(L){B=L.call(F,B,w)}),B},isCancel$3=function(B){return!!(B&&B.__CANCEL__)},utils$m=utils$w,transformData$2=transformData$3,isCancel$2=isCancel$3,defaults$5=defaults_1$1;function throwIfCancellationRequested$1(Q){Q.cancelToken&&Q.cancelToken.throwIfRequested()}var dispatchRequest$3=function(B){throwIfCancellationRequested$1(B),B.headers=B.headers||{},B.data=transformData$2.call(B,B.data,B.headers,B.transformRequest),B.headers=utils$m.merge(B.headers.common||{},B.headers[B.method]||{},B.headers),utils$m.forEach(["delete","get","head","post","put","patch","common"],function(F){delete B.headers[F]});var w=B.adapter||defaults$5.adapter;return w(B).then(function(F){return throwIfCancellationRequested$1(B),F.data=transformData$2.call(B,F.data,F.headers,B.transformResponse),F},function(F){return isCancel$2(F)||(throwIfCancellationRequested$1(B),F&&F.response&&(F.response.data=transformData$2.call(B,F.response.data,F.response.headers,B.transformResponse))),Promise.reject(F)})},utils$l=utils$w,mergeConfig$5=function(B,w){w=w||{};var D={},F=["url","method","data"],O=["headers","auth","proxy","params"],L=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],U=["validateStatus"];function G(X,te){return utils$l.isPlainObject(X)&&utils$l.isPlainObject(te)?utils$l.merge(X,te):utils$l.isPlainObject(te)?utils$l.merge({},te):utils$l.isArray(te)?te.slice():te}function q(X){utils$l.isUndefined(w[X])?utils$l.isUndefined(B[X])||(D[X]=G(void 0,B[X])):D[X]=G(B[X],w[X])}utils$l.forEach(F,function(te){utils$l.isUndefined(w[te])||(D[te]=G(void 0,w[te]))}),utils$l.forEach(O,q),utils$l.forEach(L,function(te){utils$l.isUndefined(w[te])?utils$l.isUndefined(B[te])||(D[te]=G(void 0,B[te])):D[te]=G(void 0,w[te])}),utils$l.forEach(U,function(te){te in w?D[te]=G(B[te],w[te]):te in B&&(D[te]=G(void 0,B[te]))});var Y=F.concat(O).concat(L).concat(U),W=Object.keys(B).concat(Object.keys(w)).filter(function(te){return Y.indexOf(te)===-1});return utils$l.forEach(W,q),D};const name$1="axios",version$1="0.21.4",description$1="Promise based HTTP client for the browser and node.js",main$1="index.js",scripts$1={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository$1={type:"git",url:"https://github.com/axios/axios.git"},keywords$1=["xhr","http","ajax","promise","node"],author$1="Matt Zabriskie",license$1="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies$1={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser$1={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies$1={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0$1={name:name$1,version:version$1,description:description$1,main:main$1,scripts:scripts$1,repository:repository$1,keywords:keywords$1,author:author$1,license:license$1,bugs,homepage,devDependencies:devDependencies$1,browser:browser$1,jsdelivr,unpkg,typings,dependencies:dependencies$1,bundlesize},pkg=require$$0$1,validators$3={};["object","boolean","number","function","string","symbol"].forEach(function(Q,B){validators$3[Q]=function(D){return typeof D===Q||"a"+(B<1?"n ":" ")+Q}});var deprecatedWarnings$1={},currentVerArr=pkg.version.split(".");function isOlderVersion(Q,B){for(var w=B?B.split("."):currentVerArr,D=Q.split("."),F=0;F<3;F++){if(w[F]>D[F])return!0;if(w[F]<D[F])return!1}return!1}validators$3.transitional=function(B,w,D){var F=w&&isOlderVersion(w);function O(L,U){return"[Axios v"+pkg.version+"] Transitional option '"+L+"'"+U+(D?". "+D:"")}return function(L,U,G){if(B===!1)throw new Error(O(U," has been removed in "+w));return F&&!deprecatedWarnings$1[U]&&(deprecatedWarnings$1[U]=!0,console.warn(O(U," has been deprecated since v"+w+" and will be removed in the near future"))),B?B(L,U,G):!0}};function assertOptions$1(Q,B,w){if(typeof Q!="object")throw new TypeError("options must be an object");for(var D=Object.keys(Q),F=D.length;F-- >0;){var O=D[F],L=B[O];if(L){var U=Q[O],G=U===void 0||L(U,O,Q);if(G!==!0)throw new TypeError("option "+O+" must be "+G);continue}if(w!==!0)throw Error("Unknown option "+O)}}var validator$3={isOlderVersion,assertOptions:assertOptions$1,validators:validators$3},utils$k=utils$w,buildURL$3=buildURL$5,InterceptorManager$2=InterceptorManager_1$1,dispatchRequest$2=dispatchRequest$3,mergeConfig$4=mergeConfig$5,validator$2=validator$3,validators$2=validator$2.validators;function Axios$3(Q){this.defaults=Q,this.interceptors={request:new InterceptorManager$2,response:new InterceptorManager$2}}Axios$3.prototype.request=function(B){typeof B=="string"?(B=arguments[1]||{},B.url=arguments[0]):B=B||{},B=mergeConfig$4(this.defaults,B),B.method?B.method=B.method.toLowerCase():this.defaults.method?B.method=this.defaults.method.toLowerCase():B.method="get";var w=B.transitional;w!==void 0&&validator$2.assertOptions(w,{silentJSONParsing:validators$2.transitional(validators$2.boolean,"1.0.0"),forcedJSONParsing:validators$2.transitional(validators$2.boolean,"1.0.0"),clarifyTimeoutError:validators$2.transitional(validators$2.boolean,"1.0.0")},!1);var D=[],F=!0;this.interceptors.request.forEach(function(X){typeof X.runWhen=="function"&&X.runWhen(B)===!1||(F=F&&X.synchronous,D.unshift(X.fulfilled,X.rejected))});var O=[];this.interceptors.response.forEach(function(X){O.push(X.fulfilled,X.rejected)});var L;if(!F){var U=[dispatchRequest$2,void 0];for(Array.prototype.unshift.apply(U,D),U=U.concat(O),L=Promise.resolve(B);U.length;)L=L.then(U.shift(),U.shift());return L}for(var G=B;D.length;){var q=D.shift(),Y=D.shift();try{G=q(G)}catch(W){Y(W);break}}try{L=dispatchRequest$2(G)}catch(W){return Promise.reject(W)}for(;O.length;)L=L.then(O.shift(),O.shift());return L};Axios$3.prototype.getUri=function(B){return B=mergeConfig$4(this.defaults,B),buildURL$3(B.url,B.params,B.paramsSerializer).replace(/^\?/,"")};utils$k.forEach(["delete","get","head","options"],function(B){Axios$3.prototype[B]=function(w,D){return this.request(mergeConfig$4(D||{},{method:B,url:w,data:(D||{}).data}))}});utils$k.forEach(["post","put","patch"],function(B){Axios$3.prototype[B]=function(w,D,F){return this.request(mergeConfig$4(F||{},{method:B,url:w,data:D}))}});var Axios_1$1=Axios$3;function Cancel$5(Q){this.message=Q}Cancel$5.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$5.prototype.__CANCEL__=!0;var Cancel_1$1=Cancel$5,Cancel$4=Cancel_1$1;function CancelToken$1(Q){if(typeof Q!="function")throw new TypeError("executor must be a function.");var B;this.promise=new Promise(function(F){B=F});var w=this;Q(function(F){w.reason||(w.reason=new Cancel$4(F),B(w.reason))})}CancelToken$1.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken$1.source=function(){var B,w=new CancelToken$1(function(F){B=F});return{token:w,cancel:B}};var CancelToken_1$1=CancelToken$1,spread$1=function(B){return function(D){return B.apply(null,D)}},isAxiosError$1=function(B){return typeof B=="object"&&B.isAxiosError===!0},utils$j=utils$w,bind$3=bind$5,Axios$2=Axios_1$1,mergeConfig$3=mergeConfig$5,defaults$4=defaults_1$1;function createInstance$1(Q){var B=new Axios$2(Q),w=bind$3(Axios$2.prototype.request,B);return utils$j.extend(w,Axios$2.prototype,B),utils$j.extend(w,B),w}var axios$5=createInstance$1(defaults$4);axios$5.Axios=Axios$2;axios$5.create=function(B){return createInstance$1(mergeConfig$3(axios$5.defaults,B))};axios$5.Cancel=Cancel_1$1;axios$5.CancelToken=CancelToken_1$1;axios$5.isCancel=isCancel$3;axios$5.all=function(B){return Promise.all(B)};axios$5.spread=spread$1;axios$5.isAxiosError=isAxiosError$1;axios$6.exports=axios$5;axios$6.exports.default=axios$5;var axios$4=axios$6.exports,_objectWithoutProperties=objectWithoutProperties.exports,_toConsumableArray=toConsumableArray.exports,_typeof$1=_typeof$2.exports,_defineProperty=defineProperty.exports,_classCallCheck=classCallCheck.exports,_createClass=createClass.exports,_regeneratorRuntime=regenerator,_asyncToGenerator=asyncToGenerator.exports,axios$3=axios$4;function _interopDefaultLegacy(Q){return Q&&typeof Q=="object"&&"default"in Q?Q:{default:Q}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof$1),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios$3),Storage=function(){function Q(B){_classCallCheck__default.default(this,Q),this.commerce=B}return _createClass__default.default(Q,[{key:"set",value:function(B,w,D){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;var F,O="";if(F=this.commerce.options.config&&this.commerce.options.config.cookie_path!==void 0?this.commerce.options.config.cookie_path:"/",D){var L=new Date;L.setTime(L.getTime()+24*D*60*60*1e3),O="; expires="+L.toUTCString()}return document.cookie=B+"="+w+O+"; path="+F}},{key:"get",value:function(B){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;B+="=";for(var w=0,D=Array.from(document.cookie.split(";"));w<D.length;w++){for(var F=D[w];F.charAt(0)===" ";)F=F.substring(1,F.length);if(F.indexOf(B)===0)return F.substring(B.length,F.length)}return null}},{key:"remove",value:function(B){return this.set(B,"",-1)}}]),Q}();function ownKeys(Q,B){var w=Object.keys(Q);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(Q);B&&(D=D.filter(function(F){return Object.getOwnPropertyDescriptor(Q,F).enumerable})),w.push.apply(w,D)}return w}function _objectSpread(Q){for(var B=1;B<arguments.length;B++){var w=arguments[B]!=null?arguments[B]:{};B%2?ownKeys(w,!0).forEach(function(D){_defineProperty__default.default(Q,D,w[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Q,Object.getOwnPropertyDescriptors(w)):ownKeys(w).forEach(function(D){Object.defineProperty(Q,D,Object.getOwnPropertyDescriptor(w,D))})}return Q}var Cart=function(){function Q(w){_classCallCheck__default.default(this,Q),this.commerce=w,this.cartId=null}var B;return _createClass__default.default(Q,[{key:"refresh",value:function(){var w=this;return this.commerce.request("carts").then(function(D){var F=D.id;return w.commerce.storage.set("commercejs_cart_id",F,w.commerce.options.cartLifetime),w.cartId=F,D})}},{key:"id",value:function(){if(this.cartId!==null)return this.cartId;var w=this.commerce.storage.get("commercejs_cart_id");return typeof w=="string"&&w.length?w:null}},{key:"request",value:(B=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function w(){var D,F,O,L,U,G=this,q=arguments;return _regeneratorRuntime__default.default.wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(D=q.length>0&&q[0]!==void 0?q[0]:"",F=q.length>1&&q[1]!==void 0?q[1]:"get",O=q.length>2&&q[2]!==void 0?q[2]:null,L=q.length>3&&q[3]!==void 0&&q[3],U=typeof D=="string"&&D.length?"/".concat(D):"",this.id()){Y.next=8;break}return Y.next=8,this.refresh();case 8:return Y.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(U),F,O,L).catch(function(W){if(W.statusCode&&W.statusCode===404)return G.refresh().then(function(){return G.commerce.request("carts/".concat(G.id()).concat(U),F,O,L)});throw W}));case 9:case"end":return Y.stop()}},w,this)})),function(){return B.apply(this,arguments)})},{key:"add",value:function(w){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,O={};if(typeof F=="string"&&F.startsWith("vrnt"))O.variant_id=F;else if(F&&_typeof__default.default(F)==="object"){var L=Object.keys(F).every(function(q){return q.startsWith("vgrp")}),U=Object.values(F).every(function(q){return q.startsWith("optn")});if(!L||!U)throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");O.options=F}else if(F)throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");var G=_objectSpread({id:_typeof__default.default(w)==="object"?w.id:w,quantity:D},O);return this.request("","post",G)}},{key:"retrieve",value:function(){var w=this,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return D&&(this.cartId=D),this.request().then(function(F){return w.cartId=F&&F.id||null,F})}},{key:"checkQuantity",value:function(w,D){return this.commerce.request("products/".concat(w)).then(function(F){return D<=F.quantity})}},{key:"remove",value:function(w){return this.request("items/".concat(w),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(w,D){return this.request("items/".concat(w),"put",D)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),Q}(),Categories=function(){function Q(B){_classCallCheck__default.default(this,Q),this.commerce=B}return _createClass__default.default(Q,[{key:"list",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return typeof B=="function"?this.commerce.request("categories"):this.commerce.request("categories","get",B)}},{key:"retrieve",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("categories/".concat(B),"get",w)}}]),Q}(),Checkout=function(){function Checkout(Q){_classCallCheck__default.default(this,Checkout),this.commerce=Q}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then(function(data){return eval(data.sift_js)})}},{key:"generateToken",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q),"get",B)}},{key:"generateTokenFrom",value:function(Q,B){if(!["product_id","cart","permalink"].includes(Q))throw new Error('Cannot generate a token with unknown "'.concat(Q,'" type'));return this.generateToken(B,{type:Q})}},{key:"capture",value:function(Q,B){var w=this;return this.commerce.request("checkouts/".concat(Q),"post",B).then(function(D){return w.commerce.cart.refresh(),D})}},{key:"receipt",value:function(Q){return this.commerce.request("checkouts/".concat(Q,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q,"/check/pay_what_you_want"),"get",B)}},{key:"fields",value:function(Q){return this.commerce.request("checkouts/".concat(Q,"/fields"))}},{key:"setTaxZone",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q,"/helper/set_tax_zone"),"get",B)}},{key:"getLocationFromIP",value:function(Q){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=B&&B.length?"?ip_address=".concat(B):"";return this.commerce.request("checkouts/".concat(Q,"/helper/location_from_ip").concat(w))}},{key:"isFree",value:function(Q){return this.commerce.request("checkouts/".concat(Q,"/check/is_free"))}},{key:"checkVariant",value:function(Q,B,w){return this.commerce.request("checkouts/".concat(Q,"/check/").concat(B,"/variant"),"get",w)}},{key:"checkDiscount",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q,"/check/discount"),"get",B)}},{key:"checkShippingOption",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q,"/check/shipping"),"get",B)}},{key:"getShippingOptions",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q,"/helper/shipping_options"),"get",B)}},{key:"checkQuantity",value:function(Q,B,w){return this.commerce.request("checkouts/".concat(Q,"/check/").concat(B,"/quantity"),"get",w)}},{key:"helperValidation",value:function(Q){return this.commerce.request("checkouts/".concat(Q,"/helper/validation"))}},{key:"getLive",value:function(Q){return this.commerce.request("checkouts/".concat(Q,"/live"))}},{key:"getToken",value:function(Q){return this.commerce.request("checkouts/tokens/".concat(Q))}},{key:"checkGiftcard",value:function(Q,B){return this.commerce.request("checkouts/".concat(Q,"/check/giftcard"),"get",B)}}]),Checkout}();function ownKeys$1(Q,B){var w=Object.keys(Q);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(Q);B&&(D=D.filter(function(F){return Object.getOwnPropertyDescriptor(Q,F).enumerable})),w.push.apply(w,D)}return w}function _objectSpread$1(Q){for(var B=1;B<arguments.length;B++){var w=arguments[B]!=null?arguments[B]:{};B%2?ownKeys$1(w,!0).forEach(function(D){_defineProperty__default.default(Q,D,w[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Q,Object.getOwnPropertyDescriptors(w)):ownKeys$1(w).forEach(function(D){Object.defineProperty(Q,D,Object.getOwnPropertyDescriptor(w,D))})}return Q}var Customer=function(){function Q(B){_classCallCheck__default.default(this,Q),this.commerce=B,this.data={}}return _createClass__default.default(Q,[{key:"login",value:function(B,w){return this.commerce.request("customers/email-token","post",{email:B,base_url:w})}},{key:"getToken",value:function(B){var w=this,D=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:B}).then(function(F){return D&&(F.customer_id||F.jwt)&&(w.data={id:F.customer_id||null,token:F.jwt||null},window.localStorage.setItem("commercejs_customer_id",w.data.id),window.localStorage.setItem("commercejs_customer_token",w.data.token)),F})}},{key:"update",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(w,D),this._request("customers/".concat(w||this.id()),"PUT",B,{},D)}},{key:"getOrders",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this._assertArgsProvided(B,w);var F=_objectSpread$1({sortBy:"created_at",sortDirection:"desc"},D);return this._request("customers/".concat(B||this.id(),"/orders"),"get",F,{},w)}},{key:"getOrder",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(w,D),this._request("customers/".concat(w||this.id(),"/orders/").concat(B),"get",{},{},D)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return this.id()!==null&&this.token()!==null}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(B){if(this.data[B]&&this.data[B].length)return this.data[B];var w=window.localStorage.getItem("commercejs_customer_".concat(B));return typeof w=="string"&&w.length?w:null}},{key:"_request",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},O=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,L=O||this.token();return this.commerce.request(B,w,D,_objectSpread$1({"X-Authorization":void 0,Authorization:"Bearer ".concat(L)},F))}},{key:"_assertArgsProvided",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(B===null&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(w===null&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),Q}(),Merchants=function(){function Q(B){_classCallCheck__default.default(this,Q),this.commerce=B}return _createClass__default.default(Q,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),Q}(),Products=function(){function Q(B){_classCallCheck__default.default(this,Q),this.commerce=B}return _createClass__default.default(Q,[{key:"list",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.commerce.request("products","get",B)}},{key:"retrieve",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("products/".concat(B),"get",w)}},{key:"getVariants",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.commerce.request("products/".concat(B,"/variants"),"get",w)}},{key:"getVariant",value:function(B,w){return this.commerce.request("products/".concat(B,"/variants/").concat(w),"get")}}]),Q}(),Services=function(){function Q(B){_classCallCheck__default.default(this,Q),this.commerce=B}return _createClass__default.default(Q,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(B){return this.commerce.request("services/locale/".concat(B,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(B,w){return this.commerce.request("services/locale/".concat(B,"/countries/").concat(w,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(B){return this.commerce.request("services/locale/".concat(B,"/subdivisions"))}}]),Q}(),Features={Cart,Categories,Checkout,Customer,Merchants,Products,Services},consoleHelper=function(){var Q,B,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"black",D=arguments.length>1?arguments[1]:void 0,F=arguments.length>2?arguments[2]:void 0,O=arguments.length>3?arguments[3]:void 0,L=!1;switch(w){case"success":w="#488f5a",Q="\u2705   ";break;case"info":w="DodgerBlue",Q="";break;case"error":w="rgba(244, 67, 54, 1)",O.error.type==="validation"||O.error.type==="unprocessable_entity"?(Q="\u{1F6AB} Validation/missing fields",D=""):Q="\u274C HTTP ERROR ",L=!0;break;case"warning":w="rgba(208, 154, 35, 1)",Q="\u26A0\uFE0F  "}return L===!0?(console.log("%c"+Q+D,"color:"+w+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),_typeof__default.default(O.error.errors)==="object"?(B=O.error.errors,void Object.keys(B).forEach(function(U,G){Object.values(B[U]).forEach(function(q){console.log("%c"+U+": %c"+q,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")})})):console.log("%c"+O.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")):_typeof__default.default(w)==="object"?(console.log("%c"+D,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(w)):(console.log("%c"+Q+D,"color:"+w+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),void(F&&console.log("%c"+F,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")))},debuggerOnNotice=function(){typeof window!="undefined"&&(console.log(`%c\r
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
`,"text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px"))};function ownKeys$2(Q,B){var w=Object.keys(Q);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(Q);B&&(D=D.filter(function(F){return Object.getOwnPropertyDescriptor(Q,F).enumerable})),w.push.apply(w,D)}return w}function _objectSpread$2(Q){for(var B=1;B<arguments.length;B++){var w=arguments[B]!=null?arguments[B]:{};B%2?ownKeys$2(w,!0).forEach(function(D){_defineProperty__default.default(Q,D,w[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Q,Object.getOwnPropertyDescriptors(w)):ownKeys$2(w).forEach(function(D){Object.defineProperty(Q,D,Object.getOwnPropertyDescriptor(w,D))})}return Q}var defaultEventCallback=function(Q){var B=new CustomEvent("Commercejs.".concat(Q),{bubbles:!1,cancelable:!1});return window.dispatchEvent(B)},Commerce=function(){function Q(B){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1],D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_classCallCheck__default.default(this,Q),this.options=_objectSpread$2(_objectSpread$2({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback,disableStorage:!1,cartLifetime:30,allowSecretKey:!1},D),{},{apiKey:B,debug:w}),typeof B!="string"||B.length===0)throw new Error("\u26A0\uFE0F Invalid public key given to Commerce.js client");if(!D.allowSecretKey&&B.toLowerCase().substring(0,3)==="sk_")throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");if(this.options.cartLifetime<=0||this.options.cartLifetime>30)throw new Error("cartLifetime configuration option must be between 1 and 30 days");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),w&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(Q,[{key:"error",value:function(B){if(this.consoleHelper&&this.options.debug){var w=B.response,D="[".concat(w.status,"] Type: ").concat(w.statusText),F=typeof w.data=="string"?w.data:w.statusText;return this.consoleHelper("error",D,F,w.data)}}},{key:"request",value:function(B){var w=this,D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},L=arguments.length>4&&arguments[4]!==void 0&&arguments[4],U={"X-Authorization":this.options.apiKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},G=D==="get"?F:null,q=D==="get"?null:F,Y=this.options.timeoutMs||6e4,W=this.options.axiosConfig||{},X=this.options.url;X.substring(X.length-1)!=="/"&&(X+="/");var te=axios__default.default(_objectSpread$2(_objectSpread$2({url:B,method:D,baseURL:"".concat(X).concat(this.options.version,"/"),params:G,data:q,timeout:Y},W),{},{headers:_objectSpread$2(_objectSpread$2(_objectSpread$2({},U),W.headers),O)}));if(L)return te;var ae=this.options.eventCallback;return te.then(function(ie){if(w.consoleHelper&&w.options.debug&&_typeof__default.default(ie.data._console)==="object"&&w.consoleHelper.apply(w,_toConsumableArray__default.default(ie.data._console)),_typeof__default.default(ie.data)!=="object"||Array.isArray(ie.data))return ie.data;var ce=ie.data,he=ce._event,pe=_objectWithoutProperties__default.default(ce,["_event"]);return typeof he=="string"&&typeof ae=="function"&&ae(he),pe}).catch(function(ie){throw w.error(ie),ie.response?{message:"Unsuccessful response (".concat(ie.response.status,": ").concat(ie.response.statusText,") received"),statusCode:ie.response.status,statusText:ie.response.statusText,data:ie.response.data,originalError:ie}:ie})}}]),Q}(),lib=Commerce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=Q=>B=>typeof B=="function"?((w,D)=>(customElements.define(w,D),D))(Q,B):((w,D)=>{const{kind:F,elements:O}=D;return{kind:F,elements:O,finisher(L){customElements.define(w,L)}}})(Q,B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$3=(Q,B)=>B.kind==="method"&&B.descriptor&&!("value"in B.descriptor)?{...B,finisher(w){w.createProperty(B.key,Q)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:B.key,initializer(){typeof B.initializer=="function"&&(this[B.key]=B.initializer.call(this))},finisher(w){w.createProperty(B.key,Q)}};function e$3(Q){return(B,w)=>w!==void 0?((D,F,O)=>{F.constructor.createProperty(O,D)})(Q,B,w):i$3(Q,B)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;((n$4=window.HTMLSlotElement)===null||n$4===void 0?void 0:n$4.prototype.assignedElements)!=null;var configurable=!0;function bound(Q,B,w){if(typeof(w==null?void 0:w.value)!="function")throw new TypeError(`Only methods can be decorated with @bound. <${B!=null?B:Q.name}> is not a method!`);return{configurable,get(){const D=w.value.bind(this);return Object.defineProperty(this,B,{value:D,configurable,writable:!0}),D}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=window,e$2=t$1.ShadowRoot&&(t$1.ShadyCSS===void 0||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(B,w,D){if(this._$cssResult$=!0,D!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=B,this.t=w}get styleSheet(){let B=this.o;const w=this.t;if(e$2&&B===void 0){const D=w!==void 0&&w.length===1;D&&(B=n$3.get(w)),B===void 0&&((this.o=B=new CSSStyleSheet).replaceSync(this.cssText),D&&n$3.set(w,B))}return B}toString(){return this.cssText}}const r$2=Q=>new o$3(typeof Q=="string"?Q:Q+"",void 0,s$3),i$2=(Q,...B)=>{const w=Q.length===1?Q[0]:B.reduce((D,F,O)=>D+(L=>{if(L._$cssResult$===!0)return L.cssText;if(typeof L=="number")return L;throw Error("Value passed to 'css' function must be a 'css' function result: "+L+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(F)+Q[O+1],Q[0]);return new o$3(w,Q,s$3)},S$1=(Q,B)=>{e$2?Q.adoptedStyleSheets=B.map(w=>w instanceof CSSStyleSheet?w:w.styleSheet):B.forEach(w=>{const D=document.createElement("style"),F=t$1.litNonce;F!==void 0&&D.setAttribute("nonce",F),D.textContent=w.cssText,Q.appendChild(D)})},c$2=e$2?Q=>Q:Q=>Q instanceof CSSStyleSheet?(B=>{let w="";for(const D of B.cssRules)w+=D.cssText;return r$2(w)})(Q):Q;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(Q,B){switch(B){case Boolean:Q=Q?h$1:null;break;case Object:case Array:Q=Q==null?Q:JSON.stringify(Q)}return Q},fromAttribute(Q,B){let w=Q;switch(B){case Boolean:w=Q!==null;break;case Number:w=Q===null?null:Number(Q);break;case Object:case Array:try{w=JSON.parse(Q)}catch{w=null}}return w}},a$1=(Q,B)=>B!==Q&&(B==B||Q==Q),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(B){var w;this.finalize(),((w=this.h)!==null&&w!==void 0?w:this.h=[]).push(B)}static get observedAttributes(){this.finalize();const B=[];return this.elementProperties.forEach((w,D)=>{const F=this._$Ep(D,w);F!==void 0&&(this._$Ev.set(F,D),B.push(F))}),B}static createProperty(B,w=l$3){if(w.state&&(w.attribute=!1),this.finalize(),this.elementProperties.set(B,w),!w.noAccessor&&!this.prototype.hasOwnProperty(B)){const D=typeof B=="symbol"?Symbol():"__"+B,F=this.getPropertyDescriptor(B,D,w);F!==void 0&&Object.defineProperty(this.prototype,B,F)}}static getPropertyDescriptor(B,w,D){return{get(){return this[w]},set(F){const O=this[B];this[w]=F,this.requestUpdate(B,O,D)},configurable:!0,enumerable:!0}}static getPropertyOptions(B){return this.elementProperties.get(B)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const B=Object.getPrototypeOf(this);if(B.finalize(),B.h!==void 0&&(this.h=[...B.h]),this.elementProperties=new Map(B.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const w=this.properties,D=[...Object.getOwnPropertyNames(w),...Object.getOwnPropertySymbols(w)];for(const F of D)this.createProperty(F,w[F])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(B){const w=[];if(Array.isArray(B)){const D=new Set(B.flat(1/0).reverse());for(const F of D)w.unshift(c$2(F))}else B!==void 0&&w.push(c$2(B));return w}static _$Ep(B,w){const D=w.attribute;return D===!1?void 0:typeof D=="string"?D:typeof B=="string"?B.toLowerCase():void 0}u(){var B;this._$E_=new Promise(w=>this.enableUpdating=w),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(B=this.constructor.h)===null||B===void 0||B.forEach(w=>w(this))}addController(B){var w,D;((w=this._$ES)!==null&&w!==void 0?w:this._$ES=[]).push(B),this.renderRoot!==void 0&&this.isConnected&&((D=B.hostConnected)===null||D===void 0||D.call(B))}removeController(B){var w;(w=this._$ES)===null||w===void 0||w.splice(this._$ES.indexOf(B)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((B,w)=>{this.hasOwnProperty(w)&&(this._$Ei.set(w,this[w]),delete this[w])})}createRenderRoot(){var B;const w=(B=this.shadowRoot)!==null&&B!==void 0?B:this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){var B;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(B=this._$ES)===null||B===void 0||B.forEach(w=>{var D;return(D=w.hostConnected)===null||D===void 0?void 0:D.call(w)})}enableUpdating(B){}disconnectedCallback(){var B;(B=this._$ES)===null||B===void 0||B.forEach(w=>{var D;return(D=w.hostDisconnected)===null||D===void 0?void 0:D.call(w)})}attributeChangedCallback(B,w,D){this._$AK(B,D)}_$EO(B,w,D=l$3){var F;const O=this.constructor._$Ep(B,D);if(O!==void 0&&D.reflect===!0){const L=(((F=D.converter)===null||F===void 0?void 0:F.toAttribute)!==void 0?D.converter:n$2).toAttribute(w,D.type);this._$El=B,L==null?this.removeAttribute(O):this.setAttribute(O,L),this._$El=null}}_$AK(B,w){var D;const F=this.constructor,O=F._$Ev.get(B);if(O!==void 0&&this._$El!==O){const L=F.getPropertyOptions(O),U=typeof L.converter=="function"?{fromAttribute:L.converter}:((D=L.converter)===null||D===void 0?void 0:D.fromAttribute)!==void 0?L.converter:n$2;this._$El=O,this[O]=U.fromAttribute(w,L.type),this._$El=null}}requestUpdate(B,w,D){let F=!0;B!==void 0&&(((D=D||this.constructor.getPropertyOptions(B)).hasChanged||a$1)(this[B],w)?(this._$AL.has(B)||this._$AL.set(B,w),D.reflect===!0&&this._$El!==B&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(B,D))):F=!1),!this.isUpdatePending&&F&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(w){Promise.reject(w)}const B=this.scheduleUpdate();return B!=null&&await B,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var B;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((F,O)=>this[O]=F),this._$Ei=void 0);let w=!1;const D=this._$AL;try{w=this.shouldUpdate(D),w?(this.willUpdate(D),(B=this._$ES)===null||B===void 0||B.forEach(F=>{var O;return(O=F.hostUpdate)===null||O===void 0?void 0:O.call(F)}),this.update(D)):this._$Ek()}catch(F){throw w=!1,this._$Ek(),F}w&&this._$AE(D)}willUpdate(B){}_$AE(B){var w;(w=this._$ES)===null||w===void 0||w.forEach(D=>{var F;return(F=D.hostUpdated)===null||F===void 0?void 0:F.call(D)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(B)),this.updated(B)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(B){return!0}update(B){this._$EC!==void 0&&(this._$EC.forEach((w,D)=>this._$EO(D,this[D],w)),this._$EC=void 0),this._$Ek()}updated(B){}firstUpdated(B){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},o$2==null||o$2({ReactiveElement:d$1}),((s$2=e$1.reactiveElementVersions)!==null&&s$2!==void 0?s$2:e$1.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t;const i$1=window,s$1=i$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:Q=>Q}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$2=`<${n$1}>`,h=document,r=(Q="")=>h.createComment(Q),d=Q=>Q===null||typeof Q!="object"&&typeof Q!="function",u=Array.isArray,c$1=Q=>u(Q)||typeof(Q==null?void 0:Q[Symbol.iterator])=="function",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=Q=>(B,...w)=>({_$litType$:Q,strings:B,values:w}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(Q,B)=>{const w=Q.length-1,D=[];let F,O=B===2?"<svg>":"",L=v;for(let G=0;G<w;G++){const q=Q[G];let Y,W,X=-1,te=0;for(;te<q.length&&(L.lastIndex=te,W=L.exec(q),W!==null);)te=L.lastIndex,L===v?W[1]==="!--"?L=a:W[1]!==void 0?L=f:W[2]!==void 0?($.test(W[2])&&(F=RegExp("</"+W[2],"g")),L=_):W[3]!==void 0&&(L=_):L===_?W[0]===">"?(L=F!=null?F:v,X=-1):W[1]===void 0?X=-2:(X=L.lastIndex-W[2].length,Y=W[1],L=W[3]===void 0?_:W[3]==='"'?p:m):L===p||L===m?L=_:L===a||L===f?L=v:(L=_,F=void 0);const ae=L===_&&Q[G+1].startsWith("/>")?" ":"";O+=L===v?q+l$2:X>=0?(D.push(Y),q.slice(0,X)+"$lit$"+q.slice(X)+o$1+ae):q+o$1+(X===-2?(D.push(void 0),G):ae)}const U=O+(Q[w]||"<?>")+(B===2?"</svg>":"");if(!Array.isArray(Q)||!Q.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e!==void 0?e.createHTML(U):U,D]};class C{constructor({strings:B,_$litType$:w},D){let F;this.parts=[];let O=0,L=0;const U=B.length-1,G=this.parts,[q,Y]=E(B,w);if(this.el=C.createElement(q,D),A.currentNode=this.el.content,w===2){const W=this.el.content,X=W.firstChild;X.remove(),W.append(...X.childNodes)}for(;(F=A.nextNode())!==null&&G.length<U;){if(F.nodeType===1){if(F.hasAttributes()){const W=[];for(const X of F.getAttributeNames())if(X.endsWith("$lit$")||X.startsWith(o$1)){const te=Y[L++];if(W.push(X),te!==void 0){const ae=F.getAttribute(te.toLowerCase()+"$lit$").split(o$1),ie=/([.?@])?(.*)/.exec(te);G.push({type:1,index:O,name:ie[2],strings:ae,ctor:ie[1]==="."?M:ie[1]==="?"?k:ie[1]==="@"?H:S})}else G.push({type:6,index:O})}for(const X of W)F.removeAttribute(X)}if($.test(F.tagName)){const W=F.textContent.split(o$1),X=W.length-1;if(X>0){F.textContent=s$1?s$1.emptyScript:"";for(let te=0;te<X;te++)F.append(W[te],r()),A.nextNode(),G.push({type:2,index:++O});F.append(W[X],r())}}}else if(F.nodeType===8)if(F.data===n$1)G.push({type:2,index:O});else{let W=-1;for(;(W=F.data.indexOf(o$1,W+1))!==-1;)G.push({type:7,index:O}),W+=o$1.length-1}O++}}static createElement(B,w){const D=h.createElement("template");return D.innerHTML=B,D}}function P(Q,B,w=Q,D){var F,O,L,U;if(B===x)return B;let G=D!==void 0?(F=w._$Co)===null||F===void 0?void 0:F[D]:w._$Cl;const q=d(B)?void 0:B._$litDirective$;return(G==null?void 0:G.constructor)!==q&&((O=G==null?void 0:G._$AO)===null||O===void 0||O.call(G,!1),q===void 0?G=void 0:(G=new q(Q),G._$AT(Q,w,D)),D!==void 0?((L=(U=w)._$Co)!==null&&L!==void 0?L:U._$Co=[])[D]=G:w._$Cl=G),G!==void 0&&(B=P(Q,G._$AS(Q,B.values),G,D)),B}class V{constructor(B,w){this.u=[],this._$AN=void 0,this._$AD=B,this._$AM=w}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(B){var w;const{el:{content:D},parts:F}=this._$AD,O=((w=B==null?void 0:B.creationScope)!==null&&w!==void 0?w:h).importNode(D,!0);A.currentNode=O;let L=A.nextNode(),U=0,G=0,q=F[0];for(;q!==void 0;){if(U===q.index){let Y;q.type===2?Y=new N(L,L.nextSibling,this,B):q.type===1?Y=new q.ctor(L,q.name,q.strings,this,B):q.type===6&&(Y=new I(L,this,B)),this.u.push(Y),q=F[++G]}U!==(q==null?void 0:q.index)&&(L=A.nextNode(),U++)}return O}p(B){let w=0;for(const D of this.u)D!==void 0&&(D.strings!==void 0?(D._$AI(B,D,w),w+=D.strings.length-2):D._$AI(B[w])),w++}}class N{constructor(B,w,D,F){var O;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=B,this._$AB=w,this._$AM=D,this.options=F,this._$Cm=(O=F==null?void 0:F.isConnected)===null||O===void 0||O}get _$AU(){var B,w;return(w=(B=this._$AM)===null||B===void 0?void 0:B._$AU)!==null&&w!==void 0?w:this._$Cm}get parentNode(){let B=this._$AA.parentNode;const w=this._$AM;return w!==void 0&&B.nodeType===11&&(B=w.parentNode),B}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(B,w=this){B=P(this,B,w),d(B)?B===b||B==null||B===""?(this._$AH!==b&&this._$AR(),this._$AH=b):B!==this._$AH&&B!==x&&this.g(B):B._$litType$!==void 0?this.$(B):B.nodeType!==void 0?this.T(B):c$1(B)?this.k(B):this.g(B)}O(B,w=this._$AB){return this._$AA.parentNode.insertBefore(B,w)}T(B){this._$AH!==B&&(this._$AR(),this._$AH=this.O(B))}g(B){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=B:this.T(h.createTextNode(B)),this._$AH=B}$(B){var w;const{values:D,_$litType$:F}=B,O=typeof F=="number"?this._$AC(B):(F.el===void 0&&(F.el=C.createElement(F.h,this.options)),F);if(((w=this._$AH)===null||w===void 0?void 0:w._$AD)===O)this._$AH.p(D);else{const L=new V(O,this),U=L.v(this.options);L.p(D),this.T(U),this._$AH=L}}_$AC(B){let w=T.get(B.strings);return w===void 0&&T.set(B.strings,w=new C(B)),w}k(B){u(this._$AH)||(this._$AH=[],this._$AR());const w=this._$AH;let D,F=0;for(const O of B)F===w.length?w.push(D=new N(this.O(r()),this.O(r()),this,this.options)):D=w[F],D._$AI(O),F++;F<w.length&&(this._$AR(D&&D._$AB.nextSibling,F),w.length=F)}_$AR(B=this._$AA.nextSibling,w){var D;for((D=this._$AP)===null||D===void 0||D.call(this,!1,!0,w);B&&B!==this._$AB;){const F=B.nextSibling;B.remove(),B=F}}setConnected(B){var w;this._$AM===void 0&&(this._$Cm=B,(w=this._$AP)===null||w===void 0||w.call(this,B))}}class S{constructor(B,w,D,F,O){this.type=1,this._$AH=b,this._$AN=void 0,this.element=B,this.name=w,this._$AM=F,this.options=O,D.length>2||D[0]!==""||D[1]!==""?(this._$AH=Array(D.length-1).fill(new String),this.strings=D):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(B,w=this,D,F){const O=this.strings;let L=!1;if(O===void 0)B=P(this,B,w,0),L=!d(B)||B!==this._$AH&&B!==x,L&&(this._$AH=B);else{const U=B;let G,q;for(B=O[0],G=0;G<O.length-1;G++)q=P(this,U[D+G],w,G),q===x&&(q=this._$AH[G]),L||(L=!d(q)||q!==this._$AH[G]),q===b?B=b:B!==b&&(B+=(q!=null?q:"")+O[G+1]),this._$AH[G]=q}L&&!F&&this.j(B)}j(B){B===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,B!=null?B:"")}}class M extends S{constructor(){super(...arguments),this.type=3}j(B){this.element[this.name]=B===b?void 0:B}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4}j(B){B&&B!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class H extends S{constructor(B,w,D,F,O){super(B,w,D,F,O),this.type=5}_$AI(B,w=this){var D;if((B=(D=P(this,B,w,0))!==null&&D!==void 0?D:b)===x)return;const F=this._$AH,O=B===b&&F!==b||B.capture!==F.capture||B.once!==F.once||B.passive!==F.passive,L=B!==b&&(F===b||O);O&&this.element.removeEventListener(this.name,this,F),L&&this.element.addEventListener(this.name,this,B),this._$AH=B}handleEvent(B){var w,D;typeof this._$AH=="function"?this._$AH.call((D=(w=this.options)===null||w===void 0?void 0:w.host)!==null&&D!==void 0?D:this.element,B):this._$AH.handleEvent(B)}}class I{constructor(B,w,D){this.element=B,this.type=6,this._$AN=void 0,this._$AM=w,this.options=D}get _$AU(){return this._$AM._$AU}_$AI(B){P(this,B)}}const z=i$1.litHtmlPolyfillSupport;z==null||z(C,N),((t=i$1.litHtmlVersions)!==null&&t!==void 0?t:i$1.litHtmlVersions=[]).push("2.6.1");const Z=(Q,B,w)=>{var D,F;const O=(D=w==null?void 0:w.renderBefore)!==null&&D!==void 0?D:B;let L=O._$litPart$;if(L===void 0){const U=(F=w==null?void 0:w.renderBefore)!==null&&F!==void 0?F:null;O._$litPart$=L=new N(B.insertBefore(r(),U),U,void 0,w!=null?w:{})}return L._$AI(Q),L};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var B,w;const D=super.createRenderRoot();return(B=(w=this.renderOptions).renderBefore)!==null&&B!==void 0||(w.renderBefore=D.firstChild),D}update(B){const w=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(B),this._$Do=Z(w,this.renderRoot,this.renderOptions)}connectedCallback(){var B;super.connectedCallback(),(B=this._$Do)===null||B===void 0||B.setConnected(!0)}disconnectedCallback(){var B;super.disconnectedCallback(),(B=this._$Do)===null||B===void 0||B.setConnected(!1)}render(){return x}}s.finalized=!0,s._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;n==null||n({LitElement:s});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=Q=>Q!=null?Q:b,allCapitalLetterGroups=/[A-ZÀ-ÖÙ-Ý]+/g,allLowercaseWords=/[a-zà-öù-ý]+/g;function kebabCase(Q){const B=Q.replace(allCapitalLetterGroups,w).match(allLowercaseWords);return B?B.join("-"):"";function w(D){return" "+(D.length>2?D.slice(0,-1)+" "+D.slice(-1):D).toLowerCase()}}function createCache(){const Q={};return{has:B=>Object.hasOwnProperty.call(Q,B),get:B=>Q[B],set:(B,w)=>{Q[B]=w}}}function memoize(Q,B){const w=createCache();return(...D)=>{const F=Q(...D);return w.has(F)||w.set(F,B(...D)),w.get(F)}}var identity=Q=>Q,dash=memoize(identity,kebabCase),elem=Q=>B=>Q.includes(B),isRepresentation=elem(["paymentMethod","source","token"]);async function throwBadResponse(Q){const{ok:B,statusText:w}=Q;if(!B)throw new Error(w);return Q}function isReactiveElement(Q){return"addInitializer"in Q.constructor}var _ReadOnlyController=class{constructor(Q){if(this.host=Q,this.values=new Map,_ReadOnlyController.instances.has(Q))return _ReadOnlyController.instances.get(Q);Q.addController(this),_ReadOnlyController.instances.set(Q,this)}static for(Q){return new _ReadOnlyController(Q)}hostConnected(){}set(Q,B){const w=this.values.get(Q);this.values.set(Q,B),isReactiveElement(this.host)?this.host.requestUpdate(Q,w):this.host.requestUpdate()}},ReadOnlyController=_ReadOnlyController;ReadOnlyController.instances=new Map;function readonly(Q,B){const w=Q.constructor;w.addInitializer(D=>{const F=ReadOnlyController.for(D);Object.defineProperty(D.constructor.prototype,B,{enumerable:!0,configurable:!0,get(){return F.values.get(B)},set(O){F.values.has(B)||F.values.set(B,O)}}),w.createProperty(B,{...w.getPropertyOptions(B),noAccessor:!0})})}readonly.set=function(Q,B){const w=ReadOnlyController.for(Q);for(const[D,F]of Object.entries(B))w.set(D,F)};var ChangeEvent=class extends Event{constructor(Q,B,w,D){super(`${D!=null?D:Q.toLowerCase()}-changed`),this.key=Q,this.oldValue=B,this.value=w,this.detail={value:w}}},_NotifyController=class{constructor(Q){if(this.host=Q,this.cache=new Map,_NotifyController.instances.has(Q))return _NotifyController.instances.get(Q);Q.addController(this),_NotifyController.instances.set(Q,this)}hostUpdated(){var Q;for(const[B,w]of this.cache){const D=this.host[B],{attribute:F}=(Q=this.host.constructor.getPropertyOptions(B))!=null?Q:{},O=typeof F=="string"?F:null;this.cache.set(B,D),this.host.dispatchEvent(new ChangeEvent(B,w,D,O))}}},NotifyController=_NotifyController;NotifyController.instances=new Map;function notify(Q,B){Q.constructor.addInitializer(w=>{new NotifyController(w).cache.set(B,w[B])})}function wrap$1(Q){return(B,w,D)=>{const F=D.value;return D.value=Q(F),D}}var stripeMethod=wrap$1(function(Q){const{name:B}=Q;return async function(...w){if(!this.stripe)throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${B}.`);return Q.call(this,...w).then(this.handleResponse)}});function throwResponseError(Q){if(Q.error)throw Q.error;return Q}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(Q,B,w,D)=>{for(var F=D>1?void 0:D?__getOwnPropDesc(B,w):B,O=Q.length-1,L;O>=0;O--)(L=Q[O])&&(F=(D?L(B,w,F):L(F))||F);return D&&F&&__defProp(B,w,F),F},__accessCheck=(Q,B,w)=>{if(!B.has(Q))throw TypeError("Cannot "+w)},__privateGet=(Q,B,w)=>(__accessCheck(Q,B,"read from private field"),w?w.call(Q):B.get(Q)),__privateAdd=(Q,B,w)=>{if(B.has(Q))throw TypeError("Cannot add the same private member more than once");B instanceof WeakSet?B.add(Q):B.set(Q,w)},__privateSet=(Q,B,w,D)=>(__accessCheck(Q,B,"write to private field"),D?D.call(Q,w):B.set(Q,w),w);function getRandom(){return(Date.now()+Math.random()*1e3).toString(36).substr(0,8)}var BreadcrumbController=class{constructor(Q,B){var w,D;this.host=Q,this.options=B,this.initialized=!1,this.shadowHosts=[],this.host.addController(this),this.mountId=this.resetMountId(),this.slotName=(D=(w=this.options)==null?void 0:w.slotName)!=null?D:`breadcrumb-${getRandom()}`}get mount(){return document.getElementById(this.mountId)}hostUpdated(){var Q;!this.initialized&&((Q=this.options)==null?void 0:Q.autoInitialize)!==!1&&this.init()}hostDisconnected(){this.destroyMountPoints()}resetMountId(){var B,w;return`${(w=(B=this.options)==null?void 0:B.mountPrefix)!=null?w:this.host.localName}-mount-point-${getRandom()}`}createMountPoint(){const Q=document.createElement("div");return Q.id=this.mountId,Q.classList.add(`${this.host.tagName.toLowerCase()}-mount`),Q}createSlot(Q){const B=document.createElement("slot");return B.slot=Q,B.name=Q,B}appendTemplate(Q,B=this.createMountPoint()){return Q.appendChild(B),B}initMountPoints(){this.initShadowMountPoints()}destroyMountPoints(){for(const Q of this.shadowHosts)for(const B of Q.querySelectorAll(`[slot="${this.slotName}"][name="${this.slotName}"]`))B.remove();this.mount&&this.mount.remove(),this.mountId=this.resetMountId()}initShadowMountPoints(){let Q=this.host;for(this.shadowHosts=[this.host];Q=Q.getRootNode().host;)this.shadowHosts.push(Q);const{shadowHosts:B,slotName:w}=this,D=[...B],F=D.pop();if(!F.querySelector(`[slot="${w}"]`)){const L=document.createElement("div");L.slot=w,F.appendChild(L)}const O=F.querySelector(`[slot="${w}"]`);this.appendTemplate(O),D.forEach(L=>this.appendTemplate(L,this.createSlot(w)))}init(){this.destroyMountPoints(),this.initMountPoints(),this.initialized=!0}};function _typeof(Q){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(B){return typeof B}:_typeof=function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},_typeof(Q)}var V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function Q(){for(var B=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),w=0;w<B.length;w++){var D=B[w];if(!!V3_URL_REGEX.test(D.src))return D}return null},injectScript=function Q(B){var w=B&&!B.advancedFraudSignals?"?advancedFraudSignals=false":"",D=document.createElement("script");D.src="".concat(V3_URL).concat(w);var F=document.head||document.body;if(!F)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return F.appendChild(D),D},registerWrapper=function Q(B,w){!B||!B._registerWrapper||B._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:w})},stripePromise=null,loadScript=function Q(B){return stripePromise!==null||(stripePromise=new Promise(function(w,D){if(typeof window=="undefined"){w(null);return}if(window.Stripe&&B&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe){w(window.Stripe);return}try{var F=findScript();F&&B?console.warn(EXISTING_SCRIPT_MESSAGE):F||(F=injectScript(B)),F.addEventListener("load",function(){window.Stripe?w(window.Stripe):D(new Error("Stripe.js not available"))}),F.addEventListener("error",function(){D(new Error("Failed to load Stripe.js"))})}catch(O){D(O);return}})),stripePromise},initStripe=function Q(B,w,D){if(B===null)return null;var F=B.apply(void 0,w);return registerWrapper(F,D),F},validateLoadParams=function Q(B){var w=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(B),`
`);if(B===null||_typeof(B)!=="object")throw new Error(w);if(Object.keys(B).length===1&&typeof B.advancedFraudSignals=="boolean")return B;throw new Error(w)},loadParams,loadStripeCalled=!1,loadStripe=function Q(){for(var B=arguments.length,w=new Array(B),D=0;D<B;D++)w[D]=arguments[D];loadStripeCalled=!0;var F=Date.now();return loadScript(loadParams).then(function(O){return initStripe(O,w,F)})};loadStripe.setLoadParameters=function(Q){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(Q)};var StripeElementsError=class extends Error{constructor(Q,B){super(`<${Q}>: ${B}`),this.originalMessage=B}};function isStripeElementsError(Q){return!!Q&&Q instanceof StripeElementsError}var errorConverter={toAttribute:Q=>Q?isStripeElementsError(Q)?Q.originalMessage:Q.message||"":null},StripeBase=class extends s{constructor(){super(...arguments),this.generate="source",this.showError=!1,this.locale="auto",this.paymentMethod=null,this.source=null,this.token=null,this.element=null,this.elements=null,this.error=null,this.focused=!1,this.ready=!1,this.stripe=null,this.theme="none",this.precomputedStyle=getComputedStyle(this),this.breadcrumb=new BreadcrumbController(this,{slotName:`${this.constructor.is}-slot`})}get stripeMountId(){return this.breadcrumb.mountId}get stripeMount(){return this.breadcrumb.mount}render(){const{error:Q,showError:B}=this,{slotName:w}=this.breadcrumb,D=isStripeElementsError(Q)?Q.originalMessage:Q==null?void 0:Q.message;return y`
      <div id="stripe" part="stripe">
        <slot id="stripe-slot" name="${w}"></slot>
      </div>

      <output id="error"
          for="stripe"
          part="error"
          ?hidden="${!B}">
        ${l(D)}
      </output>
    `}updated(Q){var B;(B=super.updated)==null||B.call(this,Q),Q.has("error")&&this.errorChanged(),Q.has("publishableKey")&&this.init(),[...Q.keys()].forEach(w=>this.representationChanged(w))}async disconnectedCallback(){var Q;super.disconnectedCallback(),await((Q=this.unmount)==null?void 0:Q.call(this))}reset(){var Q,B;(B=(Q=this.element)==null?void 0:Q.clear)==null||B.call(Q),this.resetRepresentations(),readonly.set(this,{error:null})}blur(){var Q;(Q=this.element)==null||Q.blur()}focus(){var Q;(Q=this.element)==null||Q.focus()}createError(Q){return new StripeElementsError(this.constructor.is,Q)}errorChanged(){this.resetRepresentations(),this.fireError(this.error)}fire(Q,B,w){this.dispatchEvent(new CustomEvent(Q,{detail:B,...w}))}fireError(Q){this.dispatchEvent(new ErrorEvent("error",{error:Q}))}getCSSCustomPropertyValue(Q){return this.precomputedStyle.getPropertyValue(Q)}async handleResponse(Q){const{error:B=null,paymentMethod:w=null,source:D=null,token:F=null}={...Q};if(readonly.set(this,{error:B,paymentMethod:w,source:D,token:F}),await this.updateComplete,B)throw B;return Q}initElement(){}async init(){await this.unmount(),await this.initStripe(),await this.initElement(),this.initElementListeners(),this.breadcrumb.init(),this.mount()}initElementListeners(){!this.element||(this.element.on("ready",this.onReady),this.element.on("focus",this.onFocus),this.element.on("blur",this.onBlur))}async initStripe(){const{publishableKey:Q,stripeAccount:B,locale:w}=this;if(!Q)readonly.set(this,{elements:null,element:null,stripe:null});else try{const D={stripeAccount:B,locale:w},F=window.Stripe?window.Stripe(Q,D):await loadStripe(Q,D),O=F==null?void 0:F.elements();readonly.set(this,{elements:O,error:null,stripe:F})}catch(D){console.warn(D);const F=this.createError("Stripe.js must be loaded first.");readonly.set(this,{elements:null,error:F,stripe:null})}finally{await this.updateComplete}}mount(){var Q;if(!this.breadcrumb.mount)throw this.createError("Stripe Mount missing");(Q=this.element)==null||Q.mount(this.breadcrumb.mount)}async unmount(){var Q,B;(B=(Q=this.element)==null?void 0:Q.unmount)==null||B.call(Q),readonly.set(this,{element:null}),await this.updateComplete}async onBlur(){readonly.set(this,{focused:!1}),await this.updateComplete}async onFocus(){readonly.set(this,{focused:!0}),await this.updateComplete}async onReady(Q){readonly.set(this,{ready:!0}),await this.updateComplete,this.fire("ready",Q)}async postRepresentation(){const Q=G=>readonly.set(this,{error:G}),B=G=>this.fire("success",G),w=this.token||void 0,D=this.source||void 0,F=this.paymentMethod||void 0,O=JSON.stringify({token:w,source:D,paymentMethod:F}),L={"Content-Type":"application/json"},U="POST";return fetch(this.action,{body:O,headers:L,method:U}).then(throwBadResponse).then(B).catch(Q)}representationChanged(Q){if(!isRepresentation(Q))return;const B=this[Q];!B||(this.fire(`${dash(Q)}`,B),this.action&&this.postRepresentation())}resetRepresentations(){readonly.set(this,{paymentMethod:null,token:null,source:null})}};__decorateClass([e$3({type:String})],StripeBase.prototype,"action",2);__decorateClass([e$3({type:String,attribute:"client-secret"})],StripeBase.prototype,"clientSecret",2);__decorateClass([e$3({type:String})],StripeBase.prototype,"generate",2);__decorateClass([notify,e$3({type:String,attribute:"publishable-key",reflect:!0})],StripeBase.prototype,"publishableKey",2);__decorateClass([e$3({type:Boolean,attribute:"show-error",reflect:!0})],StripeBase.prototype,"showError",2);__decorateClass([e$3({type:String,attribute:"stripe-account"})],StripeBase.prototype,"stripeAccount",2);__decorateClass([e$3({type:String,attribute:"locale"})],StripeBase.prototype,"locale",2);__decorateClass([readonly,notify,e$3({type:Object,attribute:"payment-method"})],StripeBase.prototype,"paymentMethod",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"source",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"token",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"element",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"elements",2);__decorateClass([readonly,notify,e$3({type:Object,reflect:!0,converter:errorConverter})],StripeBase.prototype,"error",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"focused",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"ready",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"stripe",2);__decorateClass([e$3()],StripeBase.prototype,"theme",2);__decorateClass([e$3({attribute:"border-radius"})],StripeBase.prototype,"borderRadius",2);__decorateClass([e$3({attribute:"color-background"})],StripeBase.prototype,"colorBackground",2);__decorateClass([e$3({attribute:"color-danger"})],StripeBase.prototype,"colorDanger",2);__decorateClass([e$3({attribute:"color-primary"})],StripeBase.prototype,"colorPrimary",2);__decorateClass([e$3({attribute:"color-text"})],StripeBase.prototype,"colorText",2);__decorateClass([e$3({attribute:"font-family"})],StripeBase.prototype,"fontFamily",2);__decorateClass([e$3({attribute:"spacing-unit"})],StripeBase.prototype,"spacingUnit",2);__decorateClass([bound],StripeBase.prototype,"handleResponse",1);__decorateClass([bound],StripeBase.prototype,"onBlur",1);__decorateClass([bound],StripeBase.prototype,"onFocus",1);__decorateClass([bound],StripeBase.prototype,"onReady",1);var styles=i$2`[hidden] {
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
`,shared_default=styles,styles2=i$2`:host {
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
`,stripe_elements_default=styles2,ALLOWED_STYLES=["color","fontFamily","fontSize","fontStyle","fontSmoothing","fontVariant","iconColor","lineHeight","letterSpacing","textDecoration","textShadow","textTransform"],SUB_STYLES=[":hover",":focus","::placeholder","::selection",":-webkit-autofill",":disabled"],StripeElements=class extends StripeBase{constructor(){super(...arguments),this.hideIcon=!1,this.hidePostalCode=!1,this.iconStyle="default",this.value={},this.brand=null,this.complete=!1,this.empty=!0,this.invalid=!1}async createPaymentMethod(Q=this.getPaymentMethodData()){return this.stripe.createPaymentMethod(Q)}async createSource(Q=this.sourceData){return this.stripe.createSource(this.element,Q)}async createToken(Q=this.tokenData){return this.stripe.createToken(this.element,Q)}isPotentiallyValid(){return!this.complete&&!this.empty&&!this.error||this.validate()}reset(){var Q;super.reset(),(Q=this.element)==null||Q.clear()}async submit(){switch(this.generate){case"payment-method":return this.createPaymentMethod();case"source":return this.createSource();case"token":return this.createToken();default:{const Q=this.createError(`cannot generate ${this.generate}`);throw readonly.set(this,{error:Q}),await this.updateComplete,Q}}}validate(){const{complete:Q,empty:B,error:w}=this,D=!w&&Q&&!B;return B&&!w&&readonly.set(this,{error:this.createError("Your card number is empty.")}),D}updateStyle(){var Q;(Q=this.element)==null||Q.update({style:this.getStripeElementsStyles()})}getPaymentMethodData(){const Q="card",{billingDetails:B,paymentMethodData:w}=this;return{billing_details:B,...w,type:Q,card:this.element}}getStripeElementsStyles(){const Q=F=>this.getCSSCustomPropertyValue(F)||void 0,B=["base","complete","empty","invalid"],w=F=>(O,L)=>{if(F.includes("-"))return O;const U=L.split(":").pop();return{...O,[L]:ALLOWED_STYLES.reduce(D(`${F}-${U}`),{})}},D=F=>(O,L)=>{const U=`--stripe-elements-${F}-${dash(L)}`;return{...O,[L]:Q(U),...SUB_STYLES.reduce(w(F),{})}};return B.reduce((F,O)=>({...F,[O]:ALLOWED_STYLES.reduce(D(O),{})}),{})}async initElement(){if(!this.stripe)return;const{hidePostalCode:Q,hideIcon:B,iconStyle:w,value:D}=this,F=this.getStripeElementsStyles();await this.updateComplete;const O=this.createElement({hideIcon:B,hidePostalCode:Q,iconStyle:w,style:F,value:D});O.on("change",this.onChange),readonly.set(this,{element:O}),await this.updateComplete}createElement(Q){return this.elements.create("card",Q)}async onChange(Q){const{brand:B,complete:w,empty:D,error:F=null}=Q,O=!(F||!D&&!w);readonly.set(this,{brand:B,complete:w,empty:D,error:F,invalid:O}),await this.updateComplete,this.fire("change",Q)}};StripeElements.is="stripe-elements";StripeElements.elementType="card";StripeElements.styles=[shared_default,stripe_elements_default];__decorateClass([e$3({type:Boolean,attribute:"hide-icon"})],StripeElements.prototype,"hideIcon",2);__decorateClass([e$3({type:Boolean,attribute:"hide-postal-code"})],StripeElements.prototype,"hidePostalCode",2);__decorateClass([e$3({type:String,attribute:"icon-style"})],StripeElements.prototype,"iconStyle",2);__decorateClass([e$3({type:Object})],StripeElements.prototype,"value",2);__decorateClass([notify,readonly,e$3({type:String})],StripeElements.prototype,"brand",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"complete",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"empty",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"invalid",2);__decorateClass([stripeMethod],StripeElements.prototype,"createPaymentMethod",1);__decorateClass([stripeMethod],StripeElements.prototype,"createSource",1);__decorateClass([stripeMethod],StripeElements.prototype,"createToken",1);__decorateClass([bound],StripeElements.prototype,"onChange",1);StripeElements=__decorateClass([e$4("stripe-elements")],StripeElements);var styles3=i$2`#stripe {
  box-sizing: border-box;
  min-width: var(--stripe-payment-request-element-min-width, 300px);
  padding: var(--stripe-payment-request-element-padding, 8px 12px);
  background: var(--stripe-payment-request-element-background, white);
}
`,stripe_payment_request_default=styles3;function isStripeDisplayItem(Q){return Q.tagName.toLowerCase()==="stripe-display-item"}function datasetToStripeDisplayItem({dataset:{amount:Q,label:B,pending:w}}){return{label:B,amount:parseInt(Q),...w!==void 0&&{pending:w==="true"}}}function datasetToStripeShippingOption({dataset:{amount:Q,detail:B,...w}}){return{amount:parseInt(Q),detail:B,...w}}function mapDataset(Q){return isStripeDisplayItem(Q)?datasetToStripeDisplayItem(Q):datasetToStripeShippingOption(Q)}var _displayItems,_shippingOptions,StripePaymentRequest=class extends StripeBase{constructor(){super(...arguments),this.canMakePayment=null,__privateAdd(this,_displayItems,void 0),this.paymentIntent=null,this.paymentRequest=null,this.pending=!1,__privateAdd(this,_shippingOptions,void 0),this.buttonType="default",this.buttonTheme="dark",this.complete=async(Q,B)=>{const{error:w=null}={...Q},D=w||B?"fail":"success";return Q.complete(D),this.fire(D,Q),B?{error:B}:Q}}get displayItems(){const Q=__privateGet(this,_displayItems);return Array.isArray(Q)?Q:this.parseDatasets("stripe-display-item")}set displayItems(Q){const B=this.displayItems;__privateSet(this,_displayItems,Q),this.requestUpdate("displayItems",B)}get shippingOptions(){const Q=__privateGet(this,_shippingOptions);return Array.isArray(Q)?Q:this.parseDatasets("stripe-shipping-option")}set shippingOptions(Q){const B=this.shippingOptions;__privateSet(this,_shippingOptions,Q),this.requestUpdate("shippingOptions",B)}reset(){super.reset(),readonly.set(this,{paymentIntent:null})}updated(Q){super.updated(Q),Q.has("generate")&&this.initPaymentRequestListeners(),Q.has("amount")&&this.updatePaymentRequest()}getStripePaymentRequestOptions(){const{country:Q,currency:B,displayItems:w,shippingOptions:D,requestShipping:F,requestPayerEmail:O,requestPayerName:L,requestPayerPhone:U,label:G="",amount:q=0}=this;return{country:Q,currency:B,displayItems:w,requestPayerEmail:O,requestPayerName:L,requestPayerPhone:U,requestShipping:F,shippingOptions:D,total:{label:G,amount:q}}}async initElement(){await this.initPaymentRequest(),await this.initPaymentRequestListeners(),await this.initPaymentRequestButton()}async initPaymentRequest(){if(!this.stripe)return;const Q=this.getStripePaymentRequestOptions(),B=this.stripe.paymentRequest(Q),w=await B.canMakePayment();readonly.set(this,{paymentRequest:B,canMakePayment:w}),await this.updateComplete,this.canMakePayment||this.fire("unsupported")}async initPaymentRequestButton(){const{buttonTheme:Q,buttonType:B,canMakePayment:w}=this;if(!w||!this.elements)return;const D="--stripe-payment-request-button-height",O={paymentRequestButton:{height:this.getCSSCustomPropertyValue(D)||"40px",theme:Q,type:B}},L=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:O});readonly.set(this,{element:L}),await this.updateComplete}async initPaymentRequestListeners(){if(!!this.canMakePayment)switch(this.paymentRequest.on("click",this.updatePaymentRequest),this.paymentRequest.on("cancel",this.onCancel),this.paymentRequest.on("shippingaddresschange",this.onShippingaddresschange),this.paymentRequest.on("shippingoptionchange",this.onShippingoptionchange),this.generate){case"payment-method":this.paymentRequest.on("paymentmethod",this.onPaymentResponse);break;case"source":this.paymentRequest.on("source",this.onPaymentResponse);break;case"token":this.paymentRequest.on("token",this.onPaymentResponse);break}}async updatePaymentRequest(){if(!this.paymentRequest)return;const{currency:Q,total:B,displayItems:w,shippingOptions:D}=this.getStripePaymentRequestOptions();this.paymentRequest.update({currency:Q,total:B,displayItems:w,shippingOptions:D})}onCancel(){this.fire("cancel")}async onPaymentResponse(Q){const{error:B=null,paymentMethod:w=null,source:D=null,token:F=null}={...Q};readonly.set(this,{error:B,paymentMethod:w,source:D,token:F}),this.clientSecret&&!B?this.confirmPaymentIntent(Q):this.complete(Q)}async confirmPaymentIntent(Q){var O;const B={payment_method:this.paymentMethod.id},w=await this.confirmCardPayment(B,{handleActions:!1}).then(({error:L})=>this.complete(Q,L)).then(throwResponseError).then(()=>this.confirmCardPayment()).then(throwResponseError).catch(L=>({error:L})),{error:D=null}=w,F=(O=w.paymentIntent)!=null?O:null;readonly.set(this,{error:D,paymentIntent:F}),await this.updateComplete}async confirmCardPayment(Q,B){return this.stripe.confirmCardPayment(this.clientSecret,Q,B)}onShippingaddresschange(Q){this.fire("shippingaddresschange",Q)}onShippingoptionchange(Q){this.fire("shippingoptionchange",Q)}parseDatasets(Q){const B=[...this.querySelectorAll(Q)];return B.length?B.map(mapDataset):[]}};_displayItems=new WeakMap;_shippingOptions=new WeakMap;StripePaymentRequest.is="stripe-payment-request";StripePaymentRequest.styles=[shared_default,stripe_payment_request_default];__decorateClass([e$3({type:Number,reflect:!0})],StripePaymentRequest.prototype,"amount",2);__decorateClass([notify,readonly,e$3({type:Boolean,attribute:"can-make-payment",reflect:!0})],StripePaymentRequest.prototype,"canMakePayment",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"country",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"currency",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"displayItems",1);__decorateClass([e$3({type:String,reflect:!0})],StripePaymentRequest.prototype,"label",2);__decorateClass([notify,readonly,e$3({type:Object,attribute:"payment-intent"})],StripePaymentRequest.prototype,"paymentIntent",2);__decorateClass([readonly,e$3({type:Object,attribute:"payment-request"})],StripePaymentRequest.prototype,"paymentRequest",2);__decorateClass([e$3({type:Boolean,reflect:!0})],StripePaymentRequest.prototype,"pending",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-email"})],StripePaymentRequest.prototype,"requestPayerEmail",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-name"})],StripePaymentRequest.prototype,"requestPayerName",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-phone"})],StripePaymentRequest.prototype,"requestPayerPhone",2);__decorateClass([e$3({type:Boolean,attribute:"request-shipping"})],StripePaymentRequest.prototype,"requestShipping",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"shippingOptions",1);__decorateClass([e$3({type:String,attribute:"button-type"})],StripePaymentRequest.prototype,"buttonType",2);__decorateClass([e$3({type:String,attribute:"button-theme"})],StripePaymentRequest.prototype,"buttonTheme",2);__decorateClass([bound],StripePaymentRequest.prototype,"onCancel",1);__decorateClass([bound],StripePaymentRequest.prototype,"onPaymentResponse",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmPaymentIntent",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmCardPayment",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingaddresschange",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingoptionchange",1);StripePaymentRequest=__decorateClass([e$4("stripe-payment-request")],StripePaymentRequest);const VITE_CommerceKey$1="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey$1="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",commerce$1=new lib(`${VITE_CommerceKey$1}`,!0);var allProducts$1=[],currentShopProduct$1,shopPage=1,currentCart$1,cartEmpty$1=!0,selectedPSize$1="",countriesObj$1={},variantAbbr="",countriesAdded=!1,shippingMethodValue,shippingId="",card$1,stripeElements,pComplete;class mobileShop1 extends HTMLElement{constructor(){super();Ke(this,"closeMobileShop",()=>{document.getElementById("mobileShop").style.display="none"});Ke(this,"loadShop",async()=>{this.shadow.getElementById("LoadBG").style.display="grid";var w=this.shadow.getElementById("mb1");await commerce$1.products.list({limit:100,sortDirection:"desc"}).then(D=>allProducts$1.push(D.data)),allProducts$1[0].forEach(D=>{var F=document.createElement("div");F.setAttribute("class","productContainer"),F.setAttribute("id",D.id),this.shadow.getElementById("productEdition").addEventListener("click",this.toggleTerms),F.addEventListener("click",this.viewProduct),w.appendChild(F),F.innerHTML=`
    <img class="shopProducts" style="opacity:100%;" loading="lazy" src="${D.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${D.name}</p>
    <p class="pcProductPrice">${D.price.formatted_with_symbol}</p>
  </div>
    `,this.shadow.getElementById("LoadBG").style.display="none"}),commerce$1.cart.empty()});Ke(this,"viewProduct",w=>{var D=w.target.parentElement.id;this.shadow.getElementById("scroll").style.display="block",currentShopProduct$1=allProducts$1[0].filter(L=>L.id.includes(`${D}`)),this.shadow.getElementById("mb2").style.display="block",shopPage=2,this.shadow.getElementById("pName").innerHTML=`
        ${currentShopProduct$1[0].name}`,currentShopProduct$1[0].categories.forEach(L=>{L.name==="\xC9"&&(this.shadow.getElementById("eSymbol1").style.display="block"),L.name==="S\xC9"&&(this.shadow.getElementById("eSymbol2").style.display="block")}),this.shadow.getElementById("pDesc").innerHTML=currentShopProduct$1[0].description,this.shadow.getElementById("proPrice").innerHTML=currentShopProduct$1[0].price.formatted_with_symbol,currentShopProduct$1[0].inventory.available===0&&(this.shadow.getElementById("archived").style.display="grid");var F=this.shadow.getElementById("allImages"),O=0;this.shadow.getElementById("mainImageCont").src=`${currentShopProduct$1[0].assets[0].url}`,currentShopProduct$1[0].assets.forEach(L=>{if(O<=3){var U=document.createElement("img");U.setAttribute("src",`${L.url}`),U.setAttribute("id",`${L.url}`),U.addEventListener("click",this.changeToMainPic),F.appendChild(U),O++}L.filename==="sizeChart.png"&&(this.shadow.getElementById("noti").innerHTML=`
                <img class="sizeChartImage" src="${L.url}"/>
              `,this.shadow.getElementById("pSizeGuide").addEventListener("click",this.noti1))}),this.checkSize()});Ke(this,"checkSize",()=>{currentShopProduct$1[0].variant_groups[0].options.forEach(w=>{if(this.shadow.getElementById(`${w.name}`).style.opacity="100%",this.shadow.getElementById(`${w.name}`).style.cursor="pointer",this.shadow.getElementById(`${w.name}`).addEventListener("click",this.selectSize),w.name==="SingleSize"){var D=this.shadow.querySelectorAll(".sizeButtons");this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr",this.shadow.getElementById("sizesCont").style.justifyItems="end",D.forEach(F=>{F.id!="SingleSize"&&(F.style.display="none")}),this.shadow.getElementById("SingleSize").style.display="grid"}})});Ke(this,"noti1",()=>{this.shadow.getElementById("noti").style.display="block",pComplete===!0?(this.shadow.getElementById("noti").addEventListener("click",this.return),pComplete=!1):this.shadow.getElementById("noti").addEventListener("click",this.closeNoti)});Ke(this,"closeNoti",()=>{this.shadow.getElementById("noti").style.display="none",pComplete=!1});Ke(this,"returnSize",()=>{var w=this.shadow.querySelectorAll(".sizeButtons");w.forEach(D=>{D.id!="SingleSize"&&(D.style.display="grid"),this.shadow.getElementById(D.id).style.opacity=".3"}),this.shadow.getElementById("SingleSize").style.display="none",this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr 1fr 1fr 1fr",this.shadow.getElementById("sizesCont").style.justifyItems="center"});Ke(this,"changeToMainPic",w=>{var D=w.target.id;this.shadow.getElementById("mainImageCont").src=`${D}`});Ke(this,"return",()=>{this.shadow.getElementById("main"),this.shadow.getElementById("mb1");var w=this.shadow.getElementById("mb2"),D=this.shadow.getElementById("mb3"),F=this.shadow.getElementById("checkoutInputs"),O=this.shadow.getElementById("shippingButton");switch(this.shadow.getElementById("mb4"),this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("archived").style.display="none",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("noti").style.display="none",shopPage){case 1:this.closeMobileShop();break;case 2:w.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("eSymbol1").style.display="none",this.shadow.getElementById("eSymbol2").style.display="none",this.returnSize(),shopPage=1;break;case 3:D.style.display="none",w.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.returnSize(),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",shopPage=1;break;case 4:F.style.display="none",O.innerHTML="SHIPPING & BILLING",O.removeEventListener("click",this.return),O.addEventListener("click",this.shipping),this.viewCart(),shopPage=3;break;case 5:D.style.display="none",F.style.display="none",w.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("noti").removeEventListener("click",this.return),this.returnSize(),selectedPSize$1="",shopPage=1,this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';break}});Ke(this,"selectSize",w=>{var D=this.shadow.querySelectorAll(".sizeButtons");D.forEach(O=>{this.shadow.getElementById(O.id).style.backgroundColor="",this.shadow.getElementById(O.id).style.color=""}),w.target.style.opacity==="1"?(selectedPSize$1=w.target.id,this.shadow.getElementById("addItemButton").addEventListener("click",this.addToCart),w.target.style.color="white",w.target.style.backgroundColor="#ff002d",this.shadow.getElementById("addItemButton").innerHTML="ADD TO CART"):(selectedPSize$1="",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart));var F=document.getElementsByClassName("sizeButtons");for(let O=0;O<F.length;O++)F[O].style.color="#ff002d"});Ke(this,"addToCart",async()=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="ADDING",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';var w=currentShopProduct$1[0].variant_groups[0].options.filter(D=>D.name.includes(`${selectedPSize$1}`));this.shadow.getElementById("LoadBG").style.display="grid",commerce$1.cart.retrieve().then(D=>{currentCart$1=D}).then(()=>{if(cartEmpty$1===!1){var D=currentCart$1.line_items.filter(F=>F.product_id===currentShopProduct$1[0].id);console.log(currentCart$1),console.log(currentShopProduct$1[0].id),console.log(D),currentShopProduct$1[0].inventory.available>0?commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:w[0].id}).then(()=>{cartEmpty$1=!1,commerce$1.cart.retrieve().then(F=>{currentCart$1=F,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART";var O=this.shadow.querySelectorAll(".sizeButtons");O.forEach(L=>{this.shadow.getElementById(`${L.id}`).style.color="",this.shadow.getElementById(`${L.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=F.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)}):(this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="MAX INVENTORY")}else commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:w[0].id}).then(()=>{cartEmpty$1=!1,selectedPSize$1="",commerce$1.cart.retrieve().then(F=>{currentCart$1=F,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart);var O=this.shadow.querySelectorAll(".sizeButtons");O.forEach(L=>{this.shadow.getElementById(`${L.id}`).style.color="",this.shadow.getElementById(`${L.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=F.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)})})});Ke(this,"viewCart",()=>{shopPage=3,this.shadow.getElementById("mb3").style.display="block",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE";var w=this.shadow.getElementById("cartStatus");this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),w.innerHTML="CHECKOUT",w.removeEventListener("click",this.viewCart),w.removeEventListener("click",this.checkout),variantAbbr="",currentCart$1.line_items.forEach(D=>{var F=document.createElement("div");switch(F.setAttribute("class","productCont"),this.shadow.getElementById("cartItems").appendChild(F),D.selected_options[0].option_name){case"Small":variantAbbr="S";break;case"Medium":variantAbbr="M";break;case"Large":variantAbbr="L";break;case"XLarge":variantAbbr="XL";break;case"2XLarge":variantAbbr="2XL";break;case"3XLarge":variantAbbr="3XL";break}F.innerHTML=`
                <div class="pcLeft">
                    <img src="${D.image.url}"> 
                </div>
                <div class="pcRight">
                    <p class="cartProName">${D.name}</p>
                    <p class="cartProQty" id="${D.name}Qty">QTY: <span class="active">(${D.quantity})${variantAbbr}</span></p>
                    <p class="cartProPrice">${D.price.formatted_with_symbol}</p>
                    <div class="quantityChange" name="${D.product_id}">
                        <span class="active dec changeQty" id="${D.id}" name="dec">-</span>
                        <span>|</span>
                        <span class="active inc changeQty" id="${D.id}" name="inc">+</span>
                    </div>
                </div>
            `,this.shadow.getElementById("termsButton").addEventListener("click",this.toggleTerms);var O=this.shadow.querySelectorAll(".changeQty");O.forEach(L=>{L.addEventListener("click",this.changeQty)}),F.setAttribute("id",`${D.id}Parent`)})});Ke(this,"toggleTerms",()=>{this.noti1(),this.shadow.getElementById("noti").innerHTML=`
        <div id="terms">
         <h1>Terms & Conditions</h1><p>For designs marked with an <span class="active">(\u2018\xC9\u2019)</span> or <span class="active">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `});Ke(this,"checkQuantity",w=>{var D=allProducts$1[0].filter(F=>F.id===w);return D[0].inventory.available});Ke(this,"changeQty",w=>{this.shadow.getElementById("LoadBG").style.display="grid";var D=w.target.getAttribute("id"),F=w.target.parentElement.getAttribute("name"),O=this.checkQuantity(F);if(w.target.getAttribute("name")==="inc"){var L=currentCart$1.line_items.filter(U=>U.id===D);if(O>=2&&L[0].quantity<=O-1){commerce$1.cart.update(`${D}`,{quantity:L[0].quantity+1}).then(U=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=U.cart.subtotal.formatted_with_symbol,currentCart$1=U.cart,this.viewCart()});return}else w.target.style.opacity=".3",this.shadow.getElementById("LoadBG").style.display="none"}if(w.target.getAttribute("name")==="dec"){var L=currentCart$1.line_items.filter(G=>G.id===D);commerce$1.cart.update(`${D}`,{quantity:L[0].quantity-1}).then(G=>{if(this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=G.cart.subtotal.formatted_with_symbol,currentCart$1=G.cart,this.viewCart(),G.cart.total_items===0){var q=this.shadow.getElementById("cartStatus");cartEmpty$1=!0,this.return(),q.innerHTML="CART EMPTY",q.removeEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),selectedPSize$1=""}});return}});Ke(this,"shipping",()=>{shopPage=4;var w=this.shadow.getElementById("shippingButton"),D=this.shadow.getElementById("cartStatus");this.shadow.getElementById("checkoutInputs").style.display="grid",w.innerHTML="VIEW CART",w.removeAttribute("click",this.shipping),w.addEventListener("click",this.return),D.innerHTML="PAY NOW",D.addEventListener("click",this.checkout),countriesAdded===!1&&(countriesAdded=!0,commerce$1.services.localeListCountries().then(F=>{countriesObj$1=F.countries,Object.keys(F.countries).forEach(O=>{var L=document.createElement("option"),U=this.shadow.getElementById("inputCN");L.setAttribute("value",O),L.setAttribute("title",O),L.innerHTML=`${countriesObj$1[O].substr(0,20)}`,U.appendChild(L)})})),this.shadow.getElementById("inputCN").addEventListener("change",this.states),this.shadow.getElementById("card-element").innerHTML=`
        <stripe-elements publishable-key="${VITE_StripeKey$1}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`,this.shadow.getElementById("sCard").addEventListener("ready",F=>{card$1=F.path[0].element,F.path[0].stripe.createToken(card$1),stripeElements=F.path[0].stripe})});Ke(this,"states",()=>{var w=this.shadow.getElementById("inputCN"),D=w.options[w.selectedIndex].value,F=w.options[w.selectedIndex].title,O=this.shadow.getElementById("totalPrice");this.shadow.getElementById("inputST").innerHTML="",D==="US"&&(this.shadow.getElementById("inputSP").value="$0.00 Free Shipping",shippingMethodValue=1,O.innerHTML=currentCart$1.subtotal.formatted_with_symbol),D!="US"&&(this.shadow.getElementById("inputSP").value="$70.00 Intl Shipping",shippingMethodValue=3,O.innerHTML=`$${currentCart$1.subtotal.raw+70}.00`),F==="US2"&&(this.shadow.getElementById("inputSP").value="$130.00 - Next Day",shippingMethodValue=2,O.innerHTML=`$${currentCart$1.subtotal.raw+130}.00`),commerce$1.services.localeListSubdivisions(D).then(L=>{var U=L.subdivisions;Object.keys(L.subdivisions).forEach(G=>{var q=document.createElement("option"),Y=this.shadow.getElementById("inputST");if(Object.keys(L.subdivisions).length<=1){var W=document.createElement("option");W.innerHTML="Not Available.",w.options[w.selectedIndex].innerHTML="Select Country",this.shadow.getElementById("inputST").appendChild(W)}else q.setAttribute("value",U[G]),q.setAttribute("id",G),q.innerHTML=U[G].substring(0,20),Y.appendChild(q)})})});Ke(this,"checkout",async()=>{var w=this.shadow.getElementById("inputFN").value,D=this.shadow.getElementById("inputLN").value,F=this.shadow.getElementById("inputBD").value;this.shadow.getElementById("inputSP").value;var O=this.shadow.getElementById("inputEM").value,L=this.shadow.getElementById("inputCY").value,U=this.shadow.getElementById("inputZC").value,G=this.shadow.getElementById("inputSA").value,q=this.shadow.getElementById("inputCN"),Y=this.shadow.getElementById("inputST"),W=q.options[q.selectedIndex].value,X=Y.options[Y.selectedIndex].id,te=this.shadow.getElementById("cartStatus");te.removeEventListener("click",this.checkout),this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("LoadBG").style.display="grid",setTimeout(()=>{pComplete===!1&&(this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>")},2e4),await commerce$1.checkout.generateToken(currentCart$1.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async ae=>{commerce$1.checkout.getShippingOptions(ae.id,{country:W}).then(async ie=>{shippingMethodValue===1&&(shippingId=ie[0].id),shippingMethodValue===3&&(shippingId=ie[0].id),shippingMethodValue===2&&(shippingId=ie[1].id);var ce=`${w} ${D}`;const he=await stripeElements.createPaymentMethod({type:"card",card:card$1}).catch(pe=>{console.log(`THIS ERROR ${pe}`),this.shadow.getElementById("LoadBG").style.display="none",te.addEventListener("click",this.checkout)});if(he.error){this.shadow.getElementById("LoadBG").style.display="none",console.log(he.error.message),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${he.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const pe=await commerce$1.checkout.capture(ae.id,{customer:{firstname:`${w}`,lastname:`${D}`,email:`${O}`},extra_fields:{extr_DWy4oG4dY56Jx2:`${G}`},shipping:{name:`${ce}`,street:`${F}`,town_city:`${L}`,county_state:`${X}`,postal_zip_code:`${U}`,country:`${W}`},fulfillment:{shipping_method:`${shippingId}`},billing:{name:`${ce}`,street:`${F}`,town_city:`${L}`,county_state:`${X}`,postal_zip_code:`${U}`,country:`${W}`},payment:{gateway:"stripe",stripe:{payment_method_id:he.paymentMethod.id}}});this.return,this.purchaseComplete(),this.noti1(),this.shadow.getElementById("noti").innerHTML=`
                <div id="orderConfirmed">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-map.png"/>
                    <h2>Order Placed!</h2>
                    <h3>Thank you for shopping at SCOG\xC9.</h3>
                    <h4>Your order confirmation number is:<br><span class="active" id="confirmNumber">${pe.customer_reference}</span></h4>
                    <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
                    <br><br>
                    <p>For any questions or inquiries please email <span class="active">INFO@SCOGE.CO</span></p>
                </div>
                `,this.shadow.getElementById("inputCN").innerHTML=`<option value="US" title="US">US</option>
                                          <option value="US" title="US2">US - Next Day Air</option>`,cartEmpty$1=!0,card$1.clear();return}catch(pe){console.log(pe),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${pe.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(pe);return}finally{}})})});Ke(this,"purchaseComplete",()=>{var w=this.shadow.getElementById("cartStatus");this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("totalPrice").innerHTML="$0",w.innerHTML="CART EMPTY",shopPage=5,pComplete=!0,this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),this.shadow.getElementById("shippingButton").removeEventListener("click",this.return)});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("product")}set product(w){this.setAttribute("product",w)}static get observedAttributes(){return["product"]}attributeChangedCallback(w,D,F){w==="product"&&this.render()}connectedCallback(){this.render(),this.loadShop(),this.shadow.getElementById("returnButton").addEventListener("click",this.return.bind(this))}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("mobile-shop1",mobileShop1);class SoundtrackManager{constructor(){this.tracks={},this.trackList=[{key:"menuMove3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav",artist:"Menu",title:"menuMove3"},{key:"menuEnter3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav",artist:"Menu",title:"menuEnter3"},{key:"menuLoading1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav",artist:"Menu",title:"menuLoading1"},{key:"menuError1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav",artist:"Menu",title:"menuError1"},{key:"menuEntrance1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav",artist:"Menu",title:"menuEntrance1"},{key:"menuExitSys1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav",artist:"Menu",title:"menuExitSys1"},{key:"scoge1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav",artist:"Main",title:"scoge1"}],this.trackList.forEach(B=>{this.tracks[B.key]=new Audio(B.src)})}play(B){this.tracks[B].play()}pause(B){this.tracks[B].pause()}stop(B){this.tracks[B].pause(),this.tracks[B].currentTime=0}setVolume(B,w){this.tracks[B].volume=w}loop(B){this.tracks[B].loop=!0}}var menuOpen=!0,fullMenuOpen=!0;new SoundtrackManager;class getUniMenu extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get uniMenu(){return this.getAttribute("uniMenu")}set uniMenu(B){this.setAttribute("uniMenu",B)}static get observedAttributes(){return["uniMenu"]}attributeChangedCallback(B,w,D){B==="uniMenu"&&this.render()}toggleMenu(){const B=this.shadow.querySelector("#uniMenu"),w=this.shadow.querySelector("#uniMenuIcon"),D=this.shadow.querySelector("#menuItems"),F=this.shadow.querySelector("#menuHeader"),O=this.shadow.querySelector("#refresh");if(menuOpen===!1){w.style.transform="rotate(180deg)",B.style.height="auto",F.style.height="100%",menuOpen=!0;return}else{F.style.height="100%",setTimeout(()=>{B.style.height="10%"},150),w.style.transform="rotate(0deg)",D.style.height="0%",D.style.overflow="hidden",menuOpen=!1,O.style.animationPlayState="paused",this.closeFullMenu();return}}openFullMenu(){const B=this.shadow.querySelector("#uniMenu"),w=this.shadow.querySelector("#fullMenu"),D=this.shadow.querySelector("#fullMenuBG");this.shadow.querySelector("#menuItems");const F=this.shadow.querySelector("#refresh");if(fullMenuOpen===!1){B.style.overflowX="visible",w.style.width="500px",D.style.transform="scaleX(1)",B.style.borderBottomRightRadius="0px",B.style.borderTopRightRadius="0px",B.style.borderRight="0px solid black",fullMenuOpen=!0,F.style.display="block",F.style.animationPlayState="running";return}}sendFeedback(B){B.preventDefault(),this.shadow.getElementById("feedbackEmailInput").value,this.shadow.getElementById("feedbackInput").value,this.shadow.getElementById("feedbackForm").submit()}closeFullMenu(){const B=this.shadow.querySelector("#uniMenu"),w=this.shadow.querySelector("#fullMenu"),D=this.shadow.querySelector("#fullMenuBG"),F=this.shadow.querySelector("#refresh");w.style.width="0px",D.style.transform="scaleX(0)",F.style.animationPlayState="paused",F.style.display="none",setTimeout(()=>{B.style.borderBottomRightRadius="10px",B.style.borderTopRightRadius="10px",B.style.borderRight="2px solid #ff002d"},500),fullMenuOpen=!1}toggleFullScreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}switchMenuTabs(B){var w=B.target.id,D=B.target.classList[1],F=this.shadow.querySelector("#fm-menu1"),O=this.shadow.querySelector("#fm-menu2"),L=this.shadow.querySelector("#fm-menu3");switch(w){case"fm-menu1":this.shadow.querySelector(`.${D}1`).style.display="grid",this.shadow.querySelector(`.${D}2`).style.display="none",this.shadow.querySelector(`.${D}3`).style.display="none",F.setAttribute("class",`men-active ${D} selectedMenu`),O.setAttribute("class",`men-active ${D}`),L.setAttribute("class",`men-active ${D}`);break;case"fm-menu2":this.shadow.querySelector(`.${D}1`).style.display="none",this.shadow.querySelector(`.${D}2`).style.display="grid",this.shadow.querySelector(`.${D}3`).style.display="none",F.setAttribute("class",`men-active ${D}`),O.setAttribute("class",`men-active ${D} selectedMenu`),L.setAttribute("class",`men-active ${D}`);break;case"fm-menu3":this.shadow.querySelector(`.${D}1`).style.display="none",this.shadow.querySelector(`.${D}2`).style.display="none",this.shadow.querySelector(`.${D}3`).style.display="grid",F.setAttribute("class",`men-active ${D}`),O.setAttribute("class",`men-active ${D}`),L.setAttribute("class",`men-active ${D} selectedMenu`);break}}connectedCallback(){this.render(),this.shadow.getElementById("fsToggle").addEventListener("click",()=>{this.toggleFullScreen()}),this.shadow.querySelector("#uniMenuIcon").addEventListener("click",()=>{this.toggleMenu()}),this.shadow.querySelector("#uniMenuIcon2").addEventListener("click",()=>{this.closeFullMenu()}),this.tabs=this.shadow.querySelectorAll(".menuTabs"),this.tabs.forEach(B=>{B.id!="uniMenuExit"?B.addEventListener("click",()=>{this.openFullMenu()}):B.addEventListener("click",()=>{this.closeFullMenu(),fullMenuOpen=!1})}),this.headerTabs=this.shadow.querySelectorAll(".men-active"),this.headerTabs.forEach(B=>{B.addEventListener("click",w=>{this.switchMenuTabs(w)})}),this.form=this.shadow.querySelector("#feedbackForm"),this.form.addEventListener("submit",B=>{B.preventDefault(),this.shadow.getElementById("menuLoadingScreen2").style.display="grid";let w=new FormData(this.form);fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:w,mode:"cors"}).then(D=>D.text()).then(D=>{this.form.reset(),this.shadow.getElementById("menuLoadingScreen2").style.display="none",this.shadow.getElementById("feedbackHeadline").style.color="var(--accent)",this.shadow.getElementById("feedbackHeadline").innerHTML="Outstanding feedback citizen!",setTimeout(()=>{this.shadow.getElementById("feedbackHeadline").style.color="var(--primary)",this.shadow.getElementById("feedbackHeadline").innerHTML="This City needs more people like you!"},3e3)})}),this.shadow.querySelector("#menuMessageBody").addEventListener("click",()=>{var B={target:this.shadow.querySelector("#fm-menu2")},w={target:this.shadow.querySelector("#menuHelp")};this.shadow.querySelector("#uniMenuHelp").click(B),this.switchMenuTabs(B),window.headlineSwtich(w)}),this.shadow.querySelector("#switch23").addEventListener("click",()=>{var B={target:this.shadow.querySelector("#fm-menu3")};this.switchMenuTabs(B)}),this.shadow.getElementById("pinMenu").addEventListener("click",()=>{pinMenu()})}render(){this.shadow.innerHTML=`
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
              text-decoration: underline;
            }
            a:hover {
              color: var(--primary) !important;
              transition: 0.3s;
            }
            a:link {
              color: var(--alt);
            }
            a:visited {
              color: var(--alt);
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
              color: var(--primary) !important;
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
              border: .2px solid var(--primary);
              color: var(--secondary);
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
              grid-template-columns: 1fr;
              grid-template-rows: 80% 20%;
              align-items: center;
              justify-items: center;
            }
            #inventoryBody {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: ;
              overflow-x: auto;
              overflow-y: hidden;
            }
            #inventory-land-images, #invetory-enh-images {
              height: 100%;
              margin-left: 3%;
              margin-right: 3%;
              overflow-y: hidden;
              overflow-x: auto;
            }
            #landCardCont {
              width: auto;
              height: 100%;
              display: flex;
              flex-wrap: nowrap;
              overflow-x: auto;
            }
            .Inventory-Image-Cont {
              flex: 0 0 auto;
              margin-right: 1%;
              width: 20%;
              height: 98%;
              overflow: hidden;
              border-radius: 5%;
              cursor: pointer;
              border: 1px solid rgba(225, 225, 225, 0.8);
              box-shadow: 0 0 5px rgba(225, 225, 225, 0.9);
              transform: scale(.8);
              transition: all 0.3s ease;
              opacity: 0.8;
            }
            .Inventory-Image-Cont:hover {
              transform: scale(1);
              opacity: 1;
            }
            #landCardCont::-webkit-scrollbar {
              height: 0.5em;
            }
            .Inventory-Image-Cont img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .itHead {
              font-size: 1.1em;
            }
            .inventoryInnerText {
              font-family: "Garamond";
              color: var(--secondary);
            }
            #fm-menu3 {
              // opacity: .6;
            }
            .it1 {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 10% 40% 10% 40%;
              overflow: hidden;
            }
            .itHead {
              margin: 0px;
            }
            .it2 {
              width: 100%;
              height: 100%;
              overflow: auto;
              display: none;
            }
            .inventory-text {
              height: 99%;
              width: 94%;
              padding-right: 3%;
              padding-left: 3%;
              padding-top: 1%;
              font-family: "BS-R";
              font-size: 1em;
              text-align: justify;
              line-height: 1.5em;
              overflow: hidden;
            }
            #inventory-text > span {
              font-family: "Garamond";
              color: var(--secondary);
              letter-spacing: 1px;
            }
            #assetsCont {
              width: 94%;
              height: 94%;
              padding: 3%;
              display: flex;
              flex-wrap: wrap;
            }
            .Inventory-Assets-Cont {
              width: 24%;
              height: 150px;
              border: 1px solid rgba(225, 225, 225, 0.8);
              transform: scale(.9);
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .Inventory-Assets-Cont:hover {
              transform: scale(1);
            }
            .Inventory-Assets-Cont img {
              width: 100%;
              height: 100%;
              border-radius: 5%;
              object-fit: cover;
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
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: end;
              align-items: center;
            }
            #invCtaBut {
              width: 100px;
              height: 30px;
              color: var(--accent);
              font-family: "BS-R";
              margin-right: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              transition: all 0.5s ease;
              cursor: pointer;
              border: 1px solid var(--accent);
              border-radius: 5px;
            }
            #invCtaBut:hover {
              background-color: var(--accent);
              color: black;
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
            #menuMessageBody {
              font-size: .7em;
              font-family: "Garamond";
              margin-top: 30px;
              margin-bottom: 30px;
              transition: all 0.5s ease;
              text-decoration: underline;
              cursor: pointer;
              color: var(--secondary);
              letter-spacing: 1px;
            }
            #menuMessageBody:hover {
              color: var(--primary);
            }
            #menuMessageCTA {
              color: var(--accent);
              font-family: "BS-R";
              border: 1px solid var(--accent);
              font-size: .9em;
              padding-top: 8px;
              padding-bottom: 8px;
              border-radius: 5px;
              transition: all 0.5s ease;
              cursor: pointer;
            }
            #menuMessageCTA a {
              text-decoration: none !important;
            }
            #menuMessageCTA:hover {
              background-color: var(--accent);
              color: black !important;
            }
            #menuMessageCTA:hover a {
              color: black !important;
            }
            .LoadBox {
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
            .loadIcon {
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
            .loadinScreen {
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
              display: grid;
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
              color: var(--secondary);
              font-family: "Garamond";
            }
            .ht1 {
              display: grid;
            }
            .ht2 {
              width: 80%;
              height: 95%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 25% 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 5%;
              font-size: 1em;
              letter-spacing: 1px;
              line-height: 1.5em;
              text-align: justify;
            }
            .ht3 {
              width: 80%;
              height: 95%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 25% 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 5%;
              font-size: 1em;
              letter-spacing: 1px;
              line-height: 1.5em;
              text-align: justify;
            }
            .helpSection {
              display: flex;
              width: 100%;
              height: 20%;
              align-items: center;
              justify-content: start;
              font-family: "BS-R";
            }
            .arrow {
              font-size: 40px;
              height: 40px;
              width: 40px;
              display:flex;
              justify-content: center;
              border: 1px solid rgba(225, 225, 225, 0.3);
              align-items: center;
              border-radius: 10px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 1);
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
              border: 1px solid rgba(225, 225, 225, 0.3);
              border-radius: 5px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            #leftHelp {
              width: auto;
              height: auto;
              padding: 30px 15px;
              border: 1px solid rgba(225, 225, 225, 0.3);
              border-radius: 5px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 1);
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
              font-family: "Garmond";
              line-height: 1.5em;
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
              height: 70%;
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
              display: none;
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
              font-family: "Garmond";
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
            #worldIcon, #walletIcon {
              height: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            #worldIcon svg, #walletIcon svg {
              magrin-top: 0px;
              height: 100%;
              fill: var(--primary);
            }
            #notiTogSect {
              opacity: 30%;
            }
            #notiToggle {
              user-select: none;
              display: flex;
            }
            .getNew {
              box-shadow: 0 0 5px var(--primary);
              border: 1px solid var(--primary);
              color: var(--primary);
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            .getNew:hover {
              color: var(--secondary);
              font-family: "BS-B";
            }
            #refresh {
              position: absolute;
              z-index: 10;
              left: 0%;
              top: 0%;
              width: 3px;
              height: 100%;
              border-left: 1px solid rgba(255,255,255,0.08);
              box-shadow: 0 0 40px rgba(255,255,255,0.8);
              background-color: rgba(255,255,255,0.08);
              margin:0px;
              animation: refresh 20s infinite;
              animation-timing-function: linear;
              pointer-events: none;
            }
            @keyframes refresh {
              0% {
                transform: translateX(0%);
                opacity: 0%;
              } 
              2% {
                opacity: 100%;
              }
              98% {
                opacity: 100%;
              }
              100% {
                transform: translateX(760px);
                opacity: 0%;
              }
            }
         </style>
         <div id="uniMenu">
            <div id="refresh"></div>
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
                  <div id="menuMessageHead">WALLET MISSING</div>
                  <div id="menuMessageText">You'll need one to continue.</div>
                  <div id="menuMessageBody">Learn more about wallets here.</div>
                  <div id="menuMessageCTA"><a href="https://plugwallet.ooo/" target="_blank">GET WALLET</a></div>
                </div>
              </div>
              <div id="menuLoadingScreen" class="LoadBox">
                <div id="loading" class="loadinScreen">LOADING...</div>
                <div class="loadIcon"></div>
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
              <div id="fm-enhancements">
                <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">
              </div>
              <div id="fm-inventory">
                <div id="inventoryBody">
                  <div class="inventory-tabs it1">
                    <div class="inventory-text">
                      <span class="itHead">Land:</span>
                      <span class="inventoryInnerText">
                       you own.
                      </span>
                    </div>
                    <div id="inventory-land-images">
                      <div id="landCardCont">
                          <div class="Inventory-Image-Cont getNew">
                            ADD NEW
                          </div>
                      </div>
                    </div>
                    <div class="inventory-text">
                      <span class="itHead">Enhancements:</span>
                      <span class="inventoryInnerText">
                       you have purchased.
                      </span>
                    </div>
                    <div id="invetory-enh-images">
                      <div id="landCardCont">
                          <div class="Inventory-Image-Cont getNew">
                            ADD NEW
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="inventory-tabs it2">
                    <div id="assetsCont">
                    </div>
                  </div>
                  <div class="inventory-tabs it3" style="display:none;"></div>
                </div>
                <div id="inventory-cta">
                  <div id="invCtaBut">USE</div>
                </div>
              </div>
              <div id="fm-profile">
                <div id="menuLoadingScreen3" class="LoadBox">
                  <div id="loading" class="loadinScreen">CONNECTING...</div>
                  <div class="loadIcon"></div>
                </div>
                <div id="profileMain">
                  <div id="proImgSect">
                    <img id="proImg" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/TAOS-CITY-IDC.png">
                  </div>
                  <div id="proInfo">
                    <div class="proInfoSect">
                      <div class="proLabel">Name:</div>
                      <div id="proLabelName" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Identifier:</div>
                      <div id="proLabelIdentity" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Email:</div>
                      <div id="proLabelEmail" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Rank:</div>
                      <div id="proLabelRank" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Progress:</div>
                      <div id="proLabelProgress" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Power Ups:</div>
                      <div id="proLabelEnh" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Class:</div>
                      <div id="proLabelClass" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Domains:</div>
                      <div id="proLabelDom" class="proInfoInput">-</div>
                    </div>
                  </div>
                </div>
                <div id="profileDesc">
                  Welcome to T.A.O.S City. This interface will allow you to view and update your city profile and developments. No need to come down to City Central!
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
                    <input type="checkbox" id="fsToggle">
                    <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="settingsSections" id="notiTogSect">
                  <div>Notifications</div>
                  <div class="toggleBoxes">
                    <label class="switch">
                    <input type="checkbox" id="notiToggle">
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
                  <div id="walletIcon">
                  <svg id="DIAMOND" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="45px" height="45px" ><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="m794.5,371.91l-200.28-200.28c-.08-.08-.17-.15-.25-.22-.25-.24-.51-.48-.78-.7-.18-.14-.36-.27-.54-.4-.19-.14-.37-.28-.57-.42-.2-.13-.41-.25-.61-.37-.19-.11-.37-.23-.57-.34-.2-.11-.41-.2-.61-.29-.21-.1-.42-.21-.64-.3-.19-.08-.39-.14-.58-.21-.24-.09-.47-.18-.72-.25-.19-.06-.38-.1-.56-.14-.25-.07-.51-.14-.77-.19-.21-.04-.42-.06-.62-.09-.25-.04-.49-.08-.74-.11-.34-.04-.68-.04-1.01-.05-.12,0-.24-.02-.36-.02H215.7c-.16,0-.32.02-.48.02-.3,0-.6.02-.89.05-.27.03-.53.07-.8.12-.19.03-.37.05-.56.09-.28.06-.55.13-.82.2-.17.04-.34.08-.51.13-.26.08-.52.18-.77.27-.18.06-.35.12-.53.19-.24.1-.47.21-.7.33-.18.09-.36.17-.54.26-.23.12-.44.26-.66.39-.17.11-.35.2-.52.32-.24.16-.47.34-.7.51-.14.1-.28.2-.41.31-.36.3-.71.61-1.04.94L5.5,371.91c-.08.08-.16.18-.24.26-.23.25-.47.49-.68.76-.15.19-.29.39-.43.58-.13.18-.26.34-.39.52-.14.22-.27.44-.4.67-.1.17-.21.34-.3.51-.12.22-.22.45-.33.68-.09.19-.18.37-.26.57-.01.03-.03.06-.04.09-.07.19-.13.38-.2.58-.07.21-.15.41-.22.63-.07.23-.12.46-.18.68-.05.22-.11.43-.16.65-.05.27-.08.54-.12.81-.02.18-.06.37-.08.55-.05.46-.07.93-.07,1.39s.02.93.07,1.39c.02.19.06.37.08.55.04.27.07.54.12.8.04.22.11.43.16.65.06.23.11.46.18.68.06.21.14.42.22.63.08.22.15.45.24.67.08.19.17.38.26.57.11.23.21.46.33.68.09.18.2.34.3.51.13.22.26.45.4.67.12.18.26.35.39.52.14.19.28.39.43.58.22.26.45.51.68.76.08.09.15.18.24.26l384.58,384.58c2.74,2.74,6.33,4.11,9.92,4.11s7.18-1.37,9.92-4.11l384.58-384.58c5.48-5.48,5.48-14.36,0-19.83ZM221.51,195.58h104.21l-117.43,172.23H49.27l172.23-172.23Zm218.82,0l117.44,172.23H242.23l117.43-172.23h80.67Zm138.16,0l172.23,172.23h-159.01l-117.44-172.23h104.22Zm-16.82,200.28l-161.67,325.19-161.67-325.19h323.34Zm-354.66,0l155.95,313.68L49.28,395.85h157.73Zm385.99,0h157.73l-313.67,313.68,155.95-313.68Z"/><path class="cls-1" d="m400,126.41c7.75,0,14.02-6.28,14.02-14.02V33.59c0-7.75-6.28-14.02-14.02-14.02s-14.02,6.28-14.02,14.02v78.8c0,7.75,6.28,14.02,14.02,14.02Z"/><path class="cls-1" d="m507.56,119.22c2.21,1.28,4.63,1.89,7.01,1.89,4.84,0,9.55-2.51,12.15-7l39.49-68.19c3.88-6.7,1.59-15.28-5.11-19.16-6.7-3.88-15.28-1.59-19.16,5.11l-39.49,68.19c-3.88,6.7-1.59,15.28,5.11,19.16Z"/><path class="cls-1" d="m640.8,136.37c3.59,0,7.18-1.37,9.92-4.11l55.72-55.72c5.48-5.48,5.48-14.36,0-19.83-5.48-5.47-14.36-5.47-19.83,0l-55.72,55.72c-5.48,5.48-5.48,14.36,0,19.83,2.74,2.74,6.33,4.11,9.92,4.11Z"/><path class="cls-1" d="m273.28,114.11c2.6,4.49,7.31,7,12.15,7,2.38,0,4.8-.61,7.01-1.89,6.7-3.88,8.99-12.46,5.11-19.16l-39.49-68.19c-3.88-6.7-12.46-8.99-19.16-5.11-6.7,3.88-8.99,12.46-5.11,19.16l39.49,68.19Z"/><path class="cls-1" d="m149.28,132.26c2.74,2.74,6.33,4.11,9.92,4.11s7.18-1.37,9.92-4.11c5.48-5.48,5.48-14.36,0-19.83l-55.72-55.72c-5.48-5.47-14.36-5.47-19.83,0-5.48,5.48-5.48,14.36,0,19.83l55.72,55.72Z"/></svg>
                </div>
                  <div>
                    Citizens across T.A.O.S City use the <span class="alt"><a href="https://plugwallet.ooo/" target="_blank">Plug Wallet</a></span> to manage and secure digital assets on their Internet Computer.<br><br>The Plug Wallet allows you to create and manage your digital identity, send and receive payments, participate in governance, and interact with applications and services on the <span class="alt" id="switch23">decentralized network</span>.
                  </div>
                </div>
                <div class="help-tabs ht3">
                  <div id="worldIcon">
                    <svg fill="#000000" width="45px" height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m24 12c0-.002 0-.004 0-.006 0-3.551-1.546-6.74-4.001-8.933l-.012-.01c-.031-.033-.064-.062-.101-.087l-.002-.001c-2.095-1.84-4.859-2.962-7.886-2.962-3.032 0-5.8 1.126-7.91 2.984l.013-.011c-.026.02-.049.041-.07.065v.001c-2.478 2.205-4.031 5.403-4.031 8.963 0 3.55 1.544 6.739 3.997 8.933l.012.01c0 .003.002.005.005.005.031.035.065.065.101.092l.002.001c2.094 1.837 4.857 2.958 7.881 2.958 3.032 0 5.801-1.126 7.911-2.984l-.013.011c.03-.022.056-.045.08-.07 2.475-2.202 4.026-5.395 4.026-8.951 0-.002 0-.005 0-.007zm-4.462 7.805c-.576-.468-1.223-.897-1.909-1.262l-.065-.032c.613-1.767.982-3.804 1.017-5.923v-.016h4.261c-.156 2.852-1.391 5.388-3.301 7.23zm-6.966-1.505c1.283.069 2.482.351 3.588.81l-.072-.026c-.886 2.02-2.133 3.408-3.516 3.713zm0-1.144v-4.584h4.868c-.043 1.961-.383 3.828-.976 5.578l.039-.131c-1.157-.484-2.498-.795-3.903-.862l-.027-.001zm0-5.728v-4.584c1.431-.069 2.772-.379 4.007-.891l-.079.029c.555 1.619.896 3.485.94 5.425v.021zm0-5.728v-4.495c1.383.305 2.63 1.687 3.516 3.713-1.034.43-2.233.711-3.487.781zm2.854-4c1.238.419 2.312 1.009 3.258 1.752l-.023-.018c-.443.348-.94.676-1.464.961l-.056.028c-.449-1.047-1.025-1.947-1.724-2.737l.009.011zm-4-.492v4.492c-1.283-.069-2.482-.35-3.588-.81l.072.026c.89-2.02 2.135-3.407 3.518-3.712zm-4.568 3.212c-.58-.315-1.077-.642-1.544-1.007l.024.018c.923-.726 1.996-1.315 3.158-1.712l.076-.023c-.689.778-1.265 1.678-1.689 2.658l-.025.065zm4.57 2.423v4.584h-4.868c.044-1.961.385-3.827.979-5.577l-.039.131c1.156.483 2.497.794 3.901.861zm0 5.728v4.584c-1.431.069-2.772.379-4.007.891l.079-.029c-.555-1.618-.896-3.485-.94-5.425v-.021zm0 5.728v4.495c-1.383-.305-2.63-1.687-3.516-3.713 1.034-.43 2.233-.71 3.487-.78l.029-.001zm-2.85 4c-1.238-.418-2.311-1.006-3.258-1.748l.024.018c.443-.348.94-.676 1.464-.961l.056-.028c.445 1.047 1.022 1.947 1.723 2.733l-.009-.01zm8.564-2.72c.58.315 1.077.642 1.544 1.007l-.024-.018c-.923.726-1.996 1.315-3.158 1.712l-.076.023c.689-.778 1.265-1.677 1.689-2.657l.025-.065zm5.7-8.151h-4.261c-.035-2.135-.404-4.172-1.058-6.078l.041.138c.751-.399 1.397-.828 1.997-1.312l-.024.018c1.913 1.845 3.148 4.381 3.303 7.205l.001.028zm-18.38-7.233c.576.468 1.223.897 1.909 1.262l.065.032c-.613 1.767-.982 3.804-1.017 5.923v.016h-4.262c.156-2.852 1.391-5.388 3.301-7.23l.003-.003zm-3.304 8.377h4.261c.035 2.135.404 4.172 1.058 6.078l-.041-.138c-.751.399-1.397.828-1.997 1.312l.024-.018c-1.913-1.845-3.148-4.381-3.303-7.205l-.001-.028z"/></svg>
                </div>
                <div>
                  T.A.O.S City's network is powered by the <span class="alt"><a href="https://internetcomputer.org/" target="_blank">Internet Computer</a></span>, a revolutionary decentralized network powered by the ICP token.<br><br>In a city fragmented by distinct governors, the Internet Computer offers citizens in each sector a tool to build powerful neural apps and contracts, free from the tyrannical, centralized old internet. With <span class="alt"><a href="https://www.coinbase.com/price/internet-computer" target="_blank">ICP</a></span> (aka RedDisks/Reds) citizens are building a brighter world.
                </div>
              </div>
              </div>
              <div id="fm-feedback">
                <div id="menuLoadingScreen2" class="LoadBox">
                  <div id="loading" class="loadinScreen">SENDING...</div>
                  <div class="loadIcon"></div>
                </div>
                <div id="feedbackHeadline">Help make T.A.O.S City better.</div>
                <form id="feedbackForm">
                  <input type="email" name="Email" id="feedbackEmailInput" placeholder="Email" maxlength="45">
                  <textarea id="feedbackInput" name="FeedbackText" placeholder="Enter your feedback here..." maxlength="320"></textarea>
                  <input id="feedbackButton" type="submit">
                </form>
              </div>
            </div>
            <div id="fullMenuBG"></div>
            <div id="pinMenu">
              <div id="locked">UNLOCK</div>
            </div>
            <div id="adMenu"></div>
         </div>
         `}}customElements.define("scoge-unimenu",getUniMenu);class scogeRsvp extends HTMLElement{constructor(){super();Ke(this,"closeModal",()=>{document.getElementById("rsvpModal").style.display="none"});Ke(this,"Glow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--primary)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--primary)"});Ke(this,"unGlow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--accent)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--accent)"});this.shadow=this.attachShadow({mode:"open"})}get rsvps(){return this.getAttribute("rsvp")}set rsvps(w){this.setAttribute("rsvp",w)}static get observedAttributes(){return["rsvp"]}attributeChangedCallback(w,D,F){w==="rsvp"&&this.render()}sendFeedback(w){w.preventDefault(),this.shadow.getElementById("rsvpForm").submit()}connectedCallback(){this.render(),this.shadow.getElementById("closeBtn").addEventListener("click",this.closeModal),this.shadow.getElementById("closeBtn").addEventListener("mouseover",this.Glow),this.shadow.getElementById("closeBtn").addEventListener("mouseout",this.unGlow),this.form=this.shadow.querySelector("#rsvpForm"),this.form.addEventListener("submit",w=>{w.preventDefault(),this.shadow.getElementById("menuLoadingScreen").style.display="grid";let D=this.shadow.querySelector("input[name='Guest']:checked"),F=new FormData(this.form);F.append("Guest",D.value),fetch("https://script.google.com/macros/s/AKfycbyDZnFn4Yy7zbQM1KB7uXDt3_WUmI7TuUT9b-Iips7lHf0mfOGs9s-B4V1M80LznyuIoA/exec",{method:"POST",body:F,mode:"cors"}).then(O=>O.text()).then(O=>{this.shadow.getElementById("menuLoadingScreen").style.display="none",this.form.reset(),this.shadow.getElementById("rightPan").innerHTML=`
        <div id="feedbackHeadline" style="font-family: 'BS-R'; font-size: 2em; color: var(--primary); text-align: center; margin-top: 30%; margin-bottom: 10%;">Thank you for your RSVP!</div>
        <div style="font-family:'Garamond';text-align:center;color:var(--secondary); font-size:1.2em">Confirmation emails will be sent out with location details prior to the show.</div>
        `})})}render(){this.shadow.innerHTML=`
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
              background-image: url("https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/textBGRSVP.jpg");
              background-size: cover;
              left: 0;
              top: 0;
              position: fixed;
              z-index: 4;
              overflow: hidden;
            }
            #dimmer {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.9);
              position: fixed;
              left: 0;
              top: 0;
              z-index: 5;
              overflow: hidden;
            }
            #rsvpModal {
              width: 40%;
              height: 40%;
              background-color: rgba(0, 0, 0, 0.6);
              position: absolute;
              left: 28.5%;
              top: 30%;
              z-index: 6;
              padding: 20px;
              border-radius: 10px;
              border: 1px solid black;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
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
              font-size: 1.2rem;
              color: var(--secondary);
              line-height: 1.1;
              margiin-top: 0;
              padding-right: 5%;
              margin-bottom: 40px;
            }
            #rightPan {
              width: 90%;
              height: 90%;
              padding: 5%;
            }
            #closeBtn {
              transition: all 0.3s ease-in-out;
            }
            #closeBtn:hover {
              transform: scale(1.1);
              rotate: 90deg;
            }
            .textInput {
              width: 100%;
              height: 40px;
              border-top: none;
              border-left: none;
              border-right: none;
              border-bottom: 1px solid var(--primary);
              background-color: rgba(0, 0, 0, 0);
              color: var(--accent);
              font-family: "BS-R";
              font-size: 1rem;
              padding-left: 10px;
              margin-bottom: 10px;
            }
            .textInput:focus {
              outline: none;
            }
            #rsvpGuest input[type="radio"] {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              box-sizing: border-box;
              width: 20px;
              height: 20px;
              border: 1px solid var(--accent);
              border-radius: 50%;
              background-color: rgba(0, 0, 0, 0);
              margin-right: 10px;
              margin-left: 10px;
              margin-top: 10px;
              margin-bottom: 10px;
              cursor: pointer;
            }
            #rsvpGuest input[type="radio"]:hover {
              border: 4px solid var(--secondary);
            }
            #rsvpGuest input[type="radio"]:checked {
              background-color: var(--accent);
            }                   
            #deets {
              font-family: "BS-R";
              font-size: 1.1rem;
              color: var(--accent);
            }
            #rsvpGuest {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              margin-top: 20px;
              margin-bottom: 40px;
              font-family: "BS-R";
              color: var(--accent);
            }
            #rsvpGuest label {
              align-self: center;
              justify-self: end;
            }
            #rsvp {
              width: 100px;
              height: 40px;
              background-color: rgba(0, 0, 0, 0);
              border: 1px solid var(--accent);
              color: var(--accent);
              transition: all 0.3s ease-in-out;
              cursor: pointer;
              letter-spacing: 1px;
            }
            #rsvp:hover {
              background-color: var(--accent);
              color: black;
              font-family: "BS-B";
              letter-spacing: 2px;
            }
            h3 {
              margin-top: 0;
              margin-bottom: 0;
              color: var(--primary);
            }
            h4 {
              margin-top: 0;
              margin-bottom: 0;
            }
            h5 {
              margin-top: 0;
              margin-bottom: 30px;
            }
            .LoadBox {
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
            .loadIcon {
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
            .loadinScreen {
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
            #closed {
              display: grid;
              position: relative;
              width: 100%;
              height: 100%;
              margin: 0px;
              padding: 0px;
              right: 0;
              top: 0;
              background-color: rgba(0, 0, 0, 1);
              z-index: 1;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-B";
              text-align: center;
            }
            #rsvpForm {
              display: none !important;
              overflow: hidden;
            }
            #press {
              font-family: "BS-R";
              color: var(--accent);
              font-size: .9em;
            }
            @media screen and (max-width: 769px) {
              #mainBody {
                z-index: 6;
                background-size: cover;
                background-position: center;
              }
              #rsvpModal {
                width: 90%;
                height: 90%;
                z-index: 8;
                left: 0%;
                top: 2%;
                margin-left: 0%;
                grid-template-columns: 1fr;
                grid-template-rows: 35% 65%;
              }
              #info {
                margin-bottom: 10px !important;
              }
              #info p {
                margin-bottom: 0px;
              }
              #deets {
                margin-top: 0px;
              }
              #info {
                padding-right: 0% !important;
                margin-right: 0%;
                width: 100%;
                font-size: 1.4rem;
                margin-top: 2%;
              }
              #leftPan {
                padding-right: 0% !important;
                margin-right: 0%;
                width: 100%;
                font-size: 1.3rem;
              }
              #rsvp {
                width: 150px;
                height: 40px;
                background-color: var(--accent);
                color: black;
                font-family: "BS-B";
                letter-spacing: 2px;
                font-size: 1.2rem;
              }
              #dimmer {
                background-color: rgba(0, 0, 0, 0.8);
              }
              h5 {
                margin-bottom: 0px !important;
              }
              h4 {
                font-size: 1.1rem;
              }
            }
         </style>
         <div id="mainBody">
         <div id="rsvpModal">
            <div id="menuLoadingScreen" class="LoadBox">
              <div id="loading" class="loadinScreen">SENDING...</div>
              <div class="loadIcon"></div>
            </div>
            <div id="closeBtn" style="position: absolute; right: 0; top: 0; padding: 10px; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div id="leftPan">
              <h3>RSVP:</h3>
              <h4>SCOG\xC9 - FW23 SHOW</h4>
              <h5>Chapter 2: Alan & Evie</h5>
              <p id="info">
              Love transcending physical boundaries, where technology and emotions intersect in a tale of telepathic connection amidst government surveillance and blurred lines of reality.
              </p>
              <div id="deets">Date: Feb 14, 2023<br>Time: 7:00pm<br>Location: New York, NY - TBA<br><span style="color:var(--primary);font-size:.7em;">Confirmations will be sent prior to show date.</span></div>
            </div>
            <div id="rightPan">
              <div id="closed"><span>RSVP CLOSED</span><br><span id="press">Press: Contact - Info@scoge.co with credentials.</span></div>
              <form id="rsvpForm" style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <input type="text" name="FirstName" placeholder="First Name" class="textInput">
                <input type="text" name="LastName" placeholder="Last Name" class="textInput">
                <input type="text" name="Profession" placeholder="Profession" class="textInput">
                <input type="text" name="Email" placeholder="Email" class="textInput">
                <div id="rsvpGuest">
                  <label for="guests">Plus 1:</label>
                  <label>Yes</label>
                  <input type="radio" name="Guest" value="yes"> 
                  <label>No</label>
                  <input type="radio" name="Guest" value="no"> 
                </div>
                <input type="submit" value="RSVP" id="rsvp">
              </form>
            </div>
         </div>
         <div id="dimmer"></div>
         </div>
         `}}customElements.define("scoge-rsvp",scogeRsvp);var trackname="SCOG\xC9 Radio",currentAudio=null,currenttrack=0,trackList=[{artist:"SCOG\xC9 Radio - Broadcast 1",link:"https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeSounds/IFSTFAW-Mix.mp3"}];class dtMusic extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get music(){return this.getAttribute("music")}set music(B){this.setAttribute("music",B)}static get observedAttributes(){return["music"]}attributeChangedCallback(B,w,D){B==="music"&&this.render()}playMusic(){currentAudio===null&&(currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currenttrack++),currentAudio.play(),this.shadow.getElementById("playBtn").style.display="none",this.shadow.getElementById("pauseBtn").style.display="block",this.shadow.getElementById("ntxBtn").style.opacity="1",currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()}),this.shadow.getElementById("cat").style.display="block"}pauseMusic(){currentAudio.pause(),this.shadow.getElementById("playBtn").style.display="block",this.shadow.getElementById("pauseBtn").style.display="none",this.shadow.getElementById("cat").style.display="none"}nextRandomTrack(){currentAudio.pause(),currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),currentAudio.play(),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()})}connectedCallback(){this.render(),this.shadow.querySelector("#playBtn").addEventListener("click",()=>{this.playMusic(),this.shadow.getElementById("ntxBtn").style.display="block"}),this.shadow.querySelector("#pauseBtn").addEventListener("click",()=>{this.pauseMusic()}),this.shadow.querySelector("#ntxBtn").addEventListener("click",()=>{this.nextRandomTrack()})}render(){this.shadow.innerHTML=`
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
                // top: 9%;
                right: 0%;
                width: auto;
                height: 8%;
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
                border-radius: 0 10px 10px 0;
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
              left: -12%;
              filter: contrast(150%);
              display: none;
              padding-bottom: 8px;
            }
            @media screen and (max-width: 769px) {
              #musicInterface {
                width: 90%;
                height: 100%;
                top: auto;
                bottom: auto;
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
                border-radius: 5px;
                z-index: 5;
                padding-right: 5%;
                padding-right: 5%;
                overflow: hidden;
                margin-bottom: 5%;
                position: inherit;
              }
              #cat {
                position: fixed;
                right: 5%;
                left: auto;
                bottom: 18%;
                top: auto;
                filter: contrast(1);
                display: none !important;
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
         `}}customElements.define("scoge-music",dtMusic);var currentPage=1,currentBtsPage=1,inventoryTotal=2e3,lexBio="Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOG\xC9 reach its full potential.",ogeBio="Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.";class dtInvestors extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get invest(){return this.getAttribute("invest")}set invest(B){this.setAttribute("invest",B)}static get observedAttributes(){return["invest"]}attributeChangedCallback(B,w,D){B==="invest"&&this.render()}scrollToMenu(){var B=this.shadow.querySelectorAll(".menu-item");B.forEach(w=>{w.addEventListener("click",D=>{var F=D.target.getAttribute("id"),O=this.shadow.getElementById(F.replace("Menu","Sect")),L=O.offsetTop,U=L-200;F==="dataMenu"&&(U=L-0),F==="aboutMenu"&&(U=L-50),this.shadow.getElementById("scrollBody").scrollTo({top:U,behavior:"smooth"}),B.forEach(G=>{G.style.color="var(--primary)",G.style.borderBottom="var(--primary) 1px solid"}),D.target.style.color="var(--secondary)",D.target.style.borderBottom="var(--secondary) 1px solid"}),this.shadow.getElementById("scrollBody").addEventListener("scroll",()=>{var D=this.shadow.getElementById("scrollBody").scrollTop;B.forEach(F=>{var O=F.getAttribute("id"),L=this.shadow.getElementById(O.replace("Menu","Sect")),U=L.offsetTop;D>=U-200&&(B.forEach(G=>{G.style.color="var(--primary)",G.style.borderBottom="var(--primary) 1px solid"}),F.style.color="var(--secondary)",F.style.borderBottom="var(--secondary) 1px solid"),D>=this.shadow.getElementById("scrollBody").scrollHeight-this.shadow.getElementById("scrollBody").clientHeight-100&&(B.forEach(G=>{G.style.color="var(--primary)",G.style.borderBottom="var(--primary) 1px solid"}),this.shadow.getElementById("contactMenu").style.color="var(--secondary)",this.shadow.getElementById("contactMenu").style.borderBottom="var(--secondary) 1px solid")})})})}openInvestor(){this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="0%",clearShop(),clearSettings(),clearFilter()}closeInvestor(){window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-70%")}nextImage(){currentPage>=2&&(currentPage=0),currentPage++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}previousImage(){currentPage<=1?currentPage=2:currentPage--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}nextBtsImage(){currentBtsPage>=9&&(currentBtsPage=0),currentBtsPage++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}preBtsImage(){currentBtsPage<=1?currentBtsPage=9:currentBtsPage--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}slidersTotal(){var B=this.shadow.getElementById("avgRetailSlider").value,w=this.shadow.getElementById("dtcQtySlider").value,D=this.shadow.getElementById("accountsSlider").value,F=this.shadow.getElementById("wsOrderSlider").value,O=B*w+B/2*(F*D);this.shadow.getElementById("finalTotal").innerHTML=O.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}sliders(){this.shadow.getElementById("budgetSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("budNum").innerHTML=this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("dcqNum").innerHTML=Math.round(inventoryTotal),this.shadow.getElementById("wqtyNum").innerHTML=Math.round(inventoryTotal)}.bind(this)),this.shadow.getElementById("avgRetailSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("avrNum").innerHTML=this.shadow.getElementById("avgRetailSlider").value}.bind(this)),this.shadow.getElementById("avgPCSlider").addEventListener("input",function(){this.slidersTotal(),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,console.log(inventoryTotal),this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("avpNum").innerHTML=this.shadow.getElementById("avgPCSlider").value}.bind(this)),this.shadow.getElementById("dtcQtySlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this)),this.shadow.getElementById("accountsSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("waNum").innerHTML=this.shadow.getElementById("accountsSlider").value}.bind(this)),this.shadow.getElementById("wsOrderSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("wsOrderSlider").value}.bind(this)),this.shadow.getElementById("wrperSlider").addEventListener("input",function(){this.slidersTotal();var B=this.shadow.getElementById("wrperSlider").value/2+50,w=this.shadow.getElementById("wrperSlider").value/2-50;this.shadow.getElementById("wrP1").innerHTML=Math.round(Math.abs(w)),this.shadow.getElementById("wrP2").innerHTML=+Math.round(B),this.shadow.getElementById("wsOrderSlider").value=Math.round(inventoryTotal*(Math.abs(w)/100)),this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("dtcQtySlider").value=Math.round(inventoryTotal*(B/100)),this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this))}team(){this.shadow.getElementById("teamMain").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Starnilas Oge",this.shadow.getElementById("memberProf").innerHTML="Founder & Creative Director",this.shadow.getElementById("memberBio").innerHTML=ogeBio}.bind(this)),this.shadow.getElementById("team2").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Lex Fenwick",this.shadow.getElementById("memberProf").innerHTML="The Dow Jones, WSJ",this.shadow.getElementById("memberBio").innerHTML=lexBio}.bind(this))}connectedCallback(){this.render(),document.getElementById("investBut").addEventListener("click",this.openInvestor.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeInvestor.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this)),this.sliders(),this.team(),this.scrollToMenu()}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-investors",dtInvestors);class dialogueBox extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get dialogue(){return this.getAttribute("dialogue")}set dialogue(B){this.setAttribute("dialogue",B)}static get observedAttributes(){return["dialogue"]}attributeChangedCallback(B,w,D){B==="dialogue"&&this.render()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
           `}}customElements.define("scoge-dialogue",dialogueBox);function _assertThisInitialized(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function _inheritsLoose(Q,B){Q.prototype=Object.create(B.prototype),Q.prototype.constructor=Q,Q.__proto__=B}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _config={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_defaults={duration:.5,overwrite:!1,delay:0},_suppressOverwrites,_reverting$1,_context,_bigNum$1=1e8,_tinyNum=1/_bigNum$1,_2PI=Math.PI*2,_HALF_PI=_2PI/4,_gsID=0,_sqrt=Math.sqrt,_cos=Math.cos,_sin=Math.sin,_isString=function Q(B){return typeof B=="string"},_isFunction=function Q(B){return typeof B=="function"},_isNumber=function Q(B){return typeof B=="number"},_isUndefined=function Q(B){return typeof B=="undefined"},_isObject=function Q(B){return typeof B=="object"},_isNotFalse=function Q(B){return B!==!1},_windowExists$1=function Q(){return typeof window!="undefined"},_isFuncOrString=function Q(B){return _isFunction(B)||_isString(B)},_isTypedArray=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_isArray=Array.isArray,_strictNumExp=/(?:-?\.?\d|\.)+/gi,_numExp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_numWithUnitExp=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_complexStringNumExp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_relExp=/[+-]=-?[.\d]+/,_delimitedValueExp=/[^,'"\[\]\s]+/gi,_unitExp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_globalTimeline,_win$1,_coreInitted,_doc$1,_globals={},_installScope={},_coreReady,_install=function Q(B){return(_installScope=_merge(B,_globals))&&gsap$1},_missingPlugin=function Q(B,w){return console.warn("Invalid property",B,"set to",w,"Missing plugin? gsap.registerPlugin()")},_warn=function Q(B,w){return!w&&console.warn(B)},_addGlobal=function Q(B,w){return B&&(_globals[B]=w)&&_installScope&&(_installScope[B]=w)||_globals},_emptyFunc=function Q(){return 0},_startAtRevertConfig={suppressEvents:!0,isStart:!0,kill:!1},_revertConfigNoKill={suppressEvents:!0,kill:!1},_revertConfig={suppressEvents:!0},_reservedProps={},_lazyTweens=[],_lazyLookup={},_lastRenderedFrame,_plugins={},_effects={},_nextGCFrame=30,_harnessPlugins=[],_callbackNames="",_harness=function Q(B){var w=B[0],D,F;if(_isObject(w)||_isFunction(w)||(B=[B]),!(D=(w._gsap||{}).harness)){for(F=_harnessPlugins.length;F--&&!_harnessPlugins[F].targetTest(w););D=_harnessPlugins[F]}for(F=B.length;F--;)B[F]&&(B[F]._gsap||(B[F]._gsap=new GSCache(B[F],D)))||B.splice(F,1);return B},_getCache=function Q(B){return B._gsap||_harness(toArray(B))[0]._gsap},_getProperty=function Q(B,w,D){return(D=B[w])&&_isFunction(D)?B[w]():_isUndefined(D)&&B.getAttribute&&B.getAttribute(w)||D},_forEachName=function Q(B,w){return(B=B.split(",")).forEach(w)||B},_round=function Q(B){return Math.round(B*1e5)/1e5||0},_roundPrecise=function Q(B){return Math.round(B*1e7)/1e7||0},_parseRelative=function Q(B,w){var D=w.charAt(0),F=parseFloat(w.substr(2));return B=parseFloat(B),D==="+"?B+F:D==="-"?B-F:D==="*"?B*F:B/F},_arrayContainsAny=function Q(B,w){for(var D=w.length,F=0;B.indexOf(w[F])<0&&++F<D;);return F<D},_lazyRender=function Q(){var B=_lazyTweens.length,w=_lazyTweens.slice(0),D,F;for(_lazyLookup={},_lazyTweens.length=0,D=0;D<B;D++)F=w[D],F&&F._lazy&&(F.render(F._lazy[0],F._lazy[1],!0)._lazy=0)},_lazySafeRender=function Q(B,w,D,F){_lazyTweens.length&&!_reverting$1&&_lazyRender(),B.render(w,D,F||_reverting$1&&w<0&&(B._initted||B._startAt)),_lazyTweens.length&&!_reverting$1&&_lazyRender()},_numericIfPossible=function Q(B){var w=parseFloat(B);return(w||w===0)&&(B+"").match(_delimitedValueExp).length<2?w:_isString(B)?B.trim():B},_passThrough=function Q(B){return B},_setDefaults=function Q(B,w){for(var D in w)D in B||(B[D]=w[D]);return B},_setKeyframeDefaults=function Q(B){return function(w,D){for(var F in D)F in w||F==="duration"&&B||F==="ease"||(w[F]=D[F])}},_merge=function Q(B,w){for(var D in w)B[D]=w[D];return B},_mergeDeep=function Q(B,w){for(var D in w)D!=="__proto__"&&D!=="constructor"&&D!=="prototype"&&(B[D]=_isObject(w[D])?Q(B[D]||(B[D]={}),w[D]):w[D]);return B},_copyExcluding=function Q(B,w){var D={},F;for(F in B)F in w||(D[F]=B[F]);return D},_inheritDefaults=function Q(B){var w=B.parent||_globalTimeline,D=B.keyframes?_setKeyframeDefaults(_isArray(B.keyframes)):_setDefaults;if(_isNotFalse(B.inherit))for(;w;)D(B,w.vars.defaults),w=w.parent||w._dp;return B},_arraysMatch=function Q(B,w){for(var D=B.length,F=D===w.length;F&&D--&&B[D]===w[D];);return D<0},_addLinkedListItem=function Q(B,w,D,F,O){D===void 0&&(D="_first"),F===void 0&&(F="_last");var L=B[F],U;if(O)for(U=w[O];L&&L[O]>U;)L=L._prev;return L?(w._next=L._next,L._next=w):(w._next=B[D],B[D]=w),w._next?w._next._prev=w:B[F]=w,w._prev=L,w.parent=w._dp=B,w},_removeLinkedListItem=function Q(B,w,D,F){D===void 0&&(D="_first"),F===void 0&&(F="_last");var O=w._prev,L=w._next;O?O._next=L:B[D]===w&&(B[D]=L),L?L._prev=O:B[F]===w&&(B[F]=O),w._next=w._prev=w.parent=null},_removeFromParent=function Q(B,w){B.parent&&(!w||B.parent.autoRemoveChildren)&&B.parent.remove(B),B._act=0},_uncache=function Q(B,w){if(B&&(!w||w._end>B._dur||w._start<0))for(var D=B;D;)D._dirty=1,D=D.parent;return B},_recacheAncestors=function Q(B){for(var w=B.parent;w&&w.parent;)w._dirty=1,w.totalDuration(),w=w.parent;return B},_rewindStartAt=function Q(B,w,D,F){return B._startAt&&(_reverting$1?B._startAt.revert(_revertConfigNoKill):B.vars.immediateRender&&!B.vars.autoRevert||B._startAt.render(w,!0,F))},_hasNoPausedAncestors=function Q(B){return!B||B._ts&&Q(B.parent)},_elapsedCycleDuration=function Q(B){return B._repeat?_animationCycle(B._tTime,B=B.duration()+B._rDelay)*B:0},_animationCycle=function Q(B,w){var D=Math.floor(B/=w);return B&&D===B?D-1:D},_parentToChildTotalTime=function Q(B,w){return(B-w._start)*w._ts+(w._ts>=0?0:w._dirty?w.totalDuration():w._tDur)},_setEnd=function Q(B){return B._end=_roundPrecise(B._start+(B._tDur/Math.abs(B._ts||B._rts||_tinyNum)||0))},_alignPlayhead=function Q(B,w){var D=B._dp;return D&&D.smoothChildTiming&&B._ts&&(B._start=_roundPrecise(D._time-(B._ts>0?w/B._ts:((B._dirty?B.totalDuration():B._tDur)-w)/-B._ts)),_setEnd(B),D._dirty||_uncache(D,B)),B},_postAddChecks=function Q(B,w){var D;if((w._time||w._initted&&!w._dur)&&(D=_parentToChildTotalTime(B.rawTime(),w),(!w._dur||_clamp(0,w.totalDuration(),D)-w._tTime>_tinyNum)&&w.render(D,!0)),_uncache(B,w)._dp&&B._initted&&B._time>=B._dur&&B._ts){if(B._dur<B.duration())for(D=B;D._dp;)D.rawTime()>=0&&D.totalTime(D._tTime),D=D._dp;B._zTime=-_tinyNum}},_addToTimeline=function Q(B,w,D,F){return w.parent&&_removeFromParent(w),w._start=_roundPrecise((_isNumber(D)?D:D||B!==_globalTimeline?_parsePosition(B,D,w):B._time)+w._delay),w._end=_roundPrecise(w._start+(w.totalDuration()/Math.abs(w.timeScale())||0)),_addLinkedListItem(B,w,"_first","_last",B._sort?"_start":0),_isFromOrFromStart(w)||(B._recent=w),F||_postAddChecks(B,w),B._ts<0&&_alignPlayhead(B,B._tTime),B},_scrollTrigger=function Q(B,w){return(_globals.ScrollTrigger||_missingPlugin("scrollTrigger",w))&&_globals.ScrollTrigger.create(w,B)},_attemptInitTween=function Q(B,w,D,F,O){if(_initTween(B,w,O),!B._initted)return 1;if(!D&&B._pt&&!_reverting$1&&(B._dur&&B.vars.lazy!==!1||!B._dur&&B.vars.lazy)&&_lastRenderedFrame!==_ticker.frame)return _lazyTweens.push(B),B._lazy=[O,F],1},_parentPlayheadIsBeforeStart=function Q(B){var w=B.parent;return w&&w._ts&&w._initted&&!w._lock&&(w.rawTime()<0||Q(w))},_isFromOrFromStart=function Q(B){var w=B.data;return w==="isFromStart"||w==="isStart"},_renderZeroDurationTween=function Q(B,w,D,F){var O=B.ratio,L=w<0||!w&&(!B._start&&_parentPlayheadIsBeforeStart(B)&&!(!B._initted&&_isFromOrFromStart(B))||(B._ts<0||B._dp._ts<0)&&!_isFromOrFromStart(B))?0:1,U=B._rDelay,G=0,q,Y,W;if(U&&B._repeat&&(G=_clamp(0,B._tDur,w),Y=_animationCycle(G,U),B._yoyo&&Y&1&&(L=1-L),Y!==_animationCycle(B._tTime,U)&&(O=1-L,B.vars.repeatRefresh&&B._initted&&B.invalidate())),L!==O||_reverting$1||F||B._zTime===_tinyNum||!w&&B._zTime){if(!B._initted&&_attemptInitTween(B,w,F,D,G))return;for(W=B._zTime,B._zTime=w||(D?_tinyNum:0),D||(D=w&&!W),B.ratio=L,B._from&&(L=1-L),B._time=0,B._tTime=G,q=B._pt;q;)q.r(L,q.d),q=q._next;w<0&&_rewindStartAt(B,w,D,!0),B._onUpdate&&!D&&_callback(B,"onUpdate"),G&&B._repeat&&!D&&B.parent&&_callback(B,"onRepeat"),(w>=B._tDur||w<0)&&B.ratio===L&&(L&&_removeFromParent(B,1),!D&&!_reverting$1&&(_callback(B,L?"onComplete":"onReverseComplete",!0),B._prom&&B._prom()))}else B._zTime||(B._zTime=w)},_findNextPauseTween=function Q(B,w,D){var F;if(D>w)for(F=B._first;F&&F._start<=D;){if(F.data==="isPause"&&F._start>w)return F;F=F._next}else for(F=B._last;F&&F._start>=D;){if(F.data==="isPause"&&F._start<w)return F;F=F._prev}},_setDuration=function Q(B,w,D,F){var O=B._repeat,L=_roundPrecise(w)||0,U=B._tTime/B._tDur;return U&&!F&&(B._time*=L/B._dur),B._dur=L,B._tDur=O?O<0?1e10:_roundPrecise(L*(O+1)+B._rDelay*O):L,U>0&&!F&&_alignPlayhead(B,B._tTime=B._tDur*U),B.parent&&_setEnd(B),D||_uncache(B.parent,B),B},_onUpdateTotalDuration=function Q(B){return B instanceof Timeline?_uncache(B):_setDuration(B,B._dur)},_zeroPosition={_start:0,endTime:_emptyFunc,totalDuration:_emptyFunc},_parsePosition=function Q(B,w,D){var F=B.labels,O=B._recent||_zeroPosition,L=B.duration()>=_bigNum$1?O.endTime(!1):B._dur,U,G,q;return _isString(w)&&(isNaN(w)||w in F)?(G=w.charAt(0),q=w.substr(-1)==="%",U=w.indexOf("="),G==="<"||G===">"?(U>=0&&(w=w.replace(/=/,"")),(G==="<"?O._start:O.endTime(O._repeat>=0))+(parseFloat(w.substr(1))||0)*(q?(U<0?O:D).totalDuration()/100:1)):U<0?(w in F||(F[w]=L),F[w]):(G=parseFloat(w.charAt(U-1)+w.substr(U+1)),q&&D&&(G=G/100*(_isArray(D)?D[0]:D).totalDuration()),U>1?Q(B,w.substr(0,U-1),D)+G:L+G)):w==null?L:+w},_createTweenType=function Q(B,w,D){var F=_isNumber(w[1]),O=(F?2:1)+(B<2?0:1),L=w[O],U,G;if(F&&(L.duration=w[1]),L.parent=D,B){for(U=L,G=D;G&&!("immediateRender"in U);)U=G.vars.defaults||{},G=_isNotFalse(G.vars.inherit)&&G.parent;L.immediateRender=_isNotFalse(U.immediateRender),B<2?L.runBackwards=1:L.startAt=w[O-1]}return new Tween(w[0],L,w[O+1])},_conditionalReturn=function Q(B,w){return B||B===0?w(B):w},_clamp=function Q(B,w,D){return D<B?B:D>w?w:D},getUnit=function Q(B,w){return!_isString(B)||!(w=_unitExp.exec(B))?"":w[1]},clamp=function Q(B,w,D){return _conditionalReturn(D,function(F){return _clamp(B,w,F)})},_slice=[].slice,_isArrayLike=function Q(B,w){return B&&_isObject(B)&&"length"in B&&(!w&&!B.length||B.length-1 in B&&_isObject(B[0]))&&!B.nodeType&&B!==_win$1},_flatten=function Q(B,w,D){return D===void 0&&(D=[]),B.forEach(function(F){var O;return _isString(F)&&!w||_isArrayLike(F,1)?(O=D).push.apply(O,toArray(F)):D.push(F)})||D},toArray=function Q(B,w,D){return _context&&!w&&_context.selector?_context.selector(B):_isString(B)&&!D&&(_coreInitted||!_wake())?_slice.call((w||_doc$1).querySelectorAll(B),0):_isArray(B)?_flatten(B,D):_isArrayLike(B)?_slice.call(B,0):B?[B]:[]},selector=function Q(B){return B=toArray(B)[0]||_warn("Invalid scope")||{},function(w){var D=B.current||B.nativeElement||B;return toArray(w,D.querySelectorAll?D:D===B?_warn("Invalid scope")||_doc$1.createElement("div"):B)}},shuffle=function Q(B){return B.sort(function(){return .5-Math.random()})},distribute=function Q(B){if(_isFunction(B))return B;var w=_isObject(B)?B:{each:B},D=_parseEase(w.ease),F=w.from||0,O=parseFloat(w.base)||0,L={},U=F>0&&F<1,G=isNaN(F)||U,q=w.axis,Y=F,W=F;return _isString(F)?Y=W={center:.5,edges:.5,end:1}[F]||0:!U&&G&&(Y=F[0],W=F[1]),function(X,te,ae){var ie=(ae||w).length,ce=L[ie],he,pe,Be,Ie,ye,Ce,we,De,Se;if(!ce){if(Se=w.grid==="auto"?0:(w.grid||[1,_bigNum$1])[1],!Se){for(we=-_bigNum$1;we<(we=ae[Se++].getBoundingClientRect().left)&&Se<ie;);Se--}for(ce=L[ie]=[],he=G?Math.min(Se,ie)*Y-.5:F%Se,pe=Se===_bigNum$1?0:G?ie*W/Se-.5:F/Se|0,we=0,De=_bigNum$1,Ce=0;Ce<ie;Ce++)Be=Ce%Se-he,Ie=pe-(Ce/Se|0),ce[Ce]=ye=q?Math.abs(q==="y"?Ie:Be):_sqrt(Be*Be+Ie*Ie),ye>we&&(we=ye),ye<De&&(De=ye);F==="random"&&shuffle(ce),ce.max=we-De,ce.min=De,ce.v=ie=(parseFloat(w.amount)||parseFloat(w.each)*(Se>ie?ie-1:q?q==="y"?ie/Se:Se:Math.max(Se,ie/Se))||0)*(F==="edges"?-1:1),ce.b=ie<0?O-ie:O,ce.u=getUnit(w.amount||w.each)||0,D=D&&ie<0?_invertEase(D):D}return ie=(ce[X]-ce.min)/ce.max||0,_roundPrecise(ce.b+(D?D(ie):ie)*ce.v)+ce.u}},_roundModifier=function Q(B){var w=Math.pow(10,((B+"").split(".")[1]||"").length);return function(D){var F=_roundPrecise(Math.round(parseFloat(D)/B)*B*w);return(F-F%1)/w+(_isNumber(D)?0:getUnit(D))}},snap=function Q(B,w){var D=_isArray(B),F,O;return!D&&_isObject(B)&&(F=D=B.radius||_bigNum$1,B.values?(B=toArray(B.values),(O=!_isNumber(B[0]))&&(F*=F)):B=_roundModifier(B.increment)),_conditionalReturn(w,D?_isFunction(B)?function(L){return O=B(L),Math.abs(O-L)<=F?O:L}:function(L){for(var U=parseFloat(O?L.x:L),G=parseFloat(O?L.y:0),q=_bigNum$1,Y=0,W=B.length,X,te;W--;)O?(X=B[W].x-U,te=B[W].y-G,X=X*X+te*te):X=Math.abs(B[W]-U),X<q&&(q=X,Y=W);return Y=!F||q<=F?B[Y]:L,O||Y===L||_isNumber(L)?Y:Y+getUnit(L)}:_roundModifier(B))},random=function Q(B,w,D,F){return _conditionalReturn(_isArray(B)?!w:D===!0?!!(D=0):!F,function(){return _isArray(B)?B[~~(Math.random()*B.length)]:(D=D||1e-5)&&(F=D<1?Math.pow(10,(D+"").length-2):1)&&Math.floor(Math.round((B-D/2+Math.random()*(w-B+D*.99))/D)*D*F)/F})},pipe=function Q(){for(var B=arguments.length,w=new Array(B),D=0;D<B;D++)w[D]=arguments[D];return function(F){return w.reduce(function(O,L){return L(O)},F)}},unitize=function Q(B,w){return function(D){return B(parseFloat(D))+(w||getUnit(D))}},normalize=function Q(B,w,D){return mapRange(B,w,0,1,D)},_wrapArray=function Q(B,w,D){return _conditionalReturn(D,function(F){return B[~~w(F)]})},wrap=function Q(B,w,D){var F=w-B;return _isArray(B)?_wrapArray(B,Q(0,B.length),w):_conditionalReturn(D,function(O){return(F+(O-B)%F)%F+B})},wrapYoyo=function Q(B,w,D){var F=w-B,O=F*2;return _isArray(B)?_wrapArray(B,Q(0,B.length-1),w):_conditionalReturn(D,function(L){return L=(O+(L-B)%O)%O||0,B+(L>F?O-L:L)})},_replaceRandom=function Q(B){for(var w=0,D="",F,O,L,U;~(F=B.indexOf("random(",w));)L=B.indexOf(")",F),U=B.charAt(F+7)==="[",O=B.substr(F+7,L-F-7).match(U?_delimitedValueExp:_strictNumExp),D+=B.substr(w,F-w)+random(U?O:+O[0],U?0:+O[1],+O[2]||1e-5),w=L+1;return D+B.substr(w,B.length-w)},mapRange=function Q(B,w,D,F,O){var L=w-B,U=F-D;return _conditionalReturn(O,function(G){return D+((G-B)/L*U||0)})},interpolate=function Q(B,w,D,F){var O=isNaN(B+w)?0:function(te){return(1-te)*B+te*w};if(!O){var L=_isString(B),U={},G,q,Y,W,X;if(D===!0&&(F=1)&&(D=null),L)B={p:B},w={p:w};else if(_isArray(B)&&!_isArray(w)){for(Y=[],W=B.length,X=W-2,q=1;q<W;q++)Y.push(Q(B[q-1],B[q]));W--,O=function(ae){ae*=W;var ie=Math.min(X,~~ae);return Y[ie](ae-ie)},D=w}else F||(B=_merge(_isArray(B)?[]:{},B));if(!Y){for(G in w)_addPropTween.call(U,B,G,"get",w[G]);O=function(ae){return _renderPropTweens(ae,U)||(L?B.p:B)}}}return _conditionalReturn(D,O)},_getLabelInDirection=function Q(B,w,D){var F=B.labels,O=_bigNum$1,L,U,G;for(L in F)U=F[L]-w,U<0==!!D&&U&&O>(U=Math.abs(U))&&(G=L,O=U);return G},_callback=function Q(B,w,D){var F=B.vars,O=F[w],L=_context,U=B._ctx,G,q,Y;if(!!O)return G=F[w+"Params"],q=F.callbackScope||B,D&&_lazyTweens.length&&_lazyRender(),U&&(_context=U),Y=G?O.apply(q,G):O.call(q),_context=L,Y},_interrupt=function Q(B){return _removeFromParent(B),B.scrollTrigger&&B.scrollTrigger.kill(!!_reverting$1),B.progress()<1&&_callback(B,"onInterrupt"),B},_quickTween,_createPlugin=function Q(B){B=!B.name&&B.default||B;var w=B.name,D=_isFunction(B),F=w&&!D&&B.init?function(){this._props=[]}:B,O={init:_emptyFunc,render:_renderPropTweens,add:_addPropTween,kill:_killPropTweensOf,modifier:_addPluginModifier,rawVars:0},L={targetTest:0,get:0,getSetter:_getSetter,aliases:{},register:0};if(_wake(),B!==F){if(_plugins[w])return;_setDefaults(F,_setDefaults(_copyExcluding(B,O),L)),_merge(F.prototype,_merge(O,_copyExcluding(B,L))),_plugins[F.prop=w]=F,B.targetTest&&(_harnessPlugins.push(F),_reservedProps[w]=1),w=(w==="css"?"CSS":w.charAt(0).toUpperCase()+w.substr(1))+"Plugin"}_addGlobal(w,F),B.register&&B.register(gsap$1,F,PropTween)},_255=255,_colorLookup={aqua:[0,_255,_255],lime:[0,_255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_255],navy:[0,0,128],white:[_255,_255,_255],olive:[128,128,0],yellow:[_255,_255,0],orange:[_255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_255,0,0],pink:[_255,192,203],cyan:[0,_255,_255],transparent:[_255,_255,_255,0]},_hue=function Q(B,w,D){return B+=B<0?1:B>1?-1:0,(B*6<1?w+(D-w)*B*6:B<.5?D:B*3<2?w+(D-w)*(2/3-B)*6:w)*_255+.5|0},splitColor=function Q(B,w,D){var F=B?_isNumber(B)?[B>>16,B>>8&_255,B&_255]:0:_colorLookup.black,O,L,U,G,q,Y,W,X,te,ae;if(!F){if(B.substr(-1)===","&&(B=B.substr(0,B.length-1)),_colorLookup[B])F=_colorLookup[B];else if(B.charAt(0)==="#"){if(B.length<6&&(O=B.charAt(1),L=B.charAt(2),U=B.charAt(3),B="#"+O+O+L+L+U+U+(B.length===5?B.charAt(4)+B.charAt(4):"")),B.length===9)return F=parseInt(B.substr(1,6),16),[F>>16,F>>8&_255,F&_255,parseInt(B.substr(7),16)/255];B=parseInt(B.substr(1),16),F=[B>>16,B>>8&_255,B&_255]}else if(B.substr(0,3)==="hsl"){if(F=ae=B.match(_strictNumExp),!w)G=+F[0]%360/360,q=+F[1]/100,Y=+F[2]/100,L=Y<=.5?Y*(q+1):Y+q-Y*q,O=Y*2-L,F.length>3&&(F[3]*=1),F[0]=_hue(G+1/3,O,L),F[1]=_hue(G,O,L),F[2]=_hue(G-1/3,O,L);else if(~B.indexOf("="))return F=B.match(_numExp),D&&F.length<4&&(F[3]=1),F}else F=B.match(_strictNumExp)||_colorLookup.transparent;F=F.map(Number)}return w&&!ae&&(O=F[0]/_255,L=F[1]/_255,U=F[2]/_255,W=Math.max(O,L,U),X=Math.min(O,L,U),Y=(W+X)/2,W===X?G=q=0:(te=W-X,q=Y>.5?te/(2-W-X):te/(W+X),G=W===O?(L-U)/te+(L<U?6:0):W===L?(U-O)/te+2:(O-L)/te+4,G*=60),F[0]=~~(G+.5),F[1]=~~(q*100+.5),F[2]=~~(Y*100+.5)),D&&F.length<4&&(F[3]=1),F},_colorOrderData=function Q(B){var w=[],D=[],F=-1;return B.split(_colorExp).forEach(function(O){var L=O.match(_numWithUnitExp)||[];w.push.apply(w,L),D.push(F+=L.length+1)}),w.c=D,w},_formatColors=function Q(B,w,D){var F="",O=(B+F).match(_colorExp),L=w?"hsla(":"rgba(",U=0,G,q,Y,W;if(!O)return B;if(O=O.map(function(X){return(X=splitColor(X,w,1))&&L+(w?X[0]+","+X[1]+"%,"+X[2]+"%,"+X[3]:X.join(","))+")"}),D&&(Y=_colorOrderData(B),G=D.c,G.join(F)!==Y.c.join(F)))for(q=B.replace(_colorExp,"1").split(_numWithUnitExp),W=q.length-1;U<W;U++)F+=q[U]+(~G.indexOf(U)?O.shift()||L+"0,0,0,0)":(Y.length?Y:O.length?O:D).shift());if(!q)for(q=B.split(_colorExp),W=q.length-1;U<W;U++)F+=q[U]+O[U];return F+q[W]},_colorExp=function(){var Q="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",B;for(B in _colorLookup)Q+="|"+B+"\\b";return new RegExp(Q+")","gi")}(),_hslExp=/hsl[a]?\(/,_colorStringFilter=function Q(B){var w=B.join(" "),D;if(_colorExp.lastIndex=0,_colorExp.test(w))return D=_hslExp.test(w),B[1]=_formatColors(B[1],D),B[0]=_formatColors(B[0],D,_colorOrderData(B[1])),!0},_tickerActive,_ticker=function(){var Q=Date.now,B=500,w=33,D=Q(),F=D,O=1e3/240,L=O,U=[],G,q,Y,W,X,te,ae=function ie(ce){var he=Q()-F,pe=ce===!0,Be,Ie,ye,Ce;if(he>B&&(D+=he-w),F+=he,ye=F-D,Be=ye-L,(Be>0||pe)&&(Ce=++W.frame,X=ye-W.time*1e3,W.time=ye=ye/1e3,L+=Be+(Be>=O?4:O-Be),Ie=1),pe||(G=q(ie)),Ie)for(te=0;te<U.length;te++)U[te](ye,X,Ce,ce)};return W={time:0,frame:0,tick:function(){ae(!0)},deltaRatio:function(ce){return X/(1e3/(ce||60))},wake:function(){_coreReady&&(!_coreInitted&&_windowExists$1()&&(_win$1=_coreInitted=window,_doc$1=_win$1.document||{},_globals.gsap=gsap$1,(_win$1.gsapVersions||(_win$1.gsapVersions=[])).push(gsap$1.version),_install(_installScope||_win$1.GreenSockGlobals||!_win$1.gsap&&_win$1||{}),Y=_win$1.requestAnimationFrame),G&&W.sleep(),q=Y||function(ce){return setTimeout(ce,L-W.time*1e3+1|0)},_tickerActive=1,ae(2))},sleep:function(){(Y?_win$1.cancelAnimationFrame:clearTimeout)(G),_tickerActive=0,q=_emptyFunc},lagSmoothing:function(ce,he){B=ce||1/0,w=Math.min(he||33,B)},fps:function(ce){O=1e3/(ce||240),L=W.time*1e3+O},add:function(ce,he,pe){var Be=he?function(Ie,ye,Ce,we){ce(Ie,ye,Ce,we),W.remove(Be)}:ce;return W.remove(ce),U[pe?"unshift":"push"](Be),_wake(),Be},remove:function(ce,he){~(he=U.indexOf(ce))&&U.splice(he,1)&&te>=he&&te--},_listeners:U},W}(),_wake=function Q(){return!_tickerActive&&_ticker.wake()},_easeMap={},_customEaseExp=/^[\d.\-M][\d.\-,\s]/,_quotesExp=/["']/g,_parseObjectInString=function Q(B){for(var w={},D=B.substr(1,B.length-3).split(":"),F=D[0],O=1,L=D.length,U,G,q;O<L;O++)G=D[O],U=O!==L-1?G.lastIndexOf(","):G.length,q=G.substr(0,U),w[F]=isNaN(q)?q.replace(_quotesExp,"").trim():+q,F=G.substr(U+1).trim();return w},_valueInParentheses=function Q(B){var w=B.indexOf("(")+1,D=B.indexOf(")"),F=B.indexOf("(",w);return B.substring(w,~F&&F<D?B.indexOf(")",D+1):D)},_configEaseFromString=function Q(B){var w=(B+"").split("("),D=_easeMap[w[0]];return D&&w.length>1&&D.config?D.config.apply(null,~B.indexOf("{")?[_parseObjectInString(w[1])]:_valueInParentheses(B).split(",").map(_numericIfPossible)):_easeMap._CE&&_customEaseExp.test(B)?_easeMap._CE("",B):D},_invertEase=function Q(B){return function(w){return 1-B(1-w)}},_propagateYoyoEase=function Q(B,w){for(var D=B._first,F;D;)D instanceof Timeline?Q(D,w):D.vars.yoyoEase&&(!D._yoyo||!D._repeat)&&D._yoyo!==w&&(D.timeline?Q(D.timeline,w):(F=D._ease,D._ease=D._yEase,D._yEase=F,D._yoyo=w)),D=D._next},_parseEase=function Q(B,w){return B&&(_isFunction(B)?B:_easeMap[B]||_configEaseFromString(B))||w},_insertEase=function Q(B,w,D,F){D===void 0&&(D=function(G){return 1-w(1-G)}),F===void 0&&(F=function(G){return G<.5?w(G*2)/2:1-w((1-G)*2)/2});var O={easeIn:w,easeOut:D,easeInOut:F},L;return _forEachName(B,function(U){_easeMap[U]=_globals[U]=O,_easeMap[L=U.toLowerCase()]=D;for(var G in O)_easeMap[L+(G==="easeIn"?".in":G==="easeOut"?".out":".inOut")]=_easeMap[U+"."+G]=O[G]}),O},_easeInOutFromOut=function Q(B){return function(w){return w<.5?(1-B(1-w*2))/2:.5+B((w-.5)*2)/2}},_configElastic=function Q(B,w,D){var F=w>=1?w:1,O=(D||(B?.3:.45))/(w<1?w:1),L=O/_2PI*(Math.asin(1/F)||0),U=function(Y){return Y===1?1:F*Math.pow(2,-10*Y)*_sin((Y-L)*O)+1},G=B==="out"?U:B==="in"?function(q){return 1-U(1-q)}:_easeInOutFromOut(U);return O=_2PI/O,G.config=function(q,Y){return Q(B,q,Y)},G},_configBack=function Q(B,w){w===void 0&&(w=1.70158);var D=function(L){return L?--L*L*((w+1)*L+w)+1:0},F=B==="out"?D:B==="in"?function(O){return 1-D(1-O)}:_easeInOutFromOut(D);return F.config=function(O){return Q(B,O)},F};_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong",function(Q,B){var w=B<5?B+1:B;_insertEase(Q+",Power"+(w-1),B?function(D){return Math.pow(D,w)}:function(D){return D},function(D){return 1-Math.pow(1-D,w)},function(D){return D<.5?Math.pow(D*2,w)/2:1-Math.pow((1-D)*2,w)/2})});_easeMap.Linear.easeNone=_easeMap.none=_easeMap.Linear.easeIn;_insertEase("Elastic",_configElastic("in"),_configElastic("out"),_configElastic());(function(Q,B){var w=1/B,D=2*w,F=2.5*w,O=function(U){return U<w?Q*U*U:U<D?Q*Math.pow(U-1.5/B,2)+.75:U<F?Q*(U-=2.25/B)*U+.9375:Q*Math.pow(U-2.625/B,2)+.984375};_insertEase("Bounce",function(L){return 1-O(1-L)},O)})(7.5625,2.75);_insertEase("Expo",function(Q){return Q?Math.pow(2,10*(Q-1)):0});_insertEase("Circ",function(Q){return-(_sqrt(1-Q*Q)-1)});_insertEase("Sine",function(Q){return Q===1?1:-_cos(Q*_HALF_PI)+1});_insertEase("Back",_configBack("in"),_configBack("out"),_configBack());_easeMap.SteppedEase=_easeMap.steps=_globals.SteppedEase={config:function Q(B,w){B===void 0&&(B=1);var D=1/B,F=B+(w?0:1),O=w?1:0,L=1-_tinyNum;return function(U){return((F*_clamp(0,L,U)|0)+O)*D}}};_defaults.ease=_easeMap["quad.out"];_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(Q){return _callbackNames+=Q+","+Q+"Params,"});var GSCache=function Q(B,w){this.id=_gsID++,B._gsap=this,this.target=B,this.harness=w,this.get=w?w.get:_getProperty,this.set=w?w.getSetter:_getSetter},Animation=function(){function Q(w){this.vars=w,this._delay=+w.delay||0,(this._repeat=w.repeat===1/0?-2:w.repeat||0)&&(this._rDelay=w.repeatDelay||0,this._yoyo=!!w.yoyo||!!w.yoyoEase),this._ts=1,_setDuration(this,+w.duration,1,1),this.data=w.data,_context&&(this._ctx=_context,_context.data.push(this)),_tickerActive||_ticker.wake()}var B=Q.prototype;return B.delay=function(D){return D||D===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+D-this._delay),this._delay=D,this):this._delay},B.duration=function(D){return arguments.length?this.totalDuration(this._repeat>0?D+(D+this._rDelay)*this._repeat:D):this.totalDuration()&&this._dur},B.totalDuration=function(D){return arguments.length?(this._dirty=0,_setDuration(this,this._repeat<0?D:(D-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},B.totalTime=function(D,F){if(_wake(),!arguments.length)return this._tTime;var O=this._dp;if(O&&O.smoothChildTiming&&this._ts){for(_alignPlayhead(this,D),!O._dp||O.parent||_postAddChecks(O,this);O&&O.parent;)O.parent._time!==O._start+(O._ts>=0?O._tTime/O._ts:(O.totalDuration()-O._tTime)/-O._ts)&&O.totalTime(O._tTime,!0),O=O.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&D<this._tDur||this._ts<0&&D>0||!this._tDur&&!D)&&_addToTimeline(this._dp,this,this._start-this._delay)}return(this._tTime!==D||!this._dur&&!F||this._initted&&Math.abs(this._zTime)===_tinyNum||!D&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=D),_lazySafeRender(this,D,F)),this},B.time=function(D,F){return arguments.length?this.totalTime(Math.min(this.totalDuration(),D+_elapsedCycleDuration(this))%(this._dur+this._rDelay)||(D?this._dur:0),F):this._time},B.totalProgress=function(D,F){return arguments.length?this.totalTime(this.totalDuration()*D,F):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},B.progress=function(D,F){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-D:D)+_elapsedCycleDuration(this),F):this.duration()?Math.min(1,this._time/this._dur):this.ratio},B.iteration=function(D,F){var O=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(D-1)*O,F):this._repeat?_animationCycle(this._tTime,O)+1:1},B.timeScale=function(D){if(!arguments.length)return this._rts===-_tinyNum?0:this._rts;if(this._rts===D)return this;var F=this.parent&&this._ts?_parentToChildTotalTime(this.parent._time,this):this._tTime;return this._rts=+D||0,this._ts=this._ps||D===-_tinyNum?0:this._rts,this.totalTime(_clamp(-this._delay,this._tDur,F),!0),_setEnd(this),_recacheAncestors(this)},B.paused=function(D){return arguments.length?(this._ps!==D&&(this._ps=D,D?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_wake(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_tinyNum&&(this._tTime-=_tinyNum)))),this):this._ps},B.startTime=function(D){if(arguments.length){this._start=D;var F=this.parent||this._dp;return F&&(F._sort||!this.parent)&&_addToTimeline(F,this,D-this._delay),this}return this._start},B.endTime=function(D){return this._start+(_isNotFalse(D)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},B.rawTime=function(D){var F=this.parent||this._dp;return F?D&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_parentToChildTotalTime(F.rawTime(D),this):this._tTime:this._tTime},B.revert=function(D){D===void 0&&(D=_revertConfig);var F=_reverting$1;return _reverting$1=D,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(D),this.totalTime(-.01,D.suppressEvents)),this.data!=="nested"&&D.kill!==!1&&this.kill(),_reverting$1=F,this},B.globalTime=function(D){for(var F=this,O=arguments.length?D:F.rawTime();F;)O=F._start+O/(F._ts||1),F=F._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(D):O},B.repeat=function(D){return arguments.length?(this._repeat=D===1/0?-2:D,_onUpdateTotalDuration(this)):this._repeat===-2?1/0:this._repeat},B.repeatDelay=function(D){if(arguments.length){var F=this._time;return this._rDelay=D,_onUpdateTotalDuration(this),F?this.time(F):this}return this._rDelay},B.yoyo=function(D){return arguments.length?(this._yoyo=D,this):this._yoyo},B.seek=function(D,F){return this.totalTime(_parsePosition(this,D),_isNotFalse(F))},B.restart=function(D,F){return this.play().totalTime(D?-this._delay:0,_isNotFalse(F))},B.play=function(D,F){return D!=null&&this.seek(D,F),this.reversed(!1).paused(!1)},B.reverse=function(D,F){return D!=null&&this.seek(D||this.totalDuration(),F),this.reversed(!0).paused(!1)},B.pause=function(D,F){return D!=null&&this.seek(D,F),this.paused(!0)},B.resume=function(){return this.paused(!1)},B.reversed=function(D){return arguments.length?(!!D!==this.reversed()&&this.timeScale(-this._rts||(D?-_tinyNum:0)),this):this._rts<0},B.invalidate=function(){return this._initted=this._act=0,this._zTime=-_tinyNum,this},B.isActive=function(){var D=this.parent||this._dp,F=this._start,O;return!!(!D||this._ts&&this._initted&&D.isActive()&&(O=D.rawTime(!0))>=F&&O<this.endTime(!0)-_tinyNum)},B.eventCallback=function(D,F,O){var L=this.vars;return arguments.length>1?(F?(L[D]=F,O&&(L[D+"Params"]=O),D==="onUpdate"&&(this._onUpdate=F)):delete L[D],this):L[D]},B.then=function(D){var F=this;return new Promise(function(O){var L=_isFunction(D)?D:_passThrough,U=function(){var q=F.then;F.then=null,_isFunction(L)&&(L=L(F))&&(L.then||L===F)&&(F.then=q),O(L),F.then=q};F._initted&&F.totalProgress()===1&&F._ts>=0||!F._tTime&&F._ts<0?U():F._prom=U})},B.kill=function(){_interrupt(this)},Q}();_setDefaults(Animation.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_tinyNum,_prom:0,_ps:!1,_rts:1});var Timeline=function(Q){_inheritsLoose(B,Q);function B(D,F){var O;return D===void 0&&(D={}),O=Q.call(this,D)||this,O.labels={},O.smoothChildTiming=!!D.smoothChildTiming,O.autoRemoveChildren=!!D.autoRemoveChildren,O._sort=_isNotFalse(D.sortChildren),_globalTimeline&&_addToTimeline(D.parent||_globalTimeline,_assertThisInitialized(O),F),D.reversed&&O.reverse(),D.paused&&O.paused(!0),D.scrollTrigger&&_scrollTrigger(_assertThisInitialized(O),D.scrollTrigger),O}var w=B.prototype;return w.to=function(F,O,L){return _createTweenType(0,arguments,this),this},w.from=function(F,O,L){return _createTweenType(1,arguments,this),this},w.fromTo=function(F,O,L,U){return _createTweenType(2,arguments,this),this},w.set=function(F,O,L){return O.duration=0,O.parent=this,_inheritDefaults(O).repeatDelay||(O.repeat=0),O.immediateRender=!!O.immediateRender,new Tween(F,O,_parsePosition(this,L),1),this},w.call=function(F,O,L){return _addToTimeline(this,Tween.delayedCall(0,F,O),L)},w.staggerTo=function(F,O,L,U,G,q,Y){return L.duration=O,L.stagger=L.stagger||U,L.onComplete=q,L.onCompleteParams=Y,L.parent=this,new Tween(F,L,_parsePosition(this,G)),this},w.staggerFrom=function(F,O,L,U,G,q,Y){return L.runBackwards=1,_inheritDefaults(L).immediateRender=_isNotFalse(L.immediateRender),this.staggerTo(F,O,L,U,G,q,Y)},w.staggerFromTo=function(F,O,L,U,G,q,Y,W){return U.startAt=L,_inheritDefaults(U).immediateRender=_isNotFalse(U.immediateRender),this.staggerTo(F,O,U,G,q,Y,W)},w.render=function(F,O,L){var U=this._time,G=this._dirty?this.totalDuration():this._tDur,q=this._dur,Y=F<=0?0:_roundPrecise(F),W=this._zTime<0!=F<0&&(this._initted||!q),X,te,ae,ie,ce,he,pe,Be,Ie,ye,Ce,we;if(this!==_globalTimeline&&Y>G&&F>=0&&(Y=G),Y!==this._tTime||L||W){if(U!==this._time&&q&&(Y+=this._time-U,F+=this._time-U),X=Y,Ie=this._start,Be=this._ts,he=!Be,W&&(q||(U=this._zTime),(F||!O)&&(this._zTime=F)),this._repeat){if(Ce=this._yoyo,ce=q+this._rDelay,this._repeat<-1&&F<0)return this.totalTime(ce*100+F,O,L);if(X=_roundPrecise(Y%ce),Y===G?(ie=this._repeat,X=q):(ie=~~(Y/ce),ie&&ie===Y/ce&&(X=q,ie--),X>q&&(X=q)),ye=_animationCycle(this._tTime,ce),!U&&this._tTime&&ye!==ie&&(ye=ie),Ce&&ie&1&&(X=q-X,we=1),ie!==ye&&!this._lock){var De=Ce&&ye&1,Se=De===(Ce&&ie&1);if(ie<ye&&(De=!De),U=De?0:q,this._lock=1,this.render(U||(we?0:_roundPrecise(ie*ce)),O,!q)._lock=0,this._tTime=Y,!O&&this.parent&&_callback(this,"onRepeat"),this.vars.repeatRefresh&&!we&&(this.invalidate()._lock=1),U&&U!==this._time||he!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(q=this._dur,G=this._tDur,Se&&(this._lock=2,U=De?q:-1e-4,this.render(U,!0),this.vars.repeatRefresh&&!we&&this.invalidate()),this._lock=0,!this._ts&&!he)return this;_propagateYoyoEase(this,we)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(pe=_findNextPauseTween(this,_roundPrecise(U),_roundPrecise(X)),pe&&(Y-=X-(X=pe._start))),this._tTime=Y,this._time=X,this._act=!Be,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=F,U=0),!U&&X&&!O&&(_callback(this,"onStart"),this._tTime!==Y))return this;if(X>=U&&F>=0)for(te=this._first;te;){if(ae=te._next,(te._act||X>=te._start)&&te._ts&&pe!==te){if(te.parent!==this)return this.render(F,O,L);if(te.render(te._ts>0?(X-te._start)*te._ts:(te._dirty?te.totalDuration():te._tDur)+(X-te._start)*te._ts,O,L),X!==this._time||!this._ts&&!he){pe=0,ae&&(Y+=this._zTime=-_tinyNum);break}}te=ae}else{te=this._last;for(var be=F<0?F:X;te;){if(ae=te._prev,(te._act||be<=te._end)&&te._ts&&pe!==te){if(te.parent!==this)return this.render(F,O,L);if(te.render(te._ts>0?(be-te._start)*te._ts:(te._dirty?te.totalDuration():te._tDur)+(be-te._start)*te._ts,O,L||_reverting$1&&(te._initted||te._startAt)),X!==this._time||!this._ts&&!he){pe=0,ae&&(Y+=this._zTime=be?-_tinyNum:_tinyNum);break}}te=ae}}if(pe&&!O&&(this.pause(),pe.render(X>=U?0:-_tinyNum)._zTime=X>=U?1:-1,this._ts))return this._start=Ie,_setEnd(this),this.render(F,O,L);this._onUpdate&&!O&&_callback(this,"onUpdate",!0),(Y===G&&this._tTime>=this.totalDuration()||!Y&&U)&&(Ie===this._start||Math.abs(Be)!==Math.abs(this._ts))&&(this._lock||((F||!q)&&(Y===G&&this._ts>0||!Y&&this._ts<0)&&_removeFromParent(this,1),!O&&!(F<0&&!U)&&(Y||U||!G)&&(_callback(this,Y===G&&F>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(Y<G&&this.timeScale()>0)&&this._prom())))}return this},w.add=function(F,O){var L=this;if(_isNumber(O)||(O=_parsePosition(this,O,F)),!(F instanceof Animation)){if(_isArray(F))return F.forEach(function(U){return L.add(U,O)}),this;if(_isString(F))return this.addLabel(F,O);if(_isFunction(F))F=Tween.delayedCall(0,F);else return this}return this!==F?_addToTimeline(this,F,O):this},w.getChildren=function(F,O,L,U){F===void 0&&(F=!0),O===void 0&&(O=!0),L===void 0&&(L=!0),U===void 0&&(U=-_bigNum$1);for(var G=[],q=this._first;q;)q._start>=U&&(q instanceof Tween?O&&G.push(q):(L&&G.push(q),F&&G.push.apply(G,q.getChildren(!0,O,L)))),q=q._next;return G},w.getById=function(F){for(var O=this.getChildren(1,1,1),L=O.length;L--;)if(O[L].vars.id===F)return O[L]},w.remove=function(F){return _isString(F)?this.removeLabel(F):_isFunction(F)?this.killTweensOf(F):(_removeLinkedListItem(this,F),F===this._recent&&(this._recent=this._last),_uncache(this))},w.totalTime=function(F,O){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_roundPrecise(_ticker.time-(this._ts>0?F/this._ts:(this.totalDuration()-F)/-this._ts))),Q.prototype.totalTime.call(this,F,O),this._forcing=0,this):this._tTime},w.addLabel=function(F,O){return this.labels[F]=_parsePosition(this,O),this},w.removeLabel=function(F){return delete this.labels[F],this},w.addPause=function(F,O,L){var U=Tween.delayedCall(0,O||_emptyFunc,L);return U.data="isPause",this._hasPause=1,_addToTimeline(this,U,_parsePosition(this,F))},w.removePause=function(F){var O=this._first;for(F=_parsePosition(this,F);O;)O._start===F&&O.data==="isPause"&&_removeFromParent(O),O=O._next},w.killTweensOf=function(F,O,L){for(var U=this.getTweensOf(F,L),G=U.length;G--;)_overwritingTween!==U[G]&&U[G].kill(F,O);return this},w.getTweensOf=function(F,O){for(var L=[],U=toArray(F),G=this._first,q=_isNumber(O),Y;G;)G instanceof Tween?_arrayContainsAny(G._targets,U)&&(q?(!_overwritingTween||G._initted&&G._ts)&&G.globalTime(0)<=O&&G.globalTime(G.totalDuration())>O:!O||G.isActive())&&L.push(G):(Y=G.getTweensOf(U,O)).length&&L.push.apply(L,Y),G=G._next;return L},w.tweenTo=function(F,O){O=O||{};var L=this,U=_parsePosition(L,F),G=O,q=G.startAt,Y=G.onStart,W=G.onStartParams,X=G.immediateRender,te,ae=Tween.to(L,_setDefaults({ease:O.ease||"none",lazy:!1,immediateRender:!1,time:U,overwrite:"auto",duration:O.duration||Math.abs((U-(q&&"time"in q?q.time:L._time))/L.timeScale())||_tinyNum,onStart:function(){if(L.pause(),!te){var ce=O.duration||Math.abs((U-(q&&"time"in q?q.time:L._time))/L.timeScale());ae._dur!==ce&&_setDuration(ae,ce,0,1).render(ae._time,!0,!0),te=1}Y&&Y.apply(ae,W||[])}},O));return X?ae.render(0):ae},w.tweenFromTo=function(F,O,L){return this.tweenTo(O,_setDefaults({startAt:{time:_parsePosition(this,F)}},L))},w.recent=function(){return this._recent},w.nextLabel=function(F){return F===void 0&&(F=this._time),_getLabelInDirection(this,_parsePosition(this,F))},w.previousLabel=function(F){return F===void 0&&(F=this._time),_getLabelInDirection(this,_parsePosition(this,F),1)},w.currentLabel=function(F){return arguments.length?this.seek(F,!0):this.previousLabel(this._time+_tinyNum)},w.shiftChildren=function(F,O,L){L===void 0&&(L=0);for(var U=this._first,G=this.labels,q;U;)U._start>=L&&(U._start+=F,U._end+=F),U=U._next;if(O)for(q in G)G[q]>=L&&(G[q]+=F);return _uncache(this)},w.invalidate=function(F){var O=this._first;for(this._lock=0;O;)O.invalidate(F),O=O._next;return Q.prototype.invalidate.call(this,F)},w.clear=function(F){F===void 0&&(F=!0);for(var O=this._first,L;O;)L=O._next,this.remove(O),O=L;return this._dp&&(this._time=this._tTime=this._pTime=0),F&&(this.labels={}),_uncache(this)},w.totalDuration=function(F){var O=0,L=this,U=L._last,G=_bigNum$1,q,Y,W;if(arguments.length)return L.timeScale((L._repeat<0?L.duration():L.totalDuration())/(L.reversed()?-F:F));if(L._dirty){for(W=L.parent;U;)q=U._prev,U._dirty&&U.totalDuration(),Y=U._start,Y>G&&L._sort&&U._ts&&!L._lock?(L._lock=1,_addToTimeline(L,U,Y-U._delay,1)._lock=0):G=Y,Y<0&&U._ts&&(O-=Y,(!W&&!L._dp||W&&W.smoothChildTiming)&&(L._start+=Y/L._ts,L._time-=Y,L._tTime-=Y),L.shiftChildren(-Y,!1,-1/0),G=0),U._end>O&&U._ts&&(O=U._end),U=q;_setDuration(L,L===_globalTimeline&&L._time>O?L._time:O,1,1),L._dirty=0}return L._tDur},B.updateRoot=function(F){if(_globalTimeline._ts&&(_lazySafeRender(_globalTimeline,_parentToChildTotalTime(F,_globalTimeline)),_lastRenderedFrame=_ticker.frame),_ticker.frame>=_nextGCFrame){_nextGCFrame+=_config.autoSleep||120;var O=_globalTimeline._first;if((!O||!O._ts)&&_config.autoSleep&&_ticker._listeners.length<2){for(;O&&!O._ts;)O=O._next;O||_ticker.sleep()}}},B}(Animation);_setDefaults(Timeline.prototype,{_lock:0,_hasPause:0,_forcing:0});var _addComplexStringPropTween=function Q(B,w,D,F,O,L,U){var G=new PropTween(this._pt,B,w,0,1,_renderComplexString,null,O),q=0,Y=0,W,X,te,ae,ie,ce,he,pe;for(G.b=D,G.e=F,D+="",F+="",(he=~F.indexOf("random("))&&(F=_replaceRandom(F)),L&&(pe=[D,F],L(pe,B,w),D=pe[0],F=pe[1]),X=D.match(_complexStringNumExp)||[];W=_complexStringNumExp.exec(F);)ae=W[0],ie=F.substring(q,W.index),te?te=(te+1)%5:ie.substr(-5)==="rgba("&&(te=1),ae!==X[Y++]&&(ce=parseFloat(X[Y-1])||0,G._pt={_next:G._pt,p:ie||Y===1?ie:",",s:ce,c:ae.charAt(1)==="="?_parseRelative(ce,ae)-ce:parseFloat(ae)-ce,m:te&&te<4?Math.round:0},q=_complexStringNumExp.lastIndex);return G.c=q<F.length?F.substring(q,F.length):"",G.fp=U,(_relExp.test(F)||he)&&(G.e=0),this._pt=G,G},_addPropTween=function Q(B,w,D,F,O,L,U,G,q,Y){_isFunction(F)&&(F=F(O||0,B,L));var W=B[w],X=D!=="get"?D:_isFunction(W)?q?B[w.indexOf("set")||!_isFunction(B["get"+w.substr(3)])?w:"get"+w.substr(3)](q):B[w]():W,te=_isFunction(W)?q?_setterFuncWithParam:_setterFunc:_setterPlain,ae;if(_isString(F)&&(~F.indexOf("random(")&&(F=_replaceRandom(F)),F.charAt(1)==="="&&(ae=_parseRelative(X,F)+(getUnit(X)||0),(ae||ae===0)&&(F=ae))),!Y||X!==F||_forceAllPropTweens)return!isNaN(X*F)&&F!==""?(ae=new PropTween(this._pt,B,w,+X||0,F-(X||0),typeof W=="boolean"?_renderBoolean:_renderPlain,0,te),q&&(ae.fp=q),U&&ae.modifier(U,this,B),this._pt=ae):(!W&&!(w in B)&&_missingPlugin(w,F),_addComplexStringPropTween.call(this,B,w,X,F,te,G||_config.stringFilter,q))},_processVars=function Q(B,w,D,F,O){if(_isFunction(B)&&(B=_parseFuncOrString(B,O,w,D,F)),!_isObject(B)||B.style&&B.nodeType||_isArray(B)||_isTypedArray(B))return _isString(B)?_parseFuncOrString(B,O,w,D,F):B;var L={},U;for(U in B)L[U]=_parseFuncOrString(B[U],O,w,D,F);return L},_checkPlugin=function Q(B,w,D,F,O,L){var U,G,q,Y;if(_plugins[B]&&(U=new _plugins[B]).init(O,U.rawVars?w[B]:_processVars(w[B],F,O,L,D),D,F,L)!==!1&&(D._pt=G=new PropTween(D._pt,O,B,0,1,U.render,U,0,U.priority),D!==_quickTween))for(q=D._ptLookup[D._targets.indexOf(O)],Y=U._props.length;Y--;)q[U._props[Y]]=G;return U},_overwritingTween,_forceAllPropTweens,_initTween=function Q(B,w,D){var F=B.vars,O=F.ease,L=F.startAt,U=F.immediateRender,G=F.lazy,q=F.onUpdate,Y=F.onUpdateParams,W=F.callbackScope,X=F.runBackwards,te=F.yoyoEase,ae=F.keyframes,ie=F.autoRevert,ce=B._dur,he=B._startAt,pe=B._targets,Be=B.parent,Ie=Be&&Be.data==="nested"?Be.vars.targets:pe,ye=B._overwrite==="auto"&&!_suppressOverwrites,Ce=B.timeline,we,De,Se,be,Ne,Pe,Le,qe,_e,ve,Qe,xe,Re;if(Ce&&(!ae||!O)&&(O="none"),B._ease=_parseEase(O,_defaults.ease),B._yEase=te?_invertEase(_parseEase(te===!0?O:te,_defaults.ease)):0,te&&B._yoyo&&!B._repeat&&(te=B._yEase,B._yEase=B._ease,B._ease=te),B._from=!Ce&&!!F.runBackwards,!Ce||ae&&!F.stagger){if(qe=pe[0]?_getCache(pe[0]).harness:0,xe=qe&&F[qe.prop],we=_copyExcluding(F,_reservedProps),he&&(he._zTime<0&&he.progress(1),w<0&&X&&U&&!ie?he.render(-1,!0):he.revert(X&&ce?_revertConfigNoKill:_startAtRevertConfig),he._lazy=0),L){if(_removeFromParent(B._startAt=Tween.set(pe,_setDefaults({data:"isStart",overwrite:!1,parent:Be,immediateRender:!0,lazy:!he&&_isNotFalse(G),startAt:null,delay:0,onUpdate:q,onUpdateParams:Y,callbackScope:W,stagger:0},L))),B._startAt._dp=0,B._startAt._sat=B,w<0&&(_reverting$1||!U&&!ie)&&B._startAt.revert(_revertConfigNoKill),U&&ce&&w<=0&&D<=0){w&&(B._zTime=w);return}}else if(X&&ce&&!he){if(w&&(U=!1),Se=_setDefaults({overwrite:!1,data:"isFromStart",lazy:U&&!he&&_isNotFalse(G),immediateRender:U,stagger:0,parent:Be},we),xe&&(Se[qe.prop]=xe),_removeFromParent(B._startAt=Tween.set(pe,Se)),B._startAt._dp=0,B._startAt._sat=B,w<0&&(_reverting$1?B._startAt.revert(_revertConfigNoKill):B._startAt.render(-1,!0)),B._zTime=w,!U)Q(B._startAt,_tinyNum,_tinyNum);else if(!w)return}for(B._pt=B._ptCache=0,G=ce&&_isNotFalse(G)||G&&!ce,De=0;De<pe.length;De++){if(Ne=pe[De],Le=Ne._gsap||_harness(pe)[De]._gsap,B._ptLookup[De]=ve={},_lazyLookup[Le.id]&&_lazyTweens.length&&_lazyRender(),Qe=Ie===pe?De:Ie.indexOf(Ne),qe&&(_e=new qe).init(Ne,xe||we,B,Qe,Ie)!==!1&&(B._pt=be=new PropTween(B._pt,Ne,_e.name,0,1,_e.render,_e,0,_e.priority),_e._props.forEach(function(Fe){ve[Fe]=be}),_e.priority&&(Pe=1)),!qe||xe)for(Se in we)_plugins[Se]&&(_e=_checkPlugin(Se,we,B,Qe,Ne,Ie))?_e.priority&&(Pe=1):ve[Se]=be=_addPropTween.call(B,Ne,Se,"get",we[Se],Qe,Ie,0,F.stringFilter);B._op&&B._op[De]&&B.kill(Ne,B._op[De]),ye&&B._pt&&(_overwritingTween=B,_globalTimeline.killTweensOf(Ne,ve,B.globalTime(w)),Re=!B.parent,_overwritingTween=0),B._pt&&G&&(_lazyLookup[Le.id]=1)}Pe&&_sortPropTweensByPriority(B),B._onInit&&B._onInit(B)}B._onUpdate=q,B._initted=(!B._op||B._pt)&&!Re,ae&&w<=0&&Ce.render(_bigNum$1,!0,!0)},_updatePropTweens=function Q(B,w,D,F,O,L,U){var G=(B._pt&&B._ptCache||(B._ptCache={}))[w],q,Y,W,X;if(!G)for(G=B._ptCache[w]=[],W=B._ptLookup,X=B._targets.length;X--;){if(q=W[X][w],q&&q.d&&q.d._pt)for(q=q.d._pt;q&&q.p!==w&&q.fp!==w;)q=q._next;if(!q)return _forceAllPropTweens=1,B.vars[w]="+=0",_initTween(B,U),_forceAllPropTweens=0,1;G.push(q)}for(X=G.length;X--;)Y=G[X],q=Y._pt||Y,q.s=(F||F===0)&&!O?F:q.s+(F||0)+L*q.c,q.c=D-q.s,Y.e&&(Y.e=_round(D)+getUnit(Y.e)),Y.b&&(Y.b=q.s+getUnit(Y.b))},_addAliasesToVars=function Q(B,w){var D=B[0]?_getCache(B[0]).harness:0,F=D&&D.aliases,O,L,U,G;if(!F)return w;O=_merge({},w);for(L in F)if(L in O)for(G=F[L].split(","),U=G.length;U--;)O[G[U]]=O[L];return O},_parseKeyframe=function Q(B,w,D,F){var O=w.ease||F||"power1.inOut",L,U;if(_isArray(w))U=D[B]||(D[B]=[]),w.forEach(function(G,q){return U.push({t:q/(w.length-1)*100,v:G,e:O})});else for(L in w)U=D[L]||(D[L]=[]),L==="ease"||U.push({t:parseFloat(B),v:w[L],e:O})},_parseFuncOrString=function Q(B,w,D,F,O){return _isFunction(B)?B.call(w,D,F,O):_isString(B)&&~B.indexOf("random(")?_replaceRandom(B):B},_staggerTweenProps=_callbackNames+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_staggerPropsToSkip={};_forEachName(_staggerTweenProps+",id,stagger,delay,duration,paused,scrollTrigger",function(Q){return _staggerPropsToSkip[Q]=1});var Tween=function(Q){_inheritsLoose(B,Q);function B(D,F,O,L){var U;typeof F=="number"&&(O.duration=F,F=O,O=null),U=Q.call(this,L?F:_inheritDefaults(F))||this;var G=U.vars,q=G.duration,Y=G.delay,W=G.immediateRender,X=G.stagger,te=G.overwrite,ae=G.keyframes,ie=G.defaults,ce=G.scrollTrigger,he=G.yoyoEase,pe=F.parent||_globalTimeline,Be=(_isArray(D)||_isTypedArray(D)?_isNumber(D[0]):"length"in F)?[D]:toArray(D),Ie,ye,Ce,we,De,Se,be,Ne;if(U._targets=Be.length?_harness(Be):_warn("GSAP target "+D+" not found. https://greensock.com",!_config.nullTargetWarn)||[],U._ptLookup=[],U._overwrite=te,ae||X||_isFuncOrString(q)||_isFuncOrString(Y)){if(F=U.vars,Ie=U.timeline=new Timeline({data:"nested",defaults:ie||{},targets:pe&&pe.data==="nested"?pe.vars.targets:Be}),Ie.kill(),Ie.parent=Ie._dp=_assertThisInitialized(U),Ie._start=0,X||_isFuncOrString(q)||_isFuncOrString(Y)){if(we=Be.length,be=X&&distribute(X),_isObject(X))for(De in X)~_staggerTweenProps.indexOf(De)&&(Ne||(Ne={}),Ne[De]=X[De]);for(ye=0;ye<we;ye++)Ce=_copyExcluding(F,_staggerPropsToSkip),Ce.stagger=0,he&&(Ce.yoyoEase=he),Ne&&_merge(Ce,Ne),Se=Be[ye],Ce.duration=+_parseFuncOrString(q,_assertThisInitialized(U),ye,Se,Be),Ce.delay=(+_parseFuncOrString(Y,_assertThisInitialized(U),ye,Se,Be)||0)-U._delay,!X&&we===1&&Ce.delay&&(U._delay=Y=Ce.delay,U._start+=Y,Ce.delay=0),Ie.to(Se,Ce,be?be(ye,Se,Be):0),Ie._ease=_easeMap.none;Ie.duration()?q=Y=0:U.timeline=0}else if(ae){_inheritDefaults(_setDefaults(Ie.vars.defaults,{ease:"none"})),Ie._ease=_parseEase(ae.ease||F.ease||"none");var Pe=0,Le,qe,_e;if(_isArray(ae))ae.forEach(function(ve){return Ie.to(Be,ve,">")}),Ie.duration();else{Ce={};for(De in ae)De==="ease"||De==="easeEach"||_parseKeyframe(De,ae[De],Ce,ae.easeEach);for(De in Ce)for(Le=Ce[De].sort(function(ve,Qe){return ve.t-Qe.t}),Pe=0,ye=0;ye<Le.length;ye++)qe=Le[ye],_e={ease:qe.e,duration:(qe.t-(ye?Le[ye-1].t:0))/100*q},_e[De]=qe.v,Ie.to(Be,_e,Pe),Pe+=_e.duration;Ie.duration()<q&&Ie.to({},{duration:q-Ie.duration()})}}q||U.duration(q=Ie.duration())}else U.timeline=0;return te===!0&&!_suppressOverwrites&&(_overwritingTween=_assertThisInitialized(U),_globalTimeline.killTweensOf(Be),_overwritingTween=0),_addToTimeline(pe,_assertThisInitialized(U),O),F.reversed&&U.reverse(),F.paused&&U.paused(!0),(W||!q&&!ae&&U._start===_roundPrecise(pe._time)&&_isNotFalse(W)&&_hasNoPausedAncestors(_assertThisInitialized(U))&&pe.data!=="nested")&&(U._tTime=-_tinyNum,U.render(Math.max(0,-Y)||0)),ce&&_scrollTrigger(_assertThisInitialized(U),ce),U}var w=B.prototype;return w.render=function(F,O,L){var U=this._time,G=this._tDur,q=this._dur,Y=F<0,W=F>G-_tinyNum&&!Y?G:F<_tinyNum?0:F,X,te,ae,ie,ce,he,pe,Be,Ie;if(!q)_renderZeroDurationTween(this,F,O,L);else if(W!==this._tTime||!F||L||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==Y){if(X=W,Be=this.timeline,this._repeat){if(ie=q+this._rDelay,this._repeat<-1&&Y)return this.totalTime(ie*100+F,O,L);if(X=_roundPrecise(W%ie),W===G?(ae=this._repeat,X=q):(ae=~~(W/ie),ae&&ae===W/ie&&(X=q,ae--),X>q&&(X=q)),he=this._yoyo&&ae&1,he&&(Ie=this._yEase,X=q-X),ce=_animationCycle(this._tTime,ie),X===U&&!L&&this._initted)return this._tTime=W,this;ae!==ce&&(Be&&this._yEase&&_propagateYoyoEase(Be,he),this.vars.repeatRefresh&&!he&&!this._lock&&(this._lock=L=1,this.render(_roundPrecise(ie*ae),!0).invalidate()._lock=0))}if(!this._initted){if(_attemptInitTween(this,Y?F:X,L,O,W))return this._tTime=0,this;if(U!==this._time)return this;if(q!==this._dur)return this.render(F,O,L)}if(this._tTime=W,this._time=X,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=pe=(Ie||this._ease)(X/q),this._from&&(this.ratio=pe=1-pe),X&&!U&&!O&&(_callback(this,"onStart"),this._tTime!==W))return this;for(te=this._pt;te;)te.r(pe,te.d),te=te._next;Be&&Be.render(F<0?F:!X&&he?-_tinyNum:Be._dur*Be._ease(X/this._dur),O,L)||this._startAt&&(this._zTime=F),this._onUpdate&&!O&&(Y&&_rewindStartAt(this,F,O,L),_callback(this,"onUpdate")),this._repeat&&ae!==ce&&this.vars.onRepeat&&!O&&this.parent&&_callback(this,"onRepeat"),(W===this._tDur||!W)&&this._tTime===W&&(Y&&!this._onUpdate&&_rewindStartAt(this,F,!0,!0),(F||!q)&&(W===this._tDur&&this._ts>0||!W&&this._ts<0)&&_removeFromParent(this,1),!O&&!(Y&&!U)&&(W||U||he)&&(_callback(this,W===G?"onComplete":"onReverseComplete",!0),this._prom&&!(W<G&&this.timeScale()>0)&&this._prom()))}return this},w.targets=function(){return this._targets},w.invalidate=function(F){return(!F||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(F),Q.prototype.invalidate.call(this,F)},w.resetTo=function(F,O,L,U){_tickerActive||_ticker.wake(),this._ts||this.play();var G=Math.min(this._dur,(this._dp._time-this._start)*this._ts),q;return this._initted||_initTween(this,G),q=this._ease(G/this._dur),_updatePropTweens(this,F,O,L,U,q,G)?this.resetTo(F,O,L,U):(_alignPlayhead(this,0),this.parent||_addLinkedListItem(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},w.kill=function(F,O){if(O===void 0&&(O="all"),!F&&(!O||O==="all"))return this._lazy=this._pt=0,this.parent?_interrupt(this):this;if(this.timeline){var L=this.timeline.totalDuration();return this.timeline.killTweensOf(F,O,_overwritingTween&&_overwritingTween.vars.overwrite!==!0)._first||_interrupt(this),this.parent&&L!==this.timeline.totalDuration()&&_setDuration(this,this._dur*this.timeline._tDur/L,0,1),this}var U=this._targets,G=F?toArray(F):U,q=this._ptLookup,Y=this._pt,W,X,te,ae,ie,ce,he;if((!O||O==="all")&&_arraysMatch(U,G))return O==="all"&&(this._pt=0),_interrupt(this);for(W=this._op=this._op||[],O!=="all"&&(_isString(O)&&(ie={},_forEachName(O,function(pe){return ie[pe]=1}),O=ie),O=_addAliasesToVars(U,O)),he=U.length;he--;)if(~G.indexOf(U[he])){X=q[he],O==="all"?(W[he]=O,ae=X,te={}):(te=W[he]=W[he]||{},ae=O);for(ie in ae)ce=X&&X[ie],ce&&((!("kill"in ce.d)||ce.d.kill(ie)===!0)&&_removeLinkedListItem(this,ce,"_pt"),delete X[ie]),te!=="all"&&(te[ie]=1)}return this._initted&&!this._pt&&Y&&_interrupt(this),this},B.to=function(F,O){return new B(F,O,arguments[2])},B.from=function(F,O){return _createTweenType(1,arguments)},B.delayedCall=function(F,O,L,U){return new B(O,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:F,onComplete:O,onReverseComplete:O,onCompleteParams:L,onReverseCompleteParams:L,callbackScope:U})},B.fromTo=function(F,O,L){return _createTweenType(2,arguments)},B.set=function(F,O){return O.duration=0,O.repeatDelay||(O.repeat=0),new B(F,O)},B.killTweensOf=function(F,O,L){return _globalTimeline.killTweensOf(F,O,L)},B}(Animation);_setDefaults(Tween.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_forEachName("staggerTo,staggerFrom,staggerFromTo",function(Q){Tween[Q]=function(){var B=new Timeline,w=_slice.call(arguments,0);return w.splice(Q==="staggerFromTo"?5:4,0,0),B[Q].apply(B,w)}});var _setterPlain=function Q(B,w,D){return B[w]=D},_setterFunc=function Q(B,w,D){return B[w](D)},_setterFuncWithParam=function Q(B,w,D,F){return B[w](F.fp,D)},_setterAttribute=function Q(B,w,D){return B.setAttribute(w,D)},_getSetter=function Q(B,w){return _isFunction(B[w])?_setterFunc:_isUndefined(B[w])&&B.setAttribute?_setterAttribute:_setterPlain},_renderPlain=function Q(B,w){return w.set(w.t,w.p,Math.round((w.s+w.c*B)*1e6)/1e6,w)},_renderBoolean=function Q(B,w){return w.set(w.t,w.p,!!(w.s+w.c*B),w)},_renderComplexString=function Q(B,w){var D=w._pt,F="";if(!B&&w.b)F=w.b;else if(B===1&&w.e)F=w.e;else{for(;D;)F=D.p+(D.m?D.m(D.s+D.c*B):Math.round((D.s+D.c*B)*1e4)/1e4)+F,D=D._next;F+=w.c}w.set(w.t,w.p,F,w)},_renderPropTweens=function Q(B,w){for(var D=w._pt;D;)D.r(B,D.d),D=D._next},_addPluginModifier=function Q(B,w,D,F){for(var O=this._pt,L;O;)L=O._next,O.p===F&&O.modifier(B,w,D),O=L},_killPropTweensOf=function Q(B){for(var w=this._pt,D,F;w;)F=w._next,w.p===B&&!w.op||w.op===B?_removeLinkedListItem(this,w,"_pt"):w.dep||(D=1),w=F;return!D},_setterWithModifier=function Q(B,w,D,F){F.mSet(B,w,F.m.call(F.tween,D,F.mt),F)},_sortPropTweensByPriority=function Q(B){for(var w=B._pt,D,F,O,L;w;){for(D=w._next,F=O;F&&F.pr>w.pr;)F=F._next;(w._prev=F?F._prev:L)?w._prev._next=w:O=w,(w._next=F)?F._prev=w:L=w,w=D}B._pt=O},PropTween=function(){function Q(w,D,F,O,L,U,G,q,Y){this.t=D,this.s=O,this.c=L,this.p=F,this.r=U||_renderPlain,this.d=G||this,this.set=q||_setterPlain,this.pr=Y||0,this._next=w,w&&(w._prev=this)}var B=Q.prototype;return B.modifier=function(D,F,O){this.mSet=this.mSet||this.set,this.set=_setterWithModifier,this.m=D,this.mt=O,this.tween=F},Q}();_forEachName(_callbackNames+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(Q){return _reservedProps[Q]=1});_globals.TweenMax=_globals.TweenLite=Tween;_globals.TimelineLite=_globals.TimelineMax=Timeline;_globalTimeline=new Timeline({sortChildren:!1,defaults:_defaults,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_config.stringFilter=_colorStringFilter;var _media=[],_listeners={},_emptyArray=[],_lastMediaTime=0,_dispatch=function Q(B){return(_listeners[B]||_emptyArray).map(function(w){return w()})},_onMediaChange=function Q(){var B=Date.now(),w=[];B-_lastMediaTime>2&&(_dispatch("matchMediaInit"),_media.forEach(function(D){var F=D.queries,O=D.conditions,L,U,G,q;for(U in F)L=_win$1.matchMedia(F[U]).matches,L&&(G=1),L!==O[U]&&(O[U]=L,q=1);q&&(D.revert(),G&&w.push(D))}),_dispatch("matchMediaRevert"),w.forEach(function(D){return D.onMatch(D)}),_lastMediaTime=B,_dispatch("matchMedia"))},Context=function(){function Q(w,D){this.selector=D&&selector(D),this.data=[],this._r=[],this.isReverted=!1,w&&this.add(w)}var B=Q.prototype;return B.add=function(D,F,O){_isFunction(D)&&(O=F,F=D,D=_isFunction);var L=this,U=function(){var q=_context,Y=L.selector,W;return q&&q!==L&&q.data.push(L),O&&(L.selector=selector(O)),_context=L,W=F.apply(L,arguments),_isFunction(W)&&L._r.push(W),_context=q,L.selector=Y,L.isReverted=!1,W};return L.last=U,D===_isFunction?U(L):D?L[D]=U:U},B.ignore=function(D){var F=_context;_context=null,D(this),_context=F},B.getTweens=function(){var D=[];return this.data.forEach(function(F){return F instanceof Q?D.push.apply(D,F.getTweens()):F instanceof Tween&&!(F.parent&&F.parent.data==="nested")&&D.push(F)}),D},B.clear=function(){this._r.length=this.data.length=0},B.kill=function(D,F){var O=this;if(D){var L=this.getTweens();this.data.forEach(function(G){G.data==="isFlip"&&(G.revert(),G.getChildren(!0,!0,!1).forEach(function(q){return L.splice(L.indexOf(q),1)}))}),L.map(function(G){return{g:G.globalTime(0),t:G}}).sort(function(G,q){return q.g-G.g||-1}).forEach(function(G){return G.t.revert(D)}),this.data.forEach(function(G){return!(G instanceof Animation)&&G.revert&&G.revert(D)}),this._r.forEach(function(G){return G(D,O)}),this.isReverted=!0}else this.data.forEach(function(G){return G.kill&&G.kill()});if(this.clear(),F){var U=_media.indexOf(this);~U&&_media.splice(U,1)}},B.revert=function(D){this.kill(D||{})},Q}(),MatchMedia=function(){function Q(w){this.contexts=[],this.scope=w}var B=Q.prototype;return B.add=function(D,F,O){_isObject(D)||(D={matches:D});var L=new Context(0,O||this.scope),U=L.conditions={},G,q,Y;this.contexts.push(L),F=L.add("onMatch",F),L.queries=D;for(q in D)q==="all"?Y=1:(G=_win$1.matchMedia(D[q]),G&&(_media.indexOf(L)<0&&_media.push(L),(U[q]=G.matches)&&(Y=1),G.addListener?G.addListener(_onMediaChange):G.addEventListener("change",_onMediaChange)));return Y&&F(L),this},B.revert=function(D){this.kill(D||{})},B.kill=function(D){this.contexts.forEach(function(F){return F.kill(D,!0)})},Q}(),_gsap={registerPlugin:function Q(){for(var B=arguments.length,w=new Array(B),D=0;D<B;D++)w[D]=arguments[D];w.forEach(function(F){return _createPlugin(F)})},timeline:function Q(B){return new Timeline(B)},getTweensOf:function Q(B,w){return _globalTimeline.getTweensOf(B,w)},getProperty:function Q(B,w,D,F){_isString(B)&&(B=toArray(B)[0]);var O=_getCache(B||{}).get,L=D?_passThrough:_numericIfPossible;return D==="native"&&(D=""),B&&(w?L((_plugins[w]&&_plugins[w].get||O)(B,w,D,F)):function(U,G,q){return L((_plugins[U]&&_plugins[U].get||O)(B,U,G,q))})},quickSetter:function Q(B,w,D){if(B=toArray(B),B.length>1){var F=B.map(function(Y){return gsap$1.quickSetter(Y,w,D)}),O=F.length;return function(Y){for(var W=O;W--;)F[W](Y)}}B=B[0]||{};var L=_plugins[w],U=_getCache(B),G=U.harness&&(U.harness.aliases||{})[w]||w,q=L?function(Y){var W=new L;_quickTween._pt=0,W.init(B,D?Y+D:Y,_quickTween,0,[B]),W.render(1,W),_quickTween._pt&&_renderPropTweens(1,_quickTween)}:U.set(B,G);return L?q:function(Y){return q(B,G,D?Y+D:Y,U,1)}},quickTo:function Q(B,w,D){var F,O=gsap$1.to(B,_merge((F={},F[w]="+=0.1",F.paused=!0,F),D||{})),L=function(G,q,Y){return O.resetTo(w,G,q,Y)};return L.tween=O,L},isTweening:function Q(B){return _globalTimeline.getTweensOf(B,!0).length>0},defaults:function Q(B){return B&&B.ease&&(B.ease=_parseEase(B.ease,_defaults.ease)),_mergeDeep(_defaults,B||{})},config:function Q(B){return _mergeDeep(_config,B||{})},registerEffect:function Q(B){var w=B.name,D=B.effect,F=B.plugins,O=B.defaults,L=B.extendTimeline;(F||"").split(",").forEach(function(U){return U&&!_plugins[U]&&!_globals[U]&&_warn(w+" effect requires "+U+" plugin.")}),_effects[w]=function(U,G,q){return D(toArray(U),_setDefaults(G||{},O),q)},L&&(Timeline.prototype[w]=function(U,G,q){return this.add(_effects[w](U,_isObject(G)?G:(q=G)&&{},this),q)})},registerEase:function Q(B,w){_easeMap[B]=_parseEase(w)},parseEase:function Q(B,w){return arguments.length?_parseEase(B,w):_easeMap},getById:function Q(B){return _globalTimeline.getById(B)},exportRoot:function Q(B,w){B===void 0&&(B={});var D=new Timeline(B),F,O;for(D.smoothChildTiming=_isNotFalse(B.smoothChildTiming),_globalTimeline.remove(D),D._dp=0,D._time=D._tTime=_globalTimeline._time,F=_globalTimeline._first;F;)O=F._next,(w||!(!F._dur&&F instanceof Tween&&F.vars.onComplete===F._targets[0]))&&_addToTimeline(D,F,F._start-F._delay),F=O;return _addToTimeline(_globalTimeline,D,0),D},context:function Q(B,w){return B?new Context(B,w):_context},matchMedia:function Q(B){return new MatchMedia(B)},matchMediaRefresh:function Q(){return _media.forEach(function(B){var w=B.conditions,D,F;for(F in w)w[F]&&(w[F]=!1,D=1);D&&B.revert()})||_onMediaChange()},addEventListener:function Q(B,w){var D=_listeners[B]||(_listeners[B]=[]);~D.indexOf(w)||D.push(w)},removeEventListener:function Q(B,w){var D=_listeners[B],F=D&&D.indexOf(w);F>=0&&D.splice(F,1)},utils:{wrap,wrapYoyo,distribute,random,snap,normalize,getUnit,clamp,splitColor,toArray,selector,mapRange,pipe,unitize,interpolate,shuffle},install:_install,effects:_effects,ticker:_ticker,updateRoot:Timeline.updateRoot,plugins:_plugins,globalTimeline:_globalTimeline,core:{PropTween,globals:_addGlobal,Tween,Timeline,Animation,getCache:_getCache,_removeLinkedListItem,reverting:function Q(){return _reverting$1},context:function Q(B){return B&&_context&&(_context.data.push(B),B._ctx=_context),_context},suppressOverwrites:function Q(B){return _suppressOverwrites=B}}};_forEachName("to,from,fromTo,delayedCall,set,killTweensOf",function(Q){return _gsap[Q]=Tween[Q]});_ticker.add(Timeline.updateRoot);_quickTween=_gsap.to({},{duration:0});var _getPluginPropTween=function Q(B,w){for(var D=B._pt;D&&D.p!==w&&D.op!==w&&D.fp!==w;)D=D._next;return D},_addModifiers=function Q(B,w){var D=B._targets,F,O,L;for(F in w)for(O=D.length;O--;)L=B._ptLookup[O][F],L&&(L=L.d)&&(L._pt&&(L=_getPluginPropTween(L,F)),L&&L.modifier&&L.modifier(w[F],B,D[O],F))},_buildModifierPlugin=function Q(B,w){return{name:B,rawVars:1,init:function(F,O,L){L._onInit=function(U){var G,q;if(_isString(O)&&(G={},_forEachName(O,function(Y){return G[Y]=1}),O=G),w){G={};for(q in O)G[q]=w(O[q]);O=G}_addModifiers(U,O)}}}},gsap$1=_gsap.registerPlugin({name:"attr",init:function Q(B,w,D,F,O){var L,U,G;this.tween=D;for(L in w)G=B.getAttribute(L)||"",U=this.add(B,"setAttribute",(G||0)+"",w[L],F,O,0,0,L),U.op=L,U.b=G,this._props.push(L)},render:function Q(B,w){for(var D=w._pt;D;)_reverting$1?D.set(D.t,D.p,D.b,D):D.r(B,D.d),D=D._next}},{name:"endArray",init:function Q(B,w){for(var D=w.length;D--;)this.add(B,D,B[D]||0,w[D],0,0,0,0,0,1)}},_buildModifierPlugin("roundProps",_roundModifier),_buildModifierPlugin("modifiers"),_buildModifierPlugin("snap",snap))||_gsap;Tween.version=Timeline.version=gsap$1.version="3.11.4";_coreReady=1;_windowExists$1()&&_wake();_easeMap.Power0;_easeMap.Power1;_easeMap.Power2;_easeMap.Power3;_easeMap.Power4;_easeMap.Linear;_easeMap.Quad;_easeMap.Cubic;_easeMap.Quart;_easeMap.Quint;_easeMap.Strong;_easeMap.Elastic;_easeMap.Back;_easeMap.SteppedEase;_easeMap.Bounce;_easeMap.Sine;_easeMap.Expo;_easeMap.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _win,_doc,_docElement,_pluginInitted,_tempDiv$1,_recentSetterPlugin,_reverting,_windowExists=function Q(){return typeof window!="undefined"},_transformProps={},_RAD2DEG=180/Math.PI,_DEG2RAD=Math.PI/180,_atan2=Math.atan2,_bigNum=1e8,_capsExp=/([A-Z])/g,_horizontalExp=/(left|right|width|margin|padding|x)/i,_complexExp=/[\s,\(]\S/,_propertyAliases={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_renderCSSProp=function Q(B,w){return w.set(w.t,w.p,Math.round((w.s+w.c*B)*1e4)/1e4+w.u,w)},_renderPropWithEnd=function Q(B,w){return w.set(w.t,w.p,B===1?w.e:Math.round((w.s+w.c*B)*1e4)/1e4+w.u,w)},_renderCSSPropWithBeginning=function Q(B,w){return w.set(w.t,w.p,B?Math.round((w.s+w.c*B)*1e4)/1e4+w.u:w.b,w)},_renderRoundedCSSProp=function Q(B,w){var D=w.s+w.c*B;w.set(w.t,w.p,~~(D+(D<0?-.5:.5))+w.u,w)},_renderNonTweeningValue=function Q(B,w){return w.set(w.t,w.p,B?w.e:w.b,w)},_renderNonTweeningValueOnlyAtEnd=function Q(B,w){return w.set(w.t,w.p,B!==1?w.b:w.e,w)},_setterCSSStyle=function Q(B,w,D){return B.style[w]=D},_setterCSSProp=function Q(B,w,D){return B.style.setProperty(w,D)},_setterTransform=function Q(B,w,D){return B._gsap[w]=D},_setterScale=function Q(B,w,D){return B._gsap.scaleX=B._gsap.scaleY=D},_setterScaleWithRender=function Q(B,w,D,F,O){var L=B._gsap;L.scaleX=L.scaleY=D,L.renderTransform(O,L)},_setterTransformWithRender=function Q(B,w,D,F,O){var L=B._gsap;L[w]=D,L.renderTransform(O,L)},_transformProp="transform",_transformOriginProp=_transformProp+"Origin",_saveStyle=function Q(B,w){var D=this,F=this.target,O=F.style;if(B in _transformProps){if(this.tfm=this.tfm||{},B!=="transform"&&(B=_propertyAliases[B]||B,~B.indexOf(",")?B.split(",").forEach(function(L){return D.tfm[L]=_get(F,L)}):this.tfm[B]=F._gsap.x?F._gsap[B]:_get(F,B)),this.props.indexOf(_transformProp)>=0)return;F._gsap.svg&&(this.svgo=F.getAttribute("data-svg-origin"),this.props.push(_transformOriginProp,w,"")),B=_transformProp}(O||w)&&this.props.push(B,w,O[B])},_removeIndependentTransforms=function Q(B){B.translate&&(B.removeProperty("translate"),B.removeProperty("scale"),B.removeProperty("rotate"))},_revertStyle=function Q(){var B=this.props,w=this.target,D=w.style,F=w._gsap,O,L;for(O=0;O<B.length;O+=3)B[O+1]?w[B[O]]=B[O+2]:B[O+2]?D[B[O]]=B[O+2]:D.removeProperty(B[O].replace(_capsExp,"-$1").toLowerCase());if(this.tfm){for(L in this.tfm)F[L]=this.tfm[L];F.svg&&(F.renderTransform(),w.setAttribute("data-svg-origin",this.svgo||"")),O=_reverting(),O&&!O.isStart&&!D[_transformProp]&&(_removeIndependentTransforms(D),F.uncache=1)}},_getStyleSaver=function Q(B,w){var D={target:B,props:[],revert:_revertStyle,save:_saveStyle};return w&&w.split(",").forEach(function(F){return D.save(F)}),D},_supports3D,_createElement=function Q(B,w){var D=_doc.createElementNS?_doc.createElementNS((w||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),B):_doc.createElement(B);return D.style?D:_doc.createElement(B)},_getComputedProperty=function Q(B,w,D){var F=getComputedStyle(B);return F[w]||F.getPropertyValue(w.replace(_capsExp,"-$1").toLowerCase())||F.getPropertyValue(w)||!D&&Q(B,_checkPropPrefix(w)||w,1)||""},_prefixes="O,Moz,ms,Ms,Webkit".split(","),_checkPropPrefix=function Q(B,w,D){var F=w||_tempDiv$1,O=F.style,L=5;if(B in O&&!D)return B;for(B=B.charAt(0).toUpperCase()+B.substr(1);L--&&!(_prefixes[L]+B in O););return L<0?null:(L===3?"ms":L>=0?_prefixes[L]:"")+B},_initCore=function Q(){_windowExists()&&window.document&&(_win=window,_doc=_win.document,_docElement=_doc.documentElement,_tempDiv$1=_createElement("div")||{style:{}},_createElement("div"),_transformProp=_checkPropPrefix(_transformProp),_transformOriginProp=_transformProp+"Origin",_tempDiv$1.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_supports3D=!!_checkPropPrefix("perspective"),_reverting=gsap$1.core.reverting,_pluginInitted=1)},_getBBoxHack=function Q(B){var w=_createElement("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),D=this.parentNode,F=this.nextSibling,O=this.style.cssText,L;if(_docElement.appendChild(w),w.appendChild(this),this.style.display="block",B)try{L=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Q}catch{}else this._gsapBBox&&(L=this._gsapBBox());return D&&(F?D.insertBefore(this,F):D.appendChild(this)),_docElement.removeChild(w),this.style.cssText=O,L},_getAttributeFallbacks=function Q(B,w){for(var D=w.length;D--;)if(B.hasAttribute(w[D]))return B.getAttribute(w[D])},_getBBox=function Q(B){var w;try{w=B.getBBox()}catch{w=_getBBoxHack.call(B,!0)}return w&&(w.width||w.height)||B.getBBox===_getBBoxHack||(w=_getBBoxHack.call(B,!0)),w&&!w.width&&!w.x&&!w.y?{x:+_getAttributeFallbacks(B,["x","cx","x1"])||0,y:+_getAttributeFallbacks(B,["y","cy","y1"])||0,width:0,height:0}:w},_isSVG=function Q(B){return!!(B.getCTM&&(!B.parentNode||B.ownerSVGElement)&&_getBBox(B))},_removeProperty=function Q(B,w){if(w){var D=B.style;w in _transformProps&&w!==_transformOriginProp&&(w=_transformProp),D.removeProperty?((w.substr(0,2)==="ms"||w.substr(0,6)==="webkit")&&(w="-"+w),D.removeProperty(w.replace(_capsExp,"-$1").toLowerCase())):D.removeAttribute(w)}},_addNonTweeningPT=function Q(B,w,D,F,O,L){var U=new PropTween(B._pt,w,D,0,1,L?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue);return B._pt=U,U.b=F,U.e=O,B._props.push(D),U},_nonConvertibleUnits={deg:1,rad:1,turn:1},_nonStandardLayouts={grid:1,flex:1},_convertToUnit=function Q(B,w,D,F){var O=parseFloat(D)||0,L=(D+"").trim().substr((O+"").length)||"px",U=_tempDiv$1.style,G=_horizontalExp.test(w),q=B.tagName.toLowerCase()==="svg",Y=(q?"client":"offset")+(G?"Width":"Height"),W=100,X=F==="px",te=F==="%",ae,ie,ce,he;return F===L||!O||_nonConvertibleUnits[F]||_nonConvertibleUnits[L]?O:(L!=="px"&&!X&&(O=Q(B,w,D,"px")),he=B.getCTM&&_isSVG(B),(te||L==="%")&&(_transformProps[w]||~w.indexOf("adius"))?(ae=he?B.getBBox()[G?"width":"height"]:B[Y],_round(te?O/ae*W:O/100*ae)):(U[G?"width":"height"]=W+(X?L:F),ie=~w.indexOf("adius")||F==="em"&&B.appendChild&&!q?B:B.parentNode,he&&(ie=(B.ownerSVGElement||{}).parentNode),(!ie||ie===_doc||!ie.appendChild)&&(ie=_doc.body),ce=ie._gsap,ce&&te&&ce.width&&G&&ce.time===_ticker.time&&!ce.uncache?_round(O/ce.width*W):((te||L==="%")&&!_nonStandardLayouts[_getComputedProperty(ie,"display")]&&(U.position=_getComputedProperty(B,"position")),ie===B&&(U.position="static"),ie.appendChild(_tempDiv$1),ae=_tempDiv$1[Y],ie.removeChild(_tempDiv$1),U.position="absolute",G&&te&&(ce=_getCache(ie),ce.time=_ticker.time,ce.width=ie[Y]),_round(X?ae*O/W:ae&&O?W/ae*O:0))))},_get=function Q(B,w,D,F){var O;return _pluginInitted||_initCore(),w in _propertyAliases&&w!=="transform"&&(w=_propertyAliases[w],~w.indexOf(",")&&(w=w.split(",")[0])),_transformProps[w]&&w!=="transform"?(O=_parseTransform(B,F),O=w!=="transformOrigin"?O[w]:O.svg?O.origin:_firstTwoOnly(_getComputedProperty(B,_transformOriginProp))+" "+O.zOrigin+"px"):(O=B.style[w],(!O||O==="auto"||F||~(O+"").indexOf("calc("))&&(O=_specialProps[w]&&_specialProps[w](B,w,D)||_getComputedProperty(B,w)||_getProperty(B,w)||(w==="opacity"?1:0))),D&&!~(O+"").trim().indexOf(" ")?_convertToUnit(B,w,O,D)+D:O},_tweenComplexCSSString=function Q(B,w,D,F){if(!D||D==="none"){var O=_checkPropPrefix(w,B,1),L=O&&_getComputedProperty(B,O,1);L&&L!==D?(w=O,D=L):w==="borderColor"&&(D=_getComputedProperty(B,"borderTopColor"))}var U=new PropTween(this._pt,B.style,w,0,1,_renderComplexString),G=0,q=0,Y,W,X,te,ae,ie,ce,he,pe,Be,Ie,ye;if(U.b=D,U.e=F,D+="",F+="",F==="auto"&&(B.style[w]=F,F=_getComputedProperty(B,w)||F,B.style[w]=D),Y=[D,F],_colorStringFilter(Y),D=Y[0],F=Y[1],X=D.match(_numWithUnitExp)||[],ye=F.match(_numWithUnitExp)||[],ye.length){for(;W=_numWithUnitExp.exec(F);)ce=W[0],pe=F.substring(G,W.index),ae?ae=(ae+1)%5:(pe.substr(-5)==="rgba("||pe.substr(-5)==="hsla(")&&(ae=1),ce!==(ie=X[q++]||"")&&(te=parseFloat(ie)||0,Ie=ie.substr((te+"").length),ce.charAt(1)==="="&&(ce=_parseRelative(te,ce)+Ie),he=parseFloat(ce),Be=ce.substr((he+"").length),G=_numWithUnitExp.lastIndex-Be.length,Be||(Be=Be||_config.units[w]||Ie,G===F.length&&(F+=Be,U.e+=Be)),Ie!==Be&&(te=_convertToUnit(B,w,ie,Be)||0),U._pt={_next:U._pt,p:pe||q===1?pe:",",s:te,c:he-te,m:ae&&ae<4||w==="zIndex"?Math.round:0});U.c=G<F.length?F.substring(G,F.length):""}else U.r=w==="display"&&F==="none"?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue;return _relExp.test(F)&&(U.e=0),this._pt=U,U},_keywordToPercent={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_convertKeywordsToPercentages=function Q(B){var w=B.split(" "),D=w[0],F=w[1]||"50%";return(D==="top"||D==="bottom"||F==="left"||F==="right")&&(B=D,D=F,F=B),w[0]=_keywordToPercent[D]||D,w[1]=_keywordToPercent[F]||F,w.join(" ")},_renderClearProps=function Q(B,w){if(w.tween&&w.tween._time===w.tween._dur){var D=w.t,F=D.style,O=w.u,L=D._gsap,U,G,q;if(O==="all"||O===!0)F.cssText="",G=1;else for(O=O.split(","),q=O.length;--q>-1;)U=O[q],_transformProps[U]&&(G=1,U=U==="transformOrigin"?_transformOriginProp:_transformProp),_removeProperty(D,U);G&&(_removeProperty(D,_transformProp),L&&(L.svg&&D.removeAttribute("transform"),_parseTransform(D,1),L.uncache=1,_removeIndependentTransforms(F)))}},_specialProps={clearProps:function Q(B,w,D,F,O){if(O.data!=="isFromStart"){var L=B._pt=new PropTween(B._pt,w,D,0,0,_renderClearProps);return L.u=F,L.pr=-10,L.tween=O,B._props.push(D),1}}},_identity2DMatrix=[1,0,0,1,0,0],_rotationalProperties={},_isNullTransform=function Q(B){return B==="matrix(1, 0, 0, 1, 0, 0)"||B==="none"||!B},_getComputedTransformMatrixAsArray=function Q(B){var w=_getComputedProperty(B,_transformProp);return _isNullTransform(w)?_identity2DMatrix:w.substr(7).match(_numExp).map(_round)},_getMatrix=function Q(B,w){var D=B._gsap||_getCache(B),F=B.style,O=_getComputedTransformMatrixAsArray(B),L,U,G,q;return D.svg&&B.getAttribute("transform")?(G=B.transform.baseVal.consolidate().matrix,O=[G.a,G.b,G.c,G.d,G.e,G.f],O.join(",")==="1,0,0,1,0,0"?_identity2DMatrix:O):(O===_identity2DMatrix&&!B.offsetParent&&B!==_docElement&&!D.svg&&(G=F.display,F.display="block",L=B.parentNode,(!L||!B.offsetParent)&&(q=1,U=B.nextElementSibling,_docElement.appendChild(B)),O=_getComputedTransformMatrixAsArray(B),G?F.display=G:_removeProperty(B,"display"),q&&(U?L.insertBefore(B,U):L?L.appendChild(B):_docElement.removeChild(B))),w&&O.length>6?[O[0],O[1],O[4],O[5],O[12],O[13]]:O)},_applySVGOrigin=function Q(B,w,D,F,O,L){var U=B._gsap,G=O||_getMatrix(B,!0),q=U.xOrigin||0,Y=U.yOrigin||0,W=U.xOffset||0,X=U.yOffset||0,te=G[0],ae=G[1],ie=G[2],ce=G[3],he=G[4],pe=G[5],Be=w.split(" "),Ie=parseFloat(Be[0])||0,ye=parseFloat(Be[1])||0,Ce,we,De,Se;D?G!==_identity2DMatrix&&(we=te*ce-ae*ie)&&(De=Ie*(ce/we)+ye*(-ie/we)+(ie*pe-ce*he)/we,Se=Ie*(-ae/we)+ye*(te/we)-(te*pe-ae*he)/we,Ie=De,ye=Se):(Ce=_getBBox(B),Ie=Ce.x+(~Be[0].indexOf("%")?Ie/100*Ce.width:Ie),ye=Ce.y+(~(Be[1]||Be[0]).indexOf("%")?ye/100*Ce.height:ye)),F||F!==!1&&U.smooth?(he=Ie-q,pe=ye-Y,U.xOffset=W+(he*te+pe*ie)-he,U.yOffset=X+(he*ae+pe*ce)-pe):U.xOffset=U.yOffset=0,U.xOrigin=Ie,U.yOrigin=ye,U.smooth=!!F,U.origin=w,U.originIsAbsolute=!!D,B.style[_transformOriginProp]="0px 0px",L&&(_addNonTweeningPT(L,U,"xOrigin",q,Ie),_addNonTweeningPT(L,U,"yOrigin",Y,ye),_addNonTweeningPT(L,U,"xOffset",W,U.xOffset),_addNonTweeningPT(L,U,"yOffset",X,U.yOffset)),B.setAttribute("data-svg-origin",Ie+" "+ye)},_parseTransform=function Q(B,w){var D=B._gsap||new GSCache(B);if("x"in D&&!w&&!D.uncache)return D;var F=B.style,O=D.scaleX<0,L="px",U="deg",G=getComputedStyle(B),q=_getComputedProperty(B,_transformOriginProp)||"0",Y,W,X,te,ae,ie,ce,he,pe,Be,Ie,ye,Ce,we,De,Se,be,Ne,Pe,Le,qe,_e,ve,Qe,xe,Re,Fe,Ue,He,et,oe,Xe;return Y=W=X=ie=ce=he=pe=Be=Ie=0,te=ae=1,D.svg=!!(B.getCTM&&_isSVG(B)),G.translate&&((G.translate!=="none"||G.scale!=="none"||G.rotate!=="none")&&(F[_transformProp]=(G.translate!=="none"?"translate3d("+(G.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(G.rotate!=="none"?"rotate("+G.rotate+") ":"")+(G.scale!=="none"?"scale("+G.scale.split(" ").join(",")+") ":"")+(G[_transformProp]!=="none"?G[_transformProp]:"")),F.scale=F.rotate=F.translate="none"),we=_getMatrix(B,D.svg),D.svg&&(D.uncache?(xe=B.getBBox(),q=D.xOrigin-xe.x+"px "+(D.yOrigin-xe.y)+"px",Qe=""):Qe=!w&&B.getAttribute("data-svg-origin"),_applySVGOrigin(B,Qe||q,!!Qe||D.originIsAbsolute,D.smooth!==!1,we)),ye=D.xOrigin||0,Ce=D.yOrigin||0,we!==_identity2DMatrix&&(Ne=we[0],Pe=we[1],Le=we[2],qe=we[3],Y=_e=we[4],W=ve=we[5],we.length===6?(te=Math.sqrt(Ne*Ne+Pe*Pe),ae=Math.sqrt(qe*qe+Le*Le),ie=Ne||Pe?_atan2(Pe,Ne)*_RAD2DEG:0,pe=Le||qe?_atan2(Le,qe)*_RAD2DEG+ie:0,pe&&(ae*=Math.abs(Math.cos(pe*_DEG2RAD))),D.svg&&(Y-=ye-(ye*Ne+Ce*Le),W-=Ce-(ye*Pe+Ce*qe))):(Xe=we[6],et=we[7],Fe=we[8],Ue=we[9],He=we[10],oe=we[11],Y=we[12],W=we[13],X=we[14],De=_atan2(Xe,He),ce=De*_RAD2DEG,De&&(Se=Math.cos(-De),be=Math.sin(-De),Qe=_e*Se+Fe*be,xe=ve*Se+Ue*be,Re=Xe*Se+He*be,Fe=_e*-be+Fe*Se,Ue=ve*-be+Ue*Se,He=Xe*-be+He*Se,oe=et*-be+oe*Se,_e=Qe,ve=xe,Xe=Re),De=_atan2(-Le,He),he=De*_RAD2DEG,De&&(Se=Math.cos(-De),be=Math.sin(-De),Qe=Ne*Se-Fe*be,xe=Pe*Se-Ue*be,Re=Le*Se-He*be,oe=qe*be+oe*Se,Ne=Qe,Pe=xe,Le=Re),De=_atan2(Pe,Ne),ie=De*_RAD2DEG,De&&(Se=Math.cos(De),be=Math.sin(De),Qe=Ne*Se+Pe*be,xe=_e*Se+ve*be,Pe=Pe*Se-Ne*be,ve=ve*Se-_e*be,Ne=Qe,_e=xe),ce&&Math.abs(ce)+Math.abs(ie)>359.9&&(ce=ie=0,he=180-he),te=_round(Math.sqrt(Ne*Ne+Pe*Pe+Le*Le)),ae=_round(Math.sqrt(ve*ve+Xe*Xe)),De=_atan2(_e,ve),pe=Math.abs(De)>2e-4?De*_RAD2DEG:0,Ie=oe?1/(oe<0?-oe:oe):0),D.svg&&(Qe=B.getAttribute("transform"),D.forceCSS=B.setAttribute("transform","")||!_isNullTransform(_getComputedProperty(B,_transformProp)),Qe&&B.setAttribute("transform",Qe))),Math.abs(pe)>90&&Math.abs(pe)<270&&(O?(te*=-1,pe+=ie<=0?180:-180,ie+=ie<=0?180:-180):(ae*=-1,pe+=pe<=0?180:-180)),w=w||D.uncache,D.x=Y-((D.xPercent=Y&&(!w&&D.xPercent||(Math.round(B.offsetWidth/2)===Math.round(-Y)?-50:0)))?B.offsetWidth*D.xPercent/100:0)+L,D.y=W-((D.yPercent=W&&(!w&&D.yPercent||(Math.round(B.offsetHeight/2)===Math.round(-W)?-50:0)))?B.offsetHeight*D.yPercent/100:0)+L,D.z=X+L,D.scaleX=_round(te),D.scaleY=_round(ae),D.rotation=_round(ie)+U,D.rotationX=_round(ce)+U,D.rotationY=_round(he)+U,D.skewX=pe+U,D.skewY=Be+U,D.transformPerspective=Ie+L,(D.zOrigin=parseFloat(q.split(" ")[2])||0)&&(F[_transformOriginProp]=_firstTwoOnly(q)),D.xOffset=D.yOffset=0,D.force3D=_config.force3D,D.renderTransform=D.svg?_renderSVGTransforms:_supports3D?_renderCSSTransforms:_renderNon3DTransforms,D.uncache=0,D},_firstTwoOnly=function Q(B){return(B=B.split(" "))[0]+" "+B[1]},_addPxTranslate=function Q(B,w,D){var F=getUnit(w);return _round(parseFloat(w)+parseFloat(_convertToUnit(B,"x",D+"px",F)))+F},_renderNon3DTransforms=function Q(B,w){w.z="0px",w.rotationY=w.rotationX="0deg",w.force3D=0,_renderCSSTransforms(B,w)},_zeroDeg="0deg",_zeroPx="0px",_endParenthesis=") ",_renderCSSTransforms=function Q(B,w){var D=w||this,F=D.xPercent,O=D.yPercent,L=D.x,U=D.y,G=D.z,q=D.rotation,Y=D.rotationY,W=D.rotationX,X=D.skewX,te=D.skewY,ae=D.scaleX,ie=D.scaleY,ce=D.transformPerspective,he=D.force3D,pe=D.target,Be=D.zOrigin,Ie="",ye=he==="auto"&&B&&B!==1||he===!0;if(Be&&(W!==_zeroDeg||Y!==_zeroDeg)){var Ce=parseFloat(Y)*_DEG2RAD,we=Math.sin(Ce),De=Math.cos(Ce),Se;Ce=parseFloat(W)*_DEG2RAD,Se=Math.cos(Ce),L=_addPxTranslate(pe,L,we*Se*-Be),U=_addPxTranslate(pe,U,-Math.sin(Ce)*-Be),G=_addPxTranslate(pe,G,De*Se*-Be+Be)}ce!==_zeroPx&&(Ie+="perspective("+ce+_endParenthesis),(F||O)&&(Ie+="translate("+F+"%, "+O+"%) "),(ye||L!==_zeroPx||U!==_zeroPx||G!==_zeroPx)&&(Ie+=G!==_zeroPx||ye?"translate3d("+L+", "+U+", "+G+") ":"translate("+L+", "+U+_endParenthesis),q!==_zeroDeg&&(Ie+="rotate("+q+_endParenthesis),Y!==_zeroDeg&&(Ie+="rotateY("+Y+_endParenthesis),W!==_zeroDeg&&(Ie+="rotateX("+W+_endParenthesis),(X!==_zeroDeg||te!==_zeroDeg)&&(Ie+="skew("+X+", "+te+_endParenthesis),(ae!==1||ie!==1)&&(Ie+="scale("+ae+", "+ie+_endParenthesis),pe.style[_transformProp]=Ie||"translate(0, 0)"},_renderSVGTransforms=function Q(B,w){var D=w||this,F=D.xPercent,O=D.yPercent,L=D.x,U=D.y,G=D.rotation,q=D.skewX,Y=D.skewY,W=D.scaleX,X=D.scaleY,te=D.target,ae=D.xOrigin,ie=D.yOrigin,ce=D.xOffset,he=D.yOffset,pe=D.forceCSS,Be=parseFloat(L),Ie=parseFloat(U),ye,Ce,we,De,Se;G=parseFloat(G),q=parseFloat(q),Y=parseFloat(Y),Y&&(Y=parseFloat(Y),q+=Y,G+=Y),G||q?(G*=_DEG2RAD,q*=_DEG2RAD,ye=Math.cos(G)*W,Ce=Math.sin(G)*W,we=Math.sin(G-q)*-X,De=Math.cos(G-q)*X,q&&(Y*=_DEG2RAD,Se=Math.tan(q-Y),Se=Math.sqrt(1+Se*Se),we*=Se,De*=Se,Y&&(Se=Math.tan(Y),Se=Math.sqrt(1+Se*Se),ye*=Se,Ce*=Se)),ye=_round(ye),Ce=_round(Ce),we=_round(we),De=_round(De)):(ye=W,De=X,Ce=we=0),(Be&&!~(L+"").indexOf("px")||Ie&&!~(U+"").indexOf("px"))&&(Be=_convertToUnit(te,"x",L,"px"),Ie=_convertToUnit(te,"y",U,"px")),(ae||ie||ce||he)&&(Be=_round(Be+ae-(ae*ye+ie*we)+ce),Ie=_round(Ie+ie-(ae*Ce+ie*De)+he)),(F||O)&&(Se=te.getBBox(),Be=_round(Be+F/100*Se.width),Ie=_round(Ie+O/100*Se.height)),Se="matrix("+ye+","+Ce+","+we+","+De+","+Be+","+Ie+")",te.setAttribute("transform",Se),pe&&(te.style[_transformProp]=Se)},_addRotationalPropTween=function Q(B,w,D,F,O){var L=360,U=_isString(O),G=parseFloat(O)*(U&&~O.indexOf("rad")?_RAD2DEG:1),q=G-F,Y=F+q+"deg",W,X;return U&&(W=O.split("_")[1],W==="short"&&(q%=L,q!==q%(L/2)&&(q+=q<0?L:-L)),W==="cw"&&q<0?q=(q+L*_bigNum)%L-~~(q/L)*L:W==="ccw"&&q>0&&(q=(q-L*_bigNum)%L-~~(q/L)*L)),B._pt=X=new PropTween(B._pt,w,D,F,q,_renderPropWithEnd),X.e=Y,X.u="deg",B._props.push(D),X},_assign=function Q(B,w){for(var D in w)B[D]=w[D];return B},_addRawTransformPTs=function Q(B,w,D){var F=_assign({},D._gsap),O="perspective,force3D,transformOrigin,svgOrigin",L=D.style,U,G,q,Y,W,X,te,ae;F.svg?(q=D.getAttribute("transform"),D.setAttribute("transform",""),L[_transformProp]=w,U=_parseTransform(D,1),_removeProperty(D,_transformProp),D.setAttribute("transform",q)):(q=getComputedStyle(D)[_transformProp],L[_transformProp]=w,U=_parseTransform(D,1),L[_transformProp]=q);for(G in _transformProps)q=F[G],Y=U[G],q!==Y&&O.indexOf(G)<0&&(te=getUnit(q),ae=getUnit(Y),W=te!==ae?_convertToUnit(D,G,q,ae):parseFloat(q),X=parseFloat(Y),B._pt=new PropTween(B._pt,U,G,W,X-W,_renderCSSProp),B._pt.u=ae||0,B._props.push(G));_assign(U,F)};_forEachName("padding,margin,Width,Radius",function(Q,B){var w="Top",D="Right",F="Bottom",O="Left",L=(B<3?[w,D,F,O]:[w+O,w+D,F+D,F+O]).map(function(U){return B<2?Q+U:"border"+U+Q});_specialProps[B>1?"border"+Q:Q]=function(U,G,q,Y,W){var X,te;if(arguments.length<4)return X=L.map(function(ae){return _get(U,ae,q)}),te=X.join(" "),te.split(X[0]).length===5?X[0]:te;X=(Y+"").split(" "),te={},L.forEach(function(ae,ie){return te[ae]=X[ie]=X[ie]||X[(ie-1)/2|0]}),U.init(G,te,W)}});var CSSPlugin={name:"css",register:_initCore,targetTest:function Q(B){return B.style&&B.nodeType},init:function Q(B,w,D,F,O){var L=this._props,U=B.style,G=D.vars.startAt,q,Y,W,X,te,ae,ie,ce,he,pe,Be,Ie,ye,Ce,we,De;_pluginInitted||_initCore(),this.styles=this.styles||_getStyleSaver(B),De=this.styles.props,this.tween=D;for(ie in w)if(ie!=="autoRound"&&(Y=w[ie],!(_plugins[ie]&&_checkPlugin(ie,w,D,F,B,O)))){if(te=typeof Y,ae=_specialProps[ie],te==="function"&&(Y=Y.call(D,F,B,O),te=typeof Y),te==="string"&&~Y.indexOf("random(")&&(Y=_replaceRandom(Y)),ae)ae(this,B,ie,Y,D)&&(we=1);else if(ie.substr(0,2)==="--")q=(getComputedStyle(B).getPropertyValue(ie)+"").trim(),Y+="",_colorExp.lastIndex=0,_colorExp.test(q)||(ce=getUnit(q),he=getUnit(Y)),he?ce!==he&&(q=_convertToUnit(B,ie,q,he)+he):ce&&(Y+=ce),this.add(U,"setProperty",q,Y,F,O,0,0,ie),L.push(ie),De.push(ie,0,U[ie]);else if(te!=="undefined"){if(G&&ie in G?(q=typeof G[ie]=="function"?G[ie].call(D,F,B,O):G[ie],_isString(q)&&~q.indexOf("random(")&&(q=_replaceRandom(q)),getUnit(q+"")||(q+=_config.units[ie]||getUnit(_get(B,ie))||""),(q+"").charAt(1)==="="&&(q=_get(B,ie))):q=_get(B,ie),X=parseFloat(q),pe=te==="string"&&Y.charAt(1)==="="&&Y.substr(0,2),pe&&(Y=Y.substr(2)),W=parseFloat(Y),ie in _propertyAliases&&(ie==="autoAlpha"&&(X===1&&_get(B,"visibility")==="hidden"&&W&&(X=0),De.push("visibility",0,U.visibility),_addNonTweeningPT(this,U,"visibility",X?"inherit":"hidden",W?"inherit":"hidden",!W)),ie!=="scale"&&ie!=="transform"&&(ie=_propertyAliases[ie],~ie.indexOf(",")&&(ie=ie.split(",")[0]))),Be=ie in _transformProps,Be){if(this.styles.save(ie),Ie||(ye=B._gsap,ye.renderTransform&&!w.parseTransform||_parseTransform(B,w.parseTransform),Ce=w.smoothOrigin!==!1&&ye.smooth,Ie=this._pt=new PropTween(this._pt,U,_transformProp,0,1,ye.renderTransform,ye,0,-1),Ie.dep=1),ie==="scale")this._pt=new PropTween(this._pt,ye,"scaleY",ye.scaleY,(pe?_parseRelative(ye.scaleY,pe+W):W)-ye.scaleY||0,_renderCSSProp),this._pt.u=0,L.push("scaleY",ie),ie+="X";else if(ie==="transformOrigin"){De.push(_transformOriginProp,0,U[_transformOriginProp]),Y=_convertKeywordsToPercentages(Y),ye.svg?_applySVGOrigin(B,Y,0,Ce,0,this):(he=parseFloat(Y.split(" ")[2])||0,he!==ye.zOrigin&&_addNonTweeningPT(this,ye,"zOrigin",ye.zOrigin,he),_addNonTweeningPT(this,U,ie,_firstTwoOnly(q),_firstTwoOnly(Y)));continue}else if(ie==="svgOrigin"){_applySVGOrigin(B,Y,1,Ce,0,this);continue}else if(ie in _rotationalProperties){_addRotationalPropTween(this,ye,ie,X,pe?_parseRelative(X,pe+Y):Y);continue}else if(ie==="smoothOrigin"){_addNonTweeningPT(this,ye,"smooth",ye.smooth,Y);continue}else if(ie==="force3D"){ye[ie]=Y;continue}else if(ie==="transform"){_addRawTransformPTs(this,Y,B);continue}}else ie in U||(ie=_checkPropPrefix(ie)||ie);if(Be||(W||W===0)&&(X||X===0)&&!_complexExp.test(Y)&&ie in U)ce=(q+"").substr((X+"").length),W||(W=0),he=getUnit(Y)||(ie in _config.units?_config.units[ie]:ce),ce!==he&&(X=_convertToUnit(B,ie,q,he)),this._pt=new PropTween(this._pt,Be?ye:U,ie,X,(pe?_parseRelative(X,pe+W):W)-X,!Be&&(he==="px"||ie==="zIndex")&&w.autoRound!==!1?_renderRoundedCSSProp:_renderCSSProp),this._pt.u=he||0,ce!==he&&he!=="%"&&(this._pt.b=q,this._pt.r=_renderCSSPropWithBeginning);else if(ie in U)_tweenComplexCSSString.call(this,B,ie,q,pe?pe+Y:Y);else if(ie in B)this.add(B,ie,q||B[ie],pe?pe+Y:Y,F,O);else if(ie!=="parseTransform"){_missingPlugin(ie,Y);continue}Be||(ie in U?De.push(ie,0,U[ie]):De.push(ie,1,q||B[ie])),L.push(ie)}}we&&_sortPropTweensByPriority(this)},render:function Q(B,w){if(w.tween._time||!_reverting())for(var D=w._pt;D;)D.r(B,D.d),D=D._next;else w.styles.revert()},get:_get,aliases:_propertyAliases,getSetter:function Q(B,w,D){var F=_propertyAliases[w];return F&&F.indexOf(",")<0&&(w=F),w in _transformProps&&w!==_transformOriginProp&&(B._gsap.x||_get(B,"x"))?D&&_recentSetterPlugin===D?w==="scale"?_setterScale:_setterTransform:(_recentSetterPlugin=D||{})&&(w==="scale"?_setterScaleWithRender:_setterTransformWithRender):B.style&&!_isUndefined(B.style[w])?_setterCSSStyle:~w.indexOf("-")?_setterCSSProp:_getSetter(B,w)},core:{_removeProperty,_getMatrix}};gsap$1.utils.checkPrefix=_checkPropPrefix;gsap$1.core.getStyleSaver=_getStyleSaver;(function(Q,B,w,D){var F=_forEachName(Q+","+B+","+w,function(O){_transformProps[O]=1});_forEachName(B,function(O){_config.units[O]="deg",_rotationalProperties[O]=1}),_propertyAliases[F[13]]=Q+","+B,_forEachName(D,function(O){var L=O.split(":");_propertyAliases[L[1]]=F[L[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(Q){_config.units[Q]="px"});gsap$1.registerPlugin(CSSPlugin);var gsapWithCSS=gsap$1.registerPlugin(CSSPlugin)||gsap$1;gsapWithCSS.core.Tween;class SeekDialogue{constructor(B,w){this.tone=B,this.lines=w,this.timeline=window.timeline,this.contentBox=document.getElementById("seekResp"),this.typingInProgress=!1}start(B,w){this.element=document.createElement("p"),this.element.classList.add(w),this.contentBox.appendChild(this.element),!this.typingInProgress&&this.typeLine(this.lines[B])}typeLine(B){this.string=B.text,this.words=this.stringToWordsArray(this.string),this.speed=this.getTypingSpeed(this.tone),this.i=0,this.j=0,this.typingInProgress=!0,this.type().then(()=>{this.i===this.words.length&&(B.choices?B.choices.forEach((w,D)=>{}):console.log("End of conversation."),this.typingInProgress=!1)})}stringToWordsArray(B){return B.split(" ")}async type(){var w,D,F,O,L;if(this.i<this.words.length)if(this.j<this.words[this.i].length){let U=this.words[this.i][this.j];if(this.words[this.i][0]==="*")U=this.words[this.i][this.j],U!=="*"&&(this.element.innerHTML+=`<span class="${this.specialText1}">${U}</span>`);else if(this.words[this.i][0]==="^")U=this.words[this.i][this.j],U!=="^"&&(this.element.innerHTML+=`<span class="${this.specialText2}">${U}</span>`);else if(U==="$")await this.delay(500).catch(G=>{console.log(G)}).catch(G=>{console.log(G)});else if(U==="]")this.element.innerHTML="",this.j+=3;else if(U.startsWith("%")){let G=this.words[this.i].substring(this.j+1,this.j+2);this.element.innerHTML+=`<span class="blink">${G}</span>`,this.j++}else this.element.innerHTML+=U;this.j++,await this.delay(this.speed).catch(G=>{console.log(G)}).catch(G=>{console.log(G)}),this.type()}else{if(this.i++,this.j=0,this.element.innerHTML+=" ",this.element.classList.contains("sysResp")&&this.i===this.words.length&&((window.conversationHistory[0]==="seekOpt3"||window.conversationHistory[0]==="seekOpt5"&&window.form1Active===!1)&&((w=document.getElementById("subGeneral"))==null||w.remove(),this.newElement=document.createElement("p"),this.newElement.innerHTML=`
                  <form id="subGeneral">
                    <input type="text" name="Category" value="" id="genCat">
                      <span id="genInfo">Info:</span>
                      <input type="text" name="Email" placeholder="name@email.com" id="genInput">
                      <input type="submit" value="| >" id="genSub">
                      <span id="genSubLoad">|</span>
                  </form>
                  `,this.contentBox.appendChild(this.newElement),gsapWithCSS.to("#subGeneral",{duration:1,opacity:1,y:0,ease:"power2.out"}),window.conversationHistory[0]==="seekOpt3"?document.getElementById("genCat").value="Digisette":document.getElementById("genCat").value="General",window.sub()),window.seekType==="contact"&&window.form1Active===!1&&((D=document.getElementById("subGeneral2"))==null||D.remove(),this.newElement2=document.createElement("div"),this.newElement2.innerHTML=`
                <form id="subGeneral2">
                    <input type="text" name="Category" value="Hi" id="genCat2">
                    <span id="genInfo2">Info:</span>
                    <input type="text" name="Email" placeholder="name@email.com" id="genInput2"><br>
                    <textarea name="Info" id="genInput3" placeholder="Your Message:"></textarea><br>
                    <input type="submit" value="| >" id="genSub2">
                    <span id="genSubLoad2">|</span>
                </form>
                `,this.contentBox.appendChild(this.newElement2),gsapWithCSS.to("#subGeneral2",{duration:1,opacity:1,y:0,ease:"power2.out"}),window.sub2()),window.conversationHistory[0]==="seekOpt1"&&((F=document.querySelector(".visualSubMenuContainer"))==null||F.remove(),this.newElement3=document.createElement("div"),this.newElement3.innerHTML=`
                <div class="visualSubMenu">IMAGES</div>
                <div class="visualSubMenu">VIDEO</div>
                `,this.newElement3.classList.add("visualSubMenuContainer"),this.contentBox.appendChild(this.newElement3),gsapWithCSS.to(".visualSubMenuContainer",{duration:1,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to(".visualSubMenuContainer",{duration:1,scale:1,y:0,ease:"power2.out"}),this.choices=document.querySelectorAll(".visualSubMenu"),this.choices.forEach(U=>{U.addEventListener("click",G=>{this.openGallery(G)})})),window.conversationHistory[0]==="seekOpt6"&&((O=document.querySelector(".infoSubMenuContainer"))==null||O.remove(),this.newElement4=document.createElement("div"),this.newElement4.innerHTML=`
                <div class="infoSubMenu">ABOUT</div>
                <div class="infoSubMenu">CREDITS</div>
                <div class="infoSubMenu">CONTACT</div>
                `,this.newElement4.classList.add("infoSubMenuContainer"),this.contentBox.appendChild(this.newElement4),gsapWithCSS.to(".infoSubMenuContainer",{duration:1,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to(".infoSubMenuContainer",{duration:1,scale:1,y:0,ease:"power2.out"}),this.choices2=document.querySelectorAll(".infoSubMenu"),this.choices2.forEach(U=>{U.addEventListener("click",G=>{this.infoTopics(G)})})),window.conversationHistory[0]==="seekOpt2"&&((L=document.querySelector(".musicContainer"))==null||L.remove(),this.newElement5=document.createElement("div"),this.newElement5.innerHTML=`
                <scoge-music></scoge-music>
                `,this.newElement5.classList.add("musicContainer"),this.contentBox.appendChild(this.newElement5))),this.i===this.words.length&&(this.element.classList.contains("userResp")&&setTimeout(()=>{window.dialogue.choose(0)},800),window.conversationHistory[0]==="seekOpt3"&&window.digiPre===!1)){if(window.digiPre===!1){window.digiPre=!0;var B=document.createElement("video");B.setAttribute("id","portalVideoExt"),B.setAttribute("src","https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeVideos/Digisette/Digisette-ZoomSpin.mp4"),B.setAttribute("muted","true"),B.setAttribute("playsinline","true"),B.setAttribute("autoplay","false"),document.getElementById("videoGallery").appendChild(B),B.play()}gsapWithCSS.to("#videoGallery",{duration:2,filter:"blur(0px)",ease:"power2.inOut"}),document.getElementById("videoGallery").style.opacity="1",gsapWithCSS.to("#portalVideoExt",{duration:2,opacity:1,y:0,ease:"power2.out"}),B.onended=function(){B.remove(),document.getElementById("videoGallery").style.opacity="0"}}this.type()}}async delay(B){return new Promise(w=>setTimeout(w,B))}getTypingSpeed(B){switch(B){case"hyper/angry":return 25;case"friendly":return 50;case"neutral":return 75;case"calm":return 100;case"sad":return 175;case"mystery":return 185;default:return 60}}openGallery(B){var w;switch(this.selected=(w=B==null?void 0:B.target)==null?void 0:w.innerHTML,this.homeT=document.getElementById("homeTip"),window.galleryActive=!0,window.view="gallery",gsapWithCSS.to("#seekResp",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekOpt",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,backgroundColor:"#ff002d",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,border:"var(--primary)",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,scale:1.3,y:0,ease:"power2.out"}),document.getElementById("seekBody").style.pointerEvents="none",document.getElementById("manBG").style.userSelect="none",document.getElementById("manBG").style.pointerEvents="auto",document.getElementById("seekGallery").style.pointerEvents="auto",setTimeout(()=>{setTimeout(()=>{gsapWithCSS.fromTo("#seekGallery",{scale:1},{duration:.45,scale:1.05,yoyo:!0,repeat:1})},3e3)},1e3),this.selected){case"IMAGES":document.getElementById("dropdown").setAttribute("class","dropdown"),gsapWithCSS.to("#dropdown",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="auto",this.homeT.innerHTML="SEEK",window.viewingPg=!0,window.galleryType="images",gsapWithCSS.to("#seekGallery",{duration:2,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:2,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,filter:"blur(5px)",ease:"power2.inOut"});break;case"VIDEO":document.getElementById("dropdown").setAttribute("class","videodropdown"),gsapWithCSS.to("#dropdown",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="auto",gsapWithCSS.to("#soundToggle",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("soundToggle").style.pointerEvents="auto",this.homeT.innerHTML="SEEK",this.homeT.innerHTML="SEEK",window.viewingPg=!0,window.galleryType="video",document.getElementById("portalVideo").style.display="block",document.getElementById("portalVideo2").style.display="block",gsapWithCSS.to("#videoGallery",{duration:2,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:2,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,filter:"blur(5px)",ease:"power2.inOut"});break}}infoTopics(B){switch(this.selected=B.target.innerHTML,window.view="gallery",this.selected){case"ABOUT":window.seekType="discover";var w="Tell me more about 'SCOG\xC9' the brand.",D="Info";window.systemSpeak(w,D);break;case"CREDITS":window.seekType="discover";var F="Name some people and their roles credited to have worked with SCOG\xC9?",O="Credits";window.systemSpeak(F,O);break;case"CONTACT":if(window.seekType!="contact"){window.seekType="contact";let L="How do I contact you?",U="Contact";window.systemSpeak(L,U)}else document.getElementById("genInput2").focus();break}}choose(B){const w=this.lines[0].choices[B];if(this.lines.shift(),this.lines.length===0){console.log("End of conversation.");return}w.action&&w.action()}}async function portal(){const Q=document.getElementById("seekGallery"),B=document.getElementById("videoGallery");document.getElementById("seekVideo");const w=document.getElementById("portalImg"),D=document.getElementById("portalImg2"),F=document.getElementById("portalVideo"),O=document.getElementById("portalVideo2"),L=await __vitePreload(()=>import("./imgassetdb.42c45b02.js"),[]).catch(Ie=>{console.log(Ie)}),U=await __vitePreload(()=>import("./vidassetdb.ced21d21.js"),[]).catch(Ie=>{console.log(Ie)});window.imageFiles=L.images.array,window.videoFiles=U.videos.array,console.log("image",window.imageFiles),console.log("video",window.videoFiles),window.shuffleArray=Ie=>{const ye=[...Ie];for(let Ce=ye.length-1;Ce>0;Ce--){const we=Math.floor(Math.random()*(Ce+1));[ye[Ce],ye[we]]=[ye[we],ye[Ce]]}return ye},window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles),window.soundOn=!1;const G=window.imageFiles.length,q=window.videoFiles.length;let Y=1,W=2,X=null,te=0,ae=1,ie=null,ce=2,he=null,pe=0;function Be(){if(window.galleryType==="images")if(w.style.transition="1s all",D.style.transition="1s all",Y=(Y+1)%G,window.filteredImages[Y],W=(Y+1)%G,X=window.filteredImages[W],te===0){w.style.opacity="0%",D.style.opacity="100%",w.src=X.publicUrl,te=1;return}else{w.style.opacity="100%",D.style.opacity="0%",te=0,D.src=X.publicUrl;return}else if(window.galleryType==="video")if(F.style.transition="1s all",O.style.transition="1s all",ae=(ae+1)%q,ie=window.filteredVideos[ae],ce=(ae+1)%q,he=window.filteredVideos[ce],pe===0){F.style.opacity="0%",O.style.opacity="100%",window.currentVideo=O,window.hiddenVideo=F,O.play(),F.pause(),F.currentTime=0,O.currentTime=0,pe=1,window.soundOn===!1?(O.muted=!0,F.muted=!0):(O.muted=!1,F.muted=!0);return}else{F.style.opacity="100%",O.style.opacity="0%",window.currentVideo=F,window.hiddenVideo=O,window.soundOn===!1?(F.muted=!0,O.muted=!0):(F.muted=!1,O.muted=!0),F.play(),O.pause(),O.currentTime=0,F.currentTime=0,pe=0,F.src=ie.publicUrl,F.src.includes("POR")?F.setAttribute("class","videoEl"):F.setAttribute("class","mobileVideo"),setTimeout(()=>{O.src=he.publicUrl,O.src.includes("Seq")?O.setAttribute("class","videoEl"):O.setAttribute("class","mobileVideo")},1100);return}}window.toggleSound=()=>{console.log("toggle sound");var Ie=document.getElementById("soundToggle");if(window.soundOn===!0){window.soundOn=!1,window.currentVideo.muted=!0,window.hiddenVideo.muted=!0,Ie.innerHTML="- SOUND OFF -";return}else{window.soundOn=!0,console.log(window.currentVideo),window.currentVideo.muted=!1,window.hiddenVideo.muted=!0,Ie.innerHTML="- SOUND ON -";return}},Q.addEventListener("click",()=>{Be()}),B.addEventListener("click",()=>{Be()}),document.getElementById("soundToggle").addEventListener("click",()=>{window.toggleSound()}),Be()}const idlFactory=({IDL:Q})=>{const B=Q.Variant({UnauthorizedOperator:Q.Null,SelfTransfer:Q.Null,TokenNotFound:Q.Null,UnauthorizedOwner:Q.Null,NotFound:Q.Null,SelfApprove:Q.Null,OperatorNotFound:Q.Null,ExistedNFT:Q.Null,OwnerNotFound:Q.Null,Other:Q.Text}),w=Q.Variant({ok:Q.Nat,err:B}),D=Q.Record({logo:Q.Opt(Q.Text),name:Q.Opt(Q.Text),created_at:Q.Nat64,upgraded_at:Q.Nat64,custodians:Q.Vec(Q.Principal),symbol:Q.Opt(Q.Text)}),F=Q.Record({xp:Q.Opt(Q.Nat64),earthImage:Q.Opt(Q.Vec(Q.Nat8)),bankooText:Q.Opt(Q.Vec(Q.Text)),mental:Q.Opt(Q.Nat64),powerUps:Q.Opt(Q.Vec(Q.Nat64)),styles:Q.Opt(Q.Vec(Q.Text)),alias:Q.Text,notiOn:Q.Opt(Q.Bool),netClass:Q.Opt(Q.Text),data:Q.Opt(Q.Vec(Q.Nat8)),fsOn:Q.Opt(Q.Bool),rank:Q.Nat64,network:Q.Opt(Q.Vec(Q.Text)),ancestorsNames:Q.Opt(Q.Vec(Q.Text)),email:Q.Text,bankooImage:Q.Opt(Q.Vec(Q.Nat8)),sight:Q.Opt(Q.Nat64),speed:Q.Opt(Q.Nat64),discoveredProgress:Q.Opt(Q.Float64),story:Q.Opt(Q.Text),imageURI:Q.Text,progress:Q.Nat64,musicLevel:Q.Opt(Q.Float64),domains:Q.Opt(Q.Vec(Q.Nat64)),landRank:Q.Nat64,pillType:Q.Text,category:Q.Text,landNumber:Q.Nat64,endurance:Q.Opt(Q.Float64),power:Q.Opt(Q.Nat64),physical:Q.Opt(Q.Nat64),identifier:Q.Text,videoURI:Q.Opt(Q.Text),ancestorsImages:Q.Opt(Q.Vec(Q.Nat8)),soundLevel:Q.Opt(Q.Float64),earthText:Q.Opt(Q.Vec(Q.Text)),linked:Q.Opt(Q.Bool),playerLocation:Q.Nat64,health:Q.Opt(Q.Nat64),discovered:Q.Opt(Q.Vec(Q.Text))}),O=Q.Variant({ok:Q.Opt(Q.Principal),err:B}),L=Q.Record({transferred_at:Q.Opt(Q.Nat64),transferred_by:Q.Opt(Q.Principal),owner:Q.Opt(Q.Principal),operator:Q.Opt(Q.Principal),approved_at:Q.Opt(Q.Nat64),approved_by:Q.Opt(Q.Principal),properties:Q.Vec(F),is_burned:Q.Bool,token_identifier:Q.Nat,burned_at:Q.Opt(Q.Nat64),burned_by:Q.Opt(Q.Principal),minted_at:Q.Nat64,minted_by:Q.Principal}),U=Q.Variant({ok:Q.Vec(L),err:B}),G=Q.Record({cycles:Q.Nat,total_transactions:Q.Nat,total_unique_holders:Q.Nat,total_supply:Q.Nat}),q=Q.Record({Burn:Q.Null,Mint:Q.Null,Approval:Q.Null,TransactionHistory:Q.Null}),Y=Q.Variant({ok:L,err:B});return Q.Service({adminUser:Q.Func([],[Q.Text],["query"]),balanceOf:Q.Func([Q.Principal],[w],["query"]),custodians:Q.Func([],[Q.Vec(Q.Principal)],["query"]),cycles:Q.Func([],[Q.Nat],["query"]),logo:Q.Func([],[Q.Opt(Q.Text)],["query"]),metadata:Q.Func([],[D],["query"]),mint:Q.Func([Q.Principal,Q.Nat,Q.Vec(F)],[w],[]),name:Q.Func([],[Q.Opt(Q.Text)],["query"]),operatorOf:Q.Func([Q.Nat],[O],["query"]),operatorTokenMetadata:Q.Func([Q.Principal],[U],["query"]),ownerOf:Q.Func([Q.Nat],[O],["query"]),ownerTokenMetadata:Q.Func([Q.Principal],[U],["query"]),setCustodians:Q.Func([Q.Vec(Q.Principal)],[],[]),setLogo:Q.Func([Q.Text],[],[]),setName:Q.Func([Q.Text],[],[]),setSymbol:Q.Func([Q.Text],[],[]),stats:Q.Func([],[G],["query"]),supportedInterfaces:Q.Func([],[Q.Vec(q)],["query"]),symbol:Q.Func([],[Q.Opt(Q.Text)],["query"]),tokenMetadata:Q.Func([Q.Nat],[Y],["query"]),totalSupply:Q.Func([],[Q.Nat],["query"]),totalUniqueHolders:Q.Func([],[Q.Nat],["query"])})};var buffer={},base64Js={};base64Js.byteLength=byteLength;base64Js.toByteArray=toByteArray;base64Js.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr=typeof Uint8Array!="undefined"?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;revLookup["-".charCodeAt(0)]=62;revLookup["_".charCodeAt(0)]=63;function getLens(Q){var B=Q.length;if(B%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=Q.indexOf("=");w===-1&&(w=B);var D=w===B?0:4-w%4;return[w,D]}function byteLength(Q){var B=getLens(Q),w=B[0],D=B[1];return(w+D)*3/4-D}function _byteLength(Q,B,w){return(B+w)*3/4-w}function toByteArray(Q){var B,w=getLens(Q),D=w[0],F=w[1],O=new Arr(_byteLength(Q,D,F)),L=0,U=F>0?D-4:D,G;for(G=0;G<U;G+=4)B=revLookup[Q.charCodeAt(G)]<<18|revLookup[Q.charCodeAt(G+1)]<<12|revLookup[Q.charCodeAt(G+2)]<<6|revLookup[Q.charCodeAt(G+3)],O[L++]=B>>16&255,O[L++]=B>>8&255,O[L++]=B&255;return F===2&&(B=revLookup[Q.charCodeAt(G)]<<2|revLookup[Q.charCodeAt(G+1)]>>4,O[L++]=B&255),F===1&&(B=revLookup[Q.charCodeAt(G)]<<10|revLookup[Q.charCodeAt(G+1)]<<4|revLookup[Q.charCodeAt(G+2)]>>2,O[L++]=B>>8&255,O[L++]=B&255),O}function tripletToBase64(Q){return lookup[Q>>18&63]+lookup[Q>>12&63]+lookup[Q>>6&63]+lookup[Q&63]}function encodeChunk(Q,B,w){for(var D,F=[],O=B;O<w;O+=3)D=(Q[O]<<16&16711680)+(Q[O+1]<<8&65280)+(Q[O+2]&255),F.push(tripletToBase64(D));return F.join("")}function fromByteArray(Q){for(var B,w=Q.length,D=w%3,F=[],O=16383,L=0,U=w-D;L<U;L+=O)F.push(encodeChunk(Q,L,L+O>U?U:L+O));return D===1?(B=Q[w-1],F.push(lookup[B>>2]+lookup[B<<4&63]+"==")):D===2&&(B=(Q[w-2]<<8)+Q[w-1],F.push(lookup[B>>10]+lookup[B>>4&63]+lookup[B<<2&63]+"=")),F.join("")}var ieee754$1={};ieee754$1.read=function(Q,B,w,D,F){var O,L,U=F*8-D-1,G=(1<<U)-1,q=G>>1,Y=-7,W=w?F-1:0,X=w?-1:1,te=Q[B+W];for(W+=X,O=te&(1<<-Y)-1,te>>=-Y,Y+=U;Y>0;O=O*256+Q[B+W],W+=X,Y-=8);for(L=O&(1<<-Y)-1,O>>=-Y,Y+=D;Y>0;L=L*256+Q[B+W],W+=X,Y-=8);if(O===0)O=1-q;else{if(O===G)return L?NaN:(te?-1:1)*(1/0);L=L+Math.pow(2,D),O=O-q}return(te?-1:1)*L*Math.pow(2,O-D)};ieee754$1.write=function(Q,B,w,D,F,O){var L,U,G,q=O*8-F-1,Y=(1<<q)-1,W=Y>>1,X=F===23?Math.pow(2,-24)-Math.pow(2,-77):0,te=D?0:O-1,ae=D?1:-1,ie=B<0||B===0&&1/B<0?1:0;for(B=Math.abs(B),isNaN(B)||B===1/0?(U=isNaN(B)?1:0,L=Y):(L=Math.floor(Math.log(B)/Math.LN2),B*(G=Math.pow(2,-L))<1&&(L--,G*=2),L+W>=1?B+=X/G:B+=X*Math.pow(2,1-W),B*G>=2&&(L++,G/=2),L+W>=Y?(U=0,L=Y):L+W>=1?(U=(B*G-1)*Math.pow(2,F),L=L+W):(U=B*Math.pow(2,W-1)*Math.pow(2,F),L=0));F>=8;Q[w+te]=U&255,te+=ae,U/=256,F-=8);for(L=L<<F|U,q+=F;q>0;Q[w+te]=L&255,te+=ae,L/=256,q-=8);Q[w+te-ae]|=ie*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(Q){var B=base64Js,w=ieee754$1,D=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Q.Buffer=U,Q.SlowBuffer=pe,Q.INSPECT_MAX_BYTES=50;var F=2147483647;Q.kMaxLength=F,U.TYPED_ARRAY_SUPPORT=O(),!U.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function O(){try{var ee=new Uint8Array(1),j={foo:function(){return 42}};return Object.setPrototypeOf(j,Uint8Array.prototype),Object.setPrototypeOf(ee,j),ee.foo()===42}catch{return!1}}Object.defineProperty(U.prototype,"parent",{enumerable:!0,get:function(){if(!!U.isBuffer(this))return this.buffer}}),Object.defineProperty(U.prototype,"offset",{enumerable:!0,get:function(){if(!!U.isBuffer(this))return this.byteOffset}});function L(ee){if(ee>F)throw new RangeError('The value "'+ee+'" is invalid for option "size"');var j=new Uint8Array(ee);return Object.setPrototypeOf(j,U.prototype),j}function U(ee,j,J){if(typeof ee=="number"){if(typeof j=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return W(ee)}return G(ee,j,J)}U.poolSize=8192;function G(ee,j,J){if(typeof ee=="string")return X(ee,j);if(ArrayBuffer.isView(ee))return ae(ee);if(ee==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ee);if(fe(ee,ArrayBuffer)||ee&&fe(ee.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(fe(ee,SharedArrayBuffer)||ee&&fe(ee.buffer,SharedArrayBuffer)))return ie(ee,j,J);if(typeof ee=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var re=ee.valueOf&&ee.valueOf();if(re!=null&&re!==ee)return U.from(re,j,J);var ne=ce(ee);if(ne)return ne;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof ee[Symbol.toPrimitive]=="function")return U.from(ee[Symbol.toPrimitive]("string"),j,J);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ee)}U.from=function(ee,j,J){return G(ee,j,J)},Object.setPrototypeOf(U.prototype,Uint8Array.prototype),Object.setPrototypeOf(U,Uint8Array);function q(ee){if(typeof ee!="number")throw new TypeError('"size" argument must be of type number');if(ee<0)throw new RangeError('The value "'+ee+'" is invalid for option "size"')}function Y(ee,j,J){return q(ee),ee<=0?L(ee):j!==void 0?typeof J=="string"?L(ee).fill(j,J):L(ee).fill(j):L(ee)}U.alloc=function(ee,j,J){return Y(ee,j,J)};function W(ee){return q(ee),L(ee<0?0:he(ee)|0)}U.allocUnsafe=function(ee){return W(ee)},U.allocUnsafeSlow=function(ee){return W(ee)};function X(ee,j){if((typeof j!="string"||j==="")&&(j="utf8"),!U.isEncoding(j))throw new TypeError("Unknown encoding: "+j);var J=Be(ee,j)|0,re=L(J),ne=re.write(ee,j);return ne!==J&&(re=re.slice(0,ne)),re}function te(ee){for(var j=ee.length<0?0:he(ee.length)|0,J=L(j),re=0;re<j;re+=1)J[re]=ee[re]&255;return J}function ae(ee){if(fe(ee,Uint8Array)){var j=new Uint8Array(ee);return ie(j.buffer,j.byteOffset,j.byteLength)}return te(ee)}function ie(ee,j,J){if(j<0||ee.byteLength<j)throw new RangeError('"offset" is outside of buffer bounds');if(ee.byteLength<j+(J||0))throw new RangeError('"length" is outside of buffer bounds');var re;return j===void 0&&J===void 0?re=new Uint8Array(ee):J===void 0?re=new Uint8Array(ee,j):re=new Uint8Array(ee,j,J),Object.setPrototypeOf(re,U.prototype),re}function ce(ee){if(U.isBuffer(ee)){var j=he(ee.length)|0,J=L(j);return J.length===0||ee.copy(J,0,0,j),J}if(ee.length!==void 0)return typeof ee.length!="number"||ge(ee.length)?L(0):te(ee);if(ee.type==="Buffer"&&Array.isArray(ee.data))return te(ee.data)}function he(ee){if(ee>=F)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F.toString(16)+" bytes");return ee|0}function pe(ee){return+ee!=ee&&(ee=0),U.alloc(+ee)}U.isBuffer=function(j){return j!=null&&j._isBuffer===!0&&j!==U.prototype},U.compare=function(j,J){if(fe(j,Uint8Array)&&(j=U.from(j,j.offset,j.byteLength)),fe(J,Uint8Array)&&(J=U.from(J,J.offset,J.byteLength)),!U.isBuffer(j)||!U.isBuffer(J))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(j===J)return 0;for(var re=j.length,ne=J.length,le=0,Ee=Math.min(re,ne);le<Ee;++le)if(j[le]!==J[le]){re=j[le],ne=J[le];break}return re<ne?-1:ne<re?1:0},U.isEncoding=function(j){switch(String(j).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},U.concat=function(j,J){if(!Array.isArray(j))throw new TypeError('"list" argument must be an Array of Buffers');if(j.length===0)return U.alloc(0);var re;if(J===void 0)for(J=0,re=0;re<j.length;++re)J+=j[re].length;var ne=U.allocUnsafe(J),le=0;for(re=0;re<j.length;++re){var Ee=j[re];if(fe(Ee,Uint8Array))le+Ee.length>ne.length?U.from(Ee).copy(ne,le):Uint8Array.prototype.set.call(ne,Ee,le);else if(U.isBuffer(Ee))Ee.copy(ne,le);else throw new TypeError('"list" argument must be an Array of Buffers');le+=Ee.length}return ne};function Be(ee,j){if(U.isBuffer(ee))return ee.length;if(ArrayBuffer.isView(ee)||fe(ee,ArrayBuffer))return ee.byteLength;if(typeof ee!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof ee);var J=ee.length,re=arguments.length>2&&arguments[2]===!0;if(!re&&J===0)return 0;for(var ne=!1;;)switch(j){case"ascii":case"latin1":case"binary":return J;case"utf8":case"utf-8":return Oe(ee).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return J*2;case"hex":return J>>>1;case"base64":return Ae(ee).length;default:if(ne)return re?-1:Oe(ee).length;j=(""+j).toLowerCase(),ne=!0}}U.byteLength=Be;function Ie(ee,j,J){var re=!1;if((j===void 0||j<0)&&(j=0),j>this.length||((J===void 0||J>this.length)&&(J=this.length),J<=0)||(J>>>=0,j>>>=0,J<=j))return"";for(ee||(ee="utf8");;)switch(ee){case"hex":return Re(this,j,J);case"utf8":case"utf-8":return qe(this,j,J);case"ascii":return Qe(this,j,J);case"latin1":case"binary":return xe(this,j,J);case"base64":return Le(this,j,J);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Fe(this,j,J);default:if(re)throw new TypeError("Unknown encoding: "+ee);ee=(ee+"").toLowerCase(),re=!0}}U.prototype._isBuffer=!0;function ye(ee,j,J){var re=ee[j];ee[j]=ee[J],ee[J]=re}U.prototype.swap16=function(){var j=this.length;if(j%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var J=0;J<j;J+=2)ye(this,J,J+1);return this},U.prototype.swap32=function(){var j=this.length;if(j%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var J=0;J<j;J+=4)ye(this,J,J+3),ye(this,J+1,J+2);return this},U.prototype.swap64=function(){var j=this.length;if(j%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var J=0;J<j;J+=8)ye(this,J,J+7),ye(this,J+1,J+6),ye(this,J+2,J+5),ye(this,J+3,J+4);return this},U.prototype.toString=function(){var j=this.length;return j===0?"":arguments.length===0?qe(this,0,j):Ie.apply(this,arguments)},U.prototype.toLocaleString=U.prototype.toString,U.prototype.equals=function(j){if(!U.isBuffer(j))throw new TypeError("Argument must be a Buffer");return this===j?!0:U.compare(this,j)===0},U.prototype.inspect=function(){var j="",J=Q.INSPECT_MAX_BYTES;return j=this.toString("hex",0,J).replace(/(.{2})/g,"$1 ").trim(),this.length>J&&(j+=" ... "),"<Buffer "+j+">"},D&&(U.prototype[D]=U.prototype.inspect),U.prototype.compare=function(j,J,re,ne,le){if(fe(j,Uint8Array)&&(j=U.from(j,j.offset,j.byteLength)),!U.isBuffer(j))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof j);if(J===void 0&&(J=0),re===void 0&&(re=j?j.length:0),ne===void 0&&(ne=0),le===void 0&&(le=this.length),J<0||re>j.length||ne<0||le>this.length)throw new RangeError("out of range index");if(ne>=le&&J>=re)return 0;if(ne>=le)return-1;if(J>=re)return 1;if(J>>>=0,re>>>=0,ne>>>=0,le>>>=0,this===j)return 0;for(var Ee=le-ne,ke=re-J,Me=Math.min(Ee,ke),$e=this.slice(ne,le),Ye=j.slice(J,re),Te=0;Te<Me;++Te)if($e[Te]!==Ye[Te]){Ee=$e[Te],ke=Ye[Te];break}return Ee<ke?-1:ke<Ee?1:0};function Ce(ee,j,J,re,ne){if(ee.length===0)return-1;if(typeof J=="string"?(re=J,J=0):J>2147483647?J=2147483647:J<-2147483648&&(J=-2147483648),J=+J,ge(J)&&(J=ne?0:ee.length-1),J<0&&(J=ee.length+J),J>=ee.length){if(ne)return-1;J=ee.length-1}else if(J<0)if(ne)J=0;else return-1;if(typeof j=="string"&&(j=U.from(j,re)),U.isBuffer(j))return j.length===0?-1:we(ee,j,J,re,ne);if(typeof j=="number")return j=j&255,typeof Uint8Array.prototype.indexOf=="function"?ne?Uint8Array.prototype.indexOf.call(ee,j,J):Uint8Array.prototype.lastIndexOf.call(ee,j,J):we(ee,[j],J,re,ne);throw new TypeError("val must be string, number or Buffer")}function we(ee,j,J,re,ne){var le=1,Ee=ee.length,ke=j.length;if(re!==void 0&&(re=String(re).toLowerCase(),re==="ucs2"||re==="ucs-2"||re==="utf16le"||re==="utf-16le")){if(ee.length<2||j.length<2)return-1;le=2,Ee/=2,ke/=2,J/=2}function Me(it,lt){return le===1?it[lt]:it.readUInt16BE(lt*le)}var $e;if(ne){var Ye=-1;for($e=J;$e<Ee;$e++)if(Me(ee,$e)===Me(j,Ye===-1?0:$e-Ye)){if(Ye===-1&&(Ye=$e),$e-Ye+1===ke)return Ye*le}else Ye!==-1&&($e-=$e-Ye),Ye=-1}else for(J+ke>Ee&&(J=Ee-ke),$e=J;$e>=0;$e--){for(var Te=!0,Je=0;Je<ke;Je++)if(Me(ee,$e+Je)!==Me(j,Je)){Te=!1;break}if(Te)return $e}return-1}U.prototype.includes=function(j,J,re){return this.indexOf(j,J,re)!==-1},U.prototype.indexOf=function(j,J,re){return Ce(this,j,J,re,!0)},U.prototype.lastIndexOf=function(j,J,re){return Ce(this,j,J,re,!1)};function De(ee,j,J,re){J=Number(J)||0;var ne=ee.length-J;re?(re=Number(re),re>ne&&(re=ne)):re=ne;var le=j.length;re>le/2&&(re=le/2);for(var Ee=0;Ee<re;++Ee){var ke=parseInt(j.substr(Ee*2,2),16);if(ge(ke))return Ee;ee[J+Ee]=ke}return Ee}function Se(ee,j,J,re){return ue(Oe(j,ee.length-J),ee,J,re)}function be(ee,j,J,re){return ue(Ge(j),ee,J,re)}function Ne(ee,j,J,re){return ue(Ae(j),ee,J,re)}function Pe(ee,j,J,re){return ue(se(j,ee.length-J),ee,J,re)}U.prototype.write=function(j,J,re,ne){if(J===void 0)ne="utf8",re=this.length,J=0;else if(re===void 0&&typeof J=="string")ne=J,re=this.length,J=0;else if(isFinite(J))J=J>>>0,isFinite(re)?(re=re>>>0,ne===void 0&&(ne="utf8")):(ne=re,re=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var le=this.length-J;if((re===void 0||re>le)&&(re=le),j.length>0&&(re<0||J<0)||J>this.length)throw new RangeError("Attempt to write outside buffer bounds");ne||(ne="utf8");for(var Ee=!1;;)switch(ne){case"hex":return De(this,j,J,re);case"utf8":case"utf-8":return Se(this,j,J,re);case"ascii":case"latin1":case"binary":return be(this,j,J,re);case"base64":return Ne(this,j,J,re);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pe(this,j,J,re);default:if(Ee)throw new TypeError("Unknown encoding: "+ne);ne=(""+ne).toLowerCase(),Ee=!0}},U.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Le(ee,j,J){return j===0&&J===ee.length?B.fromByteArray(ee):B.fromByteArray(ee.slice(j,J))}function qe(ee,j,J){J=Math.min(ee.length,J);for(var re=[],ne=j;ne<J;){var le=ee[ne],Ee=null,ke=le>239?4:le>223?3:le>191?2:1;if(ne+ke<=J){var Me,$e,Ye,Te;switch(ke){case 1:le<128&&(Ee=le);break;case 2:Me=ee[ne+1],(Me&192)===128&&(Te=(le&31)<<6|Me&63,Te>127&&(Ee=Te));break;case 3:Me=ee[ne+1],$e=ee[ne+2],(Me&192)===128&&($e&192)===128&&(Te=(le&15)<<12|(Me&63)<<6|$e&63,Te>2047&&(Te<55296||Te>57343)&&(Ee=Te));break;case 4:Me=ee[ne+1],$e=ee[ne+2],Ye=ee[ne+3],(Me&192)===128&&($e&192)===128&&(Ye&192)===128&&(Te=(le&15)<<18|(Me&63)<<12|($e&63)<<6|Ye&63,Te>65535&&Te<1114112&&(Ee=Te))}}Ee===null?(Ee=65533,ke=1):Ee>65535&&(Ee-=65536,re.push(Ee>>>10&1023|55296),Ee=56320|Ee&1023),re.push(Ee),ne+=ke}return ve(re)}var _e=4096;function ve(ee){var j=ee.length;if(j<=_e)return String.fromCharCode.apply(String,ee);for(var J="",re=0;re<j;)J+=String.fromCharCode.apply(String,ee.slice(re,re+=_e));return J}function Qe(ee,j,J){var re="";J=Math.min(ee.length,J);for(var ne=j;ne<J;++ne)re+=String.fromCharCode(ee[ne]&127);return re}function xe(ee,j,J){var re="";J=Math.min(ee.length,J);for(var ne=j;ne<J;++ne)re+=String.fromCharCode(ee[ne]);return re}function Re(ee,j,J){var re=ee.length;(!j||j<0)&&(j=0),(!J||J<0||J>re)&&(J=re);for(var ne="",le=j;le<J;++le)ne+=me[ee[le]];return ne}function Fe(ee,j,J){for(var re=ee.slice(j,J),ne="",le=0;le<re.length-1;le+=2)ne+=String.fromCharCode(re[le]+re[le+1]*256);return ne}U.prototype.slice=function(j,J){var re=this.length;j=~~j,J=J===void 0?re:~~J,j<0?(j+=re,j<0&&(j=0)):j>re&&(j=re),J<0?(J+=re,J<0&&(J=0)):J>re&&(J=re),J<j&&(J=j);var ne=this.subarray(j,J);return Object.setPrototypeOf(ne,U.prototype),ne};function Ue(ee,j,J){if(ee%1!==0||ee<0)throw new RangeError("offset is not uint");if(ee+j>J)throw new RangeError("Trying to access beyond buffer length")}U.prototype.readUintLE=U.prototype.readUIntLE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var ne=this[j],le=1,Ee=0;++Ee<J&&(le*=256);)ne+=this[j+Ee]*le;return ne},U.prototype.readUintBE=U.prototype.readUIntBE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var ne=this[j+--J],le=1;J>0&&(le*=256);)ne+=this[j+--J]*le;return ne},U.prototype.readUint8=U.prototype.readUInt8=function(j,J){return j=j>>>0,J||Ue(j,1,this.length),this[j]},U.prototype.readUint16LE=U.prototype.readUInt16LE=function(j,J){return j=j>>>0,J||Ue(j,2,this.length),this[j]|this[j+1]<<8},U.prototype.readUint16BE=U.prototype.readUInt16BE=function(j,J){return j=j>>>0,J||Ue(j,2,this.length),this[j]<<8|this[j+1]},U.prototype.readUint32LE=U.prototype.readUInt32LE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),(this[j]|this[j+1]<<8|this[j+2]<<16)+this[j+3]*16777216},U.prototype.readUint32BE=U.prototype.readUInt32BE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),this[j]*16777216+(this[j+1]<<16|this[j+2]<<8|this[j+3])},U.prototype.readIntLE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var ne=this[j],le=1,Ee=0;++Ee<J&&(le*=256);)ne+=this[j+Ee]*le;return le*=128,ne>=le&&(ne-=Math.pow(2,8*J)),ne},U.prototype.readIntBE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var ne=J,le=1,Ee=this[j+--ne];ne>0&&(le*=256);)Ee+=this[j+--ne]*le;return le*=128,Ee>=le&&(Ee-=Math.pow(2,8*J)),Ee},U.prototype.readInt8=function(j,J){return j=j>>>0,J||Ue(j,1,this.length),this[j]&128?(255-this[j]+1)*-1:this[j]},U.prototype.readInt16LE=function(j,J){j=j>>>0,J||Ue(j,2,this.length);var re=this[j]|this[j+1]<<8;return re&32768?re|4294901760:re},U.prototype.readInt16BE=function(j,J){j=j>>>0,J||Ue(j,2,this.length);var re=this[j+1]|this[j]<<8;return re&32768?re|4294901760:re},U.prototype.readInt32LE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),this[j]|this[j+1]<<8|this[j+2]<<16|this[j+3]<<24},U.prototype.readInt32BE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),this[j]<<24|this[j+1]<<16|this[j+2]<<8|this[j+3]},U.prototype.readFloatLE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),w.read(this,j,!0,23,4)},U.prototype.readFloatBE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),w.read(this,j,!1,23,4)},U.prototype.readDoubleLE=function(j,J){return j=j>>>0,J||Ue(j,8,this.length),w.read(this,j,!0,52,8)},U.prototype.readDoubleBE=function(j,J){return j=j>>>0,J||Ue(j,8,this.length),w.read(this,j,!1,52,8)};function He(ee,j,J,re,ne,le){if(!U.isBuffer(ee))throw new TypeError('"buffer" argument must be a Buffer instance');if(j>ne||j<le)throw new RangeError('"value" argument is out of bounds');if(J+re>ee.length)throw new RangeError("Index out of range")}U.prototype.writeUintLE=U.prototype.writeUIntLE=function(j,J,re,ne){if(j=+j,J=J>>>0,re=re>>>0,!ne){var le=Math.pow(2,8*re)-1;He(this,j,J,re,le,0)}var Ee=1,ke=0;for(this[J]=j&255;++ke<re&&(Ee*=256);)this[J+ke]=j/Ee&255;return J+re},U.prototype.writeUintBE=U.prototype.writeUIntBE=function(j,J,re,ne){if(j=+j,J=J>>>0,re=re>>>0,!ne){var le=Math.pow(2,8*re)-1;He(this,j,J,re,le,0)}var Ee=re-1,ke=1;for(this[J+Ee]=j&255;--Ee>=0&&(ke*=256);)this[J+Ee]=j/ke&255;return J+re},U.prototype.writeUint8=U.prototype.writeUInt8=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,1,255,0),this[J]=j&255,J+1},U.prototype.writeUint16LE=U.prototype.writeUInt16LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,65535,0),this[J]=j&255,this[J+1]=j>>>8,J+2},U.prototype.writeUint16BE=U.prototype.writeUInt16BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,65535,0),this[J]=j>>>8,this[J+1]=j&255,J+2},U.prototype.writeUint32LE=U.prototype.writeUInt32LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,4294967295,0),this[J+3]=j>>>24,this[J+2]=j>>>16,this[J+1]=j>>>8,this[J]=j&255,J+4},U.prototype.writeUint32BE=U.prototype.writeUInt32BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,4294967295,0),this[J]=j>>>24,this[J+1]=j>>>16,this[J+2]=j>>>8,this[J+3]=j&255,J+4},U.prototype.writeIntLE=function(j,J,re,ne){if(j=+j,J=J>>>0,!ne){var le=Math.pow(2,8*re-1);He(this,j,J,re,le-1,-le)}var Ee=0,ke=1,Me=0;for(this[J]=j&255;++Ee<re&&(ke*=256);)j<0&&Me===0&&this[J+Ee-1]!==0&&(Me=1),this[J+Ee]=(j/ke>>0)-Me&255;return J+re},U.prototype.writeIntBE=function(j,J,re,ne){if(j=+j,J=J>>>0,!ne){var le=Math.pow(2,8*re-1);He(this,j,J,re,le-1,-le)}var Ee=re-1,ke=1,Me=0;for(this[J+Ee]=j&255;--Ee>=0&&(ke*=256);)j<0&&Me===0&&this[J+Ee+1]!==0&&(Me=1),this[J+Ee]=(j/ke>>0)-Me&255;return J+re},U.prototype.writeInt8=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,1,127,-128),j<0&&(j=255+j+1),this[J]=j&255,J+1},U.prototype.writeInt16LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,32767,-32768),this[J]=j&255,this[J+1]=j>>>8,J+2},U.prototype.writeInt16BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,32767,-32768),this[J]=j>>>8,this[J+1]=j&255,J+2},U.prototype.writeInt32LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,2147483647,-2147483648),this[J]=j&255,this[J+1]=j>>>8,this[J+2]=j>>>16,this[J+3]=j>>>24,J+4},U.prototype.writeInt32BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,2147483647,-2147483648),j<0&&(j=4294967295+j+1),this[J]=j>>>24,this[J+1]=j>>>16,this[J+2]=j>>>8,this[J+3]=j&255,J+4};function et(ee,j,J,re,ne,le){if(J+re>ee.length)throw new RangeError("Index out of range");if(J<0)throw new RangeError("Index out of range")}function oe(ee,j,J,re,ne){return j=+j,J=J>>>0,ne||et(ee,j,J,4),w.write(ee,j,J,re,23,4),J+4}U.prototype.writeFloatLE=function(j,J,re){return oe(this,j,J,!0,re)},U.prototype.writeFloatBE=function(j,J,re){return oe(this,j,J,!1,re)};function Xe(ee,j,J,re,ne){return j=+j,J=J>>>0,ne||et(ee,j,J,8),w.write(ee,j,J,re,52,8),J+8}U.prototype.writeDoubleLE=function(j,J,re){return Xe(this,j,J,!0,re)},U.prototype.writeDoubleBE=function(j,J,re){return Xe(this,j,J,!1,re)},U.prototype.copy=function(j,J,re,ne){if(!U.isBuffer(j))throw new TypeError("argument should be a Buffer");if(re||(re=0),!ne&&ne!==0&&(ne=this.length),J>=j.length&&(J=j.length),J||(J=0),ne>0&&ne<re&&(ne=re),ne===re||j.length===0||this.length===0)return 0;if(J<0)throw new RangeError("targetStart out of bounds");if(re<0||re>=this.length)throw new RangeError("Index out of range");if(ne<0)throw new RangeError("sourceEnd out of bounds");ne>this.length&&(ne=this.length),j.length-J<ne-re&&(ne=j.length-J+re);var le=ne-re;return this===j&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(J,re,ne):Uint8Array.prototype.set.call(j,this.subarray(re,ne),J),le},U.prototype.fill=function(j,J,re,ne){if(typeof j=="string"){if(typeof J=="string"?(ne=J,J=0,re=this.length):typeof re=="string"&&(ne=re,re=this.length),ne!==void 0&&typeof ne!="string")throw new TypeError("encoding must be a string");if(typeof ne=="string"&&!U.isEncoding(ne))throw new TypeError("Unknown encoding: "+ne);if(j.length===1){var le=j.charCodeAt(0);(ne==="utf8"&&le<128||ne==="latin1")&&(j=le)}}else typeof j=="number"?j=j&255:typeof j=="boolean"&&(j=Number(j));if(J<0||this.length<J||this.length<re)throw new RangeError("Out of range index");if(re<=J)return this;J=J>>>0,re=re===void 0?this.length:re>>>0,j||(j=0);var Ee;if(typeof j=="number")for(Ee=J;Ee<re;++Ee)this[Ee]=j;else{var ke=U.isBuffer(j)?j:U.from(j,ne),Me=ke.length;if(Me===0)throw new TypeError('The value "'+j+'" is invalid for argument "value"');for(Ee=0;Ee<re-J;++Ee)this[Ee+J]=ke[Ee%Me]}return this};var ot=/[^+/0-9A-Za-z-_]/g;function ct(ee){if(ee=ee.split("=")[0],ee=ee.trim().replace(ot,""),ee.length<2)return"";for(;ee.length%4!==0;)ee=ee+"=";return ee}function Oe(ee,j){j=j||1/0;for(var J,re=ee.length,ne=null,le=[],Ee=0;Ee<re;++Ee){if(J=ee.charCodeAt(Ee),J>55295&&J<57344){if(!ne){if(J>56319){(j-=3)>-1&&le.push(239,191,189);continue}else if(Ee+1===re){(j-=3)>-1&&le.push(239,191,189);continue}ne=J;continue}if(J<56320){(j-=3)>-1&&le.push(239,191,189),ne=J;continue}J=(ne-55296<<10|J-56320)+65536}else ne&&(j-=3)>-1&&le.push(239,191,189);if(ne=null,J<128){if((j-=1)<0)break;le.push(J)}else if(J<2048){if((j-=2)<0)break;le.push(J>>6|192,J&63|128)}else if(J<65536){if((j-=3)<0)break;le.push(J>>12|224,J>>6&63|128,J&63|128)}else if(J<1114112){if((j-=4)<0)break;le.push(J>>18|240,J>>12&63|128,J>>6&63|128,J&63|128)}else throw new Error("Invalid code point")}return le}function Ge(ee){for(var j=[],J=0;J<ee.length;++J)j.push(ee.charCodeAt(J)&255);return j}function se(ee,j){for(var J,re,ne,le=[],Ee=0;Ee<ee.length&&!((j-=2)<0);++Ee)J=ee.charCodeAt(Ee),re=J>>8,ne=J%256,le.push(ne),le.push(re);return le}function Ae(ee){return B.toByteArray(ct(ee))}function ue(ee,j,J,re){for(var ne=0;ne<re&&!(ne+J>=j.length||ne>=ee.length);++ne)j[ne+J]=ee[ne];return ne}function fe(ee,j){return ee instanceof j||ee!=null&&ee.constructor!=null&&ee.constructor.name!=null&&ee.constructor.name===j.name}function ge(ee){return ee!==ee}var me=function(){for(var ee="0123456789abcdef",j=new Array(256),J=0;J<16;++J)for(var re=J*16,ne=0;ne<16;++ne)j[re+ne]=ee[J]+ee[ne];return j}()})(buffer);var ReplicaRejectCode;(function(Q){Q[Q.SysFatal=1]="SysFatal",Q[Q.SysTransient=2]="SysTransient",Q[Q.DestinationInvalid=3]="DestinationInvalid",Q[Q.CanisterReject=4]="CanisterReject",Q[Q.CanisterError=5]="CanisterError"})(ReplicaRejectCode||(ReplicaRejectCode={}));const alphabet="abcdefghijklmnopqrstuvwxyz234567",lookupTable=Object.create(null);for(let Q=0;Q<alphabet.length;Q++)lookupTable[alphabet[Q]]=Q;lookupTable[0]=lookupTable.o;lookupTable[1]=lookupTable.i;var sha256={exports:{}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root={}:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer!="undefined",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(Q){return Object.prototype.toString.call(Q)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(Q){return typeof Q=="object"&&Q.buffer&&Q.buffer.constructor===ArrayBuffer});var createOutputMethod=function(Q,B){return function(w){return new Sha256(B,!0).update(w)[Q]()}},createMethod=function(Q){var B=createOutputMethod("hex",Q);NODE_JS&&(B=nodeWrap(B,Q)),B.create=function(){return new Sha256(Q)},B.update=function(F){return B.create().update(F)};for(var w=0;w<OUTPUT_TYPES.length;++w){var D=OUTPUT_TYPES[w];B[D]=createOutputMethod(D,Q)}return B},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(Q){if(typeof Q=="string")return crypto.createHash(algorithm).update(Q,"utf8").digest("hex");if(Q==null)throw new Error(ERROR);return Q.constructor===ArrayBuffer&&(Q=new Uint8Array(Q)),Array.isArray(Q)||ArrayBuffer.isView(Q)||Q.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(Q)).digest("hex"):method(Q)};return nodeMethod},createHmacOutputMethod=function(Q,B){return function(w,D){return new HmacSha256(w,B,!0).update(D)[Q]()}},createHmacMethod=function(Q){var B=createHmacOutputMethod("hex",Q);B.create=function(F){return new HmacSha256(F,Q)},B.update=function(F,O){return B.create(F).update(O)};for(var w=0;w<OUTPUT_TYPES.length;++w){var D=OUTPUT_TYPES[w];B[D]=createHmacOutputMethod(D,Q)}return B};function Sha256(Q,B){B?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],Q?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=Q}Sha256.prototype.update=function(Q){if(!this.finalized){var B,w=typeof Q;if(w!=="string"){if(w==="object"){if(Q===null)throw new Error(ERROR);if(ARRAY_BUFFER&&Q.constructor===ArrayBuffer)Q=new Uint8Array(Q);else if(!Array.isArray(Q)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(Q)))throw new Error(ERROR)}else throw new Error(ERROR);B=!0}for(var D,F=0,O,L=Q.length,U=this.blocks;F<L;){if(this.hashed&&(this.hashed=!1,U[0]=this.block,U[16]=U[1]=U[2]=U[3]=U[4]=U[5]=U[6]=U[7]=U[8]=U[9]=U[10]=U[11]=U[12]=U[13]=U[14]=U[15]=0),B)for(O=this.start;F<L&&O<64;++F)U[O>>2]|=Q[F]<<SHIFT[O++&3];else for(O=this.start;F<L&&O<64;++F)D=Q.charCodeAt(F),D<128?U[O>>2]|=D<<SHIFT[O++&3]:D<2048?(U[O>>2]|=(192|D>>6)<<SHIFT[O++&3],U[O>>2]|=(128|D&63)<<SHIFT[O++&3]):D<55296||D>=57344?(U[O>>2]|=(224|D>>12)<<SHIFT[O++&3],U[O>>2]|=(128|D>>6&63)<<SHIFT[O++&3],U[O>>2]|=(128|D&63)<<SHIFT[O++&3]):(D=65536+((D&1023)<<10|Q.charCodeAt(++F)&1023),U[O>>2]|=(240|D>>18)<<SHIFT[O++&3],U[O>>2]|=(128|D>>12&63)<<SHIFT[O++&3],U[O>>2]|=(128|D>>6&63)<<SHIFT[O++&3],U[O>>2]|=(128|D&63)<<SHIFT[O++&3]);this.lastByteIndex=O,this.bytes+=O-this.start,O>=64?(this.block=U[16],this.start=O-64,this.hash(),this.hashed=!0):this.start=O}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var Q=this.blocks,B=this.lastByteIndex;Q[16]=this.block,Q[B>>2]|=EXTRA[B&3],this.block=Q[16],B>=56&&(this.hashed||this.hash(),Q[0]=this.block,Q[16]=Q[1]=Q[2]=Q[3]=Q[4]=Q[5]=Q[6]=Q[7]=Q[8]=Q[9]=Q[10]=Q[11]=Q[12]=Q[13]=Q[14]=Q[15]=0),Q[14]=this.hBytes<<3|this.bytes>>>29,Q[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var Q=this.h0,B=this.h1,w=this.h2,D=this.h3,F=this.h4,O=this.h5,L=this.h6,U=this.h7,G=this.blocks,q,Y,W,X,te,ae,ie,ce,he,pe,Be;for(q=16;q<64;++q)te=G[q-15],Y=(te>>>7|te<<25)^(te>>>18|te<<14)^te>>>3,te=G[q-2],W=(te>>>17|te<<15)^(te>>>19|te<<13)^te>>>10,G[q]=G[q-16]+Y+G[q-7]+W<<0;for(Be=B&w,q=0;q<64;q+=4)this.first?(this.is224?(ce=300032,te=G[0]-1413257819,U=te-150054599<<0,D=te+24177077<<0):(ce=704751109,te=G[0]-210244248,U=te-1521486534<<0,D=te+143694565<<0),this.first=!1):(Y=(Q>>>2|Q<<30)^(Q>>>13|Q<<19)^(Q>>>22|Q<<10),W=(F>>>6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7),ce=Q&B,X=ce^Q&w^Be,ie=F&O^~F&L,te=U+W+ie+K[q]+G[q],ae=Y+X,U=D+te<<0,D=te+ae<<0),Y=(D>>>2|D<<30)^(D>>>13|D<<19)^(D>>>22|D<<10),W=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),he=D&Q,X=he^D&B^ce,ie=U&F^~U&O,te=L+W+ie+K[q+1]+G[q+1],ae=Y+X,L=w+te<<0,w=te+ae<<0,Y=(w>>>2|w<<30)^(w>>>13|w<<19)^(w>>>22|w<<10),W=(L>>>6|L<<26)^(L>>>11|L<<21)^(L>>>25|L<<7),pe=w&D,X=pe^w&Q^he,ie=L&U^~L&F,te=O+W+ie+K[q+2]+G[q+2],ae=Y+X,O=B+te<<0,B=te+ae<<0,Y=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),W=(O>>>6|O<<26)^(O>>>11|O<<21)^(O>>>25|O<<7),Be=B&w,X=Be^B&D^pe,ie=O&L^~O&U,te=F+W+ie+K[q+3]+G[q+3],ae=Y+X,F=Q+te<<0,Q=te+ae<<0;this.h0=this.h0+Q<<0,this.h1=this.h1+B<<0,this.h2=this.h2+w<<0,this.h3=this.h3+D<<0,this.h4=this.h4+F<<0,this.h5=this.h5+O<<0,this.h6=this.h6+L<<0,this.h7=this.h7+U<<0},Sha256.prototype.hex=function(){this.finalize();var Q=this.h0,B=this.h1,w=this.h2,D=this.h3,F=this.h4,O=this.h5,L=this.h6,U=this.h7,G=HEX_CHARS[Q>>28&15]+HEX_CHARS[Q>>24&15]+HEX_CHARS[Q>>20&15]+HEX_CHARS[Q>>16&15]+HEX_CHARS[Q>>12&15]+HEX_CHARS[Q>>8&15]+HEX_CHARS[Q>>4&15]+HEX_CHARS[Q&15]+HEX_CHARS[B>>28&15]+HEX_CHARS[B>>24&15]+HEX_CHARS[B>>20&15]+HEX_CHARS[B>>16&15]+HEX_CHARS[B>>12&15]+HEX_CHARS[B>>8&15]+HEX_CHARS[B>>4&15]+HEX_CHARS[B&15]+HEX_CHARS[w>>28&15]+HEX_CHARS[w>>24&15]+HEX_CHARS[w>>20&15]+HEX_CHARS[w>>16&15]+HEX_CHARS[w>>12&15]+HEX_CHARS[w>>8&15]+HEX_CHARS[w>>4&15]+HEX_CHARS[w&15]+HEX_CHARS[D>>28&15]+HEX_CHARS[D>>24&15]+HEX_CHARS[D>>20&15]+HEX_CHARS[D>>16&15]+HEX_CHARS[D>>12&15]+HEX_CHARS[D>>8&15]+HEX_CHARS[D>>4&15]+HEX_CHARS[D&15]+HEX_CHARS[F>>28&15]+HEX_CHARS[F>>24&15]+HEX_CHARS[F>>20&15]+HEX_CHARS[F>>16&15]+HEX_CHARS[F>>12&15]+HEX_CHARS[F>>8&15]+HEX_CHARS[F>>4&15]+HEX_CHARS[F&15]+HEX_CHARS[O>>28&15]+HEX_CHARS[O>>24&15]+HEX_CHARS[O>>20&15]+HEX_CHARS[O>>16&15]+HEX_CHARS[O>>12&15]+HEX_CHARS[O>>8&15]+HEX_CHARS[O>>4&15]+HEX_CHARS[O&15]+HEX_CHARS[L>>28&15]+HEX_CHARS[L>>24&15]+HEX_CHARS[L>>20&15]+HEX_CHARS[L>>16&15]+HEX_CHARS[L>>12&15]+HEX_CHARS[L>>8&15]+HEX_CHARS[L>>4&15]+HEX_CHARS[L&15];return this.is224||(G+=HEX_CHARS[U>>28&15]+HEX_CHARS[U>>24&15]+HEX_CHARS[U>>20&15]+HEX_CHARS[U>>16&15]+HEX_CHARS[U>>12&15]+HEX_CHARS[U>>8&15]+HEX_CHARS[U>>4&15]+HEX_CHARS[U&15]),G},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var Q=this.h0,B=this.h1,w=this.h2,D=this.h3,F=this.h4,O=this.h5,L=this.h6,U=this.h7,G=[Q>>24&255,Q>>16&255,Q>>8&255,Q&255,B>>24&255,B>>16&255,B>>8&255,B&255,w>>24&255,w>>16&255,w>>8&255,w&255,D>>24&255,D>>16&255,D>>8&255,D&255,F>>24&255,F>>16&255,F>>8&255,F&255,O>>24&255,O>>16&255,O>>8&255,O&255,L>>24&255,L>>16&255,L>>8&255,L&255];return this.is224||G.push(U>>24&255,U>>16&255,U>>8&255,U&255),G},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var Q=new ArrayBuffer(this.is224?28:32),B=new DataView(Q);return B.setUint32(0,this.h0),B.setUint32(4,this.h1),B.setUint32(8,this.h2),B.setUint32(12,this.h3),B.setUint32(16,this.h4),B.setUint32(20,this.h5),B.setUint32(24,this.h6),this.is224||B.setUint32(28,this.h7),Q};function HmacSha256(Q,B,w){var D,F=typeof Q;if(F==="string"){var O=[],L=Q.length,U=0,G;for(D=0;D<L;++D)G=Q.charCodeAt(D),G<128?O[U++]=G:G<2048?(O[U++]=192|G>>6,O[U++]=128|G&63):G<55296||G>=57344?(O[U++]=224|G>>12,O[U++]=128|G>>6&63,O[U++]=128|G&63):(G=65536+((G&1023)<<10|Q.charCodeAt(++D)&1023),O[U++]=240|G>>18,O[U++]=128|G>>12&63,O[U++]=128|G>>6&63,O[U++]=128|G&63);Q=O}else if(F==="object"){if(Q===null)throw new Error(ERROR);if(ARRAY_BUFFER&&Q.constructor===ArrayBuffer)Q=new Uint8Array(Q);else if(!Array.isArray(Q)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(Q)))throw new Error(ERROR)}else throw new Error(ERROR);Q.length>64&&(Q=new Sha256(B,!0).update(Q).array());var q=[],Y=[];for(D=0;D<64;++D){var W=Q[D]||0;q[D]=92^W,Y[D]=54^W}Sha256.call(this,B,w),this.update(Y),this.oKeyPad=q,this.inner=!0,this.sharedMemory=w}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var Q=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(Q),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256);class PipeArrayBuffer{constructor(B,w=(B==null?void 0:B.byteLength)||0){this._buffer=B||new ArrayBuffer(0),this._view=new Uint8Array(this._buffer,0,w)}get buffer(){return this._view.slice()}get byteLength(){return this._view.byteLength}read(B){const w=this._view.subarray(0,B);return this._view=this._view.subarray(B),w.slice().buffer}readUint8(){const B=this._view[0];return this._view=this._view.subarray(1),B}write(B){const w=new Uint8Array(B),D=this._view.byteLength;this._view.byteOffset+this._view.byteLength+w.byteLength>=this._buffer.byteLength?this.alloc(w.byteLength):this._view=new Uint8Array(this._buffer,this._view.byteOffset,this._view.byteLength+w.byteLength),this._view.set(w,D)}get end(){return this._view.byteLength===0}alloc(B){const w=new ArrayBuffer((this._buffer.byteLength+B)*1.2|0),D=new Uint8Array(w,0,this._view.byteLength+B);D.set(this._view),this._buffer=w,this._view=D}}function eob(){throw new Error("unexpected end of buffer")}function safeRead(Q,B){return Q.byteLength<B&&eob(),Q.read(B)}function safeReadUint8(Q){const B=Q.readUint8();return B===void 0&&eob(),B}function slebEncode(Q){typeof Q=="number"&&(Q=BigInt(Q));const B=Q<BigInt(0);B&&(Q=-Q-BigInt(1));const w=(Q===BigInt(0)?0:Math.ceil(Math.log2(Number(Q))))+1,D=new PipeArrayBuffer(new ArrayBuffer(w),0);for(;;){const O=F(Q);if(Q/=BigInt(128),B&&Q===BigInt(0)&&(O&64)!==0||!B&&Q===BigInt(0)&&(O&64)===0){D.write(new Uint8Array([O]));break}else D.write(new Uint8Array([O|128]))}function F(O){const L=O%BigInt(128);return Number(B?BigInt(128)-L-BigInt(1):L)}return D.buffer}function writeUIntLE(Q,B){if(BigInt(Q)<BigInt(0))throw new Error("Cannot write negative values.");return writeIntLE(Q,B)}function writeIntLE(Q,B){Q=BigInt(Q);const w=new PipeArrayBuffer(new ArrayBuffer(Math.min(1,B)),0);let D=0,F=BigInt(256),O=BigInt(0),L=Number(Q%F);for(w.write(new Uint8Array([L]));++D<B;)Q<0&&O===BigInt(0)&&L!==0&&(O=BigInt(1)),L=Number((Q/F-O)%BigInt(256)),w.write(new Uint8Array([L])),F*=BigInt(256);return w.buffer}function readUIntLE(Q,B){let w=BigInt(safeReadUint8(Q)),D=BigInt(1),F=0;for(;++F<B;){D*=BigInt(256);const O=BigInt(safeReadUint8(Q));w=w+D*O}return w}function readIntLE(Q,B){let w=readUIntLE(Q,B);const D=BigInt(2)**(BigInt(8)*BigInt(B-1)+BigInt(7));return w>=D&&(w-=D*BigInt(2)),w}function iexp2(Q){const B=BigInt(Q);if(Q<0)throw new RangeError("Input must be non-negative");return BigInt(1)<<B}const toReadableString_max=400;class Type{display(){return this.name}valueToString(B){return toReadableString(B)}buildTypeTable(B){B.has(this)||this._buildTypeTableImpl(B)}}class PrimitiveType extends Type{checkType(B){if(this.name!==B.name)throw new Error(`type mismatch: type on the wire ${B.name}, expect type ${this.name}`);return B}_buildTypeTableImpl(B){}}class ConstructType extends Type{checkType(B){if(B instanceof RecClass){const w=B.getType();if(typeof w=="undefined")throw new Error("type mismatch with uninitialized type");return w}throw new Error(`type mismatch: type on the wire ${B.name}, expect type ${this.name}`)}encodeType(B){return B.indexOf(this.name)}}class FloatClass extends PrimitiveType{constructor(B){if(super(),this._bits=B,B!==32&&B!==64)throw new Error("not a valid float type")}accept(B,w){return B.visitFloat(this,w)}covariant(B){if(typeof B=="number"||B instanceof Number)return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){const w=new ArrayBuffer(this._bits/8),D=new DataView(w);return this._bits===32?D.setFloat32(0,B,!0):D.setFloat64(0,B,!0),w}encodeType(){const B=this._bits===32?-13:-14;return slebEncode(B)}decodeValue(B,w){this.checkType(w);const D=safeRead(B,this._bits/8),F=new DataView(D);return this._bits===32?F.getFloat32(0,!0):F.getFloat64(0,!0)}get name(){return"float"+this._bits}valueToString(B){return B.toString()}}class FixedIntClass extends PrimitiveType{constructor(B){super(),this._bits=B}accept(B,w){return B.visitFixedInt(this,w)}covariant(B){const w=iexp2(this._bits-1)*BigInt(-1),D=iexp2(this._bits-1)-BigInt(1);let F=!1;if(typeof B=="bigint")F=B>=w&&B<=D;else if(Number.isInteger(B)){const O=BigInt(B);F=O>=w&&O<=D}else F=!1;if(F)return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){return writeIntLE(B,this._bits/8)}encodeType(){const B=Math.log2(this._bits)-3;return slebEncode(-9-B)}decodeValue(B,w){this.checkType(w);const D=readIntLE(B,this._bits/8);return this._bits<=32?Number(D):D}get name(){return`int${this._bits}`}valueToString(B){return B.toString()}}class FixedNatClass extends PrimitiveType{constructor(B){super(),this._bits=B}accept(B,w){return B.visitFixedNat(this,w)}covariant(B){const w=iexp2(this._bits);let D=!1;if(typeof B=="bigint"&&B>=BigInt(0)?D=B<w:Number.isInteger(B)&&B>=0?D=BigInt(B)<w:D=!1,D)return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){return writeUIntLE(B,this._bits/8)}encodeType(){const B=Math.log2(this._bits)-3;return slebEncode(-5-B)}decodeValue(B,w){this.checkType(w);const D=readUIntLE(B,this._bits/8);return this._bits<=32?Number(D):D}get name(){return`nat${this._bits}`}valueToString(B){return B.toString()}}class RecClass extends ConstructType{constructor(){super(...arguments),this._id=RecClass._counter++,this._type=void 0}accept(B,w){if(!this._type)throw Error("Recursive type uninitialized.");return B.visitRec(this,this._type,w)}fill(B){this._type=B}getType(){return this._type}covariant(B){if(this._type&&this._type.covariant(B))return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.encodeValue(B)}_buildTypeTableImpl(B){if(!this._type)throw Error("Recursive type uninitialized.");B.add(this,new Uint8Array([])),this._type.buildTypeTable(B),B.merge(this,this._type.name)}decodeValue(B,w){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.decodeValue(B,w)}get name(){return`rec_${this._id}`}display(){if(!this._type)throw Error("Recursive type uninitialized.");return`\u03BC${this.name}.${this._type.name}`}valueToString(B){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.valueToString(B)}}RecClass._counter=0;function toReadableString(Q){const B=JSON.stringify(Q,(w,D)=>typeof D=="bigint"?`BigInt(${D})`:D);return B&&B.length>toReadableString_max?B.substring(0,toReadableString_max-3)+"...":B}new FloatClass(32);new FloatClass(64);new FixedIntClass(8);new FixedIntClass(16);new FixedIntClass(32);new FixedIntClass(64);new FixedNatClass(8);new FixedNatClass(16);new FixedNatClass(32);new FixedNatClass(64);var src$1={},bignumber={exports:{}};(function(Q){(function(B){var w,D=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,F=Math.ceil,O=Math.floor,L="[BigNumber Error] ",U=L+"Number primitive has more than 15 significant digits: ",G=1e14,q=14,Y=9007199254740991,W=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],X=1e7,te=1e9;function ae(Ce){var we,De,Se,be=oe.prototype={constructor:oe,toString:null,valueOf:null},Ne=new oe(1),Pe=20,Le=4,qe=-7,_e=21,ve=-1e7,Qe=1e7,xe=!1,Re=1,Fe=0,Ue={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},He="0123456789abcdefghijklmnopqrstuvwxyz",et=!0;function oe(se,Ae){var ue,fe,ge,me,ee,j,J,re,ne=this;if(!(ne instanceof oe))return new oe(se,Ae);if(Ae==null){if(se&&se._isBigNumber===!0){ne.s=se.s,!se.c||se.e>Qe?ne.c=ne.e=null:se.e<ve?ne.c=[ne.e=0]:(ne.e=se.e,ne.c=se.c.slice());return}if((j=typeof se=="number")&&se*0==0){if(ne.s=1/se<0?(se=-se,-1):1,se===~~se){for(me=0,ee=se;ee>=10;ee/=10,me++);me>Qe?ne.c=ne.e=null:(ne.e=me,ne.c=[se]);return}re=String(se)}else{if(!D.test(re=String(se)))return Se(ne,re,j);ne.s=re.charCodeAt(0)==45?(re=re.slice(1),-1):1}(me=re.indexOf("."))>-1&&(re=re.replace(".","")),(ee=re.search(/e/i))>0?(me<0&&(me=ee),me+=+re.slice(ee+1),re=re.substring(0,ee)):me<0&&(me=re.length)}else{if(pe(Ae,2,He.length,"Base"),Ae==10&&et)return ne=new oe(se),Oe(ne,Pe+ne.e+1,Le);if(re=String(se),j=typeof se=="number"){if(se*0!=0)return Se(ne,re,j,Ae);if(ne.s=1/se<0?(re=re.slice(1),-1):1,oe.DEBUG&&re.replace(/^0\.0*|\./,"").length>15)throw Error(U+se)}else ne.s=re.charCodeAt(0)===45?(re=re.slice(1),-1):1;for(ue=He.slice(0,Ae),me=ee=0,J=re.length;ee<J;ee++)if(ue.indexOf(fe=re.charAt(ee))<0){if(fe=="."){if(ee>me){me=J;continue}}else if(!ge&&(re==re.toUpperCase()&&(re=re.toLowerCase())||re==re.toLowerCase()&&(re=re.toUpperCase()))){ge=!0,ee=-1,me=0;continue}return Se(ne,String(se),j,Ae)}j=!1,re=De(re,Ae,10,ne.s),(me=re.indexOf("."))>-1?re=re.replace(".",""):me=re.length}for(ee=0;re.charCodeAt(ee)===48;ee++);for(J=re.length;re.charCodeAt(--J)===48;);if(re=re.slice(ee,++J)){if(J-=ee,j&&oe.DEBUG&&J>15&&(se>Y||se!==O(se)))throw Error(U+ne.s*se);if((me=me-ee-1)>Qe)ne.c=ne.e=null;else if(me<ve)ne.c=[ne.e=0];else{if(ne.e=me,ne.c=[],ee=(me+1)%q,me<0&&(ee+=q),ee<J){for(ee&&ne.c.push(+re.slice(0,ee)),J-=q;ee<J;)ne.c.push(+re.slice(ee,ee+=q));ee=q-(re=re.slice(ee)).length}else ee-=J;for(;ee--;re+="0");ne.c.push(+re)}}else ne.c=[ne.e=0]}oe.clone=ae,oe.ROUND_UP=0,oe.ROUND_DOWN=1,oe.ROUND_CEIL=2,oe.ROUND_FLOOR=3,oe.ROUND_HALF_UP=4,oe.ROUND_HALF_DOWN=5,oe.ROUND_HALF_EVEN=6,oe.ROUND_HALF_CEIL=7,oe.ROUND_HALF_FLOOR=8,oe.EUCLID=9,oe.config=oe.set=function(se){var Ae,ue;if(se!=null)if(typeof se=="object"){if(se.hasOwnProperty(Ae="DECIMAL_PLACES")&&(ue=se[Ae],pe(ue,0,te,Ae),Pe=ue),se.hasOwnProperty(Ae="ROUNDING_MODE")&&(ue=se[Ae],pe(ue,0,8,Ae),Le=ue),se.hasOwnProperty(Ae="EXPONENTIAL_AT")&&(ue=se[Ae],ue&&ue.pop?(pe(ue[0],-te,0,Ae),pe(ue[1],0,te,Ae),qe=ue[0],_e=ue[1]):(pe(ue,-te,te,Ae),qe=-(_e=ue<0?-ue:ue))),se.hasOwnProperty(Ae="RANGE"))if(ue=se[Ae],ue&&ue.pop)pe(ue[0],-te,-1,Ae),pe(ue[1],1,te,Ae),ve=ue[0],Qe=ue[1];else if(pe(ue,-te,te,Ae),ue)ve=-(Qe=ue<0?-ue:ue);else throw Error(L+Ae+" cannot be zero: "+ue);if(se.hasOwnProperty(Ae="CRYPTO"))if(ue=se[Ae],ue===!!ue)if(ue)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))xe=ue;else throw xe=!ue,Error(L+"crypto unavailable");else xe=ue;else throw Error(L+Ae+" not true or false: "+ue);if(se.hasOwnProperty(Ae="MODULO_MODE")&&(ue=se[Ae],pe(ue,0,9,Ae),Re=ue),se.hasOwnProperty(Ae="POW_PRECISION")&&(ue=se[Ae],pe(ue,0,te,Ae),Fe=ue),se.hasOwnProperty(Ae="FORMAT"))if(ue=se[Ae],typeof ue=="object")Ue=ue;else throw Error(L+Ae+" not an object: "+ue);if(se.hasOwnProperty(Ae="ALPHABET"))if(ue=se[Ae],typeof ue=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(ue))et=ue.slice(0,10)=="0123456789",He=ue;else throw Error(L+Ae+" invalid: "+ue)}else throw Error(L+"Object expected: "+se);return{DECIMAL_PLACES:Pe,ROUNDING_MODE:Le,EXPONENTIAL_AT:[qe,_e],RANGE:[ve,Qe],CRYPTO:xe,MODULO_MODE:Re,POW_PRECISION:Fe,FORMAT:Ue,ALPHABET:He}},oe.isBigNumber=function(se){if(!se||se._isBigNumber!==!0)return!1;if(!oe.DEBUG)return!0;var Ae,ue,fe=se.c,ge=se.e,me=se.s;e:if({}.toString.call(fe)=="[object Array]"){if((me===1||me===-1)&&ge>=-te&&ge<=te&&ge===O(ge)){if(fe[0]===0){if(ge===0&&fe.length===1)return!0;break e}if(Ae=(ge+1)%q,Ae<1&&(Ae+=q),String(fe[0]).length==Ae){for(Ae=0;Ae<fe.length;Ae++)if(ue=fe[Ae],ue<0||ue>=G||ue!==O(ue))break e;if(ue!==0)return!0}}}else if(fe===null&&ge===null&&(me===null||me===1||me===-1))return!0;throw Error(L+"Invalid BigNumber: "+se)},oe.maximum=oe.max=function(){return ot(arguments,be.lt)},oe.minimum=oe.min=function(){return ot(arguments,be.gt)},oe.random=function(){var se=9007199254740992,Ae=Math.random()*se&2097151?function(){return O(Math.random()*se)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(ue){var fe,ge,me,ee,j,J=0,re=[],ne=new oe(Ne);if(ue==null?ue=Pe:pe(ue,0,te),ee=F(ue/q),xe)if(crypto.getRandomValues){for(fe=crypto.getRandomValues(new Uint32Array(ee*=2));J<ee;)j=fe[J]*131072+(fe[J+1]>>>11),j>=9e15?(ge=crypto.getRandomValues(new Uint32Array(2)),fe[J]=ge[0],fe[J+1]=ge[1]):(re.push(j%1e14),J+=2);J=ee/2}else if(crypto.randomBytes){for(fe=crypto.randomBytes(ee*=7);J<ee;)j=(fe[J]&31)*281474976710656+fe[J+1]*1099511627776+fe[J+2]*4294967296+fe[J+3]*16777216+(fe[J+4]<<16)+(fe[J+5]<<8)+fe[J+6],j>=9e15?crypto.randomBytes(7).copy(fe,J):(re.push(j%1e14),J+=7);J=ee/7}else throw xe=!1,Error(L+"crypto unavailable");if(!xe)for(;J<ee;)j=Ae(),j<9e15&&(re[J++]=j%1e14);for(ee=re[--J],ue%=q,ee&&ue&&(j=W[q-ue],re[J]=O(ee/j)*j);re[J]===0;re.pop(),J--);if(J<0)re=[me=0];else{for(me=-1;re[0]===0;re.splice(0,1),me-=q);for(J=1,j=re[0];j>=10;j/=10,J++);J<q&&(me-=q-J)}return ne.e=me,ne.c=re,ne}}(),oe.sum=function(){for(var se=1,Ae=arguments,ue=new oe(Ae[0]);se<Ae.length;)ue=ue.plus(Ae[se++]);return ue},De=function(){var se="0123456789";function Ae(ue,fe,ge,me){for(var ee,j=[0],J,re=0,ne=ue.length;re<ne;){for(J=j.length;J--;j[J]*=fe);for(j[0]+=me.indexOf(ue.charAt(re++)),ee=0;ee<j.length;ee++)j[ee]>ge-1&&(j[ee+1]==null&&(j[ee+1]=0),j[ee+1]+=j[ee]/ge|0,j[ee]%=ge)}return j.reverse()}return function(ue,fe,ge,me,ee){var j,J,re,ne,le,Ee,ke,Me,$e=ue.indexOf("."),Ye=Pe,Te=Le;for($e>=0&&(ne=Fe,Fe=0,ue=ue.replace(".",""),Me=new oe(fe),Ee=Me.pow(ue.length-$e),Fe=ne,Me.c=Ae(ye(ce(Ee.c),Ee.e,"0"),10,ge,se),Me.e=Me.c.length),ke=Ae(ue,fe,ge,ee?(j=He,se):(j=se,He)),re=ne=ke.length;ke[--ne]==0;ke.pop());if(!ke[0])return j.charAt(0);if($e<0?--re:(Ee.c=ke,Ee.e=re,Ee.s=me,Ee=we(Ee,Me,Ye,Te,ge),ke=Ee.c,le=Ee.r,re=Ee.e),J=re+Ye+1,$e=ke[J],ne=ge/2,le=le||J<0||ke[J+1]!=null,le=Te<4?($e!=null||le)&&(Te==0||Te==(Ee.s<0?3:2)):$e>ne||$e==ne&&(Te==4||le||Te==6&&ke[J-1]&1||Te==(Ee.s<0?8:7)),J<1||!ke[0])ue=le?ye(j.charAt(1),-Ye,j.charAt(0)):j.charAt(0);else{if(ke.length=J,le)for(--ge;++ke[--J]>ge;)ke[J]=0,J||(++re,ke=[1].concat(ke));for(ne=ke.length;!ke[--ne];);for($e=0,ue="";$e<=ne;ue+=j.charAt(ke[$e++]));ue=ye(ue,re,j.charAt(0))}return ue}}(),we=function(){function se(fe,ge,me){var ee,j,J,re,ne=0,le=fe.length,Ee=ge%X,ke=ge/X|0;for(fe=fe.slice();le--;)J=fe[le]%X,re=fe[le]/X|0,ee=ke*J+re*Ee,j=Ee*J+ee%X*X+ne,ne=(j/me|0)+(ee/X|0)+ke*re,fe[le]=j%me;return ne&&(fe=[ne].concat(fe)),fe}function Ae(fe,ge,me,ee){var j,J;if(me!=ee)J=me>ee?1:-1;else for(j=J=0;j<me;j++)if(fe[j]!=ge[j]){J=fe[j]>ge[j]?1:-1;break}return J}function ue(fe,ge,me,ee){for(var j=0;me--;)fe[me]-=j,j=fe[me]<ge[me]?1:0,fe[me]=j*ee+fe[me]-ge[me];for(;!fe[0]&&fe.length>1;fe.splice(0,1));}return function(fe,ge,me,ee,j){var J,re,ne,le,Ee,ke,Me,$e,Ye,Te,Je,it,lt,gt,ht,ze,ut,At=fe.s==ge.s?1:-1,at=fe.c,tt=ge.c;if(!at||!at[0]||!tt||!tt[0])return new oe(!fe.s||!ge.s||(at?tt&&at[0]==tt[0]:!tt)?NaN:at&&at[0]==0||!tt?At*0:At/0);for($e=new oe(At),Ye=$e.c=[],re=fe.e-ge.e,At=me+re+1,j||(j=G,re=ie(fe.e/q)-ie(ge.e/q),At=At/q|0),ne=0;tt[ne]==(at[ne]||0);ne++);if(tt[ne]>(at[ne]||0)&&re--,At<0)Ye.push(1),le=!0;else{for(gt=at.length,ze=tt.length,ne=0,At+=2,Ee=O(j/(tt[0]+1)),Ee>1&&(tt=se(tt,Ee,j),at=se(at,Ee,j),ze=tt.length,gt=at.length),lt=ze,Te=at.slice(0,ze),Je=Te.length;Je<ze;Te[Je++]=0);ut=tt.slice(),ut=[0].concat(ut),ht=tt[0],tt[1]>=j/2&&ht++;do{if(Ee=0,J=Ae(tt,Te,ze,Je),J<0){if(it=Te[0],ze!=Je&&(it=it*j+(Te[1]||0)),Ee=O(it/ht),Ee>1)for(Ee>=j&&(Ee=j-1),ke=se(tt,Ee,j),Me=ke.length,Je=Te.length;Ae(ke,Te,Me,Je)==1;)Ee--,ue(ke,ze<Me?ut:tt,Me,j),Me=ke.length,J=1;else Ee==0&&(J=Ee=1),ke=tt.slice(),Me=ke.length;if(Me<Je&&(ke=[0].concat(ke)),ue(Te,ke,Je,j),Je=Te.length,J==-1)for(;Ae(tt,Te,ze,Je)<1;)Ee++,ue(Te,ze<Je?ut:tt,Je,j),Je=Te.length}else J===0&&(Ee++,Te=[0]);Ye[ne++]=Ee,Te[0]?Te[Je++]=at[lt]||0:(Te=[at[lt]],Je=1)}while((lt++<gt||Te[0]!=null)&&At--);le=Te[0]!=null,Ye[0]||Ye.splice(0,1)}if(j==G){for(ne=1,At=Ye[0];At>=10;At/=10,ne++);Oe($e,me+($e.e=ne+re*q-1)+1,ee,le)}else $e.e=re,$e.r=+le;return $e}}();function Xe(se,Ae,ue,fe){var ge,me,ee,j,J;if(ue==null?ue=Le:pe(ue,0,8),!se.c)return se.toString();if(ge=se.c[0],ee=se.e,Ae==null)J=ce(se.c),J=fe==1||fe==2&&(ee<=qe||ee>=_e)?Ie(J,ee):ye(J,ee,"0");else if(se=Oe(new oe(se),Ae,ue),me=se.e,J=ce(se.c),j=J.length,fe==1||fe==2&&(Ae<=me||me<=qe)){for(;j<Ae;J+="0",j++);J=Ie(J,me)}else if(Ae-=ee,J=ye(J,me,"0"),me+1>j){if(--Ae>0)for(J+=".";Ae--;J+="0");}else if(Ae+=me-j,Ae>0)for(me+1==j&&(J+=".");Ae--;J+="0");return se.s<0&&ge?"-"+J:J}function ot(se,Ae){for(var ue,fe=1,ge=new oe(se[0]);fe<se.length;fe++)if(ue=new oe(se[fe]),ue.s)Ae.call(ge,ue)&&(ge=ue);else{ge=ue;break}return ge}function ct(se,Ae,ue){for(var fe=1,ge=Ae.length;!Ae[--ge];Ae.pop());for(ge=Ae[0];ge>=10;ge/=10,fe++);return(ue=fe+ue*q-1)>Qe?se.c=se.e=null:ue<ve?se.c=[se.e=0]:(se.e=ue,se.c=Ae),se}Se=function(){var se=/^(-?)0([xbo])(?=\w[\w.]*$)/i,Ae=/^([^.]+)\.$/,ue=/^\.([^.]+)$/,fe=/^-?(Infinity|NaN)$/,ge=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(me,ee,j,J){var re,ne=j?ee:ee.replace(ge,"");if(fe.test(ne))me.s=isNaN(ne)?null:ne<0?-1:1;else{if(!j&&(ne=ne.replace(se,function(le,Ee,ke){return re=(ke=ke.toLowerCase())=="x"?16:ke=="b"?2:8,!J||J==re?Ee:le}),J&&(re=J,ne=ne.replace(Ae,"$1").replace(ue,"0.$1")),ee!=ne))return new oe(ne,re);if(oe.DEBUG)throw Error(L+"Not a"+(J?" base "+J:"")+" number: "+ee);me.s=null}me.c=me.e=null}}();function Oe(se,Ae,ue,fe){var ge,me,ee,j,J,re,ne,le=se.c,Ee=W;if(le){e:{for(ge=1,j=le[0];j>=10;j/=10,ge++);if(me=Ae-ge,me<0)me+=q,ee=Ae,J=le[re=0],ne=J/Ee[ge-ee-1]%10|0;else if(re=F((me+1)/q),re>=le.length)if(fe){for(;le.length<=re;le.push(0));J=ne=0,ge=1,me%=q,ee=me-q+1}else break e;else{for(J=j=le[re],ge=1;j>=10;j/=10,ge++);me%=q,ee=me-q+ge,ne=ee<0?0:J/Ee[ge-ee-1]%10|0}if(fe=fe||Ae<0||le[re+1]!=null||(ee<0?J:J%Ee[ge-ee-1]),fe=ue<4?(ne||fe)&&(ue==0||ue==(se.s<0?3:2)):ne>5||ne==5&&(ue==4||fe||ue==6&&(me>0?ee>0?J/Ee[ge-ee]:0:le[re-1])%10&1||ue==(se.s<0?8:7)),Ae<1||!le[0])return le.length=0,fe?(Ae-=se.e+1,le[0]=Ee[(q-Ae%q)%q],se.e=-Ae||0):le[0]=se.e=0,se;if(me==0?(le.length=re,j=1,re--):(le.length=re+1,j=Ee[q-me],le[re]=ee>0?O(J/Ee[ge-ee]%Ee[ee])*j:0),fe)for(;;)if(re==0){for(me=1,ee=le[0];ee>=10;ee/=10,me++);for(ee=le[0]+=j,j=1;ee>=10;ee/=10,j++);me!=j&&(se.e++,le[0]==G&&(le[0]=1));break}else{if(le[re]+=j,le[re]!=G)break;le[re--]=0,j=1}for(me=le.length;le[--me]===0;le.pop());}se.e>Qe?se.c=se.e=null:se.e<ve&&(se.c=[se.e=0])}return se}function Ge(se){var Ae,ue=se.e;return ue===null?se.toString():(Ae=ce(se.c),Ae=ue<=qe||ue>=_e?Ie(Ae,ue):ye(Ae,ue,"0"),se.s<0?"-"+Ae:Ae)}return be.absoluteValue=be.abs=function(){var se=new oe(this);return se.s<0&&(se.s=1),se},be.comparedTo=function(se,Ae){return he(this,new oe(se,Ae))},be.decimalPlaces=be.dp=function(se,Ae){var ue,fe,ge,me=this;if(se!=null)return pe(se,0,te),Ae==null?Ae=Le:pe(Ae,0,8),Oe(new oe(me),se+me.e+1,Ae);if(!(ue=me.c))return null;if(fe=((ge=ue.length-1)-ie(this.e/q))*q,ge=ue[ge])for(;ge%10==0;ge/=10,fe--);return fe<0&&(fe=0),fe},be.dividedBy=be.div=function(se,Ae){return we(this,new oe(se,Ae),Pe,Le)},be.dividedToIntegerBy=be.idiv=function(se,Ae){return we(this,new oe(se,Ae),0,1)},be.exponentiatedBy=be.pow=function(se,Ae){var ue,fe,ge,me,ee,j,J,re,ne,le=this;if(se=new oe(se),se.c&&!se.isInteger())throw Error(L+"Exponent not an integer: "+Ge(se));if(Ae!=null&&(Ae=new oe(Ae)),j=se.e>14,!le.c||!le.c[0]||le.c[0]==1&&!le.e&&le.c.length==1||!se.c||!se.c[0])return ne=new oe(Math.pow(+Ge(le),j?se.s*(2-Be(se)):+Ge(se))),Ae?ne.mod(Ae):ne;if(J=se.s<0,Ae){if(Ae.c?!Ae.c[0]:!Ae.s)return new oe(NaN);fe=!J&&le.isInteger()&&Ae.isInteger(),fe&&(le=le.mod(Ae))}else{if(se.e>9&&(le.e>0||le.e<-1||(le.e==0?le.c[0]>1||j&&le.c[1]>=24e7:le.c[0]<8e13||j&&le.c[0]<=9999975e7)))return me=le.s<0&&Be(se)?-0:0,le.e>-1&&(me=1/me),new oe(J?1/me:me);Fe&&(me=F(Fe/q+2))}for(j?(ue=new oe(.5),J&&(se.s=1),re=Be(se)):(ge=Math.abs(+Ge(se)),re=ge%2),ne=new oe(Ne);;){if(re){if(ne=ne.times(le),!ne.c)break;me?ne.c.length>me&&(ne.c.length=me):fe&&(ne=ne.mod(Ae))}if(ge){if(ge=O(ge/2),ge===0)break;re=ge%2}else if(se=se.times(ue),Oe(se,se.e+1,1),se.e>14)re=Be(se);else{if(ge=+Ge(se),ge===0)break;re=ge%2}le=le.times(le),me?le.c&&le.c.length>me&&(le.c.length=me):fe&&(le=le.mod(Ae))}return fe?ne:(J&&(ne=Ne.div(ne)),Ae?ne.mod(Ae):me?Oe(ne,Fe,Le,ee):ne)},be.integerValue=function(se){var Ae=new oe(this);return se==null?se=Le:pe(se,0,8),Oe(Ae,Ae.e+1,se)},be.isEqualTo=be.eq=function(se,Ae){return he(this,new oe(se,Ae))===0},be.isFinite=function(){return!!this.c},be.isGreaterThan=be.gt=function(se,Ae){return he(this,new oe(se,Ae))>0},be.isGreaterThanOrEqualTo=be.gte=function(se,Ae){return(Ae=he(this,new oe(se,Ae)))===1||Ae===0},be.isInteger=function(){return!!this.c&&ie(this.e/q)>this.c.length-2},be.isLessThan=be.lt=function(se,Ae){return he(this,new oe(se,Ae))<0},be.isLessThanOrEqualTo=be.lte=function(se,Ae){return(Ae=he(this,new oe(se,Ae)))===-1||Ae===0},be.isNaN=function(){return!this.s},be.isNegative=function(){return this.s<0},be.isPositive=function(){return this.s>0},be.isZero=function(){return!!this.c&&this.c[0]==0},be.minus=function(se,Ae){var ue,fe,ge,me,ee=this,j=ee.s;if(se=new oe(se,Ae),Ae=se.s,!j||!Ae)return new oe(NaN);if(j!=Ae)return se.s=-Ae,ee.plus(se);var J=ee.e/q,re=se.e/q,ne=ee.c,le=se.c;if(!J||!re){if(!ne||!le)return ne?(se.s=-Ae,se):new oe(le?ee:NaN);if(!ne[0]||!le[0])return le[0]?(se.s=-Ae,se):new oe(ne[0]?ee:Le==3?-0:0)}if(J=ie(J),re=ie(re),ne=ne.slice(),j=J-re){for((me=j<0)?(j=-j,ge=ne):(re=J,ge=le),ge.reverse(),Ae=j;Ae--;ge.push(0));ge.reverse()}else for(fe=(me=(j=ne.length)<(Ae=le.length))?j:Ae,j=Ae=0;Ae<fe;Ae++)if(ne[Ae]!=le[Ae]){me=ne[Ae]<le[Ae];break}if(me&&(ge=ne,ne=le,le=ge,se.s=-se.s),Ae=(fe=le.length)-(ue=ne.length),Ae>0)for(;Ae--;ne[ue++]=0);for(Ae=G-1;fe>j;){if(ne[--fe]<le[fe]){for(ue=fe;ue&&!ne[--ue];ne[ue]=Ae);--ne[ue],ne[fe]+=G}ne[fe]-=le[fe]}for(;ne[0]==0;ne.splice(0,1),--re);return ne[0]?ct(se,ne,re):(se.s=Le==3?-1:1,se.c=[se.e=0],se)},be.modulo=be.mod=function(se,Ae){var ue,fe,ge=this;return se=new oe(se,Ae),!ge.c||!se.s||se.c&&!se.c[0]?new oe(NaN):!se.c||ge.c&&!ge.c[0]?new oe(ge):(Re==9?(fe=se.s,se.s=1,ue=we(ge,se,0,3),se.s=fe,ue.s*=fe):ue=we(ge,se,0,Re),se=ge.minus(ue.times(se)),!se.c[0]&&Re==1&&(se.s=ge.s),se)},be.multipliedBy=be.times=function(se,Ae){var ue,fe,ge,me,ee,j,J,re,ne,le,Ee,ke,Me,$e,Ye,Te=this,Je=Te.c,it=(se=new oe(se,Ae)).c;if(!Je||!it||!Je[0]||!it[0])return!Te.s||!se.s||Je&&!Je[0]&&!it||it&&!it[0]&&!Je?se.c=se.e=se.s=null:(se.s*=Te.s,!Je||!it?se.c=se.e=null:(se.c=[0],se.e=0)),se;for(fe=ie(Te.e/q)+ie(se.e/q),se.s*=Te.s,J=Je.length,le=it.length,J<le&&(Me=Je,Je=it,it=Me,ge=J,J=le,le=ge),ge=J+le,Me=[];ge--;Me.push(0));for($e=G,Ye=X,ge=le;--ge>=0;){for(ue=0,Ee=it[ge]%Ye,ke=it[ge]/Ye|0,ee=J,me=ge+ee;me>ge;)re=Je[--ee]%Ye,ne=Je[ee]/Ye|0,j=ke*re+ne*Ee,re=Ee*re+j%Ye*Ye+Me[me]+ue,ue=(re/$e|0)+(j/Ye|0)+ke*ne,Me[me--]=re%$e;Me[me]=ue}return ue?++fe:Me.splice(0,1),ct(se,Me,fe)},be.negated=function(){var se=new oe(this);return se.s=-se.s||null,se},be.plus=function(se,Ae){var ue,fe=this,ge=fe.s;if(se=new oe(se,Ae),Ae=se.s,!ge||!Ae)return new oe(NaN);if(ge!=Ae)return se.s=-Ae,fe.minus(se);var me=fe.e/q,ee=se.e/q,j=fe.c,J=se.c;if(!me||!ee){if(!j||!J)return new oe(ge/0);if(!j[0]||!J[0])return J[0]?se:new oe(j[0]?fe:ge*0)}if(me=ie(me),ee=ie(ee),j=j.slice(),ge=me-ee){for(ge>0?(ee=me,ue=J):(ge=-ge,ue=j),ue.reverse();ge--;ue.push(0));ue.reverse()}for(ge=j.length,Ae=J.length,ge-Ae<0&&(ue=J,J=j,j=ue,Ae=ge),ge=0;Ae;)ge=(j[--Ae]=j[Ae]+J[Ae]+ge)/G|0,j[Ae]=G===j[Ae]?0:j[Ae]%G;return ge&&(j=[ge].concat(j),++ee),ct(se,j,ee)},be.precision=be.sd=function(se,Ae){var ue,fe,ge,me=this;if(se!=null&&se!==!!se)return pe(se,1,te),Ae==null?Ae=Le:pe(Ae,0,8),Oe(new oe(me),se,Ae);if(!(ue=me.c))return null;if(ge=ue.length-1,fe=ge*q+1,ge=ue[ge]){for(;ge%10==0;ge/=10,fe--);for(ge=ue[0];ge>=10;ge/=10,fe++);}return se&&me.e+1>fe&&(fe=me.e+1),fe},be.shiftedBy=function(se){return pe(se,-Y,Y),this.times("1e"+se)},be.squareRoot=be.sqrt=function(){var se,Ae,ue,fe,ge,me=this,ee=me.c,j=me.s,J=me.e,re=Pe+4,ne=new oe("0.5");if(j!==1||!ee||!ee[0])return new oe(!j||j<0&&(!ee||ee[0])?NaN:ee?me:1/0);if(j=Math.sqrt(+Ge(me)),j==0||j==1/0?(Ae=ce(ee),(Ae.length+J)%2==0&&(Ae+="0"),j=Math.sqrt(+Ae),J=ie((J+1)/2)-(J<0||J%2),j==1/0?Ae="5e"+J:(Ae=j.toExponential(),Ae=Ae.slice(0,Ae.indexOf("e")+1)+J),ue=new oe(Ae)):ue=new oe(j+""),ue.c[0]){for(J=ue.e,j=J+re,j<3&&(j=0);;)if(ge=ue,ue=ne.times(ge.plus(we(me,ge,re,1))),ce(ge.c).slice(0,j)===(Ae=ce(ue.c)).slice(0,j))if(ue.e<J&&--j,Ae=Ae.slice(j-3,j+1),Ae=="9999"||!fe&&Ae=="4999"){if(!fe&&(Oe(ge,ge.e+Pe+2,0),ge.times(ge).eq(me))){ue=ge;break}re+=4,j+=4,fe=1}else{(!+Ae||!+Ae.slice(1)&&Ae.charAt(0)=="5")&&(Oe(ue,ue.e+Pe+2,1),se=!ue.times(ue).eq(me));break}}return Oe(ue,ue.e+Pe+1,Le,se)},be.toExponential=function(se,Ae){return se!=null&&(pe(se,0,te),se++),Xe(this,se,Ae,1)},be.toFixed=function(se,Ae){return se!=null&&(pe(se,0,te),se=se+this.e+1),Xe(this,se,Ae)},be.toFormat=function(se,Ae,ue){var fe,ge=this;if(ue==null)se!=null&&Ae&&typeof Ae=="object"?(ue=Ae,Ae=null):se&&typeof se=="object"?(ue=se,se=Ae=null):ue=Ue;else if(typeof ue!="object")throw Error(L+"Argument not an object: "+ue);if(fe=ge.toFixed(se,Ae),ge.c){var me,ee=fe.split("."),j=+ue.groupSize,J=+ue.secondaryGroupSize,re=ue.groupSeparator||"",ne=ee[0],le=ee[1],Ee=ge.s<0,ke=Ee?ne.slice(1):ne,Me=ke.length;if(J&&(me=j,j=J,J=me,Me-=me),j>0&&Me>0){for(me=Me%j||j,ne=ke.substr(0,me);me<Me;me+=j)ne+=re+ke.substr(me,j);J>0&&(ne+=re+ke.slice(me)),Ee&&(ne="-"+ne)}fe=le?ne+(ue.decimalSeparator||"")+((J=+ue.fractionGroupSize)?le.replace(new RegExp("\\d{"+J+"}\\B","g"),"$&"+(ue.fractionGroupSeparator||"")):le):ne}return(ue.prefix||"")+fe+(ue.suffix||"")},be.toFraction=function(se){var Ae,ue,fe,ge,me,ee,j,J,re,ne,le,Ee,ke=this,Me=ke.c;if(se!=null&&(j=new oe(se),!j.isInteger()&&(j.c||j.s!==1)||j.lt(Ne)))throw Error(L+"Argument "+(j.isInteger()?"out of range: ":"not an integer: ")+Ge(j));if(!Me)return new oe(ke);for(Ae=new oe(Ne),re=ue=new oe(Ne),fe=J=new oe(Ne),Ee=ce(Me),me=Ae.e=Ee.length-ke.e-1,Ae.c[0]=W[(ee=me%q)<0?q+ee:ee],se=!se||j.comparedTo(Ae)>0?me>0?Ae:re:j,ee=Qe,Qe=1/0,j=new oe(Ee),J.c[0]=0;ne=we(j,Ae,0,1),ge=ue.plus(ne.times(fe)),ge.comparedTo(se)!=1;)ue=fe,fe=ge,re=J.plus(ne.times(ge=re)),J=ge,Ae=j.minus(ne.times(ge=Ae)),j=ge;return ge=we(se.minus(ue),fe,0,1),J=J.plus(ge.times(re)),ue=ue.plus(ge.times(fe)),J.s=re.s=ke.s,me=me*2,le=we(re,fe,me,Le).minus(ke).abs().comparedTo(we(J,ue,me,Le).minus(ke).abs())<1?[re,fe]:[J,ue],Qe=ee,le},be.toNumber=function(){return+Ge(this)},be.toPrecision=function(se,Ae){return se!=null&&pe(se,1,te),Xe(this,se,Ae,2)},be.toString=function(se){var Ae,ue=this,fe=ue.s,ge=ue.e;return ge===null?fe?(Ae="Infinity",fe<0&&(Ae="-"+Ae)):Ae="NaN":(se==null?Ae=ge<=qe||ge>=_e?Ie(ce(ue.c),ge):ye(ce(ue.c),ge,"0"):se===10&&et?(ue=Oe(new oe(ue),Pe+ge+1,Le),Ae=ye(ce(ue.c),ue.e,"0")):(pe(se,2,He.length,"Base"),Ae=De(ye(ce(ue.c),ge,"0"),10,se,fe,!0)),fe<0&&ue.c[0]&&(Ae="-"+Ae)),Ae},be.valueOf=be.toJSON=function(){return Ge(this)},be._isBigNumber=!0,Ce!=null&&oe.set(Ce),oe}function ie(Ce){var we=Ce|0;return Ce>0||Ce===we?we:we-1}function ce(Ce){for(var we,De,Se=1,be=Ce.length,Ne=Ce[0]+"";Se<be;){for(we=Ce[Se++]+"",De=q-we.length;De--;we="0"+we);Ne+=we}for(be=Ne.length;Ne.charCodeAt(--be)===48;);return Ne.slice(0,be+1||1)}function he(Ce,we){var De,Se,be=Ce.c,Ne=we.c,Pe=Ce.s,Le=we.s,qe=Ce.e,_e=we.e;if(!Pe||!Le)return null;if(De=be&&!be[0],Se=Ne&&!Ne[0],De||Se)return De?Se?0:-Le:Pe;if(Pe!=Le)return Pe;if(De=Pe<0,Se=qe==_e,!be||!Ne)return Se?0:!be^De?1:-1;if(!Se)return qe>_e^De?1:-1;for(Le=(qe=be.length)<(_e=Ne.length)?qe:_e,Pe=0;Pe<Le;Pe++)if(be[Pe]!=Ne[Pe])return be[Pe]>Ne[Pe]^De?1:-1;return qe==_e?0:qe>_e^De?1:-1}function pe(Ce,we,De,Se){if(Ce<we||Ce>De||Ce!==O(Ce))throw Error(L+(Se||"Argument")+(typeof Ce=="number"?Ce<we||Ce>De?" out of range: ":" not an integer: ":" not a primitive number: ")+String(Ce))}function Be(Ce){var we=Ce.c.length-1;return ie(Ce.e/q)==we&&Ce.c[we]%2!=0}function Ie(Ce,we){return(Ce.length>1?Ce.charAt(0)+"."+Ce.slice(1):Ce)+(we<0?"e":"e+")+we}function ye(Ce,we,De){var Se,be;if(we<0){for(be=De+".";++we;be+=De);Ce=be+Ce}else if(Se=Ce.length,++we>Se){for(be=De,we-=Se;--we;be+=De);Ce+=be}else we<Se&&(Ce=Ce.slice(0,we)+"."+Ce.slice(we));return Ce}w=ae(),w.default=w.BigNumber=w,Q.exports?Q.exports=w:(B||(B=typeof self!="undefined"&&self?self:window),B.BigNumber=w)})(commonjsGlobal)})(bignumber);var decoder_asm=function Q(B,w,D){var F=new B.Uint8Array(D),O=w.pushInt,L=w.pushInt32,U=w.pushInt32Neg,G=w.pushInt64,q=w.pushInt64Neg,Y=w.pushFloat,W=w.pushFloatSingle,X=w.pushFloatDouble,te=w.pushTrue,ae=w.pushFalse,ie=w.pushUndefined,ce=w.pushNull,he=w.pushInfinity,pe=w.pushInfinityNeg,Be=w.pushNaN,Ie=w.pushNaNNeg,ye=w.pushArrayStart,Ce=w.pushArrayStartFixed,we=w.pushArrayStartFixed32,De=w.pushArrayStartFixed64,Se=w.pushObjectStart,be=w.pushObjectStartFixed,Ne=w.pushObjectStartFixed32,Pe=w.pushObjectStartFixed64,Le=w.pushByteString,qe=w.pushByteStringStart,_e=w.pushUtf8String,ve=w.pushUtf8StringStart,Qe=w.pushSimpleUnassigned,xe=w.pushTagStart,Re=w.pushTagStart4,Fe=w.pushTagStart8,Ue=w.pushTagUnassigned,He=w.pushBreak,et=B.Math.pow,oe=0,Xe=0,ot=0;function ct(de){for(de=de|0,oe=0,Xe=de;(oe|0)<(Xe|0)&&(ot=Nt[F[oe]&255](F[oe]|0)|0,!((ot|0)>0)););return ot|0}function Oe(de){return de=de|0,((oe|0)+(de|0)|0)<(Xe|0)?0:1}function Ge(de){return de=de|0,F[de|0]<<8|F[de+1|0]|0}function se(de){return de=de|0,F[de|0]<<24|F[de+1|0]<<16|F[de+2|0]<<8|F[de+3|0]|0}function Ae(de){return de=de|0,O(de|0),oe=oe+1|0,0}function ue(de){return de=de|0,Oe(1)|0?1:(O(F[oe+1|0]|0),oe=oe+2|0,0)}function fe(de){return de=de|0,Oe(2)|0?1:(O(Ge(oe+1|0)|0),oe=oe+3|0,0)}function ge(de){return de=de|0,Oe(4)|0?1:(L(Ge(oe+1|0)|0,Ge(oe+3|0)|0),oe=oe+5|0,0)}function me(de){return de=de|0,Oe(8)|0?1:(G(Ge(oe+1|0)|0,Ge(oe+3|0)|0,Ge(oe+5|0)|0,Ge(oe+7|0)|0),oe=oe+9|0,0)}function ee(de){return de=de|0,O(-1-(de-32|0)|0),oe=oe+1|0,0}function j(de){return de=de|0,Oe(1)|0?1:(O(-1-(F[oe+1|0]|0)|0),oe=oe+2|0,0)}function J(de){de=de|0;var Ve=0;return Oe(2)|0?1:(Ve=Ge(oe+1|0)|0,O(-1-(Ve|0)|0),oe=oe+3|0,0)}function re(de){return de=de|0,Oe(4)|0?1:(U(Ge(oe+1|0)|0,Ge(oe+3|0)|0),oe=oe+5|0,0)}function ne(de){return de=de|0,Oe(8)|0?1:(q(Ge(oe+1|0)|0,Ge(oe+3|0)|0,Ge(oe+5|0)|0,Ge(oe+7|0)|0),oe=oe+9|0,0)}function le(de){de=de|0;var Ve=0,We=0,je=0;return je=de-64|0,Oe(je|0)|0?1:(Ve=oe+1|0,We=(oe+1|0)+(je|0)|0,Le(Ve|0,We|0),oe=We|0,0)}function Ee(de){de=de|0;var Ve=0,We=0,je=0;return Oe(1)|0||(je=F[oe+1|0]|0,Ve=oe+2|0,We=(oe+2|0)+(je|0)|0,Oe(je+1|0)|0)?1:(Le(Ve|0,We|0),oe=We|0,0)}function ke(de){de=de|0;var Ve=0,We=0,je=0;return Oe(2)|0||(je=Ge(oe+1|0)|0,Ve=oe+3|0,We=(oe+3|0)+(je|0)|0,Oe(je+2|0)|0)?1:(Le(Ve|0,We|0),oe=We|0,0)}function Me(de){de=de|0;var Ve=0,We=0,je=0;return Oe(4)|0||(je=se(oe+1|0)|0,Ve=oe+5|0,We=(oe+5|0)+(je|0)|0,Oe(je+4|0)|0)?1:(Le(Ve|0,We|0),oe=We|0,0)}function $e(de){return de=de|0,1}function Ye(de){return de=de|0,qe(),oe=oe+1|0,0}function Te(de){de=de|0;var Ve=0,We=0,je=0;return je=de-96|0,Oe(je|0)|0?1:(Ve=oe+1|0,We=(oe+1|0)+(je|0)|0,_e(Ve|0,We|0),oe=We|0,0)}function Je(de){de=de|0;var Ve=0,We=0,je=0;return Oe(1)|0||(je=F[oe+1|0]|0,Ve=oe+2|0,We=(oe+2|0)+(je|0)|0,Oe(je+1|0)|0)?1:(_e(Ve|0,We|0),oe=We|0,0)}function it(de){de=de|0;var Ve=0,We=0,je=0;return Oe(2)|0||(je=Ge(oe+1|0)|0,Ve=oe+3|0,We=(oe+3|0)+(je|0)|0,Oe(je+2|0)|0)?1:(_e(Ve|0,We|0),oe=We|0,0)}function lt(de){de=de|0;var Ve=0,We=0,je=0;return Oe(4)|0||(je=se(oe+1|0)|0,Ve=oe+5|0,We=(oe+5|0)+(je|0)|0,Oe(je+4|0)|0)?1:(_e(Ve|0,We|0),oe=We|0,0)}function gt(de){return de=de|0,1}function ht(de){return de=de|0,ve(),oe=oe+1|0,0}function ze(de){return de=de|0,Ce(de-128|0),oe=oe+1|0,0}function ut(de){return de=de|0,Oe(1)|0?1:(Ce(F[oe+1|0]|0),oe=oe+2|0,0)}function At(de){return de=de|0,Oe(2)|0?1:(Ce(Ge(oe+1|0)|0),oe=oe+3|0,0)}function at(de){return de=de|0,Oe(4)|0?1:(we(Ge(oe+1|0)|0,Ge(oe+3|0)|0),oe=oe+5|0,0)}function tt(de){return de=de|0,Oe(8)|0?1:(De(Ge(oe+1|0)|0,Ge(oe+3|0)|0,Ge(oe+5|0)|0,Ge(oe+7|0)|0),oe=oe+9|0,0)}function mt(de){return de=de|0,ye(),oe=oe+1|0,0}function rt(de){de=de|0;var Ve=0;return Ve=de-160|0,Oe(Ve|0)|0?1:(be(Ve|0),oe=oe+1|0,0)}function Et(de){return de=de|0,Oe(1)|0?1:(be(F[oe+1|0]|0),oe=oe+2|0,0)}function Bt(de){return de=de|0,Oe(2)|0?1:(be(Ge(oe+1|0)|0),oe=oe+3|0,0)}function yt(de){return de=de|0,Oe(4)|0?1:(Ne(Ge(oe+1|0)|0,Ge(oe+3|0)|0),oe=oe+5|0,0)}function It(de){return de=de|0,Oe(8)|0?1:(Pe(Ge(oe+1|0)|0,Ge(oe+3|0)|0,Ge(oe+5|0)|0,Ge(oe+7|0)|0),oe=oe+9|0,0)}function Ct(de){return de=de|0,Se(),oe=oe+1|0,0}function dt(de){return de=de|0,xe(de-192|0|0),oe=oe+1|0,0}function Lt(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function Ut(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function Gt(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function $t(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function st(de){return de=de|0,xe(de-192|0|0),oe=oe+1|0,0}function Ht(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function qt(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function Yt(de){return de=de|0,xe(de|0),oe=oe+1|0,0}function wt(de){return de=de|0,Oe(1)|0?1:(xe(F[oe+1|0]|0),oe=oe+2|0,0)}function vt(de){return de=de|0,Oe(2)|0?1:(xe(Ge(oe+1|0)|0),oe=oe+3|0,0)}function Qt(de){return de=de|0,Oe(4)|0?1:(Re(Ge(oe+1|0)|0,Ge(oe+3|0)|0),oe=oe+5|0,0)}function _t(de){return de=de|0,Oe(8)|0?1:(Fe(Ge(oe+1|0)|0,Ge(oe+3|0)|0,Ge(oe+5|0)|0,Ge(oe+7|0)|0),oe=oe+9|0,0)}function nt(de){return de=de|0,Qe((de|0)-224|0),oe=oe+1|0,0}function bt(de){return de=de|0,ae(),oe=oe+1|0,0}function St(de){return de=de|0,te(),oe=oe+1|0,0}function Dt(de){return de=de|0,ce(),oe=oe+1|0,0}function kt(de){return de=de|0,ie(),oe=oe+1|0,0}function xt(de){return de=de|0,Oe(1)|0?1:(Qe(F[oe+1|0]|0),oe=oe+2|0,0)}function Tt(de){de=de|0;var Ve=0,We=0,je=1,ft=0,pt=0,jt=0;return Oe(2)|0?1:(Ve=F[oe+1|0]|0,We=F[oe+2|0]|0,(Ve|0)&128&&(je=-1),ft=+(((Ve|0)&124)>>2),pt=+(((Ve|0)&3)<<8|We),+ft==0?Y(+(+je*5960464477539063e-23*+pt)):+ft==31?+je==1?+pt>0?Be():he():+pt>0?Ie():pe():Y(+(+je*et(2,+(+ft-25))*+(1024+pt))),oe=oe+3|0,0)}function Ft(de){return de=de|0,Oe(4)|0?1:(W(F[oe+1|0]|0,F[oe+2|0]|0,F[oe+3|0]|0,F[oe+4|0]|0),oe=oe+5|0,0)}function Mt(de){return de=de|0,Oe(8)|0?1:(X(F[oe+1|0]|0,F[oe+2|0]|0,F[oe+3|0]|0,F[oe+4|0]|0,F[oe+5|0]|0,F[oe+6|0]|0,F[oe+7|0]|0,F[oe+8|0]|0),oe=oe+9|0,0)}function Ze(de){return de=de|0,1}function Rt(de){return de=de|0,He(),oe=oe+1|0,0}var Nt=[Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,Ae,ue,fe,ge,me,Ze,Ze,Ze,Ze,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,j,J,re,ne,Ze,Ze,Ze,Ze,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,le,Ee,ke,Me,$e,Ze,Ze,Ze,Ye,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Je,it,lt,gt,Ze,Ze,Ze,ht,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ut,At,at,tt,Ze,Ze,Ze,mt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,Et,Bt,yt,It,Ze,Ze,Ze,Ct,dt,dt,dt,dt,dt,dt,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,wt,vt,Qt,_t,Ze,Ze,Ze,Ze,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,bt,St,Dt,kt,xt,Tt,Ft,Mt,Ze,Ze,Ze,Rt];return{parse:ct}},utils$i={},constants$2={};const Bignumber$2=bignumber.exports.BigNumber;constants$2.MT={POS_INT:0,NEG_INT:1,BYTE_STRING:2,UTF8_STRING:3,ARRAY:4,MAP:5,TAG:6,SIMPLE_FLOAT:7};constants$2.TAG={DATE_STRING:0,DATE_EPOCH:1,POS_BIGINT:2,NEG_BIGINT:3,DECIMAL_FRAC:4,BIGFLOAT:5,BASE64URL_EXPECTED:21,BASE64_EXPECTED:22,BASE16_EXPECTED:23,CBOR:24,URI:32,BASE64URL:33,BASE64:34,REGEXP:35,MIME:36};constants$2.NUMBYTES={ZERO:0,ONE:24,TWO:25,FOUR:26,EIGHT:27,INDEFINITE:31};constants$2.SIMPLE={FALSE:20,TRUE:21,NULL:22,UNDEFINED:23};constants$2.SYMS={NULL:Symbol("null"),UNDEFINED:Symbol("undef"),PARENT:Symbol("parent"),BREAK:Symbol("break"),STREAM:Symbol("stream")};constants$2.SHIFT32=Math.pow(2,32);constants$2.SHIFT16=Math.pow(2,16);constants$2.MAX_SAFE_HIGH=2097151;constants$2.NEG_ONE=new Bignumber$2(-1);constants$2.TEN=new Bignumber$2(10);constants$2.TWO=new Bignumber$2(2);constants$2.PARENT={ARRAY:0,OBJECT:1,MAP:2,TAG:3,BYTE_STRING:4,UTF8_STRING:5};(function(Q){const{Buffer:B}=buffer,w=bignumber.exports.BigNumber,D=constants$2,F=D.SHIFT32,O=D.SHIFT16,L=2097151;Q.parseHalf=function(q){var Y,W,X;return X=q[0]&128?-1:1,Y=(q[0]&124)>>2,W=(q[0]&3)<<8|q[1],Y?Y===31?X*(W?0/0:1/0):X*Math.pow(2,Y-25)*(1024+W):X*5960464477539063e-23*W};function U(G){return G<16?"0"+G.toString(16):G.toString(16)}Q.arrayBufferToBignumber=function(G){const q=G.byteLength;let Y="";for(let W=0;W<q;W++)Y+=U(G[W]);return new w(Y,16)},Q.buildMap=G=>{const q=new Map,Y=Object.keys(G),W=Y.length;for(let X=0;X<W;X++)q.set(Y[X],G[Y[X]]);return q},Q.buildInt32=(G,q)=>G*O+q,Q.buildInt64=(G,q,Y,W)=>{const X=Q.buildInt32(G,q),te=Q.buildInt32(Y,W);return X>L?new w(X).times(F).plus(te):X*F+te},Q.writeHalf=function(q,Y){const W=B.allocUnsafe(4);W.writeFloatBE(Y,0);const X=W.readUInt32BE(0);if((X&8191)!==0)return!1;var te=X>>16&32768;const ae=X>>23&255,ie=X&8388607;if(ae>=113&&ae<=142)te+=(ae-112<<10)+(ie>>13);else if(ae>=103&&ae<113){if(ie&(1<<126-ae)-1)return!1;te+=ie+8388608>>126-ae}else return!1;return q.writeUInt16BE(te,0),!0},Q.keySorter=function(G,q){var Y=G[0].byteLength,W=q[0].byteLength;return Y>W?1:W>Y?-1:G[0].compare(q[0])},Q.isNegativeZero=G=>G===0&&1/G<0,Q.nextPowerOf2=G=>{let q=0;if(G&&!(G&G-1))return G;for(;G!==0;)G>>=1,q+=1;return 1<<q}})(utils$i);const constants$1=constants$2,MT$1=constants$1.MT,SIMPLE=constants$1.SIMPLE,SYMS$1=constants$1.SYMS;class Simple$1{constructor(B){if(typeof B!="number")throw new Error("Invalid Simple type: "+typeof B);if(B<0||B>255||(B|0)!==B)throw new Error("value must be a small positive integer: "+B);this.value=B}toString(){return"simple("+this.value+")"}inspect(){return"simple("+this.value+")"}encodeCBOR(B){return B._pushInt(this.value,MT$1.SIMPLE_FLOAT)}static isSimple(B){return B instanceof Simple$1}static decode(B,w){switch(w==null&&(w=!0),B){case SIMPLE.FALSE:return!1;case SIMPLE.TRUE:return!0;case SIMPLE.NULL:return w?null:SYMS$1.NULL;case SIMPLE.UNDEFINED:return w?void 0:SYMS$1.UNDEFINED;case-1:if(!w)throw new Error("Invalid BREAK");return SYMS$1.BREAK;default:return new Simple$1(B)}}}var simple=Simple$1;class Tagged$1{constructor(B,w,D){if(this.tag=B,this.value=w,this.err=D,typeof this.tag!="number")throw new Error("Invalid tag type ("+typeof this.tag+")");if(this.tag<0||(this.tag|0)!==this.tag)throw new Error("Tag must be a positive integer: "+this.tag)}toString(){return`${this.tag}(${JSON.stringify(this.value)})`}encodeCBOR(B){return B._pushTag(this.tag),B.pushAny(this.value)}convert(B){var w,D;if(D=B!=null?B[this.tag]:void 0,typeof D!="function"&&(D=Tagged$1["_tag"+this.tag],typeof D!="function"))return this;try{return D.call(Tagged$1,this.value)}catch(F){return w=F,this.err=w,this}}}var tagged$1=Tagged$1;const defaultBase$1=self.location?self.location.protocol+"//"+self.location.host:"",URL$3=self.URL;class URLWithLegacySupport$2{constructor(B="",w=defaultBase$1){this.super=new URL$3(B,w),this.path=this.pathname+this.search,this.auth=this.username&&this.password?this.username+":"+this.password:null,this.query=this.search&&this.search.startsWith("?")?this.search.slice(1):null}get hash(){return this.super.hash}get host(){return this.super.host}get hostname(){return this.super.hostname}get href(){return this.super.href}get origin(){return this.super.origin}get password(){return this.super.password}get pathname(){return this.super.pathname}get port(){return this.super.port}get protocol(){return this.super.protocol}get search(){return this.super.search}get searchParams(){return this.super.searchParams}get username(){return this.super.username}set hash(B){this.super.hash=B}set host(B){this.super.host=B}set hostname(B){this.super.hostname=B}set href(B){this.super.href=B}set origin(B){this.super.origin=B}set password(B){this.super.password=B}set pathname(B){this.super.pathname=B}set port(B){this.super.port=B}set protocol(B){this.super.protocol=B}set search(B){this.super.search=B}set searchParams(B){this.super.searchParams=B}set username(B){this.super.username=B}createObjectURL(B){return this.super.createObjectURL(B)}revokeObjectURL(B){this.super.revokeObjectURL(B)}toJSON(){return this.super.toJSON()}toString(){return this.super.toString()}format(){return this.toString()}}function format$2(Q){if(typeof Q=="string")return new URL$3(Q).toString();if(!(Q instanceof URL$3)){const B=Q.username&&Q.password?`${Q.username}:${Q.password}@`:"",w=Q.auth?Q.auth+"@":"",D=Q.port?":"+Q.port:"",F=Q.protocol?Q.protocol+"//":"",O=Q.host||"",L=Q.hostname||"",U=Q.search||(Q.query?"?"+Q.query:""),G=Q.hash||"",q=Q.pathname||"",Y=Q.path||q+U;return`${F}${B||w}${O||L+D}${Y}${G}`}}var urlBrowser={URLWithLegacySupport:URLWithLegacySupport$2,URLSearchParams:self.URLSearchParams,defaultBase:defaultBase$1,format:format$2};const{URLWithLegacySupport:URLWithLegacySupport$1,format:format$1}=urlBrowser;var relative$1=(Q,B={},w={},D)=>{let F=B.protocol?B.protocol.replace(":",""):"http";F=(w[F]||D||F)+":";let O;try{O=new URLWithLegacySupport$1(Q)}catch{O={}}const L=Object.assign({},B,{protocol:F||O.protocol,host:B.host||O.host});return new URLWithLegacySupport$1(Q,format$1(L)).toString()};const{URLWithLegacySupport,format,URLSearchParams:URLSearchParams$1,defaultBase}=urlBrowser,relative=relative$1;var isoUrl={URL:URLWithLegacySupport,URLSearchParams:URLSearchParams$1,format,relative,defaultBase};const{Buffer:Buffer$2}=buffer,ieee754=ieee754$1,Bignumber$1=bignumber.exports.BigNumber,parser=decoder_asm,utils$h=utils$i,c=constants$2,Simple=simple,Tagged=tagged$1,{URL:URL$2}=isoUrl;class Decoder$1{constructor(B){B=B||{},!B.size||B.size<65536?B.size=65536:B.size=utils$h.nextPowerOf2(B.size),this._heap=new ArrayBuffer(B.size),this._heap8=new Uint8Array(this._heap),this._buffer=Buffer$2.from(this._heap),this._reset(),this._knownTags=Object.assign({0:w=>new Date(w),1:w=>new Date(w*1e3),2:w=>utils$h.arrayBufferToBignumber(w),3:w=>c.NEG_ONE.minus(utils$h.arrayBufferToBignumber(w)),4:w=>c.TEN.pow(w[0]).times(w[1]),5:w=>c.TWO.pow(w[0]).times(w[1]),32:w=>new URL$2(w),35:w=>new RegExp(w)},B.tags),this.parser=parser({},{log:console.log.bind(console),pushInt:this.pushInt.bind(this),pushInt32:this.pushInt32.bind(this),pushInt32Neg:this.pushInt32Neg.bind(this),pushInt64:this.pushInt64.bind(this),pushInt64Neg:this.pushInt64Neg.bind(this),pushFloat:this.pushFloat.bind(this),pushFloatSingle:this.pushFloatSingle.bind(this),pushFloatDouble:this.pushFloatDouble.bind(this),pushTrue:this.pushTrue.bind(this),pushFalse:this.pushFalse.bind(this),pushUndefined:this.pushUndefined.bind(this),pushNull:this.pushNull.bind(this),pushInfinity:this.pushInfinity.bind(this),pushInfinityNeg:this.pushInfinityNeg.bind(this),pushNaN:this.pushNaN.bind(this),pushNaNNeg:this.pushNaNNeg.bind(this),pushArrayStart:this.pushArrayStart.bind(this),pushArrayStartFixed:this.pushArrayStartFixed.bind(this),pushArrayStartFixed32:this.pushArrayStartFixed32.bind(this),pushArrayStartFixed64:this.pushArrayStartFixed64.bind(this),pushObjectStart:this.pushObjectStart.bind(this),pushObjectStartFixed:this.pushObjectStartFixed.bind(this),pushObjectStartFixed32:this.pushObjectStartFixed32.bind(this),pushObjectStartFixed64:this.pushObjectStartFixed64.bind(this),pushByteString:this.pushByteString.bind(this),pushByteStringStart:this.pushByteStringStart.bind(this),pushUtf8String:this.pushUtf8String.bind(this),pushUtf8StringStart:this.pushUtf8StringStart.bind(this),pushSimpleUnassigned:this.pushSimpleUnassigned.bind(this),pushTagUnassigned:this.pushTagUnassigned.bind(this),pushTagStart:this.pushTagStart.bind(this),pushTagStart4:this.pushTagStart4.bind(this),pushTagStart8:this.pushTagStart8.bind(this),pushBreak:this.pushBreak.bind(this)},this._heap)}get _depth(){return this._parents.length}get _currentParent(){return this._parents[this._depth-1]}get _ref(){return this._currentParent.ref}_closeParent(){var B=this._parents.pop();if(B.length>0)throw new Error(`Missing ${B.length} elements`);switch(B.type){case c.PARENT.TAG:this._push(this.createTag(B.ref[0],B.ref[1]));break;case c.PARENT.BYTE_STRING:this._push(this.createByteString(B.ref,B.length));break;case c.PARENT.UTF8_STRING:this._push(this.createUtf8String(B.ref,B.length));break;case c.PARENT.MAP:if(B.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createMap(B.ref,B.length));break;case c.PARENT.OBJECT:if(B.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createObject(B.ref,B.length));break;case c.PARENT.ARRAY:this._push(this.createArray(B.ref,B.length));break}this._currentParent&&this._currentParent.type===c.PARENT.TAG&&this._dec()}_dec(){const B=this._currentParent;B.length<0||(B.length--,B.length===0&&this._closeParent())}_push(B,w){const D=this._currentParent;switch(D.values++,D.type){case c.PARENT.ARRAY:case c.PARENT.BYTE_STRING:case c.PARENT.UTF8_STRING:D.length>-1?this._ref[this._ref.length-D.length]=B:this._ref.push(B),this._dec();break;case c.PARENT.OBJECT:D.tmpKey!=null?(this._ref[D.tmpKey]=B,D.tmpKey=null,this._dec()):(D.tmpKey=B,typeof D.tmpKey!="string"&&(D.type=c.PARENT.MAP,D.ref=utils$h.buildMap(D.ref)));break;case c.PARENT.MAP:D.tmpKey!=null?(this._ref.set(D.tmpKey,B),D.tmpKey=null,this._dec()):D.tmpKey=B;break;case c.PARENT.TAG:this._ref.push(B),w||this._dec();break;default:throw new Error("Unknown parent type")}}_createParent(B,w,D){this._parents[this._depth]={type:w,length:D,ref:B,values:0,tmpKey:null}}_reset(){this._res=[],this._parents=[{type:c.PARENT.ARRAY,length:-1,ref:this._res,values:0,tmpKey:null}]}createTag(B,w){const D=this._knownTags[B];return D?D(w):new Tagged(B,w)}createMap(B,w){return B}createObject(B,w){return B}createArray(B,w){return B}createByteString(B,w){return Buffer$2.concat(B)}createByteStringFromHeap(B,w){return B===w?Buffer$2.alloc(0):Buffer$2.from(this._heap.slice(B,w))}createInt(B){return B}createInt32(B,w){return utils$h.buildInt32(B,w)}createInt64(B,w,D,F){return utils$h.buildInt64(B,w,D,F)}createFloat(B){return B}createFloatSingle(B,w,D,F){return ieee754.read([B,w,D,F],0,!1,23,4)}createFloatDouble(B,w,D,F,O,L,U,G){return ieee754.read([B,w,D,F,O,L,U,G],0,!1,52,8)}createInt32Neg(B,w){return-1-utils$h.buildInt32(B,w)}createInt64Neg(B,w,D,F){const O=utils$h.buildInt32(B,w),L=utils$h.buildInt32(D,F);return O>c.MAX_SAFE_HIGH?c.NEG_ONE.minus(new Bignumber$1(O).times(c.SHIFT32).plus(L)):-1-(O*c.SHIFT32+L)}createTrue(){return!0}createFalse(){return!1}createNull(){return null}createUndefined(){}createInfinity(){return 1/0}createInfinityNeg(){return-1/0}createNaN(){return NaN}createNaNNeg(){return NaN}createUtf8String(B,w){return B.join("")}createUtf8StringFromHeap(B,w){return B===w?"":this._buffer.toString("utf8",B,w)}createSimpleUnassigned(B){return new Simple(B)}pushInt(B){this._push(this.createInt(B))}pushInt32(B,w){this._push(this.createInt32(B,w))}pushInt64(B,w,D,F){this._push(this.createInt64(B,w,D,F))}pushFloat(B){this._push(this.createFloat(B))}pushFloatSingle(B,w,D,F){this._push(this.createFloatSingle(B,w,D,F))}pushFloatDouble(B,w,D,F,O,L,U,G){this._push(this.createFloatDouble(B,w,D,F,O,L,U,G))}pushInt32Neg(B,w){this._push(this.createInt32Neg(B,w))}pushInt64Neg(B,w,D,F){this._push(this.createInt64Neg(B,w,D,F))}pushTrue(){this._push(this.createTrue())}pushFalse(){this._push(this.createFalse())}pushNull(){this._push(this.createNull())}pushUndefined(){this._push(this.createUndefined())}pushInfinity(){this._push(this.createInfinity())}pushInfinityNeg(){this._push(this.createInfinityNeg())}pushNaN(){this._push(this.createNaN())}pushNaNNeg(){this._push(this.createNaNNeg())}pushArrayStart(){this._createParent([],c.PARENT.ARRAY,-1)}pushArrayStartFixed(B){this._createArrayStartFixed(B)}pushArrayStartFixed32(B,w){const D=utils$h.buildInt32(B,w);this._createArrayStartFixed(D)}pushArrayStartFixed64(B,w,D,F){const O=utils$h.buildInt64(B,w,D,F);this._createArrayStartFixed(O)}pushObjectStart(){this._createObjectStartFixed(-1)}pushObjectStartFixed(B){this._createObjectStartFixed(B)}pushObjectStartFixed32(B,w){const D=utils$h.buildInt32(B,w);this._createObjectStartFixed(D)}pushObjectStartFixed64(B,w,D,F){const O=utils$h.buildInt64(B,w,D,F);this._createObjectStartFixed(O)}pushByteStringStart(){this._parents[this._depth]={type:c.PARENT.BYTE_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushByteString(B,w){this._push(this.createByteStringFromHeap(B,w))}pushUtf8StringStart(){this._parents[this._depth]={type:c.PARENT.UTF8_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushUtf8String(B,w){this._push(this.createUtf8StringFromHeap(B,w))}pushSimpleUnassigned(B){this._push(this.createSimpleUnassigned(B))}pushTagStart(B){this._parents[this._depth]={type:c.PARENT.TAG,length:1,ref:[B]}}pushTagStart4(B,w){this.pushTagStart(utils$h.buildInt32(B,w))}pushTagStart8(B,w,D,F){this.pushTagStart(utils$h.buildInt64(B,w,D,F))}pushTagUnassigned(B){this._push(this.createTag(B))}pushBreak(){if(this._currentParent.length>-1)throw new Error("Unexpected break");this._closeParent()}_createObjectStartFixed(B){if(B===0){this._push(this.createObject({}));return}this._createParent({},c.PARENT.OBJECT,B)}_createArrayStartFixed(B){if(B===0){this._push(this.createArray([]));return}this._createParent(new Array(B),c.PARENT.ARRAY,B)}_decode(B){if(B.byteLength===0)throw new Error("Input too short");this._reset(),this._heap8.set(B);const w=this.parser.parse(B.byteLength);if(this._depth>1){for(;this._currentParent.length===0;)this._closeParent();if(this._depth>1)throw new Error("Undeterminated nesting")}if(w>0)throw new Error("Failed to parse");if(this._res.length===0)throw new Error("No valid result")}decodeFirst(B){return this._decode(B),this._res[0]}decodeAll(B){return this._decode(B),this._res}static decode(B,w){return typeof B=="string"&&(B=Buffer$2.from(B,w||"hex")),new Decoder$1({size:B.length}).decodeFirst(B)}static decodeAll(B,w){return typeof B=="string"&&(B=Buffer$2.from(B,w||"hex")),new Decoder$1({size:B.length}).decodeAll(B)}}Decoder$1.decodeFirst=Decoder$1.decode;var decoder=Decoder$1;const{Buffer:Buffer$1}=buffer,Decoder=decoder,utils$g=utils$i;class Diagnose extends Decoder{createTag(B,w){return`${B}(${w})`}createInt(B){return super.createInt(B).toString()}createInt32(B,w){return super.createInt32(B,w).toString()}createInt64(B,w,D,F){return super.createInt64(B,w,D,F).toString()}createInt32Neg(B,w){return super.createInt32Neg(B,w).toString()}createInt64Neg(B,w,D,F){return super.createInt64Neg(B,w,D,F).toString()}createTrue(){return"true"}createFalse(){return"false"}createFloat(B){const w=super.createFloat(B);return utils$g.isNegativeZero(B)?"-0_1":`${w}_1`}createFloatSingle(B,w,D,F){return`${super.createFloatSingle(B,w,D,F)}_2`}createFloatDouble(B,w,D,F,O,L,U,G){return`${super.createFloatDouble(B,w,D,F,O,L,U,G)}_3`}createByteString(B,w){const D=B.join(", ");return w===-1?`(_ ${D})`:`h'${D}`}createByteStringFromHeap(B,w){return`h'${Buffer$1.from(super.createByteStringFromHeap(B,w)).toString("hex")}'`}createInfinity(){return"Infinity_1"}createInfinityNeg(){return"-Infinity_1"}createNaN(){return"NaN_1"}createNaNNeg(){return"-NaN_1"}createNull(){return"null"}createUndefined(){return"undefined"}createSimpleUnassigned(B){return`simple(${B})`}createArray(B,w){const D=super.createArray(B,w);return w===-1?`[_ ${D.join(", ")}]`:`[${D.join(", ")}]`}createMap(B,w){const D=super.createMap(B),F=Array.from(D.keys()).reduce(collectObject(D),"");return w===-1?`{_ ${F}}`:`{${F}}`}createObject(B,w){const D=super.createObject(B),F=Object.keys(D).reduce(collectObject(D),"");return w===-1?`{_ ${F}}`:`{${F}}`}createUtf8String(B,w){const D=B.join(", ");return w===-1?`(_ ${D})`:`"${D}"`}createUtf8StringFromHeap(B,w){return`"${Buffer$1.from(super.createUtf8StringFromHeap(B,w)).toString("utf8")}"`}static diagnose(B,w){return typeof B=="string"&&(B=Buffer$1.from(B,w||"hex")),new Diagnose().decodeFirst(B)}}var diagnose=Diagnose;function collectObject(Q){return(B,w)=>B?`${B}, ${w}: ${Q[w]}`:`${w}: ${Q[w]}`}const{Buffer}=buffer,{URL:URL$1}=isoUrl,Bignumber=bignumber.exports.BigNumber,utils$f=utils$i,constants=constants$2,MT=constants.MT,NUMBYTES=constants.NUMBYTES,SHIFT32=constants.SHIFT32,SYMS=constants.SYMS,TAG=constants.TAG,HALF=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.TWO,FLOAT=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.FOUR,DOUBLE=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.EIGHT,TRUE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.TRUE,FALSE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.FALSE,UNDEFINED=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.UNDEFINED,NULL=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.NULL,MAXINT_BN=new Bignumber("0x20000000000000"),BUF_NAN=Buffer.from("f97e00","hex"),BUF_INF_NEG=Buffer.from("f9fc00","hex"),BUF_INF_POS=Buffer.from("f97c00","hex");function toType(Q){return{}.toString.call(Q).slice(8,-1)}class Encoder{constructor(B){B=B||{},this.streaming=typeof B.stream=="function",this.onData=B.stream,this.semanticTypes=[[URL$1,this._pushUrl],[Bignumber,this._pushBigNumber]];const w=B.genTypes||[],D=w.length;for(let F=0;F<D;F++)this.addSemanticType(w[F][0],w[F][1]);this._reset()}addSemanticType(B,w){const D=this.semanticTypes.length;for(let F=0;F<D;F++)if(this.semanticTypes[F][0]===B){const L=this.semanticTypes[F][1];return this.semanticTypes[F][1]=w,L}return this.semanticTypes.push([B,w]),null}push(B){return B&&(this.result[this.offset]=B,this.resultMethod[this.offset]=0,this.resultLength[this.offset]=B.length,this.offset++,this.streaming&&this.onData(this.finalize())),!0}pushWrite(B,w,D){return this.result[this.offset]=B,this.resultMethod[this.offset]=w,this.resultLength[this.offset]=D,this.offset++,this.streaming&&this.onData(this.finalize()),!0}_pushUInt8(B){return this.pushWrite(B,1,1)}_pushUInt16BE(B){return this.pushWrite(B,2,2)}_pushUInt32BE(B){return this.pushWrite(B,3,4)}_pushDoubleBE(B){return this.pushWrite(B,4,8)}_pushNaN(){return this.push(BUF_NAN)}_pushInfinity(B){const w=B<0?BUF_INF_NEG:BUF_INF_POS;return this.push(w)}_pushFloat(B){const w=Buffer.allocUnsafe(2);if(utils$f.writeHalf(w,B)&&utils$f.parseHalf(w)===B)return this._pushUInt8(HALF)&&this.push(w);const D=Buffer.allocUnsafe(4);return D.writeFloatBE(B,0),D.readFloatBE(0)===B?this._pushUInt8(FLOAT)&&this.push(D):this._pushUInt8(DOUBLE)&&this._pushDoubleBE(B)}_pushInt(B,w,D){const F=w<<5;return B<24?this._pushUInt8(F|B):B<=255?this._pushUInt8(F|NUMBYTES.ONE)&&this._pushUInt8(B):B<=65535?this._pushUInt8(F|NUMBYTES.TWO)&&this._pushUInt16BE(B):B<=4294967295?this._pushUInt8(F|NUMBYTES.FOUR)&&this._pushUInt32BE(B):B<=Number.MAX_SAFE_INTEGER?this._pushUInt8(F|NUMBYTES.EIGHT)&&this._pushUInt32BE(Math.floor(B/SHIFT32))&&this._pushUInt32BE(B%SHIFT32):w===MT.NEG_INT?this._pushFloat(D):this._pushFloat(B)}_pushIntNum(B){return B<0?this._pushInt(-B-1,MT.NEG_INT,B):this._pushInt(B,MT.POS_INT)}_pushNumber(B){switch(!1){case B===B:return this._pushNaN(B);case isFinite(B):return this._pushInfinity(B);case B%1!==0:return this._pushIntNum(B);default:return this._pushFloat(B)}}_pushString(B){const w=Buffer.byteLength(B,"utf8");return this._pushInt(w,MT.UTF8_STRING)&&this.pushWrite(B,5,w)}_pushBoolean(B){return this._pushUInt8(B?TRUE:FALSE)}_pushUndefined(B){return this._pushUInt8(UNDEFINED)}_pushArray(B,w){const D=w.length;if(!B._pushInt(D,MT.ARRAY))return!1;for(let F=0;F<D;F++)if(!B.pushAny(w[F]))return!1;return!0}_pushTag(B){return this._pushInt(B,MT.TAG)}_pushDate(B,w){return B._pushTag(TAG.DATE_EPOCH)&&B.pushAny(Math.round(w/1e3))}_pushBuffer(B,w){return B._pushInt(w.length,MT.BYTE_STRING)&&B.push(w)}_pushNoFilter(B,w){return B._pushBuffer(B,w.slice())}_pushRegexp(B,w){return B._pushTag(TAG.REGEXP)&&B.pushAny(w.source)}_pushSet(B,w){if(!B._pushInt(w.size,MT.ARRAY))return!1;for(const D of w)if(!B.pushAny(D))return!1;return!0}_pushUrl(B,w){return B._pushTag(TAG.URI)&&B.pushAny(w.format())}_pushBigint(B){let w=TAG.POS_BIGINT;B.isNegative()&&(B=B.negated().minus(1),w=TAG.NEG_BIGINT);let D=B.toString(16);D.length%2&&(D="0"+D);const F=Buffer.from(D,"hex");return this._pushTag(w)&&this._pushBuffer(this,F)}_pushBigNumber(B,w){if(w.isNaN())return B._pushNaN();if(!w.isFinite())return B._pushInfinity(w.isNegative()?-1/0:1/0);if(w.isInteger())return B._pushBigint(w);if(!(B._pushTag(TAG.DECIMAL_FRAC)&&B._pushInt(2,MT.ARRAY)))return!1;const D=w.decimalPlaces(),F=w.multipliedBy(new Bignumber(10).pow(D));return B._pushIntNum(-D)?F.abs().isLessThan(MAXINT_BN)?B._pushIntNum(F.toNumber()):B._pushBigint(F):!1}_pushMap(B,w){return B._pushInt(w.size,MT.MAP)?this._pushRawMap(w.size,Array.from(w)):!1}_pushObject(B){if(!B)return this._pushUInt8(NULL);for(var w=this.semanticTypes.length,D=0;D<w;D++)if(B instanceof this.semanticTypes[D][0])return this.semanticTypes[D][1].call(B,this,B);var F=B.encodeCBOR;if(typeof F=="function")return F.call(B,this);var O=Object.keys(B),L=O.length;return this._pushInt(L,MT.MAP)?this._pushRawMap(L,O.map(U=>[U,B[U]])):!1}_pushRawMap(B,w){w=w.map(function(F){return F[0]=Encoder.encode(F[0]),F}).sort(utils$f.keySorter);for(var D=0;D<B;D++)if(!this.push(w[D][0])||!this.pushAny(w[D][1]))return!1;return!0}write(B){return this.pushAny(B)}pushAny(B){var w=toType(B);switch(w){case"Number":return this._pushNumber(B);case"String":return this._pushString(B);case"Boolean":return this._pushBoolean(B);case"Object":return this._pushObject(B);case"Array":return this._pushArray(this,B);case"Uint8Array":return this._pushBuffer(this,Buffer.isBuffer(B)?B:Buffer.from(B));case"Null":return this._pushUInt8(NULL);case"Undefined":return this._pushUndefined(B);case"Map":return this._pushMap(this,B);case"Set":return this._pushSet(this,B);case"URL":return this._pushUrl(this,B);case"BigNumber":return this._pushBigNumber(this,B);case"Date":return this._pushDate(this,B);case"RegExp":return this._pushRegexp(this,B);case"Symbol":switch(B){case SYMS.NULL:return this._pushObject(null);case SYMS.UNDEFINED:return this._pushUndefined(void 0);default:throw new Error("Unknown symbol: "+B.toString())}default:throw new Error("Unknown type: "+typeof B+", "+(B?B.toString():""))}}finalize(){if(this.offset===0)return null;for(var B=this.result,w=this.resultLength,D=this.resultMethod,F=this.offset,O=0,L=0;L<F;L++)O+=w[L];var U=Buffer.allocUnsafe(O),G=0,q=0;for(L=0;L<F;L++){switch(q=w[L],D[L]){case 0:B[L].copy(U,G);break;case 1:U.writeUInt8(B[L],G,!0);break;case 2:U.writeUInt16BE(B[L],G,!0);break;case 3:U.writeUInt32BE(B[L],G,!0);break;case 4:U.writeDoubleBE(B[L],G,!0);break;case 5:U.write(B[L],G,q,"utf8");break;default:throw new Error("unkown method")}G+=q}var Y=U;return this._reset(),Y}_reset(){this.result=[],this.resultMethod=[],this.resultLength=[],this.offset=0}static encode(B){const w=new Encoder;if(!w.pushAny(B))throw new Error("Failed to encode input");return w.finalize()}}var encoder=Encoder;(function(Q){Q.Diagnose=diagnose,Q.Decoder=decoder,Q.Encoder=encoder,Q.Simple=simple,Q.Tagged=tagged$1,Q.decodeAll=Q.Decoder.decodeAll,Q.decodeFirst=Q.Decoder.decodeFirst,Q.diagnose=Q.Diagnose.diagnose,Q.encode=Q.Encoder.encode,Q.decode=Q.Decoder.decode,Q.leveldb={decode:Q.Decoder.decodeAll,encode:Q.Encoder.encode,buffer:!0,name:"cbor"}})(src$1);function concat(...Q){const B=new Uint8Array(Q.reduce((D,F)=>D+F.byteLength,0));let w=0;for(const D of Q)B.set(new Uint8Array(D),w),w+=D.byteLength;return B.buffer}const hexRe=new RegExp(/^([0-9A-F]{2})*$/i);function fromHex(Q){if(!hexRe.test(Q))throw new Error("Invalid hexadecimal string.");const B=[...Q].reduce((w,D,F)=>(w[F/2|0]=(w[F/2|0]||"")+D,w),[]).map(w=>Number.parseInt(w,16));return new Uint8Array(B).buffer}globalThis&&globalThis.__rest;new TextEncoder().encode(`
ic-request`);var src={},serializer$1={},value={};Object.defineProperty(value,"__esModule",{value:!0});const MAX_U64_NUMBER=9007199254740992;function _concat(Q,...B){const w=new Uint8Array(Q.byteLength+B.reduce((F,O)=>F+O.byteLength,0));w.set(new Uint8Array(Q),0);let D=Q.byteLength;for(const F of B)w.set(new Uint8Array(F),D),D+=F.byteLength;return w.buffer}function _serializeValue(Q,B,w){w=w.replace(/[^0-9a-fA-F]/g,"");const D=2**(B-24);w=w.slice(-D*2).padStart(D*2,"0");const F=[(Q<<5)+B].concat(w.match(/../g).map(O=>parseInt(O,16)));return new Uint8Array(F).buffer}function _serializeNumber(Q,B){if(B<24)return new Uint8Array([(Q<<5)+B]).buffer;{const w=B<=255?24:B<=65535?25:B<=4294967295?26:27;return _serializeValue(Q,w,B.toString(16))}}function _serializeString(Q){const B=[];for(let w=0;w<Q.length;w++){let D=Q.charCodeAt(w);D<128?B.push(D):D<2048?B.push(192|D>>6,128|D&63):D<55296||D>=57344?B.push(224|D>>12,128|D>>6&63,128|D&63):(w++,D=(D&1023)<<10|Q.charCodeAt(w)&1023,B.push(240|D>>18,128|D>>12&63,128|D>>6&63,128|D&63))}return _concat(new Uint8Array(_serializeNumber(3,Q.length)),new Uint8Array(B))}function tagged(Q,B){if(Q==14277111)return _concat(new Uint8Array([217,217,247]),B);if(Q<24)return _concat(new Uint8Array([(6<<5)+Q]),B);{const w=Q<=255?24:Q<=65535?25:Q<=4294967295?26:27,D=2**(w-24),F=Q.toString(16).slice(-D*2).padStart(D*2,"0"),O=[(6<<5)+w].concat(F.match(/../g).map(L=>parseInt(L,16)));return new Uint8Array(O).buffer}}value.tagged=tagged;function raw(Q){return new Uint8Array(Q).buffer}value.raw=raw;function uSmall(Q){if(isNaN(Q))throw new RangeError("Invalid number.");Q=Math.min(Math.max(0,Q),23);const B=[(0<<5)+Q];return new Uint8Array(B).buffer}value.uSmall=uSmall;function u8(Q,B){if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,Q),255),Q=Q.toString(16),_serializeValue(0,24,Q)}value.u8=u8;function u16(Q,B){if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,Q),65535),Q=Q.toString(16),_serializeValue(0,25,Q)}value.u16=u16;function u32(Q,B){if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,Q),4294967295),Q=Q.toString(16),_serializeValue(0,26,Q)}value.u32=u32;function u64(Q,B){if(typeof Q=="string"&&B==16){if(Q.match(/[^0-9a-fA-F]/))throw new RangeError("Invalid number.");return _serializeValue(0,27,Q)}if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,Q),MAX_U64_NUMBER),Q=Q.toString(16),_serializeValue(0,27,Q)}value.u64=u64;function iSmall(Q){if(isNaN(Q))throw new RangeError("Invalid number.");if(Q===0)return uSmall(0);Q=Math.min(Math.max(0,-Q),24)-1;const B=[(1<<5)+Q];return new Uint8Array(B).buffer}value.iSmall=iSmall;function i8(Q,B){if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,-Q-1),255),Q=Q.toString(16),_serializeValue(1,24,Q)}value.i8=i8;function i16(Q,B){if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,-Q-1),65535),Q=Q.toString(16),_serializeValue(1,25,Q)}value.i16=i16;function i32(Q,B){if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,-Q-1),4294967295),Q=Q.toString(16),_serializeValue(1,26,Q)}value.i32=i32;function i64(Q,B){if(typeof Q=="string"&&B==16){if(Q.startsWith("-")?Q=Q.slice(1):Q="0",Q.match(/[^0-9a-fA-F]/)||Q.length>16)throw new RangeError("Invalid number.");let w=!1,D=Q.split("").reduceRight((F,O)=>{if(w)return O+F;let L=parseInt(O,16)-1;return L>=0?(w=!0,L.toString(16)+F):"f"+F},"");return w?_serializeValue(1,27,D):u64(0)}if(Q=parseInt(""+Q,B),isNaN(Q))throw new RangeError("Invalid number.");return Q=Math.min(Math.max(0,-Q-1),9007199254740992),Q=Q.toString(16),_serializeValue(1,27,Q)}value.i64=i64;function number(Q){return Q>=0?Q<24?uSmall(Q):Q<=255?u8(Q):Q<=65535?u16(Q):Q<=4294967295?u32(Q):u64(Q):Q>=-24?iSmall(Q):Q>=-255?i8(Q):Q>=-65535?i16(Q):Q>=-4294967295?i32(Q):i64(Q)}value.number=number;function bytes(Q){return _concat(_serializeNumber(2,Q.byteLength),Q)}value.bytes=bytes;function string(Q){return _serializeString(Q)}value.string=string;function array(Q){return _concat(_serializeNumber(4,Q.length),...Q)}value.array=array;function map(Q,B=!1){Q instanceof Map||(Q=new Map(Object.entries(Q)));let w=Array.from(Q.entries());return B&&(w=w.sort(([D],[F])=>D.localeCompare(F))),_concat(_serializeNumber(5,Q.size),...w.map(([D,F])=>_concat(_serializeString(D),F)))}value.map=map;function singleFloat(Q){const B=new Float32Array([Q]);return _concat(new Uint8Array([(7<<5)+26]),new Uint8Array(B.buffer))}value.singleFloat=singleFloat;function doubleFloat(Q){const B=new Float64Array([Q]);return _concat(new Uint8Array([(7<<5)+27]),new Uint8Array(B.buffer))}value.doubleFloat=doubleFloat;function bool(Q){return Q?true_():false_()}value.bool=bool;function true_(){return raw(new Uint8Array([(7<<5)+21]))}value.true_=true_;function false_(){return raw(new Uint8Array([(7<<5)+20]))}value.false_=false_;function null_(){return raw(new Uint8Array([(7<<5)+22]))}value.null_=null_;function undefined_(){return raw(new Uint8Array([(7<<5)+23]))}value.undefined_=undefined_;var __importStar=commonjsGlobal&&commonjsGlobal.__importStar||function(Q){if(Q&&Q.__esModule)return Q;var B={};if(Q!=null)for(var w in Q)Object.hasOwnProperty.call(Q,w)&&(B[w]=Q[w]);return B.default=Q,B};Object.defineProperty(serializer$1,"__esModule",{value:!0});const cbor=__importStar(value),BufferClasses=[ArrayBuffer,Uint8Array,Uint16Array,Uint32Array,Int8Array,Int16Array,Int32Array,Float32Array,Float64Array];class JsonDefaultCborEncoder{constructor(B,w=!1){this._serializer=B,this._stable=w,this.name="jsonDefault",this.priority=-100}match(B){return["undefined","boolean","number","string","object"].indexOf(typeof B)!=-1}encode(B){switch(typeof B){case"undefined":return cbor.undefined_();case"boolean":return cbor.bool(B);case"number":return Math.floor(B)===B?cbor.number(B):cbor.doubleFloat(B);case"string":return cbor.string(B);case"object":if(B===null)return cbor.null_();if(Array.isArray(B))return cbor.array(B.map(w=>this._serializer.serializeValue(w)));if(BufferClasses.find(w=>B instanceof w))return cbor.bytes(B.buffer);if(Object.getOwnPropertyNames(B).indexOf("toJSON")!==-1)return this.encode(B.toJSON());if(B instanceof Map){const w=new Map;for(const[D,F]of B.entries())w.set(D,this._serializer.serializeValue(F));return cbor.map(w,this._stable)}else{const w=new Map;for(const[D,F]of Object.entries(B))w.set(D,this._serializer.serializeValue(F));return cbor.map(w,this._stable)}default:throw new Error("Invalid value.")}}}serializer$1.JsonDefaultCborEncoder=JsonDefaultCborEncoder;class ToCborEncoder{constructor(){this.name="cborEncoder",this.priority=-90}match(B){return typeof B=="object"&&typeof B.toCBOR=="function"}encode(B){return B.toCBOR()}}serializer$1.ToCborEncoder=ToCborEncoder;class CborSerializer{constructor(){this._encoders=new Set}static withDefaultEncoders(B=!1){const w=new this;return w.addEncoder(new JsonDefaultCborEncoder(w,B)),w.addEncoder(new ToCborEncoder),w}removeEncoder(B){for(const w of this._encoders.values())w.name==B&&this._encoders.delete(w)}addEncoder(B){this._encoders.add(B)}getEncoderFor(B){let w=null;for(const D of this._encoders)(!w||D.priority>w.priority)&&D.match(B)&&(w=D);if(w===null)throw new Error("Could not find an encoder for value.");return w}serializeValue(B){return this.getEncoderFor(B).encode(B)}serialize(B){return this.serializeValue(B)}}serializer$1.CborSerializer=CborSerializer;class SelfDescribeCborSerializer extends CborSerializer{serialize(B){return cbor.raw(new Uint8Array([...new Uint8Array([217,217,247]),...new Uint8Array(super.serializeValue(B))]))}}serializer$1.SelfDescribeCborSerializer=SelfDescribeCborSerializer;(function(Q){function B(F){for(var O in F)Q.hasOwnProperty(O)||(Q[O]=F[O])}var w=commonjsGlobal&&commonjsGlobal.__importStar||function(F){if(F&&F.__esModule)return F;var O={};if(F!=null)for(var L in F)Object.hasOwnProperty.call(F,L)&&(O[L]=F[L]);return O.default=F,O};Object.defineProperty(Q,"__esModule",{value:!0}),B(serializer$1);const D=w(value);Q.value=D})(src);class PrincipalEncoder{get name(){return"Principal"}get priority(){return 0}match(B){return B&&B._isPrincipal===!0}encode(B){return src.value.bytes(B.toUint8Array())}}class BufferEncoder{get name(){return"Buffer"}get priority(){return 1}match(B){return B instanceof ArrayBuffer||ArrayBuffer.isView(B)}encode(B){return src.value.bytes(new Uint8Array(B))}}class BigIntEncoder{get name(){return"BigInt"}get priority(){return 1}match(B){return typeof B=="bigint"}encode(B){return B>BigInt(0)?src.value.tagged(2,src.value.bytes(fromHex(B.toString(16)))):src.value.tagged(3,src.value.bytes(fromHex((BigInt("-1")*B).toString(16))))}}const serializer=src.SelfDescribeCborSerializer.withDefaultEncoders(!0);serializer.addEncoder(new PrincipalEncoder);serializer.addEncoder(new BufferEncoder);serializer.addEncoder(new BigIntEncoder);var CborTag;(function(Q){Q[Q.Uint64LittleEndian=71]="Uint64LittleEndian",Q[Q.Semantic=55799]="Semantic"})(CborTag||(CborTag={}));class Uint8ArrayDecoder extends src$1.Decoder{createByteString(B){return concat(...B)}createByteStringFromHeap(B,w){return B===w?new ArrayBuffer(0):new Uint8Array(this._heap.slice(B,w))}}var SubmitRequestType;(function(Q){Q.Call="call"})(SubmitRequestType||(SubmitRequestType={}));BigInt(1e6);BigInt(60*1e3);var RequestStatusResponseStatus;(function(Q){Q.Received="received",Q.Processing="processing",Q.Replied="replied",Q.Rejected="rejected",Q.Unknown="unknown",Q.Done="done"})(RequestStatusResponseStatus||(RequestStatusResponseStatus={}));var ProxyMessageKind;(function(Q){Q.Error="err",Q.GetPrincipal="gp",Q.GetPrincipalResponse="gpr",Q.Query="q",Q.QueryResponse="qr",Q.Call="c",Q.CallResponse="cr",Q.ReadState="rs",Q.ReadStateResponse="rsr",Q.Status="s",Q.StatusResponse="sr"})(ProxyMessageKind||(ProxyMessageKind={}));var decode;(function(){for(var Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B=new Uint8Array(256),w=0;w<Q.length;w++)B[Q.charCodeAt(w)]=w;decode=function(D){var F=D.length*.75,O=D.length,L,U=0,G,q,Y,W;D[D.length-1]==="="&&(F--,D[D.length-2]==="="&&F--);var X=new ArrayBuffer(F),te=new Uint8Array(X);for(L=0;L<O;L+=4)G=B[D.charCodeAt(L)],q=B[D.charCodeAt(L+1)],Y=B[D.charCodeAt(L+2)],W=B[D.charCodeAt(L+3)],te[U++]=G<<2|q>>4,te[U++]=(q&15)<<4|Y>>2,te[U++]=(Y&3)<<6|W&63;return X}})();const wasmBytesBase64="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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIgARBeIAIQNiAAIAIQmgEgAkGAAWokAAtRAQN/IwBBgAFrIgEkACABIAAQXiMAQUBqIgIkACACIAAQkAEgACAAQUBrIgMQrgEgABBDIAMgAhCuASACQUBrJAAgACABEJoBIAFBgAFqJAALJwAgACABEJkBIABBgAFqIAFBgAFqEJkBIABBgAJqIAFBgAJqEJkBCyUBAX8jAEFAaiICJAAgAiABEJABIAIQQyAAIAIQdyACQUBrJAALHgACQCAAQQRqKAIARQ0AIAAoAgAiAEUNACAAEAQLCyABAX8CQCAAKAIEIgFFDQAgAEEIaigCAEUNACABEAQLC4MBACACIANJBEAjAEEwayIAJAAgACACNgIEIAAgAzYCACAAQRxqQQI2AgAgAEEsakEBNgIAIABCAjcCDCAAQYS7wAA2AgggAEEBNgIkIAAgAEEgajYCGCAAIABBBGo2AiggACAANgIgIABBCGpBlLvAABBmAAsgACADNgIEIAAgATYCAAtIAQJ/A0AgAUE4RwRAIAAgAWoiAiACKQMAQgGGNwMAIAFBCGohAQwBCwsgACAAKAI4QQF0IgE2AjggAUH///8PSgRAIAAQHgsLIwAgAiACKAIEQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALIgEBfyMAQfAAayICJAAgAiABEC4gACACEGsgAkHwAGokAAseACAAIAFBA3I2AgQgACABaiIAIAAoAgRBAXI2AgQLFgEBfyAAEHYEfyAAQYABahB2BUEACwsYAQF/IAAQiAEEfyAAQYABahCIAQVBAAsLFQEBfyAAEHYEfyAAQUBrEHYFQQALCxoBAX8gABBWIgEgAEFAaxBWIAFzIAAQdnFzCxgBAX8gABCIAQR/IABBgAJqEIgBBUEACwseACAAEEUgAEGAAmoQRSAAQYAEahBFIABBADYCgAYLHAAgABBFIAAgARCZASAAQYABaiABQYABahCZAQsYACAAIAEgAhByIABBQGsgAUFAayACEHILGgAgAEE4ENABIgBBATYCOCAAIAEQaiAAEFQLFAAgABBCIAAoAgBBfyABdEF/c3ELGQAgAEE4ENABIgAgARBqIAAgASgCODYCOAsZAQF/IAAoAhAiAQR/IAEFIABBFGooAgALCxgAIAAQwQEgAEFAaxDKASAAQYABahDBAQsUACAAEEIgACAAKQMAIAGsfDcDAAsUACAAEEIgACAAKQMAIAGsfTcDAAsYACAAEEUgACABEJkBIABBgAFqIAIQmQELGAAgACABEJkBIABBgAFqIAFBgAFqEJkBCxgAIAAgARCaASAAQYABaiABQYABahCaAQsYACAAEKQBIABBgAFqIgAQpAEgACABEBELFgAgACABEK4BIABBQGsgAUFAaxCuAQsUACAAIAEQdyAAQUBrIAFBQGsQdwsZACAAELYBIABBgAFqELcBIABBgAJqELYBCxkAIAAQrwEgAEGAAmoQrwEgAEGABGoQrwELGQAgABCwASAAQYACahCwASAAQYAEahCwAQsZACAAELIBIABBgAJqEMkBIABBgARqELIBCxIAQQBBGSAAQQF2ayAAQR9GGwsWACAAIAFBAXI2AgQgACABaiABNgIACxYAIAAQRSAAIAEQmQEgAEGAAWoQtgELFgAgAEGAAWoiABCpASAAEDYgABCpAQsQACAAIAFqQQFrQQAgAWtxCw8AIABBQGsiABBDIAAQQgsUACAAIAEQmQEgAEGAAWogAhCZAQsSACAAIAEQESAAQYABaiABEBELFAAgACABEKoBIABBgAFqIAEQqgELCwAgAQRAIAAQBAsLDQAgABBCIABBQGsQQgsRACAAIAEQSiAAQUBrIAEQSgsRACAAIAEQNCAAQUBrIAEQNAu+BQEHfwJ/AkACQEGAgHxBCEEIEKMBQRRBCBCjAWpBEEEIEKMBamtBd3FBA2siAkEAQRBBCBCjAUECdGsiBCACIARJGyABTQ0AQRAgAUEEakEQQQgQowFBBWsgAUsbQQgQowEhAiAAENUBIgQgBBDLASIFENIBIQMCQAJAAkACQAJAAkACQCAEEMQBRQRAIAIgBU0NASADQfi+wAAoAgBGDQIgA0H0vsAAKAIARg0DIAMQvAENByADEMsBIgYgBWoiByACSQ0HIAcgAmshBSAGQYACSQ0EIAMQFwwFCyAEEMsBIQMgAkGAAkkNBiADIAJrQYGACEkgAkEEaiADTXENBSAEKAIAGiACQR9qQYCABBCjARoMBgtBEEEIEKMBIAUgAmsiA0sNBCAEIAIQ0gEhBSAEIAIQcyAFIAMQcyAFIAMQDQwEC0HwvsAAKAIAIAVqIgUgAk0NBCAEIAIQ0gEhAyAEIAIQcyADIAUgAmsiAkEBcjYCBEHwvsAAIAI2AgBB+L7AACADNgIADAMLQey+wAAoAgAgBWoiBSACSQ0DAkBBEEEIEKMBIAUgAmsiA0sEQCAEIAUQc0EAIQNBACEFDAELIAQgAhDSASIFIAMQ0gEhBiAEIAIQcyAFIAMQoAEgBiAGKAIEQX5xNgIEC0H0vsAAIAU2AgBB7L7AACADNgIADAILIANBDGooAgAiCCADQQhqKAIAIgNHBEAgAyAINgIMIAggAzYCCAwBC0Hcu8AAQdy7wAAoAgBBfiAGQQN2d3E2AgALQRBBCBCjASAFTQRAIAQgAhDSASEDIAQgAhBzIAMgBRBzIAMgBRANDAELIAQgBxBzCyAEDQILIAEQACICRQ0AIAIgACABIAQQywFBeEF8IAQQxAEbaiICIAEgAkkbENEBIAAQBAwCC0EADAELIAQQxAEaIAQQ1AELCw8AIABBAXQiAEEAIABrcgsSACAAIAEQaiAAIAEoAjg2AjgLEAAgABC1ASAAQYABahC1AQsQACAAEKkBIABBgAFqEKkBCxAAIAAQtgEgAEGAAWoQtgELDwAgAEGAAWoQNiAAELABCxAAIAAQuAEgAEGAAWoQuAELDwAgACgCACAAKAIEEKgBCw0AIAAQHiAAQUBrEB4LDwAgABDBASAAQUBrEMEBCw8AIAAQygEgAEFAaxDBAQsPACAAEIIBIABBQGsQggELgwMBA38CfwJAAkACQAJAIAFBCU8EQEEQQQgQowEgAUsNAQwCCyAAEAAhAwwCC0EQQQgQowEhAQtBgIB8QQhBCBCjAUEUQQgQowFqQRBBCBCjAWprQXdxQQNrIgRBAEEQQQgQowFBAnRrIgIgAiAESxsgAWsgAE0NACABQRAgAEEEakEQQQgQowFBBWsgAEsbQQgQowEiBGpBEEEIEKMBakEEaxAAIgJFDQAgAhDVASEAAkAgAUEBayIDIAJxRQRAIAAhAQwBCyACIANqQQAgAWtxENUBIQJBEEEIEKMBIQMgABDLASACQQAgASACIABrIANLG2oiASAAayICayEDIAAQxAFFBEAgASADEHMgACACEHMgACACEA0MAQsgACgCACEAIAEgAzYCBCABIAAgAmo2AgALIAEQxAENASABEMsBIgJBEEEIEKMBIARqTQ0BIAEgBBDSASEAIAEgBBBzIAAgAiAEayIEEHMgACAEEA0MAQsgAwwBCyABENQBIAEQxAEaCwuOBAEFfyAAKAIAIQAjAEEQayIEJAACQAJ/AkAgAUGAAU8EQCAEQQA2AgwgAUGAEE8NASAEIAFBP3FBgAFyOgANIAQgAUEGdkHAAXI6AAxBAgwCCyAAKAIIIgIgAEEEaigCAEYEQCMAQSBrIgMkAAJAAkAgAiACQQFqIgVLDQAgAEEEaigCACICQQF0IgYgBSAFIAZJGyIFQQggBUEISxshBQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgBSADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiAFNgIAIAAgAjYCACADQSBqJAAMAQsQZQALIAAoAgghAgsgACACQQFqNgIIIAAoAgAgAmogAToAAAwCCyABQYCABE8EQCAEIAFBP3FBgAFyOgAPIAQgAUESdkHwAXI6AAwgBCABQQZ2QT9xQYABcjoADiAEIAFBDHZBP3FBgAFyOgANQQQMAQsgBCABQT9xQYABcjoADiAEIAFBDHZB4AFyOgAMIAQgAUEGdkE/cUGAAXI6AA1BAwshASABIABBBGooAgAgAEEIaiIDKAIAIgJrSwRAIAAgAiABECIgAygCACECCyAAKAIAIAJqIARBDGogARDRARogAyABIAJqNgIACyAEQRBqJABBAAsTACAAQZS3wAA2AgQgACABNgIACw0AIAAtAARBAnFBAXYL5QYCDH8CfiMAQbAcayIDJAACQAJAAkAgAhBXDQAgARCGAQ0AIANBCGoQZyADQcgBaiIFIAIQXQNAIARBOEcEQCAEIAVqIgYgBikDACACIARqKQMAhDcDACAEQQhqIQQMAQsLIAUQKiEHQQAhBCADQYACakE4ENABGiADQbgCakE4ENABGiADQfACaiIFEGcgA0GwBGoQZyADQfARaiIIEGcgA0GwE2oiCRBnIANB8BRqIgoQZyADQbAWaiILEGcgA0HwF2oiDBBnIANBsBlqIg0QZyADQfAaaiIGEGcgA0GwEGoQZyADQfAFaiIOIAhBwAEQ0QEaIANBsAdqIAlBwAEQ0QEaIANB8AhqIApBwAEQ0QEaIANBsApqIAtBwAEQ0QEaIANB8AtqIAxBwAEQ0QEaIANBsA1qIA1BwAEQ0QEaIANB8A5qIAZBwAEQ0QEaIAZB5wAQ0AEaIAUgARB4IAUQFCAOIAEQeAwBCyAAEGcMAQsDQCAEQcAKRwRAIANBsARqIgUgA0HwBWogBGoiBhB4IAZBwAFqIgYgBRB4IAYgA0HwAmoQCSAEQcABaiEEDAELCyADQbgCaiIEIAIQaiADKQO4AiEPIARBARCTASAEEEIgAykDuAIhECADQYACaiICIAQQaiACQQEQkwEgAhBCIAQgAiAPQgKBpxAwIANB8AJqIgQgASAQQgKBpxBuIAdBA2oiBkECdiIBQQFqIQIgA0GwBGogBBB4QQAhBAJAAkADQCADQbgCakEFEI8BIQUgAiAERgRAIAZBmANPDQIgA0HwGmogAmogBToAACADQQhqIANB8AVqIAVBGHRBGHUQHQwDCyAEQecARwRAIANB8BpqIARqIAVBEGsiBzoAACADQbgCaiIFIAdBGHRBGHUQlAEgBRBCIAVBBBAsIARBAWohBAwBCwtB5wBB5wBBuIHAABA7AAsgAkHnAEHIgcAAEDsACwNAIAFBf0cEQCADQfACaiIEIANB8AVqIANB8BpqIAFqLAAAEB0gAUEBayEBIANBCGoiAhAUIAIQFCACEBQgAhAUIAIgBBAJDAELCyMAQcABayIBJAAgARBnIAEgA0GwBGoQeCABEKQBIANBCGoiAiABEAkgAUHAAWokACAAIAJBwAEQ0QEaCyADQbAcaiQAC1ABAX8gAEE4ENABIQACQANAIAJBMEYNASAAQQgQKCACQTBHBEAgACAAKQMAIAEgAmoxAAB8NwMAIAJBAWohAgwBCwsgAkEwQaSbwAAQOwALCw0AIAAQNiAAIAEQmgELDAAgACABEGogABBUCw0AIAAQcSAAQQE2AjgLDAAgABBDIAAgARB3CwoAQQAgAGsgAHELCwAgAC0ABEEDcUULDAAgACABQQNyNgIECw0AIAAoAgAgACgCBGoLDgAgACgCABoDQAwACwALgQgCCX8CfiAANQIAIQsjAEEwayIGJABBJyEAAkAgC0KQzgBUBEAgCyEMDAELA0AgBkEJaiAAaiICQQRrIAsgC0KQzgCAIgxCkM4Afn2nIgNB//8DcUHkAG4iBEEBdEHouMAAai8AADsAACACQQJrIAMgBEHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAAgAEEEayEAIAtC/8HXL1YgDCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";decode(wasmBytesBase64);fromHex("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");var CanisterInstallMode;(function(Q){Q.Install="install",Q.Reinstall="reinstall",Q.Upgrade="upgrade"})(CanisterInstallMode||(CanisterInstallMode={}));var mainScreenOpen=!1;class mintingScreen extends HTMLElement{constructor(){super();Ke(this,"toggleNftScreen",()=>{var w=this.shadow.getElementById("mainScreen"),D=this.shadow.getElementById("svgBox"),F=document.getElementById("universe"),O=document.getElementById("getUniMenu").shadowRoot;if(w.style.transition="1s all",D.style.display="block",D.style.transition=".5s all",F.style.transition="1s all",mainScreenOpen===!1){F.style.filter="blur(5px)",O.getElementById("uniMenu").style.filter="blur(10px)",document.getElementById("selection").style.filter="blur(10px)",w.style.display="grid",setTimeout(()=>{w.style.opacity="100%",mainScreenOpen=!0},200);return}else{D.style.display="none",O.getElementById("uniMenu").style.filter="blur(0px)",document.getElementById("selection").style.filter="blur(0px)",O.getElementById("nftShop").style.opacity="80%",F.style.filter="blur(0px)",w.style.opacity="0%",setTimeout(()=>{w.style.display="none",mainScreenOpen=!1},1e3);return}});Ke(this,"goGetPlug",()=>{var w;(w=window.open("https://plugwallet.ooo/","_blank"))==null||w.focus()});Ke(this,"reacc",()=>{var w=this.shadow.getElementById("videoM");w.style.transition="5s all",w.play(),w.style.display="block",setTimeout(()=>{w.style.opacity="100%"},500),setTimeout(()=>{document.getElementById("getUniMenu").toggleMenu(),document.getElementById("getNfts").toggleNftScreen()},5e3),w.onended=function(){document.getElementById("updatesModal").style.display="block",w.style.transition="1s all",w.style.opacity="0%",setTimeout(()=>{w.style.display="none"},1e3)}});Ke(this,"reload",()=>{});Ke(this,"pillSelection",w=>{var D=String(w.target.id),F=this.shadow.querySelectorAll(".pills"),O=this.shadow.getElementById("desc"),L=this.shadow.getElementById("cost"),U=this.shadow.getElementById("button"),G=this.shadow.getElementById("mintButton"),q=this.shadow.getElementById("mainScreen");q.style.transition="1s all";var Y={red:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png",black:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png",blue:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"};switch(D){case"red":F[0].src=Y.blue,F[1].src=Y.red,F[2].src=Y.black,F[0].setAttribute("id","blue"),F[1].setAttribute("id","red"),F[2].setAttribute("id","black"),O.innerHTML="YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.",L.innerHTML="IT\u2019LL COST YOU 10 [ICP].",U.innerHTML="UNAVAILABLE",U.style.color="#ff002d",G.style.backgroundColor="black",G.style.border="1px solid black",q.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",q.style.backgroundColor="rgba(145,212,202,.4)";break;case"black":F[0].src=Y.red,F[1].src=Y.black,F[2].src=Y.blue,F[0].setAttribute("id","red"),F[1].setAttribute("id","black"),F[2].setAttribute("id","blue"),O.innerHTML="A GIFT FROM THE ORACLE'S",L.innerHTML="IT WONT COST YOU A THING.",U.innerHTML="TAKE IT",this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this)),U.style.color="",G.style.border="",G.style.backgroundColor="",q.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",q.style.backgroundColor="rgba(0,0,0,.4)";break;case"blue":F[0].src=Y.black,F[1].src=Y.blue,F[2].src=Y.red,F[0].setAttribute("id","black"),F[1].setAttribute("id","blue"),F[2].setAttribute("id","red"),O.innerHTML="THIS IS WHAT YOU'LL NEED TO REMEMBER.",L.innerHTML="IT\u2019LL COST YOU 5 [ICP].",U.innerHTML="UNAVAILABLE",U.style.color="#ff002d",G.style.backgroundColor="black",G.style.border="none",q.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",q.style.backgroundColor="rgba(164,219,251,.4)";break}});this.shadow=this.attachShadow({mode:"open"})}get nft(){return this.getAttribute("mint")}set nft(w){this.setAttribute("mint",w)}static get observedAttributes(){return["mint"]}attributeChangedCallback(w,D,F){w==="mint"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("svgBox").addEventListener("click",this.toggleNftScreen.bind(this)),this.shadow.querySelectorAll(".pills").forEach(w=>{w.addEventListener("click",this.pillSelection)}),this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this))}render(){this.shadow.innerHTML=`
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
              float: right;
              margin-right: 20%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-size: 20px;
              color: var(--accent);
              border: 1px solid var(--accent);
              transition: .5s all;
              border-radius: 5px;
              cursor: pointer;
            }
            #mintButton:hover {
              font-family: "BS-B";
              background-color: var(--accent);
              color: black !important;
              letter-spacing: 2px;
              font-size: 22px;
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
              cursor: pointer;
              transition: .5s all;
              transform-origin: bottom;
            }
            #svgBox:hover {
              transform: scale(1.2);
            }
            #svgBox #arrow {
              height: 100%;
              transition: .5s all;
              font-size: 4.5em;
              margin-bottom: 2%;
            }
            #svgBox:hover > span {
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
              margin-top: 20%;
            }
            .pills {
              transition: .5s all;
            }
            .pills:hover {
              transform: scale(1.1);
              opacity: 100% !important;
            }
         </style>
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
                    <span id="desc">A GIFT FROM THE ORACLE'S</span>
                    <span class="active" id="cost">IT WONT COST YOU A THING.</span>
                    <span class="spacer"></span>
                  </div>
                  <div id="buttons">
                    <div id="mintButton">
                      <span id="button">TAKE IT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div id="uiIcon">
         <div id="svgBox">
          <div id="arrow">&#8682;</div>
          <div id="exit">Exit</div>
         </div>
        </div>
         `}}customElements.define("mint-screen",mintingScreen);/*!
 * strings: 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _trimExp=/(?:^\s+|\s+$)/g,emojiExp=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function getText(Q){var B=Q.nodeType,w="";if(B===1||B===9||B===11){if(typeof Q.textContent=="string")return Q.textContent;for(Q=Q.firstChild;Q;Q=Q.nextSibling)w+=getText(Q)}else if(B===3||B===4)return Q.nodeValue;return w}function splitInnerHTML(Q,B,w,D){for(var F=Q.firstChild,O=[],L;F;)F.nodeType===3?(L=(F.nodeValue+"").replace(/^\n+/g,""),D||(L=L.replace(/\s+/g," ")),O.push.apply(O,emojiSafeSplit(L,B,w,D))):(F.nodeName+"").toLowerCase()==="br"?O[O.length-1]+="<br>":O.push(F.outerHTML),F=F.nextSibling;for(L=O.length;L--;)O[L]==="&"&&O.splice(L,1,"&amp;");return O}function emojiSafeSplit(Q,B,w,D){if(Q+="",w&&(Q=Q.trim?Q.trim():Q.replace(_trimExp,"")),B&&B!=="")return Q.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(B);for(var F=[],O=Q.length,L=0,U,G;L<O;L++)G=Q.charAt(L),(G.charCodeAt(0)>=55296&&G.charCodeAt(0)<=56319||Q.charCodeAt(L+1)>=65024&&Q.charCodeAt(L+1)<=65039)&&(U=((Q.substr(L,12).split(emojiExp)||[])[1]||"").length||2,G=Q.substr(L,U),F.emoji=1,L+=U-1),F.push(G===">"?"&gt;":G==="<"?"&lt;":D&&G===" "&&(Q.charAt(L-1)===" "||Q.charAt(L+1)===" ")?"&nbsp;":G);return F}/*!
 * TextPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gsap,_tempDiv,_getGSAP=function Q(){return gsap||typeof window!="undefined"&&(gsap=window.gsap)&&gsap.registerPlugin&&gsap},TextPlugin={version:"3.11.4",name:"text",init:function Q(B,w,D){typeof w!="object"&&(w={value:w});var F=B.nodeName.toUpperCase(),O=this,L=w,U=L.newClass,G=L.oldClass,q=L.preserveSpaces,Y=L.rtl,W=O.delimiter=w.delimiter||"",X=O.fillChar=w.fillChar||(w.padSpace?"&nbsp;":""),te,ae,ie,ce,he,pe,Be,Ie;if(O.svg=B.getBBox&&(F==="TEXT"||F==="TSPAN"),!("innerHTML"in B)&&!O.svg)return!1;if(O.target=B,!("value"in w)){O.text=O.original=[""];return}for(ie=splitInnerHTML(B,W,!1,q),_tempDiv||(_tempDiv=document.createElement("div")),_tempDiv.innerHTML=w.value,ae=splitInnerHTML(_tempDiv,W,!1,q),O.from=D._from,(O.from||Y)&&!(Y&&O.from)&&(F=ie,ie=ae,ae=F),O.hasClass=!!(U||G),O.newClass=Y?G:U,O.oldClass=Y?U:G,F=ie.length-ae.length,te=F<0?ie:ae,F<0&&(F=-F);--F>-1;)te.push(X);if(w.type==="diff"){for(ce=0,he=[],pe=[],Be="",F=0;F<ae.length;F++)Ie=ae[F],Ie===ie[F]?Be+=Ie:(he[ce]=Be+Ie,pe[ce++]=Be+ie[F],Be="");ae=he,ie=pe,Be&&(ae.push(Be),ie.push(Be))}w.speed&&D.duration(Math.min(.05/w.speed*te.length,w.maxDuration||9999)),O.rtl=Y,O.original=ie,O.text=ae,O._props.push("text")},render:function Q(B,w){B>1?B=1:B<0&&(B=0),w.from&&(B=1-B);var D=w.text,F=w.hasClass,O=w.newClass,L=w.oldClass,U=w.delimiter,G=w.target,q=w.fillChar,Y=w.original,W=w.rtl,X=D.length,te=(W?1-B:B)*X+.5|0,ae,ie,ce;F&&B?(ae=O&&te,ie=L&&te!==X,ce=(ae?"<span class='"+O+"'>":"")+D.slice(0,te).join(U)+(ae?"</span>":"")+(ie?"<span class='"+L+"'>":"")+U+Y.slice(te).join(U)+(ie?"</span>":"")):ce=D.slice(0,te).join(U)+U+Y.slice(te).join(U),w.svg?G.textContent=ce:G.innerHTML=q==="&nbsp;"&&~ce.indexOf("  ")?ce.split("  ").join("&nbsp;&nbsp;"):ce}};TextPlugin.splitInnerHTML=splitInnerHTML;TextPlugin.emojiSafeSplit=emojiSafeSplit;TextPlugin.getText=getText;_getGSAP()&&gsap.registerPlugin(TextPlugin);var dist={},api={},axios$2={exports:{}},bind$2=function Q(B,w){return function(){for(var F=new Array(arguments.length),O=0;O<F.length;O++)F[O]=arguments[O];return B.apply(w,F)}},bind$1=bind$2,toString=Object.prototype.toString;function isArray(Q){return Array.isArray(Q)}function isUndefined(Q){return typeof Q=="undefined"}function isBuffer(Q){return Q!==null&&!isUndefined(Q)&&Q.constructor!==null&&!isUndefined(Q.constructor)&&typeof Q.constructor.isBuffer=="function"&&Q.constructor.isBuffer(Q)}function isArrayBuffer(Q){return toString.call(Q)==="[object ArrayBuffer]"}function isFormData(Q){return toString.call(Q)==="[object FormData]"}function isArrayBufferView(Q){var B;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?B=ArrayBuffer.isView(Q):B=Q&&Q.buffer&&isArrayBuffer(Q.buffer),B}function isString(Q){return typeof Q=="string"}function isNumber(Q){return typeof Q=="number"}function isObject(Q){return Q!==null&&typeof Q=="object"}function isPlainObject(Q){if(toString.call(Q)!=="[object Object]")return!1;var B=Object.getPrototypeOf(Q);return B===null||B===Object.prototype}function isDate(Q){return toString.call(Q)==="[object Date]"}function isFile(Q){return toString.call(Q)==="[object File]"}function isBlob(Q){return toString.call(Q)==="[object Blob]"}function isFunction(Q){return toString.call(Q)==="[object Function]"}function isStream(Q){return isObject(Q)&&isFunction(Q.pipe)}function isURLSearchParams(Q){return toString.call(Q)==="[object URLSearchParams]"}function trim(Q){return Q.trim?Q.trim():Q.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(Q,B){if(!(Q===null||typeof Q=="undefined"))if(typeof Q!="object"&&(Q=[Q]),isArray(Q))for(var w=0,D=Q.length;w<D;w++)B.call(null,Q[w],w,Q);else for(var F in Q)Object.prototype.hasOwnProperty.call(Q,F)&&B.call(null,Q[F],F,Q)}function merge(){var Q={};function B(F,O){isPlainObject(Q[O])&&isPlainObject(F)?Q[O]=merge(Q[O],F):isPlainObject(F)?Q[O]=merge({},F):isArray(F)?Q[O]=F.slice():Q[O]=F}for(var w=0,D=arguments.length;w<D;w++)forEach(arguments[w],B);return Q}function extend(Q,B,w){return forEach(B,function(F,O){w&&typeof F=="function"?Q[O]=bind$1(F,w):Q[O]=F}),Q}function stripBOM(Q){return Q.charCodeAt(0)===65279&&(Q=Q.slice(1)),Q}var utils$e={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM},utils$d=utils$e;function encode(Q){return encodeURIComponent(Q).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function Q(B,w,D){if(!w)return B;var F;if(D)F=D(w);else if(utils$d.isURLSearchParams(w))F=w.toString();else{var O=[];utils$d.forEach(w,function(G,q){G===null||typeof G=="undefined"||(utils$d.isArray(G)?q=q+"[]":G=[G],utils$d.forEach(G,function(W){utils$d.isDate(W)?W=W.toISOString():utils$d.isObject(W)&&(W=JSON.stringify(W)),O.push(encode(q)+"="+encode(W))}))}),F=O.join("&")}if(F){var L=B.indexOf("#");L!==-1&&(B=B.slice(0,L)),B+=(B.indexOf("?")===-1?"?":"&")+F}return B},utils$c=utils$e;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function Q(B,w,D){return this.handlers.push({fulfilled:B,rejected:w,synchronous:D?D.synchronous:!1,runWhen:D?D.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function Q(B){this.handlers[B]&&(this.handlers[B]=null)};InterceptorManager$1.prototype.forEach=function Q(B){utils$c.forEach(this.handlers,function(D){D!==null&&B(D)})};var InterceptorManager_1=InterceptorManager$1,utils$b=utils$e,normalizeHeaderName$1=function Q(B,w){utils$b.forEach(B,function(F,O){O!==w&&O.toUpperCase()===w.toUpperCase()&&(B[w]=F,delete B[O])})},enhanceError$2=function Q(B,w,D,F,O){return B.config=w,D&&(B.code=D),B.request=F,B.response=O,B.isAxiosError=!0,B.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},B},transitional={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},enhanceError$1=enhanceError$2,createError$2=function Q(B,w,D,F,O){var L=new Error(B);return enhanceError$1(L,w,D,F,O)},createError$1=createError$2,settle$1=function Q(B,w,D){var F=D.config.validateStatus;!D.status||!F||F(D.status)?B(D):w(createError$1("Request failed with status code "+D.status,D.config,null,D.request,D))},utils$a=utils$e,cookies$1=utils$a.isStandardBrowserEnv()?function Q(){return{write:function(w,D,F,O,L,U){var G=[];G.push(w+"="+encodeURIComponent(D)),utils$a.isNumber(F)&&G.push("expires="+new Date(F).toGMTString()),utils$a.isString(O)&&G.push("path="+O),utils$a.isString(L)&&G.push("domain="+L),U===!0&&G.push("secure"),document.cookie=G.join("; ")},read:function(w){var D=document.cookie.match(new RegExp("(^|;\\s*)("+w+")=([^;]*)"));return D?decodeURIComponent(D[3]):null},remove:function(w){this.write(w,"",Date.now()-864e5)}}}():function Q(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function Q(B){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(B)},combineURLs$1=function Q(B,w){return w?B.replace(/\/+$/,"")+"/"+w.replace(/^\/+/,""):B},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function Q(B,w){return B&&!isAbsoluteURL(w)?combineURLs(B,w):w},utils$9=utils$e,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function Q(B){var w={},D,F,O;return B&&utils$9.forEach(B.split(`
`),function(U){if(O=U.indexOf(":"),D=utils$9.trim(U.substr(0,O)).toLowerCase(),F=utils$9.trim(U.substr(O+1)),D){if(w[D]&&ignoreDuplicateOf.indexOf(D)>=0)return;D==="set-cookie"?w[D]=(w[D]?w[D]:[]).concat([F]):w[D]=w[D]?w[D]+", "+F:F}}),w},utils$8=utils$e,isURLSameOrigin$1=utils$8.isStandardBrowserEnv()?function Q(){var B=/(msie|trident)/i.test(navigator.userAgent),w=document.createElement("a"),D;function F(O){var L=O;return B&&(w.setAttribute("href",L),L=w.href),w.setAttribute("href",L),{href:w.href,protocol:w.protocol?w.protocol.replace(/:$/,""):"",host:w.host,search:w.search?w.search.replace(/^\?/,""):"",hash:w.hash?w.hash.replace(/^#/,""):"",hostname:w.hostname,port:w.port,pathname:w.pathname.charAt(0)==="/"?w.pathname:"/"+w.pathname}}return D=F(window.location.href),function(L){var U=utils$8.isString(L)?F(L):L;return U.protocol===D.protocol&&U.host===D.host}}():function Q(){return function(){return!0}}();function Cancel$3(Q){this.message=Q}Cancel$3.prototype.toString=function Q(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$3.prototype.__CANCEL__=!0;var Cancel_1=Cancel$3,utils$7=utils$e,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,transitionalDefaults$1=transitional,Cancel$2=Cancel_1,xhr=function Q(B){return new Promise(function(D,F){var O=B.data,L=B.headers,U=B.responseType,G;function q(){B.cancelToken&&B.cancelToken.unsubscribe(G),B.signal&&B.signal.removeEventListener("abort",G)}utils$7.isFormData(O)&&delete L["Content-Type"];var Y=new XMLHttpRequest;if(B.auth){var W=B.auth.username||"",X=B.auth.password?unescape(encodeURIComponent(B.auth.password)):"";L.Authorization="Basic "+btoa(W+":"+X)}var te=buildFullPath(B.baseURL,B.url);Y.open(B.method.toUpperCase(),buildURL$1(te,B.params,B.paramsSerializer),!0),Y.timeout=B.timeout;function ae(){if(!!Y){var ce="getAllResponseHeaders"in Y?parseHeaders(Y.getAllResponseHeaders()):null,he=!U||U==="text"||U==="json"?Y.responseText:Y.response,pe={data:he,status:Y.status,statusText:Y.statusText,headers:ce,config:B,request:Y};settle(function(Ie){D(Ie),q()},function(Ie){F(Ie),q()},pe),Y=null}}if("onloadend"in Y?Y.onloadend=ae:Y.onreadystatechange=function(){!Y||Y.readyState!==4||Y.status===0&&!(Y.responseURL&&Y.responseURL.indexOf("file:")===0)||setTimeout(ae)},Y.onabort=function(){!Y||(F(createError("Request aborted",B,"ECONNABORTED",Y)),Y=null)},Y.onerror=function(){F(createError("Network Error",B,null,Y)),Y=null},Y.ontimeout=function(){var he=B.timeout?"timeout of "+B.timeout+"ms exceeded":"timeout exceeded",pe=B.transitional||transitionalDefaults$1;B.timeoutErrorMessage&&(he=B.timeoutErrorMessage),F(createError(he,B,pe.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",Y)),Y=null},utils$7.isStandardBrowserEnv()){var ie=(B.withCredentials||isURLSameOrigin(te))&&B.xsrfCookieName?cookies.read(B.xsrfCookieName):void 0;ie&&(L[B.xsrfHeaderName]=ie)}"setRequestHeader"in Y&&utils$7.forEach(L,function(he,pe){typeof O=="undefined"&&pe.toLowerCase()==="content-type"?delete L[pe]:Y.setRequestHeader(pe,he)}),utils$7.isUndefined(B.withCredentials)||(Y.withCredentials=!!B.withCredentials),U&&U!=="json"&&(Y.responseType=B.responseType),typeof B.onDownloadProgress=="function"&&Y.addEventListener("progress",B.onDownloadProgress),typeof B.onUploadProgress=="function"&&Y.upload&&Y.upload.addEventListener("progress",B.onUploadProgress),(B.cancelToken||B.signal)&&(G=function(ce){!Y||(F(!ce||ce&&ce.type?new Cancel$2("canceled"):ce),Y.abort(),Y=null)},B.cancelToken&&B.cancelToken.subscribe(G),B.signal&&(B.signal.aborted?G():B.signal.addEventListener("abort",G))),O||(O=null),Y.send(O)})},utils$6=utils$e,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,transitionalDefaults=transitional,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(Q,B){!utils$6.isUndefined(Q)&&utils$6.isUndefined(Q["Content-Type"])&&(Q["Content-Type"]=B)}function getDefaultAdapter(){var Q;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(Q=xhr),Q}function stringifySafely(Q,B,w){if(utils$6.isString(Q))try{return(B||JSON.parse)(Q),utils$6.trim(Q)}catch(D){if(D.name!=="SyntaxError")throw D}return(w||JSON.stringify)(Q)}var defaults$3={transitional:transitionalDefaults,adapter:getDefaultAdapter(),transformRequest:[function Q(B,w){return normalizeHeaderName(w,"Accept"),normalizeHeaderName(w,"Content-Type"),utils$6.isFormData(B)||utils$6.isArrayBuffer(B)||utils$6.isBuffer(B)||utils$6.isStream(B)||utils$6.isFile(B)||utils$6.isBlob(B)?B:utils$6.isArrayBufferView(B)?B.buffer:utils$6.isURLSearchParams(B)?(setContentTypeIfUnset(w,"application/x-www-form-urlencoded;charset=utf-8"),B.toString()):utils$6.isObject(B)||w&&w["Content-Type"]==="application/json"?(setContentTypeIfUnset(w,"application/json"),stringifySafely(B)):B}],transformResponse:[function Q(B){var w=this.transitional||defaults$3.transitional,D=w&&w.silentJSONParsing,F=w&&w.forcedJSONParsing,O=!D&&this.responseType==="json";if(O||F&&utils$6.isString(B)&&B.length)try{return JSON.parse(B)}catch(L){if(O)throw L.name==="SyntaxError"?enhanceError(L,this,"E_JSON_PARSE"):L}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function Q(B){return B>=200&&B<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils$6.forEach(["delete","get","head"],function Q(B){defaults$3.headers[B]={}});utils$6.forEach(["post","put","patch"],function Q(B){defaults$3.headers[B]=utils$6.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$5=utils$e,defaults$2=defaults_1,transformData$1=function Q(B,w,D){var F=this||defaults$2;return utils$5.forEach(D,function(L){B=L.call(F,B,w)}),B},isCancel$1=function Q(B){return!!(B&&B.__CANCEL__)},utils$4=utils$e,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1,Cancel$1=Cancel_1;function throwIfCancellationRequested(Q){if(Q.cancelToken&&Q.cancelToken.throwIfRequested(),Q.signal&&Q.signal.aborted)throw new Cancel$1("canceled")}var dispatchRequest$1=function Q(B){throwIfCancellationRequested(B),B.headers=B.headers||{},B.data=transformData.call(B,B.data,B.headers,B.transformRequest),B.headers=utils$4.merge(B.headers.common||{},B.headers[B.method]||{},B.headers),utils$4.forEach(["delete","get","head","post","put","patch","common"],function(F){delete B.headers[F]});var w=B.adapter||defaults$1.adapter;return w(B).then(function(F){return throwIfCancellationRequested(B),F.data=transformData.call(B,F.data,F.headers,B.transformResponse),F},function(F){return isCancel(F)||(throwIfCancellationRequested(B),F&&F.response&&(F.response.data=transformData.call(B,F.response.data,F.response.headers,B.transformResponse))),Promise.reject(F)})},utils$3=utils$e,mergeConfig$2=function Q(B,w){w=w||{};var D={};function F(Y,W){return utils$3.isPlainObject(Y)&&utils$3.isPlainObject(W)?utils$3.merge(Y,W):utils$3.isPlainObject(W)?utils$3.merge({},W):utils$3.isArray(W)?W.slice():W}function O(Y){if(utils$3.isUndefined(w[Y])){if(!utils$3.isUndefined(B[Y]))return F(void 0,B[Y])}else return F(B[Y],w[Y])}function L(Y){if(!utils$3.isUndefined(w[Y]))return F(void 0,w[Y])}function U(Y){if(utils$3.isUndefined(w[Y])){if(!utils$3.isUndefined(B[Y]))return F(void 0,B[Y])}else return F(void 0,w[Y])}function G(Y){if(Y in w)return F(B[Y],w[Y]);if(Y in B)return F(void 0,B[Y])}var q={url:L,method:L,data:L,baseURL:U,transformRequest:U,transformResponse:U,paramsSerializer:U,timeout:U,timeoutMessage:U,withCredentials:U,adapter:U,responseType:U,xsrfCookieName:U,xsrfHeaderName:U,onUploadProgress:U,onDownloadProgress:U,decompress:U,maxContentLength:U,maxBodyLength:U,transport:U,httpAgent:U,httpsAgent:U,cancelToken:U,socketPath:U,responseEncoding:U,validateStatus:G};return utils$3.forEach(Object.keys(B).concat(Object.keys(w)),function(W){var X=q[W]||O,te=X(W);utils$3.isUndefined(te)&&X!==G||(D[W]=te)}),D},data={version:"0.26.1"},VERSION=data.version,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(Q,B){validators$1[Q]=function(D){return typeof D===Q||"a"+(B<1?"n ":" ")+Q}});var deprecatedWarnings={};validators$1.transitional=function Q(B,w,D){function F(O,L){return"[Axios v"+VERSION+"] Transitional option '"+O+"'"+L+(D?". "+D:"")}return function(O,L,U){if(B===!1)throw new Error(F(L," has been removed"+(w?" in "+w:"")));return w&&!deprecatedWarnings[L]&&(deprecatedWarnings[L]=!0,console.warn(F(L," has been deprecated since v"+w+" and will be removed in the near future"))),B?B(O,L,U):!0}};function assertOptions(Q,B,w){if(typeof Q!="object")throw new TypeError("options must be an object");for(var D=Object.keys(Q),F=D.length;F-- >0;){var O=D[F],L=B[O];if(L){var U=Q[O],G=U===void 0||L(U,O,Q);if(G!==!0)throw new TypeError("option "+O+" must be "+G);continue}if(w!==!0)throw Error("Unknown option "+O)}}var validator$1={assertOptions,validators:validators$1},utils$2=utils$e,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(Q){this.defaults=Q,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function Q(B,w){typeof B=="string"?(w=w||{},w.url=B):w=B||{},w=mergeConfig$1(this.defaults,w),w.method?w.method=w.method.toLowerCase():this.defaults.method?w.method=this.defaults.method.toLowerCase():w.method="get";var D=w.transitional;D!==void 0&&validator.assertOptions(D,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1);var F=[],O=!0;this.interceptors.request.forEach(function(te){typeof te.runWhen=="function"&&te.runWhen(w)===!1||(O=O&&te.synchronous,F.unshift(te.fulfilled,te.rejected))});var L=[];this.interceptors.response.forEach(function(te){L.push(te.fulfilled,te.rejected)});var U;if(!O){var G=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(G,F),G=G.concat(L),U=Promise.resolve(w);G.length;)U=U.then(G.shift(),G.shift());return U}for(var q=w;F.length;){var Y=F.shift(),W=F.shift();try{q=Y(q)}catch(X){W(X);break}}try{U=dispatchRequest(q)}catch(X){return Promise.reject(X)}for(;L.length;)U=U.then(L.shift(),L.shift());return U};Axios$1.prototype.getUri=function Q(B){return B=mergeConfig$1(this.defaults,B),buildURL(B.url,B.params,B.paramsSerializer).replace(/^\?/,"")};utils$2.forEach(["delete","get","head","options"],function Q(B){Axios$1.prototype[B]=function(w,D){return this.request(mergeConfig$1(D||{},{method:B,url:w,data:(D||{}).data}))}});utils$2.forEach(["post","put","patch"],function Q(B){Axios$1.prototype[B]=function(w,D,F){return this.request(mergeConfig$1(F||{},{method:B,url:w,data:D}))}});var Axios_1=Axios$1,Cancel=Cancel_1;function CancelToken(Q){if(typeof Q!="function")throw new TypeError("executor must be a function.");var B;this.promise=new Promise(function(F){B=F});var w=this;this.promise.then(function(D){if(!!w._listeners){var F,O=w._listeners.length;for(F=0;F<O;F++)w._listeners[F](D);w._listeners=null}}),this.promise.then=function(D){var F,O=new Promise(function(L){w.subscribe(L),F=L}).then(D);return O.cancel=function(){w.unsubscribe(F)},O},Q(function(F){w.reason||(w.reason=new Cancel(F),B(w.reason))})}CancelToken.prototype.throwIfRequested=function Q(){if(this.reason)throw this.reason};CancelToken.prototype.subscribe=function Q(B){if(this.reason){B(this.reason);return}this._listeners?this._listeners.push(B):this._listeners=[B]};CancelToken.prototype.unsubscribe=function Q(B){if(!!this._listeners){var w=this._listeners.indexOf(B);w!==-1&&this._listeners.splice(w,1)}};CancelToken.source=function Q(){var B,w=new CancelToken(function(F){B=F});return{token:w,cancel:B}};var CancelToken_1=CancelToken,spread=function Q(B){return function(D){return B.apply(null,D)}},utils$1=utils$e,isAxiosError=function Q(B){return utils$1.isObject(B)&&B.isAxiosError===!0},utils=utils$e,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(Q){var B=new Axios(Q),w=bind(Axios.prototype.request,B);return utils.extend(w,Axios.prototype,B),utils.extend(w,B),w.create=function(F){return createInstance(mergeConfig(Q,F))},w}var axios$1=createInstance(defaults);axios$1.Axios=Axios;axios$1.Cancel=Cancel_1;axios$1.CancelToken=CancelToken_1;axios$1.isCancel=isCancel$1;axios$1.VERSION=data.version;axios$1.all=function Q(B){return Promise.all(B)};axios$1.spread=spread;axios$1.isAxiosError=isAxiosError;axios$2.exports=axios$1;axios$2.exports.default=axios$1;var axios=axios$2.exports,common={},base={};(function(Q){Object.defineProperty(Q,"__esModule",{value:!0}),Q.RequiredError=Q.BaseAPI=Q.COLLECTION_FORMATS=Q.BASE_PATH=void 0;const B=axios;Q.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),Q.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class w{constructor(O,L=Q.BASE_PATH,U=B.default){this.basePath=L,this.axios=U,O&&(this.configuration=O,this.basePath=O.basePath||this.basePath)}}Q.BaseAPI=w;class D extends Error{constructor(O,L){super(L),this.field=O,this.name="RequiredError"}}Q.RequiredError=D})(base);var __awaiter=commonjsGlobal&&commonjsGlobal.__awaiter||function(Q,B,w,D){function F(O){return O instanceof w?O:new w(function(L){L(O)})}return new(w||(w=Promise))(function(O,L){function U(Y){try{q(D.next(Y))}catch(W){L(W)}}function G(Y){try{q(D.throw(Y))}catch(W){L(W)}}function q(Y){Y.done?O(Y.value):F(Y.value).then(U,G)}q((D=D.apply(Q,B||[])).next())})};Object.defineProperty(common,"__esModule",{value:!0});common.createRequestFunction=common.toPathString=common.serializeDataIfNeeded=common.setSearchParams=common.setOAuthToObject=common.setBearerAuthToObject=common.setBasicAuthToObject=common.setApiKeyToObject=common.assertParamExists=common.DUMMY_BASE_URL=void 0;const base_1=base;common.DUMMY_BASE_URL="https://example.com";common.assertParamExists=function(Q,B,w){if(w==null)throw new base_1.RequiredError(B,`Required parameter ${B} was null or undefined when calling ${Q}.`)};common.setApiKeyToObject=function(Q,B,w){return __awaiter(this,void 0,void 0,function*(){if(w&&w.apiKey){const D=typeof w.apiKey=="function"?yield w.apiKey(B):yield w.apiKey;Q[B]=D}})};common.setBasicAuthToObject=function(Q,B){B&&(B.username||B.password)&&(Q.auth={username:B.username,password:B.password})};common.setBearerAuthToObject=function(Q,B){return __awaiter(this,void 0,void 0,function*(){if(B&&B.accessToken){const w=typeof B.accessToken=="function"?yield B.accessToken():yield B.accessToken;Q.Authorization="Bearer "+w}})};common.setOAuthToObject=function(Q,B,w,D){return __awaiter(this,void 0,void 0,function*(){if(D&&D.accessToken){const F=typeof D.accessToken=="function"?yield D.accessToken(B,w):yield D.accessToken;Q.Authorization="Bearer "+F}})};function setFlattenedQueryParams(Q,B,w=""){B!=null&&(typeof B=="object"?Array.isArray(B)?B.forEach(D=>setFlattenedQueryParams(Q,D,w)):Object.keys(B).forEach(D=>setFlattenedQueryParams(Q,B[D],`${w}${w!==""?".":""}${D}`)):Q.has(w)?Q.append(w,B):Q.set(w,B))}common.setSearchParams=function(Q,...B){const w=new URLSearchParams(Q.search);setFlattenedQueryParams(w,B),Q.search=w.toString()};common.serializeDataIfNeeded=function(Q,B,w){const D=typeof Q!="string";return(D&&w&&w.isJsonMime?w.isJsonMime(B.headers["Content-Type"]):D)?JSON.stringify(Q!==void 0?Q:{}):Q||""};common.toPathString=function(Q){return Q.pathname+Q.search+Q.hash};common.createRequestFunction=function(Q,B,w,D){return(F=B,O=w)=>{const L=Object.assign(Object.assign({},Q.options),{url:((D==null?void 0:D.basePath)||O)+Q.url});return F.request(L)}};(function(Q){var B=commonjsGlobal&&commonjsGlobal.__awaiter||function(L,U,G,q){function Y(W){return W instanceof G?W:new G(function(X){X(W)})}return new(G||(G=Promise))(function(W,X){function te(ce){try{ie(q.next(ce))}catch(he){X(he)}}function ae(ce){try{ie(q.throw(ce))}catch(he){X(he)}}function ie(ce){ce.done?W(ce.value):Y(ce.value).then(te,ae)}ie((q=q.apply(L,U||[])).next())})};Object.defineProperty(Q,"__esModule",{value:!0}),Q.OpenAIApi=Q.OpenAIApiFactory=Q.OpenAIApiFp=Q.OpenAIApiAxiosParamCreator=Q.CreateImageRequestResponseFormatEnum=Q.CreateImageRequestSizeEnum=Q.ChatCompletionResponseMessageRoleEnum=Q.ChatCompletionRequestMessageRoleEnum=void 0;const w=axios,D=common,F=base;Q.ChatCompletionRequestMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},Q.ChatCompletionResponseMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},Q.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},Q.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},Q.OpenAIApiAxiosParamCreator=function(L){return{cancelFineTune:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("cancelFineTune","fineTuneId",U);const q="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),createAnswer:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createAnswer","createAnswerRequest",U);const q="/answers",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createChatCompletion:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createChatCompletion","createChatCompletionRequest",U);const q="/chat/completions",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createClassification:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createClassification","createClassificationRequest",U);const q="/classifications",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createCompletion:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createCompletion","createCompletionRequest",U);const q="/completions",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createEdit:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createEdit","createEditRequest",U);const q="/edits",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createEmbedding:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createEmbedding","createEmbeddingRequest",U);const q="/embeddings",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createFile:(U,G,q={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createFile","file",U),D.assertParamExists("createFile","purpose",G);const Y="/files",W=new URL(Y,D.DUMMY_BASE_URL);let X;L&&(X=L.baseOptions);const te=Object.assign(Object.assign({method:"POST"},X),q),ae={},ie={},ce=new(L&&L.formDataCtor||FormData);U!==void 0&&ce.append("file",U),G!==void 0&&ce.append("purpose",G),ae["Content-Type"]="multipart/form-data",D.setSearchParams(W,ie);let he=X&&X.headers?X.headers:{};return te.headers=Object.assign(Object.assign(Object.assign(Object.assign({},ae),ce.getHeaders()),he),q.headers),te.data=ce,{url:D.toPathString(W),options:te}}),createFineTune:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createFineTune","createFineTuneRequest",U);const q="/fine-tunes",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createImage:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createImage","createImageRequest",U);const q="/images/generations",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createImageEdit:(U,G,q,Y,W,X,te,ae={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createImageEdit","image",U),D.assertParamExists("createImageEdit","prompt",G);const ie="/images/edits",ce=new URL(ie,D.DUMMY_BASE_URL);let he;L&&(he=L.baseOptions);const pe=Object.assign(Object.assign({method:"POST"},he),ae),Be={},Ie={},ye=new(L&&L.formDataCtor||FormData);U!==void 0&&ye.append("image",U),q!==void 0&&ye.append("mask",q),G!==void 0&&ye.append("prompt",G),Y!==void 0&&ye.append("n",Y),W!==void 0&&ye.append("size",W),X!==void 0&&ye.append("response_format",X),te!==void 0&&ye.append("user",te),Be["Content-Type"]="multipart/form-data",D.setSearchParams(ce,Ie);let Ce=he&&he.headers?he.headers:{};return pe.headers=Object.assign(Object.assign(Object.assign(Object.assign({},Be),ye.getHeaders()),Ce),ae.headers),pe.data=ye,{url:D.toPathString(ce),options:pe}}),createImageVariation:(U,G,q,Y,W,X={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createImageVariation","image",U);const te="/images/variations",ae=new URL(te,D.DUMMY_BASE_URL);let ie;L&&(ie=L.baseOptions);const ce=Object.assign(Object.assign({method:"POST"},ie),X),he={},pe={},Be=new(L&&L.formDataCtor||FormData);U!==void 0&&Be.append("image",U),G!==void 0&&Be.append("n",G),q!==void 0&&Be.append("size",q),Y!==void 0&&Be.append("response_format",Y),W!==void 0&&Be.append("user",W),he["Content-Type"]="multipart/form-data",D.setSearchParams(ae,pe);let Ie=ie&&ie.headers?ie.headers:{};return ce.headers=Object.assign(Object.assign(Object.assign(Object.assign({},he),Be.getHeaders()),Ie),X.headers),ce.data=Be,{url:D.toPathString(ae),options:ce}}),createModeration:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createModeration","createModerationRequest",U);const q="/moderations",Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),G),te={},ae={};te["Content-Type"]="application/json",D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),X.data=D.serializeDataIfNeeded(U,X,L),{url:D.toPathString(Y),options:X}}),createSearch:(U,G,q={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createSearch","engineId",U),D.assertParamExists("createSearch","createSearchRequest",G);const Y="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(U))),W=new URL(Y,D.DUMMY_BASE_URL);let X;L&&(X=L.baseOptions);const te=Object.assign(Object.assign({method:"POST"},X),q),ae={},ie={};ae["Content-Type"]="application/json",D.setSearchParams(W,ie);let ce=X&&X.headers?X.headers:{};return te.headers=Object.assign(Object.assign(Object.assign({},ae),ce),q.headers),te.data=D.serializeDataIfNeeded(G,te,L),{url:D.toPathString(W),options:te}}),createTranscription:(U,G,q,Y,W,X,te={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createTranscription","file",U),D.assertParamExists("createTranscription","model",G);const ae="/audio/transcriptions",ie=new URL(ae,D.DUMMY_BASE_URL);let ce;L&&(ce=L.baseOptions);const he=Object.assign(Object.assign({method:"POST"},ce),te),pe={},Be={},Ie=new(L&&L.formDataCtor||FormData);U!==void 0&&Ie.append("file",U),G!==void 0&&Ie.append("model",G),q!==void 0&&Ie.append("prompt",q),Y!==void 0&&Ie.append("response_format",Y),W!==void 0&&Ie.append("temperature",W),X!==void 0&&Ie.append("language",X),pe["Content-Type"]="multipart/form-data",D.setSearchParams(ie,Be);let ye=ce&&ce.headers?ce.headers:{};return he.headers=Object.assign(Object.assign(Object.assign(Object.assign({},pe),Ie.getHeaders()),ye),te.headers),he.data=Ie,{url:D.toPathString(ie),options:he}}),createTranslation:(U,G,q,Y,W,X={})=>B(this,void 0,void 0,function*(){D.assertParamExists("createTranslation","file",U),D.assertParamExists("createTranslation","model",G);const te="/audio/translations",ae=new URL(te,D.DUMMY_BASE_URL);let ie;L&&(ie=L.baseOptions);const ce=Object.assign(Object.assign({method:"POST"},ie),X),he={},pe={},Be=new(L&&L.formDataCtor||FormData);U!==void 0&&Be.append("file",U),G!==void 0&&Be.append("model",G),q!==void 0&&Be.append("prompt",q),Y!==void 0&&Be.append("response_format",Y),W!==void 0&&Be.append("temperature",W),he["Content-Type"]="multipart/form-data",D.setSearchParams(ae,pe);let Ie=ie&&ie.headers?ie.headers:{};return ce.headers=Object.assign(Object.assign(Object.assign(Object.assign({},he),Be.getHeaders()),Ie),X.headers),ce.data=Be,{url:D.toPathString(ae),options:ce}}),deleteFile:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("deleteFile","fileId",U);const q="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"DELETE"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),deleteModel:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("deleteModel","model",U);const q="/models/{model}".replace("{model}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"DELETE"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),downloadFile:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("downloadFile","fileId",U);const q="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),listEngines:(U={})=>B(this,void 0,void 0,function*(){const G="/engines",q=new URL(G,D.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),U),X={},te={};D.setSearchParams(q,te);let ae=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),ae),U.headers),{url:D.toPathString(q),options:W}}),listFiles:(U={})=>B(this,void 0,void 0,function*(){const G="/files",q=new URL(G,D.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),U),X={},te={};D.setSearchParams(q,te);let ae=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),ae),U.headers),{url:D.toPathString(q),options:W}}),listFineTuneEvents:(U,G,q={})=>B(this,void 0,void 0,function*(){D.assertParamExists("listFineTuneEvents","fineTuneId",U);const Y="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(U))),W=new URL(Y,D.DUMMY_BASE_URL);let X;L&&(X=L.baseOptions);const te=Object.assign(Object.assign({method:"GET"},X),q),ae={},ie={};G!==void 0&&(ie.stream=G),D.setSearchParams(W,ie);let ce=X&&X.headers?X.headers:{};return te.headers=Object.assign(Object.assign(Object.assign({},ae),ce),q.headers),{url:D.toPathString(W),options:te}}),listFineTunes:(U={})=>B(this,void 0,void 0,function*(){const G="/fine-tunes",q=new URL(G,D.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),U),X={},te={};D.setSearchParams(q,te);let ae=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),ae),U.headers),{url:D.toPathString(q),options:W}}),listModels:(U={})=>B(this,void 0,void 0,function*(){const G="/models",q=new URL(G,D.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),U),X={},te={};D.setSearchParams(q,te);let ae=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),ae),U.headers),{url:D.toPathString(q),options:W}}),retrieveEngine:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("retrieveEngine","engineId",U);const q="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),retrieveFile:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("retrieveFile","fileId",U);const q="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),retrieveFineTune:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("retrieveFineTune","fineTuneId",U);const q="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}}),retrieveModel:(U,G={})=>B(this,void 0,void 0,function*(){D.assertParamExists("retrieveModel","model",U);const q="/models/{model}".replace("{model}",encodeURIComponent(String(U))),Y=new URL(q,D.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),G),te={},ae={};D.setSearchParams(Y,ae);let ie=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ie),G.headers),{url:D.toPathString(Y),options:X}})}},Q.OpenAIApiFp=function(L){const U=Q.OpenAIApiAxiosParamCreator(L);return{cancelFineTune(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.cancelFineTune(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createAnswer(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createAnswer(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createChatCompletion(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createChatCompletion(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createClassification(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createClassification(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createCompletion(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createCompletion(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createEdit(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createEdit(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createEmbedding(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createEmbedding(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createFile(G,q,Y){return B(this,void 0,void 0,function*(){const W=yield U.createFile(G,q,Y);return D.createRequestFunction(W,w.default,F.BASE_PATH,L)})},createFineTune(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createFineTune(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createImage(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createImage(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createImageEdit(G,q,Y,W,X,te,ae,ie){return B(this,void 0,void 0,function*(){const ce=yield U.createImageEdit(G,q,Y,W,X,te,ae,ie);return D.createRequestFunction(ce,w.default,F.BASE_PATH,L)})},createImageVariation(G,q,Y,W,X,te){return B(this,void 0,void 0,function*(){const ae=yield U.createImageVariation(G,q,Y,W,X,te);return D.createRequestFunction(ae,w.default,F.BASE_PATH,L)})},createModeration(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.createModeration(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createSearch(G,q,Y){return B(this,void 0,void 0,function*(){const W=yield U.createSearch(G,q,Y);return D.createRequestFunction(W,w.default,F.BASE_PATH,L)})},createTranscription(G,q,Y,W,X,te,ae){return B(this,void 0,void 0,function*(){const ie=yield U.createTranscription(G,q,Y,W,X,te,ae);return D.createRequestFunction(ie,w.default,F.BASE_PATH,L)})},createTranslation(G,q,Y,W,X,te){return B(this,void 0,void 0,function*(){const ae=yield U.createTranslation(G,q,Y,W,X,te);return D.createRequestFunction(ae,w.default,F.BASE_PATH,L)})},deleteFile(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.deleteFile(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},deleteModel(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.deleteModel(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},downloadFile(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.downloadFile(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},listEngines(G){return B(this,void 0,void 0,function*(){const q=yield U.listEngines(G);return D.createRequestFunction(q,w.default,F.BASE_PATH,L)})},listFiles(G){return B(this,void 0,void 0,function*(){const q=yield U.listFiles(G);return D.createRequestFunction(q,w.default,F.BASE_PATH,L)})},listFineTuneEvents(G,q,Y){return B(this,void 0,void 0,function*(){const W=yield U.listFineTuneEvents(G,q,Y);return D.createRequestFunction(W,w.default,F.BASE_PATH,L)})},listFineTunes(G){return B(this,void 0,void 0,function*(){const q=yield U.listFineTunes(G);return D.createRequestFunction(q,w.default,F.BASE_PATH,L)})},listModels(G){return B(this,void 0,void 0,function*(){const q=yield U.listModels(G);return D.createRequestFunction(q,w.default,F.BASE_PATH,L)})},retrieveEngine(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.retrieveEngine(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},retrieveFile(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.retrieveFile(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},retrieveFineTune(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.retrieveFineTune(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},retrieveModel(G,q){return B(this,void 0,void 0,function*(){const Y=yield U.retrieveModel(G,q);return D.createRequestFunction(Y,w.default,F.BASE_PATH,L)})}}},Q.OpenAIApiFactory=function(L,U,G){const q=Q.OpenAIApiFp(L);return{cancelFineTune(Y,W){return q.cancelFineTune(Y,W).then(X=>X(G,U))},createAnswer(Y,W){return q.createAnswer(Y,W).then(X=>X(G,U))},createChatCompletion(Y,W){return q.createChatCompletion(Y,W).then(X=>X(G,U))},createClassification(Y,W){return q.createClassification(Y,W).then(X=>X(G,U))},createCompletion(Y,W){return q.createCompletion(Y,W).then(X=>X(G,U))},createEdit(Y,W){return q.createEdit(Y,W).then(X=>X(G,U))},createEmbedding(Y,W){return q.createEmbedding(Y,W).then(X=>X(G,U))},createFile(Y,W,X){return q.createFile(Y,W,X).then(te=>te(G,U))},createFineTune(Y,W){return q.createFineTune(Y,W).then(X=>X(G,U))},createImage(Y,W){return q.createImage(Y,W).then(X=>X(G,U))},createImageEdit(Y,W,X,te,ae,ie,ce,he){return q.createImageEdit(Y,W,X,te,ae,ie,ce,he).then(pe=>pe(G,U))},createImageVariation(Y,W,X,te,ae,ie){return q.createImageVariation(Y,W,X,te,ae,ie).then(ce=>ce(G,U))},createModeration(Y,W){return q.createModeration(Y,W).then(X=>X(G,U))},createSearch(Y,W,X){return q.createSearch(Y,W,X).then(te=>te(G,U))},createTranscription(Y,W,X,te,ae,ie,ce){return q.createTranscription(Y,W,X,te,ae,ie,ce).then(he=>he(G,U))},createTranslation(Y,W,X,te,ae,ie){return q.createTranslation(Y,W,X,te,ae,ie).then(ce=>ce(G,U))},deleteFile(Y,W){return q.deleteFile(Y,W).then(X=>X(G,U))},deleteModel(Y,W){return q.deleteModel(Y,W).then(X=>X(G,U))},downloadFile(Y,W){return q.downloadFile(Y,W).then(X=>X(G,U))},listEngines(Y){return q.listEngines(Y).then(W=>W(G,U))},listFiles(Y){return q.listFiles(Y).then(W=>W(G,U))},listFineTuneEvents(Y,W,X){return q.listFineTuneEvents(Y,W,X).then(te=>te(G,U))},listFineTunes(Y){return q.listFineTunes(Y).then(W=>W(G,U))},listModels(Y){return q.listModels(Y).then(W=>W(G,U))},retrieveEngine(Y,W){return q.retrieveEngine(Y,W).then(X=>X(G,U))},retrieveFile(Y,W){return q.retrieveFile(Y,W).then(X=>X(G,U))},retrieveFineTune(Y,W){return q.retrieveFineTune(Y,W).then(X=>X(G,U))},retrieveModel(Y,W){return q.retrieveModel(Y,W).then(X=>X(G,U))}}};class O extends F.BaseAPI{cancelFineTune(U,G){return Q.OpenAIApiFp(this.configuration).cancelFineTune(U,G).then(q=>q(this.axios,this.basePath))}createAnswer(U,G){return Q.OpenAIApiFp(this.configuration).createAnswer(U,G).then(q=>q(this.axios,this.basePath))}createChatCompletion(U,G){return Q.OpenAIApiFp(this.configuration).createChatCompletion(U,G).then(q=>q(this.axios,this.basePath))}createClassification(U,G){return Q.OpenAIApiFp(this.configuration).createClassification(U,G).then(q=>q(this.axios,this.basePath))}createCompletion(U,G){return Q.OpenAIApiFp(this.configuration).createCompletion(U,G).then(q=>q(this.axios,this.basePath))}createEdit(U,G){return Q.OpenAIApiFp(this.configuration).createEdit(U,G).then(q=>q(this.axios,this.basePath))}createEmbedding(U,G){return Q.OpenAIApiFp(this.configuration).createEmbedding(U,G).then(q=>q(this.axios,this.basePath))}createFile(U,G,q){return Q.OpenAIApiFp(this.configuration).createFile(U,G,q).then(Y=>Y(this.axios,this.basePath))}createFineTune(U,G){return Q.OpenAIApiFp(this.configuration).createFineTune(U,G).then(q=>q(this.axios,this.basePath))}createImage(U,G){return Q.OpenAIApiFp(this.configuration).createImage(U,G).then(q=>q(this.axios,this.basePath))}createImageEdit(U,G,q,Y,W,X,te,ae){return Q.OpenAIApiFp(this.configuration).createImageEdit(U,G,q,Y,W,X,te,ae).then(ie=>ie(this.axios,this.basePath))}createImageVariation(U,G,q,Y,W,X){return Q.OpenAIApiFp(this.configuration).createImageVariation(U,G,q,Y,W,X).then(te=>te(this.axios,this.basePath))}createModeration(U,G){return Q.OpenAIApiFp(this.configuration).createModeration(U,G).then(q=>q(this.axios,this.basePath))}createSearch(U,G,q){return Q.OpenAIApiFp(this.configuration).createSearch(U,G,q).then(Y=>Y(this.axios,this.basePath))}createTranscription(U,G,q,Y,W,X,te){return Q.OpenAIApiFp(this.configuration).createTranscription(U,G,q,Y,W,X,te).then(ae=>ae(this.axios,this.basePath))}createTranslation(U,G,q,Y,W,X){return Q.OpenAIApiFp(this.configuration).createTranslation(U,G,q,Y,W,X).then(te=>te(this.axios,this.basePath))}deleteFile(U,G){return Q.OpenAIApiFp(this.configuration).deleteFile(U,G).then(q=>q(this.axios,this.basePath))}deleteModel(U,G){return Q.OpenAIApiFp(this.configuration).deleteModel(U,G).then(q=>q(this.axios,this.basePath))}downloadFile(U,G){return Q.OpenAIApiFp(this.configuration).downloadFile(U,G).then(q=>q(this.axios,this.basePath))}listEngines(U){return Q.OpenAIApiFp(this.configuration).listEngines(U).then(G=>G(this.axios,this.basePath))}listFiles(U){return Q.OpenAIApiFp(this.configuration).listFiles(U).then(G=>G(this.axios,this.basePath))}listFineTuneEvents(U,G,q){return Q.OpenAIApiFp(this.configuration).listFineTuneEvents(U,G,q).then(Y=>Y(this.axios,this.basePath))}listFineTunes(U){return Q.OpenAIApiFp(this.configuration).listFineTunes(U).then(G=>G(this.axios,this.basePath))}listModels(U){return Q.OpenAIApiFp(this.configuration).listModels(U).then(G=>G(this.axios,this.basePath))}retrieveEngine(U,G){return Q.OpenAIApiFp(this.configuration).retrieveEngine(U,G).then(q=>q(this.axios,this.basePath))}retrieveFile(U,G){return Q.OpenAIApiFp(this.configuration).retrieveFile(U,G).then(q=>q(this.axios,this.basePath))}retrieveFineTune(U,G){return Q.OpenAIApiFp(this.configuration).retrieveFineTune(U,G).then(q=>q(this.axios,this.basePath))}retrieveModel(U,G){return Q.OpenAIApiFp(this.configuration).retrieveModel(U,G).then(q=>q(this.axios,this.basePath))}}Q.OpenAIApi=O})(api);var configuration={};const name="openai",version="3.2.1",description="Node.js library for the OpenAI API",repository={type:"git",url:"git@github.com:openai/openai-node.git"},keywords=["openai","open","ai","gpt-3","gpt3"],author="OpenAI",license="MIT",main="./dist/index.js",types="./dist/index.d.ts",scripts={build:"tsc --outDir dist/"},dependencies={axios:"^0.26.0","form-data":"^4.0.0"},devDependencies={"@types/node":"^12.11.5",typescript:"^3.6.4"};var require$$0={name,version,description,repository,keywords,author,license,main,types,scripts,dependencies,devDependencies},browser=typeof self=="object"?self.FormData:window.FormData;Object.defineProperty(configuration,"__esModule",{value:!0});configuration.Configuration=void 0;const packageJson=require$$0;class Configuration{constructor(B={}){this.apiKey=B.apiKey,this.organization=B.organization,this.username=B.username,this.password=B.password,this.accessToken=B.accessToken,this.basePath=B.basePath,this.baseOptions=B.baseOptions,this.formDataCtor=B.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${packageJson.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=browser)}isJsonMime(B){const w=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return B!==null&&(w.test(B)||B.toLowerCase()==="application/json-patch+json")}}configuration.Configuration=Configuration;(function(Q){var B=commonjsGlobal&&commonjsGlobal.__createBinding||(Object.create?function(D,F,O,L){L===void 0&&(L=O),Object.defineProperty(D,L,{enumerable:!0,get:function(){return F[O]}})}:function(D,F,O,L){L===void 0&&(L=O),D[L]=F[O]}),w=commonjsGlobal&&commonjsGlobal.__exportStar||function(D,F){for(var O in D)O!=="default"&&!F.hasOwnProperty(O)&&B(F,D,O)};Object.defineProperty(Q,"__esModule",{value:!0}),w(api,Q),w(configuration,Q)})(dist);window.entry=()=>{console.log("entry"),gsapWithCSS.to("#introLogo",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#intro",{duration:1,opacity:0,ease:"power2.inOut",delay:1.5}),gsapWithCSS.to(".welcomeOptions",{duration:1,opacity:1,ease:"power2.inOut",delay:2}),gsapWithCSS.to("#wOpt1",{duration:2,translateX:0,ease:"power2.inOut",delay:1.5}),gsapWithCSS.to("#wOpt2",{duration:2,translateX:0,ease:"power2.inOut",delay:1.5}),setTimeout(()=>{document.getElementById("welcome").style.pointerEvents="auto"},3e3),console.log("entry2")};window.entry();const VITE_CommerceKey="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",VITE_ScogeI="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";var pgleft=1,pgright=2,sketch1Count=3,sketch2Count=2,sketch3Count=1,countriedAdded=!1,shopActive="closed";window.dbm=!1;window.shoploaded=!1;window.viewThisProduct="";window.investorsView=!1;window.urlParamsActive=!1;window.inUniverse=!1;window.productsloaded=!1;const commerce=new lib(`${VITE_CommerceKey}`,!0);console.log("COPYRIGHT 2023 - SCOG\xC9 Inc. - ALL RIGHTS RESERVED");var stripe=Stripe(`${VITE_StripeKey}`);const elements=stripe.elements(),soundtrack=new SoundtrackManager;window.isMobile=!1;window.sysCheck=()=>{document.addEventListener("keydown",window.checkKeys)};window.checkKeys=async Q=>{Q.key==="i"&&ci==="false"&&(ci="true",window.dbm=!0,setTimeout(()=>{ci="false"},1e3)),Q.key==="c"&&ci==="true"&&(ci="bankoo",window.universeSystem(),soundtrack.play("scoge1"))};window.sysCheck();window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches?(document.getElementById("shopBut"),document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1):(document.getElementById("shop").style.opacity="100%",document.getElementById("shop").style.visibility="visible",document.getElementById("mobileShop").style.display="none",window.isMobile=!1,window.logoMove(6,3,16,1))});window.sizeInit=()=>{if(window.matchMedia("(max-width: 768px)").matches){window.isMobile=!0;var Q=document.querySelectorAll(".videoEl");Q.forEach(B=>{B.setAttribute("class","mobileVideo")})}};window.onload=()=>{window.sizeInit(),window.loadShop(),window.getParamsDesktop(),window.initFilterActions()};window.shopping=()=>{window.matchMedia("(max-width: 768px)").matches?window.openMobile():window.toggleShop()};window.openMobile=()=>{document.getElementById("mobileShop").style.display="block"};window.destiny=()=>{var Q=document.getElementById("destiny");Q.play(),Q.loop=!0};window.initNoti2=Q=>{};window.clearFilter=()=>{var Q=document.getElementById("shopFilter"),B=document.getElementById("all");window.filterShop(B),Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none"},1e3)};window.toggleShop=()=>{var Q=document.getElementById("orderConfirm");document.getElementById("shopBut");var B=document.getElementById("shopFilter"),w=document.getElementById("shopBG");switch(w.style.transition=".5s all",setTimeout(()=>{shopActive!="closed"&&(document.getElementById("logo").style.transition="1s all",document.getElementById("logo").style.opacity="100%",document.getElementById("shopIcon").style.opacity="100%")},1e3),document.getElementById("shop").style.transition="1s all",document.getElementById("povImageColumnLeft").innerHTML="",shopActive){case"closed":B.style.display="grid",w.style.display="block",setTimeout(()=>{B.style.opacity="100%",w.style.opacity="100%"},1e3),setTimeout(()=>{window.productsloaded===!1&&(document.getElementById("divLoadBG2").style.display="grid"),document.getElementById("shop").style.right="0%",document.getElementById("shopIcon").innerHTML="X"},500),shopActive="open";break;case"open":window.clearFilter(),document.getElementById("shopIcon").style.opacity="0%",w.style.opacity="0%",setTimeout(()=>{w.style.display="none"},500),document.getElementById("logo").style.opacity="0%",window.clearShop();break;case"POVopen":document.getElementById("shop").style.overflowX="scroll",shopActive="open";var D=document.getElementById("povLeft"),F=document.getElementById("povRight"),O=document.getElementById("shopCheckoutDetails");O.style.transition="1s all",O.style.visibility="hidden",O.style.opacity="0%",D.style.transition="1s all",F.style.transition="1s all",D.style.opacity="0%",F.style.opacity="0%",setTimeout(()=>{F.style.visibility="hidden",D.style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("povImageColumnRight").innerHTML="",window.returnSize(),document.getElementById("eSymbol1").style.display="none",document.getElementById("eSymbol2").style.display="none",window.termsOpen=!1,Q.style.display==="block"&&(Q.style.display="none");var L=document.getElementsByClassName("shopProduct");for(let U=0;U<L.length;U++)L[U].style.color="black";selectedPSize="",document.getElementById("addToBagBut").innerHTML="Select a size";break}};window.openSettings=()=>{window.clearFilter(),window.clearShop(),window.closeInvestor(),window.matchMedia("(max-width: 768px)").matches;var Q=document.getElementById("settingsMenu");document.getElementById("settingsMenu").style.display="grid",setTimeout(()=>{Q.style.opacity="100%"},300)};window.clearShop=()=>{document.getElementById("shop").style.right="-70%",document.getElementById("shopIcon").innerHTML="(0)";var Q=document.getElementById("shopBG");Q.style.transition=".5s all",Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none"},500),document.getElementById("shopIcon").setAttribute("onclick","toggleShop()"),document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1};window.clearSettings=()=>{document.getElementById("settingsMenu").style.transition="1s all",document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3)};var continents={c1:{name:"1 - ALANSANA",text:"The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOG\xC9 Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",images:`<img id="scroll" src="assets/images/scroll.png"/>
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
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`}},worldName=document.getElementById("worldConName"),worldText=document.getElementById("worldConText"),worldMain=document.getElementById("worldMain"),allMenu=document.querySelectorAll(".worldMenuInner"),worldBottom=document.getElementById("worldBottom");window.changeWorld=Q=>{var B=Q.id;switch(worldBottom.scrollTop=0,allMenu.forEach(w=>{w.style.backgroundColor="rgba(255, 255, 255, 0.7)",w.style.color="black",document.getElementById(`${B}In`).style.backgroundColor="red",document.getElementById(`${B}In`).style.color="white"}),B){case"world1":worldName.innerHTML=continents.c1.name,worldText.innerHTML=continents.c1.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c1.images;break;case"world2":worldName.innerHTML=continents.c2.name,worldText.innerHTML=continents.c2.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c2.images;break;case"world3":worldName.innerHTML=continents.c3.name,worldText.innerHTML=continents.c3.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c3.images;break;case"world4":worldName.innerHTML=continents.c4.name,worldText.innerHTML=continents.c4.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c4.images;break;case"world5":worldName.innerHTML=continents.c5.name,worldText.innerHTML=continents.c5.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')",worldBottom.innerHTML=continents.c5.images;break;case"world6":worldName.innerHTML=continents.c6.name,worldText.innerHTML=continents.c6.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c6.images;break;case"world7":worldName.innerHTML=continents.c7.name,worldText.innerHTML=continents.c7.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c7.images;break}};var expandDiv=document.getElementById("worldBottom"),speed=5;function expanding(){var Q=expandDiv.scrollTop,B=Q/speed;expandDiv.style.height=Math.min(Math.max(B,34),68)+"%"}window.isWorld=()=>{expandDiv.addEventListener("scroll",function(){requestAnimationFrame(expanding)},!1)};window.worldTap=()=>{document.getElementById("worldEntrance").style.transition="5s all",document.getElementById("worldEntrance").style.opacity="0%",setTimeout(()=>{document.getElementById("worldEntrance").style.display="none"},3500)};window.setupBook=Q=>{var B=document.getElementById("B2222"),w=Q.id;if(w==="bookleft"){B.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft-=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright-=2}.jpg" style="margin-left:10%;">`,w==="bookleft"&&pgleft<=0&&(pgleft=1,pgright=2,B.remove());return}if(w==="bookright"){B.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft+=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright+=2}.jpg" style="margin-left:10%;">`,w==="bookright"&&pgright>=15&&(pgleft=1,pgright=2,B.remove());return}};window.setupSketches=()=>{var Q=document.getElementById("BSketch");if(sketch3Count===3){Q.innerHTML='<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">',sketch3Count=1,sketch2Count=2,sketch1Count=3,Q.remove();return}if(sketch3Count===2){Q.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}if(sketch3Count===1){Q.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count-=2}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}};window.setupMagazine=()=>{var Q=document.getElementById("BMAG");Q.remove()};var currentShopProduct;window.povOpen=Q=>{var B=Q.id;currentShopProduct=allProducts[0].filter(O=>O.id.includes(`${B}`)),shopActive="POVopen";var w=document.getElementById("povLeft"),D=document.getElementById("povRight");w.style.transition="1s all",D.style.transition="1s all",document.getElementById("povRight").style.visibility="visible",document.getElementById("povLeft").style.visibility="visible",w.style.opacity="100%",D.style.opacity="100%",document.getElementById("shopProductName").innerHTML=`
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(\xC9)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(S\xC9)</span>
  `,currentShopProduct[0].categories.forEach(O=>{O.name==="\xC9"&&(document.getElementById("eSymbol1").style.display="block"),O.name==="S\xC9"&&(document.getElementById("eSymbol2").style.display="block")}),document.getElementById("shopProductDesc").innerHTML=currentShopProduct[0].description,document.getElementById("shopProductPrice").innerHTML=currentShopProduct[0].price.formatted_with_symbol,currentShopProduct[0].inventory.available<=10?document.getElementById("shopProductAvailable").innerHTML="(LIMITED QUANTITY)":document.getElementById("shopProductAvailable").innerHTML="";var F=document.getElementById("povImageColumnLeft");document.getElementById("povImageColumnRight").style.backgroundImage=`url("${currentShopProduct[0].assets[2].url}")`,currentShopProduct[0].assets.forEach(O=>{var L=document.createElement("img");O.filename==="sizeChart.png"?(L.setAttribute("class","sizeChartImage"),L.setAttribute("src",`${O.url}`),L.setAttribute("id",`${O.filename}`),document.getElementById("povImageColumnRight").appendChild(L)):(L.setAttribute("class","leftPOVimages"),L.setAttribute("src",`${O.url}`),L.setAttribute("id",`${O.url}`),L.setAttribute("onclick","changeToMainPic(this)"),F.appendChild(L))}),currentShopProduct[0].variant_groups[0].options.forEach(O=>{if(document.getElementById(`${O.name}`).style.opacity="100%",document.getElementById(`${O.name}`).style.cursor="pointer",O.name==="SingleSize"){var L=document.querySelectorAll(".shopProduct");document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr",document.getElementById("shopProductSizes").style.justifyItems="end",L.forEach(U=>{U.id!="SingleSize"&&(U.style.display="none")}),document.getElementById("SingleSize").style.display="block"}}),cartEmpty!=!0&&window.productAdded()};window.returnSize=()=>{var Q=document.querySelectorAll(".shopProduct");Q.forEach(B=>{B.id!="SingleSize"&&(B.style.display="block"),document.getElementById(B.id).style.opacity=".3"}),document.getElementById("SingleSize").style.display="none",document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr",document.getElementById("shopProductSizes").style.justifyItems="center"};window.changeToMainPic=Q=>{var B=Q.id;document.getElementById("povImageColumnRight").style.backgroundImage=`url("${B}")`};window.sizeGuideOn=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="100%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="0%"};window.sizeGuideOff=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="0%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="100%"};window.productAdded=()=>{document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="visible",document.getElementById("shopCheckoutDetails").style.opacity="100%"};window.purchaseComplete=()=>{document.getElementById("orderConfirm").style.display="block",document.getElementById("orderConfirm").innerHTML=`
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOG\xC9.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `};window.termsOpen=!1;window.toggleTerms=()=>{var Q=document.getElementById("tandc"),B=document.getElementById("gMenu");if(Q.style.display==="block"){document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",B.style.display="block",window.termsOpen=!1;return}else if(Q.style.display!="block"){document.getElementById("tandc").innerHTML=`
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(\u2018\xC9\u2019)</span> or <span class="blue">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `,document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="block",document.getElementById("tandc").style.opacity="100%",B.style.display="none",window.termsOpen=!0,Q.scrollTop=0;return}};var allProducts=[];window.productsloaded=!1;window.loadShop=async()=>{document.getElementById("divLoadBG2").style.display="grid";var Q=document.getElementById("allShopProducts");await commerce.products.list({limit:100,sortDirection:"desc"}).then(B=>{allProducts.push(B.data)}).catch(B=>{console.log("There was an error fetching the products",B)}),allProducts[0].forEach(B=>{var w=document.createElement("div");w.setAttribute("class","productContainer"),w.setAttribute("id",B.id),B.categories.forEach(D=>{w.classList.add(D.name)}),window.matchMedia("(max-width: 768px)").matches||(w.setAttribute("onmouseover","shopOnHover(this)"),w.setAttribute("onmouseout","shopOutHover(this)"),w.setAttribute("onclick","povOpen(this)")),Q.appendChild(w),w.innerHTML=`
    <img class="shopProductsOver" src="${B.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${B.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${B.name}</p>
    <p class="pcProductPrice">${B.price.formatted_with_symbol}</p>
</div>
    `,window.productsloaded=!0,document.getElementById("divLoadBG2").style.display="none"}),window.urlParamsActive===!0&&(window.povOpen(document.getElementById(window.viewThisProduct)),window.history.replaceState({},document.title,"/index.html")),commerce.cart.empty()};window.imageFade=Q=>{var B=Q;B.style.transition="all 2s",B.style.opacity="1"};window.shopOnHover=Q=>{var B=Q.id,w=document.getElementById(B);w.getElementsByTagName("img")[1].style.opacity="0%",w.getElementsByTagName("img")[0].style.opacity="100%"};window.shopOutHover=Q=>{var B=Q.id,w=document.getElementById(B);w.getElementsByTagName("img")[0].style.opacity="0%",w.getElementsByTagName("img")[1].style.opacity="100%"};var currentCart,cartEmpty=!0,selectedPSize="";window.selectSize=Q=>{Q.style.opacity==="1"?(selectedPSize=Q.id,document.getElementById("addToBagBut").innerHTML="Add To Bag",document.getElementById("addToBagBut").setAttribute("onclick","addToCart()")):(selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick","addToCart()"));var B=document.getElementsByClassName("shopProduct");for(let w=0;w<B.length;w++)B[w].style.color="black";Q.style.color="#ff002d"};var countriesObj={};window.addToCart=async()=>{document.getElementById("shoppingBag").innerHTML="";var Q=currentShopProduct[0].variant_groups[0].options.filter(B=>B.name.includes(`${selectedPSize}`));document.getElementById("divLoadBG").style.display="grid",commerce.cart.retrieve().then(B=>{currentCart=B}).then(()=>{commerce.cart.add(currentShopProduct[0].id,1,{[currentShopProduct[0].variant_groups[0].id]:Q[0].id}).then(()=>{cartEmpty=!1,commerce.cart.retrieve().then(B=>{currentCart=B,document.getElementById("divLoadBG").style.display="none",document.getElementById("addToBagBut").innerHTML="Select a size";var w=document.getElementsByClassName("shopProduct");for(let D=0;D<w.length;D++)w[D].style.color="";window.variantAbbr="",B.line_items.forEach(D=>{var F=document.createElement("div");switch(F.setAttribute("class","bagProducts"),document.getElementById("shoppingBag").appendChild(F),D.selected_options[0].option_name){case"Small":window.variantAbbr="S";break;case"Medium":window.variantAbbr="M";break;case"Large":window.variantAbbr="L";break;case"XLarge":window.variantAbbr="XL";break;case"2XLarge":window.variantAbbr="2XL";break;case"3XLarge":window.variantAbbr="3XL";break}F.innerHTML=`
                  <div class="bagProduct">
                      <div class="bagPOver" id="${D.id}">
                          <p id="test1sizeQty">(${D.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${D.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `,F.setAttribute("id",`${D.id}Parent`),document.getElementById(D.id).style.backgroundImage=`url(${D.image.url})`}),document.getElementById("carTotal").innerHTML=B.subtotal.formatted_with_symbol}),window.productAdded(),selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick")})}),countriedAdded===!1&&(countriedAdded=!0,commerce.services.localeListCountries().then(B=>{countriesObj=B.countries,Object.keys(B.countries).forEach(w=>{var D=document.createElement("option"),F=document.getElementById("input9");D.setAttribute("value",w),D.setAttribute("title",w),D.innerHTML=`${countriesObj[w].substr(0,20)}`,F.appendChild(D)})}))};window.removeLineItem=Q=>{document.getElementById("divLoadBG").style.display="grid";var B=Q.id;commerce.cart.remove(B).then(w=>{document.getElementById(`${B}Parent`).remove(),document.getElementById("divLoadBG").style.display="none",document.getElementById("carTotal").innerHTML=w.cart.subtotal.formatted_with_symbol,currentCart=w.cart,w.cart.total_items===0&&(cartEmpty=!0,countriedAdded=!1,document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `)})};window.states=()=>{var Q=document.getElementById("input9"),B=Q.options[Q.selectedIndex].value,w=Q.options[Q.selectedIndex].title,D=document.getElementById("carTotal");document.getElementById("input7").innerHTML="",B==="US"&&(document.getElementById("input4").value="$0.00 Free Shipping",window.shippingMethodValue=1,D.innerHTML=currentCart.subtotal.formatted_with_symbol),B!="US"&&(document.getElementById("input4").value="$70.00 Intl Shipping",window.shippingMethodValue=3,D.innerHTML=`$${currentCart.subtotal.raw+70}.00`),w==="US2"&&(document.getElementById("input4").value="$130.00 - Next Day Air",window.shippingMethodValue=2,D.innerHTML=`$${currentCart.subtotal.raw+130}.00`),commerce.services.localeListSubdivisions(B).then(F=>{var O=F.subdivisions;Object.keys(F.subdivisions).forEach(L=>{var U=document.createElement("option"),G=document.getElementById("input7");if(Object.keys(F.subdivisions).length<=1){var q=document.createElement("option");q.innerHTML="Not Available.",Q.options[Q.selectedIndex].innerHTML="Select Country",document.getElementById("input7").appendChild(q)}else U.setAttribute("value",O[L]),U.setAttribute("id",L),U.innerHTML=O[L].substring(0,20),G.appendChild(U)})})};var style={base:{color:"black"}};const card=elements.create("card",{style});card.mount("#card-element");window.shippingId="";window.checkOut=async()=>{var Q=document.getElementById("input1").value,B=document.getElementById("input2").value,w=document.getElementById("input3").value;document.getElementById("input4").value;var D=document.getElementById("input5").value,F=document.getElementById("input6").value,O=document.getElementById("input8").value,L=document.getElementById("input10").value,U=document.getElementById("input9"),G=document.getElementById("input7"),q=U.options[U.selectedIndex].value,Y=G.options[G.selectedIndex].id;document.getElementById("divLoadBG").style.display="grid",setTimeout(()=>{document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"},2e4),await commerce.checkout.generateToken(currentCart.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async W=>{commerce.checkout.getShippingOptions(W.id,{country:q}).then(async X=>{window.shippingMethodValue===1&&(window.shippingId=X[0].id),window.shippingMethodValue===3&&(window.shippingId=X[0].id),window.shippingMethodValue===2&&(window.shippingId=X[1].id);var te=`${Q} ${B}`;const ae=await stripe.createPaymentMethod({type:"card",card}).catch(ie=>{console.log(ie)});if(ae.error){document.getElementById("divLoadBG").style.display="none",console.log(ae.error.message),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${ae.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const ie=await commerce.checkout.capture(W.id,{customer:{firstname:`${Q}`,lastname:`${B}`,email:`${D}`},extra_fields:{extr_DWy4oG4dY56Jx2:L},shipping:{name:`${te}`,street:`${w}`,town_city:`${F}`,county_state:`${Y}`,postal_zip_code:`${O}`,country:`${q}`},fulfillment:{shipping_method:`${window.shippingId}`},billing:{name:`${te}`,street:`${w}`,town_city:`${F}`,county_state:`${Y}`,postal_zip_code:`${O}`,country:`${q}`},payment:{gateway:"stripe",stripe:{payment_method_id:ae.paymentMethod.id}}});setTimeout(()=>{window.closeLoadE()},2e4),window.closeLoadE(),document.getElementById("confirmNumber").innerHTML=ie.customer_reference,window.purchaseComplete(),document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`,document.getElementById("shoppingBag").innerHTML="",cartEmpty=!0,document.getElementById("shopCheckoutDetails").style.opacity="0%",card.clear();return}catch(ie){document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${ie.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(ie);return}finally{}})}).catch(W=>{console.log("Error",W)})};window.closeLoadE=()=>{document.getElementById("divLoadBG").innerHTML='<div class="loader"></div>',document.getElementById("divLoadBG").removeAttribute("onclick"),document.getElementById("divLoadBG").style.display="none",card.clear()};window.ccsOn=()=>{document.getElementById("crypto").innerHTML="Coming Soon"};window.ccsOff=()=>{document.getElementById("crypto").innerHTML="Pay with Crypto"};window.filterShop=Q=>{var B=document.getElementById("sectionDesc"),w=Q.id;switch(w!=="all"&&(document.getElementById("all").checked=!1),w){case"all":B.innerHTML=`<h2>All Products</h2>
      <h4>SCOG\xC9 Shop - Collection pieces, gifts and more.</h4>`,document.getElementById("all").checked=!0,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.style.display="block"});break;case"tops":B.innerHTML=`<h2>Tops</h2>
      <h4>SCOG\xC9 T-Shirts, Hoodies, Shirts and Jackets.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!0,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("tops")?D.style.display="block":D.style.display="none"});break;case"bottoms":B.innerHTML=`<h2>Bottoms</h2>
      <h4>SCOG\xC9 Pants, Shorts, and Joggers.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!0,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("bottoms")?D.style.display="block":D.style.display="none"});break;case"accessories":B.innerHTML=`<h2>Accessories</h2>
      <h4>SCOG\xC9 Hats & More.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!0,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("accessories")?D.style.display="block":D.style.display="none"});break;case"art":B.innerHTML=`<h2>Artwork</h2>
      <h4>SCOG\xC9 Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!0,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("art")?D.style.display="block":D.style.display="none"});break;case"gifts":B.innerHTML=`<h2>Gifts</h2>
      <h4>SCOG\xC9 pieces wrapped, boxed, and ready to gift.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!0,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("gifts")?D.style.display="block":D.style.display="none"});break}};window.sayScoge=()=>{document.getElementById("scoge").play()};window.logoMove=(Q,B,w,D)=>{var F=document.getElementById("logo");F.style.transition=`${D}s all`,window.matchMedia("(max-width: 768px)").matches||(F.style.left=`${B}%`,F.style.width=`${w}%`,F.style.top=`${Q}%`)};window.dActiveBut=()=>{var Q=document.getElementById("settingsBut"),B=document.getElementById("extraBut");shopActive==="closed"?(Q.style.opacity="25%",B.style.opacity="25%",Q.removeAttribute("onclick"),B.setAttribute("onclick","")):(Q.style.opacity="100%",B.style.opacity="100%",Q.setAttribute("onclick","openSettings();"),B.setAttribute("onclick","openExtra();"))};window.clearMainUi=()=>{var Q=document.getElementById("gMenu"),B=document.getElementById("logo"),w=document.getElementById("settingsMenu"),D=document.getElementById("subText1"),F=document.getElementById("subText2");Q.style.transition="2s all",B.style.transition="2s all",D.style.transition="2s all",F.style.transition="2s all",window.inUniverse===!0?setTimeout(()=>{Q.style.left="10%",B.style.left="30%",Q.style.opacity="0",B.style.opacity="0%",setTimeout(()=>{D.style.bottom="49%",D.style.opacity="100%",setTimeout(()=>{F.style.bottom="45%"},500)},1e3),setTimeout(()=>{Q.style.display="none",B.style.display="none",w.style.display="none"},3e3)},2e3):(Q.style.display="block",B.style.display="block",w.style.display="grid",D.style.bottom="44%",D.style.opacity="0%",F.style.bottom="40%",F.style.opacity="0%",setTimeout(()=>{Q.style.left="6%",B.style.left="3%",Q.style.opacity="100%",B.style.opacity="100%"},1e3),setTimeout(()=>{F.style.display="none",D.style.display="none"}))};window.mainMenuPosition=(Q,B,w,D,F)=>{var O=document.querySelectorAll(".mainMenuBut");document.getElementById(""),O.forEach(L=>{switch(L.style.backgroundColor=Q,L.id){case"shopBut":document.getElementById("shopBut").style.left=B;break;case"newGameBut":document.getElementById("newGameBut").style.left=w;break;case"settingsBut":document.getElementById("settingsBut").style.left=D;break;case"subscribeBut":document.getElementById("subscribeBut").style.left=F;break}})};window.activateInvestors=()=>{document.getElementById("getInvestors").style.display="block",document.getElementById("investBut").style.display="block",window.matchMedia("(max-width: 768px)").matches&&(document.getElementById("settingsBut").style.display="none")};window.openInvestors=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="0%"};window.closeInvestor=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="-100%"};window.getParamsDesktop=()=>{const Q=new URLSearchParams(location.search);window.investorsView=Q.get("Investors"),window.investorsView==="true"&&window.activateInvestors()};var universeCanvas=document.querySelector("#universe"),exploreUI=document.querySelector("#exploreUI"),previewUI=document.getElementById("previewUI"),expBox=document.getElementById("explore"),pinUi=document.getElementById("getUniMenu").shadowRoot.getElementById("pinMenu"),locked=document.getElementById("getUniMenu").shadowRoot.getElementById("locked"),moveMenu=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),playerPos={x:0,y:0},selectionPos={x:0,y:0},selectionBoxPosition={x:0,y:0},cityPosition={x:0,y:0},convertedSelPos,convertedCursorPos,tileSize=18,playerNum=0,msL=50,msR=50,msU=50,msD=50,movementPaused=!1,timeoutHandle1,timeoutHandle2,previewOpen=!1,typing=!1,connected=!1,ci="false",tempLandEx=["1435","3162","2849"];window.suUiActor=null;window.landActivated=!1;const suIDL=idlFactory;var user={principal:null,balance:null,pk:null,nfts:null};const VITE_canister="wnunb-baaaa-aaaag-aaoya-cai",whitelist=[VITE_canister],host="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=wnunb-baaaa-aaaag-aaoya-cai";window.universeSystem=async()=>{var Q=universeCanvas.getContext("2d"),B=document.createElement("img"),w=document.getElementById("camera");if(soundtrack.stop("menuEntrance1"),soundtrack.play("menuEntrance1"),navigator.userAgent.includes("Brave")||navigator.userAgent.includes("Firefox")||navigator.userAgent.includes("Chrome")){document.querySelector("#universe").style.display="block",setTimeout(()=>{document.querySelector("#universe").style.opacity="100%"},100),B.onload=function(){Q.drawImage(B,0,0,B.width,B.height),Q.fillStyle="rgba(255, 255, 255, 0.08)";for(var L=0;L<B.width;L+=tileSize)Q.fillRect(L,0,1,B.height);for(var U=0;U<B.height;U+=tileSize)Q.fillRect(0,U,B.width,1)},B.src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg",w.scrollTo(990,0),w.addEventListener("scroll",function(){w.scrollLeft<990&&w.scrollTo(990,0),w.style.overflowY="hidden"},{passive:!1}),w.addEventListener("wheel",function(L){L.preventDefault()},{passive:!1}),universeCanvas.addEventListener("mousemove",window.mousePos),universeCanvas.addEventListener("click",window.selectedPos),document.addEventListener("focus",L=>{L.target,typing=!0},!0),document.addEventListener("blur",L=>{L.target,typing=!1},!0);var D=document.createElement("div"),F=document.createElement("div"),O=document.createElement("div");D.id="uniEvent",document.getElementById("camera").appendChild(D),F.id="uniEvent2",document.getElementById("camera").appendChild(F),O.id="uniEvent3",document.getElementById("camera").appendChild(O),window.adminUI(),window.openLocationCard(),window.playerPos()}else alert("The browser is not Brave, Firefox, or Chrome")};window.adminUI=()=>{var Q=document.createElement("div"),B=document.createElement("div"),w=document.createElement("div"),D=document.createElement("div"),F=document.createElement("div"),O=document.createElement("div"),L=document.createElement("div");document.getElementById("selection").style.display="block",window.uiWindow.id="adminUI",window.columnDiv.id="DebugColumn",window.rowDiv.id="DebugRow",window.selectionPosDiv.id="selectionPos",window.pixelPosDiv.id="pixelPos",window.selectPosBoxDiv.id="selectPosBox",window.playerCordDiv.id="playerCord",Q.appendChild(F),Q.appendChild(B),Q.appendChild(w),Q.appendChild(D),Q.appendChild(O),Q.appendChild(L),document.getElementById("main").appendChild(Q),dragElement(document.getElementById("adminUI"),!0),dragElement(document.getElementById("exploreUI"),!0),D.innerHTML="Selected Tile:",B.innerHTML="Column:",w.innerHTML="Row:",F.innerHTML="X: , Y:",O.innerHTML="SelBoxTile:",L.innerHTML="Player Coordinates:",window.initSelection(),window.moveSelection(),window.moveMenu()};window.mousePos=Q=>{var B=universeCanvas.getBoundingClientRect();playerPos.x=Math.round((Q.clientX-B.left)/tileSize),playerPos.y=Math.round((Q.clientY-B.top)/tileSize),window.pixelPos.x=Q.clientX-B.left,window.pixelPos.y=Q.clientY-B.top,document.getElementById("DebugColumn").innerHTML="Column: "+playerPos.x,document.getElementById("DebugRow").innerHTML="Row: "+playerPos.y,document.getElementById("pixelPos").innerHTML="X: "+window.pixelPos.x+", Y: "+window.pixelPos.y};window.selectedPos=Q=>{document.getElementById("explore").style.display="block";var B=universeCanvas.getBoundingClientRect();exploreUI.style.transform="scale(0)",selectionPos.x=Math.round((Q.clientX-(B.left+9))/tileSize),selectionPos.y=Math.round((Q.clientY-(B.top+9))/tileSize);var w=170-selectionPos.x;if(document.getElementById("selectionPos").innerHTML="Selected Tile: "+(170-w+170*selectionPos.y),playerNum=170-w+170*selectionPos.y,convertedCursorPos=170-w+170*selectionPos.y,previewUI.innerHTML="Land "+playerNum,previewUI.style.color="blue",expBox.style.left=Q.clientX-expBox.offsetWidth/2+"px",expBox.style.top=Q.clientY-expBox.offsetHeight/2+"px",expBox.style.left=Math.round((expBox.offsetLeft-B.left)/tileSize)*tileSize+B.left+"px",expBox.style.top=Math.round((expBox.offsetTop-B.top)/tileSize)*tileSize+B.top+"px",previewUI.style.display="block",previewUI.style.left=expBox.offsetLeft+expBox.offsetWidth+18+"px",previewUI.style.top=expBox.offsetTop-108+"px",previewUI.style.transformOrigin="bottom left",expBox.offsetTop<215&&(previewUI.style.top=expBox.offsetTop+expBox.offsetHeight+18+"px",previewUI.style.transformOrigin="top left"),expBox.offsetLeft>window.innerWidth-215&&(previewUI.style.left=expBox.offsetLeft-previewUI.offsetWidth-18+"px",previewUI.style.transformOrigin="bottom right"),expBox.offsetLeft<215&&(previewUI.style.transformOrigin="bottom left"),previewOpen==!1){previewUI.style.transform="scale(1)",previewOpen=!0,timeoutHandle1=setTimeout(()=>{previewUI.style.transform="scale(0)",previewOpen=!1},3e3);return}if(previewOpen==!0){clearTimeout(timeoutHandle1),timeoutHandle1=setTimeout(()=>{previewUI.style.transform="scale(0)",previewOpen=!1},3e3);return}};function dragElement(Q,B){var w=0,D=0,F=0,O=0;if(B===!1)return;pinUi.style.borderTop="2px solid rgba(225, 225, 225, 0.8)",pinUi.style.borderLeft="2px solid rgba(225, 225, 225, 0.8)",pinUi.style.filter="blur(0px)",pinUi.setAttribute("class","unpinned"),locked.style.opacity="0",document.getElementById(Q.id+"header")?document.getElementById(Q.id+"header").onmousedown=L:Q.onmousedown=L;function L(q){q=q||window.event,q.preventDefault(),F=q.clientX,O=q.clientY,document.onmouseup=G,document.onmousemove=U}function U(q){q=q||window.event,q.preventDefault(),w=F-q.clientX,D=O-q.clientY,F=q.clientX,O=q.clientY,Q.style.top=Q.offsetTop-D+"px",Q.style.left=Q.offsetLeft-w+"px"}function G(){document.onmouseup=null,document.onmousemove=null}}window.deactivateDrag=()=>{moveMenu.onmousedown=null,document.onmouseup=null,document.onmousemove=null,pinUi.style.borderTop="4px solid #ff002d",pinUi.style.borderLeft="4px solid #ff002d",pinUi.setAttribute("class","pinned"),locked.style.opacity="1"};window.pinMenu=()=>{if(pinUi.getAttribute("class")=="pinned"){dragElement(moveMenu,!0),pinUi.setAttribute("class","unpinned");return}if(pinUi.getAttribute("class")=="unpinned"){window.deactivateDrag(),pinUi.setAttribute("class","pinned"),moveMenu.style.transition="1s",moveMenu.style.top="36px",moveMenu.style.left="36px",document.getElementById("getUniMenu").toggleMenu(),setTimeout(()=>{moveMenu.style.transition=""},1200);return}};window.playerPos=()=>{var Q=document.getElementById("selection"),B=universeCanvas.getBoundingClientRect(),w=Q.getBoundingClientRect(),D={x:Math.round(w.left-B.left+2),y:Math.round(w.top-B.top+2)},F={x:Math.round(D.x/tileSize),y:Math.round(Math.round(D.y/tileSize))},O=170-F.x,L=170-O+F.y*170;if(document.getElementById("selectPosBox").innerHTML=`Player Position: ${L}`,convertedSelPos=170-O+F.y*170,cityPosition.x=D.x,cityPosition.y=D.y,document.getElementById("playerCord").innerHTML=`Player Coordinates: ${cityPosition.x}, ${cityPosition.y}`,`${L}`===tempLandEx[0]||`${L}`===tempLandEx[1]||`${L}`===tempLandEx[2]){if(window.landActivated=!0,document.getElementById("selection").style.animationPlayState="running",document.getElementById("selection").style.animation="whiteBoxGlow 1s infinite",document.getElementById("selection").innerHTML='<div id="exclamationMark" style="position: absolute; top: 8px; left: 8px; width: 18px; height: 18px; background-color: #ff002d; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; color: #fff; font-weight: 700;">!</div>',`${L}`===tempLandEx[0]){exploreUI.innerHTML=tempCont1;return}else if(`${L}`===tempLandEx[1]){exploreUI.innerHTML=tempCont2;return}else if(`${L}`===tempLandEx[2]){exploreUI.innerHTML=tempCont3;return}return}else window.landActivated=!1,document.getElementById("selection").style.animationPlayState="paused",document.getElementById("selection").style.animation="none",document.getElementById("selection").innerHTML="",exploreUI.innerHTML=""};window.moveSelection=()=>{document.removeEventListener("keydown",window.checkKeys);var Q=document.getElementById("selection"),B=window.innerHeight/tileSize,w=window.innerWidth/tileSize,D=B/2,F=w/2;selectionBoxPosition.x=F*tileSize,selectionBoxPosition.y=D*tileSize,document.addEventListener("keydown",function(O){exploreUI.style.transform="scale(0)",O.keyCode==37&&selectionBoxPosition.x>0&&movementPaused==!1&&(selectionBoxPosition.x-=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msL)),O.keyCode==38&&selectionBoxPosition.y>0&&movementPaused==!1&&(selectionBoxPosition.y-=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msU)),O.keyCode==39&&selectionBoxPosition.x<w*tileSize-tileSize&&movementPaused==!1&&(selectionBoxPosition.x+=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msR)),O.keyCode==40&&selectionBoxPosition.y<B*tileSize-tileSize&&movementPaused==!1&&(selectionBoxPosition.y+=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msD)),Q.style.left=selectionBoxPosition.x+"px",Q.style.top=selectionBoxPosition.y+"px",window.playerPos(),O.keyCode==32&&window.exploreOpenHelper()}),document.addEventListener("keydown",function(O){O.keyCode==37&&selectionBoxPosition.x==0&&(document.getElementById("camera").scrollLeft-=tileSize),O.keyCode==38&&selectionBoxPosition.y==0&&(document.getElementById("camera").scrollTop-=tileSize),O.keyCode==39&&selectionBoxPosition.x==w*tileSize-tileSize&&(document.getElementById("camera").scrollLeft+=tileSize),O.keyCode==40&&selectionBoxPosition.y==B*tileSize-tileSize&&(document.getElementById("camera").scrollTop+=tileSize)})};window.initSelection=()=>{var Q=window.innerWidth/tileSize,B=window.innerHeight/tileSize,w=document.getElementById("selection");w.style.left=Q/2*tileSize+"px",w.style.top=B/2*tileSize+"px"};window.openLocationCard=()=>{universeCanvas.addEventListener("dblclick",()=>{if(document.getElementById("previewUI").style.transform="scale(0)",convertedSelPos===convertedCursorPos)window.exploreOpenHelper();else{var Q=document.getElementById("adminUI");Q.style.opacity="1",setTimeout(()=>{Q.style.opacity="0"},5e3)}})};var tempCont1=`<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<h1>Ch.1 - Reacclimate</h1>
<p>In the distant land of T.A.O.S City, there exists a hidden world of self-exiled creators, known as the Oracles. These Oracles reside in ancient, desolate mansions on the outskirts of the city, and possess a wealth of knowledge and experience that is sought after by migrants from far-off lands. These migrants come to T.A.O.S City in search of a new life, but often find themselves lost and alone in a vast and unfamiliar place. They turn to the Oracles for guidance, seeking to avoid the wrath of the city's enforcers, a powerful and ruthless group of conservative citizens.
<br><br>
The journey to visit the Oracles is not an easy one. Many must travel for days, through treacherous and unforgiving terrain, in order to reach the Oracles' remote dwellings. But those who are successful in their quest are rewarded with a profound understanding of themselves and the world around them. The Oracles' teachings help the migrants to remember something that they had long forgotten, and to reacclimate to the new and strange land they now call home.
<br><br>
This is the story of one such migrant, and their journey to find the Oracles, to discover the truth about themselves, and to make a place for themselves in the world of T.A.O.S City. It is a story of struggle and sacrifice, of hope and perseverance, and of the power of the human spirit to overcome even the greatest of challenges.
</p>`,tempCont2=`
<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div id="tempVidHead">Ch.2 - Prologue 1</div>
<div id="tempVidCon">
  <video id="tempVid" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Chapter2-Prologue-1-HD.mp4" controls></video>
</div>
`,tempCont3=`
<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div id="tempVidHead2">Speak Easy</div>
<div id="tempVidCon2">
  <video id="tempVid2" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/nightout.mp4" controls></video>
</div>
`;window.exploreOpenHelper=()=>{console.log(typing);var Q=document.getElementById("exploreUI").offsetWidth;if(typing===!1)if(selectionBoxPosition.x<window.innerWidth/tileSize*tileSize-18-Q?exploreUI.style.left=selectionBoxPosition.x+tileSize+18+"px":exploreUI.style.left=selectionBoxPosition.x-18-Q+"px",exploreUI.style.transform="scale(1)",window.landActivated===!1){exploreUI.style.width="128px",exploreUI.style.height="20px",exploreUI.style.top=selectionBoxPosition.y-92+"px",clearTimeout(timeoutHandle2),timeoutHandle2=setTimeout(()=>{exploreUI.style.transform="scale(0)"},6e3),exploreUI.innerHTML=`
      <div id="unclaimedBox">
        <div id="unclaimed">UNCLAIMED LAND</div>
      </div>
      `;return}else{exploreUI.style.width="540px",exploreUI.style.height="810px",exploreUI.style.top=selectionBoxPosition.y/2+"px";var B=document.getElementById("tempVid"),w=document.getElementById("tempVid2");(B==null?void 0:B.src)!=""&&(B==null||B.play()),w.src!=""&&w.play()}};window.moveMenu=()=>{var Q=document.getElementById("universe");moveMenu.style.display="block";var B=document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems"),w=document.getElementById("getUniMenu").shadowRoot,D=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt"),F=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".men-active"),O=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".getNew");O.forEach(L=>{L.addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen()})}),D.forEach(L=>{L.addEventListener("mouseout",()=>{soundtrack.setVolume("menuMove3",.5),soundtrack.stop("menuMove3"),soundtrack.play("menuMove3")})}),B.childNodes.forEach(L=>{switch(L.id!="uniMenuItems"&&soundtrack.stop("menuLoading1"),L.addEventListener("click",()=>{window.clearAndSelectMenu(L.id),soundtrack.stop("menuEnter3"),soundtrack.play("menuEnter3")}),L.id){case"uniMenuShop":L.addEventListener("click",U=>{dragElement(moveMenu,!0),w.getElementById("fm-enhancements").style.display="grid",w.getElementById("fm-header-headline").style.opacity="0%",w.getElementById("fm-header-headline").style.pointerEvents="none",w.getElementById("fm-help").style.display="none",w.getElementById("fm-feedback").style.display="none",w.getElementById("fm-settings").style.display="none",w.getElementById("fm-profile").style.display="none",w.getElementById("fm-enhancements").innerHTML='<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">',w.getElementById("nftShop").addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen(),Q.style.filter="blur(5px)",w.getElementById("uniMenu").style.filter="blur(10px)"}),w.getElementById("fm-inventory").style.display="none",w.getElementById("menuLoadingScreen").style.display="none",w.getElementById("menuMessage").style.display="none",window.headlineSwtich(U)});break;case"uniMenuItems":L.addEventListener("click",U=>{window.headlineSwtich(U),setTimeout(()=>{window.headlineSwtich(U)},500),dragElement(moveMenu,!0),window.openInventory(),w.getElementById("fm-help").style.display="none",w.getElementById("fm-feedback").style.display="none",w.getElementById("fm-settings").style.display="none",w.getElementById("fm-inventory").style.display="grid",w.getElementById("fm-enhancements").style.display="none",w.getElementById("fm-profile").style.display="none",w.getElementById("fm-header").style.display="grid",w.getElementById("fm-header-headline").style.opacity="100%",w.getElementById("fm-header-headline").style.pointerEvents="auto",L.setAttribute("class","menuTabs selectedMenu2"),w.getElementById("uniMenuItemsSvg").childNodes.forEach(G=>{G.style.fill="white"}),w.getElementById("uniMenuHelp").setAttribute("class","menuTabs"),w.getElementById("uniMenuHelpSvg").childNodes.forEach(G=>{G.style.stroke="#ff002d"}),F.forEach(G=>{if(G.id==="fm-menu1"){var q={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(q),G.setAttribute("class","mmen-active it selectedMenu")}else G.setAttribute("class","men-active it")})});break;case"uniMenuProfile":L.addEventListener("click",U=>{window.headlineSwtich(U),setTimeout(()=>{window.headlineSwtich(U)},500),window.openInventory(),w.getElementById("fm-profile").style.display="grid",w.getElementById("fm-header").style.display="grid",w.getElementById("fm-header-headline").style.opacity="100%",w.getElementById("fm-help").style.display="none",w.getElementById("fm-inventory").style.display="none",w.getElementById("fm-feedback").style.display="none",w.getElementById("fm-settings").style.display="none",w.getElementById("fm-enhancements").style.display="none",w.getElementById("menuLoadingScreen").style.display="none",w.getElementById("fm-header-headline").style.pointerEvents="auto",F.forEach(G=>{if(G.id==="fm-menu1"){var q={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(q),G.setAttribute("class","mmen-active ht selectedMenu")}}),window.deactivateDrag()});break;case"uniMenuSettings":L.addEventListener("click",U=>{w.getElementById("fm-help").style.display="none",w.getElementById("fm-inventory").style.display="none",w.getElementById("fm-feedback").style.display="none",w.getElementById("fm-enhancements").style.display="none",w.getElementById("fm-profile").style.display="none",w.getElementById("fm-settings").style.display="grid",w.getElementById("menuLoadingScreen").style.display="none",w.getElementById("menuMessage").style.display="none",w.getElementById("fm-header").style.display="grid",w.getElementById("fm-header-headline").style.opacity="0%",w.getElementById("fm-header-headline").style.pointerEvents="none",window.headlineSwtich(U),window.deactivateDrag()});break;case"uniMenuHelp":L.addEventListener("click",U=>{dragElement(moveMenu,!0),w.getElementById("fm-help").style.display="grid",w.getElementById("fm-inventory").style.display="none",w.getElementById("fm-feedback").style.display="none",w.getElementById("fm-settings").style.display="none",w.getElementById("fm-enhancements").style.display="none",w.getElementById("fm-profile").style.display="none",w.getElementById("menuLoadingScreen").style.display="none",w.getElementById("menuMessage").style.display="none",w.getElementById("fm-header").style.display="grid",w.getElementById("fm-header-headline").style.opacity="100%",w.getElementById("fm-header-headline").style.pointerEvents="all",window.headlineSwtich(U),F.forEach(G=>{if(G.id==="fm-menu1"){var q={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(q),G.setAttribute("class","mmen-active ht selectedMenu")}else G.setAttribute("class","men-active ht")})});break;case"uniMenuFeedback":L.addEventListener("click",U=>{w.getElementById("feedbackHeadline").innerHTML="Help make T.A.O.S City better.",w.getElementById("fm-help").style.display="none",w.getElementById("fm-inventory").style.display="none",w.getElementById("fm-enhancements").style.display="none",w.getElementById("fm-profile").style.display="none",w.getElementById("fm-settings").style.display="none",w.getElementById("fm-header").style.display="grid",w.getElementById("menuLoadingScreen").style.display="none",w.getElementById("fm-header-headline").style.opacity="0%",w.getElementById("fm-header-headline").style.pointerEvents="none",w.getElementById("menuMessage").style.display="none",w.getElementById("fm-feedback").style.display="grid",w.getElementById("fm-feedback").addEventListener("click",()=>{window.deactivateDrag()}),window.headlineSwtich(U),window.deactivateDrag()});break;case"uniMenuExit":L.addEventListener("click",()=>{window.showMenu(),dragElement(moveMenu,!0),soundtrack.stop("menuExitSys1"),soundtrack.play("menuExitSys1")});break}}),dragElement(moveMenu,!0),window.hideMenu()};window.headlineSwtich=Q=>{var B=Q.target.id,w=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1"),D=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu2"),F=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu3");switch(B){case"menuInventory":w.innerHTML="Land & Enhancements",D.innerHTML="Assets",F.innerHTML="Sync",w.style.opacity="100%",w.style.userSelect="auto",D.style.opacity="100%",D.style.userSelect="auto",F.style.opacity="0%",F.style.userSelect="none";break;case"menuProfile":w.innerHTML="Earth",D.innerHTML="Bankoo",w.style.opacity="100%",w.style.userSelect="auto",D.style.opacity="100%",D.style.userSelect="none",F.style.opacity="0%",F.style.userSelect="none";break;case"menuHelp":w.innerHTML="Player",D.innerHTML="Wallet",F.innerHTML="Network",w.style.opacity="100%",w.style.userSelect="auto",D.style.opacity="100%",D.style.userSelect="auto",F.style.opacity="100%",F.style.userSelect="auto";break}};window.clearAndSelectMenu=Q=>{var B=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".menuTabs");B.forEach(w=>{w.id===Q&&w.id!=="uniMenuExit"?(w.setAttribute("class","menuTabs selectedMenu2"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${w.id}Svg`).childNodes.forEach(D=>{D.style.stroke="white"})):(w.setAttribute("class","menuTabs"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${w.id}Svg`).childNodes.forEach(D=>{D.style.stroke="#ff002d",D.style.fill="#ff002d"}))})};window.hideMenu=()=>{var Q=document.getElementById("logo");Q.style.opacity="0",Q.style.pointerEvents="none",document.getElementById("uniEvent").style.display="block",document.getElementById("uniEvent2").style.display="block",document.getElementById("uniEvent3").style.display="block",document.getElementById("welcome").style.display="none",document.getElementById("welcome").style.pointerEvents="none",document.getElementById("intro").style.display="none",document.getElementById("intro").style.opacity="0%",document.getElementById("introLogo").style.userSelect="none",document.getElementById("introLogo").style.pointerEvents="none",document.getElementById("introLogo").style.cursor="pointer"};window.showMenu=()=>{var B;var Q=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");document.querySelector("#universe").style.opacity="0%",setTimeout(()=>{document.querySelector("#universe").style.display="none"},1e3),document.getElementById("selection").style.display="none",(B=document.getElementById("uniEvent"))==null||B.remove(),document.getElementById("uniEvent2").remove(),document.getElementById("uniEvent3").remove(),document.getElementById("explore").style.display="none",previewUI.style.transform="scale(0)",Q.style.display="none",document.getElementById("adminUI").remove(),document.getElementById("welcome").style.display="grid",document.getElementById("welcome").style.pointerEvents="auto",document.getElementById("intro").style.display="grid",document.getElementById("intro").style.opacity="100%",document.getElementById("introLogo").style.userSelect="auto",document.getElementById("introLogo").style.pointerEvents="auto",document.getElementById("introLogo").style.cursor="pointer",document.getElementById("introLogo").addEventListener("click",()=>{window.universeSystem()})};window.openInventory=async()=>{var Q=document.getElementById("getUniMenu").shadowRoot,B=Q.getElementById("menuLoadingScreen"),w=Q.getElementById("menuLoadingScreen3");B.style.display="grid",w.style.display="grid",soundtrack.loop("menuLoading1"),soundtrack.play("menuLoading1"),await window.connectWallet().catch(D=>{console.log(D)})};window.connectWallet=async()=>{if(document.getElementById("getUniMenu").shadowRoot,window.ic===void 0){console.log("Plug not found - Get Plug Wallet"),connectError();return}else connected=await window.ic.plug.isConnected().catch(B=>{console.error(B)});const Q=()=>{console.log(window.ic.plug.sessionManager.sessionData)};if(connected===!1){const B=await window.ic.plug.requestConnect({whitelist,host,onConnectionUpdate:Q,timeout:5e4}).catch(F=>{var O={e:F};connectError(O),console.error("Connect Wallet",F)});await createActor().catch(F=>{console.log("Create Actor",F)});const w=await window.ic.plug.agent.getPrincipal().catch(F=>{console.error("Get Principal",F)});user.principal=`${w}`;const D=await window.ic.plug.requestBalance().catch(F=>{console.error("Get Balance",F)});user.balance=D,user.pk=B,playerState()}else connected===!0?(await createActor().catch(B=>{console.log(B)}),playerState()):connectError()};const playerState=async()=>{await window.suUiActor.metadata().catch(B=>{console.log("Get Metadata",B)}).catch(B=>{console.log(B)}),await window.suUiActor.adminUser().catch(B=>{console.log("Get Admin",{e:B});var w={e:B};window.dmb===!1&&attn(w)}).catch(B=>{console.log(B)})===user.principal&&console.log("Admin Logged in")},createActor=async()=>{user.principal=window.ic.plug.sessionManager.sessionData.principalId,window.suUiActor=await window.ic.plug.createActor({canisterId:VITE_canister,interfaceFactory:suIDL}).catch(Q=>{console.log("creatActor",Q)})},connectError=async Q=>{var w;var B=document.getElementById("getUniMenu").shadowRoot;switch(B.getElementById("menuLoadingScreen").style.display="none",B.getElementById("menuLoadingScreen3").style.display="none",soundtrack.stop("menuLoading1"),soundtrack.setVolume("menuError1",.4),soundtrack.play("menuError1"),B.getElementById("menuMessage").style.display="grid",((w=Q.e.result)==null?void 0:w.error_code)||Q.e.message){case"IC0501":B.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">MAINTENANCE ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody">City Central has been notified and will resolve the issue. In the meantime, try refreshing your connection and attempting again.</div>
      </div>`;break;case"The agent creation was rejected.":B.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">DISCONNECTED WALLET</div>
        <div id="menuMessageText">You'll need it to continue.</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;cursor:default;">T.A.O.S City's Plug wallet is the best of its class. Share any concerns with City Central in the <span style="text-decoration:underline;color: var(--accent);cursor:pointer;">Feedback</span> section.</div>
        </div>
      </div>`,B.querySelector("#menuMessageBody").addEventListener("click",()=>{var D={target:B.querySelector("#fm-menu2")};B.querySelector("#uniMenuFeedback").click(D)});break;default:B.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">NEURAL CHIP ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;">Seems like something went wrong with your Digisette. LX-Comm has been notified. In the meantime, try <span style="color:var(--accent);"><a href="#" onclick="location.reload()">refreshing</a></span> your connection and attempting again.</div>
      </div>`;break}},attn=async Q=>{let B=new FormData;B.append("Email","ATTN: RELOAD"),B.append("FeedbackText",`${Q.e.props.Message}`),fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:B,mode:"cors"}).then(w=>w.text())};window.systemNoti=async()=>{};window.rsvp=async()=>{document.getElementById("rsvpModal").style.display="block"};var peeking=!1,seekActive=!1,seeking=!1,cards=document.querySelectorAll(".seekOptCard");window.seekType="content";window.conversationHistory=[""];window.sameConvo=!1;window.digiFormDislayed=!1;window.newsFormDisplayed=!1;window.contactFormDisplayed=!1;window.form1Active=!1;window.form2Active=!1;window.galleryActive=!1;window.galleryEntry=!1;window.digiPre=!1;window.view="seeking";window.galleryType="video";window.dialogue=new SeekDialogue("",[{text:"What do you seek%?",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]},{text:"Ok, here they are.",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]);window.openSeek=()=>{var Q=document.getElementById("seekModal"),B=document.getElementById("manBG");document.getElementById("seekModal").style.display="grid",seeking===!1&&(setTimeout(()=>{window.dialogue.start(0,"sysResp"),setTimeout(()=>{gsapWithCSS.to(B,{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.fromTo(seekOptCards,{scale:.7,opacity:0},{duration:.3,scale:1,opacity:1,ease:"power4.out",stagger:{each:.2}})},1400)},1e3),cards.forEach(w=>{w.addEventListener("click",D=>{window.seek(D)})}),seeking=!0),Q.style.pointerEvents="auto",gsapWithCSS.to("#seekModal",{duration:.3,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,filter:"blur(0px)",ease:"power2.inOut"}),B.addEventListener("mouseover",()=>{window.openPeek()}),B.addEventListener("mouseleave",()=>{window.closePeek()}),B.addEventListener("mouseeout",()=>{window.closePeek()}),seekActive=!0,peeking=!1,window.trackMouse(),window.trackMouseMove()};const seekOptCards=document.querySelectorAll(".seekOptCard");window.closeSeek=()=>{if(window.view==="seeking"){seekActive=!1,gsapWithCSS.to("#seekModal",{duration:.3,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,scale:1.1,ease:"power2.inOut"}),setTimeout(()=>{document.getElementById("seekModal").style.pointerEvents="none",document.getElementById("seekModal").style.display="none"},500),gsapWithCSS.to(".seekContent",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.4,backgroundColor:"rgba(15,15,18,1)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:1,opacity:1,ease:"power2.inOut"}),peeking=!1,seekActive=!1;return}if(window.view==="gallery"){gsapWithCSS.to("#seekGallery",{duration:1,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#manBG",{duration:1,backgroundColor:"",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,border:"1px solid var(--secondary)",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,scale:1,y:0,ease:"power2.out"}),document.getElementById("seekBody").style.pointerEvents="auto",document.getElementById("manBG").style.pointerEvents="auto",document.getElementById("seekGallery").style.pointerEvents="none",document.getElementById("videoGallery").style.pointerEvents="none",setTimeout(()=>{document.getElementById("portalVideo").style.display="none",document.getElementById("portalVideo2").style.display="none"},1e3),document.getElementById("portalVideo2").pause(),document.getElementById("portalVideo").pause(),window.view="seeking",window.viewingPg=!1,gsapWithCSS.to("#tooltip",{opacity:0,duration:.5,ease:"power2.out"}),document.getElementById("tooltip").style.display="none",document.getElementById("homeTip").innerHTML="HOME",gsapWithCSS.to("#dropdown",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#soundToggle",{duration:1,opacity:0,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="none",document.getElementById("soundToggle").style.pointerEvents="none";return}};window.closePeek=()=>{if(peeking===!0&&seekActive===!0&&window.view==="seeking"){gsapWithCSS.to(".seekContent",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.1,backgroundColor:"rgba(15,15,18,1)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:.1,opacity:1,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}if(peeking===!0&&seekActive===!0&&window.galleryType==="images"){gsapWithCSS.to("#seekGallery",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:.1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:0,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}if(peeking===!0&&seekActive===!0&&window.galleryType==="video"){gsapWithCSS.to("#videoGallery",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:.1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:0,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}};window.openPeek=()=>{if(peeking===!1&&seekActive===!0&&window.view==="seeking"){gsapWithCSS.to(".seekContent",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.2,backgroundColor:"rgba(15,15,18,.5)",ease:"power2.inOut"}),seekActive=!0,peeking=!0;return}if(peeking===!1&&seekActive===!0&&window.galleryType==="images"){gsapWithCSS.to("#seekGallery",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:.5,ease:"power2.inOut"}),seekActive=!0,peeking=!0,window.view="gallery";return}if(peeking===!1&&seekActive===!0&&window.galleryType==="video"){gsapWithCSS.to("#videoGallery",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:.5,ease:"power2.inOut"}),seekActive=!0,peeking=!0,window.view="gallery";return}};gsapWithCSS.registerPlugin(TextPlugin);window.transitionWords=(Q,B,w,D)=>{const F=document.querySelector(Q),O=B.split(""),L=w.split(""),U=Math.max(O.length,L.length);for(;O.length<U;)O.push("");for(;L.length<U;)L.push("");const G=gsapWithCSS.timeline();for(let q=0;q<U;q++)G.to(F,{duration:D/U,text:L.slice(0,q+1).join(""),overwrite:"auto",onUpdate:()=>{const Y=O[q]||"",W=L[q]||"",X=Y.charCodeAt(0),te=W.charCodeAt(0),ae=Math.round((te-X)*G.progress()+X),ie=String.fromCharCode(ae),ce=L.slice(0,q).join("")+ie+L.slice(q+1).join("");F.textContent=ce}},q*(D/U))};window.seek=Q=>{var G,q;var B=Q.target.classList[1],w=document.querySelectorAll(".blink");switch(w.forEach(Y=>{Y.classList.remove("blink")}),B){case"seekOpt1":if(window.digiPre=!1,window.conversationHistory[0]==="seekOpt1"){var D=document.querySelectorAll(".visualSubMenu"),F=D[0];gsapWithCSS.to(F,{duration:.5,backgroundColor:"#94be8c",ease:"power2.inOut"}),gsapWithCSS.to(F,{duration:.5,color:"black",ease:"power2.inOut"}),gsapWithCSS.to(F,{duration:.8,backgroundColor:"",ease:"power2.inOut",delay:.8}),gsapWithCSS.to(F,{duration:.8,color:"",ease:"power2.inOut",delay:.8});return}else{window.convoHist(B),window.seekType="content";let Y="Show me some visuals.",W="Which would you like to see?";window.systemSpeak(Y,W),window.galleryActive=!0}break;case"seekOpt2":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt2"){window.convoHist(B),window.seekType="content";let Y="I want to listen to music",W="Now playing 'SCOG\xC9 Radio'.";window.systemSpeak(Y,W)}else{var O=document.querySelector("scoge-music").shadowRoot.querySelector("#musicInterface");gsapWithCSS.to(O,{duration:.5,backgroundColor:"red",ease:"power2.inOut"}),setTimeout(()=>{gsapWithCSS.to(O,{duration:.5,backgroundColor:"rgba(0,0,0,0)",ease:"power2.inOut"})},500)}break;case"seekOpt3":if(window.conversationHistory[0]!="seekOpt3"){window.convoHist(B),window.seekType="form";let Y="What is Digisette?",W="Digisette";window.systemSpeak(Y,W)}else(G=document.getElementById("genInput"))==null||G.focus();break;case"seekOpt4":window.digiPre=!1,window.convoHist(B),window.seekType="discover";var L="Tell me about Bankoo.",U="World";window.systemSpeak(L,U);break;case"seekOpt5":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt5"){window.convoHist(B),window.seekType="mailing";let Y="I want community?",W="Keep up by joining our mailing list.";window.systemSpeak(Y,W)}else(q=document.getElementById("genInput"))==null||q.focus();break;case"seekOpt6":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt6"){window.convoHist(B),window.seekType="info";let Y="Tell me about 'SCOG\xC9' the brand.",W="Sure, what would you like to know?";window.systemSpeak(Y,W)}else{let W=document.querySelectorAll(".infoSubMenu")[0];gsapWithCSS.to(W,{duration:.5,backgroundColor:"#94be8c",ease:"power2.inOut"}),gsapWithCSS.to(W,{duration:.5,color:"black",ease:"power2.inOut"}),gsapWithCSS.to(W,{duration:.8,backgroundColor:"",ease:"power2.inOut",delay:.8}),gsapWithCSS.to(W,{duration:.8,color:"",ease:"power2.inOut",delay:.8})}break}};window.convoHist=Q=>{window.conversationHistory[0]===Q?window.sameConvo=!0:(window.conversationHistory[0]=Q,window.sameConvo=!1)};window.systemSpeak=async(Q,B)=>{var F,O;try{document.getElementById("convoCont").style.display="block",setTimeout(()=>{document.getElementById("convoCont").style.animationPlayState="paused",document.getElementById("convoCont").style.animation="blink 1s infinite;",document.getElementById("Reqerror").style.display="block",setTimeout(()=>{document.getElementById("Reqerror").style.display="none",document.getElementById("convoCont").style.animationPlayState="running",gsapWithCSS.to("#convoCont",{duration:1,opacity:0,ease:"power2.inOut"})},3e3)},6e3);const L=new dist.Configuration({apiKey:VITE_ScogeI}),U=new dist.OpenAIApi(L);if(window.sameConvo===!0?window.completion=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:"Say tell me more in 5 words or less. Don't use quotation marks."}],max_tokens:15}).catch(q=>{console.log(q)}):window.completion=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this request '${Q}' Don't make it a question.`}],max_tokens:10}).catch(q=>{console.log(q)}),window.seekType==="content"||window.seekType==="info"||window.seekType==="mailing")window.completion2=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this answer '${B}'.`}],top_p:1,max_tokens:15,stop:["."]}).catch(q=>{console.log(q)});else if(window.seekType==="discover"){const q=await __vitePreload(()=>import("./library.51888626.js"),[]).catch(W=>{console.log(W)}),Y=JSON.stringify(q.default);var w=JSON.parse(Y),D=JSON.stringify(w[B]);window.completion2=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide some information from ${D} in a brief sentence, 20 words max.`}],top_p:1,max_tokens:30}).catch(W=>{console.log(W)})}else if(window.seekType==="form"){const q=await __vitePreload(()=>import("./library.51888626.js"),[]).catch(te=>{console.log(te)}),Y=JSON.stringify(q.default);let W=JSON.parse(Y),X=JSON.stringify(W[B]);window.completion2=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide some information from ${X} in a brief sentence, 20 words max, Include information from any key value pair. Then ask to 'join the MAILING LIST below'.`}],top_p:1,max_tokens:30}).catch(te=>{console.log(te)})}else if(window.seekType==="contact"){const q=await __vitePreload(()=>import("./library.51888626.js"),[]),Y=JSON.stringify(q.default);let W=JSON.parse(Y),X=JSON.stringify(W[B]);window.completion2=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide information from ${X} in a brief sentence, 20 words max, Do not include an opening statement, Alternatively they can 'send a Message below'.`}],top_p:1,max_tokens:20}).catch(te=>{console.log(te)})}else window.completion2=await U.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this answer '${B}'.`}],max_tokens:10}).catch(q=>{console.log(q)});window.completion2!=null&&(document.getElementById("convoCont").style.display="none");let G=new SeekDialogue("",[{text:`${(F=window.completion.data.choices[0].message.content)!=null?F:Q}`,choices:[{text:"Ok, here they are.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]);window.dialogue=new SeekDialogue("",[{text:"What $ do you seek%?",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]},{text:`${(O=window.completion2.data.choices[0].message.content)!=null?O:B}`,choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]),G.start(0,"userResp")}catch(L){console.log(L)}};const myContainer=document.querySelector("#seekResp");window.autoSmoothScrollToBottom=Q=>{if(Q.scrollHeight>Q.clientHeight){var B=gsapWithCSS.timeline();B.to(Q,{duration:2,scrollTop:Q.scrollHeight-Q.clientHeight-10,ease:"power2.out"})}};myContainer.addEventListener("DOMSubtreeModified",function(){setTimeout(()=>{window.autoSmoothScrollToBottom(myContainer)},250)});window.sub=()=>{var Q=document.querySelector("#subGeneral");Q.addEventListener("submit",B=>{B.preventDefault(),document.getElementById("genSubLoad").style.opacity="100%",gsapWithCSS.to("#genSubLoad",{rotation:360,duration:2,repeat:-1,ease:"none"});let w=new FormData(Q);fetch("https://script.google.com/macros/s/AKfycby5qNgMlcrC9_ICCIc7_h_7XdGgUGLOLuwFWaMiVLL7Bfd0-rmGAsF3lhPZuH-EKvvhnw/exec",{method:"POST",body:w,mode:"cors"}).then(D=>D.text()).then(D=>{var F=document.getElementById("subGeneral"),O=document.createElement("span");O.setAttribute("id","done"),O.innerHTML="Done!",F.appendChild(O),Q.reset(),gsapWithCSS.to("#done",{opacity:0,duration:1,ease:"power2.out",onComplete:function(){F.removeChild(O)}}),gsapWithCSS.to("#genSubLoad",{opacity:0,duration:1,ease:"power2.out"})})})};window.sub2=()=>{var Q=document.querySelector("#subGeneral2");Q.addEventListener("submit",B=>{document.getElementById("genCat2").value=`${document.getElementById("genInput3").value}`,B.preventDefault(),document.getElementById("genSubLoad2").style.opacity="100%",gsapWithCSS.to("#genSubLoad2",{rotation:360,duration:2,repeat:-1,ease:"none"});let w=new FormData(Q);fetch("https://script.google.com/macros/s/AKfycby5qNgMlcrC9_ICCIc7_h_7XdGgUGLOLuwFWaMiVLL7Bfd0-rmGAsF3lhPZuH-EKvvhnw/exec",{method:"POST",body:w,mode:"cors"}).then(D=>D.text()).then(D=>{var F=document.getElementById("genSubLoad2");Q.reset(),gsapWithCSS.killTweensOf("#genSubLoad2"),gsapWithCSS.set("#genSubLoad2",{rotation:0}),F.innerHTML="Sent.",setTimeout(()=>{gsapWithCSS.to("#genSubLoad2",{opacity:0,duration:1,ease:"power2.out"}),setTimeout(()=>{F.innerHTML="|"},1e3)},3e3)})})};var mouseMoving=!1;window.viewingPg=!1;window.trackMouse=Q=>{if(window.viewingPg===!0&&(window.galleryType=="images"||window.galleryType=="video"&&window.view==="gallery")){var B=document.getElementById("tooltip");B.style.left=Q.clientX-40+"px",B.style.top=Q.clientY-20+"px",gsapWithCSS.to("#tooltip",{opacity:1,duration:.5,ease:"power2.out"}),mouseMoving===!1&&gsapWithCSS.to("#tooltip",{opacity:0,duration:.5,ease:"power2.out",delay:2}),B.style.display="block"}};window.trackMouseMove=()=>{document.addEventListener("mousemove",function(){mouseMoving=!0,setTimeout(function(){mouseMoving=!1},2e3)})};window.initFilterActions=()=>{var Q=document.querySelectorAll(".visualFilters"),B=document.querySelector(".dropbtn").innerHTML;Q.forEach(w=>{w.addEventListener("click",D=>{var F=D.target;switch(D.preventDefault(),F.id){case"filter1":window.removeItemsNotEqualToValue("DY1"),window.transitionWords("#dBtn",`${B}____`,"DISCOVERY 1",2);break;case"filter2":window.removeItemsNotEqualToValue("CH1"),window.transitionWords("#dBtn",`${B}____`,"CHAPTER 1",2);break;case"filter3":window.removeItemsNotEqualToValue("CH2"),window.transitionWords("#dBtn",`${B}____`,"CHAPTER 2",2);break;case"filter4":window.removeItemsNotEqualToValue("ART"),window.transitionWords("#dBtn",`${B}____`,"ARTWORK",2);break;case"filter5":window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles),window.transitionWords("#dBtn",`${B}____`,"RANDOM",2),portal.showNextMedia();break}})})};window.removeItemsNotEqualToValue=Q=>{window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles);for(let B=window.filteredImages.length-1;B>=0;B--)window.filteredImages[B].publicUrl.includes(Q)===!1&&window.filteredImages.splice(B,1);for(let B=window.filteredVideos.length-1;B>=0;B--)window.filteredVideos[B].publicUrl.includes(Q)===!1&&window.filteredVideos.splice(B,1)};portal();
