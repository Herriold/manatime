"use strict";(self.webpackChunkManatime=self.webpackChunkManatime||[]).push([[498],{8043:function(e,r,n){n(72791);r.Z=n.p+"static/media/Add.13fb4d00e225633b8efaf5462589e9dc.svg"},5977:function(e,r,n){n.d(r,{Z:function(){return c}});var i=n(1413),t=n(45987),o=n(87087),a=n(64554),l=n(80184),d=["ratio","disabledEffect","effect","sx"];function c(e){var r=e.ratio,n=e.disabledEffect,c=void 0!==n&&n,u=e.effect,h=void 0===u?"blur":u,x=e.sx,f=(0,t.Z)(e,d);return r?(0,l.jsx)(a.Z,{component:"span",sx:(0,i.Z)({width:1,lineHeight:0,display:"block",overflow:"hidden",position:"relative",pt:s(r),"& .wrapper":{top:0,left:0,right:0,bottom:0,lineHeight:0,position:"absolute",backgroundSize:"cover !important"}},x),children:(0,l.jsx)(a.Z,(0,i.Z)({component:o.LazyLoadImage,wrapperClassName:"wrapper",effect:c?void 0:h,placeholderSrc:"",sx:{width:1,height:1,objectFit:"cover"}},f))}):(0,l.jsx)(a.Z,{component:"span",sx:(0,i.Z)({lineHeight:0,display:"block",overflow:"hidden","& .wrapper":{width:1,height:1,backgroundSize:"cover !important"}},x),children:(0,l.jsx)(a.Z,(0,i.Z)({component:o.LazyLoadImage,wrapperClassName:"wrapper",effect:c?void 0:h,placeholderSrc:"",sx:{width:1,height:1,objectFit:"cover"}},f))})}function s(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}},25212:function(e,r,n){var i=n(1413),t=n(45987),o=n(64554),a=n(72791),l=n(6907),d=n(80184),c=["children","title","meta"],s=(0,a.forwardRef)((function(e,r){var n=e.children,a=e.title,s=void 0===a?"":a,u=e.meta,h=(0,t.Z)(e,c);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.ql,{children:[(0,d.jsx)("title",{children:"".concat(s," | Manatime 1.0")}),u]}),(0,d.jsx)(o.Z,(0,i.Z)((0,i.Z)({ref:r},h),{},{children:n}))]})}));r.Z=s},37835:function(e,r,n){var i=n(1413),t=n(64554),o=(n(72791),n(80184));r.Z=function(e){var r=e.src,n=e.sx,a=e.component,l=void 0===a?"span":a;return(0,o.jsx)(t.Z,{component:l,sx:(0,i.Z)({WebkitMask:"url(".concat(r,") no-repeat center / contain"),bgcolor:"currentColor",display:"inline-block",height:24,mask:"url(".concat(r,") no-repeat center / contain"),width:24},n)})}},20498:function(e,r,n){n.r(r),n.d(r,{default:function(){return de}});var i=n(29439),t=n(89164),o=n(36151),a=n(72791),l=n(25212),d=n(37835),c=n(50225),s=n(13400),u=n(29818),h=n(53026),x=n(74165),f=n(93433),p=n(15861),Z=n(57621),m=n(36314),b=n(20890),j=n(61889),v=n(64554),g=n(54261),S=n(1413),C=n(61134),k=n(80184);function w(e){var r=e.children,n=e.onSubmit,i=e.methods;return(0,k.jsx)(C.RV,(0,S.Z)((0,S.Z)({},i),{},{children:(0,k.jsx)("form",{onSubmit:n,children:r})}))}var y=n(44695),F=n(62797),q=n(96463),I=n(45987),M=n(9698),P=["name"];function R(e){var r=e.name,n=(0,I.Z)(e,P),i=(0,C.Gc)().control;return(0,k.jsx)(C.Qr,{name:r,control:i,render:function(e){var r=e.field,i=e.fieldState.error;return(0,k.jsx)(M.Z,(0,S.Z)((0,S.Z)({},r),{},{fullWidth:!0,error:!!i,helperText:null===i||void 0===i?void 0:i.message,InputProps:{sx:{borderRadius:"4px",border:"1px solid initial",boxShadow:"0px 19px 43px rgba(0, 0, 0, 0.05)","&.MuiOutlinedInput-root":{"& fieldset":{borderColor:"initial"},"&:hover fieldset":{borderColor:"#0569C2"},"&.Mui-focused fieldset":{borderColor:"#0569C2"}}}}},n))}})}var W=n(62065),z=["name","children","onChange"];function D(e){var r=e.name,n=e.children,i=(e.onChange,(0,I.Z)(e,z)),t=(0,C.Gc)().control;return(0,k.jsx)(C.Qr,{name:r,control:t,render:function(e){var r=e.field,t=e.fieldState.error;return(0,k.jsx)(M.Z,(0,S.Z)((0,S.Z)((0,S.Z)({},r),{},{select:!0,fullWidth:!0,SelectProps:{native:!0},error:!!t,helperText:null===t||void 0===t?void 0:t.message},i),{},{InputProps:{sx:{borderRadius:"5px","&.Mui-focused":{color:"black"},"&.MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"black"}}}},children:n}))}})}var E=n(76501),L=n(20826),_=function(){return(0,a.useContext)(L.Y)},A=function(e){var r=e.onClose,n=(0,W.Ds)().enqueueSnackbar,i=_(),t=i.soldState.sold,a=i.soldDispatch,l=F.Ry().shape({user:F.Z_().required("Champ requis"),category:F.Z_().required("Champ requis"),period:F.Z_().required("Champ requis"),curSold:F.Z_().required("Champ requis"),takenSold:F.Z_().required("Champ requis"),futurSold:F.Z_().required("Champ requis")}),d=(0,C.cI)({resolver:(0,y.X)(l),defaultValues:{user:"",category:"",period:"",curSold:"",takenSold:"",futurSold:""}}),c=d.handleSubmit,s=d.reset,u=d.formState.isSubmitting,h=function(){var e=(0,p.Z)((0,x.Z)().mark((function e(i){var o,l,d,c,u,h,p,Z;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=i.user,l=i.category,d=i.period,c=i.curSold,u=i.takenSold,h=i.futurSold,p={id:(0,g.Z)(),userId:o,category:l,period:d,curSold:c,takenSold:u,futurSold:h},Z=[].concat((0,f.Z)(t),[p]),a({payload:Z,type:"setSold"}),n("Nouveau SOLDE a \xe9t\xe9 ajout\xe9 !"),r(),s();case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,k.jsx)(w,{methods:d,onSubmit:c(h),children:(0,k.jsx)(Z.Z,{sx:{p:5,maxWidth:600},children:(0,k.jsxs)(m.Z,{spacing:3,alignItems:"center",children:[(0,k.jsx)(b.Z,{fontSize:32,children:"Nouveau SOLDE"}),(0,k.jsxs)(j.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(j.ZP,{item:!0,xs:4,children:(0,k.jsx)(v.Z,{sx:{mb:1,width:"100%"},children:(0,k.jsxs)(D,{name:"user",label:"Utilisateur",children:[(0,k.jsx)("option",{value:""}),E.hM.map((function(e){return(0,k.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})}),(0,k.jsx)(j.ZP,{item:!0,xs:4,children:(0,k.jsx)(R,{name:"category",label:"Categorie*"})}),(0,k.jsx)(j.ZP,{item:!0,xs:4,children:(0,k.jsx)(R,{name:"period",label:"P\xe9riode*"})}),(0,k.jsx)(j.ZP,{item:!0,xs:4,children:(0,k.jsx)(R,{name:"curSold",label:"Solde actuel*"})}),(0,k.jsx)(j.ZP,{item:!0,xs:4,children:(0,k.jsx)(R,{name:"takenSold",label:"Solde pris*"})}),(0,k.jsx)(j.ZP,{item:!0,xs:4,children:(0,k.jsx)(R,{name:"futurSold",label:"Solde futur*"})})]}),(0,k.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",gap:5,pt:3},children:[(0,k.jsx)(o.Z,{onClick:r,variant:"outlined",sx:{width:120,py:1,borderRadius:.5,borderColor:"#BFCCD4",color:"#094694","&:hover":{borderColor:"#094694"}},children:"Annuler"}),(0,k.jsx)(q.Z,{type:"submit",variant:"contained",size:"large",loading:u,sx:{width:150,py:1,borderRadius:.5,backgroundColor:"#0090F5","&:hover":{backgroundColor:"#094694"}},children:"Enregistrer"})]})]})})})},N=(0,c.Z)(s.Z)({position:"absolute",top:5,right:5}),O=function(e){var r=e.onClose,n=e.open;return(0,k.jsxs)(u.Z,{fullWidth:!0,open:n,position:"relative",maxWidth:"sm",children:[(0,k.jsx)(N,{onClick:r,children:(0,k.jsx)(h.Z,{icon:"ep:close-bold",size:"xl"})}),(0,k.jsx)(A,{onClose:r})]})},H=n(4942),T=n(68745),B=n(90618),G=n(35855),Q=n(39281),U=n(79836),V=n(53382),Y=n(26098),X=n.n(Y);function J(e){return X()(e).format("0.00a").replace(".00","")}var K=n(56890);function $(e){var r=e.headLabel;return(0,k.jsx)(K.Z,{children:(0,k.jsx)(G.Z,{children:r.map((function(e){var r;return(0,k.jsx)(T.Z,{align:e.alignRight?"right":"left",children:null===(r=e.label)||void 0===r?void 0:r.toUpperCase()},e.id)}))})})}var ee=n(5977);var re=n.p+"static/media/Ajuster.3f50b51a73b75d8be15cdde907832a4c.svg";var ne=n.p+"static/media/Transferer.c0cf0b9bed996349e77bf81bfb20096b.svg";var ie=n.p+"static/media/Solder.091f832a603c044d58362bfa9c9efb8c.svg",te=(0,c.Z)(T.Z)((function(e){var r;e.theme;return r={},(0,H.Z)(r,"&.".concat(B.Z.head),{backgroundColor:"#000"}),(0,H.Z)(r,"&.".concat(B.Z.body),{fontSize:16}),r})),oe=(0,c.Z)(G.Z)((function(e){e.theme;return{"&:nth-of-type(odd)":{backgroundColor:"#F2F2F2"},"&:last-child td, &:last-child th":{border:0}}}));function ae(){var e=_(),r=e.soldState.sold,n=e.soldDispatch;return(0,k.jsx)(l.Z,{title:"Absence",children:(0,k.jsx)(t.Z,{maxWidth:"xl",children:(0,k.jsx)(m.Z,{sx:{backgroundColor:"#FFFFFF"},children:(0,k.jsx)(Q.Z,{sx:{minWidth:800},children:(0,k.jsxs)(U.Z,{children:[(0,k.jsx)($,{headLabel:E.Y1}),(0,k.jsx)(V.Z,{children:r&&r.map((function(e){var i=e.id,t=e.userId,o=e.category,a=e.period,l=e.curSold,d=e.takenSold,c=e.futurSold,u=E.hM.find((function(e){return e.id===t})).name;return(0,k.jsxs)(oe,{tabIndex:-1,role:"checkbox",children:[(0,k.jsx)(te,{children:u}),(0,k.jsx)(te,{children:o}),(0,k.jsx)(te,{children:a}),(0,k.jsx)(te,{children:J(l)}),(0,k.jsx)(te,{children:J(d)}),(0,k.jsx)(te,{children:J(c)}),(0,k.jsxs)(te,{sx:{padding:1,width:150},children:[(0,k.jsx)(s.Z,{children:(0,k.jsx)(ee.Z,{disabledEffect:!0,src:re,sx:{width:28,height:28}})}),(0,k.jsx)(s.Z,{children:(0,k.jsx)(ee.Z,{disabledEffect:!0,src:ne,sx:{width:28,height:28}})}),(0,k.jsx)(s.Z,{onClick:function(){return function(e){n({payload:r.filter((function(r){return r.id!==e})),type:"setSold"})}(i)},children:(0,k.jsx)(ee.Z,{disabledEffect:!0,src:ie,sx:{width:28,height:28}})})]})]},i)}))})]})})})})})}var le=n(8043);function de(){var e=(0,a.useState)(!1),r=(0,i.Z)(e,2),n=r[0],c=r[1];return(0,k.jsxs)(l.Z,{title:"Absence",children:[(0,k.jsxs)(t.Z,{maxWidth:"xl",sx:{display:"flex",flexDirection:"column",mt:2},children:[(0,k.jsx)(o.Z,{sx:{px:3,alignSelf:"flex-end",marginRight:2.5,marginBottom:2.5},variant:"contained",onClick:function(){return c(!n)},endIcon:(0,k.jsx)(d.Z,{src:le.Z,sx:{height:18,width:18,color:"#FFFFFF"}}),children:"Nouveau Solde"}),(0,k.jsx)(ae,{})]}),(0,k.jsx)(O,{open:n,onClose:function(){return c(!n)}})]})}}}]);
//# sourceMappingURL=498.d470eac9.chunk.js.map