(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(t,e,r){"use strict";var n=r(25),o=(r(40),r(121),r(178),r(84),r(34),r(85)),l=r(185),h=r.n(l),c=(r(122),r(120),{name:"Links",components:{LinksD:f},props:{spllitedUrl:{},links:Array,url:{},activeUrlIndex:{},childActiveUrlIndex:{},childDepth:{},relative:{default:"/docs/"},isChild:{type:Boolean}},methods:{getActiveUrlIndex:function(t,e){if(e>0){var r=this.spllitedUrl,n=r[r.length-1-e];return t.findIndex((function(q){return q.url.match(new RegExp(n,"i"))}))}return e>=0?0:-1},isActiveUrl:function(link){var t=(link=this.url(link,this.relative))===this.$route.path;if(t){var e="b-tutorial__links__item--active",r=document.querySelectorAll(".".concat(e));r.length>1&&r[0].classList.remove(e)}return t},removeSlash:function(t){return"/"===t[0]?t.substr(1):t}}}),d=(r(186),r(14)),f=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"b-links",class:{"b-links--ischild":t.isChild}},t._l(t.links,(function(link,e){return r("div",{key:link.text},[r("a",{staticClass:"row content-v-center b-tutorial__links__item ripple",class:{"b-tutorial__links__item--active":t.isActiveUrl(link)},attrs:{href:t.removeSlash(t.url(link,t.relative))}},[link.children?[e===t.activeUrlIndex?r("i",{staticClass:"fas fa-chevron-down"}):r("i",{staticClass:"fas fa-chevron-right"})]:t._e(),t._v("\n      "+t._s(link.text)+"\n    ")],2),t._v(" "),e===t.activeUrlIndex&&link.children?r("Links",{attrs:{links:link.children,url:t.url,activeUrlIndex:t.getActiveUrlIndex(link.children,t.childDepth-1),childActiveUrlIndex:t.childActiveUrlIndex,childDepth:t.childDepth-1,relative:t.relative+link.url+"/",currentUrlIndex:e,isChild:!0}}):t._e()],1)})),0)}),[],!1,null,"4d97607a",null).exports,x={components:{Links:f},created:function(){var t=this;this.finder=new h.a({encode:"balance",tokenize:"forward",threshold:0,async:!0,worker:!1,cache:!1}),window.addEventListener("resize",this.onResize),o.a.$on("menuClicked",(function(){t.toggleMenu()}))},destroyed:function(){o.a.$off("menuClicked"),window.removeEventListener("resize",this.onResize)},head:function(){return{title:"Matic.js ".concat("undefined"!=this.title?"- "+this.title:""),meta:[{hid:"keywords",name:"keywords",content:this.keywords},{hid:"description",name:"description",content:this.description}]}},props:{contentSrc:String,title:String,description:String,keywords:String,relativeUrl:{default:"/docs/"},propLinks:{}},computed:{links:function(){return this.propLinks||this.savedLinks},currentUrl:function(){var path=this.$route.path,t=path.length;return"/"===path[t-1]&&(path=path.substr(0,t-1)),this.isRouteWithIndex&&(path+="/index"),path},spllitedUrl:function(){return this.currentUrl.split("/").slice(this.relativeUrl.split("/").length-1)},activeUrlIndex:function(){var t=this,e=this.spllitedUrl,r=e[e.length-1],n=0;return function o(l){var h=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=l.findIndex((function(c,d){if(c.url===e[n]&&(++n,c.url===r))return l[d].children&&(++t.childDepth,t.isRouteWithIndex=!0),h?t.childActiveUrlIndex=d:(t.childActiveUrlIndex=-1,t.childDepth=0),!0;var f=c.children;if(f&&o(f,!0)>=0)return++t.childDepth,!0}));return c}(this.links)},prevUrl:function(){return this.getLink(-1)},nextUrl:function(){return this.getLink(1)}},data:function(){return{savedLinks:[],childActiveUrlIndex:-1,searchResults:[],searchText:"",childDepth:0,isRouteWithIndex:!1,isMenuOpened:!0,width:""}},fetch:function(){var t=r(188);this.savedLinks=t},mounted:function(){this.onResize(),hljs.highlightAll();var t='Copy <i class="margin-left-10px far fa-copy"></i>';document.querySelectorAll("pre code").forEach((function(e){var div=document.createElement("div");div.className="code-copy ripple",div.innerHTML=t,e.parentNode.prepend(div),div.onclick=function(){var text=e.innerText;Object(o.b)(text),div.innerHTML='Copied <i class="margin-left-10px fas fa-check"></i>',setTimeout((function(){div.innerHTML=t}),1e3)}})),document.querySelector(".b-tutorial__links__item--active").focus(),this.addLinksToFinder()},methods:{onSearch:function(){var t=this;this.searchTimer&&clearTimeout(this.searchTimer),this.searchTimer=setTimeout((function(){t.finder.search(t.searchText).then((function(e){t.searchResults=e.map((function(e){return{url:e,text:t.flatLinks[e]}})),t.searchTimer=null}))}),200)},addLinksToFinder:function(){var t=this,e={};this.links.forEach((function(link){var r=t.url(link.url);e[r]=link.text,t.finder.add(r,link.text),link.children&&link.children.forEach((function(n){r=t.url(link.url+"/"+n.url),e[r]=n.text,t.finder.add(r,n.text)}))})),this.flatLinks=e},url:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/docs/",r=t;if("object"===Object(n.a)(t)){r=t.url;var o=t.children;if(t.expand&&o)return this.url(o[0],e+r+"/")}return e+r},getLink:function(t){var path,e=this.childActiveUrlIndex,r=this.links[this.activeUrlIndex],n=r.children;if(e>=0||n&&t>0){var o=n[e+t];o?path=r.url+"/"+o.url:t<0&&(path=r.url)}if(!path){var l=this.links[this.activeUrlIndex+t];l&&(path=l.url)}return path?this.url(path):"/"},goto:function(t){return this.$router.push({path:this.getLink(t)})},onResize:function(t){this.width=window.innerWidth,this.width<768?this.isMenuOpened=!1:this.isMenuOpened=!0},toggleMenu:function(){this.isMenuOpened=!this.isMenuOpened}}},v=(r(189),Object(d.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row b-tutorial"},[r("div",{staticClass:"col-sm-4 col-md-3 col-lg-3 b-tutorial__links",class:{show:t.isMenuOpened}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"textbox b-tutorial__links__search",attrs:{type:"text",placeholder:"Search in docs"},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.onSearch]}}),t._v(" "),t.searchResults.length>0?r("div",{staticClass:"b-tutorial__links__search-result"},t._l(t.searchResults,(function(link){return r("a",{key:link.text,staticClass:"row content-v-center ripple",attrs:{href:link.url}},[t._v(t._s(link.text))])})),0):r("Links",{attrs:{links:t.links,url:t.url,activeUrlIndex:t.activeUrlIndex,childActiveUrlIndex:t.childActiveUrlIndex,childDepth:t.childDepth,isParent:!0,spllitedUrl:t.spllitedUrl,relative:t.relativeUrl}})],1),t._v(" "),r("div",{staticClass:"b-tutorial__content col-12 col-md-9 col-lg-6 pb-20px"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"col-lg-3 width-full pl-10px pr-5px"}),t._v(" "),r("div",{staticClass:"b-tutorial__sticky-btn"},[t._m(0),t._v(" "),r("a",{staticClass:"btn secondary",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/maticnetwork/matic.js/edit/docs/docs//content"+t.currentUrl+".md",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"far fa-edit"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn rounded secondary margin-bottom-70px",attrs:{alt:"discord link",target:"_blank",href:"https://discord.com/invite/polygon"}},[e("i",{staticClass:"fab fa-discord"})])}],!1,null,"79c9a5ec",null));e.a=v.exports},178:function(t,e,r){"use strict";var n=r(4),o=r(83)(6),l="findIndex",h=!0;l in[]&&Array(1)[l]((function(){h=!1})),n(n.P+n.F*h,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)(l)},179:function(t,e,r){var content=r(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("4956f7fe",content,!0,{sourceMap:!1})},180:function(t,e,r){var content=r(190);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("39a24ee8",content,!0,{sourceMap:!1})},185:function(t,e,r){"use strict";!function(e,r,n){let o;(o=n.define)&&o.amd?o([],(function(){return r})):(o=n.modules)?o["FlexSearch".toLowerCase()]=r:t.exports=r}(0,function t(e){function r(a,t){const b=t?t.id:a&&a.id;this.id=b||0===b?b:R++,this.init(a,t),c(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),c(this,"length",(function(){return this.index.length}))}function n(a,t,b,e){return this.u!==this.g&&(this.o=this.o.concat(b),this.u++,e&&this.o.length>=e&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(t,this.o),this.F&&this.F(this.o))),this}function o(a){const t=M();for(const b in a)if(a.hasOwnProperty(b)){const e=a[b];C(e)?t[b]=e.slice(0):j(e)?t[b]=o(e):t[b]=e}return t}function l(a,t){const b=a.length,e=I(t),r=[];for(let n=0,o=0;n<b;n++){const g=a[n];(e&&t(g)||!e&&!t[g])&&(r[o++]=g)}return r}function h(a,t,b,e,r,n,o,g,l,h){let p;if(b=A(b,o?0:r,g,n,t,l,h),g&&(g=b.page,p=b.next,b=b.result),o)t=this.where(o,null,r,b);else{for(t=b,b=this.l,r=t.length,n=Array(r),o=0;o<r;o++)n[o]=b[t[o]];t=n}return b=t,e&&(I(e)||(W=e.split(":"),1<W.length?e=_:(W=W[0],e=k)),b.sort(e)),b=y(g,p,b),this.cache&&this.j.set(a,b),b}function c(a,t,b){Object.defineProperty(a,t,{get:b})}function d(a){return new RegExp(a,"g")}function f(a,t){for(let b=0;b<t.length;b+=2)a=a.replace(t[b],t[b+1]);return a}function x(a,t,b,e,r,n,o,g){return t[b]?t[b]:(r=r?(g-(o||g/1.5))*n+(o||g/1.5)*r:n,t[b]=r,r>=o&&((a=(a=a[g-(r+.5>>0)])[b]||(a[b]=[]))[a.length]=e),r)}function v(a,t){if(a){const b=Object.keys(a);for(let e=0,r=b.length;e<r;e++){const r=b[e],n=a[r];if(n)for(let g=0,e=n.length;g<e;g++){if(n[g]===t){1===e?delete a[r]:n.splice(g,1);break}j(n[g])&&v(n[g],t)}}}}function m(a){let t="",b="";var e="";for(let r=0;r<a.length;r++){const n=a[r];n!==b&&(r&&"h"===n?(e="a"===e||"e"===e||"i"===e||"o"===e||"u"===e||"y"===e,(("a"===b||"e"===b||"i"===b||"o"===b||"u"===b||"y"===b)&&e||" "===b)&&(t+=n)):t+=n),e=r===a.length-1?"":a[r+1],b=n}return t}function w(a,t){return 0>(a=a.length-t.length)?1:a?-1:0}function k(a,t){return(a=a[W])<(t=t[W])?-1:a>t?1:0}function _(a,t){const b=W.length;for(let e=0;e<b;e++)a=a[W[e]],t=t[W[e]];return a<t?-1:a>t?1:0}function y(a,t,b){return a?{page:a,next:t?""+t:null,result:b}:b}function A(a,t,b,e,r,n,o){let g,l=[];if(!0===b){b="0";var h=""}else h=b&&b.split(":");const p=a.length;if(1<p){const v=M(),m=[];let w,k;var c,d=0;let _;var u=!0;let A,C,I,j,O,E,S=0;if(h&&(2===h.length?(j=h,h=!1):h=O=parseInt(h[0],10)),o){for(w=M();d<p;d++)if("not"===r[d])for(k=a[d],_=k.length,c=0;c<_;c++)w["@"+k[c]]=1;else I=d+1;if(L(I))return y(b,g,l);d=0}else C=U(r)&&r;for(;d<p;d++){const U=d===(I||p)-1;if(!C||!d)if((c=C||r&&r[d])&&"and"!==c){if("or"!==c)continue;E=!1}else E=n=!0;if(k=a[d],_=k.length){if(u){if(!A){A=k;continue}var q=A.length;for(c=0;c<q;c++){var f="@"+(u=A[c]);o&&w[f]||(v[f]=1,n||(l[S++]=u))}A=null,u=!1}for(f=!1,c=0;c<_;c++){var x="@"+(q=k[c]);const r=n?v[x]||0:d;if(!(!r&&!e||o&&w[x]||!n&&v[x]))if(r===d){if(U){if((!O||--O<S)&&(l[S++]=q,t&&S===t))return y(b,S+(h||0),l)}else v[x]=d+1;f=!0}else e&&((x=m[r]||(m[r]=[]))[x.length]=q)}if(E&&!f&&!e)break}else if(E&&!e)return y(b,g,k)}if(A)if(d=A.length,o)for(c=h?parseInt(h,10):0;c<d;c++)w["@"+(a=A[c])]||(l[S++]=a);else l=A;if(e)for(S=l.length,j?(d=parseInt(j[0],10)+1,c=parseInt(j[1],10)+1):(d=m.length,c=0);d--;)if(q=m[d]){for(_=q.length;c<_;c++)if(e=q[c],(!o||!w["@"+e])&&(l[S++]=e,t&&S===t))return y(b,d+":"+c,l);c=0}}else!p||r&&"not"===r[0]||(l=a[0],h&&(h=parseInt(h[0],10)));return t&&(o=l.length,h&&h>o&&(h=0),g=(h=h||0)+t,g<o?l=l.slice(h,g):(g=0,h&&(l=l.slice(h)))),y(b,g,l)}function U(a){return"string"==typeof a}function C(a){return a.constructor===Array}function I(a){return"function"==typeof a}function j(a){return"object"==typeof a}function L(a){return void 0===a}function O(a){const t=Array(a);for(let b=0;b<a;b++)t[b]=M();return t}function M(){return Object.create(null)}function E(){let a,t;self.onmessage=function(b){if(b=b.data)if(b.search){const e=t.search(b.content,b.threshold?{limit:b.limit,threshold:b.threshold,where:b.where}:b.limit);self.postMessage({id:a,content:b.content,limit:b.limit,result:e})}else b.add?t.add(b.id,b.content):b.update?t.update(b.id,b.content):b.remove?t.remove(b.id):b.clear?t.clear():b.info?((b=t.info()).worker=a,console.log(b)):b.register&&(a=b.id,b.options.cache=!1,b.options.async=!1,b.options.worker=!1,t=new Function(b.register.substring(b.register.indexOf("{")+1,b.register.lastIndexOf("}")))(),t=new t(b.options))}}function S(a,r,b,n){a=e("flexsearch","id"+a,E,(function(t){(t=t.data)&&t.result&&n(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),r);const o=t.toString();return b.id=r,a.postMessage({register:o,options:b,id:r}),a}const T={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},z={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},P=[];let R=0;const D={},F={};let W;r.create=function(a,t){return new r(a,t)},r.registerMatcher=function(a){for(const t in a)a.hasOwnProperty(t)&&P.push(d(t),a[t]);return this},r.registerEncoder=function(a,t){return $[a]=t.bind($),this},r.registerLanguage=function(a,t){return D[a]=t.filter,F[a]=t.stemmer,this},r.encode=function(a,t){return $[a](t)},r.prototype.init=function(a,t){if(this.v=[],t){var b=t.preset;a=t}else a||(a=T),b=a.preset;if(t={},U(a)?(t=z[a],a={}):b&&(t=z[b]),b=a.worker)if("undefined"==typeof Worker)a.worker=!1,this.m=null;else{var e=parseInt(b,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(e);for(var l=0;l<e;l++)this.m[l]=S(this.id,l,a,n.bind(this))}if(this.f=a.tokenize||t.f||this.f||T.f,this.split=L(b=a.split)?this.split||T.split:U(b)?d(b):b,this.D=a.rtl||this.D||T.D,this.async="undefined"==typeof Promise||L(b=a.async)?this.async||T.async:b,this.g=L(b=a.worker)?this.g||T.g:b,this.threshold=L(b=a.threshold)?t.threshold||this.threshold||T.threshold:b,this.b=L(b=a.resolution)?b=t.b||this.b||T.b:b,b<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||L(b=a.depth)?t.depth||this.depth||T.depth:b,this.w=(b=L(b=a.encode)?t.encode||T.encode:b)&&$[b]&&$[b].bind($)||(I(b)?b:this.w||!1),(b=a.matcher)&&this.addMatcher(b),b=(t=a.lang)||a.filter){if(U(b)&&(b=D[b]),C(b)){e=this.w,l=M();for(var h=0;h<b.length;h++){var c=e?e(b[h]):b[h];l[c]=1}b=l}this.filter=b}if(b=t||a.stemmer){var g;for(g in t=U(b)?F[b]:b,e=this.w,l=[],t)t.hasOwnProperty(g)&&(h=e?e(g):g,l.push(d(h+"($|\\W)"),e?e(t[g]):t[g]));this.stemmer=g=l}if(this.a=l=(b=a.doc)?o(b):this.a||T.a,this.i=O(this.b-(this.threshold||0)),this.h=M(),this.c=M(),l){if(this.l=M(),a.doc=null,g=l.index={},t=l.keys=[],e=l.field,h=l.tag,c=l.store,C(l.id)||(l.id=l.id.split(":")),c){var f=M();if(U(c))f[c]=1;else if(C(c))for(let t=0;t<c.length;t++)f[c[t]]=1;else j(c)&&(f=c);l.store=f}if(h){if(this.G=M(),c=M(),e)if(U(e))c[e]=a;else if(C(e))for(f=0;f<e.length;f++)c[e[f]]=a;else j(e)&&(c=e);for(C(h)||(l.tag=h=[h]),e=0;e<h.length;e++)this.G[h[e]]=M();this.I=h,e=c}if(e){let n;for(C(e)||(j(e)?(n=e,l.field=e=Object.keys(e)):l.field=e=[e]),l=0;l<e.length;l++)C(h=e[l])||(n&&(a=n[h]),t[l]=h,e[l]=h.split(":")),g[h]=new r(a)}a.doc=b}return this.B=!0,this.j=!!(this.cache=b=L(b=a.cache)?this.cache||T.cache:b)&&new H(b),this},r.prototype.encode=function(a){return a&&(P.length&&(a=f(a,P)),this.v.length&&(a=f(a,this.v)),this.w&&(a=this.w(a)),this.stemmer&&(a=f(a,this.stemmer))),a},r.prototype.addMatcher=function(a){const t=this.v;for(const b in a)a.hasOwnProperty(b)&&t.push(d(b),a[b]);return this},r.prototype.add=function(a,t,b,e,r){if(this.a&&j(a))return this.A("add",a,t);if(t&&U(t)&&(a||0===a)){var n="@"+a;if(this.c[n]&&!e)return this.update(a,t);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:a,content:t}),this.c[n]=""+this.C,b&&b(),this;if(!r){if(this.async&&"function"!=typeof importScripts){let r=this;return n=new Promise((function(n){setTimeout((function(){r.add(a,t,null,e,!0),r=null,n()}))})),b?(n.then(b),this):n}if(b)return this.add(a,t,null,e,!0),b(),this}if(!(t=this.encode(t)).length)return this;r=I(b=this.f)?b(t):t.split(this.split),this.filter&&(r=l(r,this.filter));const d=M();d._ctx=M();const f=r.length,u=this.threshold,q=this.depth,v=this.b,m=this.i,w=this.D;for(let t=0;t<f;t++){var o=r[t];if(o){var g=o.length,h=(w?t+1:f-t)/f,c="";switch(b){case"reverse":case"both":for(var p=g;--p;)x(m,d,c=o[p]+c,a,w?1:(g-p)/g,h,u,v-1);c="";case"forward":for(p=0;p<g;p++)x(m,d,c+=o[p],a,w?(p+1)/g:1,h,u,v-1);break;case"full":for(p=0;p<g;p++){const t=(w?p+1:g-p)/g;for(let e=g;e>p;e--)x(m,d,c=o.substring(p,e),a,t,h,u,v-1)}break;default:if(g=x(m,d,o,a,1,h,u,v-1),q&&1<f&&g>=u)for(g=d._ctx[o]||(d._ctx[o]=M()),o=this.h[o]||(this.h[o]=O(v-(u||0))),0>(h=t-q)&&(h=0),(c=t+q+1)>f&&(c=f);h<c;h++)h!==t&&x(o,g,r[h],a,0,v-(h<t?t-h:h-t),u,v-1)}}}this.c[n]=1,this.B=!1}return this},r.prototype.A=function(a,t,b){if(C(t)){var e=t.length;if(e--){for(var r=0;r<e;r++)this.A(a,t[r]);return this.A(a,t[e],b)}}else{var n,o=this.a.index,l=this.a.keys,g=this.a.tag;r=this.a.store;var h=this.a.id;e=t;for(var p=0;p<h.length;p++)e=e[h[p]];if("remove"===a&&(delete this.l[e],h=l.length,h--)){for(t=0;t<h;t++)o[l[t]].remove(e);return o[l[h]].remove(e,b)}if(g){for(n=0;n<g.length;n++){var c=g[n],d=t;for(h=c.split(":"),p=0;p<h.length;p++)d=d[h[p]];d="@"+d}n=(n=this.G[c])[d]||(n[d]=[])}for(let u=0,q=(h=this.a.field).length;u<q;u++){for(c=h[u],g=t,d=0;d<c.length;d++)g=g[c[d]];c=o[l[u]],d="add"===a?c.add:c.update,u===q-1?d.call(c,e,g,b):d.call(c,e,g)}if(r){for(b=Object.keys(r),a=M(),o=0;o<b.length;o++)if(r[l=b[o]]){let u,q;for(l=l.split(":"),h=0;h<l.length;h++)u=(u||t)[g=l[h]],q=(q||a)[g]=u}t=a}n&&(n[n.length]=t),this.l[e]=t}return this},r.prototype.update=function(a,t,b){return this.a&&j(a)?this.A("update",a,t):(this.c["@"+a]&&U(t)&&(this.remove(a),this.add(a,t,b,!0)),this)},r.prototype.remove=function(a,t,b){if(this.a&&j(a))return this.A("remove",a,t);var e="@"+a;if(this.c[e]){if(this.g)return this.m[this.c[e]].postMessage({remove:!0,id:a}),delete this.c[e],t&&t(),this;if(!b){if(this.async&&"function"!=typeof importScripts){let r=this;return e=new Promise((function(t){setTimeout((function(){r.remove(a,null,!0),r=null,t()}))})),t?(e.then(t),this):e}if(t)return this.remove(a,null,!0),t(),this}for(t=0;t<this.b-(this.threshold||0);t++)v(this.i[t],a);this.depth&&v(this.h,a),delete this.c[e],this.B=!1}return this},r.prototype.search=function(a,t,b,e){if(j(t)){if(C(t))for(var r=0;r<t.length;r++)t[r].query=a;else t.query=a;a=t,t=1e3}else t&&I(t)?(b=t,t=1e3):t||0===t||(t=1e3);if(!this.g){var n=[],g=a;if(j(a)&&!C(a)){b||(b=a.callback)&&(g.callback=null);var o=a.sort,c=a.page;t=a.limit,m=a.threshold;var p=a.suggest;a=a.query}if(this.a){m=this.a.index;const l=g.where;var d=g.bool||"or",f=g.field;let x,v,w=d;if(f)C(f)||(f=[f]);else if(C(g)){var u=g;f=[],w=[];for(var q=0;q<g.length;q++)r=(e=g[q]).bool||d,f[q]=e.field,w[q]=r,"not"===r?x=!0:"and"===r&&(v=!0)}else f=this.a.keys;for(d=f.length,q=0;q<d;q++)u&&(g=u[q]),c&&!U(g)&&(g.page=null,g.limit=0),n[q]=m[f[q]].search(g,0);if(b)return b(h.call(this,a,w,n,o,t,p,l,c,v,x));if(this.async){const e=this;return new Promise((function(r){Promise.all(n).then((function(n){r(h.call(e,a,w,n,o,t,p,l,c,v,x))}))}))}return h.call(this,a,w,n,o,t,p,l,c,v,x)}if(m||(m=this.threshold||0),!e){if(this.async&&"function"!=typeof importScripts){let e=this;return m=new Promise((function(r){setTimeout((function(){r(e.search(g,t,null,!0)),e=null}))})),b?(m.then(b),this):m}if(b)return b(this.search(g,t,null,!0)),this}if(!a||!U(a))return n;if(g=a,this.cache)if(this.B){if(b=this.j.get(a))return b}else this.j.clear(),this.B=!0;if(!(g=this.encode(g)).length)return n;b=I(b=this.f)?b(g):g.split(this.split),this.filter&&(b=l(b,this.filter)),u=b.length,e=!0,r=[];var x=M(),v=0;if(1<u&&(this.depth&&"strict"===this.f?d=!0:b.sort(w)),!d||(q=this.h)){const t=this.b;for(;v<u;v++){let o=b[v];if(o){if(d){if(!f)if(q[o])f=o,x[o]=1;else if(!p)return n;if(p&&v===u-1&&!r.length)d=!1,o=f||o,x[o]=0;else if(!f)continue}if(!x[o]){const n=[];let l=!1,h=0;const c=d?q[f]:this.i;if(c){let e;for(let r=0;r<t-m;r++)(e=c[r]&&c[r][o])&&(n[h++]=e,l=!0)}if(l)f=o,r[r.length]=1<h?n.concat.apply([],n):n[0];else if(!p){e=!1;break}x[o]=1}}}}else e=!1;return e&&(n=A(r,t,c,p)),this.cache&&this.j.set(a,n),n}this.F=b,this.u=0,this.o=[];for(var m=0;m<this.g;m++)this.m[m].postMessage({search:!0,limit:t,content:a})},r.prototype.find=function(a,t){return this.where(a,t,1)[0]||null},r.prototype.where=function(a,t,b,e){const r=this.l,n=[];let g,o=0;var l;let h;if(j(a)){b||(b=t);var p=Object.keys(a),c=p.length;if(g=!1,1===c&&"id"===p[0])return[r[a.id]];if((l=this.I)&&!e)for(var d=0;d<l.length;d++){var u=l[d],q=a[u];if(!L(q)){if(h=this.G[u]["@"+q],0==--c)return h;p.splice(p.indexOf(u),1),delete a[u];break}}for(l=Array(c),d=0;d<c;d++)l[d]=p[d].split(":")}else{if(I(a)){for(b=(t=e||Object.keys(r)).length,p=0;p<b;p++)a(c=r[t[p]])&&(n[o++]=c);return n}if(L(t))return[r[a]];if("id"===a)return[r[t]];p=[a],c=1,l=[a.split(":")],g=!0}for(d=(e=h||e||Object.keys(r)).length,u=0;u<d;u++){q=h?e[u]:r[e[u]];let d=!0;for(let e=0;e<c;e++){g||(t=a[p[e]]);const r=l[e],n=r.length;let o=q;if(1<n)for(let t=0;t<n;t++)o=o[r[t]];else o=o[r[0]];if(o!==t){d=!1;break}}if(d&&(n[o++]=q,b&&o===b))break}return n},r.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:P.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let a=0;a<this.g;a++)this.m[a].postMessage({info:!0,id:this.id})},r.prototype.clear=function(){return this.destroy().init()},r.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const a=this.a.keys;for(let t=0;t<a.length;t++)this.a.index[a[t]].destroy();this.a=this.l=null}return this},r.prototype.export=function(a){const t=!a||L(a.serialize)||a.serialize;if(this.a){const t=!a||L(a.doc)||a.doc;var b=!a||L(a.index)||a.index;a=[];let e=0;if(b)for(b=this.a.keys;e<b.length;e++){const t=this.a.index[b[e]];a[e]=[t.i,t.h,Object.keys(t.c)]}t&&(a[e]=this.l)}else a=[this.i,this.h,Object.keys(this.c)];return t&&(a=JSON.stringify(a)),a},r.prototype.import=function(a,t){(!t||L(t.serialize)||t.serialize)&&(a=JSON.parse(a));const b=M();if(this.a){var e=!t||L(t.doc)||t.doc,r=0;if(!t||L(t.index)||t.index){const e=(t=this.a.keys).length;for(var n=a[0][2];r<n.length;r++)b[n[r]]=1;for(r=0;r<e;r++){n=this.a.index[t[r]];const g=a[r];g&&(n.i=g[0],n.h=g[1],n.c=b)}}e&&(this.l=j(e)?e:a[r])}else{for(e=a[2],r=0;r<e.length;r++)b[e[r]]=1;this.i=a[0],this.h=a[1],this.c=b}};const B=function(){const a=d("\\s+"),t=d("[^a-z0-9 ]"),b=[d("[-/]")," ",t,"",a," "];return function(t){return m(f(t.toLowerCase(),b))}}(),$={icase:function(a){return a.toLowerCase()},simple:function(){const a=d("\\s+"),t=d("[^a-z0-9 ]"),b=d("[-/]"),u=[d("[àáâãäå]"),"a",d("[èéêë]"),"e",d("[ìíîï]"),"i",d("[òóôõöő]"),"o",d("[ùúûüű]"),"u",d("[ýŷÿ]"),"y",d("ñ"),"n",d("[çc]"),"k",d("ß"),"s",d(" & ")," and ",b," ",t,"",a," "];return function(q){return" "===(q=f(q.toLowerCase(),u))?"":q}}(),advanced:function(){const a=d("ae"),t=d("ai"),b=d("ay"),e=d("ey"),r=d("oe"),n=d("ue"),o=d("ie"),g=d("sz"),l=d("zs"),h=d("ck"),p=d("cc"),c=[a,"a",t,"ei",b,"ei",e,"ei",r,"o",n,"u",o,"i",g,"s",l,"s",d("sh"),"s",h,"k",p,"k",d("th"),"t",d("dt"),"t",d("ph"),"f",d("pf"),"f",d("ou"),"o",d("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=f(t,c)),e||1<t.length&&(t=m(t)),t):t}}(),extra:function(){const g=[d("p"),"b",d("z"),"s",d("[cgq]"),"k",d("n"),"m",d("d"),"t",d("[vw]"),"f",d("[aeiouy]"),""];return function(t){if(!t)return t;if(1<(t=this.advanced(t,!0)).length){t=t.split(" ");for(let e=0;e<t.length;e++){const p=t[e];1<p.length&&(t[e]=p[0]+f(p.substring(1),g))}t=m(t=t.join(" "))}return t}}(),balance:B},H=function(){function a(t){this.clear(),this.H=!0!==t&&t}return a.prototype.clear=function(){this.cache=M(),this.count=M(),this.index=M(),this.s=[]},a.prototype.set=function(t,b){if(this.H&&L(this.cache[t])){let e=this.s.length;if(e===this.H){e--;const t=this.s[e];delete this.cache[t],delete this.count[t],delete this.index[t]}this.index[t]=e,this.s[e]=t,this.count[t]=-1,this.cache[t]=b,this.get(t)}else this.cache[t]=b},a.prototype.get=function(t){const b=this.cache[t];if(this.H&&b){var e=++this.count[t];const n=this.index;let o=n[t];if(0<o){const g=this.s;for(var r=o;this.count[g[--o]]<=e&&-1!==o;);if(o++,o!==r){for(e=r;e>o;e--)r=g[e-1],g[e]=r,n[r]=e;g[o]=t,n[t]=o}}}return b},a}();return r}(function(){const t={},e="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(r,n,o,l,h){return o=e?URL.createObjectURL(new Blob(["("+o.toString()+")()"],{type:"text/javascript"})):r+".min.js",t[r+="-"+n]||(t[r]=[]),t[r][h]=new Worker(o),t[r][h].onmessage=l,t[r][h]}}()),this)},186:function(t,e,r){"use strict";r(179)},187:function(t,e,r){var n=r(32)(!1);n.push([t.i,".b-tutorial__links__item[data-v-4d97607a]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item[data-v-4d97607a]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item .fas[data-v-4d97607a]{margin-right:5px}.b-tutorial__links__item--active[data-v-4d97607a]{border:1px solid;border-radius:3px;text-align:center;color:var(--secondary-color);justify-content:center}.b-tutorial__links__item--active-with-children[data-v-4d97607a]{justify-content:unset}.b-links--ischild[data-v-4d97607a]{margin-left:15px}",""]),t.exports=n},188:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"isDeposited",url:"is-deposited"},{text:"depositEther",url:"deposit-ether"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawConfirm",url:"withdraw-confirm"},{text:"withdrawConfirmFaster",url:"withdraw-confirm-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawConfirm",url:"withdraw-confirm"},{text:"withdrawConfirmFaster",url:"withdraw-confirm-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isDeposited",url:"is-deposited"},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"},{text:"depositEther",url:"deposit-ether"}]},{text:"FxPortal",url:"fx-portal"},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"},{text:"ExitUtil",url:"exit-util"}]}]},189:function(t,e,r){"use strict";r(180)},190:function(t,e,r){var n=r(32)(!1);n.push([t.i,".b-tutorial[data-v-79c9a5ec]{padding:10px 10px 0}.b-tutorial__links[data-v-79c9a5ec]{box-sizing:border-box;padding:20px 30px 30px 0;border-right:1px solid #e9ecef;position:fixed;top:4rem;z-index:1100;height:calc(100vh - 4rem);overflow-y:scroll;background-color:#fff;transform:translateX(-100%);transition:.3s ease;max-width:260px}.b-tutorial__links.show[data-v-79c9a5ec]{transform:translateX(0)}.b-tutorial__links[data-v-79c9a5ec]::-webkit-scrollbar{width:3px}.b-tutorial__links[data-v-79c9a5ec]::-webkit-scrollbar-thumb{background:#e4dddd}@media (min-width:768px){.b-tutorial__links[data-v-79c9a5ec]{position:sticky}}.b-tutorial__content[data-v-79c9a5ec]{padding:15px 5px;overflow-x:hidden}@media (min-width:768px){.b-tutorial__content[data-v-79c9a5ec]{padding:20px 40px}}.b-tutorial__content__btns[data-v-79c9a5ec]{display:flex;justify-content:space-between;font-size:2rem;margin-top:30px;margin-bottom:20px}.b-tutorial__content__btns i[data-v-79c9a5ec]{cursor:pointer}.b-tutorial__sticky-btn[data-v-79c9a5ec]{position:fixed;right:10px;bottom:10px;display:flex;flex-direction:column;z-index:1000}.b-tutorial__sticky-btn a[data-v-79c9a5ec]{width:56px;height:56px;border-radius:50%;margin-bottom:10px;padding:0;display:flex;justify-content:center;align-items:center;font-size:20px}.ad-container[data-v-79c9a5ec]{text-align:center;border:1px solid;display:flex;flex-direction:column;padding:5px;cursor:pointer}.b-tutorial__links__search[data-v-79c9a5ec]{padding:5px;max-width:100%;margin-bottom:20px}.b-tutorial__links__item[data-v-79c9a5ec],.b-tutorial__links__search-result a[data-v-79c9a5ec]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item[data-v-79c9a5ec]:hover,.b-tutorial__links__search-result a[data-v-79c9a5ec]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item .fas[data-v-79c9a5ec],.b-tutorial__links__search-result a .fas[data-v-79c9a5ec]{margin-right:5px}",""]),t.exports=n}}]);