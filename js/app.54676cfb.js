(function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],f=0,d=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-reaction-timer/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3a56":function(e,t,n){},"53db":function(e,t,n){"use strict";n("86cf")},5450:function(e,t,n){"use strict";n("3a56")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=Object(r["e"])("h1",null,"Ninja Reaction Timer",-1);function o(e,t,n,o,c,a){var s=Object(r["g"])("Block"),u=Object(r["g"])("Results");return Object(r["f"])(),Object(r["c"])(r["a"],null,[i,Object(r["e"])("button",{onClick:t[1]||(t[1]=function(){return a.start&&a.start.apply(a,arguments)}),disabled:c.isPlaying},"Play",8,["disabled"]),c.isPlaying?(Object(r["f"])(),Object(r["c"])(s,{key:0,delay:c.delay,onEnd:a.endGame},null,8,["delay","onEnd"])):Object(r["d"])("",!0),c.showResults?(Object(r["f"])(),Object(r["c"])(u,{key:1,score:c.score},null,8,["score"])):Object(r["d"])("",!0)],64)}function c(e,t,n,i,o,c){return o.showBlock?(Object(r["f"])(),Object(r["c"])("div",{key:0,class:"block",onClick:t[1]||(t[1]=function(){return c.stopTimer&&c.stopTimer.apply(c,arguments)})},"Click me")):Object(r["d"])("",!0)}var a={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0,interval:10}},mounted:function(){var e=this;setTimeout((function(){e.showBlock=!0,e.startTimer()}),this.delay)},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.reactionTime+=e.interval}),this.interval)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}};n("5450");a.render=c;var s=a,u={class:"rank"};function l(e,t,n,i,o,c){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("p",null,"Reaction time: "+Object(r["h"])(n.score)+" ms",1),Object(r["e"])("p",u,Object(r["h"])(o.rank),1)],64)}var f={props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<250?this.rank="Ninja Fingers":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail Pace..."}};n("d185");f.render=l;var d=f,p={name:"App",components:{Block:s,Results:d},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame:function(e){this.score=e,this.isPlaying=!1,this.showResults=!0}}};n("53db");p.render=o;var h=p;Object(r["b"])(h).mount("#app")},6339:function(e,t,n){},"86cf":function(e,t,n){},d185:function(e,t,n){"use strict";n("6339")}});
//# sourceMappingURL=app.54676cfb.js.map