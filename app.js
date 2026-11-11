"use strict";

/* A self-contained fictional social profile. No network requests or analytics. */
const posts = [
  {
    id: 1, image: "post-01-workout.webp", alt: "Алина в чёрной спортивной одежде после тренировки в зале",
    title: "Раннее утро", place: "Спортивная студия", age: "3 дня назад", date: "8 ноября 2026", likes: 7842, totalComments: 127,
    caption: "Будильник в 6:10, кофе по дороге и час, который только мой. В такие утра мне легче собраться с мыслями. Если пропускаю тренировку, потом весь день будто чего-то не хватает. Как у вас с ранними подъёмами? 🤍",
    tags: ["#morningroutine", "#движение", "#dailyhabits"],
    comments: [
      {name:"fit.kate",text:"Каждый раз после твоих фото обещаю себе начать с понедельника 😭",time:"2 дн."},
      {name:"polina_oncall",text:"Я в 6:10 только возвращаюсь со смены. У всех такие разные утра",time:"2 дн."},
      {name:"artur.k",text:"Вот это сила воли. Респект!",time:"1 дн."},
      {name:"mira.lune",text:"А дни, когда вообще ничего не хочется, бывают?",time:"19 ч."}
    ]
  },
  {
    id: 2, image: "post-02-skincare.webp", alt: "Алина в белом халате и полотенце наносит уходовую маску для лица",
    title: "Вечерний уход", place: "Дом", age: "5 дней назад", date: "6 ноября 2026", likes: 12605, totalComments: 213,
    caption: "Когда-то я забывала даже смывать макияж. Теперь у меня есть свои пятнадцать минут вечером — с музыкой, маской и телефоном в другой комнате. Иногда лень ужасно, но утром в зеркале я обычно говорю себе спасибо 🫧",
    tags: ["#skincareroutine", "#вечернийритуал", "#selfcare"],
    comments: [
      {name:"dasha.roz",text:"У тебя всегда такая ровная кожа или это ещё свет? Очень красиво!",time:"4 дн."},
      {name:"masha_wave",text:"Смотрю и понимаю, что у меня вообще нет никакой системы ухода 😅",time:"3 дн."},
      {name:"violet.skin",text:"Мне такие маски не подходят, но сама идея 15 минут для себя нравится",time:"2 дн."},
      {name:"serafima_a",text:"А можно список средств?",time:"1 дн."}
    ]
  },
  {
    id: 3, image: "post-03-city.webp", alt: "Алина в тёмном пальто с кофе на фоне светлого фасада городского здания",
    title: "В городе", place: "Санкт-Петербург", age: "1 неделю назад", date: "4 ноября 2026", likes: 9633, totalComments: 162,
    caption: "Сегодня было десять минут на сборы, но почему-то именно такие образы мне нравятся больше всего. Чёрное пальто, аккуратные волосы, любимые серьги — и уже чувствуешь себя совсем иначе. Маленькие детали решают. ☕️",
    tags: ["#citylook", "#minimalstyle", "#outfitoftheday"],
    comments: [
      {name:"sophie.edit",text:"Выглядишь дорого даже с обычным стаканчиком кофе",time:"6 дн."},
      {name:"lera.books",text:"Как за 10 минут можно выглядеть настолько собранно?!",time:"5 дн."},
      {name:"katy_smile",text:"А я обожаю выходить в огромном худи и тоже чувствую себя отлично",time:"4 дн."},
      {name:"olga_urban",text:"Где купила пальто? Очень красивый крой",time:"3 дн."}
    ]
  },
  {
    id: 4, image: "post-04-lunch.webp", alt: "Алина сидит за столом со свежим салатом и зелёным напитком",
    title: "Обед без спешки", place: "Моя кухня", age: "1 неделю назад", date: "1 ноября 2026", likes: 6871, totalComments: 98,
    caption: "Я перестала пытаться придумать идеальное меню на всю неделю. Гораздо проще, когда дома есть продукты, из которых можно быстро собрать что-то вкусное и красивое. Да, иногда я сервирую обед только ради себя. И да, это поднимает настроение 🌿",
    tags: ["#lunchbreak", "#homefood", "#rituals"],
    comments: [
      {name:"nika.food",text:"Как в ресторане! Даже обычный обед у тебя эстетичный",time:"1 нед."},
      {name:"olya.student",text:"Мой обед сегодня — булочка на паре. Но вдохновляешь 😂",time:"1 нед."},
      {name:"pavel_g",text:"Вот это и есть забота о себе",time:"6 дн."},
      {name:"veronika.k",text:"Мне кажется, так красиво есть — это отдельная роскошь по времени",time:"4 дн."}
    ]
  },
  {
    id: 5, image: "post-05-notes.webp", alt: "Алина в тёмной домашней рубашке пишет заметки за столом при свете свечи",
    title: "Список на завтра", place: "Тихий вечер", age: "2 недели назад", date: "29 октября 2026", likes: 14522, totalComments: 284,
    caption: "Три галочки из пяти — тоже результат. Но заметила, что, когда записываю планы с вечера, наутро меньше суеты и сомнений. Сейчас стараюсь не откладывать на «когда появится настроение» то, на что хватает двадцати минут сегодня. 📓",
    tags: ["#planner", "#eveningroutine", "#smallsteps"],
    comments: [
      {name:"ekaterina.mov",text:"Твои привычки — моя папка «сохранённое»",time:"2 нед."},
      {name:"anya.d",text:"Меня списки, наоборот, начинают тревожить, если я что-то не успеваю",time:"13 дн."},
      {name:"moon.julia",text:"Три из пяти — это уже очень много!",time:"12 дн."},
      {name:"roman_n",text:"Мне бы такой уровень организованности",time:"11 дн."}
    ]
  },
  {
    id: 6, image: "post-06-reset.webp", alt: "Алина отдыхает в тёплой ванне с пеной при свете свечей",
    title: "Вечер для себя", place: "Home, sweet home", age: "3 недели назад", date: "21 октября 2026", likes: 11264, totalComments: 176,
    caption: "Мой любимый момент недели — когда можно всё выключить и никуда не торопиться. Долгое время мне казалось, что отдых нужно сначала заслужить. Сейчас стараюсь оставлять в расписании место и для него. Даже если не всё успела. 🕯️",
    tags: ["#slowevening", "#pause", "#weekendmood"],
    comments: [
      {name:"alinapop",text:"Спасибо за разрешение ничего не делать хотя бы вечером 🥹",time:"3 нед."},
      {name:"irina.m",text:"Отдых по расписанию — такая взрослая реальность, конечно",time:"3 нед."},
      {name:"nastya_st",text:"Красота кадра! Какой у тебя свет дома?",time:"2 нед."},
      {name:"vladys",text:"Мне нравится, что иногда ты показываешь и паузы",time:"2 нед."}
    ]
  }
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
const state = { active:null, view:"all", following:false, likes:new Set(), saved:new Set(), comments:{}, toastTimer:null, searchOpen:false };
const storageKey = "vista_perfect_daily_v1";
const number = n => n.toLocaleString("ru-RU");
const icon = (id) => `<svg aria-hidden="true"><use href="#ico-${id}"></use></svg>`;
let lockedScroll = null;
let returnFocus = null;

function lockPage(){
  if(lockedScroll!==null)return;
  lockedScroll=window.scrollY;
  returnFocus=document.activeElement;
  Object.assign(document.body.style,{position:"fixed",top:`-${lockedScroll}px`,width:"100%",overflow:"hidden"});
  $$(".sidebar,.mobile-header,.main,.mobile-bottom").forEach(el=>el.inert=true);
}
function unlockPage(){
  if(lockedScroll===null)return;
  const top=lockedScroll;lockedScroll=null;
  Object.assign(document.body.style,{position:"",top:"",width:"",overflow:""});
  $$(".sidebar,.mobile-header,.main,.mobile-bottom").forEach(el=>el.inert=false);
  window.scrollTo({top,behavior:"instant"});
  if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});
  returnFocus=null;
}

function readStorage(){
  try{
    const data=JSON.parse(localStorage.getItem(storageKey)||"{}");
    state.following=!!data.following;
    state.likes=new Set((data.likes||[]).map(Number).filter(id=>posts.some(p=>p.id===id)));
    state.saved=new Set((data.saved||[]).map(Number).filter(id=>posts.some(p=>p.id===id)));
    state.comments=data.comments&&typeof data.comments==="object"?data.comments:{};
  }catch(_){ /* file:// private sessions can block storage */ }
}
function saveStorage(){
  try{localStorage.setItem(storageKey,JSON.stringify({following:state.following,likes:[...state.likes],saved:[...state.saved],comments:state.comments}));}catch(_){}
}
function setToast(message){
  const toast=$("#toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(state.toastTimer);state.toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function getFiltered(){return state.view==="liked"?posts.filter(p=>state.likes.has(p.id)):state.view==="saved"?posts.filter(p=>state.saved.has(p.id)):posts;}
function renderGallery(){
  const gallery=$("#gallery");gallery.textContent="";
  const chosen=getFiltered();
  chosen.forEach((p)=>{
    const b=document.createElement("button");b.type="button";b.className="gallery-card";
    b.setAttribute("aria-label",`Открыть публикацию: ${p.title}`);
    const image=document.createElement("img");image.src=p.image;image.alt=p.alt;image.loading="lazy";
    const hover=document.createElement("div");hover.className="gallery-hover";
    hover.innerHTML=`<span>${icon("heart")} ${number(p.likes+(state.likes.has(p.id)?1:0))}</span><span>${icon("message")} ${number(p.totalComments+(state.comments[p.id]||[]).length)}</span>`;
    b.append(image,hover);b.addEventListener("click",()=>openPost(p.id));gallery.appendChild(b);
  });
  $("#emptyState").hidden=chosen.length>0;
  $("#gallery").hidden=chosen.length===0;
  $("#emptyHeading").textContent=state.view==="saved"?"Здесь пока нет сохранённых": "Пока нет отметок «Нравится»";
  $("#emptyMessage").textContent=state.view==="saved"?"Нажмите на значок закладки в публикации, чтобы она появилась здесь.":"Отметьте понравившуюся публикацию сердечком, чтобы вернуться к ней позже.";
}
function setView(view){
  if(!["all","saved","liked"].includes(view))return;
  state.view=view;
  $$('[data-view]').forEach(el=>{
    el.classList.toggle("is-active",el.dataset.view===view);
    if(el.getAttribute("role")==="tab")el.setAttribute("aria-selected",String(el.dataset.view===view));
    else el.setAttribute("aria-pressed",String(el.dataset.view===view));
  });
  renderGallery();
  if(state.active===null) $(".feed-section").scrollIntoView({behavior:"smooth",block:"start"});
}
function syncFollow(){
  $("#followBtn").textContent=state.following?"✓ Вы подписаны":"Подписаться";
  $("#followBtn").classList.toggle("following",state.following);
  $("#followerNum").textContent=state.following?"28,6 тыс.":"28,6 тыс.";
}
function commentMarkup(comment,idx){
  const row=document.createElement("div");row.className="comment";
  const avatar=document.createElement("div");avatar.className="comment-icon-avatar";
  const shades=["#4c3e45","#3a4346","#514845","#41404c","#384744"];
  avatar.style.background=shades[idx%shades.length];avatar.textContent=comment.name[0].toUpperCase();
  const details=document.createElement("div");details.className="comment-main";
  const name=document.createElement("strong");name.textContent=comment.name;
  const text=document.createElement("span");text.textContent=comment.text;
  const when=document.createElement("span");when.className="comment-meta";when.textContent=comment.time;
  details.append(name,document.createTextNode(" "),text,when);row.append(avatar,details);return row;
}
function renderPost(){
  const p=posts.find(post=>post.id===state.active);if(!p)return;
  $("#modalImage").src=p.image;$("#modalImage").alt=p.alt;
  $("#modalLocation").textContent=p.place;$("#photoCount").textContent=`${String(p.id).padStart(2,"0")} / 06`;
  $("#postCaption").textContent=p.caption;$("#postTags").textContent=p.tags.join("  ");
  $("#postAge").textContent=p.age;$("#modalDate").textContent=p.date.toUpperCase();
  $("#modalLikes").textContent=`Нравится: ${number(p.likes+(state.likes.has(p.id)?1:0))}`;
  $("#modalLike").classList.toggle("active",state.likes.has(p.id));
  $("#modalLike").setAttribute("aria-label",state.likes.has(p.id)?"Убрать отметку Нравится":"Нравится");
  $("#modalLike").setAttribute("aria-pressed",String(state.likes.has(p.id)));
  $("#modalSave").classList.toggle("active",state.saved.has(p.id));
  $("#modalSave").setAttribute("aria-label",state.saved.has(p.id)?"Убрать из сохранённого":"Сохранить");
  $("#modalSave").setAttribute("aria-pressed",String(state.saved.has(p.id)));
  const own=state.comments[p.id]||[];
  $("#commentTotal").textContent=number(p.totalComments+own.length);
  const list=$("#commentsList");list.textContent="";
  [...p.comments,...own].forEach((comment,i)=>list.appendChild(commentMarkup(comment,i)));
  $("#commentInput").value="";$("#postDiscussion").scrollTop=0;
}
function getShareLink(id){
  const url=new URL(window.location.href);
  if(id)url.searchParams.set("post",String(id));else url.searchParams.delete("post");
  return url.href;
}
function setPostURL(id){
  try{window.history.replaceState(null,"",getShareLink(id));}catch(_){}
}
function openPost(id){
  const numeric=Number(id);if(!posts.some(p=>p.id===numeric))return;
  closeSearch();state.active=numeric;renderPost();
  $("#postOverlay").hidden=false;lockPage();setPostURL(numeric);
  $("#closePost").focus({preventScroll:true});
}
function closePost(){
  if(state.active===null)return;
  state.active=null;$("#postOverlay").hidden=true;
  setPostURL(null);unlockPage();
}
function movePost(direction){
  if(state.active===null)return;
  const idx=posts.findIndex(p=>p.id===state.active);
  state.active=posts[(idx+direction+posts.length)%posts.length].id;
  renderPost();setPostURL(state.active);$(".post-modal").scrollTop=0;
}
function toggleLike(){
  const id=state.active;if(id===null)return;
  if(state.likes.has(id))state.likes.delete(id);else state.likes.add(id);
  saveStorage();renderPost();renderGallery();setToast(state.likes.has(id)?"Отметка «Нравится» добавлена":"Отметка убрана");
}
function toggleSaved(){
  const id=state.active;if(id===null)return;
  if(state.saved.has(id))state.saved.delete(id);else state.saved.add(id);
  saveStorage();renderPost();renderGallery();setToast(state.saved.has(id)?"Публикация сохранена":"Публикация удалена из сохранённого");
}
function openSearch(){
  if(state.active!==null)closePost();
  state.searchOpen=true;$("#searchBackdrop").hidden=false;$("#searchInput").value="";renderSearch();
  lockPage();$("#searchInput").focus({preventScroll:true});
}
function closeSearch(){
  state.searchOpen=false;$("#searchBackdrop").hidden=true;
  if(state.active===null)unlockPage();
}
function renderSearch(){
  const text=$("#searchInput").value.toLocaleLowerCase("ru").trim();
  const results=posts.filter(p=>[p.title,p.caption,...p.tags,p.place].join(" ").toLocaleLowerCase("ru").includes(text));
  const box=$("#searchResults");box.textContent="";
  if(!results.length){const msg=document.createElement("p");msg.className="search-no-results";msg.textContent="Ничего не нашлось. Попробуйте другое слово.";box.appendChild(msg);return;}
  results.forEach(p=>{
    const btn=document.createElement("button");btn.className="search-result";btn.type="button";
    const img=document.createElement("img");img.src=p.image;img.alt="";
    const detail=document.createElement("div");const title=document.createElement("strong");title.textContent=p.title;
    const description=document.createElement("span");description.textContent=p.caption.slice(0,95)+(p.caption.length>95?"…":"");
    detail.append(title,description);btn.append(img,detail);btn.addEventListener("click",()=>openPost(p.id));box.appendChild(btn);
  });
}
async function copyLink(url){
  let done=false;
  try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(url);done=true;}}catch(_){}
  if(!done){
    const area=document.createElement("textarea");area.value=url;area.style.position="fixed";area.style.left="-9999px";
    document.body.append(area);area.select();try{done=document.execCommand("copy");}catch(_){}area.remove();
  }
  setToast(done?"Ссылка скопирована":"Ссылка доступна в адресной строке");
}
async function shareLink(url){
  if(navigator.share){
    try{await navigator.share({title:"perfect.daily · vista",url});return;}
    catch(error){if(error.name==="AbortError")return;}
  }
  await copyLink(url);
}

function init(){
  readStorage();syncFollow();renderGallery();
  $$('[data-view]').forEach(button=>{
    const active=button.dataset.view===state.view;
    button.classList.toggle("is-active",active);
    if(button.getAttribute("role")!=="tab")button.setAttribute("aria-pressed",String(active));
  });
  $$('[data-view]').forEach(button=>button.addEventListener("click",()=>setView(button.dataset.view)));
  $$('[data-open]').forEach(button=>button.addEventListener("click",()=>openPost(Number(button.dataset.open)+1)));
  $("#brandBtn").addEventListener("click",()=>{setView("all");window.scrollTo({top:0,behavior:"smooth"});});
  for(const id of ["mobileTop","mobileAccount"]){$("#"+id).addEventListener("click",()=>{setView("all");window.scrollTo({top:0,behavior:"smooth"});});}
  $("#resetView").addEventListener("click",()=>setView("all"));
  $("#followBtn").addEventListener("click",()=>{state.following=!state.following;syncFollow();saveStorage();setToast(state.following?"Вы подписались на perfect.daily":"Подписка отменена");});
  $("#shareProfileBtn").addEventListener("click",()=>shareLink(getShareLink(null)));
  for(const id of ["searchButton","mobileSearch","mobileBottomSearch"]){$("#"+id).addEventListener("click",openSearch);}
  $("#closeSearch").addEventListener("click",closeSearch);
  $("#searchBackdrop").addEventListener("click",event=>{if(event.target===$("#searchBackdrop"))closeSearch();});
  $("#searchInput").addEventListener("input",renderSearch);
  $("#postOverlay").addEventListener("click",event=>{if(event.target===$("#postOverlay"))closePost();});
  $("#closePost").addEventListener("click",closePost);
  $("#prevPost").addEventListener("click",()=>movePost(-1));$("#nextPost").addEventListener("click",()=>movePost(1));
  $("#photoPrev").addEventListener("click",()=>movePost(-1));$("#photoNext").addEventListener("click",()=>movePost(1));
  $("#modalLike").addEventListener("click",toggleLike);$("#modalSave").addEventListener("click",toggleSaved);
  $("#modalComment").addEventListener("click",()=>$("#commentInput").focus());
  $("#modalShare").addEventListener("click",()=>shareLink(getShareLink(state.active)));
  let swipeStart=null;
  $(".post-photo").addEventListener("pointerdown",event=>{
    if(!event.isPrimary||event.pointerType==="mouse"||event.target.closest("button"))return;
    swipeStart={x:event.clientX,y:event.clientY,id:event.pointerId};
    $(".post-photo").setPointerCapture(event.pointerId);
  });
  $(".post-photo").addEventListener("pointerup",event=>{
    if(!swipeStart||event.pointerId!==swipeStart.id)return;
    const dx=event.clientX-swipeStart.x,dy=event.clientY-swipeStart.y;
    swipeStart=null;
    if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)movePost(dx<0?1:-1);
  });
  $(".post-photo").addEventListener("pointercancel",()=>{swipeStart=null;});
  $("#commentForm").addEventListener("submit",event=>{
    event.preventDefault();const text=$("#commentInput").value.trim();if(!text||state.active===null)return;
    const id=state.active;if(!Array.isArray(state.comments[id]))state.comments[id]=[];
    state.comments[id].push({name:"you",text:text.slice(0,280),time:"только что"});saveStorage();renderPost();
    $("#postDiscussion").scrollTop=$("#postDiscussion").scrollHeight;
    setToast("Комментарий добавлен на этом устройстве");
  });
  document.addEventListener("keydown",event=>{
    if(event.key==="Tab"&&(state.active!==null||state.searchOpen)){
      const overlay=state.active!==null?$("#postOverlay"):$("#searchBackdrop");
      const focusable=$$('button,input,[tabindex="0"]',overlay).filter(el=>!el.disabled&&el.getClientRects().length);
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
    }
    if(event.key==="Escape"){if(state.active!==null)closePost();else if(state.searchOpen)closeSearch();}
    if(state.active!==null && !["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)){
      if(event.key==="ArrowRight"){event.preventDefault();movePost(1);}
      if(event.key==="ArrowLeft"){event.preventDefault();movePost(-1);}
    }
  });
  const url=new URL(window.location.href);const requested=Number(url.searchParams.get("post"));
  if(requested&&posts.some(p=>p.id===requested))openPost(requested);
}
document.addEventListener("DOMContentLoaded",init);
