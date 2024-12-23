(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalHidden = refs.modal.classList.contains('is-hidden');

    if (isModalHidden) {
      // during opening modal window
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('modal-open');
      refs.modal.classList.remove('is-hidden');
    } else {
      // during closing modal window
      refs.modal.classList.add('is-hidden');

      // waiting for the animation completion before resetting styles
      refs.modal.addEventListener(
        'transitionend',
        () => {
          document.body.style.paddingRight = '';
          document.body.classList.remove('modal-open');
        },
        { once: true },
      );
    }
  }
})();
