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
        document.querySelector(".projectsbox").style.height = "240vh";
        document.getElementById("projectmore").style.display = "block";
        document.getElementById("projectmore").style.display = "flex";
        document.getElementById("projectmore1").style.display = "block";
        document.getElementById("projectmore1").style.display = "flex";
        document.querySelector(".viewmoreb54").innerHTML = "View Less Projects"
    }
    else {
        document.querySelector(".projectsbox").style.height = "93vh";
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

    }

}
document.getElementById("home1").addEventListener("click", function () {
    document.getElementById("home2").scrollIntoView({ behavior: "smooth" });
});//id home2 not defined as of now
document.getElementById("about1").addEventListener("click", function () {
    document.getElementById("about2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("project1").addEventListener("click", function () {
    document.getElementById("project2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact1").addEventListener("click", function () {
    document.getElementById("contact2").scrollIntoView({ behavior: "smooth" });
});
function viewWork(){
    // document.querySelector(".navlist").style.display="none";
    // document.querySelector(".introcont").style.display="none";
    // document.querySelector(".about").style.display="none";
    // document.querySelector(".projects").style.display="none";
    // document.querySelector(".contacts").style.display="none";
    // document.querySelector(".work").style.display="block";
    window.open("work.html");

}