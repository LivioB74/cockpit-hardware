var A=Object.defineProperty;var $=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var M=(r,s,o)=>s in r?A(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,y=(r,s)=>{for(var o in s||(s={}))D.call(s,o)&&M(r,o,s[o]);if($)for(var o of $(s))N.call(s,o)&&M(r,o,s[o]);return r};import{r as _,w as b,a as O,b as P,c as f,o as d,d as l,e as t,n as F,t as m,f as u,g as p,P as B,h as j,i as h,F as C,j as S,k as g,l as w,m as L}from"./vendor.dda642bf.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};R();var v=(r,s)=>{const o=r.__vccOpts||r;for(const[e,n]of s)o[e]=n;return o};const q={props:{moduleName:String,centerName:Boolean},setup(r){const s=_(!0);function o(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?e:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>s.value,(e,n)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:O,MoonIcon:P}},X={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},W={class:"flex flex-row items-baseline basis-10"},J=["src"],U={class:"text-2xl"},V=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),z={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function T(r,s,o,e,n,i){const a=f("SunIcon"),c=f("MoonIcon");return d(),l("div",X,[t("div",W,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,J),t("h1",U,[t("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),V]),o.centerName?u("",!0):(d(),l("h1",z,m(o.moduleName),1))]),o.centerName?(d(),l("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},m(o.moduleName),5)):u("",!0),t("button",{onClick:s[0]||(s[0]=x=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(d(),p(a,{key:0})):(d(),p(c,{key:1}))])])}var K=v(q,[["render",T]]);const Y={name:"P5Canvas",mounted(){const r=function(s){var o=2,e=35;s.setup=n=>{s.createCanvas(570,900).parent("p5-canvas")},s.draw=n=>{s.background(245);const i=s.frameCount*3,a=s.sin(s.radians(i))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=o,(e>s.width-35||e<35)&&(o*=-1)}};new B(r)}},G={id:"p5-canvas",class:"mx-auto"};function Q(r,s,o,e,n,i){return d(),l("div",G)}var Z=v(Y,[["render",Q]]);const ee={components:{XCircleIcon:j},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(r){const s=_(r.errorMsg),o=_(r.FixButtonHandler);return b(()=>r.FixButtonHandler,e=>{o.value=e}),{errorMsg:s,FixButtonHandler:o}}},se={class:"flex items-center justify-evenly"},re={class:"rounded-md bg-red-50 p-4"},te={class:"flex"},oe={class:"flex-shrink-0"},ne={class:"ml-3"},ae=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ie={class:"mt-2 text-sm text-red-700"},de={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(r,s,o,e,n,i){const a=f("XCircleIcon");return d(),l("div",se,[t("div",re,[t("div",te,[t("div",oe,[h(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ne,[ae,t("div",ie,[t("ul",de,[(d(!0),l(C,null,S(e.errorMsg,c=>(d(),l("li",null,m(c),1))),256))])])])])]),o.FixButton?(d(),l("button",{key:0,onClick:s[0]||(s[0]=(...c)=>e.FixButtonHandler&&e.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):u("",!0)])}var H=v(ee,[["render",le]]);function k(r=[],s={},o="out"){const e=g({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(r,s).then((a,c)=>{e.stdout=a,e.stderr=c}).catch((a,c)=>{var x;e.stderr=c!=null?c:a.message,e.status=(x=a.exit_status)!=null?x:-1}).finally(()=>{e.loading=!1})}return i(),n?new Promise((a,c)=>{b(e,()=>{e.loading||(e.status!==0?c(y({},e)):a(y({},e)))})}):e}const ce={setup(){const r=_(),s=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),o=_(),e=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const a=await k(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(a.stdout);console.log(c),r.value=a.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(a){console.log(a),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(a.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const a=await k(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(a.stdout);console.log(c),o.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:r,serverInfoError:s,lsdevInfo:o,lsdevError:e}},components:{RefreshIconOutline:w,ErrorMessage:H}},ue={class:"card m-3 grow"},fe=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),me={class:"card-body dark:bg-stone-700"},he={class:"mt-3 sm:mt-0 sm:ml-4"},ve={key:0},_e={class:"w-3/4 m-2"},ge={class:"whitespace-pre"},xe={key:1},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:2,class:"mt-2 flex"},ye={class:"w-3/4 m-2"},be={class:"whitespace-pre"},we={key:3};function Ie(r,s,o,e,n,i){const a=f("ErrorMessage");return d(),l("div",ue,[fe,t("div",me,[t("div",he,[t("button",{type:"button",onClick:s[0]||(s[0]=c=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?u("",!0):(d(),l("div",ve,[t("div",_e,[t("div",ge,m(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(d(),l("div",xe,[h(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0),t("div",pe,[t("button",{type:"button",onClick:s[1]||(s[1]=c=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?u("",!0):(d(),l("div",ke,[t("div",ye,[t("div",be,m(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(d(),l("div",we,[h(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0)])])}var $e=v(ce,[["render",Ie]]);const Me={props:{serverInfo:Object},setup(r){return{serverInfo:g(r.serverInfo)}}},Fe={class:"card m-2 flex-auto flex flex-col"},Be=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Ce={class:"card-body dark:bg-stone-700 grow flex"},Se={class:"grow flex flex-col items-stretch"},He={class:"mt-0"},Ee={class:"sm:divide-y sm:divide-gray-200"},Ae={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},De=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Ne={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},Oe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Pe={class:"text-sm font-medium text-gray-500"},je=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Le={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},Re=t("dt",{class:"text-sm font-medium text-gray-500"},"Controller ID",-1),qe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},Xe=t("dt",{class:"text-sm font-medium text-gray-500"},"PCI Slot",-1),We={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"};function Je(r,s,o,e,n,i){return d(),l("div",Fe,[Be,t("div",Ce,[t("div",Se,[t("div",He,[t("dl",Ee,[t("div",Ae,[De,t("dd",Ne,m(e.serverInfo.Model),1)]),(d(!0),l(C,null,S(e.serverInfo.HBA,a=>(d(),l("div",Oe,[t("dt",Pe,"HBA"+m(a.Ctl+1),1),t("div",null,[je,t("dd",Le,m(a.Model),1)]),t("div",null,[Re,t("dd",qe,m(a.Ctl),1)]),t("div",null,[Xe,t("dd",We,m(a["PCI Slot"]),1)])]))),256))])])])])])}var Ue=v(Me,[["render",Je]]);const Ve={components:{RefreshIconOutline:w},props:{diskInfo:Object},setup(r){const s=g(r.diskInfo),o=_("Click on a disk for more detail."),e=_(!0);return{diskInfo:s,wMsg:o,showWelcome:e}}},ze={class:"card m-2 flex-auto flex flex-col"},Te={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ke=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),Ye={class:"mt-3 sm:mt-0 sm:ml-4"},Ge={type:"button",class:"card-refresh-btn"},Qe={class:"card-body dark:bg-stone-700 grow flex flex-col"},Ze={key:0},es={key:1,class:"grow flex justify-center items-center"},ss={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function rs(r,s,o,e,n,i){const a=f("RefreshIconOutline");return d(),l("div",ze,[t("div",Te,[Ke,t("div",Ye,[t("button",Ge,[h(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Qe,[e.showWelcome?u("",!0):(d(),l("div",Ze," here is where the info goes.. and if it isn't there, it'll show the welcome. ")),e.showWelcome?(d(),l("div",es,[t("div",ss,m(e.wMsg),1)])):u("",!0)])])}var ts=v(Ve,[["render",rs]]);const os={name:"P5Stornado2U",mounted(){const r=function(s){var o=2,e=35;s.preload=n=>{},s.setup=n=>{s.createCanvas(570,700).parent("p5-stornado2u")},s.draw=n=>{s.background(245);const i=s.frameCount*3,a=s.sin(s.radians(i))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=o,(e>s.width-35||e<35)&&(o*=-1)}};new B(r)}},ns={id:"p5-stornado2u",class:"mx-auto"};function as(r,s,o,e,n,i){return d(),l("div",ns)}var is=v(os,[["render",as]]);const ds={components:{RefreshIconOutline:w,P5Stornado2U:is}},ls={class:"card m-2 mx-auto"},cs={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},us=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),fs={class:"mt-3 sm:mt-0 sm:ml-4"},ms={type:"button",class:"card-refresh-btn"},hs={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function vs(r,s,o,e,n,i){const a=f("RefreshIconOutline"),c=f("P5Stornado2U");return d(),l("div",ls,[t("div",cs,[us,t("div",fs,[t("button",ms,[h(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",hs,[h(c)])])}var _s=v(ds,[["render",vs]]);const gs={name:"App",components:{P5Canvas:Z,FfdHeader:K,DebugBox:$e,ServerSection:Ue,DiskSection:ts,CanvasSection:_s,ErrorMessage:H},setup(){const r=g({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await k(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),r.serverInfo.content=n,r.serverInfo.finished=!0,r.serverInfo.failed=!1,r.serverInfo.fixAvailable=!1}catch(e){console.log(e),r.serverInfo.content=null,r.serverInfo.finished=!1,r.serverInfo.failed=!0,r.serverInfo.fixAvailable=!1,r.serverInfo.errorMessage.length=0,r.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.serverInfo.errorMessage.push(e.stderr)}},o=async()=>{try{const e=await k(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),r.lsdev.content=n,r.lsdev.finished=!0,r.lsdev.failed=!1,r.lsdev.fixAvailable=!1}catch(e){console.log(e),r.lsdev.content=null,r.lsdev.finished=!1,r.lsdev.failed=!0,r.lsdev.fixAvailable=!1,r.lsdev.errorMessage.length=0,r.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),r.lsdev.errorMessage.push(e.stderr)}};return s(),o(),{preloadChecks:r,runServerInfo:s,runLsdev:o}}},xs={id:"App"},ps={class:"h-screen flex flex-col overflow-hidden"},ks={class:"flex overflow-y-auto"},ys={class:"flex flex-col flex-wrap"},bs={class:"flex justify-center items-center"},ws={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},Is={key:0,class:"p-2 m-2"},$s={key:1,class:"p-2 m-2"};function Ms(r,s,o,e,n,i){const a=f("FfdHeader"),c=f("CanvasSection"),x=f("DiskSection"),E=f("ServerSection"),I=f("ErrorMessage");return d(),l("div",xs,[t("div",ps,[h(a,{moduleName:"Disks",centerName:""}),t("div",ks,[t("div",ys,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(d(),p(c,{key:0,serverInfo:e.preloadChecks.serverInfo.content,lsdev:e.preloadChecks.lsdev.content},null,8,["serverInfo","lsdev"])):u("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(d(),p(x,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):u("",!0)]),t("div",bs,[e.preloadChecks.serverInfo.finished?(d(),p(E,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):u("",!0)])]),t("div",ws,[e.preloadChecks.serverInfo.failed?(d(),l("div",Is,[h(I,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0),e.preloadChecks.lsdev.failed?(d(),l("div",$s,[h(I,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0)])])])}var Fs=v(gs,[["render",Ms]]);L(Fs).mount("#app");
