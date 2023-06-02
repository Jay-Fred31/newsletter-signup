# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/pages-screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://newsletter-signup-pink.vercel.app/)
- Live Site URL: [Add live site URL here](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript


### What I learned

- I learnt how to save state data in the local storage to use on a different page. This was very interesting. 

- Creating a separate class on the style sheet to add changes on javascript on placeholder pseudo element.

To see how you can add code snippets, see below:

```css
.edit::placeholder {
  color: lime;
}
```
```js
let userEmail = localStorage.getItem("emailAddress");
```

### Continued development

In future projects, I want to be comfortable in using fetch API and writing codes for form validations.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=7_kaX07tVFc) - This resourse helped me to learn how to use one javascript file for multiple HTML files. 


## Author

- Github - [Joyce Fred](https://github.com/Jay-Fred31)
- Frontend Mentor - [@Jay-Fred31](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@JoyceFDev](https://www.twitter.com/JoyceFDev)



## Acknowledgments

My acknowledgement goes to the best tech community ever, [coder's den] (https://twitter.com/CodersDen94). I have learnt, contributed and grown so much as a FrontEnd developer within this community and I am ever grateful to be a member of the community.