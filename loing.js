const singIn=document.querySelectorAll(".btn-sing-in")
const singup=document.querySelectorAll(".btn-sing-up")
const logingDiv=document.getElementById("loging-form")
const formIn=document.querySelector(".sing-in")
const formUp=document.querySelector(".sing-up")


singup.forEach((butons)=>{
    butons.addEventListener("click",(e)=>{
    logingDiv.classList.remove("active")
    formIn.classList.add("active")
    formUp.classList.remove("active")
  
})})
singIn.forEach((butons)=>{
    butons.addEventListener("click",(e)=>{
        logingDiv.classList.remove("active")
        formIn.classList.add("active")
        formUp.classList.remove("active")
    
})})

document.getElementById("sing-sing-in").addEventListener("click",(e)=>{

     logingDiv.classList.toggle("active")
     document.getElementById("categories").classList.toggle("active")
 })
 document.getElementById("sing-sing-up").addEventListener("click",(e)=>{
    logingDiv.classList.toggle("active")
    document.getElementById("categories").classList.toggle("active")
     
 })
// singIn
const inEmail=document.getElementById("input-in-email")
const inPassword=document.getElementById("input-in-password")
const submitIn=document.getElementById("sing-in-form")
// singup

const submitUp = document.getElementById("sing-up-form");
const upEmail = document.getElementById("input-up-email");
const upPassword = document.getElementById("input-up-password");
const upConfirm = document.getElementById("input-up-confirm");

const storge = JSON.parse(localStorage.getItem("data")) || [];

const fromUpEmail = (e) => {
    e.preventDefault();
    const emailExists = storge.find(user => user.email === upEmail.value);

    if (!emailExists) {
        
        
        if (upPassword.value === upConfirm.value) {
            const currentTask = {
                email: upEmail.value,
                password: upPassword.value
            };

            storge.push(currentTask);
            localStorage.setItem("data", JSON.stringify(storge));

            upEmail.value = "";
            upPassword.value = "";
            upConfirm.value = "";
            console.log("Sign up successful!");
        } else {
            upConfirm.value=""
            document.getElementById("input-up-email").setCustomValidity("Passwords do not match")
        }
    } else {
        document.getElementById("input-up-email").setCustomValidity("Email already exists")
      
        
    }

};

const fromInEmail = (e) => {
    e.preventDefault();
    
    const present = storge.find(user => user.email === inEmail.value);
    
    if(present){
       const ifPWong=present.password!==inPassword.value? document.querySelector("#input-in-password").setCustomValidity("wrong password"):inEmail.value="" 
       inPassword.value="" 
       logingDiv.classList.add("active")
       
       document.getElementById("categories").classList.remove("active")

      
    }
    else{
        document.getElementById("input-in-email").setCustomValidity("This Email Is Not Exits please Register ")
    }
};

submitUp.addEventListener("submit", fromUpEmail);
submitIn.addEventListener("submit", fromInEmail);

