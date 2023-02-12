document.getElementById("header-back-button2").addEventListener("click", function() {
    window.location.href = "index.html";
});


document.getElementById("page2next").addEventListener("click", function() {
    window.location.href = "experience3.html";
});




const userName = document.getElementById("name-input");
const userNameHeader = document.getElementById("name-header");
const userNameDone = document.getElementById("done");
userName.addEventListener("input", function() {
    if (!/[ა-ჰ]{2,}/.test(userName.value)) {
        userName.style.borderColor = "#EF5050";
        userNameDone.style.display = "none";
        userNameHeader.style.color = "#EF5050"


    } else {
        userName.style.borderColor = "#98E37E";
        userNameDone.style.display = "flex";
        userNameHeader.style.color = ""

    }
});


const userSurname = document.getElementById("surname-input");
const userSurnameHeader = document.getElementById("surname-header");
const userSurnameDone = document.getElementById("done1");
userSurname.addEventListener("input", function() {
    if (!/[ა-ჰ]{2,}/.test(userSurname.value)) {
        userSurname.style.borderColor = "#EF5050";
        userSurnameDone.style.display = "none";
        userSurnameHeader.style.color = "#EF5050"
    } else {
        userSurname.style.borderColor = "#98E37E";
        userSurnameDone.style.display = "flex";
        userSurnameHeader.style.color = ""


    }
});


// mailsuratis gamochena
const userMail = document.getElementById("mail-input");
const img = document.getElementById("right-info-email-img");
userMail.addEventListener("input", function() {
    if (userMail.value.length > 0) {
        img.style.display = "flex";

    } else {
        img.style.display = "none";

    }
});


// numbersuratis gamochena
const userMobile = document.getElementById("mobile-input");

const NumberImg = document.getElementById("right-info-number-img");
userMobile.addEventListener("input", function() {
    if (userMobile.value.length > 0) {
        NumberImg.style.display = "flex";


    } else {
        NumberImg.style.display = "none";


    }
});

var inputs = document.getElementsByClassName("1");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        localStorage.setItem("inputValue" + this.id, this.value);
    });
}


const userInfoHeader = document.getElementById("right-info-header");
const userTextarea = document.getElementById("aboutme-textarea");
const userInfoLine = document.getElementById("right-info-img");

userTextarea.addEventListener("input", function() {
    if (userTextarea.value.length > 0) {
        userInfoHeader.style.display = "flex";
        userInfoLine.style.display = "flex";
        userTextarea.style.borderColor = "#98E37E";



    } else {
        userInfoHeader.style.display = "none";
        userInfoLine.style.display = "none";
        userTextarea.style.borderColor = "";

    }
});






const userMailHeader = document.getElementById("mail-text");
const userMailDone = document.getElementById("done2");
const userMailunDone = document.getElementById("undone");
userMail.addEventListener("input", function() {
    if (!/@redberry\.ge$/.test(userMail.value)) {
        userMail.style.borderColor = "#EF5050";
        userMailDone.style.display = "none";
        userMailunDone.style.display = "flex";
        userMailHeader.style.color = "#EF5050"
    } else {
        userMail.style.borderColor = "#98E37E";
        userMailDone.style.display = "flex";
        userMailunDone.style.display = "none";
        userMailHeader.style.color = ""




    }
});



const userMobileHeader = document.getElementById("mobile-text");
const userMobileDone = document.getElementById("done3");
const userMobileunDone = document.getElementById("undone1");


userMobile.addEventListener("input", function() {
    if (!/^\d{9}$/.test(userMobile.value)) {
        userMobile.style.borderColor = "#EF5050";
        userMobileDone.style.display = "none";
        userMobileunDone.style.display = "flex";
        userMobileHeader.style.color = "#EF5050";
    } else {
        userMobile.style.borderColor = "#98E37E";
        userMobileDone.style.display = "flex";
        userMobileunDone.style.display = "none";
        userMobileHeader.style.color = "";


    }
});








var inputs = document.getElementsByClassName("1");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        localStorage.setItem("inputValue" + this.id, this.value);
    });
}

// retrieving დათა ლოქალ სთორეიჯიდან
document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.getElementsByClassName("1");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = localStorage.getItem("inputValue" + inputs[i].id) || "";
    }
});



// ////////////////////////////////////////////IMAGE//////////////////////////////////////////////////////////////////

document.getElementById("id-button1").addEventListener("click", function() {
    document.getElementById("userimage").style.display = "block";
});



// Get the button and image elements
const uploadButton = document.getElementById("id-button1");
const userImage = document.getElementById("userimage");
const userImage99 = document.getElementById("damatebiti");

// Add a click event listener to the button
uploadButton.addEventListener("click", function() {
    // Create a file input element
    const fileInput = document.createElement("input");
    fileInput.type = "file";

    // Add a change event listener to the file input
    fileInput.addEventListener("change", function() {
        // Get the selected file
        const file = fileInput.files[0];

        // Create a URL object for the file
        const url = URL.createObjectURL(file);

        // Set the image src to the URL
        userImage.src = url;
        userImage99.src = url;
    });

    // Trigger the file input to open
    fileInput.click();
});









// //////////////////////inputebis gamotana bologverdze2-start–pickupinfo////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////name
// Get the input element
var input = document.getElementById("name-input");

// Listen for changes to the input value
input.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name", input.value);
});


// //////////////////////////////////////////////////////////////////////////////////////////surname
// Get the input element
var input1 = document.getElementById("surname-input");

// Listen for changes to the input value
input1.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name1", input1.value);
});


// //////////////////////////////////////////////////////////////////////////////////////////email
// Get the input element
var input2 = document.getElementById("mail-input");

// Listen for changes to the input value
input2.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name2", input2.value);
});


// //////////////////////////////////////////////////////////////////////////////////////////mobile
// Get the input element
var input3 = document.getElementById("mobile-input");

// Listen for changes to the input value
input3.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name3", input3.value);
});


// //////////////////////////////////////////////////////////////////////////////////////////info
// Get the input element
var input4 = document.getElementById("aboutme-textarea");

// Listen for changes to the input value
input4.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name4", input4.value);
});




// ////////////////////////////////////////////////////////////////////////"შემდეგი" ბუტონმა იმუშაოს თუ ინპუტები იქნება შეყვანილი////////////////////////////////////////////////////////////////
// Get references to all the form fields


// const userName = document.getElementById("name-input");
// const userSurname = document.getElementById("surname-input");
// var input2 = document.getElementById("mail-input");
// const userMobile = document.getElementById("mobile-input");

// Get a reference to the submit button
let submitButton = document.getElementById("page2next");

// Disable the submit button by default
submitButton.disabled = true;

// Listen for changes to the form fields
userName.addEventListener("input", checkForm);
userSurname.addEventListener("input", checkForm);
input2.addEventListener("input", checkForm);
userMobile.addEventListener("input", checkForm);

// Define a function to check the form
function checkForm() {
    // Check if all the form fields are filled
    if (userName.value && userSurname.value && input2.value && userMobile.value) {
        // If all the form fields are filled, enable the submit button
        submitButton.disabled = false;
    } else {
        // If one of the form fields is empty, disable the submit button
        submitButton.disabled = true;
    }
}




// ////