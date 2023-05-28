let studentArray = [];

register = () => {
    let studentNames = document.getElementById("names").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let phoneNumber = document.getElementById("inputTel").value;
    let subject = document.getElementById("subjectSelect");

    if (subject.tabIndex > 0) {
        if (spamCheckbox.checked){
            alert("Welcome "+studentNames+"! Thank you for your interest in "+subject+"! We will contact you via the email provided: "+ email +", or alternatively on the phone number: "+ phoneNumber +".");
            studentArray.push({
                studentName: studentNames,
                studentEmail: email,
                studentPass: password,
                studentNumber: phoneNumber,
                studentSubject: subject.value
            })
            console.log(studentArray)
        } else {
            alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested"+ studentNames +"!  If you want to sign up, you better CHECK that newsletter box!");
        }
    } else {
        alert("It would seem that you are not interested in any subject. Please select a subject that interests you before signing up.");
    }
}