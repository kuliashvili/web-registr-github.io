document.getElementById("header-back-button2").addEventListener("click", function() {
    window.location.href = "ganatleba4.html";
});


const notificationClose = document.getElementById("close");
const userNotification = document.getElementById("notification");
notificationClose.addEventListener("click", function() {
    notificationClose.style.display = "none";
    userNotification.style.display = "none";
});



// /////////////////////////////inputebis gamotana bologverdze-end–receptioninfo////////////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////name
// Get the div element
var div = document.getElementById("right-info-name");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name")) {
    div.innerHTML = sessionStorage.getItem("name");
}


// //////////////////////////////////////////////////////////////////////////////////////////surname
// Get the div element
var div1 = document.getElementById("right-info-surname");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name1")) {
    div1.innerHTML = sessionStorage.getItem("name1");
}

// //////////////////////////////////////////////////////////////////////////////////////////email
// Get the div element
var div2 = document.getElementById("right-info-email-item");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name2")) {
    div2.innerHTML = sessionStorage.getItem("name2");
}

// //////////////////////////////////////////////////////////////////////////////////////////mobile
// Get the div element
var div3 = document.getElementById("right-info-number-item");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name3")) {
    div3.innerHTML = sessionStorage.getItem("name3");
}

// //////////////////////////////////////////////////////////////////////////////////////////info
// Get the div element
var div4 = document.getElementById("right-info-texttt");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name4")) {
    div4.innerHTML = sessionStorage.getItem("name4");
}

// //////////////////////////////////////////////////////////////////////////////////////////position
// Get the div element
var div5 = document.getElementById("right-experience-jobs");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name5")) {
    div5.innerHTML = sessionStorage.getItem("name5");
}

// //////////////////////////////////////////////////////////////////////////////////////////place
// Get the div element
var div6 = document.getElementById("right-experience-place");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name6")) {
    div6.innerHTML = sessionStorage.getItem("name6");
}

// //////////////////////////////////////////////////////////////////////////////////////////startdate
// Get the div element
var div7 = document.getElementById("right-experience-data");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name7")) {
    div7.innerHTML = sessionStorage.getItem("name7");
}

// //////////////////////////////////////////////////////////////////////////////////////////enddate
// Get the div element
var div8 = document.getElementById("right-experience-data1");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name8")) {
    div8.innerHTML = sessionStorage.getItem("name8");
}

// //////////////////////////////////////////////////////////////////////////////////////////description
// Get the div element
var div9 = document.getElementById("right-experience-text");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name9")) {
    div9.innerHTML = sessionStorage.getItem("name9");
}

// //////////////////////////////////////////////////////////////////////////////////////////school
// Get the div element
var div10 = document.getElementById("right-knowledge-place");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name10")) {
    div10.innerHTML = sessionStorage.getItem("name10");
}

// //////////////////////////////////////////////////////////////////////////////////////////quality
// Get the div element
var div11 = document.getElementById("right-knowledge-quality1");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name11")) {
    div11.innerHTML = sessionStorage.getItem("name11");
}

// //////////////////////////////////////////////////////////////////////////////////////////school
// Get the div element
var div12 = document.getElementById("right-knowledge-date");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name12")) {
    div12.innerHTML = sessionStorage.getItem("name12");
}

// //////////////////////////////////////////////////////////////////////////////////////////text
// Get the div element
var div13 = document.getElementById("right-knowledge-text");

// Update the div text with the value from session storage, if it exists
if (sessionStorage.getItem("name13")) {
    div13.innerHTML = sessionStorage.getItem("name13");
}