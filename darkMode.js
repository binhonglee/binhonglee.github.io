const darkThemeKey = 'dark-theme';
const lastSetKey = 'last-set';
const dark = 'dark';
const light = 'light';
let locked = true;
const darkModeToggle = document.getElementsByClassName("dark_mode_toggle")[0];

darkModeToggle.addEventListener("change", function () {
  if (!locked) {
    const current = darkModeToggle.checked ? dark : light;
    localStorage.setItem(darkThemeKey, current);
    localStorage.setItem(lastSetKey, (new Date()).toISOString());
  }
})

window.onload = function () {
  darkModeToggle.checked = true;
  if (localStorage.getItem(darkThemeKey) && localStorage.getItem(lastSetKey)) {
    if (isToday(localStorage.getItem(lastSetKey)) && localStorage.getItem(darkThemeKey) === light) {
      darkModeToggle.checked = false;
    }
    locked = false;
    return;
  }

  let light_mode = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (light_mode) {
    darkModeToggle.checked = false;
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