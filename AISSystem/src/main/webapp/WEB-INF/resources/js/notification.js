function getData(){
	$.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/Personals/Get',
        data: $('#personals').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){
        	var tbl = document.getElementById('table');
        	
        	var row = tbl.rows.length - 1;
        	var dict = [];
        	var dict_check = [];
        	for(var j = 0; j<=row; j++){
        		if(tbl.rows[j].cells[4].innerHTML){
        			dict.push(tbl.rows[j].cells[4].innerHTML);
        		}
        	}
            if(data){
                var len = data.length;
                var txt = "";
                for(var i=0;i<len;i++){
                	var r = dict.indexOf(String(data[i].Employee_ID));
                	var id_HR = data[i].Employee_ID;
                	var nameInHR = (data[i].First_Name===null?"":data[i].First_Name) + " " + (data[i].Last_Name===null?"":data[i].Last_Name);
                	var emp_HR = {
                			id: id_HR,
                    		firstName: data[i].First_Name,
                    		lastName: data[i].Last_Name,
                    		ssn: data[i].Social_Security_Number
                    }
                	if(r>=0){
                		var emp_Payroll = {
                			employeeNumber: tbl.rows[r].cells[0].innerHTML,
                    		firstName: (String(tbl.rows[r].cells[1].innerHTML)!=='null'?tbl.rows[r].cells[1].innerHTML:""),
                    		lastName: (String(tbl.rows[r].cells[2].innerHTML)!=='null'?tbl.rows[r].cells[2].innerHTML:""),
                    		ssn: tbl.rows[r].cells[3].innerHTML,
                    		id: tbl.rows[r].cells[4].innerHTML
                        }
                		var nameInPayroll = emp_Payroll.firstName + " " + emp_Payroll.lastName;
                		var content1 = "Update in HR";
            			var content2 = "Update in Payroll";
                		if(nameInHR !== nameInPayroll){
                			var content = "Name of an employee in HR and Payroll conflict: " + nameInHR + " and " + nameInPayroll;
                			
                			addNotification(content, content1, content2, emp_HR, emp_Payroll);
                		} else if(emp_HR.ssn !== emp_Payroll.ssn && emp_Payroll.ssn !== '0'){
                			var content = "Social Security Number of an employee in HR and Payroll conflict: " + nameInHR;
                			
                			addNotification(content, content1, content2, emp_HR, emp_Payroll);
                		}
                		dict_check.push(dict[r]);
                	} else {
            			var content = "Employee " + nameInHR + " in HR but it don't exist in Payroll.";
            			
            			var content1 = "Add to Payroll";
            			
            			var content2 = "Delete in HR";
            			
            			addNotification(content, content1, content2, emp_HR, null);
                	}
                }
            }
            for(var j = 0; j < dict.length; j++){
            	if(dict_check.indexOf(dict[j])<0){
            		var emp_Payroll = {
                			employeeNumber: tbl.rows[j].cells[0].innerHTML,
                    		firstName: tbl.rows[j].cells[1].innerHTML,
                    		lastName: tbl.rows[j].cells[2].innerHTML,
                    		ssn: tbl.rows[j].cells[3].innerHTML,
                    		id: tbl.rows[j].cells[4].innerHTML
                    }
                	var nameInPayroll = tbl.rows[j].cells[1].innerHTML + " " + tbl.rows[j].cells[2].innerHTML;
            		
                	var id_Payroll = tbl.rows[j].cells[0].innerHTML;
                	
                	var content = "Employee " + nameInPayroll + " in Payroll but it don't exist in HR.";
        			
        			var content1 = "Add to HR";
        			
        			var content2 = "Delete in Payroll";
        			
        			addNotification(content, content1, content2, null, emp_Payroll);
            	}    
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
			var department1 = sys1[2];
			if(sys1[0] === "Add"){
				if(emp_HR!==null && department1 === "Payroll"){
					var emp_post = {
							id: emp_HR.id,
							firstName: emp_HR.firstName,
							lastName: emp_HR.lastName,
							ssn: emp_HR.ssn
					}
					postAndRedirect("/AISSystem/createPayrollEmployee", emp_post);
				}
				if(emp_Payroll!==null && department1 === "HR"){
					var emp_post = {
							id: emp_Payroll.id,
							firstName: emp_Payroll.firstName,
							lastName: emp_Payroll.lastName,
							ssn: emp_Payroll.ssn
					}
					postAndRedirect("/AISSystem/createHRPersonal", emp_post);
				}
			} else if(sys1[0] === "Update") {
				if(emp_Payroll!==null && department1 === "Payroll"){
					var emp_post = {
							employeeNumber: emp_Payroll.employeeNumber
					}
					postAndRedirect("/AISSystem/updatePayrollEmployee", emp_post);
				}
				if(emp_HR!==null && department1 === "HR"){
					alert("Please go to Employee tab to update!!!");
				}
			} else {
				if(emp_Payroll!==null && department1 === "Payroll"){
					var emp_post = {
							employeeNumber: emp_Payroll.employeeNumber
					}
					postAndRedirect("/AISSystem/deletePayrollEmployee", emp_post);
				}
				if(emp_HR!==null && department1 === "HR"){
					deleteEmployeeHR(emp_HR.id);
				}
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
			var department2 = sys2[2];
			if(sys2[0] === "Add"){
				if(emp_HR!==null && department2 === "Payroll"){
					addEmployee("/AISSystem/createPayrollEmployee", emp_HR);
				}
				if(emp_Payroll!==null && department2 === "HR"){
					var emp_post = {
							firstName: emp_Payroll.firstName,
							lastName: emp_Payroll.lastName,
							ssn: emp_Payroll.ssn
					}
					postAndRedirect("/AISSystem/createHRPersonal", emp_post);
				}
			} else if(sys2[0] === "Update") {
				if(emp_Payroll!==null && department2 === "Payroll"){
					var emp_post = {
							employeeNumber: emp_Payroll.employeeNumber
					}
					postAndRedirect("/AISSystem/updatePayrollEmployee", emp_post);
				}
				if(emp_HR!==null && department2 === "HR"){
					alert("Please go to Employee tab to update!!!");
				}
			} else {
				if(emp_Payroll!==null && department2 === "Payroll"){
					var emp_post = {
							employeeNumber: emp_Payroll.employeeNumber
					}
					postAndRedirect("/AISSystem/deletePayrollEmployee", emp_post);
				}
				if(emp_HR!==null && department2 === "HR"){
					deleteEmployeeHR(emp_HR.id);
				}
			}
		}, false);
		div.appendChild(btn2);
	}
}

function postAndRedirect(url, postData){
    var postFormStr = "<form method='POST' action='" + url + "'>\n";

    for (var key in postData){
        if (postData.hasOwnProperty(key)){
            postFormStr += "<input type='hidden' name='" + key + "' value='" + postData[key] + "'></input>";
        }
    }

    postFormStr += "</form>";

    var formElement = $(postFormStr);

    $('body').append(formElement);
    $(formElement).submit();
}

function addEmployee(url, emp){
	var emp_post = {
			id: emp.id,
			firstName: emp.firstName,
			lastName: emp.lastName,
			ssn: emp.ssn
	}
	postAndRedirect(url, emp_post);
}

function deleteEmployeeHR(id){
	var requestOptions = {
			  method: 'POST',
			  redirect: 'follow'
			};
			var url = "http://localhost:19335/api/Personals/Delete?id=" + id;
			fetch(url, requestOptions)
			  .then(response => response.text())
			  .then(result => function(){window.location = '/AISSystem/notification?action=Delete&result=' + result;})
			  .catch(error => console.log('error', error));
}

window.onload = function() {
	getData();
}