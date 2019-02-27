(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{295:function(r,t,n){"use strict";var e=n(2),i=n(3).isInteger;t.name="diag",t.factory=function(r,t,a,o){var u=a(n(1)),f=o("diag",{Array:function(r){return c(r,0,e.size(r),null)},"Array, number":function(r,t){return c(r,t,e.size(r),null)},"Array, BigNumber":function(r,t){return c(r,t.toNumber(),e.size(r),null)},"Array, string":function(r,t){return c(r,0,e.size(r),t)},"Array, number, string":function(r,t,n){return c(r,t,e.size(r),n)},"Array, BigNumber, string":function(r,t,n){return c(r,t.toNumber(),e.size(r),n)},Matrix:function(r){return c(r,0,r.size(),r.storage())},"Matrix, number":function(r,t){return c(r,t,r.size(),r.storage())},"Matrix, BigNumber":function(r,t){return c(r,t.toNumber(),r.size(),r.storage())},"Matrix, string":function(r,t){return c(r,0,r.size(),t)},"Matrix, number, string":function(r,t,n){return c(r,t,r.size(),n)},"Matrix, BigNumber, string":function(r,t,n){return c(r,t.toNumber(),r.size(),n)}});return f.toTex=void 0,f;function c(t,n,e,a){if(!i(n))throw new TypeError("Second parameter in function diag must be an integer");var o=n>0?n:0,f=n<0?-n:0;switch(e.length){case 1:return function(t,n,e,i,a,o){var u=[i+a,i+o],f=r.Matrix.storage(e||"dense").diagonal(u,t,n);return null!==e?f:f.valueOf()}(t,n,a,e[0],f,o);case 2:return function(t,n,e,i,a,o){if(r.isMatrix(t)){var f=t.diagonal(n);return null!==e?e!==f.storage()?u(f,e):f:f.valueOf()}for(var c=Math.min(i[0]-a,i[1]-o),s=[],g=0;g<c;g++)s[g]=t[g+a][g+o];return null!==e?u(s):s}(t,n,a,e,f,o)}throw new RangeError("Matrix for function diag must be 2 dimensional")}}},296:function(r,t,n){"use strict";var e=n(2).size;t.name="dot",t.factory=function(r,t,i,a){var o=i(n(15)),u=i(n(10)),f=a("dot",{"Matrix, Matrix":function(r,t){return c(r.toArray(),t.toArray())},"Matrix, Array":function(r,t){return c(r.toArray(),t)},"Array, Matrix":function(r,t){return c(r,t.toArray())},"Array, Array":c});return f.toTex={2:"\\left(${args[0]}\\cdot${args[1]}\\right)"},f;function c(r,t){var n=e(r),i=e(t),a=n[0];if(1!==n.length||1!==i.length)throw new RangeError("Vector expected");if(n[0]!==i[0])throw new RangeError("Vectors must have equal length ("+n[0]+" != "+i[0]+")");if(0===a)throw new RangeError("Cannot calculate the dot product of empty vectors");for(var f=0,c=0;c<a;c++)f=o(f,u(r[c],t[c]));return f}}},297:function(r,t,n){"use strict";t.name="eye",t.factory=function(r,t,n,e){return function(){throw new Error('Function "eye" is renamed to "identity" since mathjs version 5.0.0. To keep eye working, create an alias for it using "math.import({eye: math.identity}, {override: true})"')}}},298:function(r,t,n){"use strict";var e=n(9).format;t.name="expm",t.factory=function(r,t,i,a){var o=i(n(24)),u=i(n(15)),f=i(n(53)),c=i(n(76)),s=i(n(10)),g=r.SparseMatrix,m=a("expm",{Matrix:function(t){var n=t.size();if(2!==n.length||n[0]!==n[1])throw new RangeError("Matrix must be square (size: "+e(n)+")");for(var i=n[0],a=function(r,t){for(var n=0;n<30;n++)for(var e=0;e<=n;e++){var i=n-e;if(v(r,e,i)<t)return{q:e,j:i}}throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)")}(function(r){for(var t=r.size()[0],n=0,e=0;e<t;e++){for(var i=0,a=0;a<t;a++)i+=o(r.get([e,a]));n=Math.max(i,n)}return n}(t),1e-15),m=a.q,x=a.j,l=s(t,Math.pow(2,-x)),y=f(i),h=f(i),p=1,w=l,d=-1,M=1;M<=m;M++)M>1&&(w=s(w,l),d=-d),y=u(y,s(p=p*(m-M+1)/((2*m-M+1)*M),w)),h=u(h,s(p*d,w));for(var A=s(c(h),y),b=0;b<x;b++)A=s(A,A);return r.isSparseMatrix(t)?new g(A):A}});function v(r,t,n){for(var e=1,i=2;i<=t;i++)e*=i;for(var a=e,o=t+1;o<=2*t;o++)a*=o;var u=a*(2*t+1);return 8*Math.pow(r/Math.pow(2,n),2*t)*e*e/(a*u)}return m.toTex={1:"\\exp\\left(${args[0]}\\right)"},m}},299:function(r,t,n){"use strict";var e=n(2).filter,i=n(2).filterRegExp,a=n(34).maxArgumentCount;function o(r,t){var n=a(t);return e(r,function(r,e,i){return 1===n?t(r):2===n?t(r,[e]):t(r,[e],i)})}t.name="filter",t.factory=function(r,t,e,a){var u=e(n(1)),f=a("filter",{"Array, function":o,"Matrix, function":function(r,t){return u(o(r.toArray(),t))},"Array, RegExp":i,"Matrix, RegExp":function(r,t){return u(i(r.toArray(),t))}});return f.toTex=void 0,f}},300:function(r,t,n){"use strict";var e=n(5).clone,i=n(2).flatten;t.name="flatten",t.factory=function(r,t,a,o){var u=a(n(1)),f=o("flatten",{Array:function(r){return i(e(r))},Matrix:function(r){var t=i(e(r.toArray()));return u(t)}});return f.toTex=void 0,f}},301:function(r,t,n){"use strict";var e=n(34).maxArgumentCount,i=n(2).forEach;function a(r,t){var n=e(t);!function e(a,o){Array.isArray(a)?i(a,function(r,t){e(r,o.concat(t))}):1===n?t(a):2===n?t(a,o):t(a,o,r)}(r,[])}t.name="forEach",t.factory=function(r,t,n,e){var i=e("forEach",{"Array, function":a,"Matrix, function":function(r,t){return r.forEach(t)}});return i.toTex=void 0,i}}}]);