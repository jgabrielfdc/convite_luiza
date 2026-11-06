const vid = document.getElementById('vid');
    // Quando o vídeo carrega, aplica a mesma dimensão nas artes
    vid.addEventListener('loadedmetadata', () => {
      const vw = vid.videoWidth;
      const vh = vid.videoHeight;
      const stageW = window.innerWidth;
      const stageH = window.innerHeight;

      // Calcula o tamanho real com object-fit: contain
      const scale = Math.min(stageW / vw, stageH / vh);
      const realW = vw * scale;
      const realH = vh * scale;

      // Aplica nas artes
      document.querySelectorAll('.arte').forEach(el => {
        el.style.inset = 'auto';
        el.style.width = realW + 'px';
        el.style.height = realH + 'px';
        el.style.left = ((stageW - realW) / 2) + 'px';
        el.style.top = ((stageH - realH) / 2) + 'px';
      });
    });
    const btn = document.getElementById('play-btn');
    let atual = 0;

    vid.play().then(() => btn.style.display = 'none')
      .catch(() => btn.style.display = 'flex');
    btn.addEventListener('click', () => { btn.style.display = 'none'; vid.play(); });

    vid.addEventListener('ended', () => {
  document.getElementById('video-wrap').style.display = 'none';

  const a1 = document.getElementById('arte1');
  a1.style.transition = 'none';
  a1.style.transform = 'translateX(0)';
  a1.style.opacity = '1';
  a1.classList.add('active');

  requestAnimationFrame(() => {
    a1.style.transition = '';
    a1.style.transform = '';
    a1.style.opacity = '';
  });

  atual = 1;
});   

    function mostrar(n) {
      const dir = n > atual ? 1 : -1;

      if (atual >= 1) {
        const prev = document.getElementById('arte' + atual);
        prev.classList.remove('active');
        prev.style.transform = `translateX(${-dir * 100}%)`;
        prev.style.opacity = '0';
      }

      const novo = document.getElementById('arte' + n);
      novo.classList.remove('active');
      novo.style.transform = `translateX(${dir * 100}%)`;
      novo.style.opacity = '0';
      novo.offsetHeight;
      novo.style.transform = '';
      novo.style.opacity = '';
      novo.classList.add('active');

      document.querySelectorAll('.arte').forEach((el, i) => {
        el.querySelectorAll('.dot').forEach((d) => {
          d.classList.toggle('active', i + 1 === n);
        });
      });

      atual = n;
    }

    function irPara(n) { mostrar(n); }