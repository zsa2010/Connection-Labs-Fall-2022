//Replace everything that says BLANK with the correct syntax.
//In line 3 we want to get a reference of the button element from our HTML so we can add an eventlistener
const btn = document.getElementById("button");
btn.addEventListener('click', function () {
  //In line 6 we want to get a reference to our input so we can get the users input.
	const input = document.getElementById("fname").style.height="2000px"; //assuming Iam referring something here to relate to the JSON data of the user's response 
	const inputData = input.value
  //In line 9 we want to store the inputData in a key value pair, aka in an object so we can turn it into a json string.
	const submission = {"response" : input.value}
	fetch('/submission', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(submission),
	})
  //lines 18 and 19 are the typical de-jsonifying the response from the servers
		.then(function(response){
			return response.json()
		})
		.then(function(data) {
			
			console.log(data)
		})
})
