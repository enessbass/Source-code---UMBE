var m14 = 3;
                                var k4 = 1.4;     
                            
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