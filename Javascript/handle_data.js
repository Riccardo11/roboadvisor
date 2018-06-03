$(document).ready(function() {
	fetch('https://drive.google.com/open?id=1WUojttl6ZBkhwqPYanDJp0-DrOD3zzDT')
  .then(response => response.text())
  .then(text => console.log(text))
	/*
	dataSeries = $.csv.toArrays("Exon.csv");	
	console.log("exon.csv:");
	console.log(dataSeries);
	*/
})