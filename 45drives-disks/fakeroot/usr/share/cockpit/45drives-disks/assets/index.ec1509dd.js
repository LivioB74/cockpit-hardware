var H=Object.defineProperty;var M=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var F=(s,r,o)=>r in s?H(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,y=(s,r)=>{for(var o in r||(r={}))E.call(r,o)&&F(s,o,r[o]);if(M)for(var o of M(r))O.call(r,o)&&F(s,o,r[o]);return s};import{r as m,w as I,a as A,b as N,c as u,o as l,d as c,e as t,n as $,t as _,f,g as p,P as j,h as D,i as v,F as L,j as P,k as g,l as k,m as R}from"./vendor.dda642bf.js";const q=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};q();var h=(s,r)=>{const o=s.__vccOpts||s;for(const[e,n]of r)o[e]=n;return o};const X={props:{moduleName:String,centerName:Boolean},setup(s){const r=m(!0);function o(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?e:n==="dark"}return r.value=o(),r.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),I(()=>r.value,(e,n)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:r}},components:{SunIcon:A,MoonIcon:N}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},V=["src"],W={class:"text-2xl"},T=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),K={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Y(s,r,o,e,n,i){const a=u("SunIcon"),d=u("MoonIcon");return l(),c("div",J,[t("div",z,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,V),t("h1",W,[t("span",{class:"text-red-800 dark:text-white font-bold",style:$({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),T]),o.centerName?f("",!0):(l(),c("h1",K,_(o.moduleName),1))]),o.centerName?(l(),c("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:$({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},_(o.moduleName),5)):f("",!0),t("button",{onClick:r[0]||(r[0]=x=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(l(),p(a,{key:0})):(l(),p(d,{key:1}))])])}var G=h(X,[["render",Y]]);const Q={name:"P5Canvas",mounted(){const s=function(r){var o=2,e=35;r.setup=n=>{r.createCanvas(500,500).parent("p5-canvas")},r.draw=n=>{r.background(245);const i=r.frameCount*3,a=r.sin(r.radians(i))*50;r.push(),r.translate(0,r.height/2),r.fill(66,184,131),r.stroke(53,73,94),r.strokeWeight(5),r.ellipse(e,a,50,50),r.pop(),e+=o,(e>r.width-35||e<35)&&(o*=-1)}};new j(s)}},U={id:"p5-canvas",class:"mx-auto"};function Z(s,r,o,e,n,i){return l(),c("div",U)}var B=h(Q,[["render",Z]]);const ee={components:{XCircleIcon:D},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(s){const r=m(s.errorMsg),o=m(s.FixButtonHandler);return I(()=>s.FixButtonHandler,e=>{o.value=e}),{errorMsg:r,FixButtonHandler:o}}},re={class:"flex items-center justify-evenly"},se={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},te={class:"flex-shrink-0"},ne={class:"ml-3"},ae=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ie={class:"mt-2 text-sm text-red-700"},le={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function de(s,r,o,e,n,i){const a=u("XCircleIcon");return l(),c("div",re,[t("div",se,[t("div",oe,[t("div",te,[v(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ne,[ae,t("div",ie,[t("ul",le,[(l(!0),c(L,null,P(e.errorMsg,d=>(l(),c("li",null,_(d),1))),256))])])])])]),o.FixButton?(l(),c("button",{key:0,onClick:r[0]||(r[0]=(...d)=>e.FixButtonHandler&&e.FixButtonHandler(...d)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var C=h(ee,[["render",de]]);function b(s=[],r={},o="out"){const e=g({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(r.promise);r.superuser||(r.superuser="require"),r.err=o==="out"?"out":"message";async function i(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(s,r).then((a,d)=>{e.stdout=a,e.stderr=d}).catch((a,d)=>{var x;e.stderr=d!=null?d:a.message,e.status=(x=a.exit_status)!=null?x:-1}).finally(()=>{e.loading=!1})}return i(),n?new Promise((a,d)=>{I(e,()=>{e.loading||(e.status!==0?d(y({},e)):a(y({},e)))})}):e}const ce={setup(){const s=m(),r=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),o=m(),e=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(r),console.log(e),{runServerInfo:async()=>{try{const a=await b(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(a.stdout);console.log(d),s.value=a.stdout,r.errorFlag=!1,r.errorMessage.length=0,r.showFixButton=!1}catch(a){console.log(a),r.errorFlag=!0,r.errorMessage.length=0,r.errorMessage.push(a.stderr),r.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.showFixButton=!1}},runLsdev:async()=>{try{const a=await b(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let d=JSON.parse(a.stdout);console.log(d),o.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:s,serverInfoError:r,lsdevInfo:o,lsdevError:e}},components:{RefreshIconOutline:k,ErrorMessage:C}},ue={class:"card m-3 grow"},fe=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ve={class:"card-body dark:bg-stone-700"},he={class:"mt-3 sm:mt-0 sm:ml-4"},me={key:0},_e={class:"w-3/4 m-2"},ge={class:"whitespace-pre"},xe={key:1},pe={class:"mt-3 sm:mt-0 sm:ml-4"},be={key:2,class:"mt-2 flex"},ke={class:"w-3/4 m-2"},ye={class:"whitespace-pre"},Ie={key:3};function we(s,r,o,e,n,i){const a=u("ErrorMessage");return l(),c("div",ue,[fe,t("div",ve,[t("div",he,[t("button",{type:"button",onClick:r[0]||(r[0]=d=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?f("",!0):(l(),c("div",me,[t("div",_e,[t("div",ge,_(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(l(),c("div",xe,[v(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),t("div",pe,[t("button",{type:"button",onClick:r[1]||(r[1]=d=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?f("",!0):(l(),c("div",be,[t("div",ke,[t("div",ye,_(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(l(),c("div",Ie,[v(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Me=h(ce,[["render",we]]);const Fe={components:{RefreshIconOutline:k},props:{serverInfo:Object},setup(s){return{serverInfo:g(s.serverInfo)}}},$e={class:"card m-2 flex-auto"},Be={class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ce=t("h3",{class:"text-lg leading-6 font-semibold"},"Server",-1),Se={class:"mt-3 sm:mt-0 sm:ml-4"},He={type:"button",class:"card-refresh-btn"},Ee={class:"card-body dark:bg-stone-700"};function Oe(s,r,o,e,n,i){const a=u("RefreshIconOutline");return l(),c("div",$e,[t("div",Be,[Ce,t("div",Se,[t("button",He,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Ee,_(e.serverInfo),1)])}var Ae=h(Fe,[["render",Oe]]);const Ne={components:{RefreshIconOutline:k},props:{diskInfo:Object},setup(s){const r=g(s.diskInfo),o=m("Click on a disk to show more information."),e=m(!0);return{diskInfo:r,wMsg:o,showWelcome:e}}},je={class:"card m-2 flex-auto"},De={class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Le=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),Pe={class:"mt-3 sm:mt-0 sm:ml-4"},Re={type:"button",class:"card-refresh-btn"},qe={class:"card-body dark:bg-stone-700 flex flex-col justify-center justify-items-center grow"},Xe={key:0,class:"flex flex-col justify-center justify-items-center"},Je={class:"grow-0 mx-auto"};function ze(s,r,o,e,n,i){const a=u("RefreshIconOutline");return l(),c("div",je,[t("div",De,[Le,t("div",Pe,[t("button",Re,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",qe,[e.showWelcome?(l(),c("div",Xe,[t("div",Je,_(e.wMsg),1)])):f("",!0)])])}var Ve=h(Ne,[["render",ze]]);const We={components:{RefreshIconOutline:k,P5Canvas:B}},Te={class:"card m-2 grow"},Ke={class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ye=t("h3",{class:"text-lg leading-6 font-semibold"},"Canvas",-1),Ge={class:"mt-3 sm:mt-0 sm:ml-4"},Qe={type:"button",class:"card-refresh-btn"},Ue={class:"card-body dark:bg-stone-700 flex"};function Ze(s,r,o,e,n,i){const a=u("RefreshIconOutline"),d=u("P5Canvas");return l(),c("div",Te,[t("div",Ke,[Ye,t("div",Ge,[t("button",Qe,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Ue,[v(d)])])}var er=h(We,[["render",Ze]]);const rr={name:"App",components:{P5Canvas:B,FfdHeader:G,DebugBox:Me,ServerSection:Ae,DiskSection:Ve,CanvasSection:er,ErrorMessage:C},setup(){const s=g({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),r=async()=>{try{const e=await b(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),s.serverInfo.content=n,s.serverInfo.finished=!0,s.serverInfo.failed=!1,s.serverInfo.fixAvailable=!1}catch(e){console.log(e),s.serverInfo.content=null,s.serverInfo.finished=!1,s.serverInfo.failed=!0,s.serverInfo.fixAvailable=!1,s.serverInfo.errorMessage.length=0,s.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.serverInfo.errorMessage.push(e.stderr)}},o=async()=>{try{const e=await b(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),s.lsdev.content=n,s.lsdev.finished=!0,s.lsdev.failed=!1,s.lsdev.fixAvailable=!1}catch(e){console.log(e),s.lsdev.content=null,s.lsdev.finished=!1,s.lsdev.failed=!0,s.lsdev.fixAvailable=!1,s.lsdev.errorMessage.length=0,s.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),s.lsdev.errorMessage.push(e.stderr)}};return r(),o(),{preloadChecks:s,runServerInfo:r,runLsdev:o}}},sr={id:"App"},or={class:"h-screen flex flex-col overflow-hidden"},tr={class:"flex flex-wrap overflow-y-auto"},nr={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},ar={key:0,class:"p-2 m-2"},ir={key:1,class:"p-2 m-2"};function lr(s,r,o,e,n,i){const a=u("FfdHeader"),d=u("ServerSection"),x=u("CanvasSection"),S=u("DiskSection"),w=u("ErrorMessage");return l(),c("div",sr,[t("div",or,[v(a,{moduleName:"Disks",centerName:""}),t("div",tr,[e.preloadChecks.serverInfo.finished?(l(),p(d,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),p(x,{key:1,serverInfo:e.preloadChecks.serverInfo.content,lsdev:e.preloadChecks.lsdev.content},null,8,["serverInfo","lsdev"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),p(S,{key:2,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):f("",!0)]),t("div",nr,[e.preloadChecks.serverInfo.failed?(l(),c("div",ar,[v(w,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),e.preloadChecks.lsdev.failed?(l(),c("div",ir,[v(w,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])])}var dr=h(rr,[["render",lr]]);R(dr).mount("#app");
