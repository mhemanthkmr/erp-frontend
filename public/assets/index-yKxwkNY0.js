import{am as e}from"./index-NNRCG9Rm.js";import{d as p}from"./index-nierwHcH.js";import{V as l}from"./IdurarOs-hOF3usfi.js";import"./index-vCtOLfRs.js";import{E as u}from"./selectors-ODi0nExu.js";import{E as c}from"./index-EA0eXXmI.js";import{a as y}from"./useDate-Fz8rfIL3.js";import"./ErpApp-og-vdlRX.js";import"./actions-NDaFrLo5.js";import"./index-xrkCjAY0.js";import"./Table-yESaXSHN.js";import"./zh_CN-pm_5gTTN.js";import"./FilePdfOutlined-4twY-BbQ.js";import"./DeleteOutlined-XARtgMJL.js";import"./PlusOutlined-RgQQQ1Jv.js";import"./helpers-rPTOY0Yj.js";import"./index-ESSCVN9R.js";import"./fade-dRQe2G23.js";import"./currency.es--or6eeOG.js";function f({config:t}){return e.jsx(u,{children:e.jsx(c,{config:t})})}function w(){const t=l(),{dateFormat:a}=y(),n={displayLabels:["number"],searchFields:"number",outputValue:"_id"},o=["number"],r=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Amount"),dataIndex:"amount"},{title:t("Date"),dataIndex:"date",render:s=>p(s).format(a)},{title:t("Number"),dataIndex:["invoice","number"]},{title:t("year"),dataIndex:["invoice","year"]},{title:t("Payment Mode"),dataIndex:["paymentMode","name"]}],m="payment",i={PANEL_TITLE:t("payment"),DATATABLE_TITLE:t("payment_list"),ADD_NEW_ENTITY:t("add_new_payment"),ENTITY_NAME:t("payment")},d={...{entity:m,...i},disableAdd:!0,dataTableColumns:r,searchConfig:n,deleteModalLabels:o};return e.jsx(f,{config:d})}export{w as default};
