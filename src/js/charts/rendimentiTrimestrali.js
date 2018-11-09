import Chart from 'chart.js';

function rendimentiTrimestraliChart() {

    const ctx = document.getElementById("rend-chart").getContext("2d");

    return (new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ['2T-18', '3T-18'],
            datasets: [
                {
                    label: 'Rend. Benchmark',
                    backgroundColor: 'purple',
                    data: [12.25, 8.0]
                },
                {
                    label: 'Rend. Portafoglio Tecnologico',
                    backgroundColor: 'blue',
                    data: [0, 4.20]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Rendimenti trimestrali di periodo'
            }
        }
    }));
}

export default rendimentiTrimestraliChart