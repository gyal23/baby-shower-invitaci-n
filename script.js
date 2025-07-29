// ==== CONTADOR REGRESIVO ====
const countdown = document.getElementById('countdown');
// Fecha objetivo: 23 de agosto de 2025 a las 10:30 AM
const targetDate = new Date('2025-08-23T10:30:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.innerHTML = '¡Hoy es el gran día!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `
    ${days} días<br>
    ${hours} horas<br>
    ${minutes} minutos<br>
    ${seconds} segundos
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ==== ANIMACIÓN SUAVE DE LAS CARDS ====
function toggleCard(card) {
  const text = card.querySelector('.card-text');

  // Oculta todas las demás tarjetas
  document.querySelectorAll('.card-text').forEach(t => {
    if (t !== text) {
      t.style.maxHeight = null;
      t.style.opacity = 0;
      t.style.paddingTop = '0';
    }
  });

  // Alternar animación de la tarjeta seleccionada
  if (text.style.maxHeight) {
    text.style.maxHeight = null;
    text.style.opacity = 0;
    text.style.paddingTop = '0';
  } else {
    text.style.maxHeight = text.scrollHeight + "px";
    text.style.opacity = 1;
    text.style.paddingTop = '0.5rem';
  }
}
