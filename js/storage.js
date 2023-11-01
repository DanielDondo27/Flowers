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
         greeting.innerText = 'Our warehouses | Demo';
      } else if (lang === 'pl') {
         greeting.innerText = 'Nasze magazyny | Demo';
      } else {
         greeting.innerText = 'Наші склади | Demo';
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
         greeting.innerText = 'Kyiv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kijów';
      } else {
         greeting.innerText = 'Київ';
      }
      var greeting = document.getElementById('11');
      if (lang === 'en') {
         greeting.innerText = 'Lviv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Lwów';
      } else {
         greeting.innerText = 'Львів';
      }
      var greeting = document.getElementById('12');
      if (lang === 'en') {
         greeting.innerText = 'Odesa';
      } else if (lang === 'pl') {
         greeting.innerText = 'Odessa';
      } else {
         greeting.innerText = 'Одеса';
      }
      var greeting = document.getElementById('13');
      if (lang === 'en') {
         greeting.innerText = 'Cherkasy';
      } else if (lang === 'pl') {
         greeting.innerText = 'Czerkasy';
      } else {
         greeting.innerText = 'Черкаси';
      }
      var greeting = document.getElementById('14');
      if (lang === 'en') {
         greeting.innerText = 'Kharkiv';
      } else if (lang === 'pl') {
         greeting.innerText = 'Charków';
      } else {
         greeting.innerText = 'Харків';
      }
      var greeting = document.getElementById('15');
      if (lang === 'en') {
         greeting.innerText = 'Zaporizhzhia';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zaporoże';
      } else {
         greeting.innerText = 'Запоріжжя';
      }
      //===============================================================================================================
      var greeting = document.getElementById('16');
      if (lang === 'en') {
         greeting.innerText = 'St. Lavrska, 15';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Ławrska, 15';
      } else {
         greeting.innerText = 'вул. Лаврська, 15';
      }
      var greeting = document.getElementById('17');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('18');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('19');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('21');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('22');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      var greeting = document.getElementById('20');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      //===============================================================================================================
      var greeting = document.getElementById('23');
      if (lang === 'en') {
         greeting.innerText = 'St. Protasiv Yar, 23-a';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Protasiw Jar, 23-a';
      } else {
         greeting.innerText = 'вул. Протасів Яр, 23-a';
      }
      var greeting = document.getElementById('24');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('25');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('26');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('28');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('29');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      var greeting = document.getElementById('27');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      //===============================================================================================================
      var greeting = document.getElementById('30');
      if (lang === 'en') {
         greeting.innerText = 'prov. Slavgorodskyi, 22';
      } else if (lang === 'pl') {
         greeting.innerText = 'lane Slavgorodskyi, 22';
      } else {
         greeting.innerText = 'пров. Славгородський, 22';
      }
      var greeting = document.getElementById('31');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('32');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('33');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('35');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('36');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      var greeting = document.getElementById('34');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      //===============================================================================================================
      var greeting = document.getElementById('37');
      if (lang === 'en') {
         greeting.innerText = 'prov. Slavgorodskyi, 22';
      } else if (lang === 'pl') {
         greeting.innerText = 'lane Slavgorodskyi, 22';
      } else {
         greeting.innerText = 'пров. Славгородський, 22';
      }
      var greeting = document.getElementById('38');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('39');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('40');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('42');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('43');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      var greeting = document.getElementById('41');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      //===============================================================================================================
      var greeting = document.getElementById('44');
      if (lang === 'en') {
         greeting.innerText = 'St. University, 1';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Uniwersytet, 1';
      } else {
         greeting.innerText = 'вул. Університетська, 1';
      }
      var greeting = document.getElementById('45');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('46');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('47');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('48');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('49');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('50');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('51');
      if (lang === 'en') {
         greeting.innerText = 'St. Tadeusha Kostyushka, 11';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Tadeusz Kostyuszka, 11';
      } else {
         greeting.innerText = 'вул. Тадеуша Костюшка, 11';
      }
      var greeting = document.getElementById('52');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('53');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('54');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('55');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('56');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('57');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('58');
      if (lang === 'en') {
         greeting.innerText = 'St. Modesta Mentsynskyi, 8';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Modesta Mencyński, 8';
      } else {
         greeting.innerText = 'вул. Модеста Менцинського, 8';
      }
      var greeting = document.getElementById('59');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('60');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('61');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('62');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('63');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('64');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('65');
      if (lang === 'en') {
         greeting.innerText = 'Rynok square, 1';
      } else if (lang === 'pl') {
         greeting.innerText = 'Plac Rynek, 1';
      } else {
         greeting.innerText = 'площа Ринок, 1';
      }
      var greeting = document.getElementById('66');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('67');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('68');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('69');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('70');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('71');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('72');
      if (lang === 'en') {
         greeting.innerText = 'St. Literary, 1a';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Literacki, 1a';
      } else {
         greeting.innerText = 'вул. Літературна, 1а';
      }
      var greeting = document.getElementById('73');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('74');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('75');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('76');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('77');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('78');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('79');
      if (lang === 'en') {
         greeting.innerText = 'ave. Nebesnoi Sotni, 2';
      } else if (lang === 'pl') {
         greeting.innerText = 'zdrowaśka. Nebesnoi Sotni, 2';
      } else {
         greeting.innerText = 'просп. Небесної Сотні, 2';
      }
      var greeting = document.getElementById('80');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('81');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('82');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('83');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('84');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('85');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('86');
      if (lang === 'en') {
         greeting.innerText = 'ave. Shevchenko, 31';
      } else if (lang === 'pl') {
         greeting.innerText = 'zdrowaśka. Szewczenko, 31';
      } else {
         greeting.innerText = 'просп. Шевченка, 31';
      }
      var greeting = document.getElementById('87');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('88');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('89');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('90');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('91');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('92');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('93');
      if (lang === 'en') {
         greeting.innerText = 'St. Balkivska, 33';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Bałkiwska, 33';
      } else {
         greeting.innerText = 'вул. Балківська, 33';
      }
      var greeting = document.getElementById('94');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('95');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('96');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('97');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('98');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('100');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('101');
      if (lang === 'en') {
         greeting.innerText = 'St. Gagarina, 13';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Gagarina, 13';
      } else {
         greeting.innerText = 'вул. Гагаріна, 13';
      }
      var greeting = document.getElementById('102');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('103');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('104');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('105');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('106');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('107');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('108');
      if (lang === 'en') {
         greeting.innerText = 'St. Smilyanska, 132/3';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Smilyanska, 132/3';
      } else {
         greeting.innerText = 'вул. Смілянська, 132/3';
      }
      var greeting = document.getElementById('109');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('110');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('111');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('112');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('113');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('114');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('115');
      if (lang === 'en') {
         greeting.innerText = 'boul. Shevchenko, 1';
      } else if (lang === 'pl') {
         greeting.innerText = 'bul. Szewczenko, 1';
      } else {
         greeting.innerText = 'бул. Шевченка, 1';
      }
      var greeting = document.getElementById('116');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('117');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('118');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('119');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('120');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('121');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('122');
      if (lang === 'en') {
         greeting.innerText = 'St. Ozerna, 43a';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Ozernej, 43a';
      } else {
         greeting.innerText = 'вул. Озерна, 43a';
      }
      var greeting = document.getElementById('123');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('124');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('125');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('126');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('127');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('128');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('129');
      if (lang === 'en') {
         greeting.innerText = 'St. Hidroparkova, 23a';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Hidroparkowa, 23a';
      } else {
         greeting.innerText = 'вул. Гідропаркова, 23а';
      }
      var greeting = document.getElementById('130');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('131');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('132');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('133');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('134');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('135');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('136');
      if (lang === 'en') {
         greeting.innerText = 'St. Sumska, 35';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Sumska, 35';
      } else {
         greeting.innerText = 'вул. Сумська, 35';
      }
      var greeting = document.getElementById('137');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('138');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('139');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('140');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('141');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('142');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('143');
      if (lang === 'en') {
         greeting.innerText = 'St. Alpine, 4';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. alpejski, 4';
      } else {
         greeting.innerText = 'вул. Альпійська, 4';
      }
      var greeting = document.getElementById('144');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('145');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('146');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('147');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('148');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('149');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('150');
      if (lang === 'en') {
         greeting.innerText = 'St. Naukove Misechko, 35';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Naukowe Miszeczko, 35';
      } else {
         greeting.innerText = 'вул. Наукове Містечко, 35';
      }
      var greeting = document.getElementById('151');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('152');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('153');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('154');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('155');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('156');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('157');
      if (lang === 'en') {
         greeting.innerText = 'St. Vyborzka Street, 8';
      } else if (lang === 'pl') {
         greeting.innerText = 'Św. Wyborzka, 8';
      } else {
         greeting.innerText = 'вул. Виборзька вулиця, 8';
      }
      var greeting = document.getElementById('158');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('159');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('159');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('160');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('161');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('162');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('163');
      if (lang === 'en') {
         greeting.innerText = 'ave. Soborny, 206';
      } else if (lang === 'pl') {
         greeting.innerText = 'zdrowaśka. Soborny, 206';
      } else {
         greeting.innerText = 'просп. Соборний, 206';
      }
      var greeting = document.getElementById('164');
      if (lang === 'en') {
         greeting.innerText = 'Mode of operation:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Tryb działania:';
      } else {
         greeting.innerText = 'Режим роботи:';
      }
      var greeting = document.getElementById('165');
      if (lang === 'en') {
         greeting.innerText = 'Mon-Fri - from 9:00 to 18:00';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pn-Pt - od 9:00 do 18:00';
      } else {
         greeting.innerText = 'Пн-Пт - з 9:00 до 18:00';
      }
      var greeting = document.getElementById('166');
      if (lang === 'en') {
         greeting.innerText = 'Sat-Sun - day off';
      } else if (lang === 'pl') {
         greeting.innerText = 'Sob-Nd - dzień wolny';
      } else {
         greeting.innerText = 'Сб-Нд - вихідний';
      }
      var greeting = document.getElementById('167');
      if (lang === 'en') {
         greeting.innerText = 'Contacts:';
      } else if (lang === 'pl') {
         greeting.innerText = 'Łączność:';
      } else {
         greeting.innerText = 'Контакти:';
      }
      var greeting = document.getElementById('168');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Oleg';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Oleg';
      } else {
         greeting.innerText = '+919191919191 - Олег';
      }
      var greeting = document.getElementById('169');
      if (lang === 'en') {
         greeting.innerText = '+919191919191 - Lesya';
      } else if (lang === 'pl') {
         greeting.innerText = '+919191919191 - Lesia';
      } else {
         greeting.innerText = '+919191919191 - Леся';
      }
      //===============================================================================================================
      var greeting = document.getElementById('170');
      if (lang === 'en') {
         greeting.innerText = 'Our warehouses';
      } else if (lang === 'pl') {
         greeting.innerText = 'Nasze magazyny';
      } else {
         greeting.innerText = 'Наші склади';
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
//========================   Таби   =============================================================================
function initTabs(tabsData, activeClass) {
   const TAB_ITEMS = document.querySelectorAll(tabsData);
   const CLASS = activeClass ? activeClass : "active";
   TAB_ITEMS.forEach(
      (x) =>
      (x.onclick = () => {
         const TAB = document.querySelector(
            `[data-tabsContent="${x.dataset.tabsbutton}"]`
         );
         document.querySelectorAll(`.${CLASS}`).forEach((d) => {
            d.classList.remove(CLASS);
         });
         TAB.classList.add(CLASS);
         x.classList.add(CLASS);
         TAB.querySelector(".content-storage__map_main").classList.add(
            "open"
         );
      })
   );
}
initTabs("[data-tabsButton]", "active");
function initTab(tabData, activeClass) {
   const TAB_ITEMS = document.querySelectorAll(tabData);
   const CLASS = activeClass ? activeClass : "open";
   TAB_ITEMS.forEach(
      (x) =>
      (x.onclick = () => {
         const TAB = document.querySelector(
            `[data-tabContent="${x.dataset.tabbutton}"]`
         );
         document.querySelectorAll(`.${CLASS}`).forEach((d) => {
            d.classList.remove(CLASS);
         });
         TAB.classList.add(CLASS);
         x.classList.add(CLASS);
      })
   );
}
initTab("[data-tabButton]", "open");
//===============================================================================================================
(() => {
   document.body.onload = function () {
      setTimeout(function () {
         var preloader = document.getElementById('preloader');
         if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
         }
      }, 100);
   };
})();