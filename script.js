let cartCount = 0;

function addToCart() {
    // Increment the cart count
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    // Display popup message
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    const hamburger = document.querySelector('.hamburger');
  
    if (menu.classList.contains('active')) {
        // Remove active class to slide out
        menu.classList.remove('active');
      } else {
        // Add active class to slide in
        menu.classList.add('active');
      }
    
      // Toggle hamburger icon styles
      hamburger.classList.toggle('open');
    }
  
    // Image Slider Logic
document.querySelectorAll('.dots .dot').forEach(dot => {
    dot.addEventListener('click', function () {
      const card = this.closest('.card');
      const images = card.querySelectorAll('.slider-image');
      const dots = card.querySelectorAll('.dot');
  
      // Update the active dot
      dots.forEach(d => d.classList.remove('active'));
      this.classList.add('active');
  
      // Show the corresponding image
      const index = parseInt(this.dataset.index);
      images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== index);
      });
    });
  });
  
  // Rating Logic
  document.querySelectorAll('.rating .star').forEach(star => {
    star.addEventListener('click', function () {
      const stars = this.parentNode.querySelectorAll('.star');
      const value = parseInt(this.dataset.value);
  
      // Highlight all stars up to the selected value
      stars.forEach(s => {
        s.style.color = s.dataset.value <= value ? 'black' : '#ddd';
      });
    });
  });
  
  