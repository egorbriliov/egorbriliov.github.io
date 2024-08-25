// Смена темы
// Установка темы по умолчанию, как у пользователя в браузере
function getCurrentTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }


// Определяем функцию для смены темы
function themeToggle() {
// Получаем текущую тему из localStorage
    let currentTheme = localStorage.getItem('theme');
    // Если текущая тема 'light', меняем её на 'dark'
    if (currentTheme === 'light') {
        setTheme('dark');
    } 
    // Если текущая тема 'dark' или её нет, меняем на 'light'
    else {
        setTheme('light');
    }

    
}
// Функция для установки темы
function setTheme(theme) {
// Сохраняем тему в localStorage
localStorage.setItem('theme', theme);
// Устанавливаем атрибут data-theme на корневом элементе
document.documentElement.setAttribute('data-theme', theme);
}

// 
window.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem('theme', getCurrentTheme())
    document.documentElement.setAttribute('data-theme', getCurrentTheme());
    // Получаем ссылку на кнопку
    let button = document.getElementById("buttonTheme");
    button.addEventListener("click", themeToggle)
  });