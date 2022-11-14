var good_check = [
  "говно",
  "залупа",
  "пенис",
  "хер",
  "давалка",
  "хуй",
  "хуи",
  "блядина",
  "головка",
  "шлюха",
  "жопа",
  "член",
  "еблан",
  "петух",
  "мудила",
  "мудило",
  "рукоблуд",
  "ссанина",
  "очко",
  "блядун",
  "вагина",
  "сука",
  "ебланище",
  "влагалище",
  "пердун",
  "дрочила",
  "пидор",
  "пидар",
  "пизда",
  "туз",
  "малафья",
  "молофья",
  "малофья",
  "гомик",
  "пилотка",
  "манда",
  "анус",
  "путана",
  "педрила",
  "пидрила",
  "педрило",
  "шалава",
  "хуило",
  "хуйло",
  "мошонка",
  "елда",
  "раунд"
];

var bad_check = [
  "гавно",
  "золупа",
  "пэнис",
  "довалка",
  "бледина",
  "блидина",
  "галовка",
  "жёпа",
  "жепа",
  "иблан",
  "питух",
  "рукаблуд",
  "санина",
  "ачко",
  "бледун",
  "блидун",
  "вогина",
  "ибланище",
  "ябланище",
  "влогалище",
  "пирдун",
  "драчила",
  "дрочило",
  "драчило",
  "писда",
  "тус",
  "молафья",
  "гомек",
  "пелотка",
  "пилодка",
  "пелодка",
  "монда",
  "шолава",
  "хуила",
  "машонка",
  "илда",
  "ялда"
];

function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

function check() {
  var answers = [];

  for(var i = 0; i < 10; i++){
    answers.push(document.getElementById('input' + i).value.toLowerCase());
  }

  empty = false;

  answers.forEach(item => {
    if(item == ""){
      empty = true;
    }
  })

  if(empty){
    alert("Так а вы же не все поля заполнили, камон.");
    return;
  }

  var flag = 0;

  answers.forEach(item => {
    if(good_check.includes(item)){
      ;
    } else
    if(bad_check.includes(item)){
      flag = 1;
    }
    else {
      flag = 2;
      return;
    }
  });

  if(flag == 0){
    if(checkIfDuplicateExists(answers)){
      window.location.href = "cheat_win.html";
    }
    else {
      window.location.href = "good_win.html";
    }
  } else
  if(flag == 1){
    if(checkIfDuplicateExists(answers)){
      window.location.href = "cheat_win.html";
    }
    else {
      window.location.href = "bad_win.html";
    }
  } else
  if(flag == 2){
    window.location.href = "lose.html";
  }
}

function stylesSetup() {
  var theme = document.getElementsByTagName('link')[0];

  if (screen.width > screen.height) {
      theme.setAttribute('href', 'styles.css');
  } else {
      theme.setAttribute('href', 'styles-mobile.css');
  }
}

function onlyPlayOneIn(container) {
  container.addEventListener("play", function(event) {
  audio_elements = container.getElementsByTagName("audio")
    for(i=0; i < audio_elements.length; i++) {
      audio_element = audio_elements[i];
      if (audio_element !== event.target) {
        audio_element.pause();
      }
    }
  }, true);
}

document.addEventListener("DOMContentLoaded", function() {
  onlyPlayOneIn(document.body);
});
