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





  function funk323() {
  
    var b = parseFloat(document.getElementById("byat").value);
    var c = parseFloat(document.getElementById("cyat").value);
    var e = parseFloat(document.getElementById("eyat").value);
    
    var a = parseFloat(document.getElementById("aboy").value);
    var d = parseFloat(document.getElementById("dboy").value);
   
    
    var A1 = b*a;
    var A2 = c*d;

    var x1 = b/2;
    var y1 = d + a/2;
    var x2 = e + c/2;
    var y2 = d/2;

    var xm = (A1*x1 + A2*x2)/(A1+A2);
    var ym = (A1*y1 + A2*y2)/(A1+A2);

    var IX1 = b*(a**3)/12;
    var IX2 = c*(d**3)/12;
    var IY1 = a*(b**3)/12;
    var IY2 = d*(c**3)/12;

    var UA1 = Math.abs(xm-b/2);
    var UA2 = Math.abs(xm-c/2-e);
    var UB1 = Math.abs(ym-d-a/2);
    var UB2 = Math.abs(ym-d/2);

    var IXT = IX1 + IX2 + A1*(UB1**2) + A2*(UB2**2);
    var IYT = IY1 + IY2 + A1*(UA1**2) + A2*(UA2**2);

    var ix = Math.sqrt(IXT/(A1+A2));
    var iy = Math.sqrt(IYT/(A1+A2));
    var i0 = Math.sqrt(ix**2 + iy**2);


    /*Çarpım Atalet Momneti Hesabı */

    var IYX1 = A1*UA1*UB1;
    var IYX2 = A2*UA2*UB2;
    var IYX = IYX1 + IYX2;

    /*Asal Eylemszilik Momenti */

    var max = (IXT + IYT)/2 + Math.sqrt(((IYT-IXT)/2)**2 + IYX**2);
    var min = (IXT + IYT)/2 - Math.sqrt(((IYT-IXT)/2)**2 + IYX**2);
 
    
    var sonuc1 = IXT.toFixed(4);
    var sonuc2 = IYT.toFixed(4);
    var sonuc3 = ix.toFixed(4);
    var sonuc4 = iy.toFixed(4);
    var sonuc5 = i0.toFixed(4);
    var sonuc6 = IYX.toFixed(4);
    var sonuc7 = max.toFixed(4);
    var sonuc8 = min.toFixed(4);
    
    
    document.getElementById("merkez1").innerHTML = sonuc1;
    document.getElementById("merkez2").innerHTML = sonuc2;
    document.getElementById("merkez3").innerHTML = sonuc3;
    document.getElementById("merkez4").innerHTML = sonuc4;
    document.getElementById("merkez5").innerHTML = sonuc5;
    document.getElementById("merkez6").innerHTML = sonuc6;
    document.getElementById("merkez7").innerHTML = sonuc7;
    document.getElementById("merkez8").innerHTML = sonuc8;

   
  
    
  }






































