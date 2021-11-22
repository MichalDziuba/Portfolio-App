const aboutBtnMe = document.querySelector(".about__btn--me");
const aboutBtnSkills = document.querySelector(".about__btn--skills");
const aboutBtnHobbies = document.querySelector(".about__btn--hobbies");
const divMe = document.querySelector(".about__me");
const divSkills = document.querySelector(".about__skills");
const divHobbies = document.querySelector(".about__hobbies")

aboutBtnSkills.addEventListener("click", () => {
    divMe.classList.add("invisible");
    divSkills.classList.remove("invisible");
    divHobbies.classList.add("invisible");
});
aboutBtnHobbies.addEventListener("click", () => {
    divHobbies.classList.remove("invisible");
    divSkills.classList.add("invisible");
    divMe.classList.add("invisible");
})
aboutBtnMe.addEventListener("click", () => {
    divHobbies.classList.add("invisible");
    divSkills.classList.add("invisible");
    divMe.classList.remove("invisible")
})