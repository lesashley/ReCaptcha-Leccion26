var codigo = document.getElementsByClassName("codigo")[0].value;
var codigoIngresado = document.getElementsByClassName("valor")[0].value;

document.getElementById("btn-actualizar").addEventListener("click",function () {
  //Gernerar random
})
document.getElementById("btn-ok").addEventListener("click",function () {
  if (codigo == codigoIngresado) {
    alert("Código correcto");
  }
  else {
    alert("Código incorrecto");
  }
})
