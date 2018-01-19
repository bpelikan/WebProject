const projection = 'FULL';
const url = 'http://localhost:4001/';

const $testButton = $('#testId');
const $friendsListTable = $('#friendsListTable');
const $friendsDetailsLink = $('.friendsDetailsLink');

const $listDiv = $('#workingDiv');
const $listDivNested = $('#workingDiv div');
const $listGroups = $('#categories');
const $listGroupsNested = $('#categories a');


function loadUsers(){
	console.log('loadUsers() function');
	const urlToRequest = url + 'friends';
	console.log('urlToRequest: ' + urlToRequest);
	
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			for (var friend of xhr.response){
				console.log('friend.id: ' + friend.id);
				//$friendsListTable.append('<tr friendId="' + friend.id + '"><td><a  href="' + url +'friend/'+ friend.id +'">' + friend.firstName + '</a></td><td>' + friend.phoneNumber + '</td><td>'+ friend.group +' </td></tr>')
				$friendsListTable.append('<tr friendId="'+friend.id+'"><td><a class="friendsDetailsLink" href="#" onClick = "showDetailsClick('+friend.id+');">' + friend.firstName + '</a></td><td>' + friend.phoneNumber + '</td><td>'+ friend.group +' </td></tr>');
			}
		}
	}

	xhr.open('GET', urlToRequest);
	xhr.send();
}

function showUserDetail(id){
	console.log('showUserDetail('+id+') function, id: ' + id);
	const urlToRequest = url + 'friends/' + id;
	console.log('urlToRequest: ' + urlToRequest);

	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json'
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			let friend = xhr.response;
			console.log('friend.id: ' + friend.id)
			
			$listDivNested.remove();
			$listDiv.append('<h2>Szczegóły</h2>');
			$listDiv.append('<div class="panel-body"><dl id="userDetailList" class="dl-horizontal well"></dl></div>');
			$listDiv.append('<a class="btn btn-block btn-default btn-lg" href="/Friends/List?page=1">Wr&#243;ć</a></div></div>');
			
			for (property in friend)
			{
				if (friend.hasOwnProperty(property)) {
					$('#userDetailList').append('<dt>'+property+':</dt><dd>'+friend[property]+'</dd>');
				}
			}
		}
	}

	xhr.open('GET', urlToRequest);
	xhr.send();
}


function showUserGroups(){
	console.log('showUserGroups() function');
	const urlToRequest = url + 'friends/groups';
	console.log('urlToRequest: ' + urlToRequest);

	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json'
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			let friendsGroups = xhr.response;
			friendsGroups.sort(function(a, b){
				if(a.toUpperCase() < b.toUpperCase()) return -1;
				if(a.toUpperCase() > b.toUpperCase()) return 1;
				return 0;
			})

			$listGroupsNested.remove();
			$listGroups.append('<a class="btn btn-block btn-default btn-lg" href="/">Wszyscy</a>');

			for (index in friendsGroups)
			{
				$listGroups.append('<a class="btn btn-block btn-default btn-lg" href="/">' + friendsGroups[index] + '</a>');
			}
		}
	}

	xhr.open('GET', urlToRequest);
	xhr.send();
}


function testClick() {
	loadUsers();
}

function showDetailsClick(id) {
	console.log('showDetails('+id+') function');
	showUserDetail(id);
}


$( document ).ready(function() {
	showUserGroups();
	loadUsers();
});

$testButton.click(testClick);
$friendsDetailsLink.click(showDetailsClick);