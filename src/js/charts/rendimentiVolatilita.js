import Chart from 'chart.js';

function rendimentiVolatilitaChart() {

    const ctx = document.getElementById("rend-vol-chart").getContext("2d");

    return (new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ['2018'],
            datasets: [
                {
                    label: 'Rend. Benchmark',
                    backgroundColor: 'blue',
                    data: [4]
                },
                {
                    label: 'Vol. Benchmark',
                    backgroundColor: 'green',
                    data: [13]
                },
                {
                    label: 'Rend. Portafoglio Tecnologico',
                    backgroundColor: 'yellow',
                    data: [-1]
                },
                {
                    label: 'Vol. Portafoglio Tecnologico',
                    backgroundColor: '#fffdd0',
                    data: [17]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Rendimenti e volatilità annuali storici'
            }
        }
    }));
}

export default rendimentiVolatilitaChart