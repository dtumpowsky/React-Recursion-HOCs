# React-Recursion & HOC Front End Exercise

## By David Tumpowsky

## `Description`

### Part 1

Utilizing typescript and react, a component is created that renders any prop object into recursive list items.

### Part 2

Wraps the previous tree component so that items are sorted alphabetically.

- Movies
  - Horror
    - Halloween
    - Alien
  - Action
    - Stonecold
    - Commando
- Books
  - Children of time   

renders as...

- Books
  - Children of time
- Movies
  - Action
    - Commando
    - Stonecold
  - Horror
    - Alien
    - Halloween

### Part 3

A "collapsible" component that shows the tree collapsed by default and allow the user to click to expand/show the children.

on page load the page will show
- Folder 1
- Folder 2

When the user clicks "Folder 1" the browser will show
- Folder 1
  - Sub Folder 1
  - Sub Folder 2
- Folder 2

When the user click "Sub Folder 1" the browser will show
- Folder 1
  - Sub Folder 1
    - Sub Sub Folder 1
  - Sub Folder 2
- Folder 2

#### `Built With`

* React-TypeScript
* CSS
* HTML5

#### `Download App`

'npm run start' runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


##### `Licence`

Copyright (c) 2019 David Tumpowsky. This software is licensed under the MIT license.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).