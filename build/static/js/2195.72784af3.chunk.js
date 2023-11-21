"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[2195],{62016:function(e,t,n){n.d(t,{R_:function(){return r},gS:function(){return a},xr:function(){return s},oj:function(){return i},Co:function(){return o},Yb:function(){return l},fb:function(){return c},hX:function(){return d},rG:function(){return x},FC:function(){return h},rZ:function(){return u}});n(16091),n(94968);var r="_1w52d0ae _1xzbheqd9 _1xzbheqbf _1xzbheqe3 _1xzbheq4b9 _1xzbheq1dr _1xzbheq47l _1xzbheq2cx",a="_1w52d0ah _1w52d0ag _1xzbheqd9 _1xzbheqbf _1xzbheqe3 _1xzbheq2e3 _1xzbheq2jl _1xzbheq2or _1xzbheq289 _1xzbheq173 _1xzbheq4ux _1xzbheq88d _1xzbheq80x _1xzbheq8e1",s="_1xzbheq14f _1xzbheq1bf _1xzbheq80p",i="_1xzbheqd3 _1xzbheqbf _1xzbheqe9 _1xzbheqfr _1xzbheq8bh _1xzbheq45l _1xzbheq45r",o="_1w52d0aa _1xzbheqd3 _1xzbheqbf _1xzbheqe9 _1xzbheq3t3",l="_1w52d0a3 _1w52d0a1 _1xzbheq459 _1xzbheq2d3 _1xzbheq2e4 _1xzbheq2il _1xzbheq2jm _1xzbheq2or _1xzbheq289 _1xzbheq4b9 _1xzbheq7zd _1xzbheq895 _1xzbheq7zp _1xzbheq59f _1xzbheq5yr",c="_1w52d0ac _1xzbheqd3 _1xzbheqb9 _1xzbheqe3 _1xzbheq4bf",d="_1w52d0al _1xzbheqd3 _1xzbheqb9 _1xzbheqdr _1xzbheq2e3 _1xzbheq2jl _1xzbheq2or _1xzbheq289 _1xzbheq4qr _1xzbheq4b9 _1xzbheq80x _1xzbheq7zd",x="_1w52d0a5 _1w52d0a1 _1xzbheq459 _1xzbheq2e3 _1xzbheq2jl _1xzbheq27x _1xzbheq4bf _1xzbheqb3 _1xzbheqd9",h="_1w52d0an _1xzbheq2d3 _1xzbheq2il _1xzbheq44r _1xzbheq80l _1xzbheq18x _1xzbheq16x _1xzbheq4b9 _1xzbheq4qr _1xzbheqax _1xzbheqd9 _1xzbheq7zd",u="_1w52d0aj _1w52d0ag _1xzbheqd9 _1xzbheqbf _1xzbheqe3 _1xzbheq2e3 _1xzbheq2jl _1xzbheq2or _1xzbheq289 _1xzbheq173 _1xzbheq4ux _1xzbheq88d _1xzbheq80x _1xzbheq8e1 _1xzbheq4d3 _1xzbheq7zd"},35253:function(e,t,n){n.d(t,{m:function(){return o}});var r=n(1152),a=n(12113),s=n(13712),i=n(79954);function o(e,t,n){const{data:r,loading:o,fetchMore:l,error:c}=(0,i.YV)({variables:{filter:e,first:t},fetchPolicy:n}),d=r?.nftActivity?.pageInfo?.hasNextPage,x=(0,s.useCallback)((()=>l({variables:{after:r?.nftActivity?.pageInfo?.endCursor}})),[r,l]),h=(0,s.useMemo)((()=>r?.nftActivity?.edges?.map((e=>{const t=e?.node,n=t?.asset;return{collectionAddress:t.address,tokenId:t.tokenId,tokenMetadata:{name:n?.name,imageUrl:n?.image?.url,smallImageUrl:n?.smallImage?.url,metadataUrl:n?.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:n?.rarities?.map((e=>({...e,provider:"Rarity Sniper"})))},suspiciousFlag:n?.suspiciousFlag,standard:n?.nftContract?.standard},eventType:t.type,marketplace:t.marketplace,fromAddress:t.fromAddress,toAddress:t.toAddress,transactionHash:t.transactionHash,orderStatus:t.orderStatus,price:(0,a.K3)(t.price?.value??0),symbol:n?.collection?.image?.url,quantity:t.quantity,url:t.url,eventTimestamp:1e3*t.timestamp}}))),[r]);return(0,s.useMemo)((()=>({nftActivity:h,hasNext:d,loadMore:x,loading:o,error:c})),[d,x,o,h,c])}r.ZP`
  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {
    nftActivity(filter: $filter, after: $after, first: $first) {
      edges {
        node {
          id
          address
          tokenId
          asset {
            id
            metadataUrl
            image {
              id
              url
            }
            smallImage {
              id
              url
            }
            name
            rarities {
              id
              provider
              rank
              score
            }
            suspiciousFlag
            nftContract {
              id
              standard
            }
            collection {
              id
              image {
                id
                url
              }
            }
          }
          type
          marketplace
          fromAddress
          toAddress
          transactionHash
          price {
            id
            value
          }
          orderStatus
          quantity
          url
          timestamp
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`},42195:function(e,t,n){n.d(t,{cS:function(){return T},VJ:function(){return q},YQ:function(){return k}});var r=n(42893),a=n(62329),s=n(35253),i=n(57873),o=n(2994),l=n(5658),c=n(1004),d=n(13712),x=n(46642),h=n(41440),u=n(87253),b=n(62016),m=n(61984);n(16091),n(37501);const p=()=>(0,r.jsx)(i.n,{className:"ekla1n1 _1xzbheq14f _1xzbheq1bf _1xzbheq80p"}),f=()=>(0,r.jsx)(i.n,{className:"_1f0hyq03 ekla1n1 _1xzbheq18x _1xzbheq81x"}),g=()=>(0,r.jsxs)(i.n,{as:"a",className:b.Yb,children:[(0,r.jsxs)(o.X2,{gap:"16",children:[(0,r.jsx)(p,{}),(0,r.jsx)(f,{})]}),(0,r.jsx)(o.X2,{children:(0,r.jsx)(f,{})}),(0,r.jsx)(o.X2,{display:{sm:"none",md:"flex"},children:(0,r.jsx)(f,{})}),(0,r.jsx)(o.X2,{display:{sm:"none",lg:"flex"},children:(0,r.jsx)(f,{})}),(0,r.jsx)(o.X2,{display:{sm:"none",xl:"flex"},children:(0,r.jsx)(f,{})})]}),_=({rowCount:e})=>(0,r.jsx)(r.Fragment,{children:[...Array(e)].map(((e,t)=>(0,r.jsx)(g,{},t)))}),z=()=>(0,r.jsxs)(o.sg,{marginTop:"36",children:[(0,r.jsx)(q,{}),(0,r.jsx)(_,{rowCount:10})]});var y;!function(e){e.Item="Item",e.Event="Event",e.Price="Price",e.By="By",e.To="To"}(y||(y={}));const j=u.default.div.withConfig({displayName:"Activity__FilterBox",componentId:"sc-1d0f5cfb-0"})`
  display: flex;
  color: ${({isActive:e,theme:t})=>t.neutral1};
  background: ${({isActive:e,theme:t})=>e?t.surface3:t.surface1};
  border: ${({isActive:e,theme:t})=>`1px solid ${t.surface3}`};
  ${a.c};
`,q=()=>(0,r.jsxs)(i.n,{className:b.rG,children:[(0,r.jsx)(i.n,{children:y.Item}),(0,r.jsx)(i.n,{children:y.Event}),(0,r.jsx)(i.n,{display:{sm:"none",md:"block"},children:y.Price}),(0,r.jsx)(i.n,{display:{sm:"none",xl:"block"},children:y.By}),(0,r.jsx)(i.n,{display:{sm:"none",xxl:"block"},children:y.To})]}),v={[c.n$.Listing]:!0,[c.n$.Sale]:!0,[c.n$.Transfer]:!1,[c.n$.CancelListing]:!1},k=(e,t)=>({...e,[t.eventType]:!e[t.eventType]}),T=({contractAddress:e,rarityVerified:t,collectionName:n,chainId:a})=>{const[u,p]=(0,d.useReducer)(k,v),{nftActivity:f,hasNext:g,loadMore:y,loading:T}=(0,s.m)({activityTypes:Object.keys(u).map((e=>e)).filter((e=>u[e])),address:e},25),w=g&&f?.length,C=(0,l.cP)((e=>e.itemsInBag)),I=(0,l.cP)((e=>e.addAssetsToBag)),A=(0,l.cP)((e=>e.removeAssetsFromBag)),N=(0,l.cP)((e=>e.bagExpanded)),M=(0,l.cP)((e=>e.toggleBag)),$=(0,l.dD)(),S=(0,l.$N)(),F=(0,d.useCallback)((function({eventType:e}){const t=u[e];return(0,r.jsx)(j,{className:b.hX,isActive:t,onClick:()=>p({eventType:e}),children:e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[u]);return(0,r.jsxs)(i.n,{marginLeft:{sm:"16",md:"48"},children:[(0,r.jsxs)(o.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,r.jsx)(F,{eventType:c.n$.Listing}),(0,r.jsx)(F,{eventType:c.n$.Sale}),(0,r.jsx)(F,{eventType:c.n$.Transfer})]}),T?(0,r.jsx)(z,{}):f&&(0,r.jsxs)(o.sg,{marginTop:"36",children:[(0,r.jsx)(q,{}),(0,r.jsx)(x.Z,{next:y,hasMore:!!g,loader:w?(0,r.jsx)(_,{rowCount:2}):null,dataLength:f?.length??0,style:{overflow:"unset"},children:f.map(((e,s)=>e.eventType&&(0,r.jsxs)(i.n,{as:h.rU,"data-testid":"nft-activity-row",to:`/nfts/asset/${e.collectionAddress}/${e.tokenId}?origin=activity`,className:b.Yb,children:[(0,r.jsx)(m.Et,{event:e,rarityVerified:t,collectionName:n,eventTimestamp:e.eventTimestamp,isMobile:$}),(0,r.jsx)(m.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:$}),(0,r.jsx)(m.Ic,{marketplace:e.marketplace,price:e.price}),(0,r.jsx)(m.UM,{address:e.fromAddress,chainId:a}),(0,r.jsx)(m.UM,{address:e.toAddress,chainId:a,desktopLBreakpoint:!0}),(0,r.jsx)(m.Dg,{event:e,collectionName:n,selectAsset:I,removeAsset:A,itemsInBag:C,cartExpanded:N,toggleCart:M,isMobile:$,ethPriceInUSD:S})]},s)))})]})]})}},61984:function(e,t,n){n.d(t,{UM:function(){return w},Dg:function(){return T},VM:function(){return $},Et:function(){return P},Ic:function(){return I}});var r=n(42893),a=n(12204),s=n(19903),i=n(15387),o=n(66196),l=n(10362),c=n(79954),d=n(57873),x=n(2994),h=n(26030),u=n(1004),b=n(12113),m=n(9961);var p=n(3406),f=n(13712),g=n(87253),_=n(39839),z=n(83777),y=n(57482),j=n(34120),q=n(62016);const v=(0,g.default)(_.dL).withConfig({displayName:"ActivityCells__AddressLink",componentId:"sc-e903fab3-0"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  font-weight: 485;
  line-height: 20px;
  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  a:hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  a:focus {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.click};
  }
`,k=(e,t,n)=>{if(t)return n?(0,r.jsx)(a.cC,{id:"t/YqKh"}):(0,r.jsx)(a.cC,{id:"2RtVHm"});switch(e){case c.iF.Executed:return(0,r.jsx)(a.cC,{id:"s9KGXU"});case c.iF.Cancelled:return(0,r.jsx)(a.cC,{id:"vv7kpg"});case c.iF.Expired:return(0,r.jsx)(a.cC,{id:"M1RnFv"});case c.iF.Valid:return(0,r.jsx)(a.cC,{id:"jqzUyM"});default:return null}},T=({event:e,collectionName:t,selectAsset:n,removeAsset:a,itemsInBag:i,cartExpanded:l,toggleCart:h,isMobile:u,ethPriceInUSD:b})=>{const p=(0,f.useMemo)((()=>((e,t,n)=>{const r=e.price?parseFloat(e.price)*n:"0",a=e.price?(0,m.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:t,imageUrl:e.tokenMetadata?.imageUrl,marketplace:e.marketplace,name:e.tokenMetadata?.name,tokenId:e.tokenId,susFlag:e.tokenMetadata?.suspiciousFlag,smallImageUrl:e.tokenMetadata?.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:r,ETHPrice:a,basePrice:a,baseAsset:"ETH"},tokenType:e.tokenMetadata?.standard}})(e,t,b)),[e,t,b]),g=(0,f.useMemo)((()=>i.some((e=>p.tokenId===e.asset.tokenId&&p.address===e.asset.address))),[p,i]),_=((e,t)=>{if(!t||!e)return!1;const n=Object.keys(c.Wf).map((e=>e.toLowerCase())),r=e===c.iF.Valid,a=n.includes(t.toLowerCase());return r&&a})(e.orderStatus,e.marketplace),z=(0,o.oO)({page:s.yJ.NFT_COLLECTION_PAGE}),y={collection_address:p.address,token_id:p.tokenId,token_type:p.tokenType,...z};return(0,r.jsx)(x.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:e.eventType===c.y3.Listing&&e.orderStatus?(0,r.jsx)(d.n,{as:"button",className:_&&g?q.rZ:q.gS,onClick:e=>{e.preventDefault(),g?a([p]):n([p]),!g&&!l&&!u&&h(),!g&&(0,o._P)(s.Yz.NFT_BUY_ADDED,{eventProperties:y})},disabled:!_,children:k(e.orderStatus,_,g)}):"-"})},w=({address:e,desktopLBreakpoint:t,chainId:n})=>(0,r.jsx)(x.sg,{display:{sm:"none",xl:t?"none":"flex",xxl:"flex"},className:q.R_,children:(0,r.jsx)(v,{href:(0,j.E)(n??i.ChainId.MAINNET,e??"",j.r.ADDRESS),style:{textDecoration:"none"},children:(0,r.jsx)(d.n,{onClick:e=>e.stopPropagation(),children:e?(0,z.Xn)(e,2):"-"})})}),C=({price:e})=>(0,r.jsx)(l.ud,{text:(0,r.jsx)(d.n,{textAlign:"left",fontSize:"14",fontWeight:"book",color:"neutral2",children:`${e} ETH`}),placement:"top",children:(0,r.jsx)(d.n,{children:`${e.substring(0,5)}... ETH`})}),I=({marketplace:e,price:t})=>{const{formatNumberOrString:n}=(0,y.Gb)(),a=(0,f.useMemo)((()=>t?n({input:parseFloat(t?.toString()),type:y.sw.NFTToken}):null),[n,t]);return(0,r.jsxs)(x.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[e&&(0,b.Dp)(e,"16"),a?a.length>6?(0,r.jsx)(C,{price:a}):(0,r.jsx)(r.Fragment,{children:`${a} ETH`}):(0,r.jsx)(r.Fragment,{children:"-"})]})},A=e=>{switch(e){case c.y3.Listing:return(0,r.jsx)(h.TV,{width:16,height:16});case c.y3.Sale:return(0,r.jsx)(h.QF,{width:16,height:16});case c.y3.Transfer:return(0,r.jsx)(h.dj,{width:16,height:16});case c.y3.CancelListing:return(0,r.jsx)(h.Io,{width:16,height:16});default:return null}},N=({transactionHash:e})=>(0,r.jsx)(x.X2,{onClick:t=>((e,t)=>{e.preventDefault(),window.open(`https://etherscan.io/tx/${t}`,"_blank","noopener,noreferrer")})(t,e),marginLeft:"4",children:(0,r.jsx)(h.Bu,{})}),M=e=>({[c.y3.Listing]:"deprecated_gold",[c.y3.Sale]:"success",[c.y3.Transfer]:"deprecated_violet",[c.y3.CancelListing]:"critical"}[e]),$=({eventType:e,eventTimestamp:t,eventTransactionHash:n,eventOnly:a,price:s,isMobile:i})=>{const{formatNumberOrString:o}=(0,y.Gb)(),l=(0,f.useMemo)((()=>s?o({input:parseFloat(s?.toString()),type:y.sw.NFTToken}):null),[o,s]);return(0,r.jsxs)(x.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,r.jsxs)(x.X2,{className:q.Co,color:M(e),children:[A(e),u.ze[e]]}),t&&!i&&!a&&(0,r.jsxs)(x.X2,{className:q.fb,children:[(0,p.F)(t.toString()),n&&(0,r.jsx)(N,{transactionHash:n})]}),i&&s&&(0,r.jsx)(x.X2,{fontSize:"16",fontWeight:"book",color:"neutral1",children:`${l} ETH`})]})},S=()=>(0,r.jsx)(d.n,{position:"relative",style:{background:"#24272e"},className:q.xr,children:(0,r.jsxs)(d.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,r.jsx)("br",{}),"not",(0,r.jsx)("br",{}),"available"]})}),F=({rarity:e,collectionName:t,rarityVerified:n})=>{const{formatNumber:a}=(0,y.Gb)(),s=e.rank||e.providers?.[0].rank;return s?(0,r.jsx)(d.n,{children:(0,r.jsx)(l.ud,{text:(0,r.jsxs)(x.X2,{children:[(0,r.jsx)(d.n,{display:"flex",marginRight:"4",children:(0,r.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,r.jsx)(d.n,{width:"full",fontSize:"14",children:n?`Verified by ${t}`:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,r.jsxs)(d.n,{className:q.FC,children:[(0,r.jsx)(d.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:a({input:s,type:y.sw.WholeNumber})}),(0,r.jsx)(d.n,{display:"flex",height:"16",children:n?(0,r.jsx)(h.w,{}):null})]})})}):null},E=e=>e?.smallImageUrl||e?.imageUrl,P=({event:e,rarityVerified:t,collectionName:n,eventTimestamp:a,isMobile:s})=>{const[i,o]=(0,f.useState)(!1),[l,c]=(0,f.useState)(!E(e.tokenMetadata));return(0,r.jsxs)(x.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[l?(0,r.jsx)(S,{}):(0,r.jsx)(d.n,{as:"img",alt:e.tokenMetadata?.name||e.tokenId,src:E(e.tokenMetadata),draggable:!1,className:q.xr,style:{background:i?"none":"#24272e"},onLoad:()=>o(!0),onError:()=>c(!0)}),(0,r.jsxs)(x.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,r.jsx)(d.n,{className:q.oj,children:e.tokenMetadata?.name||e.tokenId}),e.tokenMetadata?.rarity&&!s&&(0,r.jsx)(F,{rarity:e.tokenMetadata?.rarity,rarityVerified:t,collectionName:n}),s&&a&&(0,p.F)(a.toString())]})]})}},3406:function(e,t,n){n.d(t,{F:function(){return r}});const r=e=>{const t=parseFloat(e),n=(new Date).getTime()-t,r=Math.floor(n/864e5),a=Math.floor(n%864e5/36e5),s=Math.floor(n%36e5/6e4);return r>0?`${r} day${r>1?"s":""} ago`:a>0?`${a} hour${a>1?"s":""} ago`:s>1?`${s} minutes ago`:"Just now"}}}]);
//# sourceMappingURL=2195.72784af3.chunk.js.map