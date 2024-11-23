const lenis = new Lenis({
  smooth:true,
  duration:1.2,
  lerp: 0.1,
  smoothWheel: true,
  smoothTouch: true,
  normalizeWheel: true,
  direction: 'vertical', // Commence avec un défilement vertical
});

function animate(time) {
  lenis.raf(time);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

document.querySelector('a[href="#section__carousel"]').addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le comportement par défaut

  const target = document.querySelector('#section__carousel'); // Section cible

  const offset = 105; // Ajuste cette valeur pour décaler vers le haut
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  lenis.scrollTo(targetPosition); // Scrolle avec un décalage de 30px vers le haut
});

document.querySelector('a[href="#link__navbar"]').addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le comportement par défaut

  const target = document.querySelector('#link__navbar'); // Section cible

  const offset = 2; // Ajuste cette valeur pour décaler vers le haut
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  lenis.scrollTo(targetPosition); // Scrolle avec un décalage de 30px vers le haut
});

document.querySelector('a[href="#section__about"]').addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le comportement par défaut

  const target = document.querySelector('#section__about'); // Section cible

  const offset = -250; // Ajuste cette valeur pour décaler vers le haut
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  lenis.scrollTo(targetPosition); // Scrolle avec un décalage de 30px vers le haut
});
