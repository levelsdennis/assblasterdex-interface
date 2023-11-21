"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[9338],{51496:function(e,t,i){i.r(t),i.d(t,{BannerWrapper:function(){return fi},CollectionBannerLoading:function(){return pi},default:function(){return vi}});var n=i(42893),a=i(19903),s=i(80815),r=i(66196),o=i(60476),l=i(62329),d=i(2304),c=i(80343),h=i(20555),p=i(49912),x=i(11428),u=i(57873),m=i(2994),g=i(15655),f=i(5658),b=i(50026),_=i(12113),y=i(57482);i(16091),i(94968);const j=()=>{const e=(0,f.cP)((e=>e.itemsInBag)),t=(0,f.cP)((e=>e.toggleBag)),i=(0,b.P)(),a=(0,b.B)(),{formatEther:s,formatNumberOrString:r}=(0,y.Gb)(),o=e.length>0;return(0,n.jsxs)(m.X2,{display:{sm:o?"flex":"none",md:"none"},className:"_1xzbheq48r _1xzbheq32f _1xzbheq35l _1xzbheq3b3 _1xzbheq4ql _1xzbheq2tx _1xzbheq3qr _1xzbheq80p _1xzbheq7zp _1xzbheq55f _1xzbheq895 _1xzbheq48f",children:[(0,n.jsxs)(m.X2,{gap:"8",children:[(0,n.jsx)(u.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,n.jsx)(u.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,n.jsxs)(m.sg,{children:[(0,n.jsx)(u.n,{className:g.d1,fontWeight:"medium",children:(0,_.t)(e.length,"NFT")}),(0,n.jsxs)(m.X2,{gap:"8",children:[(0,n.jsxs)(u.n,{className:g.d1,children:[`${s({input:i.toString(),type:y.sw.NFTToken})}`," ETH"]}),(0,n.jsx)(u.n,{color:"neutral2",className:g.Km,children:r({input:a,type:y.sw.FiatNFTToken})})]})]})]}),(0,n.jsx)(u.n,{className:"_1xzbheqd9 _1xzbheqb9 _1xzbheqdx _1xzbheq2e9 _1xzbheq2jr _1xzbheq2of _1xzbheq27x _1xzbheq4df _1xzbheq6sl _1xzbheq80x _1xzbheq7zd",onClick:t,children:"View bag"})]})};var w=i(42195),C=i(87253),v=(i(37501),"_1ic820e1 _1xzbheqd9 _1xzbheqbf _1xzbheqe3 _1xzbheq48x _1xzbheq4ux _1xzbheq88d _1xzbheq7zd _1xzbheqfx _1xzbheq4bf"),k="_1ic820e5 _1ic820e1 _1xzbheqd9 _1xzbheqbf _1xzbheqe3 _1xzbheq48x _1xzbheq4ux _1xzbheq88d _1xzbheq7zd _1xzbheqfx _1xzbheq4b9";const T=(0,C.default)(m.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,N=new Array(2).fill(null).map(((e,t)=>(0,n.jsx)("div",{className:"_1ic820e6 ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3"},`ActivitySwitcherLoading-key-${t}`))),I=({showActivity:e,toggleActivity:t})=>{const i=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(T,{gap:"24",marginBottom:"16",children:i?N:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.n,{as:"button",className:e?v:k,onClick:()=>e&&t(),children:"Items"}),(0,n.jsx)(r.M8,{events:[a.TM.onClick],element:a.xo.NFT_ACTIVITY_TAB,name:a.Yz.NFT_ACTIVITY_SELECTED,children:(0,n.jsx)(u.n,{as:"button",className:e?k:v,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=i(86003),z=i(69867),P=i(56878),$=i(79954),q=i(82627),E=i(14526),R=i(12204),M=i(14327),F=i(83164),B=i(13712);const A=({asset:e,isMobile:t,mediaShouldBePlaying:i,setCurrentTokenPlayingMedia:s,uniformAspectRatio:o,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{const{formatEther:h}=(0,y.Gb)(),p=(0,f.cP)((e=>e.bagManuallyClosed)),x=(0,f.cP)((e=>e.addAssetsToBag)),u=(0,f.cP)((e=>e.removeAssetsFromBag)),m=(0,f.cP)((e=>e.itemsInBag)),g=(0,f.cP)((e=>e.bagExpanded)),b=(0,f.cP)((e=>e.setBagExpanded)),_=(0,r.oO)({page:a.yJ.NFT_COLLECTION_PAGE}),{isSelected:j}=(0,B.useMemo)((()=>({isSelected:m.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,m]),w=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),C=e?.rarity?.providers?e.rarity.providers[0]:void 0,v=(0,B.useCallback)((()=>{S.O$.from(e.priceInfo?.ETHPrice??0).gt(0)&&(x([e]),g||t||p||b({bagExpanded:!0}),(0,r._P)(a.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,..._}))}),[x,e,g,p,t,b,_]),k=(0,B.useCallback)((()=>{u([e])}),[e,u]),T=(0,B.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,n.jsx)(F.yT,{}):null,primaryInfoRight:e.rarity&&C?(0,n.jsx)(F.SD,{provider:C}):null,secondaryInfo:w?"":`${h({input:e.priceInfo.ETHPrice,type:y.sw.NFTToken})} ETH`,selectedInfo:(0,n.jsx)(R.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(R.cC,{id:"2RtVHm"}),disabledInfo:(0,n.jsx)(R.cC,{id:"i/2ImT"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,h,w,C]);return(0,n.jsx)(M.y,{asset:e,display:T,isSelected:j,isDisabled:Boolean(e.notForSale),selectAsset:v,unselectAsset:k,mediaShouldBePlaying:i,uniformAspectRatio:o,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:s,testId:"nft-collection-asset"})};var L,H=i(69394),O=i(55338),D=i(26030),Y=i(17669),W="_1ldraave _1xzbheq4bf _1xzbheq453 _1xzbheq19r _1xzbheq12r _1xzbheq8e1",X="_1ldraavc",U="_1xzbheq80d _1xzbheq6df _1xzbheq8ap _1xzbheq8bh _1xzbheqvx _1xzbheqff",Z="_1ldraavb _1xzbheq805 _1xzbheq5yr _1xzbheq89x _1xzbheq2cl _1xzbheq27x",V="_1xzbheq44r _1xzbheq2jl _1xzbheq7zd _1xzbheqbf _1xzbheqe3 _1xzbheq48f _1xzbheq3x _1xzbheq2dr _1xzbheq2ol _1xzbheq283",K="_1ldraav2",G=i(50413),J=i(2761),Q=i(9170);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(L||(L={}));const ee=(0,J.Ue)()((0,Q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,i)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:i}})))}})),{name:"useTraitsOpen"}));var te=i(39839),ie=i(71814);const ne=(0,C.default)(m.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ae=(0,C.default)(m.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,se={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},re=({title:e,element:t,onClick:i})=>(0,n.jsxs)(ne,{onClick:i,children:[(0,n.jsx)(te.Tv.BodyPrimary,{children:e}),(0,n.jsx)(te.Tv.SubHeaderSmall,{children:t})]}),oe=({title:e,value:t,addMarket:i,removeMarket:s,isMarketSelected:o,count:l})=>{const[d,c]=(0,B.useState)(!1),[h,p]=(0,B.useReducer)((e=>!e),!1);(0,B.useEffect)((()=>{c(o)}),[o]);const x=e=>{e.preventDefault(),d?(s(t),c(!1)):(i(t),c(!0)),(0,r._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.MARKETPLACE})},m=(0,n.jsx)(ie.X,{checked:d,hovered:h,onChange:x,children:(0,n.jsx)(u.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),g=(0,n.jsxs)(ae,{children:[(0,_.Dp)(e,"16"),e]});return(0,n.jsx)("div",{onMouseEnter:p,onMouseLeave:p,children:(0,n.jsx)(re,{title:g,element:m,onClick:x})},t)},le=({title:e,items:t,onClick:i,isOpen:a})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.n,{className:U,opacity:a?"1":"0"}),(0,n.jsxs)(u.n,{as:"details",className:(0,P.default)(g.Nf,!a&&K),open:a,borderRadius:a?"0":"12",children:[(0,n.jsxs)(u.n,{as:"summary",className:`${V} ${K}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:i,children:[e,(0,n.jsx)(u.n,{display:"flex",alignItems:"center",children:(0,n.jsx)(u.n,{className:W,style:{transform:`rotate(${a?0:180}deg)`},children:(0,n.jsx)(D.g8,{className:X})})})]}),(0,n.jsx)(m.sg,{className:Z,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),de=()=>{const{addMarket:e,removeMarket:t,markets:i,marketCount:a}=(0,G.PY)((({markets:e,marketCount:t,removeMarket:i,addMarket:n})=>({markets:e,marketCount:t,removeMarket:i,addMarket:n}))),[s,r]=(0,B.useState)(!!i.length),o=ee((e=>e.setTraitsOpen)),l=(0,B.useMemo)((()=>Object.entries(se).map((([s,r])=>(0,n.jsx)(oe,{title:r,value:s,count:a?.[s]||0,addMarket:e,removeMarket:t,isMarketSelected:i.includes(s)},s)))),[e,a,t,i]);return(0,n.jsx)(le,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),r(!s),o(L.MARKPLACE_INDEX,!s)},isOpen:s})};var ce=i(29304);const he=(0,C.default)(ce.Z).withConfig({displayName:"FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,pe=({sortDropDownOptions:e})=>{const[t,i]=(0,B.useState)(!1),a=e=>{e.preventDefault(),i(!t)},s=e.map((e=>(0,n.jsx)(xe,{dropDownOption:e,parentOnClick:a},e.displayText)));return(0,n.jsx)(le,{title:"Sort by",items:s,onClick:a,isOpen:t})},xe=({dropDownOption:e,parentOnClick:t})=>{const i=(0,f.PY)((e=>e.sortBy)),a=void 0!==e.sortBy&&i===e.sortBy?(0,n.jsx)(he,{}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)(re,{title:e.displayText,element:a,onClick:i=>{i.preventDefault(),t(i),e.onClick()}})},ue=({dropDownOptions:e,inFilters:t,mini:i,miniPrompt:a,top:s,left:r})=>{const o=(0,f.PY)((e=>e.sortBy)),[l,d]=(0,B.useReducer)((e=>!e),!1),[c,h]=(0,B.useReducer)((e=>!e),!1),[p,x]=(0,B.useState)(o),b=(0,f.Iv)((e=>e.isCollectionStatsLoading)),[_,y]=(0,B.useState)(0);(0,B.useEffect)((()=>{x(o)}),[o]);const j=(0,B.useRef)(null);(0,O.t)(j,(()=>l&&d())),(0,B.useEffect)((()=>y(0)),[e]);const w=(0,B.useMemo)((()=>e[p].reverseOnClick||e[p].reverseIndex),[p,e]),C=b?220:t?"full":i?"min":_||"300px";return(0,n.jsxs)(u.n,{ref:j,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,n.jsx)(u.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:i?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":i?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:b?"tvqlh23 ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3 _1xzbheq1al":(0,P.default)(l&&!i&&"tvqlh20"),children:!b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&w&&(0,n.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[p].reverseOnClick)e[p].reverseOnClick?.(),h();else{const t=e[p].reverseIndex??1;e[t-1].onClick(),x(t-1)}},children:[e[p].reverseOnClick&&(c?(0,n.jsx)(D.iB,{}):(0,n.jsx)(D.L7,{})),e[p].reverseIndex&&(p>(e[p].reverseIndex??1)-1?(0,n.jsx)(D.iB,{}):(0,n.jsx)(D.L7,{}))]}),(0,n.jsx)(u.n,{marginLeft:w?"4":"0",marginRight:i?"2":"0",color:"neutral1",className:g.km,children:i?a:l?"Sort by":e[p].displayText})]}),(0,n.jsx)(D.g8,{secondaryColor:i?Y.Z4.colors.neutral1:void 0,secondaryWidth:i?"20":void 0,secondaryHeight:i?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,n.jsx)(u.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:i?void 0:"0",borderTopRightRadius:i?void 0:"0",overflowY:"hidden",transition:"250",display:l||!_?"block":"none",visibility:_?"visible":"hidden",marginTop:i?"12":"0",className:(0,P.default)(!i&&"tvqlh21"),style:{top:s?`${s}px`:"inherit",left:t?"16px":r?`${r}px`:"inherit"},children:_?l&&e.map(((t,a)=>(0,n.jsx)(me,{option:t,index:a,mini:i,onClick:()=>{e[a].onClick(),x(a),d(),c&&h()}},a))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,n.jsx)(ge,{option:e,index:t,setMaxWidth:y},t)))})]})},me=({option:e,index:t,onClick:i,mini:a})=>(0,n.jsx)(u.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:a?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:i,cursor:"pointer",children:(0,n.jsx)(u.n,{marginLeft:"8",className:g.km,children:e.displayText})},t),ge=({option:e,index:t,setMaxWidth:i})=>{const a=(0,B.useRef)(null);return(0,B.useLayoutEffect)((()=>{a&&a.current&&i(Math.ceil(a.current.getBoundingClientRect().width)+52)})),(0,n.jsx)(u.n,{position:"absolute",ref:a,children:(0,n.jsx)(me,{option:e,index:t})},t)};var fe=i(70453),be=i(37506);const _e=(0,J.Ue)()((0,Q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var ye=i(1004);const je="undefined"!==typeof window;const we=()=>{const e=!!je&&window.innerWidth<Y.AV.sm?"nft-anchor-mobile":"nft-anchor";window.document.getElementById(e)?.scrollIntoView({behavior:"smooth"})};var Ce=i(37515);const ve=e=>{const t={...e};for(const n in t){const e=t[n],i=f.initialCollectionFilterState[n];JSON.stringify(e)===JSON.stringify(i)&&delete t[n]}t.all!==f.initialCollectionFilterState.buyNow&&delete t.all;const i=f.i9[f.initialCollectionFilterState.sortBy];return t.sort===i&&delete t.sort,t},ke=(e,t)=>{const i={...e};["traits","markets"].forEach((e=>{i[e]||(i[e]=[]),i[e]&&"string"===typeof i[e]&&(i[e]=[i[e]])}));try{const{buyNow:e,search:n}=f.initialCollectionFilterState;if(Object.entries(f.i9).forEach((([e,t])=>{t===i.sort&&(i.sortBy=Number(e))})),i.buyNow=!(void 0===i.all?!e:i.all),i.search=void 0===i.search?n:String(i.search),2===i.traits.length){const[e,t]=i.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(i.traits=[`${e},${t}`])}i.traits=i.traits.map((e=>{const i=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[n,a]=i.split(","),s=t.traits&&t.traits[n].find((e=>e.trait_value===a));return s??{trait_type:n,trait_value:a,trait_count:0}}))}catch(n){i.traits=[]}return i};var Te=i(46642),Ne=i(80657),Ie=i(35837),Se=i(21849),ze=(i(43704),i(263));const Pe=C.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-3f327a09-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,$e=(0,C.default)(ze.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-3f327a09-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,qe=C.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-3f327a09-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Ee=C.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-3f327a09-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Re=C.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-3f327a09-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Me=C.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-3f327a09-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Fe=C.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-3f327a09-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Be=C.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-3f327a09-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Ae=C.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-3f327a09-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,Le=C.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-3f327a09-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,He=C.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-3f327a09-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,Oe=RegExp("^(0|[1-9][0-9]*)$"),De=RegExp("^\\d*\\.?\\d{0,2}$"),Ye=({nfts:e})=>(0,n.jsx)(Le,{children:[...Array(3)].map(((t,i)=>(0,n.jsx)(He,{index:i,src:e.length-1>=i?e[e.length-1-i].smallImageUrl:void 0},i)))}),We=({contractAddress:e,minPrice:t,maxPrice:i})=>{const a=(0,C.useTheme)(),{formatEther:s}=(0,y.Gb)(),[r,o]=(0,B.useReducer)((e=>!e),!0),[l,d]=(0,B.useState)(""),c=(0,f.cP)((e=>e.addAssetsToBag)),h=(0,f.cP)((e=>e.removeAssetsFromBag)),p=(0,f.cP)((e=>e.itemsInBag)),x=(0,f.cP)((e=>e.lockSweepItems)),u=(0,f.cP)((e=>e.setBagExpanded)),m=(0,f.PY)((e=>e.traits)),g=(0,f.PY)((e=>e.markets)),b=Ue(e,"others",t,i),j=Ue(e,ye.Fz.Sudoswap,t,i),w=Ue(e,ye.Fz.NFTX,t,i),v=Ue(e,ye.Fz.NFT20,t,i),{data:k}=(0,q.he)(b),{data:T}=(0,q.he)(j),{data:N}=(0,q.he)(w),{data:I}=(0,q.he)(v),{sortedAssets:P,sortedAssetsTotalEth:$}=(0,B.useMemo)((()=>{if(!k&&!T&&!N&&!I)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let e=0,t=0,i=[];T&&(i=[...i,...T]),N&&(i=[...i,...N]),I&&(i=[...i,...I]);const n=i.filter((e=>e.marketplace===ye.Fz.Sudoswap&&!e.susFlag));i.forEach((i=>{if(!i.susFlag)if(i.marketplace===ye.Fz.Sudoswap){const e=(0,_.Pu)(i,n.filter((e=>(0,_.zA)(i,e))).findIndex((e=>e.tokenId===i.tokenId)));i.priceInfo.ETHPrice=e??"0"}else{const n=i.marketplace===ye.Fz.NFTX,a=(0,_.Pu)(i,n?e:t);S.O$.from(a).gt(0)&&(n?e++:t++),i.priceInfo.ETHPrice=a}})),i=k?k.concat(i):i,i.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let a=i.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return a=a.slice(0,Math.max(k?.length??0,T?.length??0,N?.length??0,I?.length??0)),{sortedAssets:a,sortedAssetsTotalEth:a.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[k,T,N,I]),{sweepItemsInBag:E,sweepEthPrice:M}=(0,B.useMemo)((()=>{const t=p.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),i=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:i}}),[p,e]);(0,B.useEffect)((()=>{0===E.length&&d("")}),[E]),(0,B.useEffect)((()=>{x(e)}),[e,m,g,t,i,x]);const F=e=>{if(P)if(r)0===E.length&&e>0&&u({bagExpanded:!0}),E.length<e?c(P.slice(E.length,e),!0):h(E.slice(e,E.length),!0),d(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(M.lte(t)){let e=E.length,i=M;const n=[];for(;e<P.length&&i.add(S.O$.from(P[e].priceInfo.ETHPrice)).lte(t);)n.push(P[e]),i=i.add(S.O$.from(P[e].priceInfo.ETHPrice)),e++;n.length>0&&(0===E.length&&u({bagExpanded:!0}),c(n,!0))}else{let e=E.length-1,i=M;const n=[];for(;e>=0&&i.gt(t);)n.push(E[e]),i=i.sub(S.O$.from(E[e].priceInfo.ETHPrice)),e--;n.length>0&&h(n,!0)}d(0===e?"":e.toFixed(2))}};return(0,n.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,n.jsxs)(qe,{children:[(0,n.jsx)(Re,{children:(0,n.jsx)(te.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,n.jsx)(R.cC,{id:"ZC4hNh"})})}),(0,n.jsxs)(Me,{children:[(0,n.jsx)($e,{defaultValue:0,min:0,max:r?P?.length??0:parseFloat((0,z.formatEther)($).toString()),value:r?E.length:parseFloat((0,z.formatEther)(M.toString())),step:r?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${a.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${a.surface3}`},onChange:e=>{"number"===typeof e&&P&&(r?(Math.floor(e)!==Math.floor(""!==l?parseFloat(l):0)&&F(Math.floor(e)),d(e<1?"":e.toString())):(F(e),d(0===e?"":e.toFixed(2))))}}),(0,n.jsx)(Fe,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:r&&""!==l?Math.floor(parseFloat(l)):l,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(F(0),d("")):(r&&Oe.test(t)||!r&&De.test(t))&&(F(parseFloat(t)),d(t))}}),(0,n.jsxs)(Be,{onClick:()=>{d(""),h(E),o()},children:[(0,n.jsx)(Ae,{active:r,children:"Items"}),(0,n.jsx)(Ae,{active:!r,children:"ETH"})]})]})]}),(0,n.jsxs)(Ee,{children:[(0,n.jsx)(te.Tv.SubHeader,{"font-size":"14px",children:`${s({input:M.toString(),type:y.sw.NFTToken})} ETH`}),(0,n.jsx)(Ye,{nfts:E})]})]})},Xe=[ye.Fz.Opensea,ye.Fz.X2Y2,ye.Fz.LooksRare];function Ue(e,t,i,n){const a=(0,f.PY)((e=>e.traits)),s=(0,f.PY)((e=>e.markets)),r=!!s.length;return(0,B.useMemo)((()=>{if(r){if("others"===t){const t=s.filter((e=>!(0,ye.g7)(e)));return t.length>0?{contractAddress:e,traits:a,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!s.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case ye.Fz.Sudoswap:case ye.Fz.NFTX:case ye.Fz.NFT20:return{contractAddress:e,traits:a,markets:[t],price:{low:i,high:n,symbol:"ETH"}};case"others":return{contractAddress:e,traits:a,markets:Xe,price:{low:i,high:n,symbol:"ETH"}}}}),[e,r,t,s,n,i,a])}const Ze=C.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ve=C.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ke=({onClick:e,value:t})=>(0,n.jsxs)(Ze,{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)(Ve,{onClick:e,children:(0,n.jsx)(D.aM,{cursor:"pointer"})})]}),Ge=new Map,Je=C.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=C.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-c6569a9f-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=C.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-c6569a9f-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=C.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-c6569a9f-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,it=C.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-c6569a9f-3"})`
  display: block;
  text-align: center;
`,nt=C.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-c6569a9f-4"})`
  ${l.c}
`,at=C.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-c6569a9f-5"})`
  ${Je}
`,st=C.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-c6569a9f-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:i})=>e&&!t?i.deprecated_accentTextLightPrimary:i.neutral1};
  background: ${({theme:e,toggled:t,disabled:i})=>!i&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,rt=(0,C.default)(te.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-c6569a9f-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,ot=(0,C.default)(m.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-c6569a9f-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,n.jsx)(u.n,{width:"full",className:H.P,children:(0,n.jsx)(Ie.p,{height:e})}),dt=()=>(0,n.jsx)(at,{children:(0,n.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,n.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,n.jsx)(u.n,{className:fe.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,n.jsx)(u.n,{className:fe.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,n.jsx)(u.n,{className:fe.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,n.jsx)(lt,{})]})}),ct=(e,t)=>{const i=[{displayText:"Price: Low to High",onClick:()=>e(f.hn.LowToHigh),reverseIndex:2,sortBy:f.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(f.hn.HighToLow),reverseIndex:1,sortBy:f.hn.HighToLow}];return t?i.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(f.hn.RareToCommon),reverseIndex:4,sortBy:f.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(f.hn.CommonToRare),reverseIndex:3,sortBy:f.hn.CommonToRare}]):i},ht=({contractAddress:e,collectionStats:t,rarityVerified:i})=>{const{chainId:o}=(0,s.useWeb3React)(),l=(0,f.PY)((e=>e.traits)),d=(0,f.PY)((e=>e.minPrice)),c=(0,f.PY)((e=>e.maxPrice)),h=(0,f.PY)((e=>e.markets)),x=(0,f.PY)((e=>e.sortBy)),b=(0,f.PY)((e=>e.search)),y=(0,f.PY)((e=>e.setMarketCount)),j=(0,f.PY)((e=>e.setSortBy)),w=(0,f.PY)((e=>e.buyNow)),C=_e((e=>e.setPriceRangeLow)),v=_e((e=>e.priceRangeLow)),k=_e((e=>e.priceRangeHigh)),T=_e((e=>e.setPriceRangeHigh)),N=_e((e=>e.setPrevMinMax)),I=(0,be.I)((e=>e.setIsCollectionNftsLoading)),R=(0,f.PY)((e=>e.removeTrait)),M=(0,f.PY)((e=>e.removeMarket)),F=(0,f.PY)((e=>e.reset)),L=(0,f.PY)((e=>e.setMinPrice)),O=(0,f.PY)((e=>e.setMaxPrice)),Y=(0,f.PY)((e=>e.setHasRarity)),W=(0,f.cP)((e=>e.toggleBag)),X=(0,f.cP)((e=>e.bagExpanded)),U=(0,f.cP)((e=>e.itemsInBag)),Z=(0,E.Z)(d,500),V=(0,E.Z)(c,500),K=(0,E.Z)(b,500),[G,J]=(0,B.useState)(ye.Yp.unset),[Q,ee]=(0,B.useState)(),[te,ie]=(0,B.useState)(!1),ne={address:e,orderBy:f.AZ[x].field,asc:f.AZ[x].asc,filter:{listed:w,marketplaces:h.length>0?h.map((e=>e.toUpperCase())):void 0,maxPrice:V?(0,z.parseEther)(V.toString()).toString():void 0,minPrice:Z?(0,z.parseEther)(Z.toString()).toString():void 0,tokenSearchQuery:K,traits:l.length>0?l.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:q.iQ},{data:ae,loading:re,hasNext:oe,loadMore:le}=(0,q.gP)(ne),de=(0,B.useCallback)((e=>{const t=U.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===ye.Fz.Sudoswap){const i=U.filter((t=>(0,_.zA)(e,t.asset)));return t?i.findIndex((t=>t.asset.tokenId===e.tokenId)):i.length}return t?U.filter((t=>(0,_.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):U.filter((t=>(0,_.H8)(e,t.asset))).length}),[U]),ce=(0,B.useCallback)((e=>(0,_.Pu)(e,de(e))),[de]),he=(0,B.useMemo)((()=>{if(!ae||!ae.some((e=>e.marketplace&&(0,ye.g7)(e.marketplace))))return ae;const e=[...ae];return e.forEach((e=>e.marketplace&&(0,ye.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ce(e)??"0"))),x!==f.hn.HighToLow&&x!==f.hn.LowToHigh||e.sort(((e,t)=>{const i=S.O$.from(e.priceInfo?.ETHPrice??0),n=S.O$.from(t.priceInfo?.ETHPrice??0);if(i.gt(0)&&n.lte(0))return-1;if(n.gt(0)&&i.lte(0))return 1;const a=i.sub(n);return a.gt(0)?x===f.hn.LowToHigh?1:-1:a.lt(0)?x===f.hn.LowToHigh?-1:1:0})),e}),[ae,x,ce]),[pe,xe]=(0,B.useState)(),[me,ge]=(0,f.wx)(),fe=(0,B.useRef)(null),je=(0,f.dD)(),ze=(0,p.e)();(0,B.useEffect)((()=>{I(re)}),[re,I]);const Pe=(0,B.useMemo)((()=>{const e=(0,_.oY)(Ge,t?.address,he)??!1;return Y(e),e}),[t.address,he,Y]),$e=(0,B.useMemo)((()=>ct(j,Pe)),[Pe,j]);(0,B.useEffect)((()=>(ie(!1),()=>{f.PY.setState(f.initialCollectionFilterState)})),[e]);const qe=(0,B.useMemo)((()=>he?he.map((e=>(0,n.jsx)(A,{asset:e,isMobile:je,mediaShouldBePlaying:e.tokenId===pe,setCurrentTokenPlayingMedia:xe,rarityVerified:i,uniformAspectRatio:G,setUniformAspectRatio:J,renderedHeight:Q,setRenderedHeight:ee},e.address+e.tokenId))):null),[he,je,pe,i,G,Q]),Ee=he&&he.length>0,Re=Ee&&he[0]&&he[0]?.tokenType===$.hg.Erc1155,Me=(0,B.useMemo)((()=>Z&&V?`Price: ${Z} - ${V} ETH`:Z?`Min. Price: ${Z} ETH`:V?`Max Price: ${V} ETH`:void 0),[Z,V]);(0,B.useEffect)((()=>{const e={};t?.marketplaceCount?.forEach((({marketplace:t,count:i})=>{e[t]=i})),y(e),fe.current=f.PY.getState()}),[t?.marketplaceCount,y]);const Fe=(0,Ne.TH)();(0,B.useEffect)((()=>{if(t?.traits){const e=((e,t)=>{if(!e.search)return;const i=Ce.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return ke(i,t)})(Fe,t);requestAnimationFrame((()=>{e&&f.PY.setState(e)})),f.PY.subscribe((e=>{JSON.stringify(fe.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((i=>{switch(i){case"traits":{const i=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=i;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=f.i9[e.sortBy];break;default:t[i]=e[i]}}));const i=ve(t),n=window.location.href.split("?")[0],a=Ce.stringify(i,{arrayFormat:"comma"});window.history.replaceState({},"",`${n}${a&&`?${a}`}`)})(e),fe.current=e)}))}}),[Fe]),(0,B.useEffect)((()=>{J(ye.Yp.unset),ee(void 0)}),[e]),(0,B.useEffect)((()=>{if(t&&t.stats?.floor_price){const e=t.stats?.floor_price,i=10*t.stats?.floor_price;""===v&&C(e?.toFixed(2)),""===k&&T(i.toFixed(2))}}),[t,v,k,T,C]);const Be=(0,B.useCallback)((()=>{Re||(te||(we(),X||je||W()),ie(!te))}),[X,Re,je,te,W]),Ae=(0,B.useCallback)((()=>{F(),N([0,100]),we()}),[F,N]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,n.jsxs)(Qe,{children:[(0,n.jsxs)(et,{children:[(0,n.jsx)(r.M8,{events:[a.TM.onClick],element:a.xo.NFT_FILTER_BUTTON,name:a.Yz.NFT_FILTER_OPENED,shouldLogImpression:!me,properties:{collection_address:e,chain_id:o},children:(0,n.jsx)(Ft.L,{isMobile:je,isFiltersExpanded:me,collectionCount:he?.[0]?.totalCount??0,onClick:()=>{X&&!ze.xl&&W(),ge(!me)}})}),(0,n.jsx)(tt,{isFiltersExpanded:me,children:(0,n.jsx)(ue,{dropDownOptions:$e})}),(0,n.jsx)(pt,{})]}),!Re&&(0,n.jsxs)(st,{toggled:te,disabled:Re,className:g.km,onClick:Be,"data-testid":"nft-sweep-button",children:[(0,n.jsx)(D.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,n.jsx)(rt,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,n.jsxs)(at,{children:[te&&(0,n.jsx)(We,{contractAddress:e,minPrice:Z,maxPrice:V}),(0,n.jsxs)(m.X2,{paddingTop:h.length||l.length||Me?"12":"0",gap:"8",flexWrap:"wrap",children:[h.map((e=>(0,n.jsx)(Ke,{value:(0,n.jsxs)(ot,{children:[(0,_.Dp)(e,"16"),se[e]]}),onClick:()=>{we(),M(e)}},e))),l.map((e=>(0,n.jsx)(Ke,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,_._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{we(),R(e)}},e.trait_value))),Me&&(0,n.jsx)(Ke,{value:Me,onClick:()=>{we(),L(""),O(""),N([0,100])}}),Boolean(l.length||h.length||Me)&&(0,n.jsx)(Se.v,{onClick:Ae,children:"Clear All"})]})]})]}),(0,n.jsx)(at,{children:re?(0,n.jsx)(lt,{height:Q}):(0,n.jsx)(Te.Z,{next:le,hasMore:oe??!1,loader:Boolean(oe&&Ee)&&(0,n.jsx)(Ie.p,{}),dataLength:he?.length??0,style:{overflow:"unset"},className:Ee?H.P:void 0,children:Ee?qe:(0,n.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,n.jsxs)(it,{children:[(0,n.jsx)("p",{className:g.Es,children:"No NFTS found"}),(0,n.jsx)(u.n,{onClick:F,type:"button",className:(0,P.default)(g.Km,g.km),color:"accent1",cursor:"pointer",children:(0,n.jsx)(nt,{children:"View full collection"})})]})})})})]})};const pt=()=>{const e=(0,G.PY)((e=>e.setSearch)),t=(0,G.PY)((e=>e.search)),i=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(u.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:i?"":"Search by name",className:(0,P.default)(i&&"ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3 _1xzbheq88d"),onChange:t=>{e(t.currentTarget.value)}})};var xt=i(86682);const ut=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var mt=i(51871),gt=i.n(mt),ft="ekla1n1 dpkfp53 _1xzbheq343 _1xzbheq7zp _1xzbheq89l _1xzbheq553 _1xzbheq81x _1xzbheq48l dpkfp5f",bt="dpkfp53 _1xzbheq343 _1xzbheq7zp _1xzbheq89l _1xzbheq553 _1xzbheq81x _1xzbheq48l _1xzbheq6rr",_t="dpkfp51 _1xzbheqwf _1xzbheqya _1xzbheqf3 _1xzbheqha";const yt=C.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-12f6ab1e-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,jt=C.default.div.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-12f6ab1e-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,wt=C.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-12f6ab1e-2"})`
  ${fe.S}
  height: 32px;
  width: 236px;
`,Ct=C.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-12f6ab1e-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,vt=({children:e,href:t})=>(0,n.jsx)(u.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),kt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ct,{onClick:i,children:t?(0,n.jsx)(D.DX,{width:"28",height:"28",fill:Y.Z4.colors.neutral2}):(0,n.jsx)(D.ws,{width:"28",height:"20",fill:Y.Z4.colors.neutral2})}),t&&(0,n.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,n.jsx)(vt,{href:e.discordUrl,children:(0,n.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(D.D7,{width:28,height:28,color:Y.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,n.jsx)(vt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(u.n,{margin:"auto",paddingTop:"6",children:(0,n.jsx)(D.Zm,{fill:Y.Z4.colors.neutral2,color:Y.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,n.jsx)(vt,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(u.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,n.jsx)(D.yu,{fill:Y.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,n.jsx)(vt,{href:e.externalUrl,children:(0,n.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(D.O1,{fill:Y.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,n.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),Nt=({collectionStats:e,name:t,isVerified:i,isMobile:a,collectionSocialsIsOpen:s,toggleCollectionSocials:r})=>{const o=(0,be.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,n.jsxs)(m.X2,{minWidth:"0",children:[o?(0,n.jsx)(wt,{}):(0,n.jsx)(jt,{isVerified:i,className:a?g.td:g.Es,children:t}),i&&(0,n.jsx)(D.SA,{style:{width:"32px",height:"32px"}}),(0,n.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,n.jsx)(Tt,{href:e.discordUrl??"",children:(0,n.jsx)(D.D7,{fill:Y.Z4.colors.neutral2,color:Y.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,n.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(D.Zm,{fill:Y.Z4.colors.neutral2,color:Y.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,n.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(D.yu,{fill:Y.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,n.jsx)(Tt,{href:e.externalUrl??"",children:(0,n.jsx)(D.O1,{fill:Y.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),a&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,n.jsx)(kt,{collectionStats:e,collectionSocialsIsOpen:s,toggleCollectionSocials:r})]})},It=C.default.div.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-12f6ab1e-4"})`
  vertical-align: top;
  text-overflow: ellipsis;

  ${({readMore:e})=>e?C.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:C.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=C.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-12f6ab1e-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,n.jsx)(u.n,{marginTop:{sm:"12",md:"16"},className:"dpkfp5c ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3 _1xzbheq199"}),Pt=({description:e})=>{const[t,i]=(0,B.useState)(!1),[a,s]=(0,B.useReducer)((e=>!e),!1),r=(0,B.useRef)(null),o=(0,B.useRef)(null),l=(0,be.I)((e=>e.isCollectionStatsLoading)),d=(0,f.dD)();return(0,B.useEffect)((()=>{r&&o&&r.current&&o.current&&(o.current.getBoundingClientRect().width>=r.current?.getBoundingClientRect().width-112||o.current.getBoundingClientRect().width>=590)?i(!0):i(!1)}),[o,r,l,e]),l?(0,n.jsx)(zt,{}):(0,n.jsxs)(u.n,{ref:r,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,n.jsx)(It,{readMore:a,ref:o,className:d?g.Km:g.d1,children:(0,n.jsx)(gt(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,n.jsxs)(St,{className:d?g.Km:g.d1,onClick:s,children:["show ",a?"less":"more"]})]})},$t=({children:e,label:t,shouldHide:i})=>(0,n.jsxs)(u.n,{display:i?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,n.jsx)(te.Tv.SubHeader,{className:"dpkfp56 _1xzbheqd9 _1xzbheqbl _1xzbheqef",children:e}),(0,n.jsx)(u.n,{as:"span",className:"dpkfp55 _1xzbheqd3 _1xzbheqb9 _1xzbheqdr _1xzbheq4bf _1xzbheq45l",children:t})]}),qt=e=>new Array(e?3:5).fill(null).map(((t,i)=>(0,n.jsxs)(u.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,n.jsx)("div",{className:"ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3 _1xzbheq14f _1xzbheq18x"}),(0,n.jsx)("span",{className:"ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3 _1xzbheq14f _1xzbheq199 _1xzbheqwf"})]},`statsLoadingSkeleton-key-${i}`))),Et=({stats:e,isMobile:t,...i})=>{const{formatNumberOrString:a,formatDelta:s}=(0,y.Gb)(),r=e?.stats?.total_supply?ut((e.stats.num_owners??0)/e.stats.total_supply*100):0,o=e.stats?a({input:e.stats.total_supply??0,type:y.sw.NFTCollectionStats}):0,l=e?.stats?.total_supply?ut((e.stats.total_listings??0)/e.stats.total_supply*100):0,d=(0,be.I)((e=>e.isCollectionStatsLoading)),c=a({input:Number(e.stats?.total_volume)??0,type:y.sw.NFTCollectionStats}),h=a({input:e.stats?.floor_price??0,type:y.sw.NFTTokenFloorPrice}),x=s(Math.round(Math.abs(e?.stats?.one_day_floor_change??0))),u=(0,f.cP)((e=>e.bagExpanded)),g=(0,p.e)(),b=t||!g.lg&&u;return(0,n.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...i,children:d?qt(t??!1):(0,n.jsxs)(n.Fragment,{children:[e.stats?.floor_price?(0,n.jsxs)($t,{label:"Global floor",shouldHide:!1,children:[h," ETH"]}):null,void 0!==e.stats?.one_day_floor_change?(0,n.jsx)($t,{label:"Floor 24H",shouldHide:!1,children:(0,n.jsxs)(yt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,n.jsx)(xt.Kx,{delta:e?.stats?.one_day_floor_change}),x]})}):null,e.stats?.total_volume?(0,n.jsxs)($t,{label:"Total volume",shouldHide:!1,children:[c," ETH"]}):null,o?(0,n.jsx)($t,{label:"Items",shouldHide:t??!1,children:o}):null,r&&e.standard!==ye.iv.ERC1155?(0,n.jsxs)($t,{label:"Unique owners",shouldHide:b??!1,children:[r,"%"]}):null,e.stats?.total_listings&&e.standard!==ye.iv.ERC1155?(0,n.jsxs)($t,{label:"Listed",shouldHide:b??!1,children:[l,"%"]}):null]})})},Rt=({isMobile:e})=>(0,n.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,n.jsx)(u.n,{className:bt}),(0,n.jsx)(u.n,{className:ft}),(0,n.jsxs)(u.n,{className:_t,children:[(0,n.jsx)(u.n,{className:"dpkfp5i ekla1n3 ekla1n1 _1xzbheq80x _1xzbheq7z9 _1xzbheq4g3 _1xzbheq19x"}),!e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{}),(0,n.jsx)(m.X2,{gap:"60",marginTop:"20",children:qt(!1)})]})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{}),(0,n.jsx)(m.X2,{gap:"20",marginTop:"20",children:qt(!0)})]})]}),Mt=({stats:e,isMobile:t})=>{const[i,a]=(0,B.useReducer)((e=>!e),!1),s=(0,be.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(u.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?i?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[s&&(0,n.jsx)(u.n,{as:"div",borderRadius:"round",position:"absolute",className:bt}),(0,n.jsx)(u.n,{as:s?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:s?ft:"dpkfp53 _1xzbheq343 _1xzbheq7zp _1xzbheq89l _1xzbheq553 _1xzbheq81x _1xzbheq48l",src:e.imageUrl}),(0,n.jsxs)(u.n,{className:_t,children:[(0,n.jsx)(Nt,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:i,toggleCollectionSocials:a}),(e.description||s)&&!t&&(0,n.jsx)(Pt,{description:e.description??""}),(0,n.jsx)(Et,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||s)&&t&&(0,n.jsx)(Pt,{description:e.description??""}),(0,n.jsx)("div",{id:"nft-anchor-mobile"}),(0,n.jsx)(Et,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Ft=i(48518),Bt=i(74090),At=i(97297),Lt="_1xzbheqd3 _1xzbheqbf _1xzbheqe9 _1xzbheq6w3 _1xzbheq2u9 _1xzbheq80x _1xzbheq7zp _1xzbheq899";const Ht=C.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-ead2a0ec-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Ot=e=>{const{children:t,index:i,title:a}=e,[s,r]=(0,B.useState)(!1),o=ee((e=>e.traitsOpen)),l=ee((e=>e.setTraitsOpen)),d=(0,f.dD)(),c=void 0!==i&&o[i-1],h=i!==L.TRAIT_START_INDEX;return(0,B.useEffect)((()=>{void 0!==i&&l(i,s)}),[s,i,l]),(0,n.jsxs)(n.Fragment,{children:[h&&(0,n.jsx)(u.n,{className:(0,P.default)(g.Nf,!s&&K,U),opacity:!c&&s&&0!==i?"1":"0",marginTop:c?"0":"8"}),(0,n.jsxs)(u.n,{as:"details",className:(0,P.default)(g.Nf,!s&&K),open:s,children:[(0,n.jsxs)(u.n,{as:"summary",className:`${V} ${K}`,onClick:e=>{e.preventDefault(),r(!s)},children:[a,(0,n.jsxs)(u.n,{display:"flex",alignItems:"center",children:[(0,n.jsx)(u.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,n.jsx)(u.n,{className:W,style:{transform:`rotate(${s?0:180}deg)`},children:(0,n.jsx)(D.g8,{className:X})})]})]}),(0,n.jsx)(Ht,{isMobile:d,children:t})]})]})},Dt=(0,C.default)(ze.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Yt=()=>{const[e,t]=(0,B.useState)(""),i=(0,G.PY)((e=>e.setMinPrice)),s=(0,G.PY)((e=>e.setMaxPrice)),o=(0,G.PY)((e=>e.minPrice)),l=(0,G.PY)((e=>e.maxPrice)),d=_e((e=>e.priceRangeLow)),c=_e((e=>e.priceRangeHigh)),h=_e((e=>e.setPriceRangeLow)),p=_e((e=>e.setPriceRangeHigh)),x=_e((e=>e.prevMinMax)),f=_e((e=>e.setPrevMinMax)),b=(0,C.useTheme)(),_=(0,Ne.TH)();(0,B.useEffect)((()=>{i(""),s(""),h(""),p("")}),[_.pathname,i,s,h,p]);const y=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},j=i=>{i.currentTarget.placeholder=e,t(""),(o||l)&&(0,r._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.PRICE_RANGE})};return(0,n.jsxs)(Ot,{title:"Price range",index:L.PRICE_RANGE_INDEX,children:[(0,n.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,n.jsx)(m.X2,{position:"relative",children:(0,n.jsx)(Bt.A,{style:{width:"126px"},className:Lt,placeholder:d,onChange:e=>{const[,t]=x;if(e.currentTarget.value){const i=parseInt(e.currentTarget.value)-parseInt(d),n=Math.floor(i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?f([t,t]):f([n,t])}else f([0,t]);i(e.currentTarget.value.toString()),we()},onFocus:y,value:o,onBlur:j})}),(0,n.jsx)(u.n,{className:g.d1,children:"to"}),(0,n.jsx)(m.X2,{position:"relative",children:(0,n.jsx)(Bt.A,{style:{width:"126px"},className:Lt,placeholder:c,value:l,onChange:e=>{const[t]=x;if(e.currentTarget.value){const i=parseInt(c)-parseInt(e.currentTarget.value),n=Math.floor(100-i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(o)?f([t,t]):f([t,n])}else f([t,100]);s(e.currentTarget.value),we()},onFocus:y,onBlur:j})})]}),(0,n.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,n.jsx)(Dt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:x,trackStyle:{top:"3px",height:"8px",background:`${b.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:At.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${b.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,n]=e,a=parseFloat(c.replace(/,/g,"")),r=parseFloat(d.replace(/,/g,"")),o=a-r,l=a-(100-n)/100*o;i((t/100*o+r).toFixed(2).toString()),s(l.toFixed(2).toString()),0===t&&i(""),100===n&&s(""),f(e)}})})]})};var Wt=i(36633),Xt=i(36450),Ut=i(94231),Zt=i(90739);const Vt=({trait:e,addTrait:t,removeTrait:i,isTraitSelected:s,style:o})=>{const[l,d]=(0,B.useState)(!1),[c,h]=(0,B.useState)(!1),p=()=>h(!c),x=(0,G.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:f,trait_value:b,trait_type:_}=(0,G.PY)((e=>e.showFullTraitName));(0,B.useEffect)((()=>{d(s)}),[s]);const y=n=>{n.preventDefault(),we(),l?(i(e),d(!1)):(t(e),d(!0)),(0,r._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.TRAIT})},j=f&&_===e.trait_type&&b===e.trait_value;return(0,n.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${g.Nf} _1ldraav5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...o},maxHeight:"44",onMouseEnter:p,onMouseLeave:p,onClick:y,children:[(0,n.jsx)(u.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:j?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&x({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>x({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Xt._)(Number(e.trait_value))}`:e.trait_value}),(0,n.jsx)(ie.X,{checked:l,hovered:c,onChange:y,children:(0,n.jsx)(u.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!j&&e.trait_count})})]},e.trait_value)},Kt=({traits:e,type:t,index:i})=>{const a=(0,G.PY)((e=>e.addTrait)),s=(0,G.PY)((e=>e.removeTrait)),r=(0,G.PY)((e=>e.traits)),[o,l]=(0,B.useState)(""),d=(0,E.Z)(o,300),c=(0,B.useMemo)((()=>e.filter((e=>e.trait_value?.toString().toLowerCase().includes(d.toLowerCase())))),[d,e]),h=(0,B.useCallback)((function({data:e,index:t,style:i}){const o=e[t],l=r.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,n.jsx)(Vt,{style:i,isTraitSelected:!!l,trait:o,addTrait:a,removeTrait:s})}),[r,a,s]),p=(0,B.useCallback)(((e,t)=>{const i=t[e];return`${i.trait_type}_${i.trait_value}_${e}`}),[]);return e.length?(0,n.jsxs)(Ot,{index:i,numTraits:e.length,title:t,children:[(0,n.jsx)(Bt.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,n.jsx)(m.sg,{className:Z,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,n.jsx)(Ut.Z,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(Zt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:p,children:({index:e,style:t,data:i})=>(0,n.jsx)(h,{style:t,data:i,index:e},p(e,i))})})})]}):null},Gt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:i}=(0,f.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),a=(0,f.PY)((e=>e.setSortBy)),s=(0,f.PY)((e=>e.hasRarity)),[r,o]=(0,B.useReducer)((e=>!e),!1),l=()=>{i(!t)},d=(0,B.useMemo)((()=>ct(a,s??!1)),[s,a]);return(0,n.jsxs)(u.n,{className:"_1ldraav1 _1xzbheq8bx _1xzbheq1ef _1xzbheq2o3 _1xzbheqlf _1xzbheqng",children:[(0,n.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,n.jsxs)(m.sg,{marginTop:"8",children:[(0,n.jsxs)(m.X2,{justifyContent:"space-between",className:`${V} ${K}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:o,onMouseLeave:o,children:[(0,n.jsx)(u.n,{"data-testid":"nft-collection-filter-buy-now",className:g.v4,children:"Buy now"}),(0,n.jsx)(ie.X,{hovered:r,checked:t,onClick:l,children:(0,n.jsx)("span",{})})]}),Wt.tq&&(0,n.jsx)(pe,{sortDropDownOptions:d}),(0,n.jsx)(de,{}),(0,n.jsx)(Yt,{}),Object.entries(e).length>0&&(0,n.jsx)(u.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"_1xzbheq80d _1xzbheq6df _1xzbheq8ap"}),(0,n.jsx)(m.sg,{children:Object.entries(e).map((([e,t],i)=>(0,n.jsx)(Kt,{type:e,traits:t,index:i+L.TRAIT_START_INDEX},e)))})]})]})};var Jt=i(69650);const Qt=(0,C.default)(o.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-15bf9a08-0"})`
  ${Jt.bc}
`,ei=(0,C.default)(o.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-15bf9a08-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${x.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${x.zD+16}px)`:"100%"};
  }
`,ti=(0,C.default)(d.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-15bf9a08-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,ii=()=>{const e=(0,f.cP)((e=>e.bagExpanded)),t=(0,f.dD)();return(0,n.jsxs)(ei,{isBagExpanded:e,children:[(0,n.jsx)(fi,{children:(0,n.jsx)(pi,{})}),(0,n.jsxs)(Qt,{children:[(0,n.jsx)(Rt,{isMobile:t}),(0,n.jsx)(ti,{children:N})]}),(0,n.jsx)(dt,{})]})};var ni;!function(e){e.UNSUPPORTED_TOKEN_AND_NFT_POLICY="https://support.uniswap.org/hc/en-us/articles/18783694078989-Unsupported-Token-Policy"}(ni||(ni={}));var ai=i(34578);const si=(0,C.default)(o.ZP).withConfig({displayName:"UnavailableCollectionPage__Container",componentId:"sc-339e086d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,ri=(0,C.default)(te.dL).withConfig({displayName:"UnavailableCollectionPage__StyledExternalLink",componentId:"sc-339e086d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function oi({isBlocked:e}){const t=(0,C.useTheme)();return e?(0,n.jsxs)(si,{children:[(0,n.jsx)(ai.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,n.jsx)(te.Tv.HeadlineMedium,{children:(0,n.jsx)(R.cC,{id:"nSkGHi"})}),(0,n.jsx)(te.m_,{to:"/nfts",children:(0,n.jsx)(R.cC,{id:"WFlfJ1"})}),(0,n.jsx)(ri,{href:ni.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,n.jsx)(R.cC,{id:"f6ybgN"})})]}):(0,n.jsxs)(si,{children:[(0,n.jsx)(te.Tv.HeadlineMedium,{children:(0,n.jsx)(R.cC,{id:"Ctk3ja"})}),(0,n.jsx)(te.m_,{to:"/nfts",children:(0,n.jsx)(R.cC,{id:"WFlfJ1"})})]})}var li=i(68830),di=i(47371),ci=i(437);const hi={},pi=(0,C.default)(c.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-ea1da3ac-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,xi=(0,C.default)(o.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-ea1da3ac-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,ui=(0,li.animated)(xi),mi=C.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-ea1da3ac-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,gi=(0,li.animated)(mi),fi=C.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-ea1da3ac-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,bi=C.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-ea1da3ac-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,_i=(0,C.default)(o.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-ea1da3ac-5"})`
  ${Jt.bc}
`,yi=C.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-ea1da3ac-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${ci.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,ji=(0,C.default)(d.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-ea1da3ac-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,wi=(0,C.default)(d.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-ea1da3ac-8"})`
  align-items: flex-start;
  position: relative;
`,Ci=C.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-ea1da3ac-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${l.c}
`;var vi=()=>{const{contractAddress:e}=(0,Ne.UO)(),t=(0,f.dD)(),[i,o]=(0,f.wx)(),{pathname:l}=(0,Ne.TH)(),d=(0,Ne.s0)(),c=l.includes("/activity"),u=(0,f.PY)((e=>e.setMarketCount)),m=(0,f.cP)((e=>e.bagExpanded)),g=(0,f.cP)((e=>e.setBagExpanded)),{chainId:b}=(0,s.useWeb3React)(),y=(0,p.e)(),{data:C,loading:v}=(0,h.K)(e),{CollectionContainerWidthChange:k}=(0,li.useSpring)({CollectionContainerWidthChange:m&&!t?(y.xxxl?x.zD:x.ZI)+16:0,config:{duration:di.Kd.medium,easing:li.easings.easeOutSine}}),{gridWidthOffset:T}=(0,li.useSpring)({gridWidthOffset:i&&!t?332:0,config:{duration:di.Kd.medium,easing:li.easings.easeOutSine}});if((0,B.useEffect)((()=>{const e={};C?.marketplaceCount?.forEach((({marketplace:t,count:i})=>{e[t]=i})),u(e)}),[C?.marketplaceCount,u]),(0,B.useEffect)((()=>{m&&i&&!y.xl&&o(!1)}),[m,i,y,o]),(0,B.useEffect)((()=>{g({bagExpanded:!1,manualClose:!1})}),[]),v)return(0,n.jsx)(ii,{});if(!C.name)return(0,n.jsx)(oi,{});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.fM,{page:a.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:e,chain_id:b,is_activity_view:c},shouldLogImpression:!0,children:(0,n.jsx)(ui,{style:{width:k.to((e=>`calc(100% - ${e}px)`))},children:e&&!_._P.includes(e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fi,{children:(0,n.jsx)(bi,{src:C?.bannerImageUrl?`${C.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,n.jsxs)(_i,{children:[C&&(0,n.jsx)(Mt,{stats:C,isMobile:t}),(0,n.jsx)("div",{id:"nft-anchor"}),(0,n.jsx)(I,{showActivity:c,toggleActivity:()=>{i&&o(!1),d(c?`/nfts/collection/${e}`:`/nfts/collection/${e}/activity`)}})]}),(0,n.jsxs)(wi,{children:[(0,n.jsx)(yi,{isMobile:t,isFiltersExpanded:i,children:i&&(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsxs)(ji,{children:[(0,n.jsx)(te.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(Ci,{onClick:()=>o(!1),children:(0,n.jsx)(D.BW,{})})]}),(0,n.jsx)(Gt,{traitsByGroup:C?.traits??hi})]})}),(0,n.jsx)(gi,{hideUnderneath:t&&(i||m),style:{transform:T.to((e=>`translate(${e}px)`)),width:T.to((e=>`calc(100% - ${e}px)`))},children:c?e&&(0,n.jsx)(w.cS,{contractAddress:e,rarityVerified:C?.rarityVerified??!1,collectionName:C?.name??"",chainId:b}):e&&C&&(0,n.jsx)(B.Suspense,{fallback:(0,n.jsx)(dt,{}),children:(0,n.jsx)(ht,{collectionStats:C,contractAddress:e,rarityVerified:C?.rarityVerified})})})]})]}):(0,n.jsx)(oi,{isBlocked:!0})})}),(0,n.jsx)(j,{})]})}}}]);
//# sourceMappingURL=9338.97eefe2f.chunk.js.map