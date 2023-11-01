//========================  Мультимовність   ====================================================================
(() => {
   function setLanguage(lang) {
      // Зберігаємо вибір користувача в localStorage
      localStorage.setItem('lang', lang);
      // Змінюємо мову HTML сторінки відповідно до вибраної мови
      var html = document.getElementsByTagName('html')[0];
      html.setAttribute('lang', lang);
      // Змінюємо текст елемента з id='greeting' відповідно до вибраної мови
      //===============================================================================================================
      var greeting = document.getElementById('99');
      if (lang === 'en') {
         greeting.innerText = 'Contacts | Demo';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność | Demo';
      } else {
         greeting.innerText = 'Контакти | Demo';
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
         greeting.innerText = 'Contacts';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność';
      } else {
         greeting.innerText = 'Контакти';
      }
      //===============================================================================================================
      var greeting = document.getElementById('11');
      if (lang === 'en') {
         greeting.innerText = 'Phone';
      } else if (lang === 'pl') {
         greeting.innerText = 'Telefon';
      } else {
         greeting.innerText = 'Телефон';
      }
      var greeting = document.getElementById('12');
      if (lang === 'en') {
         greeting.innerText = 'Address';
      } else if (lang === 'pl') {
         greeting.innerText = 'Adres';
      } else {
         greeting.innerText = 'Адреса';
      }
      var greeting = document.getElementById('13');
      if (lang === 'en') {
         greeting.innerText = 'Maidan Nezalezhnosti, Kyiv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Majdan Nezalezhnosti, Kijów';
      } else {
         greeting.innerText = 'Майдан Незалежності, Київ';
      }
      //===============================================================================================================
      var greeting = document.getElementById('14');
      if (lang === 'en') {
         greeting.innerText = 'Our specialists';
      } else if (lang === 'pl') {
         greeting.innerText = 'Nasi specjaliści';
      } else {
         greeting.innerText = 'Наші спеціалісти';
      }
      //===============================================================================================================
      var greeting = document.getElementById('15');
      if (lang === 'en') {
         greeting.innerText = 'Oleg Milich';
      } else if (lang === 'pl') {
         greeting.innerText = 'Oleg Milich';
      } else {
         greeting.innerText = 'Мілич Олег';
      }
      var greeting = document.getElementById('16');
      if (lang === 'en') {
         greeting.innerText = 'Head of the sales department in the Kyiv region';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kierownik działu sprzedaży w obwodzie kijowskim';
      } else {
         greeting.innerText = 'Керівник напрямку продажів в Київській області';
      }
      var greeting = document.getElementById('17');
      if (lang === 'en') {
         greeting.innerText = 'Sylina Maria';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sylina Maria';
      } else {
         greeting.innerText = 'Силіна Марія';
      }
      var greeting = document.getElementById('18');
      if (lang === 'en') {
         greeting.innerText = 'Head of the sales department in Kyiv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kierownik działu sprzedaży w Kijowie';
      } else {
         greeting.innerText = 'Керівник напрямку продажів в Києві';
      }
      var greeting = document.getElementById('19');
      if (lang === 'en') {
         greeting.innerText = 'Oleg Milich';
      } else if (lang === 'pl') {
         greeting.innerText = 'Oleg Milich';
      } else {
         greeting.innerText = 'Мілич Олег';
      }
      var greeting = document.getElementById('20');
      if (lang === 'en') {
         greeting.innerText = 'Head of the sales department in the Kyiv region';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kierownik działu sprzedaży w obwodzie kijowskim';
      } else {
         greeting.innerText = 'Керівник напрямку продажів в Київській області';
      }
      var greeting = document.getElementById('21');
      if (lang === 'en') {
         greeting.innerText = 'Sylina Maria';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sylina Maria';
      } else {
         greeting.innerText = 'Силіна Марія';
      }
      var greeting = document.getElementById('22');
      if (lang === 'en') {
         greeting.innerText = 'Head of the sales department in Kyiv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kierownik działu sprzedaży w Kijowie';
      } else {
         greeting.innerText = 'Керівник напрямку продажів в Києві';
      }
      var greeting = document.getElementById('23');
      if (lang === 'en') {
         greeting.innerText = 'Oleg Milich';
      } else if (lang === 'pl') {
         greeting.innerText = 'Oleg Milich';
      } else {
         greeting.innerText = 'Мілич Олег';
      }
      var greeting = document.getElementById('24');
      if (lang === 'en') {
         greeting.innerText = 'Head of the sales department in the Kyiv region';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kierownik działu sprzedaży w obwodzie kijowskim';
      } else {
         greeting.innerText = 'Керівник напрямку продажів в Київській області';
      }
      var greeting = document.getElementById('25');
      if (lang === 'en') {
         greeting.innerText = 'Sylina Maria';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sylina Maria';
      } else {
         greeting.innerText = 'Силіна Марія';
      }
      var greeting = document.getElementById('26');
      if (lang === 'en') {
         greeting.innerText = 'Head of the sales department in Kyiv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kierownik działu sprzedaży w Kijowie';
      } else {
         greeting.innerText = 'Керівник напрямку продажів в Києві';
      }
      //===============================================================================================================
      var greeting = document.getElementById('27');
      if (lang === 'en') {
         greeting.innerText = 'Order a call';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów rozmowę';
      } else {
         greeting.innerText = 'Замовити дзвінок';
      }
      var greeting = document.getElementById('28');
      if (lang === 'en') {
         greeting.innerText = 'Order a call and our manager will contact you soon';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów połączenie, a nasz menedżer wkrótce się z Tobą skontaktuje';
      } else {
         greeting.innerText = 'Замовте дзвінок та наш менеджер зв`яжеться з вами найближчим часом';
      }
      var greeting = document.getElementById('29');
      if (lang === 'en') {
         greeting.innerText = 'I give my consent for processing';
      } else if (lang === 'pl') {
         greeting.innerText = 'Wyrażam zgodę na przetwarzanie';
      } else {
         greeting.innerText = 'Даю свою згоду на обробку';
      }
      var greeting = document.getElementById('30');
      if (lang === 'en') {
         greeting.innerText = 'personal data';
      } else if (lang === 'pl') {
         greeting.innerText = 'dane osobiste';
      } else {
         greeting.innerText = 'персональних даних';
      }
      var greeting = document.getElementById('button-submit');
      if (lang === 'en') {
         greeting.innerText = 'Order a call';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów rozmowę';
      } else {
         greeting.innerText = 'Замовити дзвінок';
      }
      var greeting = document.getElementById('31');
      if (lang === 'en') {
         greeting.innerText = 'Name';
      } else if (lang === 'pl') {
         greeting.innerText = 'Imię';
      } else {
         greeting.innerText = 'Ім`я';
      }
      var greeting = document.getElementById('32');
      if (lang === 'en') {
         greeting.innerText = 'Phone';
      } else if (lang === 'pl') {
         greeting.innerText = 'Telefon';
      } else {
         greeting.innerText = 'Телефон';
      }
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