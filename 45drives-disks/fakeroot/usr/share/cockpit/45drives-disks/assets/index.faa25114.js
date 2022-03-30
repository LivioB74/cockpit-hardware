var N=Object.defineProperty;var C=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var S=(a,t,d)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[t]=d,O=(a,t)=>{for(var d in t||(t={}))L.call(t,d)&&S(a,d,t[d]);if(C)for(var d of C(t))J.call(t,d)&&S(a,d,t[d]);return a};import{r as v,w as I,a as T,b as q,c as p,o as l,d as u,e as s,n as D,t as m,f as _,g as B,P as Y,h as X,i as w,F as $,j as E,k as y,l as H,m as M,p as U,q as A,s as R}from"./vendor.d6a17607.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function d(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(n){if(n.ep)return;n.ep=!0;const c=d(n);fetch(n.href,c)}};V();var k=(a,t)=>{const d=a.__vccOpts||a;for(const[e,n]of t)d[e]=n;return d};const G={props:{moduleName:String,centerName:Boolean},setup(a){const t=v(!0);function d(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?e:n==="dark"}return t.value=d(),t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),I(()=>t.value,(e,n)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:t}},components:{SunIcon:T,MoonIcon:q}},z={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},W={class:"flex flex-row items-baseline basis-10"},K=["src"],Q={class:"text-2xl"},Z=s("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),ee={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function se(a,t,d,e,n,c){const o=p("SunIcon"),r=p("MoonIcon");return l(),u("div",z,[s("div",W,[s("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,K),s("h1",Q,[s("span",{class:"text-red-800 dark:text-white font-bold",style:D({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Z]),d.centerName?_("",!0):(l(),u("h1",ee,m(d.moduleName),1))]),d.centerName?(l(),u("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:D({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},m(d.moduleName),5)):_("",!0),s("button",{onClick:t[0]||(t[0]=i=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(l(),B(o,{key:0})):(l(),B(r,{key:1}))])])}var te=k(G,[["render",se]]);const oe={name:"P5Canvas",mounted(){const a=function(t){var d=2,e=35;t.setup=n=>{t.createCanvas(570,900).parent("p5-canvas")},t.draw=n=>{t.background(245);const c=t.frameCount*3,o=t.sin(t.radians(c))*50;t.push(),t.translate(0,t.height/2),t.fill(66,184,131),t.stroke(53,73,94),t.strokeWeight(5),t.ellipse(e,o,50,50),t.pop(),e+=d,(e>t.width-35||e<35)&&(d*=-1)}};new Y(a)}},ne={id:"p5-canvas",class:"mx-auto"};function re(a,t,d,e,n,c){return l(),u("div",ne)}var de=k(oe,[["render",re]]);const ie={components:{XCircleIcon:X},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(a){const t=v(a.errorMsg),d=v(a.FixButtonHandler);return I(()=>a.FixButtonHandler,e=>{d.value=e}),{errorMsg:t,FixButtonHandler:d}}},ae={class:"flex items-center justify-evenly"},ce={class:"rounded-md bg-red-50 p-4"},le={class:"flex"},me={class:"flex-shrink-0"},ue={class:"ml-3"},fe=s("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),_e={class:"mt-2 text-sm text-red-700"},ge={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function xe(a,t,d,e,n,c){const o=p("XCircleIcon");return l(),u("div",ae,[s("div",ce,[s("div",le,[s("div",me,[w(o,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),s("div",ue,[fe,s("div",_e,[s("ul",ge,[(l(!0),u($,null,E(e.errorMsg,r=>(l(),u("li",null,m(r),1))),256))])])])])]),d.FixButton?(l(),u("button",{key:0,onClick:t[0]||(t[0]=(...r)=>e.FixButtonHandler&&e.FixButtonHandler(...r)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):_("",!0)])}var P=k(ie,[["render",xe]]);function F(a=[],t={},d="out"){const e=y({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(t.promise);t.superuser||(t.superuser="require"),t.err=d==="out"?"out":"message";async function c(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(a,t).then((o,r)=>{e.stdout=o,e.stderr=r}).catch((o,r)=>{var i;e.stderr=r!=null?r:o.message,e.status=(i=o.exit_status)!=null?i:-1}).finally(()=>{e.loading=!1})}return c(),n?new Promise((o,r)=>{I(e,()=>{e.loading||(e.status!==0?r(O({},e)):o(O({},e)))})}):e}const ve={setup(){const a=v(),t=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),d=v(),e=y({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(t),console.log(e),{runServerInfo:async()=>{try{const o=await F(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let r=JSON.parse(o.stdout);console.log(r),a.value=o.stdout,t.errorFlag=!1,t.errorMessage.length=0,t.showFixButton=!1}catch(o){console.log(o),t.errorFlag=!0,t.errorMessage.length=0,t.errorMessage.push(o.stderr),t.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.showFixButton=!1}},runLsdev:async()=>{try{const o=await F(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let r=JSON.parse(o.stdout);console.log(r),d.value=o.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(o){console.log(o),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(o.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:a,serverInfoError:t,lsdevInfo:d,lsdevError:e}},components:{RefreshIconOutline:H,ErrorMessage:P}},he={class:"card m-3 grow"},pe=s("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ke={class:"card-body dark:bg-stone-700"},ye={class:"mt-3 sm:mt-0 sm:ml-4"},be={key:0},we={class:"w-3/4 m-2"},Ie={class:"whitespace-pre"},Be={key:1},Me={class:"mt-3 sm:mt-0 sm:ml-4"},Fe={key:2,class:"mt-2 flex"},je={class:"w-3/4 m-2"},Oe={class:"whitespace-pre"},Ae={key:3};function Ce(a,t,d,e,n,c){const o=p("ErrorMessage");return l(),u("div",he,[pe,s("div",ke,[s("div",ye,[s("button",{type:"button",onClick:t[0]||(t[0]=r=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?_("",!0):(l(),u("div",be,[s("div",we,[s("div",Ie,m(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(l(),u("div",Be,[w(o,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):_("",!0),s("div",Me,[s("button",{type:"button",onClick:t[1]||(t[1]=r=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?_("",!0):(l(),u("div",Fe,[s("div",je,[s("div",Oe,m(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(l(),u("div",Ae,[w(o,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):_("",!0)])])}var Se=k(ve,[["render",Ce]]);const De={props:{serverInfo:Object,diskInfo:Object},setup(a){const t=M("lsdevJson"),d=v(a.diskInfo.rows.flat().filter(r=>r.occupied).length),e=r=>{let i={TB:1e3,GB:1};return Number(r.split(" ")[0])*i[r.split(" ")[1]]},n=v(a.diskInfo.rows.flat().filter(r=>r.occupied).map(r=>e(r.capacity)).reduce((r,i)=>r+i).toFixed(2)),c=v((a.diskInfo.rows.flat().filter(r=>r.occupied).map(r=>Number(r["temp-c"].replace(/[^0-9]/g,""))).reduce((r,i)=>r+i)/Number(d.value)).toFixed(2));return I(t,()=>{d.value=t.rows.flat().filter(r=>r.occupied).length,n.value=t.rows.flat().filter(r=>r.occupied).map(r=>e(r.capacity)).reduce((r,i)=>r+i).toFixed(2),c.value=(a.diskInfo.rows.flat().filter(r=>r.occupied).map(r=>Number(r["temp-c"].replace(/[^0-9]/g,""))).reduce((r,i)=>r+i)/Number(d.value)).toFixed(2)}),{diskCount:d,storageCapacity:n,avgTemp:c,lsdevJson:t}}},Ye={class:"card mx-2 grow flex flex-col"},$e=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Ee={class:"card-body dark:bg-stone-700 grow flex"},He={class:"grow flex flex-col items-stretch"},Pe={class:"mt-0"},Ne={class:"sm:divide-y sm:divide-stone-200"},Le={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Je=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Te={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},qe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Xe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),Ue={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Re={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ve=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),Ge={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},ze={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},We=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),Ke={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Qe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ze={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},es=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ts=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Controller ID ",-1),os={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ns=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," PCI Slot ",-1),rs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function ds(a,t,d,e,n,c){return l(),u("div",Ye,[$e,s("div",Ee,[s("div",He,[s("div",Pe,[s("dl",Ne,[s("div",Le,[Je,s("dd",Te,m(d.serverInfo.Model),1)]),s("div",qe,[Xe,s("dd",Ue,m(e.diskCount),1)]),s("div",Re,[Ve,s("dd",Ge,m(e.storageCapacity)+" GB ",1)]),s("div",ze,[We,s("dd",Ke,m(e.avgTemp)+" \xB0C / "+m((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)]),(l(!0),u($,null,E(d.serverInfo.HBA,o=>(l(),u("div",Qe,[s("dt",Ze," HBA"+m(o.Ctl+1),1),s("div",null,[es,s("dd",ss,m(o.Model),1)]),s("div",null,[ts,s("dd",os,m(o.Ctl),1)]),s("div",null,[ns,s("dd",rs,m(o["PCI Slot"]),1)])]))),256))])])])])])}var is=k(De,[["render",ds]]);const as={components:{RefreshIconOutline:H},props:{diskInfo:Object},setup(a){const t=M("currentDisk"),d=v("Click on a disk for more detail."),e=y({}),n=M("lsdevJson"),c=()=>{if(!t.value)return;const o=n.rows.flat().filter(r=>r.occupied).find(r=>r["bay-id"]===t.value);if(!o){console.log(`Unable to find info for disk in slot "${t.value}"`),t.value="";return}Object.assign(e,o)};return I(t,c),I(n,c),{wMsg:d,currentDisk:t,diskObj:e,lsdevJson:n}}},cs={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},ls=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information")],-1),ms={class:"card-body dark:bg-stone-700 grow flex flex-col"},us={key:0},fs={class:"grow flex items-start justify-evenly"},_s={class:"m-2 flex flex-col"},gs={class:"sm:divide-y sm:divide-stone-200"},xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},vs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),hs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ps={class:"sm:divide-y sm:divide-stone-200"},ks={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ys=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),bs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ws={class:"sm:divide-y sm:divide-stone-200"},Is={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Bs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Ms={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Fs={class:"sm:divide-y sm:divide-stone-200"},js={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Os=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),As={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Cs={class:"sm:divide-y sm:divide-stone-200"},Ss={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ds=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Ys={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},$s={key:0,class:"sm:divide-y sm:divide-stone-200"},Es={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Hs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Ps={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ns={key:1,class:"sm:divide-y sm:divide-stone-200"},Ls={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Js=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),Ts={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},qs={class:"sm:divide-y sm:divide-stone-200"},Xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Us=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Rs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Vs={class:"m-2 flex flex-col"},Gs={class:"sm:divide-y sm:divide-stone-200"},zs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ws=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),Ks={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Qs={key:0,class:"sm:divide-y sm:divide-stone-200"},Zs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},et=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),st={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},tt={key:1,class:"sm:divide-y sm:divide-stone-200"},ot={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},nt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),rt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},dt={key:2,class:"sm:divide-y sm:divide-stone-200"},it={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},at=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},lt={key:3,class:"sm:divide-y sm:divide-stone-200"},mt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ut=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),ft={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},_t={class:"sm:divide-y sm:divide-stone-200"},gt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},xt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),vt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ht={key:4,class:"sm:divide-y sm:divide-stone-200"},pt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},kt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),yt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},bt={key:5,class:"sm:divide-y sm:divide-stone-200"},wt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},It=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),Bt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Mt={class:"sm:divide-y sm:divide-stone-200"},Ft={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},jt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),Ot={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},At={class:"sm:divide-y sm:divide-stone-200"},Ct={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},St=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Dt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Yt={key:1,class:"grow flex justify-center items-center"},$t={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Et(a,t,d,e,n,c){return l(),u("div",cs,[ls,s("div",ms,[e.currentDisk?(l(),u("div",us,[s("div",fs,[s("div",_s,[s("dl",gs,[s("div",xs,[vs,s("dd",hs,m(e.diskObj["bay-id"]),1)])]),s("dl",ps,[s("div",ks,[ys,s("dd",bs,m(e.diskObj.disk_type),1)])]),s("dl",ws,[s("div",Is,[Bs,s("dd",Ms,m(e.diskObj.dev),1)])]),s("dl",Fs,[s("div",js,[Os,s("dd",As,m(e.diskObj["dev-by-path"]),1)])]),s("dl",Cs,[s("div",Ss,[Ds,s("dd",Ys,m(e.diskObj.partitions),1)])]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(l(),u("dl",$s,[s("div",Es,[Hs,s("dd",Ps,m(e.diskObj["model-family"]),1)])])):_("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(l(),u("dl",Ns,[s("div",Ls,[Js,s("dd",Ts,m(e.diskObj["model-name"]),1)])])):_("",!0),s("dl",qs,[s("div",Xs,[Us,s("dd",Rs,m(e.diskObj.serial),1)])])]),s("div",Vs,[s("dl",Gs,[s("div",zs,[Ws,s("dd",Ks,m(e.diskObj.capacity),1)])]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(l(),u("dl",Qs,[s("div",Zs,[et,s("dd",st,m(e.diskObj["firm-ver"]),1)])])):_("",!0),e.diskObj["rotation-rate"]!=0?(l(),u("dl",tt,[s("div",ot,[nt,s("dd",rt,m(e.diskObj["rotation-rate"]),1)])])):_("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(l(),u("dl",dt,[s("div",it,[at,s("dd",ct,m(e.diskObj["start-stop-count"]),1)])])):_("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(l(),u("dl",lt,[s("div",mt,[ut,s("dd",ft,m(e.diskObj["power-cycle-count"]),1)])])):_("",!0),s("dl",_t,[s("div",gt,[xt,s("dd",vt,m(e.diskObj["temp-c"].replace(/[^0-9]/g,""))+" \xB0C / "+m((e.diskObj["temp-c"].replace(/[^0-9]/g,"")*(9/5)+32).toFixed(1))+" \xB0F ",1)])]),e.diskObj["current-pending-sector"]&&!["?",0,"0"].includes(e.diskObj["current-pending-sector"])?(l(),u("dl",ht,[s("div",pt,[kt,s("dd",yt,m(e.diskObj["current-pending-sector"]),1)])])):_("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0,"0"].includes(e.diskObj["offline-uncorrectable"])?(l(),u("dl",bt,[s("div",wt,[It,s("dd",Bt,m(e.diskObj["offline-uncorrectable"]),1)])])):_("",!0),s("dl",Mt,[s("div",Ft,[jt,s("dd",Ot,m(e.diskObj["power-on-time"]),1)])]),s("dl",At,[s("div",Ct,[St,s("dd",Dt,m(e.diskObj.health),1)])])])])])):(l(),u("div",Yt,[s("div",$t,m(e.wMsg),1)]))])])}var Ht=k(as,[["render",Et]]);const h={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},x=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Pt={name:"P5Stornado2U",props:{diskInfo:Object},setup(a){const t=v({}),d=M("currentDisk"),e=M("lsdevJson");I(e,()=>{t.value=e,t.value.rows.flat().forEach(o=>{const r=x.findIndex(i=>i.BAY===o["bay-id"]);x[r].occupied=o.occupied,x[r].image=n(o.occupied,o["model-name"],o["model-family"])})},{immediate:!0,deep:!0});function n(o,r,i){return o?/Seagate Nytro/.test(i)?h.disks.seagate.image:/SEAGATE XS400LE10003/.test(r)?h.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(r)?h.disks.micron5200.image:/Micron_5300_/.test(r)?h.disks.micron5300.image:h.disks.default.image:null}const c=function(o){o.preload=r=>{h.chassis.image=o.loadImage(h.chassis.path),Object.entries(h.disks).forEach(([i,g])=>{h.disks[i].image=o.loadImage(g.path)}),t.value.rows.flat().forEach(i=>{const g=x.findIndex(f=>f.BAY===i["bay-id"]);x[g].occupied=i.occupied,x[g].image=n(i.occupied,i["model-name"],i["model-family"])})},o.setup=r=>{o.createCanvas(h.chassis.image.width,h.chassis.image.height).parent("p5-stornado2u")},o.draw=r=>{if(o.image(h.chassis.image,0,0),x.forEach(i=>{i.occupied&&o.image(i.image,i.x,i.y)}),d.value){let i=x.findIndex(g=>g.BAY===d.value);x[i].image&&(o.fill(255,255,255,50),o.stroke(206,242,212),o.strokeWeight(2),o.rect(x[i].x,x[i].y,x[i].image.width,x[i].image.height))}},o.mouseClicked=r=>{let i=o.mouseX,g=o.mouseY;x.forEach(f=>{f.occupied&&i>f.x&&i<f.x+f.image.width&&g>f.y&&g<f.y+f.image.height&&(d.value=f.BAY)})}};return U(()=>{new Y(c)}),{diskInfoObj:t,currentDisk:d,lsdevJson:e}}},Nt={id:"p5-stornado2u",class:"m-2"};function Lt(a,t,d,e,n,c){return l(),u("div",Nt)}var Jt=k(Pt,[["render",Lt]]);const Tt={components:{P5Stornado2U:Jt},props:{diskInfo:Object},setup(a){return{diskInfo:v(a.diskInfo)}}},qt={class:"card m-2 flex-auto"},Xt=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer")],-1),Ut={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Rt(a,t,d,e,n,c){const o=p("P5Stornado2U");return l(),u("div",qt,[Xt,s("div",Ut,[w(o,{diskInfo:e.diskInfo},null,8,["diskInfo"])])])}var Vt=k(Tt,[["render",Rt]]);const Gt={name:"App",components:{P5Canvas:de,FfdHeader:te,DebugBox:Se,ServerSection:is,DiskSection:Ht,CanvasSection:Vt,ErrorMessage:P},setup(){const a=v("");A("currentDisk",a);const t=v("");A("lsdevState",t);const d=y({lsdevDuration:5});A("lsdevJson",d);const e=f=>new Promise(b=>setTimeout(b,f*1e3)),n=y({serverInfo:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:y({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),c=async()=>{try{const f=await F(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let b=JSON.parse(f.stdout);n.serverInfo.content=b,n.serverInfo.finished=!0,n.serverInfo.failed=!1,n.serverInfo.fixAvailable=!1}catch(f){console.log(f),n.serverInfo.content=null,n.serverInfo.finished=!1,n.serverInfo.failed=!0,n.serverInfo.fixAvailable=!1,n.serverInfo.errorMessage.length=0,n.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),n.serverInfo.errorMessage.push(f.stderr)}},o=async()=>{try{const f=await F(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let b=JSON.parse(f.stdout);return!d.hasOwnProperty("rows")||b.rows.flat().filter(j=>j.occupied).length!=d.rows.flat().filter(j=>j.occupied).length?(console.log("result and lsdevJson differed"),Object.assign(d,b),n.lsdev.content=b,n.lsdev.finished=!0,n.lsdev.failed=!1,n.lsdev.fixAvailable=!1,!0):!1}catch(f){return console.log(f),n.lsdev.content=null,n.lsdev.finished=!1,n.lsdev.failed=!0,n.lsdev.fixAvailable=!1,n.lsdev.errorMessage.length=0,n.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),n.lsdev.errorMessage.push(f.stderr),!1}},r=async()=>{await c(),await o()},i=async f=>{for(await e(f);await o();)console.log(`Waited ${f}s`),console.log("running lsdev again."),await e(f)},g=cockpit.file("/usr/share/cockpit/45drives-disks-vue/udev/state");return g.watch(async function(f){t.value=f,console.log("udev state updated: ",t.value),await o()&&(console.log("runLsdev resulted in updated information, running retryLsdev"),i(d.lsdevDuration.toFixed(2)*2))}),r(),{preloadChecks:n,runServerInfo:c,runLsdev:o,udevState:g,lsdevJson:d,retryLsdev:i}}},zt={id:"App"},Wt={class:"h-screen flex flex-col overflow-hidden"},Kt={class:"flex flex-wrap overflow-y-auto"},Qt={class:"flex p-2 grow flex-wrap"},Zt={class:"flex p-2 mx-auto grow flex-col items-stretch"},eo={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},so={key:0,class:"p-2 m-2"},to={key:1,class:"p-2 m-2"};function oo(a,t,d,e,n,c){const o=p("FfdHeader"),r=p("CanvasSection"),i=p("DiskSection"),g=p("ServerSection"),f=p("ErrorMessage");return l(),u("div",zt,[s("div",Wt,[w(o,{moduleName:"Disks",centerName:""}),s("div",Kt,[s("div",Qt,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),B(r,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):_("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),B(i,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):_("",!0)]),s("div",Zt,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),B(g,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):_("",!0)])]),s("div",eo,[e.preloadChecks.serverInfo.failed?(l(),u("div",so,[w(f,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):_("",!0),e.preloadChecks.lsdev.failed?(l(),u("div",to,[w(f,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):_("",!0)])])])}var no=k(Gt,[["render",oo]]);R(no).mount("#app");
