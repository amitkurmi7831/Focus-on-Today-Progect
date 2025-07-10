const input = document.querySelectorAll(".gol input ");
const checkboxs = document.querySelectorAll(".gol .checkboxs ");
const progresh = document.querySelector(".hi");
const arr = document.querySelector(".alt");
const p = document.querySelector(".pera p");

const gols = getlocolstorege2() || {
  frist: { name: "", completed: false },
  secand: { name: "", completed: false },
  thard: { name: "", completed: false },
};
const tiele = [
  "Raise the bar by completing your goals!",
  "all Raise the bar by completing your goals!",
  "Raise the bar by completing your goals!",
  'Raise the bar by completing your goals!'
];
let connt = Object.values(gols).filter((com) => com.completed).length;
// console.log(connt);
progresh.style.width = `${(connt / [...input].length) * 100}%`;
// progresh.nextElementSibling.innerText='connt'
progresh.firstElementChild.innerText = ` ${connt}/3 Completed `;
p.innerText = tiele[connt];

input.forEach((inputText) => {
  if (gols[inputText.id].completed) {
    inputText.value = gols[inputText.id].name;
  }
  inputText.addEventListener("input", (e) => {
    // console.log(gols[inputText.id]);
    if (gols[inputText.id].completed) {
      return (inputText.value = gols[inputText.id].name);
    }

    gols[inputText.id].name = inputText.value;

    setlocolstorege1();
  });
  inputText.addEventListener("focus", () => {
    arr.classList.remove("arr");
  });
});

checkboxs.forEach((check) => {
  if (gols[check.nextElementSibling.id].completed) {
    check.parentElement.classList.add("completed");
  }
  check.addEventListener("click", (e) => {
    if (inputcheck()) {
      check.parentElement.classList.toggle("completed");

      // console.log(check.nextElementSibling.id);

      gols[check.nextElementSibling.id].completed =
        !gols[check.nextElementSibling.id].completed;
      setlocolstorege1();
      connt = Object.values(gols).filter((com) => com.completed).length;
      progresh.style.width = `${(connt / [...input].length) * 100}%`;
      progresh.firstElementChild.innerText = ` ${connt}/3 Completed `;
      p.innerText = tiele[connt];
    } else {
      arr.classList.add("arr");
    }
    // console.log(gols);
  });
});

function inputcheck() {
  return [...input].every((inp) => {
    return inp.value;
  });
}
function setlocolstorege1() {
  localStorage.setItem("gols", JSON.stringify(gols));
}
function getlocolstorege2() {
  return JSON.parse(localStorage.getItem("gols"));
}
