const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BbBgeYPZ.js","./CIvNR3Hd.js","./bNaE6FFb.js"])))=>i.map(i=>d[i]);
import{H as f}from"./CIvNR3Hd.js";import{v as y,t as d}from"./DYWXKjmK.js";import"./Bxk16V1v.js";import"./C-v3KzvZ.js";import"./BneCoJRQ.js";import"./DvDH6DOc.js";import"./Ds-fDbW1.js";import"./Cpj98o6Y.js";function N(i){const e=i;return async r=>{const h=[],o=[];y(r,s=>{var t,n;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language||(n=s.properties)!=null&&n.highlights)},s=>{const t=s,n=typeof t.properties.highlights=="string"?t.properties.highlights.split(/[,\s]+/).map(Number):Array.isArray(t.properties.highlights)?t.properties.highlights.map(Number):[],m=e.highlighter(d(s),t.properties.language,e.theme,{highlights:n.filter(Boolean),meta:t.properties.meta}).then(({tree:p,className:c,style:l,inlineStyle:u})=>{var g;t.properties.className=((t.properties.className||"")+" "+c).trim(),t.properties.style=((t.properties.style||"")+" "+u).trim(),((g=t.children[0])==null?void 0:g.tagName)==="code"?t.children[0].children=p:t.children=p[0].children||p,l&&o.push(l)});h.push(m)}),h.length&&(await Promise.all(h),r.children.push({type:"element",tagName:"style",children:[{type:"text",value:w(o.join(""))}],properties:{}}))}}const w=i=>{const e=i.split("}").filter(r=>!!r.trim()).map(r=>r.trim()+"}");return Array.from(new Set(e)).join("")},a={theme:{},async highlighter(i,e,r,h){var o,s;try{return window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser"?f(()=>import("./BbBgeYPZ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default(i,e,r,h)).catch(()=>({})):await $fetch("/api/_mdc/highlight",{params:{code:i,lang:e,theme:JSON.stringify(r),options:JSON.stringify(h)}})}catch(t){if(((o=t==null?void 0:t.response)==null?void 0:o.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,e,r,h)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function _(i={}){const e={...a,...i};return typeof e.highlighter!="function"&&(e.highlighter=a.highlighter),N(e)}const I={},O={highlight:{instance:_,options:{}}},j={theme:"one-dark-pro"};export{j as highlight,O as rehypePlugins,I as remarkPlugins};
