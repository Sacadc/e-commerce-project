const functionClose=()=>{
   document.getElementById("detail-container").classList.toggle("show")
}


const toggleFuction=(event)=>{
const data=event.target.closest(".custom-svg").dataset.target
document.querySelectorAll(".wished-list").forEach(btn=>btn.classList.add("active"))
document.getElementById(data).classList.toggle("active")
document.querySelector(".wished").classList.toggle("active")
};

const closeFuctionToggle=(event)=>{

   const data=event.target.closest(".close-btn").dataset.target
   document.getElementById(data).classList.toggle("active")
   document.querySelector(".wished").classList.toggle("active")


}



document.querySelector(".wished").addEventListener("click",closeFuctionToggle)
document.querySelector(".costom-info").addEventListener("click",toggleFuction)



document.addEventListener("click",(event)=>{
   const target=event.target
if(target.classList.contains("nav-section")){

  document.querySelectorAll(".nav-section").forEach(color=>color.style.background="transparent")
  document.querySelectorAll(".nav-section").forEach(color=>color.style.color="black")

  document.querySelector(`[data-target="${target.dataset.target}"]`).style.background="#00b207"
  document.querySelector(`[data-target="${target.dataset.target}"]`).style.color="white"

   document.querySelectorAll(".toggle-me").forEach(remove=>remove.classList.add("active"))
   const targetDataSet=target.dataset.target
   document.getElementById(targetDataSet).classList.remove("active")

}

})
// cart to table 

document.getElementById("check-cart-items").addEventListener("click",(e)=>{
   document.querySelectorAll(".toggle-me").forEach(remove=>remove.classList.add("active"))
document.querySelector("#cart-section").classList.remove("active")
document.querySelector(".wished").classList.toggle("active")
})
// wish to table 
document.getElementById("check-wish-items").addEventListener("click",()=>{
   document.getElementById("wish-table").classList.remove("active")
   document.querySelectorAll(".wished-list").forEach(btn=>btn.classList.add("active"))
   document.querySelector(".wished").classList.toggle("active")


})

let slider=document.querySelector(".home-w-scroll-imgs")
const time=4000

const nextSlider=()=>{
slider.append(slider.querySelector(".scroll-img:first-child"))
 
setTimeout(nextSlider,time)
}

nextSlider()

