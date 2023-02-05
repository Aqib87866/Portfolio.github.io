/* ================== typing animation =================== */
var typed = new Typed(".typing", {
    strings: ["", "Mechanical Engineer", "Computer Hardware", "MS Office", "Technician"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* ================== Aside =================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
//Contact Form//


function sendEmail() {
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let subject = document.getElementById("Subject").value;
    let messege = document.getElementById("messege").value;

    let body = "Name :" + name + "<br> Email :" + email + "<br> Subject:" + subject + "<br> Messege :" + messege;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "faiqmasood1098@gmail.com",
        Password : "9BD2701DB1F591399F9C68F36EB3B73F16ED",
        To : 'aqib87866@gmail.com',
        From : "faiqmasood1098@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
}