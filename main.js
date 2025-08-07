window.onload = () => {
  // Capturando o formulário
  const formulario = document.querySelector(".formulario-imc");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Recebendo os dados inseridos pelo usuário
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Obtendo o valor do IMC
    const imc = calcularIMC(peso, altura);

    // Exibindo o calculo na tela
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.style.display = "grid";
    main.style.placeContent = "center";

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    exibirEmTela(h1, `O seu IMC é ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      exibirEmTela(p, "👇 Abaixo do peso ideal");
    } else if (imc < 24.9) {
      exibirEmTela(p, "👍 Peso normal");
    } else if (imc < 29.9) {
       exibirEmTela(p, "👆 Sobrepeso");
    } else if (imc < 34.9) {
       exibirEmTela(p, "Obesidade grau I");
    } else if (imc , 39.9) {
      exibirEmTela(p, "Obesidade grau II");
    } else {
      exibirEmTela(p, "Obesidade Mórbida");
    }

    main.appendChild(h1);
    main.appendChild(p);
  });

  // Funções matemáticas
  function calcularIMC(quilogramas, altura) {
    return quilogramas / (altura * altura);
  }

  // Função de Manipulação de Strings
  function exibirEmTela(element, textDescript) {
    element.textContent = textDescript;
  }
};
