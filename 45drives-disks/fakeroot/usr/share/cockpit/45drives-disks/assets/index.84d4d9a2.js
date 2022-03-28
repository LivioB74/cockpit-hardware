var O=Object.defineProperty;var A=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var F=(i,s,a)=>s in i?O(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,B=(i,s)=>{for(var a in s||(s={}))N.call(s,a)&&F(i,a,s[a]);if(A)for(var a of A(s))j.call(s,a)&&F(i,a,s[a]);return i};import{r as g,w as I,a as L,b as P,c as h,o as l,d as c,e as t,n as C,t as f,f as m,g as y,P as S,h as R,i as x,F as Y,j as E,k,l as $,m as D,p as T,q,s as X}from"./vendor.d6a17607.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))e(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function a(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(d){if(d.ep)return;d.ep=!0;const n=a(d);fetch(d.href,n)}};J();var p=(i,s)=>{const a=i.__vccOpts||i;for(const[e,d]of s)a[e]=d;return a};const U={props:{moduleName:String,centerName:Boolean},setup(i){const s=g(!0);function a(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,d=localStorage.getItem("color-theme");return d===null?e:d==="dark"}return s.value=a(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),I(()=>s.value,(e,d)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:L,MoonIcon:P}},V={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},W={class:"flex flex-row items-baseline basis-10"},z=["src"],G={class:"text-2xl"},K=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Q={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Z(i,s,a,e,d,n){const r=h("SunIcon"),o=h("MoonIcon");return l(),c("div",V,[t("div",W,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,z),t("h1",G,[t("span",{class:"text-red-800 dark:text-white font-bold",style:C({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),K]),a.centerName?m("",!0):(l(),c("h1",Q,f(a.moduleName),1))]),a.centerName?(l(),c("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:C({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(a.moduleName),5)):m("",!0),t("button",{onClick:s[0]||(s[0]=u=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(l(),y(r,{key:0})):(l(),y(o,{key:1}))])])}var ee=p(U,[["render",Z]]);const se={name:"P5Canvas",mounted(){const i=function(s){var a=2,e=35;s.setup=d=>{s.createCanvas(570,900).parent("p5-canvas")},s.draw=d=>{s.background(245);const n=s.frameCount*3,r=s.sin(s.radians(n))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,r,50,50),s.pop(),e+=a,(e>s.width-35||e<35)&&(a*=-1)}};new S(i)}},te={id:"p5-canvas",class:"mx-auto"};function oe(i,s,a,e,d,n){return l(),c("div",te)}var re=p(se,[["render",oe]]);const ne={components:{XCircleIcon:R},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(i){const s=g(i.errorMsg),a=g(i.FixButtonHandler);return I(()=>i.FixButtonHandler,e=>{a.value=e}),{errorMsg:s,FixButtonHandler:a}}},ae={class:"flex items-center justify-evenly"},ie={class:"rounded-md bg-red-50 p-4"},de={class:"flex"},le={class:"flex-shrink-0"},ce={class:"ml-3"},ue=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),fe={class:"mt-2 text-sm text-red-700"},me={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ge(i,s,a,e,d,n){const r=h("XCircleIcon");return l(),c("div",ae,[t("div",ie,[t("div",de,[t("div",le,[x(r,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ce,[ue,t("div",fe,[t("ul",me,[(l(!0),c(Y,null,E(e.errorMsg,o=>(l(),c("li",null,f(o),1))),256))])])])])]),a.FixButton?(l(),c("button",{key:0,onClick:s[0]||(s[0]=(...o)=>e.FixButtonHandler&&e.FixButtonHandler(...o)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):m("",!0)])}var H=p(ne,[["render",ge]]);function b(i=[],s={},a="out"){const e=k({loading:!1,status:0,stdout:"",stderr:""}),d=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=a==="out"?"out":"message";async function n(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(i,s).then((r,o)=>{e.stdout=r,e.stderr=o}).catch((r,o)=>{var u;e.stderr=o!=null?o:r.message,e.status=(u=r.exit_status)!=null?u:-1}).finally(()=>{e.loading=!1})}return n(),d?new Promise((r,o)=>{I(e,()=>{e.loading||(e.status!==0?o(B({},e)):r(B({},e)))})}):e}const _e={setup(){const i=g(),s=k({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),a=g(),e=k({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const r=await b(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(r.stdout);console.log(o),i.value=r.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(r){console.log(r),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(r.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const r=await b(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(r.stdout);console.log(o),a.value=r.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(r){console.log(r),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(r.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:i,serverInfoError:s,lsdevInfo:a,lsdevError:e}},components:{RefreshIconOutline:$,ErrorMessage:H}},he={class:"card m-3 grow"},ve=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),xe={class:"card-body dark:bg-stone-700"},pe={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:0},ye={class:"w-3/4 m-2"},be={class:"whitespace-pre"},Ie={key:1},we={class:"mt-3 sm:mt-0 sm:ml-4"},Be={key:2,class:"mt-2 flex"},$e={class:"w-3/4 m-2"},Me={class:"whitespace-pre"},Ae={key:3};function Fe(i,s,a,e,d,n){const r=h("ErrorMessage");return l(),c("div",he,[ve,t("div",xe,[t("div",pe,[t("button",{type:"button",onClick:s[0]||(s[0]=o=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?m("",!0):(l(),c("div",ke,[t("div",ye,[t("div",be,f(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(l(),c("div",Ie,[x(r,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0),t("div",we,[t("button",{type:"button",onClick:s[1]||(s[1]=o=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?m("",!0):(l(),c("div",Be,[t("div",$e,[t("div",Me,f(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(l(),c("div",Ae,[x(r,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0)])])}var Ce=p(_e,[["render",Fe]]);const Se={props:{serverInfo:Object},setup(i){return{serverInfo:k(i.serverInfo)}}},Ye={class:"card mx-2 grow flex flex-col"},Ee=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),De={class:"card-body dark:bg-stone-700 grow flex"},He={class:"grow flex flex-col items-stretch"},Oe={class:"mt-0"},Ne={class:"sm:divide-y sm:divide-stone-200"},je={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Le=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Pe={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Re={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Te={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},qe=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Xe={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Je=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Controller ID",-1),Ue={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Ve=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"PCI Slot",-1),We={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function ze(i,s,a,e,d,n){return l(),c("div",Ye,[Ee,t("div",De,[t("div",He,[t("div",Oe,[t("dl",Ne,[t("div",je,[Le,t("dd",Pe,f(e.serverInfo.Model),1)]),(l(!0),c(Y,null,E(e.serverInfo.HBA,r=>(l(),c("div",Re,[t("dt",Te,"HBA"+f(r.Ctl+1),1),t("div",null,[qe,t("dd",Xe,f(r.Model),1)]),t("div",null,[Je,t("dd",Ue,f(r.Ctl),1)]),t("div",null,[Ve,t("dd",We,f(r["PCI Slot"]),1)])]))),256))])])])])])}var Ge=p(Se,[["render",ze]]);const Ke={components:{RefreshIconOutline:$},props:{diskInfo:Object},setup(i){const s=D("currentDisk"),a=g("Click on a disk for more detail."),e=g(!0),d=g(i.diskInfo.rows.flat().filter(o=>o.occupied).length),n=g(i.diskInfo.rows.flat().filter(o=>o.occupied).map(o=>Number(o.capacity.split(" ")[0])).reduce((o,u)=>o+u).toFixed(2)),r=g((i.diskInfo.rows.flat().filter(o=>o.occupied).map(o=>Number(o["temp-c"].replace(/[^0-9]/g,""))).reduce((o,u)=>o+u)/Number(d.value)).toFixed(2));return{wMsg:a,showWelcome:e,diskCount:d,storageCapacity:n,avgTemp:r,currentDisk:s}}},Qe={class:"card m-2 flex-auto flex flex-col"},Ze={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},es=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),ss={class:"mt-3 sm:mt-0 sm:ml-4"},ts={type:"button",class:"card-refresh-btn"},os={class:"card-body dark:bg-stone-700 grow flex flex-col"},rs={class:"grow flex flex-col items-stretch"},ns={class:"mt-0"},as={class:"sm:divide-y sm:divide-stone-200"},is={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ds=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},cs={class:"sm:divide-y sm:divide-stone-200"},us={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},fs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),ms={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},gs={class:"sm:divide-y sm:divide-stone-200"},_s={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},hs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),vs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},xs={key:0},ps={key:1,class:"grow flex justify-center items-center"},ks={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function ys(i,s,a,e,d,n){const r=h("RefreshIconOutline");return l(),c("div",Qe,[t("div",Ze,[es,t("div",ss,[t("button",ts,[x(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",os,[t("div",rs,[t("div",ns,[t("dl",as,[t("div",is,[ds,t("dd",ls,f(e.diskCount),1)])]),t("dl",cs,[t("div",us,[fs,t("dd",ms,f(e.storageCapacity)+" GB ",1)])]),t("dl",gs,[t("div",_s,[hs,t("dd",vs,f(e.avgTemp)+" \xB0C / "+f((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),e.showWelcome?m("",!0):(l(),c("div",xs,f(e.currentDisk),1)),e.showWelcome?(l(),c("div",ps,[t("div",ks,f(e.wMsg),1)])):m("",!0)])])}var bs=p(Ke,[["render",ys]]);const _={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},v=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Is={name:"P5Stornado2U",props:{diskInfo:Object},setup(i){const s=g({}),a=D("currentDisk");I(i,()=>{s.value=i.diskInfo},{immediate:!0,deep:!0});function e(n,r,o){return n?/Seagate Nytro/.test(o)?_.disks.seagate.image:/SEAGATE XS400LE10003/.test(r)?_.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(r)?_.disks.micron5200.image:/Micron_5300_/.test(r)?_.disks.micron5300.image:_.disks.default.image:null}const d=function(n){n.preload=r=>{_.chassis.image=n.loadImage(_.chassis.path),Object.entries(_.disks).forEach(([o,u])=>{_.disks[o].image=n.loadImage(u.path)}),s.value.rows.flat().forEach(o=>{const u=v.findIndex(w=>w.BAY===o["bay-id"]);v[u].occupied=o.occupied,v[u].image=e(o.occupied,o["model-name"],o["model-family"])})},n.setup=r=>{n.createCanvas(_.chassis.image.width,_.chassis.image.height).parent("p5-stornado2u"),n.noLoop()},n.draw=r=>{if(n.image(_.chassis.image,0,0),v.forEach(o=>{o.occupied&&n.image(o.image,o.x,o.y)}),a.value){let o=v.findIndex(u=>u.BAY===a.value);n.fill(200,200,200,200),n.rect(v[o].x,v[o].y,v[o].image.width,v[o].image.height)}},n.mouseClicked=r=>{let o=["1-1","2-5","1-5","2-13"];a.value=n.random(o),n.redraw()}};return T(()=>{new S(d)}),{diskInfo:s,currentDisk:a}}},ws={id:"p5-stornado2u",class:"m-2"};function Bs(i,s,a,e,d,n){return l(),c("div",ws)}var $s=p(Is,[["render",Bs]]);const Ms={components:{RefreshIconOutline:$,P5Stornado2U:$s},props:{diskInfo:Object},setup(i){return{diskInfo:g(i.diskInfo)}}},As={class:"card m-2"},Fs={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Cs=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Ss={class:"mt-3 sm:mt-0 sm:ml-4"},Ys={type:"button",class:"card-refresh-btn"},Es={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Ds(i,s,a,e,d,n){const r=h("RefreshIconOutline"),o=h("P5Stornado2U");return l(),c("div",As,[t("div",Fs,[Cs,t("div",Ss,[t("button",Ys,[x(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Es,[x(o,{diskInfo:e.diskInfo},null,8,["diskInfo"])])])}var Hs=p(Ms,[["render",Ds]]);const Os={name:"App",components:{P5Canvas:re,FfdHeader:ee,DebugBox:Ce,ServerSection:Ge,DiskSection:bs,CanvasSection:Hs,ErrorMessage:H},setup(){const i=g("");q("currentDisk",i);const s=k({serverInfo:{content:k({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:k({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),a=async()=>{try{const n=await b(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let r=JSON.parse(n.stdout);s.serverInfo.content=r,s.serverInfo.finished=!0,s.serverInfo.failed=!1,s.serverInfo.fixAvailable=!1}catch(n){console.log(n),s.serverInfo.content=null,s.serverInfo.finished=!1,s.serverInfo.failed=!0,s.serverInfo.fixAvailable=!1,s.serverInfo.errorMessage.length=0,s.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.serverInfo.errorMessage.push(n.stderr)}},e=async()=>{try{const n=await b(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let r=JSON.parse(n.stdout);s.lsdev.content=r,s.lsdev.finished=!0,s.lsdev.failed=!1,s.lsdev.fixAvailable=!1}catch(n){console.log(n),s.lsdev.content=null,s.lsdev.finished=!1,s.lsdev.failed=!0,s.lsdev.fixAvailable=!1,s.lsdev.errorMessage.length=0,s.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),s.lsdev.errorMessage.push(n.stderr)}};return(async()=>{await a(),await e()})(),{preloadChecks:s,runServerInfo:a,runLsdev:e}}},Ns={id:"App"},js={class:"h-screen flex flex-col overflow-hidden"},Ls={class:"flex flex-wrap overflow-y-auto"},Ps={class:"flex p-2 grow flex-wrap"},Rs={class:"flex p-2 mx-auto grow flex-col items-stretch"},Ts={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},qs={key:0,class:"p-2 m-2"},Xs={key:1,class:"p-2 m-2"};function Js(i,s,a,e,d,n){const r=h("FfdHeader"),o=h("CanvasSection"),u=h("DiskSection"),w=h("ServerSection"),M=h("ErrorMessage");return l(),c("div",Ns,[t("div",js,[x(r,{moduleName:"Disks",centerName:""}),t("div",Ls,[t("div",Ps,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),y(o,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):m("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),y(u,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):m("",!0)]),t("div",Rs,[e.preloadChecks.serverInfo.finished?(l(),y(w,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):m("",!0)])]),t("div",Ts,[e.preloadChecks.serverInfo.failed?(l(),c("div",qs,[x(M,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0),e.preloadChecks.lsdev.failed?(l(),c("div",Xs,[x(M,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0)])])])}var Us=p(Os,[["render",Js]]);X(Us).mount("#app");
