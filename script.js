document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I'm Anshul Patel";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            introText.innerHTML = text.substring(0, i + 1) + '<span class="cursor" style="font-size: 1.2em; ">|</span>';
            i++;
            setTimeout(typeEffect, 120);
        }
    }
    typeEffect();
});
function skills() {
    document.querySelector(".about").style.justifyContent = "space-evenly";
    document.getElementById("certification").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("graduation").style.display = "none";
}
function certification() {
    document.querySelector(".about").style.justifyContent = "space-evenly";
    document.getElementById("certification").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("graduation").style.display = "none";
}
function graduation() {
    document.querySelector(".about").style.justifyContent = "space-evenly";
    document.getElementById("certification").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("graduation").style.display = "block";
}
function viewMore() {
    if (document.querySelector(".viewmoreb54").innerHTML == "View More Projects") {
        document.querySelector(".projectsbox").style.height = "auto";
        document.getElementById("projectmore").style.display = "block";
        document.getElementById("projectmore").style.display = "flex";
        document.getElementById("projectmore1").style.display = "block";
        document.getElementById("projectmore1").style.display = "flex";
        document.querySelector(".viewmoreb54").innerHTML = "View Less Projects"
    }
    else {
        document.querySelector(".projectsbox").style.height = "auto";
        document.getElementById("projectmore").style.display = "none";
        document.getElementById("projectmore1").style.display = "none";
        document.querySelector(".viewmoreb54").innerHTML = "View More Projects"
    }
}
function submit() {
    let flag = true;
    if (document.getElementById("name").value == "") {
        document.getElementById("name").style.border = "0.1em solid rgb(230, 6, 6)";
        flag = false;
    }
    if (document.getElementById("email").value == "") {
        document.getElementById("email").style.border = "0.1em solid rgb(230, 6, 6)";
        flag = false;
    }
    if (document.getElementById("msg").value == "") {
        document.getElementById("msg").style.border = "0.1em solid rgb(230, 6, 6)";
        flag = false;
    }
    if (flag == true) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        document.getElementById("name").style.border = "0.1em solid rgb(255, 255, 255)";
        document.getElementById("email").style.border = "0.1em solid rgb(255, 255, 255)";
        document.getElementById("msg").style.border = "0.1em solid rgb(255, 255, 255)";
        document.querySelector(".smbutton").style.backgroundColor="rgb(29, 100, 29)";
        document.querySelector(".smbutton").textContent="MESSAGE SENT!!";
        document.querySelector(".smbutton").style.color="white";
        document.querySelector(".smbutton").style.width="auto";
        document.querySelector(".smbutton").style.fontWeight="600";
        setTimeout(function() {
            document.querySelector(".smbutton").style.backgroundColor="white";
        document.querySelector(".smbutton").textContent="SEND MESSAGE";
        document.querySelector(".smbutton").style.color="black";
        document.querySelector(".smbutton").style.width="auto";
        document.querySelector(".smbutton").style.fontWeight="400";
        }, 3000);
    }

}
document.getElementById("about1").addEventListener("click", function () {
    document.getElementById("about2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("project1").addEventListener("click", function () {
    document.getElementById("project2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact1").addEventListener("click", function () {
    document.getElementById("contact2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact3").addEventListener("click", function () {
    document.getElementById("contact2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("work1").addEventListener("click", function () {
    document.getElementById("work2").scrollIntoView({ behavior: "smooth" });
});
function changetheme(){
    if (document.getElementById("tch").className=="theme dark"){
    document.body.style.backgroundColor="rgb(224, 218, 218)";
    document.getElementById("tch").className="theme bright";
    document.body.style.color="black";
    document.querySelector(".theme").style.filter="invert(0)";
    let icons= document.querySelectorAll(".icons");
    icons.forEach(icon=>{
        icon.style.filter="invert(0)";
    });
    let icons1= document.querySelectorAll(".icons1");
    icons1.forEach(icon=>{
        icon.style.filter="invert(0)";
    });
    let inp1=document.querySelectorAll(".inp1");
    inp1.forEach(inp => {
        inp.style.border="0.1em solid black";
        inp.style.color="black";
    });
    let buttons=document.querySelectorAll(".button-54");
    buttons.forEach(button => {
        button.style.color="black";
        button.style.backgroundColor="white ";
    });
    document.getElementById("qimg1").style.filter="invert(0)";
    let workdur=document.querySelectorAll(".workdur");
    workdur.forEach(dur=>{
        dur.style.color="black"
    })
    
    }
    else{
        document.body.style.color="white";
    document.body.style.backgroundColor="black";
    document.getElementById("tch").className="theme dark";
    let buttons=document.querySelectorAll(".button-54");
    document.querySelector(".theme").style.filter="invert(1)";
    let inp1=document.querySelectorAll(".inp1");
    inp1.forEach(inp => {
        inp.style.border="0.1em solid white";
        inp.style.color="white";
    });
    let icons= document.querySelectorAll(".icons");
    icons.forEach(icon=>{
        icon.style.filter="invert(1)";
    });
    let icons1= document.querySelectorAll(".icons1");
    icons1.forEach(icon=>{
        icon.style.filter="invert(1)";
    });
    buttons.forEach(button => {
        button.style.color="white";
        button.style.backgroundColor="black";
    });
    document.getElementById("qimg1").style.filter="invert(1)";
    let workdur=document.querySelectorAll(".workdur");
    workdur.forEach(dur=>{
        dur.style.color="#aaa"
    })

    }
}
function viewWork() {
    document.querySelector(".navlist").style.display="none";
    document.querySelector(".introcont").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".projects").style.display = "none";
    document.querySelector(".contacts").style.display = "none";
    document.querySelector(".work").style.display = "block";
    document.querySelector(".worklist").style.display="flex";
    // document.querySelector(".navbar").style.gap="62vw";
    document.querySelector(".navbar").style.justifyContent="space-around";
}
function home(){
    document.querySelector(".navlist").style.display="flex";
    document.querySelector(".introcont").style.display = "flex";
    document.querySelector(".about").style.display = "flex";
    document.querySelector(".projects").style.display = "flex";
    document.querySelector(".contacts").style.display = "flex";
    document.querySelector(".work").style.display = "none";
    document.querySelector(".worklist").style.display="none";
    document.querySelector(".navbar").style.justifyContent="space-between";
}
let worktitle=['Core Committee Member','Junior Core Committee Member','Yantra Central Hackathon, VIT Vellore','Gravitas Tech Fest Volunteer (VIT- Vellore)']
let workdescp=['Centre for Social Entrepreneurship and Development','AdMark Club VIT','Attended VIT\’s Flagship 48-hour hackathon with over 600 participantsSKILLS','Centre for Social Entrepreneurship and Development']
let workdur=['Apr 2024 - Present','Apr 2024 - Present','Feb 2025','Aug 2024']
let worklength=worktitle.length;
for(let i=0;i<worklength;i++){
    let maindiv=document.createElement("div");
    maindiv.setAttribute("class","workmain")
    document.querySelector(".workexpcont").append(maindiv);
    let titlediv=document.createElement("div");
    titlediv.setAttribute("class","worktitle");
    titlediv.innerHTML=worktitle[i];
    maindiv.append(titlediv);
    let descpdiv=document.createElement("div");
    descpdiv.setAttribute("class","workdescp");
    descpdiv.innerHTML=workdescp[i];
    maindiv.append(descpdiv);
    let durdiv=document.createElement("div");
    durdiv.setAttribute("class","workdur");
    durdiv.innerHTML=workdur[i];
    titlediv.append(durdiv);   

}

// document.querySelector(".navlist").style.display="none";
//     document.querySelector(".introcont").style.display="none";
//     document.querySelector(".about").style.display="none";
//     document.querySelector(".projects").style.display="none";
//     document.querySelector(".contacts").style.display="none";
//     document.querySelector(".work").style.display="block";
//     document.querySelector(".worklist").style.display="flex";
//     document.querySelector(".navbar").style.gap="56em";
