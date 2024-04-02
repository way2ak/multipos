(()=>{var e={4184:(e,t)=>{var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===r)for(var c in n)i.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},4895:()=>{},2471:()=>{},1818:(e,t,n)=>{"use strict";e.exports=n(4359)},4359:(e,t,n)=>{e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=n(3804)},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return u}));var i=n(0),o=n.n(i);const r="notification__item";var a,c,s,l;!function(e){e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e.BOTTOM_CENTER="bottom-center",e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right",e.TOP_CENTER="top-center",e.CENTER="center",e.TOP_FULL="top-full",e.BOTTOM_FULL="bottom-full"}(a||(a={})),function(e){e.TOP="top",e.BOTTOM="bottom"}(c||(c={})),function(e){e.SUCCESS="success",e.DANGER="danger",e.INFO="info",e.DEFAULT="default",e.WARNING="warning"}(s||(s={})),function(e){e.TIMEOUT="timeout",e.CLICK="click",e.TOUCH="touch",e.MANUAL="manual"}(l||(l={}));var u=new class{constructor(){this.incrementCounter=()=>this.counter+=1,this.getCounter=()=>this.counter,this.counter=0,this.add=null}addNotification(e){this.incrementCounter();const t=function(e,t,n){const i=e,{id:o,type:r,insert:a,content:c,container:l,animationIn:d,animationOut:h,slidingEnter:m,slidingExit:p,touchRevert:b,touchSlidingExit:y,dismiss:v,width:E,onRemoval:w}=i;i.id=o||u.getCounter().toString(),i.type=c?null:r.toLowerCase(),t&&!c&&(i.userDefinedTypes=function(e,t){const{content:n,type:i}=e;if(!n&&i!==s.SUCCESS&&i!==s.DANGER&&i!==s.INFO&&i!==s.DEFAULT&&i!==s.WARNING&&t)return t}(i,t)),i.width=f(E)?n:E,i.container=l.toLowerCase(),i.insert=(a||"top").toLowerCase(),i.dismiss=function(e){const t=e,n={duration:0,click:!0,touch:!0,onScreen:!1,pauseOnHover:!1,waitForAnimation:!1,showIcon:!1};return t?(Object.keys(n).forEach(e=>{f(t[e])&&(t[e]=n[e])}),t):n}(v),i.animationIn=d||[],i.animationOut=h||[],i.onRemoval=w||(()=>{});const O=(e,t,n)=>({duration:e,timingFunction:t,delay:n});i.slidingEnter=g(m,O(600,"linear",0)),i.slidingExit=g(p,O(600,"linear",0)),i.touchRevert=g(b,O(600,"linear",0));const T=y||{},N=T.swipe||{},_=T.fade||{};return i.touchSlidingExit=T,i.touchSlidingExit.swipe=g(N,O(600,"linear",0)),i.touchSlidingExit.fade=g(_,O(300,"linear",0)),i}(e,this.types,this.defaultNotificationWidth);return this.add(t)}register(e){const{addNotification:t,removeNotification:n,removeAllNotifications:i,types:o,defaultNotificationWidth:r}=e;this.add=t,this.removeNotification=n,this.removeAllNotifications=i,this.defaultNotificationWidth=r,this.types=o}};const f=e=>null==e;function d(e){return e===a.BOTTOM_FULL||e===a.BOTTOM_LEFT||e===a.BOTTOM_RIGHT||e===a.BOTTOM_CENTER}function h(e){return e===a.TOP_FULL||e===a.TOP_LEFT||e===a.TOP_RIGHT||e===a.TOP_CENTER}function m(e){const{type:t,content:n,userDefinedTypes:i}=e,o=[r];if(n)return o;if(f(i))return function(e){switch(e){case s.DEFAULT:return[r,"notification__item--default"];case s.SUCCESS:return[r,"notification__item--success"];case s.DANGER:return[r,"notification__item--danger"];case s.WARNING:return[r,"notification__item--warning"];case s.INFO:return[r,"notification__item--info"];default:return[r]}}(t);const a=i.find(e=>e.name===t);return o.concat(a.htmlClasses)}function p({duration:e,timingFunction:t,delay:n},i){return`${e}ms ${i} ${t} ${n}ms`}function g(e,{duration:t,timingFunction:n,delay:i}){const o=e||{};return f(o.duration)&&(o.duration=t),f(o.timingFunction)&&(o.timingFunction=n),f(o.delay)&&(o.delay=i),o}class b{constructor(e,t){this.callback=e,this.remaining=t,this.resume()}pause(){clearTimeout(this.timerId),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.timerId),this.timerId=setTimeout(this.callback,this.remaining)}clear(){clearTimeout(this.timerId)}}class y extends o.a.Component{constructor(e){super(e),this.onClick=()=>{const{notification:{dismiss:e}}=this.props;(e.click||e.showIcon)&&this.removeNotification(l.CLICK)},this.onTouchStart=e=>{const{pageX:t}=e.touches[0];this.setState(({parentStyle:e})=>({startX:t,currentX:t,parentStyle:Object.assign(Object.assign({},e),{position:"relative"})}))},this.onTouchMove=e=>{const{pageX:t}=e.touches[0],{startX:n}=this.state,{toggleRemoval:i,notification:{id:o,onRemoval:r,slidingExit:a,touchSlidingExit:{swipe:c,fade:s}}}=this.props,u=t-n,{offsetWidth:f}=this.rootElementRef.current,d=window.innerWidth+f,h=(t-n>=0?d:-d)+"px";if(function(e,t){return Math.abs(e)>=.4*t}(u,f)){const e=p(c,"left"),t=p(s,"opacity"),n=()=>{i(o,()=>r(o,l.TOUCH))};return this.setState(({parentStyle:i})=>({touchEnabled:!1,parentStyle:Object.assign(Object.assign({},i),{left:h,opacity:0,transition:`${e}, ${t}`}),onTransitionEnd:()=>{this.setState(({parentStyle:e})=>({parentStyle:Object.assign(Object.assign({},e),{height:"0px",overflow:"hidden",transition:p(a,"height")}),onTransitionEnd:n}))}}))}return this.setState(({parentStyle:e})=>({currentX:t,parentStyle:Object.assign(Object.assign({},e),{left:0+u+"px"})}))},this.onTouchEnd=()=>{const{notification:{touchRevert:e}}=this.props;this.setState(({parentStyle:t})=>({parentStyle:Object.assign(Object.assign({},t),{left:0,transition:p(e,"left")})}))},this.onMouseEnter=()=>{this.timer?this.timer.pause():this.setState({animationPlayState:"paused"})},this.onMouseLeave=()=>{this.timer?this.timer.resume():this.setState({animationPlayState:"running"})},this.rootElementRef=o.a.createRef();const{defaultNotificationWidth:t,notification:n,isMobile:i}=e,{width:r,container:c}=n;this.state={parentStyle:{height:"0px",overflow:"hidden",width:(r||t)+"px"},htmlClassList:m(n),animationPlayState:"running",touchEnabled:!0};const s=-1!==[a.TOP_FULL,a.BOTTOM_FULL,a.TOP_CENTER,a.BOTTOM_CENTER,a.CENTER].indexOf(c);(i||s)&&(this.state.parentStyle.width="100%")}componentWillUnmount(){this.timer&&this.timer.clear()}componentDidMount(){const{notification:e,notificationsCount:t}=this.props,{dismiss:{duration:n,onScreen:i}}=e,o=function(e,t){return!(t<=1)&&t>1&&(e.insert===c.TOP&&h(e.container)||e.insert===c.BOTTOM&&d(e.container)||e.container===a.CENTER)}(e,t),{scrollHeight:r}=this.rootElementRef.current,s=()=>{n&&!i&&(this.timer=new b(()=>this.removeNotification(l.TIMEOUT),n))};this.setState(({parentStyle:{width:t}})=>({parentStyle:{width:t,height:r+"px",transition:o?p(e.slidingEnter,"height"):"10ms height"},onTransitionEnd:s}),()=>{requestAnimationFrame(()=>{this.setState(t=>({htmlClassList:[...e.animationIn,...t.htmlClassList]}))})})}componentDidUpdate({hasBeenRemoved:e}){this.props.hasBeenRemoved&&!e&&this.removeNotification(l.MANUAL)}removeNotification(e){const{notification:t,toggleRemoval:n}=this.props,{id:i,onRemoval:o,dismiss:{waitForAnimation:r}}=t,a=[...t.animationOut,...m(t)],c=()=>n(i,()=>o(i,e)),s={height:"0px",overflow:"hidden",transition:p(t.slidingExit,"height")};return r?this.setState(({parentStyle:{width:e}})=>({htmlClassList:a,onAnimationEnd:()=>{this.setState({parentStyle:Object.assign({width:e},s),onTransitionEnd:c})}})):this.setState(({parentStyle:{width:e}})=>({parentStyle:Object.assign({width:e},s),onTransitionEnd:c,htmlClassList:a}))}renderTimer(){const{notification:{dismiss:e}}=this.props,{duration:t,onScreen:n}=e,{animationPlayState:i}=this.state;if(!t||!n)return;const r={animationName:"timer",animationDuration:t+"ms",animationTimingFunction:"linear",animationFillMode:"forwards",animationDelay:"0",animationPlayState:i};return o.a.createElement("div",{className:"notification__timer"},o.a.createElement("div",{className:"notification__timer-filler",onAnimationEnd:()=>this.removeNotification(l.TIMEOUT),style:r}))}renderCustomContent(){const{htmlClassList:e}=this.state,{notification:{id:t,content:n,dismiss:{duration:i,pauseOnHover:r}}}=this.props,a=i>0&&r;return o.a.createElement("div",{className:""+[...e].join(" "),onMouseEnter:a?this.onMouseEnter:null,onMouseLeave:a?this.onMouseLeave:null},o.a.isValidElement(n)?n:o.a.createElement(n,Object.assign({},{id:t})))}renderNotification(){const{notification:{title:e,message:t,dismiss:{showIcon:n,duration:i,pauseOnHover:r}}}=this.props,{htmlClassList:a}=this.state,c=i>0&&r;return o.a.createElement("div",{className:""+[...a].join(" "),onMouseEnter:c?this.onMouseEnter:null,onMouseLeave:c?this.onMouseLeave:null},o.a.createElement("div",{className:"notification__content"},n&&o.a.createElement("div",{className:"notification__close",onClick:this.onClick}),e&&o.a.createElement("div",{className:"notification__title"},e),o.a.createElement("div",{className:"notification__message"},t),this.renderTimer()))}render(){const{notification:{content:e,dismiss:{click:t}}}=this.props,{parentStyle:n,onAnimationEnd:i,onTransitionEnd:r,touchEnabled:a}=this.state;return o.a.createElement("div",{ref:this.rootElementRef,onClick:t?this.onClick:null,className:"notification",style:n,onAnimationEnd:i,onTransitionEnd:r,onTouchStart:a?this.onTouchStart:null,onTouchMove:a?this.onTouchMove:null,onTouchEnd:a?this.onTouchEnd:null},e?this.renderCustomContent():this.renderNotification())}}var v=y;n(1);class E extends o.a.Component{constructor(e){super(e),this.handleResize=()=>{this.setState({windowWidth:window.innerWidth})},this.add=e=>(this.setState(({notifications:t})=>({notifications:"top"===e.insert?[e,...t]:[...t,e]})),e.id),this.remove=e=>{this.setState(({notifications:t})=>({notifications:t.map(t=>(t.id===e&&(t.hasBeenRemoved=!0),t))}))},this.removeAllNotifications=()=>{this.setState({notifications:this.state.notifications.map(e=>Object.assign(Object.assign({},e),{hasBeenRemoved:!0}))})},this.toggleRemoval=(e,t)=>{this.setState(({notifications:t})=>({notifications:t.filter(({id:t})=>t!==e)}),t)},this.state={isMobile:!!f(e.isMobile)||e.isMobile,breakpoint:f(e.breakpoint)?768:e.breakpoint,notifications:[],windowWidth:void 0}}componentDidMount(){const{types:e,defaultNotificationWidth:t}=this.props;u.register({addNotification:this.add,removeNotification:this.remove,removeAllNotifications:this.removeAllNotifications,defaultNotificationWidth:t||325,types:e}),this.setState({windowWidth:window.innerWidth}),window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}renderNotifications(e,t){return e.map(n=>o.a.createElement(v,{id:n.id,key:n.id,isMobile:t,defaultNotificationWidth:this.props.defaultNotificationWidth,notification:n,toggleRemoval:this.toggleRemoval,notificationsCount:e.length,hasBeenRemoved:n.hasBeenRemoved}))}renderMobileNotifications(e){const{className:t,id:n}=e,{notifications:i}=this.state,r=function(e){const t=[],n=[];return e.forEach(e=>{const{container:i}=e,{CENTER:o}=a;h(i)||i===o?t.push(e):d(i)&&n.push(e)}),{top:t,bottom:n}}(i),c=this.renderNotifications(r.top,!0),s=this.renderNotifications(r.bottom,!0);return o.a.createElement("div",{id:n,key:"mobile",className:"notifications-component "+(t||"")},o.a.createElement("div",{className:"notification-container--mobile-top"},c),o.a.createElement("div",{className:"notification-container--mobile-bottom"},s))}renderScreenNotifications(e){const{className:t,id:n}=e,{notifications:i}=this.state,r=function(e){const t=[],n=[],i=[],o=[],r=[],c=[],s=[],l=[],u=[];return e.forEach(e=>{const{container:f}=e;f===a.TOP_FULL?l.push(e):f===a.BOTTOM_FULL?u.push(e):f===a.TOP_LEFT?t.push(e):f===a.TOP_RIGHT?n.push(e):f===a.TOP_CENTER?i.push(e):f===a.BOTTOM_LEFT?o.push(e):f===a.BOTTOM_RIGHT?r.push(e):f===a.BOTTOM_CENTER?c.push(e):f===a.CENTER&&s.push(e)}),{topFull:l,bottomFull:u,topLeft:t,topRight:n,topCenter:i,bottomLeft:o,bottomRight:r,bottomCenter:c,center:s}}(i),c=this.renderNotifications(r.topFull,!1),s=this.renderNotifications(r.bottomFull,!1),l=this.renderNotifications(r.topLeft,!1),u=this.renderNotifications(r.topRight,!1),f=this.renderNotifications(r.topCenter,!1),d=this.renderNotifications(r.bottomLeft,!1),h=this.renderNotifications(r.bottomRight,!1),m=this.renderNotifications(r.bottomCenter,!1),p=this.renderNotifications(r.center,!1);return o.a.createElement("div",{id:n,key:"screen",className:"notifications-component "+(t||"")},o.a.createElement("div",{className:"notification-container--top-full"},c),o.a.createElement("div",{className:"notification-container--bottom-full"},s),o.a.createElement("div",{className:"notification-container--top-left"},l),o.a.createElement("div",{className:"notification-container--top-right"},u),o.a.createElement("div",{className:"notification-container--bottom-left"},d),o.a.createElement("div",{className:"notification-container--bottom-right"},h),o.a.createElement("div",{className:"notification-container--top-center"},f),o.a.createElement("div",{className:"notification-container--center"},o.a.createElement("div",{className:"flex-center"},p)),o.a.createElement("div",{className:"notification-container--bottom-center"},m))}render(){const{isMobile:e}=this.props,{windowWidth:t,breakpoint:n}=this.state;return e&&t<=n?this.renderMobileNotifications(this.props):this.renderScreenNotifications(this.props)}}var w=E;t.default=w}])},3804:e=>{e.exports=function(){return this.React}()},7196:e=>{e.exports=function(){return this.ReactDOM}()},6002:e=>{e.exports=function(){return this.wp.element}()},8057:e=>{e.exports=function(){return this.wp.i18n}()}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i);var e=n(6002),t=n(3804),o=n.n(t),r=n(7196),a=n.n(r);n(2471);function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n(8057);const h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,r=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=n(4184),v=n.n(y);const E=(0,t.createContext)({});function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var n=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t))}function N(e){return e<=1?100*Number(e)+"%":e}function _(e){return 1===e.length?"0"+e:String(e)}function C(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*n*(t-e):n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function S(e){return x(e)/255}function x(e){return parseInt(e,16)}var k={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function M(e){var t,n,i,o={r:0,g:0,b:0},r=1,a=null,c=null,s=null,l=!1,u=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var t=!1;if(k[e])e=k[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var n=F.rgb.exec(e);if(n)return{r:n[1],g:n[2],b:n[3]};if(n=F.rgba.exec(e))return{r:n[1],g:n[2],b:n[3],a:n[4]};if(n=F.hsl.exec(e))return{h:n[1],s:n[2],l:n[3]};if(n=F.hsla.exec(e))return{h:n[1],s:n[2],l:n[3],a:n[4]};if(n=F.hsv.exec(e))return{h:n[1],s:n[2],v:n[3]};if(n=F.hsva.exec(e))return{h:n[1],s:n[2],v:n[3],a:n[4]};if(n=F.hex8.exec(e))return{r:x(n[1]),g:x(n[2]),b:x(n[3]),a:S(n[4]),format:t?"name":"hex8"};if(n=F.hex6.exec(e))return{r:x(n[1]),g:x(n[2]),b:x(n[3]),format:t?"name":"hex"};if(n=F.hex4.exec(e))return{r:x(n[1]+n[1]),g:x(n[2]+n[2]),b:x(n[3]+n[3]),a:S(n[4]+n[4]),format:t?"name":"hex8"};if(n=F.hex3.exec(e))return{r:x(n[1]+n[1]),g:x(n[2]+n[2]),b:x(n[3]+n[3]),format:t?"name":"hex"};return!1}(e)),"object"==typeof e&&(L(e.r)&&L(e.g)&&L(e.b)?(t=e.r,n=e.g,i=e.b,o={r:255*T(t,255),g:255*T(n,255),b:255*T(i,255)},l=!0,u="%"===String(e.r).substr(-1)?"prgb":"rgb"):L(e.h)&&L(e.s)&&L(e.v)?(a=N(e.s),c=N(e.v),o=function(e,t,n){e=6*T(e,360),t=T(t,100),n=T(n,100);var i=Math.floor(e),o=e-i,r=n*(1-t),a=n*(1-o*t),c=n*(1-(1-o)*t),s=i%6;return{r:255*[n,a,r,r,c,n][s],g:255*[c,n,n,a,r,r][s],b:255*[r,r,c,n,n,a][s]}}(e.h,a,c),l=!0,u="hsv"):L(e.h)&&L(e.s)&&L(e.l)&&(a=N(e.s),s=N(e.l),o=function(e,t,n){var i,o,r;if(e=T(e,360),t=T(t,100),n=T(n,100),0===t)o=n,r=n,i=n;else{var a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;i=C(c,a,e+1/3),o=C(c,a,e),r=C(c,a,e-1/3)}return{r:255*i,g:255*o,b:255*r}}(e.h,a,s),l=!0,u="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(r),{ok:l,format:e.format||u,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:r}}var R="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",j="[\\s|\\(]+("+R+")[,|\\s]+("+R+")[,|\\s]+("+R+")\\s*\\)?",A="[\\s|\\(]+("+R+")[,|\\s]+("+R+")[,|\\s]+("+R+")[,|\\s]+("+R+")\\s*\\)?",F={CSS_UNIT:new RegExp(R),rgb:new RegExp("rgb"+j),rgba:new RegExp("rgba"+A),hsl:new RegExp("hsl"+j),hsla:new RegExp("hsla"+A),hsv:new RegExp("hsv"+j),hsva:new RegExp("hsva"+A),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function L(e){return Boolean(F.CSS_UNIT.exec(String(e)))}var P=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function I(e){var t=function(e,t,n){e=T(e,255),t=T(t,255),n=T(n,255);var i=Math.max(e,t,n),o=Math.min(e,t,n),r=0,a=i,c=i-o,s=0===i?0:c/i;if(i===o)r=0;else{switch(i){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:s,v:a}}(e.r,e.g,e.b);return{h:360*t.h,s:t.s,v:t.v}}function B(e){var t=e.r,n=e.g,i=e.b;return"#".concat(function(e,t,n,i){var o=[_(Math.round(e).toString(16)),_(Math.round(t).toString(16)),_(Math.round(n).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}(t,n,i,!1))}function D(e,t,n){var i=n/100;return{r:(t.r-e.r)*i+e.r,g:(t.g-e.g)*i+e.g,b:(t.b-e.b)*i+e.b}}function U(e,t,n){var i;return(i=Math.round(e.h)>=60&&Math.round(e.h)<=240?n?Math.round(e.h)-2*t:Math.round(e.h)+2*t:n?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?i+=360:i>=360&&(i-=360),i}function H(e,t,n){return 0===e.h&&0===e.s?e.s:((i=n?e.s-.16*t:4===t?e.s+.16:e.s+.05*t)>1&&(i=1),n&&5===t&&i>.1&&(i=.1),i<.06&&(i=.06),Number(i.toFixed(2)));var i}function W(e,t,n){var i;return(i=n?e.v+.05*t:e.v-.15*t)>1&&(i=1),Number(i.toFixed(2))}function q(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],i=M(e),o=5;o>0;o-=1){var r=I(i),a=B(M({h:U(r,o,!0),s:H(r,o,!0),v:W(r,o,!0)}));n.push(a)}n.push(B(i));for(var c=1;c<=4;c+=1){var s=I(i),l=B(M({h:U(s,c),s:H(s,c),v:W(s,c)}));n.push(l)}return"dark"===t.theme?P.map((function(e){var i=e.index,o=e.opacity;return B(D(M(t.backgroundColor||"#141414"),M(n[i]),100*o))})):n}var z={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},G={},K={};Object.keys(z).forEach((function(e){G[e]=q(z[e]),G[e].primary=G[e][5],K[e]=q(z[e],{theme:"dark",backgroundColor:"#141414"}),K[e].primary=K[e][5]}));G.red,G.volcano,G.gold,G.orange,G.yellow,G.lime,G.green,G.cyan,G.blue,G.geekblue,G.purple,G.magenta,G.grey;var $={};function X(e,t){0}function V(e,t,n){t||$[n]||(e(!1,n),$[n]=!0)}const J=function(e,t){V(X,e,t)};function Y(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function Q(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function Z(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Y())return null;var i,o=document.createElement("style");(null===(t=n.csp)||void 0===t?void 0:t.nonce)&&(o.nonce=null===(i=n.csp)||void 0===i?void 0:i.nonce);o.innerHTML=e;var r=Q(n),a=r.firstChild;return n.prepend&&r.prepend?r.prepend(o):n.prepend&&a?r.insertBefore(o,a):r.appendChild(o),o}var ee=new Map;function te(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Q(n);if(!ee.has(i)){var o=Z("",n),r=o.parentNode;ee.set(i,r),r.removeChild(o)}var a=Array.from(ee.get(i).children).find((function(e){return"STYLE"===e.tagName&&e["rc-util-key"]===t}));if(a){var c,s,l;if((null===(c=n.csp)||void 0===c?void 0:c.nonce)&&a.nonce!==(null===(s=n.csp)||void 0===s?void 0:s.nonce))a.nonce=null===(l=n.csp)||void 0===l?void 0:l.nonce;return a.innerHTML!==e&&(a.innerHTML=e),a}var u=Z(e,n);return u["rc-util-key"]=t,u}function ne(e){return"object"===l(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===l(e.icon)||"function"==typeof e.icon)}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){var i=e[n];switch(n){case"class":t.className=i,delete t.class;break;default:t[n]=i}return t}),{})}function oe(e){return q(e)[0]}function re(e){return e?Array.isArray(e)?e:[e]:[]}var ae="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",ce={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var se=function(e){var n,i,r=e.icon,a=e.className,c=e.onClick,s=e.style,l=e.primaryColor,u=e.secondaryColor,f=b(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),d=ce;if(l&&(d={primaryColor:l,secondaryColor:u||oe(l)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=(0,t.useContext)(E),i=n.csp;(0,t.useEffect)((function(){te(e,"@ant-design-icons",{prepend:!0,csp:i})}),[])}(),n=ne(r),i="icon should be icon definiton, but got ".concat(r),J(n,"[@ant-design/icons] ".concat(i)),!ne(r))return null;var h=r;return h&&"function"==typeof h.icon&&(h=O(O({},h),{},{icon:h.icon(d.primaryColor,d.secondaryColor)})),function e(t,n,i){return i?o().createElement(t.tag,O(O({key:n},ie(t.attrs)),i),(t.children||[]).map((function(i,o){return e(i,"".concat(n,"-").concat(t.tag,"-").concat(o))}))):o().createElement(t.tag,O({key:n},ie(t.attrs)),(t.children||[]).map((function(i,o){return e(i,"".concat(n,"-").concat(t.tag,"-").concat(o))})))}(h.icon,"svg-".concat(h.name),O({className:a,onClick:c,style:s,"data-icon":h.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))};se.displayName="IconReact",se.getTwoToneColors=function(){return O({},ce)},se.setTwoToneColors=function(e){var t=e.primaryColor,n=e.secondaryColor;ce.primaryColor=t,ce.secondaryColor=n||oe(t),ce.calculated=!!n};const le=se;function ue(e){var t=p(re(e),2),n=t[0],i=t[1];return le.setTwoToneColors({primaryColor:n,secondaryColor:i})}ue("#1890ff");var fe=t.forwardRef((function(e,n){var i,o=e.className,r=e.icon,a=e.spin,c=e.rotate,s=e.tabIndex,l=e.onClick,u=e.twoToneColor,f=b(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),d=t.useContext(E).prefixCls,h=void 0===d?"anticon":d,m=v()(h,(g(i={},"".concat(h,"-").concat(r.name),!!r.name),g(i,"".concat(h,"-spin"),!!a||"loading"===r.name),i),o),y=s;void 0===y&&l&&(y=-1);var w=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,O=p(re(u),2),T=O[0],N=O[1];return t.createElement("span",Object.assign({role:"img","aria-label":r.name},f,{ref:n,tabIndex:y,onClick:l,className:m}),t.createElement(le,{icon:r,primaryColor:T,secondaryColor:N,style:w}))}));fe.displayName="AntdIcon",fe.getTwoToneColor=function(){var e=le.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},fe.setTwoToneColor=ue;const de=fe;var he=function(e,n){return t.createElement(de,Object.assign({},e,{ref:n,icon:h}))};he.displayName="UserOutlined";const me=t.forwardRef(he);var pe=n(1818),ge=n.n(pe);n(4895);function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return u(this,n)}}const ye=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,t);var n,i,o,r=be(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).componentDidMount=function(){t.getKitchenOrders()},t.getKitchenOrders=function(){if(navigator.onLine){var e={outlet_id:t.state.outlet_id,action:"get"};fetch(ddwcposKitchenObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT,{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.length!==t.state.orders.length&&pe.store.addNotification({title:(0,d.__)("Success","ddwc-multipos"),message:(0,d.__)("New order arrived to prepare.","ddwc-multipos"),type:"success",insert:"top",container:"top-right",dismiss:{duration:3e3,pauseOnHover:!0}}),t.setState({orders:e}),setTimeout((function(){t.getKitchenOrders()}),2e3)})).catch((function(e){console.error(e)}))}else pe.store.addNotification({title:(0,d.__)("Error","ddwc-multipos"),message:(0,d.__)("Cannot make requests, check your internet connection!","ddwc-multipos"),type:"danger",insert:"top",container:"top-right",dismiss:{duration:3e3,pauseOnHover:!0}})},t.handleReadyOrder=function(e){if(confirm((0,d.__)("Are you sure to remove this order from kitchen?","ddwc-multipos")))if(navigator.onLine){var n={outlet_id:t.state.outlet_id,action:"remove",order_data:e};fetch(ddwcposKitchenObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT,{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.length!==t.state.orders.length&&t.setState({orders:e},(function(){pe.store.addNotification({title:(0,d.__)("Success","ddwc-multipos"),message:(0,d.__)("Order is successfully removed from kitchen.","ddwc-multipos"),type:"success",insert:"top",container:"top-right",dismiss:{duration:3e3,pauseOnHover:!0}})}))})).catch((function(e){console.error(e)}))}else pe.store.addNotification({title:(0,d.__)("Error","ddwc-multipos"),message:(0,d.__)("Cannot make request, check your internet connection!","ddwc-multipos"),type:"danger",insert:"top",container:"top-right",dismiss:{duration:3e3,pauseOnHover:!0}})};var n=new URL(window.location.href);return t.state={outlet_id:n.searchParams.get("outlet_id"),orders:[]},t}return n=a,(i=[{key:"render",value:function(){var t=this,n=this.state.orders.map((function(n){var i=n.cart.map((function(t,n){var i=t.image?t.image:'<img width="150" height="150" src="'.concat(ddwcposKitchenObj.ddwcpos_configuration.placeholder_image,'" class="attachment-thumbnail size-thumbnail" />');return(0,e.createElement)("div",{className:"ddwcpos-order-product",key:n},(0,e.createElement)("div",{className:"ddwcpos-order-product-image",dangerouslySetInnerHTML:{__html:i}}),(0,e.createElement)("h4",{dangerouslySetInnerHTML:{__html:t.name}}),(0,e.createElement)("p",null," x ",t.quantity))}));return(0,e.createElement)("div",{className:"ddwcpos-kitchen-order"},(0,e.createElement)("div",{className:"ddwcpos-kitchen-order-customer-info"},n.table.name?(0,e.createElement)("p",null,(0,e.createElement)("span",{className:"ddwcpos-table-icon",role:"img"},(0,e.createElement)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 214.539 214.539"},(0,e.createElement)("g",null,(0,e.createElement)("g",null,(0,e.createElement)("path",{d:"M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"}),(0,e.createElement)("path",{d:"M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"}),(0,e.createElement)("path",{d:"M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"}))))),n.table.name):null,(0,e.createElement)("p",null,(0,e.createElement)(me,null),n.customer.email)),i,(0,e.createElement)("div",{className:"ddwcpos-kitchen-order-info"},(0,e.createElement)("p",null,sprintf((0,d.__)("Info: %s","ddwc-multipos"),n.info))),(0,e.createElement)("p",null,(0,e.createElement)("button",{onClick:function(e){return t.handleReadyOrder(n)}},(0,d.__)("Ready","ddwc-multipos"))))})),i={backgroundImage:"linear-gradient(".concat(ddwcposKitchenObj.ddwcpos_configuration.login_bg_primary_color," 0%, ").concat(ddwcposKitchenObj.ddwcpos_configuration.login_bg_secondary_color," 100%)"),color:ddwcposKitchenObj.ddwcpos_configuration.login_font_color};return(0,e.createElement)("div",{className:"ddwcpos-login-wrapper",style:i},(0,e.createElement)(ge(),null),(0,e.createElement)("div",{className:"ddwcpos-kitchen-container"},(0,e.createElement)("h1",null,(0,d.__)("Kitchen View","ddwc-multipos")),(0,e.createElement)("hr",null),n.length?(0,e.createElement)("div",{className:"ddwcpos-kitchen-orders"},n):(0,e.createElement)("p",null,(0,d.__)("You do not have any orders!!","ddwc-multipos"))),(0,e.createElement)("ul",{className:"ddwcpos-bubbles"},(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null),(0,e.createElement)("li",null)))}}])&&c(n.prototype,i),o&&c(n,o),a}(t.Component);document.addEventListener("DOMContentLoaded",(function(){a().render((0,e.createElement)(ye,null),document.getElementById("app"))}))})();for(var o in i)this[o]=i[o];i.__esModule&&Object.defineProperty(this,"__esModule",{value:!0})})();