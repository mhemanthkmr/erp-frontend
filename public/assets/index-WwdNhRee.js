import{am as e}from"./index-NNRCG9Rm.js";import{C as n}from"./CrudModule-t3new1Rb.js";import{D as o}from"./index-srTIOfPe.js";import{V as l}from"./IdurarOs-hOF3usfi.js";import"./index-ddq5tu2v.js";import"./actions-l-YzO_Wk.js";import"./index-vCtOLfRs.js";import"./index-nierwHcH.js";import"./ErpApp-og-vdlRX.js";import"./helpers-rPTOY0Yj.js";import"./index-ESSCVN9R.js";import"./fade-dRQe2G23.js";import"./useDate-Fz8rfIL3.js";import"./currency.es--or6eeOG.js";import"./useDebounce--08Pdi1N.js";import"./index-xrkCjAY0.js";import"./color-tz1ocuTw.js";import"./index-CB1vN1Z7.js";import"./index-ntKD6FMB.js";import"./DeleteOutlined-XARtgMJL.js";import"./Table-yESaXSHN.js";import"./zh_CN-pm_5gTTN.js";import"./PlusOutlined-RgQQQ1Jv.js";import"./index-n3orj99K.js";import"./index-57783YB8.js";import"./useFetch-3iL7NbWa.js";import"./index-hp3l0IZ8.js";import"./index-CdW27EVe.js";const r={firstname:{type:"string",required:!0},lastname:{type:"string",required:!0},company:{type:"search",entity:"company",renderAsTag:!0,displayLabels:["name"],searchFields:"name",dataIndex:["company","name"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email"}};function k(){const t=l(),m="people",i={displayLabels:["firstname","lastname"],searchFields:"firstname,lastname"},p=["firstname","lastname"],a={PANEL_TITLE:t("person"),DATATABLE_TITLE:t("people_list"),ADD_NEW_ENTITY:t("add_new_person"),ENTITY_NAME:t("person")},s={...{entity:m,...a},fields:r,searchConfig:i,deleteModalLabels:p};return e.jsx(n,{createForm:e.jsx(o,{fields:r}),updateForm:e.jsx(o,{fields:r}),config:s})}export{k as default};
