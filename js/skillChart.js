'use strict';   // Mode strict du JavaScript

var ctx = document.getElementById('myChart').getContext('2d');
					var progress = document.getElementById('animationProgress');
					var chart = new Chart(ctx, {
						// The type of chart we want to create
						type: 'doughnut',

						// The data for our dataset
						data: {
							labels: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery"],
							datasets: [{
								label: "My First dataset",

								data: [90, 90, 50, 65, 80, 55],
								backgroundColor: [
									'#f3453c',
									'#f4813a',
									'#f5ae28',
									'#ffe100',
									'#b7e500',
									'#4ce500'
								],
								
							}]
						},

						// Configuration options go here
						options: {
							legend: {
								display: true,
								labels: {
									fontColor: 'rgb(255, 99, 132)',
									padding: 25,
									boxWidth: 50
								}
							},
							title: {
								display: true,
								text: 'Légende: ',
								fontSize: 20,
								padding: 20,
								fontColor: '#2980B9',
								fontStyle: 'bold'
							},

						}

					});
