////////////////////////////piradi2-liveupdatecode/////////////////////
document.getElementById("name-input").addEventListener("input", function() {
    document.getElementById("right-info-name").innerHTML = this.value;
});
document.getElementById("surname-input").addEventListener("input", function() {
    document.getElementById("right-info-surname").innerHTML = this.value;
});
document.getElementById("aboutme-textarea").addEventListener("input", function() {
    document.getElementById("right-info-text").innerHTML = this.value;
});
document.getElementById("mail-input").addEventListener("input", function() {
    document.getElementById("right-info-email-item").innerHTML = this.value;
});
document.getElementById("mobile-input").addEventListener("input", function() {
    document.getElementById("right-info-number-item").innerHTML = this.value;
});
////////////////////////////piradi2-liveupdatecode/////////////////////


////////////////////////////gamocdileba3-liveupdatecode/////////////////////
document.getElementById("position-item-input").addEventListener("input", function() {
    document.getElementById("right-experience-jobs").innerHTML = this.value;
});

////////////////////////////gamocdileba3-liveupdatecode/////////////////////




////////////////////////////datasshenaxvarestartistvis/////////////////////
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
////////////////////////////datasshenaxvarestartistvis/////////////////////