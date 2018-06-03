google.charts.load('current', {'packages':['corechart']});

current_account = '';
data_pie = [];
function drawChart(data) {
/*
    var data = google.visualization.arrayToDataTable([
        ['Asset Type', 'NAV'],
        ['Bond',     30000],
        ['Equity',   20000],
        ['FX',  15000],
        ['High Yield', 80000]
	]);*/
	
	var data = google.visualization.arrayToDataTable(data_pie);

    var options = {
        title: current_account + ' - NAV for every Asset Type'
    };

    var chart = new google.visualization.PieChart(document.getElementById('nav_pie_chart'));

    chart.draw(data, options);
}

$(document).ready(function() {
	$("#accountamenu").click(function() {
		current_account = "A";
		data_pie = [['Asset Type', 'NAV'],
                   ['Bond',     30000],
                   ['Equity',   20000],
                   ['FX',  15000],
                   ['High Yield', 80000]]
		google.charts.setOnLoadCallback(drawChart);
	});
	$("#accountbmenu").click(function() {
		current_account = "B";
		data_pie = [['Asset Type', 'NAV'],
                   ['Bond',     12000],
                   ['Equity',   25000],
                   ['FX',  31000],
                   ['High Yield', 17000]]
		google.charts.setOnLoadCallback(drawChart);
	});
});
