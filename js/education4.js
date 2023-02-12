document.getElementById("header-back-button22").addEventListener("click", function() {
    window.location.href = "index.html";
});
document.getElementById("page3back").addEventListener("click", function() {
    window.location.href = "experience3.html";
});
document.getElementById("page3next").addEventListener("click", function() {
    window.location.href = "resume5.html";
});

// const userKnowledgeQuality = document.getElementById("right-knowledge-quality");

// $(function() {
//     $("#datepicker4").datepicker();
// });

// //////////////////////////////////
function show(value) {
    document.querySelector(".text-box").value = value;
    document.getElementById("right-knowledge-quality").innerHTML = value;

    document.getElementById("zdarova").innerText = value;
    userEmployer.innerHTML = value


}










function show1(value) {
    document.querySelector(".text-box1").value = value;
}



let dropdown = document.querySelector(".dropdown1")
dropdown.onclick = function() {
    dropdown.classList.toggle("active")
}


let dropdownn = document.querySelector(".dropdown")
dropdownn.onclick = function() {
    dropdownn.classList.toggle("active")
}


document.getElementById("addexperienceschool").addEventListener("click", function() {
    document.getElementById("addmoreschool").style.display = "block";
    document.body.style.overflow = "scroll";
    document.getElementById("page3next").style.top = "1448px";
    document.getElementById("page3back").style.top = "1448px";
    document.getElementById("addexperienceschool").style.top = "1270px";
});




const userEmployer = document.getElementById("position-item-input1");
const userDone1 = document.getElementById("done");
userEmployer.addEventListener("input", function() {
    if (!/[a-zA-Zა-ჰ]{2,}/.test(userEmployer.value)) {
        userEmployer.style.borderColor = "#EF5050";
        userDone1.style.display = "none";
    } else {
        userEmployer.style.borderColor = "#98E37E";
        userDone1.style.display = "flex";
    }
});


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



document.getElementById("position-item-input1").addEventListener("input", function() {
    document.getElementById("right-knowledge-place").innerHTML = this.value;
});
document.getElementById("datepicker4").addEventListener("input", function() {
    document.getElementById("right-knowledge-date").innerHTML = this.value;
});
document.getElementById("description-textareazzz").addEventListener("input", function() {
    document.getElementById("right-knowledge-text").innerHTML = this.value;
});



const userDescription = document.getElementById("description-textareazzz");

userDescription.addEventListener("input", function() {
    if (userDescription.value.length > 0) {
        userDescription.style.borderColor = "#98E37E";
    } else {
        userDescription.style.borderColor = "";
    }
});



const userKnowledgeHeader = document.getElementById("right-knowledge-header");


userEmployer.addEventListener("input", function() {
    if (userEmployer.value.length > 0) {
        userKnowledgeHeader.style.display = "flex";
    } else {
        userKnowledgeHeader.style.display = "none";
    }
});










// //////////////////////inputebis gamotana bologverdze2-start–pickupinfo////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////school
// Get the input element
var input9 = document.getElementById("position-item-input1");

// Listen for changes to the input value
input9.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name10", input9.value);
});

/////////////////////////////////////////////////////////////////////////////////////////quality
// Get the input element
var input10 = document.getElementById("right-knowledge-quality");

// Listen for changes to the input value
input10.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name11", input10.value);
});

/////////////////////////////////////////////////////////////////////////////////////////school
// Get the input element
var input11 = document.getElementById("datepicker4");

// Listen for changes to the input value
input11.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name12", input11.value);
});


/////////////////////////////////////////////////////////////////////////////////////////text
// Get the input element


// Listen for changes to the input value
userDescription.addEventListener("input", function() {
    // Store the input value in session storage
    sessionStorage.setItem("name13", userDescription.value);
});








// ////////////////////////////////////////////////////////////////////////"შემდეგი" ბუტონმა იმუშაოს თუ ინპუტები იქნება შეყვანილი////////////////////////////////////////////////////////////////
// Get references to all the form fields


// const userEmployer = document.getElementById("position-item-input1");
// var input11 = document.getElementById("datepicker4");
// const userDescription = document.getElementById("description-textarea");

// Get a reference to the submit button
let submitButton1 = document.getElementById("page3next");

// Disable the submit button by default
submitButton1.disabled = true;

// Listen for changes to the form fields
userEmployer.addEventListener("input", checkForm);
input11.addEventListener("input", checkForm);
userDescription.addEventListener("input", checkForm);


// Define a function to check the form
function checkForm() {
    // Check if all the form fields are filled
    if (userEmployer.value && input11.value && userDescription.value) {
        // If all the form fields are filled, enable the submit button
        submitButton1.disabled = false;
    } else {
        // If one of the form fields is empty, disable the submit button
        submitButton1.disabled = true;
    }
}