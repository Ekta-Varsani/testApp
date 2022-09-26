const selectedLevel1 = JSON.parse(localStorage.getItem("selectedLevel"));

let operation = document.getElementById("operation");

if (selectedLevel1 === "begginer") {
  operation.innerHTML += `
    <div class="col col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="+" onclick="selectOpration(this.id)" name="option1" value="something">
            <label class="form-check-label" for="check1">Add (+)</label>
        </div>
    </div>
    `;
}

if (selectedLevel1 === "medium") {
  operation.innerHTML += `
    <div class="col-sm-6 col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="+" onclick="selectOpration(this.id)" name="option1" value="something">
            <label class="form-check-label" for="check1">Add (+)</label>
        </div>
    </div>
    <div class="col-sm-6 col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="-" onclick="selectOpration(this.id)" name="option2" value="something">
            <label class="form-check-label" for="check2">Sub (-)</label>
        </div>
    </div>   
`;
}

if (selectedLevel1 === "hard") {
  operation.innerHTML += `
    <div class="col-sm-6 col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="+" onclick="selectOpration(this.id)" name="option1" value="something">
            <label class="form-check-label" for="check1">Add (+)</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="*" onclick="selectOpration(this.id)" name="option1" value="something">
            <label class="form-check-label" for="check1">Mul (*)</label>
        </div>
    </div>
    <div class="col-sm-6 col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="-" onclick="selectOpration(this.id)" name="option2" value="something">
            <label class="form-check-label" for="check2">Sub (-)</label>
        </div>
    </div>   
`;
}

if (selectedLevel1 === "expert") {
  operation.innerHTML += `
    <div class="col-sm-6 col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="+" onclick="selectOpration(this.id)" name="option1" value="something">
            <label class="form-check-label" for="check1">Add (+)</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="*" onclick="selectOpration(this.id)" name="option1" value="something">
            <label class="form-check-label" for="check1">Mul (*)</label>
        </div>
    </div>
    <div class="col-sm-6 col-xs-12">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="-" onclick="selectOpration(this.id)" name="option2" value="something">
            <label class="form-check-label" for="check2">Sub (-)</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="/" onclick="selectOpration(this.id)" name="option2" value="something">
            <label class="form-check-label" for="check2">Div (/)</label>
        </div>
    </div>   
`;
}

let list = document.querySelectorAll("input[type='checkbox']");
console.log(list);
const selectOpration = (id) => {
  let operation = JSON.parse(localStorage.getItem("selectOpration"));
  operation = [];
  for(var x of list){
    if(x.checked == true){
        operation.push(x.id)
    }
    localStorage.setItem("selectOpration", JSON.stringify(operation));
  }
};

// const selectOpration = (id) => {
//   let operation = JSON.parse(localStorage.getItem("operation"));
//   if (operation === null) {
//     operation = [];
//   }
//   operation.push(id);
//   localStorage.setItem("operation", JSON.stringify(operation));
// };
