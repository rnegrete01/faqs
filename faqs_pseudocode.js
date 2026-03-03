// SETUP GLOBAL VARIABLES
const faqImage = document.querySelector("#faq_image")
const faqImageOrigSrc = faqImage.src;
const faqImageOrigAtl = faqImage.alt;
//Find all the <H2> elements inside the FAQ <body> and save them as a list using querySelectorAll "#faqs h2"
const h2s = document.querySelectorAll("#faqs h2")

// SETUP THE EVENT HANDLER (When an H2 is clicked)
const toggleVisibility = evt => {
    1. Figure out exactly which H2 heading the user just clicked and save it to a variable using
	   const ct = evt.currentTarget;
	
    2. Create a variable called 'allClosed' and set it to FALSE
	   this will be used to reset the default image if all FAQs are closed
    
    3. LOOP through every H2 heading (h2s) in your saved list
    
        IF the current heading in the loop is the one the user clicked:
            - Check if this heading already has the "minus" class.
              If it does, change your 'allClosed' tracker to TRUE.

            - Toggle the "minus" class on this clicked heading.
            - Toggle the "open" class on the answer element directly below it.

            - Get the new image source stored in this heading's 'data-img' attribute.
            - Get the new alt text stored in this heading's 'data-alt' attribute.
            - Update the main FAQ image to show this new source and alt text.
            
        ELSE (it is a different heading):
            - Remove the "minus" class from this heading.
            - Remove the "open" class from the answer element directly below it.
            
    4. IF your 'allClosed' tracker is TRUE:
        - Change the main FAQ image's source back to the original default source.
        - Change the main FAQ image's alt text back to the original default alt text.
        
    5. Prevent the browser's default click behavior.

// INITIALIZATION - WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
    1. LOOP through your saved list of all h2 headings (hs2).
    2. For each heading, attach a "click" event listener that triggers the 'toggleVisibility' function.