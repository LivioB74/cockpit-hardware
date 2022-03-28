var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var k=(o,e,r)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,p=(o,e)=>{for(var r in e||(e={}))B.call(e,r)&&k(o,r,e[r]);if(y)for(var r of y(e))F.call(e,r)&&k(o,r,e[r]);return o};import{r as u,w as x,a as M,b as I,c as f,o as l,d,e as i,n as b,t as g,f as h,g as w,P as S,h as E,i as _,F as N,j as C,k as H,l as D,m as P}from"./vendor.dda642bf.js";const L=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};L();var v=(o,e)=>{const r=o.__vccOpts||o;for(const[t,s]of e)r[t]=s;return r};const A={props:{moduleName:String,centerName:Boolean},setup(o){const e=u(!0);function r(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,s=localStorage.getItem("color-theme");return s===null?t:s==="dark"}return e.value=r(),e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),x(()=>e.value,(t,s)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:e}},components:{SunIcon:M,MoonIcon:I}},O={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},j={class:"flex flex-row items-baseline basis-10"},X=["src"],q={class:"text-2xl"},z=i("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),V={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function R(o,e,r,t,s,a){const n=f("SunIcon"),c=f("MoonIcon");return l(),d("div",O,[i("div",j,[i("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,X),i("h1",q,[i("span",{class:"text-red-800 dark:text-white font-bold",style:b({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),z]),r.centerName?h("",!0):(l(),d("h1",V,g(r.moduleName),1))]),r.centerName?(l(),d("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:b({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},g(r.moduleName),5)):h("",!0),i("button",{onClick:e[0]||(e[0]=m=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(l(),w(n,{key:0})):(l(),w(c,{key:1}))])])}var T=v(A,[["render",R]]);const J={name:"P5Canvas",mounted(){const o=function(e){var r=2,t=35;e.setup=s=>{e.createCanvas(500,500).parent("p5-canvas")},e.draw=s=>{e.background(245);const a=e.frameCount*3,n=e.sin(e.radians(a))*50;e.push(),e.translate(0,e.height/2),e.fill(66,184,131),e.stroke(53,73,94),e.strokeWeight(5),e.ellipse(t,n,50,50),e.pop(),t+=r,(t>e.width-35||t<35)&&(r*=-1)}};new S(o)}},K={id:"p5-canvas",class:"mt-2 mx-auto"};function W(o,e,r,t,s,a){return l(),d("div",K)}var Y=v(J,[["render",W]]);const G={components:{XCircleIcon:E},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(o){const e=u(o.errorMsg),r=u(o.FixButtonHandler);return x(()=>o.FixButtonHandler,t=>{r.value=t}),{errorMsg:e,FixButtonHandler:r}}},Q={class:"flex items-center justify-evenly"},U={class:"rounded-md bg-red-50 p-4"},Z={class:"flex"},ee={class:"flex-shrink-0"},te={class:"ml-3"},re=i("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),se={class:"mt-2 text-sm text-red-700"},oe={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ne(o,e,r,t,s,a){const n=f("XCircleIcon");return l(),d("div",Q,[i("div",U,[i("div",Z,[i("div",ee,[_(n,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),i("div",te,[re,i("div",se,[i("ul",oe,[(l(!0),d(N,null,C(t.errorMsg,c=>(l(),d("li",null,g(c),1))),256))])])])])]),r.FixButton?(l(),d("button",{key:0,onClick:e[0]||(e[0]=(...c)=>t.FixButtonHandler&&t.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):h("",!0)])}var ae=v(G,[["render",ne]]);function ie(o=[],e={},r="out"){const t=H({loading:!1,status:0,stdout:"",stderr:""}),s=Boolean(e.promise);e.superuser||(e.superuser="require"),e.err=r==="out"?"out":"message";async function a(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(o,e).then((n,c)=>{t.stdout=n,t.stderr=c}).catch((n,c)=>{var m;t.stderr=c!=null?c:n.message,t.status=(m=n.exit_status)!=null?m:-1}).finally(()=>{t.loading=!1})}return a(),s?new Promise((n,c)=>{x(t,()=>{t.loading||(t.status!==0?c(p({},t)):n(p({},t)))})}):t}const ce={setup(){const o=u(!1),e=u([]),r=u(!1),t=u(),s=u(()=>{console.log("Default handler was run for the fix button.")});return{fatalError:o,fatalErrorMsg:e,showFixButton:r,fixButtonHandler:s,runServerInfo:async()=>{try{const n=await ie(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(n.stdout);console.log(c),t.value=n.stdout,o.value=!1,e.value.length=0,r.value=!1}catch(n){console.log(n),o.value=!0,e.value.length=0,e.value.push(n.stderr),e.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.value=!1}},serverInfo:t}},components:{RefreshIconOutline:D,ErrorMessage:ae}},le={class:"card"},de=i("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[i("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ue={class:"card-body dark:bg-stone-700"},fe={key:0,class:"mt-2 flex flex-col"},me={class:"mt-3 sm:mt-0 sm:ml-4"},_e={class:"w-3/4"},he={class:"whitespace-pre"},ve={key:0};function ge(o,e,r,t,s,a){const n=f("ErrorMessage");return l(),d("div",le,[de,i("div",ue,[t.fatalError?h("",!0):(l(),d("div",fe,[i("div",me,[i("button",{type:"button",onClick:e[0]||(e[0]=c=>t.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),i("div",_e,[i("div",he,g(t.serverInfo),1)]),t.fatalError?(l(),d("div",ve,[_(n,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):h("",!0)]))])])}var pe=v(ce,[["render",ge]]);const xe={name:"App",components:{P5Canvas:Y,FfdHeader:T,DebugBox:pe}},ye={id:"App"},ke={class:"h-full flex flex-col overflow-scroll"};function be(o,e,r,t,s,a){const n=f("FfdHeader"),c=f("P5Canvas"),m=f("DebugBox");return l(),d("div",ye,[i("div",ke,[_(n,{moduleName:"Disks",centerName:""}),_(c),_(m)])])}var we=v(xe,[["render",be]]);P(we).mount("#app");
