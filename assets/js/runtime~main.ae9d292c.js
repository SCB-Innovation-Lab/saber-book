(()=>{"use strict";var e,r,t,a,o,n={},c={};function d(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=n,d.c=c,e=[],d.O=(r,t,a,o)=>{if(!t){var n=1/0;for(i=0;i<e.length;i++){t=e[i][0],a=e[i][1],o=e[i][2];for(var c=!0,f=0;f<t.length;f++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](t[f])))?t.splice(f--,1):(c=!1,o<n&&(n=o));if(c){e.splice(i--,1);var b=a();void 0!==b&&(r=b)}}return r}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,a,o]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var c=2&a&&e;"object"==typeof c&&!~r.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(o,n),o},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({42:"fb6264d3",53:"935f2afb",85:"1f391b9e",191:"ceed0b6e",195:"c4f5d8e4",205:"cc3eacd7",414:"393be207",488:"6d7dfb17",506:"afb77275",514:"1be78505",668:"acaf3ce5",689:"c8877c8c",719:"ae1b51b6",774:"915b8883",798:"3078ad73",869:"b416d361",883:"43caba60",918:"17896441"}[e]||e)+"."+{42:"783291fc",53:"8a9a7665",85:"99d92390",191:"d24c2240",195:"00be8fcd",205:"5e301250",414:"d6f2c8d7",488:"6fa5bda3",506:"3f33281b",514:"60d73e13",666:"427d77e6",668:"0bd89796",689:"d7b50098",719:"f63d0a3b",774:"599afcb5",798:"adb9d81b",869:"8b5c9f4d",883:"cbe12642",918:"e154c717",972:"59ded8c3"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="saber-book:",d.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var c,f;if(void 0!==t)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){c=u;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",o+t),c.src=e),a[e]=[r];var l=(r,t)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),f&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/saber-book/",d.gca=function(e){return e={17896441:"918",fb6264d3:"42","935f2afb":"53","1f391b9e":"85",ceed0b6e:"191",c4f5d8e4:"195",cc3eacd7:"205","393be207":"414","6d7dfb17":"488",afb77275:"506","1be78505":"514",acaf3ce5:"668",c8877c8c:"689",ae1b51b6:"719","915b8883":"774","3078ad73":"798",b416d361:"869","43caba60":"883"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var a=d.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=d.p+d.u(r),c=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],c=t[1],f=t[2],b=0;if(n.some((r=>0!==e[r]))){for(a in c)d.o(c,a)&&(d.m[a]=c[a]);if(f)var i=f(d)}for(r&&r(t);b<n.length;b++)o=n[b],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(i)},t=self.webpackChunksaber_book=self.webpackChunksaber_book||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();