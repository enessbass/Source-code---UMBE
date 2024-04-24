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

  

  function funk39() {
    
    var p0_deger   = parseFloat(document.getElementById("inputpo").value);
    var yog_deger  = parseFloat(document.getElementById("inputro").value);
    var cek_deger  = parseFloat(document.getElementById("inputg").value);
    var teta_deger = parseFloat(document.getElementById("inputteta").value);
    var uzak_deger = parseFloat(document.getElementById("inputuzak").value);
    var boy_deger  = parseFloat(document.getElementById("inputboy").value);
    var en_deger   = parseFloat(document.getElementById("inputen").value);
  
    
    var Fr = (p0_deger + yog_deger * cek_deger * (uzak_deger + boy_deger / 2) * Math.sin(teta_deger * Math.PI / 180)) * en_deger * boy_deger;
    
    
    document.getElementById("kuvvet").innerHTML = Fr.toFixed(4);
  
    var bir = uzak_deger;
    var iki = boy_deger / 2;
    var uc = boy_deger ** 2;
    var dort = bir + iki;
    var bes = p0_deger ;
    var alti = Math.sin(teta_deger * Math.PI / 180);
    var yedi = cek_deger * yog_deger * alti;
    var sekiz = bes/ alti;

    
    var sonuc = bir + iki + uc/(12*dort+sekiz);
    document.getElementById("merkez").innerHTML = sonuc.toFixed(4);
  }
  
   
    


  