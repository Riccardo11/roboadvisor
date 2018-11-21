import Chart from 'chart.js';
import getrefData from '../firebase/firebase.js';
import maxDrawdown from '../lib/maxDrawdown.js';
// import getIEXValues from '../iex/iex.js';

const HOLDINGS = ['FEZ', 'VCLT', 'LQD', 'SHY', 'BND', 'IBND', 'EWI', 'SPY'];
const URL = ("https://api.iextrading.com/1.0/stock/market/batch?symbols=" 
             +
             HOLDINGS.join()
             +
             '&types=chart&range=1y');

function calculateNav(allSeries, shares) {
    // create an array of 0s
    // must be long as the longest series
    let nav = Array.apply(null, Array(allSeries[0].length))
                .map(Number.prototype.valueOf,0);

    allSeries.forEach(function (series, nSeries) {
        series.forEach(function (data,i) {
            nav[i] = nav[i] + data*shares[nSeries];
        });
    });
    console.log(nav);
    return nav;
}

function getCloseValuesFromJson(json) {

    let closes = Array.apply(null, Array(json.FEZ.chart.length))
                .map(Number.prototype.valueOf,0);


    HOLDINGS.forEach(function (holding) {
        json[holding].chart.forEach(function (point, i) {
            closes[i] = closes[i] + point.close 
        });
    });
    return closes
}

function getDateFromJson(json) {
    // take one random holding from availables
    const jsonStock = json.FEZ.chart;

    const dates = jsonStock.map(function (point) {
        return point.date
    })
    return dates
}

function convertAmountOfData(amountOfData) {
    switch(amountOfData) {
        case "1":
            return 1000;
        case "2":
            return 20;
        case "3":
            return 120;
        case "4":
            return 240;
        default:
            alert("Errore nella richesta dell'ammontare di dati")
            break;
    }
}

// amountOfData: 1=whole serie, 2=last 30, 3=last 60
function navChart(account, updateNavData, amountOfData) {
    const ctx = document.getElementById('nav-chart');

    // parameters are not useful.. remove them

    // getrefData('exon','data').then(
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {

            // retreive data from Firebase
            // const data = snap.val();

            // // #### Exon Part ####

            // const exonDataArray = Object.values(Object.values(data)[0])[0];

            // // extract x values
            // let xExon = exonDataArray.map(
            //     function(elem) {
            //         return Object.values(elem)[0];
            //     }
            // );

            const amount = convertAmountOfData(amountOfData)

            // xExon = xExon.slice(xExon.length-amount,xExon.length);

            // // extract y values
            // let yExon = exonDataArray.map(
            //     function(elem) {
            //         return Object.values(elem)[1];
            //     }
            // );

            // yExon = yExon.slice(yExon.length-amount,yExon.length);

            // // get shares of Exon
            // const sharesExon = Object.values(Object.values(Object.values(data)[0])[1])[0];
            // console.log(sharesExon);

            // // #### Google Part ####

            // const googleDataArray = Object.values(Object.values(data)[1])[0];

            // // extract x values
            // let xGoogle = googleDataArray.map(
            //     function(elem) {
            //         return Object.values(elem)[0];
            //     }
            // );

            // xGoogle = xGoogle.slice(xGoogle.length-amount,xGoogle.length);

            // // extract y values
            // let yGoogle = googleDataArray.map(
            //     function(elem) {
            //         return Object.values(elem)[1];
            //     }
            // );

            // yGoogle = yGoogle.slice(yGoogle.length-amount,yGoogle.length); 

            // // get shares of Google
            // const sharesGoogle = Object.values(Object.values(Object.values(data)[1])[1])[0];


            // ### Calculate NAV ###           

            // const nav = calculateNav([yExon,yGoogle],[sharesExon,sharesGoogle]);
            // const nav = getCloseValuesFromJson(json)

            let dates = getDateFromJson(json)
            dates = dates.slice(dates.length-amount, dates.length)

            let nav = getCloseValuesFromJson(json)
            nav = nav.slice(nav.length-amount, nav.length)

            // calculate max drawdown values
            // maxDrawdownData[0] --> max drawdown value
            // maxDrawdownData[1] --> max drawdown begin
            // maxDrawdownData[2] --> max drawdown end
            const maxDrawdownData = maxDrawdown(nav);


            // calculate points corresponding to max drawdown
            const maxDrawdownpoints = nav.map(function(elem,i) {
                return (i >= maxDrawdownData[1] && i <= maxDrawdownData[2]) ? elem : NaN;
            });

            let comparisonData = []
            for (let i=0; i < nav.length; i++) {
                if (i == 0)
                    comparisonData[i] = 10000000
                else
                    comparisonData[i] = comparisonData[i-1] + (Math.random() - 0.5) * 200000
            }

            // draw chart
            let myChart = new Chart(ctx, {
                type: 'line',
                data : {
                    labels: dates,
                    datasets: 
                        [{
                            label: 'Max Drawdown',
                            data: maxDrawdownpoints,
                            borderColor: 'red',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            fill: false,
                            lineTension: 0,
                        },{
                            label: 'NAV',
                            data: nav,
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
                        // don't show tooltips for Maxdrawdown serie
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
            });
            //callback to overview to update nav values
            updateNavData(
                nav[nav.length-1],
                (maxDrawdownData[0]*100).toFixed(2),
                myChart
            );
        }
    )
}


export default navChart;