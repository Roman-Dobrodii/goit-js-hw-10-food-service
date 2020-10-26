import { themeToggle, saveTheme, checkboxHandler } from './js/theme';
themeToggle.addEventListener('change', checkboxHandler);
document.addEventListener('DOMContentLoaded', saveTheme);

import data from './js/menu.json';
import menuItemsTmpl from './templates/menu-items.hbs';
const ul = document.querySelector('ul.js-menu');

// ul.innerHTML = menuItemsTmpl(data);
ul.insertAdjacentHTML('beforeend', menuItemsTmpl(data));