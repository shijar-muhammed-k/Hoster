sendBtn = document.getElementById('sendMail');
sendBtn.addEventListener('click', () => {
    let name = document.getElementById('name');
    let email = document.getElementById('mailid');
    let message = document.getElementById('message');
    let phone = document.getElementById('phoneNumber');
    console.log(name.value, email.value, message.value, phone.value);
    location.href = href=`mailto:hostertechnologies@gmail.com?&subject=Contact Hoster Technologies - ${email.value} ${phone.value}&body=Hi ${name.value}${message.value}`
})