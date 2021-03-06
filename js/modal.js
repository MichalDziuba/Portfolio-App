(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  const btnA = document.querySelector(".mobile__link-a");
  const btnP = document.querySelector(".mobile__link-p");
  const btnC = document.querySelector(".mobile__link-c");
  btnA.addEventListener("click", () => {
    refs.modal.classList.add("is-hidden")
  })
  btnP.addEventListener("click", () => {
    refs.modal.classList.add("is-hidden")
  })
  btnC.addEventListener("click", () => {
    refs.modal.classList.add("is-hidden")
  })

})();
