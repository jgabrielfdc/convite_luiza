// 👇 Troque pela data do evento
const evento = new Date(2026, 10, 28); // 28/12/2026

function atualizar() {
  const agora = new Date();
  const diff = evento - agora;

  if (diff <= 0) {
    document.getElementById('cd-dias').textContent = '0';
    document.getElementById('cd-horas').textContent = '0';
    document.getElementById('cd-min').textContent = '0';
    document.getElementById('cd-seg').textContent = '0';
    return;
  }

  const dias  = Math.floor(diff / 86400000);
  const horas = Math.floor((diff % 86400000) / 3600000);
  const min   = Math.floor((diff % 3600000) / 60000);
  const seg   = Math.floor((diff % 60000) / 1000);

  document.getElementById('cd-dias').textContent = dias;
  document.getElementById('cd-horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('cd-min').textContent  = String(min).padStart(2, '0');
  document.getElementById('cd-seg').textContent  = String(seg).padStart(2, '0');
}

atualizar();
setInterval(atualizar, 1000); // atualiza a cada segundo   