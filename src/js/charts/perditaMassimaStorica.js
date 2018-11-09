import Chart from 'chart.js';

function perditaMassimaStoricaChart() {

    const ctx = document.getElementById("perdita-chart").getContext("2d");

    return (new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ['1 anno', '2 anni', '3 anni', '5 anni'],
            datasets: [
                {
                    label: 'Benchmark',
                    backgroundColor: 'blue',
                    data: [-9, -9, -22, -22]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Perdita massima storica'
            },
            scales: {
                yAxes : [{
                    ticks : {   
                        min : -25
                    }
                }]
            }
        }
    }));
}

export default perditaMassimaStoricaChart