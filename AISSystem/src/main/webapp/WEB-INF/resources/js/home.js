let len = {value:0};
let share_holders = new Array();
let male_ratio = {value:0};
let female_ratio = {value: 0};
var value = 0;
function getData(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
        	var male = 0;
        	var female = 0;
        	var tbl = document.getElementById('table');
        	
        	var row = tbl.rows.length - 1;
        	var dict = [];
        	for(var j = 1; j<=row; j++){
        		dict.push(tbl.rows[j].cells[6].innerHTML);
        	}
            if(data){
                len.value = data.length;
                var txt = "";
                if(len.value > 0){
                    for(var i=0;i<len.value;i++){
                    	var c = dict.indexOf(data[i].Social_Security_Number);
                    	if(c>0){
                    		var r = c + 1;
                			tbl.rows[r].cells[0].innerHTML = (data[i].First_Name==null?"":data[i].First_Name);
                			tbl.rows[r].cells[1].innerHTML = (data[i].Last_Name==null?"":data[i].Last_Name);
                			tbl.rows[r].cells[2].innerHTML = (data[i].Address1==null?"":data[i].Address1);
                			tbl.rows[r].cells[3].innerHTML = (data[i].Address2==null?"":data[i].Address2);
                			tbl.rows[r].cells[4].innerHTML = (data[i].City==null?"":data[i].City);
                			tbl.rows[r].cells[5].innerHTML = (data[i].State==null?"":data[i].State);
                			tbl.rows[r].cells[6].innerHTML = (data[i].Social_Security_Number==null?"":data[i].Social_Security_Number);
                			tbl.rows[r].cells[7].innerHTML = (data[i].Email==null?"":data[i].Email);
                			tbl.rows[r].cells[8].innerHTML = (data[i].Phone_Number==null?"":data[i].Phone_Number);
                			tbl.rows[r].cells[9].innerHTML = (data[i].Gender==true?"Male":"Female");
                    		row--;
                    	} else {
                    		txt += "<tr><td>"+(data[i].First_Name==null?"":data[i].First_Name)
                            +"</td><td>"+(data[i].Last_Name==null?"":data[i].Last_Name)
                            +"</td><td>"+(data[i].Address1==null?"":data[i].Address1)
                            +"</td><td>"+(data[i].Address2==null?"":data[i].Address2)
                            +"</td><td>"+(data[i].City==null?"":data[i].City)
                            +"</td><td>"+(data[i].State==null?"":data[i].State)
                            +"</td><td>"+(data[i].Social_Security_Number==null?"":data[i].Social_Security_Number)
                            +"</td><td>"+(data[i].Email==null?"":data[i].Email)
                            +"</td><td>"+(data[i].Phone_Number==null?"":data[i].Phone_Number)
                            +"</td><td>"+(data[i].Gender==true?"Male":"Female")
                            +"</td></tr>";
                    	}
                        if(data[i].Gender==true){
                        	male++;
                        } else {
                        	female++;
                        }
                        
                        if(data[i].Shareholder_Status == true){
                        	let share_holder = {
                        			label: data.Last_Name,
                        			y: value += 80-i*3
                        	}
                        	share_holders.push(share_holder)
                        }
                    }                    
                    
                    male_ratio.value = male*100/(len.value + row);  
                    female_ratio.value = female*100/(len.value + row);
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
					{y: female_ratio.value, label: "Female: "},
					{y: 100-male_ratio.value-female_ratio.value, label: "No Info: "}
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