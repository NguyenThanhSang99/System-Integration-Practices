function getData(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/BenefitPlans',
        data: $('#benefit_plan_list').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
            if(data){
                var len = data.length;
                var txt = "";
                if(len > 0){
                	for(var i=0;i<len;i++){
        				txt += "<tr><td>"+(data[i].Plan_Name==null?"":data[i].Plan_Name)
                        +"</td><td>"+(data[i].Deductable==null?"":data[i].Deductable)
        				+"</td><td>"+(data[i].Percentage_CoPay==null?"":data[i].Percentage_CoPay)
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

window.onload = function () {
	getData();
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title: {
			text: "Benefit of Department in a Company"
		},
		axisX: {
			title: "Departments"
		},
		axisY: {
			includeZero: false,
			title: "Salary in USD",
			interval: 10,
			suffix: "k",
			prefix: "$"
		}, 
		data: [{
			type: "rangeBar",
			showInLegend: true,
			yValueFormatString: "$#0.#K",
			indexLabel: "{y[#index]}",
			legendText: "Department wise Min and Max Salary",
			toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
			dataPoints: [
				{ x: 10, y:[80, 115], label: "Data Scientist" },
				{ x: 20, y:[95, 141], label: "Product Manager" },
				{ x: 30, y:[98, 115], label: "Web Developer" },
				{ x: 40, y:[90, 160], label: "Software Engineer" },
				{ x: 50, y:[100,152], label: "Quality Assurance" }
			]
		}]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainer2",
	    {
	        animationEnabled: true,
	        title: {
	            text: "Benefits over time 2019"
	        },
	        axisX: {
	            valueFormatString: "MMM",
	            interval: 1,
	            intervalType: "month"
	        },
	        axisY: {
	            includeZero: false
	        },
	        data: [
	        {
	          type: "line",
	          dataPoints: [
	              { x: new Date(2019, 00, 1), y: 450 },
	              { x: new Date(2019, 01, 1), y: 414 },
	              { x: new Date(2019, 02, 1), y: 520, indexLabel: "highest", markerColor: "red", markerType: "triangle" },
	              { x: new Date(2019, 03, 1), y: 460 },
	              { x: new Date(2019, 04, 1), y: 450 },
	              { x: new Date(2019, 05, 1), y: 500 },
	              { x: new Date(2019, 06, 1), y: 480 },
	              { x: new Date(2019, 07, 1), y: 480 },
	              { x: new Date(2019, 08, 1), y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
	              { x: new Date(2019, 09, 1), y: 500 },
	              { x: new Date(2019, 10, 1), y: 480 },
	              { x: new Date(2019, 11, 1), y: 510 }
	            ]
	        }
	        ]
	    });
	chart.render();
}