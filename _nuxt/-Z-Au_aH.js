import{g as d,m as w,u as y,K as D,L as g,f as H,M as S,N as _,O as c}from"./CIvNR3Hd.js";import{u as b}from"./DDrjSJh1.js";import q from"./IwiFHPLE.js";import x from"./BDXjkX19.js";import"./NKmvrsfp.js";import"./Bxk16V1v.js";import"./C-v3KzvZ.js";import"./BneCoJRQ.js";import"./CqyAEv2m.js";import"./DvDH6DOc.js";import"./Ds-fDbW1.js";import"./lA4Lxwuc.js";const a=(u,s=y())=>{const e=d(u),m=g();w(()=>d(u),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const p=(t==null?void 0:t.description)||(n==null?void 0:n.description);p&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:p}),t!=null&&t.image||(n==null||n.image),D(()=>b(t))},{immediate:!0})},O=H({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:s}=g().public.content,e=S(),{tag:m,excerpt:f,path:n,query:t,head:r}=u,p=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||_(y().path),find:"one"},C=(o,i)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return c(x,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return p&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:f,...this.$attrs})}:({data:o})=>(p&&a(o),c(q,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),P=O;export{P as default};
