(()=>{"use strict";var e,r,t,a,o,c={},n={};function f(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=c,f.c=n,e=[],f.O=(r,t,a,o)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,b=0;b<t.length;b++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](t[b])))?t.splice(b--,1):(n=!1,o<c&&(c=o));if(n){e.splice(i--,1);var d=a();void 0!==d&&(r=d)}}return r}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,a,o]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};r=r||[null,t({}),t([]),t(t)];for(var n=2&a&&e;"object"==typeof n&&!~r.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((r=>c[r]=()=>e[r]));return c.default=()=>e,f.d(o,c),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({42:"fb6264d3",53:"935f2afb",85:"1f391b9e",191:"ceed0b6e",195:"c4f5d8e4",205:"cc3eacd7",217:"a415b1d9",414:"393be207",488:"6d7dfb17",506:"afb77275",514:"1be78505",559:"2c6b6614",668:"acaf3ce5",689:"c8877c8c",719:"ae1b51b6",774:"915b8883",798:"3078ad73",840:"b7789a4b",869:"b416d361",883:"43caba60",918:"17896441",946:"9a64fe08",971:"b3c918db"}[e]||e)+"."+{42:"783291fc",53:"3c5b68cd",85:"99d92390",191:"d24c2240",195:"00be8fcd",205:"5e301250",217:"1789ffe7",414:"d6f2c8d7",488:"c1d6f93f",506:"fd7da1a5",514:"60d73e13",559:"8642f2c7",666:"427d77e6",668:"2af2b706",689:"d7b50098",719:"f63d0a3b",774:"599afcb5",798:"adb9d81b",840:"7730da47",869:"8b5c9f4d",883:"5b9a09c8",918:"e154c717",946:"0600bec9",971:"fb7a586f",972:"59ded8c3"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="saber-book:",f.l=(e,r,t,c)=>{if(a[e])a[e].push(r);else{var n,b;if(void 0!==t)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){n=u;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+t),n.src=e),a[e]=[r];var l=(r,t)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/saber-book/",f.gca=function(e){return e={17896441:"918",fb6264d3:"42","935f2afb":"53","1f391b9e":"85",ceed0b6e:"191",c4f5d8e4:"195",cc3eacd7:"205",a415b1d9:"217","393be207":"414","6d7dfb17":"488",afb77275:"506","1be78505":"514","2c6b6614":"559",acaf3ce5:"668",c8877c8c:"689",ae1b51b6:"719","915b8883":"774","3078ad73":"798",b7789a4b:"840",b416d361:"869","43caba60":"883","9a64fe08":"946",b3c918db:"971"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var c=f.p+f.u(r),n=new Error;f.l(c,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;n.message="Loading chunk "+r+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,c=t[0],n=t[1],b=t[2],d=0;if(c.some((r=>0!==e[r]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(b)var i=b(f)}for(r&&r(t);d<c.length;d++)o=c[d],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(i)},t=self.webpackChunksaber_book=self.webpackChunksaber_book||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();