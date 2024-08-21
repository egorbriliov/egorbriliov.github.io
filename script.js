
// // Возрат в самое начало  
// // Получаем ссылку на кнопку
// const button = document.getElementById('main');
// // Добавляем обработчик события "click" на кнопку
// button.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

            
            

// Смена темы

// Определяем функцию для смены темы
function themeToggle() {
// Получаем текущую тему из localStorage
    let currentTheme = localStorage.getItem('theme');
    console.log(currentTheme)
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

window.addEventListener("DOMContentLoaded", () => {
    // Получаем ссылку на кнопку
    let button = document.getElementById("buttonTheme");
    button.addEventListener("click", themeToggle)
  });