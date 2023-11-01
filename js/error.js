//========================  Мультимовність   ====================================================================
(() => {
   function setLanguage(lang) {
      // Зберігаємо вибір користувача в localStorage
      localStorage.setItem('lang', lang);
      // Змінюємо мову HTML сторінки відповідно до вибраної мови
      var html = document.getElementsByTagName('html')[0];
      html.setAttribute('lang', lang);
      // Змінюємо текст елемента з id='greeting' відповідно до вибраної мови
      var greeting = document.getElementById('1');
      if (lang === 'en') {
         greeting.innerText = 'Main';
      } else if (lang === 'pl') {
         greeting.innerText = 'Główny';
      } else {
         greeting.innerText = 'Головна';
      }
      var greeting = document.getElementById('2');
      if (lang === 'en') {
         greeting.innerText = 'Our warehouses';
      } else if (lang === 'pl') {
         greeting.innerText = 'Nasze magazyny';
      } else {
         greeting.innerText = 'Наші склади';
      }
      var greeting = document.getElementById('3');
      if (lang === 'en') {
         greeting.innerText = 'Brokers';
      } else if (lang === 'pl') {
         greeting.innerText = 'Brokerzy';
      } else {
         greeting.innerText = 'Брокерам';
      }
      var greeting = document.getElementById('4');
      if (lang === 'en') {
         greeting.innerText = 'Contacts';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność';
      } else {
         greeting.innerText = 'Контакти';
      }
      //===============================================================================================================
      var greeting = document.getElementById('5');
      if (lang === 'en') {
         greeting.innerText = 'Error';
      } else if (lang === 'pl') {
         greeting.innerText = 'Błąd';
      } else {
         greeting.innerText = 'Помилка';
      }
      var greeting = document.getElementById('6');
      if (lang === 'en') {
         greeting.innerText = 'Unfortunately, the page was not found, most likely it was deleted.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Niestety strona nie została odnaleziona, najprawdopodobniej została usunięta.';
      } else {
         greeting.innerText = 'На жаль, сторінка не знайдена, швидше за все вона була видалена.';
      }
      var greeting = document.getElementById('7');
      if (lang === 'en') {
         greeting.innerText = 'We recommend returning to the main page.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zalecamy powrót do strony głównej.';
      } else {
         greeting.innerText = 'Рекомендуємо повернутись на головну.';
      }
      var greeting = document.getElementById('8');
      if (lang === 'en') {
         greeting.innerText = 'Privacy policy';
      } else if (lang === 'pl') {
         greeting.innerText = 'Polityka prywatności';
      } else {
         greeting.innerText = 'Політика конфіденційності';
      }
      //===============================================================================================================
      var greeting = document.getElementById('10');
      if (lang === 'en') {
         greeting.innerText = 'Main';
      } else if (lang === 'pl') {
         greeting.innerText = 'Główny';
      } else {
         greeting.innerText = 'Головна';
      }
      var greeting = document.getElementById('11');
      if (lang === 'en') {
         greeting.innerText = 'Main';
      } else if (lang === 'pl') {
         greeting.innerText = 'Główny';
      } else {
         greeting.innerText = 'Головна';
      }
      var greeting = document.getElementById('12');
      if (lang === 'en') {
         greeting.innerText = 'Our warehouses';
      } else if (lang === 'pl') {
         greeting.innerText = 'Nasze magazyny';
      } else {
         greeting.innerText = 'Наші склади';
      }
      var greeting = document.getElementById('13');
      if (lang === 'en') {
         greeting.innerText = 'Brokers';
      } else if (lang === 'pl') {
         greeting.innerText = 'Brokerzy';
      } else {
         greeting.innerText = 'Брокерам';
      }
      var greeting = document.getElementById('14');
      if (lang === 'en') {
         greeting.innerText = 'Contacts';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność';
      } else {
         greeting.innerText = 'Контакти';
      }
      //===============================================================================================================
   }
   // Отримуємо поточну мову з localStorage, якщо вона зберіглася раніше
   var currentLang = localStorage.getItem('lang') || 'uk';
   // Встановлюємо поточну мову
   setLanguage(currentLang);
   // Додаємо обробник кліку на кожну кнопку
   document.getElementById('en-btn').addEventListener('click', function () {
      setLanguage('en');
   });
   document.getElementById('pl-btn').addEventListener('click', function () {
      setLanguage('pl');
   });
   document.getElementById('ua-btn').addEventListener('click', function () {
      setLanguage('uk');
   });
})();
