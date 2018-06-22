import Chart from 'chart.js';
import getrefData from '../firebase/firebase.js';
import maxDrawdown from '../lib/maxDrawdown.js';


function navChart(account, updateNavData) {
    const ctx = document.getElementById('nav-chart');

    getrefData().then(
        function(snap) {
            // retreive data from Firebase
            const real_data_objects = snap.val();

            // extract x values
            let x_values = real_data_objects.map(
                function(elem) {
                    return Object.values(elem)[0];
                });

            x_values = x_values.slice(8000,9000);
            // extract y values
            let y_values = real_data_objects.map(
                function(elem) {
                    return Object.values(elem)[1];
                });
            y_values = y_values.slice(8000,9000);


            // calculate max drawdown values
            // maxDrawdownData[0] --> max drawdown value
            // maxDrawdownData[1] --> max drawdown begin
            // maxDrawdownData[2] --> max drawdown end
            const maxDrawdownData = maxDrawdown(y_values);

            // calculate points corresponding to max drawdown
            const maxDrawdownpoints = y_values.map(function(elem,i) {
                return (i >= maxDrawdownData[1] && i <= maxDrawdownData[2]) ? elem : NaN;
            });

            //callback to overview to update nav values
            updateNavData(
                y_values[y_values.length-1],
                (maxDrawdownData[0]*100).toFixed(2));

            // draw chart
            return (new Chart(ctx, {
                type: 'line',
                data : {
                    labels: x_values,
                    datasets: 
                        [{
                            label: 'Max Drawdown',
                            data: maxDrawdownpoints,
                            borderColor: 'red',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            fill: false,
                            lineTension: 0,
                            //tooltips: false
                        },{
                            label: 'NAV',
                            data: y_values,
                            borderColor: 'blue',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            fill: false,
                            lineTension: 0
                        }]
                },
                options: {
                    // responsive: true,
                    title: {
                        display: true,
                        text: account + ' - Nav'
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        filter: function (tooltipItem, data) {
                            if (tooltipItem.datasetIndex == 0) {
                                return false;
                            } else {
                                return true;
                            }
                        } 
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'NAV'
                            },
                            // ticks: {
                            //     beginAtZero: true
                            // }
                        }]
                    }
                }
            }));                
        }
    )
}


export default navChart;