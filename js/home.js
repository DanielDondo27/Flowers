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
         greeting.innerText = 'Main | Demo';
      } else if (lang === 'pl') {
         greeting.innerText = 'Główny | Demo';
      } else {
         greeting.innerText = 'Головна | Demo';
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
         greeting.innerText = 'Order a call';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów rozmowę';
      } else {
         greeting.innerText = 'Замовити дзвінок';
      }
      var greeting = document.getElementById('11');
      if (lang === 'en') {
         greeting.innerText = 'Order a call and our manager will contact you soon';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów połączenie, a nasz menedżer wkrótce się z Tobą skontaktuje';
      } else {
         greeting.innerText = 'Замовте дзвінок та наш менеджер зв`яжеться з вами найближчим часом';
      }
      var greeting = document.getElementById('12');
      if (lang === 'en') {
         greeting.innerText = 'I give my consent for processing';
      } else if (lang === 'pl') {
         greeting.innerText = 'Wyrażam zgodę na przetwarzanie';
      } else {
         greeting.innerText = 'Даю свою згоду на обробку';
      }
      var greeting = document.getElementById('13');
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
      var greeting = document.getElementById('14');
      if (lang === 'en') {
         greeting.innerText = 'Name';
      } else if (lang === 'pl') {
         greeting.innerText = 'Imię';
      } else {
         greeting.innerText = 'Ім`я';
      }
      var greeting = document.getElementById('15');
      if (lang === 'en') {
         greeting.innerText = 'Phone';
      } else if (lang === 'pl') {
         greeting.innerText = 'Telefon';
      } else {
         greeting.innerText = 'Телефон';
      }
      //===============================================================================================================
      var greeting = document.getElementById('16');
      if (lang === 'en') {
         greeting.innerText = 'Basic tariffs';
      } else if (lang === 'pl') {
         greeting.innerText = 'Taryfy podstawowe';
      } else {
         greeting.innerText = 'Основні тарифи';
      }

      var greeting = document.getElementById('17');
      if (lang === 'en') {
         greeting.innerText = 'Download the price';
      } else if (lang === 'pl') {
         greeting.innerText = 'Pobierz price';
      } else {
         greeting.innerText = 'Завантажити прайс';
      }
      var greeting = document.getElementById('18');
      if (lang === 'en') {
         greeting.innerText = 'from $5.7/1 kg';
      } else if (lang === 'pl') {
         greeting.innerText = 'od 5,7 USD/1 kg';
      } else {
         greeting.innerText = 'від 5.7$/1 кг';
      }
      var greeting = document.getElementById('19');
      if (lang === 'en') {
         greeting.innerText = 'Colombia, Ecuador, Kenya';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kolumbia, Ekwador, Kenia';
      } else {
         greeting.innerText = 'Колумбія, Еквадор, Кенія';
      }
      var greeting = document.getElementById('20');
      if (lang === 'en') {
         greeting.innerText = 'The order is delivered to the door';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamówienie dostarczane jest pod drzwi';
      } else {
         greeting.innerText = 'Доставка замовлення здійснюється до дверей';
      }
      var greeting = document.getElementById('21');
      if (lang === 'en') {
         greeting.innerText = 'from $3.6/1 kg';
      } else if (lang === 'pl') {
         greeting.innerText = 'od 3,6 USD/1 kg';
      } else {
         greeting.innerText = 'від 3.6$/1 кг';
      }
      var greeting = document.getElementById('22');
      if (lang === 'en') {
         greeting.innerText = 'Holland';
      } else if (lang === 'pl') {
         greeting.innerText = 'Holandia';
      } else {
         greeting.innerText = 'Голандія';
      }
      var greeting = document.getElementById('23');
      if (lang === 'en') {
         greeting.innerText = 'The order is delivered to the door';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamówienie dostarczane jest pod drzwi';
      } else {
         greeting.innerText = 'Доставка замовлення здійснюється до дверей';
      }
      //===============================================================================================================
      var greeting = document.getElementById('24');
      if (lang === 'en') {
         greeting.innerText = 'About us in numbers';
      } else if (lang === 'pl') {
         greeting.innerText = 'O nas w liczbach';
      } else {
         greeting.innerText = 'Про нас в цифрах';
      }
      var greeting = document.getElementById('25');
      if (lang === 'en') {
         greeting.innerText = '7 years';
      } else if (lang === 'pl') {
         greeting.innerText = '7 lat';
      } else {
         greeting.innerText = '7 років';
      }
      var greeting = document.getElementById('26');
      if (lang === 'en') {
         greeting.innerText = 'We have been working successfully for more than seven years';
      } else if (lang === 'pl') {
         greeting.innerText = 'Działamy z sukcesem już od ponad siedmiu lat';
      } else {
         greeting.innerText = 'Успішно працюємо вже більше семи років';
      }
      var greeting = document.getElementById('27');
      if (lang === 'en') {
         greeting.innerText = '775 tons';
      } else if (lang === 'pl') {
         greeting.innerText = '775 ton';
      } else {
         greeting.innerText = '775 тонн';
      }
      var greeting = document.getElementById('28');
      if (lang === 'en') {
         greeting.innerText = 'We transported almost 780 tons of cargo';
      } else if (lang === 'pl') {
         greeting.innerText = 'Przewieźliśmy prawie 780 ton ładunku';
      } else {
         greeting.innerText = 'Ми перевезли майже 780 тонн вантажy';
      }
      var greeting = document.getElementById('29');
      if (lang === 'en') {
         greeting.innerText = 'Average percentage of order fulfillment: 94%';
      } else if (lang === 'pl') {
         greeting.innerText = 'Średni procent realizacji zamówienia: 94%';
      } else {
         greeting.innerText = 'Середній відсоток виконання замовлення: 94%';
      }
      var greeting = document.getElementById('30');
      if (lang === 'en') {
         greeting.innerText = '14 countries';
      } else if (lang === 'pl') {
         greeting.innerText = '14 krajów';
      } else {
         greeting.innerText = '14 країн';
      }
      var greeting = document.getElementById('31');
      if (lang === 'en') {
         greeting.innerText = 'We carry out transportation from 14 countries';
      } else if (lang === 'pl') {
         greeting.innerText = 'Realizujemy transporty z 14 krajów';
      } else {
         greeting.innerText = 'Здійснюємо перевезення з 14 країн';
      }
      var greeting = document.getElementById('32');
      if (lang === 'en') {
         greeting.innerText = '+2/8 degrees';
      } else if (lang === 'pl') {
         greeting.innerText = '+2/8 stopni';
      } else {
         greeting.innerText = '+2/8 градуси';
      }
      var greeting = document.getElementById('33');
      if (lang === 'en') {
         greeting.innerText = 'Compliance with temperatures during transportation';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zgodność z temperaturami podczas transportu';
      } else {
         greeting.innerText = 'Дотримання температур під час перевезення';
      }
      var greeting = document.getElementById('34');
      if (lang === 'en') {
         greeting.innerText = '174 clients';
      } else if (lang === 'pl') {
         greeting.innerText = '174 klientów';
      } else {
         greeting.innerText = '174 клієнтів';
      }
      var greeting = document.getElementById('35');
      if (lang === 'en') {
         greeting.innerText = '174 clients work with us';
      } else if (lang === 'pl') {
         greeting.innerText = 'Współpracuje z nami 174 klientów';
      } else {
         greeting.innerText = 'З нами працюють 174 клієнтів';
      }
      //===============================================================================================================
      var greeting = document.getElementById('36');
      if (lang === 'en') {
         greeting.innerText = 'Where do we get our flowers from?';
      } else if (lang === 'pl') {
         greeting.innerText = 'Skąd bierzemy nasze kwiaty?';
      } else {
         greeting.innerText = 'Звідки ми веземо наші квіти?';
      }
      var greeting = document.getElementById('37');
      if (lang === 'en') {
         greeting.innerText = 'At its core, ribatext is an alternative to traditional lorem ipsum';
      } else if (lang === 'pl') {
         greeting.innerText = 'W swej istocie ribatext jest alternatywą dla tradycyjnego lorem ipsum';
      } else {
         greeting.innerText = 'За своєю суттю рибатекст є альтернативою традиційному lorem ipsum';
      }
      var greeting = document.getElementById('38');
      if (lang === 'en') {
         greeting.innerText = 'The ribatext site will help a designer, typist, webmaster to generate several paragraphs of more or less meaningful fish text in English.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Strona ribatext pomoże projektantowi, maszynie do pisania, webmasterowi wygenerować kilka akapitów mniej lub bardziej znaczącego tekstu rybnego w języku polskim.';
      } else {
         greeting.innerText = 'Сайт рибатекст допоможе дизайнеру, верстальнику, вебмайстру згенерувати кілька абзаців більш-менш осмисленого тексту риби українською мовою.';
      }
      var greeting = document.getElementById('39');
      if (lang === 'en') {
         greeting.innerText = 'We bring flowers and plants in pots from Ecuador, Kenya, Colombia, Chile, Holland, Israel and deliver them to Ukraine.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kwiaty i rośliny w doniczkach sprowadzamy z Ekwadoru, Kenii, Kolumbii, Chile, Holandii, Izraela i dostarczamy na Ukrainę.';
      } else {
         greeting.innerText = 'Ми привозимо квіти та рослини у горщиках з Еквадору, Кенії, Колумбії, Чилі, Голландії, Ізраїлю та доставляємо їх в Україну.';
      }
      var greeting = document.getElementById('40');
      if (lang === 'en') {
         greeting.innerText = 'Contact us';
      } else if (lang === 'pl') {
         greeting.innerText = 'Skontaktuj się z nami';
      } else {
         greeting.innerText = 'Зв`язатися з нами';
      }
      //===============================================================================================================
      var greeting = document.getElementById('41');
      if (lang === 'en') {
         greeting.innerText = 'Delivery to Ukraine takes 1 to 2 days.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa na Ukrainę trwa od 1 do 2 dni.';
      } else {
         greeting.innerText = 'Доставка в Україну займає від 1 до 2 днів.';
      }
      var greeting = document.getElementById('42');
      if (lang === 'en') {
         greeting.innerText = 'Delivery to Ukraine takes 1 to 2 days.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa na Ukrainę trwa od 1 do 2 dni.';
      } else {
         greeting.innerText = 'Доставка в Україну займає від 1 до 2 днів.';
      }
      var greeting = document.getElementById('43');
      if (lang === 'en') {
         greeting.innerText = 'Delivery to Ukraine takes 1 to 2 days.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa na Ukrainę trwa od 1 do 2 dni.';
      } else {
         greeting.innerText = 'Доставка в Україну займає від 1 до 2 днів.';
      }
      var greeting = document.getElementById('44');
      if (lang === 'en') {
         greeting.innerText = 'Delivery to Ukraine takes 1 to 2 days.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa na Ukrainę trwa od 1 do 2 dni.';
      } else {
         greeting.innerText = 'Доставка в Україну займає від 1 до 2 днів.';
      }
      var greeting = document.getElementById('45');
      if (lang === 'en') {
         greeting.innerText = 'Delivery to Ukraine takes 1 to 2 days.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa na Ukrainę trwa od 1 do 2 dni.';
      } else {
         greeting.innerText = 'Доставка в Україну займає від 1 до 2 днів.';
      }
      var greeting = document.getElementById('46');
      if (lang === 'en') {
         greeting.innerText = 'Delivery to Ukraine takes 1 to 2 days.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa na Ukrainę trwa od 1 do 2 dni.';
      } else {
         greeting.innerText = 'Доставка в Україну займає від 1 до 2 днів.';
      }
      //===============================================================================================================
      var greeting = document.getElementById('47');
      if (lang === 'en') {
         greeting.innerText = 'Delivery calculator';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kalkulator dostawy';
      } else {
         greeting.innerText = 'Калькулятор доставки';
      }
      var greeting = document.getElementById('48');
      if (lang === 'en') {
         greeting.innerText = 'To calculate the delivery date, select the day you plan to place the order';
      } else if (lang === 'pl') {
         greeting.innerText = 'Aby obliczyć termin dostawy, wybierz dzień, w którym planujesz złożyć zamówienie';
      } else {
         greeting.innerText = 'Щоб розрахувати дату доставки оберіть день, коли плануєте зробити замовлення';
      }
      var greeting = document.getElementById('49');
      if (lang === 'en') {
         greeting.innerText = 'Select the country for which you want to know the delivery time';
      } else if (lang === 'pl') {
         greeting.innerText = 'Wybierz kraj, dla którego chcesz poznać czas dostawy';
      } else {
         greeting.innerText = 'Виберіть країну, по якій хочете дізнатися час доставки';
      }
      var greeting = document.getElementById('finish');
      if (lang === 'en') {
         greeting.innerText = 'Calculate';
      } else if (lang === 'pl') {
         greeting.innerText = 'Oblicz';
      } else {
         greeting.innerText = 'Прорахувати';
      }
      var greeting = document.getElementById('clear');
      if (lang === 'en') {
         greeting.innerText = 'Remove';
      } else if (lang === 'pl') {
         greeting.innerText = 'Usunąć';
      } else {
         greeting.innerText = 'Очистити';
      }
      //===============================================================================================================
      var greeting = document.getElementById('50');
      if (lang === 'en') {
         greeting.innerText = 'Ecuador';
      } else if (lang === 'pl') {
         greeting.innerText = 'Ekwador';
      } else {
         greeting.innerText = 'Еквадора';
      }
      var greeting = document.getElementById('51');
      if (lang === 'en') {
         greeting.innerText = 'Kenya';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kenia';
      } else {
         greeting.innerText = 'Кенія';
      }
      var greeting = document.getElementById('52');
      if (lang === 'en') {
         greeting.innerText = 'Colombia';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kolumbia';
      } else {
         greeting.innerText = 'Колумбія';
      }
      var greeting = document.getElementById('53');
      if (lang === 'en') {
         greeting.innerText = 'Chile';
      } else if (lang === 'pl') {
         greeting.innerText = 'Chile';
      } else {
         greeting.innerText = 'Чилі';
      }
      var greeting = document.getElementById('54');
      if (lang === 'en') {
         greeting.innerText = 'Holland';
      } else if (lang === 'pl') {
         greeting.innerText = 'Holandia';
      } else {
         greeting.innerText = 'Голландія';
      }
      var greeting = document.getElementById('55');
      if (lang === 'en') {
         greeting.innerText = 'Israel';
      } else if (lang === 'pl') {
         greeting.innerText = 'Izrael';
      } else {
         greeting.innerText = 'Ізраїль';
      }
      //===============================================================================================================
      var greeting = document.getElementById('56');
      if (lang === 'en') {
         greeting.innerText = 'Ecuador';
      } else if (lang === 'pl') {
         greeting.innerText = 'Ekwador';
      } else {
         greeting.innerText = 'Еквадора';
      }
      var greeting = document.getElementById('57');
      if (lang === 'en') {
         greeting.innerText = 'Order day';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dzień zamówienia';
      } else {
         greeting.innerText = 'День замовлення';
      }
      var greeting = document.getElementById('58');
      if (lang === 'en') {
         greeting.innerText = 'End of order collection';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koniec odbioru zamówienia';
      } else {
         greeting.innerText = 'Кінець збору замовлень';
      }
      var greeting = document.getElementById('59');
      if (lang === 'en') {
         greeting.innerText = 'to';
      } else if (lang === 'pl') {
         greeting.innerText = 'do';
      } else {
         greeting.innerText = 'до';
      }
      var greeting = document.getElementById('60');
      if (lang === 'en') {
         greeting.innerText = 'Delivery day';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dzień dostawy';
      } else {
         greeting.innerText = 'День доставки';
      }
      var greeting = document.getElementById('61');
      if (lang === 'en') {
         greeting.innerText = 'Collection of orders';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zbieranie zamówień';
      } else {
         greeting.innerText = 'Збір замовлень';
      }
      var greeting = document.getElementById('62');
      if (lang === 'en') {
         greeting.innerText = 'Delivery 7 days';
      } else if (lang === 'pl') {
         greeting.innerText = 'Dostawa 7 dni';
      } else {
         greeting.innerText = 'Доставка 7 днів';
      }
      var greeting = document.getElementById('63');
      if (lang === 'en') {
         greeting.innerText = 'august';
      } else if (lang === 'pl') {
         greeting.innerText = 'sierpień';
      } else {
         greeting.innerText = 'серпень';
      }
      var greeting = document.getElementById('64');
      if (lang === 'en') {
         greeting.innerText = 'august';
      } else if (lang === 'pl') {
         greeting.innerText = 'sierpień';
      } else {
         greeting.innerText = 'серпень';
      }
      var greeting = document.getElementById('65');
      if (lang === 'en') {
         greeting.innerText = 'august';
      } else if (lang === 'pl') {
         greeting.innerText = 'sierpień';
      } else {
         greeting.innerText = 'серпень';
      }
      //===============================================================================================================
      var greeting = document.getElementById('66');
      if (lang === 'en') {
         greeting.innerText = 'Air transport of flowers';
      } else if (lang === 'pl') {
         greeting.innerText = 'Transport lotniczy kwiatów';
      } else {
         greeting.innerText = 'Авіаперевезення квітів';
      }
      var greeting = document.getElementById('67');
      if (lang === 'en') {
         greeting.innerText = 'We are engaged only in AIR transportation of freshly cut flowers and plants from';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zajmujemy się wyłącznie transportem LOTNICZYM świeżo ciętych kwiatów i roślin z';
      } else {
         greeting.innerText = 'Займаємося тільки АВІА перевезенням свіжо зрізаних квітів та рослин з';
      }
      var greeting = document.getElementById('68');
      if (lang === 'en') {
         greeting.innerText = 'Ecuador';
      } else if (lang === 'pl') {
         greeting.innerText = 'Ekwador';
      } else {
         greeting.innerText = 'Еквадору';
      }
      var greeting = document.getElementById('69');
      if (lang === 'en') {
         greeting.innerText = 'Kenya';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kenia';
      } else {
         greeting.innerText = 'Кенія';
      }
      var greeting = document.getElementById('70');
      if (lang === 'en') {
         greeting.innerText = 'Colombia';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kolumbia';
      } else {
         greeting.innerText = 'Колумбія';
      }
      var greeting = document.getElementById('71');
      if (lang === 'en') {
         greeting.innerText = 'Chile';
      } else if (lang === 'pl') {
         greeting.innerText = 'Chile';
      } else {
         greeting.innerText = 'Чилі';
      }
      var greeting = document.getElementById('72');
      if (lang === 'en') {
         greeting.innerText = 'Holland';
      } else if (lang === 'pl') {
         greeting.innerText = 'Holandia';
      } else {
         greeting.innerText = 'Голландія';
      }
      var greeting = document.getElementById('73');
      if (lang === 'en') {
         greeting.innerText = 'Israel';
      } else if (lang === 'pl') {
         greeting.innerText = 'Izrael';
      } else {
         greeting.innerText = 'Ізраїль';
      }
      var greeting = document.getElementById('74');
      if (lang === 'en') {
         greeting.innerText = 'to the final customer.';
      } else if (lang === 'pl') {
         greeting.innerText = 'do klienta końcowego.';
      } else {
         greeting.innerText = 'до кінцевого замовника.';
      }
      var greeting = document.getElementById('75');
      if (lang === 'en') {
         greeting.innerText = 'The maximum delivery time is 7 days from the moment of the order.';
      } else if (lang === 'pl') {
         greeting.innerText = 'Maksymalny czas realizacji to 7 dni od złożenia zamówienia.';
      } else {
         greeting.innerText = 'Максимальний термін доставки – 7 днів від замовлення.';
      }
      var greeting = document.getElementById('76');
      if (lang === 'en') {
         greeting.innerText = 'Contact us';
      } else if (lang === 'pl') {
         greeting.innerText = 'Skontaktuj się z nami';
      } else {
         greeting.innerText = 'Зв`язатися з нами';
      }
      //===============================================================================================================
      var greeting = document.getElementById('77');
      if (lang === 'en') {
         greeting.innerText = 'Ecuador';
      } else if (lang === 'pl') {
         greeting.innerText = 'Ekwador';
      } else {
         greeting.innerText = 'Еквадору';
      }
      var greeting = document.getElementById('78');
      if (lang === 'en') {
         greeting.innerText = 'Kenya';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kenia';
      } else {
         greeting.innerText = 'Кенія';
      }
      var greeting = document.getElementById('79');
      if (lang === 'en') {
         greeting.innerText = 'Colombia';
      } else if (lang === 'pl') {
         greeting.innerText = 'Kolumbia';
      } else {
         greeting.innerText = 'Колумбія';
      }
      var greeting = document.getElementById('80');
      if (lang === 'en') {
         greeting.innerText = 'Chile';
      } else if (lang === 'pl') {
         greeting.innerText = 'Chile';
      } else {
         greeting.innerText = 'Чилі';
      }
      var greeting = document.getElementById('81');
      if (lang === 'en') {
         greeting.innerText = 'Holland';
      } else if (lang === 'pl') {
         greeting.innerText = 'Holandia';
      } else {
         greeting.innerText = 'Голландія';
      }
      var greeting = document.getElementById('82');
      if (lang === 'en') {
         greeting.innerText = 'Israel';
      } else if (lang === 'pl') {
         greeting.innerText = 'Izrael';
      } else {
         greeting.innerText = 'Ізраїль';
      }
      //===============================================================================================================
      var greeting = document.getElementById('83');
      if (lang === 'en') {
         greeting.innerText = 'The cost of delivery of 1 full box is from $105';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koszt dostawy 1 pełnego kartonu wynosi od 105 USD';
      } else {
         greeting.innerText = 'Вартість доставки 1 фулбокса від 105 $';
      }
      var greeting = document.getElementById('84');
      if (lang === 'en') {
         greeting.innerText = 'The cost of delivery of 1 full box is from $105';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koszt dostawy 1 pełnego kartonu wynosi od 105 USD';
      } else {
         greeting.innerText = 'Вартість доставки 1 фулбокса від 105 $';
      }
      var greeting = document.getElementById('85');
      if (lang === 'en') {
         greeting.innerText = 'The cost of delivery of 1 full box is from $105';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koszt dostawy 1 pełnego kartonu wynosi od 105 USD';
      } else {
         greeting.innerText = 'Вартість доставки 1 фулбокса від 105 $';
      }
      var greeting = document.getElementById('86');
      if (lang === 'en') {
         greeting.innerText = 'The cost of delivery of 1 full box is from $105';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koszt dostawy 1 pełnego kartonu wynosi od 105 USD';
      } else {
         greeting.innerText = 'Вартість доставки 1 фулбокса від 105 $';
      }
      var greeting = document.getElementById('87');
      if (lang === 'en') {
         greeting.innerText = 'The cost of delivery of 1 full box is from $105';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koszt dostawy 1 pełnego kartonu wynosi od 105 USD';
      } else {
         greeting.innerText = 'Вартість доставки 1 фулбокса від 105 $';
      }
      var greeting = document.getElementById('88');
      if (lang === 'en') {
         greeting.innerText = 'The cost of delivery of 1 full box is from $105';
      } else if (lang === 'pl') {
         greeting.innerText = 'Koszt dostawy 1 pełnego kartonu wynosi od 105 USD';
      } else {
         greeting.innerText = 'Вартість доставки 1 фулбокса від 105 $';
      }
      //===============================================================================================================
      var greeting = document.getElementById('89');
      if (lang === 'en') {
         greeting.innerText = 'Order a call';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów rozmowę';
      } else {
         greeting.innerText = 'Замовити дзвінок';
      }
      var greeting = document.getElementById('90');
      if (lang === 'en') {
         greeting.innerText = 'Order a call and our manager will contact you soon';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów połączenie, a nasz menedżer wkrótce się z Tobą skontaktuje';
      } else {
         greeting.innerText = 'Замовте дзвінок та наш менеджер зв`яжеться з вами найближчим часом';
      }
      //===============================================================================================================
      var greeting = document.getElementById('91');
      if (lang === 'en') {
         greeting.innerText = 'I give my consent for processing';
      } else if (lang === 'pl') {
         greeting.innerText = 'Wyrażam zgodę na przetwarzanie';
      } else {
         greeting.innerText = 'Даю свою згоду на обробку';
      }
      var greeting = document.getElementById('92');
      if (lang === 'en') {
         greeting.innerText = 'personal data';
      } else if (lang === 'pl') {
         greeting.innerText = 'dane osobiste';
      } else {
         greeting.innerText = 'персональних даних';
      }
      var greeting = document.getElementById('button-submit-popup');
      if (lang === 'en') {
         greeting.innerText = 'Order a call';
      } else if (lang === 'pl') {
         greeting.innerText = 'Zamów rozmowę';
      } else {
         greeting.innerText = 'Замовити дзвінок';
      }
      var greeting = document.getElementById('93');
      if (lang === 'en') {
         greeting.innerText = 'Name';
      } else if (lang === 'pl') {
         greeting.innerText = 'Imię';
      } else {
         greeting.innerText = 'Ім`я';
      }
      var greeting = document.getElementById('94');
      if (lang === 'en') {
         greeting.innerText = 'Phone';
      } else if (lang === 'pl') {
         greeting.innerText = 'Telefon';
      } else {
         greeting.innerText = 'Телефон';
      }
   }
   //===============================================================================================================
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
//===============================================================================================================
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
      })
   );
}
initTabs("[data-tabsButton]", "active");
//===============================================================================================================
function initTab(tabData, activeClass) {
   const TAB_ITEMS = document.querySelectorAll(tabData);
   const CLASS = activeClass ? activeClass : "open";
   TAB_ITEMS.forEach(
      (x) =>
      (x.onclick = () => {
         const TAB = document.querySelector(
            `[data-tab-Content="${x.dataset.tabbutton}"]`
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