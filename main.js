

function calculate() {
    var weight_val = Number(document.getElementById("weight").value);

    var height_val = Number(document.getElementById("height").value);
    

var bmi_val = weight_val/(height_val*height_val);


document.getElementById("bmi").innerHTML = Math.round(bmi_val);
  
  
}