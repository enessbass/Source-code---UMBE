function fonk1() {
  var dddElement = document.getElementById("box-1");
  
  if (dddElement.style.display === 'none' || dddElement.style.display === '') {
      dddElement.style.display = 'inline-block';
    } else {
      dddElement.style.display = 'none';
    }
}

function fonk11() {
  var dddElement = document.getElementById("box-11");
  
  if (dddElement.style.display === 'none' || dddElement.style.display === '') {
      dddElement.style.display = 'inline-block';
    } else {
      dddElement.style.display = 'none';
    }
}

function fonk2() {
  var dddElement = document.getElementById("box-2");
  
  if (dddElement.style.display === 'none' || dddElement.style.display === '') {
      dddElement.style.display = 'inline-block';
    } else {
      dddElement.style.display = 'none';
    }
}

function fonk3() {
  var dddElement = document.getElementById("box-3");
  
  if (dddElement.style.display === 'none' || dddElement.style.display === '') {
      dddElement.style.display = 'inline-block';
    } else {
      dddElement.style.display = 'none';
    }
}

function hesap() {
  var ww = parseFloat(document.getElementById("agir").value);
  var ss = parseFloat(document.getElementById("alan").value);
  var cl = parseFloat(document.getElementById("clmax").value);
  var ttmax = parseFloat(document.getElementById("tmax").value);

  var a = 2 * ww;
  var b = 1.226 * ss * cl; 
  var stall = Math.sqrt(a / b);
  var vlo = stall*1.2;

  var a1 = (vlo ** 2) * ww; 
  var b1 = 2 * 9.81 * ttmax; 
  var uzun = a1 / b1;

  document.getElementById("merkez").innerHTML = uzun.toFixed(2);
}
   
    


  