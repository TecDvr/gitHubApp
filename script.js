'use strict';

function getUserInfo() {
    let userName = $('#jsSearchName').val();
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(responseJson => displayRepos(responseJson))
    .catch(error => {
      alert('Please Enter Username');
    });
};

function displayRepos(responseJson) {
  console.log(responseJson);
  $('#resultsList').empty();
  responseJson.forEach(function (item, i) {
    $('#resultsList').append(`
  <li>
    <h3>${responseJson[i].name}</h3>
    <p><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></p>
  </li>
  `);
  });
};

function watchSubmit () {
    $('form').submit(function(event) {
        event.preventDefault();
        getUserInfo();

    });
};

function runThisBadBoy () {
    watchSubmit();
};

$(runThisBadBoy);

