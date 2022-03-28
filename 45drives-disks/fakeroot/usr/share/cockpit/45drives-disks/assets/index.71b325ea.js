var E=Object.defineProperty;var A=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(i,t,r)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,B=(i,t)=>{for(var r in t||(t={}))H.call(t,r)&&j(i,r,t[r]);if(A)for(var r of A(t))P.call(t,r)&&j(i,r,t[r]);return i};import{r as g,w as b,a as N,b as L,c as x,o as c,d as m,e as s,n as F,t as l,f,g as w,P as C,h as T,i as p,F as S,j as Y,k as y,l as M,m as D,p as R,q,s as U}from"./vendor.d6a17607.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};X();var k=(i,t)=>{const r=i.__vccOpts||i;for(const[e,a]of t)r[e]=a;return r};const V={props:{moduleName:String,centerName:Boolean},setup(i){const t=g(!0);function r(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("color-theme");return a===null?e:a==="dark"}return t.value=r(),t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>t.value,(e,a)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:t}},components:{SunIcon:N,MoonIcon:L}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},G=["src"],K={class:"text-2xl"},W=s("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Q={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Z(i,t,r,e,a,n){const o=x("SunIcon"),d=x("MoonIcon");return c(),m("div",J,[s("div",z,[s("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,G),s("h1",K,[s("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),W]),r.centerName?f("",!0):(c(),m("h1",Q,l(r.moduleName),1))]),r.centerName?(c(),m("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},l(r.moduleName),5)):f("",!0),s("button",{onClick:t[0]||(t[0]=u=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(c(),w(o,{key:0})):(c(),w(d,{key:1}))])])}var ee=k(V,[["render",Z]]);const se={name:"P5Canvas",mounted(){const i=function(t){var r=2,e=35;t.setup=a=>{t.createCanvas(570,900).parent("p5-canvas")},t.draw=a=>{t.background(245);const n=t.frameCount*3,o=t.sin(t.radians(n))*50;t.push(),t.translate(0,t.height/2),t.fill(66,184,131),t.stroke(53,73,94),t.strokeWeight(5),t.ellipse(e,o,50,50),t.pop(),e+=r,(e>t.width-35||e<35)&&(r*=-1)}};new C(i)}},te={id:"p5-canvas",class:"mx-auto"};function oe(i,t,r,e,a,n){return c(),m("div",te)}var ne=k(se,[["render",oe]]);const re={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(i){const t=g(i.errorMsg),r=g(i.FixButtonHandler);return b(()=>i.FixButtonHandler,e=>{r.value=e}),{errorMsg:t,FixButtonHandler:r}}},de={class:"flex items-center justify-evenly"},ie={class:"rounded-md bg-red-50 p-4"},ae={class:"flex"},ce={class:"flex-shrink-0"},le={class:"ml-3"},me=s("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ue={class:"mt-2 text-sm text-red-700"},fe={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function _e(i,t,r,e,a,n){const o=x("XCircleIcon");return c(),m("div",de,[s("div",ie,[s("div",ae,[s("div",ce,[p(o,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),s("div",le,[me,s("div",ue,[s("ul",fe,[(c(!0),m(S,null,Y(e.errorMsg,d=>(c(),m("li",null,l(d),1))),256))])])])])]),r.FixButton?(c(),m("button",{key:0,onClick:t[0]||(t[0]=(...d)=>e.FixButtonHandler&&e.FixButtonHandler(...d)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var $=k(re,[["render",_e]]);function I(i=[],t={},r="out"){const e=y({loading:!1,status:0,stdout:"",stderr:""}),a=Boolean(t.promise);t.superuser||(t.superuser="require"),t.err=r==="out"?"out":"message";async function n(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(i,t).then((o,d)=>{e.stdout=o,e.stderr=d}).catch((o,d)=>{var u;e.stderr=d!=null?d:o.message,e.status=(u=o.exit_status)!=null?u:-1}).finally(()=>{e.loading=!1})}return n(),a?new Promise((o,d)=>{b(e,()=>{e.loading||(e.status!==0?d(B({},e)):o(B({},e)))})}):e}const xe={setup(){const i=g(),t=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),r=g(),e=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(t),console.log(e),{runServerInfo:async()=>{try{const o=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(o.stdout);console.log(d),i.value=o.stdout,t.errorFlag=!1,t.errorMessage.length=0,t.showFixButton=!1}catch(o){console.log(o),t.errorFlag=!0,t.errorMessage.length=0,t.errorMessage.push(o.stderr),t.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.showFixButton=!1}},runLsdev:async()=>{try{const o=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(o.stdout);console.log(d),r.value=o.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(o){console.log(o),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(o.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:i,serverInfoError:t,lsdevInfo:r,lsdevError:e}},components:{RefreshIconOutline:M,ErrorMessage:$}},ge={class:"card m-3 grow"},he=s("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ve={class:"card-body dark:bg-stone-700"},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:0},ye={class:"w-3/4 m-2"},be={class:"whitespace-pre"},we={key:1},Ie={class:"mt-3 sm:mt-0 sm:ml-4"},Be={key:2,class:"mt-2 flex"},Me={class:"w-3/4 m-2"},Oe={class:"whitespace-pre"},Ae={key:3};function je(i,t,r,e,a,n){const o=x("ErrorMessage");return c(),m("div",ge,[he,s("div",ve,[s("div",pe,[s("button",{type:"button",onClick:t[0]||(t[0]=d=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?f("",!0):(c(),m("div",ke,[s("div",ye,[s("div",be,l(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(c(),m("div",we,[p(o,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),s("div",Ie,[s("button",{type:"button",onClick:t[1]||(t[1]=d=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?f("",!0):(c(),m("div",Be,[s("div",Me,[s("div",Oe,l(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(c(),m("div",Ae,[p(o,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Fe=k(xe,[["render",je]]);const Ce={props:{serverInfo:Object},setup(i){return{serverInfo:y(i.serverInfo)}}},Se={class:"card mx-2 grow flex flex-col"},Ye=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),De={class:"card-body dark:bg-stone-700 grow flex"},$e={class:"grow flex flex-col items-stretch"},Ee={class:"mt-0"},He={class:"sm:divide-y sm:divide-stone-200"},Pe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ne=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Le={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Te={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Re={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},qe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Ue={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Xe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Controller ID",-1),Ve={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Je=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"PCI Slot",-1),ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function Ge(i,t,r,e,a,n){return c(),m("div",Se,[Ye,s("div",De,[s("div",$e,[s("div",Ee,[s("dl",He,[s("div",Pe,[Ne,s("dd",Le,l(e.serverInfo.Model),1)]),(c(!0),m(S,null,Y(e.serverInfo.HBA,o=>(c(),m("div",Te,[s("dt",Re,"HBA"+l(o.Ctl+1),1),s("div",null,[qe,s("dd",Ue,l(o.Model),1)]),s("div",null,[Xe,s("dd",Ve,l(o.Ctl),1)]),s("div",null,[Je,s("dd",ze,l(o["PCI Slot"]),1)])]))),256))])])])])])}var Ke=k(Ce,[["render",Ge]]);const We={components:{RefreshIconOutline:M},props:{diskInfo:Object},setup(i){const t=D("currentDisk"),r=g("Click on a disk for more detail."),e=y({}),a=g(i.diskInfo.rows.flat().filter(u=>u.occupied).length),n=g(i.diskInfo.rows.flat().filter(u=>u.occupied).map(u=>Number(u.capacity.split(" ")[0])).reduce((u,h)=>u+h).toFixed(2)),o=g((i.diskInfo.rows.flat().filter(u=>u.occupied).map(u=>Number(u["temp-c"].replace(/[^0-9]/g,""))).reduce((u,h)=>u+h)/Number(a.value)).toFixed(2)),d=()=>{if(!t.value)return;const u=i.diskInfo.rows.flat().filter(h=>h.occupied).find(h=>h["bay-id"]===t.value);if(!u){console.log(`Unable to find info for disk in slot "${t.value}"`),t.value="";return}Object.assign(e,u)};return b(t,d),b(i.diskInfo,d),{wMsg:r,diskCount:a,storageCapacity:n,avgTemp:o,currentDisk:t,diskObj:e}}},Qe={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},Ze={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},es=s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),ss={class:"mt-3 sm:mt-0 sm:ml-4"},ts={type:"button",class:"card-refresh-btn"},os={class:"card-body dark:bg-stone-700 grow flex flex-col"},ns={class:"grow flex flex-col items-stretch"},rs={class:"mt-0"},ds={class:"sm:divide-y sm:divide-stone-200"},is={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},as=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),cs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ls={class:"sm:divide-y sm:divide-stone-200"},ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},us=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},_s={class:"sm:divide-y sm:divide-stone-200"},xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},gs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),hs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},vs={key:0},ps={class:"grow flex items-start justify-evenly"},ks={class:"m-2 flex flex-col flex-auto"},ys={class:"sm:divide-y sm:divide-stone-200"},bs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ws=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),Is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bs={class:"sm:divide-y sm:divide-stone-200"},Ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Os=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),As={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},js={class:"sm:divide-y sm:divide-stone-200"},Fs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Cs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ys={class:"sm:divide-y sm:divide-stone-200"},Ds={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},$s=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),Es={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Hs={class:"sm:divide-y sm:divide-stone-200"},Ps={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ns=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ts={key:0,class:"sm:divide-y sm:divide-stone-200"},Rs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},qs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Us={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Xs={key:1,class:"sm:divide-y sm:divide-stone-200"},Vs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Js=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),zs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Gs={class:"sm:divide-y sm:divide-stone-200"},Ks={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ws=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Qs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Zs={class:"m-2 flex flex-col flex-auto"},et={class:"sm:divide-y sm:divide-stone-200"},st={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},tt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),ot={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},nt={key:0,class:"sm:divide-y sm:divide-stone-200"},rt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},dt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),it={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},at={key:1,class:"sm:divide-y sm:divide-stone-200"},ct={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},lt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),mt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ut={key:2,class:"sm:divide-y sm:divide-stone-200"},ft={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},_t=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),xt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},gt={key:3,class:"sm:divide-y sm:divide-stone-200"},ht={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},vt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),pt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},kt={class:"sm:divide-y sm:divide-stone-200"},yt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},bt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),wt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},It={key:4,class:"sm:divide-y sm:divide-stone-200"},Bt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Mt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),Ot={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},At={key:5,class:"sm:divide-y sm:divide-stone-200"},jt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ft=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),Ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},St={class:"sm:divide-y sm:divide-stone-200"},Yt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Dt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),$t={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Et={class:"sm:divide-y sm:divide-stone-200"},Ht={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Pt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Nt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Lt={key:1,class:"grow flex justify-center items-center"},Tt={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Rt(i,t,r,e,a,n){const o=x("RefreshIconOutline");return c(),m("div",Qe,[s("div",Ze,[es,s("div",ss,[s("button",ts,[p(o,{class:"h-5 w-5","aria-hidden":"true"})])])]),s("div",os,[s("div",ns,[s("div",rs,[s("dl",ds,[s("div",is,[as,s("dd",cs,l(e.diskCount),1)])]),s("dl",ls,[s("div",ms,[us,s("dd",fs,l(e.storageCapacity)+" GB ",1)])]),s("dl",_s,[s("div",xs,[gs,s("dd",hs,l(e.avgTemp)+" \xB0C / "+l((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),e.currentDisk?(c(),m("div",vs,[s("div",ps,[s("div",ks,[s("dl",ys,[s("div",bs,[ws,s("dd",Is,l(e.diskObj["bay-id"]),1)])]),s("dl",Bs,[s("div",Ms,[Os,s("dd",As,l(e.diskObj.disk_type),1)])]),s("dl",js,[s("div",Fs,[Cs,s("dd",Ss,l(e.diskObj.dev),1)])]),s("dl",Ys,[s("div",Ds,[$s,s("dd",Es,l(e.diskObj["dev-by-path"]),1)])]),s("dl",Hs,[s("div",Ps,[Ns,s("dd",Ls,l(e.diskObj.partitions),1)])]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(c(),m("dl",Ts,[s("div",Rs,[qs,s("dd",Us,l(e.diskObj["model-family"]),1)])])):f("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(c(),m("dl",Xs,[s("div",Vs,[Js,s("dd",zs,l(e.diskObj["model-name"]),1)])])):f("",!0),s("dl",Gs,[s("div",Ks,[Ws,s("dd",Qs,l(e.diskObj.serial),1)])])]),s("div",Zs,[s("dl",et,[s("div",st,[tt,s("dd",ot,l(e.diskObj.capacity),1)])]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(c(),m("dl",nt,[s("div",rt,[dt,s("dd",it,l(e.diskObj["firm-ver"]),1)])])):f("",!0),e.diskObj["rotation-rate"]!=0?(c(),m("dl",at,[s("div",ct,[lt,s("dd",mt,l(e.diskObj["rotation-rate"]),1)])])):f("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(c(),m("dl",ut,[s("div",ft,[_t,s("dd",xt,l(e.diskObj["start-stop-count"]),1)])])):f("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(c(),m("dl",gt,[s("div",ht,[vt,s("dd",pt,l(e.diskObj["power-cycle-count"]),1)])])):f("",!0),s("dl",kt,[s("div",yt,[bt,s("dd",wt,l(e.diskObj["temp-c"]),1)])]),e.diskObj["current-pending-sector"]&&!["?",0].includes(e.diskObj["current-pending-sector"])?(c(),m("dl",It,[s("div",Bt,[Mt,s("dd",Ot,l(e.diskObj["current-pending-sector"]),1)])])):f("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0].includes(e.diskObj["offline-uncorrectable"])?(c(),m("dl",At,[s("div",jt,[Ft,s("dd",Ct,l(e.diskObj["offline-uncorrectable"]),1)])])):f("",!0),s("dl",St,[s("div",Yt,[Dt,s("dd",$t,l(e.diskObj["power-on-time"]),1)])]),s("dl",Et,[s("div",Ht,[Pt,s("dd",Nt,l(e.diskObj.health),1)])])])])])):(c(),m("div",Lt,[s("div",Tt,l(e.wMsg),1)]))])])}var qt=k(We,[["render",Rt]]);const _={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},v=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Ut={name:"P5Stornado2U",props:{diskInfo:Object},setup(i){const t=g({}),r=D("currentDisk");b(i,()=>{t.value=i.diskInfo},{immediate:!0,deep:!0});function e(n,o,d){return n?/Seagate Nytro/.test(d)?_.disks.seagate.image:/SEAGATE XS400LE10003/.test(o)?_.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(o)?_.disks.micron5200.image:/Micron_5300_/.test(o)?_.disks.micron5300.image:_.disks.default.image:null}const a=function(n){n.preload=o=>{_.chassis.image=n.loadImage(_.chassis.path),Object.entries(_.disks).forEach(([d,u])=>{_.disks[d].image=n.loadImage(u.path)}),t.value.rows.flat().forEach(d=>{const u=v.findIndex(h=>h.BAY===d["bay-id"]);v[u].occupied=d.occupied,v[u].image=e(d.occupied,d["model-name"],d["model-family"])})},n.setup=o=>{n.createCanvas(_.chassis.image.width,_.chassis.image.height).parent("p5-stornado2u"),n.noLoop()},n.draw=o=>{if(n.image(_.chassis.image,0,0),v.forEach(d=>{d.occupied&&n.image(d.image,d.x,d.y)}),r.value){let d=v.findIndex(u=>u.BAY===r.value);v[d].image&&(n.fill(200,200,200,200),n.rect(v[d].x,v[d].y,v[d].image.width,v[d].image.height))}},n.mouseClicked=o=>{let d=["1-1","1-2","1-3","1-4","1-5","1-6","1-7","1-8","1-9","1-10","1-11","1-12","1-13","1-14","1-15","1-16","2-1","2-2","2-3","2-4","2-5","2-6","2-7","2-8","2-9","2-10","2-11","2-12","2-13","2-14","2-15","2-16"];r.value=n.random(d),n.redraw()}};return R(()=>{new C(a)}),{diskInfo:t,currentDisk:r}}},Xt={id:"p5-stornado2u",class:"m-2"};function Vt(i,t,r,e,a,n){return c(),m("div",Xt)}var Jt=k(Ut,[["render",Vt]]);const zt={components:{RefreshIconOutline:M,P5Stornado2U:Jt},props:{diskInfo:Object},setup(i){return{diskInfo:g(i.diskInfo)}}},Gt={class:"card m-2 flex-auto"},Kt={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Wt=s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Qt={class:"mt-3 sm:mt-0 sm:ml-4"},Zt={type:"button",class:"card-refresh-btn"},eo={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function so(i,t,r,e,a,n){const o=x("RefreshIconOutline"),d=x("P5Stornado2U");return c(),m("div",Gt,[s("div",Kt,[Wt,s("div",Qt,[s("button",Zt,[p(o,{class:"h-5 w-5","aria-hidden":"true"})])])]),s("div",eo,[p(d,{diskInfo:e.diskInfo},null,8,["diskInfo"])])])}var to=k(zt,[["render",so]]);const oo={name:"App",components:{P5Canvas:ne,FfdHeader:ee,DebugBox:Fe,ServerSection:Ke,DiskSection:qt,CanvasSection:to,ErrorMessage:$},setup(){const i=g("");q("currentDisk",i);const t=y({serverInfo:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),r=async()=>{try{const n=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(n.stdout);t.serverInfo.content=o,t.serverInfo.finished=!0,t.serverInfo.failed=!1,t.serverInfo.fixAvailable=!1}catch(n){console.log(n),t.serverInfo.content=null,t.serverInfo.finished=!1,t.serverInfo.failed=!0,t.serverInfo.fixAvailable=!1,t.serverInfo.errorMessage.length=0,t.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.serverInfo.errorMessage.push(n.stderr)}},e=async()=>{try{const n=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(n.stdout);t.lsdev.content=o,t.lsdev.finished=!0,t.lsdev.failed=!1,t.lsdev.fixAvailable=!1}catch(n){console.log(n),t.lsdev.content=null,t.lsdev.finished=!1,t.lsdev.failed=!0,t.lsdev.fixAvailable=!1,t.lsdev.errorMessage.length=0,t.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),t.lsdev.errorMessage.push(n.stderr)}};return(async()=>{await r(),await e()})(),{preloadChecks:t,runServerInfo:r,runLsdev:e}}},no={id:"App"},ro={class:"h-screen flex flex-col overflow-hidden"},io={class:"flex flex-wrap overflow-y-auto"},ao={class:"flex p-2 grow flex-wrap"},co={class:"flex p-2 mx-auto grow flex-col items-stretch"},lo={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},mo={key:0,class:"p-2 m-2"},uo={key:1,class:"p-2 m-2"};function fo(i,t,r,e,a,n){const o=x("FfdHeader"),d=x("CanvasSection"),u=x("DiskSection"),h=x("ServerSection"),O=x("ErrorMessage");return c(),m("div",no,[s("div",ro,[p(o,{moduleName:"Disks",centerName:""}),s("div",io,[s("div",ao,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(d,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(u,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):f("",!0)]),s("div",co,[e.preloadChecks.serverInfo.finished?(c(),w(h,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):f("",!0)])]),s("div",lo,[e.preloadChecks.serverInfo.failed?(c(),m("div",mo,[p(O,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),e.preloadChecks.lsdev.failed?(c(),m("div",uo,[p(O,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])])}var _o=k(oo,[["render",fo]]);U(_o).mount("#app");
