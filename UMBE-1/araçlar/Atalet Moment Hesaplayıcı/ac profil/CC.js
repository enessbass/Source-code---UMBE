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





  function funk223() {
  
    var a = parseFloat(document.getElementById("ayat").value);
    var w = parseFloat(document.getElementById("wyat").value);
    var b = parseFloat(document.getElementById("byat").value);
    
    var t = parseFloat(document.getElementById("tboy").value);
    var h = parseFloat(document.getElementById("hboy").value);
    var q = parseFloat(document.getElementById("qboy").value);
   
    /*Parçanın Alanları*/

    var A1 = a*t;
    var A2 = w*h;
    var A3 = b*q;

    /* Parçanın x ve y eksenine uzaklığı */

    var x1 = a/2;
    var y1 = t/2 +h + q;
    var x2 = w/2;
    var y2 = h/2 + q;
    var x3 = b/2;
    var y3 = q/2;

    var xm = (A1*x1 + A2*x2 + A3*x3)/(A1+A2+A3);
    var ym = (A1*y1 + A2*y2 + A3*y3)/(A1+A2+A3);

    

    /* Parçaların Atlet Momentleri */

    var IX1 = a*(t**3)/12;
    var IX2 = w*(h**3)/12;
    var IX3 = b*(q**3)/12;

    var IY1 = t*(a**3)/12;
    var IY2 = h*(w**3)/12;
    var IY3 = q*(b**3)/12;

    /*Parçaların xm ile x arasındaki mesafe*/

    var UA1 = Math.abs(xm-a/2);
    var UA2 = Math.abs(xm-w/2);
    var UA3 = Math.abs(xm-b/2);

    var UB1 = Math.abs(ym-t/2 - h - q);
    var UB2 = Math.abs(ym-h/2-q);
    var UB3 = Math.abs(ym-q/2);

    /* Topam Atalet */

    var IXT = IX1 + IX2 + IX3 + A1*(UB1**2) + A2*(UB2**2) + A3*(UB3**2);
    var IYT = IY1 + IY2 + IY3 + A1*(UA1**2) + A2*(UA2**2) + A3*(UA3**2);

    var ix = Math.sqrt(IXT/(A1+A2+A3)); 
    var iy = Math.sqrt(IYT/(A1+A2+A3));
    var i0 = Math.sqrt(ix**2 + iy**2);


    /*Çarpım Atalet Momneti Hesabı */
    var a1 = a/2 - xm;
    var b1 = t/2 +h+q -ym;
    var a2 = w/2 -xm;
    var b2 = h/2 +q - ym;
    var a3 = b/2 - xm ;
    var b3 = q/2 -ym;

    var IYX1 = A1*a1*b1;
    var IYX2 = A2*a2*b2;
    var IYX3 = A3*a3*b3;
    var IYX = IYX1 + IYX2 + IYX3;

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






































