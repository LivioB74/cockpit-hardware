var I=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var F=(n,e,o)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,y=(n,e)=>{for(var o in e||(e={}))$.call(e,o)&&F(n,o,e[o]);if(w)for(var o of w(e))H.call(e,o)&&F(n,o,e[o]);return n};import{r as f,w as k,a as S,b as N,c as _,o as c,d,e as a,n as B,t as h,f as g,g as M,P as C,h as D,i as v,F as L,j as P,k as b,l as A,m as O}from"./vendor.dda642bf.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}};j();var x=(n,e)=>{const o=n.__vccOpts||n;for(const[r,t]of e)o[r]=t;return o};const X={props:{moduleName:String,centerName:Boolean},setup(n){const e=f(!0);function o(){let r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("color-theme");return t===null?r:t==="dark"}return e.value=o(),e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),k(()=>e.value,(r,t)=>{localStorage.setItem("color-theme",r?"dark":"light"),r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:e}},components:{SunIcon:S,MoonIcon:N}},q={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},V=["src"],J={class:"text-2xl"},R=a("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),T={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function K(n,e,o,r,t,i){const s=_("SunIcon"),l=_("MoonIcon");return c(),d("div",q,[a("div",z,[a("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:r.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,V),a("h1",J,[a("span",{class:"text-red-800 dark:text-white font-bold",style:B({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),R]),o.centerName?g("",!0):(c(),d("h1",T,h(o.moduleName),1))]),o.centerName?(c(),d("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:B({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},h(o.moduleName),5)):g("",!0),a("button",{onClick:e[0]||(e[0]=m=>r.darkMode=!r.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[r.darkMode?(c(),M(s,{key:0})):(c(),M(l,{key:1}))])])}var W=x(X,[["render",K]]);const Y={name:"P5Canvas",mounted(){const n=function(e){var o=2,r=35;e.setup=t=>{e.createCanvas(500,500).parent("p5-canvas")},e.draw=t=>{e.background(245);const i=e.frameCount*3,s=e.sin(e.radians(i))*50;e.push(),e.translate(0,e.height/2),e.fill(66,184,131),e.stroke(53,73,94),e.strokeWeight(5),e.ellipse(r,s,50,50),e.pop(),r+=o,(r>e.width-35||r<35)&&(o*=-1)}};new C(n)}},G={id:"p5-canvas",class:"mt-2 mx-auto"};function Q(n,e,o,r,t,i){return c(),d("div",G)}var U=x(Y,[["render",Q]]);const Z={components:{XCircleIcon:D},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(n){const e=f(n.errorMsg),o=f(n.FixButtonHandler);return k(()=>n.FixButtonHandler,r=>{o.value=r}),{errorMsg:e,FixButtonHandler:o}}},ee={class:"flex items-center justify-evenly"},re={class:"rounded-md bg-red-50 p-4"},te={class:"flex"},oe={class:"flex-shrink-0"},se={class:"ml-3"},ne=a("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ae={class:"mt-2 text-sm text-red-700"},ie={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(n,e,o,r,t,i){const s=_("XCircleIcon");return c(),d("div",ee,[a("div",re,[a("div",te,[a("div",oe,[v(s,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),a("div",se,[ne,a("div",ae,[a("ul",ie,[(c(!0),d(L,null,P(r.errorMsg,l=>(c(),d("li",null,h(l),1))),256))])])])])]),o.FixButton?(c(),d("button",{key:0,onClick:e[0]||(e[0]=(...l)=>r.FixButtonHandler&&r.FixButtonHandler(...l)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):g("",!0)])}var ce=x(Z,[["render",le]]);function E(n=[],e={},o="out"){const r=b({loading:!1,status:0,stdout:"",stderr:""}),t=Boolean(e.promise);e.superuser||(e.superuser="require"),e.err=o==="out"?"out":"message";async function i(){r.loading=!0,r.status=0,r.stdout="",r.stderr="",cockpit.spawn(n,e).then((s,l)=>{r.stdout=s,r.stderr=l}).catch((s,l)=>{var m;r.stderr=l!=null?l:s.message,r.status=(m=s.exit_status)!=null?m:-1}).finally(()=>{r.loading=!1})}return i(),t?new Promise((s,l)=>{k(r,()=>{r.loading||(r.status!==0?l(y({},r)):s(y({},r)))})}):r}const de={setup(){const n=f(!1),e=f([]),o=f(!1),r=f(),t=b({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),i=f(),s=b({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),l=async()=>{try{const u=await E(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let p=JSON.parse(u.stdout);console.log(p),r.value=u.stdout,t.errorFlag=!1,t.errorMessage.length=0,t.showFixButton=!1}catch(u){console.log(u),t.errorFlag=!0,t.errorMessage.length=0,t.errorMessage.push(u.stderr),t.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.showFixButton=!1}},m=async()=>{try{const u=await E(["/opt/45drives/tools/lsdev"],{err:"out",superuser:"require",promise:!0});let p=JSON.parse(u.stdout);console.log(p),i.value=u.stdout,s.errorFlag=!1,s.errorMessage.length=0,o.value=!1}catch(u){console.log(u),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(u.stderr),s.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),o.value=!1}};return{fatalError:n,fatalErrorMsg:e,showFixButton:o,fixButtonHandler,runServerInfo:l,runLsdev:m,serverInfo:r,serverInfoError:t,lsdevInfo:i,lsdevError:s}},components:{RefreshIconOutline:A,ErrorMessage:ce}},ue={class:"card"},fe=a("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[a("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),me={class:"card-body dark:bg-stone-700"},ge={class:"mt-3 sm:mt-0 sm:ml-4"},_e={key:0,class:"mt-2 flex flex-col"},ve={class:"w-3/4 m-2"},he={class:"whitespace-pre"},xe={key:1},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ye={key:2,class:"mt-2 flex flex-col"},be={class:"w-3/4 m-2"},ke={class:"whitespace-pre"},we={key:3};function Fe(n,e,o,r,t,i){const s=_("ErrorMessage");return c(),d("div",ue,[fe,a("div",me,[a("div",ge,[a("button",{type:"button",onClick:e[0]||(e[0]=l=>r.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),r.serverInfoError.errorFlag?g("",!0):(c(),d("div",_e,[a("div",ve,[a("div",he,h(r.serverInfo),1)])])),r.serverInfoError.errorFlag?(c(),d("div",xe,[v(s,{errorMsg:r.serverInfoError.errorMessage,FixButton:r.serverInfoError.showFixButton,FixButtonHandler:r.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),a("div",pe,[a("button",{type:"button",onClick:e[1]||(e[1]=l=>r.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),r.lsdevError.errorFlag?g("",!0):(c(),d("div",ye,[a("div",be,[a("div",ke,h(r.lsdevInfo),1)])])),r.lsdevError.errorFlag?(c(),d("div",we,[v(s,{errorMsg:r.lsdevError.errorMessage,FixButton:r.lsdevError.showFixButton,FixButtonHandler:r.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])}var Be=x(de,[["render",Fe]]);const Me={name:"App",components:{P5Canvas:U,FfdHeader:W,DebugBox:Be}},Ee={id:"App"},Ie={class:"h-full flex flex-col overflow-y-scroll"};function $e(n,e,o,r,t,i){const s=_("FfdHeader"),l=_("P5Canvas"),m=_("DebugBox");return c(),d("div",Ee,[a("div",Ie,[v(s,{moduleName:"Disks",centerName:""}),v(l),v(m)])])}var He=x(Me,[["render",$e]]);O(He).mount("#app");
