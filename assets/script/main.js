const checkBoxForm = document.querySelector("#myFormDetail");
const formMyForm = document.querySelector("#myForm");
let count = 0;

if (localStorage) {
  for (const [key, value] of Object.entries(localStorage)) {
    render(value, key);
  }
}

function render(activity, keymaker) {
  const fieldSet = document.createElement("fieldset");

  fieldSet.className = "flex-container-flex";
  const h2 = document.createElement("h2");
  h2.innerHTML = "X";
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "do";
  const label = document.createElement("label");
  label.innerText = activity;

  formMyForm.reset();
  label.id = "todolabel";
  input.addEventListener("click", (e) => {
    if (e.target.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });

  h2.addEventListener("click", () => {
    fieldSet.style.display = "none";
    localStorage.removeItem(keymaker);
  });

  checkBoxForm.append(fieldSet);
  fieldSet.append(div);
  fieldSet.append(h2);
  div.append(input);
  div.append(label);
}

formMyForm.addEventListener("submit", (e) => {
  count++;
  e.preventDefault();
  localStorage.setItem(`todo${count}`, e.target.elements.todo.value);
  render(e.target.elements.todo.value, `todo${count}`);
});
