function stylesSetup() {
  var theme = document.getElementsByTagName('link')[0];

  if (screen.width > screen.height) {
      theme.setAttribute('href', 'styles.css');
  } else {
      theme.setAttribute('href', 'styles-mobile.css');
  }
}

function backgroundChange() {
  var randimg1 =Math.floor(Math.random()*34) + 1;
  var randimg2 =Math.floor(Math.random()*34) + 1;
  document.body.background = 'background/'+ randimg1 + '.jpg';
  document.getElementById('header').style.backgroundImage='url(background/'+ randimg2 + '.jpg)';
}

function answerGenerator() {
  var randimg = Math.floor(Math.random()*286) + 1;
  document.getElementById('image').src = 'answer/'+ randimg + '.jpg';

  predictions = [
    "Родился и ничего не понимаю",
    "Персики - хорошая идея",
    "Если вы не знаете, что делать, можно пойти к коту",
    "Меня тошнит от новостей",
    "Мастурбация один из столпов мира прям",
    "Людям очень комфортно с пивом",
    "Количество людей, которые трахают тебя, зависит только от тебя",
    "Поверь, ты можешь стать немного толще",
    "Небо — это наклонная доска для голубей.",
    "Мы все ошарашены жизнью",
    "Люди кричали на меня, и я немного устал",
    "Мне очень весело, но я не счастлив.",
    "С помощью дерьма я пытаюсь осуществить свою мечту",
    "Произошла ошибка при попытке выяснить, что вы делаете.",
    "Я очень близок к тому, чтобы увидеть себя нищим.",
    "Пришло время встретить темную и вечную черную ненависть",
    "Имейте в виду, что вы пират.",
    "Используйте свободное время, чтобы нарисовать котика",
    "В мире много неудачи, есть из чего выбрать",
    "К тридцатидвухлетнему возрасту наступает сильная усталость.",
    "На самом деле поддерживать крышу в рабочем состоянии очень сложно.",
    "Каждое нажатие клавиши является ключом к пути, по которому идет дьявол.",
    "Волны очень взволнованы",
    "Денежка пропала, заблудилась в волшебстве",
    "Жизнь - это просто дороговизна дорогого.",
    "Если ты умный безумец, ты крутой, дай им знать.",
    "Спокойной ночи, пожалуйста",
    "С нетерпением жду братьев-инопланетян",
    "Хочется кошмарить",
    "Быть сильным мужчиной - значит быть женщиной",
    "Город Санкт-Петербург - одно из самых сложных мест, которые вам предстоит преодолеть.",
    "Есть два типа воды: вода, вода и вода.",
    "Страдания России идут одно за другим, одно за другим, одно за другим.",
    "Избавление от безумия - самое безумие",
    "Не хочу быть злым, но не могу себе этого позволить",
    "Просто танцуй, как тысяча монстров, и выгляди как тысяча монстров",
    "Нанесение ударов самому себе означает обладание самим собой",
    "Вы сороконожка, тетя.",
    "Если у вас есть разум, выключите его.",
    "Аниме - это что-то вроде объятий",
    "Это тот момент, когда нам поставили диагноз «Россия».",
    "Боже мой, загрузи немного аниме.",
    "Если вы решите ругаться, вы не сможете закончить.",
    "Станьте лесом чувств",
    "Лучший способ привлечь хорошую девушку - соблазнить ее парня.",
    "Если у вас есть проблемы с психикой, привет.",
    "Если ты захочешь позвонить мне, тебе будет очень больно.",
    "Нет ничего лучше, чем держать свой мозг в голове",
    "Имейте в виду, что вам не нужно торопиться вставать с постели.",
    "Со мной все в порядке, но я устал плакать.",
    "Мы сейчас очень молоды и находимся в аварийном состоянии.",
    "Кошачья любовь коснется тебя",
    "Следующий шаг - лучший способ упасть.",
    "Использовать Интернет - не лучшая идея.",
    "Лягушек можно доить",
    "Пусть вам будет известно, что вы единственный и неповторимый.",
    "Посреди ночи телефон полон волшебства.",
    "Самое главное, что вы можете облажаться и оправдать свои ожидания.",
    "Если вы были в Интернете, вы уже мертвы, вот так.",
    "Когда кошка счастлива, она переворачивает растение",
    "Cегодня вечером ты жираф",
    "Я хочу поехать в аэропорт и улететь от себя",
    "Есть много людей, которые любят тебя.",
    "Наш долг - заварить чашку мятного чая.",
    "Как известно, тыква",
    "Отпустите Волнение и позвольте себе съесть ерунду.",
    "Похоже, я доживу до конца своей жизни.",
    "круассаны как источник магии",
    "Если будет уголовное дело, будет ли это ваше?",
    "Будь спокоен и вооружен",
    "Самая важная часть вашего знака зодиака - это сумасшествие и бросание камней в людей.",
    "А что касается втирания соли в мои раны - ох!",
    "Какого хрена ты делаешь со своей ДНК",
    "Последнее, чем вы хотите зарабатывать на жизнь, - это работать.",
    "Из хороших людей в России делают заливное",
    "Это нормальный образ жизни - быть счастливым после девятого завтрака и нескольких километров сна.",
    "Что хорошего в человеке, если он не хочет быть кокосом?",
    "Господи, мы ничего не делаем.",
    "От избытка сердца говорят уста.",
    "Если вы хотите пасть в бездну одиночества, вам нужно обратиться в сферу знаний.",
    "Утром первого дня недели надежды нет.",
    "Мы все в жанре анекдота",
    "Самая красивая цель - увидеть психопустоту",
    "лучше злиться, чем злиться.",
    "Человек есть личность, а собака - необходимость.",
    "Бывают времена, когда Бог светит на голову. Бывают времена, когда тебя выдолбывают.",
    "Первое, что нужно сделать, это выйти на пенсию, а затем лечь спать",
    "Не будь придурком, проси помощи",
    "И явился мне Ангел Господень и сказал мне: «сейчас самое время поесть пельменей».",
    "Есть много наборов, чтобы ты мог собрать какую-нибудь хрень.",
    "Моя фотосессия - это что-то вроде автомобильной аварии, время от времени случается.",
    "Если тебе больно, это ты",
    "Мужчины должны жить в соответствии с принципами аниме",
    "Вам будет скучно в месте, где у вас нет трудностей.",
    "Важно не переборщить с составом семьи.",
    "Оставайся увлажненным, прохладным и комфортным",
    "Конец человечества - главная цель человечества.",
    "Давайте уважать безупречную красоту и грациозность гусей",
    "Выйдешь наружу, найдешь много людей, будешь мучиться",
    "Каким бы хорошим ни был человек, он вырастет.",
    "Независимо от того, кто вы, вы никогда не узнаете, кто вы.",
    "За последний год прошло много лет.",
    "В Библии нет такого понятия, как «спокойной ночи».",
    "предстоит долгая игра в пиво",
    "обвинительный падеж",
    "волк - это не волк",
    "Вы уже думаете, как усложнить себе жизнь?",
    "Если вы хотите достичь мира, вам нужно покоиться с миром.",
    "кошка такая: нет, нет, нет, нет, да, да.",
    "Скоро тебе будет весело.",
    "Хочу сказать вам, что я бы хотел снег - из сыра",
    "эта жизнь полна образов и воображения, и она улыбается и вздыхает - какой беспорядок",
    "Ваша нелепая и дикая роль - пастух, который пасет себя.",
    "бога съесть очень сложно",
    "Жизнь - просто фотосессия с грустными людьми",
    "В мире много людей, которые живут со скоростью арбуза",
    "Если хочешь быть придурком, я буду рядом с тобой.",
    "Вы хорошо умеете повторно использовать свое разбитое сердце: вам нужно уметь это делать.",
    "Вы можете использовать свое сердце как дверную ручку, чтобы открыть другое сердце.",
    "это очень хорошая идея, чтобы заменить всех нас на ноль",
    "Самая важная часть нашей жизни не наша",
    "Старая поговорка гласит: гуманитарий всегда расстроен, сердит, раздражен и раскаивается.",
    "Губы - это карманы Вселенной",
    "Адекватность - это корень всех зол, и вы должны четко понимать это.",
    "человек не может прожить менее ста процентов своей жизни",
    "На вашем месте я бы пошел на самое высокое место и сказал бы: «Ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой ой».",
    "Говорят, что солнце никогда не заходит над теми, кто приносит дождь.",
    "Внутри меня трясутся бабочки и пельмени.",
    "Реализма нет вообще.",
    "У меня много вопросов по этому году.",
    "У меня нет выбора, кроме как проснуться.",
    "Иди по дороге в Иркутск, по дороге к Богу",
    "Наша роль в жизни - выпить чашку чая и прочее.",
    "Да, можно иметь столько собак, сколько вы хотите.",
    "Произошла ошибка при попытке выяснить, что вы делаете.",
    "я съеден как рыба черным котом",
    "В настоящее время вы маленькая девочка в муках реальности",
    "Знаете, вселенная такая же маленькая, как и мы.",
    "Смелые слова почти всегда жесткие.",
    "Чувство беспомощности - ключ к успеху",
    "Если вы пытаетесь делать добро, вам нужно подумать дважды.",
    "Я самый маленький ублюдок Сатурна, и все мы - космос.",
    "Ваша цель в этом году — получить опыт выживания",
    "Теперь нет рэпа.",
    "Одно из лучших мест для знакомства - в пустыне",
    "Вы не сможете оказаться в царстве гусей.",
    "Если вас зовут Иешуа, вас арестуют",
    "Глаза кошек могут быть единственным законом, который освещает факты",
    "В холодном будущем я буду мудр в своем сердце, а камень зацветет ночью",
    "Если вы идете из ниоткуда в никуда, вы попадете в тень леса",
    "ментальный спецназ пинает дверь",
    "аааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа г. Санкт-Петербург",
    "Я чувствую себя как маленькая сумасшедшая шалунья, которая оооооооооооооооооооооооооооо",
    "Весна немного дура",
    "Если волки ушли, волки ушли",
    "Весна - это новый маяк, у меня его нет, так что мы будем черно-белым лунным пейзажем",
    "Если вы включите свет, вы не сможете увидеть свет мира",
    "не дайте себя одурачить инопланетянам",
    "Самое сложное время года - время каждого года",
    "даже если вы бездомный, вы можете делать домашнее задание.",
    "Желаю вам бутерброды за вашими щеками",
    "Не бойтесь использовать свои недостатки по максимуму",
    "Прикосновение к собаке может случиться с вами как личностью",
    "Демоны влюблены в вас, вы не одиноки.",
    "Если ты хорошо проводишь время, не женись",
    "нам многое предстоит сделать в будущем, но нам все равно",
    "неестественное всегда находится в состоянии изменения",
    "Вы хот-дог",
    "Ваш тип персонажа эмо стеснительный и запутанный",
    "если у вас нет пальто, вы голубь",
    "Если вам больше нечего делать, вы не сможете больше ничего делать.",
    "Очень важно иметь свою собственную зиму",
    "Не бойся собственной зимы",
    "Бегемотик, просто иди в спортзал, просто иди в спортзал",
    "А что если ты должен был стать нефизическим?",
    "Не бойтесь ничего, кроме страха",
    "Если у вас есть подушка, вам понадобится наволочка.",
    "Вы не можете себе представить, сколько вы можете представить",
    "Никогда не выходите на улицу, готовьте, готовьте, готовьте или ешьте что-нибудь.",
    "Должен ли я коснуться радиоволн с вами, ребята, ребята - вы знаете, ребята, ребята,",
    "вы достаточно хороши, чтобы избавиться от всех токсичных химических веществ в вашем теле",
    "настало время для котят, даааааааааааааааааааааааааааааааааааааааааааааааааааааа",
    "Можно сказать, что брошенный человек - это человек с естественной инвалидностью.",
    "у тебя много общего с мудростью, от которой я избавляюсь",
    "перевоплощайтесь и играйте с океаном",
    "Я иду от светлого к темному",
    "Подумайте, кто хочет, чтобы вы видели, что вы хотите, чтобы вы его видели.",
    "Заткнись и спустись по леднику и увидишь солнце",
    "Вы - пастор прошлого, тело перфекциониста, которое является человеком с привидениями.",
    "небесный хлеб на сковороде - это живой свет",
    "Возьмите букет цветов, а когда земля-цветок прорастет, родится цветок-мотылек",
    "эта жизнь полна образов и воображения, как это было в прошлом, и она улыбается и вздыхает - какой беспорядок",
    "Вы знаете, как жить в небе, просто посмотрите на это, сэр",
    "Как сам слон, мир не имеет границ.",
    "Единственное, что вам нужно сделать, это получить фрукт, который вы должны съесть.",
    "посмотри на себя, вылезай из булочки.",
    "Нет сомнений в том, что слово «слово» не является ни словом, ни ослом.",
    "Когда ты идешь, ты идешь, ты идешь, ты идешь, когда ты идешь, когда ты идешь, что ты делаешь?",
    "Все мы - те, кто любит солнце и облака небесные, и звезды небесные будут нашими.",
    "Рад слышать блеск азалий в своем сердце.",
    "Держись подальше от тисков разума",
    "Боже мой, как вы относитесь к длинам волн?",
    "Ваша тема 'Шрек'",
    "Распределение цыплят маленького хомяка - лето мира",
    "божья коровка на скорлупе грецких орехов",
    "Привет, прости меня за это, но я не могу удержаться от смеха над тобой.",
    "Статья в Википедии 'Гимн лицемерной психиатрии'",
    "Вы находитесь здесь, чтобы отправить сообщение другу",
    "Все как есть, так и есть.",
    "Радуга и чистые медведи, скрученные в божественных источниках жизни, громко пульсируют чистым капризом миротворческого корыта",
    "Острый удар — это то, что вы хотите сделать с новостной лентой.",
    "Скопируйся! Скопируйся!",
    "Радуйтесь с беспокойством и тревогой",
    "Горизонт настолько велик, что он ядро нервной системы",
    "Вы чертовски проснулись",
    "ты бродишь, лежа в своей жизни",
    "Ботинки - самые распространенные виды перчаток",
    "Когда мир откроется для человека, он попросит вас провести с ним время в сезон дождей.",
    "Не рожайте своего ребенка с помощью мышления.",
    "Ваш пульс пианист",
    "Обниматься - это лучший вариант развития событий, и долгосрочный риск потерпеть неудачу.",
    "Тело — это учебник, истина в том, чтобы избавиться от учителя.",
    "пить и пить, пить, пить, пить, пить, пить, валяться",
    "Вырасти сладость тела и сделай его похожим на дым",
    "Тебе придется долго уходить из моих снов.",
    "вы идете на искушение жареного баклажана",
    "Птицеводство особенно полезно с точки зрения кошек,",
    "Каждый имеет право сказать меньше всего.",
    "вздохни, верблюдишься и будь добр",
    "В мире много людей, которые живут со скоростью арбуза",
    "нет утюгов, но мое сердце тепло",
    "пожалуйста, будьте честны иронично",
    "Непобедимая любовь может быть невменяемым удовольствием",
    "Просыпайтесь, чтобы увидеть обои",
    "Младшая сестра зебры, веселая дочь, я не знаю, что с тобой делать, потому что ты единственная.",
    "Дайте мне знать, что вы хотите сказать северному оленю",
    "Дни рождения не родились.",
    "Самое главное - это запах рогатых карликов на земном шаре",
    "Я понятия не имею как жить",
    "Ешь птицу дня с солнцем",
    "на улицах города живут одинокие ягоды черники",
    "По моему скромному мнению, я хочу сказать себе: «Я влюблен в тебя».",
    "Количество зубов, которое вы можете использовать, идеально подходит для вас",
    "Дракула - молодая девушка, мать четверых детей.",
    "Сфотографируйте свой нос тазом",
    "Ешьте бананы, помидоры, йогурт и овощи",
    "банда белок даст тебе свет",
    "Лес самый большой город в мире",
    "давайте просто успокоимся",
    "Я думаю, ты радость дрожжевого плетения",
    "Ты тот, кто в мире, тот, кто есть мир, мир в мире",
    "иди в дом, войди внутрь, иди внутрь, иди в себя, иди, иди",
    "мне нужно немного больше, чем немного больше",
    "Огромная одержимость танго танка",
    "Возникла пустота, и она в воздухе, вот и все",
    "Жизнь - это сигарета",
    "Каждый человек имеет право быть членом десяти национальных меньшинств",
    "Будда тихий - он придет и уйдет",
    "Я не знаю, что происходит. Я не знаю, что я имею в виду. Я не знаю, что вы имеете в виду. Извините.",
    "Верьте или нет, луна уже летит",
    "Возьмите сон с тонким мечом и получите нос с соском.",
    "Позвольте мне отнести вас к самому лучшему в моей жизни, как пингвин на дно слова, ради пустяков",
    "А можжевельник может заставить вас чувствовать себя ведьмой или курткой",
    "Смех - это забавный способ поговорить о чем-то в мире",
    "Люди, которые не бреют свои мысли, не бесстыдствуют",
    "в мире есть нечто большее, чем усталость",
    "когда вы находитесь посреди реки, река находится посреди реки.",
    "Каждый человек имеет право на получение пищи в вышеуказанном и в следующих случаях: a) литье под давлением",
    "уровень сахара в крови может быть снижен за счет роста цен",
    "любите любимую любовь.",
    "Много любви и сострадания можно найти в Интернете.",
    "Ваш папа и папа оба обаятельны и милы",
    "Конец света похож на мечту, и он никогда не появляется",
    "Пожалуйста, не стесняйтесь иметь много денег",
    "Самым популярным романом дня является рассказ о луне и свете",
    "Еда - отличный способ избавиться от диеты.",
    "Ниже приведен список предметов, которые вам нужно знать: ь о о ь ь ь ь",
    "если у вас есть проблема, вы сможете кричать",
    "Болезнь является позором для тела",
    "Все вечно и продлится всю ночь",
    "романтический акт вибрации прямоугольника.",
    "на волосах черных волос распустились женские волосы и волосы без волос",
    "В мире нет носорогов, ни в ткани, ни в задней части кровати, ни в спальне, ни в ванной комнате",
    "Какой ярость, и когда я позвоню тебе, прости меня, крепко держи меня, крепко держи меня, я буду счастлив, извини, извини, извини",
    "хризантемы спотыкаются о грудь бесплодия мира",
    "Утром весь мир говорит о жизни ребенка."
  ];
  var randnote = Math.floor(Math.random()*(predictions.length));
  document.getElementById('prediction').textContent = predictions[randnote]
}