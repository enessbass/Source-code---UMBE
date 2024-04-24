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

  

  function fhesa() {
    
    var a_deger   = parseFloat(document.getElementById("vson").value);
    var b_deger  = parseFloat(document.getElementById("pson").value);
    var c_deger  = parseFloat(document.getElementById("p").value);
    var d_deger = parseFloat(document.getElementById("roson").value);
  
  
    var cp = (c_deger - b_deger)/(1/2*d_deger*(a_deger**2));

    document.getElementById("merkez").innerHTML = cp.toFixed(2);
  
  }
  
   
    


  