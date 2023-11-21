"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[2072],{86299:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(42893),s=t(15387),r=t(44998),a=t.n(r);const o=new s.Fraction(a().BigInt(1),a().BigInt(1e6));function c({currencyAmount:e,significantDigits:n=4}){return(0,i.jsx)(i.Fragment,{children:e.equalTo(a().BigInt(0))?"0":e.greaterThan(o)?e.toSignificant(n):`<${o.toSignificant(1)}`})}},51745:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(42893),s=t(12204),r=t(87253);const a=r.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,o=r.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function c({currencyA:e,currencyB:n,handleRateToggle:t}){const r=e?.wrapped,c=n?.wrapped,d=r&&c&&r.sortsBefore(c);return r&&c?(0,i.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:t,children:(0,i.jsxs)(a,{width:"fit-content",children:[(0,i.jsx)(o,{isActive:d,fontSize:"12px",children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:d?e.symbol:n.symbol}})}),(0,i.jsx)(o,{isActive:!d,fontSize:"12px",children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:d?n.symbol:e.symbol}})})]})}):null}},22875:function(e,n,t){t.d(n,{A:function(){return d}});var i=t(42893),s=t(12204),r=t(60476),a=t(87253),o=t(39839);const c=a.default.div.withConfig({displayName:"V2Unsupported__TextWrapper",componentId:"sc-d048fc54-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function d(){return(0,i.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,i.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,i.jsx)(c,{children:(0,i.jsx)(o.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,i.jsx)(s.cC,{id:"JUHu1U"})})})})})}},56762:function(e,n,t){t.d(n,{l8:function(){return m},Pf:function(){return f},uw:function(){return g}});var i=t(80841),s=t(74290),r=t(24835),a=t(29586),o=s.i.concat,c=t(15387),d=t(83250);const u={[c.ChainId.MAINNET]:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3?source=uniswap",[c.ChainId.ARBITRUM_ONE]:"https://thegraph.com/hosted-service/subgraph/ianlapham/uniswap-arbitrum-one?source=uniswap",[c.ChainId.OPTIMISM]:"https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis?source=uniswap",[c.ChainId.POLYGON]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon?source=uniswap",[c.ChainId.CELO]:"https://api.thegraph.com/subgraphs/name/jesse-sawa/uniswap-celo?source=uniswap",[c.ChainId.BNB]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-bsc?source=uniswap",[c.ChainId.AVALANCHE]:"https://api.thegraph.com/subgraphs/name/lynnshaoyu/uniswap-v3-avax?source=uniswap",[c.ChainId.BASE]:"https://api.studio.thegraph.com/query/48211/uniswap-v3-base/version/latest"},l={[c.ChainId.MAINNET]:"https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks?source=uniswap",[c.ChainId.ARBITRUM_ONE]:"https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks?source=uniswap",[c.ChainId.OPTIMISM]:"https://api.thegraph.com/subgraphs/name/ianlapham/uni-testing-subgraph?source=uniswap",[c.ChainId.POLYGON]:"https://api.thegraph.com/subgraphs/name/ianlapham/polygon-blocks?source=uniswap",[c.ChainId.CELO]:"https://api.thegraph.com/subgraphs/name/jesse-sawa/celo-blocks?source=uniswap",[c.ChainId.BNB]:"https://api.thegraph.com/subgraphs/name/wombat-exchange/bnb-chain-block?source=uniswap",[c.ChainId.AVALANCHE]:"https://api.thegraph.com/subgraphs/name/lynnshaoyu/avalanche-blocks?source=uniswap",[c.ChainId.BASE]:"https://api.studio.thegraph.com/query/48211/base-blocks/version/latest?source=uniswap"},h=new i.u({uri:u[c.ChainId.MAINNET]}),p=new s.i(((e,n)=>{const t=d.ZP.getState().application.chainId;return e.setContext((()=>({uri:t&&u[t]?u[t]:u[c.ChainId.MAINNET]}))),n(e)})),m=new r.f({cache:new a.h,link:o(p,h)}),g={[c.ChainId.MAINNET]:new r.f({cache:new a.h,uri:u[c.ChainId.MAINNET]}),[c.ChainId.ARBITRUM_ONE]:new r.f({cache:new a.h,uri:u[c.ChainId.ARBITRUM_ONE]}),[c.ChainId.OPTIMISM]:new r.f({cache:new a.h,uri:u[c.ChainId.OPTIMISM]}),[c.ChainId.POLYGON]:new r.f({cache:new a.h,uri:u[c.ChainId.POLYGON]}),[c.ChainId.CELO]:new r.f({cache:new a.h,uri:u[c.ChainId.CELO]}),[c.ChainId.BNB]:new r.f({cache:new a.h,uri:u[c.ChainId.BNB]}),[c.ChainId.AVALANCHE]:new r.f({cache:new a.h,uri:u[c.ChainId.AVALANCHE]})},f={[c.ChainId.MAINNET]:new r.f({uri:l[c.ChainId.MAINNET],cache:new a.h}),[c.ChainId.ARBITRUM_ONE]:new r.f({uri:l[c.ChainId.ARBITRUM_ONE],cache:new a.h}),[c.ChainId.OPTIMISM]:new r.f({uri:l[c.ChainId.OPTIMISM],cache:new a.h}),[c.ChainId.POLYGON]:new r.f({uri:l[c.ChainId.POLYGON],cache:new a.h}),[c.ChainId.CELO]:new r.f({uri:l[c.ChainId.CELO],cache:new a.h}),[c.ChainId.BNB]:new r.f({uri:l[c.ChainId.BNB],cache:new a.h}),[c.ChainId.AVALANCHE]:new r.f({uri:l[c.ChainId.AVALANCHE],cache:new a.h})}},6053:function(e,n,t){t.d(n,{G:function(){return r}});var i=t(80815),s=t(48141);function r(){const{chainId:e}=(0,i.useWeb3React)();return e&&s.Ep.includes(e)}},46109:function(e,n,t){t.d(n,{AI:function(){return x},Oh:function(){return f},tK:function(){return g}});var i=t(45433),s=t(15387),r=t(40409),a=t(35206),o=t(80815),c=t(44998),d=t.n(c),u=t(61646),l=t(13712);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const p=new i.vU(r.Mt);let m=class{static getPoolAddress(e,n,t,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:s}=n,{address:r}=t,o=`${e}:${s}:${r}:${i.toString()}`,c=this.addresses.find((e=>e.key===o));if(c)return c.address;const d={key:o,address:(0,a.computePoolAddress)({factoryAddress:e,tokenA:n,tokenB:t,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,n,t,i,s,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const o=this.pools.find((a=>a.token0===e&&a.token1===n&&a.fee===t&&d().EQ(a.sqrtRatioX96,i)&&d().EQ(a.liquidity,s)&&a.tickCurrent===r));if(o)return o;const c=new a.Pool(e,n,t,i,s,r);return this.pools.unshift(c),c}};var g;function f(e){const{chainId:n}=(0,o.useWeb3React)(),t=(0,l.useMemo)((()=>n?e.map((([e,n,t])=>{if(e&&n&&t){const i=e.wrapped,s=n.wrapped;if(i.equals(s))return;return i.sortsBefore(s)?[i,s,t]:[s,i,t]}})):new Array(e.length)),[n,e]),i=(0,l.useMemo)((()=>{const e=n&&s.V3_CORE_FACTORY_ADDRESSES[n];return e?t.map((n=>n&&m.getPoolAddress(e,...n))):new Array(t.length)}),[n,t]),r=(0,u._Y)(i,p,"slot0"),a=(0,u._Y)(i,p,"liquidity");return(0,l.useMemo)((()=>e.map(((e,n)=>{const i=t[n];if(!i)return[g.INVALID,null];const[s,o,c]=i;if(!r[n])return[g.INVALID,null];const{result:d,loading:u,valid:l}=r[n];if(!a[n])return[g.INVALID,null];const{result:h,loading:p,valid:f}=a[n];if(!i||!l||!f)return[g.INVALID,null];if(u||p)return[g.LOADING,null];if(!d||!h)return[g.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[g.NOT_EXISTS,null];try{const e=m.getPool(s,o,c,d.sqrtPriceX96,h[0],d.tick);return[g.EXISTS,e]}catch(x){return console.error("Error when constructing the pool",x),[g.NOT_EXISTS,null]}}))),[a,e,r,t])}function x(e,n,t){return f((0,l.useMemo)((()=>[[e,n,t]]),[e,n,t]))[0]}h(m,"MAX_ENTRIES",128),h(m,"pools",[]),h(m,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(g||(g={}))},75712:function(e,n,t){t.d(n,{A:function(){return o}});var i=t(15387),s=t(61646),r=t(13712),a=t(36665);function o(e){const n=(0,a.Ib)(e?.isToken?e.address:void 0,!1),t=(0,s.Wk)(n,"totalSupply")?.result?.[0]?.toString();return(0,r.useMemo)((()=>e?.isToken&&t?i.CurrencyAmount.fromRawAmount(e,t):void 0),[e,t])}},34603:function(e,n,t){t.d(n,{p:function(){return v}});var i,s=t(39112),r=t(15387),a=t(80815),o=t(44998),c=t.n(o),d=t(61646),u=t(13712),l=t(58025),h=t(36665),p=t(68434);!function(e){e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED"}(i||(i={}));const m=1200,g={[r.ChainId.MAINNET]:{[l.Hz.address]:{type:i.AMOUNT,name:"USD Coin",version:"2"},[l.h1.address]:{type:i.ALLOWED,name:"Dai Stablecoin",version:"1"},[l.yg[r.ChainId.MAINNET].address]:{type:i.AMOUNT,name:"Uniswap"}},[r.ChainId.GOERLI]:{[l.yg[r.ChainId.GOERLI].address]:{type:i.AMOUNT,name:"Uniswap"}},[r.ChainId.SEPOLIA]:{[l.yg[r.ChainId.SEPOLIA].address]:{type:i.AMOUNT,name:"Uniswap"}}};var f;!function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED"}(f||(f={}));const x=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],y=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],I=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],A=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];var j=t(57282);const T={version:"1",name:"Uniswap V2",type:i.AMOUNT};function v(e,n){return function(e,n,t,r){const{account:o,chainId:l,provider:j}=(0,a.useWeb3React)(),T=e?.currency?.isToken?e.currency.address:void 0,v=(0,h.N9)(T),S=(0,p.Z)(),C=(0,u.useMemo)((()=>[o??void 0]),[o]),w=(0,d.Wk)(v,"nonces",C),b=r??(l&&T?g[l]?.[T]:void 0),[E,N]=(0,u.useState)(null);return(0,u.useMemo)((()=>{if(S||!e||!v||!o||!l||!t||!j||!w.valid||!T||!n||!b)return{state:f.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const r=w.result?.[0]?.toNumber();if(w.loading||"number"!==typeof r)return{state:f.LOADING,signatureData:null,gatherPermitSignature:null};const a=E&&E.owner===o&&E.deadline>=t.toNumber()&&E.tokenAddress===T&&E.nonce===r&&E.spender===n&&("allowed"in E||c().greaterThanOrEqual(c().BigInt(E.amount),e.quotient));return{state:a?f.SIGNED:f.NOT_SIGNED,signatureData:a?E:null,gatherPermitSignature:async function(){const a=b.type===i.ALLOWED,c=t.toNumber()+m,d=e.quotient.toString(),u=a?{holder:o,spender:n,allowed:a,nonce:r,expiry:c}:{owner:o,spender:n,value:d,nonce:r,deadline:c},h=b.version?{name:b.name,version:b.version,verifyingContract:T,chainId:l}:{name:b.name,verifyingContract:T,chainId:l},p=JSON.stringify({types:{EIP712Domain:b.version?x:y,Permit:a?A:I},domain:h,primaryType:"Permit",message:u});return j.send("eth_signTypedData_v4",[o,p]).then(s.splitSignature).then((e=>{N({v:e.v,r:e.r,s:e.s,deadline:c,...a?{allowed:a}:{amount:d},nonce:r,chainId:l,owner:o,spender:n,tokenAddress:T,permitType:b.type})}))}}}),[e,v,o,l,S,t,j,w.loading,w.valid,w.result,T,n,b,E])}(e,n,(0,j.Z)(),T)}},15609:function(e,n,t){t.r(n),t.d(n,{default:function(){return he}});var i=t(42893),s=t(12204),r=t(19903),a=t(15387),o=t(35206),c=t(80815),d=t(66196),u=t(80485),l=t(60198),h=t(42246),p=t(45533),m=t(26900),g=t(22614),f=t(51745),x=t(8713),y=t(20095),I=t(22875),A=t(48244),j=t(63362),T=t(6053),v=t(46109),S=t(57282),C=t(34603),w=t(44998),b=t.n(w),E=t(61646),N=t(13712),D=t(20837),O=t(6492),M=t(34578),k=t(80657),L=t(47096),R=t(63498),P=t(4292),B=t(33699),U=t(97905),z=t(64614),_=t(87253),q=t(15993),$=t(49111),W=t(60476),G=t(86299),Z=t(56823),V=t(2304),F=t(58025),H=t(15627),X=t(36665),Y=t(68434),Q=t(75712),J=t(42881),K=t(843),ee=t(39839),ne=t(83777),te=t(54479),ie=t(21103),se=t(34120),re=t(72714);const ae=b().BigInt(0),oe=new a.Percent(75,1e4);function ce({message:e}){return(0,i.jsx)(W.Tz,{style:{minHeight:200,justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(ee.Tv.DeprecatedBody,{children:e})})}function de({token0Amount:e,token1Amount:n}){const t=(0,$.B)(e.currency),s=(0,$.B)(n.currency);return(0,i.jsxs)(W.Tz,{gap:"sm",children:[(0,i.jsxs)(V.m0,{children:[(0,i.jsxs)(V.DA,{children:[(0,i.jsx)(Z.Z,{size:"20px",style:{marginRight:"8px"},currency:t}),(0,i.jsx)(L.xv,{fontSize:16,fontWeight:535,children:t.symbol})]}),(0,i.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(G.Z,{currencyAmount:e})})]}),(0,i.jsxs)(V.m0,{children:[(0,i.jsxs)(V.DA,{children:[(0,i.jsx)(Z.Z,{size:"20px",style:{marginRight:"8px"},currency:s}),(0,i.jsx)(L.xv,{fontSize:16,fontWeight:535,children:s.symbol})]}),(0,i.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(G.Z,{currencyAmount:n})})]})]})}const ue=100;function le({pair:e,pairBalance:n,totalSupply:t,reserve0:x,reserve1:w,token0:k,token1:L}){const{chainId:R,account:G}=(0,c.useWeb3React)(),Z=(0,_.useTheme)(),H=R?a.V2_FACTORY_ADDRESSES[R]:void 0,Q=(0,d.oO)(),J=(0,E.Wk)(e,"factory"),ne=J.result?.[0]&&J.result[0]!==H,re=(0,S.Z)(),ce=(0,j.Z)(),le=(0,z.eq)(oe),he=(0,$.B)(k),pe=(0,$.B)(L),me=(0,N.useMemo)((()=>a.CurrencyAmount.fromRawAmount(k,b().divide(b().multiply(n.quotient,x.quotient),t.quotient))),[k,n,x,t]),ge=(0,N.useMemo)((()=>a.CurrencyAmount.fromRawAmount(L,b().divide(b().multiply(n.quotient,w.quotient),t.quotient))),[L,n,w,t]),[fe,xe]=(0,N.useState)(o.FeeAmount.MEDIUM),[ye,Ie]=(0,v.AI)(k,L,fe),Ae=ye===v.tK.NOT_EXISTS,je=(0,N.useMemo)((()=>new a.Price(k,L,x.quotient,w.quotient)),[k,L,x,w]),Te=ye===v.tK.EXISTS?Ie?.token0Price:void 0;let ve=je&&Te?Te.divide(je).subtract(1).multiply(100):void 0;ve?.lessThan(ae)&&(ve=ve.multiply(-1));const Se=ve&&!ve?.lessThan(b().BigInt(2)),[Ce,we]=(0,N.useState)(k),{ticks:be,pricesAtTicks:Ee,invertPrice:Ne,invalidRange:De,outOfRange:Oe,ticksAtLimit:Me}=(0,B.m2)(k,L,fe,Ce),{[P.Mb.LOWER]:ke,[P.Mb.UPPER]:Le}=be,{[P.Mb.LOWER]:Re,[P.Mb.UPPER]:Pe}=Ee,{getDecrementLower:Be,getIncrementLower:Ue,getDecrementUpper:ze,getIncrementUpper:_e}=(0,B.a6)(Ce,Ce.equals(k)?L:k,fe,ke,Le),{onLeftRangeInput:qe,onRightRangeInput:$e}=(0,B.EG)(Ae),We=Ie?.tickCurrent??(0,o.priceToClosestTick)(je),Ge=Ie?.sqrtRatioX96??o.TickMath.getSqrtRatioAtTick(We),Ze="number"!==typeof ke||"number"!==typeof Le||De?void 0:o.Position.fromAmounts({pool:Ie??new o.Pool(k,L,fe,Ge,0,We,[]),tickLower:ke,tickUpper:Le,amount0:me.quotient,amount1:ge.quotient,useFullPrecision:!0}),{amount0:Ve,amount1:Fe}=(0,N.useMemo)((()=>Ze?Ze.mintAmountsWithSlippage(le):{amount0:void 0,amount1:void 0}),[Ze,le]),He=(0,N.useMemo)((()=>Ze&&a.CurrencyAmount.fromRawAmount(k,b().subtract(me.quotient,Ze.amount0.quotient))),[me,Ze,k]),Xe=(0,N.useMemo)((()=>Ze&&a.CurrencyAmount.fromRawAmount(L,b().subtract(ge.quotient,Ze.amount1.quotient))),[ge,Ze,L]),[Ye,Qe]=(0,N.useState)(!1),[Je,Ke]=(0,N.useState)(null),en=(0,X.mq)(),[nn,tn]=(0,A.q)(n,en?.address),{signatureData:sn,gatherPermitSignature:rn}=(0,C.p)(n,en?.address),an=(0,Y.Z)(),on=(0,N.useCallback)((async()=>{if(ne||an)await tn();else if(rn)try{await rn()}catch(e){4001!==e?.code&&await tn()}else await tn()}),[ne,an,rn,tn]),cn=(0,U.h7)(),dn=(0,U.ub)(Je??void 0),un=(0,T.G)(),ln=(0,N.useCallback)((()=>{if(!en||!G||!re||!ce||"number"!==typeof ke||"number"!==typeof Le||!Ve||!Fe||!R||!un)return;const t=sn?.deadline??re,i=[];sn&&i.push(en.interface.encodeFunctionData("selfPermit",[e.address,`0x${n.quotient.toString(16)}`,t,sn.v,sn.r,sn.s])),Ae&&i.push(en.interface.encodeFunctionData("createAndInitializePoolIfNecessary",[k.address,L.address,fe,`0x${Ge.toString(16)}`])),i.push(en.interface.encodeFunctionData("migrate",[{pair:e.address,liquidityToMigrate:`0x${n.quotient.toString(16)}`,percentageToMigrate:ue,token0:k.address,token1:L.address,fee:fe,tickLower:ke,tickUpper:Le,amount0Min:`0x${Ve.toString(16)}`,amount1Min:`0x${Fe.toString(16)}`,recipient:G,deadline:t,refundAsETH:!0}])),Qe(!0),en.estimateGas.multicall(i).then((e=>en.multicall(i,{gasLimit:(0,te.y)(e)}).then((e=>{(0,d._P)(r.vp.MIGRATE_LIQUIDITY_SUBMITTED,{action:`${ne?r.GM.SUSHISWAP:r.GM.V2}->${r.GM.V3}`,label:`${he.symbol}/${pe.symbol}`,...Q}),cn(e,{type:K.i.MIGRATE_LIQUIDITY_V3,baseCurrencyId:(0,ie.H)(he),quoteCurrencyId:(0,ie.H)(pe),isFork:ne}),Ke(e.hash)})))).catch((()=>{Qe(!1)}))}),[en,G,re,ce,ke,Le,Ve,Fe,R,un,sn,Ae,e.address,n.quotient,k.address,L.address,fe,Ge,ne,he,pe,Q,cn]),hn=!!Je&&b().equal(n.quotient,ae);return un?(0,i.jsxs)(W.Tz,{gap:"20px",children:[(0,i.jsxs)(ee.Tv.DeprecatedBody,{my:9,style:{fontWeight:485},children:[(0,i.jsx)(s.cC,{id:"fZCjku",values:{0:ne?"SushiSwap":"V2"}}),R&&en&&(0,i.jsx)(ee.dL,{href:(0,se.E)(R,en.address,se.r.ADDRESS),children:(0,i.jsxs)(ee.Tv.DeprecatedBlue,{display:"inline",children:[(0,i.jsx)(s.cC,{id:"UbRQEQ"})," \u2197"]})}),"."]}),(0,i.jsx)(h.hl,{children:(0,i.jsxs)(W.Tz,{gap:"lg",children:[(0,i.jsxs)(V.m0,{children:[(0,i.jsxs)(V.DA,{style:{marginLeft:"8px"},children:[(0,i.jsx)(p.Z,{currency0:he,currency1:pe,margin:!1,size:20}),(0,i.jsx)(ee.Tv.DeprecatedMediumHeader,{style:{marginLeft:"8px"},children:(0,i.jsx)(s.cC,{id:"nmYAsN",values:{0:he.symbol,1:pe.symbol}})})]}),(0,i.jsx)(u.Z,{variant:u.P.WARNING,children:ne?"Sushi":"V2"})]}),(0,i.jsx)(de,{token0Amount:me,token1Amount:ge})]})}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(D.Z,{size:24})}),(0,i.jsx)(h.hl,{children:(0,i.jsxs)(W.Tz,{gap:"lg",children:[(0,i.jsxs)(V.m0,{children:[(0,i.jsxs)(V.DA,{style:{marginLeft:"8px"},children:[(0,i.jsx)(p.Z,{currency0:he,currency1:pe,margin:!1,size:20}),(0,i.jsx)(ee.Tv.DeprecatedMediumHeader,{style:{marginLeft:"8px"},children:(0,i.jsx)(s.cC,{id:"oSgGXc",values:{0:he.symbol,1:pe.symbol}})})]}),(0,i.jsx)(u.Z,{variant:u.P.PRIMARY,children:"V3"})]}),(0,i.jsx)(m.Z,{feeAmount:fe,handleFeePoolSelect:xe}),Ae&&(0,i.jsxs)(h.Pj,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(O.Z,{color:Z.neutral1,style:{marginBottom:"12px",opacity:.8}}),(0,i.jsx)(ee.Tv.DeprecatedBody,{fontSize:14,style:{marginBottom:8,fontWeight:535,opacity:.8},textAlign:"center",children:(0,i.jsx)(s.cC,{id:"3dTeo0",values:{0:ne?"SushiSwap":"V2"}})}),(0,i.jsx)(ee.Tv.DeprecatedBody,{fontWeight:535,textAlign:"center",fontSize:14,style:{marginTop:"8px",opacity:.8},children:(0,i.jsx)(s.cC,{id:"zu7Y6s"})}),je&&(0,i.jsx)(W.Tz,{gap:"sm",style:{marginTop:"12px"},children:(0,i.jsx)(V.m0,{children:(0,i.jsxs)(ee.Tv.DeprecatedBody,{fontWeight:535,fontSize:14,children:[(0,i.jsx)(s.cC,{id:"CrKk4E",values:{0:ne?"SushiSwap":"V2",1:Ne?pe.symbol:he.symbol}})," ",Ne?`${je?.invert()?.toSignificant(6)} ${he.symbol}`:`${je?.toSignificant(6)} ${pe.symbol}`]})})})]}),Se?(0,i.jsxs)(h.U2,{children:[(0,i.jsxs)(W.Tz,{gap:"sm",children:[(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(ee.Tv.DeprecatedBody,{fontSize:14,children:(0,i.jsx)(s.cC,{id:"CrKk4E",values:{0:ne?"SushiSwap":"V2",1:Ne?pe.symbol:he.symbol}})}),(0,i.jsx)(ee.Tv.DeprecatedBlack,{fontSize:14,children:Ne?`${je?.invert()?.toSignificant(6)} ${he.symbol}`:`${je?.toSignificant(6)} ${pe.symbol}`})]}),(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(ee.Tv.DeprecatedBody,{fontSize:14,children:(0,i.jsx)(s.cC,{id:"fnt1aw",values:{0:Ne?pe.symbol:he.symbol}})}),(0,i.jsx)(ee.Tv.DeprecatedBlack,{fontSize:14,children:Ne?`${Te?.invert()?.toSignificant(6)} ${he.symbol}`:`${Te?.toSignificant(6)} ${pe.symbol}`})]}),(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(ee.Tv.DeprecatedBody,{fontSize:14,color:"inherit",children:(0,i.jsx)(s.cC,{id:"4cYWkr"})}),(0,i.jsx)(ee.Tv.DeprecatedBlack,{fontSize:14,color:"inherit",children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:ve?.toSignificant(4)}})})]})]}),(0,i.jsx)(ee.Tv.DeprecatedBody,{fontSize:14,style:{marginTop:8,fontWeight:485},children:(0,i.jsx)(s.cC,{id:"j+8tfD",components:{0:(0,i.jsx)("br",{})}})})]}):!Ae&&Te?(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(ee.Tv.DeprecatedBody,{fontSize:14,children:(0,i.jsx)(s.cC,{id:"fnt1aw",values:{0:Ne?pe.symbol:he.symbol}})}),(0,i.jsx)(ee.Tv.DeprecatedBlack,{fontSize:14,children:Ne?`${Te?.invert()?.toSignificant(6)} ${he.symbol}`:`${Te?.toSignificant(6)} ${pe.symbol}`})]}):null,(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(ee.Tv.DeprecatedLabel,{children:(0,i.jsx)(s.cC,{id:"5CZbyC"})}),(0,i.jsx)(f.Z,{currencyA:Ne?pe:he,currencyB:Ne?he:pe,handleRateToggle:()=>{qe(""),$e(""),we((e=>e.equals(k)?L:k))}})]}),(0,i.jsx)(g.Z,{priceLower:Re,priceUpper:Pe,getDecrementLower:Be,getIncrementLower:Ue,getDecrementUpper:ze,getIncrementUpper:_e,onLeftRangeInput:qe,onRightRangeInput:$e,currencyA:Ne?pe:he,currencyB:Ne?he:pe,feeAmount:fe,ticksAtLimit:Me}),Oe?(0,i.jsx)(h.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(M.Z,{stroke:Z.deprecated_yellow3,size:"16px"}),(0,i.jsx)(ee.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(s.cC,{id:"b+KjnH"})})]})}):null,De?(0,i.jsx)(h.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(V.m0,{children:[(0,i.jsx)(M.Z,{stroke:Z.deprecated_yellow3,size:"16px"}),(0,i.jsx)(ee.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(s.cC,{id:"Jh223O"})})]})}):null,Ze?(0,i.jsx)(h.OY,{children:(0,i.jsxs)(W.Tz,{gap:"md",children:[(0,i.jsx)(de,{token0Amount:Ze.amount0,token1Amount:Ze.amount1}),R&&He&&Xe?(0,i.jsx)(ee.Tv.DeprecatedBlack,{fontSize:12,children:(0,i.jsx)(s.cC,{id:"TPyp5G",values:{0:(0,q.Z)(He,4),1:R&&F.Fl[R]?.equals(k)?"ETH":k.symbol,2:(0,q.Z)(Xe,4),3:R&&F.Fl[R]?.equals(L)?"ETH":L.symbol}})}):null]})}):null,(0,i.jsxs)(W.Tz,{gap:"md",children:[hn||dn?null:(0,i.jsx)(W.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(l.gn,{confirmed:nn===A.U.APPROVED||null!==sn,disabled:nn!==A.U.NOT_APPROVED||null!==sn||!Ve||!Fe||De||Ye,onClick:on,children:nn===A.U.PENDING?(0,i.jsx)(y.bb,{children:(0,i.jsx)(s.cC,{id:"j2Uisd"})}):nn===A.U.APPROVED||null!==sn?(0,i.jsx)(s.cC,{id:"joLIQz"}):(0,i.jsx)(s.cC,{id:"/QI3Rt"})})}),(0,i.jsx)(W.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(l.gn,{confirmed:hn,disabled:!Ve||!Fe||De||nn!==A.U.APPROVED&&null===sn||Ye||dn||hn,onClick:ln,children:hn?"Success!":dn?(0,i.jsx)(y.bb,{children:(0,i.jsx)(s.cC,{id:"uJPHuY"})}):(0,i.jsx)(s.cC,{id:"y5rS9U"})})})]})]})})]}):(0,i.jsx)(I.A,{})}function he(){const{address:e}=(0,k.UO)(),n=(0,R.T)();(0,N.useEffect)((()=>(n((0,P.dA)()),()=>{n((0,P.dA)())})),[n]);const{chainId:t,account:r}=(0,c.useWeb3React)(),o=(0,ne.UJ)(e),d=(0,X.t0)(o||void 0),u=(0,E.Wk)(d,"token0",void 0,E.DB),l=u?.result?.[0],h=(0,E.Wk)(d,"token1",void 0,E.DB)?.result?.[0],p=(0,H.dQ)(l),m=(0,H.dQ)(h),g=(0,N.useMemo)((()=>t&&o?new a.Token(t,o,18):void 0),[t,o]),f=(0,J.mM)(r??void 0,g),y=(0,Q.A)(g),[I,A]=(0,E.Wk)(d,"getReserves")?.result??[],j=(0,N.useMemo)((()=>p&&I?a.CurrencyAmount.fromRawAmount(p,I):void 0),[p,I]),T=(0,N.useMemo)((()=>m&&A?a.CurrencyAmount.fromRawAmount(m,A):void 0),[m,A]);return o&&d&&(!d||!u?.valid||u?.loading||u?.error||l)?(0,i.jsx)(re.e,{style:{padding:24},children:(0,i.jsxs)(W.Tz,{gap:"16px",children:[(0,i.jsxs)(V.BA,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px",children:[(0,i.jsx)(ee.Qb,{to:"/migrate/v2"}),(0,i.jsx)(ee.Tv.DeprecatedMediumHeader,{children:(0,i.jsx)(s.cC,{id:"k1i30w"})}),(0,i.jsx)(x.Z,{autoSlippage:oe,chainId:t,hideRoutingSettings:!0})]}),r?f&&y&&j&&T&&p&&m?(0,i.jsx)(le,{pair:d,pairBalance:f,totalSupply:y,reserve0:j,reserve1:T,token0:p,token1:m}):(0,i.jsx)(ce,{message:(0,i.jsx)(s.cC,{id:"yQE2r9"})}):(0,i.jsx)(ee.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"F3ZFiE"})})]})}):(console.error("Invalid pair address"),(0,i.jsx)(k.Fg,{to:"/migrate/v2",replace:!0}))}},15993:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(15387),s=t(29198),r=t(44998),a=t.n(r);function o({number:e,locale:n,sigFigs:t,fixedDecimals:i,options:r={}}){let a,o;if(a=!n||n&&!s.RF.includes(n)?s.ZW:[n,s.ZW],r.minimumFractionDigits=r.minimumFractionDigits||i,r.maximumFractionDigits=r.maximumFractionDigits||i,r.maximumSignificantDigits=r.maximumSignificantDigits||i?void 0:t,"number"===typeof e)o=i?parseFloat(e.toFixed(i)):e;else{const n=parseFloat(e.toSignificant(t));o=i?parseFloat(n.toFixed(i)):n}return o.toLocaleString(a,r)}function c(e,n,t=s.ZW,r){return e?a().equal(e.quotient,a().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new i.Fraction(1,1e5))?`<${o({number:1e-5,locale:t})}`:o({number:e,locale:t,sigFigs:n,fixedDecimals:r}):"-"}}}]);
//# sourceMappingURL=2072.e279e84f.chunk.js.map