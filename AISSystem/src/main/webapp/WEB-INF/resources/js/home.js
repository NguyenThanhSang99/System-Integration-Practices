var male = 0;
var len = 0;
var male_ratio = 0;
function getData(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
            if(data){
                len = data.length;
                var txt = "";
                if(len > 0){
                    for(var i=0;i<len;i++){
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
                    }
                    male_ratio = male*100/len;
                    
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
getData();

window.onload = function() {

	var chart = new CanvasJS.Chart("chartContainer", {
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
				{y: male_ratio, label: "Male: "},
				{y: 100-male_ratio, label: "Female: "}
			]
		}]
	});
	chart.render();

}