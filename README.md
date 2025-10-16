# Sticky Table of Contents with Scroll Highlight (Vanilla JS)

Sticky TOC with scroll-based highlighting & smooth section navigation (Vanilla JS)

An interactive docs layout featuring a sticky Table of Contents that auto-highlights the section in view while you scroll and clicking on any TOC item smoothly scrolls the page to the corresponding section. Built with semantic HTML, modern Vanilla JS (IntersectionObserver / scroll logic), and CSS transitions. Great for practicing DOM geometry and smooth UX.

## What I Learned and Improved

- Gained deep understanding of how to work with **DOM geometry** using `getBoundingClientRect()`
- Improved logic to detect **which element is visible in the viewport**
- Mastered the use of **scrollIntoView** for smooth navigation to anchor elements
- Learned to manipulate **class states dynamically** (add/remove `.selected`)
- Accurate linking using `id` and `href`
- Handled **event delegation**, scroll-based logic, and timing-based updates with `setTimeout`

## Features

- Sticky sidebar navigation that stays in view while scrolling
- Automatic highlight of the currently visible section in the sidebar
- Smooth scrolling to sections on sidebar link click
- Semantic, accessible structure using `<h3>` and `<ul><li><a>`
- Fully written in **Vanilla JavaScript** (no frameworks or libraries)
- Easily expandable and styleable for documentation, blogs, or articles

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Demo

This demo shows a scroll-synced **sticky Table of Contents** on the left side of the page.  
As the user scrolls through the content, the sidebar automatically highlights the section currently in view.  
Clicking on any TOC item smoothly scrolls the page to the corresponding section, demonstrating the use of DOM geometry, `scrollIntoView`, and scroll-based link highlighting — all built in **Vanilla JavaScript**.

![Demo](./demo/demo.gif)

🔗 Author

Antonina Kachusova on GitHub 

