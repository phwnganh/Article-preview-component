const shareBtn = document.querySelector(".share-icon");
const shareTab = document.querySelector(".share-tab");
const authContainer = document.querySelector(".author-container")
if (window.innerWidth > 576) {
  shareBtn.addEventListener("mouseenter", (e) => {
    shareTab.classList.add("active");
  });

  shareBtn.addEventListener("mouseleave", (e) => {
    shareTab.classList.remove("active");
  });
}

if(window.innerWidth <= 576){
    shareBtn.addEventListener("click", e => {
        authContainer.classList.toggle("active")
    })

}
