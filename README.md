## Сторінки (скомпільовані)  
  /dist/index.html - головна  
  /dist/search_expert.html - пошук експерта  
  /dist/search_task.html - пошук таска  
  /dist/details_expert.html - детальна сторінка експерта  
  /dist/details_task.html - детальна сторінка таска  
  /dist/article_page.html - сторінка окремої статті (текстова)  
  /dist/login_page.html - службова сторінка логіну  
  /dist/login_page-forgot.html - слубжбова сторінка відновлення логіну  
  /dist/registration.html - службова сторінка реєстрації  

## Структура папки src  
  /assets/scss/main.scss - єдиний файл для підключення усіх дочірніх стилів  
  /assets/scss/common/ - загальні файли із стилями (занулення, стилі, що використовуються між сторінками, файл із змінними, міксінами і фікси для продакшну)  
  /assets/scss/components/ - містить файл із scss-компоненатми, які перевикористовуються і з яких за допомогою класів збираються составні елементи  
  /assets/scss/layouts/ - окремі стильові файли для сторінок  
  /assets/scss/layouts/parts - окремі стильові файли для однотипних частин сторінок (хедер, футер, меню тощо)  
  /js/ - index.js містить скрипти, select.js стилізує випадаючі списки  
  /pug/includes/modules/ - окремі структурні елементи сторінок (хедер, футер, сайдбари, меню, банер головної тощо)  
  /pug/includes/popups/ - спливаючі вікна (в останній ітерації використовується тільки popup-message.pug)  
  /pug/layout/ - файли каркасу для сторінок із однотипною версткою (каркас головної, двоколоночний дизайн із широким сайдбаром, двоколоночний дизайн із вузьким сайдбаром, каркас службової сторінки)  
  /pug/pages/ - верстка окремих сторінок  
  /pug/utils/ - містить файл mixins.pug, де зібрані всі HTML-міксіни для верстки  
  /static/ - статичні файли, які потрапляють у скомпільовану версію as is  
  
## Структурні елементи  
  Структурні елементі описані у файлі /assets/scss/components/components.scss.   
  .c-container - клас основного контейнеру  
  .c-fullwidth - клас контейнеру одноколоночного дизайну  
  .c-aside, .c-sidebar - класи для бокового контейнеру. .c-aside більш специфічний  
  .c-wide-content - клас контейнеру з основним контентом для двоколоночного дизайну. Модифікатори вказують розташування сайдбару (зліва/зправа)  
  .c-accent - клас для візуального виділення частини заголовку сторінки  
  .c-button - клас кнопки. Модифікатори задають розміри, стиль кнопки (з бекграундом/без), а також версію (мобайл)  
  .c-title - клас заголовків. Елементи задають розмір, специфічні модифікатори вказують на окремі іконки заголовків.  
  .c-info - контейнер інформаційних іконок. Елементи описують самі іконки. Особливий елемент "available" має два модифікатори "--busy" і "--free" для опису стану.
  .c-tags - контейнер для тегів.

## js-обробники
  Всі js-обробники навішуються на елемент за допомогою data-параметра data-js-handler='', де в лапках вказується специфічна строка, яка і ідентифікує необхідний скрипт.  
  'workflow__slider' - обробник, що запускає карусель блоку "Як це працює" на головній (не використовується в поточній версії верстки)  
  'recommendations__slider' - обробник, що запускає карусель відгуків на головній  
  'menu__toggle' - обробник меню  
  'header-user__handler' - обробник дропдауна зареєстрованого користувача (працює по натисканню на аватар в шапці)  
  'filter__toggle' - згортання/розгортання фільтрів  
  'expand-list__handler' - універсальний обробник згортання/розгортання однорівневих списків. Навішується на останнє посилання-сіблінг в списку елементів, перемикає для частини елементів класи show/hide  
  'range-slider__handler' - навішує range-слайдер діапазону у фільтрах. Потребує jquery-ui  
  'mobile-filter__handler' - перемикач фільтра в мобільній версії  
  'accordion__handler' - обробник аккордеону на детальних сторінках  
  'popup__handler' - обробник для показу/схову спливаючих вікон. Потребує #id спливаючого вікна в якості параметра href="#id"  
  'popup__handler-close' - закриває спливаюче вікно  
  'overlay__handler' - перемикач оверлею (не використовується в поточній версії верстки)  
  'account-type', 'registration__user-type' - перемикачі для форми на службовій сторінці реєстрації  

<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Webpack Template</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
  <p>Base Template: <a href="https://github.com/vedees/webpack-template">webpack-template</a></p>
  <p>Author: <a href="https://tocode.ru" target="_blank">To code</a> | <a href="https://www.youtube.com/playlist?list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV" target="_blank">Youtube guide in Russian</a></p>
</div>


## Build Setup:

``` bash
# Download repository:
git clone https://github.com/vedees/webpack-template-pug webpack-template-pug

# Go to the app:
cd webpack-template-pug

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/pug/layout` - put custom layout for pages
* `src/pug/includes` - all app includes
* `src/pug/utils` - pug mixins and other
* `src/pug/pages` - put custom app pages. Don't forget to import them in `index.js`
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. Don't forget to import them in `index.js`
* `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `src/js` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components
* `static/` - folder with extra static assets that will be copied into output folder

<div align="center">
  <h2>Settings:</h2>
</div>

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  dist: path.join(__dirname, '../dist'),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: 'assets/'
}
```
## Customize:
Change any folders:
``` js
const PATHS = {
  // src must be src
  src: path.join(__dirname, '../src'),
  // dist to public
  dist: path.join(__dirname, '../public'),
  // assets to static
  assets: 'static/'
}
```

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// React example
import React from 'react'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
// or
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/assets/scss/utils/libs.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '../../node_modules/spinners/stylesheets/spinners';
// CSS librarys example:
@import '../../node_modules/flickity/dist/flickity.css';
```

## Import js files:
1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file
``` js
// another js file for example
import './common.js'
```

## PUG Dir Folder:
#### Default:
* .pug dir: `./pug/pages`
* Configurations: in `./build/webpack.base.conf.js`
**Usage:**
All files must be created in the `./pug/pages` folder.
Example:
``` bash
./pug/pages/index.pug
./pug/pages/about.pug
```

#### Change PUG Default Dir Folder:
Example for `./pug/mynewfolder/pages`:
* Change `./build/webpack.base.conf.js` const PAGES_DIR:
``` js
// Your new path
const PAGES_DIR = `${PATHS.src}/pug/mynewfolder/pages/`
```
3. Rerun webpack dev server

## Create Another PUG Files:
#### Default: 
Automatic creation any pug pages:
1. Create another pug file in `./pug/pages/`
2. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)

#### Second method:
Manual (not Automaticlly) creation any pug pages (Don't forget to RERUN dev server and COMMENT lines above)
1. Create another pug file in `./pug/pages/`
2. Go to `./build/webpack.base.conf.js`
3. Comment lines above (create automaticlly pug pages)
4. Create new page in pug:
``` js
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/index.pug`,
      filename: './about/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/portfolio.pug`,
      filename: './about/portfolio.html',
      inject: true
    })
```
5. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)

#### Third method: (BEST)
Сombine the first method and the second.
Example:
``` js
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/index.pug`,
      filename: './about/index.html',
      inject: true
    })
```


## Vue install:
Default: **already have**

1. Install vue
``` bash
npm install vue --save
```
2. Init vue `index.js`:
``` js
const app = new Vue({
  el: '#app'
})
```
3. Create div id app
``` pug
#app
  //- Content
```

## Vuex install:
1. Install vuex
``` bash
npm install vuex --save
```
2. Import Vuex
``` js
import store from './store'
```
3. Create index.js in `./store`
``` js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // vuex content
})
```

## Add Vue Components:
Create your component in `/components/`

**PUG Usage:**
1. Init component in `index.js`:
``` js
Vue.component('example-component', require('./components/Example.vue').default)
```
2. Any pug files:
``` pug
example-component
```

**VUE Usage:**
1. import components in .vue:
``` js
import example from '~/components/Example.vue'
```
2. Register component:
``` js
  components: {
    example
  }
```
3. Init in vue component:
``` html
<example />
```

## Add Fonts:
Add @font-face in `/assets/scss/utils/fonts.scss`:

``` scss
// Example with Helvetica
@font-face {
  font-family: "Helvetica-Base";
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot'); /* IE9 Compat Modes */
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.woff') format('woff'), /* Pretty Modern Browsers */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.svg') format('svg'); /* Legacy iOS */
}
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mySecontFont : 'Helvetica-Base', Arial, sans-serif;
```


## License
[MIT](./LICENSE)

Copyright (c) 2018-present, [Evgenii Vedegis](https://github.com/vedees)
