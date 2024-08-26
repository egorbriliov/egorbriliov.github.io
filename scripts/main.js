function getCurrentTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        return storedTheme;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}


function themeToggle() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);

    document.documentElement.setAttribute('data-theme', theme);
}

window.addEventListener("DOMContentLoaded", () => {
    const currentTheme = getCurrentTheme()

    localStorage.setItem('theme', currentTheme)

    document.documentElement.setAttribute('data-theme', currentTheme);
});

const button = document.querySelector("#buttonTheme");

button.addEventListener("click", themeToggle)
