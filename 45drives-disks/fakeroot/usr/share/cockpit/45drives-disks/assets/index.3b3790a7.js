import{r as g,w as k,a as y,b as x,c as i,o as c,d as l,e as d,n as f,t as _,f as p,g as h,P as b,h as v,i as w}from"./vendor.01879e04.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};N();var m=(s,e)=>{const n=s.__vccOpts||s;for(const[o,t]of e)n[o]=t;return n};const $={props:{moduleName:String,centerName:Boolean},setup(s){const e=g(!0);function n(){let o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("color-theme");return t===null?o:t==="dark"}return e.value=n(),e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),k(()=>e.value,(o,t)=>{localStorage.setItem("color-theme",o?"dark":"light"),o?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:e}},components:{SunIcon:y,MoonIcon:x}},S={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},M={class:"flex flex-row items-baseline basis-10"},P=["src"],C={class:"text-2xl"},I=d("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),L={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function A(s,e,n,o,t,r){const a=i("SunIcon"),u=i("MoonIcon");return c(),l("div",S,[d("div",M,[d("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:o.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,P),d("h1",C,[d("span",{class:"text-red-800 dark:text-white font-bold",style:f({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),I]),n.centerName?p("",!0):(c(),l("h1",L,_(n.moduleName),1))]),n.centerName?(c(),l("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:f({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},_(n.moduleName),5)):p("",!0),d("button",{onClick:e[0]||(e[0]=X=>o.darkMode=!o.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[o.darkMode?(c(),h(a,{key:0})):(c(),h(u,{key:1}))])])}var E=m($,[["render",A]]);const B={name:"P5Canvas",mounted(){const s=function(e){var n=2,o=35;e.setup=t=>{e.createCanvas(500,500).parent("p5-canvas")},e.draw=t=>{e.background(245);const r=e.frameCount*3,a=e.sin(e.radians(r))*50;e.push(),e.translate(0,e.height/2),e.fill(66,184,131),e.stroke(53,73,94),e.strokeWeight(5),e.ellipse(o,a,50,50),e.pop(),o+=n,(o>e.width-35||o<35)&&(n*=-1)}};new b(s)}},D={id:"p5-canvas",class:"mt-2 mx-auto"};function O(s,e,n,o,t,r){return c(),l("div",D)}var F=m(B,[["render",O]]);const H={name:"App",components:{P5Canvas:F,FfdHeader:E}},z={id:"App"},V={class:"h-full flex flex-col overflow-hidden"};function j(s,e,n,o,t,r){const a=i("FfdHeader"),u=i("P5Canvas");return c(),l("div",z,[d("div",V,[v(a,{moduleName:"Disks",centerName:""}),v(u)])])}var T=m(H,[["render",j]]);w(T).mount("#app");
