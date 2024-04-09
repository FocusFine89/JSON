// DICHIARAZIONI GENERALI

const input = document.getElementById("Name");
const label = document.getElementById("Label-name");
const btnDelete = document.getElementById("btn-delete");
const form = document.getElementById("Form");
let nome2 = "";
const NAME_MEMORY = "localMemoryName";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#Form").onsubmit = function (e) {
    // preveniamo l'evento di default con conseguente reload della pagina
    e.preventDefault();
    const nome = input.value;
    NameToJson = JSON.stringify(nome);
    localStorage.setItem(NAME_MEMORY, NameToJson);
    nome2 = JSON.parse(localStorage.getItem(NAME_MEMORY));
    label.innerText = `Nome: ${nome2}`;
    form.reset();
  };
});

btnDelete.onclick = () => {
  label.innerText = `Nome:`;
  localStorage.removeItem(NAME_MEMORY);
  form.reset();
};

window.addEventListener("DOMContentLoaded", () => {
  const storageName = JSON.parse(localStorage.getItem(NAME_MEMORY));
  if (storageName) {
    label.innerText = `Nome: ${storageName}`;
  }
});
