const shareBtn = document.querySelector(".share-icon");
const shareTab = document.querySelector(".share-tab");
const authContainer = document.querySelector(".author-container");
console.log("sharebtn: ", shareBtn);
console.log("share tab: ", shareTab);


shareBtn.addEventListener("click", () => {
    if(window.innerWidth <= 576){
        authContainer.classList.toggle("active")
    }else{
        shareTab.classList.toggle("active")
        shareBtn.classList.toggle("active")
    }
})
