(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-thanks-open]"),
      closeModalBtn: document.querySelector("[data-thanks-close]"),
        modal: document.querySelector("[data-thanks]"),
      form:document.querySelector("[data-form]")
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.form.addEventListener("submit", toggleModal)
  function toggleModal(e) { 
      e.preventDefault()
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();