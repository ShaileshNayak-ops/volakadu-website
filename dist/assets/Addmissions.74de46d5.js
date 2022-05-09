import{_ as Ia}from"./plugin-vue_export-helper.21dcd24c.js";import{g as Sa,o as On,c as Ln,e as Pe,n as ui,b as Ca}from"./index.6e70e643.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},_a=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,h=i+2<e.length,c=h?e[i+2]:0,u=r>>2,l=(r&3)<<4|a>>4;let g=(a&15)<<2|c>>6,y=c&63;h||(y=64,o||(g=64)),s.push(n[u],n[l],n[g],n[y])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||l==null)throw Error();const g=r<<2|a>>4;if(s.push(g),c!==64){const y=a<<4&240|c>>2;if(s.push(y),l!==64){const T=c<<6&192|l;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Aa=function(e){const t=yr(e);return ba.encodeByteArray(t,!0)},vr=function(e){return Aa(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Da(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function Na(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ra(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xa(){return ln().indexOf("Electron/")>=0}function Oa(){const e=ln();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function La(){return ln().indexOf("MSAppHost/")>=0}function Pa(){return typeof indexedDB=="object"}function Ma(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="FirebaseError";class Ee extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Fa,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Va(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ee(i,a,s)}}function Va(e,t){return e.replace(Ua,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ua=/\{\$([^}]+)}/g;function Yn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(li(r)&&li(o)){if(!Yn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function li(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return new Promise((n,s)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var r;s(`${t}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class di{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new Tr(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Ir(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Tr{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new Ir(this._transaction.objectStore(t))}}class Ir{constructor(t){this._store=t}index(t){return new fi(this._store.index(t))}createIndex(t,n,s){return new fi(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return ee(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return ee(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ee(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ee(t,"Error clearing IndexedDB object store")}}class fi{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ee(n,"Error reading from IndexedDB")}}function Ba(e,t,n){return new Promise((s,i)=>{try{const r=indexedDB.open(e,t);r.onsuccess=o=>{s(new di(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new di(r.result),o.oldVersion,o.newVersion,new Tr(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class Ft{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ka;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ja(t))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vt){return this.instances.has(t)}getOptions(t=vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qa(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=vt){return this.component?this.component.multipleInstances?t:vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qa(e){return e===vt?void 0:e}function ja(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $a(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const Ka={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},za=b.INFO,Ga={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Wa=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Ga[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sr{constructor(t){this.name=t,this._logLevel=za,this._logHandler=Wa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ka[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ya(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ya(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qn="@firebase/app",pi="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Sr("@firebase/app"),Qa="@firebase/app-compat",Ja="@firebase/analytics-compat",Za="@firebase/analytics",th="@firebase/app-check-compat",eh="@firebase/app-check",nh="@firebase/auth",sh="@firebase/auth-compat",ih="@firebase/database",rh="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",hh="@firebase/installations",ch="@firebase/installations-compat",uh="@firebase/messaging",lh="@firebase/messaging-compat",dh="@firebase/performance",fh="@firebase/performance-compat",ph="@firebase/remote-config",gh="@firebase/remote-config-compat",mh="@firebase/storage",yh="@firebase/storage-compat",vh="@firebase/firestore",wh="@firebase/firestore-compat",Eh="firebase",Th="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]",Ih={[Qn]:"fire-core",[Qa]:"fire-core-compat",[Za]:"fire-analytics",[Ja]:"fire-analytics-compat",[eh]:"fire-app-check",[th]:"fire-app-check-compat",[nh]:"fire-auth",[sh]:"fire-auth-compat",[ih]:"fire-rtdb",[rh]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[hh]:"fire-iid",[ch]:"fire-iid-compat",[uh]:"fire-fcm",[lh]:"fire-fcm-compat",[dh]:"fire-perf",[fh]:"fire-perf-compat",[ph]:"fire-rc",[gh]:"fire-rc-compat",[mh]:"fire-gcs",[yh]:"fire-gcs-compat",[vh]:"fire-fst",[wh]:"fire-fst-compat","fire-js":"fire-js",[Eh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Map,Jn=new Map;function Sh(e,t){try{e.container.addComponent(t)}catch(n){Ss.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ae(e){const t=e.name;if(Jn.has(t))return Ss.debug(`There were multiple attempts to register component ${t}.`),!1;Jn.set(t,e);for(const n of Ge.values())Sh(n,e);return!0}function _r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},St=new wr("app","Firebase",Ch);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=Th;function bh(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});const i=Ge.get(s);if(i){if(Yn(e,i.options)&&Yn(n,i.config))return i;throw St.create("duplicate-app",{appName:s})}const r=new Ha(s);for(const a of Jn.values())r.addComponent(a);const o=new _h(e,n,r);return Ge.set(s,o),o}function Ar(e=Cr){const t=Ge.get(e);if(!t)throw St.create("no-app",{appName:e});return t}function dt(e,t,n){var s;let i=(s=Ih[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}ae(new Ft(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebase-heartbeat-database",kh=1,he="firebase-heartbeat-store";let Pn=null;function kr(){return Pn||(Pn=Ba(Ah,kh,(e,t)=>{switch(t){case 0:e.createObjectStore(he)}}).catch(e=>{throw St.create("storage-open",{originalErrorMessage:e.message})})),Pn}async function Dh(e){try{return(await kr()).transaction(he).objectStore(he).get(Dr(e))}catch(t){throw St.create("storage-get",{originalErrorMessage:t.message})}}async function gi(e,t){try{const s=(await kr()).transaction(he,"readwrite");return await s.objectStore(he).put(t,Dr(e)),s.complete}catch(n){throw St.create("storage-set",{originalErrorMessage:n.message})}}function Dr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=1024,Rh=30*24*60*60*1e3;class xh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Rh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mi(),{heartbeatsToSend:n,unsentEntries:s}=Oh(this._heartbeatsCache.heartbeats),i=vr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mi(){return new Date().toISOString().substring(0,10)}function Oh(e,t=Nh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),yi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pa()?Ma().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yi(e){return vr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(e){ae(new Ft("platform-logger",t=>new Xa(t),"PRIVATE")),ae(new Ft("heartbeat",t=>new xh(t),"PRIVATE")),dt(Qn,pi,e),dt(Qn,pi,"esm2017"),dt("fire-js","")}Ph("");var Mh="firebase",Fh="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt(Mh,Fh,"app");var Vh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},p,Cs=Cs||{},E=Vh||self;function We(){}function Zn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Te(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Uh(e){return Object.prototype.hasOwnProperty.call(e,Mn)&&e[Mn]||(e[Mn]=++Bh)}var Mn="closure_uid_"+(1e9*Math.random()>>>0),Bh=0;function $h(e,t,n){return e.call.apply(e.bind,arguments)}function qh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=$h:$=qh,$.apply(null,arguments)}function Me(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function gt(){this.s=this.s,this.o=this.o}var jh=0,Hh={};gt.prototype.s=!1;gt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),jh!=0)){var e=Uh(this);delete Hh[e]}};gt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Rr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Kh(e){t:{var t=Mc;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function vi(e){return Array.prototype.concat.apply([],arguments)}function _s(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Xe(e){return/^[\s\xa0]*$/.test(e)}var wi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function X(e,t){return e.indexOf(t)!=-1}function Fn(e,t){return e<t?-1:e>t?1:0}var Y;t:{var Ei=E.navigator;if(Ei){var Ti=Ei.userAgent;if(Ti){Y=Ti;break t}}Y=""}function bs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function xr(e){const t={};for(const n in e)t[n]=e[n];return t}var Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ii.length;r++)n=Ii[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function As(e){return As[" "](e),e}As[" "]=We;function zh(e){var t=Xh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Gh=X(Y,"Opera"),Vt=X(Y,"Trident")||X(Y,"MSIE"),Lr=X(Y,"Edge"),ts=Lr||Vt,Pr=X(Y,"Gecko")&&!(X(Y.toLowerCase(),"webkit")&&!X(Y,"Edge"))&&!(X(Y,"Trident")||X(Y,"MSIE"))&&!X(Y,"Edge"),Wh=X(Y.toLowerCase(),"webkit")&&!X(Y,"Edge");function Mr(){var e=E.document;return e?e.documentMode:void 0}var Ye;t:{var Vn="",Un=function(){var e=Y;if(Pr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Lr)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Wh)return/WebKit\/(\S+)/.exec(e);if(Gh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Un&&(Vn=Un?Un[1]:""),Vt){var Bn=Mr();if(Bn!=null&&Bn>parseFloat(Vn)){Ye=String(Bn);break t}}Ye=Vn}var Xh={};function Yh(){return zh(function(){let e=0;const t=wi(String(Ye)).split("."),n=wi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Fn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Fn(i[2].length==0,r[2].length==0)||Fn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var es;if(E.document&&Vt){var Si=Mr();es=Si||parseInt(Ye,10)||void 0}else es=void 0;var Qh=es,Jh=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",We,t),E.removeEventListener("test",We,t)}catch{}return e}();function W(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};function ce(e,t){if(W.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Pr){t:{try{As(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Zh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ce.Z.h.call(this)}}z(ce,W);var Zh={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),tc=0;function ec(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++tc,this.ca=this.fa=!1}function dn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function fn(e){this.src=e,this.g={},this.h=0}fn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ss(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ec(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function ns(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Nr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(dn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ss(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var ks="closure_lm_"+(1e6*Math.random()|0),$n={};function Fr(e,t,n,s,i){if(s&&s.once)return Ur(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Fr(e,t[r],n,s,i);return null}return n=Rs(n),e&&e[Ie]?e.N(t,n,Te(s)?!!s.capture:!!s,i):Vr(e,t,n,!1,s,i)}function Vr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Te(i)?!!i.capture:!!i,a=Ns(e);if(a||(e[ks]=a=new fn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=nc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Jh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent($r(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nc(){function e(n){return t.call(e.src,e.listener,n)}var t=sc;return e}function Ur(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ur(e,t[r],n,s,i);return null}return n=Rs(n),e&&e[Ie]?e.O(t,n,Te(s)?!!s.capture:!!s,i):Vr(e,t,n,!0,s,i)}function Br(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Br(e,t[r],n,s,i);else s=Te(s)?!!s.capture:!!s,n=Rs(n),e&&e[Ie]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ss(r,n,s,i),-1<n&&(dn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ns(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ss(t,n,s,i)),(n=-1<e?t[e]:null)&&Ds(n))}function Ds(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ie])ns(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent($r(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ns(t))?(ns(n,e),n.h==0&&(n.src=null,t[ks]=null)):dn(e)}}}function $r(e){return e in $n?$n[e]:$n[e]="on"+e}function sc(e,t){if(e.ca)e=!0;else{t=new ce(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ds(e),e=n.call(s,t)}return e}function Ns(e){return e=e[ks],e instanceof fn?e:null}var qn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rs(e){return typeof e=="function"?e:(e[qn]||(e[qn]=function(t){return e.handleEvent(t)}),e[qn])}function V(){gt.call(this),this.i=new fn(this),this.P=this,this.I=null}z(V,gt);V.prototype[Ie]=!0;V.prototype.removeEventListener=function(e,t,n,s){Br(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new W(t,e);else if(t instanceof W)t.target=t.target||e;else{var i=t;t=new W(s,e),Or(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Fe(o,s,!0,t)&&i}if(o=t.g=e,i=Fe(o,s,!0,t)&&i,i=Fe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Fe(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)dn(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Fe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&ns(e.i,o),i=a.call(h,s)!==!1&&i}}return i&&!s.defaultPrevented}var xs=E.JSON.stringify;function ic(){var e=jr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class rc{constructor(){this.h=this.g=null}add(t,n){const s=qr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new oc,e=>e.reset());class oc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ac(e){E.setTimeout(()=>{throw e},0)}function Os(e,t){is||hc(),rs||(is(),rs=!0),jr.add(e,t)}var is;function hc(){var e=E.Promise.resolve(void 0);is=function(){e.then(cc)}}var rs=!1,jr=new rc;function cc(){for(var e;e=ic();){try{e.h.call(e.g)}catch(n){ac(n)}var t=qr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}rs=!1}function pn(e,t){V.call(this),this.h=e||1,this.g=t||E,this.j=$(this.kb,this),this.l=Date.now()}z(pn,V);p=pn.prototype;p.da=!1;p.S=null;p.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(Ls(this),this.start()))}};p.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ls(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}p.M=function(){pn.Z.M.call(this),Ls(this),delete this.g};function Ps(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Hr(e){e.g=Ps(()=>{e.g=null,e.i&&(e.i=!1,Hr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class uc extends gt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Hr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(e){gt.call(this),this.h=e,this.g={}}z(ue,gt);var Ci=[];function Kr(e,t,n,s){Array.isArray(n)||(n&&(Ci[0]=n.toString()),n=Ci);for(var i=0;i<n.length;i++){var r=Fr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function zr(e){bs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ds(t)},e),e.g={}}ue.prototype.M=function(){ue.Z.M.call(this),zr(this)};ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gn(){this.g=!0}gn.prototype.Aa=function(){this.g=!1};function lc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function dc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function xt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+pc(e,n)+(s?" "+s:"")})}function fc(e,t){e.info(function(){return"TIMEOUT: "+t})}gn.prototype.info=function(){};function pc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xs(n)}catch{return t}}var Nt={},_i=null;function mn(){return _i=_i||new V}Nt.Ma="serverreachability";function Gr(e){W.call(this,Nt.Ma,e)}z(Gr,W);function le(e){const t=mn();q(t,new Gr(t,e))}Nt.STAT_EVENT="statevent";function Wr(e,t){W.call(this,Nt.STAT_EVENT,e),this.stat=t}z(Wr,W);function Q(e){const t=mn();q(t,new Wr(t,e))}Nt.Na="timingevent";function Xr(e,t){W.call(this,Nt.Na,e),this.size=t}z(Xr,W);function Se(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var yn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ms(){}Ms.prototype.h=null;function bi(e){return e.h||(e.h=e.i())}function Qr(){}var Ce={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fs(){W.call(this,"d")}z(Fs,W);function Vs(){W.call(this,"c")}z(Vs,W);var os;function vn(){}z(vn,Ms);vn.prototype.g=function(){return new XMLHttpRequest};vn.prototype.i=function(){return{}};os=new vn;function _e(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ue(this),this.P=gc,e=ts?125:void 0,this.W=new pn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jr}function Jr(){this.i=null,this.g="",this.h=!1}var gc=45e3,as={},Qe={};p=_e.prototype;p.setTimeout=function(e){this.P=e};function hs(e,t,n){e.K=1,e.v=En(lt(t)),e.s=n,e.U=!0,Zr(e,null)}function Zr(e,t){e.F=Date.now(),be(e),e.A=lt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),oo(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Jr,e.g=Ao(e.l,n?t:null,!e.s),0<e.O&&(e.L=new uc($(e.Ia,e,e.g),e.O)),Kr(e.V,e.g,"readystatechange",e.gb),t=e.H?xr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),le(1),lc(e.j,e.u,e.A,e.m,e.X,e.s)}p.gb=function(e){e=e.target;const t=this.L;t&&ut(e)==3?t.l():this.Ia(e)};p.Ia=function(e){try{if(e==this.g)t:{const u=ut(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||ts||this.g&&(this.h.h||this.g.ga()||Ni(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?le(3):le(2)),wn(this);var n=this.g.ba();this.N=n;e:if(to(this)){var s=Ni(this.g);e="";var i=s.length,r=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){wt(this),se(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,dc(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var c=a;break e}}c=null}if(n=c)xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cs(this,n);else{this.i=!1,this.o=3,Q(12),wt(this),se(this);break t}}this.U?(eo(this,u,o),ts&&this.i&&u==3&&(Kr(this.V,this.W,"tick",this.fb),this.W.start())):(xt(this.j,this.m,o,null),cs(this,o)),u==4&&wt(this),this.i&&!this.I&&(u==4?So(this.l,this):(this.i=!1,be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),wt(this),se(this)}}}catch{}finally{}};function to(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function eo(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=mc(e,n),i==Qe){t==4&&(e.o=4,Q(14),s=!1),xt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==as){e.o=4,Q(15),xt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else xt(e.j,e.m,i,null),cs(e,i);to(e)&&i!=Qe&&i!=as&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gs(t),t.L=!0,Q(11))):(xt(e.j,e.m,n,"[Invalid Chunked Response]"),wt(e),se(e))}p.fb=function(){if(this.g){var e=ut(this.g),t=this.g.ga();this.C<t.length&&(wn(this),eo(this,e,t),this.i&&e!=4&&be(this))}};function mc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Qe:(n=Number(t.substring(n,s)),isNaN(n)?as:(s+=1,s+n>t.length?Qe:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,wt(this)};function be(e){e.Y=Date.now()+e.P,no(e,e.P)}function no(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Se($(e.eb,e),t)}function wn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}p.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(fc(this.j,this.A),this.K!=2&&(le(3),Q(17)),wt(this),this.o=2,se(this)):no(this,this.Y-e)};function se(e){e.l.G==0||e.I||So(e.l,e)}function wt(e){wn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ls(e.W),zr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function cs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||us(n.i,e))){if(n.I=e.N,!e.J&&us(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)en(n),Sn(n);else break t;zs(n),Q(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Se($(n.ab,n),6e3));if(1>=co(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Et(n,11)}else if((e.J||n.g==e)&&en(n),!Xe(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=c[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const T=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.i;!r.g&&(X(T,"spdy")||X(T,"quic")||X(T,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&($s(r,r.h),r.h=null))}if(s.D){const R=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(s.sa=R,D(s.F,s.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=bo(s,s.H?s.la:null,s.W),o.J){uo(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(wn(a),be(a)),s.g=o}else To(s);0<n.l.length&&Cn(n)}else c[0]!="stop"&&c[0]!="close"||Et(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Et(n,7):Ks(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}le(4)}catch{}}function yc(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Zn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Us(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Zn(e)||typeof e=="string")Rr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Zn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=yc(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Kt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Kt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}p=Kt.prototype;p.R=function(){Bs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};p.T=function(){return Bs(this),this.g.concat()};function Bs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ct(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Ct(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}p.get=function(e,t){return Ct(this.h,e)?this.h[e]:t};p.set=function(e,t){Ct(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};p.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Ct(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var so=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _t(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof _t){this.g=t!==void 0?t:e.g,Je(this,e.j),this.s=e.s,Ze(this,e.i),tn(this,e.m),this.l=e.l,t=e.h;var n=new de;n.i=t.i,t.g&&(n.g=new Kt(t.g),n.h=t.h),Ai(this,n),this.o=e.o}else e&&(n=String(e).match(so))?(this.g=!!t,Je(this,n[1]||"",!0),this.s=ie(n[2]||""),Ze(this,n[3]||"",!0),tn(this,n[4]),this.l=ie(n[5]||"",!0),Ai(this,n[6]||"",!0),this.o=ie(n[7]||"")):(this.g=!!t,this.h=new de(null,this.g))}_t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ne(t,ki,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ne(t,ki,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ne(n,n.charAt(0)=="/"?Sc:Ic,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ne(n,_c)),e.join("")};function lt(e){return new _t(e)}function Je(e,t,n){e.j=n?ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ze(e,t,n){e.i=n?ie(t,!0):t}function tn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ai(e,t,n){t instanceof de?(e.h=t,bc(e.h,e.g)):(n||(t=ne(t,Cc)),e.h=new de(t,e.g))}function D(e,t,n){e.h.set(t,n)}function En(e){return D(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wc(e){return e instanceof _t?lt(e):new _t(e,void 0)}function Ec(e,t,n,s){var i=new _t(null,void 0);return e&&Je(i,e),t&&Ze(i,t),n&&tn(i,n),s&&(i.l=s),i}function ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ne(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Tc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Tc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ki=/[#\/\?@]/g,Ic=/[#\?:]/g,Sc=/[#\?]/g,Cc=/[#\?@]/g,_c=/#/g;function de(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Kt,e.h=0,e.i&&vc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=de.prototype;p.add=function(e,t){mt(this),this.i=null,e=zt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function io(e,t){mt(e),t=zt(e,t),Ct(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ct(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Bs(e)))}function ro(e,t){return mt(e),t=zt(e,t),Ct(e.g.h,t)}p.forEach=function(e,t){mt(this),this.g.forEach(function(n,s){Rr(n,function(i){e.call(t,i,s,this)},this)},this)};p.T=function(){mt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};p.R=function(e){mt(this);var t=[];if(typeof e=="string")ro(this,e)&&(t=vi(t,this.g.get(zt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=vi(t,e[n])}return t};p.set=function(e,t){return mt(this),this.i=null,e=zt(this,e),ro(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function oo(e,t,n){io(e,t),0<n.length&&(e.i=null,e.g.set(zt(e,t),_s(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bc(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(io(this,s),oo(this,i,n))},e)),e.j=t}var Ac=class{constructor(e,t){this.h=e,this.g=t}};function ao(e){this.l=e||kc,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kc=10;function ho(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function co(e){return e.h?1:e.g?e.g.size:0}function us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function $s(e,t){e.g?e.g.add(t):e.h=t}function uo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ao.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function lo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _s(e.i)}function qs(){}qs.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};qs.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function Dc(){this.g=new qs}function Nc(e,t,n){const s=n||"";try{Us(e,function(i,r){let o=i;Te(i)&&(o=xs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Rc(e,t){const n=new gn;if(E.Image){const s=new Image;s.onload=Me(Ve,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Me(Ve,n,s,"TestLoadImage: error",!1,t),s.onabort=Me(Ve,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Me(Ve,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ve(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ae(e){this.l=e.$b||null,this.j=e.ib||!1}z(Ae,Ms);Ae.prototype.g=function(){return new Tn(this.l,this.j)};Ae.prototype.i=function(e){return function(){return e}}({});function Tn(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=js,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Tn,V);var js=0;p=Tn.prototype;p.open=function(e,t){if(this.readyState!=js)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fe(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=js};p.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fe(this)),this.g&&(this.readyState=3,fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function fo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}p.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ke(this):fe(this),this.readyState==3&&fo(this)}};p.Ua=function(e){this.g&&(this.response=this.responseText=e,ke(this))};p.Ta=function(e){this.g&&(this.response=e,ke(this))};p.ha=function(){this.g&&ke(this)};function ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fe(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var xc=E.JSON.parse;function M(e){V.call(this),this.headers=new Kt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=po,this.K=this.L=!1}z(M,V);var po="",Oc=/^https?$/i,Lc=["POST","PUT"];p=M.prototype;p.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():os.g(),this.C=this.u?bi(this.u):bi(os),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Di(this,r);return}e=n||"";const i=new Kt(this.headers);s&&Us(s,function(r,o){i.set(o,r)}),s=Kh(i.T()),n=E.FormData&&e instanceof E.FormData,!(0<=Nr(Lc,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yo(this),0<this.B&&((this.K=Pc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=Ps(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Di(this,r)}};function Pc(e){return Vt&&Yh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Mc(e){return e.toLowerCase()=="content-type"}p.pa=function(){typeof Cs!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function Di(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,go(e),In(e)}function go(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),In(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),In(this,!0)),M.Z.M.call(this)};p.Fa=function(){this.s||(this.F||this.v||this.l?mo(this):this.cb())};p.cb=function(){mo(this)};function mo(e){if(e.h&&typeof Cs!="undefined"&&(!e.C[1]||ut(e)!=4||e.ba()!=2)){if(e.v&&ut(e)==4)Ps(e.Fa,0,e);else if(q(e,"readystatechange"),ut(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(so)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!Oc.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",go(e)}}finally{In(e)}}}}function In(e,t){if(e.g){yo(e);const n=e.g,s=e.C[0]?We:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function yo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ut(e){return e.g?e.g.readyState:0}p.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};p.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),xc(t)}};function Ni(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case po:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Da=function(){return this.m};p.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fc(e){let t="";return bs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Hs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Fc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):D(e,t,n))}function te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vo(e){this.za=0,this.l=[],this.h=new gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=te("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=te("baseRetryDelayMs",5e3,e),this.$a=te("retryDelaySeedMs",1e4,e),this.Ya=te("forwardChannelMaxRetries",2,e),this.ra=te("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ao(e&&e.concurrentRequestLimit),this.Ca=new Dc,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}p=vo.prototype;p.ma=8;p.G=1;function Ks(e){if(wo(e),e.G==3){var t=e.V++,n=lt(e.F);D(n,"SID",e.J),D(n,"RID",t),D(n,"TYPE","terminate"),De(e,n),t=new _e(e,e.h,t,void 0),t.K=2,t.v=En(lt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ao(t.l,null),t.g.ea(t.v)),t.F=Date.now(),be(t)}_o(e)}p.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Sn(e){e.g&&(Gs(e),e.g.cancel(),e.g=null)}function wo(e){Sn(e),e.u&&(E.clearTimeout(e.u),e.u=null),en(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function jn(e,t){e.l.push(new Ac(e.Za++,t)),e.G==3&&Cn(e)}function Cn(e){ho(e.i)||e.m||(e.m=!0,Os(e.Ha,e),e.C=0)}function Vc(e,t){return co(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Se($(e.Ha,e,t),Co(e,e.C)),e.C++,!0)}p.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _e(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=xr(r),Or(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Eo(this,i,t),n=lt(this.F),D(n,"RID",e),D(n,"CVER",22),this.D&&D(n,"X-HTTP-Session-Id",this.D),De(this,n),this.o&&r&&Hs(n,this.o,r),$s(this.i,i),this.Ra&&D(n,"TYPE","init"),this.ja?(D(n,"$req",t),D(n,"SID","null"),i.$=!0,hs(i,n,null)):hs(i,n,t),this.G=2}}else this.G==3&&(e?Ri(this,e):this.l.length==0||ho(this.i)||Ri(this))};function Ri(e,t){var n;t?n=t.m:n=e.V++;const s=lt(e.F);D(s,"SID",e.J),D(s,"RID",n),D(s,"AID",e.U),De(e,s),e.o&&e.s&&Hs(s,e.o,e.s),n=new _e(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Eo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),$s(e.i,n),hs(n,s,t)}function De(e,t){e.j&&Us({},function(n,s){D(t,s,n)})}function Eo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let c=i[h].h;const u=i[h].g;if(c-=r,0>c)r=Math.max(0,i[h].h-100),a=!1;else try{Nc(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function To(e){e.g||e.u||(e.Y=1,Os(e.Ga,e),e.A=0)}function zs(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Se($(e.Ga,e),Co(e,e.A)),e.A++,!0)}p.Ga=function(){if(this.u=null,Io(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Se($(this.bb,this),e)}};p.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Q(10),Sn(this),Io(this))};function Gs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function Io(e){e.g=new _e(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=lt(e.oa);D(t,"RID","rpc"),D(t,"SID",e.J),D(t,"CI",e.N?"0":"1"),D(t,"AID",e.U),De(e,t),D(t,"TYPE","xmlhttp"),e.o&&e.s&&Hs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=En(lt(t)),n.s=null,n.U=!0,Zr(n,e)}p.ab=function(){this.v!=null&&(this.v=null,Sn(this),zs(this),Q(19))};function en(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function So(e,t){var n=null;if(e.g==t){en(e),Gs(e),e.g=null;var s=2}else if(us(e.i,t))n=t.D,uo(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=mn(),q(s,new Xr(s,n,t,i)),Cn(e)}else To(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Vc(e,t)||s==2&&zs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Et(e,5);break;case 4:Et(e,10);break;case 3:Et(e,6);break;default:Et(e,2)}}}function Co(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Et(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new _t("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Je(n,"https"),En(n)),Rc(n.toString(),s)}else Q(2);e.G=0,e.j&&e.j.va(t),_o(e),wo(e)}p.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Q(2)):(this.h.info("Failed to ping google.com"),Q(1))};function _o(e){e.G=0,e.I=-1,e.j&&((lo(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,_s(e.l),e.l.length=0),e.j.ua())}function bo(e,t,n){let s=wc(n);if(s.i!="")t&&Ze(s,t+"."+s.i),tn(s,s.m);else{const i=E.location;s=Ec(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&bs(e.aa,function(i,r){D(s,r,i)}),t=e.D,n=e.sa,t&&n&&D(s,t,n),D(s,"VER",e.ma),De(e,s),s}function Ao(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new M(new Ae({ib:!0})):new M(e.qa),t.L=e.H,t}function ko(){}p=ko.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Oa=function(){};function nn(){if(Vt&&!(10<=Number(Qh)))throw Error("Environmental error: no available transport.")}nn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){V.call(this),this.g=new vo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Gt(this)}z(et,V);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Os($(e.hb,e,t))),Q(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=bo(e,null,e.W),Cn(e)};et.prototype.close=function(){Ks(this.g)};et.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,jn(this.g,t)}else this.v?(t={},t.__data__=xs(e),jn(this.g,t)):jn(this.g,e)};et.prototype.M=function(){this.g.j=null,delete this.j,Ks(this.g),delete this.g,et.Z.M.call(this)};function Do(e){Fs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Do,Fs);function No(){Vs.call(this),this.status=1}z(No,Vs);function Gt(e){this.g=e}z(Gt,ko);Gt.prototype.xa=function(){q(this.g,"a")};Gt.prototype.wa=function(e){q(this.g,new Do(e))};Gt.prototype.va=function(e){q(this.g,new No(e))};Gt.prototype.ua=function(){q(this.g,"b")};nn.prototype.createWebChannel=nn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;yn.NO_ERROR=0;yn.TIMEOUT=8;yn.HTTP_ERROR=6;Yr.COMPLETE="complete";Qr.EventType=Ce;Ce.OPEN="a";Ce.CLOSE="b";Ce.ERROR="c";Ce.MESSAGE="d";V.prototype.listen=V.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.La;M.prototype.getLastErrorCode=M.prototype.Da;M.prototype.getStatus=M.prototype.ba;M.prototype.getResponseJson=M.prototype.Qa;M.prototype.getResponseText=M.prototype.ga;M.prototype.send=M.prototype.ea;var Uc=function(){return new nn},Bc=function(){return mn()},Hn=yn,$c=Yr,qc=Nt,xi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jc=Ae,Ue=Qr,Hc=M;const Oi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Sr("@firebase/firestore");function Li(){return bt.logLevel}function m(e,...t){if(bt.logLevel<=b.DEBUG){const n=t.map(Ws);bt.debug(`Firestore (${Wt}): ${e}`,...n)}}function ft(e,...t){if(bt.logLevel<=b.ERROR){const n=t.map(Ws);bt.error(`Firestore (${Wt}): ${e}`,...n)}}function Pi(e,...t){if(bt.logLevel<=b.WARN){const n=t.map(Ws);bt.warn(`Firestore (${Wt}): ${e}`,...n)}}function Ws(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+e;throw ft(t),new Error(t)}function P(e,t){e||I()}function _(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ee{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Gc{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let r=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const h=r;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},a=h=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(P(typeof s.accessToken=="string"),new Kc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return P(t===null||typeof t=="string"),new Z(t)}}class Wc{constructor(t,n,s){this.type="FirstParty",this.user=Z.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Xc{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Wc(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qc{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(P(typeof n.token=="string"),this.p=n.token,new Yc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.A=-1;class Zc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Jc(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function A(e,t){return e<t?-1:e>t?1:0}function pe(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new ot(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?A(this.nanoseconds,t.nanoseconds):A(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new ot(0,0))}static max(){return new S(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _n(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function tu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ge.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ge?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends ge{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const eu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ge{construct(t,n,s){return new it(t,n,s)}static isValidIdentifier(t){return eu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new H(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new H(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return A(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}H.EMPTY_BYTE_STRING=new H("");const nu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(e){if(P(!!e),typeof e=="string"){let t=0;const n=nu.exec(e);if(P(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ut(e){return typeof e=="string"?H.fromBase64String(e):H.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xo(e){const t=e.mapValue.fields.__previous_value__;return Ro(t)?xo(t):t}function me(e){const t=pt(e.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,n,s,i,r,o,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Bt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Bt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return e==null}function ls(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(x.fromString(t))}static fromName(t){return new v(x.fromString(t).popFirst(5))}static empty(){return new v(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new x(t.slice()))}}function At(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ro(e)?4:iu(e)?9:10:I()}function at(e,t){if(e===t)return!0;const n=At(e);if(n!==At(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return me(e).isEqual(me(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=pt(s.timestampValue),o=pt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=L(s.doubleValue),o=L(i.doubleValue);return r===o?ls(r)===ls(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return pe(e.arrayValue.values||[],t.arrayValue.values||[],at);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Mi(r)!==Mi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!at(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function ye(e,t){return(e.values||[]).find(n=>at(n,t))!==void 0}function $t(e,t){if(e===t)return 0;const n=At(e),s=At(t);if(n!==s)return A(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return A(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=L(i.integerValue||i.doubleValue),a=L(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Fi(e.timestampValue,t.timestampValue);case 4:return Fi(me(e),me(t));case 5:return A(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ut(i),a=Ut(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let h=0;h<o.length&&h<a.length;h++){const c=A(o[h],a[h]);if(c!==0)return c}return A(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=A(L(i.latitude),L(r.latitude));return o!==0?o:A(L(i.longitude),L(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let h=0;h<o.length&&h<a.length;++h){const c=$t(o[h],a[h]);if(c)return c}return A(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),h=r.fields||{},c=Object.keys(h);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const l=A(a[u],c[u]);if(l!==0)return l;const g=$t(o[a[u]],h[c[u]]);if(g!==0)return g}return A(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Fi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return A(e,t);const n=pt(e),s=pt(t),i=A(n.seconds,s.seconds);return i!==0?i:A(n.nanos,s.nanos)}function Lt(e){return ds(e)}function ds(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=pt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ut(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ds(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ds(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function fs(e){return!!e&&"integerValue"in e}function Ys(e){return!!e&&"arrayValue"in e}function Vi(e){return!!e&&"nullValue"in e}function Ui(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Kn(e){return!!e&&"mapValue"in e}function re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _n(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function iu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.value=t}static empty(){return new ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Kn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(n)}setAll(t){let n=it.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=re(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Kn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){_n(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ct(re(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new G(t,0,S.min(),S.min(),ct.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,S.min(),ct.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,S.min(),ct.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function ru(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new ot(n+1,0):new ot(n,s));return new qt(i,v.empty(),t)}function ou(e){return new qt(e.readTime,e.key,-1)}class qt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(S.min(),v.empty(),-1)}static max(){return new qt(S.max(),v.empty(),-1)}}function au(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:A(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Bi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new hu(e,t,n,s,i,r,o)}function Qs(e){const t=_(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Lt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Lt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Lt(s)).join(",")),t.P=n}return t.P}function cu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Lt(s.value)}`;var s}).join(", ")}]`),Xt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Lt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Lt(n)).join(",")),`Target(${t})`}function Js(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!yu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!at(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qi(e.startAt,t.startAt)&&qi(e.endAt,t.endAt)}function ps(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new uu(t,n,s):n==="array-contains"?new fu(t,s):n==="in"?new pu(t,s):n==="not-in"?new gu(t,s):n==="array-contains-any"?new mu(t,s):new tt(t,n,s)}static V(t,n,s){return n==="in"?new lu(t,s):new du(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v($t(n,this.value)):n!==null&&At(this.value)===At(n)&&this.v($t(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uu extends tt{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.v(n)}}class lu extends tt{constructor(t,n){super(t,"in",n),this.keys=Oo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class du extends tt{constructor(t,n){super(t,"not-in",n),this.keys=Oo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Oo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class fu extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ys(n)&&ye(n.arrayValue,this.value)}}class pu extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ye(this.value.arrayValue,n)}}class gu extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ye(this.value.arrayValue,n)}}class mu extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ys(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ye(this.value.arrayValue,s))}}class sn{constructor(t,n){this.position=t,this.inclusive=n}}class oe{constructor(t,n="asc"){this.field=t,this.dir=n}}function yu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function $i(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=$t(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function qi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!at(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function vu(e,t,n,s,i,r,o,a){return new bn(e,t,n,s,i,r,o,a)}function Lo(e){return new bn(e)}function je(e){return!Xt(e.limit)&&e.limitType==="F"}function rn(e){return!Xt(e.limit)&&e.limitType==="L"}function wu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Eu(e){for(const t of e.filters)if(t.S())return t.field;return null}function Tu(e){return e.collectionGroup!==null}function ve(e){const t=_(e);if(t.D===null){t.D=[];const n=Eu(t),s=wu(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new oe(n)),t.D.push(new oe(it.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new oe(it.keyField(),r))}}}return t.D}function kt(e){const t=_(e);if(!t.C)if(t.limitType==="F")t.C=Bi(t.path,t.collectionGroup,ve(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ve(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new oe(r.field,o))}const s=t.endAt?new sn(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new sn(t.startAt.position,!t.startAt.inclusive):null;t.C=Bi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function Iu(e,t,n){return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function An(e,t){return Js(kt(e),kt(t))&&e.limitType===t.limitType}function Po(e){return`${Qs(kt(e))}|lt:${e.limitType}`}function gs(e){return`Query(target=${cu(kt(e))}; limitType=${e.limitType})`}function Zs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=$i(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ve(n),s)||n.endAt&&!function(i,r,o){const a=$i(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ve(n),s))}(e,t)}function Su(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mo(e){return(t,n)=>{let s=!1;for(const i of ve(e)){const r=Cu(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Cu(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),h=o.data.field(i);return a!==null&&h!==null?$t(a,h):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(t)?"-0":t}}function bu(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this._=void 0}}function Au(e,t,n){return e instanceof ms?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof on?Fo(e,t):e instanceof an?Vo(e,t):function(s,i){const r=Du(s,i),o=ji(r)+ji(s.k);return fs(r)&&fs(s.k)?bu(o):_u(s.M,o)}(e,t)}function ku(e,t,n){return e instanceof on?Fo(e,t):e instanceof an?Vo(e,t):n}function Du(e,t){return e instanceof ys?fs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ms extends kn{}class on extends kn{constructor(t){super(),this.elements=t}}function Fo(e,t){const n=Uo(t);for(const s of e.elements)n.some(i=>at(i,s))||n.push(s);return{arrayValue:{values:n}}}class an extends kn{constructor(t){super(),this.elements=t}}function Vo(e,t){let n=Uo(t);for(const s of e.elements)n=n.filter(i=>!at(i,s));return{arrayValue:{values:n}}}class ys extends kn{constructor(t,n){super(),this.M=t,this.k=n}}function ji(e){return L(e.integerValue||e.doubleValue)}function Uo(e){return Ys(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Nu(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof on&&s instanceof on||n instanceof an&&s instanceof an?pe(n.elements,s.elements,at):n instanceof ys&&s instanceof ys?at(n.k,s.k):n instanceof ms&&s instanceof ms}(e.transform,t.transform)}function He(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Bo{}function Ru(e,t,n){e instanceof $o?function(s,i,r){const o=s.value.clone(),a=zi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof qo?function(s,i,r){if(!He(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=zi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function vs(e,t,n){e instanceof $o?function(s,i,r){if(!He(s.precondition,i))return;const o=s.value.clone(),a=Gi(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Ki(i),o).setHasLocalMutations()}(e,t,n):e instanceof qo?function(s,i,r){if(!He(s.precondition,i))return;const o=Gi(s.fieldTransforms,r,i),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(Ki(i),a).setHasLocalMutations()}(e,t,n):function(s,i){He(s.precondition,i)&&i.convertToNoDocument(S.min())}(e,t)}function Hi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pe(n,s,(i,r)=>Nu(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ki(e){return e.isFoundDocument()?e.version:S.min()}class $o extends Bo{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class qo extends Bo{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function jo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function zi(e,t,n){const s=new Map;P(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,ku(o,a,n[i]))}return s}function Gi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Au(r,o,t))}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,C;function Ho(e){if(e===void 0)return ft("GRPC error has no .code"),f.UNKNOWN;switch(e){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(C=O||(O={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_n(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return tu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new K(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new K(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.comparator=t,this.data=new K(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wi(this.data.getIterator())}getIteratorFrom(t){return new Wi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class Wi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new K(v.comparator);function Dt(){return Ou}const Lu=new K(v.comparator);function ws(){return Lu}function zn(){return new Yt(e=>e.toString(),(e,t)=>e.isEqual(t))}new K(v.comparator);const Pu=new j(v.comparator);function N(...e){let t=Pu;for(const n of e)t=t.add(n);return t}const Mu=new j(A);function Ko(){return Mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ne.createSynthesizedTargetChangeForCurrentChange(t,n)),new Dn(S.min(),s,Ko(),Dt(),N())}}class Ne{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ne(H.EMPTY_BYTE_STRING,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class zo{constructor(t,n){this.targetId=t,this.$=n}}class Go{constructor(t,n,s=H.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Xi{constructor(){this.B=0,this.L=Qi(),this.U=H.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=N(),n=N(),s=N();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Ne(this.U,this.q,t,n,s)}J(){this.G=!1,this.L=Qi()}Y(t,n){this.G=!0,this.L=this.L.insert(t,n)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Fu{constructor(t){this.nt=t,this.st=new Map,this.it=Dt(),this.rt=Yi(),this.ot=new j(A)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(ps(r))if(s===0){const o=new v(r.path);this.ct(n,o,G.newNoDocument(o,S.min()))}else P(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&ps(a.target)){const h=new v(a.target.path);this.it.get(h)!==null||this.It(o,h)||this.ct(o,h,G.newNoDocument(h,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=N();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(h=>{const c=this.wt(h);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Dn(t,n,this.ot,this.it,s);return this.it=Dt(),this.rt=Yi(),this.ot=new j(A),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Xi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new j(A),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||m("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new Xi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Yi(){return new K(v.comparator)}function Qi(){return new K(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Uu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bu{constructor(t,n){this.databaseId=t,this.N=n}}function $u(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qu(e,t){return e.N?t.toBase64():t.toUint8Array()}function we(e){return P(!!e),S.fromTimestamp(function(t){const n=pt(t);return new ot(n.seconds,n.nanos)}(e))}function ju(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Wo(e){const t=x.fromString(e);return P(Qo(t)),t}function Gn(e,t){const n=Wo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(Xo(n))}function Es(e,t){return ju(e.databaseId,t)}function Hu(e){const t=Wo(e);return t.length===4?x.emptyPath():Xo(t)}function Ji(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Xo(e){return P(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ku(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(h,c){return h.N?(P(c===void 0||typeof c=="string"),H.fromBase64String(c||"")):(P(c===void 0||c instanceof Uint8Array),H.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?f.UNKNOWN:Ho(h.code);return new w(c,h.message||"")}(o);n=new Go(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Gn(e,s.document.name),r=we(s.document.updateTime),o=new ct({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new Ke(h,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Gn(e,s.document),r=s.readTime?we(s.readTime):S.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ke([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Gn(e,s.document),r=s.removedTargetIds||[];n=new Ke([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new xu(i),o=s.targetId;n=new zo(o,r)}}return n}function zu(e,t){return{documents:[Es(e,t.path)]}}function Gu(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Es(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Es(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(h){if(h.length===0)return;const c=h.map(u=>function(l){if(l.op==="=="){if(Ui(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NAN"}};if(Vi(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ui(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NOT_NAN"}};if(Vi(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rt(l.field),op:Qu(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(h){if(h.length!==0)return h.map(c=>function(u){return{field:Rt(u.field),direction:Yu(u.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(h,c){return h.N||Xt(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),n}function Wu(e){let t=Hu(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){P(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=Yo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new oe(Ot(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,Xt(l)?null:l}(n.limit));let h=null;n.startAt&&(h=function(u){const l=!!u.before,g=u.values||[];return new sn(g,l)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const l=!u.before,g=u.values||[];return new sn(g,l)}(n.endAt)),vu(t,i,o,r,a,"F",h,c)}function Xu(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Yo(e){return e?e.unaryFilter!==void 0?[Zu(e)]:e.fieldFilter!==void 0?[Ju(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Yo(t)).reduce((t,n)=>t.concat(n)):I():[]}function Yu(e){return Vu[e]}function Qu(e){return Uu[e]}function Rt(e){return{fieldPath:e.canonicalString()}}function Ot(e){return it.fromServerFormat(e.fieldPath)}function Ju(e){return tt.create(Ot(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ot(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ot(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ot(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ot(e.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Qo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class el{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},h=>s(h))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Re(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Ru(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&vs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&vs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(S.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(n,s)=>Hi(n,s))&&pe(this.baseMutations,t.baseMutations,(n,s)=>Hi(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n,s,i,r=S.min(),o=S.min(),a=H.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new It(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.Jt=t}}function rl(e){const t=Wu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Iu(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.qe=new al}addToCollectionParentIndex(t,n){return this.qe.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getFieldIndex(t,n){return d.resolve(null)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class al{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new j(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new j(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new jt(0)}static gn(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==tl)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.changes=new Yt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,n,s){this.fs=t,this.$s=n,this.indexManager=s}Bs(t,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.fs.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Us(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}qs(t,n){return this.fs.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Us(n,s))}Ks(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(t,n.path):Tu(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new v(n)).next(s=>{let i=ws();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(t,n,s){const i=n.collectionGroup;let r=ws();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const h=function(c,u){return new bn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.Ws(t,h,s).next(c=>{c.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}Ws(t,n,s){let i;return this.fs.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.$s.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const h=a.key;let c=i.get(h);c==null&&(c=G.newInvalidDocument(h),i=i.insert(h,c)),vs(a,c,o.localWriteTime),c.isFoundDocument()||(i=i.remove(h))}}).next(()=>(i.forEach((r,o)=>{Zs(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=i}static Js(t,n){let s=N(),i=N();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ei(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{Ys(t){this.Xs=t}Ks(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(S.min())?this.Zs(t,n):this.Xs.qs(t,i).next(r=>{const o=this.ti(n,r);return(je(n)||rn(n))&&this.ei(n.limitType,o,i,s)?this.Zs(t,n):(Li()<=b.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.Xs.Ks(t,n,ru(s,-1)).next(a=>(o.forEach(h=>{a=a.insert(h.key,h)}),a)))})}ti(t,n){let s=new j(Mo(t));return n.forEach((i,r)=>{Zs(t,r)&&(s=s.add(r))}),s}ei(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,n){return Li()<=b.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Xs.Ks(t,n,qt.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n,s,i){this.persistence=t,this.ni=n,this.M=i,this.si=new K(A),this.ii=new Yt(r=>Qs(r),Js),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(s)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new cl(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function dl(e,t,n,s){return new ll(e,t,n,s)}async function Jo(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.$s.getAllMutationBatches(s).next(r=>(i=r,n.ui(t),n.$s.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let h=N();for(const c of i){o.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}return n.ai.qs(s,h).next(c=>({ci:c,removedBatchIds:o,addedBatchIds:a}))})})}function Zo(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ls.getLastRemoteSnapshotVersion(n))}function fl(e,t){const n=_(e),s=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];t.targetChanges.forEach((c,u)=>{const l=i.get(u);if(!l)return;a.push(n.ls.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.ls.addMatchingKeys(r,c.addedDocuments,u)));let g=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?g=g.withResumeToken(H.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,s)),i=i.insert(u,g),function(y,T,R){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(l,g,c)&&a.push(n.ls.updateTargetData(r,g))});let h=Dt();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(pl(r,o,t.documentUpdates).next(c=>{h=c})),!s.isEqual(S.min())){const c=n.ls.getLastRemoteSnapshotVersion(r).next(u=>n.ls.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.ai.Gs(r,h)).next(()=>h)}).then(r=>(n.si=i,r))}function pl(e,t,n){let s=N();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Dt();return n.forEach((o,a)=>{const h=i.get(o);a.isNoDocument()&&a.version.isEqual(S.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!h.isValidDocument()||a.version.compareTo(h.version)>0||a.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):m("LocalStore","Ignoring outdated watch update for ",o,". Current version:",h.version," Watch version:",a.version)}),r})}function gl(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.ls.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.ls.allocateTargetId(s).next(o=>(i=new It(t,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function Ts(e,t,n){const s=_(e),i=s.si.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Re(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(i.target)}function Zi(e,t,n){const s=_(e);let i=S.min(),r=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,h,c){const u=_(a),l=u.ii.get(c);return l!==void 0?d.resolve(u.si.get(l)):u.ls.getTargetData(h,c)}(s,o,kt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(h=>{r=h})}).next(()=>s.ni.Ks(o,t,n?i:S.min(),n?r:N())).next(a=>(ml(s,Su(t),a),{documents:a,hi:r})))}function ml(e,t,n){let s=S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.ri.set(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return d.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:we(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:rl(s.bundledQuery),readTime:we(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.overlays=new K(v.comparator),this.mi=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=zn(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,c=h.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&h.largestBatchId>s&&i.set(h.getKey(),h)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new K((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=zn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=zn(),h=r.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return d.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sl(n,s));let r=this.mi.get(n);r===void 0&&(r=N(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.gi=new j(F.yi),this.pi=new j(F.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new F(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new F(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new v(new x([])),s=new F(n,t),i=new F(n,t+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new v(new x([])),s=new F(n,t),i=new F(n,t+1);let r=N();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new F(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class F{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return v.comparator(t.key,n.key)||A(t.Vi,n.Vi)}static Ii(t,n){return A(t.Vi,n.Vi)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new j(F.yi)}checkEmpty(t){return d.resolve(this.$s.length===0)}addMutationBatch(t,n,s,i){const r=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new nl(r,n,s,i);this.$s.push(o);for(const a of i)this.Si=this.Si.add(new F(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return d.resolve(this.$s.length>r?this.$s[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(t){return d.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(A);return n.forEach(i=>{const r=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),d.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new F(new v(r),0);let a=new j(A);return this.Si.forEachWhile(h=>{const c=h.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(h.Vi)),!0)},o),d.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){P(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return d.forEach(n.mutations,i=>{const r=new F(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new F(n,0),i=this.Si.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.$s.length,d.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.$s.length===0?0:t-this.$s[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.ki=t,this.docs=new K(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=Dt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=Dt();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:h}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||au(ou(h),s)<=0||(i=i.insert(h.key,h.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Mi(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tl(this)}getSize(t){return d.resolve(this.size)}}class Tl extends hl{constructor(t){super(),this.qn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.qn.addEntry(t,i)):this.qn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.qn.getEntry(t,n)}getAllFromCache(t,n){return this.qn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.persistence=t,this.Oi=new Yt(n=>Qs(n),Js),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Fi=0,this.$i=new ni,this.targetCount=0,this.Bi=jt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),d.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new jt(n),this.highestTargetId=n),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.In(n),d.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.$i.Ti(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.$i.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.$i.Ri(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.$i.Pi(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.$i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,n){this.Li={},this.overlays={},this.ts=new Xs(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new Il(this),this.indexManager=new ol,this.fs=function(s){return new El(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new il(n),this.ds=new yl(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new vl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new wl(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new Cl(this.ts.next());return this.referenceDelegate.qi(),s(i).next(r=>this.referenceDelegate.Gi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ki(t,n){return d.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class Cl extends el{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.Qi=new ni,this.ji=null}static Wi(t){return new si(t)}get zi(){if(this.ji)return this.ji;throw I()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),d.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}qi(){this.ji=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.zi,s=>{const i=v.fromPath(s);return this.Hi(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(t){return 0}Hi(t,n){return d.or([()=>d.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ki(t,n)])}}class tr{constructor(){this.activeTargetIds=Ko()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _l{constructor(){this.Fr=new tr,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new tr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.ao(t,o,a,s).then(h=>(m("RestConnection","Received: ",h),h),h=>{throw Pi("RestConnection",`${t} failed with error: `,h,"url: ",o,"request:",s),h})}co(t,n,s,i,r){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Wt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=Al[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,i){return new Promise((r,o)=>{const a=new Hc;a.listenOnce($c.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hn.NO_ERROR:const c=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Hn.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Hn.HTTP_ERROR:const u=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const g=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(T)>=0?T:f.UNKNOWN}(l.status);o(new w(g,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const h=JSON.stringify(i);a.send(n,"POST",h,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Uc(),o=Bc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jc({})),this.uo(a.initMessageHeaders,n,s),Da()||Ra()||xa()||Oa()||La()||Na()||(a.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");m("Connection","Creating WebChannel: "+h,a);const c=r.createWebChannel(h,a);let u=!1,l=!1;const g=new kl({jr:T=>{l?m("Connection","Not sending because WebChannel is closed:",T):(u||(m("Connection","Opening WebChannel transport."),c.open(),u=!0),m("Connection","WebChannel sending:",T),c.send(T))},Wr:()=>c.close()}),y=(T,R,k)=>{T.listen(R,J=>{try{k(J)}catch(st){setTimeout(()=>{throw st},0)}})};return y(c,Ue.EventType.OPEN,()=>{l||m("Connection","WebChannel transport opened.")}),y(c,Ue.EventType.CLOSE,()=>{l||(l=!0,m("Connection","WebChannel transport closed"),g.eo())}),y(c,Ue.EventType.ERROR,T=>{l||(l=!0,Pi("Connection","WebChannel transport errored:",T),g.eo(new w(f.UNAVAILABLE,"The operation could not be completed")))}),y(c,Ue.EventType.MESSAGE,T=>{var R;if(!l){const k=T.data[0];P(!!k);const J=k,st=J.error||((R=J[0])===null||R===void 0?void 0:R.error);if(st){m("Connection","WebChannel received error:",st);const nt=st.status;let U=function(Zt){const Le=O[Zt];if(Le!==void 0)return Ho(Le)}(nt),yt=st.message;U===void 0&&(U=f.INTERNAL,yt="Unknown error status: "+nt+" with message "+st.message),l=!0,g.eo(new w(U,yt)),c.close()}else m("Connection","WebChannel received:",k),g.no(k)}}),y(o,qc.STAT_EVENT,T=>{T.stat===xi.PROXY?m("Connection","Detected buffering proxy"):T.stat===xi.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.Zr()},0),g}}function Wn(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return new Bu(e,!0)}class ea{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Jn=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n,s,i,r,o,a,h){this.Jn=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new ea(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Go(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.Jn.enqueueAndForget(()=>this.Po===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rl extends Nl{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Go(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Ku(this.M,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?we(r.readTime):S.min()}(t);return this.listener.Ko(n,s)}Qo(t){const n={};n.database=Ji(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=ps(a)?{documents:zu(i,a)}:{query:Gu(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=qu(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=$u(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Xu(this.M,t);s&&(n.labels=s),this.Oo(n)}jo(t){const n={};n.database=Ji(this.M),n.removeTarget=t,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.M=i,this.Zo=!1}tu(){if(this.Zo)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}co(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Ol{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.au(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(ft(n),this.su=!1):m("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{Oe(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const h=_(a);h.lu.add(4),await xe(h),h._u.set("Unknown"),h.lu.delete(4),await Nn(h)}(this))})}),this._u=new Ol(s,i)}}async function Nn(e){if(Oe(e))for(const t of e.fu)await t(!0)}async function xe(e){for(const t of e.fu)await t(!1)}function na(e,t){const n=_(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),oi(n)?ri(n):Qt(n).Co()&&ii(n,t))}function sa(e,t){const n=_(e),s=Qt(n);n.hu.delete(t),s.Co()&&ia(n,t),n.hu.size===0&&(s.Co()?s.ko():Oe(n)&&n._u.set("Unknown"))}function ii(e,t){e.wu.Z(t.targetId),Qt(e).Qo(t)}function ia(e,t){e.wu.Z(t),Qt(e).jo(t)}function ri(e){e.wu=new Fu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.hu.get(t)||null}),Qt(e).start(),e._u.iu()}function oi(e){return Oe(e)&&!Qt(e).Do()&&e.hu.size>0}function Oe(e){return _(e).lu.size===0}function ra(e){e.wu=void 0}async function Pl(e){e.hu.forEach((t,n)=>{ii(e,t)})}async function Ml(e,t){ra(e),oi(e)?(e._u.uu(t),ri(e)):e._u.set("Unknown")}async function Fl(e,t,n){if(e._u.set("Online"),t instanceof Go&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await nr(e,s)}else if(t instanceof Ke?e.wu.ut(t):t instanceof zo?e.wu._t(t):e.wu.ht(t),!n.isEqual(S.min()))try{const s=await Zo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.yt(r);return o.targetChanges.forEach((a,h)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.hu.get(h);c&&i.hu.set(h,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const h=i.hu.get(a);if(!h)return;i.hu.set(a,h.withResumeToken(H.EMPTY_BYTE_STRING,h.snapshotVersion)),ia(i,a);const c=new It(h.target,a,1,h.sequenceNumber);ii(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){m("RemoteStore","Failed to raise snapshot:",s),await nr(e,s)}}async function nr(e,t,n){if(!Re(t))throw t;e.lu.add(1),await xe(e),e._u.set("Offline"),n||(n=()=>Zo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Nn(e)})}async function sr(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=Oe(n);n.lu.add(3),await xe(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Nn(n)}async function Vl(e,t){const n=_(e);t?(n.lu.delete(2),await Nn(n)):t||(n.lu.add(2),await xe(n),n._u.set("Unknown"))}function Qt(e){return e.mu||(e.mu=function(t,n,s){const i=_(t);return i.tu(),new Rl(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{zr:Pl.bind(null,e),Jr:Ml.bind(null,e),Ko:Fl.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),oi(e)?ri(e):e._u.set("Unknown")):(await e.mu.stop(),ra(e))})),e.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ai(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(e,t){if(ft("AsyncQueue",`${t}: ${e}`),Re(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=ws(),this.sortedSet=new K(this.comparator)}static emptySet(t){return new Pt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Pt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.yu=new K(v.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ht{constructor(t,n,s,i,r,o,a,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Ht(t,n,Pt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&An(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.Iu=void 0,this.listeners=[]}}class Bl{constructor(){this.queries=new Yt(t=>Po(t),An),this.onlineState="Unknown",this.Tu=new Set}}async function $l(e,t){const n=_(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ul),i)try{r.Iu=await n.onListen(s)}catch(o){const a=oa(o,`Initialization of query '${gs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&hi(n)}async function ql(e,t){const n=_(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function jl(e,t){const n=_(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&hi(n)}function Hl(e,t,n){const s=_(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function hi(e){e.Tu.forEach(t=>{t.next()})}class Kl{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ht(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),n=!0):this.vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}Vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=Ht.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t){this.key=t}}class ha{constructor(t){this.key=t}}class zl{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=N(),this.mutatedKeys=N(),this.Lu=Mo(t),this.Uu=new Pt(this.Lu)}get qu(){return this.Fu}Gu(t,n){const s=n?n.Ku:new ir,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const h=je(this.query)&&i.size===this.query.limit?i.last():null,c=rn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const g=i.get(u),y=Zs(this.query,l)?l:null,T=!!g&&this.mutatedKeys.has(g.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;g&&y?g.data.isEqual(y.data)?T!==R&&(s.track({type:3,doc:y}),k=!0):this.Qu(g,y)||(s.track({type:2,doc:y}),k=!0,(h&&this.Lu(y,h)>0||c&&this.Lu(y,c)<0)&&(a=!0)):!g&&y?(s.track({type:0,doc:y}),k=!0):g&&!y&&(s.track({type:1,doc:g}),k=!0,(h||c)&&(a=!0)),k&&(y?(o=o.add(y),r=R?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),je(this.query)||rn(this.query))for(;o.size>this.query.limit;){const u=je(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Ku:s,ei:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Ku.pu();r.sort((c,u)=>function(l,g){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return y(l)-y(g)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,h=a!==this.$u;return this.$u=a,r.length!==0||h?{snapshot:new Ht(this.query,t.Uu,i,r,t.mutatedKeys,a===0,h,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new ir,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=N(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new ha(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new aa(s))}),n}Ju(t){this.Fu=t.hi,this.Bu=N();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Yu(){return Ht.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Gl{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Wl{constructor(t){this.key=t,this.Xu=!1}}class Xl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new Yt(a=>Po(a),An),this.ea=new Map,this.na=new Set,this.sa=new K(v.comparator),this.ia=new Map,this.ra=new ni,this.oa={},this.ua=new Map,this.aa=jt.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function Yl(e,t){const n=sd(e);let s,i;const r=n.ta.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await gl(n.localStore,kt(t));n.isPrimaryClient&&na(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ql(n,t,s,a==="current")}return i}async function Ql(e,t,n,s){e.ha=(u,l,g)=>async function(y,T,R,k){let J=T.view.Gu(R);J.ei&&(J=await Zi(y.localStore,T.query,!1).then(({documents:U})=>T.view.Gu(U,J)));const st=k&&k.targetChanges.get(T.targetId),nt=T.view.applyChanges(J,y.isPrimaryClient,st);return or(y,T.targetId,nt.zu),nt.snapshot}(e,u,l,g);const i=await Zi(e.localStore,t,!0),r=new zl(t,i.hi),o=r.Gu(i.documents),a=Ne.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),h=r.applyChanges(o,e.isPrimaryClient,a);or(e,n,h.zu);const c=new Gl(t,n,r);return e.ta.set(t,c),e.ea.has(n)?e.ea.get(n).push(t):e.ea.set(n,[t]),h.snapshot}async function Jl(e,t){const n=_(e),s=n.ta.get(t),i=n.ea.get(s.targetId);if(i.length>1)return n.ea.set(s.targetId,i.filter(r=>!An(r,t))),void n.ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ts(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sa(n.remoteStore,s.targetId),Is(n,s.targetId)}).catch(ti)):(Is(n,s.targetId),await Ts(n.localStore,s.targetId,!0))}async function ca(e,t){const n=_(e);try{const s=await fl(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ia.get(r);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?P(o.Xu):i.removedDocuments.size>0&&(P(o.Xu),o.Xu=!1))}),await la(n,s,t)}catch(s){await ti(s)}}function rr(e,t,n){const s=_(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ta.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=_(r);a.onlineState=o;let h=!1;a.queries.forEach((c,u)=>{for(const l of u.listeners)l.Eu(o)&&(h=!0)}),h&&hi(a)}(s.eventManager,t),i.length&&s.Zu.Ko(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Zl(e,t,n){const s=_(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ia.get(t),r=i&&i.key;if(r){let o=new K(v.comparator);o=o.insert(r,G.newNoDocument(r,S.min()));const a=N().add(r),h=new Dn(S.min(),new Map,new j(A),o,a);await ca(s,h),s.sa=s.sa.remove(r),s.ia.delete(t),ci(s)}else await Ts(s.localStore,t,!1).then(()=>Is(s,t,n)).catch(ti)}function Is(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ea.get(t))e.ta.delete(s),n&&e.Zu.la(s,n);e.ea.delete(t),e.isPrimaryClient&&e.ra.Ri(t).forEach(s=>{e.ra.containsKey(s)||ua(e,s)})}function ua(e,t){e.na.delete(t.path.canonicalString());const n=e.sa.get(t);n!==null&&(sa(e.remoteStore,n),e.sa=e.sa.remove(t),e.ia.delete(n),ci(e))}function or(e,t,n){for(const s of n)s instanceof aa?(e.ra.addReference(s.key,t),td(e,s)):s instanceof ha?(m("SyncEngine","Document no longer in limbo: "+s.key),e.ra.removeReference(s.key,t),e.ra.containsKey(s.key)||ua(e,s.key)):I()}function td(e,t){const n=t.key,s=n.path.canonicalString();e.sa.get(n)||e.na.has(s)||(m("SyncEngine","New document in limbo: "+n),e.na.add(s),ci(e))}function ci(e){for(;e.na.size>0&&e.sa.size<e.maxConcurrentLimboResolutions;){const t=e.na.values().next().value;e.na.delete(t);const n=new v(x.fromString(t)),s=e.aa.next();e.ia.set(s,new Wl(n)),e.sa=e.sa.insert(n,s),na(e.remoteStore,new It(kt(Lo(n.path)),s,2,Xs.A))}}async function la(e,t,n){const s=_(e),i=[],r=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,h)=>{o.push(s.ha(h,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(h.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=ei.Js(h.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Zu.Ko(i),await async function(a,h){const c=_(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>d.forEach(h,l=>d.forEach(l.zs,g=>c.persistence.referenceDelegate.addReference(u,l.targetId,g)).next(()=>d.forEach(l.Hs,g=>c.persistence.referenceDelegate.removeReference(u,l.targetId,g)))))}catch(u){if(!Re(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of h){const l=u.targetId;if(!u.fromCache){const g=c.si.get(l),y=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(y);c.si=c.si.insert(l,T)}}}(s.localStore,r))}async function ed(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await Jo(n.localStore,t);n.currentUser=t,function(i,r){i.ua.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await la(n,s.ci)}}function nd(e,t){const n=_(e),s=n.ia.get(t);if(s&&s.Xu)return N().add(s.key);{let i=N();const r=n.ea.get(t);if(!r)return i;for(const o of r){const a=n.ta.get(o);i=i.unionWith(a.view.qu)}return i}}function sd(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ca.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zl.bind(null,t),t.Zu.Ko=jl.bind(null,t.eventManager),t.Zu.la=Hl.bind(null,t.eventManager),t}class id{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=ta(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return dl(this.persistence,new ul,t.initialUser,this.M)}_a(t){return new Sl(si.Wi,this.M)}da(t){return new _l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ed.bind(null,this.syncEngine),await Vl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bl}createDatastore(t){const n=ta(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Dl(i));var i;return function(r,o,a,h){return new xl(r,o,a,h)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>rr(this.syncEngine,a,0),o=er.vt()?new er:new bl,new Ll(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,h,c){const u=new Xl(s,i,r,o,a,h);return c&&(u.ca=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=_(t);m("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await xe(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=Zc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=oa(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function hd(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Jo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function cd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ud(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>sr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>sr(t.remoteStore,r)),e.onlineComponents=t}async function ud(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await hd(e,new id)),e.offlineComponents}async function ld(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await cd(e,new rd)),e.onlineComponents}async function dd(e){const t=await ld(e),n=t.eventManager;return n.onListen=Yl.bind(null,t.syncEngine),n.onUnlisten=Jl.bind(null,t.syncEngine),n}function fd(e,t,n={}){const s=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,h){const c=new od({next:l=>{r.enqueueAndForget(()=>ql(i,u)),l.fromCache&&a.source==="server"?h.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(l)},error:l=>h.reject(l)}),u=new Kl(o,c,{includeMetadataChanges:!0,Du:!0});return $l(i,u)}(await dd(e),e.asyncQueue,t,n,s)),s.promise}const ar=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gd(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function hr(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function md(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function cr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=md(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ur({}),this._settingsFrozen=!1,t instanceof Bt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ur(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zc;switch(n.type){case"gapi":const s=n.client;return P(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Xc(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ar.get(t);n&&(m("ComponentProvider","Removing Datastore"),ar.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class Rn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Rn(this.firestore,t,this._query)}}class Mt extends Rn{constructor(t,n,s){super(t,n,Lo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new v(t))}withConverter(t){return new Mt(this.firestore,t,this._path)}}function yd(e,t,...n){if(e=Er(e),pd("collection","path",t),e instanceof da){const s=x.fromString(t,...n);return hr(s),new Mt(e,null,s)}{if(!(e instanceof Jt||e instanceof Mt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return hr(s),new Mt(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new ea(this,"async_queue_retry"),this.Ua=()=>{const n=Wn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Wn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const n=Wn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new Tt;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!Re(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const n=this.Na.then(()=>(this.$a=!0,t().catch(s=>{this.Fa=s,this.$a=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(t,n,s){this.qa(),this.La.indexOf(t)>-1&&(n=0);const i=ai.createAndSchedule(this,t,n,s,r=>this.Qa(r));return this.Oa.push(i),i}qa(){this.Fa&&I()}verifyOperationInProgress(){}async ja(){let t;do t=this.Na,await t;while(t!==this.Na)}Wa(t){for(const n of this.Oa)if(n.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const n=this.Oa.indexOf(t);this.Oa.splice(n,1)}}class fa extends da{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new vd,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pa(this),this._firestoreClient.terminate()}}function wd(e=Ar()){return _r(e,"firestore").getImmediate()}function Ed(e){return e._firestoreClient||pa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function pa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new su(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ad(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hn(H.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new hn(H.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return A(this._lat,t._lat)||A(this._long,t._long)}}const Id=new RegExp("[~\\*/\\[\\]]");function Sd(e,t,n){if(t.search(Id)>=0)throw lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ga(...t.split("."))._internalPath}catch{throw lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lr(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new w(f.INVALID_ARGUMENT,a+e+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ya("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cd extends ma{data(){return super.data()}}function ya(e,t){return typeof t=="string"?Sd(e,t):t instanceof ga?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _d extends ma{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ze(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ya("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ze extends _d{data(t={}){return super.data(t)}}class bd{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new $e(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ze(this._firestore,this._userDataWriter,s.key,s,new $e(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ze(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $e(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ze(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $e(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,c=-1;return o.type!==0&&(h=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Ad(o.type),doc:a,oldIndex:h,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ad(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e){if(rn(e)&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{convertValue(t,n="none"){switch(At(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return _n(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Td(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=xo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(me(t));default:return null}}convertTimestamp(t){const n=pt(t);return new ot(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);P(Qo(s));const i=new Bt(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class Nd extends Dd{constructor(t){super(),this.firestore=t}convertBytes(t){return new hn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function Rd(e){e=cr(e,Rn);const t=cr(e.firestore,fa),n=Ed(t),s=new Nd(t);return kd(e._query),fd(n,e._query).then(i=>new bd(t,s,e,i))}(function(e,t=!0){(function(n){Wt=n})(br),ae(new Ft("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new fa(i,new Gc(n.getProvider("auth-internal")),new Qc(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),dt(Oi,"3.4.7",e),dt(Oi,"3.4.7","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="firebasestorage.googleapis.com",xd="storageBucket",Od=2*60*1e3,Ld=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Ee{constructor(t,n){super(Xn(t),`Firebase Storage: ${n} (${Xn(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}_codeEquals(t){return Xn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Xn(e){return"storage/"+e}function Pd(){const e="An unknown error occurred, please check the error payload for server response.";return new ht("unknown",e)}function Md(){return new ht("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Fd(){return new ht("canceled","User canceled the upload/download.")}function Vd(e){return new ht("invalid-url","Invalid URL '"+e+"'.")}function Ud(e){return new ht("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function dr(e){return new ht("invalid-argument",e)}function wa(){return new ht("app-deleted","The Firebase app was deleted.")}function Bd(e){return new ht("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=rt.makeFromUrl(t,n)}catch{return new rt(t,"")}if(s.path==="")return s;throw Ud(t)}static makeFromUrl(t,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),h={bucket:1,path:3};function c(U){U.path_=decodeURIComponent(U.path)}const u="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${l}/${u}/b/${i}/o${g}`,"i"),T={bucket:1,path:3},R=n===va?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",J=new RegExp(`^https?://${R}/${i}/${k}`,"i"),nt=[{regex:a,indices:h,postModify:r},{regex:y,indices:T,postModify:c},{regex:J,indices:{bucket:1,path:2},postModify:c}];for(let U=0;U<nt.length;U++){const yt=nt[U],Zt=yt.regex.exec(t);if(Zt){const Le=Zt[yt.indices.bucket];let xn=Zt[yt.indices.path];xn||(xn=""),s=new rt(Le,xn),yt.postModify(s);break}}if(s==null)throw Vd(t);return s}}class $d{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(e,t,n){let s=1,i=null,r=null,o=!1,a=0;function h(){return a===2}let c=!1;function u(...k){c||(c=!0,t.apply(null,k))}function l(k){i=setTimeout(()=>{i=null,e(y,h())},k)}function g(){r&&clearTimeout(r)}function y(k,...J){if(c){g();return}if(k){g(),u.call(null,k,...J);return}if(h()||o){g(),u.call(null,k,...J);return}s<64&&(s*=2);let nt;a===1?(a=2,nt=0):nt=(s+Math.random())*1e3,l(nt)}let T=!1;function R(k){T||(T=!0,g(),!c&&(i!==null?(k||(a=2),clearTimeout(i),l(0)):k||(a=1)))}return l(0),r=setTimeout(()=>{o=!0,R(!0)},n),R}function jd(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(e){return e!==void 0}function fr(e,t,n,s){if(s<t)throw dr(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw dr(`Invalid value for '${e}'. Expected ${n} or less.`)}function Kd(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const i=t(s)+"="+t(e[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(cn||(cn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n,s,i,r,o,a,h,c,u,l){this.url_=t,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=h,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new qe(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const h=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===cn.NO_ERROR,h=r.getStatus();if(!a||this.isRetryStatusCode_(h)){const u=r.getErrorCode()===cn.ABORT;s(!1,new qe(!1,null,u));return}const c=this.successCodes_.indexOf(h)!==-1;s(!0,new qe(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(a,a.getResponse());Hd(h)?r(h):r()}catch(h){o(h)}else if(a!==null){const h=Pd();h.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,h)):o(h)}else if(i.canceled){const h=this.appDelete_?wa():Fd();o(h)}else{const h=Md();o(h)}};this.canceled_?n(!1,new qe(!1,null,!0)):this.backoffId_=qd(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&jd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=this.additionalRetryCodes_.indexOf(t)!==-1;return n||i||r}}class qe{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Gd(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Wd(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Xd(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Yd(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Qd(e,t,n,s,i,r){const o=Kd(e.urlParams),a=e.url+o,h=Object.assign({},e.headers);return Xd(h,t),Gd(h,n),Wd(h,r),Yd(h,s),new zd(a,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Zd(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n){this._service=t,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new un(t,n)}get root(){const t=new rt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zd(this._location.path)}get storage(){return this._service}get parent(){const t=Jd(this._location.path);if(t===null)return null;const n=new rt(this._location.bucket,t);return new un(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Bd(t)}}function pr(e,t){const n=t==null?void 0:t[xd];return n==null?null:rt.makeFromBucketSpec(n,e)}class tf{constructor(t,n,s,i,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=va,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Od,this._maxUploadRetryTime=Ld,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=pr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,t):this._bucket=pr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){fr("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){fr("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new un(this,t)}_makeRequest(t,n,s,i){if(this._deleted)return new $d(wa());{const r=Qd(t,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,i).getPromise()}}const gr="@firebase/storage",mr="0.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="storage";function ef(e=Ar(),t){return e=Er(e),_r(e,Ea).getImmediate({identifier:t})}function nf(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new tf(n,s,i,t,br)}function sf(){ae(new Ft(Ea,nf,"PUBLIC").setMultipleInstances(!0)),dt(gr,mr,""),dt(gr,mr,"esm2017")}sf();const rf={apiKey:"AIzaSyBoG8-bccGes7A3EcYywcmloCa3eXd_OV0",authDomain:"volakadu-website.firebaseapp.com",projectId:"volakadu-website",storageBucket:"volakadu-website.appspot.com",messagingSenderId:"858542397956",appId:"1:858542397956:web:c996397e7b55764de47351"},Ta=bh(rf),of=wd(Ta);ef(Ta);const af={async setup(){const e=Sa(!1),t=await Rd(yd(of,"admissions"));let n;return t.docs.forEach(s=>{n=s.data().is_open}),{isOpen:n,notifHidden:e}}},hf={class:"container mx-auto text-center"},cf={class:"p-4"},uf={key:0},lf={key:1},df=Ca('<header class="has-text-centered is-size-1">Admissions</header><section class="hero"><div class="hero-body"><p class="title text-blue-600 hover:cursor-pointer hover:underline"> School Visit </p><p class="subtitle ml-3"> Parents are welcome to visit school with or without your child until 10:00-4:30 </p></div></section><section class="hero"><div class="hero-body"><p class="title text-blue-600 hover:cursor-pointer hover:underline"> Admissions During Academic Years </p><p class="subtitle ml-3"> Admissions can be accepted admidst academic years on the availibility on vacancies </p></div></section>',3);function ff(e,t,n,s,i,r){return On(),Ln("div",hf,[Pe("div",{class:ui(s.notifHidden?"is-hidden":"is-active")},[Pe("div",cf,[Pe("div",{class:ui(s.isOpen?"notification is-primary":"notification is-danger")},[Pe("button",{class:"delete",onClick:t[0]||(t[0]=o=>s.notifHidden=!s.notifHidden)}),s.isOpen==!0?(On(),Ln("div",uf,"Admissions are currently active")):(On(),Ln("div",lf,"Admissions are currently not accepted"))],2)])],2),df])}var mf=Ia(af,[["render",ff]]);export{mf as default};
