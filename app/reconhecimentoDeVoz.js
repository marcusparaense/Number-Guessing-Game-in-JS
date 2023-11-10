const elementoChute = document.getElementById('chute');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recongnition = new SpeechRecognition();
recongnition.lang = 'pt-Br';
recongnition.start();

recongnition.addEventListener('result', onSpeack);

function onSpeack(e) {
  chute =e.results[0][0].transcript; 
  console.log(chute); 
  exibeChuteNaTela(chute);
  verificarSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela (chute) {
  elementoChute.innerHTML = `
  <div>Você disse</div>
  <span class='box'>${chute}</span> 
  `;
}

recongnition.addEventListener('end', () => recongnition.start());
