(function () {
    const searchModal = document.getElementById('search-modal'); 
    const searchButton = document.getElementById('search-button');
    
    if (!searchModal) return;
    
    const searchInput = searchModal.querySelector('.search-input');

    function openModal() {
        // buka modal ketika modal tertutup
      if (searchModal?.style.display == 'none') {
        searchModal.style.display = 'flex';
        searchModal.setAttribute('aria-hidden', 'false');
      }
    }
  
    function closeModal() {
      // close modal ketika modal terbuka
      if (searchModal?.style.display == 'flex') {
        searchModal.style.display = 'none';
        searchModal.setAttribute('aria-hidden', 'true');
      }
    }
  
    document.addEventListener('keydown', function (e) {
        if (e.key === 'k' && (e.metaKey /* for Mac */ || /* for non-Mac */ e.ctrlKey)) {
          e.preventDefault();
          openModal(); 
        } else if (e.key === 'Escape' && searchModal.style.display == 'flex') {
          e.preventDefault();
          closeModal();
        } else if (e.key === 'Enter' && searchModal.style.display == 'flex') {
          e.preventDefault();
          closeModal(); 
        }
      });
      
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == searchModal && searchModal.style.display == 'flex') {
            closeModal();
        }
    }

    // buka modal ketika tombol di click
    searchButton.onclick = () => {
      if (searchModal?.style.display == 'none') {
        openModal();
        searchInput.focus();
      }
    }

})();
  