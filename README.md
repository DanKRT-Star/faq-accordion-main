# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of solution](./assets/images/127.0.0.1_5501_%20(10).png)

### Links

- Solution URL: https://github.com/DanKRT-Star/faq-accordion-main
- Live Site URL: [Add your live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (no libraries)

### What I learned

While building this FAQ accordion, I practiced:

- How to use `<picture>` with `source media` for responsive images
- How to use `classList.toggle()` and `querySelector()` to create accordion functionality with JavaScript
- Using animation with `transform: scaleY` and `transform-origin` to simulate vertical expansion
- Accessibility practices like updating `alt` text dynamically

Example JS toggle logic:

```js
paragraph.classList.toggle('expand');

const isOpen = paragraph.classList.contains('expand');
icon.src = isOpen
  ? './assets/images/icon-minus.svg'
  : './assets/images/icon-plus.svg';
```

```css
@keyframes expandVertical {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
```

### Continued development

In future projects, I want to:

- Improve accessibility with ARIA attributes like aria-expanded and aria-controls
- Add keyboard navigation support with keydown events
- Explore using details and summary for native accordion behavior

### Useful resources 

- [MDN Web Docs - Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [CSS-Tricks - Using the picture element](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
- [A Complete Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)

## Author

- Frontend Mentor - [@DanKRT-Star](https://www.frontendmentor.io/profile/DanKRT-Star)
- Facebook - [Lê Mạnh Đan](https://www.facebook.com/le.manh.an.887330)
- Gmail - [Lê Mạnh Đan](tonyle1207@gmail.com)
- Github - [Lê Mạnh Đan](https://github.com/DanKRT-Star)

## Acknowledgments

Thanks to Frontend Mentor and the community for providing helpful resources and feedback during this challenge.
