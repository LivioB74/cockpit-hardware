var E=Object.defineProperty;var A=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(i,t,r)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,B=(i,t)=>{for(var r in t||(t={}))H.call(t,r)&&j(i,r,t[r]);if(A)for(var r of A(t))P.call(t,r)&&j(i,r,t[r]);return i};import{r as h,w as b,a as N,b as L,c as x,o as c,d as m,e,n as F,t as l,f,g as w,P as C,h as T,i as p,F as S,j as Y,k as y,l as M,m as D,p as R,q,s as U}from"./vendor.d6a17607.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};X();var k=(i,t)=>{const r=i.__vccOpts||i;for(const[s,a]of t)r[s]=a;return r};const V={props:{moduleName:String,centerName:Boolean},setup(i){const t=h(!0);function r(){let s=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("color-theme");return a===null?s:a==="dark"}return t.value=r(),t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>t.value,(s,a)=>{localStorage.setItem("color-theme",s?"dark":"light"),s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:t}},components:{SunIcon:N,MoonIcon:L}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},G=["src"],K={class:"text-2xl"},W=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Q={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Z(i,t,r,s,a,n){const o=x("SunIcon"),d=x("MoonIcon");return c(),m("div",J,[e("div",z,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:s.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,G),e("h1",K,[e("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),W]),r.centerName?f("",!0):(c(),m("h1",Q,l(r.moduleName),1))]),r.centerName?(c(),m("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},l(r.moduleName),5)):f("",!0),e("button",{onClick:t[0]||(t[0]=u=>s.darkMode=!s.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[s.darkMode?(c(),w(o,{key:0})):(c(),w(d,{key:1}))])])}var ee=k(V,[["render",Z]]);const se={name:"P5Canvas",mounted(){const i=function(t){var r=2,s=35;t.setup=a=>{t.createCanvas(570,900).parent("p5-canvas")},t.draw=a=>{t.background(245);const n=t.frameCount*3,o=t.sin(t.radians(n))*50;t.push(),t.translate(0,t.height/2),t.fill(66,184,131),t.stroke(53,73,94),t.strokeWeight(5),t.ellipse(s,o,50,50),t.pop(),s+=r,(s>t.width-35||s<35)&&(r*=-1)}};new C(i)}},te={id:"p5-canvas",class:"mx-auto"};function oe(i,t,r,s,a,n){return c(),m("div",te)}var ne=k(se,[["render",oe]]);const re={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(i){const t=h(i.errorMsg),r=h(i.FixButtonHandler);return b(()=>i.FixButtonHandler,s=>{r.value=s}),{errorMsg:t,FixButtonHandler:r}}},de={class:"flex items-center justify-evenly"},ie={class:"rounded-md bg-red-50 p-4"},ae={class:"flex"},ce={class:"flex-shrink-0"},le={class:"ml-3"},me=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ue={class:"mt-2 text-sm text-red-700"},fe={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function _e(i,t,r,s,a,n){const o=x("XCircleIcon");return c(),m("div",de,[e("div",ie,[e("div",ae,[e("div",ce,[p(o,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",le,[me,e("div",ue,[e("ul",fe,[(c(!0),m(S,null,Y(s.errorMsg,d=>(c(),m("li",null,l(d),1))),256))])])])])]),r.FixButton?(c(),m("button",{key:0,onClick:t[0]||(t[0]=(...d)=>s.FixButtonHandler&&s.FixButtonHandler(...d)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var $=k(re,[["render",_e]]);function I(i=[],t={},r="out"){const s=y({loading:!1,status:0,stdout:"",stderr:""}),a=Boolean(t.promise);t.superuser||(t.superuser="require"),t.err=r==="out"?"out":"message";async function n(){s.loading=!0,s.status=0,s.stdout="",s.stderr="",cockpit.spawn(i,t).then((o,d)=>{s.stdout=o,s.stderr=d}).catch((o,d)=>{var u;s.stderr=d!=null?d:o.message,s.status=(u=o.exit_status)!=null?u:-1}).finally(()=>{s.loading=!1})}return n(),a?new Promise((o,d)=>{b(s,()=>{s.loading||(s.status!==0?d(B({},s)):o(B({},s)))})}):s}const xe={setup(){const i=h(),t=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),r=h(),s=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(t),console.log(s),{runServerInfo:async()=>{try{const o=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(o.stdout);console.log(d),i.value=o.stdout,t.errorFlag=!1,t.errorMessage.length=0,t.showFixButton=!1}catch(o){console.log(o),t.errorFlag=!0,t.errorMessage.length=0,t.errorMessage.push(o.stderr),t.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.showFixButton=!1}},runLsdev:async()=>{try{const o=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(o.stdout);console.log(d),r.value=o.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(o){console.log(o),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(o.stderr),s.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),s.showFixButton=!1}},serverInfo:i,serverInfoError:t,lsdevInfo:r,lsdevError:s}},components:{RefreshIconOutline:M,ErrorMessage:$}},he={class:"card m-3 grow"},ge=e("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[e("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ve={class:"card-body dark:bg-stone-700"},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:0},ye={class:"w-3/4 m-2"},be={class:"whitespace-pre"},we={key:1},Ie={class:"mt-3 sm:mt-0 sm:ml-4"},Be={key:2,class:"mt-2 flex"},Me={class:"w-3/4 m-2"},Oe={class:"whitespace-pre"},Ae={key:3};function je(i,t,r,s,a,n){const o=x("ErrorMessage");return c(),m("div",he,[ge,e("div",ve,[e("div",pe,[e("button",{type:"button",onClick:t[0]||(t[0]=d=>s.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),s.serverInfoError.errorFlag?f("",!0):(c(),m("div",ke,[e("div",ye,[e("div",be,l(s.serverInfo),1)])])),s.serverInfoError.errorFlag?(c(),m("div",we,[p(o,{errorMsg:s.serverInfoError.errorMessage,FixButton:s.serverInfoError.showFixButton,FixButtonHandler:s.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),e("div",Ie,[e("button",{type:"button",onClick:t[1]||(t[1]=d=>s.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),s.lsdevError.errorFlag?f("",!0):(c(),m("div",Be,[e("div",Me,[e("div",Oe,l(s.lsdevInfo),1)])])),s.lsdevError.errorFlag?(c(),m("div",Ae,[p(o,{errorMsg:s.lsdevError.errorMessage,FixButton:s.lsdevError.showFixButton,FixButtonHandler:s.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Fe=k(xe,[["render",je]]);const Ce={props:{serverInfo:Object},setup(i){return{serverInfo:y(i.serverInfo)}}},Se={class:"card mx-2 grow flex flex-col"},Ye=e("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[e("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),De={class:"card-body dark:bg-stone-700 grow flex"},$e={class:"grow flex flex-col items-stretch"},Ee={class:"mt-0"},He={class:"sm:divide-y sm:divide-stone-200"},Pe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ne=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Le={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Te={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Re={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},qe=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Ue={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Xe=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Controller ID",-1),Ve={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Je=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"PCI Slot",-1),ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function Ge(i,t,r,s,a,n){return c(),m("div",Se,[Ye,e("div",De,[e("div",$e,[e("div",Ee,[e("dl",He,[e("div",Pe,[Ne,e("dd",Le,l(s.serverInfo.Model),1)]),(c(!0),m(S,null,Y(s.serverInfo.HBA,o=>(c(),m("div",Te,[e("dt",Re,"HBA"+l(o.Ctl+1),1),e("div",null,[qe,e("dd",Ue,l(o.Model),1)]),e("div",null,[Xe,e("dd",Ve,l(o.Ctl),1)]),e("div",null,[Je,e("dd",ze,l(o["PCI Slot"]),1)])]))),256))])])])])])}var Ke=k(Ce,[["render",Ge]]);const We={components:{RefreshIconOutline:M},props:{diskInfo:Object},setup(i){const t=D("currentDisk"),r=h("Click on a disk for more detail."),s=y({}),a=h(i.diskInfo.rows.flat().filter(u=>u.occupied).length),n=h(i.diskInfo.rows.flat().filter(u=>u.occupied).map(u=>Number(u.capacity.split(" ")[0])).reduce((u,g)=>u+g).toFixed(2)),o=h((i.diskInfo.rows.flat().filter(u=>u.occupied).map(u=>Number(u["temp-c"].replace(/[^0-9]/g,""))).reduce((u,g)=>u+g)/Number(a.value)).toFixed(2)),d=()=>{if(!t.value)return;const u=i.diskInfo.rows.flat().filter(g=>g.occupied).find(g=>g["bay-id"]===t.value);if(!u){console.log(`Unable to find info for disk in slot "${t.value}"`),t.value="";return}Object.assign(s,u)};return b(t,d),b(i.diskInfo,d),{wMsg:r,diskCount:a,storageCapacity:n,avgTemp:o,currentDisk:t,diskObj:s}}},Qe={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},Ze={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},es=e("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),ss={class:"mt-3 sm:mt-0 sm:ml-4"},ts={type:"button",class:"card-refresh-btn"},os={class:"card-body dark:bg-stone-700 grow flex flex-col"},ns={class:"grow flex flex-col items-stretch"},rs={class:"mt-0"},ds={class:"sm:divide-y sm:divide-stone-200"},is={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},as=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),cs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ls={class:"sm:divide-y sm:divide-stone-200"},ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},us=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},_s={class:"sm:divide-y sm:divide-stone-200"},xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},hs=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},vs={key:0},ps={class:"grow flex items-start justify-evenly"},ks={class:"m-2 flex flex-col"},ys={class:"sm:divide-y sm:divide-stone-200"},bs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ws=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),Is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bs={class:"sm:divide-y sm:divide-stone-200"},Ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Os=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),As={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},js={class:"sm:divide-y sm:divide-stone-200"},Fs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Cs=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ys={class:"sm:divide-y sm:divide-stone-200"},Ds={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},$s=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),Es={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Hs={class:"sm:divide-y sm:divide-stone-200"},Ps={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ns=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ts={class:"m-2 flex flex-col"},Rs={key:0,class:"sm:divide-y sm:divide-stone-200"},qs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Us=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Xs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Vs={key:1,class:"sm:divide-y sm:divide-stone-200"},Js={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},zs=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),Gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ks={class:"sm:divide-y sm:divide-stone-200"},Ws={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Qs=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Zs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},et={class:"m-2 flex flex-col"},st={class:"sm:divide-y sm:divide-stone-200"},tt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ot=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),nt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},rt={key:0,class:"sm:divide-y sm:divide-stone-200"},dt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},it=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),at={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ct={key:1,class:"sm:divide-y sm:divide-stone-200"},lt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},mt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),ut={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ft={key:2,class:"sm:divide-y sm:divide-stone-200"},_t={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},xt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),ht={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},gt={key:3,class:"sm:divide-y sm:divide-stone-200"},vt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},pt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),kt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},yt={class:"sm:divide-y sm:divide-stone-200"},bt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},wt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),It={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bt={key:4,class:"sm:divide-y sm:divide-stone-200"},Mt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ot=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),At={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},jt={key:5,class:"sm:divide-y sm:divide-stone-200"},Ft={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ct=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),St={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Yt={class:"sm:divide-y sm:divide-stone-200"},Dt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},$t=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),Et={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ht={class:"sm:divide-y sm:divide-stone-200"},Pt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Nt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Lt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Tt={key:1,class:"grow flex justify-center items-center"},Rt={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function qt(i,t,r,s,a,n){const o=x("RefreshIconOutline");return c(),m("div",Qe,[e("div",Ze,[es,e("div",ss,[e("button",ts,[p(o,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",os,[e("div",ns,[e("div",rs,[e("dl",ds,[e("div",is,[as,e("dd",cs,l(s.diskCount),1)])]),e("dl",ls,[e("div",ms,[us,e("dd",fs,l(s.storageCapacity)+" GB ",1)])]),e("dl",_s,[e("div",xs,[hs,e("dd",gs,l(s.avgTemp)+" \xB0C / "+l((s.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),s.currentDisk?(c(),m("div",vs,[e("div",ps,[e("div",ks,[e("dl",ys,[e("div",bs,[ws,e("dd",Is,l(s.diskObj["bay-id"]),1)])]),e("dl",Bs,[e("div",Ms,[Os,e("dd",As,l(s.diskObj.disk_type),1)])]),e("dl",js,[e("div",Fs,[Cs,e("dd",Ss,l(s.diskObj.dev),1)])]),e("dl",Ys,[e("div",Ds,[$s,e("dd",Es,l(s.diskObj["dev-by-path"]),1)])]),e("dl",Hs,[e("div",Ps,[Ns,e("dd",Ls,l(s.diskObj.partitions),1)])]),e("div",Ts,[s.diskObj["model-family"]&&!["?"].includes(s.diskObj["model-family"])?(c(),m("dl",Rs,[e("div",qs,[Us,e("dd",Xs,l(s.diskObj["model-family"]),1)])])):f("",!0),s.diskObj["model-name"]&&!["?"].includes(s.diskObj["model-name"])?(c(),m("dl",Vs,[e("div",Js,[zs,e("dd",Gs,l(s.diskObj["model-name"]),1)])])):f("",!0),e("dl",Ks,[e("div",Ws,[Qs,e("dd",Zs,l(s.diskObj.serial),1)])])])]),e("div",et,[e("dl",st,[e("div",tt,[ot,e("dd",nt,l(s.diskObj.capacity),1)])]),s.diskObj["firm-ver"]&&!["?"].includes(s.diskObj["firm-ver"])?(c(),m("dl",rt,[e("div",dt,[it,e("dd",at,l(s.diskObj["firm-ver"]),1)])])):f("",!0),s.diskObj["rotation-rate"]!=0?(c(),m("dl",ct,[e("div",lt,[mt,e("dd",ut,l(s.diskObj["rotation-rate"]),1)])])):f("",!0),s.diskObj["start-stop-count"]&&!["?"].includes(s.diskObj["start-stop-count"])?(c(),m("dl",ft,[e("div",_t,[xt,e("dd",ht,l(s.diskObj["start-stop-count"]),1)])])):f("",!0),s.diskObj["power-cycle-count"]&&!["?"].includes(s.diskObj["power-cycle-count"])?(c(),m("dl",gt,[e("div",vt,[pt,e("dd",kt,l(s.diskObj["power-cycle-count"]),1)])])):f("",!0),e("dl",yt,[e("div",bt,[wt,e("dd",It,l(s.diskObj["temp-c"]),1)])]),s.diskObj["current-pending-sector"]&&!["?",0].includes(s.diskObj["current-pending-sector"])?(c(),m("dl",Bt,[e("div",Mt,[Ot,e("dd",At,l(s.diskObj["current-pending-sector"]),1)])])):f("",!0),s.diskObj["offline-uncorrectable"]&&!["?",0].includes(s.diskObj["offline-uncorrectable"])?(c(),m("dl",jt,[e("div",Ft,[Ct,e("dd",St,l(s.diskObj["offline-uncorrectable"]),1)])])):f("",!0),e("dl",Yt,[e("div",Dt,[$t,e("dd",Et,l(s.diskObj["power-on-time"]),1)])]),e("dl",Ht,[e("div",Pt,[Nt,e("dd",Lt,l(s.diskObj.health),1)])])])])])):(c(),m("div",Tt,[e("div",Rt,l(s.wMsg),1)]))])])}var Ut=k(We,[["render",qt]]);const _={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},v=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Xt={name:"P5Stornado2U",props:{diskInfo:Object},setup(i){const t=h({}),r=D("currentDisk");b(i,()=>{t.value=i.diskInfo},{immediate:!0,deep:!0});function s(n,o,d){return n?/Seagate Nytro/.test(d)?_.disks.seagate.image:/SEAGATE XS400LE10003/.test(o)?_.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(o)?_.disks.micron5200.image:/Micron_5300_/.test(o)?_.disks.micron5300.image:_.disks.default.image:null}const a=function(n){n.preload=o=>{_.chassis.image=n.loadImage(_.chassis.path),Object.entries(_.disks).forEach(([d,u])=>{_.disks[d].image=n.loadImage(u.path)}),t.value.rows.flat().forEach(d=>{const u=v.findIndex(g=>g.BAY===d["bay-id"]);v[u].occupied=d.occupied,v[u].image=s(d.occupied,d["model-name"],d["model-family"])})},n.setup=o=>{n.createCanvas(_.chassis.image.width,_.chassis.image.height).parent("p5-stornado2u"),n.noLoop()},n.draw=o=>{if(n.image(_.chassis.image,0,0),v.forEach(d=>{d.occupied&&n.image(d.image,d.x,d.y)}),r.value){let d=v.findIndex(u=>u.BAY===r.value);v[d].image&&(n.fill(200,200,200,200),n.rect(v[d].x,v[d].y,v[d].image.width,v[d].image.height))}},n.mouseClicked=o=>{let d=["1-1","1-2","1-3","1-4","1-5","1-6","1-7","1-8","1-9","1-10","1-11","1-12","1-13","1-14","1-15","1-16","2-1","2-2","2-3","2-4","2-5","2-6","2-7","2-8","2-9","2-10","2-11","2-12","2-13","2-14","2-15","2-16"];r.value=n.random(d),n.redraw()}};return R(()=>{new C(a)}),{diskInfo:t,currentDisk:r}}},Vt={id:"p5-stornado2u",class:"m-2"};function Jt(i,t,r,s,a,n){return c(),m("div",Vt)}var zt=k(Xt,[["render",Jt]]);const Gt={components:{RefreshIconOutline:M,P5Stornado2U:zt},props:{diskInfo:Object},setup(i){return{diskInfo:h(i.diskInfo)}}},Kt={class:"card m-2 flex-auto"},Wt={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Qt=e("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Zt={class:"mt-3 sm:mt-0 sm:ml-4"},eo={type:"button",class:"card-refresh-btn"},so={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function to(i,t,r,s,a,n){const o=x("RefreshIconOutline"),d=x("P5Stornado2U");return c(),m("div",Kt,[e("div",Wt,[Qt,e("div",Zt,[e("button",eo,[p(o,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",so,[p(d,{diskInfo:s.diskInfo},null,8,["diskInfo"])])])}var oo=k(Gt,[["render",to]]);const no={name:"App",components:{P5Canvas:ne,FfdHeader:ee,DebugBox:Fe,ServerSection:Ke,DiskSection:Ut,CanvasSection:oo,ErrorMessage:$},setup(){const i=h("");q("currentDisk",i);const t=y({serverInfo:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),r=async()=>{try{const n=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(n.stdout);t.serverInfo.content=o,t.serverInfo.finished=!0,t.serverInfo.failed=!1,t.serverInfo.fixAvailable=!1}catch(n){console.log(n),t.serverInfo.content=null,t.serverInfo.finished=!1,t.serverInfo.failed=!0,t.serverInfo.fixAvailable=!1,t.serverInfo.errorMessage.length=0,t.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.serverInfo.errorMessage.push(n.stderr)}},s=async()=>{try{const n=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(n.stdout);t.lsdev.content=o,t.lsdev.finished=!0,t.lsdev.failed=!1,t.lsdev.fixAvailable=!1}catch(n){console.log(n),t.lsdev.content=null,t.lsdev.finished=!1,t.lsdev.failed=!0,t.lsdev.fixAvailable=!1,t.lsdev.errorMessage.length=0,t.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),t.lsdev.errorMessage.push(n.stderr)}};return(async()=>{await r(),await s()})(),{preloadChecks:t,runServerInfo:r,runLsdev:s}}},ro={id:"App"},io={class:"h-screen flex flex-col overflow-hidden"},ao={class:"flex flex-wrap overflow-y-auto"},co={class:"flex p-2 grow flex-wrap"},lo={class:"flex p-2 mx-auto grow flex-col items-stretch"},mo={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},uo={key:0,class:"p-2 m-2"},fo={key:1,class:"p-2 m-2"};function _o(i,t,r,s,a,n){const o=x("FfdHeader"),d=x("CanvasSection"),u=x("DiskSection"),g=x("ServerSection"),O=x("ErrorMessage");return c(),m("div",ro,[e("div",io,[p(o,{moduleName:"Disks",centerName:""}),e("div",ao,[e("div",co,[s.preloadChecks.serverInfo.finished&&s.preloadChecks.lsdev.finished?(c(),w(d,{key:0,serverInfo:s.preloadChecks.serverInfo.content,diskInfo:s.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):f("",!0),s.preloadChecks.serverInfo.finished&&s.preloadChecks.lsdev.finished?(c(),w(u,{key:1,diskInfo:s.preloadChecks.lsdev.content},null,8,["diskInfo"])):f("",!0)]),e("div",lo,[s.preloadChecks.serverInfo.finished?(c(),w(g,{key:0,serverInfo:s.preloadChecks.serverInfo.content},null,8,["serverInfo"])):f("",!0)])]),e("div",mo,[s.preloadChecks.serverInfo.failed?(c(),m("div",uo,[p(O,{errorMsg:s.preloadChecks.serverInfo.errorMessage,FixButton:s.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:s.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),s.preloadChecks.lsdev.failed?(c(),m("div",fo,[p(O,{errorMsg:s.preloadChecks.lsdev.errorMessage,FixButton:s.preloadChecks.lsdev.fixAvailable,FixButtonHandler:s.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])])}var xo=k(no,[["render",_o]]);U(xo).mount("#app");
