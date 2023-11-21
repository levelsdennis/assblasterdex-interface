"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[5448],{25448:function(e,n,i){i.r(n),i.d(n,{default:function(){return nn}});var a=i(42893),t=i(19903),o=i(66196),l=i(79954),r=i(65364),d=i(12113),s=i(13712),c=i(80657),p=i(87253),h=i(26030),m=i(68830);const x=p.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,u=p.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,g=(0,p.default)(m.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,f=p.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,b=800,C=({children:e,activeIndex:n,toggleNextSlide:i})=>{const t=(0,s.useCallback)(((n,i=e.length)=>(0,d.ef)(n,i)),[e]),o=(0,s.useCallback)(((e,n,i)=>(0,d.E)(e,n,i,t)),[t]),[l,r]=(0,m.useSprings)(e.length,(n=>({x:(n<e.length-1?n:-1)*b}))),c=(0,s.useRef)([0,1]),p=(0,s.useCallback)(((n,i)=>{const a=t(Math.floor(n/b)%e.length),l=i<0?e.length-2:1;r((t=>{const r=o(t,a,l),s=o(t,c.current[0],c.current[1]),p=(0,d.Z1)(a,l,r,e.length,n);return{x:-n%(b*e.length)+b*p,immediate:i<0?s>r:s<r,config:{tension:250,friction:30}}})),c.current=[a,l]}),[t,o,r,e.length]),C=(0,s.useRef)(0);(0,s.useEffect)((()=>{p(n*b,C.current)}),[n,p]);const y=(0,s.useCallback)((e=>{C.current=e,i(e)}),[i]);return(0,s.useEffect)((()=>{const e=setInterval((async()=>{y(1)}),7e3);return()=>{clearInterval(e)}}),[y,n]),(0,a.jsxs)(x,{children:[(0,a.jsx)(f,{onClick:()=>y(-1),children:(0,a.jsx)(h.wy,{width:"16px",height:"16px"})}),(0,a.jsx)(u,{children:l.map((({x:n},i)=>(0,a.jsx)(g,{style:{x:n},children:e[i]},i)))}),(0,a.jsx)(f,{onClick:()=>y(1),children:(0,a.jsx)(h.XC,{width:"16px",height:"16px"})})]})},y=({children:e})=>(0,a.jsx)(C,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var w=i(13119),_=i(80343),v=i(20555),j=i(1004),T=i(85325),k=i(57482);const N=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,$=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,S=p.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${w.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,I=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,H=p.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,z=p.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,F=(0,p.default)(_.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,E=p.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,q=p.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,P=p.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${w.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,B=(0,p.default)(_.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,D=p.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,X=p.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,O=p.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,V=p.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,L=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${D}:nth-child(3n-1), ${B}:nth-child(3n-1) {
    justify-self: center;
  }

  ${D}:nth-child(3n), ${B}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${X} {
      display: none;
    }
    ${D} {
      justify-self: left !important;
    }
    ${I} {
      padding: 0 20px;
    }
  }
`,M=({marketplace:e,floorInEth:n,listings:i})=>{const{formatNumberOrString:t}=(0,k.Gb)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(D,{children:[(0,a.jsx)(V,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,a.jsx)(X,{children:(0,a.jsx)(T.T.BodySmall,{color:"neutral2",children:e})})]}),(0,a.jsx)(D,{children:(0,a.jsx)(T.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${t({input:n,type:k.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,a.jsx)(D,{children:(0,a.jsx)(T.T.BodySmall,{color:"neutral2",children:Number(i)>0?i:"None"})})]})},R=[j.Fz.Opensea,j.Fz.X2Y2,j.Fz.LooksRare],G={[j.Fz.Opensea]:"OpenSea",[j.Fz.X2Y2]:"X2Y2",[j.Fz.LooksRare]:"LooksRare"},A=({collection:e,onClick:n})=>{const{data:i,loading:t}=(0,v.K)(e.address??""),{formatNumber:o}=(0,k.Gb)();return t?(0,a.jsx)(K,{}):(0,a.jsx)(N,{children:(0,a.jsxs)(L,{onClick:n,children:[(0,a.jsx)(Y,{collection:e}),(0,a.jsx)(O,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(D,{children:[(0,a.jsx)(h.pD,{width:"20",height:"20"}),(0,a.jsx)(X,{children:(0,a.jsx)(T.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,a.jsx)(D,{children:e.floor&&(0,a.jsxs)(T.T.SubHeaderSmall,{color:"userThemeColor",children:[o({input:e.floor,type:k.sw.NFTToken})," ETH Floor"]})}),(0,a.jsx)(D,{children:(0,a.jsxs)(T.T.SubHeaderSmall,{color:"userThemeColor",children:[i.marketplaceCount?.reduce(((e,n)=>e+n.count),0)," Listings"]})}),R.map((n=>{const t=i.marketplaceCount?.find((e=>e.marketplace===n));return t?(0,a.jsx)(M,{marketplace:G[n],listings:t.count,floorInEth:t.floorPrice},`CarouselCard-key-${e.address}-${t.marketplace}`):null}))]})})]})})},W=()=>(0,a.jsx)(a.Fragment,{children:[...Array(12)].map((e=>(0,a.jsx)(B,{},e)))}),U=(0,p.default)(T.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,Y=({collection:e})=>(0,a.jsxs)($,{src:e.bannerImageUrl??"",children:[(0,a.jsxs)(I,{children:[(0,a.jsx)(q,{src:e.imageUrl}),(0,a.jsxs)(z,{children:[(0,a.jsx)(U,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,a.jsx)(H,{children:(0,a.jsx)(h.SA,{width:"24px",height:"24px"})})]})]}),(0,a.jsx)(E,{})]}),K=({collection:e})=>(0,a.jsx)(N,{children:(0,a.jsxs)(L,{children:[e?(0,a.jsx)(Y,{collection:e}):(0,a.jsxs)(S,{children:[(0,a.jsxs)(I,{children:[(0,a.jsx)(P,{}),(0,a.jsx)(F,{})]}),(0,a.jsx)(E,{})]}),(0,a.jsx)(O,{children:(0,a.jsx)(W,{})})]})}),Z=p.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-37b670da-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,J=p.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-37b670da-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,Q=p.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-37b670da-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ee=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"];var ne=()=>{const e=(0,c.s0)(),{data:n}=(0,r.S)(5+ee.length,l._u.Day),i=(0,s.useMemo)((()=>n?.filter((e=>e.address&&!ee.includes(e.address))).slice(0,5)),[n]),[t,o]=(0,s.useState)(0),p=(0,s.useCallback)((e=>{i&&o((n=>(0,d.ef)(n+e,i.length)))}),[i]);return(0,a.jsx)(Z,{children:(0,a.jsxs)(J,{children:[(0,a.jsxs)(Q,{children:["Better prices. ",(0,a.jsx)("br",{}),"More listings."]}),i?(0,a.jsx)(C,{activeIndex:t,toggleNextSlide:p,children:i.map((n=>(0,a.jsx)(A,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,a.jsx)(y,{children:(0,a.jsx)(K,{})})]})})},ie=i(62329),ae=i(5658),te=i(39839),oe=i(69867),le=i(86682);i(16091),i(94968);const re=p.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-6ddadcc7-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,de=(0,p.default)(re).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-6ddadcc7-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,se=(0,p.default)(re).withConfig({displayName:"Cells__CollectionName",componentId:"sc-6ddadcc7-2"})`
  margin-left: 8px;
`,ce=(0,p.default)(te.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-6ddadcc7-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(te.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-6ddadcc7-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=p.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-6ddadcc7-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,me=p.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-6ddadcc7-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,xe=p.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-6ddadcc7-7"})`
  display: flex;
  justify-content: flex-end;
`,ue=({value:e})=>{const n=(0,ae.dD)();return(0,a.jsxs)(de,{children:[(0,a.jsx)(he,{src:e.logo}),(0,a.jsx)(se,{children:n?(0,a.jsx)(pe,{children:e.name}):(0,a.jsx)(ce,{children:e.name})}),e.isVerified&&(0,a.jsx)("span",{className:"_1xzbheql3 _1xzbheq453 _1xzbheq2o3 _1xzbheq19r _1xzbheq12r _1xzbheq45x",children:(0,a.jsx)(h.SA,{})})]})},ge=({value:e})=>{const{formatNumberOrString:n}=(0,k.Gb)();return(0,a.jsx)("span",{children:e.value?n({input:e.value,type:k.sw.NFTCollectionStats}):"-"})},fe=(e,n,i,a)=>e===j.VG.ETH?i:a&&i?a*(n?parseFloat((0,oe.formatEther)(i)):i):void 0,be=({value:e,denomination:n,usdPrice:i})=>{const{formatNumberOrString:t}=(0,k.Gb)(),o=fe(n,!1,e,i),l=n===j.VG.ETH,r=t({input:o,type:l?k.sw.NFTToken:k.sw.FiatTokenStats})+(l?" ETH":""),d=(0,ae.dD)()?te.Tv.BodySmall:te.Tv.BodyPrimary;return(0,a.jsx)(xe,{children:(0,a.jsx)(d,{children:e?r:"-"})})},Ce=({value:e})=>(0,a.jsx)(te.Tv.BodyPrimary,{children:e}),ye=({value:e,denomination:n,usdPrice:i})=>{const{formatNumberOrString:t}=(0,k.Gb)(),o=fe(n,!1,e,i),l=n===j.VG.ETH,r=t({input:o,type:l?k.sw.WholeNumber:k.sw.FiatTokenStats})+(l?" ETH":"");return(0,a.jsx)(xe,{children:(0,a.jsx)(te.Tv.BodyPrimary,{children:r})})},we=({change:e,children:n})=>{const i=(0,ae.dD)()?te.Tv.BodySmall:te.Tv.BodyPrimary;return(0,a.jsxs)(me,{change:e??0,children:[(0,a.jsx)(le.Kx,{delta:e}),(0,a.jsx)(i,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var _e=i(80815),ve=i(83246),je=i(37636),Te=i(82118),ke=i(83029),Ne=i(57873),$e="_1014yxnh _1xzbheqd3 _1xzbheqbf _1xzbheqe9 _1xzbheq2of _1xzbheq27x _1xzbheq1jl _1xzbheq463 _1xzbheq48x",Se="_1014yxna _1xzbheq4qf _1xzbheq16r _1xzbheq80x _1xzbheq7zl",Ie="_1014yxnd _1xzbheqd3 _1xzbheqb9 _1xzbheqe3 _1xzbheq4bf _1xzbheq2or _1xzbheq289",He="_1xzbheqr9 _1xzbheq55f _1xzbheq895 _1xzbheq805";const ze=p.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-31220bfb-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Fe=p.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-31220bfb-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ee=p.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-31220bfb-2"})`
  height: 80px;
`,qe=p.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-31220bfb-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Pe=p.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-31220bfb-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Be=p.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-31220bfb-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,De=(0,p.default)(_.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-31220bfb-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Xe=(0,p.default)(_.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-31220bfb-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Oe=10;function Ve({columns:e,data:n,smallHiddenColumns:i,mediumHiddenColumns:l,largeHiddenColumns:r,...d}){const h=(0,p.useTheme)(),{chainId:m}=(0,_e.useWeb3React)(),{width:x}=(0,Te.i)(),u=(0,ae.dD)(),{getTableProps:g,getTableBodyProps:f,headerGroups:b,rows:C,prepareRow:y,setHiddenColumns:w,visibleColumns:_}=(0,ke.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Me.Volume}]},...d},ke.useSortBy),v=(0,c.s0)();return(0,s.useEffect)((()=>{x&&(x<=h.breakpoint.sm?w(i):x<=h.breakpoint.md?w(l):x<=h.breakpoint.lg?w(r):w([]))}),[x,w,e,i,l,r,h.breakpoint]),0===n.length?(0,a.jsx)(Le,{headerGroups:b,visibleColumns:_,...g()}):(0,a.jsxs)("table",{...g(),className:Se,children:[(0,a.jsx)("thead",{className:He,children:b.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,s.createElement)(qe,{className:Ie,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?u?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,a.jsx)(Ne.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(je.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,a.jsx)(ve.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,a.jsx)(Ne.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...f(),children:C.map(((e,n)=>(y(e),(0,a.jsx)(o.M8,{events:[t.TM.onClick],name:t.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:m},element:t.xo.NFT_TRENDING_ROW,children:(0,s.createElement)(Fe,{...e.getRowProps(),key:e.id,onClick:()=>v(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,i)=>(0,s.createElement)("td",{className:"_1014yxnf _1xzbheqd3 _1xzbheqbf _1xzbheqe9 _1xzbheq2o3 _1xzbheq27l _1xzbheq1jl _1xzbheq463 _1xzbheq48x",...e.getCellProps(),key:i,style:{maxWidth:0===i?u?"240px":"360px":"160px"}},0===i?(0,a.jsxs)(ze,{children:[!u&&(0,a.jsx)(te.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Le({headerGroups:e,visibleColumns:n,...i}){return(0,a.jsxs)("table",{...i,className:Se,children:[(0,a.jsx)("thead",{className:He,children:e.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,s.createElement)(qe,{className:Ie,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,a.jsx)(Ne.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(je.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,a.jsx)(ve.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,a.jsx)(Ne.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...i,children:[...Array(Oe)].map(((e,i)=>(0,a.jsx)(Ee,{children:[...Array(n.length)].map(((e,n)=>(0,a.jsx)("td",{className:$e,children:0===n?(0,a.jsxs)(Be,{children:[(0,a.jsx)(Xe,{}),(0,a.jsx)(De,{}),(0,a.jsx)(_.X,{})]}):(0,a.jsx)(Pe,{children:(0,a.jsx)(_.X,{})})},n)))},i)))})]})}var Me;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Me||(Me={}));const Re=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1;var Ge=({data:e,timePeriod:n})=>{const i=(0,s.useMemo)((()=>(e,n)=>Re(e.original.floor.value,n.original.floor.value)),[]),t=(0,s.useMemo)((()=>(e,n)=>Re(e.original.floor.change,n.original.floor.change)),[]),o=(0,s.useMemo)((()=>(e,n)=>Re(e.original.volume.value,n.original.volume.value)),[]),l=(0,s.useMemo)((()=>(e,n)=>Re(e.original.volume.change,n.original.volume.change)),[]),r=(0,s.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:ue,disableSortBy:!0},{id:Me.Floor,Header:Me.Floor,accessor:({floor:e})=>e.value,sortType:i,Cell:function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(be,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==j.XH.AllTime&&(0,a.jsx)(te.SF,{children:(0,a.jsx)(we,{change:e.row.original.floor.change})})]})}},{id:Me.FloorChange,Header:Me.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===j.XH.AllTime,sortType:t,Cell:function(e){return n===j.XH.AllTime?(0,a.jsx)(Ce,{value:"-"}):(0,a.jsx)(we,{change:e.row.original.floor.change})}},{id:Me.Volume,Header:Me.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,a.jsx)(ye,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Me.VolumeChange,Header:Me.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===j.XH.AllTime,sortType:l,Cell:function(e){const{change:i}=e.row.original.volume;return n===j.XH.AllTime?(0,a.jsx)(Ce,{value:"-"}):i&&i>=9999?(0,a.jsxs)(we,{change:i,children:[">9999","%"]}):(0,a.jsx)(we,{change:i})}},{id:Me.Items,Header:Me.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(ge,{value:{value:e.row.original.totalSupply}})}},{Header:Me.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(ge,{value:e.row.original.owners})}}]),[t,i,l,o,n]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Ve,{smallHiddenColumns:[Me.Items,Me.FloorChange,Me.Volume,Me.VolumeChange,Me.Owners],mediumHiddenColumns:[Me.Items,Me.FloorChange,Me.VolumeChange,Me.Owners],largeHiddenColumns:[Me.Items,Me.Owners],data:e,columns:r})})};const Ae=[{label:"1D",value:j.XH.OneDay},{label:"1W",value:j.XH.SevenDays},{label:"1M",value:j.XH.ThirtyDays},{label:"All",value:j.XH.AllTime}],We=p.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-c0c70b1b-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ue=p.default.div.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-c0c70b1b-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,Ye=p.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-c0c70b1b-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Ke=p.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-c0c70b1b-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Ze=p.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-c0c70b1b-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${ie.c}
`,Je=(0,p.default)(te.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-c0c70b1b-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;var Qe=()=>{const{formatterLocalCurrency:e}=(0,k.h2)(),[n,i]=(0,s.useState)(j.XH.OneDay),[t,o]=(0,s.useState)(!0),{data:d,loading:c}=(0,r.S)(100,function(e){switch(e){case j.XH.OneDay:return l._u.Day;case j.XH.SevenDays:return l._u.Week;case j.XH.ThirtyDays:return l._u.Month;case j.XH.AllTime:return l._u.Max;default:return l._u.Day}}(n)),p=(0,ae.$N)(),h=(0,s.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:t?j.VG.ETH:j.VG.USD,usdPrice:p}))):[]),[d,c,t,p]);return(0,a.jsxs)(We,{children:[(0,a.jsx)(Ue,{children:"Trending NFT collections"}),(0,a.jsxs)(Ye,{children:[(0,a.jsx)(Ke,{children:Ae.map((e=>(0,a.jsx)(Ze,{active:e.value===n,onClick:()=>i(e.value),children:(0,a.jsx)(Je,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,a.jsxs)(Ke,{onClick:()=>o(!t),children:[(0,a.jsx)(Ze,{active:t,children:(0,a.jsx)(Je,{lineHeight:"20px",active:t,children:"ETH"})}),(0,a.jsx)(Ze,{active:!t,children:(0,a.jsx)(Je,{lineHeight:"20px",active:!t,children:e})})]})]}),(0,a.jsx)(Ge,{data:h,timePeriod:n})]})};const en=p.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`;var nn=()=>{const e=(0,ae.cP)((e=>e.setBagExpanded));return(0,s.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.fM,{page:t.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(en,{children:[(0,a.jsx)(ne,{}),(0,a.jsx)(Qe,{})]})})})}}}]);
//# sourceMappingURL=5448.6244c8f0.chunk.js.map