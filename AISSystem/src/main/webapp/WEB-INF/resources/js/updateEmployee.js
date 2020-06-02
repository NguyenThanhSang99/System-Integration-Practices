function SubForm(){
	var ssn = document.getElementById("Social_Security_Number").value;
	if(ssn == ""){
		alert("Please enter Social Security Number of employee!!!");
		return;
	}
	setTimeout(() => {
    	$.ajax({
            url:'http://localhost:19335/api/Personals/Update',
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
        		alert("Update failed")
    		}
        });
	}, 100);
}

function getData(id){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals/Details/' + id,
        data: $('#personal').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){
            if(data){
            	document.getElementById("First_Name").value = (data.First_Name==null?"":data.First_Name);
            	document.getElementById("Last_Name").value = (data.Last_Name==null?"":data.Last_Name);
            	document.getElementById("Middle_Initial").value = (data.Middle_Initial==null?"":data.Middle_Initial);
            	document.getElementById("Address1").value = (data.Address1==null?"":data.Address1);
            	document.getElementById("Address2").value = (data.Address2==null?"":data.Address2);
            	document.getElementById("City").value = (data.City==null?"":data.City);
            	document.getElementById("State").value = (data.State==null?"":data.State);
            	document.getElementById("Zip").value = (data.Zip==null?"":data.Zip);
            	document.getElementById("Email").value = (data.Email==null?"":data.Email);
            	document.getElementById("Phone_Number").value = (data.Phone_Number==null?"":data.Phone_Number);
            	document.getElementById("Social_Security_Number").value = (data.Social_Security_Number==null?"":data.Social_Security_Number);
            	document.getElementById("Drivers_License").value = (data.Drivers_License==null?"":data.Drivers_License);
            	document.getElementById("Marital_Status").value = (data.Marital_Status==null?"":data.Marital_Status);
            	document.getElementById("Gender").value = data.Gender;
            	document.getElementById("Shareholder_Status").value = data.Shareholder_Status;
            	document.getElementById("Benefit_Plans").value = (data.Benefit_Plans==null?"":data.Benefit_Plans);
            	document.getElementById("Ethnicity").value = (data.Ethnicity==null?"":data.Ethnicity);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: can not get data from HR');
        }
    });
	
}

window.onload = function() {
	var id = document.getElementById("Employee_ID").value;
	getData(id);
}