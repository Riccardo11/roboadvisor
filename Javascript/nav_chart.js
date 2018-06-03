 // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
    Date.prototype.addDays = function(days) {
       var dat = new Date(this.valueOf());
       dat.setDate(dat.getDate() + days);
       return dat;
   }

   function getDates(startDate, stopDate) {
      var dateArray = new Array();
      var currentDate = startDate;
      while (currentDate < stopDate) {
        dateArray.push(currentDate);
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }

	var dateArray = getDates(new Date(), (new Date()).addDays(100));
	
	var data_array = [];
	let data_for_max_drawdown = [];
	let n_data = 100;
	var current_name = 'No name selected';
	
	//********************************
	
	function generateRandomData() {
		var i;
		for (i=0; i<n_data; i++) {
			random_nav = Math.random()*100;
			data_array[data_array.length] = ([dateArray[i].toDateString(),random_nav]);
			data_for_max_drawdown[data_for_max_drawdown.length] = random_nav;
		}
	}
		
	$(document).ready(function() {
		$("#row1").click(function() {
			current_name = $("#name1").text();
			$("#row1").css('background-color','#afff47');
			$("#row2").css('background-color','');
			// Set a callback to run when the Google Visualization API is loaded.
			google.charts.setOnLoadCallback(drawChart);
			$("#nav_chart").collapse();
		});
		$("#row2").click(function() {
			current_name = $("#name2").text();
			$("#row2").css('background-color','#afff47');
			$("#row1").css('background-color','');

			// Set a callback to run when the Google Visualization API is loaded.
			google.charts.setOnLoadCallback(drawChart);
			$("#nav_chart").collapse();
		})
		
	})
	
	function drawChart() {
		generateRandomData();
        var data = new google.visualization.DataTable();
		data.addColumn('string','Time');
        data.addColumn('number','NAV');
		data.addColumn('number','NAV');
		
		
		// Find the maxdrawdown and draw a new part of graph corresponding to it
		
		// maxDrawdown contains the maxdrawdown and the indexes of its start and end
		const maxDrawdown = PortfolioAnalytics.maxDrawdown(data_for_max_drawdown);
		console.log(maxDrawdown);
		console.log(data_array[maxDrawdown[1]][0]);
		console.log(data_array[maxDrawdown[2]][0]);
		
		let maxDrawdownData = [];
		for (let i=0; i<data_array.length; i++) {
			if (maxDrawdown[1] <= i && i <= maxDrawdown[2]) {
				maxDrawdownData[i] = data_array[i];
				data_array[i][2] = data_array[i][1];
			} else {
				maxDrawdownData[i] = null;
				data_array[i][2] = null;
			}
		}		
		
		data.addRows(data_array);
		
	//	console.log(data_array);
		  
		  
	/*	  ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]  */



        var chart = new google.visualization.LineChart(document.getElementById('nav_chart'));

		const maxDrawdownElement = document.getElementById('maxdrawdown');
		const maxDrawdownValue = (maxDrawdown[0]*100) .toFixed(2);
		maxDrawdownElement.innerHTML = 'Max Drawdown: ' + maxDrawdownValue+"%"
		
        var options = {
          title: 'NAV ' + current_name ,
          legend: { position: 'bottom' },
		  height: 500,
		  width: 900,
		  hAxis: {showTextEvery: 10},
		  series : {
			  1 : { visibleInLegend: false }
		  }
        };
		
		chart.draw(data, options);


		data_array = [];  // Delete previous values
		data_for_max_drawdown = [];
    }
	
/*	console.log(PortfolioAnalytics.drawdownFunction([1,100,90,95,80]).indexOf(PortfolioAnalytics.maxDrawdown([1,100,90,95,80])));
	console.log(PortfolioAnalytics.drawdownFunction([1,100,90,95,80]));
	console.log(PortfolioAnalytics.maxDrawdown([1,100,90,95,80]));
	console.log([1,100,90,95,80].indexOf(100));*/

	console.log(PortfolioAnalytics.maxDrawdown([1,100,90,95,80], 0, 4));
	