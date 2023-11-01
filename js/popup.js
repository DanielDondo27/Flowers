//=======================   Модальне вікно  =============== =====================================================
(() => {
   const popupLinks = document.querySelectorAll('.popup-link');
   const body = document.querySelector('body');
   const lockPadding = document.querySelectorAll(".lock-padding");

   let unlock = true;

   const timeout = 800;

   if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
         const popupLink = popupLinks[index];
         popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
         });
      }
   }
   const popupCloseIcon = document.querySelectorAll('.close-popup');
   if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
         const el = popupCloseIcon[index];
         el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
         });
      }
   }

   function popupOpen(curentPopup) {
      if (curentPopup && unlock) {
         const popupActive = document.querySelector('.popup.open');
         if (popupActive) {
            popupClose(popupActive, false);
         } else {
            bodyLock();
         }
         curentPopup.classList.add('open');
         curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
               popupClose(e.target.closest('.popup'));
            }
         });
      }
   }

   function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
         popupActive.classList.remove('open');
         if (doUnlock) {
            bodyUnLock();
         }
      }
   }

   function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
         }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }

   function bodyUnLock() {
      setTimeout(function () {
         if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
               const el = lockPadding[index];
               el.style.paddingRight = '0px';
            }
         }
         body.style.paddingRight = '0px';
         body.classList.remove('lock');
      }, timeout);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }

   document.addEventListener('keydown', function (e) {
      if (e.which === 27) {
         const popupActive = document.querySelector('.popup.open');
         popupClose(popupActive);
      }
   });

   (function () {
      // проверяем поддержку
      if (!Element.prototype.closest) {
         // реализуем
         Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
               if (node.matches(css)) return node;
               else node = node.parentElement;
            }
            return null;
         };
      }
   })();
   (function () {
      // проверяем поддержку
      if (!Element.prototype.matches) {
         // определяем свойство
         Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
      }
   })();
})();
//===============================================================================================================
(() => {
   // отримуємо елементи форми та кнопки submit
   const form = document.getElementById('form-popup');
   const nameInput = document.getElementById('usermane-popup');
   const telInput = document.getElementById('usertel-popup');
   const policyInput = document.getElementById('userpolicy-popup');
   const submitBtn = document.getElementById('button-submit-popup');
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