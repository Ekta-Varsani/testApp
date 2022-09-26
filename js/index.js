

// const checkValidation = () => {
//   console.log("here");
//   const phoneNumber = document.getElementById("phn");
//   const errorMsg = document.getElementById("msg");

//   const regex =
//     /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
//   const result = phoneNumber.match(regex);

//   if (!result) {
//     errorMsg.innerHTML = "Invalid Number";
//   } else {
//     errorMsg.innerHTML = "";
//   }
// };
// const phoneNumber = document.getElementById("phn");
// phoneNumber.addEventListener("change", checkValidation);
// phoneNumber.addEventListener("keyup", checkValidation);





const sub = document.getElementById("sub");
var regName = /^[a-zA-Z]+$/;
function validate(){
  var fname = document.getElementById('fname').value;
  if(!regName.test(fname)){
      // document.getElementById("errFname").innerHTML = "enter name"
      alert('Please enter characters only');
      document.getElementById('firstName').blur();
      sub.disabled = true;
      return false;
  } 
  else{
    sub.disabled = false;
  }
}

function validateLname(){
  var lname = document.getElementById('lname').value;
  if(!regName.test(lname)){
    // document.getElementById("errFname").innerHTML = "enter name"
    alert('Please enter characters only');
    document.getElementById('lastName').blur();
    sub.disabled = true;
    return false;
  }
  else{
    sub.disabled = false;
  }
}

function validatePhoneNumber(){
  const regNo = /[1-9][0-9]{9}/;
  var phn = document.getElementById('phn').value;
  if(!regNo.test(phn)){
    // document.getElementById("errFname").innerHTML = "enter name"
    alert('Please enter valid 10 digit phone number');
    document.getElementById('phone').blur();
    sub.disabled = true;
    return false;
  }
  else{
    sub.disabled = false;
  }
}

function validateAddress(){
  // const regAdd = /^[a-zA-Z0-9\s,'-]*$/;
  const regAdd = /(?!^\d+$)^.+$/;
  var add = document.getElementById('add').value;
  if(!regAdd.test(add)){
    // document.getElementById("errFname").innerHTML = "enter name"
    alert('Please enter proper address!!');
    document.getElementById('address').blur();
    sub.disabled = true;
    return false;
  }
  else{
    sub.disabled = false;
  }
}

