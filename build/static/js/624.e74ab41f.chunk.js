"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[624],{72714:function(e,i,n){n.d(i,{Z:function(){return o},e:function(){return d}});var t=n(42893),s=n(87253),r=n(437);const d=s.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${r.k.default};
`;function o(e){return(0,t.jsx)(d,{...e})}},80624:function(e,i,n){n.r(i),n.d(i,{default:function(){return H}});var t=n(42893),s=n(23586),r=n(82534),d=n(12204),o=n(15387),c=n(80815),a=n(80485),x=n(40508),l=n(41440),h=n(47096),u=n(87253),j=n(90937),p=n(49111),g=n(60198),f=n(42246),m=n(60476),y=n(45533),k=n(19969),v=n(2304),b=n(20095),C=n(16403);const T=(0,u.default)(f.hl).withConfig({displayName:"Sushi__StyledPositionCard",componentId:"sc-79785ad2-0"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,x.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function z({tokenA:e,tokenB:i,liquidityToken:n,border:s}){const r=(0,p.B)(e),o=(0,p.B)(i),c=(0,j.r)(e);return(0,t.jsxs)(T,{border:s,bgColor:c,children:[(0,t.jsx)(k.RF,{}),(0,t.jsx)(m.Tz,{gap:"md",children:(0,t.jsxs)(C.rG,{children:[(0,t.jsxs)(v.BA,{gap:"8px",children:[(0,t.jsx)(y.Z,{currency0:r,currency1:o,size:20}),(0,t.jsx)(h.xv,{fontWeight:535,fontSize:20,children:r&&o?`${r.symbol}/${o.symbol}`:(0,t.jsx)(b.bb,{children:(0,t.jsx)(d.cC,{id:"yQE2r9"})})}),(0,t.jsx)(a.Z,{variant:a.P.WARNING,children:"Sushi"})]}),(0,t.jsx)(v.DA,{gap:"8px",children:(0,t.jsx)(g.qL,{padding:"0px 35px 0px 0px",$borderRadius:"12px",width:"fit-content",as:l.rU,to:`/migrate/v2/${n.address}`,children:(0,t.jsx)(d.cC,{id:"y5rS9U"})})})]})})]})}var S=n(44998),A=n.n(S),q=n(13712),$=n(96315),W=n(83931),w=n(91101),B=n(75712),D=n(42881),L=n(21103),E=n(56823);const F=(0,u.default)(f.hl).withConfig({displayName:"V2__StyledPositionCard",componentId:"sc-6d6362df-0"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,x.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function R({pair:e,border:i,stakedBalance:n}){const{account:s}=(0,c.useWeb3React)(),r=(0,p.B)(e.token0),a=(0,p.B)(e.token1),[x,u]=(0,q.useState)(!1),f=(0,D.mM)(s??void 0,e.liquidityToken),T=(0,B.A)(e.liquidityToken),z=n?f?.add(n):f,S=z&&T&&A().greaterThanOrEqual(T.quotient,z.quotient)?new o.Percent(z.quotient,T.quotient):void 0,[R,Z]=e&&T&&z&&A().greaterThanOrEqual(T.quotient,z.quotient)?[e.getLiquidityValue(e.token0,T,z,!1),e.getLiquidityValue(e.token1,T,z,!1)]:[void 0,void 0],_=(0,j.r)(e?.token0);return(0,t.jsxs)(F,{border:i,bgColor:_,children:[(0,t.jsx)(k.RF,{}),(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(C.rG,{children:[(0,t.jsxs)(v.BA,{gap:"8px",children:[(0,t.jsx)(y.Z,{currency0:r,currency1:a,size:20}),(0,t.jsx)(h.xv,{fontWeight:535,fontSize:20,children:r&&a?`${r.symbol}/${a.symbol}`:(0,t.jsx)(b.bb,{children:(0,t.jsx)(d.cC,{id:"yQE2r9"})})})]}),(0,t.jsx)(v.DA,{gap:"8px",children:(0,t.jsx)(g.qL,{padding:"6px 8px",$borderRadius:"12px",width:"fit-content",onClick:()=>u(!x),children:x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{id:"wckWOP"}),(0,t.jsx)($.Z,{size:"20",style:{marginLeft:"10px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{id:"wckWOP"}),(0,t.jsx)(W.Z,{size:"20",style:{marginLeft:"10px"}})]})})})]}),x&&(0,t.jsxs)(m.Tz,{gap:"sm",children:[(0,t.jsxs)(C.rG,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{id:"EJ2nlN"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:z?z.toSignificant(4):"-"})]}),n&&(0,t.jsxs)(C.rG,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{id:"kOe6n7"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:n.toSignificant(4)})]}),(0,t.jsxs)(C.rG,{children:[(0,t.jsx)(v.DA,{children:(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{id:"I4bzgz",values:{0:r.symbol}})})}),R?(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:R?.toSignificant(6)}),(0,t.jsx)(E.Z,{size:"20px",style:{marginLeft:"8px"},currency:r})]}):"-"]}),(0,t.jsxs)(C.rG,{children:[(0,t.jsx)(v.DA,{children:(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{id:"I4bzgz",values:{0:a.symbol}})})}),Z?(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Z?.toSignificant(6)}),(0,t.jsx)(E.Z,{size:"20px",style:{marginLeft:"8px"},currency:a})]}):"-"]}),(0,t.jsxs)(C.rG,{children:[(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{id:"wcXFoV"})}),(0,t.jsx)(h.xv,{fontSize:16,fontWeight:535,children:S?("0.00"===S.toFixed(2)?"<0.01":S.toFixed(2))+"%":"-"})]}),f&&A().greaterThan(f.quotient,w.iV)&&(0,t.jsxs)(v.m0,{marginTop:"10px",children:[(0,t.jsx)(g.DF,{padding:"8px",$borderRadius:"8px",as:l.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"64%",children:(0,t.jsx)(d.cC,{id:"y5rS9U"})}),(0,t.jsx)(g.PL,{padding:"8px",$borderRadius:"8px",as:l.rU,width:"32%",to:`/remove/v2/${(0,L.H)(r)}/${(0,L.H)(a)}`,children:(0,t.jsx)(d.cC,{id:"t/YqKh"})})]})]})]})]})}var Z=n(85729),_=n(22875),G=n(6053),I=n(97761),O=n(39839),P=n(27723),N=n(64614),V=n(72714);function M({message:e}){return(0,t.jsx)(m.Tz,{style:{minHeight:200,justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(O.Tv.DeprecatedBody,{children:e})})}const U=({tokenA:e,tokenB:i})=>{const[n,t]=e.sortsBefore(i)?[e,i]:[i,e];return(0,s.getCreate2Address)("0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",(0,r.keccak256)(["bytes"],[(0,r.pack)(["address","address"],[n.address,t.address])]),"0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303")};function H(){const e=(0,u.useTheme)(),{account:i,chainId:n}=(0,c.useWeb3React)(),s=n?o.V2_FACTORY_ADDRESSES[n]:void 0,r=(0,N.B3)(),a=(0,q.useMemo)((()=>r.map((e=>{const i=1===n?function([e,i]){return new o.Token(e.chainId,U({tokenA:e,tokenB:i}),18,"SLP","SushiSwap LP Token")}(e):null;return{v2liquidityToken:s?(0,N.Ce)(e):void 0,sushiLiquidityToken:i,tokens:e}}))),[r,n,s]),x=(0,q.useMemo)((()=>[...a.map((({v2liquidityToken:e})=>e)),...a.map((({sushiLiquidityToken:e})=>e)).filter((e=>!!e))]),[a]),[l,j]=(0,D.v2)(i??void 0,x),p=(0,q.useMemo)((()=>j?[]:a.filter((({v2liquidityToken:e})=>e&&l[e.address]?.greaterThan(0))).map((e=>e.tokens))),[j,a,l]),g=(0,q.useMemo)((()=>j?[]:a.filter((({sushiLiquidityToken:e})=>!!e&&l[e.address]?.greaterThan(0)))),[j,a,l]),y=(0,I.OY)(p),k=j||y.some((([e])=>e===I._G.LOADING));return(0,G.G)()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V.e,{style:{padding:24},children:(0,t.jsxs)(m.Tz,{gap:"16px",children:[(0,t.jsxs)(v.BA,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px",children:[(0,t.jsx)(O.Qb,{to:"/pools"}),(0,t.jsx)(O.Tv.DeprecatedMediumHeader,{children:(0,t.jsx)(d.cC,{id:"k1i30w"})}),(0,t.jsx)("div",{children:(0,t.jsx)(P.Z,{text:(0,t.jsx)(d.cC,{id:"ybofZv"})})})]}),(0,t.jsx)(O.Tv.DeprecatedBody,{style:{marginBottom:8,fontWeight:485},children:(0,t.jsx)(d.cC,{id:"9V6El5"})}),i?k?(0,t.jsx)(f.hl,{padding:"40px",children:(0,t.jsx)(O.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,t.jsx)(b.bb,{children:(0,t.jsx)(d.cC,{id:"yQE2r9"})})})}):y.filter((([,e])=>!!e)).length>0?(0,t.jsxs)(t.Fragment,{children:[y.filter((([,e])=>!!e)).map((([,e])=>(0,t.jsx)(R,{pair:e},e.liquidityToken.address))),g.map((({sushiLiquidityToken:e,tokens:i})=>(0,t.jsx)(z,{tokenA:i[0],tokenB:i[1],liquidityToken:e},e.address)))]}):(0,t.jsx)(M,{message:(0,t.jsx)(d.cC,{id:"REAO+x"})}):(0,t.jsx)(f.hl,{padding:"40px",children:(0,t.jsx)(O.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,t.jsx)(d.cC,{id:"9YDfkc"})})}),(0,t.jsx)(m.Tz,{justify:"center",gap:"md",children:(0,t.jsx)(h.xv,{textAlign:"center",fontSize:14,style:{padding:".5rem 0 .5rem 0"},children:(0,t.jsx)(d.cC,{id:"NWllWv",components:{0:(0,t.jsx)(O.m_,{id:"import-pool-link",to:"/pools/v2/find"})}})})})]})}),(0,t.jsx)(Z.c,{})]}):(0,t.jsx)(_.A,{})}}}]);
//# sourceMappingURL=624.e74ab41f.chunk.js.map