"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[1428],{11428:function(e,t,n){n.d(t,{ZI:function(){return _t},zD:function(){return It},ZP:function(){return Ct}});var s=n(42893),i=n(12204),a=n(19903),o=n(66196),r=n(62069),d=n(69867),c=n(30476),l=n(15387),u=n(80815),p=n(93622),x=n(60476),h=n(25575),m=n(56823),g=n(2304),f=n(86024),_=n(80343),I=n(10362),N=n(48141),b=n(28702),T=n(1152),A=n(79954);T.ZP`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var C=n(15627),E=n(79741),v=n(95202),j=n(97901),y=n(79847),O=n(4572),P=n(98841),k=n(50026),R=n(83884),S=n(99968),L=n(13712),w=n(69574),B=n(58336);var z=n(1004),q=n(12113),F=n(68044),D=n(57174);function U(e,t,n){const{hasPriceAdjustment:s,updatedAssets:i}=(0,F.$)(e,t),a=s&&n,{unchanged:o,priceChanged:r,unavailable:d}=(0,D.K)(i),c=i.length>0,l=r.length>0,u=d.length>0,p=l||u,x=function(e,t,n){return[...e.map((e=>({asset:e,status:z.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:z.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:z.ZJ.REVIEWED})))]}(d,r,o),h=function(e,t,n,s){return e?t?n?z.s.IN_REVIEW:z.s.CONFIRM_REVIEW:s?z.s.CONFIRM_QUOTE:z.s.CONFIRMING_IN_WALLET:z.s.ADDING_TO_BAG}(c,p,l,a);return{newBagItems:x,nextBagStatus:h}}function G(e){return{action:z.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function H(e,t){const n=e.route?e.route.map(G):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var M=n(22495),W=n(45239);var $=n(9170),V=n(66528);const Z=(0,n(98102).F)()((0,$.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),V.X);function Y(){const{account:e}=(0,u.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:i,isLocked:a,setLocked:o,setItemsInBag:r}=(0,P.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:i,setLocked:a,setItemsInBag:o})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:i,setLocked:a,setItemsInBag:o}))),d=Z((e=>e.tokenTradeInput)),c=(0,L.useMemo)((()=>(0,q.G7)(t)),[t]),[l]=(0,A.yo)(),p=function(){const{provider:e}=(0,u.useWeb3React)(),t=(0,M.p)((e=>e.sendTransaction)),n=(0,W.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:i,reset:a}=(0,P.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,L.useCallback)((async(o,r,d=!1)=>{if(!e)return;const c=await t(e.getSigner(),r,o,d);c&&(s(!1),n(c),i({bagExpanded:!1}),a())}),[e,a,t,i,s,n])}(),x=(0,L.useCallback)((()=>{s&&i(!1),!a&&o(!0),n(z.s.FETCHING_ROUTE)}),[a,s,o,n,i]);return(0,L.useCallback)((async()=>{x(),l({variables:{senderAddress:e||"",nftTrades:(0,q.hI)(c),tokenTrades:d||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(z.s.ADDING_TO_BAG),void o(!1);const t=function(e){return e.filter((e=>e.status!==z.ZJ.UNAVAILABLE)).map((e=>e.asset))}(c),s=!!d,{route:i,routeResponse:a}=H(e.nftRoute,s),{newBagItems:l,nextBagStatus:u}=U(t,i,s);if(r(l),n(u),u===z.s.CONFIRMING_IN_WALLET)return p(a,t,s),void o(!0);o(!1)}})}),[e,l,c,p,x,o,n,r,d])}var K=n(73293);function X(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function J(e,t,n){const s=Z((e=>e.setTokenTradeInput)),i=(0,B.pG)(e)&&e.routes,a=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,o=!!n&&!!t;(0,L.useEffect)((()=>{if(!i||!a||!o)return void s(void 0);const r=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:d,v2TokenTradeRouteInputs:c,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],s=[],i=e.swaps;for(const a of i)a.route.protocol===K.Protocol.MIXED?t.push(X(a)):a.route.protocol===K.Protocol.V2?n.push(X(a)):s.push(X(a));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:d,tradeType:A.NS.ExactOutput,v2Routes:c,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:r,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,o,a,i,s,e])}var Q=n(87253),ee=n(57482),te=n(74969);var ne,se=n(8586),ie=n(34578),ae=n(83931),oe=n(39839);function re(e,t,n,a,o){const r={handleClick:()=>{},buttonText:(0,s.jsx)(i.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[ne.WALLET_NOT_CONNECTED]:{...r,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(i.cC,{id:"VHOVEJ"})},[ne.NOT_SUPPORTED_CHAIN]:{...r,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(i.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(i.cC,{id:"IwI0rY"})},[ne.INSUFFICIENT_BALANCE]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(i.cC,{id:"cPcTW+"})},[ne.ERROR]:{...r,warningText:(0,s.jsx)(i.cC,{id:"fWsBTs"})},[ne.IN_WALLET_CONFIRMATION]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"CpEYLQ"})},[ne.PROCESSING_TRANSACTION]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"SqYgw0"})},[ne.FETCHING_TOKEN_ROUTE]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"hQHwxA"})},[ne.INVALID_TOKEN_ROUTE]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"4fL/V7"})},[ne.NO_TOKEN_ROUTE_FOUND]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"dLAScn"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(i.cC,{id:"1u70J/"})},[ne.LOADING_ALLOWANCE]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"TuN3Z4"})},[ne.IN_WALLET_ALLOWANCE_APPROVAL]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"4k/lBP"})},[ne.PROCESSING_APPROVAL]:{...r,buttonText:(0,s.jsx)(i.cC,{id:"gHko4n"})},[ne.REQUIRE_APPROVAL]:{...r,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(i.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(i.cC,{id:"Z7ZXbT"})},[ne.CONFIRM_UPDATED_PRICE]:{...r,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(i.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(i.cC,{id:"4fL/V7"})},[ne.PRICE_IMPACT_HIGH]:{...r,handleClick:n??(()=>{}),disabled:!1,buttonColor:o?o.priceImpactSeverity.color:r.buttonColor,helperText:(0,s.jsx)(i.cC,{id:"NF0esC"}),helperTextColor:o?o.priceImpactSeverity.color:r.helperTextColor,buttonText:(0,s.jsx)(i.cC,{id:"2AEplS"})},[ne.PAY]:{...r,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(i.cC,{id:"4fL/V7"}),helperText:a?(0,s.jsx)(i.cC,{id:"3BWxOM"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(ne||(ne={}));const de=Q.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-98f67338-0"})`
  padding: 0px 12px;
`,ce=Q.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-98f67338-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,le=(0,Q.default)(x.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-98f67338-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,ue=(0,Q.default)(g.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-98f67338-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,pe=(0,Q.default)(x.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-98f67338-4"})`
  text-align: end;
  overflow: hidden;
`,xe=(0,Q.default)(ie.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-98f67338-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,he=(0,Q.default)(oe.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-98f67338-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,me=(0,Q.default)(oe.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-98f67338-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,ge=(0,Q.default)(g.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-98f67338-8"})`
  gap: 8px;
  cursor: pointer;
`,fe=Q.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-98f67338-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,_e=(0,Q.default)(_.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-98f67338-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,Ie=(0,Q.default)(g.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-98f67338-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,Ne=(0,Q.default)(g.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-98f67338-12"})`
  align-items: center;
  gap: 8px;
`,be=(0,Q.default)(oe.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-98f67338-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,Te=({color:e,children:t})=>t?(0,s.jsxs)(he,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(xe,{}),t]}):null,Ae=({children:e,color:t})=>e?(0,s.jsx)(me,{lineHeight:"16px",$color:t,children:e}):null,Ce=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:a,trade:o})=>{const{formatEther:r,formatNumberOrString:d}=(0,ee.Gb)();return e?a!==w.qx.LOADING||o?(0,s.jsx)(be,{color:a===w.qx.LOADING?"neutral3":"neutral1",children:d({input:o?.inputAmount.toExact(),type:ee.sw.NFTToken})}):(0,s.jsx)(oe.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(i.cC,{id:"hwuHLB"})}):(0,s.jsxs)(oe.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[r({input:t.toString(),type:ee.sw.NFTToken}),"\xa0",n?.symbol??"ETH"]})},Ee=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:a})=>{const{formatNumberOrString:o}=(0,ee.Gb)();return e?(0,s.jsxs)(Ie,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(I.ud,{text:c.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(Ne,{children:[(0,s.jsx)(ie.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(oe.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(i.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(oe.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${o({input:e?.toExact(),type:ee.sw.FiatNFTToken})}`})]}):!a||n!==w.qx.INVALID&&n!==w.qx.NO_ROUTE_FOUND?(0,s.jsx)(_e,{}):null},ve=[z.s.FETCHING_ROUTE,z.s.CONFIRMING_IN_WALLET,z.s.FETCHING_FINAL_ROUTE,z.s.PROCESSING_TRANSACTION],je=({setModalIsOpen:e,eventProperties:t})=>{const n=(0,p.LK)(),r=(0,Q.useTheme)(),{account:c,chainId:g,connector:_}=(0,u.useWeb3React)(),I=Boolean(c&&g),T=(0,k.P)(),{inputCurrency:q}=Z((({inputCurrency:e})=>({inputCurrency:e}))),F=Z((e=>e.setInputCurrency)),D=(0,C.U8)("ETH"),U=(0,y.mM)(c??void 0,q&&q.isToken?q:void 0),{isLocked:G,bagStatus:H,setBagExpanded:W,setBagStatus:$}=(0,P.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[V,K]=(0,L.useState)(!1),X=ve.includes(H),ie=q??D,xe=!!q&&g===l.ChainId.MAINNET,{universalRouterAddress:he,universalRouterAddressIsLoading:me}=function(){const{data:e,loading:t}=(0,A.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){const t=(0,M.p)((e=>e.state)),n=(0,M.p)((e=>e.setState)),s=(0,L.useRef)(t),{setBagStatus:i,setLocked:a}=(0,P.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,L.useEffect)((()=>{M.p.subscribe((e=>s.current=e.state))}),[]),(0,L.useEffect)((()=>{s.current===z.c$.Confirming&&i(z.s.PROCESSING_TRANSACTION),s.current!==z.c$.Denied&&s.current!==z.c$.Invalid||(s.current===z.c$.Invalid?i(z.s.WARNING):i(z.s.CONFIRM_REVIEW),n(z.c$.New),a(!1),e(!1))}),[a,i,e,n,s.current])}(e);const _e=Y(),Ie=(0,L.useMemo)((()=>(0,O.Z)((0,d.formatEther)(T.toString()),D??void 0)),[D,T]),{state:Ne,trade:be,maximumAmountIn:je,allowedSlippage:ye}=function(e,t){const{state:n,trade:s}=(0,S.C)(l.TradeType.EXACT_OUTPUT,t,e??void 0,w.R5.API),i=(0,R.Z)((0,B.pG)(s)?s:void 0),a=(0,L.useMemo)((()=>{const e=s?.maximumAmountIn(i);return e?.currency.isToken?e:void 0}),[i,s]);return(0,L.useMemo)((()=>({state:n,trade:s,maximumAmountIn:a,allowedSlippage:i})),[i,a,n,s])}(xe?q:void 0,Ie),Oe=(0,E.Z)(je,function(e,t){if(e)return e===l.ChainId.MAINNET?t??(0,b.UNIVERSAL_ROUTER_ADDRESS)(e):(0,N.EC)(e)?(0,b.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(g,he),w.d7.Classic),Pe=Oe.state===E.K.LOADING||me;J(be,Oe,ye);const ke=function(e){const t=(0,Q.useTheme)(),{formatPercent:n}=(0,ee.Gb)();return(0,L.useMemo)((()=>{const s=e?(0,te.QW)(e):void 0,i=s?(0,te.BK)(s):void 0,a="error"===i?t.critical:"warning"===i?t.deprecated_accentWarning:void 0;return s&&i&&a?{priceImpactSeverity:{type:i,color:a},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(be),Re=(0,v.sq)(be?.inputAmount),Se=(0,v.sq)(Ie),Le=xe?Re:Se,{balance:we}=(0,se.t)(),Be=(0,L.useMemo)((()=>{if(I&&g===l.ChainId.MAINNET){if(q){const e=be?.inputAmount;if(!U||!e)return;return!U.lessThan(e)}return(0,d.parseEther)(we).gte(T)}}),[I,g,q,we,T,be?.inputAmount,U]);(0,L.useEffect)((()=>{$(z.s.ADDING_TO_BAG)}),[q,$]);const ze=(0,j.o)(),{buttonText:qe,buttonTextColor:Fe,disabled:De,warningText:Ue,warningTextColor:Ge,helperText:He,helperTextColor:Me,handleClick:We,buttonColor:$e}=(0,L.useMemo)((()=>{if(I&&g!==l.ChainId.MAINNET){const e=()=>ze(_,l.ChainId.MAINNET);return re(ne.NOT_SUPPORTED_CHAIN,r,e)}if(!1===Be)return re(ne.INSUFFICIENT_BALANCE,r);if(H===z.s.WARNING)return re(ne.ERROR,r);if(!I){const e=()=>{n(),W({bagExpanded:!1})};return re(ne.WALLET_NOT_CONNECTED,r,e)}if(H===z.s.FETCHING_FINAL_ROUTE||H===z.s.CONFIRMING_IN_WALLET)return re(ne.IN_WALLET_CONFIRMATION,r);if(H===z.s.PROCESSING_TRANSACTION)return re(ne.PROCESSING_TRANSACTION,r);if(xe&&Ne!==w.qx.VALID)return Ne===w.qx.INVALID?re(ne.INVALID_TOKEN_ROUTE,r):Ne===w.qx.NO_ROUTE_FOUND?re(ne.NO_TOKEN_ROUTE_FOUND,r):re(ne.FETCHING_TOKEN_ROUTE,r);const e=Oe.state===E.K.REQUIRED,t=()=>e&&Oe.approveAndPermit();return Pe?re(ne.LOADING_ALLOWANCE,r,t):e?Oe.isApprovalPending?re(ne.IN_WALLET_ALLOWANCE_APPROVAL,r,t):Oe.isApprovalLoading?re(ne.PROCESSING_APPROVAL,r,t):re(ne.REQUIRE_APPROVAL,r,t):H===z.s.CONFIRM_QUOTE?re(ne.CONFIRM_UPDATED_PRICE,r,_e):ke&&"error"===ke.priceImpactSeverity.type?re(ne.PRICE_IMPACT_HIGH,r,_e,xe,ke):re(ne.PAY,r,_e,xe)}),[I,g,Be,H,xe,Ne,Pe,Oe,ke,r,_e,ze,_,n,W]),Ve={usd_value:Le?.toExact(),using_erc20:!!q,...t};return(0,s.jsxs)(de,{children:[(0,s.jsxs)(ce,{children:[(0,s.jsxs)(le,{gap:"xs",children:[(0,s.jsxs)(ue,{children:[(0,s.jsx)(x.ZP,{gap:"xs",children:(0,N.EC)(g)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(oe.Tv.SubHeaderSmall,{children:(0,s.jsx)(i.cC,{id:"JQjhrO"})}),(0,s.jsxs)(ge,{onClick:()=>{G||(K(!0),(0,o._P)(a.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(m.Z,{currency:ie,size:"24px"}),(0,s.jsx)(oe.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:ie?.symbol}),(0,s.jsx)(ae.Z,{size:20,color:r.neutral2})]})]})}),(0,s.jsxs)(pe,{gap:"xs",children:[(0,s.jsx)(oe.Tv.SubHeaderSmall,{children:(0,s.jsx)(i.cC,{id:"72c5Qo"})}),(0,s.jsx)(Ce,{usingPayWithAnyToken:xe,totalEthPrice:T,activeCurrency:ie,tradeState:Ne,trade:be})]})]}),(0,s.jsx)(Ee,{usdcValue:Le,priceImpact:ke,tradeState:Ne,usingPayWithAnyToken:xe})]}),(0,s.jsxs)(o.M8,{events:[a.TM.onClick],name:a.Yz.NFT_BUY_BAG_PAY,element:a.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Ve},shouldLogImpression:I&&!De,children:[(0,s.jsx)(Te,{color:Ge,children:Ue}),(0,s.jsx)(Ae,{color:Me,children:He}),(0,s.jsxs)(fe,{"data-testid":"nft-buy-button",onClick:We,disabled:De||X,$backgroundColor:$e,$color:Fe,children:[X&&(0,s.jsx)(h.ZP,{size:"20px",stroke:"white"}),qe]})]})]}),(0,s.jsx)(f.Z,{isOpen:V,onDismiss:()=>K(!1),onCurrencySelect:e=>{F(e.isNative?void 0:e),e.isToken&&(0,o._P)(a.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ie??void 0,onlyShowCurrenciesWithBalance:!0})]})};var ye=n(57873),Oe=n(55867),Pe=n(2994),ke=n(14031),Re=n(5658),Se=n(437),Le=(n(16091),n(86003)),we=n(56878),Be=n(60198);const ze=Q.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,qe=Q.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${ze} linear;
  animation: ${ze} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,Fe=()=>(0,s.jsx)(ye.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(qe,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var De=n(83164),Ue=n(26030),Ge=n(15655),He=n(70453),Me=n(41440),We=(n(94968),"dm6faib _1xzbheqbf _1xzbheqd9 _1xzbheq8bh _1xzbheq45r _1xzbheq45l"),$e="dm6fai1 _1xzbheq2dr _1xzbheq2j9 _1xzbheq2of _1xzbheq27x _1xzbheq4b9 _1xzbheq3tf _1xzbheq7zd _1xzbheq1dr _1xzbheq80x",Ve="_1xzbheq149 _1xzbheq1b9 _1xzbheq49l _1xzbheq80p",Ze="_1xzbheqd3 _1xzbheqb9 _1xzbheqe3 _1xzbheq8bh _1xzbheq45l _1xzbheq45r _1xzbheq4bf",Ye="dm6fai7",Ke="_1xzbheq3xr";const Xe=(0,Q.default)(Be.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,Je=(0,Q.default)(Be.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,Qe=Q.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,et=({onClick:e})=>(0,s.jsx)(Qe,{onClick:e,children:(0,s.jsx)(Ue.Xv,{})}),tt=()=>(0,s.jsx)(ye.n,{position:"relative",background:"loadingBackground",className:Ve,children:(0,s.jsxs)(ye.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),nt=({asset:e,usdPrice:t,removeAsset:n,showRemove:i,grayscale:a,isMobile:o})=>{const{formatEther:r,formatNumberOrString:c}=(0,ee.Gb)(),[l,u]=(0,L.useState)(!1),[p,x]=(0,L.useState)(!e.smallImageUrl),[h,m]=(0,L.useState)(!1),g=(0,L.useCallback)((()=>m(!0)),[]),f=(0,L.useCallback)((()=>m(!1)),[]),_=Boolean(i&&h&&!o),I=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,N=r({input:I,type:ee.sw.NFTToken}),b=c({input:t?parseFloat((0,d.formatEther)(I))*t:t,type:ee.sw.FiatNFTToken}),T=(0,L.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(Me.rU,{to:(0,q.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(Pe.X2,{className:$e,onMouseEnter:g,onMouseLeave:f,children:[(0,s.jsxs)(ye.n,{position:"relative",display:"flex",children:[i&&o&&(0,s.jsx)(et,{onClick:T}),!p&&(0,s.jsx)(ye.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,we.default)(Ve,a&&!h&&Ye),onLoad:()=>{u(!0)},onError:()=>{x(!0)},visibility:l?"visible":"hidden"}),!l&&(0,s.jsx)(ye.n,{position:"absolute",className:`${Ve} ${He.L}`}),p&&(0,s.jsx)(tt,{})]}),(0,s.jsxs)(Pe.sg,{overflow:"hidden",width:"full",color:a?"neutral2":"neutral1",children:[(0,s.jsxs)(Pe.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(ye.n,{className:We,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(De.yT,{})]}),(0,s.jsxs)(Pe.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ye.n,{className:Ze,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ue.SA,{className:Ke})]})]}),_&&(0,s.jsx)(Xe,{onClick:T,emphasis:Be.eI.medium,size:Be.qE.medium,children:"Remove"}),(!_||o)&&(0,s.jsxs)(Pe.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(ye.n,{className:"dm6fai9 _1xzbheq3sr _1xzbheqbf _1xzbheqd9 _1xzbheq3xr",children:[N,"\xa0ETH"]}),(0,s.jsx)(ye.n,{className:Ze,children:b})]})]})})},st=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:i,isMobile:a})=>{const{formatEther:o}=(0,ee.Gb)(),r=Le.O$.from(e.updatedPriceInfo?.ETHPrice).gt(Le.O$.from(e.priceInfo.ETHPrice)),d=(0,L.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),c=(0,L.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(Pe.sg,{className:"_1xzbheq2p3 _1xzbheq28l _1xzbheqlf _1xzbheqqx _1xzbheq4ux _1xzbheq3t3 _1xzbheq4b9 _1xzbheq7zp _1xzbheq895 _1xzbheq59f _1xzbheq5yr _1xzbheq1dr _1xzbheq7zd",borderTopColor:i?"surface3":"transparent",children:[(0,s.jsxs)(Pe.X2,{className:"_1xzbheqd3 _1xzbheqb9 _1xzbheqe3 _1xzbheq4dr _1xzbheq3sr",children:[r?(0,s.jsx)(Ue.PH,{}):(0,s.jsx)(Ue.HE,{}),(0,s.jsx)(ye.n,{children:`Price ${r?"increased":"decreased"} from ${o({input:e.priceInfo.ETHPrice,type:ee.sw.NFTToken})} ETH`})]}),(0,s.jsx)(ye.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(nt,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:a})}),(0,s.jsxs)(Pe.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(Je,{onClick:d,emphasis:Be.eI.medium,size:Be.qE.small,children:"Remove"}),(0,s.jsx)(Je,{onClick:c,emphasis:Be.eI.high,size:Be.qE.small,children:"Keep"})]})]})},it=({assets:e})=>(0,s.jsx)(Pe.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(ye.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:Ye},`${e.address}-${e.tokenId}`)))}),at=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:a,isMobile:o})=>{const[r,d]=(0,L.useReducer)((e=>!e),!1),[c,l]=(0,L.useState)(8);if((0,L.useEffect)((()=>{if(!c)return void(i||(n(),a(!1)));const e=setInterval((()=>{l(c-1)}),1e3);return()=>clearInterval(e)}),[c,n,i,a]),!e||0===e.length)return null;const u=e.length>1,p=r||!u;return(0,s.jsx)(Pe.sg,{className:"_1xzbheq2p3 _1xzbheq28l _1xzbheqlf _1xzbheqqx _1xzbheq4ux _1xzbheq3tf _1xzbheq4b9 _1xzbheq7zp _1xzbheq895 _1xzbheq59f _1xzbheq6df _1xzbheq5yr _1xzbheq1dr",children:(0,s.jsxs)(Pe.sg,{children:[(0,s.jsxs)(Pe.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(!i&&a(!0),d())},children:[(0,s.jsxs)(Pe.X2,{gap:"12",color:"neutral2",className:Ge.Km,children:[!p&&(0,s.jsx)(it,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(Pe.X2,{color:"neutral2",children:r?(0,s.jsx)(Ue.X_,{}):(0,s.jsx)(Ue.Xs,{})}),!i&&(0,s.jsxs)(Pe.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(Fe,{}),(0,s.jsx)(Ue.Nb,{})]})]}),(0,s.jsx)(Pe.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map((e=>(0,s.jsx)(nt,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:o},e.id)))})]})})},ot=()=>{const e=(0,Re.cP)((e=>e.bagStatus)),t=(0,Re.cP)((e=>e.setBagStatus)),n=(0,Re.cP)((e=>e.markAssetAsReviewed)),i=(0,Re.cP)((e=>e.didOpenUnavailableAssets)),r=(0,Re.cP)((e=>e.setDidOpenUnavailableAssets)),d=(0,Re.cP)((e=>e.itemsInBag)),c=(0,Re.cP)((e=>e.setItemsInBag)),l=(0,Re.cP)((e=>e.removeAssetsFromBag)),u=(0,Re.dD)(),p=(0,L.useMemo)((()=>(0,q.G7)(d)),[d]),x=(0,Re.$N)(),{unchangedAssets:h,priceChangedAssets:m,unavailableAssets:g,availableItems:f}=(0,L.useMemo)((()=>({unchangedAssets:p.filter((e=>e.status===z.ZJ.ADDED_TO_BAG||e.status===z.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:p.filter((e=>e.status===z.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:p.filter((e=>e.status===z.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:p.filter((e=>e.status!==z.ZJ.UNAVAILABLE))})),[p]);return(0,L.useEffect)((()=>{const n=m.length>0,s=p.length>0;n&&(0,o._P)(a.Yz.NFT_BUY_BAG_CHANGED,{usd_value:x,bag_quantity:p,...(0,q.Hj)(m)}),e!==z.s.IN_REVIEW||n||t(s?z.s.CONFIRM_REVIEW:z.s.ADDING_TO_BAG),e!==z.s.CONFIRM_REVIEW||s||t(z.s.ADDING_TO_BAG)}),[e,p,m,t,x]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Pe.sg,{display:m.length>0||g.length>0?"flex":"none",children:[g.length>0&&(0,s.jsx)(o.fM,{name:a.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:x,bag_quantity:p.length,...(0,q.Hj)(g)},shouldLogImpression:!0,children:(0,s.jsx)(at,{assets:g,usdPrice:x,clearUnavailableAssets:()=>c(f),didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:u})}),m.map(((e,t)=>(0,s.jsx)(st,{asset:e,usdPrice:x,markAssetAsReviewed:n,top:0===t&&0===g.length,isMobile:u},e.id)))]}),(0,s.jsx)(Pe.sg,{children:h.slice(0).reverse().map((e=>(0,s.jsx)(nt,{asset:e,usdPrice:x,removeAsset:l,showRemove:!0,isMobile:u},e.id)))})]})};var rt=n(62329);const dt=(0,Q.default)(oe.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-feee1033-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,ct=Q.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-feee1033-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${rt.c}
`,lt=Q.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-feee1033-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ut=Q.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-feee1033-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,pt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:a})=>{const o=(0,L.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ut,{children:[(0,s.jsx)(oe.Tv.HeadlineSmall,{children:a?(0,s.jsx)(i.cC,{id:"xNB0TS"}):(0,s.jsx)(i.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(lt,{sizing:o,children:e}),(0,s.jsx)(dt,{onClick:n,children:(0,s.jsx)(i.cC,{id:"yYxB17"})})]}),(0,s.jsx)(ct,{onClick:t,children:(0,s.jsx)(Ue.BW,{"data-testid":"nft-bag-close-icon"})})]})};var xt=n(17669);const ht=(0,Q.default)(Pe.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`;var mt=()=>{const e=(0,r.e5)();return(0,s.jsxs)(ht,{children:[(0,s.jsx)(Pe.M5,{children:e?(0,s.jsx)(Ue.JP,{color:xt.Z4.colors.neutral3}):(0,s.jsx)(Ue.Ln,{color:xt.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(Pe.M5,{"data-testid":"nft-no-nfts-selected",className:Ge.v4,children:"No NFTs selected"}):(0,s.jsxs)(Pe.sg,{gap:"16",children:[(0,s.jsx)(Pe.M5,{"data-testid":"nft-empty-bag",className:Ge.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(Pe.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})};var gt=({asset:e})=>{const t=(0,Re.Pc)((e=>e.removeSellAsset)),n=(0,Re.dD)(),[i,a]=(0,L.useState)(!1),o=()=>a(!i),r=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(Pe.X2,{className:$e,onMouseEnter:o,onMouseLeave:o,children:[(0,s.jsxs)(ye.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(et,{onClick:r}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Ve})]}),(0,s.jsxs)(Pe.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(Pe.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(ye.n,{className:We,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(Pe.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ye.n,{className:Ze,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ue.SA,{className:Ke})]})]}),i&&!n&&(0,s.jsx)(Xe,{onClick:r,emphasis:Be.eI.medium,size:Be.qE.medium,children:"Remove"})]})};const ft=()=>{const e=(0,Re.Pc)((e=>e.sellAssets));return(0,s.jsx)(Pe.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(gt,{asset:e},t))):null})},_t=320,It=360,Nt=Q.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-83712a43-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${_t}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Se.k.modalOverTooltip:Se.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${It}px;
  }
`,bt=Q.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-83712a43-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Tt=Q.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-83712a43-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,At=({top:e,show:t})=>(0,s.jsx)(ye.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"});var Ct=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Re.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Re.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:d,bagIsLocked:c,reset:l,bagExpanded:u,toggleBag:p,setBagExpanded:x}=(0,Re.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:h}=(0,Re.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),m=(0,r.e5)(),g=(0,r._3)(),f=(0,r.GZ)(),_=(0,Re.dD)(),I=(0,L.useMemo)((()=>(0,q.G7)(h)),[h]),[N,b]=(0,L.useState)(!1),{userCanScroll:T,scrollRef:A,scrollProgress:C,scrollHandler:E}=(0,Re.uh)(),v=(0,L.useCallback)((()=>{x({bagExpanded:!1,manualClose:!0})}),[x]);(0,L.useEffect)((()=>{c&&!N&&b(!0)}),[c,N]);const j=I.length>0,y=I.length>0,O=t.length>0,P=Boolean(!m&&!y&&d===z.s.ADDING_TO_BAG||m&&!O),k=(0,L.useMemo)((()=>({...(0,q.Hj)(I.map((e=>e.asset)))})),[I]);return u&&f?(0,s.jsxs)(Oe.h,{children:[(0,s.jsxs)(Nt,{"data-testid":"nft-bag",raiseZIndex:_||N,isProfilePage:m,children:[(0,s.jsx)(pt,{numberOfAssets:m?t.length:I.length,closeBag:v,resetFlow:m?e:l,isProfilePage:m}),P&&(0,s.jsx)(mt,{}),(0,s.jsx)(At,{top:!0,show:T&&C>0}),(0,s.jsx)(Pe.sg,{ref:A,className:"_1c5htqn1 _1xzbheq2ef _1xzbheq2jx _1xzbheq1yr _1xzbheq8ct",onScroll:E,gap:"12",children:m?(0,s.jsx)(ft,{}):(0,s.jsx)(ot,{})}),j&&!m&&(0,s.jsx)(je,{setModalIsOpen:b,eventProperties:k}),O&&m&&(0,s.jsx)(Tt,{onClick:()=>{p(),n(z.HA.LISTING),(0,o._P)(a.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(i.cC,{id:"xGVfLh"})})]}),g?(0,s.jsx)(bt,{onClick:p}):N&&(0,s.jsx)(ke.a,{onClick:()=>c?void 0:b(!1)})]}):null}},14031:function(e,t,n){n.d(t,{a:function(){return r},U:function(){return o}});var s=n(42893),i=n(42826),a=n(57873);n(16091);const o=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},r=({onClick:e=i.Z})=>(0,s.jsx)(a.n,{className:"_1x5km3h1 _1xzbheq3f3 _1xzbheq343 _1xzbheq17l _1xzbheq1ef _1xzbheq48r _1xzbheq44l _1xzbheq4u3",onClick:e})},50026:function(e,t,n){n.d(t,{B:function(){return p},P:function(){return u}});var s=n(86003),i=n(69867),a=n(15627),o=n(95202),r=n(4572),d=n(1004),c=n(13712),l=n(98841);function u(){const e=(0,l.c)((e=>e.itemsInBag));return(0,c.useMemo)((()=>e.reduce(((e,t)=>t.status!==d.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,a.U8)("ETH"),n=(0,c.useMemo)((()=>(0,r.Z)((0,i.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,o.sq)(n);return(0,c.useMemo)((()=>s?.toExact()),[s])}}}]);
//# sourceMappingURL=1428.baeeab25.chunk.js.map