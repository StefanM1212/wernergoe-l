
  function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle("hidden");
  }

  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }


   document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-header').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });