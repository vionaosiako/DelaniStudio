function formSubmit(){
    var name = document.getElementById("inputName");
    var email = document.getElementById("inputEmail");
    var textMessage = document.getElementById("messageText");

    if(name.value.trim() == "")
    {
        alert("Kindly fill in your name");
    }

    else if(email.value.trim() == "")
    {
        alert("Kindly fill in your email");
    }

    else if(textMessage.value.trim() == "")
    {
        alert("Kindly fill in the message");
    }

    else{
        alert("Thank you for contacting us");        
    }
}

// function formSubmit(){
//     validation();
//     alert("Thank you for contacting us");
// }