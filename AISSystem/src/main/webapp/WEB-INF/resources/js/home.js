let len = {value:0};
let share_holders = new Array();
let male_ratio = {value:0};
var value = 0;
function getData(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
        	var male = 0;
            if(data){
                len.value = data.length;
                var txt = "";
                if(len.value > 0){
                    for(var i=0;i<len.value;i++){
                        txt += "<tr><td>"+data[i].Employee_ID
                        +"</td><td>"+(data[i].First_Name==null?"":data[i].First_Name)
                        +"</td><td>"+(data[i].Last_Name==null?"":data[i].Last_Name)
                        +"</td><td>"+(data[i].Middle_Initial==null?"":data[i].Middle_Initial)
                        +"</td><td>"+(data[i].Address1==null?"":data[i].Address1)
                        +"</td><td>"+(data[i].Address2==null?"":data[i].Address2)
                        +"</td><td>"+(data[i].City==null?"":data[i].City)
                        +"</td><td>"+(data[i].State==null?"":data[i].State)
                        +"</td><td>"+(data[i].Zip==null?"":data[i].Zip)
                        +"</td><td>"+(data[i].Email==null?"":data[i].Email)
                        +"</td><td>"+(data[i].Phone_Number==null?"":data[i].Phone_Number)
                        +"</td><td>"+(data[i].Gender==true?"Male":"Female")
                        +"</td></tr>";
                        if(data[i].Gender==true){
                        	male++;
                        }
                        
                        if(data[i].Shareholder_Status == true){
                        	let share_holder = {
                        			label: data.First_Name  + data.Last_Name,
                        			y: value += 80-i*3
                        	}
                        	share_holders.push(share_holder)
                        }
                    }
                    male_ratio.value = male*100/len.value;  
                    if(txt != ""){
                        $("#table").append(txt).removeClass("hidden");
                    }
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
    });
}
window.onload = function() {
	getData();
	setTimeout(function() {
		var chart = new CanvasJS.Chart("chartContainer2", {
			animationEnabled: true,
			title: {
				text: "Employee Gender Chart"
			},
			data: [{
				type: "pie",
				startAngle: 240,
				yValueFormatString: "##0.00\"%\"",
				indexLabel: "{label} {y}",
				dataPoints: [
					{y: male_ratio.value, label: "Male: "},
					{y: 100-male_ratio.value, label: "Female: "}
				]
			}]
		});chart.render();}, 200);
	setTimeout(function() {
		var chart = new CanvasJS.Chart("chartContainer1", {
			title:{
				text: "Total Earning by Shareholder"              
			},
			data: [              
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				indexLabel: "{label} {y}",
				dataPoints: share_holders
			}
			]
		});
		chart.render();}, 200);
}