import{a as o,Z as d,u as n,j as m,B as t,J as u,Y as i,v as c,x as f,o as v}from"./entry.157a73e9.js";import{u as x}from"./dataStore.d42151a9.js";const w={key:0,class:"h-screen w-screen flex justify-center items-center"},_={class:"flex flex-col items-center space-y-15px max-w-300px w-full"},h=t("h1",{class:"h2T mb-20px"}," \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F ",-1),B={__name:"auth",setup(g){const r=o(!1),e=o(""),s=o(""),p=async()=>{!(e.value&&s.value)||await x().authSystem({login:e.value,password:s.value})};return sessionStorage.getItem("token")?d("/admin"):r.value=!0,(y,a)=>n(r)?(v(),m("div",w,[t("div",_,[h,u(t("input",{required:"","onUpdate:modelValue":a[0]||(a[0]=l=>c(e)?e.value=l:null),class:"w-full inputF",type:"text",name:"login",id:"",placeholder:"\u041B\u043E\u0433\u0438\u043D"},null,512),[[i,n(e)]]),u(t("input",{required:"","onUpdate:modelValue":a[1]||(a[1]=l=>c(s)?s.value=l:null),class:"w-full inputF",type:"password",name:"password",id:"",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C"},null,512),[[i,n(s)]]),t("button",{onClick:p,class:"w-full py-10px text-base-2 bg-base-1 transition hover:bg-base-3"},"\u0412\u043E\u0439\u0442\u0438")])])):f("",!0)}};export{B as default};
