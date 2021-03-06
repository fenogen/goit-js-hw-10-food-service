
// -----------------------------------> Записали классы для удобства в переменные
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

// -----------------------------------> Получили ссылки
export const bodyRef = document.querySelector('body');
export const switchRef = document.querySelector('#theme-switch-toggle');

// -----------------------------------> Установили условие темы из памяти браузера

if (localStorage.getItem('key') === LIGHT || localStorage.getItem('key') === null) {
    bodyRef.classList.add(LIGHT);
    switchRef.checked = false;
}

if (localStorage.getItem('key') === DARK) {
    bodyRef.classList.add(DARK);
    switchRef.checked = true;
}

// -----------------------------------> Установили переключатель темы:

const changeTheme = () => {
    if (switchRef.checked === false) {
        bodyRef.classList.replace(DARK, LIGHT);
        fnMemory();
    }
    if (switchRef.checked === true) {
        bodyRef.classList.replace(LIGHT, DARK)
        fnMemory();
    }
    console.log('Change theme');
}

// -----------------------------------> Создали ф-ю сохранения имени класса в памяти
const fnMemory = () => {
    localStorage.setItem('key', bodyRef.className);
    return;
}

switchRef.addEventListener('change', changeTheme);