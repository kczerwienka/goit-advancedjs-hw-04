import{S as V,i as B,a as $}from"./assets/vendor-DEenWwFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();var _=new V("#gallery a",{captionDelay:250});function z(r,o,c="dupa",s="0",e="0",t="0",n="0",f){const D=document.querySelector("#gallery"),l=document.createElement("li");l.className="gallery-item",D.append(l);const a=document.createElement("a");a.className="gallery-link",a.href=r,l.append(a);const i=document.createElement("img");i.className="gallery-image",i.src=o,i.title=c,a.append(i);const u=document.createElement("div");u.className="info",l.append(u);const h=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div"),E=document.createElement("div"),C=document.createElement("h3"),b=document.createElement("h3"),w=document.createElement("h3"),L=document.createElement("h3");C.textContent="Likes",b.textContent="Views",w.textContent="Comments",L.textContent="Downloads";const S=document.createElement("p"),q=document.createElement("p"),x=document.createElement("p"),R=document.createElement("p");S.textContent=s,q.textContent=e,x.textContent=t,R.textContent=n,u.append(h,g,v,E),h.append(C,S),g.append(b,q),v.append(w,x),E.append(L,R),_.refresh()}function A(){const r=document.querySelector("#gallery");for(;r.firstChild;)r.removeChild(r.lastChild)}var F="47376754-ed05d64ddcb60a2a475f4c9e7";const H=document.querySelector(".start-button"),d=document.querySelector(".more-button"),k=document.querySelector(".loader"),I=document.querySelector(".loader-more"),U=document.querySelector(".loader-end");async function K(r,o,c,s,e){return(await $.get("https://pixabay.com/api/?key="+F+"&q="+encodeURIComponent(r)+"&image_type="+encodeURIComponent(c)+"&orientation="+encodeURIComponent(s)+"&safesearch="+encodeURIComponent(e)+"&page="+encodeURIComponent(o)+"&per_page="+encodeURIComponent(15))).data}async function P(r,o,c="photo",s="horizontal",e=!0){o==1?k.style.display="inline-block":(I.style.display="block",d.style.display="none");try{const t=await K(r,o,c,s,e);if(console.log(t),o>=t.totalHits/15?(d.style.display="none",U.style.display="block"):(d.style.display="block",U.style.display="none"),t.totalHits>0?(o==1&&A(),t.hits.forEach(n=>{z(n.largeImageURL,n.previewURL,n.tags,n.likes,n.views,n.comments,n.downloads,o)})):B.error({title:"Error",message:"No results for this search",position:"topRight"}),H.disabled=!1,k.style.display="none",I.style.display="none",d.style.display="block",o>1){const f=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy(0,f.height*2+64)}}catch{}}const N=document.querySelector("button"),p=document.querySelector("input"),y=document.querySelector(".more-button"),G=document.querySelector(".loader-more"),M=document.querySelector(".loader-end");y.style.display="none";G.style.display="none";M.style.display="none";let O="",m=1;N.addEventListener("click",r=>{N.disabled=!0,p.value?(m=1,O=p.value,P(p.value,m),y.style.display="block"):B.error({title:"Error",message:"Please enter search value",position:"topRight"})});y.addEventListener("click",r=>{m++,P(O,m)});
//# sourceMappingURL=index.js.map
