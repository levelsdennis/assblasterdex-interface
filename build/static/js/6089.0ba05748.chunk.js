/*! For license information please see 6089.0ba05748.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[6089],{19969:function(e,t,n){n.d(t,{SS:function(){return u},sq:function(){return l},MN:function(){return c},RF:function(){return h},uO:function(){return p},I8:function(){return d}});var i=n(87253),a=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",r=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",s=n(60476);const d=(0,i.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${a});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${r});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,h=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,i.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,u=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},81029:function(e,t,n){n.r(t),n.d(t,{default:function(){return yi}});var i=n(42893),a=n(12204),o=n(80815),r=n(2304),s=n(68040),d=n(63362),l=n(80657);var c=n(62069),h=n(1579),p=n(13712);var u=e=>{const[t,n]=(0,p.useState)(Date.now());return(0,h.Z)((0,p.useCallback)((()=>{n(Date.now())}),[]),e),t},x=n(92796),m=n(55831),f=n.n(m),g=n(87253),w=n(39839),b=n(34120),y=n(10362),C=n(15387),_=n(34578),j=n(1990);const v=g.default.div.withConfig({displayName:"ChainConnectivityWarning__BodyRow",componentId:"sc-a6d617dc-0"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,A=(0,g.default)(_.Z).withConfig({displayName:"ChainConnectivityWarning__CautionTriangle",componentId:"sc-a6d617dc-1"})`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,z=(0,g.default)(w.dL).withConfig({displayName:"ChainConnectivityWarning__Link",componentId:"sc-a6d617dc-2"})`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,N=g.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleRow",componentId:"sc-a6d617dc-3"})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,q=g.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleText",componentId:"sc-a6d617dc-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,k=g.default.div.withConfig({displayName:"ChainConnectivityWarning__Wrapper",componentId:"sc-a6d617dc-5"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${j.e.deprecated_upToMedium}px) {
    display: block;
  }
`;function T(){const{chainId:e}=(0,o.useWeb3React)(),t=(0,s.o7)(e),n=t?.label;return(0,i.jsxs)(k,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(A,{}),(0,i.jsx)(q,{children:(0,i.jsx)(a.cC,{id:"3xf/uJ"})})]}),(0,i.jsxs)(v,{children:[e===C.ChainId.MAINNET?(0,i.jsx)(a.cC,{id:"iXzD8t"}):(0,i.jsx)(a.cC,{id:"3Fxw1j",values:{label:n}})," ",void 0!==t.statusPage&&(0,i.jsxs)("span",{children:[(0,i.jsx)(a.cC,{id:"IHlLC8"})," ",(0,i.jsx)(z,{href:t.statusPage||"",children:(0,i.jsx)(a.cC,{id:"jqVo/k"})})]})]})]})}const O=g.default.div.withConfig({displayName:"Polling__StyledPolling",componentId:"sc-1647183e-0"})`
  align-items: center;
  bottom: 0;
  color: ${({theme:e})=>e.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: flex;
  }
`,D=(0,g.default)(w.Tv.DeprecatedSmall).withConfig({displayName:"Polling__StyledPollingBlockNumber",componentId:"sc-1647183e-1"})`
  color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: opacity 0.25s ease;
  opacity: ${({breathe:e,hovering:t})=>t?.7:e?1:.5};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,E=g.default.div.withConfig({displayName:"Polling__StyledPollingDot",componentId:"sc-1647183e-2"})`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,S=g.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=g.default.div.withConfig({displayName:"Polling__Spinner",componentId:"sc-1647183e-3"})`
  animation: ${S} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`,I=f()("10m"),M=f()("10s");function H(){const{chainId:e}=(0,o.useWeb3React)(),t=(0,x.ZP)(),[n,h]=(0,p.useState)(!1),[m,f]=(0,p.useState)(!1),g=u(M),C=(0,d.Z)(),_=(0,c.GZ)(),j=function(){const{pathname:e}=(0,l.TH)();return e.endsWith("/")}(),v=(e?(0,s.bt)(e)?.blockWaitMsBeforeWarning:I)??I,A=Boolean(!!C&&g-C.mul(1e3).toNumber()>v);(0,p.useEffect)((()=>{if(!t)return;h(!0);const e=setTimeout((()=>h(!1)),1e3);return()=>{clearTimeout(e)}}),[t]);const z=(0,p.useMemo)((()=>e&&t?(0,b.E)(e,t.toString(),b.r.BLOCK):""),[t,e]);return _||j?null:(0,i.jsxs)(r.DA,{children:[(0,i.jsxs)(O,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,i.jsx)(D,{breathe:n,hovering:m,warning:A,children:(0,i.jsx)(w.dL,{href:z,children:(0,i.jsxs)(y.ud,{text:(0,i.jsx)(a.cC,{id:"MCr7bN"}),children:[t,"\u2002"]})})}),(0,i.jsx)(E,{warning:A,children:n&&(0,i.jsx)(B,{warning:A})})," "]}),A&&(0,i.jsx)(T,{})]})}var R=n(56564),L=n(437),P=n(93622),F=n(60476),W=n(50595),U=n(41432),V=n.n(U);function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Q.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G=(0,p.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,r=J(e,["color","size"]);return p.createElement("svg",Q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),p.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));G.propTypes={color:V().string,size:V().oneOfType([V().string,V().number])},G.displayName="Heart";var Z=G,X="data:image/png;base64,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",K=n(13120),Y=n(44996),$=n(60198),ee=n(19969);const te=(0,g.default)(F.Tz).withConfig({displayName:"ClaimPopup__StyledClaimPopup",componentId:"sc-9e646efd-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
  border-radius: 20px;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  max-width: 360px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`,ne=(0,g.default)(W.Z).withConfig({displayName:"ClaimPopup__StyledClose",componentId:"sc-9e646efd-1"})`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`,ie=g.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,ae=g.default.img.withConfig({displayName:"ClaimPopup__UniToken",componentId:"sc-9e646efd-2"})`
  animation: ${ie} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
`;function oe(){const{account:e}=(0,o.useWeb3React)(),t=(0,R.uL)(),n=(0,R.Lb)(),r=(0,R.Wt)(K.Lk.SELF_CLAIM),s=(0,R.G_)(),d=(0,p.useCallback)((()=>{s()}),[s]),l=(0,Y.ot)(e),c=(0,Y.jX)(e);return(0,p.useEffect)((()=>{l&&n()}),[l]),(0,i.jsx)(i.Fragment,{children:t&&!r&&(0,i.jsxs)(te,{gap:"md",children:[(0,i.jsx)(ee.sq,{}),(0,i.jsx)(ee.RF,{}),(0,i.jsx)(ne,{stroke:"white",onClick:n}),(0,i.jsxs)(F.Tz,{style:{padding:"2rem 0",zIndex:10},justify:"center",children:[(0,i.jsx)(ae,{width:"48px",src:X})," ",(0,i.jsxs)(w.Tv.DeprecatedWhite,{style:{marginTop:"1rem"},fontSize:36,fontWeight:535,children:[c?.toFixed(0,{groupSeparator:","}??"-")," UNI"]}),(0,i.jsxs)(w.Tv.DeprecatedWhite,{style:{paddingTop:"1.25rem",textAlign:"center"},fontWeight:535,color:"white",children:[(0,i.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})," ",(0,i.jsx)(a.cC,{id:"ayzlbD"})," ",(0,i.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})]}),(0,i.jsx)(w.Tv.DeprecatedSubHeader,{style:{paddingTop:"0.5rem",textAlign:"center"},color:"white",children:(0,i.jsx)(a.cC,{id:"sPI8ot",components:{0:(0,i.jsx)(Z,{size:12})}})})]}),(0,i.jsx)(F.Tz,{style:{zIndex:10},justify:"center",children:(0,i.jsx)($.DF,{padding:"8px",$borderRadius:"8px",width:"fit-content",onClick:d,children:(0,i.jsx)(a.cC,{id:"Hn7ais"})})})]})})}var re=n(31502),se=n(83379),de=n(90315),le=n(2158),ce=n(38526),he=n(79954),pe=n(15627),ue=n(55680),xe=n(28051),me=n(97905),fe=n(57482);const ge=(0,g.default)(W.Z).withConfig({displayName:"PopupContent__StyledClose",componentId:"sc-86f179ed-0"})`
  position: absolute;
  right: ${({$padding:e})=>`${e}px`};
  top: ${({$padding:e})=>`${e}px`};
  color: ${({theme:e})=>e.neutral2};

  :hover {
    cursor: pointer;
  }
`,we=g.default.div.withConfig({displayName:"PopupContent__PopupContainer",componentId:"sc-86f179ed-1"})`
  display: inline-block;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  position: relative;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  transition: ${({theme:e})=>`visibility ${e.transition.duration.fast} ease-in-out`};

  padding: ${({padded:e})=>e?"20px 35px 20px 20px":"2px 0px"};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}
`,be=(0,g.default)(r.BA).withConfig({displayName:"PopupContent__RowNoFlex",componentId:"sc-86f179ed-2"})`
  flex-wrap: nowrap;
`,ye=(0,g.default)(F.Tz).withConfig({displayName:"PopupContent__ColumnContainer",componentId:"sc-86f179ed-3"})`
  margin: 0 12px;
`,Ce=(0,g.default)(ce.Z).withConfig({displayName:"PopupContent__PopupAlertTriangle",componentId:"sc-86f179ed-4"})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function _e({chainId:e,onClose:t}){const n=(0,s.bt)(e);return(0,i.jsxs)(we,{padded:!0,children:[(0,i.jsx)(ge,{$padding:20,onClick:t}),(0,i.jsxs)(be,{gap:"12px",children:[(0,i.jsx)(Ce,{}),(0,i.jsxs)(ye,{gap:"sm",children:[(0,i.jsx)(w.Tv.SubHeader,{color:"neutral2",children:(0,i.jsx)(a.cC,{id:"HV8AwX"})}),(0,i.jsx)(w.Tv.BodySmall,{color:"neutral2",children:(0,i.jsx)(a.cC,{id:"qwMRCz",values:{0:n.label}})})]})]})]})}const je=(0,g.default)(w.Tv.BodySmall).withConfig({displayName:"PopupContent__Descriptor",componentId:"sc-86f179ed-5"})`
  ${w.cw}
`;function ve({activity:e,onClick:t,onClose:n}){const a=e.status===he.LN.Confirmed&&!e.cancelled,{ENSName:o}=(0,ue.Z)(e?.otherAccount);return(0,i.jsxs)(we,{children:[(0,i.jsx)(ge,{$padding:16,onClick:n}),(0,i.jsx)(le.ZP,{left:a?(0,i.jsx)(F.ZP,{children:(0,i.jsx)(de.V,{chainId:e.chainId,currencies:e.currencies,images:e.logos,accountAddress:e.otherAccount})}):(0,i.jsx)(Ce,{}),title:(0,i.jsx)(w.Tv.SubHeader,{children:e.title}),descriptor:(0,i.jsxs)(je,{color:"neutral2",children:[e.descriptor,o??e.otherAccount]}),onClick:t})]})}function Ae({chainId:e,hash:t,onClose:n}){const a=(0,me.kF)(t),o=(0,pe.UF)(),{formatNumber:r}=(0,fe.Gb)();if(!a)return null;const s=(0,se.tI)(a,e,o,r);if(!s)return null;return(0,i.jsx)(ve,{activity:s,onClose:n,onClick:()=>window.open((0,b.E)(s.chainId,s.hash,b.r.TRANSACTION),"_blank")})}function ze({orderHash:e,onClose:t}){const n=(0,xe.Aj)(e),a=(0,pe.UF)(),o=(0,re.y2)(),{formatNumber:r}=(0,fe.Gb)();if(!n)return null;const s=(0,se.h1)(n,a,r);if(!s)return null;return(0,i.jsx)(ve,{activity:s,onClose:t,onClick:()=>o({orderHash:e,status:n.status})})}function Ne({removeAfterMs:e,content:t,popKey:n}){const a=(0,R.J3)(),r=()=>a(n);(0,p.useEffect)((()=>{if(null===e)return;const t=setTimeout((()=>{a(n)}),e);return()=>{clearTimeout(t)}}),[n,e,a]);const{chainId:s}=(0,o.useWeb3React)();switch(t.type){case K.kQ.Transaction:return s?(0,i.jsx)(Ae,{hash:t.hash,chainId:s,onClose:r}):null;case K.kQ.Order:return(0,i.jsx)(ze,{orderHash:t.orderHash,onClose:r});case K.kQ.FailedSwitchNetwork:return(0,i.jsx)(_e,{chainId:t.failedSwitchNetwork,onClose:r})}}const qe=g.default.div.withConfig({displayName:"Popups__MobilePopupWrapper",componentId:"sc-542c5d8f-0"})`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,ke=g.default.div.withConfig({displayName:"Popups__MobilePopupInner",componentId:"sc-542c5d8f-1"})`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Te=(0,g.default)(F.Tz).withConfig({displayName:"Popups__FixedPopupColumn",componentId:"sc-542c5d8f-2"})`
  position: fixed;
  top: ${({drawerOpen:e})=>64+(e?-50:0)+"px"};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${L.k.modal};
  transition: ${({theme:e})=>`top ${e.transition.timing.inOut} ${e.transition.duration.slow}`};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`;function Oe(){const[e]=(0,P.Q5)(),t=(0,R.iT)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Te,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:[(0,i.jsx)(oe,{}),t.map((e=>(0,i.jsx)(Ne,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))]}),t?.length>0&&(0,i.jsx)(qe,{"data-testid":"popups",children:(0,i.jsx)(ke,{children:t.slice(0).reverse().map((e=>(0,i.jsx)(Ne,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))})})]})}var De,Ee=n(19903),Se=n(66196),Be=n(79371),Ie=n(50786),Me=n(50091),He=n(8809),Re=n(46920),Le=Object.defineProperty,Pe=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,Ue=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ve=(e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&Ue(e,n,t[n]);if(Pe)for(var n of Pe(t))We.call(t,n)&&Ue(e,n,t[n]);return e},Qe=(e,t)=>{var n={};for(var i in e)Fe.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&Pe)for(var i of Pe(e))t.indexOf(i)<0&&We.call(e,i)&&(n[i]=e[i]);return n};(e=>{const t=class{static encodeText(n,i){const a=e.QrSegment.makeSegments(n);return t.encodeSegments(a,i)}static encodeBinary(n,i){const a=e.QrSegment.makeBytes(n);return t.encodeSegments([a],i)}static encodeSegments(e,n,a=1,r=40,d=-1,l=!0){if(!(t.MIN_VERSION<=a&&a<=r&&r<=t.MAX_VERSION)||d<-1||d>7)throw new RangeError("Invalid value");let c,h;for(c=a;;c++){const i=8*t.getNumDataCodewords(c,n),a=s.getTotalBits(e,c);if(a<=i){h=a;break}if(c>=r)throw new RangeError("Data too long")}for(const i of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&h<=8*t.getNumDataCodewords(c,i)&&(n=i);let p=[];for(const t of e){i(t.mode.modeBits,4,p),i(t.numChars,t.mode.numCharCountBits(c),p);for(const e of t.getData())p.push(e)}o(p.length==h);const u=8*t.getNumDataCodewords(c,n);o(p.length<=u),i(0,Math.min(4,u-p.length),p),i(0,(8-p.length%8)%8,p),o(p.length%8==0);for(let t=236;p.length<u;t^=253)i(t,8,p);let x=[];for(;8*x.length<p.length;)x.push(0);return p.forEach(((e,t)=>x[t>>>3]|=e<<7-(7&t))),new t(c,n,x,d)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let i=0;i<t;i++)0==n&&0==i||0==n&&i==t-1||n==t-1&&0==i||this.drawAlignmentPattern(e[n],e[i]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let a=0;a<10;a++)n=n<<1^1335*(n>>>9);const i=21522^(t<<10|n);o(i>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,a(i,o));this.setFunctionModule(8,7,a(i,6)),this.setFunctionModule(8,8,a(i,7)),this.setFunctionModule(7,8,a(i,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,a(i,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,a(i,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,a(i,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;o(t>>>18==0);for(let n=0;n<18;n++){const e=a(t,n),i=this.size-11+n%3,o=Math.floor(n/3);this.setFunctionModule(i,o,e),this.setFunctionModule(o,i,e)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let i=-4;i<=4;i++){const a=Math.max(Math.abs(i),Math.abs(n)),o=e+i,r=t+n;0<=o&&o<this.size&&0<=r&&r<this.size&&this.setFunctionModule(o,r,2!=a&&4!=a)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)this.setFunctionModule(e+i,t+n,1!=Math.max(Math.abs(i),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,i=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,i))throw new RangeError("Invalid argument");const a=t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][n],r=t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),d=a-s%a,l=Math.floor(s/a);let c=[];const h=t.reedSolomonComputeDivisor(r);for(let o=0,u=0;o<a;o++){let n=e.slice(u,u+l-r+(o<d?0:1));u+=n.length;const i=t.reedSolomonComputeRemainder(n,h);o<d&&n.push(0),c.push(n.concat(i))}let p=[];for(let t=0;t<c[0].length;t++)c.forEach(((e,n)=>{(t!=l-r||n>=d)&&p.push(e[t])}));return o(p.length==s),p}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let o=0;o<2;o++){const r=t-o,s=0==(t+1&2)?this.size-1-i:i;!this.isFunction[s][r]&&n<8*e.length&&(this.modules[s][r]=a(e[n>>>3],7-(7&n)),n++)}}o(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let i;switch(e){case 0:i=(n+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=n%3==0;break;case 3:i=(n+t)%3==0;break;case 4:i=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:i=n*t%2+n*t%3==0;break;case 6:i=(n*t%2+n*t%3)%2==0;break;case 7:i=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&i&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let n=!1,i=0,a=[0,0,0,0,0,0,0];for(let r=0;r<this.size;r++)this.modules[o][r]==n?(i++,5==i?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),n||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),n=this.modules[o][r],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,a)*t.PENALTY_N3}for(let o=0;o<this.size;o++){let n=!1,i=0,a=[0,0,0,0,0,0,0];for(let r=0;r<this.size;r++)this.modules[r][o]==n?(i++,5==i?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),n||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),n=this.modules[r][o],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,a)*t.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let n=0;n<this.size-1;n++){const i=this.modules[o][n];i==this.modules[o][n+1]&&i==this.modules[o+1][n]&&i==this.modules[o+1][n+1]&&(e+=t.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((e,t)=>e+(t?1:0)),n);const i=this.size*this.size,a=Math.ceil(Math.abs(20*n-10*i)/i)-1;return o(0<=a&&a<=9),e+=a*t.PENALTY_N4,o(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let i=this.size-7;n.length<e;i-=t)n.splice(1,0,i);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return o(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let i=1;for(let a=0;a<e;a++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],i),e+1<n.length&&(n[e]^=n[e+1]);i=t.reedSolomonMultiply(i,2)}return n}static reedSolomonComputeRemainder(e,n){let i=n.map((e=>0));for(const a of e){const e=a^i.shift();i.push(0),n.forEach(((n,a)=>i[a]^=t.reedSolomonMultiply(n,e)))}return i}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let i=7;i>=0;i--)n=n<<1^285*(n>>>7),n^=(t>>>i&1)*e;return o(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];o(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}constructor(e,n,i,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let r=[];for(let t=0;t<this.size;t++)r.push(!1);for(let t=0;t<this.size;t++)this.modules.push(r.slice()),this.isFunction.push(r.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(i);if(this.drawCodewords(s),-1==a){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}o(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}};let n=t;function i(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let i=t-1;i>=0;i--)n.push(e>>>i&1)}function a(e,t){return 0!=(e>>>t&1)}function o(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;const r=class{static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new r(r.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!r.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const a=Math.min(e.length-n,3);i(parseInt(e.substr(n,a),10),3*a+1,t),n+=a}return new r(r.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!r.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t,n=[];for(t=0;t+2<=e.length;t+=2){let a=45*r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));a+=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),i(a,11,n)}return t<e.length&&i(r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new r(r.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:r.isNumeric(e)?[r.makeNumeric(e)]:r.isAlphanumeric(e)?[r.makeAlphanumeric(e)]:[r.makeBytes(r.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,t),i(e,21,t)}return new r(r.Mode.ECI,0,t)}static isNumeric(e){return r.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return r.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const i of e){const e=i.mode.numCharCountBits(t);if(i.numChars>=1<<e)return 1/0;n+=4+e+i.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}};let s=r;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=s})(De||(De={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};let n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(De||(De={})),(e=>{let t;(e=>{const t=class{numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}};let n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(De||(De={}));var Je=De,Ge={L:Je.QrCode.Ecc.LOW,M:Je.QrCode.Ecc.MEDIUM,Q:Je.QrCode.Ecc.QUARTILE,H:Je.QrCode.Ecc.HIGH},Ze=128,Xe="L",Ke="#FFFFFF",Ye="#000000",$e=!1,et=4,tt=.1;function nt(e,t=0){const n=[];return e.forEach((function(e,i){let a=null;e.forEach((function(o,r){if(!o&&null!==a)return n.push(`M${a+t} ${i+t}h${r-a}v1H${a+t}z`),void(a=null);if(r!==e.length-1)o&&null===a&&(a=r);else{if(!o)return;null===a?n.push(`M${r+t},${i+t} h1v1H${r+t}z`):n.push(`M${a+t},${i+t} h${r+1-a}v1H${a+t}z`)}}))})),n.join("")}function it(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function at(e,t,n,i){if(null==i)return null;const a=n?et:0,o=e.length+2*a,r=Math.floor(t*tt),s=o/t,d=(i.width||r)*s,l=(i.height||r)*s,c=null==i.x?e.length/2-d/2:i.x*s,h=null==i.y?e.length/2-l/2:i.y*s;let p=null;if(i.excavate){let e=Math.floor(c),t=Math.floor(h);p={x:e,y:t,w:Math.ceil(d+c-e),h:Math.ceil(l+h-t)}}return{x:c,y:h,h:l,w:d,excavation:p}}!function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}}();function ot(e){const t=e,{value:n,size:i=Ze,level:a=Xe,bgColor:o=Ke,fgColor:r=Ye,includeMargin:s=$e,imageSettings:d}=t,l=Qe(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let c=Je.QrCode.encodeText(n,Ge[a]).getModules();const h=s?et:0,u=c.length+2*h,x=at(c,i,s,d);let m=null;null!=d&&null!=x&&(null!=x.excavation&&(c=it(c,x.excavation)),m=p.createElement("image",{xlinkHref:d.src,height:x.h,width:x.w,x:x.x+h,y:x.y+h,preserveAspectRatio:"none"}));const f=nt(c,h);return p.createElement("svg",Ve({height:i,width:i,viewBox:`0 0 ${u} ${u}`},l),p.createElement("path",{fill:o,d:`M0,0 h${u}v${u}H0z`,shapeRendering:"crispEdges"}),p.createElement("path",{fill:r,d:f,shapeRendering:"crispEdges"}),m)}var rt=n(36633),st=n.p+"static/media/uniwallet_modal_icon.e17cdec93dd86d3fe3b7.png",dt=n(27936);const lt=g.default.button.withConfig({displayName:"DownloadButton__StyledButton",componentId:"sc-51da4631-0"})`
  ${w.iV}
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 8px 24px;
  border: none;
  white-space: nowrap;
  background: ${({theme:e,branded:t})=>t?e.accent1:e.surface3};
  border-radius: 12px;

  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme:e,branded:t})=>t?e.deprecated_accentTextLightPrimary:e.neutral1};
`;function ct({onClick:e,branded:t,children:n}){return(0,i.jsx)(lt,{branded:t,onClick:e,children:n})}function ht({onClick:e,text:t="Download",element:n}){const a=(0,p.useCallback)((()=>{e?.(),(0,dt.J8)({element:n})}),[n,e]);return(0,i.jsx)(ct,{branded:!0,onClick:a,children:t})}const pt=(0,g.default)(r.m0).withConfig({displayName:"UniwalletModal__UniwalletConnectWrapper",componentId:"sc-23030e47-0"})`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
`,ut=(0,g.default)(r.m0).withConfig({displayName:"UniwalletModal__HeaderRow",componentId:"sc-23030e47-1"})`
  display: flex;
`,xt=(0,g.default)(r.m0).withConfig({displayName:"UniwalletModal__QRCodeWrapper",componentId:"sc-23030e47-2"})`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.white};
  margin: 24px 32px 20px;
  padding: 10px;
`,mt=g.default.div.withConfig({displayName:"UniwalletModal__Divider",componentId:"sc-23030e47-3"})`
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
`;function ft(){const{activationState:e,cancelActivation:t}=(0,Me.Y)(),[n,o]=(0,p.useState)(),r=!(rt.gn||rt.Dt)&&e.status===Me.o.PENDING&&e.connection.type===He.R.UNISWAP_WALLET_V2&&!!n;(0,p.useEffect)((()=>{Ie.uq.connector.events.addListener(Re.Z.UNI_URI_AVAILABLE,(e=>{e&&o(e)}))}),[]),(0,p.useEffect)((()=>{r&&(0,Se._P)(Ee.Je.UNIWALLET_CONNECT_MODAL_OPENED)}),[r]);const s=(0,g.useTheme)();return(0,i.jsx)(Be.Z,{isOpen:r,onDismiss:t,children:(0,i.jsxs)(pt,{children:[(0,i.jsxs)(ut,{children:[(0,i.jsx)(w.Tv.SubHeader,{children:(0,i.jsx)(a.cC,{id:"4Ock4M"})}),(0,i.jsx)(w.Tw,{onClick:t})]}),(0,i.jsx)(xt,{children:n&&(0,i.jsx)(ot,{value:n,width:"100%",height:"100%",level:"M",fgColor:s.darkMode?s.surface1:s.black,imageSettings:{src:st,height:33,width:33,excavate:!1}})}),(0,i.jsx)(mt,{}),(0,i.jsx)(wt,{})]})})}const gt=(0,g.default)(r.m0).withConfig({displayName:"UniwalletModal__InfoSectionWrapper",componentId:"sc-23030e47-4"})`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
`;function wt(){return(0,i.jsxs)(gt,{children:[(0,i.jsxs)(F.Tz,{gap:"4px",children:[(0,i.jsx)(w.Tv.SubHeaderSmall,{color:"neutral1",children:(0,i.jsx)(a.cC,{id:"fo1Rgf"})}),(0,i.jsx)(w.Tv.BodySmall,{color:"neutral2",children:(0,i.jsx)(a.cC,{id:"hcdupZ"})})]}),(0,i.jsx)(F.ZP,{children:(0,i.jsx)(ht,{element:Ee.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON})})]})}var bt=n(86003),yt=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"ClaimWindowFinished","type":"error"},{"inputs":[],"name":"EndTimeInPast","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"NoWithdrawDuringClaim","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),Ct=n.p+"static/media/airdopBackground.7f54f314ceca6a012b57.png",_t=n(62329),jt=n(25575),vt=n(36665),At=n(26030),zt=n(634);var Nt;!function(e){e.LOOKS_RARE_NFT_COMMERCE_REWARDS="LOOKS_RARE_NFT_COMMERCE_REWARDS",e.GENIE_UNISWAP_USDC_AIRDROP="GENIE_UNISWAP_USDC_AIRDROP"}(Nt||(Nt={}));const qt=g.default.div.withConfig({displayName:"AirdropModal__ModalWrap",componentId:"sc-2e5fa0a7-0"})`
  display: flex;
  flex-direction: column;
`,kt=g.default.div.withConfig({displayName:"AirdropModal__Body",componentId:"sc-2e5fa0a7-1"})`
  padding: 28px 20px 20px 20px;
`,Tt=(0,g.default)($.UH).withConfig({displayName:"AirdropModal__ClaimButton",componentId:"sc-2e5fa0a7-2"})`
  width: 100%;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 12px;
  color: ${({theme:e})=>e.white};
`,Ot=g.default.div.withConfig({displayName:"AirdropModal__Line",componentId:"sc-2e5fa0a7-3"})`
  height: 1px;
  width: 100%;
  background-color: ${({theme:e})=>e.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`,Dt=g.default.a.withConfig({displayName:"AirdropModal__LinkWrap",componentId:"sc-2e5fa0a7-4"})`
  text-decoration: none;
  ${_t.c}
`,Et=g.default.div.withConfig({displayName:"AirdropModal__ImageContainer",componentId:"sc-2e5fa0a7-5"})`
  position: relative;
  width: 100%;
`,St=g.default.img.withConfig({displayName:"AirdropModal__StyledImage",componentId:"sc-2e5fa0a7-6"})`
  width: 100%;
  height: 170px;
`,Bt=g.default.div.withConfig({displayName:"AirdropModal__USDCLabel",componentId:"sc-2e5fa0a7-7"})`
  font-weight: 535;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
  color: white;
`,It=g.default.div.withConfig({displayName:"AirdropModal__TextContainer",componentId:"sc-2e5fa0a7-8"})`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
`,Mt=g.default.div.withConfig({displayName:"AirdropModal__RewardsDetailsContainer",componentId:"sc-2e5fa0a7-9"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Ht=g.default.span.withConfig({displayName:"AirdropModal__CurrencyText",componentId:"sc-2e5fa0a7-10"})`
  color: white;
  font-weight: 535;
  font-size: 12px;
  line-height: 14.5px;
`,Rt=g.default.div.withConfig({displayName:"AirdropModal__ClaimContainer",componentId:"sc-2e5fa0a7-11"})`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 380px;
  padding: 60px 28px;
  padding-bottom: 20px;
`,Lt=g.default.div.withConfig({displayName:"AirdropModal__SuccessText",componentId:"sc-2e5fa0a7-12"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
`,Pt=g.default.a.withConfig({displayName:"AirdropModal__EtherscanLink",componentId:"sc-2e5fa0a7-13"})`
  text-decoration: none;

  ${_t.c}
`,Ft=(0,g.default)($.UH).withConfig({displayName:"AirdropModal__CloseButton",componentId:"sc-2e5fa0a7-14"})`
  max-width: 68px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`,Wt=(0,g.default)(w.Tw).withConfig({displayName:"AirdropModal__SyledCloseIcon",componentId:"sc-2e5fa0a7-15"})`
  float: right;
  height: 24px;

  ${_t.c}
`,Ut=g.default.div.withConfig({displayName:"AirdropModal__Error",componentId:"sc-2e5fa0a7-16"})`
  display: flex;
  color: ${({theme:e})=>e.critical};
  font-weight: 535;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 20px;
  font-size: 14px;
  align-items: center;
  gap: 12px;
`,Vt=g.default.div.withConfig({displayName:"AirdropModal__ReactLinkWrap",componentId:"sc-2e5fa0a7-17"})`
  margin-bottom: 40px;
`,Qt=g.default.span.withConfig({displayName:"AirdropModal__RewardsText",componentId:"sc-2e5fa0a7-18"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.white};

  &:first-child {
    margin-bottom: 8px;
  }
`,Jt=g.default.span.withConfig({displayName:"AirdropModal__RewardsInformationText",componentId:"sc-2e5fa0a7-19"})`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral1};
  margin-bottom: 28px;
`,Gt=g.default.span.withConfig({displayName:"AirdropModal__MainHeader",componentId:"sc-2e5fa0a7-20"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.white};
`,Zt=g.default.div.withConfig({displayName:"AirdropModal__EtherscanLinkWrap",componentId:"sc-2e5fa0a7-21"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;var Xt;!function(e){e[e.tradingRewardAmount=300]="tradingRewardAmount",e[e.holderRewardAmount=1e3]="holderRewardAmount",e[e.combinedAmount=1300]="combinedAmount"}(Xt||(Xt={}));var Kt=()=>{const{account:e,provider:t}=(0,o.useWeb3React)(),[n,a]=(0,p.useState)(),[r,s]=(0,p.useState)(!1),[d,l]=(0,p.useState)(""),[c,h]=(0,p.useState)(!1),u=(0,zt.k)((e=>e.setIsClaimAvailable)),[x,m]=(0,p.useState)(!1),[f,g]=(0,p.useState)(0),b=(0,R.Wt)(K.Lk.UNISWAP_NFT_AIRDROP_CLAIM),y=(0,R.xk)(K.Lk.UNISWAP_NFT_AIRDROP_CLAIM),j=(0,vt.cq)(C.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS,yt),v=()=>{m(!1),h(!0),setTimeout((()=>{h(!1)}),5e3)};(0,p.useEffect)((()=>{e&&t&&j&&(async()=>{try{const{data:n}=await(async e=>{const t=`https://temp.api.uniswap.org/v1/nft/rewards/${e}?category=GENIE_UNISWAP_USDC_AIRDROP`,n=new AbortController,i=setTimeout((()=>n.abort()),3e3),a=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});return clearInterval(i),await a.json()})(e),i=n.find((e=>e?.rewardType===Nt.GENIE_UNISWAP_USDC_AIRDROP));if(!i)return;const[o]=await j.connect(t).functions.isClaimed(i?.index);if(i&&!1===o){const e=bt.O$.from(i.amount).div(10**6);a(i),g(e.toNumber()),u(!0)}}catch(n){v()}})()}),[e,j,t,u]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(Be.Z,{hideBorder:!0,isOpen:b,onDismiss:y,maxHeight:90,maxWidth:400,children:(0,i.jsx)(qt,{children:r?(0,i.jsxs)(Rt,{children:[(0,i.jsx)(w.Tv.HeadlineSmall,{children:"Congratulations!"}),(0,i.jsxs)(Lt,{children:["You have successfully claimed ",f," USDC. Thank you for supporting Genie.xyz."]}),(0,i.jsx)(Pt,{href:`https://etherscan.io/tx/${d}`,target:"_blank",children:(0,i.jsx)(w.Tv.Link,{children:(0,i.jsxs)(Zt,{children:[(0,i.jsx)("span",{children:"Etherscan"}),(0,i.jsx)(At.XC,{})]})})}),(0,i.jsx)(Ft,{size:$.qE.medium,emphasis:$.eI.medium,onClick:y,children:"Close"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Et,{children:[(0,i.jsxs)(It,{children:[(0,i.jsx)(Wt,{onClick:y,stroke:"white"}),(0,i.jsx)(Gt,{children:"Uniswap NFT Airdrop"}),(0,i.jsxs)(Bt,{children:[f," USDC"]}),(0,i.jsx)(Ot,{}),(0,i.jsxs)(Mt,{children:[(0,i.jsx)(Qt,{children:"Trading rewards"})," ",(0,i.jsx)(Ht,{children:f===Xt.tradingRewardAmount||f===Xt.combinedAmount?`${Xt.tradingRewardAmount} USDC`:"0"})]}),(0,i.jsxs)(Mt,{children:[(0,i.jsx)(Qt,{children:"Genie NFT holder rewards"})," ",(0,i.jsx)(Ht,{children:f!==Xt.tradingRewardAmount?`${Xt.holderRewardAmount} USDC`:"0"})]})]}),(0,i.jsx)(St,{src:Ct})]}),(0,i.jsxs)(kt,{children:[(0,i.jsxs)(Jt,{children:["As a long time supporter of Genie, you\u2019ve been awarded ",f," USDC tokens."]}),(0,i.jsx)(Vt,{children:(0,i.jsx)(Dt,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",target:"_blank",children:(0,i.jsx)(w.Tv.Link,{children:"Read more about Uniswap NFT."})})}),c&&(0,i.jsxs)(Ut,{children:[(0,i.jsx)(_.Z,{}),"Claim USDC failed. Please try again later"]}),(0,i.jsxs)(Tt,{onClick:async()=>{try{if(j&&n&&n.amount&&n.merkleProof&&t){m(!0);const i=await j.connect(t?.getSigner()).functions.claim(n.index,e,n?.amount,n?.merkleProof);await i.wait(),l(i.hash),m(!1),s(!0),u(!1)}}catch(i){m(!1),v()}},size:$.qE.medium,emphasis:$.eI.medium,disabled:x,children:[x&&(0,i.jsx)(jt.ZP,{stroke:"white"}),(0,i.jsxs)("span",{children:["Claim",x&&"ing"," USDC"]})]})]})]})})})})},Yt=n(49912),$t=n(64614),en=n(78174),tn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGoAAARqAQAAAAA4zK6rAAAEdElEQVR4Ae3dQWrtSAwFUEMW8Jf0tt5LygIC6Ykw3XUVoeB8yODcWfHsqpMMhUq+Pn9T/sHBwcHBwcHBwcHBwcH5qeDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OB8XF+mnni/ruv1n4f/v/xTT13X9VYPV97us9rUuxMHBwcHBwcHBwcHBwcHBwcHJ7a8U3vEgZU4sNnqPrC2inx8j4ODg4ODg4ODg4ODg4ODg4NTL+Uefbmlra9UVlvh4ODg4ODg4ODg4ODg4ODg/CDn8+jyiOVwfgUHBwcHBwcHBwcHBwcHBwfn73HipUN3vHvcgDmwODg4ODg4ODg4ODg4ODg4OM85kWOPVw7eOB6uX5s8v2ODg4ODg4ODg4ODg4ODg4ODk2lKJg+XTRYcHBwcHBwcHBwcHBwcHBwcnDnjt1Dyyku2hNSBq+Dg4ODg4ODg4ODg4ODg4IzByaaP7PLIto48cC7GVP7kzjg4ODg4ODg4ODg4ODg4ODjf5uQJuccGOw/tuH+dOTg4ODg4ODg4ODg4ODg4ODiRGLxR2Ep74J14t/Kcg4ODg4ODg4ODg4ODg4ODgzOXPTL1eiVbQvoDC9u3k+Dg4ODg4ODg4ODg4ODgTMHB6esc2QNy2u9lm9dYbknszMHBwcHBwcHBwcHBwcHBwcGJsse6gtL9On8p5QgODg4ODg4ODg4ODg4ODg7OghPJF9qCyiZzw8ixMw4ODg4ODg4ODg4ODk4EBwdnW1DpONv0O7/j4ODg4ODg4ODg4ODg4ODgfJ8zDt5Yjx19xa9Dh0j+G3BwcHBwcHBwcHBwcHBwcHD2nH44aC0jx5apu/Ld+HAKDg5OBgcHBwcHBwcHBwcHB2f3aZRo61hMIW202QNyL/dfasHBwcHBwcHBwcHBwcHBwcHJKsg4OvQtOHeOraZySwYHBwcngoODg4ODg4ODg4OD0xdUKllfCeyjKy/3EgcHBwcHBwcHBwcHBwcHB2fL6e+a7K68LCoouXNO6cDBwcHBwcHBwcHBwcHBwcGZOVH2iB6Q4FT6ayv9hZj8U3BwcHBwcHBwcHBwcHBwcHC2nNyynQYaiRsw8XBmGMuBg4ODg4ODg4ODg4ODg4ODsx8smn0cQ7klGkaW2Y/lwMHBwcHBwcHBwcHBwcHBwVkkOXkDZugfyTsuucTBwcHBwcHBwcHBwcHBwVkEpw7skmNHe85Qm8ll2nFwcHBwcHBwcHBwcHBwcHA2nP5rrv3gjTu7ayuJzeDg4ODg4ODg4ODg4ODg4ODcefpx1+wQGWZ4tKWam1P2xxwcHBwcHBwcHBwcHBwcHByc4/z5e60HJ36Nd59zcHBwcHBwcHBwcHBwcHBwcKKg0mPvZSW3mqd04ODg4ODg4ODg4ODg4ODg4Gw5kTywX+alluwfeX7HBgcHBwcHBwcHBwcHBwcHB+er9Htkuq2CExM+cHBwdsHBwcHBwcHBwcHBwcH5HcHBwXkeHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHJx/AcMLmLJbTAHDAAAAAElFTkSuQmCC",nn=n.p+"static/media/AndroidWallet-Thumbnail-Dark.2652abb9540f85b5c0dd.png",an=n.p+"static/media/AndroidWallet-Thumbnail-Light.d9dcf6b217d42df80371.png";const on=g.default.div.withConfig({displayName:"styled__PopupContainer",componentId:"sc-22477b6d-0"})`
  ${({show:e})=>!e&&"display: none"};
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral1};
  position: fixed;
  z-index: ${L.k.sticky};
  user-select: none;
  border-radius: 20px;
  bottom: 40px;
  right: 20px;
  width: 360px;
  height: 92px;
  border: 1.3px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${j.j$.md}px) {
    bottom: 62px;
  }

  @media only screen and (max-width: ${j.j$.xs}px) {
    width: unset;
    right: 10px;
    left: 10px;
  }
`,rn=(0,g.default)(W.Z).withConfig({displayName:"styled__StyledXButton",componentId:"sc-22477b6d-1"})`
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: 0px;
  padding: 4px;
  border-radius: 50%;

  background-color: ${({theme:e})=>e.surface5};
  color: ${({theme:e})=>e.neutral2};
  ${_t.c};

  @media only screen and (max-width: ${j.j$.xs}px) {
    top: 8px;
    right: 8px;
  }
`,sn=g.default.div.withConfig({displayName:"styled__Container",componentId:"sc-22477b6d-2"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  gap: 16px;
`,dn=g.default.img.withConfig({displayName:"styled__Thumbnail",componentId:"sc-22477b6d-3"})`
  width: 82px;
`,ln=g.default.div.withConfig({displayName:"styled__TextContainer",componentId:"sc-22477b6d-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: ${({theme:e})=>e.neutral2};
  padding: 10px 0px 10px;
  line-height: 16px;

  @media only screen and (max-width: ${j.j$.xs}px) {
    width: 220px;
  }
`,cn=g.default.img.withConfig({displayName:"styled__StyledQrCode",componentId:"sc-22477b6d-5"})`
  padding: 2px;
  border-radius: 8px;
  width: 64px;
  height: 64px;
  background-color: ${({theme:e})=>e.white};
  margin-right: 16px;

  @media only screen and (max-width: ${j.j$.xs}px) {
    display: none;
  }
`,hn=(0,g.default)($.oD).withConfig({displayName:"styled__DownloadButton",componentId:"sc-22477b6d-6"})`
  line-height: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.accent1};
`;function pn(){const[e,t]=(0,$t.Ij)(),n=(0,l.TH)(),o="?intro=true"===n.search||"/"===n.pathname,r=(0,Yt.e)(),s=Boolean(!e&&!o),d=(0,en.Gv)(),c=()=>(0,dt.J8)({element:Ee.xo.UNISWAP_WALLET_BANNER_DOWNLOAD_BUTTON});return rt.TL?null:(0,i.jsx)(on,{show:s,children:(0,i.jsxs)(sn,{children:[(0,i.jsx)(dn,{src:d?nn:an,alt:"Android app thumbnail"}),(0,i.jsxs)(ln,{onClick:r.xs?void 0:c,children:[(0,i.jsx)(w.Tv.BodySmall,{lineHeight:"20px",children:(0,i.jsx)(a.cC,{id:"O3YvfB"})}),(0,i.jsx)(w.Tv.LabelMicro,{children:(0,i.jsx)(a.cC,{id:"RWndOD"})}),(0,i.jsx)(hn,{onClick:e=>{e.stopPropagation(),c()},children:(0,i.jsx)(a.cC,{id:"aB6Nqf"})})]}),(0,i.jsx)(cn,{src:tn,alt:"App OneLink QR code"}),(0,i.jsx)(rn,{"data-testid":"uniswap-wallet-banner",size:24,onClick:e=>{e.preventDefault(),e.stopPropagation(),t()}})]})})}var un=n(23586),xn=n(47096),mn=n(83777),fn=n(68456),gn=n(48662),wn=n(73440);const bn=(0,g.default)(F.Tz).withConfig({displayName:"AddressClaimModal__ContentWrapper",componentId:"sc-72f6d890-0"})`
  width: 100%;
`,yn=(0,g.default)(ee.I8).withConfig({displayName:"AddressClaimModal__ModalUpper",componentId:"sc-72f6d890-1"})`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
`,Cn=g.default.div.withConfig({displayName:"AddressClaimModal__ConfirmOrLoadingWrapper",componentId:"sc-72f6d890-2"})`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({activeBG:e})=>e&&"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"};
`,_n=(0,g.default)(F.lg).withConfig({displayName:"AddressClaimModal__ConfirmedIcon",componentId:"sc-72f6d890-3"})`
  padding: 60px 0;
`;function jn({isOpen:e,onDismiss:t}){const{chainId:n}=(0,o.useWeb3React)(),[s,d]=(0,p.useState)("");const{address:l}=(0,gn.Z)(s),[c,h]=(0,p.useState)(!1),{claimCallback:u}=(0,Y.NH)(l),x=(0,Y.jX)(l),m=(0,Y.ot)(l),[f,g]=(0,p.useState)(),y=(0,me.ub)(f??""),C=f&&!y;function _(){h(!1),g(void 0),d(""),t()}return(0,i.jsxs)(Be.Z,{isOpen:e,onDismiss:_,maxHeight:90,children:[!c&&(0,i.jsxs)(bn,{gap:"lg",children:[(0,i.jsxs)(yn,{children:[(0,i.jsx)(ee.sq,{}),(0,i.jsx)(ee.RF,{}),(0,i.jsxs)(ee.uO,{gap:"md",children:[(0,i.jsxs)(r.m0,{children:[(0,i.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(a.cC,{id:"OT2U3c"})}),(0,i.jsx)(w.Tw,{onClick:_,style:{zIndex:99},stroke:"white"})]}),(0,i.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,fontSize:36,children:(0,i.jsx)(a.cC,{id:"191ekK",values:{0:x?.toFixed(0,{groupSeparator:","}??"-")}})})]}),(0,i.jsx)(ee.SS,{})]}),(0,i.jsxs)(F.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,i.jsx)(w.Tv.DeprecatedSubHeader,{fontWeight:535,children:(0,i.jsx)(a.cC,{id:"8Utjse"})}),(0,i.jsx)(wn.Z,{value:s,onChange:function(e){d(e)}}),l&&!m&&(0,i.jsx)(w.Tv.DeprecatedError,{error:!0,children:(0,i.jsx)(a.cC,{id:"YRWR01"})}),(0,i.jsx)($.DF,{disabled:!(0,un.isAddress)(l??"")||!m,padding:"16px 16px",width:"100%",$borderRadius:"12px",mt:"1rem",onClick:function(){h(!0),u().then((e=>{g(e)})).catch((e=>{h(!1),console.log(e)}))},children:(0,i.jsx)(a.cC,{id:"Vv5NYl"})})]})]}),(c||C)&&(0,i.jsxs)(Cn,{activeBG:!0,children:[(0,i.jsx)(ee.RF,{}),(0,i.jsx)(ee.MN,{desaturate:!0}),(0,i.jsxs)(r.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(w.Tw,{onClick:_,style:{zIndex:99},stroke:"black"})]}),(0,i.jsx)(_n,{children:C?(0,i.jsx)(w.M3,{width:"72px",src:X,alt:"UNI logo"}):(0,i.jsx)(w._1,{src:fn.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(F.Tz,{gap:"100px",justify:"center",children:[(0,i.jsxs)(F.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:C?(0,i.jsx)(a.cC,{id:"hRWvpI"}):(0,i.jsx)(a.cC,{id:"KvG1xW"})}),!C&&(0,i.jsx)(xn.xv,{fontSize:36,color:"#ff007a",fontWeight:535,children:(0,i.jsx)(a.cC,{id:"191ekK",values:{0:x?.toFixed(0,{groupSeparator:","}??"-")}})}),l&&(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:(0,i.jsx)(a.cC,{id:"PqfYW9",values:{0:(0,mn.Xn)(l)}})})]}),C&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(w.Tv.DeprecatedSubHeader,{fontWeight:535,color:"black",children:[(0,i.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),(0,i.jsx)(a.cC,{id:"zArj19"}),(0,i.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),c&&!f&&(0,i.jsx)(w.Tv.DeprecatedSubHeader,{color:"black",children:(0,i.jsx)(a.cC,{id:"oG26Rt"})}),c&&f&&!C&&n&&f&&(0,i.jsx)(w.dL,{href:(0,b.E)(n,f,b.r.TRANSACTION),style:{zIndex:99},children:(0,i.jsx)(a.cC,{id:"yVxaEc"})})]})]})]})}var vn=n(22261);const An=(0,g.default)(F.ZP).withConfig({displayName:"ConnectedAccountBlocked__ContentWrapper",componentId:"sc-be9117f-0"})`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`;function zn(e){const t=(0,g.useTheme)();return(0,i.jsx)(Be.Z,{isOpen:e.isOpen,onDismiss:Function.prototype(),children:(0,i.jsxs)(An,{children:[(0,i.jsx)(vn.$,{size:"22px"}),(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{lineHeight:2,marginBottom:1,marginTop:1,children:(0,i.jsx)(a.cC,{id:"c2y/7S"})}),(0,i.jsx)(w.Tv.DeprecatedDarkGray,{fontSize:12,marginBottom:12,children:e.account}),(0,i.jsxs)(w.Tv.DeprecatedMain,{fontSize:14,marginBottom:12,children:[(0,i.jsx)(a.cC,{id:"hycRWp"})," ",(0,i.jsx)(w.dL,{href:"https://help.uniswap.org/en/articles/6149816",children:(0,i.jsx)(a.cC,{id:"Tz0GSZ"})}),"."]}),(0,i.jsxs)(w.Tv.DeprecatedMain,{fontSize:12,children:[(0,i.jsx)(a.cC,{id:"WpREeE"})," "]}),(0,i.jsx)(w.WD,{toCopy:"compliance@uniswap.org",fontSize:14,iconSize:16,color:t.accent1,iconPosition:"right",children:"compliance@uniswap.org"})]})})}const Nn=["eth","eth_arbitrum","eth_optimism","eth_polygon","weth","wbtc","matic_polygon","polygon","usdc_arbitrum","usdc_optimism","usdc_polygon","usdc","usdt"];var qn=n(58025),kn=n(17487);const Tn=[he.qo.Ethereum,he.qo.Polygon,he.qo.Arbitrum,he.qo.Optimism],On={[he.qo.Ethereum]:{[C.WETH9[C.ChainId.MAINNET]?.address.toLowerCase()]:"weth",[qn.Hz.address.toLowerCase()]:"usdc",[qn.AA.address.toLowerCase()]:"usdt",[qn.ML.address.toLowerCase()]:"wbtc",[qn.Al.address.toLowerCase()]:"polygon",native:"eth"},[he.qo.Arbitrum]:{[qn.pj.address.toLowerCase()]:"usdc_arbitrum",native:"eth_arbitrum"},[he.qo.Optimism]:{[qn.SP.address.toLowerCase()]:"usdc_optimism",native:"eth_optimism"},[he.qo.Polygon]:{[qn.QF.address.toLowerCase()]:"usdc_polygon",[qn.H8.address.toLowerCase()]:"eth_polygon",native:"matic_polygon"}};function Dn(e,t){const n=(0,kn.Qj)(t);if(!e||!n)return"eth";if(Tn.includes(n)){const t=On[n]?.[e.toLowerCase()];return t??"eth"}return"eth"}const En="#1c1c1e",Sn=g.default.div.withConfig({displayName:"FiatOnrampModal__Wrapper",componentId:"sc-a6842f3-0"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?En:t.white};
  border-radius: 20px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  flex: 1 1;
  min-width: 375px;
  position: relative;
  width: 100%;
`,Bn=(0,g.default)(w.Tv.BodyPrimary).withConfig({displayName:"FiatOnrampModal__ErrorText",componentId:"sc-a6842f3-1"})`
  color: ${({theme:e})=>e.critical};
  margin: auto !important;
  text-align: center;
  width: 90%;
`,In=g.default.iframe.withConfig({displayName:"FiatOnrampModal__StyledIframe",componentId:"sc-a6842f3-2"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?En:t.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`,Mn=(0,g.default)(w._1).withConfig({displayName:"FiatOnrampModal__StyledSpinner",componentId:"sc-a6842f3-3"})`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
`;function Hn(){const{account:e}=(0,o.useWeb3React)(),t=(0,g.useTheme)(),n=(0,en.Gv)(),r=(0,R._x)(),s=(0,R.Wt)(K.Lk.FIAT_ONRAMP),{network:d,tokenAddress:c}=function(e){const t=e.split("/");return{network:t.length>2?t[t.length-2]:void 0,tokenAddress:t.length>2?t[t.length-1]:void 0}}(location.pathname),[h,u]=(0,p.useState)(null),[x,m]=(0,p.useState)(null),[f,b]=(0,p.useState)(!1),y=(0,l.oQ)("/swap"),C=(0,p.useCallback)((async()=>{if(e){b(!0),m(null);try{const i="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",a=await fetch(i,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({theme:n?"dark":"light",colorCode:t.accent1,defaultCurrencyCode:Dn(c,d),redirectUrl:y,walletAddresses:JSON.stringify(Nn.reduce(((t,n)=>({...t,[n]:e})),{}))})}),{url:o}=await a.json();u(o)}catch(i){console.log("there was an error fetching the link",i),m(i.toString())}finally{b(!1)}}else m("Please connect an account before making a purchase.")}),[e,n,d,y,t.accent1,c]);return(0,p.useEffect)((()=>{C()}),[C]),(0,i.jsx)(Be.Z,{isOpen:s,onDismiss:()=>r(),height:80,children:(0,i.jsx)(Sn,{"data-testid":"fiat-onramp-modal",isDarkMode:n,children:x?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.Tv.MediumHeader,{children:(0,i.jsx)(a.cC,{id:"hn5VGM"})}),(0,i.jsxs)(Bn,{children:[(0,i.jsx)(a.cC,{id:"ywDBfs"}),(0,i.jsx)("br",{}),x]})]}):f?(0,i.jsx)(Mn,{src:fn.Z,alt:"loading spinner",size:"90px"}):(0,i.jsx)(In,{src:h??"",frameBorder:"0",title:"fiat-onramp-iframe",isDarkMode:n})})})}var Rn=n(57878);const Ln=(0,g.default)(F.ZP).withConfig({displayName:"UkDisclaimerModal__Wrapper",componentId:"sc-8f9673eb-0"})`
  padding: 8px;
`,Pn=(0,g.default)(F.ZP).withConfig({displayName:"UkDisclaimerModal__ButtonContainer",componentId:"sc-8f9673eb-1"})`
  padding: 8px 12px 4px;
`,Fn=(0,g.default)(w.oD).withConfig({displayName:"UkDisclaimerModal__CloseIconWrapper",componentId:"sc-8f9673eb-2"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`,Wn=(0,g.default)($.UH).withConfig({displayName:"UkDisclaimerModal__StyledThemeButton",componentId:"sc-8f9673eb-3"})`
  width: 100%;
`;function Un(){const e=(0,R.Wt)(K.Lk.UK_DISCLAIMER),t=(0,R._x)();return(0,i.jsx)(Be.Z,{isOpen:e,onDismiss:t,children:(0,i.jsxs)(Ln,{gap:"md",children:[(0,i.jsx)(Fn,{onClick:()=>t(),children:(0,i.jsx)(W.Z,{size:24})}),(0,i.jsxs)(F.ZP,{gap:"sm",children:[(0,i.jsx)(w.Tv.HeadlineLarge,{padding:"0px 8px",fontSize:"24px",lineHeight:"32px",children:(0,i.jsx)(a.cC,{id:"mCcDO+"})}),(0,i.jsx)(w.Tv.BodyPrimary,{padding:"8px 8px 12px",lineHeight:"24px",children:Rn.Fb})]}),(0,i.jsx)(Pn,{gap:"md",children:(0,i.jsx)(Wn,{size:$.qE.large,emphasis:$.eI.medium,onClick:()=>t(),children:(0,i.jsx)(a.cC,{id:"1QfxQT"})})})]})})}var Vn=n(46839),Qn=n(5967),Jn=n(67621),Gn=n(86333),Zn=n(34063);const Xn=g.default.div.withConfig({displayName:"DevFlagsBox__Box",componentId:"sc-16c269a1-0"})`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({theme:e})=>e.surface1};
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.accent1};
  z-index: 1000;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 70px;
  }
`,Kn=g.default.div.withConfig({displayName:"DevFlagsBox__TopBar",componentId:"sc-16c269a1-1"})`
  display: flex;
  justify-content: space-between;
`,Yn=(e,t)=>{const n=(0,Gn.useGate)(e);if(n){const{value:a}=n,o=t[e],r=o===Vn.Wn.Enabled;if(o&&a!==r)return(0,i.jsxs)(w.Tv.LabelSmall,{children:[e,": ",o]},e)}return null},$n=(e,t)=>{const n=(0,Qn.A)(e);if(n){const a=n.getValue(),o=t[e];if(o&&a!==o)return(0,i.jsxs)(w.Tv.LabelSmall,{children:[e,": ",JSON.stringify(o[e])]},e)}return null};function ei(){const e=(0,Jn.Dv)(Vn.Kd),t=(0,p.useMemo)((()=>Object.values(Vn.TT)),[]),n=(0,Jn.Dv)(Vn.zp),a=(0,p.useMemo)((()=>Object.values(Qn.X)),[]),o=t.map((t=>Yn(t,e)));a.forEach((e=>o.push($n(e,n))));const r=o.some((e=>null!==e)),[s,d]=(0,p.useState)(!0);return(0,i.jsxs)(Xn,{children:[(0,i.jsxs)(Kn,{onClick:()=>d((e=>!e)),children:[s?"\ud83d\ude3a\ud83d\udc47":"\ud83d\ude3f\u261d\ufe0f",s&&(0,i.jsxs)(w.Tv.SubHeader,{children:[(0,Zn.mb)()&&"Staging build overrides",(0,Zn.aD)()&&"Development build overrides"]})]}),s&&(r?o:(0,i.jsx)(w.Tv.LabelSmall,{children:"No overrides"}))]})}var ti=n(63498);var ni=n(11428),ii=n(69867),ai=n(56878),oi=n(57873),ri=n(55867),si=n(2994),di=n(14031),li=n(17669),ci=n(5658),hi=n(1004),pi=n(12113),ui=n(43922),xi=(n(16091),"_1d3cgvi7 _1xzbheqd9 _1xzbheq4b9 _1xzbheqbl _1xzbheqpr _1xzbheqv9 _1xzbheqvl _1xzbheqfx _1xzbheqfm"),mi="_1d3cgvim _1xzbheqb9 _1xzbheq4bf _1xzbheqvr _1xzbheqf3",fi="_1d3cgviy _1xzbheq4bf _1xzbheqb3 _1xzbheql3";const gi=g.default.a.withConfig({displayName:"TransactionCompleteModal__UploadLink",componentId:"sc-4f2b79f0-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${_t.c}

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`;var wi=()=>{const e=(0,ci.$N)(),{formatEther:t,formatNumberOrString:n}=(0,fe.Gb)(),[o,r]=(0,p.useState)(!1),s=(0,ci.pQ)((e=>e.txHash)),d=(0,ci.pQ)((e=>e.purchasedWithErc20)),l=(0,ci.pQ)((e=>e.setState)),c=(0,ci.pQ)((e=>e.state)),h=(0,p.useRef)(c),u=(0,ci.JC)((e=>e.transactionResponse)),x=(0,ci.JC)((e=>e.setTransactionResponse)),m=(0,ci.dD)(),f=(0,b.E)(1,s,b.r.TRANSACTION),g=(c===hi.c$.Success||c===hi.c$.Failed)&&c,w=(0,Se.oO)({modal:Ee.KO.NFT_TX_COMPLETE}),{nftsPurchased:y,nftsNotPurchased:C,showPurchasedModal:_,showRefundModal:j,totalPurchaseValue:v,totalRefundValue:A,totalUSDRefund:z,txFeeFiat:N}=(0,p.useMemo)((()=>(0,pi.lb)(u,e)),[u,e]);function q(){x({}),l(hi.c$.New)}(0,p.useEffect)((()=>{ci.pQ.subscribe((e=>h.current=e.state))}),[]);return(0,i.jsx)(i.Fragment,{children:g&&(0,i.jsxs)(ri.h,{children:[(0,i.jsx)(di.a,{onClick:q}),(0,i.jsxs)(oi.n,{className:"_1d3cgvi1 _1xzbheq2dr _1xzbheq2j9 _1xzbheq2rf _1xzbheq2ax _1xzbheq44r _1xzbheq48r _1xzbheq1dr _1xzbheq16r _1xzbheq16y _1xzbheq343 _1xzbheq394 _1xzbheq3f3 _1xzbheq3rl _1xzbheq8bp",onClick:q,children:[_&&(0,i.jsx)(Se.fM,{name:Ee.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:y.length,usd_value:parseFloat((0,ii.formatEther)(v))*e,transaction_hash:s,using_erc20:d,...(0,ui.H)(y),...w},shouldLogImpression:!0,children:(0,i.jsxs)(oi.n,{className:"_1d3cgvi3 _1xzbheq4qf _1xzbheq819 _1xzbheq44r _1xzbheq443 _1xzbheq1dx _1xzbheq48x _1xzbheq16r _1xzbheq16y _1xzbheq2pr _1xzbheq2ps _1xzbheq299 _1xzbheq29a",onClick:di.U,children:[(0,i.jsx)(At.jS,{color:li.gR.color.pink400,width:"36",height:"36",className:"_1xzbheq48l _1xzbheq359 _1xzbheq36g _1xzbheq3gl _1xzbheq3gy"}),(0,i.jsxs)(oi.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,i.jsx)("h1",{className:xi,children:(0,i.jsx)(a.cC,{id:"6Mjzfq"})}),(0,i.jsx)("p",{className:"_1d3cgvid _1xzbheq4b9 _1xzbheqb9 _1xzbheq16r _1xzbheq469 _1xzbheqpr _1xzbheqv9 _1xzbheqvl _1xzbheqgx",children:(0,i.jsx)(a.cC,{id:"utdv8e"})})]}),(0,i.jsx)(gi,{onClick:()=>{window.open((0,pi.fj)(y,f),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,i.jsx)(At.Zm,{width:32,height:32,color:li.Z4.colors.neutral2})}),(0,i.jsx)(oi.n,{className:"_1d3cgvif _1xzbheq44r _1xzbheq443 _1xzbheq16r _1xzbheq8bp _1xzbheq47l",style:{maxHeight:y.length>32?m?"172px":"292px":"min-content"},children:[...y].map(((e,t)=>(0,i.jsx)("img",{className:(0,ai.default)("_1d3cgvih _1xzbheq80x _1xzbheq3xr",y.length>1&&"_1xzbheqql _1xzbheqqy _1xzbheqfl _1xzbheqfy"),style:{maxHeight:`${(0,pi.QP)(y.length,m)}px`,maxWidth:`${(0,pi.QP)(y.length,m)}px`},src:e.imageUrl,alt:e.name},t)))}),y.length>32&&(0,i.jsx)(oi.n,{className:"_1d3cgvik"}),(0,i.jsxs)(oi.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"_1xzbheq4b9 _1xzbheqb9",justifyContent:"space-between",children:[(0,i.jsxs)(si.X2,{children:[(0,i.jsxs)(oi.n,{marginRight:"16",children:[y.length," NFT",1===y.length?"":"s"]}),(0,i.jsxs)(oi.n,{children:[t({input:v.toString(),type:fe.sw.NFTToken})," ","ETH"]})]}),(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(oi.n,{color:"neutral2",fontWeight:"book",children:(0,i.jsx)(a.cC,{id:"rd4eHq"})})})]})]})}),j&&(_?(0,i.jsx)(Se.fM,{name:Ee.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:y.length,fail_quantity:C.length,refund_amount_usd:z,transaction_hash:s,...w},shouldLogImpression:!0,children:(0,i.jsxs)(oi.n,{className:"_1d3cgvis _1xzbheq4qf _1xzbheq819 _1xzbheq44r _1xzbheq443 _1xzbheq2pl _1xzbheq2py _1xzbheq2jl _1xzbheq2k4 _1xzbheq2el _1xzbheq2ey _1xzbheq1dx _1xzbheq16r _1xzbheq16y _1xzbheq48x _1xzbheqwf",onClick:di.U,children:[(0,i.jsxs)(oi.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,i.jsx)(At.YG,{color:"pink"}),(0,i.jsx)("p",{className:"_1d3cgviu _1xzbheq4b9 _1xzbheqd9 _1xzbheqbf _1xzbheql3 _1xzbheqv9 _1xzbheqf3 _1xzbheqka",children:"Instant Refund"}),(0,i.jsxs)("p",{className:"_1d3cgviw _1xzbheq4b9 _1xzbheqb9 _1xzbheqpr _1xzbheqv9 _1xzbheqwl _1xzbheqgl _1xzbheq16r",children:["Uniswap returned"," ",(0,i.jsxs)("span",{style:{fontWeight:"535"},children:[t({input:A.toString(),type:fe.sw.NFTToken})," ","ETH"]})," ","back to your wallet for unavailable items."]}),(0,i.jsxs)(oi.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,i.jsxs)("p",{className:mi,style:{marginBottom:"2px"},children:[t({input:A.toString(),type:fe.sw.NFTToken})," ","ETH"]}),(0,i.jsx)("p",{className:fi,children:n({input:z,type:fe.sw.FiatNFTToken})}),(0,i.jsxs)("p",{className:mi,style:{width:"100%"},children:["for ",C.length," unavailable item",1===C.length?"":"s","."]}),(0,i.jsx)(oi.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(oi.n,{fontWeight:"book",marginTop:"16",color:"neutral2",className:mi,children:"View on Etherscan"})})})]})]}),(0,i.jsx)(oi.n,{className:"_1d3cgvi10 _1xzbheq1dx _1xzbheq1ds _1xzbheq16r _1xzbheq16m _1xzbheq443 _1xzbheq8bp _1xzbheq46x _1xzbheq44x _1xzbheq2e4",children:C.map(((e,t)=>(0,i.jsx)(oi.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,i.jsx)("img",{className:"_1d3cgvi12 _1xzbheq1ax _1xzbheq13x _1xzbheq80p _1xzbheqql _1xzbheqf9",src:e.imageUrl,alt:e.name},t)},t)))}),(0,i.jsx)(oi.n,{className:"_1d3cgvi14 _1xzbheq16r _1xzbheq16m _1xzbheqpr _1xzbheq3q3"})]})}):(0,i.jsx)(Se.fM,{name:Ee.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:C.length,refund_amount_usd:z,...w},shouldLogImpression:!0,children:(0,i.jsxs)(oi.n,{className:"_1d3cgvi16 _1xzbheq4qf _1xzbheq819 _1xzbheq44r _1xzbheq443 _1xzbheqv9 _1xzbheq469 _1xzbheqpr _1xzbheqoy _1xzbheq2vf _1xzbheq1dx",onClick:di.U,children:[(0,i.jsx)(oi.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:c===hi.c$.Success?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(At.YG,{}),(0,i.jsx)("h1",{className:xi,children:"Instant Refund"})]}):(0,i.jsx)("h1",{className:xi,children:"Failed Transaction"})}),(0,i.jsxs)("p",{className:"_1d3cgvi1c _1xzbheq4b9 _1xzbheqb9 _1xzbheqpr _1xzbheqv9 _1xzbheqw3",children:[c===hi.c$.Success&&`Selected item${1===y.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,n({input:N,type:fe.sw.FiatNFTToken})," was used for gas in attempt to complete this transaction. For support, please visit our"," ",(0,i.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,i.jsxs)(oi.n,{className:"_1d3cgvi1e _1xzbheq16r",children:[C.length>=3&&(0,i.jsxs)(oi.n,{className:"_1xzbheq6rr _1xzbheq80p _1xzbheq44r _1xzbheq443 _1xzbheqvr _1xzbheqf9 _1xzbheq1ax _1xzbheq7zd",onClick:()=>{r(!o)},children:[!o&&(0,i.jsx)(oi.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:C.slice(0,3).map(((e,t)=>(0,i.jsx)("img",{style:{zIndex:2-t},className:"_1d3cgvi1j _1xzbheq80l _1xzbheq1a3 _1xzbheq133 _1xzbheq48x",src:e.imageUrl,alt:e.name},t)))}),(0,i.jsxs)(oi.n,{color:o?"neutral1":"neutral2",className:"_1d3cgvi1l _1xzbheq4bf _1xzbheqd3 _1xzbheqb9 _1xzbheq2of _1xzbheq27x _1xzbheq2dr",children:["Unavailable",(0,i.jsxs)(oi.n,{className:"_1d3cgvi1n _1xzbheqd3 _1xzbheqb3 _1xzbheq44r",children:[C.length," item",1===C.length?"":"s"]})]}),(0,i.jsx)(At.g8,{className:`${!o&&"_1d3cgvi1t"} _1d3cgvi1s _1xzbheqk9 _1xzbheqkl _1xzbheqv9 _1xzbheq199 _1xzbheq129`})]}),(o||C.length<3)&&C.map(((e,n)=>(0,i.jsxs)(oi.n,{backgroundColor:"surface1",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,i.jsx)(oi.n,{className:"_1d3cgvi1o",children:(0,i.jsx)("img",{className:"_1d3cgvi1q _1xzbheq80l _1xzbheq1er _1xzbheq1v3 _1xzbheq17r _1xzbheq1h3 _1xzbheq49f",src:e.imageUrl,alt:e.name})}),(0,i.jsxs)(oi.n,{flexWrap:"wrap",marginTop:"4",children:[(0,i.jsx)(oi.n,{marginLeft:"4",width:"full",display:"flex",children:(0,i.jsxs)("p",{className:mi,style:{marginBottom:"2px"},children:[t({input:e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,type:fe.sw.NFTToken})," ","ETH"]})}),(0,i.jsx)(oi.n,{color:"neutral1",className:fi,children:c===hi.c$.Success?"Refunded":e.name})]})]},n)))]}),o&&(0,i.jsx)(oi.n,{className:"_1d3cgvi1f"}),(0,i.jsxs)("p",{className:mi,style:{marginBottom:"2px"},children:[t({input:A.toString(),type:fe.sw.NFTToken})," ","ETH"]}),(0,i.jsx)("p",{className:fi,children:n({input:z,type:fe.sw.FiatNFTToken})}),(0,i.jsx)(oi.n,{className:"_1d3cgvi9 _1xzbheq4bf _1xzbheqax _1xzbheq44r _1xzbheq3x _1xzbheq1dx _1xzbheq3b3",marginLeft:"auto",marginRight:"0",children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(oi.n,{className:"_1d3cgvib _1xzbheq4bf _1xzbheqax _1xzbheqd3 _1xzbheqw3",children:"View on Etherscan"})})}),(0,i.jsxs)("p",{className:mi,children:["for ",C.length," unavailable item",1===C.length?"":"s","."]}),(0,i.jsxs)(oi.n,{as:"button",border:"none",backgroundColor:"accent1",cursor:"pointer",className:"_1d3cgvi18 _1xzbheq1a9 _1xzbheq469 _1xzbheqd9 _1xzbheqb9 _1xzbheq4df _1xzbheq6sl _1xzbheq44r _1xzbheq3x _1xzbheqpr _1xzbheqv9 _1xzbheqwl",type:"button",onClick:()=>q(),children:[(0,i.jsx)(At.pf,{className:"_1xzbheq7mr _1xzbheqlr _1xzbheqs9"}),"Return to Marketplace"]})]})}))]})]})})};function bi(){const e=(0,R.Wt)(K.Lk.ADDRESS_CLAIM),t=(0,R.xk)(K.Lk.ADDRESS_CLAIM),n=(0,R.Wt)(K.Lk.BLOCKED_ACCOUNT),{account:a}=(0,o.useWeb3React)();!function(e){const t=(0,ti.T)();(0,p.useEffect)((()=>{if(e){const n=`risk-check-${e}`,i=Date.now();try{const a=localStorage.getItem(n);if((a?parseInt(a):i-1)<Date.now()){const n=new Headers({"Content-Type":"application/json"});fetch("https://api.uniswap.org/v1/screen",{method:"POST",headers:n,body:JSON.stringify({address:e})}).then((e=>e.json())).then((e=>{e.block&&t((0,K.i3)(K.Lk.BLOCKED_ACCOUNT))})).catch((()=>{t((0,K.i3)(null))}))}}finally{localStorage.setItem(n,(i+f()("1d")).toString())}}}),[e,t])}(a);const r=Boolean(n&&a),s=(0,Zn.aD)()||(0,Zn.mb)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(jn,{isOpen:e,onDismiss:t}),(0,i.jsx)(zn,{account:a,isOpen:r}),(0,i.jsx)(ni.ZP,{}),(0,i.jsx)(ft,{}),(0,i.jsx)(pn,{}),(0,i.jsx)(re.Cl,{}),(0,i.jsx)(wi,{}),(0,i.jsx)(Kt,{}),(0,i.jsx)(Hn,{}),(0,i.jsx)(Un,{}),s&&(0,i.jsx)(ei,{})]})}function yi(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Oe,{}),(0,i.jsx)(H,{}),(0,i.jsx)(bi,{})]})}}}]);
//# sourceMappingURL=6089.0ba05748.chunk.js.map