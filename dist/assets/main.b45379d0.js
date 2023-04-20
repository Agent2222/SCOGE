var Ot=Object.defineProperty;var Lt=(D,B,w)=>B in D?Ot(D,B,{enumerable:!0,configurable:!0,writable:!0,value:w}):D[B]=w;var Ze=(D,B,w)=>(Lt(D,typeof B!="symbol"?B+"":B,w),w);import"./wScoge.fc00b881.js";import{io}from"https://cdn.socket.io/4.4.1/socket.io.esm.min.js";var uni="";const scriptRel="modulepreload",seen={},base$1="/",__vitePreload=function(B,w){return!w||w.length===0?B():Promise.all(w.map(Q=>{if(Q=`${base$1}${Q}`,Q in seen)return;seen[Q]=!0;const F=Q.endsWith(".css"),O=F?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Q}"]${O}`))return;const L=document.createElement("link");if(L.rel=F?"stylesheet":scriptRel,F||(L.as="script",L.crossOrigin=""),L.href=Q,document.head.appendChild(L),F)return new Promise((G,U)=>{L.addEventListener("load",G),L.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${Q}`)))})})).then(()=>B())};var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof{}!="undefined"?{}:typeof self!="undefined"?self:{},objectWithoutProperties={exports:{}},objectWithoutPropertiesLoose={exports:{}};(function(D){function B(w,Q){if(w==null)return{};var F={},O=Object.keys(w),L,G;for(G=0;G<O.length;G++)L=O[G],!(Q.indexOf(L)>=0)&&(F[L]=w[L]);return F}D.exports=B,D.exports.__esModule=!0,D.exports.default=D.exports})(objectWithoutPropertiesLoose);(function(D){var B=objectWithoutPropertiesLoose.exports;function w(Q,F){if(Q==null)return{};var O=B(Q,F),L,G;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(Q);for(G=0;G<U.length;G++)L=U[G],!(F.indexOf(L)>=0)&&(!Object.prototype.propertyIsEnumerable.call(Q,L)||(O[L]=Q[L]))}return O}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(objectWithoutProperties);var toConsumableArray={exports:{}},arrayWithoutHoles={exports:{}},arrayLikeToArray={exports:{}};(function(D){function B(w,Q){(Q==null||Q>w.length)&&(Q=w.length);for(var F=0,O=new Array(Q);F<Q;F++)O[F]=w[F];return O}D.exports=B,D.exports.__esModule=!0,D.exports.default=D.exports})(arrayLikeToArray);(function(D){var B=arrayLikeToArray.exports;function w(Q){if(Array.isArray(Q))return B(Q)}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(arrayWithoutHoles);var iterableToArray={exports:{}};(function(D){function B(w){if(typeof Symbol!="undefined"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}D.exports=B,D.exports.__esModule=!0,D.exports.default=D.exports})(iterableToArray);var unsupportedIterableToArray={exports:{}};(function(D){var B=arrayLikeToArray.exports;function w(Q,F){if(!!Q){if(typeof Q=="string")return B(Q,F);var O=Object.prototype.toString.call(Q).slice(8,-1);if(O==="Object"&&Q.constructor&&(O=Q.constructor.name),O==="Map"||O==="Set")return Array.from(Q);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return B(Q,F)}}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(unsupportedIterableToArray);var nonIterableSpread={exports:{}};(function(D){function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}D.exports=B,D.exports.__esModule=!0,D.exports.default=D.exports})(nonIterableSpread);(function(D){var B=arrayWithoutHoles.exports,w=iterableToArray.exports,Q=unsupportedIterableToArray.exports,F=nonIterableSpread.exports;function O(L){return B(L)||w(L)||Q(L)||F()}D.exports=O,D.exports.__esModule=!0,D.exports.default=D.exports})(toConsumableArray);var _typeof$2={exports:{}};(function(D){function B(w){return D.exports=B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Q){return typeof Q}:function(Q){return Q&&typeof Symbol=="function"&&Q.constructor===Symbol&&Q!==Symbol.prototype?"symbol":typeof Q},D.exports.__esModule=!0,D.exports.default=D.exports,B(w)}D.exports=B,D.exports.__esModule=!0,D.exports.default=D.exports})(_typeof$2);var defineProperty={exports:{}},toPropertyKey={exports:{}},toPrimitive={exports:{}};(function(D){var B=_typeof$2.exports.default;function w(Q,F){if(B(Q)!=="object"||Q===null)return Q;var O=Q[Symbol.toPrimitive];if(O!==void 0){var L=O.call(Q,F||"default");if(B(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(F==="string"?String:Number)(Q)}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(toPrimitive);(function(D){var B=_typeof$2.exports.default,w=toPrimitive.exports;function Q(F){var O=w(F,"string");return B(O)==="symbol"?O:String(O)}D.exports=Q,D.exports.__esModule=!0,D.exports.default=D.exports})(toPropertyKey);(function(D){var B=toPropertyKey.exports;function w(Q,F,O){return F=B(F),F in Q?Object.defineProperty(Q,F,{value:O,enumerable:!0,configurable:!0,writable:!0}):Q[F]=O,Q}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(defineProperty);var classCallCheck={exports:{}};(function(D){function B(w,Q){if(!(w instanceof Q))throw new TypeError("Cannot call a class as a function")}D.exports=B,D.exports.__esModule=!0,D.exports.default=D.exports})(classCallCheck);var createClass={exports:{}};(function(D){var B=toPropertyKey.exports;function w(F,O){for(var L=0;L<O.length;L++){var G=O[L];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(F,B(G.key),G)}}function Q(F,O,L){return O&&w(F.prototype,O),L&&w(F,L),Object.defineProperty(F,"prototype",{writable:!1}),F}D.exports=Q,D.exports.__esModule=!0,D.exports.default=D.exports})(createClass);var regeneratorRuntime$1={exports:{}};(function(D){var B=_typeof$2.exports.default;function w(){D.exports=w=function(){return Q},D.exports.__esModule=!0,D.exports.default=D.exports;var Q={},F=Object.prototype,O=F.hasOwnProperty,L=Object.defineProperty||function(_e,ve,Qe){_e[ve]=Qe.value},G=typeof Symbol=="function"?Symbol:{},U=G.iterator||"@@iterator",q=G.asyncIterator||"@@asyncIterator",Y=G.toStringTag||"@@toStringTag";function W(_e,ve,Qe){return Object.defineProperty(_e,ve,{value:Qe,enumerable:!0,configurable:!0,writable:!0}),_e[ve]}try{W({},"")}catch{W=function(Qe,xe,Me){return Qe[xe]=Me}}function X(_e,ve,Qe,xe){var Me=ve&&ve.prototype instanceof ne?ve:ne,Fe=Object.create(Me.prototype),Ue=new Le(xe||[]);return L(Fe,"_invoke",{value:De(_e,Qe,Ue)}),Fe}function te(_e,ve,Qe){try{return{type:"normal",arg:_e.call(ve,Qe)}}catch(xe){return{type:"throw",arg:xe}}}Q.wrap=X;var oe={};function ne(){}function ce(){}function fe(){}var me={};W(me,U,function(){return this});var Ie=Object.getPrototypeOf,ye=Ie&&Ie(Ie(Pe([])));ye&&ye!==F&&O.call(ye,U)&&(me=ye);var Be=fe.prototype=ne.prototype=Object.create(me);function Ce(_e){["next","throw","return"].forEach(function(ve){W(_e,ve,function(Qe){return this._invoke(ve,Qe)})})}function we(_e,ve){function Qe(Me,Fe,Ue,He){var Ke=te(_e[Me],_e,Fe);if(Ke.type!=="throw"){var le=Ke.arg,Xe=le.value;return Xe&&B(Xe)=="object"&&O.call(Xe,"__await")?ve.resolve(Xe.__await).then(function(st){Qe("next",st,Ue,He)},function(st){Qe("throw",st,Ue,He)}):ve.resolve(Xe).then(function(st){le.value=st,Ue(le)},function(st){return Qe("throw",st,Ue,He)})}He(Ke.arg)}var xe;L(this,"_invoke",{value:function(Fe,Ue){function He(){return new ve(function(Ke,le){Qe(Fe,Ue,Ke,le)})}return xe=xe?xe.then(He,He):He()}})}function De(_e,ve,Qe){var xe="suspendedStart";return function(Me,Fe){if(xe==="executing")throw new Error("Generator is already running");if(xe==="completed"){if(Me==="throw")throw Fe;return Ge()}for(Qe.method=Me,Qe.arg=Fe;;){var Ue=Qe.delegate;if(Ue){var He=be(Ue,Qe);if(He){if(He===oe)continue;return He}}if(Qe.method==="next")Qe.sent=Qe._sent=Qe.arg;else if(Qe.method==="throw"){if(xe==="suspendedStart")throw xe="completed",Qe.arg;Qe.dispatchException(Qe.arg)}else Qe.method==="return"&&Qe.abrupt("return",Qe.arg);xe="executing";var Ke=te(_e,ve,Qe);if(Ke.type==="normal"){if(xe=Qe.done?"completed":"suspendedYield",Ke.arg===oe)continue;return{value:Ke.arg,done:Qe.done}}Ke.type==="throw"&&(xe="completed",Qe.method="throw",Qe.arg=Ke.arg)}}}function be(_e,ve){var Qe=ve.method,xe=_e.iterator[Qe];if(xe===void 0)return ve.delegate=null,Qe==="throw"&&_e.iterator.return&&(ve.method="return",ve.arg=void 0,be(_e,ve),ve.method==="throw")||Qe!=="return"&&(ve.method="throw",ve.arg=new TypeError("The iterator does not provide a '"+Qe+"' method")),oe;var Me=te(xe,_e.iterator,ve.arg);if(Me.type==="throw")return ve.method="throw",ve.arg=Me.arg,ve.delegate=null,oe;var Fe=Me.arg;return Fe?Fe.done?(ve[_e.resultName]=Fe.value,ve.next=_e.nextLoc,ve.method!=="return"&&(ve.method="next",ve.arg=void 0),ve.delegate=null,oe):Fe:(ve.method="throw",ve.arg=new TypeError("iterator result is not an object"),ve.delegate=null,oe)}function Se(_e){var ve={tryLoc:_e[0]};1 in _e&&(ve.catchLoc=_e[1]),2 in _e&&(ve.finallyLoc=_e[2],ve.afterLoc=_e[3]),this.tryEntries.push(ve)}function Ne(_e){var ve=_e.completion||{};ve.type="normal",delete ve.arg,_e.completion=ve}function Le(_e){this.tryEntries=[{tryLoc:"root"}],_e.forEach(Se,this),this.reset(!0)}function Pe(_e){if(_e){var ve=_e[U];if(ve)return ve.call(_e);if(typeof _e.next=="function")return _e;if(!isNaN(_e.length)){var Qe=-1,xe=function Me(){for(;++Qe<_e.length;)if(O.call(_e,Qe))return Me.value=_e[Qe],Me.done=!1,Me;return Me.value=void 0,Me.done=!0,Me};return xe.next=xe}}return{next:Ge}}function Ge(){return{value:void 0,done:!0}}return ce.prototype=fe,L(Be,"constructor",{value:fe,configurable:!0}),L(fe,"constructor",{value:ce,configurable:!0}),ce.displayName=W(fe,Y,"GeneratorFunction"),Q.isGeneratorFunction=function(_e){var ve=typeof _e=="function"&&_e.constructor;return!!ve&&(ve===ce||(ve.displayName||ve.name)==="GeneratorFunction")},Q.mark=function(_e){return Object.setPrototypeOf?Object.setPrototypeOf(_e,fe):(_e.__proto__=fe,W(_e,Y,"GeneratorFunction")),_e.prototype=Object.create(Be),_e},Q.awrap=function(_e){return{__await:_e}},Ce(we.prototype),W(we.prototype,q,function(){return this}),Q.AsyncIterator=we,Q.async=function(_e,ve,Qe,xe,Me){Me===void 0&&(Me=Promise);var Fe=new we(X(_e,ve,Qe,xe),Me);return Q.isGeneratorFunction(ve)?Fe:Fe.next().then(function(Ue){return Ue.done?Ue.value:Fe.next()})},Ce(Be),W(Be,Y,"Generator"),W(Be,U,function(){return this}),W(Be,"toString",function(){return"[object Generator]"}),Q.keys=function(_e){var ve=Object(_e),Qe=[];for(var xe in ve)Qe.push(xe);return Qe.reverse(),function Me(){for(;Qe.length;){var Fe=Qe.pop();if(Fe in ve)return Me.value=Fe,Me.done=!1,Me}return Me.done=!0,Me}},Q.values=Pe,Le.prototype={constructor:Le,reset:function(ve){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ne),!ve)for(var Qe in this)Qe.charAt(0)==="t"&&O.call(this,Qe)&&!isNaN(+Qe.slice(1))&&(this[Qe]=void 0)},stop:function(){this.done=!0;var ve=this.tryEntries[0].completion;if(ve.type==="throw")throw ve.arg;return this.rval},dispatchException:function(ve){if(this.done)throw ve;var Qe=this;function xe(le,Xe){return Ue.type="throw",Ue.arg=ve,Qe.next=le,Xe&&(Qe.method="next",Qe.arg=void 0),!!Xe}for(var Me=this.tryEntries.length-1;Me>=0;--Me){var Fe=this.tryEntries[Me],Ue=Fe.completion;if(Fe.tryLoc==="root")return xe("end");if(Fe.tryLoc<=this.prev){var He=O.call(Fe,"catchLoc"),Ke=O.call(Fe,"finallyLoc");if(He&&Ke){if(this.prev<Fe.catchLoc)return xe(Fe.catchLoc,!0);if(this.prev<Fe.finallyLoc)return xe(Fe.finallyLoc)}else if(He){if(this.prev<Fe.catchLoc)return xe(Fe.catchLoc,!0)}else{if(!Ke)throw new Error("try statement without catch or finally");if(this.prev<Fe.finallyLoc)return xe(Fe.finallyLoc)}}}},abrupt:function(ve,Qe){for(var xe=this.tryEntries.length-1;xe>=0;--xe){var Me=this.tryEntries[xe];if(Me.tryLoc<=this.prev&&O.call(Me,"finallyLoc")&&this.prev<Me.finallyLoc){var Fe=Me;break}}Fe&&(ve==="break"||ve==="continue")&&Fe.tryLoc<=Qe&&Qe<=Fe.finallyLoc&&(Fe=null);var Ue=Fe?Fe.completion:{};return Ue.type=ve,Ue.arg=Qe,Fe?(this.method="next",this.next=Fe.finallyLoc,oe):this.complete(Ue)},complete:function(ve,Qe){if(ve.type==="throw")throw ve.arg;return ve.type==="break"||ve.type==="continue"?this.next=ve.arg:ve.type==="return"?(this.rval=this.arg=ve.arg,this.method="return",this.next="end"):ve.type==="normal"&&Qe&&(this.next=Qe),oe},finish:function(ve){for(var Qe=this.tryEntries.length-1;Qe>=0;--Qe){var xe=this.tryEntries[Qe];if(xe.finallyLoc===ve)return this.complete(xe.completion,xe.afterLoc),Ne(xe),oe}},catch:function(ve){for(var Qe=this.tryEntries.length-1;Qe>=0;--Qe){var xe=this.tryEntries[Qe];if(xe.tryLoc===ve){var Me=xe.completion;if(Me.type==="throw"){var Fe=Me.arg;Ne(xe)}return Fe}}throw new Error("illegal catch attempt")},delegateYield:function(ve,Qe,xe){return this.delegate={iterator:Pe(ve),resultName:Qe,nextLoc:xe},this.method==="next"&&(this.arg=void 0),oe}},Q}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(regeneratorRuntime$1);var runtime=regeneratorRuntime$1.exports(),regenerator=runtime;try{regeneratorRuntime=runtime}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}var asyncToGenerator={exports:{}};(function(D){function B(Q,F,O,L,G,U,q){try{var Y=Q[U](q),W=Y.value}catch(X){O(X);return}Y.done?F(W):Promise.resolve(W).then(L,G)}function w(Q){return function(){var F=this,O=arguments;return new Promise(function(L,G){var U=Q.apply(F,O);function q(W){B(U,L,G,q,Y,"next",W)}function Y(W){B(U,L,G,q,Y,"throw",W)}q(void 0)})}}D.exports=w,D.exports.__esModule=!0,D.exports.default=D.exports})(asyncToGenerator);var axios$6={exports:{}},bind$5=function(B,w){return function(){for(var F=new Array(arguments.length),O=0;O<F.length;O++)F[O]=arguments[O];return B.apply(w,F)}},bind$4=bind$5,toString$1=Object.prototype.toString;function isArray$1(D){return toString$1.call(D)==="[object Array]"}function isUndefined$1(D){return typeof D=="undefined"}function isBuffer$1(D){return D!==null&&!isUndefined$1(D)&&D.constructor!==null&&!isUndefined$1(D.constructor)&&typeof D.constructor.isBuffer=="function"&&D.constructor.isBuffer(D)}function isArrayBuffer$1(D){return toString$1.call(D)==="[object ArrayBuffer]"}function isFormData$1(D){return typeof FormData!="undefined"&&D instanceof FormData}function isArrayBufferView$1(D){var B;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?B=ArrayBuffer.isView(D):B=D&&D.buffer&&D.buffer instanceof ArrayBuffer,B}function isString$1(D){return typeof D=="string"}function isNumber$1(D){return typeof D=="number"}function isObject$1(D){return D!==null&&typeof D=="object"}function isPlainObject$1(D){if(toString$1.call(D)!=="[object Object]")return!1;var B=Object.getPrototypeOf(D);return B===null||B===Object.prototype}function isDate$1(D){return toString$1.call(D)==="[object Date]"}function isFile$1(D){return toString$1.call(D)==="[object File]"}function isBlob$1(D){return toString$1.call(D)==="[object Blob]"}function isFunction$1(D){return toString$1.call(D)==="[object Function]"}function isStream$1(D){return isObject$1(D)&&isFunction$1(D.pipe)}function isURLSearchParams$1(D){return typeof URLSearchParams!="undefined"&&D instanceof URLSearchParams}function trim$1(D){return D.trim?D.trim():D.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv$1(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach$1(D,B){if(!(D===null||typeof D=="undefined"))if(typeof D!="object"&&(D=[D]),isArray$1(D))for(var w=0,Q=D.length;w<Q;w++)B.call(null,D[w],w,D);else for(var F in D)Object.prototype.hasOwnProperty.call(D,F)&&B.call(null,D[F],F,D)}function merge$1(){var D={};function B(F,O){isPlainObject$1(D[O])&&isPlainObject$1(F)?D[O]=merge$1(D[O],F):isPlainObject$1(F)?D[O]=merge$1({},F):isArray$1(F)?D[O]=F.slice():D[O]=F}for(var w=0,Q=arguments.length;w<Q;w++)forEach$1(arguments[w],B);return D}function extend$1(D,B,w){return forEach$1(B,function(F,O){w&&typeof F=="function"?D[O]=bind$4(F,w):D[O]=F}),D}function stripBOM$1(D){return D.charCodeAt(0)===65279&&(D=D.slice(1)),D}var utils$w={isArray:isArray$1,isArrayBuffer:isArrayBuffer$1,isBuffer:isBuffer$1,isFormData:isFormData$1,isArrayBufferView:isArrayBufferView$1,isString:isString$1,isNumber:isNumber$1,isObject:isObject$1,isPlainObject:isPlainObject$1,isUndefined:isUndefined$1,isDate:isDate$1,isFile:isFile$1,isBlob:isBlob$1,isFunction:isFunction$1,isStream:isStream$1,isURLSearchParams:isURLSearchParams$1,isStandardBrowserEnv:isStandardBrowserEnv$1,forEach:forEach$1,merge:merge$1,extend:extend$1,trim:trim$1,stripBOM:stripBOM$1},utils$v=utils$w;function encode$1(D){return encodeURIComponent(D).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$5=function(B,w,Q){if(!w)return B;var F;if(Q)F=Q(w);else if(utils$v.isURLSearchParams(w))F=w.toString();else{var O=[];utils$v.forEach(w,function(U,q){U===null||typeof U=="undefined"||(utils$v.isArray(U)?q=q+"[]":U=[U],utils$v.forEach(U,function(W){utils$v.isDate(W)?W=W.toISOString():utils$v.isObject(W)&&(W=JSON.stringify(W)),O.push(encode$1(q)+"="+encode$1(W))}))}),F=O.join("&")}if(F){var L=B.indexOf("#");L!==-1&&(B=B.slice(0,L)),B+=(B.indexOf("?")===-1?"?":"&")+F}return B},utils$u=utils$w;function InterceptorManager$3(){this.handlers=[]}InterceptorManager$3.prototype.use=function(B,w,Q){return this.handlers.push({fulfilled:B,rejected:w,synchronous:Q?Q.synchronous:!1,runWhen:Q?Q.runWhen:null}),this.handlers.length-1};InterceptorManager$3.prototype.eject=function(B){this.handlers[B]&&(this.handlers[B]=null)};InterceptorManager$3.prototype.forEach=function(B){utils$u.forEach(this.handlers,function(Q){Q!==null&&B(Q)})};var InterceptorManager_1$1=InterceptorManager$3,utils$t=utils$w,normalizeHeaderName$3=function(B,w){utils$t.forEach(B,function(F,O){O!==w&&O.toUpperCase()===w.toUpperCase()&&(B[w]=F,delete B[O])})},enhanceError$5=function(B,w,Q,F,O){return B.config=w,Q&&(B.code=Q),B.request=F,B.response=O,B.isAxiosError=!0,B.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},B},enhanceError$4=enhanceError$5,createError$5=function(B,w,Q,F,O){var L=new Error(B);return enhanceError$4(L,w,Q,F,O)},createError$4=createError$5,settle$3=function(B,w,Q){var F=Q.config.validateStatus;!Q.status||!F||F(Q.status)?B(Q):w(createError$4("Request failed with status code "+Q.status,Q.config,null,Q.request,Q))},utils$s=utils$w,cookies$3=utils$s.isStandardBrowserEnv()?function(){return{write:function(w,Q,F,O,L,G){var U=[];U.push(w+"="+encodeURIComponent(Q)),utils$s.isNumber(F)&&U.push("expires="+new Date(F).toGMTString()),utils$s.isString(O)&&U.push("path="+O),utils$s.isString(L)&&U.push("domain="+L),G===!0&&U.push("secure"),document.cookie=U.join("; ")},read:function(w){var Q=document.cookie.match(new RegExp("(^|;\\s*)("+w+")=([^;]*)"));return Q?decodeURIComponent(Q[3]):null},remove:function(w){this.write(w,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$3=function(B){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(B)},combineURLs$3=function(B,w){return w?B.replace(/\/+$/,"")+"/"+w.replace(/^\/+/,""):B},isAbsoluteURL$2=isAbsoluteURL$3,combineURLs$2=combineURLs$3,buildFullPath$3=function(B,w){return B&&!isAbsoluteURL$2(w)?combineURLs$2(B,w):w},utils$r=utils$w,ignoreDuplicateOf$1=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$3=function(B){var w={},Q,F,O;return B&&utils$r.forEach(B.split(`
`),function(G){if(O=G.indexOf(":"),Q=utils$r.trim(G.substr(0,O)).toLowerCase(),F=utils$r.trim(G.substr(O+1)),Q){if(w[Q]&&ignoreDuplicateOf$1.indexOf(Q)>=0)return;Q==="set-cookie"?w[Q]=(w[Q]?w[Q]:[]).concat([F]):w[Q]=w[Q]?w[Q]+", "+F:F}}),w},utils$q=utils$w,isURLSameOrigin$3=utils$q.isStandardBrowserEnv()?function(){var B=/(msie|trident)/i.test(navigator.userAgent),w=document.createElement("a"),Q;function F(O){var L=O;return B&&(w.setAttribute("href",L),L=w.href),w.setAttribute("href",L),{href:w.href,protocol:w.protocol?w.protocol.replace(/:$/,""):"",host:w.host,search:w.search?w.search.replace(/^\?/,""):"",hash:w.hash?w.hash.replace(/^#/,""):"",hostname:w.hostname,port:w.port,pathname:w.pathname.charAt(0)==="/"?w.pathname:"/"+w.pathname}}return Q=F(window.location.href),function(L){var G=utils$q.isString(L)?F(L):L;return G.protocol===Q.protocol&&G.host===Q.host}}():function(){return function(){return!0}}(),utils$p=utils$w,settle$2=settle$3,cookies$2=cookies$3,buildURL$4=buildURL$5,buildFullPath$2=buildFullPath$3,parseHeaders$2=parseHeaders$3,isURLSameOrigin$2=isURLSameOrigin$3,createError$3=createError$5,xhr$1=function(B){return new Promise(function(Q,F){var O=B.data,L=B.headers,G=B.responseType;utils$p.isFormData(O)&&delete L["Content-Type"];var U=new XMLHttpRequest;if(B.auth){var q=B.auth.username||"",Y=B.auth.password?unescape(encodeURIComponent(B.auth.password)):"";L.Authorization="Basic "+btoa(q+":"+Y)}var W=buildFullPath$2(B.baseURL,B.url);U.open(B.method.toUpperCase(),buildURL$4(W,B.params,B.paramsSerializer),!0),U.timeout=B.timeout;function X(){if(!!U){var oe="getAllResponseHeaders"in U?parseHeaders$2(U.getAllResponseHeaders()):null,ne=!G||G==="text"||G==="json"?U.responseText:U.response,ce={data:ne,status:U.status,statusText:U.statusText,headers:oe,config:B,request:U};settle$2(Q,F,ce),U=null}}if("onloadend"in U?U.onloadend=X:U.onreadystatechange=function(){!U||U.readyState!==4||U.status===0&&!(U.responseURL&&U.responseURL.indexOf("file:")===0)||setTimeout(X)},U.onabort=function(){!U||(F(createError$3("Request aborted",B,"ECONNABORTED",U)),U=null)},U.onerror=function(){F(createError$3("Network Error",B,null,U)),U=null},U.ontimeout=function(){var ne="timeout of "+B.timeout+"ms exceeded";B.timeoutErrorMessage&&(ne=B.timeoutErrorMessage),F(createError$3(ne,B,B.transitional&&B.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",U)),U=null},utils$p.isStandardBrowserEnv()){var te=(B.withCredentials||isURLSameOrigin$2(W))&&B.xsrfCookieName?cookies$2.read(B.xsrfCookieName):void 0;te&&(L[B.xsrfHeaderName]=te)}"setRequestHeader"in U&&utils$p.forEach(L,function(ne,ce){typeof O=="undefined"&&ce.toLowerCase()==="content-type"?delete L[ce]:U.setRequestHeader(ce,ne)}),utils$p.isUndefined(B.withCredentials)||(U.withCredentials=!!B.withCredentials),G&&G!=="json"&&(U.responseType=B.responseType),typeof B.onDownloadProgress=="function"&&U.addEventListener("progress",B.onDownloadProgress),typeof B.onUploadProgress=="function"&&U.upload&&U.upload.addEventListener("progress",B.onUploadProgress),B.cancelToken&&B.cancelToken.promise.then(function(ne){!U||(U.abort(),F(ne),U=null)}),O||(O=null),U.send(O)})},utils$o=utils$w,normalizeHeaderName$2=normalizeHeaderName$3,enhanceError$3=enhanceError$5,DEFAULT_CONTENT_TYPE$1={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset$1(D,B){!utils$o.isUndefined(D)&&utils$o.isUndefined(D["Content-Type"])&&(D["Content-Type"]=B)}function getDefaultAdapter$1(){var D;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(D=xhr$1),D}function stringifySafely$1(D,B,w){if(utils$o.isString(D))try{return(B||JSON.parse)(D),utils$o.trim(D)}catch(Q){if(Q.name!=="SyntaxError")throw Q}return(w||JSON.stringify)(D)}var defaults$7={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter$1(),transformRequest:[function(B,w){return normalizeHeaderName$2(w,"Accept"),normalizeHeaderName$2(w,"Content-Type"),utils$o.isFormData(B)||utils$o.isArrayBuffer(B)||utils$o.isBuffer(B)||utils$o.isStream(B)||utils$o.isFile(B)||utils$o.isBlob(B)?B:utils$o.isArrayBufferView(B)?B.buffer:utils$o.isURLSearchParams(B)?(setContentTypeIfUnset$1(w,"application/x-www-form-urlencoded;charset=utf-8"),B.toString()):utils$o.isObject(B)||w&&w["Content-Type"]==="application/json"?(setContentTypeIfUnset$1(w,"application/json"),stringifySafely$1(B)):B}],transformResponse:[function(B){var w=this.transitional,Q=w&&w.silentJSONParsing,F=w&&w.forcedJSONParsing,O=!Q&&this.responseType==="json";if(O||F&&utils$o.isString(B)&&B.length)try{return JSON.parse(B)}catch(L){if(O)throw L.name==="SyntaxError"?enhanceError$3(L,this,"E_JSON_PARSE"):L}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(B){return B>=200&&B<300}};defaults$7.headers={common:{Accept:"application/json, text/plain, */*"}};utils$o.forEach(["delete","get","head"],function(B){defaults$7.headers[B]={}});utils$o.forEach(["post","put","patch"],function(B){defaults$7.headers[B]=utils$o.merge(DEFAULT_CONTENT_TYPE$1)});var defaults_1$1=defaults$7,utils$n=utils$w,defaults$6=defaults_1$1,transformData$3=function(B,w,Q){var F=this||defaults$6;return utils$n.forEach(Q,function(L){B=L.call(F,B,w)}),B},isCancel$3=function(B){return!!(B&&B.__CANCEL__)},utils$m=utils$w,transformData$2=transformData$3,isCancel$2=isCancel$3,defaults$5=defaults_1$1;function throwIfCancellationRequested$1(D){D.cancelToken&&D.cancelToken.throwIfRequested()}var dispatchRequest$3=function(B){throwIfCancellationRequested$1(B),B.headers=B.headers||{},B.data=transformData$2.call(B,B.data,B.headers,B.transformRequest),B.headers=utils$m.merge(B.headers.common||{},B.headers[B.method]||{},B.headers),utils$m.forEach(["delete","get","head","post","put","patch","common"],function(F){delete B.headers[F]});var w=B.adapter||defaults$5.adapter;return w(B).then(function(F){return throwIfCancellationRequested$1(B),F.data=transformData$2.call(B,F.data,F.headers,B.transformResponse),F},function(F){return isCancel$2(F)||(throwIfCancellationRequested$1(B),F&&F.response&&(F.response.data=transformData$2.call(B,F.response.data,F.response.headers,B.transformResponse))),Promise.reject(F)})},utils$l=utils$w,mergeConfig$5=function(B,w){w=w||{};var Q={},F=["url","method","data"],O=["headers","auth","proxy","params"],L=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],G=["validateStatus"];function U(X,te){return utils$l.isPlainObject(X)&&utils$l.isPlainObject(te)?utils$l.merge(X,te):utils$l.isPlainObject(te)?utils$l.merge({},te):utils$l.isArray(te)?te.slice():te}function q(X){utils$l.isUndefined(w[X])?utils$l.isUndefined(B[X])||(Q[X]=U(void 0,B[X])):Q[X]=U(B[X],w[X])}utils$l.forEach(F,function(te){utils$l.isUndefined(w[te])||(Q[te]=U(void 0,w[te]))}),utils$l.forEach(O,q),utils$l.forEach(L,function(te){utils$l.isUndefined(w[te])?utils$l.isUndefined(B[te])||(Q[te]=U(void 0,B[te])):Q[te]=U(void 0,w[te])}),utils$l.forEach(G,function(te){te in w?Q[te]=U(B[te],w[te]):te in B&&(Q[te]=U(void 0,B[te]))});var Y=F.concat(O).concat(L).concat(G),W=Object.keys(B).concat(Object.keys(w)).filter(function(te){return Y.indexOf(te)===-1});return utils$l.forEach(W,q),Q};const name$1="axios",version$1="0.21.4",description$1="Promise based HTTP client for the browser and node.js",main$1="index.js",scripts$1={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository$1={type:"git",url:"https://github.com/axios/axios.git"},keywords$1=["xhr","http","ajax","promise","node"],author$1="Matt Zabriskie",license$1="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies$1={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser$1={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies$1={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0$1={name:name$1,version:version$1,description:description$1,main:main$1,scripts:scripts$1,repository:repository$1,keywords:keywords$1,author:author$1,license:license$1,bugs,homepage,devDependencies:devDependencies$1,browser:browser$1,jsdelivr,unpkg,typings,dependencies:dependencies$1,bundlesize},pkg=require$$0$1,validators$3={};["object","boolean","number","function","string","symbol"].forEach(function(D,B){validators$3[D]=function(Q){return typeof Q===D||"a"+(B<1?"n ":" ")+D}});var deprecatedWarnings$1={},currentVerArr=pkg.version.split(".");function isOlderVersion(D,B){for(var w=B?B.split("."):currentVerArr,Q=D.split("."),F=0;F<3;F++){if(w[F]>Q[F])return!0;if(w[F]<Q[F])return!1}return!1}validators$3.transitional=function(B,w,Q){var F=w&&isOlderVersion(w);function O(L,G){return"[Axios v"+pkg.version+"] Transitional option '"+L+"'"+G+(Q?". "+Q:"")}return function(L,G,U){if(B===!1)throw new Error(O(G," has been removed in "+w));return F&&!deprecatedWarnings$1[G]&&(deprecatedWarnings$1[G]=!0,console.warn(O(G," has been deprecated since v"+w+" and will be removed in the near future"))),B?B(L,G,U):!0}};function assertOptions$1(D,B,w){if(typeof D!="object")throw new TypeError("options must be an object");for(var Q=Object.keys(D),F=Q.length;F-- >0;){var O=Q[F],L=B[O];if(L){var G=D[O],U=G===void 0||L(G,O,D);if(U!==!0)throw new TypeError("option "+O+" must be "+U);continue}if(w!==!0)throw Error("Unknown option "+O)}}var validator$3={isOlderVersion,assertOptions:assertOptions$1,validators:validators$3},utils$k=utils$w,buildURL$3=buildURL$5,InterceptorManager$2=InterceptorManager_1$1,dispatchRequest$2=dispatchRequest$3,mergeConfig$4=mergeConfig$5,validator$2=validator$3,validators$2=validator$2.validators;function Axios$3(D){this.defaults=D,this.interceptors={request:new InterceptorManager$2,response:new InterceptorManager$2}}Axios$3.prototype.request=function(B){typeof B=="string"?(B=arguments[1]||{},B.url=arguments[0]):B=B||{},B=mergeConfig$4(this.defaults,B),B.method?B.method=B.method.toLowerCase():this.defaults.method?B.method=this.defaults.method.toLowerCase():B.method="get";var w=B.transitional;w!==void 0&&validator$2.assertOptions(w,{silentJSONParsing:validators$2.transitional(validators$2.boolean,"1.0.0"),forcedJSONParsing:validators$2.transitional(validators$2.boolean,"1.0.0"),clarifyTimeoutError:validators$2.transitional(validators$2.boolean,"1.0.0")},!1);var Q=[],F=!0;this.interceptors.request.forEach(function(X){typeof X.runWhen=="function"&&X.runWhen(B)===!1||(F=F&&X.synchronous,Q.unshift(X.fulfilled,X.rejected))});var O=[];this.interceptors.response.forEach(function(X){O.push(X.fulfilled,X.rejected)});var L;if(!F){var G=[dispatchRequest$2,void 0];for(Array.prototype.unshift.apply(G,Q),G=G.concat(O),L=Promise.resolve(B);G.length;)L=L.then(G.shift(),G.shift());return L}for(var U=B;Q.length;){var q=Q.shift(),Y=Q.shift();try{U=q(U)}catch(W){Y(W);break}}try{L=dispatchRequest$2(U)}catch(W){return Promise.reject(W)}for(;O.length;)L=L.then(O.shift(),O.shift());return L};Axios$3.prototype.getUri=function(B){return B=mergeConfig$4(this.defaults,B),buildURL$3(B.url,B.params,B.paramsSerializer).replace(/^\?/,"")};utils$k.forEach(["delete","get","head","options"],function(B){Axios$3.prototype[B]=function(w,Q){return this.request(mergeConfig$4(Q||{},{method:B,url:w,data:(Q||{}).data}))}});utils$k.forEach(["post","put","patch"],function(B){Axios$3.prototype[B]=function(w,Q,F){return this.request(mergeConfig$4(F||{},{method:B,url:w,data:Q}))}});var Axios_1$1=Axios$3;function Cancel$5(D){this.message=D}Cancel$5.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$5.prototype.__CANCEL__=!0;var Cancel_1$1=Cancel$5,Cancel$4=Cancel_1$1;function CancelToken$1(D){if(typeof D!="function")throw new TypeError("executor must be a function.");var B;this.promise=new Promise(function(F){B=F});var w=this;D(function(F){w.reason||(w.reason=new Cancel$4(F),B(w.reason))})}CancelToken$1.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken$1.source=function(){var B,w=new CancelToken$1(function(F){B=F});return{token:w,cancel:B}};var CancelToken_1$1=CancelToken$1,spread$1=function(B){return function(Q){return B.apply(null,Q)}},isAxiosError$1=function(B){return typeof B=="object"&&B.isAxiosError===!0},utils$j=utils$w,bind$3=bind$5,Axios$2=Axios_1$1,mergeConfig$3=mergeConfig$5,defaults$4=defaults_1$1;function createInstance$1(D){var B=new Axios$2(D),w=bind$3(Axios$2.prototype.request,B);return utils$j.extend(w,Axios$2.prototype,B),utils$j.extend(w,B),w}var axios$5=createInstance$1(defaults$4);axios$5.Axios=Axios$2;axios$5.create=function(B){return createInstance$1(mergeConfig$3(axios$5.defaults,B))};axios$5.Cancel=Cancel_1$1;axios$5.CancelToken=CancelToken_1$1;axios$5.isCancel=isCancel$3;axios$5.all=function(B){return Promise.all(B)};axios$5.spread=spread$1;axios$5.isAxiosError=isAxiosError$1;axios$6.exports=axios$5;axios$6.exports.default=axios$5;var axios$4=axios$6.exports,_objectWithoutProperties=objectWithoutProperties.exports,_toConsumableArray=toConsumableArray.exports,_typeof$1=_typeof$2.exports,_defineProperty=defineProperty.exports,_classCallCheck=classCallCheck.exports,_createClass=createClass.exports,_regeneratorRuntime=regenerator,_asyncToGenerator=asyncToGenerator.exports,axios$3=axios$4;function _interopDefaultLegacy(D){return D&&typeof D=="object"&&"default"in D?D:{default:D}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof$1),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios$3),Storage=function(){function D(B){_classCallCheck__default.default(this,D),this.commerce=B}return _createClass__default.default(D,[{key:"set",value:function(B,w,Q){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;var F,O="";if(F=this.commerce.options.config&&this.commerce.options.config.cookie_path!==void 0?this.commerce.options.config.cookie_path:"/",Q){var L=new Date;L.setTime(L.getTime()+24*Q*60*60*1e3),O="; expires="+L.toUTCString()}return document.cookie=B+"="+w+O+"; path="+F}},{key:"get",value:function(B){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;B+="=";for(var w=0,Q=Array.from(document.cookie.split(";"));w<Q.length;w++){for(var F=Q[w];F.charAt(0)===" ";)F=F.substring(1,F.length);if(F.indexOf(B)===0)return F.substring(B.length,F.length)}return null}},{key:"remove",value:function(B){return this.set(B,"",-1)}}]),D}();function ownKeys(D,B){var w=Object.keys(D);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(D);B&&(Q=Q.filter(function(F){return Object.getOwnPropertyDescriptor(D,F).enumerable})),w.push.apply(w,Q)}return w}function _objectSpread(D){for(var B=1;B<arguments.length;B++){var w=arguments[B]!=null?arguments[B]:{};B%2?ownKeys(w,!0).forEach(function(Q){_defineProperty__default.default(D,Q,w[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(w)):ownKeys(w).forEach(function(Q){Object.defineProperty(D,Q,Object.getOwnPropertyDescriptor(w,Q))})}return D}var Cart=function(){function D(w){_classCallCheck__default.default(this,D),this.commerce=w,this.cartId=null}var B;return _createClass__default.default(D,[{key:"refresh",value:function(){var w=this;return this.commerce.request("carts").then(function(Q){var F=Q.id;return w.commerce.storage.set("commercejs_cart_id",F,w.commerce.options.cartLifetime),w.cartId=F,Q})}},{key:"id",value:function(){if(this.cartId!==null)return this.cartId;var w=this.commerce.storage.get("commercejs_cart_id");return typeof w=="string"&&w.length?w:null}},{key:"request",value:(B=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function w(){var Q,F,O,L,G,U=this,q=arguments;return _regeneratorRuntime__default.default.wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(Q=q.length>0&&q[0]!==void 0?q[0]:"",F=q.length>1&&q[1]!==void 0?q[1]:"get",O=q.length>2&&q[2]!==void 0?q[2]:null,L=q.length>3&&q[3]!==void 0&&q[3],G=typeof Q=="string"&&Q.length?"/".concat(Q):"",this.id()){Y.next=8;break}return Y.next=8,this.refresh();case 8:return Y.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(G),F,O,L).catch(function(W){if(W.statusCode&&W.statusCode===404)return U.refresh().then(function(){return U.commerce.request("carts/".concat(U.id()).concat(G),F,O,L)});throw W}));case 9:case"end":return Y.stop()}},w,this)})),function(){return B.apply(this,arguments)})},{key:"add",value:function(w){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,O={};if(typeof F=="string"&&F.startsWith("vrnt"))O.variant_id=F;else if(F&&_typeof__default.default(F)==="object"){var L=Object.keys(F).every(function(q){return q.startsWith("vgrp")}),G=Object.values(F).every(function(q){return q.startsWith("optn")});if(!L||!G)throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");O.options=F}else if(F)throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");var U=_objectSpread({id:_typeof__default.default(w)==="object"?w.id:w,quantity:Q},O);return this.request("","post",U)}},{key:"retrieve",value:function(){var w=this,Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return Q&&(this.cartId=Q),this.request().then(function(F){return w.cartId=F&&F.id||null,F})}},{key:"checkQuantity",value:function(w,Q){return this.commerce.request("products/".concat(w)).then(function(F){return Q<=F.quantity})}},{key:"remove",value:function(w){return this.request("items/".concat(w),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(w,Q){return this.request("items/".concat(w),"put",Q)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),D}(),Categories=function(){function D(B){_classCallCheck__default.default(this,D),this.commerce=B}return _createClass__default.default(D,[{key:"list",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return typeof B=="function"?this.commerce.request("categories"):this.commerce.request("categories","get",B)}},{key:"retrieve",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("categories/".concat(B),"get",w)}}]),D}(),Checkout=function(){function Checkout(D){_classCallCheck__default.default(this,Checkout),this.commerce=D}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then(function(data){return eval(data.sift_js)})}},{key:"generateToken",value:function(D,B){return this.commerce.request("checkouts/".concat(D),"get",B)}},{key:"generateTokenFrom",value:function(D,B){if(!["product_id","cart","permalink"].includes(D))throw new Error('Cannot generate a token with unknown "'.concat(D,'" type'));return this.generateToken(B,{type:D})}},{key:"capture",value:function(D,B){var w=this;return this.commerce.request("checkouts/".concat(D),"post",B).then(function(Q){return w.commerce.cart.refresh(),Q})}},{key:"receipt",value:function(D){return this.commerce.request("checkouts/".concat(D,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(D,B){return this.commerce.request("checkouts/".concat(D,"/check/pay_what_you_want"),"get",B)}},{key:"fields",value:function(D){return this.commerce.request("checkouts/".concat(D,"/fields"))}},{key:"setTaxZone",value:function(D,B){return this.commerce.request("checkouts/".concat(D,"/helper/set_tax_zone"),"get",B)}},{key:"getLocationFromIP",value:function(D){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=B&&B.length?"?ip_address=".concat(B):"";return this.commerce.request("checkouts/".concat(D,"/helper/location_from_ip").concat(w))}},{key:"isFree",value:function(D){return this.commerce.request("checkouts/".concat(D,"/check/is_free"))}},{key:"checkVariant",value:function(D,B,w){return this.commerce.request("checkouts/".concat(D,"/check/").concat(B,"/variant"),"get",w)}},{key:"checkDiscount",value:function(D,B){return this.commerce.request("checkouts/".concat(D,"/check/discount"),"get",B)}},{key:"checkShippingOption",value:function(D,B){return this.commerce.request("checkouts/".concat(D,"/check/shipping"),"get",B)}},{key:"getShippingOptions",value:function(D,B){return this.commerce.request("checkouts/".concat(D,"/helper/shipping_options"),"get",B)}},{key:"checkQuantity",value:function(D,B,w){return this.commerce.request("checkouts/".concat(D,"/check/").concat(B,"/quantity"),"get",w)}},{key:"helperValidation",value:function(D){return this.commerce.request("checkouts/".concat(D,"/helper/validation"))}},{key:"getLive",value:function(D){return this.commerce.request("checkouts/".concat(D,"/live"))}},{key:"getToken",value:function(D){return this.commerce.request("checkouts/tokens/".concat(D))}},{key:"checkGiftcard",value:function(D,B){return this.commerce.request("checkouts/".concat(D,"/check/giftcard"),"get",B)}}]),Checkout}();function ownKeys$1(D,B){var w=Object.keys(D);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(D);B&&(Q=Q.filter(function(F){return Object.getOwnPropertyDescriptor(D,F).enumerable})),w.push.apply(w,Q)}return w}function _objectSpread$1(D){for(var B=1;B<arguments.length;B++){var w=arguments[B]!=null?arguments[B]:{};B%2?ownKeys$1(w,!0).forEach(function(Q){_defineProperty__default.default(D,Q,w[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(w)):ownKeys$1(w).forEach(function(Q){Object.defineProperty(D,Q,Object.getOwnPropertyDescriptor(w,Q))})}return D}var Customer=function(){function D(B){_classCallCheck__default.default(this,D),this.commerce=B,this.data={}}return _createClass__default.default(D,[{key:"login",value:function(B,w){return this.commerce.request("customers/email-token","post",{email:B,base_url:w})}},{key:"getToken",value:function(B){var w=this,Q=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:B}).then(function(F){return Q&&(F.customer_id||F.jwt)&&(w.data={id:F.customer_id||null,token:F.jwt||null},window.localStorage.setItem("commercejs_customer_id",w.data.id),window.localStorage.setItem("commercejs_customer_token",w.data.token)),F})}},{key:"update",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(w,Q),this._request("customers/".concat(w||this.id()),"PUT",B,{},Q)}},{key:"getOrders",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this._assertArgsProvided(B,w);var F=_objectSpread$1({sortBy:"created_at",sortDirection:"desc"},Q);return this._request("customers/".concat(B||this.id(),"/orders"),"get",F,{},w)}},{key:"getOrder",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(w,Q),this._request("customers/".concat(w||this.id(),"/orders/").concat(B),"get",{},{},Q)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return this.id()!==null&&this.token()!==null}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(B){if(this.data[B]&&this.data[B].length)return this.data[B];var w=window.localStorage.getItem("commercejs_customer_".concat(B));return typeof w=="string"&&w.length?w:null}},{key:"_request",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},O=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,L=O||this.token();return this.commerce.request(B,w,Q,_objectSpread$1({"X-Authorization":void 0,Authorization:"Bearer ".concat(L)},F))}},{key:"_assertArgsProvided",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(B===null&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(w===null&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),D}(),Merchants=function(){function D(B){_classCallCheck__default.default(this,D),this.commerce=B}return _createClass__default.default(D,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),D}(),Products=function(){function D(B){_classCallCheck__default.default(this,D),this.commerce=B}return _createClass__default.default(D,[{key:"list",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.commerce.request("products","get",B)}},{key:"retrieve",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("products/".concat(B),"get",w)}},{key:"getVariants",value:function(B){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.commerce.request("products/".concat(B,"/variants"),"get",w)}},{key:"getVariant",value:function(B,w){return this.commerce.request("products/".concat(B,"/variants/").concat(w),"get")}}]),D}(),Services=function(){function D(B){_classCallCheck__default.default(this,D),this.commerce=B}return _createClass__default.default(D,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(B){return this.commerce.request("services/locale/".concat(B,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(B,w){return this.commerce.request("services/locale/".concat(B,"/countries/").concat(w,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(B){return this.commerce.request("services/locale/".concat(B,"/subdivisions"))}}]),D}(),Features={Cart,Categories,Checkout,Customer,Merchants,Products,Services},consoleHelper=function(){var D,B,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"black",Q=arguments.length>1?arguments[1]:void 0,F=arguments.length>2?arguments[2]:void 0,O=arguments.length>3?arguments[3]:void 0,L=!1;switch(w){case"success":w="#488f5a",D="\u2705   ";break;case"info":w="DodgerBlue",D="";break;case"error":w="rgba(244, 67, 54, 1)",O.error.type==="validation"||O.error.type==="unprocessable_entity"?(D="\u{1F6AB} Validation/missing fields",Q=""):D="\u274C HTTP ERROR ",L=!0;break;case"warning":w="rgba(208, 154, 35, 1)",D="\u26A0\uFE0F  "}return L===!0?(console.log("%c"+D+Q,"color:"+w+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),_typeof__default.default(O.error.errors)==="object"?(B=O.error.errors,void Object.keys(B).forEach(function(G,U){Object.values(B[G]).forEach(function(q){console.log("%c"+G+": %c"+q,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")})})):console.log("%c"+O.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")):_typeof__default.default(w)==="object"?(console.log("%c"+Q,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(w)):(console.log("%c"+D+Q,"color:"+w+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),void(F&&console.log("%c"+F,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")))},debuggerOnNotice=function(){typeof window!="undefined"&&(console.log(`%c\r
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
`,"text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px"))};function ownKeys$2(D,B){var w=Object.keys(D);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(D);B&&(Q=Q.filter(function(F){return Object.getOwnPropertyDescriptor(D,F).enumerable})),w.push.apply(w,Q)}return w}function _objectSpread$2(D){for(var B=1;B<arguments.length;B++){var w=arguments[B]!=null?arguments[B]:{};B%2?ownKeys$2(w,!0).forEach(function(Q){_defineProperty__default.default(D,Q,w[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(w)):ownKeys$2(w).forEach(function(Q){Object.defineProperty(D,Q,Object.getOwnPropertyDescriptor(w,Q))})}return D}var defaultEventCallback=function(D){var B=new CustomEvent("Commercejs.".concat(D),{bubbles:!1,cancelable:!1});return window.dispatchEvent(B)},Commerce=function(){function D(B){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1],Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_classCallCheck__default.default(this,D),this.options=_objectSpread$2(_objectSpread$2({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback,disableStorage:!1,cartLifetime:30,allowSecretKey:!1},Q),{},{apiKey:B,debug:w}),typeof B!="string"||B.length===0)throw new Error("\u26A0\uFE0F Invalid public key given to Commerce.js client");if(!Q.allowSecretKey&&B.toLowerCase().substring(0,3)==="sk_")throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");if(this.options.cartLifetime<=0||this.options.cartLifetime>30)throw new Error("cartLifetime configuration option must be between 1 and 30 days");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),w&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(D,[{key:"error",value:function(B){if(this.consoleHelper&&this.options.debug){var w=B.response,Q="[".concat(w.status,"] Type: ").concat(w.statusText),F=typeof w.data=="string"?w.data:w.statusText;return this.consoleHelper("error",Q,F,w.data)}}},{key:"request",value:function(B){var w=this,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},L=arguments.length>4&&arguments[4]!==void 0&&arguments[4],G={"X-Authorization":this.options.apiKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},U=Q==="get"?F:null,q=Q==="get"?null:F,Y=this.options.timeoutMs||6e4,W=this.options.axiosConfig||{},X=this.options.url;X.substring(X.length-1)!=="/"&&(X+="/");var te=axios__default.default(_objectSpread$2(_objectSpread$2({url:B,method:Q,baseURL:"".concat(X).concat(this.options.version,"/"),params:U,data:q,timeout:Y},W),{},{headers:_objectSpread$2(_objectSpread$2(_objectSpread$2({},G),W.headers),O)}));if(L)return te;var oe=this.options.eventCallback;return te.then(function(ne){if(w.consoleHelper&&w.options.debug&&_typeof__default.default(ne.data._console)==="object"&&w.consoleHelper.apply(w,_toConsumableArray__default.default(ne.data._console)),_typeof__default.default(ne.data)!=="object"||Array.isArray(ne.data))return ne.data;var ce=ne.data,fe=ce._event,me=_objectWithoutProperties__default.default(ce,["_event"]);return typeof fe=="string"&&typeof oe=="function"&&oe(fe),me}).catch(function(ne){throw w.error(ne),ne.response?{message:"Unsuccessful response (".concat(ne.response.status,": ").concat(ne.response.statusText,") received"),statusCode:ne.response.status,statusText:ne.response.statusText,data:ne.response.data,originalError:ne}:ne})}}]),D}(),lib=Commerce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=D=>B=>typeof B=="function"?((w,Q)=>(customElements.define(w,Q),Q))(D,B):((w,Q)=>{const{kind:F,elements:O}=Q;return{kind:F,elements:O,finisher(L){customElements.define(w,L)}}})(D,B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$3=(D,B)=>B.kind==="method"&&B.descriptor&&!("value"in B.descriptor)?{...B,finisher(w){w.createProperty(B.key,D)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:B.key,initializer(){typeof B.initializer=="function"&&(this[B.key]=B.initializer.call(this))},finisher(w){w.createProperty(B.key,D)}};function e$3(D){return(B,w)=>w!==void 0?((Q,F,O)=>{F.constructor.createProperty(O,Q)})(D,B,w):i$3(D,B)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;((n$4=window.HTMLSlotElement)===null||n$4===void 0?void 0:n$4.prototype.assignedElements)!=null;var configurable=!0;function bound(D,B,w){if(typeof(w==null?void 0:w.value)!="function")throw new TypeError(`Only methods can be decorated with @bound. <${B!=null?B:D.name}> is not a method!`);return{configurable,get(){const Q=w.value.bind(this);return Object.defineProperty(this,B,{value:Q,configurable,writable:!0}),Q}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=window,e$2=t$1.ShadowRoot&&(t$1.ShadyCSS===void 0||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(B,w,Q){if(this._$cssResult$=!0,Q!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=B,this.t=w}get styleSheet(){let B=this.o;const w=this.t;if(e$2&&B===void 0){const Q=w!==void 0&&w.length===1;Q&&(B=n$3.get(w)),B===void 0&&((this.o=B=new CSSStyleSheet).replaceSync(this.cssText),Q&&n$3.set(w,B))}return B}toString(){return this.cssText}}const r$2=D=>new o$3(typeof D=="string"?D:D+"",void 0,s$3),i$2=(D,...B)=>{const w=D.length===1?D[0]:B.reduce((Q,F,O)=>Q+(L=>{if(L._$cssResult$===!0)return L.cssText;if(typeof L=="number")return L;throw Error("Value passed to 'css' function must be a 'css' function result: "+L+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(F)+D[O+1],D[0]);return new o$3(w,D,s$3)},S$1=(D,B)=>{e$2?D.adoptedStyleSheets=B.map(w=>w instanceof CSSStyleSheet?w:w.styleSheet):B.forEach(w=>{const Q=document.createElement("style"),F=t$1.litNonce;F!==void 0&&Q.setAttribute("nonce",F),Q.textContent=w.cssText,D.appendChild(Q)})},c$2=e$2?D=>D:D=>D instanceof CSSStyleSheet?(B=>{let w="";for(const Q of B.cssRules)w+=Q.cssText;return r$2(w)})(D):D;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(D,B){switch(B){case Boolean:D=D?h$1:null;break;case Object:case Array:D=D==null?D:JSON.stringify(D)}return D},fromAttribute(D,B){let w=D;switch(B){case Boolean:w=D!==null;break;case Number:w=D===null?null:Number(D);break;case Object:case Array:try{w=JSON.parse(D)}catch{w=null}}return w}},a$1=(D,B)=>B!==D&&(B==B||D==D),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(B){var w;this.finalize(),((w=this.h)!==null&&w!==void 0?w:this.h=[]).push(B)}static get observedAttributes(){this.finalize();const B=[];return this.elementProperties.forEach((w,Q)=>{const F=this._$Ep(Q,w);F!==void 0&&(this._$Ev.set(F,Q),B.push(F))}),B}static createProperty(B,w=l$3){if(w.state&&(w.attribute=!1),this.finalize(),this.elementProperties.set(B,w),!w.noAccessor&&!this.prototype.hasOwnProperty(B)){const Q=typeof B=="symbol"?Symbol():"__"+B,F=this.getPropertyDescriptor(B,Q,w);F!==void 0&&Object.defineProperty(this.prototype,B,F)}}static getPropertyDescriptor(B,w,Q){return{get(){return this[w]},set(F){const O=this[B];this[w]=F,this.requestUpdate(B,O,Q)},configurable:!0,enumerable:!0}}static getPropertyOptions(B){return this.elementProperties.get(B)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const B=Object.getPrototypeOf(this);if(B.finalize(),B.h!==void 0&&(this.h=[...B.h]),this.elementProperties=new Map(B.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const w=this.properties,Q=[...Object.getOwnPropertyNames(w),...Object.getOwnPropertySymbols(w)];for(const F of Q)this.createProperty(F,w[F])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(B){const w=[];if(Array.isArray(B)){const Q=new Set(B.flat(1/0).reverse());for(const F of Q)w.unshift(c$2(F))}else B!==void 0&&w.push(c$2(B));return w}static _$Ep(B,w){const Q=w.attribute;return Q===!1?void 0:typeof Q=="string"?Q:typeof B=="string"?B.toLowerCase():void 0}u(){var B;this._$E_=new Promise(w=>this.enableUpdating=w),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(B=this.constructor.h)===null||B===void 0||B.forEach(w=>w(this))}addController(B){var w,Q;((w=this._$ES)!==null&&w!==void 0?w:this._$ES=[]).push(B),this.renderRoot!==void 0&&this.isConnected&&((Q=B.hostConnected)===null||Q===void 0||Q.call(B))}removeController(B){var w;(w=this._$ES)===null||w===void 0||w.splice(this._$ES.indexOf(B)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((B,w)=>{this.hasOwnProperty(w)&&(this._$Ei.set(w,this[w]),delete this[w])})}createRenderRoot(){var B;const w=(B=this.shadowRoot)!==null&&B!==void 0?B:this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){var B;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(B=this._$ES)===null||B===void 0||B.forEach(w=>{var Q;return(Q=w.hostConnected)===null||Q===void 0?void 0:Q.call(w)})}enableUpdating(B){}disconnectedCallback(){var B;(B=this._$ES)===null||B===void 0||B.forEach(w=>{var Q;return(Q=w.hostDisconnected)===null||Q===void 0?void 0:Q.call(w)})}attributeChangedCallback(B,w,Q){this._$AK(B,Q)}_$EO(B,w,Q=l$3){var F;const O=this.constructor._$Ep(B,Q);if(O!==void 0&&Q.reflect===!0){const L=(((F=Q.converter)===null||F===void 0?void 0:F.toAttribute)!==void 0?Q.converter:n$2).toAttribute(w,Q.type);this._$El=B,L==null?this.removeAttribute(O):this.setAttribute(O,L),this._$El=null}}_$AK(B,w){var Q;const F=this.constructor,O=F._$Ev.get(B);if(O!==void 0&&this._$El!==O){const L=F.getPropertyOptions(O),G=typeof L.converter=="function"?{fromAttribute:L.converter}:((Q=L.converter)===null||Q===void 0?void 0:Q.fromAttribute)!==void 0?L.converter:n$2;this._$El=O,this[O]=G.fromAttribute(w,L.type),this._$El=null}}requestUpdate(B,w,Q){let F=!0;B!==void 0&&(((Q=Q||this.constructor.getPropertyOptions(B)).hasChanged||a$1)(this[B],w)?(this._$AL.has(B)||this._$AL.set(B,w),Q.reflect===!0&&this._$El!==B&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(B,Q))):F=!1),!this.isUpdatePending&&F&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(w){Promise.reject(w)}const B=this.scheduleUpdate();return B!=null&&await B,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var B;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((F,O)=>this[O]=F),this._$Ei=void 0);let w=!1;const Q=this._$AL;try{w=this.shouldUpdate(Q),w?(this.willUpdate(Q),(B=this._$ES)===null||B===void 0||B.forEach(F=>{var O;return(O=F.hostUpdate)===null||O===void 0?void 0:O.call(F)}),this.update(Q)):this._$Ek()}catch(F){throw w=!1,this._$Ek(),F}w&&this._$AE(Q)}willUpdate(B){}_$AE(B){var w;(w=this._$ES)===null||w===void 0||w.forEach(Q=>{var F;return(F=Q.hostUpdated)===null||F===void 0?void 0:F.call(Q)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(B)),this.updated(B)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(B){return!0}update(B){this._$EC!==void 0&&(this._$EC.forEach((w,Q)=>this._$EO(Q,this[Q],w)),this._$EC=void 0),this._$Ek()}updated(B){}firstUpdated(B){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},o$2==null||o$2({ReactiveElement:d$1}),((s$2=e$1.reactiveElementVersions)!==null&&s$2!==void 0?s$2:e$1.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t;const i$1=window,s$1=i$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:D=>D}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$2=`<${n$1}>`,h=document,r=(D="")=>h.createComment(D),d=D=>D===null||typeof D!="object"&&typeof D!="function",u=Array.isArray,c$1=D=>u(D)||typeof(D==null?void 0:D[Symbol.iterator])=="function",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=D=>(B,...w)=>({_$litType$:D,strings:B,values:w}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(D,B)=>{const w=D.length-1,Q=[];let F,O=B===2?"<svg>":"",L=v;for(let U=0;U<w;U++){const q=D[U];let Y,W,X=-1,te=0;for(;te<q.length&&(L.lastIndex=te,W=L.exec(q),W!==null);)te=L.lastIndex,L===v?W[1]==="!--"?L=a:W[1]!==void 0?L=f:W[2]!==void 0?($.test(W[2])&&(F=RegExp("</"+W[2],"g")),L=_):W[3]!==void 0&&(L=_):L===_?W[0]===">"?(L=F!=null?F:v,X=-1):W[1]===void 0?X=-2:(X=L.lastIndex-W[2].length,Y=W[1],L=W[3]===void 0?_:W[3]==='"'?p:m):L===p||L===m?L=_:L===a||L===f?L=v:(L=_,F=void 0);const oe=L===_&&D[U+1].startsWith("/>")?" ":"";O+=L===v?q+l$2:X>=0?(Q.push(Y),q.slice(0,X)+"$lit$"+q.slice(X)+o$1+oe):q+o$1+(X===-2?(Q.push(void 0),U):oe)}const G=O+(D[w]||"<?>")+(B===2?"</svg>":"");if(!Array.isArray(D)||!D.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e!==void 0?e.createHTML(G):G,Q]};class C{constructor({strings:B,_$litType$:w},Q){let F;this.parts=[];let O=0,L=0;const G=B.length-1,U=this.parts,[q,Y]=E(B,w);if(this.el=C.createElement(q,Q),A.currentNode=this.el.content,w===2){const W=this.el.content,X=W.firstChild;X.remove(),W.append(...X.childNodes)}for(;(F=A.nextNode())!==null&&U.length<G;){if(F.nodeType===1){if(F.hasAttributes()){const W=[];for(const X of F.getAttributeNames())if(X.endsWith("$lit$")||X.startsWith(o$1)){const te=Y[L++];if(W.push(X),te!==void 0){const oe=F.getAttribute(te.toLowerCase()+"$lit$").split(o$1),ne=/([.?@])?(.*)/.exec(te);U.push({type:1,index:O,name:ne[2],strings:oe,ctor:ne[1]==="."?M:ne[1]==="?"?k:ne[1]==="@"?H:S})}else U.push({type:6,index:O})}for(const X of W)F.removeAttribute(X)}if($.test(F.tagName)){const W=F.textContent.split(o$1),X=W.length-1;if(X>0){F.textContent=s$1?s$1.emptyScript:"";for(let te=0;te<X;te++)F.append(W[te],r()),A.nextNode(),U.push({type:2,index:++O});F.append(W[X],r())}}}else if(F.nodeType===8)if(F.data===n$1)U.push({type:2,index:O});else{let W=-1;for(;(W=F.data.indexOf(o$1,W+1))!==-1;)U.push({type:7,index:O}),W+=o$1.length-1}O++}}static createElement(B,w){const Q=h.createElement("template");return Q.innerHTML=B,Q}}function P(D,B,w=D,Q){var F,O,L,G;if(B===x)return B;let U=Q!==void 0?(F=w._$Co)===null||F===void 0?void 0:F[Q]:w._$Cl;const q=d(B)?void 0:B._$litDirective$;return(U==null?void 0:U.constructor)!==q&&((O=U==null?void 0:U._$AO)===null||O===void 0||O.call(U,!1),q===void 0?U=void 0:(U=new q(D),U._$AT(D,w,Q)),Q!==void 0?((L=(G=w)._$Co)!==null&&L!==void 0?L:G._$Co=[])[Q]=U:w._$Cl=U),U!==void 0&&(B=P(D,U._$AS(D,B.values),U,Q)),B}class V{constructor(B,w){this.u=[],this._$AN=void 0,this._$AD=B,this._$AM=w}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(B){var w;const{el:{content:Q},parts:F}=this._$AD,O=((w=B==null?void 0:B.creationScope)!==null&&w!==void 0?w:h).importNode(Q,!0);A.currentNode=O;let L=A.nextNode(),G=0,U=0,q=F[0];for(;q!==void 0;){if(G===q.index){let Y;q.type===2?Y=new N(L,L.nextSibling,this,B):q.type===1?Y=new q.ctor(L,q.name,q.strings,this,B):q.type===6&&(Y=new I(L,this,B)),this.u.push(Y),q=F[++U]}G!==(q==null?void 0:q.index)&&(L=A.nextNode(),G++)}return O}p(B){let w=0;for(const Q of this.u)Q!==void 0&&(Q.strings!==void 0?(Q._$AI(B,Q,w),w+=Q.strings.length-2):Q._$AI(B[w])),w++}}class N{constructor(B,w,Q,F){var O;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=B,this._$AB=w,this._$AM=Q,this.options=F,this._$Cm=(O=F==null?void 0:F.isConnected)===null||O===void 0||O}get _$AU(){var B,w;return(w=(B=this._$AM)===null||B===void 0?void 0:B._$AU)!==null&&w!==void 0?w:this._$Cm}get parentNode(){let B=this._$AA.parentNode;const w=this._$AM;return w!==void 0&&B.nodeType===11&&(B=w.parentNode),B}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(B,w=this){B=P(this,B,w),d(B)?B===b||B==null||B===""?(this._$AH!==b&&this._$AR(),this._$AH=b):B!==this._$AH&&B!==x&&this.g(B):B._$litType$!==void 0?this.$(B):B.nodeType!==void 0?this.T(B):c$1(B)?this.k(B):this.g(B)}O(B,w=this._$AB){return this._$AA.parentNode.insertBefore(B,w)}T(B){this._$AH!==B&&(this._$AR(),this._$AH=this.O(B))}g(B){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=B:this.T(h.createTextNode(B)),this._$AH=B}$(B){var w;const{values:Q,_$litType$:F}=B,O=typeof F=="number"?this._$AC(B):(F.el===void 0&&(F.el=C.createElement(F.h,this.options)),F);if(((w=this._$AH)===null||w===void 0?void 0:w._$AD)===O)this._$AH.p(Q);else{const L=new V(O,this),G=L.v(this.options);L.p(Q),this.T(G),this._$AH=L}}_$AC(B){let w=T.get(B.strings);return w===void 0&&T.set(B.strings,w=new C(B)),w}k(B){u(this._$AH)||(this._$AH=[],this._$AR());const w=this._$AH;let Q,F=0;for(const O of B)F===w.length?w.push(Q=new N(this.O(r()),this.O(r()),this,this.options)):Q=w[F],Q._$AI(O),F++;F<w.length&&(this._$AR(Q&&Q._$AB.nextSibling,F),w.length=F)}_$AR(B=this._$AA.nextSibling,w){var Q;for((Q=this._$AP)===null||Q===void 0||Q.call(this,!1,!0,w);B&&B!==this._$AB;){const F=B.nextSibling;B.remove(),B=F}}setConnected(B){var w;this._$AM===void 0&&(this._$Cm=B,(w=this._$AP)===null||w===void 0||w.call(this,B))}}class S{constructor(B,w,Q,F,O){this.type=1,this._$AH=b,this._$AN=void 0,this.element=B,this.name=w,this._$AM=F,this.options=O,Q.length>2||Q[0]!==""||Q[1]!==""?(this._$AH=Array(Q.length-1).fill(new String),this.strings=Q):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(B,w=this,Q,F){const O=this.strings;let L=!1;if(O===void 0)B=P(this,B,w,0),L=!d(B)||B!==this._$AH&&B!==x,L&&(this._$AH=B);else{const G=B;let U,q;for(B=O[0],U=0;U<O.length-1;U++)q=P(this,G[Q+U],w,U),q===x&&(q=this._$AH[U]),L||(L=!d(q)||q!==this._$AH[U]),q===b?B=b:B!==b&&(B+=(q!=null?q:"")+O[U+1]),this._$AH[U]=q}L&&!F&&this.j(B)}j(B){B===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,B!=null?B:"")}}class M extends S{constructor(){super(...arguments),this.type=3}j(B){this.element[this.name]=B===b?void 0:B}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4}j(B){B&&B!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class H extends S{constructor(B,w,Q,F,O){super(B,w,Q,F,O),this.type=5}_$AI(B,w=this){var Q;if((B=(Q=P(this,B,w,0))!==null&&Q!==void 0?Q:b)===x)return;const F=this._$AH,O=B===b&&F!==b||B.capture!==F.capture||B.once!==F.once||B.passive!==F.passive,L=B!==b&&(F===b||O);O&&this.element.removeEventListener(this.name,this,F),L&&this.element.addEventListener(this.name,this,B),this._$AH=B}handleEvent(B){var w,Q;typeof this._$AH=="function"?this._$AH.call((Q=(w=this.options)===null||w===void 0?void 0:w.host)!==null&&Q!==void 0?Q:this.element,B):this._$AH.handleEvent(B)}}class I{constructor(B,w,Q){this.element=B,this.type=6,this._$AN=void 0,this._$AM=w,this.options=Q}get _$AU(){return this._$AM._$AU}_$AI(B){P(this,B)}}const z=i$1.litHtmlPolyfillSupport;z==null||z(C,N),((t=i$1.litHtmlVersions)!==null&&t!==void 0?t:i$1.litHtmlVersions=[]).push("2.6.1");const Z=(D,B,w)=>{var Q,F;const O=(Q=w==null?void 0:w.renderBefore)!==null&&Q!==void 0?Q:B;let L=O._$litPart$;if(L===void 0){const G=(F=w==null?void 0:w.renderBefore)!==null&&F!==void 0?F:null;O._$litPart$=L=new N(B.insertBefore(r(),G),G,void 0,w!=null?w:{})}return L._$AI(D),L};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var B,w;const Q=super.createRenderRoot();return(B=(w=this.renderOptions).renderBefore)!==null&&B!==void 0||(w.renderBefore=Q.firstChild),Q}update(B){const w=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(B),this._$Do=Z(w,this.renderRoot,this.renderOptions)}connectedCallback(){var B;super.connectedCallback(),(B=this._$Do)===null||B===void 0||B.setConnected(!0)}disconnectedCallback(){var B;super.disconnectedCallback(),(B=this._$Do)===null||B===void 0||B.setConnected(!1)}render(){return x}}s.finalized=!0,s._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;n==null||n({LitElement:s});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=D=>D!=null?D:b,allCapitalLetterGroups=/[A-ZÀ-ÖÙ-Ý]+/g,allLowercaseWords=/[a-zà-öù-ý]+/g;function kebabCase(D){const B=D.replace(allCapitalLetterGroups,w).match(allLowercaseWords);return B?B.join("-"):"";function w(Q){return" "+(Q.length>2?Q.slice(0,-1)+" "+Q.slice(-1):Q).toLowerCase()}}function createCache(){const D={};return{has:B=>Object.hasOwnProperty.call(D,B),get:B=>D[B],set:(B,w)=>{D[B]=w}}}function memoize(D,B){const w=createCache();return(...Q)=>{const F=D(...Q);return w.has(F)||w.set(F,B(...Q)),w.get(F)}}var identity=D=>D,dash=memoize(identity,kebabCase),elem=D=>B=>D.includes(B),isRepresentation=elem(["paymentMethod","source","token"]);async function throwBadResponse(D){const{ok:B,statusText:w}=D;if(!B)throw new Error(w);return D}function isReactiveElement(D){return"addInitializer"in D.constructor}var _ReadOnlyController=class{constructor(D){if(this.host=D,this.values=new Map,_ReadOnlyController.instances.has(D))return _ReadOnlyController.instances.get(D);D.addController(this),_ReadOnlyController.instances.set(D,this)}static for(D){return new _ReadOnlyController(D)}hostConnected(){}set(D,B){const w=this.values.get(D);this.values.set(D,B),isReactiveElement(this.host)?this.host.requestUpdate(D,w):this.host.requestUpdate()}},ReadOnlyController=_ReadOnlyController;ReadOnlyController.instances=new Map;function readonly(D,B){const w=D.constructor;w.addInitializer(Q=>{const F=ReadOnlyController.for(Q);Object.defineProperty(Q.constructor.prototype,B,{enumerable:!0,configurable:!0,get(){return F.values.get(B)},set(O){F.values.has(B)||F.values.set(B,O)}}),w.createProperty(B,{...w.getPropertyOptions(B),noAccessor:!0})})}readonly.set=function(D,B){const w=ReadOnlyController.for(D);for(const[Q,F]of Object.entries(B))w.set(Q,F)};var ChangeEvent=class extends Event{constructor(D,B,w,Q){super(`${Q!=null?Q:D.toLowerCase()}-changed`),this.key=D,this.oldValue=B,this.value=w,this.detail={value:w}}},_NotifyController=class{constructor(D){if(this.host=D,this.cache=new Map,_NotifyController.instances.has(D))return _NotifyController.instances.get(D);D.addController(this),_NotifyController.instances.set(D,this)}hostUpdated(){var D;for(const[B,w]of this.cache){const Q=this.host[B],{attribute:F}=(D=this.host.constructor.getPropertyOptions(B))!=null?D:{},O=typeof F=="string"?F:null;this.cache.set(B,Q),this.host.dispatchEvent(new ChangeEvent(B,w,Q,O))}}},NotifyController=_NotifyController;NotifyController.instances=new Map;function notify(D,B){D.constructor.addInitializer(w=>{new NotifyController(w).cache.set(B,w[B])})}function wrap$1(D){return(B,w,Q)=>{const F=Q.value;return Q.value=D(F),Q}}var stripeMethod=wrap$1(function(D){const{name:B}=D;return async function(...w){if(!this.stripe)throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${B}.`);return D.call(this,...w).then(this.handleResponse)}});function throwResponseError(D){if(D.error)throw D.error;return D}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(D,B,w,Q)=>{for(var F=Q>1?void 0:Q?__getOwnPropDesc(B,w):B,O=D.length-1,L;O>=0;O--)(L=D[O])&&(F=(Q?L(B,w,F):L(F))||F);return Q&&F&&__defProp(B,w,F),F},__accessCheck=(D,B,w)=>{if(!B.has(D))throw TypeError("Cannot "+w)},__privateGet=(D,B,w)=>(__accessCheck(D,B,"read from private field"),w?w.call(D):B.get(D)),__privateAdd=(D,B,w)=>{if(B.has(D))throw TypeError("Cannot add the same private member more than once");B instanceof WeakSet?B.add(D):B.set(D,w)},__privateSet=(D,B,w,Q)=>(__accessCheck(D,B,"write to private field"),Q?Q.call(D,w):B.set(D,w),w);function getRandom(){return(Date.now()+Math.random()*1e3).toString(36).substr(0,8)}var BreadcrumbController=class{constructor(D,B){var w,Q;this.host=D,this.options=B,this.initialized=!1,this.shadowHosts=[],this.host.addController(this),this.mountId=this.resetMountId(),this.slotName=(Q=(w=this.options)==null?void 0:w.slotName)!=null?Q:`breadcrumb-${getRandom()}`}get mount(){return document.getElementById(this.mountId)}hostUpdated(){var D;!this.initialized&&((D=this.options)==null?void 0:D.autoInitialize)!==!1&&this.init()}hostDisconnected(){this.destroyMountPoints()}resetMountId(){var B,w;return`${(w=(B=this.options)==null?void 0:B.mountPrefix)!=null?w:this.host.localName}-mount-point-${getRandom()}`}createMountPoint(){const D=document.createElement("div");return D.id=this.mountId,D.classList.add(`${this.host.tagName.toLowerCase()}-mount`),D}createSlot(D){const B=document.createElement("slot");return B.slot=D,B.name=D,B}appendTemplate(D,B=this.createMountPoint()){return D.appendChild(B),B}initMountPoints(){this.initShadowMountPoints()}destroyMountPoints(){for(const D of this.shadowHosts)for(const B of D.querySelectorAll(`[slot="${this.slotName}"][name="${this.slotName}"]`))B.remove();this.mount&&this.mount.remove(),this.mountId=this.resetMountId()}initShadowMountPoints(){let D=this.host;for(this.shadowHosts=[this.host];D=D.getRootNode().host;)this.shadowHosts.push(D);const{shadowHosts:B,slotName:w}=this,Q=[...B],F=Q.pop();if(!F.querySelector(`[slot="${w}"]`)){const L=document.createElement("div");L.slot=w,F.appendChild(L)}const O=F.querySelector(`[slot="${w}"]`);this.appendTemplate(O),Q.forEach(L=>this.appendTemplate(L,this.createSlot(w)))}init(){this.destroyMountPoints(),this.initMountPoints(),this.initialized=!0}};function _typeof(D){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(B){return typeof B}:_typeof=function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},_typeof(D)}var V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function D(){for(var B=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),w=0;w<B.length;w++){var Q=B[w];if(!!V3_URL_REGEX.test(Q.src))return Q}return null},injectScript=function D(B){var w=B&&!B.advancedFraudSignals?"?advancedFraudSignals=false":"",Q=document.createElement("script");Q.src="".concat(V3_URL).concat(w);var F=document.head||document.body;if(!F)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return F.appendChild(Q),Q},registerWrapper=function D(B,w){!B||!B._registerWrapper||B._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:w})},stripePromise=null,loadScript=function D(B){return stripePromise!==null||(stripePromise=new Promise(function(w,Q){if(typeof window=="undefined"){w(null);return}if(window.Stripe&&B&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe){w(window.Stripe);return}try{var F=findScript();F&&B?console.warn(EXISTING_SCRIPT_MESSAGE):F||(F=injectScript(B)),F.addEventListener("load",function(){window.Stripe?w(window.Stripe):Q(new Error("Stripe.js not available"))}),F.addEventListener("error",function(){Q(new Error("Failed to load Stripe.js"))})}catch(O){Q(O);return}})),stripePromise},initStripe=function D(B,w,Q){if(B===null)return null;var F=B.apply(void 0,w);return registerWrapper(F,Q),F},validateLoadParams=function D(B){var w=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(B),`
`);if(B===null||_typeof(B)!=="object")throw new Error(w);if(Object.keys(B).length===1&&typeof B.advancedFraudSignals=="boolean")return B;throw new Error(w)},loadParams,loadStripeCalled=!1,loadStripe=function D(){for(var B=arguments.length,w=new Array(B),Q=0;Q<B;Q++)w[Q]=arguments[Q];loadStripeCalled=!0;var F=Date.now();return loadScript(loadParams).then(function(O){return initStripe(O,w,F)})};loadStripe.setLoadParameters=function(D){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(D)};var StripeElementsError=class extends Error{constructor(D,B){super(`<${D}>: ${B}`),this.originalMessage=B}};function isStripeElementsError(D){return!!D&&D instanceof StripeElementsError}var errorConverter={toAttribute:D=>D?isStripeElementsError(D)?D.originalMessage:D.message||"":null},StripeBase=class extends s{constructor(){super(...arguments),this.generate="source",this.showError=!1,this.locale="auto",this.paymentMethod=null,this.source=null,this.token=null,this.element=null,this.elements=null,this.error=null,this.focused=!1,this.ready=!1,this.stripe=null,this.theme="none",this.precomputedStyle=getComputedStyle(this),this.breadcrumb=new BreadcrumbController(this,{slotName:`${this.constructor.is}-slot`})}get stripeMountId(){return this.breadcrumb.mountId}get stripeMount(){return this.breadcrumb.mount}render(){const{error:D,showError:B}=this,{slotName:w}=this.breadcrumb,Q=isStripeElementsError(D)?D.originalMessage:D==null?void 0:D.message;return y`
      <div id="stripe" part="stripe">
        <slot id="stripe-slot" name="${w}"></slot>
      </div>

      <output id="error"
          for="stripe"
          part="error"
          ?hidden="${!B}">
        ${l(Q)}
      </output>
    `}updated(D){var B;(B=super.updated)==null||B.call(this,D),D.has("error")&&this.errorChanged(),D.has("publishableKey")&&this.init(),[...D.keys()].forEach(w=>this.representationChanged(w))}async disconnectedCallback(){var D;super.disconnectedCallback(),await((D=this.unmount)==null?void 0:D.call(this))}reset(){var D,B;(B=(D=this.element)==null?void 0:D.clear)==null||B.call(D),this.resetRepresentations(),readonly.set(this,{error:null})}blur(){var D;(D=this.element)==null||D.blur()}focus(){var D;(D=this.element)==null||D.focus()}createError(D){return new StripeElementsError(this.constructor.is,D)}errorChanged(){this.resetRepresentations(),this.fireError(this.error)}fire(D,B,w){this.dispatchEvent(new CustomEvent(D,{detail:B,...w}))}fireError(D){this.dispatchEvent(new ErrorEvent("error",{error:D}))}getCSSCustomPropertyValue(D){return this.precomputedStyle.getPropertyValue(D)}async handleResponse(D){const{error:B=null,paymentMethod:w=null,source:Q=null,token:F=null}={...D};if(readonly.set(this,{error:B,paymentMethod:w,source:Q,token:F}),await this.updateComplete,B)throw B;return D}initElement(){}async init(){await this.unmount(),await this.initStripe(),await this.initElement(),this.initElementListeners(),this.breadcrumb.init(),this.mount()}initElementListeners(){!this.element||(this.element.on("ready",this.onReady),this.element.on("focus",this.onFocus),this.element.on("blur",this.onBlur))}async initStripe(){const{publishableKey:D,stripeAccount:B,locale:w}=this;if(!D)readonly.set(this,{elements:null,element:null,stripe:null});else try{const Q={stripeAccount:B,locale:w},F=window.Stripe?window.Stripe(D,Q):await loadStripe(D,Q),O=F==null?void 0:F.elements();readonly.set(this,{elements:O,error:null,stripe:F})}catch(Q){console.warn(Q);const F=this.createError("Stripe.js must be loaded first.");readonly.set(this,{elements:null,error:F,stripe:null})}finally{await this.updateComplete}}mount(){var D;if(!this.breadcrumb.mount)throw this.createError("Stripe Mount missing");(D=this.element)==null||D.mount(this.breadcrumb.mount)}async unmount(){var D,B;(B=(D=this.element)==null?void 0:D.unmount)==null||B.call(D),readonly.set(this,{element:null}),await this.updateComplete}async onBlur(){readonly.set(this,{focused:!1}),await this.updateComplete}async onFocus(){readonly.set(this,{focused:!0}),await this.updateComplete}async onReady(D){readonly.set(this,{ready:!0}),await this.updateComplete,this.fire("ready",D)}async postRepresentation(){const D=U=>readonly.set(this,{error:U}),B=U=>this.fire("success",U),w=this.token||void 0,Q=this.source||void 0,F=this.paymentMethod||void 0,O=JSON.stringify({token:w,source:Q,paymentMethod:F}),L={"Content-Type":"application/json"},G="POST";return fetch(this.action,{body:O,headers:L,method:G}).then(throwBadResponse).then(B).catch(D)}representationChanged(D){if(!isRepresentation(D))return;const B=this[D];!B||(this.fire(`${dash(D)}`,B),this.action&&this.postRepresentation())}resetRepresentations(){readonly.set(this,{paymentMethod:null,token:null,source:null})}};__decorateClass([e$3({type:String})],StripeBase.prototype,"action",2);__decorateClass([e$3({type:String,attribute:"client-secret"})],StripeBase.prototype,"clientSecret",2);__decorateClass([e$3({type:String})],StripeBase.prototype,"generate",2);__decorateClass([notify,e$3({type:String,attribute:"publishable-key",reflect:!0})],StripeBase.prototype,"publishableKey",2);__decorateClass([e$3({type:Boolean,attribute:"show-error",reflect:!0})],StripeBase.prototype,"showError",2);__decorateClass([e$3({type:String,attribute:"stripe-account"})],StripeBase.prototype,"stripeAccount",2);__decorateClass([e$3({type:String,attribute:"locale"})],StripeBase.prototype,"locale",2);__decorateClass([readonly,notify,e$3({type:Object,attribute:"payment-method"})],StripeBase.prototype,"paymentMethod",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"source",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"token",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"element",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"elements",2);__decorateClass([readonly,notify,e$3({type:Object,reflect:!0,converter:errorConverter})],StripeBase.prototype,"error",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"focused",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"ready",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"stripe",2);__decorateClass([e$3()],StripeBase.prototype,"theme",2);__decorateClass([e$3({attribute:"border-radius"})],StripeBase.prototype,"borderRadius",2);__decorateClass([e$3({attribute:"color-background"})],StripeBase.prototype,"colorBackground",2);__decorateClass([e$3({attribute:"color-danger"})],StripeBase.prototype,"colorDanger",2);__decorateClass([e$3({attribute:"color-primary"})],StripeBase.prototype,"colorPrimary",2);__decorateClass([e$3({attribute:"color-text"})],StripeBase.prototype,"colorText",2);__decorateClass([e$3({attribute:"font-family"})],StripeBase.prototype,"fontFamily",2);__decorateClass([e$3({attribute:"spacing-unit"})],StripeBase.prototype,"spacingUnit",2);__decorateClass([bound],StripeBase.prototype,"handleResponse",1);__decorateClass([bound],StripeBase.prototype,"onBlur",1);__decorateClass([bound],StripeBase.prototype,"onFocus",1);__decorateClass([bound],StripeBase.prototype,"onReady",1);var styles=i$2`[hidden] {
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
`,stripe_elements_default=styles2,ALLOWED_STYLES=["color","fontFamily","fontSize","fontStyle","fontSmoothing","fontVariant","iconColor","lineHeight","letterSpacing","textDecoration","textShadow","textTransform"],SUB_STYLES=[":hover",":focus","::placeholder","::selection",":-webkit-autofill",":disabled"],StripeElements=class extends StripeBase{constructor(){super(...arguments),this.hideIcon=!1,this.hidePostalCode=!1,this.iconStyle="default",this.value={},this.brand=null,this.complete=!1,this.empty=!0,this.invalid=!1}async createPaymentMethod(D=this.getPaymentMethodData()){return this.stripe.createPaymentMethod(D)}async createSource(D=this.sourceData){return this.stripe.createSource(this.element,D)}async createToken(D=this.tokenData){return this.stripe.createToken(this.element,D)}isPotentiallyValid(){return!this.complete&&!this.empty&&!this.error||this.validate()}reset(){var D;super.reset(),(D=this.element)==null||D.clear()}async submit(){switch(this.generate){case"payment-method":return this.createPaymentMethod();case"source":return this.createSource();case"token":return this.createToken();default:{const D=this.createError(`cannot generate ${this.generate}`);throw readonly.set(this,{error:D}),await this.updateComplete,D}}}validate(){const{complete:D,empty:B,error:w}=this,Q=!w&&D&&!B;return B&&!w&&readonly.set(this,{error:this.createError("Your card number is empty.")}),Q}updateStyle(){var D;(D=this.element)==null||D.update({style:this.getStripeElementsStyles()})}getPaymentMethodData(){const D="card",{billingDetails:B,paymentMethodData:w}=this;return{billing_details:B,...w,type:D,card:this.element}}getStripeElementsStyles(){const D=F=>this.getCSSCustomPropertyValue(F)||void 0,B=["base","complete","empty","invalid"],w=F=>(O,L)=>{if(F.includes("-"))return O;const G=L.split(":").pop();return{...O,[L]:ALLOWED_STYLES.reduce(Q(`${F}-${G}`),{})}},Q=F=>(O,L)=>{const G=`--stripe-elements-${F}-${dash(L)}`;return{...O,[L]:D(G),...SUB_STYLES.reduce(w(F),{})}};return B.reduce((F,O)=>({...F,[O]:ALLOWED_STYLES.reduce(Q(O),{})}),{})}async initElement(){if(!this.stripe)return;const{hidePostalCode:D,hideIcon:B,iconStyle:w,value:Q}=this,F=this.getStripeElementsStyles();await this.updateComplete;const O=this.createElement({hideIcon:B,hidePostalCode:D,iconStyle:w,style:F,value:Q});O.on("change",this.onChange),readonly.set(this,{element:O}),await this.updateComplete}createElement(D){return this.elements.create("card",D)}async onChange(D){const{brand:B,complete:w,empty:Q,error:F=null}=D,O=!(F||!Q&&!w);readonly.set(this,{brand:B,complete:w,empty:Q,error:F,invalid:O}),await this.updateComplete,this.fire("change",D)}};StripeElements.is="stripe-elements";StripeElements.elementType="card";StripeElements.styles=[shared_default,stripe_elements_default];__decorateClass([e$3({type:Boolean,attribute:"hide-icon"})],StripeElements.prototype,"hideIcon",2);__decorateClass([e$3({type:Boolean,attribute:"hide-postal-code"})],StripeElements.prototype,"hidePostalCode",2);__decorateClass([e$3({type:String,attribute:"icon-style"})],StripeElements.prototype,"iconStyle",2);__decorateClass([e$3({type:Object})],StripeElements.prototype,"value",2);__decorateClass([notify,readonly,e$3({type:String})],StripeElements.prototype,"brand",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"complete",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"empty",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"invalid",2);__decorateClass([stripeMethod],StripeElements.prototype,"createPaymentMethod",1);__decorateClass([stripeMethod],StripeElements.prototype,"createSource",1);__decorateClass([stripeMethod],StripeElements.prototype,"createToken",1);__decorateClass([bound],StripeElements.prototype,"onChange",1);StripeElements=__decorateClass([e$4("stripe-elements")],StripeElements);var styles3=i$2`#stripe {
  box-sizing: border-box;
  min-width: var(--stripe-payment-request-element-min-width, 300px);
  padding: var(--stripe-payment-request-element-padding, 8px 12px);
  background: var(--stripe-payment-request-element-background, white);
}
`,stripe_payment_request_default=styles3;function isStripeDisplayItem(D){return D.tagName.toLowerCase()==="stripe-display-item"}function datasetToStripeDisplayItem({dataset:{amount:D,label:B,pending:w}}){return{label:B,amount:parseInt(D),...w!==void 0&&{pending:w==="true"}}}function datasetToStripeShippingOption({dataset:{amount:D,detail:B,...w}}){return{amount:parseInt(D),detail:B,...w}}function mapDataset(D){return isStripeDisplayItem(D)?datasetToStripeDisplayItem(D):datasetToStripeShippingOption(D)}var _displayItems,_shippingOptions,StripePaymentRequest=class extends StripeBase{constructor(){super(...arguments),this.canMakePayment=null,__privateAdd(this,_displayItems,void 0),this.paymentIntent=null,this.paymentRequest=null,this.pending=!1,__privateAdd(this,_shippingOptions,void 0),this.buttonType="default",this.buttonTheme="dark",this.complete=async(D,B)=>{const{error:w=null}={...D},Q=w||B?"fail":"success";return D.complete(Q),this.fire(Q,D),B?{error:B}:D}}get displayItems(){const D=__privateGet(this,_displayItems);return Array.isArray(D)?D:this.parseDatasets("stripe-display-item")}set displayItems(D){const B=this.displayItems;__privateSet(this,_displayItems,D),this.requestUpdate("displayItems",B)}get shippingOptions(){const D=__privateGet(this,_shippingOptions);return Array.isArray(D)?D:this.parseDatasets("stripe-shipping-option")}set shippingOptions(D){const B=this.shippingOptions;__privateSet(this,_shippingOptions,D),this.requestUpdate("shippingOptions",B)}reset(){super.reset(),readonly.set(this,{paymentIntent:null})}updated(D){super.updated(D),D.has("generate")&&this.initPaymentRequestListeners(),D.has("amount")&&this.updatePaymentRequest()}getStripePaymentRequestOptions(){const{country:D,currency:B,displayItems:w,shippingOptions:Q,requestShipping:F,requestPayerEmail:O,requestPayerName:L,requestPayerPhone:G,label:U="",amount:q=0}=this;return{country:D,currency:B,displayItems:w,requestPayerEmail:O,requestPayerName:L,requestPayerPhone:G,requestShipping:F,shippingOptions:Q,total:{label:U,amount:q}}}async initElement(){await this.initPaymentRequest(),await this.initPaymentRequestListeners(),await this.initPaymentRequestButton()}async initPaymentRequest(){if(!this.stripe)return;const D=this.getStripePaymentRequestOptions(),B=this.stripe.paymentRequest(D),w=await B.canMakePayment();readonly.set(this,{paymentRequest:B,canMakePayment:w}),await this.updateComplete,this.canMakePayment||this.fire("unsupported")}async initPaymentRequestButton(){const{buttonTheme:D,buttonType:B,canMakePayment:w}=this;if(!w||!this.elements)return;const Q="--stripe-payment-request-button-height",O={paymentRequestButton:{height:this.getCSSCustomPropertyValue(Q)||"40px",theme:D,type:B}},L=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:O});readonly.set(this,{element:L}),await this.updateComplete}async initPaymentRequestListeners(){if(!!this.canMakePayment)switch(this.paymentRequest.on("click",this.updatePaymentRequest),this.paymentRequest.on("cancel",this.onCancel),this.paymentRequest.on("shippingaddresschange",this.onShippingaddresschange),this.paymentRequest.on("shippingoptionchange",this.onShippingoptionchange),this.generate){case"payment-method":this.paymentRequest.on("paymentmethod",this.onPaymentResponse);break;case"source":this.paymentRequest.on("source",this.onPaymentResponse);break;case"token":this.paymentRequest.on("token",this.onPaymentResponse);break}}async updatePaymentRequest(){if(!this.paymentRequest)return;const{currency:D,total:B,displayItems:w,shippingOptions:Q}=this.getStripePaymentRequestOptions();this.paymentRequest.update({currency:D,total:B,displayItems:w,shippingOptions:Q})}onCancel(){this.fire("cancel")}async onPaymentResponse(D){const{error:B=null,paymentMethod:w=null,source:Q=null,token:F=null}={...D};readonly.set(this,{error:B,paymentMethod:w,source:Q,token:F}),this.clientSecret&&!B?this.confirmPaymentIntent(D):this.complete(D)}async confirmPaymentIntent(D){var O;const B={payment_method:this.paymentMethod.id},w=await this.confirmCardPayment(B,{handleActions:!1}).then(({error:L})=>this.complete(D,L)).then(throwResponseError).then(()=>this.confirmCardPayment()).then(throwResponseError).catch(L=>({error:L})),{error:Q=null}=w,F=(O=w.paymentIntent)!=null?O:null;readonly.set(this,{error:Q,paymentIntent:F}),await this.updateComplete}async confirmCardPayment(D,B){return this.stripe.confirmCardPayment(this.clientSecret,D,B)}onShippingaddresschange(D){this.fire("shippingaddresschange",D)}onShippingoptionchange(D){this.fire("shippingoptionchange",D)}parseDatasets(D){const B=[...this.querySelectorAll(D)];return B.length?B.map(mapDataset):[]}};_displayItems=new WeakMap;_shippingOptions=new WeakMap;StripePaymentRequest.is="stripe-payment-request";StripePaymentRequest.styles=[shared_default,stripe_payment_request_default];__decorateClass([e$3({type:Number,reflect:!0})],StripePaymentRequest.prototype,"amount",2);__decorateClass([notify,readonly,e$3({type:Boolean,attribute:"can-make-payment",reflect:!0})],StripePaymentRequest.prototype,"canMakePayment",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"country",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"currency",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"displayItems",1);__decorateClass([e$3({type:String,reflect:!0})],StripePaymentRequest.prototype,"label",2);__decorateClass([notify,readonly,e$3({type:Object,attribute:"payment-intent"})],StripePaymentRequest.prototype,"paymentIntent",2);__decorateClass([readonly,e$3({type:Object,attribute:"payment-request"})],StripePaymentRequest.prototype,"paymentRequest",2);__decorateClass([e$3({type:Boolean,reflect:!0})],StripePaymentRequest.prototype,"pending",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-email"})],StripePaymentRequest.prototype,"requestPayerEmail",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-name"})],StripePaymentRequest.prototype,"requestPayerName",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-phone"})],StripePaymentRequest.prototype,"requestPayerPhone",2);__decorateClass([e$3({type:Boolean,attribute:"request-shipping"})],StripePaymentRequest.prototype,"requestShipping",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"shippingOptions",1);__decorateClass([e$3({type:String,attribute:"button-type"})],StripePaymentRequest.prototype,"buttonType",2);__decorateClass([e$3({type:String,attribute:"button-theme"})],StripePaymentRequest.prototype,"buttonTheme",2);__decorateClass([bound],StripePaymentRequest.prototype,"onCancel",1);__decorateClass([bound],StripePaymentRequest.prototype,"onPaymentResponse",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmPaymentIntent",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmCardPayment",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingaddresschange",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingoptionchange",1);StripePaymentRequest=__decorateClass([e$4("stripe-payment-request")],StripePaymentRequest);const VITE_CommerceKey$1="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey$1="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",commerce$1=new lib(`${VITE_CommerceKey$1}`,!0);var allProducts$1=[],currentShopProduct$1,shopPage=1,currentCart$1,cartEmpty$1=!0,selectedPSize$1="",countriesObj$1={},variantAbbr="",countriesAdded=!1,shippingMethodValue,shippingId="",card$1,stripeElements,pComplete;class mobileShop1 extends HTMLElement{constructor(){super();Ze(this,"closeMobileShop",()=>{document.getElementById("mobileShop").style.display="none"});Ze(this,"loadShop",async()=>{this.shadow.getElementById("LoadBG").style.display="grid";var w=this.shadow.getElementById("mb1");await commerce$1.products.list({limit:100,sortDirection:"desc"}).then(Q=>allProducts$1.push(Q.data)),allProducts$1[0].forEach(Q=>{var F=document.createElement("div");F.setAttribute("class","productContainer"),F.setAttribute("id",Q.id),this.shadow.getElementById("productEdition").addEventListener("click",this.toggleTerms),F.addEventListener("click",this.viewProduct),w.appendChild(F),F.innerHTML=`
    <img class="shopProducts" style="opacity:100%;" loading="lazy" src="${Q.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${Q.name}</p>
    <p class="pcProductPrice">${Q.price.formatted_with_symbol}</p>
  </div>
    `,this.shadow.getElementById("LoadBG").style.display="none"}),commerce$1.cart.empty()});Ze(this,"viewProduct",w=>{var Q=w.target.parentElement.id;this.shadow.getElementById("scroll").style.display="block",currentShopProduct$1=allProducts$1[0].filter(L=>L.id.includes(`${Q}`)),this.shadow.getElementById("mb2").style.display="block",shopPage=2,this.shadow.getElementById("pName").innerHTML=`
        ${currentShopProduct$1[0].name}`,currentShopProduct$1[0].categories.forEach(L=>{L.name==="\xC9"&&(this.shadow.getElementById("eSymbol1").style.display="block"),L.name==="S\xC9"&&(this.shadow.getElementById("eSymbol2").style.display="block")}),this.shadow.getElementById("pDesc").innerHTML=currentShopProduct$1[0].description,this.shadow.getElementById("proPrice").innerHTML=currentShopProduct$1[0].price.formatted_with_symbol,currentShopProduct$1[0].inventory.available===0&&(this.shadow.getElementById("archived").style.display="grid");var F=this.shadow.getElementById("allImages"),O=0;this.shadow.getElementById("mainImageCont").src=`${currentShopProduct$1[0].assets[0].url}`,currentShopProduct$1[0].assets.forEach(L=>{if(O<=3){var G=document.createElement("img");G.setAttribute("src",`${L.url}`),G.setAttribute("id",`${L.url}`),G.addEventListener("click",this.changeToMainPic),F.appendChild(G),O++}L.filename==="sizeChart.png"&&(this.shadow.getElementById("noti").innerHTML=`
                <img class="sizeChartImage" src="${L.url}"/>
              `,this.shadow.getElementById("pSizeGuide").addEventListener("click",this.noti1))}),this.checkSize()});Ze(this,"checkSize",()=>{currentShopProduct$1[0].variant_groups[0].options.forEach(w=>{if(this.shadow.getElementById(`${w.name}`).style.opacity="100%",this.shadow.getElementById(`${w.name}`).style.cursor="pointer",this.shadow.getElementById(`${w.name}`).addEventListener("click",this.selectSize),w.name==="SingleSize"){var Q=this.shadow.querySelectorAll(".sizeButtons");this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr",this.shadow.getElementById("sizesCont").style.justifyItems="end",Q.forEach(F=>{F.id!="SingleSize"&&(F.style.display="none")}),this.shadow.getElementById("SingleSize").style.display="grid"}})});Ze(this,"noti1",()=>{this.shadow.getElementById("noti").style.display="block",pComplete===!0?(this.shadow.getElementById("noti").addEventListener("click",this.return),pComplete=!1):this.shadow.getElementById("noti").addEventListener("click",this.closeNoti)});Ze(this,"closeNoti",()=>{this.shadow.getElementById("noti").style.display="none",pComplete=!1});Ze(this,"returnSize",()=>{var w=this.shadow.querySelectorAll(".sizeButtons");w.forEach(Q=>{Q.id!="SingleSize"&&(Q.style.display="grid"),this.shadow.getElementById(Q.id).style.opacity=".3"}),this.shadow.getElementById("SingleSize").style.display="none",this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr 1fr 1fr 1fr",this.shadow.getElementById("sizesCont").style.justifyItems="center"});Ze(this,"changeToMainPic",w=>{var Q=w.target.id;this.shadow.getElementById("mainImageCont").src=`${Q}`});Ze(this,"return",()=>{this.shadow.getElementById("main"),this.shadow.getElementById("mb1");var w=this.shadow.getElementById("mb2"),Q=this.shadow.getElementById("mb3"),F=this.shadow.getElementById("checkoutInputs"),O=this.shadow.getElementById("shippingButton");switch(this.shadow.getElementById("mb4"),this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("archived").style.display="none",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("noti").style.display="none",shopPage){case 1:this.closeMobileShop();break;case 2:w.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("eSymbol1").style.display="none",this.shadow.getElementById("eSymbol2").style.display="none",this.returnSize(),shopPage=1;break;case 3:Q.style.display="none",w.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.returnSize(),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",shopPage=1;break;case 4:F.style.display="none",O.innerHTML="SHIPPING & BILLING",O.removeEventListener("click",this.return),O.addEventListener("click",this.shipping),this.viewCart(),shopPage=3;break;case 5:Q.style.display="none",F.style.display="none",w.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("noti").removeEventListener("click",this.return),this.returnSize(),selectedPSize$1="",shopPage=1,this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';break}});Ze(this,"selectSize",w=>{var Q=this.shadow.querySelectorAll(".sizeButtons");Q.forEach(O=>{this.shadow.getElementById(O.id).style.backgroundColor="",this.shadow.getElementById(O.id).style.color=""}),w.target.style.opacity==="1"?(selectedPSize$1=w.target.id,this.shadow.getElementById("addItemButton").addEventListener("click",this.addToCart),w.target.style.color="white",w.target.style.backgroundColor="#ff002d",this.shadow.getElementById("addItemButton").innerHTML="ADD TO CART"):(selectedPSize$1="",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart));var F=document.getElementsByClassName("sizeButtons");for(let O=0;O<F.length;O++)F[O].style.color="#ff002d"});Ze(this,"addToCart",async()=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="ADDING",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';var w=currentShopProduct$1[0].variant_groups[0].options.filter(Q=>Q.name.includes(`${selectedPSize$1}`));this.shadow.getElementById("LoadBG").style.display="grid",commerce$1.cart.retrieve().then(Q=>{currentCart$1=Q}).then(()=>{if(cartEmpty$1===!1){var Q=currentCart$1.line_items.filter(F=>F.product_id===currentShopProduct$1[0].id);console.log(currentCart$1),console.log(currentShopProduct$1[0].id),console.log(Q),currentShopProduct$1[0].inventory.available>0?commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:w[0].id}).then(()=>{cartEmpty$1=!1,commerce$1.cart.retrieve().then(F=>{currentCart$1=F,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART";var O=this.shadow.querySelectorAll(".sizeButtons");O.forEach(L=>{this.shadow.getElementById(`${L.id}`).style.color="",this.shadow.getElementById(`${L.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=F.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)}):(this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="MAX INVENTORY")}else commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:w[0].id}).then(()=>{cartEmpty$1=!1,selectedPSize$1="",commerce$1.cart.retrieve().then(F=>{currentCart$1=F,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart);var O=this.shadow.querySelectorAll(".sizeButtons");O.forEach(L=>{this.shadow.getElementById(`${L.id}`).style.color="",this.shadow.getElementById(`${L.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=F.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)})})});Ze(this,"viewCart",()=>{shopPage=3,this.shadow.getElementById("mb3").style.display="block",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE";var w=this.shadow.getElementById("cartStatus");this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),w.innerHTML="CHECKOUT",w.removeEventListener("click",this.viewCart),w.removeEventListener("click",this.checkout),variantAbbr="",currentCart$1.line_items.forEach(Q=>{var F=document.createElement("div");switch(F.setAttribute("class","productCont"),this.shadow.getElementById("cartItems").appendChild(F),Q.selected_options[0].option_name){case"Small":variantAbbr="S";break;case"Medium":variantAbbr="M";break;case"Large":variantAbbr="L";break;case"XLarge":variantAbbr="XL";break;case"2XLarge":variantAbbr="2XL";break;case"3XLarge":variantAbbr="3XL";break}F.innerHTML=`
                <div class="pcLeft">
                    <img src="${Q.image.url}"> 
                </div>
                <div class="pcRight">
                    <p class="cartProName">${Q.name}</p>
                    <p class="cartProQty" id="${Q.name}Qty">QTY: <span class="active">(${Q.quantity})${variantAbbr}</span></p>
                    <p class="cartProPrice">${Q.price.formatted_with_symbol}</p>
                    <div class="quantityChange" name="${Q.product_id}">
                        <span class="active dec changeQty" id="${Q.id}" name="dec">-</span>
                        <span>|</span>
                        <span class="active inc changeQty" id="${Q.id}" name="inc">+</span>
                    </div>
                </div>
            `,this.shadow.getElementById("termsButton").addEventListener("click",this.toggleTerms);var O=this.shadow.querySelectorAll(".changeQty");O.forEach(L=>{L.addEventListener("click",this.changeQty)}),F.setAttribute("id",`${Q.id}Parent`)})});Ze(this,"toggleTerms",()=>{this.noti1(),this.shadow.getElementById("noti").innerHTML=`
        <div id="terms">
         <h1>Terms & Conditions</h1><p>For designs marked with an <span class="active">(\u2018\xC9\u2019)</span> or <span class="active">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `});Ze(this,"checkQuantity",w=>{var Q=allProducts$1[0].filter(F=>F.id===w);return Q[0].inventory.available});Ze(this,"changeQty",w=>{this.shadow.getElementById("LoadBG").style.display="grid";var Q=w.target.getAttribute("id"),F=w.target.parentElement.getAttribute("name"),O=this.checkQuantity(F);if(w.target.getAttribute("name")==="inc"){var L=currentCart$1.line_items.filter(G=>G.id===Q);if(O>=2&&L[0].quantity<=O-1){commerce$1.cart.update(`${Q}`,{quantity:L[0].quantity+1}).then(G=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=G.cart.subtotal.formatted_with_symbol,currentCart$1=G.cart,this.viewCart()});return}else w.target.style.opacity=".3",this.shadow.getElementById("LoadBG").style.display="none"}if(w.target.getAttribute("name")==="dec"){var L=currentCart$1.line_items.filter(U=>U.id===Q);commerce$1.cart.update(`${Q}`,{quantity:L[0].quantity-1}).then(U=>{if(this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=U.cart.subtotal.formatted_with_symbol,currentCart$1=U.cart,this.viewCart(),U.cart.total_items===0){var q=this.shadow.getElementById("cartStatus");cartEmpty$1=!0,this.return(),q.innerHTML="CART EMPTY",q.removeEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),selectedPSize$1=""}});return}});Ze(this,"shipping",()=>{shopPage=4;var w=this.shadow.getElementById("shippingButton"),Q=this.shadow.getElementById("cartStatus");this.shadow.getElementById("checkoutInputs").style.display="grid",w.innerHTML="VIEW CART",w.removeAttribute("click",this.shipping),w.addEventListener("click",this.return),Q.innerHTML="PAY NOW",Q.addEventListener("click",this.checkout),countriesAdded===!1&&(countriesAdded=!0,commerce$1.services.localeListCountries().then(F=>{countriesObj$1=F.countries,Object.keys(F.countries).forEach(O=>{var L=document.createElement("option"),G=this.shadow.getElementById("inputCN");L.setAttribute("value",O),L.setAttribute("title",O),L.innerHTML=`${countriesObj$1[O].substr(0,20)}`,G.appendChild(L)})})),this.shadow.getElementById("inputCN").addEventListener("change",this.states),this.shadow.getElementById("card-element").innerHTML=`
        <stripe-elements publishable-key="${VITE_StripeKey$1}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`,this.shadow.getElementById("sCard").addEventListener("ready",F=>{card$1=F.path[0].element,F.path[0].stripe.createToken(card$1),stripeElements=F.path[0].stripe})});Ze(this,"states",()=>{var w=this.shadow.getElementById("inputCN"),Q=w.options[w.selectedIndex].value,F=w.options[w.selectedIndex].title,O=this.shadow.getElementById("totalPrice");this.shadow.getElementById("inputST").innerHTML="",Q==="US"&&(this.shadow.getElementById("inputSP").value="$0.00 Free Shipping",shippingMethodValue=1,O.innerHTML=currentCart$1.subtotal.formatted_with_symbol),Q!="US"&&(this.shadow.getElementById("inputSP").value="$70.00 Intl Shipping",shippingMethodValue=3,O.innerHTML=`$${currentCart$1.subtotal.raw+70}.00`),F==="US2"&&(this.shadow.getElementById("inputSP").value="$130.00 - Next Day",shippingMethodValue=2,O.innerHTML=`$${currentCart$1.subtotal.raw+130}.00`),commerce$1.services.localeListSubdivisions(Q).then(L=>{var G=L.subdivisions;Object.keys(L.subdivisions).forEach(U=>{var q=document.createElement("option"),Y=this.shadow.getElementById("inputST");if(Object.keys(L.subdivisions).length<=1){var W=document.createElement("option");W.innerHTML="Not Available.",w.options[w.selectedIndex].innerHTML="Select Country",this.shadow.getElementById("inputST").appendChild(W)}else q.setAttribute("value",G[U]),q.setAttribute("id",U),q.innerHTML=G[U].substring(0,20),Y.appendChild(q)})})});Ze(this,"checkout",async()=>{var w=this.shadow.getElementById("inputFN").value,Q=this.shadow.getElementById("inputLN").value,F=this.shadow.getElementById("inputBD").value;this.shadow.getElementById("inputSP").value;var O=this.shadow.getElementById("inputEM").value,L=this.shadow.getElementById("inputCY").value,G=this.shadow.getElementById("inputZC").value,U=this.shadow.getElementById("inputSA").value,q=this.shadow.getElementById("inputCN"),Y=this.shadow.getElementById("inputST"),W=q.options[q.selectedIndex].value,X=Y.options[Y.selectedIndex].id,te=this.shadow.getElementById("cartStatus");te.removeEventListener("click",this.checkout),this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("LoadBG").style.display="grid",setTimeout(()=>{pComplete===!1&&(this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>")},2e4),await commerce$1.checkout.generateToken(currentCart$1.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async oe=>{commerce$1.checkout.getShippingOptions(oe.id,{country:W}).then(async ne=>{shippingMethodValue===1&&(shippingId=ne[0].id),shippingMethodValue===3&&(shippingId=ne[0].id),shippingMethodValue===2&&(shippingId=ne[1].id);var ce=`${w} ${Q}`;const fe=await stripeElements.createPaymentMethod({type:"card",card:card$1}).catch(me=>{console.log(`THIS ERROR ${me}`),this.shadow.getElementById("LoadBG").style.display="none",te.addEventListener("click",this.checkout)});if(fe.error){this.shadow.getElementById("LoadBG").style.display="none",console.log(fe.error.message),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${fe.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const me=await commerce$1.checkout.capture(oe.id,{customer:{firstname:`${w}`,lastname:`${Q}`,email:`${O}`},extra_fields:{extr_DWy4oG4dY56Jx2:`${U}`},shipping:{name:`${ce}`,street:`${F}`,town_city:`${L}`,county_state:`${X}`,postal_zip_code:`${G}`,country:`${W}`},fulfillment:{shipping_method:`${shippingId}`},billing:{name:`${ce}`,street:`${F}`,town_city:`${L}`,county_state:`${X}`,postal_zip_code:`${G}`,country:`${W}`},payment:{gateway:"stripe",stripe:{payment_method_id:fe.paymentMethod.id}}});this.return,this.purchaseComplete(),this.noti1(),this.shadow.getElementById("noti").innerHTML=`
                <div id="orderConfirmed">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-map.png"/>
                    <h2>Order Placed!</h2>
                    <h3>Thank you for shopping at SCOG\xC9.</h3>
                    <h4>Your order confirmation number is:<br><span class="active" id="confirmNumber">${me.customer_reference}</span></h4>
                    <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
                    <br><br>
                    <p>For any questions or inquiries please email <span class="active">INFO@SCOGE.CO</span></p>
                </div>
                `,this.shadow.getElementById("inputCN").innerHTML=`<option value="US" title="US">US</option>
                                          <option value="US" title="US2">US - Next Day Air</option>`,cartEmpty$1=!0,card$1.clear();return}catch(me){console.log(me),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${me.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(me);return}finally{}})})});Ze(this,"purchaseComplete",()=>{var w=this.shadow.getElementById("cartStatus");this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("totalPrice").innerHTML="$0",w.innerHTML="CART EMPTY",shopPage=5,pComplete=!0,this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),this.shadow.getElementById("shippingButton").removeEventListener("click",this.return)});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("product")}set product(w){this.setAttribute("product",w)}static get observedAttributes(){return["product"]}attributeChangedCallback(w,Q,F){w==="product"&&this.render()}connectedCallback(){this.render(),this.loadShop(),this.shadow.getElementById("returnButton").addEventListener("click",this.return.bind(this))}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("mobile-shop1",mobileShop1);var dist={},api={},axios$2={exports:{}},bind$2=function D(B,w){return function(){for(var F=new Array(arguments.length),O=0;O<F.length;O++)F[O]=arguments[O];return B.apply(w,F)}},bind$1=bind$2,toString=Object.prototype.toString;function isArray(D){return Array.isArray(D)}function isUndefined(D){return typeof D=="undefined"}function isBuffer(D){return D!==null&&!isUndefined(D)&&D.constructor!==null&&!isUndefined(D.constructor)&&typeof D.constructor.isBuffer=="function"&&D.constructor.isBuffer(D)}function isArrayBuffer(D){return toString.call(D)==="[object ArrayBuffer]"}function isFormData(D){return toString.call(D)==="[object FormData]"}function isArrayBufferView(D){var B;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?B=ArrayBuffer.isView(D):B=D&&D.buffer&&isArrayBuffer(D.buffer),B}function isString(D){return typeof D=="string"}function isNumber(D){return typeof D=="number"}function isObject(D){return D!==null&&typeof D=="object"}function isPlainObject(D){if(toString.call(D)!=="[object Object]")return!1;var B=Object.getPrototypeOf(D);return B===null||B===Object.prototype}function isDate(D){return toString.call(D)==="[object Date]"}function isFile(D){return toString.call(D)==="[object File]"}function isBlob(D){return toString.call(D)==="[object Blob]"}function isFunction(D){return toString.call(D)==="[object Function]"}function isStream(D){return isObject(D)&&isFunction(D.pipe)}function isURLSearchParams(D){return toString.call(D)==="[object URLSearchParams]"}function trim(D){return D.trim?D.trim():D.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(D,B){if(!(D===null||typeof D=="undefined"))if(typeof D!="object"&&(D=[D]),isArray(D))for(var w=0,Q=D.length;w<Q;w++)B.call(null,D[w],w,D);else for(var F in D)Object.prototype.hasOwnProperty.call(D,F)&&B.call(null,D[F],F,D)}function merge(){var D={};function B(F,O){isPlainObject(D[O])&&isPlainObject(F)?D[O]=merge(D[O],F):isPlainObject(F)?D[O]=merge({},F):isArray(F)?D[O]=F.slice():D[O]=F}for(var w=0,Q=arguments.length;w<Q;w++)forEach(arguments[w],B);return D}function extend(D,B,w){return forEach(B,function(F,O){w&&typeof F=="function"?D[O]=bind$1(F,w):D[O]=F}),D}function stripBOM(D){return D.charCodeAt(0)===65279&&(D=D.slice(1)),D}var utils$i={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM},utils$h=utils$i;function encode(D){return encodeURIComponent(D).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function D(B,w,Q){if(!w)return B;var F;if(Q)F=Q(w);else if(utils$h.isURLSearchParams(w))F=w.toString();else{var O=[];utils$h.forEach(w,function(U,q){U===null||typeof U=="undefined"||(utils$h.isArray(U)?q=q+"[]":U=[U],utils$h.forEach(U,function(W){utils$h.isDate(W)?W=W.toISOString():utils$h.isObject(W)&&(W=JSON.stringify(W)),O.push(encode(q)+"="+encode(W))}))}),F=O.join("&")}if(F){var L=B.indexOf("#");L!==-1&&(B=B.slice(0,L)),B+=(B.indexOf("?")===-1?"?":"&")+F}return B},utils$g=utils$i;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function D(B,w,Q){return this.handlers.push({fulfilled:B,rejected:w,synchronous:Q?Q.synchronous:!1,runWhen:Q?Q.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function D(B){this.handlers[B]&&(this.handlers[B]=null)};InterceptorManager$1.prototype.forEach=function D(B){utils$g.forEach(this.handlers,function(Q){Q!==null&&B(Q)})};var InterceptorManager_1=InterceptorManager$1,utils$f=utils$i,normalizeHeaderName$1=function D(B,w){utils$f.forEach(B,function(F,O){O!==w&&O.toUpperCase()===w.toUpperCase()&&(B[w]=F,delete B[O])})},enhanceError$2=function D(B,w,Q,F,O){return B.config=w,Q&&(B.code=Q),B.request=F,B.response=O,B.isAxiosError=!0,B.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},B},transitional={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},enhanceError$1=enhanceError$2,createError$2=function D(B,w,Q,F,O){var L=new Error(B);return enhanceError$1(L,w,Q,F,O)},createError$1=createError$2,settle$1=function D(B,w,Q){var F=Q.config.validateStatus;!Q.status||!F||F(Q.status)?B(Q):w(createError$1("Request failed with status code "+Q.status,Q.config,null,Q.request,Q))},utils$e=utils$i,cookies$1=utils$e.isStandardBrowserEnv()?function D(){return{write:function(w,Q,F,O,L,G){var U=[];U.push(w+"="+encodeURIComponent(Q)),utils$e.isNumber(F)&&U.push("expires="+new Date(F).toGMTString()),utils$e.isString(O)&&U.push("path="+O),utils$e.isString(L)&&U.push("domain="+L),G===!0&&U.push("secure"),document.cookie=U.join("; ")},read:function(w){var Q=document.cookie.match(new RegExp("(^|;\\s*)("+w+")=([^;]*)"));return Q?decodeURIComponent(Q[3]):null},remove:function(w){this.write(w,"",Date.now()-864e5)}}}():function D(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function D(B){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(B)},combineURLs$1=function D(B,w){return w?B.replace(/\/+$/,"")+"/"+w.replace(/^\/+/,""):B},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function D(B,w){return B&&!isAbsoluteURL(w)?combineURLs(B,w):w},utils$d=utils$i,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function D(B){var w={},Q,F,O;return B&&utils$d.forEach(B.split(`
`),function(G){if(O=G.indexOf(":"),Q=utils$d.trim(G.substr(0,O)).toLowerCase(),F=utils$d.trim(G.substr(O+1)),Q){if(w[Q]&&ignoreDuplicateOf.indexOf(Q)>=0)return;Q==="set-cookie"?w[Q]=(w[Q]?w[Q]:[]).concat([F]):w[Q]=w[Q]?w[Q]+", "+F:F}}),w},utils$c=utils$i,isURLSameOrigin$1=utils$c.isStandardBrowserEnv()?function D(){var B=/(msie|trident)/i.test(navigator.userAgent),w=document.createElement("a"),Q;function F(O){var L=O;return B&&(w.setAttribute("href",L),L=w.href),w.setAttribute("href",L),{href:w.href,protocol:w.protocol?w.protocol.replace(/:$/,""):"",host:w.host,search:w.search?w.search.replace(/^\?/,""):"",hash:w.hash?w.hash.replace(/^#/,""):"",hostname:w.hostname,port:w.port,pathname:w.pathname.charAt(0)==="/"?w.pathname:"/"+w.pathname}}return Q=F(window.location.href),function(L){var G=utils$c.isString(L)?F(L):L;return G.protocol===Q.protocol&&G.host===Q.host}}():function D(){return function(){return!0}}();function Cancel$3(D){this.message=D}Cancel$3.prototype.toString=function D(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$3.prototype.__CANCEL__=!0;var Cancel_1=Cancel$3,utils$b=utils$i,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,transitionalDefaults$1=transitional,Cancel$2=Cancel_1,xhr=function D(B){return new Promise(function(Q,F){var O=B.data,L=B.headers,G=B.responseType,U;function q(){B.cancelToken&&B.cancelToken.unsubscribe(U),B.signal&&B.signal.removeEventListener("abort",U)}utils$b.isFormData(O)&&delete L["Content-Type"];var Y=new XMLHttpRequest;if(B.auth){var W=B.auth.username||"",X=B.auth.password?unescape(encodeURIComponent(B.auth.password)):"";L.Authorization="Basic "+btoa(W+":"+X)}var te=buildFullPath(B.baseURL,B.url);Y.open(B.method.toUpperCase(),buildURL$1(te,B.params,B.paramsSerializer),!0),Y.timeout=B.timeout;function oe(){if(!!Y){var ce="getAllResponseHeaders"in Y?parseHeaders(Y.getAllResponseHeaders()):null,fe=!G||G==="text"||G==="json"?Y.responseText:Y.response,me={data:fe,status:Y.status,statusText:Y.statusText,headers:ce,config:B,request:Y};settle(function(ye){Q(ye),q()},function(ye){F(ye),q()},me),Y=null}}if("onloadend"in Y?Y.onloadend=oe:Y.onreadystatechange=function(){!Y||Y.readyState!==4||Y.status===0&&!(Y.responseURL&&Y.responseURL.indexOf("file:")===0)||setTimeout(oe)},Y.onabort=function(){!Y||(F(createError("Request aborted",B,"ECONNABORTED",Y)),Y=null)},Y.onerror=function(){F(createError("Network Error",B,null,Y)),Y=null},Y.ontimeout=function(){var fe=B.timeout?"timeout of "+B.timeout+"ms exceeded":"timeout exceeded",me=B.transitional||transitionalDefaults$1;B.timeoutErrorMessage&&(fe=B.timeoutErrorMessage),F(createError(fe,B,me.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",Y)),Y=null},utils$b.isStandardBrowserEnv()){var ne=(B.withCredentials||isURLSameOrigin(te))&&B.xsrfCookieName?cookies.read(B.xsrfCookieName):void 0;ne&&(L[B.xsrfHeaderName]=ne)}"setRequestHeader"in Y&&utils$b.forEach(L,function(fe,me){typeof O=="undefined"&&me.toLowerCase()==="content-type"?delete L[me]:Y.setRequestHeader(me,fe)}),utils$b.isUndefined(B.withCredentials)||(Y.withCredentials=!!B.withCredentials),G&&G!=="json"&&(Y.responseType=B.responseType),typeof B.onDownloadProgress=="function"&&Y.addEventListener("progress",B.onDownloadProgress),typeof B.onUploadProgress=="function"&&Y.upload&&Y.upload.addEventListener("progress",B.onUploadProgress),(B.cancelToken||B.signal)&&(U=function(ce){!Y||(F(!ce||ce&&ce.type?new Cancel$2("canceled"):ce),Y.abort(),Y=null)},B.cancelToken&&B.cancelToken.subscribe(U),B.signal&&(B.signal.aborted?U():B.signal.addEventListener("abort",U))),O||(O=null),Y.send(O)})},utils$a=utils$i,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,transitionalDefaults=transitional,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(D,B){!utils$a.isUndefined(D)&&utils$a.isUndefined(D["Content-Type"])&&(D["Content-Type"]=B)}function getDefaultAdapter(){var D;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(D=xhr),D}function stringifySafely(D,B,w){if(utils$a.isString(D))try{return(B||JSON.parse)(D),utils$a.trim(D)}catch(Q){if(Q.name!=="SyntaxError")throw Q}return(w||JSON.stringify)(D)}var defaults$3={transitional:transitionalDefaults,adapter:getDefaultAdapter(),transformRequest:[function D(B,w){return normalizeHeaderName(w,"Accept"),normalizeHeaderName(w,"Content-Type"),utils$a.isFormData(B)||utils$a.isArrayBuffer(B)||utils$a.isBuffer(B)||utils$a.isStream(B)||utils$a.isFile(B)||utils$a.isBlob(B)?B:utils$a.isArrayBufferView(B)?B.buffer:utils$a.isURLSearchParams(B)?(setContentTypeIfUnset(w,"application/x-www-form-urlencoded;charset=utf-8"),B.toString()):utils$a.isObject(B)||w&&w["Content-Type"]==="application/json"?(setContentTypeIfUnset(w,"application/json"),stringifySafely(B)):B}],transformResponse:[function D(B){var w=this.transitional||defaults$3.transitional,Q=w&&w.silentJSONParsing,F=w&&w.forcedJSONParsing,O=!Q&&this.responseType==="json";if(O||F&&utils$a.isString(B)&&B.length)try{return JSON.parse(B)}catch(L){if(O)throw L.name==="SyntaxError"?enhanceError(L,this,"E_JSON_PARSE"):L}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function D(B){return B>=200&&B<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils$a.forEach(["delete","get","head"],function D(B){defaults$3.headers[B]={}});utils$a.forEach(["post","put","patch"],function D(B){defaults$3.headers[B]=utils$a.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$9=utils$i,defaults$2=defaults_1,transformData$1=function D(B,w,Q){var F=this||defaults$2;return utils$9.forEach(Q,function(L){B=L.call(F,B,w)}),B},isCancel$1=function D(B){return!!(B&&B.__CANCEL__)},utils$8=utils$i,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1,Cancel$1=Cancel_1;function throwIfCancellationRequested(D){if(D.cancelToken&&D.cancelToken.throwIfRequested(),D.signal&&D.signal.aborted)throw new Cancel$1("canceled")}var dispatchRequest$1=function D(B){throwIfCancellationRequested(B),B.headers=B.headers||{},B.data=transformData.call(B,B.data,B.headers,B.transformRequest),B.headers=utils$8.merge(B.headers.common||{},B.headers[B.method]||{},B.headers),utils$8.forEach(["delete","get","head","post","put","patch","common"],function(F){delete B.headers[F]});var w=B.adapter||defaults$1.adapter;return w(B).then(function(F){return throwIfCancellationRequested(B),F.data=transformData.call(B,F.data,F.headers,B.transformResponse),F},function(F){return isCancel(F)||(throwIfCancellationRequested(B),F&&F.response&&(F.response.data=transformData.call(B,F.response.data,F.response.headers,B.transformResponse))),Promise.reject(F)})},utils$7=utils$i,mergeConfig$2=function D(B,w){w=w||{};var Q={};function F(Y,W){return utils$7.isPlainObject(Y)&&utils$7.isPlainObject(W)?utils$7.merge(Y,W):utils$7.isPlainObject(W)?utils$7.merge({},W):utils$7.isArray(W)?W.slice():W}function O(Y){if(utils$7.isUndefined(w[Y])){if(!utils$7.isUndefined(B[Y]))return F(void 0,B[Y])}else return F(B[Y],w[Y])}function L(Y){if(!utils$7.isUndefined(w[Y]))return F(void 0,w[Y])}function G(Y){if(utils$7.isUndefined(w[Y])){if(!utils$7.isUndefined(B[Y]))return F(void 0,B[Y])}else return F(void 0,w[Y])}function U(Y){if(Y in w)return F(B[Y],w[Y]);if(Y in B)return F(void 0,B[Y])}var q={url:L,method:L,data:L,baseURL:G,transformRequest:G,transformResponse:G,paramsSerializer:G,timeout:G,timeoutMessage:G,withCredentials:G,adapter:G,responseType:G,xsrfCookieName:G,xsrfHeaderName:G,onUploadProgress:G,onDownloadProgress:G,decompress:G,maxContentLength:G,maxBodyLength:G,transport:G,httpAgent:G,httpsAgent:G,cancelToken:G,socketPath:G,responseEncoding:G,validateStatus:U};return utils$7.forEach(Object.keys(B).concat(Object.keys(w)),function(W){var X=q[W]||O,te=X(W);utils$7.isUndefined(te)&&X!==U||(Q[W]=te)}),Q},data={version:"0.26.1"},VERSION=data.version,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(D,B){validators$1[D]=function(Q){return typeof Q===D||"a"+(B<1?"n ":" ")+D}});var deprecatedWarnings={};validators$1.transitional=function D(B,w,Q){function F(O,L){return"[Axios v"+VERSION+"] Transitional option '"+O+"'"+L+(Q?". "+Q:"")}return function(O,L,G){if(B===!1)throw new Error(F(L," has been removed"+(w?" in "+w:"")));return w&&!deprecatedWarnings[L]&&(deprecatedWarnings[L]=!0,console.warn(F(L," has been deprecated since v"+w+" and will be removed in the near future"))),B?B(O,L,G):!0}};function assertOptions(D,B,w){if(typeof D!="object")throw new TypeError("options must be an object");for(var Q=Object.keys(D),F=Q.length;F-- >0;){var O=Q[F],L=B[O];if(L){var G=D[O],U=G===void 0||L(G,O,D);if(U!==!0)throw new TypeError("option "+O+" must be "+U);continue}if(w!==!0)throw Error("Unknown option "+O)}}var validator$1={assertOptions,validators:validators$1},utils$6=utils$i,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(D){this.defaults=D,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function D(B,w){typeof B=="string"?(w=w||{},w.url=B):w=B||{},w=mergeConfig$1(this.defaults,w),w.method?w.method=w.method.toLowerCase():this.defaults.method?w.method=this.defaults.method.toLowerCase():w.method="get";var Q=w.transitional;Q!==void 0&&validator.assertOptions(Q,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1);var F=[],O=!0;this.interceptors.request.forEach(function(te){typeof te.runWhen=="function"&&te.runWhen(w)===!1||(O=O&&te.synchronous,F.unshift(te.fulfilled,te.rejected))});var L=[];this.interceptors.response.forEach(function(te){L.push(te.fulfilled,te.rejected)});var G;if(!O){var U=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(U,F),U=U.concat(L),G=Promise.resolve(w);U.length;)G=G.then(U.shift(),U.shift());return G}for(var q=w;F.length;){var Y=F.shift(),W=F.shift();try{q=Y(q)}catch(X){W(X);break}}try{G=dispatchRequest(q)}catch(X){return Promise.reject(X)}for(;L.length;)G=G.then(L.shift(),L.shift());return G};Axios$1.prototype.getUri=function D(B){return B=mergeConfig$1(this.defaults,B),buildURL(B.url,B.params,B.paramsSerializer).replace(/^\?/,"")};utils$6.forEach(["delete","get","head","options"],function D(B){Axios$1.prototype[B]=function(w,Q){return this.request(mergeConfig$1(Q||{},{method:B,url:w,data:(Q||{}).data}))}});utils$6.forEach(["post","put","patch"],function D(B){Axios$1.prototype[B]=function(w,Q,F){return this.request(mergeConfig$1(F||{},{method:B,url:w,data:Q}))}});var Axios_1=Axios$1,Cancel=Cancel_1;function CancelToken(D){if(typeof D!="function")throw new TypeError("executor must be a function.");var B;this.promise=new Promise(function(F){B=F});var w=this;this.promise.then(function(Q){if(!!w._listeners){var F,O=w._listeners.length;for(F=0;F<O;F++)w._listeners[F](Q);w._listeners=null}}),this.promise.then=function(Q){var F,O=new Promise(function(L){w.subscribe(L),F=L}).then(Q);return O.cancel=function(){w.unsubscribe(F)},O},D(function(F){w.reason||(w.reason=new Cancel(F),B(w.reason))})}CancelToken.prototype.throwIfRequested=function D(){if(this.reason)throw this.reason};CancelToken.prototype.subscribe=function D(B){if(this.reason){B(this.reason);return}this._listeners?this._listeners.push(B):this._listeners=[B]};CancelToken.prototype.unsubscribe=function D(B){if(!!this._listeners){var w=this._listeners.indexOf(B);w!==-1&&this._listeners.splice(w,1)}};CancelToken.source=function D(){var B,w=new CancelToken(function(F){B=F});return{token:w,cancel:B}};var CancelToken_1=CancelToken,spread=function D(B){return function(Q){return B.apply(null,Q)}},utils$5=utils$i,isAxiosError=function D(B){return utils$5.isObject(B)&&B.isAxiosError===!0},utils$4=utils$i,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(D){var B=new Axios(D),w=bind(Axios.prototype.request,B);return utils$4.extend(w,Axios.prototype,B),utils$4.extend(w,B),w.create=function(F){return createInstance(mergeConfig(D,F))},w}var axios$1=createInstance(defaults);axios$1.Axios=Axios;axios$1.Cancel=Cancel_1;axios$1.CancelToken=CancelToken_1;axios$1.isCancel=isCancel$1;axios$1.VERSION=data.version;axios$1.all=function D(B){return Promise.all(B)};axios$1.spread=spread;axios$1.isAxiosError=isAxiosError;axios$2.exports=axios$1;axios$2.exports.default=axios$1;var axios=axios$2.exports,common={},base={};(function(D){Object.defineProperty(D,"__esModule",{value:!0}),D.RequiredError=D.BaseAPI=D.COLLECTION_FORMATS=D.BASE_PATH=void 0;const B=axios;D.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),D.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class w{constructor(O,L=D.BASE_PATH,G=B.default){this.basePath=L,this.axios=G,O&&(this.configuration=O,this.basePath=O.basePath||this.basePath)}}D.BaseAPI=w;class Q extends Error{constructor(O,L){super(L),this.field=O,this.name="RequiredError"}}D.RequiredError=Q})(base);var __awaiter=commonjsGlobal&&commonjsGlobal.__awaiter||function(D,B,w,Q){function F(O){return O instanceof w?O:new w(function(L){L(O)})}return new(w||(w=Promise))(function(O,L){function G(Y){try{q(Q.next(Y))}catch(W){L(W)}}function U(Y){try{q(Q.throw(Y))}catch(W){L(W)}}function q(Y){Y.done?O(Y.value):F(Y.value).then(G,U)}q((Q=Q.apply(D,B||[])).next())})};Object.defineProperty(common,"__esModule",{value:!0});common.createRequestFunction=common.toPathString=common.serializeDataIfNeeded=common.setSearchParams=common.setOAuthToObject=common.setBearerAuthToObject=common.setBasicAuthToObject=common.setApiKeyToObject=common.assertParamExists=common.DUMMY_BASE_URL=void 0;const base_1=base;common.DUMMY_BASE_URL="https://example.com";common.assertParamExists=function(D,B,w){if(w==null)throw new base_1.RequiredError(B,`Required parameter ${B} was null or undefined when calling ${D}.`)};common.setApiKeyToObject=function(D,B,w){return __awaiter(this,void 0,void 0,function*(){if(w&&w.apiKey){const Q=typeof w.apiKey=="function"?yield w.apiKey(B):yield w.apiKey;D[B]=Q}})};common.setBasicAuthToObject=function(D,B){B&&(B.username||B.password)&&(D.auth={username:B.username,password:B.password})};common.setBearerAuthToObject=function(D,B){return __awaiter(this,void 0,void 0,function*(){if(B&&B.accessToken){const w=typeof B.accessToken=="function"?yield B.accessToken():yield B.accessToken;D.Authorization="Bearer "+w}})};common.setOAuthToObject=function(D,B,w,Q){return __awaiter(this,void 0,void 0,function*(){if(Q&&Q.accessToken){const F=typeof Q.accessToken=="function"?yield Q.accessToken(B,w):yield Q.accessToken;D.Authorization="Bearer "+F}})};function setFlattenedQueryParams(D,B,w=""){B!=null&&(typeof B=="object"?Array.isArray(B)?B.forEach(Q=>setFlattenedQueryParams(D,Q,w)):Object.keys(B).forEach(Q=>setFlattenedQueryParams(D,B[Q],`${w}${w!==""?".":""}${Q}`)):D.has(w)?D.append(w,B):D.set(w,B))}common.setSearchParams=function(D,...B){const w=new URLSearchParams(D.search);setFlattenedQueryParams(w,B),D.search=w.toString()};common.serializeDataIfNeeded=function(D,B,w){const Q=typeof D!="string";return(Q&&w&&w.isJsonMime?w.isJsonMime(B.headers["Content-Type"]):Q)?JSON.stringify(D!==void 0?D:{}):D||""};common.toPathString=function(D){return D.pathname+D.search+D.hash};common.createRequestFunction=function(D,B,w,Q){return(F=B,O=w)=>{const L=Object.assign(Object.assign({},D.options),{url:((Q==null?void 0:Q.basePath)||O)+D.url});return F.request(L)}};(function(D){var B=commonjsGlobal&&commonjsGlobal.__awaiter||function(L,G,U,q){function Y(W){return W instanceof U?W:new U(function(X){X(W)})}return new(U||(U=Promise))(function(W,X){function te(ce){try{ne(q.next(ce))}catch(fe){X(fe)}}function oe(ce){try{ne(q.throw(ce))}catch(fe){X(fe)}}function ne(ce){ce.done?W(ce.value):Y(ce.value).then(te,oe)}ne((q=q.apply(L,G||[])).next())})};Object.defineProperty(D,"__esModule",{value:!0}),D.OpenAIApi=D.OpenAIApiFactory=D.OpenAIApiFp=D.OpenAIApiAxiosParamCreator=D.CreateImageRequestResponseFormatEnum=D.CreateImageRequestSizeEnum=D.ChatCompletionResponseMessageRoleEnum=D.ChatCompletionRequestMessageRoleEnum=void 0;const w=axios,Q=common,F=base;D.ChatCompletionRequestMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},D.ChatCompletionResponseMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},D.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},D.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},D.OpenAIApiAxiosParamCreator=function(L){return{cancelFineTune:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("cancelFineTune","fineTuneId",G);const q="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),createAnswer:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createAnswer","createAnswerRequest",G);const q="/answers",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createChatCompletion:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createChatCompletion","createChatCompletionRequest",G);const q="/chat/completions",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createClassification:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createClassification","createClassificationRequest",G);const q="/classifications",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createCompletion:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createCompletion","createCompletionRequest",G);const q="/completions",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createEdit:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createEdit","createEditRequest",G);const q="/edits",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createEmbedding:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createEmbedding","createEmbeddingRequest",G);const q="/embeddings",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createFile:(G,U,q={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createFile","file",G),Q.assertParamExists("createFile","purpose",U);const Y="/files",W=new URL(Y,Q.DUMMY_BASE_URL);let X;L&&(X=L.baseOptions);const te=Object.assign(Object.assign({method:"POST"},X),q),oe={},ne={},ce=new(L&&L.formDataCtor||FormData);G!==void 0&&ce.append("file",G),U!==void 0&&ce.append("purpose",U),oe["Content-Type"]="multipart/form-data",Q.setSearchParams(W,ne);let fe=X&&X.headers?X.headers:{};return te.headers=Object.assign(Object.assign(Object.assign(Object.assign({},oe),ce.getHeaders()),fe),q.headers),te.data=ce,{url:Q.toPathString(W),options:te}}),createFineTune:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createFineTune","createFineTuneRequest",G);const q="/fine-tunes",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createImage:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createImage","createImageRequest",G);const q="/images/generations",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createImageEdit:(G,U,q,Y,W,X,te,oe={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createImageEdit","image",G),Q.assertParamExists("createImageEdit","prompt",U);const ne="/images/edits",ce=new URL(ne,Q.DUMMY_BASE_URL);let fe;L&&(fe=L.baseOptions);const me=Object.assign(Object.assign({method:"POST"},fe),oe),Ie={},ye={},Be=new(L&&L.formDataCtor||FormData);G!==void 0&&Be.append("image",G),q!==void 0&&Be.append("mask",q),U!==void 0&&Be.append("prompt",U),Y!==void 0&&Be.append("n",Y),W!==void 0&&Be.append("size",W),X!==void 0&&Be.append("response_format",X),te!==void 0&&Be.append("user",te),Ie["Content-Type"]="multipart/form-data",Q.setSearchParams(ce,ye);let Ce=fe&&fe.headers?fe.headers:{};return me.headers=Object.assign(Object.assign(Object.assign(Object.assign({},Ie),Be.getHeaders()),Ce),oe.headers),me.data=Be,{url:Q.toPathString(ce),options:me}}),createImageVariation:(G,U,q,Y,W,X={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createImageVariation","image",G);const te="/images/variations",oe=new URL(te,Q.DUMMY_BASE_URL);let ne;L&&(ne=L.baseOptions);const ce=Object.assign(Object.assign({method:"POST"},ne),X),fe={},me={},Ie=new(L&&L.formDataCtor||FormData);G!==void 0&&Ie.append("image",G),U!==void 0&&Ie.append("n",U),q!==void 0&&Ie.append("size",q),Y!==void 0&&Ie.append("response_format",Y),W!==void 0&&Ie.append("user",W),fe["Content-Type"]="multipart/form-data",Q.setSearchParams(oe,me);let ye=ne&&ne.headers?ne.headers:{};return ce.headers=Object.assign(Object.assign(Object.assign(Object.assign({},fe),Ie.getHeaders()),ye),X.headers),ce.data=Ie,{url:Q.toPathString(oe),options:ce}}),createModeration:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createModeration","createModerationRequest",G);const q="/moderations",Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"POST"},W),U),te={},oe={};te["Content-Type"]="application/json",Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),X.data=Q.serializeDataIfNeeded(G,X,L),{url:Q.toPathString(Y),options:X}}),createSearch:(G,U,q={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createSearch","engineId",G),Q.assertParamExists("createSearch","createSearchRequest",U);const Y="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(G))),W=new URL(Y,Q.DUMMY_BASE_URL);let X;L&&(X=L.baseOptions);const te=Object.assign(Object.assign({method:"POST"},X),q),oe={},ne={};oe["Content-Type"]="application/json",Q.setSearchParams(W,ne);let ce=X&&X.headers?X.headers:{};return te.headers=Object.assign(Object.assign(Object.assign({},oe),ce),q.headers),te.data=Q.serializeDataIfNeeded(U,te,L),{url:Q.toPathString(W),options:te}}),createTranscription:(G,U,q,Y,W,X,te={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createTranscription","file",G),Q.assertParamExists("createTranscription","model",U);const oe="/audio/transcriptions",ne=new URL(oe,Q.DUMMY_BASE_URL);let ce;L&&(ce=L.baseOptions);const fe=Object.assign(Object.assign({method:"POST"},ce),te),me={},Ie={},ye=new(L&&L.formDataCtor||FormData);G!==void 0&&ye.append("file",G),U!==void 0&&ye.append("model",U),q!==void 0&&ye.append("prompt",q),Y!==void 0&&ye.append("response_format",Y),W!==void 0&&ye.append("temperature",W),X!==void 0&&ye.append("language",X),me["Content-Type"]="multipart/form-data",Q.setSearchParams(ne,Ie);let Be=ce&&ce.headers?ce.headers:{};return fe.headers=Object.assign(Object.assign(Object.assign(Object.assign({},me),ye.getHeaders()),Be),te.headers),fe.data=ye,{url:Q.toPathString(ne),options:fe}}),createTranslation:(G,U,q,Y,W,X={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("createTranslation","file",G),Q.assertParamExists("createTranslation","model",U);const te="/audio/translations",oe=new URL(te,Q.DUMMY_BASE_URL);let ne;L&&(ne=L.baseOptions);const ce=Object.assign(Object.assign({method:"POST"},ne),X),fe={},me={},Ie=new(L&&L.formDataCtor||FormData);G!==void 0&&Ie.append("file",G),U!==void 0&&Ie.append("model",U),q!==void 0&&Ie.append("prompt",q),Y!==void 0&&Ie.append("response_format",Y),W!==void 0&&Ie.append("temperature",W),fe["Content-Type"]="multipart/form-data",Q.setSearchParams(oe,me);let ye=ne&&ne.headers?ne.headers:{};return ce.headers=Object.assign(Object.assign(Object.assign(Object.assign({},fe),Ie.getHeaders()),ye),X.headers),ce.data=Ie,{url:Q.toPathString(oe),options:ce}}),deleteFile:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("deleteFile","fileId",G);const q="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"DELETE"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),deleteModel:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("deleteModel","model",G);const q="/models/{model}".replace("{model}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"DELETE"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),downloadFile:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("downloadFile","fileId",G);const q="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),listEngines:(G={})=>B(this,void 0,void 0,function*(){const U="/engines",q=new URL(U,Q.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),G),X={},te={};Q.setSearchParams(q,te);let oe=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),oe),G.headers),{url:Q.toPathString(q),options:W}}),listFiles:(G={})=>B(this,void 0,void 0,function*(){const U="/files",q=new URL(U,Q.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),G),X={},te={};Q.setSearchParams(q,te);let oe=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),oe),G.headers),{url:Q.toPathString(q),options:W}}),listFineTuneEvents:(G,U,q={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("listFineTuneEvents","fineTuneId",G);const Y="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(G))),W=new URL(Y,Q.DUMMY_BASE_URL);let X;L&&(X=L.baseOptions);const te=Object.assign(Object.assign({method:"GET"},X),q),oe={},ne={};U!==void 0&&(ne.stream=U),Q.setSearchParams(W,ne);let ce=X&&X.headers?X.headers:{};return te.headers=Object.assign(Object.assign(Object.assign({},oe),ce),q.headers),{url:Q.toPathString(W),options:te}}),listFineTunes:(G={})=>B(this,void 0,void 0,function*(){const U="/fine-tunes",q=new URL(U,Q.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),G),X={},te={};Q.setSearchParams(q,te);let oe=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),oe),G.headers),{url:Q.toPathString(q),options:W}}),listModels:(G={})=>B(this,void 0,void 0,function*(){const U="/models",q=new URL(U,Q.DUMMY_BASE_URL);let Y;L&&(Y=L.baseOptions);const W=Object.assign(Object.assign({method:"GET"},Y),G),X={},te={};Q.setSearchParams(q,te);let oe=Y&&Y.headers?Y.headers:{};return W.headers=Object.assign(Object.assign(Object.assign({},X),oe),G.headers),{url:Q.toPathString(q),options:W}}),retrieveEngine:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("retrieveEngine","engineId",G);const q="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),retrieveFile:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("retrieveFile","fileId",G);const q="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),retrieveFineTune:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("retrieveFineTune","fineTuneId",G);const q="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}}),retrieveModel:(G,U={})=>B(this,void 0,void 0,function*(){Q.assertParamExists("retrieveModel","model",G);const q="/models/{model}".replace("{model}",encodeURIComponent(String(G))),Y=new URL(q,Q.DUMMY_BASE_URL);let W;L&&(W=L.baseOptions);const X=Object.assign(Object.assign({method:"GET"},W),U),te={},oe={};Q.setSearchParams(Y,oe);let ne=W&&W.headers?W.headers:{};return X.headers=Object.assign(Object.assign(Object.assign({},te),ne),U.headers),{url:Q.toPathString(Y),options:X}})}},D.OpenAIApiFp=function(L){const G=D.OpenAIApiAxiosParamCreator(L);return{cancelFineTune(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.cancelFineTune(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createAnswer(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createAnswer(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createChatCompletion(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createChatCompletion(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createClassification(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createClassification(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createCompletion(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createCompletion(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createEdit(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createEdit(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createEmbedding(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createEmbedding(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createFile(U,q,Y){return B(this,void 0,void 0,function*(){const W=yield G.createFile(U,q,Y);return Q.createRequestFunction(W,w.default,F.BASE_PATH,L)})},createFineTune(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createFineTune(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createImage(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createImage(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createImageEdit(U,q,Y,W,X,te,oe,ne){return B(this,void 0,void 0,function*(){const ce=yield G.createImageEdit(U,q,Y,W,X,te,oe,ne);return Q.createRequestFunction(ce,w.default,F.BASE_PATH,L)})},createImageVariation(U,q,Y,W,X,te){return B(this,void 0,void 0,function*(){const oe=yield G.createImageVariation(U,q,Y,W,X,te);return Q.createRequestFunction(oe,w.default,F.BASE_PATH,L)})},createModeration(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.createModeration(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},createSearch(U,q,Y){return B(this,void 0,void 0,function*(){const W=yield G.createSearch(U,q,Y);return Q.createRequestFunction(W,w.default,F.BASE_PATH,L)})},createTranscription(U,q,Y,W,X,te,oe){return B(this,void 0,void 0,function*(){const ne=yield G.createTranscription(U,q,Y,W,X,te,oe);return Q.createRequestFunction(ne,w.default,F.BASE_PATH,L)})},createTranslation(U,q,Y,W,X,te){return B(this,void 0,void 0,function*(){const oe=yield G.createTranslation(U,q,Y,W,X,te);return Q.createRequestFunction(oe,w.default,F.BASE_PATH,L)})},deleteFile(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.deleteFile(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},deleteModel(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.deleteModel(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},downloadFile(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.downloadFile(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},listEngines(U){return B(this,void 0,void 0,function*(){const q=yield G.listEngines(U);return Q.createRequestFunction(q,w.default,F.BASE_PATH,L)})},listFiles(U){return B(this,void 0,void 0,function*(){const q=yield G.listFiles(U);return Q.createRequestFunction(q,w.default,F.BASE_PATH,L)})},listFineTuneEvents(U,q,Y){return B(this,void 0,void 0,function*(){const W=yield G.listFineTuneEvents(U,q,Y);return Q.createRequestFunction(W,w.default,F.BASE_PATH,L)})},listFineTunes(U){return B(this,void 0,void 0,function*(){const q=yield G.listFineTunes(U);return Q.createRequestFunction(q,w.default,F.BASE_PATH,L)})},listModels(U){return B(this,void 0,void 0,function*(){const q=yield G.listModels(U);return Q.createRequestFunction(q,w.default,F.BASE_PATH,L)})},retrieveEngine(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.retrieveEngine(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},retrieveFile(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.retrieveFile(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},retrieveFineTune(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.retrieveFineTune(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})},retrieveModel(U,q){return B(this,void 0,void 0,function*(){const Y=yield G.retrieveModel(U,q);return Q.createRequestFunction(Y,w.default,F.BASE_PATH,L)})}}},D.OpenAIApiFactory=function(L,G,U){const q=D.OpenAIApiFp(L);return{cancelFineTune(Y,W){return q.cancelFineTune(Y,W).then(X=>X(U,G))},createAnswer(Y,W){return q.createAnswer(Y,W).then(X=>X(U,G))},createChatCompletion(Y,W){return q.createChatCompletion(Y,W).then(X=>X(U,G))},createClassification(Y,W){return q.createClassification(Y,W).then(X=>X(U,G))},createCompletion(Y,W){return q.createCompletion(Y,W).then(X=>X(U,G))},createEdit(Y,W){return q.createEdit(Y,W).then(X=>X(U,G))},createEmbedding(Y,W){return q.createEmbedding(Y,W).then(X=>X(U,G))},createFile(Y,W,X){return q.createFile(Y,W,X).then(te=>te(U,G))},createFineTune(Y,W){return q.createFineTune(Y,W).then(X=>X(U,G))},createImage(Y,W){return q.createImage(Y,W).then(X=>X(U,G))},createImageEdit(Y,W,X,te,oe,ne,ce,fe){return q.createImageEdit(Y,W,X,te,oe,ne,ce,fe).then(me=>me(U,G))},createImageVariation(Y,W,X,te,oe,ne){return q.createImageVariation(Y,W,X,te,oe,ne).then(ce=>ce(U,G))},createModeration(Y,W){return q.createModeration(Y,W).then(X=>X(U,G))},createSearch(Y,W,X){return q.createSearch(Y,W,X).then(te=>te(U,G))},createTranscription(Y,W,X,te,oe,ne,ce){return q.createTranscription(Y,W,X,te,oe,ne,ce).then(fe=>fe(U,G))},createTranslation(Y,W,X,te,oe,ne){return q.createTranslation(Y,W,X,te,oe,ne).then(ce=>ce(U,G))},deleteFile(Y,W){return q.deleteFile(Y,W).then(X=>X(U,G))},deleteModel(Y,W){return q.deleteModel(Y,W).then(X=>X(U,G))},downloadFile(Y,W){return q.downloadFile(Y,W).then(X=>X(U,G))},listEngines(Y){return q.listEngines(Y).then(W=>W(U,G))},listFiles(Y){return q.listFiles(Y).then(W=>W(U,G))},listFineTuneEvents(Y,W,X){return q.listFineTuneEvents(Y,W,X).then(te=>te(U,G))},listFineTunes(Y){return q.listFineTunes(Y).then(W=>W(U,G))},listModels(Y){return q.listModels(Y).then(W=>W(U,G))},retrieveEngine(Y,W){return q.retrieveEngine(Y,W).then(X=>X(U,G))},retrieveFile(Y,W){return q.retrieveFile(Y,W).then(X=>X(U,G))},retrieveFineTune(Y,W){return q.retrieveFineTune(Y,W).then(X=>X(U,G))},retrieveModel(Y,W){return q.retrieveModel(Y,W).then(X=>X(U,G))}}};class O extends F.BaseAPI{cancelFineTune(G,U){return D.OpenAIApiFp(this.configuration).cancelFineTune(G,U).then(q=>q(this.axios,this.basePath))}createAnswer(G,U){return D.OpenAIApiFp(this.configuration).createAnswer(G,U).then(q=>q(this.axios,this.basePath))}createChatCompletion(G,U){return D.OpenAIApiFp(this.configuration).createChatCompletion(G,U).then(q=>q(this.axios,this.basePath))}createClassification(G,U){return D.OpenAIApiFp(this.configuration).createClassification(G,U).then(q=>q(this.axios,this.basePath))}createCompletion(G,U){return D.OpenAIApiFp(this.configuration).createCompletion(G,U).then(q=>q(this.axios,this.basePath))}createEdit(G,U){return D.OpenAIApiFp(this.configuration).createEdit(G,U).then(q=>q(this.axios,this.basePath))}createEmbedding(G,U){return D.OpenAIApiFp(this.configuration).createEmbedding(G,U).then(q=>q(this.axios,this.basePath))}createFile(G,U,q){return D.OpenAIApiFp(this.configuration).createFile(G,U,q).then(Y=>Y(this.axios,this.basePath))}createFineTune(G,U){return D.OpenAIApiFp(this.configuration).createFineTune(G,U).then(q=>q(this.axios,this.basePath))}createImage(G,U){return D.OpenAIApiFp(this.configuration).createImage(G,U).then(q=>q(this.axios,this.basePath))}createImageEdit(G,U,q,Y,W,X,te,oe){return D.OpenAIApiFp(this.configuration).createImageEdit(G,U,q,Y,W,X,te,oe).then(ne=>ne(this.axios,this.basePath))}createImageVariation(G,U,q,Y,W,X){return D.OpenAIApiFp(this.configuration).createImageVariation(G,U,q,Y,W,X).then(te=>te(this.axios,this.basePath))}createModeration(G,U){return D.OpenAIApiFp(this.configuration).createModeration(G,U).then(q=>q(this.axios,this.basePath))}createSearch(G,U,q){return D.OpenAIApiFp(this.configuration).createSearch(G,U,q).then(Y=>Y(this.axios,this.basePath))}createTranscription(G,U,q,Y,W,X,te){return D.OpenAIApiFp(this.configuration).createTranscription(G,U,q,Y,W,X,te).then(oe=>oe(this.axios,this.basePath))}createTranslation(G,U,q,Y,W,X){return D.OpenAIApiFp(this.configuration).createTranslation(G,U,q,Y,W,X).then(te=>te(this.axios,this.basePath))}deleteFile(G,U){return D.OpenAIApiFp(this.configuration).deleteFile(G,U).then(q=>q(this.axios,this.basePath))}deleteModel(G,U){return D.OpenAIApiFp(this.configuration).deleteModel(G,U).then(q=>q(this.axios,this.basePath))}downloadFile(G,U){return D.OpenAIApiFp(this.configuration).downloadFile(G,U).then(q=>q(this.axios,this.basePath))}listEngines(G){return D.OpenAIApiFp(this.configuration).listEngines(G).then(U=>U(this.axios,this.basePath))}listFiles(G){return D.OpenAIApiFp(this.configuration).listFiles(G).then(U=>U(this.axios,this.basePath))}listFineTuneEvents(G,U,q){return D.OpenAIApiFp(this.configuration).listFineTuneEvents(G,U,q).then(Y=>Y(this.axios,this.basePath))}listFineTunes(G){return D.OpenAIApiFp(this.configuration).listFineTunes(G).then(U=>U(this.axios,this.basePath))}listModels(G){return D.OpenAIApiFp(this.configuration).listModels(G).then(U=>U(this.axios,this.basePath))}retrieveEngine(G,U){return D.OpenAIApiFp(this.configuration).retrieveEngine(G,U).then(q=>q(this.axios,this.basePath))}retrieveFile(G,U){return D.OpenAIApiFp(this.configuration).retrieveFile(G,U).then(q=>q(this.axios,this.basePath))}retrieveFineTune(G,U){return D.OpenAIApiFp(this.configuration).retrieveFineTune(G,U).then(q=>q(this.axios,this.basePath))}retrieveModel(G,U){return D.OpenAIApiFp(this.configuration).retrieveModel(G,U).then(q=>q(this.axios,this.basePath))}}D.OpenAIApi=O})(api);var configuration={};const name="openai",version="3.2.1",description="Node.js library for the OpenAI API",repository={type:"git",url:"git@github.com:openai/openai-node.git"},keywords=["openai","open","ai","gpt-3","gpt3"],author="OpenAI",license="MIT",main="./dist/index.js",types="./dist/index.d.ts",scripts={build:"tsc --outDir dist/"},dependencies={axios:"^0.26.0","form-data":"^4.0.0"},devDependencies={"@types/node":"^12.11.5",typescript:"^3.6.4"};var require$$0={name,version,description,repository,keywords,author,license,main,types,scripts,dependencies,devDependencies},browser=typeof self=="object"?self.FormData:window.FormData;Object.defineProperty(configuration,"__esModule",{value:!0});configuration.Configuration=void 0;const packageJson=require$$0;class Configuration{constructor(B={}){this.apiKey=B.apiKey,this.organization=B.organization,this.username=B.username,this.password=B.password,this.accessToken=B.accessToken,this.basePath=B.basePath,this.baseOptions=B.baseOptions,this.formDataCtor=B.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${packageJson.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=browser)}isJsonMime(B){const w=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return B!==null&&(w.test(B)||B.toLowerCase()==="application/json-patch+json")}}configuration.Configuration=Configuration;(function(D){var B=commonjsGlobal&&commonjsGlobal.__createBinding||(Object.create?function(Q,F,O,L){L===void 0&&(L=O),Object.defineProperty(Q,L,{enumerable:!0,get:function(){return F[O]}})}:function(Q,F,O,L){L===void 0&&(L=O),Q[L]=F[O]}),w=commonjsGlobal&&commonjsGlobal.__exportStar||function(Q,F){for(var O in Q)O!=="default"&&!F.hasOwnProperty(O)&&B(F,Q,O)};Object.defineProperty(D,"__esModule",{value:!0}),w(api,D),w(configuration,D)})(dist);window.dtmenuOpen=!0;window.dtfullMenuOpen=!0;const VITE_ScogeI$1="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";var nmcProps={ringType:"",landRank:0,rank:0,powerUps:[0],progress:0,xp:0,category:"",linked:!1,identifier:"",alias:"",email:"",earthText:[""],styles:[""],discovered:[""],discoveredProgress:0,power:0,mental:0,physical:0,health:0,speed:0,sight:0,endurance:0,domains:[0],playerLocation:0,soundLevel:0,musicLevel:0,fsOn:!1,notiOn:!1,networkClass:"",network:[""],landNumber:0,story:{title:"",text:"",imagesUri:[""],videoURI:""},bankooText:[""],imageCompData:[0],ancestorsNames:[""],ancestorsImages:[0]};class getUniMenu extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get uniMenu(){return this.getAttribute("uniMenu")}set uniMenu(B){this.setAttribute("uniMenu",B)}static get observedAttributes(){return["uniMenu"]}attributeChangedCallback(B,w,Q){B==="uniMenu"&&this.render()}toggleMenu(){const B=this.shadow.querySelector("#uniMenu"),w=this.shadow.querySelector("#uniMenuIcon"),Q=this.shadow.querySelector("#menuItems"),F=this.shadow.querySelector("#menuHeader"),O=this.shadow.querySelector("#refresh");if(window.dtmenuOpen===!1){w.style.transform="rotate(180deg)",B.style.height="auto",F.style.height="100%",window.dtmenuOpen=!0;return}else{F.style.height="100%",setTimeout(()=>{B.style.height="10%"},150),w.style.transform="rotate(0deg)",Q.style.height="0%",Q.style.overflow="hidden",window.dtmenuOpen=!1,O.style.animationPlayState="paused",this.closeFullMenu();return}}openFullMenu(){const B=this.shadow.querySelector("#uniMenu"),w=this.shadow.querySelector("#fullMenu"),Q=this.shadow.querySelector("#fullMenuBG");this.shadow.querySelector("#menuItems");const F=this.shadow.querySelector("#refresh");if(window.dtfullMenuOpen===!1){B.style.overflowX="visible",w.style.width="500px",Q.style.transform="scaleX(1)",B.style.borderBottomRightRadius="0px",B.style.borderTopRightRadius="0px",B.style.borderRight="0px solid black",window.dtfullMenuOpen=!0,F.style.display="block",F.style.animationPlayState="running";return}this.shadow.getElementById("beaconNoti").style.display="none"}sendFeedback(B){B.preventDefault(),this.shadow.getElementById("feedbackEmailInput").value,this.shadow.getElementById("feedbackInput").value,this.shadow.getElementById("feedbackForm").submit()}closeFullMenu(){const B=this.shadow.querySelector("#uniMenu"),w=this.shadow.querySelector("#fullMenu"),Q=this.shadow.querySelector("#fullMenuBG"),F=this.shadow.querySelector("#refresh");w.style.width="0px",Q.style.transform="scaleX(0)",F.style.animationPlayState="paused",F.style.display="none",setTimeout(()=>{B.style.borderBottomRightRadius="10px",B.style.borderTopRightRadius="10px",B.style.borderRight="2px solid #ff002d"},500),window.dtfullMenuOpen=!1}toggleFullScreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}editProfile(B){B==null||B.target;let w=this.shadow.getElementById("proImgSect"),Q=this.shadow.getElementById("proImg"),F=this.shadow.getElementById("editImgIcon"),O=this.shadow.getElementById("profileDesc"),L=this.shadow.getElementById("proEdit"),G=this.shadow.getElementById("proSave"),U=this.shadow.getElementById("proLabelName"),q=this.shadow.getElementById("proLabelIdentity"),Y=this.shadow.getElementById("proLabelEmail");L.innerHTML="CANCEL",G.style.color="var(--accent)",G.style.border="2px solid var(--accent)",G.style.opacity="1",G.style.pointerEvents="all",O.style.pointerEvents="all",O.readOnly=!1,O.style.borderLeft="1px solid var(--primary)",O.style.borderRight="1px solid var(--primary)",O.style.borderRadius="10px",O.style.borderBottom="none",O.style.resize="none",O.style.borderTop="none",O.value="",O.style.animation="editBlinking 2s infinite",O.focus(),U.style.animation="editBlinking 2s infinite",q.style.animation="editBlinking 2s infinite",Y.style.animation="editBlinking 2s infinite",window.deactivateDrag(),w.style.borderLeft="1px solid var(--accent)",w.style.borderRight="1px solid var(--accent)",F.style.display="block",Q.style.filter="blur(5px)",Q.style.filter="brightness(0.2)";const W=document.createElement("input");W.type="file",W.accept="image/*",W.addEventListener("change",X=>{const te=X.target.files[0];if(te){console.log("Selected file:",te);const oe=new FileReader;oe.onload=ne=>{const ce=new Blob([ne.target.result],{type:te.type});console.log("Blob:",ce);const fe=URL.createObjectURL(ce);Q.src=fe,Q.style.filter="brightness(1)",this.imageBlob=ce},oe.readAsArrayBuffer(te)}}),w.addEventListener("click",()=>{W.click()}),G.addEventListener("click",()=>{this.saveProfileTemp()})}convertForBankoo(){}readBlobAsArrayBuffer(B){return new Promise((w,Q)=>{const F=new FileReader;F.onload=()=>w(F.result),F.onerror=Q,F.readAsArrayBuffer(B)})}async saveProfileTemp(){var ye;this.shadow.getElementById("proImgSect"),this.shadow.getElementById("proImg"),this.shadow.getElementById("editImgIcon");let B=this.shadow.getElementById("profileDesc");this.shadow.getElementById("proEdit"),this.shadow.getElementById("proSave");let w=this.shadow.getElementById("proLabelName"),Q=this.shadow.getElementById("proLabelIdentity"),F=this.shadow.getElementById("proLabelEmail");const O=this.imageBlob,L=await this.readBlobAsArrayBuffer(O),G=1024,U=new Uint8Array(L),q=[];for(let Be=0;Be<U.length;Be+=G)q.push(U.slice(Be,Be+G));const Y=q.map(Be=>Array.from(Be)),W=new dist.Configuration({apiKey:VITE_ScogeI$1});var te=await new dist.OpenAIApi(W).createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Convert ${B.value} to speak from a futuristic sci-fi perspective`}],max_tokens:40}).catch(Be=>{console.log(Be)});const ne=await new dist.OpenAIApi(W).createImage({prompt:te.data.choices[0].message.content,n:1,size:"512x512"});console.log("newImage:",ne),(ye=document.getElementById("GenImgCont"))==null||ye.remove();var ce=document.createElement("div"),fe=document.createElement("img"),me=document.createElement("p");me.innerHTML=te.data.choices[0].message.content,fe.src=ne.data.data[0].url,ce.appendChild(fe),ce.appendChild(me),ce.setAttribute("id","GenImgCont"),ce.addEventListener("click",()=>{ce.remove()}),document.getElementById("camera").appendChild(ce),console.log("byteArray:",Y),nmcProps.alias=w.value,nmcProps.email=F.value,nmcProps.identifier=Q.value,nmcProps.earthText=[B.value],nmcProps.bankooText=[te.data.choices[0].message.content];var Ie=await window.ic.bitfinityWallet.getPrincipal();console.log(nmcProps),window.suUiActor.updateTemp(Ie,0,[nmcProps]),console.log("Saved Temp Profile")}openBeaconMessage(B){var L,G,U;var w=B.target.getAttribute("data-message"),Q=B.target;(L=document.getElementById("beaconPan"))==null||L.remove();var F=document.createElement("div"),O=w;F.setAttribute("class","beaconPanel"),F.setAttribute("id","beaconPan"),F.innerHTML=`
    <div id="beaconBody">
        <div id="beaconTutHead">NEW DOMAIN BEACON!</div>
        <div id="beaconTutBody">${O}</div>
        <div id="beaconTutActions">
            <div class="beaconActions" id="beaconAction1">INVESTIGATE</div>
            <div class="beaconActions" id="beaconAction2">"OK, GOT IT!"</div>
        </div>
    </div>
    <div id="beaconTutIcon">
        <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
    </div>
    <div id="beaconBG">
        <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
        <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
    </div>
    `,document.getElementById("camera").appendChild(F),document.getElementById("beaconPan").style.display="block",(G=document.getElementById("beaconAction2"))==null||G.addEventListener("click",()=>{var q;(q=document.getElementById("beaconPan"))==null||q.remove()}),(U=document.getElementById("beaconAction1"))==null||U.addEventListener("click",()=>{var q;(q=document.getElementById("beaconPan"))==null||q.remove(),Q.querySelector(".beaconIdenIcon").style.opacity="0"})}switchMenuTabs(B){var w=B.target.id,Q=B.target.classList[1],F=this.shadow.querySelector("#fm-menu1"),O=this.shadow.querySelector("#fm-menu2"),L=this.shadow.querySelector("#fm-menu3");switch(w){case"fm-menu1":this.shadow.querySelector(`.${Q}1`).style.display="grid",this.shadow.querySelector(`.${Q}2`).style.display="none",this.shadow.querySelector(`.${Q}3`).style.display="none",F.setAttribute("class",`men-active ${Q} selectedMenu`),O.setAttribute("class",`men-active ${Q}`),L.setAttribute("class",`men-active ${Q}`);break;case"fm-menu2":this.shadow.querySelector(`.${Q}1`).style.display="none",this.shadow.querySelector(`.${Q}2`).style.display="grid",this.shadow.querySelector(`.${Q}3`).style.display="none",F.setAttribute("class",`men-active ${Q}`),O.setAttribute("class",`men-active ${Q} selectedMenu`),L.setAttribute("class",`men-active ${Q}`);break;case"fm-menu3":this.shadow.querySelector(`.${Q}1`).style.display="none",this.shadow.querySelector(`.${Q}2`).style.display="none",this.shadow.querySelector(`.${Q}3`).style.display="grid",F.setAttribute("class",`men-active ${Q}`),O.setAttribute("class",`men-active ${Q}`),L.setAttribute("class",`men-active ${Q} selectedMenu`);break}}connectedCallback(){this.render(),this.shadow.getElementById("fsToggle").addEventListener("click",()=>{this.toggleFullScreen()}),this.shadow.querySelector("#uniMenuIcon").addEventListener("click",()=>{this.toggleMenu()}),this.shadow.querySelector("#uniMenuIcon2").addEventListener("click",()=>{this.closeFullMenu()}),this.tabs=this.shadow.querySelectorAll(".menuTabs"),this.tabs.forEach(B=>{B.id!="uniMenuExit"?B.addEventListener("click",()=>{this.openFullMenu()}):B.addEventListener("click",()=>{this.closeFullMenu(),window.dtfullMenuOpen=!1})}),this.headerTabs=this.shadow.querySelectorAll(".men-active"),this.headerTabs.forEach(B=>{B.addEventListener("click",w=>{this.switchMenuTabs(w)})}),this.form=this.shadow.querySelector("#feedbackForm"),this.form.addEventListener("submit",B=>{B.preventDefault(),this.shadow.getElementById("menuLoadingScreen2").style.display="grid";let w=new FormData(this.form);fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:w,mode:"cors"}).then(Q=>Q.text()).then(Q=>{this.form.reset(),this.shadow.getElementById("menuLoadingScreen2").style.display="none",this.shadow.getElementById("feedbackHeadline").style.color="var(--accent)",this.shadow.getElementById("feedbackHeadline").innerHTML="Outstanding feedback citizen!",setTimeout(()=>{this.shadow.getElementById("feedbackHeadline").style.color="var(--primary)",this.shadow.getElementById("feedbackHeadline").innerHTML="This City needs more people like you!"},3e3)})}),this.shadow.querySelector("#menuMessageBody").addEventListener("click",()=>{var B={target:this.shadow.querySelector("#fm-menu2")},w={target:this.shadow.querySelector("#menuBeacons")};this.shadow.querySelector("#uniMenuBeacons").click(B),this.switchMenuTabs(B),window.headlineSwtich(w)}),this.beacons=this.shadow.querySelectorAll(".beacon"),this.beacons.forEach(B=>{B.addEventListener("click",w=>{console.log(w.target),this.openBeaconMessage(w)})}),this.shadow.getElementById("proEdit").addEventListener("click",B=>{this.editProfile(B)})}render(){this.shadow.innerHTML=`
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
            #uniMenuBeaconsSvg path {
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
            #fm-beacons {
              width: 100%;
              height: 84%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-cotent: start;
            }
            .beacon-tabs {
              width: 95%;
              height: 100%;
              padding-left: 3%;
              color: var(--secondary);
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
              border-radius: 10px;
              position: relative;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              cursor: pointer;
              overflow: hidden;
            }
            #proImgSect:hover {
              animation: editBlinking 2s infinite;
            }
            #proImg {
              width: 100%;
              height: auto;
            }
            #profileDesc {
              width: 96%;
              height: 88%;
              padding-top: 2%;
              padding-left: 2%;
              padding-right: 2%;
              font-family: "Garmond";
              background-color: transparent;
              border: none;
              text-align: left;
              readonly: true;
              pointer-events: none;
              font-size: 1em;
            }
            #profileDesc:focus {
              outline: none;
              caret-color: var(--primary);
            }

            @keyframes editBlinking {
              0% {
                border-left: 1px solid var(--accent);
                border-right: 1px solid var(--accent);
              }
              50% {
                border-left: 1px solid var(--primary);
                border-right: 1px solid var(--primary);
              }
              100% {
                border-left: 1px solid var(--accent);
                border-right: 1px solid var(--accent);
              }
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
              border: 2px solid var(--accent);
              border-radius: 5px;
              color: var(--accent);
              cursor: pointer;
              margin-left: 5%;
              transition: all .3s ease-in-out;
            }
            .editButs:hover {
              background-color: var(--accent);
              color: black !important;
            }
            #proSave {
              opacity: 50%;
              pointer-events: none;
            }
            .proInfoSect {
              width: 95%;
              height: auto;
              display: grid;
              grid-template-columns: 40% 60%;
              grid-template-rows: 1fr;
              padding-left: 5%;
            }
            .proInfoInput {
              font-size: .8em;
              text-align: right;
              color: var(--secondary);
              border-radius: 5px;
              margin-bottom: 2px;
              border: none;
              background-color: transparent;
              resize: none;
              width: 100%;
              height: 16px;
            }
            .proInfoInput:focus {
              outline: none;
            }
            .proLabel {
              user-select: none;
              font-size: .9em;
            }
            #profileDesc {
              color: var(--secondary);
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
            .beacon {
              width: 85%;
              height: 50px;
              margin-right: 5%;
              display: grid;
              cursor: pointer;
              grid-template-columns: 40% 60%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              border-top: 1px solid var(--accent);
              background-color: rgba(0,0,0,0.5);
              font-family: "BS-R";
              padding-left: 5%;
              padding-right: 5%;
              margin-bottom: 10px;
              transition: 0.3s all ease-in-out;
              opacity: 1;
            }

            .beacon:hover {
              border-bottom: 1px solid var(--primary);
              border-left: 1px solid var(--primary);
              border-right: 1px solid var(--primary);
            }

            .beaconOrigin {
              height: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 5% 95%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              user-select: none;
              pointer-events: none;
            }
            .beaconPreview {
              height: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: end;
              align-items: center;
              font-size: 0.7em;
              text-align: right;
              user-select: none;
              pointer-events: none;
            }
            .beaconIdenIcon {
              height: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              font-size: 1.5em;
              color: var(--primary);
              user-select: none;
              pointer-events: none;
            }
            .beaconSender {
              color: var(--accent);
              font-size: 0.9em;
              user-select: none;
              pointer-events: none;
            }
            #beaconNoti {
              position: absolute;
              width: 20%;
              height: auto;
              top: 30px;
              left: 280px;
              animation: rotate 10s infinite linear;
              display: none;
            }
            @keyframes rotate {
              0% { transform: rotate(0deg); } 
              100% { transform: rotate(360deg); }
            }
            #editImgIcon {
              position: absolute;
              height: 30%;
              fill: var(--accent);
              z-index: 10;
              display: none;
              transition: 0.3s all ease-in-out;
            }

            #proImgSect:hover > svg  {
              fill: var(--accent);
              height: 35%;
            }
         </style>
         <div id="uniMenu">
         <div id="beaconNoti">
          <svg id="beaconNotiSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
         </div>
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
              <div id="uniMenuBeacons" class="menuTabs selectedMenu2">
                <div>
                  <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuBeacons">Beacons</div>
              </div>
              <div id="uniMenuSettings" class="menuTabs">
                <div>
                  <svg id="uniMenuSettingsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M61.26,13.89H24a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,13.89Z"/><path class="cls-1" d="M18.21,13.89H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,13.89Z"/><path class="cls-1" d="M61.26,28.27H46.64a.8.8,0,0,1-.8-.8.79.79,0,0,1,.8-.79H61.26a.79.79,0,0,1,.8.79A.8.8,0,0,1,61.26,28.27Z"/><path class="cls-1" d="M42.62,28.27H4.28a.79.79,0,0,1-.79-.8.79.79,0,0,1,.79-.79H42.62a.79.79,0,0,1,.8.79A.8.8,0,0,1,42.62,28.27Z"/><path class="cls-1" d="M61.26,42.64H22.19a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,42.64Z"/><path class="cls-1" d="M18.21,42.64H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,42.64Z"/><path class="cls-1" d="M18.21,20.28a.79.79,0,0,1-.79-.8V5.37a.79.79,0,0,1,.79-.8.8.8,0,0,1,.8.8V19.48A.8.8,0,0,1,18.21,20.28Z"/><path class="cls-1" d="M18.21,49.7a.79.79,0,0,1-.79-.8V34.79a.79.79,0,0,1,.79-.79.79.79,0,0,1,.8.79V48.9A.8.8,0,0,1,18.21,49.7Z"/><path class="cls-1" d="M46.64,34.59a.8.8,0,0,1-.8-.8V19.48a.79.79,0,0,1,.8-.79.79.79,0,0,1,.79.79V33.79A.79.79,0,0,1,46.64,34.59Z"/></svg>  
                </div>
                <div class="uniMenuTxt" id="menuSettings">Settings</div>
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
                  <span id="fm-menu1" class="men-active ht selectedMenu">All</span>
                  <span id="fm-menu2" class="men-active ht">Domain</span>
                  <span id="fm-menu3" class="men-active ht">Citizen</span>
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
                  <svg version="1.1" id="editImgIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M400,99c-77.2,0-140,62.8-140,140c0,37.5,14.8,80,39.5,113.7c28,38.2,63.7,59.2,100.4,59.2c36.8,0,72.5-21,100.4-59.2
                              C525.2,318.9,540,276.4,540,239C540,161.8,477.2,99,400,99z M400,382c-26.6,0-54.5-17.1-76.4-47c-20.8-28.4-33.7-65.2-33.7-96
                              c0-60.7,49.4-110.1,110.1-110.1S510.1,178.3,510.1,239C510.1,302,458.3,382,400,382z"/>
                            <path d="M400,0C217.6,0,69.2,148.4,69.2,330.8c0,182.4,148.4,330.8,330.8,330.8s330.8-148.4,330.8-330.8S582.4,0,400,0z
                                M400,631.8c-59.9,0-115.7-17.6-162.6-47.8c1.6-45.7,22.3-88.5,57.3-118.3c13.9-11.8,34.2-13.1,50.6-3.2
                              c17.6,10.7,36.1,16.1,54.7,16.1c18.7,0,37.1-5.4,54.7-16.1c16.3-9.9,36.6-8.6,50.4,3.1c35,29.7,55.9,72.7,57.5,118.4
                              C515.7,614.2,459.9,631.8,400,631.8z M590.8,563.4c-6.4-46.7-29.9-89.7-66.3-120.6c-23.7-20-57.9-22.4-85.2-5.8
                              c-25.8,15.6-52.7,15.6-78.5,0c-27.3-16.6-61.6-14.2-85.4,6c-36.4,30.9-59.7,73.8-66.2,120.5C142,508.1,99,424.4,99,330.8
                              c0-166,135-301,301-301c165.9,0,301,135,301,301C701,424.4,658,508.2,590.8,563.4z"/>
                            <path d="M602.4,701H197.6c-8.2,0-14.9,6.7-14.9,14.9c0,8.2,6.7,14.9,14.9,14.9h404.7c8.2,0,14.9-6.7,14.9-14.9
                              C617.3,707.6,610.6,701,602.4,701z"/>
                            <path d="M602.4,770.2H197.6c-8.2,0-14.9,6.7-14.9,14.9s6.7,14.9,14.9,14.9h404.7c8.2,0,14.9-6.7,14.9-14.9
                              C617.3,776.8,610.6,770.2,602.4,770.2z"/>
                          </g>
                        </g>
                      </g>
                    </svg>               
                    <img id="proImg" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/TAOS-CITY-IDC.png">
                  </div>
                  <div id="proInfo">
                    <div class="proInfoSect">
                      <div class="proLabel">Alias:</div>
                      <textarea id="proLabelName" class="proInfoInput">Damion</textarea>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Identifier:</div>
                      <textarea id="proLabelIdentity" class="proInfoInput">Male</textarea>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Email:</div>
                      <textarea id="proLabelEmail" class="proInfoInput">blank@blank.com</textarea>
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
                  <textarea id="profileDesc" placeholder="Enter a description for your city.">iWelcome to T.A.O.S City. This interface will allow you to view and update your city profile and developments. No need to come down to City Central!
                  </textarea>
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
              <div id="fm-beacons">
                <div class="beacon-tabs" id="beaconsBody">
                  <div class="beacon tut">
                    <div class="beaconOrigin">
                      <div class="beaconIdenIcon">!</div>
                      <div class="beaconSender">CITY-CENTRAL</div>
                    </div>
                    <div class="beaconPreview">
                      Welcome to T.A.O.S City. Learn how to...
                    </div>
                  </div>
                  <div class="beacon tut" data-message="Hello Test">
                    <div class="beaconOrigin">
                      <div class="beaconIdenIcon">!</div>
                      <div class="beaconSender">CITY-CENTRAL</div>
                    </div>
                    <div class="beaconPreview">
                      Register your Digisette at...
                    </div>
                  </div>
                  <div class="beacon tut">
                    <div class="beaconOrigin">
                      <div class="beaconIdenIcon">!</div>
                      <div class="beaconSender">CITY-CENTRAL</div>
                    </div>
                    <div class="beaconPreview">
                      Public enhancements are now...
                    </div>
                  </div>
                </div>
                <div class="beacon-tabs ht2">
                </div>
                <div class="beacon-tabs ht3">
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
         `}}customElements.define("scoge-unimenu",getUniMenu);class scogeRsvp extends HTMLElement{constructor(){super();Ze(this,"closeModal",()=>{document.getElementById("rsvpModal").style.display="none"});Ze(this,"Glow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--primary)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--primary)"});Ze(this,"unGlow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--accent)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--accent)"});this.shadow=this.attachShadow({mode:"open"})}get rsvps(){return this.getAttribute("rsvp")}set rsvps(w){this.setAttribute("rsvp",w)}static get observedAttributes(){return["rsvp"]}attributeChangedCallback(w,Q,F){w==="rsvp"&&this.render()}sendFeedback(w){w.preventDefault(),this.shadow.getElementById("rsvpForm").submit()}connectedCallback(){this.render(),this.shadow.getElementById("closeBtn").addEventListener("click",this.closeModal),this.shadow.getElementById("closeBtn").addEventListener("mouseover",this.Glow),this.shadow.getElementById("closeBtn").addEventListener("mouseout",this.unGlow),this.form=this.shadow.querySelector("#rsvpForm"),this.form.addEventListener("submit",w=>{w.preventDefault(),this.shadow.getElementById("menuLoadingScreen").style.display="grid";let Q=this.shadow.querySelector("input[name='Guest']:checked"),F=new FormData(this.form);F.append("Guest",Q.value),fetch("https://script.google.com/macros/s/AKfycbyDZnFn4Yy7zbQM1KB7uXDt3_WUmI7TuUT9b-Iips7lHf0mfOGs9s-B4V1M80LznyuIoA/exec",{method:"POST",body:F,mode:"cors"}).then(O=>O.text()).then(O=>{this.shadow.getElementById("menuLoadingScreen").style.display="none",this.form.reset(),this.shadow.getElementById("rightPan").innerHTML=`
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
         `}}customElements.define("scoge-rsvp",scogeRsvp);var trackname="SCOG\xC9 Radio",currentAudio=null,currenttrack=0,trackList=[{artist:"SCOG\xC9 Radio - Broadcast 1",link:"https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeSounds/IFSTFAW-Mix.mp3"}];class dtMusic extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get music(){return this.getAttribute("music")}set music(B){this.setAttribute("music",B)}static get observedAttributes(){return["music"]}attributeChangedCallback(B,w,Q){B==="music"&&this.render()}playMusic(){currentAudio===null&&(currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currenttrack++),currentAudio.play(),this.shadow.getElementById("playBtn").style.display="none",this.shadow.getElementById("pauseBtn").style.display="block",this.shadow.getElementById("ntxBtn").style.opacity="1",currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()}),this.shadow.getElementById("cat").style.display="block"}pauseMusic(){currentAudio.pause(),this.shadow.getElementById("playBtn").style.display="block",this.shadow.getElementById("pauseBtn").style.display="none",this.shadow.getElementById("cat").style.display="none"}nextRandomTrack(){currentAudio.pause(),currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),currentAudio.play(),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()})}connectedCallback(){this.render(),this.shadow.querySelector("#playBtn").addEventListener("click",()=>{this.playMusic(),this.shadow.getElementById("ntxBtn").style.display="block"}),this.shadow.querySelector("#pauseBtn").addEventListener("click",()=>{this.pauseMusic()}),this.shadow.querySelector("#ntxBtn").addEventListener("click",()=>{this.nextRandomTrack()})}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-music",dtMusic);var currentPage=1,currentBtsPage=1,inventoryTotal=2e3,lexBio="Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOG\xC9 reach its full potential.",ogeBio="Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.";class dtInvestors extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get invest(){return this.getAttribute("invest")}set invest(B){this.setAttribute("invest",B)}static get observedAttributes(){return["invest"]}attributeChangedCallback(B,w,Q){B==="invest"&&this.render()}scrollToMenu(){var B=this.shadow.querySelectorAll(".menu-item");B.forEach(w=>{w.addEventListener("click",Q=>{var F=Q.target.getAttribute("id"),O=this.shadow.getElementById(F.replace("Menu","Sect")),L=O.offsetTop,G=L-200;F==="dataMenu"&&(G=L-0),F==="aboutMenu"&&(G=L-50),this.shadow.getElementById("scrollBody").scrollTo({top:G,behavior:"smooth"}),B.forEach(U=>{U.style.color="var(--primary)",U.style.borderBottom="var(--primary) 1px solid"}),Q.target.style.color="var(--secondary)",Q.target.style.borderBottom="var(--secondary) 1px solid"}),this.shadow.getElementById("scrollBody").addEventListener("scroll",()=>{var Q=this.shadow.getElementById("scrollBody").scrollTop;B.forEach(F=>{var O=F.getAttribute("id"),L=this.shadow.getElementById(O.replace("Menu","Sect")),G=L.offsetTop;Q>=G-200&&(B.forEach(U=>{U.style.color="var(--primary)",U.style.borderBottom="var(--primary) 1px solid"}),F.style.color="var(--secondary)",F.style.borderBottom="var(--secondary) 1px solid"),Q>=this.shadow.getElementById("scrollBody").scrollHeight-this.shadow.getElementById("scrollBody").clientHeight-100&&(B.forEach(U=>{U.style.color="var(--primary)",U.style.borderBottom="var(--primary) 1px solid"}),this.shadow.getElementById("contactMenu").style.color="var(--secondary)",this.shadow.getElementById("contactMenu").style.borderBottom="var(--secondary) 1px solid")})})})}openInvestor(){this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="0%",clearShop(),clearSettings(),clearFilter()}closeInvestor(){window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-70%")}nextImage(){currentPage>=2&&(currentPage=0),currentPage++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}previousImage(){currentPage<=1?currentPage=2:currentPage--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}nextBtsImage(){currentBtsPage>=9&&(currentBtsPage=0),currentBtsPage++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}preBtsImage(){currentBtsPage<=1?currentBtsPage=9:currentBtsPage--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}slidersTotal(){var B=this.shadow.getElementById("avgRetailSlider").value,w=this.shadow.getElementById("dtcQtySlider").value,Q=this.shadow.getElementById("accountsSlider").value,F=this.shadow.getElementById("wsOrderSlider").value,O=B*w+B/2*(F*Q);this.shadow.getElementById("finalTotal").innerHTML=O.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}sliders(){this.shadow.getElementById("budgetSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("budNum").innerHTML=this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("dcqNum").innerHTML=Math.round(inventoryTotal),this.shadow.getElementById("wqtyNum").innerHTML=Math.round(inventoryTotal)}.bind(this)),this.shadow.getElementById("avgRetailSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("avrNum").innerHTML=this.shadow.getElementById("avgRetailSlider").value}.bind(this)),this.shadow.getElementById("avgPCSlider").addEventListener("input",function(){this.slidersTotal(),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,console.log(inventoryTotal),this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("avpNum").innerHTML=this.shadow.getElementById("avgPCSlider").value}.bind(this)),this.shadow.getElementById("dtcQtySlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this)),this.shadow.getElementById("accountsSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("waNum").innerHTML=this.shadow.getElementById("accountsSlider").value}.bind(this)),this.shadow.getElementById("wsOrderSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("wsOrderSlider").value}.bind(this)),this.shadow.getElementById("wrperSlider").addEventListener("input",function(){this.slidersTotal();var B=this.shadow.getElementById("wrperSlider").value/2+50,w=this.shadow.getElementById("wrperSlider").value/2-50;this.shadow.getElementById("wrP1").innerHTML=Math.round(Math.abs(w)),this.shadow.getElementById("wrP2").innerHTML=+Math.round(B),this.shadow.getElementById("wsOrderSlider").value=Math.round(inventoryTotal*(Math.abs(w)/100)),this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("dtcQtySlider").value=Math.round(inventoryTotal*(B/100)),this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this))}team(){this.shadow.getElementById("teamMain").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Starnilas Oge",this.shadow.getElementById("memberProf").innerHTML="Founder & Creative Director",this.shadow.getElementById("memberBio").innerHTML=ogeBio}.bind(this)),this.shadow.getElementById("team2").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Lex Fenwick",this.shadow.getElementById("memberProf").innerHTML="The Dow Jones, WSJ",this.shadow.getElementById("memberBio").innerHTML=lexBio}.bind(this))}connectedCallback(){this.render(),document.getElementById("investBut").addEventListener("click",this.openInvestor.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeInvestor.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this)),this.sliders(),this.team(),this.scrollToMenu()}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-investors",dtInvestors);class dialogueBox extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get dialogue(){return this.getAttribute("dialogue")}set dialogue(B){this.setAttribute("dialogue",B)}static get observedAttributes(){return["dialogue"]}attributeChangedCallback(B,w,Q){B==="dialogue"&&this.render()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
           `}}customElements.define("scoge-dialogue",dialogueBox);function _assertThisInitialized(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function _inheritsLoose(D,B){D.prototype=Object.create(B.prototype),D.prototype.constructor=D,D.__proto__=B}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _config={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_defaults={duration:.5,overwrite:!1,delay:0},_suppressOverwrites,_reverting$1,_context,_bigNum$1=1e8,_tinyNum=1/_bigNum$1,_2PI=Math.PI*2,_HALF_PI=_2PI/4,_gsID=0,_sqrt=Math.sqrt,_cos=Math.cos,_sin=Math.sin,_isString=function D(B){return typeof B=="string"},_isFunction=function D(B){return typeof B=="function"},_isNumber=function D(B){return typeof B=="number"},_isUndefined=function D(B){return typeof B=="undefined"},_isObject=function D(B){return typeof B=="object"},_isNotFalse=function D(B){return B!==!1},_windowExists$1=function D(){return typeof window!="undefined"},_isFuncOrString=function D(B){return _isFunction(B)||_isString(B)},_isTypedArray=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_isArray=Array.isArray,_strictNumExp=/(?:-?\.?\d|\.)+/gi,_numExp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_numWithUnitExp=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_complexStringNumExp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_relExp=/[+-]=-?[.\d]+/,_delimitedValueExp=/[^,'"\[\]\s]+/gi,_unitExp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_globalTimeline,_win$1,_coreInitted,_doc$1,_globals={},_installScope={},_coreReady,_install=function D(B){return(_installScope=_merge(B,_globals))&&gsap$1},_missingPlugin=function D(B,w){return console.warn("Invalid property",B,"set to",w,"Missing plugin? gsap.registerPlugin()")},_warn=function D(B,w){return!w&&console.warn(B)},_addGlobal=function D(B,w){return B&&(_globals[B]=w)&&_installScope&&(_installScope[B]=w)||_globals},_emptyFunc=function D(){return 0},_startAtRevertConfig={suppressEvents:!0,isStart:!0,kill:!1},_revertConfigNoKill={suppressEvents:!0,kill:!1},_revertConfig={suppressEvents:!0},_reservedProps={},_lazyTweens=[],_lazyLookup={},_lastRenderedFrame,_plugins={},_effects={},_nextGCFrame=30,_harnessPlugins=[],_callbackNames="",_harness=function D(B){var w=B[0],Q,F;if(_isObject(w)||_isFunction(w)||(B=[B]),!(Q=(w._gsap||{}).harness)){for(F=_harnessPlugins.length;F--&&!_harnessPlugins[F].targetTest(w););Q=_harnessPlugins[F]}for(F=B.length;F--;)B[F]&&(B[F]._gsap||(B[F]._gsap=new GSCache(B[F],Q)))||B.splice(F,1);return B},_getCache=function D(B){return B._gsap||_harness(toArray(B))[0]._gsap},_getProperty=function D(B,w,Q){return(Q=B[w])&&_isFunction(Q)?B[w]():_isUndefined(Q)&&B.getAttribute&&B.getAttribute(w)||Q},_forEachName=function D(B,w){return(B=B.split(",")).forEach(w)||B},_round=function D(B){return Math.round(B*1e5)/1e5||0},_roundPrecise=function D(B){return Math.round(B*1e7)/1e7||0},_parseRelative=function D(B,w){var Q=w.charAt(0),F=parseFloat(w.substr(2));return B=parseFloat(B),Q==="+"?B+F:Q==="-"?B-F:Q==="*"?B*F:B/F},_arrayContainsAny=function D(B,w){for(var Q=w.length,F=0;B.indexOf(w[F])<0&&++F<Q;);return F<Q},_lazyRender=function D(){var B=_lazyTweens.length,w=_lazyTweens.slice(0),Q,F;for(_lazyLookup={},_lazyTweens.length=0,Q=0;Q<B;Q++)F=w[Q],F&&F._lazy&&(F.render(F._lazy[0],F._lazy[1],!0)._lazy=0)},_lazySafeRender=function D(B,w,Q,F){_lazyTweens.length&&!_reverting$1&&_lazyRender(),B.render(w,Q,F||_reverting$1&&w<0&&(B._initted||B._startAt)),_lazyTweens.length&&!_reverting$1&&_lazyRender()},_numericIfPossible=function D(B){var w=parseFloat(B);return(w||w===0)&&(B+"").match(_delimitedValueExp).length<2?w:_isString(B)?B.trim():B},_passThrough=function D(B){return B},_setDefaults=function D(B,w){for(var Q in w)Q in B||(B[Q]=w[Q]);return B},_setKeyframeDefaults=function D(B){return function(w,Q){for(var F in Q)F in w||F==="duration"&&B||F==="ease"||(w[F]=Q[F])}},_merge=function D(B,w){for(var Q in w)B[Q]=w[Q];return B},_mergeDeep=function D(B,w){for(var Q in w)Q!=="__proto__"&&Q!=="constructor"&&Q!=="prototype"&&(B[Q]=_isObject(w[Q])?D(B[Q]||(B[Q]={}),w[Q]):w[Q]);return B},_copyExcluding=function D(B,w){var Q={},F;for(F in B)F in w||(Q[F]=B[F]);return Q},_inheritDefaults=function D(B){var w=B.parent||_globalTimeline,Q=B.keyframes?_setKeyframeDefaults(_isArray(B.keyframes)):_setDefaults;if(_isNotFalse(B.inherit))for(;w;)Q(B,w.vars.defaults),w=w.parent||w._dp;return B},_arraysMatch=function D(B,w){for(var Q=B.length,F=Q===w.length;F&&Q--&&B[Q]===w[Q];);return Q<0},_addLinkedListItem=function D(B,w,Q,F,O){Q===void 0&&(Q="_first"),F===void 0&&(F="_last");var L=B[F],G;if(O)for(G=w[O];L&&L[O]>G;)L=L._prev;return L?(w._next=L._next,L._next=w):(w._next=B[Q],B[Q]=w),w._next?w._next._prev=w:B[F]=w,w._prev=L,w.parent=w._dp=B,w},_removeLinkedListItem=function D(B,w,Q,F){Q===void 0&&(Q="_first"),F===void 0&&(F="_last");var O=w._prev,L=w._next;O?O._next=L:B[Q]===w&&(B[Q]=L),L?L._prev=O:B[F]===w&&(B[F]=O),w._next=w._prev=w.parent=null},_removeFromParent=function D(B,w){B.parent&&(!w||B.parent.autoRemoveChildren)&&B.parent.remove(B),B._act=0},_uncache=function D(B,w){if(B&&(!w||w._end>B._dur||w._start<0))for(var Q=B;Q;)Q._dirty=1,Q=Q.parent;return B},_recacheAncestors=function D(B){for(var w=B.parent;w&&w.parent;)w._dirty=1,w.totalDuration(),w=w.parent;return B},_rewindStartAt=function D(B,w,Q,F){return B._startAt&&(_reverting$1?B._startAt.revert(_revertConfigNoKill):B.vars.immediateRender&&!B.vars.autoRevert||B._startAt.render(w,!0,F))},_hasNoPausedAncestors=function D(B){return!B||B._ts&&D(B.parent)},_elapsedCycleDuration=function D(B){return B._repeat?_animationCycle(B._tTime,B=B.duration()+B._rDelay)*B:0},_animationCycle=function D(B,w){var Q=Math.floor(B/=w);return B&&Q===B?Q-1:Q},_parentToChildTotalTime=function D(B,w){return(B-w._start)*w._ts+(w._ts>=0?0:w._dirty?w.totalDuration():w._tDur)},_setEnd=function D(B){return B._end=_roundPrecise(B._start+(B._tDur/Math.abs(B._ts||B._rts||_tinyNum)||0))},_alignPlayhead=function D(B,w){var Q=B._dp;return Q&&Q.smoothChildTiming&&B._ts&&(B._start=_roundPrecise(Q._time-(B._ts>0?w/B._ts:((B._dirty?B.totalDuration():B._tDur)-w)/-B._ts)),_setEnd(B),Q._dirty||_uncache(Q,B)),B},_postAddChecks=function D(B,w){var Q;if((w._time||w._initted&&!w._dur)&&(Q=_parentToChildTotalTime(B.rawTime(),w),(!w._dur||_clamp(0,w.totalDuration(),Q)-w._tTime>_tinyNum)&&w.render(Q,!0)),_uncache(B,w)._dp&&B._initted&&B._time>=B._dur&&B._ts){if(B._dur<B.duration())for(Q=B;Q._dp;)Q.rawTime()>=0&&Q.totalTime(Q._tTime),Q=Q._dp;B._zTime=-_tinyNum}},_addToTimeline=function D(B,w,Q,F){return w.parent&&_removeFromParent(w),w._start=_roundPrecise((_isNumber(Q)?Q:Q||B!==_globalTimeline?_parsePosition(B,Q,w):B._time)+w._delay),w._end=_roundPrecise(w._start+(w.totalDuration()/Math.abs(w.timeScale())||0)),_addLinkedListItem(B,w,"_first","_last",B._sort?"_start":0),_isFromOrFromStart(w)||(B._recent=w),F||_postAddChecks(B,w),B._ts<0&&_alignPlayhead(B,B._tTime),B},_scrollTrigger=function D(B,w){return(_globals.ScrollTrigger||_missingPlugin("scrollTrigger",w))&&_globals.ScrollTrigger.create(w,B)},_attemptInitTween=function D(B,w,Q,F,O){if(_initTween(B,w,O),!B._initted)return 1;if(!Q&&B._pt&&!_reverting$1&&(B._dur&&B.vars.lazy!==!1||!B._dur&&B.vars.lazy)&&_lastRenderedFrame!==_ticker.frame)return _lazyTweens.push(B),B._lazy=[O,F],1},_parentPlayheadIsBeforeStart=function D(B){var w=B.parent;return w&&w._ts&&w._initted&&!w._lock&&(w.rawTime()<0||D(w))},_isFromOrFromStart=function D(B){var w=B.data;return w==="isFromStart"||w==="isStart"},_renderZeroDurationTween=function D(B,w,Q,F){var O=B.ratio,L=w<0||!w&&(!B._start&&_parentPlayheadIsBeforeStart(B)&&!(!B._initted&&_isFromOrFromStart(B))||(B._ts<0||B._dp._ts<0)&&!_isFromOrFromStart(B))?0:1,G=B._rDelay,U=0,q,Y,W;if(G&&B._repeat&&(U=_clamp(0,B._tDur,w),Y=_animationCycle(U,G),B._yoyo&&Y&1&&(L=1-L),Y!==_animationCycle(B._tTime,G)&&(O=1-L,B.vars.repeatRefresh&&B._initted&&B.invalidate())),L!==O||_reverting$1||F||B._zTime===_tinyNum||!w&&B._zTime){if(!B._initted&&_attemptInitTween(B,w,F,Q,U))return;for(W=B._zTime,B._zTime=w||(Q?_tinyNum:0),Q||(Q=w&&!W),B.ratio=L,B._from&&(L=1-L),B._time=0,B._tTime=U,q=B._pt;q;)q.r(L,q.d),q=q._next;w<0&&_rewindStartAt(B,w,Q,!0),B._onUpdate&&!Q&&_callback(B,"onUpdate"),U&&B._repeat&&!Q&&B.parent&&_callback(B,"onRepeat"),(w>=B._tDur||w<0)&&B.ratio===L&&(L&&_removeFromParent(B,1),!Q&&!_reverting$1&&(_callback(B,L?"onComplete":"onReverseComplete",!0),B._prom&&B._prom()))}else B._zTime||(B._zTime=w)},_findNextPauseTween=function D(B,w,Q){var F;if(Q>w)for(F=B._first;F&&F._start<=Q;){if(F.data==="isPause"&&F._start>w)return F;F=F._next}else for(F=B._last;F&&F._start>=Q;){if(F.data==="isPause"&&F._start<w)return F;F=F._prev}},_setDuration=function D(B,w,Q,F){var O=B._repeat,L=_roundPrecise(w)||0,G=B._tTime/B._tDur;return G&&!F&&(B._time*=L/B._dur),B._dur=L,B._tDur=O?O<0?1e10:_roundPrecise(L*(O+1)+B._rDelay*O):L,G>0&&!F&&_alignPlayhead(B,B._tTime=B._tDur*G),B.parent&&_setEnd(B),Q||_uncache(B.parent,B),B},_onUpdateTotalDuration=function D(B){return B instanceof Timeline?_uncache(B):_setDuration(B,B._dur)},_zeroPosition={_start:0,endTime:_emptyFunc,totalDuration:_emptyFunc},_parsePosition=function D(B,w,Q){var F=B.labels,O=B._recent||_zeroPosition,L=B.duration()>=_bigNum$1?O.endTime(!1):B._dur,G,U,q;return _isString(w)&&(isNaN(w)||w in F)?(U=w.charAt(0),q=w.substr(-1)==="%",G=w.indexOf("="),U==="<"||U===">"?(G>=0&&(w=w.replace(/=/,"")),(U==="<"?O._start:O.endTime(O._repeat>=0))+(parseFloat(w.substr(1))||0)*(q?(G<0?O:Q).totalDuration()/100:1)):G<0?(w in F||(F[w]=L),F[w]):(U=parseFloat(w.charAt(G-1)+w.substr(G+1)),q&&Q&&(U=U/100*(_isArray(Q)?Q[0]:Q).totalDuration()),G>1?D(B,w.substr(0,G-1),Q)+U:L+U)):w==null?L:+w},_createTweenType=function D(B,w,Q){var F=_isNumber(w[1]),O=(F?2:1)+(B<2?0:1),L=w[O],G,U;if(F&&(L.duration=w[1]),L.parent=Q,B){for(G=L,U=Q;U&&!("immediateRender"in G);)G=U.vars.defaults||{},U=_isNotFalse(U.vars.inherit)&&U.parent;L.immediateRender=_isNotFalse(G.immediateRender),B<2?L.runBackwards=1:L.startAt=w[O-1]}return new Tween(w[0],L,w[O+1])},_conditionalReturn=function D(B,w){return B||B===0?w(B):w},_clamp=function D(B,w,Q){return Q<B?B:Q>w?w:Q},getUnit=function D(B,w){return!_isString(B)||!(w=_unitExp.exec(B))?"":w[1]},clamp=function D(B,w,Q){return _conditionalReturn(Q,function(F){return _clamp(B,w,F)})},_slice=[].slice,_isArrayLike=function D(B,w){return B&&_isObject(B)&&"length"in B&&(!w&&!B.length||B.length-1 in B&&_isObject(B[0]))&&!B.nodeType&&B!==_win$1},_flatten=function D(B,w,Q){return Q===void 0&&(Q=[]),B.forEach(function(F){var O;return _isString(F)&&!w||_isArrayLike(F,1)?(O=Q).push.apply(O,toArray(F)):Q.push(F)})||Q},toArray=function D(B,w,Q){return _context&&!w&&_context.selector?_context.selector(B):_isString(B)&&!Q&&(_coreInitted||!_wake())?_slice.call((w||_doc$1).querySelectorAll(B),0):_isArray(B)?_flatten(B,Q):_isArrayLike(B)?_slice.call(B,0):B?[B]:[]},selector=function D(B){return B=toArray(B)[0]||_warn("Invalid scope")||{},function(w){var Q=B.current||B.nativeElement||B;return toArray(w,Q.querySelectorAll?Q:Q===B?_warn("Invalid scope")||_doc$1.createElement("div"):B)}},shuffle=function D(B){return B.sort(function(){return .5-Math.random()})},distribute=function D(B){if(_isFunction(B))return B;var w=_isObject(B)?B:{each:B},Q=_parseEase(w.ease),F=w.from||0,O=parseFloat(w.base)||0,L={},G=F>0&&F<1,U=isNaN(F)||G,q=w.axis,Y=F,W=F;return _isString(F)?Y=W={center:.5,edges:.5,end:1}[F]||0:!G&&U&&(Y=F[0],W=F[1]),function(X,te,oe){var ne=(oe||w).length,ce=L[ne],fe,me,Ie,ye,Be,Ce,we,De,be;if(!ce){if(be=w.grid==="auto"?0:(w.grid||[1,_bigNum$1])[1],!be){for(we=-_bigNum$1;we<(we=oe[be++].getBoundingClientRect().left)&&be<ne;);be--}for(ce=L[ne]=[],fe=U?Math.min(be,ne)*Y-.5:F%be,me=be===_bigNum$1?0:U?ne*W/be-.5:F/be|0,we=0,De=_bigNum$1,Ce=0;Ce<ne;Ce++)Ie=Ce%be-fe,ye=me-(Ce/be|0),ce[Ce]=Be=q?Math.abs(q==="y"?ye:Ie):_sqrt(Ie*Ie+ye*ye),Be>we&&(we=Be),Be<De&&(De=Be);F==="random"&&shuffle(ce),ce.max=we-De,ce.min=De,ce.v=ne=(parseFloat(w.amount)||parseFloat(w.each)*(be>ne?ne-1:q?q==="y"?ne/be:be:Math.max(be,ne/be))||0)*(F==="edges"?-1:1),ce.b=ne<0?O-ne:O,ce.u=getUnit(w.amount||w.each)||0,Q=Q&&ne<0?_invertEase(Q):Q}return ne=(ce[X]-ce.min)/ce.max||0,_roundPrecise(ce.b+(Q?Q(ne):ne)*ce.v)+ce.u}},_roundModifier=function D(B){var w=Math.pow(10,((B+"").split(".")[1]||"").length);return function(Q){var F=_roundPrecise(Math.round(parseFloat(Q)/B)*B*w);return(F-F%1)/w+(_isNumber(Q)?0:getUnit(Q))}},snap=function D(B,w){var Q=_isArray(B),F,O;return!Q&&_isObject(B)&&(F=Q=B.radius||_bigNum$1,B.values?(B=toArray(B.values),(O=!_isNumber(B[0]))&&(F*=F)):B=_roundModifier(B.increment)),_conditionalReturn(w,Q?_isFunction(B)?function(L){return O=B(L),Math.abs(O-L)<=F?O:L}:function(L){for(var G=parseFloat(O?L.x:L),U=parseFloat(O?L.y:0),q=_bigNum$1,Y=0,W=B.length,X,te;W--;)O?(X=B[W].x-G,te=B[W].y-U,X=X*X+te*te):X=Math.abs(B[W]-G),X<q&&(q=X,Y=W);return Y=!F||q<=F?B[Y]:L,O||Y===L||_isNumber(L)?Y:Y+getUnit(L)}:_roundModifier(B))},random=function D(B,w,Q,F){return _conditionalReturn(_isArray(B)?!w:Q===!0?!!(Q=0):!F,function(){return _isArray(B)?B[~~(Math.random()*B.length)]:(Q=Q||1e-5)&&(F=Q<1?Math.pow(10,(Q+"").length-2):1)&&Math.floor(Math.round((B-Q/2+Math.random()*(w-B+Q*.99))/Q)*Q*F)/F})},pipe=function D(){for(var B=arguments.length,w=new Array(B),Q=0;Q<B;Q++)w[Q]=arguments[Q];return function(F){return w.reduce(function(O,L){return L(O)},F)}},unitize=function D(B,w){return function(Q){return B(parseFloat(Q))+(w||getUnit(Q))}},normalize=function D(B,w,Q){return mapRange(B,w,0,1,Q)},_wrapArray=function D(B,w,Q){return _conditionalReturn(Q,function(F){return B[~~w(F)]})},wrap=function D(B,w,Q){var F=w-B;return _isArray(B)?_wrapArray(B,D(0,B.length),w):_conditionalReturn(Q,function(O){return(F+(O-B)%F)%F+B})},wrapYoyo=function D(B,w,Q){var F=w-B,O=F*2;return _isArray(B)?_wrapArray(B,D(0,B.length-1),w):_conditionalReturn(Q,function(L){return L=(O+(L-B)%O)%O||0,B+(L>F?O-L:L)})},_replaceRandom=function D(B){for(var w=0,Q="",F,O,L,G;~(F=B.indexOf("random(",w));)L=B.indexOf(")",F),G=B.charAt(F+7)==="[",O=B.substr(F+7,L-F-7).match(G?_delimitedValueExp:_strictNumExp),Q+=B.substr(w,F-w)+random(G?O:+O[0],G?0:+O[1],+O[2]||1e-5),w=L+1;return Q+B.substr(w,B.length-w)},mapRange=function D(B,w,Q,F,O){var L=w-B,G=F-Q;return _conditionalReturn(O,function(U){return Q+((U-B)/L*G||0)})},interpolate=function D(B,w,Q,F){var O=isNaN(B+w)?0:function(te){return(1-te)*B+te*w};if(!O){var L=_isString(B),G={},U,q,Y,W,X;if(Q===!0&&(F=1)&&(Q=null),L)B={p:B},w={p:w};else if(_isArray(B)&&!_isArray(w)){for(Y=[],W=B.length,X=W-2,q=1;q<W;q++)Y.push(D(B[q-1],B[q]));W--,O=function(oe){oe*=W;var ne=Math.min(X,~~oe);return Y[ne](oe-ne)},Q=w}else F||(B=_merge(_isArray(B)?[]:{},B));if(!Y){for(U in w)_addPropTween.call(G,B,U,"get",w[U]);O=function(oe){return _renderPropTweens(oe,G)||(L?B.p:B)}}}return _conditionalReturn(Q,O)},_getLabelInDirection=function D(B,w,Q){var F=B.labels,O=_bigNum$1,L,G,U;for(L in F)G=F[L]-w,G<0==!!Q&&G&&O>(G=Math.abs(G))&&(U=L,O=G);return U},_callback=function D(B,w,Q){var F=B.vars,O=F[w],L=_context,G=B._ctx,U,q,Y;if(!!O)return U=F[w+"Params"],q=F.callbackScope||B,Q&&_lazyTweens.length&&_lazyRender(),G&&(_context=G),Y=U?O.apply(q,U):O.call(q),_context=L,Y},_interrupt=function D(B){return _removeFromParent(B),B.scrollTrigger&&B.scrollTrigger.kill(!!_reverting$1),B.progress()<1&&_callback(B,"onInterrupt"),B},_quickTween,_createPlugin=function D(B){B=!B.name&&B.default||B;var w=B.name,Q=_isFunction(B),F=w&&!Q&&B.init?function(){this._props=[]}:B,O={init:_emptyFunc,render:_renderPropTweens,add:_addPropTween,kill:_killPropTweensOf,modifier:_addPluginModifier,rawVars:0},L={targetTest:0,get:0,getSetter:_getSetter,aliases:{},register:0};if(_wake(),B!==F){if(_plugins[w])return;_setDefaults(F,_setDefaults(_copyExcluding(B,O),L)),_merge(F.prototype,_merge(O,_copyExcluding(B,L))),_plugins[F.prop=w]=F,B.targetTest&&(_harnessPlugins.push(F),_reservedProps[w]=1),w=(w==="css"?"CSS":w.charAt(0).toUpperCase()+w.substr(1))+"Plugin"}_addGlobal(w,F),B.register&&B.register(gsap$1,F,PropTween)},_255=255,_colorLookup={aqua:[0,_255,_255],lime:[0,_255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_255],navy:[0,0,128],white:[_255,_255,_255],olive:[128,128,0],yellow:[_255,_255,0],orange:[_255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_255,0,0],pink:[_255,192,203],cyan:[0,_255,_255],transparent:[_255,_255,_255,0]},_hue=function D(B,w,Q){return B+=B<0?1:B>1?-1:0,(B*6<1?w+(Q-w)*B*6:B<.5?Q:B*3<2?w+(Q-w)*(2/3-B)*6:w)*_255+.5|0},splitColor=function D(B,w,Q){var F=B?_isNumber(B)?[B>>16,B>>8&_255,B&_255]:0:_colorLookup.black,O,L,G,U,q,Y,W,X,te,oe;if(!F){if(B.substr(-1)===","&&(B=B.substr(0,B.length-1)),_colorLookup[B])F=_colorLookup[B];else if(B.charAt(0)==="#"){if(B.length<6&&(O=B.charAt(1),L=B.charAt(2),G=B.charAt(3),B="#"+O+O+L+L+G+G+(B.length===5?B.charAt(4)+B.charAt(4):"")),B.length===9)return F=parseInt(B.substr(1,6),16),[F>>16,F>>8&_255,F&_255,parseInt(B.substr(7),16)/255];B=parseInt(B.substr(1),16),F=[B>>16,B>>8&_255,B&_255]}else if(B.substr(0,3)==="hsl"){if(F=oe=B.match(_strictNumExp),!w)U=+F[0]%360/360,q=+F[1]/100,Y=+F[2]/100,L=Y<=.5?Y*(q+1):Y+q-Y*q,O=Y*2-L,F.length>3&&(F[3]*=1),F[0]=_hue(U+1/3,O,L),F[1]=_hue(U,O,L),F[2]=_hue(U-1/3,O,L);else if(~B.indexOf("="))return F=B.match(_numExp),Q&&F.length<4&&(F[3]=1),F}else F=B.match(_strictNumExp)||_colorLookup.transparent;F=F.map(Number)}return w&&!oe&&(O=F[0]/_255,L=F[1]/_255,G=F[2]/_255,W=Math.max(O,L,G),X=Math.min(O,L,G),Y=(W+X)/2,W===X?U=q=0:(te=W-X,q=Y>.5?te/(2-W-X):te/(W+X),U=W===O?(L-G)/te+(L<G?6:0):W===L?(G-O)/te+2:(O-L)/te+4,U*=60),F[0]=~~(U+.5),F[1]=~~(q*100+.5),F[2]=~~(Y*100+.5)),Q&&F.length<4&&(F[3]=1),F},_colorOrderData=function D(B){var w=[],Q=[],F=-1;return B.split(_colorExp).forEach(function(O){var L=O.match(_numWithUnitExp)||[];w.push.apply(w,L),Q.push(F+=L.length+1)}),w.c=Q,w},_formatColors=function D(B,w,Q){var F="",O=(B+F).match(_colorExp),L=w?"hsla(":"rgba(",G=0,U,q,Y,W;if(!O)return B;if(O=O.map(function(X){return(X=splitColor(X,w,1))&&L+(w?X[0]+","+X[1]+"%,"+X[2]+"%,"+X[3]:X.join(","))+")"}),Q&&(Y=_colorOrderData(B),U=Q.c,U.join(F)!==Y.c.join(F)))for(q=B.replace(_colorExp,"1").split(_numWithUnitExp),W=q.length-1;G<W;G++)F+=q[G]+(~U.indexOf(G)?O.shift()||L+"0,0,0,0)":(Y.length?Y:O.length?O:Q).shift());if(!q)for(q=B.split(_colorExp),W=q.length-1;G<W;G++)F+=q[G]+O[G];return F+q[W]},_colorExp=function(){var D="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",B;for(B in _colorLookup)D+="|"+B+"\\b";return new RegExp(D+")","gi")}(),_hslExp=/hsl[a]?\(/,_colorStringFilter=function D(B){var w=B.join(" "),Q;if(_colorExp.lastIndex=0,_colorExp.test(w))return Q=_hslExp.test(w),B[1]=_formatColors(B[1],Q),B[0]=_formatColors(B[0],Q,_colorOrderData(B[1])),!0},_tickerActive,_ticker=function(){var D=Date.now,B=500,w=33,Q=D(),F=Q,O=1e3/240,L=O,G=[],U,q,Y,W,X,te,oe=function ne(ce){var fe=D()-F,me=ce===!0,Ie,ye,Be,Ce;if(fe>B&&(Q+=fe-w),F+=fe,Be=F-Q,Ie=Be-L,(Ie>0||me)&&(Ce=++W.frame,X=Be-W.time*1e3,W.time=Be=Be/1e3,L+=Ie+(Ie>=O?4:O-Ie),ye=1),me||(U=q(ne)),ye)for(te=0;te<G.length;te++)G[te](Be,X,Ce,ce)};return W={time:0,frame:0,tick:function(){oe(!0)},deltaRatio:function(ce){return X/(1e3/(ce||60))},wake:function(){_coreReady&&(!_coreInitted&&_windowExists$1()&&(_win$1=_coreInitted=window,_doc$1=_win$1.document||{},_globals.gsap=gsap$1,(_win$1.gsapVersions||(_win$1.gsapVersions=[])).push(gsap$1.version),_install(_installScope||_win$1.GreenSockGlobals||!_win$1.gsap&&_win$1||{}),Y=_win$1.requestAnimationFrame),U&&W.sleep(),q=Y||function(ce){return setTimeout(ce,L-W.time*1e3+1|0)},_tickerActive=1,oe(2))},sleep:function(){(Y?_win$1.cancelAnimationFrame:clearTimeout)(U),_tickerActive=0,q=_emptyFunc},lagSmoothing:function(ce,fe){B=ce||1/0,w=Math.min(fe||33,B)},fps:function(ce){O=1e3/(ce||240),L=W.time*1e3+O},add:function(ce,fe,me){var Ie=fe?function(ye,Be,Ce,we){ce(ye,Be,Ce,we),W.remove(Ie)}:ce;return W.remove(ce),G[me?"unshift":"push"](Ie),_wake(),Ie},remove:function(ce,fe){~(fe=G.indexOf(ce))&&G.splice(fe,1)&&te>=fe&&te--},_listeners:G},W}(),_wake=function D(){return!_tickerActive&&_ticker.wake()},_easeMap={},_customEaseExp=/^[\d.\-M][\d.\-,\s]/,_quotesExp=/["']/g,_parseObjectInString=function D(B){for(var w={},Q=B.substr(1,B.length-3).split(":"),F=Q[0],O=1,L=Q.length,G,U,q;O<L;O++)U=Q[O],G=O!==L-1?U.lastIndexOf(","):U.length,q=U.substr(0,G),w[F]=isNaN(q)?q.replace(_quotesExp,"").trim():+q,F=U.substr(G+1).trim();return w},_valueInParentheses=function D(B){var w=B.indexOf("(")+1,Q=B.indexOf(")"),F=B.indexOf("(",w);return B.substring(w,~F&&F<Q?B.indexOf(")",Q+1):Q)},_configEaseFromString=function D(B){var w=(B+"").split("("),Q=_easeMap[w[0]];return Q&&w.length>1&&Q.config?Q.config.apply(null,~B.indexOf("{")?[_parseObjectInString(w[1])]:_valueInParentheses(B).split(",").map(_numericIfPossible)):_easeMap._CE&&_customEaseExp.test(B)?_easeMap._CE("",B):Q},_invertEase=function D(B){return function(w){return 1-B(1-w)}},_propagateYoyoEase=function D(B,w){for(var Q=B._first,F;Q;)Q instanceof Timeline?D(Q,w):Q.vars.yoyoEase&&(!Q._yoyo||!Q._repeat)&&Q._yoyo!==w&&(Q.timeline?D(Q.timeline,w):(F=Q._ease,Q._ease=Q._yEase,Q._yEase=F,Q._yoyo=w)),Q=Q._next},_parseEase=function D(B,w){return B&&(_isFunction(B)?B:_easeMap[B]||_configEaseFromString(B))||w},_insertEase=function D(B,w,Q,F){Q===void 0&&(Q=function(U){return 1-w(1-U)}),F===void 0&&(F=function(U){return U<.5?w(U*2)/2:1-w((1-U)*2)/2});var O={easeIn:w,easeOut:Q,easeInOut:F},L;return _forEachName(B,function(G){_easeMap[G]=_globals[G]=O,_easeMap[L=G.toLowerCase()]=Q;for(var U in O)_easeMap[L+(U==="easeIn"?".in":U==="easeOut"?".out":".inOut")]=_easeMap[G+"."+U]=O[U]}),O},_easeInOutFromOut=function D(B){return function(w){return w<.5?(1-B(1-w*2))/2:.5+B((w-.5)*2)/2}},_configElastic=function D(B,w,Q){var F=w>=1?w:1,O=(Q||(B?.3:.45))/(w<1?w:1),L=O/_2PI*(Math.asin(1/F)||0),G=function(Y){return Y===1?1:F*Math.pow(2,-10*Y)*_sin((Y-L)*O)+1},U=B==="out"?G:B==="in"?function(q){return 1-G(1-q)}:_easeInOutFromOut(G);return O=_2PI/O,U.config=function(q,Y){return D(B,q,Y)},U},_configBack=function D(B,w){w===void 0&&(w=1.70158);var Q=function(L){return L?--L*L*((w+1)*L+w)+1:0},F=B==="out"?Q:B==="in"?function(O){return 1-Q(1-O)}:_easeInOutFromOut(Q);return F.config=function(O){return D(B,O)},F};_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong",function(D,B){var w=B<5?B+1:B;_insertEase(D+",Power"+(w-1),B?function(Q){return Math.pow(Q,w)}:function(Q){return Q},function(Q){return 1-Math.pow(1-Q,w)},function(Q){return Q<.5?Math.pow(Q*2,w)/2:1-Math.pow((1-Q)*2,w)/2})});_easeMap.Linear.easeNone=_easeMap.none=_easeMap.Linear.easeIn;_insertEase("Elastic",_configElastic("in"),_configElastic("out"),_configElastic());(function(D,B){var w=1/B,Q=2*w,F=2.5*w,O=function(G){return G<w?D*G*G:G<Q?D*Math.pow(G-1.5/B,2)+.75:G<F?D*(G-=2.25/B)*G+.9375:D*Math.pow(G-2.625/B,2)+.984375};_insertEase("Bounce",function(L){return 1-O(1-L)},O)})(7.5625,2.75);_insertEase("Expo",function(D){return D?Math.pow(2,10*(D-1)):0});_insertEase("Circ",function(D){return-(_sqrt(1-D*D)-1)});_insertEase("Sine",function(D){return D===1?1:-_cos(D*_HALF_PI)+1});_insertEase("Back",_configBack("in"),_configBack("out"),_configBack());_easeMap.SteppedEase=_easeMap.steps=_globals.SteppedEase={config:function D(B,w){B===void 0&&(B=1);var Q=1/B,F=B+(w?0:1),O=w?1:0,L=1-_tinyNum;return function(G){return((F*_clamp(0,L,G)|0)+O)*Q}}};_defaults.ease=_easeMap["quad.out"];_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(D){return _callbackNames+=D+","+D+"Params,"});var GSCache=function D(B,w){this.id=_gsID++,B._gsap=this,this.target=B,this.harness=w,this.get=w?w.get:_getProperty,this.set=w?w.getSetter:_getSetter},Animation=function(){function D(w){this.vars=w,this._delay=+w.delay||0,(this._repeat=w.repeat===1/0?-2:w.repeat||0)&&(this._rDelay=w.repeatDelay||0,this._yoyo=!!w.yoyo||!!w.yoyoEase),this._ts=1,_setDuration(this,+w.duration,1,1),this.data=w.data,_context&&(this._ctx=_context,_context.data.push(this)),_tickerActive||_ticker.wake()}var B=D.prototype;return B.delay=function(Q){return Q||Q===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+Q-this._delay),this._delay=Q,this):this._delay},B.duration=function(Q){return arguments.length?this.totalDuration(this._repeat>0?Q+(Q+this._rDelay)*this._repeat:Q):this.totalDuration()&&this._dur},B.totalDuration=function(Q){return arguments.length?(this._dirty=0,_setDuration(this,this._repeat<0?Q:(Q-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},B.totalTime=function(Q,F){if(_wake(),!arguments.length)return this._tTime;var O=this._dp;if(O&&O.smoothChildTiming&&this._ts){for(_alignPlayhead(this,Q),!O._dp||O.parent||_postAddChecks(O,this);O&&O.parent;)O.parent._time!==O._start+(O._ts>=0?O._tTime/O._ts:(O.totalDuration()-O._tTime)/-O._ts)&&O.totalTime(O._tTime,!0),O=O.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&Q<this._tDur||this._ts<0&&Q>0||!this._tDur&&!Q)&&_addToTimeline(this._dp,this,this._start-this._delay)}return(this._tTime!==Q||!this._dur&&!F||this._initted&&Math.abs(this._zTime)===_tinyNum||!Q&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=Q),_lazySafeRender(this,Q,F)),this},B.time=function(Q,F){return arguments.length?this.totalTime(Math.min(this.totalDuration(),Q+_elapsedCycleDuration(this))%(this._dur+this._rDelay)||(Q?this._dur:0),F):this._time},B.totalProgress=function(Q,F){return arguments.length?this.totalTime(this.totalDuration()*Q,F):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},B.progress=function(Q,F){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-Q:Q)+_elapsedCycleDuration(this),F):this.duration()?Math.min(1,this._time/this._dur):this.ratio},B.iteration=function(Q,F){var O=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(Q-1)*O,F):this._repeat?_animationCycle(this._tTime,O)+1:1},B.timeScale=function(Q){if(!arguments.length)return this._rts===-_tinyNum?0:this._rts;if(this._rts===Q)return this;var F=this.parent&&this._ts?_parentToChildTotalTime(this.parent._time,this):this._tTime;return this._rts=+Q||0,this._ts=this._ps||Q===-_tinyNum?0:this._rts,this.totalTime(_clamp(-this._delay,this._tDur,F),!0),_setEnd(this),_recacheAncestors(this)},B.paused=function(Q){return arguments.length?(this._ps!==Q&&(this._ps=Q,Q?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_wake(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_tinyNum&&(this._tTime-=_tinyNum)))),this):this._ps},B.startTime=function(Q){if(arguments.length){this._start=Q;var F=this.parent||this._dp;return F&&(F._sort||!this.parent)&&_addToTimeline(F,this,Q-this._delay),this}return this._start},B.endTime=function(Q){return this._start+(_isNotFalse(Q)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},B.rawTime=function(Q){var F=this.parent||this._dp;return F?Q&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_parentToChildTotalTime(F.rawTime(Q),this):this._tTime:this._tTime},B.revert=function(Q){Q===void 0&&(Q=_revertConfig);var F=_reverting$1;return _reverting$1=Q,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(Q),this.totalTime(-.01,Q.suppressEvents)),this.data!=="nested"&&Q.kill!==!1&&this.kill(),_reverting$1=F,this},B.globalTime=function(Q){for(var F=this,O=arguments.length?Q:F.rawTime();F;)O=F._start+O/(F._ts||1),F=F._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(Q):O},B.repeat=function(Q){return arguments.length?(this._repeat=Q===1/0?-2:Q,_onUpdateTotalDuration(this)):this._repeat===-2?1/0:this._repeat},B.repeatDelay=function(Q){if(arguments.length){var F=this._time;return this._rDelay=Q,_onUpdateTotalDuration(this),F?this.time(F):this}return this._rDelay},B.yoyo=function(Q){return arguments.length?(this._yoyo=Q,this):this._yoyo},B.seek=function(Q,F){return this.totalTime(_parsePosition(this,Q),_isNotFalse(F))},B.restart=function(Q,F){return this.play().totalTime(Q?-this._delay:0,_isNotFalse(F))},B.play=function(Q,F){return Q!=null&&this.seek(Q,F),this.reversed(!1).paused(!1)},B.reverse=function(Q,F){return Q!=null&&this.seek(Q||this.totalDuration(),F),this.reversed(!0).paused(!1)},B.pause=function(Q,F){return Q!=null&&this.seek(Q,F),this.paused(!0)},B.resume=function(){return this.paused(!1)},B.reversed=function(Q){return arguments.length?(!!Q!==this.reversed()&&this.timeScale(-this._rts||(Q?-_tinyNum:0)),this):this._rts<0},B.invalidate=function(){return this._initted=this._act=0,this._zTime=-_tinyNum,this},B.isActive=function(){var Q=this.parent||this._dp,F=this._start,O;return!!(!Q||this._ts&&this._initted&&Q.isActive()&&(O=Q.rawTime(!0))>=F&&O<this.endTime(!0)-_tinyNum)},B.eventCallback=function(Q,F,O){var L=this.vars;return arguments.length>1?(F?(L[Q]=F,O&&(L[Q+"Params"]=O),Q==="onUpdate"&&(this._onUpdate=F)):delete L[Q],this):L[Q]},B.then=function(Q){var F=this;return new Promise(function(O){var L=_isFunction(Q)?Q:_passThrough,G=function(){var q=F.then;F.then=null,_isFunction(L)&&(L=L(F))&&(L.then||L===F)&&(F.then=q),O(L),F.then=q};F._initted&&F.totalProgress()===1&&F._ts>=0||!F._tTime&&F._ts<0?G():F._prom=G})},B.kill=function(){_interrupt(this)},D}();_setDefaults(Animation.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_tinyNum,_prom:0,_ps:!1,_rts:1});var Timeline=function(D){_inheritsLoose(B,D);function B(Q,F){var O;return Q===void 0&&(Q={}),O=D.call(this,Q)||this,O.labels={},O.smoothChildTiming=!!Q.smoothChildTiming,O.autoRemoveChildren=!!Q.autoRemoveChildren,O._sort=_isNotFalse(Q.sortChildren),_globalTimeline&&_addToTimeline(Q.parent||_globalTimeline,_assertThisInitialized(O),F),Q.reversed&&O.reverse(),Q.paused&&O.paused(!0),Q.scrollTrigger&&_scrollTrigger(_assertThisInitialized(O),Q.scrollTrigger),O}var w=B.prototype;return w.to=function(F,O,L){return _createTweenType(0,arguments,this),this},w.from=function(F,O,L){return _createTweenType(1,arguments,this),this},w.fromTo=function(F,O,L,G){return _createTweenType(2,arguments,this),this},w.set=function(F,O,L){return O.duration=0,O.parent=this,_inheritDefaults(O).repeatDelay||(O.repeat=0),O.immediateRender=!!O.immediateRender,new Tween(F,O,_parsePosition(this,L),1),this},w.call=function(F,O,L){return _addToTimeline(this,Tween.delayedCall(0,F,O),L)},w.staggerTo=function(F,O,L,G,U,q,Y){return L.duration=O,L.stagger=L.stagger||G,L.onComplete=q,L.onCompleteParams=Y,L.parent=this,new Tween(F,L,_parsePosition(this,U)),this},w.staggerFrom=function(F,O,L,G,U,q,Y){return L.runBackwards=1,_inheritDefaults(L).immediateRender=_isNotFalse(L.immediateRender),this.staggerTo(F,O,L,G,U,q,Y)},w.staggerFromTo=function(F,O,L,G,U,q,Y,W){return G.startAt=L,_inheritDefaults(G).immediateRender=_isNotFalse(G.immediateRender),this.staggerTo(F,O,G,U,q,Y,W)},w.render=function(F,O,L){var G=this._time,U=this._dirty?this.totalDuration():this._tDur,q=this._dur,Y=F<=0?0:_roundPrecise(F),W=this._zTime<0!=F<0&&(this._initted||!q),X,te,oe,ne,ce,fe,me,Ie,ye,Be,Ce,we;if(this!==_globalTimeline&&Y>U&&F>=0&&(Y=U),Y!==this._tTime||L||W){if(G!==this._time&&q&&(Y+=this._time-G,F+=this._time-G),X=Y,ye=this._start,Ie=this._ts,fe=!Ie,W&&(q||(G=this._zTime),(F||!O)&&(this._zTime=F)),this._repeat){if(Ce=this._yoyo,ce=q+this._rDelay,this._repeat<-1&&F<0)return this.totalTime(ce*100+F,O,L);if(X=_roundPrecise(Y%ce),Y===U?(ne=this._repeat,X=q):(ne=~~(Y/ce),ne&&ne===Y/ce&&(X=q,ne--),X>q&&(X=q)),Be=_animationCycle(this._tTime,ce),!G&&this._tTime&&Be!==ne&&(Be=ne),Ce&&ne&1&&(X=q-X,we=1),ne!==Be&&!this._lock){var De=Ce&&Be&1,be=De===(Ce&&ne&1);if(ne<Be&&(De=!De),G=De?0:q,this._lock=1,this.render(G||(we?0:_roundPrecise(ne*ce)),O,!q)._lock=0,this._tTime=Y,!O&&this.parent&&_callback(this,"onRepeat"),this.vars.repeatRefresh&&!we&&(this.invalidate()._lock=1),G&&G!==this._time||fe!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(q=this._dur,U=this._tDur,be&&(this._lock=2,G=De?q:-1e-4,this.render(G,!0),this.vars.repeatRefresh&&!we&&this.invalidate()),this._lock=0,!this._ts&&!fe)return this;_propagateYoyoEase(this,we)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(me=_findNextPauseTween(this,_roundPrecise(G),_roundPrecise(X)),me&&(Y-=X-(X=me._start))),this._tTime=Y,this._time=X,this._act=!Ie,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=F,G=0),!G&&X&&!O&&(_callback(this,"onStart"),this._tTime!==Y))return this;if(X>=G&&F>=0)for(te=this._first;te;){if(oe=te._next,(te._act||X>=te._start)&&te._ts&&me!==te){if(te.parent!==this)return this.render(F,O,L);if(te.render(te._ts>0?(X-te._start)*te._ts:(te._dirty?te.totalDuration():te._tDur)+(X-te._start)*te._ts,O,L),X!==this._time||!this._ts&&!fe){me=0,oe&&(Y+=this._zTime=-_tinyNum);break}}te=oe}else{te=this._last;for(var Se=F<0?F:X;te;){if(oe=te._prev,(te._act||Se<=te._end)&&te._ts&&me!==te){if(te.parent!==this)return this.render(F,O,L);if(te.render(te._ts>0?(Se-te._start)*te._ts:(te._dirty?te.totalDuration():te._tDur)+(Se-te._start)*te._ts,O,L||_reverting$1&&(te._initted||te._startAt)),X!==this._time||!this._ts&&!fe){me=0,oe&&(Y+=this._zTime=Se?-_tinyNum:_tinyNum);break}}te=oe}}if(me&&!O&&(this.pause(),me.render(X>=G?0:-_tinyNum)._zTime=X>=G?1:-1,this._ts))return this._start=ye,_setEnd(this),this.render(F,O,L);this._onUpdate&&!O&&_callback(this,"onUpdate",!0),(Y===U&&this._tTime>=this.totalDuration()||!Y&&G)&&(ye===this._start||Math.abs(Ie)!==Math.abs(this._ts))&&(this._lock||((F||!q)&&(Y===U&&this._ts>0||!Y&&this._ts<0)&&_removeFromParent(this,1),!O&&!(F<0&&!G)&&(Y||G||!U)&&(_callback(this,Y===U&&F>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(Y<U&&this.timeScale()>0)&&this._prom())))}return this},w.add=function(F,O){var L=this;if(_isNumber(O)||(O=_parsePosition(this,O,F)),!(F instanceof Animation)){if(_isArray(F))return F.forEach(function(G){return L.add(G,O)}),this;if(_isString(F))return this.addLabel(F,O);if(_isFunction(F))F=Tween.delayedCall(0,F);else return this}return this!==F?_addToTimeline(this,F,O):this},w.getChildren=function(F,O,L,G){F===void 0&&(F=!0),O===void 0&&(O=!0),L===void 0&&(L=!0),G===void 0&&(G=-_bigNum$1);for(var U=[],q=this._first;q;)q._start>=G&&(q instanceof Tween?O&&U.push(q):(L&&U.push(q),F&&U.push.apply(U,q.getChildren(!0,O,L)))),q=q._next;return U},w.getById=function(F){for(var O=this.getChildren(1,1,1),L=O.length;L--;)if(O[L].vars.id===F)return O[L]},w.remove=function(F){return _isString(F)?this.removeLabel(F):_isFunction(F)?this.killTweensOf(F):(_removeLinkedListItem(this,F),F===this._recent&&(this._recent=this._last),_uncache(this))},w.totalTime=function(F,O){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_roundPrecise(_ticker.time-(this._ts>0?F/this._ts:(this.totalDuration()-F)/-this._ts))),D.prototype.totalTime.call(this,F,O),this._forcing=0,this):this._tTime},w.addLabel=function(F,O){return this.labels[F]=_parsePosition(this,O),this},w.removeLabel=function(F){return delete this.labels[F],this},w.addPause=function(F,O,L){var G=Tween.delayedCall(0,O||_emptyFunc,L);return G.data="isPause",this._hasPause=1,_addToTimeline(this,G,_parsePosition(this,F))},w.removePause=function(F){var O=this._first;for(F=_parsePosition(this,F);O;)O._start===F&&O.data==="isPause"&&_removeFromParent(O),O=O._next},w.killTweensOf=function(F,O,L){for(var G=this.getTweensOf(F,L),U=G.length;U--;)_overwritingTween!==G[U]&&G[U].kill(F,O);return this},w.getTweensOf=function(F,O){for(var L=[],G=toArray(F),U=this._first,q=_isNumber(O),Y;U;)U instanceof Tween?_arrayContainsAny(U._targets,G)&&(q?(!_overwritingTween||U._initted&&U._ts)&&U.globalTime(0)<=O&&U.globalTime(U.totalDuration())>O:!O||U.isActive())&&L.push(U):(Y=U.getTweensOf(G,O)).length&&L.push.apply(L,Y),U=U._next;return L},w.tweenTo=function(F,O){O=O||{};var L=this,G=_parsePosition(L,F),U=O,q=U.startAt,Y=U.onStart,W=U.onStartParams,X=U.immediateRender,te,oe=Tween.to(L,_setDefaults({ease:O.ease||"none",lazy:!1,immediateRender:!1,time:G,overwrite:"auto",duration:O.duration||Math.abs((G-(q&&"time"in q?q.time:L._time))/L.timeScale())||_tinyNum,onStart:function(){if(L.pause(),!te){var ce=O.duration||Math.abs((G-(q&&"time"in q?q.time:L._time))/L.timeScale());oe._dur!==ce&&_setDuration(oe,ce,0,1).render(oe._time,!0,!0),te=1}Y&&Y.apply(oe,W||[])}},O));return X?oe.render(0):oe},w.tweenFromTo=function(F,O,L){return this.tweenTo(O,_setDefaults({startAt:{time:_parsePosition(this,F)}},L))},w.recent=function(){return this._recent},w.nextLabel=function(F){return F===void 0&&(F=this._time),_getLabelInDirection(this,_parsePosition(this,F))},w.previousLabel=function(F){return F===void 0&&(F=this._time),_getLabelInDirection(this,_parsePosition(this,F),1)},w.currentLabel=function(F){return arguments.length?this.seek(F,!0):this.previousLabel(this._time+_tinyNum)},w.shiftChildren=function(F,O,L){L===void 0&&(L=0);for(var G=this._first,U=this.labels,q;G;)G._start>=L&&(G._start+=F,G._end+=F),G=G._next;if(O)for(q in U)U[q]>=L&&(U[q]+=F);return _uncache(this)},w.invalidate=function(F){var O=this._first;for(this._lock=0;O;)O.invalidate(F),O=O._next;return D.prototype.invalidate.call(this,F)},w.clear=function(F){F===void 0&&(F=!0);for(var O=this._first,L;O;)L=O._next,this.remove(O),O=L;return this._dp&&(this._time=this._tTime=this._pTime=0),F&&(this.labels={}),_uncache(this)},w.totalDuration=function(F){var O=0,L=this,G=L._last,U=_bigNum$1,q,Y,W;if(arguments.length)return L.timeScale((L._repeat<0?L.duration():L.totalDuration())/(L.reversed()?-F:F));if(L._dirty){for(W=L.parent;G;)q=G._prev,G._dirty&&G.totalDuration(),Y=G._start,Y>U&&L._sort&&G._ts&&!L._lock?(L._lock=1,_addToTimeline(L,G,Y-G._delay,1)._lock=0):U=Y,Y<0&&G._ts&&(O-=Y,(!W&&!L._dp||W&&W.smoothChildTiming)&&(L._start+=Y/L._ts,L._time-=Y,L._tTime-=Y),L.shiftChildren(-Y,!1,-1/0),U=0),G._end>O&&G._ts&&(O=G._end),G=q;_setDuration(L,L===_globalTimeline&&L._time>O?L._time:O,1,1),L._dirty=0}return L._tDur},B.updateRoot=function(F){if(_globalTimeline._ts&&(_lazySafeRender(_globalTimeline,_parentToChildTotalTime(F,_globalTimeline)),_lastRenderedFrame=_ticker.frame),_ticker.frame>=_nextGCFrame){_nextGCFrame+=_config.autoSleep||120;var O=_globalTimeline._first;if((!O||!O._ts)&&_config.autoSleep&&_ticker._listeners.length<2){for(;O&&!O._ts;)O=O._next;O||_ticker.sleep()}}},B}(Animation);_setDefaults(Timeline.prototype,{_lock:0,_hasPause:0,_forcing:0});var _addComplexStringPropTween=function D(B,w,Q,F,O,L,G){var U=new PropTween(this._pt,B,w,0,1,_renderComplexString,null,O),q=0,Y=0,W,X,te,oe,ne,ce,fe,me;for(U.b=Q,U.e=F,Q+="",F+="",(fe=~F.indexOf("random("))&&(F=_replaceRandom(F)),L&&(me=[Q,F],L(me,B,w),Q=me[0],F=me[1]),X=Q.match(_complexStringNumExp)||[];W=_complexStringNumExp.exec(F);)oe=W[0],ne=F.substring(q,W.index),te?te=(te+1)%5:ne.substr(-5)==="rgba("&&(te=1),oe!==X[Y++]&&(ce=parseFloat(X[Y-1])||0,U._pt={_next:U._pt,p:ne||Y===1?ne:",",s:ce,c:oe.charAt(1)==="="?_parseRelative(ce,oe)-ce:parseFloat(oe)-ce,m:te&&te<4?Math.round:0},q=_complexStringNumExp.lastIndex);return U.c=q<F.length?F.substring(q,F.length):"",U.fp=G,(_relExp.test(F)||fe)&&(U.e=0),this._pt=U,U},_addPropTween=function D(B,w,Q,F,O,L,G,U,q,Y){_isFunction(F)&&(F=F(O||0,B,L));var W=B[w],X=Q!=="get"?Q:_isFunction(W)?q?B[w.indexOf("set")||!_isFunction(B["get"+w.substr(3)])?w:"get"+w.substr(3)](q):B[w]():W,te=_isFunction(W)?q?_setterFuncWithParam:_setterFunc:_setterPlain,oe;if(_isString(F)&&(~F.indexOf("random(")&&(F=_replaceRandom(F)),F.charAt(1)==="="&&(oe=_parseRelative(X,F)+(getUnit(X)||0),(oe||oe===0)&&(F=oe))),!Y||X!==F||_forceAllPropTweens)return!isNaN(X*F)&&F!==""?(oe=new PropTween(this._pt,B,w,+X||0,F-(X||0),typeof W=="boolean"?_renderBoolean:_renderPlain,0,te),q&&(oe.fp=q),G&&oe.modifier(G,this,B),this._pt=oe):(!W&&!(w in B)&&_missingPlugin(w,F),_addComplexStringPropTween.call(this,B,w,X,F,te,U||_config.stringFilter,q))},_processVars=function D(B,w,Q,F,O){if(_isFunction(B)&&(B=_parseFuncOrString(B,O,w,Q,F)),!_isObject(B)||B.style&&B.nodeType||_isArray(B)||_isTypedArray(B))return _isString(B)?_parseFuncOrString(B,O,w,Q,F):B;var L={},G;for(G in B)L[G]=_parseFuncOrString(B[G],O,w,Q,F);return L},_checkPlugin=function D(B,w,Q,F,O,L){var G,U,q,Y;if(_plugins[B]&&(G=new _plugins[B]).init(O,G.rawVars?w[B]:_processVars(w[B],F,O,L,Q),Q,F,L)!==!1&&(Q._pt=U=new PropTween(Q._pt,O,B,0,1,G.render,G,0,G.priority),Q!==_quickTween))for(q=Q._ptLookup[Q._targets.indexOf(O)],Y=G._props.length;Y--;)q[G._props[Y]]=U;return G},_overwritingTween,_forceAllPropTweens,_initTween=function D(B,w,Q){var F=B.vars,O=F.ease,L=F.startAt,G=F.immediateRender,U=F.lazy,q=F.onUpdate,Y=F.onUpdateParams,W=F.callbackScope,X=F.runBackwards,te=F.yoyoEase,oe=F.keyframes,ne=F.autoRevert,ce=B._dur,fe=B._startAt,me=B._targets,Ie=B.parent,ye=Ie&&Ie.data==="nested"?Ie.vars.targets:me,Be=B._overwrite==="auto"&&!_suppressOverwrites,Ce=B.timeline,we,De,be,Se,Ne,Le,Pe,Ge,_e,ve,Qe,xe,Me;if(Ce&&(!oe||!O)&&(O="none"),B._ease=_parseEase(O,_defaults.ease),B._yEase=te?_invertEase(_parseEase(te===!0?O:te,_defaults.ease)):0,te&&B._yoyo&&!B._repeat&&(te=B._yEase,B._yEase=B._ease,B._ease=te),B._from=!Ce&&!!F.runBackwards,!Ce||oe&&!F.stagger){if(Ge=me[0]?_getCache(me[0]).harness:0,xe=Ge&&F[Ge.prop],we=_copyExcluding(F,_reservedProps),fe&&(fe._zTime<0&&fe.progress(1),w<0&&X&&G&&!ne?fe.render(-1,!0):fe.revert(X&&ce?_revertConfigNoKill:_startAtRevertConfig),fe._lazy=0),L){if(_removeFromParent(B._startAt=Tween.set(me,_setDefaults({data:"isStart",overwrite:!1,parent:Ie,immediateRender:!0,lazy:!fe&&_isNotFalse(U),startAt:null,delay:0,onUpdate:q,onUpdateParams:Y,callbackScope:W,stagger:0},L))),B._startAt._dp=0,B._startAt._sat=B,w<0&&(_reverting$1||!G&&!ne)&&B._startAt.revert(_revertConfigNoKill),G&&ce&&w<=0&&Q<=0){w&&(B._zTime=w);return}}else if(X&&ce&&!fe){if(w&&(G=!1),be=_setDefaults({overwrite:!1,data:"isFromStart",lazy:G&&!fe&&_isNotFalse(U),immediateRender:G,stagger:0,parent:Ie},we),xe&&(be[Ge.prop]=xe),_removeFromParent(B._startAt=Tween.set(me,be)),B._startAt._dp=0,B._startAt._sat=B,w<0&&(_reverting$1?B._startAt.revert(_revertConfigNoKill):B._startAt.render(-1,!0)),B._zTime=w,!G)D(B._startAt,_tinyNum,_tinyNum);else if(!w)return}for(B._pt=B._ptCache=0,U=ce&&_isNotFalse(U)||U&&!ce,De=0;De<me.length;De++){if(Ne=me[De],Pe=Ne._gsap||_harness(me)[De]._gsap,B._ptLookup[De]=ve={},_lazyLookup[Pe.id]&&_lazyTweens.length&&_lazyRender(),Qe=ye===me?De:ye.indexOf(Ne),Ge&&(_e=new Ge).init(Ne,xe||we,B,Qe,ye)!==!1&&(B._pt=Se=new PropTween(B._pt,Ne,_e.name,0,1,_e.render,_e,0,_e.priority),_e._props.forEach(function(Fe){ve[Fe]=Se}),_e.priority&&(Le=1)),!Ge||xe)for(be in we)_plugins[be]&&(_e=_checkPlugin(be,we,B,Qe,Ne,ye))?_e.priority&&(Le=1):ve[be]=Se=_addPropTween.call(B,Ne,be,"get",we[be],Qe,ye,0,F.stringFilter);B._op&&B._op[De]&&B.kill(Ne,B._op[De]),Be&&B._pt&&(_overwritingTween=B,_globalTimeline.killTweensOf(Ne,ve,B.globalTime(w)),Me=!B.parent,_overwritingTween=0),B._pt&&U&&(_lazyLookup[Pe.id]=1)}Le&&_sortPropTweensByPriority(B),B._onInit&&B._onInit(B)}B._onUpdate=q,B._initted=(!B._op||B._pt)&&!Me,oe&&w<=0&&Ce.render(_bigNum$1,!0,!0)},_updatePropTweens=function D(B,w,Q,F,O,L,G){var U=(B._pt&&B._ptCache||(B._ptCache={}))[w],q,Y,W,X;if(!U)for(U=B._ptCache[w]=[],W=B._ptLookup,X=B._targets.length;X--;){if(q=W[X][w],q&&q.d&&q.d._pt)for(q=q.d._pt;q&&q.p!==w&&q.fp!==w;)q=q._next;if(!q)return _forceAllPropTweens=1,B.vars[w]="+=0",_initTween(B,G),_forceAllPropTweens=0,1;U.push(q)}for(X=U.length;X--;)Y=U[X],q=Y._pt||Y,q.s=(F||F===0)&&!O?F:q.s+(F||0)+L*q.c,q.c=Q-q.s,Y.e&&(Y.e=_round(Q)+getUnit(Y.e)),Y.b&&(Y.b=q.s+getUnit(Y.b))},_addAliasesToVars=function D(B,w){var Q=B[0]?_getCache(B[0]).harness:0,F=Q&&Q.aliases,O,L,G,U;if(!F)return w;O=_merge({},w);for(L in F)if(L in O)for(U=F[L].split(","),G=U.length;G--;)O[U[G]]=O[L];return O},_parseKeyframe=function D(B,w,Q,F){var O=w.ease||F||"power1.inOut",L,G;if(_isArray(w))G=Q[B]||(Q[B]=[]),w.forEach(function(U,q){return G.push({t:q/(w.length-1)*100,v:U,e:O})});else for(L in w)G=Q[L]||(Q[L]=[]),L==="ease"||G.push({t:parseFloat(B),v:w[L],e:O})},_parseFuncOrString=function D(B,w,Q,F,O){return _isFunction(B)?B.call(w,Q,F,O):_isString(B)&&~B.indexOf("random(")?_replaceRandom(B):B},_staggerTweenProps=_callbackNames+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_staggerPropsToSkip={};_forEachName(_staggerTweenProps+",id,stagger,delay,duration,paused,scrollTrigger",function(D){return _staggerPropsToSkip[D]=1});var Tween=function(D){_inheritsLoose(B,D);function B(Q,F,O,L){var G;typeof F=="number"&&(O.duration=F,F=O,O=null),G=D.call(this,L?F:_inheritDefaults(F))||this;var U=G.vars,q=U.duration,Y=U.delay,W=U.immediateRender,X=U.stagger,te=U.overwrite,oe=U.keyframes,ne=U.defaults,ce=U.scrollTrigger,fe=U.yoyoEase,me=F.parent||_globalTimeline,Ie=(_isArray(Q)||_isTypedArray(Q)?_isNumber(Q[0]):"length"in F)?[Q]:toArray(Q),ye,Be,Ce,we,De,be,Se,Ne;if(G._targets=Ie.length?_harness(Ie):_warn("GSAP target "+Q+" not found. https://greensock.com",!_config.nullTargetWarn)||[],G._ptLookup=[],G._overwrite=te,oe||X||_isFuncOrString(q)||_isFuncOrString(Y)){if(F=G.vars,ye=G.timeline=new Timeline({data:"nested",defaults:ne||{},targets:me&&me.data==="nested"?me.vars.targets:Ie}),ye.kill(),ye.parent=ye._dp=_assertThisInitialized(G),ye._start=0,X||_isFuncOrString(q)||_isFuncOrString(Y)){if(we=Ie.length,Se=X&&distribute(X),_isObject(X))for(De in X)~_staggerTweenProps.indexOf(De)&&(Ne||(Ne={}),Ne[De]=X[De]);for(Be=0;Be<we;Be++)Ce=_copyExcluding(F,_staggerPropsToSkip),Ce.stagger=0,fe&&(Ce.yoyoEase=fe),Ne&&_merge(Ce,Ne),be=Ie[Be],Ce.duration=+_parseFuncOrString(q,_assertThisInitialized(G),Be,be,Ie),Ce.delay=(+_parseFuncOrString(Y,_assertThisInitialized(G),Be,be,Ie)||0)-G._delay,!X&&we===1&&Ce.delay&&(G._delay=Y=Ce.delay,G._start+=Y,Ce.delay=0),ye.to(be,Ce,Se?Se(Be,be,Ie):0),ye._ease=_easeMap.none;ye.duration()?q=Y=0:G.timeline=0}else if(oe){_inheritDefaults(_setDefaults(ye.vars.defaults,{ease:"none"})),ye._ease=_parseEase(oe.ease||F.ease||"none");var Le=0,Pe,Ge,_e;if(_isArray(oe))oe.forEach(function(ve){return ye.to(Ie,ve,">")}),ye.duration();else{Ce={};for(De in oe)De==="ease"||De==="easeEach"||_parseKeyframe(De,oe[De],Ce,oe.easeEach);for(De in Ce)for(Pe=Ce[De].sort(function(ve,Qe){return ve.t-Qe.t}),Le=0,Be=0;Be<Pe.length;Be++)Ge=Pe[Be],_e={ease:Ge.e,duration:(Ge.t-(Be?Pe[Be-1].t:0))/100*q},_e[De]=Ge.v,ye.to(Ie,_e,Le),Le+=_e.duration;ye.duration()<q&&ye.to({},{duration:q-ye.duration()})}}q||G.duration(q=ye.duration())}else G.timeline=0;return te===!0&&!_suppressOverwrites&&(_overwritingTween=_assertThisInitialized(G),_globalTimeline.killTweensOf(Ie),_overwritingTween=0),_addToTimeline(me,_assertThisInitialized(G),O),F.reversed&&G.reverse(),F.paused&&G.paused(!0),(W||!q&&!oe&&G._start===_roundPrecise(me._time)&&_isNotFalse(W)&&_hasNoPausedAncestors(_assertThisInitialized(G))&&me.data!=="nested")&&(G._tTime=-_tinyNum,G.render(Math.max(0,-Y)||0)),ce&&_scrollTrigger(_assertThisInitialized(G),ce),G}var w=B.prototype;return w.render=function(F,O,L){var G=this._time,U=this._tDur,q=this._dur,Y=F<0,W=F>U-_tinyNum&&!Y?U:F<_tinyNum?0:F,X,te,oe,ne,ce,fe,me,Ie,ye;if(!q)_renderZeroDurationTween(this,F,O,L);else if(W!==this._tTime||!F||L||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==Y){if(X=W,Ie=this.timeline,this._repeat){if(ne=q+this._rDelay,this._repeat<-1&&Y)return this.totalTime(ne*100+F,O,L);if(X=_roundPrecise(W%ne),W===U?(oe=this._repeat,X=q):(oe=~~(W/ne),oe&&oe===W/ne&&(X=q,oe--),X>q&&(X=q)),fe=this._yoyo&&oe&1,fe&&(ye=this._yEase,X=q-X),ce=_animationCycle(this._tTime,ne),X===G&&!L&&this._initted)return this._tTime=W,this;oe!==ce&&(Ie&&this._yEase&&_propagateYoyoEase(Ie,fe),this.vars.repeatRefresh&&!fe&&!this._lock&&(this._lock=L=1,this.render(_roundPrecise(ne*oe),!0).invalidate()._lock=0))}if(!this._initted){if(_attemptInitTween(this,Y?F:X,L,O,W))return this._tTime=0,this;if(G!==this._time)return this;if(q!==this._dur)return this.render(F,O,L)}if(this._tTime=W,this._time=X,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=me=(ye||this._ease)(X/q),this._from&&(this.ratio=me=1-me),X&&!G&&!O&&(_callback(this,"onStart"),this._tTime!==W))return this;for(te=this._pt;te;)te.r(me,te.d),te=te._next;Ie&&Ie.render(F<0?F:!X&&fe?-_tinyNum:Ie._dur*Ie._ease(X/this._dur),O,L)||this._startAt&&(this._zTime=F),this._onUpdate&&!O&&(Y&&_rewindStartAt(this,F,O,L),_callback(this,"onUpdate")),this._repeat&&oe!==ce&&this.vars.onRepeat&&!O&&this.parent&&_callback(this,"onRepeat"),(W===this._tDur||!W)&&this._tTime===W&&(Y&&!this._onUpdate&&_rewindStartAt(this,F,!0,!0),(F||!q)&&(W===this._tDur&&this._ts>0||!W&&this._ts<0)&&_removeFromParent(this,1),!O&&!(Y&&!G)&&(W||G||fe)&&(_callback(this,W===U?"onComplete":"onReverseComplete",!0),this._prom&&!(W<U&&this.timeScale()>0)&&this._prom()))}return this},w.targets=function(){return this._targets},w.invalidate=function(F){return(!F||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(F),D.prototype.invalidate.call(this,F)},w.resetTo=function(F,O,L,G){_tickerActive||_ticker.wake(),this._ts||this.play();var U=Math.min(this._dur,(this._dp._time-this._start)*this._ts),q;return this._initted||_initTween(this,U),q=this._ease(U/this._dur),_updatePropTweens(this,F,O,L,G,q,U)?this.resetTo(F,O,L,G):(_alignPlayhead(this,0),this.parent||_addLinkedListItem(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},w.kill=function(F,O){if(O===void 0&&(O="all"),!F&&(!O||O==="all"))return this._lazy=this._pt=0,this.parent?_interrupt(this):this;if(this.timeline){var L=this.timeline.totalDuration();return this.timeline.killTweensOf(F,O,_overwritingTween&&_overwritingTween.vars.overwrite!==!0)._first||_interrupt(this),this.parent&&L!==this.timeline.totalDuration()&&_setDuration(this,this._dur*this.timeline._tDur/L,0,1),this}var G=this._targets,U=F?toArray(F):G,q=this._ptLookup,Y=this._pt,W,X,te,oe,ne,ce,fe;if((!O||O==="all")&&_arraysMatch(G,U))return O==="all"&&(this._pt=0),_interrupt(this);for(W=this._op=this._op||[],O!=="all"&&(_isString(O)&&(ne={},_forEachName(O,function(me){return ne[me]=1}),O=ne),O=_addAliasesToVars(G,O)),fe=G.length;fe--;)if(~U.indexOf(G[fe])){X=q[fe],O==="all"?(W[fe]=O,oe=X,te={}):(te=W[fe]=W[fe]||{},oe=O);for(ne in oe)ce=X&&X[ne],ce&&((!("kill"in ce.d)||ce.d.kill(ne)===!0)&&_removeLinkedListItem(this,ce,"_pt"),delete X[ne]),te!=="all"&&(te[ne]=1)}return this._initted&&!this._pt&&Y&&_interrupt(this),this},B.to=function(F,O){return new B(F,O,arguments[2])},B.from=function(F,O){return _createTweenType(1,arguments)},B.delayedCall=function(F,O,L,G){return new B(O,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:F,onComplete:O,onReverseComplete:O,onCompleteParams:L,onReverseCompleteParams:L,callbackScope:G})},B.fromTo=function(F,O,L){return _createTweenType(2,arguments)},B.set=function(F,O){return O.duration=0,O.repeatDelay||(O.repeat=0),new B(F,O)},B.killTweensOf=function(F,O,L){return _globalTimeline.killTweensOf(F,O,L)},B}(Animation);_setDefaults(Tween.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_forEachName("staggerTo,staggerFrom,staggerFromTo",function(D){Tween[D]=function(){var B=new Timeline,w=_slice.call(arguments,0);return w.splice(D==="staggerFromTo"?5:4,0,0),B[D].apply(B,w)}});var _setterPlain=function D(B,w,Q){return B[w]=Q},_setterFunc=function D(B,w,Q){return B[w](Q)},_setterFuncWithParam=function D(B,w,Q,F){return B[w](F.fp,Q)},_setterAttribute=function D(B,w,Q){return B.setAttribute(w,Q)},_getSetter=function D(B,w){return _isFunction(B[w])?_setterFunc:_isUndefined(B[w])&&B.setAttribute?_setterAttribute:_setterPlain},_renderPlain=function D(B,w){return w.set(w.t,w.p,Math.round((w.s+w.c*B)*1e6)/1e6,w)},_renderBoolean=function D(B,w){return w.set(w.t,w.p,!!(w.s+w.c*B),w)},_renderComplexString=function D(B,w){var Q=w._pt,F="";if(!B&&w.b)F=w.b;else if(B===1&&w.e)F=w.e;else{for(;Q;)F=Q.p+(Q.m?Q.m(Q.s+Q.c*B):Math.round((Q.s+Q.c*B)*1e4)/1e4)+F,Q=Q._next;F+=w.c}w.set(w.t,w.p,F,w)},_renderPropTweens=function D(B,w){for(var Q=w._pt;Q;)Q.r(B,Q.d),Q=Q._next},_addPluginModifier=function D(B,w,Q,F){for(var O=this._pt,L;O;)L=O._next,O.p===F&&O.modifier(B,w,Q),O=L},_killPropTweensOf=function D(B){for(var w=this._pt,Q,F;w;)F=w._next,w.p===B&&!w.op||w.op===B?_removeLinkedListItem(this,w,"_pt"):w.dep||(Q=1),w=F;return!Q},_setterWithModifier=function D(B,w,Q,F){F.mSet(B,w,F.m.call(F.tween,Q,F.mt),F)},_sortPropTweensByPriority=function D(B){for(var w=B._pt,Q,F,O,L;w;){for(Q=w._next,F=O;F&&F.pr>w.pr;)F=F._next;(w._prev=F?F._prev:L)?w._prev._next=w:O=w,(w._next=F)?F._prev=w:L=w,w=Q}B._pt=O},PropTween=function(){function D(w,Q,F,O,L,G,U,q,Y){this.t=Q,this.s=O,this.c=L,this.p=F,this.r=G||_renderPlain,this.d=U||this,this.set=q||_setterPlain,this.pr=Y||0,this._next=w,w&&(w._prev=this)}var B=D.prototype;return B.modifier=function(Q,F,O){this.mSet=this.mSet||this.set,this.set=_setterWithModifier,this.m=Q,this.mt=O,this.tween=F},D}();_forEachName(_callbackNames+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(D){return _reservedProps[D]=1});_globals.TweenMax=_globals.TweenLite=Tween;_globals.TimelineLite=_globals.TimelineMax=Timeline;_globalTimeline=new Timeline({sortChildren:!1,defaults:_defaults,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_config.stringFilter=_colorStringFilter;var _media=[],_listeners={},_emptyArray=[],_lastMediaTime=0,_dispatch=function D(B){return(_listeners[B]||_emptyArray).map(function(w){return w()})},_onMediaChange=function D(){var B=Date.now(),w=[];B-_lastMediaTime>2&&(_dispatch("matchMediaInit"),_media.forEach(function(Q){var F=Q.queries,O=Q.conditions,L,G,U,q;for(G in F)L=_win$1.matchMedia(F[G]).matches,L&&(U=1),L!==O[G]&&(O[G]=L,q=1);q&&(Q.revert(),U&&w.push(Q))}),_dispatch("matchMediaRevert"),w.forEach(function(Q){return Q.onMatch(Q)}),_lastMediaTime=B,_dispatch("matchMedia"))},Context=function(){function D(w,Q){this.selector=Q&&selector(Q),this.data=[],this._r=[],this.isReverted=!1,w&&this.add(w)}var B=D.prototype;return B.add=function(Q,F,O){_isFunction(Q)&&(O=F,F=Q,Q=_isFunction);var L=this,G=function(){var q=_context,Y=L.selector,W;return q&&q!==L&&q.data.push(L),O&&(L.selector=selector(O)),_context=L,W=F.apply(L,arguments),_isFunction(W)&&L._r.push(W),_context=q,L.selector=Y,L.isReverted=!1,W};return L.last=G,Q===_isFunction?G(L):Q?L[Q]=G:G},B.ignore=function(Q){var F=_context;_context=null,Q(this),_context=F},B.getTweens=function(){var Q=[];return this.data.forEach(function(F){return F instanceof D?Q.push.apply(Q,F.getTweens()):F instanceof Tween&&!(F.parent&&F.parent.data==="nested")&&Q.push(F)}),Q},B.clear=function(){this._r.length=this.data.length=0},B.kill=function(Q,F){var O=this;if(Q){var L=this.getTweens();this.data.forEach(function(U){U.data==="isFlip"&&(U.revert(),U.getChildren(!0,!0,!1).forEach(function(q){return L.splice(L.indexOf(q),1)}))}),L.map(function(U){return{g:U.globalTime(0),t:U}}).sort(function(U,q){return q.g-U.g||-1}).forEach(function(U){return U.t.revert(Q)}),this.data.forEach(function(U){return!(U instanceof Animation)&&U.revert&&U.revert(Q)}),this._r.forEach(function(U){return U(Q,O)}),this.isReverted=!0}else this.data.forEach(function(U){return U.kill&&U.kill()});if(this.clear(),F){var G=_media.indexOf(this);~G&&_media.splice(G,1)}},B.revert=function(Q){this.kill(Q||{})},D}(),MatchMedia=function(){function D(w){this.contexts=[],this.scope=w}var B=D.prototype;return B.add=function(Q,F,O){_isObject(Q)||(Q={matches:Q});var L=new Context(0,O||this.scope),G=L.conditions={},U,q,Y;this.contexts.push(L),F=L.add("onMatch",F),L.queries=Q;for(q in Q)q==="all"?Y=1:(U=_win$1.matchMedia(Q[q]),U&&(_media.indexOf(L)<0&&_media.push(L),(G[q]=U.matches)&&(Y=1),U.addListener?U.addListener(_onMediaChange):U.addEventListener("change",_onMediaChange)));return Y&&F(L),this},B.revert=function(Q){this.kill(Q||{})},B.kill=function(Q){this.contexts.forEach(function(F){return F.kill(Q,!0)})},D}(),_gsap={registerPlugin:function D(){for(var B=arguments.length,w=new Array(B),Q=0;Q<B;Q++)w[Q]=arguments[Q];w.forEach(function(F){return _createPlugin(F)})},timeline:function D(B){return new Timeline(B)},getTweensOf:function D(B,w){return _globalTimeline.getTweensOf(B,w)},getProperty:function D(B,w,Q,F){_isString(B)&&(B=toArray(B)[0]);var O=_getCache(B||{}).get,L=Q?_passThrough:_numericIfPossible;return Q==="native"&&(Q=""),B&&(w?L((_plugins[w]&&_plugins[w].get||O)(B,w,Q,F)):function(G,U,q){return L((_plugins[G]&&_plugins[G].get||O)(B,G,U,q))})},quickSetter:function D(B,w,Q){if(B=toArray(B),B.length>1){var F=B.map(function(Y){return gsap$1.quickSetter(Y,w,Q)}),O=F.length;return function(Y){for(var W=O;W--;)F[W](Y)}}B=B[0]||{};var L=_plugins[w],G=_getCache(B),U=G.harness&&(G.harness.aliases||{})[w]||w,q=L?function(Y){var W=new L;_quickTween._pt=0,W.init(B,Q?Y+Q:Y,_quickTween,0,[B]),W.render(1,W),_quickTween._pt&&_renderPropTweens(1,_quickTween)}:G.set(B,U);return L?q:function(Y){return q(B,U,Q?Y+Q:Y,G,1)}},quickTo:function D(B,w,Q){var F,O=gsap$1.to(B,_merge((F={},F[w]="+=0.1",F.paused=!0,F),Q||{})),L=function(U,q,Y){return O.resetTo(w,U,q,Y)};return L.tween=O,L},isTweening:function D(B){return _globalTimeline.getTweensOf(B,!0).length>0},defaults:function D(B){return B&&B.ease&&(B.ease=_parseEase(B.ease,_defaults.ease)),_mergeDeep(_defaults,B||{})},config:function D(B){return _mergeDeep(_config,B||{})},registerEffect:function D(B){var w=B.name,Q=B.effect,F=B.plugins,O=B.defaults,L=B.extendTimeline;(F||"").split(",").forEach(function(G){return G&&!_plugins[G]&&!_globals[G]&&_warn(w+" effect requires "+G+" plugin.")}),_effects[w]=function(G,U,q){return Q(toArray(G),_setDefaults(U||{},O),q)},L&&(Timeline.prototype[w]=function(G,U,q){return this.add(_effects[w](G,_isObject(U)?U:(q=U)&&{},this),q)})},registerEase:function D(B,w){_easeMap[B]=_parseEase(w)},parseEase:function D(B,w){return arguments.length?_parseEase(B,w):_easeMap},getById:function D(B){return _globalTimeline.getById(B)},exportRoot:function D(B,w){B===void 0&&(B={});var Q=new Timeline(B),F,O;for(Q.smoothChildTiming=_isNotFalse(B.smoothChildTiming),_globalTimeline.remove(Q),Q._dp=0,Q._time=Q._tTime=_globalTimeline._time,F=_globalTimeline._first;F;)O=F._next,(w||!(!F._dur&&F instanceof Tween&&F.vars.onComplete===F._targets[0]))&&_addToTimeline(Q,F,F._start-F._delay),F=O;return _addToTimeline(_globalTimeline,Q,0),Q},context:function D(B,w){return B?new Context(B,w):_context},matchMedia:function D(B){return new MatchMedia(B)},matchMediaRefresh:function D(){return _media.forEach(function(B){var w=B.conditions,Q,F;for(F in w)w[F]&&(w[F]=!1,Q=1);Q&&B.revert()})||_onMediaChange()},addEventListener:function D(B,w){var Q=_listeners[B]||(_listeners[B]=[]);~Q.indexOf(w)||Q.push(w)},removeEventListener:function D(B,w){var Q=_listeners[B],F=Q&&Q.indexOf(w);F>=0&&Q.splice(F,1)},utils:{wrap,wrapYoyo,distribute,random,snap,normalize,getUnit,clamp,splitColor,toArray,selector,mapRange,pipe,unitize,interpolate,shuffle},install:_install,effects:_effects,ticker:_ticker,updateRoot:Timeline.updateRoot,plugins:_plugins,globalTimeline:_globalTimeline,core:{PropTween,globals:_addGlobal,Tween,Timeline,Animation,getCache:_getCache,_removeLinkedListItem,reverting:function D(){return _reverting$1},context:function D(B){return B&&_context&&(_context.data.push(B),B._ctx=_context),_context},suppressOverwrites:function D(B){return _suppressOverwrites=B}}};_forEachName("to,from,fromTo,delayedCall,set,killTweensOf",function(D){return _gsap[D]=Tween[D]});_ticker.add(Timeline.updateRoot);_quickTween=_gsap.to({},{duration:0});var _getPluginPropTween=function D(B,w){for(var Q=B._pt;Q&&Q.p!==w&&Q.op!==w&&Q.fp!==w;)Q=Q._next;return Q},_addModifiers=function D(B,w){var Q=B._targets,F,O,L;for(F in w)for(O=Q.length;O--;)L=B._ptLookup[O][F],L&&(L=L.d)&&(L._pt&&(L=_getPluginPropTween(L,F)),L&&L.modifier&&L.modifier(w[F],B,Q[O],F))},_buildModifierPlugin=function D(B,w){return{name:B,rawVars:1,init:function(F,O,L){L._onInit=function(G){var U,q;if(_isString(O)&&(U={},_forEachName(O,function(Y){return U[Y]=1}),O=U),w){U={};for(q in O)U[q]=w(O[q]);O=U}_addModifiers(G,O)}}}},gsap$1=_gsap.registerPlugin({name:"attr",init:function D(B,w,Q,F,O){var L,G,U;this.tween=Q;for(L in w)U=B.getAttribute(L)||"",G=this.add(B,"setAttribute",(U||0)+"",w[L],F,O,0,0,L),G.op=L,G.b=U,this._props.push(L)},render:function D(B,w){for(var Q=w._pt;Q;)_reverting$1?Q.set(Q.t,Q.p,Q.b,Q):Q.r(B,Q.d),Q=Q._next}},{name:"endArray",init:function D(B,w){for(var Q=w.length;Q--;)this.add(B,Q,B[Q]||0,w[Q],0,0,0,0,0,1)}},_buildModifierPlugin("roundProps",_roundModifier),_buildModifierPlugin("modifiers"),_buildModifierPlugin("snap",snap))||_gsap;Tween.version=Timeline.version=gsap$1.version="3.11.4";_coreReady=1;_windowExists$1()&&_wake();_easeMap.Power0;_easeMap.Power1;_easeMap.Power2;_easeMap.Power3;_easeMap.Power4;_easeMap.Linear;_easeMap.Quad;_easeMap.Cubic;_easeMap.Quart;_easeMap.Quint;_easeMap.Strong;_easeMap.Elastic;_easeMap.Back;_easeMap.SteppedEase;_easeMap.Bounce;_easeMap.Sine;_easeMap.Expo;_easeMap.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _win,_doc,_docElement,_pluginInitted,_tempDiv$1,_recentSetterPlugin,_reverting,_windowExists=function D(){return typeof window!="undefined"},_transformProps={},_RAD2DEG=180/Math.PI,_DEG2RAD=Math.PI/180,_atan2=Math.atan2,_bigNum=1e8,_capsExp=/([A-Z])/g,_horizontalExp=/(left|right|width|margin|padding|x)/i,_complexExp=/[\s,\(]\S/,_propertyAliases={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_renderCSSProp=function D(B,w){return w.set(w.t,w.p,Math.round((w.s+w.c*B)*1e4)/1e4+w.u,w)},_renderPropWithEnd=function D(B,w){return w.set(w.t,w.p,B===1?w.e:Math.round((w.s+w.c*B)*1e4)/1e4+w.u,w)},_renderCSSPropWithBeginning=function D(B,w){return w.set(w.t,w.p,B?Math.round((w.s+w.c*B)*1e4)/1e4+w.u:w.b,w)},_renderRoundedCSSProp=function D(B,w){var Q=w.s+w.c*B;w.set(w.t,w.p,~~(Q+(Q<0?-.5:.5))+w.u,w)},_renderNonTweeningValue=function D(B,w){return w.set(w.t,w.p,B?w.e:w.b,w)},_renderNonTweeningValueOnlyAtEnd=function D(B,w){return w.set(w.t,w.p,B!==1?w.b:w.e,w)},_setterCSSStyle=function D(B,w,Q){return B.style[w]=Q},_setterCSSProp=function D(B,w,Q){return B.style.setProperty(w,Q)},_setterTransform=function D(B,w,Q){return B._gsap[w]=Q},_setterScale=function D(B,w,Q){return B._gsap.scaleX=B._gsap.scaleY=Q},_setterScaleWithRender=function D(B,w,Q,F,O){var L=B._gsap;L.scaleX=L.scaleY=Q,L.renderTransform(O,L)},_setterTransformWithRender=function D(B,w,Q,F,O){var L=B._gsap;L[w]=Q,L.renderTransform(O,L)},_transformProp="transform",_transformOriginProp=_transformProp+"Origin",_saveStyle=function D(B,w){var Q=this,F=this.target,O=F.style;if(B in _transformProps){if(this.tfm=this.tfm||{},B!=="transform"&&(B=_propertyAliases[B]||B,~B.indexOf(",")?B.split(",").forEach(function(L){return Q.tfm[L]=_get(F,L)}):this.tfm[B]=F._gsap.x?F._gsap[B]:_get(F,B)),this.props.indexOf(_transformProp)>=0)return;F._gsap.svg&&(this.svgo=F.getAttribute("data-svg-origin"),this.props.push(_transformOriginProp,w,"")),B=_transformProp}(O||w)&&this.props.push(B,w,O[B])},_removeIndependentTransforms=function D(B){B.translate&&(B.removeProperty("translate"),B.removeProperty("scale"),B.removeProperty("rotate"))},_revertStyle=function D(){var B=this.props,w=this.target,Q=w.style,F=w._gsap,O,L;for(O=0;O<B.length;O+=3)B[O+1]?w[B[O]]=B[O+2]:B[O+2]?Q[B[O]]=B[O+2]:Q.removeProperty(B[O].replace(_capsExp,"-$1").toLowerCase());if(this.tfm){for(L in this.tfm)F[L]=this.tfm[L];F.svg&&(F.renderTransform(),w.setAttribute("data-svg-origin",this.svgo||"")),O=_reverting(),O&&!O.isStart&&!Q[_transformProp]&&(_removeIndependentTransforms(Q),F.uncache=1)}},_getStyleSaver=function D(B,w){var Q={target:B,props:[],revert:_revertStyle,save:_saveStyle};return w&&w.split(",").forEach(function(F){return Q.save(F)}),Q},_supports3D,_createElement=function D(B,w){var Q=_doc.createElementNS?_doc.createElementNS((w||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),B):_doc.createElement(B);return Q.style?Q:_doc.createElement(B)},_getComputedProperty=function D(B,w,Q){var F=getComputedStyle(B);return F[w]||F.getPropertyValue(w.replace(_capsExp,"-$1").toLowerCase())||F.getPropertyValue(w)||!Q&&D(B,_checkPropPrefix(w)||w,1)||""},_prefixes="O,Moz,ms,Ms,Webkit".split(","),_checkPropPrefix=function D(B,w,Q){var F=w||_tempDiv$1,O=F.style,L=5;if(B in O&&!Q)return B;for(B=B.charAt(0).toUpperCase()+B.substr(1);L--&&!(_prefixes[L]+B in O););return L<0?null:(L===3?"ms":L>=0?_prefixes[L]:"")+B},_initCore=function D(){_windowExists()&&window.document&&(_win=window,_doc=_win.document,_docElement=_doc.documentElement,_tempDiv$1=_createElement("div")||{style:{}},_createElement("div"),_transformProp=_checkPropPrefix(_transformProp),_transformOriginProp=_transformProp+"Origin",_tempDiv$1.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_supports3D=!!_checkPropPrefix("perspective"),_reverting=gsap$1.core.reverting,_pluginInitted=1)},_getBBoxHack=function D(B){var w=_createElement("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),Q=this.parentNode,F=this.nextSibling,O=this.style.cssText,L;if(_docElement.appendChild(w),w.appendChild(this),this.style.display="block",B)try{L=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=D}catch{}else this._gsapBBox&&(L=this._gsapBBox());return Q&&(F?Q.insertBefore(this,F):Q.appendChild(this)),_docElement.removeChild(w),this.style.cssText=O,L},_getAttributeFallbacks=function D(B,w){for(var Q=w.length;Q--;)if(B.hasAttribute(w[Q]))return B.getAttribute(w[Q])},_getBBox=function D(B){var w;try{w=B.getBBox()}catch{w=_getBBoxHack.call(B,!0)}return w&&(w.width||w.height)||B.getBBox===_getBBoxHack||(w=_getBBoxHack.call(B,!0)),w&&!w.width&&!w.x&&!w.y?{x:+_getAttributeFallbacks(B,["x","cx","x1"])||0,y:+_getAttributeFallbacks(B,["y","cy","y1"])||0,width:0,height:0}:w},_isSVG=function D(B){return!!(B.getCTM&&(!B.parentNode||B.ownerSVGElement)&&_getBBox(B))},_removeProperty=function D(B,w){if(w){var Q=B.style;w in _transformProps&&w!==_transformOriginProp&&(w=_transformProp),Q.removeProperty?((w.substr(0,2)==="ms"||w.substr(0,6)==="webkit")&&(w="-"+w),Q.removeProperty(w.replace(_capsExp,"-$1").toLowerCase())):Q.removeAttribute(w)}},_addNonTweeningPT=function D(B,w,Q,F,O,L){var G=new PropTween(B._pt,w,Q,0,1,L?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue);return B._pt=G,G.b=F,G.e=O,B._props.push(Q),G},_nonConvertibleUnits={deg:1,rad:1,turn:1},_nonStandardLayouts={grid:1,flex:1},_convertToUnit=function D(B,w,Q,F){var O=parseFloat(Q)||0,L=(Q+"").trim().substr((O+"").length)||"px",G=_tempDiv$1.style,U=_horizontalExp.test(w),q=B.tagName.toLowerCase()==="svg",Y=(q?"client":"offset")+(U?"Width":"Height"),W=100,X=F==="px",te=F==="%",oe,ne,ce,fe;return F===L||!O||_nonConvertibleUnits[F]||_nonConvertibleUnits[L]?O:(L!=="px"&&!X&&(O=D(B,w,Q,"px")),fe=B.getCTM&&_isSVG(B),(te||L==="%")&&(_transformProps[w]||~w.indexOf("adius"))?(oe=fe?B.getBBox()[U?"width":"height"]:B[Y],_round(te?O/oe*W:O/100*oe)):(G[U?"width":"height"]=W+(X?L:F),ne=~w.indexOf("adius")||F==="em"&&B.appendChild&&!q?B:B.parentNode,fe&&(ne=(B.ownerSVGElement||{}).parentNode),(!ne||ne===_doc||!ne.appendChild)&&(ne=_doc.body),ce=ne._gsap,ce&&te&&ce.width&&U&&ce.time===_ticker.time&&!ce.uncache?_round(O/ce.width*W):((te||L==="%")&&!_nonStandardLayouts[_getComputedProperty(ne,"display")]&&(G.position=_getComputedProperty(B,"position")),ne===B&&(G.position="static"),ne.appendChild(_tempDiv$1),oe=_tempDiv$1[Y],ne.removeChild(_tempDiv$1),G.position="absolute",U&&te&&(ce=_getCache(ne),ce.time=_ticker.time,ce.width=ne[Y]),_round(X?oe*O/W:oe&&O?W/oe*O:0))))},_get=function D(B,w,Q,F){var O;return _pluginInitted||_initCore(),w in _propertyAliases&&w!=="transform"&&(w=_propertyAliases[w],~w.indexOf(",")&&(w=w.split(",")[0])),_transformProps[w]&&w!=="transform"?(O=_parseTransform(B,F),O=w!=="transformOrigin"?O[w]:O.svg?O.origin:_firstTwoOnly(_getComputedProperty(B,_transformOriginProp))+" "+O.zOrigin+"px"):(O=B.style[w],(!O||O==="auto"||F||~(O+"").indexOf("calc("))&&(O=_specialProps[w]&&_specialProps[w](B,w,Q)||_getComputedProperty(B,w)||_getProperty(B,w)||(w==="opacity"?1:0))),Q&&!~(O+"").trim().indexOf(" ")?_convertToUnit(B,w,O,Q)+Q:O},_tweenComplexCSSString=function D(B,w,Q,F){if(!Q||Q==="none"){var O=_checkPropPrefix(w,B,1),L=O&&_getComputedProperty(B,O,1);L&&L!==Q?(w=O,Q=L):w==="borderColor"&&(Q=_getComputedProperty(B,"borderTopColor"))}var G=new PropTween(this._pt,B.style,w,0,1,_renderComplexString),U=0,q=0,Y,W,X,te,oe,ne,ce,fe,me,Ie,ye,Be;if(G.b=Q,G.e=F,Q+="",F+="",F==="auto"&&(B.style[w]=F,F=_getComputedProperty(B,w)||F,B.style[w]=Q),Y=[Q,F],_colorStringFilter(Y),Q=Y[0],F=Y[1],X=Q.match(_numWithUnitExp)||[],Be=F.match(_numWithUnitExp)||[],Be.length){for(;W=_numWithUnitExp.exec(F);)ce=W[0],me=F.substring(U,W.index),oe?oe=(oe+1)%5:(me.substr(-5)==="rgba("||me.substr(-5)==="hsla(")&&(oe=1),ce!==(ne=X[q++]||"")&&(te=parseFloat(ne)||0,ye=ne.substr((te+"").length),ce.charAt(1)==="="&&(ce=_parseRelative(te,ce)+ye),fe=parseFloat(ce),Ie=ce.substr((fe+"").length),U=_numWithUnitExp.lastIndex-Ie.length,Ie||(Ie=Ie||_config.units[w]||ye,U===F.length&&(F+=Ie,G.e+=Ie)),ye!==Ie&&(te=_convertToUnit(B,w,ne,Ie)||0),G._pt={_next:G._pt,p:me||q===1?me:",",s:te,c:fe-te,m:oe&&oe<4||w==="zIndex"?Math.round:0});G.c=U<F.length?F.substring(U,F.length):""}else G.r=w==="display"&&F==="none"?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue;return _relExp.test(F)&&(G.e=0),this._pt=G,G},_keywordToPercent={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_convertKeywordsToPercentages=function D(B){var w=B.split(" "),Q=w[0],F=w[1]||"50%";return(Q==="top"||Q==="bottom"||F==="left"||F==="right")&&(B=Q,Q=F,F=B),w[0]=_keywordToPercent[Q]||Q,w[1]=_keywordToPercent[F]||F,w.join(" ")},_renderClearProps=function D(B,w){if(w.tween&&w.tween._time===w.tween._dur){var Q=w.t,F=Q.style,O=w.u,L=Q._gsap,G,U,q;if(O==="all"||O===!0)F.cssText="",U=1;else for(O=O.split(","),q=O.length;--q>-1;)G=O[q],_transformProps[G]&&(U=1,G=G==="transformOrigin"?_transformOriginProp:_transformProp),_removeProperty(Q,G);U&&(_removeProperty(Q,_transformProp),L&&(L.svg&&Q.removeAttribute("transform"),_parseTransform(Q,1),L.uncache=1,_removeIndependentTransforms(F)))}},_specialProps={clearProps:function D(B,w,Q,F,O){if(O.data!=="isFromStart"){var L=B._pt=new PropTween(B._pt,w,Q,0,0,_renderClearProps);return L.u=F,L.pr=-10,L.tween=O,B._props.push(Q),1}}},_identity2DMatrix=[1,0,0,1,0,0],_rotationalProperties={},_isNullTransform=function D(B){return B==="matrix(1, 0, 0, 1, 0, 0)"||B==="none"||!B},_getComputedTransformMatrixAsArray=function D(B){var w=_getComputedProperty(B,_transformProp);return _isNullTransform(w)?_identity2DMatrix:w.substr(7).match(_numExp).map(_round)},_getMatrix=function D(B,w){var Q=B._gsap||_getCache(B),F=B.style,O=_getComputedTransformMatrixAsArray(B),L,G,U,q;return Q.svg&&B.getAttribute("transform")?(U=B.transform.baseVal.consolidate().matrix,O=[U.a,U.b,U.c,U.d,U.e,U.f],O.join(",")==="1,0,0,1,0,0"?_identity2DMatrix:O):(O===_identity2DMatrix&&!B.offsetParent&&B!==_docElement&&!Q.svg&&(U=F.display,F.display="block",L=B.parentNode,(!L||!B.offsetParent)&&(q=1,G=B.nextElementSibling,_docElement.appendChild(B)),O=_getComputedTransformMatrixAsArray(B),U?F.display=U:_removeProperty(B,"display"),q&&(G?L.insertBefore(B,G):L?L.appendChild(B):_docElement.removeChild(B))),w&&O.length>6?[O[0],O[1],O[4],O[5],O[12],O[13]]:O)},_applySVGOrigin=function D(B,w,Q,F,O,L){var G=B._gsap,U=O||_getMatrix(B,!0),q=G.xOrigin||0,Y=G.yOrigin||0,W=G.xOffset||0,X=G.yOffset||0,te=U[0],oe=U[1],ne=U[2],ce=U[3],fe=U[4],me=U[5],Ie=w.split(" "),ye=parseFloat(Ie[0])||0,Be=parseFloat(Ie[1])||0,Ce,we,De,be;Q?U!==_identity2DMatrix&&(we=te*ce-oe*ne)&&(De=ye*(ce/we)+Be*(-ne/we)+(ne*me-ce*fe)/we,be=ye*(-oe/we)+Be*(te/we)-(te*me-oe*fe)/we,ye=De,Be=be):(Ce=_getBBox(B),ye=Ce.x+(~Ie[0].indexOf("%")?ye/100*Ce.width:ye),Be=Ce.y+(~(Ie[1]||Ie[0]).indexOf("%")?Be/100*Ce.height:Be)),F||F!==!1&&G.smooth?(fe=ye-q,me=Be-Y,G.xOffset=W+(fe*te+me*ne)-fe,G.yOffset=X+(fe*oe+me*ce)-me):G.xOffset=G.yOffset=0,G.xOrigin=ye,G.yOrigin=Be,G.smooth=!!F,G.origin=w,G.originIsAbsolute=!!Q,B.style[_transformOriginProp]="0px 0px",L&&(_addNonTweeningPT(L,G,"xOrigin",q,ye),_addNonTweeningPT(L,G,"yOrigin",Y,Be),_addNonTweeningPT(L,G,"xOffset",W,G.xOffset),_addNonTweeningPT(L,G,"yOffset",X,G.yOffset)),B.setAttribute("data-svg-origin",ye+" "+Be)},_parseTransform=function D(B,w){var Q=B._gsap||new GSCache(B);if("x"in Q&&!w&&!Q.uncache)return Q;var F=B.style,O=Q.scaleX<0,L="px",G="deg",U=getComputedStyle(B),q=_getComputedProperty(B,_transformOriginProp)||"0",Y,W,X,te,oe,ne,ce,fe,me,Ie,ye,Be,Ce,we,De,be,Se,Ne,Le,Pe,Ge,_e,ve,Qe,xe,Me,Fe,Ue,He,Ke,le,Xe;return Y=W=X=ne=ce=fe=me=Ie=ye=0,te=oe=1,Q.svg=!!(B.getCTM&&_isSVG(B)),U.translate&&((U.translate!=="none"||U.scale!=="none"||U.rotate!=="none")&&(F[_transformProp]=(U.translate!=="none"?"translate3d("+(U.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(U.rotate!=="none"?"rotate("+U.rotate+") ":"")+(U.scale!=="none"?"scale("+U.scale.split(" ").join(",")+") ":"")+(U[_transformProp]!=="none"?U[_transformProp]:"")),F.scale=F.rotate=F.translate="none"),we=_getMatrix(B,Q.svg),Q.svg&&(Q.uncache?(xe=B.getBBox(),q=Q.xOrigin-xe.x+"px "+(Q.yOrigin-xe.y)+"px",Qe=""):Qe=!w&&B.getAttribute("data-svg-origin"),_applySVGOrigin(B,Qe||q,!!Qe||Q.originIsAbsolute,Q.smooth!==!1,we)),Be=Q.xOrigin||0,Ce=Q.yOrigin||0,we!==_identity2DMatrix&&(Ne=we[0],Le=we[1],Pe=we[2],Ge=we[3],Y=_e=we[4],W=ve=we[5],we.length===6?(te=Math.sqrt(Ne*Ne+Le*Le),oe=Math.sqrt(Ge*Ge+Pe*Pe),ne=Ne||Le?_atan2(Le,Ne)*_RAD2DEG:0,me=Pe||Ge?_atan2(Pe,Ge)*_RAD2DEG+ne:0,me&&(oe*=Math.abs(Math.cos(me*_DEG2RAD))),Q.svg&&(Y-=Be-(Be*Ne+Ce*Pe),W-=Ce-(Be*Le+Ce*Ge))):(Xe=we[6],Ke=we[7],Fe=we[8],Ue=we[9],He=we[10],le=we[11],Y=we[12],W=we[13],X=we[14],De=_atan2(Xe,He),ce=De*_RAD2DEG,De&&(be=Math.cos(-De),Se=Math.sin(-De),Qe=_e*be+Fe*Se,xe=ve*be+Ue*Se,Me=Xe*be+He*Se,Fe=_e*-Se+Fe*be,Ue=ve*-Se+Ue*be,He=Xe*-Se+He*be,le=Ke*-Se+le*be,_e=Qe,ve=xe,Xe=Me),De=_atan2(-Pe,He),fe=De*_RAD2DEG,De&&(be=Math.cos(-De),Se=Math.sin(-De),Qe=Ne*be-Fe*Se,xe=Le*be-Ue*Se,Me=Pe*be-He*Se,le=Ge*Se+le*be,Ne=Qe,Le=xe,Pe=Me),De=_atan2(Le,Ne),ne=De*_RAD2DEG,De&&(be=Math.cos(De),Se=Math.sin(De),Qe=Ne*be+Le*Se,xe=_e*be+ve*Se,Le=Le*be-Ne*Se,ve=ve*be-_e*Se,Ne=Qe,_e=xe),ce&&Math.abs(ce)+Math.abs(ne)>359.9&&(ce=ne=0,fe=180-fe),te=_round(Math.sqrt(Ne*Ne+Le*Le+Pe*Pe)),oe=_round(Math.sqrt(ve*ve+Xe*Xe)),De=_atan2(_e,ve),me=Math.abs(De)>2e-4?De*_RAD2DEG:0,ye=le?1/(le<0?-le:le):0),Q.svg&&(Qe=B.getAttribute("transform"),Q.forceCSS=B.setAttribute("transform","")||!_isNullTransform(_getComputedProperty(B,_transformProp)),Qe&&B.setAttribute("transform",Qe))),Math.abs(me)>90&&Math.abs(me)<270&&(O?(te*=-1,me+=ne<=0?180:-180,ne+=ne<=0?180:-180):(oe*=-1,me+=me<=0?180:-180)),w=w||Q.uncache,Q.x=Y-((Q.xPercent=Y&&(!w&&Q.xPercent||(Math.round(B.offsetWidth/2)===Math.round(-Y)?-50:0)))?B.offsetWidth*Q.xPercent/100:0)+L,Q.y=W-((Q.yPercent=W&&(!w&&Q.yPercent||(Math.round(B.offsetHeight/2)===Math.round(-W)?-50:0)))?B.offsetHeight*Q.yPercent/100:0)+L,Q.z=X+L,Q.scaleX=_round(te),Q.scaleY=_round(oe),Q.rotation=_round(ne)+G,Q.rotationX=_round(ce)+G,Q.rotationY=_round(fe)+G,Q.skewX=me+G,Q.skewY=Ie+G,Q.transformPerspective=ye+L,(Q.zOrigin=parseFloat(q.split(" ")[2])||0)&&(F[_transformOriginProp]=_firstTwoOnly(q)),Q.xOffset=Q.yOffset=0,Q.force3D=_config.force3D,Q.renderTransform=Q.svg?_renderSVGTransforms:_supports3D?_renderCSSTransforms:_renderNon3DTransforms,Q.uncache=0,Q},_firstTwoOnly=function D(B){return(B=B.split(" "))[0]+" "+B[1]},_addPxTranslate=function D(B,w,Q){var F=getUnit(w);return _round(parseFloat(w)+parseFloat(_convertToUnit(B,"x",Q+"px",F)))+F},_renderNon3DTransforms=function D(B,w){w.z="0px",w.rotationY=w.rotationX="0deg",w.force3D=0,_renderCSSTransforms(B,w)},_zeroDeg="0deg",_zeroPx="0px",_endParenthesis=") ",_renderCSSTransforms=function D(B,w){var Q=w||this,F=Q.xPercent,O=Q.yPercent,L=Q.x,G=Q.y,U=Q.z,q=Q.rotation,Y=Q.rotationY,W=Q.rotationX,X=Q.skewX,te=Q.skewY,oe=Q.scaleX,ne=Q.scaleY,ce=Q.transformPerspective,fe=Q.force3D,me=Q.target,Ie=Q.zOrigin,ye="",Be=fe==="auto"&&B&&B!==1||fe===!0;if(Ie&&(W!==_zeroDeg||Y!==_zeroDeg)){var Ce=parseFloat(Y)*_DEG2RAD,we=Math.sin(Ce),De=Math.cos(Ce),be;Ce=parseFloat(W)*_DEG2RAD,be=Math.cos(Ce),L=_addPxTranslate(me,L,we*be*-Ie),G=_addPxTranslate(me,G,-Math.sin(Ce)*-Ie),U=_addPxTranslate(me,U,De*be*-Ie+Ie)}ce!==_zeroPx&&(ye+="perspective("+ce+_endParenthesis),(F||O)&&(ye+="translate("+F+"%, "+O+"%) "),(Be||L!==_zeroPx||G!==_zeroPx||U!==_zeroPx)&&(ye+=U!==_zeroPx||Be?"translate3d("+L+", "+G+", "+U+") ":"translate("+L+", "+G+_endParenthesis),q!==_zeroDeg&&(ye+="rotate("+q+_endParenthesis),Y!==_zeroDeg&&(ye+="rotateY("+Y+_endParenthesis),W!==_zeroDeg&&(ye+="rotateX("+W+_endParenthesis),(X!==_zeroDeg||te!==_zeroDeg)&&(ye+="skew("+X+", "+te+_endParenthesis),(oe!==1||ne!==1)&&(ye+="scale("+oe+", "+ne+_endParenthesis),me.style[_transformProp]=ye||"translate(0, 0)"},_renderSVGTransforms=function D(B,w){var Q=w||this,F=Q.xPercent,O=Q.yPercent,L=Q.x,G=Q.y,U=Q.rotation,q=Q.skewX,Y=Q.skewY,W=Q.scaleX,X=Q.scaleY,te=Q.target,oe=Q.xOrigin,ne=Q.yOrigin,ce=Q.xOffset,fe=Q.yOffset,me=Q.forceCSS,Ie=parseFloat(L),ye=parseFloat(G),Be,Ce,we,De,be;U=parseFloat(U),q=parseFloat(q),Y=parseFloat(Y),Y&&(Y=parseFloat(Y),q+=Y,U+=Y),U||q?(U*=_DEG2RAD,q*=_DEG2RAD,Be=Math.cos(U)*W,Ce=Math.sin(U)*W,we=Math.sin(U-q)*-X,De=Math.cos(U-q)*X,q&&(Y*=_DEG2RAD,be=Math.tan(q-Y),be=Math.sqrt(1+be*be),we*=be,De*=be,Y&&(be=Math.tan(Y),be=Math.sqrt(1+be*be),Be*=be,Ce*=be)),Be=_round(Be),Ce=_round(Ce),we=_round(we),De=_round(De)):(Be=W,De=X,Ce=we=0),(Ie&&!~(L+"").indexOf("px")||ye&&!~(G+"").indexOf("px"))&&(Ie=_convertToUnit(te,"x",L,"px"),ye=_convertToUnit(te,"y",G,"px")),(oe||ne||ce||fe)&&(Ie=_round(Ie+oe-(oe*Be+ne*we)+ce),ye=_round(ye+ne-(oe*Ce+ne*De)+fe)),(F||O)&&(be=te.getBBox(),Ie=_round(Ie+F/100*be.width),ye=_round(ye+O/100*be.height)),be="matrix("+Be+","+Ce+","+we+","+De+","+Ie+","+ye+")",te.setAttribute("transform",be),me&&(te.style[_transformProp]=be)},_addRotationalPropTween=function D(B,w,Q,F,O){var L=360,G=_isString(O),U=parseFloat(O)*(G&&~O.indexOf("rad")?_RAD2DEG:1),q=U-F,Y=F+q+"deg",W,X;return G&&(W=O.split("_")[1],W==="short"&&(q%=L,q!==q%(L/2)&&(q+=q<0?L:-L)),W==="cw"&&q<0?q=(q+L*_bigNum)%L-~~(q/L)*L:W==="ccw"&&q>0&&(q=(q-L*_bigNum)%L-~~(q/L)*L)),B._pt=X=new PropTween(B._pt,w,Q,F,q,_renderPropWithEnd),X.e=Y,X.u="deg",B._props.push(Q),X},_assign=function D(B,w){for(var Q in w)B[Q]=w[Q];return B},_addRawTransformPTs=function D(B,w,Q){var F=_assign({},Q._gsap),O="perspective,force3D,transformOrigin,svgOrigin",L=Q.style,G,U,q,Y,W,X,te,oe;F.svg?(q=Q.getAttribute("transform"),Q.setAttribute("transform",""),L[_transformProp]=w,G=_parseTransform(Q,1),_removeProperty(Q,_transformProp),Q.setAttribute("transform",q)):(q=getComputedStyle(Q)[_transformProp],L[_transformProp]=w,G=_parseTransform(Q,1),L[_transformProp]=q);for(U in _transformProps)q=F[U],Y=G[U],q!==Y&&O.indexOf(U)<0&&(te=getUnit(q),oe=getUnit(Y),W=te!==oe?_convertToUnit(Q,U,q,oe):parseFloat(q),X=parseFloat(Y),B._pt=new PropTween(B._pt,G,U,W,X-W,_renderCSSProp),B._pt.u=oe||0,B._props.push(U));_assign(G,F)};_forEachName("padding,margin,Width,Radius",function(D,B){var w="Top",Q="Right",F="Bottom",O="Left",L=(B<3?[w,Q,F,O]:[w+O,w+Q,F+Q,F+O]).map(function(G){return B<2?D+G:"border"+G+D});_specialProps[B>1?"border"+D:D]=function(G,U,q,Y,W){var X,te;if(arguments.length<4)return X=L.map(function(oe){return _get(G,oe,q)}),te=X.join(" "),te.split(X[0]).length===5?X[0]:te;X=(Y+"").split(" "),te={},L.forEach(function(oe,ne){return te[oe]=X[ne]=X[ne]||X[(ne-1)/2|0]}),G.init(U,te,W)}});var CSSPlugin={name:"css",register:_initCore,targetTest:function D(B){return B.style&&B.nodeType},init:function D(B,w,Q,F,O){var L=this._props,G=B.style,U=Q.vars.startAt,q,Y,W,X,te,oe,ne,ce,fe,me,Ie,ye,Be,Ce,we,De;_pluginInitted||_initCore(),this.styles=this.styles||_getStyleSaver(B),De=this.styles.props,this.tween=Q;for(ne in w)if(ne!=="autoRound"&&(Y=w[ne],!(_plugins[ne]&&_checkPlugin(ne,w,Q,F,B,O)))){if(te=typeof Y,oe=_specialProps[ne],te==="function"&&(Y=Y.call(Q,F,B,O),te=typeof Y),te==="string"&&~Y.indexOf("random(")&&(Y=_replaceRandom(Y)),oe)oe(this,B,ne,Y,Q)&&(we=1);else if(ne.substr(0,2)==="--")q=(getComputedStyle(B).getPropertyValue(ne)+"").trim(),Y+="",_colorExp.lastIndex=0,_colorExp.test(q)||(ce=getUnit(q),fe=getUnit(Y)),fe?ce!==fe&&(q=_convertToUnit(B,ne,q,fe)+fe):ce&&(Y+=ce),this.add(G,"setProperty",q,Y,F,O,0,0,ne),L.push(ne),De.push(ne,0,G[ne]);else if(te!=="undefined"){if(U&&ne in U?(q=typeof U[ne]=="function"?U[ne].call(Q,F,B,O):U[ne],_isString(q)&&~q.indexOf("random(")&&(q=_replaceRandom(q)),getUnit(q+"")||(q+=_config.units[ne]||getUnit(_get(B,ne))||""),(q+"").charAt(1)==="="&&(q=_get(B,ne))):q=_get(B,ne),X=parseFloat(q),me=te==="string"&&Y.charAt(1)==="="&&Y.substr(0,2),me&&(Y=Y.substr(2)),W=parseFloat(Y),ne in _propertyAliases&&(ne==="autoAlpha"&&(X===1&&_get(B,"visibility")==="hidden"&&W&&(X=0),De.push("visibility",0,G.visibility),_addNonTweeningPT(this,G,"visibility",X?"inherit":"hidden",W?"inherit":"hidden",!W)),ne!=="scale"&&ne!=="transform"&&(ne=_propertyAliases[ne],~ne.indexOf(",")&&(ne=ne.split(",")[0]))),Ie=ne in _transformProps,Ie){if(this.styles.save(ne),ye||(Be=B._gsap,Be.renderTransform&&!w.parseTransform||_parseTransform(B,w.parseTransform),Ce=w.smoothOrigin!==!1&&Be.smooth,ye=this._pt=new PropTween(this._pt,G,_transformProp,0,1,Be.renderTransform,Be,0,-1),ye.dep=1),ne==="scale")this._pt=new PropTween(this._pt,Be,"scaleY",Be.scaleY,(me?_parseRelative(Be.scaleY,me+W):W)-Be.scaleY||0,_renderCSSProp),this._pt.u=0,L.push("scaleY",ne),ne+="X";else if(ne==="transformOrigin"){De.push(_transformOriginProp,0,G[_transformOriginProp]),Y=_convertKeywordsToPercentages(Y),Be.svg?_applySVGOrigin(B,Y,0,Ce,0,this):(fe=parseFloat(Y.split(" ")[2])||0,fe!==Be.zOrigin&&_addNonTweeningPT(this,Be,"zOrigin",Be.zOrigin,fe),_addNonTweeningPT(this,G,ne,_firstTwoOnly(q),_firstTwoOnly(Y)));continue}else if(ne==="svgOrigin"){_applySVGOrigin(B,Y,1,Ce,0,this);continue}else if(ne in _rotationalProperties){_addRotationalPropTween(this,Be,ne,X,me?_parseRelative(X,me+Y):Y);continue}else if(ne==="smoothOrigin"){_addNonTweeningPT(this,Be,"smooth",Be.smooth,Y);continue}else if(ne==="force3D"){Be[ne]=Y;continue}else if(ne==="transform"){_addRawTransformPTs(this,Y,B);continue}}else ne in G||(ne=_checkPropPrefix(ne)||ne);if(Ie||(W||W===0)&&(X||X===0)&&!_complexExp.test(Y)&&ne in G)ce=(q+"").substr((X+"").length),W||(W=0),fe=getUnit(Y)||(ne in _config.units?_config.units[ne]:ce),ce!==fe&&(X=_convertToUnit(B,ne,q,fe)),this._pt=new PropTween(this._pt,Ie?Be:G,ne,X,(me?_parseRelative(X,me+W):W)-X,!Ie&&(fe==="px"||ne==="zIndex")&&w.autoRound!==!1?_renderRoundedCSSProp:_renderCSSProp),this._pt.u=fe||0,ce!==fe&&fe!=="%"&&(this._pt.b=q,this._pt.r=_renderCSSPropWithBeginning);else if(ne in G)_tweenComplexCSSString.call(this,B,ne,q,me?me+Y:Y);else if(ne in B)this.add(B,ne,q||B[ne],me?me+Y:Y,F,O);else if(ne!=="parseTransform"){_missingPlugin(ne,Y);continue}Ie||(ne in G?De.push(ne,0,G[ne]):De.push(ne,1,q||B[ne])),L.push(ne)}}we&&_sortPropTweensByPriority(this)},render:function D(B,w){if(w.tween._time||!_reverting())for(var Q=w._pt;Q;)Q.r(B,Q.d),Q=Q._next;else w.styles.revert()},get:_get,aliases:_propertyAliases,getSetter:function D(B,w,Q){var F=_propertyAliases[w];return F&&F.indexOf(",")<0&&(w=F),w in _transformProps&&w!==_transformOriginProp&&(B._gsap.x||_get(B,"x"))?Q&&_recentSetterPlugin===Q?w==="scale"?_setterScale:_setterTransform:(_recentSetterPlugin=Q||{})&&(w==="scale"?_setterScaleWithRender:_setterTransformWithRender):B.style&&!_isUndefined(B.style[w])?_setterCSSStyle:~w.indexOf("-")?_setterCSSProp:_getSetter(B,w)},core:{_removeProperty,_getMatrix}};gsap$1.utils.checkPrefix=_checkPropPrefix;gsap$1.core.getStyleSaver=_getStyleSaver;(function(D,B,w,Q){var F=_forEachName(D+","+B+","+w,function(O){_transformProps[O]=1});_forEachName(B,function(O){_config.units[O]="deg",_rotationalProperties[O]=1}),_propertyAliases[F[13]]=D+","+B,_forEachName(Q,function(O){var L=O.split(":");_propertyAliases[L[1]]=F[L[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(D){_config.units[D]="px"});gsap$1.registerPlugin(CSSPlugin);var gsapWithCSS=gsap$1.registerPlugin(CSSPlugin)||gsap$1;gsapWithCSS.core.Tween;class SeekDialogue{constructor(B,w){this.tone=B,this.lines=w,this.timeline=window.timeline,this.contentBox=document.getElementById("seekResp"),this.typingInProgress=!1}start(B,w){this.element=document.createElement("p"),this.element.classList.add(w),this.contentBox.appendChild(this.element),!this.typingInProgress&&this.typeLine(this.lines[B])}typeLine(B){this.string=B.text,this.words=this.stringToWordsArray(this.string),this.speed=this.getTypingSpeed(this.tone),this.i=0,this.j=0,this.typingInProgress=!0,this.type().then(()=>{this.i===this.words.length&&(B.choices?B.choices.forEach((w,Q)=>{}):console.log("End of conversation."),this.typingInProgress=!1)})}stringToWordsArray(B){return B.split(" ")}async type(){var w,Q,F,O,L;if(this.i<this.words.length)if(this.j<this.words[this.i].length){let G=this.words[this.i][this.j];if(this.words[this.i][0]==="*")G=this.words[this.i][this.j],G!=="*"&&(this.element.innerHTML+=`<span class="${this.specialText1}">${G}</span>`);else if(this.words[this.i][0]==="^")G=this.words[this.i][this.j],G!=="^"&&(this.element.innerHTML+=`<span class="${this.specialText2}">${G}</span>`);else if(G==="$")await this.delay(500).catch(U=>{console.log(U)}).catch(U=>{console.log(U)});else if(G==="]")this.element.innerHTML="",this.j+=3;else if(G.startsWith("%")){let U=this.words[this.i].substring(this.j+1,this.j+2);this.element.innerHTML+=`<span class="blink">${U}</span>`,this.j++}else this.element.innerHTML+=G;this.j++,await this.delay(this.speed).catch(U=>{console.log(U)}).catch(U=>{console.log(U)}),this.type()}else{if(this.i++,this.j=0,this.element.innerHTML+=" ",this.element.classList.contains("sysResp")&&this.i===this.words.length&&((window.conversationHistory[0]==="seekOpt3"||window.conversationHistory[0]==="seekOpt5"&&window.form1Active===!1)&&((w=document.getElementById("subGeneral"))==null||w.remove(),this.newElement=document.createElement("p"),this.newElement.innerHTML=`
                  <form id="subGeneral">
                    <input type="text" name="Category" value="" id="genCat">
                      <span id="genInfo">Info:</span>
                      <input type="text" name="Email" placeholder="name@email.com" id="genInput">
                      <input type="submit" value="| >" id="genSub">
                      <span id="genSubLoad">|</span>
                  </form>
                  `,this.contentBox.appendChild(this.newElement),gsapWithCSS.to("#subGeneral",{duration:1,opacity:1,y:0,ease:"power2.out"}),window.conversationHistory[0]==="seekOpt3"?document.getElementById("genCat").value="Digisette":document.getElementById("genCat").value="General",window.sub()),window.seekType==="contact"&&window.form1Active===!1&&((Q=document.getElementById("subGeneral2"))==null||Q.remove(),this.newElement2=document.createElement("div"),this.newElement2.innerHTML=`
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
                `,this.newElement3.classList.add("visualSubMenuContainer"),this.contentBox.appendChild(this.newElement3),gsapWithCSS.to(".visualSubMenuContainer",{duration:1,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to(".visualSubMenuContainer",{duration:1,scale:1,y:0,ease:"power2.out"}),this.choices=document.querySelectorAll(".visualSubMenu"),this.choices.forEach(G=>{G.addEventListener("click",U=>{this.openGallery(U)})})),window.conversationHistory[0]==="seekOpt6"&&((O=document.querySelector(".infoSubMenuContainer"))==null||O.remove(),this.newElement4=document.createElement("div"),this.newElement4.innerHTML=`
                <div class="infoSubMenu">ABOUT</div>
                <div class="infoSubMenu">CREDITS</div>
                <div class="infoSubMenu">CONTACT</div>
                `,this.newElement4.classList.add("infoSubMenuContainer"),this.contentBox.appendChild(this.newElement4),gsapWithCSS.to(".infoSubMenuContainer",{duration:1,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to(".infoSubMenuContainer",{duration:1,scale:1,y:0,ease:"power2.out"}),this.choices2=document.querySelectorAll(".infoSubMenu"),this.choices2.forEach(G=>{G.addEventListener("click",U=>{this.infoTopics(U)})})),window.conversationHistory[0]==="seekOpt2"&&((L=document.querySelector(".musicContainer"))==null||L.remove(),this.newElement5=document.createElement("div"),this.newElement5.innerHTML=`
                <scoge-music></scoge-music>
                `,this.newElement5.classList.add("musicContainer"),this.contentBox.appendChild(this.newElement5))),this.i===this.words.length&&(this.element.classList.contains("userResp")&&setTimeout(()=>{window.dialogue.choose(0)},800),window.conversationHistory[0]==="seekOpt3"&&window.digiPre===!1)){if(window.digiPre===!1){window.digiPre=!0;var B=document.createElement("video");B.setAttribute("id","portalVideoExt"),B.setAttribute("src","https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeVideos/Digisette/Digisette-ZoomSpin.mp4"),B.setAttribute("muted","true"),B.setAttribute("playsinline","true"),B.setAttribute("autoplay","false"),document.getElementById("videoGallery").appendChild(B),B.play()}gsapWithCSS.to("#videoGallery",{duration:2,filter:"blur(0px)",ease:"power2.inOut"}),document.getElementById("videoGallery").style.opacity="1",gsapWithCSS.to("#portalVideoExt",{duration:2,opacity:1,y:0,ease:"power2.out"}),B.onended=function(){B.remove(),document.getElementById("videoGallery").style.opacity="0"}}this.type()}}async delay(B){return new Promise(w=>setTimeout(w,B))}getTypingSpeed(B){switch(B){case"hyper/angry":return 25;case"friendly":return 50;case"neutral":return 75;case"calm":return 100;case"sad":return 175;case"mystery":return 185;default:return 60}}openGallery(B){var w;switch(this.selected=(w=B==null?void 0:B.target)==null?void 0:w.innerHTML,this.homeT=document.getElementById("homeTip"),window.galleryActive=!0,window.view="gallery",gsapWithCSS.to("#seekResp",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekOpt",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,backgroundColor:"#ff002d",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,border:"var(--primary)",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,scale:1.3,y:0,ease:"power2.out"}),document.getElementById("seekBody").style.pointerEvents="none",document.getElementById("manBG").style.userSelect="none",document.getElementById("manBG").style.pointerEvents="auto",document.getElementById("seekGallery").style.pointerEvents="auto",setTimeout(()=>{window.isMobile===!0&&(gsapWithCSS.to("#simpleNoti",{duration:1,opacity:1,y:0,ease:"power2.out"}),window.galleryHelp.start(),document.getElementById("simpleNoti").style.animationPlayState="running",setTimeout(()=>{gsapWithCSS.to("#simpleNoti",{duration:1,opacity:0,y:0,ease:"power2.out"}),document.getElementById("simpleNoti").style.animationPlayState="paused"},3e3)),setTimeout(()=>{gsapWithCSS.fromTo("#seekGallery",{scale:1},{duration:.45,scale:1.05,yoyo:!0,repeat:1})},3e3)},1e3),this.selected){case"IMAGES":document.getElementById("dropdown").setAttribute("class","dropdown"),gsapWithCSS.to("#dropdown",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="auto",this.homeT.innerHTML="SEEK",window.viewingPg=!0,window.galleryType="images",gsapWithCSS.to("#seekGallery",{duration:2,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:2,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,filter:"blur(5px)",ease:"power2.inOut"});break;case"VIDEO":document.getElementById("dropdown").setAttribute("class","videodropdown"),gsapWithCSS.to("#dropdown",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="auto",gsapWithCSS.to("#soundToggle",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("soundToggle").style.pointerEvents="auto",this.homeT.innerHTML="SEEK",this.homeT.innerHTML="SEEK",window.viewingPg=!0,window.galleryType="video",document.getElementById("portalVideo").style.display="block",document.getElementById("portalVideo2").style.display="block",gsapWithCSS.to("#videoGallery",{duration:2,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:2,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,filter:"blur(5px)",ease:"power2.inOut"});break}}infoTopics(B){switch(this.selected=B.target.innerHTML,window.view="gallery",this.selected){case"ABOUT":window.seekType="discover";var w="Tell me more about 'SCOG\xC9' the brand.",Q="Info";window.systemSpeak(w,Q);break;case"CREDITS":window.seekType="discover";var F="Name some people and their roles credited to have worked with SCOG\xC9?",O="Credits";window.systemSpeak(F,O);break;case"CONTACT":if(window.seekType!="contact"){window.seekType="contact";let L="How do I contact you?",G="Contact";window.systemSpeak(L,G)}else document.getElementById("genInput2").focus();break}}choose(B){const w=this.lines[0].choices[B];if(this.lines.shift(),this.lines.length===0){console.log("End of conversation.");return}w.action&&w.action()}}class SoundtrackManager{constructor(){this.tracks={},this.trackList=[{key:"menuMove3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav",artist:"Menu",title:"menuMove3"},{key:"menuEnter3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav",artist:"Menu",title:"menuEnter3"},{key:"menuLoading1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav",artist:"Menu",title:"menuLoading1"},{key:"menuError1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav",artist:"Menu",title:"menuError1"},{key:"menuEntrance1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav",artist:"Menu",title:"menuEntrance1"},{key:"menuExitSys1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav",artist:"Menu",title:"menuExitSys1"},{key:"scoge1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav",artist:"Main",title:"scoge1"}],this.trackList.forEach(B=>{this.tracks[B.key]=new Audio(B.src)})}play(B){this.tracks[B].play()}pause(B){this.tracks[B].pause()}stop(B){this.tracks[B].pause(),this.tracks[B].currentTime=0}setVolume(B,w){this.tracks[B].volume=w}loop(B){this.tracks[B].loop=!0}}async function portal(){const D=document.getElementById("seekGallery"),B=document.getElementById("videoGallery");document.getElementById("seekVideo");const w=document.getElementById("portalImg"),Q=document.getElementById("portalImg2"),F=document.getElementById("portalVideo"),O=document.getElementById("portalVideo2"),L=await __vitePreload(()=>import("./imgassetdb.42c45b02.js"),[]).catch(ye=>{console.log(ye)}),G=await __vitePreload(()=>import("./vidassetdb.ced21d21.js"),[]).catch(ye=>{console.log(ye)});window.imageFiles=L.images.array,window.videoFiles=G.videos.array,window.shuffleArray=ye=>{const Be=[...ye];for(let Ce=Be.length-1;Ce>0;Ce--){const we=Math.floor(Math.random()*(Ce+1));[Be[Ce],Be[we]]=[Be[we],Be[Ce]]}return Be},window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles),window.soundOn=!1;const U=window.imageFiles.length,q=window.videoFiles.length;let Y=1,W=2,X=null,te=0,oe=1,ne=null,ce=2,fe=null,me=0;function Ie(){if(window.galleryType==="images")if(w.style.transition="1s all",Q.style.transition="1s all",Y=(Y+1)%U,window.filteredImages[Y],W=(Y+1)%U,X=window.filteredImages[W],te===0){w.style.opacity="0%",Q.style.opacity="100%",w.src=X.publicUrl,te=1;return}else{w.style.opacity="100%",Q.style.opacity="0%",te=0,Q.src=X.publicUrl;return}else if(window.galleryType==="video")if(F.style.transition="1s all",O.style.transition="1s all",oe=(oe+1)%q,ne=window.filteredVideos[oe],ce=(oe+1)%q,fe=window.filteredVideos[ce],me===0){F.style.opacity="0%",O.style.opacity="100%",window.currentVideo=O,window.hiddenVideo=F,O.play(),F.pause(),F.currentTime=0,O.currentTime=0,me=1,window.soundOn===!1?(O.muted=!0,F.muted=!0):(O.muted=!1,F.muted=!0);return}else{F.style.opacity="100%",O.style.opacity="0%",window.currentVideo=F,window.hiddenVideo=O,window.soundOn===!1?(F.muted=!0,O.muted=!0):(F.muted=!1,O.muted=!0),O.currentTime=0,F.currentTime=0,me=0,F.src=ne.publicUrl,F.play(),O.pause(),F.src.includes("POR")?F.setAttribute("class","videoEl"):F.setAttribute("class","mobileVideo"),setTimeout(()=>{O.src=fe.publicUrl,O.src.includes("Seq")?O.setAttribute("class","videoEl"):O.setAttribute("class","mobileVideo")},1100);return}}window.toggleSound=()=>{console.log("toggle sound");var ye=document.getElementById("soundToggle");if(window.soundOn===!0){window.soundOn=!1,window.currentVideo.muted=!0,window.hiddenVideo.muted=!0,ye.innerHTML="- SOUND OFF -";return}else{window.soundOn=!0,console.log(window.currentVideo),window.currentVideo.muted=!1,window.hiddenVideo.muted=!0,ye.innerHTML="- SOUND ON -";return}},D.addEventListener("click",()=>{Ie()}),B.addEventListener("click",()=>{Ie()}),document.getElementById("soundToggle").addEventListener("click",()=>{window.toggleSound()}),Ie()}var buffer={},base64Js={};base64Js.byteLength=byteLength;base64Js.toByteArray=toByteArray;base64Js.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr=typeof Uint8Array!="undefined"?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;revLookup["-".charCodeAt(0)]=62;revLookup["_".charCodeAt(0)]=63;function getLens(D){var B=D.length;if(B%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=D.indexOf("=");w===-1&&(w=B);var Q=w===B?0:4-w%4;return[w,Q]}function byteLength(D){var B=getLens(D),w=B[0],Q=B[1];return(w+Q)*3/4-Q}function _byteLength(D,B,w){return(B+w)*3/4-w}function toByteArray(D){var B,w=getLens(D),Q=w[0],F=w[1],O=new Arr(_byteLength(D,Q,F)),L=0,G=F>0?Q-4:Q,U;for(U=0;U<G;U+=4)B=revLookup[D.charCodeAt(U)]<<18|revLookup[D.charCodeAt(U+1)]<<12|revLookup[D.charCodeAt(U+2)]<<6|revLookup[D.charCodeAt(U+3)],O[L++]=B>>16&255,O[L++]=B>>8&255,O[L++]=B&255;return F===2&&(B=revLookup[D.charCodeAt(U)]<<2|revLookup[D.charCodeAt(U+1)]>>4,O[L++]=B&255),F===1&&(B=revLookup[D.charCodeAt(U)]<<10|revLookup[D.charCodeAt(U+1)]<<4|revLookup[D.charCodeAt(U+2)]>>2,O[L++]=B>>8&255,O[L++]=B&255),O}function tripletToBase64(D){return lookup[D>>18&63]+lookup[D>>12&63]+lookup[D>>6&63]+lookup[D&63]}function encodeChunk(D,B,w){for(var Q,F=[],O=B;O<w;O+=3)Q=(D[O]<<16&16711680)+(D[O+1]<<8&65280)+(D[O+2]&255),F.push(tripletToBase64(Q));return F.join("")}function fromByteArray(D){for(var B,w=D.length,Q=w%3,F=[],O=16383,L=0,G=w-Q;L<G;L+=O)F.push(encodeChunk(D,L,L+O>G?G:L+O));return Q===1?(B=D[w-1],F.push(lookup[B>>2]+lookup[B<<4&63]+"==")):Q===2&&(B=(D[w-2]<<8)+D[w-1],F.push(lookup[B>>10]+lookup[B>>4&63]+lookup[B<<2&63]+"=")),F.join("")}var ieee754$1={};ieee754$1.read=function(D,B,w,Q,F){var O,L,G=F*8-Q-1,U=(1<<G)-1,q=U>>1,Y=-7,W=w?F-1:0,X=w?-1:1,te=D[B+W];for(W+=X,O=te&(1<<-Y)-1,te>>=-Y,Y+=G;Y>0;O=O*256+D[B+W],W+=X,Y-=8);for(L=O&(1<<-Y)-1,O>>=-Y,Y+=Q;Y>0;L=L*256+D[B+W],W+=X,Y-=8);if(O===0)O=1-q;else{if(O===U)return L?NaN:(te?-1:1)*(1/0);L=L+Math.pow(2,Q),O=O-q}return(te?-1:1)*L*Math.pow(2,O-Q)};ieee754$1.write=function(D,B,w,Q,F,O){var L,G,U,q=O*8-F-1,Y=(1<<q)-1,W=Y>>1,X=F===23?Math.pow(2,-24)-Math.pow(2,-77):0,te=Q?0:O-1,oe=Q?1:-1,ne=B<0||B===0&&1/B<0?1:0;for(B=Math.abs(B),isNaN(B)||B===1/0?(G=isNaN(B)?1:0,L=Y):(L=Math.floor(Math.log(B)/Math.LN2),B*(U=Math.pow(2,-L))<1&&(L--,U*=2),L+W>=1?B+=X/U:B+=X*Math.pow(2,1-W),B*U>=2&&(L++,U/=2),L+W>=Y?(G=0,L=Y):L+W>=1?(G=(B*U-1)*Math.pow(2,F),L=L+W):(G=B*Math.pow(2,W-1)*Math.pow(2,F),L=0));F>=8;D[w+te]=G&255,te+=oe,G/=256,F-=8);for(L=L<<F|G,q+=F;q>0;D[w+te]=L&255,te+=oe,L/=256,q-=8);D[w+te-oe]|=ne*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(D){var B=base64Js,w=ieee754$1,Q=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;D.Buffer=G,D.SlowBuffer=me,D.INSPECT_MAX_BYTES=50;var F=2147483647;D.kMaxLength=F,G.TYPED_ARRAY_SUPPORT=O(),!G.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function O(){try{var ee=new Uint8Array(1),j={foo:function(){return 42}};return Object.setPrototypeOf(j,Uint8Array.prototype),Object.setPrototypeOf(ee,j),ee.foo()===42}catch{return!1}}Object.defineProperty(G.prototype,"parent",{enumerable:!0,get:function(){if(!!G.isBuffer(this))return this.buffer}}),Object.defineProperty(G.prototype,"offset",{enumerable:!0,get:function(){if(!!G.isBuffer(this))return this.byteOffset}});function L(ee){if(ee>F)throw new RangeError('The value "'+ee+'" is invalid for option "size"');var j=new Uint8Array(ee);return Object.setPrototypeOf(j,G.prototype),j}function G(ee,j,J){if(typeof ee=="number"){if(typeof j=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return W(ee)}return U(ee,j,J)}G.poolSize=8192;function U(ee,j,J){if(typeof ee=="string")return X(ee,j);if(ArrayBuffer.isView(ee))return oe(ee);if(ee==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ee);if(ge(ee,ArrayBuffer)||ee&&ge(ee.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ge(ee,SharedArrayBuffer)||ee&&ge(ee.buffer,SharedArrayBuffer)))return ne(ee,j,J);if(typeof ee=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var re=ee.valueOf&&ee.valueOf();if(re!=null&&re!==ee)return G.from(re,j,J);var Ae=ce(ee);if(Ae)return Ae;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof ee[Symbol.toPrimitive]=="function")return G.from(ee[Symbol.toPrimitive]("string"),j,J);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ee)}G.from=function(ee,j,J){return U(ee,j,J)},Object.setPrototypeOf(G.prototype,Uint8Array.prototype),Object.setPrototypeOf(G,Uint8Array);function q(ee){if(typeof ee!="number")throw new TypeError('"size" argument must be of type number');if(ee<0)throw new RangeError('The value "'+ee+'" is invalid for option "size"')}function Y(ee,j,J){return q(ee),ee<=0?L(ee):j!==void 0?typeof J=="string"?L(ee).fill(j,J):L(ee).fill(j):L(ee)}G.alloc=function(ee,j,J){return Y(ee,j,J)};function W(ee){return q(ee),L(ee<0?0:fe(ee)|0)}G.allocUnsafe=function(ee){return W(ee)},G.allocUnsafeSlow=function(ee){return W(ee)};function X(ee,j){if((typeof j!="string"||j==="")&&(j="utf8"),!G.isEncoding(j))throw new TypeError("Unknown encoding: "+j);var J=Ie(ee,j)|0,re=L(J),Ae=re.write(ee,j);return Ae!==J&&(re=re.slice(0,Ae)),re}function te(ee){for(var j=ee.length<0?0:fe(ee.length)|0,J=L(j),re=0;re<j;re+=1)J[re]=ee[re]&255;return J}function oe(ee){if(ge(ee,Uint8Array)){var j=new Uint8Array(ee);return ne(j.buffer,j.byteOffset,j.byteLength)}return te(ee)}function ne(ee,j,J){if(j<0||ee.byteLength<j)throw new RangeError('"offset" is outside of buffer bounds');if(ee.byteLength<j+(J||0))throw new RangeError('"length" is outside of buffer bounds');var re;return j===void 0&&J===void 0?re=new Uint8Array(ee):J===void 0?re=new Uint8Array(ee,j):re=new Uint8Array(ee,j,J),Object.setPrototypeOf(re,G.prototype),re}function ce(ee){if(G.isBuffer(ee)){var j=fe(ee.length)|0,J=L(j);return J.length===0||ee.copy(J,0,0,j),J}if(ee.length!==void 0)return typeof ee.length!="number"||ue(ee.length)?L(0):te(ee);if(ee.type==="Buffer"&&Array.isArray(ee.data))return te(ee.data)}function fe(ee){if(ee>=F)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F.toString(16)+" bytes");return ee|0}function me(ee){return+ee!=ee&&(ee=0),G.alloc(+ee)}G.isBuffer=function(j){return j!=null&&j._isBuffer===!0&&j!==G.prototype},G.compare=function(j,J){if(ge(j,Uint8Array)&&(j=G.from(j,j.offset,j.byteLength)),ge(J,Uint8Array)&&(J=G.from(J,J.offset,J.byteLength)),!G.isBuffer(j)||!G.isBuffer(J))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(j===J)return 0;for(var re=j.length,Ae=J.length,de=0,Ee=Math.min(re,Ae);de<Ee;++de)if(j[de]!==J[de]){re=j[de],Ae=J[de];break}return re<Ae?-1:Ae<re?1:0},G.isEncoding=function(j){switch(String(j).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},G.concat=function(j,J){if(!Array.isArray(j))throw new TypeError('"list" argument must be an Array of Buffers');if(j.length===0)return G.alloc(0);var re;if(J===void 0)for(J=0,re=0;re<j.length;++re)J+=j[re].length;var Ae=G.allocUnsafe(J),de=0;for(re=0;re<j.length;++re){var Ee=j[re];if(ge(Ee,Uint8Array))de+Ee.length>Ae.length?G.from(Ee).copy(Ae,de):Uint8Array.prototype.set.call(Ae,Ee,de);else if(G.isBuffer(Ee))Ee.copy(Ae,de);else throw new TypeError('"list" argument must be an Array of Buffers');de+=Ee.length}return Ae};function Ie(ee,j){if(G.isBuffer(ee))return ee.length;if(ArrayBuffer.isView(ee)||ge(ee,ArrayBuffer))return ee.byteLength;if(typeof ee!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof ee);var J=ee.length,re=arguments.length>2&&arguments[2]===!0;if(!re&&J===0)return 0;for(var Ae=!1;;)switch(j){case"ascii":case"latin1":case"binary":return J;case"utf8":case"utf-8":return Oe(ee).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return J*2;case"hex":return J>>>1;case"base64":return ae(ee).length;default:if(Ae)return re?-1:Oe(ee).length;j=(""+j).toLowerCase(),Ae=!0}}G.byteLength=Ie;function ye(ee,j,J){var re=!1;if((j===void 0||j<0)&&(j=0),j>this.length||((J===void 0||J>this.length)&&(J=this.length),J<=0)||(J>>>=0,j>>>=0,J<=j))return"";for(ee||(ee="utf8");;)switch(ee){case"hex":return Me(this,j,J);case"utf8":case"utf-8":return Ge(this,j,J);case"ascii":return Qe(this,j,J);case"latin1":case"binary":return xe(this,j,J);case"base64":return Pe(this,j,J);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Fe(this,j,J);default:if(re)throw new TypeError("Unknown encoding: "+ee);ee=(ee+"").toLowerCase(),re=!0}}G.prototype._isBuffer=!0;function Be(ee,j,J){var re=ee[j];ee[j]=ee[J],ee[J]=re}G.prototype.swap16=function(){var j=this.length;if(j%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var J=0;J<j;J+=2)Be(this,J,J+1);return this},G.prototype.swap32=function(){var j=this.length;if(j%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var J=0;J<j;J+=4)Be(this,J,J+3),Be(this,J+1,J+2);return this},G.prototype.swap64=function(){var j=this.length;if(j%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var J=0;J<j;J+=8)Be(this,J,J+7),Be(this,J+1,J+6),Be(this,J+2,J+5),Be(this,J+3,J+4);return this},G.prototype.toString=function(){var j=this.length;return j===0?"":arguments.length===0?Ge(this,0,j):ye.apply(this,arguments)},G.prototype.toLocaleString=G.prototype.toString,G.prototype.equals=function(j){if(!G.isBuffer(j))throw new TypeError("Argument must be a Buffer");return this===j?!0:G.compare(this,j)===0},G.prototype.inspect=function(){var j="",J=D.INSPECT_MAX_BYTES;return j=this.toString("hex",0,J).replace(/(.{2})/g,"$1 ").trim(),this.length>J&&(j+=" ... "),"<Buffer "+j+">"},Q&&(G.prototype[Q]=G.prototype.inspect),G.prototype.compare=function(j,J,re,Ae,de){if(ge(j,Uint8Array)&&(j=G.from(j,j.offset,j.byteLength)),!G.isBuffer(j))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof j);if(J===void 0&&(J=0),re===void 0&&(re=j?j.length:0),Ae===void 0&&(Ae=0),de===void 0&&(de=this.length),J<0||re>j.length||Ae<0||de>this.length)throw new RangeError("out of range index");if(Ae>=de&&J>=re)return 0;if(Ae>=de)return-1;if(J>=re)return 1;if(J>>>=0,re>>>=0,Ae>>>=0,de>>>=0,this===j)return 0;for(var Ee=de-Ae,ke=re-J,Re=Math.min(Ee,ke),qe=this.slice(Ae,de),Ye=j.slice(J,re),Te=0;Te<Re;++Te)if(qe[Te]!==Ye[Te]){Ee=qe[Te],ke=Ye[Te];break}return Ee<ke?-1:ke<Ee?1:0};function Ce(ee,j,J,re,Ae){if(ee.length===0)return-1;if(typeof J=="string"?(re=J,J=0):J>2147483647?J=2147483647:J<-2147483648&&(J=-2147483648),J=+J,ue(J)&&(J=Ae?0:ee.length-1),J<0&&(J=ee.length+J),J>=ee.length){if(Ae)return-1;J=ee.length-1}else if(J<0)if(Ae)J=0;else return-1;if(typeof j=="string"&&(j=G.from(j,re)),G.isBuffer(j))return j.length===0?-1:we(ee,j,J,re,Ae);if(typeof j=="number")return j=j&255,typeof Uint8Array.prototype.indexOf=="function"?Ae?Uint8Array.prototype.indexOf.call(ee,j,J):Uint8Array.prototype.lastIndexOf.call(ee,j,J):we(ee,[j],J,re,Ae);throw new TypeError("val must be string, number or Buffer")}function we(ee,j,J,re,Ae){var de=1,Ee=ee.length,ke=j.length;if(re!==void 0&&(re=String(re).toLowerCase(),re==="ucs2"||re==="ucs-2"||re==="utf16le"||re==="utf-16le")){if(ee.length<2||j.length<2)return-1;de=2,Ee/=2,ke/=2,J/=2}function Re(it,ct){return de===1?it[ct]:it.readUInt16BE(ct*de)}var qe;if(Ae){var Ye=-1;for(qe=J;qe<Ee;qe++)if(Re(ee,qe)===Re(j,Ye===-1?0:qe-Ye)){if(Ye===-1&&(Ye=qe),qe-Ye+1===ke)return Ye*de}else Ye!==-1&&(qe-=qe-Ye),Ye=-1}else for(J+ke>Ee&&(J=Ee-ke),qe=J;qe>=0;qe--){for(var Te=!0,Je=0;Je<ke;Je++)if(Re(ee,qe+Je)!==Re(j,Je)){Te=!1;break}if(Te)return qe}return-1}G.prototype.includes=function(j,J,re){return this.indexOf(j,J,re)!==-1},G.prototype.indexOf=function(j,J,re){return Ce(this,j,J,re,!0)},G.prototype.lastIndexOf=function(j,J,re){return Ce(this,j,J,re,!1)};function De(ee,j,J,re){J=Number(J)||0;var Ae=ee.length-J;re?(re=Number(re),re>Ae&&(re=Ae)):re=Ae;var de=j.length;re>de/2&&(re=de/2);for(var Ee=0;Ee<re;++Ee){var ke=parseInt(j.substr(Ee*2,2),16);if(ue(ke))return Ee;ee[J+Ee]=ke}return Ee}function be(ee,j,J,re){return se(Oe(j,ee.length-J),ee,J,re)}function Se(ee,j,J,re){return se($e(j),ee,J,re)}function Ne(ee,j,J,re){return se(ae(j),ee,J,re)}function Le(ee,j,J,re){return se(ie(j,ee.length-J),ee,J,re)}G.prototype.write=function(j,J,re,Ae){if(J===void 0)Ae="utf8",re=this.length,J=0;else if(re===void 0&&typeof J=="string")Ae=J,re=this.length,J=0;else if(isFinite(J))J=J>>>0,isFinite(re)?(re=re>>>0,Ae===void 0&&(Ae="utf8")):(Ae=re,re=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var de=this.length-J;if((re===void 0||re>de)&&(re=de),j.length>0&&(re<0||J<0)||J>this.length)throw new RangeError("Attempt to write outside buffer bounds");Ae||(Ae="utf8");for(var Ee=!1;;)switch(Ae){case"hex":return De(this,j,J,re);case"utf8":case"utf-8":return be(this,j,J,re);case"ascii":case"latin1":case"binary":return Se(this,j,J,re);case"base64":return Ne(this,j,J,re);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Le(this,j,J,re);default:if(Ee)throw new TypeError("Unknown encoding: "+Ae);Ae=(""+Ae).toLowerCase(),Ee=!0}},G.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Pe(ee,j,J){return j===0&&J===ee.length?B.fromByteArray(ee):B.fromByteArray(ee.slice(j,J))}function Ge(ee,j,J){J=Math.min(ee.length,J);for(var re=[],Ae=j;Ae<J;){var de=ee[Ae],Ee=null,ke=de>239?4:de>223?3:de>191?2:1;if(Ae+ke<=J){var Re,qe,Ye,Te;switch(ke){case 1:de<128&&(Ee=de);break;case 2:Re=ee[Ae+1],(Re&192)===128&&(Te=(de&31)<<6|Re&63,Te>127&&(Ee=Te));break;case 3:Re=ee[Ae+1],qe=ee[Ae+2],(Re&192)===128&&(qe&192)===128&&(Te=(de&15)<<12|(Re&63)<<6|qe&63,Te>2047&&(Te<55296||Te>57343)&&(Ee=Te));break;case 4:Re=ee[Ae+1],qe=ee[Ae+2],Ye=ee[Ae+3],(Re&192)===128&&(qe&192)===128&&(Ye&192)===128&&(Te=(de&15)<<18|(Re&63)<<12|(qe&63)<<6|Ye&63,Te>65535&&Te<1114112&&(Ee=Te))}}Ee===null?(Ee=65533,ke=1):Ee>65535&&(Ee-=65536,re.push(Ee>>>10&1023|55296),Ee=56320|Ee&1023),re.push(Ee),Ae+=ke}return ve(re)}var _e=4096;function ve(ee){var j=ee.length;if(j<=_e)return String.fromCharCode.apply(String,ee);for(var J="",re=0;re<j;)J+=String.fromCharCode.apply(String,ee.slice(re,re+=_e));return J}function Qe(ee,j,J){var re="";J=Math.min(ee.length,J);for(var Ae=j;Ae<J;++Ae)re+=String.fromCharCode(ee[Ae]&127);return re}function xe(ee,j,J){var re="";J=Math.min(ee.length,J);for(var Ae=j;Ae<J;++Ae)re+=String.fromCharCode(ee[Ae]);return re}function Me(ee,j,J){var re=ee.length;(!j||j<0)&&(j=0),(!J||J<0||J>re)&&(J=re);for(var Ae="",de=j;de<J;++de)Ae+=pe[ee[de]];return Ae}function Fe(ee,j,J){for(var re=ee.slice(j,J),Ae="",de=0;de<re.length-1;de+=2)Ae+=String.fromCharCode(re[de]+re[de+1]*256);return Ae}G.prototype.slice=function(j,J){var re=this.length;j=~~j,J=J===void 0?re:~~J,j<0?(j+=re,j<0&&(j=0)):j>re&&(j=re),J<0?(J+=re,J<0&&(J=0)):J>re&&(J=re),J<j&&(J=j);var Ae=this.subarray(j,J);return Object.setPrototypeOf(Ae,G.prototype),Ae};function Ue(ee,j,J){if(ee%1!==0||ee<0)throw new RangeError("offset is not uint");if(ee+j>J)throw new RangeError("Trying to access beyond buffer length")}G.prototype.readUintLE=G.prototype.readUIntLE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var Ae=this[j],de=1,Ee=0;++Ee<J&&(de*=256);)Ae+=this[j+Ee]*de;return Ae},G.prototype.readUintBE=G.prototype.readUIntBE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var Ae=this[j+--J],de=1;J>0&&(de*=256);)Ae+=this[j+--J]*de;return Ae},G.prototype.readUint8=G.prototype.readUInt8=function(j,J){return j=j>>>0,J||Ue(j,1,this.length),this[j]},G.prototype.readUint16LE=G.prototype.readUInt16LE=function(j,J){return j=j>>>0,J||Ue(j,2,this.length),this[j]|this[j+1]<<8},G.prototype.readUint16BE=G.prototype.readUInt16BE=function(j,J){return j=j>>>0,J||Ue(j,2,this.length),this[j]<<8|this[j+1]},G.prototype.readUint32LE=G.prototype.readUInt32LE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),(this[j]|this[j+1]<<8|this[j+2]<<16)+this[j+3]*16777216},G.prototype.readUint32BE=G.prototype.readUInt32BE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),this[j]*16777216+(this[j+1]<<16|this[j+2]<<8|this[j+3])},G.prototype.readIntLE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var Ae=this[j],de=1,Ee=0;++Ee<J&&(de*=256);)Ae+=this[j+Ee]*de;return de*=128,Ae>=de&&(Ae-=Math.pow(2,8*J)),Ae},G.prototype.readIntBE=function(j,J,re){j=j>>>0,J=J>>>0,re||Ue(j,J,this.length);for(var Ae=J,de=1,Ee=this[j+--Ae];Ae>0&&(de*=256);)Ee+=this[j+--Ae]*de;return de*=128,Ee>=de&&(Ee-=Math.pow(2,8*J)),Ee},G.prototype.readInt8=function(j,J){return j=j>>>0,J||Ue(j,1,this.length),this[j]&128?(255-this[j]+1)*-1:this[j]},G.prototype.readInt16LE=function(j,J){j=j>>>0,J||Ue(j,2,this.length);var re=this[j]|this[j+1]<<8;return re&32768?re|4294901760:re},G.prototype.readInt16BE=function(j,J){j=j>>>0,J||Ue(j,2,this.length);var re=this[j+1]|this[j]<<8;return re&32768?re|4294901760:re},G.prototype.readInt32LE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),this[j]|this[j+1]<<8|this[j+2]<<16|this[j+3]<<24},G.prototype.readInt32BE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),this[j]<<24|this[j+1]<<16|this[j+2]<<8|this[j+3]},G.prototype.readFloatLE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),w.read(this,j,!0,23,4)},G.prototype.readFloatBE=function(j,J){return j=j>>>0,J||Ue(j,4,this.length),w.read(this,j,!1,23,4)},G.prototype.readDoubleLE=function(j,J){return j=j>>>0,J||Ue(j,8,this.length),w.read(this,j,!0,52,8)},G.prototype.readDoubleBE=function(j,J){return j=j>>>0,J||Ue(j,8,this.length),w.read(this,j,!1,52,8)};function He(ee,j,J,re,Ae,de){if(!G.isBuffer(ee))throw new TypeError('"buffer" argument must be a Buffer instance');if(j>Ae||j<de)throw new RangeError('"value" argument is out of bounds');if(J+re>ee.length)throw new RangeError("Index out of range")}G.prototype.writeUintLE=G.prototype.writeUIntLE=function(j,J,re,Ae){if(j=+j,J=J>>>0,re=re>>>0,!Ae){var de=Math.pow(2,8*re)-1;He(this,j,J,re,de,0)}var Ee=1,ke=0;for(this[J]=j&255;++ke<re&&(Ee*=256);)this[J+ke]=j/Ee&255;return J+re},G.prototype.writeUintBE=G.prototype.writeUIntBE=function(j,J,re,Ae){if(j=+j,J=J>>>0,re=re>>>0,!Ae){var de=Math.pow(2,8*re)-1;He(this,j,J,re,de,0)}var Ee=re-1,ke=1;for(this[J+Ee]=j&255;--Ee>=0&&(ke*=256);)this[J+Ee]=j/ke&255;return J+re},G.prototype.writeUint8=G.prototype.writeUInt8=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,1,255,0),this[J]=j&255,J+1},G.prototype.writeUint16LE=G.prototype.writeUInt16LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,65535,0),this[J]=j&255,this[J+1]=j>>>8,J+2},G.prototype.writeUint16BE=G.prototype.writeUInt16BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,65535,0),this[J]=j>>>8,this[J+1]=j&255,J+2},G.prototype.writeUint32LE=G.prototype.writeUInt32LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,4294967295,0),this[J+3]=j>>>24,this[J+2]=j>>>16,this[J+1]=j>>>8,this[J]=j&255,J+4},G.prototype.writeUint32BE=G.prototype.writeUInt32BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,4294967295,0),this[J]=j>>>24,this[J+1]=j>>>16,this[J+2]=j>>>8,this[J+3]=j&255,J+4},G.prototype.writeIntLE=function(j,J,re,Ae){if(j=+j,J=J>>>0,!Ae){var de=Math.pow(2,8*re-1);He(this,j,J,re,de-1,-de)}var Ee=0,ke=1,Re=0;for(this[J]=j&255;++Ee<re&&(ke*=256);)j<0&&Re===0&&this[J+Ee-1]!==0&&(Re=1),this[J+Ee]=(j/ke>>0)-Re&255;return J+re},G.prototype.writeIntBE=function(j,J,re,Ae){if(j=+j,J=J>>>0,!Ae){var de=Math.pow(2,8*re-1);He(this,j,J,re,de-1,-de)}var Ee=re-1,ke=1,Re=0;for(this[J+Ee]=j&255;--Ee>=0&&(ke*=256);)j<0&&Re===0&&this[J+Ee+1]!==0&&(Re=1),this[J+Ee]=(j/ke>>0)-Re&255;return J+re},G.prototype.writeInt8=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,1,127,-128),j<0&&(j=255+j+1),this[J]=j&255,J+1},G.prototype.writeInt16LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,32767,-32768),this[J]=j&255,this[J+1]=j>>>8,J+2},G.prototype.writeInt16BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,2,32767,-32768),this[J]=j>>>8,this[J+1]=j&255,J+2},G.prototype.writeInt32LE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,2147483647,-2147483648),this[J]=j&255,this[J+1]=j>>>8,this[J+2]=j>>>16,this[J+3]=j>>>24,J+4},G.prototype.writeInt32BE=function(j,J,re){return j=+j,J=J>>>0,re||He(this,j,J,4,2147483647,-2147483648),j<0&&(j=4294967295+j+1),this[J]=j>>>24,this[J+1]=j>>>16,this[J+2]=j>>>8,this[J+3]=j&255,J+4};function Ke(ee,j,J,re,Ae,de){if(J+re>ee.length)throw new RangeError("Index out of range");if(J<0)throw new RangeError("Index out of range")}function le(ee,j,J,re,Ae){return j=+j,J=J>>>0,Ae||Ke(ee,j,J,4),w.write(ee,j,J,re,23,4),J+4}G.prototype.writeFloatLE=function(j,J,re){return le(this,j,J,!0,re)},G.prototype.writeFloatBE=function(j,J,re){return le(this,j,J,!1,re)};function Xe(ee,j,J,re,Ae){return j=+j,J=J>>>0,Ae||Ke(ee,j,J,8),w.write(ee,j,J,re,52,8),J+8}G.prototype.writeDoubleLE=function(j,J,re){return Xe(this,j,J,!0,re)},G.prototype.writeDoubleBE=function(j,J,re){return Xe(this,j,J,!1,re)},G.prototype.copy=function(j,J,re,Ae){if(!G.isBuffer(j))throw new TypeError("argument should be a Buffer");if(re||(re=0),!Ae&&Ae!==0&&(Ae=this.length),J>=j.length&&(J=j.length),J||(J=0),Ae>0&&Ae<re&&(Ae=re),Ae===re||j.length===0||this.length===0)return 0;if(J<0)throw new RangeError("targetStart out of bounds");if(re<0||re>=this.length)throw new RangeError("Index out of range");if(Ae<0)throw new RangeError("sourceEnd out of bounds");Ae>this.length&&(Ae=this.length),j.length-J<Ae-re&&(Ae=j.length-J+re);var de=Ae-re;return this===j&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(J,re,Ae):Uint8Array.prototype.set.call(j,this.subarray(re,Ae),J),de},G.prototype.fill=function(j,J,re,Ae){if(typeof j=="string"){if(typeof J=="string"?(Ae=J,J=0,re=this.length):typeof re=="string"&&(Ae=re,re=this.length),Ae!==void 0&&typeof Ae!="string")throw new TypeError("encoding must be a string");if(typeof Ae=="string"&&!G.isEncoding(Ae))throw new TypeError("Unknown encoding: "+Ae);if(j.length===1){var de=j.charCodeAt(0);(Ae==="utf8"&&de<128||Ae==="latin1")&&(j=de)}}else typeof j=="number"?j=j&255:typeof j=="boolean"&&(j=Number(j));if(J<0||this.length<J||this.length<re)throw new RangeError("Out of range index");if(re<=J)return this;J=J>>>0,re=re===void 0?this.length:re>>>0,j||(j=0);var Ee;if(typeof j=="number")for(Ee=J;Ee<re;++Ee)this[Ee]=j;else{var ke=G.isBuffer(j)?j:G.from(j,Ae),Re=ke.length;if(Re===0)throw new TypeError('The value "'+j+'" is invalid for argument "value"');for(Ee=0;Ee<re-J;++Ee)this[Ee+J]=ke[Ee%Re]}return this};var st=/[^+/0-9A-Za-z-_]/g;function lt(ee){if(ee=ee.split("=")[0],ee=ee.trim().replace(st,""),ee.length<2)return"";for(;ee.length%4!==0;)ee=ee+"=";return ee}function Oe(ee,j){j=j||1/0;for(var J,re=ee.length,Ae=null,de=[],Ee=0;Ee<re;++Ee){if(J=ee.charCodeAt(Ee),J>55295&&J<57344){if(!Ae){if(J>56319){(j-=3)>-1&&de.push(239,191,189);continue}else if(Ee+1===re){(j-=3)>-1&&de.push(239,191,189);continue}Ae=J;continue}if(J<56320){(j-=3)>-1&&de.push(239,191,189),Ae=J;continue}J=(Ae-55296<<10|J-56320)+65536}else Ae&&(j-=3)>-1&&de.push(239,191,189);if(Ae=null,J<128){if((j-=1)<0)break;de.push(J)}else if(J<2048){if((j-=2)<0)break;de.push(J>>6|192,J&63|128)}else if(J<65536){if((j-=3)<0)break;de.push(J>>12|224,J>>6&63|128,J&63|128)}else if(J<1114112){if((j-=4)<0)break;de.push(J>>18|240,J>>12&63|128,J>>6&63|128,J&63|128)}else throw new Error("Invalid code point")}return de}function $e(ee){for(var j=[],J=0;J<ee.length;++J)j.push(ee.charCodeAt(J)&255);return j}function ie(ee,j){for(var J,re,Ae,de=[],Ee=0;Ee<ee.length&&!((j-=2)<0);++Ee)J=ee.charCodeAt(Ee),re=J>>8,Ae=J%256,de.push(Ae),de.push(re);return de}function ae(ee){return B.toByteArray(lt(ee))}function se(ee,j,J,re){for(var Ae=0;Ae<re&&!(Ae+J>=j.length||Ae>=ee.length);++Ae)j[Ae+J]=ee[Ae];return Ae}function ge(ee,j){return ee instanceof j||ee!=null&&ee.constructor!=null&&ee.constructor.name!=null&&ee.constructor.name===j.name}function ue(ee){return ee!==ee}var pe=function(){for(var ee="0123456789abcdef",j=new Array(256),J=0;J<16;++J)for(var re=J*16,Ae=0;Ae<16;++Ae)j[re+Ae]=ee[J]+ee[Ae];return j}()})(buffer);var ReplicaRejectCode;(function(D){D[D.SysFatal=1]="SysFatal",D[D.SysTransient=2]="SysTransient",D[D.DestinationInvalid=3]="DestinationInvalid",D[D.CanisterReject=4]="CanisterReject",D[D.CanisterError=5]="CanisterError"})(ReplicaRejectCode||(ReplicaRejectCode={}));const alphabet="abcdefghijklmnopqrstuvwxyz234567",lookupTable=Object.create(null);for(let D=0;D<alphabet.length;D++)lookupTable[alphabet[D]]=D;lookupTable[0]=lookupTable.o;lookupTable[1]=lookupTable.i;var sha256={exports:{}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root={}:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer!="undefined",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(D){return Object.prototype.toString.call(D)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(D){return typeof D=="object"&&D.buffer&&D.buffer.constructor===ArrayBuffer});var createOutputMethod=function(D,B){return function(w){return new Sha256(B,!0).update(w)[D]()}},createMethod=function(D){var B=createOutputMethod("hex",D);NODE_JS&&(B=nodeWrap(B,D)),B.create=function(){return new Sha256(D)},B.update=function(F){return B.create().update(F)};for(var w=0;w<OUTPUT_TYPES.length;++w){var Q=OUTPUT_TYPES[w];B[Q]=createOutputMethod(Q,D)}return B},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(D){if(typeof D=="string")return crypto.createHash(algorithm).update(D,"utf8").digest("hex");if(D==null)throw new Error(ERROR);return D.constructor===ArrayBuffer&&(D=new Uint8Array(D)),Array.isArray(D)||ArrayBuffer.isView(D)||D.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(D)).digest("hex"):method(D)};return nodeMethod},createHmacOutputMethod=function(D,B){return function(w,Q){return new HmacSha256(w,B,!0).update(Q)[D]()}},createHmacMethod=function(D){var B=createHmacOutputMethod("hex",D);B.create=function(F){return new HmacSha256(F,D)},B.update=function(F,O){return B.create(F).update(O)};for(var w=0;w<OUTPUT_TYPES.length;++w){var Q=OUTPUT_TYPES[w];B[Q]=createHmacOutputMethod(Q,D)}return B};function Sha256(D,B){B?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],D?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=D}Sha256.prototype.update=function(D){if(!this.finalized){var B,w=typeof D;if(w!=="string"){if(w==="object"){if(D===null)throw new Error(ERROR);if(ARRAY_BUFFER&&D.constructor===ArrayBuffer)D=new Uint8Array(D);else if(!Array.isArray(D)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(D)))throw new Error(ERROR)}else throw new Error(ERROR);B=!0}for(var Q,F=0,O,L=D.length,G=this.blocks;F<L;){if(this.hashed&&(this.hashed=!1,G[0]=this.block,G[16]=G[1]=G[2]=G[3]=G[4]=G[5]=G[6]=G[7]=G[8]=G[9]=G[10]=G[11]=G[12]=G[13]=G[14]=G[15]=0),B)for(O=this.start;F<L&&O<64;++F)G[O>>2]|=D[F]<<SHIFT[O++&3];else for(O=this.start;F<L&&O<64;++F)Q=D.charCodeAt(F),Q<128?G[O>>2]|=Q<<SHIFT[O++&3]:Q<2048?(G[O>>2]|=(192|Q>>6)<<SHIFT[O++&3],G[O>>2]|=(128|Q&63)<<SHIFT[O++&3]):Q<55296||Q>=57344?(G[O>>2]|=(224|Q>>12)<<SHIFT[O++&3],G[O>>2]|=(128|Q>>6&63)<<SHIFT[O++&3],G[O>>2]|=(128|Q&63)<<SHIFT[O++&3]):(Q=65536+((Q&1023)<<10|D.charCodeAt(++F)&1023),G[O>>2]|=(240|Q>>18)<<SHIFT[O++&3],G[O>>2]|=(128|Q>>12&63)<<SHIFT[O++&3],G[O>>2]|=(128|Q>>6&63)<<SHIFT[O++&3],G[O>>2]|=(128|Q&63)<<SHIFT[O++&3]);this.lastByteIndex=O,this.bytes+=O-this.start,O>=64?(this.block=G[16],this.start=O-64,this.hash(),this.hashed=!0):this.start=O}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var D=this.blocks,B=this.lastByteIndex;D[16]=this.block,D[B>>2]|=EXTRA[B&3],this.block=D[16],B>=56&&(this.hashed||this.hash(),D[0]=this.block,D[16]=D[1]=D[2]=D[3]=D[4]=D[5]=D[6]=D[7]=D[8]=D[9]=D[10]=D[11]=D[12]=D[13]=D[14]=D[15]=0),D[14]=this.hBytes<<3|this.bytes>>>29,D[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var D=this.h0,B=this.h1,w=this.h2,Q=this.h3,F=this.h4,O=this.h5,L=this.h6,G=this.h7,U=this.blocks,q,Y,W,X,te,oe,ne,ce,fe,me,Ie;for(q=16;q<64;++q)te=U[q-15],Y=(te>>>7|te<<25)^(te>>>18|te<<14)^te>>>3,te=U[q-2],W=(te>>>17|te<<15)^(te>>>19|te<<13)^te>>>10,U[q]=U[q-16]+Y+U[q-7]+W<<0;for(Ie=B&w,q=0;q<64;q+=4)this.first?(this.is224?(ce=300032,te=U[0]-1413257819,G=te-150054599<<0,Q=te+24177077<<0):(ce=704751109,te=U[0]-210244248,G=te-1521486534<<0,Q=te+143694565<<0),this.first=!1):(Y=(D>>>2|D<<30)^(D>>>13|D<<19)^(D>>>22|D<<10),W=(F>>>6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7),ce=D&B,X=ce^D&w^Ie,ne=F&O^~F&L,te=G+W+ne+K[q]+U[q],oe=Y+X,G=Q+te<<0,Q=te+oe<<0),Y=(Q>>>2|Q<<30)^(Q>>>13|Q<<19)^(Q>>>22|Q<<10),W=(G>>>6|G<<26)^(G>>>11|G<<21)^(G>>>25|G<<7),fe=Q&D,X=fe^Q&B^ce,ne=G&F^~G&O,te=L+W+ne+K[q+1]+U[q+1],oe=Y+X,L=w+te<<0,w=te+oe<<0,Y=(w>>>2|w<<30)^(w>>>13|w<<19)^(w>>>22|w<<10),W=(L>>>6|L<<26)^(L>>>11|L<<21)^(L>>>25|L<<7),me=w&Q,X=me^w&D^fe,ne=L&G^~L&F,te=O+W+ne+K[q+2]+U[q+2],oe=Y+X,O=B+te<<0,B=te+oe<<0,Y=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),W=(O>>>6|O<<26)^(O>>>11|O<<21)^(O>>>25|O<<7),Ie=B&w,X=Ie^B&Q^me,ne=O&L^~O&G,te=F+W+ne+K[q+3]+U[q+3],oe=Y+X,F=D+te<<0,D=te+oe<<0;this.h0=this.h0+D<<0,this.h1=this.h1+B<<0,this.h2=this.h2+w<<0,this.h3=this.h3+Q<<0,this.h4=this.h4+F<<0,this.h5=this.h5+O<<0,this.h6=this.h6+L<<0,this.h7=this.h7+G<<0},Sha256.prototype.hex=function(){this.finalize();var D=this.h0,B=this.h1,w=this.h2,Q=this.h3,F=this.h4,O=this.h5,L=this.h6,G=this.h7,U=HEX_CHARS[D>>28&15]+HEX_CHARS[D>>24&15]+HEX_CHARS[D>>20&15]+HEX_CHARS[D>>16&15]+HEX_CHARS[D>>12&15]+HEX_CHARS[D>>8&15]+HEX_CHARS[D>>4&15]+HEX_CHARS[D&15]+HEX_CHARS[B>>28&15]+HEX_CHARS[B>>24&15]+HEX_CHARS[B>>20&15]+HEX_CHARS[B>>16&15]+HEX_CHARS[B>>12&15]+HEX_CHARS[B>>8&15]+HEX_CHARS[B>>4&15]+HEX_CHARS[B&15]+HEX_CHARS[w>>28&15]+HEX_CHARS[w>>24&15]+HEX_CHARS[w>>20&15]+HEX_CHARS[w>>16&15]+HEX_CHARS[w>>12&15]+HEX_CHARS[w>>8&15]+HEX_CHARS[w>>4&15]+HEX_CHARS[w&15]+HEX_CHARS[Q>>28&15]+HEX_CHARS[Q>>24&15]+HEX_CHARS[Q>>20&15]+HEX_CHARS[Q>>16&15]+HEX_CHARS[Q>>12&15]+HEX_CHARS[Q>>8&15]+HEX_CHARS[Q>>4&15]+HEX_CHARS[Q&15]+HEX_CHARS[F>>28&15]+HEX_CHARS[F>>24&15]+HEX_CHARS[F>>20&15]+HEX_CHARS[F>>16&15]+HEX_CHARS[F>>12&15]+HEX_CHARS[F>>8&15]+HEX_CHARS[F>>4&15]+HEX_CHARS[F&15]+HEX_CHARS[O>>28&15]+HEX_CHARS[O>>24&15]+HEX_CHARS[O>>20&15]+HEX_CHARS[O>>16&15]+HEX_CHARS[O>>12&15]+HEX_CHARS[O>>8&15]+HEX_CHARS[O>>4&15]+HEX_CHARS[O&15]+HEX_CHARS[L>>28&15]+HEX_CHARS[L>>24&15]+HEX_CHARS[L>>20&15]+HEX_CHARS[L>>16&15]+HEX_CHARS[L>>12&15]+HEX_CHARS[L>>8&15]+HEX_CHARS[L>>4&15]+HEX_CHARS[L&15];return this.is224||(U+=HEX_CHARS[G>>28&15]+HEX_CHARS[G>>24&15]+HEX_CHARS[G>>20&15]+HEX_CHARS[G>>16&15]+HEX_CHARS[G>>12&15]+HEX_CHARS[G>>8&15]+HEX_CHARS[G>>4&15]+HEX_CHARS[G&15]),U},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var D=this.h0,B=this.h1,w=this.h2,Q=this.h3,F=this.h4,O=this.h5,L=this.h6,G=this.h7,U=[D>>24&255,D>>16&255,D>>8&255,D&255,B>>24&255,B>>16&255,B>>8&255,B&255,w>>24&255,w>>16&255,w>>8&255,w&255,Q>>24&255,Q>>16&255,Q>>8&255,Q&255,F>>24&255,F>>16&255,F>>8&255,F&255,O>>24&255,O>>16&255,O>>8&255,O&255,L>>24&255,L>>16&255,L>>8&255,L&255];return this.is224||U.push(G>>24&255,G>>16&255,G>>8&255,G&255),U},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var D=new ArrayBuffer(this.is224?28:32),B=new DataView(D);return B.setUint32(0,this.h0),B.setUint32(4,this.h1),B.setUint32(8,this.h2),B.setUint32(12,this.h3),B.setUint32(16,this.h4),B.setUint32(20,this.h5),B.setUint32(24,this.h6),this.is224||B.setUint32(28,this.h7),D};function HmacSha256(D,B,w){var Q,F=typeof D;if(F==="string"){var O=[],L=D.length,G=0,U;for(Q=0;Q<L;++Q)U=D.charCodeAt(Q),U<128?O[G++]=U:U<2048?(O[G++]=192|U>>6,O[G++]=128|U&63):U<55296||U>=57344?(O[G++]=224|U>>12,O[G++]=128|U>>6&63,O[G++]=128|U&63):(U=65536+((U&1023)<<10|D.charCodeAt(++Q)&1023),O[G++]=240|U>>18,O[G++]=128|U>>12&63,O[G++]=128|U>>6&63,O[G++]=128|U&63);D=O}else if(F==="object"){if(D===null)throw new Error(ERROR);if(ARRAY_BUFFER&&D.constructor===ArrayBuffer)D=new Uint8Array(D);else if(!Array.isArray(D)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(D)))throw new Error(ERROR)}else throw new Error(ERROR);D.length>64&&(D=new Sha256(B,!0).update(D).array());var q=[],Y=[];for(Q=0;Q<64;++Q){var W=D[Q]||0;q[Q]=92^W,Y[Q]=54^W}Sha256.call(this,B,w),this.update(Y),this.oKeyPad=q,this.inner=!0,this.sharedMemory=w}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var D=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(D),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256);class PipeArrayBuffer{constructor(B,w=(B==null?void 0:B.byteLength)||0){this._buffer=B||new ArrayBuffer(0),this._view=new Uint8Array(this._buffer,0,w)}get buffer(){return this._view.slice()}get byteLength(){return this._view.byteLength}read(B){const w=this._view.subarray(0,B);return this._view=this._view.subarray(B),w.slice().buffer}readUint8(){const B=this._view[0];return this._view=this._view.subarray(1),B}write(B){const w=new Uint8Array(B),Q=this._view.byteLength;this._view.byteOffset+this._view.byteLength+w.byteLength>=this._buffer.byteLength?this.alloc(w.byteLength):this._view=new Uint8Array(this._buffer,this._view.byteOffset,this._view.byteLength+w.byteLength),this._view.set(w,Q)}get end(){return this._view.byteLength===0}alloc(B){const w=new ArrayBuffer((this._buffer.byteLength+B)*1.2|0),Q=new Uint8Array(w,0,this._view.byteLength+B);Q.set(this._view),this._buffer=w,this._view=Q}}function eob(){throw new Error("unexpected end of buffer")}function safeRead(D,B){return D.byteLength<B&&eob(),D.read(B)}function safeReadUint8(D){const B=D.readUint8();return B===void 0&&eob(),B}function slebEncode(D){typeof D=="number"&&(D=BigInt(D));const B=D<BigInt(0);B&&(D=-D-BigInt(1));const w=(D===BigInt(0)?0:Math.ceil(Math.log2(Number(D))))+1,Q=new PipeArrayBuffer(new ArrayBuffer(w),0);for(;;){const O=F(D);if(D/=BigInt(128),B&&D===BigInt(0)&&(O&64)!==0||!B&&D===BigInt(0)&&(O&64)===0){Q.write(new Uint8Array([O]));break}else Q.write(new Uint8Array([O|128]))}function F(O){const L=O%BigInt(128);return Number(B?BigInt(128)-L-BigInt(1):L)}return Q.buffer}function writeUIntLE(D,B){if(BigInt(D)<BigInt(0))throw new Error("Cannot write negative values.");return writeIntLE(D,B)}function writeIntLE(D,B){D=BigInt(D);const w=new PipeArrayBuffer(new ArrayBuffer(Math.min(1,B)),0);let Q=0,F=BigInt(256),O=BigInt(0),L=Number(D%F);for(w.write(new Uint8Array([L]));++Q<B;)D<0&&O===BigInt(0)&&L!==0&&(O=BigInt(1)),L=Number((D/F-O)%BigInt(256)),w.write(new Uint8Array([L])),F*=BigInt(256);return w.buffer}function readUIntLE(D,B){let w=BigInt(safeReadUint8(D)),Q=BigInt(1),F=0;for(;++F<B;){Q*=BigInt(256);const O=BigInt(safeReadUint8(D));w=w+Q*O}return w}function readIntLE(D,B){let w=readUIntLE(D,B);const Q=BigInt(2)**(BigInt(8)*BigInt(B-1)+BigInt(7));return w>=Q&&(w-=Q*BigInt(2)),w}function iexp2(D){const B=BigInt(D);if(D<0)throw new RangeError("Input must be non-negative");return BigInt(1)<<B}class Type{display(){return this.name}valueToString(B){return toReadableString(B)}buildTypeTable(B){B.has(this)||this._buildTypeTableImpl(B)}}class PrimitiveType extends Type{checkType(B){if(this.name!==B.name)throw new Error(`type mismatch: type on the wire ${B.name}, expect type ${this.name}`);return B}_buildTypeTableImpl(B){}}class ConstructType extends Type{checkType(B){if(B instanceof RecClass){const w=B.getType();if(typeof w=="undefined")throw new Error("type mismatch with uninitialized type");return w}throw new Error(`type mismatch: type on the wire ${B.name}, expect type ${this.name}`)}encodeType(B){return B.indexOf(this.name)}}class FloatClass extends PrimitiveType{constructor(B){if(super(),this._bits=B,B!==32&&B!==64)throw new Error("not a valid float type")}accept(B,w){return B.visitFloat(this,w)}covariant(B){return typeof B=="number"||B instanceof Number}encodeValue(B){const w=new ArrayBuffer(this._bits/8),Q=new DataView(w);return this._bits===32?Q.setFloat32(0,B,!0):Q.setFloat64(0,B,!0),w}encodeType(){const B=this._bits===32?-13:-14;return slebEncode(B)}decodeValue(B,w){this.checkType(w);const Q=safeRead(B,this._bits/8),F=new DataView(Q);return this._bits===32?F.getFloat32(0,!0):F.getFloat64(0,!0)}get name(){return"float"+this._bits}valueToString(B){return B.toString()}}class FixedIntClass extends PrimitiveType{constructor(B){super(),this._bits=B}accept(B,w){return B.visitFixedInt(this,w)}covariant(B){const w=iexp2(this._bits-1)*BigInt(-1),Q=iexp2(this._bits-1)-BigInt(1);if(typeof B=="bigint")return B>=w&&B<=Q;if(Number.isInteger(B)){const F=BigInt(B);return F>=w&&F<=Q}else return!1}encodeValue(B){return writeIntLE(B,this._bits/8)}encodeType(){const B=Math.log2(this._bits)-3;return slebEncode(-9-B)}decodeValue(B,w){this.checkType(w);const Q=readIntLE(B,this._bits/8);return this._bits<=32?Number(Q):Q}get name(){return`int${this._bits}`}valueToString(B){return B.toString()}}class FixedNatClass extends PrimitiveType{constructor(B){super(),this._bits=B}accept(B,w){return B.visitFixedNat(this,w)}covariant(B){const w=iexp2(this._bits);return typeof B=="bigint"&&B>=BigInt(0)?B<w:Number.isInteger(B)&&B>=0?BigInt(B)<w:!1}encodeValue(B){return writeUIntLE(B,this._bits/8)}encodeType(){const B=Math.log2(this._bits)-3;return slebEncode(-5-B)}decodeValue(B,w){this.checkType(w);const Q=readUIntLE(B,this._bits/8);return this._bits<=32?Number(Q):Q}get name(){return`nat${this._bits}`}valueToString(B){return B.toString()}}class RecClass extends ConstructType{constructor(){super(...arguments),this._id=RecClass._counter++,this._type=void 0}accept(B,w){if(!this._type)throw Error("Recursive type uninitialized.");return B.visitRec(this,this._type,w)}fill(B){this._type=B}getType(){return this._type}covariant(B){return this._type?this._type.covariant(B):!1}encodeValue(B){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.encodeValue(B)}_buildTypeTableImpl(B){if(!this._type)throw Error("Recursive type uninitialized.");B.add(this,new Uint8Array([])),this._type.buildTypeTable(B),B.merge(this,this._type.name)}decodeValue(B,w){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.decodeValue(B,w)}get name(){return`rec_${this._id}`}display(){if(!this._type)throw Error("Recursive type uninitialized.");return`\u03BC${this.name}.${this._type.name}`}valueToString(B){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.valueToString(B)}}RecClass._counter=0;function toReadableString(D){return JSON.stringify(D,(B,w)=>typeof w=="bigint"?`BigInt(${w})`:w)}new FloatClass(32);new FloatClass(64);new FixedIntClass(8);new FixedIntClass(16);new FixedIntClass(32);new FixedIntClass(64);new FixedNatClass(8);new FixedNatClass(16);new FixedNatClass(32);new FixedNatClass(64);var src$1={},bignumber={exports:{}};(function(D){(function(B){var w,Q=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,F=Math.ceil,O=Math.floor,L="[BigNumber Error] ",G=L+"Number primitive has more than 15 significant digits: ",U=1e14,q=14,Y=9007199254740991,W=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],X=1e7,te=1e9;function oe(Ce){var we,De,be,Se=le.prototype={constructor:le,toString:null,valueOf:null},Ne=new le(1),Le=20,Pe=4,Ge=-7,_e=21,ve=-1e7,Qe=1e7,xe=!1,Me=1,Fe=0,Ue={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},He="0123456789abcdefghijklmnopqrstuvwxyz",Ke=!0;function le(ie,ae){var se,ge,ue,pe,ee,j,J,re,Ae=this;if(!(Ae instanceof le))return new le(ie,ae);if(ae==null){if(ie&&ie._isBigNumber===!0){Ae.s=ie.s,!ie.c||ie.e>Qe?Ae.c=Ae.e=null:ie.e<ve?Ae.c=[Ae.e=0]:(Ae.e=ie.e,Ae.c=ie.c.slice());return}if((j=typeof ie=="number")&&ie*0==0){if(Ae.s=1/ie<0?(ie=-ie,-1):1,ie===~~ie){for(pe=0,ee=ie;ee>=10;ee/=10,pe++);pe>Qe?Ae.c=Ae.e=null:(Ae.e=pe,Ae.c=[ie]);return}re=String(ie)}else{if(!Q.test(re=String(ie)))return be(Ae,re,j);Ae.s=re.charCodeAt(0)==45?(re=re.slice(1),-1):1}(pe=re.indexOf("."))>-1&&(re=re.replace(".","")),(ee=re.search(/e/i))>0?(pe<0&&(pe=ee),pe+=+re.slice(ee+1),re=re.substring(0,ee)):pe<0&&(pe=re.length)}else{if(me(ae,2,He.length,"Base"),ae==10&&Ke)return Ae=new le(ie),Oe(Ae,Le+Ae.e+1,Pe);if(re=String(ie),j=typeof ie=="number"){if(ie*0!=0)return be(Ae,re,j,ae);if(Ae.s=1/ie<0?(re=re.slice(1),-1):1,le.DEBUG&&re.replace(/^0\.0*|\./,"").length>15)throw Error(G+ie)}else Ae.s=re.charCodeAt(0)===45?(re=re.slice(1),-1):1;for(se=He.slice(0,ae),pe=ee=0,J=re.length;ee<J;ee++)if(se.indexOf(ge=re.charAt(ee))<0){if(ge=="."){if(ee>pe){pe=J;continue}}else if(!ue&&(re==re.toUpperCase()&&(re=re.toLowerCase())||re==re.toLowerCase()&&(re=re.toUpperCase()))){ue=!0,ee=-1,pe=0;continue}return be(Ae,String(ie),j,ae)}j=!1,re=De(re,ae,10,Ae.s),(pe=re.indexOf("."))>-1?re=re.replace(".",""):pe=re.length}for(ee=0;re.charCodeAt(ee)===48;ee++);for(J=re.length;re.charCodeAt(--J)===48;);if(re=re.slice(ee,++J)){if(J-=ee,j&&le.DEBUG&&J>15&&(ie>Y||ie!==O(ie)))throw Error(G+Ae.s*ie);if((pe=pe-ee-1)>Qe)Ae.c=Ae.e=null;else if(pe<ve)Ae.c=[Ae.e=0];else{if(Ae.e=pe,Ae.c=[],ee=(pe+1)%q,pe<0&&(ee+=q),ee<J){for(ee&&Ae.c.push(+re.slice(0,ee)),J-=q;ee<J;)Ae.c.push(+re.slice(ee,ee+=q));ee=q-(re=re.slice(ee)).length}else ee-=J;for(;ee--;re+="0");Ae.c.push(+re)}}else Ae.c=[Ae.e=0]}le.clone=oe,le.ROUND_UP=0,le.ROUND_DOWN=1,le.ROUND_CEIL=2,le.ROUND_FLOOR=3,le.ROUND_HALF_UP=4,le.ROUND_HALF_DOWN=5,le.ROUND_HALF_EVEN=6,le.ROUND_HALF_CEIL=7,le.ROUND_HALF_FLOOR=8,le.EUCLID=9,le.config=le.set=function(ie){var ae,se;if(ie!=null)if(typeof ie=="object"){if(ie.hasOwnProperty(ae="DECIMAL_PLACES")&&(se=ie[ae],me(se,0,te,ae),Le=se),ie.hasOwnProperty(ae="ROUNDING_MODE")&&(se=ie[ae],me(se,0,8,ae),Pe=se),ie.hasOwnProperty(ae="EXPONENTIAL_AT")&&(se=ie[ae],se&&se.pop?(me(se[0],-te,0,ae),me(se[1],0,te,ae),Ge=se[0],_e=se[1]):(me(se,-te,te,ae),Ge=-(_e=se<0?-se:se))),ie.hasOwnProperty(ae="RANGE"))if(se=ie[ae],se&&se.pop)me(se[0],-te,-1,ae),me(se[1],1,te,ae),ve=se[0],Qe=se[1];else if(me(se,-te,te,ae),se)ve=-(Qe=se<0?-se:se);else throw Error(L+ae+" cannot be zero: "+se);if(ie.hasOwnProperty(ae="CRYPTO"))if(se=ie[ae],se===!!se)if(se)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))xe=se;else throw xe=!se,Error(L+"crypto unavailable");else xe=se;else throw Error(L+ae+" not true or false: "+se);if(ie.hasOwnProperty(ae="MODULO_MODE")&&(se=ie[ae],me(se,0,9,ae),Me=se),ie.hasOwnProperty(ae="POW_PRECISION")&&(se=ie[ae],me(se,0,te,ae),Fe=se),ie.hasOwnProperty(ae="FORMAT"))if(se=ie[ae],typeof se=="object")Ue=se;else throw Error(L+ae+" not an object: "+se);if(ie.hasOwnProperty(ae="ALPHABET"))if(se=ie[ae],typeof se=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(se))Ke=se.slice(0,10)=="0123456789",He=se;else throw Error(L+ae+" invalid: "+se)}else throw Error(L+"Object expected: "+ie);return{DECIMAL_PLACES:Le,ROUNDING_MODE:Pe,EXPONENTIAL_AT:[Ge,_e],RANGE:[ve,Qe],CRYPTO:xe,MODULO_MODE:Me,POW_PRECISION:Fe,FORMAT:Ue,ALPHABET:He}},le.isBigNumber=function(ie){if(!ie||ie._isBigNumber!==!0)return!1;if(!le.DEBUG)return!0;var ae,se,ge=ie.c,ue=ie.e,pe=ie.s;e:if({}.toString.call(ge)=="[object Array]"){if((pe===1||pe===-1)&&ue>=-te&&ue<=te&&ue===O(ue)){if(ge[0]===0){if(ue===0&&ge.length===1)return!0;break e}if(ae=(ue+1)%q,ae<1&&(ae+=q),String(ge[0]).length==ae){for(ae=0;ae<ge.length;ae++)if(se=ge[ae],se<0||se>=U||se!==O(se))break e;if(se!==0)return!0}}}else if(ge===null&&ue===null&&(pe===null||pe===1||pe===-1))return!0;throw Error(L+"Invalid BigNumber: "+ie)},le.maximum=le.max=function(){return st(arguments,Se.lt)},le.minimum=le.min=function(){return st(arguments,Se.gt)},le.random=function(){var ie=9007199254740992,ae=Math.random()*ie&2097151?function(){return O(Math.random()*ie)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(se){var ge,ue,pe,ee,j,J=0,re=[],Ae=new le(Ne);if(se==null?se=Le:me(se,0,te),ee=F(se/q),xe)if(crypto.getRandomValues){for(ge=crypto.getRandomValues(new Uint32Array(ee*=2));J<ee;)j=ge[J]*131072+(ge[J+1]>>>11),j>=9e15?(ue=crypto.getRandomValues(new Uint32Array(2)),ge[J]=ue[0],ge[J+1]=ue[1]):(re.push(j%1e14),J+=2);J=ee/2}else if(crypto.randomBytes){for(ge=crypto.randomBytes(ee*=7);J<ee;)j=(ge[J]&31)*281474976710656+ge[J+1]*1099511627776+ge[J+2]*4294967296+ge[J+3]*16777216+(ge[J+4]<<16)+(ge[J+5]<<8)+ge[J+6],j>=9e15?crypto.randomBytes(7).copy(ge,J):(re.push(j%1e14),J+=7);J=ee/7}else throw xe=!1,Error(L+"crypto unavailable");if(!xe)for(;J<ee;)j=ae(),j<9e15&&(re[J++]=j%1e14);for(ee=re[--J],se%=q,ee&&se&&(j=W[q-se],re[J]=O(ee/j)*j);re[J]===0;re.pop(),J--);if(J<0)re=[pe=0];else{for(pe=-1;re[0]===0;re.splice(0,1),pe-=q);for(J=1,j=re[0];j>=10;j/=10,J++);J<q&&(pe-=q-J)}return Ae.e=pe,Ae.c=re,Ae}}(),le.sum=function(){for(var ie=1,ae=arguments,se=new le(ae[0]);ie<ae.length;)se=se.plus(ae[ie++]);return se},De=function(){var ie="0123456789";function ae(se,ge,ue,pe){for(var ee,j=[0],J,re=0,Ae=se.length;re<Ae;){for(J=j.length;J--;j[J]*=ge);for(j[0]+=pe.indexOf(se.charAt(re++)),ee=0;ee<j.length;ee++)j[ee]>ue-1&&(j[ee+1]==null&&(j[ee+1]=0),j[ee+1]+=j[ee]/ue|0,j[ee]%=ue)}return j.reverse()}return function(se,ge,ue,pe,ee){var j,J,re,Ae,de,Ee,ke,Re,qe=se.indexOf("."),Ye=Le,Te=Pe;for(qe>=0&&(Ae=Fe,Fe=0,se=se.replace(".",""),Re=new le(ge),Ee=Re.pow(se.length-qe),Fe=Ae,Re.c=ae(Be(ce(Ee.c),Ee.e,"0"),10,ue,ie),Re.e=Re.c.length),ke=ae(se,ge,ue,ee?(j=He,ie):(j=ie,He)),re=Ae=ke.length;ke[--Ae]==0;ke.pop());if(!ke[0])return j.charAt(0);if(qe<0?--re:(Ee.c=ke,Ee.e=re,Ee.s=pe,Ee=we(Ee,Re,Ye,Te,ue),ke=Ee.c,de=Ee.r,re=Ee.e),J=re+Ye+1,qe=ke[J],Ae=ue/2,de=de||J<0||ke[J+1]!=null,de=Te<4?(qe!=null||de)&&(Te==0||Te==(Ee.s<0?3:2)):qe>Ae||qe==Ae&&(Te==4||de||Te==6&&ke[J-1]&1||Te==(Ee.s<0?8:7)),J<1||!ke[0])se=de?Be(j.charAt(1),-Ye,j.charAt(0)):j.charAt(0);else{if(ke.length=J,de)for(--ue;++ke[--J]>ue;)ke[J]=0,J||(++re,ke=[1].concat(ke));for(Ae=ke.length;!ke[--Ae];);for(qe=0,se="";qe<=Ae;se+=j.charAt(ke[qe++]));se=Be(se,re,j.charAt(0))}return se}}(),we=function(){function ie(ge,ue,pe){var ee,j,J,re,Ae=0,de=ge.length,Ee=ue%X,ke=ue/X|0;for(ge=ge.slice();de--;)J=ge[de]%X,re=ge[de]/X|0,ee=ke*J+re*Ee,j=Ee*J+ee%X*X+Ae,Ae=(j/pe|0)+(ee/X|0)+ke*re,ge[de]=j%pe;return Ae&&(ge=[Ae].concat(ge)),ge}function ae(ge,ue,pe,ee){var j,J;if(pe!=ee)J=pe>ee?1:-1;else for(j=J=0;j<pe;j++)if(ge[j]!=ue[j]){J=ge[j]>ue[j]?1:-1;break}return J}function se(ge,ue,pe,ee){for(var j=0;pe--;)ge[pe]-=j,j=ge[pe]<ue[pe]?1:0,ge[pe]=j*ee+ge[pe]-ue[pe];for(;!ge[0]&&ge.length>1;ge.splice(0,1));}return function(ge,ue,pe,ee,j){var J,re,Ae,de,Ee,ke,Re,qe,Ye,Te,Je,it,ct,gt,ht,ze,dt,At=ge.s==ue.s?1:-1,ot=ge.c,tt=ue.c;if(!ot||!ot[0]||!tt||!tt[0])return new le(!ge.s||!ue.s||(ot?tt&&ot[0]==tt[0]:!tt)?NaN:ot&&ot[0]==0||!tt?At*0:At/0);for(qe=new le(At),Ye=qe.c=[],re=ge.e-ue.e,At=pe+re+1,j||(j=U,re=ne(ge.e/q)-ne(ue.e/q),At=At/q|0),Ae=0;tt[Ae]==(ot[Ae]||0);Ae++);if(tt[Ae]>(ot[Ae]||0)&&re--,At<0)Ye.push(1),de=!0;else{for(gt=ot.length,ze=tt.length,Ae=0,At+=2,Ee=O(j/(tt[0]+1)),Ee>1&&(tt=ie(tt,Ee,j),ot=ie(ot,Ee,j),ze=tt.length,gt=ot.length),ct=ze,Te=ot.slice(0,ze),Je=Te.length;Je<ze;Te[Je++]=0);dt=tt.slice(),dt=[0].concat(dt),ht=tt[0],tt[1]>=j/2&&ht++;do{if(Ee=0,J=ae(tt,Te,ze,Je),J<0){if(it=Te[0],ze!=Je&&(it=it*j+(Te[1]||0)),Ee=O(it/ht),Ee>1)for(Ee>=j&&(Ee=j-1),ke=ie(tt,Ee,j),Re=ke.length,Je=Te.length;ae(ke,Te,Re,Je)==1;)Ee--,se(ke,ze<Re?dt:tt,Re,j),Re=ke.length,J=1;else Ee==0&&(J=Ee=1),ke=tt.slice(),Re=ke.length;if(Re<Je&&(ke=[0].concat(ke)),se(Te,ke,Je,j),Je=Te.length,J==-1)for(;ae(tt,Te,ze,Je)<1;)Ee++,se(Te,ze<Je?dt:tt,Je,j),Je=Te.length}else J===0&&(Ee++,Te=[0]);Ye[Ae++]=Ee,Te[0]?Te[Je++]=ot[ct]||0:(Te=[ot[ct]],Je=1)}while((ct++<gt||Te[0]!=null)&&At--);de=Te[0]!=null,Ye[0]||Ye.splice(0,1)}if(j==U){for(Ae=1,At=Ye[0];At>=10;At/=10,Ae++);Oe(qe,pe+(qe.e=Ae+re*q-1)+1,ee,de)}else qe.e=re,qe.r=+de;return qe}}();function Xe(ie,ae,se,ge){var ue,pe,ee,j,J;if(se==null?se=Pe:me(se,0,8),!ie.c)return ie.toString();if(ue=ie.c[0],ee=ie.e,ae==null)J=ce(ie.c),J=ge==1||ge==2&&(ee<=Ge||ee>=_e)?ye(J,ee):Be(J,ee,"0");else if(ie=Oe(new le(ie),ae,se),pe=ie.e,J=ce(ie.c),j=J.length,ge==1||ge==2&&(ae<=pe||pe<=Ge)){for(;j<ae;J+="0",j++);J=ye(J,pe)}else if(ae-=ee,J=Be(J,pe,"0"),pe+1>j){if(--ae>0)for(J+=".";ae--;J+="0");}else if(ae+=pe-j,ae>0)for(pe+1==j&&(J+=".");ae--;J+="0");return ie.s<0&&ue?"-"+J:J}function st(ie,ae){for(var se,ge=1,ue=new le(ie[0]);ge<ie.length;ge++)if(se=new le(ie[ge]),se.s)ae.call(ue,se)&&(ue=se);else{ue=se;break}return ue}function lt(ie,ae,se){for(var ge=1,ue=ae.length;!ae[--ue];ae.pop());for(ue=ae[0];ue>=10;ue/=10,ge++);return(se=ge+se*q-1)>Qe?ie.c=ie.e=null:se<ve?ie.c=[ie.e=0]:(ie.e=se,ie.c=ae),ie}be=function(){var ie=/^(-?)0([xbo])(?=\w[\w.]*$)/i,ae=/^([^.]+)\.$/,se=/^\.([^.]+)$/,ge=/^-?(Infinity|NaN)$/,ue=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(pe,ee,j,J){var re,Ae=j?ee:ee.replace(ue,"");if(ge.test(Ae))pe.s=isNaN(Ae)?null:Ae<0?-1:1;else{if(!j&&(Ae=Ae.replace(ie,function(de,Ee,ke){return re=(ke=ke.toLowerCase())=="x"?16:ke=="b"?2:8,!J||J==re?Ee:de}),J&&(re=J,Ae=Ae.replace(ae,"$1").replace(se,"0.$1")),ee!=Ae))return new le(Ae,re);if(le.DEBUG)throw Error(L+"Not a"+(J?" base "+J:"")+" number: "+ee);pe.s=null}pe.c=pe.e=null}}();function Oe(ie,ae,se,ge){var ue,pe,ee,j,J,re,Ae,de=ie.c,Ee=W;if(de){e:{for(ue=1,j=de[0];j>=10;j/=10,ue++);if(pe=ae-ue,pe<0)pe+=q,ee=ae,J=de[re=0],Ae=J/Ee[ue-ee-1]%10|0;else if(re=F((pe+1)/q),re>=de.length)if(ge){for(;de.length<=re;de.push(0));J=Ae=0,ue=1,pe%=q,ee=pe-q+1}else break e;else{for(J=j=de[re],ue=1;j>=10;j/=10,ue++);pe%=q,ee=pe-q+ue,Ae=ee<0?0:J/Ee[ue-ee-1]%10|0}if(ge=ge||ae<0||de[re+1]!=null||(ee<0?J:J%Ee[ue-ee-1]),ge=se<4?(Ae||ge)&&(se==0||se==(ie.s<0?3:2)):Ae>5||Ae==5&&(se==4||ge||se==6&&(pe>0?ee>0?J/Ee[ue-ee]:0:de[re-1])%10&1||se==(ie.s<0?8:7)),ae<1||!de[0])return de.length=0,ge?(ae-=ie.e+1,de[0]=Ee[(q-ae%q)%q],ie.e=-ae||0):de[0]=ie.e=0,ie;if(pe==0?(de.length=re,j=1,re--):(de.length=re+1,j=Ee[q-pe],de[re]=ee>0?O(J/Ee[ue-ee]%Ee[ee])*j:0),ge)for(;;)if(re==0){for(pe=1,ee=de[0];ee>=10;ee/=10,pe++);for(ee=de[0]+=j,j=1;ee>=10;ee/=10,j++);pe!=j&&(ie.e++,de[0]==U&&(de[0]=1));break}else{if(de[re]+=j,de[re]!=U)break;de[re--]=0,j=1}for(pe=de.length;de[--pe]===0;de.pop());}ie.e>Qe?ie.c=ie.e=null:ie.e<ve&&(ie.c=[ie.e=0])}return ie}function $e(ie){var ae,se=ie.e;return se===null?ie.toString():(ae=ce(ie.c),ae=se<=Ge||se>=_e?ye(ae,se):Be(ae,se,"0"),ie.s<0?"-"+ae:ae)}return Se.absoluteValue=Se.abs=function(){var ie=new le(this);return ie.s<0&&(ie.s=1),ie},Se.comparedTo=function(ie,ae){return fe(this,new le(ie,ae))},Se.decimalPlaces=Se.dp=function(ie,ae){var se,ge,ue,pe=this;if(ie!=null)return me(ie,0,te),ae==null?ae=Pe:me(ae,0,8),Oe(new le(pe),ie+pe.e+1,ae);if(!(se=pe.c))return null;if(ge=((ue=se.length-1)-ne(this.e/q))*q,ue=se[ue])for(;ue%10==0;ue/=10,ge--);return ge<0&&(ge=0),ge},Se.dividedBy=Se.div=function(ie,ae){return we(this,new le(ie,ae),Le,Pe)},Se.dividedToIntegerBy=Se.idiv=function(ie,ae){return we(this,new le(ie,ae),0,1)},Se.exponentiatedBy=Se.pow=function(ie,ae){var se,ge,ue,pe,ee,j,J,re,Ae,de=this;if(ie=new le(ie),ie.c&&!ie.isInteger())throw Error(L+"Exponent not an integer: "+$e(ie));if(ae!=null&&(ae=new le(ae)),j=ie.e>14,!de.c||!de.c[0]||de.c[0]==1&&!de.e&&de.c.length==1||!ie.c||!ie.c[0])return Ae=new le(Math.pow(+$e(de),j?ie.s*(2-Ie(ie)):+$e(ie))),ae?Ae.mod(ae):Ae;if(J=ie.s<0,ae){if(ae.c?!ae.c[0]:!ae.s)return new le(NaN);ge=!J&&de.isInteger()&&ae.isInteger(),ge&&(de=de.mod(ae))}else{if(ie.e>9&&(de.e>0||de.e<-1||(de.e==0?de.c[0]>1||j&&de.c[1]>=24e7:de.c[0]<8e13||j&&de.c[0]<=9999975e7)))return pe=de.s<0&&Ie(ie)?-0:0,de.e>-1&&(pe=1/pe),new le(J?1/pe:pe);Fe&&(pe=F(Fe/q+2))}for(j?(se=new le(.5),J&&(ie.s=1),re=Ie(ie)):(ue=Math.abs(+$e(ie)),re=ue%2),Ae=new le(Ne);;){if(re){if(Ae=Ae.times(de),!Ae.c)break;pe?Ae.c.length>pe&&(Ae.c.length=pe):ge&&(Ae=Ae.mod(ae))}if(ue){if(ue=O(ue/2),ue===0)break;re=ue%2}else if(ie=ie.times(se),Oe(ie,ie.e+1,1),ie.e>14)re=Ie(ie);else{if(ue=+$e(ie),ue===0)break;re=ue%2}de=de.times(de),pe?de.c&&de.c.length>pe&&(de.c.length=pe):ge&&(de=de.mod(ae))}return ge?Ae:(J&&(Ae=Ne.div(Ae)),ae?Ae.mod(ae):pe?Oe(Ae,Fe,Pe,ee):Ae)},Se.integerValue=function(ie){var ae=new le(this);return ie==null?ie=Pe:me(ie,0,8),Oe(ae,ae.e+1,ie)},Se.isEqualTo=Se.eq=function(ie,ae){return fe(this,new le(ie,ae))===0},Se.isFinite=function(){return!!this.c},Se.isGreaterThan=Se.gt=function(ie,ae){return fe(this,new le(ie,ae))>0},Se.isGreaterThanOrEqualTo=Se.gte=function(ie,ae){return(ae=fe(this,new le(ie,ae)))===1||ae===0},Se.isInteger=function(){return!!this.c&&ne(this.e/q)>this.c.length-2},Se.isLessThan=Se.lt=function(ie,ae){return fe(this,new le(ie,ae))<0},Se.isLessThanOrEqualTo=Se.lte=function(ie,ae){return(ae=fe(this,new le(ie,ae)))===-1||ae===0},Se.isNaN=function(){return!this.s},Se.isNegative=function(){return this.s<0},Se.isPositive=function(){return this.s>0},Se.isZero=function(){return!!this.c&&this.c[0]==0},Se.minus=function(ie,ae){var se,ge,ue,pe,ee=this,j=ee.s;if(ie=new le(ie,ae),ae=ie.s,!j||!ae)return new le(NaN);if(j!=ae)return ie.s=-ae,ee.plus(ie);var J=ee.e/q,re=ie.e/q,Ae=ee.c,de=ie.c;if(!J||!re){if(!Ae||!de)return Ae?(ie.s=-ae,ie):new le(de?ee:NaN);if(!Ae[0]||!de[0])return de[0]?(ie.s=-ae,ie):new le(Ae[0]?ee:Pe==3?-0:0)}if(J=ne(J),re=ne(re),Ae=Ae.slice(),j=J-re){for((pe=j<0)?(j=-j,ue=Ae):(re=J,ue=de),ue.reverse(),ae=j;ae--;ue.push(0));ue.reverse()}else for(ge=(pe=(j=Ae.length)<(ae=de.length))?j:ae,j=ae=0;ae<ge;ae++)if(Ae[ae]!=de[ae]){pe=Ae[ae]<de[ae];break}if(pe&&(ue=Ae,Ae=de,de=ue,ie.s=-ie.s),ae=(ge=de.length)-(se=Ae.length),ae>0)for(;ae--;Ae[se++]=0);for(ae=U-1;ge>j;){if(Ae[--ge]<de[ge]){for(se=ge;se&&!Ae[--se];Ae[se]=ae);--Ae[se],Ae[ge]+=U}Ae[ge]-=de[ge]}for(;Ae[0]==0;Ae.splice(0,1),--re);return Ae[0]?lt(ie,Ae,re):(ie.s=Pe==3?-1:1,ie.c=[ie.e=0],ie)},Se.modulo=Se.mod=function(ie,ae){var se,ge,ue=this;return ie=new le(ie,ae),!ue.c||!ie.s||ie.c&&!ie.c[0]?new le(NaN):!ie.c||ue.c&&!ue.c[0]?new le(ue):(Me==9?(ge=ie.s,ie.s=1,se=we(ue,ie,0,3),ie.s=ge,se.s*=ge):se=we(ue,ie,0,Me),ie=ue.minus(se.times(ie)),!ie.c[0]&&Me==1&&(ie.s=ue.s),ie)},Se.multipliedBy=Se.times=function(ie,ae){var se,ge,ue,pe,ee,j,J,re,Ae,de,Ee,ke,Re,qe,Ye,Te=this,Je=Te.c,it=(ie=new le(ie,ae)).c;if(!Je||!it||!Je[0]||!it[0])return!Te.s||!ie.s||Je&&!Je[0]&&!it||it&&!it[0]&&!Je?ie.c=ie.e=ie.s=null:(ie.s*=Te.s,!Je||!it?ie.c=ie.e=null:(ie.c=[0],ie.e=0)),ie;for(ge=ne(Te.e/q)+ne(ie.e/q),ie.s*=Te.s,J=Je.length,de=it.length,J<de&&(Re=Je,Je=it,it=Re,ue=J,J=de,de=ue),ue=J+de,Re=[];ue--;Re.push(0));for(qe=U,Ye=X,ue=de;--ue>=0;){for(se=0,Ee=it[ue]%Ye,ke=it[ue]/Ye|0,ee=J,pe=ue+ee;pe>ue;)re=Je[--ee]%Ye,Ae=Je[ee]/Ye|0,j=ke*re+Ae*Ee,re=Ee*re+j%Ye*Ye+Re[pe]+se,se=(re/qe|0)+(j/Ye|0)+ke*Ae,Re[pe--]=re%qe;Re[pe]=se}return se?++ge:Re.splice(0,1),lt(ie,Re,ge)},Se.negated=function(){var ie=new le(this);return ie.s=-ie.s||null,ie},Se.plus=function(ie,ae){var se,ge=this,ue=ge.s;if(ie=new le(ie,ae),ae=ie.s,!ue||!ae)return new le(NaN);if(ue!=ae)return ie.s=-ae,ge.minus(ie);var pe=ge.e/q,ee=ie.e/q,j=ge.c,J=ie.c;if(!pe||!ee){if(!j||!J)return new le(ue/0);if(!j[0]||!J[0])return J[0]?ie:new le(j[0]?ge:ue*0)}if(pe=ne(pe),ee=ne(ee),j=j.slice(),ue=pe-ee){for(ue>0?(ee=pe,se=J):(ue=-ue,se=j),se.reverse();ue--;se.push(0));se.reverse()}for(ue=j.length,ae=J.length,ue-ae<0&&(se=J,J=j,j=se,ae=ue),ue=0;ae;)ue=(j[--ae]=j[ae]+J[ae]+ue)/U|0,j[ae]=U===j[ae]?0:j[ae]%U;return ue&&(j=[ue].concat(j),++ee),lt(ie,j,ee)},Se.precision=Se.sd=function(ie,ae){var se,ge,ue,pe=this;if(ie!=null&&ie!==!!ie)return me(ie,1,te),ae==null?ae=Pe:me(ae,0,8),Oe(new le(pe),ie,ae);if(!(se=pe.c))return null;if(ue=se.length-1,ge=ue*q+1,ue=se[ue]){for(;ue%10==0;ue/=10,ge--);for(ue=se[0];ue>=10;ue/=10,ge++);}return ie&&pe.e+1>ge&&(ge=pe.e+1),ge},Se.shiftedBy=function(ie){return me(ie,-Y,Y),this.times("1e"+ie)},Se.squareRoot=Se.sqrt=function(){var ie,ae,se,ge,ue,pe=this,ee=pe.c,j=pe.s,J=pe.e,re=Le+4,Ae=new le("0.5");if(j!==1||!ee||!ee[0])return new le(!j||j<0&&(!ee||ee[0])?NaN:ee?pe:1/0);if(j=Math.sqrt(+$e(pe)),j==0||j==1/0?(ae=ce(ee),(ae.length+J)%2==0&&(ae+="0"),j=Math.sqrt(+ae),J=ne((J+1)/2)-(J<0||J%2),j==1/0?ae="5e"+J:(ae=j.toExponential(),ae=ae.slice(0,ae.indexOf("e")+1)+J),se=new le(ae)):se=new le(j+""),se.c[0]){for(J=se.e,j=J+re,j<3&&(j=0);;)if(ue=se,se=Ae.times(ue.plus(we(pe,ue,re,1))),ce(ue.c).slice(0,j)===(ae=ce(se.c)).slice(0,j))if(se.e<J&&--j,ae=ae.slice(j-3,j+1),ae=="9999"||!ge&&ae=="4999"){if(!ge&&(Oe(ue,ue.e+Le+2,0),ue.times(ue).eq(pe))){se=ue;break}re+=4,j+=4,ge=1}else{(!+ae||!+ae.slice(1)&&ae.charAt(0)=="5")&&(Oe(se,se.e+Le+2,1),ie=!se.times(se).eq(pe));break}}return Oe(se,se.e+Le+1,Pe,ie)},Se.toExponential=function(ie,ae){return ie!=null&&(me(ie,0,te),ie++),Xe(this,ie,ae,1)},Se.toFixed=function(ie,ae){return ie!=null&&(me(ie,0,te),ie=ie+this.e+1),Xe(this,ie,ae)},Se.toFormat=function(ie,ae,se){var ge,ue=this;if(se==null)ie!=null&&ae&&typeof ae=="object"?(se=ae,ae=null):ie&&typeof ie=="object"?(se=ie,ie=ae=null):se=Ue;else if(typeof se!="object")throw Error(L+"Argument not an object: "+se);if(ge=ue.toFixed(ie,ae),ue.c){var pe,ee=ge.split("."),j=+se.groupSize,J=+se.secondaryGroupSize,re=se.groupSeparator||"",Ae=ee[0],de=ee[1],Ee=ue.s<0,ke=Ee?Ae.slice(1):Ae,Re=ke.length;if(J&&(pe=j,j=J,J=pe,Re-=pe),j>0&&Re>0){for(pe=Re%j||j,Ae=ke.substr(0,pe);pe<Re;pe+=j)Ae+=re+ke.substr(pe,j);J>0&&(Ae+=re+ke.slice(pe)),Ee&&(Ae="-"+Ae)}ge=de?Ae+(se.decimalSeparator||"")+((J=+se.fractionGroupSize)?de.replace(new RegExp("\\d{"+J+"}\\B","g"),"$&"+(se.fractionGroupSeparator||"")):de):Ae}return(se.prefix||"")+ge+(se.suffix||"")},Se.toFraction=function(ie){var ae,se,ge,ue,pe,ee,j,J,re,Ae,de,Ee,ke=this,Re=ke.c;if(ie!=null&&(j=new le(ie),!j.isInteger()&&(j.c||j.s!==1)||j.lt(Ne)))throw Error(L+"Argument "+(j.isInteger()?"out of range: ":"not an integer: ")+$e(j));if(!Re)return new le(ke);for(ae=new le(Ne),re=se=new le(Ne),ge=J=new le(Ne),Ee=ce(Re),pe=ae.e=Ee.length-ke.e-1,ae.c[0]=W[(ee=pe%q)<0?q+ee:ee],ie=!ie||j.comparedTo(ae)>0?pe>0?ae:re:j,ee=Qe,Qe=1/0,j=new le(Ee),J.c[0]=0;Ae=we(j,ae,0,1),ue=se.plus(Ae.times(ge)),ue.comparedTo(ie)!=1;)se=ge,ge=ue,re=J.plus(Ae.times(ue=re)),J=ue,ae=j.minus(Ae.times(ue=ae)),j=ue;return ue=we(ie.minus(se),ge,0,1),J=J.plus(ue.times(re)),se=se.plus(ue.times(ge)),J.s=re.s=ke.s,pe=pe*2,de=we(re,ge,pe,Pe).minus(ke).abs().comparedTo(we(J,se,pe,Pe).minus(ke).abs())<1?[re,ge]:[J,se],Qe=ee,de},Se.toNumber=function(){return+$e(this)},Se.toPrecision=function(ie,ae){return ie!=null&&me(ie,1,te),Xe(this,ie,ae,2)},Se.toString=function(ie){var ae,se=this,ge=se.s,ue=se.e;return ue===null?ge?(ae="Infinity",ge<0&&(ae="-"+ae)):ae="NaN":(ie==null?ae=ue<=Ge||ue>=_e?ye(ce(se.c),ue):Be(ce(se.c),ue,"0"):ie===10&&Ke?(se=Oe(new le(se),Le+ue+1,Pe),ae=Be(ce(se.c),se.e,"0")):(me(ie,2,He.length,"Base"),ae=De(Be(ce(se.c),ue,"0"),10,ie,ge,!0)),ge<0&&se.c[0]&&(ae="-"+ae)),ae},Se.valueOf=Se.toJSON=function(){return $e(this)},Se._isBigNumber=!0,Ce!=null&&le.set(Ce),le}function ne(Ce){var we=Ce|0;return Ce>0||Ce===we?we:we-1}function ce(Ce){for(var we,De,be=1,Se=Ce.length,Ne=Ce[0]+"";be<Se;){for(we=Ce[be++]+"",De=q-we.length;De--;we="0"+we);Ne+=we}for(Se=Ne.length;Ne.charCodeAt(--Se)===48;);return Ne.slice(0,Se+1||1)}function fe(Ce,we){var De,be,Se=Ce.c,Ne=we.c,Le=Ce.s,Pe=we.s,Ge=Ce.e,_e=we.e;if(!Le||!Pe)return null;if(De=Se&&!Se[0],be=Ne&&!Ne[0],De||be)return De?be?0:-Pe:Le;if(Le!=Pe)return Le;if(De=Le<0,be=Ge==_e,!Se||!Ne)return be?0:!Se^De?1:-1;if(!be)return Ge>_e^De?1:-1;for(Pe=(Ge=Se.length)<(_e=Ne.length)?Ge:_e,Le=0;Le<Pe;Le++)if(Se[Le]!=Ne[Le])return Se[Le]>Ne[Le]^De?1:-1;return Ge==_e?0:Ge>_e^De?1:-1}function me(Ce,we,De,be){if(Ce<we||Ce>De||Ce!==O(Ce))throw Error(L+(be||"Argument")+(typeof Ce=="number"?Ce<we||Ce>De?" out of range: ":" not an integer: ":" not a primitive number: ")+String(Ce))}function Ie(Ce){var we=Ce.c.length-1;return ne(Ce.e/q)==we&&Ce.c[we]%2!=0}function ye(Ce,we){return(Ce.length>1?Ce.charAt(0)+"."+Ce.slice(1):Ce)+(we<0?"e":"e+")+we}function Be(Ce,we,De){var be,Se;if(we<0){for(Se=De+".";++we;Se+=De);Ce=Se+Ce}else if(be=Ce.length,++we>be){for(Se=De,we-=be;--we;Se+=De);Ce+=Se}else we<be&&(Ce=Ce.slice(0,we)+"."+Ce.slice(we));return Ce}w=oe(),w.default=w.BigNumber=w,D.exports?D.exports=w:(B||(B=typeof self!="undefined"&&self?self:window),B.BigNumber=w)})(commonjsGlobal)})(bignumber);var decoder_asm=function D(B,w,Q){var F=new B.Uint8Array(Q),O=w.pushInt,L=w.pushInt32,G=w.pushInt32Neg,U=w.pushInt64,q=w.pushInt64Neg,Y=w.pushFloat,W=w.pushFloatSingle,X=w.pushFloatDouble,te=w.pushTrue,oe=w.pushFalse,ne=w.pushUndefined,ce=w.pushNull,fe=w.pushInfinity,me=w.pushInfinityNeg,Ie=w.pushNaN,ye=w.pushNaNNeg,Be=w.pushArrayStart,Ce=w.pushArrayStartFixed,we=w.pushArrayStartFixed32,De=w.pushArrayStartFixed64,be=w.pushObjectStart,Se=w.pushObjectStartFixed,Ne=w.pushObjectStartFixed32,Le=w.pushObjectStartFixed64,Pe=w.pushByteString,Ge=w.pushByteStringStart,_e=w.pushUtf8String,ve=w.pushUtf8StringStart,Qe=w.pushSimpleUnassigned,xe=w.pushTagStart,Me=w.pushTagStart4,Fe=w.pushTagStart8,Ue=w.pushTagUnassigned,He=w.pushBreak,Ke=B.Math.pow,le=0,Xe=0,st=0;function lt(he){for(he=he|0,le=0,Xe=he;(le|0)<(Xe|0)&&(st=Nt[F[le]&255](F[le]|0)|0,!((st|0)>0)););return st|0}function Oe(he){return he=he|0,((le|0)+(he|0)|0)<(Xe|0)?0:1}function $e(he){return he=he|0,F[he|0]<<8|F[he+1|0]|0}function ie(he){return he=he|0,F[he|0]<<24|F[he+1|0]<<16|F[he+2|0]<<8|F[he+3|0]|0}function ae(he){return he=he|0,O(he|0),le=le+1|0,0}function se(he){return he=he|0,Oe(1)|0?1:(O(F[le+1|0]|0),le=le+2|0,0)}function ge(he){return he=he|0,Oe(2)|0?1:(O($e(le+1|0)|0),le=le+3|0,0)}function ue(he){return he=he|0,Oe(4)|0?1:(L($e(le+1|0)|0,$e(le+3|0)|0),le=le+5|0,0)}function pe(he){return he=he|0,Oe(8)|0?1:(U($e(le+1|0)|0,$e(le+3|0)|0,$e(le+5|0)|0,$e(le+7|0)|0),le=le+9|0,0)}function ee(he){return he=he|0,O(-1-(he-32|0)|0),le=le+1|0,0}function j(he){return he=he|0,Oe(1)|0?1:(O(-1-(F[le+1|0]|0)|0),le=le+2|0,0)}function J(he){he=he|0;var Ve=0;return Oe(2)|0?1:(Ve=$e(le+1|0)|0,O(-1-(Ve|0)|0),le=le+3|0,0)}function re(he){return he=he|0,Oe(4)|0?1:(G($e(le+1|0)|0,$e(le+3|0)|0),le=le+5|0,0)}function Ae(he){return he=he|0,Oe(8)|0?1:(q($e(le+1|0)|0,$e(le+3|0)|0,$e(le+5|0)|0,$e(le+7|0)|0),le=le+9|0,0)}function de(he){he=he|0;var Ve=0,We=0,je=0;return je=he-64|0,Oe(je|0)|0?1:(Ve=le+1|0,We=(le+1|0)+(je|0)|0,Pe(Ve|0,We|0),le=We|0,0)}function Ee(he){he=he|0;var Ve=0,We=0,je=0;return Oe(1)|0||(je=F[le+1|0]|0,Ve=le+2|0,We=(le+2|0)+(je|0)|0,Oe(je+1|0)|0)?1:(Pe(Ve|0,We|0),le=We|0,0)}function ke(he){he=he|0;var Ve=0,We=0,je=0;return Oe(2)|0||(je=$e(le+1|0)|0,Ve=le+3|0,We=(le+3|0)+(je|0)|0,Oe(je+2|0)|0)?1:(Pe(Ve|0,We|0),le=We|0,0)}function Re(he){he=he|0;var Ve=0,We=0,je=0;return Oe(4)|0||(je=ie(le+1|0)|0,Ve=le+5|0,We=(le+5|0)+(je|0)|0,Oe(je+4|0)|0)?1:(Pe(Ve|0,We|0),le=We|0,0)}function qe(he){return he=he|0,1}function Ye(he){return he=he|0,Ge(),le=le+1|0,0}function Te(he){he=he|0;var Ve=0,We=0,je=0;return je=he-96|0,Oe(je|0)|0?1:(Ve=le+1|0,We=(le+1|0)+(je|0)|0,_e(Ve|0,We|0),le=We|0,0)}function Je(he){he=he|0;var Ve=0,We=0,je=0;return Oe(1)|0||(je=F[le+1|0]|0,Ve=le+2|0,We=(le+2|0)+(je|0)|0,Oe(je+1|0)|0)?1:(_e(Ve|0,We|0),le=We|0,0)}function it(he){he=he|0;var Ve=0,We=0,je=0;return Oe(2)|0||(je=$e(le+1|0)|0,Ve=le+3|0,We=(le+3|0)+(je|0)|0,Oe(je+2|0)|0)?1:(_e(Ve|0,We|0),le=We|0,0)}function ct(he){he=he|0;var Ve=0,We=0,je=0;return Oe(4)|0||(je=ie(le+1|0)|0,Ve=le+5|0,We=(le+5|0)+(je|0)|0,Oe(je+4|0)|0)?1:(_e(Ve|0,We|0),le=We|0,0)}function gt(he){return he=he|0,1}function ht(he){return he=he|0,ve(),le=le+1|0,0}function ze(he){return he=he|0,Ce(he-128|0),le=le+1|0,0}function dt(he){return he=he|0,Oe(1)|0?1:(Ce(F[le+1|0]|0),le=le+2|0,0)}function At(he){return he=he|0,Oe(2)|0?1:(Ce($e(le+1|0)|0),le=le+3|0,0)}function ot(he){return he=he|0,Oe(4)|0?1:(we($e(le+1|0)|0,$e(le+3|0)|0),le=le+5|0,0)}function tt(he){return he=he|0,Oe(8)|0?1:(De($e(le+1|0)|0,$e(le+3|0)|0,$e(le+5|0)|0,$e(le+7|0)|0),le=le+9|0,0)}function mt(he){return he=he|0,Be(),le=le+1|0,0}function rt(he){he=he|0;var Ve=0;return Ve=he-160|0,Oe(Ve|0)|0?1:(Se(Ve|0),le=le+1|0,0)}function Et(he){return he=he|0,Oe(1)|0?1:(Se(F[le+1|0]|0),le=le+2|0,0)}function yt(he){return he=he|0,Oe(2)|0?1:(Se($e(le+1|0)|0),le=le+3|0,0)}function Bt(he){return he=he|0,Oe(4)|0?1:(Ne($e(le+1|0)|0,$e(le+3|0)|0),le=le+5|0,0)}function It(he){return he=he|0,Oe(8)|0?1:(Le($e(le+1|0)|0,$e(le+3|0)|0,$e(le+5|0)|0,$e(le+7|0)|0),le=le+9|0,0)}function wt(he){return he=he|0,be(),le=le+1|0,0}function ut(he){return he=he|0,xe(he-192|0|0),le=le+1|0,0}function Pt(he){return he=he|0,xe(he|0),le=le+1|0,0}function Gt(he){return he=he|0,xe(he|0),le=le+1|0,0}function Ut(he){return he=he|0,xe(he|0),le=le+1|0,0}function $t(he){return he=he|0,xe(he|0),le=le+1|0,0}function at(he){return he=he|0,xe(he-192|0|0),le=le+1|0,0}function Ht(he){return he=he|0,xe(he|0),le=le+1|0,0}function qt(he){return he=he|0,xe(he|0),le=le+1|0,0}function Yt(he){return he=he|0,xe(he|0),le=le+1|0,0}function Ct(he){return he=he|0,Oe(1)|0?1:(xe(F[le+1|0]|0),le=le+2|0,0)}function vt(he){return he=he|0,Oe(2)|0?1:(xe($e(le+1|0)|0),le=le+3|0,0)}function Qt(he){return he=he|0,Oe(4)|0?1:(Me($e(le+1|0)|0,$e(le+3|0)|0),le=le+5|0,0)}function bt(he){return he=he|0,Oe(8)|0?1:(Fe($e(le+1|0)|0,$e(le+3|0)|0,$e(le+5|0)|0,$e(le+7|0)|0),le=le+9|0,0)}function nt(he){return he=he|0,Qe((he|0)-224|0),le=le+1|0,0}function _t(he){return he=he|0,oe(),le=le+1|0,0}function St(he){return he=he|0,te(),le=le+1|0,0}function Dt(he){return he=he|0,ce(),le=le+1|0,0}function kt(he){return he=he|0,ne(),le=le+1|0,0}function xt(he){return he=he|0,Oe(1)|0?1:(Qe(F[le+1|0]|0),le=le+2|0,0)}function Tt(he){he=he|0;var Ve=0,We=0,je=1,ft=0,pt=0,jt=0;return Oe(2)|0?1:(Ve=F[le+1|0]|0,We=F[le+2|0]|0,(Ve|0)&128&&(je=-1),ft=+(((Ve|0)&124)>>2),pt=+(((Ve|0)&3)<<8|We),+ft==0?Y(+(+je*5960464477539063e-23*+pt)):+ft==31?+je==1?+pt>0?Ie():fe():+pt>0?ye():me():Y(+(+je*Ke(2,+(+ft-25))*+(1024+pt))),le=le+3|0,0)}function Ft(he){return he=he|0,Oe(4)|0?1:(W(F[le+1|0]|0,F[le+2|0]|0,F[le+3|0]|0,F[le+4|0]|0),le=le+5|0,0)}function Mt(he){return he=he|0,Oe(8)|0?1:(X(F[le+1|0]|0,F[le+2|0]|0,F[le+3|0]|0,F[le+4|0]|0,F[le+5|0]|0,F[le+6|0]|0,F[le+7|0]|0,F[le+8|0]|0),le=le+9|0,0)}function et(he){return he=he|0,1}function Rt(he){return he=he|0,He(),le=le+1|0,0}var Nt=[ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,ae,se,ge,ue,pe,et,et,et,et,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,ee,j,J,re,Ae,et,et,et,et,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,de,Ee,ke,Re,qe,et,et,et,Ye,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Te,Je,it,ct,gt,et,et,et,ht,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,ze,dt,At,ot,tt,et,et,et,mt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,Et,yt,Bt,It,et,et,et,wt,ut,ut,ut,ut,ut,ut,at,at,at,at,at,at,at,at,at,at,at,at,at,at,at,at,at,at,Ct,vt,Qt,bt,et,et,et,et,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,_t,St,Dt,kt,xt,Tt,Ft,Mt,et,et,et,Rt];return{parse:lt}},utils$3={},constants$2={};const Bignumber$2=bignumber.exports.BigNumber;constants$2.MT={POS_INT:0,NEG_INT:1,BYTE_STRING:2,UTF8_STRING:3,ARRAY:4,MAP:5,TAG:6,SIMPLE_FLOAT:7};constants$2.TAG={DATE_STRING:0,DATE_EPOCH:1,POS_BIGINT:2,NEG_BIGINT:3,DECIMAL_FRAC:4,BIGFLOAT:5,BASE64URL_EXPECTED:21,BASE64_EXPECTED:22,BASE16_EXPECTED:23,CBOR:24,URI:32,BASE64URL:33,BASE64:34,REGEXP:35,MIME:36};constants$2.NUMBYTES={ZERO:0,ONE:24,TWO:25,FOUR:26,EIGHT:27,INDEFINITE:31};constants$2.SIMPLE={FALSE:20,TRUE:21,NULL:22,UNDEFINED:23};constants$2.SYMS={NULL:Symbol("null"),UNDEFINED:Symbol("undef"),PARENT:Symbol("parent"),BREAK:Symbol("break"),STREAM:Symbol("stream")};constants$2.SHIFT32=Math.pow(2,32);constants$2.SHIFT16=Math.pow(2,16);constants$2.MAX_SAFE_HIGH=2097151;constants$2.NEG_ONE=new Bignumber$2(-1);constants$2.TEN=new Bignumber$2(10);constants$2.TWO=new Bignumber$2(2);constants$2.PARENT={ARRAY:0,OBJECT:1,MAP:2,TAG:3,BYTE_STRING:4,UTF8_STRING:5};(function(D){const{Buffer:B}=buffer,w=bignumber.exports.BigNumber,Q=constants$2,F=Q.SHIFT32,O=Q.SHIFT16,L=2097151;D.parseHalf=function(q){var Y,W,X;return X=q[0]&128?-1:1,Y=(q[0]&124)>>2,W=(q[0]&3)<<8|q[1],Y?Y===31?X*(W?0/0:1/0):X*Math.pow(2,Y-25)*(1024+W):X*5960464477539063e-23*W};function G(U){return U<16?"0"+U.toString(16):U.toString(16)}D.arrayBufferToBignumber=function(U){const q=U.byteLength;let Y="";for(let W=0;W<q;W++)Y+=G(U[W]);return new w(Y,16)},D.buildMap=U=>{const q=new Map,Y=Object.keys(U),W=Y.length;for(let X=0;X<W;X++)q.set(Y[X],U[Y[X]]);return q},D.buildInt32=(U,q)=>U*O+q,D.buildInt64=(U,q,Y,W)=>{const X=D.buildInt32(U,q),te=D.buildInt32(Y,W);return X>L?new w(X).times(F).plus(te):X*F+te},D.writeHalf=function(q,Y){const W=B.allocUnsafe(4);W.writeFloatBE(Y,0);const X=W.readUInt32BE(0);if((X&8191)!==0)return!1;var te=X>>16&32768;const oe=X>>23&255,ne=X&8388607;if(oe>=113&&oe<=142)te+=(oe-112<<10)+(ne>>13);else if(oe>=103&&oe<113){if(ne&(1<<126-oe)-1)return!1;te+=ne+8388608>>126-oe}else return!1;return q.writeUInt16BE(te,0),!0},D.keySorter=function(U,q){var Y=U[0].byteLength,W=q[0].byteLength;return Y>W?1:W>Y?-1:U[0].compare(q[0])},D.isNegativeZero=U=>U===0&&1/U<0,D.nextPowerOf2=U=>{let q=0;if(U&&!(U&U-1))return U;for(;U!==0;)U>>=1,q+=1;return 1<<q}})(utils$3);const constants$1=constants$2,MT$1=constants$1.MT,SIMPLE=constants$1.SIMPLE,SYMS$1=constants$1.SYMS;class Simple$1{constructor(B){if(typeof B!="number")throw new Error("Invalid Simple type: "+typeof B);if(B<0||B>255||(B|0)!==B)throw new Error("value must be a small positive integer: "+B);this.value=B}toString(){return"simple("+this.value+")"}inspect(){return"simple("+this.value+")"}encodeCBOR(B){return B._pushInt(this.value,MT$1.SIMPLE_FLOAT)}static isSimple(B){return B instanceof Simple$1}static decode(B,w){switch(w==null&&(w=!0),B){case SIMPLE.FALSE:return!1;case SIMPLE.TRUE:return!0;case SIMPLE.NULL:return w?null:SYMS$1.NULL;case SIMPLE.UNDEFINED:return w?void 0:SYMS$1.UNDEFINED;case-1:if(!w)throw new Error("Invalid BREAK");return SYMS$1.BREAK;default:return new Simple$1(B)}}}var simple=Simple$1;class Tagged$1{constructor(B,w,Q){if(this.tag=B,this.value=w,this.err=Q,typeof this.tag!="number")throw new Error("Invalid tag type ("+typeof this.tag+")");if(this.tag<0||(this.tag|0)!==this.tag)throw new Error("Tag must be a positive integer: "+this.tag)}toString(){return`${this.tag}(${JSON.stringify(this.value)})`}encodeCBOR(B){return B._pushTag(this.tag),B.pushAny(this.value)}convert(B){var w,Q;if(Q=B!=null?B[this.tag]:void 0,typeof Q!="function"&&(Q=Tagged$1["_tag"+this.tag],typeof Q!="function"))return this;try{return Q.call(Tagged$1,this.value)}catch(F){return w=F,this.err=w,this}}}var tagged$1=Tagged$1;const defaultBase$1=self.location?self.location.protocol+"//"+self.location.host:"",URL$3=self.URL;class URLWithLegacySupport$2{constructor(B="",w=defaultBase$1){this.super=new URL$3(B,w),this.path=this.pathname+this.search,this.auth=this.username&&this.password?this.username+":"+this.password:null,this.query=this.search&&this.search.startsWith("?")?this.search.slice(1):null}get hash(){return this.super.hash}get host(){return this.super.host}get hostname(){return this.super.hostname}get href(){return this.super.href}get origin(){return this.super.origin}get password(){return this.super.password}get pathname(){return this.super.pathname}get port(){return this.super.port}get protocol(){return this.super.protocol}get search(){return this.super.search}get searchParams(){return this.super.searchParams}get username(){return this.super.username}set hash(B){this.super.hash=B}set host(B){this.super.host=B}set hostname(B){this.super.hostname=B}set href(B){this.super.href=B}set origin(B){this.super.origin=B}set password(B){this.super.password=B}set pathname(B){this.super.pathname=B}set port(B){this.super.port=B}set protocol(B){this.super.protocol=B}set search(B){this.super.search=B}set searchParams(B){this.super.searchParams=B}set username(B){this.super.username=B}createObjectURL(B){return this.super.createObjectURL(B)}revokeObjectURL(B){this.super.revokeObjectURL(B)}toJSON(){return this.super.toJSON()}toString(){return this.super.toString()}format(){return this.toString()}}function format$2(D){if(typeof D=="string")return new URL$3(D).toString();if(!(D instanceof URL$3)){const B=D.username&&D.password?`${D.username}:${D.password}@`:"",w=D.auth?D.auth+"@":"",Q=D.port?":"+D.port:"",F=D.protocol?D.protocol+"//":"",O=D.host||"",L=D.hostname||"",G=D.search||(D.query?"?"+D.query:""),U=D.hash||"",q=D.pathname||"",Y=D.path||q+G;return`${F}${B||w}${O||L+Q}${Y}${U}`}}var urlBrowser={URLWithLegacySupport:URLWithLegacySupport$2,URLSearchParams:self.URLSearchParams,defaultBase:defaultBase$1,format:format$2};const{URLWithLegacySupport:URLWithLegacySupport$1,format:format$1}=urlBrowser;var relative$1=(D,B={},w={},Q)=>{let F=B.protocol?B.protocol.replace(":",""):"http";F=(w[F]||Q||F)+":";let O;try{O=new URLWithLegacySupport$1(D)}catch{O={}}const L=Object.assign({},B,{protocol:F||O.protocol,host:B.host||O.host});return new URLWithLegacySupport$1(D,format$1(L)).toString()};const{URLWithLegacySupport,format,URLSearchParams:URLSearchParams$1,defaultBase}=urlBrowser,relative=relative$1;var isoUrl={URL:URLWithLegacySupport,URLSearchParams:URLSearchParams$1,format,relative,defaultBase};const{Buffer:Buffer$2}=buffer,ieee754=ieee754$1,Bignumber$1=bignumber.exports.BigNumber,parser=decoder_asm,utils$2=utils$3,c=constants$2,Simple=simple,Tagged=tagged$1,{URL:URL$2}=isoUrl;class Decoder$1{constructor(B){B=B||{},!B.size||B.size<65536?B.size=65536:B.size=utils$2.nextPowerOf2(B.size),this._heap=new ArrayBuffer(B.size),this._heap8=new Uint8Array(this._heap),this._buffer=Buffer$2.from(this._heap),this._reset(),this._knownTags=Object.assign({0:w=>new Date(w),1:w=>new Date(w*1e3),2:w=>utils$2.arrayBufferToBignumber(w),3:w=>c.NEG_ONE.minus(utils$2.arrayBufferToBignumber(w)),4:w=>c.TEN.pow(w[0]).times(w[1]),5:w=>c.TWO.pow(w[0]).times(w[1]),32:w=>new URL$2(w),35:w=>new RegExp(w)},B.tags),this.parser=parser({},{log:console.log.bind(console),pushInt:this.pushInt.bind(this),pushInt32:this.pushInt32.bind(this),pushInt32Neg:this.pushInt32Neg.bind(this),pushInt64:this.pushInt64.bind(this),pushInt64Neg:this.pushInt64Neg.bind(this),pushFloat:this.pushFloat.bind(this),pushFloatSingle:this.pushFloatSingle.bind(this),pushFloatDouble:this.pushFloatDouble.bind(this),pushTrue:this.pushTrue.bind(this),pushFalse:this.pushFalse.bind(this),pushUndefined:this.pushUndefined.bind(this),pushNull:this.pushNull.bind(this),pushInfinity:this.pushInfinity.bind(this),pushInfinityNeg:this.pushInfinityNeg.bind(this),pushNaN:this.pushNaN.bind(this),pushNaNNeg:this.pushNaNNeg.bind(this),pushArrayStart:this.pushArrayStart.bind(this),pushArrayStartFixed:this.pushArrayStartFixed.bind(this),pushArrayStartFixed32:this.pushArrayStartFixed32.bind(this),pushArrayStartFixed64:this.pushArrayStartFixed64.bind(this),pushObjectStart:this.pushObjectStart.bind(this),pushObjectStartFixed:this.pushObjectStartFixed.bind(this),pushObjectStartFixed32:this.pushObjectStartFixed32.bind(this),pushObjectStartFixed64:this.pushObjectStartFixed64.bind(this),pushByteString:this.pushByteString.bind(this),pushByteStringStart:this.pushByteStringStart.bind(this),pushUtf8String:this.pushUtf8String.bind(this),pushUtf8StringStart:this.pushUtf8StringStart.bind(this),pushSimpleUnassigned:this.pushSimpleUnassigned.bind(this),pushTagUnassigned:this.pushTagUnassigned.bind(this),pushTagStart:this.pushTagStart.bind(this),pushTagStart4:this.pushTagStart4.bind(this),pushTagStart8:this.pushTagStart8.bind(this),pushBreak:this.pushBreak.bind(this)},this._heap)}get _depth(){return this._parents.length}get _currentParent(){return this._parents[this._depth-1]}get _ref(){return this._currentParent.ref}_closeParent(){var B=this._parents.pop();if(B.length>0)throw new Error(`Missing ${B.length} elements`);switch(B.type){case c.PARENT.TAG:this._push(this.createTag(B.ref[0],B.ref[1]));break;case c.PARENT.BYTE_STRING:this._push(this.createByteString(B.ref,B.length));break;case c.PARENT.UTF8_STRING:this._push(this.createUtf8String(B.ref,B.length));break;case c.PARENT.MAP:if(B.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createMap(B.ref,B.length));break;case c.PARENT.OBJECT:if(B.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createObject(B.ref,B.length));break;case c.PARENT.ARRAY:this._push(this.createArray(B.ref,B.length));break}this._currentParent&&this._currentParent.type===c.PARENT.TAG&&this._dec()}_dec(){const B=this._currentParent;B.length<0||(B.length--,B.length===0&&this._closeParent())}_push(B,w){const Q=this._currentParent;switch(Q.values++,Q.type){case c.PARENT.ARRAY:case c.PARENT.BYTE_STRING:case c.PARENT.UTF8_STRING:Q.length>-1?this._ref[this._ref.length-Q.length]=B:this._ref.push(B),this._dec();break;case c.PARENT.OBJECT:Q.tmpKey!=null?(this._ref[Q.tmpKey]=B,Q.tmpKey=null,this._dec()):(Q.tmpKey=B,typeof Q.tmpKey!="string"&&(Q.type=c.PARENT.MAP,Q.ref=utils$2.buildMap(Q.ref)));break;case c.PARENT.MAP:Q.tmpKey!=null?(this._ref.set(Q.tmpKey,B),Q.tmpKey=null,this._dec()):Q.tmpKey=B;break;case c.PARENT.TAG:this._ref.push(B),w||this._dec();break;default:throw new Error("Unknown parent type")}}_createParent(B,w,Q){this._parents[this._depth]={type:w,length:Q,ref:B,values:0,tmpKey:null}}_reset(){this._res=[],this._parents=[{type:c.PARENT.ARRAY,length:-1,ref:this._res,values:0,tmpKey:null}]}createTag(B,w){const Q=this._knownTags[B];return Q?Q(w):new Tagged(B,w)}createMap(B,w){return B}createObject(B,w){return B}createArray(B,w){return B}createByteString(B,w){return Buffer$2.concat(B)}createByteStringFromHeap(B,w){return B===w?Buffer$2.alloc(0):Buffer$2.from(this._heap.slice(B,w))}createInt(B){return B}createInt32(B,w){return utils$2.buildInt32(B,w)}createInt64(B,w,Q,F){return utils$2.buildInt64(B,w,Q,F)}createFloat(B){return B}createFloatSingle(B,w,Q,F){return ieee754.read([B,w,Q,F],0,!1,23,4)}createFloatDouble(B,w,Q,F,O,L,G,U){return ieee754.read([B,w,Q,F,O,L,G,U],0,!1,52,8)}createInt32Neg(B,w){return-1-utils$2.buildInt32(B,w)}createInt64Neg(B,w,Q,F){const O=utils$2.buildInt32(B,w),L=utils$2.buildInt32(Q,F);return O>c.MAX_SAFE_HIGH?c.NEG_ONE.minus(new Bignumber$1(O).times(c.SHIFT32).plus(L)):-1-(O*c.SHIFT32+L)}createTrue(){return!0}createFalse(){return!1}createNull(){return null}createUndefined(){}createInfinity(){return 1/0}createInfinityNeg(){return-1/0}createNaN(){return NaN}createNaNNeg(){return NaN}createUtf8String(B,w){return B.join("")}createUtf8StringFromHeap(B,w){return B===w?"":this._buffer.toString("utf8",B,w)}createSimpleUnassigned(B){return new Simple(B)}pushInt(B){this._push(this.createInt(B))}pushInt32(B,w){this._push(this.createInt32(B,w))}pushInt64(B,w,Q,F){this._push(this.createInt64(B,w,Q,F))}pushFloat(B){this._push(this.createFloat(B))}pushFloatSingle(B,w,Q,F){this._push(this.createFloatSingle(B,w,Q,F))}pushFloatDouble(B,w,Q,F,O,L,G,U){this._push(this.createFloatDouble(B,w,Q,F,O,L,G,U))}pushInt32Neg(B,w){this._push(this.createInt32Neg(B,w))}pushInt64Neg(B,w,Q,F){this._push(this.createInt64Neg(B,w,Q,F))}pushTrue(){this._push(this.createTrue())}pushFalse(){this._push(this.createFalse())}pushNull(){this._push(this.createNull())}pushUndefined(){this._push(this.createUndefined())}pushInfinity(){this._push(this.createInfinity())}pushInfinityNeg(){this._push(this.createInfinityNeg())}pushNaN(){this._push(this.createNaN())}pushNaNNeg(){this._push(this.createNaNNeg())}pushArrayStart(){this._createParent([],c.PARENT.ARRAY,-1)}pushArrayStartFixed(B){this._createArrayStartFixed(B)}pushArrayStartFixed32(B,w){const Q=utils$2.buildInt32(B,w);this._createArrayStartFixed(Q)}pushArrayStartFixed64(B,w,Q,F){const O=utils$2.buildInt64(B,w,Q,F);this._createArrayStartFixed(O)}pushObjectStart(){this._createObjectStartFixed(-1)}pushObjectStartFixed(B){this._createObjectStartFixed(B)}pushObjectStartFixed32(B,w){const Q=utils$2.buildInt32(B,w);this._createObjectStartFixed(Q)}pushObjectStartFixed64(B,w,Q,F){const O=utils$2.buildInt64(B,w,Q,F);this._createObjectStartFixed(O)}pushByteStringStart(){this._parents[this._depth]={type:c.PARENT.BYTE_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushByteString(B,w){this._push(this.createByteStringFromHeap(B,w))}pushUtf8StringStart(){this._parents[this._depth]={type:c.PARENT.UTF8_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushUtf8String(B,w){this._push(this.createUtf8StringFromHeap(B,w))}pushSimpleUnassigned(B){this._push(this.createSimpleUnassigned(B))}pushTagStart(B){this._parents[this._depth]={type:c.PARENT.TAG,length:1,ref:[B]}}pushTagStart4(B,w){this.pushTagStart(utils$2.buildInt32(B,w))}pushTagStart8(B,w,Q,F){this.pushTagStart(utils$2.buildInt64(B,w,Q,F))}pushTagUnassigned(B){this._push(this.createTag(B))}pushBreak(){if(this._currentParent.length>-1)throw new Error("Unexpected break");this._closeParent()}_createObjectStartFixed(B){if(B===0){this._push(this.createObject({}));return}this._createParent({},c.PARENT.OBJECT,B)}_createArrayStartFixed(B){if(B===0){this._push(this.createArray([]));return}this._createParent(new Array(B),c.PARENT.ARRAY,B)}_decode(B){if(B.byteLength===0)throw new Error("Input too short");this._reset(),this._heap8.set(B);const w=this.parser.parse(B.byteLength);if(this._depth>1){for(;this._currentParent.length===0;)this._closeParent();if(this._depth>1)throw new Error("Undeterminated nesting")}if(w>0)throw new Error("Failed to parse");if(this._res.length===0)throw new Error("No valid result")}decodeFirst(B){return this._decode(B),this._res[0]}decodeAll(B){return this._decode(B),this._res}static decode(B,w){return typeof B=="string"&&(B=Buffer$2.from(B,w||"hex")),new Decoder$1({size:B.length}).decodeFirst(B)}static decodeAll(B,w){return typeof B=="string"&&(B=Buffer$2.from(B,w||"hex")),new Decoder$1({size:B.length}).decodeAll(B)}}Decoder$1.decodeFirst=Decoder$1.decode;var decoder=Decoder$1;const{Buffer:Buffer$1}=buffer,Decoder=decoder,utils$1=utils$3;class Diagnose extends Decoder{createTag(B,w){return`${B}(${w})`}createInt(B){return super.createInt(B).toString()}createInt32(B,w){return super.createInt32(B,w).toString()}createInt64(B,w,Q,F){return super.createInt64(B,w,Q,F).toString()}createInt32Neg(B,w){return super.createInt32Neg(B,w).toString()}createInt64Neg(B,w,Q,F){return super.createInt64Neg(B,w,Q,F).toString()}createTrue(){return"true"}createFalse(){return"false"}createFloat(B){const w=super.createFloat(B);return utils$1.isNegativeZero(B)?"-0_1":`${w}_1`}createFloatSingle(B,w,Q,F){return`${super.createFloatSingle(B,w,Q,F)}_2`}createFloatDouble(B,w,Q,F,O,L,G,U){return`${super.createFloatDouble(B,w,Q,F,O,L,G,U)}_3`}createByteString(B,w){const Q=B.join(", ");return w===-1?`(_ ${Q})`:`h'${Q}`}createByteStringFromHeap(B,w){return`h'${Buffer$1.from(super.createByteStringFromHeap(B,w)).toString("hex")}'`}createInfinity(){return"Infinity_1"}createInfinityNeg(){return"-Infinity_1"}createNaN(){return"NaN_1"}createNaNNeg(){return"-NaN_1"}createNull(){return"null"}createUndefined(){return"undefined"}createSimpleUnassigned(B){return`simple(${B})`}createArray(B,w){const Q=super.createArray(B,w);return w===-1?`[_ ${Q.join(", ")}]`:`[${Q.join(", ")}]`}createMap(B,w){const Q=super.createMap(B),F=Array.from(Q.keys()).reduce(collectObject(Q),"");return w===-1?`{_ ${F}}`:`{${F}}`}createObject(B,w){const Q=super.createObject(B),F=Object.keys(Q).reduce(collectObject(Q),"");return w===-1?`{_ ${F}}`:`{${F}}`}createUtf8String(B,w){const Q=B.join(", ");return w===-1?`(_ ${Q})`:`"${Q}"`}createUtf8StringFromHeap(B,w){return`"${Buffer$1.from(super.createUtf8StringFromHeap(B,w)).toString("utf8")}"`}static diagnose(B,w){return typeof B=="string"&&(B=Buffer$1.from(B,w||"hex")),new Diagnose().decodeFirst(B)}}var diagnose=Diagnose;function collectObject(D){return(B,w)=>B?`${B}, ${w}: ${D[w]}`:`${w}: ${D[w]}`}const{Buffer}=buffer,{URL:URL$1}=isoUrl,Bignumber=bignumber.exports.BigNumber,utils=utils$3,constants=constants$2,MT=constants.MT,NUMBYTES=constants.NUMBYTES,SHIFT32=constants.SHIFT32,SYMS=constants.SYMS,TAG=constants.TAG,HALF=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.TWO,FLOAT=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.FOUR,DOUBLE=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.EIGHT,TRUE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.TRUE,FALSE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.FALSE,UNDEFINED=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.UNDEFINED,NULL=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.NULL,MAXINT_BN=new Bignumber("0x20000000000000"),BUF_NAN=Buffer.from("f97e00","hex"),BUF_INF_NEG=Buffer.from("f9fc00","hex"),BUF_INF_POS=Buffer.from("f97c00","hex");function toType(D){return{}.toString.call(D).slice(8,-1)}class Encoder{constructor(B){B=B||{},this.streaming=typeof B.stream=="function",this.onData=B.stream,this.semanticTypes=[[URL$1,this._pushUrl],[Bignumber,this._pushBigNumber]];const w=B.genTypes||[],Q=w.length;for(let F=0;F<Q;F++)this.addSemanticType(w[F][0],w[F][1]);this._reset()}addSemanticType(B,w){const Q=this.semanticTypes.length;for(let F=0;F<Q;F++)if(this.semanticTypes[F][0]===B){const L=this.semanticTypes[F][1];return this.semanticTypes[F][1]=w,L}return this.semanticTypes.push([B,w]),null}push(B){return B&&(this.result[this.offset]=B,this.resultMethod[this.offset]=0,this.resultLength[this.offset]=B.length,this.offset++,this.streaming&&this.onData(this.finalize())),!0}pushWrite(B,w,Q){return this.result[this.offset]=B,this.resultMethod[this.offset]=w,this.resultLength[this.offset]=Q,this.offset++,this.streaming&&this.onData(this.finalize()),!0}_pushUInt8(B){return this.pushWrite(B,1,1)}_pushUInt16BE(B){return this.pushWrite(B,2,2)}_pushUInt32BE(B){return this.pushWrite(B,3,4)}_pushDoubleBE(B){return this.pushWrite(B,4,8)}_pushNaN(){return this.push(BUF_NAN)}_pushInfinity(B){const w=B<0?BUF_INF_NEG:BUF_INF_POS;return this.push(w)}_pushFloat(B){const w=Buffer.allocUnsafe(2);if(utils.writeHalf(w,B)&&utils.parseHalf(w)===B)return this._pushUInt8(HALF)&&this.push(w);const Q=Buffer.allocUnsafe(4);return Q.writeFloatBE(B,0),Q.readFloatBE(0)===B?this._pushUInt8(FLOAT)&&this.push(Q):this._pushUInt8(DOUBLE)&&this._pushDoubleBE(B)}_pushInt(B,w,Q){const F=w<<5;return B<24?this._pushUInt8(F|B):B<=255?this._pushUInt8(F|NUMBYTES.ONE)&&this._pushUInt8(B):B<=65535?this._pushUInt8(F|NUMBYTES.TWO)&&this._pushUInt16BE(B):B<=4294967295?this._pushUInt8(F|NUMBYTES.FOUR)&&this._pushUInt32BE(B):B<=Number.MAX_SAFE_INTEGER?this._pushUInt8(F|NUMBYTES.EIGHT)&&this._pushUInt32BE(Math.floor(B/SHIFT32))&&this._pushUInt32BE(B%SHIFT32):w===MT.NEG_INT?this._pushFloat(Q):this._pushFloat(B)}_pushIntNum(B){return B<0?this._pushInt(-B-1,MT.NEG_INT,B):this._pushInt(B,MT.POS_INT)}_pushNumber(B){switch(!1){case B===B:return this._pushNaN(B);case isFinite(B):return this._pushInfinity(B);case B%1!==0:return this._pushIntNum(B);default:return this._pushFloat(B)}}_pushString(B){const w=Buffer.byteLength(B,"utf8");return this._pushInt(w,MT.UTF8_STRING)&&this.pushWrite(B,5,w)}_pushBoolean(B){return this._pushUInt8(B?TRUE:FALSE)}_pushUndefined(B){return this._pushUInt8(UNDEFINED)}_pushArray(B,w){const Q=w.length;if(!B._pushInt(Q,MT.ARRAY))return!1;for(let F=0;F<Q;F++)if(!B.pushAny(w[F]))return!1;return!0}_pushTag(B){return this._pushInt(B,MT.TAG)}_pushDate(B,w){return B._pushTag(TAG.DATE_EPOCH)&&B.pushAny(Math.round(w/1e3))}_pushBuffer(B,w){return B._pushInt(w.length,MT.BYTE_STRING)&&B.push(w)}_pushNoFilter(B,w){return B._pushBuffer(B,w.slice())}_pushRegexp(B,w){return B._pushTag(TAG.REGEXP)&&B.pushAny(w.source)}_pushSet(B,w){if(!B._pushInt(w.size,MT.ARRAY))return!1;for(const Q of w)if(!B.pushAny(Q))return!1;return!0}_pushUrl(B,w){return B._pushTag(TAG.URI)&&B.pushAny(w.format())}_pushBigint(B){let w=TAG.POS_BIGINT;B.isNegative()&&(B=B.negated().minus(1),w=TAG.NEG_BIGINT);let Q=B.toString(16);Q.length%2&&(Q="0"+Q);const F=Buffer.from(Q,"hex");return this._pushTag(w)&&this._pushBuffer(this,F)}_pushBigNumber(B,w){if(w.isNaN())return B._pushNaN();if(!w.isFinite())return B._pushInfinity(w.isNegative()?-1/0:1/0);if(w.isInteger())return B._pushBigint(w);if(!(B._pushTag(TAG.DECIMAL_FRAC)&&B._pushInt(2,MT.ARRAY)))return!1;const Q=w.decimalPlaces(),F=w.multipliedBy(new Bignumber(10).pow(Q));return B._pushIntNum(-Q)?F.abs().isLessThan(MAXINT_BN)?B._pushIntNum(F.toNumber()):B._pushBigint(F):!1}_pushMap(B,w){return B._pushInt(w.size,MT.MAP)?this._pushRawMap(w.size,Array.from(w)):!1}_pushObject(B){if(!B)return this._pushUInt8(NULL);for(var w=this.semanticTypes.length,Q=0;Q<w;Q++)if(B instanceof this.semanticTypes[Q][0])return this.semanticTypes[Q][1].call(B,this,B);var F=B.encodeCBOR;if(typeof F=="function")return F.call(B,this);var O=Object.keys(B),L=O.length;return this._pushInt(L,MT.MAP)?this._pushRawMap(L,O.map(G=>[G,B[G]])):!1}_pushRawMap(B,w){w=w.map(function(F){return F[0]=Encoder.encode(F[0]),F}).sort(utils.keySorter);for(var Q=0;Q<B;Q++)if(!this.push(w[Q][0])||!this.pushAny(w[Q][1]))return!1;return!0}write(B){return this.pushAny(B)}pushAny(B){var w=toType(B);switch(w){case"Number":return this._pushNumber(B);case"String":return this._pushString(B);case"Boolean":return this._pushBoolean(B);case"Object":return this._pushObject(B);case"Array":return this._pushArray(this,B);case"Uint8Array":return this._pushBuffer(this,Buffer.isBuffer(B)?B:Buffer.from(B));case"Null":return this._pushUInt8(NULL);case"Undefined":return this._pushUndefined(B);case"Map":return this._pushMap(this,B);case"Set":return this._pushSet(this,B);case"URL":return this._pushUrl(this,B);case"BigNumber":return this._pushBigNumber(this,B);case"Date":return this._pushDate(this,B);case"RegExp":return this._pushRegexp(this,B);case"Symbol":switch(B){case SYMS.NULL:return this._pushObject(null);case SYMS.UNDEFINED:return this._pushUndefined(void 0);default:throw new Error("Unknown symbol: "+B.toString())}default:throw new Error("Unknown type: "+typeof B+", "+(B?B.toString():""))}}finalize(){if(this.offset===0)return null;for(var B=this.result,w=this.resultLength,Q=this.resultMethod,F=this.offset,O=0,L=0;L<F;L++)O+=w[L];var G=Buffer.allocUnsafe(O),U=0,q=0;for(L=0;L<F;L++){switch(q=w[L],Q[L]){case 0:B[L].copy(G,U);break;case 1:G.writeUInt8(B[L],U,!0);break;case 2:G.writeUInt16BE(B[L],U,!0);break;case 3:G.writeUInt32BE(B[L],U,!0);break;case 4:G.writeDoubleBE(B[L],U,!0);break;case 5:G.write(B[L],U,q,"utf8");break;default:throw new Error("unkown method")}U+=q}var Y=G;return this._reset(),Y}_reset(){this.result=[],this.resultMethod=[],this.resultLength=[],this.offset=0}static encode(B){const w=new Encoder;if(!w.pushAny(B))throw new Error("Failed to encode input");return w.finalize()}}var encoder=Encoder;(function(D){D.Diagnose=diagnose,D.Decoder=decoder,D.Encoder=encoder,D.Simple=simple,D.Tagged=tagged$1,D.decodeAll=D.Decoder.decodeAll,D.decodeFirst=D.Decoder.decodeFirst,D.diagnose=D.Diagnose.diagnose,D.encode=D.Encoder.encode,D.decode=D.Decoder.decode,D.leveldb={decode:D.Decoder.decodeAll,encode:D.Encoder.encode,buffer:!0,name:"cbor"}})(src$1);function concat(...D){const B=new Uint8Array(D.reduce((Q,F)=>Q+F.byteLength,0));let w=0;for(const Q of D)B.set(new Uint8Array(Q),w),w+=Q.byteLength;return B.buffer}const hexRe=new RegExp(/^([0-9A-F]{2})*$/i);function fromHex(D){if(!hexRe.test(D))throw new Error("Invalid hexadecimal string.");const B=[...D].reduce((w,Q,F)=>(w[F/2|0]=(w[F/2|0]||"")+Q,w),[]).map(w=>Number.parseInt(w,16));return new Uint8Array(B).buffer}globalThis&&globalThis.__rest;new TextEncoder().encode(`
ic-request`);var src={},serializer$1={},value={};Object.defineProperty(value,"__esModule",{value:!0});const MAX_U64_NUMBER=9007199254740992;function _concat(D,...B){const w=new Uint8Array(D.byteLength+B.reduce((F,O)=>F+O.byteLength,0));w.set(new Uint8Array(D),0);let Q=D.byteLength;for(const F of B)w.set(new Uint8Array(F),Q),Q+=F.byteLength;return w.buffer}function _serializeValue(D,B,w){w=w.replace(/[^0-9a-fA-F]/g,"");const Q=2**(B-24);w=w.slice(-Q*2).padStart(Q*2,"0");const F=[(D<<5)+B].concat(w.match(/../g).map(O=>parseInt(O,16)));return new Uint8Array(F).buffer}function _serializeNumber(D,B){if(B<24)return new Uint8Array([(D<<5)+B]).buffer;{const w=B<=255?24:B<=65535?25:B<=4294967295?26:27;return _serializeValue(D,w,B.toString(16))}}function _serializeString(D){const B=[];for(let w=0;w<D.length;w++){let Q=D.charCodeAt(w);Q<128?B.push(Q):Q<2048?B.push(192|Q>>6,128|Q&63):Q<55296||Q>=57344?B.push(224|Q>>12,128|Q>>6&63,128|Q&63):(w++,Q=(Q&1023)<<10|D.charCodeAt(w)&1023,B.push(240|Q>>18,128|Q>>12&63,128|Q>>6&63,128|Q&63))}return _concat(new Uint8Array(_serializeNumber(3,D.length)),new Uint8Array(B))}function tagged(D,B){if(D==14277111)return _concat(new Uint8Array([217,217,247]),B);if(D<24)return _concat(new Uint8Array([(6<<5)+D]),B);{const w=D<=255?24:D<=65535?25:D<=4294967295?26:27,Q=2**(w-24),F=D.toString(16).slice(-Q*2).padStart(Q*2,"0"),O=[(6<<5)+w].concat(F.match(/../g).map(L=>parseInt(L,16)));return new Uint8Array(O).buffer}}value.tagged=tagged;function raw(D){return new Uint8Array(D).buffer}value.raw=raw;function uSmall(D){if(isNaN(D))throw new RangeError("Invalid number.");D=Math.min(Math.max(0,D),23);const B=[(0<<5)+D];return new Uint8Array(B).buffer}value.uSmall=uSmall;function u8(D,B){if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,D),255),D=D.toString(16),_serializeValue(0,24,D)}value.u8=u8;function u16(D,B){if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,D),65535),D=D.toString(16),_serializeValue(0,25,D)}value.u16=u16;function u32(D,B){if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,D),4294967295),D=D.toString(16),_serializeValue(0,26,D)}value.u32=u32;function u64(D,B){if(typeof D=="string"&&B==16){if(D.match(/[^0-9a-fA-F]/))throw new RangeError("Invalid number.");return _serializeValue(0,27,D)}if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,D),MAX_U64_NUMBER),D=D.toString(16),_serializeValue(0,27,D)}value.u64=u64;function iSmall(D){if(isNaN(D))throw new RangeError("Invalid number.");if(D===0)return uSmall(0);D=Math.min(Math.max(0,-D),24)-1;const B=[(1<<5)+D];return new Uint8Array(B).buffer}value.iSmall=iSmall;function i8(D,B){if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,-D-1),255),D=D.toString(16),_serializeValue(1,24,D)}value.i8=i8;function i16(D,B){if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,-D-1),65535),D=D.toString(16),_serializeValue(1,25,D)}value.i16=i16;function i32(D,B){if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,-D-1),4294967295),D=D.toString(16),_serializeValue(1,26,D)}value.i32=i32;function i64(D,B){if(typeof D=="string"&&B==16){if(D.startsWith("-")?D=D.slice(1):D="0",D.match(/[^0-9a-fA-F]/)||D.length>16)throw new RangeError("Invalid number.");let w=!1,Q=D.split("").reduceRight((F,O)=>{if(w)return O+F;let L=parseInt(O,16)-1;return L>=0?(w=!0,L.toString(16)+F):"f"+F},"");return w?_serializeValue(1,27,Q):u64(0)}if(D=parseInt(""+D,B),isNaN(D))throw new RangeError("Invalid number.");return D=Math.min(Math.max(0,-D-1),9007199254740992),D=D.toString(16),_serializeValue(1,27,D)}value.i64=i64;function number(D){return D>=0?D<24?uSmall(D):D<=255?u8(D):D<=65535?u16(D):D<=4294967295?u32(D):u64(D):D>=-24?iSmall(D):D>=-255?i8(D):D>=-65535?i16(D):D>=-4294967295?i32(D):i64(D)}value.number=number;function bytes(D){return _concat(_serializeNumber(2,D.byteLength),D)}value.bytes=bytes;function string(D){return _serializeString(D)}value.string=string;function array(D){return _concat(_serializeNumber(4,D.length),...D)}value.array=array;function map(D,B=!1){D instanceof Map||(D=new Map(Object.entries(D)));let w=Array.from(D.entries());return B&&(w=w.sort(([Q],[F])=>Q.localeCompare(F))),_concat(_serializeNumber(5,D.size),...w.map(([Q,F])=>_concat(_serializeString(Q),F)))}value.map=map;function singleFloat(D){const B=new Float32Array([D]);return _concat(new Uint8Array([(7<<5)+26]),new Uint8Array(B.buffer))}value.singleFloat=singleFloat;function doubleFloat(D){const B=new Float64Array([D]);return _concat(new Uint8Array([(7<<5)+27]),new Uint8Array(B.buffer))}value.doubleFloat=doubleFloat;function bool(D){return D?true_():false_()}value.bool=bool;function true_(){return raw(new Uint8Array([(7<<5)+21]))}value.true_=true_;function false_(){return raw(new Uint8Array([(7<<5)+20]))}value.false_=false_;function null_(){return raw(new Uint8Array([(7<<5)+22]))}value.null_=null_;function undefined_(){return raw(new Uint8Array([(7<<5)+23]))}value.undefined_=undefined_;var __importStar=commonjsGlobal&&commonjsGlobal.__importStar||function(D){if(D&&D.__esModule)return D;var B={};if(D!=null)for(var w in D)Object.hasOwnProperty.call(D,w)&&(B[w]=D[w]);return B.default=D,B};Object.defineProperty(serializer$1,"__esModule",{value:!0});const cbor=__importStar(value),BufferClasses=[ArrayBuffer,Uint8Array,Uint16Array,Uint32Array,Int8Array,Int16Array,Int32Array,Float32Array,Float64Array];class JsonDefaultCborEncoder{constructor(B,w=!1){this._serializer=B,this._stable=w,this.name="jsonDefault",this.priority=-100}match(B){return["undefined","boolean","number","string","object"].indexOf(typeof B)!=-1}encode(B){switch(typeof B){case"undefined":return cbor.undefined_();case"boolean":return cbor.bool(B);case"number":return Math.floor(B)===B?cbor.number(B):cbor.doubleFloat(B);case"string":return cbor.string(B);case"object":if(B===null)return cbor.null_();if(Array.isArray(B))return cbor.array(B.map(w=>this._serializer.serializeValue(w)));if(BufferClasses.find(w=>B instanceof w))return cbor.bytes(B.buffer);if(Object.getOwnPropertyNames(B).indexOf("toJSON")!==-1)return this.encode(B.toJSON());if(B instanceof Map){const w=new Map;for(const[Q,F]of B.entries())w.set(Q,this._serializer.serializeValue(F));return cbor.map(w,this._stable)}else{const w=new Map;for(const[Q,F]of Object.entries(B))w.set(Q,this._serializer.serializeValue(F));return cbor.map(w,this._stable)}default:throw new Error("Invalid value.")}}}serializer$1.JsonDefaultCborEncoder=JsonDefaultCborEncoder;class ToCborEncoder{constructor(){this.name="cborEncoder",this.priority=-90}match(B){return typeof B=="object"&&typeof B.toCBOR=="function"}encode(B){return B.toCBOR()}}serializer$1.ToCborEncoder=ToCborEncoder;class CborSerializer{constructor(){this._encoders=new Set}static withDefaultEncoders(B=!1){const w=new this;return w.addEncoder(new JsonDefaultCborEncoder(w,B)),w.addEncoder(new ToCborEncoder),w}removeEncoder(B){for(const w of this._encoders.values())w.name==B&&this._encoders.delete(w)}addEncoder(B){this._encoders.add(B)}getEncoderFor(B){let w=null;for(const Q of this._encoders)(!w||Q.priority>w.priority)&&Q.match(B)&&(w=Q);if(w===null)throw new Error("Could not find an encoder for value.");return w}serializeValue(B){return this.getEncoderFor(B).encode(B)}serialize(B){return this.serializeValue(B)}}serializer$1.CborSerializer=CborSerializer;class SelfDescribeCborSerializer extends CborSerializer{serialize(B){return cbor.raw(new Uint8Array([...new Uint8Array([217,217,247]),...new Uint8Array(super.serializeValue(B))]))}}serializer$1.SelfDescribeCborSerializer=SelfDescribeCborSerializer;(function(D){function B(F){for(var O in F)D.hasOwnProperty(O)||(D[O]=F[O])}var w=commonjsGlobal&&commonjsGlobal.__importStar||function(F){if(F&&F.__esModule)return F;var O={};if(F!=null)for(var L in F)Object.hasOwnProperty.call(F,L)&&(O[L]=F[L]);return O.default=F,O};Object.defineProperty(D,"__esModule",{value:!0}),B(serializer$1);const Q=w(value);D.value=Q})(src);class PrincipalEncoder{get name(){return"Principal"}get priority(){return 0}match(B){return B&&B._isPrincipal===!0}encode(B){return src.value.bytes(B.toUint8Array())}}class BufferEncoder{get name(){return"Buffer"}get priority(){return 1}match(B){return B instanceof ArrayBuffer||ArrayBuffer.isView(B)}encode(B){return src.value.bytes(new Uint8Array(B))}}class BigIntEncoder{get name(){return"BigInt"}get priority(){return 1}match(B){return typeof B=="bigint"}encode(B){return B>BigInt(0)?src.value.tagged(2,src.value.bytes(fromHex(B.toString(16)))):src.value.tagged(3,src.value.bytes(fromHex((BigInt("-1")*B).toString(16))))}}const serializer=src.SelfDescribeCborSerializer.withDefaultEncoders(!0);serializer.addEncoder(new PrincipalEncoder);serializer.addEncoder(new BufferEncoder);serializer.addEncoder(new BigIntEncoder);var CborTag;(function(D){D[D.Uint64LittleEndian=71]="Uint64LittleEndian",D[D.Semantic=55799]="Semantic"})(CborTag||(CborTag={}));class Uint8ArrayDecoder extends src$1.Decoder{createByteString(B){return concat(...B)}createByteStringFromHeap(B,w){return B===w?new ArrayBuffer(0):new Uint8Array(this._heap.slice(B,w))}}var SubmitRequestType;(function(D){D.Call="call"})(SubmitRequestType||(SubmitRequestType={}));BigInt(1e6);BigInt(60*1e3);var RequestStatusResponseStatus;(function(D){D.Received="received",D.Processing="processing",D.Replied="replied",D.Rejected="rejected",D.Unknown="unknown",D.Done="done"})(RequestStatusResponseStatus||(RequestStatusResponseStatus={}));var ProxyMessageKind;(function(D){D.Error="err",D.GetPrincipal="gp",D.GetPrincipalResponse="gpr",D.Query="q",D.QueryResponse="qr",D.Call="c",D.CallResponse="cr",D.ReadState="rs",D.ReadStateResponse="rsr",D.Status="s",D.StatusResponse="sr"})(ProxyMessageKind||(ProxyMessageKind={}));var decode;(function(){for(var D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B=new Uint8Array(256),w=0;w<D.length;w++)B[D.charCodeAt(w)]=w;decode=function(Q){var F=Q.length*.75,O=Q.length,L,G=0,U,q,Y,W;Q[Q.length-1]==="="&&(F--,Q[Q.length-2]==="="&&F--);var X=new ArrayBuffer(F),te=new Uint8Array(X);for(L=0;L<O;L+=4)U=B[Q.charCodeAt(L)],q=B[Q.charCodeAt(L+1)],Y=B[Q.charCodeAt(L+2)],W=B[Q.charCodeAt(L+3)],te[G++]=U<<2|q>>4,te[G++]=(q&15)<<4|Y>>2,te[G++]=(Y&3)<<6|W&63;return X}})();const wasmBytesBase64="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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";decode(wasmBytesBase64);fromHex("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");var CanisterInstallMode;(function(D){D.Install="install",D.Reinstall="reinstall",D.Upgrade="upgrade"})(CanisterInstallMode||(CanisterInstallMode={}));var mainScreenOpen=!1;class mintingScreen extends HTMLElement{constructor(){super();Ze(this,"toggleNftScreen",()=>{var w=this.shadow.getElementById("mainScreen"),Q=this.shadow.getElementById("svgBox"),F=document.getElementById("universe"),O=document.getElementById("getUniMenu").shadowRoot;if(w.style.transition="1s all",Q.style.display="block",Q.style.transition=".5s all",F.style.transition="1s all",mainScreenOpen===!1){F.style.filter="blur(5px)",O.getElementById("uniMenu").style.filter="blur(10px)",document.getElementById("selection").style.filter="blur(10px)",w.style.display="grid",setTimeout(()=>{w.style.opacity="100%",mainScreenOpen=!0},200);return}else{Q.style.display="none",O.getElementById("uniMenu").style.filter="blur(0px)",document.getElementById("selection").style.filter="blur(0px)",O.getElementById("nftShop").style.opacity="80%",F.style.filter="blur(0px)",w.style.opacity="0%",setTimeout(()=>{w.style.display="none",mainScreenOpen=!1},1e3);return}});Ze(this,"goGetPlug",()=>{var w;(w=window.open("https://plugwallet.ooo/","_blank"))==null||w.focus()});Ze(this,"reacc",()=>{var w=this.shadow.getElementById("videoM");w.style.transition="5s all",w.play(),w.style.display="block",setTimeout(()=>{w.style.opacity="100%"},500),setTimeout(()=>{document.getElementById("getUniMenu").toggleMenu(),document.getElementById("getNfts").toggleNftScreen()},5e3),w.onended=function(){document.getElementById("updatesModal").style.display="block",w.style.transition="1s all",w.style.opacity="0%",setTimeout(()=>{w.style.display="none"},1e3)}});Ze(this,"reload",()=>{});Ze(this,"pillSelection",w=>{var Q=String(w.target.id),F=this.shadow.querySelectorAll(".pills"),O=this.shadow.getElementById("desc"),L=this.shadow.getElementById("cost"),G=this.shadow.getElementById("button"),U=this.shadow.getElementById("mintButton"),q=this.shadow.getElementById("mainScreen");q.style.transition="1s all";var Y={red:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png",black:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png",blue:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"};switch(Q){case"red":F[0].src=Y.blue,F[1].src=Y.red,F[2].src=Y.black,F[0].setAttribute("id","blue"),F[1].setAttribute("id","red"),F[2].setAttribute("id","black"),O.innerHTML="YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.",L.innerHTML="IT\u2019LL COST YOU 10 [ICP].",G.innerHTML="UNAVAILABLE",G.style.color="#ff002d",U.style.backgroundColor="black",U.style.border="1px solid black",q.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",q.style.backgroundColor="rgba(145,212,202,.4)";break;case"black":F[0].src=Y.red,F[1].src=Y.black,F[2].src=Y.blue,F[0].setAttribute("id","red"),F[1].setAttribute("id","black"),F[2].setAttribute("id","blue"),O.innerHTML="A GIFT FROM THE ORACLE'S",L.innerHTML="IT WONT COST YOU A THING.",G.innerHTML="TAKE IT",this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this)),G.style.color="",U.style.border="",U.style.backgroundColor="",q.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",q.style.backgroundColor="rgba(0,0,0,.4)";break;case"blue":F[0].src=Y.black,F[1].src=Y.blue,F[2].src=Y.red,F[0].setAttribute("id","black"),F[1].setAttribute("id","blue"),F[2].setAttribute("id","red"),O.innerHTML="THIS IS WHAT YOU'LL NEED TO REMEMBER.",L.innerHTML="IT\u2019LL COST YOU 5 [ICP].",G.innerHTML="UNAVAILABLE",G.style.color="#ff002d",U.style.backgroundColor="black",U.style.border="none",q.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",q.style.backgroundColor="rgba(164,219,251,.4)";break}});this.shadow=this.attachShadow({mode:"open"})}get nft(){return this.getAttribute("mint")}set nft(w){this.setAttribute("mint",w)}static get observedAttributes(){return["mint"]}attributeChangedCallback(w,Q,F){w==="mint"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("svgBox").addEventListener("click",this.toggleNftScreen.bind(this)),this.shadow.querySelectorAll(".pills").forEach(w=>{w.addEventListener("click",this.pillSelection)}),this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this))}render(){this.shadow.innerHTML=`
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
*/var _trimExp=/(?:^\s+|\s+$)/g,emojiExp=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function getText(D){var B=D.nodeType,w="";if(B===1||B===9||B===11){if(typeof D.textContent=="string")return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)w+=getText(D)}else if(B===3||B===4)return D.nodeValue;return w}function splitInnerHTML(D,B,w,Q){for(var F=D.firstChild,O=[],L;F;)F.nodeType===3?(L=(F.nodeValue+"").replace(/^\n+/g,""),Q||(L=L.replace(/\s+/g," ")),O.push.apply(O,emojiSafeSplit(L,B,w,Q))):(F.nodeName+"").toLowerCase()==="br"?O[O.length-1]+="<br>":O.push(F.outerHTML),F=F.nextSibling;for(L=O.length;L--;)O[L]==="&"&&O.splice(L,1,"&amp;");return O}function emojiSafeSplit(D,B,w,Q){if(D+="",w&&(D=D.trim?D.trim():D.replace(_trimExp,"")),B&&B!=="")return D.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(B);for(var F=[],O=D.length,L=0,G,U;L<O;L++)U=D.charAt(L),(U.charCodeAt(0)>=55296&&U.charCodeAt(0)<=56319||D.charCodeAt(L+1)>=65024&&D.charCodeAt(L+1)<=65039)&&(G=((D.substr(L,12).split(emojiExp)||[])[1]||"").length||2,U=D.substr(L,G),F.emoji=1,L+=G-1),F.push(U===">"?"&gt;":U==="<"?"&lt;":Q&&U===" "&&(D.charAt(L-1)===" "||D.charAt(L+1)===" ")?"&nbsp;":U);return F}/*!
 * TextPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gsap,_tempDiv,_getGSAP=function D(){return gsap||typeof window!="undefined"&&(gsap=window.gsap)&&gsap.registerPlugin&&gsap},TextPlugin={version:"3.11.4",name:"text",init:function D(B,w,Q){typeof w!="object"&&(w={value:w});var F=B.nodeName.toUpperCase(),O=this,L=w,G=L.newClass,U=L.oldClass,q=L.preserveSpaces,Y=L.rtl,W=O.delimiter=w.delimiter||"",X=O.fillChar=w.fillChar||(w.padSpace?"&nbsp;":""),te,oe,ne,ce,fe,me,Ie,ye;if(O.svg=B.getBBox&&(F==="TEXT"||F==="TSPAN"),!("innerHTML"in B)&&!O.svg)return!1;if(O.target=B,!("value"in w)){O.text=O.original=[""];return}for(ne=splitInnerHTML(B,W,!1,q),_tempDiv||(_tempDiv=document.createElement("div")),_tempDiv.innerHTML=w.value,oe=splitInnerHTML(_tempDiv,W,!1,q),O.from=Q._from,(O.from||Y)&&!(Y&&O.from)&&(F=ne,ne=oe,oe=F),O.hasClass=!!(G||U),O.newClass=Y?U:G,O.oldClass=Y?G:U,F=ne.length-oe.length,te=F<0?ne:oe,F<0&&(F=-F);--F>-1;)te.push(X);if(w.type==="diff"){for(ce=0,fe=[],me=[],Ie="",F=0;F<oe.length;F++)ye=oe[F],ye===ne[F]?Ie+=ye:(fe[ce]=Ie+ye,me[ce++]=Ie+ne[F],Ie="");oe=fe,ne=me,Ie&&(oe.push(Ie),ne.push(Ie))}w.speed&&Q.duration(Math.min(.05/w.speed*te.length,w.maxDuration||9999)),O.rtl=Y,O.original=ne,O.text=oe,O._props.push("text")},render:function D(B,w){B>1?B=1:B<0&&(B=0),w.from&&(B=1-B);var Q=w.text,F=w.hasClass,O=w.newClass,L=w.oldClass,G=w.delimiter,U=w.target,q=w.fillChar,Y=w.original,W=w.rtl,X=Q.length,te=(W?1-B:B)*X+.5|0,oe,ne,ce;F&&B?(oe=O&&te,ne=L&&te!==X,ce=(oe?"<span class='"+O+"'>":"")+Q.slice(0,te).join(G)+(oe?"</span>":"")+(ne?"<span class='"+L+"'>":"")+G+Y.slice(te).join(G)+(ne?"</span>":"")):ce=Q.slice(0,te).join(G)+G+Y.slice(te).join(G),w.svg?U.textContent=ce:U.innerHTML=q==="&nbsp;"&&~ce.indexOf("  ")?ce.split("  ").join("&nbsp;&nbsp;"):ce}};TextPlugin.splitInnerHTML=splitInnerHTML;TextPlugin.emojiSafeSplit=emojiSafeSplit;TextPlugin.getText=getText;_getGSAP()&&gsap.registerPlugin(TextPlugin);const idlFactory=({IDL:D})=>{const B=D.Variant({UnauthorizedOperator:D.Null,SelfTransfer:D.Null,TokenNotFound:D.Null,UnauthorizedOwner:D.Null,NotFound:D.Null,SelfApprove:D.Null,OperatorNotFound:D.Null,ExistedNFT:D.Null,OwnerNotFound:D.Null,Other:D.Text}),w=D.Variant({ok:D.Nat,err:B}),Q=D.Record({logo:D.Opt(D.Text),name:D.Opt(D.Text),created_at:D.Nat64,upgraded_at:D.Nat64,custodians:D.Vec(D.Principal),symbol:D.Opt(D.Text)}),F=D.Record({xp:D.Nat64,bankooText:D.Vec(D.Text),mental:D.Nat64,ringType:D.Text,powerUps:D.Vec(D.Nat64),styles:D.Vec(D.Text),alias:D.Text,notiOn:D.Bool,networkClass:D.Text,fsOn:D.Bool,imageCompData:D.Vec(D.Nat8),rank:D.Nat64,network:D.Vec(D.Text),ancestorsNames:D.Vec(D.Text),email:D.Text,sight:D.Nat64,speed:D.Nat64,discoveredProgress:D.Float64,story:D.Record({title:D.Text,imagesUri:D.Vec(D.Text),text:D.Text,videoURI:D.Text}),progress:D.Nat64,musicLevel:D.Float64,domains:D.Vec(D.Nat64),landRank:D.Nat64,category:D.Text,landNumber:D.Nat64,endurance:D.Float64,power:D.Nat64,physical:D.Nat64,identifier:D.Text,ancestorsImages:D.Vec(D.Nat8),soundLevel:D.Float64,earthText:D.Vec(D.Text),linked:D.Bool,playerLocation:D.Nat64,health:D.Nat64,discovered:D.Vec(D.Text)}),O=D.Variant({ok:D.Opt(D.Principal),err:B}),L=D.Record({transferred_at:D.Opt(D.Nat64),transferred_by:D.Opt(D.Principal),owner:D.Opt(D.Principal),operator:D.Opt(D.Principal),approved_at:D.Opt(D.Nat64),approved_by:D.Opt(D.Principal),properties:D.Vec(F),is_burned:D.Bool,token_identifier:D.Nat,burned_at:D.Opt(D.Nat64),burned_by:D.Opt(D.Principal),minted_at:D.Nat64,minted_by:D.Principal}),G=D.Variant({ok:D.Vec(L),err:B}),U=D.Record({cycles:D.Nat,total_transactions:D.Nat,total_unique_holders:D.Nat,total_supply:D.Nat}),q=D.Record({Burn:D.Null,Mint:D.Null,Approval:D.Null,TransactionHistory:D.Null}),Y=D.Variant({ok:L,err:B});return D.Service({adminUser:D.Func([],[D.Text],["query"]),alphaLedger:D.Func([],[D.Nat],["query"]),balanceOf:D.Func([D.Principal],[w],["query"]),custodians:D.Func([],[D.Vec(D.Principal)],["query"]),cycles:D.Func([],[D.Nat],["query"]),logo:D.Func([],[D.Opt(D.Text)],["query"]),metadata:D.Func([],[Q],["query"]),mint:D.Func([D.Principal,D.Nat,D.Vec(F)],[w],[]),name:D.Func([],[D.Opt(D.Text)],["query"]),operatorOf:D.Func([D.Nat],[O],["query"]),operatorTokenMetadata:D.Func([D.Principal],[G],["query"]),ownerOf:D.Func([D.Nat],[O],["query"]),ownerTokenMetadata:D.Func([D.Principal],[G],["query"]),savetoTemp:D.Func([D.Principal,D.Nat,D.Vec(F)],[w],[]),setCustodians:D.Func([D.Vec(D.Principal)],[],[]),setLogo:D.Func([D.Text],[],[]),setName:D.Func([D.Text],[],[]),setSymbol:D.Func([D.Text],[],[]),stats:D.Func([],[U],["query"]),supportedInterfaces:D.Func([],[D.Vec(q)],["query"]),symbol:D.Func([],[D.Opt(D.Text)],["query"]),tempMetaData:D.Func([D.Nat],[Y],["query"]),tokenMetadata:D.Func([D.Nat],[Y],["query"]),totalSupply:D.Func([],[D.Nat],["query"]),totalUniqueHolders:D.Func([],[D.Nat],["query"]),updateTemp:D.Func([D.Principal,D.Nat,D.Vec(F)],[w],[])})};class chatRoom{constructor(B,w){this.roomName=B,this.roomDescription=w,this.messages=[],this.io=null}static create(B,w){return new chatRoom(B,w)}callback(B){console.log("Array has been modified:",B)}addMessage(B){new Proxy(this.messages,{set:(Q,F,O)=>{const L=Reflect.set(Q,F,O);return this.callback({property:F,value:O}),L}}).push(B)}getMessages(){return this.messages}setIo(B){this.io=B,console.log("io set",this.io)}getIo(){return this.io}getRoomName(){return this.roomName}getRoomDescription(){return this.roomDescription}getRoomData(){return{roomName:this.roomName,roomDescription:this.roomDescription,messages:this.messages}}}class uniPlayers{constructor(B,w){this.roomName=B,this.roomDescription=w,this.players={},this.io=null}static create(B,w){return new uniPlayers(B,w)}addPlayer(B){const{playerId:w,playerName:Q,x:F,y:O}=B,L={playerId:w,playerName:Q,x:F,y:O};this.players[w]=L,this.renderPlayer(L)}updatePlayerLocation(B){const{playerId:w,x:Q,y:F}=B,O=this.players[w];O&&(O.x=Q,O.y=F,this.updatePlayerElement(O))}renderPlayer(B){console.log("renderPlayer",B);const w=document.createElement("div");w.classList.add("uniPlayer"),w.setAttribute("id",B.playerId),w.dataset.playerId=B.playerId,w.style.left=B.x+"px",w.style.top=B.y+"px",document.getElementById("players").appendChild(w)}updatePlayerElement(B){const w=document.querySelector(`[data-player-id="${B.playerId}"]`);w.style.left=B.x+"px",w.style.top=B.y+"px"}setIo(B){this.io=B,console.log("io set",this.io),this.io.on("newPlayer",w=>{this.addPlayer(w)}),this.io.on("playerMoved",w=>{this.updatePlayerLocation(w)})}getIo(){return this.io}getRoomName(){return this.roomName}getRoomDescription(){return this.roomDescription}getRoomData(){return{roomName:this.roomName,roomDescription:this.roomDescription,players:this.players}}}async function universe(){const D=new SoundtrackManager;var B=document.querySelector("#universe"),w=document.querySelector("#exploreUI"),Q=document.getElementById("previewUI"),F=document.getElementById("explore"),O=document.getElementById("getUniMenu").shadowRoot.getElementById("pinMenu"),L=document.getElementById("getUniMenu").shadowRoot.getElementById("locked"),G=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),U={x:0,y:0},q={x:0,y:0},Y={x:0,y:0},W={x:0,y:0},X,te,oe=18,ne=0,ce=50,fe=50,me=50,Ie=50,ye=!1,Be,Ce,we=!1,De=!1;window.connected=!1;var be=["1435","3162","2849","6208"];window.suUiActor=null,window.landActivated=!1,window.chatActive=!1,window.domainType="";const Se=idlFactory;window.user={principal:null,balance:null,pk:null,nfts:null};var Ne={nftsLoaded:!1};const Le="ryjl3-tyaaa-aaaaa-aaaba-cai",Pe=[Le];window.universeSystem=async()=>{var ie=B.getContext("2d"),ae=document.createElement("img"),se=document.getElementById("camera");if(D.stop("menuEntrance1"),D.play("menuEntrance1"),navigator.userAgent.includes("Brave")||navigator.userAgent.includes("Firefox")||navigator.userAgent.includes("Chrome")){document.querySelector("#universe").style.display="block",setTimeout(()=>{document.querySelector("#universe").style.opacity="100%"},100),ae.onload=function(){ie.drawImage(ae,0,0,ae.width,ae.height),ie.fillStyle="rgba(255, 255, 255, 0.08)";for(var j=0;j<ae.width;j+=oe)ie.fillRect(j,0,1,ae.height);for(var J=0;J<ae.height;J+=oe)ie.fillRect(0,J,ae.width,1)},ae.src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg",se.scrollTo(990,0),se.addEventListener("scroll",function(){se.scrollLeft<990&&se.scrollTo(990,0),se.style.overflowY="hidden"},{passive:!1}),se.addEventListener("wheel",function(j){j.preventDefault()},{passive:!1}),B.addEventListener("mousemove",window.mousePos),B.addEventListener("click",window.selectedPos),document.addEventListener("focus",j=>{De=!0},!0),document.addEventListener("blur",j=>{De=!1},!0);var ge=document.createElement("div"),ue=document.createElement("div"),pe=document.createElement("div"),ee=document.createElement("div");ge.id="uniEvent",ge.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(ge),ue.id="uniEvent2",ue.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(ue),pe.id="uniEvent3",pe.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(pe),ee.id="uniEvent4",ee.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(ee),window.adminUI(),window.openLocationCard(),window.playerPos()}else alert("The browser is not Brave, Firefox, or Chrome")},window.adminUI=()=>{var ie=document.createElement("div"),ae=document.createElement("div"),se=document.createElement("div"),ge=document.createElement("div"),ue=document.createElement("div"),pe=document.createElement("div"),ee=document.createElement("div"),j=document.createElement("div");document.getElementById("selection").style.display="block",ie.id="adminUI",ae.id="DebugColumn",se.id="DebugRow",ge.id="selectionPos",ue.id="pixelPos",pe.id="selectPosBox",ee.id="playerCord",j.id="playerScreenCoor",ie.appendChild(ue),ie.appendChild(ae),ie.appendChild(se),ie.appendChild(ge),ie.appendChild(pe),ie.appendChild(ee),ie.appendChild(j),document.getElementById("main").appendChild(ie),Ge(document.getElementById("adminUI"),!0),Ge(document.getElementById("exploreUI"),!0),ge.innerHTML="Selected Tile:",ae.innerHTML="Column:",se.innerHTML="Row:",ue.innerHTML="X: , Y:",pe.innerHTML="SelBoxTile:",ee.innerHTML="Player Coordinates:",j.innerHTML="Player Screen Coord:",window.initSelection(),window.moveSelection(),window.moveMenu()},window.mousePos=ie=>{var ae=B.getBoundingClientRect();U.x=Math.round((ie.clientX-ae.left)/oe),U.y=Math.round((ie.clientY-ae.top)/oe),window.pixelPos.x=ie.clientX-ae.left,window.pixelPos.y=ie.clientY-ae.top,document.getElementById("DebugColumn").innerHTML="Column: "+U.x,document.getElementById("DebugRow").innerHTML="Row: "+U.y,document.getElementById("pixelPos").innerHTML="X: "+window.pixelPos.x+", Y: "+window.pixelPos.y},window.selectedPos=ie=>{window.chatActive=!1,document.getElementById("explore").style.display="block";var ae=B.getBoundingClientRect();w.style.transform="scale(0)",q.x=Math.round((ie.clientX-(ae.left+9))/oe),q.y=Math.round((ie.clientY-(ae.top+9))/oe);var se=170-q.x;if(document.getElementById("selectionPos").innerHTML="Selected Tile: "+(170-se+170*q.y),ne=170-se+170*q.y,te=170-se+170*q.y,Q.innerHTML="Land "+ne,Q.style.color="blue",F.style.left=ie.clientX-F.offsetWidth/2+"px",F.style.top=ie.clientY-F.offsetHeight/2+"px",F.style.left=Math.round((F.offsetLeft-ae.left)/oe)*oe+ae.left+"px",F.style.top=Math.round((F.offsetTop-ae.top)/oe)*oe+ae.top+"px",Q.style.display="block",Q.style.left=F.offsetLeft+F.offsetWidth+18+"px",Q.style.top=F.offsetTop-108+"px",Q.style.transformOrigin="bottom left",F.offsetTop<215&&(Q.style.top=F.offsetTop+F.offsetHeight+18+"px",Q.style.transformOrigin="top left"),F.offsetLeft>window.innerWidth-215&&(Q.style.left=F.offsetLeft-Q.offsetWidth-18+"px",Q.style.transformOrigin="bottom right"),F.offsetLeft<215&&(Q.style.transformOrigin="bottom left"),we==!1){Q.style.transform="scale(1)",we=!0,Be=setTimeout(()=>{Q.style.transform="scale(0)",we=!1},3e3);return}if(we==!0){clearTimeout(Be),Be=setTimeout(()=>{Q.style.transform="scale(0)",we=!1},3e3);return}};function Ge(ie,ae){var se=0,ge=0,ue=0,pe=0;if(ae===!1)return;O.style.borderTop="2px solid rgba(225, 225, 225, 0.8)",O.style.borderLeft="2px solid rgba(225, 225, 225, 0.8)",O.style.filter="blur(0px)",O.setAttribute("class","unpinned"),L.style.opacity="0",document.getElementById(ie.id+"header")?document.getElementById(ie.id+"header").onmousedown=ee:ie.onmousedown=ee;function ee(re){re=re||window.event,re.preventDefault(),ue=re.clientX,pe=re.clientY,document.onmouseup=J,document.onmousemove=j}function j(re){re=re||window.event,re.preventDefault(),se=ue-re.clientX,ge=pe-re.clientY,ue=re.clientX,pe=re.clientY,ie.style.top=ie.offsetTop-ge+"px",ie.style.left=ie.offsetLeft-se+"px"}function J(){document.onmouseup=null,document.onmousemove=null}}window.deactivateDrag=()=>{G.onmousedown=null,document.onmouseup=null,document.onmousemove=null,O.style.borderTop="4px solid #ff002d",O.style.borderLeft="4px solid #ff002d",O.setAttribute("class","pinned"),L.style.opacity="1"},window.pinMenu=()=>{if(O.getAttribute("class")=="pinned"){Ge(G,!0),O.setAttribute("class","unpinned");return}if(O.getAttribute("class")=="unpinned"){window.deactivateDrag(),O.setAttribute("class","pinned"),G.style.transition="1s",G.style.top="36px",G.style.left="36px",document.getElementById("getUniMenu").toggleMenu(),setTimeout(()=>{G.style.transition=""},1200);return}},window.playerPos=()=>{var ie=document.getElementById("selection"),ae=B.getBoundingClientRect(),se=ie.getBoundingClientRect(),ge={x:Math.round(se.left-ae.left+2),y:Math.round(se.top-ae.top+2)},ue={x:Math.round(ge.x/oe),y:Math.round(Math.round(ge.y/oe))},pe=170-ue.x,ee=170-pe+ue.y*170;if(document.getElementById("selectPosBox").innerHTML=`Player Position: ${ee}`,X=170-pe+ue.y*170,W.x=ge.x-2,W.y=ge.y-2,document.getElementById("playerCord").innerHTML=`Player Coordinates: ${W.x}, ${W.y}`,document.getElementById("playerScreenCoor").innerHTML=`Player Screen Coordinates: ${se.left}, ${Math.round(se.top)+2}`,window.uniPlayer.x=ie.style.left,window.uniPlayer.y=ie.style.top,Ke.emit("players",{roomId:st,playerId:window.uniPlayer.playerId,playerData:window.uniPlayer}),`${ee}`===be[0]||`${ee}`===be[1]||`${ee}`===be[2]||`${ee}`===be[3]){if(window.landActivated=!0,document.getElementById("selection").style.animationPlayState="running",document.getElementById("selection").style.animation="whiteBoxGlow 1s infinite",document.getElementById("selection").innerHTML='<div id="exclamationMark" style="position: absolute; top: 8px; left: 8px; width: 18px; height: 18px; background-color: #ff002d; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; color: #fff; font-weight: 700;">!</div>',`${ee}`===be[0]){window.domainType="canon",w.innerHTML=_e;return}else if(`${ee}`===be[1]){window.domainType="world",w.innerHTML=ve;return}else if(`${ee}`===be[2]){window.domainType="world",w.innerHTML=Qe;return}else if(`${ee}`===be[3]){window.domainType="chat",w.innerHTML=xe;var j=window.room1.getMessages();j==null||j.forEach(J=>{const re=document.createElement("div"),Ae=document.getElementById("chatRoom1");re.setAttribute("class","chatMessageContainer"),re.innerHTML=`
        <div class="messageAvatar self">
          <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
        </div>
        <div class="messageBody">
          <div class="messageSender">Damion</div>
          <p class="messageText">${J}</p>
        </div>
      `,Ae.appendChild(re)}),w.addEventListener("keyup",()=>{Ge(document.getElementById("exploreUI"),!0)}),document.getElementById("chatTextArea").addEventListener("click",()=>{w.onmousedown=null,document.getElementById("chatInput1").focus()}),document.getElementById("sendBut").addEventListener("click",()=>{var J=document.getElementById("chatInput1");const re=J.value.trim();re&&(window.room1.addMessage(re),Ke.emit("newMessage",{roomName:le,message:re}),J.value="")});return}return}else window.landActivated=!1,document.getElementById("selection").style.animationPlayState="paused",document.getElementById("selection").style.animation="none",document.getElementById("selection").innerHTML="",w.innerHTML=""},window.moveSelection=()=>{document.removeEventListener("keydown",window.checkKeys);var ie=document.getElementById("selection"),ae=window.innerHeight/oe,se=window.innerWidth/oe,ge=ae/2,ue=se/2;Y.x=ue*oe,Y.y=ge*oe,document.addEventListener("keydown",function(pe){window.chatActive!=!0&&(w.style.transform="scale(0)",Ge(document.getElementById("exploreUI"),!0),pe.keyCode==37&&Y.x>0&&ye==!1&&(Y.x-=oe,ye=!0,setTimeout(()=>{ye=!1},ce)),pe.keyCode==38&&Y.y>0&&ye==!1&&(Y.y-=oe,ye=!0,setTimeout(()=>{ye=!1},me)),pe.keyCode==39&&Y.x<se*oe-oe&&ye==!1&&(Y.x+=oe,ye=!0,setTimeout(()=>{ye=!1},fe)),pe.keyCode==40&&Y.y<ae*oe-oe&&ye==!1&&(Y.y+=oe,ye=!0,setTimeout(()=>{ye=!1},Ie)),ie.style.left=Y.x+"px",ie.style.top=Y.y+"px",window.playerPos(),pe.keyCode==32&&window.exploreOpenHelper())}),document.addEventListener("keydown",function(pe){pe.keyCode==37&&Y.x==0&&(document.getElementById("camera").scrollLeft-=oe),pe.keyCode==38&&Y.y==0&&(document.getElementById("camera").scrollTop-=oe),pe.keyCode==39&&Y.x==se*oe-oe&&(document.getElementById("camera").scrollLeft+=oe),pe.keyCode==40&&Y.y==ae*oe-oe&&(document.getElementById("camera").scrollTop+=oe)})},window.initSelection=()=>{var ie=window.innerWidth/oe,ae=window.innerHeight/oe,se=document.getElementById("selection");se.style.left=ie/2*oe+"px",se.style.top=ae/2*oe+"px"},window.openLocationCard=()=>{B.addEventListener("dblclick",()=>{if(document.getElementById("previewUI").style.transform="scale(0)",X===te)window.exploreOpenHelper();else{var ie=document.getElementById("adminUI");ie.style.opacity="1",setTimeout(()=>{ie.style.opacity="0"},5e3)}})};var _e=`<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<h1>Ch.1 - Reacclimate</h1>
<p>In the distant land of T.A.O.S City, there exists a hidden world of self-exiled creators, known as the Oracles. These Oracles reside in ancient, desolate mansions on the outskirts of the city, and possess a wealth of knowledge and experience that is sought after by migrants from far-off lands. These migrants come to T.A.O.S City in search of a new life, but often find themselves lost and alone in a vast and unfamiliar place. They turn to the Oracles for guidance, seeking to avoid the wrath of the city's enforcers, a powerful and ruthless group of conservative citizens.
<br><br>
The journey to visit the Oracles is not an easy one. Many must travel for days, through treacherous and unforgiving terrain, in order to reach the Oracles' remote dwellings. But those who are successful in their quest are rewarded with a profound understanding of themselves and the world around them. The Oracles' teachings help the migrants to remember something that they had long forgotten, and to reacclimate to the new and strange land they now call home.
<br><br>
This is the story of one such migrant, and their journey to find the Oracles, to discover the truth about themselves, and to make a place for themselves in the world of T.A.O.S City. It is a story of struggle and sacrifice, of hope and perseverance, and of the power of the human spirit to overcome even the greatest of challenges.
</p>`,ve=`
<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div id="tempVidHead">Ch.2 - Prologue 1</div>
<div id="tempVidCon">
  <video id="tempVid" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Chapter2-Prologue-1-HD.mp4" controls></video>
</div>
`,Qe=`
<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div id="tempVidHead2">Speak Easy</div>
<div id="tempVidCon2">
  <video id="tempVid2" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/nightout.mp4" controls></video>
</div>
`,xe=`
<div class="cannonIcon">
  <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div class="domainFunction">
  <div class="domainHeader">
    <div class="doaminOwner">LORD AMINA</div>
    <div class="domainName">TC-BARGE-1</div>
  </div>
  <div class="domainInfo">
    <div class="domainLordImg">
      <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
    </div>
    <div class="domainInfoBlockRight">
      <div class="domainLordText">
        I purchased this barge from a local merchant. I plan to use it as a mobile home for my travels. I'm not sure where I'll go yet, but I'm sure I'll find a place that suits me.
      </div>
      <div class="domainActions">
        <div class="ampButton">AMPLIFY</div>
        <div class="sabButton">SABOTAGE</div>
      </div>
    </div>
  </div>
  <div class="domainFunctStatus">
    <div class="dfsLeft">Created: 9/12/23</div>
    <div class="dfsRight">Last Message: 9:58pm</div>
  </div>
  <div class="chatRoom" id="chatRoom1">
    <div class="chatMessageContainer">
      <div class="messageAvatar self">
        <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
      </div>
      <div class="messageBody">
        <div class="messageSender">Damion</div>
        <p class="messageText">Hey, whats up! This isnt what I meant when I said I wanted to see the barge. However sometimes you have to see what other things are about first hand.</p>
      </div>
    </div>
    <div class="chatMessageContainer">
      <div class="messageAvatar self">
        <img src="https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/red-s1.jpg"/>
      </div>
      <div class="messageBody">
        <div class="messageSender">Violet</div>
        <p class="messageText">Damion no one ever told you you look like you belong on a barge?</p>
      </div>
    </div>
  </div>
  <div class="chatInputs" id="chatTextArea">
    <textarea class="chatInputText" id="chatInput1" placeholder="Message..." max-length="320"></textarea>
    <div class="chatInputButtons">
      <div></div>
      <div class="sendMessageButton" id="sendBut">SEND</div>
      <div></div>
    </div>
  </div>
</div>
`;window.exploreOpenHelper=()=>{var ie=document.getElementById("exploreUI").offsetWidth;if(De===!1)if(Y.x<window.innerWidth/oe*oe-18-ie?w.style.left=Y.x+oe+18+"px":w.style.left=Y.x-18-ie+"px",w.style.transform="scale(1)",window.landActivated===!1){w.style.width="128px",w.style.height="20px",w.style.top=Y.y-92+"px",clearTimeout(Ce),Ce=setTimeout(()=>{w.style.transform="scale(0)"},6e3),w.innerHTML=`
      <div id="unclaimedBox">
        <div id="unclaimed">UNCLAIMED LAND</div>
      </div>
      `;return}else{w.style.width="540px",w.style.height="810px",window.domainType==="chat"&&(window.chatActive=!0,document.getElementById("uniEvent4").setAttribute("style","animation: none;")),w.style.top=(window.innerHeight-810)/2+"px";var ae=document.getElementById("tempVid"),se=document.getElementById("tempVid2");(ae==null?void 0:ae.src)!=""&&(ae==null||ae.play()),(se==null?void 0:se.src)!=""&&(se==null||se.play())}},window.moveMenu=()=>{var ie=document.getElementById("universe");G.style.display="block";var ae=document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems"),se=document.getElementById("getUniMenu").shadowRoot,ge=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt"),ue=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".men-active"),pe=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".getNew");pe.forEach(ee=>{ee.addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen()})}),ge.forEach(ee=>{ee.addEventListener("mouseout",()=>{D.setVolume("menuMove3",.5),D.stop("menuMove3"),D.play("menuMove3")})}),ae.childNodes.forEach(ee=>{switch(ee.id!="uniMenuItems"&&D.stop("menuLoading1"),ee.addEventListener("click",()=>{window.clearAndSelectMenu(ee.id),D.stop("menuEnter3"),D.play("menuEnter3")}),ee.id){case"uniMenuShop":ee.addEventListener("click",j=>{Ge(G,!0),se.getElementById("fm-enhancements").style.display="grid",se.getElementById("fm-header-headline").style.opacity="0%",se.getElementById("fm-header-headline").style.pointerEvents="none",se.getElementById("fm-beacons").style.display="none",se.getElementById("fm-feedback").style.display="none",se.getElementById("fm-settings").style.display="none",se.getElementById("fm-profile").style.display="none",se.getElementById("fm-enhancements").innerHTML='<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">',se.getElementById("nftShop").addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen(),ie.style.filter="blur(5px)",se.getElementById("uniMenu").style.filter="blur(10px)"}),se.getElementById("fm-inventory").style.display="none",se.getElementById("menuLoadingScreen").style.display="none",se.getElementById("menuMessage").style.display="none",window.headlineSwtich(j)});break;case"uniMenuItems":ee.addEventListener("click",j=>{window.headlineSwtich(j),setTimeout(()=>{window.headlineSwtich(j)},500),Ge(G,!0),window.openInventory(),se.getElementById("fm-beacons").style.display="none",se.getElementById("fm-feedback").style.display="none",se.getElementById("fm-settings").style.display="none",se.getElementById("fm-inventory").style.display="grid",se.getElementById("fm-enhancements").style.display="none",se.getElementById("fm-profile").style.display="none",se.getElementById("fm-header").style.display="grid",se.getElementById("fm-header-headline").style.opacity="100%",se.getElementById("fm-header-headline").style.pointerEvents="auto",ee.setAttribute("class","menuTabs selectedMenu2"),se.getElementById("uniMenuItemsSvg").childNodes.forEach(J=>{J.style.fill="white"}),se.getElementById("uniMenuBeacons").setAttribute("class","menuTabs"),se.getElementById("uniMenuBeaconsSvg").childNodes.forEach(J=>{J.style.stroke="#ff002d"}),ue.forEach(J=>{if(J.id==="fm-menu1"){var re={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(re),J.setAttribute("class","mmen-active it selectedMenu")}else J.setAttribute("class","men-active it")})});break;case"uniMenuProfile":ee.addEventListener("click",j=>{window.headlineSwtich(j),setTimeout(()=>{window.headlineSwtich(j)},500),window.openInventory(),se.getElementById("fm-profile").style.display="grid",se.getElementById("fm-header").style.display="grid",se.getElementById("fm-header-headline").style.opacity="100%",se.getElementById("fm-beacons").style.display="none",se.getElementById("fm-inventory").style.display="none",se.getElementById("fm-feedback").style.display="none",se.getElementById("fm-settings").style.display="none",se.getElementById("fm-enhancements").style.display="none",se.getElementById("menuLoadingScreen").style.display="none",se.getElementById("fm-header-headline").style.pointerEvents="auto",ue.forEach(J=>{if(J.id==="fm-menu1"){var re={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(re),J.setAttribute("class","mmen-active ht selectedMenu")}}),window.deactivateDrag()});break;case"uniMenuSettings":ee.addEventListener("click",j=>{se.getElementById("fm-beacons").style.display="none",se.getElementById("fm-inventory").style.display="none",se.getElementById("fm-feedback").style.display="none",se.getElementById("fm-enhancements").style.display="none",se.getElementById("fm-profile").style.display="none",se.getElementById("fm-settings").style.display="grid",se.getElementById("menuLoadingScreen").style.display="none",se.getElementById("menuMessage").style.display="none",se.getElementById("fm-header").style.display="grid",se.getElementById("fm-header-headline").style.opacity="0%",se.getElementById("fm-header-headline").style.pointerEvents="none",window.headlineSwtich(j),window.deactivateDrag()});break;case"uniMenuBeacons":ee.addEventListener("click",j=>{Ge(G,!0),document.getElementById("getUniMenu").shadowRoot.getElementById("beaconNoti").style.display="none",se.getElementById("fm-beacons").style.display="grid",se.getElementById("fm-inventory").style.display="none",se.getElementById("fm-feedback").style.display="none",se.getElementById("fm-settings").style.display="none",se.getElementById("fm-enhancements").style.display="none",se.getElementById("fm-profile").style.display="none",se.getElementById("menuLoadingScreen").style.display="none",se.getElementById("menuMessage").style.display="none",se.getElementById("fm-header").style.display="grid",se.getElementById("fm-header-headline").style.opacity="100%",se.getElementById("fm-header-headline").style.pointerEvents="all",window.headlineSwtich(j),ue.forEach(J=>{if(J.id==="fm-menu1"){var re={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(re),J.setAttribute("class","mmen-active ht selectedMenu")}else J.setAttribute("class","men-active ht")})});break;case"uniMenuFeedback":ee.addEventListener("click",j=>{se.getElementById("feedbackHeadline").innerHTML="Help make T.A.O.S City better.",se.getElementById("fm-beacons").style.display="none",se.getElementById("fm-inventory").style.display="none",se.getElementById("fm-enhancements").style.display="none",se.getElementById("fm-profile").style.display="none",se.getElementById("fm-settings").style.display="none",se.getElementById("fm-header").style.display="grid",se.getElementById("menuLoadingScreen").style.display="none",se.getElementById("fm-header-headline").style.opacity="0%",se.getElementById("fm-header-headline").style.pointerEvents="none",se.getElementById("menuMessage").style.display="none",se.getElementById("fm-feedback").style.display="grid",se.getElementById("fm-feedback").addEventListener("click",()=>{window.deactivateDrag()}),window.headlineSwtich(j),window.deactivateDrag()});break;case"uniMenuExit":ee.addEventListener("click",()=>{window.showMenu(),Ge(G,!0),D.stop("menuExitSys1"),D.play("menuExitSys1")});break}}),Ge(G,!0),window.hideMenu()},window.headlineSwtich=ie=>{var ae=ie.target.id,se=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1"),ge=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu2"),ue=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu3");switch(ae){case"menuInventory":se.innerHTML="Land & Enhancements",ge.innerHTML="Assets",ue.innerHTML="Sync",se.style.opacity="100%",se.style.userSelect="auto",ge.style.opacity="100%",ge.style.userSelect="auto",ue.style.opacity="0%",ue.style.userSelect="none";break;case"menuProfile":se.innerHTML="Earth",ge.innerHTML="Bankoo",se.style.opacity="100%",se.style.userSelect="auto",ge.style.opacity="100%",ge.style.userSelect="none",ue.style.opacity="0%",ue.style.userSelect="none";break;case"menuBeacons":se.innerHTML="All",ge.innerHTML="Domain",ue.innerHTML="Citizen",se.style.opacity="100%",se.style.userSelect="auto",ge.style.opacity="100%",ge.style.userSelect="auto",ue.style.opacity="100%",ue.style.userSelect="auto";break}},window.clearAndSelectMenu=ie=>{var ae=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".menuTabs");ae.forEach(se=>{se.id===ie&&se.id!=="uniMenuExit"?(se.setAttribute("class","menuTabs selectedMenu2"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${se.id}Svg`).childNodes.forEach(ge=>{ge.style.stroke="white"})):(se.setAttribute("class","menuTabs"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${se.id}Svg`).childNodes.forEach(ge=>{ge.style.stroke="#ff002d",ge.style.fill="#ff002d"}))})},window.hideMenu=()=>{var ie=document.getElementById("logo");ie.style.opacity="0",ie.style.pointerEvents="none",document.getElementById("uniEvent").style.display="block",document.getElementById("uniEvent2").style.display="block",document.getElementById("uniEvent3").style.display="block",document.getElementById("uniEvent4").style.display="block",document.getElementById("welcome").style.display="none",document.getElementById("welcome").style.pointerEvents="none",document.getElementById("intro").style.display="none",document.getElementById("intro").style.opacity="0%",document.getElementById("introLogo").style.userSelect="none",document.getElementById("introLogo").style.pointerEvents="none",document.getElementById("introLogo").style.cursor="pointer"},window.showMenu=()=>{var ae;var ie=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");document.querySelector("#universe").style.opacity="0%",setTimeout(()=>{document.querySelector("#universe").style.display="none"},1e3),document.getElementById("selection").style.display="none",(ae=document.getElementById("uniEvent"))==null||ae.remove(),document.getElementById("uniEvent2").remove(),document.getElementById("uniEvent3").remove(),document.getElementById("uniEvent4").remove(),document.getElementById("explore").style.display="none",Q.style.transform="scale(0)",ie.style.display="none",document.getElementById("adminUI").remove(),document.getElementById("welcome").style.display="grid",document.getElementById("welcome").style.pointerEvents="auto",document.getElementById("intro").style.display="grid",document.getElementById("intro").style.opacity="100%",document.getElementById("introLogo").style.userSelect="auto",document.getElementById("introLogo").style.pointerEvents="auto",document.getElementById("introLogo").style.cursor="pointer",document.getElementById("introLogo").addEventListener("click",()=>{window.universeSystem()})},window.openInventory=async()=>{var ie=document.getElementById("getUniMenu").shadowRoot,ae=ie.getElementById("menuLoadingScreen"),se=ie.getElementById("menuLoadingScreen3");Ne.nftsLoaded===!1?(ae.style.display="grid",se.style.display="grid",D.loop("menuLoading1"),D.play("menuLoading1"),await window.connectWallet().catch(ge=>{console.log(ge)})):(ie.getElementById("fm-inventory").style.display="grid",ie.getElementById("fm-header").style.display="grid",ie.getElementById("fm-enhancements").style.display="none")},window.connectWallet=async()=>{if(window.ic===void 0){console.log("Plug not found - Get Plug Wallet"),Ue();return}else console.log(window.ic),window.connected=await window.ic.bitfinityWallet.isConnected(),console.log(window.connected);if(window.connected===!1){const ie=await window.ic.bitfinityWallet.requestConnect({whitelist:Pe,timeout:5e4}).catch(se=>{var ge={e:se};Ue(ge),console.error("Connect Wallet",se)});await Fe().catch(se=>{console.log("Create Actor",se)});const ae=await window.ic.bitfinityWallet.getPrincipal().catch(se=>{console.error("Get Principal",se)});window.user.principal=`${ae}`,window.user.pk=ie,Me()}else window.connected===!0?(await Fe().catch(ie=>{console.log(ie)}),Me()):Ue()};const Me=async()=>{var ie=document.getElementById("getUniMenu").shadowRoot;console.log(window.suUiActor),await window.suUiActor.adminUser().catch(se=>{console.log("Get Admin",{e:se});var ge={e:se};window.dmb===!1&&He(ge)}).catch(se=>{console.log(se)})===window.user.principal?console.log("Admin Logged in"):(ie.getElementById("menuLoadingScreen").style.display="none",ie.getElementById("menuLoadingScreen3").style.display="none",D.stop("menuLoading1"),Ne.nftsLoaded=!0)},Fe=async()=>{window.user.principal=await window.ic.bitfinityWallet.getPrincipal(),window.suUiActor=await window.ic.bitfinityWallet.createActor({canisterId:Le,interfaceFactory:Se,host:"http://localhost:8080/"}).catch(ie=>{console.log("creatActor",ie)})},Ue=async ie=>{var se;var ae=document.getElementById("getUniMenu").shadowRoot;switch(ae.getElementById("menuLoadingScreen").style.display="none",ae.getElementById("menuLoadingScreen3").style.display="none",D.stop("menuLoading1"),D.setVolume("menuError1",.4),D.play("menuError1"),ae.getElementById("menuMessage").style.display="grid",((se=ie.e.result)==null?void 0:se.error_code)||ie.e.message){case"IC0501":ae.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">MAINTENANCE ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody">City Central has been notified and will resolve the issue. In the meantime, try refreshing your connection and attempting again.</div>
      </div>`;break;case"The agent creation was rejected.":ae.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">DISCONNECTED WALLET</div>
        <div id="menuMessageText">You'll need it to continue.</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;cursor:default;">T.A.O.S City's Plug wallet is the best of its class. Share any concerns with City Central in the <span style="text-decoration:underline;color: var(--accent);cursor:pointer;">Feedback</span> section.</div>
        </div>
      </div>`,ae.querySelector("#menuMessageBody").addEventListener("click",()=>{var ge={target:ae.querySelector("#fm-menu2")};ae.querySelector("#uniMenuFeedback").click(ge)});break;default:ae.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">NEURAL CHIP ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;">Seems like something went wrong with your Digisette. LX-Comm has been notified. In the meantime, try <span style="color:var(--accent);"><a href="#" onclick="location.reload()">refreshing</a></span> your connection and attempting again.</div>
      </div>`;break}},He=async ie=>{let ae=new FormData;ae.append("Email","ATTN: RELOAD"),ae.append("FeedbackText",`${ie.e.props.Message}`),fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:ae,mode:"cors"}).then(se=>se.text())};window.systemNoti=async()=>{},window.rsvp=async()=>{document.getElementById("rsvpModal").style.display="block"};const Ke=io("http://localhost:3001"),le="alphaTestersChat",Xe="1st Chat Room for Alpha Testers";window.room1=chatRoom.create(le,Xe),window.room1.setIo(Ke),Ke.on("newMessage",ie=>{console.log("Here 2",{data:ie}),console.log(window.room1),window.room1.addMessage(ie.message);const ae=document.createElement("div"),se=document.getElementById("chatRoom1");if(ae.setAttribute("class","chatMessageContainer"),ae.innerHTML=`
  <div class="messageAvatar self">
    <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
  </div>
  <div class="messageBody">
    <div class="messageSender">Damion</div>
    <p class="messageText">${ie.message}</p>
  </div>
  `,se==null||se.appendChild(ae),window.dtfullMenuOpen===!1&&window.chatActive===!1&&(document.getElementById("getUniMenu").shadowRoot.getElementById("beaconNoti").style.display="block"),window.chatActive===!1){var ge=document.createElement("div");document.getElementById("uniEvent4").setAttribute("style","animation: whiteBoxInnerGlow 2s infinite;"),ge.setAttribute("class","beacon tut"),ge.setAttribute("data-message",`${ie.message}`),ge.addEventListener("click",ue=>{document.getElementById("getUniMenu").openBeaconMessage(ue)}),ge.innerHTML=`
        <div class="beaconOrigin">
          <div class="beaconIdenIcon">!</div>
          <div class="beaconSender">${ie.roomName}</div>
        </div>
        <div class="beaconPreview">
          ${ie.message.substring(0,25)}...
        </div>
    `,document.getElementById("getUniMenu").shadowRoot.getElementById("beaconsBody").appendChild(ge)}});const st="alphaTesters",lt="Alpha Testers";window.uniPlayer={playerId:Math.floor(Math.random()*100),playerName:"Damion",x:0,y:0},window.room2=uniPlayers.create(st,lt),window.room2.setIo(Ke);var Oe=!1,$e=[];return Ke.on("players",ie=>{if(Oe===!1){var ae=uniPlayers.create(ie.playerId,ie.playerData);ae.renderPlayer(ie.playerData),$e.push(ie.playerData.playerId),Oe=!0;return}$e.includes(ie.playerData.playerId)===!1&&($e.push(ie.playerData.playerId),window.room2.renderPlayer(ie.playerData)),document.getElementById(`${ie.playerData.playerId}`).style.top=ie.playerData.y,document.getElementById(`${ie.playerData.playerId}`).style.left=ie.playerData.x}),window.elementHelp=async ie=>{var se;(se=document.getElementById("elHelp"))==null||se.remove(),console.log(ie.clientX,ie.clientY);const ae=document.createElement("div");ae.setAttribute("id","elHelp"),ae.setAttribute("class","tooltip"),ae.innerHTML="<strong>+2 Stealth</strong> - Consequences unknown!",document.body.appendChild(ae),ae.style.top=`${ie.clientY-90}px`,ae.style.left=`${ie.clientX-0}px`},{dragElement:Ge}}window.entry=()=>{gsapWithCSS.to("#introLogo",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#intro",{duration:1,opacity:0,ease:"power2.inOut",delay:1.5}),gsapWithCSS.to(".welcomeOptions",{duration:1,opacity:1,ease:"power2.inOut",delay:2}),gsapWithCSS.to("#wOpt1",{duration:2,translateX:0,ease:"power2.inOut",delay:1.5}),gsapWithCSS.to("#wOpt2",{duration:2,translateX:0,ease:"power2.inOut",delay:1.5}),setTimeout(()=>{document.getElementById("welcome").style.pointerEvents="auto"},3e3)};window.entry();const VITE_CommerceKey="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",VITE_ScogeI="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";var pgleft=1,pgright=2,sketch1Count=3,sketch2Count=2,sketch3Count=1,countriedAdded=!1,shopActive="closed";window.dbm=!1;window.shoploaded=!1;window.viewThisProduct="";window.investorsView=!1;window.urlParamsActive=!1;window.inUniverse=!1;window.productsloaded=!1;var ci="false";const commerce=new lib(`${VITE_CommerceKey}`,!0);console.log("COPYRIGHT 2023 - SCOG\xC9 Inc. - ALL RIGHTS RESERVED");var stripe=Stripe(`${VITE_StripeKey}`);const elements=stripe.elements(),soundtrack=new SoundtrackManager;window.isMobile=!1;window.sysCheck=()=>{document.addEventListener("keydown",window.checkKeys)};window.checkKeys=async D=>{D.key==="i"&&ci==="false"&&(ci="true",window.dbm=!0,setTimeout(()=>{ci="false"},1e3)),D.key==="c"&&ci==="true"&&(ci="bankoo",universe(),window.universeSystem(),soundtrack.play("scoge1"))};window.sysCheck();window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches?(document.getElementById("shopBut"),document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1):(document.getElementById("shop").style.opacity="100%",document.getElementById("shop").style.visibility="visible",document.getElementById("mobileShop").style.display="none",window.isMobile=!1,window.logoMove(6,3,16,1))});window.sizeInit=()=>{var D=document.getElementById("manBG");if(window.matchMedia("(max-width: 768px)").matches){window.isMobile=!0;var B=document.querySelectorAll(".videoEl");B.forEach(w=>{w.setAttribute("class","mobileVideo")})}else D.addEventListener("mouseover",()=>{window.openPeek()}),D.addEventListener("mouseeout",()=>{window.closePeek()})};window.onload=()=>{window.sizeInit(),window.loadShop(),window.getParamsDesktop(),window.initFilterActions()};window.shopping=()=>{window.matchMedia("(max-width: 768px)").matches?window.openMobile():window.toggleShop()};window.openMobile=()=>{document.getElementById("mobileShop").style.display="block"};window.destiny=()=>{var D=document.getElementById("destiny");D.play(),D.loop=!0};window.initNoti2=D=>{};window.clearFilter=()=>{var D=document.getElementById("shopFilter"),B=document.getElementById("all");window.filterShop(B),D.style.opacity="0%",setTimeout(()=>{D.style.display="none"},1e3)};window.toggleShop=()=>{var D=document.getElementById("orderConfirm");document.getElementById("shopBut");var B=document.getElementById("shopFilter"),w=document.getElementById("shopBG");switch(w.style.transition=".5s all",setTimeout(()=>{shopActive!="closed"&&(document.getElementById("logo").style.transition="1s all",document.getElementById("logo").style.opacity="100%",document.getElementById("shopIcon").style.opacity="100%")},1e3),document.getElementById("shop").style.transition="1s all",document.getElementById("povImageColumnLeft").innerHTML="",shopActive){case"closed":B.style.display="grid",w.style.display="block",setTimeout(()=>{B.style.opacity="100%",w.style.opacity="100%"},1e3),setTimeout(()=>{window.productsloaded===!1&&(document.getElementById("divLoadBG2").style.display="grid"),document.getElementById("shop").style.right="0%",document.getElementById("shopIcon").innerHTML="X"},500),shopActive="open";break;case"open":window.clearFilter(),document.getElementById("shopIcon").style.opacity="0%",w.style.opacity="0%",setTimeout(()=>{w.style.display="none"},500),document.getElementById("logo").style.opacity="0%",window.clearShop();break;case"POVopen":document.getElementById("shop").style.overflowX="scroll",shopActive="open";var Q=document.getElementById("povLeft"),F=document.getElementById("povRight"),O=document.getElementById("shopCheckoutDetails");O.style.transition="1s all",O.style.visibility="hidden",O.style.opacity="0%",Q.style.transition="1s all",F.style.transition="1s all",Q.style.opacity="0%",F.style.opacity="0%",setTimeout(()=>{F.style.visibility="hidden",Q.style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("povImageColumnRight").innerHTML="",window.returnSize(),document.getElementById("eSymbol1").style.display="none",document.getElementById("eSymbol2").style.display="none",window.termsOpen=!1,D.style.display==="block"&&(D.style.display="none");var L=document.getElementsByClassName("shopProduct");for(let G=0;G<L.length;G++)L[G].style.color="black";selectedPSize="",document.getElementById("addToBagBut").innerHTML="Select a size";break}};window.openSettings=()=>{window.clearFilter(),window.clearShop(),window.closeInvestor(),window.matchMedia("(max-width: 768px)").matches;var D=document.getElementById("settingsMenu");document.getElementById("settingsMenu").style.display="grid",setTimeout(()=>{D.style.opacity="100%"},300)};window.clearShop=()=>{document.getElementById("shop").style.right="-70%",document.getElementById("shopIcon").innerHTML="(0)";var D=document.getElementById("shopBG");D.style.transition=".5s all",D.style.opacity="0%",setTimeout(()=>{D.style.display="none"},500),document.getElementById("shopIcon").setAttribute("onclick","toggleShop()"),document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1};window.clearSettings=()=>{document.getElementById("settingsMenu").style.transition="1s all",document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3)};var continents={c1:{name:"1 - ALANSANA",text:"The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOG\xC9 Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",images:`<img id="scroll" src="assets/images/scroll.png"/>
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
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`}},worldName=document.getElementById("worldConName"),worldText=document.getElementById("worldConText"),worldMain=document.getElementById("worldMain"),allMenu=document.querySelectorAll(".worldMenuInner"),worldBottom=document.getElementById("worldBottom");window.changeWorld=D=>{var B=D.id;switch(worldBottom.scrollTop=0,allMenu.forEach(w=>{w.style.backgroundColor="rgba(255, 255, 255, 0.7)",w.style.color="black",document.getElementById(`${B}In`).style.backgroundColor="red",document.getElementById(`${B}In`).style.color="white"}),B){case"world1":worldName.innerHTML=continents.c1.name,worldText.innerHTML=continents.c1.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c1.images;break;case"world2":worldName.innerHTML=continents.c2.name,worldText.innerHTML=continents.c2.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c2.images;break;case"world3":worldName.innerHTML=continents.c3.name,worldText.innerHTML=continents.c3.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c3.images;break;case"world4":worldName.innerHTML=continents.c4.name,worldText.innerHTML=continents.c4.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c4.images;break;case"world5":worldName.innerHTML=continents.c5.name,worldText.innerHTML=continents.c5.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')",worldBottom.innerHTML=continents.c5.images;break;case"world6":worldName.innerHTML=continents.c6.name,worldText.innerHTML=continents.c6.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c6.images;break;case"world7":worldName.innerHTML=continents.c7.name,worldText.innerHTML=continents.c7.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c7.images;break}};var expandDiv=document.getElementById("worldBottom"),speed=5;function expanding(){var D=expandDiv.scrollTop,B=D/speed;expandDiv.style.height=Math.min(Math.max(B,34),68)+"%"}window.isWorld=()=>{expandDiv.addEventListener("scroll",function(){requestAnimationFrame(expanding)},!1)};window.worldTap=()=>{document.getElementById("worldEntrance").style.transition="5s all",document.getElementById("worldEntrance").style.opacity="0%",setTimeout(()=>{document.getElementById("worldEntrance").style.display="none"},3500)};window.setupBook=D=>{var B=document.getElementById("B2222"),w=D.id;if(w==="bookleft"){B.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft-=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright-=2}.jpg" style="margin-left:10%;">`,w==="bookleft"&&pgleft<=0&&(pgleft=1,pgright=2,B.remove());return}if(w==="bookright"){B.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft+=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright+=2}.jpg" style="margin-left:10%;">`,w==="bookright"&&pgright>=15&&(pgleft=1,pgright=2,B.remove());return}};window.setupSketches=()=>{var D=document.getElementById("BSketch");if(sketch3Count===3){D.innerHTML='<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">',sketch3Count=1,sketch2Count=2,sketch1Count=3,D.remove();return}if(sketch3Count===2){D.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}if(sketch3Count===1){D.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count-=2}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}};window.setupMagazine=()=>{var D=document.getElementById("BMAG");D.remove()};var currentShopProduct;window.povOpen=D=>{var B=D.id;currentShopProduct=allProducts[0].filter(O=>O.id.includes(`${B}`)),shopActive="POVopen";var w=document.getElementById("povLeft"),Q=document.getElementById("povRight");w.style.transition="1s all",Q.style.transition="1s all",document.getElementById("povRight").style.visibility="visible",document.getElementById("povLeft").style.visibility="visible",w.style.opacity="100%",Q.style.opacity="100%",document.getElementById("shopProductName").innerHTML=`
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(\xC9)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(S\xC9)</span>
  `,currentShopProduct[0].categories.forEach(O=>{O.name==="\xC9"&&(document.getElementById("eSymbol1").style.display="block"),O.name==="S\xC9"&&(document.getElementById("eSymbol2").style.display="block")}),document.getElementById("shopProductDesc").innerHTML=currentShopProduct[0].description,document.getElementById("shopProductPrice").innerHTML=currentShopProduct[0].price.formatted_with_symbol,currentShopProduct[0].inventory.available<=10?document.getElementById("shopProductAvailable").innerHTML="(LIMITED QUANTITY)":document.getElementById("shopProductAvailable").innerHTML="";var F=document.getElementById("povImageColumnLeft");document.getElementById("povImageColumnRight").style.backgroundImage=`url("${currentShopProduct[0].assets[2].url}")`,currentShopProduct[0].assets.forEach(O=>{var L=document.createElement("img");O.filename==="sizeChart.png"?(L.setAttribute("class","sizeChartImage"),L.setAttribute("src",`${O.url}`),L.setAttribute("id",`${O.filename}`),document.getElementById("povImageColumnRight").appendChild(L)):(L.setAttribute("class","leftPOVimages"),L.setAttribute("src",`${O.url}`),L.setAttribute("id",`${O.url}`),L.setAttribute("onclick","changeToMainPic(this)"),F.appendChild(L))}),currentShopProduct[0].variant_groups[0].options.forEach(O=>{if(document.getElementById(`${O.name}`).style.opacity="100%",document.getElementById(`${O.name}`).style.cursor="pointer",O.name==="SingleSize"){var L=document.querySelectorAll(".shopProduct");document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr",document.getElementById("shopProductSizes").style.justifyItems="end",L.forEach(G=>{G.id!="SingleSize"&&(G.style.display="none")}),document.getElementById("SingleSize").style.display="block"}}),cartEmpty!=!0&&window.productAdded()};window.returnSize=()=>{var D=document.querySelectorAll(".shopProduct");D.forEach(B=>{B.id!="SingleSize"&&(B.style.display="block"),document.getElementById(B.id).style.opacity=".3"}),document.getElementById("SingleSize").style.display="none",document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr",document.getElementById("shopProductSizes").style.justifyItems="center"};window.changeToMainPic=D=>{var B=D.id;document.getElementById("povImageColumnRight").style.backgroundImage=`url("${B}")`};window.sizeGuideOn=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="100%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="0%"};window.sizeGuideOff=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="0%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="100%"};window.productAdded=()=>{document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="visible",document.getElementById("shopCheckoutDetails").style.opacity="100%"};window.purchaseComplete=()=>{document.getElementById("orderConfirm").style.display="block",document.getElementById("orderConfirm").innerHTML=`
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOG\xC9.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `};window.termsOpen=!1;window.toggleTerms=()=>{var D=document.getElementById("tandc"),B=document.getElementById("gMenu");if(D.style.display==="block"){document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",B.style.display="block",window.termsOpen=!1;return}else if(D.style.display!="block"){document.getElementById("tandc").innerHTML=`
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(\u2018\xC9\u2019)</span> or <span class="blue">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `,document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="block",document.getElementById("tandc").style.opacity="100%",B.style.display="none",window.termsOpen=!0,D.scrollTop=0;return}};var allProducts=[];window.productsloaded=!1;window.loadShop=async()=>{document.getElementById("divLoadBG2").style.display="grid";var D=document.getElementById("allShopProducts");await commerce.products.list({limit:100,sortDirection:"desc"}).then(B=>{allProducts.push(B.data)}).catch(B=>{console.log("There was an error fetching the products",B)}),allProducts[0].forEach(B=>{var w=document.createElement("div");w.setAttribute("class","productContainer"),w.setAttribute("id",B.id),B.categories.forEach(Q=>{w.classList.add(Q.name)}),window.matchMedia("(max-width: 768px)").matches||(w.setAttribute("onmouseover","shopOnHover(this)"),w.setAttribute("onmouseout","shopOutHover(this)"),w.setAttribute("onclick","povOpen(this)")),D.appendChild(w),w.innerHTML=`
    <img class="shopProductsOver" src="${B.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${B.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${B.name}</p>
    <p class="pcProductPrice">${B.price.formatted_with_symbol}</p>
</div>
    `,window.productsloaded=!0,document.getElementById("divLoadBG2").style.display="none"}),window.urlParamsActive===!0&&(window.povOpen(document.getElementById(window.viewThisProduct)),window.history.replaceState({},document.title,"/index.html")),commerce.cart.empty()};window.imageFade=D=>{var B=D;B.style.transition="all 2s",B.style.opacity="1"};window.shopOnHover=D=>{var B=D.id,w=document.getElementById(B);w.getElementsByTagName("img")[1].style.opacity="0%",w.getElementsByTagName("img")[0].style.opacity="100%"};window.shopOutHover=D=>{var B=D.id,w=document.getElementById(B);w.getElementsByTagName("img")[0].style.opacity="0%",w.getElementsByTagName("img")[1].style.opacity="100%"};var currentCart,cartEmpty=!0,selectedPSize="";window.selectSize=D=>{D.style.opacity==="1"?(selectedPSize=D.id,document.getElementById("addToBagBut").innerHTML="Add To Bag",document.getElementById("addToBagBut").setAttribute("onclick","addToCart()")):(selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick","addToCart()"));var B=document.getElementsByClassName("shopProduct");for(let w=0;w<B.length;w++)B[w].style.color="black";D.style.color="#ff002d"};var countriesObj={};window.addToCart=async()=>{document.getElementById("shoppingBag").innerHTML="";var D=currentShopProduct[0].variant_groups[0].options.filter(B=>B.name.includes(`${selectedPSize}`));document.getElementById("divLoadBG").style.display="grid",commerce.cart.retrieve().then(B=>{currentCart=B}).then(()=>{commerce.cart.add(currentShopProduct[0].id,1,{[currentShopProduct[0].variant_groups[0].id]:D[0].id}).then(()=>{cartEmpty=!1,commerce.cart.retrieve().then(B=>{currentCart=B,document.getElementById("divLoadBG").style.display="none",document.getElementById("addToBagBut").innerHTML="Select a size";var w=document.getElementsByClassName("shopProduct");for(let Q=0;Q<w.length;Q++)w[Q].style.color="";window.variantAbbr="",B.line_items.forEach(Q=>{var F=document.createElement("div");switch(F.setAttribute("class","bagProducts"),document.getElementById("shoppingBag").appendChild(F),Q.selected_options[0].option_name){case"Small":window.variantAbbr="S";break;case"Medium":window.variantAbbr="M";break;case"Large":window.variantAbbr="L";break;case"XLarge":window.variantAbbr="XL";break;case"2XLarge":window.variantAbbr="2XL";break;case"3XLarge":window.variantAbbr="3XL";break}F.innerHTML=`
                  <div class="bagProduct">
                      <div class="bagPOver" id="${Q.id}">
                          <p id="test1sizeQty">(${Q.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${Q.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `,F.setAttribute("id",`${Q.id}Parent`),document.getElementById(Q.id).style.backgroundImage=`url(${Q.image.url})`}),document.getElementById("carTotal").innerHTML=B.subtotal.formatted_with_symbol}),window.productAdded(),selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick")})}),countriedAdded===!1&&(countriedAdded=!0,commerce.services.localeListCountries().then(B=>{countriesObj=B.countries,Object.keys(B.countries).forEach(w=>{var Q=document.createElement("option"),F=document.getElementById("input9");Q.setAttribute("value",w),Q.setAttribute("title",w),Q.innerHTML=`${countriesObj[w].substr(0,20)}`,F.appendChild(Q)})}))};window.removeLineItem=D=>{document.getElementById("divLoadBG").style.display="grid";var B=D.id;commerce.cart.remove(B).then(w=>{document.getElementById(`${B}Parent`).remove(),document.getElementById("divLoadBG").style.display="none",document.getElementById("carTotal").innerHTML=w.cart.subtotal.formatted_with_symbol,currentCart=w.cart,w.cart.total_items===0&&(cartEmpty=!0,countriedAdded=!1,document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `)})};window.states=()=>{var D=document.getElementById("input9"),B=D.options[D.selectedIndex].value,w=D.options[D.selectedIndex].title,Q=document.getElementById("carTotal");document.getElementById("input7").innerHTML="",B==="US"&&(document.getElementById("input4").value="$0.00 Free Shipping",window.shippingMethodValue=1,Q.innerHTML=currentCart.subtotal.formatted_with_symbol),B!="US"&&(document.getElementById("input4").value="$70.00 Intl Shipping",window.shippingMethodValue=3,Q.innerHTML=`$${currentCart.subtotal.raw+70}.00`),w==="US2"&&(document.getElementById("input4").value="$130.00 - Next Day Air",window.shippingMethodValue=2,Q.innerHTML=`$${currentCart.subtotal.raw+130}.00`),commerce.services.localeListSubdivisions(B).then(F=>{var O=F.subdivisions;Object.keys(F.subdivisions).forEach(L=>{var G=document.createElement("option"),U=document.getElementById("input7");if(Object.keys(F.subdivisions).length<=1){var q=document.createElement("option");q.innerHTML="Not Available.",D.options[D.selectedIndex].innerHTML="Select Country",document.getElementById("input7").appendChild(q)}else G.setAttribute("value",O[L]),G.setAttribute("id",L),G.innerHTML=O[L].substring(0,20),U.appendChild(G)})})};var style={base:{color:"black"}};const card=elements.create("card",{style});card.mount("#card-element");window.shippingId="";window.checkOut=async()=>{var D=document.getElementById("input1").value,B=document.getElementById("input2").value,w=document.getElementById("input3").value;document.getElementById("input4").value;var Q=document.getElementById("input5").value,F=document.getElementById("input6").value,O=document.getElementById("input8").value,L=document.getElementById("input10").value,G=document.getElementById("input9"),U=document.getElementById("input7"),q=G.options[G.selectedIndex].value,Y=U.options[U.selectedIndex].id;document.getElementById("divLoadBG").style.display="grid",setTimeout(()=>{document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"},2e4),await commerce.checkout.generateToken(currentCart.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async W=>{commerce.checkout.getShippingOptions(W.id,{country:q}).then(async X=>{window.shippingMethodValue===1&&(window.shippingId=X[0].id),window.shippingMethodValue===3&&(window.shippingId=X[0].id),window.shippingMethodValue===2&&(window.shippingId=X[1].id);var te=`${D} ${B}`;const oe=await stripe.createPaymentMethod({type:"card",card}).catch(ne=>{console.log(ne)});if(oe.error){document.getElementById("divLoadBG").style.display="none",console.log(oe.error.message),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${oe.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const ne=await commerce.checkout.capture(W.id,{customer:{firstname:`${D}`,lastname:`${B}`,email:`${Q}`},extra_fields:{extr_DWy4oG4dY56Jx2:L},shipping:{name:`${te}`,street:`${w}`,town_city:`${F}`,county_state:`${Y}`,postal_zip_code:`${O}`,country:`${q}`},fulfillment:{shipping_method:`${window.shippingId}`},billing:{name:`${te}`,street:`${w}`,town_city:`${F}`,county_state:`${Y}`,postal_zip_code:`${O}`,country:`${q}`},payment:{gateway:"stripe",stripe:{payment_method_id:oe.paymentMethod.id}}});setTimeout(()=>{window.closeLoadE()},2e4),window.closeLoadE(),document.getElementById("confirmNumber").innerHTML=ne.customer_reference,window.purchaseComplete(),document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`,document.getElementById("shoppingBag").innerHTML="",cartEmpty=!0,document.getElementById("shopCheckoutDetails").style.opacity="0%",card.clear();return}catch(ne){document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${ne.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(ne);return}finally{}})}).catch(W=>{console.log("Error",W)})};window.closeLoadE=()=>{document.getElementById("divLoadBG").innerHTML='<div class="loader"></div>',document.getElementById("divLoadBG").removeAttribute("onclick"),document.getElementById("divLoadBG").style.display="none",card.clear()};window.ccsOn=()=>{document.getElementById("crypto").innerHTML="Coming Soon"};window.ccsOff=()=>{document.getElementById("crypto").innerHTML="Pay with Crypto"};window.filterShop=D=>{var B=document.getElementById("sectionDesc"),w=D.id;switch(w!=="all"&&(document.getElementById("all").checked=!1),w){case"all":B.innerHTML=`<h2>All Products</h2>
      <h4>SCOG\xC9 Shop - Collection pieces, gifts and more.</h4>`,document.getElementById("all").checked=!0,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(Q=>{Q.style.display="block"});break;case"tops":B.innerHTML=`<h2>Tops</h2>
      <h4>SCOG\xC9 T-Shirts, Hoodies, Shirts and Jackets.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!0,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(Q=>{Q.classList.contains("tops")?Q.style.display="block":Q.style.display="none"});break;case"bottoms":B.innerHTML=`<h2>Bottoms</h2>
      <h4>SCOG\xC9 Pants, Shorts, and Joggers.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!0,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(Q=>{Q.classList.contains("bottoms")?Q.style.display="block":Q.style.display="none"});break;case"accessories":B.innerHTML=`<h2>Accessories</h2>
      <h4>SCOG\xC9 Hats & More.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!0,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(Q=>{Q.classList.contains("accessories")?Q.style.display="block":Q.style.display="none"});break;case"art":B.innerHTML=`<h2>Artwork</h2>
      <h4>SCOG\xC9 Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!0,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(Q=>{Q.classList.contains("art")?Q.style.display="block":Q.style.display="none"});break;case"gifts":B.innerHTML=`<h2>Gifts</h2>
      <h4>SCOG\xC9 pieces wrapped, boxed, and ready to gift.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!0,document.querySelectorAll(".productContainer").forEach(Q=>{Q.classList.contains("gifts")?Q.style.display="block":Q.style.display="none"});break}};window.sayScoge=()=>{document.getElementById("scoge").play()};window.logoMove=(D,B,w,Q)=>{var F=document.getElementById("logo");F.style.transition=`${Q}s all`,window.matchMedia("(max-width: 768px)").matches||(F.style.left=`${B}%`,F.style.width=`${w}%`,F.style.top=`${D}%`)};window.dActiveBut=()=>{var D=document.getElementById("settingsBut"),B=document.getElementById("extraBut");shopActive==="closed"?(D.style.opacity="25%",B.style.opacity="25%",D.removeAttribute("onclick"),B.setAttribute("onclick","")):(D.style.opacity="100%",B.style.opacity="100%",D.setAttribute("onclick","openSettings();"),B.setAttribute("onclick","openExtra();"))};window.clearMainUi=()=>{var D=document.getElementById("gMenu"),B=document.getElementById("logo"),w=document.getElementById("settingsMenu"),Q=document.getElementById("subText1"),F=document.getElementById("subText2");D.style.transition="2s all",B.style.transition="2s all",Q.style.transition="2s all",F.style.transition="2s all",window.inUniverse===!0?setTimeout(()=>{D.style.left="10%",B.style.left="30%",D.style.opacity="0",B.style.opacity="0%",setTimeout(()=>{Q.style.bottom="49%",Q.style.opacity="100%",setTimeout(()=>{F.style.bottom="45%"},500)},1e3),setTimeout(()=>{D.style.display="none",B.style.display="none",w.style.display="none"},3e3)},2e3):(D.style.display="block",B.style.display="block",w.style.display="grid",Q.style.bottom="44%",Q.style.opacity="0%",F.style.bottom="40%",F.style.opacity="0%",setTimeout(()=>{D.style.left="6%",B.style.left="3%",D.style.opacity="100%",B.style.opacity="100%"},1e3),setTimeout(()=>{F.style.display="none",Q.style.display="none"}))};window.mainMenuPosition=(D,B,w,Q,F)=>{var O=document.querySelectorAll(".mainMenuBut");document.getElementById(""),O.forEach(L=>{switch(L.style.backgroundColor=D,L.id){case"shopBut":document.getElementById("shopBut").style.left=B;break;case"newGameBut":document.getElementById("newGameBut").style.left=w;break;case"settingsBut":document.getElementById("settingsBut").style.left=Q;break;case"subscribeBut":document.getElementById("subscribeBut").style.left=F;break}})};window.activateInvestors=()=>{document.getElementById("getInvestors").style.display="block",document.getElementById("investBut").style.display="block",window.matchMedia("(max-width: 768px)").matches&&(document.getElementById("settingsBut").style.display="none")};window.openInvestors=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="0%"};window.closeInvestor=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="-100%"};window.getParamsDesktop=()=>{const D=new URLSearchParams(location.search);window.investorsView=D.get("Investors"),window.investorsView==="true"&&window.activateInvestors()};var peeking=!1,seekActive=!1,seeking=!1,cards=document.querySelectorAll(".seekOptCard");window.seekType="content";window.conversationHistory=[""];window.sameConvo=!1;window.digiFormDislayed=!1;window.newsFormDisplayed=!1;window.contactFormDisplayed=!1;window.form1Active=!1;window.form2Active=!1;window.galleryActive=!1;window.galleryEntry=!1;window.digiPre=!1;window.view="seeking";window.galleryType="video";window.dialogue=new SeekDialogue("",[{text:"What do you seek%?",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]},{text:"Ok, here they are.",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]);window.openSeek=()=>{var D=document.getElementById("seekModal"),B=document.getElementById("manBG");document.getElementById("seekModal").style.display="grid",seeking===!1&&(setTimeout(()=>{window.dialogue.start(0,"sysResp"),setTimeout(()=>{gsapWithCSS.to(B,{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.fromTo(seekOptCards,{scale:.7,opacity:0},{duration:.3,scale:1,opacity:1,ease:"power4.out",stagger:{each:.2}})},1400)},1e3),cards.forEach(w=>{w.addEventListener("click",Q=>{window.seek(Q)})}),seeking=!0),D.style.pointerEvents="auto",gsapWithCSS.to("#seekModal",{duration:.3,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,filter:"blur(0px)",ease:"power2.inOut"}),window.isMobile!=!0&&(B.addEventListener("mouseover",()=>{window.openPeek()}),B.addEventListener("mouseout",()=>{window.closePeek()})),seekActive=!0,peeking=!1,window.trackMouse(),window.trackMouseMove()};const seekOptCards=document.querySelectorAll(".seekOptCard");window.closeSeek=()=>{if(window.view==="seeking"){seekActive=!1,gsapWithCSS.to("#seekModal",{duration:.3,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,scale:1.1,ease:"power2.inOut"}),setTimeout(()=>{document.getElementById("seekModal").style.pointerEvents="none",document.getElementById("seekModal").style.display="none"},500),gsapWithCSS.to(".seekContent",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.4,backgroundColor:"rgba(15,15,18,1)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:1,opacity:1,ease:"power2.inOut"}),peeking=!1,seekActive=!1;return}if(window.view==="gallery"){gsapWithCSS.to("#seekGallery",{duration:1,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#manBG",{duration:1,backgroundColor:"",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,border:"1px solid var(--secondary)",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,scale:1,y:0,ease:"power2.out"}),document.getElementById("seekBody").style.pointerEvents="auto",document.getElementById("manBG").style.pointerEvents="auto",document.getElementById("seekGallery").style.pointerEvents="none",document.getElementById("videoGallery").style.pointerEvents="none",setTimeout(()=>{document.getElementById("portalVideo").style.display="none",document.getElementById("portalVideo2").style.display="none"},1e3),document.getElementById("portalVideo2").pause(),document.getElementById("portalVideo").pause(),window.view="seeking",window.viewingPg=!1,gsapWithCSS.to("#tooltip",{opacity:0,duration:.5,ease:"power2.out"}),document.getElementById("tooltip").style.display="none",document.getElementById("homeTip").innerHTML="HOME",gsapWithCSS.to("#dropdown",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#soundToggle",{duration:1,opacity:0,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="none",document.getElementById("soundToggle").style.pointerEvents="none";return}};window.closePeek=()=>{if(peeking===!0&&seekActive===!0&&window.view==="seeking"){gsapWithCSS.to(".seekContent",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.1,backgroundColor:"rgba(15,15,18,1)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:.1,opacity:1,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}if(peeking===!0&&seekActive===!0&&window.galleryType==="images"){gsapWithCSS.to("#seekGallery",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:.1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:0,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}if(peeking===!0&&seekActive===!0&&window.galleryType==="video"){gsapWithCSS.to("#videoGallery",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:.1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:0,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}};window.openPeek=()=>{if(peeking===!1&&seekActive===!0&&window.view==="seeking"){gsapWithCSS.to(".seekContent",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.2,backgroundColor:"rgba(15,15,18,.5)",ease:"power2.inOut"}),seekActive=!0,peeking=!0;return}if(peeking===!1&&seekActive===!0&&window.galleryType==="images"){gsapWithCSS.to("#seekGallery",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:.5,ease:"power2.inOut"}),seekActive=!0,peeking=!0,window.view="gallery";return}if(peeking===!1&&seekActive===!0&&window.galleryType==="video"){gsapWithCSS.to("#videoGallery",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:.5,ease:"power2.inOut"}),seekActive=!0,peeking=!0,window.view="gallery";return}};gsapWithCSS.registerPlugin(TextPlugin);window.transitionWords=(D,B,w,Q)=>{const F=document.querySelector(D),O=B.split(""),L=w.split(""),G=Math.max(O.length,L.length);for(;O.length<G;)O.push("");for(;L.length<G;)L.push("");const U=gsapWithCSS.timeline();for(let q=0;q<G;q++)U.to(F,{duration:Q/G,text:L.slice(0,q+1).join(""),overwrite:"auto",onUpdate:()=>{const Y=O[q]||"",W=L[q]||"",X=Y.charCodeAt(0),te=W.charCodeAt(0),oe=Math.round((te-X)*U.progress()+X),ne=String.fromCharCode(oe),ce=L.slice(0,q).join("")+ne+L.slice(q+1).join("");F.textContent=ce}},q*(Q/G))};window.seek=D=>{var U,q;var B=D.target.classList[1],w=document.querySelectorAll(".blink");switch(w.forEach(Y=>{Y.classList.remove("blink")}),B){case"seekOpt1":if(window.digiPre=!1,window.conversationHistory[0]==="seekOpt1"){var Q=document.querySelectorAll(".visualSubMenu"),F=Q[0];gsapWithCSS.to(F,{duration:.5,backgroundColor:"#94be8c",ease:"power2.inOut"}),gsapWithCSS.to(F,{duration:.5,color:"black",ease:"power2.inOut"}),gsapWithCSS.to(F,{duration:.8,backgroundColor:"",ease:"power2.inOut",delay:.8}),gsapWithCSS.to(F,{duration:.8,color:"",ease:"power2.inOut",delay:.8});return}else{window.convoHist(B),window.seekType="content";let Y="Show me some visuals.",W="Which would you like to see?";window.systemSpeak(Y,W),window.galleryActive=!0}break;case"seekOpt2":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt2"){window.convoHist(B),window.seekType="content";let Y="I want to listen to music",W="Now playing 'SCOG\xC9 Radio'.";window.systemSpeak(Y,W)}else{var O=document.querySelector("scoge-music").shadowRoot.querySelector("#musicInterface");gsapWithCSS.to(O,{duration:.5,backgroundColor:"red",ease:"power2.inOut"}),setTimeout(()=>{gsapWithCSS.to(O,{duration:.5,backgroundColor:"rgba(0,0,0,0)",ease:"power2.inOut"})},500)}break;case"seekOpt3":if(window.conversationHistory[0]!="seekOpt3"){window.convoHist(B),window.seekType="form";let Y="What is Digisette?",W="Digisette";window.systemSpeak(Y,W)}else(U=document.getElementById("genInput"))==null||U.focus();break;case"seekOpt4":window.digiPre=!1,window.convoHist(B),window.seekType="discover";var L="Tell me about Bankoo.",G="World";window.systemSpeak(L,G);break;case"seekOpt5":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt5"){window.convoHist(B),window.seekType="mailing";let Y="I want community?",W="Keep up by joining our mailing list.";window.systemSpeak(Y,W)}else(q=document.getElementById("genInput"))==null||q.focus();break;case"seekOpt6":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt6"){window.convoHist(B),window.seekType="info";let Y="Tell me about 'SCOG\xC9' the brand.",W="Sure, what would you like to know?";window.systemSpeak(Y,W)}else{let W=document.querySelectorAll(".infoSubMenu")[0];gsapWithCSS.to(W,{duration:.5,backgroundColor:"#94be8c",ease:"power2.inOut"}),gsapWithCSS.to(W,{duration:.5,color:"black",ease:"power2.inOut"}),gsapWithCSS.to(W,{duration:.8,backgroundColor:"",ease:"power2.inOut",delay:.8}),gsapWithCSS.to(W,{duration:.8,color:"",ease:"power2.inOut",delay:.8})}break}};window.convoHist=D=>{window.conversationHistory[0]===D?window.sameConvo=!0:(window.conversationHistory[0]=D,window.sameConvo=!1)};window.systemSpeak=async(D,B)=>{var F,O;try{document.getElementById("convoCont").style.display="block",setTimeout(()=>{document.getElementById("convoCont").style.animationPlayState="paused",document.getElementById("convoCont").style.animation="blink 1s infinite;",document.getElementById("Reqerror").style.display="block",setTimeout(()=>{document.getElementById("Reqerror").style.display="none",document.getElementById("convoCont").style.animationPlayState="running",gsapWithCSS.to("#convoCont",{duration:1,opacity:0,ease:"power2.inOut"})},3e3)},6e3);const L=new dist.Configuration({apiKey:VITE_ScogeI}),G=new dist.OpenAIApi(L);if(window.sameConvo===!0?window.completion=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:"Say tell me more in 5 words or less. Don't use quotation marks."}],max_tokens:15}).catch(q=>{console.log(q)}):window.completion=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this request '${D}' Don't make it a question.`}],max_tokens:10}).catch(q=>{console.log(q)}),window.seekType==="content"||window.seekType==="info"||window.seekType==="mailing")window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this answer '${B}'.`}],top_p:1,max_tokens:15,stop:["."]}).catch(q=>{console.log(q)});else if(window.seekType==="discover"){const q=await __vitePreload(()=>import("./library.51888626.js"),[]).catch(W=>{console.log(W)}),Y=JSON.stringify(q.default);var w=JSON.parse(Y),Q=JSON.stringify(w[B]);window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide some information from ${Q} in a brief sentence, 20 words max.`}],top_p:1,max_tokens:30}).catch(W=>{console.log(W)})}else if(window.seekType==="form"){const q=await __vitePreload(()=>import("./library.51888626.js"),[]).catch(te=>{console.log(te)}),Y=JSON.stringify(q.default);let W=JSON.parse(Y),X=JSON.stringify(W[B]);window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide some information from ${X} in a brief sentence, 20 words max, Include information from any key value pair. Then ask to 'join the MAILING LIST below'.`}],top_p:1,max_tokens:30}).catch(te=>{console.log(te)})}else if(window.seekType==="contact"){const q=await __vitePreload(()=>import("./library.51888626.js"),[]),Y=JSON.stringify(q.default);let W=JSON.parse(Y),X=JSON.stringify(W[B]);window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide information from ${X} in a brief sentence, 20 words max, Do not include an opening statement, Alternatively they can 'send a Message below'.`}],top_p:1,max_tokens:20}).catch(te=>{console.log(te)})}else window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this answer '${B}'.`}],max_tokens:10}).catch(q=>{console.log(q)});window.completion2!=null&&(document.getElementById("convoCont").style.display="none");let U=new SeekDialogue("",[{text:`${(F=window.completion.data.choices[0].message.content)!=null?F:D}`,choices:[{text:"Ok, here they are.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]);window.dialogue=new SeekDialogue("",[{text:"What $ do you seek%?",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]},{text:`${(O=window.completion2.data.choices[0].message.content)!=null?O:B}`,choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]),U.start(0,"userResp")}catch(L){console.log(L)}};const myContainer=document.querySelector("#seekResp");window.autoSmoothScrollToBottom=D=>{if(D.scrollHeight>D.clientHeight){var B=gsapWithCSS.timeline();B.to(D,{duration:2,scrollTop:D.scrollHeight-D.clientHeight-10,ease:"power2.out"})}};myContainer.addEventListener("DOMSubtreeModified",function(){setTimeout(()=>{window.autoSmoothScrollToBottom(myContainer)},250)});window.sub=()=>{var D=document.querySelector("#subGeneral");D.addEventListener("submit",B=>{B.preventDefault(),document.getElementById("genSubLoad").style.opacity="100%",gsapWithCSS.to("#genSubLoad",{rotation:360,duration:2,repeat:-1,ease:"none"});let w=new FormData(D);fetch("https://script.google.com/macros/s/AKfycby5qNgMlcrC9_ICCIc7_h_7XdGgUGLOLuwFWaMiVLL7Bfd0-rmGAsF3lhPZuH-EKvvhnw/exec",{method:"POST",body:w,mode:"cors"}).then(Q=>Q.text()).then(Q=>{var F=document.getElementById("subGeneral"),O=document.createElement("span");O.setAttribute("id","done"),O.innerHTML="Done!",F.appendChild(O),D.reset(),gsapWithCSS.to("#done",{opacity:0,duration:1,ease:"power2.out",onComplete:function(){F.removeChild(O)}}),gsapWithCSS.to("#genSubLoad",{opacity:0,duration:1,ease:"power2.out"})})})};window.sub2=()=>{var D=document.querySelector("#subGeneral2");D.addEventListener("submit",B=>{document.getElementById("genCat2").value=`${document.getElementById("genInput3").value}`,B.preventDefault(),document.getElementById("genSubLoad2").style.opacity="100%",gsapWithCSS.to("#genSubLoad2",{rotation:360,duration:2,repeat:-1,ease:"none"});let w=new FormData(D);fetch("https://script.google.com/macros/s/AKfycby5qNgMlcrC9_ICCIc7_h_7XdGgUGLOLuwFWaMiVLL7Bfd0-rmGAsF3lhPZuH-EKvvhnw/exec",{method:"POST",body:w,mode:"cors"}).then(Q=>Q.text()).then(Q=>{var F=document.getElementById("genSubLoad2");D.reset(),gsapWithCSS.killTweensOf("#genSubLoad2"),gsapWithCSS.set("#genSubLoad2",{rotation:0}),F.innerHTML="Sent.",setTimeout(()=>{gsapWithCSS.to("#genSubLoad2",{opacity:0,duration:1,ease:"power2.out"}),setTimeout(()=>{F.innerHTML="|"},1e3)},3e3)})})};var mouseMoving=!1;window.viewingPg=!1;window.trackMouse=D=>{if(window.viewingPg===!0&&(window.galleryType=="images"||window.galleryType=="video"&&window.view==="gallery")){var B=document.getElementById("tooltip");B.style.left=D.clientX-40+"px",B.style.top=D.clientY-20+"px",gsapWithCSS.to("#tooltip",{opacity:1,duration:.5,ease:"power2.out"}),mouseMoving===!1&&gsapWithCSS.to("#tooltip",{opacity:0,duration:.5,ease:"power2.out",delay:2}),B.style.display="block"}};window.trackMouseMove=()=>{document.addEventListener("mousemove",function(){mouseMoving=!0,setTimeout(function(){mouseMoving=!1},2e3)})};window.initFilterActions=()=>{var D=document.querySelectorAll(".visualFilters"),B=document.querySelector(".dropbtn").innerHTML;D.forEach(w=>{w.addEventListener("click",Q=>{var F=Q.target;switch(Q.preventDefault(),F.id){case"filter1":window.removeItemsNotEqualToValue("DY1"),window.transitionWords("#dBtn",`${B}____`,"DISCOVERY 1",2);break;case"filter2":window.removeItemsNotEqualToValue("CH1"),window.transitionWords("#dBtn",`${B}____`,"CHAPTER 1",2);break;case"filter3":window.removeItemsNotEqualToValue("CH2"),window.transitionWords("#dBtn",`${B}____`,"CHAPTER 2",2);break;case"filter4":window.removeItemsNotEqualToValue("ART"),window.transitionWords("#dBtn",`${B}____`,"ARTWORK",2);break;case"filter5":window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles),window.transitionWords("#dBtn",`${B}____`,"RANDOM",2),portal.showNextMedia();break}})})};window.removeItemsNotEqualToValue=D=>{window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles);for(let B=window.filteredImages.length-1;B>=0;B--)window.filteredImages[B].publicUrl.includes(D)===!1&&window.filteredImages.splice(B,1);for(let B=window.filteredVideos.length-1;B>=0;B--)window.filteredVideos[B].publicUrl.includes(D)===!1&&window.filteredVideos.splice(B,1)};portal();class Typing{constructor(B,w,Q=50){this.text=B,this.element=document.getElementById(w),this.currentIndex=0,this.delay=Q}start(){this.intervalId=setInterval(()=>{this.currentIndex<this.text.length?(this.element.textContent+=this.text.charAt(this.currentIndex),this.currentIndex++):clearInterval(this.intervalId)},this.delay)}}window.galleryHelp=new Typing("Click to move forward.","simpleNoti",speed=80);
