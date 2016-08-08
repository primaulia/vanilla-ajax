var btn = document.getElementById('request');
var bio = document.getElementById('bio');
var url = "http://127.0.0.1:64845/node/day1/bio/bio.txt";

// 1. see what's targeted
// console.log(btn, bio);

var request = new XMLHttpRequest();

// 2. see what's under xhr object
// console.log(request);

// 3. see the changes on ready state properties
console.log('UNSENT', request.readyState); // readyState will be 0

request.open('GET', url, true);
console.log('OPENED', request.readyState); // readyState will be 1

request.onprogress = function () {
    console.log('LOADING', request.readyState); // readyState will be 3
};

request.onload = function () {
    console.log('DONE', request.readyState); // readyState will be 4
};

// 4. prepare the click event
btn.addEventListener('click', function() {
  // 5. prove the ajax is called
  // alert('click');

  // 11. hide the button
  this.style.display = 'none';

  // 6. send the request sync
  //   request.open('GET', url, false);
  //   request.send();

  //   if (request.status === 200) {
  //     console.log(request.responseText);
  //   }

  // 7. send the request async
  request.open('GET', url);
  request.send();
});

// 8. keep track changes using xhr onreadystatechange
request.onreadystatechange = function() {
  // 9. check if the response data send back to us
  console.log(request.readyState);


  if(request.readyState === 4) {
    // 10. apply changes once changes is ready

    // add a border
    bio.style.border = '1px solid #e8e8e8';
    // uncomment the line below to see the request
    // console.log(request);
    // check if the request is successful
    if(request.status === 200) {
      // update the HTML of the element
      bio.innerHTML = request.responseText;
    } else {
      // otherwise display an error message
      bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    }
  }
}
