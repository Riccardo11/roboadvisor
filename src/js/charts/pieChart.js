import Chart from 'chart.js';
import 'chart.piecelabel.js';
import getrefData from '../firebase/firebase.js';

// Chart.defaults.global.responsive = true;
// Chart.defaults.global.maintainAspectRatio = false;

// const ctx = document.getElementById("pie-chart");
// console.log(ctx);

function myChart(account, isForSummary, updateTableFun) {

    getrefData('exon','values').then(
        function (snap) {
            console.log(snap.val().shares);
            console.log(snap.val().type);
        }
    );

    const ctx = document.getElementById("pie-chart");
    if (isForSummary) {
        ctx.height=100;
    }
    console.log(account);
    return (new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Government Bond","Equity","Cash","High Yield"],
            datasets: [{
                label: 'Nav for every asset type',
                data: [12000, 17000, 25000, 31000],
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
            responsive: true,
            pieceLabel: {
                render: 'percentage',
                fontSize: 15,
                fontStyle: 'bold',
            },
            legend: {
                position: 'left'
            },
            title: {
                display: true,
                text: account + ' - NAV for every asset type'
            },
            onClick: updateTableFun
        }
    }))};

export default myChart