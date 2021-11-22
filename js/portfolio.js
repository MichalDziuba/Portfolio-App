const portfolioElms = [{
    tittle: 'WebStudio',
    tech: 'HTML,CSS,JavaScript',
    link: 'https://michaldziuba.github.io/goit-markup-hw-08/',
    preview: "./images/webstudio-preview.png",
    description: 'First WebSite created on homeworks in a GoIT course.',
    code: 'https://github.com/MichalDziuba/goit-js-hw-08'

  },
  {
    tittle: 'IceCream',
    tech: 'HTML,CSS,JavaScript,ParcelBundler',
    link: 'https://piotrekjot.github.io/team-hellen/',
    preview: './images/iceCream-preview.png',
    description: 'WebSite created in group on a course.',
    code: 'https://github.com/piotrekjot/team-hellen'
  },

]
const portfolioGallery = document.querySelector(".portfolio__gallery");
portfolioElms.forEach(elm => {
  portfolioGallery.insertAdjacentHTML("afterbegin", `<div class="portfolio__item">
    <img
      class="portfolio__image"
      src="${elm.preview}"
      alt="${elm.description}"
    />
  <div class="portfolio__overlay">
  <h4 class="portfolio__tittle">${elm.tittle}</h4>
  <p class="overlay__techdesc">Technologies:</p>
  <p class="overlay__tech">${elm.tech}</p>
  <p class="overlay__description">${elm.description}</p>
  <ul class="overlay__list">
  <li class="overlay__link hvr-bounce-to-right"><a href="${elm.link}" target="_blank" class="overlay__button hvr-bounce-to-right">Live</a></li>
  <li class="overlay__link hvr-bounce-to-right"><a href="${elm.code}" target="_blank" class="overlay__button hvr-bounce-to-right">Code</a></li>
  </ul>
  </div>
</div> `)
});

console.log("Yep, I'm looking for a job! :) ")