// export function initializeContact() {
//     const form = document.getElementById('contact-form');

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const formData = {
//             name: form.name.value,
//             email: form.email.value,
//             message: form.message.value
//         };

//         // Here you would typically send the form data to a server
//         // For now, we'll just log it to the console
//         console.log('Form submitted:', formData);

//         // Show success message
//         alert('Message sent successfully!');

//         // Reset form
//         form.reset();
//     });
// }

// Google sheet 
// for contact form 
export function initializeContact() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby6JXV4Kw84FNDgZKVncAsC7IWps-hk4bb7fJ-oLQcMlyl4p1ol3Cr1xm_Crkytv9ZQ/exec'

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thank you! your form is submitted successfully."))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    })
}