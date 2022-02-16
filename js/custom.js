
// =======THIS MUST BE CHANGE DON DEPLOYED APPLICATION =======
const mailApi = 'http://localhost:3001/api/mailto'

let sendBtn = document.getElementById('contactform-submit')

sendBtn.addEventListener('click', function (event) {
    event.preventDefault();
console.log(document.getElementById('contactform-name').value);

    let submissionData = {
        "sender": document.getElementById('contactform-name').value,
        "senderEmail": document.getElementById('contactform-email').value,
        "subject": document.getElementById('contactform-subject').value,
        "planInterest": document.getElementById('contactform-service').value,
        "message": document.getElementById('contactform-message').value
    }
    mailSend(submissionData);
})





function mailSend(dataSent) {

    // let formData = new FormData(dataSent)

    console.log(dataSent);

    console.log("Hello there");
    // fetch request to mail API
    fetch(mailApi, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSent)
    })
        .then(function (response) {
            if (!response) {
                throw new Error("Ooops Something went Wrong Please try again later")
            }
            console.log("=== response ===", response.status);
        })

}