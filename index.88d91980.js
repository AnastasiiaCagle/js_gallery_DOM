var e=document.querySelector("#thumbs"),t=document.querySelector("#largeImg");e.addEventListener("click",function(e){if(e.target.matches(".list-item__link"))t.src=e.target.href;else if(e.target.matches(".gallery__thumb")){e.preventDefault();var r=e.target.closest(".list-item__link");t.src=r.href}});
//# sourceMappingURL=index.88d91980.js.map
