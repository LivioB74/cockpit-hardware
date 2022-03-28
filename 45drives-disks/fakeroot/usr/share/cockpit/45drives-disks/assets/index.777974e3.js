var E=Object.defineProperty;var F=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(i,t,r)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,B=(i,t)=>{for(var r in t||(t={}))H.call(t,r)&&C(i,r,t[r]);if(F)for(var r of F(t))P.call(t,r)&&C(i,r,t[r]);return i};import{r as h,w as b,a as N,b as L,c as _,o as m,d as u,e,n as S,t as c,f as x,g as w,P as $,h as T,i as p,F as O,j,k as y,l as M,m as Y,p as R,q,s as U}from"./vendor.d6a17607.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};X();var k=(i,t)=>{const r=i.__vccOpts||i;for(const[s,a]of t)r[s]=a;return r};const V={props:{moduleName:String,centerName:Boolean},setup(i){const t=h(!0);function r(){let s=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("color-theme");return a===null?s:a==="dark"}return t.value=r(),t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>t.value,(s,a)=>{localStorage.setItem("color-theme",s?"dark":"light"),s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:t}},components:{SunIcon:N,MoonIcon:L}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},G=["src"],K={class:"text-2xl"},W=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Q={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Z(i,t,r,s,a,n){const o=_("SunIcon"),d=_("MoonIcon");return m(),u("div",J,[e("div",z,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:s.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,G),e("h1",K,[e("span",{class:"text-red-800 dark:text-white font-bold",style:S({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),W]),r.centerName?x("",!0):(m(),u("h1",Q,c(r.moduleName),1))]),r.centerName?(m(),u("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:S({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},c(r.moduleName),5)):x("",!0),e("button",{onClick:t[0]||(t[0]=l=>s.darkMode=!s.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[s.darkMode?(m(),w(o,{key:0})):(m(),w(d,{key:1}))])])}var ee=k(V,[["render",Z]]);const se={name:"P5Canvas",mounted(){const i=function(t){var r=2,s=35;t.setup=a=>{t.createCanvas(570,900).parent("p5-canvas")},t.draw=a=>{t.background(245);const n=t.frameCount*3,o=t.sin(t.radians(n))*50;t.push(),t.translate(0,t.height/2),t.fill(66,184,131),t.stroke(53,73,94),t.strokeWeight(5),t.ellipse(s,o,50,50),t.pop(),s+=r,(s>t.width-35||s<35)&&(r*=-1)}};new $(i)}},te={id:"p5-canvas",class:"mx-auto"};function oe(i,t,r,s,a,n){return m(),u("div",te)}var ne=k(se,[["render",oe]]);const re={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(i){const t=h(i.errorMsg),r=h(i.FixButtonHandler);return b(()=>i.FixButtonHandler,s=>{r.value=s}),{errorMsg:t,FixButtonHandler:r}}},de={class:"flex items-center justify-evenly"},ie={class:"rounded-md bg-red-50 p-4"},ae={class:"flex"},ce={class:"flex-shrink-0"},le={class:"ml-3"},me=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ue={class:"mt-2 text-sm text-red-700"},fe={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function _e(i,t,r,s,a,n){const o=_("XCircleIcon");return m(),u("div",de,[e("div",ie,[e("div",ae,[e("div",ce,[p(o,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",le,[me,e("div",ue,[e("ul",fe,[(m(!0),u(O,null,j(s.errorMsg,d=>(m(),u("li",null,c(d),1))),256))])])])])]),r.FixButton?(m(),u("button",{key:0,onClick:t[0]||(t[0]=(...d)=>s.FixButtonHandler&&s.FixButtonHandler(...d)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):x("",!0)])}var D=k(re,[["render",_e]]);function I(i=[],t={},r="out"){const s=y({loading:!1,status:0,stdout:"",stderr:""}),a=Boolean(t.promise);t.superuser||(t.superuser="require"),t.err=r==="out"?"out":"message";async function n(){s.loading=!0,s.status=0,s.stdout="",s.stderr="",cockpit.spawn(i,t).then((o,d)=>{s.stdout=o,s.stderr=d}).catch((o,d)=>{var l;s.stderr=d!=null?d:o.message,s.status=(l=o.exit_status)!=null?l:-1}).finally(()=>{s.loading=!1})}return n(),a?new Promise((o,d)=>{b(s,()=>{s.loading||(s.status!==0?d(B({},s)):o(B({},s)))})}):s}const xe={setup(){const i=h(),t=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),r=h(),s=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(t),console.log(s),{runServerInfo:async()=>{try{const o=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(o.stdout);console.log(d),i.value=o.stdout,t.errorFlag=!1,t.errorMessage.length=0,t.showFixButton=!1}catch(o){console.log(o),t.errorFlag=!0,t.errorMessage.length=0,t.errorMessage.push(o.stderr),t.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.showFixButton=!1}},runLsdev:async()=>{try{const o=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(o.stdout);console.log(d),r.value=o.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(o){console.log(o),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(o.stderr),s.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),s.showFixButton=!1}},serverInfo:i,serverInfoError:t,lsdevInfo:r,lsdevError:s}},components:{RefreshIconOutline:M,ErrorMessage:D}},he={class:"card m-3 grow"},ge=e("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[e("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ve={class:"card-body dark:bg-stone-700"},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:0},ye={class:"w-3/4 m-2"},be={class:"whitespace-pre"},we={key:1},Ie={class:"mt-3 sm:mt-0 sm:ml-4"},Be={key:2,class:"mt-2 flex"},Me={class:"w-3/4 m-2"},Ae={class:"whitespace-pre"},Fe={key:3};function Ce(i,t,r,s,a,n){const o=_("ErrorMessage");return m(),u("div",he,[ge,e("div",ve,[e("div",pe,[e("button",{type:"button",onClick:t[0]||(t[0]=d=>s.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),s.serverInfoError.errorFlag?x("",!0):(m(),u("div",ke,[e("div",ye,[e("div",be,c(s.serverInfo),1)])])),s.serverInfoError.errorFlag?(m(),u("div",we,[p(o,{errorMsg:s.serverInfoError.errorMessage,FixButton:s.serverInfoError.showFixButton,FixButtonHandler:s.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):x("",!0),e("div",Ie,[e("button",{type:"button",onClick:t[1]||(t[1]=d=>s.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),s.lsdevError.errorFlag?x("",!0):(m(),u("div",Be,[e("div",Me,[e("div",Ae,c(s.lsdevInfo),1)])])),s.lsdevError.errorFlag?(m(),u("div",Fe,[p(o,{errorMsg:s.lsdevError.errorMessage,FixButton:s.lsdevError.showFixButton,FixButtonHandler:s.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):x("",!0)])])}var Se=k(xe,[["render",Ce]]);const $e={props:{serverInfo:Object},setup(i){return{serverInfo:y(i.serverInfo)}}},Oe={class:"card mx-2 grow flex flex-col"},je=e("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[e("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Ye={class:"card-body dark:bg-stone-700 grow flex"},De={class:"grow flex flex-col items-stretch"},Ee={class:"mt-0"},He={class:"sm:divide-y sm:divide-stone-200"},Pe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ne=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Le={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Te={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Re={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},qe=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Ue={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Xe=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Controller ID",-1),Ve={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Je=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"PCI Slot",-1),ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function Ge(i,t,r,s,a,n){return m(),u("div",Oe,[je,e("div",Ye,[e("div",De,[e("div",Ee,[e("dl",He,[e("div",Pe,[Ne,e("dd",Le,c(s.serverInfo.Model),1)]),(m(!0),u(O,null,j(s.serverInfo.HBA,o=>(m(),u("div",Te,[e("dt",Re,"HBA"+c(o.Ctl+1),1),e("div",null,[qe,e("dd",Ue,c(o.Model),1)]),e("div",null,[Xe,e("dd",Ve,c(o.Ctl),1)]),e("div",null,[Je,e("dd",ze,c(o["PCI Slot"]),1)])]))),256))])])])])])}var Ke=k($e,[["render",Ge]]);const We={components:{RefreshIconOutline:M},props:{diskInfo:Object},setup(i){const t=Y("currentDisk"),r=h("Click on a disk for more detail."),s=y({}),a=h(i.diskInfo.rows.flat().filter(l=>l.occupied).length),n=h(i.diskInfo.rows.flat().filter(l=>l.occupied).map(l=>Number(l.capacity.split(" ")[0])).reduce((l,g)=>l+g).toFixed(2)),o=h((i.diskInfo.rows.flat().filter(l=>l.occupied).map(l=>Number(l["temp-c"].replace(/[^0-9]/g,""))).reduce((l,g)=>l+g)/Number(a.value)).toFixed(2)),d=()=>{if(!t.value)return;const l=i.diskInfo.rows.flat().filter(g=>g.occupied).find(g=>g["bay-id"]===t.value);if(!l){console.log(`Unable to find info for disk in slot "${t.value}"`),t.value="";return}Object.assign(s,l)};return b(t,d),b(i.diskInfo,d),{wMsg:r,diskCount:a,storageCapacity:n,avgTemp:o,currentDisk:t,diskObj:s}}},Qe={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},Ze={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},es=e("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),ss={class:"mt-3 sm:mt-0 sm:ml-4"},ts={type:"button",class:"card-refresh-btn"},os={class:"card-body dark:bg-stone-700 grow flex flex-col"},ns={class:"grow flex flex-col items-stretch"},rs={class:"mt-0"},ds={class:"sm:divide-y sm:divide-stone-200"},is={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},as=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),cs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ls={class:"sm:divide-y sm:divide-stone-200"},ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},us=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},_s={class:"sm:divide-y sm:divide-stone-200"},xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},hs=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},vs={key:0},ps={class:"grow flex flex-col items-stretch"},ks={class:"mt-0"},ys={class:"sm:divide-y sm:divide-stone-200"},bs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ws=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),Is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bs={class:"sm:divide-y sm:divide-stone-200"},Ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},As=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),Fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Cs={class:"sm:divide-y sm:divide-stone-200"},Ss={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},$s=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Os={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},js={class:"sm:divide-y sm:divide-stone-200"},Ys={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ds=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),Es={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Hs={class:"sm:divide-y sm:divide-stone-200"},Ps={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ns=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ts={class:"sm:divide-y sm:divide-stone-200"},Rs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},qs=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Us={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Xs={class:"sm:divide-y sm:divide-stone-200"},Vs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Js=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),zs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Gs={class:"sm:divide-y sm:divide-stone-200"},Ks={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ws=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Qs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Zs={class:"sm:divide-y sm:divide-stone-200"},et={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},st=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),tt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ot={class:"sm:divide-y sm:divide-stone-200"},nt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},rt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),dt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},it={class:"sm:divide-y sm:divide-stone-200"},at={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ct=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),lt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},mt={class:"sm:divide-y sm:divide-stone-200"},ut={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ft=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),_t={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},xt={class:"sm:divide-y sm:divide-stone-200"},ht={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},gt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),vt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},pt={class:"sm:divide-y sm:divide-stone-200"},kt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},yt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),bt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},wt={class:"sm:divide-y sm:divide-stone-200"},It={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Bt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),Mt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},At={class:"sm:divide-y sm:divide-stone-200"},Ft={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ct=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),St={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},$t={class:"sm:divide-y sm:divide-stone-200"},Ot={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},jt=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),Yt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Dt={class:"sm:divide-y sm:divide-stone-200"},Et={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ht=e("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Pt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Nt={key:1,class:"grow flex justify-center items-center"},Lt={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Tt(i,t,r,s,a,n){const o=_("RefreshIconOutline");return m(),u("div",Qe,[e("div",Ze,[es,e("div",ss,[e("button",ts,[p(o,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",os,[e("div",ns,[e("div",rs,[e("dl",ds,[e("div",is,[as,e("dd",cs,c(s.diskCount),1)])]),e("dl",ls,[e("div",ms,[us,e("dd",fs,c(s.storageCapacity)+" GB ",1)])]),e("dl",_s,[e("div",xs,[hs,e("dd",gs,c(s.avgTemp)+" \xB0C / "+c((s.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),s.currentDisk?(m(),u("div",vs,[e("div",ps,[e("div",ks,[e("dl",ys,[e("div",bs,[ws,e("dd",Is,c(s.diskObj["bay-id"]),1)])]),e("dl",Bs,[e("div",Ms,[As,e("dd",Fs,c(s.diskObj.disk_type),1)])]),e("dl",Cs,[e("div",Ss,[$s,e("dd",Os,c(s.diskObj.dev),1)])]),e("dl",js,[e("div",Ys,[Ds,e("dd",Es,c(s.diskObj["dev-by-path"]),1)])]),e("dl",Hs,[e("div",Ps,[Ns,e("dd",Ls,c(s.diskObj.partitions),1)])]),e("dl",Ts,[e("div",Rs,[qs,e("dd",Us,c(s.diskObj["model-family"]),1)])]),e("dl",Xs,[e("div",Vs,[Js,e("dd",zs,c(s.diskObj["model-name"]),1)])]),e("dl",Gs,[e("div",Ks,[Ws,e("dd",Qs,c(s.diskObj.serial),1)])]),e("dl",Zs,[e("div",et,[st,e("dd",tt,c(s.diskObj.capacity),1)])]),e("dl",ot,[e("div",nt,[rt,e("dd",dt,c(s.diskObj["firm-ver"]),1)])]),e("dl",it,[e("div",at,[ct,e("dd",lt,c(s.diskObj["rotation-rate"]),1)])]),e("dl",mt,[e("div",ut,[ft,e("dd",_t,c(s.diskObj["start-stop-count"]),1)])]),e("dl",xt,[e("div",ht,[gt,e("dd",vt,c(s.diskObj["power-cycle-count"]),1)])]),e("dl",pt,[e("div",kt,[yt,e("dd",bt,c(s.diskObj["temp-c"]),1)])]),e("dl",wt,[e("div",It,[Bt,e("dd",Mt,c(s.diskObj["current-pending-sector"]),1)])]),e("dl",At,[e("div",Ft,[Ct,e("dd",St,c(s.diskObj["offline-uncorrectable"]),1)])]),e("dl",$t,[e("div",Ot,[jt,e("dd",Yt,c(s.diskObj["power-on-time"]),1)])]),e("dl",Dt,[e("div",Et,[Ht,e("dd",Pt,c(s.diskObj.health),1)])])])])])):(m(),u("div",Nt,[e("div",Lt,c(s.wMsg),1)]))])])}var Rt=k(We,[["render",Tt]]);const f={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},v=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],qt={name:"P5Stornado2U",props:{diskInfo:Object},setup(i){const t=h({}),r=Y("currentDisk");b(i,()=>{t.value=i.diskInfo},{immediate:!0,deep:!0});function s(n,o,d){return n?/Seagate Nytro/.test(d)?f.disks.seagate.image:/SEAGATE XS400LE10003/.test(o)?f.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(o)?f.disks.micron5200.image:/Micron_5300_/.test(o)?f.disks.micron5300.image:f.disks.default.image:null}const a=function(n){n.preload=o=>{f.chassis.image=n.loadImage(f.chassis.path),Object.entries(f.disks).forEach(([d,l])=>{f.disks[d].image=n.loadImage(l.path)}),t.value.rows.flat().forEach(d=>{const l=v.findIndex(g=>g.BAY===d["bay-id"]);v[l].occupied=d.occupied,v[l].image=s(d.occupied,d["model-name"],d["model-family"])})},n.setup=o=>{n.createCanvas(f.chassis.image.width,f.chassis.image.height).parent("p5-stornado2u"),n.noLoop()},n.draw=o=>{if(n.image(f.chassis.image,0,0),v.forEach(d=>{d.occupied&&n.image(d.image,d.x,d.y)}),r.value){let d=v.findIndex(l=>l.BAY===r.value);n.fill(200,200,200,200),n.rect(v[d].x,v[d].y,v[d].image.width,v[d].image.height)}},n.mouseClicked=o=>{let d=["1-1","1-2","1-3","1-4","1-5","1-6","1-7","1-8","1-9","1-10","1-11","1-12","1-13","1-14","1-15","1-16","2-1","2-2","2-3","2-4","2-5","2-6","2-7","2-8","2-9","2-10","2-11","2-12","2-13","2-14","2-15","2-16"];r.value=n.random(d),n.redraw()}};return R(()=>{new $(a)}),{diskInfo:t,currentDisk:r}}},Ut={id:"p5-stornado2u",class:"m-2"};function Xt(i,t,r,s,a,n){return m(),u("div",Ut)}var Vt=k(qt,[["render",Xt]]);const Jt={components:{RefreshIconOutline:M,P5Stornado2U:Vt},props:{diskInfo:Object},setup(i){return{diskInfo:h(i.diskInfo)}}},zt={class:"card m-2 flex-auto"},Gt={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Kt=e("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Wt={class:"mt-3 sm:mt-0 sm:ml-4"},Qt={type:"button",class:"card-refresh-btn"},Zt={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function eo(i,t,r,s,a,n){const o=_("RefreshIconOutline"),d=_("P5Stornado2U");return m(),u("div",zt,[e("div",Gt,[Kt,e("div",Wt,[e("button",Qt,[p(o,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",Zt,[p(d,{diskInfo:s.diskInfo},null,8,["diskInfo"])])])}var so=k(Jt,[["render",eo]]);const to={name:"App",components:{P5Canvas:ne,FfdHeader:ee,DebugBox:Se,ServerSection:Ke,DiskSection:Rt,CanvasSection:so,ErrorMessage:D},setup(){const i=h("");q("currentDisk",i);const t=y({serverInfo:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),r=async()=>{try{const n=await I(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(n.stdout);t.serverInfo.content=o,t.serverInfo.finished=!0,t.serverInfo.failed=!1,t.serverInfo.fixAvailable=!1}catch(n){console.log(n),t.serverInfo.content=null,t.serverInfo.finished=!1,t.serverInfo.failed=!0,t.serverInfo.fixAvailable=!1,t.serverInfo.errorMessage.length=0,t.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.serverInfo.errorMessage.push(n.stderr)}},s=async()=>{try{const n=await I(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(n.stdout);t.lsdev.content=o,t.lsdev.finished=!0,t.lsdev.failed=!1,t.lsdev.fixAvailable=!1}catch(n){console.log(n),t.lsdev.content=null,t.lsdev.finished=!1,t.lsdev.failed=!0,t.lsdev.fixAvailable=!1,t.lsdev.errorMessage.length=0,t.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),t.lsdev.errorMessage.push(n.stderr)}};return(async()=>{await r(),await s()})(),{preloadChecks:t,runServerInfo:r,runLsdev:s}}},oo={id:"App"},no={class:"h-screen flex flex-col overflow-hidden"},ro={class:"flex flex-wrap overflow-y-auto"},io={class:"flex p-2 grow flex-wrap"},ao={class:"flex p-2 mx-auto grow flex-col items-stretch"},co={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},lo={key:0,class:"p-2 m-2"},mo={key:1,class:"p-2 m-2"};function uo(i,t,r,s,a,n){const o=_("FfdHeader"),d=_("CanvasSection"),l=_("DiskSection"),g=_("ServerSection"),A=_("ErrorMessage");return m(),u("div",oo,[e("div",no,[p(o,{moduleName:"Disks",centerName:""}),e("div",ro,[e("div",io,[s.preloadChecks.serverInfo.finished&&s.preloadChecks.lsdev.finished?(m(),w(d,{key:0,serverInfo:s.preloadChecks.serverInfo.content,diskInfo:s.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):x("",!0),s.preloadChecks.serverInfo.finished&&s.preloadChecks.lsdev.finished?(m(),w(l,{key:1,diskInfo:s.preloadChecks.lsdev.content},null,8,["diskInfo"])):x("",!0)]),e("div",ao,[s.preloadChecks.serverInfo.finished?(m(),w(g,{key:0,serverInfo:s.preloadChecks.serverInfo.content},null,8,["serverInfo"])):x("",!0)])]),e("div",co,[s.preloadChecks.serverInfo.failed?(m(),u("div",lo,[p(A,{errorMsg:s.preloadChecks.serverInfo.errorMessage,FixButton:s.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:s.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):x("",!0),s.preloadChecks.lsdev.failed?(m(),u("div",mo,[p(A,{errorMsg:s.preloadChecks.lsdev.errorMessage,FixButton:s.preloadChecks.lsdev.fixAvailable,FixButtonHandler:s.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):x("",!0)])])])}var fo=k(to,[["render",uo]]);U(fo).mount("#app");
