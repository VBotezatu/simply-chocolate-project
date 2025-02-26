(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-feedback-open]"),
      closeModalBtn: document.querySelector("[data-feedback-close]"),
      modal: document.querySelector("[data-feedback]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal(e) { 
      e.preventDefault()
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();