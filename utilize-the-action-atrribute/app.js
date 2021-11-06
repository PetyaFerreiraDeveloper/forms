
// lets use the standard window object to grab our URL query sting
let queryString = window.location.search;

// let use the URLSearchParams API ()
let urlParams = new URLSearchParams(queryString);
let firstName = urlParams.get('fname');

// make the heading dynamic
let heading = document.getElementsByTagName('h1')[0];

heading.innerHTML = `Hello ${firstName}`;