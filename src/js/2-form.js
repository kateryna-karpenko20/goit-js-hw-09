
const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements.email;
const messageInput = formEl.elements.message;
    
const formData = {
      email: "",
      message: ""
    };

    document.addEventListener('DOMContentLoaded', () => {
      const savedData = localStorage.getItem('feedback-form-state');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        emailInput.value = formData.email;
        messageInput.value = formData.message;
      }
    });

    formEl.addEventListener('input', (event) => {
      const { name, value } = event.target;
      formData[name] = value.trim();
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    formEl.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
      }
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      formEl.reset();
      formData.email = "";
      formData.message = "";
    });