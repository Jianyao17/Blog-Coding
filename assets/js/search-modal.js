(function () {
    const searchModal = document.getElementById('search-modal'); 
    const searchButton = document.getElementById('search-button');
    if (!searchModal) return;

    // searchModal.classList.replace('md:hx-flex', 'md:hx-hidden');

    function openModal() {
        // buka modal ketika modal tertutup
      if (searchModal?.classList.contains('md:hx-hidden')) {
        searchModal.classList.replace('md:hx-hidden', 'md:hx-flex');
        searchModal.setAttribute('aria-hidden', 'false');
      }
    }
  
    function closeModal() {
      // close modal ketika modal terbuka
      if (searchModal?.classList.contains('md:hx-flex')) {
        searchModal.classList.replace('md:hx-flex', 'md:hx-hidden');
        searchModal.setAttribute('aria-hidden', 'true');
      }
    }
  
    document.addEventListener('keydown', function (e) {
        if (e.key === 'k' && e.ctrlKey) {
          e.preventDefault();
          openModal(); 
        } else if (e.key === 'Escape' && !searchModal.classList.contains('md:hx-hidden')) {
          e.preventDefault();
          closeModal();
        } else if (e.key === 'Enter' && !searchModal.classList.contains('md:hx-hidden')) {
          e.preventDefault();
          closeModal(); 
        }
      });
      
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == searchModal && searchModal.classList.contains('md:hx-flex')) {
            closeModal();
        }
    }

    // buka modal ketika tombol di click
    searchButton.onclick = function (evt) {
      if (searchModal.classList.contains('md:hx-hidden')){
        openModal();
        searchModal.querySelector('.search-input').focus();
      }
    }

})();
  