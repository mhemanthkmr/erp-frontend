import{a as c,aB as q,am as n}from"./index-NNRCG9Rm.js";import{ab as g,$ as B}from"./IdurarOs-hOF3usfi.js";import{u as I}from"./useFetch-3iL7NbWa.js";import{s as N}from"./index-xrkCjAY0.js";import{c as _}from"./color-tz1ocuTw.js";import{T as k}from"./index-ntKD6FMB.js";const z=({entity:v,displayLabels:S=["name"],outputValue:t="_id",redirectLabel:x="",withRedirect:b=!1,urlToRedirect:L="/",value:r,onChange:l})=>{var h;const[i,j]=c.useState([]),[p,m]=c.useState(void 0),E=q(),$=()=>B.list({entity:v}),{result:y,isLoading:f,isSuccess:u}=I($);c.useEffect(()=>{u&&j(y)},[u]);const O=s=>S.map(e=>s[e]).join(" ");c.useEffect(()=>{if(r){const s=r[t]??r;m(s),l(s)}},[r]);const R=s=>{if(s==="redirectURL")E(L);else{const e=s[t]??s;m(s),l(e)}},A=()=>{const s=[];if(i.length===0&&b){const e="redirectURL",a=`+ ${x}`;s.push({value:e,label:a})}return i.map(e=>{var d;const a=e[t]??e,C=O(e),T=((d=e[t])==null?void 0:d.color)??(e==null?void 0:e.color),o=_.find(U=>U.color===T);s.push({value:a,label:C,color:o==null?void 0:o.color})}),s};return n.jsx(g,{loading:f,disabled:f,value:p,onChange:R,children:(h=A())==null?void 0:h.map(s=>n.jsx(g.Option,{value:s.value,children:n.jsx(k,{bordered:!1,color:s.color,children:s.label})},`${N.generate()}`))})},P=z;export{P as S};