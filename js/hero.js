const heroSection = document.querySelector(".hero");
const heroTittle = document.createElement("h1")
heroTittle.classList.add("hero__tittle")
const heroTittleTextContent = 'Hello! My name is Michał.';
const hTittleLetters = heroTittleTextContent.split("");
hTittleLetters.forEach(elm => {
    heroTittle.insertAdjacentHTML("beforeend", `<span class="shake__letter">${elm}</span>`)
})
heroSection.append(heroTittle)
const shakeLetters = document.querySelectorAll(".shake__letter");
shakeLetters[18].classList.add("word__color");
shakeLetters[6].classList.remove("shake__letter");
shakeLetters[9].classList.remove("shake__letter");
shakeLetters[14].classList.remove("shake__letter");
shakeLetters[17].classList.remove("shake__letter");
shakeLetters[18].classList.remove("shake__letter");
heroSection.insertAdjacentHTML("beforeend",`<p class="hero__tittle__text"> I am web applications developer. This is my portfolio website. <br>Feel free and take a look around.</p>`)

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});
