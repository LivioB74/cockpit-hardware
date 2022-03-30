var E=Object.defineProperty;var j=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var A=(d,t,r)=>t in d?E(d,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[t]=r,B=(d,t)=>{for(var r in t||(t={}))H.call(t,r)&&A(d,r,t[r]);if(j)for(var r of j(t))N.call(t,r)&&A(d,r,t[r]);return d};import{r as g,w as b,a as P,b as L,c as v,o as c,d as m,e as s,n as O,t as l,f as u,g as w,P as C,h as T,i as k,F as S,j as Y,k as y,l as M,m as $,p as q,q as X,s as R}from"./vendor.d6a17607.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};U();var p=(d,t)=>{const r=d.__vccOpts||d;for(const[e,a]of t)r[e]=a;return r};const V={props:{moduleName:String,centerName:Boolean},setup(d){const t=g(!0);function r(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("color-theme");return a===null?e:a==="dark"}return t.value=r(),t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>t.value,(e,a)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:t}},components:{SunIcon:P,MoonIcon:L}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},G=["src"],W={class:"text-2xl"},K=s("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Q={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Z(d,t,r,e,a,o){const n=v("SunIcon"),i=v("MoonIcon");return c(),m("div",J,[s("div",z,[s("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,G),s("h1",W,[s("span",{class:"text-red-800 dark:text-white font-bold",style:O({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),K]),r.centerName?u("",!0):(c(),m("h1",Q,l(r.moduleName),1))]),r.centerName?(c(),m("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:O({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},l(r.moduleName),5)):u("",!0),s("button",{onClick:t[0]||(t[0]=f=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(c(),w(n,{key:0})):(c(),w(i,{key:1}))])])}var ee=p(V,[["render",Z]]);const se={name:"P5Canvas",mounted(){const d=function(t){var r=2,e=35;t.setup=a=>{t.createCanvas(570,900).parent("p5-canvas")},t.draw=a=>{t.background(245);const o=t.frameCount*3,n=t.sin(t.radians(o))*50;t.push(),t.translate(0,t.height/2),t.fill(66,184,131),t.stroke(53,73,94),t.strokeWeight(5),t.ellipse(e,n,50,50),t.pop(),e+=r,(e>t.width-35||e<35)&&(r*=-1)}};new C(d)}},te={id:"p5-canvas",class:"mx-auto"};function oe(d,t,r,e,a,o){return c(),m("div",te)}var ne=p(se,[["render",oe]]);const re={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(d){const t=g(d.errorMsg),r=g(d.FixButtonHandler);return b(()=>d.FixButtonHandler,e=>{r.value=e}),{errorMsg:t,FixButtonHandler:r}}},de={class:"flex items-center justify-evenly"},ie={class:"rounded-md bg-red-50 p-4"},ae={class:"flex"},ce={class:"flex-shrink-0"},le={class:"ml-3"},me=s("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ue={class:"mt-2 text-sm text-red-700"},fe={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function _e(d,t,r,e,a,o){const n=v("XCircleIcon");return c(),m("div",de,[s("div",ie,[s("div",ae,[s("div",ce,[k(n,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),s("div",le,[me,s("div",ue,[s("ul",fe,[(c(!0),m(S,null,Y(e.errorMsg,i=>(c(),m("li",null,l(i),1))),256))])])])])]),r.FixButton?(c(),m("button",{key:0,onClick:t[0]||(t[0]=(...i)=>e.FixButtonHandler&&e.FixButtonHandler(...i)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):u("",!0)])}var D=p(re,[["render",_e]]);function I(d=[],t={},r="out"){const e=y({loading:!1,status:0,stdout:"",stderr:""}),a=Boolean(t.promise);t.superuser||(t.superuser="require"),t.err=r==="out"?"out":"message";async function o(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(d,t).then((n,i)=>{e.stdout=n,e.stderr=i}).catch((n,i)=>{var f;e.stderr=i!=null?i:n.message,e.status=(f=n.exit_status)!=null?f:-1}).finally(()=>{e.loading=!1})}return o(),a?new Promise((n,i)=>{b(e,()=>{e.loading||(e.status!==0?i(B({},e)):n(B({},e)))})}):e}const xe={setup(){const d=g(),t=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),r=g(),e=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(t),console.log(e),{runServerInfo:async()=>{try{const n=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(n.stdout);console.log(i),d.value=n.stdout,t.errorFlag=!1,t.errorMessage.length=0,t.showFixButton=!1}catch(n){console.log(n),t.errorFlag=!0,t.errorMessage.length=0,t.errorMessage.push(n.stderr),t.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.showFixButton=!1}},runLsdev:async()=>{try{const n=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(n.stdout);console.log(i),r.value=n.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(n){console.log(n),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(n.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:d,serverInfoError:t,lsdevInfo:r,lsdevError:e}},components:{RefreshIconOutline:M,ErrorMessage:D}},ge={class:"card m-3 grow"},he=s("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ve={class:"card-body dark:bg-stone-700"},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:0},ye={class:"w-3/4 m-2"},be={class:"whitespace-pre"},we={key:1},Ie={class:"mt-3 sm:mt-0 sm:ml-4"},Be={key:2,class:"mt-2 flex"},Me={class:"w-3/4 m-2"},Fe={class:"whitespace-pre"},je={key:3};function Ae(d,t,r,e,a,o){const n=v("ErrorMessage");return c(),m("div",ge,[he,s("div",ve,[s("div",pe,[s("button",{type:"button",onClick:t[0]||(t[0]=i=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?u("",!0):(c(),m("div",ke,[s("div",ye,[s("div",be,l(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(c(),m("div",we,[k(n,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0),s("div",Ie,[s("button",{type:"button",onClick:t[1]||(t[1]=i=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?u("",!0):(c(),m("div",Be,[s("div",Me,[s("div",Fe,l(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(c(),m("div",je,[k(n,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0)])])}var Oe=p(xe,[["render",Ae]]);const Ce={props:{serverInfo:Object,diskInfo:Object},setup(d){const t=g(d.diskInfo.rows.flat().filter(o=>o.occupied).length),r=g(d.diskInfo.rows.flat().filter(o=>o.occupied).map(o=>Number(o.capacity.split(" ")[0])).reduce((o,n)=>o+n).toFixed(2)),e=g((d.diskInfo.rows.flat().filter(o=>o.occupied).map(o=>Number(o["temp-c"].replace(/[^0-9]/g,""))).reduce((o,n)=>o+n)/Number(t.value)).toFixed(2)),a=()=>{e.value=(d.diskInfo.rows.flat().filter(o=>o.occupied).map(o=>Number(o["temp-c"].replace(/[^0-9]/g,""))).reduce((o,n)=>o+n)/Number(t.value)).toFixed(2),r.value=d.diskInfo.rows.flat().filter(o=>o.occupied).map(o=>Number(o.capacity.split(" ")[0])).reduce((o,n)=>o+n).toFixed(2),t.value=d.diskInfo.rows.flat().filter(o=>o.occupied).length};return b(d.diskInfo,a),{diskCount:t,storageCapacity:r,avgTemp:e}}},Se={class:"card mx-2 grow flex flex-col"},Ye=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),$e={class:"card-body dark:bg-stone-700 grow flex"},De={class:"grow flex flex-col items-stretch"},Ee={class:"mt-0"},He={class:"sm:divide-y sm:divide-stone-200"},Ne={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Pe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Le={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Te={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},qe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),Xe={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Re={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ue=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),Ve={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Je={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},ze=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),Ge={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},We={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ke={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},Qe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},es=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Controller ID ",-1),ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ts=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," PCI Slot ",-1),os={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function ns(d,t,r,e,a,o){return c(),m("div",Se,[Ye,s("div",$e,[s("div",De,[s("div",Ee,[s("dl",He,[s("div",Ne,[Pe,s("dd",Le,l(r.serverInfo.Model),1)]),s("div",Te,[qe,s("dd",Xe,l(e.diskCount),1)]),s("div",Re,[Ue,s("dd",Ve,l(e.storageCapacity)+" GB ",1)]),s("div",Je,[ze,s("dd",Ge,l(e.avgTemp)+" \xB0C / "+l((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)]),(c(!0),m(S,null,Y(r.serverInfo.HBA,n=>(c(),m("div",We,[s("dt",Ke," HBA"+l(n.Ctl+1),1),s("div",null,[Qe,s("dd",Ze,l(n.Model),1)]),s("div",null,[es,s("dd",ss,l(n.Ctl),1)]),s("div",null,[ts,s("dd",os,l(n["PCI Slot"]),1)])]))),256))])])])])])}var rs=p(Ce,[["render",ns]]);const ds={components:{RefreshIconOutline:M},props:{diskInfo:Object},setup(d){const t=$("currentDisk"),r=g("Click on a disk for more detail."),e=y({}),a=()=>{if(!t.value)return;const o=d.diskInfo.rows.flat().filter(n=>n.occupied).find(n=>n["bay-id"]===t.value);if(!o){console.log(`Unable to find info for disk in slot "${t.value}"`),t.value="";return}Object.assign(e,o)};return b(t,a),b(d.diskInfo,a),{wMsg:r,currentDisk:t,diskObj:e}}},is={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},as=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information")],-1),cs={class:"card-body dark:bg-stone-700 grow flex flex-col"},ls={key:0},ms={class:"grow flex items-start justify-evenly"},us={class:"m-2 flex flex-col"},fs={class:"sm:divide-y sm:divide-stone-200"},_s={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},xs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},hs={class:"sm:divide-y sm:divide-stone-200"},vs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ps=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),ks={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ys={class:"sm:divide-y sm:divide-stone-200"},bs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ws=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bs={class:"sm:divide-y sm:divide-stone-200"},Ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Fs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),js={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},As={class:"sm:divide-y sm:divide-stone-200"},Os={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Cs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ys={key:0,class:"sm:divide-y sm:divide-stone-200"},$s={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ds=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Es={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Hs={key:1,class:"sm:divide-y sm:divide-stone-200"},Ns={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ps=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),Ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ts={class:"sm:divide-y sm:divide-stone-200"},qs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Xs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Rs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Us={class:"m-2 flex flex-col"},Vs={class:"sm:divide-y sm:divide-stone-200"},Js={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},zs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),Gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ws={key:0,class:"sm:divide-y sm:divide-stone-200"},Ks={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Qs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),Zs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},et={key:1,class:"sm:divide-y sm:divide-stone-200"},st={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},tt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),ot={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},nt={key:2,class:"sm:divide-y sm:divide-stone-200"},rt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},dt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),it={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},at={key:3,class:"sm:divide-y sm:divide-stone-200"},ct={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},lt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),mt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ut={class:"sm:divide-y sm:divide-stone-200"},ft={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},_t=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),xt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},gt={key:4,class:"sm:divide-y sm:divide-stone-200"},ht={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},vt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),pt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},kt={key:5,class:"sm:divide-y sm:divide-stone-200"},yt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},bt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),wt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},It={class:"sm:divide-y sm:divide-stone-200"},Bt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Mt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),Ft={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},jt={class:"sm:divide-y sm:divide-stone-200"},At={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ot=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},St={key:1,class:"grow flex justify-center items-center"},Yt={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function $t(d,t,r,e,a,o){return c(),m("div",is,[as,s("div",cs,[e.currentDisk?(c(),m("div",ls,[s("div",ms,[s("div",us,[s("dl",fs,[s("div",_s,[xs,s("dd",gs,l(e.diskObj["bay-id"]),1)])]),s("dl",hs,[s("div",vs,[ps,s("dd",ks,l(e.diskObj.disk_type),1)])]),s("dl",ys,[s("div",bs,[ws,s("dd",Is,l(e.diskObj.dev),1)])]),s("dl",Bs,[s("div",Ms,[Fs,s("dd",js,l(e.diskObj["dev-by-path"]),1)])]),s("dl",As,[s("div",Os,[Cs,s("dd",Ss,l(e.diskObj.partitions),1)])]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(c(),m("dl",Ys,[s("div",$s,[Ds,s("dd",Es,l(e.diskObj["model-family"]),1)])])):u("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(c(),m("dl",Hs,[s("div",Ns,[Ps,s("dd",Ls,l(e.diskObj["model-name"]),1)])])):u("",!0),s("dl",Ts,[s("div",qs,[Xs,s("dd",Rs,l(e.diskObj.serial),1)])])]),s("div",Us,[s("dl",Vs,[s("div",Js,[zs,s("dd",Gs,l(e.diskObj.capacity),1)])]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(c(),m("dl",Ws,[s("div",Ks,[Qs,s("dd",Zs,l(e.diskObj["firm-ver"]),1)])])):u("",!0),e.diskObj["rotation-rate"]!=0?(c(),m("dl",et,[s("div",st,[tt,s("dd",ot,l(e.diskObj["rotation-rate"]),1)])])):u("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(c(),m("dl",nt,[s("div",rt,[dt,s("dd",it,l(e.diskObj["start-stop-count"]),1)])])):u("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(c(),m("dl",at,[s("div",ct,[lt,s("dd",mt,l(e.diskObj["power-cycle-count"]),1)])])):u("",!0),s("dl",ut,[s("div",ft,[_t,s("dd",xt,l(e.diskObj["temp-c"].replace(/[^0-9]/g,""))+" \xB0C / "+l((e.diskObj["temp-c"].replace(/[^0-9]/g,"")*(9/5)+32).toFixed(1))+" \xB0F ",1)])]),e.diskObj["current-pending-sector"]&&!["?",0,"0"].includes(e.diskObj["current-pending-sector"])?(c(),m("dl",gt,[s("div",ht,[vt,s("dd",pt,l(e.diskObj["current-pending-sector"]),1)])])):u("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0,"0"].includes(e.diskObj["offline-uncorrectable"])?(c(),m("dl",kt,[s("div",yt,[bt,s("dd",wt,l(e.diskObj["offline-uncorrectable"]),1)])])):u("",!0),s("dl",It,[s("div",Bt,[Mt,s("dd",Ft,l(e.diskObj["power-on-time"]),1)])]),s("dl",jt,[s("div",At,[Ot,s("dd",Ct,l(e.diskObj.health),1)])])])])])):(c(),m("div",St,[s("div",Yt,l(e.wMsg),1)]))])])}var Dt=p(ds,[["render",$t]]);const x={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},h=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Et={name:"P5Stornado2U",props:{diskInfo:Object},setup(d){const t=g({}),r=$("currentDisk");b(d,()=>{t.value=d.diskInfo},{immediate:!0,deep:!0});function e(o,n,i){return o?/Seagate Nytro/.test(i)?x.disks.seagate.image:/SEAGATE XS400LE10003/.test(n)?x.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(n)?x.disks.micron5200.image:/Micron_5300_/.test(n)?x.disks.micron5300.image:x.disks.default.image:null}const a=function(o){o.preload=n=>{x.chassis.image=o.loadImage(x.chassis.path),Object.entries(x.disks).forEach(([i,f])=>{x.disks[i].image=o.loadImage(f.path)}),t.value.rows.flat().forEach(i=>{const f=h.findIndex(_=>_.BAY===i["bay-id"]);h[f].occupied=i.occupied,h[f].image=e(i.occupied,i["model-name"],i["model-family"])})},o.setup=n=>{o.createCanvas(x.chassis.image.width,x.chassis.image.height).parent("p5-stornado2u"),o.noLoop()},o.draw=n=>{if(o.image(x.chassis.image,0,0),h.forEach(i=>{i.occupied&&o.image(i.image,i.x,i.y)}),r.value){let i=h.findIndex(f=>f.BAY===r.value);h[i].image&&(o.fill(255,255,255,50),o.stroke(206,242,212),o.strokeWeight(2),o.rect(h[i].x,h[i].y,h[i].image.width,h[i].image.height))}},o.mouseClicked=n=>{let i=o.mouseX,f=o.mouseY;h.forEach(_=>{_.occupied&&i>_.x&&i<_.x+_.image.width&&f>_.y&&f<_.y+_.image.height&&(r.value=_.BAY,o.redraw())})}};return q(()=>{new C(a)}),{diskInfo:t,currentDisk:r}}},Ht={id:"p5-stornado2u",class:"m-2"};function Nt(d,t,r,e,a,o){return c(),m("div",Ht)}var Pt=p(Et,[["render",Nt]]);const Lt={components:{RefreshIconOutline:M,P5Stornado2U:Pt},props:{diskInfo:Object},setup(d){return{diskInfo:g(d.diskInfo)}}},Tt={class:"card m-2 flex-auto"},qt=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer")],-1),Xt={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Rt(d,t,r,e,a,o){const n=v("P5Stornado2U");return c(),m("div",Tt,[qt,s("div",Xt,[k(n,{diskInfo:e.diskInfo},null,8,["diskInfo"])])])}var Ut=p(Lt,[["render",Rt]]);const Vt={name:"App",components:{P5Canvas:ne,FfdHeader:ee,DebugBox:Oe,ServerSection:rs,DiskSection:Dt,CanvasSection:Ut,ErrorMessage:D},setup(){const d=g("");X("currentDisk",d);const t=y({serverInfo:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),r=async()=>{try{const n=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(n.stdout);t.serverInfo.content=i,t.serverInfo.finished=!0,t.serverInfo.failed=!1,t.serverInfo.fixAvailable=!1}catch(n){console.log(n),t.serverInfo.content=null,t.serverInfo.finished=!1,t.serverInfo.failed=!0,t.serverInfo.fixAvailable=!1,t.serverInfo.errorMessage.length=0,t.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.serverInfo.errorMessage.push(n.stderr)}},e=async()=>{try{const n=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(n.stdout);t.lsdev.content=i,t.lsdev.finished=!0,t.lsdev.failed=!1,t.lsdev.fixAvailable=!1}catch(n){console.log(n),t.lsdev.content=null,t.lsdev.finished=!1,t.lsdev.failed=!0,t.lsdev.fixAvailable=!1,t.lsdev.errorMessage.length=0,t.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),t.lsdev.errorMessage.push(n.stderr)}},a=async()=>{await r(),await e()},o=cockpit.file("/usr/share/cockpit/45drives-disks-vue/udev/state");return o.watch(function(n){console.log("State File Changed: ",n)}),a(),{preloadChecks:t,runServerInfo:r,runLsdev:e,udevState:o}}},Jt={id:"App"},zt={class:"h-screen flex flex-col overflow-hidden"},Gt={class:"flex flex-wrap overflow-y-auto"},Wt={class:"flex p-2 grow flex-wrap"},Kt={class:"flex p-2 mx-auto grow flex-col items-stretch"},Qt={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},Zt={key:0,class:"p-2 m-2"},eo={key:1,class:"p-2 m-2"};function so(d,t,r,e,a,o){const n=v("FfdHeader"),i=v("CanvasSection"),f=v("DiskSection"),_=v("ServerSection"),F=v("ErrorMessage");return c(),m("div",Jt,[s("div",zt,[k(n,{moduleName:"Disks",centerName:""}),s("div",Gt,[s("div",Wt,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(i,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):u("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(f,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):u("",!0)]),s("div",Kt,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(_,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):u("",!0)])]),s("div",Qt,[e.preloadChecks.serverInfo.failed?(c(),m("div",Zt,[k(F,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0),e.preloadChecks.lsdev.failed?(c(),m("div",eo,[k(F,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0)])])])}var to=p(Vt,[["render",so]]);R(to).mount("#app");
