const scriptURL = 'https://script.google.com/macros/s/AKfycbzJc3HXMsalJglfQynFCsglUBCaUOjn05W0E85qgQ24hu4c1sbLu-dAPAMvZXnPjNycfA/exec'
const form = document.getElementById('contactForm')

form.addEventListener('submit', e => {
    e.preventDefault()

    // 🔄 Sending alert
    Swal.fire({
        title: 'Sending...',
        text: 'Please wait while your message is being sent',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting me 😊',
            timer: 1000,
            showConfirmButton: false
        })
        form.reset()
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Please try again later.',
        })
    })
})