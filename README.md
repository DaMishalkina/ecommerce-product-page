# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Issues](#issues)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [ecoomerce-product-page](https://damishalkina.github.io/ecommerce-product-page/#/women/1)

## My process

### Built with

- React
- Redux
- TypeScript
- Vite
- Sass
- Mobile-first workflow


### What I learned

As a part of this project I have tried a new combination for me: Vite-React + React-router-dom. Also I have challenged myself using the new react-router-dom v.6

### Issues

- I have faced some difficulties deploing my vite react app to the github pages. It is recommended in the vite documentation to store images for an app in the public folder.
Unforunately, it did not work for me. So I have found following solution.

I have placed my images in src/assets folder, then imported all product images:

```js
const IMAGES = import.meta.glob('@assets/products/*/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' });
```

I have used key in order to acsses source of a particular image:

```js
const src = IMAGES[`/src/assets/products/${folderName}/image-product-${index + 1}.jpg`];
```

This solution seems to me not perfect at all, but I hope to find out, how to fix this issue.

- I also have modified the layout of the images carousel for screen with over 400px width, as the images appeared disproportionately stretched.

- Moreover I have decided to use value of 1200px as min-width for desktop version. The reason is the same as in the previous case.

### Continued development

- I want to try Zustand instead of Redux as the first one seems more appropriate to me for such a small app without authentication. Perhaps I could add authentication functionality and then dive deeper into the Redux world.
- Maybe I could add some tests and use React perfomance optimization techinques, such as memoiziation and lazy loading.

