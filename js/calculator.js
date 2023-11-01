(() => {
   function runCalculator() {
      function validateRadioButtons() {
         const radioButtons = document.getElementsByName('contries');
         let isValid = false;
         let countryName = '';
         for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
               isValid = true;
               const label = radioButtons[i].closest('label');
               const countrySpan = label.querySelector('#name');
               if (countrySpan) {
                  countryName = countrySpan.textContent;
               }
               break;
            }
         }
         if (!isValid) {
            const labels = document.getElementsByTagName('label');
            for (let i = 0; i < labels.length; i++) {
               labels[i].style.color = 'red';
               setTimeout(() => labels[i].style.color = '', 2000);
            }
         }
         document.getElementById('country').textContent = countryName;
         return isValid;
      }
      function validateDate() {
         const dateInput = document.getElementById('line');
         const dateRegex = /^\d{2}.\d{2}.\d{4}$/;
         const isValid = dateRegex.test(dateInput.value);
         if (!isValid) {
            dateInput.style.borderBottomColor = 'red';
            setTimeout(() => dateInput.style.borderColor = '', 2000);
            dateInput.style.color = 'red';
            setTimeout(() => dateInput.style.color = '', 2000);
         } else {
            const [day, month, year] = dateInput.value.split('.');
            if (month > 12) {
               dateInput.style.borderBottomColor = 'red';
               setTimeout(() => dateInput.style.borderColor = '', 2000);
               dateInput.style.color = 'red';
               setTimeout(() => dateInput.style.color = '', 2000);
               isValid = false;
            }
         }
         return isValid;
      }
      function calculateDates() {
         const dateInput = document.getElementById('line');
         const [day, month, year] = dateInput.value.split('.');
         const orderDate = new Date(`${year}-${month}-${day}`);
         orderDate.setDate(orderDate.getDate() + 3);
         const deliveryDate = new Date(orderDate);
         deliveryDate.setDate(deliveryDate.getDate() + 5);
         if (orderDate.getMonth() !== deliveryDate.getMonth()) {
            deliveryDate.setMonth(deliveryDate.getMonth() + 1);
            if (deliveryDate.getMonth() === 0) {
               deliveryDate.setFullYear(deliveryDate.getFullYear() + 1);
            }
         }
         if (orderDate.getFullYear() !== deliveryDate.getFullYear()) {
            deliveryDate.setFullYear(deliveryDate.getFullYear() + 1);
         }
         document.getElementById('order').textContent = orderDate.getDate() + ' ' + getMonthName(orderDate.getMonth()) + ' ' + orderDate.getFullYear();
         document.getElementById('delivery').textContent = deliveryDate.getDate() + ' ' + getMonthName(deliveryDate.getMonth()) + ' ' + deliveryDate.getFullYear();
         document.getElementById('announcement').textContent = `${day} ${getMonthName(month - 1)} ${year}`;
      }
      function getMonthName(month) {
         const lang = document.documentElement.lang.toLowerCase();
         const months = {
            'uk': ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
            'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            'pl': ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
         };
         return months[lang][month];
      }
      document.getElementById('finish').addEventListener('click', () => {
         if (validateRadioButtons() && validateDate()) {
            calculateDates();
         }
      });
      document.getElementById('clear').addEventListener('click', () => {
         document.getElementsByName('contries').forEach(radio => radio.checked = false);
         document.getElementById('line').value = '';
         document.getElementById('day').textContent = '';
         document.getElementById('order').textContent = '';
         document.getElementById('delivery').textContent = '';
      });
   }
   runCalculator();
})();