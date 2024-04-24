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

//                                       Checkbox Tuş Ayarlamaları                 //

function fonk55() {
    var checkbox1 = document.getElementById("but1");
    var checkbox2 = document.getElementById("but2");
    var checkbox3 = document.getElementById("but3");
    var input1 = document.getElementById("m1");
    var input2 = document.getElementById("Q");
    var input3 = document.getElementById("B");

    // checbox seçim uyarısı // 

    var checkedCount = 0
    if (checkbox1.checked) {
      checkedCount++;
    }
    if (checkbox2.checked) {
      checkedCount++;
    }
    if (checkbox3.checked) {
      checkedCount++;
    }
  
    if (checkedCount > 2) {
      alert("Lütfen en fazla iki tane seçin!");
      window.location.reload();
    }
    

    //checkbox radio ayarları // 

    if (checkbox1.checked && checkbox2.checked) {
        
        input3.disabled = true; 
        input3.style.opacity = 0.9; 

    } 
    else if (checkbox1.checked && checkbox3.checked) {
       
        input2.disabled = true; 
        input2.style.opacity = 0.9; 
    } 
    else if (checkbox2.checked && checkbox3.checked) {
      
        input1.disabled = true; 
        input1.style.opacity = 0.9; 
    } 
    else {
        input1.disabled = false; 
        input2.disabled = false;
        input3.disabled = false;
        input1.style.opacity = 1; 
        input2.style.opacity = 1;
        input3.style.opacity = 1;
    }
     
}




  function redas() {
  var checkbox1 = document.getElementById("but1");
  var checkbox2 = document.getElementById("but2");
  var checkbox3 = document.getElementById("but3");

  var m1 = parseFloat(document.getElementById("m1").value);
  var q = parseFloat(document.getElementById("Q").value);
  var b = parseFloat(document.getElementById("B").value);
  var k = parseFloat(document.getElementById("kdeger").value);
  var p1 = parseFloat(document.getElementById("basinc1").value);
  var t1 = parseFloat(document.getElementById("sicak1").value);


  
  if (checkbox1.checked && checkbox2.checked ) {
  
    alert("M1 ve θ SEÇİLDİ");
    var tanteta, sag;
    var tanteta = Math.tan(q* Math.PI / 180);
    
    for (var b = 0; ; b += 0.001) {
      
         var sag1 = 2 / Math.tan(b * Math.PI / 180);
         var sag2 = ((m1 ** 2) * ((Math.sin(b * Math.PI / 180))**2)-1);
         var sag3 = (m1 ** 2) * (k + Math.cos(2 * b * Math.PI / 180)) + 2;
    
        sag = sag1 * sag2 / sag3;
        
        if (tanteta < sag) {          
            break;
        }
        
    }

    var sonuc4 = document.getElementById("merkez4").innerHTML = b.toFixed(2);
    var sonuc5 = document.getElementById("merkez5").innerHTML = q.toFixed(2);
    
    var mn1 = m1*Math.sin(b * Math.PI/180);
    var sonuc1 = document.getElementById("merkez1").innerHTML = mn1.toFixed(3);

    var mn21 = 1 + (k-1)/2*(mn1**2);
    var mn22 = k*(mn1**2)-(k-1)/2;
    var mn2 = Math.sqrt(mn21 / mn22);
    var sonuc2 = document.getElementById("merkez2").innerHTML = mn2.toFixed(3);

    var m233 = mn2 / Math.sin((b-q) * Math.PI / 180);
    var sonuc3 = document.getElementById("merkez3").innerHTML = m233.toFixed(3);

    var basincoran = 1 + (2*k)/(k+1)*(mn1**2-1);
    var sonuc6 = document.getElementById("merkez6").innerHTML = basincoran.toFixed(3);

    var yogoran = (k+1)*(mn1**2)/(2+(k-1)*(mn1**2));
    var sonuc7 = document.getElementById("merkez7").innerHTML = yogoran.toFixed(3);

    var sicakoran = basincoran/yogoran;
    var sonuc8 = document.getElementById("merkez8").innerHTML = sicakoran.toFixed(3);

    var sonuc001 = document.getElementById("merkez001").innerHTML = m1.toFixed(3);


      
    
  }

  else if(checkbox1.checked && checkbox3.checked){
    alert("M1 ve β SEÇİLDİ");

    var mn1 = m1 * Math.sin(b * Math.PI / 180);
    var sonuc1 = document.getElementById("merkez1").innerHTML = mn1.toFixed(3);

    var mn21 = 1 + (k-1)/2*(mn1**2);
    var mn22 = k*(mn1**2)-(k-1)/2;
    var mn2 = Math.sqrt(mn21 / mn22);
    var sonuc2 = document.getElementById("merkez2").innerHTML = mn2.toFixed(3);

    var sonuc4 = document.getElementById("merkez4").innerHTML = b;

    var teta1 = (2 / Math.tan(b * Math.PI / 180));
    var teta2 = (m1**2)*(Math.sin(b*Math.PI /180)**2)-1;
    var teta3 = (m1**2)*(k + Math.cos(b * 2 * Math.PI / 180))+2;
    var teta = teta1* teta2/teta3;
    var atett = Math.atan(teta) * 180 / Math.PI;
    var sonuc5 = document.getElementById("merkez5").innerHTML = atett.toFixed(2);


    var m233 = mn2 / Math.sin((b-atett) * Math.PI / 180);
    var sonuc3 = document.getElementById("merkez3").innerHTML = m233.toFixed(3);
    


    var basincoran = 1 + (2*k)/(k+1)*(mn1**2-1);
    var sonuc6 = document.getElementById("merkez6").innerHTML = basincoran.toFixed(3);

    var yogoran = (k+1)*(mn1**2)/(2+(k-1)*(mn1**2));
    var sonuc7 = document.getElementById("merkez7").innerHTML = yogoran.toFixed(3);

    var sicakoran = basincoran/yogoran;
    var sonuc8 = document.getElementById("merkez8").innerHTML = sicakoran.toFixed(3);

    var sonuc001 = document.getElementById("merkez001").innerHTML = m1.toFixed(3);


  } 

  else if(checkbox2.checked && checkbox3.checked){

    alert("θ ve β SEÇİLDİ");

    var tanteta, sag;
    var tanteta = Math.tan(q* Math.PI / 180);
    
    for (var m111 = 0; ; m111 += 0.001) {
      
         var sag1 = 2 / Math.tan(b * Math.PI / 180);
         var sag2 = ((m111 ** 2) * ((Math.sin(b * Math.PI / 180))**2)-1);
         var sag3 = (m111 ** 2) * (k + Math.cos(2 * b * Math.PI / 180)) + 2;
    
        sag = sag1 * sag2 / sag3;
        
        if (tanteta < sag) {        
            break;
        }
        
    }

    var m1 = m111
    var sonuc001 = document.getElementById("merkez001").innerHTML = m1.toFixed(3);

    var mn1 = m1 * Math.sin(b * Math.PI / 180);
    var sonuc1 = document.getElementById("merkez1").innerHTML = mn1.toFixed(3);

    var mn21 = 1 + (k-1)/2*(mn1**2);
    var mn22 = k*(mn1**2)-(k-1)/2;
    var mn2 = Math.sqrt(mn21 / mn22);
    var sonuc2 = document.getElementById("merkez2").innerHTML = mn2.toFixed(3);

    var m233 = mn2 / Math.sin((b-q) * Math.PI / 180);
    var sonuc3 = document.getElementById("merkez3").innerHTML = m233.toFixed(3);

    var sonuc4 = document.getElementById("merkez4").innerHTML = b.toFixed(2);
    var sonuc5 = document.getElementById("merkez5").innerHTML = q.toFixed(2);
    
    var basincoran = 1 + (2*k)/(k+1)*(mn1**2-1);
    var sonuc6 = document.getElementById("merkez6").innerHTML = basincoran.toFixed(3);

    var yogoran = (k+1)*(mn1**2)/(2+(k-1)*(mn1**2));
    var sonuc7 = document.getElementById("merkez7").innerHTML = yogoran.toFixed(3);

    var sicakoran = basincoran/yogoran;
    var sonuc8 = document.getElementById("merkez8").innerHTML = sicakoran.toFixed(3);

    var sonuc001 = document.getElementById("merkez001").innerHTML = m1.toFixed(3);

  }

  else
   {
    alert("M1 , θ veya β değerlerinden ikisini seçin!");
  }

  /* *****************************************************************************************/

    document.getElementById("kapaa").style.display = "none";   
    document.getElementById("chart1").style.display = "block"; 
    document.getElementById("chart2").style.display = "block"; 

  /* *****************************************************************************************/
  var m14 = parseFloat(document.getElementById('m1').value);
  var k4 = parseFloat(document.getElementById('kdeger').value);
  var P1 = parseFloat(document.getElementById('basinc1').value);


  let bbValues = [];
  let qqValues = [];
  let basoranValues = [];

  for (let bb = 0; bb < 100; bb++) {
      var sag1_a = 2 / Math.tan(bb * Math.PI / 180);
      var sag2_a = ((m14 ** 2) * ((Math.sin(bb * Math.PI / 180))**2)-1);
      var sag3_a = (m14** 2) * (k4 + Math.cos(2 * bb * Math.PI / 180)) + 2;

      var sag_a = sag1_a * sag2_a / sag3_a;

      var qq = Math.atan(sag_a) * (180 / Math.PI);

      bbValues.push(bb);
      qqValues.push(parseFloat(qq.toFixed(2))); // virgülden sonraki sadece 2 rakamı al

      var mn1 = m14 * Math.sin(bb * Math.PI / 180);
      var basincoran = 1 + (2 * k4) / (k4 + 1) * (mn1 ** 2 - 1);
      var basincoran = basincoran*P1;
      
      basoranValues.push(basincoran);
  }

  // Draw chart
  var ctx1 = document.getElementById('chart1').getContext('2d');
  var myChart1 = new Chart(ctx1, {
      type: 'line',
      data: {
          labels: bbValues,
          datasets: [{
              label: 'θ Değeri',
              data: qqValues,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
          }]
      },
      options: {
          scales: {
              x: {
                  title: {
                      display: true,
                      text: String.fromCharCode(946) // x eksenini β ile değiştiriyoruz
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: String.fromCharCode(952) // y eksenini θ ile değiştiriyoruz
                  },
                  ticks: {
                      callback: function(value, index, values) {
                          if (index === values.length - 1) {
                              return value + " θ"; // Sağdaki son etikete "θ" ekle
                          } else {
                              return value;
                          }
                      }
                  }
              }
          },
          plugins: {
              legend: {
                  display: true
              }
          }
      }
  });

  var ctx2 = document.getElementById('chart2').getContext('2d');
  var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: qqValues,
        datasets: [{
            label: 'P2 Değeri',
            data: basoranValues,
            fill: false,
            borderColor: 'rgb(192, 75, 75)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: String.fromCharCode(952) // x ekseni başlığı (θ)
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'P2 Değeri' // y ekseni başlığı
                },
                ticks: {
                    callback: function(value, index, values) {
                        if (index === values.length - 1) {
                            return value + " P2"; // Sağdaki son etikete "P2" ekle
                        } else {
                            return value;
                        }
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: true
            }
        }
    }

  });

  window.onload;
                                   
 }
 



   
 
 function drawChart() {
  var m14 = parseFloat(document.getElementById('m14').value);
  var k4 = parseFloat(document.getElementById('k4').value);

  let bbValues = [];
  let qqValues = [];

  for (let bb = 0; bb < 100; bb++) {
      var sag1_a = 2 / Math.tan(bb * Math.PI / 180);
      var sag2_a = ((m14 ** 2) * ((Math.sin(bb * Math.PI / 180))**2)-1);
      var sag3_a = (m14** 2) * (k4 + Math.cos(2 * bb * Math.PI / 180)) + 2;

      var sag_a = sag1_a * sag2_a / sag3_a;

      var qq = Math.atan(sag_a) * (180 / Math.PI);

      bbValues.push(bb);
      qqValues.push(qq);
  }

  // Draw chart
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: bbValues,
          datasets: [{
              label: 'qq',
              data: qqValues,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
          }]
      },
      options: {
          scales: {
              x: {
                  title: {
                      display: true,
                      text: String.fromCharCode(946) // x eksenini β ile değiştiriyoruz
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: String.fromCharCode(952) // y eksenini θ ile değiştiriyoruz
                  },
                  ticks: {
                      callback: function(value, index, values) {
                          if (index === values.length - 1) {
                              return value + " θ"; // Sağdaki son etikete "θ" ekle
                          } else {
                              return value;
                          }
                      }
                  }
              }
          },
          plugins: {
              legend: {
                  display: false
              }
          }
      }
  });
}








 

 






 

  


















 
   
    


  