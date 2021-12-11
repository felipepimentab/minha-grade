# Minha Grade
## About the app
### What it is
Minha Grade is a web app designed to help students organizing themselves with their colleges classes. The app allows them to build their own time table and store important information about each class, such as the links for the class' website or virtual meeting, and future tasks, all in the same place.
All that with a beautiful interface, designed to be intuitive and reliable in a way that using it daily becomes "second nature".

### How it works
The app allows the user to create a list of the classes they are taking during that semester and add all the important information about each class to it. It then becomes not only a visual time table for orientation but also a collection of various information that is easy to look up.

### Who made it
The app is made by me, Felipe Pimenta. I am an Electrical Engineering student at Universidade de São Paulo (USP) and a Front-End intern at Uppersoft.
I started developing the first versions of the app to practice and learn Frond-End development. It started using only vanilla JavaScript, and as I learned new tools and frameworks (such as Vue.js and Nuxt.js) I began to incorporate them to the project, often making completly new versions from scratch.
## Overall structure
This app was built using the default Nuxt.js preset for Server Side Rendering apps.
### Pages
#### Home
The home page is where the time table is displayed and where the user will spend most of their time on the app. It is designed to be clean and intuitive, while displaying all the information the user may need easily.

The top part of the home page is the time table itself: a simple time table displaying all the user's classes. Each class is actually a button, that when pressed opens a Details section right bellow the time table.

The details section is where all the important information is actually displayed. It is a simple text display, that gathers all the information about the selected class that the user has previously added.
#### About
Common about page. Display some information about the app itself, about the creators and a simple tutorial on how to use the app.
#### Classes index
This page lists all the classes the user has already added to their time table and some of the information about it. From there, the user can delete a class or go to the class single, where they will be able to see all the information about the class and edit them as they wish.
#### Class single
The Class Single page, as said, is where the user is able to see all the information they have already added to a class and edit them, or even delete the whole class.
#### Add class
The Add Class page, as the name suggests, is where the user is able to add a new class with all its information to the their class list.

### Class structure
Every user has a `class list`: an Array of Objects on which each object is a single `class`. Each class has a list (array) of weekly `lessons` (objects).

The `lesson` object contains the weekday (number), the start time (object) and the end time (object). The weekday is set to follow the names for the weekdays in portuguese, so Sunday is number 1 and Saturday is number 7. There is no 0. Both timeBegin and timeEnd are objects that represent time in the day, and is made up of hours and minutes.
```
{
  diaDaSemana: 2,
  timeBegin: {
    hours: 16,
    minutes: 20,
  },
  timeEnd: {
    hours: 18,
    minutes: 0,
  }
},
```

The `class` object contains the class name (string), code (string), teacher name (string), website (object), meeting (object), elecive (boolean), and a list of lessons (array);
```
{
  nome: 'Estatística 1',
  codigo: 'SME0320',
  professor: 'Eduardo Fontoura Costa',
  site: {
    nome: 'Moodle',
    link: 'https://edisciplinas.usp.br/enrol/index.php?id=92645',
  },
  aula: {
    nome: 'Google Meets',
    link: 'https://meet.google.com/eue-khdu-hpk?pli=1&authuser=1',
  },
  eletiva: false,
  aulas: [
    {
      diaDaSemana: 2,
      timeBegin: {
        hours: 16,
        minutes: 20,
      },
      timeEnd: {
        hours: 18,
        minutes: 0,
      }
    },
    {
      diaDaSemana: 4,
      timeBegin: {
        hours: 8,
        minutes: 10,
      },
      timeEnd: {
        hours: 9,
        minutes: 50,
      }
    }
  ]
},
```
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
