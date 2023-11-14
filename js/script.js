var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 5;

function chutou() {
  var chute = parseInt(document.getElementById("chute").value);
  if (chute == numeroSecreto) {
    alert("Você acertou o chute o número secreto é " + chute);
    window.location.reload();
  } else if (chute > numeroSecreto) {
    alert("O número " + chute + " é maior que o número secreto");
    tentativas = tentativas - 1;
  } else if (chute < numeroSecreto) {
    alert("O número " + chute + " é menor que o número secreto");
    tentativas = tentativas - 1;
  }
  if (tentativas <= 0) {
    alert("Você perdeu o número secreto era " + numeroSecreto);
    window.location.reload();
  }
}
