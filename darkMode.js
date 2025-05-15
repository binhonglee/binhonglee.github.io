const darkThemeKey = 'dark-theme';
const lastSetKey = 'last-set';
const dark = 'dark';
const light = 'light';
let locked = true;
let initialToggle = false;
const darkModeToggle = document.getElementsByClassName("dark_mode_toggle")[0];

darkModeToggle.addEventListener("toggle", function () {
  if (initialToggle) {
    initialToggle = false;
    return;
  }

  if (!locked) {
    const current = darkModeToggle.open ? dark : light;
    localStorage.setItem(darkThemeKey, current);
    localStorage.setItem(lastSetKey, (new Date()).toISOString());
  }
})

window.onload = function () {
  if (localStorage.getItem(darkThemeKey) && localStorage.getItem(lastSetKey)) {
    if (isToday(localStorage.getItem(lastSetKey)) && localStorage.getItem(darkThemeKey) === light) {
      initialToggle = true;
      darkModeToggle.open = false;
    }
    locked = false;
    return;
  }

  let light_mode = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (light_mode) {
    initialToggle = true
    darkModeToggle.open = false;
  }
  locked = false;
};

function isToday(datestring) {
  const date = new Date(datestring)
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}