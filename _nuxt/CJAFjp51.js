import{_ as w}from"./CDU_avmV.js";import L from"./BfBjfMgC.js";import{f as S,h as q,i as $,o as u,c as i,a as o,g as t,j as c,t as b,p as I,e as O,_ as V,k as B,l as D,m as P,n as E,b as N,w as z,d as F,F as H,r as R}from"./CIvNR3Hd.js";import{u as T}from"./DDrjSJh1.js";import{q as j}from"./lA4Lxwuc.js";import"./BDXjkX19.js";import"./Ds-fDbW1.js";import"./DvDH6DOc.js";import"./CqyAEv2m.js";const h=d=>(I("data-v-6063bb3f"),d=d(),O(),d),A={key:2,class:"nav-button ellipsis-left"},M={class:"nav-button curr"},U={key:5,class:"nav-button ellipsis-right"},Z=h(()=>o("option",{value:5},"5",-1)),G=h(()=>o("option",{value:10},"10",-1)),J=h(()=>o("option",{value:25},"25",-1)),K=h(()=>o("option",{value:50},"50",-1)),Q=[Z,G,J,K],W=S({__name:"BlogPagination",props:{currentPage:{},pageSize:{},postCount:{}},emits:["next","prev","navigate","size"],setup(d,{emit:m}){const y=d,s=m,{currentPage:e,pageSize:k,postCount:g}=q(y),r=$(()=>Math.ceil(g.value/k.value)),n=$(()=>e.value-1>=2?e.value-1:null),v=$(()=>e.value+1<=r.value-1?e.value+1:null),C=()=>s("next"),x=()=>s("prev"),a=_=>s("navigate",_),p=_=>s("size",_);return(_,l)=>(u(),i("aside",null,[o("nav",null,[t(e)!==1?(u(),i("button",{key:0,class:"nav-button back",type:"button",onClick:x}," < ")):c("",!0),t(e)>1?(u(),i("button",{key:1,class:"nav-button first",type:"button",onClick:l[0]||(l[0]=f=>a(1))}," 1 ")):c("",!0),t(n)&&t(n)>2?(u(),i("span",A,"...")):c("",!0),t(n)?(u(),i("button",{key:3,class:"nav-button currLessOne",type:"button",onClick:l[1]||(l[1]=f=>a(t(n)))},b(t(e)-1),1)):c("",!0),o("span",M,b(t(e)),1),t(v)?(u(),i("button",{key:4,class:"nav-button currPlusOne",type:"button",onClick:l[2]||(l[2]=f=>a(t(v)))},b(t(e)+1),1)):c("",!0),t(v)&&t(v)<t(r)-1?(u(),i("span",U,"...")):c("",!0),t(e)<t(r)?(u(),i("button",{key:6,class:"nav-button last",type:"button",onClick:l[3]||(l[3]=f=>a(t(r)))},b(t(r)),1)):c("",!0),t(e)!==t(r)?(u(),i("button",{key:7,class:"nav-button next",type:"button",onClick:C}," > ")):c("",!0)]),o("select",{onChange:l[4]||(l[4]=f=>p(+f.target.value))},Q,32)]))}}),X=V(W,[["__scopeId","data-v-6063bb3f"]]),Y={id:"blog"},tt=o("h1",null,"Blag",-1),et=o("p",null,'Estatisticamente falando, escrevo sobre tecnologia com uma chance "não-zero" de falar besteira',-1),nt={class:"post-list"},ot=["datetime"],st=["href"],at=o("p",null,"Não tem nenhum post ainda!",-1),vt=S({__name:"index",async setup(d){let m,y;T({title:"Blag"});const s=B(1),e=B(5),k=([m,y]=D(()=>j("blog").count()),m=await m,y(),m);P(e,()=>s.value=1);const g=E({path:"blog",skip:(s.value-1)*e.value,limit:e.value,sort:[{date:-1}]});return P([s,e],([r,n])=>{g.skip=(r-1)*n,g.limit=n}),(r,n)=>{const v=w,C=L,x=X;return u(),i("div",Y,[o("header",null,[o("div",null,[tt,N(v,{to:"/"},{default:z(()=>[F("Home")]),_:1})]),et]),o("main",null,[N(C,{query:t(g)},{default:z(({list:a})=>[o("ul",nt,[(u(!0),i(H,null,R(a,p=>{var _;return u(),i("li",{key:p._path},[o("time",{datetime:p.date},b(`${new Date(p.date).toLocaleDateString("pt-BR",{year:"numeric",month:"numeric",day:"numeric",timeZone:"UTC"})}`),9,ot),o("a",{href:(_=p._path)==null?void 0:_.replace("blog","blog/post")},b(p.title),9,st)])}),128))])]),"not-found":z(()=>[at]),_:1},8,["query"]),N(x,{"current-page":t(s),"page-size":t(e),"post-count":t(k),onPrev:n[0]||(n[0]=a=>s.value--),onNext:n[1]||(n[1]=a=>s.value++),onNavigate:n[2]||(n[2]=a=>s.value=a),onSize:n[3]||(n[3]=a=>e.value=a)},null,8,["current-page","page-size","post-count"])])])}}});export{vt as default};
