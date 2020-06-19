function SubForm(){
	var list = [];
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals/Get',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){
        	list = data;
    }});
	setTimeout(() => {
		var id = document.getElementById("Employee_ID").value;
		if(id == '') {
			alert("Employee ID do not empty. Please enter ID!!!");
			return;
		}
    	document.getElementById("emp_id").value = id;
    	$.ajax({
            url:'http://localhost:19335/api/Personals/Create',
            type:'post',
            data:$('#emp').serialize(),
            success:function(result){
            	if(result === "success"){
            		var firstname = document.getElementById("First_Name").value;
                	var lastname = document.getElementById("Last_Name").value;
                	var ssn = document.getElementById("Social_Security_Number").value;
                	if(String(ssn)===""){
                		ssn = 0;
                	}
                	document.getElementById("firstname").value = firstname;
                	document.getElementById("lastname").value = lastname;
                	document.getElementById("ssn").value = ssn;
                	
                	document.getElementById("payrollForm").submit();
            	} else {
            		alert("Add employee failed. Please check information of employee. ID could exist!!!");
            	}
            },
        	error: function() {
        		alert("Add failed in HR. Server non available!!!");
    		}
        });
	}, 100);
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