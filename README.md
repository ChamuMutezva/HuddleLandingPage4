# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![desktop preview](./images/desktop-preview.png)


### Links

- [solution URL](https://github.com/ChamuMutezva/stats-preview-card-component-main)
- [live site URL](https://chamumutezva.github.io/stats-preview-card-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
- **npm run build** error
![error details](./err/parcel-build-error.png)
solution: create a `.htmlnanorc`file in the root folder - add a JSON CONFIGURATION object
  ```
 {
     "minifySvg": false
 }
  ```

height is not set at the moment. The div with the class `inner` is used to set the height.
Padding-top is used on this element as a percentage of `actual image height divided actual image width multiplied by 100%` . In this case for small screens we get `480 divided by 654 times 100%` giving us a rounded percentage of `73.4%`. The image for larger screens will be calculated as `446 divided 540 times 100%` giving us a rounded total of `82.6%`


### Continued development


### Useful resources
- [parcel documentation](https://parceljs.org/) - setting up the project for compilation
- [sass documentation](https://www.example.com) - using modules
- [smashing magazine - responsive background images](https://www.smashingmagazine.com/2013/07/simple-responsive-images-with-css-background-images/)

## Author
- Website - [Chamu Mutezva](https://github.com/ChamuMutezva)
- Frontend Mentor - [@ChamuMutezva](https://www.frontendmentor.io/profile/ChamuMutezva)
- Twitter - [@ChamuMutezva](https://twitter.com/ChamuMutezva)



## Acknowledgments

Many thanks to Matt and the Frontend Mentor community at large
