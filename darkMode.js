var key = 'dark-theme';
var dark = 'dark';
var light = 'light';
var initial_toggle = false;
var darkModeToggle = document.getElementsByClassName("dark_mode_toggle")[0];

window.onload = function () {
  locked = true;
  console.log(localStorage.getItem(key));
  if (localStorage.getItem(key)) {
    if (localStorage.getItem(key) === light) {
      darkModeToggle.open = false;
      initial_toggle = true;
    }
    return;
  }

  let dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!dark_mode) {
    darkModeToggle.open = false;
    localStorage.setItem(key, light);
    initial_toggle = true;
  }
};

darkModeToggle.addEventListener("toggle", function () {
  if (initial_toggle) {
    initial_toggle = false;
    return;
  }

  const current = localStorage.getItem(key);
  var newVal = dark;
  if (current === newVal) {
    newVal = light;
  }
  localStorage.setItem(key, newVal);
  console.log(localStorage.getItem(key));
})
