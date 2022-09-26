
//begginer------------//
document.getElementById('start-btn').disabled=true
document.getElementById("start-btn")

let selectedLevel;

const begginer = document.getElementById("begbtn");
begginer.addEventListener("click", () => {
  selectedLevel = "begginer";
  localStorage.setItem("selectedLevel", JSON.stringify("begginer"));
document.getElementById('start-btn').disabled=false
});

const medium = document.getElementById("medbtn");
medium.addEventListener("click", () => {
  selectedLevel = "medium";
  localStorage.setItem("selectedLevel", JSON.stringify("medium"));
document.getElementById('start-btn').disabled=false
});

const hard = document.getElementById("hardbtn");
hard.addEventListener("click", () => {
  selectedLevel = "hard";
  localStorage.setItem("selectedLevel", JSON.stringify("hard"));
document.getElementById('start-btn').disabled=false
});

const expert = document.getElementById("expbtn");
expert.addEventListener("click", () => {
  selectedLevel = "expert";
  localStorage.setItem("selectedLevel", JSON.stringify("expert"));
document.getElementById('start-btn').disabled=false
});

const ChnageNextPage =() =>{
  document.location.href = "level2.html";
}

