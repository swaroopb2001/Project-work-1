function validateEmail(email=document.getElementById('formEmail').value)
{
    var validFormat = /^[a-zA-Z]+[a-zA-Z]*.(cs|is|epe|ec|me|ee|se|cv|te|cee|bt)[0-9][0-9]+@bmsce.ac.in$/;
    
    if(validFormat.test(email)){
        alert("You have signed in!");
    }
    else {
        alert("Please enter a valid BMSCE mail ID.\nEnter the email ID in the format 'example.cs20@bmsce.ac.in'");
    }
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    validateEmail(profile.getEmail());
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}

//back button
const btn= document.querySelector('#back-btn');
btn.addEventListener('click',()=>{
    window.location.href="home.html";
})