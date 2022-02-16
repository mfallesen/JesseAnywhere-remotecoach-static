
// =======THIS MUST BE CHANGE DON DEPLOYED APPLICATION =======
const mailApi = 'http://localhost:3001/api/mailto'
//  Mock Call 
let mockCall = {
    "sender": "John",
	"senderEmail": "john@john.com",
	"subject": "Mail Testing",
	"planInterest": "Kinda Fit",
	"message": "This is a test message to see that everything is kosher"
}


let sendBtn = document.getElementById('contactform-submit')

sendBtn.addEventListener('click', function(event) {
    event.preventDefault();
    mailSend(mockCall);
}) 





function mailSend(dataSent) {

    // let formData = new FormData(dataSent)

    console.log(dataSent);
    
    console.log("Hello there");
    // fetch request to mail API
    fetch(mailApi, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        // mode: "no-cors",
        // body: JSON.stringify ({
        //     "sender": "John",
        //     "senderEmail": "john@john.com",
        //     "subject": "Mail Testing",
        //     "planInterest": "Kinda Fit",
        //     "message": "This is a test message to see that everything is kosher"
        // })
        body: JSON.stringify(mockCall)
    })
    .then(function(response) {
        if (!response) {
            throw new Error("Ooops Something went Wrong Please try again later")
        }
        console.log("=== response ===", response.status);
    })

}