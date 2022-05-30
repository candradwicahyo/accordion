window.onload = () => {
  
  const buttons = document.querySelectorAll('#button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const text = this.previousElementSibling.querySelector('.text');
      text.classList.toggle('active');
    });
  });
  
}