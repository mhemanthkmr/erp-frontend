import{an as l,aP as p,am as f}from"./index-NNRCG9Rm.js";import{c as i}from"./currency.es--or6eeOG.js";import{e as g,f as F}from"./ErpApp-og-vdlRX.js";const b=()=>{const e=l(g),m=p.get("settings")?p.get("settings"):{money_format_settings:e},{currency_symbol:r,currency_position:s,decimal_sep:n,thousand_sep:a,cent_precision:c,zero_format:u}=m.money_format_settings;function o(t){return i(t).dollars()>0||!u?i(t,{separator:a,decimal:n,symbol:"",precision:c}).format():0+i(t,{separator:a,decimal:n,symbol:"",precision:c}).format()}function y({amount:t=0}){return s==="before"?r+" "+o(t):o(t)+" "+r}function _({amount:t=0}){return o(t)}function d({amount:t=0}){return{props:{style:{textAlign:"right",whiteSpace:"nowrap"}},children:f.jsx(f.Fragment,{children:s==="before"?r+" "+o(t):o(t)+" "+r})}}return{moneyRowFormatter:d,moneyFormatter:y,amountFormatter:_,currency_symbol:r,currency_position:s,decimal_sep:n,thousand_sep:a,cent_precision:c,zero_format:u}},S=b,h=()=>{const e=l(F);return{dateFormat:(e==null?void 0:e.idurar_app_date_format)??"DD/MM/YYYY"}},Y=h;export{Y as a,S as u};