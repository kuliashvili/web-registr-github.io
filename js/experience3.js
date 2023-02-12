document.getElementById("header-back-button2").addEventListener("click", function() {
    window.location.href = "index.html";
});


document.getElementById("page3back").addEventListener("click", function() {
    window.location.href = "personal-info2.html";
});


document.getElementById("page3next").addEventListener("click", function() {
    window.location.href = "education4.html";
});



// $(function() {
//     $("#datepicker").datepicker();
// });

// $(function() {
//     $("#datepicker1").datepicker();
// });

// $(function() {
//     $("#datepickerq").datepicker();
// });

// $(function() {
//     $("#datepicker1q").datepicker();
// });


const userText = document.getElementById("description-textarea");
userText.addEventListener("input", function() {
    if (userText.value.length > 0) {
        userText.style.borderColor = "#98E37E";
    } else {
        userText.style.borderColor = "";
    }
});

document.getElementById("addexperience").addEventListener("click", function() {
    document.getElementById("addmore").style.display = "block";
    document.body.style.overflow = "scroll";
    document.getElementById("page3next").style.top = "1594px";
    document.getElementById("page3back").style.top = "1594px";
    document.getElementById("addexperience").style.top = "1435px";
});


const userPosition = document.getElementById("position-item-input");
const userPositionHeader = document.getElementById("position-item-header");
const userDone = document.getElementById("done");
userPosition.addEventListener("input", function() {
    if (!/[a-zA-Zა-ჰ]{2,}/.test(userPosition.value)) {
        userPosition.style.borderColor = "#EF5050";
        userDone.style.display = "none";
        userPositionHeader.style.color = "#EF5050"
    } else {
        userPosition.style.borderColor = "#98E37E";
        userDone.style.display = "flex";
        userPositionHeader.style.color = ""
    }
});


const userEmployer = document.getElementById("employer-input");
const userEmployerHeader = document.getElementById("employer-header");
const userDone1 = document.getElementById("done1");
userEmployer.addEventListener("input", function() {
    if (!/[a-zA-Zა-ჰ]{2,}/.test(userEmployer.value)) {
        userEmployer.style.borderColor = "#EF5050";
        userDone1.style.display = "none";
        userEmployerHeader.style.color = "#EF5050";
    } else {
        userEmployer.style.borderColor = "#98E37E";
        userDone1.style.display = "flex";
        userEmployerHeader.style.color = "";
    }
});


// const userStartDate = document.getElementById("datepicker");
// const userStartDateHeader = document.getElementById("start");
// userStartDate.addEventListener("input", function() {
//     if (!/^\d{3}$/.test(userStartDate.value)) {
//         userStartDate.style.borderColor = "#EF5050";
//         userStartDateHeader.style.color = "#EF5050";
//     } else {
//         userStartDate.style.borderColor = "#98E37E";
//         userStartDateHeader.style.color = "";

//     }

//     const userEndDate = document.getElementById("datepicker1");
//     userEndDate.addEventListener("input", function() {
//         if (!/^\d{10,}$/.test(userEndDate.value)) {
//             userEndDate.style.borderColor = "#EF5050";
//         } else {
//             userEndDate.style.borderColor = "#98E37E";
//         }
//     });


// });


// document.getElementById("datepicker").addEventListener("input", function() {
//     this.style.borderColor = "green";
// });
// document.getElementById("datepicker1").addEventListener("input", function() {
//     this.style.borderColor = "green";
// });







//შევინახოთ name დათა როცა გადარესტარტდება გვერდი
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


document.getElementById("position-item-input").addEventListener("input", function() {
    document.getElementById("right-experience-jobs").innerHTML = this.value;
});
document.getElementById("employer-input").addEventListener("input", function() {
    document.getElementById("right-experience-employer").innerHTML = this.value;
});
document.getElementById("datepicker").addEventListener("input", function() {
    document.getElementById("right-experience-data").innerHTML = this.value;
});
document.getElementById("datepicker1").addEventListener("input", function() {
    document.getElementById("right-experience-data1").innerHTML = this.value;
});
document.getElementById("description-textarea").addEventListener("input", function() {
    document.getElementById("right-experience-text").innerHTML = this.value;
});


// headeris gamochena



const userHeader = document.getElementById("right-experience-header");
userPosition.addEventListener("input", function() {
    if (userPosition.value.length > 0) {
        userHeader.style.display = "flex";
    } else {
        userHeader.style.display = "none";
    }
});

const userImagex = document.getElementById("right-experience-img");
userText.addEventListener("input", function() {
    if (userText.value.length > 0) {
        userImagex.style.display = "flex";
    } else {
        userImagex.style.display = "none";
    }
});




// //////////////////////inputebis gamotana bologverdze2-start–pickupinfo////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////position
// Get the input element
var input5 = document.getElementById("position-item-input");

// Listen for changes to the input value
input5.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name5", input5.value);
});


//////////////////////////////////////////////////////////////////////////////////////////place
// Get the input element
var input6 = document.getElementById("employer-input");

// Listen for changes to the input value
input6.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name6", input6.value);
});

//////////////////////////////////////////////////////////////////////////////////////////startdate
// Get the input element
var input6 = document.getElementById("datepicker");

// Listen for changes to the input value
input6.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name7", input6.value);
});

//////////////////////////////////////////////////////////////////////////////////////////enddate
// Get the input element
var input7 = document.getElementById("datepicker1");

// Listen for changes to the input value
input7.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name8", input7.value);
});

//////////////////////////////////////////////////////////////////////////////////////////description
// Get the input element
var input8 = document.getElementById("description-textarea");

// Listen for changes to the input value
input8.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name9", input8.value);
});









// ////////////////////////////////////////////////////////////////////////"შემდეგი" ბუტონმა იმუშაოს თუ ინპუტები იქნება შეყვანილი////////////////////////////////////////////////////////////////
// Get references to all the form fields


// const userPosition = document.getElementById("position-item-input");
// const userEmployer = document.getElementById("employer-input");
// var input6 = document.getElementById("datepicker");
// var input7 = document.getElementById("datepicker1");
// const userText = document.getElementById("description-textarea");

// Get a reference to the submit button
let submitButton1 = document.getElementById("page3next");

// Disable the submit button by default
submitButton1.disabled = true;

// Listen for changes to the form fields
userPosition.addEventListener("input", checkForm);
userEmployer.addEventListener("input", checkForm);
input6.addEventListener("input", checkForm);
input7.addEventListener("input", checkForm);
userText.addEventListener("input", checkForm);

// Define a function to check the form
function checkForm() {
    // Check if all the form fields are filled
    if (userPosition.value && userEmployer.value && input6.value && input7.value && userText.value) {
        // If all the form fields are filled, enable the submit button
        submitButton1.disabled = false;
    } else {
        // If one of the form fields is empty, disable the submit button
        submitButton1.disabled = true;
    }
}