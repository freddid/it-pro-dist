import{a0 as r,Z as i}from"./entry.5b6dc133.js";const n=r("DataStore",{state:()=>({news:[],users:[],date:"",baseUrl:"https://itpro-gstou.ru"}),actions:{async getNews(){try{this.news=await(await fetch(`${this.baseUrl}/api/getNews`)).json()}catch(t){alert(t)}},async changeNews({data:t,url:e}){try{if(t[1]){const a=new FormData;a.append("img",t[1]);const s=await fetch(`${this.baseUrl}/api/upload`,{method:"POST",body:a});t[0].img=(await s.json()).imgPath}t[0].token=sessionStorage.getItem("token"),await fetch(`${this.baseUrl}/api/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t[0])}),this.getNews()}catch(a){alert(a)}},async getDate(){try{this.date=(await(await fetch(`${this.baseUrl}/api/getTime`)).json()).endDate}catch(t){alert(t)}},async addDate(t){try{const e=await fetch(`${this.baseUrl}/api/chooseTime`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:t,token:sessionStorage.getItem("token")})}),{msg:a}=await e.json();a=="\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430"&&(alert(a),this.date=t)}catch(e){alert(e)}},async getUsers(){try{this.users=await(await fetch(`${this.baseUrl}/api/getUsers`)).json()}catch(t){alert(t)}},async addUser(t){try{return await fetch(`${this.baseUrl}/api/addUser`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}catch(e){alert(e)}},async authSystem(t){try{const a=await(await fetch(`${this.baseUrl}/api/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();a.hash?(sessionStorage.setItem("token",a.hash),await i("/admin")):alert("\u041F\u0430\u0440\u043E\u043B\u044C \u0438\u043B\u0438 \u043B\u043E\u0433\u0438\u043D \u043D\u0435 \u043F\u0440\u0430\u0432\u0435\u043B\u044C\u043D\u044B\u0439")}catch(e){alert(e)}}},getters:{getNewsObj:t=>t.news}});export{n as u};
