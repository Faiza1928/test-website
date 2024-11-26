function openPreview(image) {
  const modal = document.getElementById('image-preview-modal');
  const modalImg = document.getElementById('modal-image');
  const captionText = document.getElementById('caption');

  modal.style.display = "flex"; // Tampilkan modal dengan flexbox
  modalImg.src = image.src; // Set gambar yang dipilih ke modal
  captionText.textContent = image.alt; // Set caption dari gambar
}

function closePreview() {
  const modal = document.getElementById('image-preview-modal');
  modal.style.display = "none"; // Sembunyikan modal
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate-fadeIn");
              observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi berjalan
          }
      });
  });

  elements.forEach(el => observer.observe(el));
});
