const body = document.getElementsByClassName("body")[0];
const verde = document.querySelectorAll(".verde");
const azul = document.querySelectorAll(".azul");

for (i = 0; i < verde.length; i++) {
  console.log("primeiro for");
  verde[i].setAttribute("onmouseenter", `mudaCor1(${i})`);
  console.log(verde[0]);
}

for (i = 0; i < azul.length; i++) {
  console.log("segundo for");
  azul[i].setAttribute("onmouseenter", `mudaCor2(${i})`);
}

function mudaCor1(i) {
  verde[i].style.color = "green";
}

function mudaCor2(i) {
  azul[i].style.color = "blue";
}