'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});





/**
 * Download CV functionality
 */

const downloadCvBtn = document.querySelector("[data-cv-btn]");

downloadCvBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior

  // Trigger the download of the CV
  const link = document.createElement("a");
  link.href = "https://www.canva.com/design/DAF6oWosJQ8/1GvpbJu1XBvDylJ5O9MR6g/edit?utm_content=DAF6oWosJQ8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton "; // Replace with the actual path to your CV file
  link.download = "Shyam Mohan Verma-CV.pdf"; // Specify the downloaded file name
  link.click(); // Programmatically click the link to trigger the download
});