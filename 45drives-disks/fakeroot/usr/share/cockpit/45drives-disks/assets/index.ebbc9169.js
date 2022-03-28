var E=Object.defineProperty;var M=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var F=(r,s,o)=>s in r?E(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,k=(r,s)=>{for(var o in s||(s={}))H.call(s,o)&&F(r,o,s[o]);if(M)for(var o of M(s))O.call(s,o)&&F(r,o,s[o]);return r};import{r as _,w as b,a as N,b as A,c as f,o as i,d as c,e as t,n as $,t as m,f as u,g as p,P as D,h as j,i as v,F as L,j as P,k as g,l as I,m as R}from"./vendor.dda642bf.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(n){if(n.ep)return;n.ep=!0;const d=o(n);fetch(n.href,d)}};q();var h=(r,s)=>{const o=r.__vccOpts||r;for(const[e,n]of s)o[e]=n;return o};const V={props:{moduleName:String,centerName:Boolean},setup(r){const s=_(!0);function o(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?e:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>s.value,(e,n)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:N,MoonIcon:A}},X={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},J={class:"flex flex-row items-baseline basis-10"},W=["src"],z={class:"text-2xl"},T=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),K={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Y(r,s,o,e,n,d){const a=f("SunIcon"),l=f("MoonIcon");return i(),c("div",X,[t("div",J,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,W),t("h1",z,[t("span",{class:"text-red-800 dark:text-white font-bold",style:$({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),T]),o.centerName?u("",!0):(i(),c("h1",K,m(o.moduleName),1))]),o.centerName?(i(),c("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:$({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},m(o.moduleName),5)):u("",!0),t("button",{onClick:s[0]||(s[0]=x=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(i(),p(a,{key:0})):(i(),p(l,{key:1}))])])}var G=h(V,[["render",Y]]);const Q={name:"P5Canvas",mounted(){const r=function(s){var o=2,e=35;s.setup=n=>{s.createCanvas(1187,217).parent("p5-canvas")},s.draw=n=>{s.background(245);const d=s.frameCount*3,a=s.sin(s.radians(d))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=o,(e>s.width-35||e<35)&&(o*=-1)}};new D(r)}},U={id:"p5-canvas",class:"mx-auto"};function Z(r,s,o,e,n,d){return i(),c("div",U)}var B=h(Q,[["render",Z]]);const ee={components:{XCircleIcon:j},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(r){const s=_(r.errorMsg),o=_(r.FixButtonHandler);return b(()=>r.FixButtonHandler,e=>{o.value=e}),{errorMsg:s,FixButtonHandler:o}}},se={class:"flex items-center justify-evenly"},re={class:"rounded-md bg-red-50 p-4"},te={class:"flex"},oe={class:"flex-shrink-0"},ne={class:"ml-3"},ae=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ie={class:"mt-2 text-sm text-red-700"},de={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(r,s,o,e,n,d){const a=f("XCircleIcon");return i(),c("div",se,[t("div",re,[t("div",te,[t("div",oe,[v(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ne,[ae,t("div",ie,[t("ul",de,[(i(!0),c(L,null,P(e.errorMsg,l=>(i(),c("li",null,m(l),1))),256))])])])])]),o.FixButton?(i(),c("button",{key:0,onClick:s[0]||(s[0]=(...l)=>e.FixButtonHandler&&e.FixButtonHandler(...l)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):u("",!0)])}var S=h(ee,[["render",le]]);function y(r=[],s={},o="out"){const e=g({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function d(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(r,s).then((a,l)=>{e.stdout=a,e.stderr=l}).catch((a,l)=>{var x;e.stderr=l!=null?l:a.message,e.status=(x=a.exit_status)!=null?x:-1}).finally(()=>{e.loading=!1})}return d(),n?new Promise((a,l)=>{b(e,()=>{e.loading||(e.status!==0?l(k({},e)):a(k({},e)))})}):e}const ce={setup(){const r=_(),s=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),o=_(),e=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const a=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);console.log(l),r.value=a.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(a){console.log(a),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(a.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const a=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);console.log(l),o.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:r,serverInfoError:s,lsdevInfo:o,lsdevError:e}},components:{RefreshIconOutline:I,ErrorMessage:S}},ue={class:"card m-3 grow"},fe=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),me={class:"card-body dark:bg-stone-700"},ve={class:"mt-3 sm:mt-0 sm:ml-4"},he={key:0},_e={class:"w-3/4 m-2"},ge={class:"whitespace-pre"},xe={key:1},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ye={key:2,class:"mt-2 flex"},ke={class:"w-3/4 m-2"},be={class:"whitespace-pre"},Ie={key:3};function we(r,s,o,e,n,d){const a=f("ErrorMessage");return i(),c("div",ue,[fe,t("div",me,[t("div",ve,[t("button",{type:"button",onClick:s[0]||(s[0]=l=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?u("",!0):(i(),c("div",he,[t("div",_e,[t("div",ge,m(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(i(),c("div",xe,[v(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0),t("div",pe,[t("button",{type:"button",onClick:s[1]||(s[1]=l=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?u("",!0):(i(),c("div",ye,[t("div",ke,[t("div",be,m(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(i(),c("div",Ie,[v(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0)])])}var Me=h(ce,[["render",we]]);const Fe={props:{serverInfo:Object},setup(r){return{serverInfo:g(r.serverInfo)}}},$e={class:"card m-2 flex-auto"},Be=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Server")],-1),Se={class:"card-body dark:bg-stone-700 flex flex-wrap justify-center"},Ce={class:"mt-0"},Ee={class:"sm:divide-y sm:divide-gray-200"},He={class:"py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4"},Oe=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Ne={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Ae={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},De=t("dt",{class:"text-sm font-medium text-gray-500"}," Operating System ",-1),je={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Le={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},Pe=t("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Re={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"};function qe(r,s,o,e,n,d){return i(),c("div",$e,[Be,t("div",Se,[t("div",null,[t("div",Ce,[t("dl",Ee,[t("div",He,[Oe,t("dd",Ne,m(e.serverInfo.Model),1)]),t("div",Ae,[De,t("dd",je,m(e.serverInfo["OS NAME"])+" - "+m(e.serverInfo["OS VERSION_ID"]),1)]),t("div",Le,[Pe,t("dd",Re,m(e.serverInfo.Motherboard.Manufacturer)+" - "+m(e.serverInfo.Motherboard["Product Name"]),1)])])])])])])}var Ve=h(Fe,[["render",qe]]);const Xe={components:{RefreshIconOutline:I},props:{diskInfo:Object},setup(r){const s=g(r.diskInfo),o=_("Click on a disk for more detail."),e=_(!0);return{diskInfo:s,wMsg:o,showWelcome:e}}},Je={class:"card m-2 flex-auto flex flex-col"},We={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},ze=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),Te={class:"mt-3 sm:mt-0 sm:ml-4"},Ke={type:"button",class:"card-refresh-btn"},Ye={class:"card-body dark:bg-stone-700 grow flex flex-col"},Ge={key:0},Qe={key:1,class:"grow flex justify-center items-center"},Ue={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Ze(r,s,o,e,n,d){const a=f("RefreshIconOutline");return i(),c("div",Je,[t("div",We,[ze,t("div",Te,[t("button",Ke,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Ye,[e.showWelcome?u("",!0):(i(),c("div",Ge," here is where the info goes.. and if it isn't there, it'll show the welcome. ")),e.showWelcome?(i(),c("div",Qe,[t("div",Ue,m(e.wMsg),1)])):u("",!0)])])}var es=h(Xe,[["render",Ze]]);const ss={components:{RefreshIconOutline:I,P5Canvas:B}},rs={class:"card m-2 mx-auto"},ts={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},os=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),ns={class:"mt-3 sm:mt-0 sm:ml-4"},as={type:"button",class:"card-refresh-btn"},is={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function ds(r,s,o,e,n,d){const a=f("RefreshIconOutline"),l=f("P5Canvas");return i(),c("div",rs,[t("div",ts,[os,t("div",ns,[t("button",as,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",is,[v(l)])])}var ls=h(ss,[["render",ds]]);const cs={name:"App",components:{P5Canvas:B,FfdHeader:G,DebugBox:Me,ServerSection:Ve,DiskSection:es,CanvasSection:ls,ErrorMessage:S},setup(){const r=g({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),r.serverInfo.content=n,r.serverInfo.finished=!0,r.serverInfo.failed=!1,r.serverInfo.fixAvailable=!1}catch(e){console.log(e),r.serverInfo.content=null,r.serverInfo.finished=!1,r.serverInfo.failed=!0,r.serverInfo.fixAvailable=!1,r.serverInfo.errorMessage.length=0,r.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.serverInfo.errorMessage.push(e.stderr)}},o=async()=>{try{const e=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),r.lsdev.content=n,r.lsdev.finished=!0,r.lsdev.failed=!1,r.lsdev.fixAvailable=!1}catch(e){console.log(e),r.lsdev.content=null,r.lsdev.finished=!1,r.lsdev.failed=!0,r.lsdev.fixAvailable=!1,r.lsdev.errorMessage.length=0,r.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),r.lsdev.errorMessage.push(e.stderr)}};return s(),o(),{preloadChecks:r,runServerInfo:s,runLsdev:o}}},us={id:"App"},fs={class:"h-screen flex flex-col overflow-hidden"},ms={class:"flex flex-wrap overflow-y-auto"},vs={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},hs={key:0,class:"p-2 m-2"},_s={key:1,class:"p-2 m-2"};function gs(r,s,o,e,n,d){const a=f("FfdHeader"),l=f("ServerSection"),x=f("CanvasSection"),C=f("DiskSection"),w=f("ErrorMessage");return i(),c("div",us,[t("div",fs,[v(a,{moduleName:"Disks",centerName:""}),t("div",ms,[e.preloadChecks.serverInfo.finished?(i(),p(l,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):u("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(i(),p(x,{key:1,serverInfo:e.preloadChecks.serverInfo.content,lsdev:e.preloadChecks.lsdev.content},null,8,["serverInfo","lsdev"])):u("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(i(),p(C,{key:2,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):u("",!0)]),t("div",vs,[e.preloadChecks.serverInfo.failed?(i(),c("div",hs,[v(w,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0),e.preloadChecks.lsdev.failed?(i(),c("div",_s,[v(w,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):u("",!0)])])])}var xs=h(cs,[["render",gs]]);R(xs).mount("#app");
