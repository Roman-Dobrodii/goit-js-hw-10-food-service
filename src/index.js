import { themeToggle, SaveTheme, checkboxHandler } from './js/theme';
themeToggle.addEventListener('change', checkboxHandler);
document.addEventListener('DOMContentLoaded', SaveTheme);

import data from './js/menu.json';
import menuItemsTmpl from './templates/menu-items.hbs';
const ul = document.querySelector('ul.js-menu');

ul.innerHTML = menuItemsTmpl(data);
