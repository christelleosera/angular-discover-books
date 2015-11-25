#Discover Books
A single page application written in AngularJS that displays the book objects in `data/book.json` file. It has an index page that shows a filterable, searchable and paginated view of all the books available and a book show page that display the details of the book as well as suggests up to three books of the same category and genre.

##Tech Used
1. [AngularJS](https://angularjs.org/)
2. [jQuery](https://jquery.com/)
3. [HTML5](http://www.w3.org/TR/html5/)
4. [SASS](http://sass-lang.com/) / [CSS3](http://www.w3.org/TR/CSS/)
5. [Bootstrap](http://getbootstrap.com/)
6. [Moment.js](http://momentjs.com/)
7. [Surge.sh](https://surge.sh/)

##Project Directory
```
├── README.md
├── css
│   ├── styles.css
│   ├── styles.css.map
│   └── styles.sass
├── data
│   └── book.json
├── index.html
├── js
│   ├── app.js
│   ├── controllers.js
│   └── filters.js
└── partials
    ├── book_detail.html
    └── books_index.html
```

##Run locally
1. Clone this repository
2. Install http-server globally
```
npm install http-server -g
```
3. Go to the enclosing folder of the cloned repository
4. Run
```
http-server angular-discover-books
```
5. You can now visit `http://localhost:8080` to view the app.

##Hosted
This web application is also hosted [HERE](http://angular-discover-books.surge.sh/) with the help of [surge.sh](https://surge.sh/).

##Future Development
This is currently built around the book.json file which contains 100 book entries. Other use cases have not been considered. For larger data sets, more features need to be implemented, such as a lazy load.