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

function takas() {
  var checkbox1 = document.getElementById("che");
  
    if ( checkbox1.checked) {
      document.getElementById("a1").style.display = "none";
      document.getElementById("a2").style.display = "block";

      document.getElementById("jeo").style.display = "block";
      document.getElementById("geo").style.display = "none";

      document.getElementById("sonjeo").style.display = "none";
      document.getElementById("songeo").style.display = "block";
      


    } else {
      document.getElementById("a1").style.display = "block";
      document.getElementById("a2").style.display = "none";

      document.getElementById("geo").style.display = "block";
      document.getElementById("jeo").style.display = "none";

      document.getElementById("sonjeo").style.display = "block";
      document.getElementById("songeo").style.display = "none";
    }

}

function baslat() {
  var checkbox_one = document.getElementById("che");

  if (checkbox_one.checked) {
      var r = document.getElementById("rr").value;
      var h = document.getElementById("degjeo").value;

      var sonuc = h*r/(r-h);
      document.getElementById("merkez").innerHTML = sonuc.toFixed(4);


     
  } else {
      var r = document.getElementById("rr").value;
      var hg = document.getElementById("deggeo").value;


      var aa1= r/(r+hg)*10**4;
      var aa2= hg; 
      var jeopotans = aa1 * aa2;


      document.getElementById("merkez").innerHTML = jeopotans.toFixed(6);
  }
  
}
   
    


  