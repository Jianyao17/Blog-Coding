document.addEventListener("DOMContentLoaded", function() {

  const colorThief = new ColorThief();
  const images = document.querySelectorAll('.thumbnail');

  images.forEach(image => {
  if (image.complete) {
      applyGradient(image);
  } else {
      image.addEventListener('load', function() {
      applyGradient(image);
      });
  }
  });

  function applyGradient(image) {
  const color = colorThief.getColor(image);
  const card = image.closest(".hextra-feature-card");
  card.style.background 
  = `radial-gradient(ellipse at 50% 80%, rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.21), hsla(0, 0%, 100%, 0))`;
  }
});