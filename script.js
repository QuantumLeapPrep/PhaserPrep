const themeToggle = document.getElementById('theme-toggle'); // Находим кнопку по ID
const body = document.body;  // Находим тег body
const themeIcon = document.getElementById('theme-icon'); // Находим иконку по ID

// Функция для установки темы из localStorage
function setThemeFromLocalStorage() {
    // Проверяем, есть ли сохраненная тема в localStorage
    if (localStorage.getItem('theme') === 'dark-theme') {
        // Если в localStorage есть "dark-theme", применяем темную тему
        body.classList.add('dark-theme'); // Добавляем класс "dark-theme" к body
        themeIcon.classList.remove('fa-sun'); // Убираем иконку солнца
        themeIcon.classList.add('fa-moon');  // Добавляем иконку луны
    } else {
        // Если нет сохраненной темы (или это "light-theme"), применяем светлую тему
        body.classList.remove('dark-theme'); // Удаляем класс "dark-theme" из body
        themeIcon.classList.remove('fa-moon'); // Убираем иконку луны
        themeIcon.classList.add('fa-sun');  // Добавляем иконку солнца
    }
}

// Вызываем функцию setThemeFromLocalStorage при загрузке страницы, чтобы применить сохраненную тему
setThemeFromLocalStorage();

// Добавляем обработчик события клика на кнопку переключения темы
themeToggle.addEventListener('click', () => {
    // Проверяем, активна ли темная тема
    if (body.classList.contains('dark-theme')) {
        // Если да, переключаемся на светлую тему
        body.classList.remove('dark-theme'); // Удаляем класс "dark-theme"
        themeIcon.classList.remove('fa-moon');  // Меняем иконку на солнце
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light-theme');  // Сохраняем выбор в localStorage
    } else {
        // Если нет, переключаемся на темную тему
        body.classList.add('dark-theme'); // Добавляем класс "dark-theme"
        themeIcon.classList.remove('fa-sun'); // Меняем иконку на луну
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark-theme');  // Сохраняем выбор в localStorage
    }
});