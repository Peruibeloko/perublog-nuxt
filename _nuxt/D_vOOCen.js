import{_ as u}from"./CDU_avmV.js";import d from"./-Z-Au_aH.js";import{f,q as h,l as g,k as x,s as b,o as v,c as y,a as e,t as C,g as i,b as m,w as k,d as w}from"./CIvNR3Hd.js";import{u as N}from"./Ds-fDbW1.js";import{q as V}from"./lA4Lxwuc.js";import"./DDrjSJh1.js";import"./IwiFHPLE.js";import"./NKmvrsfp.js";import"./Bxk16V1v.js";import"./C-v3KzvZ.js";import"./BneCoJRQ.js";import"./CqyAEv2m.js";import"./DvDH6DOc.js";import"./BDXjkX19.js";const q={id:"post"},J=f({__name:"[postId]",async setup(B){let t,a;const{currentRoute:s}=h(),{data:c}=([t,a]=g(()=>N("blog_post",()=>V(`/blog/${s.value.params.postId}`).findOne())),t=await t,a(),t),o=x({});return b("footnotes",[o,(n,r)=>{o.value={...o.value,[n]:r}}]),(n,r)=>{var p;const _=u,l=d;return v(),y("div",q,[e("header",null,[e("h1",null,C((p=i(c))==null?void 0:p.title),1),m(_,{to:"/blog"},{default:k(()=>[w("Voltar")]),_:1})]),e("main",null,[m(l,{tag:"article",path:`/blog/${i(s).params.postId}`},null,8,["path"])])])}}});export{J as default};
