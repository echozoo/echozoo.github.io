"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[713],{10715:function(ae,z,t){t.d(z,{Z:function(){return e}});const e=E=>E?typeof E=="function"?E():E:null},18713:function(ae,z,t){t.d(z,{C:function(){return pe}});var e=t(50959),E=t(82187),y=t.n(E),j=t(8354),A=t(80030),G=t(16792),L=t(34954),H=t(39003),F=t(67334),d=e.createContext({}),n=t(24331),a=t(41842),o=t(89512),l=t(84345);const r=s=>{const{antCls:g,componentCls:c,iconCls:i,avatarBg:f,avatarColor:Q,containerSize:R,containerSizeLG:O,containerSizeSM:T,textFontSize:x,textFontSizeLG:U,textFontSizeSM:ne,borderRadius:$,borderRadiusLG:D,borderRadiusSM:K,lineWidth:Z,lineType:k,calc:Y}=s,W=(M,q,P)=>({width:M,height:M,lineHeight:(0,n.bf)(Y(M).sub(Y(Z).mul(2)).equal()),borderRadius:"50%",[`&${c}-square`]:{borderRadius:P},[`${c}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${c}-icon`]:{fontSize:q,[`> ${i}`]:{margin:0}}});return{[c]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,a.Wf)(s)),{position:"relative",display:"inline-block",overflow:"hidden",color:Q,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:f,border:`${(0,n.bf)(Z)} ${k} transparent`,["&-image"]:{background:"transparent"},[`${g}-image-img`]:{display:"block"}}),W(R,x,$)),{["&-lg"]:Object.assign({},W(O,U,D)),["&-sm"]:Object.assign({},W(T,ne,K)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},u=s=>{const{componentCls:g,groupBorderColor:c,groupOverlapping:i,groupSpace:f}=s;return{[`${g}-group`]:{display:"inline-flex",[`${g}`]:{borderColor:c},["> *:not(:first-child)"]:{marginInlineStart:i}},[`${g}-group-popover`]:{[`${g} + ${g}`]:{marginInlineStart:f}}}},S=s=>{const{controlHeight:g,controlHeightLG:c,controlHeightSM:i,fontSize:f,fontSizeLG:Q,fontSizeXL:R,fontSizeHeading3:O,marginXS:T,marginXXS:x,colorBorderBg:U}=s;return{containerSize:g,containerSizeLG:c,containerSizeSM:i,textFontSize:Math.round((Q+R)/2),textFontSizeLG:O,textFontSizeSM:f,groupSpace:x,groupOverlapping:-T,groupBorderColor:U}};var C=(0,o.I$)("Avatar",s=>{const{colorTextLightSolid:g,colorTextPlaceholder:c}=s,i=(0,l.TS)(s,{avatarBg:c,avatarColor:g});return[r(i),u(i)]},S),h=t(68023),V=function(s,g){var c={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&g.indexOf(i)<0&&(c[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,i=Object.getOwnPropertySymbols(s);f<i.length;f++)g.indexOf(i[f])<0&&Object.prototype.propertyIsEnumerable.call(s,i[f])&&(c[i[f]]=s[i[f]]);return c};const w=(s,g)=>{const[c,i]=e.useState(1),[f,Q]=e.useState(!1),[R,O]=e.useState(!0),T=e.useRef(null),x=e.useRef(null),U=(0,A.sQ)(g,T),{getPrefixCls:ne,avatar:$}=e.useContext(L.E_),D=e.useContext(d),K=()=>{if(!x.current||!T.current)return;const v=x.current.offsetWidth,m=T.current.offsetWidth;if(v!==0&&m!==0){const{gap:_=4}=s;_*2<m&&i(m-_*2<v?(m-_*2)/v:1)}};e.useEffect(()=>{Q(!0)},[]),e.useEffect(()=>{O(!0),i(1)},[s.src]),e.useEffect(K,[s.gap]);const Z=()=>{const{onError:v}=s;(v==null?void 0:v())!==!1&&O(!1)},{prefixCls:k,shape:Y,size:W,src:M,srcSet:q,icon:P,className:re,rootClassName:ee,alt:oe,draggable:Ee,children:ge,crossOrigin:Ce}=s,ie=V(s,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),p=(0,H.Z)(v=>{var m,_;return(_=(m=W!=null?W:D==null?void 0:D.size)!==null&&m!==void 0?m:v)!==null&&_!==void 0?_:"default"}),he=Object.keys(typeof p=="object"?p||{}:{}).some(v=>["xs","sm","md","lg","xl","xxl"].includes(v)),me=(0,F.Z)(he),Oe=e.useMemo(()=>{if(typeof p!="object")return{};const v=G.c4.find(_=>me[_]),m=p[v];return m?{width:m,height:m,lineHeight:`${m}px`,fontSize:m&&(P||ge)?m/2:18}:{}},[me,p]),B=ne("avatar",k),ve=(0,h.Z)(B),[Pe,ye,Se]=C(B,ve),xe=y()({[`${B}-lg`]:p==="large",[`${B}-sm`]:p==="small"}),fe=e.isValidElement(M),Me=Y||(D==null?void 0:D.shape)||"circle",_e=y()(B,xe,$==null?void 0:$.className,`${B}-${Me}`,{[`${B}-image`]:fe||M&&R,[`${B}-icon`]:!!P},Se,ve,re,ee,ye),be=typeof p=="number"?{width:p,height:p,lineHeight:`${p}px`,fontSize:P?p/2:18}:{};let te;if(typeof M=="string"&&R)te=e.createElement("img",{src:M,draggable:Ee,srcSet:q,onError:Z,alt:oe,crossOrigin:Ce});else if(fe)te=M;else if(P)te=P;else if(f||c!==1){const v=`scale(${c}) translateX(-50%)`,m={msTransform:v,WebkitTransform:v,transform:v},_=typeof p=="number"?{lineHeight:`${p}px`}:{};te=e.createElement(j.Z,{onResize:K},e.createElement("span",{className:`${B}-string`,ref:x,style:Object.assign(Object.assign({},_),m)},ge))}else te=e.createElement("span",{className:`${B}-string`,style:{opacity:0},ref:x},ge);return delete ie.onError,delete ie.gap,Pe(e.createElement("span",Object.assign({},ie,{style:Object.assign(Object.assign(Object.assign(Object.assign({},be),Oe),$==null?void 0:$.style),ie.style),className:_e,ref:U}),te))};var I=e.forwardRef(w),N=t(7624),b=t(56055),ce=t(85565);const se=s=>{const{size:g,shape:c}=e.useContext(d),i=e.useMemo(()=>({size:s.size||g,shape:s.shape||c}),[s.size,s.shape,g,c]);return e.createElement(d.Provider,{value:i},s.children)};var de=s=>{const{getPrefixCls:g,direction:c}=e.useContext(L.E_),{prefixCls:i,className:f,rootClassName:Q,style:R,maxCount:O,maxStyle:T,size:x,shape:U,maxPopoverPlacement:ne="top",maxPopoverTrigger:$="hover",children:D}=s,K=g("avatar",i),Z=`${K}-group`,k=(0,h.Z)(K),[Y,W,M]=C(K,k),q=y()(Z,{[`${Z}-rtl`]:c==="rtl"},M,k,f,Q,W),P=(0,N.Z)(D).map((ee,oe)=>(0,ce.Tm)(ee,{key:`avatar-key-${oe}`})),re=P.length;if(O&&O<re){const ee=P.slice(0,O),oe=P.slice(O,re);return ee.push(e.createElement(b.Z,{key:"avatar-popover-key",content:oe,trigger:$,placement:ne,overlayClassName:`${Z}-popover`},e.createElement(I,{style:T},`+${re-O}`))),Y(e.createElement(se,{shape:U,size:x},e.createElement("div",{className:q,style:R},ee)))}return Y(e.createElement(se,{shape:U,size:x},e.createElement("div",{className:q,style:R},P)))};const le=I;le.Group=de;var pe=le},1:function(ae,z,t){var e=t(50959),E=t(82187),y=t.n(E),j=t(78653),A=t(10715),G=t(34954),L=t(68939),H=function(n,a){var o={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&a.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(n);r<l.length;r++)a.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(n,l[r])&&(o[l[r]]=n[l[r]]);return o};const F=(n,a,o)=>!a&&!o?null:e.createElement(e.Fragment,null,a&&e.createElement("div",{className:`${n}-title`},(0,A.Z)(a)),e.createElement("div",{className:`${n}-inner-content`},(0,A.Z)(o))),J=n=>{const{hashId:a,prefixCls:o,className:l,style:r,placement:u="top",title:S,content:C,children:h}=n;return e.createElement("div",{className:y()(a,o,`${o}-pure`,`${o}-placement-${u}`,l),style:r},e.createElement("div",{className:`${o}-arrow`}),e.createElement(j.G,Object.assign({},n,{className:a,prefixCls:o}),h||F(o,S,C)))},d=n=>{const{prefixCls:a,className:o}=n,l=H(n,["prefixCls","className"]),{getPrefixCls:r}=e.useContext(G.E_),u=r("popover",a),[S,C,h]=(0,L.Z)(u);return S(e.createElement(J,Object.assign({},l,{prefixCls:u,hashId:C,className:y()(o,h)})))};z.ZP=d},56055:function(ae,z,t){var e=t(50959),E=t(82187),y=t.n(E),j=t(10715),A=t(5970),G=t(34954),L=t(29695),H=t(1),F=t(68939),J=function(a,o){var l={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&o.indexOf(r)<0&&(l[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(a);u<r.length;u++)o.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(a,r[u])&&(l[r[u]]=a[r[u]]);return l};const d=a=>{let{title:o,content:l,prefixCls:r}=a;return e.createElement(e.Fragment,null,o&&e.createElement("div",{className:`${r}-title`},(0,j.Z)(o)),e.createElement("div",{className:`${r}-inner-content`},(0,j.Z)(l)))},n=e.forwardRef((a,o)=>{const{prefixCls:l,title:r,content:u,overlayClassName:S,placement:C="top",trigger:h="hover",mouseEnterDelay:V=.1,mouseLeaveDelay:w=.1,overlayStyle:X={}}=a,I=J(a,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:N}=e.useContext(G.E_),b=N("popover",l),[ce,se,ue]=(0,F.Z)(b),de=N(),le=y()(S,se,ue);return ce(e.createElement(L.Z,Object.assign({placement:C,trigger:h,mouseEnterDelay:V,mouseLeaveDelay:w,overlayStyle:X},I,{prefixCls:b,overlayClassName:le,ref:o,overlay:r||u?e.createElement(d,{prefixCls:b,title:r,content:u}):null,transitionName:(0,A.m)(de,"zoom-big",I.transitionName),"data-popover-inject":!0})))});n._InternalPanelDoNotUseOrYouWillBeFired=H.ZP,z.Z=n},68939:function(ae,z,t){var e=t(41842),E=t(4587),y=t(5155),j=t(90252),A=t(89512),G=t(84345),L=t(69904);const H=d=>{const{componentCls:n,popoverColor:a,titleMinWidth:o,fontWeightStrong:l,innerPadding:r,boxShadowSecondary:u,colorTextHeading:S,borderRadiusLG:C,zIndexPopup:h,titleMarginBottom:V,colorBgElevated:w,popoverBg:X,titleBorderBottom:I,innerContentPadding:N,titlePadding:b}=d;return[{[n]:Object.assign(Object.assign({},(0,e.Wf)(d)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:h,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":w,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:X,backgroundClip:"padding-box",borderRadius:C,boxShadow:u,padding:r},[`${n}-title`]:{minWidth:o,marginBottom:V,color:S,fontWeight:l,borderBottom:I,padding:b},[`${n}-inner-content`]:{color:a,padding:N}})},(0,y.ZP)(d,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:d.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},F=d=>{const{componentCls:n}=d;return{[n]:j.i.map(a=>{const o=d[`${a}6`];return{[`&${n}-${a}`]:{"--antd-arrow-background-color":o,[`${n}-inner`]:{backgroundColor:o},[`${n}-arrow`]:{background:"transparent"}}}})}},J=d=>{const{lineWidth:n,controlHeight:a,fontHeight:o,padding:l,wireframe:r,zIndexPopupBase:u,borderRadiusLG:S,marginXS:C,lineType:h,colorSplit:V,paddingSM:w}=d,X=a-o,I=X/2,N=X/2-n,b=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:u+30},(0,L.w)(d)),(0,y.wZ)({contentRadius:S,limitVerticalRadius:!0})),{innerPadding:r?0:12,titleMarginBottom:r?0:C,titlePadding:r?`${I}px ${b}px ${N}px`:0,titleBorderBottom:r?`${n}px ${h} ${V}`:"none",innerContentPadding:r?`${w}px ${b}px`:0})};z.Z=(0,A.I$)("Popover",d=>{const{colorBgElevated:n,colorText:a}=d,o=(0,G.TS)(d,{popoverBg:n,popoverColor:a});return[H(o),F(o),(0,E._y)(o,"zoom-big")]},J,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
