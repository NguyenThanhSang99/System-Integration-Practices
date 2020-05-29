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