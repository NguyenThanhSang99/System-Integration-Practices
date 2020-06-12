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