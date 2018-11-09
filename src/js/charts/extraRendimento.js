import Chart from 'chart.js';

function extraRendimentoChart() {

    const ctx = document.getElementById("extra-rend-chart").getContext("2d");

    return (new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ['1 anno', '2 anni'],
            datasets: [
                {
                    label: 'Benchmark',
                    backgroundColor: 'gray',
                    data: [-9, -9]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Extra rendimento'
            }
        }
    }));
}

export default extraRendimentoChart