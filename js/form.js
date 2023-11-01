(() => {
   // отримуємо елементи форми та кнопки submit
   const form = document.getElementById('myForm');
   const nameInput = document.getElementById('usermane');
   const telInput = document.getElementById('usertel');
   const policyInput = document.getElementById('userpolicy');
   const submitBtn = document.getElementById('button-submit');
   // визначаємо функції валідації для імені та телефону
   const validateName = (name) => {
      const regex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ']{2,}$/; // регулярний вираз для кирилиці з мінімум 2 символів
      return regex.test(name);
   };
   const validatePolicy = () => {
      return policyInput.checked;
   };
   const validateTel = (tel) => {
      const regex = /^\+380\d{9}$/; // регулярний вираз для українського номеру телефону
      return regex.test(tel);
   };
   // визначаємо функцію для зміни стилю елемента
   const changeStyle = (element, color, time) => {
      element.style.borderBottom = `1px solid ${color}`;
      setTimeout(() => {
         element.style.borderBottom = '';
      }, time);
   };
   // визначаємо функцію для очищення даних форми
   const clearForm = () => {
      nameInput.value = '';
      telInput.value = '';
   };
   // визначаємо функцію для валідації форми
   const validateForm = () => {
      let valid = true;
      if (!validateName(nameInput.value)) {
         changeStyle(nameInput, 'red', 2000);
         valid = false;
      }
      if (!validateTel(telInput.value)) {
         changeStyle(telInput, 'red', 2000);
         valid = false;
      }
      if (!validatePolicy()) {
         changeStyle(policyInput, 'red', 2000);
         valid = false;
         const policyLabel = document.querySelector('label[for="userpolicy"]');
         policyLabel.style.color = 'red';
         setTimeout(() => {
            policyLabel.style.color = '';
         }, 2000);
      }
      if (!valid) {
         submitBtn.style.color = 'red';
         setTimeout(() => {
            submitBtn.style.color = '';
         }, 2000);
      }
      return valid;
   };
   // додаємо обробник події для кліку на кнопку submit
   form.addEventListener('submit', (event) => {
      event.preventDefault(); // запобігаємо дії за замовчуванням (відправці форми)
      if (validateForm()) {
         clearForm();
         changeStyle(nameInput, 'green', 2000);
         changeStyle(telInput, 'green', 2000);
         submitBtn.style.color = 'green';
         setTimeout(() => {
            submitBtn.style.color = '';
         }, 2000);
      }
   });
})();
