








function otherOptionHandler() {

  const otherOptions = document.querySelectorAll('.other-option');

  otherOptions.forEach((textInput) => {
    const label = textInput.closest('label');
    const checkbox = label.querySelector('.checkbox-input');

    textInput.addEventListener('input', () => {
      if (textInput.value.trim() !== '') {
        checkbox.checked = true;
      } else {
        checkbox.checked = false; // opcjonalne
      }
    });


    checkbox.addEventListener('change', () => {
      if (!checkbox.checked) {
        textInput.value = '';
      }
    });

  });

}



otherOptionHandler()














function formSubmitHandler() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(
      [...formData.entries()].filter(([key]) => !key.endsWith('[]'))
    );

    data.form_type = 'extended';

    data.interests = formData.getAll('interests[]').join(', ');
    data.additionalFunctions = formData.getAll('additionalFunctions[]').join(', ');
    data.focus = formData.getAll('focus[]').join(', ');
    data.materials = formData.getAll('materials[]').join(', ');
    data.message = '';

    data.ref = localStorage.getItem('affiliate_ref') || '';
    data.timestamp = new Date().toLocaleString('pl-PL');

    //console.log("Obiekt wysyłany do Make:", data);

    try {
      const response = await fetch('https://hook.eu1.make.com/4unij60c3dtjpw47swxva7dq6miydqup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Błąd połączenia z serwerem');

      form.reset();
      alert('Formularz wysłany');

    } catch (err) {
      console.error(err);
      alert('Błąd wysyłania');
    }
  });
}

formSubmitHandler();