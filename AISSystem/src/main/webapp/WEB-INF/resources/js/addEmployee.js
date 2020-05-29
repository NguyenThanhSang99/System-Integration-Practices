function SubForm(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals/Get',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){
        	var id=data.length+3;
        	document.getElementById("Employee_ID").value = id;
        	document.getElementById("emp_id").value = id;
        	$.ajax({
                url:'http://localhost:19335/api/Personals/Create',
                type:'post',
                data:$('#emp').serialize(),
                success:function(){
                	//window.location = '/AISSystem/notification?action=Create&result=success';
                	
                	var firstname = document.getElementById("First_Name").value;
                	var lastname = document.getElementById("Last_Name").value;
                	var ssn = document.getElementById("Social_Security_Number").value;
                	
                	document.getElementById("firstname").value = firstname;
                	document.getElementById("lastname").value = lastname;
                	document.getElementById("ssn").value = ssn;
                	
                	document.getElementById("payrollForm").submit();
                },
            	error: function() {
            		alert("Add failed")
        		}
            });
        }});
}