window.addEventListener('load', () => {
  const form = document.forms.contact;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      target: 'photography',
    };

    document.forms.contact.send.textContent = 'Sending...';

    await fetch('https://hmi.dynu.net/email-notifier/notify', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    window.location.href = '/contact-success.html';
  });
});
