function start() {
  var botaoCalcular = document.querySelector('#botao');
  console.log('start');
  botaoCalcular.addEventListener('click', quandoClicar);
}

function calcularImc(peso, altura) {
  return peso / ((altura / 100) * (altura / 100));
}

function quandoClicar() {
  console.log('cliquei');
  var inserirPeso = document.querySelector('#inserirPeso');
  var inserirAltura = document.querySelector('#inserirAltura');
  var imcCalculado = document.querySelector('#imcCalculado');
  var faixaCalculada = document.querySelector('#faixaCalculada');

  var peso = Number(inserirPeso.value);
  var altura = Number(inserirAltura.value);
  var imc = calcularImc(peso, altura);
  var faixa = calcularFaixa();

  function calcularFaixa() {
    if (imc >= 16 && imc <= 16.9) {
      return 'Muito abaixo do peso!';
    }
    if (imc >= 17 && imc <= 18.4) {
      return 'Abaixo do peso!';
    }
    if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso normal!';
    }
    if (imc >= 25 && imc <= 29.9) {
      return 'Acima do peso!';
    }
    if (imc >= 30 && imc <= 34.9) {
      return 'Obesidade Grau 1!';
    }
    if (imc >= 35 && imc <= 40) {
      return 'Obesidade Grau 2!';
    }
    if (imc > 40) {
      return 'Obesidade grau 3!';
    } else {
      return 'Fora da escala!';
    }
  }
  imcCalculado.textContent = imc.toFixed(2).replace('.', ',');
  faixaCalculada.textContent = faixa;

  console.log('Seu peso é: ' + peso);
  console.log('Sua altura é: ' + altura);
  console.log('Seu IMC é: ' + imc);
}

start();
