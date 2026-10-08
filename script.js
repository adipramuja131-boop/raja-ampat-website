script.js
const semuaBagian = document.querySelectorAll('.bagian');

const pengamat = new IntersectionObserver((terlihat) => {
  terlihat.forEach(bagian => {
    if (bagian.isIntersecting) {
      bagian.target.classList.add('terlihat');
    }
  });
});

semuaBagian.forEach(bagian => pengamat.observe(bagian));