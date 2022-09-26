const selectedLevel1 = JSON.parse(localStorage.getItem("selectedLevel"));

const sliderContainer = document.getElementById("slider-container");


let maxNumber =
    selectedLevel1 === "begginer" || selectedLevel1 === "medium"
        ? 10
        : selectedLevel1 === "hard"
            ? 20
            : 50;


sliderContainer.innerHTML = `
 <input
id="slide"
type="range"
min="5" 
step=""
data-slider-min="5" 
data-slider-max="${maxNumber}" 
max="${maxNumber}"
value="5"
oninput="handleSliderValue(this.value)"
class="slider"
onchange="handleSliderValue(this.value)"
id="myRange"
/> 
`


$(document).ready(function() {
    $("#slide").slider({
      tooltip: 'always'
    });
  });



// store in localStorage-------------------------//
const handleSliderValue = (value) => {
    localStorage.setItem("sliderValue", JSON.stringify(value));
};

