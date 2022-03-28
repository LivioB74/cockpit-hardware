var A=Object.defineProperty;var $=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var M=(o,s,n)=>s in o?A(o,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[s]=n,k=(o,s)=>{for(var n in s||(s={}))N.call(s,n)&&M(o,n,s[n]);if($)for(var n of $(s))D.call(s,n)&&M(o,n,s[n]);return o};import{r as _,w as b,a as O,b as P,c as m,o as l,d as c,e as t,n as F,t as u,f,g as p,P as C,h as j,i as h,F as B,j as S,k as g,l as w,m as L}from"./vendor.dda642bf.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(a){if(a.ep)return;a.ep=!0;const d=n(a);fetch(a.href,d)}};R();var v=(o,s)=>{const n=o.__vccOpts||o;for(const[e,a]of s)n[e]=a;return n};const T={props:{moduleName:String,centerName:Boolean},setup(o){const s=_(!0);function n(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("color-theme");return a===null?e:a==="dark"}return s.value=n(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>s.value,(e,a)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:O,MoonIcon:P}},q={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},X={class:"flex flex-row items-baseline basis-10"},W=["src"],J={class:"text-2xl"},U=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),V={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function z(o,s,n,e,a,d){const r=m("SunIcon"),i=m("MoonIcon");return l(),c("div",q,[t("div",X,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,W),t("h1",J,[t("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),U]),n.centerName?f("",!0):(l(),c("h1",V,u(n.moduleName),1))]),n.centerName?(l(),c("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},u(n.moduleName),5)):f("",!0),t("button",{onClick:s[0]||(s[0]=x=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(l(),p(r,{key:0})):(l(),p(i,{key:1}))])])}var G=v(T,[["render",z]]);const K={name:"P5Canvas",mounted(){const o=function(s){var n=2,e=35;s.setup=a=>{s.createCanvas(570,900).parent("p5-canvas")},s.draw=a=>{s.background(245);const d=s.frameCount*3,r=s.sin(s.radians(d))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,r,50,50),s.pop(),e+=n,(e>s.width-35||e<35)&&(n*=-1)}};new C(o)}},Y={id:"p5-canvas",class:"mx-auto"};function Q(o,s,n,e,a,d){return l(),c("div",Y)}var Z=v(K,[["render",Q]]);const ee={components:{XCircleIcon:j},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(o){const s=_(o.errorMsg),n=_(o.FixButtonHandler);return b(()=>o.FixButtonHandler,e=>{n.value=e}),{errorMsg:s,FixButtonHandler:n}}},se={class:"flex items-center justify-evenly"},te={class:"rounded-md bg-red-50 p-4"},re={class:"flex"},oe={class:"flex-shrink-0"},ne={class:"ml-3"},ae=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),de={class:"mt-2 text-sm text-red-700"},ie={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(o,s,n,e,a,d){const r=m("XCircleIcon");return l(),c("div",se,[t("div",te,[t("div",re,[t("div",oe,[h(r,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ne,[ae,t("div",de,[t("ul",ie,[(l(!0),c(B,null,S(e.errorMsg,i=>(l(),c("li",null,u(i),1))),256))])])])])]),n.FixButton?(l(),c("button",{key:0,onClick:s[0]||(s[0]=(...i)=>e.FixButtonHandler&&e.FixButtonHandler(...i)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var H=v(ee,[["render",le]]);function y(o=[],s={},n="out"){const e=g({loading:!1,status:0,stdout:"",stderr:""}),a=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=n==="out"?"out":"message";async function d(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(o,s).then((r,i)=>{e.stdout=r,e.stderr=i}).catch((r,i)=>{var x;e.stderr=i!=null?i:r.message,e.status=(x=r.exit_status)!=null?x:-1}).finally(()=>{e.loading=!1})}return d(),a?new Promise((r,i)=>{b(e,()=>{e.loading||(e.status!==0?i(k({},e)):r(k({},e)))})}):e}const ce={setup(){const o=_(),s=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),n=_(),e=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const r=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(r.stdout);console.log(i),o.value=r.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(r){console.log(r),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(r.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const r=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(r.stdout);console.log(i),n.value=r.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(r){console.log(r),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(r.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:o,serverInfoError:s,lsdevInfo:n,lsdevError:e}},components:{RefreshIconOutline:w,ErrorMessage:H}},ue={class:"card m-3 grow"},fe=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),me={class:"card-body dark:bg-stone-700"},_e={class:"mt-3 sm:mt-0 sm:ml-4"},he={key:0},ve={class:"w-3/4 m-2"},ge={class:"whitespace-pre"},xe={key:1},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ye={key:2,class:"mt-2 flex"},ke={class:"w-3/4 m-2"},be={class:"whitespace-pre"},we={key:3};function Ie(o,s,n,e,a,d){const r=m("ErrorMessage");return l(),c("div",ue,[fe,t("div",me,[t("div",_e,[t("button",{type:"button",onClick:s[0]||(s[0]=i=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?f("",!0):(l(),c("div",he,[t("div",ve,[t("div",ge,u(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(l(),c("div",xe,[h(r,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),t("div",pe,[t("button",{type:"button",onClick:s[1]||(s[1]=i=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?f("",!0):(l(),c("div",ye,[t("div",ke,[t("div",be,u(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(l(),c("div",we,[h(r,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var $e=v(ce,[["render",Ie]]);const Me={props:{serverInfo:Object},setup(o){return{serverInfo:g(o.serverInfo)}}},Fe={class:"card mx-0 grow flex flex-col"},Ce=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Be={class:"card-body dark:bg-stone-700 grow flex"},Se={class:"grow flex flex-col items-stretch"},He={class:"mt-0"},Ee={class:"sm:divide-y sm:divide-gray-200"},Ae={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ne=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),De={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},Oe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Pe={class:"text-sm font-medium text-gray-500"},je=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Le={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},Re=t("dt",{class:"text-sm font-medium text-gray-500"},"Controller ID",-1),Te={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},qe=t("dt",{class:"text-sm font-medium text-gray-500"},"PCI Slot",-1),Xe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"};function We(o,s,n,e,a,d){return l(),c("div",Fe,[Ce,t("div",Be,[t("div",Se,[t("div",He,[t("dl",Ee,[t("div",Ae,[Ne,t("dd",De,u(e.serverInfo.Model),1)]),(l(!0),c(B,null,S(e.serverInfo.HBA,r=>(l(),c("div",Oe,[t("dt",Pe,"HBA"+u(r.Ctl+1),1),t("div",null,[je,t("dd",Le,u(r.Model),1)]),t("div",null,[Re,t("dd",Te,u(r.Ctl),1)]),t("div",null,[qe,t("dd",Xe,u(r["PCI Slot"]),1)])]))),256))])])])])])}var Je=v(Me,[["render",We]]);const Ue={components:{RefreshIconOutline:w},props:{diskInfo:Object},setup(o){const s=g(o.diskInfo),n=_("Click on a disk for more detail."),e=_(!0),a=_(s.rows.flat().filter(r=>r.occupied).length),d=_(s.rows.flat().filter(r=>r.occupied).map(r=>Number(r.capacity.split(" ")[0])).reduce((r,i)=>r+i).toFixed(2));return _(s.rows.flat().filter(r=>r.occupied).map(r=>Number(r["temp-c"].replace(/[^0-9]/g,""))).reduce((r,i)=>r+i).toFixed(2)/Number(a.value)),console.log("sumTmp",s.rows.flat().filter(r=>r.occupied).map(r=>Number(r["temp-c"].replace(/[^0-9]/g,""))).reduce((r,i)=>r+i).toFixed(2)),{diskInfo:s,wMsg:n,showWelcome:e,driveCount:a,storageCapacity:d,avgTmp}}},Ve={class:"card m-2 flex-auto flex flex-col"},ze={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ge=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),Ke={class:"mt-3 sm:mt-0 sm:ml-4"},Ye={type:"button",class:"card-refresh-btn"},Qe={class:"card-body dark:bg-stone-700 grow flex flex-col"},Ze={class:"grow flex flex-col items-stretch"},es={class:"mt-0"},ss={class:"sm:divide-y sm:divide-gray-200"},ts={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},rs=t("dt",{class:"text-sm font-medium text-gray-500"},"Drive Count",-1),os={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},ns={class:"sm:divide-y sm:divide-gray-200"},as={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},ds=t("dt",{class:"text-sm font-medium text-gray-500"},"Total Storage",-1),is={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},ls={class:"sm:divide-y sm:divide-gray-200"},cs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},us=t("dt",{class:"text-sm font-medium text-gray-500"},"Average Disk Temperature",-1),fs={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},ms={key:0},_s={key:1,class:"grow flex justify-center items-center"},hs={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function vs(o,s,n,e,a,d){const r=m("RefreshIconOutline");return l(),c("div",Ve,[t("div",ze,[Ge,t("div",Ke,[t("button",Ye,[h(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Qe,[t("div",Ze,[t("div",es,[t("dl",ss,[t("div",ts,[rs,t("dd",os,u(e.driveCount),1)])]),t("dl",ns,[t("div",as,[ds,t("dd",is,u(e.storageCapacity)+" GB ",1)])]),t("dl",ls,[t("div",cs,[us,t("dd",fs,u(e.avgTmp)+" \xB0C / "+u((e.avgTmp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),e.showWelcome?f("",!0):(l(),c("div",ms," here is where the info goes.. and if it isn't there, it'll show the welcome. ")),e.showWelcome?(l(),c("div",_s,[t("div",hs,u(e.wMsg),1)])):f("",!0)])])}var gs=v(Ue,[["render",vs]]);const xs={name:"P5Stornado2U",mounted(){const o=function(s){var n=2,e=35;s.preload=a=>{},s.setup=a=>{s.createCanvas(1178,217).parent("p5-stornado2u")},s.draw=a=>{s.background(245);const d=s.frameCount*3,r=s.sin(s.radians(d))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,r,50,50),s.pop(),e+=n,(e>s.width-35||e<35)&&(n*=-1)}};new C(o)}},ps={id:"p5-stornado2u",class:"mx-auto"};function ys(o,s,n,e,a,d){return l(),c("div",ps)}var ks=v(xs,[["render",ys]]);const bs={components:{RefreshIconOutline:w,P5Stornado2U:ks}},ws={class:"card m-2 mx-auto"},Is={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},$s=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Ms={class:"mt-3 sm:mt-0 sm:ml-4"},Fs={type:"button",class:"card-refresh-btn"},Cs={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Bs(o,s,n,e,a,d){const r=m("RefreshIconOutline"),i=m("P5Stornado2U");return l(),c("div",ws,[t("div",Is,[$s,t("div",Ms,[t("button",Fs,[h(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Cs,[h(i)])])}var Ss=v(bs,[["render",Bs]]);const Hs={name:"App",components:{P5Canvas:Z,FfdHeader:G,DebugBox:$e,ServerSection:Je,DiskSection:gs,CanvasSection:Ss,ErrorMessage:H},setup(){const o=g({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let a=JSON.parse(e.stdout);console.log(a),o.serverInfo.content=a,o.serverInfo.finished=!0,o.serverInfo.failed=!1,o.serverInfo.fixAvailable=!1}catch(e){console.log(e),o.serverInfo.content=null,o.serverInfo.finished=!1,o.serverInfo.failed=!0,o.serverInfo.fixAvailable=!1,o.serverInfo.errorMessage.length=0,o.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.serverInfo.errorMessage.push(e.stderr)}},n=async()=>{try{const e=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let a=JSON.parse(e.stdout);console.log(a),o.lsdev.content=a,o.lsdev.finished=!0,o.lsdev.failed=!1,o.lsdev.fixAvailable=!1}catch(e){console.log(e),o.lsdev.content=null,o.lsdev.finished=!1,o.lsdev.failed=!0,o.lsdev.fixAvailable=!1,o.lsdev.errorMessage.length=0,o.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),o.lsdev.errorMessage.push(e.stderr)}};return s(),n(),{preloadChecks:o,runServerInfo:s,runLsdev:n}}},Es={id:"App"},As={class:"h-screen flex flex-col overflow-hidden"},Ns={class:"flex flex-wrap overflow-y-auto"},Ds={class:"flex grow flex-wrap"},Os={class:"flex py-2 grow flex-col items-stretch"},Ps={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},js={key:0,class:"p-2 m-2"},Ls={key:1,class:"p-2 m-2"};function Rs(o,s,n,e,a,d){const r=m("FfdHeader"),i=m("CanvasSection"),x=m("DiskSection"),E=m("ServerSection"),I=m("ErrorMessage");return l(),c("div",Es,[t("div",As,[h(r,{moduleName:"Disks",centerName:""}),t("div",Ns,[t("div",Ds,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),p(i,{key:0,serverInfo:e.preloadChecks.serverInfo.content,lsdev:e.preloadChecks.lsdev.content},null,8,["serverInfo","lsdev"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),p(x,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):f("",!0)]),t("div",Os,[e.preloadChecks.serverInfo.finished?(l(),p(E,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):f("",!0)])]),t("div",Ps,[e.preloadChecks.serverInfo.failed?(l(),c("div",js,[h(I,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),e.preloadChecks.lsdev.failed?(l(),c("div",Ls,[h(I,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])])}var Ts=v(Hs,[["render",Rs]]);L(Ts).mount("#app");
