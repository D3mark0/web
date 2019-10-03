var myMusic1 = new Array();
myMusic1.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/729754332&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true");
myMusic1.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/743775438&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true");
myMusic1.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/801968562&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickmusic() {
  document.getElementById("randmusic").src = myMusic1[getRandomInt(0, myMusic1.length - 1)];
}
