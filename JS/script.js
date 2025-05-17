const btnDarkMod = document.querySelector('.dark-mode-btn');
// проверка темы на уровне системы пользователя 
if (window.matchMedia && window.matchMedia ('(prefers-color-scheme: dark)').matches) {
   document.body.classList.add('dark');
}

// проверка темного режима в локале
if (localStorage.getItem('darkMode') === 'dark') {
   btnDarkMod.classList.add('dark-mode-btn--active');
   document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
   btnDarkMod.classList.remove('dark-mode-btn--active');
   document.body.classList.remove('dark');
}

//включение темного режима по кнопке
btnDarkMod.onclick = function () {
   btnDarkMod.classList.toggle('dark-mode-btn--active');
   const isDark = document.body.classList.toggle('dark');
   if (isDark){
      localStorage.setItem('darkMode', 'dark')
   } else {
      localStorage.setItem('darkMode', 'light')
   }
}