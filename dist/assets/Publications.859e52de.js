import{d as Jo,w as Zo,r as ta,o as ea,c as na}from"./index.9c785e6a.js";/**
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
 */const tr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sa=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,h=i+2<e.length,u=h?e[i+2]:0,c=r>>2,l=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;h||(v=64,o||(p=64)),s.push(n[c],n[l],n[p],n[v])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sa(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw Error();const p=r<<2|a>>4;if(s.push(p),u!==64){const v=a<<4&240|u>>2;if(s.push(v),l!==64){const S=u<<6&192|l;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ra=function(e){const t=tr(e);return ia.encodeByteArray(t,!0)},er=function(e){return ra(e).replace(/\./g,"")};/**
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
 */class oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function tn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function ha(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ca(){return tn().indexOf("Electron/")>=0}function la(){const e=tn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function da(){return tn().indexOf("MSAppHost/")>=0}function fa(){return typeof indexedDB=="object"}function ga(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const pa="FirebaseError";class en extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pa,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?ma(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,s)}}function ma(e,t){return e.replace(ya,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const ya=/\{\$([^}]+)}/g;function Vn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Zs(r)&&Zs(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Zs(e){return e!==null&&typeof e=="object"}/**
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
 */function va(e){return e&&e._delegate?e._delegate:e}/**
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
 */function Qt(e,t){return new Promise((n,s)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var r;s(`${t}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class ti{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new sr(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new ir(this._db.createObjectStore(t,n))}close(){this._db.close()}}class sr{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new ir(this._transaction.objectStore(t))}}class ir{constructor(t){this._store=t}index(t){return new ei(this._store.index(t))}createIndex(t,n,s){return new ei(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return Qt(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return Qt(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return Qt(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return Qt(t,"Error clearing IndexedDB object store")}}class ei{constructor(t){this._index=t}get(t){const n=this._index.get(t);return Qt(n,"Error reading from IndexedDB")}}function wa(e,t,n){return new Promise((s,i)=>{try{const r=indexedDB.open(e,t);r.onsuccess=o=>{s(new ti(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new ti(r.result),o.oldVersion,o.newVersion,new sr(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class ne{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const dt="[DEFAULT]";/**
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
 */class Ea{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new oa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ia(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dt){return this.instances.has(t)}getOptions(t=dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ta(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=dt){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ta(e){return e===dt?void 0:e}function Ia(e){return e.instantiationMode==="EAGER"}/**
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
 */class Sa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ea(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const Ca={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Aa=b.INFO,ba={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Da=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=ba[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rr{constructor(t){this.name=t,this._logLevel=Aa,this._logHandler=Da,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ca[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}/**
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
 */class _a{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Na(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Na(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fn="@firebase/app",ni="0.7.20";/**
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
 */const cs=new rr("@firebase/app"),ka="@firebase/app-compat",Ra="@firebase/analytics-compat",xa="@firebase/analytics",La="@firebase/app-check-compat",Oa="@firebase/app-check",Ma="@firebase/auth",Pa="@firebase/auth-compat",Va="@firebase/database",Fa="@firebase/database-compat",Ua="@firebase/functions",Ba="@firebase/functions-compat",$a="@firebase/installations",qa="@firebase/installations-compat",ja="@firebase/messaging",Ka="@firebase/messaging-compat",Ha="@firebase/performance",za="@firebase/performance-compat",Ga="@firebase/remote-config",Wa="@firebase/remote-config-compat",Xa="@firebase/storage",Qa="@firebase/storage-compat",Ya="@firebase/firestore",Ja="@firebase/firestore-compat",Za="firebase",th="9.6.10";/**
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
 */const or="[DEFAULT]",eh={[Fn]:"fire-core",[ka]:"fire-core-compat",[xa]:"fire-analytics",[Ra]:"fire-analytics-compat",[Oa]:"fire-app-check",[La]:"fire-app-check-compat",[Ma]:"fire-auth",[Pa]:"fire-auth-compat",[Va]:"fire-rtdb",[Fa]:"fire-rtdb-compat",[Ua]:"fire-fn",[Ba]:"fire-fn-compat",[$a]:"fire-iid",[qa]:"fire-iid-compat",[ja]:"fire-fcm",[Ka]:"fire-fcm-compat",[Ha]:"fire-perf",[za]:"fire-perf-compat",[Ga]:"fire-rc",[Wa]:"fire-rc-compat",[Xa]:"fire-gcs",[Qa]:"fire-gcs-compat",[Ya]:"fire-fst",[Ja]:"fire-fst-compat","fire-js":"fire-js",[Za]:"fire-js-all"};/**
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
 */const Fe=new Map,Un=new Map;function nh(e,t){try{e.container.addComponent(t)}catch(n){cs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ue(e){const t=e.name;if(Un.has(t))return cs.debug(`There were multiple attempts to register component ${t}.`),!1;Un.set(t,e);for(const n of Fe.values())nh(n,e);return!0}function sh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ih={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},yt=new nr("app","Firebase",ih);/**
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
 */class rh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const oh=th;function ah(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:or,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});const i=Fe.get(s);if(i){if(Vn(e,i.options)&&Vn(n,i.config))return i;throw yt.create("duplicate-app",{appName:s})}const r=new Sa(s);for(const a of Un.values())r.addComponent(a);const o=new rh(e,n,r);return Fe.set(s,o),o}function hh(e=or){const t=Fe.get(e);if(!t)throw yt.create("no-app",{appName:e});return t}function _t(e,t,n){var s;let i=(s=eh[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cs.warn(a.join(" "));return}Ue(new ne(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const uh="firebase-heartbeat-database",ch=1,se="firebase-heartbeat-store";let Sn=null;function ar(){return Sn||(Sn=wa(uh,ch,(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}).catch(e=>{throw yt.create("storage-open",{originalErrorMessage:e.message})})),Sn}async function lh(e){try{return(await ar()).transaction(se).objectStore(se).get(hr(e))}catch(t){throw yt.create("storage-get",{originalErrorMessage:t.message})}}async function si(e,t){try{const s=(await ar()).transaction(se,"readwrite");return await s.objectStore(se).put(t,hr(e)),s.complete}catch(n){throw yt.create("storage-set",{originalErrorMessage:n.message})}}function hr(e){return`${e.name}!${e.options.appId}`}/**
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
 */const dh=1024,fh=30*24*60*60*1e3;class gh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ii();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ii(),{heartbeatsToSend:n,unsentEntries:s}=ph(this._heartbeatsCache.heartbeats),i=er(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ii(){return new Date().toISOString().substring(0,10)}function ph(e,t=dh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ri(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ri(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fa()?ga().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return si(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return si(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ri(e){return er(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function yh(e){Ue(new ne("platform-logger",t=>new _a(t),"PRIVATE")),Ue(new ne("heartbeat",t=>new gh(t),"PRIVATE")),_t(Fn,ni,e),_t(Fn,ni,"esm2017"),_t("fire-js","")}yh("");var vh="firebase",wh="9.6.10";/**
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
 */_t(vh,wh,"app");var Eh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,ls=ls||{},E=Eh||self;function Be(){}function Bn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function pe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Th(e){return Object.prototype.hasOwnProperty.call(e,Cn)&&e[Cn]||(e[Cn]=++Ih)}var Cn="closure_uid_"+(1e9*Math.random()>>>0),Ih=0;function Sh(e,t,n){return e.call.apply(e.bind,arguments)}function Ch(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function U(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?U=Sh:U=Ch,U.apply(null,arguments)}function _e(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function ct(){this.s=this.s,this.o=this.o}var Ah=0,bh={};ct.prototype.s=!1;ct.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ah!=0)){var e=Th(this);delete bh[e]}};ct.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ur=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},cr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Dh(e){t:{var t=vu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function oi(e){return Array.prototype.concat.apply([],arguments)}function ds(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function $e(e){return/^[\s\xa0]*$/.test(e)}var ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function An(e,t){return e<t?-1:e>t?1:0}var X;t:{var hi=E.navigator;if(hi){var ui=hi.userAgent;if(ui){X=ui;break t}}X=""}function fs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function lr(e){const t={};for(const n in e)t[n]=e[n];return t}var ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ci.length;r++)n=ci[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function gs(e){return gs[" "](e),e}gs[" "]=Be;function _h(e){var t=Rh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Nh=W(X,"Opera"),xt=W(X,"Trident")||W(X,"MSIE"),fr=W(X,"Edge"),$n=fr||xt,gr=W(X,"Gecko")&&!(W(X.toLowerCase(),"webkit")&&!W(X,"Edge"))&&!(W(X,"Trident")||W(X,"MSIE"))&&!W(X,"Edge"),kh=W(X.toLowerCase(),"webkit")&&!W(X,"Edge");function pr(){var e=E.document;return e?e.documentMode:void 0}var qe;t:{var bn="",Dn=function(){var e=X;if(gr)return/rv:([^\);]+)(\)|;)/.exec(e);if(fr)return/Edge\/([\d\.]+)/.exec(e);if(xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kh)return/WebKit\/(\S+)/.exec(e);if(Nh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Dn&&(bn=Dn?Dn[1]:""),xt){var _n=pr();if(_n!=null&&_n>parseFloat(bn)){qe=String(_n);break t}}qe=bn}var Rh={};function xh(){return _h(function(){let e=0;const t=ai(String(qe)).split("."),n=ai("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=An(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||An(i[2].length==0,r[2].length==0)||An(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var qn;if(E.document&&xt){var li=pr();qn=li||parseInt(qe,10)||void 0}else qn=void 0;var Lh=qn,Oh=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",Be,t),E.removeEventListener("test",Be,t)}catch{}return e}();function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};function ie(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(gr){t:{try{gs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Mh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}K(ie,z);var Mh={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var me="closure_listenable_"+(1e6*Math.random()|0),Ph=0;function Vh(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ph,this.ca=this.fa=!1}function nn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function sn(e){this.src=e,this.g={},this.h=0}sn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Kn(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Vh(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function jn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=ur(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(nn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Kn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var ps="closure_lm_"+(1e6*Math.random()|0),Nn={};function mr(e,t,n,s,i){if(s&&s.once)return vr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)mr(e,t[r],n,s,i);return null}return n=vs(n),e&&e[me]?e.N(t,n,pe(s)?!!s.capture:!!s,i):yr(e,t,n,!1,s,i)}function yr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=pe(i)?!!i.capture:!!i,a=ys(e);if(a||(e[ps]=a=new sn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Fh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Oh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Er(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fh(){function e(n){return t.call(e.src,e.listener,n)}var t=Uh;return e}function vr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)vr(e,t[r],n,s,i);return null}return n=vs(n),e&&e[me]?e.O(t,n,pe(s)?!!s.capture:!!s,i):yr(e,t,n,!0,s,i)}function wr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)wr(e,t[r],n,s,i);else s=pe(s)?!!s.capture:!!s,n=vs(n),e&&e[me]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Kn(r,n,s,i),-1<n&&(nn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ys(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Kn(t,n,s,i)),(n=-1<e?t[e]:null)&&ms(n))}function ms(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[me])jn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Er(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ys(t))?(jn(n,e),n.h==0&&(n.src=null,t[ps]=null)):nn(e)}}}function Er(e){return e in Nn?Nn[e]:Nn[e]="on"+e}function Uh(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&ms(e),e=n.call(s,t)}return e}function ys(e){return e=e[ps],e instanceof sn?e:null}var kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function vs(e){return typeof e=="function"?e:(e[kn]||(e[kn]=function(t){return e.handleEvent(t)}),e[kn])}function V(){ct.call(this),this.i=new sn(this),this.P=this,this.I=null}K(V,ct);V.prototype[me]=!0;V.prototype.removeEventListener=function(e,t,n,s){wr(this,e,t,n,s)};function B(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),dr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ne(o,s,!0,t)&&i}if(o=t.g=e,i=Ne(o,s,!0,t)&&i,i=Ne(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ne(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)nn(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ne(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&jn(e.i,o),i=a.call(h,s)!==!1&&i}}return i&&!s.defaultPrevented}var ws=E.JSON.stringify;function Bh(){var e=Ir;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $h{constructor(){this.h=this.g=null}add(t,n){const s=Tr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Tr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new qh,e=>e.reset());class qh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jh(e){E.setTimeout(()=>{throw e},0)}function Es(e,t){Hn||Kh(),zn||(Hn(),zn=!0),Ir.add(e,t)}var Hn;function Kh(){var e=E.Promise.resolve(void 0);Hn=function(){e.then(Hh)}}var zn=!1,Ir=new $h;function Hh(){for(var e;e=Bh();){try{e.h.call(e.g)}catch(n){jh(n)}var t=Tr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}zn=!1}function rn(e,t){V.call(this),this.h=e||1,this.g=t||E,this.j=U(this.kb,this),this.l=Date.now()}K(rn,V);g=rn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),B(this,"tick"),this.da&&(Ts(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ts(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){rn.Z.M.call(this),Ts(this),delete this.g};function Is(e,t,n){if(typeof e=="function")n&&(e=U(e,n));else if(e&&typeof e.handleEvent=="function")e=U(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Sr(e){e.g=Is(()=>{e.g=null,e.i&&(e.i=!1,Sr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zh extends ct{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Sr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(e){ct.call(this),this.h=e,this.g={}}K(re,ct);var di=[];function Cr(e,t,n,s){Array.isArray(n)||(n&&(di[0]=n.toString()),n=di);for(var i=0;i<n.length;i++){var r=mr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ar(e){fs(e.g,function(t,n){this.g.hasOwnProperty(n)&&ms(t)},e),e.g={}}re.prototype.M=function(){re.Z.M.call(this),Ar(this)};re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function on(){this.g=!0}on.prototype.Aa=function(){this.g=!1};function Gh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Wh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function bt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qh(e,n)+(s?" "+s:"")})}function Xh(e,t){e.info(function(){return"TIMEOUT: "+t})}on.prototype.info=function(){};function Qh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ws(n)}catch{return t}}var Ct={},fi=null;function an(){return fi=fi||new V}Ct.Ma="serverreachability";function br(e){z.call(this,Ct.Ma,e)}K(br,z);function oe(e){const t=an();B(t,new br(t,e))}Ct.STAT_EVENT="statevent";function Dr(e,t){z.call(this,Ct.STAT_EVENT,e),this.stat=t}K(Dr,z);function Q(e){const t=an();B(t,new Dr(t,e))}Ct.Na="timingevent";function _r(e,t){z.call(this,Ct.Na,e),this.size=t}K(_r,z);function ye(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var hn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Nr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ss(){}Ss.prototype.h=null;function gi(e){return e.h||(e.h=e.i())}function kr(){}var ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Cs(){z.call(this,"d")}K(Cs,z);function As(){z.call(this,"c")}K(As,z);var Gn;function un(){}K(un,Ss);un.prototype.g=function(){return new XMLHttpRequest};un.prototype.i=function(){return{}};Gn=new un;function we(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new re(this),this.P=Yh,e=$n?125:void 0,this.W=new rn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Rr}function Rr(){this.i=null,this.g="",this.h=!1}var Yh=45e3,Wn={},je={};g=we.prototype;g.setTimeout=function(e){this.P=e};function Xn(e,t,n){e.K=1,e.v=ln(at(t)),e.s=n,e.U=!0,xr(e,null)}function xr(e,t){e.F=Date.now(),Ee(e),e.A=at(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Ur(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Rr,e.g=ro(e.l,n?t:null,!e.s),0<e.O&&(e.L=new zh(U(e.Ia,e,e.g),e.O)),Cr(e.V,e.g,"readystatechange",e.gb),t=e.H?lr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),oe(1),Gh(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const c=ot(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||$n||this.g&&(this.h.h||this.g.ga()||vi(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?oe(3):oe(2)),cn(this);var n=this.g.ba();this.N=n;e:if(Lr(this)){var s=vi(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ft(this),Jt(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Wh(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$e(a)){var u=a;break e}}u=null}if(n=u)bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qn(this,n);else{this.i=!1,this.o=3,Q(12),ft(this),Jt(this);break t}}this.U?(Or(this,c,o),$n&&this.i&&c==3&&(Cr(this.V,this.W,"tick",this.fb),this.W.start())):(bt(this.j,this.m,o,null),Qn(this,o)),c==4&&ft(this),this.i&&!this.I&&(c==4?eo(this.l,this):(this.i=!1,Ee(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),ft(this),Jt(this)}}}catch{}finally{}};function Lr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Or(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Jh(e,n),i==je){t==4&&(e.o=4,Q(14),s=!1),bt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Wn){e.o=4,Q(15),bt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else bt(e.j,e.m,i,null),Qn(e,i);Lr(e)&&i!=je&&i!=Wn&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Os(t),t.L=!0,Q(11))):(bt(e.j,e.m,n,"[Invalid Chunked Response]"),ft(e),Jt(e))}g.fb=function(){if(this.g){var e=ot(this.g),t=this.g.ga();this.C<t.length&&(cn(this),Or(this,e,t),this.i&&e!=4&&Ee(this))}};function Jh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?je:(n=Number(t.substring(n,s)),isNaN(n)?Wn:(s+=1,s+n>t.length?je:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,ft(this)};function Ee(e){e.Y=Date.now()+e.P,Mr(e,e.P)}function Mr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ye(U(e.eb,e),t)}function cn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Xh(this.j,this.A),this.K!=2&&(oe(3),Q(17)),ft(this),this.o=2,Jt(this)):Mr(this,this.Y-e)};function Jt(e){e.l.G==0||e.I||eo(e.l,e)}function ft(e){cn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ts(e.W),Ar(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Qn(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Yn(n.i,e))){if(n.I=e.N,!e.J&&Yn(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ge(n),gn(n);else break t;Ls(n),Q(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ye(U(n.ab,n),6e3));if(1>=qr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else gt(n,11)}else if((e.J||n.g==e)&&Ge(n),!$e(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const v=e.g;if(v){const S=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var r=s.i;!r.g&&(W(S,"spdy")||W(S,"quic")||W(S,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(_s(r,r.h),r.h=null))}if(s.D){const M=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;M&&(s.sa=M,_(s.F,s.D,M))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=io(s,s.H?s.la:null,s.W),o.J){jr(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(cn(a),Ee(a)),s.g=o}else Zr(s);0<n.l.length&&pn(n)}else u[0]!="stop"&&u[0]!="close"||gt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gt(n,7):xs(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}oe(4)}catch{}}function Zh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Bn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function bs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Bn(e)||typeof e=="string")cr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Bn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Zh(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Ut(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Ut)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Ut.prototype;g.R=function(){Ds(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Ds(this),this.g.concat()};function Ds(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];vt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],vt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return vt(this.h,e)?this.h[e]:t};g.set=function(e,t){vt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function vt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Pr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof wt){this.g=t!==void 0?t:e.g,Ke(this,e.j),this.s=e.s,He(this,e.i),ze(this,e.m),this.l=e.l,t=e.h;var n=new ae;n.i=t.i,t.g&&(n.g=new Ut(t.g),n.h=t.h),pi(this,n),this.o=e.o}else e&&(n=String(e).match(Pr))?(this.g=!!t,Ke(this,n[1]||"",!0),this.s=Zt(n[2]||""),He(this,n[3]||"",!0),ze(this,n[4]),this.l=Zt(n[5]||"",!0),pi(this,n[6]||"",!0),this.o=Zt(n[7]||"")):(this.g=!!t,this.h=new ae(null,this.g))}wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,mi,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Yt(t,mi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Yt(n,n.charAt(0)=="/"?ru:iu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,au)),e.join("")};function at(e){return new wt(e)}function Ke(e,t,n){e.j=n?Zt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function He(e,t,n){e.i=n?Zt(t,!0):t}function ze(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pi(e,t,n){t instanceof ae?(e.h=t,hu(e.h,e.g)):(n||(t=Yt(t,ou)),e.h=new ae(t,e.g))}function _(e,t,n){e.h.set(t,n)}function ln(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function eu(e){return e instanceof wt?at(e):new wt(e,void 0)}function nu(e,t,n,s){var i=new wt(null,void 0);return e&&Ke(i,e),t&&He(i,t),n&&ze(i,n),s&&(i.l=s),i}function Zt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,su),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function su(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var mi=/[#\/\?@]/g,iu=/[#\?:]/g,ru=/[#\?]/g,ou=/[#\?@]/g,au=/#/g;function ae(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function lt(e){e.g||(e.g=new Ut,e.h=0,e.i&&tu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ae.prototype;g.add=function(e,t){lt(this),this.i=null,e=Bt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Vr(e,t){lt(e),t=Bt(e,t),vt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,vt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ds(e)))}function Fr(e,t){return lt(e),t=Bt(e,t),vt(e.g.h,t)}g.forEach=function(e,t){lt(this),this.g.forEach(function(n,s){cr(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){lt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){lt(this);var t=[];if(typeof e=="string")Fr(this,e)&&(t=oi(t,this.g.get(Bt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=oi(t,e[n])}return t};g.set=function(e,t){return lt(this),this.i=null,e=Bt(this,e),Fr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Ur(e,t,n){Vr(e,t),0<n.length&&(e.i=null,e.g.set(Bt(e,t),ds(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Bt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hu(e,t){t&&!e.j&&(lt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Vr(this,s),Ur(this,i,n))},e)),e.j=t}var uu=class{constructor(e,t){this.h=e,this.g=t}};function Br(e){this.l=e||cu,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cu=10;function $r(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function qr(e){return e.h?1:e.g?e.g.size:0}function Yn(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function _s(e,t){e.g?e.g.add(t):e.h=t}function jr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Br.prototype.cancel=function(){if(this.i=Kr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Kr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ds(e.i)}function Ns(){}Ns.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Ns.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function lu(){this.g=new Ns}function du(e,t,n){const s=n||"";try{bs(e,function(i,r){let o=i;pe(i)&&(o=ws(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function fu(e,t){const n=new on;if(E.Image){const s=new Image;s.onload=_e(ke,n,s,"TestLoadImage: loaded",!0,t),s.onerror=_e(ke,n,s,"TestLoadImage: error",!1,t),s.onabort=_e(ke,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=_e(ke,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ke(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Te(e){this.l=e.$b||null,this.j=e.ib||!1}K(Te,Ss);Te.prototype.g=function(){return new dn(this.l,this.j)};Te.prototype.i=function(e){return function(){return e}}({});function dn(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(dn,V);var ks=0;g=dn.prototype;g.open=function(e,t){if(this.readyState!=ks)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,he(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ie(this)),this.readyState=ks};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,he(this)),this.g&&(this.readyState=3,he(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Hr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ie(this):he(this),this.readyState==3&&Hr(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Ie(this))};g.Ta=function(e){this.g&&(this.response=e,Ie(this))};g.ha=function(){this.g&&Ie(this)};function Ie(e){e.readyState=4,e.l=null,e.j=null,e.A=null,he(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function he(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var gu=E.JSON.parse;function O(e){V.call(this),this.headers=new Ut,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zr,this.K=this.L=!1}K(O,V);var zr="",pu=/^https?$/i,mu=["POST","PUT"];g=O.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gn.g(),this.C=this.u?gi(this.u):gi(Gn),this.g.onreadystatechange=U(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){yi(this,r);return}e=n||"";const i=new Ut(this.headers);s&&bs(s,function(r,o){i.set(o,r)}),s=Dh(i.T()),n=E.FormData&&e instanceof E.FormData,!(0<=ur(mu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xr(this),0<this.B&&((this.K=yu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=U(this.pa,this)):this.A=Is(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){yi(this,r)}};function yu(e){return xt&&xh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function vu(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof ls!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function yi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gr(e),fn(e)}function Gr(e){e.D||(e.D=!0,B(e,"complete"),B(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,B(this,"complete"),B(this,"abort"),fn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fn(this,!0)),O.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Wr(this):this.cb())};g.cb=function(){Wr(this)};function Wr(e){if(e.h&&typeof ls!="undefined"&&(!e.C[1]||ot(e)!=4||e.ba()!=2)){if(e.v&&ot(e)==4)Is(e.Fa,0,e);else if(B(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Pr)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!pu.test(i?i.toLowerCase():"")}n=s}if(n)B(e,"complete"),B(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Gr(e)}}finally{fn(e)}}}}function fn(e,t){if(e.g){Xr(e);const n=e.g,s=e.C[0]?Be:null;e.g=null,e.C=null,t||B(e,"ready");try{n.onreadystatechange=s}catch{}}}function Xr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),gu(t)}};function vi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case zr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function wu(e){let t="";return fs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Rs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=wu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function Xt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Qr(e){this.za=0,this.l=[],this.h=new on,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xt("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xt("baseRetryDelayMs",5e3,e),this.$a=Xt("retryDelaySeedMs",1e4,e),this.Ya=Xt("forwardChannelMaxRetries",2,e),this.ra=Xt("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Br(e&&e.concurrentRequestLimit),this.Ca=new lu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Qr.prototype;g.ma=8;g.G=1;function xs(e){if(Yr(e),e.G==3){var t=e.V++,n=at(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Se(e,n),t=new we(e,e.h,t,void 0),t.K=2,t.v=ln(at(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=ro(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ee(t)}so(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function gn(e){e.g&&(Os(e),e.g.cancel(),e.g=null)}function Yr(e){gn(e),e.u&&(E.clearTimeout(e.u),e.u=null),Ge(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Rn(e,t){e.l.push(new uu(e.Za++,t)),e.G==3&&pn(e)}function pn(e){$r(e.i)||e.m||(e.m=!0,Es(e.Ha,e),e.C=0)}function Eu(e,t){return qr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=ye(U(e.Ha,e,t),no(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new we(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=lr(r),dr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Jr(this,i,t),n=at(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Se(this,n),this.o&&r&&Rs(n,this.o,r),_s(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),i.$=!0,Xn(i,n,null)):Xn(i,n,t),this.G=2}}else this.G==3&&(e?wi(this,e):this.l.length==0||$r(this.i)||wi(this))};function wi(e,t){var n;t?n=t.m:n=e.V++;const s=at(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),Se(e,s),e.o&&e.s&&Rs(s,e.o,e.s),n=new we(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Jr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),_s(e.i,n),Xn(n,s,t)}function Se(e,t){e.j&&bs({},function(n,s){_(t,s,n)})}function Jr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?U(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let u=i[h].h;const c=i[h].g;if(u-=r,0>u)r=Math.max(0,i[h].h-100),a=!1;else try{du(c,o,"req"+u+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Zr(e){e.g||e.u||(e.Y=1,Es(e.Ga,e),e.A=0)}function Ls(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=ye(U(e.Ga,e),no(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,to(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ye(U(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Q(10),gn(this),to(this))};function Os(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function to(e){e.g=new we(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=at(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),Se(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&Rs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ln(at(t)),n.s=null,n.U=!0,xr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,gn(this),Ls(this),Q(19))};function Ge(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function eo(e,t){var n=null;if(e.g==t){Ge(e),Os(e),e.g=null;var s=2}else if(Yn(e.i,t))n=t.D,jr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=an(),B(s,new _r(s,n,t,i)),pn(e)}else Zr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Eu(e,t)||s==2&&Ls(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gt(e,5);break;case 4:gt(e,10);break;case 3:gt(e,6);break;default:gt(e,2)}}}function no(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=U(e.jb,e);n||(n=new wt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Ke(n,"https"),ln(n)),fu(n.toString(),s)}else Q(2);e.G=0,e.j&&e.j.va(t),so(e),Yr(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Q(2)):(this.h.info("Failed to ping google.com"),Q(1))};function so(e){e.G=0,e.I=-1,e.j&&((Kr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ds(e.l),e.l.length=0),e.j.ua())}function io(e,t,n){let s=eu(n);if(s.i!="")t&&He(s,t+"."+s.i),ze(s,s.m);else{const i=E.location;s=nu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&fs(e.aa,function(i,r){_(s,r,i)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),Se(e,s),s}function ro(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new O(new Te({ib:!0})):new O(e.qa),t.L=e.H,t}function oo(){}g=oo.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function We(){if(xt&&!(10<=Number(Lh)))throw Error("Environmental error: no available transport.")}We.prototype.g=function(e,t){return new Z(e,t)};function Z(e,t){V.call(this),this.g=new Qr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!$e(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$e(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $t(this)}K(Z,V);Z.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Es(U(e.hb,e,t))),Q(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=io(e,null,e.W),pn(e)};Z.prototype.close=function(){xs(this.g)};Z.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Rn(this.g,t)}else this.v?(t={},t.__data__=ws(e),Rn(this.g,t)):Rn(this.g,e)};Z.prototype.M=function(){this.g.j=null,delete this.j,xs(this.g),delete this.g,Z.Z.M.call(this)};function ao(e){Cs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(ao,Cs);function ho(){As.call(this),this.status=1}K(ho,As);function $t(e){this.g=e}K($t,oo);$t.prototype.xa=function(){B(this.g,"a")};$t.prototype.wa=function(e){B(this.g,new ao(e))};$t.prototype.va=function(e){B(this.g,new ho(e))};$t.prototype.ua=function(){B(this.g,"b")};We.prototype.createWebChannel=We.prototype.g;Z.prototype.send=Z.prototype.u;Z.prototype.open=Z.prototype.m;Z.prototype.close=Z.prototype.close;hn.NO_ERROR=0;hn.TIMEOUT=8;hn.HTTP_ERROR=6;Nr.COMPLETE="complete";kr.EventType=ve;ve.OPEN="a";ve.CLOSE="b";ve.ERROR="c";ve.MESSAGE="d";V.prototype.listen=V.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.La;O.prototype.getLastErrorCode=O.prototype.Da;O.prototype.getStatus=O.prototype.ba;O.prototype.getResponseJson=O.prototype.Qa;O.prototype.getResponseText=O.prototype.ga;O.prototype.send=O.prototype.ea;var Tu=function(){return new We},Iu=function(){return an()},xn=hn,Su=Nr,Cu=Ct,Ei={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Au=Te,Re=kr,bu=O;const Ti="@firebase/firestore";/**
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
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
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
 */let qt="9.6.10";/**
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
 */const Et=new rr("@firebase/firestore");function Ii(){return Et.logLevel}function m(e,...t){if(Et.logLevel<=b.DEBUG){const n=t.map(Ms);Et.debug(`Firestore (${qt}): ${e}`,...n)}}function ht(e,...t){if(Et.logLevel<=b.ERROR){const n=t.map(Ms);Et.error(`Firestore (${qt}): ${e}`,...n)}}function Si(e,...t){if(Et.logLevel<=b.WARN){const n=t.map(Ms);Et.warn(`Firestore (${qt}): ${e}`,...n)}}function Ms(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${qt}) INTERNAL ASSERTION FAILED: `+e;throw ht(t),new Error(t)}function L(e,t){e||T()}function A(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends en{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Du{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _u{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Nu{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let r=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const h=r;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},a=h=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new Du(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new Y(t)}}class ku{constructor(t,n,s){this.type="FirstParty",this.user=Y.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Ru{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new ku(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.p=n.token,new xu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Ps{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
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
 */function Ou(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */Ps.A=-1;class Mu{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ou(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function ue(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new et(0,0))}static max(){return new I(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ci(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function mn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Pu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ce{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ce.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ce?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends ce{construct(t,n,s){return new k(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new k(n)}static emptyPath(){return new k([])}}const Vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ce{construct(t,n,s){return new tt(t,n,s)}static isValidIdentifier(t){return Vu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class q{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new q(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new q(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}q.EMPTY_BYTE_STRING=new q("");const Fu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(e){if(L(!!e),typeof e=="string"){let t=0;const n=Fu.exec(e);if(L(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:x(e.seconds),nanos:x(e.nanos)}}function x(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Lt(e){return typeof e=="string"?q.fromBase64String(e):q.fromUint8Array(e)}/**
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
 */function uo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function co(e){const t=e.mapValue.fields.__previous_value__;return uo(t)?co(t):t}function le(e){const t=ut(e.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class Uu{constructor(t,n,s,i,r,o,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Ot{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ot("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ot&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function jt(e){return e==null}function Jn(e){return e===0&&1/e==-1/0}/**
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
 */class y{constructor(t){this.path=t}static fromPath(t){return new y(k.fromString(t))}static fromName(t){return new y(k.fromString(t).popFirst(5))}static empty(){return new y(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new y(new k(t.slice()))}}function Tt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?uo(e)?4:Bu(e)?9:10:T()}function nt(e,t){if(e===t)return!0;const n=Tt(e);if(n!==Tt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return le(e).isEqual(le(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ut(s.timestampValue),o=ut(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Lt(s.bytesValue).isEqual(Lt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return x(s.geoPointValue.latitude)===x(i.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return x(s.integerValue)===x(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=x(s.doubleValue),o=x(i.doubleValue);return r===o?Jn(r)===Jn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return ue(e.arrayValue.values||[],t.arrayValue.values||[],nt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ci(r)!==Ci(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!nt(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function de(e,t){return(e.values||[]).find(n=>nt(n,t))!==void 0}function Mt(e,t){if(e===t)return 0;const n=Tt(e),s=Tt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=x(i.integerValue||i.doubleValue),a=x(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ai(e.timestampValue,t.timestampValue);case 4:return Ai(le(e),le(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Lt(i),a=Lt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let h=0;h<o.length&&h<a.length;h++){const u=D(o[h],a[h]);if(u!==0)return u}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=D(x(i.latitude),x(r.latitude));return o!==0?o:D(x(i.longitude),x(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let h=0;h<o.length&&h<a.length;++h){const u=Mt(o[h],a[h]);if(u)return u}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),h=r.fields||{},u=Object.keys(h);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const l=D(a[c],u[c]);if(l!==0)return l;const p=Mt(o[a[c]],h[u[c]]);if(p!==0)return p}return D(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ai(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=ut(e),s=ut(t),i=D(n.seconds,s.seconds);return i!==0?i:D(n.nanos,s.nanos)}function Nt(e){return Zn(e)}function Zn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=ut(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Lt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,y.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Zn(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Zn(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function ts(e){return!!e&&"integerValue"in e}function Vs(e){return!!e&&"arrayValue"in e}function bi(e){return!!e&&"nullValue"in e}function Di(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ln(e){return!!e&&"mapValue"in e}function te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return mn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=te(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Bu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ln(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=te(n)}setAll(t){let n=tt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=te(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ln(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ln(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){mn(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new rt(te(this.value))}}/**
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
 */class H{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new H(t,0,I.min(),I.min(),rt.empty(),0)}static newFoundDocument(t,n,s){return new H(t,1,n,I.min(),s,0)}static newNoDocument(t,n){return new H(t,2,n,I.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new H(t,3,n,I.min(),rt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof H&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function $u(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=I.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Pt(i,y.empty(),t)}function qu(e){return new Pt(e.readTime,e.key,-1)}class Pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(I.min(),y.empty(),-1)}static max(){return new Pt(I.max(),y.empty(),-1)}}function ju(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=y.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
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
 */class Ku{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function _i(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Ku(e,t,n,s,i,r,o)}function Fs(e){const t=A(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Nt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),jt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Nt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Nt(s)).join(",")),t.P=n}return t.P}function Hu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Nt(s.value)}`;var s}).join(", ")}]`),jt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Nt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Nt(n)).join(",")),`Target(${t})`}function Us(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Zu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!nt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ki(e.startAt,t.startAt)&&ki(e.endAt,t.endAt)}function es(e){return y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class J extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new zu(t,n,s):n==="array-contains"?new Xu(t,s):n==="in"?new Qu(t,s):n==="not-in"?new Yu(t,s):n==="array-contains-any"?new Ju(t,s):new J(t,n,s)}static V(t,n,s){return n==="in"?new Gu(t,s):new Wu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Mt(n,this.value)):n!==null&&Tt(this.value)===Tt(n)&&this.v(Mt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zu extends J{constructor(t,n,s){super(t,n,s),this.key=y.fromName(s.referenceValue)}matches(t){const n=y.comparator(t.key,this.key);return this.v(n)}}class Gu extends J{constructor(t,n){super(t,"in",n),this.keys=lo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wu extends J{constructor(t,n){super(t,"not-in",n),this.keys=lo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function lo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>y.fromName(s.referenceValue))}class Xu extends J{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vs(n)&&de(n.arrayValue,this.value)}}class Qu extends J{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&de(this.value.arrayValue,n)}}class Yu extends J{constructor(t,n){super(t,"not-in",n)}matches(t){if(de(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!de(this.value.arrayValue,n)}}class Ju extends J{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>de(this.value.arrayValue,s))}}class Xe{constructor(t,n){this.position=t,this.inclusive=n}}class ee{constructor(t,n="asc"){this.field=t,this.dir=n}}function Zu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ni(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=y.comparator(y.fromName(o.referenceValue),n.key):s=Mt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ki(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!nt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class yn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function tc(e,t,n,s,i,r,o,a){return new yn(e,t,n,s,i,r,o,a)}function fo(e){return new yn(e)}function Oe(e){return!jt(e.limit)&&e.limitType==="F"}function Qe(e){return!jt(e.limit)&&e.limitType==="L"}function ec(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function nc(e){for(const t of e.filters)if(t.S())return t.field;return null}function sc(e){return e.collectionGroup!==null}function fe(e){const t=A(e);if(t.D===null){t.D=[];const n=nc(t),s=ec(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new ee(n)),t.D.push(new ee(tt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new ee(tt.keyField(),r))}}}return t.D}function It(e){const t=A(e);if(!t.C)if(t.limitType==="F")t.C=_i(t.path,t.collectionGroup,fe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of fe(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new ee(r.field,o))}const s=t.endAt?new Xe(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new Xe(t.startAt.position,!t.startAt.inclusive):null;t.C=_i(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function ic(e,t,n){return new yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function vn(e,t){return Us(It(e),It(t))&&e.limitType===t.limitType}function go(e){return`${Fs(It(e))}|lt:${e.limitType}`}function ns(e){return`Query(target=${Hu(It(e))}; limitType=${e.limitType})`}function Bs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ni(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,fe(n),s)||n.endAt&&!function(i,r,o){const a=Ni(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,fe(n),s))}(e,t)}function rc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function po(e){return(t,n)=>{let s=!1;for(const i of fe(e)){const r=oc(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function oc(e,t,n){const s=e.field.isKeyField()?y.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),h=o.data.field(i);return a!==null&&h!==null?Mt(a,h):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function ac(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(t)?"-0":t}}function hc(e){return{integerValue:""+e}}/**
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
 */class wn{constructor(){this._=void 0}}function uc(e,t,n){return e instanceof ss?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ye?mo(e,t):e instanceof Je?yo(e,t):function(s,i){const r=lc(s,i),o=Ri(r)+Ri(s.k);return ts(r)&&ts(s.k)?hc(o):ac(s.M,o)}(e,t)}function cc(e,t,n){return e instanceof Ye?mo(e,t):e instanceof Je?yo(e,t):n}function lc(e,t){return e instanceof is?ts(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ss extends wn{}class Ye extends wn{constructor(t){super(),this.elements=t}}function mo(e,t){const n=vo(t);for(const s of e.elements)n.some(i=>nt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Je extends wn{constructor(t){super(),this.elements=t}}function yo(e,t){let n=vo(t);for(const s of e.elements)n=n.filter(i=>!nt(i,s));return{arrayValue:{values:n}}}class is extends wn{constructor(t,n){super(),this.M=t,this.k=n}}function Ri(e){return x(e.integerValue||e.doubleValue)}function vo(e){return Vs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dc(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ye&&s instanceof Ye||n instanceof Je&&s instanceof Je?ue(n.elements,s.elements,nt):n instanceof is&&s instanceof is?nt(n.k,s.k):n instanceof ss&&s instanceof ss}(e.transform,t.transform)}function Me(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class wo{}function fc(e,t,n){e instanceof Eo?function(s,i,r){const o=s.value.clone(),a=Oi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof To?function(s,i,r){if(!Me(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Oi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Io(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function rs(e,t,n){e instanceof Eo?function(s,i,r){if(!Me(s.precondition,i))return;const o=s.value.clone(),a=Mi(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Li(i),o).setHasLocalMutations()}(e,t,n):e instanceof To?function(s,i,r){if(!Me(s.precondition,i))return;const o=Mi(s.fieldTransforms,r,i),a=i.data;a.setAll(Io(s)),a.setAll(o),i.convertToFoundDocument(Li(i),a).setHasLocalMutations()}(e,t,n):function(s,i){Me(s.precondition,i)&&i.convertToNoDocument(I.min())}(e,t)}function xi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ue(n,s,(i,r)=>dc(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Li(e){return e.isFoundDocument()?e.version:I.min()}class Eo extends wo{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class To extends wo{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Io(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Oi(e,t,n){const s=new Map;L(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,cc(o,a,n[i]))}return s}function Mi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,uc(r,o,t))}return s}/**
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
 */class gc{constructor(t){this.count=t}}/**
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
 */var R,C;function So(e){if(e===void 0)return ht("GRPC error has no .code"),f.UNKNOWN;switch(e){case R.OK:return f.OK;case R.CANCELLED:return f.CANCELLED;case R.UNKNOWN:return f.UNKNOWN;case R.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case R.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case R.INTERNAL:return f.INTERNAL;case R.UNAVAILABLE:return f.UNAVAILABLE;case R.UNAUTHENTICATED:return f.UNAUTHENTICATED;case R.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case R.NOT_FOUND:return f.NOT_FOUND;case R.ALREADY_EXISTS:return f.ALREADY_EXISTS;case R.PERMISSION_DENIED:return f.PERMISSION_DENIED;case R.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case R.ABORTED:return f.ABORTED;case R.OUT_OF_RANGE:return f.OUT_OF_RANGE;case R.UNIMPLEMENTED:return f.UNIMPLEMENTED;case R.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(C=R||(R={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Kt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){mn(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Pu(this.inner)}size(){return this.innerSize}}/**
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
 */class j{constructor(t,n){this.comparator=t,this.root=n||F.EMPTY}insert(t,n){return new j(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,F.BLACK,null,null))}remove(t){return new j(this.comparator,this.root.remove(t,this.comparator).copy(null,null,F.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xe(this.root,t,this.comparator,!1)}getReverseIterator(){return new xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xe(this.root,t,this.comparator,!0)}}class xe{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class F{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:F.RED,this.left=i!=null?i:F.EMPTY,this.right=r!=null?r:F.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new F(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return F.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return F.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}F.EMPTY=null,F.RED=!0,F.BLACK=!1;F.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new F(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ${constructor(t){this.comparator=t,this.data=new j(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pi(this.data.getIterator())}getIteratorFrom(t){return new Pi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof $)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $(this.comparator);return n.data=t,n}}class Pi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const pc=new j(y.comparator);function St(){return pc}const mc=new j(y.comparator);function os(){return mc}function On(){return new Kt(e=>e.toString(),(e,t)=>e.isEqual(t))}new j(y.comparator);const yc=new $(y.comparator);function N(...e){let t=yc;for(const n of e)t=t.add(n);return t}const vc=new $(D);function Co(){return vc}/**
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
 */class En{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ce.createSynthesizedTargetChangeForCurrentChange(t,n)),new En(I.min(),s,Co(),St(),N())}}class Ce{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ce(q.EMPTY_BYTE_STRING,n,N(),N(),N())}}/**
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
 */class Pe{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class Ao{constructor(t,n){this.targetId=t,this.$=n}}class bo{constructor(t,n,s=q.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Vi{constructor(){this.B=0,this.L=Ui(),this.U=q.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=N(),n=N(),s=N();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new Ce(this.U,this.q,t,n,s)}J(){this.G=!1,this.L=Ui()}Y(t,n){this.G=!0,this.L=this.L.insert(t,n)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class wc{constructor(t){this.nt=t,this.st=new Map,this.it=St(),this.rt=Fi(),this.ot=new $(D)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(es(r))if(s===0){const o=new y(r.path);this.ct(n,o,H.newNoDocument(o,I.min()))}else L(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&es(a.target)){const h=new y(a.target.path);this.it.get(h)!==null||this.It(o,h)||this.ct(o,h,H.newNoDocument(h,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=N();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(h=>{const u=this.wt(h);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new En(t,n,this.ot,this.it,s);return this.it=St(),this.rt=Fi(),this.ot=new $(D),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Vi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new $(D),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||m("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new Vi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Fi(){return new j(y.comparator)}function Ui(){return new j(y.comparator)}/**
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
 */const Ec=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ic{constructor(t,n){this.databaseId=t,this.N=n}}function Sc(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cc(e,t){return e.N?t.toBase64():t.toUint8Array()}function ge(e){return L(!!e),I.fromTimestamp(function(t){const n=ut(t);return new et(n.seconds,n.nanos)}(e))}function Ac(e,t){return function(n){return new k(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Do(e){const t=k.fromString(e);return L(ko(t)),t}function Mn(e,t){const n=Do(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new y(_o(n))}function as(e,t){return Ac(e.databaseId,t)}function bc(e){const t=Do(e);return t.length===4?k.emptyPath():_o(t)}function Bi(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _o(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Dc(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(h,u){return h.N?(L(u===void 0||typeof u=="string"),q.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),q.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const u=h.code===void 0?f.UNKNOWN:So(h.code);return new w(u,h.message||"")}(o);n=new bo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Mn(e,s.document.name),r=ge(s.document.updateTime),o=new rt({mapValue:{fields:s.document.fields}}),a=H.newFoundDocument(i,r,o),h=s.targetIds||[],u=s.removedTargetIds||[];n=new Pe(h,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Mn(e,s.document),r=s.readTime?ge(s.readTime):I.min(),o=H.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Pe([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Mn(e,s.document),r=s.removedTargetIds||[];n=new Pe([],r,i,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new gc(i),o=s.targetId;n=new Ao(o,r)}}return n}function _c(e,t){return{documents:[as(e,t.path)]}}function Nc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=as(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=as(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(h){if(h.length===0)return;const u=h.map(c=>function(l){if(l.op==="=="){if(Di(l.value))return{unaryFilter:{field:At(l.field),op:"IS_NAN"}};if(bi(l.value))return{unaryFilter:{field:At(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Di(l.value))return{unaryFilter:{field:At(l.field),op:"IS_NOT_NAN"}};if(bi(l.value))return{unaryFilter:{field:At(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:At(l.field),op:Lc(l.op),value:l.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(h){if(h.length!==0)return h.map(u=>function(c){return{field:At(c.field),direction:xc(c.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(h,u){return h.N||jt(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),n}function kc(e){let t=bc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){L(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=No(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new ee(Dt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,jt(l)?null:l}(n.limit));let h=null;n.startAt&&(h=function(c){const l=!!c.before,p=c.values||[];return new Xe(p,l)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const l=!c.before,p=c.values||[];return new Xe(p,l)}(n.endAt)),tc(t,i,o,r,a,"F",h,u)}function Rc(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function No(e){return e?e.unaryFilter!==void 0?[Mc(e)]:e.fieldFilter!==void 0?[Oc(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>No(t)).reduce((t,n)=>t.concat(n)):T():[]}function xc(e){return Ec[e]}function Lc(e){return Tc[e]}function At(e){return{fieldPath:e.canonicalString()}}function Dt(e){return tt.fromServerFormat(e.fieldPath)}function Oc(e){return J.create(Dt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}function Mc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Dt(e.unaryFilter.field);return J.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Dt(e.unaryFilter.field);return J.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dt(e.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Dt(e.unaryFilter.field);return J.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function ko(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */const Pc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},h=>s(h))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Ae(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Fc{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&fc(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&rs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&rs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(I.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&ue(this.mutations,t.mutations,(n,s)=>xi(n,s))&&ue(this.baseMutations,t.baseMutations,(n,s)=>xi(n,s))}}/**
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
 */class Uc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class mt{constructor(t,n,s,i,r=I.min(),o=I.min(),a=q.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new mt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Bc{constructor(t){this.Jt=t}}function $c(e){const t=kc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ic(t,t.limit,"L"):t}/**
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
 */class qc{constructor(){this.qe=new jc}addToCollectionParentIndex(t,n){return this.qe.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getFieldIndex(t,n){return d.resolve(null)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class jc{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new $(k.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new $(k.comparator)).toArray()}}/**
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
 */class Vt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Vt(0)}static gn(){return new Vt(-1)}}/**
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
 */async function $s(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Pc)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Kc{constructor(){this.changes=new Kt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,H.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Hc{constructor(t,n,s){this.fs=t,this.$s=n,this.indexManager=s}Bs(t,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.fs.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Us(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}qs(t,n){return this.fs.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Us(n,s))}Ks(t,n,s){return function(i){return y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(t,n.path):sc(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new y(n)).next(s=>{let i=os();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(t,n,s){const i=n.collectionGroup;let r=os();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const h=function(u,c){return new yn(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Ws(t,h,s).next(u=>{u.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}Ws(t,n,s){let i;return this.fs.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.$s.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const h=a.key;let u=i.get(h);u==null&&(u=H.newInvalidDocument(h),i=i.insert(h,u)),rs(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(h))}}).next(()=>(i.forEach((r,o)=>{Bs(n,o)||(i=i.remove(r))}),i))}}/**
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
 */class qs{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=i}static Js(t,n){let s=N(),i=N();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new qs(t,n.fromCache,s,i)}}/**
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
 */class zc{Ys(t){this.Xs=t}Ks(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(I.min())?this.Zs(t,n):this.Xs.qs(t,i).next(r=>{const o=this.ti(n,r);return(Oe(n)||Qe(n))&&this.ei(n.limitType,o,i,s)?this.Zs(t,n):(Ii()<=b.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ns(n)),this.Xs.Ks(t,n,$u(s,-1)).next(a=>(o.forEach(h=>{a=a.insert(h.key,h)}),a)))})}ti(t,n){let s=new $(po(t));return n.forEach((i,r)=>{Bs(t,r)&&(s=s.add(r))}),s}ei(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,n){return Ii()<=b.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",ns(n)),this.Xs.Ks(t,n,Pt.min())}}/**
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
 */class Gc{constructor(t,n,s,i){this.persistence=t,this.ni=n,this.M=i,this.si=new j(D),this.ii=new Kt(r=>Fs(r),Us),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(s)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new Hc(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function Wc(e,t,n,s){return new Gc(e,t,n,s)}async function Ro(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.$s.getAllMutationBatches(s).next(r=>(i=r,n.ui(t),n.$s.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let h=N();for(const u of i){o.push(u.batchId);for(const c of u.mutations)h=h.add(c.key)}for(const u of r){a.push(u.batchId);for(const c of u.mutations)h=h.add(c.key)}return n.ai.qs(s,h).next(u=>({ci:u,removedBatchIds:o,addedBatchIds:a}))})})}function xo(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ls.getLastRemoteSnapshotVersion(n))}function Xc(e,t){const n=A(e),s=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];t.targetChanges.forEach((u,c)=>{const l=i.get(c);if(!l)return;a.push(n.ls.removeMatchingKeys(r,u.removedDocuments,c).next(()=>n.ls.addMatchingKeys(r,u.addedDocuments,c)));let p=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(c)?p=p.withResumeToken(q.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(c,p),function(v,S,M){return v.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(l,p,u)&&a.push(n.ls.updateTargetData(r,p))});let h=St();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Qc(r,o,t.documentUpdates).next(u=>{h=u})),!s.isEqual(I.min())){const u=n.ls.getLastRemoteSnapshotVersion(r).next(c=>n.ls.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.ai.Gs(r,h)).next(()=>h)}).then(r=>(n.si=i,r))}function Qc(e,t,n){let s=N();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=St();return n.forEach((o,a)=>{const h=i.get(o);a.isNoDocument()&&a.version.isEqual(I.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!h.isValidDocument()||a.version.compareTo(h.version)>0||a.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):m("LocalStore","Ignoring outdated watch update for ",o,". Current version:",h.version," Watch version:",a.version)}),r})}function Yc(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.ls.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.ls.allocateTargetId(s).next(o=>(i=new mt(t,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function hs(e,t,n){const s=A(e),i=s.si.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ae(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(i.target)}function $i(e,t,n){const s=A(e);let i=I.min(),r=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,h,u){const c=A(a),l=c.ii.get(u);return l!==void 0?d.resolve(c.si.get(l)):c.ls.getTargetData(h,u)}(s,o,It(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(h=>{r=h})}).next(()=>s.ni.Ks(o,t,n?i:I.min(),n?r:N())).next(a=>(Jc(s,rc(t),a),{documents:a,hi:r})))}function Jc(e,t,n){let s=I.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.ri.set(t,s)}/**
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
 */class Zc{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return d.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:ge(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:$c(s.bundledQuery),readTime:ge(s.readTime)}}(n)),d.resolve()}}/**
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
 */class tl{constructor(){this.overlays=new j(y.comparator),this.mi=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=On(),r=n.length+1,o=new y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,u=h.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&h.largestBatchId>s&&i.set(h.getKey(),h)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new j((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let c=r.get(u.largestBatchId);c===null&&(c=On(),r=r.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=On(),h=r.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return d.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Uc(n,s));let r=this.mi.get(n);r===void 0&&(r=N(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
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
 */class js{constructor(){this.gi=new $(P.yi),this.pi=new $(P.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new P(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new P(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new y(new k([])),s=new P(n,t),i=new P(n,t+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new y(new k([])),s=new P(n,t),i=new P(n,t+1);let r=N();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new P(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class P{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return y.comparator(t.key,n.key)||D(t.Vi,n.Vi)}static Ii(t,n){return D(t.Vi,n.Vi)||y.comparator(t.key,n.key)}}/**
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
 */class el{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new $(P.yi)}checkEmpty(t){return d.resolve(this.$s.length===0)}addMutationBatch(t,n,s,i){const r=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new Fc(r,n,s,i);this.$s.push(o);for(const a of i)this.Si=this.Si.add(new P(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return d.resolve(this.$s.length>r?this.$s[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(t){return d.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new P(n,0),i=new P(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new $(D);return n.forEach(i=>{const r=new P(i,0),o=new P(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),d.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;y.isDocumentKey(r)||(r=r.child(""));const o=new P(new y(r),0);let a=new $(D);return this.Si.forEachWhile(h=>{const u=h.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(h.Vi)),!0)},o),d.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){L(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return d.forEach(n.mutations,i=>{const r=new P(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new P(n,0),i=this.Si.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.$s.length,d.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.$s.length===0?0:t-this.$s[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
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
 */class nl{constructor(t){this.ki=t,this.docs=new j(y.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():H.newInvalidDocument(n))}getEntries(t,n){let s=St();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():H.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=St();const r=new y(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:h}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||ju(qu(h),s)<=0||(i=i.insert(h.key,h.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){T()}Mi(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new sl(this)}getSize(t){return d.resolve(this.size)}}class sl extends Kc{constructor(t){super(),this.qn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.qn.addEntry(t,i)):this.qn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.qn.getEntry(t,n)}getAllFromCache(t,n){return this.qn.getEntries(t,n)}}/**
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
 */class il{constructor(t){this.persistence=t,this.Oi=new Kt(n=>Fs(n),Us),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Fi=0,this.$i=new js,this.targetCount=0,this.Bi=Vt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),d.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new Vt(n),this.highestTargetId=n),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.In(n),d.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.$i.Ti(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.$i.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.$i.Ri(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.$i.Pi(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.$i.containsKey(n))}}/**
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
 */class rl{constructor(t,n){this.Li={},this.overlays={},this.ts=new Ps(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new il(this),this.indexManager=new qc,this.fs=function(s){return new nl(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new Bc(n),this.ds=new Zc(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new tl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new el(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new ol(this.ts.next());return this.referenceDelegate.qi(),s(i).next(r=>this.referenceDelegate.Gi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ki(t,n){return d.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class ol extends Vc{constructor(t){super(),this.currentSequenceNumber=t}}class Ks{constructor(t){this.persistence=t,this.Qi=new js,this.ji=null}static Wi(t){return new Ks(t)}get zi(){if(this.ji)return this.ji;throw T()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),d.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}qi(){this.ji=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.zi,s=>{const i=y.fromPath(s);return this.Hi(t,i).next(r=>{r||n.removeEntry(i,I.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(t){return 0}Hi(t,n){return d.or([()=>d.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ki(t,n)])}}class qi{constructor(){this.activeTargetIds=Co()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class al{constructor(){this.Fr=new qi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new qi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class hl{Br(t){}shutdown(){}}/**
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
 */class ji{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ul={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class cl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class ll extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.ao(t,o,a,s).then(h=>(m("RestConnection","Received: ",h),h),h=>{throw Si("RestConnection",`${t} failed with error: `,h,"url: ",o,"request:",s),h})}co(t,n,s,i,r){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+qt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=ul[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,i){return new Promise((r,o)=>{const a=new bu;a.listenOnce(Su.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xn.NO_ERROR:const u=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(u)),r(u);break;case xn.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case xn.HTTP_ERROR:const c=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(S)>=0?S:f.UNKNOWN}(l.status);o(new w(p,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const h=JSON.stringify(i);a.send(n,"POST",h,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Tu(),o=Iu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Au({})),this.uo(a.initMessageHeaders,n,s),aa()||ua()||ca()||la()||da()||ha()||(a.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");m("Connection","Creating WebChannel: "+h,a);const u=r.createWebChannel(h,a);let c=!1,l=!1;const p=new cl({jr:S=>{l?m("Connection","Not sending because WebChannel is closed:",S):(c||(m("Connection","Opening WebChannel transport."),u.open(),c=!0),m("Connection","WebChannel sending:",S),u.send(S))},Wr:()=>u.close()}),v=(S,M,G)=>{S.listen(M,st=>{try{G(st)}catch(it){setTimeout(()=>{throw it},0)}})};return v(u,Re.EventType.OPEN,()=>{l||m("Connection","WebChannel transport opened.")}),v(u,Re.EventType.CLOSE,()=>{l||(l=!0,m("Connection","WebChannel transport closed"),p.eo())}),v(u,Re.EventType.ERROR,S=>{l||(l=!0,Si("Connection","WebChannel transport errored:",S),p.eo(new w(f.UNAVAILABLE,"The operation could not be completed")))}),v(u,Re.EventType.MESSAGE,S=>{var M;if(!l){const G=S.data[0];L(!!G);const st=G,it=st.error||((M=st[0])===null||M===void 0?void 0:M.error);if(it){m("Connection","WebChannel received error:",it);const Gt=it.status;let Wt=function(Yo){const Js=R[Yo];if(Js!==void 0)return So(Js)}(Gt),Ys=it.message;Wt===void 0&&(Wt=f.INTERNAL,Ys="Unknown error status: "+Gt+" with message "+it.message),l=!0,p.eo(new w(Wt,Ys)),u.close()}else m("Connection","WebChannel received:",G),p.no(G)}}),v(o,Cu.STAT_EVENT,S=>{S.stat===Ei.PROXY?m("Connection","Detected buffering proxy"):S.stat===Ei.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Pn(){return typeof document!="undefined"?document:null}/**
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
 */function Lo(e){return new Ic(e,!0)}class Oo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Jn=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class dl{constructor(t,n,s,i,r,o,a,h){this.Jn=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Oo(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Go(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.Jn.enqueueAndForget(()=>this.Po===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fl extends dl{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Go(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Dc(this.M,t),s=function(i){if(!("targetChange"in i))return I.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?I.min():r.readTime?ge(r.readTime):I.min()}(t);return this.listener.Ko(n,s)}Qo(t){const n={};n.database=Bi(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=es(a)?{documents:_c(i,a)}:{query:Nc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Cc(i,r.resumeToken):r.snapshotVersion.compareTo(I.min())>0&&(o.readTime=Sc(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Rc(this.M,t);s&&(n.labels=s),this.Oo(n)}jo(t){const n={};n.database=Bi(this.M),n.removeTarget=t,this.Oo(n)}}/**
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
 */class gl extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.M=i,this.Zo=!1}tu(){if(this.Zo)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}co(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class pl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.au(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(ht(n),this.su=!1):m("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class ml{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{De(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const h=A(a);h.lu.add(4),await be(h),h._u.set("Unknown"),h.lu.delete(4),await Tn(h)}(this))})}),this._u=new pl(s,i)}}async function Tn(e){if(De(e))for(const t of e.fu)await t(!0)}async function be(e){for(const t of e.fu)await t(!1)}function Mo(e,t){const n=A(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Gs(n)?zs(n):Ht(n).Co()&&Hs(n,t))}function Po(e,t){const n=A(e),s=Ht(n);n.hu.delete(t),s.Co()&&Vo(n,t),n.hu.size===0&&(s.Co()?s.ko():De(n)&&n._u.set("Unknown"))}function Hs(e,t){e.wu.Z(t.targetId),Ht(e).Qo(t)}function Vo(e,t){e.wu.Z(t),Ht(e).jo(t)}function zs(e){e.wu=new wc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.hu.get(t)||null}),Ht(e).start(),e._u.iu()}function Gs(e){return De(e)&&!Ht(e).Do()&&e.hu.size>0}function De(e){return A(e).lu.size===0}function Fo(e){e.wu=void 0}async function yl(e){e.hu.forEach((t,n)=>{Hs(e,t)})}async function vl(e,t){Fo(e),Gs(e)?(e._u.uu(t),zs(e)):e._u.set("Unknown")}async function wl(e,t,n){if(e._u.set("Online"),t instanceof bo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ki(e,s)}else if(t instanceof Pe?e.wu.ut(t):t instanceof Ao?e.wu._t(t):e.wu.ht(t),!n.isEqual(I.min()))try{const s=await xo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.yt(r);return o.targetChanges.forEach((a,h)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(h);u&&i.hu.set(h,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const h=i.hu.get(a);if(!h)return;i.hu.set(a,h.withResumeToken(q.EMPTY_BYTE_STRING,h.snapshotVersion)),Vo(i,a);const u=new mt(h.target,a,1,h.sequenceNumber);Hs(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){m("RemoteStore","Failed to raise snapshot:",s),await Ki(e,s)}}async function Ki(e,t,n){if(!Ae(t))throw t;e.lu.add(1),await be(e),e._u.set("Offline"),n||(n=()=>xo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Tn(e)})}async function Hi(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=De(n);n.lu.add(3),await be(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Tn(n)}async function El(e,t){const n=A(e);t?(n.lu.delete(2),await Tn(n)):t||(n.lu.add(2),await be(n),n._u.set("Unknown"))}function Ht(e){return e.mu||(e.mu=function(t,n,s){const i=A(t);return i.tu(),new fl(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{zr:yl.bind(null,e),Jr:vl.bind(null,e),Ko:wl.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),Gs(e)?zs(e):e._u.set("Unknown")):(await e.mu.stop(),Fo(e))})),e.mu}/**
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
 */class Ws{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ws(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(e,t){if(ht("AsyncQueue",`${t}: ${e}`),Ae(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class kt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||y.comparator(n.key,s.key):(n,s)=>y.comparator(n.key,s.key),this.keyedMap=os(),this.sortedSet=new j(this.comparator)}static emptySet(t){return new kt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof kt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new kt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class zi{constructor(){this.yu=new j(y.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):T():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ft{constructor(t,n,s,i,r,o,a,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Ft(t,n,kt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Tl{constructor(){this.Iu=void 0,this.listeners=[]}}class Il{constructor(){this.queries=new Kt(t=>go(t),vn),this.onlineState="Unknown",this.Tu=new Set}}async function Sl(e,t){const n=A(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Tl),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Uo(o,`Initialization of query '${ns(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&Xs(n)}async function Cl(e,t){const n=A(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Al(e,t){const n=A(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Xs(n)}function bl(e,t,n){const s=A(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Xs(e){e.Tu.forEach(t=>{t.next()})}class Dl{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ft(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),n=!0):this.vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}Vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=Ft.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
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
 */class Bo{constructor(t){this.key=t}}class $o{constructor(t){this.key=t}}class _l{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=N(),this.mutatedKeys=N(),this.Lu=po(t),this.Uu=new kt(this.Lu)}get qu(){return this.Fu}Gu(t,n){const s=n?n.Ku:new zi,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const h=Oe(this.query)&&i.size===this.query.limit?i.last():null,u=Qe(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const p=i.get(c),v=Bs(this.query,l)?l:null,S=!!p&&this.mutatedKeys.has(p.key),M=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let G=!1;p&&v?p.data.isEqual(v.data)?S!==M&&(s.track({type:3,doc:v}),G=!0):this.Qu(p,v)||(s.track({type:2,doc:v}),G=!0,(h&&this.Lu(v,h)>0||u&&this.Lu(v,u)<0)&&(a=!0)):!p&&v?(s.track({type:0,doc:v}),G=!0):p&&!v&&(s.track({type:1,doc:p}),G=!0,(h||u)&&(a=!0)),G&&(v?(o=o.add(v),r=M?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),Oe(this.query)||Qe(this.query))for(;o.size>this.query.limit;){const c=Oe(this.query)?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Uu:o,Ku:s,ei:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Ku.pu();r.sort((u,c)=>function(l,p){const v=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return v(l)-v(p)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,h=a!==this.$u;return this.$u=a,r.length!==0||h?{snapshot:new Ft(this.query,t.Uu,i,r,t.mutatedKeys,a===0,h,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new zi,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=N(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new $o(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new Bo(s))}),n}Ju(t){this.Fu=t.hi,this.Bu=N();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Yu(){return Ft.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Nl{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class kl{constructor(t){this.key=t,this.Xu=!1}}class Rl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new Kt(a=>go(a),vn),this.ea=new Map,this.na=new Set,this.sa=new j(y.comparator),this.ia=new Map,this.ra=new js,this.oa={},this.ua=new Map,this.aa=Vt.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function xl(e,t){const n=Ul(e);let s,i;const r=n.ta.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Yc(n.localStore,It(t));n.isPrimaryClient&&Mo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ll(n,t,s,a==="current")}return i}async function Ll(e,t,n,s){e.ha=(c,l,p)=>async function(v,S,M,G){let st=S.view.Gu(M);st.ei&&(st=await $i(v.localStore,S.query,!1).then(({documents:Wt})=>S.view.Gu(Wt,st)));const it=G&&G.targetChanges.get(S.targetId),Gt=S.view.applyChanges(st,v.isPrimaryClient,it);return Wi(v,S.targetId,Gt.zu),Gt.snapshot}(e,c,l,p);const i=await $i(e.localStore,t,!0),r=new _l(t,i.hi),o=r.Gu(i.documents),a=Ce.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),h=r.applyChanges(o,e.isPrimaryClient,a);Wi(e,n,h.zu);const u=new Nl(t,n,r);return e.ta.set(t,u),e.ea.has(n)?e.ea.get(n).push(t):e.ea.set(n,[t]),h.snapshot}async function Ol(e,t){const n=A(e),s=n.ta.get(t),i=n.ea.get(s.targetId);if(i.length>1)return n.ea.set(s.targetId,i.filter(r=>!vn(r,t))),void n.ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Po(n.remoteStore,s.targetId),us(n,s.targetId)}).catch($s)):(us(n,s.targetId),await hs(n.localStore,s.targetId,!0))}async function qo(e,t){const n=A(e);try{const s=await Xc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ia.get(r);o&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?L(o.Xu):i.removedDocuments.size>0&&(L(o.Xu),o.Xu=!1))}),await Ko(n,s,t)}catch(s){await $s(s)}}function Gi(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ta.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let h=!1;a.queries.forEach((u,c)=>{for(const l of c.listeners)l.Eu(o)&&(h=!0)}),h&&Xs(a)}(s.eventManager,t),i.length&&s.Zu.Ko(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Ml(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ia.get(t),r=i&&i.key;if(r){let o=new j(y.comparator);o=o.insert(r,H.newNoDocument(r,I.min()));const a=N().add(r),h=new En(I.min(),new Map,new $(D),o,a);await qo(s,h),s.sa=s.sa.remove(r),s.ia.delete(t),Qs(s)}else await hs(s.localStore,t,!1).then(()=>us(s,t,n)).catch($s)}function us(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ea.get(t))e.ta.delete(s),n&&e.Zu.la(s,n);e.ea.delete(t),e.isPrimaryClient&&e.ra.Ri(t).forEach(s=>{e.ra.containsKey(s)||jo(e,s)})}function jo(e,t){e.na.delete(t.path.canonicalString());const n=e.sa.get(t);n!==null&&(Po(e.remoteStore,n),e.sa=e.sa.remove(t),e.ia.delete(n),Qs(e))}function Wi(e,t,n){for(const s of n)s instanceof Bo?(e.ra.addReference(s.key,t),Pl(e,s)):s instanceof $o?(m("SyncEngine","Document no longer in limbo: "+s.key),e.ra.removeReference(s.key,t),e.ra.containsKey(s.key)||jo(e,s.key)):T()}function Pl(e,t){const n=t.key,s=n.path.canonicalString();e.sa.get(n)||e.na.has(s)||(m("SyncEngine","New document in limbo: "+n),e.na.add(s),Qs(e))}function Qs(e){for(;e.na.size>0&&e.sa.size<e.maxConcurrentLimboResolutions;){const t=e.na.values().next().value;e.na.delete(t);const n=new y(k.fromString(t)),s=e.aa.next();e.ia.set(s,new kl(n)),e.sa=e.sa.insert(n,s),Mo(e.remoteStore,new mt(It(fo(n.path)),s,2,Ps.A))}}async function Ko(e,t,n){const s=A(e),i=[],r=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,h)=>{o.push(s.ha(h,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(h.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=qs.Js(h.targetId,u);r.push(c)}}))}),await Promise.all(o),s.Zu.Ko(i),await async function(a,h){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(h,l=>d.forEach(l.zs,p=>u.persistence.referenceDelegate.addReference(c,l.targetId,p)).next(()=>d.forEach(l.Hs,p=>u.persistence.referenceDelegate.removeReference(c,l.targetId,p)))))}catch(c){if(!Ae(c))throw c;m("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const l=c.targetId;if(!c.fromCache){const p=u.si.get(l),v=p.snapshotVersion,S=p.withLastLimboFreeSnapshotVersion(v);u.si=u.si.insert(l,S)}}}(s.localStore,r))}async function Vl(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await Ro(n.localStore,t);n.currentUser=t,function(i,r){i.ua.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ko(n,s.ci)}}function Fl(e,t){const n=A(e),s=n.ia.get(t);if(s&&s.Xu)return N().add(s.key);{let i=N();const r=n.ea.get(t);if(!r)return i;for(const o of r){const a=n.ta.get(o);i=i.unionWith(a.view.qu)}return i}}function Ul(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ml.bind(null,t),t.Zu.Ko=Al.bind(null,t.eventManager),t.Zu.la=bl.bind(null,t.eventManager),t}class Bl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Lo(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return Wc(this.persistence,new zc,t.initialUser,this.M)}_a(t){return new rl(Ks.Wi,this.M)}da(t){return new al}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $l{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vl.bind(null,this.syncEngine),await El(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Il}createDatastore(t){const n=Lo(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new ll(i));var i;return function(r,o,a,h){return new gl(r,o,a,h)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Gi(this.syncEngine,a,0),o=ji.vt()?new ji:new hl,new ml(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,h,u){const c=new Rl(s,i,r,o,a,h);return u&&(c.ca=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);m("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await be(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class ql{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class jl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=Mu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Uo(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Kl(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ro(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Hl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await zl(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Hi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Hi(t.remoteStore,r)),e.onlineComponents=t}async function zl(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Kl(e,new Bl)),e.offlineComponents}async function Gl(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Hl(e,new $l)),e.onlineComponents}async function Wl(e){const t=await Gl(e),n=t.eventManager;return n.onListen=xl.bind(null,t.syncEngine),n.onUnlisten=Ol.bind(null,t.syncEngine),n}function Xl(e,t,n={}){const s=new pt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,h){const u=new ql({next:l=>{r.enqueueAndForget(()=>Cl(i,c)),l.fromCache&&a.source==="server"?h.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(l)},error:l=>h.reject(l)}),c=new Dl(o,u,{includeMetadataChanges:!0,Du:!0});return Sl(i,c)}(await Wl(e),e.asyncQueue,t,n,s)),s.promise}const Xi=new Map;/**
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
 */function Ql(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Yl(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Qi(e){if(y.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Jl(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Yi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jl(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ji{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Yl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Ho{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ji({}),this._settingsFrozen=!1,t instanceof Ot?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ot(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ji(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _u;switch(n.type){case"gapi":const s=n.client;return L(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Ru(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Xi.get(t);n&&(m("ComponentProvider","Removing Datastore"),Xi.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class zt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zt(this.firestore,t,this._key)}}class In{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new In(this.firestore,t,this._query)}}class Rt extends In{constructor(t,n,s){super(t,n,fo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zt(this.firestore,null,new y(t))}withConverter(t){return new Rt(this.firestore,t,this._path)}}function Zl(e,t,...n){if(e=va(e),Ql("collection","path",t),e instanceof Ho){const s=k.fromString(t,...n);return Qi(s),new Rt(e,null,s)}{if(!(e instanceof zt||e instanceof Rt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return Qi(s),new Rt(e.firestore,null,s)}}/**
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
 */class td{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Oo(this,"async_queue_retry"),this.Ua=()=>{const n=Pn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Pn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const n=Pn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new pt;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!Ae(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const n=this.Na.then(()=>(this.$a=!0,t().catch(s=>{this.Fa=s,this.$a=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ht("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(t,n,s){this.qa(),this.La.indexOf(t)>-1&&(n=0);const i=Ws.createAndSchedule(this,t,n,s,r=>this.Qa(r));return this.Oa.push(i),i}qa(){this.Fa&&T()}verifyOperationInProgress(){}async ja(){let t;do t=this.Na,await t;while(t!==this.Na)}Wa(t){for(const n of this.Oa)if(n.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const n=this.Oa.indexOf(t);this.Oa.splice(n,1)}}class zo extends Ho{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new td,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Go(this),this._firestoreClient.terminate()}}function ed(e=hh()){return sh(e,"firestore").getImmediate()}function nd(e){return e._firestoreClient||Go(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Go(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Uu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new jl(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Wo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ze(q.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ze(q.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class sd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}const id=new RegExp("[~\\*/\\[\\]]");function rd(e,t,n){if(t.search(id)>=0)throw Zi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Wo(...t.split("."))._internalPath}catch{throw Zi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zi(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new w(f.INVALID_ARGUMENT,a+e+h)}/**
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
 */class Xo{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new od(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Qo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class od extends Xo{data(){return super.data()}}function Qo(e,t){return typeof t=="string"?rd(e,t):t instanceof Wo?t._internalPath:t._delegate._internalPath}/**
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
 */class Le{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ad extends Xo{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ve(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Qo("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ve extends ad{data(t={}){return super.data(t)}}class hd{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Le(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ve(this._firestore,this._userDataWriter,s.key,s,new Le(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ve(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Le(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ve(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Le(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,u=-1;return o.type!==0&&(h=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:ud(o.type),doc:a,oldIndex:h,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ud(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
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
 */function cd(e){if(Qe(e)&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class ld{convertValue(t,n="none"){switch(Tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return x(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Lt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return mn(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new sd(x(t.latitude),x(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=co(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(le(t));default:return null}}convertTimestamp(t){const n=ut(t);return new et(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=k.fromString(t);L(ko(s));const i=new Ot(s.get(1),s.get(3)),r=new y(s.popFirst(5));return i.isEqual(n)||ht(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class dd extends ld{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ze(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function fd(e){e=Yi(e,In);const t=Yi(e.firestore,zo),n=nd(t),s=new dd(t);return cd(e._query),Xl(n,e._query).then(i=>new hd(t,s,e,i))}(function(e,t=!0){(function(n){qt=n})(oh),Ue(new ne("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new zo(i,new Nu(n.getProvider("auth-internal")),new Lu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),_t(Ti,"3.4.7",e),_t(Ti,"3.4.7","esm2017")})();const gd={apiKey:"AIzaSyBoG8-bccGes7A3EcYywcmloCa3eXd_OV0",authDomain:"volakadu-website.firebaseapp.com",projectId:"volakadu-website",storageBucket:"volakadu-website.appspot.com",messagingSenderId:"858542397956",appId:"1:858542397956:web:c996397e7b55764de47351"},pd=ah(gd),md=ed(pd),yd={class:"is-size-1 is-link"},wd=Jo({async setup(e){let t,n;const s=([t,n]=Zo(()=>fd(Zl(md,"publications"))),t=await t,n(),t);return ta(s.docs),(i,r)=>(ea(),na("h1",yd,"Publications"))}});export{wd as default};
