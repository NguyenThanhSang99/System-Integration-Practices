function getData(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){
        	var tbl = document.getElementById('table');
        	
        	var row = tbl.rows.length - 1;
        	var dict = [];
        	for(var j = 0; j<=row; j++){
        		if(tbl.rows[j].cells[3].innerHTML){
        			dict.push(tbl.rows[j].cells[3].innerHTML);
        		}
        	}
            if(data){
                var len = data.length;
                var txt = "";
                for(var i=0;i<len;i++){
                	var r = dict.indexOf(data[i].Social_Security_Number);
                	var id_HR = data[i].Employee_ID;
                	var nameInHR = data[i].First_Name + " " + data[i].Last_Name;
                	var emp_HR = {
                			id: id_HR,
                    		firstName: data[i].First_Name,
                    		lastName: data[i].Last_Name,
                    		ssn: data[i].Social_Security_Number
                    }
                	if(r>=0){
                		var emp_Payroll = {
                    			id: tbl.rows[r].cells[0].innerHTML,
                        		firstName: tbl.rows[r].cells[1].innerHTML,
                        		lastName: tbl.rows[r].cells[2].innerHTML,
                        		ssn: tbl.rows[r].cells[3].innerHTML
                        }
                		var nameInPayroll = tbl.rows[r].cells[1].innerHTML + " " + tbl.rows[r].cells[2].innerHTML;
                		if(nameInHR !== nameInPayroll){
                			
                			var content = "Name in HR and Payroll conflict: " + nameInHR + " and " + nameInPayroll;
                			
                			var content1 = "Update in HR";
                			
                			var content2 = "Update in Payroll";
                			
                			addNotification(content, content1, content2, emp_HR, emp_Payroll);
                		}
                		dict.splice(r,1);
                	} else {
            			var content = "Employee " + nameInHR + " in HR but it don't exist in Payroll.";
            			
            			var content1 = "Add to Payroll";
            			
            			var content2 = "Delete in HR";
            			
            			addNotification(content, content1, content2, emp_HR, null);
                	}
                }
            }
            for(var j = 0; j < dict.length; j++){
            	var emp_Payroll = {
            			id: tbl.rows[j].cells[0].innerHTML,
                		firstName: tbl.rows[j].cells[1].innerHTML,
                		lastName: tbl.rows[j].cells[2].innerHTML,
                		ssn: tbl.rows[j].cells[3].innerHTML
                }
            	var nameInPayroll = tbl.rows[j].cells[1].innerHTML + " " + tbl.rows[j].cells[2].innerHTML;
        		
            	var id_Payroll = tbl.rows[j].cells[0].innerHTML;
            	
            	var content = "Employee " + nameInPayroll + " in Payroll but it don't exist in HR.";
    			
    			var content1 = "Add to HR";
    			
    			var content2 = "Delete in Payroll";
    			
    			addNotification(content, content1, content2, null, emp_Payroll);        
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ': can not get data from HR');
        }
    });
	
}

function addNotification(content, button_content_1, button_content_2, emp_HR, emp_Payroll){
	var div = document.getElementById("notification-list");
	var para = document.createElement("DIV");
	var btn1 = document.createElement("BUTTON");
	var btn2 = document.createElement("BUTTON");
	para.classList.add("notification-content");
	div.appendChild(para);
	if(button_content_1!==""){
		var sys1 = button_content_1.split(" ");
		para.innerHTML = content;
		btn1.classList.add("btn");
		btn1.classList.add(sys1[0]);
		btn1.innerHTML = button_content_1;
		btn1.addEventListener('click', function() {
			if(sys1[0] === "Add"){
				if(emp_HR!==null){
					window.location = "/AISSystem/createEmployeeToPayroll?firstName=" + emp_HR.firstName + "&lastName=" 
					+ emp_HR.lastName + "&ssn=" + emp_HR.ssn + "";
				}
				if(emp_Payroll!==null){
					alert("Add to HR");
				}
			} else if(sys1[0] === "Update") {
				alert(button_content_1 + (sys1.pop()==="HR"?emp_HR:emp_Payroll));
			} else {
				alert(button_content_1 + (sys1.pop()==="HR"?emp_HR:emp_Payroll));
			}
		    
		}, false);
		div.appendChild(btn1);
	}
	if(button_content_2!==""){
		var sys2 = button_content_2.split(" ");
		btn2.classList.add("btn");
		btn2.classList.add(sys2[0]);
		btn2.innerHTML = button_content_2;
		btn2.addEventListener('click', function() {
			if(sys2[0] === "Add"){
				if(emp_HR!==null){
					window.location = "/AISSystem/createEmployeeToPayroll?firstName=" + emp_HR.firstName + "&lastName=" 
					+ emp_HR.lastName + "&ssn=" + emp_HR.ssn + "";
				}
				if(emp_Payroll!==null){
					alert("Add to HR");
				}
			} else if(sys2[0] === "Update") {
				alert(button_content_1 + (sys2.pop()==="HR"?emp_HR:emp_Payroll));
			} else {
				alert(button_content_1 + (sys2.pop()==="HR"?emp_HR:emp_Payroll));
			}
		}, false);
		div.appendChild(btn2);
	}
}

window.onload = function() {
	getData();
}