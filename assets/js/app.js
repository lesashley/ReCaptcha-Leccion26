var codigo = document.getElementsByClassName("codigo")[0];
var codigoIngresado = document.getElementsByClassName("valor")[0];

function random() {
  var letras = "ABCDEFJKLMNOPQRSTUVWXYZ1234567890!'#$";
  var recaptcha = 0;
  for(var i = 0; i < 8; i++){
    var rango = Math.floor(Math.random()*letras.length);
    recaptcha += letras.substr(rango,1);
  }
  codigo.value = recaptcha;
}
random();

document.getElementById("btn-actualizar").addEventListener("click",random);

document.getElementById("btn-ok").addEventListener("click",function () {
  if (codigo.value == codigoIngresado.value) {
    alert("Código correcto");
  }
  else {
    alert("Código incorrecto");
  }
})
