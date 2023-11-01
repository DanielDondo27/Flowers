//========================  Мультимовність   ====================================================================
(() => {
   function setLanguage(lang) {
      // Зберігаємо вибір користувача в localStorage
      localStorage.setItem('lang', lang);
      // Змінюємо текст елемента з id='greeting' відповідно до вибраної мови
      //===============================================================================================================
      var greeting = document.getElementById('99');
      if (lang === 'en') {
         greeting.innerText = 'Brokers | Demo';
      } else if (lang === 'pl') {
         greeting.innerText = 'Brokerzy | Demo';
      } else {
         greeting.innerText = 'Брокерам | Demo';
      }
      //===============================================================================================================
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
         greeting.innerText = 'Main';
      } else if (lang === 'pl') {
         greeting.innerText = 'Główny';
      } else {
         greeting.innerText = 'Головна';
      }
      var greeting = document.getElementById('6');
      if (lang === 'en') {
         greeting.innerText = 'Our warehouses';
      } else if (lang === 'pl') {
         greeting.innerText = 'Nasze magazyny';
      } else {
         greeting.innerText = 'Наші склади';
      }
      var greeting = document.getElementById('7');
      if (lang === 'en') {
         greeting.innerText = 'Brokers';
      } else if (lang === 'pl') {
         greeting.innerText = 'Brokerzy';
      } else {
         greeting.innerText = 'Брокерам';
      }
      var greeting = document.getElementById('8');
      if (lang === 'en') {
         greeting.innerText = 'Contacts';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność';
      } else {
         greeting.innerText = 'Контакти';
      }
      var greeting = document.getElementById('9');
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
         greeting.innerText = 'Brokers';
      } else if (lang === 'pl') {
         greeting.innerText = 'Brokerzy';
      } else {
         greeting.innerText = 'Брокерам';
      }
      var greeting = document.getElementById('11');
      if (lang === 'en') {
         greeting.innerText = 'We help brokers from any country with flower delivery';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pomagamy pośrednikom z dowolnego kraju w dostarczaniu kwiatów';
      } else {
         greeting.innerText = 'Допомагаємо брокерам із будь-яких країн з доставкою квітів';
      }
      var greeting = document.getElementById('12');
      if (lang === 'en') {
         greeting.innerText = 'Broker';
      } else if (lang === 'pl') {
         greeting.innerText = 'Broker';
      } else {
         greeting.innerText = 'Брокер';
      }
      var greeting = document.getElementById('13');
      if (lang === 'en') {
         greeting.innerText = 'Client';
      } else if (lang === 'pl') {
         greeting.innerText = 'Klient';
      } else {
         greeting.innerText = 'Клієнт';
      }
      var greeting = document.getElementById('14');
      if (lang === 'en') {
         greeting.innerText = '1 step';
      } else if (lang === 'pl') {
         greeting.innerText = '1 krok';
      } else {
         greeting.innerText = '1 крок';
      }
      var greeting = document.getElementById('15');
      if (lang === 'en') {
         greeting.innerText = '2 step';
      } else if (lang === 'pl') {
         greeting.innerText = '2 krok';
      } else {
         greeting.innerText = '2 крок';
      }
      var greeting = document.getElementById('16');
      if (lang === 'en') {
         greeting.innerText = '3 step';
      } else if (lang === 'pl') {
         greeting.innerText = '3 krok';
      } else {
         greeting.innerText = '3 крок';
      }
      var greeting = document.getElementById('17');
      if (lang === 'en') {
         greeting.innerText = '4 step';
      } else if (lang === 'pl') {
         greeting.innerText = '4 krok';
      } else {
         greeting.innerText = '4 крок';
      }
      var greeting = document.getElementById('18');
      if (lang === 'en') {
         greeting.innerText = 'The client applies/works with the broker';
      } else if (lang === 'pl') {
         greeting.innerText = 'Klient aplikuje/współpracuje z brokerem';
      } else {
         greeting.innerText = 'Клієнт звертається/працює з брокером';
      }
      var greeting = document.getElementById('19');
      if (lang === 'en') {
         greeting.innerText = 'The customer places an order';
      } else if (lang === 'pl') {
         greeting.innerText = 'Klient składa zamówienie';
      } else {
         greeting.innerText = 'Клієнт робить замовлення';
      }
      var greeting = document.getElementById('20');
      if (lang === 'en') {
         greeting.innerText = 'The broker transfers the client`s cargo to our company for delivery';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pośrednik przekazuje ładunek klienta do naszej firmy w celu dostawy';
      } else {
         greeting.innerText = 'Брокер передає вантаж клієнта до нашої компанії для доставки';
      }
      var greeting = document.getElementById('21');
      if (lang === 'en') {
         greeting.innerText = 'We deliver the order to the client`s door by a broker';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamówienie dostarczamy pod drzwi klienta przez pośrednika';
      } else {
         greeting.innerText = 'Здійснюємо доставку клієнту замовлення брокером до дверей';
      }
      //===============================================================================================================
   }
   // Отримуємо поточну мову з localStorage, якщо вона зберіглася раніше
   var currentLang = localStorage.getItem('lang') || 'ua';
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
      setLanguage('ua');
   });
})();
