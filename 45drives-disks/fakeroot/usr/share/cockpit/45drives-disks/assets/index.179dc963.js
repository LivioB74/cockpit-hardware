var L=Object.defineProperty;var S=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var Y=(o,s,r)=>s in o?L(o,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[s]=r,M=(o,s)=>{for(var r in s||(s={}))j.call(s,r)&&Y(o,r,s[r]);if(S)for(var r of S(s))P.call(s,r)&&Y(o,r,s[r]);return o};import{r as f,w as b,a as T,b as R,c as _,o as c,d as u,e as t,n as D,t as m,f as g,g as w,P as E,h as q,i as p,F as O,j as H,k as I,l as C,m as X,p as V}from"./vendor.bacb47d7.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}};J();var k=(o,s)=>{const r=o.__vccOpts||o;for(const[e,i]of s)r[e]=i;return r};const U={props:{moduleName:String,centerName:Boolean},setup(o){const s=f(!0);function r(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,i=localStorage.getItem("color-theme");return i===null?e:i==="dark"}return s.value=r(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>s.value,(e,i)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:T,MoonIcon:R}},W={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},G=["src"],K={class:"text-2xl"},Q=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Z={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function ee(o,s,r,e,i,l){const n=_("SunIcon"),a=_("MoonIcon");return c(),u("div",W,[t("div",z,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,G),t("h1",K,[t("span",{class:"text-red-800 dark:text-white font-bold",style:D({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Q]),r.centerName?g("",!0):(c(),u("h1",Z,m(r.moduleName),1))]),r.centerName?(c(),u("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:D({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},m(r.moduleName),5)):g("",!0),t("button",{onClick:s[0]||(s[0]=d=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(c(),w(n,{key:0})):(c(),w(a,{key:1}))])])}var se=k(U,[["render",ee]]);const te={name:"P5Canvas",mounted(){const o=function(s){var r=2,e=35;s.setup=i=>{s.createCanvas(570,900).parent("p5-canvas")},s.draw=i=>{s.background(245);const l=s.frameCount*3,n=s.sin(s.radians(l))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,n,50,50),s.pop(),e+=r,(e>s.width-35||e<35)&&(r*=-1)}};new E(o)}},oe={id:"p5-canvas",class:"mx-auto"};function re(o,s,r,e,i,l){return c(),u("div",oe)}var ne=k(te,[["render",re]]);const ae={components:{XCircleIcon:q},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(o){const s=f(o.errorMsg),r=f(o.FixButtonHandler);return b(()=>o.FixButtonHandler,e=>{r.value=e}),{errorMsg:s,FixButtonHandler:r}}},ie={class:"flex items-center justify-evenly"},le={class:"rounded-md bg-red-50 p-4"},de={class:"flex"},ce={class:"flex-shrink-0"},ue={class:"ml-3"},fe=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),me={class:"mt-2 text-sm text-red-700"},ge={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function he(o,s,r,e,i,l){const n=_("XCircleIcon");return c(),u("div",ie,[t("div",le,[t("div",de,[t("div",ce,[p(n,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ue,[fe,t("div",me,[t("ul",ge,[(c(!0),u(O,null,H(e.errorMsg,a=>(c(),u("li",null,m(a),1))),256))])])])])]),r.FixButton?(c(),u("button",{key:0,onClick:s[0]||(s[0]=(...a)=>e.FixButtonHandler&&e.FixButtonHandler(...a)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):g("",!0)])}var N=k(ae,[["render",he]]);function $(o=[],s={},r="out"){const e=I({loading:!1,status:0,stdout:"",stderr:""}),i=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=r==="out"?"out":"message";async function l(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(o,s).then((n,a)=>{e.stdout=n,e.stderr=a}).catch((n,a)=>{var d;e.stderr=a!=null?a:n.message,e.status=(d=n.exit_status)!=null?d:-1}).finally(()=>{e.loading=!1})}return l(),i?new Promise((n,a)=>{b(e,()=>{e.loading||(e.status!==0?a(M({},e)):n(M({},e)))})}):e}const _e={setup(){const o=f(),s=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),r=f(),e=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const n=await $(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let a=JSON.parse(n.stdout);console.log(a),o.value=n.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(n){console.log(n),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(n.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const n=await $(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let a=JSON.parse(n.stdout);console.log(a),r.value=n.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(n){console.log(n),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(n.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:o,serverInfoError:s,lsdevInfo:r,lsdevError:e}},components:{RefreshIconOutline:C,ErrorMessage:N}},ve={class:"card m-3 grow"},xe=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),pe={class:"card-body dark:bg-stone-700"},ke={class:"mt-3 sm:mt-0 sm:ml-4"},ye={key:0},be={class:"w-3/4 m-2"},Ie={class:"whitespace-pre"},we={key:1},Be={class:"mt-3 sm:mt-0 sm:ml-4"},$e={key:2,class:"mt-2 flex"},Me={class:"w-3/4 m-2"},Ae={class:"whitespace-pre"},Fe={key:3};function Ce(o,s,r,e,i,l){const n=_("ErrorMessage");return c(),u("div",ve,[xe,t("div",pe,[t("div",ke,[t("button",{type:"button",onClick:s[0]||(s[0]=a=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?g("",!0):(c(),u("div",ye,[t("div",be,[t("div",Ie,m(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(c(),u("div",we,[p(n,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),t("div",Be,[t("button",{type:"button",onClick:s[1]||(s[1]=a=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?g("",!0):(c(),u("div",$e,[t("div",Me,[t("div",Ae,m(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(c(),u("div",Fe,[p(n,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])}var Se=k(_e,[["render",Ce]]);const Ye={props:{serverInfo:Object},setup(o){return{serverInfo:I(o.serverInfo)}}},De={class:"card mx-2 grow flex flex-col"},Ee=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Oe={class:"card-body dark:bg-stone-700 grow flex"},He={class:"grow flex flex-col items-stretch"},Ne={class:"mt-0"},Le={class:"sm:divide-y sm:divide-stone-200"},je={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Pe=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Te={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-3"},Re={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},qe={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},Xe=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model",-1),Ve={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},Je=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Controller ID",-1),Ue={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},We=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"PCI Slot",-1),ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function Ge(o,s,r,e,i,l){return c(),u("div",De,[Ee,t("div",Oe,[t("div",He,[t("div",Ne,[t("dl",Le,[t("div",je,[Pe,t("dd",Te,m(e.serverInfo.Model),1)]),(c(!0),u(O,null,H(e.serverInfo.HBA,n=>(c(),u("div",Re,[t("dt",qe,"HBA"+m(n.Ctl+1),1),t("div",null,[Xe,t("dd",Ve,m(n.Model),1)]),t("div",null,[Je,t("dd",Ue,m(n.Ctl),1)]),t("div",null,[We,t("dd",ze,m(n["PCI Slot"]),1)])]))),256))])])])])])}var Ke=k(Ye,[["render",Ge]]);const A=f({}),F=f("DONT GOT NONE..");b(A,()=>{console.log("currentLsdevOutput changed"),console.log(A.value)});b(F,()=>{console.log("currentDisk changed"),console.log(F.value)});var x={currentLsdevOutput:A,currentDisk:F};const Qe={components:{RefreshIconOutline:C},props:{diskInfo:Object},setup(o){b(x.currentDisk.value,(d,y)=>{d&&(i.value=!1,s.value=r[r.flat().findIndex(B=>B["bay-id"]===d)])});const s=f({}),r=I(o.diskInfo),e=f("Click on a disk for more detail."),i=f(!0),l=f(x.currentLsdevOutput.value.rows.flat().filter(d=>d.occupied).length),n=f(r.rows.flat().filter(d=>d.occupied).map(d=>Number(d.capacity.split(" ")[0])).reduce((d,y)=>d+y).toFixed(2)),a=f((r.rows.flat().filter(d=>d.occupied).map(d=>Number(d["temp-c"].replace(/[^0-9]/g,""))).reduce((d,y)=>d+y)/Number(l.value)).toFixed(2));return{diskInfo:r,wMsg:e,showWelcome:i,diskCount:l,storageCapacity:n,avgTemp:a,selectedDiskInfo:s}}},Ze={class:"card m-2 flex-auto flex flex-col"},es={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},ss=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),ts={class:"mt-3 sm:mt-0 sm:ml-4"},os={type:"button",class:"card-refresh-btn"},rs={class:"card-body dark:bg-stone-700 grow flex flex-col"},ns={class:"grow flex flex-col items-stretch"},as={class:"mt-0"},is={class:"sm:divide-y sm:divide-stone-200"},ls={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ds=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Disk Count",-1),cs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},us={class:"sm:divide-y sm:divide-stone-200"},fs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ms=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Total Storage",-1),gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},hs={class:"sm:divide-y sm:divide-stone-200"},_s={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},vs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),xs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ps={key:0},ks={key:1,class:"grow flex justify-center items-center"},ys={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function bs(o,s,r,e,i,l){const n=_("RefreshIconOutline");return c(),u("div",Ze,[t("div",es,[ss,t("div",ts,[t("button",os,[p(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",rs,[t("div",ns,[t("div",as,[t("dl",is,[t("div",ls,[ds,t("dd",cs,m(e.diskCount),1)])]),t("dl",us,[t("div",fs,[ms,t("dd",gs,m(e.storageCapacity)+" GB ",1)])]),t("dl",hs,[t("div",_s,[vs,t("dd",xs,m(e.avgTemp)+" \xB0C / "+m((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),e.showWelcome?g("",!0):(c(),u("div",ps,m(e.selectedDiskInfo),1)),e.showWelcome?(c(),u("div",ks,[t("div",ys,m(e.wMsg),1)])):g("",!0)])])}var Is=k(Qe,[["render",bs]]);const h={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},v=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],ws={name:"P5Stornado2U",props:{diskInfo:Object},setup(o){const s=f({}),r=f({});b(o,()=>{s.value=o.diskInfo},{immediate:!0,deep:!0});function e(l,n,a){return l?/Seagate Nytro/.test(a)?h.disks.seagate.image:/SEAGATE XS400LE10003/.test(n)?h.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(n)?h.disks.micron5200.image:/Micron_5300_/.test(n)?h.disks.micron5300.image:h.disks.default.image:null}const i=function(l){l.preload=n=>{h.chassis.image=l.loadImage(h.chassis.path),Object.entries(h.disks).forEach(([a,d])=>{h.disks[a].image=l.loadImage(d.path)}),s.value.rows.flat().forEach(a=>{const d=v.findIndex(y=>y.BAY===a["bay-id"]);v[d].occupied=a.occupied,v[d].image=e(a.occupied,a["model-name"],a["model-family"])})},l.setup=n=>{l.createCanvas(h.chassis.image.width,h.chassis.image.height).parent("p5-stornado2u"),l.noLoop()},l.draw=n=>{if(l.image(h.chassis.image,0,0),v.forEach(a=>{a.occupied&&l.image(a.image,a.x,a.y)}),x.currentDisk.value){let a=v.findIndex(d=>d.BAY===x.currentDisk.value);l.fill(127,127,127,127),l.rect(v[a].x,v[a].y,v[a].image.width,v[a].image.height)}},l.mouseClicked=n=>{let a=["1-1","2-5","1-5","2-13"];x.currentDisk.value=l.random(a)}};return X(()=>{new E(i)}),{diskInfo:s,currentDisk:r}}},Bs={id:"p5-stornado2u",class:"m-2"};function $s(o,s,r,e,i,l){return c(),u("div",Bs)}var Ms=k(ws,[["render",$s]]);const As={components:{RefreshIconOutline:C,P5Stornado2U:Ms},props:{diskInfo:Object},setup(o){return{diskInfo:f(o.diskInfo)}}},Fs={class:"card m-2"},Cs={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ss=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Ys={class:"mt-3 sm:mt-0 sm:ml-4"},Ds={type:"button",class:"card-refresh-btn"},Es={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Os(o,s,r,e,i,l){const n=_("RefreshIconOutline"),a=_("P5Stornado2U");return c(),u("div",Fs,[t("div",Cs,[Ss,t("div",Ys,[t("button",Ds,[p(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Es,[p(a,{diskInfo:e.diskInfo},null,8,["diskInfo"])])])}var Hs=k(As,[["render",Os]]);const Ns={name:"App",components:{P5Canvas:ne,FfdHeader:se,DebugBox:Se,ServerSection:Ke,DiskSection:Is,CanvasSection:Hs,ErrorMessage:N},setup(){console.log(x.currentLsdevOutput.value),console.log(x.currentDisk.value);const o=I({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await $(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(e.stdout);o.serverInfo.content=i,o.serverInfo.finished=!0,o.serverInfo.failed=!1,o.serverInfo.fixAvailable=!1}catch(e){console.log(e),o.serverInfo.content=null,o.serverInfo.finished=!1,o.serverInfo.failed=!0,o.serverInfo.fixAvailable=!1,o.serverInfo.errorMessage.length=0,o.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.serverInfo.errorMessage.push(e.stderr)}},r=async()=>{try{const e=await $(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(e.stdout);x.currentLsdevOutput.value=i,x.currentDisk.value="",o.lsdev.content=i,o.lsdev.finished=!0,o.lsdev.failed=!1,o.lsdev.fixAvailable=!1}catch(e){console.log(e),o.lsdev.content=null,o.lsdev.finished=!1,o.lsdev.failed=!0,o.lsdev.fixAvailable=!1,o.lsdev.errorMessage.length=0,o.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),o.lsdev.errorMessage.push(e.stderr)}};return s(),r(),{preloadChecks:o,runServerInfo:s,runLsdev:r}}},Ls={id:"App"},js={class:"h-screen flex flex-col overflow-hidden"},Ps={class:"flex flex-wrap overflow-y-auto"},Ts={class:"flex p-2 grow flex-wrap"},Rs={class:"flex p-2 mx-auto grow flex-col items-stretch"},qs={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},Xs={key:0,class:"p-2 m-2"},Vs={key:1,class:"p-2 m-2"};function Js(o,s,r,e,i,l){const n=_("FfdHeader"),a=_("CanvasSection"),d=_("DiskSection"),y=_("ServerSection"),B=_("ErrorMessage");return c(),u("div",Ls,[t("div",js,[p(n,{moduleName:"Disks",centerName:""}),t("div",Ps,[t("div",Ts,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(a,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):g("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),w(d,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):g("",!0)]),t("div",Rs,[e.preloadChecks.serverInfo.finished?(c(),w(y,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0)])]),t("div",qs,[e.preloadChecks.serverInfo.failed?(c(),u("div",Xs,[p(B,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),e.preloadChecks.lsdev.failed?(c(),u("div",Vs,[p(B,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])])}var Us=k(Ns,[["render",Js]]);V(Us).mount("#app");
