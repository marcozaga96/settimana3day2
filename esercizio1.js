const inputName = document.getElementById("inputName");
const registrati = document.getElementById("registrati");
const cancella = document.getElementById("cancella");
const list = document.getElementById("list");

const reg = function () {
  const name = inputName.value;
  localStorage.setItem("utent", name);
};
registrati.addEventListener("click", reg);
const newLi = document.createElement("li");
newLi.innerHTML = localStorage.getItem("utent");
newLi.classList.add("list-group-item");
list.appendChild(newLi);

const canc = function () {
  localStorage.removeItem("utent");
  newLi.classList.add("d-none");
};
cancella.addEventListener("click", canc);
