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
  var w = parseFloat(document.getElementById("agir").value);
  var s = parseFloat(document.getElementById("alan").value);
  var CD0 = parseFloat(document.getElementById("Sürükleme").value);
  var cl = parseFloat(document.getElementById("clmax").value);
  var y = parseFloat(document.getElementById("yuvarlanma").value);


  var a = (2*w)/(0.0023769*s*cl);
  var Vst = 1.3*(Math.sqrt(a));
  var VT = Vst*0.7;

  var D = (1/2)*0.0023769*VT*s*CD0;

  var ust = (1.69)*(w**2);
  var alt1 = 32.2*0.0023769*s*cl;
  var alt2 = D + y*w;

  var sonuc = ust / ( alt1*alt2);

  document.getElementById("merkez").innerHTML = sonuc.toFixed(2);
}
   
    


  