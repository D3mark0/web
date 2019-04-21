var MyNotes1 = new Array();
MyNotes1.push("ОБЯЗАТЕЛЬНО ОБРАТИ(ТЕ) ВНИМАНИЕ НА ФОТОГРАФА");
MyNotes1.push("Дабы избежать недопонимания...");
MyNotes1.push("В этом году стало модно хейтить подведение итогов, НО ТЫ ДАЖЕ ПОЛОВИНУ ИЗ МОИХ ФОТОГРАФИЙ НЕ ВИДЕЛ!");
MyNotes1.push("ЛАСТ ЧЕНС ИН ЗИС ЙЕР!");
MyNotes1.push("Готов?");
MyNotes1.push("Лучший подарок на Новый год по версии D3mark0.");
MyNotes1.push("Пак осенних красноярских обоев для вашего рабочего стола.");
MyNotes1.push("Нашёл тебе шикарный повод пересмотреть всю серию");
MyNotes1.push("А хочешь историй?");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function picknote() {
  document.getElementById("randnote").value = MyNotes1[getRandomInt(0, MyNotes1.length - 1)];
}
