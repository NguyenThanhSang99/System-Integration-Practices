function getData(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:19335/api/JobHistory',
        data: $('#job_history_list').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
            if(data){
                var len = data.length;
                var txt = "";
                if(len > 0){
                	for(var i=0;i<len;i++){
        				txt += "<tr><td>"+data[i].Employee_ID
        				+"</td><td>"+(data[i].Personal.First_Name==null?"":data[i].Personal.First_Name)
                        +"</td><td>"+(data[i].Personal.Last_Name==null?"":data[i].Personal.Last_Name)
        				+"</td><td>"+(data[i].Department==null?"":data[i].Department)
                        +"</td><td>"+(data[i].Start_Date==null?"":data[i].Start_Date)
                        +"</td><td>"+(data[i].End_Date==null?"":data[i].Start_Date)
                        +"</td></tr>"                        
                    } 
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
    var table = $('#table').DataTable();
    table.draw();
}
window.onload = function() {
	getData();
}