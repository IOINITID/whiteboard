/*! For license information please see index.15e47b0b.js.LICENSE.txt */
!function(){var t,e,i,s,n={3858:function(t,e,i){"use strict";i.r(e),i.d(e,{App:function(){return h}});var s=i("5893"),n=i("7294"),o=i("8974"),r=i("358"),a=i("5732");let h=()=>{let[t,e]=(0,n.useState)("rectangle");return(0,n.useEffect)(()=>{a.scene.create()},[]),(0,n.useEffect)(()=>{a.scene.setTool=e},[]),(0,n.useEffect)(()=>{a.scene.tool=t},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Tools,{tool:t,setTool:e}),(0,s.jsx)(o.Canvas,{})]})}},2269:function(t,e,i){"use strict";i.r(e),i.d(e,{GlobalStyles:function(){return o}});var s=i("5893"),n=i("7133");let o=()=>(0,s.jsx)(s.Fragment,{children:(0,n.injectGlobal)`
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
`})},8974:function(t,e,i){"use strict";i.r(e),i.d(e,{Canvas:function(){return n}});var s=i("5893");let n=()=>(0,s.jsx)("canvas",{})},358:function(t,e,i){"use strict";i.r(e),i.d(e,{Tools:function(){return n}}),i("9560"),i("9734");var s=i("5893");let n=t=>{let{tool:e,setTool:i}=t;return(0,s.jsx)("div",{style:{position:"fixed",top:"32px",left:"50%",transform:"translateX(-50%)",display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[{id:1,title:"\u041A\u0443\u0440\u0441\u043E\u0440",value:"cursor"},{id:2,title:"\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",value:"rectangle"},{id:3,title:"\u041A\u0440\u0443\u0433",value:"circle"},{id:4,title:"\u041B\u0438\u043D\u0438\u044F",value:"line"},{id:5,title:"\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",value:"freedraw"}].map(t=>(0,s.jsx)("div",{style:{background:e===t.value?"lavender":"none",padding:"16px"},onClick:()=>{i(t.value)},children:t.title},t.id))})}},9506:function(t,e,i){"use strict";i.r(e);var s=i("5893"),n=i("7294"),o=i.n(n),r=i("745"),a=i("3858"),h=i("2269");r.createRoot(document.getElementById("root")).render((0,s.jsxs)(o().Fragment,{children:[(0,s.jsx)(h.GlobalStyles,{}),(0,s.jsx)(a.App,{})]}))},230:function(t,e,i){"use strict";i.r(e),i.d(e,{Circle:function(){return n}});var s=i("3564");class n extends s.Layer{create(t){t&&("active"===this.state?t.strokeStyle="red":t.strokeStyle="#000000",t.lineWidth=1,t.beginPath(),t.ellipse(Math.abs((this.position.maxX-this.position.minX)/2+this.position.minX),Math.abs((this.position.maxY-this.position.minY)/2+this.position.minY),Math.abs((this.position.maxX-this.position.minX)/2),Math.abs((this.position.maxY-this.position.minY)/2),0,0,2*Math.PI),t.closePath(),t.stroke())}constructor(t,e,i,s){super(),this.id=String(1e3*Math.random()),this.type="circle",this.position={minX:t,minY:e,maxX:i,maxY:s},this.state="default"}}},3564:function(t,e,i){"use strict";i.r(e),i.d(e,{Layer:function(){return n}}),i("9929"),i("6301"),i("5123");var s=i("5732");class n{move(t,e){this.position.minX+=t,this.position.minY+=e,this.position.maxX+=t,this.position.maxY+=e,s.scene.redraw()}remove(){s.scene.layers=s.scene.layers.filter(t=>t.id!==this.id),s.scene.redraw()}}},7296:function(t,e,i){"use strict";i.r(e),i.d(e,{Line:function(){return n}});var s=i("3564");class n extends s.Layer{create(t){t&&("active"===this.state?t.strokeStyle="red":t.strokeStyle="#000000",t.lineWidth=1,t.beginPath(),t.lineTo(this.position.minX,this.position.minY),t.lineTo(this.position.maxX,this.position.maxY),t.closePath(),t.stroke())}constructor(t,e,i,s){super(),this.id=String(1e3*Math.random()),this.type="line",this.position={minX:t,minY:e,maxX:i,maxY:s},this.state="default"}}},8844:function(t,e,i){"use strict";i.r(e),i.d(e,{Rectangle:function(){return n}});var s=i("3564");class n extends s.Layer{frame(t){if(t){t.beginPath(),t.strokeStyle="purple",t.roundRect(this.position.minX-8,this.position.minY-8,this.position.maxX-this.position.minX+16,this.position.maxY-this.position.minY+16,0),t.closePath(),t.stroke();let e={width:8,height:8};t.beginPath(),t.strokeStyle="purple",t.fillStyle="#ffffff",t.roundRect(this.position.minX-1.5*e.width,this.position.minY-1.5*e.height,e.width,e.height,0),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.strokeStyle="purple",t.fillStyle="#ffffff",t.roundRect(this.position.maxX+.5*e.width,this.position.maxY+.5*e.height,e.width,e.height,0),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.strokeStyle="purple",t.fillStyle="#ffffff",t.roundRect(this.position.maxX+.5*e.width,this.position.minY-1.5*e.height,e.width,e.height,0),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.strokeStyle="purple",t.fillStyle="#ffffff",t.roundRect(this.position.minX-1.5*e.width,this.position.maxY+.5*e.height,e.width,e.height,0),t.closePath(),t.fill(),t.stroke()}}create(t){t&&("active"===this.state&&this.frame(t),t.lineWidth=1,t.beginPath(),t.strokeStyle="#000000",t.roundRect(this.position.minX,this.position.minY,this.position.maxX-this.position.minX,this.position.maxY-this.position.minY,this.radius),t.closePath(),t.stroke())}constructor(t,e,i,s,n=16){super(),this.id=String(1e3*Math.random()),this.type="rectangle",this.position={minX:t,minY:e,maxX:i,maxY:s},this.radius=n,this.state="default"}}},5732:function(t,e,i){"use strict";i.r(e),i.d(e,{scene:function(){return r}}),i("5646"),i("9774"),i("5123"),i("2394");var s=i("230"),n=i("7296"),o=i("8844");let r=new class t{create(){this.canvas=document.querySelector("canvas"),this.canvas&&(this.context=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight),window.addEventListener("mousedown",t=>{let{clientX:e,clientY:i}=t;this.isMouseDown=!0,this.state={...this.state,startX:e,startY:i};let s=this.getLayer(e,i);s?(this.layers.forEach(t=>{t.state="default"}),s.state="active"):this.layers.forEach(t=>{t.state="default"}),this.redraw()}),window.addEventListener("mousemove",t=>{let{clientX:e,clientY:i,movementX:r,movementY:a}=t;this.state={...this.state,endX:e,endY:i};let{startX:h,startY:l,endX:c,endY:u}=this.state,d=this.getLayer(e,i);d?this.canvas&&(this.canvas.style.cursor="move"):this.canvas&&(this.canvas.style.cursor="default"),this.isMouseDown&&("rectangle"===this.tool&&this.draw(new o.Rectangle(h,l,c,u)),"circle"===this.tool&&this.draw(new s.Circle(h,l,c,u)),"line"===this.tool&&this.draw(new n.Line(h,l,c,u)),d&&"active"===d.state&&d.move(r,a))}),window.addEventListener("mouseup",t=>{let{clientX:e,clientY:i}=t;this.state={...this.state,endX:e,endY:i};let{startX:r,startY:a,endX:h,endY:l}=this.state;this.isMouseDown=!1,"rectangle"===this.tool&&this.add(new o.Rectangle(r,a,h,l)),"circle"===this.tool&&this.add(new s.Circle(r,a,h,l)),"line"===this.tool&&this.add(new n.Line(r,a,h,l)),this.state={startX:0,startY:0,endX:0,endY:0},this.setTool&&this.setTool("cursor")}),window.addEventListener("keydown",t=>{if("backspace"===t.key.toLowerCase()){let t=this.layers.findIndex(t=>"active"===t.state);-1!==t&&this.layers[t].remove()}})}clear(){this.context&&this.context.clearRect(0,0,window.innerWidth,window.innerHeight)}add(t){this.layers.push(t),this.redraw()}draw(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e&&this.redraw(),this.context&&t.create(this.context)}redraw(){console.log({layers:this.layers}),this.clear(),this.layers.forEach(t=>{this.draw(t,!1)})}scale(t,e){this.context&&(this.context.setTransform(1,0,0,1,0,0),this.context.scale(t,e))}getLayer(t,e){let i=this.layers.findIndex(i=>{if(t>i.position.minX&&t<i.position.maxX&&e>i.position.minY&&e<i.position.maxY)return i});return -1!==i?this.layers[i]:null}setState(t){this.layers.forEach(t=>{t.state="default"}),t&&(t.state="active"),this.redraw()}constructor(){this.canvas=null,this.context=null,this.layers=[],this.isMouseDown=!1,this.state={startX:0,startY:0,endX:0,endY:0},this.tool="cursor",this.setTool=null}}}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={exports:{}};return n[t].call(i.exports,i,i.exports,r),i.exports}r.m=n,r.es=function(t,e){return Object.keys(t).forEach(function(i){"default"!==i&&!Object.prototype.hasOwnProperty.call(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[i]}})}),t},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],r.O=function(e,i,s,n){if(i){n=n||0;for(var o=t.length;o>0&&t[o-1][2]>n;o--)t[o]=t[o-1];t[o]=[i,s,n];return}for(var a=1/0,o=0;o<t.length;o++){for(var i=t[o][0],s=t[o][1],n=t[o][2],h=!0,l=0;l<i.length;l++)a>=n&&Object.keys(r.O).every(function(t){return r.O[t](i[l])})?i.splice(l--,1):(h=!1,n<a&&(a=n));if(h){t.splice(o--,1);var c=s();void 0!==c&&(e=c)}}return e},e={980:0},r.O.j=function(t){return 0===e[t]},i=function(t,i){var s=i[0],n=i[1],o=i[2],a,h,l=0;if(s.some(function(t){return 0!==e[t]})){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(o)var c=o(r)}for(t&&t(i);l<s.length;l++)h=s[l],r.o(e,h)&&e[h]&&e[h][0](),e[h]=0;return r.O(c)},(s=self.webpackChunkwhiteboard=self.webpackChunkwhiteboard||[]).forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s));var a=r.O(void 0,["126","361","633"],function(){return r("9506")});r.O(a)}();