function expandText(card) {
  if (card.classList.contains('expanded')) return;

  card.classList.add('expanded');

  // Cria botão de fechar
  const closeBtn = document.createElement('button');
  closeBtn.innerText = '✕';
  closeBtn.classList.add('close-btn');
  closeBtn.onclick = () => {
    card.classList.remove('expanded');
    closeBtn.remove();
  };

  card.appendChild(closeBtn);
}
