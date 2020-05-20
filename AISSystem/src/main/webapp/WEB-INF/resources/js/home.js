function getData(){
	const url = "http://localhost:8080/springapp/api/v1/user";
	fetch(url, { mode: 'no-cors'})
	  .then(blob => blob.json())
	  .then(data => {
	    console.table(data);
	    return data;
	  })
	  .catch(e => {
	    console.log(e);
	    return e;
	  });
}
getData();