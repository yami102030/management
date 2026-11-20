(()=>{var Ja=window.__TBC.React,r=Ja,{useState:l,useEffect:tt,useMemo:bt,useCallback:Ko,useRef:Ht,Fragment:Jo,createElement:Yo}=Ja;var La={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fa=r.createContext&&r.createContext(La);var yo=["attr","size","title"];function Bo(a,n){if(a==null)return{};var h,g,b=Wo(a,n);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(a);for(g=0;g<W.length;g++)h=W[g],n.indexOf(h)===-1&&{}.propertyIsEnumerable.call(a,h)&&(b[h]=a[h])}return b}function Wo(a,n){if(a==null)return{};var h={};for(var g in a)if({}.hasOwnProperty.call(a,g)){if(n.indexOf(g)!==-1)continue;h[g]=a[g]}return h}function qr(){return qr=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var h=arguments[n];for(var g in h)({}).hasOwnProperty.call(h,g)&&(a[g]=h[g])}return a},qr.apply(null,arguments)}function Ya(a,n){var h=Object.keys(a);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);n&&(g=g.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),h.push.apply(h,g)}return h}function $r(a){for(var n=1;n<arguments.length;n++){var h=arguments[n]!=null?arguments[n]:{};n%2?Ya(Object(h),!0).forEach(function(g){jo(a,g,h[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(h)):Ya(Object(h)).forEach(function(g){Object.defineProperty(a,g,Object.getOwnPropertyDescriptor(h,g))})}return a}function jo(a,n,h){return(n=bo(n))in a?Object.defineProperty(a,n,{value:h,enumerable:!0,configurable:!0,writable:!0}):a[n]=h,a}function bo(a){var n=Ho(a,"string");return typeof n=="symbol"?n:n+""}function Ho(a,n){if(typeof a!="object"||!a)return a;var h=a[Symbol.toPrimitive];if(h!==void 0){var g=h.call(a,n||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Qa(a){return a&&a.map((n,h)=>r.createElement(n.tag,$r({key:h},n.attr),Qa(n.child)))}function Z(a){return n=>r.createElement(Vo,qr({attr:$r({},a.attr)},n),Qa(a.child))}function Vo(a){var n=h=>{var g=a.attr,b=a.size,W=a.title,P=Bo(a,yo),v=b||h.size||"1em",y;return h.className&&(y=h.className),a.className&&(y=(y?y+" ":"")+a.className),r.createElement("svg",qr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},h.attr,g,P,{className:y,style:$r($r({color:a.color||h.color},h.style),a.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),W&&r.createElement("title",null,W),a.children)};return fa!==void 0?r.createElement(fa.Consumer,null,h=>n(h)):n(La)}function Ra(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(a)}function te(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function re(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(a)}function ae(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(a)}function ee(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(a)}function oe(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(a)}function ie(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(a)}function ne(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function de(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(a)}function he(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(a)}function le(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(a)}function ce(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(a)}function se(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function ue(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(a)}function ge(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(a)}function pe(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(a)}function ke(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(a)}function ve(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(a)}function xe(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(a)}function Le(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(a)}function fe(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"},child:[]}]})(a)}function Me(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(a)}function we(a){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(a)}var me=te;var Ce=pe,ye=ue,Xt=de;var Be=ve,Gr=xe,Ma=ae,We=ke,wa=ee,Xr=Le,Kt=Me;var kr=ne;var Jt=Ra,ma=se,Ca=ce,je=he,ya=le;var be=oe;var He=ge;var Ve=we,Ae=re,Ba=ie,_e=fe;var Ha=["日","一","二","三","四","五","六"],Se={m:15,l:18},Yt="!text-red-600 [&_*]:!text-red-600",Kr=["pastor","admin_staff"],Wa=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:a=>`${Math.ceil(a*4+22)}px`,min:a=>Math.ceil(a*4+22)},{id:"doer",label:"執行",sortable:!0,w:a=>`${Math.ceil(a*4+22)}px`,min:a=>Math.ceil(a*4+22)},{id:"status",label:"狀態",sortable:!0,w:a=>`${Math.ceil(a*.85*4+100)}px`,min:a=>Math.ceil(a*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:(a,n)=>`${ze(a,n)}px`,min:(a,n)=>ze(a,n)},{id:"time",label:"時間",w:a=>`${Math.ceil(a*7.4+28)}px`,min:a=>Math.ceil(a*7.4+28)},{id:"hours",label:"工時",sortable:!0,w:a=>`${Math.ceil(a*4.8+24)}px`,min:a=>Math.ceil(a*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:a=>`${Math.ceil(a*.85*4+52)}px`,min:a=>Math.ceil(a*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],ze=(a,n)=>Math.ceil(a*(n&&n.dateMulti?7:2.8)+26),Ao="Asia/Taipei",Ne=()=>{let a=new Intl.DateTimeFormat("sv-SE",{timeZone:Ao,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:a.slice(0,10),time:a.slice(11,16)}},Yr=a=>{let[n,h,g]=a.split("-").map(Number);return Date.UTC(n,h-1,g)},qe=a=>new Date(a).toISOString().slice(0,10),Jr=(a,n)=>qe(Yr(a)+n*864e5),$e=(a,n)=>Math.round((Yr(a)-Yr(n))/864e5),Ge=a=>new Date(Yr(a)).getUTCDay(),_o=a=>Jr(a,-((Ge(a)+6)%7)),Bt=a=>{let[,n,h]=a.split("-").map(Number);return`${n}/${h}`},So=(a,n)=>{let h=$e(a,n),g=h===0?"今天":h===1?"明天":h===-1?"昨天":"";return{text:`${Bt(a)}（${Ha[Ge(a)]}）`,tag:g}},D=a=>a?String(a).slice(0,5):"",Ze=a=>{if(!a.start_time||!a.end_time||a.start_date!==a.end_date)return null;let[n,h]=D(a.start_time).split(":").map(Number),[g,b]=D(a.end_time).split(":").map(Number),W=g*60+b-(n*60+h);return W>0?W/60:null},zo=a=>{if(!a.start_time||!a.end_time||a.start_date!==a.end_date)return null;let[n,h]=D(a.start_time).split(":").map(Number),[g,b]=D(a.end_time).split(":").map(Number),W=g*60+b-(n*60+h);return W<=0?null:`${Math.round(W/60*100)/100} 小時`},Pe={urgent:0,normal:1,routine:2},No={routine:"例行",normal:"普通",urgent:"緊急"},De={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},Zo={routine:"normal",normal:"urgent",urgent:"routine"},Qt=a=>{let n=String(a&&a.message||a||""),h=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改，執行者只能改狀態"],["nothing to confirm","已經不是「待確認」狀態"],["nothing to return","已經不是「待確認」狀態"],["assignee is not allowed","執行者必須是有權限的同工"],["cannot complete","工作已完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期工作置頂，無法調整位置"],["item not in your list","不在你的清單裡"],["item not found or canceled","工作已取消或不存在"],["more than one member record","共用帳號，洽行政辦公室"],["no member record","查無資料"],["no permission","權限不足"],["permission denied","權限不足"],["dates are required","日期必填"],["weekly rule needs","選一個星期"],["monthly rule needs","選日期，或勾選「每月最後一天」"],["until date is before","結束日不能早於開始日"],["not your recurring rule","權限不足"],["violates check constraint","規則不符（例如工作摘要空白、結束日期早於開始日期）"]];for(let[g,b]of h)if(n.includes(g))return b;return n||"發生未知錯誤"},Po=a=>{if(a.freq==="weekly")return"每週 "+[...a.week_days||[]].sort((h,g)=>h-g).map(h=>Ha[h%7]).join("、")+(a.skip_weeks&&a.skip_weeks.length?"（暫停第"+[...a.skip_weeks].sort((h,g)=>h-g).join("、")+"週）":"");let n=[];return a.month_day&&n.push(`${a.month_day} 號`),a.month_last_day&&n.push("最後一天"),"每月 "+n.join("、")},Te=({person:a,strong:n})=>r.createElement("span",{className:`truncate max-w-full ${n?"font-bold text-slate-900":"text-slate-700"}`},a&&a.name||"（未知）"),Fe=[[15,"15分"],[30,"30分"],[45,"45分"],[60,"1小時"],[90,"1.5小時"]],gt=a=>{if(!a)return null;let[n,h]=a.split(":").map(Number);return n*60+h},Oe=a=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,ja=a=>String(Math.round(a/60*100)/100),Do=Array.from({length:24},(a,n)=>String(n).padStart(2,"0")),To=Array.from({length:60},(a,n)=>String(n).padStart(2,"0")),ba=(a,n,h)=>a&&!n||!a&&n?"同時填寫或同時取消":a&&n&&h&&gt(n)<gt(a)?"結束時間不能早於開始時間":"",Qr=({value:a,onChange:n,className:h="",autoFocus:g,id:b,disabled:W})=>{let[P,v]=(a||"").split(":"),y=`tbc-time-sel bg-transparent outline-none cursor-pointer text-center ${P===void 0||P===""?"text-slate-400":"text-slate-900"}`;return r.createElement("div",{className:`tbc-time flex items-center gap-1 ${h}`},r.createElement("select",{id:b,disabled:W,autoFocus:g,"aria-label":"時",value:P||"",className:y,onChange:w=>{let L=w.target.value;n(L===""?"":`${L}:${v||"00"}`)}},r.createElement("option",{value:""},"--"),Do.map(w=>r.createElement("option",{key:w,value:w},w))),r.createElement("span",{className:"text-slate-400"},":"),r.createElement("select",{disabled:W,"aria-label":"分",value:v||"",className:y,onChange:w=>{let L=w.target.value;n(L===""&&!P?"":`${P||"00"}:${L||"00"}`)}},r.createElement("option",{value:""},"--"),To.map(w=>r.createElement("option",{key:w,value:w},w))))},Ue=({id:a,options:n,selected:h,multi:g,onChange:b,bad:W,className:P=""})=>{let[v,y]=l(!1),w=n.filter(B=>h.has(B.id)).map(B=>B.label),L=B=>{if(!g){b(new Set([B])),y(!1);return}let z=new Set(h);z.has(B)?z.delete(B):z.add(B),b(z)};return r.createElement("div",{className:`relative ${P}`},r.createElement("button",{id:a,type:"button",onClick:()=>y(B=>!B),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${W?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},r.createElement("span",{className:`truncate ${w.length?"text-slate-900":"text-slate-400"}`},w.length?w.join("、"):"請選擇"),r.createElement(Kt,{size:16,className:"text-slate-400 shrink-0"})),v&&r.createElement(r.Fragment,null,r.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>y(!1)}),r.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},n.map(B=>r.createElement("label",{key:B.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},r.createElement("input",{type:g?"checkbox":"radio",checked:h.has(B.id),onChange:()=>L(B.id),className:"accent-indigo-600"}),B.label)))))},Fo=({canEdit:a,options:n,ids:h,onSave:g,children:b})=>{let[W,P]=l(!1),[v,y]=l({x:0,y:0}),[w,L]=l(()=>new Set(h));if(!a)return b;let B=I=>{let N=I.currentTarget.getBoundingClientRect();y({x:Math.min(N.left,window.innerWidth-190),y:Math.min(N.bottom+4,window.innerHeight-200)}),L(new Set(h)),P(!0)},z=()=>{P(!1),w.size===h.length&&h.every(N=>w.has(N))||g([...w])},K=I=>L(N=>{let st=new Set(N);return st.has(I)?st.delete(I):st.add(I),st});return r.createElement("div",null,r.createElement("div",{onClick:B,title:"更換執行",className:"tbc-doer-edit cursor-pointer hover:bg-slate-100/80 rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]"},b),W&&r.createElement(r.Fragment,null,r.createElement("div",{className:"fixed inset-0 z-[60]",onClick:z}),r.createElement("div",{style:{left:v.x,top:v.y},className:"tbc-doer-menu fixed z-[70] w-44 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},n.map(I=>r.createElement("label",{key:I.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},r.createElement("input",{type:"checkbox",checked:w.has(I.id),onChange:()=>K(I.id),className:"accent-indigo-600"}),I.label)))))},Ie=({value:a,placeholder:n,canEdit:h,onSave:g,className:b="",centerEmpty:W})=>{let[P,v]=l(!1),[y,w]=l(a||""),L=Ht(!1);tt(()=>{P||w(a||"")},[a,P]);let B=async()=>{if(v(!1),L.current){L.current=!1;return}let z=y.trim();z!==(a||"").trim()&&await g(z)};return P?r.createElement("input",{autoFocus:!0,value:y,onChange:z=>w(z.target.value),onBlur:B,onKeyDown:z=>{z.key==="Enter"&&z.currentTarget.blur(),z.key==="Escape"&&(L.current=!0,z.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):r.createElement("div",{onClick:()=>h&&v(!0),className:`${b} ${h?"cursor-text hover:bg-slate-100/80":""} ${!a&&W?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},a||(h?r.createElement("span",{className:`text-slate-300 ${W?"block text-center":""}`},n):null))},Ee=({type:a,a:n,b:h,canEdit:g,children:b,onSave:W,validate:P})=>{let[v,y]=l(!1),[w,L]=l(""),[B,z]=l(n||""),[K,I]=l(h||""),N=Ht(!1);tt(()=>{v||(z(n||""),I(h||""))},[n,h,v]);let st=async()=>{if(N.current){N.current=!1,y(!1),L("");return}let E=P?P(B,K):"";if(E){L(E);return}L(""),y(!1),(B!==(n||"")||K!==(h||""))&&await W(B,K)};if(!v)return r.createElement("div",{onClick:()=>g&&y(!0),className:`${g?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},b);let H="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return r.createElement("div",{tabIndex:-1,onBlur:E=>{E.currentTarget.contains(E.relatedTarget)||st()},onKeyDown:E=>{E.key==="Enter"&&st(),E.key==="Escape"&&(N.current=!0,y(!1),L(""))},className:"flex flex-col gap-1"},r.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",a==="time"?r.createElement(Qr,{autoFocus:!0,value:B,onChange:z,className:H}):r.createElement("input",{autoFocus:!0,type:a,value:B,onChange:E=>z(E.target.value),className:H})),r.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",a==="time"?r.createElement(Qr,{value:K,onChange:I,className:H}):r.createElement("input",{type:a,value:K,onChange:E=>I(E.target.value),className:H})),w&&r.createElement("div",{role:"alert",className:"tbc-range-err text-[0.75em] text-red-600"},w))},Oo=({mode:a,initial:n,presetRepeat:h,today:g,onClose:b,onSubmit:W,busy:P,people:v=[],meId:y,parent:w})=>{let L=n||{},B=a==="editRule",z=a!=="create",[K,I]=l(L.title||""),[N,st]=l(L.start_date||g),[H,E]=l(D(L.start_time)),[dt,Vt]=l(L.end_date||L.start_date||g),[m,Rt]=l(D(L.end_time)),[et,Ot]=l(L.priority||(a==="createRule"?"routine":"normal")),[pt,vr]=l(L.note||""),[q,kt]=l(null),[At,Mt]=l(!1),[_t,vt]=l(!1),[ut,xr]=l(""),[Lr,ot]=l(""),it=a==="createRule"||a==="editRule"||N===dt;tt(()=>{it||(E(""),Rt(""),kt(null),Mt(!1),vt(!1),ot(""))},[it]);let tr=(d,f)=>{let S=gt(d),T=gt(f);if(!it||S===null||T===null||T<=S){kt(null),vt(!1);return}kt(T-S),vt(!1)},zt=(d,f,S,T)=>{if(ot(""),!!d){if(T!=="end"&&f){let Ct=gt(f)+d;if(Ct>=1440){ot("工時超出當天，調整開始時間或工時");return}S&&gt(S)!==Ct&&ot("開始、結束時間和工時不符，已自動修正結束時間"),Rt(Oe(Ct))}else if(S){let Ct=gt(S)-d;if(Ct<0){ot("工時超出當天，調整結束時間或工時");return}f&&gt(f)!==Ct&&ot("開始、結束時間和工時不符，已自動修正開始時間"),E(Oe(Ct))}}},Rr=d=>{d!==H&&(E(d),ot(""),At&&q?zt(q,d,m,"start"):tr(d,m))},ta=d=>{d!==m&&(Rt(d),ot(""),At&&q?zt(q,H,d,"end"):tr(H,d))},fr=d=>{if(ot(""),d===""){Mt(!1),vt(!1),tr(H,m);return}if(d==="custom"){Mt(!0),vt(!0),xr(q?ja(q):"");return}let f=Number(d);Mt(!0),vt(!1),kt(f),zt(f,H,m,H?"start":"end")},Mr=d=>{xr(d),Mt(!0),vt(!0);let f=parseFloat(d);if(f>0&&Math.round(f*60)>J){kt(null),ot(`工時不能超出當天，最多 ${ja(J)} 小時`);return}if(f>0&&f<24){let S=Math.round(f*60);kt(S),zt(S,H,m,H?"start":"end")}else kt(null),ot("")},J=H?1439-gt(H):m?gt(m):1439,rr=_t?"custom":q===null?"":Fe.some(([d])=>d===q)?String(q):"custom",[$,Ut]=l(B?L.freq:a==="createRule"?"weekly":"none"),It=a==="createRule"||B&&L.freq==="weekly",[ar,ra]=l(Array.isArray(L.skip_weeks)?L.skip_weeks:[]),wr=d=>ra(f=>f.includes(d)?f.filter(S=>S!==d):[...f,d].sort((S,T)=>S-T)),[xt,er]=l(L.week_days||[]),[wt,or]=l(L.month_day?String(L.month_day):""),[Nt,Zt]=l(!!L.month_last_day),[Et,Pt]=l(L.until_date||""),[aa,ea]=l(L.is_active===void 0?!0:L.is_active),ir=bt(()=>{let d=new Set,f=[],S=T=>{d.has(T.member_id)||(d.add(T.member_id),f.push({id:T.member_id,label:T.member_id===y?"我":T.name}))};return v.filter(T=>T.member_id===y).forEach(S),v.filter(T=>Kr.includes(T.role)).forEach(S),y&&!d.has(y)&&f.unshift({id:y,label:"我"}),f},[v,y]),[nr,oa]=l(()=>new Set(y?[y]:[])),[mr,Cr]=l(()=>new Set(y?[y]:[])),[Dt,yr]=l(""),[mt,_]=l(""),X=(d,f)=>{yr(d),_(f),setTimeout(()=>{let S=document.getElementById(f);if(S){S.scrollIntoView({block:"center",behavior:"smooth"});try{S.focus({preventScroll:!0})}catch{}}},0)},rt="text-xs font-medium text-slate-500",ht="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",Br=d=>er(f=>f.includes(d)?f.filter(S=>S!==d):[...f,d]),Wr=()=>{if(yr(""),_(""),!K.trim())return X(w?"輸入子工作":"輸入工作摘要","tbc-f-title");if(a==="create"&&nr.size===0)return X("選擇派工者","tbc-f-disp");if(a==="create"&&mr.size===0)return X("選擇執行者","tbc-f-doer");if(!N)return X("開始日期必填","tbc-f-start");if(q&&!H&&!m)return X("填寫開始時間或結束時間","tbc-f-stime");if(H&&!m||!H&&m)return X("同時填寫或同時取消",H?"tbc-f-etime":"tbc-f-stime");if(H&&m&&it&&gt(m)<gt(H))return X("結束時間不能早於開始時間","tbc-f-etime");if($==="none"&&(!dt||dt<N))return X("結束日期不能早於開始日期","tbc-f-end");if($==="weekly"&&xt.length===0)return X("至少選一個星期","tbc-f-week");if($==="monthly"&&!wt&&!Nt)return X("選日期，或勾選「每月最後一天」","tbc-f-month");if($!=="none"&&Et&&Et<N)return X("重複的結束日不能早於開始日","tbc-f-until");W({title:K.trim(),startDate:N,startTime:it&&H||null,endDate:$==="none"?dt:N,endTime:it&&m||null,priority:et,note:pt.trim()||null,repeat:$,weekdaysOnly:!1,weekDays:$==="weekly"?xt:[],skipWeeks:$==="weekly"?ar:[],monthDay:$==="monthly"&&wt?Number(wt):null,monthLast:$==="monthly"&&Nt,untilDate:Et||null,isActive:aa,assigneeIds:[...mr],dispatcherId:[...nr][0]||y})};return r.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},r.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},r.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},r.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},B?r.createElement(r.Fragment,null,r.createElement(kr,{className:"text-indigo-600",size:20})," 修改週期工作"):a==="createRule"?r.createElement(r.Fragment,null,r.createElement(kr,{className:"text-indigo-600",size:20})," 新增週期工作"):r.createElement(r.Fragment,null,r.createElement(Xt,{className:"text-indigo-600",size:20})," ",w?"新增子工作":"新增")),r.createElement("button",{onClick:b,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},r.createElement(Jt,{size:20}))),r.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},w?"子工作":"工作摘要",r.createElement("span",{className:"text-red-500"},"*")),r.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:K,onChange:d=>I(d.target.value),placeholder:"簡短描述工作內容",className:`${ht} ${mt==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),a==="create"&&ir.length>0&&r.createElement("div",{className:"grid grid-cols-2 gap-4"},r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"派工",r.createElement("span",{className:"text-red-500"},"*")),r.createElement(Ue,{id:"tbc-f-disp",options:ir,selected:nr,onChange:oa,bad:mt==="tbc-f-disp"})),r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"執行",r.createElement("span",{className:"text-red-500"},"*")),r.createElement(Ue,{id:"tbc-f-doer",options:ir,selected:mr,multi:!0,onChange:Cr,bad:mt==="tbc-f-doer"}))),z&&r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},It?"在這幾天重複":"重複"),!It&&r.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["weekly","每週"],["monthly","每月"]].filter(([d])=>!((B||a==="createRule")&&d==="none")).map(([d,f])=>r.createElement("button",{key:d,type:"button",onClick:()=>Ut(d),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${$===d?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},f))),$==="weekly"&&r.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${mt==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(d=>r.createElement("button",{key:d,type:"button",onClick:()=>Br(d),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${xt.includes(d)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},Ha[d%7]))),$==="weekly"&&It&&r.createElement("div",{className:"space-y-1.5 pt-3"},r.createElement("label",{className:rt},"每月暫停週次"),r.createElement("div",{className:"flex gap-2 flex-wrap"},[1,2,3,4,5].map(d=>r.createElement("button",{key:d,type:"button",onClick:()=>wr(d),className:`h-8 px-3 rounded-full border text-xs font-medium transition-all ${ar.includes(d)?"bg-amber-500 border-amber-500 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-amber-300"}`},`第${d}週`)))),$==="monthly"&&r.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},r.createElement("select",{id:"tbc-f-month",value:wt,onChange:d=>or(d.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},r.createElement("option",{value:""},"不指定"),Array.from({length:31},(d,f)=>f+1).map(d=>r.createElement("option",{key:d,value:d},d," 日"))),r.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},r.createElement("input",{type:"checkbox",checked:Nt,onChange:d=>Zt(d.target.checked),className:"accent-indigo-600"})," 每月最後一天"),wt&&Number(wt)>28&&!Nt&&r.createElement("span",{className:"text-xs text-amber-600"}," 如果沒有",wt," 日，排程自動略過，建議勾選「每月最後一天」"))),r.createElement("div",{className:"grid grid-cols-2 gap-4"},r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"開始日期"),r.createElement("input",{id:"tbc-f-start",type:"date",value:N,onChange:d=>{st(d.target.value),dt<d.target.value&&Vt(d.target.value)},className:`${ht} ${mt==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"開始時間",it?"（選填）":"（禁填）"),r.createElement(Qr,{disabled:!it,id:"tbc-f-stime",value:H,onChange:Rr,className:`${ht} !w-auto min-w-[8rem] ${mt==="tbc-f-stime"?"!border-red-400 ring-2 ring-red-200":""}`})),$==="none"?r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"結束日期"),r.createElement("input",{id:"tbc-f-end",type:"date",value:dt,min:N,onChange:d=>Vt(d.target.value),className:`${ht} ${mt==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"結束日期（選填）"),r.createElement("input",{id:"tbc-f-until",type:"date",value:Et,min:N,onChange:d=>Pt(d.target.value),className:ht})),r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"結束時間",it?"（選填）":"（禁填）"),(()=>{let d=H&&m?ba(H,m,!N||$!=="none"||dt===N):"";return d?r.createElement("div",{role:"alert",className:"tbc-time-err text-xs text-red-600"},d):null})(),r.createElement(Qr,{disabled:!it,id:"tbc-f-etime",value:m,onChange:ta,className:`${ht} !w-auto min-w-[8rem] ${mt==="tbc-f-etime"?"!border-red-400 ring-2 ring-red-200":""}`})),r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"優先順序"),r.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([d,f])=>r.createElement("button",{key:d,type:"button",onClick:()=>Ot(d),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${et===d?d==="urgent"?"bg-white text-red-600 shadow-sm":d==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},f)))),r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"工時",it?"（選填）":"（禁填）"),r.createElement("div",{className:"flex items-center gap-2"},r.createElement("select",{id:"tbc-f-dur",disabled:!it,"aria-label":"工時",value:rr,onChange:d=>fr(d.target.value),className:`${ht} !w-auto min-w-[8rem] cursor-pointer ${rr?"text-slate-900":"text-slate-400"}`},r.createElement("option",{value:""},"--"),Fe.map(([d,f])=>r.createElement("option",{key:d,value:d,disabled:d>J},f)),r.createElement("option",{value:"custom"},"自訂")),rr==="custom"&&r.createElement("label",{className:"flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap"},r.createElement("input",{"aria-label":"自訂工時（小時）",type:"number",min:"0.25",max:Math.floor(J/60*100)/100,step:"0.25",value:_t?ut:q?ja(q):"",onChange:d=>Mr(d.target.value),className:"tbc-dur-custom w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"}),"小時")))),r.createElement("div",{className:"space-y-1.5"},r.createElement("label",{className:rt},"備註"),r.createElement("textarea",{value:pt,onChange:d=>vr(d.target.value),rows:2,className:ht})),Lr&&r.createElement("div",{className:"tbc-hint bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg px-4 py-3"},Lr),Dt&&r.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},r.createElement(Gr,{size:16})," ",Dt)),r.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},r.createElement("button",{onClick:b,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),r.createElement("button",{onClick:Wr,disabled:P,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},B?"儲存":$==="none"?"新增":"儲存"))))},Uo=({session:a,supabase:n,utils:h,shell:g,setBadge:b})=>{let[W,P]=l(Ne()),[v,y]=l(null),[w,L]=l([]),[B,z]=l(""),[K,I]=l([]),[N,st]=l(!0),[H,E]=l({type:"",text:""}),[dt,Vt]=l(null),[m,Rt]=l("mine"),[et,Ot]=l("today"),[pt,vr]=l(""),[q,kt]=l(""),[At,Mt]=l(new Set),[_t,vt]=l(""),[ut,xr]=l({col:null,dir:"asc"}),Lr=t=>xr(e=>e.col!==t?{col:t,dir:"asc"}:e.dir==="asc"?{col:t,dir:"desc"}:{col:null,dir:"asc"}),[ot,it]=l(()=>{try{let t=localStorage.getItem("tbcWorkFont");return Se[t]?t:"m"}catch{return"m"}}),tr=t=>{it(t);try{localStorage.setItem("tbcWorkFont",t)}catch{}},[zt,Rr]=l(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),ta=t=>Rr(e=>{let o=e.includes(t)?e.filter(i=>i!==t):[...e,t];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(o))}catch{}return o}),[fr,Mr]=l(!1),J=r.createElement,[rr,$]=l(()=>{try{let t=JSON.parse(localStorage.getItem("tbcWorkColOrder")||"[]");return Array.isArray(t)?t:[]}catch{return[]}}),[Ut,It]=l(()=>{try{let t=JSON.parse(localStorage.getItem("tbcWorkColWidths")||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}),ar=(t,e)=>It(o=>{let i={...o};e?i[t]=e:delete i[t];try{localStorage.setItem("tbcWorkColWidths",JSON.stringify(i))}catch{}return i}),ra=(t,e,o)=>{t.preventDefault(),t.stopPropagation();let i=t.currentTarget.parentElement,c=t.clientX,j=i.getBoundingClientRect().width,C=G=>{let R=Math.max(e.id==="title"?120:40,Math.round(j+G.clientX-c));It(u=>({...u,[e.id]:R}))},V=G=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",V);let R=Math.max(e.id==="title"?120:40,Math.round(j+G.clientX-c));ar(e.id,R)};window.addEventListener("mousemove",C),window.addEventListener("mouseup",V)},wr=t=>[1].map(()=>r.createElement("span",{key:"rz",role:"separator","aria-label":"調整欄寬",title:"拖曳調整欄寬（雙擊恢復自動）",draggable:!1,onMouseDown:e=>ra(e,t,"r"),onClick:e=>e.stopPropagation(),onDoubleClick:e=>{e.stopPropagation(),ar(t.id,null)},style:{position:"absolute",top:0,bottom:0,right:0,width:8,cursor:"col-resize",zIndex:5,background:"transparent",transition:"background 0.12s"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(129,140,248,0.55)"},onMouseLeave:e=>{e.currentTarget.style.background="transparent"}})),[xt,er]=l(null),[wt,or]=l(null),Nt=t=>{try{return localStorage.getItem(t)!=="0"}catch{return!0}},[Zt,Et]=l(()=>Nt("tbcWorkOverdueOpen")),[Pt,aa]=l(()=>Nt("tbcWorkHoldOpen")),ea=(t,e)=>e(o=>{let i=!o;try{localStorage.setItem(t,i?"1":"0")}catch{}return i}),[ir,nr]=l(""),[oa,mr]=l(""),[Cr,Dt]=l(!1),[yr,mt]=l(()=>new Set),[_,X]=l(null),[rt,ht]=l(!1),[Br,Wr]=l(!1),d=Ht(!1),[f,S]=l([]),[T,Ct]=l(()=>new Set),[jr,Je]=l([]),[br,Ye]=l([]),[Hr,Aa]=l([]),ia=Ht("mine"),na=20,[Vr,Qe]=l(""),[dr,_a]=l([]),[Ar,Sa]=l([]),[Re,da]=l(!1),[yt,qt]=l(1),[za,ha]=l("1"),_r=Ht(0),Sr=Ht(""),[hr,zr]=l(null),[Tt,la]=l(null),[to,Nr]=l(null),[Na,ca]=l(null),Wt=Se[ot],at=Wt+3,lt=W.date,Za=Ht(null),lr=Ht(0),ct=(t,e)=>{E({type:t,text:e}),clearTimeout(Za.current),Za.current=setTimeout(()=>E({type:"",text:""}),3200)},O=async(t,e)=>{let{data:o,error:i}=await n.rpc(t,e||{});if(i)throw i;return o},Y=async(t,e)=>{try{let o=await t();return await sa(!0),Sr.current.trim()&&ua(),sr(),ia.current==="notice"&&qa(),e&&ct("success",typeof e=="function"?e(o):e),o}catch(o){ct("error",Qt(o)),await sa(!0),Sr.current.trim()&&ua();return}},Q=bt(()=>{if(et==="today")return{start:lt,end:lt};if(et==="month"){let[o,i]=lt.split("-").map(Number);return{start:`${o}-${String(i).padStart(2,"0")}-01`,end:qe(Date.UTC(o,i,0))}}if(et==="week"){let o=_o(lt);return{start:o,end:Jr(o,6)}}let t=pt||lt,e=q||t;return t<=e?{start:t,end:e}:{start:e,end:t}},[et,pt,q,lt]);tt(()=>{let t=setInterval(()=>P(e=>{let o=Ne();return o.date===e.date&&o.time===e.time?e:o}),3e4);return()=>clearInterval(t)},[]);let ro=async()=>{try{let t=await O("work_current_member"),e=await O("work_list_people");return y(t),L(e||[]),Mt(new Set((e||[]).filter(o=>Kr.includes(o.role)).map(o=>o.member_id))),z(""),!0}catch(t){return z(Qt(t)),!1}},sa=async t=>{let e=++lr.current;t||st(!0);try{let o=h&&h.fetchAllData?h.fetchAllData:p=>p(),i=p=>{if(p&&p.error)throw p.error;return p&&p.data||[]},c=i(await o(()=>n.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).is("parent_id",null).lte("start_date",Q.end).gte("end_date",Q.start))),j=i(await o(()=>n.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).lte("end_date",lt).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),C=i(await o(()=>n.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).eq("work_assignees.status","on_hold"))),V=new Set(c.map(p=>p.id)),G=[...j,...C].map(p=>p.id).filter((p,F,U)=>!V.has(p)&&U.indexOf(p)===F),R=[];if(G.length&&(R=i(await o(()=>n.from("work_items").select("*, work_assignees(*)").in("id",G)))),e!==lr.current)return;let u=[];for(let p of[...c,...R]){let{work_assignees:F,...U}=p;for(let A of F||[])u.push({key:A.id,item:{...U,assigneeCount:(F||[]).length,assigneeIds:(F||[]).map(M=>M.member_id)},a:A})}I(u);let x=[...new Set(u.map(p=>p.item.id))],s=[];if(x.length){let p=i(await o(()=>n.from("work_items").select("*, work_assignees(*)").in("parent_id",x).is("canceled_at",null)));for(let F of p){let{work_assignees:U,...A}=F;for(let M of U||[])s.push({key:M.id,item:{...A,assigneeCount:(U||[]).length,assigneeIds:(U||[]).map(k=>k.member_id)},a:M})}}if(e!==lr.current)return;Je(s)}catch(o){e===lr.current&&ct("error","讀取失敗："+Qt(o))}finally{e===lr.current&&!t&&st(!1)}},Pa=t=>{let e=[];for(let o of t){let{work_assignees:i,...c}=o;for(let j of i||[])e.push({key:j.id,item:{...c,assigneeCount:(i||[]).length,assigneeIds:(i||[]).map(C=>C.member_id)},a:j})}return e},ua=async t=>{let e=(t===void 0?Sr.current:t).trim(),o=++_r.current,i=[...new Set(e.split(/\s+/).map(c=>c.replace(/[\\%_]/g,"")).filter(Boolean))];if(!i.length){_a([]),Sa([]),da(!1);return}da(!0);try{let c=u=>{if(u&&u.error)throw u.error;return u&&u.data||[]},j=async u=>{let x=u.replace(/"/g,'\\"'),s=u.toLowerCase(),p=new Set;c(await n.from("work_items").select("id, parent_id").is("canceled_at",null).or(`title.ilike."%${x}%",note.ilike."%${x}%"`).limit(2e3)).forEach(A=>p.add(A.parent_id||A.id));let U=w.filter(A=>A.name&&A.name.toLowerCase().includes(s)).map(A=>A.member_id);return U.length&&(c(await n.from("work_assignees").select("item_id, work_items!inner(parent_id, canceled_at)").in("member_id",U).limit(2e3)).forEach(k=>{k.work_items.canceled_at||p.add(k.work_items.parent_id||k.item_id)}),c(await n.from("work_items").select("id, parent_id").is("canceled_at",null).in("creator_member_id",U).limit(2e3)).forEach(k=>p.add(k.parent_id||k.id))),p},C=null;for(let u of i){let x=await j(u);if(C=C===null?[...x]:C.filter(s=>x.has(s)),!C.length)break}C=C||[];let V=[];for(let u=0;u<C.length;u+=100)V.push(...c(await n.from("work_items").select("*, work_assignees(*)").in("id",C.slice(u,u+100)).is("canceled_at",null)));let G=Pa(V),R=[];for(let u=0;u<C.length;u+=100)R.push(...c(await n.from("work_items").select("*, work_assignees(*)").in("parent_id",C.slice(u,u+100)).is("canceled_at",null)));if(o!==_r.current)return;_a(G),Sa(Pa(R))}catch(c){o===_r.current&&ct("error","搜尋失敗："+Qt(c))}finally{o===_r.current&&da(!1)}};tt(()=>{let t=setTimeout(()=>{Sr.current=_t,Qe(_t.trim())},300);return()=>clearTimeout(t)},[_t]),tt(()=>{qt(1),v&&ua(Vr)},[Vr,v,w]),tt(()=>{qt(1)},[m,At]),tt(()=>{ha(String(yt))},[yt]),tt(()=>{ro()},[]),tt(()=>{v&&sa(!1)},[v,Q.start,Q.end,lt]),tt(()=>{et==="custom"&&!pt&&(vr(lt),kt(Jr(lt,6)))},[et]);let St=bt(()=>{let t={};return w.forEach(e=>{t[e.member_id]={name:e.name,role:e.role}}),t},[w]),Io=v?St[v]:null,ga=bt(()=>w.filter(t=>Kr.includes(t.role)),[w]),Zr=t=>{let e=t.a.status==="done",o=t.a.status==="awaiting_confirm",i=!!t.a.skipped_at||t.a.status==="on_hold",c=D(t.item.end_time),j=!e&&!o&&!i&&(t.item.end_date<W.date||t.item.end_date===W.date&&c&&c<W.time);return{...t,done:e,awaiting:o,skipped:i,overdue:j,isMine:t.a.member_id===v,isCreator:t.item.creator_member_id===v,canManage:t.item.creator_member_id===v||t.item.entered_by===v,isRoutine:t.item.assigneeCount===1&&t.item.creator_member_id===t.a.member_id,isRecurring:!!t.item.recurring_rule_id,person:St[t.a.member_id],dispatcher:St[t.item.creator_member_id]}},Ft=Vr!==""&&m!=="notice",{overdueRows:Pr,holdRows:Dr,groups:pa,total:Da,pages:jt}=bt(()=>{let t=s=>m==="mine"?s.isMine:m==="tome"?s.isMine&&!s.isCreator:m==="dispatched"?s.canManage&&!s.isMine:At.has(s.a.member_id);if(Ft){let s=dr.map(Zr).filter(t).sort((k,ft)=>ft.item.start_date.localeCompare(k.item.start_date)||(D(k.item.start_time)||"99:99").localeCompare(D(ft.item.start_time)||"99:99")||k.a.sort_order-ft.a.sort_order),p=Math.max(1,Math.ceil(s.length/na)),F=Math.min(yt,p),U=s.slice((F-1)*na,F*na),A={};U.forEach(k=>{(A[k.item.start_date]=A[k.item.start_date]||[]).push(k)});let M=Object.keys(A).sort().reverse().map(k=>({date:k,rows:A[k],canMove:!1}));return{overdueRows:[],holdRows:[],groups:M,total:s.length,pages:p}}let o=K.map(Zr).filter(t),i=o.filter(s=>s.overdue).sort((s,p)=>(s.item.end_date+D(s.item.end_time)).localeCompare(p.item.end_date+D(p.item.end_time))||(s.person&&s.person.name||"").localeCompare(p.person&&p.person.name||"")),c=s=>s.skipped&&!s.done&&!s.awaiting,j=o.filter(c).sort((s,p)=>(s.item.start_date+D(s.item.start_time)).localeCompare(p.item.start_date+D(p.item.start_time))||(s.person&&s.person.name||"").localeCompare(p.person&&p.person.name||"")),C=o.filter(s=>!s.overdue&&!c(s)&&s.item.start_date<=Q.end&&s.item.end_date>=Q.start),V={};C.forEach(s=>{(V[s.item.start_date]=V[s.item.start_date]||[]).push(s)});let G=Object.keys(V).sort().map(s=>{let p=V[s].sort((U,A)=>{if(m!=="all")return U.a.sort_order-A.a.sort_order||String(U.a.created_at).localeCompare(String(A.a.created_at));let M=D(U.item.start_time)||"99:99",k=D(A.item.start_time)||"99:99";return M.localeCompare(k)||(U.person&&U.person.name||"").localeCompare(A.person&&A.person.name||"")}),F=m==="mine"&&s>=Q.start;return{date:s,rows:p,canMove:F}}),R=i,u=j,x=G;if(ut.col){let s=ut.dir==="asc"?1:-1,p=(M,k)=>String(M||"").localeCompare(String(k||""),"zh-Hant"),F=M=>M.done?3:M.awaiting?2:M.skipped?1:0,A={title:(M,k)=>p(M.item.title,k.item.title),who:(M,k)=>p(M.dispatcher&&M.dispatcher.name,k.dispatcher&&k.dispatcher.name),doer:(M,k)=>p(M.person&&M.person.name,k.person&&k.person.name),status:(M,k)=>F(M)-F(k),priority:(M,k)=>(Pe[M.item.priority]??1)-(Pe[k.item.priority]??1),hours:(M,k)=>{let ft=Ze(M.item),pr=Ze(k.item);return ft==null&&pr==null?0:ft==null?2*s:pr==null?-2*s:ft-pr},date:(M,k)=>(M.item.start_date+D(M.item.start_time)).localeCompare(k.item.start_date+D(k.item.start_time))}[ut.col];if(A){let M=k=>[...k].sort((ft,pr)=>s*A(ft,pr));ut.col==="date"?(R=M(i),u=M(j),x=[...G].sort((k,ft)=>s*k.date.localeCompare(ft.date))):(R=M(i),u=M(j),x=G.map(k=>({...k,rows:M(k.rows)})))}x=x.map(M=>({...M,canMove:!1}))}return{overdueRows:R,holdRows:u,groups:x,total:i.length+j.length+C.length,pages:1}},[K,W,v,m,At,Q,St,Ft,dr,yt,ut]);tt(()=>{yt>jt&&qt(jt)},[jt]);let Tr=bt(()=>{let t={},e=new Set;return[...jr,...Ar].filter(o=>!e.has(o.key)&&e.add(o.key)).map(Zr).sort((o,i)=>(o.item.start_date+D(o.item.start_time)).localeCompare(i.item.start_date+D(i.item.start_time))||String(o.item.created_at).localeCompare(String(i.item.created_at))).forEach(o=>{(t[o.item.parent_id]=t[o.item.parent_id]||[]).push(o)}),t},[jr,Ar,W,v,St]),Fr=bt(()=>{let t={},e={};return br.forEach(o=>{if(o.item_id&&!o.read_at&&!(o.item_id in t)&&(t[o.item_id]=o.created_at),o.item_id&&!o.read_at&&o.kind==="edited"&&o.change_note){let i=e[o.item_id]=e[o.item_id]||[];o.change_note.split("、").forEach(c=>{i.includes(c)||i.push(c)})}}),Hr.map(Zr).filter(o=>(o.canManage||o.isMine)&&o.item.id in t).map(o=>({...o,notice:!0,changedFields:e[o.item.id]||[]})).sort((o,i)=>String(t[i.item.id]||"").localeCompare(String(t[o.item.id]||"")))},[Hr,br,v,St,W]),Ta={dateMulti:bt(()=>[K,jr,dr,Ar,Hr].some(t=>t.some(e=>e.item.start_date!==e.item.end_date)),[K,jr,dr,Ar,Hr])},Fa=t=>{let e=Wa.map(i=>i.id),o=[];return(t||[]).forEach(i=>{e.includes(i)&&!o.includes(i)&&o.push(i)}),e.forEach(i=>{o.includes(i)||o.push(i)}),o},$t=Fa(rr).map(t=>Wa.find(e=>e.id===t)).filter(t=>t.locked||!zt.includes(t.id)),ao=(t,e)=>$(o=>{let i=Fa(o),c=i.indexOf(t),j=i.indexOf(e);if(c<0||j<0||c===j)return o;let C=[...i];C.splice(c,1),C.splice(j,0,t);try{localStorage.setItem("tbcWorkColOrder",JSON.stringify(C))}catch{}return C}),Oa=t=>{let e=i=>$t.findIndex(c=>c.id===i),o=xt&&wt===t.id&&xt!==t.id;return{draggable:!0,onDragStart:i=>{er(t.id);try{i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",t.id)}catch{}},onDragOver:i=>{xt&&(i.preventDefault(),wt!==t.id&&or(t.id))},onDrop:i=>{i.preventDefault(),xt&&xt!==t.id&&ao(xt,t.id),er(null),or(null)},onDragEnd:()=>{er(null),or(null)},style:o?{position:"relative",boxShadow:`inset ${e(xt)<e(t.id)?"-3px":"3px"} 0 0 #6366f1`,background:"#e0e7ff"}:{position:"relative"},title:t.sortable?"點擊排序・拖曳移動":"拖曳調整欄位順序"}},eo=t=>Ut[t.id]?`${Ut[t.id]}px`:typeof t.w=="function"?t.w(Wt,Ta):t.w,oo=t=>Ut[t.id]?Ut[t.id]:typeof t.min=="function"?t.min(Wt,Ta):t.min,ka=`56px ${$t.map(eo).join(" ")}`,io=56+$t.reduce((t,e)=>t+oo(e),0)+16,cr=(t,e,o)=>Y(()=>{let i={...t.item,...e};return O("work_update_routine",{p_item_id:i.id,p_title:i.title,p_start_date:i.start_date,p_start_time:i.start_time||null,p_end_date:i.end_date,p_end_time:i.end_time||null,p_priority:i.priority||"normal",p_note:i.note||null,p_meeting_flag:null})},o||(t.canManage?void 0:"資料更新，通知派工者")),no=(t,e,o)=>{if(!e||!o){ct("error","日期必填");return}let i=e,c=o;if(e!==t.item.start_date&&o===t.item.end_date&&(c=Jr(e,$e(t.item.end_date,t.item.start_date))),c<i){ct("error","結束日期不能早於開始日期");return}let j=!(i<=Q.end&&c>=Q.start);return cr(t,i!==c?{start_date:i,end_date:c,start_time:null,end_time:null}:{start_date:i,end_date:c},j?`工作移至 ${Bt(i)}`:null)},ho=(t,e,o)=>{let i=ba(e,o,t.item.start_date===t.item.end_date);if(i){ct("error",i);return}return cr(t,{start_time:e||null,end_time:o||null})},lo=t=>{let e=new Set,o=[],i=(c,j)=>{c&&!e.has(c)&&(e.add(c),o.push({id:c,label:c===v?"我":j}))};return v&&i(v,"我"),w.filter(c=>Kr.includes(c.role)).forEach(c=>i(c.member_id,c.name)),(t||[]).forEach(c=>i(c,St[c]&&St[c].name||"—")),o},co=(t,e)=>{if(e.length===0){ct("error","選擇執行者");return}return Y(()=>O("work_set_assignees",{p_item_id:t.item.id,p_member_ids:e}),t.canManage?"已更新":"資料更新，通知派工者")},so=(t,e)=>{if(!e){ct("error","工作摘要不能空白");return}return cr(t,{title:e})},$o=t=>Y(()=>O("work_complete",{p_item_id:t.item.id,p_note:null}),"已完成"),uo=(t,e)=>Y(()=>O("work_set_status",{p_item_id:t.item.id,p_status:e}),e==="done"&&t.item.creator_member_id!==v?"完成回報，等待派工者確認":"已更新"),go=t=>Y(()=>O("work_confirm",{p_assignee_id:t.a.id}),"已完成"),[va,xa]=l(null),[Ua,Or]=l(null),[Ia,Ea]=l(""),po=t=>{Ea(""),Or(t)},ko=async()=>{let t=Ua;Or(null),await Y(()=>O("work_return",{p_assignee_id:t.a.id,p_note:Ia.trim()||null}),"已退回")},Go=(t,e)=>Y(()=>O("work_move",{p_item_id:t.item.id,p_where:e})),vo=t=>Y(()=>O("work_copy",{p_item_id:t.item.id}),"複製成功"),xo=t=>Vt({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或卡住保留歷史紀錄，不會刪除資料`,onConfirm:async()=>{Vt(null),await Y(()=>O("work_delete",{p_item_id:t.item.id}),e=>e==="canceled"?"刪除資料，保留歷史紀錄":"已刪除")}}),Xo=async()=>{let t=ir.trim();if(!t||Cr)return;Dt(!0);let e=oa||lt,o=await Y(()=>O("work_create_routine",{p_title:t,p_start_date:e,p_end_date:e}));if(Dt(!1),o){nr("");let i=e<=Q.end&&e>=Q.start;ct("success",i?"已新增":`已新增到 ${Bt(e)}（可切換選項查詢）`)}},Lo=async t=>{Dt(!0);let e;if(_.mode==="editRule")e=await Y(()=>O("work_update_rule",{p_rule_id:_.rule.id,p_title:t.title,p_freq:t.repeat,p_weekdays_only:t.weekdaysOnly,p_week_days:t.weekDays,p_month_day:t.monthDay,p_month_last_day:t.monthLast,p_start_date:t.startDate,p_until_date:t.untilDate,p_start_time:t.startTime,p_end_time:t.endTime,p_priority:t.priority,p_note:t.note,p_meeting_flag:null,p_is_active:t.isActive,...t.skipWeeks&&t.skipWeeks.length||_.rule.skip_weeks&&_.rule.skip_weeks.length?{p_skip_weeks:t.skipWeeks||[]}:{}}),"週期工作設定完成"),e!==void 0&&await Ur();else if(t.repeat==="none"&&t.assigneeIds&&(_.parent||!(t.assigneeIds.length===1&&t.assigneeIds[0]===v&&t.dispatcherId===v))){let o=t.assigneeIds.some(i=>i!==v);e=await Y(()=>O("work_assign_create",{p_title:t.title,p_assignee_ids:t.assigneeIds,p_start_date:t.startDate,p_start_time:t.startTime,p_end_date:t.endDate,p_end_time:t.endTime,p_priority:t.priority,p_note:t.note,p_dispatcher_id:t.dispatcherId,p_parent_id:_.parent?_.parent.id:null}),o?"派工完成，送出提醒":_.parent?"子工作已新增":"已新增"),e!==void 0&&_.parent&&Ct(i=>new Set(i).add(_.parent.id))}else t.repeat==="none"?e=await Y(()=>O("work_create_routine",{p_title:t.title,p_start_date:t.startDate,p_start_time:t.startTime,p_end_date:t.endDate,p_end_time:t.endTime,p_priority:t.priority,p_note:t.note,p_meeting_flag:null}),"已新增"):e=await Y(()=>O("work_create_rule",{p_title:t.title,p_freq:t.repeat,p_weekdays_only:t.weekdaysOnly,p_week_days:t.weekDays,p_month_day:t.monthDay,p_month_last_day:t.monthLast,p_start_date:t.startDate,p_until_date:t.untilDate,p_start_time:t.startTime,p_end_time:t.endTime,p_priority:t.priority,p_note:t.note,p_meeting_flag:null,...t.skipWeeks&&t.skipWeeks.length?{p_skip_weeks:t.skipWeeks}:{}}),"週期工作設定完成，凌晨自動建立");Dt(!1),e!==void 0&&X(null)},Ur=async()=>{try{let{data:t,error:e}=await n.from("work_recurring_rules").select("*").eq("creator_member_id",v).order("created_at");if(e)throw e;S(t||[])}catch(t){ct("error","讀取週期工作失敗："+Qt(t))}},sr=async()=>{try{let t=await O("work_notifications_list")||[];return Ye(t),t}catch{return[]}};tt(()=>{if(!v)return;sr();let t=setInterval(sr,6e4);return()=>clearInterval(t)},[v]);let fo=br.filter(t=>!t.read_at),ur=new Set(fo.map(t=>t.item_id||t.id)).size;tt(()=>{b&&b("",{n:ur,red:!0})},[ur,b]);let Mo=async()=>{try{await O("work_notifications_read",{p_ids:null}),await sr()}catch{}},qa=async t=>{let e=[...new Set((t||br).filter(o=>!o.read_at).map(o=>o.item_id).filter(Boolean))];if(!e.length){Aa([]);return}try{let{data:o,error:i}=await n.from("work_items").select("*, work_assignees(*)").in("id",e).is("canceled_at",null);if(i)throw i;let c=[];for(let j of o||[]){let{work_assignees:C,...V}=j;for(let G of C||[])c.push({key:G.id,item:{...V,assigneeCount:(C||[]).length,assigneeIds:(C||[]).map(R=>R.member_id)},a:G})}Aa(c)}catch(o){ct("error","讀取提醒失敗："+Qt(o))}},gr=async t=>{let e=ia.current;if(ia.current=t,Rt(t),t==="notice"){let o=await sr();await qa(o)}else e==="notice"&&await Mo()},$a=async()=>{ht(!0),await Ur()};tt(()=>{!_&&d.current&&(d.current=!1,$a())},[_]);let wo=async t=>{await Y(()=>O("work_update_rule",{p_rule_id:t.id,p_title:t.title,p_freq:t.freq,p_weekdays_only:t.weekdays_only,p_week_days:t.week_days,p_month_day:t.month_day,p_month_last_day:t.month_last_day,p_start_date:t.start_date,p_until_date:t.until_date,p_start_time:t.start_time,p_end_time:t.end_time,p_priority:t.priority,p_note:t.note,p_meeting_flag:null,p_is_active:!t.is_active,...t.skip_weeks&&t.skip_weeks.length?{p_skip_weeks:t.skip_weeks}:{}}),t.is_active?"已暫停":"已啟用")!==void 0&&await Ur()},mo=t=>Vt({title:"警告",confirmText:"刪除",message:`刪除週期工作？
刪除未來排程，保留歷史紀錄`,onConfirm:async()=>{Vt(null),await Y(()=>O("work_delete_rule",{p_rule_id:t.id}),"週期工作已刪除")!==void 0&&await Ur()}}),Co=async(t,e)=>{let o=Tt;if(la(null),ca(null),Nr(null),!o||o.date!==t.date||o.key===e.key)return;let i=t.rows.filter(V=>!V.overdue),c=i.findIndex(V=>V.key===o.key),j=i.findIndex(V=>V.key===e.key),C=t.rows.find(V=>V.key===o.key);!C||c<0||j<0||await Y(()=>O("work_move_to",{p_item_id:C.item.id,p_target_item_id:e.item.id,p_after:c<j}))},Gt="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Lt=t=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${t?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,nt=hr?[...Pr,...Dr,...pa.flatMap(t=>t.rows),...Fr,...Object.values(Tr).flat()].find(t=>t.key===hr.key):null,Ir=nt?pa.find(t=>t.rows.some(e=>e.key===nt.key)):null,Ga=(t,e)=>{let o=u=>!!(t.notice&&t.changedFields&&t.changedFields.includes(u)),i=t.canManage||t.isMine&&yr.has(t.item.id),c=t.isMine&&t.isRoutine,j=e?e.rows.filter(u=>!u.overdue):[],C=!!e&&e.canMove&&c&&!t.overdue,V=Na===t.key&&Tt&&Tt.key!==t.key,G=t.done||t.skipped,R=u=>{switch(u.id){case"title":return r.createElement("div",{key:u.id,className:"min-w-0 w-full flex items-start gap-1.5"},!t.item.parent_id&&(Tr[t.item.id]||[]).length>0&&r.createElement("button",{type:"button",onClick:()=>Ct(x=>{let s=new Set(x);return s.has(t.item.id)?s.delete(t.item.id):s.add(t.item.id),s}),"aria-label":T.has(t.item.id)?"收合子工作":"展開子工作",className:"tbc-expand mt-0.5 shrink-0 inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-slate-500 hover:bg-slate-100"},T.has(t.item.id)?r.createElement(Kt,{size:at}):r.createElement(_e,{size:at}),r.createElement("span",{className:"text-[0.75em] px-1.5 rounded bg-slate-100 text-slate-600"},new Set(Tr[t.item.id].map(x=>x.item.id)).size)),r.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},t.a.status==="pending"&&t.a.return_note&&r.createElement("button",{type:"button",onClick:()=>xa(t),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},r.createElement(Ba,{size:Math.round(Wt*.8)}),"退回"),t.isRecurring&&r.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},r.createElement(kr,{size:Math.round(Wt*.95)})),t.overdue&&r.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},r.createElement(Ma,{size:Math.round(Wt*.8)})," 逾期")),r.createElement("div",{className:"min-w-0 flex-1"},r.createElement(Ie,{value:t.item.title,placeholder:"工作摘要",canEdit:i,onSave:x=>so(t,x),className:`font-medium ${G?"text-slate-400 line-through":t.overdue||o("工作摘要")?"text-red-600":"text-slate-900"}`})));case"who":return r.createElement("div",{key:u.id,className:"min-w-0"},r.createElement(Te,{person:t.dispatcher,size:at}));case"doer":return r.createElement("div",{key:u.id,className:`min-w-0 ${o("執行")?Yt:""}`},r.createElement(Fo,{canEdit:i,options:lo(t.item.assigneeIds),ids:t.item.assigneeIds||[t.a.member_id],onSave:x=>co(t,x)},r.createElement(Te,{person:t.person,size:at})));case"date":{let x=t.item.start_date!==t.item.end_date;return r.createElement("div",{key:u.id,className:`min-w-0 ${t.overdue||o("日期")?"text-red-600":"text-slate-700"} ${o("日期")?Yt:""}`},r.createElement(Ee,{type:"date",a:t.item.start_date,b:t.item.end_date,canEdit:i,onSave:(s,p)=>no(t,s,p)},x?`${Bt(t.item.start_date)} → ${Bt(t.item.end_date)}`:Bt(t.item.start_date)))}case"time":{let x=D(t.item.start_time),s=D(t.item.end_time);return r.createElement("div",{key:u.id,className:`min-w-0 text-slate-700 ${o("時間")?Yt:""}`},r.createElement(Ee,{type:"time",a:x,b:s,canEdit:i&&t.item.start_date===t.item.end_date,onSave:(p,F)=>ho(t,p,F),validate:(p,F)=>ba(p,F,t.item.start_date===t.item.end_date)},x||s?`${x||"—"} ~ ${s||"—"}`:r.createElement("span",{className:"text-slate-300"},i&&t.item.start_date===t.item.end_date?"時間設定":"")))}case"hours":return r.createElement("div",{key:u.id,className:`text-slate-500 text-[0.9em] ${o("時間")?Yt:""}`},zo(t.item)||"");case"priority":return r.createElement("div",{key:u.id,className:o("優先順序")?Yt:""},r.createElement("button",{type:"button",disabled:!i,onClick:()=>cr(t,{priority:Zo[t.item.priority]||"normal"}),title:i?"點選切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${De[t.item.priority]||De.normal} ${i?"hover:brightness-95 cursor-pointer":"cursor-default"}`},No[t.item.priority]||"普通"));case"note":return r.createElement("div",{key:u.id,className:`min-w-0 w-full ${o("備註")?Yt:""}`},r.createElement(Ie,{value:t.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:i,onSave:x=>cr(t,{note:x||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let x=t.done?"done":t.awaiting?"awaiting":t.skipped?"on_hold":"pending",s=x==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":x==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":x==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",p={pending:"待辦",done:"完成",on_hold:"卡住",awaiting:"待確認"}[x];return t.awaiting&&t.isCreator&&!t.isMine?r.createElement("div",{key:u.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},r.createElement("button",{type:"button",onClick:()=>go(t),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"確認"),r.createElement("button",{type:"button",onClick:()=>po(t),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"退回")):t.isMine?r.createElement("select",{key:u.id,value:x,onChange:F=>uo(t,F.target.value),"aria-label":"狀態",title:"點選項目",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${s}`},r.createElement("option",{value:"pending"},"待辦"),r.createElement("option",{value:"done"},"完成"),r.createElement("option",{value:"on_hold"},"卡住"),x==="awaiting"&&r.createElement("option",{value:"awaiting",disabled:!0},"待確認")):r.createElement("span",{key:u.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${s}`},p)}default:return null}};return r.createElement("div",{key:t.key,draggable:C&&to===t.key,onDragStart:u=>{la({key:t.key,date:e.date}),u.dataTransfer.effectAllowed="move";try{u.dataTransfer.setData("text/plain",t.key)}catch{}},onDragOver:u=>{Tt&&e&&Tt.date===e.date&&!t.overdue&&(u.preventDefault(),Na!==t.key&&ca(t.key))},onDrop:u=>{u.preventDefault(),e&&Co(e,t)},onDragEnd:()=>{la(null),ca(null),Nr(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${t.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Tt&&Tt.key===t.key?"opacity-40":""}
                    ${V?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:ka}},r.createElement("div",{className:"flex items-center gap-0.5 px-2"},C?r.createElement("span",{onMouseDown:()=>Nr(t.key),onMouseUp:()=>Nr(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},r.createElement(ye,{size:at})):r.createElement("span",{style:{width:at}}),i||t.isMine?r.createElement("button",{onClick:u=>{let x=u.currentTarget.getBoundingClientRect();zr({key:t.key,x:Math.min(x.left,window.innerWidth-220),y:Math.min(x.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},r.createElement(Ce,{size:at})):r.createElement("span",{style:{width:at+8}})),$t.map(u=>{let x=u.id==="title"||u.id==="note";return r.createElement("div",{key:u.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${x?"[&>*]:w-full":"justify-center text-center"}`},R(u))}))},Xa=new Set,Ka=t=>X({mode:"create",parent:t.item,initial:{start_date:t.item.start_date,end_date:t.item.end_date}}),Er=(t,e)=>{let o=t.item.parent_id?[]:Tr[t.item.id]||[],i=o.length>0&&T.has(t.item.id)&&!Xa.has(t.item.id);return i&&Xa.add(t.item.id),r.createElement(r.Fragment,{key:t.key},Ga(t,e),i&&r.createElement("div",{className:"tbc-subs bg-slate-50/70 border-b border-slate-200 pl-8 pr-3 py-2"},r.createElement("div",{className:"rounded-lg border border-slate-200 bg-white overflow-hidden"},r.createElement("div",{className:"grid bg-slate-100 border-b border-slate-200 text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:ka}},r.createElement("span",{className:"py-1.5"}),$t.map(c=>r.createElement("span",{key:c.id,className:"py-1.5 px-2 border-l border-slate-200 text-center whitespace-nowrap"},c.id==="title"?"子工作":c.label))),o.map(c=>Ga(c,null)),(t.canManage||t.isMine)&&r.createElement("button",{type:"button",onClick:()=>Ka(t),className:"tbc-add-sub w-full text-left px-4 py-2 text-[0.9em] text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"},"+ 新增子工作"))))};return r.createElement("div",{className:"flex h-full w-full bg-slate-50 overflow-hidden relative",style:{fontSize:Wt}},r.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},r.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},r.createElement("div",{className:"flex items-center gap-4 min-w-0"},r.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:Wt*1.45}},"工作日誌"),r.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},r.createElement(be,{size:16,className:"text-slate-400 shrink-0"}),r.createElement("input",{type:"text",value:_t,onChange:t=>vt(t.target.value),onKeyDown:t=>{t.key==="Escape"&&vt("")},placeholder:"關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),_t&&r.createElement("button",{type:"button",onClick:()=>vt(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},r.createElement(Jt,{size:14})))),r.createElement("div",{className:"flex items-center gap-3 shrink-0"},r.createElement("button",{onClick:()=>X({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},r.createElement(Xt,{size:16}),"新增"),r.createElement("div",{className:Gt},r.createElement("button",{onClick:$a,className:Lt(!1)},r.createElement(Xt,{size:14,className:"text-slate-500"}),"週期工作")),r.createElement("div",{className:"relative"},r.createElement("button",{onClick:()=>Mr(t=>!t),className:`${Gt} !p-1.5`},r.createElement("span",{className:Lt(fr)},r.createElement(He,{size:14,className:"text-slate-500"}),"隱藏")),fr&&r.createElement(r.Fragment,null,r.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Mr(!1)}),r.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},Wa.filter(t=>!t.locked).map(t=>r.createElement("label",{key:t.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${t.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},r.createElement("input",{type:"checkbox",disabled:t.locked,checked:t.locked||!zt.includes(t.id),onChange:()=>ta(t.id),className:"accent-indigo-600"}),t.label,t.locked&&r.createElement(ma,{size:11})))))),r.createElement("div",{className:Gt,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([t,e,o])=>r.createElement("button",{key:t,onClick:()=>tr(t),title:e,"aria-label":`文字${e}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${ot===t?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:o}},"A"))))),B?r.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},r.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},r.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},r.createElement(ma,{size:30})),r.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),r.createElement("p",{className:"text-slate-500 font-normal"},B),r.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧者、行政與管理員。"))):r.createElement(r.Fragment,null,r.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},r.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(ur>0||m==="notice")&&r.createElement("button",{onClick:()=>gr("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${m==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},r.createElement(Ve,{size:18}),ur>0&&r.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},ur)),r.createElement("div",{className:Gt},r.createElement("button",{onClick:()=>gr("mine"),className:Lt(m==="mine")},"我的"),r.createElement("button",{onClick:()=>gr("tome"),className:Lt(m==="tome")},"派工給我"),r.createElement("button",{onClick:()=>gr("dispatched"),className:Lt(m==="dispatched")},"我派工的"),r.createElement("button",{onClick:()=>gr("all"),className:Lt(m==="all")},"全部")),m==="all"&&r.createElement("div",{className:"relative"},r.createElement("button",{onClick:()=>Wr(t=>!t),className:`${Gt} !p-1.5`},r.createElement("span",{className:Lt(Br)},r.createElement(me,{size:14,className:"text-slate-500"}),"人員（",At.size,"/",ga.length,"）")),Br&&r.createElement(r.Fragment,null,r.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Wr(!1)}),r.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},r.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},r.createElement("button",{onClick:()=>Mt(new Set(ga.map(t=>t.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),r.createElement("button",{onClick:()=>Mt(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),ga.map(t=>r.createElement("label",{key:t.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},r.createElement("input",{type:"checkbox",checked:At.has(t.member_id),onChange:()=>Mt(e=>{let o=new Set(e);return o.has(t.member_id)?o.delete(t.member_id):o.add(t.member_id),o}),className:"accent-indigo-600"}),t.name))))),m!=="notice"&&r.createElement("div",{className:Gt},r.createElement("button",{onClick:()=>Ot("today"),className:Lt(et==="today")},"今日"),r.createElement("button",{onClick:()=>Ot("week"),className:Lt(et==="week")},"本週"),r.createElement("button",{onClick:()=>Ot("month"),className:Lt(et==="month")},"本月"),r.createElement("button",{onClick:()=>Ot("custom"),className:Lt(et==="custom")},"自訂")),m!=="notice"&&et==="custom"&&r.createElement("div",{className:"flex items-center gap-2"},r.createElement("input",{type:"date",value:pt,max:q||void 0,onChange:t=>{let e=t.target.value;vr(e),q&&e>q&&kt(e)},className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),r.createElement("span",{className:"text-slate-400"},"～"),r.createElement("input",{type:"date",value:q,min:pt,onChange:t=>{let e=t.target.value;kt(pt&&e<pt?pt:e)},className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),r.createElement("span",{className:"text-slate-400 text-[0.85em]"},m==="notice"?r.createElement("span",null,"提醒的派工　共 ",Fr.length," 筆"):r.createElement(r.Fragment,null,!Ft&&r.createElement(r.Fragment,null,Q.start===Q.end?Bt(Q.start):`${Bt(Q.start)} ～ ${Bt(Q.end)}`,r.createElement("span",{className:"ml-3"},"共 ",Da," 筆")))))),r.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},r.createElement("div",{className:"space-y-4",style:{minWidth:io}},r.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:ka}},r.createElement("span",{className:"py-2"}),$t.map(t=>t.sortable?r.createElement("button",{key:t.id,type:"button",onClick:()=>Lr(t.id),...Oa(t),"aria-sort":ut.col===t.id?ut.dir==="asc"?"ascending":"descending":"none",className:`relative py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${ut.col===t.id?"text-indigo-600":""}`},t.label,ut.col===t.id&&(ut.dir==="asc"?r.createElement(Xr,{size:14}):r.createElement(Kt,{size:14})),wr(t)):r.createElement("span",{key:t.id,className:"relative py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap",...Oa(t)},t.label,wr(t)))),m==="notice"?Fr.length===0?r.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):r.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},Fr.map(t=>Er(t,null))):(Ft?Re&&dr.length===0:N&&K.length===0)?r.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},Ft?"搜尋中…":"Loading..."):Da===0?r.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Ft?`找不到符合「${Vr}」的工作`:"新增一筆工作，開始記錄"):r.createElement(r.Fragment,null,Pr.length>0&&J("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},J("button",{type:"button",onClick:()=>ea("tbcWorkOverdueOpen",Et),"aria-expanded":Zt,title:Zt?"點一下收合":"點一下展開",className:`w-full text-left px-4 py-2.5 bg-red-50 hover:bg-red-100/60 transition-colors ${Zt?"border-b":""} border-red-100 flex items-center gap-2 text-red-600 font-bold`},Zt?J(Xr,{size:at}):J(Kt,{size:at}),J(Ma,{size:at})," 逾期未完成 ",J("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Pr.length)),Zt&&Pr.map(t=>Er(t,null))),Dr.length>0&&J("div",{className:"bg-white rounded-xl shadow-soft border border-amber-100 overflow-hidden"},J("button",{type:"button",onClick:()=>ea("tbcWorkHoldOpen",aa),"aria-expanded":Pt,title:Pt?"點一下收合":"點一下展開",className:`w-full text-left px-4 py-2.5 bg-amber-50 hover:bg-amber-100/60 transition-colors ${Pt?"border-b":""} border-amber-100 flex items-center gap-2 text-amber-700 font-bold`},Pt?J(Xr,{size:at}):J(Kt,{size:at}),J(Ca,{size:at})," 卡住 ",J("span",{className:"text-[0.8em] bg-white/80 border border-amber-100 px-2 rounded-md"},Dr.length)),Pt&&Dr.map(t=>Er(t,null))),pa.map(t=>{let e=So(t.date,lt);return r.createElement("div",{key:t.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},r.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},r.createElement("span",{className:`font-bold ${e.tag==="今天"?"text-indigo-600":"text-slate-800"}`},e.text)),t.rows.map(o=>Er(o,t)))}),Ft&&jt>1&&r.createElement("div",{className:"tbc-pager flex items-center justify-center gap-3 pt-2 text-[0.9em] text-slate-600"},r.createElement("button",{type:"button","aria-label":"上一頁",disabled:yt<=1,onClick:()=>qt(Math.max(1,yt-1)),style:{fontSize:"1.4em"},className:"tbc-pager-prev w-9 h-9 rounded-full leading-none hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"},"‹"),r.createElement("input",{type:"text",inputMode:"numeric","aria-label":"頁數",value:za,onChange:t=>ha(t.target.value.replace(/\D/g,"")),onKeyDown:t=>{t.key==="Enter"&&t.currentTarget.blur()},onFocus:t=>t.currentTarget.select(),onBlur:()=>{let t=parseInt(za,10),e=Number.isFinite(t)?Math.min(jt,Math.max(1,t)):Math.min(yt,jt);qt(e),ha(String(e))},className:"tbc-pager-input w-14 h-10 text-center rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-indigo-500/40"}),r.createElement("button",{type:"button","aria-label":"下一頁",disabled:yt>=jt,onClick:()=>qt(Math.min(jt,yt+1)),style:{fontSize:"1.4em"},className:"tbc-pager-next w-9 h-9 rounded-full leading-none hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"},"›"),r.createElement("span",{className:"tbc-pager-info"},"共 ",jt," 頁")))))),va&&r.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>xa(null)},r.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:t=>t.stopPropagation()},r.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},r.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},r.createElement(Ba,{size:20,className:"text-amber-600"}),"退回原因"),r.createElement("button",{"aria-label":"關閉",onClick:()=>xa(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},r.createElement(Jt,{size:20}))),r.createElement("div",{className:"p-5 space-y-2"},r.createElement("div",{className:"tbc-return-title font-bold text-slate-900"},"工作摘要：",va.item.title),r.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},va.a.return_note)))),Ua&&r.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},r.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},r.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},r.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},r.createElement(Ae,{size:20,className:"text-indigo-600"}),"退回"),r.createElement("button",{onClick:()=>Or(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},r.createElement(Jt,{size:20}))),r.createElement("div",{className:"p-5 space-y-2"},r.createElement("label",{className:"text-xs font-medium text-slate-500"},"原因（選填）"),r.createElement("textarea",{autoFocus:!0,value:Ia,onChange:t=>Ea(t.target.value),rows:3,placeholder:"簡要說明",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),r.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},r.createElement("button",{onClick:()=>Or(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),r.createElement("button",{onClick:ko,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),hr&&nt&&r.createElement(r.Fragment,null,r.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>zr(null),onContextMenu:t=>{t.preventDefault(),zr(null)}}),r.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:hr.x,top:hr.y,fontSize:Wt}},(()=>{let e=(Ir?Ir.rows.filter(c=>!c.overdue):[]).findIndex(c=>c.key===nt.key),o=!!Ir&&Ir.canMove&&e>=0,i=(c,j,C,V,G)=>r.createElement("button",{disabled:V,onClick:()=>{zr(null),C()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${G?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},r.createElement(c,{size:at-1}),j);return r.createElement(r.Fragment,null,nt.isMine&&!nt.canManage&&i(ya,"編輯",()=>{mt(c=>new Set(c).add(nt.item.id)),ct("success","點選欄位修改，完成自動通知派工者")}),!nt.item.parent_id&&i(Xt,"新增子工作",()=>Ka(nt)),nt.canManage&&nt.isRoutine&&i(We,"複製",()=>vo(nt)),nt.canManage&&i(wa,"刪除",()=>xo(nt),!1,!0))})())),_&&r.createElement(Oo,{key:_.mode+(_.rule?_.rule.id:"")+(_.parent?_.parent.id:""),mode:_.mode,parent:_.parent,initial:_.rule||_.initial,presetRepeat:_.preset,today:lt,busy:Cr,onClose:()=>X(null),onSubmit:Lo,people:w,meId:v}),rt&&r.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},r.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},r.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},r.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},r.createElement(kr,{className:"text-indigo-600",size:20})," 我的週期工作"),r.createElement("button",{onClick:()=>ht(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},r.createElement(Jt,{size:20}))),r.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},r.createElement("button",{onClick:()=>{ht(!1),X({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},r.createElement(Xt,{size:16}),"新增週期工作"),f.length===0?r.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):f.map(t=>r.createElement("div",{key:t.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${t.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},r.createElement("div",{className:"min-w-0"},r.createElement("div",{className:`font-medium truncate ${t.is_active?"text-slate-900":"text-slate-400"}`},t.title),r.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},Po(t),t.start_time?`　${D(t.start_time)}${t.end_time?"~"+D(t.end_time):""}`:"",t.until_date?`　到 ${Bt(t.until_date)}`:"",t.is_active?"":"　（暫停）")),r.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},r.createElement("button",{onClick:()=>{d.current=!0,ht(!1),X({mode:"editRule",rule:t})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},r.createElement(ya,{size:16})),r.createElement("button",{onClick:()=>wo(t),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${t.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:t.is_active?"啟用":"暫停","aria-label":t.is_active?"啟用":"暫停"},t.is_active?r.createElement(je,{size:16}):r.createElement(Ca,{size:16})),r.createElement("button",{onClick:()=>mo(t),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},r.createElement(wa,{size:16})))))))),H.text&&r.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},r.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${H.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},r.createElement("div",{className:"shrink-0 mt-0.5"},H.type==="success"?r.createElement(Be,{size:18}):r.createElement(Gr,{size:18})),r.createElement("div",{className:"text-sm leading-snug break-words flex-1"},H.text))),dt&&r.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},r.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},r.createElement("div",{className:"p-8 text-center"},r.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},r.createElement(Gr,{size:32})),r.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},dt.title),r.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},dt.message)),r.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},r.createElement("button",{onClick:()=>Vt(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),r.createElement("button",{onClick:dt.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},dt.confirmText||"確定"))))))},Xe=Uo;var Ke=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme {
  :root, :host {
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: #f5222d;
    --color-red-600: #d4101b;
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-indigo-50: #eef6fd;
    --color-indigo-200: #b3d5f6;
    --color-indigo-300: #80b9ee;
    --color-indigo-400: #3d94e2;
    --color-indigo-500: #1a7fd9;
    --color-indigo-600: #0070d5;
    --color-indigo-700: #005cb0;
    --color-violet-50: #eef6fd;
    --color-violet-100: #d9eafb;
    --color-violet-600: #0070d5;
    --color-slate-50: #f7f9fa;
    --color-slate-100: #f5f5f5;
    --color-slate-200: #e8e8e8;
    --color-slate-300: #d9d9d9;
    --color-slate-400: #8c8c8c;
    --color-slate-500: #595959;
    --color-slate-600: #595959;
    --color-slate-700: #3b3e40;
    --color-slate-800: #262626;
    --color-slate-900: #262626;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 600;
    --leading-snug: 1.375;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: .5rem;
    --radius-2xl: .75rem;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: 0px;
  }
  .inset-x-0 {
    inset-inline: 0px;
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .top-0 {
    top: 0px;
  }
  .top-24 {
    top: calc(var(--spacing) * 24);
  }
  .top-full {
    top: 100%;
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .right-0 {
    right: 0px;
  }
  .left-0 {
    left: 0px;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-\\[15\\] {
    z-index: 15;
  }
  .z-\\[60\\] {
    z-index: 60;
  }
  .z-\\[70\\] {
    z-index: 70;
  }
  .z-\\[100\\] {
    z-index: 100;
  }
  .z-\\[110\\] {
    z-index: 110;
  }
  .z-\\[120\\] {
    z-index: 120;
  }
  .-mx-1\\.5 {
    margin-inline: calc(var(--spacing) * -1.5);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: var(--spacing);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mb-1 {
    margin-bottom: var(--spacing);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .ml-3 {
    margin-left: calc(var(--spacing) * 3);
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-11 {
    height: calc(var(--spacing) * 11);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-full {
    height: 100%;
  }
  .max-h-80 {
    max-height: calc(var(--spacing) * 80);
  }
  .max-h-\\[85dvh\\] {
    max-height: 85dvh;
  }
  .max-h-\\[92dvh\\] {
    max-height: 92dvh;
  }
  .min-h-\\[1\\.9em\\] {
    min-height: 1.9em;
  }
  .\\!w-auto {
    width: auto !important;
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-14 {
    width: calc(var(--spacing) * 14);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-20 {
    width: calc(var(--spacing) * 20);
  }
  .w-44 {
    width: calc(var(--spacing) * 44);
  }
  .w-52 {
    width: calc(var(--spacing) * 52);
  }
  .w-56 {
    width: calc(var(--spacing) * 56);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-sm {
    max-width: var(--container-sm);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .min-w-0 {
    min-width: 0px;
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[18px\\] {
    min-width: 18px;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-grab {
    cursor: grab;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-text {
    cursor: text;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: var(--spacing);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  :where(.space-y-1\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-2 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-3 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-4 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .\\!border-red-400 {
    border-color: var(--color-red-400) !important;
  }
  .border-amber-100 {
    border-color: var(--color-amber-100);
  }
  .border-amber-200 {
    border-color: var(--color-amber-200);
  }
  .border-amber-500 {
    border-color: var(--color-amber-500);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-indigo-300 {
    border-color: var(--color-indigo-300);
  }
  .border-indigo-600 {
    border-color: var(--color-indigo-600);
  }
  .border-red-100 {
    border-color: var(--color-red-100);
  }
  .border-red-400 {
    border-color: var(--color-red-400);
  }
  .border-sky-200 {
    border-color: var(--color-sky-200);
  }
  .border-slate-100 {
    border-color: var(--color-slate-100);
  }
  .border-slate-200 {
    border-color: var(--color-slate-200);
  }
  .border-slate-300 {
    border-color: var(--color-slate-300);
  }
  .border-violet-100 {
    border-color: var(--color-violet-100);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-indigo-50\\/60 {
    background-color: color-mix(in srgb, #eef6fd 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-50) 60%, transparent);
    }
  }
  .bg-indigo-600 {
    background-color: var(--color-indigo-600);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-50\\/40 {
    background-color: color-mix(in srgb, oklch(97.1% 0.013 17.38) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-50) 40%, transparent);
    }
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-600 {
    background-color: var(--color-red-600);
  }
  .bg-sky-50 {
    background-color: var(--color-sky-50);
  }
  .bg-slate-50 {
    background-color: var(--color-slate-50);
  }
  .bg-slate-50\\/70 {
    background-color: color-mix(in srgb, #f7f9fa 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-slate-50) 70%, transparent);
    }
  }
  .bg-slate-50\\/80 {
    background-color: color-mix(in srgb, #f7f9fa 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-slate-50) 80%, transparent);
    }
  }
  .bg-slate-100 {
    background-color: var(--color-slate-100);
  }
  .bg-slate-900\\/40 {
    background-color: color-mix(in srgb, #262626 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-slate-900) 40%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-violet-50 {
    background-color: var(--color-violet-50);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/80 {
    background-color: color-mix(in srgb, #fff 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 80%, transparent);
    }
  }
  .\\!p-1\\.5 {
    padding: calc(var(--spacing) * 1.5) !important;
  }
  .p-1 {
    padding: var(--spacing);
  }
  .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-10 {
    padding: calc(var(--spacing) * 10);
  }
  .px-1 {
    padding-inline: var(--spacing);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: var(--spacing);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-1 {
    padding-top: var(--spacing);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-24 {
    padding-bottom: calc(var(--spacing) * 24);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[0\\.7em\\] {
    font-size: 0.7em;
  }
  .text-\\[0\\.8em\\] {
    font-size: 0.8em;
  }
  .text-\\[0\\.9em\\] {
    font-size: 0.9em;
  }
  .text-\\[0\\.75em\\] {
    font-size: 0.75em;
  }
  .text-\\[0\\.85em\\] {
    font-size: 0.85em;
  }
  .text-\\[0\\.92em\\] {
    font-size: 0.92em;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .leading-\\[18px\\] {
    --tw-leading: 18px;
    line-height: 18px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .\\!text-red-600 {
    color: var(--color-red-600) !important;
  }
  .text-amber-600 {
    color: var(--color-amber-600);
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-600 {
    color: var(--color-red-600);
  }
  .text-sky-700 {
    color: var(--color-sky-700);
  }
  .text-slate-300 {
    color: var(--color-slate-300);
  }
  .text-slate-400 {
    color: var(--color-slate-400);
  }
  .text-slate-500 {
    color: var(--color-slate-500);
  }
  .text-slate-600 {
    color: var(--color-slate-600);
  }
  .text-slate-700 {
    color: var(--color-slate-700);
  }
  .text-slate-800 {
    color: var(--color-slate-800);
  }
  .text-slate-900 {
    color: var(--color-slate-900);
  }
  .text-violet-600 {
    color: var(--color-violet-600);
  }
  .text-white {
    color: var(--color-white);
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .accent-indigo-600 {
    accent-color: var(--color-indigo-600);
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-40 {
    opacity: 40%;
  }
  .shadow-hover-soft {
    --tw-shadow: 0 8px 16px var(--tw-shadow-color, rgba(0,0,0,.10));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-soft {
    --tw-shadow: 0 0 0 0 var(--tw-shadow-color, rgba(0,0,0,0));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-indigo-200 {
    --tw-ring-color: var(--color-indigo-200);
  }
  .ring-indigo-400 {
    --tw-ring-color: var(--color-indigo-400);
  }
  .ring-indigo-500\\/20 {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
  }
  .ring-red-200 {
    --tw-ring-color: var(--color-red-200);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .ring-inset {
    --tw-ring-inset: inset;
  }
  @media (hover: hover) {
    .group-hover\\:opacity-100:is(:where(.group):hover *) {
      opacity: 100%;
    }
  }
  .placeholder\\:text-slate-400::placeholder {
    color: var(--color-slate-400);
  }
  .last\\:border-b-0:last-child {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  .focus-within\\:bg-white:focus-within {
    background-color: var(--color-white);
  }
  .focus-within\\:ring-2:focus-within {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus-within\\:ring-indigo-500\\/40:focus-within {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 40%, transparent);
    }
  }
  @media (hover: hover) {
    .hover\\:border-amber-300:hover {
      border-color: var(--color-amber-300);
    }
    .hover\\:border-indigo-300:hover {
      border-color: var(--color-indigo-300);
    }
    .hover\\:bg-amber-100:hover {
      background-color: var(--color-amber-100);
    }
    .hover\\:bg-amber-100\\/60:hover {
      background-color: color-mix(in srgb, oklch(96.2% 0.059 95.617) 60%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-amber-100\\/60:hover {
        background-color: color-mix(in oklab, var(--color-amber-100) 60%, transparent);
      }
    }
    .hover\\:bg-emerald-100:hover {
      background-color: var(--color-emerald-100);
    }
    .hover\\:bg-emerald-700:hover {
      background-color: var(--color-emerald-700);
    }
    .hover\\:bg-indigo-50\\/30:hover {
      background-color: color-mix(in srgb, #eef6fd 30%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-indigo-50\\/30:hover {
        background-color: color-mix(in oklab, var(--color-indigo-50) 30%, transparent);
      }
    }
    .hover\\:bg-indigo-700:hover {
      background-color: var(--color-indigo-700);
    }
    .hover\\:bg-red-50:hover {
      background-color: var(--color-red-50);
    }
    .hover\\:bg-red-100:hover {
      background-color: var(--color-red-100);
    }
    .hover\\:bg-red-100\\/60:hover {
      background-color: color-mix(in srgb, oklch(93.6% 0.032 17.717) 60%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-red-100\\/60:hover {
        background-color: color-mix(in oklab, var(--color-red-100) 60%, transparent);
      }
    }
    .hover\\:bg-red-600:hover {
      background-color: var(--color-red-600);
    }
    .hover\\:bg-slate-50:hover {
      background-color: var(--color-slate-50);
    }
    .hover\\:bg-slate-100:hover {
      background-color: var(--color-slate-100);
    }
    .hover\\:bg-slate-100\\/80:hover {
      background-color: color-mix(in srgb, #f5f5f5 80%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-slate-100\\/80:hover {
        background-color: color-mix(in oklab, var(--color-slate-100) 80%, transparent);
      }
    }
    .hover\\:bg-slate-200:hover {
      background-color: var(--color-slate-200);
    }
    .hover\\:bg-slate-200\\/50:hover {
      background-color: color-mix(in srgb, #e8e8e8 50%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-slate-200\\/50:hover {
        background-color: color-mix(in oklab, var(--color-slate-200) 50%, transparent);
      }
    }
    .hover\\:bg-slate-200\\/70:hover {
      background-color: color-mix(in srgb, #e8e8e8 70%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-slate-200\\/70:hover {
        background-color: color-mix(in oklab, var(--color-slate-200) 70%, transparent);
      }
    }
    .hover\\:text-indigo-600:hover {
      color: var(--color-indigo-600);
    }
    .hover\\:text-slate-500:hover {
      color: var(--color-slate-500);
    }
    .hover\\:text-slate-700:hover {
      color: var(--color-slate-700);
    }
    .hover\\:brightness-95:hover {
      --tw-brightness: brightness(95%);
      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
    }
  }
  .focus\\:border-indigo-500:focus {
    border-color: var(--color-indigo-500);
  }
  .focus\\:ring-2:focus {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus\\:ring-indigo-500\\/20:focus {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
  }
  .focus\\:ring-indigo-500\\/40:focus {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 40%, transparent);
    }
  }
  .active\\:scale-95:active {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .active\\:cursor-grabbing:active {
    cursor: grabbing;
  }
  .disabled\\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  .disabled\\:opacity-30:disabled {
    opacity: 30%;
  }
  .disabled\\:opacity-50:disabled {
    opacity: 50%;
  }
  .\\[\\&_\\*\\]\\:\\!text-red-600 * {
    color: var(--color-red-600) !important;
  }
}
@layer base {
  *, ::after, ::before {
    border-color: var(--color-slate-200);
  }
  button {
    cursor: pointer;
  }
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
    }
  }
}
`;var Va=document.createElement("style");Va.setAttribute("data-tbc","worklog");Va.textContent=Ke;document.head.appendChild(Va);window.TBC_WORKLOG={Root:Xe};window.dispatchEvent(new Event("tbc-worklog-ready"));})();
