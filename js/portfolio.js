const portfolioElms = [
  {
    tittle: 'WebStudio',
    tech: 'HTML,CSS,JavaScript',
    link: 'https://michaldziuba.github.io/goit-markup-hw-08/',
    preview: './images/WebStudio.png',
    description: 'First WebSite created on homeworks in a GoIT course.',
    code: 'https://github.com/MichalDziuba/goit-js-hw-08',
  },
  {
    tittle: 'HellEn',
    tech: 'HTML,CSS,JavaScript,ParcelBundler',
    link: 'https://piotrekjot.github.io/team-hellen/',
    preview: './images/HellEn.png',
    description: 'WebSite created in group on a course.',
    code: 'https://github.com/piotrekjot/team-hellen',
  },
  {
    tittle: 'EventBooster',
    tech: 'HTML,CSS,JavaScript,RestAPI',
    link: 'https://patrykjarzynka.github.io/Project_JS/',
    preview: './images/EventBooster.png',
    description:
      'The Website is used to search for events by country or artist.',
    code: 'https://github.com/PatrykJarzynka/Project_JS',
  },
  {
    tittle: 'ImageFinder',
    tech: 'HTML,CSS,React,RestAPI',
    link: 'https://michaldziuba.github.io/goit-react-hw-04-hooks-images/',
    preview: './images/ImageFinder.png',
    description: 'WebSite for searching images with PixaBay API.',
    code: 'https://github.com/MichalDziuba/goit-react-hw-04-hooks-images',
  },
  {
    tittle: 'MoviesFinder',
    tech: 'HTML,CSS,React,RestAPI',
    link: 'https://michaldziuba.github.io/goit-react-hw-05-movies/',
    preview: './images/MoviesFinder.png',
    description:
      'WebSite for searching movies and details with themoviedb API.',
    code: 'https://github.com/MichalDziuba/goit-react-hw-05-movies',
  },
  {
    tittle: 'BooksFinder',
    tech: 'HTML,CSS,React,RestAPI',
    link: 'https://michaldziuba.github.io/bookfinder/',
    preview: './images/BookFinder.png',
    description: 'WebSite for searching ebooks with Project Gutenberg API.',
    code: 'https://github.com/MichalDziuba/bookfinder',
  },
  {
    tittle: 'Phonebook',
    tech: 'JS,CSS,React,Redux',
    link: 'https://phonebook-md.netlify.app/',
    preview: './images/PhoneBook.png',
    description: 'Phone book application with user registration and login. Used Connections API as backend.',
    code: 'https://github.com/MichalDziuba/goit-react-hw-08--phonebook',
  },
];

const portfolioGallery = document.querySelector(".portfolio__gallery");
portfolioElms.forEach(elm => {
  portfolioGallery.insertAdjacentHTML("afterbegin", `<div class="portfolio__item">
    <img
      class="portfolio__image"
      src="${elm.preview}"
      alt="${elm.description}"
    />
  <div class="portfolio__overlay fadeIn-right fadeIn-bottom">
  <h3 class="portfolio__tittle">${elm.tittle}</h3>
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