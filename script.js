window.onload = () => {
  
  // accordion
  const accordion = document.querySelectorAll('.accordion');
  accordion.forEach(accor => {
    accor.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  
}