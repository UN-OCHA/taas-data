/*!
 * modernizr v3.7.1
 * Build https://modernizr.com/download?-flexbox-mediaqueries-supports-svg-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */
!function(s,p,c){var l=[],e={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){l.push({name:e,fn:t,options:n})},addAsyncTest:function(e){l.push({name:null,fn:e})}},a=function(){};a.prototype=e,a=new a;var u=[];function m(e,t){return typeof e===t}var y=p.documentElement,v="svg"===y.nodeName.toLowerCase();var t="Moz O ms Webkit",f=e._config.usePrefixes?t.split(" "):[];function h(){return"function"!=typeof p.createElement?p.createElement(arguments[0]):v?p.createElementNS.call(p,"http://www.w3.org/2000/svg",arguments[0]):p.createElement.apply(p,arguments)}e._cssomPrefixes=f;var n={elem:h("modernizr")};a._q.push(function(){delete n.elem});var g={style:n.elem.style};function o(e,t,n,r){var o,s,i,l,a,u="modernizr",f=h("div"),d=((a=p.body)||((a=h(v?"svg":"body")).fake=!0),a);if(parseInt(n,10))for(;n--;)(i=h("div")).id=r?r[n]:u+(n+1),f.appendChild(i);return(o=h("style")).type="text/css",o.id="s"+u,(d.fake?d:f).appendChild(o),d.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(p.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",l=y.style.overflow,y.style.overflow="hidden",y.appendChild(d)),s=t(f,e),d.fake?(d.parentNode.removeChild(d),y.style.overflow=l,y.offsetHeight):f.parentNode.removeChild(f),!!s}function i(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function S(e,t){var n=e.length;if("CSS"in s&&"supports"in s.CSS){for(;n--;)if(s.CSS.supports(i(e[n]),t))return!0;return!1}if("CSSSupportsRule"in s){for(var r=[];n--;)r.push("("+i(e[n])+":"+t+")");return o("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var r;if("getComputedStyle"in s){r=getComputedStyle.call(s,e,t);var o=s.console;null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return c}a._q.unshift(function(){delete g.style});var d=e._config.usePrefixes?t.toLowerCase().split(" "):[];function C(e,t){return function(){return e.apply(t,arguments)}}function r(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+f.join(s+" ")+s).split(" ");return m(t,"string")||m(t,"undefined")?function(e,t,n,r){if(r=!m(r,"undefined")&&r,!m(n,"undefined")){var o=S(e,n);if(!m(o,"undefined"))return o}for(var s,i,l,a,u,f=["modernizr","tspan","samp"];!g.style&&f.length;)s=!0,g.modElem=h(f.shift()),g.style=g.modElem.style;function d(){s&&(delete g.style,delete g.modElem)}for(l=e.length,i=0;i<l;i++)if(a=e[i],u=g.style[a],~(""+a).indexOf("-")&&(a=a.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),g.style[a]!==c){if(r||m(n,"undefined"))return d(),"pfx"!==t||a;try{g.style[a]=n}catch(e){}if(g.style[a]!==u)return d(),"pfx"!==t||a}return d(),!1}(i,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:m(r=t[e[o]],"function")?C(r,n||t):r;return!1}(i=(e+" "+d.join(s+" ")+s).split(" "),t,n)}function w(e,t,n){return r(e,c,c,t,n)}e._domPrefixes=d,e.testAllProps=r,e.testAllProps=w,
/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "https://www.w3.org/TR/css-flexbox-1/"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
a.addTest("flexbox",w("flexBasis","1px",!0));var x,b=(x=s.matchMedia||s.msMatchMedia)?function(e){var t=x(e);return t&&t.matches||!1}:function(e){var t=!1;return o("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===(s.getComputedStyle?s.getComputedStyle(e,null):e.currentStyle).position}),t};e.mq=b,
/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
a.addTest("mediaqueries",b("only all")),
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
a.addTest("svg",!!p.createElementNS&&!!p.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3C Spec",
    "href": "https://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var T="CSS"in s&&"supports"in s.CSS,_="supportsCSS"in s;a.addTest("supports",T||_),function(){var e,t,n,r,o,s;for(var i in l)if(l.hasOwnProperty(i)){if(e=[],(t=l[i]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=m(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(s=e[o].split(".")).length?a[s[0]]=r:(!a[s[0]]||a[s[0]]instanceof Boolean||(a[s[0]]=new Boolean(a[s[0]])),a[s[0]][s[1]]=r),u.push((r?"":"no-")+s.join("-"))}}(),delete e.addTest,delete e.addAsyncTest;for(var z=0;z<a._q.length;z++)a._q[z]();s.Modernizr=a}(window,document);