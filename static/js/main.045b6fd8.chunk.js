(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),i=t.n(o),c=(t(25),t(17)),l=t(1),s=t(4),u=t.n(s),d=t(9),h=t(12),m=t(13),f=t(18),p=t(14),g=t(19),w=t(6),k=t.n(w),b=function(e){var n=e.cells,t=e.markerPosition,a=e.onClick,o=e.endPosition,i=e.clickedCellIndex,c=e.gameRange;return r.a.createElement("div",{className:"field"},n.map(function(e,n){return r.a.createElement("div",{className:k()("cell","cell-".concat(c),{correct:n===o&&null!==i,incorrect:i===n&&i!==o}),key:n,onClick:function(){return a(n)}},t===n&&r.a.createElement("div",{className:"marker"}))}))},v=t(5),C=function(e){var n=e.arrows,t=e.positions,a=e.onTransitionEnd;return r.a.createElement("div",{className:"arrows"},n.map(function(e,n){return r.a.createElement("div",{className:k()("arrow",Object(v.a)({"arrow-down":t.length&&"down"===t[n].direction,"arrow-left":t.length&&"left"===t[n].direction,"arrow-up":t.length&&"up"===t[n].direction,"arrow-right":t.length&&"right"===t[n].direction},"arrow-".concat(n),!0)),key:n,onTransitionEnd:a})}))},O=t(16),j=function(e){return Array.from({length:Math.pow(e,2)},function(e,n){return n}).filter(function(n){return n%e===0&&n<Math.pow(e,2)-e&&n>e-1})},E=function(e){return Array.from({length:Math.pow(e,2)},function(e,n){return n}).filter(function(n){return(n+1-e)%e===0&&n<Math.pow(e,2)&&n>e-1})},M=function(e){return e[Math.floor(Math.random()*e.length)]},P={control:function(e,n){var t=n.isDisabled;return Object(l.a)({},e,{backgroundColor:"white",borderColor:t?"#808080":"#8145d3",width:"250px",outline:"none",color:"#c945d3"})},option:function(e,n){var t=n.data,a=n.isDisabled,r=n.isFocused,o=n.isSelected;return Object(l.a)({},e,{backgroundColor:a?null:o?t.color:r?"#f1eafa":null,color:a?"#ccc":o?t.color:null,cursor:a?"not-allowed":"default",":active":Object(l.a)({},e[":active"],{backgroundColor:!a&&(o?t.color:"#8145d3")})})},input:function(e){return Object(l.a)({},e,{borderColor:"#8145d3"})},dropdownIndicator:function(e){return Object(l.a)({},e,{color:"#8145d3"})},placeholder:function(e){return Object(l.a)({},e)},singleValue:function(e){return Object(l.a)({},e,{color:"#c945d3"})},menuList:function(e){return Object(l.a)({},e,{borderColor:"#c945d3"})}},R=function(e){var n,t=e.onClick,a=e.dropdownOption,o=e.onDropdownChange,i=e.currentGameRange,c=e.transitionsCounter,l=e.gameRange,s=e.isFieldClicked,u=e.markerPosition;return r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:t,disabled:!!(u&&c<l)},"start game"),r.a.createElement(O.a,{value:i,onChange:o,options:(n=a,n.map(function(e){return{label:"".concat(e),value:"".concat(e)}})),styles:P,placeholder:"Choose the game range",defaultValue:i,hideSelectedOptions:!1,isDisabled:!(!u||!(c<l)&&s)}))},x=(t(31),function(e){function n(){var e,t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={gameRanges:[3,4,5],gameRange:3,markerPosition:null,positions:[],endPosition:null,clickedCellIndex:null},t.setMarkerPosition=Object(d.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({markerPosition:Math.floor(Math.random()*Math.pow(t.state.gameRange,2)),endPosition:null,clickedCellIndex:null,positions:[],transitionsCounter:0});case 2:n=t.moveArrow(t.state.markerPosition,t.state.gameRange,0),t.setState({positions:n,endPosition:n[n.length-1].position});case 4:case"end":return e.stop()}},e)})),t.setGameRange=function(){var e=Object(d.a)(u.a.mark(function e(n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.value,e.next=3,t.setState({gameRange:+a,endPosition:null,clickedCellIndex:null,markerPosition:null,transitionsCounter:0});case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.handleClick=function(e){!t.state.markerPosition||t.state.transitionsCounter<Math.pow(t.state.gameRange,2)+1||t.setState(Object(l.a)({},t.state,{positions:[],markerPosition:null,clickedCellIndex:e}))},t.moveArrow=function(e,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=e;if(a<Math.pow(n,2)+1){var i;switch(!0){case 0===e:i=["down","right"];break;case e<n-1:i=["down","left","right"];break;case e===n-1:i=["down","left"];break;case e===Math.pow(n,2)-1:i=["up","left"];break;case j(n).includes(e):i=["up","down","right"];break;case E(n).includes(e):i=["up","down","left"];break;case e===Math.pow(n,2)-n:i=["up","right"];break;case e>Math.pow(n,2)-n:i=["up","right","left"];break;default:i=["up","down","left","right"]}var c=M(i);switch(c){case"left":o-=1;break;case"right":o+=1;break;case"up":o-=n;break;default:o+=n}return r.push({direction:c,position:o}),t.moveArrow(o,n,a+1,r)}return r},t.handleTr=function(){t.setState({transitionsCounter:t.state.transitionsCounter+1})},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.positions,t=e.gameRange,a=e.transitionsCounter,o=e.gameRanges,i=e.clickedCellIndex,l=e.markerPosition,s=Array(Math.pow(t,2)).fill(null);return r.a.createElement("div",null,r.a.createElement(R,{onClick:this.setMarkerPosition,dropdownOption:o,onDropdownChange:this.setGameRange,currentGameRange:this.state.gameRange,transitionsCounter:a,gameRange:Math.pow(t,2)+1,isFieldClicked:null!==i,markerPosition:l}),r.a.createElement(b,Object.assign({cells:s,onClick:this.handleClick},this.state)),r.a.createElement(C,{arrows:[].concat(Object(c.a)(s),[null]),positions:n,onTransitionEnd:this.handleTr}))}}]),n}(a.Component));t(32);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.045b6fd8.chunk.js.map