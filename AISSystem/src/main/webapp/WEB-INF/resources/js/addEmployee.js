function SubForm(){
	var list = [];
	var ssn = document.getElementById("Social_Security_Number").value;
	if(ssn == ""){
		alert("Please enter Social Security Number of employee!!!");
		return;
	}
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals/Get',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){
        	list = data;
        }});
	setTimeout(() => {
		var id = list[list.length-1].Employee_ID+1;
    	document.getElementById("Employee_ID").value = id;
    	document.getElementById("emp_id").value = id;
    	$.ajax({
            url:'http://localhost:19335/api/Personals/Create',
            type:'post',
            data:$('#emp').serialize(),
            success:function(){
            	var firstname = document.getElementById("First_Name").value;
            	var lastname = document.getElementById("Last_Name").value;
            	
            	
            	document.getElementById("firstname").value = firstname;
            	document.getElementById("lastname").value = lastname;
            	document.getElementById("ssn").value = ssn;
            	
            	document.getElementById("payrollForm").submit();
            },
        	error: function() {
        		alert("Add failed")
    		}
        });
	}, 100);
}