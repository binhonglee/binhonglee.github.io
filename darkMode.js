var key = 'dark-theme';
var key = 'dark-theme';
var dark = 'dark';
var light = 'light';
var locked = true;
var initial_toggle = false;
var darkModeToggle = document.getElementsByClassName("dark_mode_toggle")[0];

darkModeToggle.addEventListener("toggle", function () {
  if (initial_toggle) {
    initial_toggle = false;
    return;
  }

  if (!locked) {
    const current = localStorage.getItem(key);
    var newVal = dark;
    if (current === newVal) {
      newVal = light;
    }
    localStorage.setItem(key, newVal);
  }
})

window.onload = function () {
  if (localStorage.getItem(key)) {
    if (localStorage.getItem(key) === light) {
      initial_toggle = true;
      darkModeToggle.open = false;
    }
    locked = false;
    return;
  }

  let dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!dark_mode) {
    darkModeToggle.open = false;
    initial_toggle = true
    localStorage.setItem(key, light);
  }
  locked = false;
};