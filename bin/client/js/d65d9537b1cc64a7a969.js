(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{23:function(r,e,t){"use strict";var n=t(5).clone,a=t(2).validateIndex,i=t(14).getSafeProperty,o=t(14).setSafeProperty,s=t(12);function u(r,e){if(1!==e.size().length)throw new s(e.size(),1);var t=e.dimension(0);if("string"!=typeof t)throw new TypeError("String expected as index to retrieve an object property");return i(r,t)}function f(r,e,t){if(1!==e.size().length)throw new s(e.size(),1);var a=e.dimension(0);if("string"!=typeof a)throw new TypeError("String expected as index to retrieve an object property");var i=n(r);return o(i,a,t),i}e.name="subset",e.factory=function(r,e,i,o){var c=i(t(1)),v=o("subset",{"Array, Index":function(r,e){var t=c(r).subset(e);return e.isScalar()?t:t.valueOf()},"Matrix, Index":function(r,e){return r.subset(e)},"Object, Index":u,"string, Index":function(e,t){if(!r.isIndex(t))throw new TypeError("Index expected");if(1!==t.size().length)throw new s(t.size().length,1);var n=e.length;a(t.min()[0],n),a(t.max()[0],n);var i=t.dimension(0),o="";return i.forEach(function(r){o+=e.charAt(r)}),o},"Array, Index, any":function(r,e,t){return c(n(r)).subset(e,t,void 0).valueOf()},"Array, Index, any, any":function(r,e,t,a){return c(n(r)).subset(e,t,a).valueOf()},"Matrix, Index, any":function(r,e,t){return r.clone().subset(e,t)},"Matrix, Index, any, any":function(r,e,t,n){return r.clone().subset(e,t,n)},"string, Index, string":h,"string, Index, string, string":h,"Object, Index, any":f});return v.toTex=void 0,v;function h(r,e,t,n){if(!e||!0!==e.isIndex)throw new TypeError("Index expected");if(1!==e.size().length)throw new s(e.size().length,1);if(void 0!==n){if("string"!=typeof n||1!==n.length)throw new TypeError("Single character expected as defaultValue")}else n=" ";var i=e.dimension(0);if(i.size()[0]!==t.length)throw new s(i.size()[0],t.length);var o=r.length;a(e.min()[0]),a(e.max()[0]);for(var u=[],f=0;f<o;f++)u[f]=r.charAt(f);if(i.forEach(function(r,e){u[r]=t.charAt(e[0])}),u.length>o)for(var c=o-1,v=u.length;c<v;c++)u[c]||(u[c]=n);return u.join("")}}},313:function(r,e,t){"use strict";var n=t(5).clone,a=t(9).format;e.name="trace",e.factory=function(r,e,i,o){var s=i(t(1)),u=i(t(15)),f=o("trace",{Array:function(r){return c(s(r))},SparseMatrix:function(r){var e=r._values,t=r._index,n=r._ptr,i=r._size,o=i[0],s=i[1];if(o===s){var f=0;if(e.length>0)for(var c=0;c<s;c++)for(var v=n[c],h=n[c+1],d=v;d<h;d++){var g=t[d];if(g===c){f=u(f,e[d]);break}if(g>c)break}return f}throw new RangeError("Matrix must be square (size: "+a(i)+")")},DenseMatrix:c,any:n});function c(r){var e=r._size,t=r._data;switch(e.length){case 1:if(1===e[0])return n(t[0]);throw new RangeError("Matrix must be square (size: "+a(e)+")");case 2:var i=e[0];if(i===e[1]){for(var o=0,s=0;s<i;s++)o=u(o,t[s][s]);return o}throw new RangeError("Matrix must be square (size: "+a(e)+")");default:throw new RangeError("Matrix must be two dimensional (size: "+a(e)+")")}}return f.toTex={1:"\\mathrm{tr}\\left(${args[0]}\\right)"},f}},45:function(r,e,t){"use strict";var n=t(3).isInteger,a=t(2).resize;e.name="zeros",e.factory=function(r,e,i,o){var s=i(t(1)),u=o("zeros",{"":function(){return"Array"===e.matrix?f([]):f([],"default")},"...number | BigNumber | string":function(r){if("string"==typeof r[r.length-1]){var t=r.pop();return f(r,t)}return"Array"===e.matrix?f(r):f(r,"default")},Array:f,Matrix:function(r){var e=r.storage();return f(r.valueOf(),e)},"Array | Matrix, string":function(r,e){return f(r.valueOf(),e)}});return u.toTex=void 0,u;function f(e,t){var i=function(e){var t=!1;return e.forEach(function(e,n,a){r.isBigNumber(e)&&(t=!0,a[n]=e.toNumber())}),t}(e)?new r.BigNumber(0):0;if(function(r){r.forEach(function(r){if("number"!=typeof r||!n(r)||r<0)throw new Error("Parameters in function zeros must be positive integers")})}(e),t){var o=s(t);return e.length>0?o.resize(e,i):o}var u=[];return e.length>0?a(u,e,i):u}}},78:function(r,e,t){"use strict";var n=t(5).clone,a=t(9).format;e.name="transpose",e.factory=function(r,e,i,o){var s=t(4),u=i(t(1)),f=r.DenseMatrix,c=r.SparseMatrix,v=o("transpose",{Array:function(r){return v(u(r)).valueOf()},Matrix:function(r){var e,t=r.size();switch(t.length){case 1:e=r.clone();break;case 2:var i=t[0],o=t[1];if(0===o)throw new RangeError("Cannot transpose a 2D matrix with no columns (size: "+a(t)+")");switch(r.storage()){case"dense":e=function(r,e,t){for(var a,i=r._data,o=[],s=0;s<t;s++){a=o[s]=[];for(var u=0;u<e;u++)a[u]=n(i[u][s])}return new f({data:o,size:[t,e],datatype:r._datatype})}(r,i,o);break;case"sparse":e=function(r,e,t){for(var a,i,o,s=r._values,u=r._index,f=r._ptr,v=s?[]:void 0,h=[],d=[],g=[],l=0;l<e;l++)g[l]=0;for(a=0,i=u.length;a<i;a++)g[u[a]]++;for(var x=0,w=0;w<e;w++)d.push(x),x+=g[w],g[w]=d[w];for(d.push(x),o=0;o<t;o++)for(var p=f[o],y=f[o+1],m=p;m<y;m++){var b=g[u[m]]++;h[b]=o,s&&(v[b]=n(s[m]))}return new c({values:v,index:h,ptr:d,size:[t,e],datatype:r._datatype})}(r,i,o)}break;default:throw new RangeError("Matrix must be a vector or two dimensional (size: "+a(this._size)+")")}return e},any:function(r){return n(r)}});return v.toTex={1:"\\left(${args[0]}\\right)".concat(s.operators.transpose)},v}}}]);