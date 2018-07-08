import Chart from 'chart.js';
import 'chart.piecelabel.js';

// Chart.defaults.global.responsive = true;
// Chart.defaults.global.maintainAspectRatio = false;

// const ctx = document.getElementById("pie-chart");
// console.log(ctx);
function profile1Chart() {

    const ctx = document.getElementById("profile1_chart");
    ctx.height=100;
    return (new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Government Bond","Equity","Cash","High Yield"],
            datasets: [{
                label: 'Nav for every asset type',
                data: [60, 0, 40, 0],
                backgroundColor: [
                    'rgba(153, 255, 153)',
                    'rgba(255, 255, 153)',
                    'rgba(102, 255, 255)',
                    'rgba(255, 153, 204)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            pieceLabel: {
                render: 'percentage',
                fontSize: 15,
                fontStyle: 'bold',
            },
            title: {
                display: true,
                text: 'Profile 1 - NAV for every asset type'
            }
        }
    }))};

export default profile1Chart
