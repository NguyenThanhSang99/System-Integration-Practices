function SubForm(){
    $.ajax({
        url:'http://localhost:19335/api/Personals/Create',
        type:'post',
        data:$('#emp').serialize(),
        success:function(){
        	window.location = '/AISSystem/notification?action=Create&result=success';
        },
    	error: function() {
    		window.location = '/AISSystem/notification?action=Create&result=failed';
		}
    });
}

function updateCombobox(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/BenefitPlans/Get',
        data: $('#benefit_plan_list').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
            if(data){
            	var s = document.getElementById("Benefit_Plans");
            	
                var len = data.length;
                var op = document.createElement("option");
                op.value = null;
                op.textContent = "";
         	   	s.appendChild(op);
                if(len > 0){
                	for(var i=0;i<len;i++){
                		var t = document.createElement("option");
                 	   	t.value = data[i].Benefit_Plan_ID;
                 	   	t.textContent = data[i].Plan_Name;
                 	   	s.appendChild(t);
                    } 
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ': can not get data from HR');
        }
    });
}

updateCombobox();