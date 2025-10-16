// Grab all headers and sidebar links
const headers = [...document.querySelectorAll("h3")];
const sidebarLinks = document.querySelectorAll(".toc li a");

// Update sidebar highlighting based on scroll position
window.addEventListener("scroll", updateSidebar);

function updateSidebar() {
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    if (elementInView(header, 150, 100)) {
      const id = header.getAttribute("id");

      sidebarLinks.forEach((link) => {
        link.parentElement.classList.remove("selected");

        if (link.getAttribute("href") === `#${id}`) {
          link.parentElement.classList.add("selected");
        }
      });

      break;
    }
  }
}

// Utility: check if element is in view range
function elementInView(el, topOffset = 150, bottomOffset = 100) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= topOffset && rect.top >= 0) ||
    (rect.top >= 0 && rect.bottom <= window.innerHeight + bottomOffset)
  );
}

// Smooth scroll on sidebar link click
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetHeader = document.getElementById(targetId);

    if (targetHeader) {
      targetHeader.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Refresh highlighting after scroll
      setTimeout(updateSidebar, 300);
    }
  });
});
