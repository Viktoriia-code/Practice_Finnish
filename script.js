var who_array = ["minä", "sinä", "hän", "me", "te", "he"];
var verbi_array = ["nukkua","syödä","herätä","opiskella","lukea","mennä","lähteä","ehtiä"];
var kello_array=[1,2,3,4,5,6,7,8,9,10,11,12];
var ehto_array=["tasan","ennen","jälkeen","menessä","asti"]

function get_who() {
  var rand = Math.floor(Math.random() * who_array.length);
  document.getElementById("who-input").innerText = who_array[rand];
}

function get_verbi() {
  var rand = Math.floor(Math.random() * verbi_array.length);
  document.getElementById("verbi-input").innerText = verbi_array[rand];
}

function get_kello() {
  var rand = Math.floor(Math.random() * kello_array.length);
  document.getElementById("kello-input").innerText = kello_array[rand];
}

function get_ehto() {
  var rand = Math.floor(Math.random() * ehto_array.length);
  document.getElementById("ehto-input").innerText = ehto_array[rand];
}

function get_all() {
  get_who();
  get_verbi();
  get_kello();
  get_ehto();
}

get_all();