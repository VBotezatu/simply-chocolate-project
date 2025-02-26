(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-rewiew-open]"),
      closeModalBtn: document.querySelector("[data-rewiew-close]"),
      modal: document.querySelector("[data-rewiew]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();