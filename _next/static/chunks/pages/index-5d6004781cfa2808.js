(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8045:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,l=void 0!==o&&o,d=e.priority,f=void 0!==d&&d,g=e.loading,v=e.lazyBoundary,w=void 0===v?"200px":v,x=e.className,j=e.quality,_=e.width,A=e.height,z=e.objectFit,E=e.objectPosition,N=e.onLoadingComplete,I=e.loader,P=void 0===I?S:I,L=e.placeholder,D=void 0===L?"empty":L,R=e.blurDataURL,q=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(C=q.layout),delete q.layout);var H="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var M=b(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(R=R||M.blurDataURL,H=M.src,(!C||"fill"!==C)&&(A=A||M.height,_=_||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:H;var T=O(_),W=O(A),B=O(j),U=!f&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,U=!1);h.has(t)&&(U=!1);0;var V,F=i(u.useIntersection({rootMargin:w,disabled:!U}),2),G=F[0],Q=F[1],J=!U||Q,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:E},$="blur"===D?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:E||"0% 0%"}:{};if("fill"===C)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof T&&"undefined"!==typeof W){var ee=W/T,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===C?(X.display="block",X.position="relative",Y=!0,K.paddingTop=te):"intrinsic"===C?(X.display="inline-block",X.position="relative",X.maxWidth="100%",Y=!0,K.maxWidth="100%",V='<svg width="'.concat(T,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(X.display="inline-block",X.position="relative",X.width=T,X.height=W)}else 0;var ne={src:p,srcSet:void 0,sizes:void 0};J&&(ne=k({src:t,unoptimized:l,layout:C,width:T,quality:B,sizes:n,loader:P}));var re=t;0;0;var ie=(r(y={},"imagesrcset",ne.srcSet),r(y,"imagesizes",ne.sizes),y);return a.default.createElement("span",{style:X},Y?a.default.createElement("span",{style:K},V?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(V))}):null):null,a.default.createElement("img",Object.assign({},q,ne,{decoding:"async","data-nimg":C,className:x,ref:function(e){G(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==p&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,re,0,D,N)},style:m({},Z,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},q,k({src:t,unoptimized:l,layout:C,width:T,quality:B,sizes:n,loader:P}),{decoding:"async","data-nimg":C,style:Z,className:x,loading:g||"lazy"}))),f?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},ie))):null)};var a=f(n(7294)),c=f(n(5443)),s=n(6978),l=n(5809),u=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){d(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var y,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://pankornch.github.io/",loader:"imgix"}||l.imageConfigDefault,w=v.deviceSizes,x=v.imageSizes,j=v.loader,_=v.path,A=(v.domains,o(w).concat(o(x)));function k(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c,s=.01*(c=Math).min.apply(c,o(a));return{widths:A.filter((function(e){return e>=w[0]*s})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(i,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=g.get(j);if(t)return t(m({root:_},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(j))}function z(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=i.useRef(),l=r(i.useState(!1),2),u=l[0],d=l[1],f=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5075:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(9008),o=n(5675),a=n(214),c=n.n(a);t.default=function(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:c().code,children:"pages/index.tsx"})]}),(0,r.jsxs)("div",{className:c().grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,r.jsx)("h2",{children:"Documentation \u2192"}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,r.jsx)("h2",{children:"Learn \u2192"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:c().card,children:[(0,r.jsx)("h2",{children:"Examples \u2192"}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,r.jsx)("h2",{children:"Deploy \u2192"}),(0,r.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:c().footer,children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:c().logo,children:(0,r.jsx)(o.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);