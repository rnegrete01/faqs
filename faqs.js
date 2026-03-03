/**
 * Author: Rafael Negrete Fonseca
 * Date: 3/3/2026
 * GitHub Project URL: https://github.com/rnegrete01/faqs
 * README: Inside GitHub Project URL
 */

// SETUP GLOBAL VARIABLES
/**
 * This element displays an image that changes when the 'h2' element
 * changes. Every h2 element has its own image that is displayed
 * when the user clicks on the h2 heading.
 * @constant {Element}
 */
const faqImage = document.querySelector("#faq_image");

/**
 * The original source of the default image. This source changes depending on the clicked 'h2' heading
 * @constant {Element}
 */
const faqImageOrigSrc = faqImage.src;

/**
 * The original alt of the default image. This alt changes depending on the clicked 'h2' heading.
 * @constant {Element}
 */
const faqImageOrigAtl = faqImage.alt;

/**
 * List of all the 'h2' elements inside the 'faqs' body, inside the html file.
 * @type {NodeListOf<Element>}
 */
const h2s = document.querySelectorAll("#faqs h2")

// SETUP THE EVENT HANDLER (When an H2 is clicked)
const toggleVisibility = evt => {
    // Figure out exactly which H2 heading the user just clicked and save it to a variable using evt.currentTarget;
    const current_h2 = evt.currentTarget;

    // Create a variable called 'allClosed' and set it to FALSE
    // this will be used to reset the default image if all FAQs are closed
    let allClosed = true;

    //LOOP through every H2 heading (h2s) in your saved list
    for (let h2 of h2s){

        const div = h2.nextElementSibling; // div of that current h2

        if (h2 === current_h2){

            h2.classList.toggle("minus");
            div.classList.toggle("open")

            if (h2.classList.contains("minus")){
                allClosed = false; //false because something is open, meaning all closed has to be false.

                const new_image_source = h2.getAttribute("data-img");
                const new_image_alt = h2.getAttribute("data-alt");

                faqImage.src = new_image_source;
                faqImage.alt = new_image_alt;
            }
        }
    }

    if (allClosed){
        faqImage.src = faqImageOrigSrc;
        faqImage.alt = faqImageOrigAtl;
    }

    evt.preventDefault();
}

// INITIALIZATION - WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
    for (let h2 of h2s){
        h2.addEventListener("click", toggleVisibility);
    }
})