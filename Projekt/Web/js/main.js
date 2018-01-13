const projection = 'FULL';
const url = 'http://localhost:4001/';

const $testButton = $('#testId');
const $friendsListTable = $('#friendsListTable');

function test(){
	console.log('test function');

	const urlToRequest = url + 'friends';
	console.log('urlToRequest: ' + urlToRequest);
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json'
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			// $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
			
			for (var friend of xhr.response){
				console.log('friend: ' + friend)
				console.log('friend.name: ' + friend.name)
				$friendsListTable.append('<tr><td><a href="' +'#'+ '">' + friend.name + '</a></td><td>' + friend.name + '</td><td>Praca </td></tr>')
			}
		}
	}

	xhr.open('GET', urlToRequest);
	xhr.send();

}


function testClick() {
	test();
	// return false
}


$testButton.click(testClick);



// const xhr = new XMLHttpRequest();
// const url = 'https://api-to-call.com/endpoint';

// xhr.responseType = 'json';
// xhr.onreadystatechange = function(){
//   if (xhr.readyState === XMLHttpRequest.DONE) {
// 		console.log(xhr.response);
// 	}
// };

// xhr.open('GET', url);
// xhr.send();