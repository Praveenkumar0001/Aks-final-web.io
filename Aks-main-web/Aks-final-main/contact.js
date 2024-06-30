

// function toSubmit(){
//     let contactName=document.getElementById("contact-name")
//     let contactEmail=document.getElementById("contact-email")
//     let contactMessage=document.getElementById("contact-message")
//     let contactObj={
//         name:contactName.value,
//         email:contactEmail.value,
//         message:contactMessage.value
//     }
//     console.log(contactObj)
//     axios.post('https://localhost:3000/add_contact', contactObj)
//       .then((response) => {
//         console.log('POST request successful', response.data);
//         contactName.value=""
//         contactEmail.value=""
//         contactMessage.value=""
//       })
//       .catch((error) => {
//         console.error('Error making POST request', error);
//       });
// }