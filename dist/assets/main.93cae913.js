var Gt=Object.defineProperty;var _t=(w,B,Q)=>B in w?Gt(w,B,{enumerable:!0,configurable:!0,writable:!0,value:Q}):w[B]=Q;var $e=(w,B,Q)=>(_t(w,typeof B!="symbol"?B+"":B,Q),Q);import"./wScoge.fc00b881.js";const scriptRel="modulepreload",seen={},base="/",__vitePreload=function(B,Q){return!Q||Q.length===0?B():Promise.all(Q.map(F=>{if(F=`${base}${F}`,F in seen)return;seen[F]=!0;const D=F.endsWith(".css"),U=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${F}"]${U}`))return;const O=document.createElement("link");if(O.rel=D?"stylesheet":scriptRel,D||(O.as="script",O.crossOrigin=""),O.href=F,document.head.appendChild(O),D)return new Promise((Y,j)=>{O.addEventListener("load",Y),O.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${F}`)))})})).then(()=>B())};var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof{}!="undefined"?{}:typeof self!="undefined"?self:{};function getDefaultExportFromCjs(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}function getAugmentedNamespace(w){if(w.__esModule)return w;var B=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(w).forEach(function(Q){var F=Object.getOwnPropertyDescriptor(w,Q);Object.defineProperty(B,Q,F.get?F:{enumerable:!0,get:function(){return w[Q]}})}),B}function commonjsRequire(w){throw new Error('Could not dynamically require "'+w+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var objectWithoutProperties={exports:{}},objectWithoutPropertiesLoose={exports:{}};(function(w){function B(Q,F){if(Q==null)return{};var D={},U=Object.keys(Q),O,Y;for(Y=0;Y<U.length;Y++)O=U[Y],!(F.indexOf(O)>=0)&&(D[O]=Q[O]);return D}w.exports=B,w.exports.__esModule=!0,w.exports.default=w.exports})(objectWithoutPropertiesLoose);(function(w){var B=objectWithoutPropertiesLoose.exports;function Q(F,D){if(F==null)return{};var U=B(F,D),O,Y;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(F);for(Y=0;Y<j.length;Y++)O=j[Y],!(D.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(F,O)||(U[O]=F[O]))}return U}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(objectWithoutProperties);var toConsumableArray={exports:{}},arrayWithoutHoles={exports:{}},arrayLikeToArray={exports:{}};(function(w){function B(Q,F){(F==null||F>Q.length)&&(F=Q.length);for(var D=0,U=new Array(F);D<F;D++)U[D]=Q[D];return U}w.exports=B,w.exports.__esModule=!0,w.exports.default=w.exports})(arrayLikeToArray);(function(w){var B=arrayLikeToArray.exports;function Q(F){if(Array.isArray(F))return B(F)}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(arrayWithoutHoles);var iterableToArray={exports:{}};(function(w){function B(Q){if(typeof Symbol!="undefined"&&Q[Symbol.iterator]!=null||Q["@@iterator"]!=null)return Array.from(Q)}w.exports=B,w.exports.__esModule=!0,w.exports.default=w.exports})(iterableToArray);var unsupportedIterableToArray={exports:{}};(function(w){var B=arrayLikeToArray.exports;function Q(F,D){if(!!F){if(typeof F=="string")return B(F,D);var U=Object.prototype.toString.call(F).slice(8,-1);if(U==="Object"&&F.constructor&&(U=F.constructor.name),U==="Map"||U==="Set")return Array.from(F);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return B(F,D)}}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(unsupportedIterableToArray);var nonIterableSpread={exports:{}};(function(w){function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}w.exports=B,w.exports.__esModule=!0,w.exports.default=w.exports})(nonIterableSpread);(function(w){var B=arrayWithoutHoles.exports,Q=iterableToArray.exports,F=unsupportedIterableToArray.exports,D=nonIterableSpread.exports;function U(O){return B(O)||Q(O)||F(O)||D()}w.exports=U,w.exports.__esModule=!0,w.exports.default=w.exports})(toConsumableArray);var _typeof$2={exports:{}};(function(w){function B(Q){return w.exports=B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},w.exports.__esModule=!0,w.exports.default=w.exports,B(Q)}w.exports=B,w.exports.__esModule=!0,w.exports.default=w.exports})(_typeof$2);var defineProperty={exports:{}},toPropertyKey={exports:{}},toPrimitive={exports:{}};(function(w){var B=_typeof$2.exports.default;function Q(F,D){if(B(F)!=="object"||F===null)return F;var U=F[Symbol.toPrimitive];if(U!==void 0){var O=U.call(F,D||"default");if(B(O)!=="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(F)}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(toPrimitive);(function(w){var B=_typeof$2.exports.default,Q=toPrimitive.exports;function F(D){var U=Q(D,"string");return B(U)==="symbol"?U:String(U)}w.exports=F,w.exports.__esModule=!0,w.exports.default=w.exports})(toPropertyKey);(function(w){var B=toPropertyKey.exports;function Q(F,D,U){return D=B(D),D in F?Object.defineProperty(F,D,{value:U,enumerable:!0,configurable:!0,writable:!0}):F[D]=U,F}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(defineProperty);var classCallCheck={exports:{}};(function(w){function B(Q,F){if(!(Q instanceof F))throw new TypeError("Cannot call a class as a function")}w.exports=B,w.exports.__esModule=!0,w.exports.default=w.exports})(classCallCheck);var createClass={exports:{}};(function(w){var B=toPropertyKey.exports;function Q(D,U){for(var O=0;O<U.length;O++){var Y=U[O];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(D,B(Y.key),Y)}}function F(D,U,O){return U&&Q(D.prototype,U),O&&Q(D,O),Object.defineProperty(D,"prototype",{writable:!1}),D}w.exports=F,w.exports.__esModule=!0,w.exports.default=w.exports})(createClass);var regeneratorRuntime$1={exports:{}};(function(w){var B=_typeof$2.exports.default;function Q(){w.exports=Q=function(){return F},w.exports.__esModule=!0,w.exports.default=w.exports;var F={},D=Object.prototype,U=D.hasOwnProperty,O=Object.defineProperty||function(Be,he,pe){Be[he]=pe.value},Y=typeof Symbol=="function"?Symbol:{},j=Y.iterator||"@@iterator",re=Y.asyncIterator||"@@asyncIterator",ge=Y.toStringTag||"@@toStringTag";function ce(Be,he,pe){return Object.defineProperty(Be,he,{value:pe,enumerable:!0,configurable:!0,writable:!0}),Be[he]}try{ce({},"")}catch{ce=function(pe,ye,Se){return pe[ye]=Se}}function ue(Be,he,pe,ye){var Se=he&&he.prototype instanceof Ie?he:Ie,Qe=Object.create(Se.prototype),Re=new qe(ye||[]);return O(Qe,"_invoke",{value:Ye(Be,pe,Re)}),Qe}function de(Be,he,pe){try{return{type:"normal",arg:Be.call(he,pe)}}catch(ye){return{type:"throw",arg:ye}}}F.wrap=ue;var Ce={};function Ie(){}function Fe(){}function Pe(){}var Ne={};ce(Ne,j,function(){return this});var it=Object.getPrototypeOf,ot=it&&it(it(Oe([])));ot&&ot!==D&&U.call(ot,j)&&(Ne=ot);var Ke=Pe.prototype=Ie.prototype=Object.create(Ne);function ke(Be){["next","throw","return"].forEach(function(he){ce(Be,he,function(pe){return this._invoke(he,pe)})})}function be(Be,he){function pe(Se,Qe,Re,Te){var Xe=de(Be[Se],Be,Qe);if(Xe.type!=="throw"){var ee=Xe.arg,rt=ee.value;return rt&&B(rt)=="object"&&U.call(rt,"__await")?he.resolve(rt.__await).then(function(At){pe("next",At,Re,Te)},function(At){pe("throw",At,Re,Te)}):he.resolve(rt).then(function(At){ee.value=At,Re(ee)},function(At){return pe("throw",At,Re,Te)})}Te(Xe.arg)}var ye;O(this,"_invoke",{value:function(Qe,Re){function Te(){return new he(function(Xe,ee){pe(Qe,Re,Xe,ee)})}return ye=ye?ye.then(Te,Te):Te()}})}function Ye(Be,he,pe){var ye="suspendedStart";return function(Se,Qe){if(ye==="executing")throw new Error("Generator is already running");if(ye==="completed"){if(Se==="throw")throw Qe;return Ze()}for(pe.method=Se,pe.arg=Qe;;){var Re=pe.delegate;if(Re){var Te=Je(Re,pe);if(Te){if(Te===Ce)continue;return Te}}if(pe.method==="next")pe.sent=pe._sent=pe.arg;else if(pe.method==="throw"){if(ye==="suspendedStart")throw ye="completed",pe.arg;pe.dispatchException(pe.arg)}else pe.method==="return"&&pe.abrupt("return",pe.arg);ye="executing";var Xe=de(Be,he,pe);if(Xe.type==="normal"){if(ye=pe.done?"completed":"suspendedYield",Xe.arg===Ce)continue;return{value:Xe.arg,done:pe.done}}Xe.type==="throw"&&(ye="completed",pe.method="throw",pe.arg=Xe.arg)}}}function Je(Be,he){var pe=he.method,ye=Be.iterator[pe];if(ye===void 0)return he.delegate=null,pe==="throw"&&Be.iterator.return&&(he.method="return",he.arg=void 0,Je(Be,he),he.method==="throw")||pe!=="return"&&(he.method="throw",he.arg=new TypeError("The iterator does not provide a '"+pe+"' method")),Ce;var Se=de(ye,Be.iterator,he.arg);if(Se.type==="throw")return he.method="throw",he.arg=Se.arg,he.delegate=null,Ce;var Qe=Se.arg;return Qe?Qe.done?(he[Be.resultName]=Qe.value,he.next=Be.nextLoc,he.method!=="return"&&(he.method="next",he.arg=void 0),he.delegate=null,Ce):Qe:(he.method="throw",he.arg=new TypeError("iterator result is not an object"),he.delegate=null,Ce)}function Ee(Be){var he={tryLoc:Be[0]};1 in Be&&(he.catchLoc=Be[1]),2 in Be&&(he.finallyLoc=Be[2],he.afterLoc=Be[3]),this.tryEntries.push(he)}function ze(Be){var he=Be.completion||{};he.type="normal",delete he.arg,Be.completion=he}function qe(Be){this.tryEntries=[{tryLoc:"root"}],Be.forEach(Ee,this),this.reset(!0)}function Oe(Be){if(Be){var he=Be[j];if(he)return he.call(Be);if(typeof Be.next=="function")return Be;if(!isNaN(Be.length)){var pe=-1,ye=function Se(){for(;++pe<Be.length;)if(U.call(Be,pe))return Se.value=Be[pe],Se.done=!1,Se;return Se.value=void 0,Se.done=!0,Se};return ye.next=ye}}return{next:Ze}}function Ze(){return{value:void 0,done:!0}}return Fe.prototype=Pe,O(Ke,"constructor",{value:Pe,configurable:!0}),O(Pe,"constructor",{value:Fe,configurable:!0}),Fe.displayName=ce(Pe,ge,"GeneratorFunction"),F.isGeneratorFunction=function(Be){var he=typeof Be=="function"&&Be.constructor;return!!he&&(he===Fe||(he.displayName||he.name)==="GeneratorFunction")},F.mark=function(Be){return Object.setPrototypeOf?Object.setPrototypeOf(Be,Pe):(Be.__proto__=Pe,ce(Be,ge,"GeneratorFunction")),Be.prototype=Object.create(Ke),Be},F.awrap=function(Be){return{__await:Be}},ke(be.prototype),ce(be.prototype,re,function(){return this}),F.AsyncIterator=be,F.async=function(Be,he,pe,ye,Se){Se===void 0&&(Se=Promise);var Qe=new be(ue(Be,he,pe,ye),Se);return F.isGeneratorFunction(he)?Qe:Qe.next().then(function(Re){return Re.done?Re.value:Qe.next()})},ke(Ke),ce(Ke,ge,"Generator"),ce(Ke,j,function(){return this}),ce(Ke,"toString",function(){return"[object Generator]"}),F.keys=function(Be){var he=Object(Be),pe=[];for(var ye in he)pe.push(ye);return pe.reverse(),function Se(){for(;pe.length;){var Qe=pe.pop();if(Qe in he)return Se.value=Qe,Se.done=!1,Se}return Se.done=!0,Se}},F.values=Oe,qe.prototype={constructor:qe,reset:function(he){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(ze),!he)for(var pe in this)pe.charAt(0)==="t"&&U.call(this,pe)&&!isNaN(+pe.slice(1))&&(this[pe]=void 0)},stop:function(){this.done=!0;var he=this.tryEntries[0].completion;if(he.type==="throw")throw he.arg;return this.rval},dispatchException:function(he){if(this.done)throw he;var pe=this;function ye(ee,rt){return Re.type="throw",Re.arg=he,pe.next=ee,rt&&(pe.method="next",pe.arg=void 0),!!rt}for(var Se=this.tryEntries.length-1;Se>=0;--Se){var Qe=this.tryEntries[Se],Re=Qe.completion;if(Qe.tryLoc==="root")return ye("end");if(Qe.tryLoc<=this.prev){var Te=U.call(Qe,"catchLoc"),Xe=U.call(Qe,"finallyLoc");if(Te&&Xe){if(this.prev<Qe.catchLoc)return ye(Qe.catchLoc,!0);if(this.prev<Qe.finallyLoc)return ye(Qe.finallyLoc)}else if(Te){if(this.prev<Qe.catchLoc)return ye(Qe.catchLoc,!0)}else{if(!Xe)throw new Error("try statement without catch or finally");if(this.prev<Qe.finallyLoc)return ye(Qe.finallyLoc)}}}},abrupt:function(he,pe){for(var ye=this.tryEntries.length-1;ye>=0;--ye){var Se=this.tryEntries[ye];if(Se.tryLoc<=this.prev&&U.call(Se,"finallyLoc")&&this.prev<Se.finallyLoc){var Qe=Se;break}}Qe&&(he==="break"||he==="continue")&&Qe.tryLoc<=pe&&pe<=Qe.finallyLoc&&(Qe=null);var Re=Qe?Qe.completion:{};return Re.type=he,Re.arg=pe,Qe?(this.method="next",this.next=Qe.finallyLoc,Ce):this.complete(Re)},complete:function(he,pe){if(he.type==="throw")throw he.arg;return he.type==="break"||he.type==="continue"?this.next=he.arg:he.type==="return"?(this.rval=this.arg=he.arg,this.method="return",this.next="end"):he.type==="normal"&&pe&&(this.next=pe),Ce},finish:function(he){for(var pe=this.tryEntries.length-1;pe>=0;--pe){var ye=this.tryEntries[pe];if(ye.finallyLoc===he)return this.complete(ye.completion,ye.afterLoc),ze(ye),Ce}},catch:function(he){for(var pe=this.tryEntries.length-1;pe>=0;--pe){var ye=this.tryEntries[pe];if(ye.tryLoc===he){var Se=ye.completion;if(Se.type==="throw"){var Qe=Se.arg;ze(ye)}return Qe}}throw new Error("illegal catch attempt")},delegateYield:function(he,pe,ye){return this.delegate={iterator:Oe(he),resultName:pe,nextLoc:ye},this.method==="next"&&(this.arg=void 0),Ce}},F}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(regeneratorRuntime$1);var runtime=regeneratorRuntime$1.exports(),regenerator=runtime;try{regeneratorRuntime=runtime}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}var asyncToGenerator={exports:{}};(function(w){function B(F,D,U,O,Y,j,re){try{var ge=F[j](re),ce=ge.value}catch(ue){U(ue);return}ge.done?D(ce):Promise.resolve(ce).then(O,Y)}function Q(F){return function(){var D=this,U=arguments;return new Promise(function(O,Y){var j=F.apply(D,U);function re(ce){B(j,O,Y,re,ge,"next",ce)}function ge(ce){B(j,O,Y,re,ge,"throw",ce)}re(void 0)})}}w.exports=Q,w.exports.__esModule=!0,w.exports.default=w.exports})(asyncToGenerator);var axios$3={exports:{}},bind$2=function(B,Q){return function(){for(var D=new Array(arguments.length),U=0;U<D.length;U++)D[U]=arguments[U];return B.apply(Q,D)}},bind$1=bind$2,toString=Object.prototype.toString;function isArray(w){return toString.call(w)==="[object Array]"}function isUndefined(w){return typeof w=="undefined"}function isBuffer(w){return w!==null&&!isUndefined(w)&&w.constructor!==null&&!isUndefined(w.constructor)&&typeof w.constructor.isBuffer=="function"&&w.constructor.isBuffer(w)}function isArrayBuffer(w){return toString.call(w)==="[object ArrayBuffer]"}function isFormData(w){return typeof FormData!="undefined"&&w instanceof FormData}function isArrayBufferView(w){var B;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?B=ArrayBuffer.isView(w):B=w&&w.buffer&&w.buffer instanceof ArrayBuffer,B}function isString(w){return typeof w=="string"}function isNumber(w){return typeof w=="number"}function isObject(w){return w!==null&&typeof w=="object"}function isPlainObject(w){if(toString.call(w)!=="[object Object]")return!1;var B=Object.getPrototypeOf(w);return B===null||B===Object.prototype}function isDate(w){return toString.call(w)==="[object Date]"}function isFile(w){return toString.call(w)==="[object File]"}function isBlob(w){return toString.call(w)==="[object Blob]"}function isFunction(w){return toString.call(w)==="[object Function]"}function isStream(w){return isObject(w)&&isFunction(w.pipe)}function isURLSearchParams(w){return typeof URLSearchParams!="undefined"&&w instanceof URLSearchParams}function trim(w){return w.trim?w.trim():w.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(w,B){if(!(w===null||typeof w=="undefined"))if(typeof w!="object"&&(w=[w]),isArray(w))for(var Q=0,F=w.length;Q<F;Q++)B.call(null,w[Q],Q,w);else for(var D in w)Object.prototype.hasOwnProperty.call(w,D)&&B.call(null,w[D],D,w)}function merge(){var w={};function B(D,U){isPlainObject(w[U])&&isPlainObject(D)?w[U]=merge(w[U],D):isPlainObject(D)?w[U]=merge({},D):isArray(D)?w[U]=D.slice():w[U]=D}for(var Q=0,F=arguments.length;Q<F;Q++)forEach(arguments[Q],B);return w}function extend(w,B,Q){return forEach(B,function(D,U){Q&&typeof D=="function"?w[U]=bind$1(D,Q):w[U]=D}),w}function stripBOM(w){return w.charCodeAt(0)===65279&&(w=w.slice(1)),w}var utils$h={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM},utils$g=utils$h;function encode(w){return encodeURIComponent(w).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function(B,Q,F){if(!Q)return B;var D;if(F)D=F(Q);else if(utils$g.isURLSearchParams(Q))D=Q.toString();else{var U=[];utils$g.forEach(Q,function(j,re){j===null||typeof j=="undefined"||(utils$g.isArray(j)?re=re+"[]":j=[j],utils$g.forEach(j,function(ce){utils$g.isDate(ce)?ce=ce.toISOString():utils$g.isObject(ce)&&(ce=JSON.stringify(ce)),U.push(encode(re)+"="+encode(ce))}))}),D=U.join("&")}if(D){var O=B.indexOf("#");O!==-1&&(B=B.slice(0,O)),B+=(B.indexOf("?")===-1?"?":"&")+D}return B},utils$f=utils$h;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function(B,Q,F){return this.handlers.push({fulfilled:B,rejected:Q,synchronous:F?F.synchronous:!1,runWhen:F?F.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function(B){this.handlers[B]&&(this.handlers[B]=null)};InterceptorManager$1.prototype.forEach=function(B){utils$f.forEach(this.handlers,function(F){F!==null&&B(F)})};var InterceptorManager_1=InterceptorManager$1,utils$e=utils$h,normalizeHeaderName$1=function(B,Q){utils$e.forEach(B,function(D,U){U!==Q&&U.toUpperCase()===Q.toUpperCase()&&(B[Q]=D,delete B[U])})},enhanceError$2=function(B,Q,F,D,U){return B.config=Q,F&&(B.code=F),B.request=D,B.response=U,B.isAxiosError=!0,B.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},B},enhanceError$1=enhanceError$2,createError$2=function(B,Q,F,D,U){var O=new Error(B);return enhanceError$1(O,Q,F,D,U)},createError$1=createError$2,settle$1=function(B,Q,F){var D=F.config.validateStatus;!F.status||!D||D(F.status)?B(F):Q(createError$1("Request failed with status code "+F.status,F.config,null,F.request,F))},utils$d=utils$h,cookies$1=utils$d.isStandardBrowserEnv()?function(){return{write:function(Q,F,D,U,O,Y){var j=[];j.push(Q+"="+encodeURIComponent(F)),utils$d.isNumber(D)&&j.push("expires="+new Date(D).toGMTString()),utils$d.isString(U)&&j.push("path="+U),utils$d.isString(O)&&j.push("domain="+O),Y===!0&&j.push("secure"),document.cookie=j.join("; ")},read:function(Q){var F=document.cookie.match(new RegExp("(^|;\\s*)("+Q+")=([^;]*)"));return F?decodeURIComponent(F[3]):null},remove:function(Q){this.write(Q,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function(B){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(B)},combineURLs$1=function(B,Q){return Q?B.replace(/\/+$/,"")+"/"+Q.replace(/^\/+/,""):B},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function(B,Q){return B&&!isAbsoluteURL(Q)?combineURLs(B,Q):Q},utils$c=utils$h,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function(B){var Q={},F,D,U;return B&&utils$c.forEach(B.split(`
`),function(Y){if(U=Y.indexOf(":"),F=utils$c.trim(Y.substr(0,U)).toLowerCase(),D=utils$c.trim(Y.substr(U+1)),F){if(Q[F]&&ignoreDuplicateOf.indexOf(F)>=0)return;F==="set-cookie"?Q[F]=(Q[F]?Q[F]:[]).concat([D]):Q[F]=Q[F]?Q[F]+", "+D:D}}),Q},utils$b=utils$h,isURLSameOrigin$1=utils$b.isStandardBrowserEnv()?function(){var B=/(msie|trident)/i.test(navigator.userAgent),Q=document.createElement("a"),F;function D(U){var O=U;return B&&(Q.setAttribute("href",O),O=Q.href),Q.setAttribute("href",O),{href:Q.href,protocol:Q.protocol?Q.protocol.replace(/:$/,""):"",host:Q.host,search:Q.search?Q.search.replace(/^\?/,""):"",hash:Q.hash?Q.hash.replace(/^#/,""):"",hostname:Q.hostname,port:Q.port,pathname:Q.pathname.charAt(0)==="/"?Q.pathname:"/"+Q.pathname}}return F=D(window.location.href),function(O){var Y=utils$b.isString(O)?D(O):O;return Y.protocol===F.protocol&&Y.host===F.host}}():function(){return function(){return!0}}(),utils$a=utils$h,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,xhr=function(B){return new Promise(function(F,D){var U=B.data,O=B.headers,Y=B.responseType;utils$a.isFormData(U)&&delete O["Content-Type"];var j=new XMLHttpRequest;if(B.auth){var re=B.auth.username||"",ge=B.auth.password?unescape(encodeURIComponent(B.auth.password)):"";O.Authorization="Basic "+btoa(re+":"+ge)}var ce=buildFullPath(B.baseURL,B.url);j.open(B.method.toUpperCase(),buildURL$1(ce,B.params,B.paramsSerializer),!0),j.timeout=B.timeout;function ue(){if(!!j){var Ce="getAllResponseHeaders"in j?parseHeaders(j.getAllResponseHeaders()):null,Ie=!Y||Y==="text"||Y==="json"?j.responseText:j.response,Fe={data:Ie,status:j.status,statusText:j.statusText,headers:Ce,config:B,request:j};settle(F,D,Fe),j=null}}if("onloadend"in j?j.onloadend=ue:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(ue)},j.onabort=function(){!j||(D(createError("Request aborted",B,"ECONNABORTED",j)),j=null)},j.onerror=function(){D(createError("Network Error",B,null,j)),j=null},j.ontimeout=function(){var Ie="timeout of "+B.timeout+"ms exceeded";B.timeoutErrorMessage&&(Ie=B.timeoutErrorMessage),D(createError(Ie,B,B.transitional&&B.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",j)),j=null},utils$a.isStandardBrowserEnv()){var de=(B.withCredentials||isURLSameOrigin(ce))&&B.xsrfCookieName?cookies.read(B.xsrfCookieName):void 0;de&&(O[B.xsrfHeaderName]=de)}"setRequestHeader"in j&&utils$a.forEach(O,function(Ie,Fe){typeof U=="undefined"&&Fe.toLowerCase()==="content-type"?delete O[Fe]:j.setRequestHeader(Fe,Ie)}),utils$a.isUndefined(B.withCredentials)||(j.withCredentials=!!B.withCredentials),Y&&Y!=="json"&&(j.responseType=B.responseType),typeof B.onDownloadProgress=="function"&&j.addEventListener("progress",B.onDownloadProgress),typeof B.onUploadProgress=="function"&&j.upload&&j.upload.addEventListener("progress",B.onUploadProgress),B.cancelToken&&B.cancelToken.promise.then(function(Ie){!j||(j.abort(),D(Ie),j=null)}),U||(U=null),j.send(U)})},utils$9=utils$h,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(w,B){!utils$9.isUndefined(w)&&utils$9.isUndefined(w["Content-Type"])&&(w["Content-Type"]=B)}function getDefaultAdapter(){var w;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(w=xhr),w}function stringifySafely(w,B,Q){if(utils$9.isString(w))try{return(B||JSON.parse)(w),utils$9.trim(w)}catch(F){if(F.name!=="SyntaxError")throw F}return(Q||JSON.stringify)(w)}var defaults$3={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter(),transformRequest:[function(B,Q){return normalizeHeaderName(Q,"Accept"),normalizeHeaderName(Q,"Content-Type"),utils$9.isFormData(B)||utils$9.isArrayBuffer(B)||utils$9.isBuffer(B)||utils$9.isStream(B)||utils$9.isFile(B)||utils$9.isBlob(B)?B:utils$9.isArrayBufferView(B)?B.buffer:utils$9.isURLSearchParams(B)?(setContentTypeIfUnset(Q,"application/x-www-form-urlencoded;charset=utf-8"),B.toString()):utils$9.isObject(B)||Q&&Q["Content-Type"]==="application/json"?(setContentTypeIfUnset(Q,"application/json"),stringifySafely(B)):B}],transformResponse:[function(B){var Q=this.transitional,F=Q&&Q.silentJSONParsing,D=Q&&Q.forcedJSONParsing,U=!F&&this.responseType==="json";if(U||D&&utils$9.isString(B)&&B.length)try{return JSON.parse(B)}catch(O){if(U)throw O.name==="SyntaxError"?enhanceError(O,this,"E_JSON_PARSE"):O}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(B){return B>=200&&B<300}};defaults$3.headers={common:{Accept:"application/json, text/plain, */*"}};utils$9.forEach(["delete","get","head"],function(B){defaults$3.headers[B]={}});utils$9.forEach(["post","put","patch"],function(B){defaults$3.headers[B]=utils$9.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$8=utils$h,defaults$2=defaults_1,transformData$1=function(B,Q,F){var D=this||defaults$2;return utils$8.forEach(F,function(O){B=O.call(D,B,Q)}),B},isCancel$1=function(B){return!!(B&&B.__CANCEL__)},utils$7=utils$h,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1;function throwIfCancellationRequested(w){w.cancelToken&&w.cancelToken.throwIfRequested()}var dispatchRequest$1=function(B){throwIfCancellationRequested(B),B.headers=B.headers||{},B.data=transformData.call(B,B.data,B.headers,B.transformRequest),B.headers=utils$7.merge(B.headers.common||{},B.headers[B.method]||{},B.headers),utils$7.forEach(["delete","get","head","post","put","patch","common"],function(D){delete B.headers[D]});var Q=B.adapter||defaults$1.adapter;return Q(B).then(function(D){return throwIfCancellationRequested(B),D.data=transformData.call(B,D.data,D.headers,B.transformResponse),D},function(D){return isCancel(D)||(throwIfCancellationRequested(B),D&&D.response&&(D.response.data=transformData.call(B,D.response.data,D.response.headers,B.transformResponse))),Promise.reject(D)})},utils$6=utils$h,mergeConfig$2=function(B,Q){Q=Q||{};var F={},D=["url","method","data"],U=["headers","auth","proxy","params"],O=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],Y=["validateStatus"];function j(ue,de){return utils$6.isPlainObject(ue)&&utils$6.isPlainObject(de)?utils$6.merge(ue,de):utils$6.isPlainObject(de)?utils$6.merge({},de):utils$6.isArray(de)?de.slice():de}function re(ue){utils$6.isUndefined(Q[ue])?utils$6.isUndefined(B[ue])||(F[ue]=j(void 0,B[ue])):F[ue]=j(B[ue],Q[ue])}utils$6.forEach(D,function(de){utils$6.isUndefined(Q[de])||(F[de]=j(void 0,Q[de]))}),utils$6.forEach(U,re),utils$6.forEach(O,function(de){utils$6.isUndefined(Q[de])?utils$6.isUndefined(B[de])||(F[de]=j(void 0,B[de])):F[de]=j(void 0,Q[de])}),utils$6.forEach(Y,function(de){de in Q?F[de]=j(B[de],Q[de]):de in B&&(F[de]=j(void 0,B[de]))});var ge=D.concat(U).concat(O).concat(Y),ce=Object.keys(B).concat(Object.keys(Q)).filter(function(de){return ge.indexOf(de)===-1});return utils$6.forEach(ce,re),F};const name="axios",version="0.21.4",description="Promise based HTTP client for the browser and node.js",main="index.js",scripts={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository={type:"git",url:"https://github.com/axios/axios.git"},keywords=["xhr","http","ajax","promise","node"],author="Matt Zabriskie",license="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0={name,version,description,main,scripts,repository,keywords,author,license,bugs,homepage,devDependencies,browser,jsdelivr,unpkg,typings,dependencies,bundlesize},pkg=require$$0,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(w,B){validators$1[w]=function(F){return typeof F===w||"a"+(B<1?"n ":" ")+w}});var deprecatedWarnings={},currentVerArr=pkg.version.split(".");function isOlderVersion(w,B){for(var Q=B?B.split("."):currentVerArr,F=w.split("."),D=0;D<3;D++){if(Q[D]>F[D])return!0;if(Q[D]<F[D])return!1}return!1}validators$1.transitional=function(B,Q,F){var D=Q&&isOlderVersion(Q);function U(O,Y){return"[Axios v"+pkg.version+"] Transitional option '"+O+"'"+Y+(F?". "+F:"")}return function(O,Y,j){if(B===!1)throw new Error(U(Y," has been removed in "+Q));return D&&!deprecatedWarnings[Y]&&(deprecatedWarnings[Y]=!0,console.warn(U(Y," has been deprecated since v"+Q+" and will be removed in the near future"))),B?B(O,Y,j):!0}};function assertOptions(w,B,Q){if(typeof w!="object")throw new TypeError("options must be an object");for(var F=Object.keys(w),D=F.length;D-- >0;){var U=F[D],O=B[U];if(O){var Y=w[U],j=Y===void 0||O(Y,U,w);if(j!==!0)throw new TypeError("option "+U+" must be "+j);continue}if(Q!==!0)throw Error("Unknown option "+U)}}var validator$1={isOlderVersion,assertOptions,validators:validators$1},utils$5=utils$h,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(w){this.defaults=w,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function(B){typeof B=="string"?(B=arguments[1]||{},B.url=arguments[0]):B=B||{},B=mergeConfig$1(this.defaults,B),B.method?B.method=B.method.toLowerCase():this.defaults.method?B.method=this.defaults.method.toLowerCase():B.method="get";var Q=B.transitional;Q!==void 0&&validator.assertOptions(Q,{silentJSONParsing:validators.transitional(validators.boolean,"1.0.0"),forcedJSONParsing:validators.transitional(validators.boolean,"1.0.0"),clarifyTimeoutError:validators.transitional(validators.boolean,"1.0.0")},!1);var F=[],D=!0;this.interceptors.request.forEach(function(ue){typeof ue.runWhen=="function"&&ue.runWhen(B)===!1||(D=D&&ue.synchronous,F.unshift(ue.fulfilled,ue.rejected))});var U=[];this.interceptors.response.forEach(function(ue){U.push(ue.fulfilled,ue.rejected)});var O;if(!D){var Y=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(Y,F),Y=Y.concat(U),O=Promise.resolve(B);Y.length;)O=O.then(Y.shift(),Y.shift());return O}for(var j=B;F.length;){var re=F.shift(),ge=F.shift();try{j=re(j)}catch(ce){ge(ce);break}}try{O=dispatchRequest(j)}catch(ce){return Promise.reject(ce)}for(;U.length;)O=O.then(U.shift(),U.shift());return O};Axios$1.prototype.getUri=function(B){return B=mergeConfig$1(this.defaults,B),buildURL(B.url,B.params,B.paramsSerializer).replace(/^\?/,"")};utils$5.forEach(["delete","get","head","options"],function(B){Axios$1.prototype[B]=function(Q,F){return this.request(mergeConfig$1(F||{},{method:B,url:Q,data:(F||{}).data}))}});utils$5.forEach(["post","put","patch"],function(B){Axios$1.prototype[B]=function(Q,F,D){return this.request(mergeConfig$1(D||{},{method:B,url:Q,data:F}))}});var Axios_1=Axios$1;function Cancel$1(w){this.message=w}Cancel$1.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$1.prototype.__CANCEL__=!0;var Cancel_1=Cancel$1,Cancel=Cancel_1;function CancelToken(w){if(typeof w!="function")throw new TypeError("executor must be a function.");var B;this.promise=new Promise(function(D){B=D});var Q=this;w(function(D){Q.reason||(Q.reason=new Cancel(D),B(Q.reason))})}CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken.source=function(){var B,Q=new CancelToken(function(D){B=D});return{token:Q,cancel:B}};var CancelToken_1=CancelToken,spread=function(B){return function(F){return B.apply(null,F)}},isAxiosError=function(B){return typeof B=="object"&&B.isAxiosError===!0},utils$4=utils$h,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(w){var B=new Axios(w),Q=bind(Axios.prototype.request,B);return utils$4.extend(Q,Axios.prototype,B),utils$4.extend(Q,B),Q}var axios$2=createInstance(defaults);axios$2.Axios=Axios;axios$2.create=function(B){return createInstance(mergeConfig(axios$2.defaults,B))};axios$2.Cancel=Cancel_1;axios$2.CancelToken=CancelToken_1;axios$2.isCancel=isCancel$1;axios$2.all=function(B){return Promise.all(B)};axios$2.spread=spread;axios$2.isAxiosError=isAxiosError;axios$3.exports=axios$2;axios$3.exports.default=axios$2;var axios$1=axios$3.exports,_objectWithoutProperties=objectWithoutProperties.exports,_toConsumableArray=toConsumableArray.exports,_typeof$1=_typeof$2.exports,_defineProperty=defineProperty.exports,_classCallCheck=classCallCheck.exports,_createClass=createClass.exports,_regeneratorRuntime=regenerator,_asyncToGenerator=asyncToGenerator.exports,axios=axios$1;function _interopDefaultLegacy(w){return w&&typeof w=="object"&&"default"in w?w:{default:w}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof$1),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios),Storage=function(){function w(B){_classCallCheck__default.default(this,w),this.commerce=B}return _createClass__default.default(w,[{key:"set",value:function(B,Q,F){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;var D,U="";if(D=this.commerce.options.config&&this.commerce.options.config.cookie_path!==void 0?this.commerce.options.config.cookie_path:"/",F){var O=new Date;O.setTime(O.getTime()+24*F*60*60*1e3),U="; expires="+O.toUTCString()}return document.cookie=B+"="+Q+U+"; path="+D}},{key:"get",value:function(B){if(typeof document=="undefined"||this.commerce.options.disableStorage)return null;B+="=";for(var Q=0,F=Array.from(document.cookie.split(";"));Q<F.length;Q++){for(var D=F[Q];D.charAt(0)===" ";)D=D.substring(1,D.length);if(D.indexOf(B)===0)return D.substring(B.length,D.length)}return null}},{key:"remove",value:function(B){return this.set(B,"",-1)}}]),w}();function ownKeys(w,B){var Q=Object.keys(w);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(w);B&&(F=F.filter(function(D){return Object.getOwnPropertyDescriptor(w,D).enumerable})),Q.push.apply(Q,F)}return Q}function _objectSpread(w){for(var B=1;B<arguments.length;B++){var Q=arguments[B]!=null?arguments[B]:{};B%2?ownKeys(Q,!0).forEach(function(F){_defineProperty__default.default(w,F,Q[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(Q)):ownKeys(Q).forEach(function(F){Object.defineProperty(w,F,Object.getOwnPropertyDescriptor(Q,F))})}return w}var Cart=function(){function w(Q){_classCallCheck__default.default(this,w),this.commerce=Q,this.cartId=null}var B;return _createClass__default.default(w,[{key:"refresh",value:function(){var Q=this;return this.commerce.request("carts").then(function(F){var D=F.id;return Q.commerce.storage.set("commercejs_cart_id",D,Q.commerce.options.cartLifetime),Q.cartId=D,F})}},{key:"id",value:function(){if(this.cartId!==null)return this.cartId;var Q=this.commerce.storage.get("commercejs_cart_id");return typeof Q=="string"&&Q.length?Q:null}},{key:"request",value:(B=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function Q(){var F,D,U,O,Y,j=this,re=arguments;return _regeneratorRuntime__default.default.wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:if(F=re.length>0&&re[0]!==void 0?re[0]:"",D=re.length>1&&re[1]!==void 0?re[1]:"get",U=re.length>2&&re[2]!==void 0?re[2]:null,O=re.length>3&&re[3]!==void 0&&re[3],Y=typeof F=="string"&&F.length?"/".concat(F):"",this.id()){ge.next=8;break}return ge.next=8,this.refresh();case 8:return ge.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(Y),D,U,O).catch(function(ce){if(ce.statusCode&&ce.statusCode===404)return j.refresh().then(function(){return j.commerce.request("carts/".concat(j.id()).concat(Y),D,U,O)});throw ce}));case 9:case"end":return ge.stop()}},Q,this)})),function(){return B.apply(this,arguments)})},{key:"add",value:function(Q){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,U={};if(typeof D=="string"&&D.startsWith("vrnt"))U.variant_id=D;else if(D&&_typeof__default.default(D)==="object"){var O=Object.keys(D).every(function(re){return re.startsWith("vgrp")}),Y=Object.values(D).every(function(re){return re.startsWith("optn")});if(!O||!Y)throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");U.options=D}else if(D)throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");var j=_objectSpread({id:_typeof__default.default(Q)==="object"?Q.id:Q,quantity:F},U);return this.request("","post",j)}},{key:"retrieve",value:function(){var Q=this,F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return F&&(this.cartId=F),this.request().then(function(D){return Q.cartId=D&&D.id||null,D})}},{key:"checkQuantity",value:function(Q,F){return this.commerce.request("products/".concat(Q)).then(function(D){return F<=D.quantity})}},{key:"remove",value:function(Q){return this.request("items/".concat(Q),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(Q,F){return this.request("items/".concat(Q),"put",F)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),w}(),Categories=function(){function w(B){_classCallCheck__default.default(this,w),this.commerce=B}return _createClass__default.default(w,[{key:"list",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return typeof B=="function"?this.commerce.request("categories"):this.commerce.request("categories","get",B)}},{key:"retrieve",value:function(B){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("categories/".concat(B),"get",Q)}}]),w}(),Checkout=function(){function Checkout(w){_classCallCheck__default.default(this,Checkout),this.commerce=w}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then(function(data){return eval(data.sift_js)})}},{key:"generateToken",value:function(w,B){return this.commerce.request("checkouts/".concat(w),"get",B)}},{key:"generateTokenFrom",value:function(w,B){if(!["product_id","cart","permalink"].includes(w))throw new Error('Cannot generate a token with unknown "'.concat(w,'" type'));return this.generateToken(B,{type:w})}},{key:"capture",value:function(w,B){var Q=this;return this.commerce.request("checkouts/".concat(w),"post",B).then(function(F){return Q.commerce.cart.refresh(),F})}},{key:"receipt",value:function(w){return this.commerce.request("checkouts/".concat(w,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(w,B){return this.commerce.request("checkouts/".concat(w,"/check/pay_what_you_want"),"get",B)}},{key:"fields",value:function(w){return this.commerce.request("checkouts/".concat(w,"/fields"))}},{key:"setTaxZone",value:function(w,B){return this.commerce.request("checkouts/".concat(w,"/helper/set_tax_zone"),"get",B)}},{key:"getLocationFromIP",value:function(w){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",Q=B&&B.length?"?ip_address=".concat(B):"";return this.commerce.request("checkouts/".concat(w,"/helper/location_from_ip").concat(Q))}},{key:"isFree",value:function(w){return this.commerce.request("checkouts/".concat(w,"/check/is_free"))}},{key:"checkVariant",value:function(w,B,Q){return this.commerce.request("checkouts/".concat(w,"/check/").concat(B,"/variant"),"get",Q)}},{key:"checkDiscount",value:function(w,B){return this.commerce.request("checkouts/".concat(w,"/check/discount"),"get",B)}},{key:"checkShippingOption",value:function(w,B){return this.commerce.request("checkouts/".concat(w,"/check/shipping"),"get",B)}},{key:"getShippingOptions",value:function(w,B){return this.commerce.request("checkouts/".concat(w,"/helper/shipping_options"),"get",B)}},{key:"checkQuantity",value:function(w,B,Q){return this.commerce.request("checkouts/".concat(w,"/check/").concat(B,"/quantity"),"get",Q)}},{key:"helperValidation",value:function(w){return this.commerce.request("checkouts/".concat(w,"/helper/validation"))}},{key:"getLive",value:function(w){return this.commerce.request("checkouts/".concat(w,"/live"))}},{key:"getToken",value:function(w){return this.commerce.request("checkouts/tokens/".concat(w))}},{key:"checkGiftcard",value:function(w,B){return this.commerce.request("checkouts/".concat(w,"/check/giftcard"),"get",B)}}]),Checkout}();function ownKeys$1(w,B){var Q=Object.keys(w);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(w);B&&(F=F.filter(function(D){return Object.getOwnPropertyDescriptor(w,D).enumerable})),Q.push.apply(Q,F)}return Q}function _objectSpread$1(w){for(var B=1;B<arguments.length;B++){var Q=arguments[B]!=null?arguments[B]:{};B%2?ownKeys$1(Q,!0).forEach(function(F){_defineProperty__default.default(w,F,Q[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(Q)):ownKeys$1(Q).forEach(function(F){Object.defineProperty(w,F,Object.getOwnPropertyDescriptor(Q,F))})}return w}var Customer=function(){function w(B){_classCallCheck__default.default(this,w),this.commerce=B,this.data={}}return _createClass__default.default(w,[{key:"login",value:function(B,Q){return this.commerce.request("customers/email-token","post",{email:B,base_url:Q})}},{key:"getToken",value:function(B){var Q=this,F=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:B}).then(function(D){return F&&(D.customer_id||D.jwt)&&(Q.data={id:D.customer_id||null,token:D.jwt||null},window.localStorage.setItem("commercejs_customer_id",Q.data.id),window.localStorage.setItem("commercejs_customer_token",Q.data.token)),D})}},{key:"update",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(Q,F),this._request("customers/".concat(Q||this.id()),"PUT",B,{},F)}},{key:"getOrders",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this._assertArgsProvided(B,Q);var D=_objectSpread$1({sortBy:"created_at",sortDirection:"desc"},F);return this._request("customers/".concat(B||this.id(),"/orders"),"get",D,{},Q)}},{key:"getOrder",value:function(B){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return this._assertArgsProvided(Q,F),this._request("customers/".concat(Q||this.id(),"/orders/").concat(B),"get",{},{},F)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return this.id()!==null&&this.token()!==null}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(B){if(this.data[B]&&this.data[B].length)return this.data[B];var Q=window.localStorage.getItem("commercejs_customer_".concat(B));return typeof Q=="string"&&Q.length?Q:null}},{key:"_request",value:function(B){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,D=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},U=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,O=U||this.token();return this.commerce.request(B,Q,F,_objectSpread$1({"X-Authorization":void 0,Authorization:"Bearer ".concat(O)},D))}},{key:"_assertArgsProvided",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(B===null&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(Q===null&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),w}(),Merchants=function(){function w(B){_classCallCheck__default.default(this,w),this.commerce=B}return _createClass__default.default(w,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),w}(),Products=function(){function w(B){_classCallCheck__default.default(this,w),this.commerce=B}return _createClass__default.default(w,[{key:"list",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.commerce.request("products","get",B)}},{key:"retrieve",value:function(B){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.commerce.request("products/".concat(B),"get",Q)}},{key:"getVariants",value:function(B){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.commerce.request("products/".concat(B,"/variants"),"get",Q)}},{key:"getVariant",value:function(B,Q){return this.commerce.request("products/".concat(B,"/variants/").concat(Q),"get")}}]),w}(),Services=function(){function w(B){_classCallCheck__default.default(this,w),this.commerce=B}return _createClass__default.default(w,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(B){return this.commerce.request("services/locale/".concat(B,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(B,Q){return this.commerce.request("services/locale/".concat(B,"/countries/").concat(Q,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(B){return this.commerce.request("services/locale/".concat(B,"/subdivisions"))}}]),w}(),Features={Cart,Categories,Checkout,Customer,Merchants,Products,Services},consoleHelper=function(){var w,B,Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"black",F=arguments.length>1?arguments[1]:void 0,D=arguments.length>2?arguments[2]:void 0,U=arguments.length>3?arguments[3]:void 0,O=!1;switch(Q){case"success":Q="#488f5a",w="\u2705   ";break;case"info":Q="DodgerBlue",w="";break;case"error":Q="rgba(244, 67, 54, 1)",U.error.type==="validation"||U.error.type==="unprocessable_entity"?(w="\u{1F6AB} Validation/missing fields",F=""):w="\u274C HTTP ERROR ",O=!0;break;case"warning":Q="rgba(208, 154, 35, 1)",w="\u26A0\uFE0F  "}return O===!0?(console.log("%c"+w+F,"color:"+Q+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),_typeof__default.default(U.error.errors)==="object"?(B=U.error.errors,void Object.keys(B).forEach(function(Y,j){Object.values(B[Y]).forEach(function(re){console.log("%c"+Y+": %c"+re,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")})})):console.log("%c"+U.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")):_typeof__default.default(Q)==="object"?(console.log("%c"+F,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(Q)):(console.log("%c"+w+F,"color:"+Q+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),void(D&&console.log("%c"+D,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")))},debuggerOnNotice=function(){typeof window!="undefined"&&(console.log(`%c\r
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
`,"text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px"))};function ownKeys$2(w,B){var Q=Object.keys(w);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(w);B&&(F=F.filter(function(D){return Object.getOwnPropertyDescriptor(w,D).enumerable})),Q.push.apply(Q,F)}return Q}function _objectSpread$2(w){for(var B=1;B<arguments.length;B++){var Q=arguments[B]!=null?arguments[B]:{};B%2?ownKeys$2(Q,!0).forEach(function(F){_defineProperty__default.default(w,F,Q[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(Q)):ownKeys$2(Q).forEach(function(F){Object.defineProperty(w,F,Object.getOwnPropertyDescriptor(Q,F))})}return w}var defaultEventCallback=function(w){var B=new CustomEvent("Commercejs.".concat(w),{bubbles:!1,cancelable:!1});return window.dispatchEvent(B)},Commerce=function(){function w(B){var Q=arguments.length>1&&arguments[1]!==void 0&&arguments[1],F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(_classCallCheck__default.default(this,w),this.options=_objectSpread$2(_objectSpread$2({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback,disableStorage:!1,cartLifetime:30,allowSecretKey:!1},F),{},{apiKey:B,debug:Q}),typeof B!="string"||B.length===0)throw new Error("\u26A0\uFE0F Invalid public key given to Commerce.js client");if(!F.allowSecretKey&&B.toLowerCase().substring(0,3)==="sk_")throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");if(this.options.cartLifetime<=0||this.options.cartLifetime>30)throw new Error("cartLifetime configuration option must be between 1 and 30 days");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),Q&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(w,[{key:"error",value:function(B){if(this.consoleHelper&&this.options.debug){var Q=B.response,F="[".concat(Q.status,"] Type: ").concat(Q.statusText),D=typeof Q.data=="string"?Q.data:Q.statusText;return this.consoleHelper("error",F,D,Q.data)}}},{key:"request",value:function(B){var Q=this,F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"get",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},O=arguments.length>4&&arguments[4]!==void 0&&arguments[4],Y={"X-Authorization":this.options.apiKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},j=F==="get"?D:null,re=F==="get"?null:D,ge=this.options.timeoutMs||6e4,ce=this.options.axiosConfig||{},ue=this.options.url;ue.substring(ue.length-1)!=="/"&&(ue+="/");var de=axios__default.default(_objectSpread$2(_objectSpread$2({url:B,method:F,baseURL:"".concat(ue).concat(this.options.version,"/"),params:j,data:re,timeout:ge},ce),{},{headers:_objectSpread$2(_objectSpread$2(_objectSpread$2({},Y),ce.headers),U)}));if(O)return de;var Ce=this.options.eventCallback;return de.then(function(Ie){if(Q.consoleHelper&&Q.options.debug&&_typeof__default.default(Ie.data._console)==="object"&&Q.consoleHelper.apply(Q,_toConsumableArray__default.default(Ie.data._console)),_typeof__default.default(Ie.data)!=="object"||Array.isArray(Ie.data))return Ie.data;var Fe=Ie.data,Pe=Fe._event,Ne=_objectWithoutProperties__default.default(Fe,["_event"]);return typeof Pe=="string"&&typeof Ce=="function"&&Ce(Pe),Ne}).catch(function(Ie){throw Q.error(Ie),Ie.response?{message:"Unsuccessful response (".concat(Ie.response.status,": ").concat(Ie.response.statusText,") received"),statusCode:Ie.response.status,statusText:Ie.response.statusText,data:Ie.response.data,originalError:Ie}:Ie})}}]),w}(),lib=Commerce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=w=>B=>typeof B=="function"?((Q,F)=>(customElements.define(Q,F),F))(w,B):((Q,F)=>{const{kind:D,elements:U}=F;return{kind:D,elements:U,finisher(O){customElements.define(Q,O)}}})(w,B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$3=(w,B)=>B.kind==="method"&&B.descriptor&&!("value"in B.descriptor)?{...B,finisher(Q){Q.createProperty(B.key,w)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:B.key,initializer(){typeof B.initializer=="function"&&(this[B.key]=B.initializer.call(this))},finisher(Q){Q.createProperty(B.key,w)}};function e$3(w){return(B,Q)=>Q!==void 0?((F,D,U)=>{D.constructor.createProperty(U,F)})(w,B,Q):i$3(w,B)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;((n$4=window.HTMLSlotElement)===null||n$4===void 0?void 0:n$4.prototype.assignedElements)!=null;var configurable=!0;function bound(w,B,Q){if(typeof(Q==null?void 0:Q.value)!="function")throw new TypeError(`Only methods can be decorated with @bound. <${B!=null?B:w.name}> is not a method!`);return{configurable,get(){const F=Q.value.bind(this);return Object.defineProperty(this,B,{value:F,configurable,writable:!0}),F}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=window,e$2=t$1.ShadowRoot&&(t$1.ShadyCSS===void 0||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(B,Q,F){if(this._$cssResult$=!0,F!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=B,this.t=Q}get styleSheet(){let B=this.o;const Q=this.t;if(e$2&&B===void 0){const F=Q!==void 0&&Q.length===1;F&&(B=n$3.get(Q)),B===void 0&&((this.o=B=new CSSStyleSheet).replaceSync(this.cssText),F&&n$3.set(Q,B))}return B}toString(){return this.cssText}}const r$2=w=>new o$3(typeof w=="string"?w:w+"",void 0,s$3),i$2=(w,...B)=>{const Q=w.length===1?w[0]:B.reduce((F,D,U)=>F+(O=>{if(O._$cssResult$===!0)return O.cssText;if(typeof O=="number")return O;throw Error("Value passed to 'css' function must be a 'css' function result: "+O+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(D)+w[U+1],w[0]);return new o$3(Q,w,s$3)},S$1=(w,B)=>{e$2?w.adoptedStyleSheets=B.map(Q=>Q instanceof CSSStyleSheet?Q:Q.styleSheet):B.forEach(Q=>{const F=document.createElement("style"),D=t$1.litNonce;D!==void 0&&F.setAttribute("nonce",D),F.textContent=Q.cssText,w.appendChild(F)})},c$2=e$2?w=>w:w=>w instanceof CSSStyleSheet?(B=>{let Q="";for(const F of B.cssRules)Q+=F.cssText;return r$2(Q)})(w):w;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(w,B){switch(B){case Boolean:w=w?h$1:null;break;case Object:case Array:w=w==null?w:JSON.stringify(w)}return w},fromAttribute(w,B){let Q=w;switch(B){case Boolean:Q=w!==null;break;case Number:Q=w===null?null:Number(w);break;case Object:case Array:try{Q=JSON.parse(w)}catch{Q=null}}return Q}},a$1=(w,B)=>B!==w&&(B==B||w==w),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(B){var Q;this.finalize(),((Q=this.h)!==null&&Q!==void 0?Q:this.h=[]).push(B)}static get observedAttributes(){this.finalize();const B=[];return this.elementProperties.forEach((Q,F)=>{const D=this._$Ep(F,Q);D!==void 0&&(this._$Ev.set(D,F),B.push(D))}),B}static createProperty(B,Q=l$3){if(Q.state&&(Q.attribute=!1),this.finalize(),this.elementProperties.set(B,Q),!Q.noAccessor&&!this.prototype.hasOwnProperty(B)){const F=typeof B=="symbol"?Symbol():"__"+B,D=this.getPropertyDescriptor(B,F,Q);D!==void 0&&Object.defineProperty(this.prototype,B,D)}}static getPropertyDescriptor(B,Q,F){return{get(){return this[Q]},set(D){const U=this[B];this[Q]=D,this.requestUpdate(B,U,F)},configurable:!0,enumerable:!0}}static getPropertyOptions(B){return this.elementProperties.get(B)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const B=Object.getPrototypeOf(this);if(B.finalize(),B.h!==void 0&&(this.h=[...B.h]),this.elementProperties=new Map(B.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const Q=this.properties,F=[...Object.getOwnPropertyNames(Q),...Object.getOwnPropertySymbols(Q)];for(const D of F)this.createProperty(D,Q[D])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(B){const Q=[];if(Array.isArray(B)){const F=new Set(B.flat(1/0).reverse());for(const D of F)Q.unshift(c$2(D))}else B!==void 0&&Q.push(c$2(B));return Q}static _$Ep(B,Q){const F=Q.attribute;return F===!1?void 0:typeof F=="string"?F:typeof B=="string"?B.toLowerCase():void 0}u(){var B;this._$E_=new Promise(Q=>this.enableUpdating=Q),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(B=this.constructor.h)===null||B===void 0||B.forEach(Q=>Q(this))}addController(B){var Q,F;((Q=this._$ES)!==null&&Q!==void 0?Q:this._$ES=[]).push(B),this.renderRoot!==void 0&&this.isConnected&&((F=B.hostConnected)===null||F===void 0||F.call(B))}removeController(B){var Q;(Q=this._$ES)===null||Q===void 0||Q.splice(this._$ES.indexOf(B)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((B,Q)=>{this.hasOwnProperty(Q)&&(this._$Ei.set(Q,this[Q]),delete this[Q])})}createRenderRoot(){var B;const Q=(B=this.shadowRoot)!==null&&B!==void 0?B:this.attachShadow(this.constructor.shadowRootOptions);return S$1(Q,this.constructor.elementStyles),Q}connectedCallback(){var B;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(B=this._$ES)===null||B===void 0||B.forEach(Q=>{var F;return(F=Q.hostConnected)===null||F===void 0?void 0:F.call(Q)})}enableUpdating(B){}disconnectedCallback(){var B;(B=this._$ES)===null||B===void 0||B.forEach(Q=>{var F;return(F=Q.hostDisconnected)===null||F===void 0?void 0:F.call(Q)})}attributeChangedCallback(B,Q,F){this._$AK(B,F)}_$EO(B,Q,F=l$3){var D;const U=this.constructor._$Ep(B,F);if(U!==void 0&&F.reflect===!0){const O=(((D=F.converter)===null||D===void 0?void 0:D.toAttribute)!==void 0?F.converter:n$2).toAttribute(Q,F.type);this._$El=B,O==null?this.removeAttribute(U):this.setAttribute(U,O),this._$El=null}}_$AK(B,Q){var F;const D=this.constructor,U=D._$Ev.get(B);if(U!==void 0&&this._$El!==U){const O=D.getPropertyOptions(U),Y=typeof O.converter=="function"?{fromAttribute:O.converter}:((F=O.converter)===null||F===void 0?void 0:F.fromAttribute)!==void 0?O.converter:n$2;this._$El=U,this[U]=Y.fromAttribute(Q,O.type),this._$El=null}}requestUpdate(B,Q,F){let D=!0;B!==void 0&&(((F=F||this.constructor.getPropertyOptions(B)).hasChanged||a$1)(this[B],Q)?(this._$AL.has(B)||this._$AL.set(B,Q),F.reflect===!0&&this._$El!==B&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(B,F))):D=!1),!this.isUpdatePending&&D&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(Q){Promise.reject(Q)}const B=this.scheduleUpdate();return B!=null&&await B,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var B;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((D,U)=>this[U]=D),this._$Ei=void 0);let Q=!1;const F=this._$AL;try{Q=this.shouldUpdate(F),Q?(this.willUpdate(F),(B=this._$ES)===null||B===void 0||B.forEach(D=>{var U;return(U=D.hostUpdate)===null||U===void 0?void 0:U.call(D)}),this.update(F)):this._$Ek()}catch(D){throw Q=!1,this._$Ek(),D}Q&&this._$AE(F)}willUpdate(B){}_$AE(B){var Q;(Q=this._$ES)===null||Q===void 0||Q.forEach(F=>{var D;return(D=F.hostUpdated)===null||D===void 0?void 0:D.call(F)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(B)),this.updated(B)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(B){return!0}update(B){this._$EC!==void 0&&(this._$EC.forEach((Q,F)=>this._$EO(F,this[F],Q)),this._$EC=void 0),this._$Ek()}updated(B){}firstUpdated(B){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},o$2==null||o$2({ReactiveElement:d$1}),((s$2=e$1.reactiveElementVersions)!==null&&s$2!==void 0?s$2:e$1.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t;const i$1=window,s$1=i$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:w=>w}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$2=`<${n$1}>`,h=document,r=(w="")=>h.createComment(w),d=w=>w===null||typeof w!="object"&&typeof w!="function",u=Array.isArray,c$1=w=>u(w)||typeof(w==null?void 0:w[Symbol.iterator])=="function",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=w=>(B,...Q)=>({_$litType$:w,strings:B,values:Q}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(w,B)=>{const Q=w.length-1,F=[];let D,U=B===2?"<svg>":"",O=v;for(let j=0;j<Q;j++){const re=w[j];let ge,ce,ue=-1,de=0;for(;de<re.length&&(O.lastIndex=de,ce=O.exec(re),ce!==null);)de=O.lastIndex,O===v?ce[1]==="!--"?O=a:ce[1]!==void 0?O=f:ce[2]!==void 0?($.test(ce[2])&&(D=RegExp("</"+ce[2],"g")),O=_):ce[3]!==void 0&&(O=_):O===_?ce[0]===">"?(O=D!=null?D:v,ue=-1):ce[1]===void 0?ue=-2:(ue=O.lastIndex-ce[2].length,ge=ce[1],O=ce[3]===void 0?_:ce[3]==='"'?p:m):O===p||O===m?O=_:O===a||O===f?O=v:(O=_,D=void 0);const Ce=O===_&&w[j+1].startsWith("/>")?" ":"";U+=O===v?re+l$2:ue>=0?(F.push(ge),re.slice(0,ue)+"$lit$"+re.slice(ue)+o$1+Ce):re+o$1+(ue===-2?(F.push(void 0),j):Ce)}const Y=U+(w[Q]||"<?>")+(B===2?"</svg>":"");if(!Array.isArray(w)||!w.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e!==void 0?e.createHTML(Y):Y,F]};class C{constructor({strings:B,_$litType$:Q},F){let D;this.parts=[];let U=0,O=0;const Y=B.length-1,j=this.parts,[re,ge]=E(B,Q);if(this.el=C.createElement(re,F),A.currentNode=this.el.content,Q===2){const ce=this.el.content,ue=ce.firstChild;ue.remove(),ce.append(...ue.childNodes)}for(;(D=A.nextNode())!==null&&j.length<Y;){if(D.nodeType===1){if(D.hasAttributes()){const ce=[];for(const ue of D.getAttributeNames())if(ue.endsWith("$lit$")||ue.startsWith(o$1)){const de=ge[O++];if(ce.push(ue),de!==void 0){const Ce=D.getAttribute(de.toLowerCase()+"$lit$").split(o$1),Ie=/([.?@])?(.*)/.exec(de);j.push({type:1,index:U,name:Ie[2],strings:Ce,ctor:Ie[1]==="."?M:Ie[1]==="?"?k:Ie[1]==="@"?H:S})}else j.push({type:6,index:U})}for(const ue of ce)D.removeAttribute(ue)}if($.test(D.tagName)){const ce=D.textContent.split(o$1),ue=ce.length-1;if(ue>0){D.textContent=s$1?s$1.emptyScript:"";for(let de=0;de<ue;de++)D.append(ce[de],r()),A.nextNode(),j.push({type:2,index:++U});D.append(ce[ue],r())}}}else if(D.nodeType===8)if(D.data===n$1)j.push({type:2,index:U});else{let ce=-1;for(;(ce=D.data.indexOf(o$1,ce+1))!==-1;)j.push({type:7,index:U}),ce+=o$1.length-1}U++}}static createElement(B,Q){const F=h.createElement("template");return F.innerHTML=B,F}}function P(w,B,Q=w,F){var D,U,O,Y;if(B===x)return B;let j=F!==void 0?(D=Q._$Co)===null||D===void 0?void 0:D[F]:Q._$Cl;const re=d(B)?void 0:B._$litDirective$;return(j==null?void 0:j.constructor)!==re&&((U=j==null?void 0:j._$AO)===null||U===void 0||U.call(j,!1),re===void 0?j=void 0:(j=new re(w),j._$AT(w,Q,F)),F!==void 0?((O=(Y=Q)._$Co)!==null&&O!==void 0?O:Y._$Co=[])[F]=j:Q._$Cl=j),j!==void 0&&(B=P(w,j._$AS(w,B.values),j,F)),B}class V{constructor(B,Q){this.u=[],this._$AN=void 0,this._$AD=B,this._$AM=Q}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(B){var Q;const{el:{content:F},parts:D}=this._$AD,U=((Q=B==null?void 0:B.creationScope)!==null&&Q!==void 0?Q:h).importNode(F,!0);A.currentNode=U;let O=A.nextNode(),Y=0,j=0,re=D[0];for(;re!==void 0;){if(Y===re.index){let ge;re.type===2?ge=new N(O,O.nextSibling,this,B):re.type===1?ge=new re.ctor(O,re.name,re.strings,this,B):re.type===6&&(ge=new I(O,this,B)),this.u.push(ge),re=D[++j]}Y!==(re==null?void 0:re.index)&&(O=A.nextNode(),Y++)}return U}p(B){let Q=0;for(const F of this.u)F!==void 0&&(F.strings!==void 0?(F._$AI(B,F,Q),Q+=F.strings.length-2):F._$AI(B[Q])),Q++}}class N{constructor(B,Q,F,D){var U;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=B,this._$AB=Q,this._$AM=F,this.options=D,this._$Cm=(U=D==null?void 0:D.isConnected)===null||U===void 0||U}get _$AU(){var B,Q;return(Q=(B=this._$AM)===null||B===void 0?void 0:B._$AU)!==null&&Q!==void 0?Q:this._$Cm}get parentNode(){let B=this._$AA.parentNode;const Q=this._$AM;return Q!==void 0&&B.nodeType===11&&(B=Q.parentNode),B}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(B,Q=this){B=P(this,B,Q),d(B)?B===b||B==null||B===""?(this._$AH!==b&&this._$AR(),this._$AH=b):B!==this._$AH&&B!==x&&this.g(B):B._$litType$!==void 0?this.$(B):B.nodeType!==void 0?this.T(B):c$1(B)?this.k(B):this.g(B)}O(B,Q=this._$AB){return this._$AA.parentNode.insertBefore(B,Q)}T(B){this._$AH!==B&&(this._$AR(),this._$AH=this.O(B))}g(B){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=B:this.T(h.createTextNode(B)),this._$AH=B}$(B){var Q;const{values:F,_$litType$:D}=B,U=typeof D=="number"?this._$AC(B):(D.el===void 0&&(D.el=C.createElement(D.h,this.options)),D);if(((Q=this._$AH)===null||Q===void 0?void 0:Q._$AD)===U)this._$AH.p(F);else{const O=new V(U,this),Y=O.v(this.options);O.p(F),this.T(Y),this._$AH=O}}_$AC(B){let Q=T.get(B.strings);return Q===void 0&&T.set(B.strings,Q=new C(B)),Q}k(B){u(this._$AH)||(this._$AH=[],this._$AR());const Q=this._$AH;let F,D=0;for(const U of B)D===Q.length?Q.push(F=new N(this.O(r()),this.O(r()),this,this.options)):F=Q[D],F._$AI(U),D++;D<Q.length&&(this._$AR(F&&F._$AB.nextSibling,D),Q.length=D)}_$AR(B=this._$AA.nextSibling,Q){var F;for((F=this._$AP)===null||F===void 0||F.call(this,!1,!0,Q);B&&B!==this._$AB;){const D=B.nextSibling;B.remove(),B=D}}setConnected(B){var Q;this._$AM===void 0&&(this._$Cm=B,(Q=this._$AP)===null||Q===void 0||Q.call(this,B))}}class S{constructor(B,Q,F,D,U){this.type=1,this._$AH=b,this._$AN=void 0,this.element=B,this.name=Q,this._$AM=D,this.options=U,F.length>2||F[0]!==""||F[1]!==""?(this._$AH=Array(F.length-1).fill(new String),this.strings=F):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(B,Q=this,F,D){const U=this.strings;let O=!1;if(U===void 0)B=P(this,B,Q,0),O=!d(B)||B!==this._$AH&&B!==x,O&&(this._$AH=B);else{const Y=B;let j,re;for(B=U[0],j=0;j<U.length-1;j++)re=P(this,Y[F+j],Q,j),re===x&&(re=this._$AH[j]),O||(O=!d(re)||re!==this._$AH[j]),re===b?B=b:B!==b&&(B+=(re!=null?re:"")+U[j+1]),this._$AH[j]=re}O&&!D&&this.j(B)}j(B){B===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,B!=null?B:"")}}class M extends S{constructor(){super(...arguments),this.type=3}j(B){this.element[this.name]=B===b?void 0:B}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4}j(B){B&&B!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class H extends S{constructor(B,Q,F,D,U){super(B,Q,F,D,U),this.type=5}_$AI(B,Q=this){var F;if((B=(F=P(this,B,Q,0))!==null&&F!==void 0?F:b)===x)return;const D=this._$AH,U=B===b&&D!==b||B.capture!==D.capture||B.once!==D.once||B.passive!==D.passive,O=B!==b&&(D===b||U);U&&this.element.removeEventListener(this.name,this,D),O&&this.element.addEventListener(this.name,this,B),this._$AH=B}handleEvent(B){var Q,F;typeof this._$AH=="function"?this._$AH.call((F=(Q=this.options)===null||Q===void 0?void 0:Q.host)!==null&&F!==void 0?F:this.element,B):this._$AH.handleEvent(B)}}class I{constructor(B,Q,F){this.element=B,this.type=6,this._$AN=void 0,this._$AM=Q,this.options=F}get _$AU(){return this._$AM._$AU}_$AI(B){P(this,B)}}const z=i$1.litHtmlPolyfillSupport;z==null||z(C,N),((t=i$1.litHtmlVersions)!==null&&t!==void 0?t:i$1.litHtmlVersions=[]).push("2.6.1");const Z=(w,B,Q)=>{var F,D;const U=(F=Q==null?void 0:Q.renderBefore)!==null&&F!==void 0?F:B;let O=U._$litPart$;if(O===void 0){const Y=(D=Q==null?void 0:Q.renderBefore)!==null&&D!==void 0?D:null;U._$litPart$=O=new N(B.insertBefore(r(),Y),Y,void 0,Q!=null?Q:{})}return O._$AI(w),O};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var B,Q;const F=super.createRenderRoot();return(B=(Q=this.renderOptions).renderBefore)!==null&&B!==void 0||(Q.renderBefore=F.firstChild),F}update(B){const Q=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(B),this._$Do=Z(Q,this.renderRoot,this.renderOptions)}connectedCallback(){var B;super.connectedCallback(),(B=this._$Do)===null||B===void 0||B.setConnected(!0)}disconnectedCallback(){var B;super.disconnectedCallback(),(B=this._$Do)===null||B===void 0||B.setConnected(!1)}render(){return x}}s.finalized=!0,s._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;n==null||n({LitElement:s});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=w=>w!=null?w:b,allCapitalLetterGroups=/[A-ZÀ-ÖÙ-Ý]+/g,allLowercaseWords=/[a-zà-öù-ý]+/g;function kebabCase(w){const B=w.replace(allCapitalLetterGroups,Q).match(allLowercaseWords);return B?B.join("-"):"";function Q(F){return" "+(F.length>2?F.slice(0,-1)+" "+F.slice(-1):F).toLowerCase()}}function createCache(){const w={};return{has:B=>Object.hasOwnProperty.call(w,B),get:B=>w[B],set:(B,Q)=>{w[B]=Q}}}function memoize(w,B){const Q=createCache();return(...F)=>{const D=w(...F);return Q.has(D)||Q.set(D,B(...F)),Q.get(D)}}var identity=w=>w,dash=memoize(identity,kebabCase),elem=w=>B=>w.includes(B),isRepresentation=elem(["paymentMethod","source","token"]);async function throwBadResponse(w){const{ok:B,statusText:Q}=w;if(!B)throw new Error(Q);return w}function isReactiveElement(w){return"addInitializer"in w.constructor}var _ReadOnlyController=class{constructor(w){if(this.host=w,this.values=new Map,_ReadOnlyController.instances.has(w))return _ReadOnlyController.instances.get(w);w.addController(this),_ReadOnlyController.instances.set(w,this)}static for(w){return new _ReadOnlyController(w)}hostConnected(){}set(w,B){const Q=this.values.get(w);this.values.set(w,B),isReactiveElement(this.host)?this.host.requestUpdate(w,Q):this.host.requestUpdate()}},ReadOnlyController=_ReadOnlyController;ReadOnlyController.instances=new Map;function readonly(w,B){const Q=w.constructor;Q.addInitializer(F=>{const D=ReadOnlyController.for(F);Object.defineProperty(F.constructor.prototype,B,{enumerable:!0,configurable:!0,get(){return D.values.get(B)},set(U){D.values.has(B)||D.values.set(B,U)}}),Q.createProperty(B,{...Q.getPropertyOptions(B),noAccessor:!0})})}readonly.set=function(w,B){const Q=ReadOnlyController.for(w);for(const[F,D]of Object.entries(B))Q.set(F,D)};var ChangeEvent=class extends Event{constructor(w,B,Q,F){super(`${F!=null?F:w.toLowerCase()}-changed`),this.key=w,this.oldValue=B,this.value=Q,this.detail={value:Q}}},_NotifyController=class{constructor(w){if(this.host=w,this.cache=new Map,_NotifyController.instances.has(w))return _NotifyController.instances.get(w);w.addController(this),_NotifyController.instances.set(w,this)}hostUpdated(){var w;for(const[B,Q]of this.cache){const F=this.host[B],{attribute:D}=(w=this.host.constructor.getPropertyOptions(B))!=null?w:{},U=typeof D=="string"?D:null;this.cache.set(B,F),this.host.dispatchEvent(new ChangeEvent(B,Q,F,U))}}},NotifyController=_NotifyController;NotifyController.instances=new Map;function notify(w,B){w.constructor.addInitializer(Q=>{new NotifyController(Q).cache.set(B,Q[B])})}function wrap(w){return(B,Q,F)=>{const D=F.value;return F.value=w(D),F}}var stripeMethod=wrap(function(w){const{name:B}=w;return async function(...Q){if(!this.stripe)throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${B}.`);return w.call(this,...Q).then(this.handleResponse)}});function throwResponseError(w){if(w.error)throw w.error;return w}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(w,B,Q,F)=>{for(var D=F>1?void 0:F?__getOwnPropDesc(B,Q):B,U=w.length-1,O;U>=0;U--)(O=w[U])&&(D=(F?O(B,Q,D):O(D))||D);return F&&D&&__defProp(B,Q,D),D},__accessCheck=(w,B,Q)=>{if(!B.has(w))throw TypeError("Cannot "+Q)},__privateGet=(w,B,Q)=>(__accessCheck(w,B,"read from private field"),Q?Q.call(w):B.get(w)),__privateAdd=(w,B,Q)=>{if(B.has(w))throw TypeError("Cannot add the same private member more than once");B instanceof WeakSet?B.add(w):B.set(w,Q)},__privateSet=(w,B,Q,F)=>(__accessCheck(w,B,"write to private field"),F?F.call(w,Q):B.set(w,Q),Q);function getRandom(){return(Date.now()+Math.random()*1e3).toString(36).substr(0,8)}var BreadcrumbController=class{constructor(w,B){var Q,F;this.host=w,this.options=B,this.initialized=!1,this.shadowHosts=[],this.host.addController(this),this.mountId=this.resetMountId(),this.slotName=(F=(Q=this.options)==null?void 0:Q.slotName)!=null?F:`breadcrumb-${getRandom()}`}get mount(){return document.getElementById(this.mountId)}hostUpdated(){var w;!this.initialized&&((w=this.options)==null?void 0:w.autoInitialize)!==!1&&this.init()}hostDisconnected(){this.destroyMountPoints()}resetMountId(){var B,Q;return`${(Q=(B=this.options)==null?void 0:B.mountPrefix)!=null?Q:this.host.localName}-mount-point-${getRandom()}`}createMountPoint(){const w=document.createElement("div");return w.id=this.mountId,w.classList.add(`${this.host.tagName.toLowerCase()}-mount`),w}createSlot(w){const B=document.createElement("slot");return B.slot=w,B.name=w,B}appendTemplate(w,B=this.createMountPoint()){return w.appendChild(B),B}initMountPoints(){this.initShadowMountPoints()}destroyMountPoints(){for(const w of this.shadowHosts)for(const B of w.querySelectorAll(`[slot="${this.slotName}"][name="${this.slotName}"]`))B.remove();this.mount&&this.mount.remove(),this.mountId=this.resetMountId()}initShadowMountPoints(){let w=this.host;for(this.shadowHosts=[this.host];w=w.getRootNode().host;)this.shadowHosts.push(w);const{shadowHosts:B,slotName:Q}=this,F=[...B],D=F.pop();if(!D.querySelector(`[slot="${Q}"]`)){const O=document.createElement("div");O.slot=Q,D.appendChild(O)}const U=D.querySelector(`[slot="${Q}"]`);this.appendTemplate(U),F.forEach(O=>this.appendTemplate(O,this.createSlot(Q)))}init(){this.destroyMountPoints(),this.initMountPoints(),this.initialized=!0}};function _typeof(w){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(B){return typeof B}:_typeof=function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},_typeof(w)}var V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function w(){for(var B=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),Q=0;Q<B.length;Q++){var F=B[Q];if(!!V3_URL_REGEX.test(F.src))return F}return null},injectScript=function w(B){var Q=B&&!B.advancedFraudSignals?"?advancedFraudSignals=false":"",F=document.createElement("script");F.src="".concat(V3_URL).concat(Q);var D=document.head||document.body;if(!D)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return D.appendChild(F),F},registerWrapper=function w(B,Q){!B||!B._registerWrapper||B._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:Q})},stripePromise=null,loadScript=function w(B){return stripePromise!==null||(stripePromise=new Promise(function(Q,F){if(typeof window=="undefined"){Q(null);return}if(window.Stripe&&B&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe){Q(window.Stripe);return}try{var D=findScript();D&&B?console.warn(EXISTING_SCRIPT_MESSAGE):D||(D=injectScript(B)),D.addEventListener("load",function(){window.Stripe?Q(window.Stripe):F(new Error("Stripe.js not available"))}),D.addEventListener("error",function(){F(new Error("Failed to load Stripe.js"))})}catch(U){F(U);return}})),stripePromise},initStripe=function w(B,Q,F){if(B===null)return null;var D=B.apply(void 0,Q);return registerWrapper(D,F),D},validateLoadParams=function w(B){var Q=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(B),`
`);if(B===null||_typeof(B)!=="object")throw new Error(Q);if(Object.keys(B).length===1&&typeof B.advancedFraudSignals=="boolean")return B;throw new Error(Q)},loadParams,loadStripeCalled=!1,loadStripe=function w(){for(var B=arguments.length,Q=new Array(B),F=0;F<B;F++)Q[F]=arguments[F];loadStripeCalled=!0;var D=Date.now();return loadScript(loadParams).then(function(U){return initStripe(U,Q,D)})};loadStripe.setLoadParameters=function(w){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(w)};var StripeElementsError=class extends Error{constructor(w,B){super(`<${w}>: ${B}`),this.originalMessage=B}};function isStripeElementsError(w){return!!w&&w instanceof StripeElementsError}var errorConverter={toAttribute:w=>w?isStripeElementsError(w)?w.originalMessage:w.message||"":null},StripeBase=class extends s{constructor(){super(...arguments),this.generate="source",this.showError=!1,this.locale="auto",this.paymentMethod=null,this.source=null,this.token=null,this.element=null,this.elements=null,this.error=null,this.focused=!1,this.ready=!1,this.stripe=null,this.theme="none",this.precomputedStyle=getComputedStyle(this),this.breadcrumb=new BreadcrumbController(this,{slotName:`${this.constructor.is}-slot`})}get stripeMountId(){return this.breadcrumb.mountId}get stripeMount(){return this.breadcrumb.mount}render(){const{error:w,showError:B}=this,{slotName:Q}=this.breadcrumb,F=isStripeElementsError(w)?w.originalMessage:w==null?void 0:w.message;return y`
      <div id="stripe" part="stripe">
        <slot id="stripe-slot" name="${Q}"></slot>
      </div>

      <output id="error"
          for="stripe"
          part="error"
          ?hidden="${!B}">
        ${l(F)}
      </output>
    `}updated(w){var B;(B=super.updated)==null||B.call(this,w),w.has("error")&&this.errorChanged(),w.has("publishableKey")&&this.init(),[...w.keys()].forEach(Q=>this.representationChanged(Q))}async disconnectedCallback(){var w;super.disconnectedCallback(),await((w=this.unmount)==null?void 0:w.call(this))}reset(){var w,B;(B=(w=this.element)==null?void 0:w.clear)==null||B.call(w),this.resetRepresentations(),readonly.set(this,{error:null})}blur(){var w;(w=this.element)==null||w.blur()}focus(){var w;(w=this.element)==null||w.focus()}createError(w){return new StripeElementsError(this.constructor.is,w)}errorChanged(){this.resetRepresentations(),this.fireError(this.error)}fire(w,B,Q){this.dispatchEvent(new CustomEvent(w,{detail:B,...Q}))}fireError(w){this.dispatchEvent(new ErrorEvent("error",{error:w}))}getCSSCustomPropertyValue(w){return this.precomputedStyle.getPropertyValue(w)}async handleResponse(w){const{error:B=null,paymentMethod:Q=null,source:F=null,token:D=null}={...w};if(readonly.set(this,{error:B,paymentMethod:Q,source:F,token:D}),await this.updateComplete,B)throw B;return w}initElement(){}async init(){await this.unmount(),await this.initStripe(),await this.initElement(),this.initElementListeners(),this.breadcrumb.init(),this.mount()}initElementListeners(){!this.element||(this.element.on("ready",this.onReady),this.element.on("focus",this.onFocus),this.element.on("blur",this.onBlur))}async initStripe(){const{publishableKey:w,stripeAccount:B,locale:Q}=this;if(!w)readonly.set(this,{elements:null,element:null,stripe:null});else try{const F={stripeAccount:B,locale:Q},D=window.Stripe?window.Stripe(w,F):await loadStripe(w,F),U=D==null?void 0:D.elements();readonly.set(this,{elements:U,error:null,stripe:D})}catch(F){console.warn(F);const D=this.createError("Stripe.js must be loaded first.");readonly.set(this,{elements:null,error:D,stripe:null})}finally{await this.updateComplete}}mount(){var w;if(!this.breadcrumb.mount)throw this.createError("Stripe Mount missing");(w=this.element)==null||w.mount(this.breadcrumb.mount)}async unmount(){var w,B;(B=(w=this.element)==null?void 0:w.unmount)==null||B.call(w),readonly.set(this,{element:null}),await this.updateComplete}async onBlur(){readonly.set(this,{focused:!1}),await this.updateComplete}async onFocus(){readonly.set(this,{focused:!0}),await this.updateComplete}async onReady(w){readonly.set(this,{ready:!0}),await this.updateComplete,this.fire("ready",w)}async postRepresentation(){const w=j=>readonly.set(this,{error:j}),B=j=>this.fire("success",j),Q=this.token||void 0,F=this.source||void 0,D=this.paymentMethod||void 0,U=JSON.stringify({token:Q,source:F,paymentMethod:D}),O={"Content-Type":"application/json"},Y="POST";return fetch(this.action,{body:U,headers:O,method:Y}).then(throwBadResponse).then(B).catch(w)}representationChanged(w){if(!isRepresentation(w))return;const B=this[w];!B||(this.fire(`${dash(w)}`,B),this.action&&this.postRepresentation())}resetRepresentations(){readonly.set(this,{paymentMethod:null,token:null,source:null})}};__decorateClass([e$3({type:String})],StripeBase.prototype,"action",2);__decorateClass([e$3({type:String,attribute:"client-secret"})],StripeBase.prototype,"clientSecret",2);__decorateClass([e$3({type:String})],StripeBase.prototype,"generate",2);__decorateClass([notify,e$3({type:String,attribute:"publishable-key",reflect:!0})],StripeBase.prototype,"publishableKey",2);__decorateClass([e$3({type:Boolean,attribute:"show-error",reflect:!0})],StripeBase.prototype,"showError",2);__decorateClass([e$3({type:String,attribute:"stripe-account"})],StripeBase.prototype,"stripeAccount",2);__decorateClass([e$3({type:String,attribute:"locale"})],StripeBase.prototype,"locale",2);__decorateClass([readonly,notify,e$3({type:Object,attribute:"payment-method"})],StripeBase.prototype,"paymentMethod",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"source",2);__decorateClass([readonly,notify,e$3({type:Object})],StripeBase.prototype,"token",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"element",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"elements",2);__decorateClass([readonly,notify,e$3({type:Object,reflect:!0,converter:errorConverter})],StripeBase.prototype,"error",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"focused",2);__decorateClass([readonly,notify,e$3({type:Boolean,reflect:!0})],StripeBase.prototype,"ready",2);__decorateClass([readonly,e$3({type:Object})],StripeBase.prototype,"stripe",2);__decorateClass([e$3()],StripeBase.prototype,"theme",2);__decorateClass([e$3({attribute:"border-radius"})],StripeBase.prototype,"borderRadius",2);__decorateClass([e$3({attribute:"color-background"})],StripeBase.prototype,"colorBackground",2);__decorateClass([e$3({attribute:"color-danger"})],StripeBase.prototype,"colorDanger",2);__decorateClass([e$3({attribute:"color-primary"})],StripeBase.prototype,"colorPrimary",2);__decorateClass([e$3({attribute:"color-text"})],StripeBase.prototype,"colorText",2);__decorateClass([e$3({attribute:"font-family"})],StripeBase.prototype,"fontFamily",2);__decorateClass([e$3({attribute:"spacing-unit"})],StripeBase.prototype,"spacingUnit",2);__decorateClass([bound],StripeBase.prototype,"handleResponse",1);__decorateClass([bound],StripeBase.prototype,"onBlur",1);__decorateClass([bound],StripeBase.prototype,"onFocus",1);__decorateClass([bound],StripeBase.prototype,"onReady",1);var styles=i$2`[hidden] {
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
`,stripe_elements_default=styles2,ALLOWED_STYLES=["color","fontFamily","fontSize","fontStyle","fontSmoothing","fontVariant","iconColor","lineHeight","letterSpacing","textDecoration","textShadow","textTransform"],SUB_STYLES=[":hover",":focus","::placeholder","::selection",":-webkit-autofill",":disabled"],StripeElements=class extends StripeBase{constructor(){super(...arguments),this.hideIcon=!1,this.hidePostalCode=!1,this.iconStyle="default",this.value={},this.brand=null,this.complete=!1,this.empty=!0,this.invalid=!1}async createPaymentMethod(w=this.getPaymentMethodData()){return this.stripe.createPaymentMethod(w)}async createSource(w=this.sourceData){return this.stripe.createSource(this.element,w)}async createToken(w=this.tokenData){return this.stripe.createToken(this.element,w)}isPotentiallyValid(){return!this.complete&&!this.empty&&!this.error||this.validate()}reset(){var w;super.reset(),(w=this.element)==null||w.clear()}async submit(){switch(this.generate){case"payment-method":return this.createPaymentMethod();case"source":return this.createSource();case"token":return this.createToken();default:{const w=this.createError(`cannot generate ${this.generate}`);throw readonly.set(this,{error:w}),await this.updateComplete,w}}}validate(){const{complete:w,empty:B,error:Q}=this,F=!Q&&w&&!B;return B&&!Q&&readonly.set(this,{error:this.createError("Your card number is empty.")}),F}updateStyle(){var w;(w=this.element)==null||w.update({style:this.getStripeElementsStyles()})}getPaymentMethodData(){const w="card",{billingDetails:B,paymentMethodData:Q}=this;return{billing_details:B,...Q,type:w,card:this.element}}getStripeElementsStyles(){const w=D=>this.getCSSCustomPropertyValue(D)||void 0,B=["base","complete","empty","invalid"],Q=D=>(U,O)=>{if(D.includes("-"))return U;const Y=O.split(":").pop();return{...U,[O]:ALLOWED_STYLES.reduce(F(`${D}-${Y}`),{})}},F=D=>(U,O)=>{const Y=`--stripe-elements-${D}-${dash(O)}`;return{...U,[O]:w(Y),...SUB_STYLES.reduce(Q(D),{})}};return B.reduce((D,U)=>({...D,[U]:ALLOWED_STYLES.reduce(F(U),{})}),{})}async initElement(){if(!this.stripe)return;const{hidePostalCode:w,hideIcon:B,iconStyle:Q,value:F}=this,D=this.getStripeElementsStyles();await this.updateComplete;const U=this.createElement({hideIcon:B,hidePostalCode:w,iconStyle:Q,style:D,value:F});U.on("change",this.onChange),readonly.set(this,{element:U}),await this.updateComplete}createElement(w){return this.elements.create("card",w)}async onChange(w){const{brand:B,complete:Q,empty:F,error:D=null}=w,U=!(D||!F&&!Q);readonly.set(this,{brand:B,complete:Q,empty:F,error:D,invalid:U}),await this.updateComplete,this.fire("change",w)}};StripeElements.is="stripe-elements";StripeElements.elementType="card";StripeElements.styles=[shared_default,stripe_elements_default];__decorateClass([e$3({type:Boolean,attribute:"hide-icon"})],StripeElements.prototype,"hideIcon",2);__decorateClass([e$3({type:Boolean,attribute:"hide-postal-code"})],StripeElements.prototype,"hidePostalCode",2);__decorateClass([e$3({type:String,attribute:"icon-style"})],StripeElements.prototype,"iconStyle",2);__decorateClass([e$3({type:Object})],StripeElements.prototype,"value",2);__decorateClass([notify,readonly,e$3({type:String})],StripeElements.prototype,"brand",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"complete",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"empty",2);__decorateClass([notify,readonly,e$3({type:Boolean,reflect:!0})],StripeElements.prototype,"invalid",2);__decorateClass([stripeMethod],StripeElements.prototype,"createPaymentMethod",1);__decorateClass([stripeMethod],StripeElements.prototype,"createSource",1);__decorateClass([stripeMethod],StripeElements.prototype,"createToken",1);__decorateClass([bound],StripeElements.prototype,"onChange",1);StripeElements=__decorateClass([e$4("stripe-elements")],StripeElements);var styles3=i$2`#stripe {
  box-sizing: border-box;
  min-width: var(--stripe-payment-request-element-min-width, 300px);
  padding: var(--stripe-payment-request-element-padding, 8px 12px);
  background: var(--stripe-payment-request-element-background, white);
}
`,stripe_payment_request_default=styles3;function isStripeDisplayItem(w){return w.tagName.toLowerCase()==="stripe-display-item"}function datasetToStripeDisplayItem({dataset:{amount:w,label:B,pending:Q}}){return{label:B,amount:parseInt(w),...Q!==void 0&&{pending:Q==="true"}}}function datasetToStripeShippingOption({dataset:{amount:w,detail:B,...Q}}){return{amount:parseInt(w),detail:B,...Q}}function mapDataset(w){return isStripeDisplayItem(w)?datasetToStripeDisplayItem(w):datasetToStripeShippingOption(w)}var _displayItems,_shippingOptions,StripePaymentRequest=class extends StripeBase{constructor(){super(...arguments),this.canMakePayment=null,__privateAdd(this,_displayItems,void 0),this.paymentIntent=null,this.paymentRequest=null,this.pending=!1,__privateAdd(this,_shippingOptions,void 0),this.buttonType="default",this.buttonTheme="dark",this.complete=async(w,B)=>{const{error:Q=null}={...w},F=Q||B?"fail":"success";return w.complete(F),this.fire(F,w),B?{error:B}:w}}get displayItems(){const w=__privateGet(this,_displayItems);return Array.isArray(w)?w:this.parseDatasets("stripe-display-item")}set displayItems(w){const B=this.displayItems;__privateSet(this,_displayItems,w),this.requestUpdate("displayItems",B)}get shippingOptions(){const w=__privateGet(this,_shippingOptions);return Array.isArray(w)?w:this.parseDatasets("stripe-shipping-option")}set shippingOptions(w){const B=this.shippingOptions;__privateSet(this,_shippingOptions,w),this.requestUpdate("shippingOptions",B)}reset(){super.reset(),readonly.set(this,{paymentIntent:null})}updated(w){super.updated(w),w.has("generate")&&this.initPaymentRequestListeners(),w.has("amount")&&this.updatePaymentRequest()}getStripePaymentRequestOptions(){const{country:w,currency:B,displayItems:Q,shippingOptions:F,requestShipping:D,requestPayerEmail:U,requestPayerName:O,requestPayerPhone:Y,label:j="",amount:re=0}=this;return{country:w,currency:B,displayItems:Q,requestPayerEmail:U,requestPayerName:O,requestPayerPhone:Y,requestShipping:D,shippingOptions:F,total:{label:j,amount:re}}}async initElement(){await this.initPaymentRequest(),await this.initPaymentRequestListeners(),await this.initPaymentRequestButton()}async initPaymentRequest(){if(!this.stripe)return;const w=this.getStripePaymentRequestOptions(),B=this.stripe.paymentRequest(w),Q=await B.canMakePayment();readonly.set(this,{paymentRequest:B,canMakePayment:Q}),await this.updateComplete,this.canMakePayment||this.fire("unsupported")}async initPaymentRequestButton(){const{buttonTheme:w,buttonType:B,canMakePayment:Q}=this;if(!Q||!this.elements)return;const F="--stripe-payment-request-button-height",U={paymentRequestButton:{height:this.getCSSCustomPropertyValue(F)||"40px",theme:w,type:B}},O=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:U});readonly.set(this,{element:O}),await this.updateComplete}async initPaymentRequestListeners(){if(!!this.canMakePayment)switch(this.paymentRequest.on("click",this.updatePaymentRequest),this.paymentRequest.on("cancel",this.onCancel),this.paymentRequest.on("shippingaddresschange",this.onShippingaddresschange),this.paymentRequest.on("shippingoptionchange",this.onShippingoptionchange),this.generate){case"payment-method":this.paymentRequest.on("paymentmethod",this.onPaymentResponse);break;case"source":this.paymentRequest.on("source",this.onPaymentResponse);break;case"token":this.paymentRequest.on("token",this.onPaymentResponse);break}}async updatePaymentRequest(){if(!this.paymentRequest)return;const{currency:w,total:B,displayItems:Q,shippingOptions:F}=this.getStripePaymentRequestOptions();this.paymentRequest.update({currency:w,total:B,displayItems:Q,shippingOptions:F})}onCancel(){this.fire("cancel")}async onPaymentResponse(w){const{error:B=null,paymentMethod:Q=null,source:F=null,token:D=null}={...w};readonly.set(this,{error:B,paymentMethod:Q,source:F,token:D}),this.clientSecret&&!B?this.confirmPaymentIntent(w):this.complete(w)}async confirmPaymentIntent(w){var U;const B={payment_method:this.paymentMethod.id},Q=await this.confirmCardPayment(B,{handleActions:!1}).then(({error:O})=>this.complete(w,O)).then(throwResponseError).then(()=>this.confirmCardPayment()).then(throwResponseError).catch(O=>({error:O})),{error:F=null}=Q,D=(U=Q.paymentIntent)!=null?U:null;readonly.set(this,{error:F,paymentIntent:D}),await this.updateComplete}async confirmCardPayment(w,B){return this.stripe.confirmCardPayment(this.clientSecret,w,B)}onShippingaddresschange(w){this.fire("shippingaddresschange",w)}onShippingoptionchange(w){this.fire("shippingoptionchange",w)}parseDatasets(w){const B=[...this.querySelectorAll(w)];return B.length?B.map(mapDataset):[]}};_displayItems=new WeakMap;_shippingOptions=new WeakMap;StripePaymentRequest.is="stripe-payment-request";StripePaymentRequest.styles=[shared_default,stripe_payment_request_default];__decorateClass([e$3({type:Number,reflect:!0})],StripePaymentRequest.prototype,"amount",2);__decorateClass([notify,readonly,e$3({type:Boolean,attribute:"can-make-payment",reflect:!0})],StripePaymentRequest.prototype,"canMakePayment",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"country",2);__decorateClass([e$3({type:String})],StripePaymentRequest.prototype,"currency",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"displayItems",1);__decorateClass([e$3({type:String,reflect:!0})],StripePaymentRequest.prototype,"label",2);__decorateClass([notify,readonly,e$3({type:Object,attribute:"payment-intent"})],StripePaymentRequest.prototype,"paymentIntent",2);__decorateClass([readonly,e$3({type:Object,attribute:"payment-request"})],StripePaymentRequest.prototype,"paymentRequest",2);__decorateClass([e$3({type:Boolean,reflect:!0})],StripePaymentRequest.prototype,"pending",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-email"})],StripePaymentRequest.prototype,"requestPayerEmail",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-name"})],StripePaymentRequest.prototype,"requestPayerName",2);__decorateClass([e$3({type:Boolean,attribute:"request-payer-phone"})],StripePaymentRequest.prototype,"requestPayerPhone",2);__decorateClass([e$3({type:Boolean,attribute:"request-shipping"})],StripePaymentRequest.prototype,"requestShipping",2);__decorateClass([e$3({type:Array})],StripePaymentRequest.prototype,"shippingOptions",1);__decorateClass([e$3({type:String,attribute:"button-type"})],StripePaymentRequest.prototype,"buttonType",2);__decorateClass([e$3({type:String,attribute:"button-theme"})],StripePaymentRequest.prototype,"buttonTheme",2);__decorateClass([bound],StripePaymentRequest.prototype,"onCancel",1);__decorateClass([bound],StripePaymentRequest.prototype,"onPaymentResponse",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmPaymentIntent",1);__decorateClass([bound],StripePaymentRequest.prototype,"confirmCardPayment",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingaddresschange",1);__decorateClass([bound],StripePaymentRequest.prototype,"onShippingoptionchange",1);StripePaymentRequest=__decorateClass([e$4("stripe-payment-request")],StripePaymentRequest);const VITE_CommerceKey$1="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey$1="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec",commerce$1=new lib(`${VITE_CommerceKey$1}`,!0);var allProducts$1=[],currentShopProduct$1,shopPage=1,currentCart$1,cartEmpty$1=!0,selectedPSize$1="",countriesObj$1={},variantAbbr="",countriesAdded=!1,shippingMethodValue,shippingId="",card$1,stripeElements,pComplete;class mobileShop1 extends HTMLElement{constructor(){super();$e(this,"closeMobileShop",()=>{document.getElementById("mobileShop").style.display="none"});$e(this,"loadShop",async()=>{this.shadow.getElementById("LoadBG").style.display="grid";var Q=this.shadow.getElementById("mb1");await commerce$1.products.list({limit:100,sortDirection:"desc"}).then(F=>allProducts$1.push(F.data)),allProducts$1[0].forEach(F=>{var D=document.createElement("div");D.setAttribute("class","productContainer"),D.setAttribute("id",F.id),this.shadow.getElementById("productEdition").addEventListener("click",this.toggleTerms),D.addEventListener("click",this.viewProduct),Q.appendChild(D),D.innerHTML=`
    <img class="shopProducts" style="opacity:100%;" loading="lazy" src="${F.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${F.name}</p>
    <p class="pcProductPrice">${F.price.formatted_with_symbol}</p>
  </div>
    `,this.shadow.getElementById("LoadBG").style.display="none"}),commerce$1.cart.empty()});$e(this,"viewProduct",Q=>{var F=Q.target.parentElement.id;this.shadow.getElementById("scroll").style.display="block",currentShopProduct$1=allProducts$1[0].filter(O=>O.id.includes(`${F}`)),this.shadow.getElementById("mb2").style.display="block",shopPage=2,this.shadow.getElementById("pName").innerHTML=`
        ${currentShopProduct$1[0].name}`,currentShopProduct$1[0].categories.forEach(O=>{O.name==="\xC9"&&(this.shadow.getElementById("eSymbol1").style.display="block"),O.name==="S\xC9"&&(this.shadow.getElementById("eSymbol2").style.display="block")}),this.shadow.getElementById("pDesc").innerHTML=currentShopProduct$1[0].description,this.shadow.getElementById("proPrice").innerHTML=currentShopProduct$1[0].price.formatted_with_symbol,currentShopProduct$1[0].inventory.available===0&&(this.shadow.getElementById("archived").style.display="grid");var D=this.shadow.getElementById("allImages"),U=0;this.shadow.getElementById("mainImageCont").src=`${currentShopProduct$1[0].assets[0].url}`,currentShopProduct$1[0].assets.forEach(O=>{if(U<=3){var Y=document.createElement("img");Y.setAttribute("src",`${O.url}`),Y.setAttribute("id",`${O.url}`),Y.addEventListener("click",this.changeToMainPic),D.appendChild(Y),U++}O.filename==="sizeChart.png"&&(this.shadow.getElementById("noti").innerHTML=`
                <img class="sizeChartImage" src="${O.url}"/>
              `,this.shadow.getElementById("pSizeGuide").addEventListener("click",this.noti1))}),this.checkSize()});$e(this,"checkSize",()=>{currentShopProduct$1[0].variant_groups[0].options.forEach(Q=>{if(this.shadow.getElementById(`${Q.name}`).style.opacity="100%",this.shadow.getElementById(`${Q.name}`).style.cursor="pointer",this.shadow.getElementById(`${Q.name}`).addEventListener("click",this.selectSize),Q.name==="SingleSize"){var F=this.shadow.querySelectorAll(".sizeButtons");this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr",this.shadow.getElementById("sizesCont").style.justifyItems="end",F.forEach(D=>{D.id!="SingleSize"&&(D.style.display="none")}),this.shadow.getElementById("SingleSize").style.display="grid"}})});$e(this,"noti1",()=>{this.shadow.getElementById("noti").style.display="block",pComplete===!0?(this.shadow.getElementById("noti").addEventListener("click",this.return),pComplete=!1):this.shadow.getElementById("noti").addEventListener("click",this.closeNoti)});$e(this,"closeNoti",()=>{this.shadow.getElementById("noti").style.display="none",pComplete=!1});$e(this,"returnSize",()=>{var Q=this.shadow.querySelectorAll(".sizeButtons");Q.forEach(F=>{F.id!="SingleSize"&&(F.style.display="grid"),this.shadow.getElementById(F.id).style.opacity=".3"}),this.shadow.getElementById("SingleSize").style.display="none",this.shadow.getElementById("sizesCont").style.gridTemplateColumns="1fr 1fr 1fr 1fr",this.shadow.getElementById("sizesCont").style.justifyItems="center"});$e(this,"changeToMainPic",Q=>{var F=Q.target.id;this.shadow.getElementById("mainImageCont").src=`${F}`});$e(this,"return",()=>{this.shadow.getElementById("main"),this.shadow.getElementById("mb1");var Q=this.shadow.getElementById("mb2"),F=this.shadow.getElementById("mb3"),D=this.shadow.getElementById("checkoutInputs"),U=this.shadow.getElementById("shippingButton");switch(this.shadow.getElementById("mb4"),this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("archived").style.display="none",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("noti").style.display="none",shopPage){case 1:this.closeMobileShop();break;case 2:Q.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("eSymbol1").style.display="none",this.shadow.getElementById("eSymbol2").style.display="none",this.returnSize(),shopPage=1;break;case 3:F.style.display="none",Q.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.returnSize(),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",shopPage=1;break;case 4:D.style.display="none",U.innerHTML="SHIPPING & BILLING",U.removeEventListener("click",this.return),U.addEventListener("click",this.shipping),this.viewCart(),shopPage=3;break;case 5:F.style.display="none",D.style.display="none",Q.style.display="none",this.shadow.getElementById("allImages").innerHTML="",this.shadow.getElementById("noti").removeEventListener("click",this.return),this.returnSize(),selectedPSize$1="",shopPage=1,this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';break}});$e(this,"selectSize",Q=>{var F=this.shadow.querySelectorAll(".sizeButtons");F.forEach(U=>{this.shadow.getElementById(U.id).style.backgroundColor="",this.shadow.getElementById(U.id).style.color=""}),Q.target.style.opacity==="1"?(selectedPSize$1=Q.target.id,this.shadow.getElementById("addItemButton").addEventListener("click",this.addToCart),Q.target.style.color="white",Q.target.style.backgroundColor="#ff002d",this.shadow.getElementById("addItemButton").innerHTML="ADD TO CART"):(selectedPSize$1="",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart));var D=document.getElementsByClassName("sizeButtons");for(let U=0;U<D.length;U++)D[U].style.color="#ff002d"});$e(this,"addToCart",async()=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("addItemButton").innerHTML="ADDING",this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>';var Q=currentShopProduct$1[0].variant_groups[0].options.filter(F=>F.name.includes(`${selectedPSize$1}`));this.shadow.getElementById("LoadBG").style.display="grid",commerce$1.cart.retrieve().then(F=>{currentCart$1=F}).then(()=>{if(cartEmpty$1===!1){var F=currentCart$1.line_items.filter(D=>D.product_id===currentShopProduct$1[0].id);console.log(currentCart$1),console.log(currentShopProduct$1[0].id),console.log(F),currentShopProduct$1[0].inventory.available>0?commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:Q[0].id}).then(()=>{cartEmpty$1=!1,commerce$1.cart.retrieve().then(D=>{currentCart$1=D,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART";var U=this.shadow.querySelectorAll(".sizeButtons");U.forEach(O=>{this.shadow.getElementById(`${O.id}`).style.color="",this.shadow.getElementById(`${O.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=D.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)}):(this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="MAX INVENTORY")}else commerce$1.cart.add(currentShopProduct$1[0].id,1,{[currentShopProduct$1[0].variant_groups[0].id]:Q[0].id}).then(()=>{cartEmpty$1=!1,selectedPSize$1="",commerce$1.cart.retrieve().then(D=>{currentCart$1=D,this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("cartStatus").innerHTML="VIEW CART",this.shadow.getElementById("addItemButton").removeEventListener("click",this.addToCart);var U=this.shadow.querySelectorAll(".sizeButtons");U.forEach(O=>{this.shadow.getElementById(`${O.id}`).style.color="",this.shadow.getElementById(`${O.id}`).style.backgroundColor=""}),this.shadow.getElementById("totalPrice").innerHTML=D.subtotal.formatted_with_symbol}),selectedPSize$1="",this.shadow.getElementById("addItemButton").removeAttribute("onclick"),this.shadow.getElementById("cartStatus").addEventListener("click",this.viewCart)})})});$e(this,"viewCart",()=>{shopPage=3,this.shadow.getElementById("mb3").style.display="block",this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE";var Q=this.shadow.getElementById("cartStatus");this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),Q.innerHTML="CHECKOUT",Q.removeEventListener("click",this.viewCart),Q.removeEventListener("click",this.checkout),variantAbbr="",currentCart$1.line_items.forEach(F=>{var D=document.createElement("div");switch(D.setAttribute("class","productCont"),this.shadow.getElementById("cartItems").appendChild(D),F.selected_options[0].option_name){case"Small":variantAbbr="S";break;case"Medium":variantAbbr="M";break;case"Large":variantAbbr="L";break;case"XLarge":variantAbbr="XL";break;case"2XLarge":variantAbbr="2XL";break;case"3XLarge":variantAbbr="3XL";break}D.innerHTML=`
                <div class="pcLeft">
                    <img src="${F.image.url}"> 
                </div>
                <div class="pcRight">
                    <p class="cartProName">${F.name}</p>
                    <p class="cartProQty" id="${F.name}Qty">QTY: <span class="active">(${F.quantity})${variantAbbr}</span></p>
                    <p class="cartProPrice">${F.price.formatted_with_symbol}</p>
                    <div class="quantityChange" name="${F.product_id}">
                        <span class="active dec changeQty" id="${F.id}" name="dec">-</span>
                        <span>|</span>
                        <span class="active inc changeQty" id="${F.id}" name="inc">+</span>
                    </div>
                </div>
            `,this.shadow.getElementById("termsButton").addEventListener("click",this.toggleTerms);var U=this.shadow.querySelectorAll(".changeQty");U.forEach(O=>{O.addEventListener("click",this.changeQty)}),D.setAttribute("id",`${F.id}Parent`)})});$e(this,"toggleTerms",()=>{this.noti1(),this.shadow.getElementById("noti").innerHTML=`
        <div id="terms">
         <h1>Terms & Conditions</h1><p>For designs marked with an <span class="active">(\u2018\xC9\u2019)</span> or <span class="active">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `});$e(this,"checkQuantity",Q=>{var F=allProducts$1[0].filter(D=>D.id===Q);return F[0].inventory.available});$e(this,"changeQty",Q=>{this.shadow.getElementById("LoadBG").style.display="grid";var F=Q.target.getAttribute("id"),D=Q.target.parentElement.getAttribute("name"),U=this.checkQuantity(D);if(Q.target.getAttribute("name")==="inc"){var O=currentCart$1.line_items.filter(Y=>Y.id===F);if(U>=2&&O[0].quantity<=U-1){commerce$1.cart.update(`${F}`,{quantity:O[0].quantity+1}).then(Y=>{this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=Y.cart.subtotal.formatted_with_symbol,currentCart$1=Y.cart,this.viewCart()});return}else Q.target.style.opacity=".3",this.shadow.getElementById("LoadBG").style.display="none"}if(Q.target.getAttribute("name")==="dec"){var O=currentCart$1.line_items.filter(j=>j.id===F);commerce$1.cart.update(`${F}`,{quantity:O[0].quantity-1}).then(j=>{if(this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("totalPrice").innerHTML=j.cart.subtotal.formatted_with_symbol,currentCart$1=j.cart,this.viewCart(),j.cart.total_items===0){var re=this.shadow.getElementById("cartStatus");cartEmpty$1=!0,this.return(),re.innerHTML="CART EMPTY",re.removeEventListener("click",this.viewCart),this.shadow.getElementById("cartStatus").removeEventListener("click",this.checkout),selectedPSize$1=""}});return}});$e(this,"shipping",()=>{shopPage=4;var Q=this.shadow.getElementById("shippingButton"),F=this.shadow.getElementById("cartStatus");this.shadow.getElementById("checkoutInputs").style.display="grid",Q.innerHTML="VIEW CART",Q.removeAttribute("click",this.shipping),Q.addEventListener("click",this.return),F.innerHTML="PAY NOW",F.addEventListener("click",this.checkout),countriesAdded===!1&&(countriesAdded=!0,commerce$1.services.localeListCountries().then(D=>{countriesObj$1=D.countries,Object.keys(D.countries).forEach(U=>{var O=document.createElement("option"),Y=this.shadow.getElementById("inputCN");O.setAttribute("value",U),O.setAttribute("title",U),O.innerHTML=`${countriesObj$1[U].substr(0,20)}`,Y.appendChild(O)})})),this.shadow.getElementById("inputCN").addEventListener("change",this.states),this.shadow.getElementById("card-element").innerHTML=`
        <stripe-elements publishable-key="${VITE_StripeKey$1}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`,this.shadow.getElementById("sCard").addEventListener("ready",D=>{card$1=D.path[0].element,D.path[0].stripe.createToken(card$1),stripeElements=D.path[0].stripe})});$e(this,"states",()=>{var Q=this.shadow.getElementById("inputCN"),F=Q.options[Q.selectedIndex].value,D=Q.options[Q.selectedIndex].title,U=this.shadow.getElementById("totalPrice");this.shadow.getElementById("inputST").innerHTML="",F==="US"&&(this.shadow.getElementById("inputSP").value="$0.00 Free Shipping",shippingMethodValue=1,U.innerHTML=currentCart$1.subtotal.formatted_with_symbol),F!="US"&&(this.shadow.getElementById("inputSP").value="$70.00 Intl Shipping",shippingMethodValue=3,U.innerHTML=`$${currentCart$1.subtotal.raw+70}.00`),D==="US2"&&(this.shadow.getElementById("inputSP").value="$130.00 - Next Day",shippingMethodValue=2,U.innerHTML=`$${currentCart$1.subtotal.raw+130}.00`),commerce$1.services.localeListSubdivisions(F).then(O=>{var Y=O.subdivisions;Object.keys(O.subdivisions).forEach(j=>{var re=document.createElement("option"),ge=this.shadow.getElementById("inputST");if(Object.keys(O.subdivisions).length<=1){var ce=document.createElement("option");ce.innerHTML="Not Available.",Q.options[Q.selectedIndex].innerHTML="Select Country",this.shadow.getElementById("inputST").appendChild(ce)}else re.setAttribute("value",Y[j]),re.setAttribute("id",j),re.innerHTML=Y[j].substring(0,20),ge.appendChild(re)})})});$e(this,"checkout",async()=>{var Q=this.shadow.getElementById("inputFN").value,F=this.shadow.getElementById("inputLN").value,D=this.shadow.getElementById("inputBD").value;this.shadow.getElementById("inputSP").value;var U=this.shadow.getElementById("inputEM").value,O=this.shadow.getElementById("inputCY").value,Y=this.shadow.getElementById("inputZC").value,j=this.shadow.getElementById("inputSA").value,re=this.shadow.getElementById("inputCN"),ge=this.shadow.getElementById("inputST"),ce=re.options[re.selectedIndex].value,ue=ge.options[ge.selectedIndex].id,de=this.shadow.getElementById("cartStatus");de.removeEventListener("click",this.checkout),this.shadow.getElementById("LoadBG").innerHTML='<div class="loader"></div>',this.shadow.getElementById("LoadBG").style.display="grid",setTimeout(()=>{pComplete===!1&&(this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>")},2e4),await commerce$1.checkout.generateToken(currentCart$1.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async Ce=>{commerce$1.checkout.getShippingOptions(Ce.id,{country:ce}).then(async Ie=>{shippingMethodValue===1&&(shippingId=Ie[0].id),shippingMethodValue===3&&(shippingId=Ie[0].id),shippingMethodValue===2&&(shippingId=Ie[1].id);var Fe=`${Q} ${F}`;const Pe=await stripeElements.createPaymentMethod({type:"card",card:card$1}).catch(Ne=>{console.log(`THIS ERROR ${Ne}`),this.shadow.getElementById("LoadBG").style.display="none",de.addEventListener("click",this.checkout)});if(Pe.error){this.shadow.getElementById("LoadBG").style.display="none",console.log(Pe.error.message),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${Pe.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const Ne=await commerce$1.checkout.capture(Ce.id,{customer:{firstname:`${Q}`,lastname:`${F}`,email:`${U}`},extra_fields:{extr_DWy4oG4dY56Jx2:`${j}`},shipping:{name:`${Fe}`,street:`${D}`,town_city:`${O}`,county_state:`${ue}`,postal_zip_code:`${Y}`,country:`${ce}`},fulfillment:{shipping_method:`${shippingId}`},billing:{name:`${Fe}`,street:`${D}`,town_city:`${O}`,county_state:`${ue}`,postal_zip_code:`${Y}`,country:`${ce}`},payment:{gateway:"stripe",stripe:{payment_method_id:Pe.paymentMethod.id}}});this.return,this.purchaseComplete(),this.noti1(),this.shadow.getElementById("noti").innerHTML=`
                <div id="orderConfirmed">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-map.png"/>
                    <h2>Order Placed!</h2>
                    <h3>Thank you for shopping at SCOG\xC9.</h3>
                    <h4>Your order confirmation number is:<br><span class="active" id="confirmNumber">${Ne.customer_reference}</span></h4>
                    <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
                    <br><br>
                    <p>For any questions or inquiries please email <span class="active">INFO@SCOGE.CO</span></p>
                </div>
                `,this.shadow.getElementById("inputCN").innerHTML=`<option value="US" title="US">US</option>
                                          <option value="US" title="US2">US - Next Day Air</option>`,cartEmpty$1=!0,card$1.clear();return}catch(Ne){console.log(Ne),this.shadow.getElementById("LoadBG").addEventListener("click",this.return),this.shadow.getElementById("LoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${Ne.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(Ne);return}finally{}})})});$e(this,"purchaseComplete",()=>{var Q=this.shadow.getElementById("cartStatus");this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("LoadBG").style.display="none",this.shadow.getElementById("cartItems").innerHTML="",this.shadow.getElementById("totalPrice").innerHTML="$0",Q.innerHTML="CART EMPTY",shopPage=5,pComplete=!0,this.shadow.getElementById("addItemButton").innerHTML="< SELECT SIZE",this.shadow.getElementById("shippingButton").addEventListener("click",this.shipping),this.shadow.getElementById("shippingButton").removeEventListener("click",this.return)});this.shadow=this.attachShadow({mode:"open"})}get product(){return this.getAttribute("product")}set product(Q){this.setAttribute("product",Q)}static get observedAttributes(){return["product"]}attributeChangedCallback(Q,F,D){Q==="product"&&this.render()}connectedCallback(){this.render(),this.loadShop(),this.shadow.getElementById("returnButton").addEventListener("click",this.return.bind(this))}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("mobile-shop1",mobileShop1);var trackname="SCOG\xC9 Radio",currentAudio=null,currenttrack=0,trackList=[{artist:"Floating Points - Birth",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Birth.mp3"},{artist:"Erasmo Carlos - \xC9 Preciso Dar Um Jeitp, Meu Amigo",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Erasmo_carlos.mp3"},{artist:"Frankz Gordon - The Art Teacher",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/The-Art-Teacher.mp3"},{artist:"Ave Maria - Claire de Lune",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/ave-maria-claire-de-lune.mp3"},{artist:"Nemzzz - Freestyle",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/nemzzz-lsw-freestyle.mp3"},{artist:"Stevie Wonder - If It's Magic",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/stevie-wonder-if-its-magic.mp3"},{artist:"Michael Giacchino - Stuff We Did",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/stuff-we-did.mp3"},{artist:"Hareton Salvanini - N\xE3o Podes Fugir do Teu Destino",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/destiny.mp3"},{artist:"Nkosazana Daughter - Inhliziyo",link:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/Inhiliziyo.mp3"}];class dtMusic extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get music(){return this.getAttribute("music")}set music(B){this.setAttribute("music",B)}static get observedAttributes(){return["music"]}attributeChangedCallback(B,Q,F){B==="music"&&this.render()}playMusic(){currentAudio===null&&(currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currenttrack++),currentAudio.play(),this.shadow.getElementById("playBtn").style.display="none",this.shadow.getElementById("pauseBtn").style.display="block",this.shadow.getElementById("ntxBtn").style.opacity="1",currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()}),this.shadow.getElementById("cat").style.display="block"}pauseMusic(){currentAudio.pause(),this.shadow.getElementById("playBtn").style.display="block",this.shadow.getElementById("pauseBtn").style.display="none",this.shadow.getElementById("cat").style.display="none"}nextRandomTrack(){currentAudio.pause(),currenttrack=Math.floor(Math.random()*trackList.length),currentAudio=new Audio(trackList[currenttrack].link),currentAudio.play(),this.shadow.getElementById("trackName").innerHTML=trackList[currenttrack].artist,currentAudio.addEventListener("ended",()=>{this.nextRandomTrack()})}connectedCallback(){this.render(),this.shadow.querySelector("#playBtn").addEventListener("click",()=>{this.playMusic(),this.shadow.getElementById("ntxBtn").style.display="block"}),this.shadow.querySelector("#pauseBtn").addEventListener("click",()=>{this.pauseMusic()}),this.shadow.querySelector("#ntxBtn").addEventListener("click",()=>{this.nextRandomTrack()})}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-music",dtMusic);var currentPage$1=1,currentBtsPage$1=1;class dtCampaign extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get campaign(){return this.getAttribute("camp")}set campaign(B){this.setAttribute("camp",B)}static get observedAttributes(){return["camp"]}attributeChangedCallback(B,Q,F){B==="camp"&&this.render()}openCampaign(){document.getElementById("updatesModal").style.display="none",this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="0%",closeInvestor(),clearShop(),clearSettings(),clearFilter()}closeCampaign(){this.shadow.getElementById("yt").src="https://www.youtube.com/embed/WPccRLEvxW4",window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("campaignComp").style.transition="1s all",this.shadow.getElementById("campaignComp").style.right="-70%")}pageScroll(){var B=this.shadow.querySelector("#looks");B.scrollLeft+=1,setTimeout(this.pageScroll.bind(this),10),B.scrollLeft==B.scrollWidth-B.clientWidth&&(B.scrollLeft=0)}nextImage(){currentPage$1>=10&&(currentPage$1=0),currentPage$1++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage$1}.webp`}previousImage(){currentPage$1<=1?currentPage$1=10:currentPage$1--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage$1}.webp`}nextBtsImage(){currentBtsPage$1>=46&&(currentBtsPage$1=0),currentBtsPage$1++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage$1}.webp`}preBtsImage(){currentBtsPage$1<=1?currentBtsPage$1=46:currentBtsPage$1--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage$1}.webp`}connectedCallback(){this.render(),this.pageScroll(),document.getElementById("campaignBut").addEventListener("click",this.openCampaign.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeCampaign.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this))}render(){this.shadow.innerHTML=`
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
              padding-left: 10%;
              padding-right: 19%;
              color: var(--secondary);
              font-family: "Garamond";
              letter-spacing: 1px;
              line-height: 1.5;
              font-size: 18px;
              text-align: justify;
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
                padding-left: 2%;
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
         `}}customElements.define("scoge-camp",dtCampaign);class dtSubscribe extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get subscribe(){return this.getAttribute("subscribe")}set subscribe(B){this.setAttribute("subscribe",B)}get width(){return this.getAttribute("width")}set width(B){this.setAttribute("width",B)}get height(){return this.getAttribute("height")}set height(B){this.setAttribute("height",B)}static get observedAttributes(){return["subscribe","width","height"]}attributeChangedCallback(B,Q,F){B==="subscribe"&&this.render(),(B==="subscribe"||B==="width"||B==="height")&&this.render()}clearform(){this.shadow.getElementById("mce-EMAIL").value=""}connectedCallback(){this.render(),this.shadow.getElementById("sub").addEventListener("click",this.clearform.bind(this))}render(){this.shadow.innerHTML=`
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
              opacity: 100%;
              transition: 0.5s;
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
                <input type="email" id="subscribeInput" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="SIGN-UP TO BE NOTIFIED ON UPDATES." required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_06502830cf2008a1155da093a_467d798f05" tabindex="-1" value=""></div>
                <div class="clear" id="sub"><input type="submit" value="ENTER" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
            </form>
         </div>
         `}}customElements.define("scoge-subscribe",dtSubscribe);class SoundtrackManager{constructor(){this.tracks={},this.trackList=[{key:"menuMove3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav",artist:"Menu",title:"menuMove3"},{key:"menuEnter3",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav",artist:"Menu",title:"menuEnter3"},{key:"menuLoading1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav",artist:"Menu",title:"menuLoading1"},{key:"menuError1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav",artist:"Menu",title:"menuError1"},{key:"menuEntrance1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav",artist:"Menu",title:"menuEntrance1"},{key:"menuExitSys1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav",artist:"Menu",title:"menuExitSys1"},{key:"scoge1",src:"https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav",artist:"Main",title:"scoge1"}],this.trackList.forEach(B=>{this.tracks[B.key]=new Audio(B.src)})}play(B){this.tracks[B].play()}pause(B){this.tracks[B].pause()}stop(B){this.tracks[B].pause(),this.tracks[B].currentTime=0}setVolume(B,Q){this.tracks[B].volume=Q}loop(B){this.tracks[B].loop=!0}}var menuOpen=!0,fullMenuOpen=!0;new SoundtrackManager;class getUniMenu extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get uniMenu(){return this.getAttribute("uniMenu")}set uniMenu(B){this.setAttribute("uniMenu",B)}static get observedAttributes(){return["uniMenu"]}attributeChangedCallback(B,Q,F){B==="uniMenu"&&this.render()}toggleMenu(){const B=this.shadow.querySelector("#uniMenu"),Q=this.shadow.querySelector("#uniMenuIcon"),F=this.shadow.querySelector("#menuItems"),D=this.shadow.querySelector("#menuHeader"),U=this.shadow.querySelector("#refresh");if(menuOpen===!1){Q.style.transform="rotate(180deg)",B.style.height="auto",D.style.height="100%",menuOpen=!0;return}else{D.style.height="100%",setTimeout(()=>{B.style.height="10%"},150),Q.style.transform="rotate(0deg)",F.style.height="0%",F.style.overflow="hidden",menuOpen=!1,U.style.animationPlayState="paused",this.closeFullMenu();return}}openFullMenu(){const B=this.shadow.querySelector("#uniMenu"),Q=this.shadow.querySelector("#fullMenu"),F=this.shadow.querySelector("#fullMenuBG");this.shadow.querySelector("#menuItems");const D=this.shadow.querySelector("#refresh");if(fullMenuOpen===!1){B.style.overflowX="visible",Q.style.width="500px",F.style.transform="scaleX(1)",B.style.borderBottomRightRadius="0px",B.style.borderTopRightRadius="0px",B.style.borderRight="0px solid black",fullMenuOpen=!0,D.style.display="block",D.style.animationPlayState="running";return}}sendFeedback(B){B.preventDefault(),this.shadow.getElementById("feedbackEmailInput").value,this.shadow.getElementById("feedbackInput").value,this.shadow.getElementById("feedbackForm").submit()}closeFullMenu(){const B=this.shadow.querySelector("#uniMenu"),Q=this.shadow.querySelector("#fullMenu"),F=this.shadow.querySelector("#fullMenuBG"),D=this.shadow.querySelector("#refresh");Q.style.width="0px",F.style.transform="scaleX(0)",D.style.animationPlayState="paused",D.style.display="none",setTimeout(()=>{B.style.borderBottomRightRadius="10px",B.style.borderTopRightRadius="10px",B.style.borderRight="2px solid #ff002d"},500),fullMenuOpen=!1}toggleFullScreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}switchMenuTabs(B){var Q=B.target.id,F=B.target.classList[1],D=this.shadow.querySelector("#fm-menu1"),U=this.shadow.querySelector("#fm-menu2"),O=this.shadow.querySelector("#fm-menu3");switch(Q){case"fm-menu1":this.shadow.querySelector(`.${F}1`).style.display="grid",this.shadow.querySelector(`.${F}2`).style.display="none",this.shadow.querySelector(`.${F}3`).style.display="none",D.setAttribute("class",`men-active ${F} selectedMenu`),U.setAttribute("class",`men-active ${F}`),O.setAttribute("class",`men-active ${F}`);break;case"fm-menu2":this.shadow.querySelector(`.${F}1`).style.display="none",this.shadow.querySelector(`.${F}2`).style.display="grid",this.shadow.querySelector(`.${F}3`).style.display="none",D.setAttribute("class",`men-active ${F}`),U.setAttribute("class",`men-active ${F} selectedMenu`),O.setAttribute("class",`men-active ${F}`);break;case"fm-menu3":this.shadow.querySelector(`.${F}1`).style.display="none",this.shadow.querySelector(`.${F}2`).style.display="none",this.shadow.querySelector(`.${F}3`).style.display="grid",D.setAttribute("class",`men-active ${F}`),U.setAttribute("class",`men-active ${F}`),O.setAttribute("class",`men-active ${F} selectedMenu`);break}}connectedCallback(){this.render(),this.shadow.getElementById("fsToggle").addEventListener("click",()=>{this.toggleFullScreen()}),this.shadow.querySelector("#uniMenuIcon").addEventListener("click",()=>{this.toggleMenu()}),this.shadow.querySelector("#uniMenuIcon2").addEventListener("click",()=>{this.closeFullMenu()}),this.tabs=this.shadow.querySelectorAll(".menuTabs"),this.tabs.forEach(B=>{B.id!="uniMenuExit"?B.addEventListener("click",()=>{this.openFullMenu()}):B.addEventListener("click",()=>{this.closeFullMenu(),fullMenuOpen=!1})}),this.headerTabs=this.shadow.querySelectorAll(".men-active"),this.headerTabs.forEach(B=>{B.addEventListener("click",Q=>{this.switchMenuTabs(Q)})}),this.form=this.shadow.querySelector("#feedbackForm"),this.form.addEventListener("submit",B=>{B.preventDefault(),this.shadow.getElementById("menuLoadingScreen2").style.display="grid";let Q=new FormData(this.form);fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:Q,mode:"cors"}).then(F=>F.text()).then(F=>{this.form.reset(),this.shadow.getElementById("menuLoadingScreen2").style.display="none",this.shadow.getElementById("feedbackHeadline").style.color="var(--accent)",this.shadow.getElementById("feedbackHeadline").innerHTML="Outstanding feedback citizen!",setTimeout(()=>{this.shadow.getElementById("feedbackHeadline").style.color="var(--primary)",this.shadow.getElementById("feedbackHeadline").innerHTML="This City needs more people like you!"},3e3)})}),this.shadow.querySelector("#menuMessageBody").addEventListener("click",()=>{var B={target:this.shadow.querySelector("#fm-menu2")},Q={target:this.shadow.querySelector("#menuHelp")};this.shadow.querySelector("#uniMenuHelp").click(B),this.switchMenuTabs(B),window.headlineSwtich(Q)}),this.shadow.querySelector("#switch23").addEventListener("click",()=>{var B={target:this.shadow.querySelector("#fm-menu3")};this.switchMenuTabs(B)}),this.shadow.getElementById("pinMenu").addEventListener("click",()=>{pinMenu()})}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-unimenu",getUniMenu);class scogeUpdates extends HTMLElement{constructor(){super();$e(this,"closeModal",()=>{document.getElementById("updatesModal").style.display="none"});$e(this,"Glow",()=>{this.shadow.getElementById("updatesModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("updatesModal").style.boxShadow="0 0 10px 0 var(--primary)",this.shadow.getElementById("updatesModal").style.border="1px solid var(--primary)"});$e(this,"unGlow",()=>{this.shadow.getElementById("updatesModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("updatesModal").style.boxShadow="0 0 10px 0 var(--accent)",this.shadow.getElementById("updatesModal").style.border="1px solid var(--accent)"});this.shadow=this.attachShadow({mode:"open"})}get updates(){return this.getAttribute("updates")}set updates(Q){this.setAttribute("updates",Q)}static get observedAttributes(){return["updatese"]}attributeChangedCallback(Q,F,D){Q==="updates"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("closeBtn").addEventListener("click",this.closeModal),this.shadow.getElementById("closeBtn").addEventListener("mouseover",this.Glow),this.shadow.getElementById("closeBtn").addEventListener("mouseout",this.unGlow)}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-updates",scogeUpdates);class scogeRsvp extends HTMLElement{constructor(){super();$e(this,"closeModal",()=>{document.getElementById("rsvpModal").style.display="none"});$e(this,"Glow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--primary)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--primary)"});$e(this,"unGlow",()=>{this.shadow.getElementById("rsvpModal").style.transition="all 0.3s ease-in-out",this.shadow.getElementById("rsvpModal").style.boxShadow="0 0 10px 0 var(--accent)",this.shadow.getElementById("rsvpModal").style.border="1px solid var(--accent)"});this.shadow=this.attachShadow({mode:"open"})}get rsvps(){return this.getAttribute("rsvp")}set rsvps(Q){this.setAttribute("rsvp",Q)}static get observedAttributes(){return["rsvp"]}attributeChangedCallback(Q,F,D){Q==="rsvp"&&this.render()}sendFeedback(Q){Q.preventDefault(),this.shadow.getElementById("rsvpForm").submit()}connectedCallback(){this.render(),this.shadow.getElementById("closeBtn").addEventListener("click",this.closeModal),this.shadow.getElementById("closeBtn").addEventListener("mouseover",this.Glow),this.shadow.getElementById("closeBtn").addEventListener("mouseout",this.unGlow),this.form=this.shadow.querySelector("#rsvpForm"),this.form.addEventListener("submit",Q=>{Q.preventDefault(),this.shadow.getElementById("menuLoadingScreen").style.display="grid";let F=this.shadow.querySelector("input[name='Guest']:checked"),D=new FormData(this.form);D.append("Guest",F.value),fetch("https://script.google.com/macros/s/AKfycbyDZnFn4Yy7zbQM1KB7uXDt3_WUmI7TuUT9b-Iips7lHf0mfOGs9s-B4V1M80LznyuIoA/exec",{method:"POST",body:D,mode:"cors"}).then(U=>U.text()).then(U=>{this.shadow.getElementById("menuLoadingScreen").style.display="none",this.form.reset(),this.shadow.getElementById("rightPan").innerHTML=`
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
         `}}customElements.define("scoge-rsvp",scogeRsvp);var currentPage=1,currentBtsPage=1,inventoryTotal=2e3,lexBio="Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOG\xC9 reach its full potential.",ogeBio="Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery.";class dtInvestors extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get invest(){return this.getAttribute("invest")}set invest(B){this.setAttribute("invest",B)}static get observedAttributes(){return["invest"]}attributeChangedCallback(B,Q,F){B==="invest"&&this.render()}scrollToMenu(){var B=this.shadow.querySelectorAll(".menu-item");B.forEach(Q=>{Q.addEventListener("click",F=>{var D=F.target.getAttribute("id"),U=this.shadow.getElementById(D.replace("Menu","Sect")),O=U.offsetTop,Y=O-200;D==="dataMenu"&&(Y=O-0),D==="aboutMenu"&&(Y=O-50),this.shadow.getElementById("scrollBody").scrollTo({top:Y,behavior:"smooth"}),B.forEach(j=>{j.style.color="var(--primary)",j.style.borderBottom="var(--primary) 1px solid"}),F.target.style.color="var(--secondary)",F.target.style.borderBottom="var(--secondary) 1px solid"}),this.shadow.getElementById("scrollBody").addEventListener("scroll",()=>{var F=this.shadow.getElementById("scrollBody").scrollTop;B.forEach(D=>{var U=D.getAttribute("id"),O=this.shadow.getElementById(U.replace("Menu","Sect")),Y=O.offsetTop;F>=Y-200&&(B.forEach(j=>{j.style.color="var(--primary)",j.style.borderBottom="var(--primary) 1px solid"}),D.style.color="var(--secondary)",D.style.borderBottom="var(--secondary) 1px solid"),F>=this.shadow.getElementById("scrollBody").scrollHeight-this.shadow.getElementById("scrollBody").clientHeight-100&&(B.forEach(j=>{j.style.color="var(--primary)",j.style.borderBottom="var(--primary) 1px solid"}),this.shadow.getElementById("contactMenu").style.color="var(--secondary)",this.shadow.getElementById("contactMenu").style.borderBottom="var(--secondary) 1px solid")})})})}openInvestor(){this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="0%",clearShop(),clearSettings(),clearFilter()}closeInvestor(){window.matchMedia("(max-width: 768px)").matches?(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-100%",window.isMobile=!0):(this.shadow.getElementById("investorComp").style.transition="1s all",this.shadow.getElementById("investorComp").style.right="-70%")}nextImage(){currentPage>=2&&(currentPage=0),currentPage++,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}previousImage(){currentPage<=1?currentPage=2:currentPage--,this.shadow.getElementById("gImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`}nextBtsImage(){currentBtsPage>=9&&(currentBtsPage=0),currentBtsPage++,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}preBtsImage(){currentBtsPage<=1?currentBtsPage=9:currentBtsPage--,this.shadow.getElementById("btsImg").src=`https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`}slidersTotal(){var B=this.shadow.getElementById("avgRetailSlider").value,Q=this.shadow.getElementById("dtcQtySlider").value,F=this.shadow.getElementById("accountsSlider").value,D=this.shadow.getElementById("wsOrderSlider").value,U=B*Q+B/2*(D*F);this.shadow.getElementById("finalTotal").innerHTML=U.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}sliders(){this.shadow.getElementById("budgetSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("budNum").innerHTML=this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("dcqNum").innerHTML=Math.round(inventoryTotal),this.shadow.getElementById("wqtyNum").innerHTML=Math.round(inventoryTotal)}.bind(this)),this.shadow.getElementById("avgRetailSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("avrNum").innerHTML=this.shadow.getElementById("avgRetailSlider").value}.bind(this)),this.shadow.getElementById("avgPCSlider").addEventListener("input",function(){this.slidersTotal(),inventoryTotal=this.shadow.getElementById("budgetSlider").value/this.shadow.getElementById("avgPCSlider").value,console.log(inventoryTotal),this.shadow.getElementById("dtcQtySlider").max=inventoryTotal,this.shadow.getElementById("wsOrderSlider").max=inventoryTotal,this.shadow.getElementById("avpNum").innerHTML=this.shadow.getElementById("avgPCSlider").value}.bind(this)),this.shadow.getElementById("dtcQtySlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this)),this.shadow.getElementById("accountsSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("waNum").innerHTML=this.shadow.getElementById("accountsSlider").value}.bind(this)),this.shadow.getElementById("wsOrderSlider").addEventListener("input",function(){this.slidersTotal(),this.shadow.getElementById("wrperSlider").value=0,this.shadow.getElementById("wrP1").innerHTML="-",this.shadow.getElementById("wrP2").innerHTML="-",this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("wsOrderSlider").value}.bind(this)),this.shadow.getElementById("wrperSlider").addEventListener("input",function(){this.slidersTotal();var B=this.shadow.getElementById("wrperSlider").value/2+50,Q=this.shadow.getElementById("wrperSlider").value/2-50;this.shadow.getElementById("wrP1").innerHTML=Math.round(Math.abs(Q)),this.shadow.getElementById("wrP2").innerHTML=+Math.round(B),this.shadow.getElementById("wsOrderSlider").value=Math.round(inventoryTotal*(Math.abs(Q)/100)),this.shadow.getElementById("wqtyNum").innerHTML=this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,","),this.shadow.getElementById("dtcQtySlider").value=Math.round(inventoryTotal*(B/100)),this.shadow.getElementById("dcqNum").innerHTML=this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.bind(this))}team(){this.shadow.getElementById("teamMain").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Starnilas Oge",this.shadow.getElementById("memberProf").innerHTML="Founder & Creative Director",this.shadow.getElementById("memberBio").innerHTML=ogeBio}.bind(this)),this.shadow.getElementById("team2").addEventListener("click",function(){this.shadow.getElementById("memberName").innerHTML="Lex Fenwick",this.shadow.getElementById("memberProf").innerHTML="The Dow Jones, WSJ",this.shadow.getElementById("memberBio").innerHTML=lexBio}.bind(this))}connectedCallback(){this.render(),document.getElementById("investBut").addEventListener("click",this.openInvestor.bind(this)),this.shadow.getElementById("campIcon").addEventListener("click",this.closeInvestor.bind(this)),this.shadow.getElementById("nextGalleryImg").addEventListener("click",this.nextImage.bind(this)),this.shadow.getElementById("preGalleryImg").addEventListener("click",this.previousImage.bind(this)),this.shadow.getElementById("nextBtsImg").addEventListener("click",this.nextBtsImage.bind(this)),this.shadow.getElementById("preBtsImg").addEventListener("click",this.preBtsImage.bind(this)),this.sliders(),this.team(),this.scrollToMenu()}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("scoge-investors",dtInvestors);class dialogueBox extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get dialogue(){return this.getAttribute("dialogue")}set dialogue(B){this.setAttribute("dialogue",B)}static get observedAttributes(){return["dialogue"]}attributeChangedCallback(B,Q,F){B==="dialogue"&&this.render()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
           `}}customElements.define("scoge-dialogue",dialogueBox);const idlFactory=({IDL:w})=>{const B=w.Variant({UnauthorizedOperator:w.Null,SelfTransfer:w.Null,TokenNotFound:w.Null,UnauthorizedOwner:w.Null,NotFound:w.Null,SelfApprove:w.Null,OperatorNotFound:w.Null,ExistedNFT:w.Null,OwnerNotFound:w.Null,Other:w.Text}),Q=w.Variant({ok:w.Nat,err:B}),F=w.Record({logo:w.Opt(w.Text),name:w.Opt(w.Text),created_at:w.Nat64,upgraded_at:w.Nat64,custodians:w.Vec(w.Principal),symbol:w.Opt(w.Text)}),D=w.Record({xp:w.Opt(w.Nat64),earthImage:w.Opt(w.Vec(w.Nat8)),bankooText:w.Opt(w.Vec(w.Text)),mental:w.Opt(w.Nat64),powerUps:w.Opt(w.Vec(w.Nat64)),styles:w.Opt(w.Vec(w.Text)),alias:w.Text,notiOn:w.Opt(w.Bool),netClass:w.Opt(w.Text),data:w.Opt(w.Vec(w.Nat8)),fsOn:w.Opt(w.Bool),rank:w.Nat64,network:w.Opt(w.Vec(w.Text)),ancestorsNames:w.Opt(w.Vec(w.Text)),email:w.Text,bankooImage:w.Opt(w.Vec(w.Nat8)),sight:w.Opt(w.Nat64),speed:w.Opt(w.Nat64),discoveredProgress:w.Opt(w.Float64),story:w.Opt(w.Text),imageURI:w.Text,progress:w.Nat64,musicLevel:w.Opt(w.Float64),domains:w.Opt(w.Vec(w.Nat64)),landRank:w.Nat64,pillType:w.Text,category:w.Text,landNumber:w.Nat64,endurance:w.Opt(w.Float64),power:w.Opt(w.Nat64),physical:w.Opt(w.Nat64),identifier:w.Text,videoURI:w.Opt(w.Text),ancestorsImages:w.Opt(w.Vec(w.Nat8)),soundLevel:w.Opt(w.Float64),earthText:w.Opt(w.Vec(w.Text)),linked:w.Opt(w.Bool),playerLocation:w.Nat64,health:w.Opt(w.Nat64),discovered:w.Opt(w.Vec(w.Text))}),U=w.Variant({ok:w.Opt(w.Principal),err:B}),O=w.Record({transferred_at:w.Opt(w.Nat64),transferred_by:w.Opt(w.Principal),owner:w.Opt(w.Principal),operator:w.Opt(w.Principal),approved_at:w.Opt(w.Nat64),approved_by:w.Opt(w.Principal),properties:w.Vec(D),is_burned:w.Bool,token_identifier:w.Nat,burned_at:w.Opt(w.Nat64),burned_by:w.Opt(w.Principal),minted_at:w.Nat64,minted_by:w.Principal}),Y=w.Variant({ok:w.Vec(O),err:B}),j=w.Record({cycles:w.Nat,total_transactions:w.Nat,total_unique_holders:w.Nat,total_supply:w.Nat}),re=w.Record({Burn:w.Null,Mint:w.Null,Approval:w.Null,TransactionHistory:w.Null}),ge=w.Variant({ok:O,err:B});return w.Service({adminUser:w.Func([],[w.Text],["query"]),balanceOf:w.Func([w.Principal],[Q],["query"]),custodians:w.Func([],[w.Vec(w.Principal)],["query"]),cycles:w.Func([],[w.Nat],["query"]),logo:w.Func([],[w.Opt(w.Text)],["query"]),metadata:w.Func([],[F],["query"]),mint:w.Func([w.Principal,w.Nat,w.Vec(D)],[Q],[]),name:w.Func([],[w.Opt(w.Text)],["query"]),operatorOf:w.Func([w.Nat],[U],["query"]),operatorTokenMetadata:w.Func([w.Principal],[Y],["query"]),ownerOf:w.Func([w.Nat],[U],["query"]),ownerTokenMetadata:w.Func([w.Principal],[Y],["query"]),setCustodians:w.Func([w.Vec(w.Principal)],[],[]),setLogo:w.Func([w.Text],[],[]),setName:w.Func([w.Text],[],[]),setSymbol:w.Func([w.Text],[],[]),stats:w.Func([],[j],["query"]),supportedInterfaces:w.Func([],[w.Vec(re)],["query"]),symbol:w.Func([],[w.Opt(w.Text)],["query"]),tokenMetadata:w.Func([w.Nat],[ge],["query"]),totalSupply:w.Func([],[w.Nat],["query"]),totalUniqueHolders:w.Func([],[w.Nat],["query"])})};var buffer={},base64Js={};base64Js.byteLength=byteLength;base64Js.toByteArray=toByteArray;base64Js.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr=typeof Uint8Array!="undefined"?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;revLookup["-".charCodeAt(0)]=62;revLookup["_".charCodeAt(0)]=63;function getLens(w){var B=w.length;if(B%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var Q=w.indexOf("=");Q===-1&&(Q=B);var F=Q===B?0:4-Q%4;return[Q,F]}function byteLength(w){var B=getLens(w),Q=B[0],F=B[1];return(Q+F)*3/4-F}function _byteLength(w,B,Q){return(B+Q)*3/4-Q}function toByteArray(w){var B,Q=getLens(w),F=Q[0],D=Q[1],U=new Arr(_byteLength(w,F,D)),O=0,Y=D>0?F-4:F,j;for(j=0;j<Y;j+=4)B=revLookup[w.charCodeAt(j)]<<18|revLookup[w.charCodeAt(j+1)]<<12|revLookup[w.charCodeAt(j+2)]<<6|revLookup[w.charCodeAt(j+3)],U[O++]=B>>16&255,U[O++]=B>>8&255,U[O++]=B&255;return D===2&&(B=revLookup[w.charCodeAt(j)]<<2|revLookup[w.charCodeAt(j+1)]>>4,U[O++]=B&255),D===1&&(B=revLookup[w.charCodeAt(j)]<<10|revLookup[w.charCodeAt(j+1)]<<4|revLookup[w.charCodeAt(j+2)]>>2,U[O++]=B>>8&255,U[O++]=B&255),U}function tripletToBase64(w){return lookup[w>>18&63]+lookup[w>>12&63]+lookup[w>>6&63]+lookup[w&63]}function encodeChunk(w,B,Q){for(var F,D=[],U=B;U<Q;U+=3)F=(w[U]<<16&16711680)+(w[U+1]<<8&65280)+(w[U+2]&255),D.push(tripletToBase64(F));return D.join("")}function fromByteArray(w){for(var B,Q=w.length,F=Q%3,D=[],U=16383,O=0,Y=Q-F;O<Y;O+=U)D.push(encodeChunk(w,O,O+U>Y?Y:O+U));return F===1?(B=w[Q-1],D.push(lookup[B>>2]+lookup[B<<4&63]+"==")):F===2&&(B=(w[Q-2]<<8)+w[Q-1],D.push(lookup[B>>10]+lookup[B>>4&63]+lookup[B<<2&63]+"=")),D.join("")}var ieee754$1={};ieee754$1.read=function(w,B,Q,F,D){var U,O,Y=D*8-F-1,j=(1<<Y)-1,re=j>>1,ge=-7,ce=Q?D-1:0,ue=Q?-1:1,de=w[B+ce];for(ce+=ue,U=de&(1<<-ge)-1,de>>=-ge,ge+=Y;ge>0;U=U*256+w[B+ce],ce+=ue,ge-=8);for(O=U&(1<<-ge)-1,U>>=-ge,ge+=F;ge>0;O=O*256+w[B+ce],ce+=ue,ge-=8);if(U===0)U=1-re;else{if(U===j)return O?NaN:(de?-1:1)*(1/0);O=O+Math.pow(2,F),U=U-re}return(de?-1:1)*O*Math.pow(2,U-F)};ieee754$1.write=function(w,B,Q,F,D,U){var O,Y,j,re=U*8-D-1,ge=(1<<re)-1,ce=ge>>1,ue=D===23?Math.pow(2,-24)-Math.pow(2,-77):0,de=F?0:U-1,Ce=F?1:-1,Ie=B<0||B===0&&1/B<0?1:0;for(B=Math.abs(B),isNaN(B)||B===1/0?(Y=isNaN(B)?1:0,O=ge):(O=Math.floor(Math.log(B)/Math.LN2),B*(j=Math.pow(2,-O))<1&&(O--,j*=2),O+ce>=1?B+=ue/j:B+=ue*Math.pow(2,1-ce),B*j>=2&&(O++,j/=2),O+ce>=ge?(Y=0,O=ge):O+ce>=1?(Y=(B*j-1)*Math.pow(2,D),O=O+ce):(Y=B*Math.pow(2,ce-1)*Math.pow(2,D),O=0));D>=8;w[Q+de]=Y&255,de+=Ce,Y/=256,D-=8);for(O=O<<D|Y,re+=D;re>0;w[Q+de]=O&255,de+=Ce,O/=256,re-=8);w[Q+de-Ce]|=Ie*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(w){var B=base64Js,Q=ieee754$1,F=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;w.Buffer=Y,w.SlowBuffer=Ne,w.INSPECT_MAX_BYTES=50;var D=2147483647;w.kMaxLength=D,Y.TYPED_ARRAY_SUPPORT=U(),!Y.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function U(){try{var q=new Uint8Array(1),L={foo:function(){return 42}};return Object.setPrototypeOf(L,Uint8Array.prototype),Object.setPrototypeOf(q,L),q.foo()===42}catch{return!1}}Object.defineProperty(Y.prototype,"parent",{enumerable:!0,get:function(){if(!!Y.isBuffer(this))return this.buffer}}),Object.defineProperty(Y.prototype,"offset",{enumerable:!0,get:function(){if(!!Y.isBuffer(this))return this.byteOffset}});function O(q){if(q>D)throw new RangeError('The value "'+q+'" is invalid for option "size"');var L=new Uint8Array(q);return Object.setPrototypeOf(L,Y.prototype),L}function Y(q,L,G){if(typeof q=="number"){if(typeof L=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ce(q)}return j(q,L,G)}Y.poolSize=8192;function j(q,L,G){if(typeof q=="string")return ue(q,L);if(ArrayBuffer.isView(q))return Ce(q);if(q==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof q);if(ae(q,ArrayBuffer)||q&&ae(q.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ae(q,SharedArrayBuffer)||q&&ae(q.buffer,SharedArrayBuffer)))return Ie(q,L,G);if(typeof q=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var J=q.valueOf&&q.valueOf();if(J!=null&&J!==q)return Y.from(J,L,G);var W=Fe(q);if(W)return W;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof q[Symbol.toPrimitive]=="function")return Y.from(q[Symbol.toPrimitive]("string"),L,G);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof q)}Y.from=function(q,L,G){return j(q,L,G)},Object.setPrototypeOf(Y.prototype,Uint8Array.prototype),Object.setPrototypeOf(Y,Uint8Array);function re(q){if(typeof q!="number")throw new TypeError('"size" argument must be of type number');if(q<0)throw new RangeError('The value "'+q+'" is invalid for option "size"')}function ge(q,L,G){return re(q),q<=0?O(q):L!==void 0?typeof G=="string"?O(q).fill(L,G):O(q).fill(L):O(q)}Y.alloc=function(q,L,G){return ge(q,L,G)};function ce(q){return re(q),O(q<0?0:Pe(q)|0)}Y.allocUnsafe=function(q){return ce(q)},Y.allocUnsafeSlow=function(q){return ce(q)};function ue(q,L){if((typeof L!="string"||L==="")&&(L="utf8"),!Y.isEncoding(L))throw new TypeError("Unknown encoding: "+L);var G=it(q,L)|0,J=O(G),W=J.write(q,L);return W!==G&&(J=J.slice(0,W)),J}function de(q){for(var L=q.length<0?0:Pe(q.length)|0,G=O(L),J=0;J<L;J+=1)G[J]=q[J]&255;return G}function Ce(q){if(ae(q,Uint8Array)){var L=new Uint8Array(q);return Ie(L.buffer,L.byteOffset,L.byteLength)}return de(q)}function Ie(q,L,G){if(L<0||q.byteLength<L)throw new RangeError('"offset" is outside of buffer bounds');if(q.byteLength<L+(G||0))throw new RangeError('"length" is outside of buffer bounds');var J;return L===void 0&&G===void 0?J=new Uint8Array(q):G===void 0?J=new Uint8Array(q,L):J=new Uint8Array(q,L,G),Object.setPrototypeOf(J,Y.prototype),J}function Fe(q){if(Y.isBuffer(q)){var L=Pe(q.length)|0,G=O(L);return G.length===0||q.copy(G,0,0,L),G}if(q.length!==void 0)return typeof q.length!="number"||Ae(q.length)?O(0):de(q);if(q.type==="Buffer"&&Array.isArray(q.data))return de(q.data)}function Pe(q){if(q>=D)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+D.toString(16)+" bytes");return q|0}function Ne(q){return+q!=q&&(q=0),Y.alloc(+q)}Y.isBuffer=function(L){return L!=null&&L._isBuffer===!0&&L!==Y.prototype},Y.compare=function(L,G){if(ae(L,Uint8Array)&&(L=Y.from(L,L.offset,L.byteLength)),ae(G,Uint8Array)&&(G=Y.from(G,G.offset,G.byteLength)),!Y.isBuffer(L)||!Y.isBuffer(G))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(L===G)return 0;for(var J=L.length,W=G.length,ie=0,le=Math.min(J,W);ie<le;++ie)if(L[ie]!==G[ie]){J=L[ie],W=G[ie];break}return J<W?-1:W<J?1:0},Y.isEncoding=function(L){switch(String(L).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Y.concat=function(L,G){if(!Array.isArray(L))throw new TypeError('"list" argument must be an Array of Buffers');if(L.length===0)return Y.alloc(0);var J;if(G===void 0)for(G=0,J=0;J<L.length;++J)G+=L[J].length;var W=Y.allocUnsafe(G),ie=0;for(J=0;J<L.length;++J){var le=L[J];if(ae(le,Uint8Array))ie+le.length>W.length?Y.from(le).copy(W,ie):Uint8Array.prototype.set.call(W,le,ie);else if(Y.isBuffer(le))le.copy(W,ie);else throw new TypeError('"list" argument must be an Array of Buffers');ie+=le.length}return W};function it(q,L){if(Y.isBuffer(q))return q.length;if(ArrayBuffer.isView(q)||ae(q,ArrayBuffer))return q.byteLength;if(typeof q!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof q);var G=q.length,J=arguments.length>2&&arguments[2]===!0;if(!J&&G===0)return 0;for(var W=!1;;)switch(L){case"ascii":case"latin1":case"binary":return G;case"utf8":case"utf-8":return ve(q).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G*2;case"hex":return G>>>1;case"base64":return te(q).length;default:if(W)return J?-1:ve(q).length;L=(""+L).toLowerCase(),W=!0}}Y.byteLength=it;function ot(q,L,G){var J=!1;if((L===void 0||L<0)&&(L=0),L>this.length||((G===void 0||G>this.length)&&(G=this.length),G<=0)||(G>>>=0,L>>>=0,G<=L))return"";for(q||(q="utf8");;)switch(q){case"hex":return Se(this,L,G);case"utf8":case"utf-8":return Ze(this,L,G);case"ascii":return pe(this,L,G);case"latin1":case"binary":return ye(this,L,G);case"base64":return Oe(this,L,G);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qe(this,L,G);default:if(J)throw new TypeError("Unknown encoding: "+q);q=(q+"").toLowerCase(),J=!0}}Y.prototype._isBuffer=!0;function Ke(q,L,G){var J=q[L];q[L]=q[G],q[G]=J}Y.prototype.swap16=function(){var L=this.length;if(L%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var G=0;G<L;G+=2)Ke(this,G,G+1);return this},Y.prototype.swap32=function(){var L=this.length;if(L%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var G=0;G<L;G+=4)Ke(this,G,G+3),Ke(this,G+1,G+2);return this},Y.prototype.swap64=function(){var L=this.length;if(L%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var G=0;G<L;G+=8)Ke(this,G,G+7),Ke(this,G+1,G+6),Ke(this,G+2,G+5),Ke(this,G+3,G+4);return this},Y.prototype.toString=function(){var L=this.length;return L===0?"":arguments.length===0?Ze(this,0,L):ot.apply(this,arguments)},Y.prototype.toLocaleString=Y.prototype.toString,Y.prototype.equals=function(L){if(!Y.isBuffer(L))throw new TypeError("Argument must be a Buffer");return this===L?!0:Y.compare(this,L)===0},Y.prototype.inspect=function(){var L="",G=w.INSPECT_MAX_BYTES;return L=this.toString("hex",0,G).replace(/(.{2})/g,"$1 ").trim(),this.length>G&&(L+=" ... "),"<Buffer "+L+">"},F&&(Y.prototype[F]=Y.prototype.inspect),Y.prototype.compare=function(L,G,J,W,ie){if(ae(L,Uint8Array)&&(L=Y.from(L,L.offset,L.byteLength)),!Y.isBuffer(L))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof L);if(G===void 0&&(G=0),J===void 0&&(J=L?L.length:0),W===void 0&&(W=0),ie===void 0&&(ie=this.length),G<0||J>L.length||W<0||ie>this.length)throw new RangeError("out of range index");if(W>=ie&&G>=J)return 0;if(W>=ie)return-1;if(G>=J)return 1;if(G>>>=0,J>>>=0,W>>>=0,ie>>>=0,this===L)return 0;for(var le=ie-W,fe=J-G,we=Math.min(le,fe),Me=this.slice(W,ie),De=L.slice(G,J),me=0;me<we;++me)if(Me[me]!==De[me]){le=Me[me],fe=De[me];break}return le<fe?-1:fe<le?1:0};function ke(q,L,G,J,W){if(q.length===0)return-1;if(typeof G=="string"?(J=G,G=0):G>2147483647?G=2147483647:G<-2147483648&&(G=-2147483648),G=+G,Ae(G)&&(G=W?0:q.length-1),G<0&&(G=q.length+G),G>=q.length){if(W)return-1;G=q.length-1}else if(G<0)if(W)G=0;else return-1;if(typeof L=="string"&&(L=Y.from(L,J)),Y.isBuffer(L))return L.length===0?-1:be(q,L,G,J,W);if(typeof L=="number")return L=L&255,typeof Uint8Array.prototype.indexOf=="function"?W?Uint8Array.prototype.indexOf.call(q,L,G):Uint8Array.prototype.lastIndexOf.call(q,L,G):be(q,[L],G,J,W);throw new TypeError("val must be string, number or Buffer")}function be(q,L,G,J,W){var ie=1,le=q.length,fe=L.length;if(J!==void 0&&(J=String(J).toLowerCase(),J==="ucs2"||J==="ucs-2"||J==="utf16le"||J==="utf-16le")){if(q.length<2||L.length<2)return-1;ie=2,le/=2,fe/=2,G/=2}function we(et,lt){return ie===1?et[lt]:et.readUInt16BE(lt*ie)}var Me;if(W){var De=-1;for(Me=G;Me<le;Me++)if(we(q,Me)===we(L,De===-1?0:Me-De)){if(De===-1&&(De=Me),Me-De+1===fe)return De*ie}else De!==-1&&(Me-=Me-De),De=-1}else for(G+fe>le&&(G=le-fe),Me=G;Me>=0;Me--){for(var me=!0,Ge=0;Ge<fe;Ge++)if(we(q,Me+Ge)!==we(L,Ge)){me=!1;break}if(me)return Me}return-1}Y.prototype.includes=function(L,G,J){return this.indexOf(L,G,J)!==-1},Y.prototype.indexOf=function(L,G,J){return ke(this,L,G,J,!0)},Y.prototype.lastIndexOf=function(L,G,J){return ke(this,L,G,J,!1)};function Ye(q,L,G,J){G=Number(G)||0;var W=q.length-G;J?(J=Number(J),J>W&&(J=W)):J=W;var ie=L.length;J>ie/2&&(J=ie/2);for(var le=0;le<J;++le){var fe=parseInt(L.substr(le*2,2),16);if(Ae(fe))return le;q[G+le]=fe}return le}function Je(q,L,G,J){return ne(ve(L,q.length-G),q,G,J)}function Ee(q,L,G,J){return ne(xe(L),q,G,J)}function ze(q,L,G,J){return ne(te(L),q,G,J)}function qe(q,L,G,J){return ne(X(L,q.length-G),q,G,J)}Y.prototype.write=function(L,G,J,W){if(G===void 0)W="utf8",J=this.length,G=0;else if(J===void 0&&typeof G=="string")W=G,J=this.length,G=0;else if(isFinite(G))G=G>>>0,isFinite(J)?(J=J>>>0,W===void 0&&(W="utf8")):(W=J,J=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var ie=this.length-G;if((J===void 0||J>ie)&&(J=ie),L.length>0&&(J<0||G<0)||G>this.length)throw new RangeError("Attempt to write outside buffer bounds");W||(W="utf8");for(var le=!1;;)switch(W){case"hex":return Ye(this,L,G,J);case"utf8":case"utf-8":return Je(this,L,G,J);case"ascii":case"latin1":case"binary":return Ee(this,L,G,J);case"base64":return ze(this,L,G,J);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qe(this,L,G,J);default:if(le)throw new TypeError("Unknown encoding: "+W);W=(""+W).toLowerCase(),le=!0}},Y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Oe(q,L,G){return L===0&&G===q.length?B.fromByteArray(q):B.fromByteArray(q.slice(L,G))}function Ze(q,L,G){G=Math.min(q.length,G);for(var J=[],W=L;W<G;){var ie=q[W],le=null,fe=ie>239?4:ie>223?3:ie>191?2:1;if(W+fe<=G){var we,Me,De,me;switch(fe){case 1:ie<128&&(le=ie);break;case 2:we=q[W+1],(we&192)===128&&(me=(ie&31)<<6|we&63,me>127&&(le=me));break;case 3:we=q[W+1],Me=q[W+2],(we&192)===128&&(Me&192)===128&&(me=(ie&15)<<12|(we&63)<<6|Me&63,me>2047&&(me<55296||me>57343)&&(le=me));break;case 4:we=q[W+1],Me=q[W+2],De=q[W+3],(we&192)===128&&(Me&192)===128&&(De&192)===128&&(me=(ie&15)<<18|(we&63)<<12|(Me&63)<<6|De&63,me>65535&&me<1114112&&(le=me))}}le===null?(le=65533,fe=1):le>65535&&(le-=65536,J.push(le>>>10&1023|55296),le=56320|le&1023),J.push(le),W+=fe}return he(J)}var Be=4096;function he(q){var L=q.length;if(L<=Be)return String.fromCharCode.apply(String,q);for(var G="",J=0;J<L;)G+=String.fromCharCode.apply(String,q.slice(J,J+=Be));return G}function pe(q,L,G){var J="";G=Math.min(q.length,G);for(var W=L;W<G;++W)J+=String.fromCharCode(q[W]&127);return J}function ye(q,L,G){var J="";G=Math.min(q.length,G);for(var W=L;W<G;++W)J+=String.fromCharCode(q[W]);return J}function Se(q,L,G){var J=q.length;(!L||L<0)&&(L=0),(!G||G<0||G>J)&&(G=J);for(var W="",ie=L;ie<G;++ie)W+=oe[q[ie]];return W}function Qe(q,L,G){for(var J=q.slice(L,G),W="",ie=0;ie<J.length-1;ie+=2)W+=String.fromCharCode(J[ie]+J[ie+1]*256);return W}Y.prototype.slice=function(L,G){var J=this.length;L=~~L,G=G===void 0?J:~~G,L<0?(L+=J,L<0&&(L=0)):L>J&&(L=J),G<0?(G+=J,G<0&&(G=0)):G>J&&(G=J),G<L&&(G=L);var W=this.subarray(L,G);return Object.setPrototypeOf(W,Y.prototype),W};function Re(q,L,G){if(q%1!==0||q<0)throw new RangeError("offset is not uint");if(q+L>G)throw new RangeError("Trying to access beyond buffer length")}Y.prototype.readUintLE=Y.prototype.readUIntLE=function(L,G,J){L=L>>>0,G=G>>>0,J||Re(L,G,this.length);for(var W=this[L],ie=1,le=0;++le<G&&(ie*=256);)W+=this[L+le]*ie;return W},Y.prototype.readUintBE=Y.prototype.readUIntBE=function(L,G,J){L=L>>>0,G=G>>>0,J||Re(L,G,this.length);for(var W=this[L+--G],ie=1;G>0&&(ie*=256);)W+=this[L+--G]*ie;return W},Y.prototype.readUint8=Y.prototype.readUInt8=function(L,G){return L=L>>>0,G||Re(L,1,this.length),this[L]},Y.prototype.readUint16LE=Y.prototype.readUInt16LE=function(L,G){return L=L>>>0,G||Re(L,2,this.length),this[L]|this[L+1]<<8},Y.prototype.readUint16BE=Y.prototype.readUInt16BE=function(L,G){return L=L>>>0,G||Re(L,2,this.length),this[L]<<8|this[L+1]},Y.prototype.readUint32LE=Y.prototype.readUInt32LE=function(L,G){return L=L>>>0,G||Re(L,4,this.length),(this[L]|this[L+1]<<8|this[L+2]<<16)+this[L+3]*16777216},Y.prototype.readUint32BE=Y.prototype.readUInt32BE=function(L,G){return L=L>>>0,G||Re(L,4,this.length),this[L]*16777216+(this[L+1]<<16|this[L+2]<<8|this[L+3])},Y.prototype.readIntLE=function(L,G,J){L=L>>>0,G=G>>>0,J||Re(L,G,this.length);for(var W=this[L],ie=1,le=0;++le<G&&(ie*=256);)W+=this[L+le]*ie;return ie*=128,W>=ie&&(W-=Math.pow(2,8*G)),W},Y.prototype.readIntBE=function(L,G,J){L=L>>>0,G=G>>>0,J||Re(L,G,this.length);for(var W=G,ie=1,le=this[L+--W];W>0&&(ie*=256);)le+=this[L+--W]*ie;return ie*=128,le>=ie&&(le-=Math.pow(2,8*G)),le},Y.prototype.readInt8=function(L,G){return L=L>>>0,G||Re(L,1,this.length),this[L]&128?(255-this[L]+1)*-1:this[L]},Y.prototype.readInt16LE=function(L,G){L=L>>>0,G||Re(L,2,this.length);var J=this[L]|this[L+1]<<8;return J&32768?J|4294901760:J},Y.prototype.readInt16BE=function(L,G){L=L>>>0,G||Re(L,2,this.length);var J=this[L+1]|this[L]<<8;return J&32768?J|4294901760:J},Y.prototype.readInt32LE=function(L,G){return L=L>>>0,G||Re(L,4,this.length),this[L]|this[L+1]<<8|this[L+2]<<16|this[L+3]<<24},Y.prototype.readInt32BE=function(L,G){return L=L>>>0,G||Re(L,4,this.length),this[L]<<24|this[L+1]<<16|this[L+2]<<8|this[L+3]},Y.prototype.readFloatLE=function(L,G){return L=L>>>0,G||Re(L,4,this.length),Q.read(this,L,!0,23,4)},Y.prototype.readFloatBE=function(L,G){return L=L>>>0,G||Re(L,4,this.length),Q.read(this,L,!1,23,4)},Y.prototype.readDoubleLE=function(L,G){return L=L>>>0,G||Re(L,8,this.length),Q.read(this,L,!0,52,8)},Y.prototype.readDoubleBE=function(L,G){return L=L>>>0,G||Re(L,8,this.length),Q.read(this,L,!1,52,8)};function Te(q,L,G,J,W,ie){if(!Y.isBuffer(q))throw new TypeError('"buffer" argument must be a Buffer instance');if(L>W||L<ie)throw new RangeError('"value" argument is out of bounds');if(G+J>q.length)throw new RangeError("Index out of range")}Y.prototype.writeUintLE=Y.prototype.writeUIntLE=function(L,G,J,W){if(L=+L,G=G>>>0,J=J>>>0,!W){var ie=Math.pow(2,8*J)-1;Te(this,L,G,J,ie,0)}var le=1,fe=0;for(this[G]=L&255;++fe<J&&(le*=256);)this[G+fe]=L/le&255;return G+J},Y.prototype.writeUintBE=Y.prototype.writeUIntBE=function(L,G,J,W){if(L=+L,G=G>>>0,J=J>>>0,!W){var ie=Math.pow(2,8*J)-1;Te(this,L,G,J,ie,0)}var le=J-1,fe=1;for(this[G+le]=L&255;--le>=0&&(fe*=256);)this[G+le]=L/fe&255;return G+J},Y.prototype.writeUint8=Y.prototype.writeUInt8=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,1,255,0),this[G]=L&255,G+1},Y.prototype.writeUint16LE=Y.prototype.writeUInt16LE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,2,65535,0),this[G]=L&255,this[G+1]=L>>>8,G+2},Y.prototype.writeUint16BE=Y.prototype.writeUInt16BE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,2,65535,0),this[G]=L>>>8,this[G+1]=L&255,G+2},Y.prototype.writeUint32LE=Y.prototype.writeUInt32LE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,4,4294967295,0),this[G+3]=L>>>24,this[G+2]=L>>>16,this[G+1]=L>>>8,this[G]=L&255,G+4},Y.prototype.writeUint32BE=Y.prototype.writeUInt32BE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,4,4294967295,0),this[G]=L>>>24,this[G+1]=L>>>16,this[G+2]=L>>>8,this[G+3]=L&255,G+4},Y.prototype.writeIntLE=function(L,G,J,W){if(L=+L,G=G>>>0,!W){var ie=Math.pow(2,8*J-1);Te(this,L,G,J,ie-1,-ie)}var le=0,fe=1,we=0;for(this[G]=L&255;++le<J&&(fe*=256);)L<0&&we===0&&this[G+le-1]!==0&&(we=1),this[G+le]=(L/fe>>0)-we&255;return G+J},Y.prototype.writeIntBE=function(L,G,J,W){if(L=+L,G=G>>>0,!W){var ie=Math.pow(2,8*J-1);Te(this,L,G,J,ie-1,-ie)}var le=J-1,fe=1,we=0;for(this[G+le]=L&255;--le>=0&&(fe*=256);)L<0&&we===0&&this[G+le+1]!==0&&(we=1),this[G+le]=(L/fe>>0)-we&255;return G+J},Y.prototype.writeInt8=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,1,127,-128),L<0&&(L=255+L+1),this[G]=L&255,G+1},Y.prototype.writeInt16LE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,2,32767,-32768),this[G]=L&255,this[G+1]=L>>>8,G+2},Y.prototype.writeInt16BE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,2,32767,-32768),this[G]=L>>>8,this[G+1]=L&255,G+2},Y.prototype.writeInt32LE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,4,2147483647,-2147483648),this[G]=L&255,this[G+1]=L>>>8,this[G+2]=L>>>16,this[G+3]=L>>>24,G+4},Y.prototype.writeInt32BE=function(L,G,J){return L=+L,G=G>>>0,J||Te(this,L,G,4,2147483647,-2147483648),L<0&&(L=4294967295+L+1),this[G]=L>>>24,this[G+1]=L>>>16,this[G+2]=L>>>8,this[G+3]=L&255,G+4};function Xe(q,L,G,J,W,ie){if(G+J>q.length)throw new RangeError("Index out of range");if(G<0)throw new RangeError("Index out of range")}function ee(q,L,G,J,W){return L=+L,G=G>>>0,W||Xe(q,L,G,4),Q.write(q,L,G,J,23,4),G+4}Y.prototype.writeFloatLE=function(L,G,J){return ee(this,L,G,!0,J)},Y.prototype.writeFloatBE=function(L,G,J){return ee(this,L,G,!1,J)};function rt(q,L,G,J,W){return L=+L,G=G>>>0,W||Xe(q,L,G,8),Q.write(q,L,G,J,52,8),G+8}Y.prototype.writeDoubleLE=function(L,G,J){return rt(this,L,G,!0,J)},Y.prototype.writeDoubleBE=function(L,G,J){return rt(this,L,G,!1,J)},Y.prototype.copy=function(L,G,J,W){if(!Y.isBuffer(L))throw new TypeError("argument should be a Buffer");if(J||(J=0),!W&&W!==0&&(W=this.length),G>=L.length&&(G=L.length),G||(G=0),W>0&&W<J&&(W=J),W===J||L.length===0||this.length===0)return 0;if(G<0)throw new RangeError("targetStart out of bounds");if(J<0||J>=this.length)throw new RangeError("Index out of range");if(W<0)throw new RangeError("sourceEnd out of bounds");W>this.length&&(W=this.length),L.length-G<W-J&&(W=L.length-G+J);var ie=W-J;return this===L&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(G,J,W):Uint8Array.prototype.set.call(L,this.subarray(J,W),G),ie},Y.prototype.fill=function(L,G,J,W){if(typeof L=="string"){if(typeof G=="string"?(W=G,G=0,J=this.length):typeof J=="string"&&(W=J,J=this.length),W!==void 0&&typeof W!="string")throw new TypeError("encoding must be a string");if(typeof W=="string"&&!Y.isEncoding(W))throw new TypeError("Unknown encoding: "+W);if(L.length===1){var ie=L.charCodeAt(0);(W==="utf8"&&ie<128||W==="latin1")&&(L=ie)}}else typeof L=="number"?L=L&255:typeof L=="boolean"&&(L=Number(L));if(G<0||this.length<G||this.length<J)throw new RangeError("Out of range index");if(J<=G)return this;G=G>>>0,J=J===void 0?this.length:J>>>0,L||(L=0);var le;if(typeof L=="number")for(le=G;le<J;++le)this[le]=L;else{var fe=Y.isBuffer(L)?L:Y.from(L,W),we=fe.length;if(we===0)throw new TypeError('The value "'+L+'" is invalid for argument "value"');for(le=0;le<J-G;++le)this[le+G]=fe[le%we]}return this};var At=/[^+/0-9A-Za-z-_]/g;function ct(q){if(q=q.split("=")[0],q=q.trim().replace(At,""),q.length<2)return"";for(;q.length%4!==0;)q=q+"=";return q}function ve(q,L){L=L||1/0;for(var G,J=q.length,W=null,ie=[],le=0;le<J;++le){if(G=q.charCodeAt(le),G>55295&&G<57344){if(!W){if(G>56319){(L-=3)>-1&&ie.push(239,191,189);continue}else if(le+1===J){(L-=3)>-1&&ie.push(239,191,189);continue}W=G;continue}if(G<56320){(L-=3)>-1&&ie.push(239,191,189),W=G;continue}G=(W-55296<<10|G-56320)+65536}else W&&(L-=3)>-1&&ie.push(239,191,189);if(W=null,G<128){if((L-=1)<0)break;ie.push(G)}else if(G<2048){if((L-=2)<0)break;ie.push(G>>6|192,G&63|128)}else if(G<65536){if((L-=3)<0)break;ie.push(G>>12|224,G>>6&63|128,G&63|128)}else if(G<1114112){if((L-=4)<0)break;ie.push(G>>18|240,G>>12&63|128,G>>6&63|128,G&63|128)}else throw new Error("Invalid code point")}return ie}function xe(q){for(var L=[],G=0;G<q.length;++G)L.push(q.charCodeAt(G)&255);return L}function X(q,L){for(var G,J,W,ie=[],le=0;le<q.length&&!((L-=2)<0);++le)G=q.charCodeAt(le),J=G>>8,W=G%256,ie.push(W),ie.push(J);return ie}function te(q){return B.toByteArray(ct(q))}function ne(q,L,G,J){for(var W=0;W<J&&!(W+G>=L.length||W>=q.length);++W)L[W+G]=q[W];return W}function ae(q,L){return q instanceof L||q!=null&&q.constructor!=null&&q.constructor.name!=null&&q.constructor.name===L.name}function Ae(q){return q!==q}var oe=function(){for(var q="0123456789abcdef",L=new Array(256),G=0;G<16;++G)for(var J=G*16,W=0;W<16;++W)L[J+W]=q[G]+q[W];return L}()})(buffer);var ReplicaRejectCode;(function(w){w[w.SysFatal=1]="SysFatal",w[w.SysTransient=2]="SysTransient",w[w.DestinationInvalid=3]="DestinationInvalid",w[w.CanisterReject=4]="CanisterReject",w[w.CanisterError=5]="CanisterError"})(ReplicaRejectCode||(ReplicaRejectCode={}));const alphabet="abcdefghijklmnopqrstuvwxyz234567",lookupTable=Object.create(null);for(let w=0;w<alphabet.length;w++)lookupTable[alphabet[w]]=w;lookupTable[0]=lookupTable.o;lookupTable[1]=lookupTable.i;var sha256={exports:{}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root={}:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer!="undefined",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(w){return Object.prototype.toString.call(w)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(w){return typeof w=="object"&&w.buffer&&w.buffer.constructor===ArrayBuffer});var createOutputMethod=function(w,B){return function(Q){return new Sha256(B,!0).update(Q)[w]()}},createMethod=function(w){var B=createOutputMethod("hex",w);NODE_JS&&(B=nodeWrap(B,w)),B.create=function(){return new Sha256(w)},B.update=function(D){return B.create().update(D)};for(var Q=0;Q<OUTPUT_TYPES.length;++Q){var F=OUTPUT_TYPES[Q];B[F]=createOutputMethod(F,w)}return B},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(w){if(typeof w=="string")return crypto.createHash(algorithm).update(w,"utf8").digest("hex");if(w==null)throw new Error(ERROR);return w.constructor===ArrayBuffer&&(w=new Uint8Array(w)),Array.isArray(w)||ArrayBuffer.isView(w)||w.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(w)).digest("hex"):method(w)};return nodeMethod},createHmacOutputMethod=function(w,B){return function(Q,F){return new HmacSha256(Q,B,!0).update(F)[w]()}},createHmacMethod=function(w){var B=createHmacOutputMethod("hex",w);B.create=function(D){return new HmacSha256(D,w)},B.update=function(D,U){return B.create(D).update(U)};for(var Q=0;Q<OUTPUT_TYPES.length;++Q){var F=OUTPUT_TYPES[Q];B[F]=createHmacOutputMethod(F,w)}return B};function Sha256(w,B){B?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],w?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=w}Sha256.prototype.update=function(w){if(!this.finalized){var B,Q=typeof w;if(Q!=="string"){if(Q==="object"){if(w===null)throw new Error(ERROR);if(ARRAY_BUFFER&&w.constructor===ArrayBuffer)w=new Uint8Array(w);else if(!Array.isArray(w)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(w)))throw new Error(ERROR)}else throw new Error(ERROR);B=!0}for(var F,D=0,U,O=w.length,Y=this.blocks;D<O;){if(this.hashed&&(this.hashed=!1,Y[0]=this.block,Y[16]=Y[1]=Y[2]=Y[3]=Y[4]=Y[5]=Y[6]=Y[7]=Y[8]=Y[9]=Y[10]=Y[11]=Y[12]=Y[13]=Y[14]=Y[15]=0),B)for(U=this.start;D<O&&U<64;++D)Y[U>>2]|=w[D]<<SHIFT[U++&3];else for(U=this.start;D<O&&U<64;++D)F=w.charCodeAt(D),F<128?Y[U>>2]|=F<<SHIFT[U++&3]:F<2048?(Y[U>>2]|=(192|F>>6)<<SHIFT[U++&3],Y[U>>2]|=(128|F&63)<<SHIFT[U++&3]):F<55296||F>=57344?(Y[U>>2]|=(224|F>>12)<<SHIFT[U++&3],Y[U>>2]|=(128|F>>6&63)<<SHIFT[U++&3],Y[U>>2]|=(128|F&63)<<SHIFT[U++&3]):(F=65536+((F&1023)<<10|w.charCodeAt(++D)&1023),Y[U>>2]|=(240|F>>18)<<SHIFT[U++&3],Y[U>>2]|=(128|F>>12&63)<<SHIFT[U++&3],Y[U>>2]|=(128|F>>6&63)<<SHIFT[U++&3],Y[U>>2]|=(128|F&63)<<SHIFT[U++&3]);this.lastByteIndex=U,this.bytes+=U-this.start,U>=64?(this.block=Y[16],this.start=U-64,this.hash(),this.hashed=!0):this.start=U}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var w=this.blocks,B=this.lastByteIndex;w[16]=this.block,w[B>>2]|=EXTRA[B&3],this.block=w[16],B>=56&&(this.hashed||this.hash(),w[0]=this.block,w[16]=w[1]=w[2]=w[3]=w[4]=w[5]=w[6]=w[7]=w[8]=w[9]=w[10]=w[11]=w[12]=w[13]=w[14]=w[15]=0),w[14]=this.hBytes<<3|this.bytes>>>29,w[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var w=this.h0,B=this.h1,Q=this.h2,F=this.h3,D=this.h4,U=this.h5,O=this.h6,Y=this.h7,j=this.blocks,re,ge,ce,ue,de,Ce,Ie,Fe,Pe,Ne,it;for(re=16;re<64;++re)de=j[re-15],ge=(de>>>7|de<<25)^(de>>>18|de<<14)^de>>>3,de=j[re-2],ce=(de>>>17|de<<15)^(de>>>19|de<<13)^de>>>10,j[re]=j[re-16]+ge+j[re-7]+ce<<0;for(it=B&Q,re=0;re<64;re+=4)this.first?(this.is224?(Fe=300032,de=j[0]-1413257819,Y=de-150054599<<0,F=de+24177077<<0):(Fe=704751109,de=j[0]-210244248,Y=de-1521486534<<0,F=de+143694565<<0),this.first=!1):(ge=(w>>>2|w<<30)^(w>>>13|w<<19)^(w>>>22|w<<10),ce=(D>>>6|D<<26)^(D>>>11|D<<21)^(D>>>25|D<<7),Fe=w&B,ue=Fe^w&Q^it,Ie=D&U^~D&O,de=Y+ce+Ie+K[re]+j[re],Ce=ge+ue,Y=F+de<<0,F=de+Ce<<0),ge=(F>>>2|F<<30)^(F>>>13|F<<19)^(F>>>22|F<<10),ce=(Y>>>6|Y<<26)^(Y>>>11|Y<<21)^(Y>>>25|Y<<7),Pe=F&w,ue=Pe^F&B^Fe,Ie=Y&D^~Y&U,de=O+ce+Ie+K[re+1]+j[re+1],Ce=ge+ue,O=Q+de<<0,Q=de+Ce<<0,ge=(Q>>>2|Q<<30)^(Q>>>13|Q<<19)^(Q>>>22|Q<<10),ce=(O>>>6|O<<26)^(O>>>11|O<<21)^(O>>>25|O<<7),Ne=Q&F,ue=Ne^Q&w^Pe,Ie=O&Y^~O&D,de=U+ce+Ie+K[re+2]+j[re+2],Ce=ge+ue,U=B+de<<0,B=de+Ce<<0,ge=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),ce=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),it=B&Q,ue=it^B&F^Ne,Ie=U&O^~U&Y,de=D+ce+Ie+K[re+3]+j[re+3],Ce=ge+ue,D=w+de<<0,w=de+Ce<<0;this.h0=this.h0+w<<0,this.h1=this.h1+B<<0,this.h2=this.h2+Q<<0,this.h3=this.h3+F<<0,this.h4=this.h4+D<<0,this.h5=this.h5+U<<0,this.h6=this.h6+O<<0,this.h7=this.h7+Y<<0},Sha256.prototype.hex=function(){this.finalize();var w=this.h0,B=this.h1,Q=this.h2,F=this.h3,D=this.h4,U=this.h5,O=this.h6,Y=this.h7,j=HEX_CHARS[w>>28&15]+HEX_CHARS[w>>24&15]+HEX_CHARS[w>>20&15]+HEX_CHARS[w>>16&15]+HEX_CHARS[w>>12&15]+HEX_CHARS[w>>8&15]+HEX_CHARS[w>>4&15]+HEX_CHARS[w&15]+HEX_CHARS[B>>28&15]+HEX_CHARS[B>>24&15]+HEX_CHARS[B>>20&15]+HEX_CHARS[B>>16&15]+HEX_CHARS[B>>12&15]+HEX_CHARS[B>>8&15]+HEX_CHARS[B>>4&15]+HEX_CHARS[B&15]+HEX_CHARS[Q>>28&15]+HEX_CHARS[Q>>24&15]+HEX_CHARS[Q>>20&15]+HEX_CHARS[Q>>16&15]+HEX_CHARS[Q>>12&15]+HEX_CHARS[Q>>8&15]+HEX_CHARS[Q>>4&15]+HEX_CHARS[Q&15]+HEX_CHARS[F>>28&15]+HEX_CHARS[F>>24&15]+HEX_CHARS[F>>20&15]+HEX_CHARS[F>>16&15]+HEX_CHARS[F>>12&15]+HEX_CHARS[F>>8&15]+HEX_CHARS[F>>4&15]+HEX_CHARS[F&15]+HEX_CHARS[D>>28&15]+HEX_CHARS[D>>24&15]+HEX_CHARS[D>>20&15]+HEX_CHARS[D>>16&15]+HEX_CHARS[D>>12&15]+HEX_CHARS[D>>8&15]+HEX_CHARS[D>>4&15]+HEX_CHARS[D&15]+HEX_CHARS[U>>28&15]+HEX_CHARS[U>>24&15]+HEX_CHARS[U>>20&15]+HEX_CHARS[U>>16&15]+HEX_CHARS[U>>12&15]+HEX_CHARS[U>>8&15]+HEX_CHARS[U>>4&15]+HEX_CHARS[U&15]+HEX_CHARS[O>>28&15]+HEX_CHARS[O>>24&15]+HEX_CHARS[O>>20&15]+HEX_CHARS[O>>16&15]+HEX_CHARS[O>>12&15]+HEX_CHARS[O>>8&15]+HEX_CHARS[O>>4&15]+HEX_CHARS[O&15];return this.is224||(j+=HEX_CHARS[Y>>28&15]+HEX_CHARS[Y>>24&15]+HEX_CHARS[Y>>20&15]+HEX_CHARS[Y>>16&15]+HEX_CHARS[Y>>12&15]+HEX_CHARS[Y>>8&15]+HEX_CHARS[Y>>4&15]+HEX_CHARS[Y&15]),j},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var w=this.h0,B=this.h1,Q=this.h2,F=this.h3,D=this.h4,U=this.h5,O=this.h6,Y=this.h7,j=[w>>24&255,w>>16&255,w>>8&255,w&255,B>>24&255,B>>16&255,B>>8&255,B&255,Q>>24&255,Q>>16&255,Q>>8&255,Q&255,F>>24&255,F>>16&255,F>>8&255,F&255,D>>24&255,D>>16&255,D>>8&255,D&255,U>>24&255,U>>16&255,U>>8&255,U&255,O>>24&255,O>>16&255,O>>8&255,O&255];return this.is224||j.push(Y>>24&255,Y>>16&255,Y>>8&255,Y&255),j},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var w=new ArrayBuffer(this.is224?28:32),B=new DataView(w);return B.setUint32(0,this.h0),B.setUint32(4,this.h1),B.setUint32(8,this.h2),B.setUint32(12,this.h3),B.setUint32(16,this.h4),B.setUint32(20,this.h5),B.setUint32(24,this.h6),this.is224||B.setUint32(28,this.h7),w};function HmacSha256(w,B,Q){var F,D=typeof w;if(D==="string"){var U=[],O=w.length,Y=0,j;for(F=0;F<O;++F)j=w.charCodeAt(F),j<128?U[Y++]=j:j<2048?(U[Y++]=192|j>>6,U[Y++]=128|j&63):j<55296||j>=57344?(U[Y++]=224|j>>12,U[Y++]=128|j>>6&63,U[Y++]=128|j&63):(j=65536+((j&1023)<<10|w.charCodeAt(++F)&1023),U[Y++]=240|j>>18,U[Y++]=128|j>>12&63,U[Y++]=128|j>>6&63,U[Y++]=128|j&63);w=U}else if(D==="object"){if(w===null)throw new Error(ERROR);if(ARRAY_BUFFER&&w.constructor===ArrayBuffer)w=new Uint8Array(w);else if(!Array.isArray(w)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(w)))throw new Error(ERROR)}else throw new Error(ERROR);w.length>64&&(w=new Sha256(B,!0).update(w).array());var re=[],ge=[];for(F=0;F<64;++F){var ce=w[F]||0;re[F]=92^ce,ge[F]=54^ce}Sha256.call(this,B,Q),this.update(ge),this.oKeyPad=re,this.inner=!0,this.sharedMemory=Q}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var w=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(w),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256);class PipeArrayBuffer{constructor(B,Q=(B==null?void 0:B.byteLength)||0){this._buffer=B||new ArrayBuffer(0),this._view=new Uint8Array(this._buffer,0,Q)}get buffer(){return this._view.slice()}get byteLength(){return this._view.byteLength}read(B){const Q=this._view.subarray(0,B);return this._view=this._view.subarray(B),Q.slice().buffer}readUint8(){const B=this._view[0];return this._view=this._view.subarray(1),B}write(B){const Q=new Uint8Array(B),F=this._view.byteLength;this._view.byteOffset+this._view.byteLength+Q.byteLength>=this._buffer.byteLength?this.alloc(Q.byteLength):this._view=new Uint8Array(this._buffer,this._view.byteOffset,this._view.byteLength+Q.byteLength),this._view.set(Q,F)}get end(){return this._view.byteLength===0}alloc(B){const Q=new ArrayBuffer((this._buffer.byteLength+B)*1.2|0),F=new Uint8Array(Q,0,this._view.byteLength+B);F.set(this._view),this._buffer=Q,this._view=F}}function eob(){throw new Error("unexpected end of buffer")}function safeRead(w,B){return w.byteLength<B&&eob(),w.read(B)}function safeReadUint8(w){const B=w.readUint8();return B===void 0&&eob(),B}function slebEncode(w){typeof w=="number"&&(w=BigInt(w));const B=w<BigInt(0);B&&(w=-w-BigInt(1));const Q=(w===BigInt(0)?0:Math.ceil(Math.log2(Number(w))))+1,F=new PipeArrayBuffer(new ArrayBuffer(Q),0);for(;;){const U=D(w);if(w/=BigInt(128),B&&w===BigInt(0)&&(U&64)!==0||!B&&w===BigInt(0)&&(U&64)===0){F.write(new Uint8Array([U]));break}else F.write(new Uint8Array([U|128]))}function D(U){const O=U%BigInt(128);return Number(B?BigInt(128)-O-BigInt(1):O)}return F.buffer}function writeUIntLE(w,B){if(BigInt(w)<BigInt(0))throw new Error("Cannot write negative values.");return writeIntLE(w,B)}function writeIntLE(w,B){w=BigInt(w);const Q=new PipeArrayBuffer(new ArrayBuffer(Math.min(1,B)),0);let F=0,D=BigInt(256),U=BigInt(0),O=Number(w%D);for(Q.write(new Uint8Array([O]));++F<B;)w<0&&U===BigInt(0)&&O!==0&&(U=BigInt(1)),O=Number((w/D-U)%BigInt(256)),Q.write(new Uint8Array([O])),D*=BigInt(256);return Q.buffer}function readUIntLE(w,B){let Q=BigInt(safeReadUint8(w)),F=BigInt(1),D=0;for(;++D<B;){F*=BigInt(256);const U=BigInt(safeReadUint8(w));Q=Q+F*U}return Q}function readIntLE(w,B){let Q=readUIntLE(w,B);const F=BigInt(2)**(BigInt(8)*BigInt(B-1)+BigInt(7));return Q>=F&&(Q-=F*BigInt(2)),Q}function iexp2(w){const B=BigInt(w);if(w<0)throw new RangeError("Input must be non-negative");return BigInt(1)<<B}const toReadableString_max=400;class Type{display(){return this.name}valueToString(B){return toReadableString(B)}buildTypeTable(B){B.has(this)||this._buildTypeTableImpl(B)}}class PrimitiveType extends Type{checkType(B){if(this.name!==B.name)throw new Error(`type mismatch: type on the wire ${B.name}, expect type ${this.name}`);return B}_buildTypeTableImpl(B){}}class ConstructType extends Type{checkType(B){if(B instanceof RecClass){const Q=B.getType();if(typeof Q=="undefined")throw new Error("type mismatch with uninitialized type");return Q}throw new Error(`type mismatch: type on the wire ${B.name}, expect type ${this.name}`)}encodeType(B){return B.indexOf(this.name)}}class FloatClass extends PrimitiveType{constructor(B){if(super(),this._bits=B,B!==32&&B!==64)throw new Error("not a valid float type")}accept(B,Q){return B.visitFloat(this,Q)}covariant(B){if(typeof B=="number"||B instanceof Number)return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){const Q=new ArrayBuffer(this._bits/8),F=new DataView(Q);return this._bits===32?F.setFloat32(0,B,!0):F.setFloat64(0,B,!0),Q}encodeType(){const B=this._bits===32?-13:-14;return slebEncode(B)}decodeValue(B,Q){this.checkType(Q);const F=safeRead(B,this._bits/8),D=new DataView(F);return this._bits===32?D.getFloat32(0,!0):D.getFloat64(0,!0)}get name(){return"float"+this._bits}valueToString(B){return B.toString()}}class FixedIntClass extends PrimitiveType{constructor(B){super(),this._bits=B}accept(B,Q){return B.visitFixedInt(this,Q)}covariant(B){const Q=iexp2(this._bits-1)*BigInt(-1),F=iexp2(this._bits-1)-BigInt(1);let D=!1;if(typeof B=="bigint")D=B>=Q&&B<=F;else if(Number.isInteger(B)){const U=BigInt(B);D=U>=Q&&U<=F}else D=!1;if(D)return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){return writeIntLE(B,this._bits/8)}encodeType(){const B=Math.log2(this._bits)-3;return slebEncode(-9-B)}decodeValue(B,Q){this.checkType(Q);const F=readIntLE(B,this._bits/8);return this._bits<=32?Number(F):F}get name(){return`int${this._bits}`}valueToString(B){return B.toString()}}class FixedNatClass extends PrimitiveType{constructor(B){super(),this._bits=B}accept(B,Q){return B.visitFixedNat(this,Q)}covariant(B){const Q=iexp2(this._bits);let F=!1;if(typeof B=="bigint"&&B>=BigInt(0)?F=B<Q:Number.isInteger(B)&&B>=0?F=BigInt(B)<Q:F=!1,F)return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){return writeUIntLE(B,this._bits/8)}encodeType(){const B=Math.log2(this._bits)-3;return slebEncode(-5-B)}decodeValue(B,Q){this.checkType(Q);const F=readUIntLE(B,this._bits/8);return this._bits<=32?Number(F):F}get name(){return`nat${this._bits}`}valueToString(B){return B.toString()}}class RecClass extends ConstructType{constructor(){super(...arguments),this._id=RecClass._counter++,this._type=void 0}accept(B,Q){if(!this._type)throw Error("Recursive type uninitialized.");return B.visitRec(this,this._type,Q)}fill(B){this._type=B}getType(){return this._type}covariant(B){if(this._type&&this._type.covariant(B))return!0;throw new Error(`Invalid ${this.display()} argument: ${toReadableString(B)}`)}encodeValue(B){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.encodeValue(B)}_buildTypeTableImpl(B){if(!this._type)throw Error("Recursive type uninitialized.");B.add(this,new Uint8Array([])),this._type.buildTypeTable(B),B.merge(this,this._type.name)}decodeValue(B,Q){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.decodeValue(B,Q)}get name(){return`rec_${this._id}`}display(){if(!this._type)throw Error("Recursive type uninitialized.");return`\u03BC${this.name}.${this._type.name}`}valueToString(B){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.valueToString(B)}}RecClass._counter=0;function toReadableString(w){const B=JSON.stringify(w,(Q,F)=>typeof F=="bigint"?`BigInt(${F})`:F);return B&&B.length>toReadableString_max?B.substring(0,toReadableString_max-3)+"...":B}new FloatClass(32);new FloatClass(64);new FixedIntClass(8);new FixedIntClass(16);new FixedIntClass(32);new FixedIntClass(64);new FixedNatClass(8);new FixedNatClass(16);new FixedNatClass(32);new FixedNatClass(64);var src$1={},bignumber={exports:{}};(function(w){(function(B){var Q,F=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,D=Math.ceil,U=Math.floor,O="[BigNumber Error] ",Y=O+"Number primitive has more than 15 significant digits: ",j=1e14,re=14,ge=9007199254740991,ce=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],ue=1e7,de=1e9;function Ce(ke){var be,Ye,Je,Ee=ee.prototype={constructor:ee,toString:null,valueOf:null},ze=new ee(1),qe=20,Oe=4,Ze=-7,Be=21,he=-1e7,pe=1e7,ye=!1,Se=1,Qe=0,Re={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},Te="0123456789abcdefghijklmnopqrstuvwxyz",Xe=!0;function ee(X,te){var ne,ae,Ae,oe,q,L,G,J,W=this;if(!(W instanceof ee))return new ee(X,te);if(te==null){if(X&&X._isBigNumber===!0){W.s=X.s,!X.c||X.e>pe?W.c=W.e=null:X.e<he?W.c=[W.e=0]:(W.e=X.e,W.c=X.c.slice());return}if((L=typeof X=="number")&&X*0==0){if(W.s=1/X<0?(X=-X,-1):1,X===~~X){for(oe=0,q=X;q>=10;q/=10,oe++);oe>pe?W.c=W.e=null:(W.e=oe,W.c=[X]);return}J=String(X)}else{if(!F.test(J=String(X)))return Je(W,J,L);W.s=J.charCodeAt(0)==45?(J=J.slice(1),-1):1}(oe=J.indexOf("."))>-1&&(J=J.replace(".","")),(q=J.search(/e/i))>0?(oe<0&&(oe=q),oe+=+J.slice(q+1),J=J.substring(0,q)):oe<0&&(oe=J.length)}else{if(Ne(te,2,Te.length,"Base"),te==10&&Xe)return W=new ee(X),ve(W,qe+W.e+1,Oe);if(J=String(X),L=typeof X=="number"){if(X*0!=0)return Je(W,J,L,te);if(W.s=1/X<0?(J=J.slice(1),-1):1,ee.DEBUG&&J.replace(/^0\.0*|\./,"").length>15)throw Error(Y+X)}else W.s=J.charCodeAt(0)===45?(J=J.slice(1),-1):1;for(ne=Te.slice(0,te),oe=q=0,G=J.length;q<G;q++)if(ne.indexOf(ae=J.charAt(q))<0){if(ae=="."){if(q>oe){oe=G;continue}}else if(!Ae&&(J==J.toUpperCase()&&(J=J.toLowerCase())||J==J.toLowerCase()&&(J=J.toUpperCase()))){Ae=!0,q=-1,oe=0;continue}return Je(W,String(X),L,te)}L=!1,J=Ye(J,te,10,W.s),(oe=J.indexOf("."))>-1?J=J.replace(".",""):oe=J.length}for(q=0;J.charCodeAt(q)===48;q++);for(G=J.length;J.charCodeAt(--G)===48;);if(J=J.slice(q,++G)){if(G-=q,L&&ee.DEBUG&&G>15&&(X>ge||X!==U(X)))throw Error(Y+W.s*X);if((oe=oe-q-1)>pe)W.c=W.e=null;else if(oe<he)W.c=[W.e=0];else{if(W.e=oe,W.c=[],q=(oe+1)%re,oe<0&&(q+=re),q<G){for(q&&W.c.push(+J.slice(0,q)),G-=re;q<G;)W.c.push(+J.slice(q,q+=re));q=re-(J=J.slice(q)).length}else q-=G;for(;q--;J+="0");W.c.push(+J)}}else W.c=[W.e=0]}ee.clone=Ce,ee.ROUND_UP=0,ee.ROUND_DOWN=1,ee.ROUND_CEIL=2,ee.ROUND_FLOOR=3,ee.ROUND_HALF_UP=4,ee.ROUND_HALF_DOWN=5,ee.ROUND_HALF_EVEN=6,ee.ROUND_HALF_CEIL=7,ee.ROUND_HALF_FLOOR=8,ee.EUCLID=9,ee.config=ee.set=function(X){var te,ne;if(X!=null)if(typeof X=="object"){if(X.hasOwnProperty(te="DECIMAL_PLACES")&&(ne=X[te],Ne(ne,0,de,te),qe=ne),X.hasOwnProperty(te="ROUNDING_MODE")&&(ne=X[te],Ne(ne,0,8,te),Oe=ne),X.hasOwnProperty(te="EXPONENTIAL_AT")&&(ne=X[te],ne&&ne.pop?(Ne(ne[0],-de,0,te),Ne(ne[1],0,de,te),Ze=ne[0],Be=ne[1]):(Ne(ne,-de,de,te),Ze=-(Be=ne<0?-ne:ne))),X.hasOwnProperty(te="RANGE"))if(ne=X[te],ne&&ne.pop)Ne(ne[0],-de,-1,te),Ne(ne[1],1,de,te),he=ne[0],pe=ne[1];else if(Ne(ne,-de,de,te),ne)he=-(pe=ne<0?-ne:ne);else throw Error(O+te+" cannot be zero: "+ne);if(X.hasOwnProperty(te="CRYPTO"))if(ne=X[te],ne===!!ne)if(ne)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))ye=ne;else throw ye=!ne,Error(O+"crypto unavailable");else ye=ne;else throw Error(O+te+" not true or false: "+ne);if(X.hasOwnProperty(te="MODULO_MODE")&&(ne=X[te],Ne(ne,0,9,te),Se=ne),X.hasOwnProperty(te="POW_PRECISION")&&(ne=X[te],Ne(ne,0,de,te),Qe=ne),X.hasOwnProperty(te="FORMAT"))if(ne=X[te],typeof ne=="object")Re=ne;else throw Error(O+te+" not an object: "+ne);if(X.hasOwnProperty(te="ALPHABET"))if(ne=X[te],typeof ne=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(ne))Xe=ne.slice(0,10)=="0123456789",Te=ne;else throw Error(O+te+" invalid: "+ne)}else throw Error(O+"Object expected: "+X);return{DECIMAL_PLACES:qe,ROUNDING_MODE:Oe,EXPONENTIAL_AT:[Ze,Be],RANGE:[he,pe],CRYPTO:ye,MODULO_MODE:Se,POW_PRECISION:Qe,FORMAT:Re,ALPHABET:Te}},ee.isBigNumber=function(X){if(!X||X._isBigNumber!==!0)return!1;if(!ee.DEBUG)return!0;var te,ne,ae=X.c,Ae=X.e,oe=X.s;e:if({}.toString.call(ae)=="[object Array]"){if((oe===1||oe===-1)&&Ae>=-de&&Ae<=de&&Ae===U(Ae)){if(ae[0]===0){if(Ae===0&&ae.length===1)return!0;break e}if(te=(Ae+1)%re,te<1&&(te+=re),String(ae[0]).length==te){for(te=0;te<ae.length;te++)if(ne=ae[te],ne<0||ne>=j||ne!==U(ne))break e;if(ne!==0)return!0}}}else if(ae===null&&Ae===null&&(oe===null||oe===1||oe===-1))return!0;throw Error(O+"Invalid BigNumber: "+X)},ee.maximum=ee.max=function(){return At(arguments,Ee.lt)},ee.minimum=ee.min=function(){return At(arguments,Ee.gt)},ee.random=function(){var X=9007199254740992,te=Math.random()*X&2097151?function(){return U(Math.random()*X)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(ne){var ae,Ae,oe,q,L,G=0,J=[],W=new ee(ze);if(ne==null?ne=qe:Ne(ne,0,de),q=D(ne/re),ye)if(crypto.getRandomValues){for(ae=crypto.getRandomValues(new Uint32Array(q*=2));G<q;)L=ae[G]*131072+(ae[G+1]>>>11),L>=9e15?(Ae=crypto.getRandomValues(new Uint32Array(2)),ae[G]=Ae[0],ae[G+1]=Ae[1]):(J.push(L%1e14),G+=2);G=q/2}else if(crypto.randomBytes){for(ae=crypto.randomBytes(q*=7);G<q;)L=(ae[G]&31)*281474976710656+ae[G+1]*1099511627776+ae[G+2]*4294967296+ae[G+3]*16777216+(ae[G+4]<<16)+(ae[G+5]<<8)+ae[G+6],L>=9e15?crypto.randomBytes(7).copy(ae,G):(J.push(L%1e14),G+=7);G=q/7}else throw ye=!1,Error(O+"crypto unavailable");if(!ye)for(;G<q;)L=te(),L<9e15&&(J[G++]=L%1e14);for(q=J[--G],ne%=re,q&&ne&&(L=ce[re-ne],J[G]=U(q/L)*L);J[G]===0;J.pop(),G--);if(G<0)J=[oe=0];else{for(oe=-1;J[0]===0;J.splice(0,1),oe-=re);for(G=1,L=J[0];L>=10;L/=10,G++);G<re&&(oe-=re-G)}return W.e=oe,W.c=J,W}}(),ee.sum=function(){for(var X=1,te=arguments,ne=new ee(te[0]);X<te.length;)ne=ne.plus(te[X++]);return ne},Ye=function(){var X="0123456789";function te(ne,ae,Ae,oe){for(var q,L=[0],G,J=0,W=ne.length;J<W;){for(G=L.length;G--;L[G]*=ae);for(L[0]+=oe.indexOf(ne.charAt(J++)),q=0;q<L.length;q++)L[q]>Ae-1&&(L[q+1]==null&&(L[q+1]=0),L[q+1]+=L[q]/Ae|0,L[q]%=Ae)}return L.reverse()}return function(ne,ae,Ae,oe,q){var L,G,J,W,ie,le,fe,we,Me=ne.indexOf("."),De=qe,me=Oe;for(Me>=0&&(W=Qe,Qe=0,ne=ne.replace(".",""),we=new ee(ae),le=we.pow(ne.length-Me),Qe=W,we.c=te(Ke(Fe(le.c),le.e,"0"),10,Ae,X),we.e=we.c.length),fe=te(ne,ae,Ae,q?(L=Te,X):(L=X,Te)),J=W=fe.length;fe[--W]==0;fe.pop());if(!fe[0])return L.charAt(0);if(Me<0?--J:(le.c=fe,le.e=J,le.s=oe,le=be(le,we,De,me,Ae),fe=le.c,ie=le.r,J=le.e),G=J+De+1,Me=fe[G],W=Ae/2,ie=ie||G<0||fe[G+1]!=null,ie=me<4?(Me!=null||ie)&&(me==0||me==(le.s<0?3:2)):Me>W||Me==W&&(me==4||ie||me==6&&fe[G-1]&1||me==(le.s<0?8:7)),G<1||!fe[0])ne=ie?Ke(L.charAt(1),-De,L.charAt(0)):L.charAt(0);else{if(fe.length=G,ie)for(--Ae;++fe[--G]>Ae;)fe[G]=0,G||(++J,fe=[1].concat(fe));for(W=fe.length;!fe[--W];);for(Me=0,ne="";Me<=W;ne+=L.charAt(fe[Me++]));ne=Ke(ne,J,L.charAt(0))}return ne}}(),be=function(){function X(ae,Ae,oe){var q,L,G,J,W=0,ie=ae.length,le=Ae%ue,fe=Ae/ue|0;for(ae=ae.slice();ie--;)G=ae[ie]%ue,J=ae[ie]/ue|0,q=fe*G+J*le,L=le*G+q%ue*ue+W,W=(L/oe|0)+(q/ue|0)+fe*J,ae[ie]=L%oe;return W&&(ae=[W].concat(ae)),ae}function te(ae,Ae,oe,q){var L,G;if(oe!=q)G=oe>q?1:-1;else for(L=G=0;L<oe;L++)if(ae[L]!=Ae[L]){G=ae[L]>Ae[L]?1:-1;break}return G}function ne(ae,Ae,oe,q){for(var L=0;oe--;)ae[oe]-=L,L=ae[oe]<Ae[oe]?1:0,ae[oe]=L*q+ae[oe]-Ae[oe];for(;!ae[0]&&ae.length>1;ae.splice(0,1));}return function(ae,Ae,oe,q,L){var G,J,W,ie,le,fe,we,Me,De,me,Ge,et,lt,ut,ht,_e,dt,at=ae.s==Ae.s?1:-1,st=ae.c,We=Ae.c;if(!st||!st[0]||!We||!We[0])return new ee(!ae.s||!Ae.s||(st?We&&st[0]==We[0]:!We)?NaN:st&&st[0]==0||!We?at*0:at/0);for(Me=new ee(at),De=Me.c=[],J=ae.e-Ae.e,at=oe+J+1,L||(L=j,J=Ie(ae.e/re)-Ie(Ae.e/re),at=at/re|0),W=0;We[W]==(st[W]||0);W++);if(We[W]>(st[W]||0)&&J--,at<0)De.push(1),ie=!0;else{for(ut=st.length,_e=We.length,W=0,at+=2,le=U(L/(We[0]+1)),le>1&&(We=X(We,le,L),st=X(st,le,L),_e=We.length,ut=st.length),lt=_e,me=st.slice(0,_e),Ge=me.length;Ge<_e;me[Ge++]=0);dt=We.slice(),dt=[0].concat(dt),ht=We[0],We[1]>=L/2&&ht++;do{if(le=0,G=te(We,me,_e,Ge),G<0){if(et=me[0],_e!=Ge&&(et=et*L+(me[1]||0)),le=U(et/ht),le>1)for(le>=L&&(le=L-1),fe=X(We,le,L),we=fe.length,Ge=me.length;te(fe,me,we,Ge)==1;)le--,ne(fe,_e<we?dt:We,we,L),we=fe.length,G=1;else le==0&&(G=le=1),fe=We.slice(),we=fe.length;if(we<Ge&&(fe=[0].concat(fe)),ne(me,fe,Ge,L),Ge=me.length,G==-1)for(;te(We,me,_e,Ge)<1;)le++,ne(me,_e<Ge?dt:We,Ge,L),Ge=me.length}else G===0&&(le++,me=[0]);De[W++]=le,me[0]?me[Ge++]=st[lt]||0:(me=[st[lt]],Ge=1)}while((lt++<ut||me[0]!=null)&&at--);ie=me[0]!=null,De[0]||De.splice(0,1)}if(L==j){for(W=1,at=De[0];at>=10;at/=10,W++);ve(Me,oe+(Me.e=W+J*re-1)+1,q,ie)}else Me.e=J,Me.r=+ie;return Me}}();function rt(X,te,ne,ae){var Ae,oe,q,L,G;if(ne==null?ne=Oe:Ne(ne,0,8),!X.c)return X.toString();if(Ae=X.c[0],q=X.e,te==null)G=Fe(X.c),G=ae==1||ae==2&&(q<=Ze||q>=Be)?ot(G,q):Ke(G,q,"0");else if(X=ve(new ee(X),te,ne),oe=X.e,G=Fe(X.c),L=G.length,ae==1||ae==2&&(te<=oe||oe<=Ze)){for(;L<te;G+="0",L++);G=ot(G,oe)}else if(te-=q,G=Ke(G,oe,"0"),oe+1>L){if(--te>0)for(G+=".";te--;G+="0");}else if(te+=oe-L,te>0)for(oe+1==L&&(G+=".");te--;G+="0");return X.s<0&&Ae?"-"+G:G}function At(X,te){for(var ne,ae=1,Ae=new ee(X[0]);ae<X.length;ae++)if(ne=new ee(X[ae]),ne.s)te.call(Ae,ne)&&(Ae=ne);else{Ae=ne;break}return Ae}function ct(X,te,ne){for(var ae=1,Ae=te.length;!te[--Ae];te.pop());for(Ae=te[0];Ae>=10;Ae/=10,ae++);return(ne=ae+ne*re-1)>pe?X.c=X.e=null:ne<he?X.c=[X.e=0]:(X.e=ne,X.c=te),X}Je=function(){var X=/^(-?)0([xbo])(?=\w[\w.]*$)/i,te=/^([^.]+)\.$/,ne=/^\.([^.]+)$/,ae=/^-?(Infinity|NaN)$/,Ae=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(oe,q,L,G){var J,W=L?q:q.replace(Ae,"");if(ae.test(W))oe.s=isNaN(W)?null:W<0?-1:1;else{if(!L&&(W=W.replace(X,function(ie,le,fe){return J=(fe=fe.toLowerCase())=="x"?16:fe=="b"?2:8,!G||G==J?le:ie}),G&&(J=G,W=W.replace(te,"$1").replace(ne,"0.$1")),q!=W))return new ee(W,J);if(ee.DEBUG)throw Error(O+"Not a"+(G?" base "+G:"")+" number: "+q);oe.s=null}oe.c=oe.e=null}}();function ve(X,te,ne,ae){var Ae,oe,q,L,G,J,W,ie=X.c,le=ce;if(ie){e:{for(Ae=1,L=ie[0];L>=10;L/=10,Ae++);if(oe=te-Ae,oe<0)oe+=re,q=te,G=ie[J=0],W=G/le[Ae-q-1]%10|0;else if(J=D((oe+1)/re),J>=ie.length)if(ae){for(;ie.length<=J;ie.push(0));G=W=0,Ae=1,oe%=re,q=oe-re+1}else break e;else{for(G=L=ie[J],Ae=1;L>=10;L/=10,Ae++);oe%=re,q=oe-re+Ae,W=q<0?0:G/le[Ae-q-1]%10|0}if(ae=ae||te<0||ie[J+1]!=null||(q<0?G:G%le[Ae-q-1]),ae=ne<4?(W||ae)&&(ne==0||ne==(X.s<0?3:2)):W>5||W==5&&(ne==4||ae||ne==6&&(oe>0?q>0?G/le[Ae-q]:0:ie[J-1])%10&1||ne==(X.s<0?8:7)),te<1||!ie[0])return ie.length=0,ae?(te-=X.e+1,ie[0]=le[(re-te%re)%re],X.e=-te||0):ie[0]=X.e=0,X;if(oe==0?(ie.length=J,L=1,J--):(ie.length=J+1,L=le[re-oe],ie[J]=q>0?U(G/le[Ae-q]%le[q])*L:0),ae)for(;;)if(J==0){for(oe=1,q=ie[0];q>=10;q/=10,oe++);for(q=ie[0]+=L,L=1;q>=10;q/=10,L++);oe!=L&&(X.e++,ie[0]==j&&(ie[0]=1));break}else{if(ie[J]+=L,ie[J]!=j)break;ie[J--]=0,L=1}for(oe=ie.length;ie[--oe]===0;ie.pop());}X.e>pe?X.c=X.e=null:X.e<he&&(X.c=[X.e=0])}return X}function xe(X){var te,ne=X.e;return ne===null?X.toString():(te=Fe(X.c),te=ne<=Ze||ne>=Be?ot(te,ne):Ke(te,ne,"0"),X.s<0?"-"+te:te)}return Ee.absoluteValue=Ee.abs=function(){var X=new ee(this);return X.s<0&&(X.s=1),X},Ee.comparedTo=function(X,te){return Pe(this,new ee(X,te))},Ee.decimalPlaces=Ee.dp=function(X,te){var ne,ae,Ae,oe=this;if(X!=null)return Ne(X,0,de),te==null?te=Oe:Ne(te,0,8),ve(new ee(oe),X+oe.e+1,te);if(!(ne=oe.c))return null;if(ae=((Ae=ne.length-1)-Ie(this.e/re))*re,Ae=ne[Ae])for(;Ae%10==0;Ae/=10,ae--);return ae<0&&(ae=0),ae},Ee.dividedBy=Ee.div=function(X,te){return be(this,new ee(X,te),qe,Oe)},Ee.dividedToIntegerBy=Ee.idiv=function(X,te){return be(this,new ee(X,te),0,1)},Ee.exponentiatedBy=Ee.pow=function(X,te){var ne,ae,Ae,oe,q,L,G,J,W,ie=this;if(X=new ee(X),X.c&&!X.isInteger())throw Error(O+"Exponent not an integer: "+xe(X));if(te!=null&&(te=new ee(te)),L=X.e>14,!ie.c||!ie.c[0]||ie.c[0]==1&&!ie.e&&ie.c.length==1||!X.c||!X.c[0])return W=new ee(Math.pow(+xe(ie),L?X.s*(2-it(X)):+xe(X))),te?W.mod(te):W;if(G=X.s<0,te){if(te.c?!te.c[0]:!te.s)return new ee(NaN);ae=!G&&ie.isInteger()&&te.isInteger(),ae&&(ie=ie.mod(te))}else{if(X.e>9&&(ie.e>0||ie.e<-1||(ie.e==0?ie.c[0]>1||L&&ie.c[1]>=24e7:ie.c[0]<8e13||L&&ie.c[0]<=9999975e7)))return oe=ie.s<0&&it(X)?-0:0,ie.e>-1&&(oe=1/oe),new ee(G?1/oe:oe);Qe&&(oe=D(Qe/re+2))}for(L?(ne=new ee(.5),G&&(X.s=1),J=it(X)):(Ae=Math.abs(+xe(X)),J=Ae%2),W=new ee(ze);;){if(J){if(W=W.times(ie),!W.c)break;oe?W.c.length>oe&&(W.c.length=oe):ae&&(W=W.mod(te))}if(Ae){if(Ae=U(Ae/2),Ae===0)break;J=Ae%2}else if(X=X.times(ne),ve(X,X.e+1,1),X.e>14)J=it(X);else{if(Ae=+xe(X),Ae===0)break;J=Ae%2}ie=ie.times(ie),oe?ie.c&&ie.c.length>oe&&(ie.c.length=oe):ae&&(ie=ie.mod(te))}return ae?W:(G&&(W=ze.div(W)),te?W.mod(te):oe?ve(W,Qe,Oe,q):W)},Ee.integerValue=function(X){var te=new ee(this);return X==null?X=Oe:Ne(X,0,8),ve(te,te.e+1,X)},Ee.isEqualTo=Ee.eq=function(X,te){return Pe(this,new ee(X,te))===0},Ee.isFinite=function(){return!!this.c},Ee.isGreaterThan=Ee.gt=function(X,te){return Pe(this,new ee(X,te))>0},Ee.isGreaterThanOrEqualTo=Ee.gte=function(X,te){return(te=Pe(this,new ee(X,te)))===1||te===0},Ee.isInteger=function(){return!!this.c&&Ie(this.e/re)>this.c.length-2},Ee.isLessThan=Ee.lt=function(X,te){return Pe(this,new ee(X,te))<0},Ee.isLessThanOrEqualTo=Ee.lte=function(X,te){return(te=Pe(this,new ee(X,te)))===-1||te===0},Ee.isNaN=function(){return!this.s},Ee.isNegative=function(){return this.s<0},Ee.isPositive=function(){return this.s>0},Ee.isZero=function(){return!!this.c&&this.c[0]==0},Ee.minus=function(X,te){var ne,ae,Ae,oe,q=this,L=q.s;if(X=new ee(X,te),te=X.s,!L||!te)return new ee(NaN);if(L!=te)return X.s=-te,q.plus(X);var G=q.e/re,J=X.e/re,W=q.c,ie=X.c;if(!G||!J){if(!W||!ie)return W?(X.s=-te,X):new ee(ie?q:NaN);if(!W[0]||!ie[0])return ie[0]?(X.s=-te,X):new ee(W[0]?q:Oe==3?-0:0)}if(G=Ie(G),J=Ie(J),W=W.slice(),L=G-J){for((oe=L<0)?(L=-L,Ae=W):(J=G,Ae=ie),Ae.reverse(),te=L;te--;Ae.push(0));Ae.reverse()}else for(ae=(oe=(L=W.length)<(te=ie.length))?L:te,L=te=0;te<ae;te++)if(W[te]!=ie[te]){oe=W[te]<ie[te];break}if(oe&&(Ae=W,W=ie,ie=Ae,X.s=-X.s),te=(ae=ie.length)-(ne=W.length),te>0)for(;te--;W[ne++]=0);for(te=j-1;ae>L;){if(W[--ae]<ie[ae]){for(ne=ae;ne&&!W[--ne];W[ne]=te);--W[ne],W[ae]+=j}W[ae]-=ie[ae]}for(;W[0]==0;W.splice(0,1),--J);return W[0]?ct(X,W,J):(X.s=Oe==3?-1:1,X.c=[X.e=0],X)},Ee.modulo=Ee.mod=function(X,te){var ne,ae,Ae=this;return X=new ee(X,te),!Ae.c||!X.s||X.c&&!X.c[0]?new ee(NaN):!X.c||Ae.c&&!Ae.c[0]?new ee(Ae):(Se==9?(ae=X.s,X.s=1,ne=be(Ae,X,0,3),X.s=ae,ne.s*=ae):ne=be(Ae,X,0,Se),X=Ae.minus(ne.times(X)),!X.c[0]&&Se==1&&(X.s=Ae.s),X)},Ee.multipliedBy=Ee.times=function(X,te){var ne,ae,Ae,oe,q,L,G,J,W,ie,le,fe,we,Me,De,me=this,Ge=me.c,et=(X=new ee(X,te)).c;if(!Ge||!et||!Ge[0]||!et[0])return!me.s||!X.s||Ge&&!Ge[0]&&!et||et&&!et[0]&&!Ge?X.c=X.e=X.s=null:(X.s*=me.s,!Ge||!et?X.c=X.e=null:(X.c=[0],X.e=0)),X;for(ae=Ie(me.e/re)+Ie(X.e/re),X.s*=me.s,G=Ge.length,ie=et.length,G<ie&&(we=Ge,Ge=et,et=we,Ae=G,G=ie,ie=Ae),Ae=G+ie,we=[];Ae--;we.push(0));for(Me=j,De=ue,Ae=ie;--Ae>=0;){for(ne=0,le=et[Ae]%De,fe=et[Ae]/De|0,q=G,oe=Ae+q;oe>Ae;)J=Ge[--q]%De,W=Ge[q]/De|0,L=fe*J+W*le,J=le*J+L%De*De+we[oe]+ne,ne=(J/Me|0)+(L/De|0)+fe*W,we[oe--]=J%Me;we[oe]=ne}return ne?++ae:we.splice(0,1),ct(X,we,ae)},Ee.negated=function(){var X=new ee(this);return X.s=-X.s||null,X},Ee.plus=function(X,te){var ne,ae=this,Ae=ae.s;if(X=new ee(X,te),te=X.s,!Ae||!te)return new ee(NaN);if(Ae!=te)return X.s=-te,ae.minus(X);var oe=ae.e/re,q=X.e/re,L=ae.c,G=X.c;if(!oe||!q){if(!L||!G)return new ee(Ae/0);if(!L[0]||!G[0])return G[0]?X:new ee(L[0]?ae:Ae*0)}if(oe=Ie(oe),q=Ie(q),L=L.slice(),Ae=oe-q){for(Ae>0?(q=oe,ne=G):(Ae=-Ae,ne=L),ne.reverse();Ae--;ne.push(0));ne.reverse()}for(Ae=L.length,te=G.length,Ae-te<0&&(ne=G,G=L,L=ne,te=Ae),Ae=0;te;)Ae=(L[--te]=L[te]+G[te]+Ae)/j|0,L[te]=j===L[te]?0:L[te]%j;return Ae&&(L=[Ae].concat(L),++q),ct(X,L,q)},Ee.precision=Ee.sd=function(X,te){var ne,ae,Ae,oe=this;if(X!=null&&X!==!!X)return Ne(X,1,de),te==null?te=Oe:Ne(te,0,8),ve(new ee(oe),X,te);if(!(ne=oe.c))return null;if(Ae=ne.length-1,ae=Ae*re+1,Ae=ne[Ae]){for(;Ae%10==0;Ae/=10,ae--);for(Ae=ne[0];Ae>=10;Ae/=10,ae++);}return X&&oe.e+1>ae&&(ae=oe.e+1),ae},Ee.shiftedBy=function(X){return Ne(X,-ge,ge),this.times("1e"+X)},Ee.squareRoot=Ee.sqrt=function(){var X,te,ne,ae,Ae,oe=this,q=oe.c,L=oe.s,G=oe.e,J=qe+4,W=new ee("0.5");if(L!==1||!q||!q[0])return new ee(!L||L<0&&(!q||q[0])?NaN:q?oe:1/0);if(L=Math.sqrt(+xe(oe)),L==0||L==1/0?(te=Fe(q),(te.length+G)%2==0&&(te+="0"),L=Math.sqrt(+te),G=Ie((G+1)/2)-(G<0||G%2),L==1/0?te="5e"+G:(te=L.toExponential(),te=te.slice(0,te.indexOf("e")+1)+G),ne=new ee(te)):ne=new ee(L+""),ne.c[0]){for(G=ne.e,L=G+J,L<3&&(L=0);;)if(Ae=ne,ne=W.times(Ae.plus(be(oe,Ae,J,1))),Fe(Ae.c).slice(0,L)===(te=Fe(ne.c)).slice(0,L))if(ne.e<G&&--L,te=te.slice(L-3,L+1),te=="9999"||!ae&&te=="4999"){if(!ae&&(ve(Ae,Ae.e+qe+2,0),Ae.times(Ae).eq(oe))){ne=Ae;break}J+=4,L+=4,ae=1}else{(!+te||!+te.slice(1)&&te.charAt(0)=="5")&&(ve(ne,ne.e+qe+2,1),X=!ne.times(ne).eq(oe));break}}return ve(ne,ne.e+qe+1,Oe,X)},Ee.toExponential=function(X,te){return X!=null&&(Ne(X,0,de),X++),rt(this,X,te,1)},Ee.toFixed=function(X,te){return X!=null&&(Ne(X,0,de),X=X+this.e+1),rt(this,X,te)},Ee.toFormat=function(X,te,ne){var ae,Ae=this;if(ne==null)X!=null&&te&&typeof te=="object"?(ne=te,te=null):X&&typeof X=="object"?(ne=X,X=te=null):ne=Re;else if(typeof ne!="object")throw Error(O+"Argument not an object: "+ne);if(ae=Ae.toFixed(X,te),Ae.c){var oe,q=ae.split("."),L=+ne.groupSize,G=+ne.secondaryGroupSize,J=ne.groupSeparator||"",W=q[0],ie=q[1],le=Ae.s<0,fe=le?W.slice(1):W,we=fe.length;if(G&&(oe=L,L=G,G=oe,we-=oe),L>0&&we>0){for(oe=we%L||L,W=fe.substr(0,oe);oe<we;oe+=L)W+=J+fe.substr(oe,L);G>0&&(W+=J+fe.slice(oe)),le&&(W="-"+W)}ae=ie?W+(ne.decimalSeparator||"")+((G=+ne.fractionGroupSize)?ie.replace(new RegExp("\\d{"+G+"}\\B","g"),"$&"+(ne.fractionGroupSeparator||"")):ie):W}return(ne.prefix||"")+ae+(ne.suffix||"")},Ee.toFraction=function(X){var te,ne,ae,Ae,oe,q,L,G,J,W,ie,le,fe=this,we=fe.c;if(X!=null&&(L=new ee(X),!L.isInteger()&&(L.c||L.s!==1)||L.lt(ze)))throw Error(O+"Argument "+(L.isInteger()?"out of range: ":"not an integer: ")+xe(L));if(!we)return new ee(fe);for(te=new ee(ze),J=ne=new ee(ze),ae=G=new ee(ze),le=Fe(we),oe=te.e=le.length-fe.e-1,te.c[0]=ce[(q=oe%re)<0?re+q:q],X=!X||L.comparedTo(te)>0?oe>0?te:J:L,q=pe,pe=1/0,L=new ee(le),G.c[0]=0;W=be(L,te,0,1),Ae=ne.plus(W.times(ae)),Ae.comparedTo(X)!=1;)ne=ae,ae=Ae,J=G.plus(W.times(Ae=J)),G=Ae,te=L.minus(W.times(Ae=te)),L=Ae;return Ae=be(X.minus(ne),ae,0,1),G=G.plus(Ae.times(J)),ne=ne.plus(Ae.times(ae)),G.s=J.s=fe.s,oe=oe*2,ie=be(J,ae,oe,Oe).minus(fe).abs().comparedTo(be(G,ne,oe,Oe).minus(fe).abs())<1?[J,ae]:[G,ne],pe=q,ie},Ee.toNumber=function(){return+xe(this)},Ee.toPrecision=function(X,te){return X!=null&&Ne(X,1,de),rt(this,X,te,2)},Ee.toString=function(X){var te,ne=this,ae=ne.s,Ae=ne.e;return Ae===null?ae?(te="Infinity",ae<0&&(te="-"+te)):te="NaN":(X==null?te=Ae<=Ze||Ae>=Be?ot(Fe(ne.c),Ae):Ke(Fe(ne.c),Ae,"0"):X===10&&Xe?(ne=ve(new ee(ne),qe+Ae+1,Oe),te=Ke(Fe(ne.c),ne.e,"0")):(Ne(X,2,Te.length,"Base"),te=Ye(Ke(Fe(ne.c),Ae,"0"),10,X,ae,!0)),ae<0&&ne.c[0]&&(te="-"+te)),te},Ee.valueOf=Ee.toJSON=function(){return xe(this)},Ee._isBigNumber=!0,ke!=null&&ee.set(ke),ee}function Ie(ke){var be=ke|0;return ke>0||ke===be?be:be-1}function Fe(ke){for(var be,Ye,Je=1,Ee=ke.length,ze=ke[0]+"";Je<Ee;){for(be=ke[Je++]+"",Ye=re-be.length;Ye--;be="0"+be);ze+=be}for(Ee=ze.length;ze.charCodeAt(--Ee)===48;);return ze.slice(0,Ee+1||1)}function Pe(ke,be){var Ye,Je,Ee=ke.c,ze=be.c,qe=ke.s,Oe=be.s,Ze=ke.e,Be=be.e;if(!qe||!Oe)return null;if(Ye=Ee&&!Ee[0],Je=ze&&!ze[0],Ye||Je)return Ye?Je?0:-Oe:qe;if(qe!=Oe)return qe;if(Ye=qe<0,Je=Ze==Be,!Ee||!ze)return Je?0:!Ee^Ye?1:-1;if(!Je)return Ze>Be^Ye?1:-1;for(Oe=(Ze=Ee.length)<(Be=ze.length)?Ze:Be,qe=0;qe<Oe;qe++)if(Ee[qe]!=ze[qe])return Ee[qe]>ze[qe]^Ye?1:-1;return Ze==Be?0:Ze>Be^Ye?1:-1}function Ne(ke,be,Ye,Je){if(ke<be||ke>Ye||ke!==U(ke))throw Error(O+(Je||"Argument")+(typeof ke=="number"?ke<be||ke>Ye?" out of range: ":" not an integer: ":" not a primitive number: ")+String(ke))}function it(ke){var be=ke.c.length-1;return Ie(ke.e/re)==be&&ke.c[be]%2!=0}function ot(ke,be){return(ke.length>1?ke.charAt(0)+"."+ke.slice(1):ke)+(be<0?"e":"e+")+be}function Ke(ke,be,Ye){var Je,Ee;if(be<0){for(Ee=Ye+".";++be;Ee+=Ye);ke=Ee+ke}else if(Je=ke.length,++be>Je){for(Ee=Ye,be-=Je;--be;Ee+=Ye);ke+=Ee}else be<Je&&(ke=ke.slice(0,be)+"."+ke.slice(be));return ke}Q=Ce(),Q.default=Q.BigNumber=Q,w.exports?w.exports=Q:(B||(B=typeof self!="undefined"&&self?self:window),B.BigNumber=Q)})(commonjsGlobal)})(bignumber);var decoder_asm=function w(B,Q,F){var D=new B.Uint8Array(F),U=Q.pushInt,O=Q.pushInt32,Y=Q.pushInt32Neg,j=Q.pushInt64,re=Q.pushInt64Neg,ge=Q.pushFloat,ce=Q.pushFloatSingle,ue=Q.pushFloatDouble,de=Q.pushTrue,Ce=Q.pushFalse,Ie=Q.pushUndefined,Fe=Q.pushNull,Pe=Q.pushInfinity,Ne=Q.pushInfinityNeg,it=Q.pushNaN,ot=Q.pushNaNNeg,Ke=Q.pushArrayStart,ke=Q.pushArrayStartFixed,be=Q.pushArrayStartFixed32,Ye=Q.pushArrayStartFixed64,Je=Q.pushObjectStart,Ee=Q.pushObjectStartFixed,ze=Q.pushObjectStartFixed32,qe=Q.pushObjectStartFixed64,Oe=Q.pushByteString,Ze=Q.pushByteStringStart,Be=Q.pushUtf8String,he=Q.pushUtf8StringStart,pe=Q.pushSimpleUnassigned,ye=Q.pushTagStart,Se=Q.pushTagStart4,Qe=Q.pushTagStart8,Re=Q.pushTagUnassigned,Te=Q.pushBreak,Xe=B.Math.pow,ee=0,rt=0,At=0;function ct(se){for(se=se|0,ee=0,rt=se;(ee|0)<(rt|0)&&(At=Lt[D[ee]&255](D[ee]|0)|0,!((At|0)>0)););return At|0}function ve(se){return se=se|0,((ee|0)+(se|0)|0)<(rt|0)?0:1}function xe(se){return se=se|0,D[se|0]<<8|D[se+1|0]|0}function X(se){return se=se|0,D[se|0]<<24|D[se+1|0]<<16|D[se+2|0]<<8|D[se+3|0]|0}function te(se){return se=se|0,U(se|0),ee=ee+1|0,0}function ne(se){return se=se|0,ve(1)|0?1:(U(D[ee+1|0]|0),ee=ee+2|0,0)}function ae(se){return se=se|0,ve(2)|0?1:(U(xe(ee+1|0)|0),ee=ee+3|0,0)}function Ae(se){return se=se|0,ve(4)|0?1:(O(xe(ee+1|0)|0,xe(ee+3|0)|0),ee=ee+5|0,0)}function oe(se){return se=se|0,ve(8)|0?1:(j(xe(ee+1|0)|0,xe(ee+3|0)|0,xe(ee+5|0)|0,xe(ee+7|0)|0),ee=ee+9|0,0)}function q(se){return se=se|0,U(-1-(se-32|0)|0),ee=ee+1|0,0}function L(se){return se=se|0,ve(1)|0?1:(U(-1-(D[ee+1|0]|0)|0),ee=ee+2|0,0)}function G(se){se=se|0;var He=0;return ve(2)|0?1:(He=xe(ee+1|0)|0,U(-1-(He|0)|0),ee=ee+3|0,0)}function J(se){return se=se|0,ve(4)|0?1:(Y(xe(ee+1|0)|0,xe(ee+3|0)|0),ee=ee+5|0,0)}function W(se){return se=se|0,ve(8)|0?1:(re(xe(ee+1|0)|0,xe(ee+3|0)|0,xe(ee+5|0)|0,xe(ee+7|0)|0),ee=ee+9|0,0)}function ie(se){se=se|0;var He=0,Ue=0,Le=0;return Le=se-64|0,ve(Le|0)|0?1:(He=ee+1|0,Ue=(ee+1|0)+(Le|0)|0,Oe(He|0,Ue|0),ee=Ue|0,0)}function le(se){se=se|0;var He=0,Ue=0,Le=0;return ve(1)|0||(Le=D[ee+1|0]|0,He=ee+2|0,Ue=(ee+2|0)+(Le|0)|0,ve(Le+1|0)|0)?1:(Oe(He|0,Ue|0),ee=Ue|0,0)}function fe(se){se=se|0;var He=0,Ue=0,Le=0;return ve(2)|0||(Le=xe(ee+1|0)|0,He=ee+3|0,Ue=(ee+3|0)+(Le|0)|0,ve(Le+2|0)|0)?1:(Oe(He|0,Ue|0),ee=Ue|0,0)}function we(se){se=se|0;var He=0,Ue=0,Le=0;return ve(4)|0||(Le=X(ee+1|0)|0,He=ee+5|0,Ue=(ee+5|0)+(Le|0)|0,ve(Le+4|0)|0)?1:(Oe(He|0,Ue|0),ee=Ue|0,0)}function Me(se){return se=se|0,1}function De(se){return se=se|0,Ze(),ee=ee+1|0,0}function me(se){se=se|0;var He=0,Ue=0,Le=0;return Le=se-96|0,ve(Le|0)|0?1:(He=ee+1|0,Ue=(ee+1|0)+(Le|0)|0,Be(He|0,Ue|0),ee=Ue|0,0)}function Ge(se){se=se|0;var He=0,Ue=0,Le=0;return ve(1)|0||(Le=D[ee+1|0]|0,He=ee+2|0,Ue=(ee+2|0)+(Le|0)|0,ve(Le+1|0)|0)?1:(Be(He|0,Ue|0),ee=Ue|0,0)}function et(se){se=se|0;var He=0,Ue=0,Le=0;return ve(2)|0||(Le=xe(ee+1|0)|0,He=ee+3|0,Ue=(ee+3|0)+(Le|0)|0,ve(Le+2|0)|0)?1:(Be(He|0,Ue|0),ee=Ue|0,0)}function lt(se){se=se|0;var He=0,Ue=0,Le=0;return ve(4)|0||(Le=X(ee+1|0)|0,He=ee+5|0,Ue=(ee+5|0)+(Le|0)|0,ve(Le+4|0)|0)?1:(Be(He|0,Ue|0),ee=Ue|0,0)}function ut(se){return se=se|0,1}function ht(se){return se=se|0,he(),ee=ee+1|0,0}function _e(se){return se=se|0,ke(se-128|0),ee=ee+1|0,0}function dt(se){return se=se|0,ve(1)|0?1:(ke(D[ee+1|0]|0),ee=ee+2|0,0)}function at(se){return se=se|0,ve(2)|0?1:(ke(xe(ee+1|0)|0),ee=ee+3|0,0)}function st(se){return se=se|0,ve(4)|0?1:(be(xe(ee+1|0)|0,xe(ee+3|0)|0),ee=ee+5|0,0)}function We(se){return se=se|0,ve(8)|0?1:(Ye(xe(ee+1|0)|0,xe(ee+3|0)|0,xe(ee+5|0)|0,xe(ee+7|0)|0),ee=ee+9|0,0)}function ft(se){return se=se|0,Ke(),ee=ee+1|0,0}function Ve(se){se=se|0;var He=0;return He=se-160|0,ve(He|0)|0?1:(Ee(He|0),ee=ee+1|0,0)}function mt(se){return se=se|0,ve(1)|0?1:(Ee(D[ee+1|0]|0),ee=ee+2|0,0)}function Et(se){return se=se|0,ve(2)|0?1:(Ee(xe(ee+1|0)|0),ee=ee+3|0,0)}function It(se){return se=se|0,ve(4)|0?1:(ze(xe(ee+1|0)|0,xe(ee+3|0)|0),ee=ee+5|0,0)}function yt(se){return se=se|0,ve(8)|0?1:(qe(xe(ee+1|0)|0,xe(ee+3|0)|0,xe(ee+5|0)|0,xe(ee+7|0)|0),ee=ee+9|0,0)}function Ct(se){return se=se|0,Je(),ee=ee+1|0,0}function gt(se){return se=se|0,ye(se-192|0|0),ee=ee+1|0,0}function Ht(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function Ut(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function Ot(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function Pt(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function nt(se){return se=se|0,ye(se-192|0|0),ee=ee+1|0,0}function qt(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function $t(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function Yt(se){return se=se|0,ye(se|0),ee=ee+1|0,0}function wt(se){return se=se|0,ve(1)|0?1:(ye(D[ee+1|0]|0),ee=ee+2|0,0)}function Qt(se){return se=se|0,ve(2)|0?1:(ye(xe(ee+1|0)|0),ee=ee+3|0,0)}function vt(se){return se=se|0,ve(4)|0?1:(Se(xe(ee+1|0)|0,xe(ee+3|0)|0),ee=ee+5|0,0)}function bt(se){return se=se|0,ve(8)|0?1:(Qe(xe(ee+1|0)|0,xe(ee+3|0)|0,xe(ee+5|0)|0,xe(ee+7|0)|0),ee=ee+9|0,0)}function tt(se){return se=se|0,pe((se|0)-224|0),ee=ee+1|0,0}function St(se){return se=se|0,Ce(),ee=ee+1|0,0}function kt(se){return se=se|0,de(),ee=ee+1|0,0}function xt(se){return se=se|0,Fe(),ee=ee+1|0,0}function Mt(se){return se=se|0,Ie(),ee=ee+1|0,0}function Nt(se){return se=se|0,ve(1)|0?1:(pe(D[ee+1|0]|0),ee=ee+2|0,0)}function Rt(se){se=se|0;var He=0,Ue=0,Le=1,Bt=0,pt=0,Jt=0;return ve(2)|0?1:(He=D[ee+1|0]|0,Ue=D[ee+2|0]|0,(He|0)&128&&(Le=-1),Bt=+(((He|0)&124)>>2),pt=+(((He|0)&3)<<8|Ue),+Bt==0?ge(+(+Le*5960464477539063e-23*+pt)):+Bt==31?+Le==1?+pt>0?it():Pe():+pt>0?ot():Ne():ge(+(+Le*Xe(2,+(+Bt-25))*+(1024+pt))),ee=ee+3|0,0)}function Tt(se){return se=se|0,ve(4)|0?1:(ce(D[ee+1|0]|0,D[ee+2|0]|0,D[ee+3|0]|0,D[ee+4|0]|0),ee=ee+5|0,0)}function Ft(se){return se=se|0,ve(8)|0?1:(ue(D[ee+1|0]|0,D[ee+2|0]|0,D[ee+3|0]|0,D[ee+4|0]|0,D[ee+5|0]|0,D[ee+6|0]|0,D[ee+7|0]|0,D[ee+8|0]|0),ee=ee+9|0,0)}function je(se){return se=se|0,1}function Dt(se){return se=se|0,Te(),ee=ee+1|0,0}var Lt=[te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,te,ne,ae,Ae,oe,je,je,je,je,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,L,G,J,W,je,je,je,je,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,ie,le,fe,we,Me,je,je,je,De,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,me,Ge,et,lt,ut,je,je,je,ht,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,_e,dt,at,st,We,je,je,je,ft,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,Ve,mt,Et,It,yt,je,je,je,Ct,gt,gt,gt,gt,gt,gt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,nt,wt,Qt,vt,bt,je,je,je,je,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,tt,St,kt,xt,Mt,Nt,Rt,Tt,Ft,je,je,je,Dt];return{parse:ct}},utils$3={},constants$2={};const Bignumber$2=bignumber.exports.BigNumber;constants$2.MT={POS_INT:0,NEG_INT:1,BYTE_STRING:2,UTF8_STRING:3,ARRAY:4,MAP:5,TAG:6,SIMPLE_FLOAT:7};constants$2.TAG={DATE_STRING:0,DATE_EPOCH:1,POS_BIGINT:2,NEG_BIGINT:3,DECIMAL_FRAC:4,BIGFLOAT:5,BASE64URL_EXPECTED:21,BASE64_EXPECTED:22,BASE16_EXPECTED:23,CBOR:24,URI:32,BASE64URL:33,BASE64:34,REGEXP:35,MIME:36};constants$2.NUMBYTES={ZERO:0,ONE:24,TWO:25,FOUR:26,EIGHT:27,INDEFINITE:31};constants$2.SIMPLE={FALSE:20,TRUE:21,NULL:22,UNDEFINED:23};constants$2.SYMS={NULL:Symbol("null"),UNDEFINED:Symbol("undef"),PARENT:Symbol("parent"),BREAK:Symbol("break"),STREAM:Symbol("stream")};constants$2.SHIFT32=Math.pow(2,32);constants$2.SHIFT16=Math.pow(2,16);constants$2.MAX_SAFE_HIGH=2097151;constants$2.NEG_ONE=new Bignumber$2(-1);constants$2.TEN=new Bignumber$2(10);constants$2.TWO=new Bignumber$2(2);constants$2.PARENT={ARRAY:0,OBJECT:1,MAP:2,TAG:3,BYTE_STRING:4,UTF8_STRING:5};(function(w){const{Buffer:B}=buffer,Q=bignumber.exports.BigNumber,F=constants$2,D=F.SHIFT32,U=F.SHIFT16,O=2097151;w.parseHalf=function(re){var ge,ce,ue;return ue=re[0]&128?-1:1,ge=(re[0]&124)>>2,ce=(re[0]&3)<<8|re[1],ge?ge===31?ue*(ce?0/0:1/0):ue*Math.pow(2,ge-25)*(1024+ce):ue*5960464477539063e-23*ce};function Y(j){return j<16?"0"+j.toString(16):j.toString(16)}w.arrayBufferToBignumber=function(j){const re=j.byteLength;let ge="";for(let ce=0;ce<re;ce++)ge+=Y(j[ce]);return new Q(ge,16)},w.buildMap=j=>{const re=new Map,ge=Object.keys(j),ce=ge.length;for(let ue=0;ue<ce;ue++)re.set(ge[ue],j[ge[ue]]);return re},w.buildInt32=(j,re)=>j*U+re,w.buildInt64=(j,re,ge,ce)=>{const ue=w.buildInt32(j,re),de=w.buildInt32(ge,ce);return ue>O?new Q(ue).times(D).plus(de):ue*D+de},w.writeHalf=function(re,ge){const ce=B.allocUnsafe(4);ce.writeFloatBE(ge,0);const ue=ce.readUInt32BE(0);if((ue&8191)!==0)return!1;var de=ue>>16&32768;const Ce=ue>>23&255,Ie=ue&8388607;if(Ce>=113&&Ce<=142)de+=(Ce-112<<10)+(Ie>>13);else if(Ce>=103&&Ce<113){if(Ie&(1<<126-Ce)-1)return!1;de+=Ie+8388608>>126-Ce}else return!1;return re.writeUInt16BE(de,0),!0},w.keySorter=function(j,re){var ge=j[0].byteLength,ce=re[0].byteLength;return ge>ce?1:ce>ge?-1:j[0].compare(re[0])},w.isNegativeZero=j=>j===0&&1/j<0,w.nextPowerOf2=j=>{let re=0;if(j&&!(j&j-1))return j;for(;j!==0;)j>>=1,re+=1;return 1<<re}})(utils$3);const constants$1=constants$2,MT$1=constants$1.MT,SIMPLE=constants$1.SIMPLE,SYMS$1=constants$1.SYMS;class Simple$1{constructor(B){if(typeof B!="number")throw new Error("Invalid Simple type: "+typeof B);if(B<0||B>255||(B|0)!==B)throw new Error("value must be a small positive integer: "+B);this.value=B}toString(){return"simple("+this.value+")"}inspect(){return"simple("+this.value+")"}encodeCBOR(B){return B._pushInt(this.value,MT$1.SIMPLE_FLOAT)}static isSimple(B){return B instanceof Simple$1}static decode(B,Q){switch(Q==null&&(Q=!0),B){case SIMPLE.FALSE:return!1;case SIMPLE.TRUE:return!0;case SIMPLE.NULL:return Q?null:SYMS$1.NULL;case SIMPLE.UNDEFINED:return Q?void 0:SYMS$1.UNDEFINED;case-1:if(!Q)throw new Error("Invalid BREAK");return SYMS$1.BREAK;default:return new Simple$1(B)}}}var simple=Simple$1;class Tagged$1{constructor(B,Q,F){if(this.tag=B,this.value=Q,this.err=F,typeof this.tag!="number")throw new Error("Invalid tag type ("+typeof this.tag+")");if(this.tag<0||(this.tag|0)!==this.tag)throw new Error("Tag must be a positive integer: "+this.tag)}toString(){return`${this.tag}(${JSON.stringify(this.value)})`}encodeCBOR(B){return B._pushTag(this.tag),B.pushAny(this.value)}convert(B){var Q,F;if(F=B!=null?B[this.tag]:void 0,typeof F!="function"&&(F=Tagged$1["_tag"+this.tag],typeof F!="function"))return this;try{return F.call(Tagged$1,this.value)}catch(D){return Q=D,this.err=Q,this}}}var tagged$1=Tagged$1;const defaultBase$1=self.location?self.location.protocol+"//"+self.location.host:"",URL$3=self.URL;class URLWithLegacySupport$2{constructor(B="",Q=defaultBase$1){this.super=new URL$3(B,Q),this.path=this.pathname+this.search,this.auth=this.username&&this.password?this.username+":"+this.password:null,this.query=this.search&&this.search.startsWith("?")?this.search.slice(1):null}get hash(){return this.super.hash}get host(){return this.super.host}get hostname(){return this.super.hostname}get href(){return this.super.href}get origin(){return this.super.origin}get password(){return this.super.password}get pathname(){return this.super.pathname}get port(){return this.super.port}get protocol(){return this.super.protocol}get search(){return this.super.search}get searchParams(){return this.super.searchParams}get username(){return this.super.username}set hash(B){this.super.hash=B}set host(B){this.super.host=B}set hostname(B){this.super.hostname=B}set href(B){this.super.href=B}set origin(B){this.super.origin=B}set password(B){this.super.password=B}set pathname(B){this.super.pathname=B}set port(B){this.super.port=B}set protocol(B){this.super.protocol=B}set search(B){this.super.search=B}set searchParams(B){this.super.searchParams=B}set username(B){this.super.username=B}createObjectURL(B){return this.super.createObjectURL(B)}revokeObjectURL(B){this.super.revokeObjectURL(B)}toJSON(){return this.super.toJSON()}toString(){return this.super.toString()}format(){return this.toString()}}function format$2(w){if(typeof w=="string")return new URL$3(w).toString();if(!(w instanceof URL$3)){const B=w.username&&w.password?`${w.username}:${w.password}@`:"",Q=w.auth?w.auth+"@":"",F=w.port?":"+w.port:"",D=w.protocol?w.protocol+"//":"",U=w.host||"",O=w.hostname||"",Y=w.search||(w.query?"?"+w.query:""),j=w.hash||"",re=w.pathname||"",ge=w.path||re+Y;return`${D}${B||Q}${U||O+F}${ge}${j}`}}var urlBrowser={URLWithLegacySupport:URLWithLegacySupport$2,URLSearchParams:self.URLSearchParams,defaultBase:defaultBase$1,format:format$2};const{URLWithLegacySupport:URLWithLegacySupport$1,format:format$1}=urlBrowser;var relative$1=(w,B={},Q={},F)=>{let D=B.protocol?B.protocol.replace(":",""):"http";D=(Q[D]||F||D)+":";let U;try{U=new URLWithLegacySupport$1(w)}catch{U={}}const O=Object.assign({},B,{protocol:D||U.protocol,host:B.host||U.host});return new URLWithLegacySupport$1(w,format$1(O)).toString()};const{URLWithLegacySupport,format,URLSearchParams:URLSearchParams$1,defaultBase}=urlBrowser,relative=relative$1;var isoUrl={URL:URLWithLegacySupport,URLSearchParams:URLSearchParams$1,format,relative,defaultBase};const{Buffer:Buffer$2}=buffer,ieee754=ieee754$1,Bignumber$1=bignumber.exports.BigNumber,parser=decoder_asm,utils$2=utils$3,c=constants$2,Simple=simple,Tagged=tagged$1,{URL:URL$2}=isoUrl;class Decoder$1{constructor(B){B=B||{},!B.size||B.size<65536?B.size=65536:B.size=utils$2.nextPowerOf2(B.size),this._heap=new ArrayBuffer(B.size),this._heap8=new Uint8Array(this._heap),this._buffer=Buffer$2.from(this._heap),this._reset(),this._knownTags=Object.assign({0:Q=>new Date(Q),1:Q=>new Date(Q*1e3),2:Q=>utils$2.arrayBufferToBignumber(Q),3:Q=>c.NEG_ONE.minus(utils$2.arrayBufferToBignumber(Q)),4:Q=>c.TEN.pow(Q[0]).times(Q[1]),5:Q=>c.TWO.pow(Q[0]).times(Q[1]),32:Q=>new URL$2(Q),35:Q=>new RegExp(Q)},B.tags),this.parser=parser({},{log:console.log.bind(console),pushInt:this.pushInt.bind(this),pushInt32:this.pushInt32.bind(this),pushInt32Neg:this.pushInt32Neg.bind(this),pushInt64:this.pushInt64.bind(this),pushInt64Neg:this.pushInt64Neg.bind(this),pushFloat:this.pushFloat.bind(this),pushFloatSingle:this.pushFloatSingle.bind(this),pushFloatDouble:this.pushFloatDouble.bind(this),pushTrue:this.pushTrue.bind(this),pushFalse:this.pushFalse.bind(this),pushUndefined:this.pushUndefined.bind(this),pushNull:this.pushNull.bind(this),pushInfinity:this.pushInfinity.bind(this),pushInfinityNeg:this.pushInfinityNeg.bind(this),pushNaN:this.pushNaN.bind(this),pushNaNNeg:this.pushNaNNeg.bind(this),pushArrayStart:this.pushArrayStart.bind(this),pushArrayStartFixed:this.pushArrayStartFixed.bind(this),pushArrayStartFixed32:this.pushArrayStartFixed32.bind(this),pushArrayStartFixed64:this.pushArrayStartFixed64.bind(this),pushObjectStart:this.pushObjectStart.bind(this),pushObjectStartFixed:this.pushObjectStartFixed.bind(this),pushObjectStartFixed32:this.pushObjectStartFixed32.bind(this),pushObjectStartFixed64:this.pushObjectStartFixed64.bind(this),pushByteString:this.pushByteString.bind(this),pushByteStringStart:this.pushByteStringStart.bind(this),pushUtf8String:this.pushUtf8String.bind(this),pushUtf8StringStart:this.pushUtf8StringStart.bind(this),pushSimpleUnassigned:this.pushSimpleUnassigned.bind(this),pushTagUnassigned:this.pushTagUnassigned.bind(this),pushTagStart:this.pushTagStart.bind(this),pushTagStart4:this.pushTagStart4.bind(this),pushTagStart8:this.pushTagStart8.bind(this),pushBreak:this.pushBreak.bind(this)},this._heap)}get _depth(){return this._parents.length}get _currentParent(){return this._parents[this._depth-1]}get _ref(){return this._currentParent.ref}_closeParent(){var B=this._parents.pop();if(B.length>0)throw new Error(`Missing ${B.length} elements`);switch(B.type){case c.PARENT.TAG:this._push(this.createTag(B.ref[0],B.ref[1]));break;case c.PARENT.BYTE_STRING:this._push(this.createByteString(B.ref,B.length));break;case c.PARENT.UTF8_STRING:this._push(this.createUtf8String(B.ref,B.length));break;case c.PARENT.MAP:if(B.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createMap(B.ref,B.length));break;case c.PARENT.OBJECT:if(B.values%2>0)throw new Error("Odd number of elements in the map");this._push(this.createObject(B.ref,B.length));break;case c.PARENT.ARRAY:this._push(this.createArray(B.ref,B.length));break}this._currentParent&&this._currentParent.type===c.PARENT.TAG&&this._dec()}_dec(){const B=this._currentParent;B.length<0||(B.length--,B.length===0&&this._closeParent())}_push(B,Q){const F=this._currentParent;switch(F.values++,F.type){case c.PARENT.ARRAY:case c.PARENT.BYTE_STRING:case c.PARENT.UTF8_STRING:F.length>-1?this._ref[this._ref.length-F.length]=B:this._ref.push(B),this._dec();break;case c.PARENT.OBJECT:F.tmpKey!=null?(this._ref[F.tmpKey]=B,F.tmpKey=null,this._dec()):(F.tmpKey=B,typeof F.tmpKey!="string"&&(F.type=c.PARENT.MAP,F.ref=utils$2.buildMap(F.ref)));break;case c.PARENT.MAP:F.tmpKey!=null?(this._ref.set(F.tmpKey,B),F.tmpKey=null,this._dec()):F.tmpKey=B;break;case c.PARENT.TAG:this._ref.push(B),Q||this._dec();break;default:throw new Error("Unknown parent type")}}_createParent(B,Q,F){this._parents[this._depth]={type:Q,length:F,ref:B,values:0,tmpKey:null}}_reset(){this._res=[],this._parents=[{type:c.PARENT.ARRAY,length:-1,ref:this._res,values:0,tmpKey:null}]}createTag(B,Q){const F=this._knownTags[B];return F?F(Q):new Tagged(B,Q)}createMap(B,Q){return B}createObject(B,Q){return B}createArray(B,Q){return B}createByteString(B,Q){return Buffer$2.concat(B)}createByteStringFromHeap(B,Q){return B===Q?Buffer$2.alloc(0):Buffer$2.from(this._heap.slice(B,Q))}createInt(B){return B}createInt32(B,Q){return utils$2.buildInt32(B,Q)}createInt64(B,Q,F,D){return utils$2.buildInt64(B,Q,F,D)}createFloat(B){return B}createFloatSingle(B,Q,F,D){return ieee754.read([B,Q,F,D],0,!1,23,4)}createFloatDouble(B,Q,F,D,U,O,Y,j){return ieee754.read([B,Q,F,D,U,O,Y,j],0,!1,52,8)}createInt32Neg(B,Q){return-1-utils$2.buildInt32(B,Q)}createInt64Neg(B,Q,F,D){const U=utils$2.buildInt32(B,Q),O=utils$2.buildInt32(F,D);return U>c.MAX_SAFE_HIGH?c.NEG_ONE.minus(new Bignumber$1(U).times(c.SHIFT32).plus(O)):-1-(U*c.SHIFT32+O)}createTrue(){return!0}createFalse(){return!1}createNull(){return null}createUndefined(){}createInfinity(){return 1/0}createInfinityNeg(){return-1/0}createNaN(){return NaN}createNaNNeg(){return NaN}createUtf8String(B,Q){return B.join("")}createUtf8StringFromHeap(B,Q){return B===Q?"":this._buffer.toString("utf8",B,Q)}createSimpleUnassigned(B){return new Simple(B)}pushInt(B){this._push(this.createInt(B))}pushInt32(B,Q){this._push(this.createInt32(B,Q))}pushInt64(B,Q,F,D){this._push(this.createInt64(B,Q,F,D))}pushFloat(B){this._push(this.createFloat(B))}pushFloatSingle(B,Q,F,D){this._push(this.createFloatSingle(B,Q,F,D))}pushFloatDouble(B,Q,F,D,U,O,Y,j){this._push(this.createFloatDouble(B,Q,F,D,U,O,Y,j))}pushInt32Neg(B,Q){this._push(this.createInt32Neg(B,Q))}pushInt64Neg(B,Q,F,D){this._push(this.createInt64Neg(B,Q,F,D))}pushTrue(){this._push(this.createTrue())}pushFalse(){this._push(this.createFalse())}pushNull(){this._push(this.createNull())}pushUndefined(){this._push(this.createUndefined())}pushInfinity(){this._push(this.createInfinity())}pushInfinityNeg(){this._push(this.createInfinityNeg())}pushNaN(){this._push(this.createNaN())}pushNaNNeg(){this._push(this.createNaNNeg())}pushArrayStart(){this._createParent([],c.PARENT.ARRAY,-1)}pushArrayStartFixed(B){this._createArrayStartFixed(B)}pushArrayStartFixed32(B,Q){const F=utils$2.buildInt32(B,Q);this._createArrayStartFixed(F)}pushArrayStartFixed64(B,Q,F,D){const U=utils$2.buildInt64(B,Q,F,D);this._createArrayStartFixed(U)}pushObjectStart(){this._createObjectStartFixed(-1)}pushObjectStartFixed(B){this._createObjectStartFixed(B)}pushObjectStartFixed32(B,Q){const F=utils$2.buildInt32(B,Q);this._createObjectStartFixed(F)}pushObjectStartFixed64(B,Q,F,D){const U=utils$2.buildInt64(B,Q,F,D);this._createObjectStartFixed(U)}pushByteStringStart(){this._parents[this._depth]={type:c.PARENT.BYTE_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushByteString(B,Q){this._push(this.createByteStringFromHeap(B,Q))}pushUtf8StringStart(){this._parents[this._depth]={type:c.PARENT.UTF8_STRING,length:-1,ref:[],values:0,tmpKey:null}}pushUtf8String(B,Q){this._push(this.createUtf8StringFromHeap(B,Q))}pushSimpleUnassigned(B){this._push(this.createSimpleUnassigned(B))}pushTagStart(B){this._parents[this._depth]={type:c.PARENT.TAG,length:1,ref:[B]}}pushTagStart4(B,Q){this.pushTagStart(utils$2.buildInt32(B,Q))}pushTagStart8(B,Q,F,D){this.pushTagStart(utils$2.buildInt64(B,Q,F,D))}pushTagUnassigned(B){this._push(this.createTag(B))}pushBreak(){if(this._currentParent.length>-1)throw new Error("Unexpected break");this._closeParent()}_createObjectStartFixed(B){if(B===0){this._push(this.createObject({}));return}this._createParent({},c.PARENT.OBJECT,B)}_createArrayStartFixed(B){if(B===0){this._push(this.createArray([]));return}this._createParent(new Array(B),c.PARENT.ARRAY,B)}_decode(B){if(B.byteLength===0)throw new Error("Input too short");this._reset(),this._heap8.set(B);const Q=this.parser.parse(B.byteLength);if(this._depth>1){for(;this._currentParent.length===0;)this._closeParent();if(this._depth>1)throw new Error("Undeterminated nesting")}if(Q>0)throw new Error("Failed to parse");if(this._res.length===0)throw new Error("No valid result")}decodeFirst(B){return this._decode(B),this._res[0]}decodeAll(B){return this._decode(B),this._res}static decode(B,Q){return typeof B=="string"&&(B=Buffer$2.from(B,Q||"hex")),new Decoder$1({size:B.length}).decodeFirst(B)}static decodeAll(B,Q){return typeof B=="string"&&(B=Buffer$2.from(B,Q||"hex")),new Decoder$1({size:B.length}).decodeAll(B)}}Decoder$1.decodeFirst=Decoder$1.decode;var decoder=Decoder$1;const{Buffer:Buffer$1}=buffer,Decoder=decoder,utils$1=utils$3;class Diagnose extends Decoder{createTag(B,Q){return`${B}(${Q})`}createInt(B){return super.createInt(B).toString()}createInt32(B,Q){return super.createInt32(B,Q).toString()}createInt64(B,Q,F,D){return super.createInt64(B,Q,F,D).toString()}createInt32Neg(B,Q){return super.createInt32Neg(B,Q).toString()}createInt64Neg(B,Q,F,D){return super.createInt64Neg(B,Q,F,D).toString()}createTrue(){return"true"}createFalse(){return"false"}createFloat(B){const Q=super.createFloat(B);return utils$1.isNegativeZero(B)?"-0_1":`${Q}_1`}createFloatSingle(B,Q,F,D){return`${super.createFloatSingle(B,Q,F,D)}_2`}createFloatDouble(B,Q,F,D,U,O,Y,j){return`${super.createFloatDouble(B,Q,F,D,U,O,Y,j)}_3`}createByteString(B,Q){const F=B.join(", ");return Q===-1?`(_ ${F})`:`h'${F}`}createByteStringFromHeap(B,Q){return`h'${Buffer$1.from(super.createByteStringFromHeap(B,Q)).toString("hex")}'`}createInfinity(){return"Infinity_1"}createInfinityNeg(){return"-Infinity_1"}createNaN(){return"NaN_1"}createNaNNeg(){return"-NaN_1"}createNull(){return"null"}createUndefined(){return"undefined"}createSimpleUnassigned(B){return`simple(${B})`}createArray(B,Q){const F=super.createArray(B,Q);return Q===-1?`[_ ${F.join(", ")}]`:`[${F.join(", ")}]`}createMap(B,Q){const F=super.createMap(B),D=Array.from(F.keys()).reduce(collectObject(F),"");return Q===-1?`{_ ${D}}`:`{${D}}`}createObject(B,Q){const F=super.createObject(B),D=Object.keys(F).reduce(collectObject(F),"");return Q===-1?`{_ ${D}}`:`{${D}}`}createUtf8String(B,Q){const F=B.join(", ");return Q===-1?`(_ ${F})`:`"${F}"`}createUtf8StringFromHeap(B,Q){return`"${Buffer$1.from(super.createUtf8StringFromHeap(B,Q)).toString("utf8")}"`}static diagnose(B,Q){return typeof B=="string"&&(B=Buffer$1.from(B,Q||"hex")),new Diagnose().decodeFirst(B)}}var diagnose=Diagnose;function collectObject(w){return(B,Q)=>B?`${B}, ${Q}: ${w[Q]}`:`${Q}: ${w[Q]}`}const{Buffer}=buffer,{URL:URL$1}=isoUrl,Bignumber=bignumber.exports.BigNumber,utils=utils$3,constants=constants$2,MT=constants.MT,NUMBYTES=constants.NUMBYTES,SHIFT32=constants.SHIFT32,SYMS=constants.SYMS,TAG=constants.TAG,HALF=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.TWO,FLOAT=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.FOUR,DOUBLE=constants.MT.SIMPLE_FLOAT<<5|constants.NUMBYTES.EIGHT,TRUE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.TRUE,FALSE=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.FALSE,UNDEFINED=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.UNDEFINED,NULL=constants.MT.SIMPLE_FLOAT<<5|constants.SIMPLE.NULL,MAXINT_BN=new Bignumber("0x20000000000000"),BUF_NAN=Buffer.from("f97e00","hex"),BUF_INF_NEG=Buffer.from("f9fc00","hex"),BUF_INF_POS=Buffer.from("f97c00","hex");function toType(w){return{}.toString.call(w).slice(8,-1)}class Encoder{constructor(B){B=B||{},this.streaming=typeof B.stream=="function",this.onData=B.stream,this.semanticTypes=[[URL$1,this._pushUrl],[Bignumber,this._pushBigNumber]];const Q=B.genTypes||[],F=Q.length;for(let D=0;D<F;D++)this.addSemanticType(Q[D][0],Q[D][1]);this._reset()}addSemanticType(B,Q){const F=this.semanticTypes.length;for(let D=0;D<F;D++)if(this.semanticTypes[D][0]===B){const O=this.semanticTypes[D][1];return this.semanticTypes[D][1]=Q,O}return this.semanticTypes.push([B,Q]),null}push(B){return B&&(this.result[this.offset]=B,this.resultMethod[this.offset]=0,this.resultLength[this.offset]=B.length,this.offset++,this.streaming&&this.onData(this.finalize())),!0}pushWrite(B,Q,F){return this.result[this.offset]=B,this.resultMethod[this.offset]=Q,this.resultLength[this.offset]=F,this.offset++,this.streaming&&this.onData(this.finalize()),!0}_pushUInt8(B){return this.pushWrite(B,1,1)}_pushUInt16BE(B){return this.pushWrite(B,2,2)}_pushUInt32BE(B){return this.pushWrite(B,3,4)}_pushDoubleBE(B){return this.pushWrite(B,4,8)}_pushNaN(){return this.push(BUF_NAN)}_pushInfinity(B){const Q=B<0?BUF_INF_NEG:BUF_INF_POS;return this.push(Q)}_pushFloat(B){const Q=Buffer.allocUnsafe(2);if(utils.writeHalf(Q,B)&&utils.parseHalf(Q)===B)return this._pushUInt8(HALF)&&this.push(Q);const F=Buffer.allocUnsafe(4);return F.writeFloatBE(B,0),F.readFloatBE(0)===B?this._pushUInt8(FLOAT)&&this.push(F):this._pushUInt8(DOUBLE)&&this._pushDoubleBE(B)}_pushInt(B,Q,F){const D=Q<<5;return B<24?this._pushUInt8(D|B):B<=255?this._pushUInt8(D|NUMBYTES.ONE)&&this._pushUInt8(B):B<=65535?this._pushUInt8(D|NUMBYTES.TWO)&&this._pushUInt16BE(B):B<=4294967295?this._pushUInt8(D|NUMBYTES.FOUR)&&this._pushUInt32BE(B):B<=Number.MAX_SAFE_INTEGER?this._pushUInt8(D|NUMBYTES.EIGHT)&&this._pushUInt32BE(Math.floor(B/SHIFT32))&&this._pushUInt32BE(B%SHIFT32):Q===MT.NEG_INT?this._pushFloat(F):this._pushFloat(B)}_pushIntNum(B){return B<0?this._pushInt(-B-1,MT.NEG_INT,B):this._pushInt(B,MT.POS_INT)}_pushNumber(B){switch(!1){case B===B:return this._pushNaN(B);case isFinite(B):return this._pushInfinity(B);case B%1!==0:return this._pushIntNum(B);default:return this._pushFloat(B)}}_pushString(B){const Q=Buffer.byteLength(B,"utf8");return this._pushInt(Q,MT.UTF8_STRING)&&this.pushWrite(B,5,Q)}_pushBoolean(B){return this._pushUInt8(B?TRUE:FALSE)}_pushUndefined(B){return this._pushUInt8(UNDEFINED)}_pushArray(B,Q){const F=Q.length;if(!B._pushInt(F,MT.ARRAY))return!1;for(let D=0;D<F;D++)if(!B.pushAny(Q[D]))return!1;return!0}_pushTag(B){return this._pushInt(B,MT.TAG)}_pushDate(B,Q){return B._pushTag(TAG.DATE_EPOCH)&&B.pushAny(Math.round(Q/1e3))}_pushBuffer(B,Q){return B._pushInt(Q.length,MT.BYTE_STRING)&&B.push(Q)}_pushNoFilter(B,Q){return B._pushBuffer(B,Q.slice())}_pushRegexp(B,Q){return B._pushTag(TAG.REGEXP)&&B.pushAny(Q.source)}_pushSet(B,Q){if(!B._pushInt(Q.size,MT.ARRAY))return!1;for(const F of Q)if(!B.pushAny(F))return!1;return!0}_pushUrl(B,Q){return B._pushTag(TAG.URI)&&B.pushAny(Q.format())}_pushBigint(B){let Q=TAG.POS_BIGINT;B.isNegative()&&(B=B.negated().minus(1),Q=TAG.NEG_BIGINT);let F=B.toString(16);F.length%2&&(F="0"+F);const D=Buffer.from(F,"hex");return this._pushTag(Q)&&this._pushBuffer(this,D)}_pushBigNumber(B,Q){if(Q.isNaN())return B._pushNaN();if(!Q.isFinite())return B._pushInfinity(Q.isNegative()?-1/0:1/0);if(Q.isInteger())return B._pushBigint(Q);if(!(B._pushTag(TAG.DECIMAL_FRAC)&&B._pushInt(2,MT.ARRAY)))return!1;const F=Q.decimalPlaces(),D=Q.multipliedBy(new Bignumber(10).pow(F));return B._pushIntNum(-F)?D.abs().isLessThan(MAXINT_BN)?B._pushIntNum(D.toNumber()):B._pushBigint(D):!1}_pushMap(B,Q){return B._pushInt(Q.size,MT.MAP)?this._pushRawMap(Q.size,Array.from(Q)):!1}_pushObject(B){if(!B)return this._pushUInt8(NULL);for(var Q=this.semanticTypes.length,F=0;F<Q;F++)if(B instanceof this.semanticTypes[F][0])return this.semanticTypes[F][1].call(B,this,B);var D=B.encodeCBOR;if(typeof D=="function")return D.call(B,this);var U=Object.keys(B),O=U.length;return this._pushInt(O,MT.MAP)?this._pushRawMap(O,U.map(Y=>[Y,B[Y]])):!1}_pushRawMap(B,Q){Q=Q.map(function(D){return D[0]=Encoder.encode(D[0]),D}).sort(utils.keySorter);for(var F=0;F<B;F++)if(!this.push(Q[F][0])||!this.pushAny(Q[F][1]))return!1;return!0}write(B){return this.pushAny(B)}pushAny(B){var Q=toType(B);switch(Q){case"Number":return this._pushNumber(B);case"String":return this._pushString(B);case"Boolean":return this._pushBoolean(B);case"Object":return this._pushObject(B);case"Array":return this._pushArray(this,B);case"Uint8Array":return this._pushBuffer(this,Buffer.isBuffer(B)?B:Buffer.from(B));case"Null":return this._pushUInt8(NULL);case"Undefined":return this._pushUndefined(B);case"Map":return this._pushMap(this,B);case"Set":return this._pushSet(this,B);case"URL":return this._pushUrl(this,B);case"BigNumber":return this._pushBigNumber(this,B);case"Date":return this._pushDate(this,B);case"RegExp":return this._pushRegexp(this,B);case"Symbol":switch(B){case SYMS.NULL:return this._pushObject(null);case SYMS.UNDEFINED:return this._pushUndefined(void 0);default:throw new Error("Unknown symbol: "+B.toString())}default:throw new Error("Unknown type: "+typeof B+", "+(B?B.toString():""))}}finalize(){if(this.offset===0)return null;for(var B=this.result,Q=this.resultLength,F=this.resultMethod,D=this.offset,U=0,O=0;O<D;O++)U+=Q[O];var Y=Buffer.allocUnsafe(U),j=0,re=0;for(O=0;O<D;O++){switch(re=Q[O],F[O]){case 0:B[O].copy(Y,j);break;case 1:Y.writeUInt8(B[O],j,!0);break;case 2:Y.writeUInt16BE(B[O],j,!0);break;case 3:Y.writeUInt32BE(B[O],j,!0);break;case 4:Y.writeDoubleBE(B[O],j,!0);break;case 5:Y.write(B[O],j,re,"utf8");break;default:throw new Error("unkown method")}j+=re}var ge=Y;return this._reset(),ge}_reset(){this.result=[],this.resultMethod=[],this.resultLength=[],this.offset=0}static encode(B){const Q=new Encoder;if(!Q.pushAny(B))throw new Error("Failed to encode input");return Q.finalize()}}var encoder=Encoder;(function(w){w.Diagnose=diagnose,w.Decoder=decoder,w.Encoder=encoder,w.Simple=simple,w.Tagged=tagged$1,w.decodeAll=w.Decoder.decodeAll,w.decodeFirst=w.Decoder.decodeFirst,w.diagnose=w.Diagnose.diagnose,w.encode=w.Encoder.encode,w.decode=w.Decoder.decode,w.leveldb={decode:w.Decoder.decodeAll,encode:w.Encoder.encode,buffer:!0,name:"cbor"}})(src$1);function concat(...w){const B=new Uint8Array(w.reduce((F,D)=>F+D.byteLength,0));let Q=0;for(const F of w)B.set(new Uint8Array(F),Q),Q+=F.byteLength;return B.buffer}const hexRe=new RegExp(/^([0-9A-F]{2})*$/i);function fromHex(w){if(!hexRe.test(w))throw new Error("Invalid hexadecimal string.");const B=[...w].reduce((Q,F,D)=>(Q[D/2|0]=(Q[D/2|0]||"")+F,Q),[]).map(Q=>Number.parseInt(Q,16));return new Uint8Array(B).buffer}globalThis&&globalThis.__rest;new TextEncoder().encode(`
ic-request`);var src={},serializer$1={},value={};Object.defineProperty(value,"__esModule",{value:!0});const MAX_U64_NUMBER=9007199254740992;function _concat(w,...B){const Q=new Uint8Array(w.byteLength+B.reduce((D,U)=>D+U.byteLength,0));Q.set(new Uint8Array(w),0);let F=w.byteLength;for(const D of B)Q.set(new Uint8Array(D),F),F+=D.byteLength;return Q.buffer}function _serializeValue(w,B,Q){Q=Q.replace(/[^0-9a-fA-F]/g,"");const F=2**(B-24);Q=Q.slice(-F*2).padStart(F*2,"0");const D=[(w<<5)+B].concat(Q.match(/../g).map(U=>parseInt(U,16)));return new Uint8Array(D).buffer}function _serializeNumber(w,B){if(B<24)return new Uint8Array([(w<<5)+B]).buffer;{const Q=B<=255?24:B<=65535?25:B<=4294967295?26:27;return _serializeValue(w,Q,B.toString(16))}}function _serializeString(w){const B=[];for(let Q=0;Q<w.length;Q++){let F=w.charCodeAt(Q);F<128?B.push(F):F<2048?B.push(192|F>>6,128|F&63):F<55296||F>=57344?B.push(224|F>>12,128|F>>6&63,128|F&63):(Q++,F=(F&1023)<<10|w.charCodeAt(Q)&1023,B.push(240|F>>18,128|F>>12&63,128|F>>6&63,128|F&63))}return _concat(new Uint8Array(_serializeNumber(3,w.length)),new Uint8Array(B))}function tagged(w,B){if(w==14277111)return _concat(new Uint8Array([217,217,247]),B);if(w<24)return _concat(new Uint8Array([(6<<5)+w]),B);{const Q=w<=255?24:w<=65535?25:w<=4294967295?26:27,F=2**(Q-24),D=w.toString(16).slice(-F*2).padStart(F*2,"0"),U=[(6<<5)+Q].concat(D.match(/../g).map(O=>parseInt(O,16)));return new Uint8Array(U).buffer}}value.tagged=tagged;function raw(w){return new Uint8Array(w).buffer}value.raw=raw;function uSmall(w){if(isNaN(w))throw new RangeError("Invalid number.");w=Math.min(Math.max(0,w),23);const B=[(0<<5)+w];return new Uint8Array(B).buffer}value.uSmall=uSmall;function u8(w,B){if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,w),255),w=w.toString(16),_serializeValue(0,24,w)}value.u8=u8;function u16(w,B){if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,w),65535),w=w.toString(16),_serializeValue(0,25,w)}value.u16=u16;function u32(w,B){if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,w),4294967295),w=w.toString(16),_serializeValue(0,26,w)}value.u32=u32;function u64(w,B){if(typeof w=="string"&&B==16){if(w.match(/[^0-9a-fA-F]/))throw new RangeError("Invalid number.");return _serializeValue(0,27,w)}if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,w),MAX_U64_NUMBER),w=w.toString(16),_serializeValue(0,27,w)}value.u64=u64;function iSmall(w){if(isNaN(w))throw new RangeError("Invalid number.");if(w===0)return uSmall(0);w=Math.min(Math.max(0,-w),24)-1;const B=[(1<<5)+w];return new Uint8Array(B).buffer}value.iSmall=iSmall;function i8(w,B){if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,-w-1),255),w=w.toString(16),_serializeValue(1,24,w)}value.i8=i8;function i16(w,B){if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,-w-1),65535),w=w.toString(16),_serializeValue(1,25,w)}value.i16=i16;function i32(w,B){if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,-w-1),4294967295),w=w.toString(16),_serializeValue(1,26,w)}value.i32=i32;function i64(w,B){if(typeof w=="string"&&B==16){if(w.startsWith("-")?w=w.slice(1):w="0",w.match(/[^0-9a-fA-F]/)||w.length>16)throw new RangeError("Invalid number.");let Q=!1,F=w.split("").reduceRight((D,U)=>{if(Q)return U+D;let O=parseInt(U,16)-1;return O>=0?(Q=!0,O.toString(16)+D):"f"+D},"");return Q?_serializeValue(1,27,F):u64(0)}if(w=parseInt(""+w,B),isNaN(w))throw new RangeError("Invalid number.");return w=Math.min(Math.max(0,-w-1),9007199254740992),w=w.toString(16),_serializeValue(1,27,w)}value.i64=i64;function number(w){return w>=0?w<24?uSmall(w):w<=255?u8(w):w<=65535?u16(w):w<=4294967295?u32(w):u64(w):w>=-24?iSmall(w):w>=-255?i8(w):w>=-65535?i16(w):w>=-4294967295?i32(w):i64(w)}value.number=number;function bytes(w){return _concat(_serializeNumber(2,w.byteLength),w)}value.bytes=bytes;function string(w){return _serializeString(w)}value.string=string;function array(w){return _concat(_serializeNumber(4,w.length),...w)}value.array=array;function map(w,B=!1){w instanceof Map||(w=new Map(Object.entries(w)));let Q=Array.from(w.entries());return B&&(Q=Q.sort(([F],[D])=>F.localeCompare(D))),_concat(_serializeNumber(5,w.size),...Q.map(([F,D])=>_concat(_serializeString(F),D)))}value.map=map;function singleFloat(w){const B=new Float32Array([w]);return _concat(new Uint8Array([(7<<5)+26]),new Uint8Array(B.buffer))}value.singleFloat=singleFloat;function doubleFloat(w){const B=new Float64Array([w]);return _concat(new Uint8Array([(7<<5)+27]),new Uint8Array(B.buffer))}value.doubleFloat=doubleFloat;function bool(w){return w?true_():false_()}value.bool=bool;function true_(){return raw(new Uint8Array([(7<<5)+21]))}value.true_=true_;function false_(){return raw(new Uint8Array([(7<<5)+20]))}value.false_=false_;function null_(){return raw(new Uint8Array([(7<<5)+22]))}value.null_=null_;function undefined_(){return raw(new Uint8Array([(7<<5)+23]))}value.undefined_=undefined_;var __importStar=commonjsGlobal&&commonjsGlobal.__importStar||function(w){if(w&&w.__esModule)return w;var B={};if(w!=null)for(var Q in w)Object.hasOwnProperty.call(w,Q)&&(B[Q]=w[Q]);return B.default=w,B};Object.defineProperty(serializer$1,"__esModule",{value:!0});const cbor=__importStar(value),BufferClasses=[ArrayBuffer,Uint8Array,Uint16Array,Uint32Array,Int8Array,Int16Array,Int32Array,Float32Array,Float64Array];class JsonDefaultCborEncoder{constructor(B,Q=!1){this._serializer=B,this._stable=Q,this.name="jsonDefault",this.priority=-100}match(B){return["undefined","boolean","number","string","object"].indexOf(typeof B)!=-1}encode(B){switch(typeof B){case"undefined":return cbor.undefined_();case"boolean":return cbor.bool(B);case"number":return Math.floor(B)===B?cbor.number(B):cbor.doubleFloat(B);case"string":return cbor.string(B);case"object":if(B===null)return cbor.null_();if(Array.isArray(B))return cbor.array(B.map(Q=>this._serializer.serializeValue(Q)));if(BufferClasses.find(Q=>B instanceof Q))return cbor.bytes(B.buffer);if(Object.getOwnPropertyNames(B).indexOf("toJSON")!==-1)return this.encode(B.toJSON());if(B instanceof Map){const Q=new Map;for(const[F,D]of B.entries())Q.set(F,this._serializer.serializeValue(D));return cbor.map(Q,this._stable)}else{const Q=new Map;for(const[F,D]of Object.entries(B))Q.set(F,this._serializer.serializeValue(D));return cbor.map(Q,this._stable)}default:throw new Error("Invalid value.")}}}serializer$1.JsonDefaultCborEncoder=JsonDefaultCborEncoder;class ToCborEncoder{constructor(){this.name="cborEncoder",this.priority=-90}match(B){return typeof B=="object"&&typeof B.toCBOR=="function"}encode(B){return B.toCBOR()}}serializer$1.ToCborEncoder=ToCborEncoder;class CborSerializer{constructor(){this._encoders=new Set}static withDefaultEncoders(B=!1){const Q=new this;return Q.addEncoder(new JsonDefaultCborEncoder(Q,B)),Q.addEncoder(new ToCborEncoder),Q}removeEncoder(B){for(const Q of this._encoders.values())Q.name==B&&this._encoders.delete(Q)}addEncoder(B){this._encoders.add(B)}getEncoderFor(B){let Q=null;for(const F of this._encoders)(!Q||F.priority>Q.priority)&&F.match(B)&&(Q=F);if(Q===null)throw new Error("Could not find an encoder for value.");return Q}serializeValue(B){return this.getEncoderFor(B).encode(B)}serialize(B){return this.serializeValue(B)}}serializer$1.CborSerializer=CborSerializer;class SelfDescribeCborSerializer extends CborSerializer{serialize(B){return cbor.raw(new Uint8Array([...new Uint8Array([217,217,247]),...new Uint8Array(super.serializeValue(B))]))}}serializer$1.SelfDescribeCborSerializer=SelfDescribeCborSerializer;(function(w){function B(D){for(var U in D)w.hasOwnProperty(U)||(w[U]=D[U])}var Q=commonjsGlobal&&commonjsGlobal.__importStar||function(D){if(D&&D.__esModule)return D;var U={};if(D!=null)for(var O in D)Object.hasOwnProperty.call(D,O)&&(U[O]=D[O]);return U.default=D,U};Object.defineProperty(w,"__esModule",{value:!0}),B(serializer$1);const F=Q(value);w.value=F})(src);class PrincipalEncoder{get name(){return"Principal"}get priority(){return 0}match(B){return B&&B._isPrincipal===!0}encode(B){return src.value.bytes(B.toUint8Array())}}class BufferEncoder{get name(){return"Buffer"}get priority(){return 1}match(B){return B instanceof ArrayBuffer||ArrayBuffer.isView(B)}encode(B){return src.value.bytes(new Uint8Array(B))}}class BigIntEncoder{get name(){return"BigInt"}get priority(){return 1}match(B){return typeof B=="bigint"}encode(B){return B>BigInt(0)?src.value.tagged(2,src.value.bytes(fromHex(B.toString(16)))):src.value.tagged(3,src.value.bytes(fromHex((BigInt("-1")*B).toString(16))))}}const serializer=src.SelfDescribeCborSerializer.withDefaultEncoders(!0);serializer.addEncoder(new PrincipalEncoder);serializer.addEncoder(new BufferEncoder);serializer.addEncoder(new BigIntEncoder);var CborTag;(function(w){w[w.Uint64LittleEndian=71]="Uint64LittleEndian",w[w.Semantic=55799]="Semantic"})(CborTag||(CborTag={}));class Uint8ArrayDecoder extends src$1.Decoder{createByteString(B){return concat(...B)}createByteStringFromHeap(B,Q){return B===Q?new ArrayBuffer(0):new Uint8Array(this._heap.slice(B,Q))}}var SubmitRequestType;(function(w){w.Call="call"})(SubmitRequestType||(SubmitRequestType={}));BigInt(1e6);BigInt(60*1e3);var RequestStatusResponseStatus;(function(w){w.Received="received",w.Processing="processing",w.Replied="replied",w.Rejected="rejected",w.Unknown="unknown",w.Done="done"})(RequestStatusResponseStatus||(RequestStatusResponseStatus={}));var ProxyMessageKind;(function(w){w.Error="err",w.GetPrincipal="gp",w.GetPrincipalResponse="gpr",w.Query="q",w.QueryResponse="qr",w.Call="c",w.CallResponse="cr",w.ReadState="rs",w.ReadStateResponse="rsr",w.Status="s",w.StatusResponse="sr"})(ProxyMessageKind||(ProxyMessageKind={}));var decode;(function(){for(var w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B=new Uint8Array(256),Q=0;Q<w.length;Q++)B[w.charCodeAt(Q)]=Q;decode=function(F){var D=F.length*.75,U=F.length,O,Y=0,j,re,ge,ce;F[F.length-1]==="="&&(D--,F[F.length-2]==="="&&D--);var ue=new ArrayBuffer(D),de=new Uint8Array(ue);for(O=0;O<U;O+=4)j=B[F.charCodeAt(O)],re=B[F.charCodeAt(O+1)],ge=B[F.charCodeAt(O+2)],ce=B[F.charCodeAt(O+3)],de[Y++]=j<<2|re>>4,de[Y++]=(re&15)<<4|ge>>2,de[Y++]=(ge&3)<<6|ce&63;return ue}})();const wasmBytesBase64="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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp";decode(wasmBytesBase64);fromHex("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");var CanisterInstallMode;(function(w){w.Install="install",w.Reinstall="reinstall",w.Upgrade="upgrade"})(CanisterInstallMode||(CanisterInstallMode={}));var mainScreenOpen=!1;class mintingScreen extends HTMLElement{constructor(){super();$e(this,"toggleNftScreen",()=>{var Q=this.shadow.getElementById("mainScreen"),F=this.shadow.getElementById("svgBox"),D=document.getElementById("universe"),U=document.getElementById("getUniMenu").shadowRoot;if(Q.style.transition="1s all",F.style.display="block",F.style.transition=".5s all",D.style.transition="1s all",mainScreenOpen===!1){D.style.filter="blur(5px)",U.getElementById("uniMenu").style.filter="blur(10px)",document.getElementById("selection").style.filter="blur(10px)",Q.style.display="grid",setTimeout(()=>{Q.style.opacity="100%",mainScreenOpen=!0},200);return}else{F.style.display="none",U.getElementById("uniMenu").style.filter="blur(0px)",document.getElementById("selection").style.filter="blur(0px)",U.getElementById("nftShop").style.opacity="80%",D.style.filter="blur(0px)",Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none",mainScreenOpen=!1},1e3);return}});$e(this,"goGetPlug",()=>{var Q;(Q=window.open("https://plugwallet.ooo/","_blank"))==null||Q.focus()});$e(this,"reacc",()=>{var Q=this.shadow.getElementById("videoM");Q.style.transition="5s all",Q.play(),Q.style.display="block",setTimeout(()=>{Q.style.opacity="100%"},500),setTimeout(()=>{document.getElementById("getUniMenu").toggleMenu(),document.getElementById("getNfts").toggleNftScreen()},5e3),Q.onended=function(){document.getElementById("updatesModal").style.display="block",Q.style.transition="1s all",Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none"},1e3)}});$e(this,"reload",()=>{});$e(this,"pillSelection",Q=>{var F=String(Q.target.id),D=this.shadow.querySelectorAll(".pills"),U=this.shadow.getElementById("desc"),O=this.shadow.getElementById("cost"),Y=this.shadow.getElementById("button"),j=this.shadow.getElementById("mintButton"),re=this.shadow.getElementById("mainScreen");re.style.transition="1s all";var ge={red:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png",black:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png",blue:"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"};switch(F){case"red":D[0].src=ge.blue,D[1].src=ge.red,D[2].src=ge.black,D[0].setAttribute("id","blue"),D[1].setAttribute("id","red"),D[2].setAttribute("id","black"),U.innerHTML="YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.",O.innerHTML="IT\u2019LL COST YOU 10 [ICP].",Y.innerHTML="UNAVAILABLE",Y.style.color="#ff002d",j.style.backgroundColor="black",j.style.border="1px solid black",re.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",re.style.backgroundColor="rgba(145,212,202,.4)";break;case"black":D[0].src=ge.red,D[1].src=ge.black,D[2].src=ge.blue,D[0].setAttribute("id","red"),D[1].setAttribute("id","black"),D[2].setAttribute("id","blue"),U.innerHTML="A GIFT FROM THE ORACLE'S",O.innerHTML="IT WONT COST YOU A THING.",Y.innerHTML="TAKE IT",this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this)),Y.style.color="",j.style.border="",j.style.backgroundColor="",re.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",re.style.backgroundColor="rgba(0,0,0,.4)";break;case"blue":D[0].src=ge.black,D[1].src=ge.blue,D[2].src=ge.red,D[0].setAttribute("id","black"),D[1].setAttribute("id","blue"),D[2].setAttribute("id","red"),U.innerHTML="THIS IS WHAT YOU'LL NEED TO REMEMBER.",O.innerHTML="IT\u2019LL COST YOU 5 [ICP].",Y.innerHTML="UNAVAILABLE",Y.style.color="#ff002d",j.style.backgroundColor="black",j.style.border="none",re.style.boxShadow="inset 0 0 100px rgba(0,0,0,.9)",re.style.backgroundColor="rgba(164,219,251,.4)";break}});this.shadow=this.attachShadow({mode:"open"})}get nft(){return this.getAttribute("mint")}set nft(Q){this.setAttribute("mint",Q)}static get observedAttributes(){return["mint"]}attributeChangedCallback(Q,F,D){Q==="mint"&&this.render()}connectedCallback(){this.render(),this.shadow.getElementById("svgBox").addEventListener("click",this.toggleNftScreen.bind(this)),this.shadow.querySelectorAll(".pills").forEach(Q=>{Q.addEventListener("click",this.pillSelection)}),this.shadow.getElementById("mintButton").addEventListener("click",this.reacc.bind(this))}render(){this.shadow.innerHTML=`
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
         `}}customElements.define("mint-screen",mintingScreen);window.closeCampaign=dtCampaign.closeCampaign;const VITE_CommerceKey="pk_246737d87ea305a2a8a9c063b89d7d84a229bda1ca9c2",VITE_StripeKey="pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec";var infiniteActive=!1,pgleft=1,pgright=2,sketch1Count=3,sketch2Count=2,sketch3Count=1,countriedAdded=!1,shopActive="closed";window.dbm=!1;window.shoploaded=!1;window.viewThisProduct="";window.investorsView=!1;window.urlParamsActive=!1;window.inUniverse=!1;window.productsloaded=!1;const commerce=new lib(`${VITE_CommerceKey}`,!0);console.log("COPYRIGHT 2022 - SCOG\xC9 Inc. - ALL RIGHTS RESERVED");var stripe=Stripe(`${VITE_StripeKey}`);const elements=stripe.elements(),soundtrack=new SoundtrackManager;window.isMobile=!1;window.sysCheck=()=>{document.addEventListener("keydown",checkKeys)};window.checkKeys=async w=>{w.key==="i"&&ci==="false"&&(ci="true",window.dbm=!0,setTimeout(()=>{ci="false"},1e3)),w.key==="c"&&ci==="true"&&(ci="bankoo",window.getAllUserNFTs=await __vitePreload(()=>import("./index.8c95f4f1.js").then(function(B){return B.i}),[]).then(B=>B.getAllUserNFTs),universeSystem(),document.getElementById("uniBut").setAttribute("onclick","universeSystem()"),soundtrack.play("scoge1"))};sysCheck();window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches?(document.getElementById("shopBut"),document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("uniBut").style.display="none",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-100%",shopActive="closed",window.termsOpen=!1):(document.getElementById("uniBut").style.display="block",document.getElementById("shop").style.opacity="100%",document.getElementById("shop").style.visibility="visible",document.getElementById("mobileShop").style.display="none",window.isMobile=!1,window.logoMove(6,3,16,1))});window.shopping=()=>{window.matchMedia("(max-width: 768px)").matches?(openMobile(),clearScreen()):toggleShop()};window.clearScreen=()=>{var w=document.getElementById("getCamp").shadowRoot;w.getElementById("campaignComp").style.transition="1s all",w.getElementById("campaignComp").style.right="-100%",clearFilter(),clearSettings(),clearShop()};window.openMobile=()=>{document.getElementById("mobileShop").style.display="block"};window.destiny=()=>{var w=document.getElementById("destiny");w.play(),w.loop=!0};window.initNoti2=w=>{};window.clearFilter=()=>{var w=document.getElementById("shopFilter"),B=document.getElementById("all");window.filterShop(B),w.style.opacity="0%",setTimeout(()=>{w.style.display="none"},1e3)};window.toggleShop=()=>{var w=document.getElementById("orderConfirm");document.getElementById("shopBut");var B=document.getElementById("shopFilter"),Q=document.getElementById("shopBG");switch(Q.style.transition=".5s all",clearSettings(),document.getElementById("updatesModal").style.display="none",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",document.getElementById("shop").style.transition="1s all",document.getElementById("povImageColumnLeft").innerHTML="",shopActive){case"closed":B.style.display="grid",Q.style.display="block",setTimeout(()=>{B.style.opacity="100%",Q.style.opacity="100%"},1e3),setTimeout(()=>{window.productsloaded===!1&&(document.getElementById("divLoadBG2").style.display="grid"),document.getElementById("shop").style.right="0%",document.getElementById("shopIcon").innerHTML="X"},500),shopActive="open";break;case"open":window.clearFilter(),Q.style.opacity="0%",setTimeout(()=>{Q.style.display="none"},500),clearShop();break;case"POVopen":document.getElementById("shop").style.overflowX="scroll",shopActive="open";var F=document.getElementById("povLeft"),D=document.getElementById("povRight"),U=document.getElementById("shopCheckoutDetails");U.style.transition="1s all",U.style.visibility="hidden",U.style.opacity="0%",F.style.transition="1s all",D.style.transition="1s all",F.style.opacity="0%",D.style.opacity="0%",setTimeout(()=>{D.style.visibility="hidden",F.style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",document.getElementById("povImageColumnRight").innerHTML="",window.returnSize(),document.getElementById("eSymbol1").style.display="none",document.getElementById("eSymbol2").style.display="none",window.termsOpen=!1,w.style.display==="block"&&(w.style.display="none");var O=document.getElementsByClassName("shopProduct");for(let Y=0;Y<O.length;Y++)O[Y].style.color="black";selectedPSize="",document.getElementById("addToBagBut").innerHTML="Select a size";break}};window.openSettings=()=>{document.getElementById("updatesModal").style.display="none",window.clearFilter(),clearShop(),closeInvestor();var w=document.getElementById("getCamp").shadowRoot;document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",window.matchMedia("(max-width: 768px)").matches?(w.getElementById("campaignComp").style.transition="1s all",w.getElementById("campaignComp").style.right="-100%"):(w.getElementById("campaignComp").style.transition="1s all",w.getElementById("campaignComp").style.right="-70%");var B=document.getElementById("settingsMenu");document.getElementById("settingsMenu").style.display="grid",setTimeout(()=>{B.style.opacity="100%"},300)};window.clearShop=()=>{document.getElementById("shop").style.right="-70%",document.getElementById("shopIcon").innerHTML="(0)";var w=document.getElementById("shopBG");w.style.transition=".5s all",w.style.opacity="0%",setTimeout(()=>{w.style.display="none"},500),document.getElementById("shopIcon").setAttribute("onclick","toggleShop()"),document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",shopActive="closed",window.termsOpen=!1};window.clearSettings=()=>{document.getElementById("settingsMenu").style.transition="1s all",document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3)};var continents={c1:{name:"1 - ALANSANA",text:"The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOG\xC9 Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",images:`<img id="scroll" src="assets/images/scroll.png"/>
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
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`}},worldName=document.getElementById("worldConName"),worldText=document.getElementById("worldConText"),worldMain=document.getElementById("worldMain"),allMenu=document.querySelectorAll(".worldMenuInner"),worldBottom=document.getElementById("worldBottom");window.changeWorld=w=>{var B=w.id;switch(worldBottom.scrollTop=0,allMenu.forEach(Q=>{Q.style.backgroundColor="rgba(255, 255, 255, 0.7)",Q.style.color="black",document.getElementById(`${B}In`).style.backgroundColor="red",document.getElementById(`${B}In`).style.color="white"}),B){case"world1":worldName.innerHTML=continents.c1.name,worldText.innerHTML=continents.c1.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c1.images;break;case"world2":worldName.innerHTML=continents.c2.name,worldText.innerHTML=continents.c2.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c2.images;break;case"world3":worldName.innerHTML=continents.c3.name,worldText.innerHTML=continents.c3.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')",worldBottom.innerHTML=continents.c3.images;break;case"world4":worldName.innerHTML=continents.c4.name,worldText.innerHTML=continents.c4.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c4.images;break;case"world5":worldName.innerHTML=continents.c5.name,worldText.innerHTML=continents.c5.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')",worldBottom.innerHTML=continents.c5.images;break;case"world6":worldName.innerHTML=continents.c6.name,worldText.innerHTML=continents.c6.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c6.images;break;case"world7":worldName.innerHTML=continents.c7.name,worldText.innerHTML=continents.c7.text,worldMain.style.backgroundImage="url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')",worldBottom.innerHTML=continents.c7.images;break}};var expandDiv=document.getElementById("worldBottom"),speed=5;function expanding(){var w=expandDiv.scrollTop,B=w/speed;expandDiv.style.height=Math.min(Math.max(B,34),68)+"%"}window.isWorld=()=>{expandDiv.addEventListener("scroll",function(){requestAnimationFrame(expanding)},!1)};window.worldTap=()=>{document.getElementById("worldEntrance").style.transition="5s all",document.getElementById("worldEntrance").style.opacity="0%",setTimeout(()=>{document.getElementById("worldEntrance").style.display="none"},3500)};window.activateInfinite=()=>{if(window.logoMove(6,3,16,1),BABYLON.Engine.isSupported())if(document.getElementById("renderCanvas").style.transition="5s all",infiniteActive===!1)document.getElementById("renderCanvas").style.display="block",document.getElementById("renderCanvas").style.opacity="0",new GameManager("renderCanvas"),infiniteActive=!0;else{document.getElementById("settingsMenu").style.opacity="0%",setTimeout(()=>{document.getElementById("settingsMenu").style.display="none"},1e3);var w=document.getElementById("shopBut"),B=document.getElementById("renderCanvas");B.height=window.innerHeight,B.width=window.innerWidth,document.getElementById("shop").style.opacity="0%",document.getElementById("shop").style.visibility="hidden",document.getElementById("povRight").style.opacity="0%",document.getElementById("povLeft").style.opacity="0%",setTimeout(()=>{document.getElementById("povRight").style.visibility="hidden",document.getElementById("povLeft").style.visibility="hidden"},500),document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",w.innerHTML="SHOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",shopActive="closed",window.termsOpen=!1,window.inUniverse=!0,getGameProgress(),window.logoMove(6,3,16,1),document.getElementById("destiny").pause(),document.getElementById("renderCanvas").style.opacity="1",window.clearMainUi()}};window.setupBook=w=>{var B=document.getElementById("B2222"),Q=w.id;if(Q==="bookleft"){B.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft-=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright-=2}.jpg" style="margin-left:10%;">`,Q==="bookleft"&&pgleft<=0&&(pgleft=1,pgright=2,B.remove());return}if(Q==="bookright"){B.innerHTML=`<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgleft+=2}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${pgright+=2}.jpg" style="margin-left:10%;">`,Q==="bookright"&&pgright>=15&&(pgleft=1,pgright=2,B.remove());return}};window.setupSketches=()=>{var w=document.getElementById("BSketch");if(sketch3Count===3){w.innerHTML='<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">',sketch3Count=1,sketch2Count=2,sketch1Count=3,w.remove();return}if(sketch3Count===2){w.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}if(sketch3Count===1){w.innerHTML=`<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count-=2}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;return}};window.setupMagazine=()=>{var w=document.getElementById("BMAG");w.remove()};var currentShopProduct;window.povOpen=w=>{var B=w.id;currentShopProduct=allProducts[0].filter(U=>U.id.includes(`${B}`)),shopActive="POVopen";var Q=document.getElementById("povLeft"),F=document.getElementById("povRight");Q.style.transition="1s all",F.style.transition="1s all",document.getElementById("povRight").style.visibility="visible",document.getElementById("povLeft").style.visibility="visible",Q.style.opacity="100%",F.style.opacity="100%",document.getElementById("shopProductName").innerHTML=`
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(\xC9)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(S\xC9)</span>
  `,currentShopProduct[0].categories.forEach(U=>{U.name==="\xC9"&&(document.getElementById("eSymbol1").style.display="block"),U.name==="S\xC9"&&(document.getElementById("eSymbol2").style.display="block")}),document.getElementById("shopProductDesc").innerHTML=currentShopProduct[0].description,document.getElementById("shopProductPrice").innerHTML=currentShopProduct[0].price.formatted_with_symbol,currentShopProduct[0].inventory.available<=10?document.getElementById("shopProductAvailable").innerHTML="(LIMITED QUANTITY)":document.getElementById("shopProductAvailable").innerHTML="";var D=document.getElementById("povImageColumnLeft");document.getElementById("povImageColumnRight").style.backgroundImage=`url("${currentShopProduct[0].assets[2].url}")`,currentShopProduct[0].assets.forEach(U=>{var O=document.createElement("img");U.filename==="sizeChart.png"?(O.setAttribute("class","sizeChartImage"),O.setAttribute("src",`${U.url}`),O.setAttribute("id",`${U.filename}`),document.getElementById("povImageColumnRight").appendChild(O)):(O.setAttribute("class","leftPOVimages"),O.setAttribute("src",`${U.url}`),O.setAttribute("id",`${U.url}`),O.setAttribute("onclick","changeToMainPic(this)"),D.appendChild(O))}),currentShopProduct[0].variant_groups[0].options.forEach(U=>{if(document.getElementById(`${U.name}`).style.opacity="100%",document.getElementById(`${U.name}`).style.cursor="pointer",U.name==="SingleSize"){var O=document.querySelectorAll(".shopProduct");document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr",document.getElementById("shopProductSizes").style.justifyItems="end",O.forEach(Y=>{Y.id!="SingleSize"&&(Y.style.display="none")}),document.getElementById("SingleSize").style.display="block"}}),cartEmpty!=!0&&window.productAdded()};window.returnSize=()=>{var w=document.querySelectorAll(".shopProduct");w.forEach(B=>{B.id!="SingleSize"&&(B.style.display="block"),document.getElementById(B.id).style.opacity=".3"}),document.getElementById("SingleSize").style.display="none",document.getElementById("shopProductSizes").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr",document.getElementById("shopProductSizes").style.justifyItems="center"};window.changeToMainPic=w=>{var B=w.id;document.getElementById("povImageColumnRight").style.backgroundImage=`url("${B}")`};window.sizeGuideOn=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="100%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="0%"};window.sizeGuideOff=()=>{document.getElementById("sizeChart.png").style.transition="1s all",document.getElementById("sizeChart.png").style.opacity="0%",document.getElementById("gMenu").style.transition="1s all",document.getElementById("gMenu").style.opacity="100%"};window.productAdded=()=>{document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="visible",document.getElementById("shopCheckoutDetails").style.opacity="100%"};window.purchaseComplete=()=>{document.getElementById("orderConfirm").style.display="block",document.getElementById("orderConfirm").innerHTML=`
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOG\xC9.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `};window.termsOpen=!1;window.toggleTerms=()=>{var w=document.getElementById("tandc"),B=document.getElementById("gMenu");if(w.style.display==="block"){document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="none",document.getElementById("tandc").style.opacity="0%",B.style.display="block",window.termsOpen=!1;return}else if(w.style.display!="block"){document.getElementById("tandc").innerHTML=`
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(\u2018\xC9\u2019)</span> or <span class="blue">(\u2018S\xC9\u2019)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('S\xC9')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOG\xC9 does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOG\xC9 highly respects your Privacy & Security. In developing SCOG\xC9 we are actively working to convert the entire SCOG\xC9 technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOG\xC9 is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country\u2019s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `,document.getElementById("tandc").style.transition=".5s all",document.getElementById("tandc").style.display="block",document.getElementById("tandc").style.opacity="100%",B.style.display="none",window.termsOpen=!0,w.scrollTop=0;return}};var allProducts=[];window.productsloaded=!1;window.loadShop=async()=>{document.getElementById("divLoadBG2").style.display="grid";var w=document.getElementById("allShopProducts");await commerce.products.list({limit:100,sortDirection:"desc"}).then(B=>{allProducts.push(B.data)}),allProducts[0].forEach(B=>{var Q=document.createElement("div");Q.setAttribute("class","productContainer"),Q.setAttribute("id",B.id),B.categories.forEach(F=>{Q.classList.add(F.name)}),window.matchMedia("(max-width: 768px)").matches||(Q.setAttribute("onmouseover","shopOnHover(this)"),Q.setAttribute("onmouseout","shopOutHover(this)"),Q.setAttribute("onclick","povOpen(this)")),w.appendChild(Q),Q.innerHTML=`
    <img class="shopProductsOver" src="${B.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${B.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${B.name}</p>
    <p class="pcProductPrice">${B.price.formatted_with_symbol}</p>
</div>
    `,window.productsloaded=!0,document.getElementById("divLoadBG2").style.display="none"}),urlParamsActive===!0&&(povOpen(document.getElementById(viewThisProduct)),window.history.replaceState({},document.title,"/index.html")),commerce.cart.empty()};window.imageFade=w=>{var B=w;B.style.transition="all 2s",B.style.opacity="1"};window.shopOnHover=w=>{var B=w.id,Q=document.getElementById(B);Q.getElementsByTagName("img")[1].style.opacity="0%",Q.getElementsByTagName("img")[0].style.opacity="100%"};window.shopOutHover=w=>{var B=w.id,Q=document.getElementById(B);Q.getElementsByTagName("img")[0].style.opacity="0%",Q.getElementsByTagName("img")[1].style.opacity="100%"};var currentCart,cartEmpty=!0,selectedPSize="";window.selectSize=w=>{w.style.opacity==="1"?(selectedPSize=w.id,document.getElementById("addToBagBut").innerHTML="Add To Bag",document.getElementById("addToBagBut").setAttribute("onclick","addToCart()")):(selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick","addToCart()"));var B=document.getElementsByClassName("shopProduct");for(let Q=0;Q<B.length;Q++)B[Q].style.color="black";w.style.color="#ff002d"};var countriesObj={};window.addToCart=async()=>{document.getElementById("shoppingBag").innerHTML="";var w=currentShopProduct[0].variant_groups[0].options.filter(B=>B.name.includes(`${selectedPSize}`));document.getElementById("divLoadBG").style.display="grid",commerce.cart.retrieve().then(B=>{currentCart=B}).then(()=>{commerce.cart.add(currentShopProduct[0].id,1,{[currentShopProduct[0].variant_groups[0].id]:w[0].id}).then(()=>{cartEmpty=!1,commerce.cart.retrieve().then(B=>{currentCart=B,document.getElementById("divLoadBG").style.display="none",document.getElementById("addToBagBut").innerHTML="Select a size";var Q=document.getElementsByClassName("shopProduct");for(let F=0;F<Q.length;F++)Q[F].style.color="";window.variantAbbr="",B.line_items.forEach(F=>{var D=document.createElement("div");switch(D.setAttribute("class","bagProducts"),document.getElementById("shoppingBag").appendChild(D),F.selected_options[0].option_name){case"Small":window.variantAbbr="S";break;case"Medium":window.variantAbbr="M";break;case"Large":window.variantAbbr="L";break;case"XLarge":window.variantAbbr="XL";break;case"2XLarge":window.variantAbbr="2XL";break;case"3XLarge":window.variantAbbr="3XL";break}D.innerHTML=`
                  <div class="bagProduct">
                      <div class="bagPOver" id="${F.id}">
                          <p id="test1sizeQty">(${F.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${F.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `,D.setAttribute("id",`${F.id}Parent`),document.getElementById(F.id).style.backgroundImage=`url(${F.image.url})`}),document.getElementById("carTotal").innerHTML=B.subtotal.formatted_with_symbol}),window.productAdded(),selectedPSize="",document.getElementById("addToBagBut").removeAttribute("onclick")})}),countriedAdded===!1&&(countriedAdded=!0,commerce.services.localeListCountries().then(B=>{countriesObj=B.countries,Object.keys(B.countries).forEach(Q=>{var F=document.createElement("option"),D=document.getElementById("input9");F.setAttribute("value",Q),F.setAttribute("title",Q),F.innerHTML=`${countriesObj[Q].substr(0,20)}`,D.appendChild(F)})}))};window.removeLineItem=w=>{document.getElementById("divLoadBG").style.display="grid";var B=w.id;commerce.cart.remove(B).then(Q=>{document.getElementById(`${B}Parent`).remove(),document.getElementById("divLoadBG").style.display="none",document.getElementById("carTotal").innerHTML=Q.cart.subtotal.formatted_with_symbol,currentCart=Q.cart,Q.cart.total_items===0&&(cartEmpty=!0,countriedAdded=!1,document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `)})};window.states=()=>{var w=document.getElementById("input9"),B=w.options[w.selectedIndex].value,Q=w.options[w.selectedIndex].title,F=document.getElementById("carTotal");document.getElementById("input7").innerHTML="",B==="US"&&(document.getElementById("input4").value="$0.00 Free Shipping",window.shippingMethodValue=1,F.innerHTML=currentCart.subtotal.formatted_with_symbol),B!="US"&&(document.getElementById("input4").value="$70.00 Intl Shipping",window.shippingMethodValue=3,F.innerHTML=`$${currentCart.subtotal.raw+70}.00`),Q==="US2"&&(document.getElementById("input4").value="$130.00 - Next Day Air",window.shippingMethodValue=2,F.innerHTML=`$${currentCart.subtotal.raw+130}.00`),commerce.services.localeListSubdivisions(B).then(D=>{var U=D.subdivisions;Object.keys(D.subdivisions).forEach(O=>{var Y=document.createElement("option"),j=document.getElementById("input7");if(Object.keys(D.subdivisions).length<=1){var re=document.createElement("option");re.innerHTML="Not Available.",w.options[w.selectedIndex].innerHTML="Select Country",document.getElementById("input7").appendChild(re)}else Y.setAttribute("value",U[O]),Y.setAttribute("id",O),Y.innerHTML=U[O].substring(0,20),j.appendChild(Y)})})};var style={base:{color:"black"}};const card=elements.create("card",{style});card.mount("#card-element");window.shippingId="";window.checkOut=async()=>{var w=document.getElementById("input1").value,B=document.getElementById("input2").value,Q=document.getElementById("input3").value;document.getElementById("input4").value;var F=document.getElementById("input5").value,D=document.getElementById("input6").value,U=document.getElementById("input8").value,O=document.getElementById("input10").value,Y=document.getElementById("input9"),j=document.getElementById("input7"),re=Y.options[Y.selectedIndex].value,ge=j.options[j.selectedIndex].id;document.getElementById("divLoadBG").style.display="grid",setTimeout(()=>{document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"},2e4),await commerce.checkout.generateToken(currentCart.id,{type:"cart"}).catch(()=>{console.log("Couldnt Generate Token"),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML="<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>"}).then(async ce=>{commerce.checkout.getShippingOptions(ce.id,{country:re}).then(async ue=>{window.shippingMethodValue===1&&(window.shippingId=ue[0].id),window.shippingMethodValue===3&&(window.shippingId=ue[0].id),window.shippingMethodValue===2&&(window.shippingId=ue[1].id);var de=`${w} ${B}`;const Ce=await stripe.createPaymentMethod({type:"card",card});if(Ce.error){document.getElementById("divLoadBG").style.display="none",console.log(Ce.error.message),document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${Ce.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;return}try{const Ie=await commerce.checkout.capture(ce.id,{customer:{firstname:`${w}`,lastname:`${B}`,email:`${F}`},extra_fields:{extr_DWy4oG4dY56Jx2:O},shipping:{name:`${de}`,street:`${Q}`,town_city:`${D}`,county_state:`${ge}`,postal_zip_code:`${U}`,country:`${re}`},fulfillment:{shipping_method:`${window.shippingId}`},billing:{name:`${de}`,street:`${Q}`,town_city:`${D}`,county_state:`${ge}`,postal_zip_code:`${U}`,country:`${re}`},payment:{gateway:"stripe",stripe:{payment_method_id:Ce.paymentMethod.id}}});setTimeout(()=>{window.closeLoadE()},2e4),window.closeLoadE(),document.getElementById("confirmNumber").innerHTML=Ie.customer_reference,window.purchaseComplete(),document.getElementById("shopCheckoutDetails").style.transition="1s all",document.getElementById("shopCheckoutDetails").style.visibility="hidden",document.getElementById("shopCheckoutDetails").style.opacity="0%",document.getElementById("input9").innerHTML=`<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`,document.getElementById("shoppingBag").innerHTML="",cartEmpty=!0,document.getElementById("shopCheckoutDetails").style.opacity="0%",card.clear();return}catch(Ie){document.getElementById("divLoadBG").setAttribute("onclick","closeLoadE()"),document.getElementById("divLoadBG").innerHTML=`<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${Ie.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`,console.log("Catch ERROR"),console.log(Ie);return}finally{}})})};window.closeLoadE=()=>{document.getElementById("divLoadBG").innerHTML='<div class="loader"></div>',document.getElementById("divLoadBG").removeAttribute("onclick"),document.getElementById("divLoadBG").style.display="none",card.clear()};window.ccsOn=()=>{document.getElementById("crypto").innerHTML="Coming Soon"};window.ccsOff=()=>{document.getElementById("crypto").innerHTML="Pay with Crypto"};window.filterShop=w=>{var B=document.getElementById("sectionDesc"),Q=w.id;switch(Q!=="all"&&(document.getElementById("all").checked=!1),Q){case"all":B.innerHTML=`<h2>All Products</h2>
      <h4>SCOG\xC9 Shop - Collection pieces, gifts and more.</h4>`,document.getElementById("all").checked=!0,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(F=>{F.style.display="block"});break;case"tops":B.innerHTML=`<h2>Tops</h2>
      <h4>SCOG\xC9 T-Shirts, Hoodies, Shirts and Jackets.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!0,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(F=>{F.classList.contains("tops")?F.style.display="block":F.style.display="none"});break;case"bottoms":B.innerHTML=`<h2>Bottoms</h2>
      <h4>SCOG\xC9 Pants, Shorts, and Joggers.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!0,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(F=>{F.classList.contains("bottoms")?F.style.display="block":F.style.display="none"});break;case"accessories":B.innerHTML=`<h2>Accessories</h2>
      <h4>SCOG\xC9 Hats & More.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!0,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(F=>{F.classList.contains("accessories")?F.style.display="block":F.style.display="none"});break;case"art":B.innerHTML=`<h2>Artwork</h2>
      <h4>SCOG\xC9 Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!0,document.getElementById("gifts").checked=!1,document.querySelectorAll(".productContainer").forEach(F=>{F.classList.contains("art")?F.style.display="block":F.style.display="none"});break;case"gifts":B.innerHTML=`<h2>Gifts</h2>
      <h4>SCOG\xC9 pieces wrapped, boxed, and ready to gift.</h4>`,document.getElementById("all").checked=!1,document.getElementById("tops").checked=!1,document.getElementById("bottoms").checked=!1,document.getElementById("accessories").checked=!1,document.getElementById("art").checked=!1,document.getElementById("gifts").checked=!0,document.querySelectorAll(".productContainer").forEach(F=>{F.classList.contains("gifts")?F.style.display="block":F.style.display="none"});break}};window.sayScoge=()=>{document.getElementById("scoge").play(),clearScreen()};window.logoMove=(w,B,Q,F)=>{var D=document.getElementById("logo");D.style.transition=`${F}s all`,window.matchMedia("(max-width: 768px)").matches||(D.style.left=`${B}%`,D.style.width=`${Q}%`,D.style.top=`${w}%`)};window.dActiveBut=()=>{var w=document.getElementById("settingsBut"),B=document.getElementById("extraBut");shopActive==="closed"?(w.style.opacity="25%",B.style.opacity="25%",w.removeAttribute("onclick"),B.setAttribute("onclick","")):(w.style.opacity="100%",B.style.opacity="100%",w.setAttribute("onclick","openSettings();"),B.setAttribute("onclick","openExtra();"))};window.clearMainUi=()=>{var w=document.getElementById("gMenu"),B=document.getElementById("logo"),Q=document.getElementById("settingsMenu"),F=document.getElementById("subText1"),D=document.getElementById("subText2");w.style.transition="2s all",B.style.transition="2s all",F.style.transition="2s all",D.style.transition="2s all",inUniverse===!0?setTimeout(()=>{w.style.left="10%",B.style.left="30%",w.style.opacity="0",B.style.opacity="0%",setTimeout(()=>{F.style.bottom="49%",F.style.opacity="100%",setTimeout(()=>{D.style.bottom="45%"},500)},1e3),setTimeout(()=>{w.style.display="none",B.style.display="none",Q.style.display="none"},3e3)},2e3):(w.style.display="block",B.style.display="block",Q.style.display="grid",F.style.bottom="44%",F.style.opacity="0%",D.style.bottom="40%",D.style.opacity="0%",setTimeout(()=>{w.style.left="6%",B.style.left="3%",w.style.opacity="100%",B.style.opacity="100%"},1e3),setTimeout(()=>{D.style.display="none",F.style.display="none"}))};window.mainMenuPosition=(w,B,Q,F,D)=>{var U=document.querySelectorAll(".mainMenuBut");document.getElementById(""),U.forEach(O=>{switch(O.style.backgroundColor=w,O.id){case"shopBut":document.getElementById("shopBut").style.left=B;break;case"newGameBut":document.getElementById("newGameBut").style.left=Q;break;case"settingsBut":document.getElementById("settingsBut").style.left=F;break;case"subscribeBut":document.getElementById("subscribeBut").style.left=D;break}})};window.activateInvestors=()=>{document.getElementById("getInvestors").style.display="block",document.getElementById("investBut").style.display="block",window.matchMedia("(max-width: 768px)").matches&&(document.getElementById("settingsBut").style.display="none")};window.openInvestors=()=>{document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition="1s all",document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right="-70%",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="0%"};window.closeInvestor=()=>{document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition="1s all",document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right="-100%"};window.getParamsDesktop=()=>{const w=new URLSearchParams(location.search);investorsView=w.get("Investors"),investorsView==="true"&&activateInvestors()};var universeCanvas=document.querySelector("#universe"),exploreUI=document.querySelector("#exploreUI"),previewUI=document.getElementById("previewUI"),expBox=document.getElementById("explore"),pinUi=document.getElementById("getUniMenu").shadowRoot.getElementById("pinMenu"),locked=document.getElementById("getUniMenu").shadowRoot.getElementById("locked"),moveMenu=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),playerPos={x:0,y:0},selectionPos={x:0,y:0},selectionBoxPosition={x:0,y:0},cityPosition={x:0,y:0},convertedSelPos,convertedCursorPos,tileSize=18,playerNum=0,msL=50,msR=50,msU=50,msD=50,movementPaused=!1,timeoutHandle1,timeoutHandle2,previewOpen=!1,typing=!1,connected=!1,ci="false",tempLandEx=["1435","3162","2849"];window.suUiActor=null;window.landActivated=!1;const suIDL=idlFactory;var user={principal:null,balance:null,pk:null,nfts:null},uiState={nftsLoaded:!1};const VITE_canister="wnunb-baaaa-aaaag-aaoya-cai",whitelist=[VITE_canister],host="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=wnunb-baaaa-aaaag-aaoya-cai";document.getElementById("settingsBut").addEventListener("click",openSettings);window.onload=()=>{loadShop(),getParamsDesktop()};window.universeSystem=async()=>{var w=universeCanvas.getContext("2d"),B=document.createElement("img"),Q=document.getElementById("camera");if(soundtrack.stop("menuEntrance1"),soundtrack.play("menuEntrance1"),navigator.userAgent.includes("Brave")||navigator.userAgent.includes("Firefox")||navigator.userAgent.includes("Chrome")){document.querySelector("#universe").style.display="block",setTimeout(()=>{document.querySelector("#universe").style.opacity="100%"},100),B.onload=function(){w.drawImage(B,0,0,B.width,B.height),w.fillStyle="rgba(255, 255, 255, 0.08)";for(var O=0;O<B.width;O+=tileSize)w.fillRect(O,0,1,B.height);for(var Y=0;Y<B.height;Y+=tileSize)w.fillRect(0,Y,B.width,1)},B.src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg",Q.scrollTo(990,0),Q.addEventListener("scroll",function(){Q.scrollLeft<990&&Q.scrollTo(990,0),Q.style.overflowY="hidden"},{passive:!1}),Q.addEventListener("wheel",function(O){O.preventDefault()},{passive:!1}),universeCanvas.addEventListener("mousemove",mousePos),universeCanvas.addEventListener("click",selectedPos),document.addEventListener("focus",O=>{O.target,typing=!0},!0),document.addEventListener("blur",O=>{O.target,typing=!1},!0);var F=document.createElement("div"),D=document.createElement("div"),U=document.createElement("div");F.id="uniEvent",document.getElementById("camera").appendChild(F),D.id="uniEvent2",document.getElementById("camera").appendChild(D),U.id="uniEvent3",document.getElementById("camera").appendChild(U),adminUI(),openLocationCard(),window.playerPos()}else alert("The browser is not Brave, Firefox, or Chrome")};window.adminUI=()=>{var w=document.createElement("div"),B=document.createElement("div"),Q=document.createElement("div"),F=document.createElement("div"),D=document.createElement("div"),U=document.createElement("div"),O=document.createElement("div");document.getElementById("selection").style.display="block",w.id="adminUI",B.id="DebugColumn",Q.id="DebugRow",F.id="selectionPos",D.id="pixelPos",U.id="selectPosBox",O.id="playerCord",w.appendChild(D),w.appendChild(B),w.appendChild(Q),w.appendChild(F),w.appendChild(U),w.appendChild(O),document.getElementById("main").appendChild(w),dragElement(document.getElementById("adminUI"),!0),dragElement(document.getElementById("exploreUI"),!0),F.innerHTML="Selected Tile:",B.innerHTML="Column:",Q.innerHTML="Row:",D.innerHTML="X: , Y:",U.innerHTML="SelBoxTile:",O.innerHTML="Player Coordinates:",initSelection(),moveSelection(),window.moveMenu()};window.mousePos=w=>{var B=universeCanvas.getBoundingClientRect();playerPos.x=Math.round((w.clientX-B.left)/tileSize),playerPos.y=Math.round((w.clientY-B.top)/tileSize),pixelPos.x=w.clientX-B.left,pixelPos.y=w.clientY-B.top,document.getElementById("DebugColumn").innerHTML="Column: "+playerPos.x,document.getElementById("DebugRow").innerHTML="Row: "+playerPos.y,document.getElementById("pixelPos").innerHTML="X: "+pixelPos.x+", Y: "+pixelPos.y};window.selectedPos=w=>{document.getElementById("explore").style.display="block";var B=universeCanvas.getBoundingClientRect();exploreUI.style.transform="scale(0)",selectionPos.x=Math.round((w.clientX-(B.left+9))/tileSize),selectionPos.y=Math.round((w.clientY-(B.top+9))/tileSize);var Q=170-selectionPos.x;if(document.getElementById("selectionPos").innerHTML="Selected Tile: "+(170-Q+170*selectionPos.y),playerNum=170-Q+170*selectionPos.y,convertedCursorPos=170-Q+170*selectionPos.y,previewUI.innerHTML="Land "+playerNum,previewUI.style.color="blue",expBox.style.left=w.clientX-expBox.offsetWidth/2+"px",expBox.style.top=w.clientY-expBox.offsetHeight/2+"px",expBox.style.left=Math.round((expBox.offsetLeft-B.left)/tileSize)*tileSize+B.left+"px",expBox.style.top=Math.round((expBox.offsetTop-B.top)/tileSize)*tileSize+B.top+"px",previewUI.style.display="block",previewUI.style.left=expBox.offsetLeft+expBox.offsetWidth+18+"px",previewUI.style.top=expBox.offsetTop-108+"px",previewUI.style.transformOrigin="bottom left",expBox.offsetTop<215&&(previewUI.style.top=expBox.offsetTop+expBox.offsetHeight+18+"px",previewUI.style.transformOrigin="top left"),expBox.offsetLeft>window.innerWidth-215&&(previewUI.style.left=expBox.offsetLeft-previewUI.offsetWidth-18+"px",previewUI.style.transformOrigin="bottom right"),expBox.offsetLeft<215&&(previewUI.style.transformOrigin="bottom left"),previewOpen==!1){previewUI.style.transform="scale(1)",previewOpen=!0,timeoutHandle1=setTimeout(()=>{previewUI.style.transform="scale(0)",previewOpen=!1},3e3);return}if(previewOpen==!0){clearTimeout(timeoutHandle1),timeoutHandle1=setTimeout(()=>{previewUI.style.transform="scale(0)",previewOpen=!1},3e3);return}};function dragElement(w,B){var Q=0,F=0,D=0,U=0;if(B===!1)return;pinUi.style.borderTop="2px solid rgba(225, 225, 225, 0.8)",pinUi.style.borderLeft="2px solid rgba(225, 225, 225, 0.8)",pinUi.style.filter="blur(0px)",pinUi.setAttribute("class","unpinned"),locked.style.opacity="0",document.getElementById(w.id+"header")?document.getElementById(w.id+"header").onmousedown=O:w.onmousedown=O;function O(re){re=re||window.event,re.preventDefault(),D=re.clientX,U=re.clientY,document.onmouseup=j,document.onmousemove=Y}function Y(re){re=re||window.event,re.preventDefault(),Q=D-re.clientX,F=U-re.clientY,D=re.clientX,U=re.clientY,w.style.top=w.offsetTop-F+"px",w.style.left=w.offsetLeft-Q+"px"}function j(){document.onmouseup=null,document.onmousemove=null}}window.deactivateDrag=()=>{moveMenu.onmousedown=null,document.onmouseup=null,document.onmousemove=null,pinUi.style.borderTop="4px solid #ff002d",pinUi.style.borderLeft="4px solid #ff002d",pinUi.setAttribute("class","pinned"),locked.style.opacity="1"};window.pinMenu=()=>{if(pinUi.getAttribute("class")=="pinned"){dragElement(moveMenu,!0),pinUi.setAttribute("class","unpinned");return}if(pinUi.getAttribute("class")=="unpinned"){deactivateDrag(),pinUi.setAttribute("class","pinned"),moveMenu.style.transition="1s",moveMenu.style.top="36px",moveMenu.style.left="36px",document.getElementById("getUniMenu").toggleMenu(),setTimeout(()=>{moveMenu.style.transition=""},1200);return}};window.playerPos=()=>{var w=document.getElementById("selection"),B=universeCanvas.getBoundingClientRect(),Q=w.getBoundingClientRect(),F={x:Math.round(Q.left-B.left+2),y:Math.round(Q.top-B.top+2)},D={x:Math.round(F.x/tileSize),y:Math.round(Math.round(F.y/tileSize))},U=170-D.x,O=170-U+D.y*170;if(document.getElementById("selectPosBox").innerHTML=`Player Position: ${O}`,convertedSelPos=170-U+D.y*170,cityPosition.x=F.x,cityPosition.y=F.y,document.getElementById("playerCord").innerHTML=`Player Coordinates: ${cityPosition.x}, ${cityPosition.y}`,`${O}`===tempLandEx[0]||`${O}`===tempLandEx[1]||`${O}`===tempLandEx[2]){if(window.landActivated=!0,document.getElementById("selection").style.animationPlayState="running",document.getElementById("selection").style.animation="whiteBoxGlow 1s infinite",document.getElementById("selection").innerHTML='<div id="exclamationMark" style="position: absolute; top: 8px; left: 8px; width: 18px; height: 18px; background-color: #ff002d; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; color: #fff; font-weight: 700;">!</div>',`${O}`===tempLandEx[0]){exploreUI.innerHTML=tempCont1;return}else if(`${O}`===tempLandEx[1]){exploreUI.innerHTML=tempCont2;return}else if(`${O}`===tempLandEx[2]){exploreUI.innerHTML=tempCont3;return}return}else window.landActivated=!1,document.getElementById("selection").style.animationPlayState="paused",document.getElementById("selection").style.animation="none",document.getElementById("selection").innerHTML="",exploreUI.innerHTML=""};window.moveSelection=()=>{document.removeEventListener("keydown",checkKeys);var w=document.getElementById("selection"),B=window.innerHeight/tileSize,Q=window.innerWidth/tileSize,F=B/2,D=Q/2;selectionBoxPosition.x=D*tileSize,selectionBoxPosition.y=F*tileSize,document.addEventListener("keydown",function(U){exploreUI.style.transform="scale(0)",U.keyCode==37&&selectionBoxPosition.x>0&&movementPaused==!1&&(selectionBoxPosition.x-=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msL)),U.keyCode==38&&selectionBoxPosition.y>0&&movementPaused==!1&&(selectionBoxPosition.y-=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msU)),U.keyCode==39&&selectionBoxPosition.x<Q*tileSize-tileSize&&movementPaused==!1&&(selectionBoxPosition.x+=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msR)),U.keyCode==40&&selectionBoxPosition.y<B*tileSize-tileSize&&movementPaused==!1&&(selectionBoxPosition.y+=tileSize,movementPaused=!0,setTimeout(()=>{movementPaused=!1},msD)),w.style.left=selectionBoxPosition.x+"px",w.style.top=selectionBoxPosition.y+"px",window.playerPos(),U.keyCode==32&&window.exploreOpenHelper()}),document.addEventListener("keydown",function(U){U.keyCode==37&&selectionBoxPosition.x==0&&(document.getElementById("camera").scrollLeft-=tileSize),U.keyCode==38&&selectionBoxPosition.y==0&&(document.getElementById("camera").scrollTop-=tileSize),U.keyCode==39&&selectionBoxPosition.x==Q*tileSize-tileSize&&(document.getElementById("camera").scrollLeft+=tileSize),U.keyCode==40&&selectionBoxPosition.y==B*tileSize-tileSize&&(document.getElementById("camera").scrollTop+=tileSize)})};window.initSelection=()=>{var w=window.innerWidth/tileSize,B=window.innerHeight/tileSize,Q=document.getElementById("selection");Q.style.left=w/2*tileSize+"px",Q.style.top=B/2*tileSize+"px"};window.openLocationCard=()=>{universeCanvas.addEventListener("dblclick",()=>{if(document.getElementById("previewUI").style.transform="scale(0)",convertedSelPos===convertedCursorPos)window.exploreOpenHelper();else{var w=document.getElementById("adminUI");w.style.opacity="1",setTimeout(()=>{w.style.opacity="0"},5e3)}})};var tempCont1=`<div class="cannonIcon">
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
`;window.exploreOpenHelper=()=>{console.log(typing);var w=document.getElementById("exploreUI").offsetWidth;if(typing===!1)if(selectionBoxPosition.x<window.innerWidth/tileSize*tileSize-18-w?exploreUI.style.left=selectionBoxPosition.x+tileSize+18+"px":exploreUI.style.left=selectionBoxPosition.x-18-w+"px",exploreUI.style.transform="scale(1)",window.landActivated===!1){exploreUI.style.width="128px",exploreUI.style.height="20px",exploreUI.style.top=selectionBoxPosition.y-92+"px",clearTimeout(timeoutHandle2),timeoutHandle2=setTimeout(()=>{exploreUI.style.transform="scale(0)"},6e3),exploreUI.innerHTML=`
      <div id="unclaimedBox">
        <div id="unclaimed">UNCLAIMED LAND</div>
      </div>
      `;return}else{exploreUI.style.width="540px",exploreUI.style.height="810px",exploreUI.style.top=selectionBoxPosition.y/2+"px";var B=document.getElementById("tempVid"),Q=document.getElementById("tempVid2");(B==null?void 0:B.src)!=""&&(B==null||B.play()),Q.src!=""&&Q.play()}};window.moveMenu=()=>{var w=document.getElementById("universe");moveMenu.style.display="block";var B=document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems"),Q=document.getElementById("getUniMenu").shadowRoot,F=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt"),D=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".men-active"),U=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".getNew");U.forEach(O=>{O.addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen()})}),F.forEach(O=>{O.addEventListener("mouseout",()=>{soundtrack.setVolume("menuMove3",.5),soundtrack.stop("menuMove3"),soundtrack.play("menuMove3")})}),B.childNodes.forEach(O=>{switch(O.id!="uniMenuItems"&&soundtrack.stop("menuLoading1"),O.addEventListener("click",()=>{clearAndSelectMenu(O.id),soundtrack.stop("menuEnter3"),soundtrack.play("menuEnter3")}),O.id){case"uniMenuShop":O.addEventListener("click",Y=>{dragElement(moveMenu,!0),Q.getElementById("fm-enhancements").style.display="grid",Q.getElementById("fm-header-headline").style.opacity="0%",Q.getElementById("fm-header-headline").style.pointerEvents="none",Q.getElementById("fm-help").style.display="none",Q.getElementById("fm-feedback").style.display="none",Q.getElementById("fm-settings").style.display="none",Q.getElementById("fm-profile").style.display="none",Q.getElementById("fm-enhancements").innerHTML='<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">',Q.getElementById("nftShop").addEventListener("click",()=>{document.getElementById("getNfts").toggleNftScreen(),w.style.filter="blur(5px)",Q.getElementById("uniMenu").style.filter="blur(10px)"}),Q.getElementById("fm-inventory").style.display="none",Q.getElementById("menuLoadingScreen").style.display="none",Q.getElementById("menuMessage").style.display="none",headlineSwtich(Y)});break;case"uniMenuItems":O.addEventListener("click",Y=>{headlineSwtich(Y),setTimeout(()=>{headlineSwtich(Y)},500),dragElement(moveMenu,!0),window.openInventory(),Q.getElementById("fm-help").style.display="none",Q.getElementById("fm-feedback").style.display="none",Q.getElementById("fm-settings").style.display="none",Q.getElementById("fm-inventory").style.display="grid",Q.getElementById("fm-enhancements").style.display="none",Q.getElementById("fm-profile").style.display="none",Q.getElementById("fm-header").style.display="grid",Q.getElementById("fm-header-headline").style.opacity="100%",Q.getElementById("fm-header-headline").style.pointerEvents="auto",O.setAttribute("class","menuTabs selectedMenu2"),Q.getElementById("uniMenuItemsSvg").childNodes.forEach(j=>{j.style.fill="white"}),Q.getElementById("uniMenuHelp").setAttribute("class","menuTabs"),Q.getElementById("uniMenuHelpSvg").childNodes.forEach(j=>{j.style.stroke="#ff002d"}),D.forEach(j=>{if(j.id==="fm-menu1"){var re={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(re),j.setAttribute("class","mmen-active it selectedMenu")}else j.setAttribute("class","men-active it")})});break;case"uniMenuProfile":O.addEventListener("click",Y=>{headlineSwtich(Y),setTimeout(()=>{headlineSwtich(Y)},500),window.openInventory(),Q.getElementById("fm-profile").style.display="grid",Q.getElementById("fm-header").style.display="grid",Q.getElementById("fm-header-headline").style.opacity="100%",Q.getElementById("fm-help").style.display="none",Q.getElementById("fm-inventory").style.display="none",Q.getElementById("fm-feedback").style.display="none",Q.getElementById("fm-settings").style.display="none",Q.getElementById("fm-enhancements").style.display="none",Q.getElementById("menuLoadingScreen").style.display="none",Q.getElementById("fm-header-headline").style.pointerEvents="auto",D.forEach(j=>{if(j.id==="fm-menu1"){var re={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(re),j.setAttribute("class","mmen-active ht selectedMenu")}}),deactivateDrag()});break;case"uniMenuSettings":O.addEventListener("click",Y=>{Q.getElementById("fm-help").style.display="none",Q.getElementById("fm-inventory").style.display="none",Q.getElementById("fm-feedback").style.display="none",Q.getElementById("fm-enhancements").style.display="none",Q.getElementById("fm-profile").style.display="none",Q.getElementById("fm-settings").style.display="grid",Q.getElementById("menuLoadingScreen").style.display="none",Q.getElementById("menuMessage").style.display="none",Q.getElementById("fm-header").style.display="grid",Q.getElementById("fm-header-headline").style.opacity="0%",Q.getElementById("fm-header-headline").style.pointerEvents="none",headlineSwtich(Y),deactivateDrag()});break;case"uniMenuHelp":O.addEventListener("click",Y=>{dragElement(moveMenu,!0),Q.getElementById("fm-help").style.display="grid",Q.getElementById("fm-inventory").style.display="none",Q.getElementById("fm-feedback").style.display="none",Q.getElementById("fm-settings").style.display="none",Q.getElementById("fm-enhancements").style.display="none",Q.getElementById("fm-profile").style.display="none",Q.getElementById("menuLoadingScreen").style.display="none",Q.getElementById("menuMessage").style.display="none",Q.getElementById("fm-header").style.display="grid",Q.getElementById("fm-header-headline").style.opacity="100%",Q.getElementById("fm-header-headline").style.pointerEvents="all",headlineSwtich(Y),D.forEach(j=>{if(j.id==="fm-menu1"){var re={target:document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")};document.getElementById("getUniMenu").switchMenuTabs(re),j.setAttribute("class","mmen-active ht selectedMenu")}else j.setAttribute("class","men-active ht")})});break;case"uniMenuFeedback":O.addEventListener("click",Y=>{Q.getElementById("feedbackHeadline").innerHTML="Help make T.A.O.S City better.",Q.getElementById("fm-help").style.display="none",Q.getElementById("fm-inventory").style.display="none",Q.getElementById("fm-enhancements").style.display="none",Q.getElementById("fm-profile").style.display="none",Q.getElementById("fm-settings").style.display="none",Q.getElementById("fm-header").style.display="grid",Q.getElementById("menuLoadingScreen").style.display="none",Q.getElementById("fm-header-headline").style.opacity="0%",Q.getElementById("fm-header-headline").style.pointerEvents="none",Q.getElementById("menuMessage").style.display="none",Q.getElementById("fm-feedback").style.display="grid",Q.getElementById("fm-feedback").addEventListener("click",()=>{deactivateDrag()}),headlineSwtich(Y),deactivateDrag()});break;case"uniMenuExit":O.addEventListener("click",()=>{window.showMenu(),dragElement(moveMenu,!0),soundtrack.stop("menuExitSys1"),soundtrack.play("menuExitSys1")});break}}),dragElement(moveMenu,!0),hideMenu()};window.headlineSwtich=w=>{var B=w.target.id,Q=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1"),F=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu2"),D=document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu3");switch(B){case"menuInventory":Q.innerHTML="Land & Enhancements",F.innerHTML="Assets",D.innerHTML="Sync",Q.style.opacity="100%",Q.style.userSelect="auto",F.style.opacity="100%",F.style.userSelect="auto",D.style.opacity="0%",D.style.userSelect="none";break;case"menuProfile":Q.innerHTML="Earth",F.innerHTML="Bankoo",Q.style.opacity="100%",Q.style.userSelect="auto",F.style.opacity="100%",F.style.userSelect="none",D.style.opacity="0%",D.style.userSelect="none";break;case"menuHelp":Q.innerHTML="Player",F.innerHTML="Wallet",D.innerHTML="Network",Q.style.opacity="100%",Q.style.userSelect="auto",F.style.opacity="100%",F.style.userSelect="auto",D.style.opacity="100%",D.style.userSelect="auto";break}};window.clearAndSelectMenu=w=>{var B=document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".menuTabs");B.forEach(Q=>{Q.id===w&&Q.id!=="uniMenuExit"?(Q.setAttribute("class","menuTabs selectedMenu2"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${Q.id}Svg`).childNodes.forEach(F=>{F.style.stroke="white"})):(Q.setAttribute("class","menuTabs"),document.getElementById("getUniMenu").shadowRoot.getElementById(`${Q.id}Svg`).childNodes.forEach(F=>{F.style.stroke="#ff002d",F.style.fill="#ff002d"}))})};window.hideMenu=()=>{var w=document.getElementById("gMenu"),B=document.getElementById("logo"),Q=document.getElementById("subscribeComp"),F=document.getElementById("music"),D=document.getElementById("settingsMenu");w.style.opacity="0",B.style.opacity="0",Q.style.opacity="0",F.style.opacity="0",w.style.pointerEvents="none",B.style.pointerEvents="none",Q.style.pointerEvents="none",F.style.pointerEvents="none",D.style.zIndex="2",document.getElementById("uniEvent").style.display="block",document.getElementById("uniEvent2").style.display="block",document.getElementById("uniEvent3").style.display="block"};window.showMenu=()=>{var w=document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu"),B=document.getElementById("gMenu"),Q=document.getElementById("logo"),F=document.getElementById("subscribeComp"),D=document.getElementById("music"),U=document.getElementById("settingsMenu");B.style.opacity="1",Q.style.opacity="1",F.style.opacity="1",D.style.opacity="1",B.style.pointerEvents="auto",Q.style.pointerEvents="auto",F.style.pointerEvents="auto",D.style.pointerEvents="auto",U.style.zIndex="3",document.querySelector("#universe").style.opacity="0%",setTimeout(()=>{document.querySelector("#universe").style.display="none"},1e3),document.getElementById("selection").style.display="none",document.getElementById("uniEvent").remove(),document.getElementById("uniEvent2").remove(),document.getElementById("uniEvent3").remove(),document.getElementById("explore").style.display="none",previewUI.style.transform="scale(0)",w.style.display="none",document.getElementById("adminUI").remove()};window.openInventory=async()=>{var w=document.getElementById("getUniMenu").shadowRoot,B=w.getElementById("menuLoadingScreen"),Q=w.getElementById("menuLoadingScreen3");uiState.nftsLoaded===!1?(B.style.display="grid",Q.style.display="grid",soundtrack.loop("menuLoading1"),soundtrack.play("menuLoading1"),await connectWallet()):(w.getElementById("fm-inventory").style.display="grid",w.getElementById("fm-header").style.display="grid",w.getElementById("fm-enhancements").style.display="none")};window.connectWallet=async()=>{if(document.getElementById("getUniMenu").shadowRoot,window.ic===void 0){console.log("Plug not found - Get Plug Wallet"),connectError();return}else connected=await window.ic.plug.isConnected().catch(B=>{console.error(B)});const w=()=>{console.log(window.ic.plug.sessionManager.sessionData)};if(connected===!1){const B=await window.ic.plug.requestConnect({whitelist,host,onConnectionUpdate:w,timeout:5e4}).catch(D=>{var U={e:D};connectError(U),console.error("Connect Wallet",D)});await window.ic.plug.agent,await createActor().catch(D=>{console.log("Create Actor",D)});const Q=await window.ic.plug.agent.getPrincipal().catch(D=>{console.error("Get Principal",D)});user.principal=`${Q}`;const F=await window.ic.plug.requestBalance().catch(D=>{console.error("Get Balance",D)});user.balance=F,user.pk=B,console.log(user),playerState(),getNFTCollections()}else connected===!0?(await createActor(),getNFTCollections(),playerState()):connectError()};const getNFTCollections=async()=>{var w=window.ic.plug.sessionManager.sessionData.agent,B=document.getElementById("getUniMenu").shadowRoot;await getAllUserNFTs({agent:w,user:user.principal}).then(Q=>{user.nfts=Q;var F=document.createElement("div"),D=document.createElement("img");F.setAttribute("class","Inventory-Assets-Cont"),F.appendChild(D),D.src=`${user.nfts[0].tokens[0].url}`,B.getElementById("assetsCont").appendChild(F),B.getElementById("menuLoadingScreen").style.display="none",B.getElementById("menuLoadingScreen3").style.display="none",soundtrack.stop("menuLoading1"),uiState.nftsLoaded=!0}).catch(Q=>{connectError("getAllUserNFTs")})},playerState=async()=>{await window.suUiActor.metadata().catch(B=>{console.log("Get Metadata",B)}),await window.suUiActor.adminUser().catch(B=>{console.log("Get Admin",{e:B});var Q={e:B};window.dmb===!1&&attn(Q)})===user.principal&&console.log("Admin Logged in")},createActor=async()=>{user.principal=window.ic.plug.sessionManager.sessionData.principalId,window.suUiActor=await window.ic.plug.createActor({canisterId:VITE_canister,interfaceFactory:suIDL}).catch(w=>{console.log("creatActor",w)})},connectError=async w=>{var Q;var B=document.getElementById("getUniMenu").shadowRoot;switch(B.getElementById("menuLoadingScreen").style.display="none",B.getElementById("menuLoadingScreen3").style.display="none",soundtrack.stop("menuLoading1"),soundtrack.setVolume("menuError1",.4),soundtrack.play("menuError1"),B.getElementById("menuMessage").style.display="grid",((Q=w.e.result)==null?void 0:Q.error_code)||w.e.message){case"IC0501":B.getElementById("menuMessage").innerHTML=`
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
      </div>`,B.querySelector("#menuMessageBody").addEventListener("click",()=>{var F={target:B.querySelector("#fm-menu2")};B.querySelector("#menuHelp"),B.querySelector("#uniMenuFeedback").click(F)});break;default:B.getElementById("menuMessage").innerHTML=`
      <div>
        <div id="menuMessageHead">NEURAL CHIP ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;">Seems like something went wrong with your Digisette. LX-Comm has been notified. In the meantime, try <span style="color:var(--accent);"><a href="#" onclick="location.reload()">refreshing</a></span> your connection and attempting again.</div>
      </div>`;break}},attn=async w=>{let B=new FormData;B.append("Email","ATTN: RELOAD"),B.append("FeedbackText",`${w.e.props.Message}`),fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec",{method:"POST",body:B,mode:"cors"}).then(Q=>Q.text())};window.systemNoti=async()=>{document.getElementById("updatesModal").style.display="block",document.getElementById("getCamp").closeCampaign()};window.rsvp=async()=>{document.getElementById("rsvpModal").style.display="block",document.getElementById("getCamp").closeCampaign()};export{buffer as a,base64Js as b,src$1 as c,src as d,decode as e,commonjsRequire as f,getAugmentedNamespace as g,commonjsGlobal as h,getDefaultExportFromCjs as i,sha256 as s};
