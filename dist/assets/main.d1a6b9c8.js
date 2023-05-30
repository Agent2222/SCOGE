var Lt=Object.defineProperty;var Ut=(F,b,Q)=>b in F?Lt(F,b,{enumerable:!0,configurable:!0,writable:!0,value:Q}):F[b]=Q;var rt=(F,b,Q)=>(Ut(F,typeof b!="symbol"?b+"":b,Q),Q);import"./wScoge.fc00b881.js";var uni="";const scriptRel="modulepreload",seen={},base$1="/",__vitePreload=function(b,Q){return!Q||Q.length===0?b():Promise.all(Q.map(D=>{if(D=`${base$1}${D}`,D in seen)return;seen[D]=!0;const O=D.endsWith(".css"),U=O?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${U}`))return;const q=document.createElement("link");if(q.rel=O?"stylesheet":scriptRel,O||(q.as="script",q.crossOrigin=""),q.href=D,document.head.appendChild(q),O)return new Promise((G,Y)=>{q.addEventListener("load",G),q.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${D}`)))})})).then(()=>b())};var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof{}!="undefined"?{}:typeof self!="undefined"?self:{};function getDefaultExportFromCjs(F){return F&&F.__esModule&&Object.prototype.hasOwnProperty.call(F,"default")?F.default:F}function getAugmentedNamespace(F){if(F.__esModule)return F;var b=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(F).forEach(function(Q){var D=Object.getOwnPropertyDescriptor(F,Q);Object.defineProperty(b,Q,D.get?D:{enumerable:!0,get:function(){return F[Q]}})}),b}function commonjsRequire(F){throw new Error('Could not dynamically require "'+F+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var objectWithoutProperties={exports:{}},objectWithoutPropertiesLoose={exports:{}};(function(F){function b(Q,D){if(Q==null)return{};var O={},U=Object.keys(Q),q,G;for(G=0;G<U.length;G++)q=U[G],!(D.indexOf(q)>=0)&&(O[q]=Q[q]);return O}F.exports=b,F.exports.__esModule=!0,F.exports.default=F.exports})(objectWithoutPropertiesLoose);(function(F){var b=objectWithoutPropertiesLoose.exports;function Q(D,O){if(D==null)return{};var U=b(D,O),q,G;if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(D);for(G=0;G<Y.length;G++)q=Y[G],!(O.indexOf(q)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,q)||(U[q]=D[q]))}return U}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(objectWithoutProperties);var toConsumableArray={exports:{}},arrayWithoutHoles={exports:{}},arrayLikeToArray={exports:{}};(function(F){function b(Q,D){(D==null||D>Q.length)&&(D=Q.length);for(var O=0,U=new Array(D);O<D;O++)U[O]=Q[O];return U}F.exports=b,F.exports.__esModule=!0,F.exports.default=F.exports})(arrayLikeToArray);(function(F){var b=arrayLikeToArray.exports;function Q(D){if(Array.isArray(D))return b(D)}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(arrayWithoutHoles);var iterableToArray={exports:{}};(function(F){function b(Q){if(typeof Symbol!="undefined"&&Q[Symbol.iterator]!=null||Q["@@iterator"]!=null)return Array.from(Q)}F.exports=b,F.exports.__esModule=!0,F.exports.default=F.exports})(iterableToArray);var unsupportedIterableToArray={exports:{}};(function(F){var b=arrayLikeToArray.exports;function Q(D,O){if(!!D){if(typeof D=="string")return b(D,O);var U=Object.prototype.toString.call(D).slice(8,-1);if(U==="Object"&&D.constructor&&(U=D.constructor.name),U==="Map"||U==="Set")return Array.from(D);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return b(D,O)}}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(unsupportedIterableToArray);var nonIterableSpread={exports:{}};(function(F){function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}F.exports=b,F.exports.__esModule=!0,F.exports.default=F.exports})(nonIterableSpread);(function(F){var b=arrayWithoutHoles.exports,Q=iterableToArray.exports,D=unsupportedIterableToArray.exports,O=nonIterableSpread.exports;function U(q){return b(q)||Q(q)||D(q)||O()}F.exports=U,F.exports.__esModule=!0,F.exports.default=F.exports})(toConsumableArray);var _typeof$2={exports:{}};(function(F){function b(Q){return F.exports=b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},F.exports.__esModule=!0,F.exports.default=F.exports,b(Q)}F.exports=b,F.exports.__esModule=!0,F.exports.default=F.exports})(_typeof$2);var defineProperty={exports:{}},toPropertyKey={exports:{}},toPrimitive={exports:{}};(function(F){var b=_typeof$2.exports.default;function Q(D,O){if(b(D)!=="object"||D===null)return D;var U=D[Symbol.toPrimitive];if(U!==void 0){var q=U.call(D,O||"default");if(b(q)!=="object")return q;throw new TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(D)}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(toPrimitive);(function(F){var b=_typeof$2.exports.default,Q=toPrimitive.exports;function D(O){var U=Q(O,"string");return b(U)==="symbol"?U:String(U)}F.exports=D,F.exports.__esModule=!0,F.exports.default=F.exports})(toPropertyKey);(function(F){var b=toPropertyKey.exports;function Q(D,O,U){return O=b(O),O in D?Object.defineProperty(D,O,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[O]=U,D}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(defineProperty);var classCallCheck={exports:{}};(function(F){function b(Q,D){if(!(Q instanceof D))throw new TypeError("Cannot call a class as a function")}F.exports=b,F.exports.__esModule=!0,F.exports.default=F.exports})(classCallCheck);var createClass={exports:{}};(function(F){var b=toPropertyKey.exports;function Q(O,U){for(var q=0;q<U.length;q++){var G=U[q];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(O,b(G.key),G)}}function D(O,U,q){return U&&Q(O.prototype,U),q&&Q(O,q),Object.defineProperty(O,"prototype",{writable:!1}),O}F.exports=D,F.exports.__esModule=!0,F.exports.default=F.exports})(createClass);var regeneratorRuntime$1={exports:{}};(function(F){var b=_typeof$2.exports.default;function Q(){F.exports=Q=function(){return D},F.exports.__esModule=!0,F.exports.default=F.exports;var D={},O=Object.prototype,U=O.hasOwnProperty,q=Object.defineProperty||function(Te,De,xe){Te[De]=xe.value},G=typeof Symbol=="function"?Symbol:{},Y=G.iterator||"@@iterator",X=G.asyncIterator||"@@asyncIterator",ee=G.toStringTag||"@@toStringTag";function re(Te,De,xe){return Object.defineProperty(Te,De,{value:xe,enumerable:!0,configurable:!0,writable:!0}),Te[De]}try{re({},"")}catch{re=function(xe,Ne,$e){return xe[Ne]=$e}}function ie(Te,De,xe,Ne){var $e=De&&De.prototype instanceof Ae?De:Ae,Le=Object.create($e.prototype),Pe=new Ye(Ne||[]);return q(Le,"_invoke",{value:Me(Te,xe,Pe)}),Le}function ae(Te,De,xe){try{return{type:"normal",arg:Te.call(De,xe)}}catch(Ne){return{type:"throw",arg:Ne}}}D.wrap=ie;var ce={};function Ae(){}function ge(){}function Be(){}var Ie={};re(Ie,Y,function(){return this});var _e=Object.getPrototypeOf,Ce=_e&&_e(_e(Ge([])));Ce&&Ce!==O&&U.call(Ce,Y)&&(Ie=Ce);var be=Be.prototype=Ae.prototype=Object.create(Ie);function Qe(Te){["next","throw","return"].forEach(function(De){re(Te,De,function(xe){return this._invoke(De,xe)})})}function Se(Te,De){function xe($e,Le,Pe,He){var et=ae(Te[$e],Te,Le);if(et.type!=="throw"){var de=et.arg,tt=de.value;return tt&&b(tt)=="object"&&U.call(tt,"__await")?De.resolve(tt.__await).then(function(at){xe("next",at,Pe,He)},function(at){xe("throw",at,Pe,He)}):De.resolve(tt).then(function(at){de.value=at,Pe(de)},function(at){return xe("throw",at,Pe,He)})}He(et.arg)}var Ne;q(this,"_invoke",{value:function(Le,Pe){function He(){return new De(function(et,de){xe(Le,Pe,et,de)})}return Ne=Ne?Ne.then(He,He):He()}})}function Me(Te,De,xe){var Ne="suspendedStart";return function($e,Le){if(Ne==="executing")throw new Error("Generator is already running");if(Ne==="completed"){if($e==="throw")throw Le;return Ve()}for(xe.method=$e,xe.arg=Le;;){var Pe=xe.delegate;if(Pe){var He=ke(Pe,xe);if(He){if(He===ce)continue;return He}}if(xe.method==="next")xe.sent=xe._sent=xe.arg;else if(xe.method==="throw"){if(Ne==="suspendedStart")throw Ne="completed",xe.arg;xe.dispatchException(xe.arg)}else xe.method==="return"&&xe.abrupt("return",xe.arg);Ne="executing";var et=ae(Te,De,xe);if(et.type==="normal"){if(Ne=xe.done?"completed":"suspendedYield",et.arg===ce)continue;return{value:et.arg,done:xe.done}}et.type==="throw"&&(Ne="completed",xe.method="throw",xe.arg=et.arg)}}}function ke(Te,De){var xe=De.method,Ne=Te.iterator[xe];if(Ne===void 0)return De.delegate=null,xe==="throw"&&Te.iterator.return&&(De.method="return",De.arg=void 0,ke(Te,De),De.method==="throw")||xe!=="return"&&(De.method="throw",De.arg=new TypeError("The iterator does not provide a '"+xe+"' method")),ce;var $e=ae(Ne,Te.iterator,De.arg);if($e.type==="throw")return De.method="throw",De.arg=$e.arg,De.delegate=null,ce;var Le=$e.arg;return Le?Le.done?(De[Te.resultName]=Le.value,De.next=Te.nextLoc,De.method!=="return"&&(De.method="next",De.arg=void 0),De.delegate=null,ce):Le:(De.method="throw",De.arg=new TypeError("iterator result is not an object"),De.delegate=null,ce)}function Fe(Te){var De={tryLoc:Te[0]};1 in Te&&(De.catchLoc=Te[1]),2 in Te&&(De.finallyLoc=Te[2],De.afterLoc=Te[3]),this.tryEntries.push(De)}function Ue(Te){var De=Te.completion||{};De.type="normal",delete De.arg,Te.completion=De}function Ye(Te){this.tryEntries=[{tryLoc:"root"}],Te.forEach(Fe,this),this.reset(!0)}function Ge(Te){if(Te){var De=Te[Y];if(De)return De.call(Te);if(typeof Te.next=="function")return Te;if(!isNaN(Te.length)){var xe=-1,Ne=function $e(){for(;++xe<Te.length;)if(U.call(Te,xe))return $e.value=Te[xe],$e.done=!1,$e;return $e.value=void 0,$e.done=!0,$e};return Ne.next=Ne}}return{next:Ve}}function Ve(){return{value:void 0,done:!0}}return ge.prototype=Be,q(be,"constructor",{value:Be,configurable:!0}),q(Be,"constructor",{value:ge,configurable:!0}),ge.displayName=re(Be,ee,"GeneratorFunction"),D.isGeneratorFunction=function(Te){var De=typeof Te=="function"&&Te.constructor;return!!De&&(De===ge||(De.displayName||De.name)==="GeneratorFunction")},D.mark=function(Te){return Object.setPrototypeOf?Object.setPrototypeOf(Te,Be):(Te.__proto__=Be,re(Te,ee,"GeneratorFunction")),Te.prototype=Object.create(be),Te},D.awrap=function(Te){return{__await:Te}},Qe(Se.prototype),re(Se.prototype,X,function(){return this}),D.AsyncIterator=Se,D.async=function(Te,De,xe,Ne,$e){$e===void 0&&($e=Promise);var Le=new Se(ie(Te,De,xe,Ne),$e);return D.isGeneratorFunction(De)?Le:Le.next().then(function(Pe){return Pe.done?Pe.value:Le.next()})},Qe(be),re(be,ee,"Generator"),re(be,Y,function(){return this}),re(be,"toString",function(){return"[object Generator]"}),D.keys=function(Te){var De=Object(Te),xe=[];for(var Ne in De)xe.push(Ne);return xe.reverse(),function $e(){for(;xe.length;){var Le=xe.pop();if(Le in De)return $e.value=Le,$e.done=!1,$e}return $e.done=!0,$e}},D.values=Ge,Ye.prototype={constructor:Ye,reset:function(De){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ue),!De)for(var xe in this)xe.charAt(0)==="t"&&U.call(this,xe)&&!isNaN(+xe.slice(1))&&(this[xe]=void 0)},stop:function(){this.done=!0;var De=this.tryEntries[0].completion;if(De.type==="throw")throw De.arg;return this.rval},dispatchException:function(De){if(this.done)throw De;var xe=this;function Ne(de,tt){return Pe.type="throw",Pe.arg=De,xe.next=de,tt&&(xe.method="next",xe.arg=void 0),!!tt}for(var $e=this.tryEntries.length-1;$e>=0;--$e){var Le=this.tryEntries[$e],Pe=Le.completion;if(Le.tryLoc==="root")return Ne("end");if(Le.tryLoc<=this.prev){var He=U.call(Le,"catchLoc"),et=U.call(Le,"finallyLoc");if(He&&et){if(this.prev<Le.catchLoc)return Ne(Le.catchLoc,!0);if(this.prev<Le.finallyLoc)return Ne(Le.finallyLoc)}else if(He){if(this.prev<Le.catchLoc)return Ne(Le.catchLoc,!0)}else{if(!et)throw new Error("try statement without catch or finally");if(this.prev<Le.finallyLoc)return Ne(Le.finallyLoc)}}}},abrupt:function(De,xe){for(var Ne=this.tryEntries.length-1;Ne>=0;--Ne){var $e=this.tryEntries[Ne];if($e.tryLoc<=this.prev&&U.call($e,"finallyLoc")&&this.prev<$e.finallyLoc){var Le=$e;break}}Le&&(De==="break"||De==="continue")&&Le.tryLoc<=xe&&xe<=Le.finallyLoc&&(Le=null);var Pe=Le?Le.completion:{};return Pe.type=De,Pe.arg=xe,Le?(this.method="next",this.next=Le.finallyLoc,ce):this.complete(Pe)},complete:function(De,xe){if(De.type==="throw")throw De.arg;return De.type==="break"||De.type==="continue"?this.next=De.arg:De.type==="return"?(this.rval=this.arg=De.arg,this.method="return",this.next="end"):De.type==="normal"&&xe&&(this.next=xe),ce},finish:function(De){for(var xe=this.tryEntries.length-1;xe>=0;--xe){var Ne=this.tryEntries[xe];if(Ne.finallyLoc===De)return this.complete(Ne.completion,Ne.afterLoc),Ue(Ne),ce}},catch:function(De){for(var xe=this.tryEntries.length-1;xe>=0;--xe){var Ne=this.tryEntries[xe];if(Ne.tryLoc===De){var $e=Ne.completion;if($e.type==="throw"){var Le=$e.arg;Ue(Ne)}return Le}}throw new Error("illegal catch attempt")},delegateYield:function(De,xe,Ne){return this.delegate={iterator:Ge(De),resultName:xe,nextLoc:Ne},this.method==="next"&&(this.arg=void 0),ce}},D}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(regeneratorRuntime$1);var runtime=regeneratorRuntime$1.exports(),regenerator=runtime;try{regeneratorRuntime=runtime}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}var asyncToGenerator={exports:{}};(function(F){function b(D,O,U,q,G,Y,X){try{var ee=D[Y](X),re=ee.value}catch(ie){U(ie);return}ee.done?O(re):Promise.resolve(re).then(q,G)}function Q(D){return function(){var O=this,U=arguments;return new Promise(function(q,G){var Y=D.apply(O,U);function X(re){b(Y,q,G,X,ee,"next",re)}function ee(re){b(Y,q,G,X,ee,"throw",re)}X(void 0)})}}F.exports=Q,F.exports.__esModule=!0,F.exports.default=F.exports})(asyncToGenerator);var axios$6={exports:{}},bind$5=function(b,Q){return function(){for(var O=new Array(arguments.length),U=0;U<O.length;U++)O[U]=arguments[U];return b.apply(Q,O)}},bind$4=bind$5,toString$2=Object.prototype.toString;function isArray$1(F){return toString$2.call(F)==="[object Array]"}function isUndefined$1(F){return typeof F=="undefined"}function isBuffer$1(F){return F!==null&&!isUndefined$1(F)&&F.constructor!==null&&!isUndefined$1(F.constructor)&&typeof F.constructor.isBuffer=="function"&&F.constructor.isBuffer(F)}function isArrayBuffer$1(F){return toString$2.call(F)==="[object ArrayBuffer]"}function isFormData$1(F){return typeof FormData!="undefined"&&F instanceof FormData}function isArrayBufferView$1(F){var b;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?b=ArrayBuffer.isView(F):b=F&&F.buffer&&F.buffer instanceof ArrayBuffer,b}function isString$1(F){return typeof F=="string"}function isNumber$1(F){return typeof F=="number"}function isObject$1(F){return F!==null&&typeof F=="object"}function isPlainObject$1(F){if(toString$2.call(F)!=="[object Object]")return!1;var b=Object.getPrototypeOf(F);return b===null||b===Object.prototype}function isDate$1(F){return toString$2.call(F)==="[object Date]"}function isFile$1(F){return toString$2.call(F)==="[object File]"}function isBlob$1(F){return toString$2.call(F)==="[object Blob]"}function isFunction$1(F){return toString$2.call(F)==="[object Function]"}function isStream$1(F){return isObject$1(F)&&isFunction$1(F.pipe)}function isURLSearchParams$1(F){return typeof URLSearchParams!="undefined"&&F instanceof URLSearchParams}function trim$1(F){return F.trim?F.trim():F.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv$1(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach$1(F,b){if(!(F===null||typeof F=="undefined"))if(typeof F!="object"&&(F=[F]),isArray$1(F))for(var Q=0,D=F.length;Q<D;Q++)b.call(null,F[Q],Q,F);else for(var O in F)Object.prototype.hasOwnProperty.call(F,O)&&b.call(null,F[O],O,F)}function merge$1(){var F={};function b(O,U){isPlainObject$1(F[U])&&isPlainObject$1(O)?F[U]=merge$1(F[U],O):isPlainObject$1(O)?F[U]=merge$1({},O):isArray$1(O)?F[U]=O.slice():F[U]=O}for(var Q=0,D=arguments.length;Q<D;Q++)forEach$1(arguments[Q],b);return F}function extend$1(F,b,Q){return forEach$1(b,function(O,U){Q&&typeof O=="function"?F[U]=bind$4(O,Q):F[U]=O}),F}function stripBOM$1(F){return F.charCodeAt(0)===65279&&(F=F.slice(1)),F}var utils$w={isArray:isArray$1,isArrayBuffer:isArrayBuffer$1,isBuffer:isBuffer$1,isFormData:isFormData$1,isArrayBufferView:isArrayBufferView$1,isString:isString$1,isNumber:isNumber$1,isObject:isObject$1,isPlainObject:isPlainObject$1,isUndefined:isUndefined$1,isDate:isDate$1,isFile:isFile$1,isBlob:isBlob$1,isFunction:isFunction$1,isStream:isStream$1,isURLSearchParams:isURLSearchParams$1,isStandardBrowserEnv:isStandardBrowserEnv$1,forEach:forEach$1,merge:merge$1,extend:extend$1,trim:trim$1,stripBOM:stripBOM$1},utils$v=utils$w;function encode$2(F){return encodeURIComponent(F).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$5=function(b,Q,D){if(!Q)return b;var O;if(D)O=D(Q);else if(utils$v.isURLSearchParams(Q))O=Q.toString();else{var U=[];utils$v.forEach(Q,function(Y,X){Y===null||typeof Y=="undefined"||(utils$v.isArray(Y)?X=X+"[]":Y=[Y],utils$v.forEach(Y,function(re){utils$v.isDate(re)?re=re.toISOString():utils$v.isObject(re)&&(re=JSON.stringify(re)),U.push(encode$2(X)+"="+encode$2(re))}))}),O=U.join("&")}if(O){var q=b.indexOf("#");q!==-1&&(b=b.slice(0,q)),b+=(b.indexOf("?")===-1?"?":"&")+O}return b},utils$u=utils$w;function InterceptorManager$3(){this.handlers=[]}InterceptorManager$3.prototype.use=function(b,Q,D){return this.handlers.push({fulfilled:b,rejected:Q,synchronous:D?D.synchronous:!1,runWhen:D?D.runWhen:null}),this.handlers.length-1};InterceptorManager$3.prototype.eject=function(b){this.handlers[b]&&(this.handlers[b]=null)};InterceptorManager$3.prototype.forEach=function(b){utils$u.forEach(this.handlers,function(D){D!==null&&b(D)})};var InterceptorManager_1$1=InterceptorManager$3,utils$t=utils$w,normalizeHeaderName$3=function(b,Q){utils$t.forEach(b,function(O,U){U!==Q&&U.toUpperCase()===Q.toUpperCase()&&(b[Q]=O,delete b[U])})},enhanceError$5=function(b,Q,D,O,U){return b.config=Q,D&&(b.code=D),b.request=O,b.response=U,b.isAxiosError=!0,b.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},b},enhanceError$4=enhanceError$5,createError$5=function(b,Q,D,O,U){var q=new Error(b);return enhanceError$4(q,Q,D,O,U)},createError$4=createError$5,settle$3=function(b,Q,D){var O=D.config.validateStatus;!D.status||!O||O(D.status)?b(D):Q(createError$4("Request failed with status code "+D.status,D.config,null,D.request,D))},utils$s=utils$w,cookies$3=utils$s.isStandardBrowserEnv()?function(){return{write:function(Q,D,O,U,q,G){var Y=[];Y.push(Q+"="+encodeURIComponent(D)),utils$s.isNumber(O)&&Y.push("expires="+new Date(O).toGMTString()),utils$s.isString(U)&&Y.push("path="+U),utils$s.isString(q)&&Y.push("domain="+q),G===!0&&Y.push("secure"),document.cookie=Y.join("; ")},read:function(Q){var D=document.cookie.match(new RegExp("(^|;\\s*)("+Q+")=([^;]*)"));return D?decodeURIComponent(D[3]):null},remove:function(Q){this.write(Q,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$3=function(b){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(b)},combineURLs$3=function(b,Q){return Q?b.replace(/\/+$/,"")+"/"+Q.replace(/^\/+/,""):b},isAbsoluteURL$2=isAbsoluteURL$3,combineURLs$2=combineURLs$3,buildFullPath$3=function(b,Q){return b&&!isAbsoluteURL$2(Q)?combineURLs$2(b,Q):Q},utils$r=utils$w,ignoreDuplicateOf$1=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$3=function(b){var Q={},D,O,U;return b&&utils$r.forEach(b.split(`
`),function(G){if(U=G.indexOf(":"),D=utils$r.trim(G.substr(0,U)).toLowerCase(),O=utils$r.trim(G.substr(U+1)),D){if(Q[D]&&ignoreDuplicateOf$1.indexOf(D)>=0)return;D==="set-cookie"?Q[D]=(Q[D]?Q[D]:[]).concat([O]):Q[D]=Q[D]?Q[D]+", "+O:O}}),Q},utils$q=utils$w,isURLSameOrigin$3=utils$q.isStandardBrowserEnv()?function(){var b=/(msie|trident)/i.test(navigator.userAgent),Q=document.createElement("a"),D;function O(U){var q=U;return b&&(Q.setAttribute("href",q),q=Q.href),Q.setAttribute("href",q),{href:Q.href,protocol:Q.protocol?Q.protocol.replace(/:$/,""):"",host:Q.host,search:Q.search?Q.search.replace(/^\?/,""):"",hash:Q.hash?Q.hash.replace(/^#/,""):"",hostname:Q.hostname,port:Q.port,pathname:Q.pathname.charAt(0)==="/"?Q.pathname:"/"+Q.pathname}}return D=O(window.location.href),function(q){var G=utils$q.isString(q)?O(q):q;return G.protocol===D.protocol&&G.host===D.host}}():function(){return function(){return!0}}(),utils$p=utils$w,settle$2=settle$3,cookies$2=cookies$3,buildURL$4=buildURL$5,buildFullPath$2=buildFullPath$3,parseHeaders$2=parseHeaders$3,isURLSameOrigin$2=isURLSameOrigin$3,createError$3=createError$5,xhr$1=function(b){return new Promise(function(D,O){var U=b.data,q=b.headers,G=b.responseType;utils$p.isFormData(U)&&delete q["Content-Type"];var Y=new XMLHttpRequest;if(b.auth){var X=b.auth.username||"",ee=b.auth.password?unescape(encodeURIComponent(b.auth.password)):"";q.Authorization="Basic "+btoa(X+":"+ee)}var re=buildFullPath$2(b.baseURL,b.url);Y.open(b.method.toUpperCase(),buildURL$4(re,b.params,b.paramsSerializer),!0),Y.timeout=b.timeout;function ie(){if(!!Y){var ce="getAllResponseHeaders"in Y?parseHeaders$2(Y.getAllResponseHeaders()):null,Ae=!G||G==="text"||G==="json"?Y.responseText:Y.response,ge={data:Ae,status:Y.status,statusText:Y.statusText,headers:ce,config:b,request:Y};settle$2(D,O,ge),Y=null}}if("onloadend"in Y?Y.onloadend=ie:Y.onreadystatechange=function(){!Y||Y.readyState!==4||Y.status===0&&!(Y.responseURL&&Y.responseURL.indexOf("file:")===0)||setTimeout(ie)},Y.onabort=function(){!Y||(O(createError$3("Request aborted",b,"ECONNABORTED",Y)),Y=null)},Y.onerror=function(){O(createError$3("Network Error",b,null,Y)),Y=null},Y.ontimeout=function(){var Ae="timeout of "+b.timeout+"ms exceeded";b.timeoutErrorMessage&&(Ae=b.timeoutErrorMessage),O(createError$3(Ae,b,b.transitional&&b.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",Y)),Y=null},utils$p.isStandardBrowserEnv()){var ae=(b.withCredentials||isURLSameOrigin$2(re))&&b.xsrfCookieName?cookies$2.read(b.xsrfCookieName):void 0;ae&&(q[b.xsrfHeaderName]=ae)}"setRequestHeader"in Y&&utils$p.forEach(q,function(Ae,ge){typeof U=="undefined"&&ge.toLowerCase()==="content-type"?delete q[ge]:Y.setRequestHeader(ge,Ae)}),utils$p.isUndefined(b.withCredentials)||(Y.withCredentials=!!b.withCredentials),G&&G!=="json"&&(Y.responseType=b.responseType),typeof b.onDownloadProgress=="function"&&Y.addEventListener("progress",b.onDownloadProgress),typeof b.onUploadProgress=="function"&&Y.upload&&Y.upload.addEventListener("progress",b.onUploadProgress),b.cancelToken&&b.cancelToken.promise.then(function(Ae){!Y||(Y.abort(),O(Ae),Y=null)}),U||(U=null),Y.send(U)})},utils$o=utils$w,normalizeHeaderName$2=normalizeHeaderName$3,enhanceError$3=enhanceError$5,DEFAULT_CONTENT_TYPE$1={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset$1(F,b){!utils$o.isUndefined(F)&&utils$o.isUndefined(F["Content-Type"])&&(F["Content-Type"]=b)}function getDefaultAdapter$1(){var F;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(F=xhr$1),F}function stringifySafely$1(F,b,Q){if(utils$o.isString(F))try{return(b||JSON.parse)(F),utils$o.trim(F)}catch(D){if(D.name!=="SyntaxError")throw D}return(Q||JSON.stringify)(F)}var defaults$7={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter$1(),transformRequest:[function(b,Q){return normalizeHeaderName$2(Q,"Accept"),normalizeHeaderName$2(Q,"Content-Type"),utils$o.isFormData(b)||utils$o.isArrayBuffer(b)||utils$o.isBuffer(b)||utils$o.isStream(b)||utils$o.isFile(b)||utils$o.isBlob(b)?b:utils$o.isArrayBufferView(b)?b.buffer:utils$o.isURLSearchParams(b)?(setContentTypeIfUnset$1(Q,"application/x-www-form-urlencoded;charset=utf-8"),b.toString()):utils$o.isObject(b)||Q&&Q["Content-Type"]==="application/json"?(setContentTypeIfUnset$1(Q,"application/json"),stringifySafely$1(b)):b}],transformResponse:[function(b){var Q=this.transitional,D=Q&&Q.silentJSONParsing,O=Q&&Q.forcedJSONParsing,U=!D&&this.responseType==="json";if(U||O&&utils$o.isString(b)&&b.length)try{return JSON.parse(b)}catch(q){if(U)throw q.name==="SyntaxError"?enhanceError$3(q,this,"E_JSON_PARSE"):q}return b}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(b){return b>=200&&b<300}};defaults$7.headers={common:{Accept:"application/json, text/plain, */*"}};utils$o.forEach(["delete","get","head"],function(b){defaults$7.headers[b]={}});utils$o.forEach(["post","put","patch"],function(b){defaults$7.headers[b]=utils$o.merge(DEFAULT_CONTENT_TYPE$1)});var defaults_1$1=defaults$7,utils$n=utils$w,defaults$6=defaults_1$1,transformData$3=function(b,Q,D){var O=this||defaults$6;return utils$n.forEach(D,function(q){b=q.call(O,b,Q)}),b},isCancel$3=function(b){return!!(b&&b.__CANCEL__)},utils$m=utils$w,transformData$2=transformData$3,isCancel$2=isCancel$3,defaults$5=defaults_1$1;function throwIfCancellationRequested$1(F){F.cancelToken&&F.cancelToken.throwIfRequested()}var dispatchRequest$3=function(b){throwIfCancellationRequested$1(b),b.headers=b.headers||{},b.data=transformData$2.call(b,b.data,b.headers,b.transformRequest),b.headers=utils$m.merge(b.headers.common||{},b.headers[b.method]||{},b.headers),utils$m.forEach(["delete","get","head","post","put","patch","common"],function(O){delete b.headers[O]});var Q=b.adapter||defaults$5.adapter;return Q(b).then(function(O){return throwIfCancellationRequested$1(b),O.data=transformData$2.call(b,O.data,O.headers,b.transformResponse),O},function(O){return isCancel$2(O)||(throwIfCancellationRequested$1(b),O&&O.response&&(O.response.data=transformData$2.call(b,O.response.data,O.response.headers,b.transformResponse))),Promise.reject(O)})},utils$l=utils$w,mergeConfig$5=function(b,Q){Q=Q||{};var D={},O=["url","method","data"],U=["headers","auth","proxy","params"],q=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],G=["validateStatus"];function Y(ie,ae){return utils$l.isPlainObject(ie)&&utils$l.isPlainObject(ae)?utils$l.merge(ie,ae):utils$l.isPlainObject(ae)?utils$l.merge({},ae):utils$l.isArray(ae)?ae.slice():ae}function X(ie){utils$l.isUndefined(Q[ie])?utils$l.isUndefined(b[ie])||(D[ie]=Y(void 0,b[ie])):D[ie]=Y(b[ie],Q[ie])}utils$l.forEach(O,function(ae){utils$l.isUndefined(Q[ae])||(D[ae]=Y(void 0,Q[ae]))}),utils$l.forEach(U,X),utils$l.forEach(q,function(ae){utils$l.isUndefined(Q[ae])?utils$l.isUndefined(b[ae])||(D[ae]=Y(void 0,b[ae])):D[ae]=Y(void 0,Q[ae])}),utils$l.forEach(G,function(ae){ae in Q?D[ae]=Y(b[ae],Q[ae]):ae in b&&(D[ae]=Y(void 0,b[ae]))});var ee=O.concat(U).concat(q).concat(G),re=Object.keys(b).concat(Object.keys(Q)).filter(function(ae){return ee.indexOf(ae)===-1});return utils$l.forEach(re,X),D};const name$1="axios",version$1="0.21.4",description$1="Promise based HTTP client for the browser and node.js",main$1="index.js",scripts$1={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository$1={type:"git",url:"https://github.com/axios/axios.git"},keywords$1=["xhr","http","ajax","promise","node"],author$1="Matt Zabriskie",license$1="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies$1={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser$1={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies$1={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0$1={name:name$1,version:version$1,description:description$1,main:main$1,scripts:scripts$1,repository:repository$1,keywords:keywords$1,author:author$1,license:license$1,bugs,homepage,devDependencies:devDependencies$1,browser:browser$1,jsdelivr,unpkg,typings,dependencies:dependencies$1,bundlesize},pkg=require$$0$1,validators$3={};["object","boolean","number","function","string","symbol"].forEach(function(F,b){validators$3[F]=function(D){return typeof D===F||"a"+(b<1?"n ":" ")+F}});var deprecatedWarnings$1={},currentVerArr=pkg.version.split(".");function isOlderVersion(F,b){for(var Q=b?b.split("."):currentVerArr,D=F.split("."),O=0;O<3;O++){if(Q[O]>D[O])return!0;if(Q[O]<D[O])return!1}return!1}validators$3.transitional=function(b,Q,D){var O=Q&&isOlderVersion(Q);function U(q,G){return"[Axios v"+pkg.version+"] Transitional option '"+q+"'"+G+(D?". "+D:"")}return function(q,G,Y){if(b===!1)throw new Error(U(G," has been removed in "+Q));return O&&!deprecatedWarnings$1[G]&&(deprecatedWarnings$1[G]=!0,console.warn(U(G," has been deprecated since v"+Q+" and will be removed in the near future"))),b?b(q,G,Y):!0}};function assertOptions$1(F,b,Q){if(typeof F!="object")throw new TypeError("options must be an object");for(var D=Object.keys(F),O=D.length;O-- >0;){var U=D[O],q=b[U];if(q){var G=F[U],Y=G===void 0||q(G,U,F);if(Y!==!0)throw new TypeError("option "+U+" must be "+Y);continue}if(Q!==!0)throw Error("Unknown option "+U)}}var validator$3={isOlderVersion,assertOptions:assertOptions$1,validators:validators$3},utils$k=utils$w,buildURL$3=buildURL$5,InterceptorManager$2=InterceptorManager_1$1,dispatchRequest$2=dispatchRequest$3,mergeConfig$4=mergeConfig$5,validator$2=validator$3,validators$2=validator$2.validators;function Axios$3(F){this.defaults=F,this.interceptors={request:new InterceptorManager$2,response:new InterceptorManager$2}}Axios$3.prototype.request=function(b){typeof b=="string"?(b=arguments[1]||{},b.url=arguments[0]):b=b||{},b=mergeConfig$4(this.defaults,b),b.method?b.method=b.method.toLowerCase():this.defaults.method?b.method=this.defaults.method.toLowerCase():b.method="get";var Q=b.transitional;Q!==void 0&&validator$2.assertOptions(Q,{silentJSONParsing:validators$2.transitional(validators$2.boolean,"1.0.0"),forcedJSONParsing:validators$2.transitional(validators$2.boolean,"1.0.0"),clarifyTimeoutError:validators$2.transitional(validators$2.boolean,"1.0.0")},!1);var D=[],O=!0;this.interceptors.request.forEach(function(ie){typeof ie.runWhen=="function"&&ie.runWhen(b)===!1||(O=O&&ie.synchronous,D.unshift(ie.fulfilled,ie.rejected))});var U=[];this.interceptors.response.forEach(function(ie){U.push(ie.fulfilled,ie.rejected)});var q;if(!O){var G=[dispatchRequest$2,void 0];for(Array.prototype.unshift.apply(G,D),G=G.concat(U),q=Promise.resolve(b);G.length;)q=q.then(G.shift(),G.shift());return q}for(var Y=b;D.length;){var X=D.shift(),ee=D.shift();try{Y=X(Y)}catch(re){ee(re);break}}try{q=dispatchRequest$2(Y)}catch(re){return Promise.reject(re)}for(;U.length;)q=q.then(U.shift(),U.shift());return q};Axios$3.prototype.getUri=function(b){return b=mergeConfig$4(this.defaults,b),buildURL$3(b.url,b.params,b.paramsSerializer).replace(/^\?/,"")};utils$k.forEach(["delete","get","head","options"],function(b){Axios$3.prototype[b]=function(Q,D){return this.request(mergeConfig$4(D||{},{method:b,url:Q,data:(D||{}).data}))}});utils$k.forEach(["post","put","patch"],function(b){Axios$3.prototype[b]=function(Q,D,O){return this.request(mergeConfig$4(O||{},{method:b,url:Q,data:D}))}});var Axios_1$1=Axios$3;function Cancel$5(F){this.message=F}Cancel$5.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$5.prototype.__CANCEL__=!0;var Cancel_1$1=Cancel$5,Cancel$4=Cancel_1$1;function CancelToken$1(F){if(typeof F!="function")throw new TypeError("executor must be a function.");var b;this.promise=new Promise(function(O){b=O});var Q=this;F(function(O){Q.reason||(Q.reason=new Cancel$4(O),b(Q.reason))})}CancelToken$1.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken$1.source=function(){var b,Q=new CancelToken$1(function(O){b=O});return{token:Q,cancel:b}};var CancelToken_1$1=CancelToken$1,spread$1=function(b){return function(D){return b.apply(null,D)}},isAxiosError$1=function(b){return typeof b=="object"&&b.isAxiosError===!0},utils$j=utils$w,bind$3=bind$5,Axios$2=Axios_1$1,mergeConfig$3=mergeConfig$5,defaults$4=defaults_1$1;function createInstance$1(F){var b=new Axios$2(F),Q=bind$3(Axios$2.prototype.request,b);return utils$j.extend(Q,Axios$2.prototype,b),utils$j.extend(Q,b),Q}var axios$5=createInstance$1(defaults$4);axios$5.Axios=Axios$2;axios$5.create=function(b){return createInstance$1(mergeConfig$3(axios$5.defaults,b))};axios$5.Cancel=Cancel_1$1;axios$5.CancelToken=CancelToken_1$1;axios$5.isCancel=isCancel$3;axios$5.all=function(b){return Promise.all(b)};axios$5.spread=spread$1;axios$5.isAxiosError=isAxiosError$1;axios$6.exports=axios$5;axios$6.exports.default=axios$5;var axios$4=axios$6.exports,_objectWithoutProperties=objectWithoutProperties.exports,_toConsumableArray=toConsumableArray.exports,_typeof$1=_typeof$2.exports,_defineProperty=defineProperty.exports,_classCallCheck=classCallCheck.exports,_createClass=createClass.exports,_regeneratorRuntime=regenerator,_asyncToGenerator=asyncToGenerator.exports,axios$3=axios$4;function _interopDefaultLegacy(F){return F&&typeof F=="object"&&"default"in F?F:{default:F}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof$1),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios$3),Storage=function(){function F(b){_classCallCheck__default.default(this,F),this.commerce=b}return _createClass__default.default(F,[{key:"set",value:function(b,Q,D){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;var O,U="";if(O=this.commerce.options.config&&this.commerce.options.config.cookie_path!==void 0?this.commerce.options.config.cookie_path:"/",D){var q=new Date;q.setTime(q.getTime()+24*D*60*60*1e3),U="; expires="+q.toUTCString()}return document.cookie=b+"="+Q+U+"; path="+O}},{key:"get",value:function(b){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;b+="=";for(var Q=0,D=Array.from(document.cookie.split(";"));Q<D.length;Q++){for(var O=D[Q];O.charAt(0)===" ";)O=O.substring(1,O.length);if(O.indexOf(b)===0)return O.substring(b.length,O.length)}return null}},{key:"remove",value:function(b){return this.set(b,"",-1)}}]),F}();function ownKeys(F,b){var Q=Object.keys(F);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(F);b&&(D=D.filter(function(O){return Object.getOwnPropertyDescriptor(F,O).enumerable})),Q.push.apply(Q,D)}return Q}function _objectSpread(F){for(var b=1;b<arguments.length;b++){var Q=arguments[b]!=null?arguments[b]:{};b%2?ownKeys(Q,!0).forEach(function(D){_defineProperty__default.default(F,D,Q[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(Q)):ownKeys(Q).forEach(function(D){Object.defineProperty(F,D,Object.getOwnPropertyDescriptor(Q,D))})}return F}var Cart=function(){function F(Q){_classCallCheck__default.default(this,F),this.commerce=Q,this.cartId=null}var b;return _createClass__default.default(F,[{key:"refresh",value:function(){var Q=this;return this.commerce.request("carts").then(function(D){var O=D.id;return Q.commerce.storage.set("commercejs_cart_id",O,Q.commerce.options.cartLifetime),Q.cartId=O,D})}},{key:"id",value:function(){if(this.cartId!==null)return this.cartId;var Q=this.commerce.storage.get("commercejs_cart_id");return typeof Q=="string"&&Q.length?Q:null}},{key:"request",value:(b=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function Q(){var D,O,U,q,G,Y=this,X=arguments;return _regeneratorRuntime__default.default.wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(D=X.length>0&&X[0]!==void 0?X[0]:"",O=X.length>1&&X[1]!==void 0?X[1]:"get",U=X.length>2&&X[2]!==void 0?X[2]:null,q=X.length>3&&X[3]!==void 0&&X[3],G=typeof D=="string"&&D.length?"/".concat(D):"",this.id()){ee.next=8;break}return ee.next=8,this.refresh();case 8:return ee.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(G),O,U,q).catch(function(re){if(re.statusCode&&re.statusCode===404)return Y.refresh().then(function(){return Y.commerce.request("carts/".concat(Y.id()).concat(G),O,U,q)});throw re}));case 9:case"end":return ee.stop()}},Q,this)})),function(){return b.apply(this,arguments)})},{key:"add",value:function(Q){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,U={};if(typeof O=="string"&&O.startsWith("vrnt"))U.variant_id=O;else if(O&&_typeof__default.default(O)==="object"){var q=Object.keys(O).every(function(X){return X.startsWith("vgrp")}),G=Object.values(O).every(function(X){return X.startsWith("optn")});if(!q||!G)throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");U.options=O}else if(O)throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");var Y=_objectSpread({id:_typeof__default.default(Q)==="object"?Q.id:Q,quantity:D},U);return this.request("","post",Y)}},{key:"retrieve",value:function(){var Q=this,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return D&&(this.cartId=D),this.request().then(function(O){return Q.cartId=O&&O.id||null,O})}},{key:"checkQuantity",value:function(Q,D){return this.commerce.request("products/".concat(Q)).then(function(O){return D<=O.quantity})}},{key:"remove",value:function(Q){return this.request("items/".concat(Q),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(Q,D){return this.request("items/".concat(Q),"put",D)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),F}(),Categories=function(){function F(b){_classCallCheck__default.default(this,F),this.commerce=b}return _createClass__default.default(F,[{key:"list",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return typeof b=="function"?this.commerce.request("categories"):this.commerce.request("categories","get",b)}},{key:"retrieve",value:function(b){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("categories/".concat(b),"get",Q)}}]),F}(),Checkout=function(){function Checkout(F){_classCallCheck__default.default(this,Checkout),this.commerce=F}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then(function(data){return eval(data.sift_js)})}},{key:"generateToken",value:function(F,b){return this.commerce.request("checkouts/".concat(F),"get",b)}},{key:"generateTokenFrom",value:function(F,b){if(!["product_id","cart","permalink"].includes(F))throw new Error('Cannot generate a token with unknown "'.concat(F,'" type'));return this.generateToken(b,{type:F})}},{key:"capture",value:function(F,b){var Q=this;return this.commerce.request("checkouts/".concat(F),"post",b).then(function(D){return Q.commerce.cart.refresh(),D})}},{key:"receipt",value:function(F){return this.commerce.request("checkouts/".concat(F,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(F,b){return this.commerce.request("checkouts/".concat(F,"/check/pay_what_you_want"),"get",b)}},{key:"fields",value:function(F){return this.commerce.request("checkouts/".concat(F,"/fields"))}},{key:"setTaxZone",value:function(F,b){return this.commerce.request("checkouts/".concat(F,"/helper/set_tax_zone"),"get",b)}},{key:"getLocationFromIP",value:function(F){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",Q=b&&b.length?"?ip_address=".concat(b):"";return this.commerce.request("checkouts/".concat(F,"/helper/location_from_ip").concat(Q))}},{key:"isFree",value:function(F){return this.commerce.request("checkouts/".concat(F,"/check/is_free"))}},{key:"checkVariant",value:function(F,b,Q){return this.commerce.request("checkouts/".concat(F,"/check/").concat(b,"/variant"),"get",Q)}},{key:"checkDiscount",value:function(F,b){return this.commerce.request("checkouts/".concat(F,"/check/discount"),"get",b)}},{key:"checkShippingOption",value:function(F,b){return this.commerce.request("checkouts/".concat(F,"/check/shipping"),"get",b)}},{key:"getShippingOptions",value:function(F,b){return this.commerce.request("checkouts/".concat(F,"/helper/shipping_options"),"get",b)}},{key:"checkQuantity",value:function(F,b,Q){return this.commerce.request("checkouts/".concat(F,"/check/").concat(b,"/quantity"),"get",Q)}},{key:"helperValidation",value:function(F){return this.commerce.request("checkouts/".concat(F,"/helper/validation"))}},{key:"getLive",value:function(F){return this.commerce.request("checkouts/".concat(F,"/live"))}},{key:"getToken",value:function(F){return this.commerce.request("checkouts/tokens/".concat(F))}},{key:"checkGiftcard",value:function(F,b){return this.commerce.request("checkouts/".concat(F,"/check/giftcard"),"get",b)}}]),Checkout}();function ownKeys$1(F,b){var Q=Object.keys(F);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(F);b&&(D=D.filter(function(O){return Object.getOwnPropertyDescriptor(F,O).enumerable})),Q.push.apply(Q,D)}return Q}function _objectSpread$1(F){for(var b=1;b<arguments.length;b++){var Q=arguments[b]!=null?arguments[b]:{};b%2?ownKeys$1(Q,!0).forEach(function(D){_defineProperty__default.default(F,D,Q[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(Q)):ownKeys$1(Q).forEach(function(D){Object.defineProperty(F,D,Object.getOwnPropertyDescriptor(Q,D))})}return F}var Customer=function(){function F(b){_classCallCheck__default.default(this,F),this.commerce=b,this.data={}}return _createClass__default.default(F,[{key:"login",value:function(b,Q){return this.commerce.request("customers/email-token","post",{email:b,base_url:Q})}},{key:"getToken",value:function(b){var Q=this,D=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:b}).then(function(O){return D&&(O.customer_id||O.jwt)&&(Q.data={id:O.customer_id||null,token:O.jwt||null},window.localStorage.setItem("commercejs_customer_id",Q.data.id),window.localStorage.setItem("commercejs_customer_token",Q.data.token)),O})}},{key:"update",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(Q,D),this._request("customers/".concat(Q||this.id()),"PUT",b,{},D)}},{key:"getOrders",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this._assertArgsProvided(b,Q);var O=_objectSpread$1({sortBy:"created_at",sortDirection:"desc"},D);return this._request("customers/".concat(b||this.id(),"/orders"),"get",O,{},Q)}},{key:"getOrder",value:function(b){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(Q,D),this._request("customers/".concat(Q||this.id(),"/orders/").concat(b),"get",{},{},D)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return this.id()!==null&&this.token()!==null}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(b){if(this.data[b]&&this.data[b].length)return this.data[b];var Q=window.localStorage.getItem("commercejs_customer_".concat(b));return typeof Q=="string"&&Q.length?Q:null}},{key:"_request",value:function(b){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},U=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,q=U||this.token();return this.commerce.request(b,Q,D,_objectSpread$1({"X-Authorization":void 0,Authorization:"Bearer ".concat(q)},O))}},{key:"_assertArgsProvided",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(b===null&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(Q===null&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),F}(),Merchants=function(){function F(b){_classCallCheck__default.default(this,F),this.commerce=b}return _createClass__default.default(F,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),F}(),Products=function(){function F(b){_classCallCheck__default.default(this,F),this.commerce=b}return _createClass__default.default(F,[{key:"list",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.commerce.request("products","get",b)}},{key:"retrieve",value:function(b){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("products/".concat(b),"get",Q)}},{key:"getVariants",value:function(b){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.commerce.request("products/".concat(b,"/variants"),"get",Q)}},{key:"getVariant",value:function(b,Q){return this.commerce.request("products/".concat(b,"/variants/").concat(Q),"get")}}]),F}(),Services=function(){function F(b){_classCallCheck__default.default(this,F),this.commerce=b}return _createClass__default.default(F,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(b){return this.commerce.request("services/locale/".concat(b,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(b,Q){return this.commerce.request("services/locale/".concat(b,"/countries/").concat(Q,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(b){return this.commerce.request("services/locale/".concat(b,"/subdivisions"))}}]),F}(),Features={Cart,Categories,Checkout,Customer,Merchants,Products,Services},consoleHelper=function(){var F,b,Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"black",D=arguments.length>1?arguments[1]:void 0,O=arguments.length>2?arguments[2]:void 0,U=arguments.length>3?arguments[3]:void 0,q=!1;switch(Q){case"success":Q="#488f5a",F="\u2705   ";break;case"info":Q="DodgerBlue",F="";break;case"error":Q="rgba(244, 67, 54, 1)",U.error.type==="validation"||U.error.type==="unprocessable_entity"?(F="\u{1F6AB} Validation/missing fields",D=""):F="\u274C HTTP ERROR ",q=!0;break;case"warning":Q="rgba(208, 154, 35, 1)",F="\u26A0\uFE0F  "}return q===!0?(console.log("%c"+F+D,"color:"+Q+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),_typeof__default.default(U.error.errors)==="object"?(b=U.error.errors,void Object.keys(b).forEach(function(G,Y){Object.values(b[G]).forEach(function(X){console.log("%c"+G+": %c"+X,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")})})):console.log("%c"+U.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")):_typeof__default.default(Q)==="object"?(console.log("%c"+D,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(Q)):(console.log("%c"+F+D,"color:"+Q+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),void(O&&console.log("%c"+O,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")))},debuggerOnNotice=function(){typeof window!="undefined"&&(console.log(`%c\r
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
`,"text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px"))};function ownKeys$2(F,b){var Q=Object.keys(F);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(F);b&&(D=D.filter(function(O){return Object.getOwnPropertyDescriptor(F,O).enumerable})),Q.push.apply(Q,D)}return Q}function _objectSpread$2(F){for(var b=1;b<arguments.length;b++){var Q=arguments[b]!=null?arguments[b]:{};b%2?ownKeys$2(Q,!0).forEach(function(D){_defineProperty__default.default(F,D,Q[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(Q)):ownKeys$2(Q).forEach(function(D){Object.defineProperty(F,D,Object.getOwnPropertyDescriptor(Q,D))})}return F}var defaultEventCallback=function(F){var b=new CustomEvent("Commercejs.".concat(F),{bubbles:!1,cancelable:!1});return window.dispatchEvent(b)},Commerce=function(){function F(b){var Q=arguments.length>1&&arguments[1]!==void 0&&arguments[1],D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_classCallCheck__default.default(this,F),this.options=_objectSpread$2(_objectSpread$2({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback,disableStorage:!1,cartLifetime:30,allowSecretKey:!1},D),{},{apiKey:b,debug:Q}),typeof b!="string"||b.length===0)throw new Error("\u26A0\uFE0F Invalid public key given to Commerce.js client");if(!D.allowSecretKey&&b.toLowerCase().substring(0,3)==="sk_")throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");if(this.options.cartLifetime<=0||this.options.cartLifetime>30)throw new Error("cartLifetime configuration option must be between 1 and 30 days");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),Q&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(F,[{key:"error",value:function(b){if(this.consoleHelper&&this.options.debug){var Q=b.response,D="[".concat(Q.status,"] Type: ").concat(Q.statusText),O=typeof Q.data=="string"?Q.data:Q.statusText;return this.consoleHelper("error",D,O,Q.data)}}},{key:"request",value:function(b){var Q=this,D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},q=arguments.length>4&&arguments[4]!==void 0&&arguments[4],G={"X-Authorization":this.options.apiKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},Y=D==="get"?O:null,X=D==="get"?null:O,ee=this.options.timeoutMs||6e4,re=this.options.axiosConfig||{},ie=this.options.url;ie.substring(ie.length-1)!=="/"&&(ie+="/");var ae=axios__default.default(_objectSpread$2(_objectSpread$2({url:b,method:D,baseURL:"".concat(ie).concat(this.options.version,"/"),params:Y,data:X,timeout:ee},re),{},{headers:_objectSpread$2(_objectSpread$2(_objectSpread$2({},G),re.headers),U)}));if(q)return ae;var ce=this.options.eventCallback;return ae.then(function(Ae){if(Q.consoleHelper&&Q.options.debug&&_typeof__default.default(Ae.data._console)==="object"&&Q.consoleHelper.apply(Q,_toConsumableArray__default.default(Ae.data._console)),_typeof__default.default(Ae.data)!=="object"||Array.isArray(Ae.data))return Ae.data;var ge=Ae.data,Be=ge._event,Ie=_objectWithoutProperties__default.default(ge,["_event"]);return typeof Be=="string"&&typeof ce=="function"&&ce(Be),Ie}).catch(function(Ae){throw Q.error(Ae),Ae.response?{message:"Unsuccessful response (".concat(Ae.response.status,": ").concat(Ae.response.statusText,") received"),statusCode:Ae.response.status,statusText:Ae.response.statusText,data:Ae.response.data,originalError:Ae}:Ae})}}]),F}(),lib=Commerce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=F=>b=>typeof b=="function"?((Q,D)=>(customElements.define(Q,D),D))(F,b):((Q,D)=>{const{kind:O,elements:U}=D;return{kind:O,elements:U,finisher(q){customElements.define(Q,q)}}})(F,b);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$3=(F,b)=>b.kind==="method"&&b.descriptor&&!("value"in b.descriptor)?{...b,finisher(Q){Q.createProperty(b.key,F)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:b.key,initializer(){typeof b.initializer=="function"&&(this[b.key]=b.initializer.call(this))},finisher(Q){Q.createProperty(b.key,F)}};function e$3(F){return(b,Q)=>Q!==void 0?((D,O,U)=>{O.constructor.createProperty(U,D)})(F,b,Q):i$3(F,b)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;((n$4=window.HTMLSlotElement)===null||n$4===void 0?void 0:n$4.prototype.assignedElements)!=null;var configurable=!0;function bound(F,b,Q){if(typeof(Q==null?void 0:Q.value)!="function")throw new TypeError(`Only methods can be decorated with @bound. <${b!=null?b:F.name}> is not a method!`);return{configurable,get(){const D=Q.value.bind(this);return Object.defineProperty(this,b,{value:D,configurable,writable:!0}),D}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=window,e$2=t$1.ShadowRoot&&(t$1.ShadyCSS===void 0||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(b,Q,D){if(this._$cssResult$=!0,D!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=b,this.t=Q}get styleSheet(){let b=this.o;const Q=this.t;if(e$2&&b===void 0){const D=Q!==void 0&&Q.length===1;D&&(b=n$3.get(Q)),b===void 0&&((this.o=b=new CSSStyleSheet).replaceSync(this.cssText),D&&n$3.set(Q,b))}return b}toString(){return this.cssText}}const r$2=F=>new o$3(typeof F=="string"?F:F+"",void 0,s$3),i$2=(F,...b)=>{const Q=F.length===1?F[0]:b.reduce((D,O,U)=>D+(q=>{if(q._$cssResult$===!0)return q.cssText;if(typeof q=="number")return q;throw Error("Value passed to 'css' function must be a 'css' function result: "+q+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(O)+F[U+1],F[0]);return new o$3(Q,F,s$3)},S$1=(F,b)=>{e$2?F.adoptedStyleSheets=b.map(Q=>Q instanceof CSSStyleSheet?Q:Q.styleSheet):b.forEach(Q=>{const D=document.createElement("style"),O=t$1.litNonce;O!==void 0&&D.setAttribute("nonce",O),D.textContent=Q.cssText,F.appendChild(D)})},c$2=e$2?F=>F:F=>F instanceof CSSStyleSheet?(b=>{let Q="";for(const D of b.cssRules)Q+=D.cssText;return r$2(Q)})(F):F;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(F,b){switch(b){case Boolean:F=F?h$1:null;break;case Object:case Array:F=F==null?F:JSON.stringify(F)}return F},fromAttribute(F,b){let Q=F;switch(b){case Boolean:Q=F!==null;break;case Number:Q=F===null?null:Number(F);break;case Object:case Array:try{Q=JSON.parse(F)}catch{Q=null}}return Q}},a$1=(F,b)=>b!==F&&(b==b||F==F),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(b){var Q;this.finalize(),((Q=this.h)!==null&&Q!==void 0?Q:this.h=[]).push(b)}static get observedAttributes(){this.finalize();const b=[];return this.elementProperties.forEach((Q,D)=>{const O=this._$Ep(D,Q);O!==void 0&&(this._$Ev.set(O,D),b.push(O))}),b}static createProperty(b,Q=l$3){if(Q.state&&(Q.attribute=!1),this.finalize(),this.elementProperties.set(b,Q),!Q.noAccessor&&!this.prototype.hasOwnProperty(b)){const D=typeof b=="symbol"?Symbol():"__"+b,O=this.getPropertyDescriptor(b,D,Q);O!==void 0&&Object.defineProperty(this.prototype,b,O)}}static getPropertyDescriptor(b,Q,D){return{get(){return this[Q]},set(O){const U=this[b];this[Q]=O,this.requestUpdate(b,U,D)},configurable:!0,enumerable:!0}}static getPropertyOptions(b){return this.elementProperties.get(b)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const b=Object.getPrototypeOf(this);if(b.finalize(),b.h!==void 0&&(this.h=[...b.h]),this.elementProperties=new Map(b.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const Q=this.properties,D=[...Object.getOwnPropertyNames(Q),...Object.getOwnPropertySymbols(Q)];for(const O of D)this.createProperty(O,Q[O])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(b){const Q=[];if(Array.isArray(b)){const D=new Set(b.flat(1/0).reverse());for(const O of D)Q.unshift(c$2(O))}else b!==void 0&&Q.push(c$2(b));return Q}static _$Ep(b,Q){const D=Q.attribute;return D===!1?void 0:typeof D=="string"?D:typeof b=="string"?b.toLowerCase():void 0}u(){var b;this._$E_=new Promise(Q=>this.enableUpdating=Q),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(b=this.constructor.h)===null||b===void 0||b.forEach(Q=>Q(this))}addController(b){var Q,D;((Q=this._$ES)!==null&&Q!==void 0?Q:this._$ES=[]).push(b),this.renderRoot!==void 0&&this.isConnected&&((D=b.hostConnected)===null||D===void 0||D.call(b))}removeController(b){var Q;(Q=this._$ES)===null||Q===void 0||Q.splice(this._$ES.indexOf(b)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((b,Q)=>{this.hasOwnProperty(Q)&&(this._$Ei.set(Q,this[Q]),delete this[Q])})}createRenderRoot(){var b;const Q=(b=this.shadowRoot)!==null&&b!==void 0?b:this.attachShadow(this.constructor.shadowRootOptions);return S$1(Q,this.constructor.elementStyles),Q}connectedCallback(){var b;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(b=this._$ES)===null||b===void 0||b.forEach(Q=>{var D;return(D=Q.hostConnected)===null||D===void 0?void 0:D.call(Q)})}enableUpdating(b){}disconnectedCallback(){var b;(b=this._$ES)===null||b===void 0||b.forEach(Q=>{var D;return(D=Q.hostDisconnected)===null||D===void 0?void 0:D.call(Q)})}attributeChangedCallback(b,Q,D){this._$AK(b,D)}_$EO(b,Q,D=l$3){var O;const U=this.constructor._$Ep(b,D);if(U!==void 0&&D.reflect===!0){const q=(((O=D.converter)===null||O===void 0?void 0:O.toAttribute)!==void 0?D.converter:n$2).toAttribute(Q,D.type);this._$El=b,q==null?this.removeAttribute(U):this.setAttribute(U,q),this._$El=null}}_$AK(b,Q){var D;const O=this.constructor,U=O._$Ev.get(b);if(U!==void 0&&this._$El!==U){const q=O.getPropertyOptions(U),G=typeof q.converter=="function"?{fromAttribute:q.converter}:((D=q.converter)===null||D===void 0?void 0:D.fromAttribute)!==void 0?q.converter:n$2;this._$El=U,this[U]=G.fromAttribute(Q,q.type),this._$El=null}}requestUpdate(b,Q,D){let O=!0;b!==void 0&&(((D=D||this.constructor.getPropertyOptions(b)).hasChanged||a$1)(this[b],Q)?(this._$AL.has(b)||this._$AL.set(b,Q),D.reflect===!0&&this._$El!==b&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(b,D))):O=!1),!this.isUpdatePending&&O&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(Q){Promise.reject(Q)}const b=this.scheduleUpdate();return b!=null&&await b,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var b;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((O,U)=>this[U]=O),this._$Ei=void 0);let Q=!1;const D=this._$AL;try{Q=this.shouldUpdate(D),Q?(this.willUpdate(D),(b=this._$ES)===null||b===void 0||b.forEach(O=>{var U;return(U=O.hostUpdate)===null||U===void 0?void 0:U.call(O)}),this.update(D)):this._$Ek()}catch(O){throw Q=!1,this._$Ek(),O}Q&&this._$AE(D)}willUpdate(b){}_$AE(b){var Q;(Q=this._$ES)===null||Q===void 0||Q.forEach(D=>{var O;return(O=D.hostUpdated)===null||O===void 0?void 0:O.call(D)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(b)),this.updated(b)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(b){return!0}update(b){this._$EC!==void 0&&(this._$EC.forEach((Q,D)=>this._$EO(D,this[D],Q)),this._$EC=void 0),this._$Ek()}updated(b){}firstUpdated(b){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},o$2==null||o$2({ReactiveElement:d$1}),((s$2=e$1.reactiveElementVersions)!==null&&s$2!==void 0?s$2:e$1.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t;const i$1=window,s$1=i$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:F=>F}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$1,h=`<${l$2}>`,r=document,d=()=>r.createComment(""),u=F=>F===null||typeof F!="object"&&typeof F!="function",c$1=Array.isArray,v=F=>c$1(F)||typeof(F==null?void 0:F[Symbol.iterator])=="function",a=`[ 	
\f\r]`,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=F=>(b,...Q)=>({_$litType$:F,strings:b,values:Q}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(F,b)=>{const Q=F.length-1,D=[];let O,U=b===2?"<svg>":"",q=f;for(let Y=0;Y<Q;Y++){const X=F[Y];let ee,re,ie=-1,ae=0;for(;ae<X.length&&(q.lastIndex=ae,re=q.exec(X),re!==null);)ae=q.lastIndex,q===f?re[1]==="!--"?q=_:re[1]!==void 0?q=m:re[2]!==void 0?(y.test(re[2])&&(O=RegExp("</"+re[2],"g")),q=p):re[3]!==void 0&&(q=p):q===p?re[0]===">"?(q=O!=null?O:f,ie=-1):re[1]===void 0?ie=-2:(ie=q.lastIndex-re[2].length,ee=re[1],q=re[3]===void 0?p:re[3]==='"'?$:g):q===$||q===g?q=p:q===_||q===m?q=f:(q=p,O=void 0);const ce=q===p&&F[Y+1].startsWith("/>")?" ":"";U+=q===f?X+h:ie>=0?(D.push(ee),X.slice(0,ie)+o$1+X.slice(ie)+n$1+ce):X+n$1+(ie===-2?(D.push(void 0),Y):ce)}const G=U+(F[Q]||"<?>")+(b===2?"</svg>":"");if(!Array.isArray(F)||!F.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e!==void 0?e.createHTML(G):G,D]};class V{constructor({strings:b,_$litType$:Q},D){let O;this.parts=[];let U=0,q=0;const G=b.length-1,Y=this.parts,[X,ee]=P(b,Q);if(this.el=V.createElement(X,D),C.currentNode=this.el.content,Q===2){const re=this.el.content,ie=re.firstChild;ie.remove(),re.append(...ie.childNodes)}for(;(O=C.nextNode())!==null&&Y.length<G;){if(O.nodeType===1){if(O.hasAttributes()){const re=[];for(const ie of O.getAttributeNames())if(ie.endsWith(o$1)||ie.startsWith(n$1)){const ae=ee[q++];if(re.push(ie),ae!==void 0){const ce=O.getAttribute(ae.toLowerCase()+o$1).split(n$1),Ae=/([.?@])?(.*)/.exec(ae);Y.push({type:1,index:U,name:Ae[2],strings:ce,ctor:Ae[1]==="."?k:Ae[1]==="?"?I:Ae[1]==="@"?L:R})}else Y.push({type:6,index:U})}for(const ie of re)O.removeAttribute(ie)}if(y.test(O.tagName)){const re=O.textContent.split(n$1),ie=re.length-1;if(ie>0){O.textContent=s$1?s$1.emptyScript:"";for(let ae=0;ae<ie;ae++)O.append(re[ae],d()),C.nextNode(),Y.push({type:2,index:++U});O.append(re[ie],d())}}}else if(O.nodeType===8)if(O.data===l$2)Y.push({type:2,index:U});else{let re=-1;for(;(re=O.data.indexOf(n$1,re+1))!==-1;)Y.push({type:7,index:U}),re+=n$1.length-1}U++}}static createElement(b,Q){const D=r.createElement("template");return D.innerHTML=b,D}}function N(F,b,Q=F,D){var O,U,q,G;if(b===T)return b;let Y=D!==void 0?(O=Q._$Co)===null||O===void 0?void 0:O[D]:Q._$Cl;const X=u(b)?void 0:b._$litDirective$;return(Y==null?void 0:Y.constructor)!==X&&((U=Y==null?void 0:Y._$AO)===null||U===void 0||U.call(Y,!1),X===void 0?Y=void 0:(Y=new X(F),Y._$AT(F,Q,D)),D!==void 0?((q=(G=Q)._$Co)!==null&&q!==void 0?q:G._$Co=[])[D]=Y:Q._$Cl=Y),Y!==void 0&&(b=N(F,Y._$AS(F,b.values),Y,D)),b}class S{constructor(b,Q){this._$AV=[],this._$AN=void 0,this._$AD=b,this._$AM=Q}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(b){var Q;const{el:{content:D},parts:O}=this._$AD,U=((Q=b==null?void 0:b.creationScope)!==null&&Q!==void 0?Q:r).importNode(D,!0);C.currentNode=U;let q=C.nextNode(),G=0,Y=0,X=O[0];for(;X!==void 0;){if(G===X.index){let ee;X.type===2?ee=new M(q,q.nextSibling,this,b):X.type===1?ee=new X.ctor(q,X.name,X.strings,this,b):X.type===6&&(ee=new z(q,this,b)),this._$AV.push(ee),X=O[++Y]}G!==(X==null?void 0:X.index)&&(q=C.nextNode(),G++)}return C.currentNode=r,U}v(b){let Q=0;for(const D of this._$AV)D!==void 0&&(D.strings!==void 0?(D._$AI(b,D,Q),Q+=D.strings.length-2):D._$AI(b[Q])),Q++}}class M{constructor(b,Q,D,O){var U;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=b,this._$AB=Q,this._$AM=D,this.options=O,this._$Cp=(U=O==null?void 0:O.isConnected)===null||U===void 0||U}get _$AU(){var b,Q;return(Q=(b=this._$AM)===null||b===void 0?void 0:b._$AU)!==null&&Q!==void 0?Q:this._$Cp}get parentNode(){let b=this._$AA.parentNode;const Q=this._$AM;return Q!==void 0&&(b==null?void 0:b.nodeType)===11&&(b=Q.parentNode),b}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(b,Q=this){b=N(this,b,Q),u(b)?b===A||b==null||b===""?(this._$AH!==A&&this._$AR(),this._$AH=A):b!==this._$AH&&b!==T&&this._(b):b._$litType$!==void 0?this.g(b):b.nodeType!==void 0?this.$(b):v(b)?this.T(b):this._(b)}k(b){return this._$AA.parentNode.insertBefore(b,this._$AB)}$(b){this._$AH!==b&&(this._$AR(),this._$AH=this.k(b))}_(b){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=b:this.$(r.createTextNode(b)),this._$AH=b}g(b){var Q;const{values:D,_$litType$:O}=b,U=typeof O=="number"?this._$AC(b):(O.el===void 0&&(O.el=V.createElement(O.h,this.options)),O);if(((Q=this._$AH)===null||Q===void 0?void 0:Q._$AD)===U)this._$AH.v(D);else{const q=new S(U,this),G=q.u(this.options);q.v(D),this.$(G),this._$AH=q}}_$AC(b){let Q=E.get(b.strings);return Q===void 0&&E.set(b.strings,Q=new V(b)),Q}T(b){c$1(this._$AH)||(this._$AH=[],this._$AR());const Q=this._$AH;let D,O=0;for(const U of b)O===Q.length?Q.push(D=new M(this.k(d()),this.k(d()),this,this.options)):D=Q[O],D._$AI(U),O++;O<Q.length&&(this._$AR(D&&D._$AB.nextSibling,O),Q.length=O)}_$AR(b=this._$AA.nextSibling,Q){var D;for((D=this._$AP)===null||D===void 0||D.call(this,!1,!0,Q);b&&b!==this._$AB;){const O=b.nextSibling;b.remove(),b=O}}setConnected(b){var Q;this._$AM===void 0&&(this._$Cp=b,(Q=this._$AP)===null||Q===void 0||Q.call(this,b))}}class R{constructor(b,Q,D,O,U){this.type=1,this._$AH=A,this._$AN=void 0,this.element=b,this.name=Q,this._$AM=O,this.options=U,D.length>2||D[0]!==""||D[1]!==""?(this._$AH=Array(D.length-1).fill(new String),this.strings=D):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(b,Q=this,D,O){const U=this.strings;let q=!1;if(U===void 0)b=N(this,b,Q,0),q=!u(b)||b!==this._$AH&&b!==T,q&&(this._$AH=b);else{const G=b;let Y,X;for(b=U[0],Y=0;Y<U.length-1;Y++)X=N(this,G[D+Y],Q,Y),X===T&&(X=this._$AH[Y]),q||(q=!u(X)||X!==this._$AH[Y]),X===A?b=A:b!==A&&(b+=(X!=null?X:"")+U[Y+1]),this._$AH[Y]=X}q&&!O&&this.j(b)}j(b){b===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,b!=null?b:"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(b){this.element[this.name]=b===A?void 0:b}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4}j(b){b&&b!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class L extends R{constructor(b,Q,D,O,U){super(b,Q,D,O,U),this.type=5}_$AI(b,Q=this){var D;if((b=(D=N(this,b,Q,0))!==null&&D!==void 0?D:A)===T)return;const O=this._$AH,U=b===A&&O!==A||b.capture!==O.capture||b.once!==O.once||b.passive!==O.passive,q=b!==A&&(O===A||U);U&&this.element.removeEventListener(this.name,this,O),q&&this.element.addEventListener(this.name,this,b),this._$AH=b}handleEvent(b){var Q,D;typeof this._$AH=="function"?this._$AH.call((D=(Q=this.options)===null||Q===void 0?void 0:Q.host)!==null&&D!==void 0?D:this.element,b):this._$AH.handleEvent(b)}}class z{constructor(b,Q,D){this.element=b,this.type=6,this._$AN=void 0,this._$AM=Q,this.options=D}get _$AU(){return this._$AM._$AU}_$AI(b){N(this,b)}}const j=i$1.litHtmlPolyfillSupport;j==null||j(V,M),((t=i$1.litHtmlVersions)!==null&&t!==void 0?t:i$1.litHtmlVersions=[]).push("2.7.4");const B=(F,b,Q)=>{var D,O;const U=(D=Q==null?void 0:Q.renderBefore)!==null&&D!==void 0?D:b;let q=U._$litPart$;if(q===void 0){const G=(O=Q==null?void 0:Q.renderBefore)!==null&&O!==void 0?O:null;U._$litPart$=q=new M(b.insertBefore(d(),G),G,void 0,Q!=null?Q:{})}return q._$AI(F),q};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var b,Q;const D=super.createRenderRoot();return(b=(Q=this.renderOptions).renderBefore)!==null&&b!==void 0||(Q.renderBefore=D.firstChild),D}update(b){const Q=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(b),this._$Do=B(Q,this.renderRoot,this.renderOptions)}connectedCallback(){var b;super.connectedCallback(),(b=this._$Do)===null||b===void 0||b.setConnected(!0)}disconnectedCallback(){var b;super.disconnectedCallback(),(b=this._$Do)===null||b===void 0||b.setConnected(!1)}render(){return T}}s.finalized=!0,s._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;n==null||n({LitElement:s});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=F=>F!=null?F:A,allCapitalLetterGroups=/[A-ZÀ-ÖÙ-Ý]+/g,allLowercaseWords=/[a-zà-öù-ý]+/g;function kebabCase(F){const b=F.replace(allCapitalLetterGroups,Q).match(allLowercaseWords);return b?b.join("-"):"";function Q(D){return" "+(D.length>2?D.slice(0,-1)+" "+D.slice(-1):D).toLowerCase()}}function createCache(){const F={};return{has:b=>Object.hasOwnProperty.call(F,b),get:b=>F[b],set:(b,Q)=>{F[b]=Q}}}function memoize(F,b){const Q=createCache();return(...D)=>{const O=F(...D);return Q.has(O)||Q.set(O,b(...D)),Q.get(O)}}var identity=F=>F,dash=memoize(identity,kebabCase),elem=F=>b=>F.includes(b),isRepresentation=elem(["paymentMethod","source","token"]);async function throwBadResponse(F){const{ok:b,statusText:Q}=F;if(!b)throw new Error(Q);return F}function isReactiveElement(F){return"addInitializer"in F.constructor}var _ReadOnlyController=class{constructor(F){if(this.host=F,this.values=new Map,_ReadOnlyController.instances.has(F))return _ReadOnlyController.instances.get(F);F.addController(this),_ReadOnlyController.instances.set(F,this)}static for(F){return new _ReadOnlyController(F)}hostConnected(){}set(F,b){const Q=this.values.get(F);this.values.set(F,b),isReactiveElement(this.host)?this.host.requestUpdate(F,Q):this.host.requestUpdate()}},ReadOnlyController=_ReadOnlyController;ReadOnlyController.instances=new Map;function readonly(F,b){const Q=F.constructor;Q.addInitializer(D=>{const O=ReadOnlyController.for(D);Object.defineProperty(D.constructor.prototype,b,{enumerable:!0,configurable:!0,get(){return O.values.get(b)},set(U){O.values.has(b)||O.values.set(b,U)}}),Q.createProperty(b,{...Q.getPropertyOptions(b),noAccessor:!0})})}readonly.set=function(F,b){const Q=ReadOnlyController.for(F);for(const[D,O]of Object.entries(b))Q.set(D,O)};var ChangeEvent=class extends Event{constructor(F,b,Q,D){super(`${D!=null?D:F.toLowerCase()}-changed`),this.key=F,this.oldValue=b,this.value=Q,this.detail={value:Q}}},_NotifyController=class{constructor(F){if(this.host=F,this.cache=new Map,_NotifyController.instances.has(F))return _NotifyController.instances.get(F);F.addController(this),_NotifyController.instances.set(F,this)}hostUpdated(){var F;for(const[b,Q]of this.cache){const D=this.host[b],{attribute:O}=(F=this.host.constructor.getPropertyOptions(b))!=null?F:{},U=typeof O=="string"?O:null;this.cache.set(b,D),this.host.dispatchEvent(new ChangeEvent(b,Q,D,U))}}},NotifyController=_NotifyController;NotifyController.instances=new Map;function notify(F,b){F.constructor.addInitializer(Q=>{new NotifyController(Q).cache.set(b,Q[b])})}function wrap$1(F){return(b,Q,D)=>{const O=D.value;return D.value=F(O),D}}var stripeMethod=wrap$1(function(F){const{name:b}=F;return async function(...Q){if(!this.stripe)throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${b}.`);return F.call(this,...Q).then(this.handleResponse)}});function throwResponseError(F){if(F.error)throw F.error;return F}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(F,b,Q,D)=>{for(var O=D>1?void 0:D?__getOwnPropDesc(b,Q):b,U=F.length-1,q;U>=0;U--)(q=F[U])&&(O=(D?q(b,Q,O):q(O))||O);return D&&O&&__defProp(b,Q,O),O},__accessCheck=(F,b,Q)=>{if(!b.has(F))throw TypeError("Cannot "+Q)},__privateGet=(F,b,Q)=>(__accessCheck(F,b,"read from private field"),Q?Q.call(F):b.get(F)),__privateAdd=(F,b,Q)=>{if(b.has(F))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(F):b.set(F,Q)},__privateSet=(F,b,Q,D)=>(__accessCheck(F,b,"write to private field"),D?D.call(F,Q):b.set(F,Q),Q);function getRandom(){return(Date.now()+Math.random()*1e3).toString(36).substr(0,8)}var BreadcrumbController=class{constructor(F,b){var Q,D;this.host=F,this.options=b,this.initialized=!1,this.shadowHosts=[],this.host.addController(this),this.mountId=this.resetMountId(),this.slotName=(D=(Q=this.options)==null?void 0:Q.slotName)!=null?D:`breadcrumb-${getRandom()}`}get mount(){return document.getElementById(this.mountId)}hostUpdated(){var F;!this.initialized&&((F=this.options)==null?void 0:F.autoInitialize)!==!1&&this.init()}hostDisconnected(){this.destroyMountPoints()}resetMountId(){var b,Q;return`${(Q=(b=this.options)==null?void 0:b.mountPrefix)!=null?Q:this.host.localName}-mount-point-${getRandom()}`}createMountPoint(){const F=document.createElement("div");return F.id=this.mountId,F.classList.add(`${this.host.tagName.toLowerCase()}-mount`),F}createSlot(F){const b=document.createElement("slot");return b.slot=F,b.name=F,b}appendTemplate(F,b=this.createMountPoint()){return F.appendChild(b),b}initMountPoints(){this.initShadowMountPoints()}destroyMountPoints(){for(const F of this.shadowHosts)for(const b of F.querySelectorAll(`[slot="${this.slotName}"][name="${this.slotName}"]`))b.remove();this.mount&&this.mount.remove(),this.mountId=this.resetMountId()}initShadowMountPoints(){let F=this.host;for(this.shadowHosts=[this.host];F=F.getRootNode().host;)this.shadowHosts.push(F);const{shadowHosts:b,slotName:Q}=this,D=[...b],O=D.pop();if(!O.querySelector(`[slot="${Q}"]`)){const q=document.createElement("div");q.slot=Q,O.appendChild(q)}const U=O.querySelector(`[slot="${Q}"]`);this.appendTemplate(U),D.forEach(q=>this.appendTemplate(q,this.createSlot(Q)))}init(){this.destroyMountPoints(),this.initMountPoints(),this.initialized=!0}};function _typeof(F){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(b){return typeof b}:_typeof=function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},_typeof(F)}var V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function F(){for(var b=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),Q=0;Q<b.length;Q++){var D=b[Q];if(!!V3_URL_REGEX.test(D.src))return D}return null},injectScript=function F(b){var Q=b&&!b.advancedFraudSignals?"?advancedFraudSignals=false":"",D=document.createElement("script");D.src="".concat(V3_URL).concat(Q);var O=document.head||document.body;if(!O)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return O.appendChild(D),D},registerWrapper=function F(b,Q){!b||!b._registerWrapper||b._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:Q})},stripePromise=null,loadScript=function F(b){return stripePromise!==null||(stripePromise=new Promise(function(Q,D){if(typeof window=="undefined"){Q(null);return}if(window.Stripe&&b&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe){Q(window.Stripe);return}try{var O=findScript();O&&b?console.warn(EXISTING_SCRIPT_MESSAGE):O||(O=injectScript(b)),O.addEventListener("load",function(){window.Stripe?Q(window.Stripe):D(new Error("Stripe.js not available"))}),O.addEventListener("error",function(){D(new Error("Failed to load Stripe.js"))})}catch(U){D(U);return}})),stripePromise},initStripe=function F(b,Q,D){if(b===null)return null;var O=b.apply(void 0,Q);return registerWrapper(O,D),O},validateLoadParams=function F(b){var Q=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(b),`
`);if(b===null||_typeof(b)!=="object")throw new Error(Q);if(Object.keys(b).length===1&&typeof b.advancedFraudSignals=="boolean")return b;throw new Error(Q)},loadParams,loadStripeCalled=!1,loadStripe=function F(){for(var b=arguments.length,Q=new Array(b),D=0;D<b;D++)Q[D]=arguments[D];loadStripeCalled=!0;var O=Date.now();return loadScript(loadParams).then(function(U){return initStripe(U,Q,O)})};loadStripe.setLoadParameters=function(F){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(F)};var StripeElementsError=class extends Error{constructor(F,b){super(`<${F}>: ${b}`),this.originalMessage=b}};function isStripeElementsError(F){return!!F&&F instanceof StripeElementsError}var errorConverter={toAttribute:F=>F?isStripeElementsError(F)?F.originalMessage:F.message||"":null},StripeBase=class extends s{constructor(){super(...arguments),this.generate="source",this.showError=!1,this.locale="auto",this.paymentMethod=null,this.source=null,this.token=null,this.element=null,this.elements=null,this.error=null,this.focused=!1,this.ready=!1,this.stripe=null,this.theme="none",this.precomputedStyle=getComputedStyle(this),this.breadcrumb=new BreadcrumbController(this,{slotName:`${this.constructor.is}-slot`})}get stripeMountId(){return this.breadcrumb.mountId}get stripeMount(){return this.breadcrumb.mount}render(){const{error:F,showError:b}=this,{slotName:Q}=this.breadcrumb,D=isStripeElementsError(F)?F.originalMessage:F==null?void 0:F.message;return x`
      <div id="stripe" part="stripe">
        <slot id="stripe-slot" name="${Q}"></slot>
      </div>

      <output id="error"
          for="stripe"
          part="error"
          ?hidden="${!b}">
        ${l(D)}
      </output>
    `}updated(F){var b;(b=super.updated)==null||b.call(this,F),F.has("error")&&this.errorChanged(),F.has("publishableKey")&&this.init(),[...F.keys()].forEach(Q=>this.representationChanged(Q))}async disconnectedCallback(){var F;super.disconnectedCallback(),await((F=this.unmount)==null?void 0:F.call(this))}reset(){var F,b;(b=(F=this.element)==null?void 0:F.clear)==null||b.call(F),this.resetRepresentations(),readonly.set(this,{error:null})}blur(){var F;(F=this.element)==null||F.blur()}focus(){var F;(F=this.element)==null||F.focus()}createError(F){return new StripeElementsError(this.constructor.is,F)}errorChanged(){this.resetRepresentations(),this.fireError(this.error)}fire(F,b,Q){this.dispatchEvent(new CustomEvent(F,{detail:b,...Q}))}fireError(F){this.dispatchEvent(new ErrorEvent("error",{error:F}))}getCSSCustomPropertyValue(F){return this.precomputedStyle.getPropertyValue(F)}async handleResponse(F){const{error:b=null,paymentMethod:Q=null,source:D=null,token:O=null}={...F};if(readonly.set(this,{error:b,paymentMethod:Q,source:D,token:O}),await this.updateComplete,b)throw b;return F}initElement(){}async init(){await this.unmount(),await this.initStripe(),await this.initElement(),this.initElementListeners(),this.breadcrumb.init(),this.mount()}initElementListeners(){!this.element||(this.element.on("ready",this.onReady),this.element.on("focus",this.onFocus),this.element.on("blur",this.onBlur))}async initStripe(){const{publishableKey:F,stripeAccount:b,locale:Q}=this;if(!F)readonly.set(this,{elements:null,element:null,stripe:null});else try{const D={stripeAccount:b,locale:Q},O=window.Stripe?window.Stripe(F,D):await loadStripe(F,D),U=O==null?void 0:O.elements();readonly.set(this,{elements:U,error:null,stripe:O})}catch(D){console.warn(D);const O=this.createError("Stripe.js must be loaded first.");readonly.set(this,{elements:null,error:O,stripe:null})}finally{await this.updateComplete}}mount(){var F;if(!this.breadcrumb.mount)throw this.createError("Stripe Mount missing");(F=this.element)==null||F.mount(this.breadcrumb.mount)}async unmount(){var F,b;(b=(F=this.element)==null?void 0:F.unmount)==null||b.call(F),readonly.set(this,{element:null}),await this.updateComplete}async onBlur(){readonly.set(this,{focused:!1}),await this.updateComplete}async onFocus(){readonly.set(this,{focused:!0}),await this.updateComplete}async onReady(F){readonly.set(this,{ready:!0}),await this.updateComplete,this.fire("ready",F)}async postRepresentation(){const F=Y=>readonly.set(this,{error:Y}),b=Y=>this.fire("success",Y),Q=this.token||void 0,D=this.source||void 0,O=this.paymentMethod||void 0,U=JSON.stringify({token:Q,source:D,paymentMethod:O}),q={"Content-Type":"application/json"},G="POST";return fetch(this.action,{body:U,headers:q,method:G}).then(throwBadResponse).then(b).catch(F)}representationChanged(F){if(!isRepresentation(F))return;const b=this[F];!b||(this.fire(`${dash(F)}`,b),this.action&&this.postRepresentation())}resetRepresentations(){readonly.set(this,{paymentMethod:null,token:null,source:null})}};__decorateClass([e$3({type:String})],StripeBase.prototype,"action",2);__decorateClass([e$3({type:String,attribute:"client-secret"})],StripeBase.prototype,"clientSecret",2);__decorateClass([e$3({type:String})],StripeBase.prototype,"generate",2);__decorateClass([notify,e$3({type:String,attribute:"publishable-key",reflect:!0})],StripeBase.prototype,"publishableKey",2);__decorateClass([e$3({type:Boolean,attribute:"show-error",reflect:!0})],StripeBase.prototype,"showError",2);__decorateClass([e$3({type:String,attribute:"stripe-account"})],StripeBase.prototype,"stripeAccount",2);__decorateClass([e$3({type:String,attribute:"locale"})],StripeBase.prototype,"locale",2);__decorateClass([readonly,notify,e$3({type:Object,attribute:"payment-method"})],StripeBase.prototype,"paymentMethod",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"source",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"token",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"element",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"elements",2);__decorateClass([readonly,notify,e$3({type:Object,reflect:!0,converter:errorConverter})],StripeBase.prototype,"error",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"focused",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"ready",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"stripe",2);__decorateClass([e$3()],StripeBase.prototype,"theme",2);__decorateClass([e$3({attribute:"border-radius"})],StripeBase.prototype,"borderRadius",2);__decorateClass([e$3({attribute:"color-background"})],StripeBase.prototype,"colorBackground",2);__decorateClass([e$3({attribute:"color-danger"})],StripeBase.prototype,"colorDanger",2);__decorateClass([e$3({attribute:"color-primary"})],StripeBase.prototype,"colorPrimary",2);__decorateClass([e$3({attribute:"color-text"})],StripeBase.prototype,"colorText",2);__decorateClass([e$3({attribute:"font-family"})],StripeBase.prototype,"fontFamily",2);__decorateClass([e$3({attribute:"spacing-unit"})],StripeBase.prototype,"spacingUnit",2);__decorateClass([bound],StripeBase.prototype,"handleResponse",1);__decorateClass([bound],StripeBase.prototype,"onBlur",1);__decorateClass([bound],StripeBase.prototype,"onFocus",1);__decorateClass([bound],StripeBase.prototype,"onReady",1);var styles=i$2`[hidden] {
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
`,stripe_elements_default=styles2,ALLOWED_STYLES=["color","fontFamily","fontSize","fontStyle","fontSmoothing","fontVariant","iconColor","lineHeight","letterSpacing","textDecoration","textShadow","textTransform"],SUB_STYLES=[":hover",":focus","::placeholder","::selection",":-webkit-autofill",":disabled"],StripeElements=class extends StripeBase{constructor(){super(...arguments),this.hideIcon=!1,this.hidePostalCode=!1,this.iconStyle="default",this.value={},this.brand=null,this.complete=!1,this.empty=!0,this.invalid=!1}async createPaymentMethod(F=this.getPaymentMethodData()){return this.stripe.createPaymentMethod(F)}async createSource(F=this.sourceData){return this.stripe.createSource(this.element,F)}async createToken(F=this.tokenData){return this.stripe.createToken(this.element,F)}isPotentiallyValid(){return!this.complete&&!this.empty&&!this.error||this.validate()}reset(){var F;super.reset(),(F=this.element)==null||F.clear()}async submit(){switch(this.generate){case"payment-method":return this.createPaymentMethod();case"source":return this.createSource();case"token":return this.createToken();default:{const F=this.createError(`cannot generate ${this.generate}`);throw readonly.set(this,{error:F}),await this.updateComplete,F}}}validate(){const{complete:F,empty:b,error:Q}=this,D=!Q&&F&&!b;return b&&!Q&&readonly.set(this,{error:this.createError("Your card number is empty.")}),D}updateStyle(){var F;(F=this.element)==null||F.update({style:this.getStripeElementsStyles()})}getPaymentMethodData(){const F="card",{billingDetails:b,paymentMethodData:Q}=this;return{billing_details:b,...Q,type:F,card:this.element}}getStripeElementsStyles(){const F=O=>this.getCSSCustomPropertyValue(O)||void 0,b=["base","complete","empty","invalid"],Q=O=>(U,q)=>{if(O.includes("-"))return U;const G=q.split(":").pop();return{...U,[q]:ALLOWED_STYLES.reduce(D(`${O}-${G}`),{})}},D=O=>(U,q)=>{const G=`--stripe-elements-${O}-${dash(q)}`;return{...U,[q]:F(G),...SUB_STYLES.reduce(Q(O),{})}};return b.reduce((O,U)=>({...O,[U]:ALLOWED_STYLES.reduce(D(U),{})}),{})}async initElement(){if(!this.stripe)return;const{hidePostalCode:F,hideIcon:b,iconStyle:Q,value:D}=this,O=this.getStripeElementsStyles();await this.updateComplete;const U=this.createElement({hideIcon:b,hidePostalCode:F,iconStyle:Q,style:O,value:D});U.on("change",this.onChange),readonly.set(this,{element:U}),await this.updateComplete}createElement(F){return this.elements.create("card",F)}async onChange(F){const{brand:b,complete:Q,empty:D,error:O=null}=F,U=!(O||!D&&!Q);readonly.set(this,{brand:b,complete:Q,empty:D,error:O,invalid:U}),await this.updateComplete,this.fire("change",F)}};StripeElements.is="stripe-elements";StripeElements.elementType="card";StripeElements.styles=[shared_default,stripe_elements_default];__decorateClass([e$3({type:Boolean,attribute:"hide-icon"})],StripeElements.prototype,"hideIcon",2);__decorateClass([e$3({type:Boolean,attribute:"hide-postal-code"})],StripeElements.prototype,"hidePostalCode",2);__decorateClass([e$3({type:String,attribute:"icon-style"})],StripeElements.prototype,"iconStyle",2);__decorateClass([e$3({type:Object})],StripeElements.prototype,"value",2);__decorateClass([notify,readonly,e$3({type:String})],StripeElements.prototype,"brand",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"complete",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"empty",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"invalid",2);__decorateClass([stripeMethod],StripeElements.prototype,"createPaymentMethod",1);__decorateClass([stripeMethod],StripeElements.prototype,"createSource",1);__decorateClass([stripeMethod],StripeElements.prototype,"createToken",1);__decorateClass([bound],StripeElements.prototype,"onChange",1);StripeElements=__decorateClass([e$4("stripe-elements")],StripeElements);var styles3=i$2`#stripe {
  box-sizing: border-box;
  min-width: var(--stripe-payment-request-element-min-width, 300px);
  padding: var(--stripe-payment-request-element-padding, 8px 12px);
  background: var(--stripe-payment-request-element-background, white);
}
`,stripe_payment_request_default=styles3;function isStripeDisplayItem(F){return F.tagName.toLowerCase()==="stripe-display-item"}function datasetToStripeDisplayItem({dataset:{amount:F,label:b,pending:Q}}){return{label:b,amount:parseInt(F),...Q!==void 0&&{pending:Q==="true"}}}function datasetToStripeShippingOption({dataset:{amount:F,detail:b,...Q}}){return{amount:parseInt(F),detail:b,...Q}}function mapDataset(F){return isStripeDisplayItem(F)?datasetToStripeDisplayItem(F):datasetToStripeShippingOption(F)}var _displayItems,_shippingOptions,StripePaymentRequest=class extends StripeBase{constructor(){super(...arguments),this.canMakePayment=null,__privateAdd(this,_displayItems,void 0),this.paymentIntent=null,this.paymentRequest=null,this.pending=!1,__privateAdd(this,_shippingOptions,void 0),this.buttonType="default",this.buttonTheme="dark",this.complete=async(F,b)=>{const{error:Q=null}={...F},D=Q||b?"fail":"success";return F.complete(D),this.fire(D,F),b?{error:b}:F}}get displayItems(){const F=__privateGet(this,_displayItems);return Array.isArray(F)?F:this.parseDatasets("stripe-display-item")}set displayItems(F){const b=this.displayItems;__privateSet(this,_displayItems,F),this.requestUpdate("displayItems",b)}get shippingOptions(){const F=__privateGet(this,_shippingOptions);return Array.isArray(F)?F:this.parseDatasets("stripe-shipping-option")}set shippingOptions(F){const b=this.shippingOptions;__privateSet(this,_shippingOptions,F),this.requestUpdate("shippingOptions",b)}reset(){super.reset(),readonly.set(this,{paymentIntent:null})}updated(F){super.updated(F),F.has("generate")&&this.initPaymentRequestListeners(),F.has("amount")&&this.updatePaymentRequest()}getStripePaymentRequestOptions(){const{country:F,currency:b,displayItems:Q,shippingOptions:D,requestShipping:O,requestPayerEmail:U,requestPayerName:q,requestPayerPhone:G,label:Y="",amount:X=0}=this;return{country:F,currency:b,displayItems:Q,requestPayerEmail:U,requestPayerName:q,requestPayerPhone:G,requestShipping:O,shippingOptions:D,total:{label:Y,amount:X}}}async initElement(){await this.initPaymentRequest(),await this.initPaymentRequestListeners(),await this.initPaymentRequestButton()}async initPaymentRequest(){if(!this.stripe)return;const F=this.getStripePaymentRequestOptions(),b=this.stripe.paymentRequest(F),Q=await b.canMakePayment();readonly.set(this,{paymentRequest:b,canMakePayment:Q}),await this.updateComplete,this.canMakePayment||this.fire("unsupported")}async initPaymentRequestButton(){const{buttonTheme:F,buttonType:b,canMakePayment:Q}=this;if(!Q||!this.elements)return;const D="--stripe-payment-request-button-height",U={paymentRequestButton:{height:this.getCSSCustomPropertyValue(D)||"40px",theme:F,type:b}},q=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:U});readonly.set(this,{element:q}),await this.updateComplete}async initPaymentRequestListeners(){if(!!this.canMakePayment)switch(this.paymentRequest.on("click",this.updatePaymentRequest),this.paymentRequest.on("cancel",this.onCancel),this.paymentRequest.on("shippingaddresschange",this.onShippingaddresschange),this.paymentRequest.on("shippingoptionchange",this.onShippingoptionchange),this.generate){case"payment-method":this.paymentRequest.on("paymentmethod",this.onPaymentResponse);break;case"source":this.paymentRequest.on("source",this.onPaymentResponse);break;case"token":this.paymentRequest.on("token",this.onPaymentResponse);break}}async updatePaymentRequest(){if(!this.paymentRequest)return;const{currency:F,total:b,displayItems:Q,shippingOptions:D}=this.getStripePaymentRequestOptions();this.paymentRequest.update({currency:F,total:b,displayItems:Q,shippingOptions:D})}onCancel(){this.fire("cancel")}async onPaymentResponse(F){const{error:b=null,paymentMethod:Q=null,source:D=null,token:O=null}={...F};readonly.set(this,{error:b,paymentMethod:Q,source:D,token:O}),this.clientSecret&&!b?this.confirmPaymentIntent(F):this.complete(F)}async confirmPaymentIntent(F){var U;const b={payment_method:this.paymentMethod.id},Q=await this.confirmCardPayment(b,{handleActions:!1}).then(({error:q})=>this.complete(F,q)).then(throwResponseError).then(()=>this.confirmCardPayment()).then(throwResponseError).catch(q=>({error:q})),{error:D=null}=Q,O=(U=Q.paymentIntent)!=null?U:null;readonly.set(this,{error:D,paymentIntent:O}),await this.updateComplete}async confirmCardPayment(F,b){return this.stripe.confirmCardPayment(this.clientSecret,F,b)}onShippingaddresschange(F){this.fire("shippingaddresschange",F)}onShippingoptionchange(F){this.fire("shippingoptionchange",F)}parseDatasets(F){const b=[...this.querySelectorAll(F)];return b.length?b.map(mapDataset):[]}};_displayItems=new WeakMap;_shippingOptions=new WeakMap;StripePaymentRequest.is="stripe-payment-request";StripePaymentRequest.styles=[shared_default,stripe_payment_request_default];__decorateClass([e$3({type:Number,reflect:!0})],StripePaymentRequest.prototype,"amount",2);__decorateClass([notify,readonly,e$3({type:Boolean,attribute:"can-make-payment",reflect:!0})],StripePaymentRequest.prototype,"canMakePayment",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"country",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"currency",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"displayItems",1);__decorateClass([e$3({type:String,reflect:!0})],StripePaymentRequest.prototype,"label",2);__decorateClass([notify,readonly,e$3({type:Object,attribute:"payment-intent"})],StripePaymentRequest.prototype,"paymentIntent",2);__decorateClass([readonly,e$3({type:Object,attribute:"payment-request"})],StripePaymentRequest.prototype,"paymentRequest",2);__decorateClass([e$3({type:Boolean,reflect:!0})],StripePaymentRequest.prototype,"pending",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-email"})],StripePaymentRequest.prototype,"requestPayerEmail",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-name"})],StripePaymentRequest.prototype,"requestPayerName",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-phone"})],StripePaymentRequest.prototype,"requestPayerPhone",2);__decorateClass([e$3({type:Boolean,attribute:"request-shipping"})],StripePaymentRequest.prototype,"requestShipping",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"shippingOptions",1);__decorateClass([e$3({type:String,attribute:"button-type"})],StripePaymentRequest.prototype,"buttonType",2);__decorateClass([e$3({type:String,attribute:"button-theme"})],StripePaymentRequest.prototype,"buttonTheme",2);__decorateClass([bound],StripePaymentRequest.prototype,"onCancel",1);__decorateClass([bound],StripePaymentRequest.prototype,"onPaymentResponse",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmPaymentIntent",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmCardPayment",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingaddresschange",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingoptionchange",1);StripePaymentRequest=__decorateClass([e$4("stripe-payment-request")],StripePaymentRequest);const VITE_CommerceKey$1="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey$1="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",commerce$1=new lib(`${VITE_CommerceKey$1}`,!0);var allProducts$1=[],currentShopProduct$1,shopPage=1,currentCart$1,cartEmpty$1=!0,selectedPSize$1="",countriesObj$1={},variantAbbr="",countriesAdded=!1,shippingMethodValue,shippingId="",card$1,stripeElements,pComplete;class mobileShop1 extends HTMLElement{constructor(){super();rt(this,"closeMobileShop",()=>{document.getElementById("mobileShop").style.display="none"});rt(this,"loadShop",async()=>{this.shadow.getElementById("LoadBG").style.display="grid";var Q=this.shadow.getElementById("mb1");await commerce$1.products.list({limit:100,sortDirection:"desc"}).then(D=>allProducts$1.push(D.data)),allProducts$1[0].forEach(D=>{var O=document.createElement("div");O.setAttribute("class","productContainer"),O.setAttribute("id",D.id),this.shadow.getElementById("productEdition").addEventListener("click",this.toggleTerms),O.addEventListener("click",this.viewProduct),Q.appendChild(O),O.innerHTML=`
    <img class="shopProducts" style="opacity:100%;" loading="lazy" src="${D.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${D.name}</p>
    <p class="pcProductPrice">${D.price.formatted_with_symbol}</p>
  </div>
    `,this.shadow.getElementById("LoadBG").style.display="none"}),commerce$1.cart.empty()});rt(this,"viewProduct",Q=>{var D=Q.target.parentElement.id;this.shadow.getElementById("scroll").style.display="block",currentShopProduct$1=allProducts$1[0].filter(q=>q.id.includes(`${D}`)),this.shadow.getElementById("mb2").style.display="block",shopPage=2,this.shadow.getElementById("pName").innerHTML=`
        ${currentShopProduct$1[0].name}`,currentShopProduct$1[0].categories.forEach(q=>{q.name==="\xC9"&&(this.shadow.getElementById("eSymbol1").style.display="block"),q.name==="S\xC9"&&(this.shadow.getElementById("eSymbol2").style.display="block")}),this.shadow.getElementById("pDesc").innerHTML=currentShopProduct$1[0].description,this.shadow.getElementById("proPrice").innerHTML=currentShopProduct$1[0].price.formatted_with_symbol,currentShopProduct$1[0].inventory.available===0&&(this.shadow.getElementById("archived").style.display="grid");var O=this.shadow.getElementById("allImages"),U=0;this.shadow.getElementById("mainImageCont").src=`${currentShopProduct$1[0].assets[0].url}`,currentShopProduct$1[0].assets.forEach(q=>{if(U<=3){var G=document.createElement("img");G.setAttribute("src",`${q.url}`),G.setAttribute("id",`${q.url}`),G.addEventListener("click",this.changeToMainPic),O.appendChild(G),U++}q.filename==="sizeChart.png"&&(this.shadow.getElementById("noti").innerHTML=`
                <img class="sizeChartImage" src="${q.url}"/>
              `,this.shadow.getElementById("pSizeGuide").addEventListener("click",this.noti1))}),this.checkSize()});rt(this,"checkSize",()=>{currentShopProduct$1[0].variant_groups[0].options.forEach(Q=>{if(this.shadow.getElementById(`${Q.name}`).style.opacity="100%",this.shadow.getElementById(`${Q.name}`).style.cursor="pointer",this.shadow.getElementById(`${Q.name}`).addEventListener("click",this.selectSize),Q.name==="SingleSize"){var D=this.shadow.querySelectorAll(".sizeButtons");this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr",this.shadow.getElementById("sizesCont").style.justifyItems="end",D.forEach(O=>{O.id!="SingleSize"&&(O.style.display="none")}),this.shadow.getElementById("SingleSize").style.display="grid"}})});rt(this,"noti1",()=>{this.shadow.getElementById("noti").style.display="block",pComplete===!0?(this.shadow.getElementById("noti").addEventListener("click",this.return),pComplete=!1):this.shadow.getElementById("noti").addEventListener("click",this.closeNoti)});rt(this,"closeNoti",()=>{this.shadow.getElementById("noti").style.display="none",pComplete=!1});rt(this,"returnSize",()=>{var Q=this.shadow.querySelectorAll(".sizeButtons");Q.forEach(D=>{D.id!="SingleSize"&&(D.style.display="grid"),this.shadow.getElementById(D.id).style.opacity=".3"}),this.shadow.getElementById("SingleSize").style.display="none",this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr 1fr 1fr 1fr",this.shadow.getElementById("sizesCont").style.justifyItems="center"});rt(this,"changeToMainPic",Q=>{var D=Q.target.id;this.shadow.getElementById("mainImageCont").src=`${D}`});rt(this,"return",()=>{this.shadow.getElementById("main"),this.shadow.getElementById("mb1");var Q=this.shadow.getElementById("mb2"),D=this.shadow.getElementById("mb3"),O=this.shadow.getElementById("checkoutInputs"),U=this.shadow.getElementById("shippingButton");switch(this.shadow.getElementById("mb4"),this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("archived").style.display="none",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("noti").style.display="none",shopPage){case 1:this.closeMobileShop();break;case 2:Q.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("eSymbol1").style.display="none",this.shadow.getElementById("eSymbol2").style.display="none",this.returnSize(),shopPage=1;break;case 3:D.style.display="none",Q.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.returnSize(),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",shopPage=1;break;case 4:O.style.display="none",U.innerHTML="SHIPPING & BILLING",U.removeEventListener("click",this.return),U.addEventListener("click",this.shipping),this.viewCart(),shopPage=3;break;case 5:D.style.display="none",O.style.display="none",Q.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("noti").removeEventListener("click",this.return),this.returnSize(),selectedPSize$1="",shopPage=1,this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';break}});rt(this,"selectSize",Q=>{var D=this.shadow.querySelectorAll(".sizeButtons");D.forEach(U=>{this.shadow.getElementById(U.id).style.backgroundColor="",this.shadow.getElementById(U.id).style.color=""}),Q.target.style.opacity==="1"?(selectedPSize$1=Q.target.id,this.shadow.getElementById("addItemButton").addEventListener("click",this.addToCart),Q.target.style.color="white",Q.target.style.backgroundColor="#ff002d",this.shadow.getElementById("addItemButton").innerHTML="ADD TO CART"):(selectedPSize$1="",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart));var O=document.getElementsByClassName("sizeButtons");for(let U=0;U<O.length;U++)O[U].style.color="#ff002d"});rt(this,"addToCart",async()=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="ADDING",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';var Q=currentShopProduct$1[0].variant_groups[0].options.filter(D=>D.name.includes(`${selectedPSize$1}`));this.shadow.getElementById("LoadBG").style.display="grid",commerce$1.cart.retrieve().then(D=>{currentCart$1=D}).then(()=>{if(cartEmpty$1===!1){var D=currentCart$1.line_items.filter(O=>O.product_id===currentShopProduct$1[0].id);console.log(currentCart$1),console.log(currentShopProduct$1[0].id),console.log(D),currentShopProduct$1[0].inventory.available>0?commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:Q[0].id}).then(()=>{cartEmpty$1=!1,commerce$1.cart.retrieve().then(O=>{currentCart$1=O,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART";var U=this.shadow.querySelectorAll(".sizeButtons");U.forEach(q=>{this.shadow.getElementById(`${q.id}`).style.color="",this.shadow.getElementById(`${q.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=O.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)}):(this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="MAX INVENTORY")}else commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:Q[0].id}).then(()=>{cartEmpty$1=!1,selectedPSize$1="",commerce$1.cart.retrieve().then(O=>{currentCart$1=O,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart);var U=this.shadow.querySelectorAll(".sizeButtons");U.forEach(q=>{this.shadow.getElementById(`${q.id}`).style.color="",this.shadow.getElementById(`${q.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=O.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)})})});rt(this,"viewCart",()=>{shopPage=3,this.shadow.getElementById("mb3").style.display="block",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE";var Q=this.shadow.getElementById("cartStatus");this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),Q.innerHTML="CHECKOUT",Q.removeEventListener("click",this.viewCart),Q.removeEventListener("click",this.checkout),variantAbbr="",currentCart$1.line_items.forEach(D=>{var O=document.createElement("div");switch(O.setAttribute("class","productCont"),this.shadow.getElementById("cartItems").appendChild(O),D.selected_options[0].option_name){case"Small":variantAbbr="S";break;case"Medium":variantAbbr="M";break;case"Large":variantAbbr="L";break;case"XLarge":variantAbbr="XL";break;case"2XLarge":variantAbbr="2XL";break;case"3XLarge":variantAbbr="3XL";break}O.innerHTML=`
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
            `,this.shadow.getElementById("termsButton").addEventListener("click",this.toggleTerms);var U=this.shadow.querySelectorAll(".changeQty");U.forEach(q=>{q.addEventListener("click",this.changeQty)}),O.setAttribute("id",`${D.id}Parent`)})});rt(this,"toggleTerms",()=>{this.noti1(),this.shadow.getElementById("noti").innerHTML=`
        <div id="terms">
         <h1>Terms & Conditions</h1><p>For designs marked with an <span class="active">(\u2018\xC9\u2019)</span> or <span class="active">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `});rt(this,"checkQuantity",Q=>{var D=allProducts$1[0].filter(O=>O.id===Q);return D[0].inventory.available});rt(this,"changeQty",Q=>{this.shadow.getElementById("LoadBG").style.display="grid";var D=Q.target.getAttribute("id"),O=Q.target.parentElement.getAttribute("name"),U=this.checkQuantity(O);if(Q.target.getAttribute("name")==="inc"){var q=currentCart$1.line_items.filter(G=>G.id===D);if(U>=2&&q[0].quantity<=U-1){commerce$1.cart.update(`${D}`,{quantity:q[0].quantity+1}).then(G=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=G.cart.subtotal.formatted_with_symbol,currentCart$1=G.cart,this.viewCart()});return}else Q.target.style.opacity=".3",this.shadow.getElementById("LoadBG").style.display="none"}if(Q.target.getAttribute("name")==="dec"){var q=currentCart$1.line_items.filter(Y=>Y.id===D);commerce$1.cart.update(`${D}`,{quantity:q[0].quantity-1}).then(Y=>{if(this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=Y.cart.subtotal.formatted_with_symbol,currentCart$1=Y.cart,this.viewCart(),Y.cart.total_items===0){var X=this.shadow.getElementById("cartStatus");cartEmpty$1=!0,this.return(),X.innerHTML="CART EMPTY",X.removeEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),selectedPSize$1=""}});return}});rt(this,"shipping",()=>{shopPage=4;var Q=this.shadow.getElementById("shippingButton"),D=this.shadow.getElementById("cartStatus");this.shadow.getElementById("checkoutInputs").style.display="grid",Q.innerHTML="VIEW CART",Q.removeAttribute("click",this.shipping),Q.addEventListener("click",this.return),D.innerHTML="PAY NOW",D.addEventListener("click",this.checkout),countriesAdded===!1&&(countriesAdded=!0,commerce$1.services.localeListCountries().then(O=>{countriesObj$1=O.countries,Object.keys(O.countries).forEach(U=>{var q=document.createElement("option"),G=this.shadow.getElementById("inputCN");q.setAttribute("value",U),q.setAttribute("title",U),q.innerHTML=`${countriesObj$1[U].substr(0,20)}`,G.appendChild(q)})})),this.shadow.getElementById("inputCN").addEventListener("change",this.states),this.shadow.getElementById("card-element").innerHTML=`
        <stripe-elements publishable-key="${VITE_StripeKey$1}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`,this.shadow.getElementById("sCard").addEventListener("ready",O=>{card$1=O.path[0].element,O.path[0].stripe.createToken(card$1),stripeElements=O.path[0].stripe})});rt(this,"states",()=>{var Q=this.shadow.getElementById("inputCN"),D=Q.options[Q.selectedIndex].value,O=Q.options[Q.selectedIndex].title,U=this.shadow.getElementById("totalPrice");this.shadow.getElementById("inputST").innerHTML="",D==="US"&&(this.shadow.getElementById("inputSP").value="$0.00 Free Shipping",shippingMethodValue=1,U.innerHTML=currentCart$1.subtotal.formatted_with_symbol),D!="US"&&(this.shadow.getElementById("inputSP").value="$70.00 Intl Shipping",shippingMethodValue=3,U.innerHTML=`$${currentCart$1.subtotal.raw+70}.00`),O==="US2"&&(this.shadow.getElementById("inputSP").value="$130.00 - Next Day",shippingMethodValue=2,U.innerHTML=`$${currentCart$1.subtotal.raw+130}.00`),commerce$1.services.localeListSubdivisions(D).then(q=>{var G=q.subdivisions;Object.keys(q.subdivisions).forEach(Y=>{var X=document.createElement("option"),ee=this.shadow.getElementById("inputST");if(Object.keys(q.subdivisions).length<=1){var re=document.createElement("option");re.innerHTML="Not Available.",Q.options[Q.selectedIndex].innerHTML="Select Country",this.shadow.getElementById("inputST").appendChild(re)}else X.setAttribute("value",G[Y]),X.setAttribute("id",Y),X.innerHTML=G[Y].substring(0,20),ee.appendChild(X)})})});rt(this,"checkout",async()=>{var Q=this.shadow.getElementById("inputFN").value,D=this.shadow.getElementById("inputLN").value,O=this.shadow.getElementById("inputBD").value;this.shadow.getElementById("inputSP").value;var U=this.shadow.getElementById("inputEM").value,q=this.shadow.getElementById("inputCY").value,G=this.shadow.getElementById("inputZC").value,Y=this.shadow.getElementById("inputSA").value,X=this.shadow.getElementById("inputCN"),ee=this.shadow.getElementById("inputST"),re=X.options[X.selectedIndex].value,ie=ee.options[ee.selectedIndex].id,ae=this.shadow.getElementById("cartStatus");ae.removeEventListener("click",this.checkout),this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("LoadBG").style.display="grid",setTimeout(()=>{pComplete===!1&&(this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>")},2e4),await commerce$1.checkout.generateToken(currentCart$1.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async ce=>{commerce$1.checkout.getShippingOptions(ce.id,{country:re}).then(async Ae=>{shippingMethodValue===1&&(shippingId=Ae[0].id),shippingMethodValue===3&&(shippingId=Ae[0].id),shippingMethodValue===2&&(shippingId=Ae[1].id);var ge=`${Q} ${D}`;const Be=await stripeElements.createPaymentMethod({type:"card",card:card$1}).catch(Ie=>{console.log(`THIS ERROR ${Ie}`),this.shadow.getElementById("LoadBG").style.display="none",ae.addEventListener("click",this.checkout)});if(Be.error){this.shadow.getElementById("LoadBG").style.display="none",console.log(Be.error.message),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${Be.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const Ie=await commerce$1.checkout.capture(ce.id,{customer:{firstname:`${Q}`,lastname:`${D}`,email:`${U}`},extra_fields:{extr_DWy4oG4dY56Jx2:`${Y}`},shipping:{name:`${ge}`,street:`${O}`,town_city:`${q}`,county_state:`${ie}`,postal_zip_code:`${G}`,country:`${re}`},fulfillment:{shipping_method:`${shippingId}`},billing:{name:`${ge}`,street:`${O}`,town_city:`${q}`,county_state:`${ie}`,postal_zip_code:`${G}`,country:`${re}`},payment:{gateway:"stripe",stripe:{payment_method_id:Be.paymentMethod.id}}});this.return,this.purchaseComplete(),this.noti1(),this.shadow.getElementById("noti").innerHTML=`
                <div id="orderConfirmed">
                    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-map.png"/>
                    <h2>Order Placed!</h2>
                    <h3>Thank you for shopping at SCOG\xC9.</h3>
                    <h4>Your order confirmation number is:<br><span class="active" id="confirmNumber">${Ie.customer_reference}</span></h4>
                    <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
                    <br><br>
                    <p>For any questions or inquiries please email <span class="active">INFO@SCOGE.CO</span></p>
                </div>
                `,this.shadow.getElementById("inputCN").innerHTML=`<option value="US" title="US">US</option>
                                          <option value="US" title="US2">US - Next Day Air</option>`,cartEmpty$1=!0,card$1.clear();return}catch(Ie){console.log(Ie),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${Ie.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(Ie);return}finally{}})})});rt(this,"purchaseComplete",()=>{var Q=this.shadow.getElementById("cartStatus");this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("totalPrice").innerHTML="$0",Q.innerHTML="CART EMPTY",shopPage=5,pComplete=!0,this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),this.shadow.getElementById("shippingButton").removeEventListener("click",this.return)});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("product")}set product(Q){this.setAttribute("product",Q)}static get observedAttributes(){return["product"]}attributeChangedCallback(Q,D,O){Q==="product"&&this.render()}connectedCallback(){this.render(),this.loadShop(),this.shadow.getElementById("returnButton").addEventListener("click",this.return.bind(this))}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
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
                <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/SCOGE\u0301 Logo-red.png"/>
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
                        <img id="stripeLogo" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/stripe.png"/>
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
                        <img id="scroll" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/scroll.png"/>
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
         `}}customElements.define("mobile-shop1",mobileShop1);class SoundtrackManager{constructor(){this.tracks={},this.trackList=[{key:"menuMove3",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav",artist:"Menu",title:"menuMove3"},{key:"menuEnter3",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav",artist:"Menu",title:"menuEnter3"},{key:"menuLoading1",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav",artist:"Menu",title:"menuLoading1"},{key:"menuError1",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav",artist:"Menu",title:"menuError1"},{key:"menuEntrance1",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav",artist:"Menu",title:"menuEntrance1"},{key:"menuExitSys1",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav",artist:"Menu",title:"menuExitSys1"},{key:"scoge1",src:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav",artist:"Main",title:"scoge1"}],this.trackList.forEach(b=>{this.tracks[b.key]=new Audio(b.src)})}play(b){this.tracks[b].play()}pause(b){this.tracks[b].pause()}stop(b){this.tracks[b].pause(),this.tracks[b].currentTime=0}setVolume(b,Q){this.tracks[b].volume=Q}loop(b){this.tracks[b].loop=!0}}class chatRoom{constructor(b,Q){this.roomName=b,this.roomDescription=Q,this.messages=[],this.io=null}static create(b,Q){return new chatRoom(b,Q)}callback(b){console.log("Array has been modified:",b)}addMessage(b){new Proxy(this.messages,{set:(D,O,U)=>{const q=Reflect.set(D,O,U);return this.callback({property:O,value:U}),q}}).push(b)}getMessages(){return this.messages}setIo(b){this.io=b,console.log("io set",this.io)}getIo(){return this.io}getRoomName(){return this.roomName}getRoomDescription(){return this.roomDescription}getRoomData(){return{roomName:this.roomName,roomDescription:this.roomDescription,messages:this.messages}}}class uniPlayers{constructor(b){this.playerGroupName=b,this.players={},this.channel=null}static create(b){return new uniPlayers(b)}addPlayer(b){const{playerId:Q,playerName:D,x:O,y:U}=b,q={playerId:Q,playerName:D,x:O,y:U};this.players[Q]=q,this.renderPlayer(q)}updatePlayerLocation(b){const{playerId:Q,x:D,y:O}=b,U=this.players[Q];U&&(U.x=D,U.y=O,this.updatePlayerElement(U))}renderPlayer(b){console.log("renderPlayer",b);const Q=document.createElement("div");Q.classList.add("uniPlayer"),Q.setAttribute("id",b.playerId),Q.dataset.playerId=b.playerId,Q.style.left=b.x+"px",Q.style.top=b.y+"px",document.getElementById("players").appendChild(Q)}updatePlayerElement(b){const Q=document.querySelector(`[data-player-id="${b.playerId}"]`);Q.style.left=b.x+"px",Q.style.top=b.y+"px"}async setChannel(b){this.channel=b,console.log("Channel set",this.channel),await this.channel.subscribe("newPlayer",Q=>{this.addPlayer(Q)}),await this.channel.subscribe("playerMoved",Q=>{this.updatePlayerLocation(Q)})}getIo(){return this.io}getRoomName(){return this.roomName}getRoomDescription(){return this.roomDescription}getRoomData(){return{roomName:this.roomName,roomDescription:this.roomDescription,players:this.players}}}function _assertThisInitialized(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function _inheritsLoose(F,b){F.prototype=Object.create(b.prototype),F.prototype.constructor=F,F.__proto__=b}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _config={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_defaults={duration:.5,overwrite:!1,delay:0},_suppressOverwrites,_reverting$1,_context,_bigNum$1=1e8,_tinyNum=1/_bigNum$1,_2PI=Math.PI*2,_HALF_PI=_2PI/4,_gsID=0,_sqrt=Math.sqrt,_cos=Math.cos,_sin=Math.sin,_isString=function F(b){return typeof b=="string"},_isFunction=function F(b){return typeof b=="function"},_isNumber=function F(b){return typeof b=="number"},_isUndefined=function F(b){return typeof b=="undefined"},_isObject=function F(b){return typeof b=="object"},_isNotFalse=function F(b){return b!==!1},_windowExists$1=function F(){return typeof window!="undefined"},_isFuncOrString=function F(b){return _isFunction(b)||_isString(b)},_isTypedArray=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_isArray=Array.isArray,_strictNumExp=/(?:-?\.?\d|\.)+/gi,_numExp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_numWithUnitExp=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_complexStringNumExp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_relExp=/[+-]=-?[.\d]+/,_delimitedValueExp=/[^,'"\[\]\s]+/gi,_unitExp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_globalTimeline,_win$1,_coreInitted,_doc$1,_globals={},_installScope={},_coreReady,_install=function F(b){return(_installScope=_merge(b,_globals))&&gsap$1},_missingPlugin=function F(b,Q){return console.warn("Invalid property",b,"set to",Q,"Missing plugin? gsap.registerPlugin()")},_warn=function F(b,Q){return!Q&&console.warn(b)},_addGlobal=function F(b,Q){return b&&(_globals[b]=Q)&&_installScope&&(_installScope[b]=Q)||_globals},_emptyFunc=function F(){return 0},_startAtRevertConfig={suppressEvents:!0,isStart:!0,kill:!1},_revertConfigNoKill={suppressEvents:!0,kill:!1},_revertConfig={suppressEvents:!0},_reservedProps={},_lazyTweens=[],_lazyLookup={},_lastRenderedFrame,_plugins={},_effects={},_nextGCFrame=30,_harnessPlugins=[],_callbackNames="",_harness=function F(b){var Q=b[0],D,O;if(_isObject(Q)||_isFunction(Q)||(b=[b]),!(D=(Q._gsap||{}).harness)){for(O=_harnessPlugins.length;O--&&!_harnessPlugins[O].targetTest(Q););D=_harnessPlugins[O]}for(O=b.length;O--;)b[O]&&(b[O]._gsap||(b[O]._gsap=new GSCache(b[O],D)))||b.splice(O,1);return b},_getCache=function F(b){return b._gsap||_harness(toArray(b))[0]._gsap},_getProperty=function F(b,Q,D){return(D=b[Q])&&_isFunction(D)?b[Q]():_isUndefined(D)&&b.getAttribute&&b.getAttribute(Q)||D},_forEachName=function F(b,Q){return(b=b.split(",")).forEach(Q)||b},_round=function F(b){return Math.round(b*1e5)/1e5||0},_roundPrecise=function F(b){return Math.round(b*1e7)/1e7||0},_parseRelative=function F(b,Q){var D=Q.charAt(0),O=parseFloat(Q.substr(2));return b=parseFloat(b),D==="+"?b+O:D==="-"?b-O:D==="*"?b*O:b/O},_arrayContainsAny=function F(b,Q){for(var D=Q.length,O=0;b.indexOf(Q[O])<0&&++O<D;);return O<D},_lazyRender=function F(){var b=_lazyTweens.length,Q=_lazyTweens.slice(0),D,O;for(_lazyLookup={},_lazyTweens.length=0,D=0;D<b;D++)O=Q[D],O&&O._lazy&&(O.render(O._lazy[0],O._lazy[1],!0)._lazy=0)},_lazySafeRender=function F(b,Q,D,O){_lazyTweens.length&&!_reverting$1&&_lazyRender(),b.render(Q,D,O||_reverting$1&&Q<0&&(b._initted||b._startAt)),_lazyTweens.length&&!_reverting$1&&_lazyRender()},_numericIfPossible=function F(b){var Q=parseFloat(b);return(Q||Q===0)&&(b+"").match(_delimitedValueExp).length<2?Q:_isString(b)?b.trim():b},_passThrough=function F(b){return b},_setDefaults=function F(b,Q){for(var D in Q)D in b||(b[D]=Q[D]);return b},_setKeyframeDefaults=function F(b){return function(Q,D){for(var O in D)O in Q||O==="duration"&&b||O==="ease"||(Q[O]=D[O])}},_merge=function F(b,Q){for(var D in Q)b[D]=Q[D];return b},_mergeDeep=function F(b,Q){for(var D in Q)D!=="__proto__"&&D!=="constructor"&&D!=="prototype"&&(b[D]=_isObject(Q[D])?F(b[D]||(b[D]={}),Q[D]):Q[D]);return b},_copyExcluding=function F(b,Q){var D={},O;for(O in b)O in Q||(D[O]=b[O]);return D},_inheritDefaults=function F(b){var Q=b.parent||_globalTimeline,D=b.keyframes?_setKeyframeDefaults(_isArray(b.keyframes)):_setDefaults;if(_isNotFalse(b.inherit))for(;Q;)D(b,Q.vars.defaults),Q=Q.parent||Q._dp;return b},_arraysMatch=function F(b,Q){for(var D=b.length,O=D===Q.length;O&&D--&&b[D]===Q[D];);return D<0},_addLinkedListItem=function F(b,Q,D,O,U){D===void 0&&(D="_first"),O===void 0&&(O="_last");var q=b[O],G;if(U)for(G=Q[U];q&&q[U]>G;)q=q._prev;return q?(Q._next=q._next,q._next=Q):(Q._next=b[D],b[D]=Q),Q._next?Q._next._prev=Q:b[O]=Q,Q._prev=q,Q.parent=Q._dp=b,Q},_removeLinkedListItem=function F(b,Q,D,O){D===void 0&&(D="_first"),O===void 0&&(O="_last");var U=Q._prev,q=Q._next;U?U._next=q:b[D]===Q&&(b[D]=q),q?q._prev=U:b[O]===Q&&(b[O]=U),Q._next=Q._prev=Q.parent=null},_removeFromParent=function F(b,Q){b.parent&&(!Q||b.parent.autoRemoveChildren)&&b.parent.remove(b),b._act=0},_uncache=function F(b,Q){if(b&&(!Q||Q._end>b._dur||Q._start<0))for(var D=b;D;)D._dirty=1,D=D.parent;return b},_recacheAncestors=function F(b){for(var Q=b.parent;Q&&Q.parent;)Q._dirty=1,Q.totalDuration(),Q=Q.parent;return b},_rewindStartAt=function F(b,Q,D,O){return b._startAt&&(_reverting$1?b._startAt.revert(_revertConfigNoKill):b.vars.immediateRender&&!b.vars.autoRevert||b._startAt.render(Q,!0,O))},_hasNoPausedAncestors=function F(b){return!b||b._ts&&F(b.parent)},_elapsedCycleDuration=function F(b){return b._repeat?_animationCycle(b._tTime,b=b.duration()+b._rDelay)*b:0},_animationCycle=function F(b,Q){var D=Math.floor(b/=Q);return b&&D===b?D-1:D},_parentToChildTotalTime=function F(b,Q){return(b-Q._start)*Q._ts+(Q._ts>=0?0:Q._dirty?Q.totalDuration():Q._tDur)},_setEnd=function F(b){return b._end=_roundPrecise(b._start+(b._tDur/Math.abs(b._ts||b._rts||_tinyNum)||0))},_alignPlayhead=function F(b,Q){var D=b._dp;return D&&D.smoothChildTiming&&b._ts&&(b._start=_roundPrecise(D._time-(b._ts>0?Q/b._ts:((b._dirty?b.totalDuration():b._tDur)-Q)/-b._ts)),_setEnd(b),D._dirty||_uncache(D,b)),b},_postAddChecks=function F(b,Q){var D;if((Q._time||Q._initted&&!Q._dur)&&(D=_parentToChildTotalTime(b.rawTime(),Q),(!Q._dur||_clamp(0,Q.totalDuration(),D)-Q._tTime>_tinyNum)&&Q.render(D,!0)),_uncache(b,Q)._dp&&b._initted&&b._time>=b._dur&&b._ts){if(b._dur<b.duration())for(D=b;D._dp;)D.rawTime()>=0&&D.totalTime(D._tTime),D=D._dp;b._zTime=-_tinyNum}},_addToTimeline=function F(b,Q,D,O){return Q.parent&&_removeFromParent(Q),Q._start=_roundPrecise((_isNumber(D)?D:D||b!==_globalTimeline?_parsePosition(b,D,Q):b._time)+Q._delay),Q._end=_roundPrecise(Q._start+(Q.totalDuration()/Math.abs(Q.timeScale())||0)),_addLinkedListItem(b,Q,"_first","_last",b._sort?"_start":0),_isFromOrFromStart(Q)||(b._recent=Q),O||_postAddChecks(b,Q),b._ts<0&&_alignPlayhead(b,b._tTime),b},_scrollTrigger=function F(b,Q){return(_globals.ScrollTrigger||_missingPlugin("scrollTrigger",Q))&&_globals.ScrollTrigger.create(Q,b)},_attemptInitTween=function F(b,Q,D,O,U){if(_initTween(b,Q,U),!b._initted)return 1;if(!D&&b._pt&&!_reverting$1&&(b._dur&&b.vars.lazy!==!1||!b._dur&&b.vars.lazy)&&_lastRenderedFrame!==_ticker.frame)return _lazyTweens.push(b),b._lazy=[U,O],1},_parentPlayheadIsBeforeStart=function F(b){var Q=b.parent;return Q&&Q._ts&&Q._initted&&!Q._lock&&(Q.rawTime()<0||F(Q))},_isFromOrFromStart=function F(b){var Q=b.data;return Q==="isFromStart"||Q==="isStart"},_renderZeroDurationTween=function F(b,Q,D,O){var U=b.ratio,q=Q<0||!Q&&(!b._start&&_parentPlayheadIsBeforeStart(b)&&!(!b._initted&&_isFromOrFromStart(b))||(b._ts<0||b._dp._ts<0)&&!_isFromOrFromStart(b))?0:1,G=b._rDelay,Y=0,X,ee,re;if(G&&b._repeat&&(Y=_clamp(0,b._tDur,Q),ee=_animationCycle(Y,G),b._yoyo&&ee&1&&(q=1-q),ee!==_animationCycle(b._tTime,G)&&(U=1-q,b.vars.repeatRefresh&&b._initted&&b.invalidate())),q!==U||_reverting$1||O||b._zTime===_tinyNum||!Q&&b._zTime){if(!b._initted&&_attemptInitTween(b,Q,O,D,Y))return;for(re=b._zTime,b._zTime=Q||(D?_tinyNum:0),D||(D=Q&&!re),b.ratio=q,b._from&&(q=1-q),b._time=0,b._tTime=Y,X=b._pt;X;)X.r(q,X.d),X=X._next;Q<0&&_rewindStartAt(b,Q,D,!0),b._onUpdate&&!D&&_callback(b,"onUpdate"),Y&&b._repeat&&!D&&b.parent&&_callback(b,"onRepeat"),(Q>=b._tDur||Q<0)&&b.ratio===q&&(q&&_removeFromParent(b,1),!D&&!_reverting$1&&(_callback(b,q?"onComplete":"onReverseComplete",!0),b._prom&&b._prom()))}else b._zTime||(b._zTime=Q)},_findNextPauseTween=function F(b,Q,D){var O;if(D>Q)for(O=b._first;O&&O._start<=D;){if(O.data==="isPause"&&O._start>Q)return O;O=O._next}else for(O=b._last;O&&O._start>=D;){if(O.data==="isPause"&&O._start<Q)return O;O=O._prev}},_setDuration=function F(b,Q,D,O){var U=b._repeat,q=_roundPrecise(Q)||0,G=b._tTime/b._tDur;return G&&!O&&(b._time*=q/b._dur),b._dur=q,b._tDur=U?U<0?1e10:_roundPrecise(q*(U+1)+b._rDelay*U):q,G>0&&!O&&_alignPlayhead(b,b._tTime=b._tDur*G),b.parent&&_setEnd(b),D||_uncache(b.parent,b),b},_onUpdateTotalDuration=function F(b){return b instanceof Timeline?_uncache(b):_setDuration(b,b._dur)},_zeroPosition={_start:0,endTime:_emptyFunc,totalDuration:_emptyFunc},_parsePosition=function F(b,Q,D){var O=b.labels,U=b._recent||_zeroPosition,q=b.duration()>=_bigNum$1?U.endTime(!1):b._dur,G,Y,X;return _isString(Q)&&(isNaN(Q)||Q in O)?(Y=Q.charAt(0),X=Q.substr(-1)==="%",G=Q.indexOf("="),Y==="<"||Y===">"?(G>=0&&(Q=Q.replace(/=/,"")),(Y==="<"?U._start:U.endTime(U._repeat>=0))+(parseFloat(Q.substr(1))||0)*(X?(G<0?U:D).totalDuration()/100:1)):G<0?(Q in O||(O[Q]=q),O[Q]):(Y=parseFloat(Q.charAt(G-1)+Q.substr(G+1)),X&&D&&(Y=Y/100*(_isArray(D)?D[0]:D).totalDuration()),G>1?F(b,Q.substr(0,G-1),D)+Y:q+Y)):Q==null?q:+Q},_createTweenType=function F(b,Q,D){var O=_isNumber(Q[1]),U=(O?2:1)+(b<2?0:1),q=Q[U],G,Y;if(O&&(q.duration=Q[1]),q.parent=D,b){for(G=q,Y=D;Y&&!("immediateRender"in G);)G=Y.vars.defaults||{},Y=_isNotFalse(Y.vars.inherit)&&Y.parent;q.immediateRender=_isNotFalse(G.immediateRender),b<2?q.runBackwards=1:q.startAt=Q[U-1]}return new Tween(Q[0],q,Q[U+1])},_conditionalReturn=function F(b,Q){return b||b===0?Q(b):Q},_clamp=function F(b,Q,D){return D<b?b:D>Q?Q:D},getUnit=function F(b,Q){return!_isString(b)||!(Q=_unitExp.exec(b))?"":Q[1]},clamp=function F(b,Q,D){return _conditionalReturn(D,function(O){return _clamp(b,Q,O)})},_slice=[].slice,_isArrayLike=function F(b,Q){return b&&_isObject(b)&&"length"in b&&(!Q&&!b.length||b.length-1 in b&&_isObject(b[0]))&&!b.nodeType&&b!==_win$1},_flatten=function F(b,Q,D){return D===void 0&&(D=[]),b.forEach(function(O){var U;return _isString(O)&&!Q||_isArrayLike(O,1)?(U=D).push.apply(U,toArray(O)):D.push(O)})||D},toArray=function F(b,Q,D){return _context&&!Q&&_context.selector?_context.selector(b):_isString(b)&&!D&&(_coreInitted||!_wake())?_slice.call((Q||_doc$1).querySelectorAll(b),0):_isArray(b)?_flatten(b,D):_isArrayLike(b)?_slice.call(b,0):b?[b]:[]},selector=function F(b){return b=toArray(b)[0]||_warn("Invalid scope")||{},function(Q){var D=b.current||b.nativeElement||b;return toArray(Q,D.querySelectorAll?D:D===b?_warn("Invalid scope")||_doc$1.createElement("div"):b)}},shuffle=function F(b){return b.sort(function(){return .5-Math.random()})},distribute=function F(b){if(_isFunction(b))return b;var Q=_isObject(b)?b:{each:b},D=_parseEase(Q.ease),O=Q.from||0,U=parseFloat(Q.base)||0,q={},G=O>0&&O<1,Y=isNaN(O)||G,X=Q.axis,ee=O,re=O;return _isString(O)?ee=re={center:.5,edges:.5,end:1}[O]||0:!G&&Y&&(ee=O[0],re=O[1]),function(ie,ae,ce){var Ae=(ce||Q).length,ge=q[Ae],Be,Ie,_e,Ce,be,Qe,Se,Me,ke;if(!ge){if(ke=Q.grid==="auto"?0:(Q.grid||[1,_bigNum$1])[1],!ke){for(Se=-_bigNum$1;Se<(Se=ce[ke++].getBoundingClientRect().left)&&ke<Ae;);ke--}for(ge=q[Ae]=[],Be=Y?Math.min(ke,Ae)*ee-.5:O%ke,Ie=ke===_bigNum$1?0:Y?Ae*re/ke-.5:O/ke|0,Se=0,Me=_bigNum$1,Qe=0;Qe<Ae;Qe++)_e=Qe%ke-Be,Ce=Ie-(Qe/ke|0),ge[Qe]=be=X?Math.abs(X==="y"?Ce:_e):_sqrt(_e*_e+Ce*Ce),be>Se&&(Se=be),be<Me&&(Me=be);O==="random"&&shuffle(ge),ge.max=Se-Me,ge.min=Me,ge.v=Ae=(parseFloat(Q.amount)||parseFloat(Q.each)*(ke>Ae?Ae-1:X?X==="y"?Ae/ke:ke:Math.max(ke,Ae/ke))||0)*(O==="edges"?-1:1),ge.b=Ae<0?U-Ae:U,ge.u=getUnit(Q.amount||Q.each)||0,D=D&&Ae<0?_invertEase(D):D}return Ae=(ge[ie]-ge.min)/ge.max||0,_roundPrecise(ge.b+(D?D(Ae):Ae)*ge.v)+ge.u}},_roundModifier=function F(b){var Q=Math.pow(10,((b+"").split(".")[1]||"").length);return function(D){var O=_roundPrecise(Math.round(parseFloat(D)/b)*b*Q);return(O-O%1)/Q+(_isNumber(D)?0:getUnit(D))}},snap=function F(b,Q){var D=_isArray(b),O,U;return!D&&_isObject(b)&&(O=D=b.radius||_bigNum$1,b.values?(b=toArray(b.values),(U=!_isNumber(b[0]))&&(O*=O)):b=_roundModifier(b.increment)),_conditionalReturn(Q,D?_isFunction(b)?function(q){return U=b(q),Math.abs(U-q)<=O?U:q}:function(q){for(var G=parseFloat(U?q.x:q),Y=parseFloat(U?q.y:0),X=_bigNum$1,ee=0,re=b.length,ie,ae;re--;)U?(ie=b[re].x-G,ae=b[re].y-Y,ie=ie*ie+ae*ae):ie=Math.abs(b[re]-G),ie<X&&(X=ie,ee=re);return ee=!O||X<=O?b[ee]:q,U||ee===q||_isNumber(q)?ee:ee+getUnit(q)}:_roundModifier(b))},random=function F(b,Q,D,O){return _conditionalReturn(_isArray(b)?!Q:D===!0?!!(D=0):!O,function(){return _isArray(b)?b[~~(Math.random()*b.length)]:(D=D||1e-5)&&(O=D<1?Math.pow(10,(D+"").length-2):1)&&Math.floor(Math.round((b-D/2+Math.random()*(Q-b+D*.99))/D)*D*O)/O})},pipe=function F(){for(var b=arguments.length,Q=new Array(b),D=0;D<b;D++)Q[D]=arguments[D];return function(O){return Q.reduce(function(U,q){return q(U)},O)}},unitize=function F(b,Q){return function(D){return b(parseFloat(D))+(Q||getUnit(D))}},normalize=function F(b,Q,D){return mapRange(b,Q,0,1,D)},_wrapArray=function F(b,Q,D){return _conditionalReturn(D,function(O){return b[~~Q(O)]})},wrap=function F(b,Q,D){var O=Q-b;return _isArray(b)?_wrapArray(b,F(0,b.length),Q):_conditionalReturn(D,function(U){return(O+(U-b)%O)%O+b})},wrapYoyo=function F(b,Q,D){var O=Q-b,U=O*2;return _isArray(b)?_wrapArray(b,F(0,b.length-1),Q):_conditionalReturn(D,function(q){return q=(U+(q-b)%U)%U||0,b+(q>O?U-q:q)})},_replaceRandom=function F(b){for(var Q=0,D="",O,U,q,G;~(O=b.indexOf("random(",Q));)q=b.indexOf(")",O),G=b.charAt(O+7)==="[",U=b.substr(O+7,q-O-7).match(G?_delimitedValueExp:_strictNumExp),D+=b.substr(Q,O-Q)+random(G?U:+U[0],G?0:+U[1],+U[2]||1e-5),Q=q+1;return D+b.substr(Q,b.length-Q)},mapRange=function F(b,Q,D,O,U){var q=Q-b,G=O-D;return _conditionalReturn(U,function(Y){return D+((Y-b)/q*G||0)})},interpolate=function F(b,Q,D,O){var U=isNaN(b+Q)?0:function(ae){return(1-ae)*b+ae*Q};if(!U){var q=_isString(b),G={},Y,X,ee,re,ie;if(D===!0&&(O=1)&&(D=null),q)b={p:b},Q={p:Q};else if(_isArray(b)&&!_isArray(Q)){for(ee=[],re=b.length,ie=re-2,X=1;X<re;X++)ee.push(F(b[X-1],b[X]));re--,U=function(ce){ce*=re;var Ae=Math.min(ie,~~ce);return ee[Ae](ce-Ae)},D=Q}else O||(b=_merge(_isArray(b)?[]:{},b));if(!ee){for(Y in Q)_addPropTween.call(G,b,Y,"get",Q[Y]);U=function(ce){return _renderPropTweens(ce,G)||(q?b.p:b)}}}return _conditionalReturn(D,U)},_getLabelInDirection=function F(b,Q,D){var O=b.labels,U=_bigNum$1,q,G,Y;for(q in O)G=O[q]-Q,G<0==!!D&&G&&U>(G=Math.abs(G))&&(Y=q,U=G);return Y},_callback=function F(b,Q,D){var O=b.vars,U=O[Q],q=_context,G=b._ctx,Y,X,ee;if(!!U)return Y=O[Q+"Params"],X=O.callbackScope||b,D&&_lazyTweens.length&&_lazyRender(),G&&(_context=G),ee=Y?U.apply(X,Y):U.call(X),_context=q,ee},_interrupt=function F(b){return _removeFromParent(b),b.scrollTrigger&&b.scrollTrigger.kill(!!_reverting$1),b.progress()<1&&_callback(b,"onInterrupt"),b},_quickTween,_registerPluginQueue=[],_createPlugin=function F(b){if(!_windowExists$1()){_registerPluginQueue.push(b);return}b=!b.name&&b.default||b;var Q=b.name,D=_isFunction(b),O=Q&&!D&&b.init?function(){this._props=[]}:b,U={init:_emptyFunc,render:_renderPropTweens,add:_addPropTween,kill:_killPropTweensOf,modifier:_addPluginModifier,rawVars:0},q={targetTest:0,get:0,getSetter:_getSetter,aliases:{},register:0};if(_wake(),b!==O){if(_plugins[Q])return;_setDefaults(O,_setDefaults(_copyExcluding(b,U),q)),_merge(O.prototype,_merge(U,_copyExcluding(b,q))),_plugins[O.prop=Q]=O,b.targetTest&&(_harnessPlugins.push(O),_reservedProps[Q]=1),Q=(Q==="css"?"CSS":Q.charAt(0).toUpperCase()+Q.substr(1))+"Plugin"}_addGlobal(Q,O),b.register&&b.register(gsap$1,O,PropTween)},_255=255,_colorLookup={aqua:[0,_255,_255],lime:[0,_255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_255],navy:[0,0,128],white:[_255,_255,_255],olive:[128,128,0],yellow:[_255,_255,0],orange:[_255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_255,0,0],pink:[_255,192,203],cyan:[0,_255,_255],transparent:[_255,_255,_255,0]},_hue=function F(b,Q,D){return b+=b<0?1:b>1?-1:0,(b*6<1?Q+(D-Q)*b*6:b<.5?D:b*3<2?Q+(D-Q)*(2/3-b)*6:Q)*_255+.5|0},splitColor=function F(b,Q,D){var O=b?_isNumber(b)?[b>>16,b>>8&_255,b&_255]:0:_colorLookup.black,U,q,G,Y,X,ee,re,ie,ae,ce;if(!O){if(b.substr(-1)===","&&(b=b.substr(0,b.length-1)),_colorLookup[b])O=_colorLookup[b];else if(b.charAt(0)==="#"){if(b.length<6&&(U=b.charAt(1),q=b.charAt(2),G=b.charAt(3),b="#"+U+U+q+q+G+G+(b.length===5?b.charAt(4)+b.charAt(4):"")),b.length===9)return O=parseInt(b.substr(1,6),16),[O>>16,O>>8&_255,O&_255,parseInt(b.substr(7),16)/255];b=parseInt(b.substr(1),16),O=[b>>16,b>>8&_255,b&_255]}else if(b.substr(0,3)==="hsl"){if(O=ce=b.match(_strictNumExp),!Q)Y=+O[0]%360/360,X=+O[1]/100,ee=+O[2]/100,q=ee<=.5?ee*(X+1):ee+X-ee*X,U=ee*2-q,O.length>3&&(O[3]*=1),O[0]=_hue(Y+1/3,U,q),O[1]=_hue(Y,U,q),O[2]=_hue(Y-1/3,U,q);else if(~b.indexOf("="))return O=b.match(_numExp),D&&O.length<4&&(O[3]=1),O}else O=b.match(_strictNumExp)||_colorLookup.transparent;O=O.map(Number)}return Q&&!ce&&(U=O[0]/_255,q=O[1]/_255,G=O[2]/_255,re=Math.max(U,q,G),ie=Math.min(U,q,G),ee=(re+ie)/2,re===ie?Y=X=0:(ae=re-ie,X=ee>.5?ae/(2-re-ie):ae/(re+ie),Y=re===U?(q-G)/ae+(q<G?6:0):re===q?(G-U)/ae+2:(U-q)/ae+4,Y*=60),O[0]=~~(Y+.5),O[1]=~~(X*100+.5),O[2]=~~(ee*100+.5)),D&&O.length<4&&(O[3]=1),O},_colorOrderData=function F(b){var Q=[],D=[],O=-1;return b.split(_colorExp).forEach(function(U){var q=U.match(_numWithUnitExp)||[];Q.push.apply(Q,q),D.push(O+=q.length+1)}),Q.c=D,Q},_formatColors=function F(b,Q,D){var O="",U=(b+O).match(_colorExp),q=Q?"hsla(":"rgba(",G=0,Y,X,ee,re;if(!U)return b;if(U=U.map(function(ie){return(ie=splitColor(ie,Q,1))&&q+(Q?ie[0]+","+ie[1]+"%,"+ie[2]+"%,"+ie[3]:ie.join(","))+")"}),D&&(ee=_colorOrderData(b),Y=D.c,Y.join(O)!==ee.c.join(O)))for(X=b.replace(_colorExp,"1").split(_numWithUnitExp),re=X.length-1;G<re;G++)O+=X[G]+(~Y.indexOf(G)?U.shift()||q+"0,0,0,0)":(ee.length?ee:U.length?U:D).shift());if(!X)for(X=b.split(_colorExp),re=X.length-1;G<re;G++)O+=X[G]+U[G];return O+X[re]},_colorExp=function(){var F="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",b;for(b in _colorLookup)F+="|"+b+"\\b";return new RegExp(F+")","gi")}(),_hslExp=/hsl[a]?\(/,_colorStringFilter=function F(b){var Q=b.join(" "),D;if(_colorExp.lastIndex=0,_colorExp.test(Q))return D=_hslExp.test(Q),b[1]=_formatColors(b[1],D),b[0]=_formatColors(b[0],D,_colorOrderData(b[1])),!0},_tickerActive,_ticker=function(){var F=Date.now,b=500,Q=33,D=F(),O=D,U=1e3/240,q=U,G=[],Y,X,ee,re,ie,ae,ce=function Ae(ge){var Be=F()-O,Ie=ge===!0,_e,Ce,be,Qe;if(Be>b&&(D+=Be-Q),O+=Be,be=O-D,_e=be-q,(_e>0||Ie)&&(Qe=++re.frame,ie=be-re.time*1e3,re.time=be=be/1e3,q+=_e+(_e>=U?4:U-_e),Ce=1),Ie||(Y=X(Ae)),Ce)for(ae=0;ae<G.length;ae++)G[ae](be,ie,Qe,ge)};return re={time:0,frame:0,tick:function(){ce(!0)},deltaRatio:function(ge){return ie/(1e3/(ge||60))},wake:function(){_coreReady&&(!_coreInitted&&_windowExists$1()&&(_win$1=_coreInitted=window,_doc$1=_win$1.document||{},_globals.gsap=gsap$1,(_win$1.gsapVersions||(_win$1.gsapVersions=[])).push(gsap$1.version),_install(_installScope||_win$1.GreenSockGlobals||!_win$1.gsap&&_win$1||{}),ee=_win$1.requestAnimationFrame,_registerPluginQueue.forEach(_createPlugin)),Y&&re.sleep(),X=ee||function(ge){return setTimeout(ge,q-re.time*1e3+1|0)},_tickerActive=1,ce(2))},sleep:function(){(ee?_win$1.cancelAnimationFrame:clearTimeout)(Y),_tickerActive=0,X=_emptyFunc},lagSmoothing:function(ge,Be){b=ge||1/0,Q=Math.min(Be||33,b)},fps:function(ge){U=1e3/(ge||240),q=re.time*1e3+U},add:function(ge,Be,Ie){var _e=Be?function(Ce,be,Qe,Se){ge(Ce,be,Qe,Se),re.remove(_e)}:ge;return re.remove(ge),G[Ie?"unshift":"push"](_e),_wake(),_e},remove:function(ge,Be){~(Be=G.indexOf(ge))&&G.splice(Be,1)&&ae>=Be&&ae--},_listeners:G},re}(),_wake=function F(){return!_tickerActive&&_ticker.wake()},_easeMap={},_customEaseExp=/^[\d.\-M][\d.\-,\s]/,_quotesExp=/["']/g,_parseObjectInString=function F(b){for(var Q={},D=b.substr(1,b.length-3).split(":"),O=D[0],U=1,q=D.length,G,Y,X;U<q;U++)Y=D[U],G=U!==q-1?Y.lastIndexOf(","):Y.length,X=Y.substr(0,G),Q[O]=isNaN(X)?X.replace(_quotesExp,"").trim():+X,O=Y.substr(G+1).trim();return Q},_valueInParentheses=function F(b){var Q=b.indexOf("(")+1,D=b.indexOf(")"),O=b.indexOf("(",Q);return b.substring(Q,~O&&O<D?b.indexOf(")",D+1):D)},_configEaseFromString=function F(b){var Q=(b+"").split("("),D=_easeMap[Q[0]];return D&&Q.length>1&&D.config?D.config.apply(null,~b.indexOf("{")?[_parseObjectInString(Q[1])]:_valueInParentheses(b).split(",").map(_numericIfPossible)):_easeMap._CE&&_customEaseExp.test(b)?_easeMap._CE("",b):D},_invertEase=function F(b){return function(Q){return 1-b(1-Q)}},_propagateYoyoEase=function F(b,Q){for(var D=b._first,O;D;)D instanceof Timeline?F(D,Q):D.vars.yoyoEase&&(!D._yoyo||!D._repeat)&&D._yoyo!==Q&&(D.timeline?F(D.timeline,Q):(O=D._ease,D._ease=D._yEase,D._yEase=O,D._yoyo=Q)),D=D._next},_parseEase=function F(b,Q){return b&&(_isFunction(b)?b:_easeMap[b]||_configEaseFromString(b))||Q},_insertEase=function F(b,Q,D,O){D===void 0&&(D=function(Y){return 1-Q(1-Y)}),O===void 0&&(O=function(Y){return Y<.5?Q(Y*2)/2:1-Q((1-Y)*2)/2});var U={easeIn:Q,easeOut:D,easeInOut:O},q;return _forEachName(b,function(G){_easeMap[G]=_globals[G]=U,_easeMap[q=G.toLowerCase()]=D;for(var Y in U)_easeMap[q+(Y==="easeIn"?".in":Y==="easeOut"?".out":".inOut")]=_easeMap[G+"."+Y]=U[Y]}),U},_easeInOutFromOut=function F(b){return function(Q){return Q<.5?(1-b(1-Q*2))/2:.5+b((Q-.5)*2)/2}},_configElastic=function F(b,Q,D){var O=Q>=1?Q:1,U=(D||(b?.3:.45))/(Q<1?Q:1),q=U/_2PI*(Math.asin(1/O)||0),G=function(ee){return ee===1?1:O*Math.pow(2,-10*ee)*_sin((ee-q)*U)+1},Y=b==="out"?G:b==="in"?function(X){return 1-G(1-X)}:_easeInOutFromOut(G);return U=_2PI/U,Y.config=function(X,ee){return F(b,X,ee)},Y},_configBack=function F(b,Q){Q===void 0&&(Q=1.70158);var D=function(q){return q?--q*q*((Q+1)*q+Q)+1:0},O=b==="out"?D:b==="in"?function(U){return 1-D(1-U)}:_easeInOutFromOut(D);return O.config=function(U){return F(b,U)},O};_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong",function(F,b){var Q=b<5?b+1:b;_insertEase(F+",Power"+(Q-1),b?function(D){return Math.pow(D,Q)}:function(D){return D},function(D){return 1-Math.pow(1-D,Q)},function(D){return D<.5?Math.pow(D*2,Q)/2:1-Math.pow((1-D)*2,Q)/2})});_easeMap.Linear.easeNone=_easeMap.none=_easeMap.Linear.easeIn;_insertEase("Elastic",_configElastic("in"),_configElastic("out"),_configElastic());(function(F,b){var Q=1/b,D=2*Q,O=2.5*Q,U=function(G){return G<Q?F*G*G:G<D?F*Math.pow(G-1.5/b,2)+.75:G<O?F*(G-=2.25/b)*G+.9375:F*Math.pow(G-2.625/b,2)+.984375};_insertEase("Bounce",function(q){return 1-U(1-q)},U)})(7.5625,2.75);_insertEase("Expo",function(F){return F?Math.pow(2,10*(F-1)):0});_insertEase("Circ",function(F){return-(_sqrt(1-F*F)-1)});_insertEase("Sine",function(F){return F===1?1:-_cos(F*_HALF_PI)+1});_insertEase("Back",_configBack("in"),_configBack("out"),_configBack());_easeMap.SteppedEase=_easeMap.steps=_globals.SteppedEase={config:function F(b,Q){b===void 0&&(b=1);var D=1/b,O=b+(Q?0:1),U=Q?1:0,q=1-_tinyNum;return function(G){return((O*_clamp(0,q,G)|0)+U)*D}}};_defaults.ease=_easeMap["quad.out"];_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(F){return _callbackNames+=F+","+F+"Params,"});var GSCache=function F(b,Q){this.id=_gsID++,b._gsap=this,this.target=b,this.harness=Q,this.get=Q?Q.get:_getProperty,this.set=Q?Q.getSetter:_getSetter},Animation=function(){function F(Q){this.vars=Q,this._delay=+Q.delay||0,(this._repeat=Q.repeat===1/0?-2:Q.repeat||0)&&(this._rDelay=Q.repeatDelay||0,this._yoyo=!!Q.yoyo||!!Q.yoyoEase),this._ts=1,_setDuration(this,+Q.duration,1,1),this.data=Q.data,_context&&(this._ctx=_context,_context.data.push(this)),_tickerActive||_ticker.wake()}var b=F.prototype;return b.delay=function(D){return D||D===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+D-this._delay),this._delay=D,this):this._delay},b.duration=function(D){return arguments.length?this.totalDuration(this._repeat>0?D+(D+this._rDelay)*this._repeat:D):this.totalDuration()&&this._dur},b.totalDuration=function(D){return arguments.length?(this._dirty=0,_setDuration(this,this._repeat<0?D:(D-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},b.totalTime=function(D,O){if(_wake(),!arguments.length)return this._tTime;var U=this._dp;if(U&&U.smoothChildTiming&&this._ts){for(_alignPlayhead(this,D),!U._dp||U.parent||_postAddChecks(U,this);U&&U.parent;)U.parent._time!==U._start+(U._ts>=0?U._tTime/U._ts:(U.totalDuration()-U._tTime)/-U._ts)&&U.totalTime(U._tTime,!0),U=U.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&D<this._tDur||this._ts<0&&D>0||!this._tDur&&!D)&&_addToTimeline(this._dp,this,this._start-this._delay)}return(this._tTime!==D||!this._dur&&!O||this._initted&&Math.abs(this._zTime)===_tinyNum||!D&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=D),_lazySafeRender(this,D,O)),this},b.time=function(D,O){return arguments.length?this.totalTime(Math.min(this.totalDuration(),D+_elapsedCycleDuration(this))%(this._dur+this._rDelay)||(D?this._dur:0),O):this._time},b.totalProgress=function(D,O){return arguments.length?this.totalTime(this.totalDuration()*D,O):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},b.progress=function(D,O){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-D:D)+_elapsedCycleDuration(this),O):this.duration()?Math.min(1,this._time/this._dur):this.ratio},b.iteration=function(D,O){var U=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(D-1)*U,O):this._repeat?_animationCycle(this._tTime,U)+1:1},b.timeScale=function(D){if(!arguments.length)return this._rts===-_tinyNum?0:this._rts;if(this._rts===D)return this;var O=this.parent&&this._ts?_parentToChildTotalTime(this.parent._time,this):this._tTime;return this._rts=+D||0,this._ts=this._ps||D===-_tinyNum?0:this._rts,this.totalTime(_clamp(-Math.abs(this._delay),this._tDur,O),!0),_setEnd(this),_recacheAncestors(this)},b.paused=function(D){return arguments.length?(this._ps!==D&&(this._ps=D,D?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_wake(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_tinyNum&&(this._tTime-=_tinyNum)))),this):this._ps},b.startTime=function(D){if(arguments.length){this._start=D;var O=this.parent||this._dp;return O&&(O._sort||!this.parent)&&_addToTimeline(O,this,D-this._delay),this}return this._start},b.endTime=function(D){return this._start+(_isNotFalse(D)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},b.rawTime=function(D){var O=this.parent||this._dp;return O?D&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_parentToChildTotalTime(O.rawTime(D),this):this._tTime:this._tTime},b.revert=function(D){D===void 0&&(D=_revertConfig);var O=_reverting$1;return _reverting$1=D,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(D),this.totalTime(-.01,D.suppressEvents)),this.data!=="nested"&&D.kill!==!1&&this.kill(),_reverting$1=O,this},b.globalTime=function(D){for(var O=this,U=arguments.length?D:O.rawTime();O;)U=O._start+U/(O._ts||1),O=O._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(D):U},b.repeat=function(D){return arguments.length?(this._repeat=D===1/0?-2:D,_onUpdateTotalDuration(this)):this._repeat===-2?1/0:this._repeat},b.repeatDelay=function(D){if(arguments.length){var O=this._time;return this._rDelay=D,_onUpdateTotalDuration(this),O?this.time(O):this}return this._rDelay},b.yoyo=function(D){return arguments.length?(this._yoyo=D,this):this._yoyo},b.seek=function(D,O){return this.totalTime(_parsePosition(this,D),_isNotFalse(O))},b.restart=function(D,O){return this.play().totalTime(D?-this._delay:0,_isNotFalse(O))},b.play=function(D,O){return D!=null&&this.seek(D,O),this.reversed(!1).paused(!1)},b.reverse=function(D,O){return D!=null&&this.seek(D||this.totalDuration(),O),this.reversed(!0).paused(!1)},b.pause=function(D,O){return D!=null&&this.seek(D,O),this.paused(!0)},b.resume=function(){return this.paused(!1)},b.reversed=function(D){return arguments.length?(!!D!==this.reversed()&&this.timeScale(-this._rts||(D?-_tinyNum:0)),this):this._rts<0},b.invalidate=function(){return this._initted=this._act=0,this._zTime=-_tinyNum,this},b.isActive=function(){var D=this.parent||this._dp,O=this._start,U;return!!(!D||this._ts&&this._initted&&D.isActive()&&(U=D.rawTime(!0))>=O&&U<this.endTime(!0)-_tinyNum)},b.eventCallback=function(D,O,U){var q=this.vars;return arguments.length>1?(O?(q[D]=O,U&&(q[D+"Params"]=U),D==="onUpdate"&&(this._onUpdate=O)):delete q[D],this):q[D]},b.then=function(D){var O=this;return new Promise(function(U){var q=_isFunction(D)?D:_passThrough,G=function(){var X=O.then;O.then=null,_isFunction(q)&&(q=q(O))&&(q.then||q===O)&&(O.then=X),U(q),O.then=X};O._initted&&O.totalProgress()===1&&O._ts>=0||!O._tTime&&O._ts<0?G():O._prom=G})},b.kill=function(){_interrupt(this)},F}();_setDefaults(Animation.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_tinyNum,_prom:0,_ps:!1,_rts:1});var Timeline=function(F){_inheritsLoose(b,F);function b(D,O){var U;return D===void 0&&(D={}),U=F.call(this,D)||this,U.labels={},U.smoothChildTiming=!!D.smoothChildTiming,U.autoRemoveChildren=!!D.autoRemoveChildren,U._sort=_isNotFalse(D.sortChildren),_globalTimeline&&_addToTimeline(D.parent||_globalTimeline,_assertThisInitialized(U),O),D.reversed&&U.reverse(),D.paused&&U.paused(!0),D.scrollTrigger&&_scrollTrigger(_assertThisInitialized(U),D.scrollTrigger),U}var Q=b.prototype;return Q.to=function(O,U,q){return _createTweenType(0,arguments,this),this},Q.from=function(O,U,q){return _createTweenType(1,arguments,this),this},Q.fromTo=function(O,U,q,G){return _createTweenType(2,arguments,this),this},Q.set=function(O,U,q){return U.duration=0,U.parent=this,_inheritDefaults(U).repeatDelay||(U.repeat=0),U.immediateRender=!!U.immediateRender,new Tween(O,U,_parsePosition(this,q),1),this},Q.call=function(O,U,q){return _addToTimeline(this,Tween.delayedCall(0,O,U),q)},Q.staggerTo=function(O,U,q,G,Y,X,ee){return q.duration=U,q.stagger=q.stagger||G,q.onComplete=X,q.onCompleteParams=ee,q.parent=this,new Tween(O,q,_parsePosition(this,Y)),this},Q.staggerFrom=function(O,U,q,G,Y,X,ee){return q.runBackwards=1,_inheritDefaults(q).immediateRender=_isNotFalse(q.immediateRender),this.staggerTo(O,U,q,G,Y,X,ee)},Q.staggerFromTo=function(O,U,q,G,Y,X,ee,re){return G.startAt=q,_inheritDefaults(G).immediateRender=_isNotFalse(G.immediateRender),this.staggerTo(O,U,G,Y,X,ee,re)},Q.render=function(O,U,q){var G=this._time,Y=this._dirty?this.totalDuration():this._tDur,X=this._dur,ee=O<=0?0:_roundPrecise(O),re=this._zTime<0!=O<0&&(this._initted||!X),ie,ae,ce,Ae,ge,Be,Ie,_e,Ce,be,Qe,Se;if(this!==_globalTimeline&&ee>Y&&O>=0&&(ee=Y),ee!==this._tTime||q||re){if(G!==this._time&&X&&(ee+=this._time-G,O+=this._time-G),ie=ee,Ce=this._start,_e=this._ts,Be=!_e,re&&(X||(G=this._zTime),(O||!U)&&(this._zTime=O)),this._repeat){if(Qe=this._yoyo,ge=X+this._rDelay,this._repeat<-1&&O<0)return this.totalTime(ge*100+O,U,q);if(ie=_roundPrecise(ee%ge),ee===Y?(Ae=this._repeat,ie=X):(Ae=~~(ee/ge),Ae&&Ae===ee/ge&&(ie=X,Ae--),ie>X&&(ie=X)),be=_animationCycle(this._tTime,ge),!G&&this._tTime&&be!==Ae&&this._tTime-be*ge-this._dur<=0&&(be=Ae),Qe&&Ae&1&&(ie=X-ie,Se=1),Ae!==be&&!this._lock){var Me=Qe&&be&1,ke=Me===(Qe&&Ae&1);if(Ae<be&&(Me=!Me),G=Me?0:X,this._lock=1,this.render(G||(Se?0:_roundPrecise(Ae*ge)),U,!X)._lock=0,this._tTime=ee,!U&&this.parent&&_callback(this,"onRepeat"),this.vars.repeatRefresh&&!Se&&(this.invalidate()._lock=1),G&&G!==this._time||Be!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(X=this._dur,Y=this._tDur,ke&&(this._lock=2,G=Me?X:-1e-4,this.render(G,!0),this.vars.repeatRefresh&&!Se&&this.invalidate()),this._lock=0,!this._ts&&!Be)return this;_propagateYoyoEase(this,Se)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(Ie=_findNextPauseTween(this,_roundPrecise(G),_roundPrecise(ie)),Ie&&(ee-=ie-(ie=Ie._start))),this._tTime=ee,this._time=ie,this._act=!_e,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=O,G=0),!G&&ie&&!U&&!Ae&&(_callback(this,"onStart"),this._tTime!==ee))return this;if(ie>=G&&O>=0)for(ae=this._first;ae;){if(ce=ae._next,(ae._act||ie>=ae._start)&&ae._ts&&Ie!==ae){if(ae.parent!==this)return this.render(O,U,q);if(ae.render(ae._ts>0?(ie-ae._start)*ae._ts:(ae._dirty?ae.totalDuration():ae._tDur)+(ie-ae._start)*ae._ts,U,q),ie!==this._time||!this._ts&&!Be){Ie=0,ce&&(ee+=this._zTime=-_tinyNum);break}}ae=ce}else{ae=this._last;for(var Fe=O<0?O:ie;ae;){if(ce=ae._prev,(ae._act||Fe<=ae._end)&&ae._ts&&Ie!==ae){if(ae.parent!==this)return this.render(O,U,q);if(ae.render(ae._ts>0?(Fe-ae._start)*ae._ts:(ae._dirty?ae.totalDuration():ae._tDur)+(Fe-ae._start)*ae._ts,U,q||_reverting$1&&(ae._initted||ae._startAt)),ie!==this._time||!this._ts&&!Be){Ie=0,ce&&(ee+=this._zTime=Fe?-_tinyNum:_tinyNum);break}}ae=ce}}if(Ie&&!U&&(this.pause(),Ie.render(ie>=G?0:-_tinyNum)._zTime=ie>=G?1:-1,this._ts))return this._start=Ce,_setEnd(this),this.render(O,U,q);this._onUpdate&&!U&&_callback(this,"onUpdate",!0),(ee===Y&&this._tTime>=this.totalDuration()||!ee&&G)&&(Ce===this._start||Math.abs(_e)!==Math.abs(this._ts))&&(this._lock||((O||!X)&&(ee===Y&&this._ts>0||!ee&&this._ts<0)&&_removeFromParent(this,1),!U&&!(O<0&&!G)&&(ee||G||!Y)&&(_callback(this,ee===Y&&O>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(ee<Y&&this.timeScale()>0)&&this._prom())))}return this},Q.add=function(O,U){var q=this;if(_isNumber(U)||(U=_parsePosition(this,U,O)),!(O instanceof Animation)){if(_isArray(O))return O.forEach(function(G){return q.add(G,U)}),this;if(_isString(O))return this.addLabel(O,U);if(_isFunction(O))O=Tween.delayedCall(0,O);else return this}return this!==O?_addToTimeline(this,O,U):this},Q.getChildren=function(O,U,q,G){O===void 0&&(O=!0),U===void 0&&(U=!0),q===void 0&&(q=!0),G===void 0&&(G=-_bigNum$1);for(var Y=[],X=this._first;X;)X._start>=G&&(X instanceof Tween?U&&Y.push(X):(q&&Y.push(X),O&&Y.push.apply(Y,X.getChildren(!0,U,q)))),X=X._next;return Y},Q.getById=function(O){for(var U=this.getChildren(1,1,1),q=U.length;q--;)if(U[q].vars.id===O)return U[q]},Q.remove=function(O){return _isString(O)?this.removeLabel(O):_isFunction(O)?this.killTweensOf(O):(_removeLinkedListItem(this,O),O===this._recent&&(this._recent=this._last),_uncache(this))},Q.totalTime=function(O,U){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_roundPrecise(_ticker.time-(this._ts>0?O/this._ts:(this.totalDuration()-O)/-this._ts))),F.prototype.totalTime.call(this,O,U),this._forcing=0,this):this._tTime},Q.addLabel=function(O,U){return this.labels[O]=_parsePosition(this,U),this},Q.removeLabel=function(O){return delete this.labels[O],this},Q.addPause=function(O,U,q){var G=Tween.delayedCall(0,U||_emptyFunc,q);return G.data="isPause",this._hasPause=1,_addToTimeline(this,G,_parsePosition(this,O))},Q.removePause=function(O){var U=this._first;for(O=_parsePosition(this,O);U;)U._start===O&&U.data==="isPause"&&_removeFromParent(U),U=U._next},Q.killTweensOf=function(O,U,q){for(var G=this.getTweensOf(O,q),Y=G.length;Y--;)_overwritingTween!==G[Y]&&G[Y].kill(O,U);return this},Q.getTweensOf=function(O,U){for(var q=[],G=toArray(O),Y=this._first,X=_isNumber(U),ee;Y;)Y instanceof Tween?_arrayContainsAny(Y._targets,G)&&(X?(!_overwritingTween||Y._initted&&Y._ts)&&Y.globalTime(0)<=U&&Y.globalTime(Y.totalDuration())>U:!U||Y.isActive())&&q.push(Y):(ee=Y.getTweensOf(G,U)).length&&q.push.apply(q,ee),Y=Y._next;return q},Q.tweenTo=function(O,U){U=U||{};var q=this,G=_parsePosition(q,O),Y=U,X=Y.startAt,ee=Y.onStart,re=Y.onStartParams,ie=Y.immediateRender,ae,ce=Tween.to(q,_setDefaults({ease:U.ease||"none",lazy:!1,immediateRender:!1,time:G,overwrite:"auto",duration:U.duration||Math.abs((G-(X&&"time"in X?X.time:q._time))/q.timeScale())||_tinyNum,onStart:function(){if(q.pause(),!ae){var ge=U.duration||Math.abs((G-(X&&"time"in X?X.time:q._time))/q.timeScale());ce._dur!==ge&&_setDuration(ce,ge,0,1).render(ce._time,!0,!0),ae=1}ee&&ee.apply(ce,re||[])}},U));return ie?ce.render(0):ce},Q.tweenFromTo=function(O,U,q){return this.tweenTo(U,_setDefaults({startAt:{time:_parsePosition(this,O)}},q))},Q.recent=function(){return this._recent},Q.nextLabel=function(O){return O===void 0&&(O=this._time),_getLabelInDirection(this,_parsePosition(this,O))},Q.previousLabel=function(O){return O===void 0&&(O=this._time),_getLabelInDirection(this,_parsePosition(this,O),1)},Q.currentLabel=function(O){return arguments.length?this.seek(O,!0):this.previousLabel(this._time+_tinyNum)},Q.shiftChildren=function(O,U,q){q===void 0&&(q=0);for(var G=this._first,Y=this.labels,X;G;)G._start>=q&&(G._start+=O,G._end+=O),G=G._next;if(U)for(X in Y)Y[X]>=q&&(Y[X]+=O);return _uncache(this)},Q.invalidate=function(O){var U=this._first;for(this._lock=0;U;)U.invalidate(O),U=U._next;return F.prototype.invalidate.call(this,O)},Q.clear=function(O){O===void 0&&(O=!0);for(var U=this._first,q;U;)q=U._next,this.remove(U),U=q;return this._dp&&(this._time=this._tTime=this._pTime=0),O&&(this.labels={}),_uncache(this)},Q.totalDuration=function(O){var U=0,q=this,G=q._last,Y=_bigNum$1,X,ee,re;if(arguments.length)return q.timeScale((q._repeat<0?q.duration():q.totalDuration())/(q.reversed()?-O:O));if(q._dirty){for(re=q.parent;G;)X=G._prev,G._dirty&&G.totalDuration(),ee=G._start,ee>Y&&q._sort&&G._ts&&!q._lock?(q._lock=1,_addToTimeline(q,G,ee-G._delay,1)._lock=0):Y=ee,ee<0&&G._ts&&(U-=ee,(!re&&!q._dp||re&&re.smoothChildTiming)&&(q._start+=ee/q._ts,q._time-=ee,q._tTime-=ee),q.shiftChildren(-ee,!1,-1/0),Y=0),G._end>U&&G._ts&&(U=G._end),G=X;_setDuration(q,q===_globalTimeline&&q._time>U?q._time:U,1,1),q._dirty=0}return q._tDur},b.updateRoot=function(O){if(_globalTimeline._ts&&(_lazySafeRender(_globalTimeline,_parentToChildTotalTime(O,_globalTimeline)),_lastRenderedFrame=_ticker.frame),_ticker.frame>=_nextGCFrame){_nextGCFrame+=_config.autoSleep||120;var U=_globalTimeline._first;if((!U||!U._ts)&&_config.autoSleep&&_ticker._listeners.length<2){for(;U&&!U._ts;)U=U._next;U||_ticker.sleep()}}},b}(Animation);_setDefaults(Timeline.prototype,{_lock:0,_hasPause:0,_forcing:0});var _addComplexStringPropTween=function F(b,Q,D,O,U,q,G){var Y=new PropTween(this._pt,b,Q,0,1,_renderComplexString,null,U),X=0,ee=0,re,ie,ae,ce,Ae,ge,Be,Ie;for(Y.b=D,Y.e=O,D+="",O+="",(Be=~O.indexOf("random("))&&(O=_replaceRandom(O)),q&&(Ie=[D,O],q(Ie,b,Q),D=Ie[0],O=Ie[1]),ie=D.match(_complexStringNumExp)||[];re=_complexStringNumExp.exec(O);)ce=re[0],Ae=O.substring(X,re.index),ae?ae=(ae+1)%5:Ae.substr(-5)==="rgba("&&(ae=1),ce!==ie[ee++]&&(ge=parseFloat(ie[ee-1])||0,Y._pt={_next:Y._pt,p:Ae||ee===1?Ae:",",s:ge,c:ce.charAt(1)==="="?_parseRelative(ge,ce)-ge:parseFloat(ce)-ge,m:ae&&ae<4?Math.round:0},X=_complexStringNumExp.lastIndex);return Y.c=X<O.length?O.substring(X,O.length):"",Y.fp=G,(_relExp.test(O)||Be)&&(Y.e=0),this._pt=Y,Y},_addPropTween=function F(b,Q,D,O,U,q,G,Y,X,ee){_isFunction(O)&&(O=O(U||0,b,q));var re=b[Q],ie=D!=="get"?D:_isFunction(re)?X?b[Q.indexOf("set")||!_isFunction(b["get"+Q.substr(3)])?Q:"get"+Q.substr(3)](X):b[Q]():re,ae=_isFunction(re)?X?_setterFuncWithParam:_setterFunc:_setterPlain,ce;if(_isString(O)&&(~O.indexOf("random(")&&(O=_replaceRandom(O)),O.charAt(1)==="="&&(ce=_parseRelative(ie,O)+(getUnit(ie)||0),(ce||ce===0)&&(O=ce))),!ee||ie!==O||_forceAllPropTweens)return!isNaN(ie*O)&&O!==""?(ce=new PropTween(this._pt,b,Q,+ie||0,O-(ie||0),typeof re=="boolean"?_renderBoolean:_renderPlain,0,ae),X&&(ce.fp=X),G&&ce.modifier(G,this,b),this._pt=ce):(!re&&!(Q in b)&&_missingPlugin(Q,O),_addComplexStringPropTween.call(this,b,Q,ie,O,ae,Y||_config.stringFilter,X))},_processVars=function F(b,Q,D,O,U){if(_isFunction(b)&&(b=_parseFuncOrString(b,U,Q,D,O)),!_isObject(b)||b.style&&b.nodeType||_isArray(b)||_isTypedArray(b))return _isString(b)?_parseFuncOrString(b,U,Q,D,O):b;var q={},G;for(G in b)q[G]=_parseFuncOrString(b[G],U,Q,D,O);return q},_checkPlugin=function F(b,Q,D,O,U,q){var G,Y,X,ee;if(_plugins[b]&&(G=new _plugins[b]).init(U,G.rawVars?Q[b]:_processVars(Q[b],O,U,q,D),D,O,q)!==!1&&(D._pt=Y=new PropTween(D._pt,U,b,0,1,G.render,G,0,G.priority),D!==_quickTween))for(X=D._ptLookup[D._targets.indexOf(U)],ee=G._props.length;ee--;)X[G._props[ee]]=Y;return G},_overwritingTween,_forceAllPropTweens,_initTween=function F(b,Q,D){var O=b.vars,U=O.ease,q=O.startAt,G=O.immediateRender,Y=O.lazy,X=O.onUpdate,ee=O.onUpdateParams,re=O.callbackScope,ie=O.runBackwards,ae=O.yoyoEase,ce=O.keyframes,Ae=O.autoRevert,ge=b._dur,Be=b._startAt,Ie=b._targets,_e=b.parent,Ce=_e&&_e.data==="nested"?_e.vars.targets:Ie,be=b._overwrite==="auto"&&!_suppressOverwrites,Qe=b.timeline,Se,Me,ke,Fe,Ue,Ye,Ge,Ve,Te,De,xe,Ne,$e;if(Qe&&(!ce||!U)&&(U="none"),b._ease=_parseEase(U,_defaults.ease),b._yEase=ae?_invertEase(_parseEase(ae===!0?U:ae,_defaults.ease)):0,ae&&b._yoyo&&!b._repeat&&(ae=b._yEase,b._yEase=b._ease,b._ease=ae),b._from=!Qe&&!!O.runBackwards,!Qe||ce&&!O.stagger){if(Ve=Ie[0]?_getCache(Ie[0]).harness:0,Ne=Ve&&O[Ve.prop],Se=_copyExcluding(O,_reservedProps),Be&&(Be._zTime<0&&Be.progress(1),Q<0&&ie&&G&&!Ae?Be.render(-1,!0):Be.revert(ie&&ge?_revertConfigNoKill:_startAtRevertConfig),Be._lazy=0),q){if(_removeFromParent(b._startAt=Tween.set(Ie,_setDefaults({data:"isStart",overwrite:!1,parent:_e,immediateRender:!0,lazy:!Be&&_isNotFalse(Y),startAt:null,delay:0,onUpdate:X,onUpdateParams:ee,callbackScope:re,stagger:0},q))),b._startAt._dp=0,b._startAt._sat=b,Q<0&&(_reverting$1||!G&&!Ae)&&b._startAt.revert(_revertConfigNoKill),G&&ge&&Q<=0&&D<=0){Q&&(b._zTime=Q);return}}else if(ie&&ge&&!Be){if(Q&&(G=!1),ke=_setDefaults({overwrite:!1,data:"isFromStart",lazy:G&&!Be&&_isNotFalse(Y),immediateRender:G,stagger:0,parent:_e},Se),Ne&&(ke[Ve.prop]=Ne),_removeFromParent(b._startAt=Tween.set(Ie,ke)),b._startAt._dp=0,b._startAt._sat=b,Q<0&&(_reverting$1?b._startAt.revert(_revertConfigNoKill):b._startAt.render(-1,!0)),b._zTime=Q,!G)F(b._startAt,_tinyNum,_tinyNum);else if(!Q)return}for(b._pt=b._ptCache=0,Y=ge&&_isNotFalse(Y)||Y&&!ge,Me=0;Me<Ie.length;Me++){if(Ue=Ie[Me],Ge=Ue._gsap||_harness(Ie)[Me]._gsap,b._ptLookup[Me]=De={},_lazyLookup[Ge.id]&&_lazyTweens.length&&_lazyRender(),xe=Ce===Ie?Me:Ce.indexOf(Ue),Ve&&(Te=new Ve).init(Ue,Ne||Se,b,xe,Ce)!==!1&&(b._pt=Fe=new PropTween(b._pt,Ue,Te.name,0,1,Te.render,Te,0,Te.priority),Te._props.forEach(function(Le){De[Le]=Fe}),Te.priority&&(Ye=1)),!Ve||Ne)for(ke in Se)_plugins[ke]&&(Te=_checkPlugin(ke,Se,b,xe,Ue,Ce))?Te.priority&&(Ye=1):De[ke]=Fe=_addPropTween.call(b,Ue,ke,"get",Se[ke],xe,Ce,0,O.stringFilter);b._op&&b._op[Me]&&b.kill(Ue,b._op[Me]),be&&b._pt&&(_overwritingTween=b,_globalTimeline.killTweensOf(Ue,De,b.globalTime(Q)),$e=!b.parent,_overwritingTween=0),b._pt&&Y&&(_lazyLookup[Ge.id]=1)}Ye&&_sortPropTweensByPriority(b),b._onInit&&b._onInit(b)}b._onUpdate=X,b._initted=(!b._op||b._pt)&&!$e,ce&&Q<=0&&Qe.render(_bigNum$1,!0,!0)},_updatePropTweens=function F(b,Q,D,O,U,q,G){var Y=(b._pt&&b._ptCache||(b._ptCache={}))[Q],X,ee,re,ie;if(!Y)for(Y=b._ptCache[Q]=[],re=b._ptLookup,ie=b._targets.length;ie--;){if(X=re[ie][Q],X&&X.d&&X.d._pt)for(X=X.d._pt;X&&X.p!==Q&&X.fp!==Q;)X=X._next;if(!X)return _forceAllPropTweens=1,b.vars[Q]="+=0",_initTween(b,G),_forceAllPropTweens=0,1;Y.push(X)}for(ie=Y.length;ie--;)ee=Y[ie],X=ee._pt||ee,X.s=(O||O===0)&&!U?O:X.s+(O||0)+q*X.c,X.c=D-X.s,ee.e&&(ee.e=_round(D)+getUnit(ee.e)),ee.b&&(ee.b=X.s+getUnit(ee.b))},_addAliasesToVars=function F(b,Q){var D=b[0]?_getCache(b[0]).harness:0,O=D&&D.aliases,U,q,G,Y;if(!O)return Q;U=_merge({},Q);for(q in O)if(q in U)for(Y=O[q].split(","),G=Y.length;G--;)U[Y[G]]=U[q];return U},_parseKeyframe=function F(b,Q,D,O){var U=Q.ease||O||"power1.inOut",q,G;if(_isArray(Q))G=D[b]||(D[b]=[]),Q.forEach(function(Y,X){return G.push({t:X/(Q.length-1)*100,v:Y,e:U})});else for(q in Q)G=D[q]||(D[q]=[]),q==="ease"||G.push({t:parseFloat(b),v:Q[q],e:U})},_parseFuncOrString=function F(b,Q,D,O,U){return _isFunction(b)?b.call(Q,D,O,U):_isString(b)&&~b.indexOf("random(")?_replaceRandom(b):b},_staggerTweenProps=_callbackNames+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_staggerPropsToSkip={};_forEachName(_staggerTweenProps+",id,stagger,delay,duration,paused,scrollTrigger",function(F){return _staggerPropsToSkip[F]=1});var Tween=function(F){_inheritsLoose(b,F);function b(D,O,U,q){var G;typeof O=="number"&&(U.duration=O,O=U,U=null),G=F.call(this,q?O:_inheritDefaults(O))||this;var Y=G.vars,X=Y.duration,ee=Y.delay,re=Y.immediateRender,ie=Y.stagger,ae=Y.overwrite,ce=Y.keyframes,Ae=Y.defaults,ge=Y.scrollTrigger,Be=Y.yoyoEase,Ie=O.parent||_globalTimeline,_e=(_isArray(D)||_isTypedArray(D)?_isNumber(D[0]):"length"in O)?[D]:toArray(D),Ce,be,Qe,Se,Me,ke,Fe,Ue;if(G._targets=_e.length?_harness(_e):_warn("GSAP target "+D+" not found. https://greensock.com",!_config.nullTargetWarn)||[],G._ptLookup=[],G._overwrite=ae,ce||ie||_isFuncOrString(X)||_isFuncOrString(ee)){if(O=G.vars,Ce=G.timeline=new Timeline({data:"nested",defaults:Ae||{},targets:Ie&&Ie.data==="nested"?Ie.vars.targets:_e}),Ce.kill(),Ce.parent=Ce._dp=_assertThisInitialized(G),Ce._start=0,ie||_isFuncOrString(X)||_isFuncOrString(ee)){if(Se=_e.length,Fe=ie&&distribute(ie),_isObject(ie))for(Me in ie)~_staggerTweenProps.indexOf(Me)&&(Ue||(Ue={}),Ue[Me]=ie[Me]);for(be=0;be<Se;be++)Qe=_copyExcluding(O,_staggerPropsToSkip),Qe.stagger=0,Be&&(Qe.yoyoEase=Be),Ue&&_merge(Qe,Ue),ke=_e[be],Qe.duration=+_parseFuncOrString(X,_assertThisInitialized(G),be,ke,_e),Qe.delay=(+_parseFuncOrString(ee,_assertThisInitialized(G),be,ke,_e)||0)-G._delay,!ie&&Se===1&&Qe.delay&&(G._delay=ee=Qe.delay,G._start+=ee,Qe.delay=0),Ce.to(ke,Qe,Fe?Fe(be,ke,_e):0),Ce._ease=_easeMap.none;Ce.duration()?X=ee=0:G.timeline=0}else if(ce){_inheritDefaults(_setDefaults(Ce.vars.defaults,{ease:"none"})),Ce._ease=_parseEase(ce.ease||O.ease||"none");var Ye=0,Ge,Ve,Te;if(_isArray(ce))ce.forEach(function(De){return Ce.to(_e,De,">")}),Ce.duration();else{Qe={};for(Me in ce)Me==="ease"||Me==="easeEach"||_parseKeyframe(Me,ce[Me],Qe,ce.easeEach);for(Me in Qe)for(Ge=Qe[Me].sort(function(De,xe){return De.t-xe.t}),Ye=0,be=0;be<Ge.length;be++)Ve=Ge[be],Te={ease:Ve.e,duration:(Ve.t-(be?Ge[be-1].t:0))/100*X},Te[Me]=Ve.v,Ce.to(_e,Te,Ye),Ye+=Te.duration;Ce.duration()<X&&Ce.to({},{duration:X-Ce.duration()})}}X||G.duration(X=Ce.duration())}else G.timeline=0;return ae===!0&&!_suppressOverwrites&&(_overwritingTween=_assertThisInitialized(G),_globalTimeline.killTweensOf(_e),_overwritingTween=0),_addToTimeline(Ie,_assertThisInitialized(G),U),O.reversed&&G.reverse(),O.paused&&G.paused(!0),(re||!X&&!ce&&G._start===_roundPrecise(Ie._time)&&_isNotFalse(re)&&_hasNoPausedAncestors(_assertThisInitialized(G))&&Ie.data!=="nested")&&(G._tTime=-_tinyNum,G.render(Math.max(0,-ee)||0)),ge&&_scrollTrigger(_assertThisInitialized(G),ge),G}var Q=b.prototype;return Q.render=function(O,U,q){var G=this._time,Y=this._tDur,X=this._dur,ee=O<0,re=O>Y-_tinyNum&&!ee?Y:O<_tinyNum?0:O,ie,ae,ce,Ae,ge,Be,Ie,_e,Ce;if(!X)_renderZeroDurationTween(this,O,U,q);else if(re!==this._tTime||!O||q||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==ee){if(ie=re,_e=this.timeline,this._repeat){if(Ae=X+this._rDelay,this._repeat<-1&&ee)return this.totalTime(Ae*100+O,U,q);if(ie=_roundPrecise(re%Ae),re===Y?(ce=this._repeat,ie=X):(ce=~~(re/Ae),ce&&ce===re/Ae&&(ie=X,ce--),ie>X&&(ie=X)),Be=this._yoyo&&ce&1,Be&&(Ce=this._yEase,ie=X-ie),ge=_animationCycle(this._tTime,Ae),ie===G&&!q&&this._initted)return this._tTime=re,this;ce!==ge&&(_e&&this._yEase&&_propagateYoyoEase(_e,Be),this.vars.repeatRefresh&&!Be&&!this._lock&&(this._lock=q=1,this.render(_roundPrecise(Ae*ce),!0).invalidate()._lock=0))}if(!this._initted){if(_attemptInitTween(this,ee?O:ie,q,U,re))return this._tTime=0,this;if(G!==this._time)return this;if(X!==this._dur)return this.render(O,U,q)}if(this._tTime=re,this._time=ie,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=Ie=(Ce||this._ease)(ie/X),this._from&&(this.ratio=Ie=1-Ie),ie&&!G&&!U&&!ce&&(_callback(this,"onStart"),this._tTime!==re))return this;for(ae=this._pt;ae;)ae.r(Ie,ae.d),ae=ae._next;_e&&_e.render(O<0?O:!ie&&Be?-_tinyNum:_e._dur*_e._ease(ie/this._dur),U,q)||this._startAt&&(this._zTime=O),this._onUpdate&&!U&&(ee&&_rewindStartAt(this,O,U,q),_callback(this,"onUpdate")),this._repeat&&ce!==ge&&this.vars.onRepeat&&!U&&this.parent&&_callback(this,"onRepeat"),(re===this._tDur||!re)&&this._tTime===re&&(ee&&!this._onUpdate&&_rewindStartAt(this,O,!0,!0),(O||!X)&&(re===this._tDur&&this._ts>0||!re&&this._ts<0)&&_removeFromParent(this,1),!U&&!(ee&&!G)&&(re||G||Be)&&(_callback(this,re===Y?"onComplete":"onReverseComplete",!0),this._prom&&!(re<Y&&this.timeScale()>0)&&this._prom()))}return this},Q.targets=function(){return this._targets},Q.invalidate=function(O){return(!O||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(O),F.prototype.invalidate.call(this,O)},Q.resetTo=function(O,U,q,G){_tickerActive||_ticker.wake(),this._ts||this.play();var Y=Math.min(this._dur,(this._dp._time-this._start)*this._ts),X;return this._initted||_initTween(this,Y),X=this._ease(Y/this._dur),_updatePropTweens(this,O,U,q,G,X,Y)?this.resetTo(O,U,q,G):(_alignPlayhead(this,0),this.parent||_addLinkedListItem(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},Q.kill=function(O,U){if(U===void 0&&(U="all"),!O&&(!U||U==="all"))return this._lazy=this._pt=0,this.parent?_interrupt(this):this;if(this.timeline){var q=this.timeline.totalDuration();return this.timeline.killTweensOf(O,U,_overwritingTween&&_overwritingTween.vars.overwrite!==!0)._first||_interrupt(this),this.parent&&q!==this.timeline.totalDuration()&&_setDuration(this,this._dur*this.timeline._tDur/q,0,1),this}var G=this._targets,Y=O?toArray(O):G,X=this._ptLookup,ee=this._pt,re,ie,ae,ce,Ae,ge,Be;if((!U||U==="all")&&_arraysMatch(G,Y))return U==="all"&&(this._pt=0),_interrupt(this);for(re=this._op=this._op||[],U!=="all"&&(_isString(U)&&(Ae={},_forEachName(U,function(Ie){return Ae[Ie]=1}),U=Ae),U=_addAliasesToVars(G,U)),Be=G.length;Be--;)if(~Y.indexOf(G[Be])){ie=X[Be],U==="all"?(re[Be]=U,ce=ie,ae={}):(ae=re[Be]=re[Be]||{},ce=U);for(Ae in ce)ge=ie&&ie[Ae],ge&&((!("kill"in ge.d)||ge.d.kill(Ae)===!0)&&_removeLinkedListItem(this,ge,"_pt"),delete ie[Ae]),ae!=="all"&&(ae[Ae]=1)}return this._initted&&!this._pt&&ee&&_interrupt(this),this},b.to=function(O,U){return new b(O,U,arguments[2])},b.from=function(O,U){return _createTweenType(1,arguments)},b.delayedCall=function(O,U,q,G){return new b(U,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:O,onComplete:U,onReverseComplete:U,onCompleteParams:q,onReverseCompleteParams:q,callbackScope:G})},b.fromTo=function(O,U,q){return _createTweenType(2,arguments)},b.set=function(O,U){return U.duration=0,U.repeatDelay||(U.repeat=0),new b(O,U)},b.killTweensOf=function(O,U,q){return _globalTimeline.killTweensOf(O,U,q)},b}(Animation);_setDefaults(Tween.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_forEachName("staggerTo,staggerFrom,staggerFromTo",function(F){Tween[F]=function(){var b=new Timeline,Q=_slice.call(arguments,0);return Q.splice(F==="staggerFromTo"?5:4,0,0),b[F].apply(b,Q)}});var _setterPlain=function F(b,Q,D){return b[Q]=D},_setterFunc=function F(b,Q,D){return b[Q](D)},_setterFuncWithParam=function F(b,Q,D,O){return b[Q](O.fp,D)},_setterAttribute=function F(b,Q,D){return b.setAttribute(Q,D)},_getSetter=function F(b,Q){return _isFunction(b[Q])?_setterFunc:_isUndefined(b[Q])&&b.setAttribute?_setterAttribute:_setterPlain},_renderPlain=function F(b,Q){return Q.set(Q.t,Q.p,Math.round((Q.s+Q.c*b)*1e6)/1e6,Q)},_renderBoolean=function F(b,Q){return Q.set(Q.t,Q.p,!!(Q.s+Q.c*b),Q)},_renderComplexString=function F(b,Q){var D=Q._pt,O="";if(!b&&Q.b)O=Q.b;else if(b===1&&Q.e)O=Q.e;else{for(;D;)O=D.p+(D.m?D.m(D.s+D.c*b):Math.round((D.s+D.c*b)*1e4)/1e4)+O,D=D._next;O+=Q.c}Q.set(Q.t,Q.p,O,Q)},_renderPropTweens=function F(b,Q){for(var D=Q._pt;D;)D.r(b,D.d),D=D._next},_addPluginModifier=function F(b,Q,D,O){for(var U=this._pt,q;U;)q=U._next,U.p===O&&U.modifier(b,Q,D),U=q},_killPropTweensOf=function F(b){for(var Q=this._pt,D,O;Q;)O=Q._next,Q.p===b&&!Q.op||Q.op===b?_removeLinkedListItem(this,Q,"_pt"):Q.dep||(D=1),Q=O;return!D},_setterWithModifier=function F(b,Q,D,O){O.mSet(b,Q,O.m.call(O.tween,D,O.mt),O)},_sortPropTweensByPriority=function F(b){for(var Q=b._pt,D,O,U,q;Q;){for(D=Q._next,O=U;O&&O.pr>Q.pr;)O=O._next;(Q._prev=O?O._prev:q)?Q._prev._next=Q:U=Q,(Q._next=O)?O._prev=Q:q=Q,Q=D}b._pt=U},PropTween=function(){function F(Q,D,O,U,q,G,Y,X,ee){this.t=D,this.s=U,this.c=q,this.p=O,this.r=G||_renderPlain,this.d=Y||this,this.set=X||_setterPlain,this.pr=ee||0,this._next=Q,Q&&(Q._prev=this)}var b=F.prototype;return b.modifier=function(D,O,U){this.mSet=this.mSet||this.set,this.set=_setterWithModifier,this.m=D,this.mt=U,this.tween=O},F}();_forEachName(_callbackNames+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(F){return _reservedProps[F]=1});_globals.TweenMax=_globals.TweenLite=Tween;_globals.TimelineLite=_globals.TimelineMax=Timeline;_globalTimeline=new Timeline({sortChildren:!1,defaults:_defaults,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_config.stringFilter=_colorStringFilter;var _media=[],_listeners={},_emptyArray=[],_lastMediaTime=0,_dispatch=function F(b){return(_listeners[b]||_emptyArray).map(function(Q){return Q()})},_onMediaChange=function F(){var b=Date.now(),Q=[];b-_lastMediaTime>2&&(_dispatch("matchMediaInit"),_media.forEach(function(D){var O=D.queries,U=D.conditions,q,G,Y,X;for(G in O)q=_win$1.matchMedia(O[G]).matches,q&&(Y=1),q!==U[G]&&(U[G]=q,X=1);X&&(D.revert(),Y&&Q.push(D))}),_dispatch("matchMediaRevert"),Q.forEach(function(D){return D.onMatch(D)}),_lastMediaTime=b,_dispatch("matchMedia"))},Context=function(){function F(Q,D){this.selector=D&&selector(D),this.data=[],this._r=[],this.isReverted=!1,Q&&this.add(Q)}var b=F.prototype;return b.add=function(D,O,U){_isFunction(D)&&(U=O,O=D,D=_isFunction);var q=this,G=function(){var X=_context,ee=q.selector,re;return X&&X!==q&&X.data.push(q),U&&(q.selector=selector(U)),_context=q,re=O.apply(q,arguments),_isFunction(re)&&q._r.push(re),_context=X,q.selector=ee,q.isReverted=!1,re};return q.last=G,D===_isFunction?G(q):D?q[D]=G:G},b.ignore=function(D){var O=_context;_context=null,D(this),_context=O},b.getTweens=function(){var D=[];return this.data.forEach(function(O){return O instanceof F?D.push.apply(D,O.getTweens()):O instanceof Tween&&!(O.parent&&O.parent.data==="nested")&&D.push(O)}),D},b.clear=function(){this._r.length=this.data.length=0},b.kill=function(D,O){var U=this;if(D){var q=this.getTweens();this.data.forEach(function(Y){Y.data==="isFlip"&&(Y.revert(),Y.getChildren(!0,!0,!1).forEach(function(X){return q.splice(q.indexOf(X),1)}))}),q.map(function(Y){return{g:Y.globalTime(0),t:Y}}).sort(function(Y,X){return X.g-Y.g||-1}).forEach(function(Y){return Y.t.revert(D)}),this.data.forEach(function(Y){return!(Y instanceof Animation)&&Y.revert&&Y.revert(D)}),this._r.forEach(function(Y){return Y(D,U)}),this.isReverted=!0}else this.data.forEach(function(Y){return Y.kill&&Y.kill()});if(this.clear(),O){var G=_media.indexOf(this);~G&&_media.splice(G,1)}},b.revert=function(D){this.kill(D||{})},F}(),MatchMedia=function(){function F(Q){this.contexts=[],this.scope=Q}var b=F.prototype;return b.add=function(D,O,U){_isObject(D)||(D={matches:D});var q=new Context(0,U||this.scope),G=q.conditions={},Y,X,ee;this.contexts.push(q),O=q.add("onMatch",O),q.queries=D;for(X in D)X==="all"?ee=1:(Y=_win$1.matchMedia(D[X]),Y&&(_media.indexOf(q)<0&&_media.push(q),(G[X]=Y.matches)&&(ee=1),Y.addListener?Y.addListener(_onMediaChange):Y.addEventListener("change",_onMediaChange)));return ee&&O(q),this},b.revert=function(D){this.kill(D||{})},b.kill=function(D){this.contexts.forEach(function(O){return O.kill(D,!0)})},F}(),_gsap={registerPlugin:function F(){for(var b=arguments.length,Q=new Array(b),D=0;D<b;D++)Q[D]=arguments[D];Q.forEach(function(O){return _createPlugin(O)})},timeline:function F(b){return new Timeline(b)},getTweensOf:function F(b,Q){return _globalTimeline.getTweensOf(b,Q)},getProperty:function F(b,Q,D,O){_isString(b)&&(b=toArray(b)[0]);var U=_getCache(b||{}).get,q=D?_passThrough:_numericIfPossible;return D==="native"&&(D=""),b&&(Q?q((_plugins[Q]&&_plugins[Q].get||U)(b,Q,D,O)):function(G,Y,X){return q((_plugins[G]&&_plugins[G].get||U)(b,G,Y,X))})},quickSetter:function F(b,Q,D){if(b=toArray(b),b.length>1){var O=b.map(function(ee){return gsap$1.quickSetter(ee,Q,D)}),U=O.length;return function(ee){for(var re=U;re--;)O[re](ee)}}b=b[0]||{};var q=_plugins[Q],G=_getCache(b),Y=G.harness&&(G.harness.aliases||{})[Q]||Q,X=q?function(ee){var re=new q;_quickTween._pt=0,re.init(b,D?ee+D:ee,_quickTween,0,[b]),re.render(1,re),_quickTween._pt&&_renderPropTweens(1,_quickTween)}:G.set(b,Y);return q?X:function(ee){return X(b,Y,D?ee+D:ee,G,1)}},quickTo:function F(b,Q,D){var O,U=gsap$1.to(b,_merge((O={},O[Q]="+=0.1",O.paused=!0,O),D||{})),q=function(Y,X,ee){return U.resetTo(Q,Y,X,ee)};return q.tween=U,q},isTweening:function F(b){return _globalTimeline.getTweensOf(b,!0).length>0},defaults:function F(b){return b&&b.ease&&(b.ease=_parseEase(b.ease,_defaults.ease)),_mergeDeep(_defaults,b||{})},config:function F(b){return _mergeDeep(_config,b||{})},registerEffect:function F(b){var Q=b.name,D=b.effect,O=b.plugins,U=b.defaults,q=b.extendTimeline;(O||"").split(",").forEach(function(G){return G&&!_plugins[G]&&!_globals[G]&&_warn(Q+" effect requires "+G+" plugin.")}),_effects[Q]=function(G,Y,X){return D(toArray(G),_setDefaults(Y||{},U),X)},q&&(Timeline.prototype[Q]=function(G,Y,X){return this.add(_effects[Q](G,_isObject(Y)?Y:(X=Y)&&{},this),X)})},registerEase:function F(b,Q){_easeMap[b]=_parseEase(Q)},parseEase:function F(b,Q){return arguments.length?_parseEase(b,Q):_easeMap},getById:function F(b){return _globalTimeline.getById(b)},exportRoot:function F(b,Q){b===void 0&&(b={});var D=new Timeline(b),O,U;for(D.smoothChildTiming=_isNotFalse(b.smoothChildTiming),_globalTimeline.remove(D),D._dp=0,D._time=D._tTime=_globalTimeline._time,O=_globalTimeline._first;O;)U=O._next,(Q||!(!O._dur&&O instanceof Tween&&O.vars.onComplete===O._targets[0]))&&_addToTimeline(D,O,O._start-O._delay),O=U;return _addToTimeline(_globalTimeline,D,0),D},context:function F(b,Q){return b?new Context(b,Q):_context},matchMedia:function F(b){return new MatchMedia(b)},matchMediaRefresh:function F(){return _media.forEach(function(b){var Q=b.conditions,D,O;for(O in Q)Q[O]&&(Q[O]=!1,D=1);D&&b.revert()})||_onMediaChange()},addEventListener:function F(b,Q){var D=_listeners[b]||(_listeners[b]=[]);~D.indexOf(Q)||D.push(Q)},removeEventListener:function F(b,Q){var D=_listeners[b],O=D&&D.indexOf(Q);O>=0&&D.splice(O,1)},utils:{wrap,wrapYoyo,distribute,random,snap,normalize,getUnit,clamp,splitColor,toArray,selector,mapRange,pipe,unitize,interpolate,shuffle},install:_install,effects:_effects,ticker:_ticker,updateRoot:Timeline.updateRoot,plugins:_plugins,globalTimeline:_globalTimeline,core:{PropTween,globals:_addGlobal,Tween,Timeline,Animation,getCache:_getCache,_removeLinkedListItem,reverting:function F(){return _reverting$1},context:function F(b){return b&&_context&&(_context.data.push(b),b._ctx=_context),_context},suppressOverwrites:function F(b){return _suppressOverwrites=b}}};_forEachName("to,from,fromTo,delayedCall,set,killTweensOf",function(F){return _gsap[F]=Tween[F]});_ticker.add(Timeline.updateRoot);_quickTween=_gsap.to({},{duration:0});var _getPluginPropTween=function F(b,Q){for(var D=b._pt;D&&D.p!==Q&&D.op!==Q&&D.fp!==Q;)D=D._next;return D},_addModifiers=function F(b,Q){var D=b._targets,O,U,q;for(O in Q)for(U=D.length;U--;)q=b._ptLookup[U][O],q&&(q=q.d)&&(q._pt&&(q=_getPluginPropTween(q,O)),q&&q.modifier&&q.modifier(Q[O],b,D[U],O))},_buildModifierPlugin=function F(b,Q){return{name:b,rawVars:1,init:function(O,U,q){q._onInit=function(G){var Y,X;if(_isString(U)&&(Y={},_forEachName(U,function(ee){return Y[ee]=1}),U=Y),Q){Y={};for(X in U)Y[X]=Q(U[X]);U=Y}_addModifiers(G,U)}}}},gsap$1=_gsap.registerPlugin({name:"attr",init:function F(b,Q,D,O,U){var q,G,Y;this.tween=D;for(q in Q)Y=b.getAttribute(q)||"",G=this.add(b,"setAttribute",(Y||0)+"",Q[q],O,U,0,0,q),G.op=q,G.b=Y,this._props.push(q)},render:function F(b,Q){for(var D=Q._pt;D;)_reverting$1?D.set(D.t,D.p,D.b,D):D.r(b,D.d),D=D._next}},{name:"endArray",init:function F(b,Q){for(var D=Q.length;D--;)this.add(b,D,b[D]||0,Q[D],0,0,0,0,0,1)}},_buildModifierPlugin("roundProps",_roundModifier),_buildModifierPlugin("modifiers"),_buildModifierPlugin("snap",snap))||_gsap;Tween.version=Timeline.version=gsap$1.version="3.11.5";_coreReady=1;_windowExists$1()&&_wake();_easeMap.Power0;_easeMap.Power1;_easeMap.Power2;_easeMap.Power3;_easeMap.Power4;_easeMap.Linear;_easeMap.Quad;_easeMap.Cubic;_easeMap.Quart;_easeMap.Quint;_easeMap.Strong;_easeMap.Elastic;_easeMap.Back;_easeMap.SteppedEase;_easeMap.Bounce;_easeMap.Sine;_easeMap.Expo;_easeMap.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _win,_doc,_docElement,_pluginInitted,_tempDiv$1,_recentSetterPlugin,_reverting,_windowExists=function F(){return typeof window!="undefined"},_transformProps={},_RAD2DEG=180/Math.PI,_DEG2RAD=Math.PI/180,_atan2=Math.atan2,_bigNum=1e8,_capsExp=/([A-Z])/g,_horizontalExp=/(left|right|width|margin|padding|x)/i,_complexExp=/[\s,\(]\S/,_propertyAliases={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_renderCSSProp=function F(b,Q){return Q.set(Q.t,Q.p,Math.round((Q.s+Q.c*b)*1e4)/1e4+Q.u,Q)},_renderPropWithEnd=function F(b,Q){return Q.set(Q.t,Q.p,b===1?Q.e:Math.round((Q.s+Q.c*b)*1e4)/1e4+Q.u,Q)},_renderCSSPropWithBeginning=function F(b,Q){return Q.set(Q.t,Q.p,b?Math.round((Q.s+Q.c*b)*1e4)/1e4+Q.u:Q.b,Q)},_renderRoundedCSSProp=function F(b,Q){var D=Q.s+Q.c*b;Q.set(Q.t,Q.p,~~(D+(D<0?-.5:.5))+Q.u,Q)},_renderNonTweeningValue=function F(b,Q){return Q.set(Q.t,Q.p,b?Q.e:Q.b,Q)},_renderNonTweeningValueOnlyAtEnd=function F(b,Q){return Q.set(Q.t,Q.p,b!==1?Q.b:Q.e,Q)},_setterCSSStyle=function F(b,Q,D){return b.style[Q]=D},_setterCSSProp=function F(b,Q,D){return b.style.setProperty(Q,D)},_setterTransform=function F(b,Q,D){return b._gsap[Q]=D},_setterScale=function F(b,Q,D){return b._gsap.scaleX=b._gsap.scaleY=D},_setterScaleWithRender=function F(b,Q,D,O,U){var q=b._gsap;q.scaleX=q.scaleY=D,q.renderTransform(U,q)},_setterTransformWithRender=function F(b,Q,D,O,U){var q=b._gsap;q[Q]=D,q.renderTransform(U,q)},_transformProp="transform",_transformOriginProp=_transformProp+"Origin",_saveStyle=function F(b,Q){var D=this,O=this.target,U=O.style;if(b in _transformProps){if(this.tfm=this.tfm||{},b!=="transform")b=_propertyAliases[b]||b,~b.indexOf(",")?b.split(",").forEach(function(q){return D.tfm[q]=_get(O,q)}):this.tfm[b]=O._gsap.x?O._gsap[b]:_get(O,b);else return _propertyAliases.transform.split(",").forEach(function(q){return F.call(D,q,Q)});if(this.props.indexOf(_transformProp)>=0)return;O._gsap.svg&&(this.svgo=O.getAttribute("data-svg-origin"),this.props.push(_transformOriginProp,Q,"")),b=_transformProp}(U||Q)&&this.props.push(b,Q,U[b])},_removeIndependentTransforms=function F(b){b.translate&&(b.removeProperty("translate"),b.removeProperty("scale"),b.removeProperty("rotate"))},_revertStyle=function F(){var b=this.props,Q=this.target,D=Q.style,O=Q._gsap,U,q;for(U=0;U<b.length;U+=3)b[U+1]?Q[b[U]]=b[U+2]:b[U+2]?D[b[U]]=b[U+2]:D.removeProperty(b[U].substr(0,2)==="--"?b[U]:b[U].replace(_capsExp,"-$1").toLowerCase());if(this.tfm){for(q in this.tfm)O[q]=this.tfm[q];O.svg&&(O.renderTransform(),Q.setAttribute("data-svg-origin",this.svgo||"")),U=_reverting(),(!U||!U.isStart)&&!D[_transformProp]&&(_removeIndependentTransforms(D),O.uncache=1)}},_getStyleSaver=function F(b,Q){var D={target:b,props:[],revert:_revertStyle,save:_saveStyle};return b._gsap||gsap$1.core.getCache(b),Q&&Q.split(",").forEach(function(O){return D.save(O)}),D},_supports3D,_createElement=function F(b,Q){var D=_doc.createElementNS?_doc.createElementNS((Q||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),b):_doc.createElement(b);return D.style?D:_doc.createElement(b)},_getComputedProperty=function F(b,Q,D){var O=getComputedStyle(b);return O[Q]||O.getPropertyValue(Q.replace(_capsExp,"-$1").toLowerCase())||O.getPropertyValue(Q)||!D&&F(b,_checkPropPrefix(Q)||Q,1)||""},_prefixes="O,Moz,ms,Ms,Webkit".split(","),_checkPropPrefix=function F(b,Q,D){var O=Q||_tempDiv$1,U=O.style,q=5;if(b in U&&!D)return b;for(b=b.charAt(0).toUpperCase()+b.substr(1);q--&&!(_prefixes[q]+b in U););return q<0?null:(q===3?"ms":q>=0?_prefixes[q]:"")+b},_initCore=function F(){_windowExists()&&window.document&&(_win=window,_doc=_win.document,_docElement=_doc.documentElement,_tempDiv$1=_createElement("div")||{style:{}},_createElement("div"),_transformProp=_checkPropPrefix(_transformProp),_transformOriginProp=_transformProp+"Origin",_tempDiv$1.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_supports3D=!!_checkPropPrefix("perspective"),_reverting=gsap$1.core.reverting,_pluginInitted=1)},_getBBoxHack=function F(b){var Q=_createElement("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),D=this.parentNode,O=this.nextSibling,U=this.style.cssText,q;if(_docElement.appendChild(Q),Q.appendChild(this),this.style.display="block",b)try{q=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=F}catch{}else this._gsapBBox&&(q=this._gsapBBox());return D&&(O?D.insertBefore(this,O):D.appendChild(this)),_docElement.removeChild(Q),this.style.cssText=U,q},_getAttributeFallbacks=function F(b,Q){for(var D=Q.length;D--;)if(b.hasAttribute(Q[D]))return b.getAttribute(Q[D])},_getBBox=function F(b){var Q;try{Q=b.getBBox()}catch{Q=_getBBoxHack.call(b,!0)}return Q&&(Q.width||Q.height)||b.getBBox===_getBBoxHack||(Q=_getBBoxHack.call(b,!0)),Q&&!Q.width&&!Q.x&&!Q.y?{x:+_getAttributeFallbacks(b,["x","cx","x1"])||0,y:+_getAttributeFallbacks(b,["y","cy","y1"])||0,width:0,height:0}:Q},_isSVG=function F(b){return!!(b.getCTM&&(!b.parentNode||b.ownerSVGElement)&&_getBBox(b))},_removeProperty=function F(b,Q){if(Q){var D=b.style;Q in _transformProps&&Q!==_transformOriginProp&&(Q=_transformProp),D.removeProperty?((Q.substr(0,2)==="ms"||Q.substr(0,6)==="webkit")&&(Q="-"+Q),D.removeProperty(Q.replace(_capsExp,"-$1").toLowerCase())):D.removeAttribute(Q)}},_addNonTweeningPT=function F(b,Q,D,O,U,q){var G=new PropTween(b._pt,Q,D,0,1,q?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue);return b._pt=G,G.b=O,G.e=U,b._props.push(D),G},_nonConvertibleUnits={deg:1,rad:1,turn:1},_nonStandardLayouts={grid:1,flex:1},_convertToUnit=function F(b,Q,D,O){var U=parseFloat(D)||0,q=(D+"").trim().substr((U+"").length)||"px",G=_tempDiv$1.style,Y=_horizontalExp.test(Q),X=b.tagName.toLowerCase()==="svg",ee=(X?"client":"offset")+(Y?"Width":"Height"),re=100,ie=O==="px",ae=O==="%",ce,Ae,ge,Be;return O===q||!U||_nonConvertibleUnits[O]||_nonConvertibleUnits[q]?U:(q!=="px"&&!ie&&(U=F(b,Q,D,"px")),Be=b.getCTM&&_isSVG(b),(ae||q==="%")&&(_transformProps[Q]||~Q.indexOf("adius"))?(ce=Be?b.getBBox()[Y?"width":"height"]:b[ee],_round(ae?U/ce*re:U/100*ce)):(G[Y?"width":"height"]=re+(ie?q:O),Ae=~Q.indexOf("adius")||O==="em"&&b.appendChild&&!X?b:b.parentNode,Be&&(Ae=(b.ownerSVGElement||{}).parentNode),(!Ae||Ae===_doc||!Ae.appendChild)&&(Ae=_doc.body),ge=Ae._gsap,ge&&ae&&ge.width&&Y&&ge.time===_ticker.time&&!ge.uncache?_round(U/ge.width*re):((ae||q==="%")&&!_nonStandardLayouts[_getComputedProperty(Ae,"display")]&&(G.position=_getComputedProperty(b,"position")),Ae===b&&(G.position="static"),Ae.appendChild(_tempDiv$1),ce=_tempDiv$1[ee],Ae.removeChild(_tempDiv$1),G.position="absolute",Y&&ae&&(ge=_getCache(Ae),ge.time=_ticker.time,ge.width=Ae[ee]),_round(ie?ce*U/re:ce&&U?re/ce*U:0))))},_get=function F(b,Q,D,O){var U;return _pluginInitted||_initCore(),Q in _propertyAliases&&Q!=="transform"&&(Q=_propertyAliases[Q],~Q.indexOf(",")&&(Q=Q.split(",")[0])),_transformProps[Q]&&Q!=="transform"?(U=_parseTransform(b,O),U=Q!=="transformOrigin"?U[Q]:U.svg?U.origin:_firstTwoOnly(_getComputedProperty(b,_transformOriginProp))+" "+U.zOrigin+"px"):(U=b.style[Q],(!U||U==="auto"||O||~(U+"").indexOf("calc("))&&(U=_specialProps[Q]&&_specialProps[Q](b,Q,D)||_getComputedProperty(b,Q)||_getProperty(b,Q)||(Q==="opacity"?1:0))),D&&!~(U+"").trim().indexOf(" ")?_convertToUnit(b,Q,U,D)+D:U},_tweenComplexCSSString=function F(b,Q,D,O){if(!D||D==="none"){var U=_checkPropPrefix(Q,b,1),q=U&&_getComputedProperty(b,U,1);q&&q!==D?(Q=U,D=q):Q==="borderColor"&&(D=_getComputedProperty(b,"borderTopColor"))}var G=new PropTween(this._pt,b.style,Q,0,1,_renderComplexString),Y=0,X=0,ee,re,ie,ae,ce,Ae,ge,Be,Ie,_e,Ce,be;if(G.b=D,G.e=O,D+="",O+="",O==="auto"&&(b.style[Q]=O,O=_getComputedProperty(b,Q)||O,b.style[Q]=D),ee=[D,O],_colorStringFilter(ee),D=ee[0],O=ee[1],ie=D.match(_numWithUnitExp)||[],be=O.match(_numWithUnitExp)||[],be.length){for(;re=_numWithUnitExp.exec(O);)ge=re[0],Ie=O.substring(Y,re.index),ce?ce=(ce+1)%5:(Ie.substr(-5)==="rgba("||Ie.substr(-5)==="hsla(")&&(ce=1),ge!==(Ae=ie[X++]||"")&&(ae=parseFloat(Ae)||0,Ce=Ae.substr((ae+"").length),ge.charAt(1)==="="&&(ge=_parseRelative(ae,ge)+Ce),Be=parseFloat(ge),_e=ge.substr((Be+"").length),Y=_numWithUnitExp.lastIndex-_e.length,_e||(_e=_e||_config.units[Q]||Ce,Y===O.length&&(O+=_e,G.e+=_e)),Ce!==_e&&(ae=_convertToUnit(b,Q,Ae,_e)||0),G._pt={_next:G._pt,p:Ie||X===1?Ie:",",s:ae,c:Be-ae,m:ce&&ce<4||Q==="zIndex"?Math.round:0});G.c=Y<O.length?O.substring(Y,O.length):""}else G.r=Q==="display"&&O==="none"?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue;return _relExp.test(O)&&(G.e=0),this._pt=G,G},_keywordToPercent={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_convertKeywordsToPercentages=function F(b){var Q=b.split(" "),D=Q[0],O=Q[1]||"50%";return(D==="top"||D==="bottom"||O==="left"||O==="right")&&(b=D,D=O,O=b),Q[0]=_keywordToPercent[D]||D,Q[1]=_keywordToPercent[O]||O,Q.join(" ")},_renderClearProps=function F(b,Q){if(Q.tween&&Q.tween._time===Q.tween._dur){var D=Q.t,O=D.style,U=Q.u,q=D._gsap,G,Y,X;if(U==="all"||U===!0)O.cssText="",Y=1;else for(U=U.split(","),X=U.length;--X>-1;)G=U[X],_transformProps[G]&&(Y=1,G=G==="transformOrigin"?_transformOriginProp:_transformProp),_removeProperty(D,G);Y&&(_removeProperty(D,_transformProp),q&&(q.svg&&D.removeAttribute("transform"),_parseTransform(D,1),q.uncache=1,_removeIndependentTransforms(O)))}},_specialProps={clearProps:function F(b,Q,D,O,U){if(U.data!=="isFromStart"){var q=b._pt=new PropTween(b._pt,Q,D,0,0,_renderClearProps);return q.u=O,q.pr=-10,q.tween=U,b._props.push(D),1}}},_identity2DMatrix=[1,0,0,1,0,0],_rotationalProperties={},_isNullTransform=function F(b){return b==="matrix(1, 0, 0, 1, 0, 0)"||b==="none"||!b},_getComputedTransformMatrixAsArray=function F(b){var Q=_getComputedProperty(b,_transformProp);return _isNullTransform(Q)?_identity2DMatrix:Q.substr(7).match(_numExp).map(_round)},_getMatrix=function F(b,Q){var D=b._gsap||_getCache(b),O=b.style,U=_getComputedTransformMatrixAsArray(b),q,G,Y,X;return D.svg&&b.getAttribute("transform")?(Y=b.transform.baseVal.consolidate().matrix,U=[Y.a,Y.b,Y.c,Y.d,Y.e,Y.f],U.join(",")==="1,0,0,1,0,0"?_identity2DMatrix:U):(U===_identity2DMatrix&&!b.offsetParent&&b!==_docElement&&!D.svg&&(Y=O.display,O.display="block",q=b.parentNode,(!q||!b.offsetParent)&&(X=1,G=b.nextElementSibling,_docElement.appendChild(b)),U=_getComputedTransformMatrixAsArray(b),Y?O.display=Y:_removeProperty(b,"display"),X&&(G?q.insertBefore(b,G):q?q.appendChild(b):_docElement.removeChild(b))),Q&&U.length>6?[U[0],U[1],U[4],U[5],U[12],U[13]]:U)},_applySVGOrigin=function F(b,Q,D,O,U,q){var G=b._gsap,Y=U||_getMatrix(b,!0),X=G.xOrigin||0,ee=G.yOrigin||0,re=G.xOffset||0,ie=G.yOffset||0,ae=Y[0],ce=Y[1],Ae=Y[2],ge=Y[3],Be=Y[4],Ie=Y[5],_e=Q.split(" "),Ce=parseFloat(_e[0])||0,be=parseFloat(_e[1])||0,Qe,Se,Me,ke;D?Y!==_identity2DMatrix&&(Se=ae*ge-ce*Ae)&&(Me=Ce*(ge/Se)+be*(-Ae/Se)+(Ae*Ie-ge*Be)/Se,ke=Ce*(-ce/Se)+be*(ae/Se)-(ae*Ie-ce*Be)/Se,Ce=Me,be=ke):(Qe=_getBBox(b),Ce=Qe.x+(~_e[0].indexOf("%")?Ce/100*Qe.width:Ce),be=Qe.y+(~(_e[1]||_e[0]).indexOf("%")?be/100*Qe.height:be)),O||O!==!1&&G.smooth?(Be=Ce-X,Ie=be-ee,G.xOffset=re+(Be*ae+Ie*Ae)-Be,G.yOffset=ie+(Be*ce+Ie*ge)-Ie):G.xOffset=G.yOffset=0,G.xOrigin=Ce,G.yOrigin=be,G.smooth=!!O,G.origin=Q,G.originIsAbsolute=!!D,b.style[_transformOriginProp]="0px 0px",q&&(_addNonTweeningPT(q,G,"xOrigin",X,Ce),_addNonTweeningPT(q,G,"yOrigin",ee,be),_addNonTweeningPT(q,G,"xOffset",re,G.xOffset),_addNonTweeningPT(q,G,"yOffset",ie,G.yOffset)),b.setAttribute("data-svg-origin",Ce+" "+be)},_parseTransform=function F(b,Q){var D=b._gsap||new GSCache(b);if("x"in D&&!Q&&!D.uncache)return D;var O=b.style,U=D.scaleX<0,q="px",G="deg",Y=getComputedStyle(b),X=_getComputedProperty(b,_transformOriginProp)||"0",ee,re,ie,ae,ce,Ae,ge,Be,Ie,_e,Ce,be,Qe,Se,Me,ke,Fe,Ue,Ye,Ge,Ve,Te,De,xe,Ne,$e,Le,Pe,He,et,de,tt;return ee=re=ie=Ae=ge=Be=Ie=_e=Ce=0,ae=ce=1,D.svg=!!(b.getCTM&&_isSVG(b)),Y.translate&&((Y.translate!=="none"||Y.scale!=="none"||Y.rotate!=="none")&&(O[_transformProp]=(Y.translate!=="none"?"translate3d("+(Y.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(Y.rotate!=="none"?"rotate("+Y.rotate+") ":"")+(Y.scale!=="none"?"scale("+Y.scale.split(" ").join(",")+") ":"")+(Y[_transformProp]!=="none"?Y[_transformProp]:"")),O.scale=O.rotate=O.translate="none"),Se=_getMatrix(b,D.svg),D.svg&&(D.uncache?(Ne=b.getBBox(),X=D.xOrigin-Ne.x+"px "+(D.yOrigin-Ne.y)+"px",xe=""):xe=!Q&&b.getAttribute("data-svg-origin"),_applySVGOrigin(b,xe||X,!!xe||D.originIsAbsolute,D.smooth!==!1,Se)),be=D.xOrigin||0,Qe=D.yOrigin||0,Se!==_identity2DMatrix&&(Ue=Se[0],Ye=Se[1],Ge=Se[2],Ve=Se[3],ee=Te=Se[4],re=De=Se[5],Se.length===6?(ae=Math.sqrt(Ue*Ue+Ye*Ye),ce=Math.sqrt(Ve*Ve+Ge*Ge),Ae=Ue||Ye?_atan2(Ye,Ue)*_RAD2DEG:0,Ie=Ge||Ve?_atan2(Ge,Ve)*_RAD2DEG+Ae:0,Ie&&(ce*=Math.abs(Math.cos(Ie*_DEG2RAD))),D.svg&&(ee-=be-(be*Ue+Qe*Ge),re-=Qe-(be*Ye+Qe*Ve))):(tt=Se[6],et=Se[7],Le=Se[8],Pe=Se[9],He=Se[10],de=Se[11],ee=Se[12],re=Se[13],ie=Se[14],Me=_atan2(tt,He),ge=Me*_RAD2DEG,Me&&(ke=Math.cos(-Me),Fe=Math.sin(-Me),xe=Te*ke+Le*Fe,Ne=De*ke+Pe*Fe,$e=tt*ke+He*Fe,Le=Te*-Fe+Le*ke,Pe=De*-Fe+Pe*ke,He=tt*-Fe+He*ke,de=et*-Fe+de*ke,Te=xe,De=Ne,tt=$e),Me=_atan2(-Ge,He),Be=Me*_RAD2DEG,Me&&(ke=Math.cos(-Me),Fe=Math.sin(-Me),xe=Ue*ke-Le*Fe,Ne=Ye*ke-Pe*Fe,$e=Ge*ke-He*Fe,de=Ve*Fe+de*ke,Ue=xe,Ye=Ne,Ge=$e),Me=_atan2(Ye,Ue),Ae=Me*_RAD2DEG,Me&&(ke=Math.cos(Me),Fe=Math.sin(Me),xe=Ue*ke+Ye*Fe,Ne=Te*ke+De*Fe,Ye=Ye*ke-Ue*Fe,De=De*ke-Te*Fe,Ue=xe,Te=Ne),ge&&Math.abs(ge)+Math.abs(Ae)>359.9&&(ge=Ae=0,Be=180-Be),ae=_round(Math.sqrt(Ue*Ue+Ye*Ye+Ge*Ge)),ce=_round(Math.sqrt(De*De+tt*tt)),Me=_atan2(Te,De),Ie=Math.abs(Me)>2e-4?Me*_RAD2DEG:0,Ce=de?1/(de<0?-de:de):0),D.svg&&(xe=b.getAttribute("transform"),D.forceCSS=b.setAttribute("transform","")||!_isNullTransform(_getComputedProperty(b,_transformProp)),xe&&b.setAttribute("transform",xe))),Math.abs(Ie)>90&&Math.abs(Ie)<270&&(U?(ae*=-1,Ie+=Ae<=0?180:-180,Ae+=Ae<=0?180:-180):(ce*=-1,Ie+=Ie<=0?180:-180)),Q=Q||D.uncache,D.x=ee-((D.xPercent=ee&&(!Q&&D.xPercent||(Math.round(b.offsetWidth/2)===Math.round(-ee)?-50:0)))?b.offsetWidth*D.xPercent/100:0)+q,D.y=re-((D.yPercent=re&&(!Q&&D.yPercent||(Math.round(b.offsetHeight/2)===Math.round(-re)?-50:0)))?b.offsetHeight*D.yPercent/100:0)+q,D.z=ie+q,D.scaleX=_round(ae),D.scaleY=_round(ce),D.rotation=_round(Ae)+G,D.rotationX=_round(ge)+G,D.rotationY=_round(Be)+G,D.skewX=Ie+G,D.skewY=_e+G,D.transformPerspective=Ce+q,(D.zOrigin=parseFloat(X.split(" ")[2])||0)&&(O[_transformOriginProp]=_firstTwoOnly(X)),D.xOffset=D.yOffset=0,D.force3D=_config.force3D,D.renderTransform=D.svg?_renderSVGTransforms:_supports3D?_renderCSSTransforms:_renderNon3DTransforms,D.uncache=0,D},_firstTwoOnly=function F(b){return(b=b.split(" "))[0]+" "+b[1]},_addPxTranslate=function F(b,Q,D){var O=getUnit(Q);return _round(parseFloat(Q)+parseFloat(_convertToUnit(b,"x",D+"px",O)))+O},_renderNon3DTransforms=function F(b,Q){Q.z="0px",Q.rotationY=Q.rotationX="0deg",Q.force3D=0,_renderCSSTransforms(b,Q)},_zeroDeg="0deg",_zeroPx="0px",_endParenthesis=") ",_renderCSSTransforms=function F(b,Q){var D=Q||this,O=D.xPercent,U=D.yPercent,q=D.x,G=D.y,Y=D.z,X=D.rotation,ee=D.rotationY,re=D.rotationX,ie=D.skewX,ae=D.skewY,ce=D.scaleX,Ae=D.scaleY,ge=D.transformPerspective,Be=D.force3D,Ie=D.target,_e=D.zOrigin,Ce="",be=Be==="auto"&&b&&b!==1||Be===!0;if(_e&&(re!==_zeroDeg||ee!==_zeroDeg)){var Qe=parseFloat(ee)*_DEG2RAD,Se=Math.sin(Qe),Me=Math.cos(Qe),ke;Qe=parseFloat(re)*_DEG2RAD,ke=Math.cos(Qe),q=_addPxTranslate(Ie,q,Se*ke*-_e),G=_addPxTranslate(Ie,G,-Math.sin(Qe)*-_e),Y=_addPxTranslate(Ie,Y,Me*ke*-_e+_e)}ge!==_zeroPx&&(Ce+="perspective("+ge+_endParenthesis),(O||U)&&(Ce+="translate("+O+"%, "+U+"%) "),(be||q!==_zeroPx||G!==_zeroPx||Y!==_zeroPx)&&(Ce+=Y!==_zeroPx||be?"translate3d("+q+", "+G+", "+Y+") ":"translate("+q+", "+G+_endParenthesis),X!==_zeroDeg&&(Ce+="rotate("+X+_endParenthesis),ee!==_zeroDeg&&(Ce+="rotateY("+ee+_endParenthesis),re!==_zeroDeg&&(Ce+="rotateX("+re+_endParenthesis),(ie!==_zeroDeg||ae!==_zeroDeg)&&(Ce+="skew("+ie+", "+ae+_endParenthesis),(ce!==1||Ae!==1)&&(Ce+="scale("+ce+", "+Ae+_endParenthesis),Ie.style[_transformProp]=Ce||"translate(0, 0)"},_renderSVGTransforms=function F(b,Q){var D=Q||this,O=D.xPercent,U=D.yPercent,q=D.x,G=D.y,Y=D.rotation,X=D.skewX,ee=D.skewY,re=D.scaleX,ie=D.scaleY,ae=D.target,ce=D.xOrigin,Ae=D.yOrigin,ge=D.xOffset,Be=D.yOffset,Ie=D.forceCSS,_e=parseFloat(q),Ce=parseFloat(G),be,Qe,Se,Me,ke;Y=parseFloat(Y),X=parseFloat(X),ee=parseFloat(ee),ee&&(ee=parseFloat(ee),X+=ee,Y+=ee),Y||X?(Y*=_DEG2RAD,X*=_DEG2RAD,be=Math.cos(Y)*re,Qe=Math.sin(Y)*re,Se=Math.sin(Y-X)*-ie,Me=Math.cos(Y-X)*ie,X&&(ee*=_DEG2RAD,ke=Math.tan(X-ee),ke=Math.sqrt(1+ke*ke),Se*=ke,Me*=ke,ee&&(ke=Math.tan(ee),ke=Math.sqrt(1+ke*ke),be*=ke,Qe*=ke)),be=_round(be),Qe=_round(Qe),Se=_round(Se),Me=_round(Me)):(be=re,Me=ie,Qe=Se=0),(_e&&!~(q+"").indexOf("px")||Ce&&!~(G+"").indexOf("px"))&&(_e=_convertToUnit(ae,"x",q,"px"),Ce=_convertToUnit(ae,"y",G,"px")),(ce||Ae||ge||Be)&&(_e=_round(_e+ce-(ce*be+Ae*Se)+ge),Ce=_round(Ce+Ae-(ce*Qe+Ae*Me)+Be)),(O||U)&&(ke=ae.getBBox(),_e=_round(_e+O/100*ke.width),Ce=_round(Ce+U/100*ke.height)),ke="matrix("+be+","+Qe+","+Se+","+Me+","+_e+","+Ce+")",ae.setAttribute("transform",ke),Ie&&(ae.style[_transformProp]=ke)},_addRotationalPropTween=function F(b,Q,D,O,U){var q=360,G=_isString(U),Y=parseFloat(U)*(G&&~U.indexOf("rad")?_RAD2DEG:1),X=Y-O,ee=O+X+"deg",re,ie;return G&&(re=U.split("_")[1],re==="short"&&(X%=q,X!==X%(q/2)&&(X+=X<0?q:-q)),re==="cw"&&X<0?X=(X+q*_bigNum)%q-~~(X/q)*q:re==="ccw"&&X>0&&(X=(X-q*_bigNum)%q-~~(X/q)*q)),b._pt=ie=new PropTween(b._pt,Q,D,O,X,_renderPropWithEnd),ie.e=ee,ie.u="deg",b._props.push(D),ie},_assign=function F(b,Q){for(var D in Q)b[D]=Q[D];return b},_addRawTransformPTs=function F(b,Q,D){var O=_assign({},D._gsap),U="perspective,force3D,transformOrigin,svgOrigin",q=D.style,G,Y,X,ee,re,ie,ae,ce;O.svg?(X=D.getAttribute("transform"),D.setAttribute("transform",""),q[_transformProp]=Q,G=_parseTransform(D,1),_removeProperty(D,_transformProp),D.setAttribute("transform",X)):(X=getComputedStyle(D)[_transformProp],q[_transformProp]=Q,G=_parseTransform(D,1),q[_transformProp]=X);for(Y in _transformProps)X=O[Y],ee=G[Y],X!==ee&&U.indexOf(Y)<0&&(ae=getUnit(X),ce=getUnit(ee),re=ae!==ce?_convertToUnit(D,Y,X,ce):parseFloat(X),ie=parseFloat(ee),b._pt=new PropTween(b._pt,G,Y,re,ie-re,_renderCSSProp),b._pt.u=ce||0,b._props.push(Y));_assign(G,O)};_forEachName("padding,margin,Width,Radius",function(F,b){var Q="Top",D="Right",O="Bottom",U="Left",q=(b<3?[Q,D,O,U]:[Q+U,Q+D,O+D,O+U]).map(function(G){return b<2?F+G:"border"+G+F});_specialProps[b>1?"border"+F:F]=function(G,Y,X,ee,re){var ie,ae;if(arguments.length<4)return ie=q.map(function(ce){return _get(G,ce,X)}),ae=ie.join(" "),ae.split(ie[0]).length===5?ie[0]:ae;ie=(ee+"").split(" "),ae={},q.forEach(function(ce,Ae){return ae[ce]=ie[Ae]=ie[Ae]||ie[(Ae-1)/2|0]}),G.init(Y,ae,re)}});var CSSPlugin={name:"css",register:_initCore,targetTest:function F(b){return b.style&&b.nodeType},init:function F(b,Q,D,O,U){var q=this._props,G=b.style,Y=D.vars.startAt,X,ee,re,ie,ae,ce,Ae,ge,Be,Ie,_e,Ce,be,Qe,Se,Me;_pluginInitted||_initCore(),this.styles=this.styles||_getStyleSaver(b),Me=this.styles.props,this.tween=D;for(Ae in Q)if(Ae!=="autoRound"&&(ee=Q[Ae],!(_plugins[Ae]&&_checkPlugin(Ae,Q,D,O,b,U)))){if(ae=typeof ee,ce=_specialProps[Ae],ae==="function"&&(ee=ee.call(D,O,b,U),ae=typeof ee),ae==="string"&&~ee.indexOf("random(")&&(ee=_replaceRandom(ee)),ce)ce(this,b,Ae,ee,D)&&(Se=1);else if(Ae.substr(0,2)==="--")X=(getComputedStyle(b).getPropertyValue(Ae)+"").trim(),ee+="",_colorExp.lastIndex=0,_colorExp.test(X)||(ge=getUnit(X),Be=getUnit(ee)),Be?ge!==Be&&(X=_convertToUnit(b,Ae,X,Be)+Be):ge&&(ee+=ge),this.add(G,"setProperty",X,ee,O,U,0,0,Ae),q.push(Ae),Me.push(Ae,0,G[Ae]);else if(ae!=="undefined"){if(Y&&Ae in Y?(X=typeof Y[Ae]=="function"?Y[Ae].call(D,O,b,U):Y[Ae],_isString(X)&&~X.indexOf("random(")&&(X=_replaceRandom(X)),getUnit(X+"")||(X+=_config.units[Ae]||getUnit(_get(b,Ae))||""),(X+"").charAt(1)==="="&&(X=_get(b,Ae))):X=_get(b,Ae),ie=parseFloat(X),Ie=ae==="string"&&ee.charAt(1)==="="&&ee.substr(0,2),Ie&&(ee=ee.substr(2)),re=parseFloat(ee),Ae in _propertyAliases&&(Ae==="autoAlpha"&&(ie===1&&_get(b,"visibility")==="hidden"&&re&&(ie=0),Me.push("visibility",0,G.visibility),_addNonTweeningPT(this,G,"visibility",ie?"inherit":"hidden",re?"inherit":"hidden",!re)),Ae!=="scale"&&Ae!=="transform"&&(Ae=_propertyAliases[Ae],~Ae.indexOf(",")&&(Ae=Ae.split(",")[0]))),_e=Ae in _transformProps,_e){if(this.styles.save(Ae),Ce||(be=b._gsap,be.renderTransform&&!Q.parseTransform||_parseTransform(b,Q.parseTransform),Qe=Q.smoothOrigin!==!1&&be.smooth,Ce=this._pt=new PropTween(this._pt,G,_transformProp,0,1,be.renderTransform,be,0,-1),Ce.dep=1),Ae==="scale")this._pt=new PropTween(this._pt,be,"scaleY",be.scaleY,(Ie?_parseRelative(be.scaleY,Ie+re):re)-be.scaleY||0,_renderCSSProp),this._pt.u=0,q.push("scaleY",Ae),Ae+="X";else if(Ae==="transformOrigin"){Me.push(_transformOriginProp,0,G[_transformOriginProp]),ee=_convertKeywordsToPercentages(ee),be.svg?_applySVGOrigin(b,ee,0,Qe,0,this):(Be=parseFloat(ee.split(" ")[2])||0,Be!==be.zOrigin&&_addNonTweeningPT(this,be,"zOrigin",be.zOrigin,Be),_addNonTweeningPT(this,G,Ae,_firstTwoOnly(X),_firstTwoOnly(ee)));continue}else if(Ae==="svgOrigin"){_applySVGOrigin(b,ee,1,Qe,0,this);continue}else if(Ae in _rotationalProperties){_addRotationalPropTween(this,be,Ae,ie,Ie?_parseRelative(ie,Ie+ee):ee);continue}else if(Ae==="smoothOrigin"){_addNonTweeningPT(this,be,"smooth",be.smooth,ee);continue}else if(Ae==="force3D"){be[Ae]=ee;continue}else if(Ae==="transform"){_addRawTransformPTs(this,ee,b);continue}}else Ae in G||(Ae=_checkPropPrefix(Ae)||Ae);if(_e||(re||re===0)&&(ie||ie===0)&&!_complexExp.test(ee)&&Ae in G)ge=(X+"").substr((ie+"").length),re||(re=0),Be=getUnit(ee)||(Ae in _config.units?_config.units[Ae]:ge),ge!==Be&&(ie=_convertToUnit(b,Ae,X,Be)),this._pt=new PropTween(this._pt,_e?be:G,Ae,ie,(Ie?_parseRelative(ie,Ie+re):re)-ie,!_e&&(Be==="px"||Ae==="zIndex")&&Q.autoRound!==!1?_renderRoundedCSSProp:_renderCSSProp),this._pt.u=Be||0,ge!==Be&&Be!=="%"&&(this._pt.b=X,this._pt.r=_renderCSSPropWithBeginning);else if(Ae in G)_tweenComplexCSSString.call(this,b,Ae,X,Ie?Ie+ee:ee);else if(Ae in b)this.add(b,Ae,X||b[Ae],Ie?Ie+ee:ee,O,U);else if(Ae!=="parseTransform"){_missingPlugin(Ae,ee);continue}_e||(Ae in G?Me.push(Ae,0,G[Ae]):Me.push(Ae,1,X||b[Ae])),q.push(Ae)}}Se&&_sortPropTweensByPriority(this)},render:function F(b,Q){if(Q.tween._time||!_reverting())for(var D=Q._pt;D;)D.r(b,D.d),D=D._next;else Q.styles.revert()},get:_get,aliases:_propertyAliases,getSetter:function F(b,Q,D){var O=_propertyAliases[Q];return O&&O.indexOf(",")<0&&(Q=O),Q in _transformProps&&Q!==_transformOriginProp&&(b._gsap.x||_get(b,"x"))?D&&_recentSetterPlugin===D?Q==="scale"?_setterScale:_setterTransform:(_recentSetterPlugin=D||{})&&(Q==="scale"?_setterScaleWithRender:_setterTransformWithRender):b.style&&!_isUndefined(b.style[Q])?_setterCSSStyle:~Q.indexOf("-")?_setterCSSProp:_getSetter(b,Q)},core:{_removeProperty,_getMatrix}};gsap$1.utils.checkPrefix=_checkPropPrefix;gsap$1.core.getStyleSaver=_getStyleSaver;(function(F,b,Q,D){var O=_forEachName(F+","+b+","+Q,function(U){_transformProps[U]=1});_forEachName(b,function(U){_config.units[U]="deg",_rotationalProperties[U]=1}),_propertyAliases[O[13]]=F+","+b,_forEachName(D,function(U){var q=U.split(":");_propertyAliases[q[1]]=O[q[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(F){_config.units[F]="px"});gsap$1.registerPlugin(CSSPlugin);var gsapWithCSS=gsap$1.registerPlugin(CSSPlugin)||gsap$1;gsapWithCSS.core.Tween;const alphabet="abcdefghijklmnopqrstuvwxyz234567",lookupTable=Object.create(null);for(let F=0;F<alphabet.length;F++)lookupTable[alphabet[F]]=F;lookupTable[0]=lookupTable.o;lookupTable[1]=lookupTable.i;function encode$1(F){let b=0,Q=0,D="";function O(U){return b<0?Q|=U>>-b:Q=U<<b&248,b>3?(b-=8,1):(b<4&&(D+=alphabet[Q>>3],b+=5),0)}for(let U=0;U<F.length;)U+=O(F[U]);return D+(b<0?alphabet[Q>>3]:"")}function decode$1(F){let b=0,Q=0;const D=new Uint8Array(F.length*4/3|0);let O=0;function U(q){let G=lookupTable[q.toLowerCase()];if(G===void 0)throw new Error(`Invalid character: ${JSON.stringify(q)}`);G<<=3,Q|=G>>>b,b+=5,b>=8&&(D[O++]=Q,b-=8,b>0?Q=G<<5-b&255:Q=0)}for(const q of F)U(q);return D.slice(0,O)}const lookUpTable=new Uint32Array([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]);function getCrc32(F){const b=new Uint8Array(F);let Q=-1;for(let D=0;D<b.length;D++){const U=(b[D]^Q)&255;Q=lookUpTable[U]^Q>>>8}return(Q^-1)>>>0}var sha256={exports:{}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root={}:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer!="undefined",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(F){return Object.prototype.toString.call(F)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(F){return typeof F=="object"&&F.buffer&&F.buffer.constructor===ArrayBuffer});var createOutputMethod=function(F,b){return function(Q){return new Sha256(b,!0).update(Q)[F]()}},createMethod=function(F){var b=createOutputMethod("hex",F);NODE_JS&&(b=nodeWrap(b,F)),b.create=function(){return new Sha256(F)},b.update=function(O){return b.create().update(O)};for(var Q=0;Q<OUTPUT_TYPES.length;++Q){var D=OUTPUT_TYPES[Q];b[D]=createOutputMethod(D,F)}return b},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(F){if(typeof F=="string")return crypto.createHash(algorithm).update(F,"utf8").digest("hex");if(F==null)throw new Error(ERROR);return F.constructor===ArrayBuffer&&(F=new Uint8Array(F)),Array.isArray(F)||ArrayBuffer.isView(F)||F.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(F)).digest("hex"):method(F)};return nodeMethod},createHmacOutputMethod=function(F,b){return function(Q,D){return new HmacSha256(Q,b,!0).update(D)[F]()}},createHmacMethod=function(F){var b=createHmacOutputMethod("hex",F);b.create=function(O){return new HmacSha256(O,F)},b.update=function(O,U){return b.create(O).update(U)};for(var Q=0;Q<OUTPUT_TYPES.length;++Q){var D=OUTPUT_TYPES[Q];b[D]=createHmacOutputMethod(D,F)}return b};function Sha256(F,b){b?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],F?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=F}Sha256.prototype.update=function(F){if(!this.finalized){var b,Q=typeof F;if(Q!=="string"){if(Q==="object"){if(F===null)throw new Error(ERROR);if(ARRAY_BUFFER&&F.constructor===ArrayBuffer)F=new Uint8Array(F);else if(!Array.isArray(F)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(F)))throw new Error(ERROR)}else throw new Error(ERROR);b=!0}for(var D,O=0,U,q=F.length,G=this.blocks;O<q;){if(this.hashed&&(this.hashed=!1,G[0]=this.block,G[16]=G[1]=G[2]=G[3]=G[4]=G[5]=G[6]=G[7]=G[8]=G[9]=G[10]=G[11]=G[12]=G[13]=G[14]=G[15]=0),b)for(U=this.start;O<q&&U<64;++O)G[U>>2]|=F[O]<<SHIFT[U++&3];else for(U=this.start;O<q&&U<64;++O)D=F.charCodeAt(O),D<128?G[U>>2]|=D<<SHIFT[U++&3]:D<2048?(G[U>>2]|=(192|D>>6)<<SHIFT[U++&3],G[U>>2]|=(128|D&63)<<SHIFT[U++&3]):D<55296||D>=57344?(G[U>>2]|=(224|D>>12)<<SHIFT[U++&3],G[U>>2]|=(128|D>>6&63)<<SHIFT[U++&3],G[U>>2]|=(128|D&63)<<SHIFT[U++&3]):(D=65536+((D&1023)<<10|F.charCodeAt(++O)&1023),G[U>>2]|=(240|D>>18)<<SHIFT[U++&3],G[U>>2]|=(128|D>>12&63)<<SHIFT[U++&3],G[U>>2]|=(128|D>>6&63)<<SHIFT[U++&3],G[U>>2]|=(128|D&63)<<SHIFT[U++&3]);this.lastByteIndex=U,this.bytes+=U-this.start,U>=64?(this.block=G[16],this.start=U-64,this.hash(),this.hashed=!0):this.start=U}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var F=this.blocks,b=this.lastByteIndex;F[16]=this.block,F[b>>2]|=EXTRA[b&3],this.block=F[16],b>=56&&(this.hashed||this.hash(),F[0]=this.block,F[16]=F[1]=F[2]=F[3]=F[4]=F[5]=F[6]=F[7]=F[8]=F[9]=F[10]=F[11]=F[12]=F[13]=F[14]=F[15]=0),F[14]=this.hBytes<<3|this.bytes>>>29,F[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var F=this.h0,b=this.h1,Q=this.h2,D=this.h3,O=this.h4,U=this.h5,q=this.h6,G=this.h7,Y=this.blocks,X,ee,re,ie,ae,ce,Ae,ge,Be,Ie,_e;for(X=16;X<64;++X)ae=Y[X-15],ee=(ae>>>7|ae<<25)^(ae>>>18|ae<<14)^ae>>>3,ae=Y[X-2],re=(ae>>>17|ae<<15)^(ae>>>19|ae<<13)^ae>>>10,Y[X]=Y[X-16]+ee+Y[X-7]+re<<0;for(_e=b&Q,X=0;X<64;X+=4)this.first?(this.is224?(ge=300032,ae=Y[0]-1413257819,G=ae-150054599<<0,D=ae+24177077<<0):(ge=704751109,ae=Y[0]-210244248,G=ae-1521486534<<0,D=ae+143694565<<0),this.first=!1):(ee=(F>>>2|F<<30)^(F>>>13|F<<19)^(F>>>22|F<<10),re=(O>>>6|O<<26)^(O>>>11|O<<21)^(O>>>25|O<<7),ge=F&b,ie=ge^F&Q^_e,Ae=O&U^~O&q,ae=G+re+Ae+K[X]+Y[X],ce=ee+ie,G=D+ae<<0,D=ae+ce<<0),ee=(D>>>2|D<<30)^(D>>>13|D<<19)^(D>>>22|D<<10),re=(G>>>6|G<<26)^(G>>>11|G<<21)^(G>>>25|G<<7),Be=D&F,ie=Be^D&b^ge,Ae=G&O^~G&U,ae=q+re+Ae+K[X+1]+Y[X+1],ce=ee+ie,q=Q+ae<<0,Q=ae+ce<<0,ee=(Q>>>2|Q<<30)^(Q>>>13|Q<<19)^(Q>>>22|Q<<10),re=(q>>>6|q<<26)^(q>>>11|q<<21)^(q>>>25|q<<7),Ie=Q&D,ie=Ie^Q&F^Be,Ae=q&G^~q&O,ae=U+re+Ae+K[X+2]+Y[X+2],ce=ee+ie,U=b+ae<<0,b=ae+ce<<0,ee=(b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10),re=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),_e=b&Q,ie=_e^b&D^Ie,Ae=U&q^~U&G,ae=O+re+Ae+K[X+3]+Y[X+3],ce=ee+ie,O=F+ae<<0,F=ae+ce<<0;this.h0=this.h0+F<<0,this.h1=this.h1+b<<0,this.h2=this.h2+Q<<0,this.h3=this.h3+D<<0,this.h4=this.h4+O<<0,this.h5=this.h5+U<<0,this.h6=this.h6+q<<0,this.h7=this.h7+G<<0},Sha256.prototype.hex=function(){this.finalize();var F=this.h0,b=this.h1,Q=this.h2,D=this.h3,O=this.h4,U=this.h5,q=this.h6,G=this.h7,Y=HEX_CHARS[F>>28&15]+HEX_CHARS[F>>24&15]+HEX_CHARS[F>>20&15]+HEX_CHARS[F>>16&15]+HEX_CHARS[F>>12&15]+HEX_CHARS[F>>8&15]+HEX_CHARS[F>>4&15]+HEX_CHARS[F&15]+HEX_CHARS[b>>28&15]+HEX_CHARS[b>>24&15]+HEX_CHARS[b>>20&15]+HEX_CHARS[b>>16&15]+HEX_CHARS[b>>12&15]+HEX_CHARS[b>>8&15]+HEX_CHARS[b>>4&15]+HEX_CHARS[b&15]+HEX_CHARS[Q>>28&15]+HEX_CHARS[Q>>24&15]+HEX_CHARS[Q>>20&15]+HEX_CHARS[Q>>16&15]+HEX_CHARS[Q>>12&15]+HEX_CHARS[Q>>8&15]+HEX_CHARS[Q>>4&15]+HEX_CHARS[Q&15]+HEX_CHARS[D>>28&15]+HEX_CHARS[D>>24&15]+HEX_CHARS[D>>20&15]+HEX_CHARS[D>>16&15]+HEX_CHARS[D>>12&15]+HEX_CHARS[D>>8&15]+HEX_CHARS[D>>4&15]+HEX_CHARS[D&15]+HEX_CHARS[O>>28&15]+HEX_CHARS[O>>24&15]+HEX_CHARS[O>>20&15]+HEX_CHARS[O>>16&15]+HEX_CHARS[O>>12&15]+HEX_CHARS[O>>8&15]+HEX_CHARS[O>>4&15]+HEX_CHARS[O&15]+HEX_CHARS[U>>28&15]+HEX_CHARS[U>>24&15]+HEX_CHARS[U>>20&15]+HEX_CHARS[U>>16&15]+HEX_CHARS[U>>12&15]+HEX_CHARS[U>>8&15]+HEX_CHARS[U>>4&15]+HEX_CHARS[U&15]+HEX_CHARS[q>>28&15]+HEX_CHARS[q>>24&15]+HEX_CHARS[q>>20&15]+HEX_CHARS[q>>16&15]+HEX_CHARS[q>>12&15]+HEX_CHARS[q>>8&15]+HEX_CHARS[q>>4&15]+HEX_CHARS[q&15];return this.is224||(Y+=HEX_CHARS[G>>28&15]+HEX_CHARS[G>>24&15]+HEX_CHARS[G>>20&15]+HEX_CHARS[G>>16&15]+HEX_CHARS[G>>12&15]+HEX_CHARS[G>>8&15]+HEX_CHARS[G>>4&15]+HEX_CHARS[G&15]),Y},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var F=this.h0,b=this.h1,Q=this.h2,D=this.h3,O=this.h4,U=this.h5,q=this.h6,G=this.h7,Y=[F>>24&255,F>>16&255,F>>8&255,F&255,b>>24&255,b>>16&255,b>>8&255,b&255,Q>>24&255,Q>>16&255,Q>>8&255,Q&255,D>>24&255,D>>16&255,D>>8&255,D&255,O>>24&255,O>>16&255,O>>8&255,O&255,U>>24&255,U>>16&255,U>>8&255,U&255,q>>24&255,q>>16&255,q>>8&255,q&255];return this.is224||Y.push(G>>24&255,G>>16&255,G>>8&255,G&255),Y},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var F=new ArrayBuffer(this.is224?28:32),b=new DataView(F);return b.setUint32(0,this.h0),b.setUint32(4,this.h1),b.setUint32(8,this.h2),b.setUint32(12,this.h3),b.setUint32(16,this.h4),b.setUint32(20,this.h5),b.setUint32(24,this.h6),this.is224||b.setUint32(28,this.h7),F};function HmacSha256(F,b,Q){var D,O=typeof F;if(O==="string"){var U=[],q=F.length,G=0,Y;for(D=0;D<q;++D)Y=F.charCodeAt(D),Y<128?U[G++]=Y:Y<2048?(U[G++]=192|Y>>6,U[G++]=128|Y&63):Y<55296||Y>=57344?(U[G++]=224|Y>>12,U[G++]=128|Y>>6&63,U[G++]=128|Y&63):(Y=65536+((Y&1023)<<10|F.charCodeAt(++D)&1023),U[G++]=240|Y>>18,U[G++]=128|Y>>12&63,U[G++]=128|Y>>6&63,U[G++]=128|Y&63);F=U}else if(O==="object"){if(F===null)throw new Error(ERROR);if(ARRAY_BUFFER&&F.constructor===ArrayBuffer)F=new Uint8Array(F);else if(!Array.isArray(F)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(F)))throw new Error(ERROR)}else throw new Error(ERROR);F.length>64&&(F=new Sha256(b,!0).update(F).array());var X=[],ee=[];for(D=0;D<64;++D){var re=F[D]||0;X[D]=92^re,ee[D]=54^re}Sha256.call(this,b,Q),this.update(ee),this.oKeyPad=X,this.inner=!0,this.sharedMemory=Q}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var F=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(F),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256);function sha224(F){const b=sha256.exports.sha224.create();return b.update(F),new Uint8Array(b.array())}const SELF_AUTHENTICATING_SUFFIX=2,ANONYMOUS_SUFFIX=4,MANAGEMENT_CANISTER_PRINCIPAL_HEX_STR="aaaaa-aa",fromHexString=F=>{var b;return new Uint8Array(((b=F.match(/.{1,2}/g))!==null&&b!==void 0?b:[]).map(Q=>parseInt(Q,16)))},toHexString=F=>F.reduce((b,Q)=>b+Q.toString(16).padStart(2,"0"),"");class Principal{constructor(b){this._arr=b,this._isPrincipal=!0}static anonymous(){return new this(new Uint8Array([ANONYMOUS_SUFFIX]))}static managementCanister(){return this.fromHex(MANAGEMENT_CANISTER_PRINCIPAL_HEX_STR)}static selfAuthenticating(b){const Q=sha224(b);return new this(new Uint8Array([...Q,SELF_AUTHENTICATING_SUFFIX]))}static from(b){if(typeof b=="string")return Principal.fromText(b);if(typeof b=="object"&&b!==null&&b._isPrincipal===!0)return new Principal(b._arr);throw new Error(`Impossible to convert ${JSON.stringify(b)} to Principal.`)}static fromHex(b){return new this(fromHexString(b))}static fromText(b){const Q=b.toLowerCase().replace(/-/g,"");let D=decode$1(Q);D=D.slice(4,D.length);const O=new this(D);if(O.toText()!==b)throw new Error(`Principal "${O.toText()}" does not have a valid checksum (original value "${b}" may not be a valid Principal ID).`);return O}static fromUint8Array(b){return new this(b)}isAnonymous(){return this._arr.byteLength===1&&this._arr[0]===ANONYMOUS_SUFFIX}toUint8Array(){return this._arr}toHex(){return toHexString(this._arr).toUpperCase()}toText(){const b=new ArrayBuffer(4);new DataView(b).setUint32(0,getCrc32(this._arr));const D=new Uint8Array(b),O=Uint8Array.from(this._arr),U=new Uint8Array([...D,...O]),G=encode$1(U).match(/.{1,5}/g);if(!G)throw new Error;return G.join("-")}toString(){return this.toText()}compareTo(b){for(let Q=0;Q<Math.min(this._arr.length,b._arr.length);Q++){if(this._arr[Q]<b._arr[Q])return"lt";if(this._arr[Q]>b._arr[Q])return"gt"}return this._arr.length<b._arr.length?"lt":this._arr.length>b._arr.length?"gt":"eq"}ltEq(b){const Q=this.compareTo(b);return Q=="lt"||Q=="eq"}gtEq(b){const Q=this.compareTo(b);return Q=="gt"||Q=="eq"}}var buffer$1={},base64Js={};base64Js.byteLength=byteLength;base64Js.toByteArray=toByteArray;base64Js.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr=typeof Uint8Array!="undefined"?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;revLookup["-".charCodeAt(0)]=62;revLookup["_".charCodeAt(0)]=63;function getLens(F){var b=F.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var Q=F.indexOf("=");Q===-1&&(Q=b);var D=Q===b?0:4-Q%4;return[Q,D]}function byteLength(F){var b=getLens(F),Q=b[0],D=b[1];return(Q+D)*3/4-D}function _byteLength(F,b,Q){return(b+Q)*3/4-Q}function toByteArray(F){var b,Q=getLens(F),D=Q[0],O=Q[1],U=new Arr(_byteLength(F,D,O)),q=0,G=O>0?D-4:D,Y;for(Y=0;Y<G;Y+=4)b=revLookup[F.charCodeAt(Y)]<<18|revLookup[F.charCodeAt(Y+1)]<<12|revLookup[F.charCodeAt(Y+2)]<<6|revLookup[F.charCodeAt(Y+3)],U[q++]=b>>16&255,U[q++]=b>>8&255,U[q++]=b&255;return O===2&&(b=revLookup[F.charCodeAt(Y)]<<2|revLookup[F.charCodeAt(Y+1)]>>4,U[q++]=b&255),O===1&&(b=revLookup[F.charCodeAt(Y)]<<10|revLookup[F.charCodeAt(Y+1)]<<4|revLookup[F.charCodeAt(Y+2)]>>2,U[q++]=b>>8&255,U[q++]=b&255),U}function tripletToBase64(F){return lookup[F>>18&63]+lookup[F>>12&63]+lookup[F>>6&63]+lookup[F&63]}function encodeChunk(F,b,Q){for(var D,O=[],U=b;U<Q;U+=3)D=(F[U]<<16&16711680)+(F[U+1]<<8&65280)+(F[U+2]&255),O.push(tripletToBase64(D));return O.join("")}function fromByteArray(F){for(var b,Q=F.length,D=Q%3,O=[],U=16383,q=0,G=Q-D;q<G;q+=U)O.push(encodeChunk(F,q,q+U>G?G:q+U));return D===1?(b=F[Q-1],O.push(lookup[b>>2]+lookup[b<<4&63]+"==")):D===2&&(b=(F[Q-2]<<8)+F[Q-1],O.push(lookup[b>>10]+lookup[b>>4&63]+lookup[b<<2&63]+"=")),O.join("")}var ieee754$1={};ieee754$1.read=function(F,b,Q,D,O){var U,q,G=O*8-D-1,Y=(1<<G)-1,X=Y>>1,ee=-7,re=Q?O-1:0,ie=Q?-1:1,ae=F[b+re];for(re+=ie,U=ae&(1<<-ee)-1,ae>>=-ee,ee+=G;ee>0;U=U*256+F[b+re],re+=ie,ee-=8);for(q=U&(1<<-ee)-1,U>>=-ee,ee+=D;ee>0;q=q*256+F[b+re],re+=ie,ee-=8);if(U===0)U=1-X;else{if(U===Y)return q?NaN:(ae?-1:1)*(1/0);q=q+Math.pow(2,D),U=U-X}return(ae?-1:1)*q*Math.pow(2,U-D)};ieee754$1.write=function(F,b,Q,D,O,U){var q,G,Y,X=U*8-O-1,ee=(1<<X)-1,re=ee>>1,ie=O===23?Math.pow(2,-24)-Math.pow(2,-77):0,ae=D?0:U-1,ce=D?1:-1,Ae=b<0||b===0&&1/b<0?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(G=isNaN(b)?1:0,q=ee):(q=Math.floor(Math.log(b)/Math.LN2),b*(Y=Math.pow(2,-q))<1&&(q--,Y*=2),q+re>=1?b+=ie/Y:b+=ie*Math.pow(2,1-re),b*Y>=2&&(q++,Y/=2),q+re>=ee?(G=0,q=ee):q+re>=1?(G=(b*Y-1)*Math.pow(2,O),q=q+re):(G=b*Math.pow(2,re-1)*Math.pow(2,O),q=0));O>=8;F[Q+ae]=G&255,ae+=ce,G/=256,O-=8);for(q=q<<O|G,X+=O;X>0;F[Q+ae]=q&255,ae+=ce,q/=256,X-=8);F[Q+ae-ce]|=Ae*128};var toString$1={}.toString,isarray=Array.isArray||function(F){return toString$1.call(F)=="[object Array]"};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */(function(F){var b=base64Js,Q=ieee754$1,D=isarray;F.Buffer=G,F.SlowBuffer=Be,F.INSPECT_MAX_BYTES=50,G.TYPED_ARRAY_SUPPORT={}.TYPED_ARRAY_SUPPORT!==void 0?{}.TYPED_ARRAY_SUPPORT:O(),F.kMaxLength=U();function O(){try{var J=new Uint8Array(1);return J.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},J.foo()===42&&typeof J.subarray=="function"&&J.subarray(1,1).byteLength===0}catch{return!1}}function U(){return G.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function q(J,W){if(U()<W)throw new RangeError("Invalid typed array length");return G.TYPED_ARRAY_SUPPORT?(J=new Uint8Array(W),J.__proto__=G.prototype):(J===null&&(J=new G(W)),J.length=W),J}function G(J,W,Z){if(!G.TYPED_ARRAY_SUPPORT&&!(this instanceof G))return new G(J,W,Z);if(typeof J=="number"){if(typeof W=="string")throw new Error("If encoding is specified then the first argument must be a string");return re(this,J)}return Y(this,J,W,Z)}G.poolSize=8192,G._augment=function(J){return J.__proto__=G.prototype,J};function Y(J,W,Z,se){if(typeof W=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer!="undefined"&&W instanceof ArrayBuffer?ce(J,W,Z,se):typeof W=="string"?ie(J,W,Z):Ae(J,W)}G.from=function(J,W,Z){return Y(null,J,W,Z)},G.TYPED_ARRAY_SUPPORT&&(G.prototype.__proto__=Uint8Array.prototype,G.__proto__=Uint8Array,typeof Symbol!="undefined"&&Symbol.species&&G[Symbol.species]===G&&Object.defineProperty(G,Symbol.species,{value:null,configurable:!0}));function X(J){if(typeof J!="number")throw new TypeError('"size" argument must be a number');if(J<0)throw new RangeError('"size" argument must not be negative')}function ee(J,W,Z,se){return X(W),W<=0?q(J,W):Z!==void 0?typeof se=="string"?q(J,W).fill(Z,se):q(J,W).fill(Z):q(J,W)}G.alloc=function(J,W,Z){return ee(null,J,W,Z)};function re(J,W){if(X(W),J=q(J,W<0?0:ge(W)|0),!G.TYPED_ARRAY_SUPPORT)for(var Z=0;Z<W;++Z)J[Z]=0;return J}G.allocUnsafe=function(J){return re(null,J)},G.allocUnsafeSlow=function(J){return re(null,J)};function ie(J,W,Z){if((typeof Z!="string"||Z==="")&&(Z="utf8"),!G.isEncoding(Z))throw new TypeError('"encoding" must be a valid string encoding');var se=Ie(W,Z)|0;J=q(J,se);var ue=J.write(W,Z);return ue!==se&&(J=J.slice(0,ue)),J}function ae(J,W){var Z=W.length<0?0:ge(W.length)|0;J=q(J,Z);for(var se=0;se<Z;se+=1)J[se]=W[se]&255;return J}function ce(J,W,Z,se){if(W.byteLength,Z<0||W.byteLength<Z)throw new RangeError("'offset' is out of bounds");if(W.byteLength<Z+(se||0))throw new RangeError("'length' is out of bounds");return Z===void 0&&se===void 0?W=new Uint8Array(W):se===void 0?W=new Uint8Array(W,Z):W=new Uint8Array(W,Z,se),G.TYPED_ARRAY_SUPPORT?(J=W,J.__proto__=G.prototype):J=ae(J,W),J}function Ae(J,W){if(G.isBuffer(W)){var Z=ge(W.length)|0;return J=q(J,Z),J.length===0||W.copy(J,0,0,Z),J}if(W){if(typeof ArrayBuffer!="undefined"&&W.buffer instanceof ArrayBuffer||"length"in W)return typeof W.length!="number"||te(W.length)?q(J,0):ae(J,W);if(W.type==="Buffer"&&D(W.data))return ae(J,W.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function ge(J){if(J>=U())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+U().toString(16)+" bytes");return J|0}function Be(J){return+J!=J&&(J=0),G.alloc(+J)}G.isBuffer=function(W){return!!(W!=null&&W._isBuffer)},G.compare=function(W,Z){if(!G.isBuffer(W)||!G.isBuffer(Z))throw new TypeError("Arguments must be Buffers");if(W===Z)return 0;for(var se=W.length,ue=Z.length,Ee=0,we=Math.min(se,ue);Ee<we;++Ee)if(W[Ee]!==Z[Ee]){se=W[Ee],ue=Z[Ee];break}return se<ue?-1:ue<se?1:0},G.isEncoding=function(W){switch(String(W).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},G.concat=function(W,Z){if(!D(W))throw new TypeError('"list" argument must be an Array of Buffers');if(W.length===0)return G.alloc(0);var se;if(Z===void 0)for(Z=0,se=0;se<W.length;++se)Z+=W[se].length;var ue=G.allocUnsafe(Z),Ee=0;for(se=0;se<W.length;++se){var we=W[se];if(!G.isBuffer(we))throw new TypeError('"list" argument must be an Array of Buffers');we.copy(ue,Ee),Ee+=we.length}return ue};function Ie(J,W){if(G.isBuffer(J))return J.length;if(typeof ArrayBuffer!="undefined"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(J)||J instanceof ArrayBuffer))return J.byteLength;typeof J!="string"&&(J=""+J);var Z=J.length;if(Z===0)return 0;for(var se=!1;;)switch(W){case"ascii":case"latin1":case"binary":return Z;case"utf8":case"utf-8":case void 0:return he(J).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Z*2;case"hex":return Z>>>1;case"base64":return me(J).length;default:if(se)return he(J).length;W=(""+W).toLowerCase(),se=!0}}G.byteLength=Ie;function _e(J,W,Z){var se=!1;if((W===void 0||W<0)&&(W=0),W>this.length||((Z===void 0||Z>this.length)&&(Z=this.length),Z<=0)||(Z>>>=0,W>>>=0,Z<=W))return"";for(J||(J="utf8");;)switch(J){case"hex":return $e(this,W,Z);case"utf8":case"utf-8":return Ve(this,W,Z);case"ascii":return xe(this,W,Z);case"latin1":case"binary":return Ne(this,W,Z);case"base64":return Ge(this,W,Z);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Le(this,W,Z);default:if(se)throw new TypeError("Unknown encoding: "+J);J=(J+"").toLowerCase(),se=!0}}G.prototype._isBuffer=!0;function Ce(J,W,Z){var se=J[W];J[W]=J[Z],J[Z]=se}G.prototype.swap16=function(){var W=this.length;if(W%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var Z=0;Z<W;Z+=2)Ce(this,Z,Z+1);return this},G.prototype.swap32=function(){var W=this.length;if(W%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var Z=0;Z<W;Z+=4)Ce(this,Z,Z+3),Ce(this,Z+1,Z+2);return this},G.prototype.swap64=function(){var W=this.length;if(W%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var Z=0;Z<W;Z+=8)Ce(this,Z,Z+7),Ce(this,Z+1,Z+6),Ce(this,Z+2,Z+5),Ce(this,Z+3,Z+4);return this},G.prototype.toString=function(){var W=this.length|0;return W===0?"":arguments.length===0?Ve(this,0,W):_e.apply(this,arguments)},G.prototype.equals=function(W){if(!G.isBuffer(W))throw new TypeError("Argument must be a Buffer");return this===W?!0:G.compare(this,W)===0},G.prototype.inspect=function(){var W="",Z=F.INSPECT_MAX_BYTES;return this.length>0&&(W=this.toString("hex",0,Z).match(/.{2}/g).join(" "),this.length>Z&&(W+=" ... ")),"<Buffer "+W+">"},G.prototype.compare=function(W,Z,se,ue,Ee){if(!G.isBuffer(W))throw new TypeError("Argument must be a Buffer");if(Z===void 0&&(Z=0),se===void 0&&(se=W?W.length:0),ue===void 0&&(ue=0),Ee===void 0&&(Ee=this.length),Z<0||se>W.length||ue<0||Ee>this.length)throw new RangeError("out of range index");if(ue>=Ee&&Z>=se)return 0;if(ue>=Ee)return-1;if(Z>=se)return 1;if(Z>>>=0,se>>>=0,ue>>>=0,Ee>>>=0,this===W)return 0;for(var we=Ee-ue,Oe=se-Z,qe=Math.min(we,Oe),Re=this.slice(ue,Ee),Je=W.slice(Z,se),ze=0;ze<qe;++ze)if(Re[ze]!==Je[ze]){we=Re[ze],Oe=Je[ze];break}return we<Oe?-1:Oe<we?1:0};function be(J,W,Z,se,ue){if(J.length===0)return-1;if(typeof Z=="string"?(se=Z,Z=0):Z>2147483647?Z=2147483647:Z<-2147483648&&(Z=-2147483648),Z=+Z,isNaN(Z)&&(Z=ue?0:J.length-1),Z<0&&(Z=J.length+Z),Z>=J.length){if(ue)return-1;Z=J.length-1}else if(Z<0)if(ue)Z=0;else return-1;if(typeof W=="string"&&(W=G.from(W,se)),G.isBuffer(W))return W.length===0?-1:Qe(J,W,Z,se,ue);if(typeof W=="number")return W=W&255,G.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?ue?Uint8Array.prototype.indexOf.call(J,W,Z):Uint8Array.prototype.lastIndexOf.call(J,W,Z):Qe(J,[W],Z,se,ue);throw new TypeError("val must be string, number or Buffer")}function Qe(J,W,Z,se,ue){var Ee=1,we=J.length,Oe=W.length;if(se!==void 0&&(se=String(se).toLowerCase(),se==="ucs2"||se==="ucs-2"||se==="utf16le"||se==="utf-16le")){if(J.length<2||W.length<2)return-1;Ee=2,we/=2,Oe/=2,Z/=2}function qe(ht,gt){return Ee===1?ht[gt]:ht.readUInt16BE(gt*Ee)}var Re;if(ue){var Je=-1;for(Re=Z;Re<we;Re++)if(qe(J,Re)===qe(W,Je===-1?0:Re-Je)){if(Je===-1&&(Je=Re),Re-Je+1===Oe)return Je*Ee}else Je!==-1&&(Re-=Re-Je),Je=-1}else for(Z+Oe>we&&(Z=we-Oe),Re=Z;Re>=0;Re--){for(var ze=!0,ct=0;ct<Oe;ct++)if(qe(J,Re+ct)!==qe(W,ct)){ze=!1;break}if(ze)return Re}return-1}G.prototype.includes=function(W,Z,se){return this.indexOf(W,Z,se)!==-1},G.prototype.indexOf=function(W,Z,se){return be(this,W,Z,se,!0)},G.prototype.lastIndexOf=function(W,Z,se){return be(this,W,Z,se,!1)};function Se(J,W,Z,se){Z=Number(Z)||0;var ue=J.length-Z;se?(se=Number(se),se>ue&&(se=ue)):se=ue;var Ee=W.length;if(Ee%2!==0)throw new TypeError("Invalid hex string");se>Ee/2&&(se=Ee/2);for(var we=0;we<se;++we){var Oe=parseInt(W.substr(we*2,2),16);if(isNaN(Oe))return we;J[Z+we]=Oe}return we}function Me(J,W,Z,se){return ne(he(W,J.length-Z),J,Z,se)}function ke(J,W,Z,se){return ne(ye(W),J,Z,se)}function Fe(J,W,Z,se){return ke(J,W,Z,se)}function Ue(J,W,Z,se){return ne(me(W),J,Z,se)}function Ye(J,W,Z,se){return ne(pe(W,J.length-Z),J,Z,se)}G.prototype.write=function(W,Z,se,ue){if(Z===void 0)ue="utf8",se=this.length,Z=0;else if(se===void 0&&typeof Z=="string")ue=Z,se=this.length,Z=0;else if(isFinite(Z))Z=Z|0,isFinite(se)?(se=se|0,ue===void 0&&(ue="utf8")):(ue=se,se=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var Ee=this.length-Z;if((se===void 0||se>Ee)&&(se=Ee),W.length>0&&(se<0||Z<0)||Z>this.length)throw new RangeError("Attempt to write outside buffer bounds");ue||(ue="utf8");for(var we=!1;;)switch(ue){case"hex":return Se(this,W,Z,se);case"utf8":case"utf-8":return Me(this,W,Z,se);case"ascii":return ke(this,W,Z,se);case"latin1":case"binary":return Fe(this,W,Z,se);case"base64":return Ue(this,W,Z,se);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ye(this,W,Z,se);default:if(we)throw new TypeError("Unknown encoding: "+ue);ue=(""+ue).toLowerCase(),we=!0}},G.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ge(J,W,Z){return W===0&&Z===J.length?b.fromByteArray(J):b.fromByteArray(J.slice(W,Z))}function Ve(J,W,Z){Z=Math.min(J.length,Z);for(var se=[],ue=W;ue<Z;){var Ee=J[ue],we=null,Oe=Ee>239?4:Ee>223?3:Ee>191?2:1;if(ue+Oe<=Z){var qe,Re,Je,ze;switch(Oe){case 1:Ee<128&&(we=Ee);break;case 2:qe=J[ue+1],(qe&192)===128&&(ze=(Ee&31)<<6|qe&63,ze>127&&(we=ze));break;case 3:qe=J[ue+1],Re=J[ue+2],(qe&192)===128&&(Re&192)===128&&(ze=(Ee&15)<<12|(qe&63)<<6|Re&63,ze>2047&&(ze<55296||ze>57343)&&(we=ze));break;case 4:qe=J[ue+1],Re=J[ue+2],Je=J[ue+3],(qe&192)===128&&(Re&192)===128&&(Je&192)===128&&(ze=(Ee&15)<<18|(qe&63)<<12|(Re&63)<<6|Je&63,ze>65535&&ze<1114112&&(we=ze))}}we===null?(we=65533,Oe=1):we>65535&&(we-=65536,se.push(we>>>10&1023|55296),we=56320|we&1023),se.push(we),ue+=Oe}return De(se)}var Te=4096;function De(J){var W=J.length;if(W<=Te)return String.fromCharCode.apply(String,J);for(var Z="",se=0;se<W;)Z+=String.fromCharCode.apply(String,J.slice(se,se+=Te));return Z}function xe(J,W,Z){var se="";Z=Math.min(J.length,Z);for(var ue=W;ue<Z;++ue)se+=String.fromCharCode(J[ue]&127);return se}function Ne(J,W,Z){var se="";Z=Math.min(J.length,Z);for(var ue=W;ue<Z;++ue)se+=String.fromCharCode(J[ue]);return se}function $e(J,W,Z){var se=J.length;(!W||W<0)&&(W=0),(!Z||Z<0||Z>se)&&(Z=se);for(var ue="",Ee=W;Ee<Z;++Ee)ue+=oe(J[Ee]);return ue}function Le(J,W,Z){for(var se=J.slice(W,Z),ue="",Ee=0;Ee<se.length;Ee+=2)ue+=String.fromCharCode(se[Ee]+se[Ee+1]*256);return ue}G.prototype.slice=function(W,Z){var se=this.length;W=~~W,Z=Z===void 0?se:~~Z,W<0?(W+=se,W<0&&(W=0)):W>se&&(W=se),Z<0?(Z+=se,Z<0&&(Z=0)):Z>se&&(Z=se),Z<W&&(Z=W);var ue;if(G.TYPED_ARRAY_SUPPORT)ue=this.subarray(W,Z),ue.__proto__=G.prototype;else{var Ee=Z-W;ue=new G(Ee,void 0);for(var we=0;we<Ee;++we)ue[we]=this[we+W]}return ue};function Pe(J,W,Z){if(J%1!==0||J<0)throw new RangeError("offset is not uint");if(J+W>Z)throw new RangeError("Trying to access beyond buffer length")}G.prototype.readUIntLE=function(W,Z,se){W=W|0,Z=Z|0,se||Pe(W,Z,this.length);for(var ue=this[W],Ee=1,we=0;++we<Z&&(Ee*=256);)ue+=this[W+we]*Ee;return ue},G.prototype.readUIntBE=function(W,Z,se){W=W|0,Z=Z|0,se||Pe(W,Z,this.length);for(var ue=this[W+--Z],Ee=1;Z>0&&(Ee*=256);)ue+=this[W+--Z]*Ee;return ue},G.prototype.readUInt8=function(W,Z){return Z||Pe(W,1,this.length),this[W]},G.prototype.readUInt16LE=function(W,Z){return Z||Pe(W,2,this.length),this[W]|this[W+1]<<8},G.prototype.readUInt16BE=function(W,Z){return Z||Pe(W,2,this.length),this[W]<<8|this[W+1]},G.prototype.readUInt32LE=function(W,Z){return Z||Pe(W,4,this.length),(this[W]|this[W+1]<<8|this[W+2]<<16)+this[W+3]*16777216},G.prototype.readUInt32BE=function(W,Z){return Z||Pe(W,4,this.length),this[W]*16777216+(this[W+1]<<16|this[W+2]<<8|this[W+3])},G.prototype.readIntLE=function(W,Z,se){W=W|0,Z=Z|0,se||Pe(W,Z,this.length);for(var ue=this[W],Ee=1,we=0;++we<Z&&(Ee*=256);)ue+=this[W+we]*Ee;return Ee*=128,ue>=Ee&&(ue-=Math.pow(2,8*Z)),ue},G.prototype.readIntBE=function(W,Z,se){W=W|0,Z=Z|0,se||Pe(W,Z,this.length);for(var ue=Z,Ee=1,we=this[W+--ue];ue>0&&(Ee*=256);)we+=this[W+--ue]*Ee;return Ee*=128,we>=Ee&&(we-=Math.pow(2,8*Z)),we},G.prototype.readInt8=function(W,Z){return Z||Pe(W,1,this.length),this[W]&128?(255-this[W]+1)*-1:this[W]},G.prototype.readInt16LE=function(W,Z){Z||Pe(W,2,this.length);var se=this[W]|this[W+1]<<8;return se&32768?se|4294901760:se},G.prototype.readInt16BE=function(W,Z){Z||Pe(W,2,this.length);var se=this[W+1]|this[W]<<8;return se&32768?se|4294901760:se},G.prototype.readInt32LE=function(W,Z){return Z||Pe(W,4,this.length),this[W]|this[W+1]<<8|this[W+2]<<16|this[W+3]<<24},G.prototype.readInt32BE=function(W,Z){return Z||Pe(W,4,this.length),this[W]<<24|this[W+1]<<16|this[W+2]<<8|this[W+3]},G.prototype.readFloatLE=function(W,Z){return Z||Pe(W,4,this.length),Q.read(this,W,!0,23,4)},G.prototype.readFloatBE=function(W,Z){return Z||Pe(W,4,this.length),Q.read(this,W,!1,23,4)},G.prototype.readDoubleLE=function(W,Z){return Z||Pe(W,8,this.length),Q.read(this,W,!0,52,8)},G.prototype.readDoubleBE=function(W,Z){return Z||Pe(W,8,this.length),Q.read(this,W,!1,52,8)};function He(J,W,Z,se,ue,Ee){if(!G.isBuffer(J))throw new TypeError('"buffer" argument must be a Buffer instance');if(W>ue||W<Ee)throw new RangeError('"value" argument is out of bounds');if(Z+se>J.length)throw new RangeError("Index out of range")}G.prototype.writeUIntLE=function(W,Z,se,ue){if(W=+W,Z=Z|0,se=se|0,!ue){var Ee=Math.pow(2,8*se)-1;He(this,W,Z,se,Ee,0)}var we=1,Oe=0;for(this[Z]=W&255;++Oe<se&&(we*=256);)this[Z+Oe]=W/we&255;return Z+se},G.prototype.writeUIntBE=function(W,Z,se,ue){if(W=+W,Z=Z|0,se=se|0,!ue){var Ee=Math.pow(2,8*se)-1;He(this,W,Z,se,Ee,0)}var we=se-1,Oe=1;for(this[Z+we]=W&255;--we>=0&&(Oe*=256);)this[Z+we]=W/Oe&255;return Z+se},G.prototype.writeUInt8=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,1,255,0),G.TYPED_ARRAY_SUPPORT||(W=Math.floor(W)),this[Z]=W&255,Z+1};function et(J,W,Z,se){W<0&&(W=65535+W+1);for(var ue=0,Ee=Math.min(J.length-Z,2);ue<Ee;++ue)J[Z+ue]=(W&255<<8*(se?ue:1-ue))>>>(se?ue:1-ue)*8}G.prototype.writeUInt16LE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,2,65535,0),G.TYPED_ARRAY_SUPPORT?(this[Z]=W&255,this[Z+1]=W>>>8):et(this,W,Z,!0),Z+2},G.prototype.writeUInt16BE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,2,65535,0),G.TYPED_ARRAY_SUPPORT?(this[Z]=W>>>8,this[Z+1]=W&255):et(this,W,Z,!1),Z+2};function de(J,W,Z,se){W<0&&(W=4294967295+W+1);for(var ue=0,Ee=Math.min(J.length-Z,4);ue<Ee;++ue)J[Z+ue]=W>>>(se?ue:3-ue)*8&255}G.prototype.writeUInt32LE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,4,4294967295,0),G.TYPED_ARRAY_SUPPORT?(this[Z+3]=W>>>24,this[Z+2]=W>>>16,this[Z+1]=W>>>8,this[Z]=W&255):de(this,W,Z,!0),Z+4},G.prototype.writeUInt32BE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,4,4294967295,0),G.TYPED_ARRAY_SUPPORT?(this[Z]=W>>>24,this[Z+1]=W>>>16,this[Z+2]=W>>>8,this[Z+3]=W&255):de(this,W,Z,!1),Z+4},G.prototype.writeIntLE=function(W,Z,se,ue){if(W=+W,Z=Z|0,!ue){var Ee=Math.pow(2,8*se-1);He(this,W,Z,se,Ee-1,-Ee)}var we=0,Oe=1,qe=0;for(this[Z]=W&255;++we<se&&(Oe*=256);)W<0&&qe===0&&this[Z+we-1]!==0&&(qe=1),this[Z+we]=(W/Oe>>0)-qe&255;return Z+se},G.prototype.writeIntBE=function(W,Z,se,ue){if(W=+W,Z=Z|0,!ue){var Ee=Math.pow(2,8*se-1);He(this,W,Z,se,Ee-1,-Ee)}var we=se-1,Oe=1,qe=0;for(this[Z+we]=W&255;--we>=0&&(Oe*=256);)W<0&&qe===0&&this[Z+we+1]!==0&&(qe=1),this[Z+we]=(W/Oe>>0)-qe&255;return Z+se},G.prototype.writeInt8=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,1,127,-128),G.TYPED_ARRAY_SUPPORT||(W=Math.floor(W)),W<0&&(W=255+W+1),this[Z]=W&255,Z+1},G.prototype.writeInt16LE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,2,32767,-32768),G.TYPED_ARRAY_SUPPORT?(this[Z]=W&255,this[Z+1]=W>>>8):et(this,W,Z,!0),Z+2},G.prototype.writeInt16BE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,2,32767,-32768),G.TYPED_ARRAY_SUPPORT?(this[Z]=W>>>8,this[Z+1]=W&255):et(this,W,Z,!1),Z+2},G.prototype.writeInt32LE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,4,2147483647,-2147483648),G.TYPED_ARRAY_SUPPORT?(this[Z]=W&255,this[Z+1]=W>>>8,this[Z+2]=W>>>16,this[Z+3]=W>>>24):de(this,W,Z,!0),Z+4},G.prototype.writeInt32BE=function(W,Z,se){return W=+W,Z=Z|0,se||He(this,W,Z,4,2147483647,-2147483648),W<0&&(W=4294967295+W+1),G.TYPED_ARRAY_SUPPORT?(this[Z]=W>>>24,this[Z+1]=W>>>16,this[Z+2]=W>>>8,this[Z+3]=W&255):de(this,W,Z,!1),Z+4};function tt(J,W,Z,se,ue,Ee){if(Z+se>J.length)throw new RangeError("Index out of range");if(Z<0)throw new RangeError("Index out of range")}function at(J,W,Z,se,ue){return ue||tt(J,W,Z,4),Q.write(J,W,Z,se,23,4),Z+4}G.prototype.writeFloatLE=function(W,Z,se){return at(this,W,Z,!0,se)},G.prototype.writeFloatBE=function(W,Z,se){return at(this,W,Z,!1,se)};function dt(J,W,Z,se,ue){return ue||tt(J,W,Z,8),Q.write(J,W,Z,se,52,8),Z+8}G.prototype.writeDoubleLE=function(W,Z,se){return dt(this,W,Z,!0,se)},G.prototype.writeDoubleBE=function(W,Z,se){return dt(this,W,Z,!1,se)},G.prototype.copy=function(W,Z,se,ue){if(se||(se=0),!ue&&ue!==0&&(ue=this.length),Z>=W.length&&(Z=W.length),Z||(Z=0),ue>0&&ue<se&&(ue=se),ue===se||W.length===0||this.length===0)return 0;if(Z<0)throw new RangeError("targetStart out of bounds");if(se<0||se>=this.length)throw new RangeError("sourceStart out of bounds");if(ue<0)throw new RangeError("sourceEnd out of bounds");ue>this.length&&(ue=this.length),W.length-Z<ue-se&&(ue=W.length-Z+se);var Ee=ue-se,we;if(this===W&&se<Z&&Z<ue)for(we=Ee-1;we>=0;--we)W[we+Z]=this[we+se];else if(Ee<1e3||!G.TYPED_ARRAY_SUPPORT)for(we=0;we<Ee;++we)W[we+Z]=this[we+se];else Uint8Array.prototype.set.call(W,this.subarray(se,se+Ee),Z);return Ee},G.prototype.fill=function(W,Z,se,ue){if(typeof W=="string"){if(typeof Z=="string"?(ue=Z,Z=0,se=this.length):typeof se=="string"&&(ue=se,se=this.length),W.length===1){var Ee=W.charCodeAt(0);Ee<256&&(W=Ee)}if(ue!==void 0&&typeof ue!="string")throw new TypeError("encoding must be a string");if(typeof ue=="string"&&!G.isEncoding(ue))throw new TypeError("Unknown encoding: "+ue)}else typeof W=="number"&&(W=W&255);if(Z<0||this.length<Z||this.length<se)throw new RangeError("Out of range index");if(se<=Z)return this;Z=Z>>>0,se=se===void 0?this.length:se>>>0,W||(W=0);var we;if(typeof W=="number")for(we=Z;we<se;++we)this[we]=W;else{var Oe=G.isBuffer(W)?W:he(new G(W,ue).toString()),qe=Oe.length;for(we=0;we<se-Z;++we)this[we+Z]=Oe[we%qe]}return this};var je=/[^+\/0-9A-Za-z-_]/g;function ve(J){if(J=le(J).replace(je,""),J.length<2)return"";for(;J.length%4!==0;)J=J+"=";return J}function le(J){return J.trim?J.trim():J.replace(/^\s+|\s+$/g,"")}function oe(J){return J<16?"0"+J.toString(16):J.toString(16)}function he(J,W){W=W||1/0;for(var Z,se=J.length,ue=null,Ee=[],we=0;we<se;++we){if(Z=J.charCodeAt(we),Z>55295&&Z<57344){if(!ue){if(Z>56319){(W-=3)>-1&&Ee.push(239,191,189);continue}else if(we+1===se){(W-=3)>-1&&Ee.push(239,191,189);continue}ue=Z;continue}if(Z<56320){(W-=3)>-1&&Ee.push(239,191,189),ue=Z;continue}Z=(ue-55296<<10|Z-56320)+65536}else ue&&(W-=3)>-1&&Ee.push(239,191,189);if(ue=null,Z<128){if((W-=1)<0)break;Ee.push(Z)}else if(Z<2048){if((W-=2)<0)break;Ee.push(Z>>6|192,Z&63|128)}else if(Z<65536){if((W-=3)<0)break;Ee.push(Z>>12|224,Z>>6&63|128,Z&63|128)}else if(Z<1114112){if((W-=4)<0)break;Ee.push(Z>>18|240,Z>>12&63|128,Z>>6&63|128,Z&63|128)}else throw new Error("Invalid code point")}return Ee}function ye(J){for(var W=[],Z=0;Z<J.length;++Z)W.push(J.charCodeAt(Z)&255);return W}function pe(J,W){for(var Z,se,ue,Ee=[],we=0;we<J.length&&!((W-=2)<0);++we)Z=J.charCodeAt(we),se=Z>>8,ue=Z%256,Ee.push(ue),Ee.push(se);return Ee}function me(J){return b.toByteArray(ve(J))}function ne(J,W,Z,se){for(var ue=0;ue<se&&!(ue+Z>=W.length||ue>=J.length);++ue)W[ue+Z]=J[ue];return ue}function te(J){return J!==J}})(buffer$1);var ReplicaRejectCode;(function(F){F[F.SysFatal=1]="SysFatal",F[F.SysTransient=2]="SysTransient",F[F.DestinationInvalid=3]="DestinationInvalid",F[F.CanisterReject=4]="CanisterReject",F[F.CanisterError=5]="CanisterError"})(ReplicaRejectCode||(ReplicaRejectCode={}));class PipeArrayBuffer{constructor(b,Q=(b==null?void 0:b.byteLength)||0){this._buffer=b||new ArrayBuffer(0),this._view=new Uint8Array(this._buffer,0,Q)}get buffer(){return this._view.slice()}get byteLength(){return this._view.byteLength}read(b){const Q=this._view.subarray(0,b);return this._view=this._view.subarray(b),Q.slice().buffer}readUint8(){const b=this._view[0];return this._view=this._view.subarray(1),b}write(b){const Q=new Uint8Array(b),D=this._view.byteLength;this._view.byteOffset+this._view.byteLength+Q.byteLength>=this._buffer.byteLength?this.alloc(Q.byteLength):this._view=new Uint8Array(this._buffer,this._view.byteOffset,this._view.byteLength+Q.byteLength),this._view.set(Q,D)}get end(){return this._view.byteLength===0}alloc(b){const Q=new ArrayBuffer((this._buffer.byteLength+b)*1.2|0),D=new Uint8Array(Q,0,this._view.byteLength+b);D.set(this._view),this._buffer=Q,this._view=D}}function eob(){throw new Error("unexpected end of buffer")}function safeRead(F,b){return F.byteLength<b&&eob(),F.read(b)}function safeReadUint8(F){const b=F.readUint8();return b===void 0&&eob(),b}function slebEncode(F){typeof F=="number"&&(F=BigInt(F));const b=F<BigInt(0);b&&(F=-F-BigInt(1));const Q=(F===BigInt(0)?0:Math.ceil(Math.log2(Number(F))))+1,D=new PipeArrayBuffer(new ArrayBuffer(Q),0);for(;;){const U=O(F);if(F/=BigInt(128),b&&F===BigInt(0)&&(U&64)!==0||!b&&F===BigInt(0)&&(U&64)===0){D.write(new Uint8Array([U]));break}else D.write(new Uint8Array([U|128]))}function O(U){const q=U%BigInt(128);return Number(b?BigInt(128)-q-BigInt(1):q)}return D.buffer}function writeUIntLE(F,b){if(BigInt(F)<BigInt(0))throw new Error("Cannot write negative values.");return writeIntLE(F,b)}function writeIntLE(F,b){F=BigInt(F);const Q=new PipeArrayBuffer(new ArrayBuffer(Math.min(1,b)),0);let D=0,O=BigInt(256),U=BigInt(0),q=Number(F%O);for(Q.write(new Uint8Array([q]));++D<b;)F<0&&U===BigInt(0)&&q!==0&&(U=BigInt(1)),q=Number((F/O-U)%BigInt(256)),Q.write(new Uint8Array([q])),O*=BigInt(256);return Q.buffer}function readUIntLE(F,b){let Q=BigInt(safeReadUint8(F)),D=BigInt(1),O=0;for(;++O<b;){D*=BigInt(256);const U=BigInt(safeReadUint8(F));Q=Q+D*U}return Q}function readIntLE(F,b){let Q=readUIntLE(F,b);const D=BigInt(2)**(BigInt(8)*BigInt(b-1)+BigInt(7));return Q>=D&&(Q-=D*BigInt(2)),Q}function iexp2(F){const b=BigInt(F);if(F<0)throw new RangeError("Input must be non-negative");return BigInt(1)<<b}class Type{display(){return this.name}valueToString(b){return toReadableString(b)}buildTypeTable(b){b.has(this)||this._buildTypeTableImpl(b)}}class PrimitiveType extends Type{checkType(b){if(this.name!==b.name)throw new Error(`type mismatch: type on the wire ${b.name}, expect type ${this.name}`);return b}_buildTypeTableImpl(b){}}class ConstructType extends Type{checkType(b){if(b instanceof RecClass){const Q=b.getType();if(typeof Q=="undefined")throw new Error("type mismatch with uninitialized type");return Q}throw new Error(`type mismatch: type on the wire ${b.name}, expect type ${this.name}`)}encodeType(b){return b.indexOf(this.name)}}class FloatClass extends PrimitiveType{constructor(b){if(super(),this._bits=b,b!==32&&b!==64)throw new Error("not a valid float type")}accept(b,Q){return b.visitFloat(this,Q)}covariant(b){return typeof b=="number"||b instanceof Number}encodeValue(b){const Q=new ArrayBuffer(this._bits/8),D=new DataView(Q);return this._bits===32?D.setFloat32(0,b,!0):D.setFloat64(0,b,!0),Q}encodeType(){const b=this._bits===32?-13:-14;return slebEncode(b)}decodeValue(b,Q){this.checkType(Q);const D=safeRead(b,this._bits/8),O=new DataView(D);return this._bits===32?O.getFloat32(0,!0):O.getFloat64(0,!0)}get name(){return"float"+this._bits}valueToString(b){return b.toString()}}class FixedIntClass extends PrimitiveType{constructor(b){super(),this._bits=b}accept(b,Q){return b.visitFixedInt(this,Q)}covariant(b){const Q=iexp2(this._bits-1)*BigInt(-1),D=iexp2(this._bits-1)-BigInt(1);if(typeof b=="bigint")return b>=Q&&b<=D;if(Number.isInteger(b)){const O=BigInt(b);return O>=Q&&O<=D}else return!1}encodeValue(b){return writeIntLE(b,this._bits/8)}encodeType(){const b=Math.log2(this._bits)-3;return slebEncode(-9-b)}decodeValue(b,Q){this.checkType(Q);const D=readIntLE(b,this._bits/8);return this._bits<=32?Number(D):D}get name(){return`int${this._bits}`}valueToString(b){return b.toString()}}class FixedNatClass extends PrimitiveType{constructor(b){super(),this._bits=b}accept(b,Q){return b.visitFixedNat(this,Q)}covariant(b){const Q=iexp2(this._bits);return typeof b=="bigint"&&b>=BigInt(0)?b<Q:Number.isInteger(b)&&b>=0?BigInt(b)<Q:!1}encodeValue(b){return writeUIntLE(b,this._bits/8)}encodeType(){const b=Math.log2(this._bits)-3;return slebEncode(-5-b)}decodeValue(b,Q){this.checkType(Q);const D=readUIntLE(b,this._bits/8);return this._bits<=32?Number(D):D}get name(){return`nat${this._bits}`}valueToString(b){return b.toString()}}class RecClass extends ConstructType{constructor(){super(...arguments),this._id=RecClass._counter++,this._type=void 0}accept(b,Q){if(!this._type)throw Error("Recursive type uninitialized.");return b.visitRec(this,this._type,Q)}fill(b){this._type=b}getType(){return this._type}covariant(b){return this._type?this._type.covariant(b):!1}encodeValue(b){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.encodeValue(b)}_buildTypeTableImpl(b){if(!this._type)throw Error("Recursive type uninitialized.");b.add(this,new Uint8Array([])),this._type.buildTypeTable(b),b.merge(this,this._type.name)}decodeValue(b,Q){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.decodeValue(b,Q)}get name(){return`rec_${this._id}`}display(){if(!this._type)throw Error("Recursive type uninitialized.");return`\u03BC${this.name}.${this._type.name}`}valueToString(b){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.valueToString(b)}}RecClass._counter=0;function toReadableString(F){return JSON.stringify(F,(b,Q)=>typeof Q=="bigint"?`BigInt(${Q})`:Q)}new FloatClass(32);new FloatClass(64);new FixedIntClass(8);new FixedIntClass(16);new FixedIntClass(32);new FixedIntClass(64);new FixedNatClass(8);new FixedNatClass(16);new FixedNatClass(32);new FixedNatClass(64);var src$1={},buffer={};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(F){var b=base64Js,Q=ieee754$1,D=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;F.Buffer=G,F.SlowBuffer=Ie,F.INSPECT_MAX_BYTES=50;var O=2147483647;F.kMaxLength=O,G.TYPED_ARRAY_SUPPORT=U(),!G.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function U(){try{var ne=new Uint8Array(1),te={foo:function(){return 42}};return Object.setPrototypeOf(te,Uint8Array.prototype),Object.setPrototypeOf(ne,te),ne.foo()===42}catch{return!1}}Object.defineProperty(G.prototype,"parent",{enumerable:!0,get:function(){if(!!G.isBuffer(this))return this.buffer}}),Object.defineProperty(G.prototype,"offset",{enumerable:!0,get:function(){if(!!G.isBuffer(this))return this.byteOffset}});function q(ne){if(ne>O)throw new RangeError('The value "'+ne+'" is invalid for option "size"');var te=new Uint8Array(ne);return Object.setPrototypeOf(te,G.prototype),te}function G(ne,te,J){if(typeof ne=="number"){if(typeof te=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return re(ne)}return Y(ne,te,J)}G.poolSize=8192;function Y(ne,te,J){if(typeof ne=="string")return ie(ne,te);if(ArrayBuffer.isView(ne))return ce(ne);if(ne==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ne);if(ye(ne,ArrayBuffer)||ne&&ye(ne.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ye(ne,SharedArrayBuffer)||ne&&ye(ne.buffer,SharedArrayBuffer)))return Ae(ne,te,J);if(typeof ne=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var W=ne.valueOf&&ne.valueOf();if(W!=null&&W!==ne)return G.from(W,te,J);var Z=ge(ne);if(Z)return Z;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof ne[Symbol.toPrimitive]=="function")return G.from(ne[Symbol.toPrimitive]("string"),te,J);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ne)}G.from=function(ne,te,J){return Y(ne,te,J)},Object.setPrototypeOf(G.prototype,Uint8Array.prototype),Object.setPrototypeOf(G,Uint8Array);function X(ne){if(typeof ne!="number")throw new TypeError('"size" argument must be of type number');if(ne<0)throw new RangeError('The value "'+ne+'" is invalid for option "size"')}function ee(ne,te,J){return X(ne),ne<=0?q(ne):te!==void 0?typeof J=="string"?q(ne).fill(te,J):q(ne).fill(te):q(ne)}G.alloc=function(ne,te,J){return ee(ne,te,J)};function re(ne){return X(ne),q(ne<0?0:Be(ne)|0)}G.allocUnsafe=function(ne){return re(ne)},G.allocUnsafeSlow=function(ne){return re(ne)};function ie(ne,te){if((typeof te!="string"||te==="")&&(te="utf8"),!G.isEncoding(te))throw new TypeError("Unknown encoding: "+te);var J=_e(ne,te)|0,W=q(J),Z=W.write(ne,te);return Z!==J&&(W=W.slice(0,Z)),W}function ae(ne){for(var te=ne.length<0?0:Be(ne.length)|0,J=q(te),W=0;W<te;W+=1)J[W]=ne[W]&255;return J}function ce(ne){if(ye(ne,Uint8Array)){var te=new Uint8Array(ne);return Ae(te.buffer,te.byteOffset,te.byteLength)}return ae(ne)}function Ae(ne,te,J){if(te<0||ne.byteLength<te)throw new RangeError('"offset" is outside of buffer bounds');if(ne.byteLength<te+(J||0))throw new RangeError('"length" is outside of buffer bounds');var W;return te===void 0&&J===void 0?W=new Uint8Array(ne):J===void 0?W=new Uint8Array(ne,te):W=new Uint8Array(ne,te,J),Object.setPrototypeOf(W,G.prototype),W}function ge(ne){if(G.isBuffer(ne)){var te=Be(ne.length)|0,J=q(te);return J.length===0||ne.copy(J,0,0,te),J}if(ne.length!==void 0)return typeof ne.length!="number"||pe(ne.length)?q(0):ae(ne);if(ne.type==="Buffer"&&Array.isArray(ne.data))return ae(ne.data)}function Be(ne){if(ne>=O)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+O.toString(16)+" bytes");return ne|0}function Ie(ne){return+ne!=ne&&(ne=0),G.alloc(+ne)}G.isBuffer=function(te){return te!=null&&te._isBuffer===!0&&te!==G.prototype},G.compare=function(te,J){if(ye(te,Uint8Array)&&(te=G.from(te,te.offset,te.byteLength)),ye(J,Uint8Array)&&(J=G.from(J,J.offset,J.byteLength)),!G.isBuffer(te)||!G.isBuffer(J))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(te===J)return 0;for(var W=te.length,Z=J.length,se=0,ue=Math.min(W,Z);se<ue;++se)if(te[se]!==J[se]){W=te[se],Z=J[se];break}return W<Z?-1:Z<W?1:0},G.isEncoding=function(te){switch(String(te).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},G.concat=function(te,J){if(!Array.isArray(te))throw new TypeError('"list" argument must be an Array of Buffers');if(te.length===0)return G.alloc(0);var W;if(J===void 0)for(J=0,W=0;W<te.length;++W)J+=te[W].length;var Z=G.allocUnsafe(J),se=0;for(W=0;W<te.length;++W){var ue=te[W];if(ye(ue,Uint8Array))se+ue.length>Z.length?G.from(ue).copy(Z,se):Uint8Array.prototype.set.call(Z,ue,se);else if(G.isBuffer(ue))ue.copy(Z,se);else throw new TypeError('"list" argument must be an Array of Buffers');se+=ue.length}return Z};function _e(ne,te){if(G.isBuffer(ne))return ne.length;if(ArrayBuffer.isView(ne)||ye(ne,ArrayBuffer))return ne.byteLength;if(typeof ne!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof ne);var J=ne.length,W=arguments.length>2&&arguments[2]===!0;if(!W&&J===0)return 0;for(var Z=!1;;)switch(te){case"ascii":case"latin1":case"binary":return J;case"utf8":case"utf-8":return je(ne).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return J*2;case"hex":return J>>>1;case"base64":return oe(ne).length;default:if(Z)return W?-1:je(ne).length;te=(""+te).toLowerCase(),Z=!0}}G.byteLength=_e;function Ce(ne,te,J){var W=!1;if((te===void 0||te<0)&&(te=0),te>this.length||((J===void 0||J>this.length)&&(J=this.length),J<=0)||(J>>>=0,te>>>=0,J<=te))return"";for(ne||(ne="utf8");;)switch(ne){case"hex":return $e(this,te,J);case"utf8":case"utf-8":return Ve(this,te,J);case"ascii":return xe(this,te,J);case"latin1":case"binary":return Ne(this,te,J);case"base64":return Ge(this,te,J);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Le(this,te,J);default:if(W)throw new TypeError("Unknown encoding: "+ne);ne=(ne+"").toLowerCase(),W=!0}}G.prototype._isBuffer=!0;function be(ne,te,J){var W=ne[te];ne[te]=ne[J],ne[J]=W}G.prototype.swap16=function(){var te=this.length;if(te%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var J=0;J<te;J+=2)be(this,J,J+1);return this},G.prototype.swap32=function(){var te=this.length;if(te%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var J=0;J<te;J+=4)be(this,J,J+3),be(this,J+1,J+2);return this},G.prototype.swap64=function(){var te=this.length;if(te%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var J=0;J<te;J+=8)be(this,J,J+7),be(this,J+1,J+6),be(this,J+2,J+5),be(this,J+3,J+4);return this},G.prototype.toString=function(){var te=this.length;return te===0?"":arguments.length===0?Ve(this,0,te):Ce.apply(this,arguments)},G.prototype.toLocaleString=G.prototype.toString,G.prototype.equals=function(te){if(!G.isBuffer(te))throw new TypeError("Argument must be a Buffer");return this===te?!0:G.compare(this,te)===0},G.prototype.inspect=function(){var te="",J=F.INSPECT_MAX_BYTES;return te=this.toString("hex",0,J).replace(/(.{2})/g,"$1 ").trim(),this.length>J&&(te+=" ... "),"<Buffer "+te+">"},D&&(G.prototype[D]=G.prototype.inspect),G.prototype.compare=function(te,J,W,Z,se){if(ye(te,Uint8Array)&&(te=G.from(te,te.offset,te.byteLength)),!G.isBuffer(te))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof te);if(J===void 0&&(J=0),W===void 0&&(W=te?te.length:0),Z===void 0&&(Z=0),se===void 0&&(se=this.length),J<0||W>te.length||Z<0||se>this.length)throw new RangeError("out of range index");if(Z>=se&&J>=W)return 0;if(Z>=se)return-1;if(J>=W)return 1;if(J>>>=0,W>>>=0,Z>>>=0,se>>>=0,this===te)return 0;for(var ue=se-Z,Ee=W-J,we=Math.min(ue,Ee),Oe=this.slice(Z,se),qe=te.slice(J,W),Re=0;Re<we;++Re)if(Oe[Re]!==qe[Re]){ue=Oe[Re],Ee=qe[Re];break}return ue<Ee?-1:Ee<ue?1:0};function Qe(ne,te,J,W,Z){if(ne.length===0)return-1;if(typeof J=="string"?(W=J,J=0):J>2147483647?J=2147483647:J<-2147483648&&(J=-2147483648),J=+J,pe(J)&&(J=Z?0:ne.length-1),J<0&&(J=ne.length+J),J>=ne.length){if(Z)return-1;J=ne.length-1}else if(J<0)if(Z)J=0;else return-1;if(typeof te=="string"&&(te=G.from(te,W)),G.isBuffer(te))return te.length===0?-1:Se(ne,te,J,W,Z);if(typeof te=="number")return te=te&255,typeof Uint8Array.prototype.indexOf=="function"?Z?Uint8Array.prototype.indexOf.call(ne,te,J):Uint8Array.prototype.lastIndexOf.call(ne,te,J):Se(ne,[te],J,W,Z);throw new TypeError("val must be string, number or Buffer")}function Se(ne,te,J,W,Z){var se=1,ue=ne.length,Ee=te.length;if(W!==void 0&&(W=String(W).toLowerCase(),W==="ucs2"||W==="ucs-2"||W==="utf16le"||W==="utf-16le")){if(ne.length<2||te.length<2)return-1;se=2,ue/=2,Ee/=2,J/=2}function we(ze,ct){return se===1?ze[ct]:ze.readUInt16BE(ct*se)}var Oe;if(Z){var qe=-1;for(Oe=J;Oe<ue;Oe++)if(we(ne,Oe)===we(te,qe===-1?0:Oe-qe)){if(qe===-1&&(qe=Oe),Oe-qe+1===Ee)return qe*se}else qe!==-1&&(Oe-=Oe-qe),qe=-1}else for(J+Ee>ue&&(J=ue-Ee),Oe=J;Oe>=0;Oe--){for(var Re=!0,Je=0;Je<Ee;Je++)if(we(ne,Oe+Je)!==we(te,Je)){Re=!1;break}if(Re)return Oe}return-1}G.prototype.includes=function(te,J,W){return this.indexOf(te,J,W)!==-1},G.prototype.indexOf=function(te,J,W){return Qe(this,te,J,W,!0)},G.prototype.lastIndexOf=function(te,J,W){return Qe(this,te,J,W,!1)};function Me(ne,te,J,W){J=Number(J)||0;var Z=ne.length-J;W?(W=Number(W),W>Z&&(W=Z)):W=Z;var se=te.length;W>se/2&&(W=se/2);for(var ue=0;ue<W;++ue){var Ee=parseInt(te.substr(ue*2,2),16);if(pe(Ee))return ue;ne[J+ue]=Ee}return ue}function ke(ne,te,J,W){return he(je(te,ne.length-J),ne,J,W)}function Fe(ne,te,J,W){return he(ve(te),ne,J,W)}function Ue(ne,te,J,W){return he(oe(te),ne,J,W)}function Ye(ne,te,J,W){return he(le(te,ne.length-J),ne,J,W)}G.prototype.write=function(te,J,W,Z){if(J===void 0)Z="utf8",W=this.length,J=0;else if(W===void 0&&typeof J=="string")Z=J,W=this.length,J=0;else if(isFinite(J))J=J>>>0,isFinite(W)?(W=W>>>0,Z===void 0&&(Z="utf8")):(Z=W,W=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var se=this.length-J;if((W===void 0||W>se)&&(W=se),te.length>0&&(W<0||J<0)||J>this.length)throw new RangeError("Attempt to write outside buffer bounds");Z||(Z="utf8");for(var ue=!1;;)switch(Z){case"hex":return Me(this,te,J,W);case"utf8":case"utf-8":return ke(this,te,J,W);case"ascii":case"latin1":case"binary":return Fe(this,te,J,W);case"base64":return Ue(this,te,J,W);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ye(this,te,J,W);default:if(ue)throw new TypeError("Unknown encoding: "+Z);Z=(""+Z).toLowerCase(),ue=!0}},G.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ge(ne,te,J){return te===0&&J===ne.length?b.fromByteArray(ne):b.fromByteArray(ne.slice(te,J))}function Ve(ne,te,J){J=Math.min(ne.length,J);for(var W=[],Z=te;Z<J;){var se=ne[Z],ue=null,Ee=se>239?4:se>223?3:se>191?2:1;if(Z+Ee<=J){var we,Oe,qe,Re;switch(Ee){case 1:se<128&&(ue=se);break;case 2:we=ne[Z+1],(we&192)===128&&(Re=(se&31)<<6|we&63,Re>127&&(ue=Re));break;case 3:we=ne[Z+1],Oe=ne[Z+2],(we&192)===128&&(Oe&192)===128&&(Re=(se&15)<<12|(we&63)<<6|Oe&63,Re>2047&&(Re<55296||Re>57343)&&(ue=Re));break;case 4:we=ne[Z+1],Oe=ne[Z+2],qe=ne[Z+3],(we&192)===128&&(Oe&192)===128&&(qe&192)===128&&(Re=(se&15)<<18|(we&63)<<12|(Oe&63)<<6|qe&63,Re>65535&&Re<1114112&&(ue=Re))}}ue===null?(ue=65533,Ee=1):ue>65535&&(ue-=65536,W.push(ue>>>10&1023|55296),ue=56320|ue&1023),W.push(ue),Z+=Ee}return De(W)}var Te=4096;function De(ne){var te=ne.length;if(te<=Te)return String.fromCharCode.apply(String,ne);for(var J="",W=0;W<te;)J+=String.fromCharCode.apply(String,ne.slice(W,W+=Te));return J}function xe(ne,te,J){var W="";J=Math.min(ne.length,J);for(var Z=te;Z<J;++Z)W+=String.fromCharCode(ne[Z]&127);return W}function Ne(ne,te,J){var W="";J=Math.min(ne.length,J);for(var Z=te;Z<J;++Z)W+=String.fromCharCode(ne[Z]);return W}function $e(ne,te,J){var W=ne.length;(!te||te<0)&&(te=0),(!J||J<0||J>W)&&(J=W);for(var Z="",se=te;se<J;++se)Z+=me[ne[se]];return Z}function Le(ne,te,J){for(var W=ne.slice(te,J),Z="",se=0;se<W.length-1;se+=2)Z+=String.fromCharCode(W[se]+W[se+1]*256);return Z}G.prototype.slice=function(te,J){var W=this.length;te=~~te,J=J===void 0?W:~~J,te<0?(te+=W,te<0&&(te=0)):te>W&&(te=W),J<0?(J+=W,J<0&&(J=0)):J>W&&(J=W),J<te&&(J=te);var Z=this.subarray(te,J);return Object.setPrototypeOf(Z,G.prototype),Z};function Pe(ne,te,J){if(ne%1!==0||ne<0)throw new RangeError("offset is not uint");if(ne+te>J)throw new RangeError("Trying to access beyond buffer length")}G.prototype.readUintLE=G.prototype.readUIntLE=function(te,J,W){te=te>>>0,J=J>>>0,W||Pe(te,J,this.length);for(var Z=this[te],se=1,ue=0;++ue<J&&(se*=256);)Z+=this[te+ue]*se;return Z},G.prototype.readUintBE=G.prototype.readUIntBE=function(te,J,W){te=te>>>0,J=J>>>0,W||Pe(te,J,this.length);for(var Z=this[te+--J],se=1;J>0&&(se*=256);)Z+=this[te+--J]*se;return Z},G.prototype.readUint8=G.prototype.readUInt8=function(te,J){return te=te>>>0,J||Pe(te,1,this.length),this[te]},G.prototype.readUint16LE=G.prototype.readUInt16LE=function(te,J){return te=te>>>0,J||Pe(te,2,this.length),this[te]|this[te+1]<<8},G.prototype.readUint16BE=G.prototype.readUInt16BE=function(te,J){return te=te>>>0,J||Pe(te,2,this.length),this[te]<<8|this[te+1]},G.prototype.readUint32LE=G.prototype.readUInt32LE=function(te,J){return te=te>>>0,J||Pe(te,4,this.length),(this[te]|this[te+1]<<8|this[te+2]<<16)+this[te+3]*16777216},G.prototype.readUint32BE=G.prototype.readUInt32BE=function(te,J){return te=te>>>0,J||Pe(te,4,this.length),this[te]*16777216+(this[te+1]<<16|this[te+2]<<8|this[te+3])},G.prototype.readIntLE=function(te,J,W){te=te>>>0,J=J>>>0,W||Pe(te,J,this.length);for(var Z=this[te],se=1,ue=0;++ue<J&&(se*=256);)Z+=this[te+ue]*se;return se*=128,Z>=se&&(Z-=Math.pow(2,8*J)),Z},G.prototype.readIntBE=function(te,J,W){te=te>>>0,J=J>>>0,W||Pe(te,J,this.length);for(var Z=J,se=1,ue=this[te+--Z];Z>0&&(se*=256);)ue+=this[te+--Z]*se;return se*=128,ue>=se&&(ue-=Math.pow(2,8*J)),ue},G.prototype.readInt8=function(te,J){return te=te>>>0,J||Pe(te,1,this.length),this[te]&128?(255-this[te]+1)*-1:this[te]},G.prototype.readInt16LE=function(te,J){te=te>>>0,J||Pe(te,2,this.length);var W=this[te]|this[te+1]<<8;return W&32768?W|4294901760:W},G.prototype.readInt16BE=function(te,J){te=te>>>0,J||Pe(te,2,this.length);var W=this[te+1]|this[te]<<8;return W&32768?W|4294901760:W},G.prototype.readInt32LE=function(te,J){return te=te>>>0,J||Pe(te,4,this.length),this[te]|this[te+1]<<8|this[te+2]<<16|this[te+3]<<24},G.prototype.readInt32BE=function(te,J){return te=te>>>0,J||Pe(te,4,this.length),this[te]<<24|this[te+1]<<16|this[te+2]<<8|this[te+3]},G.prototype.readFloatLE=function(te,J){return te=te>>>0,J||Pe(te,4,this.length),Q.read(this,te,!0,23,4)},G.prototype.readFloatBE=function(te,J){return te=te>>>0,J||Pe(te,4,this.length),Q.read(this,te,!1,23,4)},G.prototype.readDoubleLE=function(te,J){return te=te>>>0,J||Pe(te,8,this.length),Q.read(this,te,!0,52,8)},G.prototype.readDoubleBE=function(te,J){return te=te>>>0,J||Pe(te,8,this.length),Q.read(this,te,!1,52,8)};function He(ne,te,J,W,Z,se){if(!G.isBuffer(ne))throw new TypeError('"buffer" argument must be a Buffer instance');if(te>Z||te<se)throw new RangeError('"value" argument is out of bounds');if(J+W>ne.length)throw new RangeError("Index out of range")}G.prototype.writeUintLE=G.prototype.writeUIntLE=function(te,J,W,Z){if(te=+te,J=J>>>0,W=W>>>0,!Z){var se=Math.pow(2,8*W)-1;He(this,te,J,W,se,0)}var ue=1,Ee=0;for(this[J]=te&255;++Ee<W&&(ue*=256);)this[J+Ee]=te/ue&255;return J+W},G.prototype.writeUintBE=G.prototype.writeUIntBE=function(te,J,W,Z){if(te=+te,J=J>>>0,W=W>>>0,!Z){var se=Math.pow(2,8*W)-1;He(this,te,J,W,se,0)}var ue=W-1,Ee=1;for(this[J+ue]=te&255;--ue>=0&&(Ee*=256);)this[J+ue]=te/Ee&255;return J+W},G.prototype.writeUint8=G.prototype.writeUInt8=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,1,255,0),this[J]=te&255,J+1},G.prototype.writeUint16LE=G.prototype.writeUInt16LE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,2,65535,0),this[J]=te&255,this[J+1]=te>>>8,J+2},G.prototype.writeUint16BE=G.prototype.writeUInt16BE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,2,65535,0),this[J]=te>>>8,this[J+1]=te&255,J+2},G.prototype.writeUint32LE=G.prototype.writeUInt32LE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,4,4294967295,0),this[J+3]=te>>>24,this[J+2]=te>>>16,this[J+1]=te>>>8,this[J]=te&255,J+4},G.prototype.writeUint32BE=G.prototype.writeUInt32BE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,4,4294967295,0),this[J]=te>>>24,this[J+1]=te>>>16,this[J+2]=te>>>8,this[J+3]=te&255,J+4},G.prototype.writeIntLE=function(te,J,W,Z){if(te=+te,J=J>>>0,!Z){var se=Math.pow(2,8*W-1);He(this,te,J,W,se-1,-se)}var ue=0,Ee=1,we=0;for(this[J]=te&255;++ue<W&&(Ee*=256);)te<0&&we===0&&this[J+ue-1]!==0&&(we=1),this[J+ue]=(te/Ee>>0)-we&255;return J+W},G.prototype.writeIntBE=function(te,J,W,Z){if(te=+te,J=J>>>0,!Z){var se=Math.pow(2,8*W-1);He(this,te,J,W,se-1,-se)}var ue=W-1,Ee=1,we=0;for(this[J+ue]=te&255;--ue>=0&&(Ee*=256);)te<0&&we===0&&this[J+ue+1]!==0&&(we=1),this[J+ue]=(te/Ee>>0)-we&255;return J+W},G.prototype.writeInt8=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,1,127,-128),te<0&&(te=255+te+1),this[J]=te&255,J+1},G.prototype.writeInt16LE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,2,32767,-32768),this[J]=te&255,this[J+1]=te>>>8,J+2},G.prototype.writeInt16BE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,2,32767,-32768),this[J]=te>>>8,this[J+1]=te&255,J+2},G.prototype.writeInt32LE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,4,2147483647,-2147483648),this[J]=te&255,this[J+1]=te>>>8,this[J+2]=te>>>16,this[J+3]=te>>>24,J+4},G.prototype.writeInt32BE=function(te,J,W){return te=+te,J=J>>>0,W||He(this,te,J,4,2147483647,-2147483648),te<0&&(te=4294967295+te+1),this[J]=te>>>24,this[J+1]=te>>>16,this[J+2]=te>>>8,this[J+3]=te&255,J+4};function et(ne,te,J,W,Z,se){if(J+W>ne.length)throw new RangeError("Index out of range");if(J<0)throw new RangeError("Index out of range")}function de(ne,te,J,W,Z){return te=+te,J=J>>>0,Z||et(ne,te,J,4),Q.write(ne,te,J,W,23,4),J+4}G.prototype.writeFloatLE=function(te,J,W){return de(this,te,J,!0,W)},G.prototype.writeFloatBE=function(te,J,W){return de(this,te,J,!1,W)};function tt(ne,te,J,W,Z){return te=+te,J=J>>>0,Z||et(ne,te,J,8),Q.write(ne,te,J,W,52,8),J+8}G.prototype.writeDoubleLE=function(te,J,W){return tt(this,te,J,!0,W)},G.prototype.writeDoubleBE=function(te,J,W){return tt(this,te,J,!1,W)},G.prototype.copy=function(te,J,W,Z){if(!G.isBuffer(te))throw new TypeError("argument should be a Buffer");if(W||(W=0),!Z&&Z!==0&&(Z=this.length),J>=te.length&&(J=te.length),J||(J=0),Z>0&&Z<W&&(Z=W),Z===W||te.length===0||this.length===0)return 0;if(J<0)throw new RangeError("targetStart out of bounds");if(W<0||W>=this.length)throw new RangeError("Index out of range");if(Z<0)throw new RangeError("sourceEnd out of bounds");Z>this.length&&(Z=this.length),te.length-J<Z-W&&(Z=te.length-J+W);var se=Z-W;return this===te&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(J,W,Z):Uint8Array.prototype.set.call(te,this.subarray(W,Z),J),se},G.prototype.fill=function(te,J,W,Z){if(typeof te=="string"){if(typeof J=="string"?(Z=J,J=0,W=this.length):typeof W=="string"&&(Z=W,W=this.length),Z!==void 0&&typeof Z!="string")throw new TypeError("encoding must be a string");if(typeof Z=="string"&&!G.isEncoding(Z))throw new TypeError("Unknown encoding: "+Z);if(te.length===1){var se=te.charCodeAt(0);(Z==="utf8"&&se<128||Z==="latin1")&&(te=se)}}else typeof te=="number"?te=te&255:typeof te=="boolean"&&(te=Number(te));if(J<0||this.length<J||this.length<W)throw new RangeError("Out of range index");if(W<=J)return this;J=J>>>0,W=W===void 0?this.length:W>>>0,te||(te=0);var ue;if(typeof te=="number")for(ue=J;ue<W;++ue)this[ue]=te;else{var Ee=G.isBuffer(te)?te:G.from(te,Z),we=Ee.length;if(we===0)throw new TypeError('The value "'+te+'" is invalid for argument "value"');for(ue=0;ue<W-J;++ue)this[ue+J]=Ee[ue%we]}return this};var at=/[^+/0-9A-Za-z-_]/g;function dt(ne){if(ne=ne.split("=")[0],ne=ne.trim().replace(at,""),ne.length<2)return"";for(;ne.length%4!==0;)ne=ne+"=";return ne}function je(ne,te){te=te||1/0;for(var J,W=ne.length,Z=null,se=[],ue=0;ue<W;++ue){if(J=ne.charCodeAt(ue),J>55295&&J<57344){if(!Z){if(J>56319){(te-=3)>-1&&se.push(239,191,189);continue}else if(ue+1===W){(te-=3)>-1&&se.push(239,191,189);continue}Z=J;continue}if(J<56320){(te-=3)>-1&&se.push(239,191,189),Z=J;continue}J=(Z-55296<<10|J-56320)+65536}else Z&&(te-=3)>-1&&se.push(239,191,189);if(Z=null,J<128){if((te-=1)<0)break;se.push(J)}else if(J<2048){if((te-=2)<0)break;se.push(J>>6|192,J&63|128)}else if(J<65536){if((te-=3)<0)break;se.push(J>>12|224,J>>6&63|128,J&63|128)}else if(J<1114112){if((te-=4)<0)break;se.push(J>>18|240,J>>12&63|128,J>>6&63|128,J&63|128)}else throw new Error("Invalid code point")}return se}function ve(ne){for(var te=[],J=0;J<ne.length;++J)te.push(ne.charCodeAt(J)&255);return te}function le(ne,te){for(var J,W,Z,se=[],ue=0;ue<ne.length&&!((te-=2)<0);++ue)J=ne.charCodeAt(ue),W=J>>8,Z=J%256,se.push(Z),se.push(W);return se}function oe(ne){return b.toByteArray(dt(ne))}function he(ne,te,J,W){for(var Z=0;Z<W&&!(Z+J>=te.length||Z>=ne.length);++Z)te[Z+J]=ne[Z];return Z}function ye(ne,te){return ne instanceof te||ne!=null&&ne.constructor!=null&&ne.constructor.name!=null&&ne.constructor.name===te.name}function pe(ne){return ne!==ne}var me=function(){for(var ne="0123456789abcdef",te=new Array(256),J=0;J<16;++J)for(var W=J*16,Z=0;Z<16;++Z)te[W+Z]=ne[J]+ne[Z];return te}()})(buffer);var bignumber={exports:{}};(function(F){(function(b){var Q,D=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,O=Math.ceil,U=Math.floor,q="[BigNumber Error] ",G=q+"Number primitive has more than 15 significant digits: ",Y=1e14,X=14,ee=9007199254740991,re=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],ie=1e7,ae=1e9;function ce(Qe){var Se,Me,ke,Fe=de.prototype={constructor:de,toString:null,valueOf:null},Ue=new de(1),Ye=20,Ge=4,Ve=-7,Te=21,De=-1e7,xe=1e7,Ne=!1,$e=1,Le=0,Pe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},He="0123456789abcdefghijklmnopqrstuvwxyz",et=!0;function de(le,oe){var he,ye,pe,me,ne,te,J,W,Z=this;if(!(Z instanceof de))return new de(le,oe);if(oe==null){if(le&&le._isBigNumber===!0){Z.s=le.s,!le.c||le.e>xe?Z.c=Z.e=null:le.e<De?Z.c=[Z.e=0]:(Z.e=le.e,Z.c=le.c.slice());return}if((te=typeof le=="number")&&le*0==0){if(Z.s=1/le<0?(le=-le,-1):1,le===~~le){for(me=0,ne=le;ne>=10;ne/=10,me++);me>xe?Z.c=Z.e=null:(Z.e=me,Z.c=[le]);return}W=String(le)}else{if(!D.test(W=String(le)))return ke(Z,W,te);Z.s=W.charCodeAt(0)==45?(W=W.slice(1),-1):1}(me=W.indexOf("."))>-1&&(W=W.replace(".","")),(ne=W.search(/e/i))>0?(me<0&&(me=ne),me+=+W.slice(ne+1),W=W.substring(0,ne)):me<0&&(me=W.length)}else{if(Ie(oe,2,He.length,"Base"),oe==10&&et)return Z=new de(le),je(Z,Ye+Z.e+1,Ge);if(W=String(le),te=typeof le=="number"){if(le*0!=0)return ke(Z,W,te,oe);if(Z.s=1/le<0?(W=W.slice(1),-1):1,de.DEBUG&&W.replace(/^0\.0*|\./,"").length>15)throw Error(G+le)}else Z.s=W.charCodeAt(0)===45?(W=W.slice(1),-1):1;for(he=He.slice(0,oe),me=ne=0,J=W.length;ne<J;ne++)if(he.indexOf(ye=W.charAt(ne))<0){if(ye=="."){if(ne>me){me=J;continue}}else if(!pe&&(W==W.toUpperCase()&&(W=W.toLowerCase())||W==W.toLowerCase()&&(W=W.toUpperCase()))){pe=!0,ne=-1,me=0;continue}return ke(Z,String(le),te,oe)}te=!1,W=Me(W,oe,10,Z.s),(me=W.indexOf("."))>-1?W=W.replace(".",""):me=W.length}for(ne=0;W.charCodeAt(ne)===48;ne++);for(J=W.length;W.charCodeAt(--J)===48;);if(W=W.slice(ne,++J)){if(J-=ne,te&&de.DEBUG&&J>15&&(le>ee||le!==U(le)))throw Error(G+Z.s*le);if((me=me-ne-1)>xe)Z.c=Z.e=null;else if(me<De)Z.c=[Z.e=0];else{if(Z.e=me,Z.c=[],ne=(me+1)%X,me<0&&(ne+=X),ne<J){for(ne&&Z.c.push(+W.slice(0,ne)),J-=X;ne<J;)Z.c.push(+W.slice(ne,ne+=X));ne=X-(W=W.slice(ne)).length}else ne-=J;for(;ne--;W+="0");Z.c.push(+W)}}else Z.c=[Z.e=0]}de.clone=ce,de.ROUND_UP=0,de.ROUND_DOWN=1,de.ROUND_CEIL=2,de.ROUND_FLOOR=3,de.ROUND_HALF_UP=4,de.ROUND_HALF_DOWN=5,de.ROUND_HALF_EVEN=6,de.ROUND_HALF_CEIL=7,de.ROUND_HALF_FLOOR=8,de.EUCLID=9,de.config=de.set=function(le){var oe,he;if(le!=null)if(typeof le=="object"){if(le.hasOwnProperty(oe="DECIMAL_PLACES")&&(he=le[oe],Ie(he,0,ae,oe),Ye=he),le.hasOwnProperty(oe="ROUNDING_MODE")&&(he=le[oe],Ie(he,0,8,oe),Ge=he),le.hasOwnProperty(oe="EXPONENTIAL_AT")&&(he=le[oe],he&&he.pop?(Ie(he[0],-ae,0,oe),Ie(he[1],0,ae,oe),Ve=he[0],Te=he[1]):(Ie(he,-ae,ae,oe),Ve=-(Te=he<0?-he:he))),le.hasOwnProperty(oe="RANGE"))if(he=le[oe],he&&he.pop)Ie(he[0],-ae,-1,oe),Ie(he[1],1,ae,oe),De=he[0],xe=he[1];else if(Ie(he,-ae,ae,oe),he)De=-(xe=he<0?-he:he);else throw Error(q+oe+" cannot be zero: "+he);if(le.hasOwnProperty(oe="CRYPTO"))if(he=le[oe],he===!!he)if(he)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))Ne=he;else throw Ne=!he,Error(q+"crypto unavailable");else Ne=he;else throw Error(q+oe+" not true or false: "+he);if(le.hasOwnProperty(oe="MODULO_MODE")&&(he=le[oe],Ie(he,0,9,oe),$e=he),le.hasOwnProperty(oe="POW_PRECISION")&&(he=le[oe],Ie(he,0,ae,oe),Le=he),le.hasOwnProperty(oe="FORMAT"))if(he=le[oe],typeof he=="object")Pe=he;else throw Error(q+oe+" not an object: "+he);if(le.hasOwnProperty(oe="ALPHABET"))if(he=le[oe],typeof he=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(he))et=he.slice(0,10)=="0123456789",He=he;else throw Error(q+oe+" invalid: "+he)}else throw Error(q+"Object expected: "+le);return{DECIMAL_PLACES:Ye,ROUNDING_MODE:Ge,EXPONENTIAL_AT:[Ve,Te],RANGE:[De,xe],CRYPTO:Ne,MODULO_MODE:$e,POW_PRECISION:Le,FORMAT:Pe,ALPHABET:He}},de.isBigNumber=function(le){if(!le||le._isBigNumber!==!0)return!1;if(!de.DEBUG)return!0;var oe,he,ye=le.c,pe=le.e,me=le.s;e:if({}.toString.call(ye)=="[object Array]"){if((me===1||me===-1)&&pe>=-ae&&pe<=ae&&pe===U(pe)){if(ye[0]===0){if(pe===0&&ye.length===1)return!0;break e}if(oe=(pe+1)%X,oe<1&&(oe+=X),String(ye[0]).length==oe){for(oe=0;oe<ye.length;oe++)if(he=ye[oe],he<0||he>=Y||he!==U(he))break e;if(he!==0)return!0}}}else if(ye===null&&pe===null&&(me===null||me===1||me===-1))return!0;throw Error(q+"Invalid BigNumber: "+le)},de.maximum=de.max=function(){return at(arguments,Fe.lt)},de.minimum=de.min=function(){return at(arguments,Fe.gt)},de.random=function(){var le=9007199254740992,oe=Math.random()*le&2097151?function(){return U(Math.random()*le)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(he){var ye,pe,me,ne,te,J=0,W=[],Z=new de(Ue);if(he==null?he=Ye:Ie(he,0,ae),ne=O(he/X),Ne)if(crypto.getRandomValues){for(ye=crypto.getRandomValues(new Uint32Array(ne*=2));J<ne;)te=ye[J]*131072+(ye[J+1]>>>11),te>=9e15?(pe=crypto.getRandomValues(new Uint32Array(2)),ye[J]=pe[0],ye[J+1]=pe[1]):(W.push(te%1e14),J+=2);J=ne/2}else if(crypto.randomBytes){for(ye=crypto.randomBytes(ne*=7);J<ne;)te=(ye[J]&31)*281474976710656+ye[J+1]*1099511627776+ye[J+2]*4294967296+ye[J+3]*16777216+(ye[J+4]<<16)+(ye[J+5]<<8)+ye[J+6],te>=9e15?crypto.randomBytes(7).copy(ye,J):(W.push(te%1e14),J+=7);J=ne/7}else throw Ne=!1,Error(q+"crypto unavailable");if(!Ne)for(;J<ne;)te=oe(),te<9e15&&(W[J++]=te%1e14);for(ne=W[--J],he%=X,ne&&he&&(te=re[X-he],W[J]=U(ne/te)*te);W[J]===0;W.pop(),J--);if(J<0)W=[me=0];else{for(me=-1;W[0]===0;W.splice(0,1),me-=X);for(J=1,te=W[0];te>=10;te/=10,J++);J<X&&(me-=X-J)}return Z.e=me,Z.c=W,Z}}(),de.sum=function(){for(var le=1,oe=arguments,he=new de(oe[0]);le<oe.length;)he=he.plus(oe[le++]);return he},Me=function(){var le="0123456789";function oe(he,ye,pe,me){for(var ne,te=[0],J,W=0,Z=he.length;W<Z;){for(J=te.length;J--;te[J]*=ye);for(te[0]+=me.indexOf(he.charAt(W++)),ne=0;ne<te.length;ne++)te[ne]>pe-1&&(te[ne+1]==null&&(te[ne+1]=0),te[ne+1]+=te[ne]/pe|0,te[ne]%=pe)}return te.reverse()}return function(he,ye,pe,me,ne){var te,J,W,Z,se,ue,Ee,we,Oe=he.indexOf("."),qe=Ye,Re=Ge;for(Oe>=0&&(Z=Le,Le=0,he=he.replace(".",""),we=new de(ye),ue=we.pow(he.length-Oe),Le=Z,we.c=oe(be(ge(ue.c),ue.e,"0"),10,pe,le),we.e=we.c.length),Ee=oe(he,ye,pe,ne?(te=He,le):(te=le,He)),W=Z=Ee.length;Ee[--Z]==0;Ee.pop());if(!Ee[0])return te.charAt(0);if(Oe<0?--W:(ue.c=Ee,ue.e=W,ue.s=me,ue=Se(ue,we,qe,Re,pe),Ee=ue.c,se=ue.r,W=ue.e),J=W+qe+1,Oe=Ee[J],Z=pe/2,se=se||J<0||Ee[J+1]!=null,se=Re<4?(Oe!=null||se)&&(Re==0||Re==(ue.s<0?3:2)):Oe>Z||Oe==Z&&(Re==4||se||Re==6&&Ee[J-1]&1||Re==(ue.s<0?8:7)),J<1||!Ee[0])he=se?be(te.charAt(1),-qe,te.charAt(0)):te.charAt(0);else{if(Ee.length=J,se)for(--pe;++Ee[--J]>pe;)Ee[J]=0,J||(++W,Ee=[1].concat(Ee));for(Z=Ee.length;!Ee[--Z];);for(Oe=0,he="";Oe<=Z;he+=te.charAt(Ee[Oe++]));he=be(he,W,te.charAt(0))}return he}}(),Se=function(){function le(ye,pe,me){var ne,te,J,W,Z=0,se=ye.length,ue=pe%ie,Ee=pe/ie|0;for(ye=ye.slice();se--;)J=ye[se]%ie,W=ye[se]/ie|0,ne=Ee*J+W*ue,te=ue*J+ne%ie*ie+Z,Z=(te/me|0)+(ne/ie|0)+Ee*W,ye[se]=te%me;return Z&&(ye=[Z].concat(ye)),ye}function oe(ye,pe,me,ne){var te,J;if(me!=ne)J=me>ne?1:-1;else for(te=J=0;te<me;te++)if(ye[te]!=pe[te]){J=ye[te]>pe[te]?1:-1;break}return J}function he(ye,pe,me,ne){for(var te=0;me--;)ye[me]-=te,te=ye[me]<pe[me]?1:0,ye[me]=te*ne+ye[me]-pe[me];for(;!ye[0]&&ye.length>1;ye.splice(0,1));}return function(ye,pe,me,ne,te){var J,W,Z,se,ue,Ee,we,Oe,qe,Re,Je,ze,ct,ht,gt,Ke,pt,ut=ye.s==pe.s?1:-1,lt=ye.c,nt=pe.c;if(!lt||!lt[0]||!nt||!nt[0])return new de(!ye.s||!pe.s||(lt?nt&&lt[0]==nt[0]:!nt)?NaN:lt&&lt[0]==0||!nt?ut*0:ut/0);for(Oe=new de(ut),qe=Oe.c=[],W=ye.e-pe.e,ut=me+W+1,te||(te=Y,W=Ae(ye.e/X)-Ae(pe.e/X),ut=ut/X|0),Z=0;nt[Z]==(lt[Z]||0);Z++);if(nt[Z]>(lt[Z]||0)&&W--,ut<0)qe.push(1),se=!0;else{for(ht=lt.length,Ke=nt.length,Z=0,ut+=2,ue=U(te/(nt[0]+1)),ue>1&&(nt=le(nt,ue,te),lt=le(lt,ue,te),Ke=nt.length,ht=lt.length),ct=Ke,Re=lt.slice(0,Ke),Je=Re.length;Je<Ke;Re[Je++]=0);pt=nt.slice(),pt=[0].concat(pt),gt=nt[0],nt[1]>=te/2&&gt++;do{if(ue=0,J=oe(nt,Re,Ke,Je),J<0){if(ze=Re[0],Ke!=Je&&(ze=ze*te+(Re[1]||0)),ue=U(ze/gt),ue>1)for(ue>=te&&(ue=te-1),Ee=le(nt,ue,te),we=Ee.length,Je=Re.length;oe(Ee,Re,we,Je)==1;)ue--,he(Ee,Ke<we?pt:nt,we,te),we=Ee.length,J=1;else ue==0&&(J=ue=1),Ee=nt.slice(),we=Ee.length;if(we<Je&&(Ee=[0].concat(Ee)),he(Re,Ee,Je,te),Je=Re.length,J==-1)for(;oe(nt,Re,Ke,Je)<1;)ue++,he(Re,Ke<Je?pt:nt,Je,te),Je=Re.length}else J===0&&(ue++,Re=[0]);qe[Z++]=ue,Re[0]?Re[Je++]=lt[ct]||0:(Re=[lt[ct]],Je=1)}while((ct++<ht||Re[0]!=null)&&ut--);se=Re[0]!=null,qe[0]||qe.splice(0,1)}if(te==Y){for(Z=1,ut=qe[0];ut>=10;ut/=10,Z++);je(Oe,me+(Oe.e=Z+W*X-1)+1,ne,se)}else Oe.e=W,Oe.r=+se;return Oe}}();function tt(le,oe,he,ye){var pe,me,ne,te,J;if(he==null?he=Ge:Ie(he,0,8),!le.c)return le.toString();if(pe=le.c[0],ne=le.e,oe==null)J=ge(le.c),J=ye==1||ye==2&&(ne<=Ve||ne>=Te)?Ce(J,ne):be(J,ne,"0");else if(le=je(new de(le),oe,he),me=le.e,J=ge(le.c),te=J.length,ye==1||ye==2&&(oe<=me||me<=Ve)){for(;te<oe;J+="0",te++);J=Ce(J,me)}else if(oe-=ne,J=be(J,me,"0"),me+1>te){if(--oe>0)for(J+=".";oe--;J+="0");}else if(oe+=me-te,oe>0)for(me+1==te&&(J+=".");oe--;J+="0");return le.s<0&&pe?"-"+J:J}function at(le,oe){for(var he,ye=1,pe=new de(le[0]);ye<le.length;ye++)if(he=new de(le[ye]),he.s)oe.call(pe,he)&&(pe=he);else{pe=he;break}return pe}function dt(le,oe,he){for(var ye=1,pe=oe.length;!oe[--pe];oe.pop());for(pe=oe[0];pe>=10;pe/=10,ye++);return(he=ye+he*X-1)>xe?le.c=le.e=null:he<De?le.c=[le.e=0]:(le.e=he,le.c=oe),le}ke=function(){var le=/^(-?)0([xbo])(?=\w[\w.]*$)/i,oe=/^([^.]+)\.$/,he=/^\.([^.]+)$/,ye=/^-?(Infinity|NaN)$/,pe=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(me,ne,te,J){var W,Z=te?ne:ne.replace(pe,"");if(ye.test(Z))me.s=isNaN(Z)?null:Z<0?-1:1;else{if(!te&&(Z=Z.replace(le,function(se,ue,Ee){return W=(Ee=Ee.toLowerCase())=="x"?16:Ee=="b"?2:8,!J||J==W?ue:se}),J&&(W=J,Z=Z.replace(oe,"$1").replace(he,"0.$1")),ne!=Z))return new de(Z,W);if(de.DEBUG)throw Error(q+"Not a"+(J?" base "+J:"")+" number: "+ne);me.s=null}me.c=me.e=null}}();function je(le,oe,he,ye){var pe,me,ne,te,J,W,Z,se=le.c,ue=re;if(se){e:{for(pe=1,te=se[0];te>=10;te/=10,pe++);if(me=oe-pe,me<0)me+=X,ne=oe,J=se[W=0],Z=J/ue[pe-ne-1]%10|0;else if(W=O((me+1)/X),W>=se.length)if(ye){for(;se.length<=W;se.push(0));J=Z=0,pe=1,me%=X,ne=me-X+1}else break e;else{for(J=te=se[W],pe=1;te>=10;te/=10,pe++);me%=X,ne=me-X+pe,Z=ne<0?0:J/ue[pe-ne-1]%10|0}if(ye=ye||oe<0||se[W+1]!=null||(ne<0?J:J%ue[pe-ne-1]),ye=he<4?(Z||ye)&&(he==0||he==(le.s<0?3:2)):Z>5||Z==5&&(he==4||ye||he==6&&(me>0?ne>0?J/ue[pe-ne]:0:se[W-1])%10&1||he==(le.s<0?8:7)),oe<1||!se[0])return se.length=0,ye?(oe-=le.e+1,se[0]=ue[(X-oe%X)%X],le.e=-oe||0):se[0]=le.e=0,le;if(me==0?(se.length=W,te=1,W--):(se.length=W+1,te=ue[X-me],se[W]=ne>0?U(J/ue[pe-ne]%ue[ne])*te:0),ye)for(;;)if(W==0){for(me=1,ne=se[0];ne>=10;ne/=10,me++);for(ne=se[0]+=te,te=1;ne>=10;ne/=10,te++);me!=te&&(le.e++,se[0]==Y&&(se[0]=1));break}else{if(se[W]+=te,se[W]!=Y)break;se[W--]=0,te=1}for(me=se.length;se[--me]===0;se.pop());}le.e>xe?le.c=le.e=null:le.e<De&&(le.c=[le.e=0])}return le}function ve(le){var oe,he=le.e;return he===null?le.toString():(oe=ge(le.c),oe=he<=Ve||he>=Te?Ce(oe,he):be(oe,he,"0"),le.s<0?"-"+oe:oe)}return Fe.absoluteValue=Fe.abs=function(){var le=new de(this);return le.s<0&&(le.s=1),le},Fe.comparedTo=function(le,oe){return Be(this,new de(le,oe))},Fe.decimalPlaces=Fe.dp=function(le,oe){var he,ye,pe,me=this;if(le!=null)return Ie(le,0,ae),oe==null?oe=Ge:Ie(oe,0,8),je(new de(me),le+me.e+1,oe);if(!(he=me.c))return null;if(ye=((pe=he.length-1)-Ae(this.e/X))*X,pe=he[pe])for(;pe%10==0;pe/=10,ye--);return ye<0&&(ye=0),ye},Fe.dividedBy=Fe.div=function(le,oe){return Se(this,new de(le,oe),Ye,Ge)},Fe.dividedToIntegerBy=Fe.idiv=function(le,oe){return Se(this,new de(le,oe),0,1)},Fe.exponentiatedBy=Fe.pow=function(le,oe){var he,ye,pe,me,ne,te,J,W,Z,se=this;if(le=new de(le),le.c&&!le.isInteger())throw Error(q+"Exponent not an integer: "+ve(le));if(oe!=null&&(oe=new de(oe)),te=le.e>14,!se.c||!se.c[0]||se.c[0]==1&&!se.e&&se.c.length==1||!le.c||!le.c[0])return Z=new de(Math.pow(+ve(se),te?le.s*(2-_e(le)):+ve(le))),oe?Z.mod(oe):Z;if(J=le.s<0,oe){if(oe.c?!oe.c[0]:!oe.s)return new de(NaN);ye=!J&&se.isInteger()&&oe.isInteger(),ye&&(se=se.mod(oe))}else{if(le.e>9&&(se.e>0||se.e<-1||(se.e==0?se.c[0]>1||te&&se.c[1]>=24e7:se.c[0]<8e13||te&&se.c[0]<=9999975e7)))return me=se.s<0&&_e(le)?-0:0,se.e>-1&&(me=1/me),new de(J?1/me:me);Le&&(me=O(Le/X+2))}for(te?(he=new de(.5),J&&(le.s=1),W=_e(le)):(pe=Math.abs(+ve(le)),W=pe%2),Z=new de(Ue);;){if(W){if(Z=Z.times(se),!Z.c)break;me?Z.c.length>me&&(Z.c.length=me):ye&&(Z=Z.mod(oe))}if(pe){if(pe=U(pe/2),pe===0)break;W=pe%2}else if(le=le.times(he),je(le,le.e+1,1),le.e>14)W=_e(le);else{if(pe=+ve(le),pe===0)break;W=pe%2}se=se.times(se),me?se.c&&se.c.length>me&&(se.c.length=me):ye&&(se=se.mod(oe))}return ye?Z:(J&&(Z=Ue.div(Z)),oe?Z.mod(oe):me?je(Z,Le,Ge,ne):Z)},Fe.integerValue=function(le){var oe=new de(this);return le==null?le=Ge:Ie(le,0,8),je(oe,oe.e+1,le)},Fe.isEqualTo=Fe.eq=function(le,oe){return Be(this,new de(le,oe))===0},Fe.isFinite=function(){return!!this.c},Fe.isGreaterThan=Fe.gt=function(le,oe){return Be(this,new de(le,oe))>0},Fe.isGreaterThanOrEqualTo=Fe.gte=function(le,oe){return(oe=Be(this,new de(le,oe)))===1||oe===0},Fe.isInteger=function(){return!!this.c&&Ae(this.e/X)>this.c.length-2},Fe.isLessThan=Fe.lt=function(le,oe){return Be(this,new de(le,oe))<0},Fe.isLessThanOrEqualTo=Fe.lte=function(le,oe){return(oe=Be(this,new de(le,oe)))===-1||oe===0},Fe.isNaN=function(){return!this.s},Fe.isNegative=function(){return this.s<0},Fe.isPositive=function(){return this.s>0},Fe.isZero=function(){return!!this.c&&this.c[0]==0},Fe.minus=function(le,oe){var he,ye,pe,me,ne=this,te=ne.s;if(le=new de(le,oe),oe=le.s,!te||!oe)return new de(NaN);if(te!=oe)return le.s=-oe,ne.plus(le);var J=ne.e/X,W=le.e/X,Z=ne.c,se=le.c;if(!J||!W){if(!Z||!se)return Z?(le.s=-oe,le):new de(se?ne:NaN);if(!Z[0]||!se[0])return se[0]?(le.s=-oe,le):new de(Z[0]?ne:Ge==3?-0:0)}if(J=Ae(J),W=Ae(W),Z=Z.slice(),te=J-W){for((me=te<0)?(te=-te,pe=Z):(W=J,pe=se),pe.reverse(),oe=te;oe--;pe.push(0));pe.reverse()}else for(ye=(me=(te=Z.length)<(oe=se.length))?te:oe,te=oe=0;oe<ye;oe++)if(Z[oe]!=se[oe]){me=Z[oe]<se[oe];break}if(me&&(pe=Z,Z=se,se=pe,le.s=-le.s),oe=(ye=se.length)-(he=Z.length),oe>0)for(;oe--;Z[he++]=0);for(oe=Y-1;ye>te;){if(Z[--ye]<se[ye]){for(he=ye;he&&!Z[--he];Z[he]=oe);--Z[he],Z[ye]+=Y}Z[ye]-=se[ye]}for(;Z[0]==0;Z.splice(0,1),--W);return Z[0]?dt(le,Z,W):(le.s=Ge==3?-1:1,le.c=[le.e=0],le)},Fe.modulo=Fe.mod=function(le,oe){var he,ye,pe=this;return le=new de(le,oe),!pe.c||!le.s||le.c&&!le.c[0]?new de(NaN):!le.c||pe.c&&!pe.c[0]?new de(pe):($e==9?(ye=le.s,le.s=1,he=Se(pe,le,0,3),le.s=ye,he.s*=ye):he=Se(pe,le,0,$e),le=pe.minus(he.times(le)),!le.c[0]&&$e==1&&(le.s=pe.s),le)},Fe.multipliedBy=Fe.times=function(le,oe){var he,ye,pe,me,ne,te,J,W,Z,se,ue,Ee,we,Oe,qe,Re=this,Je=Re.c,ze=(le=new de(le,oe)).c;if(!Je||!ze||!Je[0]||!ze[0])return!Re.s||!le.s||Je&&!Je[0]&&!ze||ze&&!ze[0]&&!Je?le.c=le.e=le.s=null:(le.s*=Re.s,!Je||!ze?le.c=le.e=null:(le.c=[0],le.e=0)),le;for(ye=Ae(Re.e/X)+Ae(le.e/X),le.s*=Re.s,J=Je.length,se=ze.length,J<se&&(we=Je,Je=ze,ze=we,pe=J,J=se,se=pe),pe=J+se,we=[];pe--;we.push(0));for(Oe=Y,qe=ie,pe=se;--pe>=0;){for(he=0,ue=ze[pe]%qe,Ee=ze[pe]/qe|0,ne=J,me=pe+ne;me>pe;)W=Je[--ne]%qe,Z=Je[ne]/qe|0,te=Ee*W+Z*ue,W=ue*W+te%qe*qe+we[me]+he,he=(W/Oe|0)+(te/qe|0)+Ee*Z,we[me--]=W%Oe;we[me]=he}return he?++ye:we.splice(0,1),dt(le,we,ye)},Fe.negated=function(){var le=new de(this);return le.s=-le.s||null,le},Fe.plus=function(le,oe){var he,ye=this,pe=ye.s;if(le=new de(le,oe),oe=le.s,!pe||!oe)return new de(NaN);if(pe!=oe)return le.s=-oe,ye.minus(le);var me=ye.e/X,ne=le.e/X,te=ye.c,J=le.c;if(!me||!ne){if(!te||!J)return new de(pe/0);if(!te[0]||!J[0])return J[0]?le:new de(te[0]?ye:pe*0)}if(me=Ae(me),ne=Ae(ne),te=te.slice(),pe=me-ne){for(pe>0?(ne=me,he=J):(pe=-pe,he=te),he.reverse();pe--;he.push(0));he.reverse()}for(pe=te.length,oe=J.length,pe-oe<0&&(he=J,J=te,te=he,oe=pe),pe=0;oe;)pe=(te[--oe]=te[oe]+J[oe]+pe)/Y|0,te[oe]=Y===te[oe]?0:te[oe]%Y;return pe&&(te=[pe].concat(te),++ne),dt(le,te,ne)},Fe.precision=Fe.sd=function(le,oe){var he,ye,pe,me=this;if(le!=null&&le!==!!le)return Ie(le,1,ae),oe==null?oe=Ge:Ie(oe,0,8),je(new de(me),le,oe);if(!(he=me.c))return null;if(pe=he.length-1,ye=pe*X+1,pe=he[pe]){for(;pe%10==0;pe/=10,ye--);for(pe=he[0];pe>=10;pe/=10,ye++);}return le&&me.e+1>ye&&(ye=me.e+1),ye},Fe.shiftedBy=function(le){return Ie(le,-ee,ee),this.times("1e"+le)},Fe.squareRoot=Fe.sqrt=function(){var le,oe,he,ye,pe,me=this,ne=me.c,te=me.s,J=me.e,W=Ye+4,Z=new de("0.5");if(te!==1||!ne||!ne[0])return new de(!te||te<0&&(!ne||ne[0])?NaN:ne?me:1/0);if(te=Math.sqrt(+ve(me)),te==0||te==1/0?(oe=ge(ne),(oe.length+J)%2==0&&(oe+="0"),te=Math.sqrt(+oe),J=Ae((J+1)/2)-(J<0||J%2),te==1/0?oe="5e"+J:(oe=te.toExponential(),oe=oe.slice(0,oe.indexOf("e")+1)+J),he=new de(oe)):he=new de(te+""),he.c[0]){for(J=he.e,te=J+W,te<3&&(te=0);;)if(pe=he,he=Z.times(pe.plus(Se(me,pe,W,1))),ge(pe.c).slice(0,te)===(oe=ge(he.c)).slice(0,te))if(he.e<J&&--te,oe=oe.slice(te-3,te+1),oe=="9999"||!ye&&oe=="4999"){if(!ye&&(je(pe,pe.e+Ye+2,0),pe.times(pe).eq(me))){he=pe;break}W+=4,te+=4,ye=1}else{(!+oe||!+oe.slice(1)&&oe.charAt(0)=="5")&&(je(he,he.e+Ye+2,1),le=!he.times(he).eq(me));break}}return je(he,he.e+Ye+1,Ge,le)},Fe.toExponential=function(le,oe){return le!=null&&(Ie(le,0,ae),le++),tt(this,le,oe,1)},Fe.toFixed=function(le,oe){return le!=null&&(Ie(le,0,ae),le=le+this.e+1),tt(this,le,oe)},Fe.toFormat=function(le,oe,he){var ye,pe=this;if(he==null)le!=null&&oe&&typeof oe=="object"?(he=oe,oe=null):le&&typeof le=="object"?(he=le,le=oe=null):he=Pe;else if(typeof he!="object")throw Error(q+"Argument not an object: "+he);if(ye=pe.toFixed(le,oe),pe.c){var me,ne=ye.split("."),te=+he.groupSize,J=+he.secondaryGroupSize,W=he.groupSeparator||"",Z=ne[0],se=ne[1],ue=pe.s<0,Ee=ue?Z.slice(1):Z,we=Ee.length;if(J&&(me=te,te=J,J=me,we-=me),te>0&&we>0){for(me=we%te||te,Z=Ee.substr(0,me);me<we;me+=te)Z+=W+Ee.substr(me,te);J>0&&(Z+=W+Ee.slice(me)),ue&&(Z="-"+Z)}ye=se?Z+(he.decimalSeparator||"")+((J=+he.fractionGroupSize)?se.replace(new RegExp("\\d{"+J+"}\\B","g"),"$&"+(he.fractionGroupSeparator||"")):se):Z}return(he.prefix||"")+ye+(he.suffix||"")},Fe.toFraction=function(le){var oe,he,ye,pe,me,ne,te,J,W,Z,se,ue,Ee=this,we=Ee.c;if(le!=null&&(te=new de(le),!te.isInteger()&&(te.c||te.s!==1)||te.lt(Ue)))throw Error(q+"Argument "+(te.isInteger()?"out of range: ":"not an integer: ")+ve(te));if(!we)return new de(Ee);for(oe=new de(Ue),W=he=new de(Ue),ye=J=new de(Ue),ue=ge(we),me=oe.e=ue.length-Ee.e-1,oe.c[0]=re[(ne=me%X)<0?X+ne:ne],le=!le||te.comparedTo(oe)>0?me>0?oe:W:te,ne=xe,xe=1/0,te=new de(ue),J.c[0]=0;Z=Se(te,oe,0,1),pe=he.plus(Z.times(ye)),pe.comparedTo(le)!=1;)he=ye,ye=pe,W=J.plus(Z.times(pe=W)),J=pe,oe=te.minus(Z.times(pe=oe)),te=pe;return pe=Se(le.minus(he),ye,0,1),J=J.plus(pe.times(W)),he=he.plus(pe.times(ye)),J.s=W.s=Ee.s,me=me*2,se=Se(W,ye,me,Ge).minus(Ee).abs().comparedTo(Se(J,he,me,Ge).minus(Ee).abs())<1?[W,ye]:[J,he],xe=ne,se},Fe.toNumber=function(){return+ve(this)},Fe.toPrecision=function(le,oe){return le!=null&&Ie(le,1,ae),tt(this,le,oe,2)},Fe.toString=function(le){var oe,he=this,ye=he.s,pe=he.e;return pe===null?ye?(oe="Infinity",ye<0&&(oe="-"+oe)):oe="NaN":(le==null?oe=pe<=Ve||pe>=Te?Ce(ge(he.c),pe):be(ge(he.c),pe,"0"):le===10&&et?(he=je(new de(he),Ye+pe+1,Ge),oe=be(ge(he.c),he.e,"0")):(Ie(le,2,He.length,"Base"),oe=Me(be(ge(he.c),pe,"0"),10,le,ye,!0)),ye<0&&he.c[0]&&(oe="-"+oe)),oe},Fe.valueOf=Fe.toJSON=function(){return ve(this)},Fe._isBigNumber=!0,Qe!=null&&de.set(Qe),de}function Ae(Qe){var Se=Qe|0;return Qe>0||Qe===Se?Se:Se-1}function ge(Qe){for(var Se,Me,ke=1,Fe=Qe.length,Ue=Qe[0]+"";ke<Fe;){for(Se=Qe[ke++]+"",Me=X-Se.length;Me--;Se="0"+Se);Ue+=Se}for(Fe=Ue.length;Ue.charCodeAt(--Fe)===48;);return Ue.slice(0,Fe+1||1)}function Be(Qe,Se){var Me,ke,Fe=Qe.c,Ue=Se.c,Ye=Qe.s,Ge=Se.s,Ve=Qe.e,Te=Se.e;if(!Ye||!Ge)return null;if(Me=Fe&&!Fe[0],ke=Ue&&!Ue[0],Me||ke)return Me?ke?0:-Ge:Ye;if(Ye!=Ge)return Ye;if(Me=Ye<0,ke=Ve==Te,!Fe||!Ue)return ke?0:!Fe^Me?1:-1;if(!ke)return Ve>Te^Me?1:-1;for(Ge=(Ve=Fe.length)<(Te=Ue.length)?Ve:Te,Ye=0;Ye<Ge;Ye++)if(Fe[Ye]!=Ue[Ye])return Fe[Ye]>Ue[Ye]^Me?1:-1;return Ve==Te?0:Ve>Te^Me?1:-1}function Ie(Qe,Se,Me,ke){if(Qe<Se||Qe>Me||Qe!==U(Qe))throw Error(q+(ke||"Argument")+(typeof Qe=="number"?Qe<Se||Qe>Me?" out of range: ":" not an integer: ":" not a primitive number: ")+String(Qe))}function _e(Qe){var Se=Qe.c.length-1;return Ae(Qe.e/X)==Se&&Qe.c[Se]%2!=0}function Ce(Qe,Se){return(Qe.length>1?Qe.charAt(0)+"."+Qe.slice(1):Qe)+(Se<0?"e":"e+")+Se}function be(Qe,Se,Me){var ke,Fe;if(Se<0){for(Fe=Me+".";++Se;Fe+=Me);Qe=Fe+Qe}else if(ke=Qe.length,++Se>ke){for(Fe=Me,Se-=ke;--Se;Fe+=Me);Qe+=Fe}else Se<ke&&(Qe=Qe.slice(0,Se)+"."+Qe.slice(Se));return Qe}Q=ce(),Q.default=Q.BigNumber=Q,F.exports?F.exports=Q:(b||(b=typeof self!="undefined"&&self?self:window),b.BigNumber=Q)})(commonjsGlobal)})(bignumber);var decoder_asm=function F(b,Q,D){var O=new b.Uint8Array(D),U=Q.pushInt,q=Q.pushInt32,G=Q.pushInt32Neg,Y=Q.pushInt64,X=Q.pushInt64Neg,ee=Q.pushFloat,re=Q.pushFloatSingle,ie=Q.pushFloatDouble,ae=Q.pushTrue,ce=Q.pushFalse,Ae=Q.pushUndefined,ge=Q.pushNull,Be=Q.pushInfinity,Ie=Q.pushInfinityNeg,_e=Q.pushNaN,Ce=Q.pushNaNNeg,be=Q.pushArrayStart,Qe=Q.pushArrayStartFixed,Se=Q.pushArrayStartFixed32,Me=Q.pushArrayStartFixed64,ke=Q.pushObjectStart,Fe=Q.pushObjectStartFixed,Ue=Q.pushObjectStartFixed32,Ye=Q.pushObjectStartFixed64,Ge=Q.pushByteString,Ve=Q.pushByteStringStart,Te=Q.pushUtf8String,De=Q.pushUtf8StringStart,xe=Q.pushSimpleUnassigned,Ne=Q.pushTagStart,$e=Q.pushTagStart4,Le=Q.pushTagStart8,Pe=Q.pushTagUnassigned,He=Q.pushBreak,et=b.Math.pow,de=0,tt=0,at=0;function dt(fe){for(fe=fe|0,de=0,tt=fe;(de|0)<(tt|0)&&(at=Pt[O[de]&255](O[de]|0)|0,!((at|0)>0)););return at|0}function je(fe){return fe=fe|0,((de|0)+(fe|0)|0)<(tt|0)?0:1}function ve(fe){return fe=fe|0,O[fe|0]<<8|O[fe+1|0]|0}function le(fe){return fe=fe|0,O[fe|0]<<24|O[fe+1|0]<<16|O[fe+2|0]<<8|O[fe+3|0]|0}function oe(fe){return fe=fe|0,U(fe|0),de=de+1|0,0}function he(fe){return fe=fe|0,je(1)|0?1:(U(O[de+1|0]|0),de=de+2|0,0)}function ye(fe){return fe=fe|0,je(2)|0?1:(U(ve(de+1|0)|0),de=de+3|0,0)}function pe(fe){return fe=fe|0,je(4)|0?1:(q(ve(de+1|0)|0,ve(de+3|0)|0),de=de+5|0,0)}function me(fe){return fe=fe|0,je(8)|0?1:(Y(ve(de+1|0)|0,ve(de+3|0)|0,ve(de+5|0)|0,ve(de+7|0)|0),de=de+9|0,0)}function ne(fe){return fe=fe|0,U(-1-(fe-32|0)|0),de=de+1|0,0}function te(fe){return fe=fe|0,je(1)|0?1:(U(-1-(O[de+1|0]|0)|0),de=de+2|0,0)}function J(fe){fe=fe|0;var Xe=0;return je(2)|0?1:(Xe=ve(de+1|0)|0,U(-1-(Xe|0)|0),de=de+3|0,0)}function W(fe){return fe=fe|0,je(4)|0?1:(G(ve(de+1|0)|0,ve(de+3|0)|0),de=de+5|0,0)}function Z(fe){return fe=fe|0,je(8)|0?1:(X(ve(de+1|0)|0,ve(de+3|0)|0,ve(de+5|0)|0,ve(de+7|0)|0),de=de+9|0,0)}function se(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return We=fe-64|0,je(We|0)|0?1:(Xe=de+1|0,Ze=(de+1|0)+(We|0)|0,Ge(Xe|0,Ze|0),de=Ze|0,0)}function ue(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return je(1)|0||(We=O[de+1|0]|0,Xe=de+2|0,Ze=(de+2|0)+(We|0)|0,je(We+1|0)|0)?1:(Ge(Xe|0,Ze|0),de=Ze|0,0)}function Ee(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return je(2)|0||(We=ve(de+1|0)|0,Xe=de+3|0,Ze=(de+3|0)+(We|0)|0,je(We+2|0)|0)?1:(Ge(Xe|0,Ze|0),de=Ze|0,0)}function we(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return je(4)|0||(We=le(de+1|0)|0,Xe=de+5|0,Ze=(de+5|0)+(We|0)|0,je(We+4|0)|0)?1:(Ge(Xe|0,Ze|0),de=Ze|0,0)}function Oe(fe){return fe=fe|0,1}function qe(fe){return fe=fe|0,Ve(),de=de+1|0,0}function Re(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return We=fe-96|0,je(We|0)|0?1:(Xe=de+1|0,Ze=(de+1|0)+(We|0)|0,Te(Xe|0,Ze|0),de=Ze|0,0)}function Je(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return je(1)|0||(We=O[de+1|0]|0,Xe=de+2|0,Ze=(de+2|0)+(We|0)|0,je(We+1|0)|0)?1:(Te(Xe|0,Ze|0),de=Ze|0,0)}function ze(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return je(2)|0||(We=ve(de+1|0)|0,Xe=de+3|0,Ze=(de+3|0)+(We|0)|0,je(We+2|0)|0)?1:(Te(Xe|0,Ze|0),de=Ze|0,0)}function ct(fe){fe=fe|0;var Xe=0,Ze=0,We=0;return je(4)|0||(We=le(de+1|0)|0,Xe=de+5|0,Ze=(de+5|0)+(We|0)|0,je(We+4|0)|0)?1:(Te(Xe|0,Ze|0),de=Ze|0,0)}function ht(fe){return fe=fe|0,1}function gt(fe){return fe=fe|0,De(),de=de+1|0,0}function Ke(fe){return fe=fe|0,Qe(fe-128|0),de=de+1|0,0}function pt(fe){return fe=fe|0,je(1)|0?1:(Qe(O[de+1|0]|0),de=de+2|0,0)}function ut(fe){return fe=fe|0,je(2)|0?1:(Qe(ve(de+1|0)|0),de=de+3|0,0)}function lt(fe){return fe=fe|0,je(4)|0?1:(Se(ve(de+1|0)|0,ve(de+3|0)|0),de=de+5|0,0)}function nt(fe){return fe=fe|0,je(8)|0?1:(Me(ve(de+1|0)|0,ve(de+3|0)|0,ve(de+5|0)|0,ve(de+7|0)|0),de=de+9|0,0)}function yt(fe){return fe=fe|0,be(),de=de+1|0,0}function st(fe){fe=fe|0;var Xe=0;return Xe=fe-160|0,je(Xe|0)|0?1:(Fe(Xe|0),de=de+1|0,0)}function Bt(fe){return fe=fe|0,je(1)|0?1:(Fe(O[de+1|0]|0),de=de+2|0,0)}function It(fe){return fe=fe|0,je(2)|0?1:(Fe(ve(de+1|0)|0),de=de+3|0,0)}function wt(fe){return fe=fe|0,je(4)|0?1:(Ue(ve(de+1|0)|0,ve(de+3|0)|0),de=de+5|0,0)}function Ct(fe){return fe=fe|0,je(8)|0?1:(Ye(ve(de+1|0)|0,ve(de+3|0)|0,ve(de+5|0)|0,ve(de+7|0)|0),de=de+9|0,0)}function vt(fe){return fe=fe|0,ke(),de=de+1|0,0}function ft(fe){return fe=fe|0,Ne(fe-192|0|0),de=de+1|0,0}function Gt(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function $t(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function Ht(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function qt(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function At(fe){return fe=fe|0,Ne(fe-192|0|0),de=de+1|0,0}function Yt(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function jt(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function Jt(fe){return fe=fe|0,Ne(fe|0),de=de+1|0,0}function bt(fe){return fe=fe|0,je(1)|0?1:(Ne(O[de+1|0]|0),de=de+2|0,0)}function _t(fe){return fe=fe|0,je(2)|0?1:(Ne(ve(de+1|0)|0),de=de+3|0,0)}function Qt(fe){return fe=fe|0,je(4)|0?1:($e(ve(de+1|0)|0,ve(de+3|0)|0),de=de+5|0,0)}function St(fe){return fe=fe|0,je(8)|0?1:(Le(ve(de+1|0)|0,ve(de+3|0)|0,ve(de+5|0)|0,ve(de+7|0)|0),de=de+9|0,0)}function ot(fe){return fe=fe|0,xe((fe|0)-224|0),de=de+1|0,0}function xt(fe){return fe=fe|0,ce(),de=de+1|0,0}function Dt(fe){return fe=fe|0,ae(),de=de+1|0,0}function kt(fe){return fe=fe|0,ge(),de=de+1|0,0}function Tt(fe){return fe=fe|0,Ae(),de=de+1|0,0}function Ft(fe){return fe=fe|0,je(1)|0?1:(xe(O[de+1|0]|0),de=de+2|0,0)}function Mt(fe){fe=fe|0;var Xe=0,Ze=0,We=1,Et=0,mt=0,Vt=0;return je(2)|0?1:(Xe=O[de+1|0]|0,Ze=O[de+2|0]|0,(Xe|0)&128&&(We=-1),Et=+(((Xe|0)&124)>>2),mt=+(((Xe|0)&3)<<8|Ze),+Et==0?ee(+(+We*5960464477539063e-23*+mt)):+Et==31?+We==1?+mt>0?_e():Be():+mt>0?Ce():Ie():ee(+(+We*et(2,+(+Et-25))*+(1024+mt))),de=de+3|0,0)}function Rt(fe){return fe=fe|0,je(4)|0?1:(re(O[de+1|0]|0,O[de+2|0]|0,O[de+3|0]|0,O[de+4|0]|0),de=de+5|0,0)}function Nt(fe){return fe=fe|0,je(8)|0?1:(ie(O[de+1|0]|0,O[de+2|0]|0,O[de+3|0]|0,O[de+4|0]|0,O[de+5|0]|0,O[de+6|0]|0,O[de+7|0]|0,O[de+8|0]|0),de=de+9|0,0)}function it(fe){return fe=fe|0,1}function Ot(fe){return fe=fe|0,He(),de=de+1|0,0}var Pt=[oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,oe,he,ye,pe,me,it,it,it,it,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,ne,te,J,W,Z,it,it,it,it,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,se,ue,Ee,we,Oe,it,it,it,qe,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Re,Je,ze,ct,ht,it,it,it,gt,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,Ke,pt,ut,lt,nt,it,it,it,yt,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,st,Bt,It,wt,Ct,it,it,it,vt,ft,ft,ft,ft,ft,ft,At,At,At,At,At,At,At,At,At,At,At,At,At,At,At,At,At,At,bt,_t,Qt,St,it,it,it,it,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,xt,Dt,kt,Tt,Ft,Mt,Rt,Nt,it,it,it,Ot];return{parse:dt}},utils$i={},constants$2={};const Bignumber$2=bignumber.exports.BigNumber;constants$2.MT={POS_INT:0,NEG_INT:1,BYTE_STRING:2,UTF8_STRING:3,ARRAY:4,MAP:5,TAG:6,SIMPLE_FLOAT:7};constants$2.TAG={DATE_STRING:0,DATE_EPOCH:1,POS_BIGINT:2,NEG_BIGINT:3,DECIMAL_FRAC:4,BIGFLOAT:5,BASE64URL_EXPECTED:21,BASE64_EXPECTED:22,BASE16_EXPECTED:23,CBOR:24,URI:32,BASE64URL:33,BASE64:34,REGEXP:35,MIME:36};constants$2.NUMBYTES={ZERO:0,ONE:24,TWO:25,FOUR:26,EIGHT:27,INDEFINITE:31};constants$2.SIMPLE={FALSE:20,TRUE:21,NULL:22,UNDEFINED:23};constants$2.SYMS={NULL:Symbol("null"),UNDEFINED:Symbol("undef"),PARENT:Symbol("parent"),BREAK:Symbol("break"),STREAM:Symbol("stream")};constants$2.SHIFT32=Math.pow(2,32);constants$2.SHIFT16=Math.pow(2,16);constants$2.MAX_SAFE_HIGH=2097151;constants$2.NEG_ONE=new Bignumber$2(-1);constants$2.TEN=new Bignumber$2(10);constants$2.TWO=new Bignumber$2(2);constants$2.PARENT={ARRAY:0,OBJECT:1,MAP:2,TAG:3,BYTE_STRING:4,UTF8_STRING:5};(function(F){const{Buffer:b}=buffer,Q=bignumber.exports.BigNumber,D=constants$2,O=D.SHIFT32,U=D.SHIFT16,q=2097151;F.parseHalf=function(X){var ee,re,ie;return ie=X[0]&128?-1:1,ee=(X[0]&124)>>2,re=(X[0]&3)<<8|X[1],ee?ee===31?ie*(re?0/0:1/0):ie*Math.pow(2,ee-25)*(1024+re):ie*5960464477539063e-23*re};function G(Y){return Y<16?"0"+Y.toString(16):Y.toString(16)}F.arrayBufferToBignumber=function(Y){const X=Y.byteLength;let ee="";for(let re=0;re<X;re++)ee+=G(Y[re]);return new Q(ee,16)},F.buildMap=Y=>{const X=new Map,ee=Object.keys(Y),re=ee.length;for(let ie=0;ie<re;ie++)X.set(ee[ie],Y[ee[ie]]);return X},F.buildInt32=(Y,X)=>Y*U+X,F.buildInt64=(Y,X,ee,re)=>{const ie=F.buildInt32(Y,X),ae=F.buildInt32(ee,re);return ie>q?new Q(ie).times(O).plus(ae):ie*O+ae},F.writeHalf=function(X,ee){const re=b.allocUnsafe(4);re.writeFloatBE(ee,0);const ie=re.readUInt32BE(0);if((ie&8191)!==0)return!1;var ae=ie>>16&32768;const ce=ie>>23&255,Ae=ie&8388607;if(ce>=113&&ce<=142)ae+=(ce-112<<10)+(Ae>>13);else if(ce>=103&&ce<113){if(Ae&(1<<126-ce)-1)return!1;ae+=Ae+8388608>>126-ce}else return!1;return X.writeUInt16BE(ae,0),!0},F.keySorter=function(Y,X){var ee=Y[0].byteLength,re=X[0].byteLength;return ee>re?1:re>ee?-1:Y[0].compare(X[0])},F.isNegativeZero=Y=>Y===0&&1/Y<0,F.nextPowerOf2=Y=>{let X=0;if(Y&&!(Y&Y-1))return Y;for(;Y!==0;)Y>>=1,X+=1;return 1<<X}})(utils$i);const constants$1=constants$2,MT$1=constants$1.MT,SIMPLE=constants$1.SIMPLE,SYMS$1=constants$1.SYMS;class Simple$1{constructor(b){if(typeof b!="number")throw new Error("Invalid Simple type: "+typeof b);if(b<0||b>255||(b|0)!==b)throw new Error("value must be a small positive integer: "+b);this.value=b}toString(){return"simple("+this.value+")"}inspect(){return"simple("+this.value+")"}encodeCBOR(b){return b._pushInt(this.value,MT$1.SIMPLE_FLOAT)}static isSimple(b){return b instanceof Simple$1}static decode(b,Q){switch(Q==null&&(Q=!0),b){case SIMPLE.FALSE:return!1;case SIMPLE.TRUE:return!0;case SIMPLE.NULL:return Q?null:SYMS$1.NULL;case SIMPLE.UNDEFINED:return Q?void 0:SYMS$1.UNDEFINED;case-1:if(!Q)throw new Error("Invalid BREAK");return SYMS$1.BREAK;default:return new Simple$1(b)}}}var simple=Simple$1;class Tagged$1{constructor(b,Q,D){if(this.tag=b,this.value=Q,this.err=D,typeof this.tag!="number")throw new Error("Invalid tag type ("+typeof this.tag+")");if(this.tag<0||(this.tag|0)!==this.tag)throw new Error("Tag must be a positive integer: "+this.tag)}toString(){return`${this.tag}(${JSON.stringify(this.value)})`}encodeCBOR(b){return b._pushTag(this.tag),b.pushAny(this.value)}convert(b){var Q,D;if(D=b!=null?b[this.tag]:void 0,typeof D!="function"&&(D=Tagged$1["_tag"+this.tag],typeof D!="function"))return this;try{return D.call(Tagged$1,this.value)}catch(O){return Q=O,this.err=Q,this}}}var tagged$1=Tagged$1;const defaultBase$1=self.location?self.location.protocol+"//"+self.location.host:"",URL$3=self.URL;class URLWithLegacySupport$2{constructor(b="",Q=defaultBase$1){this.super=new URL$3(b,Q),this.path=this.pathname+this.search,this.auth=this.username&&this.password?this.username+":"+this.password:null,this.query=this.search&&this.search.startsWith("?")?this.search.slice(1):null}get hash(){return this.super.hash}get host(){return this.super.host}get hostname(){return this.super.hostname}get href(){return this.super.href}get origin(){return this.super.origin}get password(){return this.super.password}get pathname(){return this.super.pathname}get port(){return this.super.port}get protocol(){return this.super.protocol}get search(){return this.super.search}get searchParams(){return this.super.searchParams}get username(){return this.super.username}set hash(b){this.super.hash=b}set host(b){this.super.host=b}set hostname(b){this.super.hostname=b}set href(b){this.super.href=b}set origin(b){this.super.origin=b}set password(b){this.super.password=b}set pathname(b){this.super.pathname=b}set port(b){this.super.port=b}set protocol(b){this.super.protocol=b}set search(b){this.super.search=b}set searchParams(b){this.super.searchParams=b}set username(b){this.super.username=b}createObjectURL(b){return this.super.createObjectURL(b)}revokeObjectURL(b){this.super.revokeObjectURL(b)}toJSON(){return this.super.toJSON()}toString(){return this.super.toString()}format(){return this.toString()}}function format$2(F){if(typeof F=="string")return new URL$3(F).toString();if(!(F instanceof URL$3)){const b=F.username&&F.password?`${F.username}:${F.password}@`:"",Q=F.auth?F.auth+"@":"",D=F.port?":"+F.port:"",O=F.protocol?F.protocol+"//":"",U=F.host||"",q=F.hostname||"",G=F.search||(F.query?"?"+F.query:""),Y=F.hash||"",X=F.pathname||"",ee=F.path||X+G;return`${O}${b||Q}${U||q+D}${ee}${Y}`}}var urlBrowser={URLWithLegacySupport:URLWithLegacySupport$2,URLSearchParams:self.URLSearchParams,defaultBase:defaultBase$1,format:format$2};const{URLWithLegacySupport:URLWithLegacySupport$1,format:format$1}=urlBrowser;var relative$1=(F,b={},Q={},D)=>{let O=b.protocol?b.protocol.replace(":",""):"http";O=(Q[O]||D||O)+":";let U;try{U=new URLWithLegacySupport$1(F)}catch{U={}}const q=Object.assign({},b,{protocol:O||U.protocol,host:b.host||U.host});return new URLWithLegacySupport$1(F,format$1(q)).toString()};const{URLWithLegacySupport,format,URLSearchParams:URLSearchParams$1,defaultBase}=urlBrowser,relative=relative$1;var isoUrl={URL:URLWithLegacySupport,URLSearchParams:URLSearchParams$1,format,relative,defaultBase};const{Buffer:Buffer$2}=buffer,ieee754=ieee754$1,Bignumber$1=bignumber.exports.BigNumber,parser=decoder_asm,utils$h=utils$i,c=constants$2,Simple=simple,Tagged=tagged$1,{URL:URL$2}=isoUrl;class Decoder$1{constructor(b){b=b||{},!b.size||b.size<65536?b.size=65536:b.size=utils$h.nextPowerOf2(b.size),this._heap=new ArrayBuffer(b.size),this._heap8=new Uint8Array(this._heap),this._buffer=Buffer$2.from(this._heap),this._reset(),this._knownTags=Object.assign({0:Q=>new Date(Q),1:Q=>new Date(Q*1e3),2:Q=>utils$h.arrayBufferToBignumber(Q),3:Q=>c.NEG_ONE.minus(utils$h.arrayBufferToBignumber(Q)),4:Q=>c.TEN.pow(Q[0]).times(Q[1]),5:Q=>c.TWO.pow(Q[0]).times(Q[1]),32:Q=>new URL$2(Q),35:Q=>new RegExp(Q)},b.tags),this.parser=parser({},{log:console.log.bind(console),pushInt:this.pushInt.bind(this),pushInt32:this.pushInt32.bind(this),pushInt32Neg:this.pushInt32Neg.bind(this),pushInt64:this.pushInt64.bind(this),pushInt64Neg:this.pushInt64Neg.bind(this),pushFloat:this.pushFloat.bind(this),pushFloatSingle:this.pushFloatSingle.bind(this),pushFloatDouble:this.pushFloatDouble.bind(this),pushTrue:this.pushTrue.bind(this),pushFalse:this.pushFalse.bind(this),pushUndefined:this.pushUndefined.bind(this),pushNull:this.pushNull.bind(this),pushInfinity:this.pushInfinity.bind(this),pushInfinityNeg:this.pushInfinityNeg.bind(this),pushNaN:this.pushNaN.bind(this),pushNaNNeg:this.pushNaNNeg.bind(this),pushArrayStart:this.pushArrayStart.bind(this),pushArrayStartFixed:this.pushArrayStartFixed.bind(this),pushArrayStartFixed32:this.pushArrayStartFixed32.bind(this),pushArrayStartFixed64:this.pushArrayStartFixed64.bind(this),pushObjectStart:this.pushObjectStart.bind(this),pushObjectStartFixed:this.pushObjectStartFixed.bind(this),pushObjectStartFixed32:this.pushObjectStartFixed32.bind(this),pushObjectStartFixed64:this.pushObjectStartFixed64.bind(this),pushByteString:this.pushByteString.bind(this),pushByteStringStart:this.pushByteStringStart.bind(this),pushUtf8String:this.pushUtf8String.bind(this),pushUtf8StringStart:this.pushUtf8StringStart.bind(this),pushSimpleUnassigned:this.pushSimpleUnassigned.bind(this),pushTagUnassigned:this.pushTagUnassigned.bind(this),pushTagStart:this.pushTagStart.bind(this),pushTagStart4:this.pushTagStart4.bind(this),pushTagStart8:this.pushTagStart8.bind(this),pushBreak:this.pushBreak.bind(this)},this._heap)}get _depth(){return this._parents.length}get _currentParent(){return this._parents[this._depth-1]}get _ref(){return this._currentParent.ref}_closeParent(){var b=this._parents.pop();if(b.length>0)throw new Error(`Missing ${b.length} elements`);switch(b.type){case c.PARENT.TAG:this._push(this.createTag(b.ref[0],b.ref[1]));break;case c.PARENT.BYTE_STRING:this._push(this.createByteString(b.ref,b.length));break;case c.PARENT.UTF8_STRING:this._push(this.createUtf8String(b.ref,b.length));break;case c.PARENT.MAP:if(b.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createMap(b.ref,b.length));break;case c.PARENT.OBJECT:if(b.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createObject(b.ref,b.length));break;case c.PARENT.ARRAY:this._push(this.createArray(b.ref,b.length));break}this._currentParent&&this._currentParent.type===c.PARENT.TAG&&this._dec()}_dec(){const b=this._currentParent;b.length<0||(b.length--,b.length===0&&this._closeParent())}_push(b,Q){const D=this._currentParent;switch(D.values++,D.type){case c.PARENT.ARRAY:case c.PARENT.BYTE_STRING:case c.PARENT.UTF8_STRING:D.length>-1?this._ref[this._ref.length-D.length]=b:this._ref.push(b),this._dec();break;case c.PARENT.OBJECT:D.tmpKey!=null?(this._ref[D.tmpKey]=b,D.tmpKey=null,this._dec()):(D.tmpKey=b,typeof D.tmpKey!="string"&&(D.type=c.PARENT.MAP,D.ref=utils$h.buildMap(D.ref)));break;case c.PARENT.MAP:D.tmpKey!=null?(this._ref.set(D.tmpKey,b),D.tmpKey=null,this._dec()):D.tmpKey=b;break;case c.PARENT.TAG:this._ref.push(b),Q||this._dec();break;default:throw new Error("Unknown parent type")}}_createParent(b,Q,D){this._parents[this._depth]={type:Q,length:D,ref:b,values:0,tmpKey:null}}_reset(){this._res=[],this._parents=[{type:c.PARENT.ARRAY,length:-1,ref:this._res,values:0,tmpKey:null}]}createTag(b,Q){const D=this._knownTags[b];return D?D(Q):new Tagged(b,Q)}createMap(b,Q){return b}createObject(b,Q){return b}createArray(b,Q){return b}createByteString(b,Q){return Buffer$2.concat(b)}createByteStringFromHeap(b,Q){return b===Q?Buffer$2.alloc(0):Buffer$2.from(this._heap.slice(b,Q))}createInt(b){return b}createInt32(b,Q){return utils$h.buildInt32(b,Q)}createInt64(b,Q,D,O){return utils$h.buildInt64(b,Q,D,O)}createFloat(b){return b}createFloatSingle(b,Q,D,O){return ieee754.read([b,Q,D,O],0,!1,23,4)}createFloatDouble(b,Q,D,O,U,q,G,Y){return ieee754.read([b,Q,D,O,U,q,G,Y],0,!1,52,8)}createInt32Neg(b,Q){return-1-utils$h.buildInt32(b,Q)}createInt64Neg(b,Q,D,O){const U=utils$h.buildInt32(b,Q),q=utils$h.buildInt32(D,O);return U>c.MAX_SAFE_HIGH?c.NEG_ONE.minus(new Bignumber$1(U).times(c.SHIFT32).plus(q)):-1-(U*c.SHIFT32+q)}createTrue(){return!0}createFalse(){return!1}createNull(){return null}createUndefined(){}createInfinity(){return 1/0}createInfinityNeg(){return-1/0}createNaN(){return NaN}createNaNNeg(){return NaN}createUtf8String(b,Q){return b.join("")}createUtf8StringFromHeap(b,Q){return b===Q?"":this._buffer.toString("utf8",b,Q)}createSimpleUnassigned(b){return new Simple(b)}pushInt(b){this._push(this.createInt(b))}pushInt32(b,Q){this._push(this.createInt32(b,Q))}pushInt64(b,Q,D,O){this._push(this.createInt64(b,Q,D,O))}pushFloat(b){this._push(this.createFloat(b))}pushFloatSingle(b,Q,D,O){this._push(this.createFloatSingle(b,Q,D,O))}pushFloatDouble(b,Q,D,O,U,q,G,Y){this._push(this.createFloatDouble(b,Q,D,O,U,q,G,Y))}pushInt32Neg(b,Q){this._push(this.createInt32Neg(b,Q))}pushInt64Neg(b,Q,D,O){this._push(this.createInt64Neg(b,Q,D,O))}pushTrue(){this._push(this.createTrue())}pushFalse(){this._push(this.createFalse())}pushNull(){this._push(this.createNull())}pushUndefined(){this._push(this.createUndefined())}pushInfinity(){this._push(this.createInfinity())}pushInfinityNeg(){this._push(this.createInfinityNeg())}pushNaN(){this._push(this.createNaN())}pushNaNNeg(){this._push(this.createNaNNeg())}pushArrayStart(){this._createParent([],c.PARENT.ARRAY,-1)}pushArrayStartFixed(b){this._createArrayStartFixed(b)}pushArrayStartFixed32(b,Q){const D=utils$h.buildInt32(b,Q);this._createArrayStartFixed(D)}pushArrayStartFixed64(b,Q,D,O){const U=utils$h.buildInt64(b,Q,D,O);this._createArrayStartFixed(U)}pushObjectStart(){this._createObjectStartFixed(-1)}pushObjectStartFixed(b){this._createObjectStartFixed(b)}pushObjectStartFixed32(b,Q){const D=utils$h.buildInt32(b,Q);this._createObjectStartFixed(D)}pushObjectStartFixed64(b,Q,D,O){const U=utils$h.buildInt64(b,Q,D,O);this._createObjectStartFixed(U)}pushByteStringStart(){this._parents[this._depth]={type:c.PARENT.BYTE_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushByteString(b,Q){this._push(this.createByteStringFromHeap(b,Q))}pushUtf8StringStart(){this._parents[this._depth]={type:c.PARENT.UTF8_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushUtf8String(b,Q){this._push(this.createUtf8StringFromHeap(b,Q))}pushSimpleUnassigned(b){this._push(this.createSimpleUnassigned(b))}pushTagStart(b){this._parents[this._depth]={type:c.PARENT.TAG,length:1,ref:[b]}}pushTagStart4(b,Q){this.pushTagStart(utils$h.buildInt32(b,Q))}pushTagStart8(b,Q,D,O){this.pushTagStart(utils$h.buildInt64(b,Q,D,O))}pushTagUnassigned(b){this._push(this.createTag(b))}pushBreak(){if(this._currentParent.length>-1)throw new Error("Unexpected break");this._closeParent()}_createObjectStartFixed(b){if(b===0){this._push(this.createObject({}));return}this._createParent({},c.PARENT.OBJECT,b)}_createArrayStartFixed(b){if(b===0){this._push(this.createArray([]));return}this._createParent(new Array(b),c.PARENT.ARRAY,b)}_decode(b){if(b.byteLength===0)throw new Error("Input too short");this._reset(),this._heap8.set(b);const Q=this.parser.parse(b.byteLength);if(this._depth>1){for(;this._currentParent.length===0;)this._closeParent();if(this._depth>1)throw new Error("Undeterminated nesting")}if(Q>0)throw new Error("Failed to parse");if(this._res.length===0)throw new Error("No valid result")}decodeFirst(b){return this._decode(b),this._res[0]}decodeAll(b){return this._decode(b),this._res}static decode(b,Q){return typeof b=="string"&&(b=Buffer$2.from(b,Q||"hex")),new Decoder$1({size:b.length}).decodeFirst(b)}static decodeAll(b,Q){return typeof b=="string"&&(b=Buffer$2.from(b,Q||"hex")),new Decoder$1({size:b.length}).decodeAll(b)}}Decoder$1.decodeFirst=Decoder$1.decode;var decoder=Decoder$1;const{Buffer:Buffer$1}=buffer,Decoder=decoder,utils$g=utils$i;class Diagnose extends Decoder{createTag(b,Q){return`${b}(${Q})`}createInt(b){return super.createInt(b).toString()}createInt32(b,Q){return super.createInt32(b,Q).toString()}createInt64(b,Q,D,O){return super.createInt64(b,Q,D,O).toString()}createInt32Neg(b,Q){return super.createInt32Neg(b,Q).toString()}createInt64Neg(b,Q,D,O){return super.createInt64Neg(b,Q,D,O).toString()}createTrue(){return"true"}createFalse(){return"false"}createFloat(b){const Q=super.createFloat(b);return utils$g.isNegativeZero(b)?"-0_1":`${Q}_1`}createFloatSingle(b,Q,D,O){return`${super.createFloatSingle(b,Q,D,O)}_2`}createFloatDouble(b,Q,D,O,U,q,G,Y){return`${super.createFloatDouble(b,Q,D,O,U,q,G,Y)}_3`}createByteString(b,Q){const D=b.join(", ");return Q===-1?`(_ ${D})`:`h'${D}`}createByteStringFromHeap(b,Q){return`h'${Buffer$1.from(super.createByteStringFromHeap(b,Q)).toString("hex")}'`}createInfinity(){return"Infinity_1"}createInfinityNeg(){return"-Infinity_1"}createNaN(){return"NaN_1"}createNaNNeg(){return"-NaN_1"}createNull(){return"null"}createUndefined(){return"undefined"}createSimpleUnassigned(b){return`simple(${b})`}createArray(b,Q){const D=super.createArray(b,Q);return Q===-1?`[_ ${D.join(", ")}]`:`[${D.join(", ")}]`}createMap(b,Q){const D=super.createMap(b),O=Array.from(D.keys()).reduce(collectObject(D),"");return Q===-1?`{_ ${O}}`:`{${O}}`}createObject(b,Q){const D=super.createObject(b),O=Object.keys(D).reduce(collectObject(D),"");return Q===-1?`{_ ${O}}`:`{${O}}`}createUtf8String(b,Q){const D=b.join(", ");return Q===-1?`(_ ${D})`:`"${D}"`}createUtf8StringFromHeap(b,Q){return`"${Buffer$1.from(super.createUtf8StringFromHeap(b,Q)).toString("utf8")}"`}static diagnose(b,Q){return typeof b=="string"&&(b=Buffer$1.from(b,Q||"hex")),new Diagnose().decodeFirst(b)}}var diagnose=Diagnose;function collectObject(F){return(b,Q)=>b?`${b}, ${Q}: ${F[Q]}`:`${Q}: ${F[Q]}`}const{Buffer}=buffer,{URL:URL$1}=isoUrl,Bignumber=bignumber.exports.BigNumber,utils$f=utils$i,constants=constants$2,MT=constants.MT,NUMBYTES=constants.NUMBYTES,SHIFT32=constants.SHIFT32,SYMS=constants.SYMS,TAG=constants.TAG,HALF=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.TWO,FLOAT=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.FOUR,DOUBLE=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.EIGHT,TRUE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.TRUE,FALSE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.FALSE,UNDEFINED=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.UNDEFINED,NULL=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.NULL,MAXINT_BN=new Bignumber("0x20000000000000"),BUF_NAN=Buffer.from("f97e00","hex"),BUF_INF_NEG=Buffer.from("f9fc00","hex"),BUF_INF_POS=Buffer.from("f97c00","hex");function toType(F){return{}.toString.call(F).slice(8,-1)}class Encoder{constructor(b){b=b||{},this.streaming=typeof b.stream=="function",this.onData=b.stream,this.semanticTypes=[[URL$1,this._pushUrl],[Bignumber,this._pushBigNumber]];const Q=b.genTypes||[],D=Q.length;for(let O=0;O<D;O++)this.addSemanticType(Q[O][0],Q[O][1]);this._reset()}addSemanticType(b,Q){const D=this.semanticTypes.length;for(let O=0;O<D;O++)if(this.semanticTypes[O][0]===b){const q=this.semanticTypes[O][1];return this.semanticTypes[O][1]=Q,q}return this.semanticTypes.push([b,Q]),null}push(b){return b&&(this.result[this.offset]=b,this.resultMethod[this.offset]=0,this.resultLength[this.offset]=b.length,this.offset++,this.streaming&&this.onData(this.finalize())),!0}pushWrite(b,Q,D){return this.result[this.offset]=b,this.resultMethod[this.offset]=Q,this.resultLength[this.offset]=D,this.offset++,this.streaming&&this.onData(this.finalize()),!0}_pushUInt8(b){return this.pushWrite(b,1,1)}_pushUInt16BE(b){return this.pushWrite(b,2,2)}_pushUInt32BE(b){return this.pushWrite(b,3,4)}_pushDoubleBE(b){return this.pushWrite(b,4,8)}_pushNaN(){return this.push(BUF_NAN)}_pushInfinity(b){const Q=b<0?BUF_INF_NEG:BUF_INF_POS;return this.push(Q)}_pushFloat(b){const Q=Buffer.allocUnsafe(2);if(utils$f.writeHalf(Q,b)&&utils$f.parseHalf(Q)===b)return this._pushUInt8(HALF)&&this.push(Q);const D=Buffer.allocUnsafe(4);return D.writeFloatBE(b,0),D.readFloatBE(0)===b?this._pushUInt8(FLOAT)&&this.push(D):this._pushUInt8(DOUBLE)&&this._pushDoubleBE(b)}_pushInt(b,Q,D){const O=Q<<5;return b<24?this._pushUInt8(O|b):b<=255?this._pushUInt8(O|NUMBYTES.ONE)&&this._pushUInt8(b):b<=65535?this._pushUInt8(O|NUMBYTES.TWO)&&this._pushUInt16BE(b):b<=4294967295?this._pushUInt8(O|NUMBYTES.FOUR)&&this._pushUInt32BE(b):b<=Number.MAX_SAFE_INTEGER?this._pushUInt8(O|NUMBYTES.EIGHT)&&this._pushUInt32BE(Math.floor(b/SHIFT32))&&this._pushUInt32BE(b%SHIFT32):Q===MT.NEG_INT?this._pushFloat(D):this._pushFloat(b)}_pushIntNum(b){return b<0?this._pushInt(-b-1,MT.NEG_INT,b):this._pushInt(b,MT.POS_INT)}_pushNumber(b){switch(!1){case b===b:return this._pushNaN(b);case isFinite(b):return this._pushInfinity(b);case b%1!==0:return this._pushIntNum(b);default:return this._pushFloat(b)}}_pushString(b){const Q=Buffer.byteLength(b,"utf8");return this._pushInt(Q,MT.UTF8_STRING)&&this.pushWrite(b,5,Q)}_pushBoolean(b){return this._pushUInt8(b?TRUE:FALSE)}_pushUndefined(b){return this._pushUInt8(UNDEFINED)}_pushArray(b,Q){const D=Q.length;if(!b._pushInt(D,MT.ARRAY))return!1;for(let O=0;O<D;O++)if(!b.pushAny(Q[O]))return!1;return!0}_pushTag(b){return this._pushInt(b,MT.TAG)}_pushDate(b,Q){return b._pushTag(TAG.DATE_EPOCH)&&b.pushAny(Math.round(Q/1e3))}_pushBuffer(b,Q){return b._pushInt(Q.length,MT.BYTE_STRING)&&b.push(Q)}_pushNoFilter(b,Q){return b._pushBuffer(b,Q.slice())}_pushRegexp(b,Q){return b._pushTag(TAG.REGEXP)&&b.pushAny(Q.source)}_pushSet(b,Q){if(!b._pushInt(Q.size,MT.ARRAY))return!1;for(const D of Q)if(!b.pushAny(D))return!1;return!0}_pushUrl(b,Q){return b._pushTag(TAG.URI)&&b.pushAny(Q.format())}_pushBigint(b){let Q=TAG.POS_BIGINT;b.isNegative()&&(b=b.negated().minus(1),Q=TAG.NEG_BIGINT);let D=b.toString(16);D.length%2&&(D="0"+D);const O=Buffer.from(D,"hex");return this._pushTag(Q)&&this._pushBuffer(this,O)}_pushBigNumber(b,Q){if(Q.isNaN())return b._pushNaN();if(!Q.isFinite())return b._pushInfinity(Q.isNegative()?-1/0:1/0);if(Q.isInteger())return b._pushBigint(Q);if(!(b._pushTag(TAG.DECIMAL_FRAC)&&b._pushInt(2,MT.ARRAY)))return!1;const D=Q.decimalPlaces(),O=Q.multipliedBy(new Bignumber(10).pow(D));return b._pushIntNum(-D)?O.abs().isLessThan(MAXINT_BN)?b._pushIntNum(O.toNumber()):b._pushBigint(O):!1}_pushMap(b,Q){return b._pushInt(Q.size,MT.MAP)?this._pushRawMap(Q.size,Array.from(Q)):!1}_pushObject(b){if(!b)return this._pushUInt8(NULL);for(var Q=this.semanticTypes.length,D=0;D<Q;D++)if(b instanceof this.semanticTypes[D][0])return this.semanticTypes[D][1].call(b,this,b);var O=b.encodeCBOR;if(typeof O=="function")return O.call(b,this);var U=Object.keys(b),q=U.length;return this._pushInt(q,MT.MAP)?this._pushRawMap(q,U.map(G=>[G,b[G]])):!1}_pushRawMap(b,Q){Q=Q.map(function(O){return O[0]=Encoder.encode(O[0]),O}).sort(utils$f.keySorter);for(var D=0;D<b;D++)if(!this.push(Q[D][0])||!this.pushAny(Q[D][1]))return!1;return!0}write(b){return this.pushAny(b)}pushAny(b){var Q=toType(b);switch(Q){case"Number":return this._pushNumber(b);case"String":return this._pushString(b);case"Boolean":return this._pushBoolean(b);case"Object":return this._pushObject(b);case"Array":return this._pushArray(this,b);case"Uint8Array":return this._pushBuffer(this,Buffer.isBuffer(b)?b:Buffer.from(b));case"Null":return this._pushUInt8(NULL);case"Undefined":return this._pushUndefined(b);case"Map":return this._pushMap(this,b);case"Set":return this._pushSet(this,b);case"URL":return this._pushUrl(this,b);case"BigNumber":return this._pushBigNumber(this,b);case"Date":return this._pushDate(this,b);case"RegExp":return this._pushRegexp(this,b);case"Symbol":switch(b){case SYMS.NULL:return this._pushObject(null);case SYMS.UNDEFINED:return this._pushUndefined(void 0);default:throw new Error("Unknown symbol: "+b.toString())}default:throw new Error("Unknown type: "+typeof b+", "+(b?b.toString():""))}}finalize(){if(this.offset===0)return null;for(var b=this.result,Q=this.resultLength,D=this.resultMethod,O=this.offset,U=0,q=0;q<O;q++)U+=Q[q];var G=Buffer.allocUnsafe(U),Y=0,X=0;for(q=0;q<O;q++){switch(X=Q[q],D[q]){case 0:b[q].copy(G,Y);break;case 1:G.writeUInt8(b[q],Y,!0);break;case 2:G.writeUInt16BE(b[q],Y,!0);break;case 3:G.writeUInt32BE(b[q],Y,!0);break;case 4:G.writeDoubleBE(b[q],Y,!0);break;case 5:G.write(b[q],Y,X,"utf8");break;default:throw new Error("unkown method")}Y+=X}var ee=G;return this._reset(),ee}_reset(){this.result=[],this.resultMethod=[],this.resultLength=[],this.offset=0}static encode(b){const Q=new Encoder;if(!Q.pushAny(b))throw new Error("Failed to encode input");return Q.finalize()}}var encoder=Encoder;(function(F){F.Diagnose=diagnose,F.Decoder=decoder,F.Encoder=encoder,F.Simple=simple,F.Tagged=tagged$1,F.decodeAll=F.Decoder.decodeAll,F.decodeFirst=F.Decoder.decodeFirst,F.diagnose=F.Diagnose.diagnose,F.encode=F.Encoder.encode,F.decode=F.Decoder.decode,F.leveldb={decode:F.Decoder.decodeAll,encode:F.Encoder.encode,buffer:!0,name:"cbor"}})(src$1);function concat(...F){const b=new Uint8Array(F.reduce((D,O)=>D+O.byteLength,0));let Q=0;for(const D of F)b.set(new Uint8Array(D),Q),Q+=D.byteLength;return b.buffer}const hexRe=new RegExp(/^([0-9A-F]{2})*$/i);function fromHex(F){if(!hexRe.test(F))throw new Error("Invalid hexadecimal string.");const b=[...F].reduce((Q,D,O)=>(Q[O/2|0]=(Q[O/2|0]||"")+D,Q),[]).map(Q=>Number.parseInt(Q,16));return new Uint8Array(b).buffer}globalThis&&globalThis.__rest;new TextEncoder().encode(`
ic-request`);var src={},serializer$1={},value={};Object.defineProperty(value,"__esModule",{value:!0});const MAX_U64_NUMBER=9007199254740992;function _concat(F,...b){const Q=new Uint8Array(F.byteLength+b.reduce((O,U)=>O+U.byteLength,0));Q.set(new Uint8Array(F),0);let D=F.byteLength;for(const O of b)Q.set(new Uint8Array(O),D),D+=O.byteLength;return Q.buffer}function _serializeValue(F,b,Q){Q=Q.replace(/[^0-9a-fA-F]/g,"");const D=2**(b-24);Q=Q.slice(-D*2).padStart(D*2,"0");const O=[(F<<5)+b].concat(Q.match(/../g).map(U=>parseInt(U,16)));return new Uint8Array(O).buffer}function _serializeNumber(F,b){if(b<24)return new Uint8Array([(F<<5)+b]).buffer;{const Q=b<=255?24:b<=65535?25:b<=4294967295?26:27;return _serializeValue(F,Q,b.toString(16))}}function _serializeString(F){const b=[];for(let Q=0;Q<F.length;Q++){let D=F.charCodeAt(Q);D<128?b.push(D):D<2048?b.push(192|D>>6,128|D&63):D<55296||D>=57344?b.push(224|D>>12,128|D>>6&63,128|D&63):(Q++,D=(D&1023)<<10|F.charCodeAt(Q)&1023,b.push(240|D>>18,128|D>>12&63,128|D>>6&63,128|D&63))}return _concat(new Uint8Array(_serializeNumber(3,F.length)),new Uint8Array(b))}function tagged(F,b){if(F==14277111)return _concat(new Uint8Array([217,217,247]),b);if(F<24)return _concat(new Uint8Array([(6<<5)+F]),b);{const Q=F<=255?24:F<=65535?25:F<=4294967295?26:27,D=2**(Q-24),O=F.toString(16).slice(-D*2).padStart(D*2,"0"),U=[(6<<5)+Q].concat(O.match(/../g).map(q=>parseInt(q,16)));return new Uint8Array(U).buffer}}value.tagged=tagged;function raw(F){return new Uint8Array(F).buffer}value.raw=raw;function uSmall(F){if(isNaN(F))throw new RangeError("Invalid number.");F=Math.min(Math.max(0,F),23);const b=[(0<<5)+F];return new Uint8Array(b).buffer}value.uSmall=uSmall;function u8(F,b){if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,F),255),F=F.toString(16),_serializeValue(0,24,F)}value.u8=u8;function u16(F,b){if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,F),65535),F=F.toString(16),_serializeValue(0,25,F)}value.u16=u16;function u32(F,b){if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,F),4294967295),F=F.toString(16),_serializeValue(0,26,F)}value.u32=u32;function u64(F,b){if(typeof F=="string"&&b==16){if(F.match(/[^0-9a-fA-F]/))throw new RangeError("Invalid number.");return _serializeValue(0,27,F)}if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,F),MAX_U64_NUMBER),F=F.toString(16),_serializeValue(0,27,F)}value.u64=u64;function iSmall(F){if(isNaN(F))throw new RangeError("Invalid number.");if(F===0)return uSmall(0);F=Math.min(Math.max(0,-F),24)-1;const b=[(1<<5)+F];return new Uint8Array(b).buffer}value.iSmall=iSmall;function i8(F,b){if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,-F-1),255),F=F.toString(16),_serializeValue(1,24,F)}value.i8=i8;function i16(F,b){if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,-F-1),65535),F=F.toString(16),_serializeValue(1,25,F)}value.i16=i16;function i32(F,b){if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,-F-1),4294967295),F=F.toString(16),_serializeValue(1,26,F)}value.i32=i32;function i64(F,b){if(typeof F=="string"&&b==16){if(F.startsWith("-")?F=F.slice(1):F="0",F.match(/[^0-9a-fA-F]/)||F.length>16)throw new RangeError("Invalid number.");let Q=!1,D=F.split("").reduceRight((O,U)=>{if(Q)return U+O;let q=parseInt(U,16)-1;return q>=0?(Q=!0,q.toString(16)+O):"f"+O},"");return Q?_serializeValue(1,27,D):u64(0)}if(F=parseInt(""+F,b),isNaN(F))throw new RangeError("Invalid number.");return F=Math.min(Math.max(0,-F-1),9007199254740992),F=F.toString(16),_serializeValue(1,27,F)}value.i64=i64;function number(F){return F>=0?F<24?uSmall(F):F<=255?u8(F):F<=65535?u16(F):F<=4294967295?u32(F):u64(F):F>=-24?iSmall(F):F>=-255?i8(F):F>=-65535?i16(F):F>=-4294967295?i32(F):i64(F)}value.number=number;function bytes(F){return _concat(_serializeNumber(2,F.byteLength),F)}value.bytes=bytes;function string(F){return _serializeString(F)}value.string=string;function array(F){return _concat(_serializeNumber(4,F.length),...F)}value.array=array;function map(F,b=!1){F instanceof Map||(F=new Map(Object.entries(F)));let Q=Array.from(F.entries());return b&&(Q=Q.sort(([D],[O])=>D.localeCompare(O))),_concat(_serializeNumber(5,F.size),...Q.map(([D,O])=>_concat(_serializeString(D),O)))}value.map=map;function singleFloat(F){const b=new Float32Array([F]);return _concat(new Uint8Array([(7<<5)+26]),new Uint8Array(b.buffer))}value.singleFloat=singleFloat;function doubleFloat(F){const b=new Float64Array([F]);return _concat(new Uint8Array([(7<<5)+27]),new Uint8Array(b.buffer))}value.doubleFloat=doubleFloat;function bool(F){return F?true_():false_()}value.bool=bool;function true_(){return raw(new Uint8Array([(7<<5)+21]))}value.true_=true_;function false_(){return raw(new Uint8Array([(7<<5)+20]))}value.false_=false_;function null_(){return raw(new Uint8Array([(7<<5)+22]))}value.null_=null_;function undefined_(){return raw(new Uint8Array([(7<<5)+23]))}value.undefined_=undefined_;var __importStar=commonjsGlobal&&commonjsGlobal.__importStar||function(F){if(F&&F.__esModule)return F;var b={};if(F!=null)for(var Q in F)Object.hasOwnProperty.call(F,Q)&&(b[Q]=F[Q]);return b.default=F,b};Object.defineProperty(serializer$1,"__esModule",{value:!0});const cbor=__importStar(value),BufferClasses=[ArrayBuffer,Uint8Array,Uint16Array,Uint32Array,Int8Array,Int16Array,Int32Array,Float32Array,Float64Array];class JsonDefaultCborEncoder{constructor(b,Q=!1){this._serializer=b,this._stable=Q,this.name="jsonDefault",this.priority=-100}match(b){return["undefined","boolean","number","string","object"].indexOf(typeof b)!=-1}encode(b){switch(typeof b){case"undefined":return cbor.undefined_();case"boolean":return cbor.bool(b);case"number":return Math.floor(b)===b?cbor.number(b):cbor.doubleFloat(b);case"string":return cbor.string(b);case"object":if(b===null)return cbor.null_();if(Array.isArray(b))return cbor.array(b.map(Q=>this._serializer.serializeValue(Q)));if(BufferClasses.find(Q=>b instanceof Q))return cbor.bytes(b.buffer);if(Object.getOwnPropertyNames(b).indexOf("toJSON")!==-1)return this.encode(b.toJSON());if(b instanceof Map){const Q=new Map;for(const[D,O]of b.entries())Q.set(D,this._serializer.serializeValue(O));return cbor.map(Q,this._stable)}else{const Q=new Map;for(const[D,O]of Object.entries(b))Q.set(D,this._serializer.serializeValue(O));return cbor.map(Q,this._stable)}default:throw new Error("Invalid value.")}}}serializer$1.JsonDefaultCborEncoder=JsonDefaultCborEncoder;class ToCborEncoder{constructor(){this.name="cborEncoder",this.priority=-90}match(b){return typeof b=="object"&&typeof b.toCBOR=="function"}encode(b){return b.toCBOR()}}serializer$1.ToCborEncoder=ToCborEncoder;class CborSerializer{constructor(){this._encoders=new Set}static withDefaultEncoders(b=!1){const Q=new this;return Q.addEncoder(new JsonDefaultCborEncoder(Q,b)),Q.addEncoder(new ToCborEncoder),Q}removeEncoder(b){for(const Q of this._encoders.values())Q.name==b&&this._encoders.delete(Q)}addEncoder(b){this._encoders.add(b)}getEncoderFor(b){let Q=null;for(const D of this._encoders)(!Q||D.priority>Q.priority)&&D.match(b)&&(Q=D);if(Q===null)throw new Error("Could not find an encoder for value.");return Q}serializeValue(b){return this.getEncoderFor(b).encode(b)}serialize(b){return this.serializeValue(b)}}serializer$1.CborSerializer=CborSerializer;class SelfDescribeCborSerializer extends CborSerializer{serialize(b){return cbor.raw(new Uint8Array([...new Uint8Array([217,217,247]),...new Uint8Array(super.serializeValue(b))]))}}serializer$1.SelfDescribeCborSerializer=SelfDescribeCborSerializer;(function(F){function b(O){for(var U in O)F.hasOwnProperty(U)||(F[U]=O[U])}var Q=commonjsGlobal&&commonjsGlobal.__importStar||function(O){if(O&&O.__esModule)return O;var U={};if(O!=null)for(var q in O)Object.hasOwnProperty.call(O,q)&&(U[q]=O[q]);return U.default=O,U};Object.defineProperty(F,"__esModule",{value:!0}),b(serializer$1);const D=Q(value);F.value=D})(src);class PrincipalEncoder{get name(){return"Principal"}get priority(){return 0}match(b){return b&&b._isPrincipal===!0}encode(b){return src.value.bytes(b.toUint8Array())}}class BufferEncoder{get name(){return"Buffer"}get priority(){return 1}match(b){return b instanceof ArrayBuffer||ArrayBuffer.isView(b)}encode(b){return src.value.bytes(new Uint8Array(b))}}class BigIntEncoder{get name(){return"BigInt"}get priority(){return 1}match(b){return typeof b=="bigint"}encode(b){return b>BigInt(0)?src.value.tagged(2,src.value.bytes(fromHex(b.toString(16)))):src.value.tagged(3,src.value.bytes(fromHex((BigInt("-1")*b).toString(16))))}}const serializer=src.SelfDescribeCborSerializer.withDefaultEncoders(!0);serializer.addEncoder(new PrincipalEncoder);serializer.addEncoder(new BufferEncoder);serializer.addEncoder(new BigIntEncoder);var CborTag;(function(F){F[F.Uint64LittleEndian=71]="Uint64LittleEndian",F[F.Semantic=55799]="Semantic"})(CborTag||(CborTag={}));class Uint8ArrayDecoder extends src$1.Decoder{createByteString(b){return concat(...b)}createByteStringFromHeap(b,Q){return b===Q?new ArrayBuffer(0):new Uint8Array(this._heap.slice(b,Q))}}var SubmitRequestType;(function(F){F.Call="call"})(SubmitRequestType||(SubmitRequestType={}));BigInt(1e6);BigInt(60*1e3);var RequestStatusResponseStatus;(function(F){F.Received="received",F.Processing="processing",F.Replied="replied",F.Rejected="rejected",F.Unknown="unknown",F.Done="done"})(RequestStatusResponseStatus||(RequestStatusResponseStatus={}));var ProxyMessageKind;(function(F){F.Error="err",F.GetPrincipal="gp",F.GetPrincipalResponse="gpr",F.Query="q",F.QueryResponse="qr",F.Call="c",F.CallResponse="cr",F.ReadState="rs",F.ReadStateResponse="rsr",F.Status="s",F.StatusResponse="sr"})(ProxyMessageKind||(ProxyMessageKind={}));var decode;(function(){for(var F="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b=new Uint8Array(256),Q=0;Q<F.length;Q++)b[F.charCodeAt(Q)]=Q;decode=function(D){var O=D.length*.75,U=D.length,q,G=0,Y,X,ee,re;D[D.length-1]==="="&&(O--,D[D.length-2]==="="&&O--);var ie=new ArrayBuffer(O),ae=new Uint8Array(ie);for(q=0;q<U;q+=4)Y=b[D.charCodeAt(q)],X=b[D.charCodeAt(q+1)],ee=b[D.charCodeAt(q+2)],re=b[D.charCodeAt(q+3)],ae[G++]=Y<<2|X>>4,ae[G++]=(X&15)<<4|ee>>2,ae[G++]=(ee&3)<<6|re&63;return ie}})();const wasmBytesBase64="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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFqIAI3AwBCACECIAFBCGoiAUE4Rw0ACyAAEFQLCgAgACgCBEF4cQsKACAAKAIEQQFxCwoAIAAoAgxBAXELCgAgACgCDEEBdgsZACAAIAFByLvAACgCACIAQQIgABsRAAAAC58BAQN/AkAgASICQQ9NBEAgACEBDAELIABBACAAa0EDcSIEaiEDIAQEQCAAIQEDQCABQQA6AAAgAUEBaiIBIANJDQALCyADIAIgBGsiAkF8cSIEaiEBIARBAEoEQANAIANBADYCACADQQRqIgMgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAFBADoAACABQQFqIgEgAkkNAAsLIAALuAIBB38CQCACIgRBD00EQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsHACAAIAFqCwcAIAAgAWsLBwAgAEEIagsHACAAQQhrCwQAQQALDQBC0oGc3sHF/O+ofwsNAEKL5OeV8riP17h/Cw0AQu7u59vMr5Ho5gALAwABCzABAn8DQCADIAJHBEAgACADaiIEIAQpAwAgASADaikDAHw3AwAgA0EIaiEDDAELCwswAQJ/A0AgAyACRwRAIAAgA2oiBCAEKQMAIAEgA2opAwB9NwMAIANBCGohAwwBCwsLC/k5BwBBgIDAAAsBBABBuIDAAAupAXNyYy9ibHMxMjM4MS9lY3AucnMAAAAAAKuq//////4B7v//VKz//wLqQWIPaw8qAcOc/UoUzhMCS3dk16xLQwLt6caSpvlfAqMeEaABAAAAOAAQABMAAADOAQAAFgAAADgAEAATAAAA0gEAABEAAAA4ABAAEwAAANQBAAAaAAAAOAAQABMAAAB0BAAAEQAAADgAEAATAAAAeQQAAA0AAAABAAEAAAABAjQAQZCCwAAL2SUdTFgtCCj0ANdfPjho49sAickaiP2ugQGiY6OauQ9OAZjqsIJJbckCgE5az1A67gCKaUQBAAAAAOArF47pSMwBdKk6W4xWyACiVe817/wUAOeCwgE9ycMDwRYgO+4+dQC6xGIADCBaANEIKS4BAAAAuCHovWIQxQDf/hWXO0ilAYsIMfwD1L0BuxH8JzRS0gMd8BLaG9ejASo9zjbdL9sCyGJ0HwAAAAAp0qKLLrrIAepHTpMt4MYCJIy2xiS88QMCj/DeIIv4AZ3XMT3u7YEDiKVHL5yDiQNIwghuAAAAAHv7BRY/32cCMnsXCuPH3QJpb4YUOwA2AytUW/7hmXcDzH36DVtW0gECO7ac+IFzAgfaIQMBAAAAngw5vmcQJANf3skAt8tCAjH6t7FLr0sBjJ1lcjHoAALLLt0ijxNdAdQNgwvx6fMC4fixaQEAAAAX45eEaphxAVul062lfKUA+uQdXYySbAEWi9JVfZ6zAXU7xA2ZvmMBzSzkHvHjaQIfz9OAAAAAAI7I8OMYVssA52sdPTI+8gGbM1MnD+9iAAuaxjZtnawC5W01U34R0QAhDh26+PZqAHDngXsBAAAAhO05oSXy1wG3sktBMEqUANqosoacjyECI0CGMz48mQCGFbG/UuaKA7DJjVpKE/kDU2Xt1gAAAACDKWVvxsETAXNGz7lyS8MBCAr5aH4JuQJOe27mSWX3AbE827VKp/cDBkh0wP/EXANQMgxjAQAAANmViKzpTBUBFPGdB8wbigKFicH6glm2Arsh/OxfSWgBmduZVI4R5AMsrZDZEH1mAKMml+kAAAAAYWibHWSIswHxZBzEOJe4ATM1CDMbnygDzMaX/DaqlQHk9dcSVOUHA3SCgdNtG/MDZnGOdwEAAACw3J6snZ8XAPinXIJKjw8DWMkljsYeUALjoZUPZqXMASQDzhuaCtEBMRJEBzueXQLbBUDVAAAAALuDy7Px7jQAutUwxrypPAKDtIYeDcczApfVXxCqvWwB5xd8HKhHIQKsLmLBy+pQAj7tlHIBAAAAt0lGc2IWrAKrW4u5fLUwAGGFLE7bbLUDicl/AVyLIgI+MGuFFZjZAQdEAi7QzKADsfIFGgEAAAAK3exo0YRjAQtAGd7SktMBMVnBMY+XMwF9291A31u6A7SC9oBmpbMCj1vbEbVKegKrE/yVAAAAAEHWoXk67HYDEdyQ7qqkmQA4UIOY82faAEDQrdmExXUAjX/gzKPHrwHPgqSX4FNpA2rPDqEAAAAAXlrMvZvZ9wHEtHhEJ1JuAfqAxSKY3xwCW2agoilvCANjf26ZAc90AGz9LIwsKlkDqcJ6SgEAAAA6SuhuSXQlADsbeMPj1OwAp87p7SoGcwC4OCWGTr1mAlcPVyFnWeADGIPPQ4ZNWgDPqix3AAAAAKUEY5+i+S0AcMSjCPGSNABA94KJS/LOAw4pNLVyOqcDNVc56cYGBQPfQ05V7pk5AY5fNecAAAAAHqIyNVs5nQNUB17NB+qmAL2pbTA7g04ArTXuioGEZgHH3/99oOdDA1fHmwIqRYoAIBaOOgEAAADYLMaNk+gNAwRxPbsPSbUBlwT91ii8igIyU0WVxVr8ACQIW1TrQHwD+6sOsr+4YgEaWCU0AAAAABk+uFy6OcIAP7c/JZ8l9ABqzeqsEQvgAJnyRzPGab0BQYlvH5nyvwGK+U2gl8joAeUvlrIAAAAA/zsryG4nyAF5ugksGyGqAj1x9YvEiCUAmwQwAMIzKAPoQXA2NuWYAkQcLdIQZ9UC3qVhJQEAAAAcG9JA+vk8ASZ+D41voDUCVSvGivwXhgBWcuoibY0uAe/VAW/600sDi7kshmvGPwNI1aiMAAAAAAS2yGm+VrQAwR0HsL+fQAFmKxvwWqlPAbde5WhZEj4CHRjLtS7fQgPOQqmT88BDAunka14BAAAASyJ1VHEeawLh7Wte2SZBALpGzqeW0/UArGajlaFfBwI9Z178o8RIA31WqEDEM5EDRZYSXAAAAAAzAZjb9dPZAhCZyghHK+QDbMxZBsTTMgKZTwBWMDUgADt7ddwV43sCKwC/3KayRwNKOVokAAAAAPgelwvwBEwBg3yEZGRwFAJs8DNGe4AOAZwAO8Ka0KgAsad6RD/1BABYQlV05uQGAMHKgrEAAAAAjk0H0KTIBwKzgTXRBn1zAp0kQ/YR+ecDr7kYCcOr4gJZNVLM7dL+A1AwRq63vc0DCKlGiwEAAAAywRHQGnETADq/7o8zl84DGwNhnjgW5ANgRP8kvbItA8svzZP7Qx0D40J/g2803wB55BOXAQAAADAcc8rrqq8DypuuU3cV3AOzuUNNHu3nAWEa+NtrRZ4CDCrEI0qhrQN5r45Iba9hAKGnu+EAAAAAh6Xbe1cONwDY6IHhcYCUAZ3mqwzyoeYCLXqwCXeeWQC9Oo+7oU0eAognI/oSmmUDiwHEnwAAAAAp+3AYo0xeAWhN+rc/VJEBL2RCyCZs2gAO9H9g947/AgUKF3TGpiwBr0mm9xuuzgBTjXyYAAAAAPLW6V+F+GEBslfQg5GwHgJ6dPM01sQTAMVILROGrygDuFvnPGt5JwD0XbIs7wbrA7y5sEoAAAAA8KUzNrE6sgGmHKBWssnYAwPiRFWt08MBQdn13ra+UgPQp3SgpvC4AUd4hIja0hgApPwDZgEAAADb/ujy7Nq2ARAqEGQCN/4B7sKtURMi/QMM5uFCOY/vAzZVGcQpFaIC+NMr18Q/+APeP8CMAAAAAMv05bB3XDUCKXuHsaeuFgDknc9RMsA+ApIncOStO+QCpyrUV2d02AJGHSZeCAcmAm43hh8AAAAA9uEtx0Di3wDuSAEsioVUAyZ92gAUueQDEg2Lc4xiWQPiUiWUSTtqADLhKL2Zm6UCuobHDAAAAACWxkEuWueXAPgv6otlxFkBbE3TerY+NAJBPvTgPJWwAekjEoNG+3YDtQ1EdQSWOwEQapk0AQAAADO7B5dxRZgCr/Dozqa7HgPQPD1UVsn2AkqtSKWhIjkCE60R+tyASQHCR2cJuJPoAoF82ZAAAAAAj0tjHTpHFQAR4CVNPFy9AMoFospWY80DO8lM4c6JlwEPxHHBGXgNAlcJyZoPcLcBgR364AAAAAD3Bu0mE9z6ATQgM8Vh70UBIOSAJJQn3wDSLQefpJxTAltWv/J2zVMBQ/ei2M6TywIOQGAmAAAAAMxFM1c4sZkCR7BC7vjYAQAwabjZAJrvAnP1mQh8K2YDRjNUlhRftABRTNjw+J8dAxSVa60AAAAAkhBW4im1hAKl+q7fGyZaAm9RE3nqjKgBPjBKCzm/KwL/lH9HDMVIAgdLYf3PQAcCdLbLrAAAAACoao+6nLT4AACBweDTp3ABGodcamNuswFkOaSYhu3mANBtnB2R0hoAKAQ8Um8BqQOeJS9NAAAAAFU/kbiL9G4AjddsSvWoFwJzvE996ueSASFM7R72hI8B9xYykIRK2QNlgaA6h5vCAdpcpWcBAAAASl1TVZ09IwPaIJLk7r34AyyFtDm/xFADFa+CZL0akwMM+/nETNfRA1P5hsZIGNsA045shgEAAADZLoEVWkHuABi5dwACbD0AkisTV2Mg/QDN+l8/feh7ATek5W7/prsCfjfvgPqpjwOL8D5qAQAAAFx3ahKZExoBT+7HYmkApwJfHQWgAMRbAk13veMzNOoD/exeS4LprADNoe7wy3amAgh8AGYBAAAArLf5qn9HxgKAOHPqd27jAJ9EpvXwtocBsxcHYkNVGQNSAbeCMXisArqZ7GfLtmEAl1KejQAAAAAdAKURIxQ5AnZ7u/QDd8UCIGqR7J38oAG7UMHupj18ApzRxtyNIvgCRDIDLPnQFwGVBw6+AAAAABZUX0SYbdIAauuloLA82QAnF/Rqcp5IAvZIOEzzdm8DxRXR0bTtiQPvSIN85ZRjAocofWsBAAAA8me/PbU4JQJH4lu+jTVfAWfKLs150l0C1jDE/LlGVQGFxHhXsY5uAZ+r6tuJNpABBjPfWAAAAAA9oEkuLBD2AkyNp9TYgQkBivcBPkVvNQCEknJWE8fcA0/IhbhIw0MAWy+DhgdI4ADCdS2WAQAAAMFjNrBTkkcBQBsIg70j2gB/oOdyvrUyAgy7my9g4pUDbRpg6erQ+gBQBIaULCanAsPEEmEBAAAAc3JjL2JsczEyMzgxL2JpZy5ycwBQDRAAEwAAAE4AAAAWAAAAUA0QABMAAADtAAAAGgAAAFANEAATAAAA7QAAAA0AAABQDRAAEwAAAO8AAAAJAAAAUA0QABMAAACmAQAAFwAAAFANEAATAAAALQIAABIAAABQDRAAEwAAAFIDAAAYAAAAUA0QABMAAABSAwAAIQAAAFANEAATAAAAXAMAACEAAABQDRAAEwAAAHUDAAAXAAAAUA0QABMAAAB+AwAAFwAAAFANEAATAAAAwQMAABgAAABQDRAAEwAAAM8DAAAYAAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5NA4QACQAAAAvcnVzdGMvZmU1YjEzZDY4MWYyNWVlNjQ3NGJlMjlkNzQ4YzY1YWRjZDkxZjY5ZS9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzYA4QAEwAAACpAQAACQAAAAAAAAAirijXmC+KQs1l7yORRDdxLztN7M/7wLW824mBpdu16Ti1SPNbwlY5GdAFtvER8VmbTxmvpII/khiBbdrVXhyrQgIDo5iqB9i+b3BFAVuDEoyy5E6+hTEk4rT/1cN9DFVviXvydF2+crGWFjv+sd6ANRLHJacG3JuUJmnPdPGbwdJK8Z7BaZvk4yVPOIZHvu+11YyLxp3BD2WcrHfMoQwkdQIrWW8s6S2D5KZuqoR0StT7Qb3cqbBctVMRg9qI+Xar32buUlE+mBAytC1txjGoPyH7mMgnA7DkDu++x39Zv8KPqD3zC+DGJacKk0eRp9VvggPgUWPKBnBuDgpnKSkU/C/SRoUKtycmySZcOCEbLu0qxFr8bSxN37OVnRMNOFPeY6+LVHMKZaiydzy7Cmp25q7tRy7JwoE7NYIUhSxykmQD8Uyh6L+iATBCvEtmGqiRl/jQcItLwjC+VAajUWzHGFLv1hnoktEQqWVVJAaZ1iogcVeFNQ70uNG7MnCgahDI0NK4FsGkGVOrQVEIbDcemeuO30x3SCeoSJvhtbywNGNaycWzDBw5y4pB40qq2E5z42N3T8qcW6O4stbzby5o/LLvXe6Cj3RgLxdDb2OleHKr8KEUeMiE7DlkGggCx4woHmMj+v++kOm9gt7rbFCkFXnGsvej+b4rU3Lj8nhxxpxhJurOPifKB8LAIce4htEe6+DN1n3a6njRbu5/T331um8Xcqpn8AammMiixX1jCq4N+b4EmD8RG0ccEzULcRuEfQQj9XfbKJMkx0B7q8oyvL7JFQq+njxMDRCcxGcdQ7ZCPsu+1MVMKn5l/Jwpf1ns+tY6q2/LXxdYR0qMGURsmC+KQpFEN3HP+8C1pdu16VvCVjnxEfFZpII/ktVeHKuYqgfYAVuDEr6FMSTDfQxVdF2+cv6x3oCnBtybdPGbwcFpm+SGR77vxp3BD8yhDCRvLOktqoR0StypsFzaiPl2UlE+mG3GMajIJwOwx39Zv/ML4MZHkafVUWPKBmcpKRSFCrcnOCEbLvxtLE0TDThTVHMKZbsKanYuycKBhSxykqHov6JLZhqocItLwqNRbMcZ6JLRJAaZ1oU1DvRwoGoQFsGkGQhsNx5Md0gntbywNLMMHDlKqthOT8qcW/NvLmjugo90b2OleBR4yIQIAseM+v++kOtsUKT3o/m+8nhxxnNyYy9ibHMxMjM4MS9ibHMucnMAAAAAAKuq//////4B7v//VKz//wLqQWIPaw8qAcOc/UoUzhMCS3dk16xLQwLt6caSpvlfAqMeEaABAAAAQBIQABMAAABBAAAAEwAAAEASEAATAAAAQQAAAA0AAABAEhAAEwAAAEMAAAAsAAAAQkxTX1NJR19CTFMxMjM4MUcxX1hNRDpTSEEtMjU2X1NTV1VfUk9fTlVMX3NyYy9ibHMxMjM4MS9mcDIucnMAAOsSEAATAAAAmwAAABIAAADrEhAAEwAAAJ8AAAASAAAAc3JjL2JsczEyMzgxL2VjcDIucnMgExAAFAAAAJMAAAAVAAAAIBMQABQAAACUAAAAFQAAACATEAAUAAAAlQAAABUAAAAgExAAFAAAAJYAAAAVAAAAIBMQABQAAACXAAAAFQAAACATEAAUAAAAmAAAABUAAAAgExAAFAAAAJkAAAAVAAAAIBMQABQAAACaAAAAFQAAACATEAAUAAAAGQEAABEAAAAgExAAFAAAACIBAAAWAAAAIBMQABQAAAAoAQAAGgAAAAAAAAAEAEGgqMAAC/kEIBMQABQAAABXAgAADQAAACATEAAUAAAAXAIAAAkAAAC4vSHByFaAAPX7bgGqyQADunAXPa5HtgBE0QrsAOlTA3rkxlEQxS0DSQGCSaTCIwAvK6okAAAAAH4rBF0FfawB+VUX5YREPAM0kwT1x70bAmnXatiCZEID0GtZZU8niADoNGsf2GecAAW2Aj4BAAAAASi4CIZUkwF4oijrDnOyAiPJEg0WlaYBCrWdTvcyqgKb/a0aNS7aAnFzMmOEW58Ad1JdzgAAAAC+eV/wXwepAmpoBzvXScMB87Oa6XK1KgHSmbyOnRb6ASg+y5mLwisArDSrDDPNqQMCSmxgAAAAAHNyYy9obWFjLnJzACAVEAALAAAAewAAABQAAAAgFRAACwAAAHsAAAANAAAAIBUQAAsAAAB/AAAAIAAAACAVEAALAAAAfwAAAA0AAAAgFRAACwAAAIIAAAANAAAAIBUQAAsAAAB3AAAAFAAAACAVEAALAAAAdwAAAA0AAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAACAVEAALAAAARAEAAAUAAABIMkMtT1ZFUlNJWkUtRFNULQAAACAVEAALAAAAWwEAADYAAAAgFRAACwAAAHABAAAJAAAAIBUQAAsAAAByAQAABQAAACAVEAALAAAAdAEAAEAAAAAgFRAACwAAAHkBAAAUAAAAIBUQAAsAAAB/AQAADQAAACAVEAALAAAAgQEAAAkAAAAgFRAACwAAAIMBAAAzAAAAIBUQAAsAAACDAQAASwAAACAVEAALAAAAhQEAABQAAAAgFRAACwAAAIUBAAANAAAAAAABAAAAAQI0AEHIrcAAC5wBuF8jku11BwFjT+D5WE+pA2dPnKtLeD0Akew9ffXy9AMD1g8fDSwgAK1vjPCZwa4A8DtNkAEAAADzStxtEor3AIuwH1tTsFYDgvLFYx+X7AAysL/NHtseAkehVLifHyMCQHo6ogw4sQGz4sMPAAAAAP7//v///wECiwCAgtgE9gHhjWiJb76TAs52q989qB0Axmm6Uc523wPLWcYXAEHwrsAAC+EEAQAAAAAAAACCgAAAAAAAAIqAAAAAAACAAIAAgAAAAICLgAAAAAAAAAEAAIAAAAAAgYAAgAAAAIAJgAAAAAAAgIoAAAAAAAAAiAAAAAAAAAAJgACAAAAAAAoAAIAAAAAAi4AAgAAAAACLAAAAAAAAgImAAAAAAACAA4AAAAAAAIACgAAAAAAAgIAAAAAAAACACoAAAAAAAAAKAACAAAAAgIGAAIAAAACAgIAAAAAAAIABAACAAAAAAAiAAIAAAACAc3JjL3NoYTMucnMAMBgQAAsAAAC/AAAACQAAADAYEAALAAAA2QAAABAAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAADAYEAALAAAA3QAAABwAAAAwGBAACwAAAN8AAAAVAAAAMBgQAAsAAADpAAAAGAAAADAYEAALAAAA6wAAABEAAABzcmMvYmxzMTIzODEvZGJpZy5yc7wYEAAUAAAAXAAAAA4AAAC8GBAAFAAAAFwAAAAyAAAAvBgQABQAAABfAAAAOAAAALwYEAAUAAAAYgAAAAkAAAC8GBAAFAAAAG4AAAASAAAAvBgQABQAAABtAAAADQAAALwYEAAUAAAAcAAAAAkAAACrqv/////+Ae7//1Ss//8C6kFiD2sPKgHDnP1KFM4TAkt3ZNesS0MC7enGkqb5XwKjHhGgAQAAAK73vtWhOQYC6JPdYmRMJAHSLG5OtQktAtvlcDG2xBEBmWM2++htigO8nB/tzxZPACtqpp4BAAAAc3JjL2JsczEyMzgxL2ZwLnJzAACwGRAAEgAAAHoBAAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";decode(wasmBytesBase64);fromHex("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");var CanisterInstallMode;(function(F){F.Install="install",F.Reinstall="reinstall",F.Upgrade="upgrade"})(CanisterInstallMode||(CanisterInstallMode={}));const connectPlugWallet=async(F,b)=>{var Q=document.querySelector(".currentScene");if(window.ic===void 0){console.log("Plug not found - Get Plug Wallet");return}else{const D=await window.ic.plug.isConnected().catch(O=>{console.error(O)});if(D===!1){console.log("Not Connected"),console.log("W/H",F,b);const O=await window.ic.plug.requestConnect({whitelist:F,host:b,timeout:5e4}).catch(U=>{console.error("Connect Wallet",U)});console.log("pk",O),gsapWithCSS.to(Q,{opacity:0,filter:"blur(10px)",scale:1.5,duration:1,onComplete:()=>{Q==null||Q.remove()}}),document.getElementById("universe").style.filter="blur(0px)",document.querySelectorAll(".uniEvents").forEach(U=>{U.style.opacity=1})}else D===!0&&(gsapWithCSS.to(Q,{opacity:0,filter:"blur(10px)",scale:1.5,duration:1,onComplete:()=>{Q==null||Q.remove()}}),console.log("Connected"),(async()=>{var Y,X,ee;const U=(ee=(X=(Y=window.ic.plug)==null?void 0:Y.sessionManager)==null?void 0:X.sessionData)==null?void 0:ee.agent;let q=await window.ic.plug.getPrincipal();q=q.toString(),console.log("Principal",q);const G=await window.getAllUserNFTs({agent:U,user:q}).then(re=>{console.log("NFTs",re)}).catch(re=>{console.log("NFTs Error",re)});console.log("NFT Collections",G)})(),document.getElementById("universe").style.filter="blur(0px)",document.querySelectorAll(".uniEvents").forEach(U=>{U.style.opacity=1}))}},connectBitFinityWallet=async(F,b)=>{var D,O,U;var Q=document.querySelector(".currentScene");if(window.ic===void 0){console.log("Plug not found - Get BitFinity Wallet");return}else{const q=await window.ic.infinityWallet.isConnected().catch(G=>{console.error(G)});if(q===!1){console.log("Not Connected"),console.log(F,b);const G=await window.ic.infinityWallet.requestConnect({whitelist:F,timeout:5e4}).catch(Y=>{console.error("Connect Wallet",Y)});console.log("pk",G),gsapWithCSS.to(Q,{opacity:0,filter:"blur(10px)",scale:1.5,duration:1,onComplete:()=>{Q==null||Q.remove()}}),document.getElementById("universe").style.filter="blur(0px)",document.querySelectorAll(".uniEvents").forEach(Y=>{Y.style.opacity=1})}else q===!0&&(gsapWithCSS.to(Q,{opacity:0,filter:"blur(10px)",scale:1.5,duration:1,onComplete:()=>{Q==null||Q.remove()}}),(U=(O=(D=window.ic.plug)==null?void 0:D.sessionManager)==null?void 0:O.sessionData)==null||U.agent,(async()=>{const Y=await window.ic.plug.getPrincipal();console.log("Principal",Y);const X=await window.getAllUserNFTs({user:Y}).then(ee=>{console.log("NFTs",ee)});console.log("NFT Collections",X)})(),console.log("Connected"),document.getElementById("universe").style.filter="blur(0px)",document.querySelectorAll(".uniEvents").forEach(Y=>{Y.style.opacity=1}))}},createActor1=async(F,b)=>{const Q=await window.ic.plug.createActor({canisterId:F,interfaceFactory:b}).catch(D=>{console.log("creatActorError",D)});return console.log("Actor",Q),Q};class Scenario$1{constructor(b){this.sceneCategory=b,this.scenes=[],this.currentSceneIndex=0}addScenes(...b){this.scenes.push(...b)}show(){this.scenes[this.currentSceneIndex].show()}hide(){this.scenes[this.currentSceneIndex].hide()}load(){for(const b of this.scenes)b.load()}error(){console.error("Error loading scenario")}destroy(){for(const b of this.scenes)b.destroy();this.scenes=[],this.currentSceneIndex=0}nextScene(){if(this.scenes[this.currentSceneIndex].hide(),this.currentSceneIndex++,this.currentSceneIndex>=this.scenes.length){this.hide();return}this.show()}prevScene(){if(this.scenes[this.currentSceneIndex].hide(),this.currentSceneIndex--,this.currentSceneIndex<0){this.currentSceneIndex=0;return}this.show()}}class Scenario{constructor(b){this.sceneCategory=b,this.scenes=[],this.currentSceneIndex=0}addScenes(...b){this.scenes.push(...b)}show(){this.scenes[this.currentSceneIndex].show()}hide(){this.scenes[this.currentSceneIndex].hide()}load(){for(const b of this.scenes)b.load()}error(){console.error("Error loading scenario")}destroy(){for(const b of this.scenes)b.destroy();this.scenes=[],this.currentSceneIndex=0}nextScene(){if(this.scenes[this.currentSceneIndex].hide(),this.currentSceneIndex++,this.currentSceneIndex>=this.scenes.length){this.hide();return}this.show()}prevScene(){if(this.scenes[this.currentSceneIndex].hide(),this.currentSceneIndex--,this.currentSceneIndex<0){this.currentSceneIndex=0;return}this.show()}}class Character{constructor(b,Q){this.scene=Q,this.details=b,this.persona=b.persona}sayDialogue(){if(this.details.actions[0]==="chat"){var b=document.createElement(this.details.element.type);b.classList.add(this.details.element.class),b.setAttribute("id",`${this.persona.name}_dialogue`);var Q=document.createElement("p");Q.setAttribute("id",this.details.element.class),b.style.backgroundColor=this.details.element.backgroundColor,b.style.height=this.details.element.height,b.style.width=this.details.element.width,b.style.position=this.details.element.position,b.style.bottom=this.details.element.bottom,b.style.top=this.details.element.top,b.style.left=this.details.element.left,b.style.right=this.details.element.right,b.style.zIndex=this.details.element.zIndex,b.style.borderRadius=this.details.element.borderRadius,b.style.borderTop=this.details.element.border,b.style.borderBottom=this.details.element.border,b.borderRadius="10px",b.style.padding=this.details.element.padding,b.style.transform="scale(0)",b.style.transformOrigin="bottom left",b.addEventListener("click",()=>{window.currentSx.nextScene()});var D=document.createElement("div");D.classList.add("dialoguePointer"),D.style.position="absolute",D.style.width=this.details.element.pointer.width,D.style.height=this.details.element.pointer.height,D.style.bottom=this.details.element.pointer.bottom,D.style.left=this.details.element.pointer.left,D.style.zIndex=this.details.element.pointer.zIndex,D.style.transform=this.details.element.pointer.transform,D.style.borderLeft=this.details.element.pointer.borderleft,document.getElementById(`char_${this.persona.name}`).appendChild(b),gsapWithCSS.to(b,{duration:1,delay:1.2,transform:"scale(1)",ease:"power4.out"}),b.appendChild(Q),b.appendChild(D);var O=new Typing(this.persona.dialogue.intro,this.details.element.class,this.speed=this.details.pns.speed);setTimeout(()=>{O.start()},1800)}}enterScene(){var O,U;var b=document.createElement("div"),Q=document.createElement("img"),D=this.details.persona;console.log(D),b.classList.add((O=this.details.element)==null?void 0:O.class),b.setAttribute("id",`char_${D.name}`),b.style.height=this.details.pns.height,b.style.width=this.details.pns.width,b.style.position=this.details.pns.position,b.style.bottom=this.details.pns.bottom,b.style.top=this.details.pns.top,b.style.left=this.details.pns.left,b.style.right=this.details.pns.right,b.style.opacity="0%",b.style.zIndex=this.details.pns.zIndex,Q.src=this.persona.images.default,Q.style.height="100%",Q.style.width="auto",Q.style.objectFit="contain",Q.style.filter=`brightness(${this.details.pns.brightness}) blur(${this.details.pns.blur})`,b.appendChild(Q),(U=document.getElementById(`currentSceneView_${this.scene}`))==null||U.appendChild(b),gsapWithCSS.to(b,{duration:1,delay:1,opacity:1,stagger:.5,ease:"power4.out"}),this.details.pns.left==="auto"?gsapWithCSS.to(b,{duration:2,delay:1,right:this.details.pns.rightTo,ease:"power4.out"}):gsapWithCSS.to(b,{duration:2,delay:1,left:this.details.pns.leftTo,ease:"power4.out"})}}const local="http://localhost:8080/",can2="ryjl3-tyaaa-aaaaa-aaaba-cai",whitelist=[can2];class DialogueScene extends Scenario{constructor(b){super(b),this.scene=b,this.dialogueElement=null,this.buttonElement=null,this.isVisible=!1,this.isLoading=!1,this.onLoad=null,this.onError=null,this.onHide=null,this.onShow=null,this.onButtonClick=null,this.onImageLoad=null,this.onImageError=null,this.onDestroy=null,this.characters=[],this.cScene=null,this.conditions=[],this.elements=[]}show(){this.isVisible=!0,this.onShow&&this.onShow(),document.body.appendChild(this.cScene),this.elements.forEach(b=>{this.cScene.appendChild(b),gsapWithCSS.to(b,{duration:1,delay:1.5,opacity:1,ease:"power2.inOut"})}),this.cScene.style.opacity=1,this.characters.forEach(b=>{b.enterScene(b.name),b.details.actions[0]==="chat"&&b.sayDialogue(b.name)})}hide(){var b=document.getElementById(`currentSceneView_${this.scene.name}`);gsapWithCSS.to(b,{opacity:0,filter:"blur(10px)",scale:1.5,duration:1,onComplete:()=>{b==null||b.remove()}}),document.getElementById("universe").style.filter="blur(0px)",this.isVisible=!1,this.onHide&&this.onHide()}load(){if(!this.isLoading){if(this.cScene=document.createElement("div"),this.cScene.classList.add("currentScene"),this.cScene.setAttribute("id",`currentSceneView_${this.scene.name}`),this.cScene.style.zIndex=10,this.cScene.style.position="absolute",this.cScene.style.top=0,this.cScene.style.left=0,this.cScene.style.width="100%",this.cScene.style.height="100%",this.cScene.style.backgroundColor=this.scene.bg,this.cScene.style.opacity=0,this.scene.characters)for(let b=0;b<this.scene.characters.length;b++)this.characters.push(new Character(this.scene.characters[b],this.scene.name));this.scene.elements&&this.scene.elements.forEach(b=>{const Q=document.createElement("div"),D=document.createElement("img");if(Q.classList.add("sceneElement"),Q.style.zIndex=11,Q.style.position=b.position,Q.style.top=b.top,Q.style.bottom=b.bottom,Q.style.left=b.left,Q.style.width=b.width,Q.style.height=b.height,D.setAttribute("id",b.id),D.style.width="100%",D.style.height="100%",D.style.position="absolute",D.style.bottom="0px",D.style.left="0px",D.style.zIndex=12,b.shadow===!0){const O=document.createElement("img");O.src=b.src,O.setAttribute("id","element1Shadow"),D.src=b.src,O.style.width="100%",O.style.height="auto",O.style.filter="blur(50px)",Q.appendChild(O)}Q.appendChild(D),Q.addEventListener("click",()=>{b.action==="connectPlugWallet()"&&new Function(b.action.replace("connectPlugWallet()",connectPlugWallet()))(),b.action==="connectBitfinityWallet()"&&new Function(b.action.replace("`${ connectBitFinityWallet()}`",connectBitFinityWallet(whitelist,local)))()}),this.elements.push(Q)}),this.scene.conditions&&this.scene.conditions.forEach(b=>{var Q=b;this.conditions.push(Q)})}}error(){console.log("Error loading resources")}destroy(){this.onDestroy&&this.onDestroy()}setDialogue(b){this.props.dialogue=b,this.dialogueElement&&(this.dialogueElement.innerText=this.scene.dialogue)}}window.Buffer=buffer$1.Buffer;__vitePreload(()=>import("./index.1cb91594.js").then(function(F){return F.i}),[]).then(F=>{window.getAllUserNFTs=F.getAllUserNFTs}).catch(F=>{console.log(F)});async function universe(){const F=new SoundtrackManager;var b=document.querySelector("#universe"),Q=document.querySelector("#exploreUI"),D=document.getElementById("previewUI"),O=document.getElementById("explore"),U=document.getElementById("getUniMenu").shadowRoot.getElementById("pinMenu"),q=document.getElementById("getUniMenu").shadowRoot.getElementById("locked"),G=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),Y={x:0,y:0},X={x:0,y:0},ee={x:0,y:0},re={x:0,y:0},ie,ae,ce=18,Ae=0,ge=50,Be=50,Ie=50,_e=50,Ce=!1,be,Qe,Se=!1,Me=!1;window.connected=!1;var ke=["1435","3162","2849","6208"];window.suUiActor=null,window.landActivated=!1,window.chatActive=!1,window.domainType="",window.user={principal:null,balance:null,pk:null,nfts:null};const Fe="X6X8vw.njyFHg:fbgHjcgXOfW9qxBg69sRw0OK6yHpBKqtvbOcGVSh3e0",Ue=new Ably.Realtime({key:Fe,clientId:"Test"}),Ye=Ue.channels.get("alphaTestersChat"),Ge=Ue.channels.get("lordsInTheCity");(()=>{console.log("test"),document.addEventListener("keydown",function(ve){ve.keyCode===80&&newScenario("Intro")})})(),window.universeSystem=async()=>{var ve=b.getContext("2d"),le=document.createElement("img"),oe=document.getElementById("camera");if(F.stop("menuEntrance1"),F.play("menuEntrance1"),navigator.userAgent.includes("Brave")||navigator.userAgent.includes("Firefox")||navigator.userAgent.includes("Chrome")){document.querySelector("#universe").style.display="block",setTimeout(()=>{document.querySelector("#universe").style.opacity="100%"},100),le.onload=function(){ve.drawImage(le,0,0,le.width,le.height),ve.fillStyle="rgba(255, 255, 255, 0.08)";for(var ne=0;ne<le.width;ne+=ce)ve.fillRect(ne,0,1,le.height);for(var te=0;te<le.height;te+=ce)ve.fillRect(0,te,le.width,1)},le.src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg",oe.scrollTo(990,0),oe.addEventListener("scroll",function(){oe.scrollLeft<990&&oe.scrollTo(990,0),oe.style.overflowY="hidden"},{passive:!1}),oe.addEventListener("wheel",function(ne){ne.preventDefault()},{passive:!1}),b.addEventListener("mousemove",window.mousePos),b.addEventListener("click",window.selectedPos),document.addEventListener("focus",ne=>{Me=!0},!0),document.addEventListener("blur",ne=>{Me=!1},!0);var he=document.createElement("div"),ye=document.createElement("div"),pe=document.createElement("div"),me=document.createElement("div");he.id="uniEvent",he.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(he),ye.id="uniEvent2",ye.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(ye),pe.id="uniEvent3",pe.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(pe),me.id="uniEvent4",me.setAttribute("class","uniEvents"),document.getElementById("camera").appendChild(me),window.adminUI(),window.openLocationCard(),window.playerPos(),window.currentSx=newScenario("Intro")}else alert("The browser is not Brave, Firefox, or Chrome");Ne()&&De()};var Te=!1;const De=()=>{var ve=document.createElement("div");ve.id="viewEditor",ve.style.right="2%",ve.style.top="3%",ve.style.position="fixed",ve.style.zIndex="501",ve.style.width="40px",ve.style.height="40px",ve.style.backgroundColor="rgba(0, 0, 0, 0.9)",ve.style.borderRadius="10px",ve.style.border="1px solid #ff002d",ve.addEventListener("click",async()=>{var oe=(await __vitePreload(()=>import("./editor.91d39348.js"),["assets/editor.91d39348.js","assets/wScoge.fc00b881.js","assets/wScoge.2197177c.css"])).editor(Te);oe===!1?Te=!1:Te=!0}),document.getElementById("main").appendChild(ve)};window.adminUI=()=>{var ve=document.createElement("div"),le=document.createElement("div"),oe=document.createElement("div"),he=document.createElement("div"),ye=document.createElement("div"),pe=document.createElement("div"),me=document.createElement("div"),ne=document.createElement("div");document.getElementById("selection").style.display="block",ve.id="adminUI",le.id="DebugColumn",oe.id="DebugRow",he.id="selectionPos",ye.id="pixelPos",pe.id="selectPosBox",me.id="playerCord",ne.id="playerScreenCoor",ve.appendChild(ye),ve.appendChild(le),ve.appendChild(oe),ve.appendChild(he),ve.appendChild(pe),ve.appendChild(me),ve.appendChild(ne),document.getElementById("main").appendChild(ve),xe(document.getElementById("adminUI"),!0),xe(document.getElementById("exploreUI"),!0),he.innerHTML="Selected Tile:",le.innerHTML="Column:",oe.innerHTML="Row:",ye.innerHTML="X: , Y:",pe.innerHTML="SelBoxTile:",me.innerHTML="Player Coordinates:",ne.innerHTML="Player Screen Coord:",window.initSelection(),window.moveSelection(),window.moveMenu()},window.mousePos=ve=>{var le=b.getBoundingClientRect();Y.x=Math.round((ve.clientX-le.left)/ce),Y.y=Math.round((ve.clientY-le.top)/ce),window.pixelPos.x=ve.clientX-le.left,window.pixelPos.y=ve.clientY-le.top,document.getElementById("DebugColumn").innerHTML="Column: "+Y.x,document.getElementById("DebugRow").innerHTML="Row: "+Y.y,document.getElementById("pixelPos").innerHTML="X: "+window.pixelPos.x+", Y: "+window.pixelPos.y},window.selectedPos=ve=>{window.chatActive=!1,document.getElementById("explore").style.display="block";var le=b.getBoundingClientRect();Q.style.transform="scale(0)",X.x=Math.round((ve.clientX-(le.left+9))/ce),X.y=Math.round((ve.clientY-(le.top+9))/ce);var oe=170-X.x;if(document.getElementById("selectionPos").innerHTML="Selected Tile: "+(170-oe+170*X.y),Ae=170-oe+170*X.y,ae=170-oe+170*X.y,D.innerHTML="Land "+Ae,D.style.color="blue",O.style.left=ve.clientX-O.offsetWidth/2+"px",O.style.top=ve.clientY-O.offsetHeight/2+"px",O.style.left=Math.round((O.offsetLeft-le.left)/ce)*ce+le.left+"px",O.style.top=Math.round((O.offsetTop-le.top)/ce)*ce+le.top+"px",D.style.display="block",D.style.left=O.offsetLeft+O.offsetWidth+18+"px",D.style.top=O.offsetTop-108+"px",D.style.transformOrigin="bottom left",O.offsetTop<215&&(D.style.top=O.offsetTop+O.offsetHeight+18+"px",D.style.transformOrigin="top left"),O.offsetLeft>window.innerWidth-215&&(D.style.left=O.offsetLeft-D.offsetWidth-18+"px",D.style.transformOrigin="bottom right"),O.offsetLeft<215&&(D.style.transformOrigin="bottom left"),Se==!1){D.style.transform="scale(1)",Se=!0,be=setTimeout(()=>{D.style.transform="scale(0)",Se=!1},3e3);return}if(Se==!0){clearTimeout(be),be=setTimeout(()=>{D.style.transform="scale(0)",Se=!1},3e3);return}};function xe(ve,le){var oe=0,he=0,ye=0,pe=0;if(le===!1)return;U.style.borderTop="2px solid rgba(225, 225, 225, 0.8)",U.style.borderLeft="2px solid rgba(225, 225, 225, 0.8)",U.style.filter="blur(0px)",U.setAttribute("class","unpinned"),q.style.opacity="0",document.getElementById(ve.id+"header")?document.getElementById(ve.id+"header").onmousedown=me:ve.onmousedown=me;function me(J){J=J||window.event,J.preventDefault(),ye=J.clientX,pe=J.clientY,document.onmouseup=te,document.onmousemove=ne}function ne(J){J=J||window.event,J.preventDefault(),oe=ye-J.clientX,he=pe-J.clientY,ye=J.clientX,pe=J.clientY,ve.style.top=ve.offsetTop-he+"px",ve.style.left=ve.offsetLeft-oe+"px"}function te(){document.onmouseup=null,document.onmousemove=null}}window.deactivateDrag=()=>{G.onmousedown=null,document.onmouseup=null,document.onmousemove=null,U.style.borderTop="4px solid #ff002d",U.style.borderLeft="4px solid #ff002d",U.setAttribute("class","pinned"),q.style.opacity="1"},window.pinMenu=()=>{if(U.getAttribute("class")=="pinned"){xe(G,!0),U.setAttribute("class","unpinned");return}if(U.getAttribute("class")=="unpinned"){window.deactivateDrag(),U.setAttribute("class","pinned"),G.style.transition="1s",G.style.top="36px",G.style.left="36px",document.getElementById("getUniMenu").toggleMenu(),setTimeout(()=>{G.style.transition=""},1200);return}},window.playerPos=async()=>{var ve=document.getElementById("selection"),le=b.getBoundingClientRect(),oe=ve.getBoundingClientRect(),he={x:Math.round(oe.left-le.left+2),y:Math.round(oe.top-le.top+2)},ye={x:Math.round(he.x/ce),y:Math.round(Math.round(he.y/ce))},pe=170-ye.x,me=170-pe+ye.y*170;if(document.getElementById("selectPosBox").innerHTML=`Player Position: ${me}`,ie=170-pe+ye.y*170,re.x=he.x-2,re.y=he.y-2,document.getElementById("playerCord").innerHTML=`Player Coordinates: ${re.x}, ${re.y}`,document.getElementById("playerScreenCoor").innerHTML=`Player Screen Coordinates: ${oe.left}, ${Math.round(oe.top)+2}`,window.uniPlayer.x=ve.style.left,window.uniPlayer.y=ve.style.top,Ge.presence.update({data:window.uniPlayer}),`${me}`===ke[0]||`${me}`===ke[1]||`${me}`===ke[2]||`${me}`===ke[3]){if(window.landActivated=!0,document.getElementById("selection").style.animationPlayState="running",document.getElementById("selection").style.animation="whiteBoxGlow 1s infinite",document.getElementById("selection").innerHTML='<div id="exclamationMark" style="position: absolute; top: 8px; left: 8px; width: 18px; height: 18px; background-color: #ff002d; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; color: #fff; font-weight: 700;">!</div>',`${me}`===ke[0]){window.domainType="canon",Q.innerHTML=$e;return}else if(`${me}`===ke[1]){window.domainType="world",Q.innerHTML=Le;return}else if(`${me}`===ke[2]){window.domainType="world",Q.innerHTML=Pe;return}else if(`${me}`===ke[3]){window.domainType="chat",Q.innerHTML=He;var ne=window.room1.getMessages();ne==null||ne.forEach(te=>{const J=document.createElement("div"),W=document.getElementById("chatRoom1");J.setAttribute("class","chatMessageContainer"),J.innerHTML=`
        <div class="messageAvatar self">
          <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
        </div>
        <div class="messageBody">
          <div class="messageSender">Damion</div>
          <p class="messageText">${te}</p>
        </div>
      `,W.appendChild(J)}),Q.addEventListener("keyup",()=>{xe(document.getElementById("exploreUI"),!0)}),document.getElementById("chatTextArea").addEventListener("click",()=>{Q.onmousedown=null,document.getElementById("chatInput1").focus()}),document.getElementById("sendBut").addEventListener("click",async()=>{var te=document.getElementById("chatInput1");const J=te.value.trim();J&&(window.room1.addMessage(J),await Ye.publish("chatRoom1",{roomMessage:J}),te.value="")});return}return}else window.landActivated=!1,document.getElementById("selection").style.animationPlayState="paused",document.getElementById("selection").style.animation="none",document.getElementById("selection").innerHTML="",Q.innerHTML=""};const Ne=()=>window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";window.moveSelection=()=>{document.removeEventListener("keydown",window.checkKeys);var ve=document.getElementById("selection"),le=window.innerHeight/ce,oe=window.innerWidth/ce,he=le/2,ye=oe/2;ee.x=ye*ce,ee.y=he*ce,document.addEventListener("keydown",function(pe){window.chatActive!=!0&&(Q.style.transform="scale(0)",xe(document.getElementById("exploreUI"),!0),pe.keyCode==37&&ee.x>0&&Ce==!1&&(ee.x-=ce,Ce=!0,setTimeout(()=>{Ce=!1},ge)),pe.keyCode==38&&ee.y>0&&Ce==!1&&(ee.y-=ce,Ce=!0,setTimeout(()=>{Ce=!1},Ie)),pe.keyCode==39&&ee.x<oe*ce-ce&&Ce==!1&&(ee.x+=ce,Ce=!0,setTimeout(()=>{Ce=!1},Be)),pe.keyCode==40&&ee.y<le*ce-ce&&Ce==!1&&(ee.y+=ce,Ce=!0,setTimeout(()=>{Ce=!1},_e)),ve.style.left=ee.x+"px",ve.style.top=ee.y+"px",window.playerPos(),pe.keyCode==32&&window.exploreOpenHelper())}),document.addEventListener("keydown",function(pe){pe.keyCode==37&&ee.x==0&&(document.getElementById("camera").scrollLeft-=ce),pe.keyCode==38&&ee.y==0&&(document.getElementById("camera").scrollTop-=ce),pe.keyCode==39&&ee.x==oe*ce-ce&&(document.getElementById("camera").scrollLeft+=ce),pe.keyCode==40&&ee.y==le*ce-ce&&(document.getElementById("camera").scrollTop+=ce);var me=document.getElementById("viewEditor"),ne=document.getElementById("selection"),te=Math.floor(window.innerWidth-Number(ne.style.left.replace("px",""))),J=Math.floor(Number(ne.style.top.replace("px","")));console.log(te,J);var W=Math.floor(window.innerHeight-Number(ne.style.top.replace("px","")));te<100&&J<100&&(me.style.top="auto",me.style.bottom="5%"),te<100&&W<100&&(me.style.top="5%",me.style.bottom="auto")})},window.initSelection=()=>{var ve=window.innerWidth/ce,le=window.innerHeight/ce,oe=document.getElementById("selection");oe.style.left=ve/2*ce+"px",oe.style.top=le/2*ce+"px"},window.openLocationCard=()=>{b.addEventListener("dblclick",()=>{if(document.getElementById("previewUI").style.transform="scale(0)",ie===ae)window.exploreOpenHelper();else{var ve=document.getElementById("adminUI");ve.style.opacity="1",setTimeout(()=>{ve.style.opacity="0"},5e3)}})};var $e=`<div class="cannonIcon">
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <h1>Ch.1 - Reacclimate</h1>
  <p>In the distant land of T.A.O.S City, there exists a hidden world of self-exiled creators, known as the Oracles. These Oracles reside in ancient, desolate mansions on the outskirts of the city, and possess a wealth of knowledge and experience that is sought after by migrants from far-off lands. These migrants come to T.A.O.S City in search of a new life, but often find themselves lost and alone in a vast and unfamiliar place. They turn to the Oracles for guidance, seeking to avoid the wrath of the city's enforcers, a powerful and ruthless group of conservative citizens.
  <br><br>
  The journey to visit the Oracles is not an easy one. Many must travel for days, through treacherous and unforgiving terrain, in order to reach the Oracles' remote dwellings. But those who are successful in their quest are rewarded with a profound understanding of themselves and the world around them. The Oracles' teachings help the migrants to remember something that they had long forgotten, and to reacclimate to the new and strange land they now call home.
  <br><br>
  This is the story of one such migrant, and their journey to find the Oracles, to discover the truth about themselves, and to make a place for themselves in the world of T.A.O.S City. It is a story of struggle and sacrifice, of hope and perseverance, and of the power of the human spirit to overcome even the greatest of challenges.
  </p>`,Le=`
  <div class="cannonIcon">
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div id="tempVidHead">Ch.2 - Prologue 1</div>
  <div id="tempVidCon">
    <video id="tempVid" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Chapter2-Prologue-1-HD.mp4" controls></video>
  </div>
  `,Pe=`
  <div class="cannonIcon">
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div id="tempVidHead2">Speak Easy</div>
  <div id="tempVidCon2">
    <video id="tempVid2" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/nightout.mp4" controls></video>
  </div>
  `,He=`
  <div class="cannonIcon">
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div class="domainFunction">
    <div class="domainHeader">
      <div class="doaminOwner">LORD AMINA</div>
      <div class="domainName">TC-BARGE-1</div>
    </div>
    <div class="domainInfo">
      <div class="domainLordImg">
        <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
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
          <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
        </div>
        <div class="messageBody">
          <div class="messageSender">Damion</div>
          <p class="messageText">Hey, whats up! This isnt what I meant when I said I wanted to see the barge. However sometimes you have to see what other things are about first hand.</p>
        </div>
      </div>
      <div class="chatMessageContainer">
        <div class="messageAvatar self">
          <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/red-s1.jpg"/>
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
  `;window.exploreOpenHelper=()=>{var ve=document.getElementById("exploreUI").offsetWidth;if(Me===!1)if(ee.x<window.innerWidth/ce*ce-18-ve?Q.style.left=ee.x+ce+18+"px":Q.style.left=ee.x-18-ve+"px",Q.style.transform="scale(1)",window.landActivated===!1){Q.style.width="128px",Q.style.height="20px",Q.style.top=ee.y-92+"px",clearTimeout(Qe),Qe=setTimeout(()=>{Q.style.transform="scale(0)"},6e3),Q.innerHTML=`
      <div id="unclaimedBox">
        <div id="unclaimed">UNCLAIMED LAND</div>
      </div>
      `;return}else{Q.style.width="540px",Q.style.height="80%",window.domainType==="chat"&&(window.chatActive=!0),Q.style.top=(window.innerHeight-810)/2+"px";var le=document.getElementById("tempVid"),oe=document.getElementById("tempVid2");(le==null?void 0:le.src)!=""&&(le==null||le.play()),(oe==null?void 0:oe.src)!=""&&(oe==null||oe.play())}},window.moveMenu=()=>{var ve=document.getElementById("universe");G.style.display="block";var le=document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems"),oe=document.getElementById("getUniMenu").shadowRoot,he=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt"),ye=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".men-active"),pe=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".getNew");pe.forEach(me=>{me.addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen()})}),he.forEach(me=>{me.addEventListener("mouseout",()=>{F.setVolume("menuMove3",.5),F.stop("menuMove3"),F.play("menuMove3")})}),le.childNodes.forEach(me=>{switch(me.id!="uniMenuItems"&&F.stop("menuLoading1"),me.addEventListener("click",()=>{window.clearAndSelectMenu(me.id),F.stop("menuEnter3"),F.play("menuEnter3")}),me.id){case"uniMenuShop":me.addEventListener("click",ne=>{xe(G,!0),oe.getElementById("fm-enhancements").style.display="grid",oe.getElementById("fm-header-headline").style.opacity="0%",oe.getElementById("fm-header-headline").style.pointerEvents="none",oe.getElementById("fm-beacons").style.display="none",oe.getElementById("fm-feedback").style.display="none",oe.getElementById("fm-settings").style.display="none",oe.getElementById("fm-profile").style.display="none",oe.getElementById("fm-enhancements").innerHTML='<img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/DIGISHOP.png" alt="NFT Shop" id="nftShop">',oe.getElementById("nftShop").addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen(),ve.style.filter="blur(5px)",oe.getElementById("uniMenu").style.filter="blur(10px)"}),oe.getElementById("fm-inventory").style.display="none",oe.getElementById("menuLoadingScreen").style.display="none",oe.getElementById("menuMessage").style.display="none",window.headlineSwtich(ne)});break;case"uniMenuItems":me.addEventListener("click",ne=>{window.headlineSwtich(ne),setTimeout(()=>{window.headlineSwtich(ne)},500),xe(G,!0),window.openInventory(),oe.getElementById("fm-beacons").style.display="none",oe.getElementById("fm-feedback").style.display="none",oe.getElementById("fm-settings").style.display="none",oe.getElementById("fm-inventory").style.display="grid",oe.getElementById("fm-enhancements").style.display="none",oe.getElementById("fm-profile").style.display="none",oe.getElementById("fm-header").style.display="grid",oe.getElementById("fm-header-headline").style.opacity="100%",oe.getElementById("fm-header-headline").style.pointerEvents="auto",me.setAttribute("class","menuTabs selectedMenu2"),oe.getElementById("uniMenuItemsSvg").childNodes.forEach(te=>{te.style.fill="white"}),oe.getElementById("uniMenuBeacons").setAttribute("class","menuTabs"),oe.getElementById("uniMenuBeaconsSvg").childNodes.forEach(te=>{te.style.stroke="#ff002d"}),ye.forEach(te=>{if(te.id==="fm-menu1"){var J={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(J),te.setAttribute("class","mmen-active it selectedMenu")}else te.setAttribute("class","men-active it")})});break;case"uniMenuProfile":me.addEventListener("click",ne=>{window.headlineSwtich(ne),setTimeout(()=>{window.headlineSwtich(ne)},500),window.openInventory(),oe.getElementById("fm-profile").style.display="grid",oe.getElementById("fm-header").style.display="grid",oe.getElementById("fm-header-headline").style.opacity="100%",oe.getElementById("fm-beacons").style.display="none",oe.getElementById("fm-inventory").style.display="none",oe.getElementById("fm-feedback").style.display="none",oe.getElementById("fm-settings").style.display="none",oe.getElementById("fm-enhancements").style.display="none",oe.getElementById("menuLoadingScreen").style.display="none",oe.getElementById("fm-header-headline").style.pointerEvents="auto",ye.forEach(te=>{if(te.id==="fm-menu1"){var J={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(J),te.setAttribute("class","mmen-active ht selectedMenu")}}),window.deactivateDrag()});break;case"uniMenuSettings":me.addEventListener("click",ne=>{oe.getElementById("fm-beacons").style.display="none",oe.getElementById("fm-inventory").style.display="none",oe.getElementById("fm-feedback").style.display="none",oe.getElementById("fm-enhancements").style.display="none",oe.getElementById("fm-profile").style.display="none",oe.getElementById("fm-settings").style.display="grid",oe.getElementById("menuLoadingScreen").style.display="none",oe.getElementById("menuMessage").style.display="none",oe.getElementById("fm-header").style.display="grid",oe.getElementById("fm-header-headline").style.opacity="0%",oe.getElementById("fm-header-headline").style.pointerEvents="none",window.headlineSwtich(ne),window.deactivateDrag()});break;case"uniMenuBeacons":me.addEventListener("click",ne=>{xe(G,!0),document.getElementById("getUniMenu").shadowRoot.getElementById("beaconNoti").style.display="none",oe.getElementById("fm-beacons").style.display="grid",oe.getElementById("fm-inventory").style.display="none",oe.getElementById("fm-feedback").style.display="none",oe.getElementById("fm-settings").style.display="none",oe.getElementById("fm-enhancements").style.display="none",oe.getElementById("fm-profile").style.display="none",oe.getElementById("menuLoadingScreen").style.display="none",oe.getElementById("menuMessage").style.display="none",oe.getElementById("fm-header").style.display="grid",oe.getElementById("fm-header-headline").style.opacity="100%",oe.getElementById("fm-header-headline").style.pointerEvents="all",window.headlineSwtich(ne),ye.forEach(te=>{if(te.id==="fm-menu1"){var J={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(J),te.setAttribute("class","mmen-active ht selectedMenu")}else te.setAttribute("class","men-active ht")})});break;case"uniMenuFeedback":me.addEventListener("click",ne=>{oe.getElementById("feedbackHeadline").innerHTML="Help make T.A.O.S City better.",oe.getElementById("fm-beacons").style.display="none",oe.getElementById("fm-inventory").style.display="none",oe.getElementById("fm-enhancements").style.display="none",oe.getElementById("fm-profile").style.display="none",oe.getElementById("fm-settings").style.display="none",oe.getElementById("fm-header").style.display="grid",oe.getElementById("menuLoadingScreen").style.display="none",oe.getElementById("fm-header-headline").style.opacity="0%",oe.getElementById("fm-header-headline").style.pointerEvents="none",oe.getElementById("menuMessage").style.display="none",oe.getElementById("fm-feedback").style.display="grid",oe.getElementById("fm-feedback").addEventListener("click",()=>{window.deactivateDrag()}),window.headlineSwtich(ne),window.deactivateDrag()});break;case"uniMenuExit":me.addEventListener("click",()=>{window.showMenu(),xe(G,!0),F.stop("menuExitSys1"),F.play("menuExitSys1")});break}}),xe(G,!0),window.hideMenu()},window.headlineSwtich=ve=>{var le=ve.target.id,oe=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1"),he=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu2"),ye=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu3");switch(le){case"menuInventory":oe.innerHTML="Land & Enhancements",he.innerHTML="Assets",ye.innerHTML="Sync",oe.style.opacity="100%",oe.style.userSelect="auto",he.style.opacity="100%",he.style.userSelect="auto",ye.style.opacity="0%",ye.style.userSelect="none";break;case"menuProfile":oe.innerHTML="Earth",he.innerHTML="Bankoo",oe.style.opacity="100%",oe.style.userSelect="auto",he.style.opacity="100%",he.style.userSelect="none",ye.style.opacity="0%",ye.style.userSelect="none";break;case"menuBeacons":oe.innerHTML="All",he.innerHTML="Domain",ye.innerHTML="Citizen",oe.style.opacity="100%",oe.style.userSelect="auto",he.style.opacity="100%",he.style.userSelect="auto",ye.style.opacity="100%",ye.style.userSelect="auto";break}},window.clearAndSelectMenu=ve=>{var le=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".menuTabs");le.forEach(oe=>{oe.id===ve&&oe.id!=="uniMenuExit"?(oe.setAttribute("class","menuTabs selectedMenu2"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${oe.id}Svg`).childNodes.forEach(he=>{he.style.stroke="white"})):(oe.setAttribute("class","menuTabs"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${oe.id}Svg`).childNodes.forEach(he=>{he.style.stroke="#ff002d",he.style.fill="#ff002d"}))})},window.hideMenu=()=>{var ve=document.getElementById("logo");ve.style.opacity="0",ve.style.pointerEvents="none",document.getElementById("uniEvent").style.display="block",document.getElementById("uniEvent2").style.display="block",document.getElementById("uniEvent3").style.display="block",document.getElementById("uniEvent4").style.display="block",document.getElementById("welcome").style.display="none",document.getElementById("welcome").style.pointerEvents="none",document.getElementById("intro").style.display="none",document.getElementById("intro").style.opacity="0%",document.getElementById("introLogo").style.userSelect="none",document.getElementById("introLogo").style.pointerEvents="none",document.getElementById("introLogo").style.cursor="pointer"},window.showMenu=()=>{var le;var ve=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");document.querySelector("#universe").style.opacity="0%",setTimeout(()=>{document.querySelector("#universe").style.display="none"},1e3),document.getElementById("selection").style.display="none",(le=document.getElementById("uniEvent"))==null||le.remove(),document.getElementById("uniEvent2").remove(),document.getElementById("uniEvent3").remove(),document.getElementById("uniEvent4").remove(),document.getElementById("explore").style.display="none",D.style.transform="scale(0)",ve.style.display="none",document.getElementById("adminUI").remove(),document.getElementById("welcome").style.display="grid",document.getElementById("welcome").style.pointerEvents="auto",document.getElementById("intro").style.display="grid",document.getElementById("intro").style.opacity="100%",document.getElementById("introLogo").style.userSelect="auto",document.getElementById("introLogo").style.pointerEvents="auto",document.getElementById("introLogo").style.cursor="pointer",document.getElementById("introLogo").addEventListener("click",()=>{window.universeSystem()})},window.openInventory=async()=>{var ve=document.getElementById("getUniMenu").shadowRoot;ve.getElementById("menuLoadingScreen"),ve.getElementById("menuLoadingScreen3"),ve.getElementById("fm-inventory").style.display="grid",ve.getElementById("fm-header").style.display="grid",ve.getElementById("fm-enhancements").style.display="none"},window.systemNoti=async()=>{},window.rsvp=async()=>{document.getElementById("rsvpModal").style.display="block"},await Ue.connection.once("connected"),console.log("Connected to Ably!");const et="alphaTestersChat",de="1st Chat Room for Alpha Testers";window.room1=chatRoom.create(et,de),window.room1.setIo(Ue),await Ye.subscribe("chatRoom1",ve=>{console.log(ve),console.log("Received a greeting message in realtime: "+ve.data.roomMessage),console.log(window.room1),window.room1.addMessage(ve.data.roomMessage);const le=document.createElement("div"),oe=document.getElementById("chatRoom1");if(le.setAttribute("class","chatMessageContainer"),le.innerHTML=`
  <div class="messageAvatar self">
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
  </div>
  <div class="messageBody">
    <div class="messageSender">Damion</div>
    <p class="messageText">${ve.data.roomMessage}</p>
  </div>
  `,oe==null||oe.appendChild(le),window.dtfullMenuOpen===!1&&window.chatActive===!1&&(document.getElementById("getUniMenu").shadowRoot.getElementById("beaconNoti").style.display="block"),window.chatActive===!1){var he=document.createElement("div");document.getElementById("uniEvent4").setAttribute("style","animation: whiteBoxInnerGlow 2s infinite;"),he.setAttribute("class","beacon tut"),he.setAttribute("data-message",`${ve.data}`),he.addEventListener("click",ye=>{document.getElementById("getUniMenu").openBeaconMessage(ye)}),he.innerHTML=`
        <div class="beaconOrigin">
          <div class="beaconIdenIcon">!</div>
          <div class="beaconSender">${ve.data}</div>
        </div>
        <div class="beaconPreview">
          ${ve.data.substring(0,25)}...
        </div>
    `,document.getElementById("getUniMenu").shadowRoot.getElementById("beaconsBody").appendChild(he)}});const tt="alphaTesters",at="Alpha Testers";window.uniPlayer={playerId:Math.floor(Math.random()*100),playerName:"Damion",x:0,y:0},window.room2=uniPlayers.create(tt,at),window.room2.setChannel(Ge);var dt=!1,je=[];return Ge.presence.subscribe("enter",ve=>{console.log("A NEW PLAYER HAS ARRIVED",ve.data)}),Ge.presence.subscribe("update",ve=>{if(dt===!1){var le=uniPlayers.create("PlayerGroup1");le.renderPlayer(ve.data.data),je.push(ve.data.data.playerId),dt=!0;return}je.includes(ve.data.data.playerId)===!1&&(je.push(ve.data.data.playerId),window.room2.renderPlayer(ve.data.data)),document.getElementById(`${ve.data.data.playerId}`).style.top=ve.data.data.y,document.getElementById(`${ve.data.data.playerId}`).style.left=ve.data.data.x}),Ge.presence.subscribe("leave",ve=>{console.log("MemberData",ve.data),document.getElementById(`${ve.data.data.playerId}`).remove()}),Ge.presence.enter(window.uniPlayer),{dragElement:xe}}const newScenario=async F=>{var b=new Scenario$1,Q=[];const D=await __vitePreload(()=>import("./sudb.308db96f.js"),[]).catch(U=>{console.log(U)});for(var O=0;O<D.SUD.Scenarios[F].length;O++)D.SUD.Scenarios[F][O].conditions[0]===!0&&Q.push(new DialogueScene(D.SUD.Scenarios[F][O]));return b.addScenes(...Q),b.load(),b.show(),b};var dist={},api={},axios$2={exports:{}},bind$2=function F(b,Q){return function(){for(var O=new Array(arguments.length),U=0;U<O.length;U++)O[U]=arguments[U];return b.apply(Q,O)}},bind$1=bind$2,toString=Object.prototype.toString;function isArray(F){return Array.isArray(F)}function isUndefined(F){return typeof F=="undefined"}function isBuffer(F){return F!==null&&!isUndefined(F)&&F.constructor!==null&&!isUndefined(F.constructor)&&typeof F.constructor.isBuffer=="function"&&F.constructor.isBuffer(F)}function isArrayBuffer(F){return toString.call(F)==="[object ArrayBuffer]"}function isFormData(F){return toString.call(F)==="[object FormData]"}function isArrayBufferView(F){var b;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?b=ArrayBuffer.isView(F):b=F&&F.buffer&&isArrayBuffer(F.buffer),b}function isString(F){return typeof F=="string"}function isNumber(F){return typeof F=="number"}function isObject(F){return F!==null&&typeof F=="object"}function isPlainObject(F){if(toString.call(F)!=="[object Object]")return!1;var b=Object.getPrototypeOf(F);return b===null||b===Object.prototype}function isDate(F){return toString.call(F)==="[object Date]"}function isFile(F){return toString.call(F)==="[object File]"}function isBlob(F){return toString.call(F)==="[object Blob]"}function isFunction(F){return toString.call(F)==="[object Function]"}function isStream(F){return isObject(F)&&isFunction(F.pipe)}function isURLSearchParams(F){return toString.call(F)==="[object URLSearchParams]"}function trim(F){return F.trim?F.trim():F.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(F,b){if(!(F===null||typeof F=="undefined"))if(typeof F!="object"&&(F=[F]),isArray(F))for(var Q=0,D=F.length;Q<D;Q++)b.call(null,F[Q],Q,F);else for(var O in F)Object.prototype.hasOwnProperty.call(F,O)&&b.call(null,F[O],O,F)}function merge(){var F={};function b(O,U){isPlainObject(F[U])&&isPlainObject(O)?F[U]=merge(F[U],O):isPlainObject(O)?F[U]=merge({},O):isArray(O)?F[U]=O.slice():F[U]=O}for(var Q=0,D=arguments.length;Q<D;Q++)forEach(arguments[Q],b);return F}function extend(F,b,Q){return forEach(b,function(O,U){Q&&typeof O=="function"?F[U]=bind$1(O,Q):F[U]=O}),F}function stripBOM(F){return F.charCodeAt(0)===65279&&(F=F.slice(1)),F}var utils$e={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM},utils$d=utils$e;function encode(F){return encodeURIComponent(F).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function F(b,Q,D){if(!Q)return b;var O;if(D)O=D(Q);else if(utils$d.isURLSearchParams(Q))O=Q.toString();else{var U=[];utils$d.forEach(Q,function(Y,X){Y===null||typeof Y=="undefined"||(utils$d.isArray(Y)?X=X+"[]":Y=[Y],utils$d.forEach(Y,function(re){utils$d.isDate(re)?re=re.toISOString():utils$d.isObject(re)&&(re=JSON.stringify(re)),U.push(encode(X)+"="+encode(re))}))}),O=U.join("&")}if(O){var q=b.indexOf("#");q!==-1&&(b=b.slice(0,q)),b+=(b.indexOf("?")===-1?"?":"&")+O}return b},utils$c=utils$e;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function F(b,Q,D){return this.handlers.push({fulfilled:b,rejected:Q,synchronous:D?D.synchronous:!1,runWhen:D?D.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function F(b){this.handlers[b]&&(this.handlers[b]=null)};InterceptorManager$1.prototype.forEach=function F(b){utils$c.forEach(this.handlers,function(D){D!==null&&b(D)})};var InterceptorManager_1=InterceptorManager$1,utils$b=utils$e,normalizeHeaderName$1=function F(b,Q){utils$b.forEach(b,function(O,U){U!==Q&&U.toUpperCase()===Q.toUpperCase()&&(b[Q]=O,delete b[U])})},enhanceError$2=function F(b,Q,D,O,U){return b.config=Q,D&&(b.code=D),b.request=O,b.response=U,b.isAxiosError=!0,b.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},b},transitional={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},enhanceError$1=enhanceError$2,createError$2=function F(b,Q,D,O,U){var q=new Error(b);return enhanceError$1(q,Q,D,O,U)},createError$1=createError$2,settle$1=function F(b,Q,D){var O=D.config.validateStatus;!D.status||!O||O(D.status)?b(D):Q(createError$1("Request failed with status code "+D.status,D.config,null,D.request,D))},utils$a=utils$e,cookies$1=utils$a.isStandardBrowserEnv()?function F(){return{write:function(Q,D,O,U,q,G){var Y=[];Y.push(Q+"="+encodeURIComponent(D)),utils$a.isNumber(O)&&Y.push("expires="+new Date(O).toGMTString()),utils$a.isString(U)&&Y.push("path="+U),utils$a.isString(q)&&Y.push("domain="+q),G===!0&&Y.push("secure"),document.cookie=Y.join("; ")},read:function(Q){var D=document.cookie.match(new RegExp("(^|;\\s*)("+Q+")=([^;]*)"));return D?decodeURIComponent(D[3]):null},remove:function(Q){this.write(Q,"",Date.now()-864e5)}}}():function F(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function F(b){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(b)},combineURLs$1=function F(b,Q){return Q?b.replace(/\/+$/,"")+"/"+Q.replace(/^\/+/,""):b},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function F(b,Q){return b&&!isAbsoluteURL(Q)?combineURLs(b,Q):Q},utils$9=utils$e,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function F(b){var Q={},D,O,U;return b&&utils$9.forEach(b.split(`
`),function(G){if(U=G.indexOf(":"),D=utils$9.trim(G.substr(0,U)).toLowerCase(),O=utils$9.trim(G.substr(U+1)),D){if(Q[D]&&ignoreDuplicateOf.indexOf(D)>=0)return;D==="set-cookie"?Q[D]=(Q[D]?Q[D]:[]).concat([O]):Q[D]=Q[D]?Q[D]+", "+O:O}}),Q},utils$8=utils$e,isURLSameOrigin$1=utils$8.isStandardBrowserEnv()?function F(){var b=/(msie|trident)/i.test(navigator.userAgent),Q=document.createElement("a"),D;function O(U){var q=U;return b&&(Q.setAttribute("href",q),q=Q.href),Q.setAttribute("href",q),{href:Q.href,protocol:Q.protocol?Q.protocol.replace(/:$/,""):"",host:Q.host,search:Q.search?Q.search.replace(/^\?/,""):"",hash:Q.hash?Q.hash.replace(/^#/,""):"",hostname:Q.hostname,port:Q.port,pathname:Q.pathname.charAt(0)==="/"?Q.pathname:"/"+Q.pathname}}return D=O(window.location.href),function(q){var G=utils$8.isString(q)?O(q):q;return G.protocol===D.protocol&&G.host===D.host}}():function F(){return function(){return!0}}();function Cancel$3(F){this.message=F}Cancel$3.prototype.toString=function F(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$3.prototype.__CANCEL__=!0;var Cancel_1=Cancel$3,utils$7=utils$e,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,transitionalDefaults$1=transitional,Cancel$2=Cancel_1,xhr=function F(b){return new Promise(function(D,O){var U=b.data,q=b.headers,G=b.responseType,Y;function X(){b.cancelToken&&b.cancelToken.unsubscribe(Y),b.signal&&b.signal.removeEventListener("abort",Y)}utils$7.isFormData(U)&&delete q["Content-Type"];var ee=new XMLHttpRequest;if(b.auth){var re=b.auth.username||"",ie=b.auth.password?unescape(encodeURIComponent(b.auth.password)):"";q.Authorization="Basic "+btoa(re+":"+ie)}var ae=buildFullPath(b.baseURL,b.url);ee.open(b.method.toUpperCase(),buildURL$1(ae,b.params,b.paramsSerializer),!0),ee.timeout=b.timeout;function ce(){if(!!ee){var ge="getAllResponseHeaders"in ee?parseHeaders(ee.getAllResponseHeaders()):null,Be=!G||G==="text"||G==="json"?ee.responseText:ee.response,Ie={data:Be,status:ee.status,statusText:ee.statusText,headers:ge,config:b,request:ee};settle(function(Ce){D(Ce),X()},function(Ce){O(Ce),X()},Ie),ee=null}}if("onloadend"in ee?ee.onloadend=ce:ee.onreadystatechange=function(){!ee||ee.readyState!==4||ee.status===0&&!(ee.responseURL&&ee.responseURL.indexOf("file:")===0)||setTimeout(ce)},ee.onabort=function(){!ee||(O(createError("Request aborted",b,"ECONNABORTED",ee)),ee=null)},ee.onerror=function(){O(createError("Network Error",b,null,ee)),ee=null},ee.ontimeout=function(){var Be=b.timeout?"timeout of "+b.timeout+"ms exceeded":"timeout exceeded",Ie=b.transitional||transitionalDefaults$1;b.timeoutErrorMessage&&(Be=b.timeoutErrorMessage),O(createError(Be,b,Ie.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",ee)),ee=null},utils$7.isStandardBrowserEnv()){var Ae=(b.withCredentials||isURLSameOrigin(ae))&&b.xsrfCookieName?cookies.read(b.xsrfCookieName):void 0;Ae&&(q[b.xsrfHeaderName]=Ae)}"setRequestHeader"in ee&&utils$7.forEach(q,function(Be,Ie){typeof U=="undefined"&&Ie.toLowerCase()==="content-type"?delete q[Ie]:ee.setRequestHeader(Ie,Be)}),utils$7.isUndefined(b.withCredentials)||(ee.withCredentials=!!b.withCredentials),G&&G!=="json"&&(ee.responseType=b.responseType),typeof b.onDownloadProgress=="function"&&ee.addEventListener("progress",b.onDownloadProgress),typeof b.onUploadProgress=="function"&&ee.upload&&ee.upload.addEventListener("progress",b.onUploadProgress),(b.cancelToken||b.signal)&&(Y=function(ge){!ee||(O(!ge||ge&&ge.type?new Cancel$2("canceled"):ge),ee.abort(),ee=null)},b.cancelToken&&b.cancelToken.subscribe(Y),b.signal&&(b.signal.aborted?Y():b.signal.addEventListener("abort",Y))),U||(U=null),ee.send(U)})},utils$6=utils$e,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,transitionalDefaults=transitional,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(F,b){!utils$6.isUndefined(F)&&utils$6.isUndefined(F["Content-Type"])&&(F["Content-Type"]=b)}function getDefaultAdapter(){var F;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(F=xhr),F}function stringifySafely(F,b,Q){if(utils$6.isString(F))try{return(b||JSON.parse)(F),utils$6.trim(F)}catch(D){if(D.name!=="SyntaxError")throw D}return(Q||JSON.stringify)(F)}var defaults$3={transitional:transitionalDefaults,adapter:getDefaultAdapter(),transformRequest:[function F(b,Q){return normalizeHeaderName(Q,"Accept"),normalizeHeaderName(Q,"Content-Type"),utils$6.isFormData(b)||utils$6.isArrayBuffer(b)||utils$6.isBuffer(b)||utils$6.isStream(b)||utils$6.isFile(b)||utils$6.isBlob(b)?b:utils$6.isArrayBufferView(b)?b.buffer:utils$6.isURLSearchParams(b)?(setContentTypeIfUnset(Q,"application/x-www-form-urlencoded;charset=utf-8"),b.toString()):utils$6.isObject(b)||Q&&Q["Content-Type"]==="application/json"?(setContentTypeIfUnset(Q,"application/json"),stringifySafely(b)):b}],transformResponse:[function F(b){var Q=this.transitional||defaults$3.transitional,D=Q&&Q.silentJSONParsing,O=Q&&Q.forcedJSONParsing,U=!D&&this.responseType==="json";if(U||O&&utils$6.isString(b)&&b.length)try{return JSON.parse(b)}catch(q){if(U)throw q.name==="SyntaxError"?enhanceError(q,this,"E_JSON_PARSE"):q}return b}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function F(b){return b>=200&&b<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils$6.forEach(["delete","get","head"],function F(b){defaults$3.headers[b]={}});utils$6.forEach(["post","put","patch"],function F(b){defaults$3.headers[b]=utils$6.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$5=utils$e,defaults$2=defaults_1,transformData$1=function F(b,Q,D){var O=this||defaults$2;return utils$5.forEach(D,function(q){b=q.call(O,b,Q)}),b},isCancel$1=function F(b){return!!(b&&b.__CANCEL__)},utils$4=utils$e,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1,Cancel$1=Cancel_1;function throwIfCancellationRequested(F){if(F.cancelToken&&F.cancelToken.throwIfRequested(),F.signal&&F.signal.aborted)throw new Cancel$1("canceled")}var dispatchRequest$1=function F(b){throwIfCancellationRequested(b),b.headers=b.headers||{},b.data=transformData.call(b,b.data,b.headers,b.transformRequest),b.headers=utils$4.merge(b.headers.common||{},b.headers[b.method]||{},b.headers),utils$4.forEach(["delete","get","head","post","put","patch","common"],function(O){delete b.headers[O]});var Q=b.adapter||defaults$1.adapter;return Q(b).then(function(O){return throwIfCancellationRequested(b),O.data=transformData.call(b,O.data,O.headers,b.transformResponse),O},function(O){return isCancel(O)||(throwIfCancellationRequested(b),O&&O.response&&(O.response.data=transformData.call(b,O.response.data,O.response.headers,b.transformResponse))),Promise.reject(O)})},utils$3=utils$e,mergeConfig$2=function F(b,Q){Q=Q||{};var D={};function O(ee,re){return utils$3.isPlainObject(ee)&&utils$3.isPlainObject(re)?utils$3.merge(ee,re):utils$3.isPlainObject(re)?utils$3.merge({},re):utils$3.isArray(re)?re.slice():re}function U(ee){if(utils$3.isUndefined(Q[ee])){if(!utils$3.isUndefined(b[ee]))return O(void 0,b[ee])}else return O(b[ee],Q[ee])}function q(ee){if(!utils$3.isUndefined(Q[ee]))return O(void 0,Q[ee])}function G(ee){if(utils$3.isUndefined(Q[ee])){if(!utils$3.isUndefined(b[ee]))return O(void 0,b[ee])}else return O(void 0,Q[ee])}function Y(ee){if(ee in Q)return O(b[ee],Q[ee]);if(ee in b)return O(void 0,b[ee])}var X={url:q,method:q,data:q,baseURL:G,transformRequest:G,transformResponse:G,paramsSerializer:G,timeout:G,timeoutMessage:G,withCredentials:G,adapter:G,responseType:G,xsrfCookieName:G,xsrfHeaderName:G,onUploadProgress:G,onDownloadProgress:G,decompress:G,maxContentLength:G,maxBodyLength:G,transport:G,httpAgent:G,httpsAgent:G,cancelToken:G,socketPath:G,responseEncoding:G,validateStatus:Y};return utils$3.forEach(Object.keys(b).concat(Object.keys(Q)),function(re){var ie=X[re]||U,ae=ie(re);utils$3.isUndefined(ae)&&ie!==Y||(D[re]=ae)}),D},data={version:"0.26.1"},VERSION=data.version,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(F,b){validators$1[F]=function(D){return typeof D===F||"a"+(b<1?"n ":" ")+F}});var deprecatedWarnings={};validators$1.transitional=function F(b,Q,D){function O(U,q){return"[Axios v"+VERSION+"] Transitional option '"+U+"'"+q+(D?". "+D:"")}return function(U,q,G){if(b===!1)throw new Error(O(q," has been removed"+(Q?" in "+Q:"")));return Q&&!deprecatedWarnings[q]&&(deprecatedWarnings[q]=!0,console.warn(O(q," has been deprecated since v"+Q+" and will be removed in the near future"))),b?b(U,q,G):!0}};function assertOptions(F,b,Q){if(typeof F!="object")throw new TypeError("options must be an object");for(var D=Object.keys(F),O=D.length;O-- >0;){var U=D[O],q=b[U];if(q){var G=F[U],Y=G===void 0||q(G,U,F);if(Y!==!0)throw new TypeError("option "+U+" must be "+Y);continue}if(Q!==!0)throw Error("Unknown option "+U)}}var validator$1={assertOptions,validators:validators$1},utils$2=utils$e,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(F){this.defaults=F,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function F(b,Q){typeof b=="string"?(Q=Q||{},Q.url=b):Q=b||{},Q=mergeConfig$1(this.defaults,Q),Q.method?Q.method=Q.method.toLowerCase():this.defaults.method?Q.method=this.defaults.method.toLowerCase():Q.method="get";var D=Q.transitional;D!==void 0&&validator.assertOptions(D,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1);var O=[],U=!0;this.interceptors.request.forEach(function(ae){typeof ae.runWhen=="function"&&ae.runWhen(Q)===!1||(U=U&&ae.synchronous,O.unshift(ae.fulfilled,ae.rejected))});var q=[];this.interceptors.response.forEach(function(ae){q.push(ae.fulfilled,ae.rejected)});var G;if(!U){var Y=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(Y,O),Y=Y.concat(q),G=Promise.resolve(Q);Y.length;)G=G.then(Y.shift(),Y.shift());return G}for(var X=Q;O.length;){var ee=O.shift(),re=O.shift();try{X=ee(X)}catch(ie){re(ie);break}}try{G=dispatchRequest(X)}catch(ie){return Promise.reject(ie)}for(;q.length;)G=G.then(q.shift(),q.shift());return G};Axios$1.prototype.getUri=function F(b){return b=mergeConfig$1(this.defaults,b),buildURL(b.url,b.params,b.paramsSerializer).replace(/^\?/,"")};utils$2.forEach(["delete","get","head","options"],function F(b){Axios$1.prototype[b]=function(Q,D){return this.request(mergeConfig$1(D||{},{method:b,url:Q,data:(D||{}).data}))}});utils$2.forEach(["post","put","patch"],function F(b){Axios$1.prototype[b]=function(Q,D,O){return this.request(mergeConfig$1(O||{},{method:b,url:Q,data:D}))}});var Axios_1=Axios$1,Cancel=Cancel_1;function CancelToken(F){if(typeof F!="function")throw new TypeError("executor must be a function.");var b;this.promise=new Promise(function(O){b=O});var Q=this;this.promise.then(function(D){if(!!Q._listeners){var O,U=Q._listeners.length;for(O=0;O<U;O++)Q._listeners[O](D);Q._listeners=null}}),this.promise.then=function(D){var O,U=new Promise(function(q){Q.subscribe(q),O=q}).then(D);return U.cancel=function(){Q.unsubscribe(O)},U},F(function(O){Q.reason||(Q.reason=new Cancel(O),b(Q.reason))})}CancelToken.prototype.throwIfRequested=function F(){if(this.reason)throw this.reason};CancelToken.prototype.subscribe=function F(b){if(this.reason){b(this.reason);return}this._listeners?this._listeners.push(b):this._listeners=[b]};CancelToken.prototype.unsubscribe=function F(b){if(!!this._listeners){var Q=this._listeners.indexOf(b);Q!==-1&&this._listeners.splice(Q,1)}};CancelToken.source=function F(){var b,Q=new CancelToken(function(O){b=O});return{token:Q,cancel:b}};var CancelToken_1=CancelToken,spread=function F(b){return function(D){return b.apply(null,D)}},utils$1=utils$e,isAxiosError=function F(b){return utils$1.isObject(b)&&b.isAxiosError===!0},utils=utils$e,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(F){var b=new Axios(F),Q=bind(Axios.prototype.request,b);return utils.extend(Q,Axios.prototype,b),utils.extend(Q,b),Q.create=function(O){return createInstance(mergeConfig(F,O))},Q}var axios$1=createInstance(defaults);axios$1.Axios=Axios;axios$1.Cancel=Cancel_1;axios$1.CancelToken=CancelToken_1;axios$1.isCancel=isCancel$1;axios$1.VERSION=data.version;axios$1.all=function F(b){return Promise.all(b)};axios$1.spread=spread;axios$1.isAxiosError=isAxiosError;axios$2.exports=axios$1;axios$2.exports.default=axios$1;var axios=axios$2.exports,common={},base={};(function(F){Object.defineProperty(F,"__esModule",{value:!0}),F.RequiredError=F.BaseAPI=F.COLLECTION_FORMATS=F.BASE_PATH=void 0;const b=axios;F.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),F.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class Q{constructor(U,q=F.BASE_PATH,G=b.default){this.basePath=q,this.axios=G,U&&(this.configuration=U,this.basePath=U.basePath||this.basePath)}}F.BaseAPI=Q;class D extends Error{constructor(U,q){super(q),this.field=U,this.name="RequiredError"}}F.RequiredError=D})(base);var __awaiter=commonjsGlobal&&commonjsGlobal.__awaiter||function(F,b,Q,D){function O(U){return U instanceof Q?U:new Q(function(q){q(U)})}return new(Q||(Q=Promise))(function(U,q){function G(ee){try{X(D.next(ee))}catch(re){q(re)}}function Y(ee){try{X(D.throw(ee))}catch(re){q(re)}}function X(ee){ee.done?U(ee.value):O(ee.value).then(G,Y)}X((D=D.apply(F,b||[])).next())})};Object.defineProperty(common,"__esModule",{value:!0});common.createRequestFunction=common.toPathString=common.serializeDataIfNeeded=common.setSearchParams=common.setOAuthToObject=common.setBearerAuthToObject=common.setBasicAuthToObject=common.setApiKeyToObject=common.assertParamExists=common.DUMMY_BASE_URL=void 0;const base_1=base;common.DUMMY_BASE_URL="https://example.com";common.assertParamExists=function(F,b,Q){if(Q==null)throw new base_1.RequiredError(b,`Required parameter ${b} was null or undefined when calling ${F}.`)};common.setApiKeyToObject=function(F,b,Q){return __awaiter(this,void 0,void 0,function*(){if(Q&&Q.apiKey){const D=typeof Q.apiKey=="function"?yield Q.apiKey(b):yield Q.apiKey;F[b]=D}})};common.setBasicAuthToObject=function(F,b){b&&(b.username||b.password)&&(F.auth={username:b.username,password:b.password})};common.setBearerAuthToObject=function(F,b){return __awaiter(this,void 0,void 0,function*(){if(b&&b.accessToken){const Q=typeof b.accessToken=="function"?yield b.accessToken():yield b.accessToken;F.Authorization="Bearer "+Q}})};common.setOAuthToObject=function(F,b,Q,D){return __awaiter(this,void 0,void 0,function*(){if(D&&D.accessToken){const O=typeof D.accessToken=="function"?yield D.accessToken(b,Q):yield D.accessToken;F.Authorization="Bearer "+O}})};function setFlattenedQueryParams(F,b,Q=""){b!=null&&(typeof b=="object"?Array.isArray(b)?b.forEach(D=>setFlattenedQueryParams(F,D,Q)):Object.keys(b).forEach(D=>setFlattenedQueryParams(F,b[D],`${Q}${Q!==""?".":""}${D}`)):F.has(Q)?F.append(Q,b):F.set(Q,b))}common.setSearchParams=function(F,...b){const Q=new URLSearchParams(F.search);setFlattenedQueryParams(Q,b),F.search=Q.toString()};common.serializeDataIfNeeded=function(F,b,Q){const D=typeof F!="string";return(D&&Q&&Q.isJsonMime?Q.isJsonMime(b.headers["Content-Type"]):D)?JSON.stringify(F!==void 0?F:{}):F||""};common.toPathString=function(F){return F.pathname+F.search+F.hash};common.createRequestFunction=function(F,b,Q,D){return(O=b,U=Q)=>{const q=Object.assign(Object.assign({},F.options),{url:((D==null?void 0:D.basePath)||U)+F.url});return O.request(q)}};(function(F){var b=commonjsGlobal&&commonjsGlobal.__awaiter||function(q,G,Y,X){function ee(re){return re instanceof Y?re:new Y(function(ie){ie(re)})}return new(Y||(Y=Promise))(function(re,ie){function ae(ge){try{Ae(X.next(ge))}catch(Be){ie(Be)}}function ce(ge){try{Ae(X.throw(ge))}catch(Be){ie(Be)}}function Ae(ge){ge.done?re(ge.value):ee(ge.value).then(ae,ce)}Ae((X=X.apply(q,G||[])).next())})};Object.defineProperty(F,"__esModule",{value:!0}),F.OpenAIApi=F.OpenAIApiFactory=F.OpenAIApiFp=F.OpenAIApiAxiosParamCreator=F.CreateImageRequestResponseFormatEnum=F.CreateImageRequestSizeEnum=F.ChatCompletionResponseMessageRoleEnum=F.ChatCompletionRequestMessageRoleEnum=void 0;const Q=axios,D=common,O=base;F.ChatCompletionRequestMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},F.ChatCompletionResponseMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},F.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},F.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},F.OpenAIApiAxiosParamCreator=function(q){return{cancelFineTune:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("cancelFineTune","fineTuneId",G);const X="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),createAnswer:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createAnswer","createAnswerRequest",G);const X="/answers",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createChatCompletion:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createChatCompletion","createChatCompletionRequest",G);const X="/chat/completions",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createClassification:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createClassification","createClassificationRequest",G);const X="/classifications",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createCompletion:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createCompletion","createCompletionRequest",G);const X="/completions",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createEdit:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createEdit","createEditRequest",G);const X="/edits",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createEmbedding:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createEmbedding","createEmbeddingRequest",G);const X="/embeddings",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createFile:(G,Y,X={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createFile","file",G),D.assertParamExists("createFile","purpose",Y);const ee="/files",re=new URL(ee,D.DUMMY_BASE_URL);let ie;q&&(ie=q.baseOptions);const ae=Object.assign(Object.assign({method:"POST"},ie),X),ce={},Ae={},ge=new(q&&q.formDataCtor||FormData);G!==void 0&&ge.append("file",G),Y!==void 0&&ge.append("purpose",Y),ce["Content-Type"]="multipart/form-data",D.setSearchParams(re,Ae);let Be=ie&&ie.headers?ie.headers:{};return ae.headers=Object.assign(Object.assign(Object.assign(Object.assign({},ce),ge.getHeaders()),Be),X.headers),ae.data=ge,{url:D.toPathString(re),options:ae}}),createFineTune:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createFineTune","createFineTuneRequest",G);const X="/fine-tunes",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createImage:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createImage","createImageRequest",G);const X="/images/generations",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createImageEdit:(G,Y,X,ee,re,ie,ae,ce={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createImageEdit","image",G),D.assertParamExists("createImageEdit","prompt",Y);const Ae="/images/edits",ge=new URL(Ae,D.DUMMY_BASE_URL);let Be;q&&(Be=q.baseOptions);const Ie=Object.assign(Object.assign({method:"POST"},Be),ce),_e={},Ce={},be=new(q&&q.formDataCtor||FormData);G!==void 0&&be.append("image",G),X!==void 0&&be.append("mask",X),Y!==void 0&&be.append("prompt",Y),ee!==void 0&&be.append("n",ee),re!==void 0&&be.append("size",re),ie!==void 0&&be.append("response_format",ie),ae!==void 0&&be.append("user",ae),_e["Content-Type"]="multipart/form-data",D.setSearchParams(ge,Ce);let Qe=Be&&Be.headers?Be.headers:{};return Ie.headers=Object.assign(Object.assign(Object.assign(Object.assign({},_e),be.getHeaders()),Qe),ce.headers),Ie.data=be,{url:D.toPathString(ge),options:Ie}}),createImageVariation:(G,Y,X,ee,re,ie={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createImageVariation","image",G);const ae="/images/variations",ce=new URL(ae,D.DUMMY_BASE_URL);let Ae;q&&(Ae=q.baseOptions);const ge=Object.assign(Object.assign({method:"POST"},Ae),ie),Be={},Ie={},_e=new(q&&q.formDataCtor||FormData);G!==void 0&&_e.append("image",G),Y!==void 0&&_e.append("n",Y),X!==void 0&&_e.append("size",X),ee!==void 0&&_e.append("response_format",ee),re!==void 0&&_e.append("user",re),Be["Content-Type"]="multipart/form-data",D.setSearchParams(ce,Ie);let Ce=Ae&&Ae.headers?Ae.headers:{};return ge.headers=Object.assign(Object.assign(Object.assign(Object.assign({},Be),_e.getHeaders()),Ce),ie.headers),ge.data=_e,{url:D.toPathString(ce),options:ge}}),createModeration:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createModeration","createModerationRequest",G);const X="/moderations",ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"POST"},re),Y),ae={},ce={};ae["Content-Type"]="application/json",D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),ie.data=D.serializeDataIfNeeded(G,ie,q),{url:D.toPathString(ee),options:ie}}),createSearch:(G,Y,X={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createSearch","engineId",G),D.assertParamExists("createSearch","createSearchRequest",Y);const ee="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(G))),re=new URL(ee,D.DUMMY_BASE_URL);let ie;q&&(ie=q.baseOptions);const ae=Object.assign(Object.assign({method:"POST"},ie),X),ce={},Ae={};ce["Content-Type"]="application/json",D.setSearchParams(re,Ae);let ge=ie&&ie.headers?ie.headers:{};return ae.headers=Object.assign(Object.assign(Object.assign({},ce),ge),X.headers),ae.data=D.serializeDataIfNeeded(Y,ae,q),{url:D.toPathString(re),options:ae}}),createTranscription:(G,Y,X,ee,re,ie,ae={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createTranscription","file",G),D.assertParamExists("createTranscription","model",Y);const ce="/audio/transcriptions",Ae=new URL(ce,D.DUMMY_BASE_URL);let ge;q&&(ge=q.baseOptions);const Be=Object.assign(Object.assign({method:"POST"},ge),ae),Ie={},_e={},Ce=new(q&&q.formDataCtor||FormData);G!==void 0&&Ce.append("file",G),Y!==void 0&&Ce.append("model",Y),X!==void 0&&Ce.append("prompt",X),ee!==void 0&&Ce.append("response_format",ee),re!==void 0&&Ce.append("temperature",re),ie!==void 0&&Ce.append("language",ie),Ie["Content-Type"]="multipart/form-data",D.setSearchParams(Ae,_e);let be=ge&&ge.headers?ge.headers:{};return Be.headers=Object.assign(Object.assign(Object.assign(Object.assign({},Ie),Ce.getHeaders()),be),ae.headers),Be.data=Ce,{url:D.toPathString(Ae),options:Be}}),createTranslation:(G,Y,X,ee,re,ie={})=>b(this,void 0,void 0,function*(){D.assertParamExists("createTranslation","file",G),D.assertParamExists("createTranslation","model",Y);const ae="/audio/translations",ce=new URL(ae,D.DUMMY_BASE_URL);let Ae;q&&(Ae=q.baseOptions);const ge=Object.assign(Object.assign({method:"POST"},Ae),ie),Be={},Ie={},_e=new(q&&q.formDataCtor||FormData);G!==void 0&&_e.append("file",G),Y!==void 0&&_e.append("model",Y),X!==void 0&&_e.append("prompt",X),ee!==void 0&&_e.append("response_format",ee),re!==void 0&&_e.append("temperature",re),Be["Content-Type"]="multipart/form-data",D.setSearchParams(ce,Ie);let Ce=Ae&&Ae.headers?Ae.headers:{};return ge.headers=Object.assign(Object.assign(Object.assign(Object.assign({},Be),_e.getHeaders()),Ce),ie.headers),ge.data=_e,{url:D.toPathString(ce),options:ge}}),deleteFile:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("deleteFile","fileId",G);const X="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"DELETE"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),deleteModel:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("deleteModel","model",G);const X="/models/{model}".replace("{model}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"DELETE"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),downloadFile:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("downloadFile","fileId",G);const X="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"GET"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),listEngines:(G={})=>b(this,void 0,void 0,function*(){const Y="/engines",X=new URL(Y,D.DUMMY_BASE_URL);let ee;q&&(ee=q.baseOptions);const re=Object.assign(Object.assign({method:"GET"},ee),G),ie={},ae={};D.setSearchParams(X,ae);let ce=ee&&ee.headers?ee.headers:{};return re.headers=Object.assign(Object.assign(Object.assign({},ie),ce),G.headers),{url:D.toPathString(X),options:re}}),listFiles:(G={})=>b(this,void 0,void 0,function*(){const Y="/files",X=new URL(Y,D.DUMMY_BASE_URL);let ee;q&&(ee=q.baseOptions);const re=Object.assign(Object.assign({method:"GET"},ee),G),ie={},ae={};D.setSearchParams(X,ae);let ce=ee&&ee.headers?ee.headers:{};return re.headers=Object.assign(Object.assign(Object.assign({},ie),ce),G.headers),{url:D.toPathString(X),options:re}}),listFineTuneEvents:(G,Y,X={})=>b(this,void 0,void 0,function*(){D.assertParamExists("listFineTuneEvents","fineTuneId",G);const ee="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(G))),re=new URL(ee,D.DUMMY_BASE_URL);let ie;q&&(ie=q.baseOptions);const ae=Object.assign(Object.assign({method:"GET"},ie),X),ce={},Ae={};Y!==void 0&&(Ae.stream=Y),D.setSearchParams(re,Ae);let ge=ie&&ie.headers?ie.headers:{};return ae.headers=Object.assign(Object.assign(Object.assign({},ce),ge),X.headers),{url:D.toPathString(re),options:ae}}),listFineTunes:(G={})=>b(this,void 0,void 0,function*(){const Y="/fine-tunes",X=new URL(Y,D.DUMMY_BASE_URL);let ee;q&&(ee=q.baseOptions);const re=Object.assign(Object.assign({method:"GET"},ee),G),ie={},ae={};D.setSearchParams(X,ae);let ce=ee&&ee.headers?ee.headers:{};return re.headers=Object.assign(Object.assign(Object.assign({},ie),ce),G.headers),{url:D.toPathString(X),options:re}}),listModels:(G={})=>b(this,void 0,void 0,function*(){const Y="/models",X=new URL(Y,D.DUMMY_BASE_URL);let ee;q&&(ee=q.baseOptions);const re=Object.assign(Object.assign({method:"GET"},ee),G),ie={},ae={};D.setSearchParams(X,ae);let ce=ee&&ee.headers?ee.headers:{};return re.headers=Object.assign(Object.assign(Object.assign({},ie),ce),G.headers),{url:D.toPathString(X),options:re}}),retrieveEngine:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("retrieveEngine","engineId",G);const X="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"GET"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),retrieveFile:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("retrieveFile","fileId",G);const X="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"GET"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),retrieveFineTune:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("retrieveFineTune","fineTuneId",G);const X="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"GET"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}}),retrieveModel:(G,Y={})=>b(this,void 0,void 0,function*(){D.assertParamExists("retrieveModel","model",G);const X="/models/{model}".replace("{model}",encodeURIComponent(String(G))),ee=new URL(X,D.DUMMY_BASE_URL);let re;q&&(re=q.baseOptions);const ie=Object.assign(Object.assign({method:"GET"},re),Y),ae={},ce={};D.setSearchParams(ee,ce);let Ae=re&&re.headers?re.headers:{};return ie.headers=Object.assign(Object.assign(Object.assign({},ae),Ae),Y.headers),{url:D.toPathString(ee),options:ie}})}},F.OpenAIApiFp=function(q){const G=F.OpenAIApiAxiosParamCreator(q);return{cancelFineTune(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.cancelFineTune(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createAnswer(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createAnswer(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createChatCompletion(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createChatCompletion(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createClassification(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createClassification(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createCompletion(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createCompletion(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createEdit(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createEdit(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createEmbedding(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createEmbedding(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createFile(Y,X,ee){return b(this,void 0,void 0,function*(){const re=yield G.createFile(Y,X,ee);return D.createRequestFunction(re,Q.default,O.BASE_PATH,q)})},createFineTune(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createFineTune(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createImage(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createImage(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createImageEdit(Y,X,ee,re,ie,ae,ce,Ae){return b(this,void 0,void 0,function*(){const ge=yield G.createImageEdit(Y,X,ee,re,ie,ae,ce,Ae);return D.createRequestFunction(ge,Q.default,O.BASE_PATH,q)})},createImageVariation(Y,X,ee,re,ie,ae){return b(this,void 0,void 0,function*(){const ce=yield G.createImageVariation(Y,X,ee,re,ie,ae);return D.createRequestFunction(ce,Q.default,O.BASE_PATH,q)})},createModeration(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.createModeration(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},createSearch(Y,X,ee){return b(this,void 0,void 0,function*(){const re=yield G.createSearch(Y,X,ee);return D.createRequestFunction(re,Q.default,O.BASE_PATH,q)})},createTranscription(Y,X,ee,re,ie,ae,ce){return b(this,void 0,void 0,function*(){const Ae=yield G.createTranscription(Y,X,ee,re,ie,ae,ce);return D.createRequestFunction(Ae,Q.default,O.BASE_PATH,q)})},createTranslation(Y,X,ee,re,ie,ae){return b(this,void 0,void 0,function*(){const ce=yield G.createTranslation(Y,X,ee,re,ie,ae);return D.createRequestFunction(ce,Q.default,O.BASE_PATH,q)})},deleteFile(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.deleteFile(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},deleteModel(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.deleteModel(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},downloadFile(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.downloadFile(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},listEngines(Y){return b(this,void 0,void 0,function*(){const X=yield G.listEngines(Y);return D.createRequestFunction(X,Q.default,O.BASE_PATH,q)})},listFiles(Y){return b(this,void 0,void 0,function*(){const X=yield G.listFiles(Y);return D.createRequestFunction(X,Q.default,O.BASE_PATH,q)})},listFineTuneEvents(Y,X,ee){return b(this,void 0,void 0,function*(){const re=yield G.listFineTuneEvents(Y,X,ee);return D.createRequestFunction(re,Q.default,O.BASE_PATH,q)})},listFineTunes(Y){return b(this,void 0,void 0,function*(){const X=yield G.listFineTunes(Y);return D.createRequestFunction(X,Q.default,O.BASE_PATH,q)})},listModels(Y){return b(this,void 0,void 0,function*(){const X=yield G.listModels(Y);return D.createRequestFunction(X,Q.default,O.BASE_PATH,q)})},retrieveEngine(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.retrieveEngine(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},retrieveFile(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.retrieveFile(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},retrieveFineTune(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.retrieveFineTune(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})},retrieveModel(Y,X){return b(this,void 0,void 0,function*(){const ee=yield G.retrieveModel(Y,X);return D.createRequestFunction(ee,Q.default,O.BASE_PATH,q)})}}},F.OpenAIApiFactory=function(q,G,Y){const X=F.OpenAIApiFp(q);return{cancelFineTune(ee,re){return X.cancelFineTune(ee,re).then(ie=>ie(Y,G))},createAnswer(ee,re){return X.createAnswer(ee,re).then(ie=>ie(Y,G))},createChatCompletion(ee,re){return X.createChatCompletion(ee,re).then(ie=>ie(Y,G))},createClassification(ee,re){return X.createClassification(ee,re).then(ie=>ie(Y,G))},createCompletion(ee,re){return X.createCompletion(ee,re).then(ie=>ie(Y,G))},createEdit(ee,re){return X.createEdit(ee,re).then(ie=>ie(Y,G))},createEmbedding(ee,re){return X.createEmbedding(ee,re).then(ie=>ie(Y,G))},createFile(ee,re,ie){return X.createFile(ee,re,ie).then(ae=>ae(Y,G))},createFineTune(ee,re){return X.createFineTune(ee,re).then(ie=>ie(Y,G))},createImage(ee,re){return X.createImage(ee,re).then(ie=>ie(Y,G))},createImageEdit(ee,re,ie,ae,ce,Ae,ge,Be){return X.createImageEdit(ee,re,ie,ae,ce,Ae,ge,Be).then(Ie=>Ie(Y,G))},createImageVariation(ee,re,ie,ae,ce,Ae){return X.createImageVariation(ee,re,ie,ae,ce,Ae).then(ge=>ge(Y,G))},createModeration(ee,re){return X.createModeration(ee,re).then(ie=>ie(Y,G))},createSearch(ee,re,ie){return X.createSearch(ee,re,ie).then(ae=>ae(Y,G))},createTranscription(ee,re,ie,ae,ce,Ae,ge){return X.createTranscription(ee,re,ie,ae,ce,Ae,ge).then(Be=>Be(Y,G))},createTranslation(ee,re,ie,ae,ce,Ae){return X.createTranslation(ee,re,ie,ae,ce,Ae).then(ge=>ge(Y,G))},deleteFile(ee,re){return X.deleteFile(ee,re).then(ie=>ie(Y,G))},deleteModel(ee,re){return X.deleteModel(ee,re).then(ie=>ie(Y,G))},downloadFile(ee,re){return X.downloadFile(ee,re).then(ie=>ie(Y,G))},listEngines(ee){return X.listEngines(ee).then(re=>re(Y,G))},listFiles(ee){return X.listFiles(ee).then(re=>re(Y,G))},listFineTuneEvents(ee,re,ie){return X.listFineTuneEvents(ee,re,ie).then(ae=>ae(Y,G))},listFineTunes(ee){return X.listFineTunes(ee).then(re=>re(Y,G))},listModels(ee){return X.listModels(ee).then(re=>re(Y,G))},retrieveEngine(ee,re){return X.retrieveEngine(ee,re).then(ie=>ie(Y,G))},retrieveFile(ee,re){return X.retrieveFile(ee,re).then(ie=>ie(Y,G))},retrieveFineTune(ee,re){return X.retrieveFineTune(ee,re).then(ie=>ie(Y,G))},retrieveModel(ee,re){return X.retrieveModel(ee,re).then(ie=>ie(Y,G))}}};class U extends O.BaseAPI{cancelFineTune(G,Y){return F.OpenAIApiFp(this.configuration).cancelFineTune(G,Y).then(X=>X(this.axios,this.basePath))}createAnswer(G,Y){return F.OpenAIApiFp(this.configuration).createAnswer(G,Y).then(X=>X(this.axios,this.basePath))}createChatCompletion(G,Y){return F.OpenAIApiFp(this.configuration).createChatCompletion(G,Y).then(X=>X(this.axios,this.basePath))}createClassification(G,Y){return F.OpenAIApiFp(this.configuration).createClassification(G,Y).then(X=>X(this.axios,this.basePath))}createCompletion(G,Y){return F.OpenAIApiFp(this.configuration).createCompletion(G,Y).then(X=>X(this.axios,this.basePath))}createEdit(G,Y){return F.OpenAIApiFp(this.configuration).createEdit(G,Y).then(X=>X(this.axios,this.basePath))}createEmbedding(G,Y){return F.OpenAIApiFp(this.configuration).createEmbedding(G,Y).then(X=>X(this.axios,this.basePath))}createFile(G,Y,X){return F.OpenAIApiFp(this.configuration).createFile(G,Y,X).then(ee=>ee(this.axios,this.basePath))}createFineTune(G,Y){return F.OpenAIApiFp(this.configuration).createFineTune(G,Y).then(X=>X(this.axios,this.basePath))}createImage(G,Y){return F.OpenAIApiFp(this.configuration).createImage(G,Y).then(X=>X(this.axios,this.basePath))}createImageEdit(G,Y,X,ee,re,ie,ae,ce){return F.OpenAIApiFp(this.configuration).createImageEdit(G,Y,X,ee,re,ie,ae,ce).then(Ae=>Ae(this.axios,this.basePath))}createImageVariation(G,Y,X,ee,re,ie){return F.OpenAIApiFp(this.configuration).createImageVariation(G,Y,X,ee,re,ie).then(ae=>ae(this.axios,this.basePath))}createModeration(G,Y){return F.OpenAIApiFp(this.configuration).createModeration(G,Y).then(X=>X(this.axios,this.basePath))}createSearch(G,Y,X){return F.OpenAIApiFp(this.configuration).createSearch(G,Y,X).then(ee=>ee(this.axios,this.basePath))}createTranscription(G,Y,X,ee,re,ie,ae){return F.OpenAIApiFp(this.configuration).createTranscription(G,Y,X,ee,re,ie,ae).then(ce=>ce(this.axios,this.basePath))}createTranslation(G,Y,X,ee,re,ie){return F.OpenAIApiFp(this.configuration).createTranslation(G,Y,X,ee,re,ie).then(ae=>ae(this.axios,this.basePath))}deleteFile(G,Y){return F.OpenAIApiFp(this.configuration).deleteFile(G,Y).then(X=>X(this.axios,this.basePath))}deleteModel(G,Y){return F.OpenAIApiFp(this.configuration).deleteModel(G,Y).then(X=>X(this.axios,this.basePath))}downloadFile(G,Y){return F.OpenAIApiFp(this.configuration).downloadFile(G,Y).then(X=>X(this.axios,this.basePath))}listEngines(G){return F.OpenAIApiFp(this.configuration).listEngines(G).then(Y=>Y(this.axios,this.basePath))}listFiles(G){return F.OpenAIApiFp(this.configuration).listFiles(G).then(Y=>Y(this.axios,this.basePath))}listFineTuneEvents(G,Y,X){return F.OpenAIApiFp(this.configuration).listFineTuneEvents(G,Y,X).then(ee=>ee(this.axios,this.basePath))}listFineTunes(G){return F.OpenAIApiFp(this.configuration).listFineTunes(G).then(Y=>Y(this.axios,this.basePath))}listModels(G){return F.OpenAIApiFp(this.configuration).listModels(G).then(Y=>Y(this.axios,this.basePath))}retrieveEngine(G,Y){return F.OpenAIApiFp(this.configuration).retrieveEngine(G,Y).then(X=>X(this.axios,this.basePath))}retrieveFile(G,Y){return F.OpenAIApiFp(this.configuration).retrieveFile(G,Y).then(X=>X(this.axios,this.basePath))}retrieveFineTune(G,Y){return F.OpenAIApiFp(this.configuration).retrieveFineTune(G,Y).then(X=>X(this.axios,this.basePath))}retrieveModel(G,Y){return F.OpenAIApiFp(this.configuration).retrieveModel(G,Y).then(X=>X(this.axios,this.basePath))}}F.OpenAIApi=U})(api);var configuration={};const name="openai",version="3.2.1",description="Node.js library for the OpenAI API",repository={type:"git",url:"git@github.com:openai/openai-node.git"},keywords=["openai","open","ai","gpt-3","gpt3"],author="OpenAI",license="MIT",main="./dist/index.js",types="./dist/index.d.ts",scripts={build:"tsc --outDir dist/"},dependencies={axios:"^0.26.0","form-data":"^4.0.0"},devDependencies={"@types/node":"^12.11.5",typescript:"^3.6.4"};var require$$0={name,version,description,repository,keywords,author,license,main,types,scripts,dependencies,devDependencies},browser=typeof self=="object"?self.FormData:window.FormData;Object.defineProperty(configuration,"__esModule",{value:!0});configuration.Configuration=void 0;const packageJson=require$$0;class Configuration{constructor(b={}){this.apiKey=b.apiKey,this.organization=b.organization,this.username=b.username,this.password=b.password,this.accessToken=b.accessToken,this.basePath=b.basePath,this.baseOptions=b.baseOptions,this.formDataCtor=b.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${packageJson.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=browser)}isJsonMime(b){const Q=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return b!==null&&(Q.test(b)||b.toLowerCase()==="application/json-patch+json")}}configuration.Configuration=Configuration;(function(F){var b=commonjsGlobal&&commonjsGlobal.__createBinding||(Object.create?function(D,O,U,q){q===void 0&&(q=U),Object.defineProperty(D,q,{enumerable:!0,get:function(){return O[U]}})}:function(D,O,U,q){q===void 0&&(q=U),D[q]=O[U]}),Q=commonjsGlobal&&commonjsGlobal.__exportStar||function(D,O){for(var U in D)U!=="default"&&!O.hasOwnProperty(U)&&b(O,D,U)};Object.defineProperty(F,"__esModule",{value:!0}),Q(api,F),Q(configuration,F)})(dist);window.dtmenuOpen=!1;window.dtfullMenuOpen=!1;const VITE_ScogeI$1="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";new SoundtrackManager;var nmcProps={ringType:"",landRank:0,rank:0,powerUps:[0],progress:0,xp:0,category:"",linked:!1,identifier:"",alias:"",email:"",earthText:[""],styles:[""],discovered:[""],discoveredProgress:0,power:0,mental:0,physical:0,health:0,speed:0,sight:0,endurance:0,domains:[0],playerLocation:0,soundLevel:0,musicLevel:0,fsOn:!1,notiOn:!1,networkClass:"",network:[""],landNumber:0,story:{title:"",text:"",imagesUri:[""],videoURI:""},bankooText:[""],imageCompData:[0],ancestorsNames:[""],ancestorsImages:[0]};class getUniMenu extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get uniMenu(){return this.getAttribute("uniMenu")}set uniMenu(b){this.setAttribute("uniMenu",b)}static get observedAttributes(){return["uniMenu"]}attributeChangedCallback(b,Q,D){b==="uniMenu"&&this.render()}toggleMenu(){const b=this.shadow.querySelector("#uniMenu"),Q=this.shadow.querySelector("#uniMenuIcon"),D=this.shadow.querySelector("#menuItems"),O=this.shadow.querySelector("#menuHeader"),U=this.shadow.querySelector("#refresh");if(window.dtmenuOpen===!1){Q.style.transform="rotate(180deg)",b.style.height="auto",O.style.height="100%",window.dtmenuOpen=!0;return}else{O.style.height="100%",setTimeout(()=>{b.style.height="10%"},150),Q.style.transform="rotate(0deg)",D.style.height="0%",D.style.overflow="hidden",window.dtmenuOpen=!1,U.style.animationPlayState="paused",this.closeFullMenu();return}}openFullMenu(){const b=this.shadow.querySelector("#uniMenu"),Q=this.shadow.querySelector("#fullMenu"),D=this.shadow.querySelector("#fullMenuBG");this.shadow.querySelector("#menuItems");const O=this.shadow.querySelector("#refresh");if(window.dtfullMenuOpen===!1){b.style.overflowX="visible",Q.style.width="500px",D.style.transform="scaleX(1)",b.style.borderBottomRightRadius="0px",b.style.borderTopRightRadius="0px",b.style.borderRight="0px solid black",window.dtfullMenuOpen=!0,O.style.display="block",O.style.animationPlayState="running";return}this.shadow.getElementById("beaconNoti").style.display="none"}closeFullMenu(){const b=this.shadow.querySelector("#uniMenu"),Q=this.shadow.querySelector("#fullMenu"),D=this.shadow.querySelector("#fullMenuBG"),O=this.shadow.querySelector("#refresh");Q.style.width="0px",D.style.transform="scaleX(0)",O.style.animationPlayState="paused",O.style.display="none",setTimeout(()=>{b.style.borderBottomRightRadius="10px",b.style.borderTopRightRadius="10px",b.style.borderRight="2px solid #ff002d"},500),window.dtfullMenuOpen=!1}sendFeedback(b){b.preventDefault(),this.shadow.getElementById("feedbackEmailInput").value,this.shadow.getElementById("feedbackInput").value,this.shadow.getElementById("feedbackForm").submit()}toggleFullScreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}editProfile(b){b==null||b.target;let Q=this.shadow.getElementById("proImgSect"),D=this.shadow.getElementById("proImg"),O=this.shadow.getElementById("editImgIcon"),U=this.shadow.getElementById("profileDesc"),q=this.shadow.getElementById("proEdit"),G=this.shadow.getElementById("proSave"),Y=this.shadow.getElementById("proLabelName"),X=this.shadow.getElementById("proLabelIdentity"),ee=this.shadow.getElementById("proLabelEmail");q.innerHTML="CANCEL",G.style.color="var(--accent)",G.style.border="2px solid var(--accent)",G.style.opacity="1",G.style.pointerEvents="all",U.style.pointerEvents="all",U.readOnly=!1,U.style.borderLeft="1px solid var(--primary)",U.style.borderRight="1px solid var(--primary)",U.style.borderRadius="10px",U.style.borderBottom="none",U.style.resize="none",U.style.borderTop="none",U.value="",U.style.animation="editBlinking 2s infinite",U.focus(),Y.style.animation="editBlinking 2s infinite",X.style.animation="editBlinking 2s infinite",ee.style.animation="editBlinking 2s infinite",window.deactivateDrag(),Q.style.borderLeft="1px solid var(--accent)",Q.style.borderRight="1px solid var(--accent)",O.style.display="block",D.style.filter="blur(5px)",D.style.filter="brightness(0.2)";const re=document.createElement("input");re.type="file",re.accept="image/*",re.addEventListener("change",ie=>{const ae=ie.target.files[0];if(ae){console.log("Selected file:",ae);const ce=new FileReader;ce.onload=Ae=>{const ge=new Blob([Ae.target.result],{type:ae.type});console.log("Blob:",ge);const Be=URL.createObjectURL(ge);D.src=Be,D.style.filter="brightness(1)",this.imageBlob=ge},ce.readAsArrayBuffer(ae)}}),Q.addEventListener("click",()=>{re.click()}),G.addEventListener("click",()=>{this.saveProfileTemp()})}convertForBankoo(){}readBlobAsArrayBuffer(b){return new Promise((Q,D)=>{const O=new FileReader;O.onload=()=>Q(O.result),O.onerror=D,O.readAsArrayBuffer(b)})}async saveProfileTemp(){var Ce;this.shadow.getElementById("proImgSect"),this.shadow.getElementById("proImg"),this.shadow.getElementById("editImgIcon");let b=this.shadow.getElementById("profileDesc");this.shadow.getElementById("proEdit"),this.shadow.getElementById("proSave");let Q=this.shadow.getElementById("proLabelName"),D=this.shadow.getElementById("proLabelIdentity"),O=this.shadow.getElementById("proLabelEmail");const U=this.imageBlob,q=await this.readBlobAsArrayBuffer(U),G=1024,Y=new Uint8Array(q),X=[];for(let be=0;be<Y.length;be+=G)X.push(Y.slice(be,be+G));const ee=X.map(be=>Array.from(be)),re=new dist.Configuration({apiKey:VITE_ScogeI$1});var ae=await new dist.OpenAIApi(re).createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Convert ${b.value} to speak from a futuristic sci-fi perspective`}],max_tokens:40}).catch(be=>{console.log(be)});const Ae=await new dist.OpenAIApi(re).createImage({prompt:ae.data.choices[0].message.content,n:1,size:"512x512"});console.log("newImage:",Ae),(Ce=document.getElementById("GenImgCont"))==null||Ce.remove();var ge=document.createElement("div"),Be=document.createElement("img"),Ie=document.createElement("p");Ie.innerHTML=ae.data.choices[0].message.content,Be.src=Ae.data.data[0].url,ge.appendChild(Be),ge.appendChild(Ie),ge.setAttribute("id","GenImgCont"),ge.addEventListener("click",()=>{ge.remove()}),document.getElementById("camera").appendChild(ge),console.log("byteArray:",ee),nmcProps.alias=Q.value,nmcProps.email=O.value,nmcProps.identifier=D.value,nmcProps.earthText=[b.value],nmcProps.bankooText=[ae.data.choices[0].message.content];var _e=await window.ic.bitfinityWallet.getPrincipal();console.log(nmcProps),window.suUiActor.updateTemp(_e,0,[nmcProps]),console.log("Saved Temp Profile")}openBeaconMessage(b){var q,G,Y;var Q=b.target.getAttribute("data-message"),D=b.target;(q=document.getElementById("beaconPan"))==null||q.remove();var O=document.createElement("div"),U=Q;O.setAttribute("class","beaconPanel"),O.setAttribute("id","beaconPan"),O.innerHTML=`
    <div id="beaconBody">
        <div id="beaconTutHead">NEW DOMAIN BEACON!</div>
        <div id="beaconTutBody">${U}</div>
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
    `,document.getElementById("camera").appendChild(O),document.getElementById("beaconPan").style.display="block",(G=document.getElementById("beaconAction2"))==null||G.addEventListener("click",()=>{var X;(X=document.getElementById("beaconPan"))==null||X.remove()}),(Y=document.getElementById("beaconAction1"))==null||Y.addEventListener("click",()=>{var X;(X=document.getElementById("beaconPan"))==null||X.remove(),D.querySelector(".beaconIdenIcon").style.opacity="0"})}switchMenuTabs(b){var Q=b.target.id,D=b.target.classList[1],O=this.shadow.querySelector("#fm-menu1"),U=this.shadow.querySelector("#fm-menu2"),q=this.shadow.querySelector("#fm-menu3");switch(Q){case"fm-menu1":this.shadow.querySelector(`.${D}1`).style.display="grid",this.shadow.querySelector(`.${D}2`).style.display="none",this.shadow.querySelector(`.${D}3`).style.display="none",O.setAttribute("class",`men-active ${D} selectedMenu`),U.setAttribute("class",`men-active ${D}`),q.setAttribute("class",`men-active ${D}`);break;case"fm-menu2":this.shadow.querySelector(`.${D}1`).style.display="none",this.shadow.querySelector(`.${D}2`).style.display="grid",this.shadow.querySelector(`.${D}3`).style.display="none",O.setAttribute("class",`men-active ${D}`),U.setAttribute("class",`men-active ${D} selectedMenu`),q.setAttribute("class",`men-active ${D}`);break;case"fm-menu3":this.shadow.querySelector(`.${D}1`).style.display="none",this.shadow.querySelector(`.${D}2`).style.display="none",this.shadow.querySelector(`.${D}3`).style.display="grid",O.setAttribute("class",`men-active ${D}`),U.setAttribute("class",`men-active ${D}`),q.setAttribute("class",`men-active ${D} selectedMenu`);break}}connectedCallback(){this.render(),this.shadow.getElementById("fsToggle").addEventListener("click",()=>{this.toggleFullScreen()}),this.shadow.querySelector("#uniMenuIcon").addEventListener("click",()=>{this.toggleMenu()}),this.shadow.querySelector("#uniMenuIcon2").addEventListener("click",()=>{this.closeFullMenu()}),this.tabs=this.shadow.querySelectorAll(".menuTabs"),this.tabs.forEach(b=>{b.id!="uniMenuExit"?b.addEventListener("click",()=>{this.openFullMenu()}):b.addEventListener("click",()=>{this.closeFullMenu(),window.dtfullMenuOpen=!1})}),this.headerTabs=this.shadow.querySelectorAll(".men-active"),this.headerTabs.forEach(b=>{b.addEventListener("click",Q=>{this.switchMenuTabs(Q)})}),this.form=this.shadow.querySelector("#feedbackForm"),this.form.addEventListener("submit",b=>{b.preventDefault(),this.shadow.getElementById("menuLoadingScreen2").style.display="grid";let Q=new FormData(this.form);fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:Q,mode:"cors"}).then(D=>D.text()).then(D=>{this.form.reset(),this.shadow.getElementById("menuLoadingScreen2").style.display="none",this.shadow.getElementById("feedbackHeadline").style.color="var(--accent)",this.shadow.getElementById("feedbackHeadline").innerHTML="Outstanding feedback citizen!",setTimeout(()=>{this.shadow.getElementById("feedbackHeadline").style.color="var(--primary)",this.shadow.getElementById("feedbackHeadline").innerHTML="This City needs more people like you!"},3e3)})}),this.shadow.querySelector("#menuMessageBody").addEventListener("click",()=>{var b={target:this.shadow.querySelector("#fm-menu2")},Q={target:this.shadow.querySelector("#menuBeacons")};this.shadow.querySelector("#uniMenuBeacons").click(b),this.switchMenuTabs(b),window.headlineSwtich(Q)}),this.shadow.getElementById("pinMenu").addEventListener("click",()=>{pinMenu()}),this.beacons=this.shadow.querySelectorAll(".beacon"),this.beacons.forEach(b=>{b.addEventListener("click",Q=>{console.log(Q.target),this.openBeaconMessage(Q)})}),this.shadow.getElementById("proEdit").addEventListener("click",b=>{this.editProfile(b)})}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
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
              height: 10%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              z-index: 7;
              position: relative;
              top: 36px;
              left: 36px;
              background-color: rgba(0, 0, 0, 0.7);
              border-left: 2px solid #ff002d;
              border-bottom: 2px solid #ff002d;
              border-top: 2px solid #ff002d;
              border-right: 2px solid #ff002d;
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
              transform: rotate(0deg);
              cursor: pointer;
              transition: all 0.5s ease;
            }
            #uniMenuIcon:hover {
              color: white;
            }
            #menuItems {
              display: grid;
              width: 100%;
              height: 0%;
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
              width: 0px;
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
              transform: scaleX(0);
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
              animation-play-state: paused;
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
               <img id="uniMenuLogo" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/SCOGE\u0301_Logo-red.png" draggable="false">
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
                <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">
              </div>
              <div id="fm-inventory">
                <div id="inventoryBody">
                  <div class="inventory-tabs it1">
                    <div class="inventory-text">
                      <span class="itHead">Domain/s:</span>
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
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
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
                    <img id="proImg" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/TAOS-CITY-IDC.png">
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
         `}}customElements.define("scoge-unimenu",getUniMenu);class scogeRsvp extends HTMLElement{constructor(){super();rt(this,"closeModal",()=>{document.getElementById("rsvpModal").style.display="none"});rt(this,"Glow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--primary)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--primary)"});rt(this,"unGlow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--accent)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--accent)"});this.shadow=this.attachShadow({mode:"open"})}get rsvps(){return this.getAttribute("rsvp")}set rsvps(Q){this.setAttribute("rsvp",Q)}static get observedAttributes(){return["rsvp"]}attributeChangedCallback(Q,D,O){Q==="rsvp"&&this.render()}sendFeedback(Q){Q.preventDefault(),this.shadow.getElementById("rsvpForm").submit()}connectedCallback(){this.render(),this.shadow.getElementById("closeBtn").addEventListener("click",this.closeModal),this.shadow.getElementById("closeBtn").addEventListener("mouseover",this.Glow),this.shadow.getElementById("closeBtn").addEventListener("mouseout",this.unGlow),this.form=this.shadow.querySelector("#rsvpForm"),this.form.addEventListener("submit",Q=>{Q.preventDefault(),this.shadow.getElementById("menuLoadingScreen").style.display="grid";let D=this.shadow.querySelector("input[name='Guest']:checked"),O=new FormData(this.form);O.append("Guest",D.value),fetch("https://script.google.com/macros/s/AKfycbyDZnFn4Yy7zbQM1KB7uXDt3_WUmI7TuUT9b-Iips7lHf0mfOGs9s-B4V1M80LznyuIoA/exec",{method:"POST",body:O,mode:"cors"}).then(U=>U.text()).then(U=>{this.shadow.getElementById("menuLoadingScreen").style.display="none",this.form.reset(),this.shadow.getElementById("rightPan").innerHTML=`
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
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/Garamond-Regular.svg");
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
              background-image: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/textBGRSVP.jpg");
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
         `}}customElements.define("scoge-rsvp",scogeRsvp);var trackname="SCOG\xC9 Radio",currentAudio=null,currenttrack=0,trackList=[{artist:"SCOG\xC9 Radio - Broadcast 1",link:"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeSounds/IFSTFAW-Mix.mp3"}];class dtMusic extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get music(){return this.getAttribute("music")}set music(b){this.setAttribute("music",b)}static get observedAttributes(){return["music"]}attributeChangedCallback(b,Q,D){b==="music"&&this.render()}playMusic(){currentAudio===null&&(currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currenttrack++),currentAudio.play(),this.shadow.getElementById("playBtn").style.display="none",this.shadow.getElementById("pauseBtn").style.display="block",this.shadow.getElementById("ntxBtn").style.opacity="1",currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()}),this.shadow.getElementById("cat").style.display="block"}pauseMusic(){currentAudio.pause(),this.shadow.getElementById("playBtn").style.display="block",this.shadow.getElementById("pauseBtn").style.display="none",this.shadow.getElementById("cat").style.display="none"}nextRandomTrack(){currentAudio.pause(),currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),currentAudio.play(),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()})}connectedCallback(){this.render(),this.shadow.querySelector("#playBtn").addEventListener("click",()=>{this.playMusic(),this.shadow.getElementById("ntxBtn").style.display="block"}),this.shadow.querySelector("#pauseBtn").addEventListener("click",()=>{this.pauseMusic()}),this.shadow.querySelector("#ntxBtn").addEventListener("click",()=>{this.nextRandomTrack()})}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
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
            <img id="cat" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/cat.gif" alt="cat" width="70px" height="70px">
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
         `}}customElements.define("scoge-music",dtMusic);var currentPage=1,currentBtsPage=1,inventoryTotal=2e3,lexBio="Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOG\xC9 reach its full potential.",ogeBio="Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.";class dtInvestors extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get invest(){return this.getAttribute("invest")}set invest(b){this.setAttribute("invest",b)}static get observedAttributes(){return["invest"]}attributeChangedCallback(b,Q,D){b==="invest"&&this.render()}scrollToMenu(){var b=this.shadow.querySelectorAll(".menu-item");b.forEach(Q=>{Q.addEventListener("click",D=>{var O=D.target.getAttribute("id"),U=this.shadow.getElementById(O.replace("Menu","Sect")),q=U.offsetTop,G=q-200;O==="dataMenu"&&(G=q-0),O==="aboutMenu"&&(G=q-50),this.shadow.getElementById("scrollBody").scrollTo({top:G,behavior:"smooth"}),b.forEach(Y=>{Y.style.color="var(--primary)",Y.style.borderBottom="var(--primary) 1px solid"}),D.target.style.color="var(--secondary)",D.target.style.borderBottom="var(--secondary) 1px solid"}),this.shadow.getElementById("scrollBody").addEventListener("scroll",()=>{var D=this.shadow.getElementById("scrollBody").scrollTop;b.forEach(O=>{var U=O.getAttribute("id"),q=this.shadow.getElementById(U.replace("Menu","Sect")),G=q.offsetTop;D>=G-200&&(b.forEach(Y=>{Y.style.color="var(--primary)",Y.style.borderBottom="var(--primary) 1px solid"}),O.style.color="var(--secondary)",O.style.borderBottom="var(--secondary) 1px solid"),D>=this.shadow.getElementById("scrollBody").scrollHeight-this.shadow.getElementById("scrollBody").clientHeight-100&&(b.forEach(Y=>{Y.style.color="var(--primary)",Y.style.borderBottom="var(--primary) 1px solid"}),this.shadow.getElementById("contactMenu").style.color="var(--secondary)",this.shadow.getElementById("contactMenu").style.borderBottom="var(--secondary) 1px solid")})})})}openInvestor(){this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="0%",clearShop(),clearSettings(),clearFilter()}closeInvestor(){window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-70%")}nextImage(){currentPage>=2&&(currentPage=0),currentPage++,this.shadow.getElementById("gImg").src=`https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}previousImage(){currentPage<=1?currentPage=2:currentPage--,this.shadow.getElementById("gImg").src=`https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}nextBtsImage(){currentBtsPage>=9&&(currentBtsPage=0),currentBtsPage++,this.shadow.getElementById("btsImg").src=`https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}preBtsImage(){currentBtsPage<=1?currentBtsPage=9:currentBtsPage--,this.shadow.getElementById("btsImg").src=`https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}slidersTotal(){var b=this.shadow.getElementById("avgRetailSlider").value,Q=this.shadow.getElementById("dtcQtySlider").value,D=this.shadow.getElementById("accountsSlider").value,O=this.shadow.getElementById("wsOrderSlider").value,U=b*Q+b/2*(O*D);this.shadow.getElementById("finalTotal").innerHTML=U.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}sliders(){this.shadow.getElementById("budgetSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("budNum").innerHTML=this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("dcqNum").innerHTML=Math.round(inventoryTotal),this.shadow.getElementById("wqtyNum").innerHTML=Math.round(inventoryTotal)}.bind(this)),this.shadow.getElementById("avgRetailSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("avrNum").innerHTML=this.shadow.getElementById("avgRetailSlider").value}.bind(this)),this.shadow.getElementById("avgPCSlider").addEventListener("input",function(){this.slidersTotal(),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,console.log(inventoryTotal),this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("avpNum").innerHTML=this.shadow.getElementById("avgPCSlider").value}.bind(this)),this.shadow.getElementById("dtcQtySlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this)),this.shadow.getElementById("accountsSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("waNum").innerHTML=this.shadow.getElementById("accountsSlider").value}.bind(this)),this.shadow.getElementById("wsOrderSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("wsOrderSlider").value}.bind(this)),this.shadow.getElementById("wrperSlider").addEventListener("input",function(){this.slidersTotal();var b=this.shadow.getElementById("wrperSlider").value/2+50,Q=this.shadow.getElementById("wrperSlider").value/2-50;this.shadow.getElementById("wrP1").innerHTML=Math.round(Math.abs(Q)),this.shadow.getElementById("wrP2").innerHTML=+Math.round(b),this.shadow.getElementById("wsOrderSlider").value=Math.round(inventoryTotal*(Math.abs(Q)/100)),this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("dtcQtySlider").value=Math.round(inventoryTotal*(b/100)),this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this))}team(){this.shadow.getElementById("teamMain").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Starnilas Oge",this.shadow.getElementById("memberProf").innerHTML="Founder & Creative Director",this.shadow.getElementById("memberBio").innerHTML=ogeBio}.bind(this)),this.shadow.getElementById("team2").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Lex Fenwick",this.shadow.getElementById("memberProf").innerHTML="The Dow Jones, WSJ",this.shadow.getElementById("memberBio").innerHTML=lexBio}.bind(this))}connectedCallback(){this.render(),document.getElementById("investBut").addEventListener("click",this.openInvestor.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeInvestor.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this)),this.sliders(),this.team(),this.scrollToMenu()}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
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
              <div id="sub">Version 1 - <span class="acc" style="cursor:pointer;"><a href="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/files/SCOGE-INVESTOR-PRE22-R1.pdf" id="pdfDL" target="_blank">(Download PDF Version)</a></span></div>
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
              <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Banner-World-SCOGE-narrow.webp"/>
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
              <img id="gImg" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-1.webp" alt=""/>
              </div>
            </div>
            <div class="body2">
              SCOG\xC9 is a mens luxury fashion brand making products for an evolving luxury consumer with an affinity to exploring unique fictional worlds, and avant garde fashion. Our products are inspired by a world we\u2019ve created named bankoo. Each collection of products takes the SCOG\xC9 customer deeper into this world, satisfying the intrinsic need for exploration, and the extrinsic need for self-expression.<br><br>
              \u201CLuxury high price is not about tangible benefits,\u201D - The Luxury Strategy: Break the Rules of Marketing to Build Luxury Brands.
            </div>
            <h1 id="productSect">PRODUCTS</h1>
            <div id="looks">
              <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-full-products-opt1.jpeg" alt=""/>
            </div>
            <div class="body2">
              Our products are sourced and created in NYC, with a dedicated approach to up-cycling unused fabrics, trims and designs from previous seasons. We champion designing within our own world, defining our own trends, and becoming a part of the next guard of luxury fashion.<br><br>"Despite widespread staffing shortages and supply chain issues, the <span class="acc">fashion and apparel industry saw $180.5 billion in e-commerce revenue in 2021</span>, up from $145 billion in 2020." - 2022 Global Ecommerce Report: Fashion and Apparel
            </div>
            <h1 id="edgeSect">EDGE</h1>
            <div class="generalImages">
              <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-3.webp"/>
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
              <img id="btsImg" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-1.jpg"/>
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
                    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/profiles/SCOGE-profile-1x1.jpg"/>
                  </div>
                  <div id="team2" class="profile advisors">
                    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/profiles/LEX-profile-1x1.webp"/>
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
         `}}customElements.define("scoge-investors",dtInvestors);class dialogueBox extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get dialogue(){return this.getAttribute("dialogue")}set dialogue(b){this.setAttribute("dialogue",b)}static get observedAttributes(){return["dialogue"]}attributeChangedCallback(b,Q,D){b==="dialogue"&&this.render()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
           <style>
              @font-face {
                  font-family: "BS-R";
                  src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
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
           `}}customElements.define("scoge-dialogue",dialogueBox);class SeekDialogue{constructor(b,Q){this.tone=b,this.lines=Q,this.timeline=window.timeline,this.contentBox=document.getElementById("seekResp"),this.typingInProgress=!1}start(b,Q){this.element=document.createElement("p"),this.element.classList.add(Q),this.contentBox.appendChild(this.element),!this.typingInProgress&&this.typeLine(this.lines[b])}typeLine(b){this.string=b.text,this.words=this.stringToWordsArray(this.string),this.speed=this.getTypingSpeed(this.tone),this.i=0,this.j=0,this.typingInProgress=!0,this.type().then(()=>{this.i===this.words.length&&(b.choices?b.choices.forEach((Q,D)=>{}):console.log("End of conversation."),this.typingInProgress=!1)})}stringToWordsArray(b){return b.split(" ")}async type(){var Q,D,O,U,q;if(this.i<this.words.length)if(this.j<this.words[this.i].length){let G=this.words[this.i][this.j];if(this.words[this.i][0]==="*")G=this.words[this.i][this.j],G!=="*"&&(this.element.innerHTML+=`<span class="${this.specialText1}">${G}</span>`);else if(this.words[this.i][0]==="^")G=this.words[this.i][this.j],G!=="^"&&(this.element.innerHTML+=`<span class="${this.specialText2}">${G}</span>`);else if(G==="$")await this.delay(500).catch(Y=>{console.log(Y)}).catch(Y=>{console.log(Y)});else if(G==="]")this.element.innerHTML="",this.j+=3;else if(G.startsWith("%")){let Y=this.words[this.i].substring(this.j+1,this.j+2);this.element.innerHTML+=`<span class="blink">${Y}</span>`,this.j++}else this.element.innerHTML+=G;this.j++,await this.delay(this.speed).catch(Y=>{console.log(Y)}).catch(Y=>{console.log(Y)}),this.type()}else{if(this.i++,this.j=0,this.element.innerHTML+=" ",this.element.classList.contains("sysResp")&&this.i===this.words.length&&((window.conversationHistory[0]==="seekOpt3"||window.conversationHistory[0]==="seekOpt5"&&window.form1Active===!1)&&((Q=document.getElementById("subGeneral"))==null||Q.remove(),this.newElement=document.createElement("p"),this.newElement.innerHTML=`
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
                `,this.contentBox.appendChild(this.newElement2),gsapWithCSS.to("#subGeneral2",{duration:1,opacity:1,y:0,ease:"power2.out"}),window.sub2()),window.conversationHistory[0]==="seekOpt1"&&((O=document.querySelector(".visualSubMenuContainer"))==null||O.remove(),this.newElement3=document.createElement("div"),this.newElement3.innerHTML=`
                <div class="visualSubMenu">IMAGES</div>
                <div class="visualSubMenu">VIDEO</div>
                `,this.newElement3.classList.add("visualSubMenuContainer"),this.contentBox.appendChild(this.newElement3),gsapWithCSS.to(".visualSubMenuContainer",{duration:1,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to(".visualSubMenuContainer",{duration:1,scale:1,y:0,ease:"power2.out"}),this.choices=document.querySelectorAll(".visualSubMenu"),this.choices.forEach(G=>{G.addEventListener("click",Y=>{this.openGallery(Y)})})),window.conversationHistory[0]==="seekOpt6"&&((U=document.querySelector(".infoSubMenuContainer"))==null||U.remove(),this.newElement4=document.createElement("div"),this.newElement4.innerHTML=`
                <div class="infoSubMenu">ABOUT</div>
                <div class="infoSubMenu">CREDITS</div>
                <div class="infoSubMenu">CONTACT</div>
                `,this.newElement4.classList.add("infoSubMenuContainer"),this.contentBox.appendChild(this.newElement4),gsapWithCSS.to(".infoSubMenuContainer",{duration:1,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to(".infoSubMenuContainer",{duration:1,scale:1,y:0,ease:"power2.out"}),this.choices2=document.querySelectorAll(".infoSubMenu"),this.choices2.forEach(G=>{G.addEventListener("click",Y=>{this.infoTopics(Y)})})),window.conversationHistory[0]==="seekOpt2"&&((q=document.querySelector(".musicContainer"))==null||q.remove(),this.newElement5=document.createElement("div"),this.newElement5.innerHTML=`
                <scoge-music></scoge-music>
                `,this.newElement5.classList.add("musicContainer"),this.contentBox.appendChild(this.newElement5))),this.i===this.words.length&&(this.element.classList.contains("userResp")&&setTimeout(()=>{window.dialogue.choose(0)},800),window.conversationHistory[0]==="seekOpt3"&&window.digiPre===!1)){if(window.digiPre===!1){window.digiPre=!0;var b=document.createElement("video");b.setAttribute("id","portalVideoExt"),b.setAttribute("src","https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeVideos/Digisette/Digisette-ZoomSpin.mp4"),b.setAttribute("muted","true"),b.setAttribute("playsinline","true"),b.setAttribute("autoplay","false"),document.getElementById("videoGallery").appendChild(b),b.play()}gsapWithCSS.to("#videoGallery",{duration:2,filter:"blur(0px)",ease:"power2.inOut"}),document.getElementById("videoGallery").style.opacity="1",gsapWithCSS.to("#portalVideoExt",{duration:2,opacity:1,y:0,ease:"power2.out"}),b.onended=function(){b.remove(),document.getElementById("videoGallery").style.opacity="0"}}this.type()}}async delay(b){return new Promise(Q=>setTimeout(Q,b))}getTypingSpeed(b){switch(b){case"hyper/angry":return 25;case"friendly":return 50;case"neutral":return 75;case"calm":return 100;case"sad":return 175;case"mystery":return 185;default:return 60}}openGallery(b){var Q;switch(this.selected=(Q=b==null?void 0:b.target)==null?void 0:Q.innerHTML,this.homeT=document.getElementById("homeTip"),window.galleryActive=!0,window.view="gallery",gsapWithCSS.to("#seekResp",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekOpt",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,backgroundColor:"#ff002d",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,border:"var(--primary)",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,scale:1.3,y:0,ease:"power2.out"}),document.getElementById("seekBody").style.pointerEvents="none",document.getElementById("manBG").style.userSelect="none",document.getElementById("manBG").style.pointerEvents="auto",document.getElementById("seekGallery").style.pointerEvents="auto",setTimeout(()=>{window.isMobile===!0&&(gsapWithCSS.to("#simpleNoti",{duration:1,opacity:1,y:0,ease:"power2.out"}),window.galleryHelp.start(),document.getElementById("simpleNoti").style.animationPlayState="running",setTimeout(()=>{gsapWithCSS.to("#simpleNoti",{duration:1,opacity:0,y:0,ease:"power2.out"}),document.getElementById("simpleNoti").style.animationPlayState="paused"},3e3)),setTimeout(()=>{gsapWithCSS.fromTo("#seekGallery",{scale:1},{duration:.45,scale:1.05,yoyo:!0,repeat:1})},3e3)},1e3),this.selected){case"IMAGES":document.getElementById("dropdown").setAttribute("class","dropdown"),gsapWithCSS.to("#dropdown",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="auto",this.homeT.innerHTML="SEEK",window.viewingPg=!0,window.galleryType="images",gsapWithCSS.to("#seekGallery",{duration:2,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:2,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,filter:"blur(5px)",ease:"power2.inOut"});break;case"VIDEO":document.getElementById("dropdown").setAttribute("class","videodropdown"),gsapWithCSS.to("#dropdown",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="auto",gsapWithCSS.to("#soundToggle",{duration:1,opacity:1,y:0,ease:"power2.out"}),document.getElementById("soundToggle").style.pointerEvents="auto",this.homeT.innerHTML="SEEK",this.homeT.innerHTML="SEEK",window.viewingPg=!0,window.galleryType="video",document.getElementById("portalVideo").style.display="block",document.getElementById("portalVideo2").style.display="block",gsapWithCSS.to("#videoGallery",{duration:2,opacity:1,y:0,ease:"power2.out"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:2,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,filter:"blur(5px)",ease:"power2.inOut"});break}}infoTopics(b){switch(this.selected=b.target.innerHTML,window.view="gallery",this.selected){case"ABOUT":window.seekType="discover";var Q="Tell me more about 'SCOG\xC9' the brand.",D="Info";window.systemSpeak(Q,D);break;case"CREDITS":window.seekType="discover";var O="Name some people and their roles credited to have worked with SCOG\xC9?",U="Credits";window.systemSpeak(O,U);break;case"CONTACT":if(window.seekType!="contact"){window.seekType="contact";let q="How do I contact you?",G="Contact";window.systemSpeak(q,G)}else document.getElementById("genInput2").focus();break}}choose(b){const Q=this.lines[0].choices[b];if(this.lines.shift(),this.lines.length===0){console.log("End of conversation.");return}Q.action&&Q.action()}}async function portal(){const F=document.getElementById("seekGallery"),b=document.getElementById("videoGallery");document.getElementById("seekVideo");const Q=document.getElementById("portalImg"),D=document.getElementById("portalImg2"),O=document.getElementById("portalVideo"),U=document.getElementById("portalVideo2"),q=await __vitePreload(()=>import("./imgassetdb.9f3684ec.js"),[]).catch(Ce=>{console.log(Ce)}),G=await __vitePreload(()=>import("./vidassetdb.0fbcb4e4.js"),[]).catch(Ce=>{console.log(Ce)});window.imageFiles=q.images.array,window.videoFiles=G.videos.array,window.shuffleArray=Ce=>{const be=[...Ce];for(let Qe=be.length-1;Qe>0;Qe--){const Se=Math.floor(Math.random()*(Qe+1));[be[Qe],be[Se]]=[be[Se],be[Qe]]}return be},window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles),window.soundOn=!1;const Y=window.imageFiles.length,X=window.videoFiles.length;let ee=1,re=2,ie=null,ae=0,ce=1,Ae=null,ge=2,Be=null,Ie=0;function _e(){if(window.galleryType==="images")if(Q.style.transition="1s all",D.style.transition="1s all",ee=(ee+1)%Y,window.filteredImages[ee],re=(ee+1)%Y,ie=window.filteredImages[re],ae===0){Q.style.opacity="0%",D.style.opacity="100%",Q.src=ie.publicUrl,ae=1;return}else{Q.style.opacity="100%",D.style.opacity="0%",ae=0,D.src=ie.publicUrl;return}else if(window.galleryType==="video")if(O.style.transition="1s all",U.style.transition="1s all",ce=(ce+1)%X,Ae=window.filteredVideos[ce],ge=(ce+1)%X,Be=window.filteredVideos[ge],Ie===0){O.style.opacity="0%",U.style.opacity="100%",window.currentVideo=U,window.hiddenVideo=O,U.play(),O.pause(),O.currentTime=0,U.currentTime=0,Ie=1,window.soundOn===!1?(U.muted=!0,O.muted=!0):(U.muted=!1,O.muted=!0);return}else{O.style.opacity="100%",U.style.opacity="0%",window.currentVideo=O,window.hiddenVideo=U,window.soundOn===!1?(O.muted=!0,U.muted=!0):(O.muted=!1,U.muted=!0),U.currentTime=0,O.currentTime=0,Ie=0,O.src=Ae.publicUrl,O.play(),U.pause(),O.src.includes("POR")?O.setAttribute("class","videoEl"):O.setAttribute("class","mobileVideo"),setTimeout(()=>{U.src=Be.publicUrl,U.src.includes("Seq")?U.setAttribute("class","videoEl"):U.setAttribute("class","mobileVideo")},1100);return}}window.toggleSound=()=>{console.log("toggle sound");var Ce=document.getElementById("soundToggle");if(window.soundOn===!0){window.soundOn=!1,window.currentVideo.muted=!0,window.hiddenVideo.muted=!0,Ce.innerHTML="- SOUND OFF -";return}else{window.soundOn=!0,console.log(window.currentVideo),window.currentVideo.muted=!1,window.hiddenVideo.muted=!0,Ce.innerHTML="- SOUND ON -";return}},F.addEventListener("click",()=>{_e()}),b.addEventListener("click",()=>{_e()}),document.getElementById("soundToggle").addEventListener("click",()=>{window.toggleSound()}),_e()}var idlFactory=({IDL:F})=>{const b=F.Variant({S3:F.Null,Last:F.Null,Fleek:F.Null,MetaBox:F.Null}),Q=F.Nat32,D=F.Record({url:F.Text,thumb:F.Text,environmentImageThree:F.Text}),O=F.Text,U=F.Text,q=F.Variant({principal:F.Principal,address:U}),G=F.Record({token:O,owner:q,spender:F.Principal}),Y=F.Nat,X=F.Variant({InvalidToken:O,Other:F.Text}),ee=F.Variant({ok:Y,err:X}),re=F.Vec(F.Nat8),ie=F.Nat,ae=F.Record({token:O,subaccount:F.Opt(re),allowance:ie,spender:F.Principal}),ce=F.Record({token:O,user:q}),Ae=F.Variant({InvalidToken:O,Other:F.Text}),ge=F.Variant({ok:ie,err:Ae}),Be=F.Record({to:q,metadata:F.Opt(F.Vec(F.Nat8))}),Ie=F.Vec(F.Nat8),_e=F.Record({to:q,token:O,notify:F.Bool,from:q,memo:Ie,subaccount:F.Opt(re),amount:ie}),Ce=F.Variant({ok:ie,err:F.Variant({CannotNotify:U,InsufficientBalance:F.Null,InvalidToken:O,Rejected:F.Null,Unauthorized:U,Other:F.Text})}),be=F.Text,Qe=F.Text,Se=F.Variant({ok:Qe,err:X}),Me=F.Text,ke=F.Variant({fungible:F.Record({decimals:F.Nat8,metadata:F.Opt(F.Vec(F.Nat8)),name:F.Text,symbol:F.Text}),nonfungible:F.Record({metadata:F.Opt(F.Vec(F.Nat8))})}),Fe=F.Tuple(F.Text,F.Text),Ue=F.Record({url:F.Text,method:F.Text,body:F.Vec(F.Nat8),headers:F.Vec(Fe)}),Ye=F.Record({body:F.Vec(F.Nat8),headers:F.Vec(Fe),status_code:F.Nat16}),Ge=F.Record({trait_type:F.Text,value:F.Text}),Ve=F.Variant({ok:ke,err:X}),Te=F.Variant({ok:Y,err:X}),De=F.Variant({ok:F.Vec(Q),err:X}),xe=F.Int,Ne=F.Record({locked:F.Opt(xe),seller:F.Principal,price:F.Nat64}),$e=F.Variant({ok:F.Vec(F.Tuple(Q,F.Opt(Ne),F.Opt(F.Vec(F.Nat8)))),err:X});return F.Service({acceptCycles:F.Func([],[],[]),addMetadataStorageType:F.Func([F.Text],[],["oneway"]),addMetadataUrlMany:F.Func([F.Vec(F.Tuple(b,Q,D))],[],["oneway"]),allowance:F.Func([G],[ee],["query"]),approve:F.Func([ae],[F.Bool],[]),approveAll:F.Func([F.Vec(ae)],[F.Vec(Q)],[]),availableCycles:F.Func([],[F.Nat],["query"]),balance:F.Func([ce],[ge],["query"]),batchMintNFT:F.Func([F.Vec(Be)],[F.Vec(Q)],[]),batchTransfer:F.Func([F.Vec(_e)],[F.Vec(Ce)],[]),bearer:F.Func([be],[Se],["query"]),clearProperties:F.Func([],[],["oneway"]),deleteMetadataStorageType:F.Func([F.Text],[],["oneway"]),extensions:F.Func([],[F.Vec(Me)],["query"]),getAllowances:F.Func([],[F.Vec(F.Tuple(Q,F.Principal))],["query"]),getMedataStorageType:F.Func([],[F.Vec(F.Text)],[]),getMinter:F.Func([],[F.Principal],["query"]),getProperties:F.Func([],[F.Vec(F.Tuple(F.Text,F.Vec(F.Tuple(F.Text,F.Nat))))],["query"]),getRegistry:F.Func([],[F.Vec(F.Tuple(Q,Qe))],["query"]),getRootBucketId:F.Func([],[F.Opt(F.Text)],[]),getScore:F.Func([],[F.Vec(F.Tuple(Q,F.Float64))],["query"]),getStorageMetadataUrl:F.Func([b,Q],[F.Tuple(F.Text,F.Text,F.Text)],[]),getTokens:F.Func([],[F.Vec(F.Tuple(Q,ke))],["query"]),getTokensByIds:F.Func([F.Vec(Q)],[F.Vec(F.Tuple(Q,ke))],["query"]),getTokensByProperties:F.Func([F.Vec(F.Tuple(F.Text,F.Vec(F.Text)))],[F.Vec(F.Tuple(Q,ke))],["query"]),http_request:F.Func([Ue],[Ye],["query"]),initCap:F.Func([],[F.Opt(F.Text)],[]),initLastMetadata:F.Func([Q,Q],[],[]),initproperties:F.Func([Q,Q],[],[]),lookProperties:F.Func([],[F.Vec(F.Tuple(Ge,F.Vec(Q)))],["query"]),lookPropertyScoreByTokenId:F.Func([],[F.Vec(F.Tuple(Q,F.Vec(F.Tuple(Ge,F.Int64))))],["query"]),metadata:F.Func([be],[Ve],["query"]),mintNFT:F.Func([Be],[Q],[]),replaceMetadata:F.Func([b,Q,Q],[],[]),setMinter:F.Func([F.Principal],[],[]),setScoreOfTokenId:F.Func([F.Int64],[],[]),supply:F.Func([be],[Te],["query"]),tokens:F.Func([Qe],[De],["query"]),tokens_ext:F.Func([Qe],[$e],["query"]),transfer:F.Func([_e],[Ce],[]),updateNFTName:F.Func([F.Text,F.Text,Q,Q],[],[])})},mainScreenOpen=!1;const canister="7mfck-baaaa-aaaah-acuqq-cai";class mintingScreen extends HTMLElement{constructor(){super();rt(this,"test",async()=>{var D=await(await createActor1(canister,idlFactory)).getMinter();console.log("here test",D)});rt(this,"mintNFT",async Q=>{let D=[],U={category:["Art","3D/Animation","Collectibles","Sports","Music","Utility","Trading Cards","Virtual Worlds","Domain Names","Other"][2],name:"Digisette Pre-Alpha",description:"Limited edition pre-alpha 1 of 450 Digisette.",url:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/SCOGE-Yumi-LaunchCollection Logo.jpg",attributes:[{ringType:"",domains:[{number:0,lord:"",rank:0,power:0,defense:0,xp:0,functions:[],positiveEvents:0,negativeEvents:0,privacy:!1,sanitize:!1}],rank:0,powerUps:[0],progress:0,xp:0,linked:!1,earthName:"",bankooName:"",email:"",earthImage:"",earthText:"",bankooImage:"",bankooText:"",ownedStyles:[0],discovered:[""],discoveredProgress:0,power:0,mental:0,physical:0,health:0,speed:0,sight:0,endurance:0,playerLocation:0,soundLevel:0,musicLevel:0,fsOn:!1,notiOn:!1,networkClass:"",network:[""],story:{title:"",text:"",imagesUri:[""],videoUri:""},ancestorsNames:[""],ancestorsImages:[""],battles:0,battleRank:0,soul:0,inventory:[0]}],mimeType:"image",thumb:"example",timestamp:+new Date};const q=new TextEncoder().encode(JSON.stringify(U));D=[Array.from(q)],Q.match(/-/)?Q={principal:Principal.fromText(Q)}:Q={address:Q},D.length;var Y=await(await createActor1(canister,idlFactory)).availableCycles();return console.log("Mint Test",Y),Y});rt(this,"toggleNftScreen",()=>{var Q=this.shadow.getElementById("mainScreen"),D=this.shadow.getElementById("svgBox"),O=document.getElementById("universe"),U=document.getElementById("getUniMenu").shadowRoot;if(Q.style.transition="1s all",D.style.display="block",D.style.transition=".5s all",O.style.transition="1s all",mainScreenOpen===!1){O.style.filter="blur(5px)",U.getElementById("uniMenu").style.filter="blur(10px)",document.getElementById("selection").style.filter="blur(10px)",Q.style.display="grid",setTimeout(()=>{Q.style.opacity="100%",mainScreenOpen=!0},200);return}else{D.style.display="none",U.getElementById("uniMenu").style.filter="blur(0px)",document.getElementById("selection").style.filter="blur(0px)",U.getElementById("nftShop").style.opacity="80%",O.style.filter="blur(0px)",Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none",mainScreenOpen=!1},1e3);return}});rt(this,"goGetPlug",()=>{var Q;(Q=window.open("https://plugwallet.ooo/","_blank"))==null||Q.focus()});rt(this,"reacc",()=>{var Q=this.shadow.getElementById("videoM");Q.style.transition="5s all",Q.play(),Q.style.display="block",setTimeout(()=>{Q.style.opacity="100%"},500),setTimeout(()=>{document.getElementById("getUniMenu").toggleMenu(),document.getElementById("getNfts").toggleNftScreen()},5e3),Q.onended=function(){document.getElementById("updatesModal").style.display="block",Q.style.transition="1s all",Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none"},1e3)}});rt(this,"reload",()=>{});rt(this,"pillSelection",Q=>{var D=String(Q.target.id),O=this.shadow.querySelectorAll(".pills"),U=this.shadow.getElementById("desc"),q=this.shadow.getElementById("cost"),G=this.shadow.getElementById("button"),Y=this.shadow.getElementById("mintButton"),X=this.shadow.getElementById("mainScreen");X.style.transition="1s all";var ee={red:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Yellow-DigiGel-1.png",black:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Digisette-1-2.png",blue:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png",white:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png"};switch(D){case"red":O[0].src=ee.blue,O[1].src=ee.red,O[2].src=ee.black,O[0].setAttribute("id","blue"),O[1].setAttribute("id","red"),O[2].setAttribute("id","black"),this.shadow.getElementById("mintButton").removeEventListener("click",this.reacc),this.shadow.getElementById("mintButton").addEventListener("click",()=>this.mintNFT("qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe")),U.innerHTML="YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.",q.innerHTML="IT\u2019LL COST YOU 10 [ICP].",G.innerHTML="UNAVAILABLE",G.style.color="#ff002d",Y.style.backgroundColor="black",Y.style.border="1px solid black";break;case"black":O[0].src=ee.red,O[1].src=ee.black,O[2].src=ee.blue,O[0].setAttribute("id","red"),O[1].setAttribute("id","black"),O[2].setAttribute("id","blue"),U.innerHTML="A GIFT FROM THE ORACLE'S",q.innerHTML="IT WONT COST YOU A THING.",G.innerHTML="TAKE IT",this.shadow.getElementById("mintButton").addEventListener("click",this.reacc),G.style.color="",Y.style.border="",Y.style.backgroundColor="";break;case"blue":O[0].src=ee.black,O[1].src=ee.blue,O[2].src=ee.red,O[0].setAttribute("id","black"),O[1].setAttribute("id","blue"),O[2].setAttribute("id","red"),this.shadow.getElementById("mintButton").removeEventListener("click",this.reacc),U.innerHTML="THIS IS WHAT YOU'LL NEED TO REMEMBER.",q.innerHTML="IT\u2019LL COST YOU 5 [ICP].",G.innerHTML="UNAVAILABLE",G.style.color="#ff002d",Y.style.backgroundColor="black",Y.style.border="none";break}});this.shadow=this.attachShadow({mode:"open"})}get nft(){return this.getAttribute("mint")}set nft(Q){this.setAttribute("mint",Q)}static get observedAttributes(){return["mint"]}attributeChangedCallback(Q,D,O){Q==="mint"&&this.render()}async suIDL(){return await createActor1(canister,{idlFactory})}async getSupply(){const Q=await IDL.supply("");return console.log(Q),Q}connectedCallback(){this.render(),this.shadow.getElementById("svgBox").addEventListener("click",this.toggleNftScreen.bind(this)),this.shadow.querySelectorAll(".pills").forEach(Q=>{Q.addEventListener("click",this.pillSelection)}),this.shadow.getElementById("mintButton").addEventListener("click",this.reacc)}render(){this.shadow.innerHTML=`
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
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
              background: rgba(0,0,0,.8);
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
              background-image: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/test/Screen Shot 2022-06-16 at 9.29.19 PM.png");
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
         <video id="videoM" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/videos/Alpha-End-Scoge.mp4">
         </video>
         <div id="mainScreen">
            <div id="innerScreen">
              <div id="nftAssetGallery">
                <img class="pills" id="red" style="opacity:31%;" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Yellow-DigiGel-1.png"/>
                <img class="pills" id="black" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Digisette-1-2.png"/>
                <img class="pills" id="blue" style="opacity:31%;" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png"/>
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
 * strings: 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _trimExp=/(?:^\s+|\s+$)/g,emojiExp=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function getText(F){var b=F.nodeType,Q="";if(b===1||b===9||b===11){if(typeof F.textContent=="string")return F.textContent;for(F=F.firstChild;F;F=F.nextSibling)Q+=getText(F)}else if(b===3||b===4)return F.nodeValue;return Q}function splitInnerHTML(F,b,Q,D){for(var O=F.firstChild,U=[],q;O;)O.nodeType===3?(q=(O.nodeValue+"").replace(/^\n+/g,""),D||(q=q.replace(/\s+/g," ")),U.push.apply(U,emojiSafeSplit(q,b,Q,D))):(O.nodeName+"").toLowerCase()==="br"?U[U.length-1]+="<br>":U.push(O.outerHTML),O=O.nextSibling;for(q=U.length;q--;)U[q]==="&"&&U.splice(q,1,"&amp;");return U}function emojiSafeSplit(F,b,Q,D){if(F+="",Q&&(F=F.trim?F.trim():F.replace(_trimExp,"")),b&&b!=="")return F.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(b);for(var O=[],U=F.length,q=0,G,Y;q<U;q++)Y=F.charAt(q),(Y.charCodeAt(0)>=55296&&Y.charCodeAt(0)<=56319||F.charCodeAt(q+1)>=65024&&F.charCodeAt(q+1)<=65039)&&(G=((F.substr(q,12).split(emojiExp)||[])[1]||"").length||2,Y=F.substr(q,G),O.emoji=1,q+=G-1),O.push(Y===">"?"&gt;":Y==="<"?"&lt;":D&&Y===" "&&(F.charAt(q-1)===" "||F.charAt(q+1)===" ")?"&nbsp;":Y);return O}/*!
 * TextPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gsap,_tempDiv,_getGSAP=function F(){return gsap||typeof window!="undefined"&&(gsap=window.gsap)&&gsap.registerPlugin&&gsap},TextPlugin={version:"3.11.5",name:"text",init:function F(b,Q,D){typeof Q!="object"&&(Q={value:Q});var O=b.nodeName.toUpperCase(),U=this,q=Q,G=q.newClass,Y=q.oldClass,X=q.preserveSpaces,ee=q.rtl,re=U.delimiter=Q.delimiter||"",ie=U.fillChar=Q.fillChar||(Q.padSpace?"&nbsp;":""),ae,ce,Ae,ge,Be,Ie,_e,Ce;if(U.svg=b.getBBox&&(O==="TEXT"||O==="TSPAN"),!("innerHTML"in b)&&!U.svg)return!1;if(U.target=b,!("value"in Q)){U.text=U.original=[""];return}for(Ae=splitInnerHTML(b,re,!1,X),_tempDiv||(_tempDiv=document.createElement("div")),_tempDiv.innerHTML=Q.value,ce=splitInnerHTML(_tempDiv,re,!1,X),U.from=D._from,(U.from||ee)&&!(ee&&U.from)&&(O=Ae,Ae=ce,ce=O),U.hasClass=!!(G||Y),U.newClass=ee?Y:G,U.oldClass=ee?G:Y,O=Ae.length-ce.length,ae=O<0?Ae:ce,O<0&&(O=-O);--O>-1;)ae.push(ie);if(Q.type==="diff"){for(ge=0,Be=[],Ie=[],_e="",O=0;O<ce.length;O++)Ce=ce[O],Ce===Ae[O]?_e+=Ce:(Be[ge]=_e+Ce,Ie[ge++]=_e+Ae[O],_e="");ce=Be,Ae=Ie,_e&&(ce.push(_e),Ae.push(_e))}Q.speed&&D.duration(Math.min(.05/Q.speed*ae.length,Q.maxDuration||9999)),U.rtl=ee,U.original=Ae,U.text=ce,U._props.push("text")},render:function F(b,Q){b>1?b=1:b<0&&(b=0),Q.from&&(b=1-b);var D=Q.text,O=Q.hasClass,U=Q.newClass,q=Q.oldClass,G=Q.delimiter,Y=Q.target,X=Q.fillChar,ee=Q.original,re=Q.rtl,ie=D.length,ae=(re?1-b:b)*ie+.5|0,ce,Ae,ge;O&&b?(ce=U&&ae,Ae=q&&ae!==ie,ge=(ce?"<span class='"+U+"'>":"")+D.slice(0,ae).join(G)+(ce?"</span>":"")+(Ae?"<span class='"+q+"'>":"")+G+ee.slice(ae).join(G)+(Ae?"</span>":"")):ge=D.slice(0,ae).join(G)+G+ee.slice(ae).join(G),Q.svg?Y.textContent=ge:Y.innerHTML=X==="&nbsp;"&&~ge.indexOf("  ")?ge.split("  ").join("&nbsp;&nbsp;"):ge}};TextPlugin.splitInnerHTML=splitInnerHTML;TextPlugin.emojiSafeSplit=emojiSafeSplit;TextPlugin.getText=getText;_getGSAP()&&gsap.registerPlugin(TextPlugin);window.Buffer=buffer$1.Buffer;window.entry=()=>{gsapWithCSS.to("#introLogo",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#intro",{duration:1,opacity:0,ease:"power2.inOut",delay:1.5}),gsapWithCSS.to(".welcomeOptions",{duration:1,opacity:1,ease:"power2.inOut",delay:2}),gsapWithCSS.to("#wOpt1",{duration:2,translateX:0,ease:"power2.inOut",delay:1.5}),gsapWithCSS.to("#wOpt2",{duration:2,translateX:0,ease:"power2.inOut",delay:1.5}),setTimeout(()=>{document.getElementById("welcome").style.pointerEvents="auto"},3e3)};window.entry();const VITE_CommerceKey="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",VITE_ScogeI="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";var pgleft=1,pgright=2,sketch1Count=3,sketch2Count=2,sketch3Count=1,countriedAdded=!1,shopActive="closed";window.dbm=!1;window.shoploaded=!1;window.viewThisProduct="";window.investorsView=!1;window.urlParamsActive=!1;window.inUniverse=!1;window.productsloaded=!1;var ci="false";const commerce=new lib(`${VITE_CommerceKey}`,!0);console.log("COPYRIGHT 2023 - SCOG\xC9 Inc. - ALL RIGHTS RESERVED");var stripe=Stripe(`${VITE_StripeKey}`);const elements=stripe.elements();new SoundtrackManager;window.isMobile=!1;window.sysCheck=()=>{document.addEventListener("keydown",window.checkKeys)};window.checkKeys=async F=>{F.key==="i"&&ci==="false"&&(ci="true",window.dbm=!0,setTimeout(()=>{ci="false"},1e3)),F.key==="c"&&ci==="true"&&(ci="bankoo",universe(),window.universeSystem())};window.sysCheck();window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches?(document.getElementById("shopBut"),document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1):(document.getElementById("shop").style.opacity="100%",document.getElementById("shop").style.visibility="visible",document.getElementById("mobileShop").style.display="none",window.isMobile=!1,window.logoMove(6,3,16,1))});window.sizeInit=()=>{var F=document.getElementById("manBG");if(window.matchMedia("(max-width: 768px)").matches){window.isMobile=!0;var b=document.querySelectorAll(".videoEl");b.forEach(Q=>{Q.setAttribute("class","mobileVideo")})}else F.addEventListener("mouseover",()=>{window.openPeek()}),F.addEventListener("mouseeout",()=>{window.closePeek()})};window.onload=()=>{window.sizeInit(),window.loadShop(),window.getParamsDesktop(),window.initFilterActions()};window.shopping=()=>{window.matchMedia("(max-width: 768px)").matches?window.openMobile():window.toggleShop()};window.openMobile=()=>{document.getElementById("mobileShop").style.display="block"};window.destiny=()=>{var F=document.getElementById("destiny");F.play(),F.loop=!0};window.initNoti2=F=>{};window.clearFilter=()=>{var F=document.getElementById("shopFilter"),b=document.getElementById("all");window.filterShop(b),F.style.opacity="0%",setTimeout(()=>{F.style.display="none"},1e3)};window.toggleShop=()=>{var F=document.getElementById("orderConfirm");document.getElementById("shopBut");var b=document.getElementById("shopFilter"),Q=document.getElementById("shopBG");switch(Q.style.transition=".5s all",setTimeout(()=>{shopActive!="closed"&&(document.getElementById("logo").style.transition="1s all",document.getElementById("logo").style.opacity="100%",document.getElementById("shopIcon").style.opacity="100%")},1e3),document.getElementById("shop").style.transition="1s all",document.getElementById("povImageColumnLeft").innerHTML="",shopActive){case"closed":b.style.display="grid",Q.style.display="block",setTimeout(()=>{b.style.opacity="100%",Q.style.opacity="100%"},1e3),setTimeout(()=>{window.productsloaded===!1&&(document.getElementById("divLoadBG2").style.display="grid"),document.getElementById("shop").style.right="0%",document.getElementById("shopIcon").innerHTML="X"},500),shopActive="open";break;case"open":window.clearFilter(),document.getElementById("shopIcon").style.opacity="0%",Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none"},500),document.getElementById("logo").style.opacity="0%",window.clearShop();break;case"POVopen":document.getElementById("shop").style.overflowX="scroll",shopActive="open";var D=document.getElementById("povLeft"),O=document.getElementById("povRight"),U=document.getElementById("shopCheckoutDetails");U.style.transition="1s all",U.style.visibility="hidden",U.style.opacity="0%",D.style.transition="1s all",O.style.transition="1s all",D.style.opacity="0%",O.style.opacity="0%",setTimeout(()=>{O.style.visibility="hidden",D.style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("povImageColumnRight").innerHTML="",window.returnSize(),document.getElementById("eSymbol1").style.display="none",document.getElementById("eSymbol2").style.display="none",window.termsOpen=!1,F.style.display==="block"&&(F.style.display="none");var q=document.getElementsByClassName("shopProduct");for(let G=0;G<q.length;G++)q[G].style.color="black";selectedPSize="",document.getElementById("addToBagBut").innerHTML="Select a size";break}};window.openSettings=()=>{window.clearFilter(),window.clearShop(),window.closeInvestor(),window.matchMedia("(max-width: 768px)").matches;var F=document.getElementById("settingsMenu");document.getElementById("settingsMenu").style.display="grid",setTimeout(()=>{F.style.opacity="100%"},300)};window.clearShop=()=>{document.getElementById("shop").style.right="-70%",document.getElementById("shopIcon").innerHTML="(0)";var F=document.getElementById("shopBG");F.style.transition=".5s all",F.style.opacity="0%",setTimeout(()=>{F.style.display="none"},500),document.getElementById("shopIcon").setAttribute("onclick","toggleShop()"),document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1};window.clearSettings=()=>{document.getElementById("settingsMenu").style.transition="1s all",document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3)};var continents={c1:{name:"1 - ALANSANA",text:"The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOG\xC9 Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-2.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-3.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-4.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>`},c2:{name:"2 - FAALSANA",text:"No concrete data discovered for the 2nd Continent. Few sources indicate a region of migrants from various origins. ",images:'<img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>'},c3:{name:"3 - SANSET",text:"The 3rd Continent is widely known for having the harshest and most fluctuating weather conditions, due to its size and position between two oceanic gravity pockets. Its inhabitants frequently dress in garments that heavily wrap the body and can easily be removed when conditions drastically shift.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-2.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-3.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>`},c4:{name:"4 - NAME UNKNOWN",text:"On the 4th Continent, you\u2019ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional dress.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-1.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-3.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-4.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>`},c5:{name:"5 - CONTINENT UNKNOWN",text:"No concrete data discovered for the 5th  Continent. Few sources indicate it to be an ally of the 7th Continent.",images:'<img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>'},c6:{name:"6 - NAME UNKNOWN",text:"The mountainous inhabitants of the 6th Continent are highly regarded for their study of natural materials and their relation to the human body. They live among dangerous innovations but protect themselves with garments infused with protective physical and metaphysical properties- mostly darker-toned, as the continent is limited to elements that produce dark dyes.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-2.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-3.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-4.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-5.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>`},c7:{name:"7 - SEELOO",text:"Little is known about the 7th Continent and its elusive inhabitants throughout Bankoo. Those who\u2019ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",images:`<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-2.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-3.jpg"/>
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`}},worldName=document.getElementById("worldConName"),worldText=document.getElementById("worldConText"),worldMain=document.getElementById("worldMain"),allMenu=document.querySelectorAll(".worldMenuInner"),worldBottom=document.getElementById("worldBottom");window.changeWorld=F=>{var b=F.id;switch(worldBottom.scrollTop=0,allMenu.forEach(Q=>{Q.style.backgroundColor="rgba(255, 255, 255, 0.7)",Q.style.color="black",document.getElementById(`${b}In`).style.backgroundColor="red",document.getElementById(`${b}In`).style.color="white"}),b){case"world1":worldName.innerHTML=continents.c1.name,worldText.innerHTML=continents.c1.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c1.images;break;case"world2":worldName.innerHTML=continents.c2.name,worldText.innerHTML=continents.c2.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c2.images;break;case"world3":worldName.innerHTML=continents.c3.name,worldText.innerHTML=continents.c3.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c3.images;break;case"world4":worldName.innerHTML=continents.c4.name,worldText.innerHTML=continents.c4.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c4.images;break;case"world5":worldName.innerHTML=continents.c5.name,worldText.innerHTML=continents.c5.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')",worldBottom.innerHTML=continents.c5.images;break;case"world6":worldName.innerHTML=continents.c6.name,worldText.innerHTML=continents.c6.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c6.images;break;case"world7":worldName.innerHTML=continents.c7.name,worldText.innerHTML=continents.c7.text,worldMain.style.backgroundImage="url('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c7.images;break}};var expandDiv=document.getElementById("worldBottom"),speed=5;function expanding(){var F=expandDiv.scrollTop,b=F/speed;expandDiv.style.height=Math.min(Math.max(b,34),68)+"%"}window.isWorld=()=>{expandDiv.addEventListener("scroll",function(){requestAnimationFrame(expanding)},!1)};window.worldTap=()=>{document.getElementById("worldEntrance").style.transition="5s all",document.getElementById("worldEntrance").style.opacity="0%",setTimeout(()=>{document.getElementById("worldEntrance").style.display="none"},3500)};window.setupBook=F=>{var b=document.getElementById("B2222"),Q=F.id;if(Q==="bookleft"){b.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft-=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright-=2}.jpg" style="margin-left:10%;">`,Q==="bookleft"&&pgleft<=0&&(pgleft=1,pgright=2,b.remove());return}if(Q==="bookright"){b.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft+=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright+=2}.jpg" style="margin-left:10%;">`,Q==="bookright"&&pgright>=15&&(pgleft=1,pgright=2,b.remove());return}};window.setupSketches=()=>{var F=document.getElementById("BSketch");if(sketch3Count===3){F.innerHTML='<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">',sketch3Count=1,sketch2Count=2,sketch1Count=3,F.remove();return}if(sketch3Count===2){F.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}if(sketch3Count===1){F.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count-=2}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}};window.setupMagazine=()=>{var F=document.getElementById("BMAG");F.remove()};var currentShopProduct;window.povOpen=F=>{var b=F==null?void 0:F.id;currentShopProduct=allProducts[0].filter(U=>U.id.includes(`${b}`)),shopActive="POVopen";var Q=document.getElementById("povLeft"),D=document.getElementById("povRight");Q.style.transition="1s all",D.style.transition="1s all",document.getElementById("povRight").style.visibility="visible",document.getElementById("povLeft").style.visibility="visible",Q.style.opacity="100%",D.style.opacity="100%",document.getElementById("shopProductName").innerHTML=`
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(\xC9)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(S\xC9)</span>
  `,currentShopProduct[0].categories.forEach(U=>{U.name==="\xC9"&&(document.getElementById("eSymbol1").style.display="block"),U.name==="S\xC9"&&(document.getElementById("eSymbol2").style.display="block")}),document.getElementById("shopProductDesc").innerHTML=currentShopProduct[0].description,document.getElementById("shopProductPrice").innerHTML=currentShopProduct[0].price.formatted_with_symbol,currentShopProduct[0].inventory.available<=10?document.getElementById("shopProductAvailable").innerHTML="(LIMITED QUANTITY)":document.getElementById("shopProductAvailable").innerHTML="";var O=document.getElementById("povImageColumnLeft");document.getElementById("povImageColumnRight").style.backgroundImage=`url("${currentShopProduct[0].assets[2].url}")`,currentShopProduct[0].assets.forEach(U=>{var q=document.createElement("img");U.filename==="sizeChart.png"?(q.setAttribute("class","sizeChartImage"),q.setAttribute("src",`${U.url}`),q.setAttribute("id",`${U.filename}`),document.getElementById("povImageColumnRight").appendChild(q)):(q.setAttribute("class","leftPOVimages"),q.setAttribute("src",`${U.url}`),q.setAttribute("id",`${U.url}`),q.setAttribute("onclick","changeToMainPic(this)"),O.appendChild(q))}),currentShopProduct[0].variant_groups[0].options.forEach(U=>{if(document.getElementById(`${U.name}`).style.opacity="100%",document.getElementById(`${U.name}`).style.cursor="pointer",U.name==="SingleSize"){var q=document.querySelectorAll(".shopProduct");document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr",document.getElementById("shopProductSizes").style.justifyItems="end",q.forEach(G=>{G.id!="SingleSize"&&(G.style.display="none")}),document.getElementById("SingleSize").style.display="block"}}),cartEmpty!=!0&&window.productAdded()};window.returnSize=()=>{var F=document.querySelectorAll(".shopProduct");F.forEach(b=>{b.id!="SingleSize"&&(b.style.display="block"),document.getElementById(b.id).style.opacity=".3"}),document.getElementById("SingleSize").style.display="none",document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr",document.getElementById("shopProductSizes").style.justifyItems="center"};window.changeToMainPic=F=>{var b=F.id;document.getElementById("povImageColumnRight").style.backgroundImage=`url("${b}")`};window.sizeGuideOn=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="100%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="0%"};window.sizeGuideOff=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="0%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="100%"};window.productAdded=()=>{document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="visible",document.getElementById("shopCheckoutDetails").style.opacity="100%"};window.purchaseComplete=()=>{document.getElementById("orderConfirm").style.display="block",document.getElementById("orderConfirm").innerHTML=`
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOG\xC9.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `};window.termsOpen=!1;window.toggleTerms=()=>{var F=document.getElementById("tandc"),b=document.getElementById("gMenu");if(F.style.display==="block"){document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",b.style.display="block",window.termsOpen=!1;return}else if(F.style.display!="block"){document.getElementById("tandc").innerHTML=`
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(\u2018\xC9\u2019)</span> or <span class="blue">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `,document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="block",document.getElementById("tandc").style.opacity="100%",b.style.display="none",window.termsOpen=!0,F.scrollTop=0;return}};var allProducts=[];window.productsloaded=!1;window.loadShop=async()=>{document.getElementById("divLoadBG2").style.display="grid";var F=document.getElementById("allShopProducts");if(await commerce.products.list({limit:100,sortDirection:"desc"}).then(Q=>{allProducts.push(Q.data)}).catch(Q=>{console.log("There was an error fetching the products",Q)}),allProducts[0].forEach(Q=>{var D=document.createElement("div");D.setAttribute("class","productContainer"),D.setAttribute("id",Q.id),Q.categories.forEach(O=>{D.classList.add(O.name)}),window.matchMedia("(max-width: 768px)").matches||(D.setAttribute("onmouseover","shopOnHover(this)"),D.setAttribute("onmouseout","shopOutHover(this)"),D.setAttribute("onclick","povOpen(this)")),F.appendChild(D),D.innerHTML=`
    <img class="shopProductsOver" src="${Q.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${Q.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${Q.name}</p>
    <p class="pcProductPrice">${Q.price.formatted_with_symbol}</p>
</div>
    `,window.productsloaded=!0,document.getElementById("divLoadBG2").style.display="none"}),window.urlParamsActive===!0){var b=document.getElementById(viewThisProduct);window.povOpen(b),window.history.replaceState({},document.title,"/index.html")}commerce.cart.empty()};window.imageFade=F=>{var b=F;b.style.transition="all 2s",b.style.opacity="1"};window.shopOnHover=F=>{var b=F.id,Q=document.getElementById(b);Q.getElementsByTagName("img")[1].style.opacity="0%",Q.getElementsByTagName("img")[0].style.opacity="100%"};window.shopOutHover=F=>{var b=F.id,Q=document.getElementById(b);Q.getElementsByTagName("img")[0].style.opacity="0%",Q.getElementsByTagName("img")[1].style.opacity="100%"};var currentCart,cartEmpty=!0,selectedPSize="";window.selectSize=F=>{F.style.opacity==="1"?(selectedPSize=F.id,document.getElementById("addToBagBut").innerHTML="Add To Bag",document.getElementById("addToBagBut").setAttribute("onclick","addToCart()")):(selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick","addToCart()"));var b=document.getElementsByClassName("shopProduct");for(let Q=0;Q<b.length;Q++)b[Q].style.color="black";F.style.color="#ff002d"};var countriesObj={};window.addToCart=async()=>{document.getElementById("shoppingBag").innerHTML="";var F=currentShopProduct[0].variant_groups[0].options.filter(b=>b.name.includes(`${selectedPSize}`));document.getElementById("divLoadBG").style.display="grid",commerce.cart.retrieve().then(b=>{currentCart=b}).then(()=>{commerce.cart.add(currentShopProduct[0].id,1,{[currentShopProduct[0].variant_groups[0].id]:F[0].id}).then(()=>{cartEmpty=!1,commerce.cart.retrieve().then(b=>{currentCart=b,document.getElementById("divLoadBG").style.display="none",document.getElementById("addToBagBut").innerHTML="Select a size";var Q=document.getElementsByClassName("shopProduct");for(let D=0;D<Q.length;D++)Q[D].style.color="";window.variantAbbr="",b.line_items.forEach(D=>{var O=document.createElement("div");switch(O.setAttribute("class","bagProducts"),document.getElementById("shoppingBag").appendChild(O),D.selected_options[0].option_name){case"Small":window.variantAbbr="S";break;case"Medium":window.variantAbbr="M";break;case"Large":window.variantAbbr="L";break;case"XLarge":window.variantAbbr="XL";break;case"2XLarge":window.variantAbbr="2XL";break;case"3XLarge":window.variantAbbr="3XL";break}O.innerHTML=`
                  <div class="bagProduct">
                      <div class="bagPOver" id="${D.id}">
                          <p id="test1sizeQty">(${D.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${D.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `,O.setAttribute("id",`${D.id}Parent`),document.getElementById(D.id).style.backgroundImage=`url(${D.image.url})`}),document.getElementById("carTotal").innerHTML=b.subtotal.formatted_with_symbol}),window.productAdded(),selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick")})}),countriedAdded===!1&&(countriedAdded=!0,commerce.services.localeListCountries().then(b=>{countriesObj=b.countries,Object.keys(b.countries).forEach(Q=>{var D=document.createElement("option"),O=document.getElementById("input9");D.setAttribute("value",Q),D.setAttribute("title",Q),D.innerHTML=`${countriesObj[Q].substr(0,20)}`,O.appendChild(D)})}))};window.removeLineItem=F=>{document.getElementById("divLoadBG").style.display="grid";var b=F.id;commerce.cart.remove(b).then(Q=>{document.getElementById(`${b}Parent`).remove(),document.getElementById("divLoadBG").style.display="none",document.getElementById("carTotal").innerHTML=Q.cart.subtotal.formatted_with_symbol,currentCart=Q.cart,Q.cart.total_items===0&&(cartEmpty=!0,countriedAdded=!1,document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `)})};window.states=()=>{var F=document.getElementById("input9"),b=F.options[F.selectedIndex].value,Q=F.options[F.selectedIndex].title,D=document.getElementById("carTotal");document.getElementById("input7").innerHTML="",b==="US"&&(document.getElementById("input4").value="$0.00 Free Shipping",window.shippingMethodValue=1,D.innerHTML=currentCart.subtotal.formatted_with_symbol),b!="US"&&(document.getElementById("input4").value="$70.00 Intl Shipping",window.shippingMethodValue=3,D.innerHTML=`$${currentCart.subtotal.raw+70}.00`),Q==="US2"&&(document.getElementById("input4").value="$130.00 - Next Day Air",window.shippingMethodValue=2,D.innerHTML=`$${currentCart.subtotal.raw+130}.00`),commerce.services.localeListSubdivisions(b).then(O=>{var U=O.subdivisions;Object.keys(O.subdivisions).forEach(q=>{var G=document.createElement("option"),Y=document.getElementById("input7");if(Object.keys(O.subdivisions).length<=1){var X=document.createElement("option");X.innerHTML="Not Available.",F.options[F.selectedIndex].innerHTML="Select Country",document.getElementById("input7").appendChild(X)}else G.setAttribute("value",U[q]),G.setAttribute("id",q),G.innerHTML=U[q].substring(0,20),Y.appendChild(G)})})};var style={base:{color:"black"}};const card=elements.create("card",{style});card.mount("#card-element");window.shippingId="";window.checkOut=async()=>{var F=document.getElementById("input1").value,b=document.getElementById("input2").value,Q=document.getElementById("input3").value;document.getElementById("input4").value;var D=document.getElementById("input5").value,O=document.getElementById("input6").value,U=document.getElementById("input8").value,q=document.getElementById("input10").value,G=document.getElementById("input9"),Y=document.getElementById("input7"),X=G.options[G.selectedIndex].value,ee=Y.options[Y.selectedIndex].id;document.getElementById("divLoadBG").style.display="grid",setTimeout(()=>{document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"},2e4),await commerce.checkout.generateToken(currentCart.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async re=>{commerce.checkout.getShippingOptions(re.id,{country:X}).then(async ie=>{window.shippingMethodValue===1&&(window.shippingId=ie[0].id),window.shippingMethodValue===3&&(window.shippingId=ie[0].id),window.shippingMethodValue===2&&(window.shippingId=ie[1].id);var ae=`${F} ${b}`;const ce=await stripe.createPaymentMethod({type:"card",card}).catch(Ae=>{console.log(Ae)});if(ce.error){document.getElementById("divLoadBG").style.display="none",console.log(ce.error.message),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${ce.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const Ae=await commerce.checkout.capture(re.id,{customer:{firstname:`${F}`,lastname:`${b}`,email:`${D}`},extra_fields:{extr_DWy4oG4dY56Jx2:q},shipping:{name:`${ae}`,street:`${Q}`,town_city:`${O}`,county_state:`${ee}`,postal_zip_code:`${U}`,country:`${X}`},fulfillment:{shipping_method:`${window.shippingId}`},billing:{name:`${ae}`,street:`${Q}`,town_city:`${O}`,county_state:`${ee}`,postal_zip_code:`${U}`,country:`${X}`},payment:{gateway:"stripe",stripe:{payment_method_id:ce.paymentMethod.id}}});setTimeout(()=>{window.closeLoadE()},2e4),window.closeLoadE(),document.getElementById("confirmNumber").innerHTML=Ae.customer_reference,window.purchaseComplete(),document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`,document.getElementById("shoppingBag").innerHTML="",cartEmpty=!0,document.getElementById("shopCheckoutDetails").style.opacity="0%",card.clear();return}catch(Ae){document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${Ae.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(Ae);return}finally{}})}).catch(re=>{console.log("Error",re)})};window.closeLoadE=()=>{document.getElementById("divLoadBG").innerHTML='<div class="loader"></div>',document.getElementById("divLoadBG").removeAttribute("onclick"),document.getElementById("divLoadBG").style.display="none",card.clear()};window.ccsOn=()=>{document.getElementById("crypto").innerHTML="Coming Soon"};window.ccsOff=()=>{document.getElementById("crypto").innerHTML="Pay with Crypto"};window.filterShop=F=>{var b=document.getElementById("sectionDesc"),Q=F.id;switch(Q!=="all"&&(document.getElementById("all").checked=!1),Q){case"all":b.innerHTML=`<h2>All Products</h2>
      <h4>SCOG\xC9 Shop - Collection pieces, gifts and more.</h4>`,document.getElementById("all").checked=!0,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.style.display="block"});break;case"tops":b.innerHTML=`<h2>Tops</h2>
      <h4>SCOG\xC9 T-Shirts, Hoodies, Shirts and Jackets.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!0,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("tops")?D.style.display="block":D.style.display="none"});break;case"bottoms":b.innerHTML=`<h2>Bottoms</h2>
      <h4>SCOG\xC9 Pants, Shorts, and Joggers.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!0,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("bottoms")?D.style.display="block":D.style.display="none"});break;case"accessories":b.innerHTML=`<h2>Accessories</h2>
      <h4>SCOG\xC9 Hats & More.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!0,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("accessories")?D.style.display="block":D.style.display="none"});break;case"art":b.innerHTML=`<h2>Artwork</h2>
      <h4>SCOG\xC9 Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!0,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("art")?D.style.display="block":D.style.display="none"});break;case"gifts":b.innerHTML=`<h2>Gifts</h2>
      <h4>SCOG\xC9 pieces wrapped, boxed, and ready to gift.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!0,document.querySelectorAll(".productContainer").forEach(D=>{D.classList.contains("gifts")?D.style.display="block":D.style.display="none"});break}};window.sayScoge=()=>{document.getElementById("scoge").play()};window.logoMove=(F,b,Q,D)=>{var O=document.getElementById("logo");O.style.transition=`${D}s all`,window.matchMedia("(max-width: 768px)").matches||(O.style.left=`${b}%`,O.style.width=`${Q}%`,O.style.top=`${F}%`)};window.dActiveBut=()=>{var F=document.getElementById("settingsBut"),b=document.getElementById("extraBut");shopActive==="closed"?(F.style.opacity="25%",b.style.opacity="25%",F.removeAttribute("onclick"),b.setAttribute("onclick","")):(F.style.opacity="100%",b.style.opacity="100%",F.setAttribute("onclick","openSettings();"),b.setAttribute("onclick","openExtra();"))};window.clearMainUi=()=>{var F=document.getElementById("gMenu"),b=document.getElementById("logo"),Q=document.getElementById("settingsMenu"),D=document.getElementById("subText1"),O=document.getElementById("subText2");F.style.transition="2s all",b.style.transition="2s all",D.style.transition="2s all",O.style.transition="2s all",window.inUniverse===!0?setTimeout(()=>{F.style.left="10%",b.style.left="30%",F.style.opacity="0",b.style.opacity="0%",setTimeout(()=>{D.style.bottom="49%",D.style.opacity="100%",setTimeout(()=>{O.style.bottom="45%"},500)},1e3),setTimeout(()=>{F.style.display="none",b.style.display="none",Q.style.display="none"},3e3)},2e3):(F.style.display="block",b.style.display="block",Q.style.display="grid",D.style.bottom="44%",D.style.opacity="0%",O.style.bottom="40%",O.style.opacity="0%",setTimeout(()=>{F.style.left="6%",b.style.left="3%",F.style.opacity="100%",b.style.opacity="100%"},1e3),setTimeout(()=>{O.style.display="none",D.style.display="none"}))};window.mainMenuPosition=(F,b,Q,D,O)=>{var U=document.querySelectorAll(".mainMenuBut");document.getElementById(""),U.forEach(q=>{switch(q.style.backgroundColor=F,q.id){case"shopBut":document.getElementById("shopBut").style.left=b;break;case"newGameBut":document.getElementById("newGameBut").style.left=Q;break;case"settingsBut":document.getElementById("settingsBut").style.left=D;break;case"subscribeBut":document.getElementById("subscribeBut").style.left=O;break}})};window.activateInvestors=()=>{document.getElementById("getInvestors").style.display="block",document.getElementById("investBut").style.display="block",window.matchMedia("(max-width: 768px)").matches&&(document.getElementById("settingsBut").style.display="none")};window.openInvestors=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="0%"};window.closeInvestor=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="-100%"};var viewThisProduct="";window.getParamsDesktop=()=>{const F=new URLSearchParams(location.search);viewThisProduct=F.get("Product"),F.size>0&&(window.urlParamsActive=!0),window.investorsView=F.get("Investors"),window.investorsView==="true"&&window.activateInvestors(),viewThisProduct!=null&&(console.log("Checker",viewThisProduct),window.toggleShop())};var peeking=!1,seekActive=!1,seeking=!1,cards=document.querySelectorAll(".seekOptCard");window.seekType="content";window.conversationHistory=[""];window.sameConvo=!1;window.digiFormDislayed=!1;window.newsFormDisplayed=!1;window.contactFormDisplayed=!1;window.form1Active=!1;window.form2Active=!1;window.galleryActive=!1;window.galleryEntry=!1;window.digiPre=!1;window.view="seeking";window.galleryType="video";window.dialogue=new SeekDialogue("",[{text:"What do you seek%?",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]},{text:"Ok, here they are.",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]);window.openSeek=()=>{var F=document.getElementById("seekModal"),b=document.getElementById("manBG");document.getElementById("seekModal").style.display="grid",seeking===!1&&(setTimeout(()=>{window.dialogue.start(0,"sysResp"),setTimeout(()=>{gsapWithCSS.to(b,{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.fromTo(seekOptCards,{scale:.7,opacity:0},{duration:.3,scale:1,opacity:1,ease:"power4.out",stagger:{each:.2}})},1400)},1e3),cards.forEach(Q=>{Q.addEventListener("click",D=>{window.seek(D)})}),seeking=!0),F.style.pointerEvents="auto",gsapWithCSS.to("#seekModal",{duration:.3,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,scale:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,filter:"blur(0px)",ease:"power2.inOut"}),window.isMobile!=!0&&(b.addEventListener("mouseover",()=>{window.openPeek()}),b.addEventListener("mouseout",()=>{window.closePeek()})),seekActive=!0,peeking=!1,window.trackMouse(),window.trackMouseMove()};const seekOptCards=document.querySelectorAll(".seekOptCard");window.closeSeek=()=>{if(window.view==="seeking"){seekActive=!1,gsapWithCSS.to("#seekModal",{duration:.3,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.3,scale:1.1,ease:"power2.inOut"}),setTimeout(()=>{document.getElementById("seekModal").style.pointerEvents="none",document.getElementById("seekModal").style.display="none"},500),gsapWithCSS.to(".seekContent",{duration:1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.4,backgroundColor:"rgba(15,15,18,1)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:1,opacity:1,ease:"power2.inOut"}),peeking=!1,seekActive=!1;return}if(window.view==="gallery"){gsapWithCSS.to("#seekGallery",{duration:1,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:1,scale:1.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#manBG",{duration:1,backgroundColor:"",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,border:"1px solid var(--secondary)",y:0,ease:"power2.out"}),gsapWithCSS.to("#manBG",{duration:1,scale:1,y:0,ease:"power2.out"}),document.getElementById("seekBody").style.pointerEvents="auto",document.getElementById("manBG").style.pointerEvents="auto",document.getElementById("seekGallery").style.pointerEvents="none",document.getElementById("videoGallery").style.pointerEvents="none",setTimeout(()=>{document.getElementById("portalVideo").style.display="none",document.getElementById("portalVideo2").style.display="none"},1e3),document.getElementById("portalVideo2").pause(),document.getElementById("portalVideo").pause(),window.view="seeking",window.viewingPg=!1,gsapWithCSS.to("#tooltip",{opacity:0,duration:.5,ease:"power2.out"}),document.getElementById("tooltip").style.display="none",document.getElementById("homeTip").innerHTML="HOME",gsapWithCSS.to("#dropdown",{duration:1,opacity:0,y:0,ease:"power2.out"}),gsapWithCSS.to("#soundToggle",{duration:1,opacity:0,y:0,ease:"power2.out"}),document.getElementById("dropdown").style.pointerEvents="none",document.getElementById("soundToggle").style.pointerEvents="none";return}};window.closePeek=()=>{if(peeking===!0&&seekActive===!0&&window.view==="seeking"){gsapWithCSS.to(".seekContent",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.1,backgroundColor:"rgba(15,15,18,1)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:.1,opacity:1,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}if(peeking===!0&&seekActive===!0&&window.galleryType==="images"){gsapWithCSS.to("#seekGallery",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:.1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:0,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}if(peeking===!0&&seekActive===!0&&window.galleryType==="video"){gsapWithCSS.to("#videoGallery",{duration:.1,filter:"blur(0px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:.1,opacity:1,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:0,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:0,ease:"power2.inOut"}),seekActive=!0,peeking=!1;return}};window.openPeek=()=>{if(peeking===!1&&seekActive===!0&&window.view==="seeking"){gsapWithCSS.to(".seekContent",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to(".seekContent",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekModal",{duration:.2,backgroundColor:"rgba(15,15,18,.5)",ease:"power2.inOut"}),seekActive=!0,peeking=!0;return}if(peeking===!1&&seekActive===!0&&window.galleryType==="images"){gsapWithCSS.to("#seekGallery",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#seekGallery",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:.5,ease:"power2.inOut"}),seekActive=!0,peeking=!0,window.view="gallery";return}if(peeking===!1&&seekActive===!0&&window.galleryType==="video"){gsapWithCSS.to("#videoGallery",{duration:.2,filter:"blur(5px)",ease:"power2.inOut"}),gsapWithCSS.to("#videoGallery",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekOpt",{duration:.2,opacity:.5,ease:"power2.inOut"}),gsapWithCSS.to("#seekResp",{duration:.2,opacity:.5,ease:"power2.inOut"}),seekActive=!0,peeking=!0,window.view="gallery";return}};gsapWithCSS.registerPlugin(TextPlugin);window.transitionWords=(F,b,Q,D)=>{const O=document.querySelector(F),U=b.split(""),q=Q.split(""),G=Math.max(U.length,q.length);for(;U.length<G;)U.push("");for(;q.length<G;)q.push("");const Y=gsapWithCSS.timeline();for(let X=0;X<G;X++)Y.to(O,{duration:D/G,text:q.slice(0,X+1).join(""),overwrite:"auto",onUpdate:()=>{const ee=U[X]||"",re=q[X]||"",ie=ee.charCodeAt(0),ae=re.charCodeAt(0),ce=Math.round((ae-ie)*Y.progress()+ie),Ae=String.fromCharCode(ce),ge=q.slice(0,X).join("")+Ae+q.slice(X+1).join("");O.textContent=ge}},X*(D/G))};window.seek=F=>{var Y,X;var b=F.target.classList[1],Q=document.querySelectorAll(".blink");switch(Q.forEach(ee=>{ee.classList.remove("blink")}),b){case"seekOpt1":if(window.digiPre=!1,window.conversationHistory[0]==="seekOpt1"){var D=document.querySelectorAll(".visualSubMenu"),O=D[0];gsapWithCSS.to(O,{duration:.5,backgroundColor:"#94be8c",ease:"power2.inOut"}),gsapWithCSS.to(O,{duration:.5,color:"black",ease:"power2.inOut"}),gsapWithCSS.to(O,{duration:.8,backgroundColor:"",ease:"power2.inOut",delay:.8}),gsapWithCSS.to(O,{duration:.8,color:"",ease:"power2.inOut",delay:.8});return}else{window.convoHist(b),window.seekType="content";let ee="Show me some visuals.",re="Which would you like to see?";window.systemSpeak(ee,re),window.galleryActive=!0}break;case"seekOpt2":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt2"){window.convoHist(b),window.seekType="content";let ee="I want to listen to music",re="Now playing 'SCOG\xC9 Radio'.";window.systemSpeak(ee,re)}else{var U=document.querySelector("scoge-music").shadowRoot.querySelector("#musicInterface");gsapWithCSS.to(U,{duration:.5,backgroundColor:"red",ease:"power2.inOut"}),setTimeout(()=>{gsapWithCSS.to(U,{duration:.5,backgroundColor:"rgba(0,0,0,0)",ease:"power2.inOut"})},500)}break;case"seekOpt3":if(window.conversationHistory[0]!="seekOpt3"){window.convoHist(b),window.seekType="form";let ee="What is Digisette?",re="Digisette";window.systemSpeak(ee,re)}else(Y=document.getElementById("genInput"))==null||Y.focus();break;case"seekOpt4":window.digiPre=!1,window.convoHist(b),window.seekType="discover";var q="Tell me about T.A.O.S City",G="World";window.systemSpeak(q,G);break;case"seekOpt5":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt5"){window.convoHist(b),window.seekType="mailing";let ee="I want community?",re="Keep up by joining our mailing list.";window.systemSpeak(ee,re)}else(X=document.getElementById("genInput"))==null||X.focus();break;case"seekOpt6":if(window.digiPre=!1,window.conversationHistory[0]!="seekOpt6"){window.convoHist(b),window.seekType="info";let ee="Tell me about 'SCOG\xC9' the brand.",re="Sure, what would you like to know?";window.systemSpeak(ee,re)}else{let re=document.querySelectorAll(".infoSubMenu")[0];gsapWithCSS.to(re,{duration:.5,backgroundColor:"#94be8c",ease:"power2.inOut"}),gsapWithCSS.to(re,{duration:.5,color:"black",ease:"power2.inOut"}),gsapWithCSS.to(re,{duration:.8,backgroundColor:"",ease:"power2.inOut",delay:.8}),gsapWithCSS.to(re,{duration:.8,color:"",ease:"power2.inOut",delay:.8})}break}};window.convoHist=F=>{window.conversationHistory[0]===F?window.sameConvo=!0:(window.conversationHistory[0]=F,window.sameConvo=!1)};window.systemSpeak=async(F,b)=>{var O,U;try{document.getElementById("convoCont").style.display="block",setTimeout(()=>{document.getElementById("convoCont").style.animationPlayState="paused",document.getElementById("convoCont").style.animation="blink 1s infinite;",document.getElementById("Reqerror").style.display="block",setTimeout(()=>{document.getElementById("Reqerror").style.display="none",document.getElementById("convoCont").style.animationPlayState="running",gsapWithCSS.to("#convoCont",{duration:1,opacity:0,ease:"power2.inOut"})},3e3)},6e3);const q=new dist.Configuration({apiKey:VITE_ScogeI}),G=new dist.OpenAIApi(q);if(window.sameConvo===!0?window.completion=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:"Say tell me more in 5 words or less. Don't use quotation marks."}],max_tokens:15}).catch(X=>{console.log(X)}):window.completion=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this request '${F}' Don't make it a question.`}],max_tokens:10}).catch(X=>{console.log(X)}),window.seekType==="content"||window.seekType==="info"||window.seekType==="mailing")window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this answer '${b}'.`}],top_p:1,max_tokens:15,stop:["."]}).catch(X=>{console.log(X)});else if(window.seekType==="discover"){const X=await __vitePreload(()=>import("./library.f2028edc.js"),[]).catch(re=>{console.log(re)}),ee=JSON.stringify(X.default);var Q=JSON.parse(ee),D=JSON.stringify(Q[b]);window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide some information from ${D} in a brief sentence, 20 words max.`}],temperature:.5,max_tokens:35}).catch(re=>{console.log(re)})}else if(window.seekType==="form"){const X=await __vitePreload(()=>import("./library.f2028edc.js"),[]).catch(ae=>{console.log(ae)}),ee=JSON.stringify(X.default);let re=JSON.parse(ee),ie=JSON.stringify(re[b]);window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide some information from ${ie} in a brief sentence, 20 words max, Include information from any key value pair. Then ask to 'join the MAILING LIST below'.`}],top_p:1,max_tokens:30}).catch(ae=>{console.log(ae)})}else if(window.seekType==="contact"){const X=await __vitePreload(()=>import("./library.f2028edc.js"),[]),ee=JSON.stringify(X.default);let re=JSON.parse(ee),ie=JSON.stringify(re[b]);window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Provide information from ${ie} in a brief sentence, 20 words max, Do not include an opening statement, Alternatively they can 'send a Message below'.`}],top_p:1,max_tokens:20}).catch(ae=>{console.log(ae)})}else window.completion2=await G.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Compose a different version of this answer '${b}'.`}],max_tokens:10}).catch(X=>{console.log(X)});window.completion2!=null&&(document.getElementById("convoCont").style.display="none");let Y=new SeekDialogue("",[{text:`${(O=window.completion.data.choices[0].message.content)!=null?O:F}`,choices:[{text:"Ok, here they are.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]);window.dialogue=new SeekDialogue("",[{text:"What $ do you seek%?",choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]},{text:`${(U=window.completion2.data.choices[0].message.content)!=null?U:b}`,choices:[{text:"I seek the truth.",action:()=>{window.dialogue.start(0,"sysResp")}}]}]),Y.start(0,"userResp")}catch(q){console.log(q)}};const myContainer=document.querySelector("#seekResp");window.autoSmoothScrollToBottom=F=>{if(F.scrollHeight>F.clientHeight){var b=gsapWithCSS.timeline();b.to(F,{duration:2,scrollTop:F.scrollHeight-F.clientHeight-10,ease:"power2.out"})}};myContainer.addEventListener("DOMSubtreeModified",function(){setTimeout(()=>{window.autoSmoothScrollToBottom(myContainer)},250)});window.sub=()=>{var F=document.querySelector("#subGeneral");F.addEventListener("submit",b=>{b.preventDefault(),document.getElementById("genSubLoad").style.opacity="100%",gsapWithCSS.to("#genSubLoad",{rotation:360,duration:2,repeat:-1,ease:"none"});let Q=new FormData(F);fetch("https://script.google.com/macros/s/AKfycby5qNgMlcrC9_ICCIc7_h_7XdGgUGLOLuwFWaMiVLL7Bfd0-rmGAsF3lhPZuH-EKvvhnw/exec",{method:"POST",body:Q,mode:"cors"}).then(D=>D.text()).then(D=>{var O=document.getElementById("subGeneral"),U=document.createElement("span");U.setAttribute("id","done"),U.innerHTML="Done!",O.appendChild(U),F.reset(),gsapWithCSS.to("#done",{opacity:0,duration:1,ease:"power2.out",onComplete:function(){O.removeChild(U)}}),gsapWithCSS.to("#genSubLoad",{opacity:0,duration:1,ease:"power2.out"})})})};window.sub2=()=>{var F=document.querySelector("#subGeneral2");F.addEventListener("submit",b=>{document.getElementById("genCat2").value=`${document.getElementById("genInput3").value}`,b.preventDefault(),document.getElementById("genSubLoad2").style.opacity="100%",gsapWithCSS.to("#genSubLoad2",{rotation:360,duration:2,repeat:-1,ease:"none"});let Q=new FormData(F);fetch("https://script.google.com/macros/s/AKfycby5qNgMlcrC9_ICCIc7_h_7XdGgUGLOLuwFWaMiVLL7Bfd0-rmGAsF3lhPZuH-EKvvhnw/exec",{method:"POST",body:Q,mode:"cors"}).then(D=>D.text()).then(D=>{var O=document.getElementById("genSubLoad2");F.reset(),gsapWithCSS.killTweensOf("#genSubLoad2"),gsapWithCSS.set("#genSubLoad2",{rotation:0}),O.innerHTML="Sent.",setTimeout(()=>{gsapWithCSS.to("#genSubLoad2",{opacity:0,duration:1,ease:"power2.out"}),setTimeout(()=>{O.innerHTML="|"},1e3)},3e3)})})};var mouseMoving=!1;window.viewingPg=!1;window.trackMouse=F=>{if(window.viewingPg===!0&&(window.galleryType=="images"||window.galleryType=="video"&&window.view==="gallery")){var b=document.getElementById("tooltip");b.style.left=F.clientX-40+"px",b.style.top=F.clientY-20+"px",gsapWithCSS.to("#tooltip",{opacity:1,duration:.5,ease:"power2.out"}),mouseMoving===!1&&gsapWithCSS.to("#tooltip",{opacity:0,duration:.5,ease:"power2.out",delay:2}),b.style.display="block"}};window.trackMouseMove=()=>{document.addEventListener("mousemove",function(){mouseMoving=!0,setTimeout(function(){mouseMoving=!1},2e3)})};window.initFilterActions=()=>{var F=document.querySelectorAll(".visualFilters"),b=document.querySelector(".dropbtn").innerHTML;F.forEach(Q=>{Q.addEventListener("click",D=>{var O=D.target;switch(D.preventDefault(),O.id){case"filter1":window.removeItemsNotEqualToValue("DY1"),window.transitionWords("#dBtn",`${b}____`,"DISCOVERY 1",2);break;case"filter2":window.removeItemsNotEqualToValue("CH1"),window.transitionWords("#dBtn",`${b}____`,"CHAPTER 1",2);break;case"filter3":window.removeItemsNotEqualToValue("CH2"),window.transitionWords("#dBtn",`${b}____`,"CHAPTER 2",2);break;case"filter4":window.removeItemsNotEqualToValue("ART"),window.transitionWords("#dBtn",`${b}____`,"ARTWORK",2);break;case"filter5":window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles),window.transitionWords("#dBtn",`${b}____`,"RANDOM",2),portal.showNextMedia();break}})})};window.removeItemsNotEqualToValue=F=>{window.filteredVideos=window.shuffleArray(window.videoFiles),window.filteredImages=window.shuffleArray(window.imageFiles);for(let b=window.filteredImages.length-1;b>=0;b--)window.filteredImages[b].publicUrl.includes(F)===!1&&window.filteredImages.splice(b,1);for(let b=window.filteredVideos.length-1;b>=0;b--)window.filteredVideos[b].publicUrl.includes(F)===!1&&window.filteredVideos.splice(b,1)};portal();class Typing{constructor(b,Q,D=50){this.text=b,this.element=document.getElementById(Q),this.currentIndex=0,this.delay=D}start(){this.intervalId=setInterval(()=>{this.currentIndex<this.text.length?(this.element.textContent+=this.text.charAt(this.currentIndex),this.currentIndex++):clearInterval(this.intervalId)},this.delay)}}window.galleryHelp=new Typing("Click to move forward.","simpleNoti",speed=80);export{buffer$1 as a,base64Js as b,src$1 as c,src as d,decode as e,commonjsRequire as f,getAugmentedNamespace as g,commonjsGlobal as h,getDefaultExportFromCjs as i,dist as j,gsapWithCSS as k,sha256 as s};
