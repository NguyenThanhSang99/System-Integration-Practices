function getData(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/JobHistory/Get',
        data: $('#job_history_list').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
            if(data){
                var len = data.length;
                var txt = "";
                if(len > 0){
                	for(var i=0;i<len;i++){
        				txt += "<tr><td>"+data[i].Employee_ID
        				+"</td><td>"+(data[i].Personal.First_Name==null?"":data[i].Personal.First_Name)
                        +"</td><td>"+(data[i].Personal.Last_Name==null?"":data[i].Personal.Last_Name)
        				+"</td><td>"+(data[i].Department==null?"":data[i].Department)
                        +"</td><td>"+(data[i].Start_Date==null?"":data[i].Start_Date)
                        +"</td><td>"+(data[i].End_Date==null?"":data[i].Start_Date)
                        +"</td></tr>"                        
                    } 
                	if(txt != ""){
                        $("#table").append(txt).removeClass("hidden");
                    }
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ': can not get data from HR');
        }
    });
}
window.onload = function() {
	getData();
	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		animationEnabled: true,
		title: {
			text: "Time work of employee by month - 2019"
		},
		axisY: {
			title: "Price(Person/month)",
			includeZero: false
		},
		data: [{
			type: "rangeColumn",
			yValueFormatString: "##",
			xValueFormatString: "MMM YYYY",
			toolTipContent: "{x}<br>High: {y[0]}<br>Low: {y[1]}",
			dataPoints: [		
				{ x: new Date(2019, 0), y: [15, 40] },
				{ x: new Date(2019, 1), y: [30, 55] },
				{ x: new Date(2019, 2), y: [36, 42.54] },
				{ x: new Date(2019, 3), y: [37, 48] },
				{ x: new Date(2019, 4), y: [43, 50] },
				{ x: new Date(2019, 5), y: [46, 52] },
				{ x: new Date(2019, 6), y: [41, 50] },
				{ x: new Date(2019, 7), y: [41, 51] },
				{ x: new Date(2019, 8), y: [45, 50] },
				{ x: new Date(2019, 9), y: [47, 53] },
				{ x: new Date(2019, 10), y: [43, 50] },
				{ x: new Date(2019, 11), y: [51, 57] }
			]
		}]
	});
	chart.render();
}