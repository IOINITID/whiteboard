/*! For license information please see 633.e956d26c.js.LICENSE.txt */
(self.webpackChunkwhiteboard=self.webpackChunkwhiteboard||[]).push([["633"],{4697:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t("6166"),a=t("2180"),i=function(e,r,t){for(var n=0,i=0;n=i,i=(0,a.peek)(),38===n&&12===i&&(r[t]=1),!(0,a.token)(i);){;(0,a.next)()}return(0,a.slice)(e,a.position)},c=function(e,r){var t=-1,n=44;do switch((0,a.token)(n)){case 0:38===n&&12===(0,a.peek)()&&(r[t]=1),e[t]+=i(a.position-1,r,t);break;case 2:e[t]+=(0,a.delimit)(n);break;case 4:if(44===n){e[++t]=58===(0,a.peek)()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=(0,a.from)(n)}while(n=(0,a.next)());return e},s=new WeakMap,u=function(e){if("rule"!==e.type||!e.parent||e.length<1)return;for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if(1!==e.props.length||58===r.charCodeAt(0)||!!s.get(t)){if(!n){s.set(e,!0);var i,u,o=[];for(var l=(i=r,u=o,(0,a.dealloc)(c((0,a.alloc)(i),u))),f=t.props,d=0,h=0;d<l.length;d++)for(var p=0;p<f.length;p++,h++)e.props[h]=o[d]?l[d].replace(/&\f/g,f[p]):f[p]+" "+l[d]}}},o=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}},l=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case a.DECLARATION:e.return=function e(r,t){switch((0,a.hash)(r,t)){case 5103:return a.WEBKIT+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a.WEBKIT+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return a.WEBKIT+r+a.MOZ+r+a.MS+r+r;case 6828:case 4268:return a.WEBKIT+r+a.MS+r+r;case 6165:return a.WEBKIT+r+a.MS+"flex-"+r+r;case 5187:return a.WEBKIT+r+(0,a.replace)(r,/(\w+).+(:[^]+)/,a.WEBKIT+"box-$1$2"+a.MS+"flex-$1$2")+r;case 5443:return a.WEBKIT+r+a.MS+"flex-item-"+(0,a.replace)(r,/flex-|-self/,"")+r;case 4675:return a.WEBKIT+r+a.MS+"flex-line-pack"+(0,a.replace)(r,/align-content|flex-|-self/,"")+r;case 5548:return a.WEBKIT+r+a.MS+(0,a.replace)(r,"shrink","negative")+r;case 5292:return a.WEBKIT+r+a.MS+(0,a.replace)(r,"basis","preferred-size")+r;case 6060:return a.WEBKIT+"box-"+(0,a.replace)(r,"-grow","")+a.WEBKIT+r+a.MS+(0,a.replace)(r,"grow","positive")+r;case 4554:return a.WEBKIT+(0,a.replace)(r,/([^-])(transform)/g,"$1"+a.WEBKIT+"$2")+r;case 6187:return(0,a.replace)((0,a.replace)((0,a.replace)(r,/(zoom-|grab)/,a.WEBKIT+"$1"),/(image-set)/,a.WEBKIT+"$1"),r,"")+r;case 5495:case 3959:return(0,a.replace)(r,/(image-set\([^]*)/,a.WEBKIT+"$1$`$1");case 4968:return(0,a.replace)((0,a.replace)(r,/(.+:)(flex-)?(.*)/,a.WEBKIT+"box-pack:$3"+a.MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a.WEBKIT+r+r;case 4095:case 3583:case 4068:case 2532:return(0,a.replace)(r,/(.+)-inline(.+)/,a.WEBKIT+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if((0,a.strlen)(r)-1-t>6)switch((0,a.charat)(r,t+1)){case 109:if(45!==(0,a.charat)(r,t+4))break;case 102:return(0,a.replace)(r,/(.+:)(.+)-([^]+)/,"$1"+a.WEBKIT+"$2-$3$1"+a.MOZ+(108==(0,a.charat)(r,t+3)?"$3":"$2-$3"))+r;case 115:return~(0,a.indexof)(r,"stretch")?e((0,a.replace)(r,"stretch","fill-available"),t)+r:r}break;case 4949:if(115!==(0,a.charat)(r,t+1))break;case 6444:switch((0,a.charat)(r,(0,a.strlen)(r)-3-(~(0,a.indexof)(r,"!important")&&10))){case 107:return(0,a.replace)(r,":",":"+a.WEBKIT)+r;case 101:return(0,a.replace)(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a.WEBKIT+(45===(0,a.charat)(r,14)?"inline-":"")+"box$3$1"+a.WEBKIT+"$2$3$1"+a.MS+"$2box$3")+r}break;case 5936:switch((0,a.charat)(r,t+11)){case 114:return a.WEBKIT+r+a.MS+(0,a.replace)(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return a.WEBKIT+r+a.MS+(0,a.replace)(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return a.WEBKIT+r+a.MS+(0,a.replace)(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return a.WEBKIT+r+a.MS+r+r}return r}(e.value,e.length);break;case a.KEYFRAMES:return(0,a.serialize)([(0,a.copy)(e,{value:(0,a.replace)(e.value,"@","@"+a.WEBKIT)})],n);case a.RULESET:if(e.length)return(0,a.combine)(e.props,function(r){switch((0,a.match)(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return(0,a.serialize)([(0,a.copy)(e,{props:[(0,a.replace)(r,/:(read-\w+)/,":"+a.MOZ+"$1")]})],n);case"::placeholder":return(0,a.serialize)([(0,a.copy)(e,{props:[(0,a.replace)(r,/:(plac\w+)/,":"+a.WEBKIT+"input-$1")]}),(0,a.copy)(e,{props:[(0,a.replace)(r,/:(plac\w+)/,":"+a.MOZ+"$1")]}),(0,a.copy)(e,{props:[(0,a.replace)(r,/:(plac\w+)/,a.MS+"input-$1")]})],n)}return""})}}],f=function(e){var r,t,i=e.key;if("css"===i){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var s=e.stylisPlugins||l,f={},d=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)f[r[t]]=!0;d.push(e)});var h=[a.stringify,(0,a.rulesheet)(function(e){t.insert(e)})],p=(0,a.middleware)([u,o].concat(s,h)),v={key:i,sheet:new n.StyleSheet({key:i,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:f,registered:{},insert:function(e,r,n,i){var c;t=n,c=e?e+"{"+r.styles+"}":r.styles,(0,a.serialize)((0,a.compile)(c),p),i&&(v.inserted[r.name]=!0)}};return v.sheet.hydrate(d),v}},9206:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t("4697"),a=t("2549"),i=t("444");function c(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function s(e,r,t){var n=[],a=(0,i.getRegisteredStyles)(e,n,t);return n.length<2?t:a+r(n)}var u=function(e){var r=(0,n.default)(e);r.sheet.speedy=function(e){this.isSpeedy=e},r.compat=!0;var t=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var c=(0,a.serializeStyles)(t,r.registered,void 0);return(0,i.insertStyles)(r,c,!1),r.key+"-"+c.name};return{css:t,cx:function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return s(r.registered,t,o(n))},injectGlobal:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=(0,a.serializeStyles)(t,r.registered);c(r,i)},keyframes:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=(0,a.serializeStyles)(t,r.registered),s="animation-"+i.name;return c(r,{name:i.name,styles:"@keyframes "+s+"{"+i.styles+"}"}),s},hydrate:function(e){e.forEach(function(e){r.inserted[e]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:i.getRegisteredStyles.bind(null,r.registered),merge:s.bind(null,r.registered,t)}},o=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var c in i="",a)a[c]&&c&&(i&&(i+=" "),i+=c);break;default:i=a}i&&(t&&(t+=" "),t+=i)}}return t}},7133:function(e,r,t){"use strict";t.r(r),t.d(r,{injectGlobal:function(){return i}});var n=t("9206");t("4697"),t("2549");var a=(0,n.default)({key:"css"}),i=(a.flush,a.hydrate,a.cx,a.merge,a.getRegisteredStyles,a.injectGlobal);a.keyframes,a.css,a.sheet,a.cache},6292:function(e,r,t){"use strict";function n(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}t.r(r),t.d(r,{default:function(){return n}})},5042:function(e,r,t){"use strict";function n(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}t.r(r),t.d(r,{default:function(){return n}})},2549:function(e,r,t){"use strict";t.r(r),t.d(r,{serializeStyles:function(){return v}});var n,a=t("6292"),i=t("4371"),c=t("5042"),s=/[A-Z]|^ms/g,u=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},f=(0,c.default)(function(e){return o(e)?e:e.replace(s,"-$&").toLowerCase()}),d=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(u,function(e,r,t){return n={name:r,styles:t,next:n},r})}return 1===i.default[e]||o(e)||"number"!=typeof r||0===r?r:r+"px"};function h(e,r,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return n={name:t.name,styles:t.styles,next:n},t.name;if(void 0!==t.styles){var a=t.next;if(void 0!==a)for(;void 0!==a;)n={name:a.name,styles:a.styles,next:n},a=a.next;return t.styles+";"}return function(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=h(e,r,t[a])+";";else for(var i in t){var c=t[i];if("object"!=typeof c)null!=r&&void 0!==r[c]?n+=i+"{"+r[c]+"}":l(c)&&(n+=f(i)+":"+d(i,c)+";");else{if(Array.isArray(c)&&"string"==typeof c[0]&&(null==r||void 0===r[c[0]]))for(var s=0;s<c.length;s++)l(c[s])&&(n+=f(i)+":"+d(i,c[s])+";");else{var u=h(e,r,c);switch(i){case"animation":case"animationName":n+=f(i)+":"+u+";";break;default:n+=i+"{"+u+"}"}}}}return n}(e,r,t);case"function":if(void 0!==e){var i=n,c=t(e);return n=i,h(e,r,c)}}if(null==r)return t;var s=r[t];return void 0!==s?s:t}var p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function v(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var i,c=!0,s="";n=void 0;var u=e[0];null==u||void 0===u.raw?(c=!1,s+=h(t,r,u)):s+=u[0];for(var o=1;o<e.length;o++)s+=h(t,r,e[o]),c&&(s+=u[o]);p.lastIndex=0;for(var l="";null!==(i=p.exec(s));)l+="-"+i[1];return{name:(0,a.default)(s)+l,styles:s,next:n}}},6166:function(e,r,t){"use strict";t.r(r),t.d(r,{StyleSheet:function(){return n}});var n=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var r,t;this._insertTag((r=this,(t=document.createElement("style")).setAttribute("data-emotion",r.key),void 0!==r.nonce&&t.setAttribute("nonce",r.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(n);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else n.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach(function(e){var r;return null==(r=e.parentNode)?void 0:r.removeChild(e)}),this.tags=[],this.ctr=0},e}()},4371:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return n}});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},444:function(e,r,t){"use strict";t.r(r),t.d(r,{getRegisteredStyles:function(){return n},insertStyles:function(){return i}});function n(e,r,t){var n="";return t.split(" ").forEach(function(t){void 0!==e[t]?r.push(e[t]+";"):n+=t+" "}),n}var a=function(e,r,t){var n=e.key+"-"+r.name;!1===t&&void 0===e.registered[n]&&(e.registered[n]=r.styles)},i=function(e,r,t){a(e,r,t);var n=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var i=r;do e.insert(r===i?"."+n:"",i,e.sheet,!0),i=i.next;while(void 0!==i)}}},2180:function(e,r,t){"use strict";t.r(r);var n=t("6739");t.es(n,r);var a=t("2034");t.es(a,r);var i=t("8784");t.es(i,r);var c=t("9402");t.es(c,r);var s=t("5329");t.es(s,r);var u=t("9044");t.es(u,r)},6739:function(e,r,t){"use strict";t.r(r),t.d(r,{COMMENT:function(){return c},DECLARATION:function(){return u},IMPORT:function(){return o},KEYFRAMES:function(){return l},LAYER:function(){return f},MOZ:function(){return a},MS:function(){return n},RULESET:function(){return s},WEBKIT:function(){return i}});var n="-ms-",a="-moz-",i="-webkit-",c="comm",s="rule",u="decl",o="@import",l="@keyframes",f="@layer"},9044:function(e,r,t){"use strict";t.r(r),t.d(r,{middleware:function(){return a},rulesheet:function(){return i}});var n=t("2034");function a(e){var r=(0,n.sizeof)(e);return function(t,n,a,i){for(var c="",s=0;s<r;s++)c+=e[s](t,n,a,i)||"";return c}}function i(e){return function(r){!r.root&&(r=r.return)&&e(r)}}},8784:function(e,r,t){"use strict";t.r(r),t.d(r,{compile:function(){return c}});var n=t("6739"),a=t("2034"),i=t("9402");function c(e){return(0,i.dealloc)(function e(r,t,c,o,l,f,d,h,p){for(var v=0,m=0,y=d,g=0,b=0,k=0,E=1,S=1,w=1,x=0,T="",A=l,I=f,C=o,M=T;S;)switch(k=x,x=(0,i.next)()){case 40:if(108!=k&&58==(0,a.charat)(M,y-1)){-1!=(0,a.indexof)(M+=(0,a.replace)((0,i.delimit)(x),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:M+=(0,i.delimit)(x);break;case 9:case 10:case 13:case 32:M+=(0,i.whitespace)(k);break;case 92:M+=(0,i.escaping)((0,i.caret)()-1,7);continue;case 47:switch((0,i.peek)()){case 42:case 47:(0,a.append)(function(e,r,t){return(0,i.node)(e,r,t,n.COMMENT,(0,a.from)((0,i.char)()),(0,a.substr)(e,2,-2),0)}((0,i.commenter)((0,i.next)(),(0,i.caret)()),t,c),p);break;default:M+="/"}break;case 123*E:h[v++]=(0,a.strlen)(M)*w;case 125*E:case 59:case 0:switch(x){case 0:case 125:S=0;case 59+m:-1==w&&(M=(0,a.replace)(M,/\f/g,"")),b>0&&(0,a.strlen)(M)-y&&(0,a.append)(b>32?u(M+";",o,c,y-1):u((0,a.replace)(M," ","")+";",o,c,y-2),p);break;case 59:M+=";";default:if((0,a.append)(C=s(M,t,c,v,m,l,h,T,A=[],I=[],y),f),123===x){if(0===m)e(M,t,C,C,A,f,y,h,I);else switch(99===g&&110===(0,a.charat)(M,3)?100:g){case 100:case 108:case 109:case 115:e(r,C,C,o&&(0,a.append)(s(r,C,C,0,0,l,h,T,l,A=[],y),I),l,I,y,h,o?A:I);break;default:e(M,C,C,C,[""],I,0,h,I)}}}v=m=b=0,E=w=1,T=M="",y=d;break;case 58:y=1+(0,a.strlen)(M),b=k;default:if(E<1){if(123==x)--E;else if(125==x&&0==E++&&125==(0,i.prev)())continue}switch(M+=(0,a.from)(x),x*E){case 38:w=m>0?1:(M+="\f",-1);break;case 44:h[v++]=((0,a.strlen)(M)-1)*w,w=1;break;case 64:45===(0,i.peek)()&&(M+=(0,i.delimit)((0,i.next)())),g=(0,i.peek)(),m=y=(0,a.strlen)(T=M+=(0,i.identifier)((0,i.caret)())),x++;break;case 45:45===k&&2==(0,a.strlen)(M)&&(E=0)}}return f}("",null,null,null,[""],e=(0,i.alloc)(e),0,[0],e))}function s(e,r,t,c,s,u,o,l,f,d,h){for(var p=s-1,v=0===s?u:[""],m=(0,a.sizeof)(v),y=0,g=0,b=0;y<c;++y)for(var k=0,E=(0,a.substr)(e,p+1,p=(0,a.abs)(g=o[y])),S=e;k<m;++k)(S=(0,a.trim)(g>0?v[k]+" "+E:(0,a.replace)(E,/&\f/g,v[k])))&&(f[b++]=S);return(0,i.node)(e,r,t,0===s?n.RULESET:l,f,d,h)}function u(e,r,t,c){return(0,i.node)(e,r,t,n.DECLARATION,(0,a.substr)(e,0,c),(0,a.substr)(e,c+1,-1),c)}},5329:function(e,r,t){"use strict";t.r(r),t.d(r,{serialize:function(){return i},stringify:function(){return c}});var n=t("6739"),a=t("2034");function i(e,r){for(var t="",n=(0,a.sizeof)(e),i=0;i<n;i++)t+=r(e[i],i,e,r)||"";return t}function c(e,r,t,c){switch(e.type){case n.LAYER:if(e.children.length)break;case n.IMPORT:case n.DECLARATION:return e.return=e.return||e.value;case n.COMMENT:return"";case n.KEYFRAMES:return e.return=e.value+"{"+i(e.children,c)+"}";case n.RULESET:e.value=e.props.join(",")}return(0,a.strlen)(t=i(e.children,c))?e.return=e.value+"{"+t+"}":""}},9402:function(e,r,t){"use strict";t.r(r),t.d(r,{alloc:function(){return b},caret:function(){return m},char:function(){return d},commenter:function(){return x},copy:function(){return f},dealloc:function(){return k},delimit:function(){return E},escaping:function(){return w},identifier:function(){return T},next:function(){return p},node:function(){return l},peek:function(){return v},position:function(){return s},prev:function(){return h},slice:function(){return y},token:function(){return g},whitespace:function(){return S}});var n=t("2034"),a=1,i=1,c=0,s=0,u=0,o="";function l(e,r,t,n,c,s,u){return{value:e,root:r,parent:t,type:n,props:c,children:s,line:a,column:i,length:u,return:""}}function f(e,r){return(0,n.assign)(l("",null,null,"",null,null,0),e,{length:-e.length},r)}function d(){return u}function h(){return u=s>0?(0,n.charat)(o,--s):0,i--,10===u&&(i=1,a--),u}function p(){return u=s<c?(0,n.charat)(o,s++):0,i++,10===u&&(i=1,a++),u}function v(){return(0,n.charat)(o,s)}function m(){return s}function y(e,r){return(0,n.substr)(o,e,r)}function g(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function b(e){return a=i=1,c=(0,n.strlen)(o=e),s=0,[]}function k(e){return o="",e}function E(e){return(0,n.trim)(y(s-1,function e(r){for(;p();)switch(u){case r:return s;case 34:case 39:34!==r&&39!==r&&e(u);break;case 40:41===r&&e(r);break;case 92:p()}return s}(91===e?e+2:40===e?e+1:e)))}function S(e){for(;u=v();)if(u<33)p();else break;return g(e)>2||g(u)>3?"":" "}function w(e,r){for(;--r&&p()&&!(u<48)&&!(u>102)&&(!(u>57)||!(u<65))&&(!(u>70)||!(u<97)););return y(e,s+(r<6&&32==v()&&32==p()))}function x(e,r){for(;p();)if(e+u===57)break;else if(e+u===84&&47===v())break;return"/*"+y(r,s-1)+"*"+(0,n.from)(47===e?e:p())}function T(e){for(;!g(v());)p();return y(e,s)}},2034:function(e,r,t){"use strict";t.r(r),t.d(r,{abs:function(){return n},append:function(){return v},assign:function(){return i},charat:function(){return f},combine:function(){return m},from:function(){return a},hash:function(){return c},indexof:function(){return l},match:function(){return u},replace:function(){return o},sizeof:function(){return p},strlen:function(){return h},substr:function(){return d},trim:function(){return s}});var n=Math.abs,a=String.fromCharCode,i=Object.assign;function c(e,r){return 45^f(e,0)?(((r<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}function s(e){return e.trim()}function u(e,r){return(e=r.exec(e))?e[0]:e}function o(e,r,t){return e.replace(r,t)}function l(e,r){return e.indexOf(r)}function f(e,r){return 0|e.charCodeAt(r)}function d(e,r,t){return e.slice(r,t)}function h(e){return e.length}function p(e){return e.length}function v(e,r){return r.push(e),e}function m(e,r){return e.map(r).join("")}}}]);