const selectedLevel1 = JSON.parse(localStorage.getItem("selectedLevel"));

const range = document.getElementById("range");

let i;
let incr = 1;
if (selectedLevel1 === "begginer") {
  for (i = 0; i < 5; i++) {
    range.innerHTML += `<div class="col-sm-6 col-xs-12">
           <div class="form-check">
             <input type="checkbox" class="form-check-input" name="option1" onclick="selectRangeOfNumber(this.value)" value="${incr}-${
      incr + 9
    }">
             <label class="form-check-label" for="check1"> ${incr}-${
      incr + 9
    } </label>
           </div>`;
    incr += 10;
  }
}

if (selectedLevel1 === "medium") {
  for (i = 0; i < 5; i++) {
    range.innerHTML += `<div class="col-sm-6 col-xs-12">
           <div class="form-check">
             <input type="checkbox" class="form-check-input"  onclick="selectRangeOfNumber(this.value)" name="option1" value=" ${incr}-${
      incr + 19
    } ">
             <label class="form-check-label" for="check1"> ${incr}-${
      incr + 19
    } </label>
           </div>`;
    incr += 20;
  }
}

if (selectedLevel1 === "hard") {
  for (i = 0; i < 10; i++) {
    range.innerHTML += `<div class="col-sm-6 col-xs-12">
           <div class="form-check">
             <input type="checkbox" class="form-check-input"  onclick="selectRangeOfNumber(this.value)" name="option1" value="${incr}-${
      incr + 49
    }">
             <label class="form-check-label" for="check1"> ${incr}-${
      incr + 49
    } </label>
           </div>`;
    incr += 50;
  }
}

if (selectedLevel1 === "expert") {
  for (i = 0; i < 10; i++) {
    range.innerHTML += `<div class="col-sm-6 col-xs-12">
           <div class="form-check">
             <input type="checkbox" class="form-check-input" onclick="selectRangeOfNumber(this.value)" name="option1" value=" ${incr}-${
      incr + 99
    }">
             <label class="form-check-label" for="check1"> ${incr}-${
      incr + 99
    } </label>
           </div>`;
    incr += 100;
  }
}

// $(function() {
//   var data = JSON.parse(localStorage.getItem("favorite"));
//   if (data !== null) {
//       $(favorite) = [];
//       // $("input[name='favorites']").attr("checked", "checked");
//   }
// });
// $("input[type='checkbox']").click(function() {
//   if ($(this).is(":checked")) {
      
//       localStorage.setItem("favorite",JSON.stringify($(this).val()) );
//   } else {
//     favorite = $(favorite).filter(e => e !== $(this).val())
//   //     localStorage.removeItem("favorite");

//   }
// });

let list = document.querySelectorAll("input[type='checkbox']");
console.log(list);
const selectRangeOfNumber = (value) => {
  let numberRange = JSON.parse(localStorage.getItem("selectRangeOfNumber"));
  numberRange = [];
  for(var x of list){
    if(x.checked == true){
      numberRange.push(x.value)
    }
    localStorage.setItem("selectRangeOfNumber", JSON.stringify(numberRange));
  }
};


// var list = document.querySelectorAll(".form-check-input");
// // const ls = JSON.parse(localStorage.getItem("list"))
// var arr = [];

// for (var x of list){
//   x.addEventListner("click", function(){
//     if(this.checked == true){
//       arr.push(this.value);
//       localStorage.setItem("list", JSON.stringify(arr))
//     }
//     else{
//       arr = arr.filter(e => e !== this.value)
//       localStorage.setItem("list", JSON.stringify(arr))
//     }
//   });
// }


// var arr = [];
// var checkboxes = document.querySelectorAll("input[type:checkbox]:checked")
// let numberRange = JSON.parse(localStorage.setItem("chexkboxes"))
// for (let i=0; i<checkboxes.length; i++){
//   arr.push(checkboxes[i].value)
//   localStorage.setItem("selectedQueRange", JSON.stringify(arr))
// }